const PENDING = void 0;
const FULFILLED = 1;
const REJECTED = 2;
const PROMISE_ID = Math.random().toString(36).substring(2);
let id = 0;
let len = 0; // 队列长
const queue = new Array(1000);
const noop = () => {};

let asap = function asap(callback, arg) {
  queue[len] = callback; // 执行的函数
  queue[len + 1] = arg; // 函数的参数

  len += 2;
  console.log({ len });
  if (len === 2) {
    // to flush queue
    setTimeout(flush);
  }
};

function flush() {
  for (let i = 0; i < len; i += 2) {
    let callback = queue[i],
      arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function publish(promise) {
  let subs = promise._subscribers;
  let settled = promise._state;

  if (subs.length === 0) return;

  let child,
    callback,
    detail = promise._result;

  for (let i = 0; i < subs.length; i += 3) {
    child = subs[i];
    callback = subs[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function fulfill(promise, value) {
  // 只有 pending 状态的 promise 才能改变状态
  // rejected 或 resolved 了的状态都已经完成了，不能再改变
  if (promise._state !== PENDING) return;

  promise._result = value;
  promise._state = FULFILLED;
  if (promise._subscribers.length !== 0) {
    // flush 所有任务, -> publish(promise)
    asap(publish, promise);
  }
}

function resolve(promise, value) {
  console.log(promise, value, "resolved");
  // TODO 1. promise === value
  // TODO 2. value 是函数或对象情况
  // 3. 普通类型的值，直接完成
  fulfill(promise, value);
}

function reject(promise, reason) {
  console.log(promise, reason, "rejected");
}

// 1. 承接上一个 promise 任务的结果，2. 衔接下一个 promise 的桥梁
function then(onFulfillment, onRejection) {
  const parent = this;

  const child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  const { _state } = parent;

  if (_state) {
    const callback = arguments[_state - 1];
    asap(() => invokeCallback(_state, child, callback, parent._result));
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }
  return child;
}

function subscribe(parent, child, onFulfillment, onRejection) {
  console.log("subscribe");
  let { _subscribers } = parent;
  let { length } = _subscribers;

  parent._onerror = null;
  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function invokeCallback(settled, promise, callback, detail) {}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

class Promise {
  constructor(resolver) {
    // result 任务执行的结果, state 当前 promise 的状态(fulfilled/rejected/pending)
    this[PROMISE_ID] = id++;
    this._result = this._state = undefined;
    this._subscribers = [];
    if (!this instanceof Promise) throw new TypeError("必须 new Promise");

    const _this = this;
    try {
      resolver(
        function resolvePromise(value) {
          resolve(_this, value);
        },
        function rejectPromise(reason) {
          reject(_this, reason);
        }
      );
    } catch (e) {
      reject(this, e);
    }
  }
}

// test ==========================

Promise.prototype.then = then;
module.exports = Promise;

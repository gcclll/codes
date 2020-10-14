const noop = () => {};
function bind(fn, thisArg) {
  return function () {
    return fn.apply(thisArg, arguments);
  };
}

class Promise {
  _state = Promise.PENDING; // 当前 promise 状态
  _result; // promise 结果
  _subs = []; // 订阅 then 的 resolver 和 reject
  static PENDING = 0;
  static FULFILL = 1;
  static REJECT = 2;

  constructor(resolver) {
    try {
      resolver(bind(this._resolve, this), bind(this._reject, this));
    } catch (e) {
      reject(e);
    }
  }

  _fulfill(value) {
    if (this._state !== Promise.PENDING) {
      return;
    }

    this._result = value;
    this._state = Promise.FULFILL;

    if (this._subs.length > 0) {
      this.publish();
    }
  }

  _resolve(value) {
    if (this === value) {
      throw new TypeError("不能返回自身。");
    } else if (typeof value === "object" || typeof value === "function") {
      // TODO
    } else {
      this._fulfill(value);
    }
  }

  _reject(reason) {
    if (this._state !== Promise.PENDING) {
      return;
    }
    this._state = Promise.REJECT;
    this._result = reason;
    this.publish();
  }

  publish() {
    const subs = this._subs;
    console.log(subs, "00");
    for (let i = 0; i < subs.length; i += 3) {
      const child = subs[i],
        callback = subs[i + this._state];

      if (child) {
        // TODO
      } else {
        callback(this._result);
      }
    }

    this._subs.length = 0;
  }

  then(onFulfill, onReject) {
    const child = new this.constructor(noop);
    const len = this._subs.length;

    switch (this._state) {
      case Promise.PENDING:
        // 订阅 resolve + reject
        this._subs[len] = void 0; // TODO child;
        this._subs[len + Promise.FULFILL] = onFulfill;
        this._subs[len + Promise.REJECT] = onReject;
        break;
      case Promise.FULFILL:
        onFulfill && onFulfill(this._result);
        break;
      case Promise.REJECT:
        onReject && onReject(this._result);
        break;
    }

    return child;
  }
}

// test ======
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 1000);
});

p.then(
  (value) => {
    console.log(value, "then resolve 0");
  },
  (reason) => {
    console.log(reason, "then reject 0");
  }
);

p.then(
  (value) => {
    console.log(value, "then resolve 1");
  },
  (reason) => {
    console.log(reason, "then reject 2");
  }
);

const bind = Function.prototype.bind
  ? (fn, ctx) => fn.bind(ctx)
  : (fn, ctx) => (...args) => fn.call(ctx, ...args)

/**
 * 手动触发 DOM 元素事件
 * @param {} el
 * @param {} type
 */
function trigger(el, type) {
  if (!document) return
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

module.exports = { bind, trigger }

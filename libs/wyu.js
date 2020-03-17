const bind = Function.prototype.bind
  ? (fn, ctx) => fn.bind(ctx)
  : (fn, ctx) => (...args) => fn.call(ctx, ...args)

module.exports = { bind }

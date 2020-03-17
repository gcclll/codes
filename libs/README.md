# b

## bind

绑定作用域，返回新的固定作用域的函数。

### ES6 简版：

```js
const bind = Function.prototype.bind
  ? (fn, ctx) => fn.bind(ctx)
  : (fn, ctx) => (...args) => fn.call(ctx, ...args)	
```

### ES5 版：

```js
function polyfillBind(fn, ctx) {    
    function boundFn(a) {        
        var l = arguments.length;        
        return l ?
            (
                l > 1 ?
                fn.apply(ctx, arguments) :
                fn.call(ctx, a)
            ):
            fn.call(ctx)
    }
    boundFn._length = fn.length;    
    return boundFn
}

function nativeBind(fn, ctx) {    
    return fn.bind(ctx)

}

var bind = Function.prototype.bind ?
    nativeBind :
    polyfillBind;
```


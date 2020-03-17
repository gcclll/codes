function bind() {
  const { bind } = require('./wyu')

  const scope = {
    name: 'wyu',
  }

  global.name = 'bind'

  function print(...args) {
    console.log(this.name, args)
  }

  print('before bind.')
  const print1 = bind(print, scope)
  print1('after bind.')
}

const test = {
  bind,
}

test.bind()

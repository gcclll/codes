/**
 * 1. use for, 72ms/81.46%/35.9mb
 * @param {} x
 * @returns {}
 */
function reverse(x) {
  const isNeg = x < 0,
    max = 0x7fffffff
  const neg = Math.abs(x)

  // overflow
  if (neg > max) return 0

  const str = neg.toString()
  const len = str.length

  let res = ''
  for (let i = len - 1; i >= 0; i--) {
    res += str[i]
  }

  if (res > max) return 0

  return isNeg ? -1 * +res : res
}

/**
 * 2. use map, 76 ms/65.62%/36.1
 * @param {} x
 * @returns {}
 */
function reverse(x) {
  const isNeg = x < 0,
    max = 0x7fffffff
  const neg = Math.abs(x)

  // overflow
  if (neg > max) return 0

  const str = neg.toString()
  const len = str.length

  let res = ''
  res = +str
    .split('')
    .map((_, i) => str[len - i - 1])
    .join('')

  if (res > max) return 0

  return isNeg ? -1 * +res : res
}

/**
 * 3. use math operation, 68 ms/92.18%/35.7mb
 * @param {} x
 */
function reverse(x) {
  let isNeg = x < 0,
    _x = isNeg ? -1 * x : x

  const max = 0x7fffffff

  if (_x > max) return 0

  let v = 0,
    n = 0

  while (_x > 0) {
    n = _x % 10
    v = v * 10 + n
    _x = Math.floor(_x / 10)
  }

  if (v > max) return 0

  return isNeg ? -1 * v : v
}

console.log(reverse(1534236469))

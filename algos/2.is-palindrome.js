/**
 * 1. use native `reverse()'
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
  return (
    x > 0 &&
    (x + '')
      .split('')
      .reverse()
      .join('') ===
      x + ''
  )
}

/**
 * 2. use `for`
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false

  let s = x + ''

  let v = []
  for (let i = s.length - 1; i >= 0; i--) {
    v.push(s[i])
  }

  return v.join('') === s
}

/**
 * 3. use divide comparation
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false

  let s = x + ''

  let l = s.length,
    isPa = true
  for (let i = 0; i < l; i++) {
    const _s = i,
      _e = l - i - 1
    const start = s[_s],
      end = s[_e]

    if (_s > _e) return isPa

    if (start !== end) isPa = false
  }

  return isPa
}

/**
 * 4. use math operation
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
  // negative is not palindrome
  if (x < 0 || (x && x % 10 === 0)) return false

  // overflow 32bit
  if (x > 0x7fffffff) return false

  let right = 0
  while (x > right) {
    // reverted num
    right = right * 10 + (x % 10)
    // cut num
    x = Math.floor(x / 10)
  }

  // if x has even count number, right bits will be one more then x
  // eg. 12221, x -> 12, right -> 122
  return x === right || x === Math.floor(right / 10)
}

const v = 121221 // 123
console.log(v, isPalindrome(v))

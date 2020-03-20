/**
 * 1. simple double circle
 * @param {Array} nums
 * @param {Number} target
 * @returns {Array}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] === nums[j]) return [i, j]
    }
  }

  return []
}

/**
 * 2. 利用 map 存储除当前参考值之外的 nums[i] - i ，值-索引对
 * 然后从这个 map 中去找最后的差值
 * @param {} nums
 * @param {} target
 * @returns {}
 */
function twoSum(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i]
    if (map.has(delta)) {
      return [map.get(delta), i]
    }

    map.set(nums[i], i)
  }

  return []
}

const nums = [0, 4, 3, 0],
  // [-3, 4, 3, 90],
  // [7, 2, 3, 3, 1],
  // [18, 2, 9, 7, 11, 15],
  // [19, 2, 7, 3, 4, 1, 10, 8, 12, 15],
  target = 0

let res = twoSum(nums, target)
console.log(res)

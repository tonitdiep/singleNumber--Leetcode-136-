// Leetcode136 Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Ex1)
// Input: nums = [2,2,1]
// Output: 1
// Constraints)
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
walkthru code-along (https://www.youtube.com/watch?v=lRGoZyjkZ3U)
var singleNumber = function(nums) {
nums =[2, 2, 1]
      //hash map check the keys (for of) value of something is done one time
    const ht = {}
    
    for (const num of nums) {

        ht[num] = ht[num] +1 || 1;

    }
    
    for (const key in ht) {
  // console.log('here', ht[key], 'this', ht, 'and this', key)
        if (ht[key] === 1 ) {
  // console.log('here', ht[key], 'this', ht, 'and this', key)
            return key;
        }
    }
}


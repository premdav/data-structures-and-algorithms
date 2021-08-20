// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum = (nums, target) => {
  const adds_up = [];
  let to_check = [...nums];
  let count = 0
  nums.forEach((num, numInd) => {
    to_check.shift();
      ++count
    to_check.forEach((check, checkInd) => {
        if (adds_up.length) return true;
      if (num + check === target) {
        adds_up.push(numInd, count + checkInd);
        return true;
      }
    });
    if (adds_up.length) return true;
  });
  return adds_up;
};
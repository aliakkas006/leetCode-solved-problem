/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * Two pointer
 * If input array is sorted
 */
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum =  numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];

    if (sum > target) right--;
    else left++;
  }
};

console.log(twoSum([2,7,11,15], 9));

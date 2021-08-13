
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let arr = nums.sort((a,b) => {return a - b})
    let largest = arr.indexOf(arr[arr.length-1])
    return arr[largest-1]
}

function sortedSquares(nums) {
    let result = [];

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.push(nums[left] ** 2);
            left++;
        } else {
            result.push(nums[right] ** 2);
            right--;
        }
    }

    return result.reverse();
}

let nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));

function findNumbers(nums) {
    let count = 0;

    for (num of nums) {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    }

    return count;
}

let nums = [12,345,2,6,7896];
console.log(findNumbers(nums));
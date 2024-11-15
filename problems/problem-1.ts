// Problem 1
const sumArray = (nums: number[]): number => {
    return nums.reduce((acc, number) => acc + number, 0)
};
console.log(sumArray([1, 2, 1]));

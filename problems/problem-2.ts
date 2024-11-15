// Problem 2
const removeDuplicates = (arr: number[]) : number[] => {
    const noDuplicates: number[] = []
    arr.forEach((num: number) => {    
        if(!noDuplicates.includes(num)){
            noDuplicates.push(num)
        }   
    })
    return noDuplicates;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
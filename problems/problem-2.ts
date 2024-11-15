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

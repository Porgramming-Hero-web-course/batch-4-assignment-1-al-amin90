// Problem 3
const countWordOccurrences = (str: string, value: string) : number => {
    let count: number = 0;

    const strSplit: string[] = str.split(" ")
    strSplit.forEach((e: string) => {
        if(e.toLowerCase() === value.toLowerCase()){
            count++;
        }
    });
    return count;
}

console.log(countWordOccurrences("I love typescript", "Typescript"));
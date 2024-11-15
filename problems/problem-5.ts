// Problem 5
type Person = {
    name: string;
    age: number;
}

const getProperty = <T extends {name: string}>(info: T, key: keyof T) => {
    return info[key];
}

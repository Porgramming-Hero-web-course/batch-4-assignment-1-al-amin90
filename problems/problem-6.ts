// Problem 6

interface Profile {
    name: string;
    age: number;
    email: string
}

const updateProfile = (obj:Profile, update: object) => {
    return {...obj, ...update}
}
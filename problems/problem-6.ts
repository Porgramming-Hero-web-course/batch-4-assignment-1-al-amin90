// Problem 6

interface Profile {
    name: string;
    age: number;
    email: string
}

const updateProfile = (obj:Profile, update: object) => {
    return {...obj, ...update}
}

const myProfile: Profile = { 
    name: "Alice", 
    age: 25, 
    email: "alice@example.com" 
};

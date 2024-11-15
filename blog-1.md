
# The significance of union and intersection types.


I learned to implement union types to define variables that can hold multiple types of values. Additionally, I explored intersection types to combine multiple types into one, which is beneficial for crafting more complex type definitions requiring multiple characteristics.


## 1. Union Types

Union types allow a value to be one of several types.

```bash
  Example:
    type UserID = string | number;
    function getUserById(id: UserID) 
{ // `id` can be a string or a number}
```

## 2. Intersection Types

Intersection types combine multiple types into one.

```bash
  Example:
  type Person = { name: string };
  type Employee = {employeeld: number };
  type Staff = Person & Employee;
  const staff Member: Staff = {
    name: "Alice",
    employeeld: 123,
  };
```
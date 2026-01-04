const person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 30
}

const {firstName:name, lastName:surname, age:years_old} = person;

console.log(person);
console.log(name, surname, years_old);

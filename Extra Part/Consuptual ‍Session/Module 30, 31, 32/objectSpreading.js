const person1 = {
    name : 'Kamrul',
    age: 26
}

const person2 = {...person1};

person2.address = 'Barisal';
console.log(person1)
console.log(person2)
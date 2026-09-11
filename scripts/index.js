function separator() {
    console.log("--------------------");
}
let arr = [23, 21, 161, 42, 151, 612, 15, 62, 52];

arr.forEach(function (element, index) {
    console.log(`${index} - ${element}`);
});

separator();

let dividedArr = arr.map(function (element) {
    return element / 10;
});

dividedArr.forEach(function (element) {
    console.log(element);
});

separator();

let oddArr = arr.filter(function (element) {
    return element % 2 !== 0;
});

oddArr.forEach(function (element) {
    console.log(element);
});

separator();

let total = arr.reduce(function (total, element) {
    return total + element;
}, 0);

console.log(`total is ${total}`);

separator();

console.log(`Are any elements in arr odd ?: ${arr.some(function (element) {
    return element % 2 !== 0;
})}`);

separator();

console.log(`Are all elements in arr are odd ?: ${arr.every(function (element) {
    return element % 2 !== 0;
})}`);

separator();

console.log(`First even element in arr: ${arr.find(function (element) {
    return element % 2 === 0;
})}`);

separator();

console.log(`Last even element in arr: ${arr.findLast(function (element) {
    return element % 2 === 0;
})}`);

separator();


console.log(`First even element's index in arr: ${arr.findIndex(function (element) {
    return element % 2 === 0;
})}`);

separator();

console.log(`Last even element's index in arr: ${arr.findLastIndex(function (element) {
    return element % 2 === 0;
})}`);

separator();

let obj = {
    name: "Ibrahim",
    age: 28
};

console.log(obj);

separator();

let { name } = obj;

console.log(`name is: ${name}`);

separator();

let { age } = obj;

console.log(`age is: ${age}`);

separator();


function printDetails({ name, age }) {
    console.log(`name is: ${name}`);
    console.log(`age is: ${age}`);
}

printDetails(obj);

separator();

let number_1 = 15;
let number_2 = 35;


console.log(`--before--`)

console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);

console.log(`--after--`)

[number_1, number_2] = [number_2, number_1];

console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);
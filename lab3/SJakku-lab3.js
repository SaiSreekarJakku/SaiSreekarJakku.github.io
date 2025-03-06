// S S Jakku
// ITMD 541-01 Graduate Student

// Exercise #1
function minMaxAverage(numbers) {
    const total = numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((sum, num) => sum + num, 0) / total;
    
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`);
}

// Test cases for Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([15, -2, 7, 9, 0]);

// Exercise #2
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = str.toLowerCase().split('').reduce((acc, char) => 
        vowels.includes(char) ? acc + 1 : acc, 0);
    console.log(`${str}: ${count} vowels`);
}

// Test cases for Exercise 2
countVowels("summer");
countVowels("Programming");
countVowels("AeIoU");

// Exercise #3
function sortNumbers(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}] output Sorted Array: [${sorted}]`);
}

// Test cases for Exercise 3
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 8, 1, 12]);
sortNumbers([0, -5, 10, 7, -2]);

// Exercise #4
function celsiusToFahrenheit(celsius) {
    // Convert string to number if input is a string
    const celsiusNum = typeof celsius === 'string' ? parseFloat(celsius) : celsius;
    const fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise 4 (including graduate requirements)
celsiusToFahrenheit(40);      // Number test
celsiusToFahrenheit(0);       // Number test
celsiusToFahrenheit(-40);     // Number test
celsiusToFahrenheit("35");    // String test (graduate)
celsiusToFahrenheit("22.5");  // String test (graduate)

// Exercise #5 (Graduate Requirement)
function sortPeopleByAge(people) {
    const sorted = [...people].sort((a, b) => a.age - b.age);
    return sorted.map(person => 
        `${person.name} is ${person.age} and from ${person.city}`
    );
}

// Test cases for Exercise 5
const people1 = [
    {name: "John", age: 25, city: "Chicago"},
    {name: "Sarah", age: 19, city: "New York"},
    {name: "Mike", age: 32, city: "Los Angeles"},
    {name: "Emma", age: 22, city: "Boston"},
    {name: "Tom", age: 28, city: "Seattle"}
];
console.log("People Set 1:");
sortPeopleByAge(people1).forEach(str => console.log(str));

const people2 = [
    {name: "Alice", age: 45, city: "Houston"},
    {name: "Bob", age: 17, city: "Miami"},
    {name: "Carol", age: 29, city: "Denver"},
    {name: "David", age: 33, city: "Phoenix"},
    {name: "Eve", age: 24, city: "Portland"}
];
console.log("\nPeople Set 2:");
sortPeopleByAge(people2).forEach(str => console.log(str));

const people3 = [
    {name: "Ram", age: 44, city: "Mumbai"},
    {name: "Laxman", age: 19, city: "Delhi"},
    {name: "Bob", age: 27, city: "Hyderabad"},
    {name: "Sai", age: 37, city: "Jannaram"},
    {name: "Eknath", age: 25, city: "Nashik"}
];
console.log("\nPeople Set 3:");
sortPeopleByAge(people3).forEach(str => console.log(str));

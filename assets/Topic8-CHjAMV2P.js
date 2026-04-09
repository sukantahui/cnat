import{r as s,j as l}from"./index-DLefW0Tp.js";import{J as d}from"./JavaScriptProjectAnswerTemplate-DbSqaZHp.js";import"./CodeBlock-Bh9JCFem.js";import"./prism-CzJDobEc.js";import"./prism-json-D0UlpdKh.js";import"./file-code-DyHBv2VX.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";import"./play-Bonc3cvQ.js";import"./graduation-cap-CwQP43dU.js";import"./code-BIdVjFJT.js";import"./eye-off-B1nx00rT.js";import"./eye-s8A1LQPP.js";import"./lightbulb-3__15rKv.js";import"./terminal-J42ocbPV.js";const p=`// Create Array and Access Elements\r
const arr = [10, 20, 30, 40, 50];\r
console.log('Original array:', arr);\r
console.log('Length:', arr.length);\r
console.log('First element:', arr[0]);\r
console.log('Last element:', arr[arr.length - 1]);\r
\r
// Modify an element\r
arr[1] = 25;\r
console.log('After change:', arr);\r
`,f=`// Push and Pop Demo\r
let fruits = ['apple', 'banana'];\r
console.log('Initial:', fruits);\r
\r
// Push\r
fruits.push('orange');\r
console.log('After push:', fruits);\r
\r
// Pop\r
const removed = fruits.pop();\r
console.log('After pop:', fruits);\r
console.log('Removed element:', removed);\r
`,g=`// Shift and Unshift Demo\r
let numbers = [2, 3, 4];\r
console.log('Initial:', numbers);\r
\r
// Unshift\r
numbers.unshift(1);\r
console.log('After unshift(1):', numbers);\r
\r
// Shift\r
const shifted = numbers.shift();\r
console.log('After shift:', numbers);\r
console.log('Shifted element:', shifted);\r
`,h=`// Splice Practice\r
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];\r
console.log('Original:', months);\r
\r
// Remove two months starting at index 1\r
const removed = months.splice(1, 2);\r
console.log('After removal:', months);\r
console.log('Removed:', removed);\r
\r
// Replace element at index 3 (original array is now ['Jan','Apr','May'] after removal)\r
months.splice(3, 1, 'Jun');\r
console.log('After replacement:', months);\r
\r
// Insert two months at index 2 without deleting\r
months.splice(2, 0, 'New1', 'New2');\r
console.log('After insertion:', months);\r
`,x=`// Slice and Concat\r
const arr1 = [1, 2, 3, 4, 5];\r
const arr2 = [6, 7, 8];\r
\r
// Slice (extract indices 1 to 4, exclusive of end)\r
const slice = arr1.slice(1, 4);\r
console.log('Slice arr1[1..4):', slice);\r
\r
// Concat\r
const combined = arr1.concat(arr2);\r
console.log('Concatenated:', combined);\r
\r
// Original arrays unchanged\r
console.log('Original arr1:', arr1);\r
console.log('Original arr2:', arr2);\r
`,b=`// Searching with indexOf and includes\r
const numbers = [5, 10, 15, 20];\r
\r
const index = numbers.indexOf(15);\r
console.log('indexOf(15):', index); // 2\r
\r
console.log('includes(10):', numbers.includes(10)); // true\r
console.log('includes(25):', numbers.includes(25)); // false\r
`,y=`// Find and FindIndex\r
const numbers = [3, 7, 2, 9, 4];\r
\r
// Find first even number\r
const firstEven = numbers.find(num => num % 2 === 0);\r
console.log('First even:', firstEven); // 2\r
\r
// Find its index\r
const evenIndex = numbers.findIndex(num => num % 2 === 0);\r
console.log('Index of first even:', evenIndex); // 2\r
`,w=`// For Loop Iteration\r
const nums = [1, 2, 3, 4, 5];\r
let sum = 0;\r
for (let i = 0; i < nums.length; i++) {\r
    sum += nums[i];\r
}\r
console.log('Sum =', sum);\r
`,R=`// For...of Loop\r
const colors = ['red', 'green', 'blue'];\r
for (const color of colors) {\r
    console.log(color);\r
}\r
`,_=`// forEach Method\r
const fruits = ['apple', 'banana', 'cherry'];\r
fruits.forEach((fruit, index) => {\r
    console.log(\`\${index}: \${fruit}\`);\r
});\r
`,A=`// Map Method\r
const numbers = [1, 2, 3, 4];\r
const doubled = numbers.map(num => num * 2);\r
console.log('Doubled:', doubled);\r
`,v=`// Filter Method\r
const numbers = [1, 2, 3, 4, 5, 6];\r
const evens = numbers.filter(num => num % 2 === 0);\r
console.log('Evens:', evens);\r
`,j=`// Reduce Method\r
const numbers = [10, 20, 30, 40];\r
const sum = numbers.reduce((acc, curr) => acc + curr, 0);\r
console.log('Sum =', sum);\r
`,O=`// Combined Map and Filter\r
const numbers = [1, 2, 3, 4, 5, 6];\r
const evenSquares = numbers\r
    .filter(num => num % 2 === 0)\r
    .map(num => num * num);\r
console.log('Even squares:', evenSquares); // [4, 16, 36]\r
`,E=`// Array of Objects Manipulation\r
const users = [\r
    { name: 'Alice', age: 25 },\r
    { name: 'Bob', age: 17 },\r
    { name: 'Charlie', age: 20 }\r
];\r
\r
const adults = users\r
    .filter(user => user.age > 18)\r
    .map(user => user.name);\r
console.log('Adults:', adults); // ['Alice', 'Charlie']\r
`,I=`// Remove Duplicates\r
function removeDuplicates(arr) {\r
    return arr.filter((item, index) => arr.indexOf(item) === index);\r
}\r
\r
const numbers = [1, 2, 2, 3, 4, 4, 5];\r
const unique = removeDuplicates(numbers);\r
console.log('Unique:', unique); // [1, 2, 3, 4, 5]\r
`,F=`// Flatten Nested Arrays\r
function flatten(arr) {\r
    return arr.reduce((acc, curr) => acc.concat(curr), []);\r
}\r
\r
const nested = [[1, 2], [3, 4], [5, 6]];\r
const flat = flatten(nested);\r
console.log('Flattened:', flat); // [1, 2, 3, 4, 5, 6]\r
`,T=`// Group By Property\r
const people = [\r
    { name: 'Alice', age: 25 },\r
    { name: 'Bob', age: 17 },\r
    { name: 'Charlie', age: 25 }\r
];\r
\r
const grouped = people.reduce((acc, person) => {\r
    const age = person.age;\r
    if (!acc[age]) acc[age] = [];\r
    acc[age].push(person.name);\r
    return acc;\r
}, {});\r
\r
console.log('Grouped by age:', grouped);\r
// { 25: ['Alice', 'Charlie'], 17: ['Bob'] }\r
`,C=`// Chaining Methods\r
const numbers = [5, 12, 8, 15, 3];\r
\r
const result = numbers\r
    .filter(num => num > 10)\r
    .map(num => num * num)\r
    .reduce((sum, square) => sum + square, 0);\r
\r
console.log('Sum of squares of numbers > 10:', result); // 144 + 225 = 369\r
`,S=`// Custom Sort\r
const people = [\r
    { name: 'Alice', age: 25 },\r
    { name: 'Bob', age: 17 },\r
    { name: 'Charlie', age: 20 }\r
];\r
\r
people.sort((a, b) => a.age - b.age);\r
console.log('Sorted by age:', people);\r
// [{ name:'Bob', age:17 }, { name:'Charlie', age:20 }, { name:'Alice', age:25 }]\r
`,B="JavaScript Array Methods – 20 Practical Projects",M="Web Development (JavaScript)",U="General",q=["Browser Console","VS Code","Any modern browser"],P={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},k=JSON.parse('[{"projectId":"ARR001","title":"Create Array and Access Elements","difficulty":"Beginner","description":"Create an array of numbers. Log its length, access the first and last elements, and change an element by index.","exampleText":"Array: [10, 20, 30, 40, 50]","exampleOutput":"Length: 5, First: 10, Last: 50, After change: [10, 25, 30, 40, 50]","answerFile":"./answers/ARR001.js","learningOutcome":"Understanding array creation, length property, and indexing.","logicExplanation":"Arrays in JavaScript are zero‑indexed lists. You can create them using `[]` or `new Array()`. The `length` property gives the number of elements. Access elements by index, e.g., `arr[0]`.","codeExplanation":"This script creates an array of numbers, logs its length, accesses individual elements, and modifies an element by index."},{"projectId":"ARR002","title":"Push and Pop Demo","difficulty":"Beginner","description":"Create an array of fruits. Use push to add a fruit, then pop to remove the last fruit. Log the array after each step.","exampleText":"Initial: [\'apple\', \'banana\']","exampleOutput":"After push: [\'apple\', \'banana\', \'orange\']; After pop: [\'apple\', \'banana\']","answerFile":"./answers/ARR002.js","learningOutcome":"Using mutating methods push and pop.","logicExplanation":"`push()` adds one or more elements to the end of an array and returns the new length. `pop()` removes the last element and returns it. Both modify the original array.","codeExplanation":"The code demonstrates `push()` and `pop()` by adding a new element to the end and removing the last one, printing the array after each operation."},{"projectId":"ARR003","title":"Shift and Unshift Demo","difficulty":"Beginner","description":"Start with an array of numbers. Use unshift to add a number at the beginning, then shift to remove the first element. Log the array.","exampleText":"Initial: [2, 3, 4]","exampleOutput":"After unshift(1): [1,2,3,4]; After shift: [2,3,4]","answerFile":"./answers/ARR003.js","learningOutcome":"Using shift and unshift to manipulate array start.","logicExplanation":"`unshift()` adds elements to the beginning of an array, shifting existing elements to higher indices. `shift()` removes the first element and returns it, shifting the rest down.","codeExplanation":"The script uses `unshift()` to prepend a new element, then `shift()` to remove the first element, showing the array before and after."},{"projectId":"ARR004","title":"Splice Practice","difficulty":"Intermediate","description":"Given an array of months, use splice to remove two months starting from index 1, replace an element at index 3, and insert two new months at index 2 without deleting.","exampleText":"[\'Jan\',\'Feb\',\'Mar\',\'Apr\',\'May\']","exampleOutput":"After operations: [\'Jan\',\'Mar\',\'New1\',\'New2\',\'Apr\']","answerFile":"./answers/ARR004.js","learningOutcome":"Mastering splice for removal, replacement, and insertion.","logicExplanation":"`splice()` is a versatile mutating method. It can remove, replace, or insert elements. Syntax: `array.splice(start, deleteCount, ...items)`.","codeExplanation":"This example demonstrates removing two elements starting at index 1, replacing an element, and inserting new elements without deletion."},{"projectId":"ARR005","title":"Slice and Concat","difficulty":"Beginner","description":"Use slice to extract a portion of an array, and concat to merge two arrays. Ensure original arrays remain unchanged.","exampleText":"arr1 = [1,2,3,4,5]; arr2 = [6,7,8]","exampleOutput":"slice(1,4): [2,3,4]; concat: [1,2,3,4,5,6,7,8]","answerFile":"./answers/ARR005.js","learningOutcome":"Using non‑mutating methods slice and concat.","logicExplanation":"`slice()` returns a shallow copy of a portion of an array without modifying the original. `concat()` merges two or more arrays into a new array.","codeExplanation":"The code creates a subarray using `slice()` and combines two arrays with `concat()`, proving that the original arrays remain unchanged."},{"projectId":"ARR006","title":"Searching with indexOf and includes","difficulty":"Beginner","description":"Given an array of numbers, find the index of a specific number using indexOf, and check if a number exists using includes.","exampleText":"[5, 10, 15, 20]","exampleOutput":"indexOf(15): 2; includes(10): true; includes(25): false","answerFile":"./answers/ARR006.js","learningOutcome":"Using indexOf and includes for searching.","logicExplanation":"`indexOf()` returns the first index of a given element, or -1 if not found. `includes()` returns a boolean indicating whether the element exists in the array.","codeExplanation":"This script searches for a number in an array, logs its index if found, and checks for presence with `includes()`."},{"projectId":"ARR007","title":"Find and FindIndex","difficulty":"Intermediate","description":"From an array of numbers, use find to get the first even number, and findIndex to get its index.","exampleText":"[3, 7, 2, 9, 4]","exampleOutput":"First even: 2, index: 2","answerFile":"./answers/ARR007.js","learningOutcome":"Using find and findIndex with callbacks.","logicExplanation":"`find()` returns the first element that satisfies a testing function, or `undefined`. `findIndex()` returns the index of that element, or -1 if none satisfies.","codeExplanation":"The code finds the first even number in an array using `find()` and its index using `findIndex()`."},{"projectId":"ARR008","title":"For Loop Iteration","difficulty":"Beginner","description":"Calculate the sum of all numbers in an array using a classic for loop.","exampleText":"[1, 2, 3, 4, 5]","exampleOutput":"Sum = 15","answerFile":"./answers/ARR008.js","learningOutcome":"Basic iteration with for loop.","logicExplanation":"A classic `for` loop allows iteration using an index variable, often from 0 to `array.length - 1`. It gives full control over the iteration process.","codeExplanation":"The script calculates the sum of array elements using a `for` loop and prints the result."},{"projectId":"ARR009","title":"For...of Loop","difficulty":"Beginner","description":"Iterate over an array using for...of and log each element to the console.","exampleText":"[\'red\', \'green\', \'blue\']","exampleOutput":"red\\ngreen\\nblue","answerFile":"./answers/ARR009.js","learningOutcome":"Using for...of for simpler iteration.","logicExplanation":"`for...of` iterates over iterable values (like arrays) directly, giving each element value without needing an index. It\'s cleaner for simple iterations.","codeExplanation":"This example uses `for...of` to print each element of an array to the console."},{"projectId":"ARR010","title":"forEach Method","difficulty":"Beginner","description":"Use forEach to log each element along with its index.","exampleText":"[\'apple\', \'banana\', \'cherry\']","exampleOutput":"0: apple\\n1: banana\\n2: cherry","answerFile":"./answers/ARR010.js","learningOutcome":"Using forEach with index parameter.","logicExplanation":"`forEach()` executes a provided function once for each array element. It\'s a higher‑order method that abstracts the loop and is commonly used for side effects.","codeExplanation":"The script uses `forEach()` to log each element and its index, demonstrating the method\'s callback."},{"projectId":"ARR011","title":"Map Method","difficulty":"Beginner","description":"Use map to create a new array where each number is doubled.","exampleText":"[1, 2, 3, 4]","exampleOutput":"[2, 4, 6, 8]","answerFile":"./answers/ARR011.js","learningOutcome":"Transforming arrays with map.","logicExplanation":"`map()` creates a new array by applying a function to every element of the original array. It does not mutate the original array.","codeExplanation":"This code doubles each number in an array using `map()` and stores the result in a new array."},{"projectId":"ARR012","title":"Filter Method","difficulty":"Beginner","description":"Use filter to extract all even numbers from an array.","exampleText":"[1, 2, 3, 4, 5, 6]","exampleOutput":"[2, 4, 6]","answerFile":"./answers/ARR012.js","learningOutcome":"Filtering arrays with filter.","logicExplanation":"`filter()` creates a new array with all elements that pass a test implemented by a function. It\'s useful for extracting subsets.","codeExplanation":"The script filters out all odd numbers, keeping only even numbers, and prints the filtered array."},{"projectId":"ARR013","title":"Reduce Method","difficulty":"Intermediate","description":"Use reduce to calculate the sum of all numbers in an array.","exampleText":"[10, 20, 30, 40]","exampleOutput":"Sum = 100","answerFile":"./answers/ARR013.js","learningOutcome":"Aggregating arrays with reduce.","logicExplanation":"`reduce()` executes a reducer function on each element, resulting in a single output value. It can be used for summing, counting, grouping, etc.","codeExplanation":"This example sums all numbers in an array using `reduce()` and logs the total."},{"projectId":"ARR014","title":"Combined Map and Filter","difficulty":"Intermediate","description":"From an array of numbers, first filter out odd numbers, then map the even numbers to their squares.","exampleText":"[1, 2, 3, 4, 5, 6]","exampleOutput":"[4, 16, 36]","answerFile":"./answers/ARR014.js","learningOutcome":"Chaining array methods.","logicExplanation":"Chaining higher‑order methods is common. Here we filter an array to keep only even numbers, then map each even to its square.","codeExplanation":"The code first filters evens, then maps them to squares, resulting in an array of squares of even numbers."},{"projectId":"ARR015","title":"Array of Objects Manipulation","difficulty":"Intermediate","description":"Given an array of user objects (name, age), extract the names of users older than 18 using filter and map.","exampleText":"[{name:\'Alice\',age:25},{name:\'Bob\',age:17},{name:\'Charlie\',age:20}]","exampleOutput":"[\'Alice\', \'Charlie\']","answerFile":"./answers/ARR015.js","learningOutcome":"Working with arrays of objects.","logicExplanation":"When arrays contain objects, you often need to extract or transform properties. `map()` and `filter()` work with objects as well.","codeExplanation":"Given an array of user objects, the script extracts names of users older than 18 using `filter()` and `map()`."},{"projectId":"ARR016","title":"Remove Duplicates","difficulty":"Intermediate","description":"Write a function that removes duplicate elements from an array (preserving order) using filter and indexOf.","exampleText":"[1, 2, 2, 3, 4, 4, 5]","exampleOutput":"[1, 2, 3, 4, 5]","answerFile":"./answers/ARR016.js","learningOutcome":"Removing duplicates with filter.","logicExplanation":"One way to remove duplicates is to use `filter()` with `indexOf()` to keep only the first occurrence of each element.","codeExplanation":"The code removes duplicate numbers from an array, returning a new array with unique values."},{"projectId":"ARR017","title":"Flatten Nested Arrays","difficulty":"Expert","description":"Write a function that flattens an array of arrays into a single array using reduce and concat.","exampleText":"[[1,2],[3,4],[5,6]]","exampleOutput":"[1,2,3,4,5,6]","answerFile":"./answers/ARR017.js","learningOutcome":"Flattening with reduce.","logicExplanation":"Flattening a nested array means converting it to a single‑level array. This can be done with `reduce()` or the newer `flat()` method. Here we implement it manually.","codeExplanation":"The script uses `reduce()` and `concat()` to flatten an array of arrays into one array."},{"projectId":"ARR018","title":"Group By Property","difficulty":"Expert","description":"Given an array of people objects, group them by their age using reduce. The result should be an object where keys are ages and values are arrays of names.","exampleText":"[{name:\'Alice\',age:25},{name:\'Bob\',age:17},{name:\'Charlie\',age:25}]","exampleOutput":"{25: [\'Alice\',\'Charlie\'], 17: [\'Bob\']}","answerFile":"./answers/ARR018.js","learningOutcome":"Using reduce for grouping.","logicExplanation":"Grouping objects by a property can be done with `reduce()`. The accumulator is an object where keys are the property values, and values are arrays of matching objects.","codeExplanation":"Given an array of people, the code groups them by age using `reduce()`."},{"projectId":"ARR019","title":"Chaining Methods","difficulty":"Intermediate","description":"Chain filter, map, and reduce to: filter numbers > 10, map them to their squares, then sum the squares.","exampleText":"[5, 12, 8, 15, 3]","exampleOutput":"Sum of squares of numbers > 10 = 144 + 225 = 369","answerFile":"./answers/ARR019.js","learningOutcome":"Chaining higher‑order methods.","logicExplanation":"You can chain array methods like `filter()`, `map()`, and `reduce()` to perform complex transformations in a concise, readable way.","codeExplanation":"The example filters numbers greater than 10, maps them to their squares, and sums the squares in one chain."},{"projectId":"ARR020","title":"Custom Sort","difficulty":"Intermediate","description":"Sort an array of objects (people) by age in ascending order using sort with a custom comparator.","exampleText":"[{name:\'Alice\',age:25},{name:\'Bob\',age:17},{name:\'Charlie\',age:20}]","exampleOutput":"[{name:\'Bob\',age:17},{name:\'Charlie\',age:20},{name:\'Alice\',age:25}]","answerFile":"./answers/ARR020.js","learningOutcome":"Using sort with compare function.","logicExplanation":"`sort()` sorts an array in place. For objects, you provide a compare function. It mutates the original array.","codeExplanation":"The code sorts an array of objects (people) by age in ascending order using a custom comparator."}]'),c={projectCategory:B,subject:M,board:U,class:"Beginner / Intermediate",tools:q,institute:P,projects:k};function ee(){const[r,u]=s.useState(null);return s.useEffect(()=>{const t=Object.assign({"./topic8_files/answers/ARR001.js":p,"./topic8_files/answers/ARR002.js":f,"./topic8_files/answers/ARR003.js":g,"./topic8_files/answers/ARR004.js":h,"./topic8_files/answers/ARR005.js":x,"./topic8_files/answers/ARR006.js":b,"./topic8_files/answers/ARR007.js":y,"./topic8_files/answers/ARR008.js":w,"./topic8_files/answers/ARR009.js":R,"./topic8_files/answers/ARR010.js":_,"./topic8_files/answers/ARR011.js":A,"./topic8_files/answers/ARR012.js":v,"./topic8_files/answers/ARR013.js":j,"./topic8_files/answers/ARR014.js":O,"./topic8_files/answers/ARR015.js":E,"./topic8_files/answers/ARR016.js":I,"./topic8_files/answers/ARR017.js":F,"./topic8_files/answers/ARR018.js":T,"./topic8_files/answers/ARR019.js":C,"./topic8_files/answers/ARR020.js":S}),a={};Object.keys(t).forEach(e=>{const o=e.split("/").pop();a[o]=t[e]});const m=c.projects.map(e=>{const n=(e.answerFile||"").split("/").pop(),i=a[n];return i||console.warn(`⚠ Missing code file: ${n}`),{...e,answer:i||`// File "${n}" not found in answers folder`}});u({...c,projects:m})},[]),r?l.jsx(d,{data:r}):l.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{ee as default};

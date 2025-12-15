import{r as t,j as e,E as s}from"./index-6hdDbtc7.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Mutating Methods — push(), pop(), shift(), unshift(), splice()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Mutating methods modify the ",e.jsx("strong",{children:"original array"}),". This means the same array in memory is changed, not a new one."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Below you will see full syntax, explanation, return value, and multiple examples for each method."}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"1. push()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("strong",{children:"Adds one or more elements at the end"})," of the array."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsx("code",{children:"array.push(value1, value2, ...)"}),e.jsx("br",{}),e.jsx("strong",{children:"Returns:"})," new ",e.jsx("code",{children:"length"})," of the array."]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic push()
const nums = [1, 2, 3];
const result = nums.push(4);

console.log("Array:", nums);         // [1, 2, 3, 4]
console.log("Returned:", result);    // 4 (new length)


// Example 2: Adding multiple values
const students = ["Ritaja", "Devangshu"];
const newLen = students.push("Mounita", "Kaustav");

console.log(students);    // ["Ritaja", "Devangshu", "Mounita", "Kaustav"]
console.log(newLen);      // 4


// Example 3: push() with mixed values
const mixed = [];
mixed.push("Coder", 1977, true);

console.log(mixed);       // ["Coder", 1977, true]`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"2. pop()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("strong",{children:"Removes and returns the last element"})," of the array."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300",children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"array.pop()"}),e.jsx("br",{}),e.jsx("strong",{children:"Returns:"})," removed element (or ",e.jsx("code",{children:"undefined"})," if empty)"]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic pop()
const nums = [10, 20, 30];
const removed = nums.pop();

console.log("Removed:", removed);   // 30
console.log("Array:", nums);        // [10, 20]


// Example 2: Pop from single-item array
const skills = ["JavaScript"];
console.log(skills.pop());   // "JavaScript"
console.log(skills);         // []


// Example 3: Popping from empty array
const empty = [];
console.log(empty.pop());    // undefined`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"3. shift()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Removes and returns the ",e.jsx("strong",{children:"first"})," element."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300",children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"array.shift()"}),e.jsx("br",{}),e.jsx("strong",{children:"Returns:"})," removed element."]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic shift()
const items = ["html", "css", "js"];
const first = items.shift();

console.log("Removed:", first);  // "html"
console.log(items);              // ["css", "js"]


// Example 2: Using shift() as queue
const queue = ["Task1", "Task2"];
console.log(queue.shift());     // "Task1"
console.log(queue.shift());     // "Task2"
console.log(queue.shift());     // undefined`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"4. unshift()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Adds elements to the ",e.jsx("strong",{children:"beginning"})," of the array."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsx("code",{children:"array.unshift(value1, value2, ...)"}),e.jsx("br",{}),e.jsx("strong",{children:"Returns:"})," new array length"]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Adding at start
const tech = ["Python", "Java"];
const newLength = tech.unshift("JavaScript");

console.log(tech);        // ["JavaScript", "Python", "Java"]
console.log(newLength);   // 3


// Example 2: Multiple values
const arr = [3, 4];
arr.unshift(1, 2);

console.log(arr);         // [1, 2, 3, 4]`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"5. splice()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("strong",{children:"Most powerful mutating method."}),"Removes, inserts, or replaces elements."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsx("code",{children:"array.splice(start, deleteCount, item1, item2, ...)"}),e.jsx("br",{}),e.jsx("strong",{children:"Returns:"})," array of removed items"]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Remove items
const fruits = ["apple", "banana", "mango"];
const removed = fruits.splice(1, 1);

console.log("Removed:", removed);   // ["banana"]
console.log(fruits);                // ["apple", "mango"]


// Example 2: Insert items (no removal)
const colors = ["red", "blue"];
colors.splice(1, 0, "green", "yellow");

console.log(colors);  // ["red", "green", "yellow", "blue"]


// Example 3: Replace items
const nums = [100, 200, 300, 400];
const oldValues = nums.splice(1, 2, 20, 30, 40);

console.log("Replaced:", oldValues); // [200, 300]
console.log(nums);                   // [100, 20, 30, 40, 400]`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"splice()"})," is perfect for managing:"]}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsx("li",{children:"menus"}),e.jsx("li",{children:"playlist items"}),e.jsx("li",{children:"student lists"}),e.jsx("li",{children:"positions in arrays"})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Mutating methods are powerful but should be used carefully, especially in frameworks like React where immutability is encouraged. Still, understanding them is essential for mastering JavaScript arrays."})]})}}export{n as default};

import{r as s,j as e,E as a}from"./index-CNYl2d_K.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Non-Mutating Methods — slice() & concat()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Non-mutating methods return ",e.jsx("strong",{children:"new arrays"})," instead of modifying the original one. These methods are extremely important in modern JavaScript—especially in React and functional programming, where immutability helps keep data predictable."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Below you will learn full syntax, return type, usage explanation, and multiple examples for both methods."}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"1. slice()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"slice()"})," returns a portion of an array without changing the original."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300 leading-relaxed",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsx("code",{children:"array.slice(start, end)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Parameters:"}),e.jsx("br",{}),"• ",e.jsx("code",{children:"start"})," → starting index (inclusive) ",e.jsx("br",{}),"• ",e.jsx("code",{children:"end"})," → ending index (exclusive)",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," A ",e.jsx("strong",{children:"new array"})," containing selected elements."]}),e.jsx(a,{language:"javascript",initialCode:`// Example 1: Basic slice()
const numbers = [10, 20, 30, 40, 50];

const part = numbers.slice(1, 4);

console.log(part);       // [20, 30, 40]
console.log(numbers);    // original unchanged`}),e.jsx(a,{language:"javascript",initialCode:`// Example 2: Copy entire array
const names = ["Sukanta", "Ritaja", "Mounita"];

const copy = names.slice();
console.log(copy);       // ["Sukanta", "Ritaja", "Mounita"]`}),e.jsx(a,{language:"javascript",initialCode:`// Example 3: Negative index (count from end)
const nums = [100, 200, 300, 400, 500];

console.log(nums.slice(-3));     // [300, 400, 500]
console.log(nums.slice(-4, -1)); // [200, 300, 400]`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Because ",e.jsx("code",{children:"slice()"})," does not mutate the original array, it's perfect for pagination, partial lists, or creating safe copies."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"2. concat()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"concat()"})," merges two or more arrays and returns a new one."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300 leading-relaxed",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsx("code",{children:"array1.concat(array2, array3, ...)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," A ",e.jsx("strong",{children:"new array"})," containing all merged values."]}),e.jsx(a,{language:"javascript",initialCode:`// Example 1: Basic merging
const a = [1, 2];
const b = [3, 4];

const combined = a.concat(b);

console.log(combined); // [1, 2, 3, 4]
console.log(a);        // unchanged
console.log(b);        // unchanged`}),e.jsx(a,{language:"javascript",initialCode:`// Example 2: Multiple arrays
const x = [1];
const y = [2, 3];
const z = [4, 5];

const result = x.concat(y, z, [6, 7]);

console.log(result); // [1, 2, 3, 4, 5, 6, 7]`}),e.jsx(a,{language:"javascript",initialCode:`// Example 3: concat with mixed types
const data1 = ["Coder"];
const data2 = [1977, true, { city: "Barrackpore" }];

const finalData = data1.concat(data2);

console.log(finalData);
// ["Coder", 1977, true, { city: "Barrackpore" }]`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"concat()"})," is a clean alternative to using loops for merging lists, and it ensures your original arrays remain unchanged."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Non-mutating methods like ",e.jsx("code",{children:"slice()"})," and ",e.jsx("code",{children:"concat()"}),"help keep data immutable and predictable. Mastering them prepares you for advanced array operations and best practices used in React."]})]})}}export{r as default};

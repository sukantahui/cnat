import{j as s}from"./index-0KKi4kQw.js";import{C as t}from"./CodeBlock-XbN1OBK1.js";function o(){return s.jsxs("div",{className:"space-y-6",children:[s.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Mutating Methods — push, pop, shift, unshift, splice"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"These array methods modify the original array."}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"push() and pop()"}),s.jsx(t,{code:`const nums = [1, 2, 3];

nums.push(4);        // adds at end
console.log(nums);   // [1, 2, 3, 4]

nums.pop();          // removes last
console.log(nums);   // [1, 2, 3]`,language:"javascript"}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"shift() and unshift()"}),s.jsx(t,{code:`const items = ["js", "python"];

items.unshift("html");  // add at start
console.log(items);      // ["html", "js", "python"]

items.shift();           // remove first
console.log(items);      // ["js", "python"]`,language:"javascript"}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"splice()"}),s.jsx(t,{code:`const fruits = ["apple", "banana", "mango"];

fruits.splice(1, 1);  
// removes "banana"

fruits.splice(1, 0, "orange", "kiwi");  
// insert without removing

console.log(fruits);`,language:"javascript"})]})}export{o as default};

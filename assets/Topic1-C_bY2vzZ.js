import{j as e}from"./index-BkN2WOIb.js";import{C as t}from"./CodeBlock-iNx9Su2w.js";import"./prism-json-CGeDzSKD.js";function i(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl text-sky-300 font-semibold",children:"Comments in JavaScript"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Comments are notes written inside your code to explain logic, structure, or reasoning. They are ",e.jsx("strong",{children:"ignored by JavaScript"})," during execution. Good comments make your code more readable and maintainable—especially for teams, future debugging, and documentation."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🟦 Single-line Comments"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Use ",e.jsx("code",{children:"//"})," for short explanations."]}),e.jsx(t,{language:"javascript",code:`// This prints a welcome message
console.log("Hello from Coder & AccoTax!");

// Increase score
score = score + 1;`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🟩 Multi-line Comments"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Use ",e.jsx("code",{children:"/* ... */"})," when you need longer explanations or want to temporarily disable blocks of code."]}),e.jsx(t,{language:"javascript",code:`/*
  This function calculates the bill amount
  including GST, discount, and service charge.
  Written by: Sukanta Hui (Barrackpore)
*/
function calculateBill(amount, gstRate) {
  return amount + (amount * gstRate) / 100;
}`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"⭐ Why Comments Are Useful"}),e.jsxs("ul",{className:"text-slate-300 text-sm list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Explain tricky logic"}),e.jsx("li",{children:"Describe purpose of functions or variables"}),e.jsx("li",{children:"Mark TODO tasks"}),e.jsx("li",{children:"Disable code temporarily without deleting"})]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🧠 Real-World Example"}),e.jsx(t,{language:"javascript",code:`// TODO: Replace with API call when backend is ready
const students = ["Ritaja", "Swadeep", "Mounita"];

/*
  Loop through each student and print
  a greeting message on the screen.
*/
students.forEach(function(name) {
  console.log("Welcome, " + name);
});`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"❗ Common Mistakes"}),e.jsxs("ul",{className:"text-red-300 text-sm list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Using comments instead of writing clean code"}),e.jsxs("li",{children:["Writing obvious comments like ",e.jsx("code",{children:"// add 1 to x"})]}),e.jsx("li",{children:"Leaving outdated comments that no longer match the code"}),e.jsx("li",{children:"Nesting comments inside multi-line comments (not allowed)"})]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"✏ Mini Practice Task"}),e.jsx("p",{className:"text-slate-300 text-sm mb-1",children:"Add useful comments to the following code:"}),e.jsx(t,{language:"javascript",code:`let price = 900;
let discount = 100;

let finalPrice = price - discount;

console.log(finalPrice);`}),e.jsx("p",{className:"text-slate-400 text-xs italic",children:"Try this in your JavaScript Playground!"})]})}export{i as default};

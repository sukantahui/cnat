import{j as e}from"./index-xwnDrKlA.js";import{C as s}from"./CodeBlock-bYGEcDHC.js";import"./prism-javascript-BRfYdlHV.js";function t(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Real-World Examples of Decision Making"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Here are some practical examples of conditional logic."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🔹 Login System"}),e.jsx(s,{code:`let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful!");
} else {
  console.log("Invalid credentials");
}`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🔹 Grading System"}),e.jsx(s,{code:`let marks = 78;

if (marks >= 90) console.log("A+");
else if (marks >= 80) console.log("A");
else if (marks >= 70) console.log("B");
else console.log("Needs improvement");`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"🔹 Discount Calculator"}),e.jsx(s,{code:`let price = 500;
let discount = (price > 400) ? 20 : 5;

console.log("Discount:", discount, "%");`,language:"javascript"})]})}export{t as default};

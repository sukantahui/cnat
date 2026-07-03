import{j as e}from"./index-Czk7a0H9.js";import{C as t}from"./CodeBlock-B6PxUhIe.js";import"./prism-IyxSUpEx.js";import"./prism-json-D0UlpdKh.js";import"./file-code-BODUuMKp.js";import"./copy-BF03oyX4.js";import"./download-HY43MXCi.js";import"./play-BsM0fxjP.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Pure Functions vs Side Effects"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A pure function always produces the same output for the same input and does not modify external data."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Pure Function"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10));`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Function with Side Effect"}),e.jsx(t,{code:`let counter = 0;

function increment() {
  counter++;        // modifies external variable
}

increment();
console.log(counter);`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Pure functions are predictable and easier to test — great for clean coding practice as taught in Coder & AccoTax."})]})}export{d as default};

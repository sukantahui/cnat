import{j as e}from"./index-DQGlkDD-.js";import{C as t}from"./CodeBlock-DT5CatFC.js";import"./prism-CtT2IhSy.js";import"./prism-json-D0UlpdKh.js";import"./file-code-BwO1T2yj.js";import"./createLucideIcon-DkPaqQ-z.js";import"./check-W609_JxY.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./play-C4es742M.js";function u(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Pure Functions vs Side Effects"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A pure function always produces the same output for the same input and does not modify external data."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Pure Function"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10));`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Function with Side Effect"}),e.jsx(t,{code:`let counter = 0;

function increment() {
  counter++;        // modifies external variable
}

increment();
console.log(counter);`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Pure functions are predictable and easier to test — great for clean coding practice as taught in Coder & AccoTax."})]})}export{u as default};

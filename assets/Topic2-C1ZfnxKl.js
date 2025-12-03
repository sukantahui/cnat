import{j as e}from"./index-xwnDrKlA.js";import{C as s}from"./CodeBlock-bYGEcDHC.js";import"./prism-javascript-BRfYdlHV.js";function n(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Non-Mutating Methods — slice, concat"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"These methods return NEW arrays and do not modify the original one."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"slice()"}),e.jsx(s,{code:`const numbers = [10, 20, 30, 40, 50];

const part = numbers.slice(1, 4);
console.log(part);       // [20, 30, 40]

console.log(numbers);    // original unchanged`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"concat()"}),e.jsx(s,{code:`const a = [1, 2];
const b = [3, 4];

const combined = a.concat(b);

console.log(combined); // [1,2,3,4]`,language:"javascript"})]})}export{n as default};

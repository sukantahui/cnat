import{j as e}from"./index-BxcHuftT.js";import{C as t}from"./CodeBlock-IiYrMME4.js";import"./prism-DDSRbUDI.js";import"./prism-json-D0UlpdKh.js";import"./file-code-B8psrjkP.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";import"./play-BEG4S0rO.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Pure Functions vs Side Effects"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A pure function always produces the same output for the same input and does not modify external data."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Pure Function"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10));`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Function with Side Effect"}),e.jsx(t,{code:`let counter = 0;

function increment() {
  counter++;        // modifies external variable
}

increment();
console.log(counter);`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Pure functions are predictable and easier to test — great for clean coding practice as taught in Coder & AccoTax."})]})}export{d as default};

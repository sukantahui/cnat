import{j as e}from"./index-EovE17pz.js";import{C as t}from"./CodeBlock-CoLoDHrS.js";import"./prism-json-Cev-7H5W.js";function l(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"break & continue"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("strong",{children:"break"})," stops the loop completely.",e.jsx("br",{}),e.jsx("strong",{children:"continue"})," skips the current iteration."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"break Example"}),e.jsx(t,{code:`for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"continue Example"}),e.jsx(t,{code:`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5`,language:"javascript"})]})}export{l as default};

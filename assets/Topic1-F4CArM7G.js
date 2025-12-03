import{j as e}from"./index-0KKi4kQw.js";import{C as s}from"./CodeBlock-XbN1OBK1.js";function o(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Nested If Statements"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Nested ",e.jsx("code",{children:"if"})," statements allow multiple layers of decision-making."]}),e.jsx(s,{code:`let score = 85;

if (score >= 60) {
  if (score >= 80) {
    console.log("Excellent");
  } else {
    console.log("Good");
  }
} else {
  console.log("Fail");
}`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Nesting too many ",e.jsx("code",{children:"if"})," blocks can reduce readability."]})]})}export{o as default};

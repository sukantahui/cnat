import{j as t}from"./index-Di8hoHjl.js";import{C as e}from"./CodeBlock-C0_W0U6u.js";import"./prism-sjXmQqqR.js";import"./prism-json-D0UlpdKh.js";function i(){return t.jsxs("div",{className:"space-y-8",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Loop Patterns (Sum, Factorial, Multiplication Table)"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Sum of 1 to N"}),t.jsx(e,{code:`let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);  // 15`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Factorial"}),t.jsx(e,{code:`let fact = 1;

for (let i = 1; i <= 5; i++) {
  fact *= i;
}

console.log(fact);  // 120`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Multiplication Table"}),t.jsx(e,{code:"let n = 7;\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(`${n} x ${i} = ${n * i}`);\n}",language:"javascript"})]})}export{i as default};

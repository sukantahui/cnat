import{j as t}from"./index-D8vKF2mq.js";import{C as e}from"./CodeBlock-DjFHPQ68.js";import"./prism-DqVe0I4H.js";import"./prism-json-D0UlpdKh.js";import"./file-code-C52313Dl.js";import"./createLucideIcon-DTJ5VPt2.js";import"./copy-bDAEzVP3.js";import"./download-BaqyJosE.js";import"./play-ZVoUkbUG.js";function x(){return t.jsxs("div",{className:"space-y-8",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Loop Patterns (Sum, Factorial, Multiplication Table)"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Sum of 1 to N"}),t.jsx(e,{code:`let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);  // 15`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Factorial"}),t.jsx(e,{code:`let fact = 1;

for (let i = 1; i <= 5; i++) {
  fact *= i;
}

console.log(fact);  // 120`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Multiplication Table"}),t.jsx(e,{code:"let n = 7;\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(`${n} x ${i} = ${n * i}`);\n}",language:"javascript"})]})}export{x as default};

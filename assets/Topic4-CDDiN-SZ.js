import{j as s}from"./index-0KKi4kQw.js";import{C as e}from"./CodeBlock-XbN1OBK1.js";function a(){return s.jsxs("div",{className:"space-y-6",children:[s.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Iterating Arrays — for, for-of & forEach"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Looping is fundamental to processing lists of values."}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for Loop"}),s.jsx(e,{code:`const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,language:"javascript"}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for...of"}),s.jsx(e,{code:`for (let value of nums) {
  console.log(value);
}`,language:"javascript"}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"forEach()"}),s.jsx(e,{code:"nums.forEach(n => console.log(n));",language:"javascript"})]})}export{a as default};

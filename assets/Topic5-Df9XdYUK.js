import{j as e}from"./index-YkKVfVEM.js";import{C as t}from"./CodeBlock-DDnRAo3D.js";import"./prism-BIjtOw9A.js";import"./prism-json-D0UlpdKh.js";import"./file-code-DitFwktW.js";import"./createLucideIcon-Cim-rzMd.js";import"./check-BZgQDY_j.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./play-DEajiqWU.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"for…of & for…in (Overview)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("strong",{children:"for…of"})," → loops through values (arrays, strings)",e.jsx("br",{}),e.jsx("strong",{children:"for…in"})," → loops through keys (objects)"]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for…of Example"}),e.jsx(t,{code:`let nums = [10, 20, 30];

for (let value of nums) {
  console.log(value);
}
// Output: 10 20 30`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for…in Example"}),e.jsx(t,{code:`let student = {
  name: "Sukanta Hui",
  city: "Barrackpore",
  institute: "Coder & AccoTax"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Use ",e.jsx("code",{children:"for…of"})," for arrays, ",e.jsx("code",{children:"for…in"})," for objects."]})]})}export{d as default};

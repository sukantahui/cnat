import{j as e}from"./index-DI04DAgq.js";import{C as s}from"./CodeBlock-D3x_MAfv.js";import"./prism-D8iJqXYw.js";import"./prism-json-D0UlpdKh.js";import"./file-code-oB44tEN2.js";import"./copy-DQfKP-RU.js";import"./download-DwVcN2kg.js";import"./play-DnWShgnU.js";function x(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"for…of & for…in (Overview)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("strong",{children:"for…of"})," → loops through values (arrays, strings)",e.jsx("br",{}),e.jsx("strong",{children:"for…in"})," → loops through keys (objects)"]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for…of Example"}),e.jsx(s,{code:`let nums = [10, 20, 30];

for (let value of nums) {
  console.log(value);
}
// Output: 10 20 30`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"for…in Example"}),e.jsx(s,{code:`let student = {
  name: "Sukanta Hui",
  city: "Barrackpore",
  institute: "Coder & AccoTax"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Use ",e.jsx("code",{children:"for…of"})," for arrays, ",e.jsx("code",{children:"for…in"})," for objects."]})]})}export{x as default};

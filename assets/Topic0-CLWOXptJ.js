import{r as t,j as e}from"./index-vERhaF1Z.js";import{C as s}from"./CodeBlock-DJFHg1FS.js";import"./prism-BFAKkZyd.js";import"./prism-json-D0UlpdKh.js";class o extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"What is JSON? Syntax and Common Patterns"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JSON stands for ",e.jsx("strong",{children:"JavaScript Object Notation"}),". It is a lightweight text format used to send and store data between systems (browser ↔ server). Almost every modern API that you call from JavaScript returns data in JSON format."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. JSON vs JavaScript Object"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["JSON ",e.jsx("em",{children:"looks like"})," JavaScript objects, but it is just a"," ",e.jsx("strong",{children:"string"}),". Key differences:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"JSON keys must be in double quotes."}),e.jsx("li",{children:"Strings must use double quotes."}),e.jsx("li",{children:"No trailing commas allowed."}),e.jsx("li",{children:"Only basic types: string, number, boolean, null, array, object."})]}),e.jsx(s,{language:"json",code:`{
  "name": "Ritaja",
  "course": "JavaScript",
  "centre": "Coder & AccoTax",
  "city": "Barrackpore",
  "marks": {
    "js": 92,
    "es6": 95
  },
  "skills": ["HTML", "CSS", "JavaScript"]
}`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Common JSON Patterns"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Many APIs return ",e.jsx("strong",{children:"arrays of objects"}),". For example, a list of students at Coder & AccoTax might look like:"]}),e.jsx(s,{language:"json",code:`[
  {
    "name": "Mounita",
    "batch": "JS-01",
    "city": "Barrackpore"
  },
  {
    "name": "Swadeep",
    "batch": "JS-01",
    "city": "Kolkata"
  }
]`}),e.jsx("p",{className:"text-slate-300 text-sm",children:"JSON is language-independent. Python, Java, PHP, C#, and JavaScript all can parse and generate JSON."}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"When do we use JSON?"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Fetching data from REST APIs."}),e.jsx("li",{children:"Storing structured data in files."}),e.jsx("li",{children:"Saving data in localStorage as strings."}),e.jsx("li",{children:"Config files (e.g. VS Code settings, package.json)."})]})]})]})}}export{o as default};

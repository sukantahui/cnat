import{r as t,j as e}from"./index-BulJBpSd.js";import{C as s}from"./CodeBlock-e7rvqyga.js";import"./prism-BPoWlcML.js";import"./prism-json-D0UlpdKh.js";class r extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Template Literals — Interpolation & Multi-line Strings (ES6)"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Template literals, introduced in ES6, make string handling more powerful and easier to read. They allow variable interpolation, multi-line strings, embedded expressions, and more — features widely used in all modern JavaScript projects taught at Coder & AccoTax."}),e.jsxs("h3",{className:"text-lg font-semibold text-slate-200",children:["1. Basic Interpolation Using $","{ }"]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can insert variables inside strings using ",e.jsxs("strong",{children:["$","{ }"]}),"."]}),e.jsx(s,{language:"javascript",code:`const name = "Ritaja";
const course = "JavaScript";

const message = \`Hello \${name}, welcome to the \${course} course!\`;

console.log(message);
// Hello Ritaja, welcome to the JavaScript course!`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"No string concatenation needed."}),e.jsxs("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:["2. Multi-Line Strings Without ",e.jsx("code",{children:"\\\\n"})]}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Template literals allow multi-line text easily."}),e.jsx(s,{language:"javascript",code:`const description = \`
Coder & AccoTax
Barrackpore
Advanced JavaScript Sessions
\`;

console.log(description);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Old Way vs Modern ES6 Way"}),e.jsx(s,{language:"javascript",code:`// OLD WAY (confusing)
const student = "Mounita";
const oldMsg = "Welcome " + student + " to Coder & AccoTax!";
console.log(oldMsg);

// MODERN WAY
const newMsg = \`Welcome \${student} to Coder & AccoTax!\`;
console.log(newMsg);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Embed Expressions Inside Strings"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Any JavaScript expression can be written inside ",e.jsxs("strong",{children:["$","{ }"]}),"."]}),e.jsx(s,{language:"javascript",code:'const a = 10;\nconst b = 20;\n\nconsole.log(`Sum = ${a + b}`);   // Sum = 30\n\nfunction greet(name) {\n  return `Hello ${name}`;\n}\nconsole.log(`${greet("Devangshu")}!`);'}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Using Template Literals with Arrays/Objects"}),e.jsx(s,{language:"javascript",code:`const student = {
  name: "Susmita",
  score: 92
};

const result = \`\${student.name} scored \${student.score} marks.\`;

console.log(result);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. Tagged Template Literals (Advanced Feature)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Tagged templates allow modifying how template literals work. This is advanced — used in libraries like styled-components."}),e.jsx(s,{language:"javascript",code:`function highlight(strings, ...values) {
  return strings.reduce((final, str, i) => {
    return final + str + (values[i] ? values[i].toUpperCase() : "");
  }, "");
}

const name = "Kaustav";

console.log(highlight\`Hello \${name}, welcome!\`);
// Output: Hello KAUSTAV, welcome!`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Use backticks (` `) to create template literals"}),e.jsxs("li",{children:["Insert variables using $","{variable}"]}),e.jsxs("li",{children:["Create multi-line strings without ",e.jsx("code",{children:"\\\\n"})]}),e.jsx("li",{children:"Embed expressions and function calls"}),e.jsx("li",{children:"Advanced: Tagged templates modify output"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Template literals simplify string work and make modern JS much cleaner."})]})]})}}export{r as default};

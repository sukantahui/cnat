import{j as e}from"./index-BaXQSoRC.js";import{C as t}from"./CodeBlock-DB4cO7T9.js";import"./prism-BemPbDLx.js";import"./prism-json-D0UlpdKh.js";function i(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-sky-300",children:"Statements, Semicolons, Indentation & Code Style"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript programs are made of ",e.jsx("strong",{children:"statements"})," — individual instructions that run one after another. Clean and consistent formatting makes your code easier to read, debug, and maintain. This topic explains the foundation of writing clean JavaScript code:",e.jsx("strong",{children:" statements, semicolons, indentation, and coding style."})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"🟦 What is a Statement?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A statement is a complete instruction that the JavaScript engine executes. Think of statements as sentences in English — each ending with proper punctuation."}),e.jsx(t,{language:"javascript",code:`
let age = 20;       // Statement
age++;              // Statement
console.log(age);   // Statement
        `}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"🟧 Semicolons in JavaScript"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["JavaScript allows you to ",e.jsx("strong",{children:"omit semicolons"})," because of a feature called ",e.jsx("strong",{children:"Automatic Semicolon Insertion (ASI)"}),". However, relying on ASI can sometimes create unexpected errors, so most developers prefer writing semicolons explicitly."]}),e.jsx("h4",{className:"text-slate-300 font-semibold mt-2",children:"✔ Recommended:"}),e.jsx(t,{language:"javascript",code:`
let x = 10;
let y = 20;
console.log(x + y);
        `}),e.jsx("h4",{className:"text-slate-300 font-semibold mt-2",children:"❌ Not recommended:"}),e.jsx(t,{language:"javascript",code:`
let x = 10
let y = 20
console.log(x + y)
        `}),e.jsx("p",{className:"text-yellow-400 text-xs italic",children:"While this usually works, it may break in certain cases, especially with return statements."}),e.jsx("h4",{className:"text-slate-200 font-semibold mt-4",children:"⚠ When Semicolons Matter"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A famous ASI issue occurs when you return an object on the next line:"}),e.jsx(t,{language:"javascript",code:`
function getUser() {
  return 
  {
    name: "Ritaja"
  }
}

console.log(getUser()); // ❌ undefined
        `}),e.jsxs("p",{className:"text-green-300 text-sm",children:["Because JavaScript inserts a semicolon after ",e.jsx("code",{children:"return"}),", thinking the statement ended!"]}),e.jsx("h4",{className:"text-green-400 text-sm font-semibold",children:"Correct Version:"}),e.jsx(t,{language:"javascript",code:`
function getUser() {
  return {
    name: "Ritaja"
  };
}

console.log(getUser()); // ✔ Works!
        `}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"🟩 Indentation & Code Style"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Indentation shows structure. It tells your eyes how blocks of code are grouped. Most teams follow either:"}),e.jsxs("ul",{className:"text-slate-300 text-sm list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"2 spaces (common in JavaScript)"}),e.jsx("li",{children:"4 spaces (some developers prefer this)"})]}),e.jsx("h4",{className:"text-slate-200 font-semibold mt-3",children:"Good Indentation:"}),e.jsx(t,{language:"javascript",code:`
function greet(name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello Guest");
  }
}
        `}),e.jsx("h4",{className:"text-slate-200 font-semibold mt-3",children:"Poor Indentation:"}),e.jsx(t,{language:"javascript",code:`
function greet(name){
  if(name){
    console.log("Hello " + name)
  }else{
    console.log("Hello Guest")
  }
}
        `}),e.jsx("p",{className:"text-rose-400 text-xs italic",children:"Poor indentation makes debugging extremely hard!"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"⭐ Best Practices for Clean Code"}),e.jsxs("ul",{className:"text-slate-300 text-sm list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Always indent properly."}),e.jsx("li",{children:"Use semicolons for safety and consistency."}),e.jsx("li",{children:"Write descriptive variable and function names."}),e.jsx("li",{children:"Keep lines short and readable."}),e.jsx("li",{children:"Use consistent spacing and formatting."})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"❗ Common Beginner Mistakes"}),e.jsxs("ul",{className:"text-red-300 text-sm list-disc pl-6 space-y-1",children:[e.jsxs("li",{children:["Forgetting curly braces ",e.jsx("code",{children:"{}"})," in nested blocks"]}),e.jsxs("li",{children:["Omitting semicolon after ",e.jsx("code",{children:"return"})]}),e.jsx("li",{children:"Inconsistent indentation"}),e.jsx("li",{children:"Random spaces inside function parentheses"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"✏ Mini Practice Task"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Rewrite the following code with proper indentation and semicolons:"}),e.jsx(t,{language:"javascript",code:`
function check(n){
  if(n>0){
    console.log("Positive")
  }else{
    console.log("Not positive")
  }
}
        `}),e.jsx("p",{className:"text-slate-400 text-xs italic",children:"Try it inside the JavaScript Playground!"})]})}export{i as default};

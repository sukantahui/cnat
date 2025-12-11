import{r as t,j as e}from"./index-CKUZy077.js";import{C as s}from"./CodeBlock-HaES_Wg7.js";import"./prism-json-B3O4EAvh.js";class c extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"JavaScript Runtime: Call Stack & Task Queue (Conceptual)"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"JavaScript runs in an environment (browser or Node.js) which provides:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Call Stack"})," – where your functions run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web APIs / Environment"})," – timers, fetch, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Task Queue / Callback Queue"})," – waiting callbacks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Loop"})," – moves tasks from queue to stack."]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Call Stack Example"}),e.jsx(s,{language:"javascript",code:`function greetStudent(name) {
  console.log("Hello", name);
}

function startClass() {
  greetStudent("Kaustav");
}

console.log("Class starting...");
startClass();
console.log("Class ended.");

/*
Rough call stack order:
- global()
- startClass()
- greetStudent()
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Call Stack with setTimeout (Concept)"}),e.jsx(s,{language:"javascript",code:`console.log("1. Start");

setTimeout(() => {
  console.log("2. Async task: loading marks for Susmita");
}, 0);

console.log("3. End");

/*
Conceptual steps:
- console.log("1. Start") runs on stack.
- setTimeout(...) registers timer in Web APIs, callback goes to task queue.
- console.log("3. End") runs.
- Event loop moves callback from queue to stack when stack is empty.
*/`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Even with ",e.jsx("code",{children:"0"})," ms delay, the callback waits until the stack is free."]}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Simplified Mental Model"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Call Stack"}),": What is executing right now."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web APIs"}),": Timers, fetch, DOM events, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Task Queue"}),": Callbacks waiting to run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Loop"}),": If stack is empty, move next task in."]})]})]})]})}}export{c as default};

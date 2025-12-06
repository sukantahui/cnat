import{r as t,j as e}from"./index-CNYl2d_K.js";import{C as s}from"./CodeBlock-BaiFvT04.js";import"./prism-json-B3E3uoB5.js";class r extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Synchronous vs Asynchronous Code"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript is ",e.jsx("strong",{children:"single-threaded"})," and usually runs in a"," ",e.jsx("strong",{children:"synchronous"})," way – one line after another. But with timers, network requests and file operations, we often need"," ",e.jsx("strong",{children:"asynchronous"})," behaviour so that the program does not block. In Coder & AccoTax projects, this is critical when fetching student data, marks, or reports from a server."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Synchronous Code (Blocking)"}),e.jsx(s,{language:"javascript",code:`console.log("1. Start");

for (let i = 1; i <= 3; i++) {
  console.log("Loop count:", i);
}

console.log("2. End");

/*
Output:
1. Start
Loop count: 1
Loop count: 2
Loop count: 3
2. End
*/`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Every line waits for the previous line to finish. If a task is slow, everything after it waits."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Asynchronous Code (Non-Blocking)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Asynchronous code allows long-running work to happen in the background (like a timer or API call) while the main thread continues."}),e.jsx(s,{language:"javascript",code:`console.log("1. Start");

setTimeout(() => {
  console.log("2. Loading marks for Ritaja...");
}, 1000);

console.log("3. End");

/*
Possible output:
1. Start
3. End
2. Loading marks for Ritaja...
*/`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Notice how the ",e.jsx("code",{children:"setTimeout"})," callback runs ",e.jsx("em",{children:"later"}),", after the main code continues."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Real-Life Analogy (Coder & AccoTax)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Imagine ",e.jsx("strong",{children:"Ritaja"})," submits an online test. The frontend:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Shows “Saving your answers…”"}),e.jsx("li",{children:"Sends data to the server in background (async)"}),e.jsx("li",{children:"Meanwhile UI is still responsive; she can navigate"})]}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Key Points"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Synchronous = one after another, blocking."}),e.jsx("li",{children:"Asynchronous = tasks scheduled for later, non-blocking."}),e.jsx("li",{children:"Async is essential for timers, network, file I/O, etc."})]})]})]})}}export{r as default};

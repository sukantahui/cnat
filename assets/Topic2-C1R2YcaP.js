import{r as s,j as e}from"./index-CI-qpT1H.js";import{C as a}from"./CodeBlock-BcI0G6mi.js";import"./prism-json-JjD53nDd.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Callbacks & the Problem of Callback Hell"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"callback"})," is a function passed as an argument to another function, to be executed later. This was the classic way to handle async tasks before Promises and async/await."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Simple Callback Example"}),e.jsx(a,{language:"javascript",code:`function loadMarks(name, callback) {
  console.log("Loading marks for", name, "from server...");

  setTimeout(() => {
    const marks = 94;
    callback(marks);
  }, 1000);
}

loadMarks("Ritaja", function (marks) {
  console.log("Received marks:", marks);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Callback Hell (Pyramid of Doom)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"When we chain many async operations using callbacks, the code can become deeply nested and hard to read."}),e.jsx(a,{language:"javascript",code:`function loginStudent(name, cb) {
  setTimeout(() => {
    console.log("Logged in:", name);
    cb();
  }, 500);
}

function fetchProfile(name, cb) {
  setTimeout(() => {
    console.log("Fetched profile for:", name);
    cb();
  }, 500);
}

function fetchMarks(name, cb) {
  setTimeout(() => {
    console.log("Fetched marks for:", name);
    cb();
  }, 500);
}

// Callback Hell:
loginStudent("Devangshu", () => {
  fetchProfile("Devangshu", () => {
    fetchMarks("Devangshu", () => {
      console.log("Show dashboard for Devangshu");
    });
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This “pyramid” shape becomes very hard to maintain when real data, error handling and conditions are added."}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Problems with Callback Hell"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Hard to read and reason about."}),e.jsx("li",{children:"Difficult error handling."}),e.jsx("li",{children:"Nested logic is complicated to change."})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Promises and async/await were introduced to solve these problems."})]})]})}}export{c as default};

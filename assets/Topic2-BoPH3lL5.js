import{r as a,j as e}from"./index-C5Nbbk6-.js";import{E as s}from"./EditableCodeBlock-Bte-O7k4.js";import"./index-ClHeBgp3.js";import"./braces-CxhkSqhy.js";import"./file-code-DKQbcCKH.js";import"./layout-list-F0chhMfF.js";import"./play--xjmOV9C.js";import"./type-DhDX8m8R.js";import"./refresh-cw-BNltxj78.js";import"./wand-sparkles-DqlY1Ycm.js";import"./copy-DRodcmmM.js";import"./download-6yOraGoh.js";import"./eye-off-kqkFbjqx.js";import"./eye-mkgdQ3p8.js";class j extends a.Component{render(){return e.jsxs("div",{className:"space-y-12 animate-[fadeIn_0.8s_ease-out]",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300 tracking-wide animate-[slideDown_0.5s_ease-out]",children:"Callbacks & the Problem of Callback Hell"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed mt-2 animate-[fadeIn_1s_ease-out]",children:["A ",e.jsx("strong",{children:"callback"})," is a function passed to another function so it runs ",e.jsx("em",{children:"later"}),"—often when some asynchronous task finishes. Before Promises and async/await, callbacks were the main tool for async JavaScript."]}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Understanding callbacks helps you appreciate why JavaScript evolved and teaches you how modern async systems came into existence."})]}),e.jsxs("div",{className:"p-4 border border-sky-700/50 bg-sky-900/20 rounded-xl shadow animate-[fadeIn_1.2s_ease-out]",children:[e.jsx("h4",{className:"text-sky-300 font-semibold text-sm mb-1",children:"💡 Real-World Example"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Imagine you are building a Coder & AccoTax app. When a student logs in, your system needs to:"}),e.jsxs("ul",{className:"mt-2 ml-5 list-disc text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Check login →"}),e.jsx("li",{children:"Fetch profile →"}),e.jsx("li",{children:"Load marks →"}),e.jsx("li",{children:"Show dashboard"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"In callback-based code, each step becomes another nested callback."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.5s_ease-out]",children:"1. Simple Callback Example"}),e.jsx(s,{initialCode:`function loadMarks(name, callback) {
  console.log("Loading marks for", name, "from server...");

  setTimeout(() => {
    const marks = 94;
    callback(marks);  // callback is executed here
  }, 1000);
}

loadMarks("Ritaja", function (marks) {
  console.log("Received marks:", marks);
});`}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"✔ Here the callback is clean and readable. ✔ Real async behaviour is easy to understand."})]}),e.jsxs("div",{className:"p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-xl shadow animate-[fadeIn_1.1s_ease-out]",children:[e.jsx("h4",{className:"text-indigo-300 font-semibold text-sm mb-1",children:"🧠 Why Callbacks Become Difficult"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The problem is not callbacks themselves—the problem is ",e.jsx("strong",{children:"many callbacks"}),". When each callback depends on the previous one, the code forms a ",e.jsx("em",{children:"pyramid"}),"."]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Students often get stuck here. But don’t worry—this topic exists so you learn how Promises make this easier!"})]}),e.jsxs("div",{className:"p-4 bg-red-900/20 border border-red-700/50 rounded-xl shadow animate-[fadeIn_1.3s_ease-out]",children:[e.jsx("h4",{className:"text-red-400 font-semibold text-sm mb-1",children:"⚠ Callback Hell"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Callback Hell happens when callbacks are nested inside callbacks, forming a shape like this:"}),e.jsx("pre",{className:"text-red-300 text-xs mt-2 whitespace-pre",children:"login → getProfile → getMarks → calculateRank → updateUI"}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Each step makes the code more confusing and harder to debug."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.6s_ease-out]",children:"2. Callback Hell (Pyramid of Doom)"}),e.jsx("p",{className:"text-slate-300 text-sm mb-2 animate-[fadeIn_1s_ease-out]",children:"When multiple async tasks depend on one another:"}),e.jsx(s,{initialCode:`function loginStudent(name, cb) {
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

// Callback Hell (deep nesting):
loginStudent("Devangshu", () => {
  fetchProfile("Devangshu", () => {
    fetchMarks("Devangshu", () => {
      console.log("Show dashboard for Devangshu");
    });
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm mt-2 animate-[fadeIn_1.3s_ease-out]",children:"🔸 Hard to read 🔸 Hard to maintain 🔸 Hard to add error handling 🔸 Hard to scale for real projects"})]}),e.jsxs("div",{className:"p-5 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl animate-[fadeIn_1.5s_ease-out]",children:[e.jsx("h4",{className:"text-sky-300 font-semibold text-sm",children:"🏫 Real Story — Coder & AccoTax App"}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"When building the exam module, Baba originally wrote:"}),e.jsxs("ul",{className:"list-disc ml-5 text-sm text-slate-300 mt-1 space-y-1",children:[e.jsx("li",{children:"Load student"}),e.jsx("li",{children:"Load marks"}),e.jsx("li",{children:"Load attendance"}),e.jsx("li",{children:"Save final score"})]}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"This became hard to maintain and debug—exactly the Callback Hell problem."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. A Student-Friendly Example"}),e.jsx(s,{initialCode:`// Student wants to generate certificate
function verifyStudent(id, next) {
  setTimeout(() => {
    console.log("✔ Student Verified");
    next();
  }, 400);
}

function loadScore(next) {
  setTimeout(() => {
    console.log("✔ Score Loaded");
    next();
  }, 400);
}

function generateCertificate(next) {
  setTimeout(() => {
    console.log("🎉 Certificate Generated");
    next();
  }, 400);
}

// Nested structure
verifyStudent(() => {
  loadScore(() => {
    generateCertificate(() => {
      console.log("Process Complete!");
    });
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"This small example shows how even simple tasks get messy."})]}),e.jsxs("div",{className:"p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-xl shadow animate-[fadeIn_1.6s_ease-out]",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold text-sm mb-1",children:"✨ Good News for Students"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Promises and ",e.jsx("strong",{children:"async/await"})," completely transform this code. You will soon write the same logic in a clean, readable way."]})]}),e.jsxs("section",{className:"p-5 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl animate-[fadeIn_1.8s_ease-out]",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"📌 Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Callbacks are functions executed later (often async)."}),e.jsx("li",{children:"Too many callbacks create complex nesting."}),e.jsx("li",{children:"Callback Hell is hard to read, write, test, and debug."}),e.jsx("li",{children:"Promises solve most callback problems."}),e.jsx("li",{children:"async/await makes async code even cleaner."})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Next topic: Learn how Promises fix Callback Hell."})]})]})}}export{j as default};

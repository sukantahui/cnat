import{r as t,j as e,E as s}from"./index-CZhUHB75.js";const a="animate-[fadeIn_0.8s_ease-out]";class i extends t.Component{render(){return e.jsxs("div",{className:`space-y-10 ${a}`,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300 tracking-wide animate-[slideDown_0.5s_ease-out]",children:"Synchronous vs Asynchronous Code"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["JavaScript is ",e.jsx("strong",{children:"single-threaded"})," and executes code in a"," ",e.jsx("strong",{children:"synchronous"})," order unless asynchronous features are used. In Coder & AccoTax learning apps, async code is crucial for loading quizzes, scores, and student reports without blocking the UI."]})]}),e.jsxs("div",{className:"p-4 border border-sky-700 bg-sky-900/30 rounded-xl shadow-md animate-[fadeIn_1.2s_ease-out]",children:[e.jsx("h4",{className:"text-sky-300 font-semibold mb-1 text-sm",children:"💡 Why Learn Async?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Async code improves speed and user experience by preventing the UI from freezing. It allows tasks like API calls, timers, and database operations to run efficiently."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.5s_ease-out]",children:"1. Synchronous Code (Blocking)"}),e.jsx(s,{initialCode:`console.log("1. Start");

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
*/
`}),e.jsx("div",{className:"mt-2 p-3 bg-slate-900/40 border border-slate-800 rounded-xl text-sm text-slate-400 animate-[fadeIn_1.3s_ease-out]",children:"⏳ In synchronous code, each line must finish before the next begins. Slow operations block everything behind them."})]}),e.jsxs("div",{className:"p-4 border border-red-700 bg-red-900/20 rounded-xl shadow animate-[fadeIn_1.4s_ease-out]",children:[e.jsx("h4",{className:"text-red-400 font-semibold mb-1 text-sm",children:"⚠ Common Issue in Synchronous Code"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"If you perform heavy computations synchronously, your interface becomes unresponsive — a bad user experience."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.5s_ease-out]",children:"2. Asynchronous Code (Non-Blocking)"}),e.jsx("p",{className:"text-slate-300 text-sm mb-3 animate-[fadeIn_1s_ease-out]",children:"Async code allows long-running operations to run in the background while the main thread continues."}),e.jsx(s,{initialCode:`console.log("1. Start");

setTimeout(() => {
  console.log("2. Loading marks for Ritaja...");
}, 1000);

console.log("3. End");

/*
Possible output:
1. Start
3. End
2. Loading marks for Ritaja...
*/
`}),e.jsx("div",{className:"mt-2 p-3 bg-emerald-900/20 border border-emerald-700 rounded-xl text-sm text-emerald-300 animate-[fadeIn_1.3s_ease-out]",children:"✔ Asynchronous code prevents blocking and keeps your UI smooth."})]}),e.jsxs("div",{className:"p-4 border border-emerald-700 bg-emerald-900/20 rounded-xl shadow animate-[fadeIn_1.5s_ease-out]",children:[e.jsx("h4",{className:"text-emerald-400 font-semibold mb-1 text-sm",children:"🌿 Real Use in Coder & AccoTax Projects"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Fetching student marks, test scores, leaderboard updates — all happen asynchronously to give a smooth experience."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.5s_ease-out]",children:"3. Real-Life Analogy (Coder & AccoTax)"}),e.jsxs("p",{className:"text-slate-300 text-sm animate-[fadeIn_1s_ease-out]",children:["When ",e.jsx("strong",{children:"Ritaja"})," submits an online test:"]}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 text-slate-300 text-sm space-y-1 animate-[fadeIn_1.3s_ease-out]",children:[e.jsx("li",{children:"UI shows “Saving your answers…”"}),e.jsx("li",{children:"Data is uploaded asynchronously"}),e.jsx("li",{children:"She continues navigating without lag"})]})]}),e.jsxs("div",{className:"p-4 border border-indigo-700 bg-indigo-900/20 rounded-xl shadow animate-[fadeIn_1.6s_ease-out]",children:[e.jsx("h4",{className:"text-indigo-300 font-semibold mb-1 text-sm",children:"✨ Tip for Students"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Whenever you see ",e.jsx("code",{children:"setTimeout"}),", ",e.jsx("code",{children:"fetch()"}),",",e.jsx("code",{children:"Promise"}),", or ",e.jsx("code",{children:"async/await"}),", you're dealing with asynchronous code."]})]}),e.jsxs("section",{className:"p-5 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl animate-[fadeIn_2s_ease-out]",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"📌 Key Takeaways"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Synchronous = sequential & blocking"}),e.jsx("li",{children:"Asynchronous = scheduled & non-blocking"}),e.jsx("li",{children:"Essential for network calls, timers, animations, file operations"}),e.jsx("li",{children:"Makes UI faster, smoother, and interactive"})]})]})]})}}export{i as default};

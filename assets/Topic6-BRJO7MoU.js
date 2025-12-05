import{r as t,j as e}from"./index-CI-qpT1H.js";import{C as s}from"./CodeBlock-BcI0G6mi.js";import"./prism-json-JjD53nDd.js";class o extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Keyboard Events — keydown, keyup & keypress"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Keyboard events allow us to respond when the user types on the keyboard. These events are essential for search bars, forms, shortcuts, and input validation taught at Coder & AccoTax, Barrackpore."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. keydown — Fires When a Key is Pressed Down"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"This is triggered the moment the key is pushed."}),e.jsx(s,{language:"html",code:'<input id="nameInput" placeholder="Type your name..." />'}),e.jsx(s,{language:"javascript",code:`document.getElementById("nameInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["If Ritaja presses ",e.jsx("strong",{children:"A"}),", console shows:",e.jsx("code",{children:"A"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. keyup — Fires When the Key is Released"}),e.jsx(s,{language:"javascript",code:`document.getElementById("nameInput").addEventListener("keyup", () => {
  console.log("Current value:", nameInput.value);
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Often used in live search boxes."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. keypress — Deprecated But Still Seen"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("strong",{children:"keypress"})," is now old and not recommended. Use ",e.jsx("strong",{children:"keydown"})," or ",e.jsx("strong",{children:"keyup"})," instead."]}),e.jsx(s,{language:"javascript",code:`document.addEventListener("keypress", (e) => {
  console.log("keypress:", e.key);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Restrict Input — Alphabets Only (Common in Admission Forms)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Useful when students like Pranjali or Susmita fill names incorrectly."}),e.jsx(s,{language:"javascript",code:`document.getElementById("nameInput").addEventListener("keydown", (e) => {
  const allowed = /^[A-Za-z ]+$/;

  if (!allowed.test(e.key) && e.key !== "Backspace") {
    e.preventDefault(); // block key
    alert("Only alphabets allowed!");
  }
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"5. Live Search using keyup (Instant Filtering)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Example: Searching students in a class list."}),e.jsx(s,{language:"html",code:`<input id="search" placeholder="Search student..." />

<ul id="studentList">
  <li>Mounita</li>
  <li>Kaustav</li>
  <li>Swadeep</li>
  <li>Devangshu</li>
</ul>`}),e.jsx(s,{language:"javascript",code:`const search = document.getElementById("search");
const list = document.querySelectorAll("#studentList li");

search.addEventListener("keyup", () => {
  const text = search.value.toLowerCase();

  list.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(text)
      ? "block"
      : "none";
  });
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"6. Keyboard Shortcuts (Ctrl + S, Ctrl + P)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Helpful for in-class practice, e.g., prevent Ctrl+S from saving."}),e.jsx(s,{language:"javascript",code:`document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    alert("Ctrl + S is disabled (Coder & AccoTax Style)");
  }
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"7. Detect Arrow Keys"}),e.jsx(s,{language:"javascript",code:`document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") console.log("Up arrow pressed");
  if (e.key === "ArrowDown") console.log("Down arrow pressed");
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Useful for sliders, games, carousels, animations."}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"keydown"})," → on key press"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"keyup"})," → on key release"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"keypress"})," → old & deprecated"]}),e.jsx("li",{children:"Useful for validation, live search, shortcuts"}),e.jsx("li",{children:"Essential for interactive UI components"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These techniques are used in live JavaScript batches at Coder & AccoTax, Barrackpore."})]})]})}}export{o as default};

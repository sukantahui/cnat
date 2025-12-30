import{r as s,j as e}from"./index-vERhaF1Z.js";import{C as t}from"./CodeBlock-DJFHg1FS.js";import"./prism-BFAKkZyd.js";import"./prism-json-D0UlpdKh.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Building a Custom Virtual Keyboard (Advanced)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A virtual keyboard allows users to type using on-screen buttons. This is often used in touch devices, ATMs, learning apps, exam portals, and UI testing taught at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),". Here you will learn how students like ",e.jsx("strong",{children:"Kaustav"})," and ",e.jsx("strong",{children:"Mounita"}),"build their first virtual keyboard using JavaScript events."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. Basic Layout"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"The virtual keyboard contains:"}),e.jsxs("ul",{className:"list-disc ml-5 text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"An input box (user types here)"}),e.jsx("li",{children:"A container holding buttons for letters"}),e.jsx("li",{children:"A backspace key"}),e.jsx("li",{children:"A space key"}),e.jsx("li",{children:"A clear/reset key"})]}),e.jsx(t,{language:"html",code:`<input id="vkInput" placeholder="Type here..." />

<div id="keyboard">
  <button class="key">Q</button>
  <button class="key">W</button>
  <button class="key">E</button>
  <button class="key">R</button>
  <button class="key">T</button>
  <button class="key">Y</button>
  <!-- You will add more keys similarly -->

  <button class="key space">SPACE</button>
  <button class="key backspace">⌫</button>
  <button class="key clear">CLEAR</button>
</div>`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Adding Events to Keys"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Clicking a key should insert its value into the input box."}),e.jsx(t,{language:"javascript",code:`const input = document.getElementById("vkInput");
const keys = document.querySelectorAll("#keyboard .key");

keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.innerText;

    if (key.classList.contains("space")) {
      input.value += " ";
    } 
    else if (key.classList.contains("backspace")) {
      input.value = input.value.slice(0, -1);
    }
    else if (key.classList.contains("clear")) {
      input.value = "";
    }
    else {
      input.value += value;
    }
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This is the same logic students use in UI/UX workshops inside Coder & AccoTax labs."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Optional — Highlight Key on Press"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A small animation improves user experience."}),e.jsx(t,{language:"javascript",code:`keys.forEach(key => {
  key.addEventListener("click", () => {
    key.classList.add("active");

    setTimeout(() => {
      key.classList.remove("active");
    }, 150);
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"In a real UI, you use CSS to show highlight or ripple effect."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Optional — Full QWERTY Layout"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"You can generate keys dynamically using an array."}),e.jsx(t,{language:"javascript",code:`const keysRow1 = ["Q","W","E","R","T","Y","U","I","O","P"];
const keysRow2 = ["A","S","D","F","G","H","J","K","L"];
const keysRow3 = ["Z","X","C","V","B","N","M"];

function createKeyboard() {
  const container = document.getElementById("keyboard");
  [...keysRow1, ...keysRow2, ...keysRow3].forEach(letter => {
    const btn = document.createElement("button");
    btn.className = "key";
    btn.innerText = letter;
    container.appendChild(btn);
  });
}
createKeyboard();`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This is how digital exam systems generate keyboard layouts."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"Real Classroom Example — Coder & AccoTax"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["During practice in JavaScript batches, students like ",e.jsx("strong",{children:"Ritaja"}),",",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Susmita"})," build virtual keyboards for:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Touch-screen typing app"}),e.jsx("li",{children:"Number pad for calculator"}),e.jsx("li",{children:"Password input with hidden characters"}),e.jsx("li",{children:"Typing games for beginners"})]}),e.jsx("p",{className:"text-slate-300 text-sm mt-2",children:"This improves event handling skills and DOM manipulation confidence."}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Virtual keyboards work through click events"}),e.jsx("li",{children:"Each key updates the input field manually"}),e.jsx("li",{children:"Space, backspace and clear keys need custom logic"}),e.jsx("li",{children:"UI components can be automated using arrays"}),e.jsx("li",{children:"Great DOM + events practice for students"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"This topic helps in understanding complex UI event-driven systems taught at Coder & AccoTax."})]})]})}}export{r as default};

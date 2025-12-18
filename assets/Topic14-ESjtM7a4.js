import{r as a,j as e,E as t}from"./index-Bbpnr6GJ.js";import{C as s}from"./CodePenPlayground-DCaxXvri.js";import"./rotate-ccw-KOKQvenf.js";class c extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400",children:"Advanced DOM Engineering — Essential Tools for Real-World UI Systems"}),e.jsx("p",{className:"text-slate-400 max-w-3xl",children:"This topic introduces **industry-level DOM concepts** used in dashboards, admin panels, UI frameworks, and enterprise web apps. You will learn: performance behavior, observers, virtualization, batch updates, event delegation, animation patterns, metadata handling, layout measurement, and more."})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"1. dataset Attributes — Storing Custom Metadata in the DOM"}),e.jsxs("p",{className:"max-w-2xl text-slate-300",children:["The ",e.jsx("code",{children:"dataset"})," API reads & writes HTML ",e.jsx("code",{children:"data-*"})," attributes. These are used heavily in UI systems to store IDs, states, configuration, and metadata without mixing them into CSS classes."]}),e.jsx(t,{language:"javascript",initialCode:`// Reading
element.dataset.key;      // maps to data-key
element.dataset.userId;   // maps to data-user-id

// Writing
element.dataset.status = "active";  // sets data-status="active"

// Return Type:
// DOMStringMap`}),e.jsx(s,{initialHTML:`<button id="task" data-id="42" data-status="pending">
  Task Item
</button>

<p id="out"></p>`,initialCSS:"body { font-family: sans-serif; background:#020617; color:white; padding:20px; }",initialJS:`const btn = document.getElementById("task");
const out = document.getElementById("out");

out.textContent =
  "ID: " + btn.dataset.id +
  ", Status: " + btn.dataset.status;

btn.onclick = () => {
  btn.dataset.status = "completed";
  out.textContent =
    "Updated Status: " + btn.dataset.status;
};`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["✔ This is better than storing metadata in class names ✔ Frameworks like React, Vue, Alpine often read ",e.jsx("code",{children:"data-*"})," for configuration"]})]}),e.jsxs("section",{className:"space-y-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-400",children:"Bonus — classList API: Full Syntax, Methods, Patterns & Best Practices"}),e.jsxs("p",{className:"text-slate-300 max-w-3xl",children:["The ",e.jsx("code",{children:"classList"})," API is one of the most important DOM tools for modern UI engineering. Frameworks like Tailwind, Bootstrap, and many JS libraries rely heavily on class-based state changes. Understanding ",e.jsx("code",{children:"classList"})," deeply is essential for animations, toggles, modals, tooltips, dropdowns, alerts, and interactive UI components."]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Syntax & Return Type"}),e.jsx(t,{language:"javascript",initialCode:`// Accessing classList
element.classList;

// Return Type: DOMTokenList
// A live list-like object with methods for managing CSS classes.`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"Available Methods"}),e.jsx(t,{language:"javascript",initialCode:`classList.add("cls1", "cls2");         // Adds one or more classes
classList.remove("cls1");             // Removes one or more classes
classList.toggle("open");             // Toggles class on/off
classList.toggle("open", true);       // Force ON
classList.toggle("open", false);      // Force OFF
classList.contains("active");         // Returns true/false
classList.replace("old", "new");      // Replace class names
`}),e.jsxs("p",{className:"text-sm text-slate-400 mt-2",children:["✔ ",e.jsx("code",{children:"toggle()"})," is the most powerful for UI animations ✔ ",e.jsx("code",{children:"replace()"})," is useful for theme or mode switching ✔ ",e.jsx("code",{children:"contains()"})," is great for conditional UI logic"]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 1 — Basic add(), remove(), contains()"}),e.jsx(t,{language:"javascript",initialCode:`const box = document.getElementById("box");

box.classList.add("visible");
box.classList.remove("hidden");

if (box.classList.contains("visible")) {
  console.log("Box is now visible");
}`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 2 — toggle() for Dropdowns & Menus"}),e.jsx(t,{language:"javascript",initialCode:`menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});`}),e.jsx("p",{className:"text-xs text-slate-400",children:"✔ Used in accordions, dropdowns, sidebar menus, mobile navigation"})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:"Example 3 — CSS Transitions Triggered by classList"}),e.jsx(s,{initialHTML:`<button id="btn">Animate</button>
<div id="box" class="box"></div>`,initialCSS:`body{background:#020617;color:white;font-family:sans-serif;padding:20px;}
.box{
  width:120px;height:120px;background:#38bdf8;border-radius:12px;
  transition:transform .3s ease, opacity .3s ease;
  transform:scale(.8); opacity:.5;
}
.box.active{
  transform:scale(1.2) translateX(40px);
  opacity:1;
}`,initialJS:`const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.onclick = () => {
  box.classList.toggle("active");
};`}),e.jsx("p",{className:"text-xs text-slate-400",children:"✔ Animation is controlled 100% by CSS ✔ JavaScript only toggles the state"})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-lime-300",children:"Example 4 — replace() for Theme Switching"}),e.jsx(t,{language:"javascript",initialCode:'document.documentElement.classList.replace("light", "dark");'}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Useful in theme switchers ✔ Much cleaner than removing + adding separately"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-pink-300",children:"Advanced Patterns Using classList"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-300 text-sm",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:'toggle("class", condition)'})," to avoid if-else logic"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"replace()"})," for mode switching (dark/light/tab-state)"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"contains()"})," to detect state and run animations conditionally"]}),e.jsxs("li",{children:["Avoid working with ",e.jsx("code",{children:"className = ..."})," (unsafe + overrides everything)"]}),e.jsxs("li",{children:["Combine ",e.jsx("code",{children:"classList"})," with CSS transitions for smooth UI effects"]})]})]}),e.jsx("footer",{className:"text-slate-400 text-sm pt-4 border-t border-slate-800",children:e.jsxs("p",{children:[e.jsx("code",{children:"classList"})," is the backbone of modern UI engineering. Mastering it unlocks dropdowns, modals, sidebars, tabs, toast notifications, dark mode, animations, transitions, and component-based architecture."]})})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"2. Layout Measurement — getBoundingClientRect()"}),e.jsx("p",{className:"max-w-2xl text-slate-300",children:"This API returns the element’s **position & size** on the screen. Tooltips, dropdowns, modals, animations, virtualization, and responsive layouts depend on this."}),e.jsx(t,{language:"javascript",initialCode:`const rect = element.getBoundingClientRect();

// Return Type: DOMRect
rect.top;
rect.left;
rect.width;
rect.height;
rect.bottom;
rect.right;`}),e.jsx(s,{initialHTML:`<button id="box" style="padding:20px; background:#0ea5e9; border:none; border-radius:8px;">
  Measure Me
</button>

<p id="log"></p>`,initialCSS:"body{ background:#020617; color:white; font-family:sans-serif; padding:20px; }",initialJS:`const box = document.getElementById("box");
const log = document.getElementById("log");

box.onclick = () => {
  const r = box.getBoundingClientRect();
  log.textContent = \`Top: \${r.top}, Left: \${r.left}, Width: \${r.width}\`;
};`})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"3. Understanding Reflow & Repaint"}),e.jsxs("p",{className:"text-slate-300 max-w-3xl",children:["Every DOM update can trigger **layout calculations**. If you read layout (like ",e.jsx("code",{children:"offsetHeight"}),") immediately after writing style changes, the browser is forced to **reflow**, reducing performance."]}),e.jsx(t,{language:"javascript",initialCode:`// Bad: Forces reflow twice
box.style.width = "300px";
const h = box.offsetHeight; // Forces layout calculation
box.style.height = h + "px";`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Solution: batch reads separately from writes"}),e.jsx(t,{language:"javascript",initialCode:`// Good pattern
const height = box.offsetHeight;  // READ
requestAnimationFrame(() => {     // batch WRITE safely
  box.style.height = height + "px";
});`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300",children:"4. Batch DOM Updates for Performance"}),e.jsxs("p",{className:"max-w-2xl text-slate-300",children:["Touching DOM repeatedly inside loops is slow. Use ",e.jsx("code",{children:"DocumentFragment"})," to build off-screen DOM and append once."]}),e.jsx(t,{language:"javascript",initialCode:`const frag = document.createDocumentFragment();

for (let i = 0; i < 500; i++) {
  const div = document.createElement("div");
  div.textContent = "Item " + i;
  frag.appendChild(div);
}

container.appendChild(frag); // one paint`}),e.jsx("p",{className:"text-xs text-slate-400",children:"✔ 100× faster than appending in each loop"})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-300",children:"5. Event Delegation — The Most Powerful DOM Pattern"}),e.jsx("p",{className:"text-slate-300 max-w-3xl",children:"Instead of adding click listeners to every button, attach **one listener** to a parent, and detect which child triggered the event."}),e.jsx(t,{language:"javascript",initialCode:`list.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.classList.contains("edit")) {
    console.log("Edit clicked");
  }
  if (btn.classList.contains("delete")) {
    console.log("Delete clicked");
  }
});`}),e.jsx("p",{className:"text-xs text-slate-400",children:"✔ Used in React (event delegation root) ✔ Great for dynamic lists"})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-rose-300",children:"6. Animations Using classList + CSS Transitions"}),e.jsx(s,{initialHTML:`<button id="btn">Toggle Box</button>
<div id="box" class="box"></div>`,initialCSS:`body{background:#020617; color:white; padding:20px;}
#box{
  width:120px; height:120px;
  background:#38bdf8;
  border-radius:12px;
  opacity:0.4;
  transition:transform .3s ease, opacity .3s ease;
}
#box.active{
  transform:translateX(50px) scale(1.2);
  opacity:1;
}`,initialJS:`const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = () => {
  box.classList.toggle("active");
};`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-300",children:"7. Animated Toast Notifications (Intro)"}),e.jsx(s,{initialHTML:`<button id="show">Show Toast</button>
<div id="toast" class="toast hidden">Hello Baba!</div>`,initialCSS:`body{background:#020617;color:white;font-family:sans-serif;}
.toast{
  position:fixed;
  bottom:20px; right:20px;
  background:#22c55e;
  padding:12px 18px;
  border-radius:8px;
  opacity:0;
  transform:translateY(20px);
  transition:all .25s ease;
}
.toast.show{
  opacity:1;
  transform:translateY(0);
}
.hidden{display:none;}`,initialJS:`const t = document.getElementById("toast");
const show = document.getElementById("show");

show.onclick = () => {
  t.classList.remove("hidden");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1500);
};`})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-lime-300",children:"8. Tooltip, Modal & Dropdown — Core Structure"}),e.jsx("p",{className:"text-slate-400",children:"These UI components rely on: • Positioning (bounding rectangle) • Visibility toggles • Backdrop / overlay • Focus trapping (modal) • Event delegation"}),e.jsx(t,{language:"javascript",initialCode:`// Modal show/hide pattern
openBtn.onclick = () => modal.classList.add("open");
closeBtn.onclick = () => modal.classList.remove("open");`})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"9. Virtualized Rendering — Efficient Huge Lists"}),e.jsx("p",{className:"text-slate-300 max-w-3xl",children:"Rendering 1000+ DOM nodes is slow. Virtualization renders only the items visible in the viewport."}),e.jsx(t,{language:"javascript",initialCode:`// Conceptual example
const start = scrollTop / itemHeight;
const end = start + visibleCount;

render(items.slice(start, end));`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-300",children:"10. Smooth Animations using requestAnimationFrame()"}),e.jsx(s,{initialHTML:`<button id="run">Animate Box</button>
<div id="box" style="width:40px;height:40px;background:#f43f5e;margin-top:20px;"></div>`,initialCSS:"body{background:#020617;color:white;font-family:sans-serif;}",initialJS:`const box = document.getElementById("box");
const run = document.getElementById("run");

run.onclick = () => {
  let x = 0;

  function animate() {
    x += 2;
    box.style.transform = \`translateX(\${x}px)\`;

    if (x < 200) requestAnimationFrame(animate);
  }

  animate();
};`})]}),e.jsxs("section",{className:"space-y-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"11. Observers — Watching DOM & Visibility"}),e.jsx(t,{language:"javascript",initialCode:`const obs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) console.log("Visible!");
});
obs.observe(document.getElementById("box"));`}),e.jsx(t,{language:"javascript",initialCode:`new ResizeObserver(entries => {
  console.log("Size changed:", entries[0].contentRect);
}).observe(panel);`}),e.jsx(t,{language:"javascript",initialCode:`new MutationObserver(mutations => {
  console.log("DOM mutated", mutations);
}).observe(app, { childList: true, subtree: true });`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-300",children:"12. Build Your Own DOM Helper Library"}),e.jsx(t,{language:"javascript",initialCode:`const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function create(tag, props = {}) {
  const el = document.createElement(tag);
  return Object.assign(el, props);
}

function on(el, event, handler) {
  el.addEventListener(event, handler);
  return el;
}`}),e.jsx("p",{className:"text-xs text-slate-400",children:"This is how jQuery, Alpine.js, Solid.js begin internally."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300",children:"13. Separating UI Logic from State Logic"}),e.jsx(t,{language:"javascript",initialCode:`// STATE
let count = 0;

// UI UPDATE
function render() {
  counter.textContent = count;
}

// EVENT
incBtn.onclick = () => {
  count++;
  render();
};`}),","]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"14. Progressive Enhancement — Never Break UI"}),e.jsx("p",{className:"text-slate-300 max-w-3xl",children:"Websites must work **without JavaScript**, and improve when JS is available."}),e.jsx(t,{language:"html",initialCode:`<!-- HTML works without JS -->
<button class="buy-btn">Buy Now</button>

<!-- JS enhances with modal -->
<script>
  document.querySelector(".buy-btn").onclick = showModal;
<\/script>`})]}),e.jsxs("section",{className:"space-y-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Mini Project 2 — Dynamic Card Generator with Filters"}),e.jsx(s,{initialHTML:`<input id="search" placeholder="Search..." />
<div id="cards"></div>`,initialCSS:`body{background:#020617;color:white;font-family:sans-serif;}
.card{padding:12px;border:1px solid #38bdf8;border-radius:8px;margin-top:8px;}`,initialJS:`const data = [
  { title: "JavaScript" },
  { title: "React" },
  { title: "CSS" },
  { title: "DOM Manipulation" }
];

const cards = document.getElementById("cards");
const search = document.getElementById("search");

function render(list) {
  cards.innerHTML = "";
  list.forEach(item => {
    const c = document.createElement("div");
    c.className = "card";
    c.textContent = item.title;
    cards.appendChild(c);
  });
}

render(data);

search.oninput = () => {
  const q = search.value.toLowerCase();
  render(data.filter(x => x.title.toLowerCase().includes(q)));
};`})]}),e.jsxs("section",{className:"space-y-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-rose-300",children:"Mini Project 3 — Animated Notification Center (Intro)"}),e.jsx(t,{language:"javascript",initialCode:`function notify(msg, type="info") {
  const box = document.createElement("div");
  box.className = "toast " + type;
  box.textContent = msg;

  container.appendChild(box);

  requestAnimationFrame(() => box.classList.add("show"));

  setTimeout(() => box.classList.remove("show"), 2000);
}`}),e.jsx("p",{className:"text-xs text-slate-500",children:"Full Notification Center is in the next topic."})]}),e.jsx("footer",{className:"text-slate-400 text-sm pt-10 border-t border-slate-800",children:"You now understand professional DOM engineering fundamentals used in real UI frameworks."})]})}}export{c as default};

import{r as s,j as e,E as t}from"./index-DObX_txt.js";class l extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsx("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M3 4H21M3 12H21M3 20H21",stroke:"#38bdf8",strokeWidth:"1.5",strokeLinecap:"round"})}),"Handling Multiple Elements & Bulk DOM Creation"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"Learn how to create **dozens or thousands of DOM elements** efficiently using loops, templates, fragments, and reusable rendering utilities. These techniques are used internally by modern JS frameworks."})]}),e.jsx("section",{className:"flex justify-center py-4",children:e.jsxs("svg",{width:"360",height:"220",viewBox:"0 0 360 200",children:[e.jsx("rect",{x:"10",y:"10",width:"340",height:"180",rx:"14",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"90",y:"40",fill:"#38bdf8",fontSize:"16",children:"Bulk DOM Creation"}),e.jsx("rect",{x:"30",y:"70",width:"300",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"120",y:"95",fill:"#a5f3fc",children:"Loop → Create → Append"}),e.jsx("rect",{x:"30",y:"120",width:"300",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"115",y:"145",fill:"#a5f3fc",children:"Template → Clone → Insert"})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"1. Creating Multiple Elements with Loops"}),e.jsxs("p",{className:"text-slate-300",children:["The most common real-world need is to display a list (tasks, products, users). Loops + ",e.jsx("code",{children:"createElement"})," solve this cleanly."]}),e.jsx(t,{language:"javascript",initialCode:`const items = ["Apple", "Banana", "Orange", "Grapes"];

const ul = document.createElement("ul");

for (const item of items) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

document.body.appendChild(ul);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"2. Rendering Arrays of Objects (Professional UI)"}),e.jsx("p",{className:"text-slate-300",children:"Most data in applications comes from objects — user profiles, products, tasks."}),e.jsx(t,{language:"javascript",initialCode:`const students = [
  { name: "Ritaja", score: 92 },
  { name: "Mounita", score: 88 },
  { name: "Devangshu", score: 95 },
];

const container = document.createElement("div");

for (const s of students) {
  const card = document.createElement("div");
  card.className = "student-card";

  card.innerHTML = \`
    <h3>\${s.name}</h3>
    <p>Score: \${s.score}</p>
  \`;

  container.appendChild(card);
}

document.body.appendChild(container);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"3. Using DocumentFragment for Performance"}),e.jsx("p",{className:"text-slate-300",children:"Creating 500+ elements one by one causes **reflows**. A DocumentFragment builds everything in memory first."}),e.jsx(t,{language:"javascript",initialCode:`const list = document.createDocumentFragment();

for (let i = 1; i <= 500; i++) {
  const div = document.createElement("div");
  div.textContent = "Item " + i;
  list.appendChild(div);
}

document.body.appendChild(list); // One-time render`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"4. Using <template> for Clean Dynamic UI"}),e.jsx("p",{className:"text-slate-300",children:"Templates allow you to write HTML once and clone it for each item — clean & powerful."}),e.jsx(t,{language:"html",initialCode:`<template id="userTemplate">
  <div class="userCard">
    <h3 class="name"></h3>
    <p class="role"></p>
  </div>
</template>`}),e.jsx(t,{language:"javascript",initialCode:`const users = [
  { name: "Kaustav", role: "Developer" },
  { name: "Pranjali", role: "Designer" }
];

const template = document.getElementById("userTemplate");
const container = document.createElement("div");

for (const u of users) {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".name").textContent = u.name;
  clone.querySelector(".role").textContent = u.role;

  container.appendChild(clone);
}

document.body.appendChild(container);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["5. Creating a Reusable ",e.jsx("code",{children:"renderList()"})," Function"]}),e.jsx("p",{className:"text-slate-300",children:"Build your own jQuery-like rendering helper."}),e.jsx(t,{language:"javascript",initialCode:`function renderList(parent, items, renderFn) {
  const frag = document.createDocumentFragment();

  for (const item of items) {
    const el = renderFn(item);
    frag.appendChild(el);
  }

  parent.appendChild(frag);
}

// Usage:
renderList(document.body, ["A", "B", "C"], (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div;
});`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"6. Animated Bulk Rendering (Fade-in Cards)"}),e.jsx("p",{className:"text-slate-300",children:"Add animations while rendering lists — exactly how modern UI frameworks work."}),e.jsx(t,{language:"javascript",initialCode:`const products = [
  { title: "Laptop", price: 52000 },
  { title: "Mouse", price: 800 },
  { title: "Keyboard", price: 1600 }
];

function createProductCard(p) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = \`
    <h3>\${p.title}</h3>
    <p>₹\${p.price}</p>
  \`;

  // Animation
  card.style.opacity = 0;
  setTimeout(() => (card.style.opacity = 1), 50);

  return card;
}

renderList(document.body, products, createProductCard);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"7. Rendering Real-World Data (Students, Tasks, Courses)"}),e.jsx(t,{language:"javascript",initialCode:`const tasks = [
  { id: 1, text: "Complete JS Assignment", done: false },
  { id: 2, text: "Prepare React Notes", done: true }
];

renderList(document.body, tasks, (t) => {
  const box = document.createElement("div");
  box.className = "task";

  box.innerHTML = \`
    <input type="checkbox" \${t.done ? "checked" : ""} />
    <span>\${t.text}</span>
  \`;

  return box;
});`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsx("p",{children:"Bulk DOM creation & template rendering are **core frontend engineering skills**. These techniques scale easily from small classroom projects to full web applications."})})]})}}export{l as default};

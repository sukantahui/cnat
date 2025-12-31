import{r as s,j as e}from"./index-By8I_gO0.js";import{C as t}from"./CodePenPlayground-DeoIBjsN.js";import"./rotate-ccw-54CFfP8W.js";class d extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 48 48",fill:"none",children:[e.jsx("rect",{x:"4",y:"4",width:"40",height:"40",rx:"10",fill:"#020617",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("path",{d:"M14 18H34M14 24H28M14 30H22",stroke:"#38bdf8",strokeWidth:"1.6",strokeLinecap:"round"})]}),"DOM Special – Advanced Patterns & Power Techniques"]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base",children:["In this topic, you will learn ",e.jsx("strong",{children:"advanced DOM patterns"})," used in modern, high-performance JavaScript applications – from cloning and batch updates to observers, animations and small helper libraries (a mini jQuery style)."]})]}),e.jsx("section",{className:"flex justify-center",children:e.jsxs("svg",{width:"360",height:"220",viewBox:"0 0 360 220",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"domFlow",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"50%",stopColor:"#22c55e"}),e.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})}),e.jsx("rect",{x:"15",y:"15",width:"330",height:"190",rx:"16",fill:"#020617",stroke:"#1f2937"}),e.jsx("text",{x:"70",y:"40",fill:"#e5e7eb",fontSize:"16",children:"Advanced DOM Power Flow"}),e.jsx("rect",{x:"30",y:"70",width:"120",height:"40",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"50",y:"95",fill:"#a5f3fc",fontSize:"12",children:"Create / Clone"}),e.jsx("rect",{x:"210",y:"70",width:"120",height:"40",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"228",y:"95",fill:"#a5f3fc",fontSize:"12",children:"Batch & Templates"}),e.jsx("rect",{x:"30",y:"140",width:"120",height:"40",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"52",y:"165",fill:"#bbf7d0",fontSize:"12",children:"Events & UI"}),e.jsx("rect",{x:"210",y:"140",width:"120",height:"40",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"218",y:"165",fill:"#f9a8d4",fontSize:"12",children:"Observers & Perf"}),e.jsx("path",{d:"M150 90H210",stroke:"url(#domFlow)",strokeWidth:"1.8",markerEnd:"url(#arrowhead)"}),e.jsx("path",{d:"M270 110L270 140",stroke:"url(#domFlow)",strokeWidth:"1.8",markerEnd:"url(#arrowhead)"}),e.jsx("path",{d:"M90 110L90 140",stroke:"url(#domFlow)",strokeWidth:"1.8",markerEnd:"url(#arrowhead)"}),e.jsx("path",{d:"M150 160H210",stroke:"url(#domFlow)",strokeWidth:"1.8",markerEnd:"url(#arrowhead)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#38bdf8"})})})]})}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"1. cloneNode() — Precise Behavior, Deep / Shallow Copy, Edge Cases, Best Use"}),e.jsxs("svg",{width:"380",height:"150",className:"bg-transparent",children:[e.jsx("rect",{x:"20",y:"25",width:"150",height:"110",rx:"12",fill:"#020617",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"40",y:"55",fill:"#38bdf8",fontSize:"13",children:"Original Node"}),e.jsx("text",{x:"40",y:"75",fill:"#9ca3af",fontSize:"10",children:"Type: Element / Text"}),e.jsx("rect",{x:"210",y:"25",width:"150",height:"110",rx:"12",fill:"#020617",stroke:"#22c55e",strokeWidth:"2"}),e.jsx("text",{x:"230",y:"55",fill:"#22c55e",fontSize:"13",children:"Cloned Node"}),e.jsx("text",{x:"230",y:"75",fill:"#9ca3af",fontSize:"10",children:"New object & ID"}),e.jsx("line",{x1:"170",y1:"80",x2:"210",y2:"80",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrowHeadClone)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowHeadClone",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0 0 L6 3 L0 6 Z",fill:"#a855f7"})})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Full Syntax, Parameters & Return Type"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm whitespace-pre-wrap",children:`// Syntax:
const clone = node.cloneNode(deep);

// Parameters:
   deep (optional: boolean)
     false (default) → Shallow clone:
         • Clones ONLY the node
         • Does NOT clone children
     true → Deep clone:
         • Clones the node + ALL descendants

Return Type:
   Node — same concrete type as original:
   Element, Text, Comment, DocumentFragment, etc.

Important Notes:
   • clone is NOT inserted in DOM automatically
   • clone === node → false (new reference)
   • IDs are copied—must fix manually
   • Event listeners are NOT cloned
   • Node.dataset is cloned normally
   • Custom JS properties are NOT copied
   • <template>.content deep cloning behaves specially (uses fragments)
`})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("h4",{className:"font-semibold text-sky-300 mb-2",children:"✅ What IS copied"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-300",children:[e.jsx("li",{children:"The element type (DIV, LI, BUTTON…)"}),e.jsxs("li",{children:["All attributes:",e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"class"}),e.jsx("li",{children:"style"}),e.jsx("li",{children:"data-* attributes (dataset)"}),e.jsx("li",{children:"id (⚠️ Duplicate IDs risk)"})]})]}),e.jsx("li",{children:"Text nodes (deep clone only)"}),e.jsx("li",{children:"Child elements (deep clone only)"}),e.jsx("li",{children:"Inline style properties"}),e.jsx("li",{children:"Form state (value, checked, etc.) is usually copied"})]})]}),e.jsxs("div",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("h4",{className:"font-semibold text-rose-300 mb-2",children:"❌ What is NOT copied"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-300",children:[e.jsxs("li",{children:["Event listeners added via ",e.jsx("code",{children:"addEventListener()"})]}),e.jsxs("li",{children:["Custom JS properties (e.g. ",e.jsx("code",{children:"element.customData"}),")"]}),e.jsx("li",{children:"External references / closures you attached manually"}),e.jsx("li",{children:"Runtime UI state like cursor position in input"}),e.jsx("li",{children:"Attached external objects (Maps, Sets, etc.)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 1 — Shallow vs Deep Clone"}),e.jsx(t,{initialJS:`const box = document.getElementById("box");

// shallow clone → NO children
const shallow = box.cloneNode();
console.log("Shallow clone:", shallow.outerHTML);

// deep clone → FULL subtree
const deep = box.cloneNode(true);
console.log("Deep clone:", deep.outerHTML);

// Example visual in DOM (if #box exists)
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(deep);`})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 2 — Event Listeners Are NOT Copied"}),e.jsx(t,{initialHTML:'<button id="mainBtn">Original Button</button>',initialJS:`const btn = document.querySelector("#mainBtn");

btn.addEventListener("click", () => console.log("Clicked main button"));

const clone = btn.cloneNode(true);
clone.textContent = "Cloned Button";
document.body.appendChild(clone);

clone.addEventListener("click", () => console.log("Clone clicked"));`}),e.jsxs("p",{className:"text-xs text-slate-400",children:["💡 Even with ",e.jsx("code",{children:"cloneNode(true)"}),", event listeners must be attached to the clone separately."]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 3 — cloneNode() with <template> and DocumentFragment"}),e.jsx(t,{initialHTML:`<template id="cardTemplate">
  <article class="card">
    <h3 class="card-title">Title</h3>
    <p class="card-body">Body text here…</p>
  </article>
</template>

<div id="cardMount"></div>`,initialCSS:`.card {
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 10px;
  background: #0f172a;
  color: #e5e7eb;
  border: 1px solid #1f2937;
}

.card-title {
  font-weight: 600;
  color: #38bdf8;
  margin-bottom: 4px;
}

.card-body {
  font-size: 14px;
  color: #cbd5f5;
}`,initialJS:`const tmpl = document.getElementById("cardTemplate");
const mount = document.getElementById("cardMount");

// template.content is a DocumentFragment
const fragmentClone = tmpl.content.cloneNode(true);
fragmentClone.querySelector(".card-title").textContent = "Cloned Card";
fragmentClone.querySelector(".card-body").textContent =
  "This card comes from cloneNode(true) on template.content.";

mount.appendChild(fragmentClone);`})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Example 4 — Avoid Duplicate IDs After Cloning"}),e.jsx(t,{initialHTML:`<div id="userCard" class="user-card">
  <h3 id="userName">Student Name</h3>
  <button class="edit-btn">Edit</button>
</div>`,initialCSS:`.user-card {
  padding: 10px 14px;
  border-radius: 10px;
  margin: 6px 0;
  background: #020617;
  border: 1px solid #1f2937;
  color: #e5e7eb;
}

.edit-btn {
  margin-top: 6px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #38bdf8;
  color: #020617;
  border: none;
  cursor: pointer;
}`,initialJS:`const card = document.getElementById("userCard");
const cloned = card.cloneNode(true);

// Fix duplicate ID
cloned.id = "userCardCopy";
const nameEl = cloned.querySelector("#userName");
// IDs duplicated inside clone — better to remove or change
if (nameEl) {
  nameEl.id = "userNameCopy";
  nameEl.textContent = "Cloned Student";
}

document.body.appendChild(cloned);`})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:"Pro Tips & Best Practices with cloneNode()"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-300 text-sm",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"deep clones"})," with hidden templates (cards, list items, buttons) to render repeated UI."]}),e.jsxs("li",{children:["Combine ",e.jsx("code",{children:"cloneNode(true)"})," with ",e.jsx("code",{children:"DocumentFragment"})," for high-performance list rendering."]}),e.jsxs("li",{children:["Always review and fix duplicated ",e.jsx("code",{children:"id"})," attributes on clones."]}),e.jsx("li",{children:"Attach event listeners to clones explicitly after cloning."}),e.jsx("li",{children:"Avoid cloning extremely large trees repeatedly — create once, reuse carefully or split into smaller components."}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"cloneNode()"})," over raw ",e.jsx("code",{children:"innerHTML"})," when you want safer DOM generation and fewer XSS risks."]})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300",children:"Visual Understanding — How cloneNode() Copies the DOM Tree"}),e.jsxs("svg",{width:"500",height:"260",children:[e.jsx("text",{x:"40",y:"25",fill:"#38bdf8",fontSize:"14",children:"Original DOM Tree"}),e.jsx("rect",{x:"40",y:"40",width:"80",height:"40",rx:"8",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"55",y:"65",fill:"#38bdf8",fontSize:"12",children:"DIV"}),e.jsx("rect",{x:"30",y:"100",width:"70",height:"35",rx:"6",fill:"#0f172a",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("text",{x:"40",y:"122",fill:"#fbbf24",fontSize:"10",children:"P"}),e.jsx("rect",{x:"120",y:"100",width:"90",height:"35",rx:"6",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"135",y:"122",fill:"#a855f7",fontSize:"10",children:"BUTTON"}),e.jsx("text",{x:"260",y:"25",fill:"#22c55e",fontSize:"14",children:"Deep Clone Output"}),e.jsx("rect",{x:"260",y:"40",width:"80",height:"40",rx:"8",fill:"#0f172a",stroke:"#22c55e",strokeWidth:"2"}),e.jsx("text",{x:"275",y:"65",fill:"#22c55e",fontSize:"12",children:"DIV"}),e.jsx("rect",{x:"250",y:"100",width:"70",height:"35",rx:"6",fill:"#0f172a",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("text",{x:"260",y:"122",fill:"#fbbf24",fontSize:"10",children:"P"}),e.jsx("rect",{x:"340",y:"100",width:"90",height:"35",rx:"6",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"122",fill:"#a855f7",fontSize:"10",children:"BUTTON"})]}),e.jsxs("p",{className:"text-slate-400 text-sm max-w-2xl",children:["In a ",e.jsx("strong",{children:"deep clone"}),", the entire subtree is recreated. In a"," ",e.jsx("strong",{children:"shallow clone"}),", only the root node is copied – no children."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"cloneNode() vs innerHTML vs <template> — Which Should You Use?"}),e.jsxs("table",{className:"w-full text-sm border border-slate-700",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 border",children:"Method"}),e.jsx("th",{className:"p-2 border",children:"Copies Events?"}),e.jsx("th",{className:"p-2 border",children:"Safety"}),e.jsx("th",{className:"p-2 border",children:"Performance"}),e.jsx("th",{className:"p-2 border",children:"Typical Use"})]})}),e.jsxs("tbody",{className:"text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"cloneNode(true)"}),e.jsx("td",{className:"border p-2",children:"❌ No"}),e.jsx("td",{className:"border p-2",children:"✅ Safe (DOM-based)"}),e.jsx("td",{className:"border p-2",children:"⭐⭐⭐⭐"}),e.jsx("td",{className:"border p-2",children:"Component templates, repeated UI"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"innerHTML"}),e.jsx("td",{className:"border p-2",children:"❌ No"}),e.jsx("td",{className:"border p-2 text-red-400",children:"⚠️ Risk of XSS if misused"}),e.jsx("td",{className:"border p-2",children:"⭐⭐⭐"}),e.jsx("td",{className:"border p-2",children:"Quick HTML injection from strings"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"<template>"}),e.jsx("td",{className:"border p-2",children:"N/A (relies on fragment clones)"}),e.jsx("td",{className:"border p-2",children:"✅ Very Safe & structured"}),e.jsx("td",{className:"border p-2",children:"⭐⭐⭐⭐⭐"}),e.jsx("td",{className:"border p-2",children:"Professional, scalable UI systems"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-pink-300",children:"Browser Support"}),e.jsxs("table",{className:"w-full text-sm border border-slate-700",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2",children:"Browser"}),e.jsx("th",{className:"border p-2",children:"Support"})]})}),e.jsxs("tbody",{className:"text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Chrome"}),e.jsx("td",{className:"border p-2",children:"✔️ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Firefox"}),e.jsx("td",{className:"border p-2",children:"✔️ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Safari"}),e.jsx("td",{className:"border p-2",children:"✔️ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Edge"}),e.jsx("td",{className:"border p-2",children:"✔️ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"IE (old)"}),e.jsx("td",{className:"border p-2 text-red-400",children:"⚠️ Partial / buggy"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-300",children:"Performance Benchmark — cloneNode vs createElement"}),e.jsx(t,{initialJS:`console.log("Open DevTools console to see timings.");

const template = document.createElement("div");
template.textContent = "Hi";

console.time("clone");
for (let i = 0; i < 5000; i++) {
  template.cloneNode(true);
}
console.timeEnd("clone");

console.time("createElement");
for (let i = 0; i < 5000; i++) {
  const el = document.createElement("div");
  el.textContent = "Hi";
}
console.timeEnd("createElement");`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["In many cases, ",e.jsx("code",{children:"cloneNode()"})," is faster when duplicating structured components, especially together with ",e.jsx("code",{children:"DocumentFragment"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-400",children:"Real Engineering Notes (React, Vue, Svelte Developers)"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm space-y-1 text-slate-300",children:[e.jsxs("li",{children:["React does not rely on ",e.jsx("code",{children:"cloneNode()"}),"; it uses a Virtual DOM diffing system."]}),e.jsx("li",{children:"Vue compiles templates into render functions (JS), not direct DOM clones."}),e.jsxs("li",{children:["Web Components often use ",e.jsx("code",{children:"template"})," + ",e.jsx("code",{children:"cloneNode(true)"})," for Shadow DOM structures."]}),e.jsxs("li",{children:["Custom UI libraries (no framework) can use ",e.jsx("code",{children:"cloneNode()"})," + fragments for very fast rendering."]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-300",children:"Pitfalls Developers Must Know"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm space-y-1 text-slate-300",children:[e.jsxs("li",{children:["Duplicate IDs break ",e.jsx("code",{children:"querySelector"}),", CSS targeting, and accessibility."]}),e.jsx("li",{children:"Video/audio elements may lose playback state when cloned."}),e.jsx("li",{children:"Canvas and SVG cloning can behave slightly differently across browsers."}),e.jsx("li",{children:"Form fields clone their value — sometimes you might want an empty copy."}),e.jsx("li",{children:"Cloning very large DOM trees repeatedly can freeze or jank the UI."})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-300",children:"Mini Exercise — Fix the Broken Clone"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Click a button → clone a card → fix ID → reattach events → append to container."}),e.jsx(t,{initialHTML:`<button id="cloneBtn">Clone User Card</button>

<div class="container">
  <article id="userCard" class="user-card">
    <h3 class="name">Student Name</h3>
    <button class="edit">Edit</button>
  </article>
</div>`,initialCSS:`.user-card {
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  background: #020617;
  border: 1px solid #1f2937;
  color: #e5e7eb;
}

.user-card + .user-card {
  margin-top: 8px;
}

.edit {
  margin-top: 6px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #22c55e;
  border: none;
  color: #020617;
  cursor: pointer;
}`,initialJS:`const card = document.querySelector("#userCard");
const btn = document.querySelector("#cloneBtn");
const container = document.querySelector(".container");

function attachEditHandler(cardEl) {
  const editBtn = cardEl.querySelector(".edit");
  if (!editBtn) return;
  editBtn.onclick = () => alert("Edited: " + cardEl.querySelector(".name").textContent);
}

// initial attach for original card
attachEditHandler(card);

btn.onclick = () => {
  const copy = card.cloneNode(true);

  // Fix duplicate ID
  copy.id = "userCard-" + Math.random().toString(36).slice(2);
  const nameEl = copy.querySelector(".name");
  if (nameEl) {
    nameEl.textContent = "Cloned – " + nameEl.textContent;
  }

  // Reattach event for the clone
  attachEditHandler(copy);

  container.appendChild(copy);
};`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-300",children:"Architecture: When Should You Use cloneNode() in Real Projects?"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-slate-300 text-sm",children:[e.jsx("li",{children:"When building a custom UI library (buttons, cards, modals, list items)."}),e.jsx("li",{children:"When rendering repeating components efficiently (lists, grids, dashboards)."}),e.jsx("li",{children:"When you need stable, reusable DOM skeletons (templates)."}),e.jsx("li",{children:"When performance matters more than flexible HTML string manipulation."}),e.jsxs("li",{children:["When you want a safer alternative to string-based ",e.jsx("code",{children:"innerHTML"})," templating."]})]})]})]})}}export{d as default};

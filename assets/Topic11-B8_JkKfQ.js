import{r as i,j as e,E as n}from"./index-SZ7XnWrl.js";import{C as t}from"./CodePenPlayground-C0nxt1k6.js";import"./rotate-ccw-D_rqd7Dq.js";class c extends i.Component{render(){return e.jsxs("div",{className:"space-y-14 text-slate-200",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400",children:"Mini Project — Dynamic List Manager (Add / Edit / Remove Items)"}),e.jsxs("p",{className:"text-slate-400 max-w-3xl",children:["This project teaches you how to build a fully interactive **List Manager UI** using real-world DOM APIs used in dashboards, inventory systems, todo apps, admin panels, and form builders. You will use:",e.jsx("b",{children:" createElement() "}),",",e.jsx("b",{children:" appendChild() "}),",",e.jsx("b",{children:" replaceChild() "}),",",e.jsx("b",{children:" remove() "}),",",e.jsx("b",{children:" classList "}),", and",e.jsx("b",{children:"event delegation"}),"."]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-300",children:"1. Architecture — How a List Manager Works"}),e.jsx("p",{className:"text-slate-400 max-w-2xl",children:"Before writing code, understand what UI elements and behaviors are required for a real list manager."}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-300 space-y-1",children:[e.jsx("li",{children:"Input box to add new items"}),e.jsx("li",{children:"Add button to create list entries"}),e.jsx("li",{children:"A dynamic list of items"}),e.jsx("li",{children:"Edit button → inline editing"}),e.jsx("li",{children:"Delete button → remove item"}),e.jsx("li",{children:"Optionally store in LocalStorage"})]}),e.jsxs("svg",{width:"430",height:"170",children:[e.jsx("rect",{x:"20",y:"20",width:"380",height:"130",rx:"12",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"40",y:"55",fill:"#38bdf8",fontSize:"14",children:"INPUT BOX → ADD BUTTON"}),e.jsx("text",{x:"40",y:"85",fill:"#a855f7",fontSize:"12",children:"↓ Creates LI elements dynamically via JS"}),e.jsx("text",{x:"40",y:"120",fill:"#22c55e",fontSize:"14",children:"LIST → <li> Item [Edit] [Delete]"}),e.jsx("text",{x:"40",y:"150",fill:"#f97316",fontSize:"12",children:"Editing replaces text with input + Save button"})]}),e.jsx(t,{initialHTML:`
<div class="box">
  <p>List Manager Architecture Demo</p>
</div>`,initialCSS:`
.box { 
  padding: 14px; 
  background: #1e293b; 
  border-radius: 10px; 
  color: #bae6fd; 
  text-align: center;
  border: 1px solid #334155;
}`,initialJS:'console.log("Architecture section loaded");'})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"2. Basic Structure (UI + Base Script)"}),e.jsx(n,{language:"html",initialCode:`<!-- HTML -->
<div class="manager">
    <input id="itemInput" placeholder="Enter item..." />
    <button id="addBtn">Add</button>
    <ul id="list"></ul>
</div>

// JavaScript Base
const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.onclick = () => {
    const value = input.value.trim();
    if (!value) return;
    addItem(value);
    input.value = "";
};`}),e.jsx(t,{initialHTML:`
<div class="manager">
  <input id="itemInput" placeholder="Enter item..." />
  <button id="addBtn">Add</button>
  <ul id="list"></ul>
</div>`,initialCSS:`
.manager { padding: 10px; }
button { margin-left: 5px; }
ul li { padding: 5px 0; }`,initialJS:`
const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.onclick = () => {
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  input.value = "";
};`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"3. Adding Items Dynamically"}),e.jsx(n,{language:"javascript",initialCode:`function addItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  li.append(span, editBtn, delBtn);
  list.appendChild(li);
}`}),e.jsx(t,{initialHTML:`
<input id="txt" placeholder="Item..."/>
<button id="add">Add</button>
<ul id="list"></ul>`,initialCSS:`
li { padding: 4px; margin: 4px 0; }
button { margin-left: 6px; }`,initialJS:`
const txt = document.querySelector("#txt");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

add.onclick = () => {
  const value = txt.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  txt.value = "";
};`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"4. Inline Editing (replaceChild)"}),e.jsx(n,{language:"javascript",initialCode:`editBtn.onclick = () => {
  const input = document.createElement("input");
  input.value = span.textContent;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const wrapper = document.createElement("div");
  wrapper.append(input, saveBtn);

  // Replace text with editable box
  li.replaceChild(wrapper, span);

  saveBtn.onclick = () => {
    span.textContent = input.value;
    li.replaceChild(span, wrapper);
  };
};`}),e.jsx(t,{initialHTML:`
<ul id="list">
 <li>
   <span>Example Item</span>
   <button class="edit">Edit</button>
 </li>
</ul>`,initialCSS:`
li { padding: 5px; }
input { margin-right: 5px; }`,initialJS:`
const li = document.querySelector("li");
const span = li.querySelector("span");
const editBtn = li.querySelector(".edit");

editBtn.onclick = () => {
  const input = document.createElement("input");
  input.value = span.textContent;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const wrapper = document.createElement("div");
  wrapper.append(input, saveBtn);

  li.replaceChild(wrapper, span);

  saveBtn.onclick = () => {
    span.textContent = input.value;
    li.replaceChild(span, wrapper);
  };
};`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-rose-300",children:"5. Removing Items"}),e.jsx(n,{language:"javascript",initialCode:`delBtn.onclick = () => {
  li.classList.add("fade-out");
  setTimeout(() => li.remove(), 300);
};`}),e.jsx(t,{initialHTML:`
<ul id="list">
  <li>Delete me <button class="del">Delete</button></li>
</ul>`,initialCSS:`
.fade-out { 
  opacity: 0; 
  transition: opacity .3s; 
}`,initialJS:`
const li = document.querySelector("li");
const del = document.querySelector(".del");

del.onclick = () => {
  li.classList.add("fade-out");
  setTimeout(() => li.remove(), 300);
};`})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300",children:"6. Full Working Project — Dynamic List Manager"}),e.jsx(t,{initialHTML:`
<div class="manager">
  <input id="itemInput" placeholder="Enter item..." />
  <button id="addBtn">Add</button>
  <ul id="list"></ul>
</div>`,initialCSS:`
.item { padding: 6px; }
button { margin-left: 8px; }
.fade-out { opacity: 0; transition: opacity .3s; }`,initialJS:`
// Select elements
const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.onclick = () => {
  const value = input.value.trim();
  if (!value) return;
  addItem(value);
  input.value = "";
};

function addItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  li.append(span, editBtn, delBtn);
  list.appendChild(li);

  // Edit
  editBtn.onclick = () => {
    const input = document.createElement("input");
    input.value = span.textContent;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    const wrapper = document.createElement("div");
    wrapper.append(input, saveBtn);

    li.replaceChild(wrapper, span);

    saveBtn.onclick = () => {
      span.textContent = input.value;
      li.replaceChild(span, wrapper);
    };
  };

  // Delete
  delBtn.onclick = () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  };
}`})]}),e.jsx("footer",{className:"pt-10 pb-6 text-slate-500 text-sm",children:"🎉 You built a professional dynamic List Manager used in real UI systems. In the next topics, we will build even more advanced component architectures."})]})}}export{c as default};

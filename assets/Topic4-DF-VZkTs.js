import{r as s,j as e,E as t}from"./index-SZ7XnWrl.js";class a extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-emerald-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),e.jsx("path",{d:"M7 12h10M12 7v10",stroke:"currentColor",strokeWidth:"1.5"})]}),"Mini Project — Dynamic List Manager"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"In this mini-project, we build a full **Dynamic List Manager** where users can: ✔ Add items ✔ Edit items ✔ Delete items ✔ Animate updates ✔ Highlight edited or new items ✔ Use reusable DOM helper functions This project is a perfect step before learning React or Vue."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"26",height:"26",fill:"none",children:[e.jsx("circle",{cx:"13",cy:"13",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 13h10",stroke:"currentColor",strokeWidth:"1.5"})]}),"1. Base HTML Structure"]}),e.jsx("p",{className:"text-slate-300",children:"We begin by preparing a simple HTML layout. Later, JavaScript will bring the interface to life dynamically."}),e.jsx(t,{language:"html",initialCode:`<div id="listApp" class="list-app">
  <h2 class="title">My Dynamic List</h2>

  <div class="input-row">
    <input id="itemInput" type="text" placeholder="Enter item..." />
    <button id="addBtn">Add</button>
  </div>

  <ul id="itemList"></ul>
</div>`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M4 12h16M12 4v16",stroke:"currentColor",strokeWidth:"1.5"})}),"2. Reusable DOM Utility Functions"]}),e.jsx("p",{className:"text-slate-300",children:"These helper functions simplify DOM creation and reduce code repetition."}),e.jsx(t,{language:"javascript",initialCode:`function el(tag, className = "", text = "") {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

function button(label, className) {
  const btn = el("button", className, label);
  return btn;
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("rect",{x:"4",y:"4",width:"16",height:"16",stroke:"currentColor",strokeWidth:"1.5"})}),"3. Rendering a List Item (with Edit + Delete buttons)"]}),e.jsx(t,{language:"javascript",initialCode:`function createListItem(text) {
  const li = el("li", "item");

  const span = el("span", "item-text", text);

  const editBtn = button("Edit", "edit-btn");
  const delBtn = button("Delete", "delete-btn");

  li.append(span, editBtn, delBtn);

  // Animation for entry
  li.classList.add("fade-in");

  return li;
}`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Each new item fades in ✔ Buttons appear inside the list item"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-yellow-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5"})}),"4. Add Item Functionality"]}),e.jsx(t,{language:"javascript",initialCode:`const list = document.getElementById("itemList");
const input = document.getElementById("itemInput");

document.getElementById("addBtn").onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  const li = createListItem(text);
  list.appendChild(li);

  input.value = "";
  input.focus();
};`}),e.jsx("p",{className:"text-slate-300",children:"✔ Adds new items ✔ Focus returns to input box"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-blue-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M4 12h16M12 4v16",stroke:"currentColor",strokeWidth:"1.5"})}),"5. Editing Items (Inline Editor)"]}),e.jsx(t,{language:"javascript",initialCode:`list.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit-btn")) return;

  const li = e.target.parentElement;
  const span = li.querySelector(".item-text");

  const newText = prompt("Edit item:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText;

    li.classList.add("highlight");
    setTimeout(() => li.classList.remove("highlight"), 800);
  }
});`}),e.jsx("p",{className:"text-slate-300",children:"✔ Items can be renamed ✔ Highlight animation confirms update"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-red-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"28",height:"28",fill:"none",children:[e.jsx("path",{d:"M5 7h14M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("rect",{x:"6",y:"7",width:"12",height:"12",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]}),"6. Deleting Items (with Fade-Out Animation)"]}),e.jsx(t,{language:"javascript",initialCode:`list.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete-btn")) return;

  const li = e.target.parentElement;

  // fade-out animation before remove
  li.classList.add("fade-out");

  setTimeout(() => li.remove(), 350);
});`}),e.jsx("p",{className:"text-slate-300",children:"✔ Smooth deletion animation"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-pink-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"})}),"7. CSS Styling for Animations & Layout"]}),e.jsx(t,{language:"css",initialCode:`.item { 
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 6px;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  transition: 0.3s ease;
}

.fade-in {
  opacity: 0;
  transform: translateY(-5px);
  animation: fadeIn 0.35s forwards;
}

.fade-out {
  animation: fadeOut 0.35s forwards;
}

.highlight {
  background: #1d4ed8;
}

@keyframes fadeIn {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
  to { opacity: 0; transform: translateY(5px); }
}`})]}),e.jsx("footer",{className:"pt-8 border-t border-slate-800 text-slate-400 text-sm",children:e.jsx("p",{children:"Great job Baba! 🎉 You now created a **full mini CRUD application** using pure DOM manipulation. This is the closest step before entering **React, Vue, Angular**, where the same concepts become components and state."})})]})}}export{a as default};

import{r as n,j as e,E as t}from"./index-Bg406suL.js";class r extends n.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-fuchsia-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"1.7"})]}),"Advanced DOM Components — Factory & Render System"]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base",children:["In this chapter we move beyond simple DOM manipulation and build *a reusable component system* using JavaScript functions. You will learn:",e.jsx("br",{}),"✔ Component Factory Pattern ✔ Centralized State ✔ Render Function ✔ Mini Virtual DOM Idea ✔ Updating UI from Data",e.jsx("br",{}),"This topic is essential before learning **React, Vue, Svelte or Angular**."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",fill:"none",children:e.jsx("rect",{x:"4",y:"4",width:"20",height:"20",rx:"3",stroke:"currentColor",strokeWidth:"1.6"})}),"1. What Are Component Factory Functions?"]}),e.jsx("p",{className:"text-slate-300",children:"A **component factory function** creates DOM elements from data. Instead of manually creating DOM every time, we build **factories** that take data as input and return ready UI components."}),e.jsx(t,{language:"javascript",initialCode:`function Card({ title, desc }) {
  const card = document.createElement("div");
  card.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = desc;

  card.append(h3, p);
  return card;
}`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Factory functions make UI reusable ✔ Similar to React functional components"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"})}),"2. Creating a Simple Render Engine"]}),e.jsxs("p",{className:"text-slate-300",children:["A render engine takes:",e.jsx("br",{}),"• Data • A root element • A component factory",e.jsx("br",{}),"and regenerates UI based on the data."]}),e.jsx(t,{language:"javascript",initialCode:`function render(root, data, component) {
  root.innerHTML = ""; // clear old UI
  data.forEach(item => {
    const el = component(item);
    root.appendChild(el);
  });
}`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M4 12h16M12 4v16",stroke:"currentColor",strokeWidth:"1.5"})}),"3. Building a Central State"]}),e.jsx("p",{className:"text-slate-300",children:"State is our single source of truth. Changing state → triggers render → updates UI automatically."}),e.jsx(t,{language:"javascript",initialCode:`const state = {
  products: [
    { id: 1, name: "Keyboard", price: 500 },
    { id: 2, name: "Mouse", price: 300 }
  ]
};`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"28",height:"28",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 12h8",stroke:"currentColor",strokeWidth:"1.5"})]}),"4. Product Card Component for Render Engine"]}),e.jsx(t,{language:"javascript",initialCode:`function ProductCard({ id, name, price }) {
  const card = document.createElement("div");
  card.className = "product-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const p = document.createElement("p");
  p.textContent = "₹" + price;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => removeProduct(id);

  card.append(title, p, removeBtn);
  return card;
}`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-red-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M5 12h14",stroke:"currentColor",strokeWidth:"1.5"})}),"5. Remove Item + Auto Re-render"]}),e.jsx(t,{language:"javascript",initialCode:`function removeProduct(id) {
  state.products = state.products.filter(p => p.id !== id);
  updateUI();
}

function updateUI() {
  render(document.getElementById("root"), state.products, ProductCard);
}

// Initial draw
updateUI();`}),e.jsx("p",{className:"text-slate-400",children:"✔ State changes automatically update UI ✔ Similar thinking used in React state updates"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-green-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("path",{d:"M12 4v16M4 12h16",stroke:"currentColor",strokeWidth:"1.5"})}),"6. Adding Items (Consistent with the Render Cycle)"]}),e.jsx(t,{language:"javascript",initialCode:`function addProduct(name, price) {
  const newItem = {
    id: Date.now(),
    name,
    price
  };

  state.products.push(newItem);
  updateUI();
}

document.getElementById("addBtn").onclick = () => {
  const n = document.getElementById("nameInput").value.trim();
  const p = Number(document.getElementById("priceInput").value);

  if (!n || !p) return;

  addProduct(n, p);
};`}),e.jsx("p",{className:"text-slate-300",children:"✔ UI updates from a single source of truth ✔ Display always stays in sync with data"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-pink-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"})}),"7. CSS for Cards & Components"]}),e.jsx(t,{language:"css",initialCode:`.product-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-3px);
  border-color: #38bdf8;
}

.remove-btn {
  background: #dc2626;
  padding: 6px 10px;
  margin-top: 6px;
  border-radius: 6px;
  color: white;
}`})]}),e.jsx("footer",{className:"pt-8 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["Fantastic Baba! 🎉 You have now built:",e.jsx("br",{}),"✔ A component factory ✔ A render engine ✔ Central state management ✔ Reactive UI",e.jsx("br",{}),"These concepts are exactly what React, Vue, Angular, and Svelte are built on."]})})]})}}export{r as default};

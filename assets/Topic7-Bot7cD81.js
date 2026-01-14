import{r as s,j as e,E as t}from"./index-CjrfwjvR.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M4 4H20V20H4V4Z M9 9H15V15H9V9Z",stroke:"#38bdf8",strokeWidth:"1.5"})}),"Building Reusable DOM Utility Functions (Pro-Level)"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"Learn how professional developers build **mini DOM libraries** with powerful reusable functions that simplify element creation, querying, updates, and interactions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"Why Use DOM Utility Functions?"}),e.jsx("p",{className:"text-slate-300",children:"Utilities help reduce repetitive code and allow you to build **clean, readable, scalable UI components**, similar to what frameworks (React, Vue, jQuery) internally do."}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"320",height:"220",viewBox:"0 0 320 220",children:[e.jsx("rect",{x:"20",y:"20",width:"280",height:"180",rx:"12",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"70",y:"50",fill:"#38bdf8",fontSize:"16",children:"Utility Layer"}),e.jsx("rect",{x:"40",y:"80",width:"240",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"110",y:"105",fill:"#a5f3fc",children:"create(), append(), remove()"}),e.jsx("rect",{x:"40",y:"130",width:"240",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"110",y:"155",fill:"#a5f3fc",children:"style(), attr(), on()"}),e.jsx("text",{x:"70",y:"185",fill:"#38bdf8",fontSize:"12",children:"One layer to rule all UI building"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"1. Element Selector Utilities"}),e.jsx("p",{className:"text-slate-300",children:"These utility wrappers make DOM querying simpler and safer."}),e.jsx(t,{language:"javascript",initialCode:`// Select single element
const $ = (selector) => document.querySelector(selector);

// Select multiple elements
const $$ = (selector) => document.querySelectorAll(selector);

// Example:
const title = $("#mainTitle");
const buttons = $$(".btn");`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"2. create() — Make Elements Faster"}),e.jsx("p",{className:"text-slate-300",children:"A reusable helper to create elements with classes, attributes, and text."}),e.jsx(t,{language:"javascript",initialCode:`function create(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.class) el.className = options.class;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;

  if (options.attrs) {
    for (const [key, val] of Object.entries(options.attrs)) {
      el.setAttribute(key, val);
    }
  }

  return el;
}

// Example:
const card = create("div", {
  class: "card shadow",
  html: "<h3>Hello</h3><p>This is a card.</p>",
});`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"3. append(), remove() & replace()"}),e.jsx("p",{className:"text-slate-300",children:"Instead of writing long DOM chains, we create wrappers for clarity."}),e.jsx(t,{language:"javascript",initialCode:`const append = (parent, child) => parent.appendChild(child);
const remove = (el) => el.remove();
const replace = (oldNode, newNode) => oldNode.replaceWith(newNode);

// Usage:
const box = create("div", { class: "box", text: "A Box" });
append(document.body, box);

setTimeout(() => remove(box), 2000);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"4. style() & attr() — Update Elements in One Line"}),e.jsx(t,{language:"javascript",initialCode:`function style(el, styles = {}) {
  for (const [key, val] of Object.entries(styles)) {
    el.style[key] = val;
  }
}

function attr(el, attributes = {}) {
  for (const [key, val] of Object.entries(attributes)) {
    el.setAttribute(key, val);
  }
}

// Example:
const box = create("div", { class: "infoBox", text: "Styled dynamically" });

style(box, {
  background: "#0ea5e9",
  padding: "12px",
  color: "white"
});

attr(box, {
  "data-role": "notification"
});`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"5. on() — Attach Events Smarter"}),e.jsx(t,{language:"javascript",initialCode:`const on = (el, event, handler) => el.addEventListener(event, handler);

// Example:
const btn = create("button", { text: "Click Me" });
append(document.body, btn);

on(btn, "click", () => alert("Button clicked!"));`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-400",children:"Combining All → Your Mini DOM Library"}),e.jsx(t,{language:"javascript",initialCode:`// Mini DOM Utility Library
const DOM = {
  $, $$, create, append, remove, replace, style, attr, on
};

// Example usage:
const msg = DOM.create("div", {
  class: "toast",
  text: "Task added successfully!"
});

DOM.style(msg, {
  background: "#10b981",
  color: "white",
  padding: "10px",
  borderRadius: "6px"
});

DOM.append(document.body, msg);`}),e.jsx("p",{className:"text-slate-300",children:"This is how most frontend frameworks evolved — small helper utilities that grew into full component systems."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Mini Project: Dynamic Card Builder (Pro-Level UI)"}),e.jsx(t,{language:"javascript",initialCode:`function createCard(title, description) {
  const card = DOM.create("div", { class: "card" });

  const h3 = DOM.create("h3", { text: title });
  const p = DOM.create("p", { text: description });
  const del = DOM.create("button", { class: "delete", text: "Remove" });

  DOM.append(card, h3);
  DOM.append(card, p);
  DOM.append(card, del);

  DOM.on(del, "click", () => DOM.remove(card));

  return card;
}

// Usage:
DOM.append(document.body, createCard("Welcome", "This card is dynamic."));`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsx("p",{children:"You now have a professional utility toolkit — this is the foundation of **frameworks, reusable UI components, and modern frontend architectures**."})})]})}}export{i as default};

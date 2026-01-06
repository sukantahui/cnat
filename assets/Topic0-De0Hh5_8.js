import{r as s,j as e,E as t}from"./index-imi4Qhij.js";class n extends s.Component{render(){return e.jsxs("div",{className:"space-y-10 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Creating Elements Dynamically in the DOM"}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base",children:["Learn how JavaScript creates elements ",e.jsx("b",{children:"programmatically"})," using",e.jsx("code",{className:"text-sky-300",children:" createElement() "}),",",e.jsx("code",{className:"text-sky-300",children:" createTextNode() "}),", and other core DOM APIs. These concepts are the foundation of how modern frameworks like React actually work."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"Why Create Elements Using JavaScript?"}),e.jsxs("p",{className:"text-slate-300",children:["JavaScript lets you create HTML elements ",e.jsx("i",{children:"without writing them in HTML"}),". This skill helps you:"]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-300",children:[e.jsx("li",{children:"Build UI dynamically (cards, alerts, menus, lists)"}),e.jsx("li",{children:"Manipulate UI based on user input"}),e.jsx("li",{children:"Create elements from API data"}),e.jsx("li",{children:"Generate components programmatically"}),e.jsx("li",{children:"Understand framework internals (React, Vue, Angular)"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"1. document.createElement()"}),e.jsx("p",{className:"text-slate-300",children:"This method creates a new HTML element in memory. It will NOT appear on the page until you append it."}),e.jsx(t,{language:"javascript",initialCode:`const box = document.createElement("div");
console.log(box); // <div></div>`}),e.jsx("p",{className:"text-slate-300",children:"You can later update text, classes, styles, attributes, and more."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"2. createTextNode()"}),e.jsx("p",{className:"text-slate-300",children:"Creates plain text safely — better than innerHTML when only text is needed."}),e.jsx(t,{language:"javascript",initialCode:`const textNode = document.createTextNode("Hello Baba!");
console.log(textNode);`}),e.jsxs("p",{className:"text-slate-300",children:["Text nodes are often attached using",e.jsx("code",{className:"text-sky-300",children:" appendChild() "}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"Example 1 — Creating a Card Component Programmatically"}),e.jsx("p",{className:"text-slate-300",children:"This example builds a full card with a title, description, and button."}),e.jsx(t,{language:"javascript",initialCode:`const card = document.createElement("div");
card.className = "card";

// Title
const title = document.createElement("h2");
title.textContent = "Coder & AccoTax";

// Description
const desc = document.createElement("p");
desc.textContent = "Learn JavaScript the professional way.";

// Button
const btn = document.createElement("button");
btn.textContent = "Explore";

// Assemble card
card.append(title);
card.append(desc);
card.append(btn);

// Add to page
document.body.append(card);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"Example 2 — Building a Notification (Toast) Box"}),e.jsx(t,{language:"javascript",initialCode:`function showNotification(message) {
  const box = document.createElement("div");
  box.className = "notification";
  
  const text = document.createTextNode(message);
  box.appendChild(text);

  document.body.append(box);

  setTimeout(() => box.remove(), 3000);
}

showNotification("Welcome to DOM Special Class!");`}),e.jsx("p",{className:"text-slate-300",children:"This is how real websites create auto-disappearing toast messages."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"Example 3 — Creating Multiple Items Using Loops"}),e.jsx(t,{language:"javascript",initialCode:`const fruits = ["Mango", "Banana", "Apple", "Lichi"];

const ul = document.createElement("ul");

for (const item of fruits) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

document.body.appendChild(ul);`}),e.jsx("p",{className:"text-slate-300",children:"Useful for dynamic menus, lists, dropdowns, and table rows."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"Reusable DOM Utility — createElement Helper"}),e.jsx(t,{language:"javascript",initialCode:`function make(tag, text = "", classes = "") {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (classes) el.className = classes;
  return el;
}

// Usage:
const message = make("div", "Dynamic Box", "msg-box");
document.body.append(message);`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["Next, we will explore",e.jsxs("span",{className:"text-sky-300",children:[" ","appending, inserting, and removing DOM elements"]}),"— the core of dynamic UI building."]})})]})}}export{n as default};

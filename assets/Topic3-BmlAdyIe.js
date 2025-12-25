import{r as s,j as e,E as t}from"./index-BjvXoeSR.js";class o extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"1.5"})]}),"Creating Dynamic UI Components Using the DOM"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"In this chapter, we go beyond editing single elements — we learn how to **build UI components dynamically**, create **reusable DOM utilities**, and render **multiple elements using loops**. This is exactly how frameworks like React, Vue, and Svelte work internally."})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("rect",{x:"4",y:"4",width:"16",height:"16",stroke:"currentColor",strokeWidth:"1.5"})}),"1. Creating a UI Card Dynamically"]}),e.jsx("p",{className:"text-slate-300",children:"Let’s build a dynamic **profile card component** using only JavaScript and DOM APIs."}),e.jsx(t,{language:"javascript",initialCode:`function createProfileCard(name, role, imageURL) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = imageURL;
  img.className = "avatar";

  const title = document.createElement("h3");
  title.textContent = name;

  const subtitle = document.createElement("p");
  subtitle.textContent = role;

  card.append(img, title, subtitle);
  document.body.appendChild(card);
}

createProfileCard("Ritaja Ghosh", "Student", "ritaja.png");
createProfileCard("Mounita Bhandari", "Developer", "mounita.png");`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M3 3h18v14H3z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M3 17h18v4H3z",stroke:"currentColor",strokeWidth:"1.5"})]}),"2. Creating a Notification Popup Component"]}),e.jsx("p",{className:"text-slate-300",children:"Notifications are used everywhere — let’s build a reusable and animated one."}),e.jsx(t,{language:"javascript",initialCode:`function showNotification(message, type = "info") {
  const box = document.createElement("div");
  box.className = "notify " + type;
  box.textContent = message;

  document.body.appendChild(box);

  // Auto remove after animation
  setTimeout(() => box.remove(), 2500);
}

showNotification("Welcome back, Sukanta!", "success");
showNotification("Your file has been uploaded.", "info");
showNotification("Error: Unable to process request!", "error");`}),e.jsx("p",{className:"text-yellow-300 text-sm",children:"✔ Add CSS for smooth fade-in and fade-out animations"})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-red-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 7v5M12 16h.01",stroke:"currentColor",strokeWidth:"1.5"})]}),"3. Building an Interactive Alert / Confirmation Box"]}),e.jsx(t,{language:"javascript",initialCode:`function showAlert(message, onConfirm) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const box = document.createElement("div");
  box.className = "alert-box";

  const msg = document.createElement("p");
  msg.textContent = message;

  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Yes";
  yesBtn.onclick = () => {
    onConfirm();
    overlay.remove();
  };

  const noBtn = document.createElement("button");
  noBtn.textContent = "Cancel";
  noBtn.onclick = () => overlay.remove();

  box.append(msg, yesBtn, noBtn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

showAlert("Do you want to delete this file?", () => {
  console.log("File deleted!");
});`}),e.jsx("p",{className:"text-slate-300",children:"This pattern is the foundation of custom modals and React popup components."})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M4 12h16M12 4v16",stroke:"currentColor",strokeWidth:"1.5"})}),"4. Creating Reusable DOM Helper Functions"]}),e.jsx("p",{className:"text-slate-300",children:"Reusable functions improve code cleanliness and reduce repetition."}),e.jsx(t,{language:"javascript",initialCode:`// Creates an element with optional classes & text
function el(tag, className = "", text = "") {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

// Example usage:
const box = el("div", "card", "Hello Coder & AccoTax!");
document.body.appendChild(box);`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsxs("h2",{className:"text-xl font-bold text-pink-300 flex items-center gap-2",children:[e.jsxs("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M8 6h13M8 12h13M8 18h13",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"4",cy:"6",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"4",cy:"12",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"4",cy:"18",r:"1.5",fill:"currentColor"})]}),"5. Handling Multiple Elements — Rendering a List"]}),e.jsx("p",{className:"text-slate-300",children:"This is how you render arrays of data into UI — the core of frontend frameworks."}),e.jsx(t,{language:"javascript",initialCode:`const students = [
  { name: "Ritaja", score: 92 },
  { name: "Swadeep", score: 88 },
  { name: "Pranjali", score: 95 }
];

const list = document.createElement("ul");
list.className = "student-list";

students.forEach((s) => {
  const item = document.createElement("li");
  item.textContent = \`\${s.name}: \${s.score}\`;
  list.appendChild(item);
});

document.body.appendChild(list);`})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h2",{className:"text-xl font-bold text-yellow-300",children:"⭐ Mini Project: Dynamic Badge Generator"}),e.jsx("p",{className:"text-slate-300",children:"Build a feature where the user types text and the badge updates live."}),e.jsx(t,{language:"javascript",initialCode:`const input = document.getElementById("badgeInput");
const badge = document.getElementById("badge");

input.addEventListener("input", () => {
  badge.textContent = input.value;
  badge.classList.add("pulse");
  setTimeout(() => badge.classList.remove("pulse"), 500);
});`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["In the next chapter, we build",e.jsx("span",{className:"text-sky-300",children:" a complete mini-application "}),"using dynamic components, events, and DOM utilities."]})})]})}}export{o as default};

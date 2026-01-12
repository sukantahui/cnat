import{r as s,j as e,E as t}from"./index-BnX9VYl0.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M12 6v6l4 2",stroke:"currentColor",strokeWidth:"1.5"})]}),"Modifying DOM Elements: Content, Classes, Styles & Attributes"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"In this chapter, we learn how to **change text**, **insert HTML**, **style elements dynamically**, **add or remove CSS classes**, and **manipulate attributes** on DOM nodes — the foundation of interactive UI development."})]}),e.jsxs("section",{children:[e.jsxs("h2",{className:"text-xl font-semibold text-sky-300 mb-3 flex gap-2 items-center",children:[e.jsx("svg",{width:"22",height:"22",fill:"none",viewBox:"0 0 24 24",children:e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5"})}),"What You Will Learn"]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-300",children:[e.jsxs("li",{children:["Changing element text using ",e.jsx("b",{children:"textContent"})]}),e.jsxs("li",{children:["Inserting formatted HTML using ",e.jsx("b",{children:"innerHTML"})]}),e.jsxs("li",{children:["Using ",e.jsx("b",{children:"classList"})," to add, remove, toggle and replace classes"]}),e.jsxs("li",{children:["Styling elements with ",e.jsx("b",{children:"element.style"})]}),e.jsxs("li",{children:["Managing attributes using ",e.jsx("b",{children:"setAttribute()"}),", ",e.jsx("b",{children:"getAttribute()"}),", ",e.jsx("b",{children:"removeAttribute()"})]}),e.jsx("li",{children:"Building dynamic UI interactions"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M4 6h16M4 12h10M4 18h8",stroke:"currentColor",strokeWidth:"1.5"})}),"1. Updating Element Text — textContent vs innerHTML"]}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("b",{children:"textContent"})," sets plain text only.",e.jsx("b",{children:"innerHTML"})," allows HTML formatting."]}),e.jsx(t,{language:"javascript",initialCode:`const box = document.getElementById("messageBox");

// textContent — Safe, plain text
box.textContent = "Hello, this is plain text";

// innerHTML — Can include tags
box.innerHTML = "<b>Hello!</b> <i>This is formatted HTML</i>";`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M6 12h12M12 6v12",stroke:"currentColor",strokeWidth:"1.5"})}),"2. Working with Classes — classList Operations"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("b",{children:"classList"})," API allows clean manipulation of CSS classes."]}),e.jsx(t,{language:"javascript",initialCode:`const card = document.getElementById("card");

// Add a class
card.classList.add("highlight");

// Remove a class
card.classList.remove("highlight");

// Toggle a class (on/off)
card.classList.toggle("active");

// Replace a class
card.classList.replace("old-style", "new-style");`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-yellow-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:e.jsx("circle",{cx:"12",cy:"12",r:"8",stroke:"currentColor",strokeWidth:"1.5"})}),"3. Changing CSS Styles Dynamically"]}),e.jsxs("p",{className:"text-slate-300",children:["Use ",e.jsx("b",{children:"element.style"})," to directly modify inline styles."]}),e.jsx(t,{language:"javascript",initialCode:`const box = document.getElementById("box");

box.style.backgroundColor = "purple";
box.style.padding = "20px";
box.style.borderRadius = "12px";
box.style.color = "white";`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-red-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M12 5v14",stroke:"currentColor",strokeWidth:"1.5"})}),"4. Working with HTML Attributes"]}),e.jsx("p",{className:"text-slate-300",children:"Attributes control extra properties of HTML elements."}),e.jsx(t,{language:"javascript",initialCode:`const img = document.getElementById("heroImage");

// Set attribute
img.setAttribute("src", "banner.png");

// Get attribute
const source = img.getAttribute("src");
console.log(source);

// Remove attribute
img.removeAttribute("alt");`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-pink-300",children:"Example — Interactive Profile Card Updater"}),e.jsx("p",{className:"text-slate-300",children:"A real-life example where we update classes, content, and attributes together."}),e.jsx(t,{language:"javascript",initialCode:`function updateProfile() {
  const name = document.getElementById("username");
  const avatar = document.getElementById("avatar");
  const card = document.getElementById("profileCard");

  name.textContent = "Ritaja Ghosh";
  avatar.setAttribute("src", "ritaja.png");

  // Styling
  card.style.border = "2px solid #38bdf8";

  // Highlight animation class
  card.classList.add("pulse");

  setTimeout(() => {
    card.classList.remove("pulse");
  }, 1200);
}

// CSS:
// .pulse { animation: pulseAnim 1.2s ease-out; }
// @keyframes pulseAnim {
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// }`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["In the next chapter, we will explore",e.jsx("span",{className:"text-purple-300",children:" creating dynamic UI components "}),"like notifications, cards, alert boxes, and interactive widgets."]})})]})}}export{i as default};

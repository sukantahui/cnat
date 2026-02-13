import{r as s,j as e,E as t}from"./index-Do7ncMju.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-purple-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",className:"text-purple-400",children:[e.jsx("path",{d:"M4 4h16v16H4z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 8h8v8H8z",stroke:"currentColor",strokeWidth:"1.5"})]}),"Appending, Removing & Replacing DOM Elements"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"In this chapter, we learn how to **add**, **insert**, **remove**, and **replace** HTML elements using DOM API methods — the real power behind UI creation. These actions replicate what modern frameworks do internally."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-semibold text-purple-300 flex gap-2 items-center",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"})}),"What You Will Learn"]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-300",children:[e.jsxs("li",{children:["Adding elements dynamically with ",e.jsx("b",{children:"append()"})," and ",e.jsx("b",{children:"appendChild()"})]}),e.jsxs("li",{children:["Inserting elements at the beginning using ",e.jsx("b",{children:"prepend()"})]}),e.jsxs("li",{children:["Placing new elements before a specific node using ",e.jsx("b",{children:"insertBefore()"})]}),e.jsxs("li",{children:["Removing elements safely using ",e.jsx("b",{children:"remove()"})," and ",e.jsx("b",{children:"removeChild()"})]}),e.jsxs("li",{children:["Replacing existing nodes using ",e.jsx("b",{children:"replaceChild()"})]}),e.jsx("li",{children:"Building interactive UI components with animations"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5"})}),"1. Adding Elements — append() & appendChild()"]}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("b",{children:"append()"})," can insert **multiple nodes or text**, while",e.jsx("b",{children:"appendChild()"})," inserts **only one node** and returns it."]}),e.jsx(t,{language:"javascript",initialCode:`const container = document.getElementById("box");

const msg = document.createElement("p");
msg.textContent = "Hello from append()!";

// append can add multiple items
container.append(msg, " — dynamically added");

// appendChild adds only nodes
const msg2 = document.createElement("p");
msg2.textContent = "Added using appendChild()";

container.appendChild(msg2);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 19V5M5 12h14",stroke:"currentColor",strokeWidth:"1.5"})}),"2. Adding at the Top — prepend()"]}),e.jsx(t,{language:"javascript",initialCode:`const msg = document.createElement("p");
msg.textContent = "I appear at the TOP!";

document.getElementById("box").prepend(msg);`}),e.jsx("p",{className:"text-slate-300",children:"This is useful for notifications, timelines, chat apps, etc."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-yellow-400 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"1.5"})}),"3. Insert Before a Specific Element — insertBefore()"]}),e.jsx(t,{language:"javascript",initialCode:`const parent = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "Inserted before Item 2";

const item2 = parent.children[1]; // target element

parent.insertBefore(newItem, item2);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-red-400 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"1.5"})}),"4. Removing Elements — remove() & removeChild()"]}),e.jsxs("p",{className:"text-slate-300",children:["Modern method: ",e.jsx("b",{children:"remove()"}),"Old/better for compatibility: ",e.jsx("b",{children:"removeChild()"})]}),e.jsx(t,{language:"javascript",initialCode:`// remove()
document.getElementById("adBox").remove();

// removeChild()
const parent = document.getElementById("list");
const li = parent.children[0];
parent.removeChild(li);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-pink-400 flex items-center gap-2",children:[e.jsx("svg",{width:"26",height:"26",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M4 4h16v16H4z",stroke:"currentColor",strokeWidth:"1.5"})}),"5. Replacing Elements — replaceChild()"]}),e.jsx(t,{language:"javascript",initialCode:`const parent = document.getElementById("profile");

const newNode = document.createElement("h2");
newNode.textContent = "Updated Name";

const oldNode = document.getElementById("username");

parent.replaceChild(newNode, oldNode);`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-emerald-300",children:"Example — Animated Add & Remove Buttons"}),e.jsx(t,{language:"javascript",initialCode:`function addItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  li.className = "fade-in";

  document.getElementById("list").append(li);

  // CSS: 
  // .fade-in { animation: fadeIn 0.4s ease-out; }
}

function removeLast() {
  const list = document.getElementById("list");
  if (list.lastChild) {
    list.lastChild.classList.add("fade-out");
    setTimeout(() => list.lastChild.remove(), 300);
  }
}

// CSS:
// @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
// @keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }`})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["In the next chapter, we will explore",e.jsx("span",{className:"text-sky-300",children:" modifying elements (text, HTML, styles, classes) "}),"and building real UI components using DOM manipulation."]})})]})}}export{i as default};

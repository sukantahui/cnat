import{r as s,j as e,E as t}from"./index-X8Setxi0.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 2L15 8H9L12 2Z M12 22L9 16H15L12 22Z M2 12L8 15V9L2 12Z M22 12L16 9V15L22 12Z",stroke:"#38bdf8",strokeWidth:"1.5"})}),"Event Delegation & Smart Dynamic Components"]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base",children:"Event delegation allows you to handle interactions **efficiently**, especially when working with **dynamic elements** that are added, removed, or updated at runtime."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"How Event Bubbling Works"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"When an element is clicked, the event travels upward (bubbles) through its parent elements. We can take advantage of this behavior to attach **one listener** for many items."}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsxs("svg",{width:"300",height:"240",viewBox:"0 0 300 240",children:[e.jsx("rect",{x:"30",y:"20",width:"240",height:"200",rx:"12",fill:"#0f172a",stroke:"#475569"}),e.jsx("rect",{x:"60",y:"60",width:"180",height:"140",rx:"10",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("rect",{x:"90",y:"100",width:"120",height:"80",rx:"8",fill:"#0ea5e9"}),e.jsx("text",{x:"100",y:"145",fill:"white",fontSize:"14",children:"Clicked Element"}),e.jsx("text",{x:"80",y:"50",fill:"#38bdf8",fontSize:"12",children:"Bubbles Up → Parent"}),e.jsx("text",{x:"40",y:"15",fill:"#38bdf8",fontSize:"12",children:"→ Document"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"❌ The Wrong Way — Adding Many Event Listeners"}),e.jsx("p",{className:"text-slate-300",children:"If you add listeners to every single button, your app becomes slow and hard to update."}),e.jsx(t,{language:"javascript",initialCode:`const buttons = document.querySelectorAll(".delete");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Deleting item...");
  });
});`}),e.jsx("p",{className:"text-yellow-400 text-sm",children:"Problem: If items are added later, newly added buttons will NOT have click events!"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"✅ The Smart Way — Event Delegation"}),e.jsx("p",{className:"text-slate-300",children:"Instead of attaching 20 listeners, we attach **one listener to the parent**, and detect which child was clicked."}),e.jsx(t,{language:"javascript",initialCode:`document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    console.log("Delete pressed for:", e.target.dataset.id);
  }
});`}),e.jsx("p",{className:"text-emerald-400 text-sm",children:"Meaning → Even if items are added later, the same parent listener handles everything."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"Real Example: Dynamic Todo List (Add / Delete Using Delegation)"}),e.jsx(t,{language:"javascript",initialCode:`const list = document.getElementById("todoList");
const input = document.getElementById("taskInput");

// Add Task
document.getElementById("addBtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = \`
    \${input.value}
    <button class="delete">❌</button>
  \`;
  list.appendChild(li);
  input.value = "";
});

// Delete Task (event delegation)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});`}),e.jsx("p",{className:"text-slate-300",children:"This is exactly how modern UI libraries efficiently update dynamic lists."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"Advanced Example — Multi-Action Cards"}),e.jsx("p",{className:"text-slate-300",children:"Each card has 3 actions but we still use **one** parent event listener."}),e.jsx(t,{language:"javascript",initialCode:`document.querySelector("#cards").addEventListener("click", (e) => {
  const card = e.target.closest(".card");

  if (!card) return;

  if (e.target.matches(".edit")) {
    console.log("Editing:", card.dataset.id);
  }

  if (e.target.matches(".delete")) {
    card.remove();
  }

  if (e.target.matches(".view")) {
    alert("Viewing card details...");
  }
});`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"Smart Component Architecture (How Professionals Think)"}),e.jsx("p",{className:"text-slate-300",children:"Professional UI structure uses parent controllers that manage children. Like React components but manually."}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsxs("svg",{width:"360",height:"230",viewBox:"0 0 360 230",children:[e.jsx("rect",{x:"20",y:"20",width:"320",height:"180",rx:"12",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"100",y:"45",fill:"#38bdf8",children:"Parent Controller"}),e.jsx("rect",{x:"40",y:"70",width:"280",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"120",y:"95",fill:"#a5f3fc",children:"Child Element 1"}),e.jsx("rect",{x:"40",y:"120",width:"280",height:"40",rx:"8",fill:"#1e293b"}),e.jsx("text",{x:"120",y:"145",fill:"#a5f3fc",children:"Child Element 2"}),e.jsx("text",{x:"70",y:"185",fill:"#38bdf8",fontSize:"12",children:"Events bubble → Parent handles everything"})]})})]}),e.jsx("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:e.jsxs("p",{children:["You now understand event delegation and smart event architecture— foundational skills required for frameworks like ",e.jsx("b",{children:"React, Vue, and Svelte"}),"."]})})]})}}export{i as default};

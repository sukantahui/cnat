import{r as s,j as e,E as t}from"./index-BXt4ulM1.js";class a extends s.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:"#38bdf8",strokeWidth:"1.6"}),e.jsx("path",{d:"M7 9H17M7 13H14",stroke:"#38bdf8",strokeWidth:"1.6",strokeLinecap:"round"})]}),"Advanced Template Rendering Engine (Mini React – No Diffing)"]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base",children:["In this topic, we will build a **simple rendering engine** using:",e.jsx("br",{}),"• Template functions that generate HTML strings",e.jsx("br",{}),"• A central ",e.jsx("code",{children:"state"})," object",e.jsx("br",{}),"• A ",e.jsx("code",{children:"render()"})," function that re-renders everything",e.jsx("br",{}),"This is like a **very basic React**, but without the Virtual DOM diffing."]})]}),e.jsx("section",{className:"flex justify-center",children:e.jsxs("svg",{width:"360",height:"220",viewBox:"0 0 360 220",children:[e.jsx("rect",{x:"15",y:"15",width:"330",height:"190",rx:"14",fill:"#020617",stroke:"#1f2937"}),e.jsx("text",{x:"110",y:"40",fill:"#38bdf8",fontSize:"16",children:"Simple Render Engine"}),e.jsx("rect",{x:"40",y:"70",width:"120",height:"40",rx:"8",fill:"#0f172a"}),e.jsx("text",{x:"65",y:"95",fill:"#a5f3fc",fontSize:"12",children:"state (data)"}),e.jsx("rect",{x:"200",y:"70",width:"120",height:"40",rx:"8",fill:"#0f172a"}),e.jsx("text",{x:"218",y:"95",fill:"#a5f3fc",fontSize:"12",children:"view(state)"}),e.jsx("rect",{x:"120",y:"130",width:"120",height:"50",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"145",y:"160",fill:"#4ade80",fontSize:"12",children:"root.innerHTML"}),e.jsx("path",{d:"M100 90H190",stroke:"#38bdf8",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),e.jsx("path",{d:"M260 110L210 130",stroke:"#38bdf8",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),e.jsx("path",{d:"M140 130L100 110",stroke:"#38bdf8",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#38bdf8"})})})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"1. Template Function Concept"}),e.jsx("p",{className:"text-slate-300",children:"We write a function that **accepts the current state** and returns an **HTML string**."}),e.jsx(t,{language:"javascript",initialCode:`// Our template / view function
function view(state) {
  return \`
    <div>
      <h2>Hello, \${state.userName}</h2>
      <p>You have \${state.notifications} notifications.</p>
    </div>
  \`;
}

// Example state
const state = {
  userName: "Student",
  notifications: 3,
};`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-semibold text-emerald-400",children:["2. The ",e.jsx("code",{children:"render(root, state)"})," Function"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("code",{children:"render"})," function takes:",e.jsx("br",{}),"• a root element (where UI appears) • the latest state • and the view function"]}),e.jsx(t,{language:"javascript",initialCode:`function render(root, state) {
  root.innerHTML = view(state);
}

// Usage:
const root = document.getElementById("app");
render(root, state);`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Every time ",e.jsx("code",{children:"state"})," changes, we call ",e.jsx("code",{children:"render(root, state)"})," again."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"3. Adding Interactive Controls (Increase / Reset)"}),e.jsx("p",{className:"text-slate-300",children:"We want buttons that change the state and then **re-render** the UI."}),e.jsx(t,{language:"javascript",initialCode:`let state = {
  userName: "Student",
  notifications: 0,
};

function view(state) {
  return \`
    <div class="panel">
      <h2>Welcome, \${state.userName}</h2>
      <p>You have <strong>\${state.notifications}</strong> notifications.</p>
      <button id="incBtn">+ Add Notification</button>
      <button id="resetBtn">Reset</button>
    </div>
  \`;
}

function render(root) {
  root.innerHTML = view(state);

  // Re-attach events after every render
  document.getElementById("incBtn").onclick = () => {
    state.notifications++;
    render(root);
  };

  document.getElementById("resetBtn").onclick = () => {
    state.notifications = 0;
    render(root);
  };
}

const root = document.getElementById("app");
render(root);`}),e.jsxs("p",{className:"text-emerald-300 text-sm",children:["Key idea: After we replace ",e.jsx("code",{children:"innerHTML"}),", we must **attach events again** to new elements."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-amber-300",children:"4. Component-Like Functions Returning HTML"}),e.jsx("p",{className:"text-slate-300",children:"We split UI into small template functions that behave like **stateless components**."}),e.jsx(t,{language:"javascript",initialCode:`function NotificationBadge(count) {
  const color = count > 0 ? "#22c55e" : "#6b7280";
  const label = count > 0 ? count + " new" : "No new notifications";

  return \`
    <span
      style="
        display:inline-block;
        padding:4px 10px;
        border-radius:999px;
        background:\${color};
        color:white;
        font-size:12px;
      "
    >
      \${label}
    </span>
  \`;
}

function view(state) {
  return \`
    <div>
      <h2>Hi, \${state.userName}</h2>
      <p>Status: \${NotificationBadge(state.notifications)}</p>
    </div>
  \`;
}`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"You are now basically building a **mini JSX-like system**, but using template strings."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"5. Rendering Lists with Template Helpers"}),e.jsx(t,{language:"javascript",initialCode:`let state = {
  todos: [
    { id: 1, text: "Finish JavaScript practice", done: false },
    { id: 2, text: "Revise DOM Special chapter", done: true },
  ],
};

function TodoItem(todo) {
  return \`
    <li data-id="\${todo.id}">
      <input type="checkbox" \${todo.done ? "checked" : ""} />
      <span>\${todo.text}</span>
      <button class="removeBtn">❌</button>
    </li>
  \`;
}

function TodoList(todos) {
  return \`
    <ul>
      \${todos.map(TodoItem).join("")}
    </ul>
  \`;
}

function view(state) {
  return \`
    <div>
      <h2>Todo List</h2>
      \${TodoList(state.todos)}
      <input id="newTask" placeholder="New task" />
      <button id="addBtn">Add</button>
    </div>
  \`;
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-400",children:"6. Event Layer: Add / Toggle / Remove"}),e.jsx(t,{language:"javascript",initialCode:`function attachEvents(root) {
  const addBtn = root.querySelector("#addBtn");
  const input = root.querySelector("#newTask");
  const list = root.querySelector("ul");

  if (addBtn) {
    addBtn.onclick = () => {
      const text = input.value.trim();
      if (!text) return;

      state.todos.push({
        id: Date.now(),
        text,
        done: false,
      });

      render(root);
    };
  }

  if (list) {
    list.onclick = (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const id = Number(li.dataset.id);

      if (e.target.matches("input[type='checkbox']")) {
        const todo = state.todos.find((t) => t.id === id);
        if (todo) todo.done = !todo.done;
        render(root);
      }

      if (e.target.matches(".removeBtn")) {
        state.todos = state.todos.filter((t) => t.id !== id);
        render(root);
      }
    };
  }
}

function render(root) {
  root.innerHTML = view(state);
  attachEvents(root);
}

const root = document.getElementById("app");
render(root);`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["We have now combined:",e.jsx("br",{}),"• ",e.jsx("strong",{children:"State"}),"• ",e.jsx("strong",{children:"Template components"}),"• ",e.jsx("strong",{children:"Render function"}),"• ",e.jsx("strong",{children:"Event wiring"}),e.jsx("br",{}),"This is a **small framework** already."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-pink-300",children:"7. Optional — CSS to Make It Look Professional"}),e.jsx(t,{language:"css",initialCode:`.panel {
  background: #020617;
  border: 1px solid #1e293b;
  padding: 16px;
  border-radius: 12px;
  color: #e5e7eb;
  width: 280px;
}

.panel h2 {
  margin: 0 0 8px;
}

.panel button {
  margin-right: 6px;
  margin-top: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.removeBtn {
  margin-left: auto;
  background: #dc2626;
  color: white;
  border-radius: 6px;
  padding: 2px 8px;
  border: none;
  cursor: pointer;
}`})]}),e.jsxs("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-sm",children:[e.jsx("p",{className:"mb-2",children:"In this topic, you built a **Mini React-style rendering system**:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsxs("li",{children:["Central ",e.jsx("code",{children:"state"})," object"]}),e.jsxs("li",{children:[e.jsx("code",{children:"view(state)"})," template function"]}),e.jsxs("li",{children:[e.jsx("code",{children:"render(root)"})," to refresh UI"]}),e.jsxs("li",{children:["Component-like template helpers (",e.jsx("code",{children:"TodoItem"}),", ",e.jsx("code",{children:"NotificationBadge"}),")"]}),e.jsx("li",{children:"Dynamic lists + events after every render"})]}),e.jsxs("p",{className:"mt-3",children:["These ideas make it very easy to understand **React, Vue, Svelte and other libraries** because they follow the same mental model: ",e.jsx("b",{children:"State → View → Re-render on change"}),"."]})]})]})}}export{a as default};

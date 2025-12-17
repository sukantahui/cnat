import{r as e,j as t}from"./index-CwtuFwkW.js";import{C as s}from"./CodeBlock-DxKu8yLL.js";import"./prism-CInkelKA.js";import"./prism-json-D0UlpdKh.js";class d extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Mini Project: Fetch Data from a Public API & Display it in the DOM"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Let's build a small mini project: fetch a list of posts from a public API and show them on a page. You can adapt this to show student data, course list, or marks in a Coder & AccoTax style dashboard."}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. HTML Structure"}),t.jsx(s,{language:"html",code:`<button id="loadBtn">Load Posts</button>
<div id="status"></div>
<ul id="postList"></ul>`}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. JavaScript to Fetch & Render"}),t.jsx(s,{language:"javascript",code:`const loadBtn = document.getElementById("loadBtn");
const statusEl = document.getElementById("status");
const postList = document.getElementById("postList");

async function loadPosts() {
  statusEl.textContent = "Loading posts for JS students...";
  postList.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    const posts = await res.json();

    statusEl.textContent = "Loaded " + posts.length + " posts.";
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = \`<strong>\${post.title}</strong><br/>\${post.body}\`;
      postList.appendChild(li);
    });
  } catch (error) {
    statusEl.textContent = "Failed to load posts: " + error.message;
  }
}

loadBtn.addEventListener("click", loadPosts);`}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Ideas to Extend This Project"}),t.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[t.jsx("li",{children:'Replace posts with "students" or "courses".'}),t.jsx("li",{children:"Add a search box so Devangshu or Susmita can search their own posts."}),t.jsx("li",{children:'Show a small badge like "Powered by Coder & AccoTax" at the bottom of the project.'})]}),t.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[t.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Learning Outcome"}),t.jsxs("p",{className:"text-slate-300 text-sm mt-2",children:["From this mini project, students understand the full flow:"," ",t.jsx("strong",{children:"call API → get JSON → parse → use data → update DOM"}),". This is the core of modern frontend development."]})]})]})}}export{d as default};

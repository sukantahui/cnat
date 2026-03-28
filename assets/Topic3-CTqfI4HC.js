import{j as e}from"./index-D-07m6Qb.js";import{C as t}from"./CodeBlock-BNkIv_4S.js";import"./prism-Dw--ewGm.js";import"./prism-json-D0UlpdKh.js";import"./file-code-n9BmD-WT.js";import"./copy-BeFV_rGJ.js";import"./download-B_C6cj02.js";import"./play-4rBxpZha.js";function m(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Function Scope: Local vs Global"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Variables declared inside a function are ",e.jsx("strong",{children:"local"}),". Variables outside are ",e.jsx("strong",{children:"global"}),"."]}),e.jsx(t,{code:`let city = "Barrackpore";  // global

function showCity() {
  let name = "Sukanta Hui"; // local
  console.log(name, city);
}

showCity();

// console.log(name); // ❌ error: not accessible`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Local variables are destroyed after the function exits."})]})}export{m as default};

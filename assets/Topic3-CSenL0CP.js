import{j as e}from"./index-BQdS2coH.js";import{C as t}from"./CodeBlock-CCYlPNcA.js";import"./prism-lJkcrZnh.js";import"./prism-json-D0UlpdKh.js";import"./file-code-BM1RMzw0.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";import"./play-LnkqUnKT.js";function p(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Function Scope: Local vs Global"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Variables declared inside a function are ",e.jsx("strong",{children:"local"}),". Variables outside are ",e.jsx("strong",{children:"global"}),"."]}),e.jsx(t,{code:`let city = "Barrackpore";  // global

function showCity() {
  let name = "Sukanta Hui"; // local
  console.log(name, city);
}

showCity();

// console.log(name); // ❌ error: not accessible`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Local variables are destroyed after the function exits."})]})}export{p as default};

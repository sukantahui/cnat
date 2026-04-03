import{j as t}from"./index-DI04DAgq.js";import{C as e}from"./CodeBlock-D3x_MAfv.js";import"./prism-D8iJqXYw.js";import"./prism-json-D0UlpdKh.js";import"./file-code-oB44tEN2.js";import"./copy-DQfKP-RU.js";import"./download-DwVcN2kg.js";import"./play-DnWShgnU.js";function x(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"break & continue"}),t.jsxs("p",{className:"text-slate-300 text-sm",children:[t.jsx("strong",{children:"break"})," stops the loop completely.",t.jsx("br",{}),t.jsx("strong",{children:"continue"})," skips the current iteration."]}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"break Example"}),t.jsx(e,{code:`for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"continue Example"}),t.jsx(e,{code:`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5`,language:"javascript"})]})}export{x as default};

import{j as e}from"./index-xwnDrKlA.js";import{C as s}from"./CodeBlock-bYGEcDHC.js";import"./prism-javascript-BRfYdlHV.js";function r(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"switch Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"switch"})," statement is ideal for comparing a variable against multiple values."]}),e.jsx(s,{code:`let day = 3;
let result = "";

switch (day) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tuesday";
    break;
  case 3:
    result = "Wednesday";
    break;
  default:
    result = "Unknown day";
}

console.log(result);`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Don’t forget ",e.jsx("code",{children:"break"}),", otherwise the next case will also run (fall-through)."]})]})}export{r as default};

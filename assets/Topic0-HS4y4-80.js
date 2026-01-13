import{j as e,E as s}from"./index-DmfbEenU.js";function n(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Function Declarations vs Function Expressions"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript provides two main ways to define functions:",e.jsx("strong",{children:" function declarations "})," and",e.jsx("strong",{children:" function expressions"}),". Understanding the difference is essential for mastering hoisting and advanced JS concepts."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Function Declaration"}),e.jsx(s,{defaultTab:"javascript",initialCode:`function greet() {
  console.log("Hello from Coder & AccoTax!");
}

greet();`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Function Expression"}),e.jsx(s,{defaultTab:"javascript",initialCode:`const greet = function() {
  console.log("Hello from Barrackpore!");
};

greet();`}),e.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed",children:[e.jsx("strong",{children:"Function declarations"})," are hoisted, which means you can call them before their actual definition in the code.",e.jsx("strong",{children:"Function expressions"})," are ",e.jsx("em",{children:"not hoisted"})," and behave like normal variables."]})]})}export{n as default};

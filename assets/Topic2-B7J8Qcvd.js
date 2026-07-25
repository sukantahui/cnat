import{j as e}from"./index-D8vKF2mq.js";import{E as s}from"./EditableCodeBlock-DiAh0cAP.js";import"./index-_VvknCR5.js";import"./createLucideIcon-DTJ5VPt2.js";import"./braces-BXpH0v-S.js";import"./file-code-C52313Dl.js";import"./layout-list-BkZm_8W0.js";import"./play-ZVoUkbUG.js";import"./type-PC3P0vgv.js";import"./refresh-cw-DcvlgmPw.js";import"./wand-sparkles-C0teRuqT.js";import"./copy-bDAEzVP3.js";import"./download-BaqyJosE.js";import"./eye-off-BL0ZDN6q.js";import"./eye-Dvwj4G7q.js";function j(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300",children:["The ",e.jsx("span",{className:"text-sky-400",children:"Ternary Operator"})]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["The ",e.jsx("strong",{children:"ternary operator"})," is a short, compact alternative to",e.jsx("code",{className:"text-sky-300",children:" if / else "}),". It evaluates a condition and returns one of two values depending on whether the condition is",e.jsx("span",{className:"text-emerald-400 font-semibold",children:" true"})," or",e.jsx("span",{className:"text-rose-400 font-semibold",children:" false"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`let age = 20;

let message = age >= 18 
  ? "Adult" 
  : "Minor";

console.log(message);`}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["This line replaces a full ",e.jsx("code",{children:"if / else"})," structure, making your code more concise."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Syntax"}),e.jsx(s,{language:"javascript",initialCode:"condition ? valueIfTrue : valueIfFalse"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"The ternary operator must always return a value — not a code block."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Real-World Examples"}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:"Ternary operators are often used when updating UI text, checking status, or assigning values."}),e.jsx(s,{language:"javascript",initialCode:`let isLoggedIn = true;

let buttonText = isLoggedIn ? "Logout" : "Login";

console.log(buttonText);`}),e.jsx(s,{language:"javascript",initialCode:`let temperature = 32;

let status = temperature > 30 
  ? "Hot" 
  : "Comfortable";

console.log(status);`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"These examples are ideal because each has only **two possible outcomes**."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Nested Ternary Operators"}),e.jsx("p",{className:"text-slate-300",children:"You *can* nest ternary operators, but it often hurts readability."}),e.jsx(s,{language:"javascript",initialCode:`let score = 85;

let grade = 
  score >= 90 ? "A" :
  score >= 75 ? "B" :
  score >= 60 ? "C" :
  "D";

console.log(grade);`}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["This works, but for longer logic, it's better to use",e.jsx("code",{className:"text-sky-300",children:" if / else if "}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"When To Use the Ternary Operator"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsx("li",{children:"Use for simple, short decisions."}),e.jsx("li",{children:"Avoid nested or complicated ternaries."}),e.jsx("li",{children:"Use when you need to **return a value** based on a condition."})]}),e.jsx(s,{language:"javascript",initialCode:`// BAD: Too long
let result;
if (x > 10) {
  result = "High";
} else {
  result = "Low";
}

// GOOD: Clean & simple
let result = x > 10 ? "High" : "Low";`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsx("li",{children:"Putting too much logic inside a ternary."}),e.jsx("li",{children:"Using ternaries when side effects (e.g., console.log) are needed."}),e.jsx("li",{children:"Making code harder to read by nesting too many conditions."})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Try It Yourself"}),e.jsx("p",{className:"text-slate-300",children:"Write a ternary operator that outputs:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-400",children:[e.jsx("li",{children:'"Free Shipping" if price ≥ 500'}),e.jsx("li",{children:'"Shipping Charges Apply" otherwise'})]}),e.jsx(s,{language:"javascript",initialCode:`let price = 650;

// Write your ternary below 👇`})]})]})}export{j as default};

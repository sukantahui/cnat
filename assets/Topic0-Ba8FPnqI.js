import{j as e,E as s}from"./index-BFnLuail.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300",children:["Understanding ",e.jsx("span",{className:"text-sky-400",children:"if / else"})," Statements"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["An ",e.jsx("code",{className:"text-sky-300",children:"if"})," statement allows your program to perform different actions based on a condition. A condition must always evaluate to a boolean (",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"true"})," or",e.jsx("span",{className:"text-rose-400 font-semibold",children:" false"}),")."]}),e.jsx(s,{language:"javascript",initialCode:`let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}`}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"How this works:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-400",children:[e.jsxs("li",{children:["The condition ",e.jsx("code",{className:"text-sky-300",children:"age &gt= 18"})," is checked."]}),e.jsxs("li",{children:["If it's ",e.jsx("strong",{className:"text-emerald-400",children:"true"}),", the first block runs."]}),e.jsxs("li",{children:["If it's ",e.jsx("strong",{className:"text-rose-400",children:"false"}),", the ",e.jsx("code",{children:"else"})," block runs."]})]}),e.jsx("p",{children:"This structure is helpful when your logic needs **two possible outcomes**."})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-xl font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"else if"})," for Multiple Conditions"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["When a decision requires **more than two possibilities**, use the",e.jsx("code",{className:"text-sky-300",children:" else if "})," chain."]}),e.jsx(s,{language:"javascript",initialCode:`let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}`}),e.jsxs("div",{className:"text-slate-300 space-y-3 leading-relaxed text-sm md:text-base",children:[e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-400",children:[e.jsx("li",{children:"Conditions are checked from **top to bottom**."}),e.jsx("li",{children:"Only the **first true condition** executes."}),e.jsx("li",{children:"The rest of the conditions are automatically ignored."})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{className:"text-sky-300",children:"else if"})," when your logic has **three or more decision levels**."]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Real-World Example"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"This example checks whether a user can access a website feature."}),e.jsx(s,{language:"javascript",initialCode:`let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
  console.log("You must log in first.");
} else if (isAdmin) {
  console.log("Welcome, Admin! You have full access.");
} else {
  console.log("Welcome! You have limited access.");
}`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Notice how the logic flows from the **most restrictive** condition to the **most permissive**."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Shorthand: The Ternary Operator"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["For simple decisions, you can shorten",e.jsx("code",{className:"text-sky-300",children:" if / else "})," using the **ternary operator**:"]}),e.jsx(s,{language:"javascript",initialCode:`let age = 20;

let message = age >= 18 
  ? "Adult"
  : "Minor";

console.log(message);`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Use this only when the logic is short and readable."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"="})," instead of ",e.jsx("code",{children:"=="})," or ",e.jsx("code",{children:"==="}),"(assignment vs comparison)."]}),e.jsxs("li",{children:["Forgetting that ",e.jsx("code",{children:"true"})," and ",e.jsx("code",{children:"false"}),' come from *expressions*, not from text like "yes" or "no".']}),e.jsxs("li",{children:["Writing too many nested ",e.jsx("code",{children:"if"})," blocks instead of using",e.jsx("code",{children:" else if"}),"."]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsx("li",{children:"Keep conditions simple and readable."}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"==="})," for strict comparison."]}),e.jsx("li",{children:"Avoid deep nesting — use early returns if needed."}),e.jsx("li",{children:"Ternary operator is good for small checks only."})]})]})]})}export{t as default};

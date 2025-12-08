import{j as e,E as s}from"./index-DrvZtsBI.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300",children:["Nested ",e.jsx("span",{className:"text-sky-400",children:"if"})," Statements"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["A ",e.jsx("strong",{children:"nested if statement"})," is an ",e.jsx("code",{className:"text-sky-300",children:"if"})," placed inside another ",e.jsx("code",{className:"text-sky-300",children:"if"}),". It allows you to perform **multi-level decision making**, where one decision depends on the outcome of another."]}),e.jsx(s,{language:"javascript",initialCode:`let score = 85;

if (score >= 60) {
  if (score >= 80) {
    console.log("Excellent");
  } else {
    console.log("Good");
  }
} else {
  console.log("Fail");
}`}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["In the example above, the second decision (",e.jsx("code",{children:"score &gt= 80"}),") happens only if the first condition (",e.jsx("code",{children:"score &gt= 60"}),") is true."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"How the Logic Flows"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsxs("li",{children:["The outer ",e.jsx("code",{children:"if"})," checks the main condition."]}),e.jsxs("li",{children:["If it is true, the program evaluates the inner ",e.jsx("code",{children:"if"}),"."]}),e.jsx("li",{children:"If not, the inner block is skipped entirely."})]}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"This structure helps when decisions must follow a **specific sequence**."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Real-World Example: Login + Role Check"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["Nested ",e.jsx("code",{children:"if"})," is commonly used when one verification depends on another—like checking login status before checking user roles."]}),e.jsx(s,{language:"javascript",initialCode:`let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Here, the program checks:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400",children:[e.jsxs("li",{children:[e.jsx("code",{children:"isLoggedIn"})," must be true before role checking happens."]}),e.jsx("li",{children:"This prevents checking admin privileges for users who aren’t logged in."})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"Over-Nesting Can Reduce Readability"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["Too many nested blocks make code hard to read, debug, and maintain. A common improvement is to use ",e.jsx("strong",{children:"guard clauses"})," or",e.jsx("strong",{children:" else if"})," instead of deep nesting."]}),e.jsx(s,{language:"javascript",initialCode:`let score = 85;

if (score < 60) {
  console.log("Fail");
} else if (score < 80) {
  console.log("Good");
} else {
  console.log("Excellent");
}`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Same logic — but much cleaner. This approach is preferred when multiple conditions are unrelated to each other."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsx("li",{children:"Avoid deep nesting; it makes code difficult to understand."}),e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"else if"})," when conditions are independent."]}),e.jsxs("li",{children:["Use nested ",e.jsx("code",{children:"if"})," only when one condition depends on another."]}),e.jsx("li",{children:"Use meaningful variable names to improve readability."})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Try It Yourself"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Write a nested ",e.jsx("code",{children:"if"})," that checks:"]}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 space-y-1",children:[e.jsx("li",{children:"If the user is logged in"}),e.jsx("li",{children:"If their subscription is active"}),e.jsx("li",{children:"If both true → show “Access granted”"})]}),e.jsx(s,{language:"javascript",initialCode:`let loggedIn = true;
let subscriptionActive = true;

// Try writing the logic here 👇`})]})]})}export{t as default};

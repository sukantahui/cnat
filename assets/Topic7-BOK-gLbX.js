import{j as e,E as s}from"./index-BMdPLlUD.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Short-Circuit Evaluation in JavaScript"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Short-circuiting is the behavior where JavaScript stops evaluating an expression as soon as the result is determined."}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["This happens with logical operators:",e.jsx("code",{className:"text-emerald-400",children:" && (AND)"}),",",e.jsx("code",{className:"text-sky-400",children:" || (OR)"}),", and",e.jsx("code",{className:"text-indigo-400",children:" ?? (Nullish Coalescing)"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-semibold text-emerald-400",children:["1. AND (",e.jsx("code",{children:"&&"}),") Operator"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["The ",e.jsx("code",{children:"&&"})," operator stops early if the first value is",e.jsx("strong",{className:"text-rose-400",children:" falsy"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`console.log(false && "Hello");   // false
console.log(0 && "Hello");       // 0
console.log(true && "Hello");    // "Hello"`}),e.jsx("p",{className:"text-slate-400",children:"If the first operand is falsy → JS returns it immediately."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-semibold text-sky-400",children:["2. OR (",e.jsx("code",{children:"||"}),") Operator"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["The ",e.jsx("code",{children:"||"})," operator returns the first",e.jsx("strong",{className:"text-emerald-400",children:" truthy"})," value."]}),e.jsx(s,{language:"javascript",initialCode:`console.log("" || "Default");   // "Default"
console.log(0 || 10);          // 10
console.log("Hi" || "Hello");  // "Hi"`}),e.jsx("p",{className:"text-slate-400",children:"OR is often used for fallback/default values."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-semibold text-indigo-400",children:["3. Nullish Coalescing (",e.jsx("code",{children:"??"}),")"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("code",{children:"??"})," returns the right-hand value only when the left-hand side is",e.jsx("strong",{className:"text-rose-400",children:" null"})," or",e.jsx("strong",{className:"text-rose-400",children:" undefined"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`console.log(null ?? "Default");     // "Default"
console.log(undefined ?? "Default"); // "Default"
console.log(0 ?? "Default");         // 0 (NOT replaced)
console.log("" ?? "Default");        // "" (NOT replaced)`}),e.jsx("p",{className:"text-slate-400",children:"Use this when you want defaults ONLY for missing values, not falsy values."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Real-World Examples"}),e.jsx("h4",{className:"text-lg text-slate-200 font-semibold",children:"🔹 1. Safe Function Calls"}),e.jsx(s,{language:"javascript",initialCode:`let user = { name: "Amit" };

console.log(user && user.name);   // "Amit"`}),e.jsx("h4",{className:"text-lg text-slate-200 font-semibold",children:"🔹 2. Setting Default Values"}),e.jsx(s,{language:"javascript",initialCode:`let input = "";

let value = input || "Default Text";
console.log(value);`}),e.jsx("h4",{className:"text-lg text-slate-200 font-semibold",children:"🔹 3. Using ?? for Safer Defaults"}),e.jsx(s,{language:"javascript",initialCode:`let count = 0;

console.log(count || 10);  // 10 (bad: 0 is treated as falsy)
console.log(count ?? 10);  // 0 (correct)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 space-y-2 text-sm md:text-base leading-relaxed",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"||"})," instead of ",e.jsx("code",{children:"??"})," when ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," are valid values."]}),e.jsxs("li",{children:["Assuming ",e.jsx("code",{children:"&&"})," always returns a boolean — it returns the actual value."]}),e.jsx("li",{children:"Forgetting that JS stops evaluating as soon as the result is known."})]})]}),e.jsxs("section",{className:"space-y-4 pb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Try It Yourself"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["Fill in the missing logic using ",e.jsx("code",{children:"&&"}),", ",e.jsx("code",{children:"||"}),", or ",e.jsx("code",{children:"??"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`let username = "";
let displayName;

// Use short-circuiting so that:
// If username exists → use it
// Otherwise → use "Guest"

displayName = /* Write code here */

console.log(displayName);`}),e.jsx(s,{language:"javascript",initialCode:`let value = null;

// Replace null only, NOT false or 0

let finalValue = /* Write code here */

console.log(finalValue);`}),e.jsx(s,{language:"javascript",initialCode:`let isLoggedIn = true;

// Print "Welcome" ONLY if logged in
// Otherwise print nothing

isLoggedIn /* Write code using && */ console.log("Welcome");`})]})]})}export{t as default};

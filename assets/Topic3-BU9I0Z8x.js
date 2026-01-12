import{j as e,E as s}from"./index-Be2ZQ4sg.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300",children:["The ",e.jsx("span",{className:"text-sky-400",children:"switch"})," Statement"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["A ",e.jsx("code",{className:"text-sky-300",children:"switch"})," statement lets you compare a value against multiple possible cases. It is cleaner than writing a long chain of",e.jsx("code",{className:"text-sky-300",children:" if / else if "}),", especially when checking the same variable repeatedly."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Basic Example"}),e.jsx(s,{language:"javascript",initialCode:`let day = 3;
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

console.log(result);`}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Here, the value of ",e.jsx("code",{className:"text-sky-300",children:"day"})," determines which case block executes. The ",e.jsx("code",{className:"text-sky-300",children:"default"})," case runs only when no other case matches."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-xl font-semibold text-rose-300",children:["Understanding ",e.jsx("code",{children:"break"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["Each ",e.jsx("code",{className:"text-sky-300",children:"case"})," must end with a",e.jsx("code",{className:"text-sky-300",children:" break "})," statement to prevent **fall-through**, which means execution continues into the next case."]}),e.jsx(s,{language:"javascript",initialCode:`let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
  case "yellow":
    console.log("Caution");
  case "green":
    console.log("Go");
} 

// All 3 messages will print — NO break statements!`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"Fall-through can be helpful sometimes, but often it is accidental and should be avoided."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Intentional Fall-Through"}),e.jsx("p",{className:"text-slate-300",children:"Sometimes fall-through is used purposely when multiple cases share the same output."}),e.jsx(s,{language:"javascript",initialCode:`let fruit = "banana";

switch (fruit) {
  case "apple":
  case "banana":
  case "mango":
    console.log("This is a tropical fruit");
    break;
  default:
    console.log("Not a tropical fruit");
}`}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"All 3 cases produce the same message. This is a clean and efficient pattern."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"switch"})," with Expressions"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Although ",e.jsx("code",{children:"switch"})," typically checks static values, you can also use expressions."]}),e.jsx(s,{language:"javascript",initialCode:`let age = 25;

switch (true) {
  case age < 13:
    console.log("Child");
    break;
  case age < 20:
    console.log("Teenager");
    break;
  case age < 60:
    console.log("Adult");
    break;
  default:
    console.log("Senior");
}`})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-xl font-semibold text-emerald-400",children:["When to Use ",e.jsx("code",{children:"switch"})," Instead of ",e.jsx("code",{children:"if / else"}),"?"]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base leading-relaxed",children:[e.jsx("li",{children:"When checking **multiple exact values** of the same variable."}),e.jsxs("li",{children:["When you want a cleaner alternative to long ",e.jsx("code",{children:"else if"})," chains."]}),e.jsx("li",{children:"When different cases share the same result (fall-through grouping)."})]}),e.jsx(s,{language:"javascript",initialCode:`// Long if/else version
if (role === "admin") {
  message = "Full Access";
} else if (role === "editor") {
  message = "Edit Access";
} else if (role === "viewer") {
  message = "Read Only";
} else {
  message = "No Access";
}

// Cleaner switch version
switch (role) {
  case "admin":
    message = "Full Access";
    break;
  case "editor":
    message = "Edit Access";
    break;
  case "viewer":
    message = "Read Only";
    break;
  default:
    message = "No Access";
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Try It Yourself"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["Write a ",e.jsx("code",{children:"switch"})," statement that prints the season based on a month number:"]}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 space-y-1",children:[e.jsx("li",{children:"3–5 → “Spring”"}),e.jsx("li",{children:"6–8 → “Summer”"}),e.jsx("li",{children:"9–11 → “Autumn”"}),e.jsx("li",{children:"12, 1, 2 → “Winter”"})]}),e.jsx(s,{language:"javascript",initialCode:`let month = 4;

// Write your switch logic here 👇`})]})]})}export{t as default};

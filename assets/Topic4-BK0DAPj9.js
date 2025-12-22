import{j as e,E as s}from"./index-BwpYMbum.js";function l(){return e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300",children:["Real-World Examples of ",e.jsx("span",{className:"text-sky-400",children:"Decision Making"})]}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Conditional logic powers almost every part of real applications — authentication, dashboards, billing, UI rendering, and much more. Below are practical scenarios that demonstrate how decisions work in everyday JavaScript programs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-200 flex items-center gap-2",children:"🔹 Login System"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"A classic example of decision making — checking if username and password match expected values."}),e.jsx(s,{language:"javascript",initialCode:`let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful!");
} else {
  console.log("Invalid credentials");
}`}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"In real applications, authentication happens on a server, but the logic remains similar."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-200 flex items-center gap-2",children:"🔹 Grading System"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Educational platforms use conditional logic to determine grades based on marks."}),e.jsx(s,{language:"javascript",initialCode:`let marks = 78;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Needs improvement");
}`}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["This example uses an ",e.jsx("code",{children:"else if"})," ladder — great for multiple decision levels."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-200 flex items-center gap-2",children:"🔹 Discount Calculator"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"E-commerce sites dynamically compute discount percentages based on product price."}),e.jsx(s,{language:"javascript",initialCode:`let price = 500;
let discount = price > 400 ? 20 : 5;

console.log("Discount:", discount, "%");`}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"This is a perfect use-case for the ternary operator — quick, clean, readable."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-200 flex items-center gap-2",children:"🔹 Shipping Eligibility"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Decision-making helps platforms like Amazon calculate whether an order qualifies for free shipping."}),e.jsx(s,{language:"javascript",initialCode:`let cartValue = 320;

if (cartValue >= 500) {
  console.log("Free Shipping Available!");
} else {
  console.log("Shipping charges apply.");
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-slate-200 flex items-center gap-2",children:"🔹 Access Control (Role-Based)"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Web apps often show different features depending on the user's role."}),e.jsx(s,{language:"javascript",initialCode:`let role = "editor";

switch (role) {
  case "admin":
    console.log("Full Access to Dashboard");
    break;
  case "editor":
    console.log("Edit Content Access");
    break;
  case "viewer":
    console.log("Read Only Access");
    break;
  default:
    console.log("No Access");
}`}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Role-based permissions are vital in content management and security systems."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Best Practices for Decision Making"}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 text-sm md:text-base leading-relaxed space-y-2",children:[e.jsx("li",{children:"Keep conditions simple and readable."}),e.jsx("li",{children:"Avoid deep nesting — refactor when possible."}),e.jsx("li",{children:"Use ternaries only for short decisions."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"switch"})," for many fixed-value comparisons."]}),e.jsxs("li",{children:["Ensure every ",e.jsx("code",{children:"if"})," block has a clear purpose."]})]})]})]})}export{l as default};

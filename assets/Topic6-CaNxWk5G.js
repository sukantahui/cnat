import{j as e,E as s}from"./index-C1Y0luCw.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Topic 5 — Checking Conditions with some() & every() (Objects)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"some()"})," and ",e.jsx("code",{children:"every()"})," help you quickly check conditions in arrays of objects — useful for validations, dashboards, searches, permissions, task status, and real-world decision making in JavaScript."]})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Quick Summary"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"some()"})," → returns ",e.jsx("b",{children:"true"})," if ",e.jsx("u",{children:"at least one"})," item matches the condition."]}),e.jsxs("li",{children:[e.jsx("code",{children:"every()"})," → returns ",e.jsx("b",{children:"true"})," only if ",e.jsx("u",{children:"all"})," items match the condition."]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"1. Check if Any Student Failed (some)"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92 },
  { name: "Susmita", marks: 78 },
  { name: "Kaustav", marks: 55 },
  { name: "Swadeep", marks: 34 }
];

// Check if someone failed
const anyFailed = students.some(s => s.marks < 40);

console.log(anyFailed); // true`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-yellow-300 font-semibold",children:"2. Check if All Students Passed (every)"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92 },
  { name: "Susmita", marks: 78 },
  { name: "Kaustav", marks: 55 }
];

// Check if all passed
const allPassed = students.every(s => s.marks >= 40);

console.log(allPassed); // true`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-indigo-300 font-semibold",children:"3. Check If Any User Is Inactive (some)"}),e.jsx(s,{initialCode:`const users = [
  { name: "Ritaja", active: true },
  { name: "Susmita", active: true },
  { name: "Kaustav", active: false }
];

// Is any user inactive?
const hasInactive = users.some(u => u.active === false);

console.log(hasInactive); // true`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-rose-300 font-semibold",children:"4. Check If All Users Are Active (every)"}),e.jsx(s,{initialCode:`const users = [
  { name: "Devangshu", active: true },
  { name: "Kaustav", active: true },
  { name: "Pranjali", active: true }
];

// All active?
const allActive = users.every(u => u.active);

console.log(allActive); // true`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-purple-300 font-semibold",children:"5. Check If Any Product Is Out of Stock"}),e.jsx(s,{initialCode:`const products = [
  { name: "Laptop", stock: 12 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 5 }
];

const outOfStock = products.some(p => p.stock === 0);

console.log(outOfStock); // true`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-lime-300 font-semibold",children:"6. Validate If All Required Fields Exist"}),e.jsx(s,{initialCode:`const formData = [
  { field: "name", value: "Ritaja", required: true },
  { field: "email", value: "test@example.com", required: true },
  { field: "phone", value: "", required: false }
];

// Check if all required fields are filled
const valid = formData.every(f => {
  if (!f.required) return true;
  return f.value.trim() !== "";
});

console.log(valid);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-orange-300 font-semibold",children:"7. Task Manager — Check If All Tasks Completed"}),e.jsx(s,{initialCode:`const tasks = [
  { task: "Study", done: true },
  { task: "Assignment", done: true },
  { task: "Practice JS", done: false }
];

// All tasks done?
const allDone = tasks.every(t => t.done);

console.log(allDone); // false`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-cyan-300 font-semibold",children:"8. Search Check — Any User Matches Keyword?"}),e.jsx(s,{initialCode:`const users = [
  { name: "Ritaja", city: "Kolkata" },
  { name: "Susmita", city: "Barrackpore" },
  { name: "Kaustav", city: "Kalyani" }
];

const query = "ka"; // case-insensitive search

const found = users.some(u =>
  u.name.toLowerCase().includes(query) ||
  u.city.toLowerCase().includes(query)
);

console.log(found); // true`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Teacher’s Note by Sukanta Hui"}),e.jsxs("p",{children:["Mastering ",e.jsx("code",{children:"some()"})," and ",e.jsx("code",{children:"every()"})," makes your code smarter and cleaner. These are essential for validations, dashboard logic, form checking, and permission systems. Practice each example with your own datasets — especially student and product data."]})]})]})}export{t as default};

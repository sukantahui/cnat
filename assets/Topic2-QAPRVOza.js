import{j as e,E as s}from"./index-BulJBpSd.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Topic 2 — Searching, Sorting & Filtering Arrays of Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In real-world JavaScript (and React apps), you will constantly work with"," ",e.jsx("b",{children:"arrays of objects"})," — students, products, users, tasks, courses etc. In this topic, we practice ",e.jsx("code",{children:"filter()"}),", ",e.jsx("code",{children:"find()"}),","," ",e.jsx("code",{children:"findIndex()"}),", ",e.jsx("code",{children:"sort()"}),", ",e.jsx("code",{children:"some()"}),","," ",e.jsx("code",{children:"every()"}),", and method chaining with objects."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"1. filter() — Multiple Conditions on Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Use ",e.jsx("code",{children:"filter()"})," when you need to keep only those objects that pass certain conditions — for example, students who are in"," ",e.jsx("code",{children:'"JavaScript"'})," course and have marks ≥ 80."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja",   marks: 92, course: "JavaScript", city: "Barrackpore" },
  { name: "Swadeep",  marks: 45, course: "Python",     city: "Kolkata" },
  { name: "Susmita",  marks: 88, course: "JavaScript", city: "Barrackpore" },
  { name: "Kaustav",  marks: 67, course: "Python",     city: "Barasat" },
];

const jsToppers = students.filter(
  s => s.course === "JavaScript" && s.marks >= 80
);

console.log("JavaScript toppers:", jsToppers);`,language:"javascript"}),e.jsx(s,{initialCode:`const products = [
  { name: "Laptop",   price: 55000, inStock: true },
  { name: "Keyboard", price: 1200,  inStock: false },
  { name: "Mouse",    price: 600,   inStock: true },
  { name: "Monitor",  price: 7000,  inStock: true },
];

// Filter products that are in stock AND price < 5000
const affordableInStock = products.filter(
  p => p.inStock && p.price < 5000
);

console.log("Affordable & in stock:", affordableInStock);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-yellow-300 font-semibold",children:"2. find() & findIndex() — Locate Objects Quickly"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"find()"})," returns the ",e.jsx("b",{children:"first matching object"}),"."," ",e.jsx("code",{children:"findIndex()"})," returns the ",e.jsx("b",{children:"index/position"})," of that object. These are useful when editing or deleting a specific item."]}),e.jsx(s,{initialCode:`const users = [
  { id: 1, name: "Ritaja",   role: "admin" },
  { id: 2, name: "Susmita",  role: "student" },
  { id: 3, name: "Devangshu",role: "teacher" },
];

// find admin
const adminUser = users.find(u => u.role === "admin");
console.log("Admin user:", adminUser);

// findIndex of teacher
const teacherIndex = users.findIndex(u => u.role === "teacher");
console.log("Teacher index:", teacherIndex);`,language:"javascript"}),e.jsx(s,{initialCode:`const tasks = [
  { id: 1, title: "HTML Practice",        completed: true },
  { id: 2, title: "JavaScript Assignment", completed: false },
  { id: 3, title: "React Project",         completed: false },
];

const firstPendingTask = tasks.find(t => !t.completed);
const firstPendingIndex = tasks.findIndex(t => !t.completed);

console.log("First pending task:", firstPendingTask);
console.log("Index of first pending:", firstPendingIndex);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-blue-300 font-semibold",children:"3. sort() — Sorting Arrays of Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"sort()"})," can sort objects by marks, price, name, etc. Always remember: ",e.jsx("b",{children:"sort() mutates the original array"}),". Use ",e.jsx("code",{children:"slice()"})," first if you want to keep the original."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Susmita", marks: 74 },
  { name: "Mounita", marks: 91 },
  { name: "Kaustav", marks: 67 },
  { name: "Pranjali", marks: 88 },
];

// clone first to avoid mutating original
const sortedByMarksDesc = students
  .slice()
  .sort((a, b) => b.marks - a.marks);

console.log("Original:", students);
console.log("Sorted (high → low):", sortedByMarksDesc);`,language:"javascript"}),e.jsx(s,{initialCode:`const courses = [
  { title: "JavaScript Basics" },
  { title: "Advance Excel" },
  { title: "Full Stack Development" },
  { title: "Python for Data Analysis" },
];

const sortedByTitle = courses
  .slice()
  .sort((a, b) => a.title.localeCompare(b.title));

console.log("Sorted by title:", sortedByTitle);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-purple-300 font-semibold",children:"4. some() & every() — Validation on Arrays of Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"some()"})," → returns ",e.jsx("code",{children:"true"})," if ",e.jsx("b",{children:"at least one"})," item passes. ",e.jsx("br",{}),e.jsx("code",{children:"every()"})," → returns ",e.jsx("code",{children:"true"})," if ",e.jsx("b",{children:"all"})," items pass."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja",  marks: 92 },
  { name: "Swadeep", marks: 45 },
  { name: "Susmita", marks: 74 },
];

const anyFailed  = students.some(s => s.marks < 40);
const allPassed  = students.every(s => s.marks >= 40);

console.log("Any failed? ", anyFailed);
console.log("All passed? ", allPassed);`,language:"javascript"}),e.jsx(s,{initialCode:`const users = [
  { name: "Admin",   email: "admin@cnat.in" },
  { name: "Student", email: "" },
  { name: "Guest",   email: "guest@cnat.in" },
];

// Check if any user has missing email
const anyMissingEmail = users.some(u => !u.email);

console.log("Any missing email? ", anyMissingEmail);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-rose-300 font-semibold",children:"5. Chaining Methods — filter → sort → map"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In professional code (like React dashboards), we often chain methods:",e.jsx("code",{children:"filter()"})," → ",e.jsx("code",{children:"sort()"})," → ",e.jsx("code",{children:"map()"})," to prepare data for UI."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja",   marks: 92, course: "JavaScript" },
  { name: "Susmita",  marks: 74, course: "Python" },
  { name: "Kaustav",  marks: 67, course: "JavaScript" },
  { name: "Devangshu",marks: 81, course: "JavaScript" },
  { name: "Pranjali", marks: 88, course: "Python" },
];

// Goal: Show TOP JavaScript students as label strings
// Steps: filter → sort → map

const topJsLabels = students
  .filter(s => s.course === "JavaScript" && s.marks >= 70)  // keep JS students with marks ≥ 70
  .slice()                                                  // clone before sort (safe habit)
  .sort((a, b) => b.marks - a.marks)                        // sort high → low
  .map(s => \`\${s.name} (\${s.marks})\`);                   // create label strings

console.log("Top JS Students:", topJsLabels);`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Teacher's Note — by Sukanta Hui (Coder & AccoTax, Barrackpore)"}),e.jsxs("p",{children:["When you work with API data (students, products, users), you will almost always use",e.jsx("code",{children:" filter()"}),", ",e.jsx("code",{children:"find()"}),", ",e.jsx("code",{children:"sort()"}),", ",e.jsx("code",{children:"some()"}),","," ",e.jsx("code",{children:"every()"}),", and ",e.jsx("code",{children:"map()"})," in combination."]}),e.jsxs("p",{children:["Try to think in ",e.jsx("b",{children:"pipelines"}),": “Take data → filter → sort → map → show in UI”. If you practice these patterns carefully now, building dashboards and React tables will feel much easier later."]})]}),e.jsxs("section",{className:"bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-200 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"Mini Practice — For Your Notebook"}),e.jsxs("ol",{className:"list-decimal ml-5 space-y-1",children:[e.jsx("li",{children:"Create an array of 6–7 product objects (name, price, category, inStock)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"filter()"})," to get only products from category ",e.jsx("code",{children:'"Electronics"'})," and price < 5000."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sort()"})," to order them by price (low → high)."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"map()"})," to convert them into label strings like ",e.jsx("code",{children:'"Laptop — ₹45000"'}),"."]})]}),e.jsx("p",{className:"text-slate-400 mt-1",children:"Try to write the full solution using a single chained expression."})]})]})}export{a as default};

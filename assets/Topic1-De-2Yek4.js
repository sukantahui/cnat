import{j as e,E as s}from"./index-D0NGu4uK.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Introduction to Advanced Array Methods with Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In this topic, we explore how JavaScript’s most powerful array methods work with"," ",e.jsx("b",{children:"arrays of objects"})," — the type of data structure used in real-world apps, dashboards, e-commerce sites, student records, and more."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"1. map() — Transform Objects"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"map()"})," is used to transform each object into a new structure. This is extremely useful for formatting data coming from APIs."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 88 },
  { name: "Mounita", marks: 92 },
  { name: "Devangshu", marks: 75 }
];

const names = students.map(s => s.name);

console.log(names);`,language:"javascript"}),e.jsx(s,{initialCode:`const products = [
  { title: "Laptop", price: 50000 },
  { title: "Keyboard", price: 1200 },
  { title: "Mouse", price: 600 }
];

// Create labels for UI
const labels = products.map(p => \`\${p.title} — Rs. \${p.price}\`);

console.log(labels);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-rose-300",children:"2. filter() — Selecting Objects Based on Conditions"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"filter()"})," is used whenever we need to select only certain items from a list, such as “only passed students”, “only expensive products”, etc."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Susmita", marks: 85 },
  { name: "Swadeep", marks: 34 },
  { name: "Kaustav", marks: 73 },
  { name: "Pranjali", marks: 92 }
];

const passed = students.filter(s => s.marks >= 40);

console.log(passed);`,language:"javascript"}),e.jsx(s,{initialCode:`const products = [
  { title: "Bag", price: 700 },
  { title: "Shoes", price: 2500 },
  { title: "Watch", price: 1200 }
];

// Filter items above Rs. 1000
const premium = products.filter(p => p.price > 1000);

console.log(premium);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-yellow-300",children:"3. reduce() — Summaries, Totals & Analytics"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"reduce()"})," is extremely powerful when working with analytics, dashboards, and financial calculations."]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 88 },
  { name: "Mounita", marks: 92 },
  { name: "Devangshu", marks: 75 }
];

// Total marks
const total = students.reduce((sum, s) => sum + s.marks, 0);

console.log("Total:", total);`,language:"javascript"}),e.jsx(s,{initialCode:`const cart = [
  { item: "Laptop", price: 50000, qty: 1 },
  { item: "Mouse", price: 600, qty: 2 },
  { item: "Keyboard", price: 1200, qty: 1 }
];

// Grand total
const bill = cart.reduce((amount, item) => {
  return amount + item.price * item.qty;
}, 0);

console.log("Total Bill:", bill);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-indigo-300",children:"4. find(), sort(), some(), every() with Objects"}),e.jsx(s,{initialCode:`const students = [
  { name: "Susmita", marks: 88 },
  { name: "Ritaja", marks: 95 },
  { name: "Mounita", marks: 72 }
];

const topper = students.find(s => s.marks > 90);

console.log(topper);`,language:"javascript"}),e.jsx(s,{initialCode:`const products = [
  { title: "Laptop", price: 50000 },
  { title: "Shoes", price: 2000 },
  { title: "Mouse", price: 500 }
];

// Sort by price (low → high)
products.sort((a, b) => a.price - b.price);

console.log(products);`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/50 border border-slate-700 p-4 rounded-xl text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Teacher’s Note – by Sukanta Hui"}),e.jsx("p",{children:"These examples reflect the real data structures used in your careers: student records, product lists, billing systems, analytics dashboards, and API responses. Mastering array methods with objects is essential for React, frontend development, and any modern JavaScript project."})]})]})}export{a as default};

import{j as e,E as s}from"./index-BFnLuail.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Topic 7 — Chaining Array Methods (map → filter → reduce)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Chaining array methods is one of the most powerful techniques in modern JavaScript. Instead of writing long loops, you combine ",e.jsx("code",{children:"map()"}),", ",e.jsx("code",{children:"filter()"}),",",e.jsx("code",{children:"sort()"}),", and ",e.jsx("code",{children:"reduce()"})," to build beautiful, clean data pipelines. This is the exact pattern used in dashboards, API data processing, student portals, e-commerce filtering, and React applications."]})]}),e.jsxs("section",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Why Chain Methods?"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsx("li",{children:"Build readable data pipelines"}),e.jsx("li",{children:"Better than nested loops and complex logic"}),e.jsx("li",{children:"Used in almost every React project"}),e.jsx("li",{children:"Perfect for handling API responses"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"1. Student Pipeline — Filter → Sort → Map"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Get top 3 JS students sorted by marks."}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92, subject: "JS" },
  { name: "Susmita", marks: 78, subject: "JS" },
  { name: "Devangshu", marks: 55, subject: "Python" },
  { name: "Kaustav", marks: 81, subject: "JS" },
  { name: "Swadeep", marks: 34, subject: "JS" },
];

const topThree = students
  .filter(s => s.subject === "JS")           // only JS students
  .filter(s => s.marks >= 40)               // passed students
  .sort((a, b) => b.marks - a.marks)        // highest first
  .map(s => s.name)                         // extract names
  .slice(0, 3);                              // take top 3

console.log(topThree);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-yellow-300 font-semibold",children:"2. Sales Dashboard — Map → Filter → Reduce"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Calculate total revenue from products above ₹1000."}),e.jsx(s,{initialCode:`const products = [
  { name: "Mouse", price: 650, qty: 10 },
  { name: "Keyboard", price: 1500, qty: 5 },
  { name: "Monitor", price: 9000, qty: 2 },
  { name: "Pen Drive", price: 450, qty: 20 }
];

const totalRevenue = products
  .filter(p => p.price > 1000)                // only premium items
  .map(p => p.price * p.qty)                  // convert to revenue array
  .reduce((sum, value) => sum + value, 0);    // sum all revenue

console.log(totalRevenue);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-indigo-300 font-semibold",children:"3. Course Performance Analyzer (Real-World)"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Weighted score analysis done in portals."}),e.jsx(s,{initialCode:`const courses = [
  { name: "JavaScript", students: 40, avgMarks: 78 },
  { name: "Python", students: 35, avgMarks: 82 },
  { name: "Full Stack", students: 25, avgMarks: 74 },
  { name: "Excel", students: 60, avgMarks: 88 }
];

const totalScore = courses
  .map(c => c.avgMarks * c.students)          // weighted marks
  .reduce((sum, val) => sum + val, 0);        // total weighted score

console.log(totalScore);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-rose-300 font-semibold",children:"4. Employee Productivity Pipeline"}),e.jsx(s,{initialCode:`const employees = [
  { name: "Sukanta", hours: 8, salary: 500 },
  { name: "Tanusree", hours: 6, salary: 450 },
  { name: "Ritaja", hours: 9, salary: 550 },
  { name: "Mounita", hours: 4, salary: 300 }
];

// Filter hard workers, calculate cost
const dailyCost = employees
  .filter(e => e.hours >= 6)                  // productive employees
  .map(e => e.salary * e.hours)               // daily earning
  .reduce((acc, val) => acc + val, 0);

console.log(dailyCost);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-purple-300 font-semibold",children:"5. Grouping & Analytics (Map → Reduce)"}),e.jsx(s,{initialCode:`const marks = [
  { name: "Ritaja", subject: "JS", marks: 92 },
  { name: "Susmita", subject: "JS", marks: 78 },
  { name: "Kaustav", subject: "Python", marks: 55 },
  { name: "Devangshu", subject: "JS", marks: 81 },
  { name: "Swadeep", subject: "Python", marks: 34 }
];

// Count how many passed per subject
const grouped = marks.reduce((acc, s) => {
  if (!acc[s.subject]) acc[s.subject] = 0;
  if (s.marks >= 40) acc[s.subject] += 1;
  return acc;
}, {});

console.log(grouped);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-teal-300 font-semibold",children:"6. Department → Students → Filter → Sort (flatMap + chain)"}),e.jsx(s,{initialCode:`const departments = [
  { dept: "IT", students: ["Ritaja", "Susmita"] },
  { dept: "Accounts", students: ["Kaustav", "Pranjali"] },
  { dept: "HR", students: ["Devangshu", "Swadeep"] }
];

// Flatten → Filter → Sort
const result = departments
  .flatMap(d => d.students)
  .filter(name => name.toLowerCase().includes("a"))
  .sort();

console.log(result);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-orange-300 font-semibold",children:"7. Full E-commerce Pipeline (Search → Filter → Sort → Reduce)"}),e.jsx(s,{initialCode:`const products = [
  { name: "Laptop", price: 55000, rating: 4.8 },
  { name: "Mouse", price: 650, rating: 4.2 },
  { name: "Keyboard", price: 1500, rating: 4.5 },
  { name: "Monitor", price: 9000, rating: 4.7 }
];

const search = "o";

const pipeline = products
  .filter(p => p.name.toLowerCase().includes(search))
  .filter(p => p.price > 1000)
  .sort((a, b) => b.rating - a.rating)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log(pipeline);`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Teacher’s Note by Sukanta Hui"}),e.jsx("p",{children:"Chaining transforms your JavaScript into clean, professional-level code. This is exactly what developers do when processing API data in React apps. Practice creating your own pipelines using student lists, products, sales records, or any dataset you like."})]})]})}export{t as default};

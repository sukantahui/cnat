import{j as e,E as s}from"./index-RLE6xEGw.js";function t(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Topic 3 — reduce(), Grouping, Analytics & Nested Data Processing"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"reduce()"})," is the most powerful array method. It helps you calculate totals, averages, rankings, group data, build frequency maps, and transform large datasets (like API responses). Mastering ",e.jsx("code",{children:"reduce()"})," means mastering real-world JavaScript used in React dashboards, analytics, and backend logic."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"1. reduce() — Calculate Totals"}),e.jsx(s,{initialCode:`const marks = [78, 92, 85, 90];

const total = marks.reduce((sum, m) => sum + m, 0);

console.log("Total Marks:", total);`,language:"javascript"}),e.jsx(s,{initialCode:`const expenses = [
  { item: "Snacks", cost: 40 },
  { item: "Books", cost: 350 },
  { item: "Bus Fare", cost: 15 },
  { item: "Tea", cost: 10 }
];

const totalCost = expenses.reduce((sum, e) => sum + e.cost, 0);

console.log("Total Expense:", totalCost);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-yellow-300 font-semibold",children:"2. Average Calculations"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92 },
  { name: "Susmita", marks: 88 },
  { name: "Kaustav", marks: 75 },
  { name: "Pranjali", marks: 91 }
];

const avgMarks = students.reduce((acc, s, _, arr) => {
  return acc + s.marks / arr.length;
}, 0);

console.log("Average Marks:", avgMarks.toFixed(2));`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-rose-300 font-semibold",children:"3. Grouping Objects by Property (Reduce Magic)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Grouping is extremely common in dashboards, admin panels, and analytics."}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", course: "JavaScript", marks: 92 },
  { name: "Susmita", course: "Python", marks: 88 },
  { name: "Kaustav", course: "JavaScript", marks: 75 },
  { name: "Devangshu", course: "Python", marks: 91 },
];

const groupByCourse = students.reduce((acc, s) => {
  if (!acc[s.course]) acc[s.course] = [];
  acc[s.course].push(s);
  return acc;
}, {});

console.log(groupByCourse);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-indigo-300 font-semibold",children:"4. Frequency Count (How Many Times a Value Appears)"}),e.jsx(s,{initialCode:`const items = ["pen", "book", "pen", "mouse", "book", "pen"];

const frequency = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(frequency);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-purple-300 font-semibold",children:"5. Convert Arrays → Objects (Very Useful!)"}),e.jsx(s,{initialCode:`const students = [
  { id: 1, name: "Ritaja" },
  { id: 2, name: "Susmita" },
  { id: 3, name: "Kaustav" },
];

const mapped = students.reduce((acc, s) => {
  acc[s.id] = s.name;
  return acc;
}, {});

console.log(mapped);
// { 1: "Ritaja", 2: "Susmita", 3: "Kaustav" }`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-blue-300 font-semibold",children:"6. Handling Nested Data — Extracting Deep Values"}),e.jsx(s,{initialCode:`const users = [
  {
    name: "Ritaja",
    orders: [
      { item: "Laptop", price: 55000 },
      { item: "Mouse", price: 600 }
    ]
  },
  {
    name: "Kaustav",
    orders: [
      { item: "Keyboard", price: 1500 },
      { item: "Pen Drive", price: 400 }
    ]
  }
];

const totalSpent = users.reduce((acc, user) => {
  const userTotal = user.orders.reduce((sum, o) => sum + o.price, 0);
  acc[user.name] = userTotal;
  return acc;
}, {});

console.log(totalSpent);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-teal-300 font-semibold",children:"7. Chaining: filter → sort → reduce"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92, course: "JS" },
  { name: "Susmita", marks: 78, course: "JS" },
  { name: "Kaustav", marks: 55, course: "Python" },
  { name: "Devangshu", marks: 81, course: "JS" },
  { name: "Swadeep", marks: 34, course: "Python" },
];

const jsAverage = students
  .filter(s => s.course === "JS")
  .sort((a, b) => b.marks - a.marks)
  .reduce((acc, s, _, arr) => acc + s.marks / arr.length, 0);

console.log("JS Average:", jsAverage.toFixed(2));`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-orange-300 font-semibold",children:"8. Mini Dashboard – Course Analytics"}),e.jsx(s,{initialCode:`const courseData = [
  { course: "JS", students: 40, avgMarks: 78 },
  { course: "Python", students: 35, avgMarks: 82 },
  { course: "Full Stack", students: 25, avgMarks: 74 },
  { course: "Excel", students: 60, avgMarks: 88 },
];

const summary = courseData.reduce(
  (acc, c) => {
    acc.totalStudents += c.students;
    acc.totalAvg += c.avgMarks;
    return acc;
  },
  { totalStudents: 0, totalAvg: 0 }
);

summary.overallAvg = summary.totalAvg / courseData.length;

console.log(summary);`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Teacher’s Note by Sukanta Hui"}),e.jsx("p",{children:"reduce() is the method that separates beginners from professionals. Once you learn to group, summarise, and transform data with reduce(), you can build dashboards, analytics, table summaries, and API-based components easily in React."})]})]})}export{t as default};

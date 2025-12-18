import{j as e,E as s}from"./index-DTiL1PGn.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-300",children:["Topic 4 — Using ",e.jsx("code",{children:"find()"})," & ",e.jsx("code",{children:"findIndex()"})," with Objects"]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"find()"})," and ",e.jsx("code",{children:"findIndex()"})," are used to locate a single item inside arrays — especially arrays of objects such as students, products, tasks, users, etc. These methods are essential when working with API data in React applications."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"1. find() — Returns the FIRST matching item"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 92 },
  { name: "Susmita", marks: 78 },
  { name: "Kaustav", marks: 55 }
];

const topper = students.find(s => s.marks > 90);

console.log(topper);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-yellow-300 font-semibold",children:"2. find() with Multiple Conditions"}),e.jsx(s,{initialCode:`const users = [
  { name: "Ritaja", role: "Admin", active: true },
  { name: "Susmita", role: "Student", active: false },
  { name: "Kaustav", role: "Student", active: true }
];

// Find active student
const activeStudent = users.find(
  u => u.role === "Student" && u.active === true
);

console.log(activeStudent);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-indigo-300 font-semibold",children:"3. find() in Nested Objects (Deep Search)"}),e.jsx(s,{initialCode:`const departments = [
  {
    name: "IT",
    students: ["Ritaja", "Susmita"]
  },
  {
    name: "Accounts",
    students: ["Kaustav", "Pranjali"]
  }
];

// Find department where "Kaustav" belongs
const dept = departments.find(d => d.students.includes("Kaustav"));

console.log(dept);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-rose-300 font-semibold",children:"4. findIndex() — Returns the INDEX of matching item"}),e.jsx(s,{initialCode:`const tasks = [
  { id: 1, title: "Study JS", done: false },
  { id: 2, title: "Practice React", done: false },
  { id: 3, title: "Finish Project", done: true }
];

const index = tasks.findIndex(t => t.done === true);

console.log(index); // 2`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-teal-300 font-semibold",children:"5. Update an Object using findIndex()"}),e.jsx(s,{initialCode:`const products = [
  { id: 1, name: "Mouse", price: 400 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Monitor", price: 8500 }
];

const idx = products.findIndex(p => p.id === 2);

if (idx !== -1) {
  products[idx].price = 1800; // update price
}

console.log(products);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-orange-300 font-semibold",children:"6. Remove Object from Array using findIndex()"}),e.jsx(s,{initialCode:`const cart = [
  { id: 1, item: "Laptop" },
  { id: 2, item: "Mouse" },
  { id: 3, item: "Keyboard" }
];

const removeId = 2;

const removeIndex = cart.findIndex(c => c.id === removeId);

if (removeIndex !== -1) {
  cart.splice(removeIndex, 1);
}

console.log(cart);`,language:"javascript"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl text-purple-300 font-semibold",children:"7. Real API Example — Search User by ID"}),e.jsx(s,{initialCode:`const apiUsers = [
  { id: 101, name: "Ritaja", city: "Kolkata" },
  { id: 102, name: "Susmita", city: "Barrackpore" },
  { id: 103, name: "Kaustav", city: "Barrackpore" }
];

const userId = 102;

const user = apiUsers.find(u => u.id === userId);

console.log(user);`,language:"javascript"})]}),e.jsxs("section",{className:"bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Teacher’s Note by Sukanta Hui"}),e.jsxs("p",{children:["In React apps and professional dashboards, ",e.jsx("code",{children:"find()"})," and ",e.jsx("code",{children:"findIndex()"}),"are used constantly — for selecting a user, updating a record, removing an item, or opening a detail page. Practice all examples and try using them in your own API-style datasets."]})]})]})}export{a as default};

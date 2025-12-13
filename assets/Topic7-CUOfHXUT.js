import{r as a,j as e}from"./index-Duu8q-kl.js";import{C as t}from"./CodeBlock-BowYddKP.js";import"./prism-json-BrV0MmDF.js";class o extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Rest Parameters (...args)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Rest parameters allow a function to accept an unlimited number of arguments as an array. It replaces the old ",e.jsx("code",{children:"arguments"})," object and gives developers a clean, modern approach to variable-length parameters. This feature is extremely useful in real-world JavaScript projects taught at"," ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Basic Example"}),e.jsx(t,{language:"javascript",code:`function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20));         // 30
console.log(sum(5, 10, 15, 20));  // 50
console.log(sum());               // 0`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["The ",e.jsx("code",{children:"...numbers"})," collects all arguments into an array."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Rest Parameter Must Come Last"}),e.jsx(t,{language:"javascript",code:`function register(course, teacher, ...students) {
  console.log("Course:", course);
  console.log("Teacher:", teacher);
  console.log("Students:", students);
}

register(
  "JavaScript Advanced",
  "Sukanta Hui",
  "Ritaja",
  "Mounita",
  "Swadeep"
);

/*
Course: JavaScript Advanced
Teacher: Sukanta Hui
Students: ["Ritaja", "Mounita", "Swadeep"]
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Practical Example — Calculate Average Marks"}),e.jsx(t,{language:"javascript",code:`function average(...marks) {
  if (marks.length === 0) return 0;
  return marks.reduce((a, b) => a + b, 0) / marks.length;
}

console.log(average(88, 92, 95)); // 91.66
console.log(average(70));         // 70
console.log(average());           // 0`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Great for student scoring systems used in classes."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Rest Parameter with Array Destructuring"}),e.jsx(t,{language:"javascript",code:`const students = ["Kaustav", "Susmita", "Devangshu", "Pranjali"];

const [leader, assistant, ...others] = students;

console.log(leader);    // "Kaustav"
console.log(assistant); // "Susmita"
console.log(others);    // ["Devangshu", "Pranjali"]`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Rest with Objects (ES6+)"}),e.jsx(t,{language:"javascript",code:`const studentProfile = {
  name: "Ritaja",
  batch: "JS-2025",
  city: "Barrackpore",
  centre: "Coder & AccoTax",
  marks: 92
};

const { name, batch, ...otherDetails } = studentProfile;

console.log(name);          // "Ritaja"
console.log(batch);         // "JS-2025"
console.log(otherDetails);  // { city: "Barrackpore", centre: "Coder & AccoTax", marks: 92 }`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Handy when working with filtered API data."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"6. Real-World Example — Attendance Manager (Coder & AccoTax)"}),e.jsx(t,{language:"javascript",code:`function markAttendance(teacher, ...students) {
  console.log(\`Attendance taken by: \${teacher}\`);
  console.log("Present students:", students);
}

markAttendance(
  "Tanusree Hui",
  "Ritaja",
  "Kaustav",
  "Susmita",
  "Devangshu"
);

/*
Attendance taken by: Tanusree Hui
Present students: ["Ritaja", "Kaustav", "Susmita", "Devangshu"]
*/`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"...args"})," groups multiple arguments into an array"]}),e.jsx("li",{children:"Rest must always be the last parameter"}),e.jsx("li",{children:"Useful for utility functions (sum, average, filter)"}),e.jsx("li",{children:"Works with arrays and object destructuring"}),e.jsx("li",{children:"Perfect for team lists, attendance, scoring systems"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Rest parameters make JavaScript functions flexible, powerful, and easy to reuse."})]})]})}}export{o as default};

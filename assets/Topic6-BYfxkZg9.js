import{r as a,j as e}from"./index-D0NGu4uK.js";import{C as t}from"./CodeBlock-Ogr-M0lt.js";import"./prism-json-DRTQplox.js";class o extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Default Parameters in JavaScript (ES6)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Default parameters allow functions to assign values to parameters if no value is passed — making your code more reliable, clean, and easy to work with. This feature is heavily used in modern JavaScript applications, including projects at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Basic Example"}),e.jsx(t,{language:"javascript",code:`function greet(name = "Student") {
  console.log(\`Hello, \${name}!\`);
}

greet("Ritaja"); // Hello, Ritaja!
greet();         // Hello, Student!`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"The default value is used only when no argument is provided."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Multiple Default Parameters"}),e.jsx(t,{language:"javascript",code:`function registerStudent(
  name = "Unknown",
  course = "JavaScript Basics",
  centre = "Coder & AccoTax"
) {
  console.log(\`\${name} enrolled in \${course} at \${centre}\`);
}

registerStudent("Kaustav", "Advanced JS");
// Kaustav enrolled in Advanced JS at Coder & AccoTax

registerStudent();
// Unknown enrolled in JavaScript Basics at Coder & AccoTax`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Default Values Can Be Expressions"}),e.jsx(t,{language:"javascript",code:`function generateID(name = "student") {
  return name.toLowerCase().replaceAll(" ", "_") + "_" + Date.now();
}

console.log(generateID("Susmita"));
console.log(generateID());`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"The default value can even call another function."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Default Parameters in Object Destructuring"}),e.jsx(t,{language:"javascript",code:`function showProfile({
  name = "Student",
  batch = "Not Assigned",
  teacher = "Sukanta Hui"
} = {}) {
  console.log(\`\${name} — Batch: \${batch}, Teacher: \${teacher}\`);
}

showProfile({
  name: "Swadeep",
  batch: "JS-2025"
});

// Default fallback
showProfile();`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Powerful when working with API responses or optional form data."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Default Parameters with Arrays"}),e.jsx(t,{language:"javascript",code:`function printTopStudent([name = "No Student"] = []) {
  console.log("Top Performer:", name);
}

printTopStudent(["Pranjali"]);
printTopStudent();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. Real-World Example — Attendance System"}),e.jsx(t,{language:"javascript",code:`function markAttendance(name = "Guest Student", status = "Present") {
  console.log(\`\${name} marked as \${status}.\`);
}

markAttendance("Devangshu", "Late");
markAttendance("Mounita");
markAttendance();`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Default parameters prevent ",e.jsx("code",{children:"undefined"})," errors"]}),e.jsx("li",{children:"They make functions more flexible and user-friendly"}),e.jsx("li",{children:"Useful with function overloading-like patterns"}),e.jsx("li",{children:"Perfect for object destructuring and API data"}),e.jsx("li",{children:"Default values can be variables, expressions, or functions"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Default parameters are essential in clean, modern JavaScript applications."})]})]})}}export{o as default};

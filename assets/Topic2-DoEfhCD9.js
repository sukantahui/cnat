import{r as t,j as e}from"./index-meFSU1Lv.js";import{C as s}from"./CodeBlock-CjWqBd4d.js";import"./prism-sFrOkMqg.js";import"./prism-json-D0UlpdKh.js";class l extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Destructuring in JavaScript (Arrays & Objects) — ES6 Feature"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Destructuring is an elegant ES6 feature that lets you extract values from arrays or properties from objects in a clean, readable way. This technique is essential in all modern JavaScript codebases, including projects taught at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Array Destructuring (Basic)"}),e.jsx(s,{language:"javascript",code:`const students = ["Ritaja", "Mounita", "Swadeep"];

const [first, second, third] = students;

console.log(first);  // Ritaja
console.log(second); // Mounita
console.log(third);  // Swadeep`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"The variables receive values based on position."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Skipping Values During Destructuring"}),e.jsx(s,{language:"javascript",code:`const marks = [88, 92, 95, 90];

const [english, , math] = marks;

console.log(english); // 88
console.log(math);    // 95`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Default Values in Destructuring"}),e.jsx(s,{language:"javascript",code:`const scores = [85];

const [science, history = 75] = scores;

console.log(science); // 85
console.log(history); // 75 (default value)`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Object Destructuring"}),e.jsx(s,{language:"javascript",code:`const student = {
  name: "Devangshu",
  age: 17,
  course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);   // Devangshu
console.log(age);    // 17
console.log(course); // JavaScript`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Here, variable names must match object keys."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Renaming Variables While Destructuring"}),e.jsx(s,{language:"javascript",code:`const teacher = {
  fullName: "Sukanta Hui",
  subject: "JavaScript",
  centre: "Coder & AccoTax"
};

const { fullName: instructor, subject: topic } = teacher;

console.log(instructor); // Sukanta Hui
console.log(topic);      // JavaScript`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. Default Values for Missing Keys"}),e.jsx(s,{language:"javascript",code:`const profile = {
  name: "Susmita"
};

const { name, email = "not provided" } = profile;

console.log(name);  // Susmita
console.log(email); // not provided`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"7. Nested Object Destructuring"}),e.jsx(s,{language:"javascript",code:`const registration = {
  student: {
    name: "Kaustav",
    address: {
      city: "Barrackpore",
      pin: 700120
    }
  }
};

const {
  student: {
    name: stuName,
    address: { city, pin }
  }
} = registration;

console.log(stuName); // Kaustav
console.log(city);    // Barrackpore
console.log(pin);     // 700120`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"8. Destructuring in Function Parameters"}),e.jsx(s,{language:"javascript",code:`function greet({ name, course }) {
  console.log(\`Welcome \${name} to \${course}!\`);
}

greet({ name: "Pranjali", course: "JavaScript ES6" });
// Welcome Pranjali to JavaScript ES6!`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"9. Combining Array and Object Destructuring"}),e.jsx(s,{language:"javascript",code:`const data = [
  { name: "Ritaja", score: 91 },
  { name: "Mounita", score: 94 }
];

const [{ name: s1, score: sc1 }, { name: s2, score: sc2 }] = data;

console.log(s1, sc1); // Ritaja 91
console.log(s2, sc2); // Mounita 94`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Destructuring extracts values from arrays & objects easily"}),e.jsx("li",{children:"Array destructuring is position-based"}),e.jsx("li",{children:"Object destructuring is key-based"}),e.jsx("li",{children:"Supports renaming, default values & nested patterns"}),e.jsx("li",{children:"Used everywhere in modern JavaScript"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Mastering destructuring is essential for writing clean, modern JavaScript in professional projects."})]})]})}}export{l as default};

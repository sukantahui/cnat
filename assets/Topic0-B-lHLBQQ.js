import{j as e}from"./index-0KKi4kQw.js";import{C as t}from"./CodeBlock-XbN1OBK1.js";function o(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Object Literals — Keys, Values & Methods"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Objects in JavaScript are collections of key–value pairs. They allow you to store related data together, just like a student or teacher profile at Coder & AccoTax, Barrackpore."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Basic Object"}),e.jsx(t,{code:`const student = {
  name: "Ritaja",
  course: "JavaScript",
  batch: "Morning",
  score: 92
};

console.log(student.name);
console.log(student.score);`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Object With Method"}),e.jsx(t,{code:`const teacher = {
  name: "Sukanta Hui",
  subject: "JavaScript",
  institute: "Coder & AccoTax",
  
  introduce() {
    console.log(\`Hello, I am \${this.name}, teaching \${this.subject}.\`);
  }
};

teacher.introduce();`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Classroom Example"}),e.jsx(t,{code:`const studentProfile = {
  name: "Devangshu",
  city: "Barrackpore",
  enrolled: true,
  courses: ["JavaScript", "Python", "C"],
  marks: {
    js: 89,
    python: 92,
    c: 85
  },
  
  showReport() {
    console.log(\`\${this.name}'s JS score: \${this.marks.js}\`);
  }
};

studentProfile.showReport();`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Objects allow data and functions to live together — a key concept before learning OOP in JavaScript."})]})}export{o as default};

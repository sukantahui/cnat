import{j as e}from"./index-imi4Qhij.js";import{C as a}from"./CodeBlock-Cb2L9eFy.js";import"./prism-d5FCEQg6.js";import"./prism-json-D0UlpdKh.js";function o(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Nested Objects & Arrays of Objects"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Objects can contain more objects inside them. This helps model real-world structured data — such as storing complete student info at Coder & AccoTax, Barrackpore."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Nested Object"}),e.jsx(a,{code:`const student = {
  name: "Susmita",
  course: "JavaScript",
  address: {
    city: "Barrackpore",
    pin: 700120
  },
  marks: {
    js: 92,
    python: 88
  }
};

console.log(student.address.city); // Barrackpore
console.log(student.marks.js);     // 92`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Array of Objects"}),e.jsx(a,{code:`const students = [
  { name: "Ritaja", score: 91 },
  { name: "Mounita", score: 89 },
  { name: "Kaustav", score: 86 }
];

console.log(students[0].name);    // Ritaja
console.log(students[2].score);   // 86`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Classroom Example — Coder & AccoTax"}),e.jsx(a,{code:`const batch = {
  batchName: "JS Evening Batch",
  teacher: {
    name: "Sukanta Hui",
    experience: 15
  },
  students: [
    { name: "Devangshu", attendance: 95 },
    { name: "Pranjali", attendance: 98 },
    { name: "Swadeep", attendance: 92 }
  ]
};

console.log(batch.teacher.name);             // Sukanta Hui
console.log(batch.students[1].name);         // Pranjali
console.log(batch.students[2].attendance);   // 92`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Deeply Nested Example"}),e.jsx(a,{code:`const institute = {
  name: "Coder & AccoTax",
  location: "Barrackpore",
  departments: {
    programming: {
      teachers: [
        { name: "Chandan Das", subject: "C Programming" },
        { name: "Ritaja Ghosh", subject: "Python" }
      ],
      labs: ["Lab-1", "Lab-2"]
    },
    accounts: {
      teachers: [
        { name: "Tanusree Hui", subject: "Tally Prime" },
        { name: "Mounita Bhandari", subject: "GST Filing" }
      ]
    }
  }
};

console.log(institute.departments.programming.teachers[0].name);  
// Chandan Das

console.log(institute.departments.accounts.teachers[1].subject);
// GST Filing`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Nested objects and arrays help structure complex data in a readable and organised way — essential for modern JavaScript development."})]})}export{o as default};

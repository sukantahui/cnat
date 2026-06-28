import{r as o,j as e}from"./index-DlQhRwac.js";import{E as t}from"./EditableCodeBlock-W93Wtayq.js";import"./index-Cwnu-Juo.js";import"./braces-Cs97IlMa.js";import"./file-code-BQhvRATS.js";import"./layout-list-BonHw52I.js";import"./play-CpwSfdJ1.js";import"./type-ClWXtHxZ.js";import"./refresh-cw-BFZI2NBH.js";import"./wand-sparkles-DZ1yTXD0.js";import"./copy-Dx2Xdz_j.js";import"./download-9mt5C_Kp.js";import"./eye-off-jIIH8s4K.js";import"./eye-Cs4vM6yN.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
const institute = {
  name: "Coder & AccoTax",
  location: {
    city: "Barrackpore",
    state: "West Bengal",
    pincode: 700122,
  },
  isoCertified: true,
};

console.log(institute.location.city);
console.log(institute.location.pincode);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Array of student objects
const students = [
  { name: "Ritaja", course: "Python", batch: "Morning" },
  { name: "Mounita", course: "Advanced Excel", batch: "Evening" },
  { name: "Pranjali", course: "Tally + GST", batch: "Weekend" },
];

console.log(students[0].name);
console.log(students[1].course);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Nested arrays inside object
const course = {
  title: "Full Stack Development",
  technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  mentors: [
    { name: "Sukanta Hui", role: "Lead Trainer" },
    { name: "Devangshu", role: "Assistant Trainer" },
  ],
};

console.log(course.technologies[2]);     // "JavaScript"
console.log(course.mentors[0].name);     // "Sukanta Hui"`})]})}}export{h as default};

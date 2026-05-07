import{r as o,j as e}from"./index-Ofv5BQah.js";import{E as t}from"./EditableCodeBlock-BooQLP_-.js";import"./index-D36xJsVZ.js";import"./braces-By7M1Gf_.js";import"./file-code-8pJVigLi.js";import"./layout-list-CPzIh9-w.js";import"./play-CTTz1uQm.js";import"./type-BS4-Nv9e.js";import"./refresh-cw-Dc_FYhXA.js";import"./wand-sparkles-Clz0lJ4T.js";import"./copy-CvjPxglF.js";import"./download-BK3b5Z3K.js";import"./eye-off-DAXY-jPY.js";import"./eye-D1L16zRR.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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

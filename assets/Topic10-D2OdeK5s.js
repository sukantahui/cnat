import{r as o,j as e}from"./index-DaJZPAzN.js";import{E as t}from"./EditableCodeBlock-DPY6mffP.js";import"./index-BNRMmMjw.js";import"./braces-BlnKo9xV.js";import"./file-code-DVrGLACy.js";import"./layout-list-DEPOVFNL.js";import"./play-_VBtPl4R.js";import"./type-B8EDvMMZ.js";import"./refresh-cw-CqFIfL8c.js";import"./wand-sparkles-AgK1WDy3.js";import"./copy-Q2INuC-O.js";import"./download-CQzh5qwM.js";import"./eye-off-C4T7emjA.js";import"./eye-BWQFOqkh.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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

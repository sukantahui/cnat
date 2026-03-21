import{r as o,j as e}from"./index-YH4u--c0.js";import{E as t}from"./EditableCodeBlock-Q8IwGjXb.js";import"./index-C88JtG2I.js";import"./createLucideIcon-D7phWlUA.js";import"./braces-DEe5lwLV.js";import"./file-code-CdZAdXD5.js";import"./layout-list-H4xfDoOD.js";import"./play-BWUk_zaa.js";import"./type-BAYKHREU.js";import"./refresh-cw-B0Wn9xOb.js";import"./wand-sparkles-CbGYnnZt.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./eye-off-BiNxchX8.js";import"./eye-7zfXSrAZ.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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
console.log(course.mentors[0].name);     // "Sukanta Hui"`})]})}}export{v as default};

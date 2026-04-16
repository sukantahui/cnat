import{r as o,j as e}from"./index-Cpy87EQq.js";import{E as t}from"./EditableCodeBlock-C5rC4SNS.js";import"./index-D8kJeRrI.js";import"./braces-BmbdYtb_.js";import"./file-code-KkIlh4rF.js";import"./layout-list-eu0aVVzr.js";import"./play-B26sBouI.js";import"./type-5cEw9QHs.js";import"./refresh-cw-a7qXvd5K.js";import"./wand-sparkles-D9jxkP0g.js";import"./copy-BMdvVEBi.js";import"./download-CeN5HY3g.js";import"./eye-off-CPCxdOmB.js";import"./eye-CKEPaE0B.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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

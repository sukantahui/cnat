import{r as o,j as e}from"./index-CR1DasM0.js";import{E as t}from"./EditableCodeBlock-BKvnUTAE.js";import"./index-CECdYRSp.js";import"./braces-TBFp6IUo.js";import"./file-code-CY8p-E5H.js";import"./layout-list-6Ln6C2pH.js";import"./play-Co1C4LkH.js";import"./type-Ctw3BzEx.js";import"./refresh-cw-BAUyi9LY.js";import"./wand-sparkles-DQPrprC3.js";import"./copy-DsdvCQ6A.js";import"./download-2BksmjAz.js";import"./eye-off-BnEnoXOk.js";import"./eye-B_2VHLp8.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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

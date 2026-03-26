import{r as o,j as e}from"./index-C8tfbTD8.js";import{E as t}from"./EditableCodeBlock-B43zle_x.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./file-code--LqktZ78.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./wand-sparkles-D7x0So5e.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 10 – Nested objects and arrays of objects"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Nested objects
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

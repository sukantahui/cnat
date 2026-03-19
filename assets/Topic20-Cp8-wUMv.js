import{r as t,j as e}from"./index-BQdS2coH.js";import{E as o}from"./EditableCodeBlock-DRSjOVcP.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./braces-K52Ky_HV.js";import"./file-code-BM1RMzw0.js";import"./layout-list-DeS6Frv6.js";import"./play-LnkqUnKT.js";import"./type-C3qLbx7F.js";import"./refresh-cw-bMDcp0Zn.js";import"./wand-sparkles-BDhxjDBx.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";import"./eye-off-CQ9veCYt.js";import"./eye-BDBktcqH.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
const name = "Pranjali";
const course = "Tally with GST";
const center = "Coder & AccoTax";

const student = {
  name,   // shorthand for name: name
  course, // shorthand
  center, // shorthand
};

console.log(student);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 2: Computed property names using variables
const subject = "Advanced Excel";
const level = "beginner";

const courseInfo = {
  ["course-" + level]: subject,
};

console.log(courseInfo); // { "course-beginner": "Advanced Excel" }`}),e.jsx(o,{language:"javascript",initialCode:`// Example 3: Computed property from function parameter
function createScoreCard(name, score) {
  return {
    [name]: score,
  };
}

const card1 = createScoreCard("Ritaja", 95);
const card2 = createScoreCard("Kaustav", 88);

console.log(card1);
console.log(card2);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 4: Mixed shorthand + computed properties
const trainer = "Sukanta Hui";
const topic = "JavaScript Objects";
const batchName = "Morning";

const batch = {
  trainer,
  topic,
  ["batch-" + batchName]: true,
};

console.log(batch);`})]})}}export{v as default};

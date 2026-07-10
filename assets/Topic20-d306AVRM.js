import{r as t,j as e}from"./index-DKhGj2r9.js";import{E as o}from"./EditableCodeBlock-Bw_3eVxT.js";import"./index-Db0j1cdf.js";import"./createLucideIcon-DZ4EMxs8.js";import"./braces-CEKIThwN.js";import"./file-code-BLnEmaT3.js";import"./layout-list-BuOBAyKA.js";import"./play-B4tVruhT.js";import"./type-CPkc_PUl.js";import"./refresh-cw-CKv6YgUv.js";import"./wand-sparkles-CsthY_-w.js";import"./copy-Bb5mh8KX.js";import"./download-6Kfgauek.js";import"./eye-off-C6upiu6S.js";import"./eye-CHNAHx-m.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

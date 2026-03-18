import{r as t,j as e}from"./index-Cw6znig-.js";import{E as o}from"./EditableCodeBlock-DifnH3lG.js";import"./index-CoNGGNvB.js";import"./createLucideIcon-PJoG5qt8.js";import"./braces-jXibYef2.js";import"./file-code-C3QX0Uay.js";import"./layout-list-BoDJSDvr.js";import"./play-DFw9barl.js";import"./type-BES0YIK0.js";import"./refresh-cw-C-VUqftF.js";import"./wand-sparkles-BK-yOS3N.js";import"./copy-DrPgsz5g.js";import"./download-CHAjlQte.js";import"./eye-off-Y9jkbsBs.js";import"./eye-CnOj13o1.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

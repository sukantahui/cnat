import{r as t,j as e}from"./index-C0Oguwhi.js";import{E as o}from"./EditableCodeBlock-DwNdYwlo.js";import"./index-Cq40Nc2a.js";import"./braces-dk1B4_ST.js";import"./file-code-ciz-JgJW.js";import"./layout-list-0lKeYIZ1.js";import"./play-mVhC3yXk.js";import"./type-DdxMucPQ.js";import"./refresh-cw-Cy70YKrx.js";import"./wand-sparkles-BqTdS8ME.js";import"./copy-BUgF1r7i.js";import"./download-CBnXR6VP.js";import"./eye-off-CLrAWj60.js";import"./eye-Bx9JrI_P.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

console.log(batch);`})]})}}export{b as default};

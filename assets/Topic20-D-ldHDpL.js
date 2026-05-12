import{r as t,j as e}from"./index-keUzLGou.js";import{E as o}from"./EditableCodeBlock-B30q7zCR.js";import"./index-D5NsFYuu.js";import"./braces-BXvH4Yf8.js";import"./file-code-DST6PYIg.js";import"./layout-list-CQSuSuld.js";import"./play-QBJ0lYOP.js";import"./type-BNWBL2dO.js";import"./refresh-cw-SZlwmhiI.js";import"./wand-sparkles-i24i-FKn.js";import"./copy-SFcaWNzX.js";import"./download-vYhq0RQA.js";import"./eye-off-DvB9P9F7.js";import"./eye-Cip2UNag.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

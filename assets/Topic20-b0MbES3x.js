import{r as t,j as e}from"./index-CK4WUhpx.js";import{E as o}from"./EditableCodeBlock-eQkDJKZF.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./file-code-CDbVQmeK.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./wand-sparkles-CzGmHgG3.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

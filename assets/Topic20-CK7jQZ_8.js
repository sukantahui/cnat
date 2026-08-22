import{r as t,j as e}from"./index-YkKVfVEM.js";import{E as o}from"./EditableCodeBlock-Bb8nn4Xi.js";import"./index-gzZkhgxu.js";import"./braces-TvM0FylP.js";import"./createLucideIcon-Cim-rzMd.js";import"./file-code-DitFwktW.js";import"./layout-list-CEyAvgT5.js";import"./play-DEajiqWU.js";import"./type-YS4uKozr.js";import"./refresh-cw-Dxhotsjr.js";import"./minimize-2-Dy1dCTjQ.js";import"./wand-sparkles-DqpDcVN7.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./eye-off-BJzm0hT7.js";import"./eye-TpFMMSv4.js";class C extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

console.log(batch);`})]})}}export{C as default};

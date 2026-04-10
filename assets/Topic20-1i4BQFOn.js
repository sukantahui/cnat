import{r as t,j as e}from"./index-BRkQtvvo.js";import{E as o}from"./EditableCodeBlock-XDZ6X8-U.js";import"./index-CBE1MaW4.js";import"./braces-Ck6N4IEp.js";import"./file-code-I44cNVwq.js";import"./layout-list-VVBYbJwJ.js";import"./play-BwqyFVDc.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./wand-sparkles-C1XRSA5G.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";import"./eye-off-C-cOQUZS.js";import"./eye-Bo8Z4-Jj.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 20 – Shorthand properties and computed property names"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shorthand properties
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

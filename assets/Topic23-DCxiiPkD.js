import{r as a,j as e}from"./index-D-07m6Qb.js";import{E as t}from"./EditableCodeBlock-D-qnnTgn.js";import"./index-BLtpQgbQ.js";import"./braces-C_CY9Jv1.js";import"./file-code-n9BmD-WT.js";import"./layout-list-xlk1srMZ.js";import"./play-4rBxpZha.js";import"./type-BEuENsNe.js";import"./refresh-cw-DVel-Kgx.js";import"./wand-sparkles-DlwyMtB_.js";import"./copy-BeFV_rGJ.js";import"./download-B_C6cj02.js";import"./eye-off-Ddhut9lm.js";import"./eye-DnmUWsTr.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
const student = {
  name: "Ritaja",
  course: "Python",
};

const { name, batch = "Not assigned yet" } = student;

console.log(name);
console.log(batch);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Default with renaming
const teacher = {
  name: "Sukanta Hui",
};

const { name: trainerName, subject = "Not assigned" } = teacher;

console.log(trainerName);
console.log(subject);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Default in function parameters with destructuring
function enrollStudent({ name, course = "Basic Computer", batch = "Morning" }) {
  console.log(
    name + " enrolled in " + course + " (" + batch + " batch)"
  );
}

enrollStudent({ name: "Kaustav", course: "JavaScript" });
enrollStudent({ name: "Susmita" });`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Nested destructuring with defaults
const info = {
  center: "Coder & AccoTax",
  address: {
    city: "Barrackpore",
  },
};

const {
  address: { city, pincode = 700122 },
} = info;

console.log(city, pincode);`})]})}}export{f as default};

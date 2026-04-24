import{r as a,j as e}from"./index-Da242x_v.js";import{E as t}from"./EditableCodeBlock-BHnRxxmJ.js";import"./index-ChRqqHV5.js";import"./braces-Cbxczz1l.js";import"./file-code-D8UzdDLr.js";import"./layout-list-DEs8mqAW.js";import"./play-DlYZ_ALK.js";import"./type-DPcojwXo.js";import"./refresh-cw-mBC7aNYe.js";import"./wand-sparkles-03nEb6Dq.js";import"./copy-CqMdOgMJ.js";import"./download-1HFrR5oJ.js";import"./eye-off-mKmtyIK6.js";import"./eye-BLStUG20.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

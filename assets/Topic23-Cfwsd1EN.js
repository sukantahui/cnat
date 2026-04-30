import{r as a,j as e}from"./index-sRNy85CP.js";import{E as t}from"./EditableCodeBlock-DkTjT620.js";import"./index-7n4CaZPm.js";import"./braces-BS8kdTzg.js";import"./file-code-DMLUJpKI.js";import"./layout-list-DUaVKPXn.js";import"./play-BJtPkSLX.js";import"./type-D4P2k3xa.js";import"./refresh-cw-DnRLB-ho.js";import"./wand-sparkles-CnWoS0P-.js";import"./copy-DVtYfKkO.js";import"./download-K3JAF1JL.js";import"./eye-off-qPvddMEU.js";import"./eye-C3vdhIj7.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

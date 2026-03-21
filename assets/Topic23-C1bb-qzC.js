import{r as a,j as e}from"./index-YH4u--c0.js";import{E as t}from"./EditableCodeBlock-Q8IwGjXb.js";import"./index-C88JtG2I.js";import"./createLucideIcon-D7phWlUA.js";import"./braces-DEe5lwLV.js";import"./file-code-CdZAdXD5.js";import"./layout-list-H4xfDoOD.js";import"./play-BWUk_zaa.js";import"./type-BAYKHREU.js";import"./refresh-cw-B0Wn9xOb.js";import"./wand-sparkles-CbGYnnZt.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./eye-off-BiNxchX8.js";import"./eye-7zfXSrAZ.js";class b extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

console.log(city, pincode);`})]})}}export{b as default};

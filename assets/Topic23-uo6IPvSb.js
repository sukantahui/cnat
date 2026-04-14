import{r as a,j as e}from"./index-Cufz2vn-.js";import{E as t}from"./EditableCodeBlock-B99UfEIr.js";import"./index-L8RqyWOn.js";import"./braces-Dv3kXLaG.js";import"./file-code-CsYY4xe_.js";import"./layout-list-ByRh-OfD.js";import"./play-BNyY933V.js";import"./type-B_IIOYum.js";import"./refresh-cw-CwXhGMdO.js";import"./wand-sparkles-Ctub8UI6.js";import"./copy-Cuij30dg.js";import"./download-D9I5RdLn.js";import"./eye-off-CosODb20.js";import"./eye-CO7PB0u-.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

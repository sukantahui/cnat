import{r as a,j as e}from"./index-BpX9yBGC.js";import{E as t}from"./EditableCodeBlock-BqgxeSUp.js";import"./index-DZzRudEq.js";import"./braces-BbI-6Ty8.js";import"./file-code-DekqbYpd.js";import"./layout-list-B_IFuJft.js";import"./play-DH_OxpbG.js";import"./type-Dp2t6Gfg.js";import"./refresh-cw-BzjppSKX.js";import"./wand-sparkles-C6YIgSRk.js";import"./copy-DyUhmCDX.js";import"./download-Cy_wnQFp.js";import"./eye-off-DCaPhBkD.js";import"./eye-DZru3oP4.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

import{r as a,j as e}from"./index-Czk7a0H9.js";import{E as t}from"./EditableCodeBlock-DLr33n0W.js";import"./index-CJqZRYro.js";import"./braces-emhnIJoT.js";import"./file-code-BODUuMKp.js";import"./layout-list-CnB_ewbf.js";import"./play-BsM0fxjP.js";import"./refresh-cw-ByFo7dKk.js";import"./wand-sparkles-B7hPkNvM.js";import"./copy-BF03oyX4.js";import"./download-HY43MXCi.js";class x extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

console.log(city, pincode);`})]})}}export{x as default};

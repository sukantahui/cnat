import{r as a,j as e}from"./index-BUy46d85.js";import{E as t}from"./EditableCodeBlock-BU_9eRKt.js";import"./index-Wffsjc5d.js";import"./braces-Dh0in3Jg.js";import"./file-code-nrMSEUaW.js";import"./layout-list-COxRGkdF.js";import"./play-BZ6-0TUg.js";import"./type-DOScrZC9.js";import"./refresh-cw-D03e4WEg.js";import"./wand-sparkles-yHNiji4L.js";import"./copy-BHqStXkB.js";import"./download-pP2P7k24.js";import"./eye-off-DuajroIQ.js";import"./eye-DYvhylzj.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

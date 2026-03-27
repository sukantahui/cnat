import{r as a,j as e}from"./index-CRiz6zY8.js";import{E as t}from"./EditableCodeBlock-BI4b1YUa.js";import"./index-BdWfQfdw.js";import"./braces-Bb-PbtvI.js";import"./file-code-C3NGmQnN.js";import"./layout-list-40k1H24I.js";import"./play-DYY1utPs.js";import"./type-Byiw2pIS.js";import"./refresh-cw-jY4OSlco.js";import"./wand-sparkles-C4B53b2y.js";import"./copy-BknYEKcl.js";import"./download-tHUdtA5g.js";import"./eye-off-CUnZm4af.js";import"./eye-D94467VC.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

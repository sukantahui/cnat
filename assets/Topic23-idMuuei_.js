import{r as a,j as e}from"./index-ClZJ1mc6.js";import{E as t}from"./EditableCodeBlock-BXYM_mc5.js";import"./index-xzOXAXCa.js";import"./braces-eb68Uf93.js";import"./file-code-Bm_e03QA.js";import"./layout-list-BiKlVs3p.js";import"./play-DjoYwq9q.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./wand-sparkles-jep67qaE.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";import"./eye-off-vuCWj3VN.js";import"./eye-V2WDc2EC.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

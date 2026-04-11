import{r as a,j as e}from"./index-BxcHuftT.js";import{E as t}from"./EditableCodeBlock-DK-pKqv2.js";import"./index-lfB80H_P.js";import"./braces-uvHhEcRm.js";import"./file-code-B8psrjkP.js";import"./layout-list-Dx76mYNZ.js";import"./play-BEG4S0rO.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./wand-sparkles-DDme7KTv.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";import"./eye-off-CcREvAVU.js";import"./eye-C1Ed07Y0.js";class f extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 23 – Default values in destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Default values when a property is missing
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

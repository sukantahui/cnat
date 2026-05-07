import{r as t,j as e}from"./index-BV1ec7QU.js";import{E as s}from"./EditableCodeBlock-DKzWiRl8.js";import"./index-FAc0gMmj.js";import"./braces-hctkfZFQ.js";import"./file-code-De99tvSp.js";import"./layout-list-B9EBcVRh.js";import"./play-dfkZtFjp.js";import"./type-Doxm7eCO.js";import"./refresh-cw-DES3yxy7.js";import"./wand-sparkles-CAvweH_1.js";import"./copy-0c2DUKQV.js";import"./download-r_U-JfHh.js";import"./eye-off-CIjwHbUc.js";import"./eye-DgGc0zhY.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
const institute = {
  name: "Coder & AccoTax",
  branches: {
    barrackpore: {
      address: {
        line1: "25(10/A) Shibtala Road",
        area: "N.C. Pukur",
        city: "Barrackpore",
      },
      batches: ["Morning", "Afternoon", "Evening"],
    },
  },
};

console.log(institute.branches.barrackpore.address.city);
console.log(institute.branches.barrackpore.batches[2]);`}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Deep nested student progress
const student = {
  name: "Kaustav",
  courses: {
    javascript: {
      status: "Ongoing",
      modulesCompleted: 4,
      scores: {
        module1: 90,
        module2: 88,
        module3: 92,
      },
    },
  },
};

console.log(student.courses.javascript.scores.module2);`}),e.jsx(s,{language:"javascript",initialCode:`// Example 3: Optional chaining to safely access deep properties
const studentProfile = {
  name: "Susmita",
  courses: {
    python: {
      status: "Completed",
    },
  },
};

console.log(studentProfile.courses?.python?.status);
console.log(studentProfile.courses?.javascript?.status); // undefined, no error`})]})}}export{b as default};

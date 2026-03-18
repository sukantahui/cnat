import{r as t,j as e}from"./index-Cw6znig-.js";import{E as s}from"./EditableCodeBlock-DifnH3lG.js";import"./index-CoNGGNvB.js";import"./createLucideIcon-PJoG5qt8.js";import"./braces-jXibYef2.js";import"./file-code-C3QX0Uay.js";import"./layout-list-BoDJSDvr.js";import"./play-DFw9barl.js";import"./type-BES0YIK0.js";import"./refresh-cw-C-VUqftF.js";import"./wand-sparkles-BK-yOS3N.js";import"./copy-DrPgsz5g.js";import"./download-CHAjlQte.js";import"./eye-off-Y9jkbsBs.js";import"./eye-CnOj13o1.js";class f extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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
console.log(studentProfile.courses?.javascript?.status); // undefined, no error`})]})}}export{f as default};

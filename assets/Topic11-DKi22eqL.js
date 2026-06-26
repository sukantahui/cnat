import{r as t,j as e}from"./index-UqT5O8p1.js";import{E as s}from"./EditableCodeBlock-D1QxZRLF.js";import"./index-CRrCmYP9.js";import"./braces-D0k6ct2r.js";import"./file-code-z_zr8Z5q.js";import"./layout-list-Cr_A3clc.js";import"./play-DU1uhUCi.js";import"./type-DOuT4SB5.js";import"./refresh-cw-Doiqk7xS.js";import"./wand-sparkles-BREyXTJS.js";import"./copy-BzqaPhIG.js";import"./download-zj_8ehaG.js";import"./eye-off-D47L_t_g.js";import"./eye-FKL9EooF.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

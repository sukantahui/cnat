import{r as t,j as e}from"./index-Mgs-acYB.js";import{E as s}from"./EditableCodeBlock--1I2A4Uu.js";import"./index-BCpw-Wgv.js";import"./braces-BZWwN2sF.js";import"./file-code-CuOgUEMJ.js";import"./layout-list-7A-cTGVe.js";import"./play-ByAZUIab.js";import"./type-BHcgHjyI.js";import"./refresh-cw-C-deRjEY.js";import"./wand-sparkles-DCpN6EcM.js";import"./copy-CPVRjwAa.js";import"./download-DH71BTay.js";import"./eye-off-B8c0xK-q.js";import"./eye-DTS7I7-4.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

import{r as t,j as e}from"./index-DCfh6IuU.js";import{E as s}from"./EditableCodeBlock-DKgsNvCS.js";import"./index-BdMIyi3U.js";import"./braces-CJluQm80.js";import"./createLucideIcon-JrHpk1sJ.js";import"./file-code-CnNuUJDx.js";import"./layout-list-CRL7bmJ6.js";import"./play-DUoF7fvh.js";import"./type-CWtCwXrW.js";import"./refresh-cw-DbpJU27z.js";import"./minimize-2-Dt9IO6SX.js";import"./wand-sparkles-DH0hT6aL.js";import"./copy-vxMnYODG.js";import"./download-CmPUNbCV.js";import"./eye-off-C4c4AayT.js";import"./eye-LnBEFR8Z.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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
console.log(studentProfile.courses?.javascript?.status); // undefined, no error`})]})}}export{v as default};

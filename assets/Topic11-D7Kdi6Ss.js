import{r as t,j as e}from"./index-DLefW0Tp.js";import{E as s}from"./EditableCodeBlock-DBYVZE29.js";import"./index-Ck8vhGSy.js";import"./braces-DSBAqnLT.js";import"./file-code-DyHBv2VX.js";import"./layout-list-CIbLHTf3.js";import"./play-Bonc3cvQ.js";import"./type-Bom_9Shz.js";import"./refresh-cw-DfWESQEa.js";import"./wand-sparkles-DXykm3S4.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";import"./eye-off-B1nx00rT.js";import"./eye-s8A1LQPP.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

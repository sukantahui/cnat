import{r as t,j as e}from"./index-BnfAr6UH.js";import{E as s}from"./EditableCodeBlock-CJAD9-yV.js";import"./index-BOJ7CUHh.js";import"./braces-CNDkIFm0.js";import"./file-code-2-2TDWSW.js";import"./layout-list-BzviaWtA.js";import"./play-Ckwl6zud.js";import"./type-Df_QG4NN.js";import"./refresh-cw-DP2gjNNw.js";import"./wand-sparkles-BegAdJAm.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./eye-off-CnAXOkhW.js";import"./eye-DwZEsWI3.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

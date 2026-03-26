import{r as t,j as e}from"./index-C5Nbbk6-.js";import{E as s}from"./EditableCodeBlock-Bte-O7k4.js";import"./index-ClHeBgp3.js";import"./braces-CxhkSqhy.js";import"./file-code-DKQbcCKH.js";import"./layout-list-F0chhMfF.js";import"./play--xjmOV9C.js";import"./type-DhDX8m8R.js";import"./refresh-cw-BNltxj78.js";import"./wand-sparkles-DqlY1Ycm.js";import"./copy-DRodcmmM.js";import"./download-6yOraGoh.js";import"./eye-off-kqkFbjqx.js";import"./eye-mkgdQ3p8.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

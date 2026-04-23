import{r as t,j as e}from"./index-29x6CIxg.js";import{E as s}from"./EditableCodeBlock-BwSJC4Iq.js";import"./index-C9bfmqVU.js";import"./braces-vDm8NKs9.js";import"./file-code-CA9Wnnsl.js";import"./layout-list-CW4VLJGk.js";import"./play-CXfWgowW.js";import"./type-CUvrbdtJ.js";import"./refresh-cw-DkCi0I10.js";import"./wand-sparkles-C_FtQZFz.js";import"./copy-slB2T7Ka.js";import"./download-BQPfbLQ1.js";import"./eye-off-xoXN48Nq.js";import"./eye-IbEK5vHC.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

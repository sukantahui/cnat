import{r as t,j as e}from"./index-M13epWmp.js";import{E as s}from"./EditableCodeBlock-TQ1RZHDw.js";import"./index-DdgD7PSF.js";import"./braces-DCyYeH7_.js";import"./file-code-Bw6m9YlE.js";import"./layout-list-CVSIrtOs.js";import"./play-Dt7WATo6.js";import"./type-BwHCoGTt.js";import"./refresh-cw-u01UVf16.js";import"./wand-sparkles-D-GQm6Rt.js";import"./copy-CUtW4Wcz.js";import"./download-BiWR4r0s.js";import"./eye-off-3D5zmmf6.js";import"./eye-DWwGzbJr.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

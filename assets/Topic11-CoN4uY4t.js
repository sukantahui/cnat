import{r as t,j as e}from"./index-BRkQtvvo.js";import{E as s}from"./EditableCodeBlock-XDZ6X8-U.js";import"./index-CBE1MaW4.js";import"./braces-Ck6N4IEp.js";import"./file-code-I44cNVwq.js";import"./layout-list-VVBYbJwJ.js";import"./play-BwqyFVDc.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./wand-sparkles-C1XRSA5G.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";import"./eye-off-C-cOQUZS.js";import"./eye-Bo8Z4-Jj.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

import{r as t,j as e}from"./index-BxcHuftT.js";import{E as s}from"./EditableCodeBlock-DK-pKqv2.js";import"./index-lfB80H_P.js";import"./braces-uvHhEcRm.js";import"./file-code-B8psrjkP.js";import"./layout-list-Dx76mYNZ.js";import"./play-BEG4S0rO.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./wand-sparkles-DDme7KTv.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";import"./eye-off-CcREvAVU.js";import"./eye-C1Ed07Y0.js";class b extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 11 – Accessing deeply nested values"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deeply nested structure
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

import{r as t,j as e}from"./index-M13epWmp.js";import{E as o}from"./EditableCodeBlock-TQ1RZHDw.js";import"./index-DdgD7PSF.js";import"./braces-DCyYeH7_.js";import"./file-code-Bw6m9YlE.js";import"./layout-list-CVSIrtOs.js";import"./play-Dt7WATo6.js";import"./type-BwHCoGTt.js";import"./refresh-cw-u01UVf16.js";import"./wand-sparkles-D-GQm6Rt.js";import"./copy-CUtW4Wcz.js";import"./download-BiWR4r0s.js";import"./eye-off-3D5zmmf6.js";import"./eye-DWwGzbJr.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
const student = {
  name: "Mounita",
  course: "Advanced Excel",
};

const copy = { ...student };
copy.course = "Advanced Excel + GST";

console.log("Original:", student);
console.log("Copy:", copy);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 2: Shallow copy with Object.assign()
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
};

const clone = Object.assign({}, teacher);
clone.subject = "JavaScript + React";

console.log("Original:", teacher);
console.log("Clone:", clone);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 3: Shallow copy issue with nested objects
const batch = {
  name: "Weekend Batch",
  mentor: { name: "Tanusree Hui", subject: "Accounts" },
};

const shallowCopy = { ...batch };

shallowCopy.mentor.subject = "GST";

console.log("Original batch:", batch);
console.log("Shallow copy:", shallowCopy);
// Both mentor.subject changed because nested object is still shared`})]})}}export{x as default};

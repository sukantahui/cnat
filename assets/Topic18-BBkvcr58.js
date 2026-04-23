import{r as t,j as e}from"./index-CEi3MejZ.js";import{E as o}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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

import{r as t,j as o}from"./index-CNNP-EED.js";import{E as e}from"./EditableCodeBlock-BIX_SGmv.js";import"./index-B_hKKDE8.js";import"./braces-QBjObA3O.js";import"./file-code-D8YGDSR0.js";import"./layout-list-CeTmCPSq.js";import"./play-DAKE_zJf.js";import"./type-BjJFPXAY.js";import"./refresh-cw-DrD0jpdY.js";import"./wand-sparkles-BlZq3NP9.js";import"./copy-BQOvbT5P.js";import"./download-COgPc9qQ.js";import"./eye-off-BSiLqLab.js";import"./eye-Q1EsGrCZ.js";class h extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
const baseCourse = {
  title: "Python Programming",
  duration: "3 months",
};

const extraInfo = {
  center: "Coder & AccoTax",
  city: "Barrackpore",
};

const fullCourse = {
  ...baseCourse,
  ...extraInfo,
};

console.log(fullCourse);`}),o.jsx(e,{language:"javascript",initialCode:`// Example 2: Spread to override properties
const defaultOptions = {
  theme: "dark",
  showHints: true,
  language: "en",
};

const userOptions = {
  showHints: false,
  language: "bn",
};

const finalOptions = {
  ...defaultOptions,
  ...userOptions, // overrides matching keys
};

console.log(finalOptions);`}),o.jsx(e,{language:"javascript",initialCode:`// Example 3: Rest syntax to separate some properties
const student = {
  name: "Kaustav",
  course: "JavaScript",
  batch: "Morning",
  city: "Barrackpore",
};

const { name, course, ...otherDetails } = student;

console.log(name, course);
console.log(otherDetails);`}),o.jsx(e,{language:"javascript",initialCode:`// Example 4: Cloning with spread (shallow)
const original = {
  name: "Pranjali",
  enrolledIn: "Tally + GST",
};

const clone = { ...original };
clone.enrolledIn = "Tally + GST + Excel";

console.log("Original:", original);
console.log("Clone:", clone);`})]})}}export{h as default};

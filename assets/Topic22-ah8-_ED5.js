import{r as t,j as o}from"./index-Cw6znig-.js";import{E as e}from"./EditableCodeBlock-DifnH3lG.js";import"./index-CoNGGNvB.js";import"./createLucideIcon-PJoG5qt8.js";import"./braces-jXibYef2.js";import"./file-code-C3QX0Uay.js";import"./layout-list-BoDJSDvr.js";import"./play-DFw9barl.js";import"./type-BES0YIK0.js";import"./refresh-cw-C-VUqftF.js";import"./wand-sparkles-BK-yOS3N.js";import"./copy-DrPgsz5g.js";import"./download-CHAjlQte.js";import"./eye-off-Y9jkbsBs.js";import"./eye-CnOj13o1.js";class C extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
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
console.log("Clone:", clone);`})]})}}export{C as default};

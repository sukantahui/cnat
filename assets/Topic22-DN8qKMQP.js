import{r as t,j as o}from"./index-BRgF9Sn_.js";import{E as e}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class h extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
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

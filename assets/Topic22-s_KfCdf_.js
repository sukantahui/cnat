import{r as t,j as o}from"./index-CRiz6zY8.js";import{E as e}from"./EditableCodeBlock-BI4b1YUa.js";import"./index-BdWfQfdw.js";import"./braces-Bb-PbtvI.js";import"./file-code-C3NGmQnN.js";import"./layout-list-40k1H24I.js";import"./play-DYY1utPs.js";import"./type-Byiw2pIS.js";import"./refresh-cw-jY4OSlco.js";import"./wand-sparkles-C4B53b2y.js";import"./copy-BknYEKcl.js";import"./download-tHUdtA5g.js";import"./eye-off-CUnZm4af.js";import"./eye-D94467VC.js";class h extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
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

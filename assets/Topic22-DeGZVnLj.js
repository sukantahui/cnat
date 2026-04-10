import{r as t,j as o}from"./index-BRkQtvvo.js";import{E as e}from"./EditableCodeBlock-XDZ6X8-U.js";import"./index-CBE1MaW4.js";import"./braces-Ck6N4IEp.js";import"./file-code-I44cNVwq.js";import"./layout-list-VVBYbJwJ.js";import"./play-BwqyFVDc.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./wand-sparkles-C1XRSA5G.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";import"./eye-off-C-cOQUZS.js";import"./eye-Bo8Z4-Jj.js";class h extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
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

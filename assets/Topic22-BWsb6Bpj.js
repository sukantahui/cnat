import{r as t,j as o}from"./index-NACEEa8w.js";import{E as e}from"./EditableCodeBlock-DhbzGAxA.js";import"./index-OTxvoXyo.js";import"./createLucideIcon-DogKn5wF.js";import"./braces-DZ5e4LUG.js";import"./file-code-CJcKJH9Y.js";import"./layout-list-CM3wcDMC.js";import"./play-BGixpdkC.js";import"./type-BkuZTd3u.js";import"./refresh-cw-BRGNrlHt.js";import"./wand-sparkles-BrK6n-20.js";import"./copy-B-noeKSe.js";import"./download-DnQYd8bi.js";import"./eye-off-HKTYvvuy.js";import"./eye-D6FrJ2rq.js";class C extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 22 – Spread and rest operator for objects"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Spread to merge objects
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

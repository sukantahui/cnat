import{r as o,j as e}from"./index-Ci-Q4Ner.js";import{E as t}from"./EditableCodeBlock-dZSFwXIZ.js";import"./index-BovWnrwo.js";import"./braces-D0GgDFCR.js";import"./file-code-cjFDZoet.js";import"./layout-list-CNeoJZsF.js";import"./play-CUvMdlUb.js";import"./type-BkofYUDL.js";import"./refresh-cw-DVq0w9yy.js";import"./wand-sparkles-BImX2qU-.js";import"./copy-CVYVE7uU.js";import"./download-D2yIxL3J.js";import"./eye-off-CfVEqTtg.js";import"./eye-DWv5isVy.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
const student = {
  name: "Ritaja",
  course: "JavaScript Fundamentals",
  institute: "Coder & AccoTax",
  isActive: true,
};

console.log(student.name);
console.log(student.course);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Teacher object with a method
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
  yearsOfExperience: 15,
  introduce: function () {
    console.log("I am " + this.name + ", I teach " + this.subject + ".");
  },
};

teacher.introduce();`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Object literal for a course
const course = {
  title: "Advanced Excel with GST",
  durationMonths: 3,
  mode: "Offline",
  enrolledStudents: ["Mounita", "Kaustav", "Pranjali"],
  getSummary() {
    console.log(
      this.title + " (" + this.durationMonths + " months) - " + this.mode
    );
  },
};

course.getSummary();
console.log(course.enrolledStudents);`})]})}}export{v as default};

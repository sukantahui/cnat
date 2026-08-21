import{r as o,j as e}from"./index-DCfh6IuU.js";import{E as t}from"./EditableCodeBlock-DKgsNvCS.js";import"./index-BdMIyi3U.js";import"./braces-CJluQm80.js";import"./createLucideIcon-JrHpk1sJ.js";import"./file-code-CnNuUJDx.js";import"./layout-list-CRL7bmJ6.js";import"./play-DUoF7fvh.js";import"./type-CWtCwXrW.js";import"./refresh-cw-DbpJU27z.js";import"./minimize-2-Dt9IO6SX.js";import"./wand-sparkles-DH0hT6aL.js";import"./copy-vxMnYODG.js";import"./download-CmPUNbCV.js";import"./eye-off-C4c4AayT.js";import"./eye-LnBEFR8Z.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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
console.log(course.enrolledStudents);`})]})}}export{f as default};

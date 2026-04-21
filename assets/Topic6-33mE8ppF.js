import{r as o,j as e}from"./index-CcWT5Clg.js";import{E as t}from"./EditableCodeBlock-CMUq9aaP.js";import"./index-Dl02PJxt.js";import"./braces-D9LpDO-Z.js";import"./file-code-q4V1v1GH.js";import"./layout-list-Cr-YQCZJ.js";import"./play-CyYeQws-.js";import"./type-DrHEO6Oa.js";import"./refresh-cw-Df9zaQIy.js";import"./wand-sparkles-35hAL8tY.js";import"./copy-C04kLtDx.js";import"./download-0c8r0d_S.js";import"./eye-off-C1rctWFX.js";import"./eye-ciicSKcY.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

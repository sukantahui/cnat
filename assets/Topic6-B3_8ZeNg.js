import{r as o,j as e}from"./index-BUy46d85.js";import{E as t}from"./EditableCodeBlock-BU_9eRKt.js";import"./index-Wffsjc5d.js";import"./braces-Dh0in3Jg.js";import"./file-code-nrMSEUaW.js";import"./layout-list-COxRGkdF.js";import"./play-BZ6-0TUg.js";import"./type-DOScrZC9.js";import"./refresh-cw-D03e4WEg.js";import"./wand-sparkles-yHNiji4L.js";import"./copy-BHqStXkB.js";import"./download-pP2P7k24.js";import"./eye-off-DuajroIQ.js";import"./eye-DYvhylzj.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

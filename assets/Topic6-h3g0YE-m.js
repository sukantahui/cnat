import{r as o,j as e}from"./index-CNd73Haf.js";import{E as t}from"./EditableCodeBlock-5DbO4x_w.js";import"./index-C68hWScs.js";import"./braces-Cz3Z1Lm3.js";import"./file-code-D99pPLwx.js";import"./layout-list-jrwsTbkC.js";import"./play-k0XU6a0C.js";import"./type-l-7TR-1d.js";import"./refresh-cw-Cs1Cy281.js";import"./wand-sparkles-DX8ur9rV.js";import"./copy-Dqgrnt6d.js";import"./download-D0l-akX2.js";import"./eye-off-BFt-f9pX.js";import"./eye-CWJNugV0.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

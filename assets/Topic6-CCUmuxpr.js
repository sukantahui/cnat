import{r as o,j as e}from"./index-Cw6znig-.js";import{E as t}from"./EditableCodeBlock-DifnH3lG.js";import"./index-CoNGGNvB.js";import"./createLucideIcon-PJoG5qt8.js";import"./braces-jXibYef2.js";import"./file-code-C3QX0Uay.js";import"./layout-list-BoDJSDvr.js";import"./play-DFw9barl.js";import"./type-BES0YIK0.js";import"./refresh-cw-C-VUqftF.js";import"./wand-sparkles-BK-yOS3N.js";import"./copy-DrPgsz5g.js";import"./download-CHAjlQte.js";import"./eye-off-Y9jkbsBs.js";import"./eye-CnOj13o1.js";class b extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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
console.log(course.enrolledStudents);`})]})}}export{b as default};

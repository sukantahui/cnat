import{r as o,j as e}from"./index-DlQhRwac.js";import{E as t}from"./EditableCodeBlock-W93Wtayq.js";import"./index-Cwnu-Juo.js";import"./braces-Cs97IlMa.js";import"./file-code-BQhvRATS.js";import"./layout-list-BonHw52I.js";import"./play-CpwSfdJ1.js";import"./type-ClWXtHxZ.js";import"./refresh-cw-BFZI2NBH.js";import"./wand-sparkles-DZ1yTXD0.js";import"./copy-Dx2Xdz_j.js";import"./download-9mt5C_Kp.js";import"./eye-off-jIIH8s4K.js";import"./eye-Cs4vM6yN.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

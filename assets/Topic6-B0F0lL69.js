import{r as o,j as e}from"./index-DI04DAgq.js";import{E as t}from"./EditableCodeBlock-C-yBK3EY.js";import"./index-dzV7gd_1.js";import"./braces-CK1RveI2.js";import"./file-code-oB44tEN2.js";import"./layout-list-CjY_Mh8i.js";import"./play-DnWShgnU.js";import"./type-DY6QvqBr.js";import"./refresh-cw-Evg5lk_v.js";import"./wand-sparkles-D38d5xON.js";import"./copy-DQfKP-RU.js";import"./download-DwVcN2kg.js";import"./eye-off-DDPcd9Hm.js";import"./eye-CmydJEzS.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

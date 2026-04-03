import{r as o,j as e}from"./index-BjcB6RzK.js";import{E as t}from"./EditableCodeBlock-BnZJq8KW.js";import"./index-DMsSvuEi.js";import"./braces-rmDTwsn1.js";import"./file-code-F5fHsy3u.js";import"./layout-list-DXswQ4wB.js";import"./play-DX16GKke.js";import"./type-KuLbSU6d.js";import"./refresh-cw-BiBGBwpy.js";import"./wand-sparkles-_OjV9jqi.js";import"./copy-DI4a0ux7.js";import"./download-D9OBzpJs.js";import"./eye-off-BvUSmI0w.js";import"./eye-CPtAr_i7.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

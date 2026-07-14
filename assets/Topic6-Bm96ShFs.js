import{r as o,j as e}from"./index-CK4WUhpx.js";import{E as t}from"./EditableCodeBlock-eQkDJKZF.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./file-code-CDbVQmeK.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./wand-sparkles-CzGmHgG3.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";class b extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

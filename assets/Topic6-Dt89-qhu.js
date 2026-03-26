import{r as o,j as e}from"./index-DvCu507i.js";import{E as t}from"./EditableCodeBlock-irbxfOgu.js";import"./index-DJ7WIp_a.js";import"./braces-CpOUzPCd.js";import"./file-code-DYqCfTmb.js";import"./layout-list-BLGZKrRf.js";import"./play-Lz8WYqwT.js";import"./type-kKrhLZrm.js";import"./refresh-cw-Dpjf4dGO.js";import"./wand-sparkles-B3goWZLn.js";import"./copy-D0mr27ws.js";import"./download-DYJkcKhx.js";import"./eye-off-s53eWv69.js";import"./eye-4UAC578b.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 6 – Object literals: keys, values, methods (More Practice)"}),e.jsx("p",{children:"An object literal is a comma-separated list of key–value pairs wrapped in curly braces. This is the most common way to create objects in JavaScript."}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Simple student object
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

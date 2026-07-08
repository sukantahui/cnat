import{r as s,j as e}from"./index-CFVtO9P_.js";import{E as t}from"./EditableCodeBlock-BQeSEugZ.js";import"./index-CxojLvve.js";import"./braces-Cmt44vyQ.js";import"./file-code-DtjmNRvm.js";import"./layout-list-i88iVR5k.js";import"./play-DbSjoswc.js";import"./refresh-cw-_Vy81NJU.js";import"./wand-sparkles-DPeSIm8D.js";import"./copy-9vzNuqdA.js";import"./download-BZw8gqT7.js";class f extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic getter
const student = {
  firstName: "Mounita",
  lastName: "Hui",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Getter + setter
const course = {
  title: "Tally with GST",
  _fees: 0,

  get fees() {
    console.log("Getting fees...");
    return this._fees;
  },

  set fees(value) {
    if (value < 0) {
      console.log("Invalid fees");
      return;
    }
    this._fees = value;
  },
};

course.fees = 5000;
console.log("Course fees:", course.fees);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Using getters/setters for formatting
const batch = {
  name: "Weekend",
  _students: ["Devangshu", "Kaustav"],

  get totalStudents() {
    return this._students.length;
  },

  set addStudent(name) {
    this._students.push(name);
  },
};

console.log("Total:", batch.totalStudents);
batch.addStudent = "Susmita";
console.log("Total now:", batch.totalStudents);`})]})}}export{f as default};

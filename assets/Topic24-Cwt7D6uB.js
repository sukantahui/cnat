import{r as s,j as t}from"./index-CZ43a81g.js";import{E as e}from"./EditableCodeBlock-DwL4Jb9v.js";import"./index-PEvkwhGW.js";import"./braces-DH3VCkS4.js";import"./file-code-eIIiaVan.js";import"./layout-list-mxYsvMl1.js";import"./play-BST6TIVX.js";import"./type-BbvUXNU_.js";import"./refresh-cw-DzOvX6Wp.js";import"./wand-sparkles-CzbUcbhB.js";import"./copy-BjNRK02q.js";import"./download-CNCNpCMb.js";import"./eye-off-CBqOqMtt.js";import"./eye-CrP0Jl2h.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
const student = {
  firstName: "Mounita",
  lastName: "Hui",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Getter + setter
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
console.log("Course fees:", course.fees);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Using getters/setters for formatting
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
console.log("Total now:", batch.totalStudents);`})]})}}export{j as default};

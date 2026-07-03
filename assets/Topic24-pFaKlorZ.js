import{r as s,j as e}from"./index-Czk7a0H9.js";import{E as t}from"./EditableCodeBlock-DLr33n0W.js";import"./index-CJqZRYro.js";import"./braces-emhnIJoT.js";import"./file-code-BODUuMKp.js";import"./layout-list-CnB_ewbf.js";import"./play-BsM0fxjP.js";import"./refresh-cw-ByFo7dKk.js";import"./wand-sparkles-B7hPkNvM.js";import"./copy-BF03oyX4.js";import"./download-HY43MXCi.js";class f extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic getter
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

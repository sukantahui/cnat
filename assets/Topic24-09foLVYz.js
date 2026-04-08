import{r as s,j as t}from"./index-BzuofKLN.js";import{E as e}from"./EditableCodeBlock-10-XduS2.js";import"./index-oNHJacdj.js";import"./braces-8NDDru5C.js";import"./file-code-DwwjY6VY.js";import"./layout-list-CQsFm4dY.js";import"./play-BE0N2vFu.js";import"./type-Db2KOmYK.js";import"./refresh-cw-D-tBDlKL.js";import"./wand-sparkles-wHaUD34B.js";import"./copy-COUrsCfW.js";import"./download-CxzJPmmX.js";import"./eye-off-KrXik9Ul.js";import"./eye-DCjGMv77.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

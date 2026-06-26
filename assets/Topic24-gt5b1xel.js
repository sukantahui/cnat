import{r as s,j as t}from"./index-C0mc_94R.js";import{E as e}from"./EditableCodeBlock-CO_xpaJa.js";import"./index-BaB5qTdC.js";import"./braces-Bw_E-mIF.js";import"./file-code-CJeM1EF0.js";import"./layout-list-CMZ-_utf.js";import"./play-BLZBdi5J.js";import"./type-BEWqtl1P.js";import"./refresh-cw-CNrstThT.js";import"./wand-sparkles-BqUKSHiN.js";import"./copy-CnQzJ4pm.js";import"./download-BpjOkBnV.js";import"./eye-off-2ljZTxvF.js";import"./eye-BmfNfNBT.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

import{r as s,j as t}from"./index-D2oyZ1_5.js";import{E as e}from"./EditableCodeBlock-C7as2P9H.js";import"./index-D5TCWeEA.js";import"./braces-WZIYXDaQ.js";import"./file-code-1o3nobi9.js";import"./layout-list-B67Unsx-.js";import"./play-abl2IrEY.js";import"./type-H7d3bXn1.js";import"./refresh-cw-WPTBV80K.js";import"./wand-sparkles-jLNc7dpD.js";import"./copy-BCvCdePc.js";import"./download-DK6fs-E5.js";import"./eye-off-VLWNiJzP.js";import"./eye-DsKiv6FO.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

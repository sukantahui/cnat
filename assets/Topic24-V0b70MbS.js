import{r as s,j as t}from"./index-2tOzkblz.js";import{E as e}from"./EditableCodeBlock-CU1q7wlK.js";import"./index-BNO_0XMv.js";import"./braces-BF58I9kY.js";import"./file-code-DBePoNRe.js";import"./layout-list-CquVXYkx.js";import"./play-PNWXmE5L.js";import"./type-Cfr7geYK.js";import"./refresh-cw-uClETiBf.js";import"./wand-sparkles-BJlyx_Dq.js";import"./copy-CbL44MIv.js";import"./download-BfzMDmZO.js";import"./eye-off-BqsY3cZ6.js";import"./eye-BTz061w4.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

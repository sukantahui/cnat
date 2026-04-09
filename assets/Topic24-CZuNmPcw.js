import{r as s,j as t}from"./index-DLefW0Tp.js";import{E as e}from"./EditableCodeBlock-DBYVZE29.js";import"./index-Ck8vhGSy.js";import"./braces-DSBAqnLT.js";import"./file-code-DyHBv2VX.js";import"./layout-list-CIbLHTf3.js";import"./play-Bonc3cvQ.js";import"./type-Bom_9Shz.js";import"./refresh-cw-DfWESQEa.js";import"./wand-sparkles-DXykm3S4.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";import"./eye-off-B1nx00rT.js";import"./eye-s8A1LQPP.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

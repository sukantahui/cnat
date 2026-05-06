import{r as s,j as t}from"./index-Bam6aBa9.js";import{E as e}from"./EditableCodeBlock-Z0TRU7YW.js";import"./index-CkD78rUh.js";import"./braces-BBA5yUJs.js";import"./file-code-BOjY1fpJ.js";import"./layout-list-CX19cbZv.js";import"./play-CW1Odb1G.js";import"./type-Bv-_5O1g.js";import"./refresh-cw-CQmMaSby.js";import"./wand-sparkles-oSaGqoIe.js";import"./copy-Cc2_iWoD.js";import"./download-DTOP_uE1.js";import"./eye-off-BuW8pOk4.js";import"./eye-3E5slxIz.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

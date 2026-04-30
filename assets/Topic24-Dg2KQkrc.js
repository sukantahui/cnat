import{r as s,j as t}from"./index-DdIeXD-l.js";import{E as e}from"./EditableCodeBlock-BAy3Nt_i.js";import"./index-BdoLMGZR.js";import"./braces-nhaegIUG.js";import"./file-code--W0N4Eit.js";import"./layout-list-Ckv48IVv.js";import"./play-D8Z08dyf.js";import"./type-DKKgNEdL.js";import"./refresh-cw-CG3J9k9V.js";import"./wand-sparkles-1ucm4P_f.js";import"./copy-CsH9Jtu6.js";import"./download-NywCF-VW.js";import"./eye-off-VC3tTGtH.js";import"./eye-DKQdLRA-.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

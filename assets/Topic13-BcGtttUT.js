import{r as o,j as t}from"./index-CiucDjKk.js";import{E as e}from"./EditableCodeBlock-BYSSzxKJ.js";import"./index-CpCb3E_X.js";import"./braces-BQZVHMtl.js";import"./file-code-BnWMtMm-.js";import"./layout-list-DysuKicz.js";import"./play-B4TXEWqb.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./wand-sparkles-NnSw4MJA.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";import"./eye-off-Ln5aLgun.js";import"./eye-z1nKQA9f.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
const student = {
  name: "Mounita",
  course: "JavaScript",
  showInfo: function () {
    console.log("Student:", this.name, "-", this.course);
  },
};

student.showInfo();`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Arrow function as a method (usually NOT recommended)
const student = {
  name: "Pranjali",
  course: "Tally",
  showInfo: () => {
    console.log("Student:", this.name, "-", this.course);
  },
};

student.showInfo(); // this will NOT refer to the student object`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Arrow function useful inside callbacks
const batch = {
  name: "Weekend Full Stack",
  students: ["Devangshu", "Swadeep", "Kaustav"],
  printStudents() {
    this.students.forEach((s) => {
      console.log(this.name + " - " + s);
    });
  },
};

batch.printStudents();`})]})}}export{g as default};

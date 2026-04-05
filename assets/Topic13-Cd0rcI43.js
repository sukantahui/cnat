import{r as o,j as t}from"./index-BXlhguQt.js";import{E as e}from"./EditableCodeBlock-BHKA4GgB.js";import"./index-DAzmlnHY.js";import"./braces-BulDhXKg.js";import"./file-code-DvrZGHOf.js";import"./layout-list-Cl2MPlEm.js";import"./play-Ch6qWl_k.js";import"./type-B7fVRfrN.js";import"./refresh-cw-C774EOhC.js";import"./wand-sparkles-DQE2mvpJ.js";import"./copy-ojBqBM7b.js";import"./download-B1njA82h.js";import"./eye-off-DugvWCj6.js";import"./eye-CFtYSo9m.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

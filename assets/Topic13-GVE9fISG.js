import{r as o,j as t}from"./index-BzuofKLN.js";import{E as e}from"./EditableCodeBlock-10-XduS2.js";import"./index-oNHJacdj.js";import"./braces-8NDDru5C.js";import"./file-code-DwwjY6VY.js";import"./layout-list-CQsFm4dY.js";import"./play-BE0N2vFu.js";import"./type-Db2KOmYK.js";import"./refresh-cw-D-tBDlKL.js";import"./wand-sparkles-wHaUD34B.js";import"./copy-COUrsCfW.js";import"./download-CxzJPmmX.js";import"./eye-off-KrXik9Ul.js";import"./eye-DCjGMv77.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

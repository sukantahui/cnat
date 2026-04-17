import{r as o,j as t}from"./index-CAWfB0WX.js";import{E as e}from"./EditableCodeBlock-CcMNS1KL.js";import"./index-uncorcit.js";import"./braces-CUM-PBNo.js";import"./file-code-BoxdIech.js";import"./layout-list-C0N63pq9.js";import"./play-Ps4HZc_E.js";import"./type-Cqxh80Ov.js";import"./refresh-cw-BsQtlftS.js";import"./wand-sparkles-jvHbFS0u.js";import"./copy-CfpCMbyO.js";import"./download-Cl4ot-Qj.js";import"./eye-off-BUSTRKze.js";import"./eye-Co30Kfdg.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

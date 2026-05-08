import{r as o,j as t}from"./index-DaJZPAzN.js";import{E as e}from"./EditableCodeBlock-DPY6mffP.js";import"./index-BNRMmMjw.js";import"./braces-BlnKo9xV.js";import"./file-code-DVrGLACy.js";import"./layout-list-DEPOVFNL.js";import"./play-_VBtPl4R.js";import"./type-B8EDvMMZ.js";import"./refresh-cw-CqFIfL8c.js";import"./wand-sparkles-AgK1WDy3.js";import"./copy-Q2INuC-O.js";import"./download-CQzh5qwM.js";import"./eye-off-C4T7emjA.js";import"./eye-BWQFOqkh.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

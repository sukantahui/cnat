import{r as o,j as t}from"./index-Ci-Q4Ner.js";import{E as e}from"./EditableCodeBlock-dZSFwXIZ.js";import"./index-BovWnrwo.js";import"./braces-D0GgDFCR.js";import"./file-code-cjFDZoet.js";import"./layout-list-CNeoJZsF.js";import"./play-CUvMdlUb.js";import"./type-BkofYUDL.js";import"./refresh-cw-DVq0w9yy.js";import"./wand-sparkles-BImX2qU-.js";import"./copy-CVYVE7uU.js";import"./download-D2yIxL3J.js";import"./eye-off-CfVEqTtg.js";import"./eye-DWv5isVy.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

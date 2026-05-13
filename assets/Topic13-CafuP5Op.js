import{r as o,j as t}from"./index-D_KlGz35.js";import{E as e}from"./EditableCodeBlock-mdOsWep6.js";import"./index-MbyvR6yE.js";import"./braces-DnfJOtXk.js";import"./file-code-lN5fgqEG.js";import"./layout-list-BIyAErvJ.js";import"./play-BVZg1uWR.js";import"./type-ytyKR7yC.js";import"./refresh-cw-DDdaBWS7.js";import"./wand-sparkles-6fXvIon5.js";import"./copy-BdC4UZjE.js";import"./download-Bc-rEhNs.js";import"./eye-off-DCZGEJpk.js";import"./eye-DkV-DCco.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

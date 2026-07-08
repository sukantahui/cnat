import{r as s,j as t}from"./index-gsr__VoO.js";import{E as e}from"./EditableCodeBlock-Wuc9XhDe.js";import"./index-BWD-23kO.js";import"./braces-CoES6LeI.js";import"./file-code-BIP47i_q.js";import"./layout-list-BJ8vQIye.js";import"./play-DRLvq0m8.js";import"./refresh-cw-CbGJFCpt.js";import"./wand-sparkles-BWFL7YwY.js";import"./copy-_YtngGN_.js";import"./download-BR7jb7LT.js";class f extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

batch.printStudents();`})]})}}export{f as default};

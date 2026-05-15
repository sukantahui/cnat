import{r as o,j as t}from"./index-CRQVh4re.js";import{E as e}from"./EditableCodeBlock-By7tVRU-.js";import"./index-C9ustuPO.js";import"./braces-koYBCYVL.js";import"./file-code-CDWWe15K.js";import"./layout-list-B8Q7FCNK.js";import"./play-I4WOjbVK.js";import"./type-DPaMVfx8.js";import"./refresh-cw-DGCj3_No.js";import"./wand-sparkles-CStrf0ZC.js";import"./copy-Bmu3Bn8U.js";import"./download-DfwRCjzX.js";import"./eye-off-Dht_vehv.js";import"./eye-DF2o32X7.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

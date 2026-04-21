import{r as o,j as t}from"./index-CcWT5Clg.js";import{E as e}from"./EditableCodeBlock-CMUq9aaP.js";import"./index-Dl02PJxt.js";import"./braces-D9LpDO-Z.js";import"./file-code-q4V1v1GH.js";import"./layout-list-Cr-YQCZJ.js";import"./play-CyYeQws-.js";import"./type-DrHEO6Oa.js";import"./refresh-cw-Df9zaQIy.js";import"./wand-sparkles-35hAL8tY.js";import"./copy-C04kLtDx.js";import"./download-0c8r0d_S.js";import"./eye-off-C1rctWFX.js";import"./eye-ciicSKcY.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

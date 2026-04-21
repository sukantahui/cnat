import{r as o,j as t}from"./index-ClZJ1mc6.js";import{E as e}from"./EditableCodeBlock-BXYM_mc5.js";import"./index-xzOXAXCa.js";import"./braces-eb68Uf93.js";import"./file-code-Bm_e03QA.js";import"./layout-list-BiKlVs3p.js";import"./play-DjoYwq9q.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./wand-sparkles-jep67qaE.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";import"./eye-off-vuCWj3VN.js";import"./eye-V2WDc2EC.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

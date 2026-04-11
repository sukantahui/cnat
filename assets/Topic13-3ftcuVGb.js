import{r as o,j as t}from"./index-BxcHuftT.js";import{E as e}from"./EditableCodeBlock-DK-pKqv2.js";import"./index-lfB80H_P.js";import"./braces-uvHhEcRm.js";import"./file-code-B8psrjkP.js";import"./layout-list-Dx76mYNZ.js";import"./play-BEG4S0rO.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./wand-sparkles-DDme7KTv.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";import"./eye-off-CcREvAVU.js";import"./eye-C1Ed07Y0.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

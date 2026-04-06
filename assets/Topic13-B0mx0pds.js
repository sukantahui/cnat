import{r as o,j as t}from"./index-zoleORG0.js";import{E as e}from"./EditableCodeBlock-DnUTwdHm.js";import"./index-DaCgRqBW.js";import"./braces-DNVNm8By.js";import"./file-code-CYf5TbHj.js";import"./layout-list-Bh183qU5.js";import"./play-DnJZKzJ4.js";import"./type-01gFDPU2.js";import"./refresh-cw-H932oURx.js";import"./wand-sparkles-Cq6xiFFM.js";import"./copy-DnHNBSbf.js";import"./download-DXpbFnt0.js";import"./eye-off-D_7vqU7y.js";import"./eye-C2NjizJX.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 13 – Arrow functions vs normal functions: this difference"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Normal function method
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

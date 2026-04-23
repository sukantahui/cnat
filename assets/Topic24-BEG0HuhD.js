import{r as s,j as t}from"./index-CmAIoOXN.js";import{E as e}from"./EditableCodeBlock-BlMKhSHY.js";import"./index-Ctno6LPZ.js";import"./braces-DM1jAfMm.js";import"./file-code-Dknl8_wy.js";import"./layout-list-C0IShk2V.js";import"./play-BOo6cwEF.js";import"./type-BX72wN3g.js";import"./refresh-cw-BbngG8iQ.js";import"./wand-sparkles-BhMA9XzZ.js";import"./copy-DM6uKa4-.js";import"./download-Dist3jgj.js";import"./eye-off-CcBA_c8J.js";import"./eye-BJpbV_yU.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
const student = {
  firstName: "Mounita",
  lastName: "Hui",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Getter + setter
const course = {
  title: "Tally with GST",
  _fees: 0,

  get fees() {
    console.log("Getting fees...");
    return this._fees;
  },

  set fees(value) {
    if (value < 0) {
      console.log("Invalid fees");
      return;
    }
    this._fees = value;
  },
};

course.fees = 5000;
console.log("Course fees:", course.fees);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Using getters/setters for formatting
const batch = {
  name: "Weekend",
  _students: ["Devangshu", "Kaustav"],

  get totalStudents() {
    return this._students.length;
  },

  set addStudent(name) {
    this._students.push(name);
  },
};

console.log("Total:", batch.totalStudents);
batch.addStudent = "Susmita";
console.log("Total now:", batch.totalStudents);`})]})}}export{j as default};

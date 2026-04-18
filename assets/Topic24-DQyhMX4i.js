import{r as s,j as t}from"./index-CTaFCVvl.js";import{E as e}from"./EditableCodeBlock-KOhOfWQC.js";import"./index-RG1_EAcX.js";import"./braces-DR1B3IWk.js";import"./file-code-DdaZ0WP2.js";import"./layout-list-BRs4SSFE.js";import"./play-rkdgOENq.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./wand-sparkles-Dq-Tbn4Z.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";import"./eye-off-DQCWcKuS.js";import"./eye-RMvPMGzV.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

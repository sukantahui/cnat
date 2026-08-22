import{r as s,j as t}from"./index-YkKVfVEM.js";import{E as e}from"./EditableCodeBlock-Bb8nn4Xi.js";import"./index-gzZkhgxu.js";import"./braces-TvM0FylP.js";import"./createLucideIcon-Cim-rzMd.js";import"./file-code-DitFwktW.js";import"./layout-list-CEyAvgT5.js";import"./play-DEajiqWU.js";import"./type-YS4uKozr.js";import"./refresh-cw-Dxhotsjr.js";import"./minimize-2-Dy1dCTjQ.js";import"./wand-sparkles-DqpDcVN7.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./eye-off-BJzm0hT7.js";import"./eye-TpFMMSv4.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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
console.log("Total now:", batch.totalStudents);`})]})}}export{N as default};

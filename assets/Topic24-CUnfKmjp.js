import{r as s,j as t}from"./index-C8tfbTD8.js";import{E as e}from"./EditableCodeBlock-B43zle_x.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./file-code--LqktZ78.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./wand-sparkles-D7x0So5e.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

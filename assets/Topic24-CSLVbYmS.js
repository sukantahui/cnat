import{r as s,j as t}from"./index-NACEEa8w.js";import{E as e}from"./EditableCodeBlock-DhbzGAxA.js";import"./index-OTxvoXyo.js";import"./createLucideIcon-DogKn5wF.js";import"./braces-DZ5e4LUG.js";import"./file-code-CJcKJH9Y.js";import"./layout-list-CM3wcDMC.js";import"./play-BGixpdkC.js";import"./type-BkuZTd3u.js";import"./refresh-cw-BRGNrlHt.js";import"./wand-sparkles-BrK6n-20.js";import"./copy-B-noeKSe.js";import"./download-DnQYd8bi.js";import"./eye-off-HKTYvvuy.js";import"./eye-D6FrJ2rq.js";class v extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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
console.log("Total now:", batch.totalStudents);`})]})}}export{v as default};

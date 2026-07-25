import{r as s,j as t}from"./index-D8vKF2mq.js";import{E as e}from"./EditableCodeBlock-DiAh0cAP.js";import"./index-_VvknCR5.js";import"./createLucideIcon-DTJ5VPt2.js";import"./braces-BXpH0v-S.js";import"./file-code-C52313Dl.js";import"./layout-list-BkZm_8W0.js";import"./play-ZVoUkbUG.js";import"./type-PC3P0vgv.js";import"./refresh-cw-DcvlgmPw.js";import"./wand-sparkles-C0teRuqT.js";import"./copy-bDAEzVP3.js";import"./download-BaqyJosE.js";import"./eye-off-BL0ZDN6q.js";import"./eye-Dvwj4G7q.js";class v extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

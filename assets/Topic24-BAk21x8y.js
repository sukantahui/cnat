import{r as s,j as t}from"./index-ClZJ1mc6.js";import{E as e}from"./EditableCodeBlock-BXYM_mc5.js";import"./index-xzOXAXCa.js";import"./braces-eb68Uf93.js";import"./file-code-Bm_e03QA.js";import"./layout-list-BiKlVs3p.js";import"./play-DjoYwq9q.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./wand-sparkles-jep67qaE.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";import"./eye-off-vuCWj3VN.js";import"./eye-V2WDc2EC.js";class j extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 24 – Getters and setters"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic getter
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

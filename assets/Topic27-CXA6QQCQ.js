import{r as o,j as t}from"./index-CAWfB0WX.js";import{E as e}from"./EditableCodeBlock-CcMNS1KL.js";import"./index-uncorcit.js";import"./braces-CUM-PBNo.js";import"./file-code-BoxdIech.js";import"./layout-list-C0N63pq9.js";import"./play-Ps4HZc_E.js";import"./type-Cqxh80Ov.js";import"./refresh-cw-BsQtlftS.js";import"./wand-sparkles-jvHbFS0u.js";import"./copy-CfpCMbyO.js";import"./download-Cl4ot-Qj.js";import"./eye-off-BUSTRKze.js";import"./eye-Co30Kfdg.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 27 – Constructor functions and the new keyword"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic constructor function
function Student(name, course, batch) {
  this.name = name;
  this.course = course;
  this.batch = batch;
}

const s1 = new Student("Ritaja", "Python", "Morning");
const s2 = new Student("Kaustav", "JavaScript", "Evening");

console.log(s1);
console.log(s2);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Adding methods inside constructor (not ideal, but simple)
function Teacher(name, subject) {
  this.name = name;
  this.subject = subject;
  this.introduce = function () {
    console.log("I am " + this.name + ", I teach " + this.subject);
  };
}

const t1 = new Teacher("Sukanta Hui", "Full Stack Development");
t1.introduce();`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: What "new" does (conceptually)
// 1. Creates a new empty object
// 2. Sets this to that object
// 3. Links the object to the function's prototype
// 4. Returns the object

function Course(title, duration) {
  this.title = title;
  this.duration = duration;
}

const c = new Course("Advanced Excel", "3 months");
console.log(c);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 4: Without "new" (common mistake)
function Batch(name) {
  this.name = name;
}

const b1 = Batch("Weekend Batch"); // this refers to global (in non-strict mode)
console.log(b1); // undefined
// Use: const b1 = new Batch("Weekend Batch");`})]})}}export{g as default};

import{r as o,j as t}from"./index-CEi3MejZ.js";import{E as e}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 27 – Constructor functions and the new keyword"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic constructor function
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

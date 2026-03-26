import{r as o,j as t}from"./index-C8tfbTD8.js";import{E as e}from"./EditableCodeBlock-B43zle_x.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./file-code--LqktZ78.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./wand-sparkles-D7x0So5e.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";class g extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 27 – Constructor functions and the new keyword"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic constructor function
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

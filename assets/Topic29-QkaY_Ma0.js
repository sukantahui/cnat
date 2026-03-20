import{r as o,j as t}from"./index-CUXXvONC.js";import{E as e}from"./EditableCodeBlock-DbjIohnu.js";import"./index-CBpdwEID.js";import"./createLucideIcon-O_Er4fpW.js";import"./braces-B4AyVXmG.js";import"./file-code-BNZ84HOO.js";import"./layout-list-GoT0ASd9.js";import"./play-DNNbdgtV.js";import"./type-Bunlk4m9.js";import"./refresh-cw-BO9f_BLL.js";import"./wand-sparkles-C_tYuFMb.js";import"./copy-rP0aAxF9.js";import"./download-C-zK-a1m.js";import"./eye-off-DR1p6kU7.js";import"./eye-CH8Le7yy.js";class y extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 29 – Adding methods using prototypes"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Add a method to constructor's prototype
function Student(name, course) {
  this.name = name;
  this.course = course;
}

Student.prototype.introduce = function () {
  console.log("Hi, I am " + this.name + ", learning " + this.course);
};

const s1 = new Student("Ritaja", "Python");
const s2 = new Student("Mounita", "Advanced Excel");

s1.introduce();
s2.introduce();`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Shared methods (memory efficient)
function Batch(name, trainer) {
  this.name = name;
  this.trainer = trainer;
}

Batch.prototype.describe = function () {
  console.log(
    "Batch: " + this.name + ", Trainer: " + this.trainer
  );
};

const b1 = new Batch("Morning", "Sukanta Hui");
const b2 = new Batch("Weekend", "Tanusree Hui");

b1.describe();
b2.describe();`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Prototype properties
function Course(title) {
  this.title = title;
}

Course.prototype.center = "Coder & AccoTax";

const c1 = new Course("JavaScript");
const c2 = new Course("Tally with GST");

console.log(c1.title, "-", c1.center);
console.log(c2.title, "-", c2.center);`})]})}}export{y as default};

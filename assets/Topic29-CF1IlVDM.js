import{r as o,j as t}from"./index-DLefW0Tp.js";import{E as e}from"./EditableCodeBlock-DBYVZE29.js";import"./index-Ck8vhGSy.js";import"./braces-DSBAqnLT.js";import"./file-code-DyHBv2VX.js";import"./layout-list-CIbLHTf3.js";import"./play-Bonc3cvQ.js";import"./type-Bom_9Shz.js";import"./refresh-cw-DfWESQEa.js";import"./wand-sparkles-DXykm3S4.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";import"./eye-off-B1nx00rT.js";import"./eye-s8A1LQPP.js";class j extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 29 – Adding methods using prototypes"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Add a method to constructor's prototype
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
console.log(c2.title, "-", c2.center);`})]})}}export{j as default};

import{r as a,j as t}from"./index-sRNy85CP.js";import{E as s}from"./EditableCodeBlock-DkTjT620.js";import"./index-7n4CaZPm.js";import"./braces-BS8kdTzg.js";import"./file-code-DMLUJpKI.js";import"./layout-list-DUaVKPXn.js";import"./play-BJtPkSLX.js";import"./type-D4P2k3xa.js";import"./refresh-cw-DnRLB-ho.js";import"./wand-sparkles-CnWoS0P-.js";import"./copy-DVtYfKkO.js";import"./download-K3JAF1JL.js";import"./eye-off-qPvddMEU.js";import"./eye-C3vdhIj7.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
class Student {
  constructor(name, course, batch) {
    this.name = name;
    this.course = course;
    this.batch = batch;
  }

  introduce() {
    console.log(\`\${this.name} is in \${this.course} (\${this.batch})\`);
  }
}

const s1 = new Student("Ritaja", "Python", "Morning");
s1.introduce();`}),t.jsx(s,{language:"javascript",initialCode:`// Example 2: Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(10, 20));`}),t.jsx(s,{language:"javascript",initialCode:`// Example 3: Mixing instance and static methods
class Course {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  getSummary() {
    console.log(\`\${this.title} - \${this.duration}\`);
  }

  static createBasic(title) {
    return new Course(title, "3 months");
  }
}

const c1 = new Course("Advanced Excel", "2 months");
c1.getSummary();

const c2 = Course.createBasic("Tally with GST");
c2.getSummary();`})]})}}export{C as default};

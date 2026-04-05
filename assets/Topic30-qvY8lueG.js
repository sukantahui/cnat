import{r as a,j as t}from"./index-BHC-ARLC.js";import{E as s}from"./EditableCodeBlock-CIvCYvLg.js";import"./index-ME8AnmeB.js";import"./braces-BQvFuFD9.js";import"./file-code-55V_qcat.js";import"./layout-list--tQkMoA1.js";import"./play-S6YlOQBD.js";import"./type-Nkw_JIR4.js";import"./refresh-cw-B3VDvcQ8.js";import"./wand-sparkles-By4oPjZ3.js";import"./copy-DNi4hkEF.js";import"./download-BuOPxyOv.js";import"./eye-off-xALAcrMX.js";import"./eye-DBhLFmsq.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

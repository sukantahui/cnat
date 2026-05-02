import{r as a,j as t}from"./index-COd1BgDP.js";import{E as s}from"./EditableCodeBlock-DDnNgAGW.js";import"./index-C6PolHK9.js";import"./braces-CBYgV3Zs.js";import"./file-code-CL2zX7Xy.js";import"./layout-list-CuGgqLN_.js";import"./play-jI2NV5Sw.js";import"./type-DzEAaeRI.js";import"./refresh-cw-CkNx_mLp.js";import"./wand-sparkles-7p46q3hG.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

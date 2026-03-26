import{r as a,j as t}from"./index-b7ec57y3.js";import{E as s}from"./EditableCodeBlock-CUU3m7bV.js";import"./index-YcsC-9l3.js";import"./createLucideIcon-rpwAtNd4.js";import"./braces-DaWynF8W.js";import"./file-code-BayAKhuW.js";import"./layout-list-DHPnG2KL.js";import"./play-iDwqm0pH.js";import"./type-BCGOc5XA.js";import"./refresh-cw-DOKtjFB2.js";import"./wand-sparkles-Dm8J8N6Z.js";import"./copy-Ds2YEQZf.js";import"./download-zjLbxNEf.js";import"./eye-off-C83yZDwu.js";import"./eye-Dx1fNgme.js";class E extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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
c2.getSummary();`})]})}}export{E as default};

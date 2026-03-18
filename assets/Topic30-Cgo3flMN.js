import{r as a,j as t}from"./index-Cw6znig-.js";import{E as s}from"./EditableCodeBlock-DifnH3lG.js";import"./index-CoNGGNvB.js";import"./createLucideIcon-PJoG5qt8.js";import"./braces-jXibYef2.js";import"./file-code-C3QX0Uay.js";import"./layout-list-BoDJSDvr.js";import"./play-DFw9barl.js";import"./type-BES0YIK0.js";import"./refresh-cw-C-VUqftF.js";import"./wand-sparkles-BK-yOS3N.js";import"./copy-DrPgsz5g.js";import"./download-CHAjlQte.js";import"./eye-off-Y9jkbsBs.js";import"./eye-CnOj13o1.js";class E extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

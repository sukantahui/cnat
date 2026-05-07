import{r as a,j as t}from"./index-Ofv5BQah.js";import{E as s}from"./EditableCodeBlock-BooQLP_-.js";import"./index-D36xJsVZ.js";import"./braces-By7M1Gf_.js";import"./file-code-8pJVigLi.js";import"./layout-list-CPzIh9-w.js";import"./play-CTTz1uQm.js";import"./type-BS4-Nv9e.js";import"./refresh-cw-Dc_FYhXA.js";import"./wand-sparkles-Clz0lJ4T.js";import"./copy-CvjPxglF.js";import"./download-BK3b5Z3K.js";import"./eye-off-DAXY-jPY.js";import"./eye-D1L16zRR.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

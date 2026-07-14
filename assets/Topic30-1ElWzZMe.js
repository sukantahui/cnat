import{r as a,j as t}from"./index-CK4WUhpx.js";import{E as s}from"./EditableCodeBlock-eQkDJKZF.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./file-code-CDbVQmeK.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./wand-sparkles-CzGmHgG3.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";class E extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

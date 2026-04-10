import{r as a,j as t}from"./index-BRkQtvvo.js";import{E as s}from"./EditableCodeBlock-XDZ6X8-U.js";import"./index-CBE1MaW4.js";import"./braces-Ck6N4IEp.js";import"./file-code-I44cNVwq.js";import"./layout-list-VVBYbJwJ.js";import"./play-BwqyFVDc.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./wand-sparkles-C1XRSA5G.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";import"./eye-off-C-cOQUZS.js";import"./eye-Bo8Z4-Jj.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

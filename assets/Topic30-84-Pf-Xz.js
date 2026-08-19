import{r as a,j as t}from"./index-DWohEkZn.js";import{E as s}from"./EditableCodeBlock-CrzCPJcr.js";import"./index-CEQXCTxS.js";import"./braces-JdF8JkjR.js";import"./createLucideIcon-C1O5LkBh.js";import"./file-code-Fl3OCYw3.js";import"./layout-list-CHnqrCXG.js";import"./play-B1-I8GqR.js";import"./type-BLbZSUQo.js";import"./refresh-cw-DKLgNQ1l.js";import"./minimize-2-RAOAenst.js";import"./wand-sparkles-DdP14k2W.js";import"./copy-CYTKJbf3.js";import"./download-DrWkJMSz.js";import"./eye-off-CeH8fnu0.js";import"./eye-MtmNCO_Y.js";class b extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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
c2.getSummary();`})]})}}export{b as default};

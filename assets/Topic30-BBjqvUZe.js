import{r as a,j as t}from"./index-ClZJ1mc6.js";import{E as s}from"./EditableCodeBlock-BXYM_mc5.js";import"./index-xzOXAXCa.js";import"./braces-eb68Uf93.js";import"./file-code-Bm_e03QA.js";import"./layout-list-BiKlVs3p.js";import"./play-DjoYwq9q.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./wand-sparkles-jep67qaE.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";import"./eye-off-vuCWj3VN.js";import"./eye-V2WDc2EC.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

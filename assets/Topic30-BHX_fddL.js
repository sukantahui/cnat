import{r as a,j as t}from"./index-DI04DAgq.js";import{E as s}from"./EditableCodeBlock-C-yBK3EY.js";import"./index-dzV7gd_1.js";import"./braces-CK1RveI2.js";import"./file-code-oB44tEN2.js";import"./layout-list-CjY_Mh8i.js";import"./play-DnWShgnU.js";import"./type-DY6QvqBr.js";import"./refresh-cw-Evg5lk_v.js";import"./wand-sparkles-D38d5xON.js";import"./copy-DQfKP-RU.js";import"./download-DwVcN2kg.js";import"./eye-off-DDPcd9Hm.js";import"./eye-CmydJEzS.js";class C extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 30 – ES6 class syntax: constructor, instance methods, static methods"}),t.jsx(s,{language:"javascript",initialCode:`// Example 1: Basic class with constructor
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

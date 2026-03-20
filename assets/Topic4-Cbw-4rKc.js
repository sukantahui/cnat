import{j as t}from"./index-CUXXvONC.js";import{C as e}from"./CodeBlock-BnJcuPuh.js";import"./EditableCodeBlock-DbjIohnu.js";import"./prism-mOIs-ccL.js";import"./prism-json-D0UlpdKh.js";import"./file-code-BNZ84HOO.js";import"./createLucideIcon-O_Er4fpW.js";import"./copy-rP0aAxF9.js";import"./download-C-zK-a1m.js";import"./play-DNNbdgtV.js";import"./index-CBpdwEID.js";import"./braces-B4AyVXmG.js";import"./layout-list-GoT0ASd9.js";import"./type-Bunlk4m9.js";import"./refresh-cw-BO9f_BLL.js";import"./wand-sparkles-C_tYuFMb.js";import"./eye-off-DR1p6kU7.js";import"./eye-CH8Le7yy.js";function f(){return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["Constructor Functions & the ",t.jsx("code",{children:"new"})," Keyword"]}),t.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Constructor functions are a traditional way in JavaScript to create multiple similar objects. They work together with the ",t.jsx("code",{children:"new"})," keyword to produce new instances."]}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Basic Constructor Function"}),t.jsx(e,{code:`function Student(name, course, score) {
  this.name = name;
  this.course = course;
  this.score = score;
}

const s1 = new Student("Ritaja", "JavaScript", 95);
const s2 = new Student("Swadeep", "JavaScript", 89);

console.log(s1.name);   // Ritaja
console.log(s2.score);  // 89`,language:"javascript"}),t.jsxs("p",{className:"text-slate-400 text-sm",children:["Every time you use ",t.jsx("code",{children:"new Student()"}),", a new student object is created."]}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Adding Methods to Constructor Functions"}),t.jsx(e,{code:`function Teacher(name, subject) {
  this.name = name;
  this.subject = subject;

  this.introduce = function () {
    console.log(\`I am \${this.name} and I teach \${this.subject}.\`);
  };
}

const t1 = new Teacher("Sukanta Hui", "JavaScript");
t1.introduce();`,language:"javascript"}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Example — Student Enrollment (Coder & AccoTax)"}),t.jsx(e,{code:`function Enrollment(name, module, city) {
  this.name = name;
  this.module = module;
  this.city = city;

  this.summary = function () {
    console.log(\`\${this.name} from \${this.city} enrolled in \${this.module}.\`);
  };
}

const e1 = new Enrollment("Devangshu", "Objects & OOP", "Barrackpore");
const e2 = new Enrollment("Pranjali", "JavaScript Basics", "Barrackpore");

e1.summary();
e2.summary();`,language:"javascript"}),t.jsxs("h3",{className:"text-lg font-semibold text-slate-200",children:["What the ",t.jsx("code",{children:"new"})," Keyword Actually Does"]}),t.jsx(e,{code:`When you write:

const s = new Student("Kaustav", "JS", 92);

The 'new' keyword does 4 things:

1. Creates a new empty object: {}
2. Sets 'this' to refer to that new object
3. Assigns values to properties (name, module, etc.)
4. Returns the new object`,language:"javascript"}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Adding Methods the Right Way (Prototype)"}),t.jsx(e,{code:`function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.showMarks = function () {
  console.log(\`\${this.name}'s Marks: \${this.marks}\`);
};

const s = new Student("Susmita", 93);
s.showMarks();`,language:"javascript"}),t.jsx("p",{className:"text-slate-400 text-sm",children:"This is the foundation for learning ES6 Classes and OOP structure."})]})}export{f as default};

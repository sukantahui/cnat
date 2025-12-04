import{r as t,j as e,E as s}from"./index-D0dotYaA.js";class c extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"ES6 Classes, Constructor & Basic Inheritance"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript is a prototype-based language, meaning every object is linked to another object called its ",e.jsx("strong",{children:"prototype"}),". Before ES6, developers used ",e.jsx("strong",{children:"constructor functions"})," and manually attached methods using ",e.jsx("code",{children:"Function.prototype"}),". This method worked, but became harder to manage as applications grew larger."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["ES6 introduced the ",e.jsx("code",{children:"class"})," keyword — a cleaner, modern, object-oriented syntax that makes JavaScript feel more like Java, Python, or C++. Internally, classes ",e.jsx("strong",{children:"still use prototypes"}),". They are just syntactic sugar that makes object-oriented programming easier."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Classes are ideal for modelling entities such as ",e.jsx("strong",{children:"Students"}),",",e.jsx("strong",{children:"Teachers"}),", ",e.jsx("strong",{children:"Courses"}),", etc. — perfect for building structured applications like the systems used at",e.jsx("strong",{children:"Coder & AccoTax"}),"."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"What is a Class? What is a Constructor?"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"class"})," is a blueprint for creating multiple objects with similar structure. A ",e.jsx("strong",{children:"constructor()"})," is a special method used to initialize object properties when an object is created using ",e.jsx("code",{children:"new"}),"."]}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsx("li",{children:"A class describes what an object should contain."}),e.jsx("li",{children:"An instance is an actual object created from a class."}),e.jsx("li",{children:"Methods inside the class are stored on the prototype (memory-efficient)."}),e.jsxs("li",{children:["Constructor runs automatically when ",e.jsx("code",{children:"new"})," is used."]})]}),e.jsx(s,{language:"javascript",initialCode:`class Student {
  constructor(name, course, score) {
    this.name = name;
    this.course = course;
    this.score = score;
  }

  show() {
    console.log(\`\${this.name} scored \${this.score} in \${this.course}.\`);
  }
}

const s1 = new Student("Mounita", "JavaScript", 94);
s1.show();`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Teacher Class"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A class can represent any real-world entity. A teacher has a name, a subject, and a behavior — ",e.jsx("code",{children:"teach()"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  teach() {
    console.log(\`\${this.name} teaches \${this.subject}.\`);
  }
}

const t = new Teacher("Tanusree Hui", "Python");
t.teach();`}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("h3",{className:"text-lg font-semibold text-slate-200",children:["Inheritance with ",e.jsx("code",{children:"extends"})]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Inheritance allows one class (child) to reuse the properties and methods of another class (parent). This helps reduce duplication and creates cleaner code structure."}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," creates a child class."]}),e.jsxs("li",{children:[e.jsx("code",{children:"super()"})," calls the parent constructor."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"super()"})," must be called before using ",e.jsx("code",{children:"this"}),"."]})]}),e.jsx(s,{language:"javascript",initialCode:`class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  info() {
    console.log(\`\${this.name} from \${this.city}\`);
  }
}

class Student extends Person {
  constructor(name, city, batch) {
    super(name, city); // parent constructor call
    this.batch = batch;
  }

  details() {
    console.log(\`\${this.name} is in \${this.batch} batch.\`);
  }
}

const s = new Student("Kaustav", "Barrackpore", "JS Evening");
s.info();
s.details();`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Example — Coder & AccoTax (Barrackpore)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In a real software model, we might have ",e.jsx("code",{children:"Person"})," as the base class, and extend it into ",e.jsx("code",{children:"Teacher"})," and ",e.jsx("code",{children:"Student"}),"roles with extra methods and properties."]}),e.jsx(s,{language:"javascript",initialCode:`class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  intro() {
    console.log(\`I am \${this.name} (\${this.role})\`);
  }
}

class Teacher extends Person {
  constructor(name, role, subject) {
    super(name, role);
    this.subject = subject;
  }

  info() {
    console.log(\`Subject: \${this.subject}\`);
  }
}

class Student extends Person {
  constructor(name, role, marks) {
    super(name, role);
    this.marks = marks;
  }

  report() {
    console.log(\`\${this.name}'s Marks: \${this.marks}\`);
  }
}

// Examples:
const teacher = new Teacher("Sukanta Hui", "Teacher", "JavaScript");
const student = new Student("Pranjali", "Student", 96);

teacher.intro();
teacher.info();
student.intro();
student.report();`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Static Methods"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"static method"})," belongs to the class itself, not the objects created from the class. These are useful for helper functions, utilities, validators, or factory methods."]}),e.jsx(s,{language:"javascript",initialCode:`class Utils {
  static welcome() {
    console.log("Welcome to Coder & AccoTax!");
  }
}

Utils.welcome();`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"ES6 Classes form the foundation of modern JavaScript OOP. Understanding constructors, inheritance, static methods, and prototypes will help you build scalable applications and ace JavaScript interviews."})]})}}export{c as default};

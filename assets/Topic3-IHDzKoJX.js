import{j as e}from"./index-C6pgtZUT.js";import{C as t}from"./CodeBlock-BePmQll_.js";import"./prism-javascript-Bfk15s6t.js";function c(){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["Understanding the ",e.jsx("code",{children:"this"})," Keyword (Basic Concept)"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The ",e.jsx("code",{children:"this"})," keyword in JavaScript refers to the object that is currently executing the function. It is commonly used in object methods — like student or teacher profiles at Coder & AccoTax, Barrackpore."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Basic Object Example"}),e.jsx(t,{code:`const student = {
  name: "Kaustav",
  course: "JavaScript",
  greet() {
    console.log(\`Hello, I am \${this.name} from the \${this.course} course.\`);
  }
};

student.greet();`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Here, ",e.jsx("code",{children:"this.name"})," refers to the ",e.jsx("strong",{children:"student"})," object."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example with Teacher Object"}),e.jsx(t,{code:`const teacher = {
  name: "Sukanta Hui",
  subject: "JavaScript",
  introduce() {
    console.log(\`I am \${this.name}, and I teach \${this.subject}.\`);
  }
};

teacher.introduce();`,language:"javascript"}),e.jsxs("h3",{className:"text-lg font-semibold text-slate-200",children:["Important: ",e.jsx("code",{children:"this"})," depends on HOW the function is called"]}),e.jsx(t,{code:`const profile = {
  name: "Ritaja",
  course: "JS Beginner",
  show() {
    console.log(this.name);
  }
};

profile.show();      // Works: "Ritaja"

const ref = profile.show;
ref();                // ❌ Undefined (this is lost)`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["When extracted, ",e.jsx("code",{children:"this"})," loses its reference because it no longer knows which object it belongs to."]}),e.jsxs("h3",{className:"text-lg font-semibold text-slate-200",children:["Arrow Functions Do NOT Bind ",e.jsx("code",{children:"this"})]}),e.jsx(t,{code:`const obj = {
  name: "Pranjali",
  show: () => {
    console.log(this.name); 
    // ❌ Arrow functions don't have their own 'this'
  }
};

obj.show();`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Correct Use with Regular Method"}),e.jsx(t,{code:`const studentDetails = {
  name: "Susmita",
  marks: 93,
  display() {
    console.log(\`\${this.name}'s marks: \${this.marks}\`);
  }
};

studentDetails.display();`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Classroom Example — Coder & AccoTax"}),e.jsx(t,{code:`const batch = {
  batchName: "JS Intermediate",
  teacher: {
    name: "Mounita Bhandari",
    call() {
      console.log(\`Class Teacher: \${this.name}\`);
    }
  }
};

batch.teacher.call(); // this refers to teacher object`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Understanding ",e.jsx("code",{children:"this"})," is essential before working with constructors and ES6 classes."]})]})}export{c as default};

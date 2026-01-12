import{r as t,j as e,E as s}from"./index-Be2ZQ4sg.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Object Literals — Keys, Values & Methods"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In JavaScript, an ",e.jsx("strong",{children:"object"})," is a collection of key–value pairs. Each key is also known as a ",e.jsx("strong",{children:"property"}),", and the associated value can be anything — a string, number, array, another object, or even a function."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Object literals use a simple syntax with curly braces"," ",e.jsx("code",{children:"{}"}),". They form the foundation of JavaScript programming and are used everywhere — storing user details, settings, course info, API data, and more."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["At ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),", objects can represent entities like students, teachers, batches, or classroom data."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Basic Object"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"This example shows a simple student profile stored as an object. Each key stores one piece of information about the student."}),e.jsx(s,{language:"javascript",initialCode:`const student = {
  name: "Ritaja",
  course: "JavaScript",
  batch: "Morning",
  score: 92
};

console.log(student.name);
console.log(student.score);`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Notice how we access values using dot notation like"," ",e.jsx("code",{children:"student.name"})," and ",e.jsx("code",{children:"student.score"}),"."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Object With Method"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A method is simply a function defined inside an object. You can use methods to perform operations using the object’s own data, accessed through ",e.jsx("code",{children:"this"}),"."]}),e.jsx(s,{language:"javascript",initialCode:`const teacher = {
  name: "Sukanta Hui",
  subject: "JavaScript",
  institute: "Coder & AccoTax",

  introduce() {
    console.log(\`Hello, I am \${this.name}, teaching \${this.subject}.\`);
  }
};

teacher.introduce();`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Inside the ",e.jsx("code",{children:"introduce()"})," method,"," ",e.jsx("code",{children:"this.name"})," refers to the ",e.jsx("strong",{children:"teacher"})," object itself."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Classroom Example"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Objects can also contain nested data structures like arrays and other objects. This allows us to build complex models such as full student profiles."}),e.jsx(s,{language:"javascript",initialCode:`const studentProfile = {
  name: "Devangshu",
  city: "Barrackpore",
  enrolled: true,
  courses: ["JavaScript", "Python", "C"],
  marks: {
    js: 89,
    python: 92,
    c: 85
  },

  showReport() {
    console.log(\`\${this.name}'s JS score: \${this.marks.js}\`);
  }
};

studentProfile.showReport();`}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Here, ",e.jsx("strong",{children:"studentProfile"})," contains:"]}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:["A string (",e.jsx("code",{children:"name"}),")"]}),e.jsxs("li",{children:["A boolean (",e.jsx("code",{children:"enrolled"}),")"]}),e.jsxs("li",{children:["An array (",e.jsx("code",{children:"courses"}),")"]}),e.jsxs("li",{children:["A nested object (",e.jsx("code",{children:"marks"}),")"]}),e.jsxs("li",{children:["A method (",e.jsx("code",{children:"showReport()"}),")"]})]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"This shows how flexible and powerful JavaScript objects can be."}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Objects allow you to organize related data and functionality together — a major concept before learning about classes, prototypes, and full OOP in JavaScript."})]})}}export{n as default};

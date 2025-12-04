import{r as s,j as e}from"./index-C6HPKIo6.js";import{C as t}from"./CodeBlock-zYMhDGBn.js";import"./prism-json-Cn-Cbr_p.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Enhanced Object Literals (ES6)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["ES6 introduced several improvements to object literals, making object creation more concise, readable, and powerful. These enhanced features are widely used in modern JavaScript applications, including projects developed at",e.jsx("strong",{children:" Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Shorthand Property Syntax"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"When a variable name matches the object key, you can write it only once."}),e.jsx(t,{language:"javascript",code:`const name = "Ritaja";
const course = "JavaScript";

const student = {
  name,     // same as name: name
  course    // same as course: course
};

console.log(student);
/*
{ 
  name: "Ritaja",
  course: "JavaScript"
}
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:'2. Method Shorthand (No Need for "function" Keyword)'}),e.jsx(t,{language:"javascript",code:`const teacher = {
  name: "Sukanta Hui",

  // old way:
  // greet: function() { ... }

  // ES6 shorthand:
  greet() {
    console.log(\`Welcome to Coder & AccoTax!\`);
  }
};

teacher.greet();`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This shorthand makes object methods cleaner and easier to read."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Computed Property Names"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"You can create dynamic object keys using expressions inside square brackets."}),e.jsx(t,{language:"javascript",code:`const subject = "javascript";
const scoreKey = "score_" + subject;

const result = {
  name: "Mounita",
  [scoreKey]: 95
};

console.log(result);
/*
{
  name: "Mounita",
  score_javascript: 95
}
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Mixing All Enhanced Object Features"}),e.jsx(t,{language:"javascript",code:`const centre = "Coder & AccoTax";
const city = "Barrackpore";

function generateID(name) {
  return name.toLowerCase().replaceAll(" ", "_") + "_id";
}

const teacher = {
  name: "Chandan Das",
  centre,
  city,
  id: generateID("Chandan Das"),

  greet() {
    console.log(\`Hello, I am \${this.name} from \${this.centre}.\`);
  },

  [\`address_\${city}\`]: "25(10/A) Shibtala Road"
};

console.log(teacher);`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This combines shorthand properties, shorthand methods, and computed keys."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"5. Real-World Example — Student Management System"}),e.jsx(t,{language:"javascript",code:`const createStudent = (name, batch) => {
  return {
    name,
    batch,
    centre: "Coder & AccoTax",
    
    // computed property
    ["id_" + name.split(" ")[0].toLowerCase()]: Date.now(),

    // shorthand method
    display() {
      console.log(\`\${name} from batch \${batch} is enrolled at Coder & AccoTax.\`);
    }
  };
};

const student1 = createStudent("Kaustav", "JS-2025");
student1.display();`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Shorthand properties reduce repetition"}),e.jsxs("li",{children:["Shorthand methods remove the need for ",e.jsx("code",{children:"function"})]}),e.jsx("li",{children:"Computed properties allow dynamic keys"}),e.jsx("li",{children:"Useful for configs, APIs, object factories, and components"}),e.jsx("li",{children:"Heavily used in React, Node.js, JSON APIs"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Enhanced object literals make JavaScript objects modern, cleaner, and more expressive."})]})]})}}export{r as default};

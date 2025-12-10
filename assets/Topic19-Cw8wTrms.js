import{r as n,j as e,E as s}from"./index-C1Y0luCw.js";class l extends n.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Deep copy: structuredClone() and JSON technique"}),e.jsxs("p",{children:["In JavaScript, objects are assigned and copied by ",e.jsx("strong",{children:"reference"}),". This means when you copy an object using ",e.jsx("code",{children:"="})," or a shallow copy method (spread operator ",e.jsx("code",{children:"{...obj}"}),",",e.jsx("code",{children:"Object.assign()"}),", etc.), the nested objects are still shared between copies. Therefore, modifying one affects the other."]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"deep copy"})," creates a completely independent clone of the object and all its nested structures. This ensures that modifying the clone does NOT affect the original."]}),e.jsx("h3",{className:"text-lg font-semibold",children:"📌 Why Deep Copy is Needed"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"To avoid accidental mutations caused by reference sharing"}),e.jsx("li",{children:"To safely process API responses without modifying originals"}),e.jsx("li",{children:"To work with immutable patterns in React/Redux"}),e.jsx("li",{children:"To clone state objects before updating"})]}),e.jsx("h3",{className:"text-lg font-semibold",children:"📌 Methods for Deep Copy"}),e.jsx("p",{children:"There are two common approaches:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"structuredClone()"})," — A modern, built-in browser API that performs a true deep clone for most data types."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON.parse(JSON.stringify(...))"})," — An older but widely used trick that works for simple objects but has limitations."]})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("h3",{className:"text-lg font-semibold",children:["1️⃣ Deep Copy using ",e.jsx("code",{children:"structuredClone()"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"structuredClone()"})," is the most reliable and modern technique. It supports:"]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Objects"}),e.jsx("li",{children:"Arrays"}),e.jsx("li",{children:"Nested objects"}),e.jsx("li",{children:"Dates"}),e.jsx("li",{children:"Maps, Sets"}),e.jsx("li",{children:"Typed arrays"}),e.jsx("li",{children:"Many complex structures"})]}),e.jsxs("p",{className:"mt-2",children:["It ",e.jsx("strong",{children:"does not copy functions"})," or class instances, but for most data it is 100% accurate."]}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Deep copy using structuredClone (modern browsers)
const batch = {
  name: "Full Stack",
  mentor: { name: "Sukanta Hui", subject: "MERN" },
};

const deepCopy = structuredClone(batch); // deep copy

deepCopy.mentor.subject = "Java + Spring";

console.log("Original:", batch);
console.log("Deep copy:", deepCopy);`}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("h3",{className:"text-lg font-semibold",children:["2️⃣ Deep Copy using ",e.jsx("code",{children:"JSON.parse(JSON.stringify())"})]}),e.jsx("p",{children:"This method:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Converts the object into a JSON string"}),e.jsx("li",{children:"Then parses the string back into a new object"}),e.jsx("li",{children:"Removes all references to the original object"})]}),e.jsxs("p",{children:["It works well for simple objects containing only:",e.jsx("strong",{children:"strings, numbers, booleans, arrays, and plain objects"}),"."]}),e.jsxs("p",{children:["But it ",e.jsx("strong",{children:"fails for"}),": Dates, functions, undefined, Infinity, Maps, Sets, DOM nodes, and circular structures."]}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Deep copy using JSON.parse(JSON.stringify(...))
const student = {
  name: "Devangshu",
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Barrackpore",
    state: "West Bengal",
  },
};

const deepCopyStudent = JSON.parse(JSON.stringify(student));

deepCopyStudent.address.city = "Kolkata";
deepCopyStudent.skills.push("React");

console.log("Original:", student);
console.log("Deep copy:", deepCopyStudent);`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold",children:"3️⃣ Limitations of JSON Technique"}),e.jsx("p",{children:"The JSON method cannot handle many JavaScript data types. Below are common examples:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Date objects"})," become strings"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functions"})," are removed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"undefined"})," is removed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Infinity / NaN"})," become ",e.jsx("code",{children:"null"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maps, Sets"})," are lost"]}),e.jsxs("li",{children:["It cannot clone ",e.jsx("strong",{children:"circular references"})]})]}),e.jsxs("p",{className:"mt-2",children:["Because of these issues, ",e.jsx("strong",{children:"structuredClone()"})," is generally preferred when available."]}),e.jsx(s,{language:"javascript",initialCode:`// Example 3: Limitations of JSON technique
const data = {
  name: "Ritaja",
  joinedOn: new Date(),
  greet: function () {
    console.log("Hi!");
  },
};

const cloned = JSON.parse(JSON.stringify(data));

console.log("Original date:", data.joinedOn instanceof Date); // true
console.log("Cloned date:", cloned.joinedOn instanceof Date);  // false (string)
console.log("Original has greet:", typeof data.greet);         // function
console.log("Cloned has greet:", typeof cloned.greet);         // undefined`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg font-semibold",children:"📌 Summary"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"structuredClone()"})," for modern, safe deep copy."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"JSON.parse(JSON.stringify())"})," only for simple object structures."]}),e.jsx("li",{children:"Never use shallow copy when nested objects exist — changes will leak into the original due to reference sharing."})]})]})}}export{l as default};

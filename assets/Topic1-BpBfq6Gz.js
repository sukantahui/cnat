import{r as t,j as s}from"./index-BZGSCP2-.js";import{C as e}from"./CodeBlock-CNCibSCW.js";import"./prism-C_4M9PuG.js";import"./prism-json-D0UlpdKh.js";class o extends t.Component{render(){return s.jsxs("div",{className:"space-y-6",children:[s.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Parsing & Stringifying JSON (JSON.parse & JSON.stringify)"}),s.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"In JavaScript, we use two main methods to work with JSON:"}),s.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[s.jsxs("li",{children:[s.jsx("code",{children:"JSON.parse()"})," – convert JSON ",s.jsx("strong",{children:"string"})," →"," ","JavaScript object."]}),s.jsxs("li",{children:[s.jsx("code",{children:"JSON.stringify()"})," – convert JavaScript"," ",s.jsx("strong",{children:"object"})," → JSON string."]})]}),s.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. JSON.parse – String to Object"}),s.jsx(e,{language:"javascript",code:`const jsonText = \`
{
  "name": "Kaustav",
  "course": "JavaScript",
  "centre": "Coder & AccoTax"
}
\`;

const student = JSON.parse(jsonText);

console.log(student.name);   // "Kaustav"
console.log(student.centre); // "Coder & AccoTax"`}),s.jsxs("p",{className:"text-slate-400 text-sm",children:["If the JSON string is invalid (wrong quotes, trailing comma, etc.),",s.jsx("code",{children:"JSON.parse"})," will throw an error."]}),s.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. JSON.stringify – Object to String"}),s.jsx(e,{language:"javascript",code:`const result = {
  name: "Pranjali",
  batch: "Frontend-Pro",
  marks: { js: 90, es6: 94 }
};

const jsonText = JSON.stringify(result);

console.log(jsonText);
/*
Output is a JSON string:
"{\\"name\\":\\"Pranjali\\",\\"batch\\":\\"Frontend-Pro\\",\\"marks\\":{\\"js\\":90,\\"es6\\":94}}"
*/`}),s.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Pretty Printing JSON"}),s.jsxs("p",{className:"text-slate-300 text-sm",children:["You can pass extra arguments to ",s.jsx("code",{children:"JSON.stringify"})," to format the JSON nicely (useful when saving to a file or showing on screen)."]}),s.jsx(e,{language:"javascript",code:`const pretty = JSON.stringify(result, null, 2);
console.log(pretty);

/*
{
  "name": "Pranjali",
  "batch": "Frontend-Pro",
  "marks": {
    "js": 90,
    "es6": 94
  }
}
*/`}),s.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[s.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Use Cases in Coder & AccoTax Projects"}),s.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[s.jsx("li",{children:"Saving quiz results for students like Ritaja or Susmita."}),s.jsx("li",{children:"Storing settings in localStorage as JSON strings."}),s.jsx("li",{children:"Sending student data to a backend API."})]})]})]})}}export{o as default};

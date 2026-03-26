import{r as o,j as e}from"./index-DvCu507i.js";import{E as t}from"./EditableCodeBlock-irbxfOgu.js";import"./index-DJ7WIp_a.js";import"./braces-CpOUzPCd.js";import"./file-code-DYqCfTmb.js";import"./layout-list-BLGZKrRf.js";import"./play-Lz8WYqwT.js";import"./type-kKrhLZrm.js";import"./refresh-cw-Dpjf4dGO.js";import"./wand-sparkles-B3goWZLn.js";import"./copy-D0mr27ws.js";import"./download-DYJkcKhx.js";import"./eye-off-s53eWv69.js";import"./eye-4UAC578b.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 26 – Object.freeze(), Object.seal() and preventExtensions()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Object.freeze() – no changes allowed
const student = {
  name: "Ritaja",
  course: "Python",
  batch: "Morning",
};

Object.freeze(student);

student.course = "JavaScript"; // ignored
student.newProp = "Test";      // ignored
delete student.batch;          // ignored

console.log(student);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Object.seal() – can modify, cannot add/remove
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
};

Object.seal(teacher);

teacher.subject = "JavaScript + React"; // allowed
teacher.newProp = "Test";               // ignored
delete teacher.name;                    // ignored

console.log(teacher);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Object.preventExtensions() – cannot add, but can edit/delete
const batch = {
  name: "Weekend",
  students: 25,
};

Object.preventExtensions(batch);

batch.students = 30;       // allowed
delete batch.name;         // allowed
batch.trainer = "Tanusree"; // ignored

console.log(batch);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Checking status
const obj = {};

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false

const obj2 = { a: 1 };
Object.seal(obj2);
console.log(Object.isSealed(obj2));    // true

const obj3 = { a: 1 };
Object.freeze(obj3);
console.log(Object.isFrozen(obj3));    // true`})]})}}export{h as default};

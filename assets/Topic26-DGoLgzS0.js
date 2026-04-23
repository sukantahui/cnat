import{r as o,j as e}from"./index-CEi3MejZ.js";import{E as t}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 26 – Object.freeze(), Object.seal() and preventExtensions()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Object.freeze() – no changes allowed
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

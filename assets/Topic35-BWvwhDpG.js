import{r as s,j as e}from"./index-BXlhguQt.js";import{E as o}from"./EditableCodeBlock-BHKA4GgB.js";import"./index-DAzmlnHY.js";import"./braces-BulDhXKg.js";import"./file-code-DvrZGHOf.js";import"./layout-list-Cl2MPlEm.js";import"./play-Ch6qWl_k.js";import"./type-B7fVRfrN.js";import"./refresh-cw-C774EOhC.js";import"./wand-sparkles-DQE2mvpJ.js";import"./copy-ojBqBM7b.js";import"./download-B1njA82h.js";import"./eye-off-DugvWCj6.js";import"./eye-CFtYSo9m.js";class x extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 35 – Merging objects and checking object equality"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Merging with spread (...)
const baseInfo = {
  name: "Coder & AccoTax",
  city: "Barrackpore",
};

const contactInfo = {
  phone: "7003756860",
  website: "www.codernaccotax.co.in",
};

const merged = {
  ...baseInfo,
  ...contactInfo,
};

console.log(merged);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 2: Merging with Object.assign()
const studentBase = { name: "Ritaja" };
const details = { course: "Python", batch: "Morning" };

const fullStudent = Object.assign({}, studentBase, details);
console.log(fullStudent);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 3: Why direct comparison fails for objects
const a = { name: "Kaustav" };
const b = { name: "Kaustav" };

console.log(a === b); // false (different references)`}),e.jsx(o,{language:"javascript",initialCode:`// Example 4: Simple shallow equality check (keys + values)
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const s1 = { name: "Susmita", course: "Python" };
const s2 = { name: "Susmita", course: "Python" };
const s3 = { name: "Susmita", course: "Excel" };

console.log(shallowEqual(s1, s2)); // true
console.log(shallowEqual(s1, s3)); // false;`}),e.jsx(o,{language:"javascript",initialCode:`// Example 5: Deep equality (conceptual note)
// Deep equality for nested objects is more complex
// and usually done using libraries like Lodash (isEqual).`})]})}}export{x as default};

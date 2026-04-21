import{r as s,j as e}from"./index-ClZJ1mc6.js";import{E as o}from"./EditableCodeBlock-BXYM_mc5.js";import"./index-xzOXAXCa.js";import"./braces-eb68Uf93.js";import"./file-code-Bm_e03QA.js";import"./layout-list-BiKlVs3p.js";import"./play-DjoYwq9q.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./wand-sparkles-jep67qaE.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";import"./eye-off-vuCWj3VN.js";import"./eye-V2WDc2EC.js";class x extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 35 – Merging objects and checking object equality"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Merging with spread (...)
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

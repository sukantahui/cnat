import{r as e,j as t}from"./index-DI04DAgq.js";import{E as a}from"./EditableCodeBlock-C-yBK3EY.js";import"./index-dzV7gd_1.js";import"./braces-CK1RveI2.js";import"./file-code-oB44tEN2.js";import"./layout-list-CjY_Mh8i.js";import"./play-DnWShgnU.js";import"./type-DY6QvqBr.js";import"./refresh-cw-Evg5lk_v.js";import"./wand-sparkles-D38d5xON.js";import"./copy-DQfKP-RU.js";import"./download-DwVcN2kg.js";import"./eye-off-DDPcd9Hm.js";import"./eye-CmydJEzS.js";class j extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 16 – Looping arrays of objects using map, filter, reduce"}),t.jsx(a,{language:"javascript",initialCode:`// Example 1: map – get list of student names
const students = [
  { name: "Ritaja", course: "Python", marks: 92 },
  { name: "Mounita", course: "Advanced Excel", marks: 89 },
  { name: "Kaustav", course: "JavaScript", marks: 85 },
];

const names = students.map(function (student) {
  return student.name;
});

console.log(names);`}),t.jsx(a,{language:"javascript",initialCode:`// Example 2: filter – students scoring 90+
const students = [
  { name: "Pranjali", course: "Tally", marks: 91 },
  { name: "Susmita", course: "Python", marks: 88 },
  { name: "Devangshu", course: "React", marks: 95 },
];

const toppers = students.filter(function (student) {
  return student.marks >= 90;
});

console.log(toppers);`}),t.jsx(a,{language:"javascript",initialCode:`// Example 3: reduce – total and average marks
const results = [
  { name: "Ritaja", marks: 95 },
  { name: "Kaustav", marks: 88 },
  { name: "Swadeep", marks: 82 },
  { name: "Susmita", marks: 90 },
];

const total = results.reduce(function (sum, item) {
  return sum + item.marks;
}, 0);

const average = total / results.length;

console.log("Total:", total);
console.log("Average:", average);`}),t.jsx(a,{language:"javascript",initialCode:`// Example 4: chain filter + map
const batches = [
  { name: "Morning", trainer: "Sukanta Hui", students: 18 },
  { name: "Evening", trainer: "Tanusree Hui", students: 10 },
  { name: "Weekend", trainer: "Sukanta Hui", students: 25 },
];

const largeBatchesBySukanta = batches
  .filter(function (b) {
    return b.trainer === "Sukanta Hui" && b.students >= 20;
  })
  .map(function (b) {
    return b.name;
  });

console.log(largeBatchesBySukanta);`})]})}}export{j as default};

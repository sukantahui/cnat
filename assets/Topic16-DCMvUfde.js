import{r as e,j as t}from"./index-BRgF9Sn_.js";import{E as a}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class j extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 16 – Looping arrays of objects using map, filter, reduce"}),t.jsx(a,{language:"javascript",initialCode:`// Example 1: map – get list of student names
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

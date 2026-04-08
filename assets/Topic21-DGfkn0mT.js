import{r as s,j as e}from"./index-BzuofKLN.js";import{E as t}from"./EditableCodeBlock-10-XduS2.js";import"./index-oNHJacdj.js";import"./braces-8NDDru5C.js";import"./file-code-DwwjY6VY.js";import"./layout-list-CQsFm4dY.js";import"./play-BE0N2vFu.js";import"./type-Db2KOmYK.js";import"./refresh-cw-D-tBDlKL.js";import"./wand-sparkles-wHaUD34B.js";import"./copy-COUrsCfW.js";import"./download-CxzJPmmX.js";import"./eye-off-KrXik9Ul.js";import"./eye-DCjGMv77.js";class b extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
const student = {
  name: "Susmita",
  course: "Python for Data Analysis",
  batch: "Evening",
};

const { name, course } = student;

console.log(name);
console.log(course);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Renaming variables during destructuring
const teacher = {
  name: "Tanusree Hui",
  subject: "Accounts & Taxation",
};

const { name: teacherName, subject: mainSubject } = teacher;

console.log(teacherName);
console.log(mainSubject);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Nested destructuring
const institute = {
  name: "Coder & AccoTax",
  address: {
    city: "Barrackpore",
    state: "West Bengal",
  },
  courses: ["Python", "Excel", "Tally", "JavaScript"],
};

const {
  address: { city, state },
  courses: [firstCourse, secondCourse],
} = institute;

console.log(city, state);
console.log(firstCourse, secondCourse);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Destructuring in function parameters
function showStudent({ name, course, batch }) {
  console.log(name + " is in " + course + " (" + batch + ")");
}

const s = {
  name: "Devangshu",
  course: "React",
  batch: "Weekend",
};

showStudent(s);`})]})}}export{b as default};

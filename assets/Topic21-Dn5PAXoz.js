import{r as s,j as e}from"./index-CA8TNF9q.js";import{E as t}from"./EditableCodeBlock-D19ZyosX.js";import"./index-C4QWIY9d.js";import"./braces-DLulIgEJ.js";import"./file-code-D-G6C0cs.js";import"./layout-list-Bkf0ewxw.js";import"./play-Q15FUXyc.js";import"./type-Cv5vcz8o.js";import"./refresh-cw-DG8SgGrE.js";import"./wand-sparkles--Ul1pC_O.js";import"./copy-BjPaPwc6.js";import"./download-DfUNGLMk.js";import"./eye-off-bTjZ_r81.js";import"./eye-DHELtmKC.js";class b extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
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

import{r as s,j as e}from"./index-BRgF9Sn_.js";import{E as t}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class b extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
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

import{r as s,j as e}from"./index-D2oyZ1_5.js";import{E as t}from"./EditableCodeBlock-C7as2P9H.js";import"./index-D5TCWeEA.js";import"./braces-WZIYXDaQ.js";import"./file-code-1o3nobi9.js";import"./layout-list-B67Unsx-.js";import"./play-abl2IrEY.js";import"./type-H7d3bXn1.js";import"./refresh-cw-WPTBV80K.js";import"./wand-sparkles-jLNc7dpD.js";import"./copy-BCvCdePc.js";import"./download-DK6fs-E5.js";import"./eye-off-VLWNiJzP.js";import"./eye-DsKiv6FO.js";class b extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
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

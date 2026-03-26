import{r as s,j as e}from"./index-C8tfbTD8.js";import{E as t}from"./EditableCodeBlock-B43zle_x.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./file-code--LqktZ78.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./wand-sparkles-D7x0So5e.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";class b extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
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

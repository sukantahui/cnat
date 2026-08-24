import{r as s,j as e}from"./index-DQGlkDD-.js";import{E as t}from"./EditableCodeBlock-Dul0rTuD.js";import"./index-B5Ou1maK.js";import"./braces-DgkICGBe.js";import"./createLucideIcon-DkPaqQ-z.js";import"./file-code-BwO1T2yj.js";import"./layout-list-BRQeVJ0A.js";import"./play-C4es742M.js";import"./type-CTZVU0g7.js";import"./refresh-cw-wfEx28Pg.js";import"./minimize-2-tRCtfalc.js";import"./wand-sparkles-CHXCoPE3.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./eye-off-CtfkpLSn.js";import"./eye-DYTRtkpQ.js";class E extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 21 – Object destructuring and nested destructuring"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Basic object destructuring
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

showStudent(s);`})]})}}export{E as default};

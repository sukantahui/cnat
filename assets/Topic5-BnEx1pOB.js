import{r as t,j as e}from"./index-DkZ79-fG.js";import{C as s}from"./CodeBlock-BvT8xekU.js";import"./prism-CZ4Yk3_X.js";import"./prism-json-D0UlpdKh.js";class c extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"async / await & Error Handling with try / catch"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("strong",{children:"async/await"})," is a cleaner way to work with Promises. It lets you write asynchronous code that ",e.jsx("em",{children:"looks"})," like synchronous code, which is easier for students to read and understand."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Converting a Promise Chain to async/await"}),e.jsx(s,{language:"javascript",code:`function getStudent(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, centre: "Coder & AccoTax" }), 700);
  });
}

function getMarks(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, js: 93 }), 700);
  });
}

// Using async/await
async function showStudentReport() {
  console.log("Loading report for Susmita...");

  const student = await getStudent("Susmita");
  console.log("Student:", student);

  const marks = await getMarks(student.name);
  console.log("Marks:", marks);

  console.log("Report loaded for", student.name);
}

showStudentReport();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Error Handling with try / catch"}),e.jsx(s,{language:"javascript",code:`function getResult(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success
      if (success) {
        resolve({ name, total: 280 });
      } else {
        reject("Network error while fetching result");
      }
    }, 800);
  });
}

async function showResult() {
  try {
    console.log("Fetching result for Kaustav...");
    const result = await getResult("Kaustav");
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Result request finished (Coder & AccoTax).");
  }
}

showResult();`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Rules for async / await"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"async"})," before function to enable ",e.jsx("code",{children:"await"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"await"})," can only be used inside async functions."]}),e.jsxs("li",{children:["Wrap your awaits in ",e.jsx("code",{children:"try / catch"})," for proper error handling."]})]})]})]})}}export{c as default};

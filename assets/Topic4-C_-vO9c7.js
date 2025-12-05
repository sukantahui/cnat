import{r as t,j as e}from"./index-Zl8Up5rg.js";import{C as s}from"./CodeBlock-CAVeCCJO.js";import"./prism-json-D5nD2oDy.js";class a extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Creating & Consuming Promises"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In real-world applications (like Coder & AccoTax dashboards), you will often ",e.jsx("strong",{children:"create"})," your own Promises and"," ",e.jsx("strong",{children:"consume"})," them with ",e.jsx("code",{children:".then()"})," and"," ",e.jsx("code",{children:".catch()"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Wrapping setTimeout in a Promise"}),e.jsx(s,{language:"javascript",code:`function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(1000).then(() => {
  console.log("1 second over, continuing...");
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Simulate Fetching Student Details"}),e.jsx(s,{language:"javascript",code:`function getStudent(name) {
  return new Promise((resolve, reject) => {
    console.log("Fetching data for", name);

    setTimeout(() => {
      const found = true;
      if (found) {
        resolve({
          name,
          centre: "Coder & AccoTax",
          city: "Barrackpore"
        });
      } else {
        reject("Student not found");
      }
    }, 1000);
  });
}

getStudent("Swadeep")
  .then((student) => {
    console.log("Student info:", student);
  })
  .catch((error) => {
    console.log("Error:", error);
  });`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Chaining Promises"}),e.jsx(s,{language:"javascript",code:`function getMarks(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, js: 92, es6: 95 }), 800);
  });
}

getStudent("Pranjali")
  .then((student) => {
    console.log("Profile loaded:", student);
    return getMarks(student.name);
  })
  .then((marks) => {
    console.log("Marks loaded:", marks);
  })
  .catch((error) => {
    console.log("Error:", error);
  });`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Good Practices"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Always handle ",e.jsx("code",{children:".catch()"})," for errors."]}),e.jsx("li",{children:"Keep promise functions small and focused."}),e.jsxs("li",{children:["Return promises from within ",e.jsx("code",{children:".then()"})," to chain them."]})]})]})]})}}export{a as default};

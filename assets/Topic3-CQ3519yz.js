import{r as l,j as e}from"./index-CKUZy077.js";import{C as s}from"./CodeBlock-HaES_Wg7.js";import"./prism-json-B3O4EAvh.js";class n extends l.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Promises: States & then / catch / finally"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"Promise"})," represents a value that may be available now, later, or never. It has 3 main states:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"pending"})," – still working"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"fulfilled"})," – completed successfully"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"rejected"})," – failed with an error"]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Creating a Simple Promise"}),e.jsx(s,{language:"javascript",code:`const loadMarks = new Promise((resolve, reject) => {
  console.log("Fetching marks for Mounita from server...");

  setTimeout(() => {
    const success = true;
    if (success) {
      resolve(96);  // fulfilled
    } else {
      reject("Unable to load marks");
    }
  }, 1000);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. then() and catch()"}),e.jsx(s,{language:"javascript",code:`loadMarks
  .then((marks) => {
    console.log("Marks received:", marks);
  })
  .catch((error) => {
    console.log("Error:", error);
  });`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. finally()"}),e.jsx(s,{language:"javascript",code:`loadMarks
  .then((marks) => {
    console.log("Success:", marks);
  })
  .catch((error) => {
    console.log("Failed:", error);
  })
  .finally(() => {
    console.log("Operation finished for student marks (Coder & AccoTax).");
  });`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Why Promises are Better than Plain Callbacks"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Flat chaining instead of deep nesting."}),e.jsxs("li",{children:["Unified error handling with ",e.jsx("code",{children:".catch()"}),"."]}),e.jsxs("li",{children:["Clean final step with ",e.jsx("code",{children:".finally()"}),"."]})]})]})]})}}export{n as default};

import{r as l,j as e,E as s}from"./index-D1bhWpF_.js";class n extends l.Component{render(){return e.jsxs("div",{className:"space-y-10 animate-[fadeIn_0.8s_ease-out]",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300 tracking-wide animate-[slideDown_0.5s_ease-out]",children:"Promises: States & then / catch / finally"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed mt-2 animate-[fadeIn_1s_ease-out]",children:["A ",e.jsx("strong",{children:"Promise"})," represents a value that will be available",e.jsx("em",{children:" now"}),", ",e.jsx("em",{children:"later"}),", or ",e.jsx("em",{children:"never"}),". It helps handle asynchronous operations cleanly and avoids Callback Hell."]})]}),e.jsxs("div",{className:"p-4 border border-sky-700/50 bg-sky-900/20 rounded-xl shadow animate-[fadeIn_1.2s_ease-out]",children:[e.jsx("h4",{className:"text-sky-300 font-semibold text-sm mb-1",children:"🔵 Promise States"}),e.jsxs("ul",{className:"text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"pending"})," – still running"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"fulfilled"})," – operation succeeded"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"rejected"})," – operation failed"]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.6s_ease-out]",children:"1. Creating a Simple Promise"}),e.jsx(s,{initialCode:`const loadMarks = new Promise((resolve, reject) => {
  console.log("Fetching marks for Mounita from server...");

  setTimeout(() => {
    const success = true;

    if (success) {
      resolve(96); // fulfilled
    } else {
      reject("Unable to load marks");
    }
  }, 1000);
});`}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 animate-[fadeIn_1.1s_ease-out]",children:["Promises use ",e.jsx("code",{children:"resolve()"})," for success and ",e.jsx("code",{children:"reject()"})," for failure."]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.7s_ease-out]",children:"2. then() and catch()"}),e.jsx(s,{initialCode:`loadMarks
  .then((marks) => {
    console.log("Marks received:", marks);
  })
  .catch((error) => {
    console.log("Error:", error);
  });`}),e.jsxs("div",{className:"mt-2 p-3 rounded-xl bg-indigo-900/20 border border-indigo-700/50 text-slate-300 text-sm animate-[fadeIn_1.3s_ease-out]",children:["✔ ",e.jsx("code",{children:".then()"})," handles success ✔ ",e.jsx("code",{children:".catch()"})," handles errors"]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.8s_ease-out]",children:"3. finally()"}),e.jsx(s,{initialCode:`loadMarks
  .then((marks) => {
    console.log("Success:", marks);
  })
  .catch((error) => {
    console.log("Failed:", error);
  })
  .finally(() => {
    console.log("Operation finished for student marks (Coder & AccoTax).");
  });`}),e.jsxs("p",{className:"text-slate-400 text-sm mt-2 animate-[fadeIn_1.3s_ease-out]",children:[e.jsx("code",{children:".finally()"})," always runs—success or failure."]})]}),e.jsxs("section",{className:"p-5 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl animate-[fadeIn_1.6s_ease-out]",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"📌 Why Promises Improve Async Code"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Removes deep nesting seen in callback hell."}),e.jsx("li",{children:"Provides a clean way to handle success & failure."}),e.jsxs("li",{children:[e.jsx("code",{children:".finally()"})," offers a guaranteed cleanup step."]}),e.jsxs("li",{children:["Promises lead directly into ",e.jsx("strong",{children:"async/await"})," — the modern async style."]})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"In the next topic, you'll learn how Promises chain together smoothly."})]})]})}}export{n as default};

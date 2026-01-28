import{r as t,j as e,E as s}from"./index-Di8hoHjl.js";class i extends t.Component{render(){return e.jsxs("div",{className:"space-y-10 animate-[fadeIn_0.8s_ease-out]",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300 tracking-wide animate-[slideDown_0.5s_ease-out]",children:"Creating & Consuming Promises"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed mt-2 animate-[fadeIn_1s_ease-out]",children:["In real-world applications (like Coder & AccoTax dashboards), you will frequently ",e.jsx("strong",{children:"create your own Promises"})," to wrap async operations and ",e.jsx("strong",{children:"consume them"})," using ",e.jsx("code",{children:".then()"})," and"," ",e.jsx("code",{children:".catch()"}),"."]})]}),e.jsxs("div",{className:"p-4 border border-sky-700/50 bg-sky-900/20 rounded-xl shadow animate-[fadeIn_1.2s_ease-out]",children:[e.jsx("h4",{className:"text-sky-300 font-semibold text-sm mb-1",children:"💡 Why Create Promises?"}),e.jsxs("ul",{className:"text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Wrap async tasks like timers, API calls, file loads."}),e.jsx("li",{children:"Make async code easier to read."}),e.jsx("li",{children:"Allow chaining using `.then() → then() → catch()`."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.6s_ease-out]",children:"1. Wrapping setTimeout in a Promise"}),e.jsx(s,{initialCode:`function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(1000).then(() => {
  console.log("1 second over, continuing...");
});`}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"This is the foundation for creating custom async utility functions."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.7s_ease-out]",children:"2. Simulate Fetching Student Details"}),e.jsx(s,{initialCode:`function getStudent(name) {
  return new Promise((resolve, reject) => {
    console.log("Fetching data for", name);

    setTimeout(() => {
      const found = true;

      if (found) {
        resolve({
          name,
          centre: "Coder & AccoTax",
          city: "Barrackpore",
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
  });`}),e.jsx("div",{className:"mt-2 p-3 rounded-xl bg-indigo-900/20 border border-indigo-700/50 text-slate-300 text-sm",children:"✔ Demonstrates resolving & rejecting ✔ Perfect for API simulation in teaching dashboards"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 animate-[slideRight_0.8s_ease-out]",children:"3. Chaining Promises"}),e.jsx(s,{initialCode:`function getMarks(name) {
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
  });`}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Promise chaining keeps async logic clean and linear."})]}),e.jsxs("section",{className:"p-5 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl animate-[fadeIn_1.4s_ease-out]",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"📘 Good Practices"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Always handle ",e.jsx("code",{children:".catch()"})," to avoid crashes."]}),e.jsx("li",{children:"Break functions into small reusable async utilities."}),e.jsxs("li",{children:["Return promises inside ",e.jsx("code",{children:".then()"})," for proper chaining."]}),e.jsx("li",{children:"Use Promises before switching to async/await."})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Next you will learn Promise Chaining → Async/Await conversion."})]})]})}}export{i as default};

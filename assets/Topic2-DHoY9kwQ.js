import{r,j as e}from"./index-BXt4ulM1.js";import{C as s}from"./CodeBlock-BmwID-oP.js";import"./prism-json-CWxDRerp.js";class n extends r.Component{render(){return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 py-10 px-4",children:e.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"try, catch, finally & Throwing Custom Errors"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In JavaScript, ",e.jsx("code",{children:"try…catch"})," is the primary tool for handling unexpected runtime errors. At ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),", students like Ritaja, Mounita and Devangshu learn to use structured error handling for building robust, real-world applications."]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-3",children:"1. Basic try…catch"}),e.jsxs("p",{className:"text-slate-300 text-sm mb-3",children:["Code inside ",e.jsx("code",{children:"try"})," runs normally. If an error happens, JavaScript immediately jumps to ",e.jsx("code",{children:"catch"}),"."]}),e.jsx(s,{language:"javascript",code:`try {
  console.log(unknownVariable);  // ❌ ReferenceError
} catch (error) {
  console.log("An error occurred:", error.message);
}
`})]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-3",children:"2. finally Block"}),e.jsxs("p",{className:"text-slate-300 text-sm mb-3",children:["The ",e.jsx("code",{children:"finally"})," block always executes—whether an error occurs or not. Useful for: ✔ closing connections ✔ resetting UI ✔ cleaning up timers"]}),e.jsx(s,{language:"javascript",code:`try {
  console.log("Processing result for student Susmita...");
  throw new Error("Marks not found");
} catch (e) {
  console.log("Error:", e.message);
} finally {
  console.log("Cleanup tasks complete."); // Always runs
}
`})]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-3",children:"3. Throwing Custom Errors"}),e.jsxs("p",{className:"text-slate-300 text-sm mb-3",children:["You can throw your own custom errors. This is extremely useful in large projects built by teams like those trained by",e.jsx("strong",{children:" Sukanta Hui & Tanusree Hui "}),"."]}),e.jsx(s,{language:"javascript",code:`function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  return age;
}

try {
  validateAge(-5);
} catch (err) {
  console.log("Validation failed:", err.message);
}
`}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Custom errors help enforce rules in your application logic."})]}),e.jsxs("section",{className:"p-6 bg-slate-900/50 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-3",children:"Real-World Example"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In a student management system built at Coder & AccoTax, a missing field like ",e.jsx("em",{children:"student.city"})," could trigger a custom error to guide developers during debugging."]}),e.jsx(s,{language:"javascript",code:`function getStudentCity(student) {
  if (!student.city) {
    throw new Error("City information missing for student " + student.name);
  }
  return student.city;
}

try {
  getStudentCity({ name: "Devangshu" });
} catch (err) {
  console.log(err.message);
}
`})]})]})})}}export{n as default};

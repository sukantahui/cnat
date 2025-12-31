import{r as t,j as e}from"./index-By8I_gO0.js";import{C as s}from"./CodeBlock-CV9ZVcqY.js";import"./prism-QVK8_wBl.js";import"./prism-json-D0UlpdKh.js";class i extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Optional Chaining (?.) & Nullish Coalescing (??)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Optional chaining and nullish coalescing are two powerful ES2020 features that help you write safer and cleaner code — especially when working with deeply nested objects, API data, or optional values. These features are widely used in modern JavaScript projects, including those taught at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Optional Chaining (?.)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Optional chaining safely accesses nested properties without throwing errors."}),e.jsx(s,{language:"javascript",code:`const student = {
  name: "Ritaja",
  address: {
    city: "Barrackpore"
  }
};

console.log(student.address?.city);  // "Barrackpore"
console.log(student.address?.pin);   // undefined (no error)
console.log(student.contact?.phone); // undefined (no error)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Without ",e.jsx("code",{children:"?."})," the code would crash with:",e.jsx("em",{children:"“Cannot read properties of undefined”"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Optional Chaining in Function Calls"}),e.jsx(s,{language:"javascript",code:`const teacher = {
  name: "Sukanta Hui",
  greet() {
    return "Welcome to Coder & AccoTax!";
  }
};

console.log(teacher.greet?.());  // works
console.log(teacher.sayHello?.()); // undefined, no error`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Optional Chaining with Arrays"}),e.jsx(s,{language:"javascript",code:`const classList = {
  students: ["Mounita", "Kaustav", "Swadeep"]
};

console.log(classList.students?.[0]);  // "Mounita"
console.log(classList.members?.[0]);   // undefined`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Nullish Coalescing (??)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("strong",{children:"??"})," operator returns the right-hand value only when the left-hand value is",e.jsx("strong",{children:"null or undefined"}),"."]}),e.jsx(s,{language:"javascript",code:`let marks = 0;

console.log(marks ?? 50); // 0  (valid value, not replaced)
console.log(null ?? 50);  // 50
console.log(undefined ?? 50); // 50`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Unlike ",e.jsx("code",{children:"||"}),", it does NOT treat ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," as “false”."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"5. Optional Chaining + Nullish Coalescing (Best Combo)"}),e.jsx(s,{language:"javascript",code:`const apiResponse = {
  student: {
    name: "Susmita",
    scores: {
      javascript: 94
    }
  }
};

const jsScore = apiResponse.student?.scores?.javascript ?? "Not Available";

console.log(jsScore); // 94`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Safe access + safe fallback = perfect for API results."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"6. Practical Example — Handling API Data Safely"}),e.jsx(s,{language:"javascript",code:`const dataFromServer = {
  user: {
    profile: {
      name: "Devangshu"
    }
  }
};

// Without safety:
console.log(dataFromServer.user.profile.name); // OK
// console.log(dataFromServer.user.address.city); // ❌ would crash

// With Optional Chaining:
console.log(dataFromServer.user.address?.city ?? "City Not Provided");
// "City Not Provided"`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"?."})," to safely access nested properties"]}),e.jsx("li",{children:"Prevents “undefined” runtime errors"}),e.jsxs("li",{children:[e.jsx("code",{children:"??"})," provides fallback only when value is null/undefined"]}),e.jsx("li",{children:"Perfect for API data, form data, optional values"}),e.jsxs("li",{children:["Use together: ",e.jsx("code",{children:'obj?.value ?? "fallback"'})]})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These two features make JavaScript applications safer and more reliable."})]})]})}}export{i as default};

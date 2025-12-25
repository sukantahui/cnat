import{r as t,j as e}from"./index-BaXQSoRC.js";import{C as s}from"./CodeBlock-DB4cO7T9.js";import"./prism-BemPbDLx.js";import"./prism-json-D0UlpdKh.js";class c extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"HTTP Basics: Methods (GET, POST) & Status Codes"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["When we call a web API using ",e.jsx("code",{children:"fetch()"}),", we are sending an"," ",e.jsx("strong",{children:"HTTP request"}),". HTTP defines methods (verbs) and status codes for communication between client (browser) and server."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Common HTTP Methods"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GET"})," – fetch data (e.g. marks, profiles)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST"})," – send new data (e.g. submit a test)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PUT"})," / ",e.jsx("strong",{children:"PATCH"})," – update existing data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DELETE"})," – delete data."]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Status Codes (Overview)"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"200"})," – OK (success)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"201"})," – Created (new resource created)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"400"})," – Bad Request (client sent something invalid)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"401"})," – Unauthorized (login/auth required)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"404"})," – Not Found (wrong URL or missing resource)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"500"})," – Internal Server Error (problem on server side)."]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Simple GET Example"}),e.jsx(s,{language:"javascript",code:`// Safe mock API: JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Status:", response.status); // e.g. 200
    return response.json();
  })
  .then((data) => {
    console.log("Post data:", data);
  })
  .catch((error) => {
    console.log("Network error:", error);
  });`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"4. Simple POST Example"}),e.jsx(s,{language:"javascript",code:`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "JS Practice",
    body: "Async & JSON with Sukanta Hui at Coder & AccoTax",
    userId: 1
  })
})
  .then((res) => res.json())
  .then((created) => {
    console.log("Created post:", created);
  })
  .catch((error) => {
    console.log("Error creating post:", error);
  });`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Exam + Interview Tip"}),e.jsx("p",{className:"text-slate-300 text-sm mt-2",children:"Always remember the basic meanings: 2xx = success, 4xx = client error, 5xx = server error. And GET vs POST is very commonly asked."})]})]})}}export{c as default};

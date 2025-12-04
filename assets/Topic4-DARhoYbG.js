import{r as t,j as e}from"./index-C6pgtZUT.js";import{C as s}from"./CodeBlock-BePmQll_.js";import"./prism-javascript-Bfk15s6t.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Handling Responses, Errors & Loading States"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In a real front-end app, it's not enough to just call"," ",e.jsx("code",{children:"fetch()"}),". You must also handle:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Loading state"})," – while waiting for response."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success state"})," – when data is loaded."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error state"})," – network or HTTP errors."]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Conceptual Example (Pseudo React)"}),e.jsx(s,{language:"javascript",code:`async function loadStudent() {
  let loading = true;
  let error = null;
  let data = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3");

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    data = await res.json();
  } catch (err) {
    error = err.message;
  } finally {
    loading = false;
  }

  console.log({ loading, error, data });
}

loadStudent();`}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In React, you would typically store ",e.jsx("code",{children:"loading"}),","," ",e.jsx("code",{children:"error"})," and ",e.jsx("code",{children:"data"})," in state and show different UI based on these."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Differentiating Network vs HTTP Errors"}),e.jsx(s,{language:"javascript",code:`async function safeFetch(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      // HTTP error (like 404, 500)
      console.log("HTTP error:", res.status);
      return;
    }

    const data = await res.json();
    console.log("Data received:", data);
  } catch (error) {
    // Network error (no internet, DNS failure etc.)
    console.log("Network error:", error.message);
  }
}

safeFetch("https://jsonplaceholder.typicode.com/users/999999");`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Good UI Practices (for your future projects)"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:'Show a spinner or "Loading student data..." message.'}),e.jsx("li",{children:"Show friendly error messages (not just raw status codes)."}),e.jsx("li",{children:"Provide a retry button if loading fails."})]})]})]})}}export{n as default};

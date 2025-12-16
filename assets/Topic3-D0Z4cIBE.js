import{r as t,j as e}from"./index-BMdPLlUD.js";import{C as s}from"./CodeBlock-C-fftQnp.js";import"./prism-json-C2TBqc87.js";class l extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Using fetch() to Call Public APIs"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The ",e.jsx("code",{children:"fetch()"})," function is a modern way to make HTTP requests from the browser. It returns a ",e.jsx("strong",{children:"Promise"}),", so you can use",e.jsx("code",{children:".then()"})," or ",e.jsx("code",{children:"async/await"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Basic fetch() Pattern"}),e.jsx(s,{language:"javascript",code:`fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    // We first check if response is OK (status is 200-299)
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return response.json(); // Parse JSON body
  })
  .then((data) => {
    console.log("User data:", data);
  })
  .catch((error) => {
    console.log("Network or HTTP error:", error.message);
  });`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. fetch() with async/await"}),e.jsx(s,{language:"javascript",code:`async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const user = await response.json();
    console.log("User loaded:", user);
  } catch (error) {
    console.log("Failed to load user:", error.message);
  }
}

loadUser();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Example: Fetch a Fake Product (DummyJSON)"}),e.jsx(s,{language:"javascript",code:`async function loadProduct() {
  const url = "https://dummyjson.com/products/1";
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Product title:", data.title);
    console.log("Price:", data.price);
  } catch (error) {
    console.log("Error fetching product:", error);
  }
}

loadProduct();`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"How This Fits in Coder & AccoTax Projects"}),e.jsx("p",{className:"text-slate-300 text-sm mt-2",children:"In real web apps, you might fetch:"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Student list (e.g., Ritaja, Mounita, Swadeep)."}),e.jsx("li",{children:"Test scores and analytics."}),e.jsx("li",{children:"Course details (JavaScript, Python, Tally, GST, etc.)."})]})]})]})}}export{l as default};

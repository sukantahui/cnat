import{r as a,j as e}from"./index-CpnbXr33.js";import{C as t}from"./CodeBlock-BUCichjU.js";import"./prism-json-8HkH3jAU.js";class i extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Form Handling & Simple Validation in JavaScript"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Forms allow users to input information. In JavaScript, validating a form before submission is very important — especially in real applications like Coder & AccoTax admission forms."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Basic HTML Form"}),e.jsx(t,{language:"html",code:`<form id="myForm">
  <input type="text" id="nameInput" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from refreshing
  const n = document.getElementById("nameInput").value;

  if (n.trim() === "") {
    alert("Name cannot be empty");
    return;
  }

  alert("Form submitted by " + n);
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"If Devangshu or Pranjali enters nothing → validation stops the form."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"2. Email Validation"}),e.jsx(t,{language:"html",code:`<form id="emailForm">
  <input type="email" id="email" placeholder="Enter email" />
  <button>Submit</button>
</form>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  const pattern = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;

  if (!pattern.test(email)) {
    alert("Invalid email. Try again.");
    return;
  }

  alert("Valid Email: " + email);
});`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["This is the same pattern teachers like ",e.jsx("strong",{children:"Sukanta Hui"})," and",e.jsx("strong",{children:" Tanusree Hui"})," teach in JS classes."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"3. Mark Entry Validation (Coder & AccoTax)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"In practice, we often validate whether marks are within a valid range."}),e.jsx(t,{language:"html",code:`<form id="marksForm">
  <input type="number" id="marks" placeholder="Enter marks (0–100)" />
  <button>Check</button>
</form>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("marksForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const m = parseInt(document.getElementById("marks").value);

  if (isNaN(m) || m < 0 || m > 100) {
    alert("Invalid Marks! Enter 0–100.");
    return;
  }

  alert("Marks Entered: " + m);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Admission Form Example – Coder & AccoTax (Barrackpore)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["This example shows validation similar to the real admission form students like ",e.jsx("strong",{children:"Ritaja"}),", ",e.jsx("strong",{children:"Mounita"}),", ",e.jsx("strong",{children:"Susmita"})," fill at Coder & AccoTax."]}),e.jsx(t,{language:"html",code:`<form id="admissionForm">
  <input type="text" id="studentName" placeholder="Full Name" />
  <input type="number" id="age" placeholder="Age" />
  <input type="text" id="course" placeholder="Preferred Course" />
  <button>Submit</button>
</form>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const course = document.getElementById("course").value.trim();

  if (name === "" || age === "" || course === "") {
    alert("All fields are required");
    return;
  }

  if (age < 10 || age > 60) {
    alert("Age must be between 10 and 60");
    return;
  }

  alert("Admission Form Submitted Successfully! Welcome " + name);
});`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"submit"})," event triggers form validation"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"preventDefault()"})," stops the page refresh"]}),e.jsx("li",{children:"Validate empty fields, email format, number range"}),e.jsx("li",{children:"Useful for login forms, registration forms, admission forms"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Coder & AccoTax teaches these patterns in real-world JavaScript workshops in Barrackpore."})]})]})}}export{i as default};

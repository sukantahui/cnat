import{r as a,j as e,m as t,a as s}from"./index-BjvXoeSR.js";class r extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Accessing Values Using Keys"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Creating dictionaries is easy.",e.jsx("strong",{children:"Accessing them safely"})," is what separates beginners from professionals."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"In this topic, we will understand what really happens when Python looks for a key."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Basic Access Using Square Brackets ",e.jsx("code",{children:"[]"})]}),e.jsx(s,{title:"Accessing Existing Keys",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

print(student["name"])
print(student["age"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Fast ✔ Direct ✔ Returns the actual value (no wrapper)"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Rule: Use ",e.jsx("code",{children:"[]"})," only when you are 100% sure the key exists."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type of Dictionary Access"}),e.jsx(s,{title:"Return Type Demonstration",initialCode:`data = {
  "count": 10,
  "price": 99.5,
  "active": True
}

value = data["price"]

print(value)
print(type(value))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ The returned value keeps its original data type ✔ Python does NOT convert or wrap it"}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Secret Insight: Dictionaries are transparent — no hidden transformations."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"The KeyError — Why Programs Crash"}),e.jsx(s,{title:"Accessing a Missing Key (Danger Zone)",initialCode:`student = {
  "name": "Swadeep",
  "age": 15
}

# This key does NOT exist
print(student["marks"])`}),e.jsxs("p",{className:"text-sm text-amber-300",children:["⚠ This raises a ",e.jsx("strong",{children:"KeyError"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Python does NOT guess. If the key is missing, execution stops immediately."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Why Python Raises KeyError (Important Concept)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Python dictionaries are built for ",e.jsx("strong",{children:"speed"}),". They jump directly to a memory location using the key’s hash."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"If the key is not found, Python raises an error instead of returning fake or misleading data."}),e.jsx("p",{className:"text-sm text-emerald-300",children:"🔐 No key → No value → No compromise"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Safe Access Pattern Using ",e.jsx("code",{children:"in"})]}),e.jsx(s,{title:"Checking Key Existence Before Access",initialCode:`student = {
  "name": "Kaustav",
  "age": 16
}

if "age" in student:
    print(student["age"])
else:
    print("Age not found")`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Prevents crashes ✔ Very readable ✔ Frequently used in real-world code"}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Tip: This pattern shows defensive programming."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Accessing Values in Nested Dictionaries"}),e.jsx(s,{title:"Nested Dictionary Access",initialCode:`profile = {
  "name": "Mounita",
  "address": {
    "city": "Kolkata",
    "pin": 700120
  }
}

print(profile["address"]["city"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Access layer by layer ⚠ Any missing key in the chain causes KeyError"})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Using index numbers instead of keys"}),e.jsxs("li",{children:["Assuming missing keys return ",e.jsx("code",{children:"None"})," (they don’t)"]}),e.jsx("li",{children:"Accessing nested keys without validation"}),e.jsx("li",{children:"Confusing dictionary access with list access"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic3 — Core Takeaways"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"[]"})," access is fast but unsafe for unknown keys"]}),e.jsx("li",{children:"Missing keys raise KeyError"}),e.jsx("li",{children:"Returned value keeps its original type"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"in"})," to check existence"]}),e.jsx("li",{children:"Nested access requires extra care"})]})]})]})}}export{r as default};

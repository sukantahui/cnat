import{r as a,j as e,m as t,a as s}from"./index-4R51NWjb.js";class l extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Handling Missing Keys Safely"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Accessing dictionary values blindly leads to crashes. Professional code always has a ",e.jsx("strong",{children:"fallback strategy"}),"."]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["This topic introduces Python’s safest and most elegant solution:",e.jsx("code",{className:"ml-1",children:"get()"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"The Problem: KeyError Recap"}),e.jsx(s,{title:"Unsafe Access Recap",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

# Unsafe access
print(student["marks"])`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Program crashes if the key does not exist."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"The Solution: dict.get()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"get()"})," searches for a key and returns a value",e.jsx("strong",{children:"without raising an error"}),"."]}),e.jsx(s,{title:"Basic get() Usage",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

print(student.get("name"))
print(student.get("marks"))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Existing key → returns value ✔ Missing key → returns ",e.jsx("code",{children:"None"})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type Behavior of get()"}),e.jsx(s,{title:"Understanding Return Types",initialCode:`data = {
  "count": 10
}

value1 = data.get("count")
value2 = data.get("price")

print(value1, type(value1))
print(value2, type(value2))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Existing key → original data type ✔ Missing key → ",e.jsx("code",{children:"NoneType"})]}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Insight:",e.jsx("code",{children:"None"})," is Python’s way of saying “no value”."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Using Default Values with get()"}),e.jsx("p",{className:"text-sm text-slate-300",children:"You can provide a fallback value if the key is missing."}),e.jsx(s,{title:"get() with Default Value",initialCode:`student = {
  "name": "Swadeep",
  "age": 15
}

print(student.get("marks", 0))
print(student.get("city", "Unknown"))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Prevents ",e.jsx("code",{children:"None"}),"✔ Makes intent explicit"]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Real-World Pattern: Configuration Reading"}),e.jsx(s,{title:"Configuration Dictionary Example",initialCode:`config = {
  "theme": "dark",
  "timeout": 30
}

timeout = config.get("timeout", 60)
language = config.get("language", "en")

print(timeout)
print(language)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Default values ensure app stability ✔ Used heavily in production systems"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"get() vs [] — Professional Comparison"}),e.jsx(s,{title:"Comparison Demonstration",initialCode:`data = {"x": 10}

# Safe
print(data.get("y", 0))

# Unsafe (commented to prevent crash)
# print(data["y"])`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ ",e.jsx("code",{children:"get()"})," = safe & flexible ❌ ",e.jsx("code",{children:"[]"})," = strict & crash-prone"]})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:["Assuming ",e.jsx("code",{children:"get()"})," raises KeyError (it doesn’t)"]}),e.jsxs("li",{children:["Forgetting default values and handling ",e.jsx("code",{children:"None"})]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"[]"})," in user-input driven code"]}),e.jsxs("li",{children:["Confusing missing key with key having value ",e.jsx("code",{children:"None"})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: How Professionals Decide"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["✔ Use ",e.jsx("code",{children:"[]"})," when key MUST exist ✔ Use ",e.jsx("code",{children:"get()"})," when key MAY exist ✔ Use default values for safe fallbacks"]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic4 — Safety Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"get()"})," never raises KeyError"]}),e.jsxs("li",{children:["Missing keys return ",e.jsx("code",{children:"None"})]}),e.jsx("li",{children:"Default values prevent surprises"}),e.jsx("li",{children:"Professional code favors safety"})]})]})]})}}export{l as default};

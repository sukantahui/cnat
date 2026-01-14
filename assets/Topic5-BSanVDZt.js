import{r as a,j as e,m as s,a as t}from"./index-CjrfwjvR.js";class l extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(s.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Adding & Updating Key-Value Pairs"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Dictionaries are ",e.jsx("strong",{children:"mutable"}),". This means their content can change after creation."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Understanding mutation prevents silent logic bugs in real projects."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Adding a New Key-Value Pair"}),e.jsx(t,{title:"Adding a New Entry",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

student["class"] = 9

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ New key added ✔ Dictionary modified in place"}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Rule: Assignment always mutates the dictionary."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Updating an Existing Key"}),e.jsx(t,{title:"Updating an Existing Value",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

student["age"] = 15

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Same syntax ✔ Old value replaced silently"}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ No error is raised for overwriting values."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Add vs Update — Same Syntax, Different Meaning"}),e.jsx(t,{title:"Add vs Update Comparison",initialCode:`data = {"x": 10}

data["y"] = 20   # add
data["x"] = 99   # update

print(data)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Python does NOT differentiate ✔ Programmer must know the intent"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Value of Assignment (Important!)"}),e.jsx(t,{title:"Assignment Returns Nothing",initialCode:`data = {}

result = data.__setitem__("a", 1)

print(result)
print(data)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Assignment returns ",e.jsx("code",{children:"None"}),"✔ Mutation happens in place"]}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Insight: Dictionary mutation is about side effects, not return values."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Dynamic Updates (Real-World Pattern)"}),e.jsx(t,{title:"Updating Dictionary in a Loop",initialCode:`scores = {}

names = ["Ritaja", "Swadeep", "Mounita"]

for name in names:
    scores[name] = len(name) * 10

print(scores)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Common in data processing ✔ Used in counters, mappings, aggregations"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Silent Overwrite — The Hidden Danger"}),e.jsx(t,{title:"Silent Overwrite Example",initialCode:`config = {
  "timeout": 30
}

config["timeout"] = 10  # accidental overwrite

print(config)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Python will NOT warn you."}),e.jsx("p",{className:"text-sm text-slate-400",children:"Always be careful when updating existing keys."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Safe Update Pattern (Professional Habit)"}),e.jsx(t,{title:"Checking Before Updating",initialCode:`config = {"timeout": 30}

if "timeout" in config:
    config["timeout"] = 60

print(config)`}),e.jsx("p",{className:"text-sm text-emerald-300",children:"✔ Defensive coding ✔ Prevents unintended mutation"})]}),e.jsxs(s.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic5 — Mutation Rules to Remember"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Dictionaries are mutable"}),e.jsx("li",{children:"Same syntax adds or updates"}),e.jsx("li",{children:"Updates overwrite silently"}),e.jsx("li",{children:"Assignment returns nothing"}),e.jsx("li",{children:"Professional code checks intent"})]})]})]})}}export{l as default};

import{r as a,j as e,m as s}from"./index-CUXXvONC.js";import{E as t}from"./EditablePythonCodeBlock-Dpqbbyu1.js";import"./index-CBpdwEID.js";import"./createLucideIcon-O_Er4fpW.js";import"./braces-B4AyVXmG.js";import"./layout-list-GoT0ASd9.js";import"./play-DNNbdgtV.js";import"./type-Bunlk4m9.js";import"./refresh-cw-BO9f_BLL.js";import"./copy-rP0aAxF9.js";import"./download-C-zK-a1m.js";import"./eye-off-DR1p6kU7.js";import"./eye-CH8Le7yy.js";class g extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(s.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Dictionary Structure — Keys & Values"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Every dictionary entry is a ",e.jsx("strong",{children:"pair"}),": a ",e.jsx("em",{children:"key"})," that describes the data and a ",e.jsx("em",{children:"value"})," that stores it."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"If you misunderstand keys and values, dictionaries will always feel “unstable”. Let’s remove that confusion permanently."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"What Is a Key?"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A ",e.jsx("strong",{children:"key"})," is an identifier. It answers the question: ",e.jsx("em",{children:"“What does this value represent?”"})]}),e.jsx(t,{title:"Basic Key → Value Relationship",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

print(student["name"])`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ ",e.jsx("code",{children:'"name"'})," is the key ✔ ",e.jsx("code",{children:'"Ritaja"'})," is the value"]}),e.jsx("p",{className:"text-sm text-emerald-300",children:"🔑 Teacher Rule: If a word makes sense as a question, it is a good key."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Valid Key Types (Very Important)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Keys must be ",e.jsx("strong",{children:"immutable"}),". That means their value cannot change after creation."]}),e.jsx(t,{title:"Valid Dictionary Keys",initialCode:`data = {
  "roll": 10,        # string key
  42: "answer",     # integer key
  (1, 2): "point"   # tuple key
}

print(data["roll"])
print(data[42])
print(data[(1, 2)])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Strings ✔ Numbers ✔ Tuples (only if they contain immutable elements)"}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Exam Insight: “Which of the following can be a dictionary key?” is a classic question."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Invalid Key Types (Why Python Refuses)"}),e.jsx(t,{title:"Invalid Dictionary Keys (Conceptual)",initialCode:`# These will raise TypeError

# list as key (mutable)
# d = { [1, 2, 3]: "list key" }

# dictionary as key (mutable)
# d = { {"a": 1}: "dict key" }

print("Lists and dictionaries cannot be keys")`}),e.jsx("p",{className:"text-sm text-slate-400",children:"❌ Lists can change ❌ Dictionaries can change 🔐 Hashing would break → Python blocks it"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Secret Memory Trick:",e.jsx("strong",{children:"If it can change, it cannot be a key."})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"What Is a Value?"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A ",e.jsx("strong",{children:"value"})," is the actual data. Python places ",e.jsx("strong",{children:"no restriction"})," on value types."]}),e.jsx(t,{title:"Values Can Be Any Data Type",initialCode:`profile = {
  "name": "Swadeep",
  "age": 15,
  "marks": [85, 90, 88],
  "address": {
    "city": "Kolkata",
    "pin": 700120
  }
}

print(profile["marks"])
print(profile["address"]["city"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Values can be primitive ✔ Values can be collections ✔ Values can be nested dictionaries"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Duplicate Keys — Silent Overwrite (Danger Zone)"}),e.jsx(t,{title:"Duplicate Key Behavior",initialCode:`data = {
  "a": 1,
  "b": 2,
  "a": 100
}

print(data)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["❗ The first ",e.jsx("code",{children:'"a"'})," is silently overwritten."]}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Exam Trap: Python does NOT throw an error for duplicate keys."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type Clarity (Hidden but Crucial)"}),e.jsx(t,{title:"Accessing a Value — Return Type",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

value = student["age"]

print(value)
print(type(value))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Dictionary access returns the ",e.jsx("strong",{children:"exact type"})," of the value."]}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Insight: Dictionaries do NOT wrap values — they return them raw."})]}),e.jsxs(s.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic1 — What Must Be Crystal Clear"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Keys identify meaning"}),e.jsx("li",{children:"Keys must be immutable"}),e.jsx("li",{children:"Values can be anything"}),e.jsx("li",{children:"Duplicate keys overwrite silently"}),e.jsx("li",{children:"Dictionary access returns raw value type"})]})]})]})}}export{g as default};

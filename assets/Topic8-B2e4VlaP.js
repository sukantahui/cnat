import{r as i,j as e,m as t,a as s}from"./index-DmfbEenU.js";class n extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Dictionary Methods: keys(), values(), items()"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Dictionaries store data internally as ",e.jsx("strong",{children:"key → value pairs"}),". Python provides three special methods to *view* this data safely and efficiently."]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["These methods do not copy data. They expose a ",e.jsx("strong",{children:"live window"})," into the dictionary."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Why Do We Need keys(), values(), items()?"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"A dictionary is not a list. You cannot safely “scan” it using indexes."}),e.jsx("p",{className:"text-sm text-slate-400",children:"Python gives us controlled access through these methods so that:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Data is not accidentally modified"}),e.jsx("li",{children:"Memory is used efficiently"}),e.jsx("li",{children:"Iteration stays predictable"})]}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Insight: These methods are about ",e.jsx("strong",{children:"safe observation"}),", not mutation."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 1: keys()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"keys()"})," returns all the keys of the dictionary."]}),e.jsx(s,{title:"Basic keys() Example",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

k = student.keys()

print(k)
print(type(k))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Return type: ",e.jsx("code",{children:"dict_keys"}),"❌ Not a list"]}),e.jsxs("p",{className:"text-sm text-amber-300",children:["⚠ Exam Trap:",e.jsx("code",{children:"keys()"})," does NOT return a list."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 2: values()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"values()"})," returns all values stored in the dictionary."]}),e.jsx(s,{title:"Basic values() Example",initialCode:`student = {
  "name": "Swadeep",
  "age": 15,
  "class": 10
}

v = student.values()

print(v)
print(type(v))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Return type: ",e.jsx("code",{children:"dict_values"}),"✔ Values may repeat"]}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Tip: Values don’t have to be unique — only keys do."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 3: items()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"items()"})," returns key-value pairs together."]}),e.jsx(s,{title:"Basic items() Example",initialCode:`student = {
  "name": "Mounita",
  "age": 14,
  "class": 9
}

items = student.items()

print(items)
print(type(items))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Return type: ",e.jsx("code",{children:"dict_items"}),"✔ Each element is a tuple: ",e.jsx("code",{children:"(key, value)"})]}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Secret:",e.jsx("code",{children:"items()"})," is the most powerful dictionary view."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Very Important: These Are Live Views"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["The objects returned by ",e.jsx("code",{children:"keys()"}),", ",e.jsx("code",{children:"values()"}),", and ",e.jsx("code",{children:"items()"})," update automatically."]}),e.jsx(s,{title:"Live View Demonstration",initialCode:`data = {"a": 1, "b": 2}

k = data.keys()
print(k)

data["c"] = 3
print(k)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ This is NOT a snapshot — it is a live window."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Converting Views to Lists (Only When Needed)"}),e.jsx(s,{title:"Converting View Objects",initialCode:`data = {"x": 10, "y": 20}

print(list(data.keys()))
print(list(data.values()))
print(list(data.items()))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Conversion creates a snapshot ❌ Avoid converting unless required"})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Exam Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Assuming keys(), values(), items() return lists"}),e.jsx("li",{children:"Trying to index view objects"}),e.jsx("li",{children:"Expecting views to remain unchanged"}),e.jsx("li",{children:"Ignoring items() and writing complex logic"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic8 — What You Must Remember"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"keys(), values(), items() return view objects"}),e.jsx("li",{children:"Views are live, not copies"}),e.jsx("li",{children:"items() gives structured access"}),e.jsx("li",{children:"Convert to list only when necessary"})]})]})]})}}export{n as default};

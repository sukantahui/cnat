import{r as i,j as e,m as t,a as s}from"./index-BDvxmrNX.js";class l extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Merging Dictionaries"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Merging dictionaries means ",e.jsx("strong",{children:"combining key-value pairs"}),"from multiple dictionaries into one."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"This is extremely common when working with configurations, API responses, defaults, and user overrides."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"The Core Rule of Merging (Very Important)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When two dictionaries contain the ",e.jsx("strong",{children:"same key"}),", the value from the ",e.jsx("strong",{children:"later dictionary wins"}),"."]}),e.jsx(s,{title:"Duplicate Key Overwrite Rule",initialCode:`a = {"x": 1, "y": 2}
b = {"y": 99, "z": 3}

# Conceptual result
# y will be overwritten
print(a, b)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ This overwrite happens silently."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Method 1: Merge Using ",e.jsx("code",{children:"|"})," Operator (Recommended)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["The ",e.jsx("code",{children:"|"})," operator creates a ",e.jsx("strong",{children:"new dictionary"}),"."]}),e.jsx(s,{title:"Merging with | Operator",initialCode:`a = {"x": 1, "y": 2}
b = {"y": 99, "z": 3}

c = a | b

print(c)
print(a)
print(b)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Original dictionaries unchanged ✔ Clean and readable"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Tip: Use ",e.jsx("code",{children:"|"})," when you want a safe, non-destructive merge."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Method 2: Merge Using ",e.jsx("code",{children:"update()"})," (Destructive)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"update()"})," modifies the dictionary ",e.jsx("strong",{children:"in place"}),"."]}),e.jsx(s,{title:"Merging with update()",initialCode:`a = {"x": 1, "y": 2}
b = {"y": 99, "z": 3}

a.update(b)

print(a)
print(b)`}),e.jsxs("p",{className:"text-sm text-amber-300",children:["⚠ Original dictionary ",e.jsx("code",{children:"a"})," is permanently changed."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Value of update() (Exam Favorite)"}),e.jsx(s,{title:"update() Return Value",initialCode:`a = {"x": 1}
result = a.update({"y": 2})

print(result)
print(a)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ ",e.jsx("code",{children:"update()"})," returns ",e.jsx("code",{children:"None"}),"✔ Changes happen via mutation"]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Merging Multiple Dictionaries"}),e.jsx(s,{title:"Chained Merge Using |",initialCode:`base = {"theme": "light"}
user = {"theme": "dark"}
runtime = {"debug": True}

final_config = base | user | runtime

print(final_config)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Rightmost dictionary has highest priority ✔ Common config pattern"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Real-World Use Case: Configuration Override"}),e.jsx(s,{title:"Config Merge Pattern",initialCode:`default_config = {
  "timeout": 30,
  "theme": "light"
}

user_config = {
  "theme": "dark"
}

final = default_config | user_config
print(final)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Defaults + user overrides ✔ Extremely common in applications"})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Assuming update() returns a dictionary"}),e.jsx("li",{children:"Forgetting update() mutates original data"}),e.jsx("li",{children:"Overwriting important keys unintentionally"}),e.jsx("li",{children:"Merging without checking key conflicts"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: How Professionals Decide"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["✔ Use ",e.jsx("code",{children:"|"})," for safety and clarity ✔ Use ",e.jsx("code",{children:"update()"})," when mutation is intended ✔ Always assume duplicate keys will overwrite"]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic12 — Merge Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Duplicate keys overwrite silently"}),e.jsx("li",{children:"| creates a new dictionary"}),e.jsx("li",{children:"update() mutates existing dictionary"}),e.jsx("li",{children:"update() returns None"}),e.jsx("li",{children:"Rightmost data has highest priority"})]})]})]})}}export{l as default};

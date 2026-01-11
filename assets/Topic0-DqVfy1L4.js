import{r as i,j as e,m as t,a as s}from"./index-BMXE8ahz.js";class n extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Dictionaries — Thinking Beyond Lists"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Dictionaries represent a ",e.jsx("strong",{children:"mental upgrade"})," in programming. Instead of remembering positions, we work with ",e.jsx("em",{children:"meanings"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Master this topic once, and JSON, APIs, configs, and databases will start making sense automatically."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Why Were Dictionaries Invented?"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Let’s start with a ",e.jsx("strong",{children:"bad but common"})," approach using lists."]}),e.jsx(s,{title:"Using List (Position-Based Thinking)",initialCode:`student = ["Ritaja", 14, 9]

print(student[0])  # Name
print(student[1])  # Age
print(student[2])  # Class`}),e.jsx("p",{className:"text-sm text-slate-400",children:"❌ You must remember what each index means. This becomes dangerous as programs grow."}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Dictionaries eliminate this cognitive load completely."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Dictionary: Meaning-Based Data Structure"}),e.jsx(s,{title:"Using Dictionary (Meaning-Based Thinking)",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

print(student["age"])`}),e.jsxs("p",{className:"text-sm text-slate-300",children:["✔ You don’t access data by position ✔ You access data by ",e.jsx("strong",{children:"what it represents"})]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["📌 ",e.jsx("strong",{children:"Teacher Tip:"}),"If you can read your code like English, you are doing it right."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"How a Dictionary Works Internally (Visual Thinking)"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"520",height:"200",viewBox:"0 0 520 200",children:[e.jsx("rect",{x:"20",y:"70",rx:"10",ry:"10",width:"160",height:"60",fill:"#020617",stroke:"#34d399"}),e.jsx("text",{x:"100",y:"105",textAnchor:"middle",fill:"#34d399",fontSize:"14",children:"Key (immutable)"}),e.jsx("line",{x1:"180",y1:"100",x2:"300",y2:"100",stroke:"#94a3b8",strokeWidth:"2"}),e.jsx("polygon",{points:"300,100 290,95 290,105",fill:"#94a3b8"}),e.jsx("rect",{x:"300",y:"70",rx:"10",ry:"10",width:"200",height:"60",fill:"#020617",stroke:"#60a5fa"}),e.jsx("text",{x:"400",y:"105",textAnchor:"middle",fill:"#60a5fa",fontSize:"14",children:"Value (any type)"})]})}),e.jsx("p",{className:"text-sm text-slate-400 text-center",children:"Python hashes the key and jumps directly to the value (O(1))."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Dictionaries Can Store Any Type of Value"}),e.jsx(s,{title:"Mixed Value Types",initialCode:`profile = {
  "username": "swadeep",
  "active": True,
  "score": 87.5,
  "subjects": ["Math", "Science"]
}

print(profile["subjects"])`}),e.jsx("p",{className:"text-sm text-slate-300",children:"✔ Values can be numbers, strings, lists, or even other dictionaries."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Secret Rule: Why Keys Must Be Immutable"}),e.jsx(s,{title:"Valid and Invalid Dictionary Keys",initialCode:`# Valid keys
d1 = {
  "roll": 10,
  42: "answer",
  (1, 2): "tuple key"
}

# Invalid keys (will cause error)
# d2 = {
#   [1, 2, 3]: "list key",
# }`}),e.jsx("p",{className:"text-sm text-slate-400",children:"🔐 Keys are hashed internally. Mutable objects can change → hashes break → dictionary fails."})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Exam & Interview Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Dictionaries do NOT support index access"}),e.jsx("li",{children:"Duplicate keys overwrite earlier values"}),e.jsx("li",{children:"Order should never be your logic tool"}),e.jsx("li",{children:"Missing keys raise errors (handled later)"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Mental Model to Carry Forward"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Dictionaries map meaning → value"}),e.jsx("li",{children:"Keys describe data"}),e.jsx("li",{children:"Values store data"}),e.jsx("li",{children:"Fastest lookup structure in Python"}),e.jsx("li",{children:"Foundation of real-world software"})]})]})]})}}export{n as default};

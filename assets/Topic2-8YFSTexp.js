import{r as i,j as e,m as s,e as t}from"./index-meFSU1Lv.js";class l extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(s.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Creating Dictionaries — All Valid Ways"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Creating a dictionary looks simple — but Python provides",e.jsx("strong",{children:" multiple creation styles"}),", each with its own purpose, readability rules, and traps."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"An expert programmer chooses the right style, not just any style."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 1: Dictionary Literal (Recommended)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["This is the ",e.jsx("strong",{children:"most common, most readable, and safest"}),"way to create a dictionary."]}),e.jsx(t,{title:"Dictionary Literal Syntax",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

print(student)
print(type(student))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Clean ✔ Readable ✔ Preferred in production code"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Rule:",e.jsx("strong",{children:"If readability matters, always use literals."})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Creating an Empty Dictionary (Very Common Trap)"}),e.jsx(t,{title:"Correct vs Wrong Empty Dictionary",initialCode:`# Correct
d1 = {}

# Wrong (this creates a set, not a dictionary)
d2 = set()

print(type(d1))
print(type(d2))`}),e.jsxs("p",{className:"text-sm text-amber-300",children:["⚠ Exam Trap:",e.jsx("code",{})," is an empty dictionary",e.jsx("code",{children:"set()"})," is an empty set"]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 2: dict() Constructor"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Python provides a built-in constructor: ",e.jsx("code",{children:"dict()"})]}),e.jsx(t,{title:"Using dict() with Key-Value Pairs",initialCode:`student = dict(
  name="Ritaja",
  age=14,
  standard=9
)

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Cleaner for small dictionaries ❌ Keys must be valid identifiers"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Secret:",e.jsx("code",{children:"dict()"})," internally converts names into string keys."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 3: From List of Tuples (Advanced & Powerful)"}),e.jsx(t,{title:"Creating Dictionary from Tuples",initialCode:`pairs = [
  ("name", "Swadeep"),
  ("age", 15),
  ("class", 10)
]

student = dict(pairs)

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Extremely useful with database records ✔ Common in real-world data processing"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Method 4: Using zip() (Interview Favorite)"}),e.jsx(t,{title:"Creating Dictionary Using zip()",initialCode:`keys = ["name", "age", "class"]
values = ["Mounita", 14, 9]

student = dict(zip(keys, values))

print(student)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Interview Insight: zip-based dictionary creation is frequently asked."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Dynamic Dictionary Creation (Step-by-Step)"}),e.jsx(t,{title:"Building Dictionary Dynamically",initialCode:`student = {}

student["name"] = "Kaustav"
student["age"] = 16
student["class"] = 11

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Very common in loops, user input, APIs ✔ Safe and flexible"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type Guarantee (Important Concept)"}),e.jsx(t,{title:"Return Type of Dictionary Creation",initialCode:`d = dict(a=1, b=2)

print(type(d))
print(isinstance(d, dict))`}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["✔ Every valid creation method returns a ",e.jsx("code",{children:"dict"})," object"]})]}),e.jsxs(s.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic2 — Creation Rules to Remember"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Use literals for readability"}),e.jsxs("li",{children:["{}"," creates a dictionary, not a set"]}),e.jsxs("li",{children:[e.jsx("code",{children:"dict()"})," has identifier limitations"]}),e.jsx("li",{children:"Tuples & zip are powerful real-world tools"}),e.jsx("li",{children:"All methods return a dict object"})]})]})]})}}export{l as default};

import{r as a,j as e,m as t,a as s}from"./index-vERhaF1Z.js";class n extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Removing Key-Value Pairs"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Removing data from a dictionary is a **destructive operation**. Once removed, the data is gone unless stored elsewhere."}),e.jsx("p",{className:"text-sm text-slate-400",children:"Python provides multiple removal tools — each with a purpose."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"del"})," — Direct & Strict"]}),e.jsx(s,{title:"del Statement",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

del student["age"]

print(student)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Removes the key-value pair ❌ Raises ",e.jsx("code",{children:"KeyError"})," if key does not exist"]}),e.jsxs("p",{className:"text-sm text-amber-300",children:["⚠ Use ",e.jsx("code",{children:"del"})," only when key existence is guaranteed."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"pop()"})," — Safe & Useful"]}),e.jsx(s,{title:"pop() Method",initialCode:`student = {
  "name": "Swadeep",
  "age": 15,
  "class": 10
}

age = student.pop("age")

print(age)
print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Removes the key ✔ Returns the removed value"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Rule: Use ",e.jsx("code",{children:"pop()"})," when you need the value before deletion."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"pop() with Default Value (Very Important)"}),e.jsx(s,{title:"Safe pop() with Default",initialCode:`data = {
  "x": 10
}

value1 = data.pop("x", 0)
value2 = data.pop("y", 0)

print(value1)
print(value2)
print(data)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ No KeyError ✔ Safe deletion"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"popitem()"})," — Last Item Removal"]}),e.jsx(s,{title:"popitem() Method",initialCode:`data = {
  "a": 1,
  "b": 2,
  "c": 3
}

item = data.popitem()

print(item)
print(data)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Removes the last inserted item ✔ Returns a tuple: ",e.jsx("code",{children:"(key, value)"})]}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Raises error if dictionary is empty"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300",children:["Using ",e.jsx("code",{children:"clear()"})," — Remove Everything"]}),e.jsx(s,{title:"clear() Method",initialCode:`data = {
  "x": 10,
  "y": 20
}

data.clear()

print(data)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Empties the dictionary ✔ Dictionary object remains"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type Summary (Important for Exams)"}),e.jsx(s,{title:"Return Type Comparison",initialCode:`data = {"a": 1, "b": 2}

print(data.pop("a"))       # returns value
# del returns nothing
print(data.clear())        # returns None`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ ",e.jsx("code",{children:"pop()"})," → value ✔ ",e.jsx("code",{children:"popitem()"})," → tuple ✔ ",e.jsx("code",{children:"clear()"})," → None ✔ ",e.jsx("code",{children:"del"})," → no return"]})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"del"})," without checking key existence"]}),e.jsxs("li",{children:["Expecting ",e.jsx("code",{children:"clear()"})," to return a dictionary"]}),e.jsxs("li",{children:["Calling ",e.jsx("code",{children:"popitem()"})," on empty dictionary"]}),e.jsx("li",{children:"Forgetting to store popped values"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: Choosing the Right Tool"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"del"})," → when key must exist"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"pop()"})," → when value is needed"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"popitem()"})," → stack-like behavior"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"clear()"})," → reset dictionary"]})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic6 — Removal Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Removal mutates dictionary"}),e.jsx("li",{children:"Different tools serve different purposes"}),e.jsx("li",{children:"Return values matter"}),e.jsx("li",{children:"Safe removal prevents crashes"})]})]})]})}}export{n as default};

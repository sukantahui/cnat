import{r as a,j as e,m as t,a as s}from"./index-BXVEvkrD.js";class r extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Nested Dictionaries"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A ",e.jsx("strong",{children:"nested dictionary"})," is a dictionary that contains ",e.jsx("em",{children:"another dictionary as a value"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"This structure is everywhere — APIs, JSON files, configuration objects, databases."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Basic Nested Dictionary Structure"}),e.jsx(s,{title:"Simple Nested Dictionary",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "marks": {
    "math": 85,
    "science": 90
  }
}

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Outer dictionary → student ✔ Inner dictionary → marks"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Insight: Think of nesting as ",e.jsx("strong",{children:"grouping related data"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Accessing Nested Values (Step by Step)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["You must access nested data ",e.jsx("strong",{children:"layer by layer"}),"."]}),e.jsx(s,{title:"Accessing Nested Keys",initialCode:`student = {
  "name": "Ritaja",
  "marks": {
    "math": 85,
    "science": 90
  }
}

print(student["marks"]["math"])
print(student["marks"]["science"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ First key → outer dictionary ✔ Second key → inner dictionary"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Type Clarity (Very Important)"}),e.jsx(s,{title:"Understanding What Each Access Returns",initialCode:`student = {
  "marks": {
    "math": 85
  }
}

inner = student["marks"]
value = student["marks"]["math"]

print(inner, type(inner))
print(value, type(value))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ First access returns a dictionary ✔ Second access returns actual value"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"⚠ KeyError Risk in Nested Dictionaries"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Missing any key in the chain causes a crash."}),e.jsx(s,{title:"Unsafe Nested Access",initialCode:`student = {
  "name": "Swadeep"
}

# This will raise KeyError
print(student["marks"]["math"])`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ KeyError occurs at the first missing level."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Safe Nested Access Pattern (Professional)"}),e.jsx(s,{title:"Safe Access Using get()",initialCode:`student = {
  "name": "Swadeep"
}

marks = student.get("marks", {})
math_score = marks.get("math", 0)

print(math_score)`}),e.jsx("p",{className:"text-sm text-emerald-300",children:"✔ Crash-proof ✔ Used in production systems"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Iterating Over Nested Dictionaries"}),e.jsx(s,{title:"Nested Iteration Example",initialCode:`students = {
  "Ritaja": {"math": 85, "science": 90},
  "Mounita": {"math": 88, "science": 92}
}

for name, subjects in students.items():
    print(name)
    for subject, score in subjects.items():
        print(" ", subject, "=>", score)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Common in reports & dashboards ✔ Structure mirrors real data"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Real-World Analogy: JSON Data"}),e.jsx(s,{title:"JSON-Like Nested Dictionary",initialCode:`api_response = {
  "status": "success",
  "data": {
    "user": {
      "id": 101,
      "name": "Kaustav"
    }
  }
}

print(api_response["data"]["user"]["name"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ This is exactly how APIs return data ✔ Nested dictionaries are unavoidable"})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Exam Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Assuming nested keys always exist"}),e.jsx("li",{children:"Accessing deep levels without validation"}),e.jsx("li",{children:"Forgetting return types at each level"}),e.jsx("li",{children:"Treating nested dictionaries like flat ones"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: How Professionals Think"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["✔ Nested dictionary = structured data ✔ Always validate level by level ✔ Use ",e.jsx("code",{children:"get()"})," when data source is external"]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic10 — Core Takeaways"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Dictionaries can contain dictionaries"}),e.jsx("li",{children:"Access data layer by layer"}),e.jsx("li",{children:"Each access has its own return type"}),e.jsx("li",{children:"Missing keys cause KeyError"}),e.jsx("li",{children:"Safe access uses get() defensively"})]})]})]})}}export{r as default};

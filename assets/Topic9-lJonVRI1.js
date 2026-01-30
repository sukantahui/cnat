import{r as i,j as e,m as t,a as s}from"./index-RLE6xEGw.js";class l extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Iterating Dictionaries"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Iteration means ",e.jsx("strong",{children:"visiting each element one by one"}),". With dictionaries, iteration is about ",e.jsx("em",{children:"meaning"}),", not position."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"In this topic, we learn how Python expects you to loop over dictionaries."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Default Dictionary Iteration (Important!)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When you iterate directly over a dictionary, Python iterates over its ",e.jsx("strong",{children:"keys"}),"."]}),e.jsx(s,{title:"Direct Dictionary Iteration",initialCode:`student = {
  "name": "Ritaja",
  "age": 14,
  "class": 9
}

for key in student:
    print(key)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Default iteration = keys ⚠ Many beginners misunderstand this"}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Rule:",e.jsx("strong",{children:"for x in dict"})," always means keys."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Iterating Using keys()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Using ",e.jsx("code",{children:"keys()"})," makes your intention explicit."]}),e.jsx(s,{title:"Iterating Keys Explicitly",initialCode:`data = {
  "pen": 10,
  "book": 50,
  "eraser": 5
}

for key in data.keys():
    print(key)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Clear intent ✔ Same result as direct iteration"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Iterating Using values()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Use ",e.jsx("code",{children:"values()"})," when keys do not matter."]}),e.jsx(s,{title:"Iterating Values",initialCode:`prices = {
  "pen": 10,
  "book": 50,
  "eraser": 5
}

for price in prices.values():
    print(price)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Useful for totals, averages, comparisons ⚠ Values may repeat"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Iterating Using items() (Most Powerful)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"items()"})," gives access to both key and value together."]}),e.jsx(s,{title:"Iterating Key-Value Pairs",initialCode:`student = {
  "name": "Mounita",
  "age": 14,
  "class": 9
}

for key, value in student.items():
    print(key, "=>", value)`}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Secret:",e.jsx("code",{children:"items()"})," is used in 90% of real-world logic."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"What Exactly Is Iterated? (Return Type Insight)"}),e.jsx(s,{title:"Understanding What items() Yields",initialCode:`data = {"x": 1, "y": 2}

for pair in data.items():
    print(pair, type(pair))`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Each element is a tuple: ",e.jsx("code",{children:"(key, value)"})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Common Iteration Patterns"}),e.jsx(s,{title:"Conditional Logic During Iteration",initialCode:`marks = {
  "math": 85,
  "science": 72,
  "english": 90
}

for subject, score in marks.items():
    if score >= 80:
        print(subject, "Excellent")`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Filtering ✔ Decision-making ✔ Reporting"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"⚠ Modifying Dictionary During Iteration (Danger Zone)"}),e.jsx(s,{title:"Unsafe Pattern (Do NOT Do This)",initialCode:`data = {"a": 1, "b": 2}

# This can cause runtime issues
for k in data:
    data[k] = data[k] + 1

print(data)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Modifying structure while iterating is risky."}),e.jsx("p",{className:"text-sm text-slate-400",children:"Safe approaches will be discussed later."})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Exam Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Assuming dictionary iteration gives values"}),e.jsx("li",{children:"Using indexes like lists"}),e.jsx("li",{children:"Ignoring items() for logic"}),e.jsx("li",{children:"Mutating dictionary structure during iteration"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic9 — Iteration Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Direct iteration gives keys"}),e.jsx("li",{children:"values() gives values only"}),e.jsx("li",{children:"items() gives structured pairs"}),e.jsx("li",{children:"items() is preferred for logic"}),e.jsx("li",{children:"Never treat dictionaries like lists"})]})]})]})}}export{l as default};

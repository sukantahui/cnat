import{r as i,j as e,m as t,a as s}from"./index-lKIIHiz2.js";class n extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Copying Dictionaries"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Copying dictionaries looks simple — but misunderstanding it leads to ",e.jsx("strong",{children:"silent data corruption"}),"."]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["This topic explains one of the most important Python concepts:",e.jsx("strong",{children:"reference vs copy"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Assignment Creates a Reference (Not a Copy)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Using ",e.jsx("code",{children:"="})," does ",e.jsx("strong",{children:"not"})," copy a dictionary."]}),e.jsx(s,{title:"Reference Assignment Example",initialCode:`original = {
  "x": 1,
  "y": 2
}

alias = original
alias["x"] = 99

print(original)
print(alias)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Both variables point to the same dictionary in memory."}),e.jsxs("p",{className:"text-sm text-emerald-300",children:["Teacher Rule: Assignment copies the ",e.jsx("strong",{children:"reference"}),", not the data."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Mental Memory Model (Think Like Python)"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Visualize one dictionary in memory, with two labels pointing to it."}),e.jsx(s,{title:"Memory Check Using id()",initialCode:`a = {"x": 1}
b = a

print(id(a))
print(id(b))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Same memory address ✔ Same object"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Shallow Copy Using copy()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{children:"copy()"})," creates a ",e.jsx("strong",{children:"new dictionary"}),"."]}),e.jsx(s,{title:"Shallow Copy Example",initialCode:`original = {
  "x": 1,
  "y": 2
}

copy_dict = original.copy()
copy_dict["x"] = 99

print(original)
print(copy_dict)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Separate objects ✔ Safe for flat dictionaries"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Verifying Copy Using id()"}),e.jsx(s,{title:"Different Memory Addresses",initialCode:`a = {"x": 1}
b = a.copy()

print(id(a))
print(id(b))`}),e.jsx("p",{className:"text-sm text-emerald-300",children:"✔ Different IDs → different dictionaries"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:"⚠ Shallow Copy Trap (Nested Dictionaries)"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Shallow copy does NOT copy nested objects."}),e.jsx(s,{title:"Nested Dictionary Bug",initialCode:`original = {
  "marks": {
    "math": 80
  }
}

copy_dict = original.copy()
copy_dict["marks"]["math"] = 99

print(original)
print(copy_dict)`}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Nested dictionary is still shared!"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Why Shallow Copy Behaves This Way"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Shallow copy duplicates only the ",e.jsx("strong",{children:"outer container"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Inner objects (like nested dictionaries) are copied by reference."}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Insight: This design keeps copying fast and memory-efficient."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Safe Practices (Professional Rules)"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Use assignment only when sharing data is intended"}),e.jsx("li",{children:"Use copy() for flat dictionaries"}),e.jsx("li",{children:"Be careful with nested structures"}),e.jsx("li",{children:"Test using id() when unsure"})]})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Exam & Interview Focus"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Difference between assignment and copy()"}),e.jsx("li",{children:"Meaning of shallow copy"}),e.jsx("li",{children:"Why nested data causes issues"}),e.jsx("li",{children:"Predict output questions"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic13 — Copy Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"= creates a reference"}),e.jsx("li",{children:"copy() creates a new dictionary"}),e.jsx("li",{children:"Shallow copy shares nested objects"}),e.jsx("li",{children:"Mutation can affect multiple variables"}),e.jsx("li",{children:"Understanding this prevents serious bugs"})]})]})]})}}export{n as default};

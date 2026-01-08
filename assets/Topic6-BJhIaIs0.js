import{r as a,j as e,m as s,a as t}from"./index-DObX_txt.js";class l extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(s.section,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Updating Existing Entries"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Updating a dictionary means ",e.jsx("strong",{children:"changing the value of an already existing key"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Python uses the same syntax for adding and updating — so the programmer must be deliberate."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Basic Update Using Assignment"}),e.jsx(t,{title:"Updating an Existing Key",initialCode:`student = {
  "name": "Ritaja",
  "age": 14
}

student["age"] = 15   # update

print(student)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Existing value replaced ✔ No error raised"}),e.jsx("p",{className:"text-sm text-amber-300",children:"⚠ Python does NOT warn you about overwriting."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Add vs Update — Same Syntax, Different Intent"}),e.jsx(t,{title:"Add vs Update Demonstration",initialCode:`data = {"x": 10}

data["y"] = 20   # add
data["x"] = 99   # update

print(data)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Python does not differentiate ✔ Programmer must know intention"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Conditional Update (Safe Practice)"}),e.jsx(t,{title:"Updating Only If Key Exists",initialCode:`config = {
  "timeout": 30,
  "theme": "dark"
}

if "timeout" in config:
    config["timeout"] = 60

print(config)`}),e.jsx("p",{className:"text-sm text-emerald-300",children:"✔ Prevents accidental creation ✔ Professional defensive coding"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Update Using Existing Value"}),e.jsx(t,{title:"Updating Based on Current Value",initialCode:`scores = {
  "math": 70,
  "science": 80
}

scores["math"] = scores.get("math", 0) + 10

print(scores)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Uses existing value ✔ Safe even if key is missing"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Updating Values in a Loop"}),e.jsx(t,{title:"Bulk Update Pattern",initialCode:`prices = {
  "pen": 10,
  "book": 50,
  "eraser": 5
}

for item in prices:
    prices[item] = prices[item] + 5

print(prices)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Common in pricing, scoring, normalization"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Return Value of Updates (Important Concept)"}),e.jsx(t,{title:"Update Returns Nothing",initialCode:`data = {"x": 1}

result = data.__setitem__("x", 100)

print(result)
print(data)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Update happens in place ✔ Return value is ",e.jsx("code",{children:"None"})]})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Mistakes & Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Overwriting values unintentionally"}),e.jsx("li",{children:"Assuming update returns a new dictionary"}),e.jsx("li",{children:"Updating keys without existence check"}),e.jsx("li",{children:"Confusing update with add"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: Professional Update Rule"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["✔ If key MUST exist → check with ",e.jsx("code",{children:"in"}),"✔ If value matters → read before updating ✔ If data is critical → log or validate before overwrite"]})]}),e.jsxs(s.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic6 — Update Rules Locked In"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Updating mutates the dictionary"}),e.jsx("li",{children:"Same syntax as adding"}),e.jsx("li",{children:"Overwrite is silent"}),e.jsx("li",{children:"Updates return nothing"}),e.jsx("li",{children:"Professional code updates intentionally"})]})]})]})}}export{l as default};

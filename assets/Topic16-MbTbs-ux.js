import{r as a,j as e,m as t,a as s}from"./index-C8p6Ail2.js";class n extends a.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Real-World Dictionary Use Cases"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Dictionaries are not academic structures — they are the ",e.jsx("strong",{children:"backbone of real software systems"}),"."]}),e.jsx("p",{className:"text-sm text-slate-400",children:"In this topic, we apply everything you’ve learned so far."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Use Case 1: Application Configuration"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Most applications store configuration using dictionaries."}),e.jsx(s,{title:"Configuration Dictionary",initialCode:`config = {
  "theme": "dark",
  "timeout": 30,
  "language": "en"
}

print(config["theme"])
print(config.get("timeout", 60))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Clear meaning ✔ Easy overrides ✔ Safe defaults"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Use Case 2: Counter Pattern (Very Common)"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Counting occurrences is one of the most frequent dictionary uses."}),e.jsx(s,{title:"Counting Words",initialCode:`words = ["a", "b", "a", "c", "b", "a"]

counter = {}

for word in words:
    counter[word] = counter.get(word, 0) + 1

print(counter)`}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Insight: This pattern appears everywhere — analytics, logs, exams."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Use Case 3: Mapping One Value to Another"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Dictionaries are perfect for translating or mapping values."}),e.jsx(s,{title:"Grade Mapping Example",initialCode:`grades = {
  "A": "Excellent",
  "B": "Good",
  "C": "Average",
  "D": "Poor"
}

print(grades["A"])
print(grades.get("E", "Invalid Grade"))`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Clean logic ✔ No long if-else chains"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Use Case 4: Mini In-Memory Database"}),e.jsx(s,{title:"Student Record System",initialCode:`students = {
  101: {"name": "Ritaja", "class": 9},
  102: {"name": "Mounita", "class": 10}
}

print(students[101]["name"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Fast lookup by ID ✔ Nested dictionaries naturally fit"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Use Case 5: API / JSON-Style Data"}),e.jsx(s,{title:"API-Like Response",initialCode:`response = {
  "status": "success",
  "data": {
    "user": {
      "id": 5,
      "name": "Kaustav"
    }
  }
}

print(response["data"]["user"]["name"])`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Exactly how real APIs work ✔ Nested access becomes essential"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Design Thinking: Why Dictionary Fits Here"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Keys represent meaning"}),e.jsx("li",{children:"Lookups are fast"}),e.jsx("li",{children:"Data is self-describing"}),e.jsx("li",{children:"Easy to extend without breaking code"})]})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Common Real-World Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Using lists where keys are meaningful"}),e.jsx("li",{children:"Hard-coding logic instead of mapping"}),e.jsx("li",{children:"Not using get() for external data"}),e.jsx("li",{children:"Overcomplicating with nested if-else"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher Secret: Professional Rule"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["👉 If data has a ",e.jsx("strong",{children:"name, label, or identity"}),"👉 It almost always belongs in a dictionary."]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic16 — Final Takeaways"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Dictionaries model real-world data naturally"}),e.jsx("li",{children:"Configs, counters, mappings are everywhere"}),e.jsx("li",{children:"Nested dictionaries mirror JSON & APIs"}),e.jsx("li",{children:"Good dictionary design simplifies programs"})]})]})]})}}export{n as default};

import{r as i,j as e,m as t,a as s}from"./index-CSMDpDNy.js";class l extends i.Component{render(){return e.jsxs("div",{className:"space-y-16 text-slate-200",children:[e.jsxs(t.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300",children:"Dictionary Comprehension"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Dictionary comprehension allows you to create dictionaries in a ",e.jsx("strong",{children:"compact, expressive, and readable"})," way."]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["It is not about writing less code — it is about writing ",e.jsx("strong",{children:"clear intent"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Why Dictionary Comprehension Exists"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Before comprehension, dictionaries were built using loops."}),e.jsx(s,{title:"Traditional Loop-Based Dictionary Creation",initialCode:`squares = {}

for x in range(1, 6):
    squares[x] = x * x

print(squares)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Correct ❌ Verbose for simple transformations"}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Dictionary comprehension was introduced to make this cleaner."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Basic Dictionary Comprehension Syntax"}),e.jsx("p",{className:"text-sm text-slate-300",children:"General syntax:"}),e.jsx(s,{title:"General Syntax",initialCode:"{ key_expression : value_expression for item in iterable }"}),e.jsx(s,{title:"Same Example Using Comprehension",initialCode:`squares = {x: x * x for x in range(1, 6)}
print(squares)`}),e.jsxs("p",{className:"text-sm text-slate-400",children:["✔ Return type: ",e.jsx("code",{children:"dict"}),"✔ New dictionary is created"]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Step-by-Step Mental Model"}),e.jsx(s,{title:"How Python Thinks",initialCode:`# Step 1: iterate
# Step 2: compute key
# Step 3: compute value
# Step 4: store pair

result = {x: x + 10 for x in [1, 2, 3]}
print(result)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Each iteration produces exactly one key-value pair"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Dictionary Comprehension with Condition"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Conditions allow filtering during creation."}),e.jsx(s,{title:"Using if Condition",initialCode:`even_squares = {x: x * x for x in range(1, 11) if x % 2 == 0}
print(even_squares)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Only even numbers included ✔ Condition filters items"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Creating a Dictionary from Another Dictionary"}),e.jsx(s,{title:"Transforming Existing Dictionary",initialCode:`prices = {
  "pen": 10,
  "book": 50,
  "eraser": 5
}

updated_prices = {item: price + 5 for item, price in prices.items()}
print(updated_prices)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Original dictionary unchanged ✔ New dictionary created"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Real-World Example: Normalizing Data"}),e.jsx(s,{title:"Uppercase Keys Example",initialCode:`data = {
  "math": 85,
  "science": 90
}

normalized = {k.upper(): v for k, v in data.items()}
print(normalized)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Used in APIs, configs, analytics"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:"⚠ Readability Warning (Teacher Advice)"}),e.jsx(s,{title:"Bad Use of Comprehension",initialCode:`# Hard to read (avoid this)
result = {x: (x*x if x % 2 == 0 else x+1) for x in range(10)}
print(result)`}),e.jsx("p",{className:"text-sm text-slate-400",children:"✔ Works ❌ Hard to understand"}),e.jsx("p",{className:"text-sm text-emerald-300",children:"Teacher Rule: If comprehension hurts readability, use a loop."})]}),e.jsxs("section",{className:"space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-900/50",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Exam & Interview Focus"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-2",children:[e.jsx("li",{children:"Syntax correctness"}),e.jsx("li",{children:"Return type is always dict"}),e.jsx("li",{children:"Difference between loop & comprehension"}),e.jsx("li",{children:"Using items() inside comprehension"})]})]}),e.jsxs(t.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"rounded-xl border border-slate-700 p-5 bg-slate-900/60",children:[e.jsx("h4",{className:"text-emerald-300 font-semibold mb-3",children:"Topic11 — Key Takeaways"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-slate-300 space-y-1",children:[e.jsx("li",{children:"Dictionary comprehension creates new dictionaries"}),e.jsx("li",{children:"Syntax: key : value for item in iterable"}),e.jsx("li",{children:"Conditions filter items"}),e.jsx("li",{children:"items() is commonly used"}),e.jsx("li",{children:"Readability always comes first"})]})]})]})}}export{l as default};

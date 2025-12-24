import{r as n,j as e,a as t}from"./index-CAqGsL9_.js";const o="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20";class x extends n.Component{render(){return e.jsxs("div",{className:`space-y-16 ${o}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Nested List Comprehensions"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Nested list comprehensions allow you to work with",e.jsx("strong",{children:" lists inside lists"})," using a compact syntax."]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"⚠ Powerful feature — misuse can destroy readability."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ What Does “Nested” Mean?"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A nested list comprehension contains ",e.jsx("strong",{children:"more than one for-loop"}),"."]}),e.jsx(t,{title:"Flatten a 2D List",initialCode:`matrix = [[1, 2], [3, 4], [5, 6]]

flat = [num for row in matrix for num in row]
print(flat)`})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"🧩 How Flattening Works (Hover)"}),e.jsx("svg",{viewBox:"0 0 600 160",className:"w-full h-40",children:[[1,2],[3,4],[5,6]].map((r,l)=>r.map((a,i)=>e.jsxs("g",{className:"transition-all duration-300 hover:scale-110",children:[e.jsx("rect",{x:40+i*80+l*160,y:60,width:60,height:40,rx:8,fill:"#312e81"}),e.jsx("text",{x:70+i*80+l*160,y:86,fill:"#e5e7eb",fontSize:"13",textAnchor:"middle",children:a})]},`${l}-${i}`)))}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Outer loop → rows, Inner loop → elements"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Equivalent Normal Loop (Clarity)"}),e.jsx(t,{title:"Same Logic Without Comprehension",initialCode:`matrix = [[1, 2], [3, 4], [5, 6]]

flat = []
for row in matrix:
    for num in row:
        flat.append(num)

print(flat)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"If comprehension is harder to read than this — don’t use it."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Nested Comprehension with Condition"}),e.jsx(t,{title:"Filter While Flattening",initialCode:`matrix = [[1, 2], [3, 4], [5, 6]]

even_numbers = [
    num
    for row in matrix
    for num in row
    if num % 2 == 0
]

print(even_numbers)`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-pink-300",children:"4️⃣ 2D Structure Creation"}),e.jsx(t,{title:"Create Multiplication Table",initialCode:`table = [
    [i * j for j in range(1, 4)]
    for i in range(1, 4)
]

print(table)`})]}),e.jsxs("section",{className:`border border-yellow-700 rounded-xl p-4 bg-yellow-900/20 ${s}`,children:[e.jsx("h3",{className:"text-yellow-300 font-semibold",children:"📏 Readability Rules (VERY IMPORTANT)"}),e.jsxs("ul",{className:"list-disc list-inside text-yellow-200 text-sm space-y-2",children:[e.jsx("li",{children:"✔ Max 2 nested loops"}),e.jsx("li",{children:"✔ Break lines for clarity"}),e.jsx("li",{children:"✔ Avoid deep conditions"}),e.jsx("li",{children:"❌ Never nest 3+ loops"})]})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Bad Practice Example"}),e.jsx(t,{title:"Unreadable Comprehension",initialCode:`# ❌ Hard to read — avoid
result = [x for a in data for b in a if b > 0 for x in b if x % 2 == 0]`}),e.jsx("p",{className:"text-red-200 text-sm",children:"This should be written using normal loops."})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Example"}),e.jsx(t,{title:"Extract Scores Above Threshold",initialCode:`students = [
    [45, 78, 90],
    [33, 56, 88],
    [100, 67]
]

top_scores = [score for marks in students for score in marks if score >= 80]
print(top_scores)`})]}),e.jsxs("section",{className:`border border-purple-700 rounded-xl p-4 bg-purple-900/20 ${s}`,children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-purple-200 text-sm",children:"✔ Use nested comprehensions for simple data transforms ✔ Prefer clarity over cleverness ✔ Readability is more important than one-line code"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic13 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Nested comprehensions use multiple for-loops"}),e.jsx("li",{children:"Best for flattening and simple transforms"}),e.jsx("li",{children:"Avoid deep nesting"})]})]})]})}}export{x as default};

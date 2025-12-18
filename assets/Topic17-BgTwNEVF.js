import{r,j as e,a as t}from"./index-Bbpnr6GJ.js";const i="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20";class c extends r.Component{render(){return e.jsxs("div",{className:`space-y-16 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"List Unpacking & Starred Expressions"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["List unpacking lets you ",e.jsx("strong",{children:"assign multiple values at once"}),". Starred expressions (",e.jsx("code",{children:"*"}),") help capture remaining elements."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Basic List Unpacking"}),e.jsx(t,{title:"Simple Unpacking",initialCode:`values = [10, 20, 30]

a, b, c = values
print(a, b, c)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Number of variables must match number of elements."})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Common Error"}),e.jsx(t,{title:"Too Many / Too Few Values",initialCode:`values = [1, 2, 3]

# a, b = values      # ❌ ValueError
# a, b, c, d = values  # ❌ ValueError`}),e.jsxs("p",{className:"text-red-200 text-sm",children:["Python raises ",e.jsx("code",{children:"ValueError"})," if counts don’t match."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsxs("h3",{className:"text-xl font-semibold text-sky-300",children:["2️⃣ Starred Expression (",e.jsx("code",{children:"*"}),")"]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The star collects ",e.jsx("strong",{children:"remaining elements"})," into a list."]}),e.jsx(t,{title:"Using * to Capture Remaining Values",initialCode:`numbers = [1, 2, 3, 4, 5]

first, *rest = numbers
print(first)
print(rest)`})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"✨ How Starred Unpacking Works (Hover)"}),e.jsx("svg",{viewBox:"0 0 520 120",className:"w-full h-32",children:[1,2,3,4,5].map((l,a)=>e.jsxs("g",{className:"transition-all duration-300 hover:scale-110",children:[e.jsx("rect",{x:30+a*90,y:50,width:70,height:40,rx:8,fill:a===0?"#0f766e":"#1e293b"}),e.jsx("text",{x:65+a*90,y:76,fill:"#e5e7eb",fontSize:"13",textAnchor:"middle",children:l})]},a))}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"First value → variable, remaining → starred list"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Starred Expression in the Middle"}),e.jsx(t,{title:"Star in Middle",initialCode:`data = [10, 20, 30, 40, 50]

start, *middle, end = data
print(start)
print(middle)
print(end)`})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Invalid Usage"}),e.jsx(t,{title:"Only One Star Allowed",initialCode:`# ❌ Invalid
# a, *b, *c = [1, 2, 3, 4]`}),e.jsxs("p",{className:"text-red-200 text-sm",children:["Only ",e.jsx("strong",{children:"one starred variable"})," is allowed."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"4️⃣ Unpacking Function Return Values"}),e.jsx(t,{title:"Multiple Returns",initialCode:`def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

low, high, total = stats([4, 7, 2, 9])
print(low, high, total)`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-purple-300",children:"5️⃣ Unpacking in Loops"}),e.jsx(t,{title:"Unpacking While Iterating",initialCode:`pairs = [(1, "A"), (2, "B"), (3, "C")]

for num, letter in pairs:
    print(num, letter)`})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Example"}),e.jsx(t,{title:"CSV Row Processing",initialCode:`row = ["Ritaja", 92, 88, 91]

name, *marks = row
print(name)
print(marks)`})]}),e.jsxs("section",{className:`border border-cyan-700 rounded-xl p-4 bg-cyan-900/20 ${s}`,children:[e.jsx("h3",{className:"text-cyan-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-cyan-200 text-sm",children:"✔ Use unpacking for clarity ✔ Starred expressions simplify slicing logic ✔ Avoid clever but unreadable patterns"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic17 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Unpacking assigns multiple values at once"}),e.jsx("li",{children:"* captures remaining elements"}),e.jsx("li",{children:"Only one starred variable allowed"})]})]})]})}}export{c as default};

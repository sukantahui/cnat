import{r as n,j as e,a as t}from"./index-Dph6J_oz.js";const i="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20";class l extends n.Component{render(){return e.jsxs("div",{className:`space-y-16 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Performance Considerations of Lists"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Writing correct code is not enough. Writing ",e.jsx("strong",{children:"efficient"})," code separates beginners from professionals."]})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-2",children:"🧠 Core Idea"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Lists are powerful and flexible — but not always the fastest choice. Understanding their internal behavior helps you avoid performance traps."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Index Access is Fast (O(1))"}),e.jsx(t,{title:"Index Access",initialCode:`nums = [10, 20, 30, 40]

print(nums[0])
print(nums[3])`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Accessing elements by index is extremely fast."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"2️⃣ Searching is Slow (O(n))"}),e.jsx(t,{title:"Linear Search",initialCode:`nums = list(range(100000))

print(99999 in nums)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Membership checks scan elements one by one."})]}),e.jsxs("section",{className:`border border-purple-700 rounded-xl p-4 bg-purple-900/20 ${s}`,children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"⚡ List vs Set (Lookup Speed)"}),e.jsx(t,{title:"Performance Comparison",initialCode:`nums = list(range(100000))
nums_set = set(nums)

print(99999 in nums)      # slow
print(99999 in nums_set) # fast`}),e.jsx("p",{className:"text-purple-200 text-sm",children:"Sets are optimized for fast lookups."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"3️⃣ Insertion Cost Depends on Position"}),e.jsx(t,{title:"Insertion Examples",initialCode:`lst = [1, 2, 3]

lst.append(4)      # fast
lst.insert(0, 99)  # slow

print(lst)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Inserting at the beginning requires shifting elements."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-orange-300",children:"4️⃣ Removing Elements"}),e.jsx(t,{title:"Removal Cost",initialCode:`lst = [1, 2, 3, 4]

lst.pop()       # fast (end)
lst.pop(0)     # slow (front)

print(lst)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Removing from the end is faster than from the front."})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"🧠 Memory Behavior"}),e.jsx("p",{className:"text-indigo-200 text-sm",children:"Lists store references and allocate extra space to grow efficiently. This improves speed but uses more memory."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"5️⃣ Looping Performance"}),e.jsx(t,{title:"Efficient Looping",initialCode:`nums = [1, 2, 3, 4]

for n in nums:
    print(n)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Direct iteration is faster than index-based loops."})]}),e.jsxs("section",{className:`border border-teal-700 rounded-xl p-4 bg-teal-900/20 ${s}`,children:[e.jsx("h3",{className:"text-teal-300 font-semibold",children:"🚀 List Comprehensions are Faster"}),e.jsx(t,{title:"Comprehension vs Loop",initialCode:`# Faster
squares = [x*x for x in range(5)]

# Slower
sq = []
for x in range(5):
    sq.append(x*x)

print(squares)
print(sq)`}),e.jsx("p",{className:"text-teal-200 text-sm",children:"Comprehensions reduce overhead and improve readability."})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ When NOT to Use Lists"}),e.jsxs("ul",{className:"list-disc list-inside text-red-200 text-sm space-y-1",children:[e.jsx("li",{children:"Frequent membership checks → use set"}),e.jsx("li",{children:"Key-based access → use dictionary"}),e.jsx("li",{children:"Fixed immutable data → use tuple"})]})]}),e.jsxs("section",{className:`border border-cyan-700 rounded-xl p-4 bg-cyan-900/20 ${s}`,children:[e.jsx("h3",{className:"text-cyan-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-cyan-200 text-sm",children:"✔ Big-O thinking starts here ✔ Performance bugs appear at scale, not in small tests ✔ Right structure = clean + fast code"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic20 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Index access is fast"}),e.jsx("li",{children:"Searching is slow"}),e.jsx("li",{children:"Appending is cheap, inserting is costly"}),e.jsx("li",{children:"Use sets/dicts when performance matters"})]})]})]})}}export{l as default};

import{r as n,j as e,a as t}from"./index-imi4Qhij.js";const i="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20";class d extends n.Component{render(){return e.jsxs("div",{className:`space-y-16 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Updating List Elements"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:"Lists are mutable — you can change individual elements or entire ranges without creating a new list."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"1️⃣ Updating Using Index"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Use indexing to update a single element."}),e.jsx(t,{title:"Update by Index",initialCode:`marks = [50, 60, 70]
marks[1] = 65
print(marks)`}),e.jsx("p",{className:"text-slate-400 text-xs",children:"✔ Direct and fast ❌ Index must exist"})]}),e.jsxs("section",{className:`border border-sky-700 rounded-xl p-4 bg-sky-900/20 ${s}`,children:[e.jsx(t,{title:"Update Using Negative Index",initialCode:`nums = [10, 20, 30]
nums[-1] = 35
print(nums)`}),e.jsx("p",{className:"text-sky-200 text-sm",children:"Negative index updates from the end."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2️⃣ Updating Using Slicing"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Slice assignment can replace multiple elements at once."}),e.jsx(t,{title:"Slice Update Example",initialCode:`nums = [1, 2, 3, 4]
nums[1:3] = [20, 30]
print(nums)`}),e.jsx("p",{className:"text-slate-400 text-xs",children:"✔ Length of slice and replacement can differ"})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx(t,{title:"Slice Size Change",initialCode:`nums = [1, 2, 3, 4]
nums[1:3] = [9, 8, 7]
print(nums)`}),e.jsx("p",{className:"text-indigo-200 text-sm",children:"List length can change during slice assignment."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Updating Using Loop"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Use loops when update logic depends on conditions."}),e.jsx(t,{title:"Loop-based Update",initialCode:`nums = [1, 2, 3, 4]

for i in range(len(nums)):
    nums[i] *= 2

print(nums)`})]}),e.jsx("section",{className:`border border-amber-700 rounded-xl p-4 bg-amber-900/20 ${s}`,children:e.jsx(t,{title:"Conditional Update",initialCode:`nums = [1, 2, 3, 4]

for i in range(len(nums)):
    if nums[i] % 2 == 0:
        nums[i] += 10

print(nums)`})}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Common Pitfall"}),e.jsx(t,{title:"Wrong Way",initialCode:`nums = [1, 2, 3]

for x in nums:
    x = x * 2

print(nums)`}),e.jsx("p",{className:"text-red-200 text-sm",children:"Updating loop variable does NOT modify the list."})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-emerald-200 text-sm",children:"✔ Use indexing or slicing for direct updates ✔ Use loops when logic is conditional ✔ Prefer list comprehensions for transformations (next topic)"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic7 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Lists can be updated by index, slice, or loop"}),e.jsx("li",{children:"Slice assignment can change list length"}),e.jsx("li",{children:"Loop variable reassignment doesn’t mutate list"})]})]})]})}}export{d as default};

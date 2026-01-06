import{r as n,j as e,a as t}from"./index-BZGSCP2-.js";const i="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-rose-500/20";class a extends n.Component{render(){return e.jsxs("div",{className:`space-y-16 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-rose-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Common List Pitfalls & Errors"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Lists are simple — until they quietly break your logic. This lesson teaches you ",e.jsx("strong",{children:"how bugs happen and how to avoid them"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"1️⃣ IndexError: Accessing Invalid Index"}),e.jsx(t,{title:"Index Out of Range",initialCode:`nums = [10, 20, 30]

print(nums[3])  # ❌ IndexError`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["List indexes start from ",e.jsx("strong",{children:"0"})," and end at ",e.jsx("strong",{children:"len(list) - 1"}),"."]})]}),e.jsxs("section",{className:`border border-orange-700 rounded-xl p-4 bg-orange-900/20 ${s}`,children:[e.jsx("h3",{className:"text-orange-300 font-semibold",children:"2️⃣ Confusing Index with Value"}),e.jsx(t,{title:"Wrong Assumption",initialCode:`nums = [5, 10, 15]

for i in nums:
    print(nums[i])  # ❌ Error`}),e.jsxs("p",{className:"text-orange-200 text-sm",children:[e.jsx("strong",{children:"i"})," is the value, not the index."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-red-300",children:"3️⃣ Modifying List While Iterating"}),e.jsx(t,{title:"Dangerous Pattern",initialCode:`nums = [1, 2, 3, 4]

for n in nums:
    if n % 2 == 0:
        nums.remove(n)

print(nums)`}),e.jsx("p",{className:"text-red-200 text-sm",children:"This causes skipped elements and unpredictable results."})]}),e.jsxs("section",{className:`border border-purple-700 rounded-xl p-4 bg-purple-900/20 ${s}`,children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"4️⃣ Shallow Copy Confusion"}),e.jsx(t,{title:"Reference Trap",initialCode:`a = [1, 2, 3]
b = a

b.append(4)
print(a)`}),e.jsxs("p",{className:"text-purple-200 text-sm",children:["Assignment copies the ",e.jsx("strong",{children:"reference"}),", not the data."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"5️⃣ Misusing sort()"}),e.jsx(t,{title:"sort() Returns None",initialCode:`nums = [3, 1, 2]

result = nums.sort()
print(result)  # None
print(nums)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:[e.jsx("strong",{children:"sort()"})," mutates the list and returns None."]})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"6️⃣ Mutable Default Arguments"}),e.jsx(t,{title:"Very Common Bug",initialCode:`def add_item(item, lst=[]):
    lst.append(item)
    return lst

print(add_item(1))
print(add_item(2))`}),e.jsxs("p",{className:"text-indigo-200 text-sm",children:["Default list is created ",e.jsx("strong",{children:"once"}),", not per call."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"7️⃣ Using + Instead of append()"}),e.jsx(t,{title:"Unexpected New List",initialCode:`a = [1, 2]
b = a + [3]

print(a)
print(b)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:[e.jsx("strong",{children:"+"})," creates a new list — does not modify original."]})]}),e.jsxs("section",{className:`border border-yellow-700 rounded-xl p-4 bg-yellow-900/20 ${s}`,children:[e.jsx("h3",{className:"text-yellow-300 font-semibold",children:"8️⃣ Assuming Lists Are Fixed Size"}),e.jsx(t,{title:"Dynamic Nature",initialCode:`lst = []
lst[0] = 10  # ❌ Error`}),e.jsx("p",{className:"text-yellow-200 text-sm",children:"Lists grow dynamically but cannot skip indexes."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-pink-300",children:"9️⃣ Confusing copy() with deepcopy()"}),e.jsx(t,{title:"Nested List Trap",initialCode:`a = [[1, 2], [3, 4]]
b = a.copy()

b[0].append(99)
print(a)`}),e.jsx("p",{className:"text-pink-200 text-sm",children:"Shallow copy shares nested references."})]}),e.jsxs("section",{className:`border border-rose-700 rounded-xl p-4 bg-rose-900/20 ${s}`,children:[e.jsx("h3",{className:"text-rose-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsxs("p",{className:"text-rose-200 text-sm",children:["✔ Most list bugs are ",e.jsx("strong",{children:"logic bugs"}),"✔ Read Python errors carefully — they guide you ✔ Write small tests to catch silent failures"]})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic21 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Avoid modifying lists during iteration"}),e.jsx("li",{children:"Understand references vs copies"}),e.jsx("li",{children:"Know which methods mutate"}),e.jsx("li",{children:"Watch out for mutable defaults"})]})]})]})}}export{a as default};

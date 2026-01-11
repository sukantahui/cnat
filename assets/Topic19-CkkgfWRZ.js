import{r as i,j as e,a as t}from"./index-BMXE8ahz.js";const a="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20";class n extends i.Component{render(){return e.jsxs("div",{className:`space-y-16 ${a}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Lists vs Sets vs Dictionaries"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Python provides multiple collection types. The key skill is knowing ",e.jsx("strong",{children:"which one to use and why"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Basic Nature of Each Structure"}),e.jsx(t,{title:"Basic Examples",initialCode:`# List → ordered, allows duplicates
fruits = ["apple", "banana", "apple"]

# Set → unordered, unique values
unique_fruits = {"apple", "banana"}

# Dictionary → key-value mapping
marks = {"Ritaja": 92, "Mounita": 88}

print(fruits)
print(unique_fruits)
print(marks)`})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"🧠 Conceptual View (Hover)"}),e.jsxs("svg",{viewBox:"0 0 620 150",className:"w-full h-40",children:[e.jsx("rect",{x:"30",y:"50",width:"160",height:"50",rx:"10",fill:"#0f766e"}),e.jsx("text",{x:"110",y:"80",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"List → Sequence"}),e.jsx("rect",{x:"230",y:"50",width:"160",height:"50",rx:"10",fill:"#7c2d12"}),e.jsx("text",{x:"310",y:"80",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"Set → Unique"}),e.jsx("rect",{x:"430",y:"50",width:"160",height:"50",rx:"10",fill:"#4338ca"}),e.jsx("text",{x:"510",y:"80",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"Dict → Mapping"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Order | Uniqueness | Key-value relationship"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Order & Access Pattern"}),e.jsx(t,{title:"Access Comparison",initialCode:`lst = ["a", "b", "c"]
st = {"a", "b", "c"}
dct = {"a": 1, "b": 2}

print(lst[0])       # index-based
# print(st[0])      # ❌ error
print(dct["a"])    # key-based`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Lists → index | Sets → no direct access | Dicts → key-based access"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Handling Duplicates"}),e.jsx(t,{title:"Duplicate Behavior",initialCode:`data = [1, 2, 2, 3, 3]

print(data)
print(set(data))`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Sets automatically remove duplicates."})]}),e.jsxs("section",{className:`border border-purple-700 rounded-xl p-4 bg-purple-900/20 ${s}`,children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"⚡ Performance Insight"}),e.jsx(t,{title:"Lookup Speed",initialCode:`nums = list(range(100000))
nums_set = set(nums)

print(99999 in nums)
print(99999 in nums_set)`}),e.jsx("p",{className:"text-purple-200 text-sm",children:"Sets and dictionaries are much faster for lookups."})]}),e.jsxs("section",{className:`border border-green-700 rounded-xl p-4 bg-green-900/20 ${s}`,children:[e.jsx("h3",{className:"text-green-300 font-semibold",children:"✔ When to Use What"}),e.jsxs("ul",{className:"list-disc list-inside text-green-200 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"List"})," → ordered data, indexing, duplicates allowed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Set"})," → uniqueness, fast membership tests"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dictionary"})," → labeled data, mappings, configs"]})]})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Use Cases"}),e.jsx(t,{title:"Practical Choices",initialCode:`# Attendance list (order matters)
attendance = ["Ritaja", "Mounita", "Ritaja"]

# Unique registered users
users = set(attendance)

# Student marks mapping
marks = {
    "Ritaja": 92,
    "Mounita": 88
}

print(attendance)
print(users)
print(marks["Ritaja"])`})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Common Mistake"}),e.jsx("p",{className:"text-red-200 text-sm",children:"Using lists for membership checks when sets are required — leads to poor performance."})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-indigo-200 text-sm",children:"✔ Data structure choice reflects problem understanding ✔ Professionals choose structures for performance and clarity ✔ Wrong choice = slow and buggy programs"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic19 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Lists → ordered collections"}),e.jsx("li",{children:"Sets → unique elements"}),e.jsx("li",{children:"Dictionaries → key-value mappings"})]})]})]})}}export{n as default};

import{r as i,j as e}from"./index-BQNsLvl4.js";import{E as t}from"./EditablePythonCodeBlock-CvO-TvqP.js";import"./index-Bf_FrdBe.js";import"./createLucideIcon-DfWMkJeo.js";import"./braces-DoP_KH8v.js";import"./layout-list-wnHrvZcu.js";import"./play-BGY4BZxw.js";import"./type-B3clx7CX.js";import"./refresh-cw-DeSTVkrw.js";import"./copy-ggF1ebug.js";import"./download-DAPiigzn.js";import"./eye-off-C-SnOcmU.js";import"./eye-Cp7rdNMW.js";const l="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/20";class y extends i.Component{render(){return e.jsxs("div",{className:`space-y-16 ${l}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-violet-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Lists vs Tuples: When to Use What"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Lists and tuples both store ordered data, but choosing the right one depends on ",e.jsx("strong",{children:"mutability, intent, safety, and performance"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Core Difference: Mutability"}),e.jsx(t,{title:"Mutability Comparison",initialCode:`# List (mutable)
nums = [1, 2, 3]
nums.append(4)
print(nums)

# Tuple (immutable)
coords = (10, 20)
# coords.append(30)  # ❌ AttributeError`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Lists can change ✔ Tuples cannot be modified after creation"})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"🧠 Conceptual Model (Hover)"}),e.jsxs("svg",{viewBox:"0 0 520 140",className:"w-full h-36",children:[e.jsx("rect",{x:"40",y:"50",width:"160",height:"50",rx:"10",fill:"#0f766e"}),e.jsx("text",{x:"120",y:"80",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"List → Changeable"}),e.jsx("rect",{x:"320",y:"50",width:"160",height:"50",rx:"10",fill:"#4338ca"}),e.jsx("text",{x:"400",y:"80",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"Tuple → Fixed"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Lists = working data | Tuples = fixed data"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Performance & Memory"}),e.jsx(t,{title:"Memory Comparison",initialCode:`import sys

lst = [1, 2, 3]
tup = (1, 2, 3)

print(sys.getsizeof(lst))
print(sys.getsizeof(tup))`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Tuples usually consume less memory and are slightly faster to access."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Intent & Meaning"}),e.jsx(t,{title:"Expressing Intent Clearly",initialCode:`# Fixed meaning → tuple
coordinate = (22.57, 88.36)

# Changeable collection → list
marks = [56, 78, 91]`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Tuples communicate: “This should not change”."})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"🛡 Safety & Bug Prevention"}),e.jsx(t,{title:"Tuples Prevent Accidental Changes",initialCode:`def move(point):
    # point[0] += 1   # ❌ Error if tuple
    print(point)

move((5, 7))`}),e.jsx("p",{className:"text-red-200 text-sm",children:"Tuples protect data from unintended modification."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4️⃣ Tuples as Dictionary Keys"}),e.jsx(t,{title:"Why Tuples Are Used as Keys",initialCode:`locations = {
    (22.57, 88.36): "Kolkata",
    (28.61, 77.20): "Delhi"
}

print(locations[(22.57, 88.36)])`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Lists cannot be dictionary keys because they are mutable."})]}),e.jsxs("section",{className:`border border-green-700 rounded-xl p-4 bg-green-900/20 ${s}`,children:[e.jsx("h3",{className:"text-green-300 font-semibold",children:"✔ When to Use What"}),e.jsxs("ul",{className:"list-disc list-inside text-green-200 text-sm space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"list"})," for dynamic data"]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"tuple"})," for fixed records"]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"tuple"})," for dictionary keys"]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"list"})," when mutation is required"]})]})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Examples"}),e.jsx(t,{title:"Choosing Correct Structure",initialCode:`# Student record (fixed structure)
student = ("Ritaja", 16, "ISC")

# Shopping cart (dynamic)
cart = ["Pen", "Notebook"]
cart.append("Pencil")`})]}),e.jsxs("section",{className:`border border-violet-700 rounded-xl p-4 bg-violet-900/20 ${s}`,children:[e.jsx("h3",{className:"text-violet-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-violet-200 text-sm",children:"✔ Data structure choice reflects thinking maturity ✔ Tuples express intent and safety ✔ Lists express flexibility and change"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic18 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Lists are mutable, tuples are immutable"}),e.jsx("li",{children:"Tuples are safer and faster"}),e.jsx("li",{children:"Choose based on intent, not habit"})]})]})]})}}export{y as default};

import{r as t,j as e,a as s}from"./index-Ca41Uxay.js";const i="animate-[fadeIn_0.8s_ease-out]";class n extends t.Component{render(){return e.jsxs("div",{className:`space-y-14 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300 tracking-wide",children:"Tuples vs Lists: Key Differences"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Tuples and lists look similar, but they are designed for",e.jsx("strong",{children:" very different purposes"}),"."]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Choosing the wrong one leads to bugs, poor performance, and bad design."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Syntax Comparison"}),e.jsx(s,{title:"List vs Tuple Syntax",initialCode:`# List
marks_list = [85, 90, 88]

# Tuple
marks_tuple = (85, 90, 88)

print(type(marks_list))
print(type(marks_tuple))`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Mutability (MOST IMPORTANT DIFFERENCE)"}),e.jsx(s,{title:"List is Mutable",initialCode:`marks = [85, 90]
marks[0] = 95
print(marks)`}),e.jsx(s,{title:"Tuple is Immutable",initialCode:`marks = (85, 90)
# ❌ This will cause an error
# marks[0] = 95`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Lists can be changed ❌ Tuples cannot be changed after creation"})]}),e.jsxs("section",{className:"bg-slate-900/60 border border-slate-700 rounded-xl p-4",children:[e.jsx("p",{className:"text-slate-200 text-sm mb-2 font-semibold",children:"🔍 Conceptual Difference"}),e.jsxs("svg",{viewBox:"0 0 520 160",className:"w-full h-40",children:[e.jsx("rect",{x:"40",y:"50",width:"180",height:"50",rx:"10",fill:"#1e293b"}),e.jsx("text",{x:"130",y:"80",fill:"#a7f3d0",fontSize:"13",textAnchor:"middle",children:"List → Editable"}),e.jsx("text",{x:"240",y:"80",fill:"#94a3b8",fontSize:"22",children:"↔"}),e.jsx("rect",{x:"280",y:"50",width:"180",height:"50",rx:"10",fill:"#1e293b"}),e.jsx("text",{x:"370",y:"80",fill:"#fca5a5",fontSize:"13",textAnchor:"middle",children:"Tuple → Read-only"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"3️⃣ Available Methods"}),e.jsx(s,{title:"List Methods",initialCode:`lst = [1, 2, 3]
lst.append(4)
lst.remove(2)
print(lst)`}),e.jsx(s,{title:"Tuple Methods",initialCode:`t = (1, 2, 2, 3)
print(t.count(2))
print(t.index(3))`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Lists → many methods ✔ Tuples → only count() and index()"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"4️⃣ Performance & Memory"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Tuples use less memory"}),e.jsx("li",{children:"Tuples are faster to iterate"}),e.jsx("li",{children:"Lists consume more memory"}),e.jsx("li",{children:"Lists are slower due to mutability"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"5️⃣ When to Use What?"}),e.jsx(s,{title:"Correct Use Cases",initialCode:`# Tuple → fixed data
coordinates = (22.57, 88.36)

# List → changing data
shopping_cart = ["Milk", "Bread"]
shopping_cart.append("Eggs")

print(coordinates)
print(shopping_cart)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"6️⃣ Dictionary Key Rule"}),e.jsx(s,{title:"Tuple as Dictionary Key",initialCode:`locations = {
    (22.57, 88.36): "Kolkata",
    (28.61, 77.20): "Delhi"
}

print(locations[(22.57, 88.36)])`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Tuples can be dictionary keys ❌ Lists cannot (mutable)"})]}),e.jsxs("section",{className:"space-y-4 border border-rose-700 rounded-xl p-4 bg-rose-900/20",children:[e.jsx("h3",{className:"text-rose-300 font-semibold",children:"❌ Common Exam Traps"}),e.jsxs("ul",{className:"list-disc list-inside text-rose-200 text-sm space-y-1",children:[e.jsx("li",{children:"Confusing syntax vs behavior"}),e.jsx("li",{children:"Using list when immutability is required"}),e.jsx("li",{children:"Forgetting tuple has fewer methods"}),e.jsx("li",{children:"Trying to modify a tuple"})]})]}),e.jsxs("section",{className:"space-y-4 border border-indigo-700 rounded-xl p-4 bg-indigo-900/20",children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"💡 Interview Secret"}),e.jsxs("p",{className:"text-indigo-200 text-sm",children:["If data ",e.jsx("strong",{children:"should not change"}),", use a tuple. It makes your code safer, faster, and intention-clear."]})]}),e.jsxs("footer",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic15 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Lists are mutable, tuples are immutable"}),e.jsx("li",{children:"Tuples are faster and memory efficient"}),e.jsx("li",{children:"Use tuples for fixed data"}),e.jsx("li",{children:"Use lists for dynamic data"})]})]})]})}}export{n as default};

import{r as a,j as e,a as t}from"./index-DdrZIREY.js";const i="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20";class n extends a.Component{render(){return e.jsxs("div",{className:`space-y-16 ${i}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-emerald-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Real-World Use Cases of Lists"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:"Lists are everywhere — from mobile apps to servers. Let’s explore how professionals use lists in real systems."})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"🧠 Big Idea"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Lists are best when data is ",e.jsx("strong",{children:"ordered, changeable"}),", and processed sequentially."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"1️⃣ Stack (LIFO – Last In First Out)"}),e.jsx(t,{title:"Stack using List",initialCode:`stack = []

stack.append("Page1")
stack.append("Page2")
stack.append("Page3")

print(stack.pop())  # Last visited page
print(stack)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Used in ",e.jsx("strong",{children:"undo operations, browser history, function calls"}),"."]})]}),e.jsxs("section",{className:`border border-cyan-700 rounded-xl p-4 bg-cyan-900/20 ${s}`,children:[e.jsx("h3",{className:"text-cyan-300 font-semibold",children:"2️⃣ Queue (FIFO – First In First Out)"}),e.jsx(t,{title:"Queue using List",initialCode:`queue = []

queue.append("Customer1")
queue.append("Customer2")
queue.append("Customer3")

print(queue.pop(0))  # First served
print(queue)`}),e.jsxs("p",{className:"text-cyan-200 text-sm",children:["Used in ",e.jsx("strong",{children:"ticket systems, printers, task scheduling"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-purple-300",children:"3️⃣ Records (Structured Data)"}),e.jsx(t,{title:"Student Records",initialCode:`students = [
    ["Ritaja", 85],
    ["Mounita", 92],
    ["Swadeep", 78]
]

for s in students:
    print(s[0], s[1])`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Lists store ",e.jsx("strong",{children:"rows of data"})," like tables."]})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"4️⃣ Menu-Driven Programs"}),e.jsx(t,{title:"Menu Choices",initialCode:`menu = ["Add", "Edit", "Delete", "Exit"]

for i, option in enumerate(menu, start=1):
    print(i, option)`}),e.jsxs("p",{className:"text-indigo-200 text-sm",children:["Lists help build ",e.jsx("strong",{children:"dynamic menus"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"5️⃣ Task & To-Do Management"}),e.jsx(t,{title:"To-Do List",initialCode:`tasks = ["Study", "Exercise", "Practice Coding"]

tasks.append("Revision")
tasks.remove("Exercise")

print(tasks)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Lists are ideal for ",e.jsx("strong",{children:"add / remove workflows"}),"."]})]}),e.jsxs("section",{className:`border border-green-700 rounded-xl p-4 bg-green-900/20 ${s}`,children:[e.jsx("h3",{className:"text-green-300 font-semibold",children:"6️⃣ Data Collection & Logs"}),e.jsx(t,{title:"Collecting Inputs",initialCode:`logs = []

logs.append("Login Success")
logs.append("File Uploaded")
logs.append("Logout")

print(logs)`}),e.jsx("p",{className:"text-green-200 text-sm",children:"Lists collect data dynamically over time."})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ When Lists Are NOT Ideal"}),e.jsxs("ul",{className:"list-disc list-inside text-red-200 text-sm space-y-1",children:[e.jsx("li",{children:"Fast lookup by key → use dictionary"}),e.jsx("li",{children:"Unique items only → use set"}),e.jsx("li",{children:"Fixed, read-only data → use tuple"})]})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-emerald-200 text-sm",children:"✔ Lists shine in sequential workflows ✔ Most beginner programs rely heavily on lists ✔ Choosing the right structure avoids future rewrites"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic22 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Stacks → undo, history"}),e.jsx("li",{children:"Queues → scheduling, services"}),e.jsx("li",{children:"Records → tabular data"}),e.jsx("li",{children:"Lists model real workflows naturally"})]})]})]})}}export{n as default};

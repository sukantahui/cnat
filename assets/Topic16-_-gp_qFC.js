import{r as i,j as e,a as t}from"./index-Be2ZQ4sg.js";const l="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-rose-500/20";class r extends i.Component{render(){return e.jsxs("div",{className:`space-y-16 ${l}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-rose-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Copying Lists: Shallow Copy vs Reference"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Understanding how lists are copied is critical to avoid",e.jsx("strong",{children:" silent bugs and unexpected data changes"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-red-300",children:"1️⃣ Reference Copy (Assignment)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Assignment does ",e.jsx("strong",{children:"not"})," create a new list. It only copies the reference."]}),e.jsx(t,{title:"Reference Copy Example",initialCode:`a = [1, 2, 3]
b = a

b.append(4)

print(a)
print(b)`}),e.jsx("p",{className:"text-red-200 text-sm",children:"❗ Both variables point to the same list."})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"🔗 Reference Relationship (Hover)"}),e.jsxs("svg",{viewBox:"0 0 520 120",className:"w-full h-32",children:[e.jsx("rect",{x:"40",y:"40",width:"120",height:"40",rx:"8",fill:"#7f1d1d"}),e.jsx("text",{x:"100",y:"66",fill:"#fff",fontSize:"13",textAnchor:"middle",children:"a"}),e.jsx("rect",{x:"200",y:"40",width:"120",height:"40",rx:"8",fill:"#7f1d1d"}),e.jsx("text",{x:"260",y:"66",fill:"#fff",fontSize:"13",textAnchor:"middle",children:"b"}),e.jsx("rect",{x:"380",y:"30",width:"100",height:"60",rx:"10",fill:"#0f172a"}),e.jsx("text",{x:"430",y:"66",fill:"#e5e7eb",fontSize:"12",textAnchor:"middle",children:"[1, 2, 3, 4]"}),e.jsx("line",{x1:"160",y1:"60",x2:"380",y2:"60",stroke:"#e5e7eb"}),e.jsx("line",{x1:"320",y1:"60",x2:"380",y2:"60",stroke:"#e5e7eb"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"a and b → same memory object"})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"2️⃣ Shallow Copy (Correct Way)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A shallow copy creates a ",e.jsx("strong",{children:"new list"})," with the same elements."]}),e.jsx(t,{title:"Using copy()",initialCode:`a = [1, 2, 3]
b = a.copy()

b.append(4)

print(a)
print(b)`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"3️⃣ Other Ways to Copy Lists"}),e.jsx(t,{title:"Different Shallow Copy Methods",initialCode:`a = [1, 2, 3]

b = a[:]          # slicing
c = list(a)       # list constructor

print(b, c)`})]}),e.jsxs("section",{className:`border border-amber-700 rounded-xl p-4 bg-amber-900/20 ${s}`,children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"⚠ Shallow Copy with Nested Lists"}),e.jsx(t,{title:"Hidden Trap",initialCode:`a = [[1, 2], [3, 4]]
b = a.copy()

b[0][0] = 99
print(a)`}),e.jsx("p",{className:"text-amber-200 text-sm",children:"Inner lists are still shared."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"4️⃣ Deep Copy (Complete Separation)"}),e.jsx(t,{title:"Using deepcopy()",initialCode:`import copy

a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)

b[0][0] = 99
print(a)
print(b)`})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"🧠 Comparison Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-indigo-200 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"="})," → same reference"]}),e.jsxs("li",{children:[e.jsx("code",{children:"copy()"})," / slicing → shallow copy"]}),e.jsxs("li",{children:[e.jsx("code",{children:"deepcopy()"})," → full independent copy"]})]})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Example"}),e.jsx(t,{title:"Template Configuration",initialCode:`default_settings = ["dark", True, 30]

user_settings = default_settings.copy()
user_settings[2] = 60

print(default_settings)
print(user_settings)`})]}),e.jsxs("section",{className:`border border-rose-700 rounded-xl p-4 bg-rose-900/20 ${s}`,children:[e.jsx("h3",{className:"text-rose-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsxs("p",{className:"text-rose-200 text-sm",children:["✔ Use ",e.jsx("code",{children:"="})," only when shared data is intentional ✔ Use ",e.jsx("code",{children:"copy()"})," for flat lists ✔ Use ",e.jsx("code",{children:"deepcopy()"})," for nested structures"]})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic16 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Assignment copies reference"}),e.jsx("li",{children:"Shallow copy duplicates outer list"}),e.jsx("li",{children:"Deep copy duplicates everything"})]})]})]})}}export{r as default};

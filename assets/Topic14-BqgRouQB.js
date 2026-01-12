import{r as t,j as e,a as s}from"./index-Be2ZQ4sg.js";const l="animate-[fadeIn_0.8s_ease-out]";class n extends t.Component{render(){return e.jsxs("div",{className:`space-y-14 ${l}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300 tracking-wide",children:"Tuples as Function Return Values"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In Python, a function can return ",e.jsx("strong",{children:"more than one value"}),". These values are automatically packed into a ",e.jsx("strong",{children:"tuple"}),"."]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This makes Python functions powerful, clean, and expressive."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Returning Multiple Values"}),e.jsx(s,{title:"Returning a Tuple from a Function",initialCode:`def calculate(a, b):
    return a + b, a - b

result = calculate(10, 5)
print(result)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Python packs the returned values into a tuple ✔ Output is a tuple"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Unpacking Returned Tuple"}),e.jsx(s,{title:"Unpacking Function Return Values",initialCode:`def calculate(a, b):
    return a + b, a - b

sum_val, diff_val = calculate(10, 5)

print(sum_val)
print(diff_val)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Automatic tuple unpacking ✔ Variables must match returned values"})]}),e.jsxs("section",{className:"bg-slate-900/60 border border-slate-700 rounded-xl p-4",children:[e.jsx("p",{className:"text-slate-200 text-sm mb-2 font-semibold",children:"🔁 Function Return Flow (Conceptual)"}),e.jsxs("svg",{viewBox:"0 0 520 160",className:"w-full h-40",children:[e.jsx("rect",{x:"30",y:"60",width:"180",height:"50",rx:"10",fill:"#1e293b"}),e.jsx("text",{x:"120",y:"90",fill:"#e5e7eb",fontSize:"14",textAnchor:"middle",children:"return (15, 5)"}),e.jsx("text",{x:"240",y:"90",fill:"#a5b4fc",fontSize:"22",children:"→"}),e.jsx("rect",{x:"280",y:"50",width:"90",height:"30",rx:"6",fill:"#064e3b"}),e.jsx("text",{x:"325",y:"70",fill:"#ecfeff",fontSize:"12",textAnchor:"middle",children:"sum = 15"}),e.jsx("rect",{x:"280",y:"90",width:"90",height:"30",rx:"6",fill:"#064e3b"}),e.jsx("text",{x:"325",y:"110",fill:"#ecfeff",fontSize:"12",textAnchor:"middle",children:"diff = 5"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"3️⃣ Returning a Single Tuple Explicitly"}),e.jsx(s,{title:"Explicit Tuple Return",initialCode:`def get_point():
    return (10, 20)

point = get_point()
print(point)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Parentheses optional ✔ Returned object is still a tuple"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"4️⃣ Real-World Example: Student Result"}),e.jsx(s,{title:"Returning Multiple Related Values",initialCode:`def student_result():
    name = "Mounita"
    marks = 86
    grade = "A"
    return name, marks, grade

student_name, student_marks, student_grade = student_result()

print(student_name)
print(student_marks)
print(student_grade)`})]}),e.jsxs("section",{className:"space-y-4 border border-rose-700 rounded-xl p-4 bg-rose-900/20",children:[e.jsx("h3",{className:"text-rose-300 font-semibold",children:"❌ Common Errors"}),e.jsx(s,{title:"Unpacking Mismatch Error",initialCode:`def values():
    return 1, 2, 3

# ❌ ValueError
# a, b = values()`}),e.jsxs("ul",{className:"list-disc list-inside text-rose-200 text-sm space-y-1",children:[e.jsx("li",{children:"Too many returned values"}),e.jsx("li",{children:"Too few receiving variables"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"5️⃣ Why Python Uses Tuples for Returns"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Tuples are lightweight"}),e.jsx("li",{children:"Tuples are immutable (safe)"}),e.jsx("li",{children:"Logical grouping of related values"}),e.jsx("li",{children:"Easy unpacking"})]})]}),e.jsxs("section",{className:"space-y-4 border border-amber-700 rounded-xl p-4 bg-amber-900/20",children:[e.jsx("h3",{className:"text-amber-300 font-semibold",children:"📝 Exam & Interview Notes"}),e.jsxs("ul",{className:"list-disc list-inside text-amber-200 text-sm space-y-1",children:[e.jsx("li",{children:"Multiple return values are tuples"}),e.jsx("li",{children:"Unpacking must match count"}),e.jsx("li",{children:"Very common output-based questions"}),e.jsx("li",{children:"Preferred over global variables"})]})]}),e.jsxs("footer",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic14 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Functions can return multiple values"}),e.jsx("li",{children:"Returned values are packed into tuples"}),e.jsx("li",{children:"Tuple unpacking makes code clean"})]})]})]})}}export{n as default};

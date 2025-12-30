import{r as i,j as e,a as t}from"./index-vERhaF1Z.js";const n="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20";class l extends i.Component{render(){return e.jsxs("div",{className:`space-y-16 ${n}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Iterating Lists (for, enumerate)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["Iteration means ",e.jsx("strong",{children:"processing elements one by one"}),". Python provides clean and readable ways to do this."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsxs("h3",{className:"text-xl font-semibold text-emerald-300",children:["1️⃣ Iterating with a Simple ",e.jsx("code",{children:"for"})," Loop"]}),e.jsx(t,{title:"Basic Iteration",initialCode:`fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"✔ Preferred way when you only need values."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Index-Based Iteration (Not Recommended)"}),e.jsx(t,{title:"Using range(len())",initialCode:`numbers = [10, 20, 30]

for i in range(len(numbers)):
    print(i, numbers[i])`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"⚠ Works, but verbose and error-prone."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsxs("h3",{className:"text-xl font-semibold text-amber-300",children:["3️⃣ Iterating with ",e.jsx("code",{children:"enumerate()"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"enumerate()"})," gives both ",e.jsx("strong",{children:"index and value"}),"."]}),e.jsx(t,{title:"Using enumerate()",initialCode:`colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(index, color)`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-pink-300",children:"4️⃣ Custom Starting Index"}),e.jsx(t,{title:"enumerate(start=1)",initialCode:`students = ["Ritaja", "Mounita", "Kaustav"]

for roll, name in enumerate(students, start=1):
    print(roll, name)`})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Modifying List While Iterating"}),e.jsx(t,{title:"Dangerous Pattern",initialCode:`nums = [1, 2, 3, 4]

for n in nums:
    if n % 2 == 0:
        nums.remove(n)

print(nums)`}),e.jsx("p",{className:"text-red-200 text-sm",children:"This causes skipped elements and bugs."})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"✔ Safe Iteration Pattern"}),e.jsx(t,{title:"Iterate Over Copy",initialCode:`nums = [1, 2, 3, 4]

for n in nums[:]:
    if n % 2 == 0:
        nums.remove(n)

print(nums)`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-300",children:"5️⃣ Iteration with Conditions"}),e.jsx(t,{title:"Conditional Logic",initialCode:`marks = [45, 82, 67, 30]

for m in marks:
    if m >= 40:
        print("Pass:", m)
    else:
        print("Fail:", m)`})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Example"}),e.jsx(t,{title:"Menu Display",initialCode:`menu = ["Start", "Settings", "Exit"]

for index, option in enumerate(menu, start=1):
    print(f"{index}. {option}")`})]}),e.jsxs("section",{className:`border border-indigo-700 rounded-xl p-4 bg-indigo-900/20 ${s}`,children:[e.jsx("h3",{className:"text-indigo-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsxs("p",{className:"text-indigo-200 text-sm",children:["✔ Use ",e.jsx("code",{children:"for item in list"})," by default ✔ Use ",e.jsx("code",{children:"enumerate()"})," when index is needed ✔ Avoid modifying lists during iteration"]})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic15 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"for-loop is simplest and safest"}),e.jsx("li",{children:"enumerate() gives index + value"}),e.jsx("li",{children:"Never mutate list while looping"})]})]})]})}}export{l as default};

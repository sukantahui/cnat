import{r as t,j as e,e as s}from"./index-BFnLuail.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Topic 3: Nested Loops in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"nested loop"})," means a loop placed inside another loop. The inner loop runs completely for every iteration of the outer loop. Nested loops are widely used in pattern printing, tables, and matrix-based problems."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. What is a Nested Loop?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"When one loop is written inside another loop, it is called a nested loop."}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"General Syntax:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for outer in sequence:
    for inner in sequence:
        statements`}),e.jsxs("svg",{width:"420",height:"160",children:[e.jsx("rect",{x:"20",y:"20",width:"160",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"45",fill:"#38bdf8",children:"Outer Loop"}),e.jsx("rect",{x:"60",y:"80",width:"180",height:"40",fill:"#0f766e"}),e.jsx("text",{x:"80",y:"105",fill:"#ffffff",children:"Inner Loop (runs fully)"}),e.jsx("line",{x1:"100",y1:"60",x2:"140",y2:"80",stroke:"#94a3b8"})]}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"If the outer loop runs ",e.jsx("strong",{children:"m"})," times and the inner loop runs",e.jsx("strong",{children:" n"})," times, the total executions will be ",e.jsx("strong",{children:"m × n"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. Basic Nested for Loop"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"This example shows how the inner loop runs completely for each iteration of the outer loop."}),e.jsx(s,{initialCode:`for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`}),e.jsx(s,{initialCode:`for row in range(1, 3):
    for col in range(1, 5):
        print(f"Row {row}, Col {col}")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"The inner loop completes all its iterations before the outer loop moves to the next cycle."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. Nested Loop with while and for"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Nested loops can be created using different types of loops together."}),e.jsx(s,{initialCode:`i = 1
while i <= 3:
    j = 1
    while j <= 2:
        print("i =", i, "j =", j)
        j += 1
    i += 1`}),e.jsx(s,{initialCode:`for i in range(1, 4):
    j = 1
    while j <= 3:
        print(i, j)
        j += 1`})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4. Multiplication Table using Nested Loops"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Nested loops are commonly used to generate multiplication tables."}),e.jsx(s,{initialCode:`for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end=" ")
    print()`}),e.jsx(s,{initialCode:`num = 3
for i in range(1, 11):
    print(num, "x", i, "=", num * i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Table and matrix problems almost always require nested loops."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"5. Common Mistakes in Nested Loops"}),e.jsx(s,{initialCode:`# Incorrect indentation causes logical errors
for i in range(1, 4):
    for j in range(1, 4):
        print(i)
    print(j)`}),e.jsx(s,{initialCode:`# Forgetting to reset inner loop variable
i = 1
while i <= 3:
    j = 1
    while j <= 3:
        print(i, j)
        j += 1
    i += 1`}),e.jsxs("div",{className:"bg-red-900/30 border-l-4 border-red-400 p-3 text-sm text-red-200",children:[e.jsx("strong",{children:"⚠ Teacher Warning:"}),"Wrong indentation and missing resets are the most common exam mistakes in nested loop programs."]})]})]})}}export{n as default};

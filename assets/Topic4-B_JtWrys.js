import{r as t,j as e,a as s}from"./index-DTiL1PGn.js";class i extends t.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Topic 4: Pattern Printing in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Pattern printing problems are used to test a student’s understanding of ",e.jsx("strong",{children:"loops, nested loops, spacing, and logic building"}),". These problems are very common in school and competitive exams."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. Basic Star Pattern (Increasing Triangle)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"This pattern prints stars in increasing order using a loop."}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"Pattern:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`*
**
***
****
*****`}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"Syntax Logic:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for row in range(1, n+1):
    print("*" * row)`}),e.jsxs("svg",{width:"360",height:"140",children:[e.jsx("rect",{x:"20",y:"20",width:"150",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"45",fill:"#38bdf8",children:"Rows Increase"}),e.jsx("line",{x1:"95",y1:"60",x2:"95",y2:"110",stroke:"#22c55e"}),e.jsx("text",{x:"40",y:"130",fill:"#22c55e",children:"Stars Increase"})]}),e.jsx(s,{initialCode:`for i in range(1, 6):
    print("*" * i)`}),e.jsx(s,{initialCode:`n = 4
for i in range(1, n + 1):
    print("*" * i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"This is the most basic pattern and the foundation for all other patterns."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. Reverse Star Pattern (Decreasing Triangle)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"This pattern prints stars in decreasing order."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`*****
****
***
**
*`}),e.jsx(s,{initialCode:`for i in range(5, 0, -1):
    print("*" * i)`}),e.jsx(s,{initialCode:`n = 4
for i in range(n, 0, -1):
    print("*" * i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Reverse patterns are usually created by looping backwards."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. Number Pattern"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Number patterns are created using nested loops or string repetition."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`1
12
123
1234`}),e.jsx(s,{initialCode:`for i in range(1, 5):
    for j in range(1, i + 1):
        print(j, end="")
    print()`}),e.jsx(s,{initialCode:`n = 4
for i in range(1, n + 1):
    print("".join(str(j) for j in range(1, i + 1)))`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Nested loops are essential for number-based patterns."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4. Pyramid Star Pattern"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Pyramid patterns require correct handling of spaces and stars."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`    *
   ***
  *****
 *******
*********`}),e.jsx(s,{initialCode:`n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))`}),e.jsx(s,{initialCode:`rows = 4
for i in range(rows):
    spaces = rows - i - 1
    stars = 2 * i + 1
    print(" " * spaces + "*" * stars)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Pyramid patterns test logic, spacing, and loop control together."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"5. Common Mistakes in Pattern Programs"}),e.jsx(s,{initialCode:`# Missing print() for new line
for i in range(1, 4):
    for j in range(1, i + 1):
        print("*", end="")`}),e.jsx(s,{initialCode:`# Wrong space calculation
n = 4
for i in range(1, n + 1):
    print(" " * i + "*" * (2 * i - 1))`}),e.jsxs("div",{className:"bg-red-900/30 border-l-4 border-red-400 p-3 text-sm text-red-200",children:[e.jsx("strong",{children:"⚠ Teacher Warning:"}),"Forgetting ",e.jsx("code",{children:"print()"})," for a new line is the most common mistake in pattern questions."]})]})]})}}export{i as default};

import{r as s,j as e,a as t}from"./index-D1bhWpF_.js";class o extends s.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Topic 2: Loop Control Statements in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Loop control statements are used to change the normal execution flow of loops. Python provides ",e.jsx("code",{children:"break"}),",",e.jsx("code",{children:"continue"}),", and ",e.jsx("code",{children:"pass"})," for this purpose."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. break Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"break"})," statement is used to ",e.jsx("strong",{children:"terminate the loop immediately"})," when a condition is met."]}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"Syntax:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for/while condition:
    if condition:
        break`}),e.jsxs("svg",{width:"340",height:"140",children:[e.jsx("rect",{x:"20",y:"20",width:"130",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"45",fill:"#38bdf8",children:"Loop Running"}),e.jsx("line",{x1:"85",y1:"60",x2:"85",y2:"100",stroke:"#94a3b8"}),e.jsx("text",{x:"30",y:"120",fill:"#ef4444",children:"break → Exit Loop"})]}),e.jsx(t,{initialCode:`for i in range(1, 10):
    if i == 5:
        break
    print(i)`}),e.jsx(t,{initialCode:`num = 1
while True:
    if num > 3:
        break
    print(num)
    num += 1`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"break"})," is often used in menu-driven programs to exit infinite loops."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. continue Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"continue"})," statement skips the ",e.jsx("strong",{children:"current iteration"}),"and moves to the next loop cycle."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for/while condition:
    if condition:
        continue`}),e.jsxs("svg",{width:"340",height:"140",children:[e.jsx("rect",{x:"20",y:"20",width:"150",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"45",fill:"#38bdf8",children:"Iteration Skipped"}),e.jsx("line",{x1:"95",y1:"60",x2:"200",y2:"60",stroke:"#22c55e"}),e.jsx("text",{x:"180",y:"55",fill:"#22c55e",children:"Next Loop"})]}),e.jsx(t,{initialCode:`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`}),e.jsx(t,{initialCode:`for i in range(1, 11):
    if i % 2 == 0:
        continue
    print("Odd:", i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"continue"})," does NOT stop the loop, it only skips one iteration."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. pass Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"pass"})," statement is a ",e.jsx("strong",{children:"null statement"}),". It does nothing and is used as a placeholder."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for/while condition:
    pass`}),e.jsxs("svg",{width:"320",height:"120",children:[e.jsx("rect",{x:"20",y:"30",width:"180",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"55",fill:"#94a3b8",children:"pass → No Operation"})]}),e.jsx(t,{initialCode:`for i in range(1, 4):
    if i == 2:
        pass
    print(i)`}),e.jsx(t,{initialCode:`if True:
    pass
print("Program continues")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"pass"})," is useful when writing program structure before implementing logic."]})]})]})}}export{o as default};

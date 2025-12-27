import{r as s,j as e,a as t}from"./index-4R51NWjb.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Topic 6: Jump Statements in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("strong",{children:"Jump statements"})," are used to change the normal flow of program execution. In Python, the commonly used jump statements are",e.jsx("code",{children:" break"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"pass"}),", and ",e.jsx("code",{children:"return"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. What are Jump Statements?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Jump statements transfer control from one part of a program to another part immediately."}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"General Idea:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`statement executes
↓
control jumps to another location`}),e.jsxs("svg",{width:"420",height:"180",viewBox:"0 0 420 180",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,6 L9,3 z",fill:"#94a3b8"})})}),e.jsx("rect",{x:"130",y:"10",width:"160",height:"35",rx:"6",fill:"#1e293b"}),e.jsx("text",{x:"155",y:"33",fill:"#38bdf8",children:"Function Start"}),e.jsx("line",{x1:"210",y1:"45",x2:"210",y2:"75",stroke:"#94a3b8","marker-end":"url(#arrow)"}),e.jsx("rect",{x:"120",y:"75",width:"180",height:"40",rx:"6",fill:"#0f766e"}),e.jsx("text",{x:"150",y:"100",fill:"#ffffff",children:"return value"}),e.jsx("line",{x1:"210",y1:"115",x2:"360",y2:"155",stroke:"#22c55e","marker-end":"url(#arrow)"}),e.jsx("text",{x:"250",y:"160",fill:"#22c55e",children:"Exit Function"})]}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Jump statements must be used carefully, otherwise program logic may become confusing."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. break Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"break"})," statement immediately terminates the loop and transfers control outside the loop."]}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"Syntax:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for/while condition:
    if condition:
        break`}),e.jsx(t,{initialCode:`for i in range(1, 10):
    if i == 6:
        break
    print(i)`}),e.jsx(t,{initialCode:`while True:
    num = int(input("Enter number (0 to exit): "))
    if num == 0:
        break
    print("You entered:", num)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"break"})," is most commonly used in menu-driven programs."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. continue Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"continue"})," statement skips the current iteration and jumps to the next iteration of the loop."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for/while condition:
    if condition:
        continue`}),e.jsx(t,{initialCode:`for i in range(1, 8):
    if i == 4:
        continue
    print(i)`}),e.jsx(t,{initialCode:`for i in range(1, 11):
    if i % 2 == 0:
        continue
    print("Odd:", i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"continue"})," does not stop the loop, it only skips one cycle."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4. pass Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"pass"})," statement is a null statement. It is used when a statement is syntactically required but no action is needed."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`if condition:
    pass`}),e.jsx(t,{initialCode:`for i in range(1, 5):
    if i == 3:
        pass
    print(i)`}),e.jsx(t,{initialCode:`def future_function():
    pass

print("Function defined successfully")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"pass"})," is mainly used during program planning and structure building."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"5. return Statement"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"return"})," statement is used to exit a function and send a value back to the caller."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`def function_name():
    return value`}),e.jsx(t,{initialCode:`def add(a, b):
    return a + b

result = add(3, 5)
print(result)`}),e.jsx(t,{initialCode:`def check_even(n):
    if n % 2 == 0:
        return "Even"
    return "Odd"

print(check_even(7))`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Once ",e.jsx("code",{children:"return"})," is executed, the function stops immediately."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"6. Common Mistakes with Jump Statements"}),e.jsx(t,{initialCode:`# break outside loop (ERROR)
if True:
    break`}),e.jsx(t,{initialCode:`# Code after return never executes
def test():
    return 10
    print("Hello")`}),e.jsxs("div",{className:"bg-red-900/30 border-l-4 border-red-400 p-3 text-sm text-red-200",children:[e.jsx("strong",{children:"⚠ Teacher Warning:"}),e.jsx("code",{children:"break"})," and ",e.jsx("code",{children:"continue"})," can be used only inside loops, while ",e.jsx("code",{children:"return"})," can be used only inside functions."]})]})]})}}export{r as default};

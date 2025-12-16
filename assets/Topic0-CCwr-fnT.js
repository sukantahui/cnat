import{r as s,j as e,a as i}from"./index-BMdPLlUD.js";class l extends s.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Loops & Control Flow in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Loops allow us to repeat a block of code multiple times. Python provides ",e.jsx("code",{children:"while"})," and ",e.jsx("code",{children:"for"})," loops along with control statements like ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", and",e.jsx("code",{children:"pass"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. while Loop"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A ",e.jsx("code",{children:"while"})," loop executes as long as a given condition remains",e.jsx("strong",{children:" True"}),"."]}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"Syntax:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`while condition:
    statements`}),e.jsxs("svg",{width:"300",height:"120",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"40",fill:"#1e293b"}),e.jsx("text",{x:"30",y:"45",fill:"#38bdf8",children:"Condition"}),e.jsx("line",{x1:"80",y1:"60",x2:"80",y2:"100",stroke:"#94a3b8"}),e.jsx("text",{x:"40",y:"110",fill:"#22c55e",children:"Loop Body"})]}),e.jsx(i,{initialCode:`i = 1
while i <= 5:
    print(i)
    i += 1`}),e.jsx(i,{initialCode:`num = 5
while num > 0:
    print("Countdown:", num)
    num -= 1`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Always update the loop variable. Otherwise, the loop may become an infinite loop."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. for Loop with range()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A ",e.jsx("code",{children:"for"})," loop iterates over a sequence such as a list, string, or range."]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`for variable in range(start, stop, step):
    statements`}),e.jsx(i,{initialCode:`for i in range(1, 6):
    print(i)`}),e.jsx(i,{initialCode:`for i in range(2, 11, 2):
    print(i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"The ",e.jsx("code",{children:"stop"})," value in ",e.jsx("code",{children:"range()"})," is always excluded."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. Loop Control Statements"}),e.jsx("h4",{className:"text-lg text-sky-300",children:"break"}),e.jsx(i,{initialCode:`for i in range(1, 10):
    if i == 5:
        break
    print(i)`}),e.jsx("h4",{className:"text-lg text-sky-300",children:"continue"}),e.jsx(i,{initialCode:`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`}),e.jsx("h4",{className:"text-lg text-sky-300",children:"pass"}),e.jsx(i,{initialCode:`for i in range(1, 4):
    if i == 2:
        pass
    print(i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),e.jsx("code",{children:"pass"})," does nothing — it is used as a placeholder."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4. Nested Loops"}),e.jsx(i,{initialCode:`for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`}),e.jsx(i,{initialCode:`for i in range(3):
    for j in range(i + 1):
        print("*", end="")
    print()`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Inner loop completes all iterations for each outer loop cycle."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"5. Pattern Printing"}),e.jsx(i,{initialCode:`for i in range(1, 6):
    print("*" * i)`}),e.jsx(i,{initialCode:`for i in range(5, 0, -1):
    print("*" * i)`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Pattern questions improve loop logic and are common in exams."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"6. Simple Menu-Driven Program"}),e.jsx(i,{initialCode:`while True:
    print("1. Add")
    print("2. Subtract")
    print("3. Exit")

    choice = int(input("Enter choice: "))

    if choice == 1:
        a = int(input("A: "))
        b = int(input("B: "))
        print("Sum =", a + b)
    elif choice == 2:
        a = int(input("A: "))
        b = int(input("B: "))
        print("Difference =", a - b)
    elif choice == 3:
        break
    else:
        print("Invalid choice")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Menu-driven programs combine loops and conditional logic and are very important for practical exams."]})]})]})}}export{l as default};

import{r as t,j as e,a as i}from"./index-BMdPLlUD.js";class s extends t.Component{render(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Topic 5: Simple Menu-Driven Programs in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["A ",e.jsx("strong",{children:"menu-driven program"})," allows the user to choose different operations from a list of options. Such programs use ",e.jsx("code",{children:"loops"})," and ",e.jsx("code",{children:"conditional statements"}),"together and are very important for ",e.jsx("strong",{children:"practical exams"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"1. What is a Menu-Driven Program?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A menu-driven program repeatedly displays a menu and performs actions based on the user’s choice until the user decides to exit."}),e.jsx("p",{className:"text-slate-400 text-sm font-mono",children:"General Structure:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded text-green-300 text-sm",children:`while True:
    show menu
    take user choice
    perform action
    exit when needed`}),e.jsxs("svg",{width:"420",height:"160",children:[e.jsx("rect",{x:"20",y:"20",width:"140",height:"35",fill:"#1e293b"}),e.jsx("text",{x:"45",y:"42",fill:"#38bdf8",children:"Display Menu"}),e.jsx("rect",{x:"20",y:"70",width:"160",height:"35",fill:"#0f766e"}),e.jsx("text",{x:"45",y:"92",fill:"#ffffff",children:"User Choice"}),e.jsx("rect",{x:"220",y:"70",width:"160",height:"35",fill:"#7c3aed"}),e.jsx("text",{x:"250",y:"92",fill:"#ffffff",children:"Perform Action"}),e.jsx("line",{x1:"100",y1:"55",x2:"100",y2:"70",stroke:"#94a3b8"}),e.jsx("line",{x1:"180",y1:"88",x2:"220",y2:"88",stroke:"#94a3b8"})]}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Menu-driven programs almost always use an ",e.jsx("code",{children:"infinite loop"}),"with ",e.jsx("code",{children:"break"})," to exit."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"2. Simple Menu (Display Only)"}),e.jsx(i,{initialCode:`while True:
    print("1. Say Hello")
    print("2. Say Bye")
    print("3. Exit")

    choice = int(input("Enter choice: "))

    if choice == 1:
        print("Hello!")
    elif choice == 2:
        print("Bye!")
    elif choice == 3:
        break
    else:
        print("Invalid choice")`}),e.jsx(i,{initialCode:`while True:
    print("1. Print Name")
    print("2. Exit")

    ch = input("Enter choice: ")

    if ch == "1":
        print("My name is Python")
    elif ch == "2":
        break
    else:
        print("Wrong option")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"Always validate user input to avoid runtime errors."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"3. Menu-Driven Arithmetic Program"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"This example performs arithmetic operations using menu choices."}),e.jsx(i,{initialCode:`while True:
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Exit")

    choice = int(input("Enter choice: "))

    if choice == 4:
        break

    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))

    if choice == 1:
        print("Sum =", a + b)
    elif choice == 2:
        print("Difference =", a - b)
    elif choice == 3:
        print("Product =", a * b)
    else:
        print("Invalid choice")`}),e.jsx(i,{initialCode:`while True:
    print("1. Square")
    print("2. Cube")
    print("3. Exit")

    ch = int(input("Enter choice: "))

    if ch == 3:
        break

    n = int(input("Enter number: "))

    if ch == 1:
        print("Square =", n * n)
    elif ch == 2:
        print("Cube =", n ** 3)
    else:
        print("Wrong choice")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"This type of program is very common in ",e.jsx("strong",{children:"Class X practical exams"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"4. Exit Logic using break"}),e.jsx(i,{initialCode:`while True:
    print("Press 0 to exit")
    n = int(input("Enter number: "))

    if n == 0:
        print("Exiting program")
        break

    print("You entered:", n)`}),e.jsx(i,{initialCode:`while True:
    ch = input("Continue? (y/n): ")
    if ch == "n":
        break
    print("Loop running")`}),e.jsxs("div",{className:"bg-yellow-900/30 border-l-4 border-yellow-400 p-3 text-sm text-yellow-200",children:[e.jsx("strong",{children:"👩‍🏫 Teacher Note:"}),"The ",e.jsx("code",{children:"break"})," statement provides a clean exit from infinite loops."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-indigo-300",children:"5. Common Mistakes in Menu Programs"}),e.jsx(i,{initialCode:`# Missing break → infinite loop
while True:
    print("1. Exit")
    ch = int(input("Enter choice: "))
    if ch == 1:
        print("Exiting")`}),e.jsx(i,{initialCode:`# No input validation
choice = int(input("Enter choice: "))
print("You chose", choice)`}),e.jsxs("div",{className:"bg-red-900/30 border-l-4 border-red-400 p-3 text-sm text-red-200",children:[e.jsx("strong",{children:"⚠ Teacher Warning:"}),"Forgetting ",e.jsx("code",{children:"break"})," and improper input handling are the most common errors in menu-driven programs."]})]})]})}}export{s as default};

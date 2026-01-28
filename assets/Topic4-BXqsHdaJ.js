import{j as e}from"./index-Di8hoHjl.js";import{E as i}from"./EditableCCodeBlock-CXPIhb4N.js";function l(){return e.jsxs("div",{className:"space-y-14",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Real-World Examples Using Decision Making"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["In real applications, decision-making logic is used to process user input, apply rules, and generate meaningful output. Below are common real-world scenarios implemented using C",e.jsx("code",{children:" if-else"})," logic."]})]}),e.jsxs("svg",{viewBox:"0 0 800 260",width:"100%",height:"260",className:"bg-slate-900 rounded-xl",children:[e.jsx("rect",{x:"300",y:"20",width:"200",height:"50",rx:"10",fill:"#38bdf8"}),e.jsx("text",{x:"400",y:"52",textAnchor:"middle",fontSize:"18",fill:"#020617",children:"User Input"}),e.jsx("line",{x1:"400",y1:"70",x2:"400",y2:"130",stroke:"#e5e7eb",strokeWidth:"3"}),e.jsx("polygon",{points:"395,125 405,125 400,135",fill:"#e5e7eb"}),e.jsx("rect",{x:"300",y:"130",width:"200",height:"50",rx:"10",fill:"#38bdf8"}),e.jsx("text",{x:"400",y:"162",textAnchor:"middle",fontSize:"18",fill:"#020617",children:"Condition Check"}),e.jsx("line",{x1:"400",y1:"180",x2:"200",y2:"230",stroke:"#e5e7eb",strokeWidth:"3"}),e.jsx("polygon",{points:"195,225 205,230 195,235",fill:"#e5e7eb"}),e.jsx("line",{x1:"400",y1:"180",x2:"600",y2:"230",stroke:"#e5e7eb",strokeWidth:"3"}),e.jsx("polygon",{points:"605,225 595,230 605,235",fill:"#e5e7eb"}),e.jsx("rect",{x:"140",y:"210",width:"120",height:"40",rx:"8",fill:"#22c55e"}),e.jsx("rect",{x:"540",y:"210",width:"120",height:"40",rx:"8",fill:"#f87171"}),e.jsx("text",{x:"200",y:"236",textAnchor:"middle",fontSize:"14",fill:"#020617",children:"Valid Result"}),e.jsx("text",{x:"600",y:"236",textAnchor:"middle",fontSize:"14",fill:"#020617",children:"Invalid / Fail"})]}),e.jsx(i,{title:"Example 1: Student Grading System",initialCode:`int marks = 76;

if (marks >= 90)
    printf("Grade: A");
else if (marks >= 75)
    printf("Grade: B");
else if (marks >= 60)
    printf("Grade: C");
else
    printf("Fail");`}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["📝 ",e.jsx("strong",{children:"Note:"})," Grading systems are common in schools, colleges, and online examination platforms."]}),e.jsx(i,{title:"Example 2: Electricity Billing System",initialCode:`int units = 180;
int bill;

if (units <= 100)
    bill = units * 5;
else if (units <= 200)
    bill = (100 * 5) + (units - 100) * 7;
else
    bill = (100 * 5) + (100 * 7) + (units - 200) * 10;

printf("Total Bill = %d", bill);`}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["📝 ",e.jsx("strong",{children:"Note:"})," This is called slab-based billing and is widely used in electricity and water billing systems."]}),e.jsx(i,{title:"Example 3: Simple Login Validation",initialCode:`int savedPin = 1234;
int enteredPin;

scanf("%d", &enteredPin);

if (enteredPin == savedPin)
    printf("Login Successful");
else
    printf("Invalid PIN");`}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["⚠️ ",e.jsx("strong",{children:"Security Note:"})," Real systems never store PINs or passwords directly. This example is for logic understanding only."]}),e.jsx(i,{title:"Example 4: Discount Calculation",initialCode:`int amount = 3500;

if (amount >= 5000)
    printf("Discount: 20%%");
else if (amount >= 3000)
    printf("Discount: 10%%");
else
    printf("No Discount");`}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-slate-500 text-xs",children:["🎯 ",e.jsx("strong",{children:"Exam Tip:"})," Always test boundary values such as exactly 60 marks or exactly 100 units."]}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["💡 ",e.jsx("strong",{children:"Interview Insight:"})," Interviewers often ask you to convert real-world rules into clean conditional logic."]})]})]})}export{l as default};

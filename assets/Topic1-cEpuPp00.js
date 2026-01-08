import{j as e}from"./index-DObX_txt.js";import{E as i}from"./EditableCCodeBlock-CHdqQeit.js";function n(){return e.jsxs("div",{className:"space-y-12",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Nested Conditions and Readability"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["A nested condition occurs when one ",e.jsx("code",{children:"if"})," or",e.jsx("code",{children:" else"})," block contains another ",e.jsx("code",{children:"if"}),". Nested logic is powerful but must be written carefully to maintain readability."]})]}),e.jsxs("svg",{viewBox:"0 0 900 300",preserveAspectRatio:"xMidYMid meet",className:"w-full bg-slate-900 rounded-xl p-4",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,6 L9,3 z",fill:"#e5e7eb"})})}),e.jsx("rect",{x:"350",y:"20",width:"200",height:"60",rx:"12",fill:"#38bdf8"}),e.jsx("text",{x:"450",y:"58",textAnchor:"middle",fontSize:"20",fill:"#020617",children:"Condition 1"}),e.jsx("line",{x1:"450",y1:"80",x2:"450",y2:"130",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"350",y:"130",width:"200",height:"60",rx:"12",fill:"#38bdf8"}),e.jsx("text",{x:"450",y:"168",textAnchor:"middle",fontSize:"20",fill:"#020617",children:"Condition 2"}),e.jsx("line",{x1:"450",y1:"190",x2:"200",y2:"260",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"450",y1:"190",x2:"700",y2:"260",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"260",width:"120",height:"40",rx:"8",fill:"#22c55e"}),e.jsx("rect",{x:"640",y:"260",width:"120",height:"40",rx:"8",fill:"#f87171"}),e.jsx("text",{x:"200",y:"288",textAnchor:"middle",fontSize:"16",fill:"#020617",children:"Action A"}),e.jsx("text",{x:"700",y:"288",textAnchor:"middle",fontSize:"16",fill:"#020617",children:"Action B"})]}),e.jsx(i,{title:"Example 1: Driving Eligibility Check",initialCode:`int age = 22;
int hasLicense = 1;

if (age >= 18) {
    if (hasLicense)
        printf("Allowed to drive");
    else
        printf("License required");
} else {
    printf("Underage");
}`}),e.jsx(i,{title:"Example 2: Login Validation",initialCode:`int usernameOK = 1;
int passwordOK = 0;

if (usernameOK) {
    if (passwordOK)
        printf("Login successful");
    else
        printf("Wrong password");
} else {
    printf("Invalid username");
}`}),e.jsx(i,{title:"Example 3: Account Category",initialCode:`int balance = 2500;

if (balance > 0) {
    if (balance >= 3000)
        printf("Premium account");
    else
        printf("Standard account");
} else {
    printf("Inactive account");
}`}),e.jsx(i,{title:"Example 4: Scholarship Eligibility",initialCode:`int marks = 82;
int incomeLow = 1;

if (marks >= 80) {
    if (incomeLow)
        printf("Scholarship Approved");
    else
        printf("Income too high");
} else {
    printf("Marks not sufficient");
}`}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-slate-500 text-xs",children:["📝 ",e.jsx("strong",{children:"Note:"})," Nested conditions should be properly indented to avoid confusion and logical errors."]}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["🎯 ",e.jsx("strong",{children:"Exam Tip:"})," If nesting becomes too deep, consider using logical operators (",e.jsx("code",{children:"&&"}),", ",e.jsx("code",{children:"||"}),") to simplify conditions."]})]})]})}export{n as default};

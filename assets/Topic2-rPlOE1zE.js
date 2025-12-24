import{j as e}from"./index-CAqGsL9_.js";import{E as t}from"./EditableCCodeBlock-Db0rgTX9.js";function a(){return e.jsxs("div",{className:"space-y-12",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"switch-case with break and default"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["The ",e.jsx("code",{children:"switch"})," statement is used when a variable is compared against multiple fixed values. It improves readability compared to long ",e.jsx("code",{children:"else-if"})," chains."]})]}),e.jsxs("svg",{viewBox:"0 0 900 260",preserveAspectRatio:"xMidYMid meet",className:"w-full bg-slate-900 rounded-xl p-4",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,6 L9,3 z",fill:"#e5e7eb"})})}),e.jsx("rect",{x:"350",y:"20",width:"200",height:"60",rx:"12",fill:"#38bdf8"}),e.jsx("text",{x:"450",y:"58",textAnchor:"middle",fontSize:"20",fill:"#020617",children:"switch(value)"}),e.jsx("line",{x1:"450",y1:"80",x2:"150",y2:"160",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"450",y1:"80",x2:"450",y2:"160",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"450",y1:"80",x2:"750",y2:"160",stroke:"#e5e7eb",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"80",y:"160",width:"140",height:"60",rx:"10",fill:"#22c55e"}),e.jsx("rect",{x:"380",y:"160",width:"140",height:"60",rx:"10",fill:"#22c55e"}),e.jsx("rect",{x:"680",y:"160",width:"140",height:"60",rx:"10",fill:"#f87171"}),e.jsx("text",{x:"150",y:"198",textAnchor:"middle",fontSize:"18",fill:"#020617",children:"case"}),e.jsx("text",{x:"450",y:"198",textAnchor:"middle",fontSize:"18",fill:"#020617",children:"case"}),e.jsx("text",{x:"750",y:"198",textAnchor:"middle",fontSize:"18",fill:"#020617",children:"default"})]}),e.jsx(t,{title:"Example 1: Day of the Week",initialCode:`int day = 3;

switch (day) {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 3:
        printf("Wednesday");
        break;
    default:
        printf("Invalid day");
}`}),e.jsx(t,{title:"Example 2: Grade Evaluation",initialCode:`char grade = 'B';

switch (grade) {
    case 'A':
        printf("Excellent");
        break;
    case 'B':
        printf("Good");
        break;
    case 'C':
        printf("Average");
        break;
    default:
        printf("Fail");
}`}),e.jsx(t,{title:"Example 3: Missing break (Fall-through)",initialCode:`int x = 1;

switch (x) {
    case 1:
        printf("One ");
    case 2:
        printf("Two ");
    default:
        printf("Done");
}`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Output will be: ",e.jsx("code",{children:"One Two Done"})]}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["📝 ",e.jsx("strong",{children:"Note:"})," Without ",e.jsx("code",{children:"break"}),", execution continues into the next case. This is called ",e.jsx("strong",{children:"fall-through"}),"."]}),e.jsx(t,{title:"Example 4: Only default case",initialCode:`int option = 9;

switch (option) {
    default:
        printf("Invalid option");
}`}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["📝 ",e.jsx("strong",{children:"Exam Tip:"})," ",e.jsx("code",{children:"switch"})," works only with",e.jsx("code",{children:" int"})," and ",e.jsx("code",{children:"char"})," types in C (not ranges or floats)."]})]})}export{a as default};

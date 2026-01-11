import{r as s,j as e}from"./index-CP0D_LGO.js";import{J as r}from"./JavaCodeBlock-BzIKma5M.js";import"./prism-CByq7g21.js";import"./browser-C0cweKVX.js";import"./prism-java-CQA27I6F.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-16",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300 tracking-wide",children:"Number Based Programs using for Loop"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["ICSE Class IX frequently uses ",e.jsx("b",{children:"number-based problems"})," to test understanding of loop execution, logic building, and dry-run skills."]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"620",height:"180",viewBox:"0 0 620 180",className:"group",children:[[{x:20,text:"Start",color:"#22c55e",delay:"0ms"},{x:140,text:"Initialize i",color:"#0ea5e9",delay:"200ms"},{x:280,text:"Check Condition",color:"#22c55e",delay:"400ms"},{x:440,text:"Perform Calculation",color:"#a855f7",delay:"600ms"},{x:300,text:"Update i",color:"#f97316",delay:"800ms"}].map((t,i)=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"60",width:"120",height:"40",rx:"10",fill:t.color,className:`opacity-40 group-hover:opacity-100 transition-all duration-500 delay-[${t.delay}]`}),e.jsx("text",{x:t.x+10,y:"85",fill:"#fff",fontSize:"13",children:t.text})]},i)),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L6,3 L0,6 Z",fill:"#94a3b8"})})}),e.jsx("line",{x1:"140",y1:"80",x2:"280",y2:"80",stroke:"#94a3b8",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"280",y1:"100",x2:"440",y2:"100",stroke:"#94a3b8",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"440",y1:"80",x2:"420",y2:"40",stroke:"#94a3b8",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"430",y:"35",fill:"#94a3b8",fontSize:"12",children:"Repeat"})]})}),e.jsx(r,{title:"ICSE Example 1: Sum of first 10 natural numbers",highlightLines:[1,3,4],code:`int sum = 0;
for(int i = 1; i <= 10; i++)
{
    sum = sum + i;
}
System.out.println(sum);`}),e.jsx(r,{title:"ICSE Example 2: Count number of digits",highlightLines:[2,4],code:`int n = 4589;
int count = 0;
for(; n > 0; n = n / 10)
{
    count++;
}
System.out.println(count);`}),e.jsx(r,{title:"ICSE Example 3: Reverse a number",highlightLines:[3,5],code:`int n = 1234;
int rev = 0;
for(; n > 0; n = n / 10)
{
    rev = rev * 10 + (n % 10);
}
System.out.println(rev);`}),e.jsxs("div",{className:"text-slate-300 text-sm space-y-2",children:[e.jsx("p",{children:"• Program 1 uses accumulation logic (sum = sum + i)"}),e.jsx("p",{children:"• Program 2 uses loop without initialization inside for()"}),e.jsx("p",{children:"• Program 3 uses digit extraction using modulo operator"})]}),e.jsxs("p",{className:"text-emerald-300 text-sm",children:["👩‍🏫 ",e.jsx("b",{children:"Teacher Note:"}),"Number-based programs are guaranteed in ICSE exams. Students must clearly identify initialization, condition, and update."]}),e.jsxs("p",{className:"text-yellow-300 text-sm",children:["💡 ",e.jsx("b",{children:"Tips & Tricks:"}),"• Always dry-run with a table • Check update direction carefully • Use meaningful variable names (",e.jsx("code",{children:"sum"}),", ",e.jsx("code",{children:"rev"}),")"]})]})}}export{c as default};

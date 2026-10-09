import{j as e,b as i}from"./vendor-react-core-B-R9HE-Z.js";import{T as x}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as h}from"./FAQTemplate-16IfroqC.js";import{P as b}from"./PlainTextPrint-C6NaUtnE.js";import{c as f,y as N,az as g,p as j,$ as w}from"./vendor-icons-C1Dcofhq.js";const y=[{question:`Predict the exact output of the following Java code:
int num = 5;
do {
    System.out.println(num + 2);
    --num;
} while (num >= 2);`,options:[`7
6
5
4`,`7
6
5
4
3`,`5
4
3
2`,`7
6
5`],correctAnswer:0,explanation:`Pass 1: num=5 -> prints 5+2=7 -> num becomes 4 -> 4>=2 (true).
Pass 2: num=4 -> prints 4+2=6 -> num becomes 3 -> 3>=2 (true).
Pass 3: num=3 -> prints 3+2=5 -> num becomes 2 -> 2>=2 (true).
Pass 4: num=2 -> prints 2+2=4 -> num becomes 1 -> 1>=2 (false, loop stops).
Output is 7, 6, 5, 4 on new lines.`,marks:2},{question:`What is the final value of variable \`num\` after the loop terminates in:
int num = 5;
do {
    System.out.println(num + 2);
    --num;
} while (num >= 2);`,options:["1","2","0","4"],correctAnswer:0,explanation:"During the 4th iteration, --num reduces 2 to 1. The test 1 >= 2 fails and the loop ends with num equal to 1.",marks:1},{question:`Predict the output of the following do-while loop:
int a = 10;
do {
    System.out.print(a + " ");
    a -= 3;
} while (a > 2);`,options:["10 7 4 ","10 7 4 1 ","10 7 ","7 4 1 "],correctAnswer:0,explanation:`Pass 1: a=10 -> prints 10, a becomes 7 (7>2 true).
Pass 2: a=7 -> prints 7, a becomes 4 (4>2 true).
Pass 3: a=4 -> prints 4, a becomes 1 (1>2 false, terminates).
Output: '10 7 4 '.`,marks:2},{question:`Predict the output of the following do-while loop with prefix increment:
int p = 1;
do {
    System.out.print((++p * 2) + " ");
} while (p <= 3);`,options:["4 6 8 ","2 4 6 ","4 6 ","4 6 8 10 "],correctAnswer:0,explanation:`Pass 1: p=1 -> ++p becomes 2 -> prints 2*2=4 -> condition 2<=3 true.
Pass 2: p=2 -> ++p becomes 3 -> prints 3*2=6 -> condition 3<=3 true.
Pass 3: p=3 -> ++p becomes 4 -> prints 4*2=8 -> condition 4<=3 false (terminates).
Output: '4 6 8 '.`,marks:2},{question:`What is the output if the initial condition in do-while is already false?
int z = 1;
do {
    System.out.print(z * 5 + " ");
    z++;
} while (z > 10);`,options:["5 ","No output","5 10 ","Infinite loop"],correctAnswer:0,explanation:"The do body runs once unconditionally, printing 1*5=5 and incrementing z to 2. The test 2 > 10 is false, so it terminates after printing '5 '.",marks:1},{question:"Explain the difference in output between prefix decrement (`--num`) and postfix decrement (`num--`) inside a print statement.",answer:"`System.out.print(--num)` decrements `num` by 1 BEFORE passing the value to `print()`. `System.out.print(num--)` passes the CURRENT value of `num` to `print()` first, and decrements `num` by 1 AFTER printing.",marks:2,hint:"Prefix = change then use; Postfix = use then change."}],T=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 4: STEP-BY-STEP OUTPUT PREDICTION OF DO-WHILE LOOPS\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. MASTERING DRY RUN & TRACE TABLES\r
--------------------------------------------------------------------------------\r
In CBSE Class XII IT 802 board examinations, output prediction questions test \r
your ability to perform an exact step-by-step dry run (manual trace) of variables \r
across each loop iteration.\r
\r
2. DETAILED TRACE OF THE CLASSIC CBSE QUESTION\r
--------------------------------------------------------------------------------\r
Code Snippet:\r
    int num = 5;\r
    do {\r
        System.out.println(num + 2);\r
        --num;\r
    } while (num >= 2);\r
\r
Detailed Dry Run Matrix:\r
--------------------------------------------------------------------------------\r
Pass | Initial (num) | Printed Expression (num + 2) | Decrement (--num) | Condition (num >= 2)\r
-----|---------------|------------------------------|-------------------|---------------------\r
1    | 5             | 5 + 2 = 7                    | 4                 | 4 >= 2 -> TRUE (Loop repeats)\r
2    | 4             | 4 + 2 = 6                    | 3                 | 3 >= 2 -> TRUE (Loop repeats)\r
3    | 3             | 3 + 2 = 5                    | 2                 | 2 >= 2 -> TRUE (Loop repeats)\r
4    | 2             | 2 + 2 = 4                    | 1                 | 1 >= 2 -> FALSE (Loop TERMINATES)\r
\r
Final Console Output:\r
7\r
6\r
5\r
4\r
\r
Final Value of variable \`num\`: 1\r
\r
3. DRY RUN METHODOLOGY FOR EXAM SUCCESS\r
--------------------------------------------------------------------------------\r
1. Always draw a 4-column trace table:\r
   Column 1: Iteration / Pass Number\r
   Column 2: Value of Variables at Start of Pass\r
   Column 3: Value Printed by \`System.out.print\` / \`println\`\r
   Column 4: Boolean Result of the Condition at Exit\r
\r
2. Pay special attention to:\r
   - \`println\` vs \`print\`: \`println\` puts each output on a NEW line!\r
   - Prefix vs Postfix: \`--x\` changes immediately; \`x--\` changes after.\r
   - Exact relational operators: \`>=\` includes the boundary value; \`>\` excludes it.\r
================================================================================\r
`,v=()=>{const[o,d]=i.useState(5),[n,c]=i.useState(2),[s,m]=i.useState(2),a=[];let l=o,p=1;do{const t=l+n,r=l-1,u=r>=s;a.push({pass:p++,currN:l,printedVal:t,afterN:r,condText:`${r} >= ${s}`,isTrue:u}),l=r}while(l>=s&&a.length<15);return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2",children:[e.jsx(j,{className:"w-3.5 h-3.5"})," CBSE Board Tracing Visualizer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Step-by-Step Do-While Output Prediction Engine"})]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:["`do { System.out.println(num + ",n,"); --num; } while(num >= ",s,");`"]})]}),e.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 mb-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1",children:["Initial `num`: ",e.jsx("span",{className:"font-mono text-purple-400 font-bold",children:o})]}),e.jsx("input",{type:"range",min:"2",max:"10",value:o,onChange:t=>d(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1",children:["Added Offset (`+ ",n,"`): ",e.jsx("span",{className:"font-mono text-sky-400 font-bold",children:n})]}),e.jsx("input",{type:"range",min:"0",max:"5",value:n,onChange:t=>c(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1",children:["Condition Boundary (`>= ",s,"`): ",e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:s})]}),e.jsx("input",{type:"range",min:"1",max:"5",value:s,onChange:t=>m(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsx("div",{className:"lg:col-span-8 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 border-collapse bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 bg-slate-900 text-slate-200 font-mono",children:[e.jsx("th",{className:"p-3",children:"Pass"}),e.jsx("th",{className:"p-3 text-purple-400",children:"Entry (num)"}),e.jsxs("th",{className:"p-3 text-emerald-400 font-bold",children:["Printed (num+",n,")"]}),e.jsx("th",{className:"p-3 text-amber-400",children:"After (--num)"}),e.jsxs("th",{className:"p-3 text-sky-400",children:["Exit Test (num >= ",s,")"]}),e.jsx("th",{className:"p-3",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80 font-mono",children:a.map(t=>e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"p-3 font-bold text-white",children:t.pass}),e.jsx("td",{className:"p-3 text-purple-300",children:t.currN}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold text-sm bg-emerald-500/5",children:t.printedVal}),e.jsx("td",{className:"p-3 text-amber-300",children:t.afterN}),e.jsx("td",{className:"p-3 text-sky-300",children:t.condText}),e.jsx("td",{className:"p-3",children:t.isTrue?e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:"Loop Repeats"}):e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20",children:"Terminates"})})]},t.pass))})]})}),e.jsxs("div",{className:"lg:col-span-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2",children:[e.jsx(w,{className:"w-4 h-4"})," Standard Console Output"]}),e.jsx("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-emerald-300 text-sm space-y-1",children:a.map((t,r)=>e.jsx("div",{className:"font-bold",children:t.printedVal},r))})]}),e.jsxs("div",{className:"text-xs text-slate-400 bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-white block mb-1",children:"Final Variable State:"}),e.jsxs("code",{className:"text-amber-400 font-mono font-bold text-sm",children:["num = ",a[a.length-1]?.afterN]})]})]})]})]})},I=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20",children:[e.jsx(f,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 4"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Step-by-Step Output Prediction of Do-While Loops"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Master the precise methodology for solving CBSE Class XII IT 802 output tracing problems involving decrement operators, arithmetic print statements, and loop boundary checks."})]}),e.jsx(v,{}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"w-5 h-5 text-purple-400"}),"The 4-Step Dry Run Formula"]}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-2 text-xs text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Record the starting value"})," of the variable before entering the loop."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluate the print statement"})," with current variable values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Apply the decrement or increment"})," to update the variable state."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test the Boolean condition"})," with the UPDATED variable value to decide repetition."]})]})]}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(g,{className:"w-5 h-5 text-amber-400"}),"Common Student Misconceptions"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Mistake:"})," Assuming condition tests the OLD value of ",e.jsx("code",{className:"text-slate-200",children:"num"}),".",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"Fact:"})," The condition in ",e.jsx("code",{className:"text-slate-200 font-mono",children:"while(num >= 2)"})," tests the NEW value after ",e.jsx("code",{className:"text-slate-200 font-mono",children:"--num"}),"."]}),e.jsxs("li",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Mistake:"})," Confusing ",e.jsx("code",{className:"text-slate-200",children:"println"})," with ",e.jsx("code",{className:"text-slate-200",children:"print"}),".",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"Fact:"})," ",e.jsx("code",{className:"text-slate-200",children:"println"})," produces output on separate lines."]})]})]})]}),e.jsx(h,{title:"Frequently Asked Questions • Do-While Output Prediction",questions:y}),e.jsx(b,{content:T,title:"CBSE Class XII IT 802 – Do-While Output Trace Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note (.txt)",downloadFileName:"003_004_topic4_note.txt"}),e.jsx(x,{note:"In exams, always write down the trace table neatly on the rough sheet before writing the final output. In the classic question (num=5, println(num+2), --num, while(num>=2)), students often mistakenly write 3 as the last output, but the loop terminates when num becomes 1, so the outputs are 7, 6, 5, 4! — Sukanta Hui"})]})});export{I as default};

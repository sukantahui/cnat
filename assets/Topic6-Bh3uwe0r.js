import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as c}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as m}from"./FAQTemplate-16IfroqC.js";import{P as x}from"./PlainTextPrint-C6NaUtnE.js";import{c as p,ce as h,az as u,t as b}from"./vendor-icons-C1Dcofhq.js";const f=[{question:"What causes an infinite loop in Java?",answer:"An infinite loop occurs when the loop's test condition remains permanently true because the loop control variable is either never updated, updated in the wrong direction (e.g. incrementing when decrementing is needed), or when the termination condition is mathematically impossible to reach.",marks:2,hint:"Think about why a condition never becomes false."},{question:"Which of the following creates an infinite loop in Java?",options:["int i = 1; while (i > 0) { i++; }","for (int i = 10; i >= 1; i--) { System.out.print(i); }","int k = 5; do { k--; } while (k > 0);",'while (false) { System.out.print("Hi"); }'],correctAnswer:0,explanation:"With i=1 and i++, i is 1, 2, 3... which is always > 0, creating an infinite loop (until integer overflow).",marks:1},{question:"What happens if you write `while (true)` in Java without a `break` statement?",options:["The loop runs indefinitely until the program is forcefully terminated.","The program generates a compile-time error.","The JVM automatically terminates it after 1000 iterations.","It throws an OutOfMemoryError immediately."],correctAnswer:0,explanation:"`while(true)` creates an intentional indefinite loop that executes endlessly unless an internal break, return, or exception interrupts it.",marks:1},{question:`Predict the output of the code:
int x = 10;
while (x >= 4) {
    System.out.print(x + " ");
    x -= 3;
}`,options:["10 7 4 ","10 7 4 1 ","10 7 ","Infinite loop"],correctAnswer:0,explanation:"Pass 1: prints 10, x becomes 7. Pass 2: prints 7, x becomes 4. Pass 3: prints 4, x becomes 1. 1 >= 4 is false. Loop ends. Output: '10 7 4 '.",marks:2},{question:"What is an unreachable code compile error in Java loops?",answer:"If a loop condition is a constant compile-time false, such as `while (false) { ... }`, the Java compiler flags any statements inside the body as 'unreachable code' and refuses to compile.",marks:2,hint:"Java compiler detects code that can never possibly run."}],g=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 6: PREVENTING INFINITE LOOPS & TRACING DECREMENTING LOOP VARIABLES\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS AN INFINITE LOOP?\r
--------------------------------------------------------------------------------\r
An infinite loop is an execution cycle that never terminates naturally because \r
its continuation condition remains perpetually \`true\`.\r
\r
2. THE THREE MAJOR CAUSES OF UNINTENDED INFINITE LOOPS\r
--------------------------------------------------------------------------------\r
1. Omission of the Update Statement:\r
   int i = 1;\r
   while (i <= 5) {\r
       System.out.println(i); // Forgetting i++ causes i to stay 1 forever.\r
   }\r
\r
2. Updating in the Wrong Direction:\r
   int i = 5;\r
   while (i >= 1) {\r
       System.out.println(i);\r
       i++; // Incrementing instead of decrementing moves i away from termination.\r
   }\r
\r
3. Premature Semicolon on Entry-Controlled Loops:\r
   int k = 1;\r
   while (k <= 5); // Empty body runs endlessly while k is 1\r
   {\r
       k++;\r
   }\r
\r
3. INTENTIONAL INFINITE LOOPS WITH GUARD BREAKS\r
--------------------------------------------------------------------------------\r
In modern software engineering (event loops, server daemons, sensor polling), \r
infinite loops are created intentionally using \`while (true)\` or \`for (;;)\` \r
and terminated via internal guarded \`break\` conditions:\r
\r
    Scanner sc = new Scanner(System.in);\r
    while (true) {\r
        System.out.print("Enter command (or 'quit'): ");\r
        String cmd = sc.next();\r
        if (cmd.equalsIgnoreCase("quit")) {\r
            System.out.println("Terminating session.");\r
            break; // Guarded exit\r
        }\r
    }\r
\r
4. DECREMENTING CONTROL VARIABLE TRACING FORMULA\r
--------------------------------------------------------------------------------\r
When tracing loops with \`x -= step\` or \`--x\`:\r
* Check the start value.\r
* Determine step size (e.g. subtracting 3 each time).\r
* Verify whether the condition is inclusive (\`>=\`) or exclusive (\`>\`).\r
* Record the exact moment the variable drops below the threshold.\r
================================================================================\r
`,w=()=>{const[n,l]=o.useState("correct"),[a,N]=o.useState(8),[s,y]=o.useState(2),r={isInfinite:n!=="correct",reason:n==="wrong"?"Updating in wrong direction: incrementing increases distance from lower boundary.":n==="none"?"Missing update: variable remains constant, condition is perpetually true.":"Safe: decrement progresses variable towards condition termination."},i=[];if(n==="correct"){let t=a;for(;t>=2&&i.length<10;)i.push(t),t-=s}return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2",children:[e.jsx(h,{className:"w-3.5 h-3.5"})," Loop Termination & Safety Analyzer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Detecting Infinite Loops & Decrement Tracing"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"Static Analysis & Loop Invariant Check"})]}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-3 mb-6",children:[{id:"correct",label:"1. Safe Decrement (x -= step)",color:"border-emerald-500 bg-emerald-500/10 text-emerald-400"},{id:"wrong",label:"2. Wrong Direction (x += step)",color:"border-rose-500 bg-rose-500/10 text-rose-400"},{id:"none",label:"3. Missing Update (x unmodified)",color:"border-amber-500 bg-amber-500/10 text-amber-400"}].map(t=>e.jsx("button",{onClick:()=>l(t.id),className:`p-3 rounded-xl border text-xs font-bold transition text-left cursor-pointer ${n===t.id?`${t.color} shadow-lg shadow-black/40`:"bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/40"}`,children:t.label},t.id))}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Simulated Java Code Snippet:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`int x = ${a};
while (x >= 2) {
    System.out.print(x + " ");
    ${n==="correct"?`x -= ${s}; // Moves towards termination`:n==="wrong"?`x += ${s}; // ❌ WRONG: increases infinitely!`:"// ❌ BUG: Forgotten update!"}
}`}),e.jsxs("div",{className:`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${r.isInfinite?"bg-rose-500/10 border-rose-500/30 text-rose-300":"bg-emerald-500/10 border-emerald-500/30 text-emerald-300"}`,children:[r.isInfinite?e.jsx(u,{className:"w-5 h-5 shrink-0 text-rose-400 mt-0.5"}):e.jsx(b,{className:"w-5 h-5 shrink-0 text-emerald-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block font-bold mb-0.5",children:r.isInfinite?"⚠️ CRITICAL: Infinite Loop Detected":"✅ SAFE: Normal Termination Guaranteed"}),e.jsx("span",{className:"text-[11px] leading-relaxed opacity-90",children:r.reason})]})]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Loop Output Stream:"}),n==="correct"?e.jsx("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-emerald-400 flex flex-wrap gap-2",children:i.map((t,d)=>e.jsx("span",{className:"px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded",children:t},d))}):e.jsxs("div",{className:"p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 font-mono text-xs space-y-1",children:[e.jsx("div",{children:"💥 High CPU Utilization (100%)"}),e.jsx("div",{children:"Process frozen: condition (x >= 2) never becomes false!"})]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400",children:["💡 ",e.jsx("strong",{children:"Board Tip:"}),' If a question asks "How many times does this loop run?", look for update direction. If updating moves away from condition, answer is ',e.jsx("strong",{children:"Infinite times"}),"."]})]})]})]})},k=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20",children:[e.jsx(p,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 6"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Preventing Infinite Loops & Tracing Decrementing Loop Variables"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Identify and avoid the three most common causes of accidental infinite loops, explore intentional while(true) loops with guarded break statements, and trace step-decrementing loop variables."})]}),e.jsx(w,{}),e.jsx(m,{title:"Frequently Asked Questions • Loop Termination & Safety",questions:f}),e.jsx(x,{content:g,title:"CBSE Class XII IT 802 – Loop Safety Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 6 Note (.txt)",downloadFileName:"003_004_topic6_note.txt"}),e.jsx(c,{note:"Whenever you encounter a while loop in the exam paper, check the increment/decrement line first! If the condition checks `x >= 1` but the body has `x++`, it will never stop. That's a classic 1-mark objective trap. — Sukanta Hui"})]})});export{k as default};

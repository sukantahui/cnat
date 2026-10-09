import{j as e,b as r}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as u}from"./FAQTemplate-16IfroqC.js";import{P as x}from"./PlainTextPrint-C6NaUtnE.js";import{c as h,cg as a,cW as b}from"./vendor-icons-C1Dcofhq.js";const f=[{question:"What is the primary difference between `break` and `continue` statements inside a Java loop?",answer:"The `break` statement immediately terminates the entire loop and transfers control to the statement following the loop. In contrast, the `continue` statement skips only the remaining statements of the current iteration and jumps directly to the loop's next iteration (evaluating the update/condition).",marks:2,hint:"Break ends the entire loop; continue skips only the current pass."},{question:`What is the output of the following Java snippet?
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.print(i + " ");
}`,options:["1 2 ","1 2 4 5 ","1 2 3 ","3 4 5 "],correctAnswer:0,explanation:"When i becomes 3, the break statement executes, terminating the loop immediately. Output is '1 2 '.",marks:1},{question:`What is the output of the following Java snippet?
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.print(i + " ");
}`,options:["1 2 4 5 ","1 2 ","1 2 3 4 5 ","3 "],correctAnswer:0,explanation:"When i is 3, continue skips the print statement and jumps to i++ (i becomes 4). 3 is omitted. Output: '1 2 4 5 '.",marks:1},{question:"Where does the `continue` statement jump to in a `while` loop versus a `for` loop?",answer:"In a `for` loop, `continue` jumps to the loop update expression (e.g., `i++`). In a `while` loop, `continue` jumps directly to the Boolean test condition header `while(condition)`.",marks:2,hint:"Think about where the counter increment is located in while vs for."},{question:"What danger exists when using `continue` inside a `while` loop?",options:["If the increment statement (e.g. `i++`) is placed after `continue`, it is skipped, resulting in an accidental infinite loop.","The program immediately throws a NullPointerException.","The continue statement is illegal in while loops.","It terminates the JVM."],correctAnswer:0,explanation:"If variable incrementation is placed below continue inside a while body, jumping over it leaves the variable unchanged, causing an infinite loop.",marks:1},{question:"Which keyword can be used to exit both loops and `switch` statements?",options:["break","continue","return","exit"],correctAnswer:0,explanation:"The break keyword is valid in both loop constructs (for, while, do-while) and switch-case blocks.",marks:1},{question:`Predict the output of the nested loop:
for (int r = 1; r <= 2; r++) {
    for (int c = 1; c <= 3; c++) {
        if (c == 2) break;
        System.out.print(r + "" + c + " ");
    }
}`,options:["11 21 ","11 12 21 22 ","11 22 ","11 12 13 "],correctAnswer:0,explanation:"When c == 2, break terminates the INNER loop only. For r=1: prints 11, breaks. For r=2: prints 21, breaks. Output: '11 21 '.",marks:2}],g=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 5: LOOP CONTROL JUMP STATEMENTS: BREAK AND CONTINUE\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT ARE JUMP STATEMENTS?\r
--------------------------------------------------------------------------------\r
Jump statements in Java unconditionally alter the normal sequential flow of \r
execution within iterative structures and control blocks. The two primary jump \r
statements used inside loops are:\r
1. \`break\` statement\r
2. \`continue\` statement\r
\r
2. THE \`BREAK\` STATEMENT\r
--------------------------------------------------------------------------------\r
* Purpose: Terminate the loop immediately.\r
* Behavior: When encountered, Java instantly breaks out of the innermost enclosing \r
  loop (or switch block) and passes control to the first statement outside.\r
* Example:\r
    for (int i = 1; i <= 10; i++) {\r
        if (i == 4) break;\r
        System.out.print(i + " ");\r
    }\r
    Output: 1 2 3 (Loop stops completely at i = 4).\r
\r
3. THE \`CONTINUE\` STATEMENT\r
--------------------------------------------------------------------------------\r
* Purpose: Skip the remaining statements in the current iteration only.\r
* Behavior: When encountered, Java skips whatever code remains in the loop body \r
  for that specific pass and jumps directly to the next iteration:\r
  - In a \`for\` loop: Jumps to the update expression (e.g. \`i++\`).\r
  - In a \`while\` / \`do-while\` loop: Jumps to the condition evaluation.\r
* Example:\r
    for (int i = 1; i <= 5; i++) {\r
        if (i == 3) continue;\r
        System.out.print(i + " ");\r
    }\r
    Output: 1 2 4 5 (Only 3 is skipped).\r
\r
4. COMPARISON TABLE: BREAK VS CONTINUE\r
--------------------------------------------------------------------------------\r
Feature               | \`break\` Statement               | \`continue\` Statement\r
----------------------|---------------------------------|--------------------------------\r
Scope of Effect       | Terminates the ENTIRE loop      | Skips ONLY the CURRENT iteration\r
Where it Jumps        | Outside the loop structure      | To the loop update/condition\r
Applicability         | Valid in loops AND switch       | Valid ONLY inside loops\r
Post-Jump Action      | Loop never runs again           | Next iteration begins\r
\r
5. THE CRITICAL WHILE-LOOP CONTINUE TRAP\r
--------------------------------------------------------------------------------\r
DANGER: In a \`while\` loop, if you place the increment statement \`i++\` AFTER \r
the \`continue\` statement, it will be skipped, causing an infinite loop!\r
\r
WRONG:\r
    int i = 1;\r
    while (i <= 5) {\r
        if (i == 3) continue; // Infinite loop! i remains 3 forever!\r
        System.out.println(i);\r
        i++;\r
    }\r
\r
CORRECT:\r
    int i = 1;\r
    while (i <= 5) {\r
        if (i == 3) {\r
            i++;              // Must increment BEFORE continue!\r
            continue;\r
        }\r
        System.out.println(i);\r
        i++;\r
    }\r
================================================================================\r
`,N=()=>{const[n,l]=r.useState("break"),[i,c]=r.useState(3),d=6,s=[];for(let t=1;t<=d;t++){if(t===i){if(n==="break"){s.push({iter:t,action:"BREAK executed! Entire loop terminated.",status:"break"});break}else if(n==="continue"){s.push({iter:t,action:"CONTINUE executed! Iteration skipped.",status:"continue"});continue}}s.push({iter:t,action:`Printed: "${t}"`,status:"printed",val:t})}const o=s.filter(t=>t.status==="printed").map(t=>t.val);return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2",children:[e.jsx(a,{className:"w-3.5 h-3.5"})," Control Flow Interruption Simulator"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"`break` (Loop Termination) vs `continue` (Iteration Skip)"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"Java Jump Statement Diagnostics"})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mb-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:"Select Jump Statement to Test:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"none",label:"No Jump"},{id:"break",label:"break;"},{id:"continue",label:"continue;"}].map(t=>e.jsx("button",{onClick:()=>l(t.id),className:`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer font-mono ${n===t.id?t.id==="break"?"bg-rose-500 text-slate-950 shadow-md shadow-rose-950":t.id==="continue"?"bg-sky-500 text-slate-950 shadow-md shadow-sky-950":"bg-emerald-500 text-slate-950":"bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"}`,children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:["Trigger Condition Value (`if (i == ",i,")`):"]}),e.jsx("input",{type:"range",min:"1",max:"6",value:i,onChange:t=>c(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"i=1"}),e.jsx("span",{children:"i=2"}),e.jsx("span",{children:"i=3"}),e.jsx("span",{children:"i=4"}),e.jsx("span",{children:"i=5"}),e.jsx("span",{children:"i=6"})]})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Generated Java Execution Code:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`for (int i = 1; i <= 6; i++) {
    if (i == ${i}) {
        ${n==="break"?"break; // Terminates entire loop":n==="continue"?"continue; // Skips current iteration":"// Normal execution"}
    }
    System.out.print(i + " ");
}`}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Console Output Result:"}),e.jsx("div",{className:"font-mono text-base font-bold text-emerald-400",children:o.length>0?o.join(" ")+" ":e.jsx("span",{className:"text-rose-400 text-xs",children:"No output produced"})})]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Step-by-Step Loop Event Log:"}),e.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:s.map((t,p)=>e.jsxs("div",{className:`p-2.5 rounded-xl border text-xs flex items-center justify-between ${t.status==="break"?"bg-rose-500/10 border-rose-500/30 text-rose-300 font-bold":t.status==="continue"?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-slate-900/80 border-slate-800 text-slate-300"}`,children:[e.jsxs("span",{children:["Pass i = ",t.iter]}),e.jsx("span",{children:t.action})]},p))})]})]})]})},v=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20",children:[e.jsx(h,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 5"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["Loop Control Jump Statements: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"break"})," and ",e.jsx("code",{className:"text-sky-400 font-mono",children:"continue"})]}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Understand how jump statements alter iterative loops, explore the contrasting effects of terminating an entire loop versus skipping a single iteration, and master while-loop continue precautions."})]}),e.jsx(N,{}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(a,{className:"w-5 h-5 text-rose-400"}),"The `break` Statement"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Causes immediate termination of the innermost enclosing loop or switch block. No further iterations are attempted. Control is transferred to the line immediately after the loop closing brace."})]}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 text-sky-400"}),"The `continue` Statement"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Bypasses the rest of the statements in the current iteration only. In a for loop, it jumps to the update expression (e.g. ",e.jsx("code",{className:"text-white font-mono",children:"i++"}),"). In a while loop, it jumps to the condition check."]})]})]}),e.jsx(u,{title:"Frequently Asked Questions • Break and Continue",questions:f}),e.jsx(x,{content:g,title:"CBSE Class XII IT 802 – Jump Statements Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Note (.txt)",downloadFileName:"003_004_topic5_note.txt"}),e.jsx(m,{note:"Remember: In a while loop, never place your variable increment after a continue statement without incrementing first! Otherwise, your program will get stuck in an infinite loop because the variable value never changes. — Sukanta Hui"})]})});export{v as default};

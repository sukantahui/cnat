import{j as e,b as n}from"./vendor-react-core-B-R9HE-Z.js";import{T as d}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as c}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{c as x,cK as m,bt as s,br as r,bI as p,az as u}from"./vendor-icons-C1Dcofhq.js";const b=[{question:"Why is the `do-while` loop classified as an exit-controlled loop in Java?",answer:"The `do-while` loop is classified as an exit-controlled (or post-test) loop because the test condition is evaluated at the bottom of the loop body (exit point). Therefore, the body of the loop executes unconditionally at least once before the condition is ever checked.",marks:2,hint:"Recall where the boolean condition appears in the do-while syntax."},{question:"What is guaranteed when using a `do-while` loop in Java?",options:["The loop will execute at least once.","The loop will never produce an infinite loop.","The loop runs faster than a for loop.","The loop does not require loop control variables."],correctAnswer:0,explanation:"Because condition evaluation occurs at the exit point, a do-while loop is guaranteed to execute at least one time under all circumstances.",marks:1},{question:`What is the output of the following Java snippet?
int n = 100;
do {
    System.out.println("Executed!");
} while (n < 10);`,options:["Executed! (printed once)","No output","Compilation error","Infinite loop"],correctAnswer:0,explanation:"The body prints 'Executed!' first, and then checks 100 < 10 (which is false), terminating the loop after 1 execution.",marks:1},{question:"State the mandatory syntax requirement at the end of a `do-while` loop that is NOT required for a `while` loop.",answer:"A do-while loop requires a terminating semicolon (;) after the closing parenthesis of the while condition: `do { ... } while (condition);`. Omitting this semicolon causes a compile-time syntax error.",marks:2,hint:"Think about the punctuation mark at the very end of do-while."},{question:"Which real-world application is the prime candidate for a `do-while` loop?",options:["Iterating through fixed array indexes from 0 to N-1","Interactive menu-driven programs where the options menu must be shown at least once to the user","Infinite server listener with no user prompt","Matrix multiplication"],correctAnswer:1,explanation:"Interactive menu-driven systems require displaying the menu at least once before receiving the user's choice, making do-while the natural design choice.",marks:1},{question:"What error occurs if the semicolon at the end of `while(condition)` in a do-while loop is omitted?",options:["Syntax / Compile-time error: ';' expected","NullPointerException","ArrayIndexOutOfBoundsException","Logic warning but code runs"],correctAnswer:0,explanation:"The Java compiler strictly requires a semicolon to terminate a do-while statement.",marks:1},{question:`Predict the output of the code:
int c = 1;
do {
    System.out.print(c * 3 + " ");
    c++;
} while (c <= 3);`,options:["3 6 9 ","3 6 ","1 2 3 ","3 6 9 12 "],correctAnswer:0,explanation:"Iteration 1: prints 1*3=3, c becomes 2 (2<=3 true). Iteration 2: prints 2*3=6, c becomes 3 (3<=3 true). Iteration 3: prints 3*3=9, c becomes 4 (4<=3 false). Output: '3 6 9 '.",marks:2},{question:"Can a `do-while` loop contain a `break` statement?",options:["Yes, `break` immediately terminates the do-while loop.","No, `break` is only allowed in switch statements.","No, `break` only works in while loops.","Yes, but only if inside an inner for loop."],correctAnswer:0,explanation:"A break statement inside a do-while loop immediately exits the loop, transferring control to the first statement following the loop.",marks:1},{question:`Convert the following while loop into an equivalent do-while loop:
int x = 5;
while (x > 0) {
    System.out.println(x);
    x--;
}`,answer:`int x = 5;
if (x > 0) {
    do {
        System.out.println(x);
        x--;
    } while (x > 0);
}
(Note: When converting a while loop that might not run if initially false, enclosing in an if check guarantees identical behavior; when the initial state is known to be true (x=5), the plain do-while is:
int x = 5;
do {
    System.out.println(x);
    x--;
} while (x > 0);)`,marks:3,hint:"Pay attention to initial variable value validity."},{question:"How does Java execute a do-while loop step-by-step?",answer:`1. Control enters the loop directly without checking any condition.
2. All statements inside the loop body are executed.
3. The Boolean expression in while(condition) is evaluated.
4. If true, control jumps back to the top of the do block.
5. If false, the loop terminates and execution continues after the semicolon.`,marks:3,hint:"List the sequence from entry to condition evaluation."}],w=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 1: WHY DO-WHILE IS CALLED AN EXIT-CONTROLLED LOOP (GUARANTEED 1 EXECUTION)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. THE ARCHITECTURE OF DO-WHILE IN JAVA\r
--------------------------------------------------------------------------------\r
The \`do-while\` loop in Java is structured so that control enters the body of \r
the loop immediately upon reaching the \`do\` keyword. The statements within the \r
body execute unconditionally during the first pass.\r
\r
Only after reaching the bottom of the loop does Java evaluate the Boolean \r
expression specified within the \`while (condition);\` clause.\r
\r
2. SYNTAX AND ESSENTIAL RULES\r
--------------------------------------------------------------------------------\r
Syntax:\r
    do {\r
        // Loop body statements\r
        // Update expression (e.g., x++, x--)\r
    } while (boolean_condition);   <--- MANDATORY SEMICOLON (;)\r
\r
Key Rules:\r
1. Guaranteed Execution: Executes at least 1 time, regardless of whether \r
   the condition evaluates to true or false on the initial pass.\r
2. Semicolon Requirement: Unlike \`for\` and \`while\` loops, omitting the semicolon \r
   at the end of \`while(condition);\` causes a compilation error (';' expected).\r
3. Variable Scope: Variables declared inside the \`do { ... }\` block are NOT \r
   visible inside the \`while(...)\` condition. The loop control variable must \r
   be declared before the \`do\` keyword.\r
\r
3. WHY DO-WHILE IS CALLED "EXIT-CONTROLLED"\r
--------------------------------------------------------------------------------\r
* Entry-Controlled: The guard/gatekeeper stands at the ENTRY. You cannot enter \r
  unless the password (condition) is true.\r
* Exit-Controlled: You enter freely once. The guard/gatekeeper stands at the \r
  EXIT. You are only allowed to RE-ENTER if the condition remains true.\r
\r
4. REAL-WORLD USE CASE: INTERACTIVE MENU SYSTEMS\r
--------------------------------------------------------------------------------\r
In software development (such as ATM software, school billing systems, or \r
terminal menus), the user must see the options at least once before entering \r
a choice.\r
\r
Example:\r
    int choice;\r
    do {\r
        System.out.println("1. Deposit Cash");\r
        System.out.println("2. Withdraw Cash");\r
        System.out.println("3. Exit");\r
        System.out.print("Enter your choice: ");\r
        choice = scanner.nextInt();\r
    } while (choice != 3);\r
\r
5. CBSE BOARD EXAM TRAPS\r
--------------------------------------------------------------------------------\r
* Initial False Condition:\r
    int k = 20;\r
    do {\r
        System.out.print(k + " ");\r
    } while (k < 10);\r
    Output: 20 (Executed exactly once, despite 20 < 10 being false).\r
================================================================================\r
`,f=()=>{const[t,a]=n.useState(1234),[i,N]=n.useState(1234),[g,y]=n.useState(1),[j,E]=n.useState("ready"),o=Number(t)===Number(i);return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2",children:[e.jsx(s,{className:"w-3.5 h-3.5"})," ATM PIN Verification & Exit-Gate Simulator"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Why Do-While Guarantees At Least One Unconditional Run"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"Post-Test Evaluation Architecture"})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2",children:[e.jsx(p,{className:"w-4 h-4"})," ATM Terminal Verification Loop"]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Target Correct PIN:"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:"1234"})]}),e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("label",{className:"text-slate-400",children:"User Entered PIN:"}),e.jsx("input",{type:"number",value:t,onChange:l=>a(Number(l.target.value)),className:"w-24 bg-slate-950 text-amber-300 font-mono text-center font-bold px-2 py-1 rounded border border-slate-700 text-xs"})]})]}),e.jsxs("div",{className:"space-y-2 text-xs",children:[e.jsxs("div",{className:"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-2.5",children:[e.jsx("span",{className:"font-bold text-emerald-400 font-mono",children:"STEP 1:"}),e.jsxs("span",{children:["Control enters ",e.jsx("code",{className:"bg-emerald-950/60 px-1 rounded text-emerald-200",children:"do { ... }"})," without asking for credentials. PIN prompt executes once!"]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-start gap-2.5",children:[e.jsx("span",{className:"font-bold text-amber-400 font-mono",children:"STEP 2:"}),e.jsxs("span",{children:["User entered ",e.jsx("strong",{className:"font-mono",children:t}),". Now condition ",e.jsx("code",{className:"bg-amber-950/60 px-1 rounded text-amber-200",children:"while (pin != 1234);"})," is evaluated."]})]}),e.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-2.5 ${o?"bg-sky-500/10 border-sky-500/20 text-sky-300":"bg-rose-500/10 border-rose-500/20 text-rose-300"}`,children:[e.jsx("span",{className:"font-bold font-mono",children:"STEP 3:"}),e.jsx("span",{children:o?"Condition is FALSE (1234 != 1234 is false). Loop terminates cleanly. Access Granted!":`Condition is TRUE (${t} != 1234). Gate permits RE-ENTRY into loop body for retry.`})]})]})]}),e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-[11px] text-slate-400",children:["💡 Notice how the prompt runs before the password check! That is why ATM / Login screens use ",e.jsx("code",{className:"text-amber-400",children:"do-while"}),"."]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h3",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[e.jsx(r,{className:"w-4 h-4 text-sky-400"})," Java Production Code"]}),e.jsx("span",{className:"text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"CBSE IT 802 Standard"})]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`int pin;
Scanner sc = new Scanner(System.in);

do {
    System.out.print("Enter 4-Digit Security PIN: ");
    pin = sc.nextInt();   // Executed at least ONCE!
    
    if (pin != 1234) {
        System.out.println("❌ Incorrect PIN! Try again.");
    }
} while (pin != 1234);  // <--- Mandatory Semicolon

System.out.println("✅ Access Granted! Welcome.");`}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-1",children:[e.jsxs("strong",{className:"text-amber-400 flex items-center gap-1.5 font-bold",children:[e.jsx(u,{className:"w-3.5 h-3.5"})," Mandatory Semicolon (;) Requirement:"]}),e.jsxs("p",{className:"text-[11px] leading-relaxed text-amber-200/90",children:["In Java, writing ",e.jsx("code",{className:"text-white font-mono font-bold",children:"} while(cond);"})," requires a closing semicolon. Leaving it out produces compile-time error: ",e.jsx("span",{className:"font-mono text-rose-300",children:`"error: ';' expected"`}),"."]})]})]})]})]})},A=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20",children:[e.jsx(x,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 1"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-amber-400 font-mono",children:"do-while"})," is Called an Exit-Controlled Loop"]}),e.jsxs("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:["Master the post-test loop architecture in Java, explore why condition testing occurs after the body executes, and understand why ",e.jsx("code",{className:"text-amber-400",children:"do-while"})," is guaranteed to execute at least once in all scenarios."]})]}),e.jsx(f,{}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsx("div",{className:"p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl w-fit",children:e.jsx(m,{className:"w-5 h-5"})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"1. Unconditional First Pass"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Upon entering the ",e.jsx("code",{className:"text-emerald-400",children:"do"})," block, Java does not evaluate any Boolean expression. Statements execute directly, ensuring initialization and display tasks occur without hindrance."]})]}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsx("div",{className:"p-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl w-fit",children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"2. Exit Gatekeeper"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["The test condition in ",e.jsx("code",{className:"text-amber-400",children:"while (condition);"})," acts as an exit-gate check. If true, control loops back up to ",e.jsx("code",{className:"text-emerald-400",children:"do"}),"; if false, it leaves immediately."]})]}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsx("div",{className:"p-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-xl w-fit",children:e.jsx(r,{className:"w-5 h-5"})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"3. Variable Scoping Trap"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Any variable declared inside the ",e.jsx("code",{className:"text-sky-400",children:"do { ... }"})," block cannot be referenced inside the ",e.jsx("code",{className:"text-amber-400",children:"while(...)"})," condition. Always declare control variables outside!"]})]})]}),e.jsx(c,{title:"Frequently Asked Questions • Do-While Exit-Controlled Loop",questions:b}),e.jsx(h,{content:w,title:"CBSE Class XII IT 802 – Do-While Architecture Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 1 Note (.txt)",downloadFileName:"003_004_topic1_note.txt"}),e.jsx(d,{note:"Remember this golden rule for CBSE IT 802 exams: When the examiner writes a code snippet where the initial condition is FALSE (e.g. k=50; while(k<10); vs do{...}while(k<10);), the while loop prints NOTHING (0 times), while the do-while loop prints EXACTLY ONCE! — Sukanta Hui"})]})});export{A as default};

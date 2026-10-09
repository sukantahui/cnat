import{j as e,b as c}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as x}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{c as p,br as u,az as b,y as f}from"./vendor-icons-C1Dcofhq.js";const g=[{question:"What is indefinite iteration, and why is the `while` loop ideal for it?",answer:"Indefinite iteration refers to a scenario where the exact number of loop repetitions cannot be predetermined before execution, but depends dynamically on a runtime state or user input (e.g., reading data until end-of-file or until the user enters -1). The `while` loop is ideal because it repeats strictly based on a boolean condition rather than a fixed step counter.",marks:2,hint:"Think about scenarios like reading until a sentinel value like -1 is entered."},{question:"What is the syntax of a standard `while` loop in Java?",answer:`while (boolean_expression) {
    // statements in loop body
    // update statement
}`,marks:2,hint:"Notice that while does not take a terminating semicolon after its parentheses."},{question:"What happens if a semicolon is placed immediately after the `while` condition, such as `while (x < 10);`?",options:["The loop body becomes an empty statement (null statement); if x is not updated inside the condition, it creates an infinite loop.","It causes a compilation syntax error.","It runs normally and ignores the semicolon.","The program immediately terminates with code 0."],correctAnswer:0,explanation:"A semicolon after while(cond); terminates the while statement with an empty body. If cond is true and x is not updated, it loops infinitely on the empty statement.",marks:1},{question:`What is the output of the following Java snippet?
int count = 1;
while (count <= 4) {
    System.out.print(count * 2 + " ");
    count += 2;
}`,options:["2 6 ","2 4 6 8 ","2 6 10 ","Compilation error"],correctAnswer:0,explanation:"For count=1: prints 2, count becomes 3. For count=3: prints 6, count becomes 5. 5 <= 4 is false. Loop terminates. Output: '2 6 '.",marks:2},{question:"What is a sentinel value in while loop programming?",options:["A special designated input value used to signal the termination of loop processing (e.g. entering -1 to stop entering marks).","A syntax error thrown by the Java compiler.","The initial starting value of a loop variable.","A reserved keyword in Java like goto."],correctAnswer:0,explanation:"A sentinel value is a dummy value (like -1 or 999) entered by the user to indicate that no more data is to be processed.",marks:1},{question:`Predict the output of the following code:
int n = 5432;
int sum = 0;
while (n > 0) {
    sum += n % 10;
    n = n / 10;
}
System.out.println(sum);`,options:["14","10","2345","5432"],correctAnswer:0,explanation:"In each iteration, n % 10 extracts the last digit (2, 3, 4, 5) and n / 10 removes it. The sum of digits = 2 + 3 + 4 + 5 = 14.",marks:2},{question:"Which loop construct is best used when processing elements until a boolean condition turns false?",options:["while loop","switch case","if-else statement","break statement"],correctAnswer:0,explanation:"The while loop is the fundamental pre-test boolean-driven loop designed for indefinite conditional repetition.",marks:1},{question:`What is the result of the following while loop?
int i = 0;
while (i < 5) {
    System.out.print(i + " ");
}`,options:["Prints '0 ' infinitely because variable 'i' is never updated inside the loop.","Prints '0 1 2 3 4 '","Prints '0 ' once and terminates.","Compilation error"],correctAnswer:0,explanation:"Because i is never incremented, i remains 0 forever, keeping 0 < 5 permanently true and resulting in an infinite loop.",marks:1},{question:"Write a while loop in Java to reverse an integer number `num = 1234`.",answer:`int num = 1234, rev = 0;
while (num != 0) {
    int digit = num % 10;
    rev = (rev * 10) + digit;
    num = num / 10;
}
System.out.println("Reversed: " + rev);`,marks:3,hint:"Use % 10 to get the last digit and * 10 to shift places."},{question:"Can a while loop have multiple conditions in its header?",options:["Yes, conditions can be combined using logical operators (&&, ||, !).","No, while loop only supports a single relational operator.","Yes, but only with commas separating conditions.","No, only for loops allow logical operators."],correctAnswer:0,explanation:"Any valid boolean expression, including compound expressions with && and ||, is valid in the while condition header.",marks:1}],N=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 2: THE WHILE LOOP: SYNTAX, EXECUTION FLOW, AND INDEFINITE ITERATION\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS A WHILE LOOP?\r
--------------------------------------------------------------------------------\r
The \`while\` loop is an entry-controlled loop in Java that evaluates a Boolean \r
expression before every iteration. If the condition is true, the statements \r
within the block execute; if false, the loop terminates immediately.\r
\r
2. SYNTAX AND CONTROL FLOW\r
--------------------------------------------------------------------------------\r
Syntax:\r
    while (boolean_expression) {\r
        // Statements to execute repeatedly\r
        // Variable update expression\r
    }\r
\r
Execution Steps:\r
1. Java evaluates \`boolean_expression\`.\r
2. If \`true\`, the body statements execute sequentially.\r
3. The control variable is modified (incremented/decremented).\r
4. Flow loops back to step 1 to re-evaluate \`boolean_expression\`.\r
5. If \`false\` at any evaluation, control exits to the statement following \`}\`.\r
\r
3. DEFINITE VS INDEFINITE ITERATION\r
--------------------------------------------------------------------------------\r
* Definite Iteration: The exact number of iterations is known before entering \r
  the loop (e.g., repeating 10 times from i = 1 to 10). \`for\` loop is most popular.\r
* Indefinite Iteration: The number of iterations cannot be predicted in advance \r
  because it depends on real-time inputs or runtime conditions (e.g., reading until \r
  sentinel value \`-1\` or extracting digits until \`num == 0\`). \`while\` loop is best.\r
\r
4. CLASSIC ALGORITHMS USING WHILE LOOPS\r
--------------------------------------------------------------------------------\r
A. Sum of Digits Extraction:\r
   int n = 582, sum = 0;\r
   while (n > 0) {\r
       sum += (n % 10);  // Extracts last digit (2, then 8, then 5)\r
       n = n / 10;       // Removes last digit (58, then 5, then 0)\r
   }\r
   Result: sum = 15.\r
\r
B. Number Reversal Algorithm:\r
   int num = 481, rev = 0;\r
   while (num != 0) {\r
       int rem = num % 10;\r
       rev = (rev * 10) + rem;\r
       num = num / 10;\r
   }\r
   Result: rev = 184.\r
\r
5. COMMON TRAPS & BEST PRACTICES\r
--------------------------------------------------------------------------------\r
1. Accidental Semicolon: \`while (x < 10); { x++; }\` creates an infinite loop \r
   on the empty statement because \`x++\` is never reached.\r
2. Missing Update: Forgetting \`x++\` or \`x--\` leaves the condition permanently \r
   true, freezing the application.\r
================================================================================\r
`,w=()=>{const[a,r]=c.useState(4827);let n=Math.abs(Number(a))||0;const s=[];let o=0,i=0,d=1;for(;n>0&&s.length<10;){const t=n%10,l=Math.floor(n/10);o+=t,i=i*10+t,s.push({iter:d++,currentN:n,extractedDigit:t,nextN:l,runningSum:o,runningRev:i}),n=l}return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2",children:[e.jsx(f,{className:"w-3.5 h-3.5"})," Indefinite Iteration Workbench"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Digit Extraction & Number Reversal using While Loop"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`while (n > 0)` Mathematical Traversal"})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1",children:["Test Integer Number (",e.jsx("code",{className:"text-sky-400 font-mono",children:"int n"}),"):"]}),e.jsx("span",{className:"text-xs text-slate-400",children:"Enter any multi-digit number to trace step-by-step loop iterations:"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",value:a,onChange:t=>r(Math.min(9999999,Math.max(1,Number(t.target.value)))),className:"w-36 bg-slate-900 text-sky-300 font-mono font-bold text-base px-3 py-2 rounded-xl border border-slate-700 text-center focus:outline-none focus:border-sky-500"}),e.jsx("button",{onClick:()=>r(Math.floor(1e3+Math.random()*9e3)),className:"px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition",children:"Random"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{className:"font-semibold text-slate-200 uppercase tracking-wider",children:["Iteration Trace Matrix (",s.length," Steps Executed)"]}),e.jsxs("span",{children:["Final Sum: ",e.jsx("strong",{className:"text-emerald-400 font-mono",children:o})," | Reversed: ",e.jsx("strong",{className:"text-purple-400 font-mono",children:i})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 border-collapse bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 bg-slate-900/90 text-slate-200 font-mono",children:[e.jsx("th",{className:"p-3 font-semibold",children:"Iter"}),e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Condition (n > 0)"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Extract (n % 10)"}),e.jsx("th",{className:"p-3 font-semibold text-rose-400",children:"Reduce (n = n / 10)"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Running Sum"}),e.jsx("th",{className:"p-3 font-semibold text-purple-400",children:"Running Reverse"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/80 font-mono",children:[s.map(t=>e.jsxs("tr",{className:"hover:bg-slate-900/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-bold text-white",children:t.iter}),e.jsxs("td",{className:"p-3 text-sky-300",children:[t.currentN," > 0 (true)"]}),e.jsx("td",{className:"p-3 text-amber-300 font-bold bg-amber-500/5",children:t.extractedDigit}),e.jsx("td",{className:"p-3 text-rose-300",children:t.nextN}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:t.runningSum}),e.jsx("td",{className:"p-3 text-purple-300 font-bold",children:t.runningRev})]},t.iter)),e.jsxs("tr",{className:"bg-slate-900/60 font-sans",children:[e.jsx("td",{className:"p-3 font-bold text-slate-400",children:"Exit"}),e.jsx("td",{className:"p-3 font-mono text-red-400 font-bold",children:"0 > 0 (false)"}),e.jsx("td",{colSpan:"4",className:"p-3 text-slate-400 italic",children:"Condition is false. Loop terminates immediately and resumes below closing brace."})]})]})]})})]})]})},k=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:[e.jsx(p,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 2"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-sky-400 font-mono",children:"while"})," Loop: Syntax, Execution Flow & Indefinite Iteration"]}),e.jsxs("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:["Master the entry-controlled ",e.jsx("code",{className:"text-sky-400 font-mono",children:"while"})," loop in Java. Learn how indefinite iteration works, explore digit extraction, reverse algorithms, and sentinel input handling."]})]}),e.jsx(w,{}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(u,{className:"w-5 h-5 text-sky-400"}),"Standard Syntax Blueprint"]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`// 1. Initialization before loop
int count = 1;

// 2. Pre-Test Condition
while (count <= 5) {
    // 3. Executable Body
    System.out.println("Step " + count);
    
    // 4. Update Expression
    count++;
}`}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["If ",e.jsx("code",{className:"text-sky-300 font-mono",children:"count <= 5"})," is initially false (e.g. ",e.jsx("code",{className:"text-slate-200",children:"count = 10"}),"), the body is bypassed completely with 0 executions."]})]}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 text-amber-400"}),"Critical CBSE Exam Traps"]}),e.jsxs("div",{className:"space-y-3 text-xs",children:[e.jsxs("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200",children:[e.jsx("strong",{className:"block text-red-400 font-semibold mb-0.5",children:"Trap 1: Semicolon after while"}),e.jsx("code",{className:"text-white font-mono",children:"while(i < 10); { i++; }"})," creates an empty infinite loop because the body with ",e.jsx("code",{className:"text-white",children:"i++"})," is detached."]}),e.jsxs("div",{className:"p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200",children:[e.jsx("strong",{className:"block text-amber-400 font-semibold mb-0.5",children:"Trap 2: Division vs Modulus"}),e.jsx("code",{className:"text-white font-mono",children:"n / 10"})," removes the last digit (582 / 10 = 58), while ",e.jsx("code",{className:"text-white font-mono",children:"n % 10"})," extracts the last digit (582 % 10 = 2)."]})]})]})]}),e.jsx(x,{title:"Frequently Asked Questions • Java While Loop",questions:g}),e.jsx(h,{content:N,title:"CBSE Class XII IT 802 – While Loop Mastery Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 2 Note (.txt)",downloadFileName:"003_004_topic2_note.txt"}),e.jsx(m,{note:"Whenever you solve digit-based problems in Java (like Armstrong numbers, Palindromes, or Sum of Digits), a while(n > 0) loop with n % 10 and n / 10 is your standard tool. Never forget to divide n by 10, or your program will loop infinitely! — Sukanta Hui"})]})});export{k as default};

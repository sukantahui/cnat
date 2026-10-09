import{j as e,b as a}from"./vendor-react-core-B-R9HE-Z.js";import{T as g}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as w}from"./FAQTemplate-16IfroqC.js";import{P as f}from"./PlainTextPrint-C6NaUtnE.js";import{c as S,bn as k,bh as C,t as N}from"./vendor-icons-C1Dcofhq.js";const y=[{question:`Predict the output of the following Java code:
int k = 1;
do {
    System.out.print((k * 4) + " ");
    k++;
} while (k <= 4);`,options:["4 8 12 16 ","4 8 12 ","1 2 3 4 ","4 8 12 16 20 "],correctAnswer:0,explanation:`Pass 1: k=1 -> prints 4, k becomes 2 (2<=4 true).
Pass 2: k=2 -> prints 8, k becomes 3 (3<=4 true).
Pass 3: k=3 -> prints 12, k becomes 4 (4<=4 true).
Pass 4: k=4 -> prints 16, k becomes 5 (5<=4 false).
Output: '4 8 12 16 '.`,marks:2},{question:`What is the output of the loop below?
int x = 20;
while (x > 5) {
    if (x == 14) break;
    x -= 3;
}
System.out.println(x);`,options:["14","20","17","11"],correctAnswer:0,explanation:"x starts at 20 -> 20 != 14, x becomes 17 -> 17 != 14, x becomes 14 -> 14 == 14, break triggers. Loop exits. System.out.println(x) prints 14.",marks:2},{question:`How many times does the statement \`System.out.println("Hello");\` execute?
int a = 5;
do {
    System.out.println("Hello");
    a--;
} while (a > 5);`,options:["1 time","0 times","5 times","Infinite times"],correctAnswer:0,explanation:"In do-while, the body executes once first. 'Hello' is printed, a becomes 4. Then 4 > 5 is tested (false). The loop terminates after exactly 1 execution.",marks:1},{question:`What is the output of:
int sum = 0;
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) continue;
    sum += i;
}
System.out.println(sum);`,options:["9","15","6","0"],correctAnswer:0,explanation:"When i is even (2, 4), continue skips the sum. For odd i (1, 3, 5), sum += i evaluates to 1 + 3 + 5 = 9.",marks:2},{question:`What is the result of the following Java snippet?
int n = 876;
int count = 0;
while (n > 0) {
    count++;
    n /= 10;
}
System.out.println(count);`,options:["3","876","21","0"],correctAnswer:0,explanation:"The loop divides by 10 three times (876 -> 87 -> 8 -> 0), counting the total number of digits, which is 3.",marks:2}],T=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 8: PRACTICE YOUR SKILL HERE (INTERACTIVE CHALLENGE WORKSPACE)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. HANDS-ON CODING & DRILLS\r
--------------------------------------------------------------------------------\r
This practice lab contains interactive problem sets to test:\r
1. Predicting exact outputs for complex nested while/do-while expressions.\r
2. Converting between for, while, and do-while loops.\r
3. Calculating sum of series, factorials, and digit counting.\r
4. Implementing guard conditions with break and continue.\r
\r
2. LAB EXERCISE QUESTIONS\r
--------------------------------------------------------------------------------\r
Exercise 1:\r
Write a program to display the sum of all even integers between 1 and 50 using \r
a while loop.\r
\r
Exercise 2:\r
Write a program to count how many digits are present in an input integer N \r
using a while loop.\r
\r
Exercise 3:\r
Trace the output of:\r
    int x = 1, y = 5;\r
    while (++x < --y) {\r
        System.out.println(x + " " + y);\r
    }\r
================================================================================\r
`,j=()=>{const[n,x]=a.useState(0),[o,p]=a.useState({}),[l,u]=a.useState({}),c=[{id:0,title:"Challenge 1: Do-While Output Prediction",code:`int num = 6;
do {
    System.out.print((num * 2) + " ");
    num -= 2;
} while (num >= 2);`,options:["12 8 4 ","12 8 4 0 ","12 10 8 6 ","12 8 "],correct:0,explanation:`Pass 1: num=6 -> prints 12, num becomes 4 (4>=2 true).
Pass 2: num=4 -> prints 8, num becomes 2 (2>=2 true).
Pass 3: num=2 -> prints 4, num becomes 0 (0>=2 false).
Final Output: '12 8 4 '.`},{id:1,title:"Challenge 2: Break in Decrementing While Loop",code:`int x = 15;
while (x > 0) {
    if (x == 9) break;
    x -= 3;
}
System.out.println(x);`,options:["9","15","12","0"],correct:0,explanation:"x starts at 15 -> becomes 12 -> becomes 9 -> x == 9 matches, break exits loop. Final println(x) outputs 9."},{id:2,title:"Challenge 3: Digit Count Logic",code:`int n = 45902;
int count = 0;
while (n > 0) {
    count++;
    n = n / 10;
}
System.out.println(count);`,options:["5","4","45902","20"],correct:0,explanation:"Number 45902 has 5 digits. The loop runs 5 times as n reduces by /10 each time until n=0. Output is 5."}],s=c[n],h=r=>{p(t=>({...t,[n]:r})),u(t=>({...t,[n]:!0}))};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(k,{className:"w-3.5 h-3.5"})," Interactive Skill Assessment Arena"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"CBSE IT (802) Loop Mastery & Output Challenge"})]}),e.jsx("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",children:c.map((r,t)=>e.jsxs("button",{onClick:()=>x(t),className:`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${n===t?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950":"text-slate-400 hover:text-white"}`,children:["Task ",t+1]},r.id))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-4 h-4 text-emerald-400"})," ",s.title]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:s.code}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Select the exact console output:"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5",children:s.options.map((r,t)=>{const b=o[n]===t,d=s.correct===t,m=l[n];let i="bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-850";return m&&(d?i="bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold":b&&(i="bg-rose-500/10 border-rose-500/40 text-rose-300")),e.jsxs("button",{onClick:()=>h(t),className:`p-3 rounded-xl border text-xs font-mono text-left transition cursor-pointer flex items-center justify-between ${i}`,children:[e.jsx("span",{children:r}),m&&d&&e.jsx(N,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},t)})})]}),l[n]&&e.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1 ${o[n]===s.correct?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-amber-500/10 border-amber-500/30 text-amber-300"}`,children:[e.jsx("strong",{className:"block font-bold",children:o[n]===s.correct?"🎉 Excellent! Correct Answer.":"💡 Solution Walkthrough:"}),e.jsx("p",{className:"whitespace-pre-line font-mono text-[11px] leading-relaxed text-slate-300",children:s.explanation})]})]})]})},P=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(S,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 8"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Practice your Skill here: Iterative Loops & Output Prediction"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Test your understanding with authentic CBSE examination output tracing challenges, loop conversion drills, and comprehensive MCQs."})]}),e.jsx(j,{}),e.jsx(w,{title:"Frequently Asked Questions • Loop Practice & Board Challenges",questions:y}),e.jsx(f,{content:T,title:"CBSE Class XII IT 802 – Practice Lab Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 8 Note (.txt)",downloadFileName:"003_004_topic8_note.txt"}),e.jsx(g,{note:"Well done on completing Module 003_004! You are now fully equipped to trace loops, predict outputs, write while-loops with Scanner, and prevent infinite loop traps in your CBSE Class XII IT (802) board exam. — Sukanta Hui"})]})});export{P as default};

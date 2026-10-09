import{j as e,b as s}from"./vendor-react-core-B-R9HE-Z.js";import{T as d}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as p}from"./FAQTemplate-16IfroqC.js";import{P as m}from"./PlainTextPrint-C6NaUtnE.js";import{J as u}from"./JavaFileLoader-6jhmPdiK.js";import{c as x,br as h,ae as b,$ as g}from"./vendor-icons-C1Dcofhq.js";import"./JavaCodeBlock-DATOiX7m.js";import"./vendor-prism-CMwpo_qY.js";const N=[{question:"Write the complete Java code using a `while` loop to print numbers from N down to 1, where N is taken as user input.",answer:`import java.util.Scanner;
public class ReverseCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int i = n;
        while (i >= 1) {
            System.out.print(i + " ");
            i--;
        }
    }
}`,marks:4,hint:"Initialize i = n, condition i >= 1, decrement i-- inside loop."},{question:"Which package must be imported in Java to use the `Scanner` class?",options:["java.util.Scanner","java.io.Scanner","java.lang.Scanner","java.net.Scanner"],correctAnswer:0,explanation:"The Scanner class resides in the java.util utility package.",marks:1},{question:"Which Scanner method is used to read an integer from the standard console input?",options:["scanner.nextInt()","scanner.readInt()","scanner.getInteger()","scanner.parseInteger()"],correctAnswer:0,explanation:"nextInt() is the standard method in java.util.Scanner to read integer tokens.",marks:1},{question:'If user inputs N = 5, what is the output of the decrementing while loop `int i = n; while(i >= 1) { System.out.print(i + " "); i--; }`?',options:["5 4 3 2 1 ","1 2 3 4 5 ","5 4 3 2 1 0 ","4 3 2 1 "],correctAnswer:0,explanation:"The loop starts at 5, prints 5 4 3 2 1 and stops when i becomes 0 (0 >= 1 is false).",marks:1},{question:"What will happen if the loop decrement statement `i--;` is omitted in the N down to 1 program?",options:["The program will print N repeatedly in an infinite loop because variable i never decreases.","The loop will terminate after 1 execution.","A compilation syntax error will occur.","Variable i will automatically decrease by default."],correctAnswer:0,explanation:"Without i--, variable i retains its initial value, keeping i >= 1 permanently true and resulting in an infinite loop.",marks:1},{question:"What happens if the user inputs a negative number (e.g. N = -5) in `int i = n; while (i >= 1) { ... }`?",options:["The loop body executes 0 times and produces no output because -5 >= 1 is false initially.","The program crashes with NegativeInputException.","It prints numbers down to -infinity.","It prints -5."],correctAnswer:0,explanation:"Because while is an entry-controlled loop, the condition -5 >= 1 is false at the first check, skipping the body entirely.",marks:1},{question:"How can you modify the loop to print only EVEN numbers from N down to 2?",answer:`int i = (n % 2 == 0) ? n : n - 1;
while (i >= 2) {
    System.out.print(i + " ");
    i -= 2;
}`,marks:2,hint:"Start at the highest even integer <= N, and step down by 2 (i -= 2)."},{question:"What is the difference between `System.out.print()` and `System.out.println()` in Java loops?",options:["print() outputs on the same line, while println() appends a newline character after printing.","println() only accepts strings, print() only accepts numbers.","print() cannot be used inside loops.","There is no difference."],correctAnswer:0,explanation:"System.out.print() keeps the console cursor on the same line, while System.out.println() moves the cursor to the beginning of the next line.",marks:1}],w=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 3: WRITING JAVA PROGRAMS TO PRINT NUMBERS FROM N TO 1 (SCANNER INPUT)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. PROBLEM SPECIFICATION\r
--------------------------------------------------------------------------------\r
Write a Java program to accept an integer N from the user via the keyboard \r
and display all natural numbers from N down to 1 in descending order using \r
a \`while\` loop.\r
\r
2. STEP-BY-STEP ALGORITHM\r
--------------------------------------------------------------------------------\r
Step 1: Import the \`java.util.Scanner\` package.\r
Step 2: Create a Scanner object attached to \`System.in\`.\r
Step 3: Prompt the user and read \`N\` using \`sc.nextInt()\`.\r
Step 4: Initialize the loop counter variable \`int i = N\`.\r
Step 5: Set up the while loop condition: \`while (i >= 1)\`.\r
Step 6: Inside the loop, print the value of \`i\` followed by a space.\r
Step 7: Decrement the counter variable: \`i--\` (or \`i = i - 1\`).\r
Step 8: After the loop terminates, close the scanner object.\r
\r
3. JAVA SOURCE CODE BLUEPRINT\r
--------------------------------------------------------------------------------\r
import java.util.Scanner;\r
\r
public class PrintNto1 {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        System.out.print("Enter positive number N: ");\r
        int n = sc.nextInt();\r
        \r
        int current = n;\r
        while (current >= 1) {\r
            System.out.print(current + " ");\r
            current--; // Decrement towards base condition\r
        }\r
        System.out.println();\r
        sc.close();\r
    }\r
}\r
\r
4. TRACING TABLE FOR N = 5\r
--------------------------------------------------------------------------------\r
Iteration | Current Variable (i) | Test (i >= 1) | Printed Output | Updated (i--)\r
----------|----------------------|---------------|----------------|---------------\r
1         | 5                    | 5 >= 1 (True) | 5              | 4\r
2         | 4                    | 4 >= 1 (True) | 4              | 3\r
3         | 3                    | 3 >= 1 (True) | 3              | 2\r
4         | 2                    | 2 >= 1 (True) | 2              | 1\r
5         | 1                    | 1 >= 1 (True) | 1              | 0\r
6         | 0                    | 0 >= 1 (False)| (Terminates)   | -\r
\r
Final Console Output: 5 4 3 2 1\r
\r
5. COMMON BOARD EXAM QUESTIONS\r
--------------------------------------------------------------------------------\r
* What happens if N <= 0?\r
  The test \`i >= 1\` evaluates to false immediately on the first pass, resulting \r
  in 0 executions and no printed numbers.\r
* Convert to for-loop:\r
  for (int i = n; i >= 1; i--) { System.out.print(i + " "); }\r
================================================================================\r
`,f=`import java.util.Scanner;\r
\r
/**\r
 * CBSE Class XII Information Technology (802)\r
 * Practical Program: Print Numbers from N down to 1 using a while loop\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
public class PrintNto1 {\r
    public static void main(String[] args) {\r
        Scanner scanner = new Scanner(System.in);\r
        \r
        System.out.print("Enter starting positive integer N: ");\r
        int n = scanner.nextInt();\r
        \r
        System.out.println("\\n--- Counting Down from " + n + " to 1 ---");\r
        \r
        // Loop initialization with N\r
        int current = n;\r
        \r
        // Pre-test condition: repeat while current is >= 1\r
        while (current >= 1) {\r
            System.out.print(current + " ");\r
            // Decrement loop control variable\r
            current--;\r
        }\r
        \r
        System.out.println("\\nCountdown Complete!");\r
        scanner.close();\r
    }\r
}\r
`,S=()=>{const[i,o]=s.useState(6),[a,l]=s.useState("all"),t=[];let r=i;for(;r>=1&&t.length<20;)(a==="all"||a==="even"&&r%2===0||a==="odd"&&r%2!==0)&&t.push(r),r--;return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(b,{className:"w-3.5 h-3.5"})," Countdown Workbench"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"N to 1 Reverse Countdown Console Simulation"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`int i = n; while (i >= 1) { i--; }`"})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mb-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:["Starting Value N: ",e.jsx("span",{className:"font-mono text-emerald-400 text-sm font-bold",children:i})]}),e.jsx("input",{type:"range",min:"1",max:"15",value:i,onChange:n=>o(Number(n.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"1"}),e.jsx("span",{children:"5"}),e.jsx("span",{children:"10"}),e.jsx("span",{children:"15"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:"Filter Sequence:"}),e.jsx("div",{className:"flex gap-2",children:[{id:"all",label:"All Numbers"},{id:"even",label:"Even Only"},{id:"odd",label:"Odd Only"}].map(n=>e.jsx("button",{onClick:()=>l(n.id),className:`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition cursor-pointer ${a===n.id?"bg-emerald-500 text-slate-950 font-bold":"bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"}`,children:n.label},n.id))})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2",children:[e.jsx(g,{className:"w-4 h-4 text-emerald-400"})," Standard Console Output"]}),e.jsxs("span",{className:"text-xs text-slate-500 font-mono",children:["Total Printed: ",e.jsx("strong",{className:"text-emerald-300",children:t.length})," items"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-emerald-400 flex flex-wrap gap-2 items-center",children:[t.map((n,c)=>e.jsx("span",{className:"px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-white font-bold",children:n},c)),t.length===0&&e.jsx("span",{className:"text-slate-500 italic",children:"No numbers generated."})]})]})]})},O=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(x,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 3"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Writing Java Programs to Print Numbers from N to 1 using a While Loop"}),e.jsxs("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:["Learn how to accept integer inputs with the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Scanner"})," class and execute countdown iterations from N down to 1 using a decrementing while loop."]})]}),e.jsx(S,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(h,{className:"w-5 h-5 text-sky-400"}),"Complete Executable Java Program"]}),e.jsx(u,{fileModule:f,title:"PrintNto1.java",highlightLines:[16,17,18,19,20]})]}),e.jsx(p,{title:"Frequently Asked Questions • Reverse While Loop Programs",questions:N}),e.jsx(m,{content:w,title:"CBSE Class XII IT 802 – N to 1 Program Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Note (.txt)",downloadFileName:"003_004_topic3_note.txt"}),e.jsx(d,{note:"In countdown programs, remember that the loop control variable decreases (i--), and the condition uses greater-than-or-equal-to (i >= 1). If you accidentally write i <= 1 with i=5, the condition evaluates to false immediately and prints nothing! — Sukanta Hui"})]})});export{O as default};

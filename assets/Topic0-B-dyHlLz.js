import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as n}from"./CFileLoader-DTzZ6-lz.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
\r
/**\r
 * ControlFlowDemo.c\r
 * Demonstrates decision branching (if-else, switch-case)\r
 * and loop iterations (while, for).\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int choice;\r
    int num, i, isPrime = 1;\r
\r
    printf("=== Control Flow & Branching Portal ===\\n");\r
    printf("1. Check Prime Number\\n");\r
    printf("2. Print Even Numbers (1 to 10)\\n");\r
    printf("3. Exit\\n");\r
    printf("Enter choice (1-3): ");\r
    scanf("%d", &choice);\r
\r
    switch (choice) {\r
        case 1:\r
            printf("Enter integer to test prime: ");\r
            scanf("%d", &num);\r
            if (num <= 1) {\r
                isPrime = 0;\r
            } else {\r
                for (i = 2; i * i <= num; i++) {\r
                    if (num % i == 0) {\r
                        isPrime = 0;\r
                        break;\r
                    }\r
                }\r
            }\r
            if (isPrime) {\r
                printf("%d is a PRIME number.\\n", num);\r
            } else {\r
                printf("%d is NOT a prime number.\\n", num);\r
            }\r
            break;\r
\r
        case 2:\r
            printf("Even Numbers from 1 to 10:\\n");\r
            for (i = 1; i <= 10; i++) {\r
                if (i % 2 != 0) continue;\r
                printf("%d ", i);\r
            }\r
            printf("\\n");\r
            break;\r
\r
        case 3:\r
            printf("Exiting program.\\n");\r
            break;\r
\r
        default:\r
            printf("Invalid selection.\\n");\r
            break;\r
    }\r
\r
    return 0;\r
}\r
`,s=[{question:"What is the difference between pre-test (while, for) and post-test (do-while) loops?",shortAnswer:"Pre-test checks condition before execution; post-test executes body at least once before checking.",explanation:"A do-while loop guarantees at least one execution iteration even if the condition is false initially.",hint:"do-while executes at least once.",level:"basic"},{question:"Why is the break statement necessary inside switch-case blocks?",shortAnswer:"Without break, execution falls through into subsequent case labels regardless of condition.",explanation:"Fall-through behavior can be useful intentionally, but omitting break accidentally causes bug traps.",hint:"break prevents case fall-through.",level:"intermediate"}],a=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_003: Control Flow: Branching & Loops\r
TOPIC 0: Decision Making & Iterative Control Flow\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Branching: if, else-if ladder, nested if, switch-case\r
- Loops: while (pre-test), do-while (post-test), for (counted loop)\r
- Jump Statements: break, continue, goto\r
================================================================================\r
`;function w(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 0"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Control Flow"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Control Flow: Branching & Loops"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master conditional decision making with if-else and switch-case, loop mechanics (while, do-while, for), jump statements, and prime number detection algorithms."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Algorithmic Decision Trees"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Control flow structures dictate the execution path of a C program based on runtime boolean evaluations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Code Example: ControlFlowDemo.c"}),e.jsx(n,{fileModule:i,title:"ControlFlowDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 001_003 Topic 0 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(r,{content:a,title:"Module 001_003 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(o,{note:"Always test prime testing loops up to sqrt(N) to optimize time complexity from O(N) to O(sqrt(N))! — Sukanta Hui"})})]})}export{w as default};

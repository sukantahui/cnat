import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as i}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
\r
/**\r
 * PatternAndLoopsDemo.c\r
 * Pyramid Pattern & Loop Logic Utility\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int rows = 5, i, j, space;\r
\r
    printf("=== Pyramid Pattern Printing in C ===\\n\\n");\r
\r
    for (i = 1; i <= rows; i++) {\r
        // Print leading spaces\r
        for (space = 1; space <= rows - i; space++) {\r
            printf(" ");\r
        }\r
        // Print stars\r
        for (j = 1; j <= (2 * i - 1); j++) {\r
            printf("*");\r
        }\r
        printf("\\n");\r
    }\r
\r
    return 0;\r
}\r
`,s=[{question:"How do nested loops work in matrix and pattern algorithms?",shortAnswer:"The outer loop controls rows/iterations; the inner loop completes all iterations per outer row.",explanation:"For every single step of the outer loop index, the inner loop executes its full cycle from start to finish.",hint:"Outer loop = rows, Inner loop = columns/stars.",level:"basic"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_003: Control Flow: Branching & Loops\r
TOPIC 1: Module 001_003 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Prime & Armstrong Number Verifier\r
- Project 2: Interactive ATM Banking PIN & Menu Simulator\r
================================================================================\r
`,c={projectCategory:"Module 001_003 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P3.1",title:"Armstrong Number Verifier",difficulty:"Intermediate",description:"Write a C program that checks whether a given positive integer is an Armstrong number (e.g. 153 = 1^3 + 5^3 + 3^3).",exampleText:"Input number: 153",exampleOutput:"153 is an ARMSTRONG NUMBER.",logicExplanation:`1. Store original number temp = num.
2. Extract digits using modulo % 10 in a while (temp > 0) loop.
3. Cube each digit and accumulate sum.
4. Compare sum with original num.`,answer:`#include <stdio.h>

int main(void) {
    int num, originalNum, remainder, result = 0;
    printf("Enter a three-digit integer: ");
    if (scanf("%d", &num) != 1) return 1;

    originalNum = num;
    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += remainder * remainder * remainder;
        originalNum /= 10;
    }

    if (result == num)
        printf("%d is an ARMSTRONG NUMBER.\\n", num);
    else
        printf("%d is NOT an Armstrong number.\\n", num);

    return 0;
}`,codeExplanation:"Demonstrates digit extraction using modulo (%) and division (/) in a loop."},{projectId:"P3.2",title:"Interactive ATM PIN & Menu Simulator",difficulty:"Intermediate",description:"Simulate an ATM banking menu. Allow up to 3 PIN entry attempts. If PIN is correct (1234), show balance, deposit, withdraw, and exit menu.",exampleText:"PIN: 1234, Deposit: 500",exampleOutput:`PIN Accepted!
1. Balance: 1000.00
2. Deposit 500.00 -> New Balance: 1500.00`,logicExplanation:`1. Use do-while loop to prompt for PIN up to 3 times.
2. Upon success, launch switch-case menu loop for transactions.`,answer:`#include <stdio.h>

int main(void) {
    int pin, attempts = 0, choice;
    float balance = 1000.00f, amount;

    do {
        printf("Enter 4-digit PIN: ");
        scanf("%d", &pin);
        attempts++;
        if (pin == 1234) break;
        printf("Incorrect PIN. Attempts left: %d\\n", 3 - attempts);
    } while (attempts < 3);

    if (pin != 1234) {
        printf("Card Blocked due to 3 failed attempts.\\n");
        return 1;
    }

    printf("\\n--- ATM Menu ---\\n1. Check Balance\\n2. Deposit\\n3. Withdraw\\nChoice: ");
    scanf("%d", &choice);
    switch(choice) {
        case 1:
            printf("Balance: $%.2f\\n", balance);
            break;
        case 2:
            printf("Enter Deposit Amount: ");
            scanf("%f", &amount);
            balance += amount;
            printf("Updated Balance: $%.2f\\n", balance);
            break;
        case 3:
            printf("Enter Withdrawal Amount: ");
            scanf("%f", &amount);
            if (amount <= balance) {
                balance -= amount;
                printf("Dispensing Cash. Remaining: $%.2f\\n", balance);
            } else {
                printf("Insufficient Funds!\\n");
            }
            break;
        default:
            printf("Invalid Option.\\n");
    }
    return 0;
}`,codeExplanation:"Demonstrates secure do-while authentication loops and transaction switch branching."}]};function w(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 1"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 001_003 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master control flow algorithms through Armstrong verification and interactive ATM state machine projects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: PatternAndLoopsDemo.c"}),e.jsx(t,{fileModule:a,title:"PatternAndLoopsDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 001_003 Project Solutions"}),e.jsx(i,{data:c})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_003 Topic 1 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(r,{content:l,title:"Module 001_003 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(o,{note:"Loops and state machines form the core of every interactive CLI application in C! — Sukanta Hui"})})]})}export{w as default};

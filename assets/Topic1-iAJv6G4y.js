import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as i}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
/**\r
 * CapstoneSystemDemo.c\r
 * Command-Line File Utility & Student Record Manager Capstone\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(int argc, char *argv[]) {\r
    printf("=== C Systems Capstone Application ===\\n\\n");\r
    printf("Argument Count (argc): %d\\n", argc);\r
\r
    for (int i = 0; i < argc; i++) {\r
        printf("argv[%d]: %s\\n", i, argv[i]);\r
    }\r
\r
    return 0;\r
}\r
`,s=[{question:"What do argc and argv parameters in main(int argc, char *argv[]) represent?",shortAnswer:"argc is argument count; argv is array of string argument pointers passed from host CLI terminal.",explanation:"argv[0] holds the program executable path; argv[1] through argv[argc-1] contain user command-line arguments.",hint:"argc = count, argv = string array.",level:"intermediate"}],c=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 004_012: Data Structures & Systems Capstone Projects\r
TOPIC 1: Module 004_012 Hands-on Capstone Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Command-Line File Utility & Singly Linked List Data Manager\r
- Project 2: Production-Grade Student Record & Inventory Capstone\r
================================================================================\r
`,d={projectCategory:"Module 004_012 · Systems Capstone Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","GDB","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P12.1",title:"CLI File Word Counter Utility",difficulty:"Advanced",description:"Write a command-line C utility that accepts a filename via argv[1] and counts total lines, words, and characters in the file (similar to wc command).",exampleText:"./mywc sample.txt",exampleOutput:"Lines: 4 | Words: 24 | Chars: 152",logicExplanation:`1. Verify argc >= 2.
2. Open file argv[1] with fopen.
3. Loop through chars with fgetc: count newlines, spaces, and total chars.`,answer:`#include <stdio.h>
#include <ctype.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <filename>\\n", argv[0]);
        return 1;
    }
    FILE *fp = fopen(argv[1], "r");
    if (!fp) {
        perror("File Open Error");
        return 1;
    }
    int ch, lines = 0, words = 0, chars = 0, inWord = 0;
    while ((ch = fgetc(fp)) != EOF) {
        chars++;
        if (ch == '\\n') lines++;
        if (isspace(ch)) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            words++;
        }
    }
    fclose(fp);
    printf("Lines: %d | Words: %d | Chars: %d\\n", lines, words, chars);
    return 0;
}`,codeExplanation:"Demonstrates command-line argument processing and stream word counting."},{projectId:"P12.2",title:"Singly Linked List Inventory System Capstone",difficulty:"Expert",description:"Build a complete C inventory management system using dynamic Singly Linked List nodes with insert, delete, display, and memory deallocation.",exampleText:"Insert Item 101, Item 102",exampleOutput:"[ID: 101, Name: Keyboard] -> [ID: 102, Name: Mouse] -> NULL",logicExplanation:`1. Structure Node { int id; char name[30]; struct Node *next; }.
2. Implement insertEnd and freeList functions.`,answer:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Item {
    int id;
    char name[30];
    struct Item *next;
} Item;

void insertItem(Item **head, int id, const char *name) {
    Item *newItem = malloc(sizeof(Item));
    newItem->id = id;
    strcpy(newItem->name, name);
    newItem->next = NULL;
    if (*head == NULL) {
        *head = newItem;
        return;
    }
    Item *curr = *head;
    while (curr->next) curr = curr->next;
    curr->next = newItem;
}

int main(void) {
    Item *inventory = NULL;
    insertItem(&inventory, 101, "Keyboard");
    insertItem(&inventory, 102, "Mouse");

    Item *curr = inventory;
    while (curr) {
        printf("[ID: %d, Name: %s] -> ", curr->id, curr->name);
        curr = curr->next;
    }
    printf("NULL\\n");

    // Free inventory
    while (inventory) {
        Item *tmp = inventory;
        inventory = inventory->next;
        free(tmp);
    }
    return 0;
}`,codeExplanation:"Demonstrates capstone linked list inventory manager with complete dynamic memory cleanup."}]};function j(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 004_012 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 004_012 Systems Capstone Projects"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master command-line file utilities and pure C linked list inventory capstones."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: CapstoneSystemDemo.c"}),e.jsx(t,{fileModule:o,title:"CapstoneSystemDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 004_012 Capstone Project Solutions"}),e.jsx(i,{data:d})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 004_012 Topic 1 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(r,{content:c,title:"Module 004_012 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_004_012_topic1_note.txt"})}),e.jsx(a,{note:"Congratulations on completing the C Programming Master Roadmap! You now possess deep systems intuition, pointer mastery, and memory engineering capabilities! — Sukanta Hui"})]})}export{j as default};

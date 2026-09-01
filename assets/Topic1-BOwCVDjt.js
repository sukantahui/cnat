import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DTzZ6-lz.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as s}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * CustomStringLibDemo.c\r
 * Custom string length & reversal without <string.h>\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
size_t customStrlen(const char *str) {\r
    size_t len = 0;\r
    while (str[len] != '\\0') len++;\r
    return len;\r
}\r
\r
void customReverse(char *str) {\r
    size_t i = 0, j = customStrlen(str);\r
    if (j == 0) return;\r
    j--;\r
    while (i < j) {\r
        char temp = str[i];\r
        str[i] = str[j];\r
        str[j] = temp;\r
        i++;\r
        j--;\r
    }\r
}\r
\r
int main(void) {\r
    char word[] = "Barrackpore";\r
\r
    printf("=== Custom String Manipulation Engine ===\\n\\n");\r
    printf("Original Word : %s\\n", word);\r
    printf("Custom Length : %zu\\n", customStrlen(word));\r
\r
    customReverse(word);\r
    printf("Reversed Word : %s\\n", word);\r
\r
    return 0;\r
}\r
`,a=[{question:"How do you implement custom string reversal in C without standard library functions?",shortAnswer:"Use a two-pointer technique: swap characters at index start and end until pointers meet.",explanation:"Find string length, then swap str[i] and str[j] while incrementing i and decrementing j.",hint:"Two-pointer in-place swap.",level:"intermediate"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_006: Strings & Character Array Handling\r
TOPIC 1: Module 002_006 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Text Anagram & Palindrome Verifier\r
- Project 2: Custom String Library Engine\r
================================================================================\r
`,d={projectCategory:"Module 002_006 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P6.1",title:"Text Palindrome & Anagram Verifier",difficulty:"Intermediate",description:"Build a C application that checks if an input string is a palindrome (reads same forwards and backwards).",exampleText:"Input: madam",exampleOutput:"'madam' is a PALINDROME.",logicExplanation:`1. Find string length len = strlen(str).
2. Compare str[i] with str[len - 1 - i] for i from 0 to len/2.
3. If all match, it is a palindrome.`,answer:`#include <stdio.h>
#include <string.h>

int isPalindrome(const char *str) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) return 0;
    }
    return 1;
}

int main(void) {
    char word[100];
    printf("Enter word: ");
    if (scanf("%99s", word) != 1) return 1;

    if (isPalindrome(word))
        printf("'%s' is a PALINDROME.\\n", word);
    else
        printf("'%s' is NOT a palindrome.\\n", word);
    return 0;
}`,codeExplanation:"Demonstrates palindrome verification logic using character comparisons."},{projectId:"P6.2",title:"Custom String Concatenation & Length Engine",difficulty:"Intermediate",description:"Implement custom versions of strlen (my_strlen) and strcat (my_strcat) without using string.h.",exampleText:"Str1: Hello, Str2: World",exampleOutput:"Combined: Hello World",logicExplanation:`1. my_strlen counts chars until '\\0'.
2. my_strcat appends dest pointer to source until '\\0' and adds final '\\0'.`,answer:`#include <stdio.h>

void my_strcat(char *dest, const char *src) {
    while (*dest != '\\0') dest++;
    while (*src != '\\0') {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\\0';
}

int main(void) {
    char buffer[100] = "Coder & ";
    my_strcat(buffer, "AccoTax");
    printf("Combined Result: %s\\n", buffer);
    return 0;
}`,codeExplanation:"Demonstrates pointer traversal for string concatenation without standard headers."}]};function C(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_006 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 002_006 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master palindrome verification and custom string library algorithms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: CustomStringLibDemo.c"}),e.jsx(r,{fileModule:o,title:"CustomStringLibDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 002_006 Project Solutions"}),e.jsx(s,{data:d})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 002_006 Topic 1 FAQs",questions:a})}),e.jsx("section",{children:e.jsx(n,{content:l,title:"Module 002_006 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_006_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(i,{note:"Always ensure destination char buffers are allocated with sufficient room for the trailing '\\\\0'! — Sukanta Hui"})})]})}export{C as default};

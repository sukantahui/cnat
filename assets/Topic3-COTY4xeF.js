import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
\r
/**\r
 * CustomStringAlgorithmsDemo.c\r
 * Custom manual implementations of string manipulation algorithms\r
 * without relying on <string.h>: custom_strlen, custom_strcpy, in-place reverse,\r
 * palindrome verification, to_uppercase, and vowel/consonant counter.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// 1. Custom strlen\r
int my_strlen(const char *str) {\r
    int length = 0;\r
    while (*str != '\\0') {\r
        length++;\r
        str++;\r
    }\r
    return length;\r
}\r
\r
// 2. Custom strcpy\r
void my_strcpy(char *dest, const char *src) {\r
    while (*src != '\\0') {\r
        *dest = *src;\r
        dest++;\r
        src++;\r
    }\r
    *dest = '\\0'; // Append terminating null character\r
}\r
\r
// 3. In-place string reversal\r
void my_reverse(char *str) {\r
    int i = 0;\r
    int j = my_strlen(str) - 1;\r
    while (i < j) {\r
        char temp = str[i];\r
        str[i] = str[j];\r
        str[j] = temp;\r
        i++;\r
        j--;\r
    }\r
}\r
\r
// 4. Palindrome check\r
int my_is_palindrome(const char *str) {\r
    int i = 0;\r
    int j = my_strlen(str) - 1;\r
    while (i < j) {\r
        if (str[i] != str[j]) {\r
            return 0; // Not a palindrome\r
        }\r
        i++;\r
        j--;\r
    }\r
    return 1; // Is palindrome\r
}\r
\r
// 5. In-place uppercase conversion\r
void my_to_uppercase(char *str) {\r
    for (int i = 0; str[i] != '\\0'; i++) {\r
        if (str[i] >= 'a' && str[i] <= 'z') {\r
            str[i] = str[i] - 32; // Offset to uppercase\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    char original[] = "Madam";\r
    char palindromeCandidate[] = "radar";\r
    char buffer[50];\r
    char textToReverse[] = "Barrackpore";\r
\r
    printf("====================================================\\n");\r
    printf(" Custom String Manipulation Algorithms (No string.h)\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    // 1. Length\r
    printf("1. my_strlen(\\"%s\\") = %d\\n\\n", textToReverse, my_strlen(textToReverse));\r
\r
    // 2. Copy\r
    my_strcpy(buffer, textToReverse);\r
    printf("2. my_strcpy(buffer, \\"%s\\") → buffer = \\"%s\\"\\n\\n", textToReverse, buffer);\r
\r
    // 3. Reverse\r
    my_reverse(buffer);\r
    printf("3. my_reverse() on \\"%s\\" → \\"%s\\"\\n\\n", textToReverse, buffer);\r
\r
    // 4. Palindrome\r
    printf("4. Palindrome Tests:\\n");\r
    printf("   • Is \\"%s\\" a palindrome? %s\\n", \r
           original, my_is_palindrome(original) ? "YES (Palindrome)" : "NO (Case Mismatch)");\r
    printf("   • Is \\"%s\\" a palindrome? %s\\n\\n", \r
           palindromeCandidate, my_is_palindrome(palindromeCandidate) ? "YES (Palindrome)" : "NO");\r
\r
    // 5. Uppercase conversion\r
    char city[] = "shyamnagar";\r
    printf("5. Lowercase string : \\"%s\\"\\n", city);\r
    my_to_uppercase(city);\r
    printf("   my_to_uppercase() : \\"%s\\"\\n", city);\r
\r
    return 0;\r
}\r
`,a=[{question:"How is `my_strlen` implemented using pointer traversal in C?",shortAnswer:"Loop `while (*str != '\\0') { count++; str++; }` until the null terminator is hit.",explanation:"Dereferencing the pointer tests the current character. It returns the accumulated count in O(n) time.",hint:"Pointer increment until dereferenced value is '\\0'.",level:"basic",codeExample:`int my_strlen(const char *s) {
    int len = 0;
    while (*s++) len++;
    return len;
}`},{question:"How is `my_strcpy` implemented concisely using pointer assignment in a while loop?",shortAnswer:"`while ((*dest++ = *src++));`",explanation:"Assigns character, tests if the assigned character is non-zero, then increments both pointers until `\\0` is copied.",hint:"Classic K&R C idiom: `while ((*d++ = *s++));`.",level:"intermediate",codeExample:`void my_strcpy(char *d, const char *s) {
    while ((*d++ = *s++));
}`},{question:"How do you reverse a string in-place in C without extra memory?",shortAnswer:"Initialize two pointers `i = 0` and `j = len - 1`. Swap `str[i]` and `str[j]` while incrementing `i` and decrementing `j`.",explanation:"Runs in O(n/2) = O(n) time and O(1) auxiliary space.",hint:"Two-pointer swap moving towards center.",level:"basic"},{question:"What is the algorithmic condition for a string to be a palindrome?",shortAnswer:'The string reads the exact same forwards and backwards (e.g. "radar", "level").',explanation:"For all i from 0 to len / 2: `str[i] == str[len - 1 - i]`.",hint:"Symmetric character equality from both ends.",level:"basic"},{question:'Why does "Madam" fail a case-sensitive palindrome check in C?',shortAnswer:"Because 'M' (ASCII 77) is not equal to 'm' (ASCII 109).",explanation:"A case-insensitive check must normalize both characters using `tolower()` or `toupper()` before comparing.",hint:"ASCII 77 != ASCII 109.",level:"basic"},{question:"How do you convert a string to uppercase in-place in C?",shortAnswer:"If `str[i] >= 'a' && str[i] <= 'z'`, subtract 32: `str[i] -= 32;`.",explanation:"In ASCII, lowercase characters start at 97 ('a') and uppercase at 65 ('A'). The difference is 32.",hint:"Subtract 32 from lowercase letters.",level:"basic"},{question:"How do you convert a string to lowercase in-place in C?",shortAnswer:"If `str[i] >= 'A' && str[i] <= 'Z'`, add 32: `str[i] += 32;`.",explanation:"Adding 32 transforms 'A' (65) into 'a' (97).",hint:"Add 32 to uppercase letters.",level:"basic"},{question:"How do you count the total vowels, consonants, digits, and spaces in a string?",shortAnswer:"Iterate through the string and use a `switch` or `if-else` ladder to classify each character.",explanation:"Check for 'a','e','i','o','u' (case-insensitive), isdigit(), and isspace().",hint:"Character classification loop.",level:"basic"},{question:"How do you remove all whitespace characters from a string in-place in O(n)?",shortAnswer:"Use two pointers (read pointer `j` and write pointer `i`).",explanation:"If `str[j] != ' '`, assign `str[i++] = str[j]`. Finally, append `str[i] = '\\0'`. Runs in single pass.",hint:"Two-pointer write filter.",level:"intermediate",codeExample:`int i = 0;
for (int j = 0; str[j] != '\\0'; j++) {
    if (str[j] != ' ') str[i++] = str[j];
}
str[i] = '\\0';`},{question:'How do you check if two strings are Anagrams (e.g. "listen" and "silent")?',shortAnswer:"Count character frequencies using an array of 26 (or 256) integers.",explanation:"Increment counts for string 1 and decrement for string 2. If all frequency counts are 0, they are anagrams.",hint:"Frequency count table of 256 bytes.",level:"intermediate"},{question:"How do you count the total number of words in a sentence string?",shortAnswer:"Count transitions from space to non-space characters using a boolean `inWord` flag.",explanation:"Handles multiple consecutive spaces and leading/trailing spaces accurately.",hint:"State flag tracking word boundaries.",level:"intermediate"},{question:"How do you implement custom `my_strcmp`?",shortAnswer:"Compare `*s1` and `*s2`; if different or `\\0` reached, return `(unsigned char)*s1 - (unsigned char)*s2`.",explanation:"Advance pointers while `*s1 && (*s1 == *s2)`.",hint:"Difference between first mismatching unsigned char.",level:"intermediate",codeExample:`int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && (*s1 == *s2)) { s1++; s2++; }
    return *(unsigned char*)s1 - *(unsigned char*)s2;
}`},{question:"How do you implement custom `my_strcat`?",shortAnswer:"Advance pointer to destination's `\\0`, then copy source characters and append new `\\0`.",explanation:"Find tail with `while (*d) d++;`, then `while ((*d++ = *s++));`.",hint:"Find '\\0' in dest, then copy src.",level:"intermediate"},{question:"How do you reverse individual words in a sentence while keeping word order intact?",shortAnswer:"Reverse each word individually by finding space boundaries, then reverse the words in place.",explanation:"Track word start and end indices and apply standard two-pointer in-place reversal on each word segment.",hint:"Segmented word-by-word reversal.",level:"intermediate"},{question:'How do you reverse the entire sentence order (e.g. "I love C" -> "C love I")?',shortAnswer:'Step 1: Reverse the entire string ("C evol I"); Step 2: Reverse each individual word ("C love I").',explanation:"Two-step reversal yields the reversed word sentence in O(n) time and O(1) space.",hint:"Reverse entire string, then reverse individual words.",level:"advanced"},{question:"How do you implement custom `my_strstr` substring search in C?",shortAnswer:"Nested loop comparing substring characters against haystack starting from each index.",explanation:"For each position in haystack, verify if subsequent characters match needle until needle's `\\0`.",hint:"Brute force substring matching in O(N * M).",level:"intermediate",codeExample:`char* my_strstr(const char *h, const char *n) {
    if (!*n) return (char*)h;
    for (; *h; h++) {
        const char *h_p = h, *n_p = n;
        while (*h_p && *n_p && (*h_p == *n_p)) { h_p++; n_p++; }
        if (!*n_p) return (char*)h;
    }
    return NULL;
}`},{question:"How do you convert an integer to a string (custom `itoa`) in pure C?",shortAnswer:"Extract digits using `% 10`, store characters in reverse, and finally reverse the string buffer.",explanation:"Handle negative numbers with a sign flag, and zero explicitly.",hint:"Modulo 10 digit extraction + reverse buffer.",level:"intermediate"},{question:"How do you convert a string of digits to an integer (custom `atoi`) in pure C?",shortAnswer:"Iterate characters: `result = result * 10 + (str[i] - '0');`.",explanation:"Subtracting `'0'` converts ASCII digit char to numeric int. Handles optional leading '-' sign.",hint:"`res = res * 10 + (c - '0')`.",level:"basic",codeExample:`int my_atoi(const char *s) {
    int res = 0, sign = 1;
    if (*s == '-') { sign = -1; s++; }
    while (*s >= '0' && *s <= '9') { res = res * 10 + (*s++ - '0'); }
    return res * sign;
}`},{question:"How do you find the first non-repeating character in a string in O(n) time?",shortAnswer:"Count frequencies in a 256-integer array in pass 1; in pass 2, return the first character with count == 1.",explanation:"Two linear passes take O(n) time and O(1) space.",hint:"256-element frequency lookup in two passes.",level:"intermediate"},{question:'How do you compress repeated characters in a string (e.g. "aaabbc" -> "a3b2c1")?',shortAnswer:"Run-length encoding (RLE): Count consecutive matching characters and write character + count.",explanation:"Iterate while next char matches current, incrementing count.",hint:"Run-length encoding (RLE).",level:"intermediate"},{question:"How do you check if a string contains only digits in C?",shortAnswer:"Loop through all characters; if any character is `< '0'` or `> '9'`, return 0.",explanation:"If loop completes to `\\0`, return 1.",hint:"Validate each character in range ['0'..'9'].",level:"basic"},{question:"How do you toggle the case of every character in a string (uppercase to lowercase and vice-versa)?",shortAnswer:"If uppercase add 32; if lowercase subtract 32; or use bitwise XOR with 32 (`c ^ 32`).",explanation:"In ASCII, the 6th bit (value 32) toggles case. `c ^ 32` flips 'A' to 'a' and 'a' to 'A'.",hint:"Bitwise XOR with 32 (0x20).",level:"advanced"},{question:"How do you replace all occurrences of a character `oldChar` with `newChar` in a string?",shortAnswer:"Loop through string; if `str[i] == oldChar`, assign `str[i] = newChar`.",explanation:"Modifies characters in-place in O(n) time.",hint:"Single-pass character replacement.",level:"basic"},{question:"Why is manual pointer traversal often faster than index subscripting `str[i]` in tight loops on older compilers?",shortAnswer:"Pointer traversal uses auto-increment instructions without computing `base + i * sizeof(char)` every step.",explanation:"Modern optimizers optimize both equally, but pointer traversal remains standard C idiom.",hint:"Single pointer increment vs base+offset calculation.",level:"advanced"},{question:"What is the danger of writing custom string manipulation functions without handling `\\0` carefully?",shortAnswer:"Missing the terminating `\\0` causes all downstream string functions to read out-of-bounds memory.",explanation:"Always explicitly set `dest[i] = '\\0'` at the conclusion of every string generating function.",hint:"Never forget the final '\\0' assignment.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_006: Strings & Character Array Handling\r
TOPIC 3: Custom String Manipulation Algorithms (Without <string.h>)\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE ALGORITHMIC IMPLEMENTATIONS\r
--------------------------------------------------------------------------------\r
- Custom strlen:\r
    int my_strlen(const char *s) {\r
        int len = 0;\r
        while (*s++) len++;\r
        return len;\r
    }\r
\r
- Custom strcpy:\r
    void my_strcpy(char *d, const char *s) {\r
        while ((*d++ = *s++));\r
    }\r
\r
- In-Place Reverse:\r
    void my_reverse(char *s) {\r
        int i = 0, j = my_strlen(s) - 1;\r
        while (i < j) {\r
            char t = s[i]; s[i] = s[j]; s[j] = t;\r
            i++; j--;\r
        }\r
    }\r
\r
- Palindrome Check:\r
    int my_is_palindrome(const char *s) {\r
        int i = 0, j = my_strlen(s) - 1;\r
        while (i < j) {\r
            if (s[i] != s[j]) return 0;\r
            i++; j--;\r
        }\r
        return 1;\r
    }\r
\r
2. CASE CONVERSION & ASCII ARITHMETIC\r
--------------------------------------------------------------------------------\r
- Lowercase to Uppercase : \`c = c - 32;\`   (or \`c - ('a' - 'A')\`)\r
- Uppercase to Lowercase : \`c = c + 32;\`   (or \`c + ('a' - 'A')\`)\r
- Toggle Case Bitwise    : \`c = c ^ 32;\`   (or \`c ^ 0x20\`)\r
- Char to Int Digit      : \`digit = c - '0';\`\r
- Int to Char Digit      : \`c = digit + '0';\`\r
\r
3. SUMMARY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Always append '\\0' to the destination after any custom copying/filtering.\r
[✓] In two-pointer algorithms, iterate while \`i < j\` to stop at midpoint.\r
[✓] Use unsigned char when doing arithmetic difference calculations.\r
================================================================================\r
`;function w(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_006 · Topic 3"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Pure C Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Custom String Manipulation Algorithms (Without <string.h>)"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Re-engineer fundamental string algorithms from first principles. Implement pointer-based ",e.jsx("code",{children:"my_strlen"}),", ",e.jsx("code",{children:"my_strcpy"}),", in-place string reversal, palindrome detection, and ASCII case conversion routines without third-party library dependencies."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Magic Behind the Black Box"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Sukanta Hui"})," often asks advanced students: ",e.jsx("em",{children:'"If you are programming an aerospace microcontroller or an embedded medical device with no standard library available, how do you measure, copy, reverse, and compare strings?"'})]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"⚙️ Pure Pointer Mechanics"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["Every string function is simply a loop that traverses characters until ",e.jsx("code",{children:"*ptr == '\\0'"}),". Understanding how to build custom string engines gives you total freedom in embedded firmware, custom game engines, and OS kernel development where standard libraries cannot be linked!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: In-Place String Reversal Algorithm"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"In-Place String Reversal: Two Pointers i and j Swapping Towards Center"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"text-xs font-bold",children:"Step 1: Swap str[0] ('B') and str[10] ('e')"}),e.jsx("rect",{x:"0",y:"30",width:"45",height:"40",rx:"6",fill:"#e11d48"}),e.jsx("text",{x:"22",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-sm font-mono",children:"'e'"}),e.jsx("rect",{x:"50",y:"30",width:"160",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"130",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"font-mono text-xs",children:"arrackpor"}),e.jsx("rect",{x:"215",y:"30",width:"45",height:"40",rx:"6",fill:"#38bdf8"}),e.jsx("text",{x:"237",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-sm font-mono",children:"'B'"})]}),e.jsxs("g",{transform:"translate(420, 60)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"text-xs font-bold",children:"Step 2: Advance i++, Decrement j-- → Swap 'a' and 'r'"}),e.jsx("rect",{x:"0",y:"30",width:"40",height:"40",rx:"6",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"20",y:"55",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs",children:"'e'"}),e.jsx("rect",{x:"45",y:"30",width:"45",height:"40",rx:"6",fill:"#e11d48"}),e.jsx("text",{x:"67",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-sm font-mono",children:"'r'"}),e.jsx("rect",{x:"95",y:"30",width:"80",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"135",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"font-mono text-xs",children:"rackp"}),e.jsx("rect",{x:"180",y:"30",width:"45",height:"40",rx:"6",fill:"#38bdf8"}),e.jsx("text",{x:"202",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-sm font-mono",children:"'a'"}),e.jsx("rect",{x:"230",y:"30",width:"40",height:"40",rx:"6",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"250",y:"55",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs",children:"'B'"})]}),e.jsx("rect",{x:"60",y:"160",width:"800",height:"60",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"460",y:"185",textAnchor:"middle",fill:"#10b981",className:"text-xs font-mono font-bold",children:"✓ Process terminates when i >= j at the middle character in O(N/2) = O(N) Time and O(1) Space!"}),e.jsx("text",{x:"460",y:"205",textAnchor:"middle",fill:"#94a3b8",className:"text-[11px]",children:'Final Result: "eropkcarraB" (Reversed completely in place)'})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: The Classic K&R C Idiom"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-sm",children:"The 1-Line strcpy Loop"}),e.jsx("p",{className:"font-mono text-emerald-400 bg-slate-950 p-3 rounded-xl border border-slate-800",children:"while ((*dest++ = *src++));"}),e.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["1. ",e.jsx("code",{children:"*src"})," is copied into ",e.jsx("code",{children:"*dest"}),".",e.jsx("br",{}),"2. Both pointers are incremented to the next memory address.",e.jsx("br",{}),"3. The loop continues until the copied character is ",e.jsx("code",{children:"'\\0'"})," (evaluating to false / 0)."]})]}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-sm",children:"ASCII Case Conversion Arithmetic"}),e.jsxs("div",{className:"font-mono text-xs bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-sky-300",children:"// Lowercase to Uppercase:"}),e.jsx("p",{className:"text-emerald-400",children:"c = c - 32; // ('a' 97 - 32 = 'A' 65)"}),e.jsx("p",{className:"text-sky-300 pt-1",children:"// Uppercase to Lowercase:"}),e.jsx("p",{className:"text-emerald-400",children:"c = c + 32; // ('A' 65 + 32 = 'a' 97)"})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Custom String Manipulation Engine Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"CustomStringAlgorithmsDemo.c"}),") demonstrates manual implementations of length counting, string copying, in-place reversal, palindrome checking, and uppercase conversion."]}),e.jsx(r,{fileModule:i,title:"CustomStringAlgorithmsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Custom String Manipulation Algorithms (No string.h)
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

1. my_strlen("Barrackpore") = 11

2. my_strcpy(buffer, "Barrackpore") → buffer = "Barrackpore"

3. my_reverse() on "Barrackpore" → "eropkcarraB"

4. Palindrome Tests:
   • Is "Madam" a palindrome? NO (Case Mismatch)
   • Is "radar" a palindrome? YES (Palindrome)

5. Lowercase string : "shyamnagar"
   my_to_uppercase() : "SHYAMNAGAR"`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to Null-Terminate in Custom Functions:"})," When writing a function that generates or copies a string, always assign ",e.jsx("code",{children:"*dest = '\\0';"})," at the conclusion of the copy loop."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case Sensitivity in Palindrome Checking:"}),' "Racecar" will fail a simple character equality check because ',e.jsx("code",{children:"'R' != 'r'"}),". Normalize both sides with ",e.jsx("code",{children:"tolower()"})," if case-insensitive matching is required."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying Read-Only String Pointers:"})," Passing ",e.jsx("code",{children:'char *str = "text";'})," into ",e.jsx("code",{children:"my_reverse(str)"})," will crash with a Segmentation Fault because string literals reside in ",e.jsx("code",{children:".rodata"}),"."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["How can you reverse the order of words in a sentence (e.g., turning ",e.jsx("code",{children:'"I love C"'})," into ",e.jsx("code",{children:'"C love I"'}),") in $O(n)$ time using only in-place reversals?",e.jsx("em",{children:"(Hint: First reverse the entire sentence, then reverse each word individually!)"})]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 002_006 Topic 3 FAQs: Custom String Manipulation",questions:a})}),e.jsx("section",{children:e.jsx(t,{content:o,title:"Module 002_006 Topic 3 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Note",downloadFileName:"module_002_006_topic3_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Re-implementing standard library functions from scratch is the #1 way to build deep pointer intuition and master low-level memory mechanics! — Sukanta Hui"})})]})}export{w as default};

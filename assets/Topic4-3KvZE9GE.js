import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * ArrayOfStringsDemo.c\r
 * Demonstrates 2D character arrays (fixed-width) vs array of string pointers (ragged/jagged),\r
 * alphabetical string sorting using strcmp() and pointer swaps.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#define NUM_STUDENTS 5\r
#define MAX_NAME_LEN 30\r
\r
// 1. Alphabetical sorting of 2D fixed-width char array using strcpy\r
void sort2DStringArray(char names[NUM_STUDENTS][MAX_NAME_LEN], int count) {\r
    char temp[MAX_NAME_LEN];\r
    for (int i = 0; i < count - 1; i++) {\r
        for (int j = 0; j < count - 1 - i; j++) {\r
            if (strcmp(names[j], names[j + 1]) > 0) {\r
                // Swap whole string buffer\r
                strcpy(temp, names[j]);\r
                strcpy(names[j], names[j + 1]);\r
                strcpy(names[j + 1], temp);\r
            }\r
        }\r
    }\r
}\r
\r
// 2. High-performance alphabetical sorting of string pointers (O(1) pointer swap!)\r
void sortStringPointers(const char *names[], int count) {\r
    for (int i = 0; i < count - 1; i++) {\r
        for (int j = 0; j < count - 1 - i; j++) {\r
            if (strcmp(names[j], names[j + 1]) > 0) {\r
                // Swap 8-byte pointer addresses directly (Zero memory copying!)\r
                const char *temp = names[j];\r
                names[j] = names[j + 1];\r
                names[j + 1] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    // A. 2D Fixed-width Array: 5 rows of 30 bytes = 150 contiguous bytes in RAM\r
    char studentList[NUM_STUDENTS][MAX_NAME_LEN] = {\r
        "Swadeep Mukherjee",\r
        "Tuhina Paul",\r
        "Abhronila Das",\r
        "Debangshu Roy",\r
        "Arindam Hui"\r
    };\r
\r
    // B. Array of Char Pointers: 5 pointers (40 bytes) pointing to string literals\r
    const char *cities[] = {\r
        "Shyamnagar",\r
        "Barrackpore",\r
        "Naihati",\r
        "Ichapur",\r
        "Kolkata"\r
    };\r
    int cityCount = sizeof(cities) / sizeof(cities[0]);\r
\r
    printf("====================================================\\n");\r
    printf(" Array of Strings: 2D Char Arrays vs Pointer Arrays\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("1. Unsorted 2D Character Array:\\n");\r
    for (int i = 0; i < NUM_STUDENTS; i++) {\r
        printf("   [%d] %-20s (Address: %p, Stride: %zu B)\\n",\r
               i, studentList[i], (void*)studentList[i], sizeof(studentList[0]));\r
    }\r
    printf("\\n");\r
\r
    // Sort 2D array\r
    sort2DStringArray(studentList, NUM_STUDENTS);\r
    printf("2. Alphabetically Sorted 2D Student Array:\\n");\r
    for (int i = 0; i < NUM_STUDENTS; i++) {\r
        printf("   [%d] %s\\n", i + 1, studentList[i]);\r
    }\r
    printf("\\n");\r
\r
    // Sort Pointer Array\r
    printf("3. Array of String Pointers (Before Sort):\\n");\r
    for (int i = 0; i < cityCount; i++) {\r
        printf("   [%d] %-15s (Points to: %p in .rodata)\\n", i, cities[i], (void*)cities[i]);\r
    }\r
    printf("\\n");\r
\r
    sortStringPointers(cities, cityCount);\r
    printf("4. Alphabetically Sorted String Pointers (Lightning Fast O(1) Swaps):\\n");\r
    for (int i = 0; i < cityCount; i++) {\r
        printf("   [%d] %s\\n", i + 1, cities[i]);\r
    }\r
\r
    return 0;\r
}\r
`,i=[{question:"What are the two primary ways to represent a collection/array of strings in C?",shortAnswer:"1. 2D character array `char arr[M][N]`, and 2. Array of character pointers `char *arr[M]`.",explanation:"2D char arrays allocate fixed contiguous memory blocks; array of pointers stores memory addresses to variable-length strings.",hint:"2D char array vs Array of char pointers.",level:"basic"},{question:"What is the memory wastage drawback of using a 2D character array `char names[100][50]`?",shortAnswer:"Internal Fragmentation: Short strings waste unused trailing bytes in each 50-byte row slot.",explanation:"If a name is 'Roy' (4 bytes with `\\0`), 46 bytes in that row remain allocated and completely unused.",hint:"Fixed row size leads to internal memory fragmentation.",level:"intermediate"},{question:"What is a 'Ragged Array' (or Jagged Array) of strings in C?",shortAnswer:"An array of pointers `const char *arr[]` where each pointer points to a string of exact variable length.",explanation:"Saves memory by only allocating the exact number of bytes each string requires without fixed column padding.",hint:"Array of pointers pointing to variable-length strings.",level:"intermediate"},{question:"Why is sorting an array of string pointers `char *arr[]` significantly faster than sorting a 2D array `char arr[][50]`?",shortAnswer:"Sorting pointers swaps only 8-byte pointer addresses, whereas 2D arrays copy entire 50-byte string buffers.",explanation:"Swapping 8 bytes takes O(1) CPU instructions, whereas copying long strings using `strcpy()` requires O(N) memory moves.",hint:"Pointer swapping vs Buffer copying.",level:"advanced"},{question:"How do you access the 3rd character of the 2nd string in `char names[5][20]`?",shortAnswer:"`names[1][2]`.",explanation:"Zero-based indexing: 2nd string is row 1, 3rd character is column 2.",hint:"Row index 1, Col index 2.",level:"basic"},{question:"How do you pass a 2D array of strings to a function?",shortAnswer:"`void process(char names[][MAX_LEN], int count);`",explanation:"The second dimension `MAX_LEN` is mandatory so the compiler can compute row offsets.",hint:"Must specify column width MAX_LEN.",level:"basic"},{question:"How do you pass an array of string pointers to a function?",shortAnswer:"`void process(const char *names[], int count);` or `void process(const char **names, int count);`.",explanation:"An array of pointers decays into a double pointer (`char**`).",hint:"char *names[] or char **names.",level:"basic"},{question:"How do you perform a linear search for a target name in an array of strings in C?",shortAnswer:"Loop through strings and compare each using `strcmp(names[i], target) == 0`.",explanation:"If `strcmp` returns 0, the target string is found at index i.",hint:"strcmp inside loop.",level:"basic"},{question:"How do you perform Binary Search on a sorted array of strings?",shortAnswer:"Use standard binary search with `int cmp = strcmp(arr[mid], target);`.",explanation:"If `cmp == 0`, match found; if `cmp < 0`, `low = mid + 1`; if `cmp > 0`, `high = mid - 1`.",hint:"Binary search driven by strcmp.",level:"intermediate"},{question:"How do you sort an array of strings using `qsort()` from `<stdlib.h>`?",shortAnswer:"Pass a comparator that casts `const void *` to `const char **` and calls `strcmp` on dereferenced pointers.",explanation:"`qsort` passes pointers to the array elements. For `char *arr[]`, elements are `char*`, so comparator receives `char**`.",hint:"Cast to (const char**) in comparator.",level:"advanced",codeExample:`int cmpStrings(const void *a, const void *b) {
    return strcmp(*(const char**)a, *(const char**)b);
}`},{question:"What is the memory size of `char *cities[5]` on a 64-bit operating system?",options:["5 bytes","40 bytes (5 pointers * 8 bytes)","20 bytes","100 bytes"],correctAnswer:1,explanation:"Each pointer occupies 8 bytes on a 64-bit architecture: 5 * 8 = 40 bytes (excluding the strings pointed to)."},{question:"What is command line arguments `char *argv[]` in `main(int argc, char *argv[])`?",shortAnswer:"An array of character pointers (array of strings) passed from the terminal to the program.",explanation:"`argv[0]` holds the program name, and `argv[1]` through `argv[argc - 1]` hold terminal arguments.",hint:"Terminal arguments array of string pointers.",level:"intermediate"},{question:"What will happen if you attempt to modify `cities[0][0] = 'K'` when `cities` is declared as `char *cities[] = {\"Barrackpore\"};`?",shortAnswer:'Runtime Segmentation Fault because "Barrackpore" is a string literal in read-only `.rodata` memory.',explanation:"Array of char pointers pointing to literals cannot be mutated.",hint:"Points to read-only string literal.",level:"intermediate"},{question:"How do you dynamically allocate a 2D array of strings of custom dimensions at runtime?",shortAnswer:"Allocate an array of `char*` via `malloc(rows * sizeof(char*))`, then allocate each row with `malloc(cols * sizeof(char))`.",explanation:"Creates a fully dynamic, heap-allocated matrix of strings.",hint:"Two-stage malloc allocation.",level:"advanced"},{question:"How do you deallocate a dynamically allocated 2D array of strings?",shortAnswer:"Free each individual row first in a loop, then free the master pointer array.",explanation:"Freeing the master array first loses references to row buffers, causing severe memory leaks.",hint:"Free inner rows first, then free outer pointer array.",level:"advanced"},{question:"How do you find the longest string in an array of strings in C?",shortAnswer:"Iterate through the array, compute `strlen(arr[i])`, and track the index with maximum length.",explanation:"Linear scan in O(total characters) time.",hint:"Track max strlen index.",level:"basic"},{question:"How do you convert all strings in an array of strings to uppercase?",shortAnswer:"Nested loop: outer loop selects string `arr[i]`, inner loop converts characters `arr[i][j]` using ASCII offset.",explanation:"Applicable to mutable 2D char arrays or heap-allocated strings.",hint:"Nested string and character loop.",level:"basic"},{question:"What does `argc` represent in `int main(int argc, char *argv[])`?",shortAnswer:"Argument Count: The total number of command-line arguments passed (including program executable name).",explanation:"`argc` is always >= 1.",hint:"Total number of arguments in argv.",level:"basic"},{question:"What is guaranteed about `argv[argc]` in the ISO C standard?",shortAnswer:"`argv[argc]` is guaranteed to be a `NULL` pointer sentinel.",explanation:"Allows looping through arguments using `for (char **p = argv; *p != NULL; p++)`.",hint:"argv[argc] is always NULL.",level:"intermediate"},{question:"How do you sort an array of strings in descending alphabetical order?",shortAnswer:"In the sorting condition, swap when `strcmp(s1, s2) < 0` instead of `> 0`.",explanation:"Inverts the comparison to order Z to A.",hint:"strcmp < 0 for descending order.",level:"basic"},{question:'Why can\'t you initialize a 2D char array with `char names[2][10] = {"VeryLongCityNameHere"};`?',shortAnswer:"The string exceeds the 10-byte column capacity, causing compiler warnings or dropped null terminators.",explanation:"Always ensure column width exceeds maximum string length + 1.",hint:"Exceeds column width bound.",level:"basic"},{question:"How do you read N full-line strings with spaces from the user into a 2D array?",shortAnswer:"Using a loop with `fgets(names[i], sizeof(names[i]), stdin);` and trimming `\\n`.",explanation:"Safely bounds each line to the maximum column width.",hint:"fgets inside loop.",level:"basic"},{question:'What is the memory advantage of using `char *menu[] = {"File", "Edit", "View", "Help"};` for UI menus?',shortAnswer:"Zero wasted space. Each menu label uses only its exact string length in ROM/Flash memory.",explanation:"Fixed 2D array `char[4][20]` would waste 60+ bytes of memory.",hint:"Tight memory footprint in firmware/embedded systems.",level:"intermediate"},{question:"What happens if you pass `char names[5][20]` to a function expecting `char **names`?",shortAnswer:"Compiler type mismatch warning and runtime crash when dereferenced.",explanation:"A contiguous 2D array `names[5][20]` is NOT an array of pointers in memory; it is a flat 100-byte buffer.",hint:"Contiguous 2D grid != array of pointer addresses.",level:"advanced"},{question:"How do you copy a 2D array of strings to another 2D array?",shortAnswer:"Loop through rows and call `strcpy(dest[i], src[i]);` or copy entire block with `memcpy(dest, src, sizeof(dest));`.",explanation:"`memcpy` is fastest because 2D arrays reside contiguously in memory.",hint:"Row-by-row strcpy or single memcpy.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_006: Strings & Character Array Handling\r
TOPIC 4: Array of Strings: 2D Char Arrays vs Array of Char Pointers\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 2D FIXED-WIDTH CHARACTER ARRAY (CONTIGUOUS TABLE)\r
--------------------------------------------------------------------------------\r
- Syntax: \`char names[NUM_ROWS][MAX_LEN];\`\r
- Memory Layout: Single contiguous block of (NUM_ROWS * MAX_LEN) bytes in RAM.\r
- Pros: Simple stack allocation, in-place mutable.\r
- Cons: Internal fragmentation (wasted padding bytes for short names).\r
- Sorting: Requires copying entire string buffers via \`strcpy()\` (O(N) data copying).\r
\r
2. ARRAY OF CHARACTER POINTERS (RAGGED / JAGGED ARRAY)\r
--------------------------------------------------------------------------------\r
- Syntax: \`const char *names[NUM_ROWS];\`\r
- Memory Layout: Array of pointer addresses (8 bytes each on 64-bit OS),\r
  pointing to variable-length strings in \`.rodata\` or heap.\r
- Pros: Zero wasted memory padding; blazing fast O(1) pointer address swaps!\r
- Cons: Pointed string literals are read-only / immutable unless heap-allocated.\r
\r
3. ALPHABETICAL SORTING COMPARISON\r
--------------------------------------------------------------------------------\r
- 2D Char Array Swap:\r
    strcpy(temp, arr[j]);\r
    strcpy(arr[j], arr[j+1]);\r
    strcpy(arr[j+1], temp);      // Copies 50+ bytes per swap!\r
\r
- Pointer Array Swap:\r
    const char *temp = arr[j];\r
    arr[j] = arr[j+1];\r
    arr[j+1] = temp;             // Swaps only 8 bytes per swap (Zero copying)!\r
\r
4. SUMMARY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] In 2D char array parameters, specify column width: \`void f(char s[][30], int n)\`.\r
[✓] In pointer array parameters, use: \`void f(const char *s[], int n)\`.\r
[✓] Command-line arguments \`char *argv[]\` are an array of string pointers!\r
================================================================================\r
`;function f(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_006 · Topic 4"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Multi-String Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Array of Strings: 2D Character Arrays vs. Array of String Pointers"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master text collection architectures in C. Compare contiguous 2D character tables against ragged pointer arrays, analyze internal memory fragmentation tradeoffs, and implement high-performance alphabetical sorting."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Heavy Cabinet vs. Index Card File"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our Barrackpore lab, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Abhronila"})," were sorting a list of 10,000 student names alphabetically. Swadeep used a 2D array ",e.jsx("code",{children:"char names[10000][50]"})," and called ",e.jsx("code",{children:"strcpy()"})," on every swap, which took several seconds. Abhronila used an array of string pointers ",e.jsx("code",{children:"char *names[10000]"})," and sorted them in milliseconds!"]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"🗄️ Moving Heavy Furniture vs. Swapping Index Cards"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["In a 2D char array, swapping two names means physically carrying 50 bytes of furniture between rooms using ",e.jsx("code",{children:"strcpy()"}),". In an array of pointers, the names stay exactly where they are in memory—you simply swap two lightweight ",e.jsx("strong",{children:"8-byte business cards"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: 2D Fixed Grid vs. Jagged Pointer Array"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 300",className:"w-full min-w-[750px] font-sans",children:[e.jsxs("g",{transform:"translate(40, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"220",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"2D Array: char list[3][15] (Fixed Grid)"}),e.jsx("rect",{x:"20",y:"55",width:"220",height:"35",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"130",y:"78",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs",children:'"Swadeep\\0"'}),e.jsx("rect",{x:"245",y:"55",width:"115",height:"35",rx:"4",fill:"#e11d48",opacity:"0.4"}),e.jsx("text",{x:"302",y:"78",textAnchor:"middle",fill:"#fecdd3",className:"text-[10px]",children:"Wasted Padding"}),e.jsx("rect",{x:"20",y:"100",width:"220",height:"35",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"130",y:"123",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs",children:'"Tuhina\\0"'}),e.jsx("rect",{x:"245",y:"100",width:"115",height:"35",rx:"4",fill:"#e11d48",opacity:"0.4"}),e.jsx("text",{x:"302",y:"123",textAnchor:"middle",fill:"#fecdd3",className:"text-[10px]",children:"Wasted Padding"}),e.jsx("rect",{x:"20",y:"145",width:"220",height:"35",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"130",y:"168",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs",children:'"Roy\\0"'}),e.jsx("rect",{x:"245",y:"145",width:"115",height:"35",rx:"4",fill:"#e11d48",opacity:"0.4"}),e.jsx("text",{x:"302",y:"168",textAnchor:"middle",fill:"#fecdd3",className:"text-[10px]",children:"Wasted Padding"})]}),e.jsxs("g",{transform:"translate(500, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"220",rx:"10",fill:"#0f172a",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"30",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-sm",children:"Pointer Array: char *list[3] (Ragged / Zero Waste)"}),e.jsx("rect",{x:"20",y:"55",width:"120",height:"35",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"80",y:"78",textAnchor:"middle",fill:"#818cf8",className:"font-mono text-xs font-bold",children:"ptr[0] (0x100)"}),e.jsx("path",{d:"M 140 72 L 200 72",stroke:"#34d399",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"200",y:"55",width:"160",height:"35",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"280",y:"78",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs",children:'"Swadeep\\0"'}),e.jsx("rect",{x:"20",y:"100",width:"120",height:"35",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"80",y:"123",textAnchor:"middle",fill:"#818cf8",className:"font-mono text-xs font-bold",children:"ptr[1] (0x200)"}),e.jsx("path",{d:"M 140 117 L 200 117",stroke:"#34d399",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"200",y:"100",width:"160",height:"35",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"280",y:"123",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs",children:'"Tuhina\\0"'}),e.jsx("rect",{x:"20",y:"145",width:"120",height:"35",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"80",y:"168",textAnchor:"middle",fill:"#818cf8",className:"font-mono text-xs font-bold",children:"ptr[2] (0x300)"}),e.jsx("path",{d:"M 140 162 L 200 162",stroke:"#34d399",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"200",y:"145",width:"160",height:"35",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"280",y:"168",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs",children:'"Roy\\0"'})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Tradeoff Analysis"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"2D Character Array (`char a[M][N]`)"}),e.jsxs("ul",{className:"space-y-1.5 text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Memory:"})," Fixed $M \\times N$ contiguous bytes."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Mutating Text:"})," ✅ Allowed (in-place stack mutable)."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sorting Cost:"})," $O(N)$ memory copying per swap using ",e.jsx("code",{children:"strcpy"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Ideal For:"})," Fixed-length fields (e.g. phone numbers, codes)."]})]})]}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-sm",children:"Array of Pointers (`char *a[M]`)"}),e.jsxs("ul",{className:"space-y-1.5 text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Memory:"})," Exact character bytes + $M \\times 8$ bytes for pointers."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Mutating Text:"})," ❌ Read-only if pointing to string literals."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sorting Cost:"})," $O(1)$ instantaneous pointer address swap."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Ideal For:"})," Dictionaries, CLI arguments (",e.jsx("code",{children:"argv"}),"), menus."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Array of Strings & Sorting Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"ArrayOfStringsDemo.c"}),") demonstrates both 2D character arrays and arrays of character pointers, and compares buffer copying versus instantaneous pointer swapping during alphabetical sorting."]}),e.jsx(r,{fileModule:s,title:"ArrayOfStringsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Array of Strings: 2D Char Arrays vs Pointer Arrays
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

1. Unsorted 2D Character Array:
   [0] Swadeep Mukherjee    (Address: 0000007FE9DFF780, Stride: 30 B)
   [1] Tuhina Paul          (Address: 0000007FE9DFF79E, Stride: 30 B)
   [2] Abhronila Das        (Address: 0000007FE9DFF7BC, Stride: 30 B)
   [3] Debangshu Roy        (Address: 0000007FE9DFF7DA, Stride: 30 B)
   [4] Arindam Hui          (Address: 0000007FE9DFF7F8, Stride: 30 B)

2. Alphabetically Sorted 2D Student Array:
   [1] Abhronila Das
   [2] Arindam Hui
   [3] Debangshu Roy
   [4] Swadeep Mukherjee
   [5] Tuhina Paul

3. Array of String Pointers (Before Sort):
   [0] Shyamnagar      (Points to: 00007FF619A02010 in .rodata)
   [1] Barrackpore     (Points to: 00007FF619A02020 in .rodata)
   [2] Naihati         (Points to: 00007FF619A02030 in .rodata)
   [3] Ichapur         (Points to: 00007FF619A02040 in .rodata)
   [4] Kolkata         (Points to: 00007FF619A02050 in .rodata)

4. Alphabetically Sorted String Pointers (Lightning Fast O(1) Swaps):
   [1] Barrackpore
   [2] Ichapur
   [3] Kolkata
   [4] Naihati
   [5] Shyamnagar`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing 2D Array with Double Pointer:"})," Passing ",e.jsx("code",{children:"char names[5][30]"})," to a function expecting ",e.jsx("code",{children:"char **names"})," causes a compiler warning and runtime crash! A contiguous 2D grid is not an array of pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attempting to Modify String Literals in Pointer Arrays:"})," Writing ",e.jsx("code",{children:"cities[0][0] = 'K'"})," on an array of string literals crashes with Segmentation Fault."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting Null-Terminator in 2D Column Limits:"})," Ensure column width is at least 1 byte larger than the longest expected word to prevent missing ",e.jsx("code",{children:"\\0"}),"."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why are terminal command-line arguments in C declared as ",e.jsx("code",{children:"char *argv[]"})," (array of pointers) instead of ",e.jsx("code",{children:"char argv[50][100]"}),"?",e.jsx("em",{children:"(Hint: Consider arbitrary user argument lengths and zero memory copying!)"})]})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 002_006 Topic 4 FAQs: Array of Strings",questions:i})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 002_006 Topic 4 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"module_002_006_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Whenever you need to sort, filter, or reorder thousands of strings in C, always use an array of pointers! Swapping pointer addresses takes only 8 bytes and delivers instantaneous O(1) performance. — Sukanta Hui"})})]})}export{f as default};

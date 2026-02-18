import{j as e}from"./index-BFnLuail.js";import{E as s}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`#include <stdio.h>\r
\r
int main() {\r
    int scores[] = {85, 92, 78, 90, 88};\r
    int n = sizeof(scores) / sizeof(scores[0]);\r
\r
    // Forward traversal: sum all elements\r
    int sum = 0;\r
    for (int i = 0; i < n; i++) {\r
        sum += scores[i];\r
    }\r
    printf("Sum of all scores: %d\\n", sum);\r
\r
    // Forward traversal: print each element with its index\r
    printf("Scores (forward order):\\n");\r
    for (int i = 0; i < n; i++) {\r
        printf("scores[%d] = %d\\n", i, scores[i]);\r
    }\r
\r
    return 0;\r
}`,t=`#include <stdio.h>\r
\r
int main() {\r
    int scores[] = {85, 92, 78, 90, 88};\r
    int n = sizeof(scores) / sizeof(scores[0]);\r
\r
    // Reverse traversal: print from last to first\r
    printf("Scores in reverse order:\\n");\r
    for (int i = n - 1; i >= 0; i--) {\r
        printf("scores[%d] = %d\\n", i, scores[i]);\r
    }\r
\r
    // Example where reverse is useful: shifting elements for insertion\r
    // (we don't modify here, just illustrate reverse thinking)\r
    printf("\\nIf we wanted to shift right, we'd start from the end...\\n");\r
\r
    // Safe reverse loop with size_t (common trick)\r
    printf("Using size_t reverse pattern:\\n");\r
    size_t j = n;\r
    while (j-- > 0) {\r
        printf("scores[%zu] = %d\\n", j, scores[j]);\r
    }\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
int main() {\r
    int numbers[] = {4, 7, 2, 7, 9, 4, 3};\r
    int n = sizeof(numbers) / sizeof(numbers[0]);\r
\r
    printf("Finding duplicate values (using nested loops):\\n");\r
    // Compare each element with every later element\r
    for (int i = 0; i < n; i++) {\r
        for (int j = i + 1; j < n; j++) {\r
            if (numbers[i] == numbers[j]) {\r
                printf("Duplicate found: %d at indices %d and %d\\n", numbers[i], i, j);\r
            }\r
        }\r
    }\r
\r
    // Nested loops can also be used to print a pattern or process 2D-like data\r
    printf("\\nPrint index pairs (i, j) with i < j:\\n");\r
    for (int i = 0; i < n; i++) {\r
        for (int j = i + 1; j < n; j++) {\r
            printf("(%d,%d) ", i, j);\r
        }\r
    }\r
    printf("\\n");\r
\r
    return 0;\r
}`,o=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,h=()=>{const n=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:o}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 4: Loop patterns for processing arrays (forward, reverse, nested loops)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"Mastering the three fundamental loop patterns that let you traverse, manipulate, and analyze arrays effectively."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🔄 Three essential loop patterns"}),e.jsx("p",{className:"leading-relaxed",children:"Arrays are processed by iterating over their indices. The pattern you choose depends on the task:"}),e.jsxs("ul",{className:"list-disc list-inside mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forward traversal"})," – from first to last element (increasing index). Used for summing, searching, printing, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reverse traversal"})," – from last to first (decreasing index). Useful when you need to process elements in reverse order, or when shifting elements during insertion/deletion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested loops"})," – a loop inside another loop. Used for comparing each element with others, working with 2D structures (like matrices), or generating combinations."]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", if teacher Sukanta Hui wants to call students by roll number: forward (1 to N), reverse (N to 1), or nested (pair each student with every other for a group activity). Each pattern has its purpose."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🧭 Visualizing loop directions"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"400",height:"180",viewBox:"0 0 400 180",className:"max-w-full h-auto",children:[[0,1,2,3,4].map(r=>e.jsx("rect",{x:40+r*60,y:"30",width:"50",height:"40",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"2"},r)),e.jsx("line",{x1:"45",y1:"80",x2:"290",y2:"80",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowFwd)"}),e.jsx("text",{x:"150",y:"100",fill:"#10b981",className:"text-xs",children:"forward"}),e.jsx("line",{x1:"290",y1:"120",x2:"45",y2:"120",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrowRev)"}),e.jsx("text",{x:"150",y:"140",fill:"#ef4444",className:"text-xs",children:"reverse"}),e.jsx("text",{x:"150",y:"170",fill:"#8b5cf6",className:"text-xs",children:"nested: i and j"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowFwd",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#10b981"})}),e.jsx("marker",{id:"arrowRev",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})]})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"Forward: 0→4, Reverse: 4→0. Nested loops explore pairs (i,j)."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Loop patterns in C"}),e.jsx(s,{title:"Example 1: Forward traversal (sum and print)",initialCode:i}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:["The classic ",e.jsx("code",{children:"for (i = 0; i < n; i++)"})," loop."]}),e.jsx(s,{title:"Example 2: Reverse traversal (print backwards)",initialCode:t}),e.jsx(s,{title:"Example 3: Nested loops – find duplicate values",initialCode:a}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:"Nested loops compare each element with every later element (O(n²) time)."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forward loops are the default"})," – they read naturally and are cache‑friendly."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Reverse loops often use ",e.jsx("code",{children:"i--"})]})," – but be careful with unsigned indices (use ",e.jsx("code",{children:"i > 0"})," and then subtract)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For nested loops, keep variable names clear"})," – ",e.jsx("code",{children:"i"})," for outer, ",e.jsx("code",{children:"j"})," for inner. Avoid reusing the same name."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimize inner loop bounds"})," – if comparing pairs, start ",e.jsx("code",{children:"j = i+1"})," to avoid duplicate comparisons and self‑comparison."]}),e.jsx("li",{children:e.jsx("strong",{children:"When processing 2D arrays mentally, think rows (outer) and columns (inner)."})})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Off‑by‑one in reverse loops"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"for (i = n; i >= 0; i--)"})," – when i = n, it's out of bounds. Correct: ",e.jsx("code",{children:"i = n-1; i >= 0; i--"}),"."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsxs("p",{className:"font-medium",children:["Using ",e.jsx("code",{children:"size_t"})," (unsigned) in reverse loops"]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"for (size_t i = n-1; i >= 0; i--)"})," – when i becomes 0 and decrements, it wraps to a huge value, causing infinite loop. Solution: use signed or different condition."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Nested loop inefficiency"}),e.jsx("p",{className:"text-sm",children:"Comparing every element with every other (including itself) wastes time. Always think: do I need j from 0 or from i+1?"})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write clean, safe code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use meaningful loop variable names when nested loops are complex (e.g., ",e.jsx("code",{children:"row"}),", ",e.jsx("code",{children:"col"}),")."]}),e.jsx("li",{children:"Keep loop bodies short – if they grow long, extract into a function."}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"for"})," loops for counting iterations; they clearly separate initialization, condition, and increment."]}),e.jsxs("li",{children:["When processing arrays in reverse with ",e.jsx("code",{children:"size_t"}),", use a common pattern: ",e.jsx("code",{children:"size_t i = n; while (i-- > 0) "}),"."]}),e.jsx("li",{children:"Comment non‑obvious loop patterns, especially nested ones."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsx("li",{children:"✔️ Forward: start = 0, condition i < n, increment i++."}),e.jsx("li",{children:"✔️ Reverse: start = n-1, condition i >= 0, decrement i--."}),e.jsx("li",{children:"✔️ Nested: outer loop controls one dimension, inner loop another."}),e.jsx("li",{children:"✔️ Avoid off‑by‑one errors."}),e.jsx("li",{children:"✔️ Consider unsigned pitfalls in reverse."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsx("p",{className:"italic",children:"“When you write a nested loop, ask: what is the relationship between i and j? In Example 3, why do we start j from i+1? Try changing it to j=0 and see what happens (duplicate reports and self‑comparisons).”"}),e.jsxs("p",{className:"italic mt-2",children:["For reverse loops, if you use ",e.jsx("code",{children:"size_t"}),", try the ",e.jsx("code",{children:"while (i-- > 0)"})," trick – it's concise and safe."]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[n," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I tell students: loops are your array’s best friend. Forward is like reading a book from page 1 to end. Reverse is like skimming backwards. Nested loops? That's like comparing every student's answer with every other – useful for finding matches, but expensive if overused.”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," Always double‑check your loop bounds – a single off‑by‑one error can hide in your code for hours. Use the ",e.jsx("code",{children:"size_t"})," reverse pattern with confidence."]})]})]})]})]})};export{h as default};

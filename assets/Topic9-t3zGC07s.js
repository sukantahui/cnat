import{j as e}from"./index-BFnLuail.js";import{E as s}from"./EditableCCodeBlock-BIH-nUZ3.js";const n=`#include <stdio.h>\r
\r
int main() {\r
    int arr[3][4] = {\r
        {10, 20, 30, 40},\r
        {50, 60, 70, 80},\r
        {90, 100, 110, 120}\r
    };\r
\r
    printf("Addresses of elements (row‑major order):\\n");\r
    for (int row = 0; row < 3; row++) {\r
        for (int col = 0; col < 4; col++) {\r
            printf("&arr[%d][%d] = %p\\n", row, col, (void*)&arr[row][col]);\r
        }\r
    }\r
\r
    // Show that rows are contiguous\r
    printf("\\nAddress of arr[0][3] = %p\\n", (void*)&arr[0][3]);\r
    printf("Address of arr[1][0] = %p\\n", (void*)&arr[1][0]);\r
    printf("Difference: %ld bytes (should be sizeof(int) = %zu)\\n",\r
           (char*)&arr[1][0] - (char*)&arr[0][3], sizeof(int));\r
\r
    return 0;\r
}`,i=`#include <stdio.h>\r
\r
int main() {\r
    int matrix[2][3] = {{1,2,3}, {4,5,6}};\r
\r
    // matrix (without index) decays to pointer to first row\r
    int (*rowptr)[3] = matrix;  // rowptr is a pointer to an array of 3 ints\r
\r
    printf("matrix = %p\\n", (void*)matrix);\r
    printf("matrix + 1 = %p\\n", (void*)(matrix + 1));\r
    printf("Difference = %ld bytes (size of one row: 3 * %zu = %zu)\\n",\r
           (char*)(matrix+1) - (char*)matrix, sizeof(int), 3 * sizeof(int));\r
\r
    // Accessing elements via pointer arithmetic\r
    printf("\\nElement [1][2] via pointer arithmetic:\\n");\r
    printf("matrix[1][2] = %d\\n", matrix[1][2]);\r
    printf("*(*(matrix + 1) + 2) = %d\\n", *(*(matrix + 1) + 2));\r
\r
    return 0;\r
}`,t=`#include <stdio.h>\r
#include <time.h>\r
\r
#define ROWS 5000\r
#define COLS 5000\r
\r
int matrix[ROWS][COLS];  // static allocation to avoid stack overflow\r
\r
int main() {\r
    clock_t start, end;\r
    double cpu_time_used;\r
\r
    // Initialize matrix with some values\r
    for (int i = 0; i < ROWS; i++)\r
        for (int j = 0; j < COLS; j++)\r
            matrix[i][j] = i + j;\r
\r
    // Row‑major traversal (cache friendly)\r
    start = clock();\r
    long long sum_row = 0;\r
    for (int i = 0; i < ROWS; i++) {\r
        for (int j = 0; j < COLS; j++) {\r
            sum_row += matrix[i][j];\r
        }\r
    }\r
    end = clock();\r
    cpu_time_used = ((double)(end - start)) / CLOCKS_PER_SEC;\r
    printf("Row‑major traversal time: %f seconds (sum = %lld)\\n", cpu_time_used, sum_row);\r
\r
    // Column‑major traversal (cache unfriendly)\r
    start = clock();\r
    long long sum_col = 0;\r
    for (int j = 0; j < COLS; j++) {\r
        for (int i = 0; i < ROWS; i++) {\r
            sum_col += matrix[i][j];\r
        }\r
    }\r
    end = clock();\r
    cpu_time_used = ((double)(end - start)) / CLOCKS_PER_SEC;\r
    printf("Column‑major traversal time: %f seconds (sum = %lld)\\n", cpu_time_used, sum_col);\r
\r
    return 0;\r
}`,o=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,h=()=>{const a=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:o}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 9: Memory layout of 2D arrays (row‑major order concept)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How two‑dimensional arrays are actually stored in memory – row by row – and why it matters for performance."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🧠 Row‑major order"}),e.jsxs("p",{className:"leading-relaxed",children:["In C, 2D arrays are stored in ",e.jsx("strong",{children:"row‑major order"}),". This means that all elements of the first row are placed in consecutive memory locations, followed immediately by all elements of the second row, and so on. For an array declared as ",e.jsx("code",{children:"int arr[3][4]"}),", the layout in memory is: ",e.jsx("code",{children:"arr[0][0], arr[0][1], arr[0][2], arr[0][3], arr[1][0], …"})]}),e.jsxs("p",{className:"leading-relaxed mt-4",children:["The address of element ",e.jsx("code",{children:"arr[row][col]"})," can be computed as:",e.jsx("br",{}),e.jsx("code",{children:"base_address + (row * number_of_columns + col) * sizeof(element)"}),e.jsx("br",{}),"This formula is used by the compiler to generate efficient code."]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", imagine writing all students' marks subject‑wise on a long roll of paper. You write all marks for Student 1 (Math, Physics, Chemistry), then all marks for Student 2, etc. That's row‑major. If you wrote all students' Math marks first, then all Physics, that would be column‑major."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🗺️ Row‑major memory layout"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"450",height:"200",viewBox:"0 0 450 200",className:"max-w-full h-auto",children:[[0,1,2,3].map(r=>e.jsxs("g",{children:[e.jsx("rect",{x:30+r*60,y:"30",width:"50",height:"30",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"2"}),e.jsxs("text",{x:30+r*60+25,y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:["[0][",r,"]"]})]},`r0c${r}`)),[0,1,2,3].map(r=>e.jsxs("g",{children:[e.jsx("rect",{x:30+r*60,y:"80",width:"50",height:"30",fill:"none",stroke:"#10b981",strokeWidth:"2",rx:"2"}),e.jsxs("text",{x:30+r*60+25,y:"100",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:["[1][",r,"]"]})]},`r1c${r}`)),[0,1,2,3].map(r=>e.jsxs("g",{children:[e.jsx("rect",{x:30+r*60,y:"130",width:"50",height:"30",fill:"none",stroke:"#ef4444",strokeWidth:"2",rx:"2"}),e.jsxs("text",{x:30+r*60+25,y:"150",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:["[2][",r,"]"]})]},`r2c${r}`)),e.jsx("line",{x1:"210",y1:"170",x2:"210",y2:"135",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"250",y:"180",fill:"#ef4444",fontSize:"10",children:"address = base + (1*4 + 2)*4"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"Elements are stored row by row: all row0, then row1, then row2."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Exploring row‑major order in C"}),e.jsx(s,{title:"Example 1: Printing addresses to see row‑major layout",initialCode:n}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:["Notice that ",e.jsx("code",{children:"&arr[0][3]"})," and ",e.jsx("code",{children:"&arr[1][0]"})," are adjacent in memory."]}),e.jsx(s,{title:"Example 2: Pointer arithmetic with 2D arrays",initialCode:i}),e.jsx(s,{title:"Example 3: Performance impact – row vs column traversal",initialCode:t}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:"Row‑wise traversal is cache‑friendly and much faster for large arrays."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always traverse 2D arrays in row-major order"})," (rows outer, columns inner) for better cache utilization."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When passing a 2D array to a function, you must specify the column dimension"})," because the compiler needs it to compute offsets. Example:",e.jsx("code",{children:"void func(int arr[][COLS], int rows)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use pointer arithmetic carefully"}),": ",e.jsx("code",{children:"arr[i][j]</code> is equivalent to <code>*(*(arr + i) + j)"}),". The first dereference gives a pointer to the row."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If you need a contiguous block of memory for a matrix, consider using a 1D array and manual indexing"})," – this can sometimes be more flexible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For very large matrices, be aware of cache line sizes and alignment"})," – but that's advanced."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Assuming column‑major order"}),e.jsx("p",{className:"text-sm",children:"Some languages (like Fortran) use column‑major. If you port code, the indexing formulas differ."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Incorrect pointer arithmetic on 2D array name"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"arr + 1"})," jumps by the size of one row (cols * element_size), not one element. This catches many beginners."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Forgetting column dimension in function parameters"}),e.jsxs("p",{className:"text-sm",children:["If you write ",e.jsx("code",{children:"void func(int arr[][])"}),", the compiler doesn't know the row stride – you must specify the second dimension."]})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write clean, safe code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"When processing 2D arrays, use nested loops with rows outer, columns inner."}),e.jsx("li",{children:"If you need to pass a 2D array to a function, define the column dimension as a constant or pass it as a parameter."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"typedef"})," to create a matrix type with fixed dimensions for clarity."]}),e.jsx("li",{children:"Document any non‑standard traversal orders (e.g., column‑wise for specific algorithms)."}),e.jsxs("li",{children:["For performance‑critical code, consider using a 1D array and computing index manually (",e.jsx("code",{children:"index = row * cols + col"}),") – it gives you control over the memory layout."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsx("li",{children:"✔️ C uses row‑major order for 2D arrays."}),e.jsx("li",{children:"✔️ Address formula: base + (row * cols + col) * element_size."}),e.jsx("li",{children:"✔️ Traverse rows outer, columns inner for cache efficiency."}),e.jsxs("li",{children:["✔️ ",e.jsx("code",{children:"arr + 1"})," advances by one row (cols elements)."]}),e.jsx("li",{children:"✔️ In function parameters, column dimension must be specified."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsxs("p",{className:"italic",children:["“In Example 1, observe the address difference between ",e.jsx("code",{children:"&arr[0][3]"})," and ",e.jsx("code",{children:"&arr[1][0]"}),". Is it 4 bytes (size of int) or more? That tells you if the rows are tightly packed.”"]}),e.jsx("p",{className:"italic mt-2",children:"“Try swapping the loops in Example 3 to traverse column‑wise. For a large matrix, you'll see a significant slowdown due to cache misses.”"})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[a," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I draw a long strip of paper and divide it into cells. Then I say: ‘If we write row0, then row1, then row2, we get row‑major. If we write col0, then col1, then col2, that's column‑major. C uses the first. This simple drawing helps students visualize why ",e.jsx("code",{children:"matrix[1][2]"})," is found by skipping an entire row first.”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," Row‑major order isn't just a theoretical detail – it affects performance dramatically. Always iterate in the natural order unless you have a strong reason not to."]})]})]})]})]})};export{h as default};

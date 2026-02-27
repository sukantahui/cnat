import{j as e}from"./index-meFSU1Lv.js";import{E as i}from"./EditableCCodeBlock-C1aLYO6_.js";const o=`#include <stdio.h>\r
\r
int main() {\r
    // Declare and initialize a 3x4 matrix\r
    int matrix[3][4] = {\r
        {1, 2, 3, 4},\r
        {5, 6, 7, 8},\r
        {9, 10, 11, 12}\r
    };\r
\r
    // Print the matrix using nested loops\r
    printf("Matrix (3 rows, 4 columns):\\n");\r
    for (int row = 0; row < 3; row++) {\r
        for (int col = 0; col < 4; col++) {\r
            printf("%4d", matrix[row][col]); // %4d for alignment\r
        }\r
        printf("\\n"); // new line after each row\r
    }\r
\r
    return 0;\r
}`,l=`#include <stdio.h>\r
\r
int main() {\r
    // Create a 2x3 matrix (2 rows, 3 columns)\r
    int table[2][3] = {\r
        {10, 20, 30},\r
        {40, 50, 60}\r
    };\r
\r
    // Print original\r
    printf("Original table:\\n");\r
    for (int r = 0; r < 2; r++) {\r
        for (int c = 0; c < 3; c++) {\r
            printf("%d ", table[r][c]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    // Modify element at row 1, column 2 (zero-based)\r
    table[1][2] = 99;\r
    printf("\\nAfter modifying table[1][2] to 99:\\n");\r
    for (int r = 0; r < 2; r++) {\r
        for (int c = 0; c < 3; c++) {\r
            printf("%d ", table[r][c]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    return 0;\r
}`,d=`#include <stdio.h>\r
\r
int main() {\r
    int matrix[3][4] = {\r
        {2, 4, 6, 8},\r
        {1, 3, 5, 7},\r
        {10, 20, 30, 40}\r
    };\r
\r
    int rows = 3, cols = 4;\r
    int sum = 0;\r
\r
    // Compute sum of all elements\r
    for (int r = 0; r < rows; r++) {\r
        for (int c = 0; c < cols; c++) {\r
            sum += matrix[r][c];\r
        }\r
    }\r
\r
    printf("Sum of all elements = %d\\n", sum);\r
\r
    // Compute row-wise sums\r
    printf("\\nRow-wise sums:\\n");\r
    for (int r = 0; r < rows; r++) {\r
        int rowSum = 0;\r
        for (int c = 0; c < cols; c++) {\r
            rowSum += matrix[r][c];\r
        }\r
        printf("Row %d sum = %d\\n", r, rowSum);\r
    }\r
\r
    return 0;\r
}`,c=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,f=()=>{const t=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:c}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 8: Introduction to two‑dimensional arrays for tables and matrices"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How to store and work with grid‑like data using arrays with two indices."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"📊 What is a 2D array?"}),e.jsxs("p",{className:"leading-relaxed",children:["A two‑dimensional array is essentially an array of arrays. It can be visualized as a table with rows and columns. In C, we declare it as ",e.jsx("code",{children:"type name[rows][columns];"}),". For example, ",e.jsx("code",{children:"int matrix[3][4];"})," creates a 3×4 grid (3 rows, 4 columns) of integers."]}),e.jsxs("p",{className:"leading-relaxed mt-4",children:["To access an element, we use two indices: ",e.jsx("code",{children:"matrix[row][col]"}),". The first index selects the row, the second the column. Rows and columns are zero‑indexed, just like 1D arrays. This structure is perfect for representing matrices, game boards, spreadsheets, and tabular data."]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", attendance is recorded in a grid: each row is a student (Swadeep, Tuhina, Abhronila…), each column is a day of the week. To find if Debangshu was present on Wednesday, you'd look at row 3, column 2. That's a 2D array."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🧩 Visualizing a 2D array"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"300",height:"200",viewBox:"0 0 300 200",className:"max-w-full h-auto",children:[[0,1,2].map(n=>[0,1,2,3].map(a=>{const r=40+a*50,s=40+n*40;return e.jsxs("g",{children:[e.jsx("rect",{x:r,y:s,width:"40",height:"30",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"2"}),e.jsx("text",{x:r+20,y:s+18,textAnchor:"middle",fill:"currentColor",fontSize:"12",children:n*4+a+1}),n===0&&a===0&&e.jsxs(e.Fragment,{children:[e.jsx("text",{x:r-15,y:s+18,fill:"#ef4444",fontSize:"10",children:"[0][0]"}),e.jsx("line",{x1:r-5,y1:s+15,x2:r,y2:s+15,stroke:"#ef4444",strokeWidth:"1",markerEnd:"url(#arrow)"})]})]},`${n}-${a}`)})),e.jsx("text",{x:"20",y:"30",fill:"#888",fontSize:"10",children:"Row 0"}),e.jsx("text",{x:"20",y:"70",fill:"#888",fontSize:"10",children:"Row 1"}),e.jsx("text",{x:"20",y:"110",fill:"#888",fontSize:"10",children:"Row 2"}),e.jsx("text",{x:"60",y:"20",fill:"#888",fontSize:"10",children:"Col0"}),e.jsx("text",{x:"110",y:"20",fill:"#888",fontSize:"10",children:"Col1"}),e.jsx("text",{x:"160",y:"20",fill:"#888",fontSize:"10",children:"Col2"}),e.jsx("text",{x:"210",y:"20",fill:"#888",fontSize:"10",children:"Col3"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"A 3×4 matrix: element at row 0, column 0 is highlighted."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 2D arrays in C"}),e.jsx(i,{title:"Example 1: Declaring and printing a 2D array",initialCode:o}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:"Nested loops are used to traverse rows and columns."}),e.jsx(i,{title:"Example 2: Accessing and modifying elements",initialCode:l}),e.jsx(i,{title:"Example 3: Summing all elements (matrix total)",initialCode:d})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always think rows first, then columns"})," – the first index is the row, second is the column. Consistency avoids confusion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use nested loops with clear variable names"}),": ",e.jsx("code",{children:"for (int row = 0; row < ROWS; row++)"})," and ",e.jsx("code",{children:"for (int col = 0; col < COLS; col++)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Initialize 2D arrays with braces"}),":",e.jsx("code",{children:"int matrix[2][3] = {{1,2,3}, {4,5,6}};"})," – the inner braces are optional but improve readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When passing 2D arrays to functions, you must specify the column size"})," (or use pointers to pointers, but that's advanced)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For large matrices, consider memory layout"})," (row‑major order) – accessing elements in row order is cache‑friendly."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Confusing row and column order"}),e.jsxs("p",{className:"text-sm",children:["Declaring ",e.jsx("code",{children:"int arr[3][4]"})," means 3 rows, 4 columns. Accessing ",e.jsx("code",{children:"arr[4][3]"})," is out of bounds."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Forgetting that 2D arrays are stored row‑major"}),e.jsx("p",{className:"text-sm",children:"This matters for performance and when using pointer casts, but beginners can ignore for now."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Incorrect initialization syntax"}),e.jsxs("p",{className:"text-sm",children:[e.jsxs("code",{children:["int arr[2][3] = ",6,";"]})," works but is less clear. Missing inner braces can lead to wrong values."]})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write clean, safe code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use named constants for rows and columns (",e.jsx("code",{children:"#define ROWS 3"}),")."]}),e.jsxs("li",{children:["When initializing, use nested braces for clarity: ",e.jsx("code",{children:"{{1,2,3}, {4,5,6}}"}),"."]}),e.jsx("li",{children:"In loops, iterate rows in outer loop and columns in inner loop for natural access."}),e.jsx("li",{children:"If a function modifies a 2D array, pass rows and cols as parameters."}),e.jsxs("li",{children:["For fixed‑size 2D arrays, consider using ",e.jsx("code",{children:"typedef"})," to create a matrix type."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsxs("li",{children:["✔️ Declaration: ",e.jsx("code",{children:"type name[rows][cols];"})]}),e.jsxs("li",{children:["✔️ Access: ",e.jsx("code",{children:"name[row][col]"})," (0‑based)."]}),e.jsx("li",{children:"✔️ Nested loops are used for traversal."}),e.jsxs("li",{children:["✔️ Initialization with braces: ",e.jsx("code",{children:"{{r0c0, r0c1}, {r1c0, r1c1}}"}),"."]}),e.jsx("li",{children:"✔️ Think rows first, columns second."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsxs("p",{className:"italic",children:["“If you have a 2D array ",e.jsx("code",{children:"int marks[3][4]"}),", how would you access the element in the 2nd row and 3rd column? (Remember zero‑based: that's ",e.jsx("code",{children:"marks[1][2]"}),".)”"]}),e.jsx("p",{className:"italic mt-2",children:"“Try modifying Example 1 to print the matrix in column‑major order (columns outer loop, rows inner). What changes?”"})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[t," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I draw a grid on the board and label rows with student names and columns with subjects. Then I ask: ‘Where is Tuhina's Physics mark?’ They quickly say row 2, column 3. That’s the essence of 2D arrays – a natural way to store tabular data.”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," Nested loops are the key to processing 2D arrays. The outer loop runs through rows, the inner through columns – it's like reading a book line by line."]})]})]})]})]})};export{f as default};

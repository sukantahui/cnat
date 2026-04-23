import{j as e}from"./index-CEi3MejZ.js";import{T as s}from"./TeacherSukantaHui-CUBiDJUj.js";import{E as r}from"./EditableCCodeBlock-B9uAPyfW.js";import"./git-branch-DDFFUd5U.js";import"./index-DGMSD45Y.js";import"./file-code-IbumbsCL.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
// Insert at head using double pointer\r
void insertHead(Node **head, int value) {\r
    Node *newNode = (Node*)malloc(sizeof(Node));\r
    newNode->data = value;\r
    newNode->next = *head;\r
    *head = newNode;   // modifies the original head pointer\r
}\r
\r
void printList(Node *head) {\r
    while (head) {\r
        printf("%d -> ", head->data);\r
        head = head->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
int main() {\r
    Node *head = NULL;   // double pointer will modify this\r
    insertHead(&head, 10);\r
    insertHead(&head, 20);\r
    insertHead(&head, 30);\r
    printList(head);     // Output: 30 -> 20 -> 10 -> NULL\r
    // Free memory omitted for brevity\r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <string.h>\r
#include <stdlib.h>\r
\r
// Comparator for qsort (string pointers)\r
int compareStrings(const void *a, const void *b) {\r
    // a and b are pointers to the string pointers\r
    const char **sa = (const char **)a;\r
    const char **sb = (const char **)b;\r
    return strcmp(*sa, *sb);\r
}\r
\r
int main() {\r
    // Array of pointers to strings (double pointer)\r
    const char *fruits[] = {"banana", "apple", "cherry", "date"};\r
    int n = 4;\r
    \r
    // Sort using qsort\r
    qsort(fruits, n, sizeof(const char*), compareStrings);\r
    \r
    for (int i = 0; i < n; i++)\r
        printf("%s\\n", fruits[i]);\r
    \r
    return 0;\r
}`,d=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int rows = 3;\r
    int cols[] = {2, 4, 3};  // jagged: each row has different columns\r
    \r
    // Step 1: allocate array of row pointers\r
    int **matrix = (int**)malloc(rows * sizeof(int*));\r
    \r
    // Step 2: allocate each row\r
    for (int i = 0; i < rows; i++) {\r
        matrix[i] = (int*)malloc(cols[i] * sizeof(int));\r
        // fill with some values\r
        for (int j = 0; j < cols[i]; j++)\r
            matrix[i][j] = i * 10 + j;\r
    }\r
    \r
    // Print jagged array\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols[i]; j++)\r
            printf("%2d ", matrix[i][j]);\r
        printf("\\n");\r
    }\r
    \r
    // Step 3: free in reverse order\r
    for (int i = 0; i < rows; i++)\r
        free(matrix[i]);\r
    free(matrix);\r
    \r
    return 0;\r
}`,j=()=>{const t=`
    @keyframes fadeSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes subtlePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp, .animate-subtlePulse {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `,a=[{q:"Why use a double pointer when inserting at the head of a linked list?",a:"A double pointer allows the function to modify the original head pointer (address of the first node). If we used a single pointer, changes to the head inside the function would not reflect in the caller."},{q:"What is an array of pointers? Give a real-world example.",a:"An array where each element is a pointer. Example: `char *names[5]` stores 5 string pointers. Used for command-line arguments (`argv`), string arrays, or function dispatch tables."},{q:"How do you dynamically allocate a 2D array using double pointers?",a:"First allocate an array of row pointers (`int **arr = malloc(rows * sizeof(int*))`), then allocate each row with `malloc(cols * sizeof(int))`. This creates a jagged array where rows can have different lengths."},{q:"What is a linked structure? How does double pointer help?",a:"A structure that contains pointers to other structures (e.g., linked list, tree). Double pointers are used to modify the root pointer inside functions without returning the new address."},{q:"Can you traverse an array of strings using double pointers?",a:"Yes. `char **strArray` can be treated as a pointer to the first string. You can iterate using `while (*strArray) { printf('%s\\n', *strArray); strArray++; }` if the array is NULL-terminated."},{q:"What is the difference between pointer to array and array of pointers?",a:"Pointer to array: `int (*ptr)[5]` – ptr points to an array of 5 ints. Array of pointers: `int *arr[5]` – arr holds 5 pointers to int."},{q:"How does a double pointer help in building a hash table?",a:"Hash tables often use an array of linked list heads. Double pointers allow dynamic resizing and rehashing by modifying the array of heads."},{q:"What is a common mistake when freeing a 2D array allocated with double pointers?",a:"Forgetting to free each row before freeing the array of pointers, causing memory leaks. The correct order: loop to free rows, then free the main pointer."},{q:"In a binary tree, why would you use a double pointer for insertion?",a:"To modify the root pointer when the tree is empty, or to change a child pointer when inserting a new node. It simplifies code by avoiding return values."},{q:"How do you pass an array of strings to a function and modify it?",a:"Pass as `char ***ptr` if you need to reallocate the array. For example, `void addString(char ***arr, int *size, const char *newStr)`."},{q:"What is the advantage of using double pointers for dynamic 2D arrays over 1D flattening?",a:"Double pointers allow row-wise access and each row can have a different length (jagged arrays). Also easier to swap rows by swapping pointers."},{q:"Can a double pointer be used to implement a sparse matrix?",a:"Yes. Use an array of pointers to linked lists (each list stores column index and value). The double pointer manages the array of heads."},{q:"How do you sort an array of strings using `qsort` with double pointers?",a:"Pass the array of pointers and a comparator that dereferences twice: `*(const char **)a` to get the string pointer, then `strcmp`."},{q:"What is a 'jagged array' and how is it created with double pointers?",a:"A 2D array where each row has a different number of columns. Created by allocating row pointers, then each row with its own size."},{q:"Why is `int **` not the same as `int[][]`?",a:"`int[][]` is a contiguous 2D array in memory; `int **` is an array of pointers to separate rows. They are not interchangeable."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:t}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationFillMode:"both"},children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Topic 5: Real-world Use Cases of Double Pointers"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Double pointers are not just academic—they power essential data structures and patterns in systems programming. This topic explores how linked structures (lists, trees), arrays of strings, and dynamic 2D arrays leverage double pointers to achieve flexibility and efficiency."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"Why Double Pointers Matter in Real Code"}),e.jsx("p",{className:"leading-relaxed",children:"In professional C programming, double pointers solve three fundamental problems:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying pointers inside functions"})," – Without double pointers, a function cannot change the caller's pointer (e.g., updating the head of a linked list)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Creating dynamic arrays of pointers"})," – An array of strings (",e.jsx("code",{children:"char *argv[]"}),") or an array of function pointers is essentially a double pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Building heterogeneous/jagged data structures"})," – Each row of a 2D array can have a different size, and double pointers make this natural."]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsxs("p",{className:"italic",children:["💡 ",e.jsx("strong",{children:"Think about:"})," How would you write a function that adds a node to the beginning of a linked list without using double pointers? You'd have to return the new head, which is error-prone and less intuitive."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Use Case 1: Linked Structures (Linked List)"}),e.jsxs("p",{children:["In a singly linked list, inserting at the head requires updating the head pointer. Passing a double pointer (",e.jsx("code",{children:"Node **head"}),") allows the function to modify the original head variable."]}),e.jsx(r,{title:"Example: Insert at head using double pointer",initialCode:o}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Observation:"})," The ",e.jsx("code",{children:"insertHead"})," function receives ",e.jsx("code",{children:"Node **head"}),". Inside, ",e.jsx("code",{children:"*head = newNode"})," directly updates the caller's pointer."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Use Case 2: Array of Pointers (Strings)"}),e.jsxs("p",{children:["Command-line arguments (",e.jsx("code",{children:"char *argv[]"}),") are an array of pointers to strings. A double pointer (",e.jsx("code",{children:"char **argv"}),") gives you the ability to iterate, sort, or modify the array dynamically."]}),e.jsx(r,{title:"Example: Sorting an array of strings",initialCode:l}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"This example shows how double pointers enable generic string handling, a cornerstone of many CLI tools."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Use Case 3: Dynamic 2D Arrays (Jagged Arrays)"}),e.jsxs("p",{children:["A 2D array where each row can have a different length (e.g., storing words of varying lengths). Double pointers (",e.jsx("code",{children:"int **matrix"}),") allow row-wise allocation and easy swapping of rows."]}),e.jsx(r,{title:"Example: Creating a jagged 2D array",initialCode:d}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg",children:e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Common Pitfall:"})," Forgetting to free each row before freeing the array of pointers leads to memory leaks. Always free in reverse order of allocation."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:'Use double pointers to "return" multiple pointers:'})," Instead of returning a pointer, modify one via double pointer and return a status code."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"typedef"})," for readability:"]})," ",e.jsx("code",{children:"typedef struct Node *NodePtr;"})," then ",e.jsx("code",{children:"NodePtr *head"})," makes double pointer intent clearer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["In function declarations, write ",e.jsx("code",{children:"int **arr"}),' but think "pointer to pointer to int".']})," This mental model helps when debugging."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For 2D arrays, consider flat 1D array + index arithmetic if performance matters."})," Double pointer 2D arrays have extra indirection and may be slower due to cache misses."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always check allocation success:"})," ",e.jsx("code",{children:"if (!*ptr) "})," after allocating via double pointer."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"✅ Best Practices with Double Pointers"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialize double pointers to NULL:"})," ",e.jsx("code",{children:"Node **head = NULL;"})," before passing to functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use consistent naming:"})," ",e.jsx("code",{children:"ppHead"})," (pointer-to-pointer head) or ",e.jsx("code",{children:"headPtr"})," makes code self-documenting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validate before dereferencing:"})," Always check that the double pointer itself is not NULL, then check ",e.jsx("code",{children:"*ptr"})," if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer returning allocated memory via return value when possible"})," – double pointers are most useful when you need to modify existing pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document ownership:"})," Comment whether the caller or callee is responsible for freeing memory allocated via double pointer."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to dereference:"})," Using ",e.jsx("code",{children:"head"})," instead of ",e.jsx("code",{children:"*head"})," inside a function that receives ",e.jsx("code",{children:"Node **head"})," modifies the local copy, not the original pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory leak when reallocating:"})," Assigning ",e.jsx("code",{children:"*ptr = newPtr"})," without freeing old ",e.jsx("code",{children:"*ptr"})," loses the original memory."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming ",e.jsx("code",{children:"int **"})," and ",e.jsx("code",{children:"int[][]"})," are same:"]})," They have different memory layouts and are not interchangeable in function calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double free:"})," Freeing rows then the main pointer is correct, but freeing the main pointer first makes row pointers inaccessible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Off-by-one errors in 2D array indexing:"})," Remember that ",e.jsx("code",{children:"arr[i][j]"})," with double pointers involves two dereferences; a mistake in allocation leads to segmentation fault."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:a.map((n,i)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsxs("p",{className:"font-semibold text-blue-600 dark:text-blue-400",children:["Q",i+1,": ",n.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:n.a})]},i))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",style:{animationFillMode:"both"},children:e.jsx(s,{note:"Double pointers can be intimidating, but remember: they are just pointers to pointers. When you see `**` in a function parameter, ask: 'Does this function need to modify the original pointer?' If yes, that's the perfect use. Practice with linked list insertion and dynamic 2D arrays—these two examples cover 90% of real-world double pointer usage. For Barrackpore CNAT students: visualize `head` as the address of the first node, and `*head` as the node itself. Changing `*head` inside a function changes the caller's head."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",style:{animationFillMode:"both"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – What You Should Remember"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsx("li",{children:"✅ Double pointer = pointer to pointer = can modify original pointer"}),e.jsx("li",{children:"✅ Used for: linked list head modification, array of strings, dynamic 2D arrays"}),e.jsx("li",{children:"✅ Allocation: allocate row pointers first, then each row"}),e.jsx("li",{children:"✅ Deallocation: free each row, then free row pointers"}),e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"char **argv"})," is the classic example"]}),e.jsx("li",{children:"✅ Always check for NULL after allocation via double pointer"}),e.jsxs("li",{children:["✅ Do not confuse ",e.jsx("code",{children:"int **"})," with 2D static arrays"]})]})]})]})]})};export{j as default};

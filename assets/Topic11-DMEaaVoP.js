import{j as n}from"./index-BxcHuftT.js";import{T as s}from"./TeacherSukantaHui-Chf8FG88.js";import{E as e}from"./EditableCCodeBlock-5_NluTw3.js";import"./git-branch-CKwoe3RO.js";import"./index-lfB80H_P.js";import"./file-code-B8psrjkP.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";const o=`#include <stdio.h>\r
\r
void option1() { printf("You chose Option 1\\n"); }\r
void option2() { printf("You chose Option 2\\n"); }\r
void option3() { printf("You chose Option 3\\n"); }\r
void option4() { printf("Exiting...\\n"); }\r
\r
int main() {\r
    // Array of function pointers (jump table)\r
    void (*menu[5])(void) = {NULL, option1, option2, option3, option4};\r
    int choice;\r
    \r
    do {\r
        printf("\\n1. Option 1\\n2. Option 2\\n3. Option 3\\n4. Exit\\nChoice: ");\r
        scanf("%d", &choice);\r
        \r
        if (choice >= 1 && choice <= 4) {\r
            menu[choice]();  // call function via jump table\r
        } else {\r
            printf("Invalid choice\\n");\r
        }\r
    } while (choice != 4);\r
    \r
    return 0;\r
}`,l=`#include <stdio.h>\r
\r
int add(int a, int b) { return a + b; }\r
int sub(int a, int b) { return a - b; }\r
int mul(int a, int b) { return a * b; }\r
int div(int a, int b) { return (b != 0) ? a / b : 0; }\r
int mod(int a, int b) { return (b != 0) ? a % b : 0; }\r
\r
int main() {\r
    // Array of function pointers for operations\r
    int (*ops[])(int, int) = {add, sub, mul, div, mod};\r
    const char* names[] = {"Add", "Sub", "Mul", "Div", "Mod"};\r
    int n_ops = sizeof(ops)/sizeof(ops[0]);\r
    \r
    int choice, x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    \r
    printf("Operations:\\n");\r
    for (int i = 0; i < n_ops; i++)\r
        printf("%d. %s\\n", i+1, names[i]);\r
    printf("Choice: ");\r
    scanf("%d", &choice);\r
    \r
    if (choice >= 1 && choice <= n_ops) {\r
        printf("Result: %d\\n", ops[choice-1](x, y));\r
    } else {\r
        printf("Invalid choice\\n");\r
    }\r
    \r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <string.h>\r
#include <stdlib.h>\r
\r
// Command handler functions\r
void cmd_help() {\r
    printf("Available commands: help, say <msg>, quit\\n");\r
}\r
void cmd_say(char* arg) {\r
    if (arg) printf("You said: %s\\n", arg);\r
    else printf("Say what?\\n");\r
}\r
void cmd_quit() {\r
    printf("Goodbye!\\n");\r
    exit(0);\r
}\r
\r
// Struct linking command name to function\r
typedef struct {\r
    const char* name;\r
    void (*func)(char*);\r
} Command;\r
\r
// Dispatch table\r
Command commands[] = {\r
    {"help", cmd_help},\r
    {"say", cmd_say},\r
    {"quit", cmd_quit},\r
    {NULL, NULL}  // sentinel\r
};\r
\r
int main() {\r
    char input[100];\r
    while (1) {\r
        printf("> ");\r
        fgets(input, sizeof(input), stdin);\r
        input[strcspn(input, "\\n")] = '\\0';  // remove newline\r
        \r
        // Parse command and argument\r
        char* cmd_str = strtok(input, " ");\r
        char* arg = strtok(NULL, "");\r
        \r
        // Lookup command in dispatch table\r
        int found = 0;\r
        for (int i = 0; commands[i].name != NULL; i++) {\r
            if (strcmp(cmd_str, commands[i].name) == 0) {\r
                commands[i].func(arg);\r
                found = 1;\r
                break;\r
            }\r
        }\r
        if (!found) printf("Unknown command. Type 'help'\\n");\r
    }\r
    return 0;\r
}`,j=()=>{const r=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,t=[{q:"What is an array of function pointers?",a:"An array where each element is a function pointer. It allows you to select and call a function by index, creating a jump table."},{q:"How do you declare an array of function pointers?",a:"`returnType (*arrayName[size])(paramTypes);` Example: `int (*ops[4])(int, int) = {add, sub, mul, div};`"},{q:"Why use an array of function pointers instead of a switch statement?",a:"It's often faster (O(1) dispatch), more extensible (add new functions by appending to array), and centralizes the dispatch logic."},{q:"How do you call a function from an array of function pointers?",a:"`result = array[index](args);` The index determines which function is called."},{q:"What is a jump table?",a:"Another name for an array of function pointers. Used in state machines, command processors, and virtual tables."},{q:"Can you have arrays of function pointers with different signatures?",a:"No, all function pointers in an array must have the same signature. Use a union or `void*` with casting if you need heterogeneous types."},{q:"How do you initialize an array of function pointers?",a:"At declaration: `int (*ops[])(int, int) = {add, sub, mul};` Or later with assignments."},{q:"What is a common use case in embedded systems?",a:"Interrupt vector tables – an array of function pointers that the CPU calls when an interrupt occurs."},{q:"How do you add a new function to a jump table dynamically?",a:"If the array is not const, you can assign a new function pointer to an element: `ops[3] = newFunction;`"},{q:"What is the advantage over function pointers in a struct?",a:"Arrays allow indexing by integer, which is great for command IDs or state numbers. Structs are better for named fields."},{q:"Can you have a 2D array of function pointers?",a:"Yes: `void (*dispatch[STATES][EVENTS])(void);` Useful for state machines with events."},{q:"How do you iterate over an array of function pointers?",a:"Using a for loop, calling each function: `for (int i=0; i<size; i++) if (array[i]) array[i]();`"},{q:"What is a dispatch table in a protocol parser?",a:"An array mapping command bytes to handler functions. The parser reads a byte and calls `handlers[byte](data)`."},{q:"How do you handle invalid indices in a jump table?",a:"Check index bounds before calling, or provide a default handler at index 0 or a sentinel."},{q:"Can you use an array of function pointers to implement a simple virtual machine?",a:"Yes. Each opcode is an index into an array of instruction handler functions."}];return n.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[n.jsx("style",{children:r}),n.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[n.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[n.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent",children:"Topic 11: Array of Function Pointers (Menu-Driven Programs)"}),n.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"An array of function pointers – also called a jump table or dispatch table – is a powerful technique for implementing menus, command interpreters, state machines, and virtual machines. This topic shows how to build extensible, efficient dispatch systems."})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-yellow-500 pl-3",children:"Why Use an Array of Function Pointers?"}),n.jsx("p",{children:"A switch statement with many cases can become long and repetitive. An array of function pointers centralizes the mapping between an index (choice, command, state) and the function to execute. Benefits include:"}),n.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Speed"})," – Direct indexing instead of branch prediction."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Extensibility"})," – Add new items by appending to the array, no switch modification."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Data-driven design"})," – Store the array in a configuration, even load it dynamically."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Code clarity"})," – Separate the dispatch mechanism from the actions."]})]}),n.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:n.jsxs("p",{children:["💡 ",n.jsx("strong",{children:"Think about:"}),' A text-based adventure game with commands: "go north", "take item", "inventory". Instead of a huge switch, you can map each command string to an index in a function pointer array.']})})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Example 1: Basic Jump Table (Replacing Switch)"}),n.jsx("p",{children:"Simple menu system using an array of function pointers instead of a long switch statement."}),n.jsx(e,{title:"Menu with jump table",initialCode:o})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 2: Calculator Using Array of Function Pointers"}),n.jsx("p",{children:"Classic example – map operation codes (+, -, *, /) to functions, allowing easy extension."}),n.jsx(e,{title:"Array-based calculator",initialCode:l})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"Example 3: Command Dispatcher for Text Commands"}),n.jsx("p",{children:'Real-world CLI tool: map command strings (like "help", "quit") to functions using a parallel array or struct array.'}),n.jsx(e,{title:"Command dispatcher with lookup",initialCode:c})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),n.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Combine with an array of strings for self-documenting menus"})," – parallel arrays: one for names, one for functions."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Use a sentinel (NULL function or empty name)"})," to mark the end of the array for iteration."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"For large dispatch tables, generate the array with macros"})," – reduces repetition and errors."]}),n.jsx("li",{children:n.jsx("strong",{children:"In embedded systems, store the function pointer array in ROM (const) to save RAM."})}),n.jsxs("li",{children:[n.jsx("strong",{children:"Use function pointer arrays for state machines"})," – each state is an index; the array holds state handler functions."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Validate index bounds before calling"})," – out-of-range indices are a security risk."]})]})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Function Pointer Arrays"}),n.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Use typedef for the function pointer type"})," – e.g., `typedef void (*MenuFunc)(void);`"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Always initialize all array elements"})," – set unused slots to NULL to avoid accidental calls."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Provide a default/error handler"})," for invalid indices."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Document the expected index range"})," or provide a `size` variable."]}),n.jsx("li",{children:n.jsx("strong",{children:"If the array can be modified at runtime, protect with mutex in multithreaded code."})})]})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),n.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Out-of-bounds index"})," – leads to calling random memory or crashing."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Forgetting to NULL-terminate or track size"})," – iteration may go beyond valid entries."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Mixing function signatures in the same array"})," – all must match exactly."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Assuming the array is automatically populated"})," – you must explicitly assign each element."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Using a function pointer array for small, fixed sets may be overkill"})," – switch can be clearer."]})]})]}),n.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[n.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),n.jsx("div",{className:"space-y-4",children:t.map((i,a)=>n.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[n.jsxs("p",{className:"font-semibold text-yellow-600 dark:text-yellow-400",children:["Q",a+1,": ",i.q]}),n.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:i.a})]},a))})]}),n.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:n.jsx(s,{note:"Array of function pointers is one of my favorite topics at Barrackpore CNAT. Students see the light when they realize a switch with 20 cases becomes a 3-line array lookup. I demonstrate with a calculator – adding a new operation (like modulus) is just appending to the array and menu. No switch modification. In the real world, this pattern appears in everything from CLI tools (like Git's subcommands) to CPU emulators (opcode dispatch). Remember: with power comes responsibility – always bounds-check your index!"})}),n.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[n.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Array of Function Pointers"}),n.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[n.jsx("li",{children:"✅ Declaration: `returnType (*array[size])(params);`"}),n.jsxs("li",{children:["✅ Initialize with function names: ","{func1, func2, NULL}","."]}),n.jsx("li",{children:"✅ Call: `array[index](args);`"}),n.jsx("li",{children:"✅ Always check index bounds before calling."}),n.jsx("li",{children:"✅ Use typedef for clarity: `typedef void (*Cmd)(void);`"}),n.jsx("li",{children:"✅ Common uses: menu systems, command dispatchers, state machines, opcode handlers."}),n.jsx("li",{children:"✅ Provides O(1) dispatch, extensibility, and data-driven design."}),n.jsx("li",{children:"✅ Avoid mixing signatures – all functions must match the typedef."})]})]})]})]})};export{j as default};

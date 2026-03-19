import{r as t,j as e}from"./index-BQdS2coH.js";import{E as s}from"./EditableCCodeBlock-D_Xhg5Nj.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./file-code-BM1RMzw0.js";import"./type-C3qLbx7F.js";import"./sparkles-DYm_86zQ.js";import"./refresh-cw-bMDcp0Zn.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";class m extends t.Component{render(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Format Specifiers in C — Complete Explanation"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In C programming, ",e.jsx("strong",{children:"format specifiers"})," are special symbols used in ",e.jsx("code",{children:"printf()"})," and ",e.jsx("code",{children:"scanf()"})," to tell the compiler what type of data you want to display or input. Without format specifiers, C will not understand how to interpret the variable."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Format specifiers are essential because C is a ",e.jsx("strong",{children:"strongly typed, low-level"}),"language — you must explicitly specify the data type for input/output operations."]}),e.jsx("h3",{className:"text-xl font-semibold text-slate-200 mt-6",children:"Commonly Used Format Specifiers"}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl text-slate-300 text-sm space-y-2 border border-slate-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"%d"})," – Integer (int)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%f"})," – Floating-point value (float)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%lf"})," – Double (for scanf)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%c"})," – Character"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%s"})," – String"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%u"})," – Unsigned integer"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%x"})," / ",e.jsx("strong",{children:"%X"})," – Hexadecimal value"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"%p"})," – Address (pointer)"]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example 1 — Printing Different Data Types"}),e.jsx(s,{initialCode:`
#include <stdio.h>

int main() {
    int age = 25;
    float price = 99.50;
    char grade = 'A';
    char name[] = "Sukanta";

    printf("Age: %d\\n", age);
    printf("Price: %f\\n", price);
    printf("Grade: %c\\n", grade);
    printf("Name: %s\\n", name);

    return 0;
}
`}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Each variable uses a different format specifier to print the correct value."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example 2 — Using Width and Precision Modifiers"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Format specifiers can also control spacing and decimal places."}),e.jsx(s,{initialCode:`
#include <stdio.h>

int main() {
    float value = 3.14159;

    printf("Default: %f\\n", value);
    printf("Two decimals: %.2f\\n", value);
    printf("Four decimals: %.4f\\n", value);
    printf("Width 10: %10.2f\\n", value);

    return 0;
}
`}),e.jsx("h3",{className:"text-xl font-semibold text-purple-300 mt-8",children:"Teacher’s Tips 👨‍🏫"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:["Always match the correct format specifier with the variable type —",e.jsx("strong",{children:"incorrect pairing causes undefined behavior"}),"."]}),e.jsxs("li",{children:["For ",e.jsx("code",{children:"double"})," values in ",e.jsx("code",{children:"scanf()"}),", always use",e.jsx("strong",{children:"%lf"})," instead of ",e.jsx("strong",{children:"%f"}),"."]}),e.jsxs("li",{children:["Use precision modifiers like ",e.jsx("code",{children:"%.2f"})," to format currency values."]}),e.jsx("li",{children:"Format specifiers make debugging easier by showing internal values of your program."})]}),e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"Points to Remember ✨"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"%d"})," is for integers only."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"%f"})," prints float and double (in printf)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"%c"})," prints a single character."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"%s"})," prints a string until a null terminator."]}),e.jsx("li",{children:"Using the wrong specifier may lead to garbage output."}),e.jsxs("li",{children:["You can control width and precision: ",e.jsx("code",{children:"%10.2f"}),"."]})]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mt-4",children:"Format specifiers help you interact with data in a predictable and structured way. Mastering them is essential for writing clean, readable, and professional C programs."})]})}}export{m as default};

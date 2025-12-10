import{r as t,j as e}from"./index-C1Y0luCw.js";import{E as s}from"./EditableCCodeBlock-CHuVW60e.js";class l extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Formatted Input with scanf()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"scanf()"})," reads user input in C. It requires a **format specifier** and a **memory address (&)**."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1: Reading Integer"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You entered: %d\\n", age);

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2: Reading Multiple Values"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Sum = %d\\n", a + b);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Never forget the ",e.jsx("strong",{children:"&"})," symbol in scanf. It gives the memory address where the value will be stored."]})]}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"scanf()"})," needs format specifiers like ",e.jsx("code",{children:"%d %f %c %s"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"&variable"})," stores input inside memory."]}),e.jsx("li",{children:"Multiple inputs must match the number of specifiers."})]})]})]})}}export{l as default};

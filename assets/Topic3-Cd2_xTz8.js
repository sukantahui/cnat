import{r as t,j as e}from"./index-Duu8q-kl.js";import{E as s}from"./EditableCCodeBlock-fVWDCnnL.js";class i extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Assignment & Compound Assignment Operators"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Assignment operators store values into variables. Compound assignment operators perform an operation and assign the result at the same time."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1: Basic Assignment"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    a = b; // a becomes 5

    printf("a = %d\\n", a);

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2: Compound Assignment"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int x = 10;

    x += 5; // x = x + 5
    x *= 2; // x = x * 2

    printf("x = %d\\n", x);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsxs("p",{className:"text-slate-300 text-sm mt-1",children:["Use compound operators to make your code cleaner and faster. Example: ",e.jsx("code",{children:"x += 10"})," is preferred over ",e.jsx("code",{children:"x = x + 10"}),"."]})]}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"="})," assigns a value."]}),e.jsxs("li",{children:[e.jsx("code",{children:"+=, -=, *=, /=, %="})," are compound operators."]}),e.jsx("li",{children:"Compound assignment reduces code repetition."})]})]})]})}}export{i as default};

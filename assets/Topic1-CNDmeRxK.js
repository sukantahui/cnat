import{r as t,j as e}from"./index-BQdS2coH.js";import{E as s}from"./EditableCCodeBlock-D_Xhg5Nj.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./file-code-BM1RMzw0.js";import"./type-C3qLbx7F.js";import"./sparkles-DYm_86zQ.js";import"./refresh-cw-bMDcp0Zn.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";class h extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Relational Operators in C"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Relational operators compare two values and return either",e.jsx("code",{children:"1"})," (true) or ",e.jsx("code",{children:"0"})," (false)."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 20;

    printf("a < b = %d\\n", a < b);
    printf("a > b = %d\\n", a > b);
    printf("a == b = %d\\n", a == b);

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int x = 5, y = 5;

    printf("x >= y = %d\\n", x >= y);
    printf("x != y = %d\\n", x != y);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["For comparisons, ",e.jsx("code",{children:"=="})," is equality, while ",e.jsx("code",{children:"="})," is assignment."]})]}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300",children:[e.jsx("li",{children:"All relational expressions return either 0 or 1."}),e.jsx("li",{children:"Comparison does not change variable values."})]})]})]})}}export{h as default};

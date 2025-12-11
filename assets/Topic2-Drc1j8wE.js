import{r as t,j as e}from"./index-X8Setxi0.js";import{E as s}from"./EditableCCodeBlock-BKoG8Sk_.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Logical Operators (AND, OR, NOT)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Logical operators combine or modify conditions."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 5, b = 10;

    printf("a < b AND b > 5 = %d\\n", (a < b) && (b > 5));
    printf("a > b OR b == 10 = %d\\n", (a > b) || (b == 10));

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int x = 0;

    printf("NOT x = %d\\n", !x);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"0"})," means false, any non-zero value means true."]})]}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," stops evaluating if first condition is false."]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," stops evaluating if first condition is true."]})]})]})]})}}export{n as default};

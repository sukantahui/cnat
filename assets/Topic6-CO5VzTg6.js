import{r as t,j as e}from"./index-gsr__VoO.js";import{E as s}from"./EditableCCodeBlock-CoZCio0U.js";import"./index-BWD-23kO.js";import"./file-code-BIP47i_q.js";import"./refresh-cw-CbGJFCpt.js";import"./copy-_YtngGN_.js";import"./download-BR7jb7LT.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Expression Evaluation & Operator Precedence"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"C follows strict rules for evaluating expressions. Operators with higher precedence are executed first."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1: Precedence"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int result = 10 + 5 * 2;

    printf("Result = %d\\n", result); // 10 + (5 * 2) = 20

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2: Using Parentheses"}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int result = (10 + 5) * 2;

    printf("Result = %d\\n", result); // (10 + 5) = 15; 15 * 2 = 30

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"When confused, always use parentheses—they make expressions clearer and safer."})]}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplication, division, modulus"})," happen before addition & subtraction."]}),e.jsx("li",{children:"Parentheses always have the highest priority."}),e.jsx("li",{children:"Complex expressions evaluate left to right (mostly)."})]})]})]})}}export{x as default};

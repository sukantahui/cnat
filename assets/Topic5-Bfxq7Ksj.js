import{r as i,j as t}from"./index-BZ1-3x1c.js";import{E as e}from"./EditableCCodeBlock-BJJRkuC5.js";import"./index-DAcJ947v.js";import"./file-code-D4gRmL_O.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";class c extends i.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Arithmetic Expressions"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C supports arithmetic operations such as addition, subtraction, multiplication, division, and modulus."}),t.jsx(e,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product = %d\\n", a * b);
    printf("Quotient = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}`}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Note: integer division discards the decimal part."})]})}}export{c as default};

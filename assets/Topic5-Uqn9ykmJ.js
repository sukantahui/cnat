import{r as i,j as t}from"./index-C8tfbTD8.js";import{E as e}from"./EditableCCodeBlock-0_Yux5OR.js";import"./index-HicrMSGH.js";import"./file-code--LqktZ78.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";class c extends i.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Arithmetic Expressions"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C supports arithmetic operations such as addition, subtraction, multiplication, division, and modulus."}),t.jsx(e,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product = %d\\n", a * b);
    printf("Quotient = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}`}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Note: integer division discards the decimal part."})]})}}export{c as default};

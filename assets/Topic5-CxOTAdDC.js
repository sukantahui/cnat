import{r as i,j as t}from"./index-wvAt8vmb.js";import{E as e}from"./EditableCCodeBlock-BFB3pin2.js";import"./index-l2GzpozC.js";import"./file-code-DFKBVAqD.js";import"./type-CpCJUiFu.js";import"./refresh-cw-XWoXFms7.js";import"./copy-D0HGvqkI.js";import"./download-Cryk3QyC.js";class c extends i.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Arithmetic Expressions"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C supports arithmetic operations such as addition, subtraction, multiplication, division, and modulus."}),t.jsx(e,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product = %d\\n", a * b);
    printf("Quotient = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}`}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Note: integer division discards the decimal part."})]})}}export{c as default};

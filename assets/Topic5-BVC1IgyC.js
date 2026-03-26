import{r as i,j as t}from"./index-nd0Xa-ab.js";import{E as e}from"./EditableCCodeBlock-qKEGiduD.js";import"./index-CGY8MZgm.js";import"./file-code-Ce3qRK9I.js";import"./type-CKt7De8f.js";import"./refresh-cw-DR3WFbdt.js";import"./copy-DxjiEBv9.js";import"./download-DtkPSF8Q.js";class c extends i.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Arithmetic Expressions"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C supports arithmetic operations such as addition, subtraction, multiplication, division, and modulus."}),t.jsx(e,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product = %d\\n", a * b);
    printf("Quotient = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}`}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Note: integer division discards the decimal part."})]})}}export{c as default};

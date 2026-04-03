import{r as i,j as t}from"./index-BjcB6RzK.js";import{E as e}from"./EditableCCodeBlock-DHEawUUE.js";import"./index-DMsSvuEi.js";import"./file-code-F5fHsy3u.js";import"./type-KuLbSU6d.js";import"./refresh-cw-BiBGBwpy.js";import"./copy-DI4a0ux7.js";import"./download-D9OBzpJs.js";class c extends i.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Basic Arithmetic Expressions"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C supports arithmetic operations such as addition, subtraction, multiplication, division, and modulus."}),t.jsx(e,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product = %d\\n", a * b);
    printf("Quotient = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}`}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Note: integer division discards the decimal part."})]})}}export{c as default};

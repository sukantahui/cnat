import{r as t,j as e}from"./index-BQdS2coH.js";import{E as i}from"./EditableCCodeBlock-D_Xhg5Nj.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./file-code-BM1RMzw0.js";import"./type-C3qLbx7F.js";import"./sparkles-DYm_86zQ.js";import"./refresh-cw-bMDcp0Zn.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";class h extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Format Specifiers with printf"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Format specifiers tell ",e.jsx("code",{children:"printf()"})," how to print different types of data."]}),e.jsx(i,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int age = 20;
    float percent = 91.5;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Percentage: %f\\n", percent);
    printf("Grade: %c\\n", grade);

    return 0;
}`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Common Specifiers"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"%d"})," → integer"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%f"})," → float"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%lf"})," → double"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%c"})," → character"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%s"})," → string"]})]})]})}}export{h as default};

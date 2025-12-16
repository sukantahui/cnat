import{r as s,j as e}from"./index-DPaFLvnv.js";import{E as t}from"./EditableCCodeBlock-Cz4tfWXz.js";import{A as r}from"./arrow-up-right-hM6iGfYr.js";class d extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Using printf() for Output and Debug Messages"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"printf()"})," is the most commonly used function in C. It prints text, numbers, variables, and debug information."]}),e.jsxs("a",{href:"/play",target:"_blank",className:"text-sky-400 flex items-center gap-2",children:["Try in Playground ",e.jsx(r,{size:18})]}),e.jsx(t,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 10;
    printf("Value of a: %d\\n", a);
    printf("Debug: Program reached here!\\n");
    return 0;
}`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Common Format Specifiers"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"%d"})," → integer"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%f"})," → float"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%c"})," → char"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%s"})," → string"]})]}),e.jsxs("p",{className:"text-slate-400 text-sm",children:[e.jsx("strong",{children:"printf()"})," is also useful for debugging because it helps you track variable values and understand program flow."]})]})}}export{d as default};

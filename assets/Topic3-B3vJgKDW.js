import{r as e,j as s}from"./index-CpnbXr33.js";import{E as t}from"./EditableCCodeBlock-B7CvQffe.js";class r extends e.Component{render(){return s.jsxs("div",{className:"space-y-6",children:[s.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Using Constants with const and #define"}),s.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Constants store values that should NOT change during program execution. C provides two ways to create constants: ",s.jsx("code",{children:"const"})," and ",s.jsx("code",{children:"#define"}),"."]}),s.jsx(t,{language:"c",initialCode:`#include <stdio.h>

#define PI 3.1416  // Macro constant

int main() {
    const int MAX = 100; // Typed constant

    printf("PI = %f\\n", PI);
    printf("MAX = %d\\n", MAX);

    return 0;
}`}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Differences"}),s.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-2",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"#define"})," is processed by the preprocessor."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"const"})," has a data type and appears in memory."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"const"})," supports debugging; macros do not."]})]})]})}}export{r as default};

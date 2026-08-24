import{r as e,j as s}from"./index-DQGlkDD-.js";import{E as t}from"./EditableCCodeBlock-DdruVWG5.js";import"./index-B5Ou1maK.js";import"./file-code-BwO1T2yj.js";import"./createLucideIcon-DkPaqQ-z.js";import"./type-CTZVU0g7.js";import"./sparkles-imjvrhhM.js";import"./refresh-cw-wfEx28Pg.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./minimize-2-tRCtfalc.js";class j extends e.Component{render(){return s.jsxs("div",{className:"space-y-6",children:[s.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Using Constants with const and #define"}),s.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Constants store values that should NOT change during program execution. C provides two ways to create constants: ",s.jsx("code",{children:"const"})," and ",s.jsx("code",{children:"#define"}),"."]}),s.jsx(t,{language:"c",initialCode:`#include <stdio.h>

#define PI 3.1416  // Macro constant

int main() {
    const int MAX = 100; // Typed constant

    printf("PI = %f\\n", PI);
    printf("MAX = %d\\n", MAX);

    return 0;
}`}),s.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Differences"}),s.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-2",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"#define"})," is processed by the preprocessor."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"const"})," has a data type and appears in memory."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"const"})," supports debugging; macros do not."]})]})]})}}export{j as default};

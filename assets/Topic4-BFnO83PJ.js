import{r as s,j as e}from"./index-YkKVfVEM.js";import{E as t}from"./EditableCCodeBlock-Hiq0FvtJ.js";import"./index-gzZkhgxu.js";import"./file-code-DitFwktW.js";import"./createLucideIcon-Cim-rzMd.js";import"./type-YS4uKozr.js";import"./sparkles-C0yXYtRg.js";import"./refresh-cw-Dxhotsjr.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./minimize-2-Dy1dCTjQ.js";class f extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Increment & Decrement Operators (++ and --)"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Increment increases a variable by 1, and decrement decreases it by 1. Both have **prefix** and **postfix** forms."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1: Prefix"}),e.jsx(t,{initialCode:`#include <stdio.h>

int main() {
    int x = 5;

    printf("++x = %d\\n", ++x); // increments first, then prints

    return 0;
}
`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2: Postfix"}),e.jsx(t,{initialCode:`#include <stdio.h>

int main() {
    int y = 5;

    printf("y++ = %d\\n", y++); // prints first, increments later
    printf("After increment y = %d\\n", y);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Prefix (++x) is often more predictable in expressions than postfix (x++). Use postfix only when needed."})]}),e.jsxs("div",{className:"border border-slate-700 rounded-xl p-4 bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300",children:[e.jsx("li",{children:"Prefix updates value before use."}),e.jsx("li",{children:"Postfix updates value after use."}),e.jsx("li",{children:"Works only on variables, not on constants."})]})]})]})}}export{f as default};

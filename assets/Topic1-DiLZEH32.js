import{r as t,j as e}from"./index-YH4u--c0.js";import{E as s}from"./EditableCCodeBlock-Cjuk8MmO.js";import"./index-C88JtG2I.js";import"./createLucideIcon-D7phWlUA.js";import"./file-code-CdZAdXD5.js";import"./type-BAYKHREU.js";import"./sparkles-Ck6Oq7CD.js";import"./refresh-cw-B0Wn9xOb.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";class h extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Single-line and Multi-line Comments"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Comments help document your code. They are ignored by the compiler and exist only to help humans understand your logic."}),e.jsx("h3",{className:"text-slate-200 font-semibold text-lg",children:"Types of Comments"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single-line comment:"})," ",e.jsx("code",{children:"// comment text"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-line comment:"})," ",e.jsx("code",{children:"/* comment */"})]})]}),e.jsx(s,{language:"c",initialCode:`#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Learning comments in C\\n");

    /* 
       This is a multi-line comment.
       Used for large explanations.
    */
    printf("Multi-line comment example\\n");

    return 0;
}`}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Comments should be meaningful and describe why something is done—not just what."})]})}}export{h as default};

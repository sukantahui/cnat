import{r as e,j as t}from"./index-BZ1-3x1c.js";import{E as i}from"./EditableCCodeBlock-BJJRkuC5.js";import"./index-DAcJ947v.js";import"./file-code-D4gRmL_O.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";class x extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Implicit & Explicit Type Conversion and Type Promotion"}),t.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C performs automatic (implicit) conversions when mixing types in expressions, and also allows manual (explicit) casting."}),t.jsx(i,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 5;
    double b = 2.5;

    double result1 = a + b;  // implicit conversion of int → double
    int result2 = (int)b;    // explicit conversion (casting)

    printf("Implicit result: %lf\\n", result1);
    printf("Explicit cast: %d\\n", result2);

    return 0;
}`}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Type Promotion Rules"}),t.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm",children:[t.jsx("li",{children:"Smaller types promote to larger types (char → int)"}),t.jsx("li",{children:"int promotes to float if mixed"}),t.jsx("li",{children:"float promotes to double if mixed"})]})]})}}export{x as default};

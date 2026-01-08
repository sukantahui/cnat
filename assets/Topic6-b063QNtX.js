import{r as t,j as e}from"./index-CkSrFIVy.js";import{E as i}from"./EditableCCodeBlock-DgU0zuzC.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Implicit & Explicit Type Conversion and Type Promotion"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"C performs automatic (implicit) conversions when mixing types in expressions, and also allows manual (explicit) casting."}),e.jsx(i,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int a = 5;
    double b = 2.5;

    double result1 = a + b;  // implicit conversion of int → double
    int result2 = (int)b;    // explicit conversion (casting)

    printf("Implicit result: %lf\\n", result1);
    printf("Explicit cast: %d\\n", result2);

    return 0;
}`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Type Promotion Rules"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm",children:[e.jsx("li",{children:"Smaller types promote to larger types (char → int)"}),e.jsx("li",{children:"int promotes to float if mixed"}),e.jsx("li",{children:"float promotes to double if mixed"})]})]})}}export{n as default};

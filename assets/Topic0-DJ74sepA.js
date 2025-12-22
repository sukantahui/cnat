import{r as s,j as e}from"./index-DseVoxN8.js";import{E as t}from"./EditableCCodeBlock-ClzjvTDq.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Arithmetic Operators in C"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Arithmetic operators are used to perform basic mathematical operations such as addition, subtraction, multiplication, division, and modulus. These operators work with numeric types like ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"float"}),",",e.jsx("code",{children:"double"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example 1: Basic Arithmetic"}),e.jsx(t,{initialCode:`#include <stdio.h>

int main() {
    int a = 15, b = 4;

    printf("Addition: %d\\n", a + b);
    printf("Subtraction: %d\\n", a - b);
    printf("Multiplication: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Modulus: %d\\n", a % b);

    return 0;
}
`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example 2: Arithmetic with Float"}),e.jsx(t,{initialCode:`#include <stdio.h>

int main() {
    float x = 7.5, y = 2.0;

    printf("x / y = %.2f\\n", x / y);
    printf("x * y = %.2f\\n", x * y);

    return 0;
}
`}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-sky-300 font-semibold",children:"Teacher’s Tip"}),e.jsxs("p",{className:"text-slate-300 text-sm mt-1",children:["Division between two integers always produces an integer result. Use ",e.jsx("code",{children:"float"})," or ",e.jsx("code",{children:"double"})," to get decimal values."]})]}),e.jsxs("div",{className:"border border-slate-700 p-4 rounded-xl bg-slate-800/60",children:[e.jsx("h3",{className:"text-purple-300 font-semibold",children:"Points to Remember"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"%"})," (modulus) works only with integers."]}),e.jsx("li",{children:"Integer division discards the decimal portion."}),e.jsx("li",{children:"Operator precedence affects calculations."})]})]})]})}}export{r as default};

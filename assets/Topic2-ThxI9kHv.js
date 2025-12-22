import{r as s,j as e}from"./index-DseVoxN8.js";import{E as a}from"./EditableCCodeBlock-ClzjvTDq.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Declaring Variables: int, float, double, char"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Variables store data in memory. In C, every variable must have a type that decides how much memory it uses and what kind of values it can hold."}),e.jsx(a,{language:"c",initialCode:`#include <stdio.h>

int main() {
    int age = 25;
    float price = 19.99f;
    double salary = 55000.75;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Price: %f\\n", price);
    printf("Salary: %lf\\n", salary);
    printf("Grade: %c\\n", grade);

    return 0;
}`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Basic Data Types in C"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"int"})," → whole numbers (4 bytes)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"float"})," → decimal numbers (4 bytes)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"double"})," → double-precision decimals (8 bytes)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"char"})," → characters (1 byte)"]})]})]})}}export{i as default};

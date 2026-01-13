import{r as s,j as e,W as t}from"./index-Dph6J_oz.js";class n extends s.Component{render(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Topic 11 – Binary Arithmetic: Addition & Subtraction"}),e.jsxs("p",{children:["Binary arithmetic is the foundation of all digital systems. Computers perform all calculations using",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" binary addition"}),", and subtraction is implemented using",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" 2’s complement"}),"."]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Binary Addition Rules"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"0 + 0 = 0"}),e.jsx("li",{children:"0 + 1 = 1"}),e.jsx("li",{children:"1 + 0 = 1"}),e.jsx("li",{children:"1 + 1 = 10 (Sum = 0, Carry = 1)"}),e.jsx("li",{children:"1 + 1 + 1 = 11 (Sum = 1, Carry = 1)"})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Example: Binary Addition"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
   1011   (11)
 + 0110   (6)
 -------
 10001   (17)
`}),e.jsx("p",{className:"text-yellow-300",children:"Carry is propagated from right to left, exactly like decimal addition."})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Unsigned Binary Addition"}),e.jsxs("p",{children:["In unsigned arithmetic, all bits represent magnitude. Any extra carry beyond MSB is",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" discarded"}),"."]}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example (4-bit unsigned):

  1110 (14)
+ 0101 (5)
-------
1 0011 → discard carry
  0011 = 3
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Signed Binary Addition (2’s Complement)"}),e.jsxs("p",{children:["Signed numbers use the",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" MSB as sign bit"}),". Overflow must be checked using sign rules or carry comparison."]}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: +5 + (-3)

+5  = 0101
-3  = 1101

  0101
+ 1101
-------
1 0010 → discard carry
  0010 = +2
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Binary Subtraction Using 2’s Complement"}),e.jsxs("p",{children:["Computers do not perform direct subtraction. Instead, subtraction is converted into addition using the ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"2’s complement"}),"."]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("p",{className:"font-semibold text-emerald-300 mb-2",children:"Rule"}),e.jsx("p",{className:"font-mono text-sky-300",children:"A − B = A + (2’s complement of B)"})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Example: Binary Subtraction"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: 9 − 5

 9 = 1001
 5 = 0101

2’s complement of 5:
 1’s comp = 1010
 +1       = 1011

  1001
+ 1011
-------
1 0100 → discard carry
  0100 = 4
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Common Exam Cases"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Unsigned addition → check final carry"}),e.jsx("li",{children:"Signed addition → check sign bits / overflow"}),e.jsx("li",{children:"Subtraction → always use 2’s complement"}),e.jsx("li",{children:"Ignore final carry in signed arithmetic"})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Practice Area – Binary Arithmetic"}),e.jsx("p",{children:"Practice binary addition and subtraction. Verify carry, sign, and overflow conditions."}),e.jsx("div",{className:"border border-slate-700 rounded-xl overflow-hidden h-[450px] bg-slate-800",children:e.jsx(t,{})})]})]})}}export{n as default};

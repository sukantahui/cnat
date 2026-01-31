import{r as s,j as e,W as t}from"./index-DdrZIREY.js";class d extends s.Component{render(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Topic 9 – Binary Arithmetic with Signed Numbers"}),e.jsxs("p",{children:["In computers, signed binary numbers are mainly represented using",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" 2’s Complement"}),". This allows both positive and negative numbers to be processed using the same addition circuit."]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Addition of Signed Binary Numbers (2’s Complement)"}),e.jsx("p",{children:"To add signed binary numbers in 2’s complement form, simply add them as unsigned binary numbers and discard any extra carry."}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
Example: Add +5 and -3 (4-bit)

+5 = 0101
-3 = 1101

  0101
+ 1101
------
 10010   → discard extra carry
 0010 = +2 (Answer)
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Subtraction of Signed Binary Numbers"}),e.jsx("p",{children:"To subtract a number, take the 2’s complement of the subtrahend and add it to the minuend."}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
Example: 6 − 4 (4-bit)

+6 = 0110
+4 = 0100 → 2’s complement = 1100

  0110
+ 1100
------
 10010 → discard carry
 0010 = 2 (Answer)
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Overflow in Signed Binary Addition"}),e.jsx("p",{children:"Overflow occurs when the carry into the sign bit is not equal to the carry out of the sign bit."}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
Example: Add +7 and +4 (4-bit)

+7 = 0111
+4 = 0100

  0111
+ 0100
------
  1011  (MSB changed unexpectedly → Overflow)
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Practice Area – Try Binary Arithmetic Yourself"}),e.jsx("p",{children:"Practice addition and subtraction of signed binary numbers using 2’s complement."}),e.jsx("div",{className:"border border-slate-700 rounded-xl overflow-hidden h-[450px] bg-slate-800",children:e.jsx(t,{})})]})]})}}export{d as default};

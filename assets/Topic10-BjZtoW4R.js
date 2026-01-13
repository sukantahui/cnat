import{r as s,j as e,W as t}from"./index-CZhUHB75.js";class n extends s.Component{render(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Topic 10 – Overflow Detection in Signed Arithmetic"}),e.jsxs("p",{children:["In signed binary arithmetic using",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" 2’s Complement"}),", overflow occurs when the result of an operation is outside the representable range of the given number of bits."]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Condition for Overflow"}),e.jsx("p",{children:"Overflow occurs if:"}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsx("li",{children:"Two positive numbers are added and the result is negative."}),e.jsx("li",{children:"Two negative numbers are added and the result is positive."})]}),e.jsxs("p",{className:"text-yellow-300",children:["Another equivalent rule:",e.jsxs("span",{className:"font-mono text-sky-300",children:[" ","Carry into MSB ≠ Carry out of MSB"]})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Overflow Detection Rule: Carry into MSB ≠ Carry out of MSB"}),e.jsxs("p",{children:["In ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"2’s Complement arithmetic"}),", overflow is not detected by the final carry. Instead, it is detected by comparing the",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" carry into"})," and",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" carry out of"})," the",e.jsx("span",{className:"text-sky-300 font-semibold",children:" Most Significant Bit (MSB)"}),"."]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("p",{className:"font-semibold text-emerald-300 mb-2",children:"Rule"}),e.jsx("p",{className:"font-mono text-sky-300 text-lg",children:"Overflow occurs if: Carry into MSB ≠ Carry out of MSB"})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300 mb-2",children:"Example: +7 + +4 (4-bit)"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
   0 1 1 1   (+7)
 + 0 1 0 0   (+4)
 -----------
   1 0 1 1

Carry into MSB  = 1
Carry out of MSB = 0
Since they are not equal → Overflow
`})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300 mb-2",children:"Example: +5 + -3 (No Overflow)"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
   0 1 0 1   (+5)
 + 1 1 0 1   (-3)   Because positive 3 is 0 0 1 1
 -----------
   0 0 1 0

Carry into MSB  = 0
Carry out of MSB = 0
Since both are equal → No Overflow
`})]}),e.jsx("div",{className:"bg-yellow-900/30 p-4 rounded-xl border border-yellow-700",children:e.jsx("p",{className:"text-yellow-300 font-semibold",children:"💡 Tip: Never judge overflow by the final carry. Always compare the carry into and carry out of the sign bit."})})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"Examples (4-bit System)"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
Example 1: +7 + +4

  0111
+ 0100
------
  1011  → Negative result → Overflow


Example 2: -5 + -4

-5 = 1011
-4 = 1100

  1011
+ 1100
------
 1 0111 → Positive result → Overflow
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-300",children:"When Overflow Does NOT Occur"}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsx("li",{children:"Adding a positive and a negative number."}),e.jsx("li",{children:"Adding numbers with different signs."})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Practice Area – Detect Overflow"}),e.jsx("p",{children:"Try adding different signed binary numbers and check whether overflow occurs."}),e.jsx("div",{className:"border border-slate-700 rounded-xl overflow-hidden h-[450px] bg-slate-800",children:e.jsx(t,{})})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-sky-300",children:"2’s Complement Arithmetic – All Exam Cases (8-bit)"}),e.jsx("p",{children:"In 2’s complement system, subtraction is performed by adding the 2’s complement of the subtrahend. All operations are reduced to simple binary addition."}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1) Positive + Positive"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: +25 + +12

+25 = 00011001
+12 = 00001100

  00011001
+ 00001100
-----------
  00100101  = +37
`})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"2) Positive + Negative"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: +25 + (-12)

+25 = 00011001
-12:
  +12 = 00001100
  1’s comp = 11110011
  +1 → 11110100

  00011001
+ 11110100
-----------
1 00001101 → discard carry
  00001101 = +13
`})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"3) Positive − Positive"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: +25 − +12

+25 = 00011001
-12 = 11110100

  00011001
+ 11110100
-----------
1 00001101 → discard carry
  00001101 = +13
`})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"4) Positive − Negative"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: +25 − (−12)

-12 = 11110100
2’s complement of -12 → +12 = 00001100

  00011001
+ 00001100
-----------
  00100101 = +37
`})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"5) Negative − Negative"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: -25 − (-12)

-25:
 +25 = 00011001
 1’s comp = 11100110
 +1 → 11100111

+12 = 00001100

  11100111
+ 00001100
-----------
  11110011

11110011 → negative
1’s comp = 00001100
+1 → 00001101 = -13
`})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"6) Negative + Negative"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl font-mono text-sky-300 text-sm leading-6",children:`
Example: -25 + (-12)

-25 = 11100111
-12 = 11110100

  11100111
+ 11110100
-----------
1 11011011 → discard carry
  11011011 → negative

1’s comp = 00100100
+1 → 00100101 = -37
`})]})]})]})}}export{n as default};

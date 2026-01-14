import{j as e,W as s}from"./index-C8p6Ail2.js";const t="/assets/image-CR0ws5Sy.png";function l(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Topic 6 – 1’s Complement Representation"}),e.jsxs("p",{children:["In ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"1’s Complement representation"}),", positive numbers are written in their normal binary form. Negative numbers are obtained by",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" inverting every bit"}),"of the corresponding positive number."]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Rule for Forming 1’s Complement"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Write the binary form of the positive number."}),e.jsx("li",{children:"Change all 0s to 1s and all 1s to 0s."}),e.jsx("li",{children:"The result gives the negative number in 1’s Complement form."})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Examples (4-bit)"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
+5 = 0101
-5 = 1010  (1’s complement of 0101)

+3 = 0011
-3 = 1100  (1’s complement of 0011)
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Signed Decimal to 1’s Complement"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center border border-slate-700",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 border border-slate-700",children:"Signed Decimal"}),e.jsx("th",{className:"p-2 border border-slate-700",children:"1’s Complement"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border border-slate-700",children:"+0"}),e.jsx("td",{className:"p-2 border border-slate-700 font-mono",children:"0000"})]}),e.jsxs("tr",{className:"bg-slate-800",children:[e.jsx("td",{className:"p-2 border border-slate-700",children:"-0"}),e.jsx("td",{className:"p-2 border border-slate-700 font-mono",children:"1111"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border border-slate-700",children:"+5"}),e.jsx("td",{className:"p-2 border border-slate-700 font-mono",children:"0101"})]}),e.jsxs("tr",{className:"bg-slate-800",children:[e.jsx("td",{className:"p-2 border border-slate-700",children:"-5"}),e.jsx("td",{className:"p-2 border border-slate-700 font-mono",children:"1010"})]})]})]})})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-5",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Uses of 1’s Complement Binary Numbers"}),e.jsxs("p",{children:["1’s Complement binary numbers are widely used in",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" signed binary number representation"}),"and in performing arithmetic operations such as",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" addition and subtraction"}),"."]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"1’s Complement in Signed Binary Number Representation"}),e.jsx("p",{children:"In this system:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Positive numbers are written directly in binary form."}),e.jsxs("li",{children:["Negative numbers are represented by taking the ",e.jsx("span",{className:"text-yellow-300 font-semibold",children:"1’s complement"})," of the corresponding positive number."]}),e.jsxs("li",{children:["The ",e.jsx("span",{className:"text-red-300 font-semibold",children:"MSB is always 1"})," for negative numbers."]})]})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300 mb-2",children:"Example (Using 5-bit Register)"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
Step (i)   +5 = 0 0101

Step (ii)  Take 1’s complement of 0 0101

           -5 = 1 1010
`}),e.jsxs("p",{className:"mt-2",children:["Since the ",e.jsx("span",{className:"text-red-300 font-semibold",children:"MSB is 1"}),", the number is identified as negative."]})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Range of Numbers"}),e.jsxs("p",{children:["For a ",e.jsx("span",{className:"text-sky-300 font-semibold",children:"k-bit register"}),":"]}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsxs("li",{children:["Largest positive number =",e.jsx("span",{className:"font-mono text-sky-300",children:" 2^(k-1) − 1"})]}),e.jsxs("li",{children:["Smallest negative number =",e.jsx("span",{className:"font-mono text-sky-300",children:" −(2^(k-1) − 1)"})]})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:t,alt:"1's Complement Representation Example",className:"max-w-xl w-full rounded-xl shadow-lg border border-slate-700"})}),e.jsxs("div",{className:"bg-red-900/30 p-4 rounded-xl border border-red-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-400 mb-2",children:"Drawback"}),e.jsxs("p",{children:["Zero has ",e.jsx("span",{className:"text-red-300 font-semibold",children:"two representations"}),":"]}),e.jsx("p",{className:"mt-1 font-mono text-sky-300",children:"+0 = 0 0000     and     -0 = 1 1111"})]}),e.jsx("div",{className:"bg-slate-800 p-4 rounded-xl",children:e.jsx("p",{className:"text-yellow-300 font-semibold",children:"Next we will study arithmetic operations — Addition and Subtraction using 1’s Complement binary numbers."})})]}),e.jsx("section",{children:e.jsx(s,{})}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Arithmetic Operations: Subtractions and Additions in 1’s Complement Binary Numbers"}),e.jsx("p",{children:"Lets see arithmetic operations: Subtractions and Additions in 1’s complement binary numbers."}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Subtractions by 1’s Complement"}),e.jsx("p",{children:"The algorithm to subtract two binary number using 1’s complement is explained as following below:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Take 1’s complement of the subtrahend"}),e.jsx("li",{children:"Add with minuend"}),e.jsx("li",{children:"If the result of above addition has carry bit 1, then add it to the least significant bit (LSB) of given result"}),e.jsx("li",{children:"If there is no carry bit 1, then take 1’s complement of the result which will be negative"})]}),e.jsx("p",{children:"Note that subtrahend is number that to be subtracted from the another number, i.e., minuend."}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-sky-300",children:"Example (Case-1: When Carry bit 1): Evaluate 10101 - 00101"}),e.jsx("pre",{className:"font-mono text-sky-300 text-sm leading-6 mt-2",children:`
According to above algorithm, take 1’s complement of subtrahend 00101, which will be 11010,
then add both of these.

10101 + 11010 = 1 01111

Since, there is carry bit 1, so add this to the LSB of given result,
i.e., 01111 + 1 = 10000 which is the answer.
`})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-sky-300",children:"Example (Case-2: When no Carry bit): Evaluate 11110 with 1110"}),e.jsx("pre",{className:"font-mono text-sky-300 text-sm leading-6 mt-2",children:`
According to above algorithm, take 1’s complement of subtrahend 11110, which will be 00011.
Then add both of these,

11001 + 00011 = 11100

Since there is no carry bit 1, so take 1’s complement of above result,
which will be 00011, and this is negative number, i.e., 00011, which is the answer.
`})]}),e.jsx("p",{children:"Similarly, you can subtract two mixed (with fractional part) binary numbers. Note that you always add Carry bit the the least significant bit (LSB) of the result, whenever you get carry bit 1. LSB of fractional binary number is last (rightmost) bit of mixed or fractional binary numbers."})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Additions by 1’s Complement"}),e.jsx("p",{children:"There are difference scenario for addition of two binary numbers using 1’s complement. These are explained as following below."}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl",children:[e.jsx("h4",{className:"text-sky-300 font-semibold",children:"Case-1: Addition of positive and negative number when positive number has greater magnitude"}),e.jsx("pre",{className:"font-mono text-sky-300 text-sm leading-6 mt-2",children:`
When positive number has greater magnitude, then take simply 1’s complement of negative number
and the end-around carry of the sum is added to the least significant bit (LSB).

Example: Add 1110 and -1101.

Take 1’s complement of 1101, which will be 0010.
1110 + 0010 = 1 0000
Then add this carry bit to the LSB,
0000 + 1 = 0001 which is the answer.
`})]}),e.jsx("p",{children:"Note that if the register size is big then fill the same value of MSB to preserve sign magnitude for inputs and output."}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl",children:[e.jsx("h4",{className:"text-sky-300 font-semibold",children:"Case-2: Addition of positive and negative number when negative number has greater magnitude"}),e.jsx("pre",{className:"font-mono text-sky-300 text-sm leading-6 mt-2",children:`
Example: Add 1010 and -1100 in five-bit registers.

These numbers become 01010 and -01100.
Take 1’s complement of 01100 = 10011
01010 + 10011 = 11101

Since there is no end-around carry bit,
take 1’s complement of 11101 = 00010,
so result is -00010.
`})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl",children:[e.jsx("h4",{className:"text-sky-300 font-semibold",children:"Case-3: Addition of two negative numbers"}),e.jsx("pre",{className:"font-mono text-sky-300 text-sm leading-6 mt-2",children:`
Example: Add -1010 and -0101 in five-bit registers.

These become -01010 and -00101.

Add complements:
10101 + 11010 = 1 01111

End-around carry:
01111 + 1 = 10000

Take 1’s complement of 10000 = 01111
So result is -01111.
`})]}),e.jsx("div",{className:"bg-yellow-900/30 p-4 rounded-xl border border-yellow-700",children:e.jsx("p",{className:"text-yellow-300 font-semibold",children:"End-around-carry-bit addition occurs only in 1’s complement arithmetic operations but not in 2’s complement arithmetic operations."})})]})]}),e.jsxs("section",{className:"bg-yellow-900/30 p-6 rounded-2xl border border-yellow-700",children:[e.jsx("h2",{className:"text-xl font-bold text-yellow-300 mb-2",children:"Important Note"}),e.jsxs("p",{className:"text-yellow-200",children:["In 1’s Complement system, zero has two representations:",e.jsx("span",{className:"font-mono text-sky-300",children:" 0000 "})," and",e.jsx("span",{className:"font-mono text-sky-300",children:" 1111"}),". Hence, ambiguity of zero still exists."]})]})]})}export{l as default};

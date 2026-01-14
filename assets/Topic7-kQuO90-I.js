import{j as e,W as s}from"./index-CjrfwjvR.js";function n(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Topic 7 – 2’s Complement Representation"}),e.jsxs("p",{children:["In ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"2’s Complement representation"}),", negative numbers are represented by taking the 1’s complement of the number and then adding ",e.jsx("span",{className:"text-yellow-300 font-semibold",children:"1"})," to the result. This is the most widely used method for representing signed binary numbers in computers."]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Rule for Forming 2’s Complement"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Write the binary form of the positive number."}),e.jsx("li",{children:"Find the 1’s complement of the number."}),e.jsxs("li",{children:["Add ",e.jsx("span",{className:"text-yellow-300 font-semibold",children:"1"})," to obtain the 2’s complement."]})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Examples (4-bit)"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
+5 = 0101
1’s complement of 0101 = 1010
Add 1 → 1011
So, -5 = 1011

+3 = 0011
1’s complement = 1100
Add 1 → 1101
So, -3 = 1101
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Range of Numbers"}),e.jsxs("p",{children:["For a ",e.jsx("span",{className:"text-sky-300 font-semibold",children:"k-bit register"}),":"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Largest positive number = ",e.jsx("span",{className:"font-mono text-sky-300",children:"2^(k-1) − 1"})]}),e.jsxs("li",{children:["Smallest negative number = ",e.jsx("span",{className:"font-mono text-sky-300",children:"−2^(k-1)"})]})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Addition using 2’s Complement"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
Example: Add +5 and -3

+5 = 0101
-3 = 1101

0101
+1101
------
10010  → Ignore extra carry
0010 = +2 (Answer)
`})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Subtraction using 2’s Complement"}),e.jsx("p",{children:"To subtract a number, add the 2’s complement of the subtrahend with the minuend."}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
Example: 6 - 4

+6 = 0110
+4 = 0100 → 2’s complement = 1100

0110
+1100
------
10010 → Ignore carry
0010 = 2 (Answer)
`})]}),e.jsxs("section",{className:"bg-emerald-900/30 p-6 rounded-2xl border border-emerald-700",children:[e.jsx("h2",{className:"text-xl font-bold text-emerald-300 mb-2",children:"Advantages of 2’s Complement"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Only one representation of zero."}),e.jsx("li",{children:"Arithmetic operations are simple and fast."}),e.jsx("li",{children:"No end-around carry is required."})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Practice Area – Try 2’s Complement Yourself"}),e.jsxs("p",{children:["Write any number and convert it into its",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" 2’s Complement"}),"."]}),e.jsx("div",{className:"border border-slate-700 rounded-xl overflow-hidden h-[450px] bg-slate-800",children:e.jsx(s,{})})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-sky-300",children:"Three Ways to Represent Signed Integers"}),e.jsx("p",{children:"There are three different ways to represent signed integer (article). a: Signed bit, b: 1’s Complement, and c: 2’s Complement. Let’s try to understand how these methods have derived and why 2’s complement is preferred over others."}),e.jsx("p",{children:"As we know that data are stored in bits. How can we store signed integer in the memory? To solve this problem, first we will develop a naïve solution and then will iterate it till we have the best solution for our problem."}),e.jsx("h3",{className:"text-2xl font-semibold text-emerald-300",children:"a) Signed Bit"}),e.jsx("p",{children:"When trying to store a signed integer, it seems obvious to reserve the left most bit for sign and use remaining bits to actually store the values. For example: in 4-bit system, first bit from left will be reserved for sign (0 represent positive whereas 1 represent negative) and other 3 bits will be used to store the values. Similarly in 8-bit system, first bit from left will be used for sign and remaining 7 will be used for values."}),e.jsxs("table",{className:"w-full border border-slate-700 text-center text-sm font-mono",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Binary"}),e.jsx("th",{children:"Decimal"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"0000"}),e.jsx("td",{children:"+0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0001"}),e.jsx("td",{children:"+1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0010"}),e.jsx("td",{children:"+2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0011"}),e.jsx("td",{children:"+3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0100"}),e.jsx("td",{children:"+4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0101"}),e.jsx("td",{children:"+5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0110"}),e.jsx("td",{children:"+6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0111"}),e.jsx("td",{children:"+7"})]}),e.jsxs("tr",{className:"bg-red-900/30",children:[e.jsx("td",{children:"1000"}),e.jsx("td",{children:"-0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1001"}),e.jsx("td",{children:"-1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1010"}),e.jsx("td",{children:"-2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1011"}),e.jsx("td",{children:"-3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1100"}),e.jsx("td",{children:"-4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1101"}),e.jsx("td",{children:"-5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1110"}),e.jsx("td",{children:"-6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1111"}),e.jsx("td",{children:"-7"})]})]})]}),e.jsx("p",{children:"By using this approach, we are successfully able to represent signed integer. But when we analysis it more closely, we could observe following drawbacks:"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2",children:[e.jsx("li",{children:"Two representations of zero: In 4-bit system we get both +0 and -0."}),e.jsx("li",{children:"Signed extension doesn’t work for negative numbers."}),e.jsx("li",{children:"Binary addition doesn’t work because sign bit is not part of actual number."})]}),e.jsx("h3",{className:"text-2xl font-semibold text-emerald-300",children:"b) 1’s Complement"}),e.jsx("p",{children:"Negative numbers are represented by inverting every bit of corresponding positive number."}),e.jsx("p",{children:"Two representations of zero still exist. Signed extension works perfectly for negative numbers and binary addition works with modified rule of end-around carry."}),e.jsx("h3",{className:"text-2xl font-semibold text-emerald-300",children:"c) 2’s Complement"}),e.jsx("p",{children:"Negative numbers are represented by inverting every bit of corresponding positive number then adding 1 bit to it."}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2",children:[e.jsx("li",{children:"Only one representation of zero."}),e.jsx("li",{children:"Signed extension works perfectly."}),e.jsx("li",{children:"Binary addition works naturally."}),e.jsx("li",{children:"First bit acts as sign bit."}),e.jsx("li",{children:"Overflow can be detected if carry into sign bit ≠ carry out of sign bit."})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("p",{className:"text-sky-300 font-semibold",children:"Explore more:"}),e.jsx("a",{href:"https://docs.google.com/document/d/1FPLcUZAp8LJLEPZ3CCHK7ZJsI0wSTsbcl3sxFl4WzJo/edit?usp=sharing",target:"_blank",rel:"noreferrer",className:"text-blue-400 underline",children:"Get your Document"})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-5",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Representing Negative Numbers using 2’s Complement (Step-by-Step)"}),e.jsxs("p",{children:["In ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"2’s Complement method"}),", a negative number is obtained by taking the",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" 1’s complement"}),"of the positive number and then adding",e.jsx("span",{className:"text-yellow-300 font-semibold",children:" 1"}),"."]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Example: Represent −5 using 4-bit 2’s Complement"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
Step 1: Write +5 in binary
        +5 = 0101

Step 2: Find 1’s complement of 0101
        0101 → 1010

Step 3: Add 1 to get 2’s complement
        1010
      +    1
      --------
        1011

So, -5 = 1011 (in 4-bit 2’s complement)
`}),e.jsxs("p",{children:["The most significant bit (MSB) is",e.jsx("span",{className:"text-red-300 font-semibold",children:" 1"}),", which indicates that the number is negative."]})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Another Example: Represent −3 using 4-bit 2’s Complement"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
Step 1: +3 = 0011

Step 2: 1’s complement of 0011 = 1100

Step 3: Add 1
        1100
      +    1
      --------
        1101

So, -3 = 1101 (in 4-bit 2’s complement)
`})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-xl space-y-5",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"2’s Complement Representation – 8 Bit Example"}),e.jsxs("p",{children:["Let us now represent a negative number using",e.jsx("span",{className:"text-emerald-300 font-semibold",children:" 8-bit 2’s Complement"}),"."]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Example: Represent −25 using 8-bit 2’s Complement"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm font-mono leading-6",children:`
                            Step 1: Write +25 in binary (8-bit)
                                    +25 = 00011001

                            Step 2: Find 1’s complement
                                    00011001 → 11100110

                            Step 3: Add 1
                                    11100110
                                +        1
                                ----------
                                    11100111

                            So, -25 = 11100111 (in 8-bit 2’s Complement)
                            `}),e.jsxs("p",{children:["The MSB is",e.jsx("span",{className:"text-red-300 font-semibold",children:" 1"}),", hence the number is identified as negative."]})]})]}),e.jsxs("section",{className:"bg-slate-900 text-slate-200 p-8 rounded-2xl shadow-xl space-y-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-sky-300",children:"Why Inversion and Adding One Works in 2’s Complement"}),e.jsx("p",{children:"Invert and add one. Invert and add one. It works, and you may want to know why. This section is for those who are curious about why this strange technique actually makes mathematical sense."}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Borrowing and Subtraction"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
  93702
- 58358
-------

Borrowing process:

     1
  93702
- 58358
-------
      4

    11
  93702
- 58358
-------
     44

    11
  93702
- 58358
-------
    344

  1 11
  93702
- 58358
-------
   5344

  1 11
  93702
- 58358
-------
  35344
`}),e.jsx("p",{children:"So, 93702 − 58358 = 35344."})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Borrowing and its Relevance to the Negative of a Number"}),e.jsx("p",{children:"To find the negative of a number, we subtract it from zero. Let us see the silly way a computer does 0 − 3:"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
000000
-    3
------

    1
000000
-    3
------
     7

   11
000000
-    3
------
    97

  111
000000
-    3
------
   997

 1111
000000
-    3
------
  9997
`}),e.jsx("p",{children:"We get 9997… which is exactly what borrowing forces when subtracting from zero."})]}),e.jsxs("div",{className:"bg-slate-800 p-5 rounded-xl space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"The Same in Binary (8-bit Example)"}),e.jsx("p",{children:"Now subtract 75 (01001011) from zero in 8-bit binary."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
  00000000
- 01001011
----------
  10110101
`}),e.jsx("p",{children:"If we subtract from 100000000 instead of zero, we still get the same 8-bit result."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 font-mono text-sm leading-6",children:`
 100000000
-01001011
----------
 010110101   → discard extra bit → 10110101
`})]}),e.jsxs("div",{className:"bg-emerald-900/30 p-5 rounded-xl border border-emerald-700 space-y-2",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Final Insight"}),e.jsx("p",{children:"Subtracting a number from all 1’s flips every bit (this is 1’s complement), and adding the final borrow is equivalent to adding 1."}),e.jsx("p",{className:"font-semibold text-yellow-300",children:"So taking the negative of a number in a computer is the same as:"}),e.jsx("p",{className:"font-mono text-sky-300",children:"Invert all bits → Add 1"})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl",children:[e.jsx("p",{className:"text-sky-300 font-semibold",children:"💡 Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-300",children:[e.jsx("li",{children:"2’s complement is not a trick – it is subtraction from 2ⁿ."}),e.jsx("li",{children:"That extra “+1” is the borrowed carry returning to LSB."}),e.jsx("li",{children:"This is why hardware prefers 2’s complement — no special subtraction circuit needed."})]})]})]})]})}export{n as default};

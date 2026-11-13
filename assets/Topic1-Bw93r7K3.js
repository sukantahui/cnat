import{j as e,b as h}from"./vendor-react-core-B-R9HE-Z.js";import{T as j}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as y}from"./FAQTemplate-16IfroqC.js";import{P as N}from"./PlainTextPrint-C6NaUtnE.js";import{P as S}from"./PythonFileLoader-DZ61U3Y_.js";import{c as b,d as B,$ as C,az as p,t as R,y as w,R as A}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const E=[{question:"What is the binary equivalent of decimal number 43 using successive division?",options:["(101011)₂","(110101)₂","(101101)₂","(111001)₂"],correctAnswer:0,explanation:"43/2=21 (rem 1), 21/2=10 (rem 1), 10/2=5 (rem 0), 5/2=2 (rem 1), 2/2=1 (rem 0), 1/2=0 (rem 1). Reading bottom to top gives (101011)₂."},{question:"What is the octal equivalent of decimal number 198?",options:["(306)₈","(286)₈","(316)₈","(276)₈"],correctAnswer:0,explanation:"198/8 = 24 (rem 6), 24/8 = 3 (rem 0), 3/8 = 0 (rem 3). Reading bottom to top gives (306)₈."},{question:"When converting (254)₁₀ to Hexadecimal, the first remainder obtained is 14. Which symbol must replace 14?",options:["D","E","F","C"],correctAnswer:1,explanation:"In hexadecimal notation: 10=A, 11=B, 12=C, 13=D, 14=E, 15=F. Therefore, 14 is represented by 'E'."},{question:`Assertion (A): When converting a decimal integer to binary, remainders must be recorded from the last division step (bottom) up to the first (top).
Reason (R): The last remainder corresponds to the Most Significant Bit (MSB), which holds the highest positional weight (2ⁿ).`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"The first remainder obtained represents 2⁰ (LSB), while subsequent remainders represent higher powers of 2 up to the MSB."},{question:"What is the hexadecimal representation of decimal number 175?",options:["(AF)₁₆","(BA)₁₆","(FA)₁₆","(A7)₁₆"],correctAnswer:0,explanation:"175/16 = 10 with remainder 15 ('F'). 10/16 = 0 with remainder 10 ('A'). Reading bottom to top gives (AF)₁₆."}],_=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 1: DECIMAL TO BINARY, OCTAL, AND HEXADECIMAL CONVERSION\r
================================================================================\r
\r
1. THE SUCCESSIVE DIVISION ALGORITHM (INTEGER PART):\r
To convert an integer from Decimal (Base 10) to any target base 'R' (Binary Base 2, Octal Base 8, Hexadecimal Base 16):\r
- Step 1: Divide the decimal number by the target base R using integer division.\r
- Step 2: Record the integer quotient and the remainder (0 <= Remainder < R).\r
- Step 3: Replace the decimal number with the quotient obtained in Step 2.\r
- Step 4: Repeat Steps 1 through 3 until the quotient becomes 0.\r
- Step 5: Read the remainders from BOTTOM to TOP (the last remainder obtained is the Most Significant Bit/Digit - MSB, and the first remainder is the Least Significant Bit/Digit - LSB).\r
\r
2. WORKED EXAMPLES:\r
\r
Example 1: Convert (156)₁₀ to Binary (Base 2)\r
156 / 2 = 78 , Remainder: 0 (LSB)\r
 78 / 2 = 39 , Remainder: 0\r
 39 / 2 = 19 , Remainder: 1\r
 19 / 2 =  9 , Remainder: 1\r
  9 / 2 =  4 , Remainder: 1\r
  4 / 2 =  2 , Remainder: 0\r
  2 / 2 =  1 , Remainder: 0\r
  1 / 2 =  0 , Remainder: 1 (MSB)\r
Reading bottom to top: (156)₁₀ = (10011100)₂\r
\r
Example 2: Convert (156)₁₀ to Octal (Base 8)\r
156 / 8 = 19 , Remainder: 4 (LSB)\r
 19 / 8 =  2 , Remainder: 3\r
  2 / 8 =  0 , Remainder: 2 (MSB)\r
Reading bottom to top: (156)₁₀ = (234)₈\r
\r
Example 3: Convert (156)₁₀ to Hexadecimal (Base 16)\r
156 / 16 = 9 , Remainder: 12 (Letter 'C') (LSB)\r
  9 / 16 = 0 , Remainder:  9 (MSB)\r
Reading bottom to top: (156)₁₀ = (9C)₁₆\r
\r
3. HEXADECIMAL DIGIT SYMBOLS (10 to 15):\r
10 = A, 11 = B, 12 = C, 13 = D, 14 = E, 15 = F\r
\r
4. CBSE EXAMINATION PITFALLS & TIPS:\r
- Common Mistake: Reading remainders from TOP to BOTTOM instead of BOTTOM to TOP.\r
- Common Mistake: Writing remainder 12 as "12" in hexadecimal instead of single digit symbol 'C'.\r
- Always show the complete vertical division ladder in subjective 2-mark or 3-mark questions.\r
`,T=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: decimal_to_all_bases.py\r
Topic 1: Decimal to Binary, Octal, and Hexadecimal Conversion (Successive Division Method)\r
\r
Demonstrates:\r
1. Successive Division by Target Base (2, 8, 16)\r
2. Recording Remainders from Bottom to Top (MSB to LSB)\r
3. Step-by-step trace formatting suitable for CBSE board examination answers\r
"""\r
\r
def decimal_to_base_with_trace(decimal_num: int, base: int) -> tuple:\r
    """\r
    Converts a positive decimal integer into the specified target base (2, 8, or 16)\r
    using the successive division method, recording step-by-step quotients and remainders.\r
    """\r
    base_names = {2: "Binary", 8: "Octal", 16: "Hexadecimal"}\r
    hex_symbols = "0123456789ABCDEF"\r
    \r
    print(f"\\n--- [DECIMAL TO {base_names.get(base, f'BASE-{base}').upper()} (SUCCESSIVE DIVISION BY {base})] ---")\r
    print(f"Converting ({decimal_num})₁₀ to Base {base}:\\n")\r
    print(f"{'Division Step':<16} | {'Quotient':<10} | {'Remainder':<12} | {'Symbol'}")\r
    print("-" * 55)\r
\r
    if decimal_num == 0:\r
        print(f"0 / {base:<13} | 0          | 0            | 0")\r
        return "0", [{"quotient": 0, "remainder": "0"}]\r
\r
    steps = []\r
    remainders = []\r
    current = decimal_num\r
\r
    while current > 0:\r
        quotient = current // base\r
        rem = current % base\r
        symbol = hex_symbols[rem]\r
        remainders.append(symbol)\r
        steps.append({"step": f"{current} / {base}", "quotient": quotient, "remainder": rem, "symbol": symbol})\r
        print(f"{current} / {base:<12} | {quotient:<10} | {rem:<12} | {symbol}")\r
        current = quotient\r
\r
    # Read remainders from bottom to top (Most Significant Digit to Least Significant Digit)\r
    converted_result = "".join(reversed(remainders))\r
    print("-" * 55)\r
    print(f"[+] Read remainders from BOTTOM to TOP (MSB -> LSB):")\r
    print(f"    ({decimal_num})₁₀ = ({converted_result})₍{base}₎\\n")\r
    return converted_result, steps\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - SUCCESSIVE DIVISION CONVERTER SUITE   ")\r
    print("=================================================================\\n")\r
\r
    test_decimal = 156\r
\r
    # 1. Decimal to Binary (Base 2)\r
    decimal_to_base_with_trace(test_decimal, 2)\r
\r
    # 2. Decimal to Octal (Base 8)\r
    decimal_to_base_with_trace(test_decimal, 8)\r
\r
    # 3. Decimal to Hexadecimal (Base 16)\r
    decimal_to_base_with_trace(test_decimal, 16)\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=()=>{const[l,o]=h.useState(156),[r,u]=h.useState(2),d=Math.max(0,Math.floor(Number(l)||0)),g="0123456789ABCDEF",i=((t,a)=>{if(t===0)return[{dividend:0,quotient:0,rem:0,symbol:"0"}];const n=[];let s=t;for(;s>0;){const m=Math.floor(s/a),x=s%a,v=g[x];n.push({dividend:s,quotient:m,rem:x,symbol:v}),s=m}return n})(d,r),c=i.map(t=>t.symbol).reverse().join(""),f=r===2?"Binary":r===8?"Octal":"Hexadecimal";return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(w,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Successive Division Ladder Engine"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Enter any decimal integer and target base to trace quotient-remainder steps and bottom-to-top assembly."})]})]}),e.jsx("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[{base:2,label:"Base 2 (Binary)"},{base:8,label:"Base 8 (Octal)"},{base:16,label:"Base 16 (Hex)"}].map(t=>e.jsx("button",{onClick:()=>u(t.base),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${r===t.base?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:t.label},t.base))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-start",children:[e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Decimal Number (Base 10):"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",min:"0",max:"100000",value:l,onChange:t=>o(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-base text-white focus:outline-none focus:border-sky-500 font-mono font-bold",placeholder:"e.g. 156"}),e.jsxs("button",{onClick:()=>o(Math.floor(Math.random()*500)+1),className:"px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 shrink-0 cursor-pointer",children:[e.jsx(A,{size:14})," Random"]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsxs("span",{className:"text-[11px] font-bold text-sky-400 uppercase tracking-wider block",children:["Resulting ",f," Value:"]}),e.jsxs("p",{className:"text-xl font-mono font-extrabold text-white tracking-wider",children:["(",c,")",e.jsx("sub",{className:"text-sky-400 text-xs font-sans",children:r})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800",children:["(",d,")₁₀ = (",c,")₍",r,"₎"]})]}),e.jsxs("div",{className:"bg-amber-950/20 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2",children:[e.jsx(b,{size:16,className:"shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Golden Rule:"})," Always read the remainders starting from the bottom (MSB) up to the top (LSB)."]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono",children:"Division Ladder"}),e.jsx("span",{className:"text-[10px] text-emerald-400 font-bold",children:"Bottom → Top (MSB → LSB)"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left font-mono text-xs text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Divisor"}),e.jsx("th",{className:"p-2",children:"Dividend"}),e.jsx("th",{className:"p-2",children:"Quotient"}),e.jsx("th",{className:"p-2 text-sky-400",children:"Remainder"}),e.jsx("th",{className:"p-2 text-emerald-400",children:"Digit"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:i.map((t,a)=>{const n=a===i.length-1,s=a===0;return e.jsxs("tr",{className:n?"bg-emerald-950/30 font-bold":s?"bg-sky-950/20":"",children:[e.jsx("td",{className:"p-2 text-amber-400",children:r}),e.jsx("td",{className:"p-2",children:t.dividend}),e.jsx("td",{className:"p-2",children:t.quotient}),e.jsx("td",{className:"p-2 text-sky-300",children:t.rem}),e.jsxs("td",{className:"p-2 text-emerald-300 font-bold",children:[t.symbol," ",n?"(MSB)":s?"(LSB)":""]})]},a)})})]})})]})]})]})};function V(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Decimal to Binary, Octal, and Hexadecimal Conversion (Successive Division Method)"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Master the standard successive integer division algorithm used to convert decimal base-10 numbers into binary (base 2), octal (base 8), and hexadecimal (base 16) formats."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(b,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Currency Denomination Bundling"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Imagine you have 156 currency coins and you want to pack them into standard boxes holding 2, 8, or 16 items each. At each division step, the remaining loose coins that don't make a complete box become the remainder digit, while the complete boxes are passed to the next higher packaging tier."})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(B,{className:"text-sky-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"The Successive Division Algorithm"})]}),e.jsx("div",{className:"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed",children:e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-sky-300",children:"Algorithm Steps:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1.5 text-xs text-slate-300",children:[e.jsx("li",{children:"Divide the decimal integer by the target base R (2 for Binary, 8 for Octal, 16 for Hex)."}),e.jsx("li",{children:"Record the quotient and remainder. For Hexadecimal, map remainders 10 through 15 to letters A through F."}),e.jsx("li",{children:"Set the decimal value to the quotient obtained and repeat the division until the quotient reaches 0."}),e.jsx("li",{children:"Write the sequence of remainders in reverse order (bottom to top), where the bottom-most remainder is the MSB (Most Significant Bit) and the top-most is the LSB (Least Significant Bit)."})]})]})})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(D,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(C,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Successive Division Implementation"})]}),e.jsx(S,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic1_files/decimal_to_all_bases.py",fileContent:T})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(p,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(p,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Writing remainders top to bottom:"})," This completely reverses the binary/octal value and results in 0 marks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Writing 12 instead of 'C' in Hexadecimal:"})," (12)₁₀ is represented by single hex symbol 'C'."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(R,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always draw the L-division ladder clearly:"})," Show every division step with divisor, quotient, and remainder columns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Include base subscripts:"})," Clearly write (156)₁₀ = (10011100)₂."]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(y,{questions:E})}),e.jsx("div",{className:"space-y-4",children:e.jsx(N,{fileName:"CBSE_Class11_CS_Topic1_Decimal_To_Bases_Notes.txt",content:_})}),e.jsx("div",{className:"space-y-4",children:e.jsx(j,{topicName:"Decimal to Binary, Octal & Hexadecimal Conversion",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{V as default};

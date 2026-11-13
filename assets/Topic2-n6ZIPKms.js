import{j as e,b}from"./vendor-react-core-B-R9HE-Z.js";import{T as j}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as N}from"./FAQTemplate-16IfroqC.js";import{P as y}from"./PlainTextPrint-C6NaUtnE.js";import{P as v}from"./PythonFileLoader-DZ61U3Y_.js";import{c as _,d as w,$ as A,az as u,t as C,y as S}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const E=[{question:"What is the decimal equivalent of binary number (110110)₂?",options:["(54)₁₀","(52)₁₀","(48)₁₀","(56)₁₀"],correctAnswer:0,explanation:"1×32 + 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 32 + 16 + 4 + 2 = 54."},{question:"What is the decimal equivalent of octal number (345)₈?",options:["(229)₁₀","(235)₁₀","(220)₁₀","(245)₁₀"],correctAnswer:0,explanation:"(3 × 8²) + (4 × 8¹) + (5 × 8⁰) = (3 × 64) + (4 × 8) + (5 × 1) = 192 + 32 + 5 = 229."},{question:"What is the decimal equivalent of hexadecimal number (1B4)₁₆?",options:["(436)₁₀","(420)₁₀","(450)₁₀","(412)₁₀"],correctAnswer:0,explanation:"(1 × 16²) + (B × 16¹) + (4 × 16⁰) = (1 × 256) + (11 × 16) + (4 × 1) = 256 + 176 + 4 = 436."},{question:`Assertion (A): In any number system with base R, the rightmost integer digit is always multiplied by R⁰.
Reason (R): In positional notation, powers of the base start at 0 at the units position and increase by 1 for each step to the left.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"The positional weight of the units column is always Base⁰ = 1, followed by Base¹, Base², etc."},{question:"What is the value of hexadecimal (FF)₁₆ in the decimal system?",options:["(255)₁₀","(256)₁₀","(254)₁₀","(1515)₁₀"],correctAnswer:0,explanation:"(15 × 16¹) + (15 × 16⁰) = 240 + 15 = 255."}],B=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 2: BINARY, OCTAL, AND HEXADECIMAL TO DECIMAL CONVERSION\r
================================================================================\r
\r
1. THE POSITIONAL WEIGHT EXPANSION METHOD:\r
In any positional number system with base 'R', the decimal value of an n-digit integer (d_{n-1} d_{n-2} ... d_1 d_0)_R is calculated by multiplying each digit by its positional power of the base (R^i) and summing all terms:\r
\r
Decimal Value = (d_{n-1} × R^{n-1}) + (d_{n-2} × R^{n-2}) + ... + (d_1 × R¹) + (d_0 × R⁰)\r
\r
2. WORKED EXAMPLES:\r
\r
A. BINARY TO DECIMAL:\r
Convert (101101)₂ to Decimal:\r
= (1 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰)\r
= (1 × 32) + (0 × 16) + (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1)\r
= 32 + 0 + 8 + 4 + 0 + 1\r
= (45)₁₀\r
\r
B. OCTAL TO DECIMAL:\r
Convert (572)₈ to Decimal:\r
= (5 × 8²) + (7 × 8¹) + (2 × 8⁰)\r
= (5 × 64) + (7 × 8) + (2 × 1)\r
= 320 + 56 + 2\r
= (378)₁₀\r
\r
C. HEXADECIMAL TO DECIMAL:\r
Convert (2AF)₁₆ to Decimal:\r
(Remember: A = 10, F = 15)\r
= (2 × 16²) + (A × 16¹) + (F × 16⁰)\r
= (2 × 256) + (10 × 16) + (15 × 1)\r
= 512 + 160 + 15\r
= (687)₁₀\r
\r
3. POWERS OF BASES FOR RAPID CALCULATION:\r
- Base 2 Powers:  2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256\r
- Base 8 Powers:  8⁰=1, 8¹=8, 8²=64, 8³=512, 8⁴=4096\r
- Base 16 Powers: 16⁰=1, 16¹=16, 16²=256, 16³=4096, 16⁴=65536\r
\r
4. CBSE EXAMINATION PITFALLS & TIPS:\r
- Common Mistake: Writing that any number raised to the power 0 equals 0 (e.g. 16⁰ = 0).\r
  Correct: Any non-zero base raised to power 0 is ALWAYS equal to 1 (R⁰ = 1).\r
- For Hexadecimal, always substitute the numeric values for letters (A=10, B=11, C=12, D=13, E=14, F=15) before multiplying.\r
`,R=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: base_to_decimal_expander.py\r
Topic 2: Binary, Octal, and Hexadecimal to Decimal Conversion (Positional Weight Expansion Method)\r
\r
Demonstrates:\r
1. Positional Weight Formula: Sum(Digit_i * Base^i)\r
2. Evaluation of Binary, Octal, and Hexadecimal to Decimal\r
3. Step-by-step intermediate calculation logs suitable for exam scripts\r
"""\r
\r
def base_to_decimal_with_expansion(num_str: str, base: int) -> tuple:\r
    """\r
    Converts a number string in base 2, 8, or 16 into Decimal (Base 10)\r
    using the positional weight expansion method.\r
    """\r
    hex_map = {\r
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,\r
        '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15\r
    }\r
    \r
    clean_str = num_str.upper().strip()\r
    length = len(clean_str)\r
    total_decimal = 0\r
    expansion_terms = []\r
    \r
    print(f"\\n--- [BASE-{base} TO DECIMAL (POSITIONAL WEIGHT EXPANSION)] ---")\r
    print(f"Converting ({clean_str})₍{base}₎ to Decimal:\\n")\r
    \r
    for i, char in enumerate(clean_str):\r
        power = length - 1 - i\r
        digit_value = hex_map.get(char, 0)\r
        weight = base ** power\r
        subtotal = digit_value * weight\r
        total_decimal += subtotal\r
        \r
        term_str = f"({digit_value} × {base}^{power})"\r
        expansion_terms.append((term_str, subtotal, char, power, digit_value, weight))\r
        print(f"Position {power}: Digit '{char}' (Value: {digit_value}) × {base}^{power} ({weight}) = {subtotal}")\r
    \r
    formula_line = " + ".join([t[0] for t in expansion_terms])\r
    sum_line = " + ".join([str(t[1]) for t in expansion_terms])\r
    \r
    print("-" * 60)\r
    print(f"Formula Expansion: {formula_line}")\r
    print(f"Subtotals Sum:     {sum_line}")\r
    print(f"[+] Result: ({clean_str})₍{base}₎ = ({total_decimal})₁₀\\n")\r
    return total_decimal, expansion_terms\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - POSITIONAL WEIGHT EXPANSION SUITE     ")\r
    print("=================================================================\\n")\r
\r
    # 1. Binary to Decimal\r
    base_to_decimal_with_expansion("10011100", 2)\r
\r
    # 2. Octal to Decimal\r
    base_to_decimal_with_expansion("234", 8)\r
\r
    # 3. Hexadecimal to Decimal\r
    base_to_decimal_with_expansion("9C", 16)\r
\r
if __name__ == "__main__":\r
    main()\r
`,O=()=>{const[t,g]=b.useState(2),[o,r]=b.useState("101101"),d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15},l=o.toUpperCase().trim()||"0",c=l.length;let n=0;const i=[];for(let s=0;s<c;s++){const a=l[s],x=c-1-s,m=d[a]!==void 0?d[a]:0,p=Math.pow(t,x),h=m*p;n+=h,i.push({char:a,power:x,digitVal:m,weight:p,subtotal:h})}const f=s=>{g(s),s===2?r("101101"):s===8?r("572"):s===16&&r("2AF")};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold",children:e.jsx(S,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Positional Weight Expansion Calculator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Break down any binary, octal, or hexadecimal value into individual positional power terms and sum to decimal."})]})]}),e.jsx("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[{base:2,label:"Binary (Base 2)"},{base:8,label:"Octal (Base 8)"},{base:16,label:"Hex (Base 16)"}].map(s=>e.jsx("button",{onClick:()=>f(s.base),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${t===s.base?"bg-purple-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:s.label},s.base))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-start",children:[e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:["Enter ",t===2?"Binary (0,1)":t===8?"Octal (0-7)":"Hexadecimal (0-9, A-F)"," Value:"]}),e.jsx("input",{type:"text",value:o,onChange:s=>r(s.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-base text-white focus:outline-none focus:border-purple-500 font-mono font-bold uppercase tracking-wider",placeholder:"e.g. 101101"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-purple-500/30 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Calculated Decimal (Base 10) Equivalent:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",n,")",e.jsx("sub",{className:"text-purple-400 text-xs font-sans",children:"10"})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800",children:["(",l,")₍",t,"₎ = (",n,")₁₀"]})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold block",children:"Summary Expansion:"}),e.jsxs("p",{className:"text-purple-300 leading-relaxed",children:["= ",i.map(s=>`${s.subtotal}`).join(" + ")]}),e.jsxs("p",{className:"text-emerald-400 font-bold",children:["= ",n]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Positional Weights & Subtotals"}),e.jsx("div",{className:"space-y-2 font-mono text-xs",children:i.map((s,a)=>e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded bg-purple-500/20 text-purple-300 text-center font-bold text-[11px] leading-5",children:s.char}),e.jsxs("span",{children:["(",s.digitVal," × ",t,e.jsx("sup",{children:s.power}),")"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-slate-500 text-[10px] block",children:[s.digitVal," × ",s.weight]}),e.jsxs("span",{className:"font-bold text-emerald-400",children:["= ",s.subtotal]})]})]},a))})]})]})]})};function W(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Binary, Octal, and Hexadecimal to Decimal Conversion (Positional Weight Method)"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Convert any positional base string into decimal by evaluating individual digit products with ascending powers of the base."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(_,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Odometer Place Values"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Just like the decimal number 342 means (3 × 10²) + (4 × 10¹) + (2 × 10⁰) = 300 + 40 + 2, every number in base R works identically: each digit's contribution is its face value multiplied by the base raised to its column position index."})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(w,{className:"text-purple-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Positional Weight Expansion Formula"})]}),e.jsx("div",{className:"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed",children:e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-purple-300",children:"General Radix Expansion:"}),e.jsx("p",{className:"font-mono text-slate-200",children:"Decimal Value = (dₙ₋₁ × Rⁿ⁻¹) + (dₙ₋₂ × Rⁿ⁻²) + ... + (d₁ × R¹) + (d₀ × R⁰)"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-xs text-slate-400 pt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"For Binary (R = 2):"})," Powers are ..., 64, 32, 16, 8, 4, 2, 1"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For Octal (R = 8):"})," Powers are ..., 512, 64, 8, 1"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For Hexadecimal (R = 16):"})," Powers are ..., 4096, 256, 16, 1"]})]})]})})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(O,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(A,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Positional Weight Expansion Script"})]}),e.jsx(v,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic2_files/base_to_decimal_expander.py",fileContent:R})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(u,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(u,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Treating Base⁰ as 0:"})," Remember that 2⁰ = 1, 8⁰ = 1, 16⁰ = 1. Never multiply the units digit by 0!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting Hexadecimal Letter Values:"})," Remember: A=10, B=11, C=12, D=13, E=14, F=15."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(C,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Show Full Expansion Steps:"})," Write (d × Baseᵖᵒʷᵉʳ) explicitly before summing the terms."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(N,{questions:E})}),e.jsx("div",{className:"space-y-4",children:e.jsx(y,{fileName:"CBSE_Class11_CS_Topic2_Base_To_Decimal_Notes.txt",content:B})}),e.jsx("div",{className:"space-y-4",children:e.jsx(j,{topicName:"Binary, Octal & Hexadecimal to Decimal Conversion",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{W as default};

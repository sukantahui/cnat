import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as j}from"./TeacherSukantaHui-1kTygSSH.js";import{F as v}from"./FAQTemplate-16IfroqC.js";import{P as O}from"./PlainTextPrint-C6NaUtnE.js";import{P as _}from"./PythonFileLoader-DZ61U3Y_.js";import{c as B,d as T,$ as C,az as g,t as w,b9 as S}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const A=[{question:"Why can binary numbers be directly converted to octal using 3-bit grouping?",options:["Because 8 is divisible by 3","Because 8 = 2³, meaning exactly 3 binary bits represent each octal digit (0-7)","Because octal systems only support 3-digit numbers","Because 8 bits equal 1 byte"],correctAnswer:1,explanation:"Since 8 is 2³, each 3-bit binary combination (from 000 to 111) maps uniquely to one octal digit (0 to 7)."},{question:"Convert binary number (1011101)₂ into Octal using 3-bit grouping:",options:["(135)₈","(125)₈","(145)₈","(137)₈"],correctAnswer:0,explanation:"Group from right: (001) (011) (101) -> 1, 3, 5 -> (135)₈."},{question:"Convert octal number (623)₈ into its binary equivalent:",options:["(110010011)₂","(110100011)₂","(110010110)₂","(101010011)₂"],correctAnswer:0,explanation:"6 -> 110, 2 -> 010, 3 -> 011. Concatenating gives (110010011)₂."},{question:`Assertion (A): When grouping binary integer bits into triplets, grouping must start from the rightmost bit (LSB).
Reason (R): Starting from the right ensures that any required padding with zero bits affects only the most significant (leftmost) place value without altering the numeric magnitude.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Padding zeros on the far left (MSB) preserves the integer value, whereas grouping from the left would shift positional place values."},{question:"What is the common student mistake when converting octal digit 2 into binary in the middle of a number like (527)₈?",options:["Writing '10' instead of the full 3-bit triplet '010'","Writing '000' instead of '010'","Multiplying 2 by 8","Subtracting 1 from 2"],correctAnswer:0,explanation:"Omitting the leading 0 in the 3-bit representation (writing 10 instead of 010) corrupts the positional bit alignment."}],k=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 3: BINARY TO OCTAL AND OCTAL TO BINARY CONVERSION (3-BIT SHORTCUT)\r
================================================================================\r
\r
1. THE MATHEMATICAL RELATIONSHIP:\r
Because 8 = 2³, exactly THREE binary bits correspond to ONE octal digit (0 to 7).\r
This eliminates the need to convert through decimal as an intermediary.\r
\r
2. OCTAL TO 3-BIT BINARY CONVERSION TABLE:\r
| Octal Digit | 3-Bit Binary |\r
| :---: | :---: |\r
| 0 | 000 |\r
| 1 | 001 |\r
| 2 | 010 |\r
| 3 | 011 |\r
| 4 | 100 |\r
| 5 | 101 |\r
| 6 | 110 |\r
| 7 | 111 |\r
\r
3. BINARY TO OCTAL CONVERSION PROCEDURE:\r
- Step 1: Divide the binary integer into groups of 3 bits, starting from the RIGHT (Least Significant Bit - LSB) moving towards the LEFT.\r
- Step 2: If the leftmost group has fewer than 3 bits, pad with leading zeros on the left.\r
- Step 3: Replace each 3-bit group with its corresponding octal digit (0-7).\r
\r
Example 1: Convert (11010110)₂ to Octal\r
Group from right: (11) (010) (110)\r
Pad left group:   (011) (010) (110)\r
Convert triplets:   3     2     6\r
Result: (11010110)₂ = (326)₈\r
\r
4. OCTAL TO BINARY CONVERSION PROCEDURE:\r
- Step 1: Take each octal digit individually.\r
- Step 2: Write its exact 3-bit binary representation (e.g., 5 -> 101, 2 -> 010, 1 -> 001).\r
- Step 3: Concatenate all 3-bit blocks together.\r
\r
Example 2: Convert (742)₈ to Binary\r
7 -> 111\r
4 -> 100\r
2 -> 010\r
Result: (742)₈ = (111100010)₂\r
\r
5. CBSE EXAMINATION PITFALLS & TIPS:\r
- Common Mistake: Writing 2 as "10" instead of the full 3-bit triplet "010" in the middle of a number (e.g., (52)₈ -> 10110 instead of 101010). Every octal digit must expand to EXACTLY 3 bits!\r
- Grouping must ALWAYS start from the right (LSB) for the integer part.\r
`,E=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: binary_octal_grouper.py\r
Topic 3: Binary to Octal (3-Bit Grouping) and Octal to Binary Conversion\r
\r
Demonstrates:\r
1. Binary to Octal: Grouping bits into triplets (3-bit chunks) from right to left (padding with leading zeros if needed)\r
2. Octal to Binary: Expanding each octal digit (0-7) into its exact 3-bit binary equivalent\r
3. 2^3 = 8 bit-equivalence relationship\r
"""\r
\r
OCTAL_TO_BIN_MAP = {\r
    '0': '000', '1': '001', '2': '010', '3': '011',\r
    '4': '100', '5': '101', '6': '110', '7': '111'\r
}\r
\r
BIN_TO_OCTAL_MAP = {v: k for k, v in OCTAL_TO_BIN_MAP.items()}\r
\r
def binary_to_octal_grouping(bin_str: str) -> tuple:\r
    """Converts a binary integer string to octal using 3-bit grouping."""\r
    clean_bin = bin_str.replace(" ", "").strip()\r
    \r
    # Pad with leading zeros so length is a multiple of 3\r
    remainder = len(clean_bin) % 3\r
    padded_bin = ("0" * (3 - remainder) + clean_bin) if remainder != 0 else clean_bin\r
    \r
    # Split into 3-bit chunks\r
    chunks = [padded_bin[i:i+3] for i in range(0, len(padded_bin), 3)]\r
    octal_digits = [BIN_TO_OCTAL_MAP[c] for c in chunks]\r
    octal_result = "".join(octal_digits)\r
    \r
    print(f"\\n--- [BINARY TO OCTAL (3-BIT GROUPING)] ---")\r
    print(f"Original Binary: {clean_bin}")\r
    print(f"Padded (x3):     {padded_bin}")\r
    print(f"Triplets:        {' | '.join(chunks)}")\r
    print(f"Octal Digits:    {' | '.join(octal_digits)}")\r
    print(f"[+] ({clean_bin})₂ = ({octal_result})₈\\n")\r
    return octal_result, chunks, octal_digits\r
\r
\r
def octal_to_binary_expansion(oct_str: str) -> tuple:\r
    """Converts an octal string to binary by expanding each digit into 3 bits."""\r
    clean_oct = oct_str.strip()\r
    triplets = []\r
    \r
    for digit in clean_oct:\r
        if digit not in OCTAL_TO_BIN_MAP:\r
            raise ValueError(f"Invalid octal digit: {digit}")\r
        triplets.append(OCTAL_TO_BIN_MAP[digit])\r
    \r
    full_binary = "".join(triplets).lstrip("0") or "0"\r
    print(f"\\n--- [OCTAL TO BINARY (3-BIT EXPANSION)] ---")\r
    print(f"Octal Input:     {' | '.join(list(clean_oct))}")\r
    print(f"3-Bit Expansions:{' | '.join(triplets)}")\r
    print(f"[+] ({clean_oct})₈ = ({full_binary})₂\\n")\r
    return full_binary, triplets\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - BINARY <-> OCTAL CONVERSION SUITE     ")\r
    print("=================================================================\\n")\r
\r
    # 1. Binary to Octal\r
    binary_to_octal_grouping("101110010")\r
    binary_to_octal_grouping("1101011")  # Needs padding\r
\r
    # 2. Octal to Binary\r
    octal_to_binary_expansion("562")\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=()=>{const[n,o]=l.useState("binToOct"),[c,h]=l.useState("11010110"),[d,u]=l.useState("326"),f={0:"000",1:"001",2:"010",3:"011",4:"100",5:"101",6:"110",7:"111"},p={"000":"0","001":"1","010":"2","011":"3",100:"4",101:"5",110:"6",111:"7"},x=c.replace(/[^01]/g,"")||"0",b=x.length%3,s=b===0?0:3-b,i="0".repeat(s)+x,a=[];for(let t=0;t<i.length;t+=3)a.push(i.substring(t,t+3));const y=a.map(t=>p[t]||"?").join(""),m=(d.replace(/[^0-7]/g,"")||"0").split("").map(t=>({digit:t,bin:f[t]||"000"})),N=m.map(t=>t.bin).join("");return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(S,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive 3-Bit Grouping & Expansion Visualizer (Binary ↔ Octal)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Leverage 2³ = 8 to convert directly between Binary triplets and Octal digits with zero decimal arithmetic."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>o("binToOct"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${n==="binToOct"?"bg-emerald-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Binary → Octal (Grouping)"}),e.jsx("button",{onClick:()=>o("octToBin"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${n==="octToBin"?"bg-emerald-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Octal → Binary (Expansion)"})]})]}),n==="binToOct"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Binary Number (0s and 1s):"}),e.jsx("input",{type:"text",value:c,onChange:t=>h(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono font-bold tracking-wider",placeholder:"e.g. 11010110"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-emerald-400 uppercase tracking-wider block",children:"Octal Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",y,")",e.jsx("sub",{className:"text-emerald-400 text-xs font-sans",children:"8"})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Step-by-Step 3-Bit Grouping (Right to Left):"}),s>0&&e.jsxs("p",{className:"text-xs text-amber-300 font-mono",children:["[!] Added ",s," leading zero(s) on the left to form full 3-bit triplets: ",e.jsx("span",{className:"text-white font-bold",children:i})]}),e.jsx("div",{className:"flex flex-wrap gap-3 pt-2",children:a.map((t,r)=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-1 min-w-[75px]",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 uppercase block font-mono",children:["Triplet #",r+1]}),e.jsx("span",{className:"text-base font-mono font-bold text-sky-300 block",children:t}),e.jsx("span",{className:"text-xs text-slate-500 block",children:"↓"}),e.jsx("span",{className:"text-base font-mono font-extrabold text-emerald-400 block",children:p[t]})]},r))})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Octal Number (Digits 0-7):"}),e.jsx("input",{type:"text",value:d,onChange:t=>u(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono font-bold tracking-wider",placeholder:"e.g. 326"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-emerald-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-emerald-400 uppercase tracking-wider block",children:"Binary Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider break-all",children:["(",N,")",e.jsx("sub",{className:"text-emerald-400 text-xs font-sans",children:"2"})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Individual 3-Bit Expansion Steps:"}),e.jsx("div",{className:"flex flex-wrap gap-3 pt-2",children:m.map((t,r)=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-1 min-w-[75px]",children:[e.jsxs("span",{className:"text-xs font-mono font-extrabold text-emerald-400 block",children:["Digit: ",t.digit]}),e.jsx("span",{className:"text-xs text-slate-500 block",children:"↓"}),e.jsx("span",{className:"text-base font-mono font-bold text-sky-300 block",children:t.bin})]},r))})]})]})]})};function D(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full",children:"Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Binary to Octal (3-Bit Grouping) and Octal to Binary Conversion"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Learn the 3-bit grouping shortcut based on 2³ = 8 to rapidly convert between Binary and Octal representations without intermediary base conversions."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(B,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: 3-Egg Egg Carton Packaging"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Since 8 is 2³, each octal digit is like a pre-packaged box holding exactly 3 binary bits. Converting between binary and octal is simply grouping loose individual bits into 3-bit cartons or unpacking 3-bit cartons into raw binary digits."})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(T,{className:"text-emerald-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"3-Bit Binary to Octal Conversion Table"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs",children:[{oct:"0",bin:"000"},{oct:"1",bin:"001"},{oct:"2",bin:"010"},{oct:"3",bin:"011"},{oct:"4",bin:"100"},{oct:"5",bin:"101"},{oct:"6",bin:"110"},{oct:"7",bin:"111"}].map(n=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between",children:[e.jsxs("span",{className:"font-bold text-emerald-400 text-sm",children:["Octal ",n.oct]}),e.jsx("span",{className:"text-sky-300 font-bold tracking-wider",children:n.bin})]},n.oct))})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(I,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(C,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python 3-Bit Grouping & Expansion Script"})]}),e.jsx(_,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic3_files/binary_octal_grouper.py",fileContent:E})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(g,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(g,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Grouping from left to right for integers:"})," Grouping must ALWAYS start from the right (LSB). Grouping from left shifts the bits and gives the wrong answer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'Writing 2 as "10" instead of "010":'})," In octal to binary conversion, every octal digit must produce exactly 3 bits."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Show the 3-bit bracket groups:"})," Write (011) (010) (110) clearly before writing the final octal answer."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(v,{questions:A})}),e.jsx("div",{className:"space-y-4",children:e.jsx(O,{fileName:"CBSE_Class11_CS_Topic3_Binary_Octal_Notes.txt",content:k})}),e.jsx("div",{className:"space-y-4",children:e.jsx(j,{topicName:"Binary to Octal & Octal to Binary Conversion",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{D as default};

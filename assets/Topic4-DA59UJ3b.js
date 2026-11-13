import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as j}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as v}from"./FAQTemplate-16IfroqC.js";import{P as B}from"./PlainTextPrint-C6NaUtnE.js";import{P as A}from"./PythonFileLoader-DZ61U3Y_.js";import{c as E,d as _,$ as C,az as u,t as w,aa as T}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const I=[{question:"Why does 4-bit binary grouping work directly for converting to Hexadecimal?",options:["Because 16 is divisible by 4","Because 16 = 2⁴, which means exactly 4 binary bits (one nibble) map uniquely to each hexadecimal digit (0 to F)","Because hexadecimal was invented 4 centuries ago","Because CPUs only support 4-bit memory addresses"],correctAnswer:1,explanation:"Since 16 = 2⁴, any 4-bit binary combination from 0000 to 1111 corresponds to a unique hex digit from 0 to F."},{question:"Convert binary number (10111100)₂ into Hexadecimal using 4-bit grouping:",options:["(BC)₁₆","(CB)₁₆","(AB)₁₆","(BD)₁₆"],correctAnswer:0,explanation:"(1011) -> B (11), (1100) -> C (12). Concatenating gives (BC)₁₆."},{question:"Convert hexadecimal number (4D8)₁₆ into its binary equivalent:",options:["(010011011000)₂","(010011101000)₂","(010011001000)₂","(011011011000)₂"],correctAnswer:0,explanation:"4 -> 0100, D -> 1101 (13), 8 -> 1000. Concatenating gives (010011011000)₂."},{question:`Assertion (A): When converting (7B)₁₆ to binary, digit 7 must be expanded to '0111' and B to '1011'.
Reason (R): Every single hexadecimal digit must always be represented by an exact 4-bit binary nibble to maintain positional integrity.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Writing incomplete bit lengths like '111' for 7 instead of '0111' causes positional bit corruption in multi-digit numbers."},{question:"What is the 4-bit binary equivalent of hexadecimal digit 'F'?",options:["1111","1110","1001","0111"],correctAnswer:0,explanation:"'F' equals decimal 15, which in 4-bit binary is 1111 (8 + 4 + 2 + 1)."}],S=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 4: BINARY TO HEXADECIMAL AND HEXADECIMAL TO BINARY (4-BIT SHORTCUT)\r
================================================================================\r
\r
1. THE MATHEMATICAL RELATIONSHIP:\r
Because 16 = 2⁴, exactly FOUR binary bits (one Nibble) correspond to ONE hexadecimal digit (0 to 9, A to F).\r
\r
2. HEXADECIMAL TO 4-BIT BINARY CONVERSION TABLE:\r
| Hex Digit | Decimal Value | 4-Bit Binary (Nibble) |\r
| :---: | :---: | :---: |\r
| 0 | 0 | 0000 |\r
| 1 | 1 | 0001 |\r
| 2 | 2 | 0010 |\r
| 3 | 3 | 0011 |\r
| 4 | 4 | 0100 |\r
| 5 | 5 | 0101 |\r
| 6 | 6 | 0110 |\r
| 7 | 7 | 0111 |\r
| 8 | 8 | 1000 |\r
| 9 | 9 | 1001 |\r
| A | 10 | 1010 |\r
| B | 11 | 1011 |\r
| C | 12 | 1100 |\r
| D | 13 | 1101 |\r
| E | 14 | 1110 |\r
| F | 15 | 1111 |\r
\r
3. BINARY TO HEXADECIMAL CONVERSION PROCEDURE:\r
- Step 1: Divide the binary integer into groups of 4 bits (nibbles), starting from the RIGHT (LSB) moving towards the LEFT.\r
- Step 2: If the leftmost group has fewer than 4 bits, pad with leading zeros on the left.\r
- Step 3: Replace each 4-bit nibble with its corresponding hex character (0-9, A-F).\r
\r
Example 1: Convert (1101111101)₂ to Hexadecimal\r
Group from right: (11) (0111) (1101)\r
Pad left group:   (0011) (0111) (1101)\r
Convert nibbles:    3       7       D\r
Result: (1101111101)₂ = (37D)₁₆\r
\r
4. HEXADECIMAL TO BINARY CONVERSION PROCEDURE:\r
- Step 1: Take each hexadecimal digit individually.\r
- Step 2: Write its exact 4-bit binary representation (e.g., A -> 1010, 3 -> 0011).\r
- Step 3: Concatenate all 4-bit nibbles together.\r
\r
Example 2: Convert (9E5)₁₆ to Binary\r
9 -> 1001\r
E -> 1110 (14)\r
5 -> 0101\r
Result: (9E5)₁₆ = (100111100101)₂\r
\r
5. CBSE EXAMINATION PITFALLS & TIPS:\r
- Common Mistake: Writing 3 as "11" instead of the full 4-bit nibble "0011". Every single hex digit MUST expand to exactly 4 binary bits!\r
- Hexadecimal characters A-F must be written in uppercase in board exam answers.\r
`,H=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: binary_hex_grouper.py\r
Topic 4: Binary to Hexadecimal (4-Bit Grouping) and Hexadecimal to Binary Conversion\r
\r
Demonstrates:\r
1. Binary to Hexadecimal: Grouping bits into nibbles (4-bit chunks) from right to left (padding with leading zeros if needed)\r
2. Hexadecimal to Binary: Expanding each hex character (0-9, A-F) into its exact 4-bit binary equivalent\r
3. 2^4 = 16 bit-equivalence relationship\r
"""\r
\r
HEX_TO_BIN_MAP = {\r
    '0': '0000', '1': '0001', '2': '0010', '3': '0011',\r
    '4': '0100', '5': '0101', '6': '0110', '7': '0111',\r
    '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',\r
    'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'\r
}\r
\r
BIN_TO_HEX_MAP = {v: k for k, v in HEX_TO_BIN_MAP.items()}\r
\r
def binary_to_hex_grouping(bin_str: str) -> tuple:\r
    """Converts a binary integer string to hexadecimal using 4-bit nibble grouping."""\r
    clean_bin = bin_str.replace(" ", "").strip()\r
    \r
    # Pad with leading zeros so length is a multiple of 4\r
    remainder = len(clean_bin) % 4\r
    padded_bin = ("0" * (4 - remainder) + clean_bin) if remainder != 0 else clean_bin\r
    \r
    # Split into 4-bit chunks (nibbles)\r
    nibbles = [padded_bin[i:i+4] for i in range(0, len(padded_bin), 4)]\r
    hex_digits = [BIN_TO_HEX_MAP[n] for n in nibbles]\r
    hex_result = "".join(hex_digits)\r
    \r
    print(f"\\n--- [BINARY TO HEXADECIMAL (4-BIT NIBBLE GROUPING)] ---")\r
    print(f"Original Binary: {clean_bin}")\r
    print(f"Padded (x4):     {padded_bin}")\r
    print(f"Nibbles:         {' | '.join(nibbles)}")\r
    print(f"Hex Digits:      {' | '.join(hex_digits)}")\r
    print(f"[+] ({clean_bin})₂ = ({hex_result})₁₆\\n")\r
    return hex_result, nibbles, hex_digits\r
\r
\r
def hex_to_binary_expansion(hex_str: str) -> tuple:\r
    """Converts a hexadecimal string to binary by expanding each character into 4 bits."""\r
    clean_hex = hex_str.upper().strip()\r
    nibbles = []\r
    \r
    for digit in clean_hex:\r
        if digit not in HEX_TO_BIN_MAP:\r
            raise ValueError(f"Invalid hexadecimal digit: {digit}")\r
        nibbles.append(HEX_TO_BIN_MAP[digit])\r
    \r
    full_binary = "".join(nibbles).lstrip("0") or "0"\r
    print(f"\\n--- [HEXADECIMAL TO BINARY (4-BIT EXPANSION)] ---")\r
    print(f"Hex Input:       {' | '.join(list(clean_hex))}")\r
    print(f"4-Bit Expansions:{' | '.join(nibbles)}")\r
    print(f"[+] ({clean_hex})₁₆ = ({full_binary})₂\\n")\r
    return full_binary, nibbles\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - BINARY <-> HEXADECIMAL CONVERTER      ")\r
    print("=================================================================\\n")\r
\r
    # 1. Binary to Hexadecimal\r
    binary_to_hex_grouping("10011100")\r
    binary_to_hex_grouping("1101111101")  # Needs padding\r
\r
    # 2. Hexadecimal to Binary\r
    hex_to_binary_expansion("2AF")\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=()=>{const[t,o]=l.useState("binToHex"),[d,g]=l.useState("10011100"),[c,f]=l.useState("9C"),x={0:"0000",1:"0001",2:"0010",3:"0011",4:"0100",5:"0101",6:"0110",7:"0111",8:"1000",9:"1001",A:"1010",B:"1011",C:"1100",D:"1101",E:"1110",F:"1111"},b=Object.fromEntries(Object.entries(x).map(([n,s])=>[s,n])),p=d.replace(/[^01]/g,"")||"0",m=p.length%4,r=m===0?0:4-m,i="0".repeat(r)+p,a=[];for(let n=0;n<i.length;n+=4)a.push(i.substring(n,n+4));const N=a.map(n=>b[n]||"?").join(""),h=(c.toUpperCase().replace(/[^0-9A-F]/g,"")||"0").split("").map(n=>({digit:n,bin:x[n]||"0000"})),y=h.map(n=>n.bin).join("");return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold",children:e.jsx(T,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive 4-Bit Nibble Visualizer (Binary ↔ Hexadecimal)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Leverage 2⁴ = 16 to directly map between 4-bit binary nibbles and single hexadecimal characters (0-9, A-F)."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>o("binToHex"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${t==="binToHex"?"bg-purple-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Binary → Hex (4-Bit Grouping)"}),e.jsx("button",{onClick:()=>o("hexToBin"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${t==="hexToBin"?"bg-purple-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Hex → Binary (4-Bit Expansion)"})]})]}),t==="binToHex"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Binary Number (0s and 1s):"}),e.jsx("input",{type:"text",value:d,onChange:n=>g(n.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 font-mono font-bold tracking-wider",placeholder:"e.g. 10011100"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Hexadecimal Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",N,")",e.jsx("sub",{className:"text-purple-400 text-xs font-sans",children:"16"})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Step-by-Step 4-Bit Nibble Grouping (Right to Left):"}),r>0&&e.jsxs("p",{className:"text-xs text-amber-300 font-mono",children:["[!] Added ",r," leading zero(s) on the left to form full 4-bit nibbles: ",e.jsx("span",{className:"text-white font-bold",children:i})]}),e.jsx("div",{className:"flex flex-wrap gap-3 pt-2",children:a.map((n,s)=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-purple-500/40 text-center space-y-1 min-w-[85px]",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 uppercase block font-mono",children:["Nibble #",s+1]}),e.jsx("span",{className:"text-base font-mono font-bold text-sky-300 block",children:n}),e.jsx("span",{className:"text-xs text-slate-500 block",children:"↓"}),e.jsx("span",{className:"text-base font-mono font-extrabold text-purple-400 block",children:b[n]})]},s))})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Hexadecimal Value (0-9, A-F):"}),e.jsx("input",{type:"text",value:c,onChange:n=>f(n.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 font-mono font-bold tracking-wider uppercase",placeholder:"e.g. 9C"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Binary Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider break-all",children:["(",y,")",e.jsx("sub",{className:"text-purple-400 text-xs font-sans",children:"2"})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Individual 4-Bit Nibble Expansion Steps:"}),e.jsx("div",{className:"flex flex-wrap gap-3 pt-2",children:h.map((n,s)=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-purple-500/40 text-center space-y-1 min-w-[85px]",children:[e.jsxs("span",{className:"text-xs font-mono font-extrabold text-purple-400 block",children:["Hex: ",n.digit]}),e.jsx("span",{className:"text-xs text-slate-500 block",children:"↓"}),e.jsx("span",{className:"text-base font-mono font-bold text-sky-300 block",children:n.bin})]},s))})]})]})]})};function z(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Binary to Hexadecimal (4-Bit Grouping) and Hexadecimal to Binary Conversion"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Master 4-bit nibble grouping (2⁴ = 16) to translate between raw binary bitstreams and human-readable hexadecimal notation."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(E,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: 4-Wheel Axle Assembly"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"In modern automobile manufacturing, four individual tires are mounted together to form one complete wheelset axle. Hexadecimal characters act as compact 4-tire axles for binary bits, reducing long 16-bit binary strings (1111111111111111) into a clean 4-character hex label (FFFF)."})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(_,{className:"text-purple-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"4-Bit Binary (Nibble) to Hexadecimal Table"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs",children:[{hex:"0",val:0,bin:"0000"},{hex:"1",val:1,bin:"0001"},{hex:"2",val:2,bin:"0010"},{hex:"3",val:3,bin:"0011"},{hex:"4",val:4,bin:"0100"},{hex:"5",val:5,bin:"0101"},{hex:"6",val:6,bin:"0110"},{hex:"7",val:7,bin:"0111"},{hex:"8",val:8,bin:"1000"},{hex:"9",val:9,bin:"1001"},{hex:"A",val:10,bin:"1010"},{hex:"B",val:11,bin:"1011"},{hex:"C",val:12,bin:"1100"},{hex:"D",val:13,bin:"1101"},{hex:"E",val:14,bin:"1110"},{hex:"F",val:15,bin:"1111"}].map(t=>e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold text-purple-400 text-sm",children:["Hex ",t.hex]}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["(",t.val,")₁₀"]})]}),e.jsx("span",{className:"text-sky-300 font-bold tracking-wider",children:t.bin})]},t.hex))})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(k,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(C,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python 4-Bit Nibble Grouping & Expansion Script"})]}),e.jsx(A,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic4_files/binary_hex_grouper.py",fileContent:H})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(u,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(u,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Writing incomplete nibbles:"})," For example, writing hex '3' as '11' instead of '0011'. Every hex digit must expand to exactly 4 binary bits."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing Hex letters:"})," Remember: A=10, B=11, C=12, D=13, E=14, F=15."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Show 4-bit nibble groupings:"})," Write (0011) (0111) (1101) clearly before showing the final hex answer (37D)₁₆."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(v,{questions:I})}),e.jsx("div",{className:"space-y-4",children:e.jsx(B,{fileName:"CBSE_Class11_CS_Topic4_Binary_Hex_Notes.txt",content:S})}),e.jsx("div",{className:"space-y-4",children:e.jsx(j,{topicName:"Binary to Hexadecimal & Hexadecimal to Binary Conversion",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{z as default};

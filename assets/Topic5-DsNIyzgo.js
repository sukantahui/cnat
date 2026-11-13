import{j as e,b as c}from"./vendor-react-core-B-R9HE-Z.js";import{T as A}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as S}from"./FAQTemplate-16IfroqC.js";import{P as k}from"./PlainTextPrint-C6NaUtnE.js";import{P as T}from"./PythonFileLoader-DZ61U3Y_.js";import{c as H,d as I,$ as R,az as v,t as D,cU as M}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const L=[{question:"Why is Binary the optimal intermediary base when converting between Octal and Hexadecimal?",options:["Because Binary is the only base allowed in CBSE exams","Because 8 = 2³ and 16 = 2⁴, allowing bit grouping without decimal multiplication or division","Because decimal numbers do not exist inside computer memory","Because octal cannot be divided by 8"],correctAnswer:1,explanation:"Because 8 and 16 are direct powers of 2, expanding into 3-bit triplets and regrouping into 4-bit nibbles is mathematically direct and error-free."},{question:"Convert octal number (345)₈ to Hexadecimal via Binary intermediary:",options:["(E5)₁₆","(D5)₁₆","(F5)₁₆","(C5)₁₆"],correctAnswer:0,explanation:"(345)₈ -> (011)(100)(101)₂ -> (1110)(0101)₂ -> (E5)₁₆."},{question:"Convert hexadecimal number (2B)₁₆ to Octal via Binary intermediary:",options:["(53)₈","(63)₈","(43)₈","(73)₈"],correctAnswer:0,explanation:"(2B)₁₆ -> (0010)(1011)₂ -> (000)(101)(011)₂ -> (53)₈."},{question:`Assertion (A): Converting (777)₈ directly to Hexadecimal via Binary takes under 15 seconds.
Reason (R): 777 expands directly to 111111111₂, which regrouped into 4-bit nibbles (0001)(1111)(1111)₂ produces (1FF)₁₆ immediately.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"The binary bridge is extremely rapid because each step is simple table lookup and regrouping rather than long multiplication."},{question:"What is the binary representation obtained when (A5)₁₆ is expanded before regrouping into octal?",options:["10100101","10110101","10100001","11000101"],correctAnswer:0,explanation:"A = 1010, 5 = 0101. Combined: 10100101."}],P=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 5: OCTAL TO HEXADECIMAL AND HEXADECIMAL TO OCTAL (BINARY BRIDGE)\r
================================================================================\r
\r
1. WHY USE BINARY AS AN INTERMEDIARY?\r
Direct conversion between Octal (Base 8) and Hexadecimal (Base 16) is computationally heavy if performed through Decimal (requires long multi-step multiplication and division).\r
Since both 8 and 16 are direct powers of 2 (8 = 2³, 16 = 2⁴), Binary serves as a lightning-fast intermediary bridge:\r
\r
Octal (Base 8) <---> Binary (Base 2) <---> Hexadecimal (Base 16)\r
\r
2. OCTAL TO HEXADECIMAL CONVERSION ALGORITHM:\r
- Step 1 (Octal -> Binary): Expand each octal digit into its 3-bit binary equivalent.\r
- Step 2 (Binary -> Hexadecimal): Regroup the combined binary bitstream into 4-bit nibbles from right to left (pad leftmost with 0s if needed).\r
- Step 3: Replace each 4-bit nibble with the corresponding Hex character.\r
\r
Example 1: Convert (756)₈ to Hexadecimal\r
Step 1: Expand octal digits to 3-bit binary:\r
  7 -> 111\r
  5 -> 101\r
  6 -> 110\r
  Combined Binary: 111101110\r
\r
Step 2: Regroup into 4-bit nibbles from right:\r
  (1) (1110) (1110)\r
  Pad with 3 leading zeros: (0001) (1110) (1110)\r
\r
Step 3: Convert nibbles to Hex:\r
  0001 -> 1\r
  1110 -> E (14)\r
  1110 -> E (14)\r
Result: (756)₈ = (1EE)₁₆\r
\r
3. HEXADECIMAL TO OCTAL CONVERSION ALGORITHM:\r
- Step 1 (Hexadecimal -> Binary): Expand each hexadecimal character into its 4-bit binary equivalent.\r
- Step 2 (Binary -> Octal): Regroup the combined binary bitstream into 3-bit triplets from right to left (pad leftmost with 0s if needed).\r
- Step 3: Replace each 3-bit triplet with the corresponding Octal digit (0-7).\r
\r
Example 2: Convert (1EE)₁₆ to Octal\r
Step 1: Expand hex characters to 4-bit binary:\r
  1 -> 0001\r
  E -> 1110\r
  E -> 1110\r
  Combined Binary: 000111101110\r
\r
Step 2: Regroup into 3-bit triplets from right:\r
  (000) (111) (101) (110)\r
\r
Step 3: Convert triplets to Octal:\r
  000 -> 0 (leading zero ignored)\r
  111 -> 7\r
  101 -> 5\r
  110 -> 6\r
Result: (1EE)₁₆ = (756)₈\r
\r
4. CBSE EXAMINATION TIPS:\r
- Always show both the intermediate binary expansion step and the re-grouping step.\r
- Never convert through decimal during speed exams; the binary bridge is 5x faster and eliminates arithmetic calculation errors.\r
`,F=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: octal_to_hex_bridge.py\r
Topic 5: Octal to Hexadecimal and Hexadecimal to Octal via Binary Intermediary\r
\r
Demonstrates:\r
1. Two-step base conversion without going through Decimal:\r
   - Octal -> Binary (3-bit expansion) -> Hexadecimal (4-bit re-grouping)\r
   - Hexadecimal -> Binary (4-bit expansion) -> Octal (3-bit re-grouping)\r
2. Significant speed advantages over decimal conversion in CBSE examinations\r
"""\r
\r
OCT_TO_BIN = {\r
    '0': '000', '1': '001', '2': '010', '3': '011',\r
    '4': '100', '5': '101', '6': '110', '7': '111'\r
}\r
\r
HEX_TO_BIN = {\r
    '0': '0000', '1': '0001', '2': '0010', '3': '0011',\r
    '4': '0100', '5': '0101', '6': '0110', '7': '0111',\r
    '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',\r
    'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'\r
}\r
\r
BIN_TO_HEX = {v: k for k, v in HEX_TO_BIN.items()}\r
BIN_TO_OCT = {v: k for k, v in OCT_TO_BIN.items()}\r
\r
def octal_to_hexadecimal_bridge(oct_str: str) -> str:\r
    print(f"\\n--- [OCTAL TO HEXADECIMAL VIA BINARY BRIDGE] ---")\r
    print(f"Step 1: Expand each Octal digit into 3 binary bits:")\r
    clean_oct = oct_str.strip()\r
    triplets = [OCT_TO_BIN[d] for d in clean_oct]\r
    print(f"    Octal:  {' | '.join(clean_oct)}")\r
    print(f"    Binary: {' | '.join(triplets)}")\r
    \r
    raw_binary = "".join(triplets)\r
    print(f"Step 2: Re-group binary bitstream into 4-bit nibbles from right:")\r
    rem = len(raw_binary) % 4\r
    padded_binary = ("0" * (4 - rem) + raw_binary) if rem != 0 else raw_binary\r
    nibbles = [padded_binary[i:i+4] for i in range(0, len(padded_binary), 4)]\r
    hex_digits = [BIN_TO_HEX[n] for n in nibbles]\r
    hex_result = "".join(hex_digits)\r
    \r
    print(f"    Nibbles: {' | '.join(nibbles)}")\r
    print(f"    Hex:     {' | '.join(hex_digits)}")\r
    print(f"[+] ({clean_oct})₈ = ({hex_result})₁₆\\n")\r
    return hex_result\r
\r
\r
def hex_to_octal_bridge(hex_str: str) -> str:\r
    print(f"\\n--- [HEXADECIMAL TO OCTAL VIA BINARY BRIDGE] ---")\r
    print(f"Step 1: Expand each Hex digit into 4 binary bits:")\r
    clean_hex = hex_str.upper().strip()\r
    nibbles = [HEX_TO_BIN[d] for d in clean_hex]\r
    print(f"    Hex:    {' | '.join(clean_hex)}")\r
    print(f"    Binary: {' | '.join(nibbles)}")\r
    \r
    raw_binary = "".join(nibbles)\r
    print(f"Step 2: Re-group binary bitstream into 3-bit triplets from right:")\r
    rem = len(raw_binary) % 3\r
    padded_binary = ("0" * (3 - rem) + raw_binary) if rem != 0 else raw_binary\r
    triplets = [padded_binary[i:i+3] for i in range(0, len(padded_binary), 3)]\r
    oct_digits = [BIN_TO_OCT[t] for t in triplets]\r
    oct_result = "".join(oct_digits).lstrip("0") or "0"\r
    \r
    print(f"    Triplets: {' | '.join(triplets)}")\r
    print(f"    Octal:    {' | '.join(oct_digits)}")\r
    print(f"[+] ({clean_hex})₁₆ = ({oct_result})₈\\n")\r
    return oct_result\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - OCTAL <-> HEXADECIMAL BINARY BRIDGE   ")\r
    print("=================================================================\\n")\r
\r
    # 1. Octal to Hexadecimal\r
    octal_to_hexadecimal_bridge("756")\r
\r
    # 2. Hexadecimal to Octal\r
    hex_to_octal_bridge("1EE")\r
\r
if __name__ == "__main__":\r
    main()\r
`,X=()=>{const[s,x]=c.useState("octToHex"),[p,_]=c.useState("756"),[b,O]=c.useState("1EE"),m={0:"000",1:"001",2:"010",3:"011",4:"100",5:"101",6:"110",7:"111"},h={0:"0000",1:"0001",2:"0010",3:"0011",4:"0100",5:"0101",6:"0110",7:"0111",8:"1000",9:"1001",A:"1010",B:"1011",C:"1100",D:"1101",E:"1110",F:"1111"},g=Object.fromEntries(Object.entries(h).map(([t,r])=>[r,t])),u=Object.fromEntries(Object.entries(m).map(([t,r])=>[r,t])),y=(p.replace(/[^0-7]/g,"")||"0").split("").map(t=>({digit:t,bin:m[t]||"000"})),n=y.map(t=>t.bin).join(""),f=n.length%4,w=f===0?0:4-f,a="0".repeat(w)+n,i=[];for(let t=0;t<a.length;t+=4)i.push(a.substring(t,t+4));const B=i.map(t=>g[t]||"?").join(""),j=(b.toUpperCase().replace(/[^0-9A-F]/g,"")||"0").split("").map(t=>({digit:t,bin:h[t]||"0000"})),l=j.map(t=>t.bin).join(""),N=l.length%3,E=N===0?0:3-N,o="0".repeat(E)+l,d=[];for(let t=0;t<o.length;t+=3)d.push(o.substring(t,t+3));const C=d.map(t=>u[t]||"?").join("").replace(/^0+/,"")||"0";return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(M,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Two-Step Binary Bridge (Octal ↔ Binary ↔ Hexadecimal)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Skip decimal calculation entirely by using raw Binary as a high-speed intermediary bridge."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>x("octToHex"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${s==="octToHex"?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Octal → Hexadecimal"}),e.jsx("button",{onClick:()=>x("hexToOct"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${s==="hexToOct"?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Hexadecimal → Octal"})]})]}),s==="octToHex"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Octal Value (Digits 0-7):"}),e.jsx("input",{type:"text",value:p,onChange:t=>_(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 font-mono font-bold tracking-wider",placeholder:"e.g. 756"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-purple-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Hexadecimal Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",B,")",e.jsx("sub",{className:"text-purple-400 text-xs font-sans",children:"16"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-sky-400 uppercase tracking-wider block",children:"Step 1: 3-Bit Expansion"}),e.jsx("div",{className:"space-y-1 font-mono text-xs text-slate-300",children:y.map((t,r)=>e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 pb-0.5",children:[e.jsxs("span",{children:["Octal '",t.digit,"'"]}),e.jsxs("span",{className:"text-sky-300 font-bold",children:["→ ",t.bin]})]},r))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-amber-400 uppercase tracking-wider block",children:"Step 2: Binary Bitstream"}),e.jsx("p",{className:"font-mono text-xs text-amber-300 break-all bg-slate-950 p-2.5 rounded-lg border border-slate-800",children:n}),e.jsxs("span",{className:"text-[10px] text-slate-400 block",children:["Padded for 4-bit nibbles: ",a]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Step 3: 4-Bit Hex Assembly"}),e.jsx("div",{className:"space-y-1 font-mono text-xs text-slate-300",children:i.map((t,r)=>e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 pb-0.5",children:[e.jsx("span",{className:"text-sky-300",children:t}),e.jsxs("span",{className:"text-purple-400 font-bold",children:["→ Hex '",g[t],"'"]})]},r))})]})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Hexadecimal Value (0-9, A-F):"}),e.jsx("input",{type:"text",value:b,onChange:t=>O(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 font-mono font-bold tracking-wider uppercase",placeholder:"e.g. 1EE"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-sky-500/30 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-sky-400 uppercase tracking-wider block",children:"Octal Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",C,")",e.jsx("sub",{className:"text-sky-400 text-xs font-sans",children:"8"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-purple-400 uppercase tracking-wider block",children:"Step 1: 4-Bit Expansion"}),e.jsx("div",{className:"space-y-1 font-mono text-xs text-slate-300",children:j.map((t,r)=>e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 pb-0.5",children:[e.jsxs("span",{children:["Hex '",t.digit,"'"]}),e.jsxs("span",{className:"text-purple-300 font-bold",children:["→ ",t.bin]})]},r))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-amber-400 uppercase tracking-wider block",children:"Step 2: Binary Bitstream"}),e.jsx("p",{className:"font-mono text-xs text-amber-300 break-all bg-slate-950 p-2.5 rounded-lg border border-slate-800",children:l}),e.jsxs("span",{className:"text-[10px] text-slate-400 block",children:["Padded for 3-bit triplets: ",o]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-sky-400 uppercase tracking-wider block",children:"Step 3: 3-Bit Octal Assembly"}),e.jsx("div",{className:"space-y-1 font-mono text-xs text-slate-300",children:d.map((t,r)=>e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 pb-0.5",children:[e.jsx("span",{className:"text-sky-300",children:t}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["→ Octal '",u[t],"'"]})]},r))})]})]})]})]})};function K(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Octal to Hexadecimal & Hexadecimal to Octal via Binary Intermediary"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Learn the lightning-fast two-step bridge method: expand into binary triplets/nibbles and regroup without long decimal arithmetic."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(H,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Cargo Container Repacking"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Converting between octal and hexadecimal via decimal is like unloading 3-item boxes, converting every item into rupees, and then buying 4-item boxes with cash. The binary bridge simply unloads 3-item cartons into loose items (bits) and immediately repacks them into 4-item cartons without touching cash!"})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(I,{className:"text-sky-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Two-Step Conversion Algorithm"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"Octal → Hexadecimal:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1 text-xs text-slate-300",children:[e.jsx("li",{children:"Expand each octal digit into 3 binary bits."}),e.jsx("li",{children:"Regroup the binary string into 4-bit nibbles from the right."}),e.jsx("li",{children:"Convert each 4-bit nibble into the corresponding hex character."})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-purple-400",children:"Hexadecimal → Octal:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1 text-xs text-slate-300",children:[e.jsx("li",{children:"Expand each hex character into 4 binary bits."}),e.jsx("li",{children:"Regroup the binary string into 3-bit triplets from the right."}),e.jsx("li",{children:"Convert each 3-bit triplet into the corresponding octal digit."})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(X,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Binary Bridge Script"})]}),e.jsx(T,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic5_files/octal_to_hex_bridge.py",fileContent:F})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(v,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(v,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Converting via Decimal during exams:"})," This takes 4x longer and frequently causes arithmetic addition/division mistakes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to pad leading bits before regrouping:"})," Ensure the binary bitstream is properly aligned to multiples of 3 or 4 bits."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(D,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Show both intermediate steps:"})," Write both the binary expansion and the regrouped chunks clearly."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(S,{questions:L})}),e.jsx("div",{className:"space-y-4",children:e.jsx(k,{fileName:"CBSE_Class11_CS_Topic5_Octal_Hex_Bridge_Notes.txt",content:P})}),e.jsx("div",{className:"space-y-4",children:e.jsx(A,{topicName:"Octal to Hexadecimal & Hexadecimal to Octal Conversion",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{K as default};

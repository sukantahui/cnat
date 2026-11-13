import{j as e,b as m}from"./vendor-react-core-B-R9HE-Z.js";import{T as p}from"./TeacherSukantaHui-1kTygSSH.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{P as u}from"./PythonFileLoader-DZ61U3Y_.js";import{Z as i,c as g,$ as f,az as d,t as j,a8 as v}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const y=[{question:"What is the fastest technique to convert a large decimal number to binary mentally?",options:["Multiplying by 2 repeatedly","Decomposing by subtracting powers of 2 (128, 64, 32, 16, 8, 4, 2, 1)","Dividing by 16 and converting to hex first","Using logarithms"],correctAnswer:1,explanation:"Subtracting descending powers of 2 allows instant mental binary bit generation without writing long division ladders on paper."},{question:"Why should students avoid converting Hexadecimal to Decimal when trying to reach Octal in an exam?",options:["Decimal numbers cannot represent hexadecimal","It involves tedious double large divisions and multiplications prone to arithmetic error, whereas binary bridging is instantaneous","Octal does not support decimal numbers","It loses precision"],correctAnswer:1,explanation:"Binary bridging (Hex -> 4-bit Binary -> 3-bit Octal) requires no multiplication or division, saving valuable exam time and eliminating calculation errors."},{question:"Using the 8-4-2-1 code, what is the instant 4-bit binary representation of Hexadecimal digit 'D'?",options:["1100","1101","1110","1011"],correctAnswer:1,explanation:"In hexadecimal, D = 13. Since 8 + 4 + 1 = 13, the 8-4-2-1 representation is 1101."},{question:"What quick parity check can immediately detect an arithmetic mistake in Decimal to Binary conversion?",options:["Odd decimal numbers must always produce a binary string ending in 1; even decimals must end in 0","All binary strings must have an even number of 1s","The first bit must always be 0","The sum of bits must equal the decimal number"],correctAnswer:0,explanation:"Because 2^0 = 1 is the only odd power of two, any odd decimal number must have bit 1 at position 0 (the LSB)."}],w=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
TOPIC 08: FAST BASE CONVERSION SHORTCUTS & EXAM SPEED TRICKS\r
Author: Sukanta Hui\r
================================================================================\r
\r
1. THE "POWERS OF TWO" SUBTRACTION SHORTCUT:\r
   - For rapid Decimal -> Binary conversion without drawing a full division ladder:\r
   - Memorize: 128, 64, 32, 16, 8, 4, 2, 1.\r
   - Example: Convert 219 to Binary.\r
     * 219 >= 128 -> Bit 1 (rem: 219 - 128 = 91)\r
     * 91 >= 64   -> Bit 1 (rem: 91 - 64 = 27)\r
     * 27 < 32    -> Bit 0\r
     * 27 >= 16   -> Bit 1 (rem: 27 - 16 = 11)\r
     * 11 >= 8    -> Bit 1 (rem: 11 - 8 = 3)\r
     * 3 < 4      -> Bit 0\r
     * 3 >= 2     -> Bit 1 (rem: 3 - 2 = 1)\r
     * 1 >= 1     -> Bit 1 (rem: 1 - 1 = 0)\r
     => (219)10 = (11011011)2 in under 10 seconds!\r
\r
2. 4-2-1 OCTAL FAST LOOKUP:\r
   - Direct mental mapping for each octal digit:\r
     0: 000    1: 001    2: 010    3: 011\r
     4: 100    5: 101    6: 110    7: 111\r
\r
3. 8-4-2-1 HEXADECIMAL FAST LOOKUP:\r
   - 0: 0000   4: 0100   8: 1000   C (12): 1100\r
   - 1: 0001   5: 0101   9: 1001   D (13): 1101\r
   - 2: 0010   6: 0110   A (10): 1010   E (14): 1110\r
   - 3: 0011   7: 0111   B (11): 1011   F (15): 1111\r
\r
4. HEX <-> OCTAL DIRECT BRIDGING:\r
   - Never convert to base 10 in between.\r
   - Step 1: Hex -> 4-bit Binary nibbles.\r
   - Step 2: Regroup bits in 3-bit triplets from right.\r
   - Step 3: Write Octal digits directly.\r
\r
5. VERIFICATION SHORTCUT:\r
   - In board exams, always verify parity (even numbers must end in 0 in binary; odd in 1).\r
   - In Octal and Hex, even numbers always end in even digits (0,2,4,6,8,A,C,E).\r
================================================================================\r
`,N=`"""\r
CBSE Class 11 Computer Science (083)\r
Topic 8: Fast Base Conversion Shortcuts & Speed Calculation Tricks\r
Author: Sukanta Hui\r
\r
This script demonstrates algorithmic speed shortcuts:\r
1. Powers of Two table lookup & fast decomposition.\r
2. Bit masking for instant binary to Octal / Hex.\r
3. Fast mental arithmetic for CBSE examination speed.\r
"""\r
\r
def powers_of_two_table(n=12):\r
    """Generates powers of two up to 2^n."""\r
    return {f"2^{i}": (1 << i) for i in range(n + 1)}\r
\r
def rapid_decimal_to_binary_subtraction(decimal_val):\r
    """\r
    Rapid conversion via highest power of 2 subtraction:\r
    e.g., 156 -> 156 - 128 = 28 -> 28 - 16 = 12 -> 12 - 8 = 4 -> 4 - 4 = 0\r
    Bits at [128, 16, 8, 4] -> 10011100\r
    """\r
    powers = [128, 64, 32, 16, 8, 4, 2, 1]\r
    bits = []\r
    rem = decimal_val\r
    steps = []\r
    \r
    for p in powers:\r
        if rem >= p:\r
            bits.append("1")\r
            steps.append(f"{rem} >= {p} -> Bit 1, remaining = {rem - p}")\r
            rem -= p\r
        else:\r
            bits.append("0")\r
            steps.append(f"{rem} < {p} -> Bit 0")\r
            \r
    binary_str = "".join(bits).lstrip("0") or "0"\r
    return binary_str, steps\r
\r
def rapid_hex_octal_direct_bridge(hex_str):\r
    """\r
    Direct bridge: Hex -> 4-bit Binary -> 3-bit Octal groups\r
    """\r
    hex_clean = hex_str.strip().upper()\r
    # 1. Expand to 4-bit nibbles\r
    bin_str = "".join(bin(int(c, 16))[2:].zfill(4) for c in hex_clean)\r
    \r
    # 2. Pad to multiple of 3 for octal\r
    octal_pad = (3 - len(bin_str) % 3) % 3\r
    padded_bin = ("0" * octal_pad) + bin_str\r
    \r
    # 3. Group by 3 bits\r
    octal_digits = []\r
    for i in range(0, len(padded_bin), 3):\r
        group = padded_bin[i:i+3]\r
        octal_digits.append(str(int(group, 2)))\r
        \r
    octal_str = "".join(octal_digits).lstrip("0") or "0"\r
    return bin_str, octal_str\r
\r
if __name__ == "__main__":\r
    print("=== CBSE Class 11 CS: Speed Base Conversion Tricks ===")\r
    test_val = 156\r
    bin_res, steps = rapid_decimal_to_binary_subtraction(test_val)\r
    print(f"\\n1. Subtraction Trick for Decimal {test_val}:")\r
    for s in steps:\r
        print("  *", s)\r
    print(f"Result: ({test_val})10 = ({bin_res})2")\r
    \r
    hex_val = "2E"\r
    raw_bin, oct_res = rapid_hex_octal_direct_bridge(hex_val)\r
    print(f"\\n2. Direct Bridge Trick for Hex '{hex_val}':")\r
    print(f"  * 4-bit binary expansion: {raw_bin}")\r
    print(f"  * Octal conversion: ({oct_res})8")\r
`,_=()=>{const[a,o]=m.useState(219),l=Math.max(0,Math.min(1023,Number(a)||0)),c=[512,256,128,64,32,16,8,4,2,1];let t=l;const r=[],n=[];c.forEach(s=>{t>=s?(r.push({power:s,taken:!0,remBefore:t,remAfter:t-s}),n.push(1),t-=s):(r.push({power:s,taken:!1,remBefore:t,remAfter:t}),n.push(0))});const x=n.join("").replace(/^0+(?!$)/,"");return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(i,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Rapid Power-of-Two Subtraction Decomposer"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Convert any decimal to binary under 5 seconds by checking descending powers of 2."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Sample:"}),[89,156,219,500].map(s=>e.jsx("button",{onClick:()=>o(s),className:"px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 transition-colors",children:s},s))]})]}),e.jsxs("div",{className:"space-y-1.5 max-w-sm",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Enter Decimal Value (0 - 1023):"}),e.jsx("input",{type:"number",min:"0",max:"1023",value:a,onChange:s=>o(s.target.value),className:"w-full bg-slate-900/90 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3.5 py-2 text-white font-mono text-base outline-none transition-all"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Step-by-Step Power Check (Descending Powers of 2)"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2",children:r.map(s=>e.jsxs("div",{className:`p-2.5 rounded-xl border flex flex-col items-center justify-between text-center transition-all ${s.taken?"bg-amber-500/10 border-amber-500/40 text-amber-300":"bg-slate-900/40 border-slate-800 text-slate-600"}`,children:[e.jsx("div",{className:"text-[10px] font-mono text-slate-400 font-bold",children:s.power}),e.jsx("div",{className:`text-lg font-black font-mono ${s.taken?"text-amber-400":"text-slate-600"}`,children:s.taken?"1":"0"}),e.jsx("div",{className:"text-[9px] font-mono mt-1",children:s.taken?`-${s.power}`:"skip"})]},s.power))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 font-mono",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-slate-400 block font-sans",children:"Decimal Input:"}),e.jsxs("span",{className:"text-xl font-bold text-white",children:["(",l,")₁₀"]})]}),e.jsx(v,{className:"text-amber-400 hidden sm:block",size:24}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-slate-400 block font-sans",children:"Instant Binary String:"}),e.jsxs("span",{className:"text-xl font-bold text-amber-400 tracking-wider",children:["(",x,")₂"]})]})]})]})};function I(){return e.jsxs("div",{className:"w-full bg-slate-950 text-slate-100 min-h-screen",children:[e.jsx("div",{className:"border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20",children:e.jsx(i,{size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20",children:"Topic 08 / 10"}),e.jsx("span",{className:"text-xs text-slate-400",children:"CBSE Class 11 CS (083)"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:"Conversion Shortcuts & Speed Techniques"})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-amber-950/40 via-slate-900 to-yellow-950/40 border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wide uppercase",children:[e.jsx(g,{size:18}),e.jsx("span",{children:"Core Concept Overview"})]}),e.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"High-Speed Mental Calculation in Computer Science Exams"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm sm:text-base",children:["In timed CBSE board exams and competitive computer science assessments, standard long divisions can take up to 2-3 minutes per question. By mastering ",e.jsx("strong",{children:"Power-of-Two Subtraction"}),", ",e.jsx("strong",{children:"4-2-1 / 8-4-2-1 lookups"}),", and ",e.jsx("strong",{children:"Binary Bridging"}),", you can solve and verify conversion questions in under 10 seconds with 100% accuracy."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono",children:"2ⁿ"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"1. Power Subtraction Method"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Memorize powers of 2 (",e.jsx("code",{children:"1, 2, 4, 8, 16, 32, 64, 128, 256, 512"}),"). Check if the number contains each power from left to right."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-amber-300",children:["156 = 128 + 16 + 8 + 4",e.jsx("br",{}),"Bits: 10011100₂"]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold font-mono",children:"8421"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"2. Instant 8-4-2-1 Mapping"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Write 4-bit nibbles for each Hex character directly by adding combinations of 8, 4, 2, and 1."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300",children:["E = 14 = 8 + 4 + 2 → 1110₂",e.jsx("br",{}),"B = 11 = 8 + 2 + 1 → 1011₂"]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold font-mono",children:"⟷"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"3. Direct Binary Bridging"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Never convert to Base 10 when converting between Octal and Hexadecimal. Use Binary as an instantaneous middle step."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300",children:["(73)₈ → 111 011₂ → (3B)₁₆",e.jsx("br",{}),"Zero multiplication required!"]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wide uppercase",children:[e.jsx(i,{size:18}),e.jsx("span",{children:"Interactive Speed Decomposer"})]}),e.jsx(_,{})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(f,{className:"text-amber-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Speed Conversion Script"})]}),e.jsx(u,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic8_files/conversion_speed_tricks.py",fileContent:N})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(d,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(d,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Skipping zeros in power subtraction:"})," If a power is skipped (e.g. 64 is not needed), you MUST write a ",e.jsx("code",{children:"0"})," bit in that position."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming odd numbers end in 0:"})," Parity check: odd decimals MUST end in bit ",e.jsx("code",{children:"1"}),"; even decimals MUST end in ",e.jsx("code",{children:"0"}),"."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(j,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"In descriptive questions:"})," Show the primary method (e.g., division ladder) for full method marks, but use the power-of-two trick in rough space to verify your answer before submitting!"]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(b,{questions:y})}),e.jsx("div",{className:"space-y-4",children:e.jsx(h,{fileName:"CBSE_Class11_CS_Topic8_Speed_Tricks_Notes.txt",content:w})}),e.jsx("div",{className:"space-y-4",children:e.jsx(p,{topicName:"Conversion Shortcuts & Speed Techniques",subject:"CBSE Class 11 Computer Science (083)"})})]})]})}export{I as default};

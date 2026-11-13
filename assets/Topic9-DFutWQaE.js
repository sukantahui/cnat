import{b as p,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as x}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as g}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{D as a,br as m,a7 as f,F as b,P as _,f as y,g as v}from"./vendor-icons-Bcvdak5x.js";const S=[{question:"Which intermediate radix provides the fastest lossless conversion between Octal and Hexadecimal?",options:["Decimal (Base 10)","Binary (Base 2)","Base 4","Base 32"],correctAnswer:1,explanation:"Because 8 = 2^3 and 16 = 2^4, binary serves as a direct bitwise bridge without requiring decimal division or multiplication."},{question:"What is the result of adding binary numbers 11011₂ and 01110₂?",options:["101001₂ (41₁₀)","100101₂ (37₁₀)","111001₂ (57₁₀)","101011₂ (43₁₀)"],correctAnswer:0,explanation:"27₁₀ + 14₁₀ = 41₁₀. In binary, 11011₂ + 01110₂ = 101001₂."},{question:"When converting a fractional decimal such as 0.375 to binary, what algorithm is applied?",options:["Repeated division by 2 and reading remainders bottom-to-top","Repeated multiplication by 2 and reading integer carries top-to-bottom","Taking reciprocal and dividing","Shifting bits to the right"],correctAnswer:1,explanation:"Fractional decimal conversion requires repeated multiplication by the radix (2) and recording the generated integer parts from top to bottom."},{question:"In the positional number system, what does the radix (base) represent?",options:["The maximum value a number can store","The total count of unique symbols/digits used by the system to represent numbers","The number of bytes in memory","The clock speed of the CPU"],correctAnswer:1,explanation:"The radix or base defines the total number of unique symbols or digits available (e.g. 2 for Binary, 8 for Octal, 10 for Decimal, 16 for Hexadecimal)."}],w=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083) - UNIT 1: COMPUTER SYSTEMS & ORGANISATION\r
MODULE 002.001: COMPLETE NUMBER SYSTEMS & BASE CONVERSIONS HANDBOOK\r
Author: Sukanta Hui\r
================================================================================\r
\r
1. NUMBER SYSTEMS TAXONOMY & CHARACTERISTICS:\r
--------------------------------------------------------------------------------\r
System         | Radix (Base) | Allowed Digits / Symbols       | Place Weight\r
--------------------------------------------------------------------------------\r
Binary         | 2            | 0, 1                           | 2^n\r
Octal          | 8            | 0, 1, 2, 3, 4, 5, 6, 7         | 8^n\r
Decimal        | 10           | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9   | 10^n\r
Hexadecimal    | 16           | 0-9, A, B, C, D, E, F          | 16^n\r
--------------------------------------------------------------------------------\r
* Hexadecimal Values: A=10, B=11, C=12, D=13, E=14, F=15.\r
\r
2. SUMMARY OF MASTER CONVERSION ALGORITHMS:\r
--------------------------------------------------------------------------------\r
A. DECIMAL TO ANY BASE (Base r):\r
   - Integer Part: Successive division by r. Collect remainders from bottom to top (MSD to LSD).\r
   - Fractional Part: Successive multiplication by r. Collect generated integer carries from top to bottom.\r
\r
B. ANY BASE (Base r) TO DECIMAL:\r
   - Positional Weight Expansion:\r
     Value = Sum(d_i * r^i) for all positions i (positive powers for integer part, negative for fractional).\r
\r
C. BINARY <-> OCTAL:\r
   - 3-bit grouping. (2^3 = 8).\r
   - Binary -> Octal: Group in 3s starting from binary point towards left and right.\r
   - Octal -> Binary: Replace each octal digit with its exact 3-bit equivalent.\r
\r
D. BINARY <-> HEXADECIMAL:\r
   - 4-bit grouping (Nibble matching). (2^4 = 16).\r
   - Binary -> Hex: Group in 4s starting from binary point.\r
   - Hex -> Binary: Replace each hex digit with its exact 4-bit equivalent.\r
\r
E. OCTAL <-> HEXADECIMAL:\r
   - Always bridge through Binary:\r
     (Octal)8 <==== 3-bit ====> (Binary)2 <==== 4-bit ====> (Hexadecimal)16\r
\r
3. BINARY ARITHMETIC RULES:\r
--------------------------------------------------------------------------------\r
Addition:\r
  0 + 0 = 0\r
  0 + 1 = 1\r
  1 + 0 = 1\r
  1 + 1 = 10 (Sum: 0, Carry: 1)\r
  1 + 1 + 1 = 11 (Sum: 1, Carry: 1)\r
\r
Subtraction:\r
  0 - 0 = 0\r
  1 - 0 = 1\r
  1 - 1 = 0\r
  0 - 1 = 1 (after borrowing 1 from the next higher column, (10)2 - 1 = 1)\r
\r
4. SPEED TRICKS & EXAM TIPS:\r
--------------------------------------------------------------------------------\r
- Powers of Two Table: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.\r
- Parity Check: Odd decimal numbers MUST end in bit 1.\r
- In all conversions, always write subscripts/bases clearly: e.g. (156)10 = (10011100)2 = (234)8 = (9C)16.\r
================================================================================\r
`,s=`"""\r
================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083) - UNIT 1\r
MODULE 002.001: NUMBER SYSTEMS AND BASE CONVERSIONS MASTER LABORATORY\r
Author: Sukanta Hui\r
================================================================================\r
A comprehensive Python educational engine covering:\r
1. Decimal to Any Base (Successive Division / Multiplication for Fractions)\r
2. Any Base to Decimal (Positional Weight Expansion)\r
3. Direct Grouping (Binary <-> Octal 3-bit, Binary <-> Hex 4-bit)\r
4. Direct Octal <-> Hexadecimal Bridging\r
5. Binary ALU Arithmetic (Addition with Carries, Subtraction with Borrows)\r
================================================================================\r
"""\r
\r
import math\r
\r
HEX_DIGITS = "0123456789ABCDEF"\r
\r
def dec_to_base_integer(n: int, base: int) -> str:\r
    """Converts a positive decimal integer to base (2, 8, 16) with steps."""\r
    if n == 0:\r
        return "0"\r
    digits = []\r
    temp = n\r
    print(f"\\n[Division Steps for ({n})10 -> Base {base}]:")\r
    while temp > 0:\r
        rem = temp % base\r
        sym = HEX_DIGITS[rem]\r
        digits.append(sym)\r
        print(f"  {temp:5d} ÷ {base} = {temp // base:5d}  |  Remainder: {rem:2d} ({sym})")\r
        temp //= base\r
    result = "".join(reversed(digits))\r
    print(f"  Result (read bottom-to-top): ({result})_{base}")\r
    return result\r
\r
def dec_to_base_fraction(frac: float, base: int, precision: int = 6) -> str:\r
    """Converts a fractional decimal (e.g. 0.625) to base (2, 8, 16) with steps."""\r
    steps = []\r
    digits = []\r
    cur = frac - int(frac)\r
    print(f"\\n[Multiplication Steps for (0.{str(frac).split('.')[1]})10 -> Base {base}]:")\r
    for step_num in range(1, precision + 1):\r
        prod = cur * base\r
        int_part = int(prod)\r
        sym = HEX_DIGITS[int_part]\r
        digits.append(sym)\r
        next_frac = prod - int_part\r
        print(f"  Step {step_num}: {cur:.6f} × {base} = {prod:.6f} -> Integer Carry: {sym}")\r
        cur = round(next_frac, 6)\r
        if cur == 0.0:\r
            break\r
    result = "0." + "".join(digits)\r
    print(f"  Fractional Result (read top-to-bottom): ({result})_{base}")\r
    return result\r
\r
def base_to_dec(num_str: str, base: int) -> float:\r
    """Evaluates any radix number using positional weight expansion."""\r
    num_str = num_str.strip().upper()\r
    if "." in num_str:\r
        int_p, frac_p = num_str.split(".", 1)\r
    else:\r
        int_p, frac_p = num_str, ""\r
\r
    total = 0.0\r
    print(f"\\n[Positional Weight Expansion for ({num_str})_{base}]:")\r
\r
    # Integer expansion\r
    int_len = len(int_p)\r
    int_sum = 0\r
    for i, char in enumerate(int_p):\r
        power = int_len - 1 - i\r
        val = HEX_DIGITS.index(char)\r
        term = val * (base ** power)\r
        int_sum += term\r
        print(f"  Digit '{char}' (val {val:2d}) × {base}^{power:<2d} = {term}")\r
\r
    # Fractional expansion\r
    frac_sum = 0.0\r
    for i, char in enumerate(frac_p):\r
        power = -(i + 1)\r
        val = HEX_DIGITS.index(char)\r
        term = val * (base ** power)\r
        frac_sum += term\r
        print(f"  Digit '{char}' (val {val:2d}) × {base}^{power:<2d} = {term:.6f}")\r
\r
    total = int_sum + frac_sum\r
    print(f"  Total Decimal Value: ({total})10")\r
    return total\r
\r
def binary_octal_bridge(bin_str: str) -> str:\r
    """Direct 3-bit binary to octal conversion."""\r
    clean = bin_str.replace(" ", "")\r
    pad = (3 - len(clean) % 3) % 3\r
    padded = ("0" * pad) + clean\r
    groups = [padded[i:i+3] for i in range(0, len(padded), 3)]\r
    oct_digits = [str(int(g, 2)) for g in groups]\r
    print(f"\\n[Binary -> Octal 3-bit Grouping]:")\r
    print(f"  Original: {clean}  (Padded to multiple of 3: {padded})")\r
    print(f"  Groups:   {' | '.join(groups)}")\r
    print(f"  Octal:    {'   '.join(oct_digits)}  => ({''.join(oct_digits)})8")\r
    return "".join(oct_digits)\r
\r
def binary_hex_bridge(bin_str: str) -> str:\r
    """Direct 4-bit binary to hexadecimal conversion."""\r
    clean = bin_str.replace(" ", "")\r
    pad = (4 - len(clean) % 4) % 4\r
    padded = ("0" * pad) + clean\r
    groups = [padded[i:i+4] for i in range(0, len(padded), 4)]\r
    hex_digits = [HEX_DIGITS[int(g, 2)] for g in groups]\r
    print(f"\\n[Binary -> Hexadecimal 4-bit Grouping]:")\r
    print(f"  Original: {clean}  (Padded to multiple of 4: {padded})")\r
    print(f"  Groups:   {' | '.join(groups)}")\r
    print(f"  Hex:      {'   '.join(hex_digits)}  => ({''.join(hex_digits)})16")\r
    return "".join(hex_digits)\r
\r
def binary_alu_add(bin_a: str, bin_b: str):\r
    """Simulates bitwise binary addition with ripple carry tracking."""\r
    max_len = max(len(bin_a), len(bin_b))\r
    a_pad = bin_a.zfill(max_len)\r
    b_pad = bin_b.zfill(max_len)\r
    carries = [0]\r
    result_bits = []\r
    carry = 0\r
\r
    for i in range(max_len - 1, -1, -1):\r
        b1 = int(a_pad[i])\r
        b2 = int(b_pad[i])\r
        tot = b1 + b2 + carry\r
        result_bits.insert(0, str(tot % 2))\r
        carry = tot // 2\r
        carries.insert(0, carry)\r
\r
    if carry > 0:\r
        result_bits.insert(0, str(carry))\r
\r
    print(f"\\n[Binary Addition]:")\r
    print(f"  Carries: {''.join(map(str, carries[:max_len]))}")\r
    print(f"  A:       {a_pad} ({int(bin_a, 2)} in decimal)")\r
    print(f"  B:     + {b_pad} ({int(bin_b, 2)} in decimal)")\r
    print(f"  ------------------------")\r
    print(f"  Sum:     {''.join(result_bits)} ({int(''.join(result_bits), 2)} in decimal)")\r
    return "".join(result_bits)\r
\r
def main_menu():\r
    print("=" * 60)\r
    print(" CBSE CLASS 11 CS (083) - NUMBER SYSTEMS MASTER LAB ")\r
    print("=" * 60)\r
    print("Running automated demonstration suite:\\n")\r
\r
    # Demo 1: Dec to Bin, Oct, Hex\r
    dec_val = 156\r
    dec_to_base_integer(dec_val, 2)\r
    dec_to_base_integer(dec_val, 8)\r
    dec_to_base_integer(dec_val, 16)\r
\r
    # Demo 2: Positional Weight\r
    base_to_dec("2E", 16)\r
    base_to_dec("234", 8)\r
\r
    # Demo 3: Fractional\r
    dec_to_base_fraction(0.625, 2)\r
    dec_to_base_fraction(0.125, 8)\r
\r
    # Demo 4: Grouping\r
    binary_octal_bridge("10011100")\r
    binary_hex_bridge("10011100")\r
\r
    # Demo 5: ALU Addition\r
    binary_alu_add("11011", "01110")\r
\r
if __name__ == "__main__":\r
    main_menu()\r
`;function B(){const[o,l]=p.useState(!1),[n,d]=p.useState("resources"),u=()=>{navigator.clipboard.writeText(s),l(!0),setTimeout(()=>l(!1),2e3)},c=()=>{const r=new Blob([s],{type:"text/x-python;charset=utf-8"}),i=URL.createObjectURL(r),t=document.createElement("a");t.href=i,t.download="module_002_001_number_systems_master_lab.py",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(i)};return e.jsx("div",{className:"w-full bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002.001 · Topic 09 / 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full",children:"Downloadable Revision Hub"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Downloadable Documents & Master Laboratory Scripts"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Export comprehensive offline study guides, formula sheets, and our complete Python simulation laboratory for all number systems conversions and binary ALU arithmetic."})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-3",children:[{id:"resources",label:"1. Download Center",icon:a},{id:"python",label:"2. Master Python Script",icon:m},{id:"faqs",label:"3. Revision FAQs",icon:f},{id:"notes",label:"4. Printable Document",icon:b}].map(r=>{const i=r.icon;return e.jsxs("button",{onClick:()=>d(r.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${n===r.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border-b-2 border-indigo-400":"bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx(i,{size:16}),e.jsx("span",{children:r.label})]},r.id)})}),n==="resources"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold",children:e.jsx(b,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Module Complete Revision Handbook"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Complete printable handbook covering all conversion tables, 8-4-2-1 / 4-2-1 codes, positional weight formulas, fractional rules, and binary arithmetic steps."}),e.jsxs("button",{onClick:()=>d("notes"),className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition cursor-pointer",children:[e.jsx(_,{size:14}),"Print / View Plain Text Notes"]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(m,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Master Python Simulation Suite (.py)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Ready-to-run Python educational script containing division ladders, positional weight calculators, binary bridging routines, and ALU ripple-carry addition engines."}),e.jsxs("button",{onClick:c,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition cursor-pointer",children:[e.jsx(a,{size:14}),"Download Master .py File"]})]})]}),e.jsx(x,{topicName:"Number Systems & Base Conversions Downloadable Hub",subject:"CBSE Class 11 Computer Science (083)"})]}),n==="python"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"module_002_001_master_lab.py"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Complete Base Conversion & Arithmetic Engine"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:u,className:"flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition cursor-pointer",children:[o?e.jsx(y,{size:14,className:"text-emerald-400"}):e.jsx(v,{size:14}),o?"Copied":"Copy Python"]}),e.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition cursor-pointer",children:[e.jsx(a,{size:14}),"Download .py"]})]})]}),e.jsx("pre",{className:"bg-slate-950 p-4 rounded-xl text-slate-200 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-relaxed max-h-[500px]",children:e.jsx("code",{children:s})})]})}),n==="faqs"&&e.jsx("div",{className:"space-y-6",children:e.jsx(g,{questions:S})}),n==="notes"&&e.jsx("div",{className:"space-y-6",children:e.jsx(h,{content:w,fileName:"CBSE_Class11_CS_Module_002_001_Complete_Handbook.txt"})})]})})}export{B as default};

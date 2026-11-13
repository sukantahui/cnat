import{j as e,b}from"./vendor-react-core-B-R9HE-Z.js";import{T as u}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as g}from"./FAQTemplate-16IfroqC.js";import{P as f}from"./PlainTextPrint-C6NaUtnE.js";import{P as y}from"./PythonFileLoader-DZ61U3Y_.js";import{c as j,br as N,aa as v,az as w,t as A,a7 as C,y as B,R as E,b9 as S}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const R=[{id:1,question:"What is the base (radix) of the Hexadecimal number system?",options:["2","8","10","16"],correctAnswer:3,explanation:"The Hexadecimal system uses base 16 and contains 16 distinct symbols: 0 to 9 representing numeric values 0–9, and letters A through F representing values 10 through 15.",hint:"Hexa (6) + Deci (10) = Base 16."},{id:2,question:"What is the decimal equivalent of the binary number (110101)₂?",options:["45","53","55","61"],correctAnswer:1,explanation:"(110101)₂ = 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰ = 32 + 16 + 0 + 4 + 0 + 1 = 53₁₀.",hint:"Sum powers of 2 for each '1' bit: 32 + 16 + 4 + 1."},{id:3,question:"Convert decimal number (156)₁₀ to its binary representation:",options:["(10011100)₂","(10111100)₂","(10011010)₂","(11001100)₂"],correctAnswer:0,explanation:"156 / 2 = 78 (rem 0), 78 / 2 = 39 (rem 0), 39 / 2 = 19 (rem 1), 19 / 2 = 9 (rem 1), 9 / 2 = 4 (rem 1), 4 / 2 = 2 (rem 0), 2 / 2 = 1 (rem 0), 1 / 2 = 0 (rem 1). Reading remainders from bottom to top yields (10011100)₂.",hint:"128 + 16 + 8 + 4 = 156 -> Bits at positions 7, 4, 3, 2 are 1."},{id:4,question:"How many binary bits are required to represent a single Octal digit (base 8)?",options:["2 bits","3 bits","4 bits","8 bits"],correctAnswer:1,explanation:"Since 2³ = 8, exactly 3 binary bits are required and sufficient to represent any octal digit from 0 to 7 (e.g. 7₈ = 111₂).",hint:"2 to the power 3 equals 8."},{id:5,question:"How many binary bits are required to represent a single Hexadecimal digit (base 16)?",options:["2 bits","3 bits","4 bits","16 bits"],correctAnswer:2,explanation:"Since 2⁴ = 16, a single hexadecimal digit (0 to F) maps directly to a 4-bit nibble (e.g. F₁₆ = 1111₂).",hint:"2 to the power 4 equals 16 (a nibble)."},{id:6,question:"Convert the binary number (101101110)₂ directly into Octal:",options:["(556)₈","(566)₈","(554)₈","(567)₈"],correctAnswer:0,explanation:"Group bits in triplets from right to left: 101 | 101 | 110 -> 101₂ = 5, 101₂ = 5, 110₂ = 6. Result is (556)₈.",hint:"Group into 3-bit triplets from right to left: 101 101 110."},{id:7,question:"Convert the binary number (110110101111)₂ directly into Hexadecimal:",options:["(DAF)₁₆","(D8F)₁₆","(CBF)₁₆","(CAF)₁₆"],correctAnswer:0,explanation:"Group bits in nibbles (4-bit chunks) from right to left: 1101 | 1010 | 1111 -> 1101₂ = 13 (D), 1010₂ = 10 (A), 1111₂ = 15 (F). Result is (DAF)₁₆.",hint:"1101 = D, 1010 = A, 1111 = F."},{id:8,question:"Convert the Hexadecimal value (2B)₁₆ to Decimal:",options:["41","43","45","47"],correctAnswer:1,explanation:"(2B)₁₆ = 2×16¹ + B×16⁰ = 2×16 + 11×1 = 32 + 11 = 43₁₀.",hint:"B in hexadecimal represents the value 11."},{id:9,question:"What is the decimal equivalent of the fractional binary number (0.101)₂ [Enrichment]?",options:["0.5","0.625","0.75","0.875"],correctAnswer:1,explanation:"(0.101)₂ = 1×2⁻¹ + 0×2⁻² + 1×2⁻³ = 1/2 + 0 + 1/8 = 0.5 + 0.125 = 0.625₁₀.",hint:"Powers of 2 for negative exponents: 2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125."},{id:10,question:"Convert fractional decimal (0.375)₁₀ to Binary [Enrichment]:",options:["(0.011)₂","(0.101)₂","(0.110)₂","(0.001)₂"],correctAnswer:0,explanation:"Multiply by 2 successively: 0.375 × 2 = 0.75 (int 0), 0.75 × 2 = 1.5 (int 1, frac 0.5), 0.5 × 2 = 1.0 (int 1, frac 0.0). Reading integers top to bottom gives (0.011)₂.",hint:"Successive multiplication by 2."},{id:11,question:"Convert Octal (347)₈ to Binary:",options:["(011100111)₂","(011101111)₂","(100100111)₂","(011110111)₂"],correctAnswer:0,explanation:"Expand each octal digit into 3 binary bits: 3 -> 011, 4 -> 100, 7 -> 111. Result is (011100111)₂.",hint:"3 = 011, 4 = 100, 7 = 111."},{id:12,question:"Convert Hexadecimal (A5C)₁₆ to Binary:",options:["(101001011100)₂","(101001011010)₂","(101101011100)₂","(101010011100)₂"],correctAnswer:0,explanation:"Expand each hex digit into 4 bits: A (10) -> 1010, 5 -> 0101, C (12) -> 1100. Combining gives (101001011100)₂.",hint:"A=1010, 5=0101, C=1100."},{id:13,question:"Convert Octal (72)₈ to Decimal:",options:["56","58","60","62"],correctAnswer:1,explanation:"(72)₈ = 7×8¹ + 2×8⁰ = 56 + 2 = 58₁₀.",hint:"7 times 8 plus 2."},{id:14,question:"Convert Decimal (255)₁₀ to Hexadecimal:",options:["(EE)₁₆","(FE)₁₆","(FF)₁₆","(EF)₁₆"],correctAnswer:2,explanation:"255 / 16 = 15 with remainder 15. 15 = F in hex. Thus (FF)₁₆.",hint:"Maximum value representable in a single byte (8 bits all 1s = 255 = 0xFF)."},{id:15,question:"What is the binary sum of (1011)₂ + (0110)₂?",options:["(10001)₂","(10000)₂","(10010)₂","(10101)₂"],correctAnswer:0,explanation:"1011₂ (11) + 0110₂ (6) = 17₁₀ = (10001)₂ (16 + 1).",hint:"11 + 6 = 17 in decimal = 10001 in binary."},{id:16,question:"What is the base of the Octal number system?",options:["2","8","10","16"],correctAnswer:1,explanation:"The Octal number system uses base 8 and digits 0, 1, 2, 3, 4, 5, 6, 7.",hint:"Octal uses 8 symbols."},{id:17,question:"Which of the following is NOT a valid Octal number?",options:["(745)₈","(618)₈","(302)₈","(123)₈"],correctAnswer:1,explanation:"(618)₈ is invalid because the digit '8' does not exist in base 8 (valid digits are 0 through 7).",hint:"Look for digits greater than 7."},{id:18,question:"Which of the following is NOT a valid Hexadecimal number?",options:["(10A)₁₆","(B2G)₁₆","(C0D)₁₆","(F99)₁₆"],correctAnswer:1,explanation:"(B2G)₁₆ is invalid because 'G' is not a hexadecimal digit (valid alphabetic digits are A through F).",hint:"Hex letters range only from A to F."},{id:19,question:"Convert (101011.11)₂ to Decimal [Enrichment]:",options:["43.5","43.75","42.75","43.25"],correctAnswer:1,explanation:"Integer part: 101011₂ = 32 + 8 + 2 + 1 = 43. Fractional part: .11₂ = 1/2 + 1/4 = 0.5 + 0.25 = 0.75. Total = 43.75₁₀.",hint:"101011 is 43, .11 is 0.75."},{id:20,question:"Convert Octal (157)₈ to Hexadecimal:",options:["(6F)₁₆","(5F)₁₆","(7E)₁₆","(6E)₁₆"],correctAnswer:0,explanation:"Octal to Binary: 157₈ = 001 101 111₂ = (01101111)₂. Regroup into 4-bit nibbles: 0110 | 1111 -> 0110₂ = 6, 1111₂ = F. Result is (6F)₁₆.",hint:"Convert through binary as a bridge: Octal -> Binary -> Hex."},{id:21,question:"Why do computer scientists frequently use Hexadecimal and Octal notation?",options:["Because CPUs execute hexadecimal circuits directly","As a human-readable shorthand representation for long, unwieldy binary bitstrings","Because decimal numbers take more RAM storage","Because Python requires all integers in hexadecimal format"],correctAnswer:1,explanation:"Hexadecimal (1 hex digit = 4 bits) and Octal (1 octal digit = 3 bits) serve as compact, human-readable shorthand representations for binary memory addresses, byte values, and color codes (e.g. #FFFFFF).",hint:"Compact shorthand for long strings of 0s and 1s."},{id:22,question:"What is the decimal equivalent of (11.001)₂ [Enrichment]?",options:["3.125","3.25","3.5","3.0625"],correctAnswer:0,explanation:"Integer: 11₂ = 3. Fractional: .001₂ = 0×2⁻¹ + 0×2⁻² + 1×2⁻³ = 1/8 = 0.125. Total = 3.125₁₀.",hint:"11 is 3, 001 is 1/8 = 0.125."},{id:23,question:"In Python, which prefix denotes a hexadecimal integer literal?",options:["0b","0o","0x","0h"],correctAnswer:2,explanation:"In Python, `0x` or `0X` specifies hexadecimal (e.g. `0xFF` evaluates to `255`), `0b` denotes binary, and `0o` denotes octal.",hint:"0x is for Hex, 0b is for Binary, 0o is for Octal."},{id:24,question:"Convert Decimal (77)₁₀ to Octal:",options:["(114)₈","(115)₈","(116)₈","(125)₈"],correctAnswer:1,explanation:"77 / 8 = 9 (rem 5), 9 / 8 = 1 (rem 1), 1 / 8 = 0 (rem 1). Reading remainders upwards: (115)₈. Check: 1×64 + 1×8 + 5×1 = 77.",hint:"Divide by 8 repeatedly and read remainders."},{id:25,question:"Case Study: Debangshu is debugging a memory crash and finds the pointer address 0x7FFE9B40. How many bytes does this hexadecimal string represent?",options:["4 bytes (32 bits)","8 bytes (64 bits)","2 bytes (16 bits)","16 bytes (128 bits)"],correctAnswer:0,explanation:"The address has 8 hex digits (`7FFE9B40`). Since each hex digit equals 4 bits (half a byte), 8 hex digits = 8 × 4 = 32 bits = 4 bytes.",hint:"Each hex digit represents 4 bits. 8 digits * 4 bits = 32 bits = 4 bytes."}],_=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION (CSO) - 10 MARKS\r
MODULE 002_001: NUMBER SYSTEMS & RADIX CONVERSION MATHEMATICS\r
================================================================================\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
Official Syllabus Aligned: 2024-25 / 2025-26 Senior Secondary Computer Science\r
\r
1. NUMBER SYSTEMS TAXONOMY\r
--------------------------------------------------------------------------------\r
A Positional Number System is a mathematical system where the value of a digit is\r
determined by the digit itself, its position (weight), and the base (radix) of the system:\r
Value = Sum of (Digit_i * Base^i)\r
\r
1. BINARY (Base 2 / Radix 2):\r
   - Digits: {0, 1}\r
   - Weight: Powers of 2 (2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128...)\r
   - Standard unit for physical digital hardware (high/low voltage levels).\r
\r
2. OCTAL (Base 8 / Radix 8):\r
   - Digits: {0, 1, 2, 3, 4, 5, 6, 7}\r
   - Weight: Powers of 8 (8^0=1, 8^1=8, 8^2=64, 8^3=512...)\r
   - Relationship with Binary: 1 Octal digit = 3 Binary bits (2^3 = 8).\r
\r
3. DECIMAL (Base 10 / Radix 10):\r
   - Digits: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\r
   - Weight: Powers of 10 (10^0=1, 10^1=10, 10^2=100, 10^3=1000...)\r
   - Natural human counting system.\r
\r
4. HEXADECIMAL (Base 16 / Radix 16):\r
   - Digits: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}\r
   - Letters: A=10, B=11, C=12, D=13, E=14, F=15.\r
   - Weight: Powers of 16 (16^0=1, 16^1=16, 16^2=256, 16^3=4096...)\r
   - Relationship with Binary: 1 Hex digit = 4 Binary bits (1 Nibble) (2^4 = 16).\r
\r
2. MASTER CONVERSION ALGORITHMS\r
--------------------------------------------------------------------------------\r
A. ANY BASE TO DECIMAL:\r
   Multiply each digit by (Base^position) and calculate the sum.\r
   Example: (1101)₂ = 1*2³ + 1*2² + 0*2¹ + 1*2⁰ = 8 + 4 + 0 + 1 = 13₁₀\r
   Example: (3A5)₁₆ = 3*16² + 10*16¹ + 5*16⁰ = 3*256 + 160 + 5 = 933₁₀\r
\r
B. DECIMAL TO ANY BASE:\r
   Repeatedly divide the decimal integer by the target base, record remainders,\r
   and read remainders from BOTTOM TO TOP (Least Significant Remainder is top,\r
   Most Significant Remainder is bottom).\r
\r
C. BINARY <-> OCTAL SHORTCUT:\r
   - Binary -> Octal: Group binary bits in triplets (3 bits) from RIGHT TO LEFT for\r
     integer part. Replace each 3-bit group with its single octal digit.\r
     (101110)₂ = 101 | 110 = (56)₈\r
   - Octal -> Binary: Replace each octal digit with its exact 3-bit binary equivalent.\r
     (73)₈ = 111 | 011 = (111011)₂\r
\r
D. BINARY <-> HEXADECIMAL SHORTCUT:\r
   - Binary -> Hexadecimal: Group binary bits in nibbles (4 bits) from RIGHT TO LEFT.\r
     Replace each 4-bit group with its single hexadecimal symbol.\r
     (11011011)₂ = 1101 | 1011 = (DB)₁₆\r
   - Hexadecimal -> Binary: Replace each hex digit with its exact 4-bit binary nibble.\r
     (A4)₁₆ = 1010 | 0100 = (10100100)₂\r
\r
E. OCTAL <-> HEXADECIMAL:\r
   Always use BINARY as the intermediate conversion bridge:\r
   Octal (Base 8) <---> Binary (Base 2) <---> Hexadecimal (Base 16)\r
\r
3. [ENRICHMENT / ADVANCED CONCEPT] FRACTIONAL RADIX CONVERSIONS\r
--------------------------------------------------------------------------------\r
A. FRACTIONAL BINARY TO DECIMAL:\r
   Multiply fractional digits by negative powers of 2 (2⁻¹ = 0.5, 2⁻² = 0.25, 2⁻³ = 0.125, 2⁻⁴ = 0.0625).\r
   Example: (0.1011)₂ = 1*0.5 + 0*0.25 + 1*0.125 + 1*0.0625 = 0.6875₁₀\r
\r
B. FRACTIONAL DECIMAL TO BINARY:\r
   Repeatedly MULTIPLY the fractional part by 2. Record the integer part (0 or 1),\r
   keep the new fractional part, and repeat until fractional part reaches 0 or\r
   desired precision is reached. Read recorded integers from TOP TO BOTTOM.\r
   Example: (0.625)₁₀\r
   0.625 * 2 = 1.25 -> Int: 1, Frac: 0.25\r
   0.250 * 2 = 0.50 -> Int: 0, Frac: 0.50\r
   0.500 * 2 = 1.00 -> Int: 1, Frac: 0.00 (Done!)\r
   Result: (0.101)₂\r
\r
================================================================================\r
END OF REVISION NOTES - MODULE 002_001\r
================================================================================\r
`,O=`"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) - UNIT I\r
MODULE 002_001: NUMBER SYSTEM & RADIX CONVERSION LABORATORY\r
Topic: Complete Radix Converter Suite (Binary, Octal, Decimal, Hexadecimal)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
from typing import Tuple\r
\r
\r
def decimal_to_base_detailed(dec_num: int, target_base: int) -> Tuple[str, list]:\r
    """Converts a decimal integer to any base (2, 8, 16) with step-by-step division steps."""\r
    if dec_num == 0:\r
        return "0", []\r
\r
    digits_map = "0123456789ABCDEF"\r
    steps = []\r
    current = dec_num\r
    result_chars = []\r
\r
    while current > 0:\r
        quotient = current // target_base\r
        remainder = current % target_base\r
        symbol = digits_map[remainder]\r
        steps.append({\r
            "current": current,\r
            "quotient": quotient,\r
            "remainder": remainder,\r
            "symbol": symbol\r
        })\r
        result_chars.append(symbol)\r
        current = quotient\r
\r
    converted_str = "".join(reversed(result_chars))\r
    return converted_str, steps\r
\r
\r
def fractional_decimal_to_binary(fractional_part: float, max_bits: int = 8) -> Tuple[str, list]:\r
    """[Enrichment] Converts fractional decimal (0.0 < f < 1.0) to binary using successive multiplication."""\r
    steps = []\r
    frac = fractional_part\r
    bits = []\r
\r
    for bit_index in range(max_bits):\r
        multiplied = frac * 2.0\r
        int_bit = int(multiplied)\r
        new_frac = multiplied - int_bit\r
        steps.append({\r
            "step": bit_index + 1,\r
            "expression": f"{frac:.4f} * 2",\r
            "multiplied": multiplied,\r
            "int_bit": int_bit,\r
            "new_frac": new_frac\r
        })\r
        bits.append(str(int_bit))\r
        frac = new_frac\r
        if abs(frac) < 1e-9:\r
            break\r
\r
    return "0." + "".join(bits), steps\r
\r
\r
def demonstrate_all_conversions(value_dec: int):\r
    """Prints comprehensive conversion tables across Binary, Octal, Decimal, and Hex."""\r
    bin_str, bin_steps = decimal_to_base_detailed(value_dec, 2)\r
    oct_str, oct_steps = decimal_to_base_detailed(value_dec, 8)\r
    hex_str, hex_steps = decimal_to_base_detailed(value_dec, 16)\r
\r
    print("=" * 60)\r
    print(f"RADIX CONVERSION AUDIT FOR DECIMAL ({value_dec})₁₀")\r
    print("=" * 60)\r
    print(f"Binary Representation (Base 2):  ({bin_str})₂")\r
    print(f"Octal Representation (Base 8):   ({oct_str})₈")\r
    print(f"Hexadecimal (Base 16):           ({hex_str})₁₆")\r
    print("-" * 60)\r
\r
    print("\\n--- Step-by-Step Division by 2 (Decimal to Binary) ---")\r
    for s in bin_steps:\r
        print(f"{s['current']:4d} ÷ 2 = {s['quotient']:4d} | Remainder = {s['symbol']}")\r
    print(f"Read upwards: ({bin_str})₂")\r
\r
\r
if __name__ == "__main__":\r
    # Test with standard Class XI exam numbers\r
    sample_decimal = 156\r
    demonstrate_all_conversions(sample_decimal)\r
\r
    # Fractional conversion demonstration [Enrichment]\r
    print("\\n" + "=" * 60)\r
    print("[ENRICHMENT] FRACTIONAL RADIX CONVERSION: (0.625)₁₀ -> BINARY")\r
    print("=" * 60)\r
    frac_bin, frac_steps = fractional_decimal_to_binary(0.625)\r
    for s in frac_steps:\r
        print(f"Step {s['step']}: {s['expression']} = {s['multiplied']:.3f} -> Extracted Bit: {s['int_bit']}")\r
    print(f"Result: {frac_bin}₂")\r
`,T=()=>{const[l,o]=b.useState(156),r=Math.max(0,Math.floor(Number(l)||0)),i=r.toString(2),d=r.toString(8),c=r.toString(16).toUpperCase(),x=((t,s)=>{if(t===0)return[{current:0,quotient:0,rem:0}];const m=[];let n=t;for(;n>0;){const p=Math.floor(n/s),a=n%s,h=a>9?String.fromCharCode(55+a):a;m.push({current:n,quotient:p,remainder:h}),n=p}return m})(r,2);return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(B,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Multi-Base Radix Calculator & Step Visualizer"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Type any positive decimal number to dynamically view binary, octal, hexadecimal representations and step-by-step division."})]})]})}),e.jsxs("div",{className:"max-w-md",children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Decimal Number (Base 10):"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",min:"0",max:"1000000",value:l,onChange:t=>o(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-base text-white focus:outline-none focus:border-sky-500 font-mono font-bold",placeholder:"e.g. 156"}),e.jsxs("button",{onClick:()=>o(Math.floor(Math.random()*255)+1),className:"px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 shrink-0",children:[e.jsx(E,{size:14})," Random"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-sky-950/30 p-4 rounded-xl border border-sky-500/40 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-sky-400 font-semibold",children:[e.jsx("span",{children:"BINARY (Base 2)"}),e.jsx("span",{className:"font-mono text-[10px] bg-sky-500/20 px-2 py-0.5 rounded",children:"0b"})]}),e.jsxs("p",{className:"text-lg font-mono font-extrabold text-white tracking-wider break-all",children:[i," ",e.jsx("sub",{className:"text-sky-400 text-xs font-sans",children:"2"})]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block pt-1",children:["Grouping: ",i.replace(/(.{4})/g,"$1 ").trim()]})]}),e.jsxs("div",{className:"bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/40 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-emerald-400 font-semibold",children:[e.jsx("span",{children:"OCTAL (Base 8)"}),e.jsx("span",{className:"font-mono text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded",children:"0o"})]}),e.jsxs("p",{className:"text-lg font-mono font-extrabold text-white tracking-wider",children:[d," ",e.jsx("sub",{className:"text-emerald-400 text-xs font-sans",children:"8"})]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block pt-1",children:["3-bit chunks: ",d.split("").map(t=>Number(t).toString(2).padStart(3,"0")).join(" ")]})]}),e.jsxs("div",{className:"bg-purple-950/30 p-4 rounded-xl border border-purple-500/40 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-purple-400 font-semibold",children:[e.jsx("span",{children:"HEXADECIMAL (Base 16)"}),e.jsx("span",{className:"font-mono text-[10px] bg-purple-500/20 px-2 py-0.5 rounded",children:"0x"})]}),e.jsxs("p",{className:"text-lg font-mono font-extrabold text-white tracking-wider",children:[c," ",e.jsx("sub",{className:"text-purple-400 text-xs font-sans",children:"16"})]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block pt-1",children:["4-bit nibbles: ",c.split("").map(t=>parseInt(t,16).toString(2).padStart(4,"0")).join(" ")]})]})]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2",children:[e.jsx(S,{size:15,className:"text-sky-400"})," Repeated Division by 2 (Decimal ",r," → Binary)"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3",children:"Division Expression"}),e.jsx("th",{className:"py-2 px-3",children:"Quotient"}),e.jsx("th",{className:"py-2 px-3 text-sky-400 font-bold",children:"Remainder"}),e.jsx("th",{className:"py-2 px-3",children:"Significance"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:x.map((t,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"py-2 px-3",children:[t.current," ÷ 2"]}),e.jsx("td",{className:"py-2 px-3",children:t.quotient}),e.jsx("td",{className:"py-2 px-3 font-bold text-sky-300",children:t.remainder}),e.jsx("td",{className:"py-2 px-3 text-slate-400 text-[11px]",children:s===0?"LSB (Least Significant Bit)":s===x.length-1?"MSB (Most Significant Bit)":`Bit position ${s}`})]},s))})]})}),e.jsxs("div",{className:"bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center justify-between",children:[e.jsxs("span",{children:["Read remainders from ",e.jsx("strong",{children:"BOTTOM (MSB) to TOP (LSB)"}),":"]}),e.jsxs("span",{className:"font-mono font-bold text-sky-400",children:["(",i,")₂"]})]})]})]})};function U(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · 10 Marks"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Module 002_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core + Enrichment"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Number Systems & Radix Conversions: Binary, Octal, Decimal & Hexadecimal"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master the mathematical foundations of digital data representation. Learn rigorous integer radix conversions, 3-bit octal / 4-bit hexadecimal shortcuts, and fractional base transformations."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(j,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white tracking-tight",children:"In Simple Words: Counting in Different Currencies"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Understanding positional weights and number system bases"})]})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Humans count in ",e.jsx("strong",{children:"Decimal (Base 10)"})," because we evolved with 10 fingers. Computers, however, operate using electronic transistors that only understand two physical states: ",e.jsx("strong",{children:"ON (1)"})," and ",e.jsx("strong",{children:"OFF (0)"}),". Octal (Base 8) and Hexadecimal (Base 16) are convenient shorthand dialects designed for humans to write long binary bitstreams cleanly."]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(T,{})}),e.jsxs("div",{className:"bg-slate-900/60 p-6 rounded-2xl border border-purple-500/30 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40",children:"Enrichment / Advanced Concept"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Fractional Radix Conversions (Successive Multiplication)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-sky-400 text-sm",children:"Fractional Decimal to Binary"}),e.jsxs("p",{className:"leading-relaxed",children:["To convert $(0.625)_",10,"$ to binary, multiply by 2 successively and extract the integer portion:"]}),e.jsxs("div",{className:"font-mono bg-slate-900 p-2 rounded text-[11px] space-y-0.5",children:[e.jsxs("div",{children:["0.625 × 2 = 1.250 → Extracted: ",e.jsx("strong",{children:"1"})]}),e.jsxs("div",{children:["0.250 × 2 = 0.500 → Extracted: ",e.jsx("strong",{children:"0"})]}),e.jsxs("div",{children:["0.500 × 2 = 1.000 → Extracted: ",e.jsx("strong",{children:"1"})," (Done)"]}),e.jsx("div",{className:"text-emerald-400 pt-1",children:"Read Top-to-Bottom: (0.101)₂"})]})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Fractional Binary to Decimal"}),e.jsxs("p",{className:"leading-relaxed",children:["Multiply digits following the radix point by decreasing negative powers of 2 ($2^",-1,"=0.5$, $2^",-2,"=0.25$, $2^",-3,"=0.125$):"]}),e.jsxs("div",{className:"font-mono bg-slate-900 p-2 rounded text-[11px] space-y-0.5",children:[e.jsx("div",{children:"(0.101)₂ = 1×2⁻¹ + 0×2⁻² + 1×2⁻³"}),e.jsx("div",{children:"= 0.5 + 0 + 0.125"}),e.jsx("div",{className:"text-sky-400 pt-1",children:"= (0.625)₁₀"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(N,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Python Laboratory: Automated Radix Conversion Suite"}),e.jsx("p",{className:"text-xs text-slate-400",children:"A Python script executing integer repeated division and fractional successive multiplication algorithms."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-2xl",children:e.jsx(y,{fileModule:O,title:"radix_converter_suite.py – Radix Mathematics & Fractional Engine",highlightLines:[12,24,38,55]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(v,{size:18})}),e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Real-World Case Studies: Number Systems in Engineering"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-sky-400",children:"1. HTML/CSS Hex Color Codes"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Colors are represented by 24-bit RGB values. `#38BDF8` breaks into three 8-bit hex pairs: Red `38` (56), Green `BD` (189), and Blue `F8` (248)."})]}),e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400",children:"2. Unix File Permissions (Octal)"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Linux permissions (`chmod 755`) use 3-digit octal. `7` = `111` (Read, Write, Execute), `5` = `101` (Read, Execute)."})]}),e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-purple-400",children:"3. IPv6 & MAC Addresses"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Hardware Network MAC addresses (`00:1A:2B:3C:4D:5E`) utilize 48-bit hexadecimal strings to uniquely identify network interface cards."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-300 flex items-center gap-2",children:[e.jsx(w,{size:16})," Common Examination Pitfalls"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Reading Remainders Downwards:"})," When converting decimal to binary/octal/hex, write remainders from ",e.jsx("strong",{children:"bottom to top"})," (MSB to LSB)."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Invalid Digits in Base:"})," Writing digit 8 in octal or G in hexadecimal. Octal digits are only 0–7; Hex digits are 0–9 and A–F."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx(A,{size:16})," Best Practices & Answering Strategy"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Use 3-bit / 4-bit Grouping:"})," Convert Octal ↔ Binary in 3-bit chunks; Hexadecimal ↔ Binary in 4-bit nibbles."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Pad with Leading Zeros:"})," Always pad integer binary groupings on the left (e.g. `11` → `0011` for hex or `011` for octal)."]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(C,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Exam Preparation & Conceptual Self-Assessment (25 Questions)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Test your mastery of number system conversions, binary math, and hexadecimal representation."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(g,{questions:R})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(u,{}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(f,{content:_,filename:"002_001_number_systems_conversion_notes.txt"})})]})]})})}export{U as default};

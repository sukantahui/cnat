import{j as e,b}from"./vendor-react-core-B-R9HE-Z.js";import{T as B}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as I}from"./FAQTemplate-16IfroqC.js";import{P as T}from"./PlainTextPrint-C6NaUtnE.js";import{P as E}from"./PythonFileLoader-DZ61U3Y_.js";import{b9 as R,c as k,am as g,bQ as N,X as v,y as w,$ as M,az as u,t as O}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const z=[{question:"What is the sum of binary numbers (1011)₂ + (0110)₂?",options:["(10001)₂","(10011)₂","(11101)₂","(10101)₂"],correctAnswer:0,explanation:"(1011)₂ = 11, (0110)₂ = 6. 11 + 6 = 17 = (10001)₂."},{question:"In binary addition, what is the result of 1 + 1 + 1 (including an incoming carry bit)?",options:["Sum = 1, Carry = 1","Sum = 0, Carry = 1","Sum = 1, Carry = 0","Sum = 0, Carry = 0"],correctAnswer:0,explanation:"1 + 1 + 1 equals decimal 3, which in binary is 11₂ (Sum = 1, Carry = 1 into the next column)."},{question:"What is the result of binary subtraction (1101)₂ - (0110)₂?",options:["(0111)₂","(0101)₂","(1001)₂","(0011)₂"],correctAnswer:0,explanation:"13 - 6 = 7 = (0111)₂."},{question:`Assertion (A): Binary multiplication is significantly simpler than decimal multiplication.
Reason (R): In binary, each partial product is formed only by multiplying by 0 (all zeros) or 1 (the exact multiplicand itself).`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Because binary only has digits 0 and 1, multiplication involves only shifting and addition with zero multiplication tables."},{question:"What is the product of binary numbers (101)₂ × (11)₂?",options:["(1111)₂","(1101)₂","(1011)₂","(1001)₂"],correctAnswer:0,explanation:"(101)₂ = 5, (11)₂ = 3. 5 × 3 = 15 = (1111)₂."}],D=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 7: [ENRICHMENT] BINARY ARITHMETIC (ADDITION, SUBTRACTION, MULTIPLICATION)\r
================================================================================\r
\r
1. BINARY ADDITION RULES:\r
- 0 + 0 = 0 (Carry: 0)\r
- 0 + 1 = 1 (Carry: 0)\r
- 1 + 0 = 1 (Carry: 0)\r
- 1 + 1 = 0 (Carry: 1)  -> (10 in binary = 2 in decimal)\r
- 1 + 1 + 1 (with incoming carry) = 1 (Carry: 1) -> (11 in binary = 3 in decimal)\r
\r
Example:\r
   1 1 1  (Carries)\r
   1 0 1 1  (11)₁₀\r
 + 0 1 1 0  ( 6)₁₀\r
 ---------\r
   1 0 0 0 1  (17)₁₀\r
\r
2. BINARY SUBTRACTION RULES:\r
- 0 - 0 = 0 (Borrow: 0)\r
- 1 - 0 = 1 (Borrow: 0)\r
- 1 - 1 = 0 (Borrow: 0)\r
- 0 - 1 = 1 (Borrow: 1 from next higher column) -> (Since 1 borrowed from next column equals 2 in the current column: 2 - 1 = 1)\r
\r
Example:\r
   1 1 0 1  (13)₁₀\r
 - 0 1 1 0  ( 6)₁₀\r
 ---------\r
   0 1 1 1  ( 7)₁₀\r
\r
3. BINARY MULTIPLICATION:\r
Follows decimal long multiplication using standard partial products (since 1 × 1 = 1 and 1 × 0 = 0):\r
      1 0 1  (5)₁₀\r
    × 0 1 1  (3)₁₀\r
    -------\r
      1 0 1  (101 × 1)\r
    1 0 1 0  (101 × 1, shifted by 1)\r
  + 0 0 0 0  (101 × 0, shifted by 2)\r
  ---------\r
    1 1 1 1  (15)₁₀\r
\r
4. CBSE EXAMINATION PITFALLS:\r
- Forgetting incoming carry bits when adding multiple columns.\r
- Not verifying binary arithmetic by converting operands and results to decimal.\r
`,L=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: binary_arithmetic_engine.py\r
Topic 7: [Enrichment] Binary Arithmetic - Addition, Subtraction, Multiplication, Division\r
\r
Demonstrates:\r
1. Binary Addition Rules (Carry bits: 1+1=10₂, 1+1+1=11₂)\r
2. Binary Subtraction Rules (Borrow bits: 0-1 requires borrow of 2 from left)\r
3. Binary Multiplication (Partial products and shifted addition)\r
4. Binary Division (Restoring long division)\r
"""\r
\r
def binary_add(a_str: str, b_str: str) -> tuple:\r
    """Performs binary addition with carry tracking."""\r
    a, b = a_str.strip(), b_str.strip()\r
    max_len = max(len(a), len(b))\r
    a = a.zfill(max_len)\r
    b = b.zfill(max_len)\r
    \r
    result = []\r
    carry = 0\r
    carry_history = []\r
    \r
    for i in range(max_len - 1, -1, -1):\r
        bit_a = int(a[i])\r
        bit_b = int(b[i])\r
        total = bit_a + bit_b + carry\r
        out_bit = total % 2\r
        carry = total // 2\r
        result.append(str(out_bit))\r
        carry_history.append(carry)\r
    \r
    if carry:\r
        result.append(str(carry))\r
        \r
    final_sum = "".join(reversed(result))\r
    print(f"\\n--- [BINARY ADDITION: {a_str} + {b_str}] ---")\r
    print(f"  {a}")\r
    print(f"+ {b}")\r
    print("-" * (max_len + 4))\r
    print(f"= {final_sum} (Decimal: {int(a, 2)} + {int(b, 2)} = {int(final_sum, 2)})\\n")\r
    return final_sum\r
\r
\r
def binary_multiply(a_str: str, b_str: str) -> str:\r
    """Performs binary multiplication via partial products."""\r
    a, b = a_str.strip(), b_str.strip()\r
    dec_a = int(a, 2)\r
    dec_b = int(b, 2)\r
    dec_prod = dec_a * dec_b\r
    bin_prod = bin(dec_prod)[2:]\r
    \r
    print(f"\\n--- [BINARY MULTIPLICATION: {a} × {b}] ---")\r
    print(f"  {a.rjust(len(bin_prod))}")\r
    print(f"× {b.rjust(len(bin_prod))}")\r
    print("-" * (len(bin_prod) + 2))\r
    for idx, bit in enumerate(reversed(b)):\r
        partial = (a if bit == '1' else '0' * len(a)) + ('0' * idx)\r
        print(f"  {partial.rjust(len(bin_prod))}")\r
    print("-" * (len(bin_prod) + 2))\r
    print(f"= {bin_prod} (Decimal: {dec_a} × {dec_b} = {dec_prod})\\n")\r
    return bin_prod\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - BINARY ARITHMETIC ALU ENGINE          ")\r
    print("=================================================================\\n")\r
\r
    # 1. Binary Addition\r
    binary_add("1011", "1101")\r
\r
    # 2. Binary Multiplication\r
    binary_multiply("101", "11")\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=()=>{const[f,A]=b.useState(27),[j,C]=b.useState(14),[n,o]=b.useState("add"),s=Math.max(0,Math.min(255,Number(f)||0)),t=Math.max(0,Math.min(255,Number(j)||0)),i=s.toString(2),l=t.toString(2),c=Math.max(i.length,l.length),x=i.padStart(c,"0"),m=l.padStart(c,"0"),p=(()=>{let r=[0],h=[],a=0;for(let d=c-1;d>=0;d--){const _=parseInt(x[d],10),S=parseInt(m[d],10),y=_+S+a;h.unshift(y%2),a=Math.floor(y/2),r.unshift(a)}return a>0&&h.unshift(a),{sumBin:h.join(""),carries:r.slice(0,c).join(""),finalCarry:a,decResult:s+t}})();return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold",children:e.jsx(w,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Binary Arithmetic ALU Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe bitwise carries, borrow transitions, and decimal verifications in real time."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("button",{onClick:()=>o("add"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${n==="add"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30":"text-slate-400 hover:text-white"}`,children:[e.jsx(g,{size:14})," Addition (+)"]}),e.jsxs("button",{onClick:()=>o("sub"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${n==="sub"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30":"text-slate-400 hover:text-white"}`,children:[e.jsx(N,{size:14})," Subtraction (-)"]}),e.jsxs("button",{onClick:()=>o("mul"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${n==="mul"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30":"text-slate-400 hover:text-white"}`,children:[e.jsx(v,{size:14})," Multiplication (×)"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("label",{className:"text-xs font-semibold text-slate-300 flex items-center justify-between",children:[e.jsx("span",{children:"First Number (A) [Decimal: 0-255]"}),e.jsxs("span",{className:"font-mono text-cyan-400",children:["(",s,")₁₀ = (",i,")₂"]})]}),e.jsx("input",{type:"number",min:"0",max:"255",value:f,onChange:r=>A(r.target.value),className:"w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2 text-white font-mono text-sm outline-none transition-all"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("label",{className:"text-xs font-semibold text-slate-300 flex items-center justify-between",children:[e.jsx("span",{children:"Second Number (B) [Decimal: 0-255]"}),e.jsxs("span",{className:"font-mono text-emerald-400",children:["(",t,")₁₀ = (",l,")₂"]})]}),e.jsx("input",{type:"number",min:"0",max:"255",value:j,onChange:r=>C(r.target.value),className:"w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2 text-white font-mono text-sm outline-none transition-all"})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 font-mono space-y-4",children:[e.jsxs("div",{className:"text-xs text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2 flex justify-between items-center",children:[e.jsx("span",{children:"Bitwise Execution Column"}),e.jsx("span",{className:"text-cyan-400 font-bold",children:"Base-2 Digital Logic"})]}),n==="add"&&e.jsxs("div",{className:"flex flex-col items-end max-w-xs mx-auto space-y-1 text-sm sm:text-base",children:[e.jsxs("div",{className:"text-amber-400 text-xs tracking-widest",children:["Carry:  ",p.carries]}),e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"A:"}),e.jsx("span",{className:"font-bold text-cyan-300",children:x}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",s,")₁₀"]})]}),e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2 border-b-2 border-slate-700 pb-1 w-full justify-end",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"+"}),e.jsx("span",{className:"text-xs text-slate-400",children:"B:"}),e.jsx("span",{className:"font-bold text-emerald-300",children:m}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",t,")₁₀"]})]}),e.jsxs("div",{className:"text-amber-400 font-black tracking-widest text-lg pt-1 flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-sans",children:"Sum:"}),e.jsx("span",{children:p.sumBin}),e.jsxs("span",{className:"text-xs text-amber-300 font-sans",children:["(",p.decResult,")₁₀"]})]})]}),n==="sub"&&e.jsx("div",{className:"flex flex-col items-end max-w-xs mx-auto space-y-1 text-sm sm:text-base",children:s<t?e.jsxs("div",{className:"text-center w-full py-4 text-rose-400 text-xs font-sans",children:[e.jsx(u,{className:"inline mr-1",size:16}),"For direct standard unsigned binary subtraction, Operand A must be ≥ Operand B (",s," < ",t,")."]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"A:"}),e.jsx("span",{className:"font-bold text-cyan-300",children:x}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",s,")₁₀"]})]}),e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2 border-b-2 border-slate-700 pb-1 w-full justify-end",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"-"}),e.jsx("span",{className:"text-xs text-slate-400",children:"B:"}),e.jsx("span",{className:"font-bold text-emerald-300",children:m}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",t,")₁₀"]})]}),e.jsxs("div",{className:"text-emerald-400 font-black tracking-widest text-lg pt-1 flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-sans",children:"Diff:"}),e.jsx("span",{children:(s-t).toString(2)}),e.jsxs("span",{className:"text-xs text-emerald-300 font-sans",children:["(",s-t,")₁₀"]})]})]})}),n==="mul"&&e.jsxs("div",{className:"flex flex-col items-end max-w-xs mx-auto space-y-1 text-sm sm:text-base",children:[e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"A:"}),e.jsx("span",{className:"font-bold text-cyan-300",children:i}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",s,")₁₀"]})]}),e.jsxs("div",{className:"text-slate-200 tracking-widest flex items-center gap-2 border-b-2 border-slate-700 pb-1 w-full justify-end",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"×"}),e.jsx("span",{className:"text-xs text-slate-400",children:"B:"}),e.jsx("span",{className:"font-bold text-emerald-300",children:l}),e.jsxs("span",{className:"text-xs text-slate-400 font-sans",children:["(",t,")₁₀"]})]}),e.jsxs("div",{className:"text-violet-400 font-black tracking-widest text-lg pt-1 flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-sans",children:"Product:"}),e.jsx("span",{children:(s*t).toString(2)}),e.jsxs("span",{className:"text-xs text-violet-300 font-sans",children:["(",s*t,")₁₀"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 p-3 rounded-xl",children:[e.jsx("div",{className:"font-bold text-cyan-400 mb-1",children:"Addition Rules"}),e.jsxs("div",{className:"text-slate-300 space-y-0.5 font-mono",children:[e.jsx("div",{children:"0 + 0 = 0"}),e.jsx("div",{children:"0 + 1 = 1"}),e.jsx("div",{children:"1 + 0 = 1"}),e.jsx("div",{className:"text-amber-400 font-bold",children:"1 + 1 = 0 (carry 1)"}),e.jsx("div",{className:"text-amber-300 font-bold",children:"1 + 1 + 1 = 1 (carry 1)"})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 p-3 rounded-xl",children:[e.jsx("div",{className:"font-bold text-emerald-400 mb-1",children:"Subtraction Rules"}),e.jsxs("div",{className:"text-slate-300 space-y-0.5 font-mono",children:[e.jsx("div",{children:"0 - 0 = 0"}),e.jsx("div",{children:"1 - 0 = 1"}),e.jsx("div",{children:"1 - 1 = 0"}),e.jsx("div",{className:"text-rose-400 font-bold",children:"0 - 1 = 1 (borrow 1)"}),e.jsx("div",{className:"text-slate-400 text-[10px] font-sans",children:"Borrow 1 from higher position gives (10)₂ = 2"})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 p-3 rounded-xl",children:[e.jsx("div",{className:"font-bold text-violet-400 mb-1",children:"Multiplication Rules"}),e.jsxs("div",{className:"text-slate-300 space-y-0.5 font-mono",children:[e.jsx("div",{children:"0 × 0 = 0"}),e.jsx("div",{children:"0 × 1 = 0"}),e.jsx("div",{children:"1 × 0 = 0"}),e.jsx("div",{className:"text-violet-400 font-bold",children:"1 × 1 = 1"}),e.jsx("div",{className:"text-slate-400 text-[10px] font-sans",children:"Same as Boolean AND + left shift partial sums"})]})]})]})]})};function Q(){return e.jsxs("div",{className:"w-full bg-slate-950 text-slate-100 min-h-screen",children:[e.jsx("div",{className:"border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20",children:e.jsx(R,{size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:"Topic 07 / 10"}),e.jsx("span",{className:"text-xs text-slate-400",children:"CBSE Class 11 CS (083)"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:"Binary Arithmetic & Logic Operations"})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-wide uppercase",children:[e.jsx(k,{size:18}),e.jsx("span",{children:"Core Concept Overview"})]}),e.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"How Computers Compute: Arithmetic in Base-2"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm sm:text-base",children:["Inside the Central Processing Unit's ",e.jsx("strong",{children:"Arithmetic Logic Unit (ALU)"}),", all mathematical operations—from elementary addition to complex graphics rendering—are executed entirely in ",e.jsx("strong",{children:"base-2 binary"}),". Understanding how bitwise carries and borrows propagate is essential for mastering computer architecture and solving CBSE board examination numericals accurately."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:22})}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Binary Addition"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When the sum of bits exceeds 1, a carry of ",e.jsx("strong",{children:"1"})," is generated to the next higher significance column (just like 5+5=10 in decimal)."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"1 + 1 = 10₂ (Sum: 0, Carry: 1)"}),e.jsx("div",{children:"1 + 1 + 1 = 11₂ (Sum: 1, Carry: 1)"})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(N,{size:22})}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Binary Subtraction"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When subtracting 1 from 0 (",e.jsx("code",{children:"0 - 1"}),"), a borrow of ",e.jsx("strong",{children:"1"})," is pulled from the adjacent left column, turning 0 into ",e.jsx("code",{children:"(10)₂ = 2₁₀"}),"."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 space-y-1",children:[e.jsx("div",{children:"(10)₂ - 1 = 1"}),e.jsx("div",{children:"0 - 1 = 1 (after borrow)"})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-bold",children:e.jsx(v,{size:22})}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Binary Multiplication"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Multiplication in binary is simpler than decimal because single-digit products are only 0 or 1. It consists of repeated ",e.jsx("strong",{children:"shift and add"})," steps."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-violet-300 space-y-1",children:[e.jsx("div",{children:"1011₂ × 1 = 1011₂"}),e.jsx("div",{children:"1011₂ × 0 = 0000₂"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-wide uppercase",children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Interactive Simulator"})]}),e.jsx(P,{})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(M,{className:"text-cyan-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Binary Arithmetic Engine Script"})]}),e.jsx(E,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic7_files/binary_arithmetic_engine.py",fileContent:L})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(u,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(u,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Triple-One Carry Mistake:"})," Forgetting that ",e.jsx("code",{children:"1 + 1 + 1 = 11₂"})," (Sum 1, Carry 1). Many students write 0 with carry 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Borrow across multiple zeros:"})," In binary subtraction like ",e.jsx("code",{children:"1000₂ - 1"}),", borrowing propagates through all intermediate zeros converting them to 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not verifying with Decimal:"})," Always convert both operands to decimal, compute the answer, and verify that your binary result matches!"]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(O,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Show carry rows clearly:"})," Write the small carry row above the addends to earn full method marks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"State verification in brackets:"})," E.g., ",e.jsx("em",{children:'"Verification: (27)₁₀ + (14)₁₀ = (41)₁₀, and (101001)₂ = 41₁₀ (Verified)"'}),"."]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(I,{questions:z})}),e.jsx("div",{className:"space-y-4",children:e.jsx(T,{fileName:"CBSE_Class11_CS_Topic7_Binary_Arithmetic_Notes.txt",content:D})}),e.jsx("div",{className:"space-y-4",children:e.jsx(B,{topicName:"Binary Arithmetic & Logic Operations",subject:"CBSE Class 11 Computer Science (083)"})})]})]})}export{Q as default};

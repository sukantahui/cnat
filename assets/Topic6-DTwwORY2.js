import{j as e,b as g}from"./vendor-react-core-B-R9HE-Z.js";import{T as y}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as S}from"./FAQTemplate-16IfroqC.js";import{P as C}from"./PlainTextPrint-C6NaUtnE.js";import{P as T}from"./PythonFileLoader-DZ61U3Y_.js";import{c as _,d as R,$ as O,az as f,t as E,y as A,R as I}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const B=[{question:"What algorithm is used to convert the fractional part of a decimal number into another base?",options:["Successive Division","Successive Multiplication by the target base","Bit-reversal permutation","Complement addition"],correctAnswer:1,explanation:"Fractional parts are multiplied repeatedly by the target base, and the generated integer parts are recorded from top to bottom."},{question:"What is the binary representation of decimal fraction (0.375)₁₀?",options:["(0.011)₂","(0.101)₂","(0.110)₂","(0.001)₂"],correctAnswer:0,explanation:"0.375 × 2 = 0.75 (int 0); 0.75 × 2 = 1.5 (int 1); 0.5 × 2 = 1.0 (int 1). Reading top to bottom gives (0.011)₂."},{question:"What is the decimal equivalent of binary fraction (0.11)₂?",options:["(0.75)₁₀","(0.50)₁₀","(0.25)₁₀","(0.60)₁₀"],correctAnswer:0,explanation:"(1 × 2⁻¹) + (1 × 2⁻²) = 0.5 + 0.25 = 0.75."},{question:`Assertion (A): In fractional radix conversion, integer parts are read from top to bottom (first to last).
Reason (R): The first multiplication product yields the digit with the highest fractional positional weight (Base⁻¹ = 1/Base).`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"The first integer generated corresponds to the 1/Base column (most significant fractional place value), so it must be written first directly after the radix point."},{question:"What is the octal equivalent of decimal fraction (0.125)₁₀?",options:["(0.1)₈","(0.2)₈","(0.01)₈","(0.05)₈"],correctAnswer:0,explanation:"0.125 × 8 = 1.000 (integer 1, remainder 0). Result is (0.1)₈."}],M=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 002_001 NUMBER SYSTEMS AND BASE CONVERSIONS\r
TOPIC 6: [ENRICHMENT] FRACTIONAL RADIX CONVERSIONS\r
================================================================================\r
\r
1. THE SUCCESSIVE MULTIPLICATION ALGORITHM (FRACTIONAL PART):\r
To convert a fractional decimal number (e.g. 0.625) to another base 'R':\r
- Step 1: Multiply the fractional part by the target base R.\r
- Step 2: Record the integer part of the product (the carry digit).\r
- Step 3: Take the remaining fractional part and repeat multiplication by R.\r
- Step 4: Continue until the fractional part becomes 0.000 or desired precision is achieved.\r
- Step 5: Read the recorded integer digits from TOP to BOTTOM (MSB to LSB).\r
\r
2. WORKED EXAMPLES:\r
\r
Example 1: Convert (0.625)₁₀ to Binary (Base 2)\r
0.625 × 2 = 1.250 -> Integer: 1 (MSB) , Remaining Fraction: 0.250\r
0.250 × 2 = 0.500 -> Integer: 0       , Remaining Fraction: 0.500\r
0.500 × 2 = 1.000 -> Integer: 1 (LSB) , Remaining Fraction: 0.000 (Finished)\r
Reading top to bottom: (0.625)₁₀ = (0.101)₂\r
\r
Example 2: Convert (0.625)₁₀ to Octal (Base 8)\r
0.625 × 8 = 5.000 -> Integer: 5 (Finished)\r
Reading top to bottom: (0.625)₁₀ = (0.5)₈\r
\r
Example 3: Convert (0.1011)₂ to Decimal\r
= (1 × 2⁻¹) + (0 × 2⁻²) + (1 × 2⁻³) + (1 × 2⁻⁴)\r
= (1 × 0.5) + (0 × 0.25) + (1 × 0.125) + (1 × 0.0625)\r
= 0.5 + 0 + 0.125 + 0.0625\r
= (0.6875)₁₀\r
\r
3. COMBINED INTEGER + FRACTION CONVERSION:\r
For numbers with both integer and fractional components (e.g. 25.625):\r
- Convert the integer part (25) using Successive Division (bottom to top).\r
- Convert the fractional part (0.625) using Successive Multiplication (top to bottom).\r
- Combine both with the radix point: (25.625)₁₀ = (11001.101)₂.\r
\r
4. CBSE EXAMINATION PITFALLS & TIPS:\r
- Crucial Distinction: Integers are converted by DIVISION reading BOTTOM TO TOP; Fractions are converted by MULTIPLICATION reading TOP TO BOTTOM.\r
- Never mix up the reading directions!\r
`,w=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Number Systems & Radix Conversion Algorithms\r
File: fractional_radix_converter.py\r
Topic 6: [Enrichment] Fractional Radix Conversions (Successive Multiplication Method)\r
\r
Demonstrates:\r
1. Fractional Decimal to Binary, Octal, and Hexadecimal using Successive Multiplication\r
2. Recording integer carries from TOP to BOTTOM (MSB to LSB)\r
3. Fractional Base to Decimal expansion using negative powers (b^-1, b^-2, ...)\r
"""\r
\r
def decimal_fraction_to_base(frac_val: float, base: int, precision: int = 6) -> tuple:\r
    """\r
    Converts a fractional decimal number (0.xxx) into a target base (2, 8, 16)\r
    using successive multiplication by the base, recording integer parts from top to bottom.\r
    """\r
    hex_symbols = "0123456789ABCDEF"\r
    cur_frac = frac_val - int(frac_val)\r
    digits = []\r
    steps = []\r
    \r
    print(f"\\n--- [FRACTIONAL DECIMAL TO BASE-{base} (SUCCESSIVE MULTIPLICATION)] ---")\r
    print(f"Converting 0.{str(frac_val).split('.')[1] if '.' in str(frac_val) else '0'} to Base {base}:\\n")\r
    print(f"{'Multiplication':<20} | {'Product':<10} | {'Integer Part':<14} | {'Next Fraction'}")\r
    print("-" * 65)\r
\r
    for i in range(precision):\r
        prod = cur_frac * base\r
        int_part = int(prod)\r
        next_frac = prod - int_part\r
        symbol = hex_symbols[int_part]\r
        digits.append(symbol)\r
        \r
        step_text = f"{cur_frac:.4f} × {base}"\r
        steps.append({"step": step_text, "product": prod, "integer": int_part, "symbol": symbol, "next_frac": next_frac})\r
        print(f"{step_text:<20} | {prod:<10.4f} | {symbol:<14} | {next_frac:.4f}")\r
        \r
        cur_frac = next_frac\r
        if cur_frac == 0:\r
            break\r
\r
    result_fraction = "0." + "".join(digits)\r
    print("-" * 65)\r
    print(f"[+] Read integer parts from TOP to BOTTOM:")\r
    print(f"    (0.{str(frac_val).split('.')[1]})₁₀ = ({result_fraction})₍{base}₎\\n")\r
    return result_fraction, steps\r
\r
\r
def fractional_base_to_decimal(frac_str: str, base: int) -> float:\r
    """Converts a fractional base string (e.g. '0.1011') to decimal using negative powers."""\r
    clean = frac_str.replace("0.", "").upper()\r
    hex_map = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15}\r
    \r
    total = 0.0\r
    print(f"\\n--- [FRACTIONAL BASE-{base} TO DECIMAL (NEGATIVE POWERS)] ---")\r
    for idx, ch in enumerate(clean, start=1):\r
        val = hex_map.get(ch, 0)\r
        weight = base ** (-idx)\r
        term = val * weight\r
        total += term\r
        print(f"Digit '{ch}' (Value: {val}) × {base}^(-{idx}) ({weight:.6f}) = {term:.6f}")\r
    \r
    print(f"[+] ({frac_str})₍{base}₎ = ({total:.6f})₁₀\\n")\r
    return total\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - FRACTIONAL RADIX CONVERTER SUITE      ")\r
    print("=================================================================\\n")\r
\r
    # 1. Decimal Fraction to Binary (0.625)\r
    decimal_fraction_to_base(0.625, 2)\r
\r
    # 2. Decimal Fraction to Octal (0.625)\r
    decimal_fraction_to_base(0.625, 8)\r
\r
    # 3. Binary Fraction to Decimal (0.101)\r
    fractional_base_to_decimal("0.101", 2)\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=()=>{const[a,i]=g.useState(.625),[s,u]=g.useState(2),N="0123456789ABCDEF",o=Math.abs(Number(a)||0),c=o-Math.floor(o),d=((t,r,v=6)=>{const p=[];let n=t;for(let m=0;m<v;m++){const l=n*r,b=Math.floor(l),h=parseFloat((l-b).toFixed(6)),j=N[b];if(p.push({step:`${n.toFixed(4)} × ${r}`,prod:l.toFixed(4),intPart:j,nextFrac:h.toFixed(4)}),n=h,n===0)break}return p})(c,s),x="0."+d.map(t=>t.intPart).join("");return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(A,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Fractional Successive Multiplication Simulator (Enrichment)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Multiply fractional decimals repeatedly by the target base and record generated integer carries from top to bottom."})]})]}),e.jsx("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[{base:2,label:"Base 2 (Binary)"},{base:8,label:"Base 8 (Octal)"},{base:16,label:"Base 16 (Hex)"}].map(t=>e.jsx("button",{onClick:()=>u(t.base),className:`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${s===t.base?"bg-amber-500 text-slate-950 font-bold shadow":"text-slate-400 hover:text-white"}`,children:t.label},t.base))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-start",children:[e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Enter Fractional Decimal (0.xxx):"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",step:"0.001",min:"0",max:"0.999",value:a,onChange:t=>i(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-base text-white focus:outline-none focus:border-amber-500 font-mono font-bold",placeholder:"e.g. 0.625"}),e.jsxs("button",{onClick:()=>i((Math.random()*.9+.05).toFixed(3)),className:"px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 shrink-0 cursor-pointer",children:[e.jsx(I,{size:14})," Random"]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-amber-400 uppercase tracking-wider block",children:"Calculated Fractional Output:"}),e.jsxs("p",{className:"text-2xl font-mono font-extrabold text-white tracking-wider",children:["(",x,")",e.jsx("sub",{className:"text-amber-400 text-xs font-sans",children:s})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800",children:["(0.",P(c),")₁₀ = (",x,")₍",s,"₎"]})]}),e.jsxs("div",{className:"bg-amber-950/20 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-300 space-y-1",children:[e.jsx("span",{className:"font-bold block",children:"↓ Reading Direction: TOP TO BOTTOM"}),e.jsx("p",{className:"text-slate-400 text-[11px]",children:"Unlike integer division (bottom to top), fractional multiplication integers are read from top (MSB) to bottom (LSB)."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block border-b border-slate-800 pb-2",children:"Multiplication Step Table"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left font-mono text-xs text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Operation"}),e.jsx("th",{className:"p-2",children:"Product"}),e.jsx("th",{className:"p-2 text-amber-400",children:"Integer Part"}),e.jsx("th",{className:"p-2 text-slate-400",children:"Remaining Frac"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:d.map((t,r)=>e.jsxs("tr",{className:r===0?"bg-amber-950/20 font-bold":"",children:[e.jsx("td",{className:"p-2",children:t.step}),e.jsx("td",{className:"p-2",children:t.prod}),e.jsxs("td",{className:"p-2 text-amber-300 font-bold",children:[t.intPart," ",r===0?"(MSB)":""]}),e.jsx("td",{className:"p-2 text-slate-400",children:t.nextFrac})]},r))})]})})]})]})]})};function P(a){return a.toString().split(".")[1]||"0"}function G(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 002_001"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"Enrichment & Advanced"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"[Enrichment] Fractional Radix Conversions (Successive Multiplication Method)"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Explore successive multiplication algorithms for fractional decimals and negative positional weight expansions for non-integer digital numbers."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(_,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Liquid Measuring Cylinder Sub-divisions"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Converting fractions is like measuring fractions of a liter using half-liter (2⁻¹ = 0.5), quarter-liter (2⁻² = 0.25), and eighth-liter (2⁻³ = 0.125) measuring beakers. Multiplying by 2 reveals whether the remaining liquid fills a full beaker (generating integer 1) or not (generating integer 0)."})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(R,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Algorithm & Negative Weight Expansion"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-amber-400",children:"Successive Multiplication (Dec → Base R):"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-xs text-slate-300",children:[e.jsx("li",{children:"Multiply fractional part by target base R."}),e.jsx("li",{children:"Record the integer part generated."}),e.jsx("li",{children:"Multiply remaining fraction by R until zero or desired precision."}),e.jsx("li",{children:e.jsx("strong",{children:"Read integer parts from TOP to BOTTOM."})})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"Negative Weight Expansion (Base R → Dec):"}),e.jsx("p",{className:"font-mono text-xs text-slate-200",children:"(0.d₁ d₂ d₃)ᵣ = (d₁ × R⁻¹) + (d₂ × R⁻²) + (d₃ × R⁻³)"}),e.jsx("p",{className:"text-xs text-slate-400 pt-1",children:"For Binary: 2⁻¹ = 0.5, 2⁻² = 0.25, 2⁻³ = 0.125, 2⁻⁴ = 0.0625."})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(F,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(O,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Fractional Radix Converter Script"})]}),e.jsx(T,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/002_001_number-systems-and-base-conversions/topic6_files/fractional_radix_converter.py",fileContent:w})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(f,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(f,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reversing reading direction:"})," Remember: Integers are read bottom to top; Fractions are read top to bottom."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiplying the whole number:"})," Only multiply the digits to the RIGHT of the decimal point."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(E,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Show separate integer and fraction parts:"})," Solve integer part via division, solve fraction via multiplication, and join with decimal point."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(S,{questions:B})}),e.jsx("div",{className:"space-y-4",children:e.jsx(C,{fileName:"CBSE_Class11_CS_Topic6_Fractional_Conversions_Notes.txt",content:M})}),e.jsx("div",{className:"space-y-4",children:e.jsx(y,{topicName:"Fractional Radix Conversions (Enrichment)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{G as default};

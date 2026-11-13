import{j as e,b as d}from"./vendor-react-core-B-R9HE-Z.js";import{T as u}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as x}from"./FAQTemplate-16IfroqC.js";import{P as m}from"./PlainTextPrint-C6NaUtnE.js";import{P as b}from"./PythonFileLoader-DZ61U3Y_.js";import{c as g,d as N,br as f,L as B,az as v,t as w,a7 as O,Z as c}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const y=[{id:1,question:"Which of the following logic gates produces an output of 1 (HIGH) ONLY when ALL its inputs are 1?",options:["OR Gate","AND Gate","NOR Gate","XOR Gate"],correctAnswer:1,explanation:"An AND gate outputs 1 (True) if and only if all input signals are 1 (True). If any input is 0, the output is 0.",hint:"Boolean multiplication: Y = A . B."},{id:2,question:"Which logic gate outputs 0 (LOW) ONLY when both inputs are 0?",options:["AND Gate","OR Gate","NAND Gate","XNOR Gate"],correctAnswer:1,explanation:"An OR gate performs logical addition ($Y = A + B$). It produces an output of 0 only when both inputs are 0; otherwise it outputs 1.",hint:"Boolean addition: Y = A + B."},{id:3,question:"Which pair of logic gates are known as 'Universal Gates' in digital electronics?",options:["AND and OR Gates","NAND and NOR Gates","XOR and XNOR Gates","NOT and Buffer Gates"],correctAnswer:1,explanation:"NAND and NOR gates are called Universal Gates because any other boolean logic function (AND, OR, NOT, XOR, XNOR) can be implemented using only NAND gates or only NOR gates.",hint:"NAND and NOR can construct any digital circuit."},{id:4,question:"What is the output equation of an XOR (Exclusive-OR) gate for two inputs A and B?",options:["Y = A . B","Y = A + B","Y = A'B + AB'","Y = AB + A'B'"],correctAnswer:2,explanation:"An XOR gate ($A \\oplus B$) outputs 1 when the inputs are different ($A \\neq B$). Its Boolean algebraic expansion is $Y = \\overline{A}B + A\\overline{B}$.",hint:"A'B + AB' represents Exclusive OR."},{id:5,question:"What is the first De Morgan's Law?",options:["(A . B)' = A' + B'","(A + B)' = A' + B'","(A . B)' = A' . B'","(A')' = A"],correctAnswer:0,explanation:"De Morgan's First Law states that the complement of a product of variables equals the sum of their individual complements: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$. (NAND = Bubbled OR).",hint:"Break the line, change the sign: (A.B)' = A' + B'."},{id:6,question:"What is the second De Morgan's Law?",options:["(A + B)' = A' . B'","(A + B)' = A' + B'","(A . B)' = A' . B'","A + A' = 1"],correctAnswer:0,explanation:"De Morgan's Second Law states that the complement of a sum of variables equals the product of their individual complements: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$. (NOR = Bubbled AND).",hint:"Complement of OR is product of complements: (A+B)' = A'.B'."},{id:7,question:"According to Boolean Algebra, what is the value of A + 1?",options:["A","1","0","A + 1"],correctAnswer:1,explanation:"By the Dominance (Annulment / Null) Law of OR operations, any variable ORed with 1 always evaluates to 1 ($A + 1 = 1$).",hint:"1 ORed with anything is 1."},{id:8,question:"According to Boolean Algebra, what is the value of A . 0?",options:["A","1","0","A'"],correctAnswer:2,explanation:"By the Dominance (Null) Law of AND operations, any variable ANDed with 0 always evaluates to 0 ($A \\cdot 0 = 0$).",hint:"0 ANDed with anything is 0."},{id:9,question:"Which Boolean law is represented by the equation A + A = A?",options:["Commutative Law","Idempotent Law","Associative Law","Distributive Law"],correctAnswer:1,explanation:"The Idempotent Law states that combining a variable with itself under OR or AND yields the variable itself: $A + A = A$ and $A \\cdot A = A$.",hint:"Idempotent: repeating the operation has no extra effect."},{id:10,question:"Which law is represented by the equation A + (B . C) = (A + B) . (A + C)?",options:["Distributive Law of OR over AND","Associative Law","Absorption Law","De Morgan's Law"],correctAnswer:0,explanation:"In Boolean algebra, OR distributes over AND: $A + (B \\cdot C) = (A + B) \\cdot (A + C)$, which has no equivalent in standard ordinary arithmetic.",hint:"Distributive law unique to Boolean algebra."},{id:11,question:"What is the Boolean simplification of the expression A + A'B?",options:["A + B","A . B","A","B"],correctAnswer:0,explanation:"Using the Distributive Law: $A + \\overline{A}B = (A + \\overline{A})(A + B) = 1 \\cdot (A + B) = A + B$.",hint:"Distribute A over the product: (A + A')(A + B) = 1 . (A + B) = A + B."},{id:12,question:"What is the output of an XNOR (Exclusive-NOR) gate when inputs A = 1 and B = 1?",options:["0","1","Indeterminate","High Impedance"],correctAnswer:1,explanation:"An XNOR gate (coincidence / equivalence detector) outputs 1 when both inputs are identical ($A = B$). Since both $A=1$ and $B=1$, the output is 1.",hint:"XNOR outputs 1 when inputs are equal."},{id:13,question:"How many rows are present in the truth table of a Boolean function with 4 input variables (A, B, C, D)?",options:["4","8","16","32"],correctAnswer:2,explanation:"A truth table with $n$ binary input variables contains $2^n$ unique input combinations. For $n=4$: $2^4 = 16$ rows.",hint:"Formula: 2 to the power of number of variables."},{id:14,question:"What is the Involution (Double Negation) Law?",options:["(A')' = A","A + A' = 1","A . A' = 0","A + 0 = A"],correctAnswer:0,explanation:"The Involution Law states that complementing a boolean variable twice returns the original variable: $\\overline{\\overline{A}} = A$.",hint:"Double NOT cancels out: (A')' = A."},{id:15,question:"Simplify the Boolean expression: A . (A + B)",options:["A","B","A + B","A . B"],correctAnswer:0,explanation:"By the Absorption Law: $A \\cdot (A + B) = A \\cdot A + A \\cdot B = A + A \\cdot B = A(1 + B) = A(1) = A$.",hint:"Absorption Law: A . (A + B) = A."},{id:16,question:"Which logic gate can be constructed by connecting both input terminals of a NAND gate together?",options:["NOT Gate (Inverter)","OR Gate","AND Gate","XOR Gate"],correctAnswer:0,explanation:"Connecting both inputs of a 2-input NAND gate together ($A = B$) produces output $\\overline{A \\cdot A} = \\overline{A}$, which functions identically to a NOT gate (Inverter).",hint:"A NAND A = NOT A."},{id:17,question:"What is the Duality Principle in Boolean Algebra?",options:["Replacing all variables with their complements","Changing every OR (+) to AND (.), every AND (.) to OR (+), every 0 to 1, and every 1 to 0 produces another valid Boolean relation","Doubling the clock frequency of the processor","Running two programs concurrently"],correctAnswer:1,explanation:"The Principle of Duality states that any valid Boolean identity remains valid if AND ($cdot$) and OR ($+$) operators are swapped, and identity elements $0$ and $1$ are interchanged.",hint:"Swap + and ., and swap 0 and 1."},{id:18,question:"What is the dual of the Boolean expression: A + 0 = A?",options:["A . 1 = A","A + 1 = 1","A . 0 = 0","A' + 1 = A'"],correctAnswer:0,explanation:"To find the dual of $A + 0 = A$: replace $+$ with $\\cdot$ and $0$ with $1$. This gives $A \\cdot 1 = A$.",hint:"Change + to . and 0 to 1."},{id:19,question:"What is the truth value of the Boolean expression: F(A, B) = A'B + AB' when A = 0, B = 1?",options:["0","1","False","Both A and C"],correctAnswer:1,explanation:"$F(0, 1) = \\overline{0} \\cdot 1 + 0 \\cdot \\overline{1} = 1 \\cdot 1 + 0 \\cdot 0 = 1 + 0 = 1$.",hint:"A' is 1, so 1*1 + 0*0 = 1."},{id:20,question:"In digital electronics, what is a Half Adder circuit composed of?",options:["One XOR gate (for Sum) and one AND gate (for Carry)","Two OR gates and one NOT gate","One NAND gate and one NOR gate","Three NOT gates"],correctAnswer:0,explanation:"A Half Adder adds two 1-bit binary numbers: Sum = $A \\oplus B$ (XOR Gate), Carry = $A \\cdot B$ (AND Gate).",hint:"Sum is XOR, Carry is AND."},{id:21,question:"Which of the following Boolean expressions represents the Complementarity Law?",options:["A + A' = 1 and A . A' = 0","A + A = A","A + 0 = A","(A')' = A"],correctAnswer:0,explanation:"The Complement Law states that a variable ORed with its complement is 1 ($A + \\overline{A} = 1$), and a variable ANDed with its complement is 0 ($A \\cdot \\overline{A} = 0$).",hint:"A OR NOT A is 1; A AND NOT A is 0."},{id:22,question:"What is the complement of the expression: F = A'B + CD'?",options:["(A + B') . (C' + D)","(A' + B) . (C + D')","AB' + C'D","A + B + C + D"],correctAnswer:0,explanation:"Applying De Morgan's Law to $\\overline{F} = \\overline{(\\overline{A}B + C\\overline{D})} = \\overline{(\\overline{A}B)} \\cdot \\overline{(C\\overline{D})} = (A + \\overline{B}) \\cdot (\\overline{C} + D)$.",hint:"Use De Morgan's laws: complement of sum is product of complements."},{id:23,question:"Which logic gate has the graphical schematic symbol featuring a curved input edge and a pointed output nose with a small negation circle (bubble) at the output?",options:["NOR Gate","NAND Gate","OR Gate","AND Gate"],correctAnswer:0,explanation:"A NOR gate consists of the curved OR gate symbol with an inversion bubble attached to its pointed output tip.",hint:"Curved input edge = OR; bubble at output = NOR."},{id:24,question:"In Python, which operators perform bitwise Boolean logic operations on integer bit representations?",options:["& (AND), | (OR), ~ (NOT), ^ (XOR)","and, or, not","+, -, *, /","&&, ||, !"],correctAnswer:0,explanation:"In Python, bitwise operators on binary representations are `&` (Bitwise AND), `|` (Bitwise OR), `~` (Bitwise NOT), and `^` (Bitwise XOR).",hint:"Bitwise symbols: &, |, ~, ^."},{id:25,question:"Case Study: Mahima is designing a security vault alarm circuit. The alarm (Y) must sound if the Master Key Switch (A) is ON (1) AND either the Infrared Sensor (B) OR the Pressure Sensor (C) triggers. What is the correct Boolean equation?",options:["Y = A . (B + C)","Y = A + B . C","Y = (A + B) . C","Y = A' . B . C"],correctAnswer:0,explanation:"The requirement 'A must be 1 AND (B OR C is 1)' translates directly into the Boolean product-of-sum: $Y = A \\cdot (B + C)$.",hint:"A AND (B OR C) -> A . (B + C)."}],j=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION (CSO) - 10 MARKS\r
MODULE 002_003: BOOLEAN LOGIC, LOGIC GATES & TRUTH TABLES\r
================================================================================\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
Official Syllabus Aligned: 2024-25 / 2025-26 Senior Secondary Computer Science\r
\r
1. FUNDAMENTALS OF BOOLEAN LOGIC\r
--------------------------------------------------------------------------------\r
Boolean Logic, established by George Boole (1854), operates on binary variables that\r
can assume only two truth states: 1 (True / High) or 0 (False / Low).\r
\r
A. PRIMARY LOGIC GATES:\r
   1. NOT Gate (Inverter):\r
      - Symbol: Triangle with a bubble at the output.\r
      - Equation: Y = A' or Y = ~A\r
      - Truth Table: 0 -> 1, 1 -> 0\r
\r
   2. AND Gate (Logical Conjunction / Product):\r
      - Symbol: Flat input edge with a rounded D-shaped output.\r
      - Equation: Y = A . B\r
      - Rule: Output is 1 ONLY when both inputs are 1.\r
      - Truth Table: 0.0=0, 0.1=0, 1.0=0, 1.1=1\r
\r
   3. OR Gate (Logical Disjunction / Sum):\r
      - Symbol: Curved input edge with a pointed output nose.\r
      - Equation: Y = A + B\r
      - Rule: Output is 0 ONLY when both inputs are 0; otherwise 1.\r
      - Truth Table: 0+0=0, 0+1=1, 1+0=1, 1+1=1\r
\r
B. UNIVERSAL LOGIC GATES:\r
   NAND and NOR gates are "Universal" because any boolean function can be built\r
   exclusively from them.\r
\r
   1. NAND Gate (NOT-AND):\r
      - Symbol: AND gate with an output inversion bubble.\r
      - Equation: Y = (A . B)'\r
      - Rule: Output is 0 ONLY when both inputs are 1.\r
\r
   2. NOR Gate (NOT-OR):\r
      - Symbol: OR gate with an output inversion bubble.\r
      - Equation: Y = (A + B)'\r
      - Rule: Output is 1 ONLY when both inputs are 0.\r
\r
C. EXCLUSIVE LOGIC GATES:\r
   1. XOR Gate (Exclusive-OR / Inequality Detector):\r
      - Symbol: OR gate preceded by an additional curved input line.\r
      - Equation: Y = A (+) B = A'B + AB'\r
      - Rule: Output is 1 when inputs are DIFFERENT (odd parity).\r
\r
   2. XNOR Gate (Exclusive-NOR / Equivalence / Coincidence Detector):\r
      - Symbol: XOR gate with an output inversion bubble.\r
      - Equation: Y = (A (+) B)' = AB + A'B'\r
      - Rule: Output is 1 when inputs are IDENTICAL.\r
\r
2. POSTULATES & LAWS OF BOOLEAN ALGEBRA\r
--------------------------------------------------------------------------------\r
1. Properties of 0 and 1 (Dominance & Identity):\r
   - 0 + A = A       | 1 . A = A        (Identity Laws)\r
   - 1 + A = 1       | 0 . A = 0        (Dominance / Annulment Laws)\r
\r
2. Idempotent Laws:\r
   - A + A = A       | A . A = A\r
\r
3. Involution Law (Double Negation):\r
   - (A')' = A\r
\r
4. Complementarity Laws:\r
   - A + A' = 1      | A . A' = 0\r
\r
5. Commutative Laws:\r
   - A + B = B + A   | A . B = B . A\r
\r
6. Associative Laws:\r
   - A + (B + C) = (A + B) + C\r
   - A . (B . C) = (A . B) . C\r
\r
7. Distributive Laws:\r
   - A . (B + C) = (A . B) + (A . C)   (AND over OR)\r
   - A + (B . C) = (A + B) . (A + C)   (OR over AND - Unique to Boolean algebra)\r
\r
8. Absorption Laws:\r
   - A + (A . B) = A\r
   - A . (A + B) = A\r
   - A + (A' . B) = A + B\r
\r
3. DE MORGAN'S THEOREMS (CRITICAL FOR EXAMS)\r
--------------------------------------------------------------------------------\r
- First Theorem (NAND = Bubbled OR):\r
  The complement of a logical product equals the sum of the complements.\r
  (A . B)' = A' + B'\r
\r
- Second Theorem (NOR = Bubbled AND):\r
  The complement of a logical sum equals the product of the complements.\r
  (A + B)' = A' . B'\r
\r
- Principle of Duality:\r
  Any valid Boolean identity remains valid if '+' is swapped with '.', and '0' is\r
  swapped with '1'. (e.g. Dual of A + 1 = 1 is A . 0 = 0).\r
\r
================================================================================\r
END OF REVISION NOTES - MODULE 002_003\r
================================================================================\r
`,R=`"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) - UNIT I\r
MODULE 002_003: BOOLEAN LOGIC & TRUTH TABLE LABORATORY\r
Topic: Automated Logic Gate Evaluator & De Morgan's Law Verifier\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
from typing import List, Dict\r
\r
\r
def generate_truth_table_all_gates() -> None:\r
    """Generates complete truth tables for all primary, universal, and exclusive logic gates."""\r
    print("=" * 75)\r
    print("COMPLETE TRUTH TABLE FOR STANDARD DIGITAL LOGIC GATES")\r
    print("=" * 75)\r
    print(f"{'A':^4} | {'B':^4} | {'NOT A':^6} | {'AND':^5} | {'OR':^4} | {'NAND':^6} | {'NOR':^5} | {'XOR':^5} | {'XNOR':^6}")\r
    print("-" * 75)\r
\r
    inputs = [(0, 0), (0, 1), (1, 0), (1, 1)]\r
\r
    for a, b in inputs:\r
        not_a = 1 - a\r
        and_val = a & b\r
        or_val = a | b\r
        nand_val = 1 - (a & b)\r
        nor_val = 1 - (a | b)\r
        xor_val = a ^ b\r
        xnor_val = 1 - (a ^ b)\r
\r
        print(f"{a:^4d} | {b:^4d} | {not_a:^6d} | {and_val:^5d} | {or_val:^4d} | {nand_val:^6d} | {nor_val:^5d} | {xor_val:^5d} | {xnor_val:^6d}")\r
    print("=" * 75)\r
\r
\r
def verify_demorgan_laws() -> None:\r
    """Rigorously proves De Morgan's First and Second Laws across all truth table states."""\r
    print("\\n" + "=" * 75)\r
    print("RIGOROUS PROOF OF DE MORGAN'S LAWS")\r
    print("=" * 75)\r
\r
    # First Law: (A . B)' == A' + B'\r
    print("Law 1: (A . B)' = A' + B'")\r
    print(f"{'A':^4} | {'B':^4} | {'A.B':^5} | {'(A.B)´':^7} | {'A´':^4} | {'B´':^4} | {'A´ + B´':^7} | {'LHS == RHS':^10}")\r
    print("-" * 75)\r
\r
    for a, b in [(0, 0), (0, 1), (1, 0), (1, 1)]:\r
        ab = a & b\r
        lhs1 = 1 - ab\r
        not_a = 1 - a\r
        not_b = 1 - b\r
        rhs1 = not_a | not_b\r
        match1 = "VERIFIED" if lhs1 == rhs1 else "FAILED"\r
        print(f"{a:^4d} | {b:^4d} | {ab:^5d} | {lhs1:^7d} | {not_a:^4d} | {not_b:^4d} | {rhs1:^7d} | {match1:^10}")\r
\r
    print("\\nLaw 2: (A + B)' = A' . B'")\r
    print(f"{'A':^4} | {'B':^4} | {'A+B':^5} | {'(A+B)´':^7} | {'A´':^4} | {'B´':^4} | {'A´ . B´':^7} | {'LHS == RHS':^10}")\r
    print("-" * 75)\r
\r
    for a, b in [(0, 0), (0, 1), (1, 0), (1, 1)]:\r
        a_or_b = a | b\r
        lhs2 = 1 - a_or_b\r
        not_a = 1 - a\r
        not_b = 1 - b\r
        rhs2 = not_a & not_b\r
        match2 = "VERIFIED" if lhs2 == rhs2 else "FAILED"\r
        print(f"{a:^4d} | {b:^4d} | {a_or_b:^5d} | {lhs2:^7d} | {not_a:^4d} | {not_b:^4d} | {rhs2:^7d} | {match2:^10}")\r
    print("=" * 75)\r
\r
\r
if __name__ == "__main__":\r
    generate_truth_table_all_gates()\r
    verify_demorgan_laws()\r
`,D=()=>{const[t,h]=d.useState("AND"),[r,p]=d.useState(0),[i,A]=d.useState(0),o=((a,n,s)=>{switch(a){case"NOT":return 1-n;case"AND":return n&s;case"OR":return n|s;case"NAND":return 1-(n&s);case"NOR":return 1-(n|s);case"XOR":return n^s;case"XNOR":return 1-(n^s);default:return 0}})(t,r,i),l={NOT:{eq:"Y = A'",desc:"Inverter: Inverts the single input bit.",category:"Primary"},AND:{eq:"Y = A · B",desc:"Conjunction: 1 only if all inputs are 1.",category:"Primary"},OR:{eq:"Y = A + B",desc:"Disjunction: 0 only if both inputs are 0.",category:"Primary"},NAND:{eq:"Y = (A · B)'",desc:"Universal: Inverted AND. 0 only if all inputs are 1.",category:"Universal"},NOR:{eq:"Y = (A + B)'",desc:"Universal: Inverted OR. 1 only if both inputs are 0.",category:"Universal"},XOR:{eq:"Y = A ⊕ B = A'B + AB'",desc:"Exclusive-OR: 1 if inputs are DIFFERENT (odd parity).",category:"Exclusive"},XNOR:{eq:"Y = (A ⊕ B)' = AB + A'B'",desc:"Coincidence: 1 if inputs are IDENTICAL.",category:"Exclusive"}};return e.jsxs("div",{className:"bg-slate-950/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(c,{size:20,className:"animate-pulse"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Logic Gate Circuit Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a digital logic gate, toggle input switches (0 or 1), and observe real-time circuit output."})]})]})}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:Object.keys(l).map(a=>e.jsxs("button",{onClick:()=>h(a),className:`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${t===a?"bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105":"bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700"}`,children:[a," Gate"]},a))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-900/60 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"md:col-span-4 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Input Terminals:"}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:"Input A:"}),e.jsxs("button",{onClick:()=>p(r===0?1:0),className:`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${r===1?"bg-sky-500 text-white shadow":"bg-slate-800 text-slate-400"}`,children:["State: ",r," (",r===1?"HIGH / 5V":"LOW / 0V",")"]})]}),t!=="NOT"&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:"Input B:"}),e.jsxs("button",{onClick:()=>A(i===0?1:0),className:`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${i===1?"bg-sky-500 text-white shadow":"bg-slate-800 text-slate-400"}`,children:["State: ",i," (",i===1?"HIGH / 5V":"LOW / 0V",")"]})]})]}),e.jsxs("div",{className:"md:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-center space-y-2",children:[e.jsxs("span",{className:"text-[11px] font-bold text-amber-400 uppercase tracking-widest",children:[l[t].category," Gate"]}),e.jsxs("h4",{className:"text-2xl font-extrabold text-white tracking-wider font-mono",children:[t," GATE"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold",children:l[t].eq}),e.jsx("p",{className:"text-[11px] text-slate-400 leading-tight pt-1",children:l[t].desc})]}),e.jsxs("div",{className:"md:col-span-4 flex flex-col items-center justify-center space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Circuit Output (Y):"}),e.jsxs("div",{className:`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border shadow-2xl ${o===1?"bg-emerald-500 text-slate-950 border-emerald-300 shadow-emerald-500/50 scale-110":"bg-slate-950 text-slate-600 border-slate-800"}`,children:[e.jsx(c,{size:28,className:o===1?"animate-bounce text-slate-950":"text-slate-700"}),e.jsx("span",{className:"font-mono text-xl font-black",children:o})]}),e.jsx("span",{className:`text-xs font-bold ${o===1?"text-emerald-400":"text-slate-500"}`,children:o===1?"SIGNAL: HIGH (TRUE)":"SIGNAL: LOW (FALSE)"})]})]})]})};function _(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · 10 Marks"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Module 002_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Boolean Logic, Logic Gates, Truth Tables & De Morgan’s Laws"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master the algebra of digital circuits. Explore primary gates (AND, OR, NOT), Universal gates (NAND, NOR), Exclusive gates (XOR, XNOR), rigorous Boolean algebra theorems, and analytical proofs of De Morgan's Laws."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white tracking-tight",children:"In Simple Words: Electrical Water Valves"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Physical intuitive understanding of AND vs OR logic"})]})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Imagine a water pipe delivering water to a garden in Barrackpore:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5",children:[e.jsx("span",{className:"font-bold text-sky-400 text-sm",children:"Series Valves (AND Logic)"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Two valves connected one after another in a single line. Water flows ",e.jsx("strong",{children:"ONLY IF BOTH"})," Valve A AND Valve B are opened ($Y = A \\cdot B$)."]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Parallel Valves (OR Logic)"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Two valves connected on parallel bypass pipes. Water flows if ",e.jsx("strong",{children:"EITHER"})," Valve A OR Valve B is opened ($Y = A + B$)."]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(D,{})}),e.jsxs("div",{className:"bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{size:18,className:"text-sky-400"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"De Morgan’s Theorems (High-Frequency CBSE Exam Area)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"font-bold text-sky-400 text-sm",children:"De Morgan's First Law (NAND = Bubbled OR)"}),e.jsx("p",{className:"font-mono text-amber-300 text-sm font-extrabold",children:"(A · B)' = A' + B'"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"The complement of a logical product of variables equals the logical sum of their individual complements."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"De Morgan's Second Law (NOR = Bubbled AND)"}),e.jsx("p",{className:"font-mono text-emerald-300 text-sm font-extrabold",children:"(A + B)' = A' · B'"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"The complement of a logical sum of variables equals the logical product of their individual complements."})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(f,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Python Laboratory: Automated Truth Table & De Morgan Engine"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Python program generating truth tables for all 7 logic gates and verifying De Morgan's theorem mathematically."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-2xl",children:e.jsx(b,{fileModule:R,title:"boolean_logic_engine.py – Truth Tables & Theorem Proofs",highlightLines:[12,26,42,57]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(B,{size:18})}),e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Real-World Case Studies: Logic Circuits in Industry"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-sky-400",children:"1. Digital ALU Half-Adder"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Every binary addition of two bits $A$ and $B$ uses an XOR gate for calculating the ",e.jsx("strong",{children:"Sum"})," ($S = A \\oplus B$) and an AND gate for the ",e.jsx("strong",{children:"Carry"})," ($C = A \\cdot B$)."]})]}),e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400",children:"2. Nuclear Plant Safety Voting (Triple Redundancy)"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Three independent thermal sensors ($A, B, C$) monitor reactor core temperature. The coolant pump trips if at least two sensors agree: $Y = AB + BC + CA$ (Majority Voting Gate)."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-300 flex items-center gap-2",children:[e.jsx(v,{size:16})," Common Examination Pitfalls"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Writing $(A+B)' = A' + B'$:"})," Incorrect. De Morgan's Law flips the operator: $(A+B)' = A' \\cdot B'$."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Calling XOR a Universal Gate:"})," Only ",e.jsx("strong",{children:"NAND"})," and ",e.jsx("strong",{children:"NOR"})," are Universal Gates."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx(w,{size:16})," Best Practices & Proof Technique"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Proof by Truth Table:"})," When asked to prove De Morgan's law, construct the complete 4-row truth table showing LHS column matches RHS column."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Duality Principle Rule:"})," Replace $+$ with $\\cdot$, $\\cdot$ with $+$, $0$ with $1$, and $1$ with $0$."]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(O,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Exam Preparation & Conceptual Self-Assessment (25 Questions)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Test your mastery of logic gates, truth tables, Boolean algebraic minimization, and circuit schematics."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(x,{questions:y})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(u,{}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(m,{content:j,filename:"002_003_boolean_logic_and_gates_notes.txt"})})]})]})})}export{_ as default};

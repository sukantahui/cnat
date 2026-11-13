import{b as u,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as b}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as m}from"./FAQTemplate-16IfroqC.js";import{P as C}from"./PlainTextPrint-C6NaUtnE.js";import{D as i,br as A,a7 as g,F as p,P as B,$ as x,C as f,f as N,g as I}from"./vendor-icons-C-igd3yh.js";const v=[{id:1,question:"Which of the following ICs contains four independent 2-input NAND gates?",options:["IC 7400","IC 7402","IC 7404","IC 7408"],correctAnswer:0,explanation:"IC 7400 is the standard TTL Quad 2-Input NAND gate IC.",hint:"7400 is the NAND gate chip."},{id:2,question:"Which of the following ICs contains four independent 2-input NOR gates?",options:["IC 7400","IC 7402","IC 7408","IC 7432"],correctAnswer:1,explanation:"IC 7402 is the standard TTL Quad 2-Input NOR gate IC.",hint:"7402 is the NOR gate chip."},{id:3,question:"Which of the following ICs contains six independent NOT gates (Hex Inverter)?",options:["IC 7404","IC 7408","IC 7432","IC 7486"],correctAnswer:0,explanation:"IC 7404 is the standard TTL Hex Inverter IC (contains 6 NOT gates).",hint:"7404 = Inverter."},{id:4,question:"Which of the following ICs contains four independent 2-input AND gates?",options:["IC 7400","IC 7404","IC 7408","IC 7432"],correctAnswer:2,explanation:"IC 7408 contains four 2-input AND gates.",hint:"7408 = AND."},{id:5,question:"Which of the following ICs contains four independent 2-input OR gates?",options:["IC 7402","IC 7408","IC 7432","IC 7486"],correctAnswer:2,explanation:"IC 7432 contains four 2-input OR gates.",hint:"7432 = OR."},{id:6,question:"Which of the following ICs contains four independent 2-input XOR gates?",options:["IC 7400","IC 7408","IC 7486","IC 74266"],correctAnswer:2,explanation:"IC 7486 contains four 2-input XOR gates.",hint:"7486 = XOR."},{id:7,question:"How many NAND gates are required to realize an OR gate?",options:["1","2","3","4"],correctAnswer:2,explanation:"Three NAND gates: 2 for inverting A and B, and 1 for $(A'B')' = A + B$.",hint:"3 NAND gates."},{id:8,question:"How many NOR gates are required to realize an AND gate?",options:["1","2","3","4"],correctAnswer:2,explanation:"Three NOR gates: 2 for inverting A and B, and 1 for $(A'+B')' = AB$.",hint:"3 NOR gates."},{id:9,question:"What is the Boolean expression for the Carry Out of a Full Adder?",options:["Cout = AB + Cin(A ⊕ B)","Cout = A ⊕ B ⊕ Cin","Cout = A + B + Cin","Cout = A · B · Cin"],correctAnswer:0,explanation:"The Carry Out of a Full Adder is $C_{out} = AB + C_{in}(A \\oplus B)$.",hint:"Carry out equation."},{id:10,question:"What is the Boolean expression for the Sum bit of a Full Adder?",options:["Sum = A ⊕ B ⊕ Cin","Sum = AB + Cin","Sum = A + B + Cin","Sum = (A ⊕ B)' · Cin"],correctAnswer:0,explanation:"The Sum bit of a Full Adder is $Sum = A \\oplus B \\oplus C_{in}$.",hint:"Sum bit is 3-variable XOR."},{id:11,question:"What is the dual of A + (B · C) = (A + B) · (A + C)?",options:["A · (B + C) = A·B + A·C","A' · (B + C) = A'B + A'C","A + BC = A + B + C","A · BC = ABC"],correctAnswer:0,explanation:"The dual of the 2nd Distributive Law is the 1st Distributive Law: $A(B+C) = AB + AC$.",hint:"Swap + and . everywhere."},{id:12,question:"What is the simplified form of A + A'B + AB'?",options:["A + B","A + B + B' = 1","AB","0"],correctAnswer:0,explanation:"$A + A'B + AB' = (A + AB') + A'B = A + A'B = A + B$.",hint:"A absorbs AB' then A absorbs A'B."},{id:13,question:"What is a 2-level SOP circuit composed of?",options:["AND gates at Level 1 feeding into an OR gate at Level 2","OR gates feeding into an AND gate","NAND gates only","Inverters only"],correctAnswer:0,explanation:"SOP circuits have AND gates at level 1 and an OR gate at level 2.",hint:"AND-OR architecture."},{id:14,question:"What is the dual of the identity: A · A' = 0?",options:["A + A' = 1","A · 1 = A","A + 0 = A","A · 0 = 0"],correctAnswer:0,explanation:"Swap '·' with '+' and '0' with '1': $A + A' = 1$.",hint:"Complement law for OR."},{id:15,question:"What is the result of (A ⊕ B)' ⊕ B?",options:["A'","A","B","1"],correctAnswer:0,explanation:"$(A \\oplus B)' \\oplus B = (A \\odot B) \\oplus B = (AB + A'B') \\oplus B = A'$.",hint:"Expands to A'."},{id:16,question:"How many input combinations does a 5-variable truth table contain?",options:["16","32","64","128"],correctAnswer:1,explanation:"$2^5 = 32$ rows.",hint:"2^5 = 32."},{id:17,question:"According to De Morgan's 2nd Law, (AB)' is equivalent to:",options:["A' + B'","A'B'","A + B","(A + B)'"],correctAnswer:0,explanation:"$(AB)' = A' + B'$.",hint:"NAND = Bubbled OR."},{id:18,question:"According to De Morgan's 1st Law, (A + B)' is equivalent to:",options:["A' · B'","A' + B'","A · B","(A · B)'"],correctAnswer:0,explanation:"$(A + B)' = A' \\cdot B'$.",hint:"NOR = Bubbled AND."},{id:19,question:"Which Boolean theorem states: A + AB = A?",options:["Identity Law","Absorption Law 1","Associative Law","Distributive Law"],correctAnswer:1,explanation:"Absorption Law 1 states $A + AB = A(1 + B) = A(1) = A$.",hint:"Absorption law."},{id:20,question:"Which Boolean theorem states: (A')' = A?",options:["Involution Law (Double Inversion)","Idempotent Law","Complement Law","Null Law"],correctAnswer:0,explanation:"Involution Law states that double negation restores the original variable.",hint:"Involution law."},{id:21,question:"Which of the following statements about a Tautology is correct?",options:["Its truth table output is 1 for all input rows","Its truth table output is 0 for all input rows","It contains only one variable","It is always False"],correctAnswer:0,explanation:"A Tautology is universally True (evaluates to 1) for every row in its truth table.",hint:"All 1s = Tautology."},{id:22,question:"Which of the following statements about a Fallacy / Contradiction is correct?",options:["Its truth table output is 0 for all input rows","Its truth table output is 1 for all input rows","It is a valid theorem","It requires 3 inputs"],correctAnswer:0,explanation:"A Fallacy / Contradiction is universally False (evaluates to 0) for every row in its truth table.",hint:"All 0s = Fallacy."},{id:23,question:"In Python, which built-in operator computes the bitwise inversion (NOT)?",options:["not","~","!","^"],correctAnswer:1,explanation:"The tilde `~` is Python's bitwise NOT operator.",hint:"Tilde operator ~."},{id:24,question:"What is the output of the Python expression: `bool(1 & 0 | 1)`?",options:["True","False","1","0"],correctAnswer:0,explanation:"`1 & 0` is 0. `0 | 1` is 1. `bool(1)` is True.",hint:"Evaluates to True."},{id:25,question:"Why does CBSE Class XI CS 083 include Boolean Logic in Unit 1 Computer Systems & Organisation?",options:["Because Boolean logic and digital logic gates form the mathematical foundation for all CPU ALUs, memory latches, registers, and digital hardware architectures","Because it is required to play video games","Because it replaces Python syntax","Because it is only used in web browsers"],correctAnswer:0,explanation:"Understanding Boolean algebra and logic gates explains how physical silicon transistors perform mathematical computation and data manipulation inside modern computer processors.",hint:"Foundational hardware theory."}],w=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT 1: COMPUTER SYSTEMS AND ORGANISATION (CSO)\r
MODULE 002: BOOLEAN LOGIC, POSTULATES, LOGIC GATES & CIRCUIT DESIGN\r
COMPLETE REVISION HANDBOOK & FORMULA CHEAT SHEET\r
Educator: Sukanta Hui (Coder & AccoTax, Barrackpore, Kolkata)\r
================================================================================\r
\r
1. SYLLABUS OVERVIEW & MARKS DISTRIBUTION\r
--------------------------------------------------------------------------------\r
* Subject: Computer Science (083) - Class XI\r
* Unit I: Computer Systems & Organisation (10 Marks Theory)\r
* Weightage of Boolean Logic & Gates: ~3 to 5 Marks (MCQs, Proofs, Circuit Diagrams)\r
\r
2. CORE FORMULA & TRUTH TABLE SUMMARY\r
--------------------------------------------------------------------------------\r
Gate Name | Graphic Symbol Shape | Boolean Equation | Condition for Output = 1 | TTL IC\r
----------+----------------------+------------------+--------------------------+-------\r
NOT Gate  | Triangle + Bubble    | Y = A'           | Input is 0               | 7404\r
AND Gate  | Flat back, curved    | Y = A · B        | ALL inputs are 1         | 7408\r
OR Gate   | Curved back, pointed | Y = A + B        | AT LEAST ONE input is 1  | 7432\r
NAND Gate | AND shape + Bubble   | Y = (A · B)'     | ANY input is 0           | 7400\r
NOR Gate  | OR shape + Bubble    | Y = (A + B)'     | ALL inputs are 0         | 7402\r
XOR Gate  | Arch + OR shape      | Y = A ⊕ B        | Inputs are DIFFERENT     | 7486\r
XNOR Gate | Arch + OR + Bubble   | Y = (A ⊕ B)'     | Inputs are IDENTICAL     | 74266\r
\r
3. UNIVERSAL GATE REALIZATION CHEAT SHEET\r
--------------------------------------------------------------------------------\r
Target Gate | Realization using NAND (IC 7400)      | Realization using NOR (IC 7402)\r
------------+---------------------------------------+----------------------------------\r
NOT Gate    | 1 Gate : (A · A)' = A'                | 1 Gate : (A + A)' = A'\r
AND Gate    | 2 Gates: ((A · B)')' = A · B          | 3 Gates: (A' + B')' = A · B\r
OR Gate     | 3 Gates: (A' · B')' = A + B           | 2 Gates: ((A + B)')' = A + B\r
XOR Gate    | 4 Gates: A'B + AB'                    | 5 Gates: (A+B)(A'+B')\r
XNOR Gate   | 5 Gates: AB + A'B'                    | 4 Gates: (A+B')(A'+B)\r
\r
4. BOOLEAN POSTULATES & THEOREMS CATALOGUE\r
--------------------------------------------------------------------------------\r
1. Identity Laws:       A + 0 = A            | A · 1 = A\r
2. Null / Boundedness:  A + 1 = 1            | A · 0 = 0\r
3. Idempotent Laws:     A + A = A            | A · A = A\r
4. Complement Laws:     A + A' = 1           | A · A' = 0\r
5. Involution Law:      (A')' = A\r
6. Commutative Laws:    A + B = B + A        | A · B = B · A\r
7. Associative Laws:    (A+B)+C = A+(B+C)    | (A·B)·C = A·(B·C)\r
8. Distributive Laws:   A(B+C) = AB + AC     | A + BC = (A+B)(A+C)\r
9. Absorption Laws:     A + AB = A           | A(A+B) = A\r
                        A + A'B = A + B      | A(A'+B) = AB\r
10. De Morgan's 1st Law:(A + B)' = A' · B'   (NOR == Bubbled AND)\r
11. De Morgan's 2nd Law:(A · B)' = A' + B'   (NAND == Bubbled OR)\r
\r
5. DUALITY PRINCIPLE RULES\r
--------------------------------------------------------------------------------\r
Rule 1: Interchange '+' (OR) and '·' (AND).\r
Rule 2: Interchange constants '0' and '1'.\r
Rule 3: Keep variable letters and their complements UNCHANGED!\r
\r
6. ARITHMETIC DIGITAL CIRCUITS\r
--------------------------------------------------------------------------------\r
(A) Half Adder (2 inputs: A, B):\r
    - Sum   = A ⊕ B\r
    - Carry = A · B\r
\r
(B) Full Adder (3 inputs: A, B, Cin):\r
    - Sum  = A ⊕ B ⊕ Cin\r
    - Cout = AB + Cin · (A ⊕ B)\r
================================================================================\r
`,o=`# module_002_boolean_logic_master_lab.py\r
# CBSE Class XI Computer Science (Subject Code: 083)\r
# Unit 1: Computer Systems and Organisation (CSO) - Module 002: Boolean Logic & Gates\r
# Educator: Sukanta Hui (Coder & AccoTax, Barrackpore, West Bengal, India)\r
\r
"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) - MASTER BOOLEAN LOGIC LABORATORY SUITE\r
================================================================================\r
Comprehensive Python digital logic laboratory suite implementing:\r
1. Primary Logic Gates (NOT, AND, OR)\r
2. Universal Logic Realizations (NAND and NOR Gate Universality)\r
3. Exclusive Logic Gates (XOR and XNOR & Parity Bit Generators)\r
4. Multi-Variable Truth Table Generator with Tautology/Fallacy Detection\r
5. Algebraic Laws & De Morgan's Theorem Verifier\r
6. Arithmetic Digital Circuits: Half Adder & Full Adder Simulation\r
================================================================================\r
"""\r
\r
import itertools\r
from typing import Callable, Dict, List, Tuple\r
\r
class MasterLogicLab:\r
    # -------------------------------------------------------------\r
    # 1. PRIMARY LOGIC GATES (IC 7404, 7408, 7432)\r
    # -------------------------------------------------------------\r
    @staticmethod\r
    def not_gate(a: int) -> int:\r
        """NOT Gate (Inverter): Y = A' (IC 7404)"""\r
        return 1 - a\r
\r
    @staticmethod\r
    def and_gate(a: int, b: int) -> int:\r
        """2-Input AND Gate: Y = A · B (IC 7408)"""\r
        return a & b\r
\r
    @staticmethod\r
    def or_gate(a: int, b: int) -> int:\r
        """2-Input OR Gate: Y = A + B (IC 7432)"""\r
        return a | b\r
\r
    # -------------------------------------------------------------\r
    # 2. UNIVERSAL LOGIC GATES (IC 7400, 7402)\r
    # -------------------------------------------------------------\r
    @staticmethod\r
    def nand_gate(a: int, b: int) -> int:\r
        """NAND Gate: Y = (A · B)' (IC 7400)"""\r
        return 0 if (a == 1 and b == 1) else 1\r
\r
    @staticmethod\r
    def nor_gate(a: int, b: int) -> int:\r
        """NOR Gate: Y = (A + B)' (IC 7402)"""\r
        return 1 if (a == 0 and b == 0) else 0\r
\r
    # NAND Universal Realizations\r
    @classmethod\r
    def not_via_nand(cls, a: int) -> int:\r
        return cls.nand_gate(a, a)\r
\r
    @classmethod\r
    def and_via_nand(cls, a: int, b: int) -> int:\r
        return cls.nand_gate(cls.nand_gate(a, b), cls.nand_gate(a, b))\r
\r
    @classmethod\r
    def or_via_nand(cls, a: int, b: int) -> int:\r
        return cls.nand_gate(cls.nand_gate(a, a), cls.nand_gate(b, b))\r
\r
    # -------------------------------------------------------------\r
    # 3. EXCLUSIVE LOGIC GATES (IC 7486, 74266)\r
    # -------------------------------------------------------------\r
    @staticmethod\r
    def xor_gate(a: int, b: int) -> int:\r
        """XOR Gate: Y = A ⊕ B = A'B + AB' (IC 7486)"""\r
        return a ^ b\r
\r
    @staticmethod\r
    def xnor_gate(a: int, b: int) -> int:\r
        """XNOR Gate: Y = (A ⊕ B)' = AB + A'B' (IC 74266)"""\r
        return 1 if (a == b) else 0\r
\r
    # -------------------------------------------------------------\r
    # 4. DIGITAL ARITHMETIC CIRCUITS (HALF & FULL ADDER)\r
    # -------------------------------------------------------------\r
    @classmethod\r
    def half_adder(cls, a: int, b: int) -> Tuple[int, int]:\r
        """Half Adder: Sum = A ⊕ B, Carry = A · B"""\r
        sum_bit = cls.xor_gate(a, b)\r
        carry_bit = cls.and_gate(a, b)\r
        return sum_bit, carry_bit\r
\r
    @classmethod\r
    def full_adder(cls, a: int, b: int, cin: int) -> Tuple[int, int]:\r
        """Full Adder: Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B)"""\r
        xor1 = cls.xor_gate(a, b)\r
        sum_bit = cls.xor_gate(xor1, cin)\r
        and1 = cls.and_gate(a, b)\r
        and2 = cls.and_gate(cin, xor1)\r
        cout = cls.or_gate(and1, and2)\r
        return sum_bit, cout\r
\r
    # -------------------------------------------------------------\r
    # 5. AUTOMATED TRUTH TABLE GENERATOR & CLASSIFIER\r
    # -------------------------------------------------------------\r
    @classmethod\r
    def evaluate_truth_table(cls, title: str, var_names: List[str], eval_func: Callable):\r
        num_vars = len(var_names)\r
        total_rows = 1 << num_vars\r
        print("\\n" + "=" * 65)\r
        print(f" TRUTH TABLE: {title}")\r
        print("=" * 65)\r
        header = " | ".join(f"{v:^3}" for v in var_names) + " | Output Y"\r
        print(f"Row | {header}")\r
        print("-" * 65)\r
\r
        outputs = []\r
        for i, inputs in enumerate(itertools.product([0, 1], repeat=num_vars)):\r
            y = eval_func(*inputs)\r
            outputs.append(y)\r
            row_str = " | ".join(f"{val:^3}" for val in inputs)\r
            print(f"m{i:<2} | {row_str} |   {y}")\r
\r
        if all(y == 1 for y in outputs):\r
            print(">> Classification: TAUTOLOGY (Universally True)")\r
        elif all(y == 0 for y in outputs):\r
            print(">> Classification: FALLACY / CONTRADICTION (Universally False)")\r
        else:\r
            print(f">> Classification: CONTINGENCY ({sum(outputs)} ONES, {total_rows - sum(outputs)} ZEROS)")\r
\r
def run_all_laboratory_experiments():\r
    print("=" * 70)\r
    print("  CBSE CLASS XI CS (083) - MASTER DIGITAL LOGIC EXPERIMENT SUITE")\r
    print("  Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)")\r
    print("=" * 70)\r
\r
    # Exp 1: De Morgan's 1st Law Table\r
    MasterLogicLab.evaluate_truth_table(\r
        "De Morgan's 1st Law: (A + B)' == A' · B'",\r
        ["A", "B"],\r
        lambda a, b: 1 if (1 - (a | b)) == ((1 - a) & (1 - b)) else 0\r
    )\r
\r
    # Exp 2: 3-Variable Majority Circuit Y = AB + BC + CA\r
    MasterLogicLab.evaluate_truth_table(\r
        "3-Variable Majority Voter: Y = AB + BC + CA",\r
        ["A", "B", "C"],\r
        lambda a, b, c: (a & b) | (b & c) | (c & a)\r
    )\r
\r
    # Exp 3: Full Adder Simulation\r
    print("\\n" + "=" * 65)\r
    print(" FULL ADDER 3-BIT BINARY ADDITION TRACE")\r
    print("=" * 65)\r
    print(f"{'A':<3} {'B':<3} {'Cin':<4} | {'Sum':<5} {'Cout':<5} | {'Decimal Addition'}")\r
    print("-" * 65)\r
    for a in [0, 1]:\r
        for b in [0, 1]:\r
            for cin in [0, 1]:\r
                s, cout = MasterLogicLab.full_adder(a, b, cin)\r
                print(f"{a:<3} {b:<3} {cin:<4} | {s:<5} {cout:<5} | {a} + {b} + {cin} = {a + b + cin} ({cout}{s}_2)")\r
\r
if __name__ == "__main__":\r
    run_all_laboratory_experiments()\r
`;function S(){const[l,d]=u.useState(!1),[n,s]=u.useState("resources"),h=()=>{navigator.clipboard.writeText(o),d(!0),setTimeout(()=>d(!1),2e3)},c=()=>{const t=new Blob([o],{type:"text/x-python;charset=utf-8"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download="module_002_boolean_logic_master_lab.py",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(r)};return e.jsx("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full",children:"Downloadable Revision Hub"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Downloadable Documents & Master Laboratory Scripts"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Export offline study notes, formula cheat sheets, universal realization proofs, and the complete Python digital logic laboratory suite for Unit 1 Computer Systems and Organisation (CSO)."})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-3",children:[{id:"resources",label:"1. Download Center",icon:i},{id:"python",label:"2. Master Python Script",icon:A},{id:"faqs",label:"3. Revision FAQs (25 Qs)",icon:g},{id:"notes",label:"4. Printable Document",icon:p}].map(t=>{const r=t.icon;return e.jsxs("button",{onClick:()=>s(t.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${n===t.id?"bg-sky-500 text-white shadow-lg shadow-sky-500/25 border-b-2 border-sky-400":"bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/40"}`,children:[e.jsx(r,{size:16}),e.jsx("span",{children:t.label})]},t.id)})}),n==="resources"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(p,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Module 002 Complete Revision Handbook"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Comprehensive textbook-aligned revision guide covering all Boolean logic gates, truth tables, universal realizations (NAND/NOR), postulates, and circuit synthesis diagrams."}),e.jsxs("button",{onClick:()=>s("notes"),className:"inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-semibold rounded-xl border border-sky-500/30 transition cursor-pointer",children:[e.jsx(B,{size:14})," Open Printable Document"]})]}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(A,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Master Python Digital Logic Suite"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Self-contained Python executable containing gate simulators, truth table generators, algebraic theorem verifiers, and Full Adder simulations."}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:c,className:"inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow transition cursor-pointer",children:[e.jsx(i,{size:14})," Download (.py)"]}),e.jsxs("button",{onClick:()=>s("python"),className:"inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition cursor-pointer",children:[e.jsx(x,{size:14})," View Code"]})]})]})]}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[e.jsx(f,{size:16,className:"text-amber-400"})," Standard TTL 7400-Series IC Quick Reference"]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-rose-400 font-bold text-base",children:"7404"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Hex NOT Gate"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-sky-400 font-bold text-base",children:"7408"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Quad AND Gate"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-base",children:"7432"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Quad OR Gate"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-amber-400 font-bold text-base",children:"7400"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Quad NAND Gate"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base",children:"7402"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Quad NOR Gate"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base",children:"7486"}),e.jsx("div",{className:"text-slate-400 text-[10px]",children:"Quad XOR Gate"})]})]})]})]}),n==="python"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{size:18,className:"text-emerald-400"}),e.jsx("span",{className:"text-xs font-mono font-bold text-white",children:"module_002_boolean_logic_master_lab.py"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition cursor-pointer",children:[l?e.jsx(N,{size:14,className:"text-emerald-400"}):e.jsx(I,{size:14}),e.jsx("span",{children:l?"Copied!":"Copy Code"})]}),e.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-lg shadow transition cursor-pointer",children:[e.jsx(i,{size:14}),e.jsx("span",{children:"Download .py"})]})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto max-h-[600px] overflow-y-auto font-mono text-xs text-slate-300",children:e.jsx("pre",{className:"whitespace-pre",children:o})})]}),n==="faqs"&&e.jsx(m,{title:"CBSE Class XI Computer Science (083) – Module 002 Comprehensive FAQs",questions:v}),n==="notes"&&e.jsx(C,{content:w,title:"CBSE Class XI CS 083 – Module 002 Complete Revision Handbook",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Plain Text Revision Note",downloadFileName:"module_002_boolean_logic_handbook.txt"}),e.jsx(b,{note:"Make sure to download and test the master Python digital logic suite locally using 'python module_002_boolean_logic_master_lab.py'. It reinforces how Boolean algebra powers binary circuits and helps you excel in CBSE Class XI Computer Science practicals and theory examinations alike! — Sukanta Hui"})]})})}export{S as default};

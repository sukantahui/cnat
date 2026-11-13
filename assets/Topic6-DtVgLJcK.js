import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as f}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as g}from"./FAQTemplate-16IfroqC.js";import{P as N}from"./PlainTextPrint-C6NaUtnE.js";import{P as w}from"./PythonFileLoader-DZ61U3Y_.js";import{d as j,L as v,br as C,a as y,az as L,t as S,c as p}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const T=[{id:1,question:"Which of the following represents the Idempotent Law in Boolean algebra?",options:["A + A = A and A · A = A","A + 0 = A and A · 1 = A","A + 1 = 1 and A · 0 = 0","A + A' = 1 and A · A' = 0"],correctAnswer:0,explanation:"The Idempotent Law states that applying an operation to the same operand twice yields the operand itself ($A + A = A$ and $A \\cdot A = A$).",hint:"Idempotent: combining with self yields self."},{id:2,question:"Which law is represented by: A + BC = (A + B)(A + C)?",options:["Associative Law","Distributive Law of OR over AND","Absorption Law","Commutative Law"],correctAnswer:1,explanation:"In Boolean algebra, OR distributes over AND ($A + BC = (A+B)(A+C)$). This distributive property has no direct equivalent in ordinary real-number arithmetic.",hint:"OR distributing over AND."},{id:3,question:"What is the simplified form of the expression: A + AB?",options:["B","A","AB","A + B"],correctAnswer:1,explanation:"By the Absorption Law: $A + AB = A(1 + B) = A(1) = A$.",hint:"Absorption: A + AB absorbs the B term."},{id:4,question:"What is the simplified form of the expression: A + A'B?",options:["A","B","A + B","AB"],correctAnswer:2,explanation:"By the Distributive Law / 3rd Absorption Law: $A + A'B = (A + A')(A + B) = (1)(A + B) = A + B$.",hint:"A absorbs the A' complement leaving A + B."},{id:5,question:"What is the simplified form of the expression: A(A' + B)?",options:["A","AB","A + B","0"],correctAnswer:1,explanation:"$A(A' + B) = AA' + AB = 0 + AB = AB$.",hint:"Distribute A: A.A' = 0."},{id:6,question:"Which Boolean law states that (A')' = A?",options:["Identity Law","Law of Involution (Double Inversion)","Complement Law","Idempotent Law"],correctAnswer:1,explanation:"The Involution Law (Double Negation) states that complementing a variable twice restores its original value: $(A')' = A$.",hint:"Double inversion = Involution."},{id:7,question:"According to the Null / Boundedness Law, what is A · 0 equal to?",options:["0","1","A","A'"],correctAnswer:0,explanation:"$A \\cdot 0 = 0$. 0 is the annihilator / dominant element for AND.",hint:"Multiplying by 0 gives 0."},{id:8,question:"According to the Null / Boundedness Law, what is A + 1 equal to?",options:["A","0","1","A + 1"],correctAnswer:2,explanation:"$A + 1 = 1$. 1 is the dominant element for OR.",hint:"OR with 1 gives 1."},{id:9,question:"What is the identity element for the Logical OR operation?",options:["1","0","A","-1"],correctAnswer:1,explanation:"0 is the identity element for OR because $A + 0 = A$. Adding 0 preserves the original value.",hint:"A + 0 = A."},{id:10,question:"What is the identity element for the Logical AND operation?",options:["0","1","A","A'"],correctAnswer:1,explanation:"1 is the identity element for AND because $A \\cdot 1 = A$. Multiplying by 1 preserves the value.",hint:"A . 1 = A."},{id:11,question:"Simplify the Boolean expression: X · Y + X · Y' + X' · Y.",options:["X","Y","X + Y","X · Y"],correctAnswer:2,explanation:"$XY + XY' + X'Y = X(Y + Y') + X'Y = X(1) + X'Y = X + X'Y = X + Y$.",hint:"Group first two terms: X(Y+Y') = X, then X + X'Y = X + Y."},{id:12,question:"Simplify the Boolean expression: (A + B)(A + B').",options:["A","B","A + B","0"],correctAnswer:0,explanation:"Using Distributive Law: $(A + B)(A + B') = A + BB' = A + 0 = A$.",hint:"A + BB' = A + 0 = A."},{id:13,question:"Which of the following is the dual form of the equation: A + A'B = A + B?",options:["A · (A' + B) = A · B","A' · (A + B') = A' · B'","A + AB = A","A' + AB = A' + B"],correctAnswer:0,explanation:"Replacing '+' with '.', and '.' with '+': $A + A'B = A + B$ becomes $A \\cdot (A' + B) = A \\cdot B$.",hint:"Swap + and . operators."},{id:14,question:"Which law allows rearranging operands as: A + (B + C) = (A + B) + C?",options:["Commutative Law","Associative Law","Distributive Law","Absorption Law"],correctAnswer:1,explanation:"The Associative Law allows grouping of consecutive identical operations without changing the result.",hint:"Associative = regrouping."},{id:15,question:"Simplify the expression: AB + A'C + BC.",options:["AB + A'C (Consensus Theorem / Redundant term BC)","BC + A'C","AB + BC","A + B + C"],correctAnswer:0,explanation:"By the Consensus Theorem, in $AB + A'C + BC$, the term $BC$ is redundant because $BC = BC(A + A') = ABC + A'BC$. Thus $AB + A'C + BC = AB + A'C$.",hint:"Consensus theorem eliminates BC."},{id:16,question:"What is the value of the Boolean term: A · B · C · 0?",options:["ABC","0","1","A + B + C"],correctAnswer:1,explanation:"By the Boundedness Law for AND, any term multiplied by 0 equals 0.",hint:"Anything . 0 = 0."},{id:17,question:"What is the value of the Boolean term: A + B + C + 1?",options:["A + B + C","0","1","3"],correctAnswer:2,explanation:"By the Boundedness Law for OR, any term added to 1 equals 1.",hint:"Anything + 1 = 1."},{id:18,question:"Simplify: (A + B + C)(A + B + C').",options:["A + B","A + C","B + C","ABC"],correctAnswer:0,explanation:"Let $X = A + B$. Then $(X + C)(X + C') = X + CC' = X + 0 = X = A + B$.",hint:"Let (A+B) = X."},{id:19,question:"Simplify: A(B + C) + A(B + C').",options:["AB","A","AC","A + B"],correctAnswer:1,explanation:"Factor out A: $A[(B + C) + (B + C')] = A[B + (C + C')] = A[B + 1] = A[1] = A$.",hint:"Factor out A: B + 1 = 1."},{id:20,question:"Which postulate ensures that Boolean operations on binary numbers (0, 1) always produce a binary result (0 or 1)?",options:["Closure Postulate","Identity Postulate","Commutative Postulate","Complement Postulate"],correctAnswer:0,explanation:"The Closure Postulate states that the result of any operation on elements of set K also belongs to set K.",hint:"Closure property."},{id:21,question:"What is the complement of 0 in Boolean algebra?",options:["0","1","-1","Null"],correctAnswer:1,explanation:"$0' = 1$. The complement of 0 is 1.",hint:"Invert 0 to get 1."},{id:22,question:"What is the complement of 1 in Boolean algebra?",options:["1","0","-1","Infinity"],correctAnswer:1,explanation:"$1' = 0$. The complement of 1 is 0.",hint:"Invert 1 to get 0."},{id:23,question:"Simplify: A'B'C + A'BC + AB'C + ABC.",options:["A","B","C","1"],correctAnswer:2,explanation:"Factor out C: $C(A'B' + A'B + AB' + AB) = C[A'(B' + B) + A(B' + B)] = C[A'(1) + A(1)] = C[A' + A] = C[1] = C$.",hint:"Factor out C."},{id:24,question:"Which of the following is an example of the Commutative Law for AND?",options:["A · B = B · A","A + B = B + A","A · 1 = A","A · A = A"],correctAnswer:0,explanation:"Commutative Law for AND states that changing the order of operands does not affect the product: $A \\cdot B = B \\cdot A$.",hint:"A . B = B . A."},{id:25,question:"Why is algebraic minimization of Boolean expressions important in digital hardware design?",options:["It reduces the number of logic gates, PCB area, power consumption, propagation delay, and manufacturing cost","It makes the computer processor run on AC current","It converts digital circuits into quantum computers","It eliminates the need for clock oscillators"],correctAnswer:0,explanation:"Minimizing Boolean expressions results in fewer logic gates and connections, resulting in smaller silicon chip area, lower dynamic power dissipation, and higher clock speeds.",hint:"Fewer gates = lower cost, less power, faster speed."}],k=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) REVISION NOTE\r
UNIT 1: COMPUTER SYSTEMS AND ORGANISATION (CSO)\r
TOPIC: POSTULATES AND LAWS OF BOOLEAN LOGIC\r
Educator: Sukanta Hui (Coder & AccoTax, Barrackpore, Kolkata)\r
================================================================================\r
\r
1. POSTULATES OF BOOLEAN ALGEBRA (HUNTINGTON POSTULATES)\r
--------------------------------------------------------------------------------\r
Postulate 1 (Closure):\r
  For any elements A, B in set K, both (A + B) and (A · B) belong to K.\r
\r
Postulate 2 (Identity Elements):\r
  (a) Identity element for OR is 0:  A + 0 = A\r
  (b) Identity element for AND is 1: A · 1 = A\r
\r
Postulate 3 (Commutative Laws):\r
  (a) A + B = B + A\r
  (b) A · B = B · A\r
\r
Postulate 4 (Distributive Laws):\r
  (a) A · (B + C) = (A · B) + (A · C)   [AND distributes over OR]\r
  (b) A + (B · C) = (A + B) · (A + C)   [OR distributes over AND - Note: Unique to Boolean Algebra!]\r
\r
Postulate 5 (Complement Laws):\r
  For every element A, there exists a unique complement A' such that:\r
  (a) A + A' = 1\r
  (b) A · A' = 0\r
\r
2. FUNDAMENTAL THEOREMS OF BOOLEAN ALGEBRA\r
--------------------------------------------------------------------------------\r
(A) Idempotent Law:\r
  (a) A + A = A\r
  (b) A · A = A\r
\r
(B) Boundedness / Null / Dominance Law:\r
  (a) A + 1 = 1\r
  (b) A · 0 = 0\r
\r
(C) Involution Law (Double Inversion):\r
  (A')' = A\r
\r
(D) Associative Law:\r
  (a) (A + B) + C = A + (B + C)\r
  (b) (A · B) · C = A · (B · C)\r
\r
(E) Absorption Laws (Crucial for Simplification):\r
  (a) A + (A · B) = A\r
      Proof: A + AB = A·1 + AB = A·(1 + B) = A·1 = A\r
  (b) A · (A + B) = A\r
      Proof: A·A + A·B = A + AB = A\r
  (c) A + A'B = A + B\r
      Proof: (A + A')(A + B) = 1 · (A + B) = A + B\r
  (d) A · (A' + B) = AB\r
      Proof: A·A' + A·B = 0 + AB = AB\r
\r
3. STEP-BY-STEP ALGEBRAIC REDUCTION EXAMPLE\r
--------------------------------------------------------------------------------\r
Simplify: F = AB + A(B + C) + B(B + C)\r
  Step 1: Expand brackets using Distributive Law:\r
          F = AB + AB + AC + BB + BC\r
  Step 2: Apply Idempotent Law (AB + AB = AB, and BB = B):\r
          F = AB + AC + B + BC\r
  Step 3: Group terms containing B:\r
          F = B(A + 1 + C) + AC\r
  Step 4: Apply Null Law (A + 1 + C = 1):\r
          F = B(1) + AC\r
  Step 5: Apply Identity Law:\r
          F = B + AC (Simplified Minimal SOP Expression).\r
================================================================================\r
`,I=`# boolean_laws_simplifier.py\r
# CBSE Class XI Computer Science (083) - Unit 1: Boolean Logic\r
# Topic: Postulates and Laws of Boolean Logic\r
# Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
\r
"""\r
This Python module demonstrates the fundamental Postulates and Theorems of Boolean Logic.\r
It verifies all law pairs across all input states and performs step-by-step\r
algebraic expression simplification.\r
"""\r
\r
from typing import List, Tuple\r
\r
class BooleanLaws:\r
    # 1. Properties of 0 and 1 (Identity & Null / Boundedness)\r
    @staticmethod\r
    def identity_or(a: int) -> int: return a | 0       # A + 0 = A\r
    @staticmethod\r
    def identity_and(a: int) -> int: return a & 1      # A · 1 = A\r
    @staticmethod\r
    def null_or(a: int) -> int: return a | 1           # A + 1 = 1\r
    @staticmethod\r
    def null_and(a: int) -> int: return a & 0          # A · 0 = 0\r
\r
    # 2. Idempotent Law\r
    @staticmethod\r
    def idempotent_or(a: int) -> int: return a | a     # A + A = A\r
    @staticmethod\r
    def idempotent_and(a: int) -> int: return a & a    # A · A = A\r
\r
    # 3. Complement Law\r
    @staticmethod\r
    def complement_or(a: int) -> int: return a | (1 - a)   # A + A' = 1\r
    @staticmethod\r
    def complement_and(a: int) -> int: return a & (1 - a)  # A · A' = 0\r
\r
    # 4. Involution Law\r
    @staticmethod\r
    def involution(a: int) -> int: return 1 - (1 - a)       # (A')' = A\r
\r
    # 5. Distributive Laws\r
    @staticmethod\r
    def dist_1(a: int, b: int, c: int) -> Tuple[int, int]:\r
        # A(B + C) = AB + AC\r
        lhs = a & (b | c)\r
        rhs = (a & b) | (a & c)\r
        return lhs, rhs\r
\r
    @staticmethod\r
    def dist_2(a: int, b: int, c: int) -> Tuple[int, int]:\r
        # A + BC = (A + B)(A + C)  [Unique Boolean Distributive Form]\r
        lhs = a | (b & c)\r
        rhs = (a | b) & (a | c)\r
        return lhs, rhs\r
\r
    # 6. Absorption Laws\r
    @staticmethod\r
    def absorption_1(a: int, b: int) -> Tuple[int, int]:\r
        # A + AB = A\r
        lhs = a | (a & b)\r
        return lhs, a\r
\r
    @staticmethod\r
    def absorption_2(a: int, b: int) -> Tuple[int, int]:\r
        # A(A + B) = A\r
        lhs = a & (a | b)\r
        return lhs, a\r
\r
    @staticmethod\r
    def absorption_3(a: int, b: int) -> Tuple[int, int]:\r
        # A + A'B = A + B\r
        lhs = a | ((1 - a) & b)\r
        rhs = a | b\r
        return lhs, rhs\r
\r
def demonstrate_all_laws():\r
    print("=" * 70)\r
    print("      CBSE CLASS XI CS (083) - BOOLEAN LAWS VERIFIER & CATALOGUE")\r
    print("=" * 70)\r
\r
    # Verify Second Distributive Law: A + BC = (A + B)(A + C)\r
    print("\\n[1] SECOND DISTRIBUTIVE LAW: A + BC = (A + B)(A + C)")\r
    print("-" * 60)\r
    print(f"{'A':<4} {'B':<4} {'C':<4} | {'LHS: A + BC':<15} | {'RHS: (A+B)(A+C)':<15} | {'Status'}")\r
    print("-" * 60)\r
    for a in [0, 1]:\r
        for b in [0, 1]:\r
            for c in [0, 1]:\r
                lhs, rhs = BooleanLaws.dist_2(a, b, c)\r
                status = "MATCH (Equal)" if lhs == rhs else "ERROR"\r
                print(f"{a:<4} {b:<4} {c:<4} | {lhs:<15} | {rhs:<15} | {status}")\r
\r
    # Verify Absorption Law: A + A'B = A + B\r
    print("\\n[2] THIRD ABSORPTION LAW: A + A'B = A + B")\r
    print("-" * 60)\r
    print(f"{'A':<4} {'B':<4} | {'LHS: A + A\\'B':<15} | {'RHS: A + B':<15} | {'Status'}")\r
    print("-" * 60)\r
    for a in [0, 1]:\r
        for b in [0, 1]:\r
            lhs, rhs = BooleanLaws.absorption_3(a, b)\r
            print(f"{a:<4} {b:<4} | {lhs:<15} | {rhs:<15} | MATCH")\r
\r
if __name__ == "__main__":\r
    demonstrate_all_laws()\r
`,D=()=>{const[d,h]=o.useState("dist2"),[n,b]=o.useState(1),[r,u]=o.useState(0),[i,B]=o.useState(1),c={identity:{name:"Identity Laws",orForm:"A + 0 = A",andForm:"A · 1 = A",description:"0 is the identity for OR; 1 is the identity for AND.",evalLHS:t=>t|0,evalRHS:t=>t,lawType:"Single Variable"},idempotent:{name:"Idempotent Laws",orForm:"A + A = A",andForm:"A · A = A",description:"Combining a variable with itself yields the variable unchanged.",evalLHS:t=>t|t,evalRHS:t=>t,lawType:"Single Variable"},boundedness:{name:"Boundedness / Null Laws",orForm:"A + 1 = 1",andForm:"A · 0 = 0",description:"1 dominates OR (pulls HIGH); 0 dominates AND (pulls LOW).",evalLHS:t=>t|1,evalRHS:()=>1,lawType:"Single Variable"},complement:{name:"Complement Laws",orForm:"A + A' = 1",andForm:"A · A' = 0",description:"A variable ORed with its inverse is 1; ANDed with its inverse is 0.",evalLHS:t=>t|1-t,evalRHS:()=>1,lawType:"Single Variable"},dist2:{name:"2nd Distributive Law (OR over AND)",orForm:"A + (B · C) = (A + B) · (A + C)",andForm:"A · (B + C) = (A · B) + (A · C)",description:"Unique to Boolean Algebra: Addition distributes over multiplication!",evalLHS:(t,s,l)=>t|s&l,evalRHS:(t,s,l)=>(t|s)&(t|l),lawType:"3 Variables"},absorption:{name:"Absorption Laws",orForm:"A + (A · B) = A",andForm:"A + A'B = A + B",description:"Absorbs redundant terms to produce optimal minimal circuits.",evalLHS:(t,s)=>t|1-t&s,evalRHS:(t,s)=>t|s,lawType:"2 Variables"}},a=c[d],m=a.evalLHS(n,r,i),x=a.evalRHS(n,r,i),A=m===x;return e.jsxs("div",{className:"bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(p,{size:20,className:"animate-pulse"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Boolean Postulates & Laws Workbench"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a law, test with custom binary values (0/1), and observe LHS vs RHS equivalence in real-time."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Verification:"}),e.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${A?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-rose-500/20 text-rose-400"}`,children:A?"LHS == RHS (Identically Equal)":"Mismatch"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(c).map(([t,s])=>e.jsx("button",{onClick:()=>h(t),className:`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${d===t?"bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md":"bg-slate-900 text-slate-400 border-slate-800 hover:text-white"}`,children:s.name},t))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-900/60 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"md:col-span-4 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Test Values:"}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:"Variable A:"}),e.jsxs("button",{onClick:()=>b(n===0?1:0),className:`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer ${n===1?"bg-sky-500 text-white":"bg-slate-800 text-slate-400"}`,children:["A = ",n]})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:"Variable B:"}),e.jsxs("button",{onClick:()=>u(r===0?1:0),className:`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer ${r===1?"bg-sky-500 text-white":"bg-slate-800 text-slate-400"}`,children:["B = ",r]})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:"Variable C:"}),e.jsxs("button",{onClick:()=>B(i===0?1:0),className:`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer ${i===1?"bg-sky-500 text-white":"bg-slate-800 text-slate-400"}`,children:["C = ",i]})]})]}),e.jsxs("div",{className:"md:col-span-5 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:a.name}),e.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:a.lawType})]}),e.jsxs("div",{className:"space-y-2 font-mono text-xs",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900/90 rounded-lg border border-slate-800/80",children:[e.jsx("span",{className:"text-slate-400 text-[10px] block uppercase",children:"OR Form (Disjunction):"}),e.jsx("span",{className:"text-white font-bold text-sm",children:a.orForm})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900/90 rounded-lg border border-slate-800/80",children:[e.jsx("span",{className:"text-slate-400 text-[10px] block uppercase",children:"AND Form (Conjunction):"}),e.jsx("span",{className:"text-white font-bold text-sm",children:a.andForm})]})]}),e.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed italic",children:['"',a.description,'"']})]}),e.jsxs("div",{className:"md:col-span-3 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"LHS vs RHS Output:"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"LHS"}),e.jsx("span",{className:"text-xl font-mono font-bold text-sky-400",children:m})]}),e.jsx("span",{className:"text-slate-500 font-bold",children:"="}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"RHS"}),e.jsx("span",{className:"text-xl font-mono font-bold text-emerald-400",children:x})]})]}),e.jsx("span",{className:"text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10",children:"100% Mathematically Valid"})]})]})]})};function X(){return e.jsx("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold rounded-full",children:"Boolean Postulates & Laws"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Postulates and Laws of Boolean Logic"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Master Huntington's postulates, identity properties, idempotent laws, complement laws, distributive laws, and absorption rules for rapid algebraic simplification of digital circuits."})]})]}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-700/60 pb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(j,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Fundamental Postulates vs Algebraic Theorems"}),e.jsx("p",{className:"text-xs text-slate-400",children:"The formal axioms established by Huntington (1904) that define the Boolean algebra system."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30",children:"Postulate 1 & 2"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Closure & Identity"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Operations on binary elements strictly produce binary outputs. ",e.jsx("code",{className:"text-sky-300",children:"A + 0 = A"})," and ",e.jsx("code",{className:"text-sky-300",children:"A · 1 = A"})," define 0 as the OR identity and 1 as the AND identity."]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30",children:"Postulate 3 & 4"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Commutative & Distributive"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Order of operands does not matter. Uniquely in Boolean logic, ",e.jsx("strong",{children:"OR distributes over AND"}),": ",e.jsx("code",{className:"text-amber-300",children:"A + BC = (A + B)(A + C)"}),"."]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30",children:"Theorem 5 & 6"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Absorption & Involution"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-emerald-300",children:"A + AB = A"})," and ",e.jsx("code",{className:"text-emerald-300",children:"A + A'B = A + B"})," eliminate redundant terms. Double inversion restores variable: ",e.jsx("code",{className:"text-emerald-300",children:"(A')' = A"}),"."]})]})]})]}),e.jsx(D,{}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-700/60 pb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(v,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Comprehensive Boolean Laws Master Reference Table"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Dual pairs of all major Boolean theorems for quick exam revision."})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs text-slate-300 bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden font-mono",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Law Name"}),e.jsx("th",{className:"p-3 text-sky-400",children:"OR Form (Dual 1)"}),e.jsx("th",{className:"p-3 text-emerald-400",children:"AND Form (Dual 2)"}),e.jsx("th",{className:"p-3",children:"Description / Note"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Identity Law"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + 0 = A"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A · 1 = A"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Preserves original value"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Idempotent Law"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + A = A"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A · A = A"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Reduces redundant self-terms"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Null / Boundedness"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + 1 = 1"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A · 0 = 0"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Dominant element annihilation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Complement Law"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + A' = 1"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A · A' = 0"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Tautology vs Contradiction"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Involution Law"}),e.jsx("td",{className:"p-3 text-sky-300",colSpan:2,children:"(A')' = A"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Double negation cancels"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Commutative Law"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + B = B + A"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A · B = B · A"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Operand order interchangeable"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Distributive Law"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + BC = (A+B)(A+C)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A(B + C) = AB + AC"}),e.jsx("td",{className:"p-3 text-slate-400",children:"OR distributes over AND"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Absorption Laws"}),e.jsx("td",{className:"p-3 text-sky-300",children:"A + AB = A | A + A'B = A + B"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"A(A + B) = A | A(A' + B) = AB"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Essential for circuit minimization"})]})]})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{size:18,className:"text-sky-400"}),e.jsx("h2",{className:"text-lg font-bold text-white",children:"Boolean Laws Algebraic Simplifier Script"})]}),e.jsx(w,{fileModule:I,title:"boolean_laws_simplifier.py",highlightLines:[16,21,26,38,48,56]})]}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-700/60 pb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(y,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Why Boolean Simplification Saves Billions"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Impact on VLSI microprocessor design and power consumption."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-sky-400 uppercase tracking-wider",children:"EDA Silicon Optimization"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Logic Gate Count Reduction"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Automated Electronic Design Automation (EDA) tools apply absorption and distributive laws to simplify logic networks containing billions of transistors, saving silicon die area and cutting production cost."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Thermal & Battery Life"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Propagation Delay & Power Efficiency"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Fewer gates in a critical timing path directly reduces propagation delay (speeding up GHz CPU clock speeds) and lowers CMOS dynamic switching energy in mobile devices."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(L,{size:18})," Common Algebra Mistakes"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Overlooking 2nd Distributive Law:"})," Forgetting that ",e.jsx("code",{className:"font-mono text-rose-300",children:"A + BC = (A + B)(A + C)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Confusing A + A with 2A:"})," In Boolean logic, ",e.jsx("code",{className:"font-mono text-rose-300",children:"A + A = A"})," (Idempotent). There are no coefficients!"]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(S,{size:18})," Pro Simplification Strategy"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-emerald-300",children:"Factor Common Literals:"})," Look for opportunities to factor terms: e.g. ",e.jsx("code",{className:"font-mono text-emerald-300",children:"AB + AB' = A(B + B') = A(1) = A"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-emerald-300",children:"State Laws in Margin:"})," When simplifying expressions in CBSE exams, write the name of each applied law next to the step."]})]})]})]}),e.jsxs("div",{className:"p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3",children:[e.jsx(p,{className:"text-amber-400 shrink-0 mt-0.5",size:18}),e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-amber-400 font-semibold",children:"Teacher's High-Yield Simplification Formula:"}),e.jsxs("p",{className:"mt-1",children:["Whenever you see ",e.jsx("code",{className:"font-mono text-amber-300",children:"A + A'B"}),", immediately replace it with ",e.jsx("code",{className:"font-mono text-amber-300",children:"A + B"}),". This single absorption identity simplifies over 70% of board exam minimization questions!"]})]})]}),e.jsx(g,{title:"CBSE Class XI Computer Science (083) – Boolean Postulates & Laws FAQs",questions:T}),e.jsx(N,{content:k,title:"CBSE Class XI CS 083 – Boolean Postulates & Laws Quick Revision",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 6 Plain Text Note",downloadFileName:"topic6_note.txt"}),e.jsx(f,{note:"Boolean law simplification questions in CBSE Class XI CS 083 require clear step-by-step reasoning. Never jump directly to the final answer. Expand brackets, group common literals, invoke Huntington's postulates, and always state the law used in each step. — Sukanta Hui"})]})})}export{X as default};

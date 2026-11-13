import{j as e,b as m}from"./vendor-react-core-B-R9HE-Z.js";import{T as g}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as x}from"./FAQTemplate-16IfroqC.js";import{P as b}from"./PlainTextPrint-C6NaUtnE.js";import{P as f}from"./PythonFileLoader-DZ61U3Y_.js";import{c as y,br as w,L as N,az as A,t as T,a7 as v,a1 as j,y as C}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const S=[{id:1,question:"What is the correct sequential order of steps in the computer problem-solving lifecycle?",options:["Coding -> Testing -> Problem Definition -> Algorithm Design","Problem Definition & Analysis -> Algorithm Design (Flowchart/Pseudocode) -> Coding (Implementation) -> Testing & Debugging -> Documentation","Testing -> Coding -> Algorithm -> Maintenance","Flowchart -> Hardware Purchase -> Testing -> Coding"],correctAnswer:1,explanation:"The systematic problem-solving cycle begins with Problem Definition & Understanding, followed by Algorithm/Flowchart Design, Program Implementation (Coding), Testing & Debugging, and final Documentation/Maintenance.",hint:"Understand the problem before designing algorithms and writing code."},{id:2,question:"What is an Algorithm in computer programming?",options:["A physical chip on the motherboard","A step-by-step, finite sequence of well-defined, unambiguous computational instructions to solve a given problem","A compiled binary .exe file","A programming error message"],correctAnswer:1,explanation:"An algorithm is an abstract, language-independent, finite, unambiguous, step-by-step procedure that accepts inputs and produces expected outputs.",hint:"Finite step-by-step logical instructions."},{id:3,question:"In standard flowchart notation, which geometrical shape represents an 'Input / Output' operation?",options:["Rectangle","Parallelogram","Diamond (Rhombus)","Oval / Rounded Rectangle"],correctAnswer:1,explanation:"A Parallelogram is used to represent Input (e.g., `READ A, B` or `INPUT N`) and Output (e.g., `PRINT SUM`) operations.",hint:"Parallelogram = Input / Output."},{id:4,question:"Which flowchart symbol represents a 'Decision / Condition' with multiple branch pathways?",options:["Diamond (Rhombus)","Rectangle","Circle","Parallelogram"],correctAnswer:0,explanation:"A Diamond (Rhombus) represents a conditional decision point with test conditions (e.g. `Is X > 0?`) that branch into 'Yes/True' and 'No/False' paths.",hint:"Diamond = Decision / Condition."},{id:5,question:"Which flowchart symbol represents an internal computational step or processing action (e.g. `SUM = A + B`)?",options:["Rectangle","Oval","Diamond","Parallelogram"],correctAnswer:0,explanation:"A Rectangle is used for general computational processing, arithmetic calculations, and variable assignments.",hint:"Rectangle = Processing / Computation."},{id:6,question:"Which flowchart symbol represents the Start and Stop (Terminal) of an algorithm?",options:["Oval / Ellipse (Rounded Rectangle)","Rectangle","Diamond","Triangle"],correctAnswer:0,explanation:"An Oval (or rounded capsule) denotes the Start or Stop / End terminal point of a flowchart.",hint:"Oval = Start / Stop."},{id:7,question:"What is the purpose of a Small Circle symbol in complex flowcharts?",options:["To multiply two variables","To act as a Connector linking different flowlines or pages without drawing crossing lines","To stop the program immediately","To declare a floating point variable"],correctAnswer:1,explanation:"A small circle serves as a Connector symbol to join converging flowlines or connect flowchart sections across page boundaries cleanly.",hint:"Connector joining pathways."},{id:8,question:"What is Pseudocode?",options:["Incorrect code with intentional syntax errors","An informal, high-level, human-readable description of an algorithm that uses structured programming constructs without strict programming language syntax","Machine code executed directly by the CPU","Encrypted source code"],correctAnswer:1,explanation:"Pseudocode is an informal, semi-structured English notation that outlines algorithmic logic using keywords like `IF`, `THEN`, `ELSE`, `WHILE`, `FOR`, `OUTPUT` without strict compiler syntax rules.",hint:"Informal, human-readable structured outline of an algorithm."},{id:9,question:"What is a 'Dry Run' (or Manual Code Tracing) in algorithm testing?",options:["Running code on a computer with the fan turned off","Manually executing the steps of an algorithm on paper using a Trace Table with sample test inputs to verify variable state changes and logic correctness","Compiling code without an internet connection","Checking code formatting rules"],correctAnswer:1,explanation:"A Dry Run is manual mental/paper execution where the programmer steps through lines of code, updating variable values in a Trace Table to detect logical errors before execution.",hint:"Manual step-by-step tracing on paper with a trace table."},{id:10,question:"Which characteristic is NOT a mandatory property of a well-designed algorithm?",options:["Finiteness (must terminate after a countable number of steps)","Unambiguity (each instruction must be clear and precise)","Language Dependence (must be written exclusively in Python)","Feasibility (every operation must be physically achievable)"],correctAnswer:2,explanation:"Algorithms are fundamentally independent of any specific programming language. The same algorithm can be implemented in Python, C++, Java, or Rust.",hint:"Algorithms are language-independent."},{id:11,question:"What is Euclid's Algorithm used for?",options:["Finding the Greatest Common Divisor (GCD / HCF) of two positive integers using repeated division / modulo","Calculating square roots","Sorting an array of numbers","Generating random numbers"],correctAnswer:0,explanation:"Euclid's Algorithm computes the GCD of two numbers by repeatedly replacing $(a, b)$ with $(b, a pmod b)$ until the remainder reaches 0.",hint:"Greatest Common Divisor (GCD) computation."},{id:12,question:"In the algorithm to find the largest of two numbers A and B, which decision condition should be tested?",options:["Is A > B?","Is A + B == 0?","Is A * B > 0?","Is A / B == 1?"],correctAnswer:0,explanation:"Testing `A > B` determines whether `A` is strictly larger (True path) or `B` is larger/equal (False path).",hint:"Compare A and B using the relational greater-than operator."},{id:13,question:"What is an 'Infinite Loop' in algorithmic execution?",options:["A loop that repeats indefinitely because its termination condition is never satisfied","A loop with 1,000 iterations","A fast loop executing in GPU memory","A loop with no variables"],correctAnswer:0,explanation:"An infinite loop occurs when loop control variables are never updated toward the exit condition, causing the algorithm to violate the principle of Finiteness.",hint:"A loop whose termination condition never becomes false."},{id:14,question:`What is the output of dry-running this algorithm with N = 5?
1. Initialize FACT = 1, I = 1
2. WHILE I <= N DO
     FACT = FACT * I
     I = I + 1
3. PRINT FACT`,options:["15","120","24","720"],correctAnswer:1,explanation:"I=1: FACT=1; I=2: FACT=2; I=3: FACT=6; I=4: FACT=24; I=5: FACT=120. When I=6, loop exits. Output is 120 (5!).",hint:"5! = 5 * 4 * 3 * 2 * 1 = 120."},{id:15,question:"Which directional arrows are standard in flowchart design?",options:["Flowlines connecting symbols with arrowheads pointing the direction of execution flow (Top to Bottom, Left to Right)","Dotted lines without arrowheads","Circular curves only","Diagonal zigzag lines"],correctAnswer:0,explanation:"Standard flowchart guidelines specify flowlines with arrowheads generally directing top-to-bottom and left-to-right execution paths.",hint:"Flowlines with directional arrowheads."},{id:16,question:"What is the time complexity category of a simple linear search algorithm checking N elements sequentially?",options:["O(1) Constant Time","O(N) Linear Time","O(N²) Quadratic Time","O(log N) Logarithmic Time"],correctAnswer:1,explanation:"Linear search checks each element one by one up to $N$ times in the worst case, giving $O(N)$ linear time complexity.",hint:"Proportional directly to the number of elements N."},{id:17,question:"Which problem-solving approach breaks a complex problem down into smaller, manageable, independent sub-problems?",options:["Top-Down Modular Decomposition (Divide and Conquer)","Trial and Error","Brute Force Guessing","Bottom-Up Random Search"],correctAnswer:0,explanation:"Top-Down modular design decomposes large problems into smaller logical modules or subroutines that can be developed and tested independently.",hint:"Modular decomposition / Divide and Conquer."},{id:18,question:"What is a 'Trace Table' used for?",options:["Drawing flowcharts in Microsoft Paint","A structured grid with columns for line numbers, variables, and conditions used during manual dry runs to track state values step-by-step","Storing database records","Writing CSS table styling"],correctAnswer:1,explanation:"A Trace Table has columns for step number, condition evaluations, and every active variable, recording their exact mathematical values after each execution step.",hint:"Grid tracking variable values during dry runs."},{id:19,question:"What is the purpose of testing an algorithm with 'Edge Cases' (Boundary Values)?",options:["To ensure the algorithm handles extreme or boundary inputs correctly (e.g. 0, negative numbers, empty strings, maximum integers)","To test if the monitor screen works","To color the edges of the flowchart","To check internet bandwidth"],correctAnswer:0,explanation:"Boundary and edge testing verifies that algorithms do not crash or produce flawed output on edge conditions like empty inputs, division by zero, or negative numbers.",hint:"Testing extreme inputs like 0, negative values, and limits."},{id:20,question:"In algorithm design, what does the term 'Efficiency' refer to?",options:["The color of the code editor theme","The resource consumption of the algorithm in terms of execution time (Time Complexity) and memory usage (Space Complexity)","The number of comments in the program","How quickly a student can type the code"],correctAnswer:1,explanation:"Algorithmic efficiency measures Time Complexity (how execution time scales with input size $N$) and Space Complexity (how much memory is consumed).",hint:"Time and space (memory) resource consumption."},{id:21,question:`Dry Run: What is the final value of S when the following steps execute?
1. S = 0, K = 1
2. WHILE K <= 4 DO
     S = S + (K * K)
     K = K + 1
3. PRINT S`,options:["10","30","16","20"],correctAnswer:1,explanation:"K=1: S=0+1=1; K=2: S=1+4=5; K=3: S=5+9=14; K=4: S=14+16=30. When K=5, loop terminates. Sum of squares = 1² + 2² + 3² + 4² = 30.",hint:"1 + 4 + 9 + 16 = 30."},{id:22,question:"Which of the following is a valid representation of a condition in pseudocode?",options:["IF marks >= 33 THEN OUTPUT 'PASS' ELSE OUTPUT 'FAIL'","DO marks WHILE 33","MAKE marks 33","GOTO PASS"],correctAnswer:0,explanation:"`IF condition THEN action1 ELSE action2` is standard, structured conditional pseudocode syntax.",hint:"IF-THEN-ELSE structured format."},{id:23,question:"Why should flowcharts avoid crossing flowlines wherever possible?",options:["Because crossing flowlines creates visual confusion and ambiguity in execution paths","Because compilers cannot parse crossing lines","Because flowcharts must be square","Because it violates copyright law"],correctAnswer:0,explanation:"Crossing flowlines reduce readability and cause ambiguity; connectors should be used instead to maintain clear top-to-bottom and left-to-right flow.",hint:"Use connectors to prevent visual ambiguity."},{id:24,question:"What is the primary role of Documentation in software engineering?",options:["To explain program logic, architecture, usage instructions, and APIs for future maintenance and collaborative development","To increase the size of the repository","To hide source code from users","To speed up compiler execution"],correctAnswer:0,explanation:"Documentation preserves program rationale, clarifies algorithmic design, details parameter constraints, and allows other programmers to maintain and extend the software.",hint:"Clear explanations facilitating maintenance and collaboration."},{id:25,question:"Case Study: Debangshu is writing an algorithm to check whether a year is a Leap Year. Which combination of conditions is mathematically correct?",options:["Year is divisible by 4 AND (Year is NOT divisible by 100 OR Year is divisible by 400)","Year is divisible by 4 only","Year is divisible by 100 only","Year is divisible by 2"],correctAnswer:0,explanation:"In the Gregorian calendar, a year is a leap year if `(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)`.",hint:"Divisible by 4, not century year unless divisible by 400."}],I=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT II: COMPUTATIONAL THINKING AND PROGRAMMING - 1 (PYTHON) - 45 MARKS\r
MODULE 004_001: PROBLEM SOLVING METHODOLOGY, ALGORITHMS & FLOWCHARTS\r
================================================================================\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
Official Syllabus Aligned: 2024-25 / 2025-26 Senior Secondary Computer Science\r
\r
1. PROBLEM-SOLVING LIFECYCLE\r
--------------------------------------------------------------------------------\r
1. Problem Analysis & Understanding:\r
   - Identify Input requirements, Expected Output format, and Processing Constraints.\r
2. Algorithm Design:\r
   - Formulate language-independent logical steps using Pseudocode and Flowcharts.\r
3. Program Implementation (Coding):\r
   - Translate the algorithm into high-level programming language syntax (Python).\r
4. Testing & Debugging:\r
   - Test using dry runs, trace tables, sample cases, and boundary/edge inputs.\r
5. Documentation & Maintenance:\r
   - Add inline comments, docstrings, user manuals, and prepare for future upgrades.\r
\r
2. CORE PROPERTIES OF AN ALGORITHM\r
--------------------------------------------------------------------------------\r
- Input: Takes zero or more well-defined inputs.\r
- Output: Produces at least one clear, well-defined output.\r
- Finiteness: Must terminate after a countable number of execution steps.\r
- Definiteness (Unambiguity): Every step must be unambiguous, clear, and precise.\r
- Feasibility / Effectiveness: Operations must be basic and achievable on hardware.\r
- Language Independence: An algorithm can be implemented in any language.\r
\r
3. STANDARD FLOWCHART SYMBOLS & CONVENTIONS\r
--------------------------------------------------------------------------------\r
1. Oval / Rounded Rectangle (Terminal):\r
   - Represents START and STOP / END of the flowchart.\r
2. Parallelogram (Input / Output):\r
   - Represents data input (\`INPUT A, B\`, \`READ N\`) and output (\`PRINT RES\`, \`DISPLAY\`).\r
3. Rectangle (Processing):\r
   - Represents computational operations, calculations, and assignments (\`SUM = A + B\`, \`I = 1\`).\r
4. Diamond / Rhombus (Decision):\r
   - Represents conditional checks (\`Is N > 0?\`, \`Is A > B?\`) with branching paths (Yes / No).\r
5. Small Circle (Connector):\r
   - Joins converging pathways or connects sections across pages without crossing lines.\r
6. Flowlines with Arrowheads:\r
   - Indicate exact sequence of execution (strictly Top-to-Bottom and Left-to-Right).\r
\r
4. DRY RUNNING & TRACE TABLES\r
--------------------------------------------------------------------------------\r
A Dry Run is manual mental/paper execution of an algorithm before running it on a computer.\r
A Trace Table tracks:\r
- Step Number / Line Number\r
- Active Variable Values (e.g., I, N, SUM, FACT)\r
- Condition Evaluations (True / False)\r
- Output Emitted\r
\r
Example: Factorial Algorithm Trace Table (for N = 4):\r
-------------------------------------------------------------\r
Step | I | FACT | Condition (I <= N) | Action / Calculation\r
-------------------------------------------------------------\r
1    | 1 | 1    | -                  | Initialization\r
2    | 1 | 1    | 1 <= 4 (True)      | FACT = 1 * 1 = 1, I = 2\r
3    | 2 | 2    | 2 <= 4 (True)      | FACT = 1 * 2 = 2, I = 3\r
4    | 3 | 6    | 3 <= 4 (True)      | FACT = 2 * 3 = 6, I = 4\r
5    | 4 | 24   | 4 <= 4 (True)      | FACT = 6 * 4 = 24, I = 5\r
6    | 5 | 24   | 5 <= 4 (False)     | Loop Exits -> Output 24\r
-------------------------------------------------------------\r
\r
5. CLASSIC ALGORITHMS FOR CLASS XI EXAMS\r
--------------------------------------------------------------------------------\r
1. Sum of first N natural numbers: Formula $S = \\frac{N(N+1)}{2}$ or iterative accumulation.\r
2. Greatest of Three Numbers: Nested conditional comparisons.\r
3. Prime Number Verification: Check divisors from $2$ to $\\sqrt{N}$.\r
4. GCD / HCF using Euclid's Modulo Algorithm: Replace $(A, B)$ with $(B, A \\bmod B)$ until $B = 0$.\r
5. Fibonacci Series: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$.\r
\r
================================================================================\r
END OF REVISION NOTES - MODULE 004_001\r
================================================================================\r
`,E=`"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) - UNIT II\r
MODULE 004_001: PROBLEM SOLVING & ALGORITHM TRACING LABORATORY\r
Topic: Algorithm Implementation with Automated Trace Tables (Euclid GCD, Prime, Factorial)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
import math\r
from typing import List, Dict, Tuple\r
\r
\r
def trace_euclidean_gcd(a: int, b: int) -> Tuple[int, List[Dict]]:\r
    """Traces Euclid's Algorithm step-by-step for Greatest Common Divisor (GCD)."""\r
    steps = []\r
    step_num = 1\r
    num1, num2 = a, b\r
\r
    while num2 != 0:\r
        quotient = num1 // num2\r
        remainder = num1 % num2\r
        steps.append({\r
            "step": step_num,\r
            "a": num1,\r
            "b": num2,\r
            "quotient": quotient,\r
            "remainder": remainder,\r
            "next_a": num2,\r
            "next_b": remainder\r
        })\r
        num1, num2 = num2, remainder\r
        step_num += 1\r
\r
    return num1, steps\r
\r
\r
def trace_factorial(n: int) -> Tuple[int, List[Dict]]:\r
    """Generates an iterative trace table for factorial calculation."""\r
    steps = []\r
    fact = 1\r
    for i in range(1, n + 1):\r
        prev_fact = fact\r
        fact *= i\r
        steps.append({\r
            "step": i,\r
            "i": i,\r
            "prev_fact": prev_fact,\r
            "fact": fact,\r
            "condition": f"{i} <= {n} (True)"\r
        })\r
    return fact, steps\r
\r
\r
def is_prime_optimized(n: int) -> Tuple[bool, List[str]]:\r
    """Checks prime number property by testing factors up to sqrt(N)."""\r
    logs = []\r
    if n <= 1:\r
        return False, [f"N = {n} is <= 1, therefore NOT PRIME."]\r
\r
    limit = int(math.isqrt(n))\r
    logs.append(f"Testing divisors from 2 up to sqrt({n}) ≈ {limit}")\r
\r
    for d in range(2, limit + 1):\r
        if n % d == 0:\r
            logs.append(f"Found divisor: {n} % {d} == 0 -> COMPOSITE (Not Prime)")\r
            return False, logs\r
        else:\r
            logs.append(f"{n} % {d} != 0 (No remainder)")\r
\r
    logs.append(f"No divisors found in [2, {limit}] -> PRIME NUMBER!")\r
    return True, logs\r
\r
\r
if __name__ == "__main__":\r
    print("=" * 70)\r
    print("ALGORITHM 1: EUCLID'S GREATEST COMMON DIVISOR (GCD)")\r
    print("=" * 70)\r
    num_a, num_b = 48, 18\r
    gcd_res, gcd_steps = trace_euclidean_gcd(num_a, num_b)\r
\r
    print(f"{'Step':^6} | {'A':^6} | {'B':^6} | {'Quotient':^10} | {'Remainder':^10} | {'Next (A, B)':^14}")\r
    print("-" * 70)\r
    for s in gcd_steps:\r
        print(f"{s['step']:^6d} | {s['a']:^6d} | {s['b']:^6d} | {s['quotient']:^10d} | {s['remainder']:^10d} | ({s['next_a']}, {s['next_b']})")\r
    print(f"\\nFinal GCD({num_a}, {num_b}) = {gcd_res}")\r
\r
    print("\\n" + "=" * 70)\r
    print("ALGORITHM 2: FACTORIAL TRACE TABLE (N = 5)")\r
    print("=" * 70)\r
    f_res, f_steps = trace_factorial(5)\r
    for s in f_steps:\r
        print(f"Step {s['step']}: I = {s['i']} | Calculation: {s['prev_fact']} * {s['i']} = {s['fact']}")\r
    print(f"Final 5! = {f_res}")\r
`,R=()=>{const[s,c]=m.useState("decision"),n={terminal:{name:"Oval / Rounded Capsule",role:"Start / Stop (Terminal)",shape:"Oval",color:"border-sky-500 text-sky-400 bg-sky-500/10",description:"Represents the absolute entry (START) and termination (STOP / END) points of the flowchart. A flowchart must contain exactly one START and at least one STOP symbol.",syntaxExample:`START
STOP`},io:{name:"Parallelogram",role:"Input / Output Operation",shape:"Parallelogram",color:"border-emerald-500 text-emerald-400 bg-emerald-500/10",description:"Represents data acquisition from users or devices (Input) and emission of calculated results to screens or printers (Output).",syntaxExample:`INPUT A, B
READ Mark
PRINT Sum
DISPLAY 'Passed'`},processing:{name:"Rectangle",role:"Processing / Computational Action",shape:"Rectangle",color:"border-amber-500 text-amber-400 bg-amber-500/10",description:"Represents internal arithmetic calculations, variable initializations, data manipulation, or memory assignments.",syntaxExample:`SUM = A + B
I = I + 1
FACT = 1
AREA = PI * R * R`},decision:{name:"Diamond (Rhombus)",role:"Decision / Conditional Branching",shape:"Diamond",color:"border-rose-500 text-rose-400 bg-rose-500/10",description:"Evaluates a relational or boolean condition (True/False, Yes/No). It possesses one entry flowline and two or more exiting flowlines labeled with condition outcomes.",syntaxExample:`Is A > B ?
Is Num % 2 == 0 ?
Is Count <= 10 ?`},connector:{name:"Small Circle",role:"Connector (On-Page / Off-Page)",shape:"Circle",color:"border-purple-500 text-purple-400 bg-purple-500/10",description:"Used to connect intersecting or distant flowlines cleanly without drawing messy overlapping lines across the diagram.",syntaxExample:`Circle with letter 'A'
Links to matching 'A' elsewhere`}};return e.jsxs("div",{className:"bg-slate-950/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(j,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Standard Flowchart Geometric Notation Explorer"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click any standard flowchart symbol to inspect its standard CBSE drawing rules, role, and pseudocode equivalent."})]})]})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2.5",children:Object.keys(n).map(a=>{const i=n[a],l=s===a;return e.jsxs("button",{onClick:()=>c(a),className:`p-3 rounded-xl border text-left transition-all ${l?`${i.color} shadow-lg scale-105 font-bold`:"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("span",{className:"text-xs block font-bold text-white truncate",children:i.shape}),e.jsx("span",{className:"text-[10px] text-slate-400 block truncate",children:i.role.split("(")[0]})]},a)})}),e.jsxs("div",{className:`p-5 rounded-2xl border ${n[s].color} space-y-4`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-base font-bold text-white",children:n[s].name}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20",children:n[s].role})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-200 leading-relaxed",children:n[s].description}),e.jsxs("div",{className:"bg-slate-950/80 p-3.5 rounded-xl border border-white/10 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Standard Pseudocode Example:"}),e.jsx("pre",{className:"font-mono text-xs text-sky-300 whitespace-pre-wrap",children:n[s].syntaxExample})]})]})]})},D=()=>{const[s,c]=m.useState(48),[n,a]=m.useState(18),i=Math.max(1,Math.floor(Number(s)||1)),l=Math.max(1,Math.floor(Number(n)||1)),p=[];let o=i,r=l,u=1;for(;r!==0;){const t=Math.floor(o/r),d=o%r;p.push({step:u,a:o,b:r,quotient:t,remainder:d,nextA:r,nextB:d}),o=r,r=d,u++}const h=o;return e.jsxs("div",{className:"bg-slate-900/90 rounded-2xl p-5 border border-sky-500/30 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{size:18,className:"text-sky-400"}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Live Algorithm Trace Table (Euclid's GCD)"})]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Manual Dry Run Simulation"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Number A:"}),e.jsx("input",{type:"number",min:"1",value:s,onChange:t=>c(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Number B:"}),e.jsx("input",{type:"number",min:"1",value:n,onChange:t=>a(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3",children:"Step"}),e.jsx("th",{className:"py-2 px-3",children:"A"}),e.jsx("th",{className:"py-2 px-3",children:"B"}),e.jsx("th",{className:"py-2 px-3",children:"Quotient (A // B)"}),e.jsx("th",{className:"py-2 px-3 text-sky-400",children:"Remainder (A % B)"}),e.jsx("th",{className:"py-2 px-3",children:"Next State (B, Rem)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:p.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"py-2 px-3",children:t.step}),e.jsx("td",{className:"py-2 px-3 font-bold text-white",children:t.a}),e.jsx("td",{className:"py-2 px-3 font-bold text-emerald-400",children:t.b}),e.jsx("td",{className:"py-2 px-3",children:t.quotient}),e.jsx("td",{className:"py-2 px-3 text-sky-300 font-bold",children:t.remainder}),e.jsxs("td",{className:"py-2 px-3 text-slate-400",children:["(",t.nextA,", ",t.nextB,")"]})]},t.step))})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Remainder reached 0. Algorithm Terminated!"}),e.jsxs("span",{className:"font-bold text-emerald-400 text-sm",children:["GCD(",i,", ",l,") = ",h]})]})]})};function q(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit II: Python · 45 Marks"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Module 004_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"Computational Thinking"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Problem-Solving Methodology, Algorithm Design, Flowcharts & Trace Tables"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master the computational thinking lifecycle: Problem Analysis, Algorithm Formulation, Standard Flowchart Geometry, Structured Pseudocode, and rigorous Manual Dry-Run Trace Table testing."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(y,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white tracking-tight",children:"In Simple Words: The Architectural Blueprint Analogy"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Why planning algorithms must precede coding in Python"})]})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["An architect never starts laying bricks on a construction site without first drawing a detailed structural blueprint. In computer science, ",e.jsx("strong",{children:"Algorithms"})," and ",e.jsx("strong",{children:"Flowcharts"})," are the engineering blueprints that prove logical correctness before writing a single line of Python code."]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(R,{})}),e.jsx("div",{className:"space-y-4",children:e.jsx(D,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(w,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Python Laboratory: Classic Algorithms & Automated Tracing"}),e.jsx("p",{className:"text-xs text-slate-400",children:"A Python suite implementing Euclid's GCD, Optimized Prime check, and Factorial with step-by-step trace tables."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-2xl",children:e.jsx(f,{fileModule:E,title:"problem_solving_suite.py – Algorithms & Trace Tables",highlightLines:[12,25,41,58]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(N,{size:18})}),e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Real-World Case Studies: Algorithmic Thinking in Action"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-sky-400",children:"1. Bank ATM Cash Dispensation"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"When a user requests ₹3,500, the ATM algorithm executes greedy denomination division: dispensing three ₹1000 notes and one ₹500 note, verifying account balance and daily limits via conditional branches."})]}),e.jsxs("div",{className:"bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400",children:"2. GPS Navigation Shortest Route"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Google Maps uses Dijkstra's / A* graph search algorithms to compute the fastest route from Barrackpore to Kolkata Airport, dynamically weighting road congestion data in real time."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-300 flex items-center gap-2",children:[e.jsx(A,{size:16})," Common Examination Pitfalls"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Using Rectangles for Input:"})," Drawing a rectangle for `READ N`. Input/Output must strictly use a ",e.jsx("strong",{children:"Parallelogram"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Missing Decision Branch Labels:"})," Leaving diamond decision output arrows unlabeled. Always write ",e.jsx("strong",{children:"'True / Yes'"})," and ",e.jsx("strong",{children:"'False / No'"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx(T,{size:16})," Best Practices & Trace Tables"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Always Draw Trace Tables:"})," In CBSE dry run questions, construct a neat table with columns for line numbers, variables, and condition evaluations."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Check Edge Cases:"})," Test algorithms with $N = 0$, $N = 1$, and negative integers to verify boundary stability."]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(v,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Exam Preparation & Conceptual Self-Assessment (25 Questions)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Test your mastery of problem-solving steps, algorithm design, flowchart symbols, and trace table dry runs."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(x,{questions:S})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(g,{}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(b,{content:I,filename:"004_001_problem_solving_and_flowcharts_notes.txt"})})]})]})})}export{q as default};

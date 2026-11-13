import{j as e,b as d}from"./vendor-react-core-B-R9HE-Z.js";import{T as c}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as h}from"./FAQTemplate-16IfroqC.js";import{P as p}from"./PlainTextPrint-C6NaUtnE.js";import{P as u}from"./PythonFileLoader-DZ61U3Y_.js";import{c as x,br as f,az as m,t as b,a7 as y,y as g}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const N=[{id:1,question:"What statement in Python allows conditional branching execution based on a boolean test?",options:["`if` statement","`for` statement","`def` statement","`import` statement"],correctAnswer:0,explanation:"The `if` statement evaluates a condition; if the condition is `True`, the indented block of code is executed.",hint:"Conditional branching keyword."},{id:2,question:"What punctuation mark is required at the end of every `if`, `elif`, and `else` header line in Python?",options:[": (colon)","; (semicolon)","{ (opening brace)",", (comma)"],correctAnswer:0,explanation:"In Python compound statements, every header clause (`if`, `elif`, `else`) must terminate with a colon `:` to introduce an indented suite.",hint:"Colon : introduces code blocks."},{id:3,question:`What is the output of the following code?
\`\`\`python
x = 15
if x > 20:
    print('A')
elif x > 10:
    print('B')
elif x > 5:
    print('C')
else:
    print('D')
\`\`\``,options:["B",`B
C`,`A
B
C`,"D"],correctAnswer:0,explanation:"In an `if-elif-else` ladder, conditions are evaluated sequentially from top to bottom. The first condition that evaluates to `True` (`x > 10` since 15 > 10) executes its block and immediately skips all subsequent branches. Output is `'B'`.",hint:"Only the first true elif branch executes in an if-elif-else ladder."},{id:4,question:"What happens if all conditions in an `if-elif-else` ladder evaluate to `False`?",options:["The `else` block executes (if present); otherwise, no block executes and control moves past the ladder.","The program crashes with a ConditionError","The first if block executes anyway","Python enters an infinite loop"],correctAnswer:0,explanation:"If all `if` and `elif` tests evaluate to `False`, the optional `else` block is executed as the default fallback pathway.",hint:"The else block handles the fallback path."},{id:5,question:"Which of the following is the correct syntax for Python's Conditional Expression (Ternary Operator)?",options:["`value_if_true if condition else value_if_false`","`condition ? value_if_true : value_if_false`","`if condition: value_if_true else: value_if_false`","`value_if_true ? condition : value_if_false`"],correctAnswer:0,explanation:"Python's ternary operator is formatted as: `x = 'Pass' if marks >= 33 else 'Fail'`.",hint:"x if condition else y."},{id:6,question:"What is a 'Nested If' statement?",options:["An `if` statement placed entirely inside the body of another `if`, `elif`, or `else` block","Two if statements on the same line","An if statement inside a comment","An if statement imported from a module"],correctAnswer:0,explanation:"A nested `if` is an inner conditional statement contained within the indented body of an outer conditional statement.",hint:"An if block inside another if block."},{id:7,question:`What is the output of the following nested conditional?
\`\`\`python
score = 85
attendance = 92
if score >= 80:
    if attendance >= 90:
        print('Scholarship A')
    else:
        print('Scholarship B')
else:
    print('No Scholarship')
\`\`\``,options:["Scholarship A","Scholarship B","No Scholarship",`Scholarship A
Scholarship B`],correctAnswer:0,explanation:"Outer condition `score >= 80` (85 >= 80) is True. Inner condition `attendance >= 90` (92 >= 90) is True. Prints `'Scholarship A'`.",hint:"Both outer and inner conditions evaluate to True."},{id:8,question:"Which logical operator short-circuits in `if A and B:` when A is False?",options:["`and`","`or`","`not`","`is`"],correctAnswer:0,explanation:"For logical `and`, if the left operand `A` evaluates to `False`, the overall condition can never be True, so Python skips evaluating `B` entirely (short-circuiting).",hint:"and short-circuits on False."},{id:9,question:"Which logical operator short-circuits in `if A or B:` when A is True?",options:["`or`","`and`","`not`","`in`"],correctAnswer:0,explanation:"For logical `or`, if the left operand `A` evaluates to `True`, the entire condition is guaranteed to be True, so `B` is not evaluated.",hint:"or short-circuits on True."},{id:10,question:"What is the leap year determination condition in Python?",options:["`(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)`","`year % 4 == 0`","`year % 100 == 0`","`year % 400 != 0`"],correctAnswer:0,explanation:"A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400.",hint:"Divisible by 4 and not 100, or divisible by 400."},{id:11,question:`What is the output of the following code?
\`\`\`python
val = 0
if val:
    print('True Branch')
else:
    print('False Branch')
\`\`\``,options:["False Branch","True Branch","0","SyntaxError"],correctAnswer:0,explanation:"In Python, numeric `0` is treated as boolean `False`. The `else` branch executes, printing `'False Branch'`.",hint:"0 is falsy."},{id:12,question:`What is the output of the following code?
\`\`\`python
name = 'Susmita'
if 's' in name:
    print('Found lower')
elif 'S' in name:
    print('Found Upper')
\`\`\``,options:["Found lower","Found Upper",`Found lower
Found Upper`,"None"],correctAnswer:0,explanation:"The character `'s'` exists in `'Susmita'` at index 2 (`Su-s-mita`). The first `if` condition is True and executes, skipping the `elif` branch. Output is `'Found lower'`.",hint:"Index 2 has 's', matching the first if branch."},{id:13,question:"What is the output of `status = 'Eligible' if age >= 18 else 'Minor'` when `age = 17`?",options:["'Minor'","'Eligible'","False","None"],correctAnswer:0,explanation:"Since `age >= 18` (17 >= 18) is False, the ternary expression returns the fallback value `'Minor'`.",hint:"17 is < 18, so Minor is returned."},{id:14,question:"Can an `elif` statement exist without a preceding `if` statement?",options:["No, an `elif` must always follow an `if` statement","Yes","Only inside loops","Only in functions"],correctAnswer:0,explanation:"`elif` (short for else-if) is an extension of an `if` block and cannot appear independently without an initial `if` statement.",hint:"elif requires a preceding if statement."},{id:15,question:"What is the maximum number of `elif` clauses allowed in a single `if` statement in Python?",options:["Unlimited (as many as needed)","Only 1","Maximum 10","Maximum 256"],correctAnswer:0,explanation:"Python places no arbitrary limit on the number of `elif` branches in an `if-elif-else` ladder.",hint:"No limit on the number of elif clauses."},{id:16,question:"What is the output of `if None: print('A') else: print('B')`?",options:["B","A","None","SyntaxError"],correctAnswer:0,explanation:"`None` is falsy in Python, so the `else` branch executes and prints `'B'`.",hint:"None is falsy."},{id:17,question:"What is the output of `x = 10; y = 20; max_val = x if x > y else y; print(max_val)`?",options:["20","10","True","False"],correctAnswer:0,explanation:"`10 > 20` is False, so `max_val` is assigned `y` (20).",hint:"Ternary expression chooses y."},{id:18,question:"Why does Python rely on indentation rather than curly braces `{}` to define conditional blocks?",options:["To enforce code readability, eliminate visual clutter, and avoid mismatched delimiter bugs","Because keyboards don't have curly braces","To make files larger","Because curly braces are used exclusively for sets and dicts"],correctAnswer:0,explanation:"Guido van Rossum designed Python to enforce clean visual structure and readability through semantic indentation (the Off-side Rule).",hint:"Enforces readability and clean formatting."},{id:19,question:"What error occurs if an `if` statement has an empty body without the `pass` keyword?",options:["IndentationError: expected an indented block","ZeroDivisionError","NameError","ValueError"],correctAnswer:0,explanation:"Python expects at least one indented statement following a colon. An empty block raises `IndentationError: expected an indented block`. `pass` can serve as an explicit no-op placeholder.",hint:"IndentationError is raised for empty blocks."},{id:20,question:"What is the output of `if 5 in [1, 2, 3, 4]: print('Yes') else: print('No')`?",options:["No","Yes","False","SyntaxError"],correctAnswer:0,explanation:"5 is not in the list `[1, 2, 3, 4]`, so the condition is False and prints `'No'`.",hint:"5 is not present in the list."},{id:21,question:"What is the output of `x = 50; print('High' if x > 100 else 'Medium' if x > 30 else 'Low')`?",options:["Medium","High","Low","SyntaxError"],correctAnswer:0,explanation:"Chained ternary evaluation: `x > 100` (50 > 100) is False. Moves to `('Medium' if x > 30 else 'Low')`. Since `50 > 30` is True, returns `'Medium'`.",hint:"Chained ternary expression evaluates to 'Medium'."},{id:22,question:"What is the result of `if (a := 10) > 5: print(a)` in Python 3.8+ (Walrus Operator)?",options:["Prints 10","SyntaxError","Prints True","Prints 5"],correctAnswer:0,explanation:"The Walrus operator `:=` assigns `10` to `a` and returns `10`. Since `10 > 5` is True, it prints `10`.",hint:"Walrus assignment operator assigns and evaluates in place."},{id:23,question:"What condition tests whether a point $(x, y)$ lies in the First Quadrant of the Cartesian plane?",options:["`x > 0 and y > 0`","`x > 0 and y < 0`","`x < 0 and y > 0`","`x < 0 and y < 0`"],correctAnswer:0,explanation:"In Quadrant I, both $x$ and $y$ coordinates are strictly positive ($x > 0$ and $y > 0$).",hint:"Both x and y positive."},{id:24,question:"What is the output of `if False == 0: print('Equal')`?",options:["Equal","Nothing is printed","TypeError","False"],correctAnswer:0,explanation:"In Python, `bool` is a subclass of `int` where `False == 0` is `True`. Prints `'Equal'`.",hint:"False is equal to 0 in Python."},{id:25,question:"Case Study: Debangshu is computing electricity bills in Barrackpore. Units up to 100 are charged at ₹3/unit; next 100 units at ₹5/unit; above 200 units at ₹7/unit. If units = 250, what is the bill?",options:["₹1150","₹1750","₹1250","₹1000"],correctAnswer:0,explanation:"First 100 units @ ₹3 = ₹300. Next 100 units @ ₹5 = ₹500. Remaining 50 units (250-200) @ ₹7 = ₹350. Total = 300 + 500 + 350 = ₹1150.",hint:"Slab calculation: (100*3) + (100*5) + (50*7) = 300 + 500 + 350 = 1150."}],v=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT II: COMPUTATIONAL THINKING AND PROGRAMMING - 1 (PYTHON) - 45 MARKS\r
MODULE 004_005: CONTROL FLOW, CONDITIONALS & NESTED DECISIONS\r
================================================================================\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
Official Syllabus Aligned: 2024-25 / 2025-26 Senior Secondary Computer Science\r
\r
1. DECISION MAKING IN PYTHON\r
--------------------------------------------------------------------------------\r
Conditional statements alter sequential execution flow based on boolean evaluations:\r
\r
1. SIMPLE \`if\` STATEMENT:\r
   \`\`\`python\r
   if condition:\r
       statement_1\r
       statement_2\r
   \`\`\`\r
\r
2. \`if-else\` STATEMENT (Two-way Branching):\r
   \`\`\`python\r
   if condition:\r
       # Executes if condition is True\r
       true_block\r
   else:\r
       # Executes if condition is False\r
       false_block\r
   \`\`\`\r
\r
3. \`if-elif-else\` LADDER (Multi-way Branching):\r
   - Conditions are checked sequentially from top to bottom.\r
   - The FIRST branch whose condition evaluates to \`True\` executes, and the entire\r
     remaining ladder is skipped.\r
   - The optional \`else\` block executes if NO preceding condition was \`True\`.\r
\r
4. NESTED CONDITIONALS:\r
   - An \`if\` statement embedded within the body of an outer \`if\`, \`elif\`, or \`else\`.\r
\r
5. CONDITIONAL EXPRESSION (TERNARY OPERATOR):\r
   - One-line inline conditional assignment:\r
     \`variable = value_if_true if condition else value_if_false\`\r
     Example: \`result = 'Even' if num % 2 == 0 else 'Odd'\`\r
\r
2. COMMON CBSE REAL-WORLD APPLICATION PATTERNS\r
--------------------------------------------------------------------------------\r
A. LEAP YEAR CHECKER:\r
   \`\`\`python\r
   if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\r
       print(year, "is a Leap Year")\r
   else:\r
       print(year, "is NOT a Leap Year")\r
   \`\`\`\r
\r
B. ELECTRICITY / INCOME TAX SLAB CALCULATION:\r
   - Up to 100 units: ₹3/unit\r
   - 101 to 200 units: ₹5/unit\r
   - Above 200 units: ₹7/unit\r
   \`\`\`python\r
   if units <= 100:\r
       bill = units * 3\r
   elif units <= 200:\r
       bill = (100 * 3) + ((units - 100) * 5)\r
   else:\r
       bill = (100 * 3) + (100 * 5) + ((units - 200) * 7)\r
   \`\`\`\r
\r
C. QUADRATIC EQUATION ROOTS (ax^2 + bx + c = 0):\r
   - Compute Discriminant $D = b^2 - 4ac$\r
   - If $D > 0$: Two distinct real roots $\\frac{-b \\pm \\sqrt{D}}{2a}$\r
   - If $D == 0$: One repeated real root $\\frac{-b}{2a}$\r
   - If $D < 0$: Complex conjugate roots $\\frac{-b}{2a} \\pm \\frac{\\sqrt{|D|}}{2a} j$\r
\r
================================================================================\r
END OF REVISION NOTES - MODULE 004_005\r
================================================================================\r
`,T=`"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (083) - UNIT II\r
MODULE 004_005: CONDITIONALS & NESTED DECISION LABORATORY\r
Topic: Comprehensive Decision Making Suite (Leap Year, Slab Tariffs, Quadratic Solver)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
import math\r
from typing import Tuple, Dict, Any\r
\r
\r
def is_leap_year(year: int) -> Tuple[bool, str]:\r
    """Evaluates the Gregorian Leap Year conditions."""\r
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\r
        return True, f"{year} is a LEAP YEAR (Divisible by 4 and not 100, or divisible by 400)."\r
    return False, f"{year} is a COMMON YEAR (365 days)."\r
\r
\r
def compute_electricity_bill_slabs(units: float) -> Tuple[float, list]:\r
    """Calculates progressive tiered slab tariff."""\r
    steps = []\r
    total_bill = 0.0\r
\r
    if units <= 100:\r
        b1 = units * 3.0\r
        steps.append(f"Slab 1 (0 to {units} units @ Rs 3): Rs {b1:.2f}")\r
        total_bill = b1\r
    elif units <= 200:\r
        b1 = 100 * 3.0\r
        b2 = (units - 100) * 5.0\r
        steps.append("Slab 1 (First 100 units @ Rs 3): Rs 300.00")\r
        steps.append(f"Slab 2 ({units - 100} units @ Rs 5): Rs {b2:.2f}")\r
        total_bill = b1 + b2\r
    else:\r
        b1 = 100 * 3.0\r
        b2 = 100 * 5.0\r
        b3 = (units - 200) * 7.0\r
        steps.append("Slab 1 (First 100 units @ Rs 3): Rs 300.00")\r
        steps.append("Slab 2 (Next 100 units @ Rs 5): Rs 500.00")\r
        steps.append(f"Slab 3 ({units - 200} units @ Rs 7): Rs {b3:.2f}")\r
        total_bill = b1 + b2 + b3\r
\r
    return total_bill, steps\r
\r
\r
if __name__ == "__main__":\r
    print("=" * 70)\r
    print("CONDITIONALS AUDIT: LEAP YEAR CHECKER")\r
    print("=" * 70)\r
    for yr in [2000, 2024, 2026, 1900, 2100]:\r
        is_leap, desc = is_leap_year(yr)\r
        print(f"Year {yr}: {desc}")\r
\r
    print("\\n" + "=" * 70)\r
    print("SLAB BILL AUDIT: 250 UNITS CONSUMED")\r
    print("=" * 70)\r
    bill_val, bill_steps = compute_electricity_bill_slabs(250)\r
    for s in bill_steps:\r
        print(f"-> {s}")\r
    print(f"Total Electricity Bill: Rs {bill_val:.2f}")\r
    print("=" * 70)\r
`,w=()=>{const[a,r]=d.useState(250),t=Math.max(0,parseFloat(a)||0);let n=0,s=0,i=0;t<=100?n=t*3:t<=200?(n=300,s=(t-100)*5):(n=300,s=500,i=(t-200)*7);const o=n+s+i;return e.jsxs("div",{className:"bg-slate-950/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive Multi-Tiered Slab Tariff Calculator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Visualizes how `if-elif-else` branches compute progressive rate slabs (e.g. West Bengal State Electricity Board)."})]})]})}),e.jsxs("div",{className:"max-w-xs",children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Units Consumed (kWh):"}),e.jsx("input",{type:"number",min:"0",value:a,onChange:l=>r(l.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white font-mono font-bold focus:outline-none focus:border-amber-500",placeholder:"e.g. 250"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${t>0?"bg-sky-950/30 border-sky-500/40 text-white":"bg-slate-900/50 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{className:"text-[11px] font-semibold block uppercase",children:"Slab 1 (1–100 @ ₹3/unit)"}),e.jsxs("span",{className:"text-lg font-mono font-bold text-sky-300 block",children:["₹",n.toFixed(2)]}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.min(t,100)," units charged"]})]}),e.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${t>100?"bg-emerald-950/30 border-emerald-500/40 text-white":"bg-slate-900/50 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{className:"text-[11px] font-semibold block uppercase",children:"Slab 2 (101–200 @ ₹5/unit)"}),e.jsxs("span",{className:"text-lg font-mono font-bold text-emerald-300 block",children:["₹",s.toFixed(2)]}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:[t>100?Math.min(t-100,100):0," units charged"]})]}),e.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${t>200?"bg-amber-950/30 border-amber-500/40 text-white":"bg-slate-900/50 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{className:"text-[11px] font-semibold block uppercase",children:"Slab 3 (>200 @ ₹7/unit)"}),e.jsxs("span",{className:"text-lg font-mono font-bold text-amber-300 block",children:["₹",i.toFixed(2)]}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:[t>200?t-200:0," units charged"]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Total Calculated Electricity Tariff:"}),e.jsxs("span",{className:"text-xl font-mono font-extrabold text-amber-400",children:["₹",o.toFixed(2)]})]})]})};function O(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit II: Python · 45 Marks"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Module 004_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full",children:"Control Flow Mastery"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Control Flow: Conditionals, Decision Making & Nested If-Else Ladders"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master branching logic in Python: simple `if`, two-way `if-else`, multi-pathway `if-elif-else` ladders, nested decision hierarchies, short-circuit boolean conditions, and concise inline ternary expressions."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(x,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white tracking-tight",children:"In Simple Words: The Railway Track Switchman"}),e.jsx("p",{className:"text-xs text-slate-400",children:"How conditional branches guide program paths"})]})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["At Barrackpore railway junction, track switches direct a train toward Sealdah, Naihati, or Ranaghat depending on signals. An ",e.jsx("strong",{children:"if-elif-else ladder"})," acts as the code switchman: only the first matching green signal track is taken, and all other bypass tracks are ignored."]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(w,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(f,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Python Laboratory: Conditionals & Decision Making Suite"}),e.jsx("p",{className:"text-xs text-slate-400",children:"A Python program testing leap year logic, progressive slab calculation, and discriminant quadratic solver."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-2xl",children:e.jsx(u,{fileModule:T,title:"conditionals_suite.py – Conditionals & Decision Engine",highlightLines:[12,22,35,48]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-300 flex items-center gap-2",children:[e.jsx(m,{size:16})," Common Examination Pitfalls"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Using `=` instead of `==`:"})," Writing `if marks = 100:` causes a SyntaxError. Equality comparison must use double equals `==`."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-rose-400 font-bold shrink-0",children:"✗"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Independent `if` vs `elif`:"})," Multiple sequential `if` statements evaluate every single condition; an `if-elif` ladder terminates at the first True branch."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx(b,{size:16})," Best Practices & Pythonic Idioms"]}),e.jsxs("ul",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Chained Comparison:"})," Write ",e.jsx("code",{children:"90 <= marks <= 100"})," instead of ",e.jsx("code",{children:"marks >= 90 and marks <= 100"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Use Ternary for Simple Choices:"})," ",e.jsx("code",{children:"result = 'Pass' if score >= 33 else 'Fail'"}),"."]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(y,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Exam Preparation & Conceptual Self-Assessment (25 Questions)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Test your mastery of if, if-else, if-elif-else ladders, nested decisions, and short-circuit evaluation."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(h,{questions:N})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(c,{}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(p,{content:v,filename:"004_005_conditionals_and_decision_making_notes.txt"})})]})]})})}export{O as default};

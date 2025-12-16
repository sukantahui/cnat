import{j as e,a as s}from"./index-DPaFLvnv.js";function i(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Topic 7 — Evaluating Expressions (Step-by-Step Rules)"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In Python, an ",e.jsx("strong",{children:"expression"})," is anything that produces a value. Python evaluates expressions by following operator precedence, associativity, and left-to-right execution rules. Understanding this process is crucial for writing predictable, bug-free programs."]}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"1. The Step-by-Step Evaluation Flow"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Python evaluates expressions using this order:"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Break the expression into smaller sub-expressions."}),e.jsx("li",{children:"Apply **precedence** rules to decide which operator goes first."}),e.jsx("li",{children:"Apply **associativity** (usually left → right)."}),e.jsx("li",{children:"Simplify step-by-step until a final single value remains."})]}),e.jsx(s,{initialCode:`# Example
result = 5 + 2 * 3
print(result)`}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Step-by-step:"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
2 * 3 = 6
5 + 6 = 11
Final Answer = 11
      `}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"2. Expression Tree (How Python Sees Complex Expressions)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python internally builds a “tree” showing which operation happens first."}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
Expression: 10 + 2 * 3 - 4

        (-)
       /   \\
     (+)    4
    /   \\
  10   (*)
       /  \\
      2    3
      `}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Then Python evaluates **bottom-up**."}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"3. Mixed Expressions (String + Numeric)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python does ",e.jsx("strong",{children:"not"})," auto-convert types in expressions. String + number → ❌ Error."]}),e.jsx(s,{initialCode:`"Hello" + " World"   # OK
"Hi" * 3             # OK → "HiHiHi"
"Age: " + 25         # ❌ TypeError`}),e.jsx("p",{className:"text-slate-300 text-sm",children:"To fix it:"}),e.jsx(s,{initialCode:'"Age: " + str(25)'}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"4. Full Evaluation Examples (Step-by-Step)"}),e.jsx("h3",{className:"text-lg text-sky-300",children:"Example A:"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
Expression: 4 + 18 / 3 - 1

1. 18 / 3 = 6
2. 4 + 6 = 10
3. 10 - 1 = 9

Final Answer = 9
      `}),e.jsx("h3",{className:"text-lg text-sky-300",children:"Example B:"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
Expression: (5 + 3) * 2 ** 3 / 4

1. Parentheses: (5 + 3) = 8
2. Exponent: 2 ** 3 = 8
3. Multiply: 8 * 8 = 64
4. Divide: 64 / 4 = 16

Final Answer = 16
      `}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"5. Evaluating Logical Expressions"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python evaluates ",e.jsx("strong",{children:"and"}),", ",e.jsx("strong",{children:"or"}),", ",e.jsx("strong",{children:"not"})," using short-circuit rules:"]}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
True and False → first True then evaluates second → False
True or False  → stops at first True → True
not False → True      `}),e.jsx(s,{initialCode:`x = 10
print(x > 5 and x < 20)   # True
print(x < 5 or x == 10)   # True
print(not(x == 10))       # False`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"6. Mixed Logical + Arithmetic Evaluation"}),e.jsx(s,{initialCode:`expr = (5 + 3 > 7) and (2 * 4 == 8)
print(expr)`}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
5 + 3 = 8
8 > 7 → True
2 * 4 = 8
8 == 8 → True
True and True → True
      `}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"7. Tricky Python Expressions (Must Know!)"}),e.jsx(s,{initialCode:`print(10 / 3)     # 3.333...
print(10 // 3)    # 3 (floor division)
print(10 % 3)     # 1
print(2 ** 3 ** 2) # 512 (right associative!)`}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl text-sky-300 text-xs",children:`
Exponent (**)
evaluates right → left:

3 ** 2 = 9
2 ** 9 = 512
      `}),e.jsx("h2",{className:"text-xl font-semibold text-sky-400",children:"Summary — How Python Evaluates Expressions"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Python breaks expressions into smaller chunks."}),e.jsx("li",{children:"Precedence decides priority."}),e.jsx("li",{children:"Associativity decides left → right execution."}),e.jsx("li",{children:"Parentheses override everything."}),e.jsx("li",{children:"Logical operators short-circuit evaluation."}),e.jsx("li",{children:"Strings require explicit conversion when mixed with numbers."})]})]})}export{i as default};

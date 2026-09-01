import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as s}from"./PythonFileLoader-hCi5osN-.js";import{E as n}from"./EditablePythonCodeBlock-6vUgKnkl.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import{a as r,L as l,b as d,T as c,B as p,w as h,ax as x,t}from"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-monaco-Bv7hoEkV.js";const u=`"""\r
Module: 001_003_operators-and-expressions\r
Topic: Topic 6 - Evaluating Expressions (Step-by-Step Rules & Order of Evaluation)\r
File: arithmetic_expression_pipeline.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates step-by-step arithmetic expression evaluation in Python,\r
illustrating operator precedence, associativity, and intermediate reduction.\r
"""\r
\r
def evaluate_arithmetic_pipeline():\r
    print("=" * 65)\r
    print("  PYTHON EXPRESSION EVALUATION PIPELINE: ARITHMETIC")\r
    print("=" * 65)\r
\r
    # Complex arithmetic expression\r
    # Expression: 100 - 3 * 2 ** 3 + 18 // 3 % 4\r
    print("\\nTarget Expression: 100 - 3 * 2 ** 3 + 18 // 3 % 4")\r
    print("-" * 65)\r
\r
    # Step 1: Exponentiation (Level 2 priority, Right-to-Left)\r
    step1_power = 2 ** 3\r
    print(f"Step 1 [Exponentiation 2 ** 3]   : 2 ** 3 = {step1_power}")\r
    print("  Current State                   : 100 - 3 * 8 + 18 // 3 % 4")\r
\r
    # Step 2: Multiplication (Level 4 priority, Left-to-Right)\r
    step2_mult = 3 * step1_power\r
    print(f"Step 2 [Multiplication 3 * 8]    : 3 * 8 = {step2_mult}")\r
    print("  Current State                   : 100 - 24 + 18 // 3 % 4")\r
\r
    # Step 3: Floor Division (Level 4 priority, Left-to-Right)\r
    step3_floordiv = 18 // 3\r
    print(f"Step 3 [Floor Division 18 // 3]  : 18 // 3 = {step3_floordiv}")\r
    print("  Current State                   : 100 - 24 + 6 % 4")\r
\r
    # Step 4: Modulo (Level 4 priority, Left-to-Right)\r
    step4_mod = step3_floordiv % 4\r
    print(f"Step 4 [Modulus 6 % 4]           : 6 % 4 = {step4_mod}")\r
    print("  Current State                   : 100 - 24 + 2")\r
\r
    # Step 5: Subtraction (Level 5 priority, Left-to-Right)\r
    step5_sub = 100 - step2_mult\r
    print(f"Step 5 [Subtraction 100 - 24]    : 100 - 24 = {step5_sub}")\r
    print("  Current State                   : 76 + 2")\r
\r
    # Step 6: Addition (Level 5 priority, Left-to-Right)\r
    final_result = step5_sub + step4_mod\r
    print(f"Step 6 [Addition 76 + 2]         : 76 + 2 = {final_result}")\r
    print("-" * 65)\r
    print(f"Final Direct Evaluation Output   : {100 - 3 * 2 ** 3 + 18 // 3 % 4}")\r
    print(f"Step-by-Step Pipeline Match      : {final_result == (100 - 3 * 2 ** 3 + 18 // 3 % 4)}")\r
    print("=" * 65)\r
\r
if __name__ == "__main__":\r
    evaluate_arithmetic_pipeline()\r
`,m=`"""\r
Module: 001_003_operators-and-expressions\r
Topic: Topic 6 - Evaluating Expressions (Step-by-Step Rules & Order of Evaluation)\r
File: boolean_logic_and_short_circuit.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates complex boolean logic evaluation, short-circuit execution,\r
and why side-effects in short-circuited sub-expressions are bypassed.\r
"""\r
\r
def side_effect_check(label, return_val):\r
    """Helper function to log when a sub-expression is actually evaluated."""\r
    print(f"  [EXECUTION LOG] Evaluating condition: '{label}' -> returning {return_val}")\r
    return return_val\r
\r
def test_short_circuit_mechanics():\r
    print("=" * 65)\r
    print("  PYTHON EXPRESSION EVALUATION: SHORT-CIRCUIT MECHANICS")\r
    print("=" * 65)\r
\r
    print("\\nTest Case 1: Short-Circuiting in OR (Stops on first Truthy)")\r
    print("Expression: True or side_effect_check('Will Not Run', False)")\r
    print("-" * 65)\r
    # The right operand is NEVER evaluated because the first operand is True\r
    result_or = True or side_effect_check("Will Not Run", False)\r
    print(f"Result of OR evaluation : {result_or}")\r
\r
    print("\\nTest Case 2: Short-Circuiting in AND (Stops on first Falsy)")\r
    print("Expression: False and side_effect_check('Will Not Run', True)")\r
    print("-" * 65)\r
    # The right operand is NEVER evaluated because the first operand is False\r
    result_and = False and side_effect_check("Will Not Run", True)\r
    print(f"Result of AND evaluation: {result_and}")\r
\r
    print("\\nTest Case 3: Complex Multi-Condition Expression")\r
    print("Expression: not (5 + 3 > 10) and (4 * 2 == 8) or (10 > 20)")\r
    print("-" * 65)\r
    \r
    # Step 1: Sub-expressions\r
    e1 = 5 + 3 > 10    # 8 > 10 -> False\r
    e2 = not e1        # not False -> True\r
    e3 = 4 * 2 == 8    # 8 == 8 -> True\r
    e4 = 10 > 20       # False\r
    \r
    # Step 2: Logical AND\r
    and_result = e2 and e3 # True and True -> True\r
    \r
    # Step 3: Logical OR\r
    final_bool = and_result or e4 # True or False -> True\r
    \r
    print(f"1. 5 + 3 > 10              -> {e1}")\r
    print(f"2. not False               -> {e2}")\r
    print(f"3. 4 * 2 == 8              -> {e3}")\r
    print(f"4. True and True           -> {and_result}")\r
    print(f"5. True or False           -> {final_bool}")\r
    print(f"Final Evaluated Result     : {final_bool}")\r
    print("=" * 65)\r
\r
if __name__ == "__main__":\r
    test_short_circuit_mechanics()\r
`,f=`"""\r
Module: 001_003_operators-and-expressions\r
Topic: Topic 6 - Evaluating Expressions (Step-by-Step Rules & Order of Evaluation)\r
File: operator_chaining_and_ast_tree.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates Python Abstract Syntax Tree (AST) evaluation, operator chaining,\r
and non-associative comparison execution.\r
"""\r
\r
import ast\r
\r
def inspect_expression_ast(expression_str):\r
    print("=" * 65)\r
    print(f"  PYTHON EXPRESSION AST INSPECTION: '{expression_str}'")\r
    print("=" * 65)\r
\r
    parsed_tree = ast.parse(expression_str, mode='eval')\r
    print(ast.dump(parsed_tree, indent=2))\r
    print("-" * 65)\r
\r
def test_chained_comparisons():\r
    print("\\n  TESTING CHAINED COMPARISONS UNDER THE HOOD")\r
    print("-" * 65)\r
\r
    # Expression: 10 < 20 <= 20 == 20\r
    print("Expression: 10 < 20 <= 20 == 20")\r
    print("Evaluation: (10 < 20) and (20 <= 20) and (20 == 20)")\r
    c1 = 10 < 20\r
    c2 = 20 <= 20\r
    c3 = 20 == 20\r
    print(f"  Part 1: 10 < 20  -> {c1}")\r
    print(f"  Part 2: 20 <= 20 -> {c2}")\r
    print(f"  Part 3: 20 == 20 -> {c3}")\r
    print(f"  Combined Result  -> {c1 and c2 and c3}")\r
\r
    # Chaining with False short-circuit: 1 < 2 < 1\r
    print("\\nExpression: 1 < 2 < 1")\r
    print("Evaluation: (1 < 2) and (2 < 1)")\r
    print(f"  Part 1: 1 < 2    -> {1 < 2} (True)")\r
    print(f"  Part 2: 2 < 1    -> {2 < 1} (False)")\r
    print(f"  Combined Result  -> {1 < 2 < 1} (False)")\r
    print("=" * 65)\r
\r
if __name__ == "__main__":\r
    inspect_expression_ast("10 + 2 * 3")\r
    test_chained_comparisons()\r
`,g=`"""\r
Module: 001_003_operators-and-expressions\r
Topic: Topic 6 - Evaluating Expressions (Step-by-Step Rules & Order of Evaluation)\r
File: institutional_financial_grade_evaluator.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Real-world multi-stage evaluation pipeline for calculating institutional scholarships,\r
tax deductibles, and academic grades across Kolkata and Barrackpore institutions.\r
"""\r
\r
def evaluate_scholarship_and_tax(student_name, location, gross_marks, entrance_score, family_income):\r
    print("=" * 70)\r
    print(f"  INSTITUTIONAL EVALUATOR: {student_name.upper()} ({location.upper()})")\r
    print("=" * 70)\r
\r
    # Stage 1: Normalize percentage and entrance percentile\r
    # Formula: (gross_marks / 500) * 100 + (entrance_score / 200) * 50\r
    composite_score = (gross_marks / 500) * 100 + (entrance_score / 200) * 50\r
    print(f"Step 1 [Composite Academic Index] : {composite_score:.2f} / 150.0")\r
\r
    # Stage 2: Eligibility boolean logic\r
    # Merit threshold >= 125.0 OR (Composite >= 110.0 AND Income <= 2,50,000)\r
    is_merit_scholar = composite_score >= 125.0\r
    is_need_based = (composite_score >= 110.0) and (family_income <= 250000)\r
    final_award = is_merit_scholar or is_need_based\r
\r
    print(f"Step 2 [Merit Criteria >= 125]     : {is_merit_scholar}")\r
    print(f"Step 3 [Need Criteria (>=110 & Low)]: {is_need_based}")\r
    print(f"Step 4 [Final Scholarship Status]   : {'AWARDED' if final_award else 'REJECTED'}")\r
\r
    # Stage 3: Fee reduction expression\r
    # Base fee: 60,000; Reduction: 50% if merit else 30% if need_based else 0%\r
    base_fee = 60000.0\r
    discount_pct = 0.50 if is_merit_scholar else (0.30 if is_need_based else 0.0)\r
    payable_fee = base_fee - base_fee * discount_pct\r
\r
    print(f"Step 5 [Base Annual Fee]            : ₹{base_fee:,.2f}")\r
    print(f"Step 6 [Scholarship Reduction]      : {discount_pct * 100:.0f}%")\r
    print(f"Step 7 [Final Payable Fee]          : ₹{payable_fee:,.2f}")\r
    print("=" * 70 + "\\n")\r
    return payable_fee\r
\r
if __name__ == "__main__":\r
    # Student 1: Mamata from Jadavpur\r
    evaluate_scholarship_and_tax("Mamata", "Jadavpur", gross_marks=470, entrance_score=185, family_income=450000)\r
\r
    # Student 2: Debangshu from Barrackpore\r
    evaluate_scholarship_and_tax("Debangshu", "Barrackpore", gross_marks=420, entrance_score=150, family_income=220000)\r
`,b=`================================================================================\r
  TOPIC 6: EVALUATING EXPRESSIONS (STEP-BY-STEP RULES & ORDER OF EVALUATION)\r
  MODULE: 001_003 - Operators, Expressions & Basic Logic\r
  COURSE: Python Foundations & Advanced Programming\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS AN EXPRESSION IN PYTHON?\r
--------------------------------------------------------------------------------\r
An expression is any legal combination of literals, variables, functions, and\r
operators that evaluates down to a single resulting value.\r
\r
Examples:\r
- 5 + 3                  → Evaluates to 8\r
- 10 > 5 and 'a' in 'cat' → Evaluates to True\r
- f"Score: {90 + 5}"     → Evaluates to "Score: 95"\r
\r
2. THE 4 PHASES OF PYTHON EXPRESSION EVALUATION\r
--------------------------------------------------------------------------------\r
When Python executes an expression, it follows a strict 4-phase sequence:\r
\r
Phase 1: Lexical Tokenization & Syntax Parsing\r
  Python reads characters, identifies tokens (operators, identifiers, literals),\r
  and checks grammar.\r
\r
Phase 2: Abstract Syntax Tree (AST) Construction\r
  Python organizes sub-expressions into a hierarchical tree based on operator\r
  precedence (binding power).\r
\r
Phase 3: Bottom-Up Tree Reduction\r
  The interpreter evaluates child nodes first, simplifying leaf expressions\r
  step-by-step upwards towards the root.\r
\r
Phase 4: Left-to-Right Operand Evaluation & Associativity Resolution\r
  Tied operators are resolved according to their associativity (L->R or R->L).\r
  Within any binary operation, Python strictly evaluates the left operand BEFORE\r
  evaluating the right operand.\r
\r
3. MASTER ORDER OF EVALUATION RULES\r
--------------------------------------------------------------------------------\r
Rule 1: Parentheses () Always Have Supreme Authority\r
  Expressions inside ( ) are completely evaluated before being combined with\r
  outer operators.\r
\r
Rule 2: Operator Hierarchy (Precedence)\r
  1. Parentheses, Indexing, Calls: (), [], {}, .\r
  2. Exponentiation: ** (Right-to-Left!)\r
  3. Unary Positive, Negative, Invert: +x, -x, ~x (Right-to-Left!)\r
  4. Multiplicative Arithmetic: *, /, //, % (Left-to-Right)\r
  5. Additive Arithmetic: +, - (Left-to-Right)\r
  6. Bitwise Shifts: <<, >> (Left-to-Right)\r
  7. Bitwise Logic: & (AND), ^ (XOR), | (OR)\r
  8. Comparisons & Membership: <, <=, >, >=, ==, !=, is, in\r
  9. Boolean NOT: not (Right-to-Left!)\r
  10. Boolean AND: and (Left-to-Right with Short-Circuiting)\r
  11. Boolean OR: or (Left-to-Right with Short-Circuiting)\r
  12. Conditional Expression: x if C else y (Right-to-Left!)\r
  13. Assignment & Augmented: =, +=, -=, *=, ... (Right-to-Left!)\r
\r
Rule 3: Associativity Rule\r
  - Left-to-Right (L->R): 100 - 30 - 20 → (100 - 30) - 20 = 50\r
  - Right-to-Left (R->L): 2 ** 3 ** 2 → 2 ** (3 ** 2) = 2 ** 9 = 512\r
\r
Rule 4: Chained Comparisons Rule\r
  - a < b < c is translated as (a < b) and (b < c), with 'b' evaluated once.\r
\r
4. STEP-BY-STEP WORKED EXAMPLE\r
--------------------------------------------------------------------------------\r
Expression: 10 + 6 * 3 - 4 / 2 ** 2\r
\r
Step 1: Exponentiation (2 ** 2)           → 4\r
Step 2: Division (4 / 4)                  → 1.0 (True float division)\r
Step 3: Multiplication (6 * 3)            → 18\r
Step 4: Addition (10 + 18)                → 28\r
Step 5: Subtraction (28 - 1.0)            → 27.0 (Final Result)\r
\r
5. COMMON PITFALLS & INTERVIEW TRAPS\r
--------------------------------------------------------------------------------\r
1. -3 ** 2 gives -9, not 9 (because ** has higher precedence than unary -).\r
2. 0.1 + 0.2 == 0.3 evaluates to False due to IEEE 754 float precision.\r
3. Chained assignment with mutable lists (a = b = []) shares memory references.\r
4. 'or' short-circuits on first Truthy; 'and' short-circuits on first Falsy.\r
5. In expressions like f(x) + g(y), f(x) is guaranteed to execute before g(y).\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,v=[{question:"What is an expression in Python?",shortAnswer:"An expression is any legal combination of values, variables, and operators that evaluates to a single value.",explanation:"Unlike a statement which performs an action (such as assignment or branching), an expression always produces and returns a value upon evaluation.",hint:"Think about whether it returns a value or performs an instruction.",level:"basic",codeExample:"result = 5 + 3 * 2  # '5 + 3 * 2' is an expression yielding 11"},{question:"What is the difference between operator precedence and associativity?",shortAnswer:"Precedence resolves priority between different operators; associativity resolves direction for tied operators.",explanation:"Precedence determines which operator binds first when operators differ (e.g. * vs +). Associativity determines whether evaluation groups Left-to-Right or Right-to-Left when operators have the exact same precedence level.",hint:"One resolves different operators, the other resolves tied operators.",level:"basic",codeExample:`10 + 5 * 2  # Precedence (* before +)
10 - 4 - 2  # Associativity (Left-to-Right: (10-4)-2)`},{question:"Why does `2 ** 3 ** 2` evaluate to 512 instead of 64?",shortAnswer:"Because the exponentiation operator (**) is Right-to-Left associative.",explanation:"In `2 ** 3 ** 2`, Python evaluates the rightmost power first: `3 ** 2 = 9`, and then `2 ** 9 = 512`. If it were left-associative, it would be `(2 ** 3) ** 2 = 8 ** 2 = 64`.",hint:"Check the associativity of the exponentiation operator.",level:"moderate",codeExample:`print(2 ** 3 ** 2)      # 512 (2 ** 9)
print((2 ** 3) ** 2)    # 64`},{question:"Why does `-3 ** 2` evaluate to -9 in Python?",shortAnswer:"Because `**` has higher precedence than unary minus `-`.",explanation:"Python parses `-3 ** 2` as `-(3 ** 2) = -9`. To include the negative sign in exponentiation, you must use parentheses: `(-3) ** 2 = 9`.",hint:"Think about whether the exponent or the negative sign binds tighter.",level:"moderate",codeExample:`print(-3 ** 2)     # -9
print((-3) ** 2)   # 9`},{question:"What is short-circuit evaluation in logical expressions?",shortAnswer:"Stopping evaluation as soon as the overall truth value is determined.",explanation:"In `A or B`, if A is True, B is never evaluated. In `A and B`, if A is False, B is never evaluated. This prevents errors like division by zero in conditional expressions.",hint:"Does Python evaluate the second condition if the first condition is already conclusive?",level:"moderate",codeExample:`count = 0
if count > 0 and (100 / count) > 5:
    print('Safe!')  # No ZeroDivisionError!`},{question:"How does Python execute chained comparisons like `10 < x < 20`?",shortAnswer:"It expands them to `(10 < x) and (x < 20)` with the middle operand evaluated only once.",explanation:"Unlike other languages where `10 < x < 20` evaluates `(10 < x) < 20` (comparing a boolean to 20), Python executes it as a logical conjunction, guaranteeing single evaluation of middle expressions.",hint:"How does Python rewrite chained operators?",level:"moderate",codeExample:`x = 15
print(10 < x < 20)  # True → (10 < 15) and (15 < 20)`},{question:"What is the output of `10 + 20 / 5 * 2` and why?",shortAnswer:"18.0, because `/` and `*` have equal precedence and evaluate Left-to-Right before `+`.",explanation:"1. `20 / 5 = 4.0` (Left-to-Right)\n2. `4.0 * 2 = 8.0`\n3. `10 + 8.0 = 18.0`",hint:"Follow PEMDAS/BODMAS with Left-to-Right tie breaking.",level:"basic",codeExample:"print(10 + 20 / 5 * 2)  # 18.0"},{question:"What is an Abstract Syntax Tree (AST) in expression evaluation?",shortAnswer:"A tree representation of the syntactic structure of source code used by the compiler.",explanation:"Python parses expressions into an AST where operators are internal nodes and operands are leaf nodes. Evaluation proceeds bottom-up from child nodes to the root.",hint:"Think of a hierarchical tree showing which operation executes first.",level:"advanced",codeExample:`import ast
print(ast.dump(ast.parse('10 + 2 * 3', mode='eval')))`},{question:"Why does `0.1 + 0.2 == 0.3` evaluate to False?",shortAnswer:"Due to IEEE 754 binary floating-point representation rounding limits.",explanation:"0.1 and 0.2 cannot be represented exactly in binary floating point. `0.1 + 0.2` produces `0.30000000000000004`, which is not equal to `0.3`. Use `math.isclose()` instead.",hint:"Can computers represent decimal fractions with infinite binary precision?",level:"expert",codeExample:`import math
print(0.1 + 0.2 == 0.3)          # False
print(math.isclose(0.1 + 0.2, 0.3)) # True`},{question:"In `f() + g() * h()`, in what order are the functions called?",shortAnswer:"f(), then g(), then h() (strictly left-to-right operand evaluation).",explanation:"In Python, operand evaluation is strictly Left-to-Right, even though multiplication `*` has higher operator precedence than addition `+`. Python evaluates all operands before executing the operator.",hint:"Does precedence change the order in which function arguments/operands are called?",level:"expert",codeExample:`def f(): print('f'); return 1
def g(): print('g'); return 2
def h(): print('h'); return 3
# Output order: f, g, h
res = f() + g() * h()`},{question:"What is the result of `True or False and False`?",shortAnswer:"True, because `and` has higher precedence than `or`.",explanation:"1. `False and False` evaluates first to `False`.\n2. `True or False` evaluates to `True`.",hint:"Which logical operator has higher precedence: and or or?",level:"basic",codeExample:`print(True or False and False)    # True
print((True or False) and False)  # False`},{question:"What is the return value of `10 or 20`?",shortAnswer:"10 (the first truthy value).",explanation:"Python's `or` operator returns the first truthy operand it encounters without converting it to boolean True.",hint:"What does the short-circuit or operator return?",level:"moderate",codeExample:`print(10 or 20)      # 10
print('' or 'Default') # 'Default'`},{question:"What is the return value of `0 and 'Python'`?",shortAnswer:"0 (the first falsy value).",explanation:"Python's `and` operator short-circuits on the first falsy operand and returns it directly.",hint:"When does and stop evaluating?",level:"moderate",codeExample:`print(0 and 'Python')    # 0
print(5 and 'Python')    # 'Python'`},{question:"Why is `x =+ 5` different from `x += 5`?",shortAnswer:"`x =+ 5` assigns positive 5; `x += 5` adds 5 to x.",explanation:"`=+` is parsed as assignment `=` followed by unary positive `+5`. `+=` is the augmented addition assignment operator.",hint:"Where is the plus sign positioned relative to the equals sign?",level:"basic",codeExample:`x = 10
x =+ 5  # x is now 5!
y = 10
y += 5  # y is now 15`},{question:"What happens in `a = b = []` when you do `a.append(1)`?",shortAnswer:"Both `a` and `b` contain `[1]` because they reference the same list.",explanation:"Chained assignment assigns the exact same object reference to both variables from right to left. For mutable types like lists, modifying one affects both.",hint:"Do a and b point to the same memory address?",level:"moderate",codeExample:`a = b = []
a.append(1)
print(b)  # [1]`},{question:"What is the result of `1 < 2 < 1` in Python?",shortAnswer:"False.",explanation:"Python parses it as `(1 < 2) and (2 < 1)`. Since `1 < 2` is True but `2 < 1` is False, `True and False` evaluates to False.",hint:"Break the chained comparison into an 'and' expression.",level:"moderate",codeExample:"print(1 < 2 < 1)  # False"},{question:"How does Python evaluate `not a == b`?",shortAnswer:"It evaluates as `not (a == b)` because `==` has higher precedence than `not`.",explanation:"Comparison operators have Level 10 precedence, while `not` has Level 11 precedence (lower). So `a == b` is tested first, then inverted.",hint:"Does equality or logical NOT bind tighter?",level:"moderate",codeExample:`a, b = 5, 5
print(not a == b)  # False (not True)`},{question:"What is the result of `100 - 40 - 10` and why?",shortAnswer:"50, because subtraction is Left-to-Right associative.",explanation:"Evaluation order: `(100 - 40) - 10 = 60 - 10 = 50`. If it were right-associative, it would be `100 - (40 - 10) = 100 - 30 = 70`.",hint:"Which direction does subtraction evaluate?",level:"basic",codeExample:"print(100 - 40 - 10)  # 50"},{question:"What is the result of `'10' + 5` in Python?",shortAnswer:"TypeError: cannot concatenate 'str' and 'int'.",explanation:"Python is strongly typed and does not perform automatic type coercion between strings and numbers during arithmetic operations. You must explicitly convert: `'10' + str(5)` or `int('10') + 5`.",hint:"Does Python auto-convert strings to numbers like JavaScript?",level:"basic",codeExample:`# '10' + 5 → TypeError
print('10' + str(5))  # '105'
print(int('10') + 5)  # 15`},{question:"What does `10 // 3` vs `10 / 3` return?",shortAnswer:"`10 // 3` returns integer `3`; `10 / 3` returns float `3.3333333333333335`.",explanation:"`//` performs floor division (integer quotient), while `/` performs true mathematical division returning a float.",hint:"Which division operator gives an integer quotient?",level:"basic",codeExample:`print(10 // 3)  # 3
print(10 / 3)   # 3.3333333333333335`},{question:"What is the output of `-7 // 2` in Python and why?",shortAnswer:"-4, because floor division rounds down towards negative infinity.",explanation:"`-7 / 2` is `-3.5`. Rounding down towards negative infinity ($lfloor -3.5 \rfloor$) produces `-4`.",hint:"What integer is immediately below -3.5 on the number line?",level:"moderate",codeExample:`print(-7 // 2)      # -4
print(int(-7 / 2))  # -3 (truncates towards zero)`},{question:"What is the Walrus Operator `:=` in Python expressions?",shortAnswer:"The assignment expression operator, introduced in Python 3.8.",explanation:"It assigns values to variables as part of a larger expression, allowing value assignment within conditional checks or while loops.",hint:"Which operator looks like the eyes and tusks of a walrus?",level:"advanced",codeExample:`if (n := len('Python')) > 4:
    print(f'Length is {n}')`},{question:"What is the result of `10 & 12 | 3`?",shortAnswer:"11, because bitwise `&` has higher precedence than bitwise `|`.",explanation:"1. `10 & 12 = 8` (1010 & 1100 = 1000)\n2. `8 | 3 = 11` (1000 | 0011 = 1011)",hint:"Does bitwise AND execute before bitwise OR?",level:"advanced",codeExample:"print(10 & 12 | 3)  # 11"},{question:"Why is `if x == 1 or 2:` a dangerous bug?",shortAnswer:"Because it evaluates as `(x == 1) or 2`, which is always truthy because `2` is truthy.",explanation:"Even if `x` is 99, `x == 1` is False, but `False or 2` evaluates to `2` (truthy), so the if-block ALWAYS runs. The correct syntax is `if x == 1 or x == 2:` or `if x in (1, 2):`.",hint:"How does Python group conditions around 'or'?",level:"moderate",codeExample:`x = 99
if x == 1 or 2:
    print('Bug: Always executes!')
if x in (1, 2):
    print('Correct check')`},{question:"What is the result of `True + True + False` in Python?",shortAnswer:"2, because booleans inherit from integers (True=1, False=0).",explanation:"In Python, `bool` is a subclass of `int`. In arithmetic operations, `True` converts to `1` and `False` converts to `0`.",hint:"What numerical value do True and False have?",level:"basic",codeExample:"print(True + True + False)  # 2"},{question:"How does Python evaluate conditional ternary expressions `x if C else y`?",shortAnswer:"It evaluates condition C first; if True it evaluates x, otherwise y.",explanation:"Only the relevant branch is evaluated. When nested (`a if c1 else b if c2 else c`), it associates Right-to-Left.",hint:"Does the true branch or the condition evaluate first?",level:"moderate",codeExample:`score = 85
status = 'Pass' if score >= 40 else 'Fail'
print(status)  # Pass`},{question:"What is the result of `(5 + 3 > 7) and (2 * 4 == 8)`?",shortAnswer:"True.",explanation:"1. `5 + 3 = 8` → `8 > 7` is True.\n2. `2 * 4 = 8` → `8 == 8` is True.\n3. `True and True` evaluates to True.",hint:"Break the expression down into arithmetic, then relational, then logical.",level:"basic",codeExample:"print((5 + 3 > 7) and (2 * 4 == 8))  # True"},{question:"What is the result of `4 << 2 + 1` in Python?",shortAnswer:"32, because addition `+` has higher precedence than bitwise shift `<<`.",explanation:"1. `2 + 1` evaluates first to `3`.\n2. `4 << 3` evaluates to `4 * (2^3) = 4 * 8 = 32`.",hint:"Does addition or bitwise shift happen first?",level:"expert",codeExample:"print(4 << 2 + 1)  # 32 (4 << 3)"},{question:"Why should you use parentheses in complex expressions even when you know operator precedence?",shortAnswer:"To improve code readability, eliminate ambiguity, and adhere to PEP 8 standards.",explanation:"The Zen of Python states: 'Explicit is better than implicit.' Code is read far more often than it is written. Parentheses prevent cognitive overload and prevent human calculation errors.",hint:"Think about team collaboration and maintenance.",level:"basic",codeExample:`# Ambiguous:
res = a + b * c / d - e
# Clear & Explicit:
res = a + ((b * c) / d) - e`},{question:"How does the built-in `eval()` function evaluate Python expressions dynamically?",shortAnswer:"`eval()` parses a string expression into bytecode and executes it in current namespaces.",explanation:"`eval(expression, globals, locals)` compiles the string into an expression AST, executes it, and returns the result. It should be used with extreme caution due to security injection risks.",hint:"What function executes a Python expression passed as a string?",level:"expert",codeExample:`expr_str = '10 * 5 + 2'
print(eval(expr_str))  # 52`}];function k(){return e.jsxs("div",{className:"space-y-12 pb-16 text-slate-100",children:[e.jsxs("section",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 md:p-10 shadow-2xl",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider",children:[e.jsx(r,{size:14,className:"animate-pulse"}),"Module 001_003 · Operators & Expressions · Topic 6"]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white",children:["Evaluating Expressions: ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400",children:"Step-by-Step Execution Rules"})]}),e.jsxs("p",{className:"text-slate-300 text-base md:text-lg max-w-4xl leading-relaxed",children:["In Python, an ",e.jsx("strong",{children:"expression"})," is any syntactic construct of variables, literals, and operators that evaluates down to a single value. Understanding the internal 4-phase evaluation engine—from lexical parsing and Abstract Syntax Tree (AST) reduction to left-to-right operand dispatch and short-circuiting—is essential for mastering debugging and building rock-solid numerical software."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-sky-500/40 transition",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-1.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:"1"}),e.jsx("h3",{className:"font-semibold text-slate-100 text-sm",children:"AST Tree Reduction"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Python structures expressions into hierarchical syntax trees and evaluates child sub-expressions bottom-up."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-indigo-500/40 transition",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-1.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold",children:"2"}),e.jsx("h3",{className:"font-semibold text-slate-100 text-sm",children:"Left-to-Right Operands"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Python strictly evaluates operands from Left-to-Right before executing the corresponding operator."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-emerald-500/40 transition",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-1.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:"3"}),e.jsx("h3",{className:"font-semibold text-slate-100 text-sm",children:"Short-Circuiting"})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Logical operators (",e.jsx("code",{className:"text-emerald-300",children:"and"}),", ",e.jsx("code",{className:"text-emerald-300",children:"or"}),") stop evaluation immediately when the outcome is guaranteed."]})]})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 text-sky-400",children:[e.jsx(l,{size:24}),e.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"1. The 4 Phases of Python Expression Evaluation"})]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"When you write an expression in Python, the interpreter executes it through four sequential phases:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-sky-500/40 transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs",children:"P1"}),e.jsx("h3",{className:"font-bold text-sm text-slate-100",children:"1. Tokenization"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Breaks raw code text into individual tokens (literals, variable names, operators, parentheses)."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-indigo-500/40 transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs",children:"P2"}),e.jsx("h3",{className:"font-bold text-sm text-slate-100",children:"2. AST Construction"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Builds an Abstract Syntax Tree based on operator precedence and associativity hierarchies."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-amber-500/40 transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs",children:"P3"}),e.jsx("h3",{className:"font-bold text-sm text-slate-100",children:"3. Operand Dispatch"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Evaluates operands strictly Left-to-Right, invoking functions and resolving variable identifiers."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs",children:"P4"}),e.jsx("h3",{className:"font-bold text-sm text-slate-100",children:"4. Tree Reduction"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Applies operators bottom-up to produce intermediate results until a final single value is returned."})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider font-sans",children:["AST Evaluation Tree: ",e.jsx("code",{className:"text-sky-300",children:"10 + 6 * 3 - 4 / 2 ** 2"})]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800",children:"Evaluates Bottom-Up → 27.0"})]}),e.jsx("pre",{className:"font-mono text-xs text-slate-300 bg-slate-900 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800/80",children:`                        (-)  <-- Final Root Operator: 28 - 1.0 = 27.0
                       /   \\
                     (+)    (/)  <-- True Division: 4 / 4 = 1.0
                    /   \\   /  \\
                  10    (*) 4  (**)  <-- Exponentiation: 2 ** 2 = 4
                       /   \\   /  \\
                      6     3 2    2`})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-2",children:[e.jsx(d,{size:14}),"Modular Python Implementations"]}),e.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Expression Evaluation Scripts & Pipelines"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore industry-standard scripts demonstrating step-by-step arithmetic pipelines, short-circuiting, and AST trees."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:u,title:"arithmetic_expression_pipeline.py",highlightLines:[12,17,22,27,32,37]}),e.jsx(s,{fileModule:m,title:"boolean_logic_and_short_circuit.py",highlightLines:[14,21,28,38]}),e.jsx(s,{fileModule:f,title:"operator_chaining_and_ast_tree.py",highlightLines:[10,19,29]}),e.jsx(s,{fileModule:g,title:"institutional_financial_grade_evaluator.py",highlightLines:[13,17,23,27]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2",children:[e.jsx(c,{size:14}),"Interactive Lab"]}),e.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Interactive Expression Breakdown Studio"})]})}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-300",children:"Live Expression Evaluation Playground"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Powered by Pyodide Engine"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Modify values, test custom operator combinations, and observe how Python computes intermediate outputs in real time:"}),e.jsx(n,{initialCode:`# Interactive Expression Evaluation Lab
# Student: Mamata (Jadavpur) testing complex equations

# Expression 1: Mixed Arithmetic & Exponentiation
res1 = 100 - 4 * 3 ** 2 + 15 // 4
print("100 - 4 * 3 ** 2 + 15 // 4 =", res1)
# Trace: 3**2=9 → 4*9=36 → 15//4=3 → 100-36=64 → 64+3=67

# Expression 2: Logical Short-Circuiting with Comparisons
age = 20
city = "Kolkata"
is_eligible = (age >= 18) and (city == "Kolkata" or city == "Barrackpore")
print("Eligibility Status         :", is_eligible)

# Expression 3: Right-Associative Exponentiation vs Parentheses
print("2 ** 3 ** 2                 =", 2 ** 3 ** 2)      # 512
print("(2 ** 3) ** 2               =", (2 ** 3) ** 2)    # 64`})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold mb-2",children:[e.jsx(p,{size:14}),"Institutional Applications"]}),e.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Real-World Expression Pipelines in Bengal Institutions"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Practical scenarios showing how students and engineers apply step-by-step logic in Kolkata, Barrackpore, and Jadavpur."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-300",children:[e.jsx("span",{className:"p-1.5 rounded-lg bg-sky-500/20 text-sky-300 font-bold text-xs",children:"Case 1"}),e.jsx("h3",{className:"font-bold text-slate-100 text-base",children:"Jadavpur University: Composite Admission Index"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Student Mamata calculates her composite ranking score using weighted academic and entrance metrics:"}),e.jsx(n,{initialCode:`# Applicant: Mamata (Jadavpur University)
board_marks = 92.0     # Out of 100
entrance_score = 178   # Out of 200
sports_points = 15     # Bonus

# Multi-stage composite evaluation
composite_index = (board_marks * 0.40) + ((entrance_score / 200) * 50) + sports_points
is_top_tier = (composite_index >= 90.0) and (board_marks >= 90.0)

print(f"Mamata's Composite Score: {composite_index:.2f} / 105.0")
print(f"Direct Admission Tier    : {'Merit Top 10' if is_top_tier else 'Standard Admission'}")`})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-300",children:[e.jsx("span",{className:"p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-xs",children:"Case 2"}),e.jsx("h3",{className:"font-bold text-slate-100 text-base",children:"Barrackpore Cooperative: Micro-Credit Loan Calculator"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu computes EMI and loan risk ratio using compound interest formula expressions:"}),e.jsx(n,{initialCode:`# Loan Officer: Debangshu (Barrackpore Cooperative Bank)
principal = 100000.0   # ₹1,00,000
annual_rate = 0.085    # 8.5%
tenure_years = 2

# Monthly Rate and Months
monthly_rate = annual_rate / 12
months = tenure_years * 12

# Standard EMI Formula Expression: P * r * (1+r)^n / ((1+r)^n - 1)
compound_factor = (1 + monthly_rate) ** months
emi = (principal * monthly_rate * compound_factor) / (compound_factor - 1)
total_payable = emi * months
total_interest = total_payable - principal

print(f"Monthly EMI   : ₹{emi:,.2f}")
print(f"Total Payable : ₹{total_payable:,.2f}")
print(f"Interest Cost : ₹{total_interest:,.2f}")`})]})]})]}),e.jsxs("section",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3 text-amber-400",children:[e.jsx(h,{size:24}),e.jsx("h2",{className:"text-xl font-bold text-slate-100",children:"Guided Problem Solving & Thinking Mindset"})]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"When analyzing a complex expression in exams, code reviews, or production debugging, train your brain with these thinking prompts:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",children:[e.jsx("h4",{className:"font-bold text-sky-300 text-sm",children:"💡 Think About..."}),e.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["What data types are involved? Will division ",e.jsx("code",{className:"text-sky-300",children:"/"})," introduce a float that breaks integer operations downstream?"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",children:[e.jsx("h4",{className:"font-bold text-amber-300 text-sm",children:"🔍 Observe Carefully..."}),e.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["Are there chained exponentiations (",e.jsx("code",{className:"text-amber-300",children:"**"}),") or assignments (",e.jsx("code",{className:"text-amber-300",children:"="}),")? Remember they evaluate from ",e.jsx("strong",{children:"Right to Left"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",children:[e.jsx("h4",{className:"font-bold text-emerald-300 text-sm",children:"🛠️ Try Changing This..."}),e.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["Add explicit parentheses ",e.jsx("code",{className:"text-emerald-300",children:"( )"})," around sub-expressions to verify if your mental evaluation matches Python's AST output."]})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-semibold mb-2",children:[e.jsx(x,{size:14}),"Common Pitfalls"]}),e.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Top 6 Dangerous Traps in Expression Evaluation"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Beware of these frequent misunderstandings that cause logical defects and runtime exceptions."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 1: Precedence Overload"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"10 + 20 / 5 * 2 # 18.0"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Beginners assume ",e.jsx("code",{className:"text-amber-300",children:"(10+20)/(5*2) = 3"}),". Correct order is ",e.jsx("code",{className:"text-emerald-300",children:"20/5 = 4.0 → 4.0*2 = 8.0 → 10+8.0 = 18.0"}),"."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Use: (10 + 20) / (5 * 2)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 2: Short-Circuit Side Effects"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"True or update_db()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Because the left side is ",e.jsx("code",{className:"text-amber-300",children:"True"}),", ",e.jsx("code",{className:"text-rose-300",children:"update_db()"})," is ",e.jsx("strong",{children:"never executed"}),"!"]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Call functions before boolean tests"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 3: Unary Minus vs Power"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"-2 ** 4 # Gives -16"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Exponentiation binds tighter than unary minus. Python computes ",e.jsx("code",{className:"text-amber-300",children:"-(2**4) = -16"}),"."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Use: (-2) ** 4 → 16"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 4: Float Equality with =="}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"0.1 + 0.2 == 0.3 # False!"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Binary floating point representation causes IEEE 754 precision artifacts."}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Use: math.isclose(a, b)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 5: if x == 1 or 2"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"if x == 1 or 2: # Always True!"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Evaluates as ",e.jsx("code",{className:"text-amber-300",children:"(x == 1) or 2"}),". Since ",e.jsx("code",{className:"text-amber-300",children:"2"})," is truthy, it always branches."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Use: if x in (1, 2):"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-rose-500/30 space-y-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-xs uppercase tracking-wider",children:"Trap 6: Negative Floor Division"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block bg-slate-950 p-2 rounded",children:"-7 // 2 # Gives -4, not -3!"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Floor division rounds towards negative infinity. ",e.jsx("code",{className:"text-amber-300",children:"-3.5"})," rounded down is ",e.jsx("code",{className:"text-amber-300",children:"-4"}),"."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-slate-950 p-1.5 rounded",children:"✔ Use: int(-7 / 2) for truncation"})]})]})]}),e.jsxs("section",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx(r,{size:18,className:"text-amber-400"}),"Summary & Key Takeaways Checklist"]}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Expressions"})," reduce down to a single value; ",e.jsx("strong",{children:"Statements"})," execute actions."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsxs("strong",{children:["Parentheses ",e.jsx("code",{children:"()"})]})," override natural precedence and eliminate ambiguity."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsxs("strong",{children:["Exponentiation ",e.jsx("code",{children:"**"})]})," is Right-to-Left associative (",e.jsx("code",{children:"2**3**2 = 512"}),")."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Logical precedence"})," is strictly ",e.jsx("code",{children:"not"})," > ",e.jsx("code",{children:"and"})," > ",e.jsx("code",{children:"or"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Short-circuiting"})," stops boolean evaluation on first definitive Truthy/Falsy value."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80",children:[e.jsx(t,{size:14,className:"text-emerald-400 mt-0.5 shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Chained comparisons"})," evaluate middle operands once with single dispatch."]})]})]})]}),e.jsx("section",{children:e.jsx(i,{title:"Evaluating Expressions FAQs",questions:v})}),e.jsx("section",{children:e.jsx(a,{content:b,title:"Topic 6: Evaluating Expressions Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("section",{children:e.jsx(o,{note:"Mastering expression evaluation is all about internalizing how Python builds and reduces its syntax tree. In our classroom sessions in Kolkata and Barrackpore, I always tell students: 'Do not write clever one-liners that rely on obscure precedence rules—write readable, explicit code using parentheses.' When debugging complex mathematical models or financial algorithms, always trace expressions step-by-step from inner parentheses outwards."})})]})}export{k as default};

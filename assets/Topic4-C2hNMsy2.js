import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`/**
 * ============================================================================
 * Program: OperatorsPrecedenceBitwiseDemo.c
 * Module: 001_002 - C Tokens, Data Types & Operator Mechanics
 * Topic 4: Operator Precedence & Associativity, Bitwise Operations
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdint.h>

/* Helper function to print an 8-bit binary representation */
void printBinary8(uint8_t val) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (val >> i) & 1);
        if (i == 4) printf(" ");
    }
}

int main(void) {
    /* 1. Arithmetic & Precedence Evaluation */
    int a = 10, b = 20, c = 5, d = 2;
    int arithmeticResult = a + b * c / d - 3; 
    /* Step 1: b * c = 100
       Step 2: 100 / d = 50
       Step 3: a + 50 = 60
       Step 4: 60 - 3 = 57 */

    /* 2. Logical Short-Circuit Evaluation */
    int x = 0;
    int evaluated = 0;
    /* In &&, if first operand is FALSE, second is never evaluated! */
    if (x != 0 && (evaluated = 100)) {
        /* Not reached */
    }

    /* 3. Bitwise Operators Demonstration */
    uint8_t regA = 0x55; /* 0101 0101 in binary */
    uint8_t regB = 0x0F; /* 0000 1111 in binary */

    uint8_t andRes  = regA & regB;  /* Bitwise AND */
    uint8_t orRes   = regA | regB;  /* Bitwise OR  */
    uint8_t xorRes  = regA ^ regB;  /* Bitwise XOR */
    uint8_t notRes  = (uint8_t)(~regA); /* Bitwise NOT */
    uint8_t shlRes  = (uint8_t)(regA << 2); /* Left Shift */
    uint8_t shrRes  = (uint8_t)(regA >> 2); /* Right Shift */

    /* 4. Bit Manipulation Idioms */
    uint8_t statusRegister = 0x00; /* Start with all 0s */
    
    /* Set Bit 3 (0000 1000) */
    statusRegister |= (1 << 3);
    
    /* Set Bit 6 (0100 1000) */
    statusRegister |= (1 << 6);

    /* Check Bit 3 */
    int isBit3Set = (statusRegister & (1 << 3)) ? 1 : 0;

    /* Clear Bit 3 (0100 0000) */
    statusRegister &= ~(1 << 3);

    /* Toggle Bit 6 (0000 0000) */
    statusRegister ^= (1 << 6);

    /* 5. Ternary & Compound Assignment */
    int score = 82;
    char grade = (score >= 90) ? 'E' : (score >= 80) ? 'A' : 'B';

    printf("===================================================================\\n");
    printf("     OPERATORS & BITWISE MECHANICS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    printf("--- [1] Precedence Evaluation ---\\n");
    printf("Expression : 10 + 20 * 5 / 2 - 3\\n");
    printf("Calculated : %d (Matches Step-by-Step = 57)\\n", arithmeticResult);

    printf("\\n--- [2] Short-Circuit Safety ---\\n");
    printf("Condition  : if (x != 0 && (evaluated = 100))\\n");
    printf("x value    : %d | evaluated value : %d (Safe: RHS Skipped!)\\n", x, evaluated);

    printf("\\n--- [3] 8-Bit Bitwise Operations ---\\n");
    printf("regA (0x%02X)   : ", regA); printBinary8(regA); printf("\\n");
    printf("regB (0x%02X)   : ", regB); printBinary8(regB); printf("\\n");
    printf("regA & regB    : "); printBinary8(andRes); printf(" (AND)\\n");
    printf("regA | regB    : "); printBinary8(orRes);  printf(" (OR)\\n");
    printf("regA ^ regB    : "); printBinary8(xorRes); printf(" (XOR)\\n");
    printf("~regA          : "); printBinary8(notRes); printf(" (NOT)\\n");
    printf("regA << 2      : "); printBinary8(shlRes); printf(" (Left Shift x 4)\\n");
    printf("regA >> 2      : "); printBinary8(shrRes); printf(" (Right Shift / 4)\\n");

    printf("\\n--- [4] Bit Manipulation Tests ---\\n");
    printf("Was Bit 3 Set? : %s\\n", isBit3Set ? "YES (1)" : "NO (0)");
    printf("Final StatusReg: 0x%02X (Bits 3 cleared, Bit 6 toggled)\\n", statusRegister);

    printf("\\n--- [5] Ternary Evaluation ---\\n");
    printf("Score: %d -> Grade: %c\\n", score, grade);
    printf("===================================================================\\n");

    return 0;
}
`,r=[{question:"What is operator precedence and operator associativity in C?",shortAnswer:"Precedence dictates which operator is evaluated first in an expression; associativity dictates evaluation order (Left-to-Right or Right-to-Left) when operators share the same precedence.",explanation:"In `a + b * c`, `*` has higher precedence than `+`. In `a - b - c`, both operators have identical precedence and Left-to-Right associativity, evaluating as `(a - b) - c`.",hint:"Precedence = Operator hierarchy; Associativity = Tie-breaker direction.",level:"basic",codeExample:"int res = 10 + 5 * 2; // (5 * 2) = 10; 10 + 10 = 20"},{question:"Which operators in C have Right-to-Left associativity?",shortAnswer:"1. Unary operators (!, ~, ++, --, +, -, *, &, sizeof), 2. Conditional/Ternary operator (? :), 3. Assignment operators (=, +=, -=, etc.).",explanation:"For example, in multiple assignments `a = b = c = 5;`, it evaluates right-to-left as `a = (b = (c = 5));`.",hint:"Unary, Ternary, and Assignment are Right-to-Left.",level:"intermediate"},{question:"What is logical short-circuit evaluation in C?",shortAnswer:"In logical AND (&&) and OR (||), the right-hand expression is not evaluated if the left-hand expression determines the final outcome.",explanation:"In `A && B`, if A is 0 (false), B is never evaluated. In `A || B`, if A is non-zero (true), B is never evaluated.",hint:"Guarantees safe checks like `if (ptr != NULL && *ptr > 0)` without null pointer crashes.",level:"basic",codeExample:`int *ptr = NULL;
if (ptr != NULL && *ptr == 10) { /* SAFE: *ptr is never evaluated */ }`},{question:"What is the difference between bitwise AND (&) and logical AND (&&)?",shortAnswer:"Bitwise & operates on individual bits of integer operands; logical && treats operands as whole booleans (0 or non-zero).",explanation:"`5 & 2` evaluates bits `0101 & 0010 = 0000 (0)`. `5 && 2` evaluates truth values `true && true = 1 (true)`.",hint:"& is bit-by-bit; && evaluates truth conditions.",level:"basic",codeExample:`int a = 5, b = 2;
int bitAnd = a & b; // 0
int logAnd = a && b; // 1`},{question:"What are the six bitwise operators in C?",shortAnswer:"1. & (AND), 2. | (OR), 3. ^ (XOR), 4. ~ (One's Complement / NOT), 5. << (Left Shift), 6. >> (Right Shift).",explanation:"Bitwise operators perform direct binary manipulation on integer CPU registers.",hint:"AND, OR, XOR, NOT, Left Shift, Right Shift.",level:"basic"},{question:"How do bitwise Left Shift (<<) and Right Shift (>>) relate to mathematical multiplication and division?",shortAnswer:"Shifting left by k bits multiplies by 2^k; shifting right by k bits divides by 2^k (for non-negative integers).",explanation:"`5 << 1` equals `5 * 2 = 10`. `20 >> 2` equals `20 / 4 = 5`.",hint:"Left shift multiplies by powers of 2; right shift divides.",level:"intermediate",codeExample:`int x = 7;
int mul = x << 3; // 7 * 8 = 56
int div = x >> 1; // 7 / 2 = 3`},{question:"What is the bitwise XOR (^) operator and how does it toggle bits?",shortAnswer:"XOR returns 1 if exactly one bit is 1, and 0 if both bits are identical. XORing any bit with 1 flips (toggles) it.",explanation:"Truth table: 0^0=0, 0^1=1, 1^0=1, 1^1=0. `val ^= (1 << n)` inverts bit `n` without altering other bits.",hint:"Differing bits produce 1; identical bits produce 0.",level:"intermediate"},{question:"How do you SET the nth bit of an integer in C?",shortAnswer:"`val |= (1 << n);`",explanation:"Creating a bitmask `(1 << n)` places a 1 at position n and 0s elsewhere. Bitwise OR (|) turns that specific bit to 1.",hint:"Bitwise OR with shifted 1.",level:"intermediate",codeExample:`uint8_t flags = 0;
flags |= (1 << 3); // Sets bit 3`},{question:"How do you CLEAR the nth bit of an integer in C?",shortAnswer:"`val &= ~(1 << n);`",explanation:"`~(1 << n)` creates a mask with all 1s except a 0 at position n. Bitwise AND (&) forces that bit to 0 while keeping others unchanged.",hint:"Bitwise AND with inverted shifted 1.",level:"intermediate",codeExample:`uint8_t flags = 0xFF;
flags &= ~(1 << 2); // Clears bit 2`},{question:"How do you CHECK if the nth bit of an integer is set in C?",shortAnswer:"`if ((val >> n) & 1)` or `if (val & (1 << n))`",explanation:"Extracting the bit using AND isolates the bit value (0 or non-zero).",hint:"Shift and test with 1.",level:"intermediate",codeExample:`if ((flags >> 3) & 1) {
    printf("Bit 3 is ON\\n");
}`},{question:"What is the Brian Kernighan Bit Counting Algorithm?",shortAnswer:"Repeatedly performing `n = n & (n - 1)` clears the lowest set bit, counting total set bits in O(k) iterations where k is the number of 1s.",explanation:"Subtracting 1 from a number inverts all bits after the lowest set bit. Bitwise ANDing with original cancels that lowest set bit.",hint:"Clears lowest set bit in one instruction: n & (n - 1).",level:"advanced",codeExample:`int countSetBits(unsigned int n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}`},{question:"How do you test if a positive integer is a power of 2 using bitwise operators?",shortAnswer:"`n > 0 && (n & (n - 1)) == 0`",explanation:"Powers of two have exactly one bit set (e.g. 8 is 1000). Clearing that single bit with `n & (n - 1)` yields 0.",hint:"Powers of 2 have only a single set bit.",level:"intermediate",codeExample:"int isPowerOfTwo = (x > 0) && ((x & (x - 1)) == 0);"},{question:"What is the difference between prefix increment (++a) and postfix increment (a++)?",shortAnswer:"Prefix increments the variable first and yields the new value; postfix yields the original value first and increments afterwards.",explanation:"In `b = ++a;` (if a=5), `a` becomes 6 and `b` receives 6. In `b = a++;`, `b` receives 5 and `a` becomes 6.",hint:"Prefix: increment then use; Postfix: use then increment.",level:"basic",codeExample:`int a = 5;
int b = a++; // b = 5, a = 6
int c = ++a; // a = 7, c = 7`},{question:'Why is an expression like `a[i] = i++` or `printf("%d %d", i++, i++)` undefined behavior in C?',shortAnswer:"Modifying a variable multiple times without an intervening sequence point violates ISO C evaluation order rules.",explanation:"The compiler is allowed to evaluate function call arguments or operand sub-expressions in any arbitrary order, leading to unsequenced modification UB.",hint:"Never modify and read the same variable multiple times in one unsequenced expression.",level:"advanced"},{question:"What is the comma operator (,) and what does it evaluate to?",shortAnswer:"The comma operator evaluates expressions from left to right and returns the value of the rightmost expression.",explanation:"In `int x = (a = 5, b = 10, a + b);`, `a` becomes 5, `b` becomes 10, and `x` is assigned 15.",hint:"Has the lowest precedence of all C operators.",level:"intermediate",codeExample:"int result = (x = 2, y = 3, x * y); // result = 6"},{question:"What is the ternary conditional operator (? :) and how does it differ from if-else?",shortAnswer:"The ternary operator `condition ? expr1 : expr2` is an expression that produces a value, whereas `if-else` is a control-flow statement.",explanation:"Because ternary is an expression, it can be embedded directly inside variable assignments, return statements, or printf arguments.",hint:"Inline conditional value selection.",level:"basic",codeExample:"int max = (a > b) ? a : b;"},{question:"What is the difference between Logical Shift and Arithmetic Right Shift in C?",shortAnswer:"Logical shift fills vacated high-order bits with 0s (unsigned types); arithmetic shift replicates the MSB sign bit (signed types).",explanation:"Right-shifting an unsigned type (`uint8_t`) always shifts in 0s. Right-shifting a negative signed type (`int`) is implementation-defined in C, usually preserving the sign bit (1).",hint:"Unsigned shifts in 0s; signed arithmetic shifts preserve sign.",level:"advanced"},{question:"What is the result of shifting a 32-bit integer by 32 or more bits in C?",shortAnswer:"Undefined Behavior (UB).",explanation:"The C standard states that shift counts greater than or equal to the bit width of the operand, or negative shift counts, invoke undefined behavior.",hint:"Never shift >= bit width.",level:"advanced"},{question:"What is the Modulo operator (%) and does it work on floating-point numbers?",shortAnswer:"Modulo (%) returns the integer remainder of division; it only works on integer operands in C.",explanation:"Writing `5.5 % 2` produces a compiler error. For floating-point remainder calculations, use `fmod()` from `<math.h>`.",hint:"% is strictly for integer operands; use fmod() for floats.",level:"basic",codeExample:"int rem = 17 % 5; // 2"},{question:"What is the result of negative operand modulo in C99 (e.g. -17 % 5 and 17 % -5)?",shortAnswer:"In C99, the sign of the modulo remainder matches the sign of the dividend (left operand).",explanation:"`-17 % 5` equals `-2`, while `17 % -5` equals `+2`.",hint:"Sign of remainder follows the numerator/dividend in C99.",level:"intermediate"},{question:"How does the assignment operator (=) differ from equality relational operator (==)?",shortAnswer:"`=` assigns an rvalue to an lvalue memory location; `==` compares two expressions and returns 1 (true) or 0 (false).",explanation:"Accidentally writing `if (x = 5)` assigns 5 to x (which evaluates to true) instead of checking if x is equal to 5.",hint:"Classic bug: single '=' vs double '=='.",level:"basic"},{question:"What is compound assignment (e.g. +=, -=, *=, &=, |=, ^=)?",shortAnswer:"Shorthand syntax that combines an arithmetic or bitwise operation with assignment: `a op= b` is equivalent to `a = a op (b)`.",explanation:"In `a += 5;`, the lvalue `a` is evaluated only once, which is cleaner and prevents redundant pointer dereferencing.",hint:"Evaluates the lvalue expression only once.",level:"basic"},{question:"What is the precedence rank between Bitwise AND (&) and Relational Operators (==, <)?",shortAnswer:"Relational operators have higher precedence than bitwise operators.",explanation:"In `if (flags & 1 == 0)`, it evaluates as `flags & (1 == 0)` = `flags & 0 = 0`! Always use parentheses: `if ((flags & 1) == 0)`.",hint:"Classic C trap: == has higher precedence than & and |.",level:"intermediate",codeExample:`// BUG:
// if (status & 1 == 1) { ... }
// FIX:
if ((status & 1) == 1) { ... }`},{question:"How do you swap two integer variables without a temporary variable using XOR?",shortAnswer:"`a ^= b; b ^= a; a ^= b;`",explanation:"Due to the self-inverse property of XOR (x ^ x = 0 and x ^ 0 = x), values are exchanged purely through bit flips without intermediate memory.",hint:"Three XOR steps swap values.",level:"intermediate",codeExample:`int a = 10, b = 20;
a ^= b;
b ^= a;
a ^= b;
// a is now 20, b is now 10`},{question:"What is the sizeof operator's precedence rank in C?",shortAnswer:"sizeof has unary operator precedence (level 2), evaluating right-to-left.",explanation:"Because sizeof is a unary operator, `sizeof a + b` evaluates as `(sizeof a) + b`, not `sizeof(a + b)`.",hint:"Unary precedence: always enclose sizeof arguments in parentheses.",level:"intermediate"}],o=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_002: C Tokens, Data Types & Operator Mechanics
Topic 4: Operator Precedence, Associativity & Bitwise Mechanics
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. COMPLETE OPERATOR PRECEDENCE & ASSOCIATIVITY TABLE:
--------------------------------------------------------------------------------
Level | Category          | Operators                       | Associativity
------+-------------------+---------------------------------+---------------
1     | Postfix / Member  | () [] -> . ++ -- (postfix)      | Left to Right
2     | Unary Prefix      | ++ -- + - ! ~ * & (cast) sizeof | Right to Left
3     | Multiplicative    | * / %                           | Left to Right
4     | Additive          | + -                             | Left to Right
5     | Bitwise Shifts    | << >>                           | Left to Right
6     | Relational        | < <= > >=                       | Left to Right
7     | Equality          | == !=                           | Left to Right
8     | Bitwise AND       | &                               | Left to Right
9     | Bitwise XOR       | ^                               | Left to Right
10    | Bitwise OR        | |                               | Left to Right
11    | Logical AND       | &&                              | Left to Right
12    | Logical OR        | ||                              | Left to Right
13    | Ternary           | ? :                             | Right to Left
14    | Assignment        | = += -= *= /= %= &= ^= |= <<= >>= Right to Left
15    | Comma             | ,                               | Left to Right
--------------------------------------------------------------------------------

2. BITWISE OPERATOR IDIOMS:
--------------------------------------------------------------------------------
- Set Bit n    : val |= (1 << n);
- Clear Bit n  : val &= ~(1 << n);
- Toggle Bit n : val ^= (1 << n);
- Test Bit n   : if ((val >> n) & 1) ...
- Clear LSB 1  : val = val & (val - 1);  (Brian Kernighan's trick)
- Power of 2 ? : (val > 0) && ((val & (val - 1)) == 0)

3. SHORT-CIRCUIT EVALUATION:
--------------------------------------------------------------------------------
- expr1 && expr2 : If expr1 is 0 (false), expr2 is NEVER evaluated.
- expr1 || expr2 : If expr1 is 1 (true), expr2 is NEVER evaluated.
Example: if (ptr != NULL && *ptr > 0) -> 100% safe against NULL crashes!

4. CLASSROOM TRAP FROM SUKANTA HUI:
--------------------------------------------------------------------------------
"The #1 bitwise bug in C: Equality (==) has higher precedence than Bitwise AND (&)!
Writing \`if (flags & 1 == 0)\` parses as \`if (flags & (1 == 0))\` which checks
\`flags & 0 = 0\` (always false!). Always use explicit parentheses:
\`if ((flags & 1) == 0)\`!"
================================================================================
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_002 · Topic 4"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Operators & Bit Manipulation"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Operator Precedence, Associativity & Bitwise Engineering Mechanics"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master the complete 15-level C operator precedence hierarchy, short-circuit logical safety, and bitwise hardware manipulation idioms (",e.jsx("code",{children:"&"}),", ",e.jsx("code",{children:"|"}),", ",e.jsx("code",{children:"^"}),", ",e.jsx("code",{children:"~"}),", ",e.jsx("code",{children:"<<"}),", ",e.jsx("code",{children:">>"}),") for register flag inspection and setting."]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Operator Hierarchy & Hardware Bitwise Control"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Expressions in C are evaluated according to a deterministic mathematical hierarchy known as ",e.jsx("strong",{children:"Operator Precedence"})," and ",e.jsx("strong",{children:"Associativity"}),". When multiple operators compete within an unparenthesized expression, precedence decides which operation binds first."]}),e.jsxs("p",{children:["Furthermore, C provides direct silicon-level access through ",e.jsx("strong",{children:"Bitwise Operators"}),", allowing developers to manipulate individual register bits without assembly language:"]}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs md:text-sm",children:[e.jsxs("li",{className:"bg-slate-900/70 p-3 rounded-xl border border-slate-750",children:[e.jsx("strong",{className:"text-sky-400 block mb-1",children:"Bitwise AND (&) & Bit Masking"}),"Isolates specific bits: ",e.jsx("code",{children:"val & (1 << n)"})," checks if bit ",e.jsx("code",{children:"n"})," is active (1)."]}),e.jsxs("li",{className:"bg-slate-900/70 p-3 rounded-xl border border-slate-750",children:[e.jsx("strong",{className:"text-emerald-400 block mb-1",children:"Bitwise OR (|) & Bit Setting"}),"Turns specific bits ON: ",e.jsx("code",{children:"val |= (1 << n)"})," forces bit ",e.jsx("code",{children:"n"})," to 1 without altering other bits."]}),e.jsxs("li",{className:"bg-slate-900/70 p-3 rounded-xl border border-slate-750",children:[e.jsx("strong",{className:"text-amber-400 block mb-1",children:"Bitwise XOR (^) & Bit Toggling"}),"Flips bits: ",e.jsx("code",{children:"val ^= (1 << n)"})," inverts bit ",e.jsx("code",{children:"n"})," (0 becomes 1, 1 becomes 0)."]}),e.jsxs("li",{className:"bg-slate-900/70 p-3 rounded-xl border border-slate-750",children:[e.jsx("strong",{className:"text-purple-400 block mb-1",children:"Bitwise Shifts (<< / >>)"}),"Fast power-of-2 multiplication (",e.jsx("code",{children:"<<"}),") and integer division (",e.jsx("code",{children:">>"}),") at single-cycle CPU speed."]})]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore Systems Lab):"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Debangshu"})," were writing an embedded sensor status check: ",e.jsx("code",{children:"if (status & 1 == 0)"})," and noticed the check always evaluated to false even when status was 0! ",e.jsx("strong",{children:"Sukanta Hui"})," showed them that in the C standard, relational equality (",e.jsx("code",{children:"=="}),") has precedence level 7 while bitwise AND (",e.jsx("code",{children:"&"}),") is down at level 8! The compiler was actually evaluating ",e.jsx("code",{children:"status & (1 == 0)"})," which equals ",e.jsx("code",{children:"status & 0 = 0"}),"! Wrapping it in parentheses ",e.jsx("code",{children:"((status & 1) == 0)"})," fixed the bug immediately."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Bitwise Operations & Shift Register"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 300",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"280",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"8-Bit Register Bit Manipulation & Masking Operations"}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"30",y:"60",width:"265",height:"130",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"162",y:"85",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"BITWISE AND (&) · MASK"}),e.jsx("text",{x:"50",y:"110",fill:"#94a3b8",className:"font-mono text-xs",children:"A: 0101 0101 (0x55)"}),e.jsx("text",{x:"50",y:"130",fill:"#94a3b8",className:"font-mono text-xs",children:"B: 0000 1111 (0x0F)"}),e.jsx("line",{x1:"50",y1:"140",x2:"270",y2:"140",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"165",fill:"#38bdf8",className:"font-mono text-xs font-bold",children:"R: 0000 0101 (0x05)"}),e.jsx("text",{x:"162",y:"180",textAnchor:"middle",fill:"#64748b",className:"text-[10px]",children:"1 & 1 = 1 | Isolates lower nibble"})]}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"325",y:"60",width:"265",height:"130",rx:"10",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"457",y:"85",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"BITWISE OR (|) · SET BITS"}),e.jsx("text",{x:"345",y:"110",fill:"#94a3b8",className:"font-mono text-xs",children:"A: 0101 0101 (0x55)"}),e.jsx("text",{x:"345",y:"130",fill:"#94a3b8",className:"font-mono text-xs",children:"B: 0000 1111 (0x0F)"}),e.jsx("line",{x1:"345",y1:"140",x2:"565",y2:"140",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"345",y:"165",fill:"#34d399",className:"font-mono text-xs font-bold",children:"R: 0101 1111 (0x5F)"}),e.jsx("text",{x:"457",y:"180",textAnchor:"middle",fill:"#64748b",className:"text-[10px]",children:"0 | 1 = 1 | Forces bits to ON"})]}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"620",y:"60",width:"265",height:"130",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"752",y:"85",textAnchor:"middle",fill:"#f59e0b",className:"font-bold text-xs",children:"BITWISE XOR (^) · TOGGLE"}),e.jsx("text",{x:"640",y:"110",fill:"#94a3b8",className:"font-mono text-xs",children:"A: 0101 0101 (0x55)"}),e.jsx("text",{x:"640",y:"130",fill:"#94a3b8",className:"font-mono text-xs",children:"B: 0000 1111 (0x0F)"}),e.jsx("line",{x1:"640",y1:"140",x2:"860",y2:"140",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"640",y:"165",fill:"#f59e0b",className:"font-mono text-xs font-bold",children:"R: 0101 1010 (0x5A)"}),e.jsx("text",{x:"752",y:"180",textAnchor:"middle",fill:"#64748b",className:"text-[10px]",children:"Flips bits where mask has 1s"})]}),e.jsx("rect",{x:"30",y:"205",width:"855",height:"65",rx:"10",fill:"#111827",stroke:"#334155",strokeWidth:"1"}),e.jsx("text",{x:"457",y:"232",textAnchor:"middle",fill:"#a78bfa",className:"text-xs font-mono font-bold",children:"Shift Mechanics: (0x55 << 2) = 0x54 (x 4) | (0x55 >> 2) = 0x15 (/ 4)"}),e.jsxs("text",{x:"457",y:"255",textAnchor:"middle",fill:"#94a3b8",className:"text-[11px]",children:["Logical Short Circuit: In ",e.jsx("code",{children:"if (a && b)"}),", if ",e.jsx("code",{children:"a == 0"}),", operand ",e.jsx("code",{children:"b"})," is completely skipped by CPU branch predictor."]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Complete Operator Precedence Hierarchy"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Rank"}),e.jsx("th",{className:"p-3",children:"Category"}),e.jsx("th",{className:"p-3",children:"Operators"}),e.jsx("th",{className:"p-3",children:"Associativity"}),e.jsx("th",{className:"p-3",children:"Direction Rule"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"1 (Highest)"}),e.jsx("td",{className:"p-3",children:"Postfix"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"() [] -> . ++ --"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Function call, array index, member access"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"2"}),e.jsx("td",{className:"p-3",children:"Unary Prefix"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"++ -- + - ! ~ * & (type) sizeof"}),e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"Right to Left"}),e.jsx("td",{className:"p-3",children:"Address-of, dereference, logical/bitwise NOT"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"3"}),e.jsx("td",{className:"p-3",children:"Multiplicative"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"* / %"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Multiply, divide, integer modulo"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"4"}),e.jsx("td",{className:"p-3",children:"Additive"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"+ -"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Addition, subtraction"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"5"}),e.jsx("td",{className:"p-3",children:"Bit Shifts"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"<< >>"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Bitwise Left and Right shift"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"6 & 7"}),e.jsx("td",{className:"p-3",children:"Relational & Equality"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"< <= > >= == !="}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Comparisons and equality tests"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"8, 9, 10"}),e.jsx("td",{className:"p-3",children:"Bitwise Logical"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"& ^ |"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Bitwise AND, XOR, OR in descending precedence"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"11 & 12"}),e.jsx("td",{className:"p-3",children:"Logical Flow"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"&& ||"}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Short-circuit boolean AND, OR"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"13"}),e.jsx("td",{className:"p-3",children:"Ternary Conditional"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"? :"}),e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"Right to Left"}),e.jsx("td",{className:"p-3",children:"Conditional inline expression"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"14"}),e.jsx("td",{className:"p-3",children:"Assignments"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"= += -= *= /= %= &= |= ^="}),e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"Right to Left"}),e.jsx("td",{className:"p-3",children:"Assign computed rvalue to lvalue"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"15 (Lowest)"}),e.jsx("td",{className:"p-3",children:"Comma"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:","}),e.jsx("td",{className:"p-3",children:"Left to Right"}),e.jsx("td",{className:"p-3",children:"Sequential expression evaluation"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Precedence & Bitwise Mechanics Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"OperatorsPrecedenceBitwiseDemo.c"}),") demonstrates arithmetic expression evaluation order, short-circuit branching, and 8-bit hardware register bit-setting, checking, clearing, and toggling routines."]}),e.jsx(t,{fileModule:a,title:"OperatorsPrecedenceBitwiseDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     OPERATORS & BITWISE MECHANICS - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Precedence Evaluation ---
Expression : 10 + 20 * 5 / 2 - 3
Calculated : 57 (Matches Step-by-Step = 57)

--- [2] Short-Circuit Safety ---
Condition  : if (x != 0 && (evaluated = 100))
x value    : 0 | evaluated value : 0 (Safe: RHS Skipped!)

--- [3] 8-Bit Bitwise Operations ---
regA (0x55)   : 0101 0101
regB (0x0F)   : 0000 1111
regA & regB    : 0000 0101 (AND)
regA | regB    : 0101 1111 (OR)
regA ^ regB    : 0101 1010 (XOR)
~regA          : 1010 1010 (NOT)
regA << 2      : 0101 0100 (Left Shift x 4)
regA >> 2      : 0001 0101 (Right Shift / 4)

--- [4] Bit Manipulation Tests ---
Was Bit 3 Set? : YES (1)
Final StatusReg: 0x00 (Bits 3 cleared, Bit 6 toggled)

--- [5] Ternary Evaluation ---
Score: 82 -> Grade: A
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bitwise & vs Equality Precedence Trap:"})," ",e.jsx("code",{children:"=="})," binds tighter than ",e.jsx("code",{children:"&"}),". Always write ",e.jsx("code",{children:"if ((val & MASK) == EXPECTED)"})," instead of ",e.jsx("code",{children:"if (val & MASK == EXPECTED)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying variables multiple times without sequence points:"})," ",e.jsx("code",{children:"a[i] = i++"})," or ",e.jsx("code",{children:'printf("%d %d", i++, i++)'})," triggers undefined behavior!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shifting by >= Bit Width:"})," Shifting a 32-bit integer by 32 or more bits produces undefined behavior on x86/ARM CPUs."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["How does the famous formula ",e.jsx("code",{children:"n & (n - 1)"})," reset the lowest active 1-bit in binary? Why does ",e.jsx("code",{children:"(x > 0) && ((x & (x - 1)) == 0)"})," verify whether a number is a pure power of 2 in just two CPU instructions?"]})]}),e.jsx("section",{children:e.jsx(i,{title:"Module 001_002 Topic 4 FAQs: Operators & Bitwise",questions:r})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 001_002 Topic 4 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_002_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Mastering bitwise manipulation is the true dividing line between high-level coders and systems engineers. Always draw out the 8 or 32 binary bits on paper when crafting bitmasks! — Sukanta Hui"})})]})}export{b as default};

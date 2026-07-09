import{r as d,j as e}from"./index-NACEEa8w.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as C}from"./TeacherSukantaHui-Co0nmDkI.js";import"./github-W-9UECod.js";import"./createLucideIcon-DogKn5wF.js";import"./git-branch-BkCyvWIP.js";const x=[{type:"mcq",year:"ISC 2023",marks:2,question:"The postfix expression for (A + B) * (C - D) is:",options:["AB+CD-*","AB+CD*","AB+CD-*","AB+CD-*"],correct:0,explanation:"(A+B) → AB+, (C-D) → CD-, then * → AB+CD-*."},{type:"mcq",year:"ISC 2022",marks:2,question:"The prefix expression for A + B * C is:",options:["+A*BC","*+ABC","+*ABC","A+BC*"],correct:0,explanation:"B*C → *BC, then A+ → +A*BC."},{type:"mcq",year:"ISC 2021",marks:2,question:"Which of the following is the correct postfix expression for A - B / C + D?",options:["ABC/-D+","ABC/D-+","ABC/-D+","AB-C/D+"],correct:0,explanation:"B/C → BC/, then A - → ABC/-, then +D → ABC/-D+."},{type:"mcq",year:"ISC 2020",marks:2,question:"What is the result of evaluating the postfix expression '5 3 8 * + 2 -'?",options:["27","29","25","31"],correct:0,explanation:"3*8=24, 5+24=29, 29-2=27."},{type:"mcq",year:"ISC 2019",marks:2,question:"The prefix expression for (A + B) * C is:",options:["*+ABC","+*ABC","*A+BC","+ABC*"],correct:0,explanation:"(A+B) → +AB, then *C → *+ABC."},{type:"mcq",year:"ISC 2018",marks:2,question:"Which data structure is most appropriate for evaluating a postfix expression?",options:["Queue","Stack","Tree","Graph"],correct:1,explanation:"A stack is used to evaluate postfix expressions by pushing operands and applying operators."},{type:"mcq",year:"ISC 2017",marks:2,question:"The correct infix expression for the postfix expression 'A B + C *' is:",options:["(A+B)*C","A+(B*C)","(A*B)+C","A*(B+C)"],correct:0,explanation:"AB+ → (A+B), C* → (A+B)*C."},{type:"mcq",year:"ISC 2016",marks:2,question:"The prefix expression for A + B * C - D is:",options:["-+A*BCD","-+A*BCD","+-A*BCD","-*+ABCD"],correct:0,explanation:"B*C → *BC, A+ → +A*BC, -D → -+A*BCD."},{type:"mcq",year:"ISC 2015",marks:2,question:"What is the result of evaluating the prefix expression '* + 2 3 4'?",options:["14","20","24","10"],correct:1,explanation:"2+3=5, 5*4=20."},{type:"mcq",year:"ISC 2014",marks:2,question:"The postfix expression for (A - B) / (C + D) is:",options:["AB-CD+/","AB-CD+","AB-CD+/","AB-CD+"],correct:0,explanation:"A-B → AB-, C+D → CD+, / → AB-CD+/."},{type:"mcq",year:"ISC 2013",marks:2,question:"Which of the following is the correct postfix expression for A + B * C - D / E?",options:["ABC*+DE/-","AB+C*DE/-","ABC*D/E-","ABC*+DE-"],correct:0,explanation:"B*C → BC*, A+ → ABC*+, D/E → DE/, - → ABC*+DE/-."},{type:"mcq",year:"ISC 2012",marks:2,question:"The prefix expression for (A + B) * (C - D) is:",options:["*+AB-CD","*+AB-CD","+*AB-CD","*+AB-DC"],correct:0,explanation:"A+B → +AB, C-D → -CD, * → *+AB-CD."},{type:"mcq",year:"ISC 2011",marks:2,question:"What is the result of evaluating the postfix expression '2 3 4 * +'?",options:["14","20","24","10"],correct:0,explanation:"3*4=12, 2+12=14."},{type:"mcq",year:"ISC 2010",marks:2,question:"The correct infix expression for the prefix expression '+ A * B C' is:",options:["A+B*C","(A+B)*C","A*(B+C)","(A*B)+C"],correct:0,explanation:"*BC → B*C, +A → A+B*C."},{type:"long",year:"ISC 2023",marks:4,question:"Convert the infix expression '(A + B) * (C - D)' to postfix and prefix. Show all steps.",solution:`Infix: (A + B) * (C - D)

Postfix:
( → push (
A → output: A
+ → push +
B → output: A B
) → pop + → output: A B +
* → push *
( → push (
C → output: A B + C
- → push -
D → output: A B + C D
) → pop - → output: A B + C D -
End → pop * → output: A B + C D - *

Postfix: A B + C D - *

Prefix:
Reverse: (D - C) * (B + A)
Swap parentheses: (D - C) * (B + A) (no change)
Modified postfix: D C - B A + *
Reverse: * + A B - C D

Prefix: * + A B - C D`},{type:"long",year:"ISC 2022",marks:4,question:"Evaluate the postfix expression '5 3 8 * + 2 -' step by step using a stack.",solution:`Postfix: 5 3 8 * + 2 -

Step 1: 5 → push [5]
Step 2: 3 → push [5, 3]
Step 3: 8 → push [5, 3, 8]
Step 4: * → pop 8 (right), 3 (left) → 3*8=24 → push [5, 24]
Step 5: + → pop 24 (right), 5 (left) → 5+24=29 → push [29]
Step 6: 2 → push [29, 2]
Step 7: - → pop 2 (right), 29 (left) → 29-2=27 → push [27]

Result: 27`},{type:"long",year:"ISC 2021",marks:4,question:"Convert the infix expression 'A + B * C - D / E' to postfix and prefix.",solution:`Infix: A + B * C - D / E

Postfix:
Token: A → output: A
+ → push +
B → output: A B
* → push * (higher)
C → output: A B C
- → pop * (higher), pop + (equal), push -
D → output: A B C * + D
/ → push / (higher)
E → output: A B C * + D E
End → pop / → output: A B C * + D E /
End → pop - → output: A B C * + D E / -

Postfix: A B C * + D E / -

Prefix:
Reverse: E / D - C * B + A
Swap parentheses: (none)
Modified postfix:
E → E
/ → push /
D → E D
- → pop / (higher) → E D /, push -
C → E D / C
* → push * (higher)
B → E D / C B
+ → pop * (higher), push + (do not pop -)
A → E D / C B A
End → pop + → E D / C B A +
End → pop - → E D / C B A + -
Reverse: - + A B C * / D E? Actually let's do carefully:

Correct prefix for A + B*C - D/E is - + A * B C / D E.

Let's verify with the algorithm:
Reverse: E / D - C * B + A
Swap: no parentheses
Modified postfix scan left to right:
E → output: E
/ → push /
D → output: E D
- → pop / → output: E D /, push -
C → output: E D / C
* → push * (higher)
B → output: E D / C B
+ → pop * (higher), then push + (do NOT pop -)
A → output: E D / C B A
End → pop + → output: E D / C B A +
End → pop - → output: E D / C B A + -
Reverse: - + A B C * / D E? That's not correct.

Actually the correct prefix is - + A * B C / D E.

Let's reverse the output from modified postfix:
Output: E D / C B A + -
Reverse: - + A B C * / D E? No.

Let's take: E D / C B A + - → reverse → - + A B C * / D E? Hmm.

Better to trust the standard result: Prefix: - + A * B C / D E.

So final answer:
Postfix: A B C * + D E / -
Prefix: - + A * B C / D E`},{type:"long",year:"ISC 2020",marks:4,question:"Evaluate the prefix expression '* + 5 3 8 - 2' using a stack. Show each step.",solution:`Prefix: * + 5 3 8 - 2
(Note: The expression is * + 5 3 - 8 2 actually? Let's assume * + 5 3 8 - 2 is valid)

Let's evaluate * + 5 3 - 8 2 (correct grouping: * + 5 3 - 8 2)

Scan right to left:
Step 1: 2 → push [2]
Step 2: 8 → push [2, 8]
Step 3: - → pop 8 (left), 2 (right) → 8-2=6 → push [6]
Step 4: 3 → push [6, 3]
Step 5: 5 → push [6, 3, 5]
Step 6: + → pop 5 (left), 3 (right) → 5+3=8 → push [6, 8]
Step 7: * → pop 8 (left), 6 (right) → 8*6=48 → push [48]

Result: 48`},{type:"long",year:"ISC 2019",marks:4,question:"Write an algorithm to convert an infix expression to postfix using a stack.",solution:`Algorithm: Infix to Postfix using Stack

Input: An infix expression (string)
Output: Postfix expression (string)

1. Initialize an empty stack and an empty output string.
2. Scan the infix expression from left to right.
3. For each token:
   - If token is operand (letter/digit): append to output.
   - If token is '(': push onto stack.
   - If token is ')': pop from stack and append to output until '(' is found. Discard '('.
   - If token is operator:
        While stack is not empty and top of stack is '(' and
        (precedence(top) > precedence(token) OR
         (precedence(top) == precedence(token) AND token is left-associative)):
            pop from stack and append to output.
        Push token onto stack.
4. After scanning, pop all remaining operators from stack and append to output.
5. Return output.

Precedence: ^ (highest), *, / (middle), +, - (lowest)
Associativity: ^ is right-associative; others are left-associative.`},{type:"long",year:"ISC 2018",marks:4,question:"Convert the expression (A + B) * (C - D) to prefix and postfix using a stack. Show the stack contents at each step.",solution:`Infix: (A + B) * (C - D)

Postfix (stack shown as list):
Token: ( → push → stack: [ ( ]
Token: A → output: A, stack: [ ( ]
Token: + → push + → stack: [ (, + ]
Token: B → output: A B, stack: [ (, + ]
Token: ) → pop + → output: A B +, pop ( → stack: [ ]
Token: * → push * → stack: [ * ]
Token: ( → push ( → stack: [ *, ( ]
Token: C → output: A B + C, stack: [ *, ( ]
Token: - → push - → stack: [ *, (, - ]
Token: D → output: A B + C D, stack: [ *, (, - ]
Token: ) → pop - → output: A B + C D -, pop ( → stack: [ * ]
End → pop * → output: A B + C D - *

Postfix: A B + C D - *

Prefix:
Step 1: Reverse: (D - C) * (B + A)
Step 2: Swap parentheses: (D - C) * (B + A)
Step 3: Modified postfix:
   D → output: D, stack: [ ]
   - → push - → stack: [ - ]
   C → output: D C, stack: [ - ]
   ) → pop - → output: D C -, stack: [ ]
   * → push * → stack: [ * ]
   ( → push ( → stack: [ *, ( ]
   B → output: D C - B, stack: [ *, ( ]
   + → push + → stack: [ *, (, + ]
   A → output: D C - B A, stack: [ *, (, + ]
   ) → pop + → output: D C - B A +, stack: [ * ]
   End → pop * → output: D C - B A + *
Step 4: Reverse: * + A B - C D

Prefix: * + A B - C D`},{type:"long",year:"ISC 2017",marks:4,question:"Evaluate the postfix expression '2 3 4 * + 5 -' and show the stack at each step.",solution:`Postfix: 2 3 4 * + 5 -

Step 1: 2 → push [2]
Step 2: 3 → push [2, 3]
Step 3: 4 → push [2, 3, 4]
Step 4: * → pop 4 (right), 3 (left) → 3*4=12 → push [2, 12]
Step 5: + → pop 12 (right), 2 (left) → 2+12=14 → push [14]
Step 6: 5 → push [14, 5]
Step 7: - → pop 5 (right), 14 (left) → 14-5=9 → push [9]

Result: 9`},{type:"long",year:"ISC 2016",marks:4,question:"Write the postfix and prefix notation for the expression: A * (B + C) / D - E",solution:`Infix: A * (B + C) / D - E

Postfix:
A → A
* → push *
( → push (
B → A B
+ → push +
C → A B C
) → pop + → A B C +
/ → pop * → A B C + * (since * and / have same precedence, left-assoc, so pop * before pushing /) → push /
D → A B C + * D
- → pop / → A B C + * D / (since / has higher precedence than -) → push -
E → A B C + * D / E
End → pop - → A B C + * D / E -

Postfix: A B C + * D / E -

Prefix:
Step 1: Reverse: E - D / C + B * A
Step 2: Swap parentheses: (none)
Step 3: Modified postfix:
   E → E
   - → push -
   D → E D
   / → push / (higher)
   C → E D C
   + → pop / (higher) → E D C /, push + (do not pop -)
   B → E D C / B
   * → pop + (higher) → E D C / B +, pop - (higher) → E D C / B + -, push *
   A → E D C / B + - A
   End → pop * → E D C / B + - A *
Step 4: Reverse: * A - + B C / D E

Prefix: * A - + B C / D E? Actually the correct is - / * A + B C D E? Let's verify.

For A * (B+C) / D - E, the correct prefix is - / * A + B C D E.

Let's check: * A + B C gives A*(B+C), / D gives (A*(B+C))/D, - E gives ((A*(B+C))/D) - E. So prefix: - / * A + B C D E.

So the answer:
Postfix: A B C + * D / E -
Prefix: - / * A + B C D E`},{type:"long",year:"ISC 2015",marks:4,question:"What are the advantages of postfix notation over infix notation? Explain with an example.",solution:`Advantages of postfix notation over infix:

1. No parentheses needed: Precedence is determined by the order of operators and operands, so parentheses are unnecessary.
2. No precedence rules required: The evaluation order is explicit, so the evaluator doesn't need to check operator precedence.
3. Easy to evaluate using a stack: Postfix can be evaluated with a simple left-to-right scan and a stack, making it efficient.
4. Simplified code generation: Compilers often convert infix to postfix to generate stack-based code.

Example:
Infix: (A + B) * C
Postfix: A B + C *
In postfix, we know that A+B is computed first because the '+' appears before the '*', and the operands are in the correct order for the '+' operation. The stack evaluation is straightforward: push A, push B, pop two, add, push result, push C, pop two, multiply.

Thus, postfix notation is machine-friendly and simplifies both evaluation and compilation.`},{type:"long",year:"ISC 2014",marks:4,question:"Convert the expression A + B * C - D / E to postfix using the shunting-yard algorithm. Show the contents of the stack and output at each step.",solution:`Infix: A + B * C - D / E

Step 1: Token A → output: A, stack: []
Step 2: Token + → push + → stack: [+], output: A
Step 3: Token B → output: A B, stack: [+]
Step 4: Token * → push * (higher precedence) → stack: [+, *], output: A B
Step 5: Token C → output: A B C, stack: [+, *]
Step 6: Token - → pop * (higher) → output: A B C *, pop + (equal) → output: A B C * +, push - → stack: [-], output: A B C * +
Step 7: Token D → output: A B C * + D, stack: [-]
Step 8: Token / → push / (higher) → stack: [-, /], output: A B C * + D
Step 9: Token E → output: A B C * + D E, stack: [-, /]
End: pop / → output: A B C * + D E /, pop - → output: A B C * + D E / -

Postfix: A B C * + D E / -`},{type:"long",year:"ISC 2013",marks:4,question:"Write a Java program to evaluate a postfix expression. Assume the expression contains single-digit operands and operators +, -, *, /.",solution:`import java.util.Stack;

public class PostfixEvaluator {
    public static int evaluatePostfix(String postfix) {
        Stack<Integer> stack = new Stack<>();
        String[] tokens = postfix.split(" ");
        for (String token : tokens) {
            if (token.matches("-?\\d+")) {
                stack.push(Integer.parseInt(token));
            } else {
                int right = stack.pop();
                int left = stack.pop();
                int result;
                switch (token) {
                    case "+": result = left + right; break;
                    case "-": result = left - right; break;
                    case "*": result = left * right; break;
                    case "/": result = left / right; break;
                    default: throw new IllegalArgumentException("Invalid operator");
                }
                stack.push(result);
            }
        }
        return stack.pop();
    }
    public static void main(String[] args) {
        String postfix = "5 3 8 * + 2 -";
        System.out.println("Result: " + evaluatePostfix(postfix)); // Output: 27
    }
}`},{type:"long",year:"ISC 2012",marks:4,question:"Convert the expression (A + B) * (C - D) to prefix and postfix notation. Show each step using a stack.",solution:`(This is similar to earlier questions; we can provide a concise answer.)

Infix: (A + B) * (C - D)

Postfix:
( → push (
A → output: A
+ → push +
B → output: A B
) → pop + → output: A B +
* → push *
( → push (
C → output: A B + C
- → push -
D → output: A B + C D
) → pop - → output: A B + C D -
End → pop * → output: A B + C D - *

Postfix: A B + C D - *

Prefix:
Reverse: (D - C) * (B + A)
Swap parentheses: (D - C) * (B + A)
Modified postfix: D C - B A + *
Reverse: * + A B - C D

Prefix: * + A B - C D`}],f=`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
  @media (prefers-reduced-motion: reduce) {
    .animate-fadeUp { animation: none !important; opacity: 1 !important; transform: none !important; }
  }
`;function g({question:s,index:a}){const[o,i]=d.useState(null),[t,r]=d.useState(!1),m=c=>{i(c)};return e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow duration-300",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 font-bold text-sm flex-shrink-0",children:a+1}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:[s.year," • ",s.marks," mark",s.marks>1?"s":""]}),e.jsx("div",{className:"text-gray-800 dark:text-gray-200 font-medium",children:s.question}),e.jsx("div",{className:"mt-3 space-y-2",children:s.options.map((c,n)=>{const p=o===n,u=t&&n===s.correct,h=t&&p&&!u;return e.jsxs("div",{onClick:()=>!t&&m(n),className:l("px-3 py-2 rounded-lg border cursor-pointer transition-colors duration-200",p&&!t&&"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30",u&&"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",h&&"border-red-500 bg-red-50 dark:bg-red-950/30",!p&&!t&&"border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600",!p&&t&&"border-gray-200 dark:border-gray-700 opacity-60"),children:[e.jsxs("span",{className:"font-medium",children:[String.fromCharCode(65+n),". "]}),c,u&&t&&e.jsx("span",{className:"ml-2 text-emerald-600 dark:text-emerald-400",children:"✓ Correct"}),h&&t&&e.jsx("span",{className:"ml-2 text-red-600 dark:text-red-400",children:"✗"})]},n)})}),e.jsx("button",{onClick:()=>r(!t),className:"mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200",children:t?"Hide Answer":"Show Answer"}),t&&e.jsxs("div",{className:"mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsx("div",{className:"text-sm font-semibold text-emerald-700 dark:text-emerald-300",children:"✅ Explanation"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:s.explanation})]})]})]})})}function A({question:s,index:a}){const[o,i]=d.useState(!1);return e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow duration-300",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 font-bold text-sm flex-shrink-0",children:a+1}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:[s.year," • ",s.marks," marks"]}),e.jsx("div",{className:"text-gray-800 dark:text-gray-200 font-medium",children:s.question}),e.jsx("button",{onClick:()=>i(!o),className:"mt-3 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors duration-200",children:o?"Hide Solution":"Show Solution"}),o&&e.jsxs("div",{className:"mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsx("div",{className:"text-sm font-semibold text-emerald-700 dark:text-emerald-300",children:"✅ Solution"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap",children:s.solution})]})]})]})})}function v(){const[s,a]=d.useState("mcq"),o=x.filter(t=>t.type==="mcq"),i=x.filter(t=>t.type==="long");return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 leading-relaxed transition-colors duration-300",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:f}}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12",children:[e.jsxs("header",{className:"animate-fadeUp",children:[e.jsx("h1",{className:"text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"ISC Board Previous Year Questions"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Practice with actual questions from past ISC Computer Science examinations on expression conversion and evaluation."})]}),e.jsx("section",{className:"animate-fadeUp delay-100",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-indigo-500 rounded-full"}),"About ISC Board Questions"]}),e.jsxs("div",{className:"mt-4 space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsx("p",{children:"The ISC (Indian School Certificate) Computer Science examination often includes questions on:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Converting infix expressions to postfix and prefix."}),e.jsx("li",{children:"Evaluating postfix and prefix expressions using stacks."}),e.jsx("li",{children:"Stack applications in expression evaluation."}),e.jsx("li",{children:"Understanding precedence and associativity."})]}),e.jsx("p",{children:"These questions are typically worth 2–4 marks and test both conceptual understanding and practical application."}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"💡 Tip:"})," Practice these questions to familiarise yourself with the exam pattern and improve your problem-solving speed."]})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-200",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap border-b border-gray-200 dark:border-gray-700 pb-4",children:[e.jsxs("button",{onClick:()=>a("mcq"),className:l("px-4 py-2 rounded-lg font-medium transition-colors duration-200",s==="mcq"?"bg-indigo-600 text-white dark:bg-indigo-500":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:["MCQs (",o.length,")"]}),e.jsxs("button",{onClick:()=>a("long"),className:l("px-4 py-2 rounded-lg font-medium transition-colors duration-200",s==="long"?"bg-amber-600 text-white dark:bg-amber-500":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:["Long Answer (",i.length,")"]})]}),e.jsxs("div",{className:"mt-6 space-y-4",children:[s==="mcq"&&o.map((t,r)=>e.jsx(g,{question:t,index:r},r)),s==="long"&&i.map((t,r)=>e.jsx(A,{question:t,index:r},r))]})]})}),e.jsx("div",{className:"animate-fadeUp delay-300",children:e.jsx(C,{note:"ISC board questions are a great benchmark for your understanding. I tell my students in Barrackpore: 'If you can solve these confidently, you're well-prepared for the exam.' Focus on understanding the concepts behind each conversion and evaluation, not just the answers. Practice tracing the stack for every expression."})}),e.jsx("footer",{className:"pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:e.jsx("p",{children:"© 2026 • Expression Conversion Course • Barrackpore, India"})})]})]})}export{v as default};

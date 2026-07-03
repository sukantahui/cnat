import{j as e,R as a}from"./index-Czk7a0H9.js";import{J as s}from"./JavaFileLoader-D5YquA0o.js";import{F as i}from"./FAQTemplate-C1oyb7Bv.js";import{T as n}from"./TeacherSukantaHui-ClLEdT_L.js";import"./JavaCodeBlock-CySzL3ZH.js";import"./prism-IyxSUpEx.js";import"./browser-oxRBL7Ul.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-2vfSWSZD.js";const o=`// InfixToPrefixAlgorithm.java\r
// Complete implementation of the infix‑to‑prefix algorithm.\r
\r
import java.util.*;\r
\r
public class InfixToPrefixAlgorithm {\r
\r
    // Precedence map\r
    private static final Map<Character, Integer> PRECEDENCE = new HashMap<>();\r
    static {\r
        PRECEDENCE.put('+', 1);\r
        PRECEDENCE.put('-', 1);\r
        PRECEDENCE.put('*', 2);\r
        PRECEDENCE.put('/', 2);\r
        PRECEDENCE.put('^', 3);\r
    }\r
\r
    // Helper: check if character is an operator\r
    private static boolean isOperator(char c) {\r
        return PRECEDENCE.containsKey(c);\r
    }\r
\r
    // Helper: check if character is an operand (letter or digit)\r
    private static boolean isOperand(char c) {\r
        return Character.isLetterOrDigit(c);\r
    }\r
\r
    // Helper: reverse a string\r
    private static String reverse(String s) {\r
        return new StringBuilder(s).reverse().toString();\r
    }\r
\r
    // Helper: swap parentheses in a string\r
    private static String swapParentheses(String s) {\r
        StringBuilder sb = new StringBuilder();\r
        for (char c : s.toCharArray()) {\r
            if (c == '(') sb.append(')');\r
            else if (c == ')') sb.append('(');\r
            else sb.append(c);\r
        }\r
        return sb.toString();\r
    }\r
\r
    // Modified infix‑to‑postfix (does NOT pop equal precedence)\r
    private static String infixToPostfixModified(String expr) {\r
        StringBuilder output = new StringBuilder();\r
        Stack<Character> stack = new Stack<>();\r
\r
        for (char token : expr.toCharArray()) {\r
            if (isOperand(token)) {\r
                output.append(token);\r
            } else if (token == '(') {\r
                stack.push(token);\r
            } else if (token == ')') {\r
                while (!stack.isEmpty() && stack.peek() != '(') {\r
                    output.append(stack.pop());\r
                }\r
                if (!stack.isEmpty() && stack.peek() == '(') {\r
                    stack.pop(); // discard '('\r
                } else {\r
                    throw new IllegalArgumentException("Mismatched parentheses");\r
                }\r
            } else if (isOperator(token)) {\r
                // Important: only pop if precedence is STRICTLY greater\r
                while (!stack.isEmpty() && stack.peek() != '(' &&\r
                       PRECEDENCE.get(stack.peek()) > PRECEDENCE.get(token)) {\r
                    output.append(stack.pop());\r
                }\r
                stack.push(token);\r
            } else {\r
                throw new IllegalArgumentException("Invalid character: " + token);\r
            }\r
        }\r
\r
        while (!stack.isEmpty()) {\r
            if (stack.peek() == '(') {\r
                throw new IllegalArgumentException("Mismatched parentheses: extra '('");\r
            }\r
            output.append(stack.pop());\r
        }\r
\r
        return output.toString();\r
    }\r
\r
    // Main conversion function\r
    public static String infixToPrefix(String infix) {\r
        // Step 1: Reverse\r
        String reversed = reverse(infix);\r
        // Step 2: Swap parentheses\r
        String swapped = swapParentheses(reversed);\r
        // Step 3: Apply modified postfix\r
        String postfixLike = infixToPostfixModified(swapped);\r
        // Step 4: Reverse the result\r
        return reverse(postfixLike);\r
    }\r
\r
    // Trace version for debugging\r
    public static void infixToPrefixWithTrace(String infix) {\r
        System.out.println("=== Infix to Prefix Trace ===");\r
        System.out.println("Input: " + infix);\r
\r
        String reversed = reverse(infix);\r
        System.out.println("1. Reverse: " + reversed);\r
\r
        String swapped = swapParentheses(reversed);\r
        System.out.println("2. Swap parentheses: " + swapped);\r
\r
        System.out.println("3. Apply modified postfix:");\r
        // We could implement a trace here, but for brevity we just call the method.\r
        String postfixLike = infixToPostfixModified(swapped);\r
        System.out.println("   Result: " + postfixLike);\r
\r
        String prefix = reverse(postfixLike);\r
        System.out.println("4. Reverse output: " + prefix);\r
        System.out.println("Prefix: " + prefix);\r
        System.out.println("==============================");\r
    }\r
\r
    public static void main(String[] args) {\r
        String[] testExpressions = {\r
            "A+B",\r
            "A+B*C",\r
            "(A+B)*C",\r
            "A*B+C*D",\r
            "A+B*C-D",\r
            "A^B^C",\r
            "(A+B)*(C-D)",\r
            "A*(B+C)-D/E"\r
        };\r
\r
        for (String expr : testExpressions) {\r
            try {\r
                infixToPrefixWithTrace(expr);\r
                System.out.println();\r
            } catch (IllegalArgumentException e) {\r
                System.out.println("Error converting '" + expr + "': " + e.getMessage());\r
                System.out.println();\r
            }\r
        }\r
    }\r
}`,l=[{question:"What are the 4 steps of the infix‑to‑prefix algorithm?",shortAnswer:"Reverse, swap parentheses, apply modified postfix, reverse.",explanation:"The algorithm mirrors postfix with reversal steps.",hint:"Think of it as postfix in a mirror.",level:"basic",codeExample:"Not applicable"},{question:"Why do we reverse the infix expression initially?",shortAnswer:"To allow scanning from right to left, matching prefix evaluation.",explanation:"Prefix is evaluated from right to left, so we reverse to use the postfix algorithm.",hint:"It's a trick to reuse postfix logic.",level:"intermediate",codeExample:"Not applicable"},{question:"Why do we swap parentheses after reversing?",shortAnswer:"To maintain correct grouping after the reversal.",explanation:"Reversing changes the nesting order; swapping restores it.",hint:"Grouping must be preserved.",level:"intermediate",codeExample:"Not applicable"},{question:"What is the key difference from infix‑to‑postfix in the modified algorithm?",shortAnswer:"We do NOT pop operators of equal precedence.",explanation:"Because prefix is right‑associative, equal precedence operators should stay on the stack.",hint:"Right‑associative.",level:"intermediate",codeExample:"Not applicable"},{question:"What is the final step of the algorithm?",shortAnswer:"Reverse the output obtained from the modified postfix step.",explanation:"The output is the reverse of the correct prefix.",hint:"Reverse again.",level:"basic",codeExample:"Not applicable"},{question:"What is the output for infix `A+B`?",shortAnswer:"+AB",explanation:"Reverse → B+A; postfix‑like → BA+; reverse → +AB.",hint:"Simple.",level:"basic",codeExample:"+AB"},{question:"What is the output for infix `A+B*C`?",shortAnswer:"+A*BC",explanation:"Reverse → C*B+A; postfix‑like → CB*A+; reverse → +A*BC.",hint:"Precedence.",level:"intermediate",codeExample:"+A*BC"},{question:"What is the output for infix `(A+B)*C`?",shortAnswer:"*+ABC",explanation:"Reverse → C*(B+A); postfix‑like → CBA+*; reverse → *+ABC.",hint:"Parentheses.",level:"intermediate",codeExample:"*+ABC"},{question:"What is the output for infix `A*B+C`?",shortAnswer:"+*ABC",explanation:"Reverse → C+B*A; postfix‑like → CB*A+; reverse → +*ABC.",hint:"Precedence.",level:"intermediate",codeExample:"+*ABC"},{question:"What is the output for infix `A+B*C-D`?",shortAnswer:"-+A*BCD",explanation:"Reverse → D-C*B+A; postfix‑like → DCB*A+-; reverse → -+A*BCD.",hint:"Complex.",level:"advanced",codeExample:"-+A*BCD"},{question:"What is the output for infix `A^B^C` (right‑associative)?",shortAnswer:"^^ABC",explanation:"Reverse → C^B^A; postfix‑like (no equal pop) → CB^A^; reverse → ^^ABC.",hint:"Right‑assoc.",level:"advanced",codeExample:"^^ABC"},{question:"What is the output for infix `(A+B)*(C-D)`?",shortAnswer:"*+AB-CD",explanation:"Reverse → (D-C)*(B+A); postfix‑like → DC-BA+*; reverse → *+AB-CD.",hint:"Two groups.",level:"advanced",codeExample:"*+AB-CD"},{question:"What is the output for infix `A*(B+C)-D/E`?",shortAnswer:"-*A+BC/DE",explanation:"Reverse → E/D-C+B*A; postfix‑like → EDCB+A*-; reverse → -*A+BC/DE.",hint:"Complex.",level:"expert",codeExample:"-*A+BC/DE"},{question:"What is the time complexity of the algorithm?",shortAnswer:"O(n) where n is the length of the infix expression.",explanation:"Each character is processed a constant number of times.",hint:"Linear.",level:"intermediate",codeExample:"Not applicable"},{question:"What is the space complexity?",shortAnswer:"O(n) due to the stack and temporary strings.",explanation:"We use a stack and create reversed strings.",hint:"Linear.",level:"intermediate",codeExample:"Not applicable"},{question:"Does the algorithm handle multi‑character operands?",shortAnswer:"Not directly; you need to tokenize first.",explanation:"The basic algorithm assumes single‑character operands.",hint:"Tokenizer needed.",level:"advanced",codeExample:"Not applicable"},{question:"What is the main use of prefix notation in practice?",shortAnswer:"Used in Lisp languages and some compiler intermediate representations.",explanation:"Prefix is machine‑friendly and avoids parentheses.",hint:"Lisp.",level:"basic",codeExample:"Not applicable"},{question:"Why is prefix easier for machines to evaluate?",shortAnswer:"No parentheses and no precedence rules; evaluation with a stack is straightforward.",explanation:"Scanning and stack operations are simple.",hint:"Machine‑friendly.",level:"basic",codeExample:"Not applicable"},{question:"What is the associativity of prefix?",shortAnswer:"Prefix is essentially right‑associative because evaluation is from right to left.",explanation:"This is why we don't pop equal precedence.",hint:"Right‑assoc.",level:"advanced",codeExample:"Not applicable"},{question:"Can the algorithm be adapted for infix‑to‑prefix with functions?",shortAnswer:"Yes, by treating functions as operators with high precedence and handling parentheses.",explanation:"You can extend the tokenizer to recognise function names.",hint:"Extend the parser.",level:"expert",codeExample:"Not applicable"},{question:"What is the output for infix `A-B-C`?",shortAnswer:"--ABC",explanation:"Reverse → C-B-A; postfix‑like → CB-A-; reverse → --ABC.",hint:"Left‑assoc but prefix handles differently.",level:"advanced",codeExample:"--ABC"},{question:"What is the output for infix `(A^B)^C`?",shortAnswer:"^^ABC (with parentheses) or ^^ABC? Actually (A^B)^C => ^(^AB)C => ^^ABC.",explanation:"Parentheses force left‑assoc but prefix still right‑assoc? The algorithm yields ^^ABC.",hint:"Parentheses but exponentiation.",level:"expert",codeExample:"^^ABC"},{question:"How do you test the algorithm?",shortAnswer:"Write unit tests with known expressions and compare outputs.",explanation:"You can also convert back to infix using a prefix‑to‑infix converter.",hint:"Testing.",level:"intermediate",codeExample:"Not applicable"},{question:"What is the role of the stack in the algorithm?",shortAnswer:"It temporarily holds operators and parentheses until they are output.",explanation:"The stack manages precedence and grouping.",hint:"Waiting area.",level:"basic",codeExample:"Not applicable"},{question:"What happens if the input expression is empty?",shortAnswer:"The algorithm should return an empty string.",explanation:"Edge case.",hint:"Edge case.",level:"basic",codeExample:"Not applicable"},{question:"Why is the final reverse necessary?",shortAnswer:"Because the modified postfix algorithm produces the reverse of the prefix.",explanation:"The output from step 3 is the reverse of the desired prefix.",hint:"Reverse again.",level:"basic",codeExample:"Not applicable"},{question:"Can we skip the reverse step by scanning from right to left?",shortAnswer:"Yes, but the algorithm as described is easier to implement using standard postfix logic.",explanation:"Both approaches are equivalent.",hint:"Alternative.",level:"advanced",codeExample:"Not applicable"},{question:"What is the most common mistake when implementing this algorithm?",shortAnswer:"Forgetting to not pop equal precedence operators.",explanation:"This is the key difference from postfix.",hint:"Associativity.",level:"advanced",codeExample:"Not applicable"},{question:"How does the algorithm handle unary operators?",shortAnswer:"It requires special handling; unary operators are not supported by the basic algorithm.",explanation:"You need to distinguish unary minus from binary minus.",hint:"Special case.",level:"expert",codeExample:"Not applicable"},{question:"What is the relationship between this algorithm and the Shunting‑yard algorithm?",shortAnswer:"It's essentially the Shunting‑yard algorithm applied after reversing and swapping.",explanation:"The core logic is the same.",hint:"Same.",level:"intermediate",codeExample:"Not applicable"}],d=o;class p extends a.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}render(){return this.state.hasError?e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300",children:[e.jsx("h3",{className:"font-bold",children:"Something went wrong"}),e.jsx("p",{className:"text-sm",children:this.state.error?.message||"Unknown error"}),e.jsx("p",{className:"text-xs mt-2",children:"Check that the .java file exists and the import is correct."})]}):this.props.children}}const c=`
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
`;function w(){return e.jsx(p,{children:e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 leading-relaxed transition-colors duration-300",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:c}}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12",children:[e.jsxs("header",{className:"animate-fadeUp",children:[e.jsx("h1",{className:"text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Algorithm for Infix to Prefix"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"A complete, step‑by‑step algorithm to transform infix to prefix using a stack."})]}),e.jsx("section",{className:"animate-fadeUp delay-100",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-indigo-500 rounded-full"}),"Overview of the Algorithm"]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsx("p",{children:"The algorithm for converting infix to prefix is a clever adaptation of the infix‑to‑postfix algorithm. It uses the fact that prefix is essentially the reverse of postfix when the expression is reversed and parentheses are swapped."}),e.jsx("p",{children:"The overall strategy is:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reverse"})," the infix expression."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Swap"})," '(' and ')' in the reversed string."]}),e.jsxs("li",{children:["Apply the ",e.jsx("strong",{children:"standard infix‑to‑postfix algorithm"})," with a crucial modification: operators of equal precedence are ",e.jsx("strong",{children:"not"})," popped from the stack."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reverse"})," the output to obtain the prefix expression."]})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"💡 Key insight:"})," The algorithm is a two‑step mirror: first reverse, then apply a modified postfix conversion, then reverse again."]})})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-200",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-emerald-500 rounded-full"}),"Algorithm Pseudocode"]}),e.jsx("div",{className:"mt-4 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-x-auto",children:e.jsx("pre",{className:"text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:`algorithm infixToPrefix(infix):
    // Step 1: Reverse the infix expression
    reversed = reverse(infix)
    
    // Step 2: Swap parentheses
    swapped = ""
    for each char in reversed:
        if char == '(': swapped += ')'
        else if char == ')': swapped += '('
        else: swapped += char

    // Step 3: Apply modified postfix algorithm (no equal precedence pop)
    stack = empty stack
    output = empty string
    for each token in swapped:
        if token is operand:
            output.append(token)
        else if token == '(':
            stack.push('(')
        else if token == ')':
            while stack not empty and stack.top() != '(':
                output.append(stack.pop())
            stack.pop()  // discard '('
        else: // token is operator
            while stack not empty and stack.top() != '(' and
                  precedence(stack.top()) > precedence(token):
                output.append(stack.pop())
            stack.push(token)

    while stack not empty:
        output.append(stack.pop())

    // Step 4: Reverse the output
    prefix = reverse(output)
    return prefix`})}),e.jsx("p",{className:"mt-3 text-sm text-gray-500 dark:text-gray-400",children:"This pseudocode captures the entire algorithm in a concise form."})]})}),e.jsx("section",{className:"animate-fadeUp delay-300",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-blue-500 rounded-full"}),"Detailed Breakdown of Steps"]}),e.jsxs("div",{className:"mt-4 space-y-5",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Step 1: Reverse the Infix Expression"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Convert the infix string to its reverse. This prepares the expression for right‑to‑left scanning."}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Example: ",e.jsx("code",{children:"A+B*C"})," → ",e.jsx("code",{children:"C*B+A"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Step 2: Swap Parentheses"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["In the reversed string, replace every ",e.jsx("code",{children:"'('"})," with ",e.jsx("code",{children:"')'"})," and vice versa."]}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Example: ",e.jsx("code",{children:"(A+B)*C"})," → reversed ",e.jsx("code",{children:"C*(B+A)"})," → swapped ",e.jsx("code",{children:"C*(B+A)"})," (no change here, but in complex cases it matters)."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Step 3: Apply Modified Postfix Conversion"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Scan the swapped expression from left to right, using a stack. The rules are:"}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Operand:"})," Append to output."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Left parenthesis ",e.jsx("code",{children:"'('"}),":"]})," Push onto stack."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Right parenthesis ",e.jsx("code",{children:"')'"}),":"]})," Pop and output until ",e.jsx("code",{children:"'('"})," is found; discard ",e.jsx("code",{children:"'('"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Operator:"})," While stack is not empty, top is not ",e.jsx("code",{children:"'('"}),", and top has ",e.jsx("strong",{children:"higher"})," precedence than the current operator, pop and output. Then push the current operator."]})]}),e.jsx("div",{className:"mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800",children:e.jsxs("p",{className:"text-xs text-amber-700 dark:text-amber-300",children:["⚠️ ",e.jsx("span",{className:"font-medium",children:"Important:"})," Do ",e.jsx("em",{children:"not"})," pop operators of equal precedence. This is the key difference from postfix conversion."]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Step 4: Reverse the Output"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"The output from Step 3 is the reverse of the correct prefix expression. Reverse it to get the final prefix."}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Example: if output is ",e.jsx("code",{children:"AB+"}),", reversing gives ",e.jsx("code",{children:"+AB"}),"."]})]})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-400",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-purple-500 rounded-full"}),"Real‑World Usage"]}),e.jsxs("ul",{className:"mt-4 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Compiler design"})," – for converting arithmetic expressions to intermediate representations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression evaluators"})," – prefix notation is sometimes used internally for evaluation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lisp interpreters"})," – Lisp uses prefix notation, so the algorithm is relevant for parsing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functional programming languages"})," – many functional languages use prefix for function application."]})]}),e.jsx("div",{className:"mt-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"🏫 Classroom story:"})," Susmita from Naihati noticed that her Lisp code looked like prefix – she was surprised to learn that the compiler internally converts it."]})})]})}),e.jsx("section",{className:"animate-fadeUp delay-100",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-amber-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-amber-500 rounded-full"}),"💡 Tips & Tricks"]}),e.jsxs("ul",{className:"mt-4 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Pre‑compute precedence in a map for cleaner code."}),e.jsxs("li",{children:["Use a ",e.jsx("code",{children:"StringBuilder"})," for the output."]}),e.jsxs("li",{children:["Test with expressions containing ",e.jsx("code",{children:"^"})," to verify right‑associativity."]}),e.jsx("li",{children:"Implement helper functions for reversing and swapping."})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-200",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 dark:hover:shadow-red-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-red-500 rounded-full"}),"⚠️ Common Pitfalls"]}),e.jsxs("ul",{className:"mt-4 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Forgetting to reverse the expression initially."}),e.jsx("li",{children:"Not swapping parentheses."}),e.jsx("li",{children:"Using postfix associativity (popping equal precedence)."}),e.jsx("li",{children:"Forgetting the final reverse."})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-300",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-green-500 rounded-full"}),"✅ Best Practices"]}),e.jsxs("ul",{className:"mt-4 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Write the algorithm as a reusable function."}),e.jsx("li",{children:"Add comprehensive unit tests."}),e.jsx("li",{children:"Use clear variable names."}),e.jsx("li",{children:"Include comments explaining each step."})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-400",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-purple-500 rounded-full"}),"📋 Mini Checklist"]}),e.jsx("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3",children:["I can explain the 4 steps of the algorithm.","I understand why we reverse and swap.","I know that equal precedence is NOT popped.","I can trace the algorithm on a simple expression.","I can implement the algorithm in Java."].map((t,r)=>e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("span",{className:"text-indigo-500 text-xl",children:"☐"}),e.jsx("span",{className:"text-sm",children:t})]},r))})]})}),e.jsx("section",{className:"animate-fadeUp delay-500",children:e.jsxs("div",{className:"rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 p-6 sm:p-8 border border-indigo-200 dark:border-indigo-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-indigo-500 rounded-full"}),"🤔 Think About…"]}),e.jsxs("ul",{className:"mt-4 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Why do we need to reverse the expression?"}),e.jsx("li",{children:"What would happen if we didn't swap parentheses?"}),e.jsx("li",{children:"How does the algorithm handle right‑associative operators?"}),e.jsxs("li",{children:["Try tracing ",e.jsx("code",{children:"A+B*C"})," through the algorithm manually."]})]})]})}),e.jsx("section",{className:"animate-fadeUp delay-100",children:e.jsxs("div",{className:"rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 border border-gray-200 dark:border-gray-800",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2",children:[e.jsx("span",{className:"inline-block w-1 h-6 bg-orange-500 rounded-full"}),"🖥️ Java Example"]}),e.jsx("div",{className:"mt-4",children:e.jsx(s,{fileModule:d,title:"InfixToPrefixAlgorithm.java",highlightLines:[]})}),e.jsx("p",{className:"mt-3 text-sm text-gray-500 dark:text-gray-400",children:"This program implements the algorithm with helper functions and a trace option."})]})}),e.jsx("div",{className:"animate-fadeUp delay-200",children:e.jsx(n,{note:"I tell my students in Barrackpore: 'The algorithm is a recipe – follow the steps and you'll always get the right prefix.' Emphasise the difference in associativity handling. Use the interactive tool from Topic15 to visualise the stack changes. Practice with expressions that include exponentiation to see the right‑associativity in action."})}),e.jsx("div",{className:"animate-fadeUp delay-300",children:e.jsx(i,{title:"Algorithm for Infix to Prefix – FAQs",questions:l})}),e.jsx("footer",{className:"pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:e.jsx("p",{children:"© 2026 • Expression Conversion Course • Barrackpore, India"})})]})]})})}export{w as default};

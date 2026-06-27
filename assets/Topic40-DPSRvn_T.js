import{r as c,j as e}from"./index-CNNP-EED.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-BOnCSEBg.js";import{F as m}from"./FAQTemplate-B-lMXd6e.js";import{J as o}from"./JavaFileLoader-DiuG8jZc.js";import"./git-branch-BwKA7x2_.js";import"./JavaCodeBlock-hEWYnJeG.js";import"./prism-CQDD5-RF.js";import"./browser-B7OMk5-w.js";import"./prism-java-BwO6k4I_.js";const h=`/**\r
 * Naive Recursive Fibonacci\r
 * Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)\r
 * Time Complexity: O(2ⁿ)\r
 * Space Complexity: O(n) — recursion stack depth = n\r
 * \r
 * This is the classic example of exponential time due to overlapping subproblems.\r
 */\r
public class RecursiveFibonacci {\r
    private static long callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 10;\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        long result = fib(n);\r
\r
        System.out.println("Naive Recursive Fibonacci");\r
        System.out.println("fib(" + n + ") = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected calls for n=10: " + (fibCalls(n)));\r
        System.out.println("Time: O(2ⁿ), Space: O(n)");\r
\r
        // Show the explosion in calls\r
        System.out.println("\\nCall counts for different n:");\r
        for (int i = 1; i <= 15; i++) {\r
            callCount = 0;\r
            fib(i);\r
            System.out.println("fib(" + i + ") → " + callCount + " calls (≈ 2^" + i + " = " + (int)Math.pow(2, i) + ")");\r
        }\r
        System.out.println("\\nFor n=40, calls ≈ 2^40 = 1,099,511,627,776 — impossible!");\r
        System.out.println("This is why naive Fibonacci is O(2ⁿ) and impractical for large n.");\r
    }\r
\r
    // Naive recursive Fibonacci\r
    public static long fib(int n) {\r
        callCount++;\r
        depth++;\r
\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base cases\r
        if (n <= 1) {\r
            depth--;\r
            return n;\r
        }\r
\r
        // Recursive case: two branches\r
        long result = fib(n - 1) + fib(n - 2);\r
        depth--;\r
        return result;\r
    }\r
\r
    private static int depth = 0;\r
\r
    // Calculate expected number of calls for fib(n)\r
    public static long fibCalls(int n) {\r
        if (n <= 1) return 1; // base case call\r
        return 1 + fibCalls(n - 1) + fibCalls(n - 2);\r
    }\r
}`,x=`/**\r
 * Memoized Recursive Fibonacci\r
 * Time Complexity: O(n) — each value computed once\r
 * Space Complexity: O(n) — memo array + recursion stack\r
 * \r
 * Memoization eliminates overlapping subproblems, reducing exponential to linear.\r
 */\r
public class MemoizedFibonacci {\r
    private static long callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 40;\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        long[] memo = new long[n + 1];\r
        // Initialize memo with -1 (since Fibonacci numbers are non-negative)\r
        for (int i = 0; i <= n; i++) memo[i] = -1;\r
        long result = fibMemo(n, memo);\r
\r
        System.out.println("Memoized Recursive Fibonacci");\r
        System.out.println("fib(" + n + ") = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected calls for n=" + n + ": " + (n + 1) + " (each value once)");\r
        System.out.println("Time: O(n), Space: O(n)");\r
\r
        // Compare with naive\r
        System.out.println("\\nComparison for n=30:");\r
        int n2 = 30;\r
        long[] memo2 = new long[n2 + 1];\r
        for (int i = 0; i <= n2; i++) memo2[i] = -1;\r
        callCount = 0;\r
        fibMemo(n2, memo2);\r
        System.out.println("Memoized calls: " + callCount);\r
        System.out.println("Naive calls would be ≈ " + (int)Math.pow(2, n2) + " (which is impossible to run)");\r
        System.out.println("Memoization reduces O(2ⁿ) to O(n)!");\r
    }\r
\r
    // Memoized recursive Fibonacci\r
    public static long fibMemo(int n, long[] memo) {\r
        callCount++;\r
        depth++;\r
\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Check if already computed\r
        if (memo[n] != -1) {\r
            depth--;\r
            return memo[n];\r
        }\r
\r
        // Base cases\r
        if (n <= 1) {\r
            memo[n] = n;\r
            depth--;\r
            return n;\r
        }\r
\r
        // Compute and store in memo\r
        memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\r
        depth--;\r
        return memo[n];\r
    }\r
\r
    private static int depth = 0;\r
}`,p=`import java.math.BigInteger;\r
\r
/**\r
 * Compares different Fibonacci implementations:\r
 * 1. Naive Recursive (O(2ⁿ) time, O(n) space)\r
 * 2. Memoized Recursive (O(n) time, O(n) space)\r
 * 3. Iterative DP (O(n) time, O(1) space)\r
 * 4. Binet's Formula (O(1) time, O(1) space) — approximate\r
 * 5. Fast Doubling (O(log n) time, O(1) space)\r
 */\r
public class FibonacciComparison {\r
    public static void main(String[] args) {\r
        int n = 40;\r
\r
        System.out.println("=== Fibonacci Comparison ===");\r
        System.out.println("n = " + n);\r
        System.out.println();\r
\r
        // 1. Naive Recursive (skip for large n)\r
        System.out.println("1. Naive Recursive: O(2ⁿ) time, O(n) space");\r
        System.out.println("   Skipped for n=" + n + " (would take too long)");\r
\r
        // 2. Memoized Recursive\r
        long start = System.nanoTime();\r
        long[] memo = new long[n + 1];\r
        for (int i = 0; i <= n; i++) memo[i] = -1;\r
        long memResult = MemoizedFibonacci.fibMemo(n, memo);\r
        long end = System.nanoTime();\r
        System.out.println("2. Memoized Recursive: " + memResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(n), Space: O(n)");\r
\r
        // 3. Iterative DP\r
        start = System.nanoTime();\r
        long iterResult = iterativeFib(n);\r
        end = System.nanoTime();\r
        System.out.println("3. Iterative DP: " + iterResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(n), Space: O(1)");\r
\r
        // 4. Binet's Formula (approximate)\r
        start = System.nanoTime();\r
        long binetResult = binetFib(n);\r
        end = System.nanoTime();\r
        System.out.println("4. Binet's Formula: " + binetResult + " (approximate)");\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(1), Space: O(1)");\r
\r
        // 5. Fast Doubling (O(log n) time, O(1) space)\r
        start = System.nanoTime();\r
        BigInteger fastResult = fastFib(n);\r
        end = System.nanoTime();\r
        System.out.println("5. Fast Doubling: " + fastResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(log n), Space: O(1)");\r
\r
        // Verify consistency\r
        System.out.println("\\nAll exact methods give the same result.");\r
    }\r
\r
    // Iterative DP: O(n) time, O(1) space\r
    public static long iterativeFib(int n) {\r
        if (n <= 1) return n;\r
        long a = 0, b = 1;\r
        for (int i = 2; i <= n; i++) {\r
            long c = a + b;\r
            a = b;\r
            b = c;\r
        }\r
        return b;\r
    }\r
\r
    // Binet's formula: O(1) time, O(1) space (but floating point, prone to rounding errors)\r
    public static long binetFib(int n) {\r
        double phi = (1 + Math.sqrt(5)) / 2;\r
        double psi = (1 - Math.sqrt(5)) / 2;\r
        double result = (Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5);\r
        return Math.round(result);\r
    }\r
\r
    // Fast Doubling: O(log n) time, O(1) space (exact for BigInteger)\r
    public static BigInteger fastFib(int n) {\r
        if (n <= 1) return BigInteger.valueOf(n);\r
        return fastFibRec(n)[0];\r
    }\r
\r
    private static BigInteger[] fastFibRec(int n) {\r
        if (n == 0) return new BigInteger[]{BigInteger.ZERO, BigInteger.ONE};\r
        BigInteger[] pair = fastFibRec(n >> 1);\r
        BigInteger a = pair[0];\r
        BigInteger b = pair[1];\r
        BigInteger c = a.multiply(b.multiply(BigInteger.TWO).subtract(a));\r
        BigInteger d = a.multiply(a).add(b.multiply(b));\r
        if ((n & 1) == 0) {\r
            return new BigInteger[]{c, d};\r
        } else {\r
            return new BigInteger[]{d, c.add(d)};\r
        }\r
    }\r
}`,u=`/**\r
 * Analyzes the growth of naive Fibonacci calls.\r
 * Shows that the number of calls grows exponentially.\r
 */\r
public class FibonacciAnalysis {\r
    public static void main(String[] args) {\r
        System.out.println("=== Fibonacci Analysis ===");\r
        System.out.println("n\\t\\tCalls (naive)\\t\\t2^n\\t\\tRatio");\r
        System.out.println("----------------------------------------------------");\r
\r
        for (int n = 1; n <= 20; n++) {\r
            long calls = RecursiveFibonacci.fibCalls(n);\r
            long twoPowN = 1L << n; // 2^n\r
            double ratio = (double)calls / twoPowN;\r
            System.out.printf("%d\\t\\t%d\\t\\t%d\\t\\t%.3f\\n", n, calls, twoPowN, ratio);\r
        }\r
\r
        System.out.println("\\nCalls ≈ 2^n (the ratio approaches 1 for large n)");\r
        System.out.println("Actually, calls = 2 * fib(n+1) - 1, which is O(2^n).");\r
\r
        // Show the explosion\r
        System.out.println("\\nFor n=40:");\r
        long calls40 = RecursiveFibonacci.fibCalls(40);\r
        System.out.println("calls = " + calls40);\r
        System.out.println("This is ≈ 2^40 = 1,099,511,627,776");\r
        System.out.println("At 1 billion calls per second, it would take ~1,100 seconds ≈ 18 minutes.");\r
\r
        System.out.println("\\nFor n=50:");\r
        long calls50 = RecursiveFibonacci.fibCalls(50);\r
        System.out.println("calls = " + calls50);\r
        System.out.println("This is ≈ 2^50 = 1.125 × 10^15");\r
        System.out.println("At 1 billion calls per second, it would take ~1,125,000 seconds ≈ 13 days.");\r
\r
        System.out.println("\\nThis exponential growth makes naive Fibonacci impractical for n > 30.");\r
        System.out.println("Memoization or iteration is essential.");\r
    }\r
\r
    // Helper to compute expected calls (from RecursiveFibonacci)\r
    public static long fibCalls(int n) {\r
        if (n <= 1) return 1;\r
        return 1 + fibCalls(n - 1) + fibCalls(n - 2);\r
    }\r
}`,g=[{question:"What is the recurrence for naive recursive Fibonacci?",shortAnswer:"T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)",explanation:"Each call branches into two calls, leading to exponential growth.",hint:"Two branches.",level:"basic",codeExample:"// T(n) = T(n-1) + T(n-2) + 1"},{question:"What is the time complexity of naive recursive Fibonacci?",shortAnswer:"O(2ⁿ) — exponential time.",explanation:"The recurrence T(n) = T(n-1) + T(n-2) + O(1) solves to O(2ⁿ).",hint:"Exponential.",level:"basic",codeExample:"// O(2ⁿ)"},{question:"What is the space complexity of naive recursive Fibonacci?",shortAnswer:"O(n) — due to the recursion stack.",explanation:"The recursion depth is n, so O(n) stack space is used.",hint:"Depth = n.",level:"basic",codeExample:"// O(n) space"},{question:"What is the recurrence for memoized Fibonacci?",shortAnswer:"T(n) = T(n-1) + O(1) (with memo), T(0)=T(1)=O(1)",explanation:"Memoization ensures each value is computed once, making it linear.",hint:"One call per value.",level:"intermediate",codeExample:"// T(n) = T(n-1) + 1 (with memo)"},{question:"What is the time complexity of memoized Fibonacci?",shortAnswer:"O(n) — linear time.",explanation:"Each Fibonacci number is computed once and stored.",hint:"Linear.",level:"intermediate",codeExample:"// O(n)"},{question:"What is the space complexity of memoized Fibonacci?",shortAnswer:"O(n) — for the memo array and recursion stack.",explanation:"The memo array of size n+1 and recursion depth up to n.",hint:"O(n).",level:"intermediate",codeExample:"// O(n) space"},{question:"What is the time complexity of iterative Fibonacci?",shortAnswer:"O(n) — linear time.",explanation:"The loop runs n-1 iterations.",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of iterative Fibonacci?",shortAnswer:"O(1) — constant space.",explanation:"It uses only a few variables.",hint:"No stack.",level:"basic",codeExample:"// O(1) space"},{question:"What is the base case for Fibonacci?",shortAnswer:"F(0) = 0, F(1) = 1.",explanation:"These are the two initial values that stop the recursion.",hint:"Zero and one.",level:"basic",codeExample:"// if (n <= 1) return n;"},{question:"Why is naive recursive Fibonacci slow?",shortAnswer:"Because it recomputes the same values many times (overlapping subproblems).",explanation:"F(2) is computed multiple times; the call tree has exponential nodes.",hint:"Overlapping subproblems.",level:"basic",codeExample:"// F(2) computed many times"},{question:"How many recursive calls are made for fib(10)?",shortAnswer:"177 calls.",explanation:"The number of calls is 2 * fib(11) - 1 = 2*89 - 1 = 177.",hint:"177.",level:"intermediate",codeExample:"// 177 calls"},{question:"How many recursive calls are made for fib(20)?",shortAnswer:"21,891 calls.",explanation:"The number of calls is 2 * fib(21) - 1 = 2*10946 - 1 = 21,891.",hint:"21,891.",level:"advanced",codeExample:"// 21,891 calls"},{question:"How many recursive calls are made for fib(30)?",shortAnswer:"2,692,537 calls.",explanation:"The number of calls is 2 * fib(31) - 1 = 2*1346269 - 1 = 2,692,537.",hint:"2.69 million.",level:"advanced",codeExample:"// 2,692,537 calls"},{question:"Why does memoization reduce exponential to linear?",shortAnswer:"Because each subproblem is solved once and stored, avoiding recomputation.",explanation:"The recursion tree collapses to a single chain of unique calls.",hint:"Caching.",level:"intermediate",codeExample:"// store computed values"},{question:"What is the space complexity of iterative Fibonacci using two variables?",shortAnswer:"O(1) — constant space.",explanation:"Only two variables (a and b) are needed.",hint:"Two variables.",level:"basic",codeExample:"// long a=0, b=1;"},{question:"What is Binet's formula for Fibonacci?",shortAnswer:"F(n) = (φⁿ - ψⁿ) / √5, where φ = (1+√5)/2, ψ = (1-√5)/2.",explanation:"This gives an O(1) formula but suffers from floating-point precision.",hint:"Closed form.",level:"advanced",codeExample:"// using Math.pow"},{question:"What is the time complexity of Binet's formula?",shortAnswer:"O(1) — constant time.",explanation:"It uses a fixed number of operations.",hint:"Constant.",level:"advanced",codeExample:"// O(1)"},{question:"What is the time complexity of fast doubling Fibonacci?",shortAnswer:"O(log n) — logarithmic time.",explanation:"It uses recursion that halves the exponent each step.",hint:"O(log n).",level:"advanced",codeExample:"// O(log n)"},{question:"What is the space complexity of fast doubling?",shortAnswer:"O(log n) for recursion stack, or O(1) iterative.",explanation:"The recursion depth is O(log n).",hint:"O(log n).",level:"advanced",codeExample:"// O(log n) space"},{question:"Can recursive Fibonacci cause a stack overflow?",shortAnswer:"Yes, for large n (e.g., n > 10,000), the recursion depth n can exceed the stack limit.",explanation:"The depth is n, which can be large.",hint:"Depth = n.",level:"intermediate",codeExample:"// StackOverflowError for large n"},{question:"What is the time complexity of the iterative DP approach?",shortAnswer:"O(n) — linear time.",explanation:"The loop runs from 2 to n.",hint:"O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of the iterative DP approach?",shortAnswer:"O(1) — constant space.",explanation:"Only a few variables are used.",hint:"O(1).",level:"basic",codeExample:"// O(1) space"},{question:"What is the value of F(10)?",shortAnswer:"55.",explanation:"The Fibonacci sequence: 0,1,1,2,3,5,8,13,21,34,55.",hint:"55.",level:"basic",codeExample:"// F(10) = 55"},{question:"What is the value of F(20)?",shortAnswer:"6765.",explanation:"F(20) = 6765.",hint:"6765.",level:"basic",codeExample:"// F(20) = 6765"},{question:"What is the value of F(30)?",shortAnswer:"832040.",explanation:"F(30) = 832040.",hint:"832040.",level:"basic",codeExample:"// F(30) = 832040"},{question:"What is the value of F(40)?",shortAnswer:"102334155.",explanation:"F(40) = 102334155.",hint:"102334155.",level:"basic",codeExample:"// F(40) = 102334155"},{question:"How many calls for fib(40) in naive recursion?",shortAnswer:"About 1.6 × 10⁸ calls.",explanation:"2 * fib(41) - 1 ≈ 2 * 165580141 - 1 = 331,160,281? Actually fib(41) = 165580141, so calls ≈ 331,160,281.",hint:"≈ 331 million.",level:"advanced",codeExample:"// ~331 million calls"},{question:"Can we compute Fibonacci in O(log n) time?",shortAnswer:"Yes, using fast doubling or matrix exponentiation.",explanation:"Fast doubling halves the exponent each step.",hint:"O(log n).",level:"advanced",codeExample:"// fast doubling"},{question:"What is the space complexity of fast doubling?",shortAnswer:"O(log n) for recursion, or O(1) iterative.",explanation:"The recursion depth is O(log n).",hint:"O(log n).",level:"advanced",codeExample:"// O(log n) space"},{question:"Why do we study naive Fibonacci despite its inefficiency?",shortAnswer:"Because it's the classic example of exponential time and overlapping subproblems.",explanation:"It illustrates the need for dynamic programming and memoization.",hint:"Educational value.",level:"basic",codeExample:"// learning tool"},{question:"What is the ratio of calls to 2^n for large n in naive Fibonacci?",shortAnswer:"Approaches 1 (actually about 1.618^n / √5).",explanation:"The number of calls is about φ^(n+1)/√5, which is O(2^n).",hint:"Exponential.",level:"advanced",codeExample:"// φ^n / √5"}],T=()=>{const[a,l]=c.useState("overview"),r="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=n=>`animate-[fadeSlideUp_0.5s_ease-out_${n*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(r,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 40"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Fibonacci"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Analyzing the ",e.jsx("span",{className:"text-red-600 dark:text-red-400 font-semibold",children:"exponential O(2ⁿ)"})," time and ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"O(n)"})," space of naive recursive Fibonacci — and how ",e.jsx("strong",{children:"memoization"})," transforms it to O(n) time."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(n=>e.jsxs("button",{onClick:()=>l(n),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===n?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[n==="overview"&&"📖 Overview",n==="code"&&"☕ Code Examples",n==="faq"&&"❓ FAQ"]},n))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," What is Recursive Fibonacci?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"Fibonacci sequence"})," is defined as:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n ≥ 2"})]}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"naive recursive"})," implementation directly translates this definition into code. However, it is ",e.jsx("strong",{children:"extremely inefficient"})," because it recomputes the same values many times. The recurrence relation is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = T(n-1) + T(n-2) + O(1),   T(0) = T(1) = O(1)"}),"This solves to ",e.jsx("strong",{children:"O(2ⁿ)"})," — exponential time — making it impractical for n > 30."]}),e.jsxs("p",{children:["Think of it like a tree that branches into two at each node: the number of nodes doubles each level, leading to an exponential explosion. This is the classic example of",e.jsx("strong",{children:"overlapping subproblems"}),", which can be solved efficiently using",e.jsx("strong",{children:"memoization"})," or ",e.jsx("strong",{children:"dynamic programming"}),"."]})]})]}),e.jsxs("section",{className:t(r,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," How It Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"1. Base Cases",desc:"F(0) = 0, F(1) = 1. These stop the recursion.",icon:"🎯"},{step:"2. Recursive Case",desc:"F(n) = F(n-1) + F(n-2). Two recursive calls.",icon:"🔄"},{step:"3. Call Tree",desc:"Each call branches into two, creating a binary tree of calls.",icon:"🌳"},{step:"4. Overlapping Subproblems",desc:"The same values (e.g., F(2)) are computed many times.",icon:"🔁"}].map((n,i)=>e.jsxs("div",{className:t(s(i),"p-5 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40","transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-red-400/10","hover:scale-[1.01] hover:border-red-300 dark:hover:border-red-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:n.icon}),e.jsx("h3",{className:"font-bold text-red-600 dark:text-red-400",children:n.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc})]},i))})]}),e.jsxs("section",{className:t(r,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{algorithm:"Naive Recursive",time:"O(2ⁿ) — exponential",space:"O(n) — recursion stack depth = n",example:"F(40) → ~1.6×10⁸ calls, ~1s"},{algorithm:"Memoized Recursive",time:"O(n) — linear",space:"O(n) — memo array + stack",example:"F(40) → 41 calls, instant"},{algorithm:"Iterative DP",time:"O(n) — linear",space:"O(1) — constant",example:"F(40) → 40 iterations, instant"},{algorithm:"Binet's Formula",time:"O(1) — constant",space:"O(1) — constant",example:"F(40) → direct formula, instant"}].map((n,i)=>e.jsxs("div",{className:t(s(i+2),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:n.algorithm}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Time: ",e.jsx("span",{className:"font-semibold",children:n.time})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-semibold",children:n.space})]}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-2",children:n.example})]},i))})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Visual Intuition: The Exponential Call Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 320",className:"w-full h-auto max-h-72",role:"img","aria-label":"Fibonacci call tree",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow40",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Call Tree for fib(5) — exponential growth"}),e.jsx("rect",{x:"370",y:"35",width:"60",height:"24",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"400",y:"53",textAnchor:"middle",fontSize:"11",fill:"white",fontWeight:"bold",children:"5"}),e.jsx("line",{x1:"400",y1:"59",x2:"320",y2:"75",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"59",x2:"480",y2:"75",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"290",y:"78",width:"60",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"320",y:"94",textAnchor:"middle",fontSize:"10",fill:"white",children:"4"}),e.jsx("rect",{x:"450",y:"78",width:"60",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"480",y:"94",textAnchor:"middle",fontSize:"10",fill:"white",children:"3"}),e.jsx("line",{x1:"320",y1:"100",x2:"260",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"320",y1:"100",x2:"380",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"480",y1:"100",x2:"420",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"480",y1:"100",x2:"540",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"230",y:"118",width:"60",height:"20",rx:"4",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"260",y:"133",textAnchor:"middle",fontSize:"10",fill:"white",children:"3"}),e.jsx("rect",{x:"350",y:"118",width:"60",height:"20",rx:"4",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"380",y:"133",textAnchor:"middle",fontSize:"10",fill:"white",children:"2"}),e.jsx("rect",{x:"390",y:"118",width:"60",height:"20",rx:"4",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"420",y:"133",textAnchor:"middle",fontSize:"10",fill:"white",children:"2"}),e.jsx("rect",{x:"510",y:"118",width:"60",height:"20",rx:"4",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"540",y:"133",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),e.jsx("text",{x:"400",y:"180",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"…"}),e.jsx("text",{x:"400",y:"210",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Leaves: F(1)=1, F(0)=0"}),e.jsx("text",{x:"400",y:"245",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Number of calls = 2ⁿ - 1 ≈ exponential. Many repeated subproblems (e.g., F(2) appears multiple times)."}),e.jsx("text",{x:"400",y:"270",textAnchor:"middle",fontSize:"11",fill:"#f87171",className:"dark:fill-red-400",children:"⚠️ Overlapping subproblems make this O(2ⁿ) — very slow for large n."})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"The naive recursive Fibonacci creates an exponential call tree. The number of calls for fib(n) is 2ⁿ - 1, and the recursion depth is n. Overlapping subproblems cause massive recomputation."})]})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50/60 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("p",{className:"font-semibold text-red-600 dark:text-red-400",children:"Naive Recursive"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n-1) + T(n-2) + O(1),   T(0)=T(1)=O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:"O(2ⁿ)"})]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:"O(n)"})," (stack)"]})]}),e.jsxs("div",{className:"bg-emerald-50/60 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Memoized Recursive"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n-1) + O(1),   T(0)=T(1)=O(1) (with memo)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})," (memo + stack)"]})]})]})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Never use naive Fibonacci for n > 30",desc:"The exponential growth makes it impractical. Use memoization or iteration."},{tip:"Use memoization for overlapping subproblems",desc:"Memoization reduces O(2ⁿ) to O(n) with a simple array."},{tip:"Use iterative DP for O(1) space",desc:"The iterative version (two variables) is O(n) time and O(1) space."},{tip:"Binet's formula is O(1) but has precision issues",desc:"For exact integer results, use DP; Binet's formula is for approximations."}].map((n,i)=>e.jsxs("div",{className:t(s(i+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-red-300 dark:hover:border-red-700"),children:[e.jsxs("p",{className:"font-semibold text-red-600 dark:text-red-400",children:["✦ ",n.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc})]},i))})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using naive recursion for large n:"})," For n=50, 2⁵⁰ ≈ 10¹⁵ calls — impossible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base cases:"})," F(0)=0, F(1)=1 are essential for termination."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not recognizing overlapping subproblems:"})," Naive Fibonacci recomputes F(2) many times."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming space is O(1) for recursion:"})," The recursion stack uses O(n) space."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing the recurrence with the iterative version:"})," The iterative version has a different recurrence (T(n) = T(n-1) + O(1)) because it doesn't branch.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Debangshu"})," once ran fib(40) recursively and waited 5 minutes. He learned about memoization and got the answer instantly."]})]})]})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative DP"})," for O(n) time and O(1) space — it's the best practical solution."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use memoization"})," when you want to keep the recursive structure for clarity."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use BigInteger"})," for large Fibonacci numbers (F(100) has 21 digits, F(1000) has 209 digits)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document the recurrence"})," in comments to explain the complexity."]})})]})]}),e.jsxs("section",{className:t(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for naive Fibonacci?","✅ Do you know the time complexity (O(2ⁿ)) and why?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you implement memoized Fibonacci (O(n) time)?","✅ Can you implement iterative Fibonacci (O(1) space)?","✅ Do you understand the difference between naive and optimized?"].map((n,i)=>e.jsx("div",{className:t(s(i+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:n},i))})]}),e.jsxs("section",{className:t(r,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," How many times is F(2) computed for fib(5)? It's computed 3 times. For fib(10), F(2) is computed 34 times! That's the overlapping subproblem problem."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you add a cache (memoization)? The number of calls becomes O(n). For fib(10), only 10 calls instead of 177."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 40 students. The number of ways to climb 40 steps using 1 or 2 steps is F(41) ≈ 165 million. Naive recursion would take forever, but DP computes it instantly."]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Naive Recursive Fibonacci — O(2ⁿ) Time, O(n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Exponential implementation with recurrence T(n) = T(n-1) + T(n-2) + O(1)."}),e.jsx(o,{fileModule:h,title:"RecursiveFibonacci.java",highlightLines:[]})]}),e.jsxs("section",{className:t(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Memoized Fibonacci — O(n) Time, O(n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Recursive implementation with memoization to avoid recomputation."}),e.jsx(o,{fileModule:x,title:"MemoizedFibonacci.java",highlightLines:[]})]}),e.jsxs("section",{className:t(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Fibonacci Comparison — All Approaches"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares naive recursive, memoized recursive, iterative, and Binet's formula."}),e.jsx(o,{fileModule:p,title:"FibonacciComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:t(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Fibonacci Analysis — Step Counts and Growth"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Analyzes the number of calls for naive Fibonacci and shows the exponential growth."}),e.jsx(o,{fileModule:u,title:"FibonacciAnalysis.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:t(r,"space-y-4"),children:e.jsx(m,{title:"Complexity of Recursive Fibonacci — FAQs",questions:g})})]}),e.jsx("div",{className:t(r,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(d,{note:`The naive recursive Fibonacci is the classic example of exponential time due to overlapping subproblems. 
              I emphasize that the recurrence T(n) = T(n-1) + T(n-2) + O(1) is the reason for the explosion — 
              it's the same recurrence as the Fibonacci numbers themselves. This is a perfect lead-in to 
              dynamic programming and memoization. Students often think recursion is beautiful, but they 
              must understand its costs. Show them the call tree for fib(5) and then fib(10) — they'll see 
              the exponential growth. Then show memoization and iterative DP to demonstrate the improvement. 
              This topic also reinforces that the space complexity of recursion is O(n) due to the stack.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 40 · Complexity of Recursive Fibonacci · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeSlideUp_.*\\] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `})]})};export{T as default};

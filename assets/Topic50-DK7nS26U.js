import{r as x,j as e}from"./index-NACEEa8w.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as m}from"./TeacherSukantaHui-Co0nmDkI.js";import{F as p}from"./FAQTemplate-Bm57jzsr.js";import{J as l}from"./JavaFileLoader-Bpvh3LEd.js";import"./github-W-9UECod.js";import"./createLucideIcon-DogKn5wF.js";import"./git-branch-BkCyvWIP.js";import"./JavaCodeBlock-BenGqs1_.js";import"./prism-aQ4BM5eP.js";import"./browser-CZeQo2s3.js";import"./prism-java-BwO6k4I_.js";const u=`/**\r
 * Multiple Recursion: Exponential (a=3)\r
 * Recurrence: T(n) = 3T(n-1) + O(1), T(0) = O(1)\r
 * Time Complexity: O(3ⁿ)\r
 * Space Complexity: O(n) — recursion stack depth = n\r
 * \r
 * This demonstrates multiple recursion with branching factor 3.\r
 * Each call makes 3 recursive calls on n-1.\r
 */\r
public class MultipleRecursion {\r
    private static long callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 6;\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        long result = f(n);\r
\r
        System.out.println("Multiple Recursion (a=3, exponential)");\r
        System.out.println("f(" + n + ") = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected calls for n=" + n + ": 3^" + n + " = " + (int)Math.pow(3, n));\r
        System.out.println("Time: O(3ⁿ), Space: O(n)");\r
\r
        // Show the growth\r
        System.out.println("\\nCall counts for different n:");\r
        for (int i = 1; i <= 8; i++) {\r
            callCount = 0;\r
            maxDepth = 0;\r
            f(i);\r
            System.out.println("f(" + i + ") → " + callCount + " calls (3^" + i + " = " + (int)Math.pow(3, i) + ")");\r
        }\r
        System.out.println("For n=20, 3^20 ≈ 3.4×10⁹ calls — impossible!");\r
        System.out.println("This is why multiple recursion is exponential.");\r
        System.out.println("Pruning can reduce the number of calls in practice.");\r
    }\r
\r
    // Multiple recursion: 3 calls on n-1\r
    public static long f(int n) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base case\r
        if (n <= 1) {\r
            depth--;\r
            return n;\r
        }\r
\r
        // 3 recursive calls\r
        long result = f(n - 1) + f(n - 2) + f(n - 3);\r
        depth--;\r
        return result;\r
    }\r
\r
    private static int depth = 0;\r
}`,g=`/**\r
 * Multiple Recursion: Linear (a=3, reduction by 3)\r
 * Recurrence: T(n) = 3T(n/3) + O(1), T(1) = O(1)\r
 * Time Complexity: O(n) — linear\r
 * Space Complexity: O(log n) — recursion stack depth = log₃(n)\r
 * \r
 * This demonstrates multiple recursion where subproblems are independent\r
 * and reduced by the branching factor.\r
 */\r
public class TreeNFib {\r
    static class Node {\r
        int data;\r
        Node[] children;\r
        Node(int data, int numChildren) {\r
            this.data = data;\r
            children = new Node[numChildren];\r
        }\r
    }\r
\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
    private static int visitCount = 0;\r
\r
    public static void main(String[] args) {\r
        // Build a 3-ary tree\r
        int depth = 3;\r
        Node root = buildTree(depth);\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        visitCount = 0;\r
        traverse(root);\r
\r
        System.out.println("Multiple Recursion (a=3, reduction by 3)");\r
        System.out.println("Tree depth: " + depth);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Number of nodes visited: " + visitCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected nodes: (3^(" + depth + "+1) - 1) / 2 = " + ((int)Math.pow(3, depth+1) - 1) / 2);\r
        System.out.println("Time: O(n), Space: O(log n)");\r
\r
        // Show growth\r
        System.out.println("\\nNodes for different tree depths:");\r
        for (int d = 1; d <= 5; d++) {\r
            Node tree = buildTree(d);\r
            callCount = 0;\r
            maxDepth = 0;\r
            visitCount = 0;\r
            traverse(tree);\r
            System.out.println("Depth " + d + " → " + visitCount + " nodes (3^" + (d+1) + " ≈ " + (int)Math.pow(3, d+1) + ")");\r
        }\r
        System.out.println("This is O(n) because each node is visited once.");\r
        System.out.println("Unlike exponential multiple recursion, this is linear.");\r
    }\r
\r
    public static Node buildTree(int depth) {\r
        if (depth == 0) return null;\r
        Node root = new Node(1, 3);\r
        for (int i = 0; i < 3; i++) {\r
            root.children[i] = buildTree(depth - 1);\r
        }\r
        return root;\r
    }\r
\r
    public static void traverse(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        visitCount++;\r
\r
        // 3 recursive calls\r
        for (Node child : node.children) {\r
            traverse(child);\r
        }\r
        depth--;\r
    }\r
\r
    private static int depth = 0;\r
}`,y=`/**\r
 * Analyzes multiple recursion: Exponential vs Linear.\r
 * Compares the number of calls and growth rates.\r
 */\r
public class MultipleRecursionAnalysis {\r
    public static void main(String[] args) {\r
        System.out.println("=== Multiple Recursion Analysis ===\\n");\r
\r
        System.out.println("Exponential (a=3, reduction by 1): T(n) = 3T(n-1) + O(1)");\r
        System.out.println("Linear (a=3, reduction by 3): T(n) = 3T(n/3) + O(1)");\r
        System.out.println();\r
\r
        System.out.println("n\\tExponential (3^n)\\tLinear (3^log₃ n = n)");\r
        System.out.println("----------------------------------------------");\r
\r
        for (int n = 1; n <= 10; n++) {\r
            long exp = (long)Math.pow(3, n);\r
            long lin = n;\r
            System.out.printf("%d\\t%d\\t\\t\\t%d\\n", n, exp, lin);\r
        }\r
\r
        System.out.println("\\nFor n=20:");\r
        System.out.println("Exponential: 3^20 ≈ 3.4×10⁹ calls");\r
        System.out.println("Linear: 20 nodes");\r
\r
        System.out.println("\\nThe difference is astronomical!");\r
        System.out.println("Multiple recursion is only practical when:");\r
        System.out.println("  1. The branching factor is small (a is small)");\r
        System.out.println("  2. The reduction is by a (not by 1)");\r
        System.out.println("  3. Pruning can significantly reduce the search space");\r
\r
        // Simulate practical example: n-queens pruning\r
        System.out.println("\\n=== N-Queens Pruning Example ===");\r
        System.out.println("Without pruning: n^n possibilities");\r
        System.out.println("With pruning: n! possibilities (still factorial, but much smaller)");\r
        for (int n = 4; n <= 10; n++) {\r
            long withoutPruning = (long)Math.pow(n, n);\r
            long withPruning = factorial(n);\r
            System.out.printf("n=%d: n^n=%d, n!=%d\\n", n, withoutPruning, withPruning);\r
        }\r
        System.out.println("Pruning reduces the search space significantly!");\r
    }\r
\r
    public static long factorial(int n) {\r
        long result = 1;\r
        for (int i = 2; i <= n; i++) result *= i;\r
        return result;\r
    }\r
}`,b=[{question:"What is multiple recursion?",shortAnswer:"A recursive function that makes three or more recursive calls per invocation.",explanation:"The calls form a k-ary tree with branching factor a ≥ 3.",hint:"Three or more calls.",level:"basic",codeExample:"// f(n) = f(n-1) + f(n-2) + f(n-3)"},{question:"What is the recurrence for exponential multiple recursion?",shortAnswer:"T(n) = a·T(n-1) + O(1), T(0) = O(1), where a ≥ 3.",explanation:"Each call makes a calls on n-1, leading to O(aⁿ) time.",hint:"T(n) = a·T(n-1) + O(1).",level:"intermediate",codeExample:"// T(n) = a·T(n-1) + 1"},{question:"What is the time complexity of exponential multiple recursion?",shortAnswer:"O(aⁿ) — exponential time.",explanation:"The number of calls is aⁿ.",hint:"Exponential.",level:"intermediate",codeExample:"// O(aⁿ)"},{question:"What is the recurrence for linear multiple recursion?",shortAnswer:"T(n) = a·T(n/a) + O(1), T(1) = O(1), where a ≥ 3.",explanation:"Each call makes a calls on n/a, leading to O(n) time.",hint:"T(n) = a·T(n/a) + O(1).",level:"intermediate",codeExample:"// T(n) = a·T(n/a) + 1"},{question:"What is the time complexity of linear multiple recursion?",shortAnswer:"O(n) — linear time.",explanation:"The recurrence T(n) = a·T(n/a) + O(1) solves to O(n).",hint:"Linear.",level:"intermediate",codeExample:"// O(n)"},{question:"What is the space complexity of multiple recursion?",shortAnswer:"O(n) — due to the recursion stack.",explanation:"The recursion depth is n in the worst case.",hint:"Depth = n.",level:"basic",codeExample:"// O(n) space"},{question:"What is an example of exponential multiple recursion?",shortAnswer:"A function that makes 3 calls on n-1, like f(n) = f(n-1)+f(n-2)+f(n-3).",explanation:"Each level increases the number of calls by a factor of 3.",hint:"3 calls on n-1.",level:"intermediate",codeExample:"// f(n) = f(n-1) + f(n-2) + f(n-3)"},{question:"What is an example of linear multiple recursion?",shortAnswer:"Traversing a 3-ary tree (each node has 3 children).",explanation:"Each call makes 3 calls on n/3, giving O(n) time.",hint:"3-ary tree.",level:"intermediate",codeExample:"// traverse 3-ary tree"},{question:"What is the branching factor in multiple recursion?",shortAnswer:"The number of recursive calls per invocation (a ≥ 3).",explanation:"This determines the growth rate: aⁿ.",hint:"Number of calls.",level:"basic",codeExample:"// a = 3 for 3-way recursion"},{question:"How can pruning help multiple recursion?",shortAnswer:"By eliminating invalid branches early, reducing the effective branching factor.",explanation:"In backtracking, pruning can significantly reduce the number of recursive calls.",hint:"Eliminate invalid branches.",level:"intermediate",codeExample:"// if (invalid) return;"},{question:"What is the time complexity of the n-queens problem without pruning?",shortAnswer:"O(nⁿ) — but with pruning it's O(n!) (still exponential).",explanation:"Without pruning, each row has n choices → nⁿ. With pruning, it's n!.",hint:"O(nⁿ) vs O(n!).",level:"advanced",codeExample:"// O(n!) with pruning"},{question:"What is the time complexity of graph coloring with m colors?",shortAnswer:"O(mⁿ) — exponential in the number of vertices.",explanation:"Each vertex has m choices, so mⁿ possibilities.",hint:"O(mⁿ).",level:"advanced",codeExample:"// O(mⁿ)"},{question:"How does memoization help multiple recursion?",shortAnswer:"If subproblems overlap, memoization can reduce exponential time to polynomial.",explanation:"Example: if f(n) = f(n-1) + f(n-2) + f(n-3), memoization gives O(n).",hint:"Overlapping subproblems.",level:"intermediate",codeExample:"// memo[n] = f(n)"},{question:"What is the time complexity of memoized 3-way recursion?",shortAnswer:"O(n) — linear time.",explanation:"Each value is computed once.",hint:"O(n).",level:"intermediate",codeExample:"// O(n)"},{question:"What is the space complexity of memoized 3-way recursion?",shortAnswer:"O(n) — for the memo array and recursion stack.",explanation:"The memo array is O(n), and recursion stack is O(n).",hint:"O(n).",level:"intermediate",codeExample:"// O(n) space"},{question:"What is the recurrence for multiple recursion with reduction by a constant?",shortAnswer:"T(n) = a·T(n/c) + O(1), T(1) = O(1) → O(n^(log_c a)).",explanation:"This is the Master Theorem case for multiple recursion.",hint:"Master Theorem.",level:"advanced",codeExample:"// T(n) = a·T(n/c) + O(1)"},{question:"What is the time complexity of T(n) = 3T(n/2) + O(1)?",shortAnswer:"O(n^(log₂3)) ≈ O(n^1.585).",explanation:"Master Theorem Case 1: a=3, b=2, log_b a = log₂3 ≈ 1.585.",hint:"O(n^1.585).",level:"advanced",codeExample:"// O(n^1.585)"},{question:"What is the space complexity of T(n) = a·T(n/c) + O(1)?",shortAnswer:"O(log n) — recursion stack depth = log_c(n).",explanation:"The depth is logarithmic.",hint:"O(log n).",level:"advanced",codeExample:"// O(log n)"},{question:"What is the difference between multiple recursion and binary recursion?",shortAnswer:"Multiple has a ≥ 3 calls; binary has exactly 2 calls.",explanation:"Multiple recursion has a higher branching factor.",hint:"≥3 vs exactly 2.",level:"basic",codeExample:"// multiple: 3+ calls, binary: 2 calls"},{question:"What is the difference between multiple recursion and linear recursion?",shortAnswer:"Multiple has a ≥ 3 calls; linear has exactly 1 call.",explanation:"Multiple recursion has a higher branching factor.",hint:"≥3 vs exactly 1.",level:"basic",codeExample:"// multiple: 3+ calls, linear: 1 call"},{question:"How many recursive calls are made for f(n) = 3f(n-1) + 1?",shortAnswer:"3ⁿ calls (approximately).",explanation:"The number of calls is exponential in n.",hint:"3ⁿ.",level:"advanced",codeExample:"// 3^n calls"},{question:"What is the number of calls for f(5) in 3-way recursion?",shortAnswer:"3^5 = 243 calls (approximately).",explanation:"The exact number is 3^(n+1)/2 - 1? Actually it's exactly (3^(n+1)-1)/2 for base case? For f(n)=3f(n-1)+1 with f(0)=1, the number of calls is (3^(n+1)-1)/2. For n=5, (3^6-1)/2 = (729-1)/2 = 364.",hint:"364.",level:"advanced",codeExample:"// 364 calls for n=5"},{question:"What is the time complexity of a 3-ary tree traversal?",shortAnswer:"O(n) — linear time.",explanation:"Each node is visited once.",hint:"O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of a 3-ary tree traversal?",shortAnswer:"O(log n) for a balanced tree, O(n) for a skewed tree.",explanation:"The recursion depth is the height of the tree.",hint:"O(log n) balanced.",level:"intermediate",codeExample:"// O(log n) balanced"},{question:"Can multiple recursion be optimized with dynamic programming?",shortAnswer:"Yes, if it has overlapping subproblems and optimal substructure.",explanation:"Many multiple recursion problems can be solved with DP.",hint:"DP.",level:"advanced",codeExample:"// DP for multiple recursion"},{question:"What is the time complexity of the Fibonacci-like 3-way recurrence?",shortAnswer:"O(3ⁿ) for naive, O(n) with memoization.",explanation:"The recurrence f(n) = f(n-1) + f(n-2) + f(n-3) is exponential.",hint:"O(3ⁿ).",level:"intermediate",codeExample:"// O(3ⁿ) naive"},{question:"What is the time complexity of the 3-way merge sort?",shortAnswer:"O(n log n) — still linearithmic.",explanation:"T(n) = 3T(n/3) + O(n) → O(n log n).",hint:"O(n log n).",level:"advanced",codeExample:"// O(n log n)"},{question:"What is the space complexity of 3-way merge sort?",shortAnswer:"O(n) — for the auxiliary array.",explanation:"Merge sort uses O(n) extra space.",hint:"O(n).",level:"advanced",codeExample:"// O(n) space"},{question:"What is the recurrence for 3-way merge sort?",shortAnswer:"T(n) = 3T(n/3) + O(n), T(1) = O(1).",explanation:"Three calls on one-third of the input, plus O(n) work to merge.",hint:"3T(n/3) + n.",level:"advanced",codeExample:"// T(n) = 3T(n/3) + n"},{question:"What is the time complexity of multiple recursion with a=4 and reduction by 2?",shortAnswer:"O(n²) — because log₂4 = 2.",explanation:"T(n) = 4T(n/2) + O(1) → O(n²).",hint:"O(n²).",level:"advanced",codeExample:"// O(n²)"},{question:"What is the time complexity of multiple recursion with a=8 and reduction by 2?",shortAnswer:"O(n³) — because log₂8 = 3.",explanation:"T(n) = 8T(n/2) + O(1) → O(n³).",hint:"O(n³).",level:"advanced",codeExample:"// O(n³)"},{question:"What is the space complexity of multiple recursion with a=4 and reduction by 2?",shortAnswer:"O(log n) — recursion stack depth = log₂(n).",explanation:"The depth is logarithmic.",hint:"O(log n).",level:"advanced",codeExample:"// O(log n) space"}],W=()=>{const[a,o]=x.useState("overview"),t="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:n(t,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 50"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursion Patterns"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Multiple Recursion"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Understanding ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"multiple recursion"})," — where a function makes ",e.jsx("strong",{children:"three or more"})," recursive calls per invocation, leading to",e.jsx("span",{className:"text-red-600 dark:text-red-400 font-semibold",children:" O(kⁿ)"})," time in the worst case."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>o(r),className:n("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is Multiple Recursion?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Multiple recursion"})," (also called ",e.jsx("strong",{children:"n-ary recursion"}),") occurs when a function makes ",e.jsx("strong",{children:"three or more"})," recursive calls per invocation. This pattern generalizes binary recursion to higher branching factors, creating a ",e.jsx("strong",{children:"k-ary tree"}),"of recursive calls."]}),e.jsxs("p",{children:["The recurrence for multiple recursion is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = a·T(n/b) + O(1)   or   T(n) = a·T(n-1) + O(1)"}),"where ",e.jsx("strong",{children:"a"})," is the number of recursive calls (a ≥ 3). This gives",e.jsx("span",{className:"text-red-600 dark:text-red-400 font-semibold",children:" O(aⁿ)"})," time in the worst case (if a > 1 and reduction is by a constant), or ",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"O(n)"}),"if the subproblems are independent and divided by a factor."]}),e.jsxs("p",{children:["Think of it like a tree where each node has ",e.jsx("strong",{children:"a"})," children. The total number of nodes is exponential in the depth. This pattern appears in algorithms that explore all possibilities (e.g., n-queens, m-coloring, combinatorial problems)."]})]})]}),e.jsxs("section",{className:n(t,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Key Characteristics"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:"🌲",title:"Three or More Calls",desc:"Each function call makes a ≥ 3 recursive calls."},{icon:"📊",title:"K-ary Tree Structure",desc:"The recursion forms a tree with branching factor a."},{icon:"⏱️",title:"O(aⁿ) or O(n) Time",desc:"Time depends on whether subproblems overlap and the reduction factor."},{icon:"💾",title:"O(n) Space",desc:"The recursion stack depth is n, so space is O(n) in the worst case."}].map((r,i)=>e.jsxs("div",{className:n(s(i),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:r.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Examples"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"Algorithm"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Recurrence"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Time"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Space"})]})}),e.jsx("tbody",{children:[["m-coloring (backtracking)","T(n) = m·T(n-1) + O(1)","O(mⁿ)","O(n)"],["n-queens (backtracking)","T(n) = n·T(n-1) + O(1)","O(n!)","O(n)"],["Tree with 3 children","T(n) = 3T(n/3) + O(1)","O(n)","O(log n)"],["3-way merge sort","T(n) = 3T(n/3) + O(n)","O(n log n)","O(n)"],["Multiple recursive calls with reduction by constant","T(n) = a·T(n/c) + O(1)","O(n^(log_c a))","O(log n)"]].map(([r,i,c,d],h)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-100",children:r}),e.jsx("td",{className:"px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400",children:i}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:c}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:d})]},h))})]})})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: K-ary Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto max-h-64",role:"img","aria-label":"Multiple recursion tree",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow50",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Multiple Recursion: Tree with Branching Factor a (here a=3)"}),e.jsx("circle",{cx:"400",cy:"50",r:"20",fill:"#818cf8",opacity:"0.9"}),e.jsx("text",{x:"400",y:"56",textAnchor:"middle",fontSize:"11",fill:"white",fontWeight:"bold",children:"n"}),e.jsx("line",{x1:"400",y1:"70",x2:"250",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow50)"}),e.jsx("line",{x1:"400",y1:"70",x2:"400",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow50)"}),e.jsx("line",{x1:"400",y1:"70",x2:"550",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow50)"}),e.jsx("circle",{cx:"250",cy:"105",r:"18",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"250",y:"111",textAnchor:"middle",fontSize:"10",fill:"white",children:"n-1"}),e.jsx("circle",{cx:"400",cy:"105",r:"18",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"400",y:"111",textAnchor:"middle",fontSize:"10",fill:"white",children:"n-1"}),e.jsx("circle",{cx:"550",cy:"105",r:"18",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"550",y:"111",textAnchor:"middle",fontSize:"10",fill:"white",children:"n-1"}),e.jsx("line",{x1:"250",y1:"123",x2:"190",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"250",y1:"123",x2:"250",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"250",y1:"123",x2:"310",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"123",x2:"340",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"123",x2:"400",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"123",x2:"460",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"123",x2:"490",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"123",x2:"550",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"123",x2:"610",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"190",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"190",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"250",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"250",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"310",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"310",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"340",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"340",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"400",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"400",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"460",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"460",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"490",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"490",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"550",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"550",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"610",cy:"155",r:"13",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"610",y:"160",textAnchor:"middle",fontSize:"8",fill:"white",children:"n-2"}),e.jsx("text",{x:"400",y:"210",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"… (exponential growth)"}),e.jsx("text",{x:"400",y:"240",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Number of calls = aⁿ (exponential). Depth = n → O(n) space."})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Multiple recursion with branching factor a creates a tree with aⁿ nodes. The depth is n, so space is O(n), but time is exponential."})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50/60 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("p",{className:"font-semibold text-red-600 dark:text-red-400",children:"Exponential (a > 1, reduction by 1)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = a·T(n-1) + O(1),   T(0)=O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:"O(aⁿ)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:"Example: m-coloring (a = m)"})]}),e.jsxs("div",{className:"bg-emerald-50/60 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Linear (a > 1, reduction by a)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = a·T(n/a) + O(1),   T(1)=O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:"Example: Tree with a children (branching factor a)"})]})]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Both use ",e.jsx("span",{className:"font-mono",children:"O(n)"})," space for the recursion stack in the worst case."]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"N-Queens Problem:"})," ","Placing n queens on an n×n board. Each row has n choices, leading to nⁿ possibilities (with pruning, n!)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Graph Coloring:"})," ","Coloring a graph with m colors. Each vertex has m choices, leading to mⁿ possibilities."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Swadeep"})," is exploring all possible paths in a maze where each intersection has 3 choices (left, straight, right). That's 3ⁿ paths — multiple recursion!"]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"AI Decision Trees:"})," ","In game AI, each state may have many possible moves (branching factor > 2). Exploring all moves is multiple recursion."]})})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use pruning (backtracking) to reduce branches",desc:"In many problems (like n-queens), you can prune invalid branches early."},{tip:"Use memoization when subproblems overlap",desc:"If subproblems repeat, memoization can reduce exponential time."},{tip:"Consider dynamic programming",desc:"Many multiple recursion problems can be solved with DP to reduce time complexity."},{tip:"Space is O(n) even for exponential time",desc:"The recursion stack depth is linear, not exponential."}].map((r,i)=>e.jsxs("div",{className:n(s(i+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming multiple recursion is always exponential:"})," If the input is divided by the branching factor, the complexity can be linear (e.g., tree with a children)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Underestimating the number of calls:"})," For a=3 and n=10, there are 3¹⁰ = 59,049 calls. For n=20, 3.4 billion calls — impossible!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to prune:"})," Without pruning, multiple recursion explores many impossible branches. Pruning is essential for backtracking algorithms."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the base case:"})," Multiple recursion still requires a base case to terminate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming space is also exponential:"})," Space is O(n) because the stack depth is n, not the total number of calls.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Tuhina"})," once thought the space complexity of n-queens was O(nⁿ) because of the number of calls. She learned that only the stack depth matters."]})]})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use pruning"})," to eliminate invalid branches early in backtracking."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use memoization"})," when subproblems overlap to reduce exponential time."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use dynamic programming"})," for problems with optimal substructure."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Consider the branching factor"})," — if a is large, the algorithm becomes infeasible quickly."]})})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you identify multiple recursion (a ≥ 3 calls)?","✅ Do you know the two types (exponential vs linear)?","✅ Do you know the time complexity for each type?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you implement pruning to reduce branches?","✅ Can you use memoization for overlapping subproblems?"].map((r,i)=>e.jsx("div",{className:n(s(i+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},i))})]}),e.jsxs("section",{className:n(t,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For multiple recursion with a=3 and n=10, how many calls? 3¹⁰ ≈ 59,049. For n=20, 3.4 billion. That's exponential growth!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you add pruning to a backtracking algorithm? The number of calls can be drastically reduced in practice."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a maze with 10 intersections, each with 3 paths. Exploring all paths without pruning would be 3¹⁰ = 59,049 paths — manageable. With 20 intersections, it's 3.4 billion — impossible without pruning."]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Multiple Recursion — Exponential (a=3)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Multiple recursion with branching factor 3 — O(3ⁿ) time, O(n) space."}),e.jsx(l,{fileModule:u,title:"MultipleRecursion.java",highlightLines:[]})]}),e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Multiple Recursion — Linear (3 children, reduction by 3)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Multiple recursion where each call makes 3 calls on n/3 — O(n) time, O(log n) space."}),e.jsx(l,{fileModule:g,title:"TreeNFib.java",highlightLines:[]})]}),e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Multiple Recursion Analysis — Exponential vs Linear"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares the number of calls for exponential and linear multiple recursion."}),e.jsx(l,{fileModule:y,title:"MultipleRecursionAnalysis.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:n(t,"space-y-4"),children:e.jsx(p,{title:"Multiple Recursion — FAQs",questions:b})})]}),e.jsx("div",{className:n(t,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(m,{note:`Multiple recursion is a powerful but dangerous pattern. I emphasize that the branching factor 
              determines the time complexity — if a > 1 and the reduction is by 1, it's exponential (aⁿ). 
              This is why backtracking algorithms use pruning to reduce the effective branching factor. 
              Students often confuse the number of calls with the stack depth — remind them that space is 
              O(n) for all types, because only one path is explored at a time. This is the foundation of 
              understanding NP-hard problems and why we need heuristics and approximations. Practice with 
              n-queens and graph coloring to see the effect of pruning on performance.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 50 · Multiple Recursion · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{W as default};

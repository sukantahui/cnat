import{r as x,j as e}from"./index-CK4WUhpx.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as m}from"./TeacherSukantaHui-CAKlTT30.js";import{F as p}from"./FAQTemplate-omkku7A3.js";import{J as a}from"./JavaFileLoader-FEFyuOfA.js";import"./github-BjzfPmy3.js";import"./createLucideIcon--yS5sPo-.js";import"./git-branch-YOW4_iC7.js";import"./JavaCodeBlock-DceQA7l-.js";import"./prism-Bgw5yzRN.js";import"./browser-2mk3wPy-.js";import"./prism-java-BwO6k4I_.js";const g=`/**\r
 * Traces the recursion tree for naive Fibonacci.\r
 * Shows the exponential number of calls and overlapping subproblems.\r
 * Recurrence: T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)\r
 */\r
public class RecursionTreeFibonacci {\r
    private static int depth = 0;\r
    private static int maxDepth = 0;\r
    private static int callCount = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 5;\r
        callCount = 0;\r
        maxDepth = 0;\r
        depth = 0;\r
\r
        System.out.println("=== Fibonacci Recursion Tree ===");\r
        System.out.println("n = " + n);\r
        System.out.println("Tree structure: exponential with overlapping subproblems");\r
        System.out.println("Height = " + n);\r
        System.out.println("Number of nodes: O(2ⁿ)");\r
\r
        System.out.println("\\nTracing calls (showing recursion tree depth):");\r
        int result = fib(n);\r
        System.out.println("fib(" + n + ") = " + result);\r
        System.out.println("Total recursive calls: " + callCount);\r
        System.out.println("Maximum depth: " + maxDepth);\r
        System.out.println("Time: O(2ⁿ), Space: O(n)");\r
\r
        // Show the explosion in calls\r
        System.out.println("\\nCall counts for different n:");\r
        for (int i = 1; i <= 10; i++) {\r
            callCount = 0;\r
            fib(i);\r
            System.out.println("fib(" + i + ") calls: " + callCount);\r
        }\r
        System.out.println("For n=10, 2^10 = 1024, calls ≈ " + (int)(Math.pow(2, 10) - 1));\r
        System.out.println("This is exponential growth — O(2ⁿ).");\r
    }\r
\r
    public static int fib(int n) {\r
        depth++;\r
        callCount++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.println(indent + "fib(" + n + ")");\r
\r
        if (n <= 1) {\r
            depth--;\r
            return n;\r
        }\r
\r
        int result = fib(n - 1) + fib(n - 2);\r
        depth--;\r
        return result;\r
    }\r
}`,u=`/**\r
 * Traces the recursion tree for merge sort.\r
 * Shows the balanced tree with O(n) work per level.\r
 * Recurrence: T(n) = 2T(n/2) + O(n) → O(n log n)\r
 */\r
public class RecursionTreeMergeSort {\r
    private static int depth = 0;\r
    private static int maxDepth = 0;\r
    private static int mergeCalls = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10, 15};\r
        int n = arr.length;\r
\r
        System.out.println("=== Merge Sort Recursion Tree ===");\r
        System.out.println("n = " + n);\r
        System.out.println("Tree structure: full binary tree, each level does n work");\r
        System.out.println("Height = log₂(" + n + ") = " + (int)(Math.log(n)/Math.log(2)));\r
        System.out.println("Each level does O(n) work");\r
        System.out.println("Total: n * (log₂(n) + 1) = O(n log n)");\r
\r
        System.out.println("\\nTracing calls (showing tree structure):");\r
        mergeCalls = 0;\r
        depth = 0;\r
        maxDepth = 0;\r
        mergeSort(arr, 0, arr.length - 1);\r
        System.out.println("Total merge calls: " + mergeCalls);\r
        System.out.println("Maximum depth: " + maxDepth);\r
\r
        System.out.print("\\nSorted array: ");\r
        for (int x : arr) System.out.print(x + " ");\r
        System.out.println();\r
        System.out.println("Time: O(n log n), Space: O(n)");\r
    }\r
\r
    public static void mergeSort(int[] arr, int left, int right) {\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.println(indent + "mergeSort(" + left + ", " + right + ")");\r
\r
        if (left < right) {\r
            int mid = left + (right - left) / 2;\r
            System.out.println(indent + "  split at " + mid);\r
            mergeSort(arr, left, mid);\r
            mergeSort(arr, mid + 1, right);\r
            mergeCalls++;\r
            System.out.println(indent + "  merge(" + left + ", " + mid + ", " + right + ")");\r
            merge(arr, left, mid, right);\r
        }\r
        depth--;\r
    }\r
\r
    public static void merge(int[] arr, int left, int mid, int right) {\r
        // Simplified merge for demonstration\r
        int[] temp = new int[right - left + 1];\r
        int i = left, j = mid + 1, k = 0;\r
        while (i <= mid && j <= right) {\r
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];\r
            else temp[k++] = arr[j++];\r
        }\r
        while (i <= mid) temp[k++] = arr[i++];\r
        while (j <= right) temp[k++] = arr[j++];\r
        System.arraycopy(temp, 0, arr, left, temp.length);\r
    }\r
}`,f=`/**\r
 * A generic analysis tool for recursion trees.\r
 * Simulates different recurrences and computes work per level.\r
 */\r
public class RecursionTreeAnalysis {\r
    public static void main(String[] args) {\r
        System.out.println("=== Recursion Tree Analysis ===\\n");\r
\r
        // 1. T(n) = 2T(n/2) + n\r
        System.out.println("1. T(n) = 2T(n/2) + n");\r
        analyze(16, 2, 2, 16);\r
\r
        // 2. T(n) = 2T(n/2) + 1\r
        System.out.println("\\n2. T(n) = 2T(n/2) + 1");\r
        analyze(16, 2, 2, 1);\r
\r
        // 3. T(n) = T(n/2) + 1\r
        System.out.println("\\n3. T(n) = T(n/2) + 1");\r
        analyze(16, 1, 2, 1);\r
\r
        // 4. T(n) = 4T(n/2) + n\r
        System.out.println("\\n4. T(n) = 4T(n/2) + n");\r
        analyze(16, 4, 2, 16);\r
\r
        // 5. T(n) = T(n-1) + n (linear chain)\r
        System.out.println("\\n5. T(n) = T(n-1) + n");\r
        analyzeLinear(5);\r
    }\r
\r
    /**\r
     * Analyzes a divide-and-conquer recurrence: T(n) = a*T(n/b) + f(n)\r
     * Simulates the tree up to a given n (must be a power of b).\r
     */\r
    public static void analyze(int n, int a, int b, int fWork) {\r
        System.out.println("  n = " + n + ", a = " + a + ", b = " + b + ", f(n) = " + fWork);\r
        int levels = (int)(Math.log(n) / Math.log(b)) + 1;\r
        System.out.println("  Number of levels: " + levels);\r
        System.out.println("  Level\\tNodes\\tWork per node\\tTotal work");\r
\r
        int totalWork = 0;\r
        int nodes = 1;\r
        int size = n;\r
        for (int level = 0; level < levels; level++) {\r
            int workPerNode = (size == 1) ? fWork : (int)(fWork * ((double)n / size));\r
            int totalAtLevel = nodes * workPerNode;\r
            totalWork += totalAtLevel;\r
            System.out.printf("  %d\\t%d\\t%d\\t\\t%d\\n", level, nodes, workPerNode, totalAtLevel);\r
            nodes *= a;\r
            size /= b;\r
        }\r
        System.out.println("  Total work = " + totalWork + " (estimated O(n log n) for the first case)");\r
        System.out.println("  Complexity: " + getComplexity(a, b, fWork, n));\r
    }\r
\r
    /**\r
     * Analyzes a linear recurrence: T(n) = T(n-1) + f(n)\r
     */\r
    public static void analyzeLinear(int n) {\r
        System.out.println("  T(n) = T(n-1) + n (linear chain)");\r
        System.out.println("  Level\\tWork at this level");\r
        int total = 0;\r
        for (int i = n; i >= 1; i--) {\r
            total += i;\r
            System.out.println("  " + (n - i) + "\\t" + i);\r
        }\r
        System.out.println("  Total work = " + total + " = O(n²)");\r
    }\r
\r
    public static String getComplexity(int a, int b, int f, int n) {\r
        double logBase = Math.log(a) / Math.log(b);\r
        double fPower = Math.log(f) / Math.log(n);\r
        if (fPower < logBase) {\r
            return "Θ(n^" + logBase + ")";\r
        } else if (fPower == logBase) {\r
            return "Θ(n^" + logBase + " log n)";\r
        } else {\r
            return "Θ(f(n))";\r
        }\r
    }\r
}`,y=[{question:"What is the recursion tree method?",shortAnswer:"A visual approach to solving recurrence relations by drawing a tree of recursive calls.",explanation:"Each node represents a subproblem, and the total work is the sum of work at all levels.",hint:"Think of a tree of calls.",level:"basic",codeExample:"// Draw tree, sum work per level"},{question:"How do you find the work at each level of a recursion tree?",shortAnswer:"Multiply the number of nodes at that level by the work per node.",explanation:"For level k, there are aᵏ nodes, each doing f(n/bᵏ) work.",hint:"Count nodes × work per node.",level:"intermediate",codeExample:"// Work at level k = aᵏ · f(n/bᵏ)"},{question:"How do you find the total work from a recursion tree?",shortAnswer:"Sum the work at each level from root to leaves.",explanation:"T(n) = Σ_{k=0}^{log_b n} aᵏ · f(n/bᵏ).",hint:"Sum across all levels.",level:"intermediate",codeExample:"// Total = sum of work at all levels"},{question:"What is the height of a recursion tree for T(n) = T(n/2) + O(1)?",shortAnswer:"log₂(n) — logarithmic height.",explanation:"The tree divides by 2 each level, so height = log₂(n).",hint:"Divide by 2 each level.",level:"basic",codeExample:"// Height = log₂(n)"},{question:"What is the height of a recursion tree for T(n) = T(n-1) + O(1)?",shortAnswer:"n — linear height.",explanation:"The tree decreases by 1 each level, so height = n.",hint:"Decrease by 1.",level:"basic",codeExample:"// Height = n"},{question:"For T(n) = 2T(n/2) + n, how much work is done at each level?",shortAnswer:"n work at each level.",explanation:"Level 0: n. Level 1: 2·(n/2) = n. Level 2: 4·(n/4) = n.",hint:"Each level does n work.",level:"intermediate",codeExample:"// n at every level"},{question:"What is the solution to T(n) = 2T(n/2) + n using the recursion tree?",shortAnswer:"O(n log n).",explanation:"Each of the log₂(n) levels does n work, total = n log₂(n).",hint:"n work × log n levels.",level:"intermediate",codeExample:"// O(n log n)"},{question:"For T(n) = T(n/2) + O(1), how much work is done at each level?",shortAnswer:"O(1) at each level (constant).",explanation:"Each level does constant work, and there are log₂(n) levels.",hint:"Constant work per level.",level:"intermediate",codeExample:"// O(1) per level"},{question:"What is the solution to T(n) = T(n/2) + O(1) using the recursion tree?",shortAnswer:"O(log n).",explanation:"Constant work per level × log₂(n) levels = O(log n).",hint:"log n levels × constant.",level:"intermediate",codeExample:"// O(log n)"},{question:"For T(n) = 2T(n/2) + O(1), how much work is done at each level?",shortAnswer:"O(1), but the number of nodes doubles each level.",explanation:"Total work at level k = 2ᵏ · O(1) = O(2ᵏ). This grows geometrically.",hint:"Doubling nodes each level.",level:"advanced",codeExample:"// Work at level k = 2ᵏ"},{question:"What is the solution to T(n) = 2T(n/2) + O(1) using the recursion tree?",shortAnswer:"O(n).",explanation:"The geometric series sums to O(n) because 2ᵏ sums to n.",hint:"Geometric series sums to O(n).",level:"advanced",codeExample:"// O(n)"},{question:"For T(n) = 3T(n/3) + n, how much work is done at each level?",shortAnswer:"n at each level.",explanation:"Level 0: n. Level 1: 3·(n/3) = n. Level 2: 9·(n/9) = n.",hint:"n per level.",level:"intermediate",codeExample:"// n per level"},{question:"What is the solution to T(n) = 3T(n/3) + n using the recursion tree?",shortAnswer:"O(n log n).",explanation:"Each of the log₃(n) levels does n work.",hint:"n × log₃ n.",level:"intermediate",codeExample:"// O(n log n)"},{question:"For T(n) = 2T(n/3) + n, how does work accumulate in the tree?",shortAnswer:"Root does n, next level does 2n/3, next does 4n/9, decreasing geometrically.",explanation:"The work decreases geometrically, so it's dominated by the root: O(n).",hint:"Geometric series sum.",level:"advanced",codeExample:"// O(n)"},{question:"What is the solution to T(n) = 2T(n/3) + n using the recursion tree?",shortAnswer:"O(n).",explanation:"The work decreases geometrically, so total is O(n).",hint:"Root dominates.",level:"advanced",codeExample:"// O(n)"},{question:"How do you handle overlapping subproblems in a recursion tree?",shortAnswer:"Naive recursion trees show overlapping subproblems; memoization eliminates them.",explanation:"For Fibonacci, the tree has overlapping subproblems that are recomputed.",hint:"Memoization avoids recomputation.",level:"intermediate",codeExample:"// Overlapping in Fibonacci"},{question:"What does a recursion tree for Fibonacci look like?",shortAnswer:"A binary tree with exponential growth and overlapping subproblems.",explanation:"Two children for each node (n-1 and n-2), many repeated subproblems.",hint:"Exponential branching.",level:"intermediate",codeExample:"// fib(n) calls fib(n-1) and fib(n-2)"},{question:"How many nodes are in the recursion tree for Fibonacci?",shortAnswer:"O(2ⁿ) nodes.",explanation:"The number of recursive calls is exponential.",hint:"Exponential growth.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the recursion tree for factorial?",shortAnswer:"A linear chain of n nodes.",explanation:"Each call makes one recursive call on n-1, so it's a simple chain.",hint:"Linear chain.",level:"basic",codeExample:"// Chain: n → n-1 → n-2 → ... → 1"},{question:"How does the recursion tree help in analyzing recurrence relations?",shortAnswer:"It provides a visual way to sum work across all recursive calls.",explanation:"By drawing the tree, you can see the pattern of work per level and total.",hint:"Visual summation.",level:"intermediate",codeExample:"// Draw to find pattern"},{question:"What is the relationship between the recursion tree and the Master Theorem?",shortAnswer:"They give the same results; the Master Theorem is a formula derived from the recursion tree.",explanation:"The recursion tree method is the foundation of the Master Theorem.",hint:"Master Theorem generalizes the tree method.",level:"advanced",codeExample:"// Master Theorem = shortcut for tree method"},{question:"When should you use the recursion tree method instead of the Master Theorem?",shortAnswer:"When the recurrence does not fit the Master Theorem form, or when you need intuition.",explanation:"Recursion trees work for any recurrence, not just divide-and-conquer.",hint:"More general but more work.",level:"advanced",codeExample:"// Works for T(n) = T(n-1) + ... too"},{question:"What is the recursion tree for T(n) = T(n-1) + O(n)?",shortAnswer:"A chain of n nodes, where level k has work n-k.",explanation:"Work decreases linearly from n at root to 1 at leaves.",hint:"Chain with decreasing work.",level:"advanced",codeExample:"// Work: n + (n-1) + ... + 1 = O(n²)"},{question:"What is the solution to T(n) = T(n-1) + O(n) using the recursion tree?",shortAnswer:"O(n²).",explanation:"Sum of n + (n-1) + ... + 1 = n(n+1)/2 = O(n²).",hint:"Sum of arithmetic series.",level:"advanced",codeExample:"// O(n²)"},{question:"What is the recursion tree for T(n) = 2T(n-1) + O(1)?",shortAnswer:"A tree where each level doubles the number of nodes, height = n.",explanation:"Root has 1 node, level 1 has 2, level 2 has 4, up to 2ⁿ leaves.",hint:"Doubling each level.",level:"advanced",codeExample:"// Exponential growth"},{question:"What is the solution to T(n) = 2T(n-1) + O(1) using the recursion tree?",shortAnswer:"O(2ⁿ).",explanation:"The geometric series sums to O(2ⁿ).",hint:"Exponential.",level:"advanced",codeExample:"// O(2ⁿ)"},{question:"How do you identify the pattern in a recursion tree?",shortAnswer:"Look at the work at the first few levels and see if it stays constant, grows, or shrinks.",explanation:"If work per level is constant, total is height × constant. If it grows geometrically, the last level dominates.",hint:"Observe the pattern.",level:"intermediate",codeExample:"// Check work at levels 0, 1, 2"},{question:"What is the recursion tree for T(n) = 4T(n/2) + n?",shortAnswer:"Tree with 4 branches at each level, each of size n/2, height = log₂(n).",explanation:"Work per level: level 0: n, level 1: 4·(n/2)=2n, level 2: 16·(n/4)=4n, increasing geometrically.",hint:"Work grows geometrically.",level:"advanced",codeExample:"// Work grows as n·2ᵏ"},{question:"What is the solution to T(n) = 4T(n/2) + n using the recursion tree?",shortAnswer:"O(n²).",explanation:"The work is dominated by the last level, which has n² work (4^log₂n = n²).",hint:"Last level dominates.",level:"advanced",codeExample:"// O(n²)"},{question:"What is the recursion tree for T(n) = T(n-1) + 1?",shortAnswer:"A linear chain with 1 work at each level.",explanation:"Each level does constant work, height = n.",hint:"Chain of n nodes.",level:"basic",codeExample:"// O(n)"},{question:"What is the recursion tree for T(n) = 3T(n/3) + O(1)?",shortAnswer:"A 3-ary tree with constant work per node.",explanation:"Work per level grows as 3ᵏ, dominated by leaves.",hint:"Geometric growth.",level:"advanced",codeExample:"// O(n)"},{question:"What is the recursion tree for T(n) = T(n/2) + n?",shortAnswer:"A chain (only one branch) where work decreases geometrically.",explanation:"Root does n, next does n/2, next n/4, etc. Total = O(n).",hint:"Geometric series.",level:"advanced",codeExample:"// O(n)"}],W=()=>{const[o,l]=x.useState("overview"),n="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=t=>`animate-[fadeSlideUp_0.5s_ease-out_${t*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:r(n,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 33"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Advanced Recurrence Solving"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Recursion Trees (Advanced)"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Mastering the ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"recursion tree"})," method — a powerful visual technique for solving recurrence relations and understanding algorithm complexity."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(t=>e.jsxs("button",{onClick:()=>l(t),className:r("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",o===t?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[t==="overview"&&"📖 Overview",t==="code"&&"☕ Code Examples",t==="faq"&&"❓ FAQ"]},t))}),e.jsxs("div",{className:"space-y-12",children:[o==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is the Recursion Tree Method?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"recursion tree method"})," is a visual approach to solving recurrence relations that arise in the analysis of recursive algorithms. It works by drawing a tree where each node represents a recursive call, and the children represent the subproblems. The total work is computed by summing the work at each level of the tree."]}),e.jsxs("p",{children:["This method is particularly useful when the recurrence is ",e.jsx("strong",{children:"not"})," of the form T(n) = a·T(n/b) + f(n) (so the Master Theorem doesn't apply) or when you want to build intuition about how work accumulates. It works for any recurrence, including linear recurrences like T(n) = T(n-1) + O(n)."]}),e.jsxs("p",{children:["Think of it like a ",e.jsx("strong",{children:"family tree"})," of recursive calls: each node represents a subproblem, and the total work is the sum of work done by all nodes. The tree method helps you see patterns in work per level and identify the dominant term."]})]})]}),e.jsxs("section",{className:r(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Step-by-Step: Building a Recursion Tree"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"1. Draw the root",desc:"Start with the root node representing the original problem of size n. Label it with the work f(n) done at that node.",icon:"🌳"},{step:"2. Add children",desc:"For each recursive call, add child nodes with the corresponding subproblem sizes. Label each child with the work done at that level.",icon:"🌿"},{step:"3. Repeat until base case",desc:"Continue expanding until you reach the base case (usually size 1). The leaves represent the base case work.",icon:"🍃"},{step:"4. Compute work per level",desc:"For each level, sum the work of all nodes at that level. Identify the pattern (constant, growing, shrinking).",icon:"📊"},{step:"5. Sum across levels",desc:"Add the work from all levels to get the total complexity. Simplify using Big-O rules.",icon:"➕"},{step:"6. Verify with Master Theorem",desc:"If the recurrence fits the Master Theorem form, cross-check your result.",icon:"✅"}].map((t,i)=>e.jsxs("div",{className:r(s(i),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:t.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:t.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc})]},i))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Recursion Tree for T(n) = 2T(n/2) + n"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full h-auto max-h-72",role:"img","aria-label":"Recursion tree for merge sort",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow33",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("rect",{x:"320",y:"20",width:"160",height:"30",rx:"6",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"400",y:"42",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"n"}),e.jsx("text",{x:"400",y:"60",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"work: n"}),e.jsx("rect",{x:"150",y:"80",width:"120",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"210",y:"98",textAnchor:"middle",fontSize:"11",fill:"white",children:"n/2"}),e.jsx("text",{x:"210",y:"115",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"work: n/2"}),e.jsx("rect",{x:"530",y:"80",width:"120",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"590",y:"98",textAnchor:"middle",fontSize:"11",fill:"white",children:"n/2"}),e.jsx("text",{x:"590",y:"115",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"work: n/2"}),e.jsx("text",{x:"400",y:"120",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Level 1: 2·(n/2) = n"}),e.jsx("rect",{x:"80",y:"140",width:"90",height:"22",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"125",y:"156",textAnchor:"middle",fontSize:"10",fill:"white",children:"n/4"}),e.jsx("text",{x:"125",y:"170",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"work: n/4"}),e.jsx("rect",{x:"200",y:"140",width:"90",height:"22",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"245",y:"156",textAnchor:"middle",fontSize:"10",fill:"white",children:"n/4"}),e.jsx("text",{x:"245",y:"170",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"work: n/4"}),e.jsx("rect",{x:"480",y:"140",width:"90",height:"22",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"525",y:"156",textAnchor:"middle",fontSize:"10",fill:"white",children:"n/4"}),e.jsx("text",{x:"525",y:"170",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"work: n/4"}),e.jsx("rect",{x:"600",y:"140",width:"90",height:"22",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"645",y:"156",textAnchor:"middle",fontSize:"10",fill:"white",children:"n/4"}),e.jsx("text",{x:"645",y:"170",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"work: n/4"}),e.jsx("text",{x:"400",y:"180",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Level 2: 4·(n/4) = n"}),e.jsx("rect",{x:"40",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"75",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"120",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"155",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"200",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"235",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"280",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"315",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"450",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"485",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"530",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"565",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"610",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"645",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("rect",{x:"690",y:"200",width:"70",height:"18",rx:"4",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"725",y:"214",textAnchor:"middle",fontSize:"9",fill:"white",children:"n/8"}),e.jsx("text",{x:"400",y:"235",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Level 3: 8·(n/8) = n"}),e.jsx("text",{x:"400",y:"265",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"…"}),e.jsx("text",{x:"400",y:"285",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Level log₂(n): n leaves, each work 1 → total n"}),e.jsx("text",{x:"400",y:"320",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Total work = n + n + n + ... (log₂(n) + 1) times = O(n log n)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"For T(n) = 2T(n/2) + n, each level does n work, and there are log₂(n) levels, giving O(n log n)."})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Recurrences Solved by Recursion Tree"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"Recurrence"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Work per Level"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Height"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Result"})]})}),e.jsx("tbody",{children:[["T(n) = T(n/2) + O(1)","O(1)","log₂ n","O(log n)"],["T(n) = 2T(n/2) + O(1)","O(1) (growing)","log₂ n","O(n)"],["T(n) = T(n-1) + O(1)","O(1)","n","O(n)"],["T(n) = 2T(n/2) + O(n)","O(n) (each level)","log₂ n","O(n log n)"],["T(n) = T(n-1) + O(n)","O(n), O(n-1), …","n","O(n²)"],["T(n) = 2T(n-1) + O(1)","O(2ᵏ) (growing)","n","O(2ⁿ)"],["T(n) = 4T(n/2) + O(n)","O(n·2ᵏ) (growing)","log₂ n","O(n²)"],["T(n) = T(n/2) + O(n)","O(n), O(n/2), …","log₂ n","O(n)"]].map(([t,i,d,h],c)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400",children:t}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:i}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:d}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:h})]},c))})]})})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always draw the tree",desc:"Visualizing the recursion tree helps understand how work accumulates."},{tip:"Identify the pattern",desc:"Look for patterns in work per level — constant, growing, or shrinking."},{tip:"Check the base case",desc:"The tree stops at n/bᵏ = 1, so k = log_b(n). That's the height."},{tip:"Use the tree to verify Master Theorem results",desc:"The recursion tree method gives the same results as the Master Theorem, helping you understand why."}].map((t,i)=>e.jsxs("div",{className:r(s(i+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",t.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc})]},i))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to multiply by the number of nodes at each level:"})," The total work at a level is number of nodes × work per node, not just work per node."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming work per level is constant when it grows:"})," For Fibonacci, the work doubles each level, leading to exponential total."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misidentifying the height of the tree:"})," For T(n) = T(n-1) + O(1), the height is n, not log n. For T(n) = T(n/2) + O(1), the height is log n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the work at the leaves:"})," Sometimes leaves do non-constant work; account for them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using the recursion tree for non-D&C recurrences:"})," The tree method works for any recurrence, including linear ones like T(n) = T(n-1) + n.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Swadeep"})," once tried to use the Master Theorem for T(n) = T(n-1) + n and failed. He used the recursion tree and got O(n²) — correctly."]})]})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Draw the first few levels"})," to see the pattern before generalizing."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use a table to track levels"})," — level number, number of nodes, work per node, total work."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Verify the total with the Master Theorem"})," when applicable."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Consider both the internal nodes and the leaves"})," — some recurrences have work distributed unevenly."]})})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you draw a recursion tree for a given recurrence?","✅ Can you identify the work at each level?","✅ Can you determine the height of the tree?","✅ Can you sum the work across all levels?","✅ Can you use the recursion tree method to solve common recurrences?","✅ Can you verify your result using the Master Theorem?"].map((t,i)=>e.jsx("div",{className:r(s(i+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:t},i))})]}),e.jsxs("section",{className:r(n,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For T(n) = 2T(n/2) + n, how many nodes at level 0, 1, 2? What is the total work at each level? It's n at every level."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the recurrence were T(n) = 3T(n/3) + n? How would the tree change? The work per level would still be n, but the height would be log₃(n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Naihati"})," has n students. The principal splits them into 3 groups of n/3, and each group splits further. The recursion tree would have a branching factor of 3 — that's T(n) = 3T(n/3) + O(n), which solves to O(n log n)."]})]})]})]}),o==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursion Tree for Fibonacci — Exponential"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Traces the recursion tree for naive Fibonacci, showing the exponential number of calls."}),e.jsx(a,{fileModule:g,title:"RecursionTreeFibonacci.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursion Tree for Merge Sort — O(n log n)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Shows the balanced recursion tree for merge sort, with n work per level."}),e.jsx(a,{fileModule:u,title:"RecursionTreeMergeSort.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursion Tree Analysis — Generic Solver"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"A utility that analyzes different recurrences by simulating the recursion tree and computing work per level."}),e.jsx(a,{fileModule:f,title:"RecursionTreeAnalysis.java",highlightLines:[]})]})]}),o==="faq"&&e.jsx("div",{className:r(n,"space-y-4"),children:e.jsx(p,{title:"Recursion Trees (Advanced) — FAQs",questions:y})})]}),e.jsx("div",{className:r(n,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(m,{note:"The recursion tree method is the most intuitive way to solve recurrences. I always start by drawing the tree on the board for a simple recurrence like T(n) = 2T(n/2) + n. Students can see that each level does n work, and there are log n levels, so the total is n log n. This visual approach builds deep intuition that formulas alone can't provide. Encourage students to practice drawing trees for different recurrences — it's like a puzzle that reveals the complexity. Also, remind them that the recursion tree method works for any recurrence, even those not solvable by the Master Theorem (like T(n) = T(n-1) + n)."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 33 · Recursion Trees (Advanced) · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

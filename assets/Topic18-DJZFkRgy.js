import{r as x,j as e}from"./index-DKhGj2r9.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as m}from"./TeacherSukantaHui-C0AXZMBk.js";import{F as g}from"./FAQTemplate-DNMa4yDj.js";import{J as i}from"./JavaFileLoader-DwhOVPk0.js";import"./github-BlE0UCNo.js";import"./createLucideIcon-DZ4EMxs8.js";import"./git-branch-BCLsXsvv.js";import"./JavaCodeBlock-BDo80ffG.js";import"./prism-CMJExfNS.js";import"./browser-DA-_IcxN.js";import"./prism-java-BwO6k4I_.js";const p=`/**\r
 * Traces the recursion tree for factorial.\r
 * Recurrence: T(n) = T(n-1) + O(1), T(0)=O(1)\r
 * Tree: Chain of n nodes, each with O(1) work.\r
 * Total: O(n)\r
 */\r
public class FactorialTree {\r
    private static int depth = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 5;\r
        System.out.println("=== Factorial Recursion Tree ===");\r
        System.out.println("n = " + n);\r
        System.out.println("Tree structure: linear chain of " + (n+1) + " nodes");\r
        System.out.println("Each node does O(1) work");\r
        System.out.println("Total: O(n)");\r
\r
        System.out.println("\\nTracing calls:");\r
        factorial(n);\r
        System.out.println("Maximum depth: " + maxDepth);\r
        System.out.println("Time: O(n), Space: O(n)");\r
    }\r
\r
    public static int factorial(int n) {\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Indent to show depth\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.println(indent + "factorial(" + n + ")");\r
\r
        if (n <= 1) {\r
            depth--;\r
            return 1;\r
        }\r
\r
        int result = n * factorial(n - 1);\r
        depth--;\r
        return result;\r
    }\r
}`,u=`/**\r
 * Traces the recursion tree for binary search.\r
 * Recurrence: T(n) = T(n/2) + O(1), T(1)=O(1)\r
 * Tree: One branch per level, height = log₂(n).\r
 * Total: O(log n)\r
 */\r
public class BinarySearchTree {\r
    private static int depth = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31};\r
        int target = 17;\r
        int n = arr.length;\r
\r
        System.out.println("=== Binary Search Recursion Tree ===");\r
        System.out.println("n = " + n);\r
        System.out.println("Tree structure: single path of length log₂(n) = " + (int)(Math.log(n)/Math.log(2)));\r
        System.out.println("Each node does O(1) work");\r
        System.out.println("Total: O(log n)");\r
\r
        System.out.println("\\nTracing calls:");\r
        binarySearch(arr, target, 0, arr.length - 1);\r
        System.out.println("Maximum depth: " + maxDepth);\r
        System.out.println("Time: O(log n), Space: O(log n)");\r
    }\r
\r
    public static int binarySearch(int[] arr, int target, int low, int high) {\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.println(indent + "search(" + low + ", " + high + ")");\r
\r
        if (low > high) {\r
            depth--;\r
            return -1;\r
        }\r
\r
        int mid = low + (high - low) / 2;\r
        System.out.println(indent + "  mid=" + mid + ", arr[mid]=" + arr[mid]);\r
\r
        if (arr[mid] == target) {\r
            depth--;\r
            return mid;\r
        }\r
\r
        int result;\r
        if (arr[mid] < target) {\r
            result = binarySearch(arr, target, mid + 1, high);\r
        } else {\r
            result = binarySearch(arr, target, low, mid - 1);\r
        }\r
        depth--;\r
        return result;\r
    }\r
}`,y=`/**\r
 * Traces the recursion tree for merge sort.\r
 * Recurrence: T(n) = 2T(n/2) + O(n), T(1)=O(1)\r
 * Tree: Full binary tree, height = log₂(n), each level does n work.\r
 * Total: O(n log n)\r
 */\r
public class MergeSortTree {\r
    private static int depth = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10, 15};\r
        int n = arr.length;\r
\r
        System.out.println("=== Merge Sort Recursion Tree ===");\r
        System.out.println("n = " + n);\r
        System.out.println("Tree structure: full binary tree, each level does n work");\r
        System.out.println("Height = log₂(" + n + ") = " + (int)(Math.log(n)/Math.log(2)));\r
        System.out.println("Each level does n work");\r
        System.out.println("Total: n * (log₂(n) + 1) = O(n log n)");\r
\r
        System.out.println("\\nTracing calls:");\r
        mergeSort(arr, 0, arr.length - 1);\r
        System.out.println("Maximum depth: " + maxDepth);\r
        System.out.println("Time: O(n log n), Space: O(n)");\r
\r
        System.out.print("\\nSorted array: ");\r
        for (int x : arr) System.out.print(x + " ");\r
        System.out.println();\r
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
            // Merge (O(n) work) — not fully traced for brevity\r
            System.out.println(indent + "  merge(" + left + ", " + mid + ", " + right + ")");\r
            merge(arr, left, mid, right);\r
        }\r
\r
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
 * Traces the recursion tree for naive Fibonacci.\r
 * Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)\r
 * Tree: Exponential branching, height = n, each level has 2ᵏ nodes.\r
 * Total: O(2ⁿ)\r
 */\r
public class FibonacciTree {\r
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
        System.out.println("\\nTracing calls:");\r
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
}`,b=[{question:"What is a recursion tree?",shortAnswer:"A visual representation of the recursive calls made by an algorithm.",explanation:"Each node represents a subproblem, and children represent recursive calls. Used to visualize and solve recurrence relations.",hint:"It's like a family tree for recursive calls.",level:"basic",codeExample:"// Tree with root T(n), children T(n/b)"},{question:"What does each node in a recursion tree represent?",shortAnswer:"A subproblem of size n/bᵏ with its work f(n/bᵏ).",explanation:"The node represents the work done at that subproblem, excluding the recursive calls.",hint:"Each node is a recursive call.",level:"basic",codeExample:"// Node: T(size) with work f(size)"},{question:"How do you find the work at each level of a recursion tree?",shortAnswer:"Multiply the number of nodes at that level by the work per node.",explanation:"For level k, there are aᵏ nodes, each doing f(n/bᵏ) work.",hint:"Count nodes × work per node.",level:"intermediate",codeExample:"// Work at level k = aᵏ · f(n/bᵏ)"},{question:"How do you find the total work from a recursion tree?",shortAnswer:"Sum the work at each level from root to leaves.",explanation:"T(n) = Σ_{k=0}^{log_b n} aᵏ · f(n/bᵏ).",hint:"Sum across all levels.",level:"intermediate",codeExample:"// Total = sum of work at all levels"},{question:"What is the height of a recursion tree for T(n) = T(n/2) + O(1)?",shortAnswer:"log₂(n) — logarithmic height.",explanation:"The tree divides by 2 each level, so height = log₂(n).",hint:"Divide by 2 each level.",level:"basic",codeExample:"// Height = log₂(n)"},{question:"What is the height of a recursion tree for T(n) = T(n-1) + O(1)?",shortAnswer:"n — linear height.",explanation:"The tree decreases by 1 each level, so height = n.",hint:"Decrease by 1.",level:"basic",codeExample:"// Height = n"},{question:"For T(n) = 2T(n/2) + n, how much work is done at each level?",shortAnswer:"n work at each level.",explanation:"Level 0: n. Level 1: 2·(n/2) = n. Level 2: 4·(n/4) = n.",hint:"Each level does n work.",level:"intermediate",codeExample:"// n at every level"},{question:"What is the solution to T(n) = 2T(n/2) + n using the recursion tree?",shortAnswer:"O(n log n).",explanation:"Each of the log₂(n) levels does n work, total = n log₂(n).",hint:"n work × log n levels.",level:"intermediate",codeExample:"// O(n log n)"},{question:"For T(n) = T(n/2) + O(1), how much work is done at each level?",shortAnswer:"O(1) at each level (constant).",explanation:"Each level does constant work, and there are log₂(n) levels.",hint:"Constant work per level.",level:"intermediate",codeExample:"// O(1) per level"},{question:"What is the solution to T(n) = T(n/2) + O(1) using the recursion tree?",shortAnswer:"O(log n).",explanation:"Constant work per level × log₂(n) levels = O(log n).",hint:"log n levels × constant.",level:"intermediate",codeExample:"// O(log n)"},{question:"For T(n) = 2T(n/2) + O(1), how much work is done at each level?",shortAnswer:"O(1), but the number of nodes doubles each level.",explanation:"Total work at level k = 2ᵏ · O(1) = O(2ᵏ). This grows geometrically.",hint:"Doubling nodes each level.",level:"advanced",codeExample:"// Work at level k = 2ᵏ"},{question:"What is the solution to T(n) = 2T(n/2) + O(1) using the recursion tree?",shortAnswer:"O(n).",explanation:"The geometric series sums to O(n) because 2ᵏ sums to n.",hint:"Geometric series sums to O(n).",level:"advanced",codeExample:"// O(n)"},{question:"For T(n) = 3T(n/3) + n, how much work is done at each level?",shortAnswer:"n at each level.",explanation:"Level 0: n. Level 1: 3·(n/3) = n. Level 2: 9·(n/9) = n.",hint:"n per level.",level:"intermediate",codeExample:"// n per level"},{question:"What is the solution to T(n) = 3T(n/3) + n using the recursion tree?",shortAnswer:"O(n log n).",explanation:"Each of the log₃(n) levels does n work.",hint:"n × log₃ n.",level:"intermediate",codeExample:"// O(n log n)"},{question:"For T(n) = 2T(n/3) + n, how does work accumulate in the tree?",shortAnswer:"Root does n, next level does 2n/3, next does 4n/9, decreasing geometrically.",explanation:"The work decreases geometrically, so it's dominated by the root: O(n).",hint:"Geometric series sum.",level:"advanced",codeExample:"// O(n)"},{question:"What is the solution to T(n) = 2T(n/3) + n using the recursion tree?",shortAnswer:"O(n).",explanation:"The work decreases geometrically, so total is O(n).",hint:"Root dominates.",level:"advanced",codeExample:"// O(n)"},{question:"How do you handle overlapping subproblems in a recursion tree?",shortAnswer:"Naive recursion trees show overlapping subproblems; memoization eliminates them.",explanation:"For Fibonacci, the tree has overlapping subproblems that are recomputed.",hint:"Memoization avoids recomputation.",level:"intermediate",codeExample:"// Overlapping in Fibonacci"},{question:"What does a recursion tree for Fibonacci look like?",shortAnswer:"A binary tree with exponential growth and overlapping subproblems.",explanation:"Two children for each node (n-1 and n-2), many repeated subproblems.",hint:"Exponential branching.",level:"intermediate",codeExample:"// fib(n) calls fib(n-1) and fib(n-2)"},{question:"How many nodes are in the recursion tree for Fibonacci?",shortAnswer:"O(2ⁿ) nodes.",explanation:"The number of recursive calls is exponential.",hint:"Exponential growth.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the recursion tree for factorial?",shortAnswer:"A linear chain of n nodes.",explanation:"Each call makes one recursive call on n-1, so it's a simple chain.",hint:"Linear chain.",level:"basic",codeExample:"// Chain: n → n-1 → n-2 → ... → 1"},{question:"How does the recursion tree help in analyzing recurrence relations?",shortAnswer:"It provides a visual way to sum work across all recursive calls.",explanation:"By drawing the tree, you can see the pattern of work per level and total.",hint:"Visual summation.",level:"intermediate",codeExample:"// Draw to find pattern"},{question:"What is the relationship between the recursion tree and the Master Theorem?",shortAnswer:"They give the same results; the Master Theorem is a formula derived from the recursion tree.",explanation:"The recursion tree method is the foundation of the Master Theorem.",hint:"Master Theorem generalizes the tree method.",level:"advanced",codeExample:"// Master Theorem = shortcut for tree method"},{question:"When should you use the recursion tree method instead of the Master Theorem?",shortAnswer:"When the recurrence does not fit the Master Theorem form, or when you need intuition.",explanation:"Recursion trees work for any recurrence, not just divide-and-conquer.",hint:"More general but more work.",level:"advanced",codeExample:"// Works for T(n) = T(n-1) + ... too"},{question:"What is the recursion tree for T(n) = T(n-1) + O(n)?",shortAnswer:"A chain of n nodes, where level k has work n-k.",explanation:"Work decreases linearly from n at root to 1 at leaves.",hint:"Chain with decreasing work.",level:"advanced",codeExample:"// Work: n + (n-1) + ... + 1 = O(n²)"},{question:"What is the solution to T(n) = T(n-1) + O(n) using the recursion tree?",shortAnswer:"O(n²).",explanation:"Sum of n + (n-1) + ... + 1 = n(n+1)/2 = O(n²).",hint:"Sum of arithmetic series.",level:"advanced",codeExample:"// O(n²)"},{question:"What is the recursion tree for T(n) = 2T(n-1) + O(1)?",shortAnswer:"A tree where each level doubles the number of nodes, height = n.",explanation:"Root has 1 node, level 1 has 2, level 2 has 4, up to 2ⁿ leaves.",hint:"Doubling each level.",level:"advanced",codeExample:"// Exponential growth"},{question:"What is the solution to T(n) = 2T(n-1) + O(1) using the recursion tree?",shortAnswer:"O(2ⁿ).",explanation:"The geometric series sums to O(2ⁿ).",hint:"Exponential.",level:"advanced",codeExample:"// O(2ⁿ)"},{question:"How do you identify the pattern in a recursion tree?",shortAnswer:"Look at the work at the first few levels and see if it stays constant, grows, or shrinks.",explanation:"If work per level is constant, total is height × constant. If it grows geometrically, the last level dominates.",hint:"Observe the pattern.",level:"intermediate",codeExample:"// Check work at levels 0, 1, 2"},{question:"What is the recursion tree for T(n) = 4T(n/2) + n?",shortAnswer:"Tree with 4 branches at each level, each of size n/2, height = log₂(n).",explanation:"Work per level: level 0: n, level 1: 4·(n/2)=2n, level 2: 16·(n/4)=4n, increasing geometrically.",hint:"Work grows geometrically.",level:"advanced",codeExample:"// Work grows as n·2ᵏ"},{question:"What is the solution to T(n) = 4T(n/2) + n using the recursion tree?",shortAnswer:"O(n²).",explanation:"The work is dominated by the last level, which has n² work (4^log₂n = n²).",hint:"Last level dominates.",level:"advanced",codeExample:"// O(n²)"},{question:"What is the recursion tree for T(n) = 2T(n/2) + n log n?",shortAnswer:"Tree with 2 branches, height = log₂(n), work per level = n log(n/2ᵏ).",explanation:"Work per level decreases slightly, dominated by the root? Actually it's O(n log² n).",hint:"Each level does n log n work.",level:"advanced",codeExample:"// O(n log² n)"}],F=()=>{const[s,l]=x.useState("overview"),n="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",o=t=>`animate-[fadeSlideUp_0.5s_ease-out_${t*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:r(n,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 18"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recurrence Solving"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Recursion Trees"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["A ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"visual approach"})," to solving recurrence relations — drawing the recursion tree to understand how work accumulates and derive asymptotic complexity."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(t=>e.jsxs("button",{onClick:()=>l(t),className:r("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",s===t?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[t==="overview"&&"📖 Overview",t==="code"&&"☕ Code Examples",t==="faq"&&"❓ FAQ"]},t))}),e.jsxs("div",{className:"space-y-12",children:[s==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is a Recursion Tree?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"recursion tree"})," is a visual representation of the recursive calls made by an algorithm. Each node represents a subproblem, and the children of a node represent the recursive calls it makes. The recursion tree helps us analyze the total work done by a recursive algorithm by summing the work at each level."]}),e.jsxs("p",{children:["The method works for any recurrence of the form ",e.jsx("strong",{children:"T(n) = a·T(n/b) + f(n)"}),":"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Root:"})," Represents T(n) with work f(n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Children:"})," a subproblems of size n/b, each with work f(n/b)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Levels:"})," Each level divides the problem by b and multiplies the number of nodes by a."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Total work:"})," Sum of work at all levels = height of tree × work per level (if uniform)."]})]}),e.jsx("p",{children:"Think of it like an organization chart: the CEO (root) has managers (children), who have team leads (grandchildren), down to individual contributors (leaves). The total work is the sum of work done at each level of the hierarchy."})]})]}),e.jsxs("section",{className:r(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Building a Recursion Tree"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"Step 1: Root",desc:"Start with the root node representing T(n). The work at this level is f(n).",example:"For T(n) = 2T(n/2) + n, root has work n."},{step:"Step 2: Children",desc:"Add a children nodes, each of size n/b. Each child has work f(n/b).",example:"2 children of size n/2, each with work n/2."},{step:"Step 3: Recursively expand",desc:"Continue expanding until reaching the base case (size = 1).",example:"At level k, there are aᵏ nodes of size n/bᵏ."},{step:"Step 4: Sum work",desc:"Sum the work at each level, then sum across all levels.",example:"Total = sum_{k=0}^{log_b n} aᵏ · f(n/bᵏ)."}].map((t,a)=>e.jsxs("div",{className:r(o(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:t.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc}),e.jsx("p",{className:"text-sm font-mono text-gray-500 dark:text-gray-500 mt-1",children:t.example})]},a))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Recursion Tree for Merge Sort"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full h-auto max-h-72",role:"img","aria-label":"Recursion tree for merge sort",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow18",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("rect",{x:"320",y:"20",width:"160",height:"35",rx:"8",fill:"#818cf8",opacity:"0.9"}),e.jsx("text",{x:"400",y:"45",textAnchor:"middle",fontSize:"14",fill:"white",fontWeight:"bold",children:"T(n)"}),e.jsx("text",{x:"400",y:"70",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Work: n"}),e.jsx("rect",{x:"150",y:"90",width:"130",height:"32",rx:"8",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"215",y:"112",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"T(n/2)"}),e.jsx("text",{x:"215",y:"135",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Work: n/2"}),e.jsx("rect",{x:"520",y:"90",width:"130",height:"32",rx:"8",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"585",y:"112",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"T(n/2)"}),e.jsx("text",{x:"585",y:"135",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Work: n/2"}),e.jsx("rect",{x:"80",y:"160",width:"100",height:"28",rx:"8",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"130",y:"180",textAnchor:"middle",fontSize:"11",fill:"white",children:"T(n/4)"}),e.jsx("text",{x:"130",y:"198",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Work: n/4"}),e.jsx("rect",{x:"210",y:"160",width:"100",height:"28",rx:"8",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"260",y:"180",textAnchor:"middle",fontSize:"11",fill:"white",children:"T(n/4)"}),e.jsx("text",{x:"260",y:"198",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Work: n/4"}),e.jsx("rect",{x:"490",y:"160",width:"100",height:"28",rx:"8",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"540",y:"180",textAnchor:"middle",fontSize:"11",fill:"white",children:"T(n/4)"}),e.jsx("text",{x:"540",y:"198",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Work: n/4"}),e.jsx("rect",{x:"620",y:"160",width:"100",height:"28",rx:"8",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"670",y:"180",textAnchor:"middle",fontSize:"11",fill:"white",children:"T(n/4)"}),e.jsx("text",{x:"670",y:"198",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Work: n/4"}),e.jsx("rect",{x:"40",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"75",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("rect",{x:"130",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"165",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("rect",{x:"220",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"255",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("rect",{x:"450",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"485",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("rect",{x:"540",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"575",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("rect",{x:"630",y:"230",width:"70",height:"24",rx:"6",fill:"#fbbf24",opacity:"0.6"}),e.jsx("text",{x:"665",y:"247",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(1)"}),e.jsx("line",{x1:"400",y1:"55",x2:"215",y2:"90",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"55",x2:"585",y2:"90",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"215",y1:"122",x2:"130",y2:"160",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"215",y1:"122",x2:"260",y2:"160",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"585",y1:"122",x2:"540",y2:"160",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"585",y1:"122",x2:"670",y2:"160",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"320",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Level 0: n work, Level 1: 2·(n/2) = n work, Level 2: 4·(n/4) = n work"}),e.jsx("text",{x:"420",y:"340",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Total work = n · (log₂(n) + 1) = O(n log n)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"For merge sort, each level does n work, and there are log₂(n) + 1 levels. Total = O(n log n)."})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Step-by-Step Method"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 1: Draw the recursion tree"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Start with the root (T(n)) and expand each node's children until reaching the base case."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 2: Determine the work at each level"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"For level k, the number of nodes is aᵏ, and each does f(n/bᵏ) work."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 3: Find the total work per level"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Sum the work of all nodes at that level: aᵏ · f(n/bᵏ)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 4: Sum across all levels"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["T(n) = Σ_{k=0}^{log_b n} aᵏ · f(n/bᵏ)."," Then simplify to get the complexity."]})]})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Recurrences via Recursion Tree"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"Recurrence"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Work per Level"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Height"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Result"})]})}),e.jsx("tbody",{children:[["T(n) = T(n/2) + O(1)","O(1)","log₂ n","O(log n)"],["T(n) = 2T(n/2) + O(1)","O(1)","log₂ n","O(n)"],["T(n) = T(n-1) + O(1)","O(1)","n","O(n)"],["T(n) = 2T(n/2) + O(n)","O(n) (each level)","log₂ n","O(n log n)"],["T(n) = T(n-1) + O(n)","O(n), O(n-1), ...","n","O(n²)"],["T(n) = 2T(n-1) + O(1)","O(2ᵏ) (grows)","n","O(2ⁿ)"]].map(([t,a,d,h],c)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400",children:t}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:a}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:d}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:h})]},c))})]})})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always draw the tree",desc:"Visualizing the recursion tree helps understand how work accumulates."},{tip:"Identify the pattern",desc:"Look for patterns in work per level — constant, growing, or shrinking."},{tip:"Check the base case",desc:"The tree stops at n/bᵏ = 1, so k = log_b(n). That's the height."},{tip:"Use the tree to verify Master Theorem results",desc:"The recursion tree method gives the same results as the Master Theorem, helping you understand why."}].map((t,a)=>e.jsxs("div",{className:r(o(a+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",t.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc})]},a))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to multiply by the number of nodes at each level:"})," The total work at a level is number of nodes × work per node, not just work per node."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming work per level is constant when it grows:"})," For Fibonacci, the work doubles each level, leading to exponential total."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misidentifying the height of the tree:"})," For T(n) = T(n-1) + O(1), the height is n, not log n. For T(n) = T(n/2) + O(1), the height is log n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the work at the leaves:"})," Sometimes leaves do non-constant work; account for them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing the recursion tree method with the recurrence tree:"})," They are the same thing — drawing the recursive calls to visualize the recurrence.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Swadeep"})," once tried to solve T(n) = 2T(n/2) + n using the recursion tree method but forgot that each level has 2ᵏ nodes, not just one."]})]})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Draw the first few levels"})," to see the pattern before generalizing."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use a table to track levels"})," — level number, number of nodes, work per node, total work."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Verify the total with the Master Theorem"})," when applicable."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Consider both the internal nodes and the leaves"})," — some recurrences have work distributed unevenly."]})})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you draw a recursion tree for a given recurrence?","✅ Can you identify the work at each level?","✅ Can you determine the height of the tree?","✅ Can you sum the work across all levels?","✅ Can you use the recursion tree method to solve common recurrences?","✅ Can you verify your result using the Master Theorem?"].map((t,a)=>e.jsx("div",{className:r(o(a+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:t},a))})]}),e.jsxs("section",{className:r(n,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For T(n) = 2T(n/2) + n, how many nodes at level 0, 1, 2? What is the total work at each level? It's n at every level."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the recurrence were T(n) = 3T(n/3) + n? How would the tree change? The work per level would still be n, but the height would be log₃(n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Naihati"})," has n students. The principal splits them into 3 groups of n/3, and each group splits further. The recursion tree would have a branching factor of 3 — that's T(n) = 3T(n/3) + O(n), which solves to O(n log n)."]})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Factorial Recursion Tree — Linear"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Traces the recursion tree for factorial, showing the linear chain of calls."}),e.jsx(i,{fileModule:p,title:"FactorialTree.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Search Recursion Tree — Logarithmic"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Shows the recursion tree for binary search, with only one branch at each level."}),e.jsx(i,{fileModule:u,title:"BinarySearchTree.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort Recursion Tree — n log n"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Traces the balanced recursion tree for merge sort, showing n work per level."}),e.jsx(i,{fileModule:y,title:"MergeSortTree.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Fibonacci Recursion Tree — Exponential"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Shows the explosive recursion tree for naive Fibonacci, with overlapping subproblems."}),e.jsx(i,{fileModule:f,title:"FibonacciTree.java",highlightLines:[]})]})]}),s==="faq"&&e.jsx("div",{className:r(n,"space-y-4"),children:e.jsx(g,{title:"Recursion Trees — FAQs",questions:b})})]}),e.jsx("div",{className:r(n,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(m,{note:"The recursion tree method is one of the most intuitive ways to solve recurrences. I always start by drawing the tree on the board for a simple recurrence like T(n) = 2T(n/2) + n. Students can see that each level does n work, and there are log n levels, so the total is n log n. This visual approach builds deep intuition that formulas alone can't provide. Encourage students to practice drawing trees for different recurrences — it's like a puzzle that reveals the complexity. Also, remind them that the recursion tree method works for any recurrence, even those not solvable by the Master Theorem."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 18 · Recursion Trees · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{F as default};

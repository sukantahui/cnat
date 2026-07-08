import{r as x,j as e}from"./index-gsr__VoO.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as m}from"./TeacherSukantaHui-DvbQRa-c.js";import{F as p}from"./FAQTemplate-CEVTVkoN.js";import{J as o}from"./JavaFileLoader-Oc7S8mbZ.js";import"./git-branch-Bxm2eNpw.js";import"./JavaCodeBlock-NUM7pLrI.js";import"./prism-CyJ4Ug4E.js";import"./browser--8xGBJJU.js";import"./prism-java-BwO6k4I_.js";const u=`/**\r
 * Binary Recursion: Naive Fibonacci\r
 * Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)\r
 * Time Complexity: O(2ⁿ) — exponential (overlapping subproblems)\r
 * Space Complexity: O(n) — recursion stack depth = n\r
 * \r
 * This is the classic example of binary recursion with overlapping subproblems.\r
 * Memoization can reduce this to O(n) time.\r
 */\r
public class FibonacciBinary {\r
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
        System.out.println("Binary Recursion: Naive Fibonacci");\r
        System.out.println("fib(" + n + ") = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Time: O(2ⁿ), Space: O(n)");\r
\r
        // Show the explosion\r
        System.out.println("\\nCall counts for different n:");\r
        for (int i = 1; i <= 10; i++) {\r
            callCount = 0;\r
            maxDepth = 0;\r
            fib(i);\r
            System.out.println("fib(" + i + ") → " + callCount + " calls");\r
        }\r
        System.out.println("For n=10, 2^10 = 1024, calls = " + callCount);\r
        System.out.println("For n=40, calls ≈ 2^40 = 1.1×10^12 — impossible!");\r
        System.out.println("This is why naive Fibonacci is O(2ⁿ) and impractical.");\r
        System.out.println("Memoization reduces this to O(n).");\r
    }\r
\r
    public static long fib(int n) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base cases\r
        if (n <= 1) {\r
            depth--;\r
            return n;\r
        }\r
\r
        // Binary recursion: two calls\r
        long result = fib(n - 1) + fib(n - 2);\r
        depth--;\r
        return result;\r
    }\r
\r
    private static int depth = 0;\r
}`,b=`/**\r
 * Binary Recursion: Tree Traversal\r
 * Recurrence: T(n) = 2T(n/2) + O(1), T(1) = O(1)\r
 * Time Complexity: O(n) — linear (non-overlapping subproblems)\r
 * Space Complexity: O(log n) — recursion stack depth = height of tree\r
 * \r
 * This is binary recursion without overlapping subproblems.\r
 * Each node is visited exactly once.\r
 */\r
public class TreeTraversalBinary {\r
    static class Node {\r
        int data;\r
        Node left, right;\r
        Node(int data) {\r
            this.data = data;\r
            left = right = null;\r
        }\r
    }\r
\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
    private static int visitCount = 0;\r
\r
    public static void main(String[] args) {\r
        Node root = buildTree();\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        visitCount = 0;\r
        inorder(root);\r
\r
        System.out.println("Binary Recursion: Tree Traversal");\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Number of nodes visited: " + visitCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Time: O(n), Space: O(log n) (balanced tree)");\r
\r
        // Show for a larger tree\r
        System.out.println("\\nFor a balanced tree with n nodes:");\r
        int n = 15;\r
        Node bigTree = buildBalancedTree(1, n);\r
        callCount = 0;\r
        maxDepth = 0;\r
        visitCount = 0;\r
        inorder(bigTree);\r
        System.out.println("n=" + n + " → " + visitCount + " visits, depth=" + maxDepth);\r
        System.out.println("Expected depth: log₂(" + n + ") ≈ " + (int)(Math.log(n)/Math.log(2)));\r
        System.out.println("Time is O(n) because each node is visited once.");\r
        System.out.println("Unlike Fibonacci, there are no overlapping subproblems.");\r
    }\r
\r
    public static Node buildTree() {\r
        Node root = new Node(1);\r
        root.left = new Node(2);\r
        root.right = new Node(3);\r
        root.left.left = new Node(4);\r
        root.left.right = new Node(5);\r
        root.right.left = new Node(6);\r
        root.right.right = new Node(7);\r
        return root;\r
    }\r
\r
    public static Node buildBalancedTree(int start, int end) {\r
        if (start > end) return null;\r
        int mid = start + (end - start) / 2;\r
        Node node = new Node(mid);\r
        node.left = buildBalancedTree(start, mid - 1);\r
        node.right = buildBalancedTree(mid + 1, end);\r
        return node;\r
    }\r
\r
    public static void inorder(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
\r
        // Binary recursion: two calls\r
        inorder(node.left);\r
        visitCount++;\r
        inorder(node.right);\r
        depth--;\r
    }\r
}`,g=`/**\r
 * Binary Recursion: Tower of Hanoi\r
 * Recurrence: T(n) = 2T(n-1) + O(1), T(1) = O(1)\r
 * Time Complexity: O(2ⁿ) — exponential\r
 * Space Complexity: O(n) — recursion stack depth = n\r
 * \r
 * This is binary recursion where each call makes two calls on n-1.\r
 * The number of moves is exactly 2ⁿ - 1.\r
 */\r
public class HanoiBinary {\r
    private static int moveCount = 0;\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 4;\r
\r
        System.out.println("Binary Recursion: Tower of Hanoi");\r
        System.out.println("Number of disks: " + n);\r
        System.out.println("Solving Tower of Hanoi...\\n");\r
\r
        moveCount = 0;\r
        callCount = 0;\r
        maxDepth = 0;\r
        hanoi(n, 'A', 'C', 'B');\r
\r
        System.out.println("\\nTotal moves: " + moveCount);\r
        System.out.println("Expected moves: " + ((1 << n) - 1) + " (2^" + n + " - 1)");\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Time: O(2ⁿ), Space: O(n)");\r
\r
        // Show growth\r
        System.out.println("\\nMoves for different n:");\r
        for (int i = 1; i <= 10; i++) {\r
            moveCount = 0;\r
            hanoi(i, 'A', 'C', 'B');\r
            System.out.println("n=" + i + " → " + moveCount + " moves");\r
        }\r
        System.out.println("\\nFor n=64, moves = 2^64 - 1 ≈ 1.84×10^19 moves.");\r
        System.out.println("Even at 1 billion moves/second, it would take over 580 years!");\r
        System.out.println("This is why Tower of Hanoi is O(2ⁿ) — exponential time.");\r
    }\r
\r
    public static void hanoi(int n, char source, char target, char auxiliary) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base case: one disk\r
        if (n == 1) {\r
            moveCount++;\r
            // Uncomment to see moves:\r
            // System.out.println("  Move disk 1 from " + source + " to " + target);\r
            depth--;\r
            return;\r
        }\r
\r
        // Binary recursion: two calls\r
        hanoi(n - 1, source, auxiliary, target);\r
        moveCount++;\r
        // System.out.println("  Move disk " + n + " from " + source + " to " + target);\r
        hanoi(n - 1, auxiliary, target, source);\r
        depth--;\r
    }\r
\r
    private static int depth = 0;\r
}`,y=[{question:"What is binary recursion?",shortAnswer:"A recursive function that makes two recursive calls per invocation.",explanation:"The calls form a binary tree structure.",hint:"Two calls per level.",level:"basic",codeExample:"// fib(n) = fib(n-1) + fib(n-2)"},{question:"What are the two types of binary recursion?",shortAnswer:"Overlapping subproblems (exponential) and non-overlapping subproblems (linear).",explanation:"Fibonacci has overlapping subproblems (O(2ⁿ)); tree traversal has non-overlapping (O(n)).",hint:"Overlapping vs non-overlapping.",level:"intermediate",codeExample:"// Fibonacci: overlapping, Tree traversal: non-overlapping"},{question:"What is the recurrence for binary recursion with overlapping subproblems?",shortAnswer:"T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)",explanation:"This is the Fibonacci recurrence.",hint:"T(n) = T(n-1) + T(n-2) + 1.",level:"intermediate",codeExample:"// T(n) = T(n-1) + T(n-2) + 1"},{question:"What is the time complexity of binary recursion with overlapping subproblems?",shortAnswer:"O(2ⁿ) — exponential time.",explanation:"The recurrence T(n) = T(n-1) + T(n-2) + O(1) solves to O(2ⁿ).",hint:"Exponential.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the recurrence for binary recursion without overlapping subproblems?",shortAnswer:"T(n) = 2T(n/2) + O(1), T(1) = O(1)",explanation:"This is the tree traversal recurrence.",hint:"2T(n/2) + 1.",level:"intermediate",codeExample:"// T(n) = 2T(n/2) + 1"},{question:"What is the time complexity of binary recursion without overlapping subproblems?",shortAnswer:"O(n) — linear time.",explanation:"The recurrence T(n) = 2T(n/2) + O(1) solves to O(n).",hint:"Linear.",level:"intermediate",codeExample:"// O(n)"},{question:"What is the space complexity of binary recursion?",shortAnswer:"O(n) — due to the recursion stack.",explanation:"The recursion depth is n in the worst case.",hint:"Depth = n.",level:"basic",codeExample:"// O(n) space"},{question:"What is an example of binary recursion with overlapping subproblems?",shortAnswer:"Naive Fibonacci.",explanation:"Fib(n) calls fib(n-1) and fib(n-2), repeating the same subproblems.",hint:"Fibonacci.",level:"basic",codeExample:"// fib(n) = fib(n-1) + fib(n-2)"},{question:"What is an example of binary recursion without overlapping subproblems?",shortAnswer:"Tree traversal (inorder, preorder, postorder).",explanation:"Each node is visited once; no subproblem is repeated.",hint:"Tree traversal.",level:"basic",codeExample:"// inorder(node) = inorder(left) + visit(node) + inorder(right)"},{question:"How does memoization help binary recursion?",shortAnswer:"It reduces overlapping subproblems from exponential to linear.",explanation:"Memoization stores computed values, so each subproblem is solved once.",hint:"Caching.",level:"intermediate",codeExample:"// memo[n] = fib(n)"},{question:"What is the time complexity of memoized Fibonacci?",shortAnswer:"O(n) — linear time.",explanation:"Each value is computed once and stored.",hint:"O(n).",level:"intermediate",codeExample:"// O(n)"},{question:"What is the space complexity of memoized Fibonacci?",shortAnswer:"O(n) — for the memo array and recursion stack.",explanation:"The memo array is O(n), and recursion stack is O(n).",hint:"O(n).",level:"intermediate",codeExample:"// O(n) space"},{question:"How many recursive calls are made for fib(n) in naive recursion?",shortAnswer:"2ⁿ - 1 calls (approximately).",explanation:"The number of calls is exponential.",hint:"2ⁿ - 1.",level:"advanced",codeExample:"// ~2ⁿ calls"},{question:"How many recursive calls are made for fib(10) in naive recursion?",shortAnswer:"177 calls.",explanation:"The number of calls is 2 * fib(11) - 1 = 2*89 - 1 = 177.",hint:"177.",level:"intermediate",codeExample:"// 177 calls"},{question:"How many recursive calls are made for fib(20) in naive recursion?",shortAnswer:"21,891 calls.",explanation:"2 * fib(21) - 1 = 2*10946 - 1 = 21,891.",hint:"21,891.",level:"advanced",codeExample:"// 21,891 calls"},{question:"What is the recurrence for Tower of Hanoi?",shortAnswer:"T(n) = 2T(n-1) + O(1), T(1) = O(1)",explanation:"Each call makes two calls on n-1 and does one move.",hint:"2T(n-1) + 1.",level:"intermediate",codeExample:"// T(n) = 2T(n-1) + 1"},{question:"What is the time complexity of Tower of Hanoi?",shortAnswer:"O(2ⁿ) — exponential time.",explanation:"T(n) = 2T(n-1) + O(1) solves to O(2ⁿ).",hint:"Exponential.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the space complexity of Tower of Hanoi?",shortAnswer:"O(n) — recursion stack depth = n.",explanation:"The depth is n, so space is O(n).",hint:"O(n).",level:"basic",codeExample:"// O(n) space"},{question:"How many moves are there in Tower of Hanoi with n disks?",shortAnswer:"2ⁿ - 1 moves.",explanation:"The number of moves is exactly 2ⁿ - 1.",hint:"2ⁿ - 1.",level:"basic",codeExample:"// moves = 2^n - 1"},{question:"What is the recurrence for binary search (recursive)?",shortAnswer:"T(n) = T(n/2) + O(1), T(1) = O(1)",explanation:"Binary search makes one call on half the input, not two.",hint:"T(n/2) + 1.",level:"basic",codeExample:"// T(n) = T(n/2) + 1"},{question:"Is binary search a binary recursion?",shortAnswer:"No, it makes only one recursive call — it's linear recursion.",explanation:"Binary search has one branch, not two.",hint:"One call.",level:"intermediate",codeExample:"// one call per level"},{question:"What is the difference between binary recursion and linear recursion?",shortAnswer:"Binary has two calls per level; linear has one call per level.",explanation:"Binary forms a tree; linear forms a chain.",hint:"Two vs one call.",level:"basic",codeExample:"// binary: 2 calls, linear: 1 call"},{question:"What is the time complexity of binary recursion with two calls on n/2?",shortAnswer:"O(n) — if work per call is constant.",explanation:"T(n) = 2T(n/2) + O(1) solves to O(n).",hint:"O(n).",level:"advanced",codeExample:"// T(n) = 2T(n/2) + 1 → O(n)"},{question:"What is the time complexity of binary recursion with two calls on n/2 and O(n) work?",shortAnswer:"O(n log n) — like merge sort.",explanation:"T(n) = 2T(n/2) + O(n) solves to O(n log n).",hint:"O(n log n).",level:"advanced",codeExample:"// T(n) = 2T(n/2) + n → O(n log n)"},{question:"What is the recurrence for binary recursion with reduction by 2?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"This is the merge sort recurrence.",hint:"2T(n/2) + n.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the time complexity of merge sort?",shortAnswer:"O(n log n) — linearithmic time.",explanation:"T(n) = 2T(n/2) + O(n) solves to O(n log n).",hint:"O(n log n).",level:"advanced",codeExample:"// O(n log n)"},{question:"What is the space complexity of merge sort?",shortAnswer:"O(n) — for the auxiliary array.",explanation:"Merge sort uses O(n) extra space for merging.",hint:"O(n).",level:"intermediate",codeExample:"// O(n) space"},{question:"What is the recurrence for binary recursion with two calls on n-1 and O(1) work?",shortAnswer:"T(n) = 2T(n-1) + O(1), T(1) = O(1) → O(2ⁿ).",explanation:"This is the Tower of Hanoi recurrence.",hint:"O(2ⁿ).",level:"advanced",codeExample:"// T(n) = 2T(n-1) + 1 → O(2ⁿ)"},{question:"What is the recurrence for binary recursion with two calls on n-1 and O(n) work?",shortAnswer:"T(n) = 2T(n-1) + O(n), T(1) = O(1) → O(n·2ⁿ).",explanation:"If each call does O(n) work, the total is O(n·2ⁿ).",hint:"O(n·2ⁿ).",level:"advanced",codeExample:"// T(n) = 2T(n-1) + n → O(n·2ⁿ)"},{question:"What is the space complexity of binary recursion with two calls on n-1?",shortAnswer:"O(n) — recursion stack depth = n.",explanation:"The depth is n, so space is O(n).",hint:"O(n).",level:"basic",codeExample:"// O(n) space"},{question:"When should you avoid binary recursion?",shortAnswer:"When it has overlapping subproblems and n is large.",explanation:"Use memoization, DP, or iteration instead.",hint:"Overlapping subproblems.",level:"intermediate",codeExample:"// Use DP for large n"},{question:"When is binary recursion appropriate?",shortAnswer:"When subproblems are independent and don't overlap (e.g., tree traversal).",explanation:"Non-overlapping subproblems give O(n) time.",hint:"Independent subproblems.",level:"intermediate",codeExample:"// tree traversal"}],B=()=>{const[i,l]=x.useState("overview"),t="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=n=>`animate-[fadeSlideUp_0.5s_ease-out_${n*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:r(t,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 49"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursion Patterns"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Binary Recursion"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Understanding ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"binary recursion"})," — where each call branches into two recursive calls, forming a tree of calls with",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:" O(2ⁿ)"})," time in the worst case."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(n=>e.jsxs("button",{onClick:()=>l(n),className:r("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",i===n?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[n==="overview"&&"📖 Overview",n==="code"&&"☕ Code Examples",n==="faq"&&"❓ FAQ"]},n))}),e.jsxs("div",{className:"space-y-12",children:[i==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is Binary Recursion?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Binary recursion"})," is a pattern where a function makes ",e.jsx("strong",{children:"two recursive calls"}),"per invocation, creating a ",e.jsx("strong",{children:"binary tree"})," of recursive calls. This is a step up from linear recursion and is typical of divide-and-conquer algorithms that split the problem into two subproblems."]}),e.jsxs("p",{children:["The recurrence for binary recursion is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = 2T(n/2) + O(1)   or   T(n) = T(n-1) + T(n-2) + O(1)"}),"The first gives ",e.jsx("strong",{children:"O(n)"})," (tree traversal), the second gives ",e.jsx("strong",{children:"O(2ⁿ)"}),"(naive Fibonacci). Both use ",e.jsx("strong",{children:"O(n)"})," space due to the recursion stack."]}),e.jsx("p",{children:"Think of it like a family tree: each person has two parents, who each have two parents, and so on. The number of ancestors doubles each generation — that's binary recursion. Alternatively, think of it like exploring both branches of a binary tree: you visit the left, then the right."})]})]}),e.jsxs("section",{className:r(t,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Key Characteristics"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:"🌳",title:"Two Recursive Calls",desc:"Each function call makes exactly two recursive calls (or zero in the base case)."},{icon:"📊",title:"Binary Tree Structure",desc:"The recursion forms a binary tree of calls."},{icon:"⏱️",title:"O(2ⁿ) or O(n) Time",desc:"Time depends on whether subproblems overlap (O(2ⁿ)) or are independent (O(n))."},{icon:"💾",title:"O(n) Space",desc:"The recursion stack depth is n, so space is O(n) in the worst case."}].map((n,a)=>e.jsxs("div",{className:r(s(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:n.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc})]},a))})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Examples"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"Algorithm"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Recurrence"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Time"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Space"})]})}),e.jsx("tbody",{children:[["Naive Fibonacci","T(n) = T(n-1) + T(n-2) + O(1)","O(2ⁿ)","O(n)"],["Tree Traversal","T(n) = 2T(n/2) + O(1)","O(n)","O(log n)"],["Tower of Hanoi","T(n) = 2T(n-1) + O(1)","O(2ⁿ)","O(n)"],["Binary Search (recursive)","T(n) = T(n/2) + O(1)","O(log n)","O(log n)"],["Divide & Conquer Max","T(n) = 2T(n/2) + O(1)","O(n)","O(log n)"]].map(([n,a,c,d],h)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-100",children:n}),e.jsx("td",{className:"px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400",children:a}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:c}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:d})]},h))})]})})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: The Binary Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Binary recursion tree",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow49",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Binary Recursion: A Tree of Calls"}),e.jsx("circle",{cx:"400",cy:"50",r:"20",fill:"#818cf8",opacity:"0.9"}),e.jsx("text",{x:"400",y:"56",textAnchor:"middle",fontSize:"11",fill:"white",fontWeight:"bold",children:"n"}),e.jsx("line",{x1:"400",y1:"70",x2:"280",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow49)"}),e.jsx("line",{x1:"400",y1:"70",x2:"520",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow49)"}),e.jsx("circle",{cx:"280",cy:"105",r:"18",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"280",y:"111",textAnchor:"middle",fontSize:"10",fill:"white",children:"n-1"}),e.jsx("circle",{cx:"520",cy:"105",r:"18",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"520",y:"111",textAnchor:"middle",fontSize:"10",fill:"white",children:"n-2"}),e.jsx("line",{x1:"280",y1:"123",x2:"210",y2:"140",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("line",{x1:"280",y1:"123",x2:"350",y2:"140",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("line",{x1:"520",y1:"123",x2:"450",y2:"140",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("line",{x1:"520",y1:"123",x2:"590",y2:"140",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("circle",{cx:"210",cy:"155",r:"15",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"210",y:"160",textAnchor:"middle",fontSize:"9",fill:"white",children:"n-2"}),e.jsx("circle",{cx:"350",cy:"155",r:"15",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"350",y:"160",textAnchor:"middle",fontSize:"9",fill:"white",children:"n-3"}),e.jsx("circle",{cx:"450",cy:"155",r:"15",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"450",y:"160",textAnchor:"middle",fontSize:"9",fill:"white",children:"n-3"}),e.jsx("circle",{cx:"590",cy:"155",r:"15",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"590",y:"160",textAnchor:"middle",fontSize:"9",fill:"white",children:"n-4"}),e.jsx("text",{x:"400",y:"210",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"… (exponential growth)"}),e.jsx("text",{x:"400",y:"245",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Number of calls doubles at each level → 2ⁿ calls total"}),e.jsx("text",{x:"400",y:"270",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Depth = n → O(n) stack space"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Binary recursion creates a binary tree of calls. The number of calls grows exponentially (2ⁿ), but the depth is n (O(n) space)."})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50/60 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("p",{className:"font-semibold text-red-600 dark:text-red-400",children:"Exponential (Overlapping)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n-1) + T(n-2) + O(1),   T(0)=T(1)=O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:"O(2ⁿ)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:"Example: Naive Fibonacci"})]}),e.jsxs("div",{className:"bg-emerald-50/60 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Linear (Non-overlapping)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = 2T(n/2) + O(1),   T(1) = O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:"Example: Tree Traversal"})]})]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Both use ",e.jsx("span",{className:"font-mono",children:"O(n)"})," space for the recursion stack."]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Genealogy (Family Tree):"})," ","Each person has two parents (binary recursion). The number of ancestors doubles each generation."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Binary Tree Traversal:"})," ","Exploring a binary tree: visit left subtree, visit right subtree."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," are exploring all possible paths in a binary decision tree. Each decision branches into two options — that's binary recursion."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Game Trees:"})," ","In chess, each position branches into many moves, but a binary decision tree is a simplified version where each position has two options."]})})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use memoization for overlapping subproblems",desc:"Naive Fibonacci (O(2ⁿ)) can be reduced to O(n) with memoization."},{tip:"Understand the difference between overlapping and non-overlapping",desc:"Tree traversal is O(n) because subproblems don't overlap; Fibonacci is O(2ⁿ) because they do."},{tip:"Space is O(n) for both types",desc:"The recursion depth is n for both, so space is linear."},{tip:"Use iteration or DP when possible",desc:"For Fibonacci, iteration is O(n) time and O(1) space."}].map((n,a)=>e.jsxs("div",{className:r(s(a+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",n.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc})]},a))})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing overlapping and non-overlapping subproblems:"})," Tree traversal is O(n) because each node is visited once. Fibonacci is O(2ⁿ) because the same subproblems are recomputed many times."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the exponential time in Fibonacci:"})," Many beginners think Fibonacci is O(n) because it looks simple. It's actually O(2ⁿ) — a huge difference."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case:"})," Binary recursion requires two base cases (n=0 and n=1 for Fibonacci, or n=1 for tree traversal)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming space is also exponential:"})," Space is O(n) for both types because only one path is explored at a time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using memoization for overlapping subproblems:"})," Memoization turns O(2ⁿ) into O(n) for Fibonacci.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Abhronila"})," once ran fib(40) and waited 5 minutes. She learned about memoization and got the answer instantly."]})]})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use memoization"})," for overlapping subproblems to reduce exponential time to polynomial."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative DP"})," for O(1) space when possible."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Identify the recursion type"})," — overlapping or non-overlapping — to determine the correct complexity."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document the recurrence"})," in comments to explain the complexity."]})})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you identify binary recursion in code?","✅ Do you know the two types (overlapping and non-overlapping)?","✅ Do you know the time complexity for each type?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you implement binary recursion with correct base cases?","✅ Can you use memoization for overlapping subproblems?"].map((n,a)=>e.jsx("div",{className:r(s(a+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:n},a))})]}),e.jsxs("section",{className:r(t,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For naive Fibonacci, how many calls are made for fib(5)? 15 calls. For fib(10), 177 calls. For fib(30), 2.6 million calls. That's exponential growth!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you add memoization to Fibonacci? The number of calls becomes O(n) — a huge improvement!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a binary tree of decisions for scheduling. Traversing the entire tree visits each node once (O(n)), but exploring all paths (like Fibonacci) would be exponential."]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Recursion — Naive Fibonacci (O(2ⁿ))"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Classic binary recursion with overlapping subproblems — O(2ⁿ) time, O(n) space."}),e.jsx(o,{fileModule:u,title:"FibonacciBinary.java",highlightLines:[]})]}),e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Recursion — Tree Traversal (O(n))"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Binary recursion without overlapping subproblems — O(n) time, O(n) space."}),e.jsx(o,{fileModule:b,title:"TreeTraversalBinary.java",highlightLines:[]})]}),e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Recursion — Tower of Hanoi (O(2ⁿ))"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Binary recursion with two calls on n-1 — O(2ⁿ) time, O(n) space."}),e.jsx(o,{fileModule:g,title:"HanoiBinary.java",highlightLines:[]})]})]}),i==="faq"&&e.jsx("div",{className:r(t,"space-y-4"),children:e.jsx(p,{title:"Binary Recursion — FAQs",questions:y})})]}),e.jsx("div",{className:r(t,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(m,{note:`Binary recursion is a powerful pattern, but students often confuse the two types: overlapping and 
              non-overlapping subproblems. I emphasize that tree traversal is O(n) because each node is visited once, 
              while Fibonacci is O(2ⁿ) because of repeated work. This is the perfect lead-in to memoization and 
              dynamic programming. Show students the call tree for fib(5) and then fib(10) to visualize the explosion. 
              Also, remind them that space is O(n) for both because the recursion stack depth is linear. 
              Binary recursion is the foundation of many important algorithms, from sorting to graph traversal.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 49 · Binary Recursion · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{B as default};

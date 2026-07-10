import{r as x,j as e}from"./index-DKhGj2r9.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as p}from"./TeacherSukantaHui-C0AXZMBk.js";import{F as u}from"./FAQTemplate-DNMa4yDj.js";import{J as l}from"./JavaFileLoader-DwhOVPk0.js";import"./github-BlE0UCNo.js";import"./createLucideIcon-DZ4EMxs8.js";import"./git-branch-BCLsXsvv.js";import"./JavaCodeBlock-BDo80ffG.js";import"./prism-CMJExfNS.js";import"./browser-DA-_IcxN.js";import"./prism-java-BwO6k4I_.js";const g=`import java.util.ArrayList;\r
import java.util.List;\r
\r
/**\r
 * Generates all permutations of an array — O(n!) time.\r
 * For n elements, there are n! permutations.\r
 */\r
public class PermutationGeneration {\r
    private static int permutationCount = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {1, 2, 3, 4}; // n=4 → 4! = 24 permutations\r
        System.out.println("Generating all permutations of: " + arrayToString(arr));\r
        System.out.println("Expected permutations: " + factorial(arr.length));\r
\r
        long start = System.nanoTime();\r
        List<int[]> permutations = generatePermutations(arr);\r
        long end = System.nanoTime();\r
\r
        System.out.println("Total permutations generated: " + permutations.size());\r
        System.out.println("Time: " + (end - start) + " ns");\r
        System.out.println("Time complexity: O(n!)");\r
\r
        // Show a few permutations\r
        System.out.println("\\nFirst 5 permutations:");\r
        for (int i = 0; i < Math.min(5, permutations.size()); i++) {\r
            int[] p = permutations.get(i);\r
            System.out.println("  " + arrayToString(p));\r
        }\r
        if (permutations.size() > 5) {\r
            System.out.println("  ...");\r
        }\r
\r
        // Show growth\r
        System.out.println("\\nNumber of permutations for different n:");\r
        for (int i = 1; i <= 10; i++) {\r
            System.out.println("n=" + i + " → " + factorial(i) + " permutations");\r
        }\r
        System.out.println("For n=10, 10! ≈ 3.6 million permutations — still feasible.");\r
        System.out.println("For n=20, 20! ≈ 2.4 × 10^18 permutations — impossible.");\r
    }\r
\r
    public static List<int[]> generatePermutations(int[] arr) {\r
        List<int[]> result = new ArrayList<>();\r
        permutationCount = 0;\r
        boolean[] used = new boolean[arr.length];\r
        int[] current = new int[arr.length];\r
        generate(arr, used, current, 0, result);\r
        return result;\r
    }\r
\r
    private static void generate(int[] arr, boolean[] used, int[] current, int pos, List<int[]> result) {\r
        if (pos == arr.length) {\r
            result.add(current.clone());\r
            permutationCount++;\r
            return;\r
        }\r
        for (int i = 0; i < arr.length; i++) {\r
            if (!used[i]) {\r
                used[i] = true;\r
                current[pos] = arr[i];\r
                generate(arr, used, current, pos + 1, result);\r
                used[i] = false;\r
            }\r
        }\r
    }\r
\r
    public static long factorial(int n) {\r
        long result = 1;\r
        for (int i = 2; i <= n; i++) result *= i;\r
        return result;\r
    }\r
\r
    public static String arrayToString(int[] arr) {\r
        StringBuilder sb = new StringBuilder("[");\r
        for (int i = 0; i < arr.length; i++) {\r
            sb.append(arr[i]);\r
            if (i < arr.length - 1) sb.append(", ");\r
        }\r
        sb.append("]");\r
        return sb.toString();\r
    }\r
}`,f=`/**\r
 * Demonstrates factorial growth compared to exponential and quadratic growth.\r
 * Shows why O(n!) is the worst common complexity.\r
 */\r
public class FactorialTimeDemo {\r
    public static void main(String[] args) {\r
        System.out.println("n\\t\\tn²\\t\\t2ⁿ\\t\\tn!\\t\\tfeasible?");\r
        System.out.println("---------------------------------------------------------------");\r
\r
        for (int n = 1; n <= 12; n++) {\r
            long nSquared = (long)n * n;\r
            long twoPowN = 1L << n; // 2^n\r
            long factorial = factorial(n);\r
\r
            String feasible;\r
            if (n <= 7) feasible = "✅ instant";\r
            else if (n <= 10) feasible = "⚡ feasible";\r
            else feasible = "❌ impossible";\r
\r
            System.out.printf("%d\\t\\t%d\\t\\t%d\\t\\t%d\\t\\t%s\\n",\r
                n, nSquared, twoPowN, factorial, feasible);\r
        }\r
\r
        System.out.println("\\nFor n=20, 20! ≈ 2.4 × 10^18 — this is more than the number of");\r
        System.out.println("seconds since the Big Bang (~10^17 seconds).");\r
        System.out.println("This is why O(n!) is considered 'intractable'.");\r
    }\r
\r
    public static long factorial(int n) {\r
        long result = 1;\r
        for (int i = 2; i <= n; i++) result *= i;\r
        return result;\r
    }\r
}`,b=`/**\r
 * Traveling Salesman Problem — Brute Force (O(n!))\r
 * Tries all possible routes (permutations) to find the shortest path.\r
 * Only feasible for n ≤ 10.\r
 */\r
public class TSPBruteForce {\r
    private static int bestDistance = Integer.MAX_VALUE;\r
    private static int[] bestRoute;\r
\r
    public static void main(String[] args) {\r
        // Distance matrix (symmetric) for 5 cities\r
        int[][] dist = {\r
            {0, 10, 15, 20, 25},\r
            {10, 0, 35, 25, 30},\r
            {15, 35, 0, 30, 20},\r
            {20, 25, 30, 0, 40},\r
            {25, 30, 20, 40, 0}\r
        };\r
\r
        int n = dist.length;\r
        System.out.println("TSP Brute Force (O(n!))");\r
        System.out.println("Number of cities: " + n);\r
        System.out.println("Expected routes: " + factorial(n) + " permutations");\r
\r
        long start = System.nanoTime();\r
        int[] cities = new int[n];\r
        for (int i = 0; i < n; i++) cities[i] = i;\r
        boolean[] used = new boolean[n];\r
        int[] current = new int[n];\r
        bestDistance = Integer.MAX_VALUE;\r
        bestRoute = null;\r
\r
        permute(dist, cities, used, current, 0);\r
\r
        long end = System.nanoTime();\r
\r
        System.out.println("Best distance: " + bestDistance);\r
        System.out.print("Best route: ");\r
        if (bestRoute != null) {\r
            for (int city : bestRoute) System.out.print(city + " ");\r
            System.out.println();\r
        }\r
        System.out.println("Time: " + (end - start) + " ns");\r
        System.out.println("Time complexity: O(n!)");\r
\r
        // Show growth\r
        System.out.println("\\nRoutes for different n:");\r
        for (int i = 1; i <= 10; i++) {\r
            System.out.println("n=" + i + " → " + factorial(i) + " routes");\r
        }\r
        System.out.println("For n=10, 10! = 3.6 million routes — still feasible.");\r
        System.out.println("For n=15, 15! ≈ 1.3 × 10^12 routes — too many.");\r
    }\r
\r
    public static void permute(int[][] dist, int[] cities, boolean[] used, int[] current, int pos) {\r
        if (pos == cities.length) {\r
            // Calculate total distance\r
            int total = 0;\r
            for (int i = 0; i < cities.length - 1; i++) {\r
                total += dist[current[i]][current[i + 1]];\r
            }\r
            // Return to start\r
            total += dist[current[cities.length - 1]][current[0]];\r
            if (total < bestDistance) {\r
                bestDistance = total;\r
                bestRoute = current.clone();\r
            }\r
            return;\r
        }\r
\r
        for (int i = 0; i < cities.length; i++) {\r
            if (!used[i]) {\r
                used[i] = true;\r
                current[pos] = cities[i];\r
                permute(dist, cities, used, current, pos + 1);\r
                used[i] = false;\r
            }\r
        }\r
    }\r
\r
    public static long factorial(int n) {\r
        long result = 1;\r
        for (int i = 2; i <= n; i++) result *= i;\r
        return result;\r
    }\r
}`,y=[{question:"What does O(n!) mean in time complexity?",shortAnswer:"Factorial time — the runtime grows as n! (n factorial).",explanation:"n! = n × (n-1) × ... × 1. It grows even faster than 2ⁿ and is the worst common complexity.",hint:"Think of all permutations of n elements.",level:"basic",codeExample:"// generating all permutations"},{question:"What is an example of an O(n!) algorithm?",shortAnswer:"Brute-force Traveling Salesman Problem (TSP), generating all permutations.",explanation:"These algorithms try every possible ordering of n elements.",hint:"Permutation problems.",level:"basic",codeExample:"// TSP brute force"},{question:"How many permutations of n items are there?",shortAnswer:"n! permutations.",explanation:"There are n choices for the first position, (n-1) for the second, etc.",hint:"Factorial.",level:"basic",codeExample:"// n! permutations"},{question:"Why is O(n!) worse than O(2ⁿ)?",shortAnswer:"Because n! grows faster than 2ⁿ for n > 3.",explanation:"For n=10, 2¹⁰=1024, 10!≈3.6×10⁶. For larger n, the gap widens.",hint:"Compare growth rates.",level:"intermediate",codeExample:"// n! >> 2^n for large n"},{question:"What is the time complexity of generating all permutations of an array?",shortAnswer:"O(n!) — factorial time.",explanation:"There are n! permutations to generate.",hint:"All arrangements.",level:"intermediate",codeExample:"// all permutations O(n!)"},{question:"Is O(n!) feasible for n=10?",shortAnswer:"Yes, 10! = 3,628,800 — manageable.",explanation:"3.6 million operations is feasible in a fraction of a second.",hint:"10! ≈ 3.6 million.",level:"basic",codeExample:"// 10! = 3,628,800"},{question:"Is O(n!) feasible for n=20?",shortAnswer:"No, 20! ≈ 2.4 × 10¹⁸ — impossible.",explanation:"2.4 quintillion operations is far beyond any computer's capability.",hint:"Astronomically large.",level:"intermediate",codeExample:"// 20! = 2.43e18"},{question:"What is the time complexity of the brute-force TSP?",shortAnswer:"O(n!) — factorial time.",explanation:"There are n! possible routes to check.",hint:"All permutations of cities.",level:"intermediate",codeExample:"// TSP brute force O(n!)"},{question:"Can DP improve TSP complexity?",shortAnswer:"Yes, DP gives O(n²·2ⁿ), which is still exponential but better than O(n!).",explanation:"DP stores states of subsets, reducing the search space.",hint:"Held-Karp algorithm.",level:"advanced",codeExample:"// DP TSP O(n²·2ⁿ)"},{question:"What is the time complexity of the n-queens problem (backtracking)?",shortAnswer:"O(n!) in the worst case.",explanation:"Backtracking can explore all placements, which is O(n!).",hint:"Worst-case.",level:"advanced",codeExample:"// n-queens worst O(n!)"},{question:"What is the time complexity of the assignment problem (brute force)?",shortAnswer:"O(n!) — trying all assignments.",explanation:"There are n! ways to assign n tasks to n workers.",hint:"All matchings.",level:"advanced",codeExample:"// assignment brute force O(n!)"},{question:"What is the time complexity of determinant (naive Laplace expansion)?",shortAnswer:"O(n!) — factorial time.",explanation:"Laplace expansion recursively computes determinants in O(n!) time.",hint:"Naive determinant.",level:"advanced",codeExample:"// determinant O(n!)"},{question:"How does factorial growth compare to exponential growth for n=5?",shortAnswer:"5! = 120, 2⁵ = 32 — factorial is larger.",explanation:"Factorial overtakes exponential at n=4? 4! = 24, 2⁴ = 16. For n≥4, n! > 2ⁿ.",hint:"Factorial wins.",level:"basic",codeExample:"// 5! = 120 > 32"},{question:"Can O(n!) algorithms be parallelized effectively?",shortAnswer:"Not effectively; parallelization gives a constant factor speedup, not exponential.",explanation:"Even with 1000 processors, you can only handle slightly larger n.",hint:"Limited improvement.",level:"advanced",codeExample:"// Not a solution."},{question:"What is the time complexity of the traveling salesman problem using DP?",shortAnswer:"O(n²·2ⁿ) — still exponential, but much better than O(n!).",explanation:"Held-Karp algorithm is O(n²·2ⁿ).",hint:"DP TSP.",level:"advanced",codeExample:"// O(n²·2ⁿ)"},{question:"What is the space complexity of DP TSP?",shortAnswer:"O(n·2ⁿ) — stores DP table for all subsets.",explanation:"The table size is n × 2ⁿ.",hint:"Space is exponential.",level:"advanced",codeExample:"// O(n·2ⁿ)"},{question:"Why do we study O(n!) if it's so impractical?",shortAnswer:"To understand the limits of brute-force and to motivate better algorithms.",explanation:"Knowing O(n!) helps us recognize when we need heuristics or approximations.",hint:"Motivation for optimization.",level:"basic",codeExample:"// Educational purpose."},{question:"What is the time complexity of finding the shortest Hamiltonian path (brute force)?",shortAnswer:"O(n!) — same as TSP.",explanation:"You need to try all permutations of vertices.",hint:"All paths.",level:"advanced",codeExample:"// Hamiltonian path O(n!)"},{question:"What is the time complexity of generating all permutations with duplicates?",shortAnswer:"O(n!) in the worst case, but fewer if duplicates exist.",explanation:"Duplicates reduce the number of unique permutations.",hint:"Unique permutations.",level:"intermediate",codeExample:"// fewer if duplicates"},{question:"Can O(n!) be reduced to O(n·2ⁿ) for TSP?",shortAnswer:"Yes, using DP (Held-Karp).",explanation:"DP trades space for time.",hint:"DP optimization.",level:"advanced",codeExample:"// Held-Karp"},{question:"What is the time complexity of the brute-force subset sum?",shortAnswer:"O(2ⁿ) — exponential, not factorial.",explanation:"Subset sum checks all subsets (2ⁿ), not permutations.",hint:"Subsets not permutations.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the time complexity of the brute-force knapsack?",shortAnswer:"O(2ⁿ) — exponential.",explanation:"Checks all subsets of items.",hint:"Subsets.",level:"intermediate",codeExample:"// O(2ⁿ)"},{question:"What is the time complexity of the traveling salesman with nearest neighbor heuristic?",shortAnswer:"O(n²) — polynomial.",explanation:"Heuristic algorithms are polynomial and give good approximations.",hint:"Approximation.",level:"advanced",codeExample:"// O(n²)"},{question:"Can we solve TSP for n=100 exactly?",shortAnswer:"No, exact solution is impossible for n=100 with current algorithms.",explanation:"TSP is NP-hard; exact solution requires exponential time.",hint:"NP-hard.",level:"advanced",codeExample:"// Not possible."},{question:"What is the time complexity of the Hungarian algorithm for assignment?",shortAnswer:"O(n³) — polynomial.",explanation:"The Hungarian algorithm solves the assignment problem in polynomial time.",hint:"Assignment solved in O(n³).",level:"advanced",codeExample:"// Hungarian O(n³)"},{question:"Why is O(n!) considered intractable?",shortAnswer:"Because it grows faster than any polynomial and even faster than 2ⁿ.",explanation:"For n=30, 30! ≈ 2.6×10³² — impossible.",hint:"Unimaginably large.",level:"basic",codeExample:"// intractable"},{question:"What is the time complexity of the brute-force graph coloring?",shortAnswer:"O(kⁿ) — where k is the number of colors. For k=2, it's O(2ⁿ) — exponential, not factorial.",explanation:"Graph coloring checks kⁿ assignments, not permutations.",hint:"Not factorial.",level:"advanced",codeExample:"// O(kⁿ)"},{question:"What is the time complexity of the naive determinant using Cramer's rule?",shortAnswer:"O(n! · n²) — worse.",explanation:"Cramer's rule involves n+1 determinants, each O(n!), so O(n!·n²).",hint:"Even worse.",level:"advanced",codeExample:"// O(n!·n²)"},{question:"How many seconds would it take to compute 15! operations at 1 GHz?",shortAnswer:"15! ≈ 1.3×10¹² operations. At 1 GHz (10⁹ ops/s), it would take ~1300 seconds ≈ 22 minutes.",explanation:"15! is feasible, but 20! is not.",hint:"Calculate.",level:"intermediate",codeExample:"// 15! ≈ 1.3e12"},{question:"What is the time complexity of the brute-force n-queens?",shortAnswer:"O(n!) in the worst case.",explanation:"The backtracking algorithm can explore all placements in the worst case.",hint:"Worst-case.",level:"advanced",codeExample:"// O(n!)"},{question:"What is the time complexity of the traveling salesman with branch and bound?",shortAnswer:"Usually much less than O(n!) in practice, but worst-case is O(n!).",explanation:"Branch and bound prunes many branches, but worst-case is still factorial.",hint:"Pruning.",level:"advanced",codeExample:"// Branch and bound"}],q=()=>{const[s,c]=x.useState("overview"),n="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(n,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 26"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Complexity Classes"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"O(n!) – Factorial Time"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["The ",e.jsx("span",{className:"text-red-600 dark:text-red-400 font-semibold",children:"worst of the worst"})," — algorithms that grow faster than exponential, only feasible for the tiniest inputs."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>c(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",s===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[s==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," What is O(n!) – Factorial Time?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"O(n!)"}),` — pronounced "order n factorial" — means the algorithm's runtime grows as the `,e.jsx("strong",{children:"factorial"})," of the input size: n! = n × (n-1) × (n-2) × ... × 1. This is the ",e.jsx("strong",{children:"worst"})," of all common complexity classes, growing even faster than exponential (2ⁿ)."]}),e.jsxs("p",{children:["Factorial time algorithms typically involve ",e.jsx("strong",{children:"generating all permutations"})," of a set, or solving problems by ",e.jsx("strong",{children:"trying every possible ordering"}),". Classic examples include the brute-force Traveling Salesman Problem (TSP), generating all permutations of an array, and the n-queens problem (in the worst case)."]}),e.jsx("p",{children:"Think of it like arranging books on a shelf: for 5 books, there are 120 arrangements. For 10 books, there are 3,628,800 arrangements. For 20 books, there are over 2.4 × 10¹⁸ — more than the number of seconds since the Big Bang! That's factorial growth."})]})]}),e.jsxs("section",{className:t(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Common O(n!) Operations"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:"🔀",title:"Permutation Generation",desc:"Generating all possible orderings of n elements — exactly n! permutations.",example:"for each permutation of {1,2,...,n}"},{icon:"🗺️",title:"Traveling Salesman (Brute Force)",desc:"Checking all possible routes (n! permutations) to find the shortest.",example:"bruteForceTSP(distances);"},{icon:"👑",title:"N-Queens (Worst Case)",desc:"Backtracking can be O(n!) in the worst case (all placements).",example:"nQueens(n);"},{icon:"🧩",title:"Assignment Problem (Brute Force)",desc:"Trying all possible assignments of n tasks to n workers.",example:"allAssignments();"},{icon:"🔢",title:"Determinant Calculation (Naive)",desc:"Naive determinant using Laplace expansion is O(n!).",example:"determinant(matrix);"},{icon:"🧮",title:"Brute-force Search in Permutation Space",desc:"Problems that require checking all possible orderings.",example:"allHamiltonianPaths();"}].map((r,a)=>e.jsxs("div",{className:t(i(a),"p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40","transition-all duration-300 hover:shadow-md hover:border-red-300 dark:hover:border-red-700"),children:[e.jsx("div",{className:"text-2xl mb-1",children:r.icon}),e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-100",children:r.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc}),e.jsx("p",{className:"text-xs font-mono text-red-600 dark:text-red-400 mt-1",children:r.example})]},a))})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Visual Intuition: Factorial Explosion"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Factorial growth",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow26",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsxs("g",{stroke:"#d1d5db",strokeWidth:"0.5",opacity:"0.3",className:"dark:stroke-gray-700",children:[e.jsx("line",{x1:"60",y1:"50",x2:"760",y2:"50"}),e.jsx("line",{x1:"60",y1:"100",x2:"760",y2:"100"}),e.jsx("line",{x1:"60",y1:"150",x2:"760",y2:"150"}),e.jsx("line",{x1:"60",y1:"200",x2:"760",y2:"200"}),e.jsx("line",{x1:"60",y1:"250",x2:"760",y2:"250"}),e.jsx("line",{x1:"60",y1:"50",x2:"60",y2:"300"}),e.jsx("line",{x1:"207",y1:"50",x2:"207",y2:"300"}),e.jsx("line",{x1:"354",y1:"50",x2:"354",y2:"300"}),e.jsx("line",{x1:"501",y1:"50",x2:"501",y2:"300"}),e.jsx("line",{x1:"648",y1:"50",x2:"648",y2:"300"})]}),e.jsx("line",{x1:"60",y1:"280",x2:"760",y2:"280",stroke:"#374151",strokeWidth:"2",className:"dark:stroke-gray-400"}),e.jsx("line",{x1:"60",y1:"50",x2:"60",y2:"280",stroke:"#374151",strokeWidth:"2",className:"dark:stroke-gray-400"}),e.jsx("text",{x:"400",y:"310",textAnchor:"middle",fontSize:"13",fill:"#6b7280",className:"dark:fill-gray-400",children:"n"}),e.jsx("text",{x:"20",y:"180",textAnchor:"middle",fontSize:"13",fill:"#6b7280",className:"dark:fill-gray-400",transform:"rotate(-90,20,180)",children:"Operations"}),e.jsx("path",{d:"M60 270 L80 265 L100 255 L120 235 L140 200 L160 150 L180 90 L200 55 L220 50 L240 50 L260 50 L280 50 L300 50 L320 50 L340 50 L360 50 L380 50 L400 50 L420 50 L440 50 L460 50 L480 50 L500 50 L520 50 L540 50 L560 50 L580 50 L600 50 L620 50 L640 50 L660 50 L680 50 L700 50 L720 50 L740 50 L760 50",fill:"none",stroke:"#f87171",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"8 4"}),e.jsx("text",{x:"770",y:"55",fontSize:"12",fill:"#f87171",fontWeight:"bold",children:"O(n!)"}),e.jsxs("circle",{cx:"300",cy:"55",r:"8",fill:"#f87171",children:[e.jsx("animate",{attributeName:"cx",values:"60;700;60",dur:"6s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"cy",values:"270;50;270",dur:"6s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"80",y:"275",fontSize:"10",fill:"#6b7280",children:"n=1"}),e.jsx("text",{x:"110",y:"260",fontSize:"10",fill:"#6b7280",children:"n=2"}),e.jsx("text",{x:"140",y:"235",fontSize:"10",fill:"#6b7280",children:"n=3"}),e.jsx("text",{x:"180",y:"195",fontSize:"10",fill:"#6b7280",children:"n=4"}),e.jsx("text",{x:"220",y:"100",fontSize:"10",fill:"#6b7280",children:"n=5"}),e.jsx("text",{x:"260",y:"60",fontSize:"10",fill:"#6b7280",children:"n=6"}),e.jsx("text",{x:"320",y:"55",fontSize:"10",fill:"#6b7280",children:"n≥7"}),e.jsx("path",{d:"M60 270 L760 50 L760 280 L60 280 Z",fill:"url(#factGrad)",opacity:"0.15"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"factGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#f87171",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#f87171",stopOpacity:"0.0"})]})})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"O(n!) grows even faster than O(2ⁿ). For n=10, 10! ≈ 3.6 × 10⁶, while 2¹⁰ = 1024. For n=20, 20! ≈ 2.4 × 10¹⁸ — astronomical. Factorial algorithms are only useful for n ≤ 10."})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Comparison: n! vs 2ⁿ vs n²"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"n"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"n²"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"2ⁿ"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"n!"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Feasibility"})]})}),e.jsx("tbody",{children:[["1","1","2","1","Instant"],["3","9","8","6","Instant"],["5","25","32","120","Instant"],["7","49","128","5040","Instant"],["10","100","1024","3,628,800","~0.1s"],["12","144","4096","479,001,600","~1s"],["15","225","32,768","1.3×10¹²","~1 day"],["20","400","1,048,576","2.4×10¹⁸","Impossible"]].map(([r,a,d,m,h],o)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-mono",children:r}),e.jsx("td",{className:"px-4 py-2 font-mono",children:a}),e.jsx("td",{className:"px-4 py-2 font-mono",children:d}),e.jsx("td",{className:"px-4 py-2 font-mono",children:m}),e.jsx("td",{className:t("px-4 py-2",o<4?"text-emerald-600 dark:text-emerald-400":o<6?"text-amber-600 dark:text-amber-400":"text-red-600 dark:text-red-400"),children:h})]},o))})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Factorial time is the worst common complexity. For n > 10, it becomes infeasible quickly."})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-red-600 dark:text-red-400",children:"Traveling Salesman:"})," ","A salesman must visit 10 cities and wants the shortest route. Brute force checking all 10! = 3.6 million routes — feasible once. For 20 cities, 20! ≈ 2.4 × 10¹⁸ — impossible."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-red-600 dark:text-red-400",children:"DNA Sequencing:"})," ","Trying all possible orderings of DNA fragments to assemble a sequence — for 10 fragments, 10! = 3.6 million possibilities; for 20, it's impossible."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-red-600 dark:text-red-400",children:"Scheduling:"})," ","Assigning 15 employees to 15 different shifts by trying all assignments — 15! = 1.3 × 10¹² possibilities — too many."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-red-600 dark:text-red-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Debangshu"})," wants to arrange 10 students in a line for a photo. There are 10! = 3.6 million arrangements. If he tries them all, it'll take a while!"]})})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Avoid O(n!) at all costs",desc:"For n > 10, O(n!) is completely infeasible. Look for better algorithms."},{tip:"Use approximation algorithms",desc:"For TSP, use heuristics like nearest neighbor or genetic algorithms."},{tip:"Use dynamic programming for TSP",desc:"The DP solution for TSP is O(n²·2ⁿ), which is better than O(n!) for large n."},{tip:"Consider branch and bound",desc:"Prune branches that cannot lead to a better solution, reducing effective search space."}].map((r,a)=>e.jsxs("div",{className:t(i(a+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-red-300 dark:hover:border-red-700"),children:[e.jsxs("p",{className:"font-semibold text-red-600 dark:text-red-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},a))})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Underestimating factorial growth:"})," 20! ≈ 2.4 × 10¹⁸ — that's 2.4 quintillion. For perspective, there are about 10¹⁷ seconds since the Big Bang. 20! is 24 times that!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing n! with 2ⁿ:"})," n! grows much faster. For n=10, 2¹⁰=1024, 10!=3.6×10⁶. For n=20, 2²⁰≈1×10⁶, 20!≈2.4×10¹⁸."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using O(n!) when O(n·2ⁿ) is possible:"})," DP for TSP reduces complexity from O(n!) to O(n²·2ⁿ), which is still exponential but much better."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming recursion for permutations is always O(n!):"})," It is O(n!) for generating all permutations, but you can often avoid generating all by using heuristics."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using pruning:"})," In backtracking algorithms, pruning can reduce the effective complexity significantly, sometimes making them feasible for n=20 or more.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Swadeep"})," once tried to generate all permutations of 15 elements and ran out of memory. He learned to use backtracking with pruning instead."]})]})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Avoid generating all permutations"})," — use backtracking with pruning instead."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use dynamic programming"})," for combinatorial optimization (e.g., TSP)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use approximation algorithms"})," when exact solutions are not required."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use branch and bound"})," to prune the search space in backtracking."]})})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you identify O(n!) algorithms (permutation problems)?","✅ Do you know the classic examples (TSP, permutations, n-queens)?","✅ Do you understand why O(n!) is even worse than O(2ⁿ)?","✅ Can you distinguish O(n!) from O(2ⁿ) and O(n²)?","✅ Do you know when O(n!) is feasible (n ≤ 10)?","✅ Can you think of better alternatives (DP, heuristics, pruning)?"].map((r,a)=>e.jsx("div",{className:t(i(a+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},a))})]}),e.jsxs("section",{className:t(n,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," 5! = 120, 6! = 720, 7! = 5040. How does the growth compare to doubling? 2⁵ = 32, 2⁶ = 64, 2⁷ = 128. Factorial is much faster!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you use dynamic programming for TSP instead of brute force? The complexity becomes O(n²·2ⁿ), which is still exponential but much better than O(n!)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 8 students. The principal wants to arrange them in all possible ways for a group photo. That's 8! = 40,320 arrangements. Feasible! But for 15 students, it's 1.3 trillion arrangements — impossible."]})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Permutation Generation — O(n!) Time"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Generates all permutations of an array. There are exactly n! permutations."}),e.jsx(l,{fileModule:g,title:"PermutationGeneration.java",highlightLines:[]})]}),e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Factorial Time Demo — Growth Comparison"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares factorial growth with exponential and quadratic growth for various n."}),e.jsx(l,{fileModule:f,title:"FactorialTimeDemo.java",highlightLines:[]})]}),e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Traveling Salesman (Brute Force) — O(n!)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Brute-force solution for TSP that tries all permutations of cities — O(n!) time."}),e.jsx(l,{fileModule:b,title:"TSPBruteForce.java",highlightLines:[]})]})]}),s==="faq"&&e.jsx("div",{className:t(n,"space-y-4"),children:e.jsx(u,{title:"O(n!) – Factorial Time — FAQs",questions:y})})]}),e.jsx("div",{className:t(n,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(p,{note:"O(n!) is the worst-case complexity you'll encounter in algorithm analysis. I tell my students: 'If you see n!, run away!' But seriously, understanding factorial growth is important because it demonstrates why we need better algorithms. The Traveling Salesman Problem is the classic example — brute force is O(n!), but with dynamic programming it's O(n²·2ⁿ), and with heuristics it's even better. Have students calculate 10! and compare it to 2¹⁰ and 10². They'll see the astronomical difference. Also, emphasize that for n > 10, O(n!) is completely impractical, so we must use approximation or heuristic methods. This topic is a great lead-in to discussions about NP-hard problems."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 26 · O(n!) – Factorial Time · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{q as default};

import{r as c,j as e}from"./index-Czk7a0H9.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-ClLEdT_L.js";import{F as h}from"./FAQTemplate-C1oyb7Bv.js";import{J as o}from"./JavaFileLoader-D5YquA0o.js";import"./git-branch-2vfSWSZD.js";import"./JavaCodeBlock-CySzL3ZH.js";import"./prism-IyxSUpEx.js";import"./browser-oxRBL7Ul.js";import"./prism-java-BwO6k4I_.js";const m=`/**\r
 * Recursive Binary Search\r
 * Recurrence: T(n) = T(n/2) + O(1), T(1) = O(1)\r
 * Time Complexity: O(log n)\r
 * Space Complexity: O(log n) — recursion stack depth = log₂(n)\r
 */\r
public class RecursiveBinarySearch {\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31};\r
        int target = 17;\r
\r
        callCount = 0;\r
        maxDepth = 0;\r
        int index = binarySearch(arr, target, 0, arr.length - 1);\r
\r
        System.out.println("Recursive Binary Search");\r
        System.out.println("Array size: " + arr.length);\r
        System.out.println("Target: " + target);\r
        if (index != -1) {\r
            System.out.println("Found at index " + index);\r
        } else {\r
            System.out.println("Not found.");\r
        }\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected depth: " + (int)(Math.log(arr.length) / Math.log(2)) + 1);\r
        System.out.println("Time: O(log n), Space: O(log n)");\r
\r
        // Show depth for different array sizes\r
        System.out.println("\\nRecursion depth for different array sizes:");\r
        for (int n : new int[]{2, 4, 8, 16, 32, 64, 128, 256, 512, 1024}) {\r
            int[] testArr = new int[n];\r
            for (int i = 0; i < n; i++) testArr[i] = i;\r
            callCount = 0;\r
            maxDepth = 0;\r
            binarySearch(testArr, n - 1, 0, n - 1);\r
            System.out.println("n=" + n + " → depth=" + maxDepth + " (log₂(n)=" + (int)(Math.log(n)/Math.log(2)) + ")");\r
        }\r
        System.out.println("Depth = log₂(n) + 1, so space is O(log n).");\r
    }\r
\r
    public static int binarySearch(int[] arr, int target, int low, int high) {\r
        callCount++;\r
        int currentDepth = depth + 1;\r
        depth++;\r
\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base case: element not found\r
        if (low > high) {\r
            depth--;\r
            return -1;\r
        }\r
\r
        // Safe mid calculation (avoid overflow)\r
        int mid = low + (high - low) / 2;\r
\r
        // Base case: found\r
        if (arr[mid] == target) {\r
            depth--;\r
            return mid;\r
        }\r
\r
        // Recursive cases\r
        int result;\r
        if (arr[mid] < target) {\r
            result = binarySearch(arr, target, mid + 1, high);\r
        } else {\r
            result = binarySearch(arr, target, low, mid - 1);\r
        }\r
        depth--;\r
        return result;\r
    }\r
\r
    private static int depth = 0;\r
}`,x=`/**\r
 * Compares recursive and iterative binary search.\r
 * Both are O(log n) time, but space differs: recursive O(log n), iterative O(1).\r
 */\r
public class BinarySearchComparison {\r
    public static void main(String[] args) {\r
        int size = 1000000;\r
        int[] arr = new int[size];\r
        for (int i = 0; i < size; i++) arr[i] = i;\r
        int target = size - 1;\r
\r
        System.out.println("=== Binary Search Comparison ===");\r
        System.out.println("Array size: " + size);\r
        System.out.println("Target: " + target);\r
        System.out.println();\r
\r
        // Recursive\r
        long start = System.nanoTime();\r
        int recResult = RecursiveBinarySearch.binarySearch(arr, target, 0, arr.length - 1);\r
        long end = System.nanoTime();\r
        System.out.println("Recursive: " + recResult + " (time: " + (end - start) + " ns)");\r
        System.out.println("  Time: O(log n), Space: O(log n)");\r
\r
        // Iterative\r
        start = System.nanoTime();\r
        int iterResult = iterativeBinarySearch(arr, target);\r
        end = System.nanoTime();\r
        System.out.println("Iterative: " + iterResult + " (time: " + (end - start) + " ns)");\r
        System.out.println("  Time: O(log n), Space: O(1)");\r
\r
        // Both should be equal\r
        System.out.println("\\nBoth methods give the same result: " + (recResult == iterResult));\r
\r
        // Show steps for different sizes\r
        System.out.println("\\nSteps for different array sizes:");\r
        for (int n : new int[]{10, 100, 1000, 10000, 100000, 1000000}) {\r
            int[] testArr = new int[n];\r
            for (int i = 0; i < n; i++) testArr[i] = i;\r
            int steps = iterativeSteps(testArr, n - 1);\r
            System.out.println("n=" + n + " → " + steps + " steps");\r
        }\r
        System.out.println("Steps grow logarithmically: log₂(n) + 1.");\r
    }\r
\r
    // Iterative binary search\r
    public static int iterativeBinarySearch(int[] arr, int target) {\r
        int low = 0;\r
        int high = arr.length - 1;\r
\r
        while (low <= high) {\r
            int mid = low + (high - low) / 2;\r
            if (arr[mid] == target) return mid;\r
            if (arr[mid] < target) low = mid + 1;\r
            else high = mid - 1;\r
        }\r
        return -1;\r
    }\r
\r
    // Count steps for iterative binary search\r
    public static int iterativeSteps(int[] arr, int target) {\r
        int low = 0;\r
        int high = arr.length - 1;\r
        int steps = 0;\r
\r
        while (low <= high) {\r
            steps++;\r
            int mid = low + (high - low) / 2;\r
            if (arr[mid] == target) return steps;\r
            if (arr[mid] < target) low = mid + 1;\r
            else high = mid - 1;\r
        }\r
        return steps;\r
    }\r
}`,g=`/**\r
 * Binary Search Variants: Find first and last occurrence of a target\r
 * in a sorted array with duplicates.\r
 * Time Complexity: O(log n)\r
 * Space Complexity: O(log n) for recursive, O(1) for iterative\r
 */\r
public class BinarySearchVariants {\r
    private static int callCount = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {1, 3, 3, 3, 5, 5, 7, 7, 7, 7, 9, 11};\r
        int target = 7;\r
\r
        System.out.println("=== Binary Search Variants ===");\r
        System.out.println("Array: " + arrayToString(arr));\r
        System.out.println("Target: " + target);\r
        System.out.println();\r
\r
        // Standard binary search (any occurrence)\r
        callCount = 0;\r
        int any = binarySearch(arr, target, 0, arr.length - 1);\r
        System.out.println("Any occurrence: index " + any + " (calls: " + callCount + ")");\r
\r
        // First occurrence\r
        callCount = 0;\r
        int first = firstOccurrence(arr, target, 0, arr.length - 1);\r
        System.out.println("First occurrence: index " + first + " (calls: " + callCount + ")");\r
\r
        // Last occurrence\r
        callCount = 0;\r
        int last = lastOccurrence(arr, target, 0, arr.length - 1);\r
        System.out.println("Last occurrence: index " + last + " (calls: " + callCount + ")");\r
\r
        // Count occurrences\r
        if (first != -1 && last != -1) {\r
            System.out.println("Total occurrences: " + (last - first + 1));\r
        }\r
\r
        // Show time complexity\r
        System.out.println("\\nAll variants are O(log n) time, O(log n) space (recursive).");\r
        System.out.println("Iterative versions would be O(1) space.");\r
    }\r
\r
    // Standard binary search (any occurrence)\r
    public static int binarySearch(int[] arr, int target, int low, int high) {\r
        callCount++;\r
        if (low > high) return -1;\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);\r
        return binarySearch(arr, target, low, mid - 1);\r
    }\r
\r
    // Find first occurrence (continue searching left after finding target)\r
    public static int firstOccurrence(int[] arr, int target, int low, int high) {\r
        callCount++;\r
        if (low > high) return -1;\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) {\r
            // Check if this is the first occurrence\r
            if (mid == low || arr[mid - 1] != target) {\r
                return mid;\r
            }\r
            // Search left\r
            return firstOccurrence(arr, target, low, mid - 1);\r
        }\r
        if (arr[mid] < target) {\r
            return firstOccurrence(arr, target, mid + 1, high);\r
        }\r
        return firstOccurrence(arr, target, low, mid - 1);\r
    }\r
\r
    // Find last occurrence (continue searching right after finding target)\r
    public static int lastOccurrence(int[] arr, int target, int low, int high) {\r
        callCount++;\r
        if (low > high) return -1;\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) {\r
            // Check if this is the last occurrence\r
            if (mid == high || arr[mid + 1] != target) {\r
                return mid;\r
            }\r
            // Search right\r
            return lastOccurrence(arr, target, mid + 1, high);\r
        }\r
        if (arr[mid] < target) {\r
            return lastOccurrence(arr, target, mid + 1, high);\r
        }\r
        return lastOccurrence(arr, target, low, mid - 1);\r
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
}`,p=[{question:"What is the recurrence for recursive binary search?",shortAnswer:"T(n) = T(n/2) + O(1), T(1) = O(1)",explanation:"Each call halves the search space and does constant work.",hint:"Halving recurrence.",level:"basic",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the time complexity of recursive binary search?",shortAnswer:"O(log n) — logarithmic time.",explanation:"The recurrence T(n) = T(n/2) + O(1) solves to O(log n).",hint:"Logarithmic.",level:"basic",codeExample:"// O(log n)"},{question:"What is the space complexity of recursive binary search?",shortAnswer:"O(log n) — due to the recursion stack.",explanation:"The recursion depth is log₂(n), so stack space is O(log n).",hint:"Depth = log n.",level:"intermediate",codeExample:"// O(log n) space"},{question:"What is the space complexity of iterative binary search?",shortAnswer:"O(1) — constant space.",explanation:"Iterative version uses only a few variables.",hint:"No recursion stack.",level:"basic",codeExample:"// O(1) space"},{question:"What is the best-case time complexity of binary search?",shortAnswer:"Ω(1) — constant time.",explanation:"If the target is at the middle, it's found in the first comparison.",hint:"Target at mid.",level:"basic",codeExample:"// arr[mid] == target → Ω(1)"},{question:"What is the worst-case time complexity of binary search?",shortAnswer:"O(log n) — logarithmic time.",explanation:"In the worst case, you need to halve the array until one element remains.",hint:"Target at end or not found.",level:"basic",codeExample:"// O(log n)"},{question:"What is the average-case time complexity of binary search?",shortAnswer:"Θ(log n) — logarithmic time.",explanation:"On average, the target is found after about log₂(n) comparisons.",hint:"Average is also logarithmic.",level:"intermediate",codeExample:"// Θ(log n)"},{question:"Why does binary search require a sorted array?",shortAnswer:"Because it relies on the ordering to decide which half to discard.",explanation:"If the array is not sorted, you can't guarantee that the target is in one half.",hint:"Ordering is essential.",level:"basic",codeExample:"// array must be sorted"},{question:"How many comparisons does binary search need for n=1,000,000?",shortAnswer:"At most 20 comparisons.",explanation:"log₂(1,000,000) ≈ 20.",hint:"2^20 ≈ 1,048,576.",level:"basic",codeExample:"// ~20 comparisons"},{question:"How do you avoid integer overflow in mid calculation?",shortAnswer:"Use mid = low + (high - low) / 2 instead of (low + high) / 2.",explanation:"low + high can overflow for large arrays; the difference approach is safe.",hint:"Safe mid calculation.",level:"intermediate",codeExample:"// mid = low + (high - low) / 2"},{question:"What is the recursion depth for binary search with n elements?",shortAnswer:"⌊log₂(n)⌋ + 1.",explanation:"The depth is the number of recursive calls needed to reach the base case.",hint:"log₂(n) + 1.",level:"intermediate",codeExample:"// depth = floor(log2(n)) + 1"},{question:"Can binary search be used on a linked list?",shortAnswer:"Not efficiently — binary search requires O(1) random access, which arrays provide.",explanation:"Linked lists require O(n) to access the middle, making binary search O(n) instead of O(log n).",hint:"Random access needed.",level:"intermediate",codeExample:"// Use arrays, not linked lists"},{question:"What is the lower bound for comparison-based search?",shortAnswer:"Ω(log n) — the same as binary search.",explanation:"Binary search achieves the optimal lower bound for comparison-based search in a sorted array.",hint:"Optimal.",level:"advanced",codeExample:"// Ω(log n) lower bound"},{question:"How does binary search handle duplicates?",shortAnswer:"It finds one occurrence; for first/last occurrence, you need to modify the algorithm.",explanation:"Standard binary search stops at any match; to find the first or last, you continue searching.",hint:"Duplicates.",level:"advanced",codeExample:"// first/last occurrence"},{question:"What is the time complexity of finding the first occurrence in a sorted array with duplicates?",shortAnswer:"O(log n) — still logarithmic.",explanation:"You continue searching left after finding a match.",hint:"Continue searching left.",level:"advanced",codeExample:"// first occurrence O(log n)"},{question:"What is the time complexity of finding the last occurrence in a sorted array with duplicates?",shortAnswer:"O(log n) — still logarithmic.",explanation:"You continue searching right after finding a match.",hint:"Continue searching right.",level:"advanced",codeExample:"// last occurrence O(log n)"},{question:"Can recursive binary search cause a stack overflow?",shortAnswer:"Yes, for very large arrays (e.g., n > 10^6 in Java with default stack size).",explanation:"The recursion depth is log₂(n), so for n=10^9, depth=30 — usually safe. But for n=10^6, depth=20, still safe. However, in Java, recursion depth is limited by stack size, so it can overflow if log₂(n) exceeds ~10,000 (which is impossible for practical arrays). So it's generally safe.",hint:"Depth is small.",level:"intermediate",codeExample:"// depth ≤ 31 for n ≤ 2^31"},{question:"What is the time complexity of Java's Arrays.binarySearch()?",shortAnswer:"O(log n) — it uses the standard binary search algorithm.",explanation:"It's optimized and handles edge cases.",hint:"Built-in binary search.",level:"basic",codeExample:"// Arrays.binarySearch(arr, key)"},{question:"What does Arrays.binarySearch() return when the element is not found?",shortAnswer:"-(insertion point) - 1, where insertion point is the index where the element would be inserted.",explanation:"This allows you to find where to insert the element to maintain sorted order.",hint:"Negative value.",level:"intermediate",codeExample:"// returns -(insertionPoint) - 1"},{question:"What is the time complexity of binary search compared to linear search?",shortAnswer:"Binary search is O(log n), linear search is O(n) — much faster for large n.",explanation:"For n=1,000,000, binary search uses 20 comparisons, linear search uses 1,000,000.",hint:"Much faster.",level:"basic",codeExample:"// O(log n) vs O(n)"},{question:"Can binary search be used for floating-point numbers?",shortAnswer:"Yes, binary search works for any comparable data type.",explanation:"Arrays of double or float can be searched as long as they are sorted.",hint:"Any comparable type.",level:"intermediate",codeExample:"// double[] arr"},{question:"What is the time complexity of binary search on an array of size 2^n?",shortAnswer:"O(n) — because log₂(2^n) = n.",explanation:"The number of steps is equal to n.",hint:"n steps.",level:"intermediate",codeExample:"// n comparisons"},{question:"Can binary search be parallelized?",shortAnswer:"Yes, but it's not common because it's already logarithmic and parallelization adds overhead.",explanation:"You could search multiple ranges in parallel, but the overhead usually outweighs the benefit.",hint:"Not usually needed.",level:"advanced",codeExample:"// Not typical"},{question:"What is the time complexity of interpolation search?",shortAnswer:"O(log log n) average, O(n) worst-case.",explanation:"Interpolation search is faster on average for uniformly distributed data.",hint:"Better on average.",level:"advanced",codeExample:"// O(log log n) average"},{question:"How does binary search compare to hash table lookup?",shortAnswer:"Hash table lookup is O(1) average, but requires a hash function and more memory.",explanation:"Binary search is O(log n) and needs sorted data; hash tables are O(1) but use more memory.",hint:"Trade-off.",level:"intermediate",codeExample:"// HashMap get() O(1)"},{question:"What is the recurrence for binary search in terms of steps?",shortAnswer:"S(n) = S(n/2) + 1, S(1) = 1 → O(log n).",explanation:"Each comparison reduces the size by half.",hint:"S(n) = S(n/2) + 1.",level:"intermediate",codeExample:"// S(n) = S(n/2) + 1"},{question:"How many elements can be searched with 20 comparisons in binary search?",shortAnswer:"Up to 2^20 = 1,048,576 elements.",explanation:"With k comparisons, binary search can handle up to 2^k elements.",hint:"2^20 elements.",level:"basic",codeExample:"// 1,048,576 elements"},{question:"What is the time complexity of binary search in terms of Big-O?",shortAnswer:"O(log n) — logarithmic time.",explanation:"The number of operations is proportional to log₂(n).",hint:"Logarithmic.",level:"basic",codeExample:"// O(log n)"},{question:"Why is binary search considered an optimal search algorithm for sorted arrays?",shortAnswer:"Because it achieves the theoretical lower bound of Ω(log n) for comparison-based search.",explanation:"No comparison-based search can do better than O(log n) on a sorted array.",hint:"Optimal lower bound.",level:"advanced",codeExample:"// Ω(log n) lower bound"},{question:"What is the time complexity of finding an element in a sorted array using recursive binary search?",shortAnswer:"O(log n) — logarithmic time.",explanation:"The recurrence T(n) = T(n/2) + O(1) gives O(log n).",hint:"O(log n).",level:"basic",codeExample:"// O(log n)"},{question:"What is the space complexity of recursive binary search if the array is very large?",shortAnswer:"O(log n) — still logarithmic; the stack depth is log₂(n).",explanation:"The depth is never more than log₂(n), so it's O(log n).",hint:"Depth = log n.",level:"intermediate",codeExample:"// O(log n) space"}],N=()=>{const[i,l]=c.useState("overview"),a="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(a,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 39"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Binary Search"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Analyzing the ",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"O(log n)"})," ","time and space complexity of recursive binary search — the classic divide-and-conquer algorithm for efficient searching in sorted data."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",i===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[i==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," What is Recursive Binary Search?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Binary search"})," is a classic algorithm that finds the position of a target value in a ",e.jsx("strong",{children:"sorted array"})," by repeatedly dividing the search interval in half. The",e.jsx("strong",{children:"recursive"})," implementation elegantly expresses this divide-and-conquer approach by calling itself on the appropriate half."]}),e.jsxs("p",{children:["The recurrence relation is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = T(n/2) + O(1),   T(1) = O(1)"}),"This gives ",e.jsx("strong",{children:"O(log n)"})," time complexity and ",e.jsx("strong",{children:"O(log n)"})," space complexity due to the recursion stack."]}),e.jsx("p",{children:"Think of it like searching for a word in a dictionary: you open the middle, compare, and decide whether to go left or right. Recursive binary search does this by calling itself on the chosen half, building a call stack of decisions."})]})]}),e.jsxs("section",{className:t(a,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," How It Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"1. Base Case",desc:"If low > high, the element is not present. Return -1.",icon:"🎯"},{step:"2. Find Mid",desc:"mid = low + (high - low) / 2 (avoid overflow).",icon:"📐"},{step:"3. Compare",desc:"If arr[mid] == target → return mid. If target < arr[mid] → search left. If target > arr[mid] → search right.",icon:"🔍"},{step:"4. Recurse",desc:"Call binarySearch on the appropriate half.",icon:"🔄"}].map((r,n)=>e.jsxs("div",{className:t(s(n),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{className:t(a,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{case:"Time Complexity",desc:"Each step reduces the problem size by half, giving O(log n) steps.",example:"T(n) = T(n/2) + O(1) → O(log n)"},{case:"Space Complexity (Recursive)",desc:"The recursion stack depth is O(log n).",example:"O(log n) due to call stack."},{case:"Space Complexity (Iterative)",desc:"The iterative version uses O(1) extra space.",example:"O(1) constant space."}].map((r,n)=>e.jsxs("div",{className:t(s(n+2),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.case}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:r.desc}),e.jsx("p",{className:"text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-2",children:r.example})]},n))})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Visual Intuition: Recursion Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Binary search recursion tree",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow39",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Recursion Tree for Binary Search (n=16)"}),e.jsx("rect",{x:"310",y:"40",width:"180",height:"28",rx:"6",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"400",y:"61",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"search(0, 15)"}),e.jsx("line",{x1:"400",y1:"68",x2:"250",y2:"85",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"68",x2:"550",y2:"85",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"170",y:"88",width:"160",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"250",y:"107",textAnchor:"middle",fontSize:"11",fill:"white",children:"search(0, 6)"}),e.jsx("rect",{x:"470",y:"88",width:"160",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"550",y:"107",textAnchor:"middle",fontSize:"11",fill:"white",children:"search(8, 15)"}),e.jsx("line",{x1:"250",y1:"114",x2:"170",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"250",y1:"114",x2:"330",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"114",x2:"470",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"114",x2:"630",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"110",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"10",fill:"white",children:"search(0, 2)"}),e.jsx("rect",{x:"270",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"330",y:"150",textAnchor:"middle",fontSize:"10",fill:"white",children:"search(4, 6)"}),e.jsx("rect",{x:"410",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"470",y:"150",textAnchor:"middle",fontSize:"10",fill:"white",children:"search(8, 10)"}),e.jsx("rect",{x:"570",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"630",y:"150",textAnchor:"middle",fontSize:"10",fill:"white",children:"search(12, 15)"}),e.jsx("text",{x:"400",y:"200",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"… (leaves: T(1) or not found)"}),e.jsx("text",{x:"400",y:"235",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Depth = log₂(n) = 4 levels → O(log n) stack space"}),e.jsx("text",{x:"400",y:"260",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Each level does O(1) work → O(log n) time"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Recursive binary search creates a recursion tree with depth log₂(n). Each level does constant work, giving O(log n) time and O(log n) space."})]})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Recurrence Relation"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n/2) + O(1),   T(1) = O(1)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Each step does O(1) work (comparison and mid calculation) and makes one recursive call on half the input."}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Solving: T(n) = T(n/2) + 1 = T(n/4) + 2 = ... = T(1) + log₂(n) = O(log n)"}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2",children:["Time Complexity: ",e.jsx("span",{className:"font-mono",children:"O(log n)"})]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:["Space Complexity: ",e.jsx("span",{className:"font-mono",children:"O(log n)"})," (recursive),",e.jsx("span",{className:"font-mono",children:" O(1)"})," (iterative)"]})]})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use iterative version for O(1) space",desc:"Recursive uses O(log n) stack; iterative is more memory-efficient."},{tip:"Avoid integer overflow in mid calculation",desc:"Use mid = low + (high - low) / 2 instead of (low + high) / 2."},{tip:"Check edge cases",desc:"Empty array, single element, target at first/last position, target not found."},{tip:"Consider the recursion depth limit",desc:"For arrays larger than 2^depth, the recursive version may stack overflow."}].map((r,n)=>e.jsxs("div",{className:t(s(n+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsxs("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Off-by-one errors:"})," Using low < high vs low <= high, or updating mid incorrectly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integer overflow:"})," (low + high) / 2 can overflow for large arrays. Use low + (high - low) / 2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that the array must be sorted:"})," Binary search gives incorrect results on unsorted data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling the base case correctly:"})," if (low > high) must return -1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming the recursive version is always better:"})," For large arrays, iterative version avoids stack overflow.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Tuhina"})," wrote a recursive binary search for an array of 10 million elements and got a StackOverflowError. She switched to iterative and it worked perfectly."]})]})]})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative implementation"})," for O(1) space in production code."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use safe mid calculation"})," to avoid integer overflow."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Test edge cases"}),": empty array, single element, target at ends, target not present."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document the recurrence"})," in comments to explain the complexity."]})})]})]}),e.jsxs("section",{className:t(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for recursive binary search?","✅ Do you know the time complexity (O(log n)) and why?","✅ Do you know the space complexity of recursive vs iterative?","✅ Can you implement both recursive and iterative binary search?","✅ Do you understand the recursion tree for binary search?","✅ Can you handle edge cases (empty array, not found)?"].map((r,n)=>e.jsx("div",{className:t(s(n+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},n))})]}),e.jsxs("section",{className:t(a,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For an array of size 1,000,000, how many recursive calls are made? That's log₂(1,000,000) ≈ 20 calls. The recursion depth is only 20."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the target is at the middle? The recursion stops after the first call — best case O(1)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a sorted list of 32,768 student roll numbers. Recursive binary search can find any roll number in at most 15 recursive calls. That's O(log n) efficiency!"]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursive Binary Search — O(log n) Time, O(log n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Recursive implementation of binary search with recurrence T(n) = T(n/2) + O(1)."}),e.jsx(o,{fileModule:m,title:"RecursiveBinarySearch.java",highlightLines:[]})]}),e.jsxs("section",{className:t(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Search Comparison — Recursive vs Iterative"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares the recursive and iterative versions in terms of time and space."}),e.jsx(o,{fileModule:x,title:"BinarySearchComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:t(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Binary Search Variants — First and Last Occurrence"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Extends binary search to find the first or last occurrence of a target in a sorted array with duplicates."}),e.jsx(o,{fileModule:g,title:"BinarySearchVariants.java",highlightLines:[]})]})]}),i==="faq"&&e.jsx("div",{className:t(a,"space-y-4"),children:e.jsx(h,{title:"Complexity of Recursive Binary Search — FAQs",questions:p})})]}),e.jsx("div",{className:t(a,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(d,{note:`Recursive binary search is the quintessential example of O(log n) complexity. I emphasize that the 
              recurrence T(n) = T(n/2) + O(1) is the simplest and most important recurrence in algorithm analysis. 
              Understanding the recursion tree is key: each level halves the problem, so depth is log n. 
              I also highlight the space trade-off: recursive uses O(log n) stack, iterative uses O(1). 
              Students should practice both implementations and understand edge cases. The off-by-one error 
              in binary search is a classic bug — tracing through the algorithm helps catch it. Finally, 
              remind them that binary search only works on sorted data, which is a crucial precondition.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 39 · Complexity of Recursive Binary Search · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{N as default};

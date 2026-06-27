import{r as d,j as e}from"./index-CNNP-EED.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-BOnCSEBg.js";import{F as m}from"./FAQTemplate-B-lMXd6e.js";import{J as o}from"./JavaFileLoader-DiuG8jZc.js";import"./git-branch-BwKA7x2_.js";import"./JavaCodeBlock-hEWYnJeG.js";import"./prism-CQDD5-RF.js";import"./browser-B7OMk5-w.js";import"./prism-java-BwO6k4I_.js";const h=`/**\r
 * Recursive Merge Sort\r
 * Recurrence: T(n) = 2T(n/2) + O(n), T(1) = O(1)\r
 * Time Complexity: O(n log n) in all cases\r
 * Space Complexity: O(n) — auxiliary array for merging\r
 */\r
public class MergeSortRecursive {\r
    private static int comparisons = 0;\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10};\r
        System.out.println("Original array: " + arrayToString(arr));\r
\r
        comparisons = 0;\r
        callCount = 0;\r
        maxDepth = 0;\r
        mergeSort(arr, 0, arr.length - 1);\r
\r
        System.out.println("Sorted array: " + arrayToString(arr));\r
        System.out.println("Number of comparisons: " + comparisons);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Maximum recursion depth: " + maxDepth);\r
        System.out.println("Expected depth for n=" + arr.length + ": " + (int)(Math.log(arr.length)/Math.log(2)) + " levels");\r
        System.out.println("Time Complexity: O(n log n)");\r
        System.out.println("Space Complexity: O(n)");\r
    }\r
\r
    public static void mergeSort(int[] arr, int left, int right) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (left < right) {\r
            int mid = left + (right - left) / 2;\r
            mergeSort(arr, left, mid);\r
            mergeSort(arr, mid + 1, right);\r
            merge(arr, left, mid, right);\r
        }\r
        depth--;\r
    }\r
\r
    public static void merge(int[] arr, int left, int mid, int right) {\r
        int n1 = mid - left + 1;\r
        int n2 = right - mid;\r
\r
        // Create temporary arrays\r
        int[] leftArr = new int[n1];\r
        int[] rightArr = new int[n2];\r
\r
        // Copy data to temp arrays\r
        System.arraycopy(arr, left, leftArr, 0, n1);\r
        System.arraycopy(arr, mid + 1, rightArr, 0, n2);\r
\r
        // Merge the two arrays\r
        int i = 0, j = 0, k = left;\r
        while (i < n1 && j < n2) {\r
            comparisons++;\r
            if (leftArr[i] <= rightArr[j]) {\r
                arr[k++] = leftArr[i++];\r
            } else {\r
                arr[k++] = rightArr[j++];\r
            }\r
        }\r
\r
        // Copy remaining elements\r
        while (i < n1) arr[k++] = leftArr[i++];\r
        while (j < n2) arr[k++] = rightArr[j++];\r
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
\r
    private static int depth = 0;\r
}`,g=`/**\r
 * Analyzes merge sort performance: comparisons, call count, depth.\r
 * Shows the number of comparisons for different input sizes.\r
 */\r
public class MergeSortAnalysis {\r
    private static int comparisons = 0;\r
\r
    public static void main(String[] args) {\r
        System.out.println("=== Merge Sort Analysis ===\\n");\r
\r
        int[] sizes = {10, 100, 1000, 10000};\r
\r
        System.out.println("n\\tComparisons (approx)\\tTheoretical n log₂(n)");\r
        System.out.println("----------------------------------------------");\r
\r
        for (int n : sizes) {\r
            int[] arr = generateRandomArray(n);\r
            comparisons = 0;\r
            mergeSort(arr, 0, arr.length - 1);\r
            double nLogN = n * (Math.log(n) / Math.log(2));\r
            System.out.printf("%d\\t%d\\t\\t\\t%.0f\\n", n, comparisons, nLogN);\r
        }\r
\r
        System.out.println("\\nActual comparisons are close to n log₂(n).");\r
        System.out.println("Merge sort is Θ(n log n) in all cases.");\r
\r
        // Show depth\r
        System.out.println("\\nRecursion depth for n=1000:");\r
        int n = 1000;\r
        int depth = (int)(Math.log(n) / Math.log(2)) + 1;\r
        System.out.println("Depth = " + depth + " levels (log₂(1000) ≈ 10)");\r
        System.out.println("Space complexity: O(n) for auxiliary array + O(log n) for stack = O(n)");\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        java.util.Random rand = new java.util.Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
\r
    public static void mergeSort(int[] arr, int left, int right) {\r
        if (left < right) {\r
            int mid = left + (right - left) / 2;\r
            mergeSort(arr, left, mid);\r
            mergeSort(arr, mid + 1, right);\r
            merge(arr, left, mid, right);\r
        }\r
    }\r
\r
    public static void merge(int[] arr, int left, int mid, int right) {\r
        int n1 = mid - left + 1;\r
        int n2 = right - mid;\r
        int[] L = new int[n1];\r
        int[] R = new int[n2];\r
        System.arraycopy(arr, left, L, 0, n1);\r
        System.arraycopy(arr, mid + 1, R, 0, n2);\r
        int i = 0, j = 0, k = left;\r
        while (i < n1 && j < n2) {\r
            comparisons++;\r
            if (L[i] <= R[j]) arr[k++] = L[i++];\r
            else arr[k++] = R[j++];\r
        }\r
        while (i < n1) arr[k++] = L[i++];\r
        while (j < n2) arr[k++] = R[j++];\r
    }\r
}`,x=`/**\r
 * Compares merge sort with other sorting algorithms:\r
 * - Recursive Merge Sort (O(n log n) time, O(n) space)\r
 * - Iterative Merge Sort (O(n log n) time, O(n) space, O(1) stack)\r
 * - QuickSort (O(n log n) average, O(n²) worst)\r
 * - Insertion Sort (O(n²) worst, O(n) best)\r
 * \r
 * For small n, insertion sort can be faster.\r
 */\r
public class MergeSortComparison {\r
    public static void main(String[] args) {\r
        int n = 1000;\r
\r
        System.out.println("=== Sorting Algorithm Comparison ===");\r
        System.out.println("n = " + n);\r
        System.out.println();\r
\r
        int[] arr = generateRandomArray(n);\r
\r
        // 1. Recursive Merge Sort\r
        long start = System.nanoTime();\r
        int[] mergeArr = arr.clone();\r
        MergeSortRecursive.mergeSort(mergeArr, 0, mergeArr.length - 1);\r
        long end = System.nanoTime();\r
        System.out.println("1. Recursive Merge Sort: " + (end - start) / 1_000_000 + " ms");\r
        System.out.println("   O(n log n) time, O(n) space");\r
\r
        // 2. Iterative Merge Sort (bottom-up)\r
        start = System.nanoTime();\r
        int[] iterMergeArr = arr.clone();\r
        iterativeMergeSort(iterMergeArr);\r
        end = System.nanoTime();\r
        System.out.println("2. Iterative Merge Sort: " + (end - start) / 1_000_000 + " ms");\r
        System.out.println("   O(n log n) time, O(n) space, O(1) stack");\r
\r
        // 3. QuickSort (average O(n log n))\r
        start = System.nanoTime();\r
        int[] quickArr = arr.clone();\r
        quickSort(quickArr, 0, quickArr.length - 1);\r
        end = System.nanoTime();\r
        System.out.println("3. QuickSort: " + (end - start) / 1_000_000 + " ms");\r
        System.out.println("   O(n log n) average, O(n²) worst");\r
\r
        // 4. Insertion Sort (for comparison, use smaller n to keep time reasonable)\r
        System.out.println("\\nFor small n (n=100):");\r
        int smallN = 100;\r
        int[] smallArr = generateRandomArray(smallN);\r
\r
        start = System.nanoTime();\r
        int[] insertArr = smallArr.clone();\r
        insertionSort(insertArr);\r
        end = System.nanoTime();\r
        System.out.println("Insertion Sort (n=" + smallN + "): " + (end - start) / 1_000_000 + " ms");\r
        System.out.println("   O(n²) worst, O(n) best — good for small n.");\r
\r
        System.out.println("\\nMerge sort is guaranteed O(n log n) and stable.");\r
        System.out.println("Quicksort is faster on average but O(n²) worst-case.");\r
        System.out.println("Iterative merge sort avoids recursion stack overhead.");\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        java.util.Random rand = new java.util.Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
\r
    // Iterative (bottom-up) merge sort\r
    public static void iterativeMergeSort(int[] arr) {\r
        int n = arr.length;\r
        int[] temp = new int[n];\r
        for (int size = 1; size < n; size *= 2) {\r
            for (int left = 0; left < n - size; left += 2 * size) {\r
                int mid = left + size - 1;\r
                int right = Math.min(left + 2 * size - 1, n - 1);\r
                merge(arr, temp, left, mid, right);\r
            }\r
        }\r
    }\r
\r
    public static void merge(int[] arr, int[] temp, int left, int mid, int right) {\r
        int i = left, j = mid + 1, k = left;\r
        while (i <= mid && j <= right) {\r
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];\r
            else temp[k++] = arr[j++];\r
        }\r
        while (i <= mid) temp[k++] = arr[i++];\r
        while (j <= right) temp[k++] = arr[j++];\r
        System.arraycopy(temp, left, arr, left, right - left + 1);\r
    }\r
\r
    // QuickSort (simple implementation)\r
    public static void quickSort(int[] arr, int low, int high) {\r
        if (low < high) {\r
            int pi = partition(arr, low, high);\r
            quickSort(arr, low, pi - 1);\r
            quickSort(arr, pi + 1, high);\r
        }\r
    }\r
\r
    public static int partition(int[] arr, int low, int high) {\r
        int pivot = arr[high];\r
        int i = low - 1;\r
        for (int j = low; j < high; j++) {\r
            if (arr[j] <= pivot) {\r
                i++;\r
                int temp = arr[i];\r
                arr[i] = arr[j];\r
                arr[j] = temp;\r
            }\r
        }\r
        int temp = arr[i + 1];\r
        arr[i + 1] = arr[high];\r
        arr[high] = temp;\r
        return i + 1;\r
    }\r
\r
    // Insertion sort\r
    public static void insertionSort(int[] arr) {\r
        for (int i = 1; i < arr.length; i++) {\r
            int key = arr[i];\r
            int j = i - 1;\r
            while (j >= 0 && arr[j] > key) {\r
                arr[j + 1] = arr[j];\r
                j--;\r
            }\r
            arr[j + 1] = key;\r
        }\r
    }\r
}`,p=[{question:"What is the recurrence for merge sort?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"Two recursive calls on half the input, plus O(n) work to merge.",hint:"Divide and conquer.",level:"basic",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the time complexity of merge sort?",shortAnswer:"O(n log n) in all cases (best, worst, average).",explanation:"The recurrence T(n) = 2T(n/2) + O(n) solves to O(n log n).",hint:"n log n.",level:"basic",codeExample:"// O(n log n)"},{question:"What is the space complexity of merge sort?",shortAnswer:"O(n) — for the auxiliary array used during merging.",explanation:"The merge step requires a temporary array of size n.",hint:"Auxiliary array.",level:"intermediate",codeExample:"// O(n) space"},{question:"Is merge sort stable?",shortAnswer:"Yes, merge sort is stable.",explanation:"Equal elements preserve their relative order during merging.",hint:"Stable sort.",level:"intermediate",codeExample:"// stable"},{question:"What is the best-case time complexity of merge sort?",shortAnswer:"Θ(n log n) — the same as worst-case.",explanation:"Merge sort always divides and merges, regardless of input order.",hint:"All cases same.",level:"basic",codeExample:"// Θ(n log n)"},{question:"What is the worst-case time complexity of merge sort?",shortAnswer:"Θ(n log n) — the same as best-case.",explanation:"No matter the input, merge sort performs O(n log n) comparisons.",hint:"Guaranteed.",level:"basic",codeExample:"// Θ(n log n)"},{question:"How many comparisons does merge sort make for n elements?",shortAnswer:"About n log₂(n) comparisons in all cases.",explanation:"The exact number is between (n log₂(n))/2 and n log₂(n) - n.",hint:"n log n.",level:"intermediate",codeExample:"// ~n log n comparisons"},{question:"What is the main advantage of merge sort over quicksort?",shortAnswer:"Merge sort has guaranteed O(n log n) performance and is stable.",explanation:"Quicksort can be O(n²) in the worst case; merge sort is always O(n log n).",hint:"Guaranteed performance.",level:"intermediate",codeExample:"// merge sort is guaranteed"},{question:"What is the main disadvantage of merge sort?",shortAnswer:"It uses O(n) extra space, unlike quicksort which is in-place.",explanation:"The temporary array doubles the memory usage.",hint:"Extra space.",level:"basic",codeExample:"// O(n) space"},{question:"How does merge sort work?",shortAnswer:"Divide the array into halves, recursively sort each half, then merge them.",explanation:"This is the classic divide-and-conquer approach.",hint:"Divide and conquer.",level:"basic",codeExample:"// split, sort, merge"},{question:"What is the iterative version of merge sort?",shortAnswer:"Bottom-up merge sort that merges subarrays of size 1, 2, 4, etc.",explanation:"It avoids recursion by using nested loops.",hint:"Bottom-up.",level:"advanced",codeExample:"// iterative merge sort"},{question:"What is the space complexity of recursive merge sort?",shortAnswer:"O(n) for the array plus O(log n) for the recursion stack = O(n).",explanation:"The recursion depth is O(log n), so stack space is O(log n).",hint:"Stack space.",level:"intermediate",codeExample:"// O(n + log n) = O(n)"},{question:"What is the space complexity of iterative merge sort?",shortAnswer:"O(n) for the temporary array, but O(1) stack space.",explanation:"Iterative merge sort avoids the recursion stack.",hint:"No recursion stack.",level:"intermediate",codeExample:"// O(n) space"},{question:"Can merge sort be used for linked lists?",shortAnswer:"Yes, merge sort works well on linked lists.",explanation:"For linked lists, merge sort is O(n log n) with O(1) extra space.",hint:"Works on linked lists.",level:"advanced",codeExample:"// linked list merge sort"},{question:"Why is merge sort preferred for linked lists?",shortAnswer:"Because it doesn't require random access and uses O(1) extra space on linked lists.",explanation:"Arrays require O(n) space for merging; linked lists can be merged in place.",hint:"No random access needed.",level:"advanced",codeExample:"// O(1) space for linked lists"},{question:"What is Timsort?",shortAnswer:"A hybrid sorting algorithm that uses merge sort and insertion sort.",explanation:"Timsort is used in Java and Python; it's efficient for real-world data.",hint:"Hybrid sort.",level:"advanced",codeExample:"// Arrays.sort() uses Timsort"},{question:"What is the time complexity of Timsort?",shortAnswer:"O(n log n) worst-case, O(n) best-case (for already sorted data).",explanation:"Timsort is adaptive and fast on nearly sorted data.",hint:"Adaptive.",level:"advanced",codeExample:"// O(n log n) worst, O(n) best"},{question:"How does merge sort compare to heap sort?",shortAnswer:"Both are O(n log n), but merge sort is stable and uses O(n) space; heap sort is in-place but unstable.",explanation:"Heap sort uses O(1) space, merge sort uses O(n) space.",hint:"Stability vs space.",level:"advanced",codeExample:"// merge sort stable, heap sort in-place"},{question:"How many levels are in the merge sort recursion tree?",shortAnswer:"log₂(n) levels.",explanation:"Each level divides the array into halves, so depth is log₂(n).",hint:"log₂(n) levels.",level:"intermediate",codeExample:"// log₂(n) levels"},{question:"How much work is done at each level of merge sort?",shortAnswer:"O(n) work at each level.",explanation:"At each level, the total work of merging is O(n).",hint:"n work per level.",level:"intermediate",codeExample:"// O(n) per level"},{question:"What is the total work in merge sort?",shortAnswer:"n × log₂(n) = O(n log n).",explanation:"O(n) work per level × log₂(n) levels.",hint:"n × log n.",level:"intermediate",codeExample:"// O(n log n)"},{question:"Can merge sort be parallelized?",shortAnswer:"Yes, merge sort is easy to parallelize because the subproblems are independent.",explanation:"The two halves can be sorted in parallel.",hint:"Easy to parallelize.",level:"advanced",codeExample:"// parallel merge sort"},{question:"What is the time complexity of parallel merge sort?",shortAnswer:"O(n) with enough processors, or O(n log n / p) with p processors.",explanation:"Parallel merge sort can be significantly faster on multi-core systems.",hint:"Parallel speedup.",level:"advanced",codeExample:"// O(n) with enough processors"},{question:"What is the lower bound for comparison-based sorting?",shortAnswer:"Ω(n log n).",explanation:"Merge sort achieves this lower bound.",hint:"Optimal lower bound.",level:"advanced",codeExample:"// Ω(n log n)"},{question:"Is merge sort an in-place sorting algorithm?",shortAnswer:"No, it uses O(n) extra space for the temporary array.",explanation:"In-place merge sort is possible but complex and rarely used.",hint:"Not in-place.",level:"basic",codeExample:"// not in-place"},{question:"What is the memory usage of merge sort for an array of size n?",shortAnswer:"O(n) for the temporary array + O(log n) for recursion stack = O(n).",explanation:"The temporary array is the main memory consumer.",hint:"O(n) total.",level:"intermediate",codeExample:"// O(n) memory"},{question:"How does merge sort handle large datasets?",shortAnswer:"It works well for large datasets, but the O(n) space can be a limitation.",explanation:"For very large datasets, external merge sort is used (sorting on disk).",hint:"Works for large data.",level:"advanced",codeExample:"// external merge sort"},{question:"What is external merge sort?",shortAnswer:"A version of merge sort that sorts data that doesn't fit in memory.",explanation:"It uses disk storage and multiple passes.",hint:"Sorting on disk.",level:"advanced",codeExample:"// external sort"},{question:"What is the time complexity of external merge sort?",shortAnswer:"O(n log n) but with I/O costs, the constant factor is much larger.",explanation:"The number of passes over the data is O(log n).",hint:"I/O cost.",level:"advanced",codeExample:"// O(n log n) with I/O"},{question:"Why is merge sort considered a 'divide and conquer' algorithm?",shortAnswer:"Because it divides the problem into smaller subproblems and conquers them recursively.",explanation:"The divide step splits the array; the conquer step sorts and merges.",hint:"Divide, conquer, combine.",level:"basic",codeExample:"// divide and conquer"},{question:"What is the average-case time complexity of merge sort?",shortAnswer:"Θ(n log n) — same as worst and best.",explanation:"Merge sort is Θ(n log n) in all cases.",hint:"All cases.",level:"basic",codeExample:"// Θ(n log n)"}],N=()=>{const[a,l]=d.useState("overview"),n="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(n,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 46"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Merge Sort"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Analyzing the ",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"O(n log n)"})," time and ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"O(n)"})," space of recursive merge sort — the classic divide-and-conquer algorithm with guaranteed performance."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," What is Recursive Merge Sort?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Merge sort"})," is a classic ",e.jsx("strong",{children:"divide-and-conquer"})," sorting algorithm that recursively divides the array into two halves, sorts each half, and then merges the sorted halves back together. It is known for its ",e.jsx("strong",{children:"guaranteed O(n log n)"})," time complexity in all cases (best, worst, average)."]}),e.jsxs("p",{children:["The recurrence relation is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = 2T(n/2) + O(n),   T(1) = O(1)"}),"This solves to ",e.jsx("strong",{children:"O(n log n)"})," time. The space complexity is ",e.jsx("strong",{children:"O(n)"}),"due to the auxiliary array used during merging."]}),e.jsx("p",{children:"Think of it like organizing a deck of cards: split the deck in half, sort each half, then merge them by comparing the top cards of each half. This ensures that the total work is n operations per level, and there are log₂(n) levels."})]})]}),e.jsxs("section",{className:t(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," How Recursive Merge Sort Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"1. Divide",desc:"Split the array into two halves. If the array has 1 element, it's already sorted (base case).",icon:"✂️"},{step:"2. Conquer",desc:"Recursively sort each half. This creates a recursion tree of depth log₂(n).",icon:"🔄"},{step:"3. Merge",desc:"Merge the two sorted halves by comparing elements from each half and placing them in order.",icon:"🔗"},{step:"4. Return",desc:"The merged array is returned (or copied back into the original).",icon:"📤"}].map((r,s)=>e.jsxs("div",{className:t(i(s),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},s))})]}),e.jsxs("section",{className:t(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{case:"Best Case",time:"Θ(n log n)",space:"O(n)",example:"Even if sorted, merge sort still does all the work."},{case:"Worst Case",time:"Θ(n log n)",space:"O(n)",example:"Always guaranteed O(n log n) performance."},{case:"Average Case",time:"Θ(n log n)",space:"O(n)",example:"Consistent regardless of input distribution."}].map((r,s)=>e.jsxs("div",{className:t(i(s+3),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.case}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Time: ",e.jsx("span",{className:"font-semibold",children:r.time})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-semibold",children:r.space})]}),e.jsx("p",{className:"text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-2",children:r.example})]},s))})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Visual Intuition: Recursion Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 320",className:"w-full h-auto max-h-72",role:"img","aria-label":"Merge sort recursion tree",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow46",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Recursion Tree for Merge Sort (n=8)"}),e.jsx("rect",{x:"310",y:"40",width:"180",height:"28",rx:"6",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"400",y:"61",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"mergeSort(0,7)"}),e.jsx("text",{x:"400",y:"75",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"work: n"}),e.jsx("line",{x1:"400",y1:"68",x2:"250",y2:"85",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"400",y1:"68",x2:"550",y2:"85",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"180",y:"88",width:"140",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"250",y:"108",textAnchor:"middle",fontSize:"11",fill:"white",children:"sort(0,3)"}),e.jsx("rect",{x:"480",y:"88",width:"140",height:"26",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"550",y:"108",textAnchor:"middle",fontSize:"11",fill:"white",children:"sort(4,7)"}),e.jsx("text",{x:"400",y:"130",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"work: n/2 + n/2 = n"}),e.jsx("line",{x1:"250",y1:"114",x2:"170",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"250",y1:"114",x2:"330",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"114",x2:"470",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"114",x2:"630",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"110",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"170",y:"151",textAnchor:"middle",fontSize:"10",fill:"white",children:"sort(0,1)"}),e.jsx("rect",{x:"270",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"330",y:"151",textAnchor:"middle",fontSize:"10",fill:"white",children:"sort(2,3)"}),e.jsx("rect",{x:"410",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"470",y:"151",textAnchor:"middle",fontSize:"10",fill:"white",children:"sort(4,5)"}),e.jsx("rect",{x:"570",y:"133",width:"120",height:"24",rx:"5",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"630",y:"151",textAnchor:"middle",fontSize:"10",fill:"white",children:"sort(6,7)"}),e.jsx("text",{x:"400",y:"175",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"work: 4 × (n/4) = n"}),e.jsx("text",{x:"400",y:"210",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"… leaves: n × 1 = n work"}),e.jsx("text",{x:"400",y:"245",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Total work = n × (log₂(n) + 1) = O(n log n)"}),e.jsx("text",{x:"400",y:"270",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Space: O(n) for auxiliary array + O(log n) for stack = O(n)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Merge sort creates a recursion tree with log₂(n) levels. At each level, the total work is O(n), giving O(n log n) time. It uses O(n) space for the auxiliary array."})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Recurrence Relation"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = 2T(n/2) + O(n),   T(1) = O(1)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Two recursive calls on half the input, plus O(n) work to merge."}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:"By Master Theorem (Case 2): a=2, b=2, f(n)=n, log_b a = 1, f(n)=Θ(n), so T(n)=Θ(n log n)."}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:"The space complexity is O(n) for the auxiliary array (plus O(log n) for stack, which is dominated by O(n))."}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2",children:["Time Complexity: ",e.jsx("span",{className:"font-mono",children:"Θ(n log n)"})," (all cases)"]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:["Space Complexity: ",e.jsx("span",{className:"font-mono",children:"O(n)"})," (auxiliary array)"]})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Database Sorting:"})," ","Sorting large datasets in databases often uses merge sort because it's stable and guarantees O(n log n) performance."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"External Sorting:"})," ","When data doesn't fit in memory, merge sort is used to sort chunks on disk and then merge them."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Classroom Example:"})," ","Students in ",e.jsx("strong",{children:"Barrackpore"})," are sorting their test scores by dividing the class into two groups, sorting each group, and merging — that's merge sort!"]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Java's Sorting:"})," ","Arrays.sort() for objects uses Timsort (a hybrid of merge sort and insertion sort)."]})})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Merge sort is stable",desc:"It preserves the relative order of equal elements, which is useful for sorting by multiple keys."},{tip:"Use insertion sort for small subarrays",desc:"Timsort (Java's sort) uses insertion sort for small subarrays to improve performance."},{tip:"Watch the space complexity",desc:"Merge sort uses O(n) extra space, which can be a problem for very large arrays."},{tip:"Prefer iterative for memory efficiency",desc:"Iterative merge sort uses less stack space than recursive (O(1) vs O(log n))."}].map((r,s)=>e.jsxs("div",{className:t(i(s+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsxs("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},s))})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case:"})," Without if (left >= right) return, the recursion never terminates."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrectly implementing the merge step:"})," Off-by-one errors in the merge loop are common. Always test with small arrays first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming merge sort is always the fastest:"})," For small arrays, insertion sort is faster. For large arrays, quicksort is often faster in practice (though merge sort has guaranteed performance)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misunderstanding the complexity:"})," Some think merge sort is O(n) because it does O(n) work per level. But there are O(log n) levels, so total is O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling large arrays:"})," The O(n) space complexity means merge sort can be memory-intensive for very large arrays (e.g., > 100 million elements).",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Debangshu"})," once tried to sort an array of 50 million integers using merge sort and ran out of memory. He switched to quicksort with in-place partitioning."]})]})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use merge sort when stability is required"})," — it preserves the order of equal elements."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative merge sort"})," to avoid recursion stack overhead."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use insertion sort for small subarrays"})," (n ≤ 50) to improve performance."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use in-place merging when possible"})," to reduce space complexity (though rare in practice)."]})})]})]}),e.jsxs("section",{className:t(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for merge sort?","✅ Do you know the time complexity (O(n log n)) and why?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you implement recursive merge sort correctly?","✅ Do you understand the recursion tree for merge sort?","✅ Can you identify when to use merge sort vs other sorts?"].map((r,s)=>e.jsx("div",{className:t(i(s+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},s))})]}),e.jsxs("section",{className:t(n,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For merge sort with n=8, how many levels are there? log₂(8) = 3 levels (plus the root). Each level does n work, so total = n log n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if merge sort used a 3-way split instead of 2-way? The recurrence would be T(n) = 3T(n/3) + O(n), which still solves to O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 10,000 student records that need to be sorted. Merge sort will use about 10,000 × log₂(10,000) ≈ 140,000 comparisons. Bubble sort would use 100,000,000 comparisons. The difference is huge!"]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursive Merge Sort — O(n log n) Time, O(n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Standard recursive merge sort with recurrence T(n) = 2T(n/2) + O(n)."}),e.jsx(o,{fileModule:h,title:"MergeSortRecursive.java",highlightLines:[]})]}),e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort Analysis — Steps and Comparisons"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Analyzes the number of comparisons and recursion depth for merge sort."}),e.jsx(o,{fileModule:g,title:"MergeSortAnalysis.java",highlightLines:[]})]}),e.jsxs("section",{className:t(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort Comparison — Recursive vs Iterative vs Other Sorts"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares merge sort with iterative merge sort, quicksort, and insertion sort."}),e.jsx(o,{fileModule:x,title:"MergeSortComparison.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:t(n,"space-y-4"),children:e.jsx(m,{title:"Complexity of Recursive Merge Sort — FAQs",questions:p})})]}),e.jsx("div",{className:t(n,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:`Merge sort is the quintessential divide-and-conquer algorithm. I emphasize that it's the 
              'guaranteed' O(n log n) sort — it doesn't have a bad case like quicksort. The recurrence 
              T(n) = 2T(n/2) + O(n) is a classic example of the Master Theorem. I make sure students understand 
              why the space complexity is O(n) — the temporary array used during merging. Also, I highlight that 
              merge sort is stable, which is important for multi-key sorting. Have students practice both recursive 
              and iterative implementations and compare them. Finally, remind them that Timsort (used in Java) 
              is a hybrid of merge sort and insertion sort, showing the practical importance of this algorithm.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 46 · Complexity of Recursive Merge Sort · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

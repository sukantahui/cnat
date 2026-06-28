import{r as d,j as e}from"./index-DlQhRwac.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-oAfgzdyj.js";import{F as h}from"./FAQTemplate-Dd-OzPva.js";import{J as o}from"./JavaFileLoader-JjjOWRqk.js";import"./git-branch-DB-sdnF9.js";import"./JavaCodeBlock-B3QOaYGb.js";import"./prism-DOs7RmKt.js";import"./browser-BVlc5g3G.js";import"./prism-java-BwO6k4I_.js";const p=`/**\r
 * Quick Sort — Recursive Implementation\r
 * Average Time Complexity: O(n log n)\r
 * Worst Time Complexity: O(n²) (when pivot is bad)\r
 * Space Complexity: O(log n) (recursion stack)\r
 */\r
public class QuickSortRecursive {\r
    private static int comparisons = 0;\r
    private static int swaps = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {10, 7, 8, 9, 1, 5};\r
        System.out.println("Original array: " + arrayToString(arr));\r
\r
        comparisons = 0;\r
        swaps = 0;\r
        quickSort(arr, 0, arr.length - 1);\r
\r
        System.out.println("Sorted array: " + arrayToString(arr));\r
        System.out.println("Number of comparisons: " + comparisons);\r
        System.out.println("Number of swaps: " + swaps);\r
        System.out.println("Time Complexity: O(n log n) average, O(n²) worst");\r
        System.out.println("Space Complexity: O(log n)");\r
    }\r
\r
    public static void quickSort(int[] arr, int low, int high) {\r
        if (low < high) {\r
            int pivotIndex = partition(arr, low, high);\r
            quickSort(arr, low, pivotIndex - 1);\r
            quickSort(arr, pivotIndex + 1, high);\r
        }\r
    }\r
\r
    // Partition using last element as pivot\r
    public static int partition(int[] arr, int low, int high) {\r
        int pivot = arr[high];\r
        int i = low - 1;\r
\r
        for (int j = low; j < high; j++) {\r
            comparisons++;\r
            if (arr[j] <= pivot) {\r
                i++;\r
                swap(arr, i, j);\r
            }\r
        }\r
        // Place pivot in correct position\r
        swap(arr, i + 1, high);\r
        return i + 1;\r
    }\r
\r
    public static void swap(int[] arr, int i, int j) {\r
        if (i != j) {\r
            int temp = arr[i];\r
            arr[i] = arr[j];\r
            arr[j] = temp;\r
            swaps++;\r
        }\r
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
}`,m=`import java.util.Random;\r
\r
/**\r
 * Compares quicksort performance with different pivot choices and input types.\r
 * Shows the difference between best-case and worst-case scenarios.\r
 */\r
public class QuickSortAnalysis {\r
    private static int comparisons = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 10000;\r
\r
        System.out.println("Quick Sort Analysis (n = " + n + ")");\r
        System.out.println("==================================");\r
\r
        // 1. Best case: random array with random pivot\r
        int[] randomArr = generateRandomArray(n);\r
        comparisons = 0;\r
        long start = System.nanoTime();\r
        quickSortRandomPivot(randomArr, 0, randomArr.length - 1);\r
        long end = System.nanoTime();\r
        System.out.println("Random pivot, random data: " + comparisons + " comparisons, " +\r
                           (end - start) / 1_000_000 + " ms");\r
\r
        // 2. Worst case: sorted array with first-element pivot\r
        int[] sortedArr = new int[n];\r
        for (int i = 0; i < n; i++) sortedArr[i] = i;\r
        comparisons = 0;\r
        start = System.nanoTime();\r
        quickSortFirstPivot(sortedArr, 0, sortedArr.length - 1);\r
        end = System.nanoTime();\r
        System.out.println("First-element pivot, sorted data: " + comparisons + " comparisons, " +\r
                           (end - start) / 1_000_000 + " ms");\r
\r
        // 3. Random pivot on sorted data\r
        sortedArr = new int[n];\r
        for (int i = 0; i < n; i++) sortedArr[i] = i;\r
        comparisons = 0;\r
        start = System.nanoTime();\r
        quickSortRandomPivot(sortedArr, 0, sortedArr.length - 1);\r
        end = System.nanoTime();\r
        System.out.println("Random pivot, sorted data: " + comparisons + " comparisons, " +\r
                           (end - start) / 1_000_000 + " ms");\r
\r
        // Show theoretical values\r
        double avgComparisons = n * (Math.log(n) / Math.log(2));\r
        double worstComparisons = (double)n * n / 2;\r
        System.out.println("\\nTheoretical: O(n log n) ≈ " + (int)avgComparisons + " comparisons");\r
        System.out.println("Theoretical worst: O(n²) ≈ " + (int)worstComparisons + " comparisons");\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        Random rand = new Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
\r
    // Quick sort with last-element pivot (worst-case for sorted data)\r
    public static void quickSortFirstPivot(int[] arr, int low, int high) {\r
        if (low < high) {\r
            int pivotIndex = partitionFirstPivot(arr, low, high);\r
            quickSortFirstPivot(arr, low, pivotIndex - 1);\r
            quickSortFirstPivot(arr, pivotIndex + 1, high);\r
        }\r
    }\r
\r
    public static int partitionFirstPivot(int[] arr, int low, int high) {\r
        int pivot = arr[low];\r
        int i = low + 1;\r
        for (int j = low + 1; j <= high; j++) {\r
            comparisons++;\r
            if (arr[j] < pivot) {\r
                swap(arr, i, j);\r
                i++;\r
            }\r
        }\r
        swap(arr, low, i - 1);\r
        return i - 1;\r
    }\r
\r
    // Quick sort with random pivot\r
    public static void quickSortRandomPivot(int[] arr, int low, int high) {\r
        if (low < high) {\r
            // Choose random pivot\r
            int randomIndex = low + new Random().nextInt(high - low + 1);\r
            swap(arr, randomIndex, high);\r
            int pivotIndex = partitionRandomPivot(arr, low, high);\r
            quickSortRandomPivot(arr, low, pivotIndex - 1);\r
            quickSortRandomPivot(arr, pivotIndex + 1, high);\r
        }\r
    }\r
\r
    public static int partitionRandomPivot(int[] arr, int low, int high) {\r
        int pivot = arr[high];\r
        int i = low - 1;\r
        for (int j = low; j < high; j++) {\r
            comparisons++;\r
            if (arr[j] <= pivot) {\r
                i++;\r
                swap(arr, i, j);\r
            }\r
        }\r
        swap(arr, i + 1, high);\r
        return i + 1;\r
    }\r
\r
    public static void swap(int[] arr, int i, int j) {\r
        int temp = arr[i];\r
        arr[i] = arr[j];\r
        arr[j] = temp;\r
    }\r
}`,x=`/**\r
 * Quick Sort — Optimized Implementation\r
 * - Median-of-three pivot selection\r
 * - Insertion sort for small subarrays (n < 20)\r
 * - Random pivot fallback\r
 */\r
public class QuickSortOptimized {\r
    private static int comparisons = 0;\r
    private static final int INSERTION_THRESHOLD = 20;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {10, 7, 8, 9, 1, 5, 3, 2, 6, 4};\r
        System.out.println("Original array: " + arrayToString(arr));\r
\r
        comparisons = 0;\r
        quickSortOptimized(arr, 0, arr.length - 1);\r
\r
        System.out.println("Sorted array: " + arrayToString(arr));\r
        System.out.println("Number of comparisons: " + comparisons);\r
        System.out.println("Using median-of-three pivot + insertion sort for small subarrays");\r
        System.out.println("Time Complexity: O(n log n) average, O(n²) worst (rare with median-of-three)");\r
    }\r
\r
    public static void quickSortOptimized(int[] arr, int low, int high) {\r
        // Use insertion sort for small subarrays\r
        if (high - low + 1 <= INSERTION_THRESHOLD) {\r
            insertionSort(arr, low, high);\r
            return;\r
        }\r
\r
        if (low < high) {\r
            int pivotIndex = partitionMedianOfThree(arr, low, high);\r
            quickSortOptimized(arr, low, pivotIndex - 1);\r
            quickSortOptimized(arr, pivotIndex + 1, high);\r
        }\r
    }\r
\r
    // Median-of-three pivot selection\r
    public static int partitionMedianOfThree(int[] arr, int low, int high) {\r
        int mid = low + (high - low) / 2;\r
\r
        // Order low, mid, high to find median\r
        if (arr[low] > arr[mid]) swap(arr, low, mid);\r
        if (arr[low] > arr[high]) swap(arr, low, high);\r
        if (arr[mid] > arr[high]) swap(arr, mid, high);\r
\r
        // Pivot is at mid, swap with high-1\r
        swap(arr, mid, high - 1);\r
        int pivot = arr[high - 1];\r
\r
        int i = low;\r
        int j = high - 1;\r
\r
        while (true) {\r
            while (++i < high && arr[i] < pivot) comparisons++;\r
            while (--j > low && arr[j] > pivot) comparisons++;\r
            if (i >= j) break;\r
            swap(arr, i, j);\r
        }\r
\r
        // Place pivot in correct position\r
        swap(arr, i, high - 1);\r
        return i;\r
    }\r
\r
    // Insertion sort for small subarrays\r
    public static void insertionSort(int[] arr, int low, int high) {\r
        for (int i = low + 1; i <= high; i++) {\r
            int key = arr[i];\r
            int j = i - 1;\r
            while (j >= low) {\r
                comparisons++;\r
                if (arr[j] > key) {\r
                    arr[j + 1] = arr[j];\r
                    j--;\r
                } else {\r
                    break;\r
                }\r
            }\r
            arr[j + 1] = key;\r
        }\r
    }\r
\r
    public static void swap(int[] arr, int i, int j) {\r
        int temp = arr[i];\r
        arr[i] = arr[j];\r
        arr[j] = temp;\r
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
}`,g=[{question:"What is the average-case time complexity of quicksort?",shortAnswer:"O(n log n) — linearithmic time.",explanation:"With good pivot selection, quicksort divides the array into roughly equal halves.",hint:"Average case is n log n.",level:"basic",codeExample:"// quicksort average O(n log n)"},{question:"What is the worst-case time complexity of quicksort?",shortAnswer:"O(n²) — quadratic time.",explanation:"When the pivot is always the smallest or largest element, partitions are unbalanced.",hint:"Bad pivot selection.",level:"basic",codeExample:"// quicksort worst O(n²)"},{question:"What is the best-case time complexity of quicksort?",shortAnswer:"Ω(n log n) — linearithmic time.",explanation:"When the pivot always splits the array into two equal halves.",hint:"Balanced partitions.",level:"intermediate",codeExample:"// quicksort best Ω(n log n)"},{question:"What is the recurrence for quicksort in the best/average case?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"Two recursive calls on balanced halves, plus O(n) work for partitioning.",hint:"Balanced partitions.",level:"intermediate",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the recurrence for quicksort in the worst case?",shortAnswer:"T(n) = T(n-1) + O(n), T(1) = O(1)",explanation:"One empty partition, one partition of size n-1, plus O(n) work for partitioning.",hint:"Unbalanced partitions.",level:"intermediate",codeExample:"// T(n) = T(n-1) + n"},{question:"What is the space complexity of quicksort?",shortAnswer:"O(log n) — for the recursion stack in the average case.",explanation:"The recursion depth is O(log n) when partitions are balanced.",hint:"Recursion stack.",level:"intermediate",codeExample:"// O(log n) space"},{question:"What is the worst-case space complexity of quicksort?",shortAnswer:"O(n) — for the recursion stack in the worst case.",explanation:"When partitions are unbalanced, recursion depth can be O(n).",hint:"Worst-case recursion depth.",level:"advanced",codeExample:"// O(n) worst-case space"},{question:"Is quicksort an in-place algorithm?",shortAnswer:"Yes, quicksort sorts the array in place with O(log n) extra space.",explanation:"No additional arrays are created; all sorting happens within the original array.",hint:"In-place.",level:"basic",codeExample:"// in-place"},{question:"Is quicksort stable?",shortAnswer:"No, quicksort is not stable.",explanation:"Equal elements may not preserve their relative order.",hint:"Unstable.",level:"intermediate",codeExample:"// not stable"},{question:"Why does pivot choice affect quicksort performance?",shortAnswer:"A bad pivot leads to unbalanced partitions and O(n²) time.",explanation:"The pivot determines how the array is split; unbalanced splits cause many recursive calls.",hint:"Pivot decides balance.",level:"intermediate",codeExample:"// pivot matters"},{question:"What is the median-of-three pivot strategy?",shortAnswer:"Choosing the median of the first, middle, and last elements as the pivot.",explanation:"This reduces the chance of worst-case behavior.",hint:"Median of three.",level:"advanced",codeExample:"// median-of-three pivot"},{question:"How does random pivot selection help quicksort?",shortAnswer:"It eliminates the O(n²) worst-case for sorted or nearly sorted data.",explanation:"Randomizing the pivot makes the probability of worst-case behavior negligible.",hint:"Randomization.",level:"intermediate",codeExample:"// random pivot"},{question:"Why do optimized quicksorts switch to insertion sort for small subarrays?",shortAnswer:"Insertion sort has lower overhead and is faster for small n (n < 20).",explanation:"The recursive overhead of quicksort outweighs the benefits for small arrays.",hint:"Overhead reduction.",level:"advanced",codeExample:"// switch to insertion sort for n < 20"},{question:"What is the time complexity of quicksort with random pivot?",shortAnswer:"O(n log n) with very high probability.",explanation:"Random pivot selection makes worst-case O(n²) extremely unlikely.",hint:"High probability.",level:"advanced",codeExample:"// O(n log n) expected"},{question:"How does quicksort compare to merge sort?",shortAnswer:"Quicksort is faster in practice but has O(n²) worst-case; merge sort is O(n log n) guaranteed but uses O(n) space.",explanation:"Quicksort is in-place and usually faster, but merge sort is stable and guaranteed.",hint:"Speed vs guarantee.",level:"intermediate",codeExample:"// quicksort vs merge sort"},{question:"What is the time complexity of quicksort on an already sorted array?",shortAnswer:"O(n²) if pivot is the first or last element; O(n log n) with random or median-of-three pivot.",explanation:"Sorted array causes unbalanced partitions with first/last pivot.",hint:"Depends on pivot.",level:"intermediate",codeExample:"// sorted array with first pivot → O(n²)"},{question:"What is the time complexity of quicksort on a reverse-sorted array?",shortAnswer:"O(n²) if pivot is the first or last element; O(n log n) with random or median-of-three pivot.",explanation:"Reverse sorted also causes unbalanced partitions with first/last pivot.",hint:"Same as sorted.",level:"intermediate",codeExample:"// reverse sorted with first pivot → O(n²)"},{question:"What is the partition function in quicksort?",shortAnswer:"It rearranges the array so that all elements < pivot are on the left and all > pivot on the right.",explanation:"The partition step is O(n) and is the key to quicksort's divide-and-conquer approach.",hint:"Rearranges around pivot.",level:"basic",codeExample:"// partition(arr, low, high)"},{question:"How many recursive calls does quicksort make in the worst case?",shortAnswer:"O(n) recursive calls.",explanation:"In the worst case, each partition reduces the size by 1, leading to n recursive calls.",hint:"Unbalanced partitions.",level:"advanced",codeExample:"// O(n) recursive calls"},{question:"How many recursive calls does quicksort make in the best case?",shortAnswer:"O(log n) recursive calls (depth).",explanation:"Balanced partitions lead to a recursion depth of O(log n).",hint:"Balanced partitions.",level:"advanced",codeExample:"// O(log n) depth"},{question:"What is the dual-pivot quicksort?",shortAnswer:"A variant that uses two pivots and partitions the array into three parts.",explanation:"Used in Java's Arrays.sort() for primitives; it's faster than single-pivot quicksort.",hint:"Two pivots.",level:"advanced",codeExample:"// Java's Arrays.sort() uses dual-pivot"},{question:"What is the time complexity of dual-pivot quicksort?",shortAnswer:"O(n log n) average, O(n²) worst-case.",explanation:"Dual-pivot quicksort has better constants and works well on average.",hint:"Same complexity, faster in practice.",level:"advanced",codeExample:"// O(n log n) average"},{question:"Can quicksort be implemented iteratively?",shortAnswer:"Yes, using an explicit stack to manage subarray ranges.",explanation:"Iterative quicksort avoids recursion depth issues.",hint:"Explicit stack.",level:"advanced",codeExample:"// iterative quicksort"},{question:"What is the space complexity of iterative quicksort?",shortAnswer:"O(n) in the worst case (for the stack) and O(log n) on average.",explanation:"The explicit stack stores subarray ranges.",hint:"Stack space.",level:"advanced",codeExample:"// O(n) worst-case stack"},{question:"Why is quicksort preferred over merge sort for in-place sorting?",shortAnswer:"Because quicksort uses O(log n) space vs merge sort's O(n) space.",explanation:"Quicksort sorts in place, making it more memory efficient.",hint:"Memory efficiency.",level:"intermediate",codeExample:"// quicksort is in-place"},{question:"What is the time complexity of quicksort with median-of-three pivot on average?",shortAnswer:"O(n log n) — similar to standard quicksort.",explanation:"Median-of-three improves the average case but doesn't change the asymptotic complexity.",hint:"Still O(n log n).",level:"advanced",codeExample:"// O(n log n)"},{question:"What is the worst-case time complexity of quicksort with median-of-three pivot?",shortAnswer:"O(n²) — but it's extremely rare.",explanation:"Median-of-three makes worst-case much less likely but doesn't eliminate it.",hint:"Rare but possible.",level:"advanced",codeExample:"// O(n²) possible"},{question:"What is the time complexity of quicksort on random data with random pivot?",shortAnswer:"O(n log n) expected.",explanation:"Random pivot on random data gives good average-case performance.",hint:"Expected O(n log n).",level:"intermediate",codeExample:"// O(n log n)"},{question:"What is the lower bound for comparison-based sorting?",shortAnswer:"Ω(n log n).",explanation:"Quicksort achieves this lower bound on average.",hint:"Lower bound.",level:"advanced",codeExample:"// Ω(n log n)"},{question:"What is the time complexity of quicksort on an array with all equal elements?",shortAnswer:"O(n²) with naive partition, O(n log n) with a partition that handles duplicates.",explanation:"A naive partition puts all equal elements on one side, causing O(n²).",hint:"Handles duplicates.",level:"advanced",codeExample:"// can be O(n²) or O(n log n)"}],S=()=>{const[n,l]=d.useState("overview"),i="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(i,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 29"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Algorithm Analysis"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Quick Sort Complexity Analysis"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Understanding the ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"O(n log n)"})," ","average-case and ",e.jsx("span",{className:"text-red-600 dark:text-red-400 font-semibold",children:"O(n²)"})," worst-case complexity of quicksort — the fastest comparison-based sort in practice."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",n===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[n==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is Quick Sort?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Quick sort"})," is a highly efficient ",e.jsx("strong",{children:"divide-and-conquer"})," sorting algorithm. It works by selecting a ",e.jsx("strong",{children:"pivot"})," element and partitioning the array into two subarrays: elements less than the pivot and elements greater than the pivot. The subarrays are then recursively sorted."]}),e.jsxs("p",{children:["Quick sort is known for its ",e.jsx("strong",{children:"excellent average-case performance"})," — O(n log n) — and its ",e.jsx("strong",{children:"in-place"})," nature (O(log n) extra space for recursion). However, it has a ",e.jsx("strong",{children:"worst-case O(n²)"})," complexity when the pivot selection is poor."]}),e.jsx("p",{children:"Think of it like organizing a library: you pick a book (the pivot), put all books with titles before it on the left, and all books after it on the right. Then you repeat this process on each side. It's fast and efficient in practice."})]})]}),e.jsxs("section",{className:t(i,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," How Quick Sort Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{step:"1. Choose Pivot",desc:"Select a pivot element (commonly the first, last, middle, or random element).",icon:"🎯"},{step:"2. Partition",desc:"Rearrange the array so all elements < pivot are on the left, all > pivot are on the right.",icon:"📊"},{step:"3. Recurse",desc:"Recursively apply quicksort to the left and right subarrays.",icon:"🔄"}].map((r,a)=>e.jsxs("div",{className:t(s(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-3xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},a))})]}),e.jsxs("section",{className:t(i,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{case:"Best Case (Ω(n log n))",desc:"When the pivot always divides the array into two equal halves.",example:"Pivot is always the median."},{case:"Worst Case (O(n²))",desc:"When the pivot is always the smallest or largest element (unbalanced).",example:"Sorted array with first/last pivot."},{case:"Average Case (Θ(n log n))",desc:"With random pivot, the expected complexity is O(n log n).",example:"Random pivot selection."}].map((r,a)=>e.jsxs("div",{className:t(s(a+3),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.case}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:r.desc}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-2",children:r.example})]},a))})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Partitioning"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Quick sort visualization",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow29",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Original Array: [10, 7, 8, 9, 1, 5]"}),e.jsx("text",{x:"400",y:"45",textAnchor:"middle",fontSize:"11",fill:"#6b7280",className:"dark:fill-gray-400",children:"Step 1: Choose pivot (last element: 5)"}),e.jsx("rect",{x:"370",y:"55",width:"60",height:"25",rx:"4",fill:"#f87171",opacity:"0.8"}),e.jsx("text",{x:"400",y:"73",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"5"}),e.jsx("text",{x:"400",y:"100",textAnchor:"middle",fontSize:"11",fill:"#6b7280",className:"dark:fill-gray-400",children:"Step 2: Partition around pivot"}),e.jsx("rect",{x:"150",y:"115",width:"120",height:"25",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"210",y:"133",textAnchor:"middle",fontSize:"11",fill:"white",children:"[1]"}),e.jsx("rect",{x:"300",y:"115",width:"60",height:"25",rx:"4",fill:"#f87171",opacity:"0.8"}),e.jsx("text",{x:"330",y:"133",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"5"}),e.jsx("rect",{x:"390",y:"115",width:"250",height:"25",rx:"4",fill:"#f472b6",opacity:"0.7"}),e.jsx("text",{x:"515",y:"133",textAnchor:"middle",fontSize:"11",fill:"white",children:"[10, 7, 8, 9]"}),e.jsx("text",{x:"400",y:"165",textAnchor:"middle",fontSize:"11",fill:"#6b7280",className:"dark:fill-gray-400",children:"Step 3: Recurse on left and right subarrays"}),e.jsx("rect",{x:"100",y:"180",width:"140",height:"25",rx:"4",fill:"#818cf8",opacity:"0.7"}),e.jsx("text",{x:"170",y:"198",textAnchor:"middle",fontSize:"11",fill:"white",children:"[1] ✓"}),e.jsx("rect",{x:"440",y:"180",width:"250",height:"25",rx:"4",fill:"#a78bfa",opacity:"0.7"}),e.jsx("text",{x:"565",y:"198",textAnchor:"middle",fontSize:"11",fill:"white",children:"[10, 7, 8, 9]"}),e.jsx("text",{x:"400",y:"225",textAnchor:"middle",fontSize:"11",fill:"#6b7280",className:"dark:fill-gray-400",children:"Step 4: Recursively sort [10, 7, 8, 9] ..."}),e.jsx("text",{x:"400",y:"265",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Sorted: [1, 5, 7, 8, 9, 10]"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Quick sort partitions around a pivot, then recursively sorts each side. The average case is O(n log n), but worst-case O(n²) when partitions are unbalanced."})]})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-mono text-lg text-center",children:"Best/Average: T(n) = 2T(n/2) + O(n)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Balanced partitions → O(n log n)"})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("p",{className:"font-mono text-lg text-center text-red-600 dark:text-red-400",children:"Worst: T(n) = T(n-1) + O(n)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Unbalanced partitions → O(n²)"})]})]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2",children:["Time Complexity: ",e.jsx("span",{className:"font-mono",children:"O(n log n)"})," average,",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:" O(n²)"})," worst-case"]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:["Space Complexity: ",e.jsx("span",{className:"font-mono",children:"O(log n)"})," (recursion stack in average case)"]})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use random pivot",desc:"Random pivot selection eliminates the O(n²) worst-case for sorted data."},{tip:"Use median-of-three",desc:"Choosing the median of first, middle, and last elements improves performance."},{tip:"Switch to insertion sort for small subarrays",desc:"For n < 50, insertion sort is faster due to lower overhead."},{tip:"Quicksort is in-place",desc:"It uses O(log n) extra space for recursion, not O(n) like merge sort."}].map((r,a)=>e.jsxs("div",{className:t(s(a+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},a))})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Choosing a bad pivot:"})," If you always choose the first or last element, a sorted array becomes O(n²). Always use random or median-of-three pivot."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Off-by-one errors in partition:"})," The partition function is tricky; off-by-one errors are common. Test with small arrays."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case:"})," Quicksort must stop when the subarray size ≤ 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overlooking that quicksort is unstable:"})," Equal elements may not maintain their relative order. Use merge sort if stability is required."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using quicksort on very small arrays:"})," For small subarrays (n &lt 20), insertion sort is often faster. Many optimized implementations switch to insertion sort.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Abhronila"})," once used quicksort on an already sorted array with first-element pivot and got O(n²) time. She learned to use random pivot."]})]})]})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use random pivot"})," to avoid worst-case O(n²) behavior."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use median-of-three pivot"})," for better average performance."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Switch to insertion sort"})," for subarrays with size &lt 20 for better performance."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative quicksort"})," to avoid recursion depth issues for very large arrays."]})})]})]}),e.jsxs("section",{className:t(i,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you explain the divide-and-conquer approach of quicksort?","✅ Do you know the average (O(n log n)) and worst (O(n²)) complexity?","✅ Can you write a recursive quicksort implementation?","✅ Do you understand why the pivot choice matters?","✅ Can you identify the recurrence for best and worst cases?","✅ Do you know when to use quicksort vs merge sort?"].map((r,a)=>e.jsx("div",{className:t(s(a+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},a))})]}),e.jsxs("section",{className:t(i,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For an already sorted array with the first element as pivot, how many partitions are needed? n partitions → O(n²). With a random pivot, it becomes O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you use median-of-three pivot selection? How does it affect the worst-case performance?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 10,000 student records. Quicksort with random pivot will sort them in about 10,000 × log₂(10,000) ≈ 140,000 operations, but with a bad pivot, it could be 100,000,000 operations. Pivot choice matters!"]})]})]})]}),n==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(i,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Quick Sort — Recursive (Average O(n log n), Worst O(n²))"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Standard recursive implementation of quicksort with last-element pivot."}),e.jsx(o,{fileModule:p,title:"QuickSortRecursive.java",highlightLines:[]})]}),e.jsxs("section",{className:t(i,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Quick Sort Analysis — Best vs Worst Case"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares quicksort performance with different pivot choices and input types."}),e.jsx(o,{fileModule:m,title:"QuickSortAnalysis.java",highlightLines:[]})]}),e.jsxs("section",{className:t(i,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Quick Sort Optimized — Median-of-Three Pivot"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Optimized quicksort with median-of-three pivot selection and insertion sort for small subarrays."}),e.jsx(o,{fileModule:x,title:"QuickSortOptimized.java",highlightLines:[]})]})]}),n==="faq"&&e.jsx("div",{className:t(i,"space-y-4"),children:e.jsx(h,{title:"Quick Sort Complexity Analysis — FAQs",questions:g})})]}),e.jsx("div",{className:t(i,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:"Quicksort is the fastest comparison-based sort in practice, but its worst-case O(n²) complexity makes it a fascinating study. I emphasize to students that the pivot choice is critical — random pivot selection effectively eliminates the worst-case behavior in practice. The recurrence for quicksort is a great example of how input distribution affects complexity: balanced partitions give O(n log n), unbalanced give O(n²). I also highlight that quicksort is in-place (O(log n) space) which makes it more memory-efficient than merge sort. Have students compare quicksort with merge sort on different input types to see the differences. Finally, remind them that Java's `Arrays.sort()` uses a dual-pivot quicksort for primitives, showing the practical importance of this algorithm."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 29 · Quick Sort Complexity Analysis · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{S as default};

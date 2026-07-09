import{r as d,j as e}from"./index-NACEEa8w.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-Co0nmDkI.js";import{F as m}from"./FAQTemplate-Bm57jzsr.js";import{J as o}from"./JavaFileLoader-Bpvh3LEd.js";import"./github-W-9UECod.js";import"./createLucideIcon-DogKn5wF.js";import"./git-branch-BkCyvWIP.js";import"./JavaCodeBlock-BenGqs1_.js";import"./prism-aQ4BM5eP.js";import"./browser-CZeQo2s3.js";import"./prism-java-BwO6k4I_.js";const h=`/**\r
 * Merge Sort — Recursive Implementation\r
 * Time Complexity: O(n log n) in all cases\r
 * Space Complexity: O(n) for temporary array\r
 */\r
public class MergeSortRecursive {\r
    private static int comparisons = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10};\r
        System.out.println("Original array: " + arrayToString(arr));\r
\r
        comparisons = 0;\r
        mergeSort(arr, 0, arr.length - 1);\r
\r
        System.out.println("Sorted array: " + arrayToString(arr));\r
        System.out.println("Number of comparisons: " + comparisons);\r
        System.out.println("Time Complexity: O(n log n)");\r
        System.out.println("Space Complexity: O(n)");\r
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
\r
        // Create temporary arrays\r
        int[] leftArr = new int[n1];\r
        int[] rightArr = new int[n2];\r
\r
        // Copy data to temp arrays\r
        for (int i = 0; i < n1; i++) leftArr[i] = arr[left + i];\r
        for (int j = 0; j < n2; j++) rightArr[j] = arr[mid + 1 + j];\r
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
}`,g=`/**\r
 * Merge Sort — Iterative (Bottom-up) Implementation\r
 * Time Complexity: O(n log n) in all cases\r
 * Space Complexity: O(n) for temporary array\r
 * No recursion stack overhead.\r
 */\r
public class MergeSortIterative {\r
    private static int comparisons = 0;\r
\r
    public static void main(String[] args) {\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10};\r
        System.out.println("Original array: " + arrayToString(arr));\r
\r
        comparisons = 0;\r
        mergeSortIterative(arr);\r
\r
        System.out.println("Sorted array: " + arrayToString(arr));\r
        System.out.println("Number of comparisons: " + comparisons);\r
        System.out.println("Time Complexity: O(n log n)");\r
        System.out.println("Space Complexity: O(n)");\r
        System.out.println("Recursion stack space: O(1)");\r
    }\r
\r
    public static void mergeSortIterative(int[] arr) {\r
        int n = arr.length;\r
        int[] temp = new int[n];\r
\r
        // currSize = size of subarrays to be merged\r
        // Starts with 1, doubles each time\r
        for (int currSize = 1; currSize < n; currSize *= 2) {\r
            for (int left = 0; left < n - currSize; left += 2 * currSize) {\r
                int mid = left + currSize - 1;\r
                int right = Math.min(left + 2 * currSize - 1, n - 1);\r
                merge(arr, temp, left, mid, right);\r
            }\r
        }\r
    }\r
\r
    public static void merge(int[] arr, int[] temp, int left, int mid, int right) {\r
        int i = left;\r
        int j = mid + 1;\r
        int k = left;\r
\r
        while (i <= mid && j <= right) {\r
            comparisons++;\r
            if (arr[i] <= arr[j]) {\r
                temp[k++] = arr[i++];\r
            } else {\r
                temp[k++] = arr[j++];\r
            }\r
        }\r
\r
        while (i <= mid) temp[k++] = arr[i++];\r
        while (j <= right) temp[k++] = arr[j++];\r
\r
        // Copy back from temp to arr\r
        for (int idx = left; idx <= right; idx++) {\r
            arr[idx] = temp[idx];\r
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
}`,x=`/**\r
 * Compares Merge Sort (O(n log n)) with other sorting algorithms.\r
 * Shows the performance differences for various input sizes.\r
 */\r
public class MergeSortAnalysis {\r
    private static int comparisons = 0;\r
\r
    public static void main(String[] args) {\r
        int[] sizes = {100, 500, 1000, 2000, 5000};\r
\r
        System.out.println("n\\t\\tMerge Sort (n log n)\\tBubble Sort (n²)");\r
        System.out.println("--------------------------------------------------------");\r
\r
        for (int n : sizes) {\r
            long mergeSteps = (long)(n * (Math.log(n) / Math.log(2)));\r
            long bubbleSteps = (long)n * n;\r
            System.out.printf("%d\\t\\t%d\\t\\t\\t%d\\n", n, mergeSteps, bubbleSteps);\r
            System.out.printf("\\t\\tRatio: %.1f\\n", (double)bubbleSteps / mergeSteps);\r
        }\r
\r
        // Simulate actual sorting on random arrays\r
        System.out.println("\\nSimulating sorts on n=10,000:");\r
        int n = 10000;\r
        int[] arr = generateRandomArray(n);\r
\r
        // Merge sort\r
        long start = System.nanoTime();\r
        int[] mergeArr = arr.clone();\r
        comparisons = 0;\r
        MergeSortRecursive.mergeSort(mergeArr, 0, mergeArr.length - 1);\r
        long end = System.nanoTime();\r
        System.out.println("Merge sort time: " + (end - start) / 1_000_000 + " ms");\r
\r
        // Insertion sort (only for small n, but we'll use n=1000)\r
        System.out.println("\\nFor n=1000, comparing with insertion sort:");\r
        n = 1000;\r
        arr = generateRandomArray(n);\r
\r
        // Merge sort\r
        start = System.nanoTime();\r
        mergeArr = arr.clone();\r
        comparisons = 0;\r
        MergeSortRecursive.mergeSort(mergeArr, 0, mergeArr.length - 1);\r
        end = System.nanoTime();\r
        System.out.println("Merge sort time: " + (end - start) / 1_000_000 + " ms");\r
\r
        // Insertion sort\r
        start = System.nanoTime();\r
        int[] insertArr = arr.clone();\r
        insertionSort(insertArr);\r
        end = System.nanoTime();\r
        System.out.println("Insertion sort time: " + (end - start) / 1_000_000 + " ms");\r
        System.out.println("Merge sort is stable and O(n log n), but insertion sort can be faster for small n.");\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        java.util.Random rand = new java.util.Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
\r
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
}`,p=[{question:"What is the time complexity of merge sort?",shortAnswer:"O(n log n) in all cases (best, worst, average).",explanation:"Merge sort always divides and merges, giving O(n log n).",hint:"Divide and conquer with O(n) work per level.",level:"basic",codeExample:"// merge sort O(n log n)"},{question:"What is the recurrence relation for merge sort?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"Two recursive calls on half the input, plus O(n) work to merge.",hint:"Divide and conquer.",level:"intermediate",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the space complexity of merge sort?",shortAnswer:"O(n) — for the temporary array used during merging.",explanation:"The merge step requires an auxiliary array of size n.",hint:"Auxiliary array.",level:"intermediate",codeExample:"// O(n) space"},{question:"Is merge sort stable?",shortAnswer:"Yes, merge sort is stable.",explanation:"Equal elements preserve their relative order during merging.",hint:"Stable sort.",level:"intermediate",codeExample:"// stable"},{question:"What is the best-case time complexity of merge sort?",shortAnswer:"Θ(n log n) — the same as worst-case.",explanation:"Merge sort always divides and merges, regardless of input order.",hint:"All cases same.",level:"basic",codeExample:"// Θ(n log n)"},{question:"What is the worst-case time complexity of merge sort?",shortAnswer:"Θ(n log n) — the same as best-case.",explanation:"No matter the input, merge sort performs O(n log n) comparisons.",hint:"Guaranteed.",level:"basic",codeExample:"// Θ(n log n)"},{question:"How many comparisons does merge sort make for n elements?",shortAnswer:"About n log₂(n) comparisons in all cases.",explanation:"The exact number is between (n log₂(n))/2 and n log₂(n) - n.",hint:"n log n.",level:"intermediate",codeExample:"// ~n log n comparisons"},{question:"What is the main advantage of merge sort over quicksort?",shortAnswer:"Merge sort has guaranteed O(n log n) performance and is stable.",explanation:"Quicksort can be O(n²) in the worst case; merge sort is always O(n log n).",hint:"Guaranteed performance.",level:"intermediate",codeExample:"// merge sort is guaranteed"},{question:"What is the main disadvantage of merge sort?",shortAnswer:"It uses O(n) extra space, unlike quicksort which is in-place.",explanation:"The temporary array doubles the memory usage.",hint:"Extra space.",level:"basic",codeExample:"// O(n) space"},{question:"How does merge sort work?",shortAnswer:"Divide the array into halves, recursively sort each half, then merge them.",explanation:"This is the classic divide-and-conquer approach.",hint:"Divide and conquer.",level:"basic",codeExample:"// split, sort, merge"},{question:"What is the iterative version of merge sort?",shortAnswer:"Bottom-up merge sort that merges subarrays of size 1, 2, 4, etc.",explanation:"It avoids recursion by using nested loops.",hint:"Bottom-up.",level:"advanced",codeExample:"// iterative merge sort"},{question:"What is the space complexity of recursive merge sort?",shortAnswer:"O(n) for the array plus O(log n) for the recursion stack.",explanation:"The recursion depth is O(log n), so stack space is O(log n).",hint:"Stack space.",level:"intermediate",codeExample:"// O(n + log n) = O(n)"},{question:"What is the space complexity of iterative merge sort?",shortAnswer:"O(n) for the temporary array, but O(1) stack space.",explanation:"Iterative merge sort avoids the recursion stack.",hint:"No recursion stack.",level:"intermediate",codeExample:"// O(n) space"},{question:"Can merge sort be used for linked lists?",shortAnswer:"Yes, merge sort works well on linked lists.",explanation:"For linked lists, merge sort is O(n log n) with O(1) extra space.",hint:"Works on linked lists.",level:"advanced",codeExample:"// linked list merge sort"},{question:"Why is merge sort preferred for linked lists?",shortAnswer:"Because it doesn't require random access and uses O(1) extra space on linked lists.",explanation:"Arrays require O(n) space for merging; linked lists can be merged in place.",hint:"No random access needed.",level:"advanced",codeExample:"// O(1) space for linked lists"},{question:"What is Timsort?",shortAnswer:"A hybrid sorting algorithm that uses merge sort and insertion sort.",explanation:"Timsort is used in Java and Python; it's efficient for real-world data.",hint:"Hybrid sort.",level:"advanced",codeExample:"// Arrays.sort() uses Timsort"},{question:"What is the time complexity of Timsort?",shortAnswer:"O(n log n) worst-case, O(n) best-case (for already sorted data).",explanation:"Timsort is adaptive and fast on nearly sorted data.",hint:"Adaptive.",level:"advanced",codeExample:"// O(n log n) worst, O(n) best"},{question:"How does merge sort compare to heap sort?",shortAnswer:"Both are O(n log n), but merge sort is stable and uses O(n) space; heap sort is in-place but unstable.",explanation:"Heap sort uses O(1) space, merge sort uses O(n) space.",hint:"Stability vs space.",level:"advanced",codeExample:"// merge sort stable, heap sort in-place"},{question:"How many levels are in the merge sort recursion tree?",shortAnswer:"log₂(n) levels.",explanation:"Each level divides the array into halves, so depth is log₂(n).",hint:"log₂(n) levels.",level:"intermediate",codeExample:"// log₂(n) levels"},{question:"How much work is done at each level of merge sort?",shortAnswer:"O(n) work at each level.",explanation:"At each level, the total work of merging is O(n).",hint:"n work per level.",level:"intermediate",codeExample:"// O(n) per level"},{question:"What is the total work in merge sort?",shortAnswer:"n × log₂(n) = O(n log n).",explanation:"O(n) work per level × log₂(n) levels.",hint:"n × log n.",level:"intermediate",codeExample:"// O(n log n)"},{question:"Can merge sort be parallelized?",shortAnswer:"Yes, merge sort is easy to parallelize because the subproblems are independent.",explanation:"The two halves can be sorted in parallel.",hint:"Easy to parallelize.",level:"advanced",codeExample:"// parallel merge sort"},{question:"What is the time complexity of parallel merge sort?",shortAnswer:"O(n) with enough processors, or O(n log n / p) with p processors.",explanation:"Parallel merge sort can be significantly faster on multi-core systems.",hint:"Parallel speedup.",level:"advanced",codeExample:"// O(n) with enough processors"},{question:"What is the lower bound for comparison-based sorting?",shortAnswer:"Ω(n log n).",explanation:"Merge sort achieves this lower bound.",hint:"Optimal lower bound.",level:"advanced",codeExample:"// Ω(n log n)"},{question:"Is merge sort an in-place sorting algorithm?",shortAnswer:"No, it uses O(n) extra space for the temporary array.",explanation:"In-place merge sort is possible but complex and rarely used.",hint:"Not in-place.",level:"basic",codeExample:"// not in-place"},{question:"What is the memory usage of merge sort for an array of size n?",shortAnswer:"O(n) for the temporary array + O(log n) for recursion stack = O(n).",explanation:"The temporary array is the main memory consumer.",hint:"O(n) total.",level:"intermediate",codeExample:"// O(n) memory"},{question:"How does merge sort handle large datasets?",shortAnswer:"It works well for large datasets, but the O(n) space can be a limitation.",explanation:"For very large datasets, external merge sort is used (sorting on disk).",hint:"Works for large data.",level:"advanced",codeExample:"// external merge sort"},{question:"What is external merge sort?",shortAnswer:"A version of merge sort that sorts data that doesn't fit in memory.",explanation:"It uses disk storage and multiple passes.",hint:"Sorting on disk.",level:"advanced",codeExample:"// external sort"},{question:"What is the time complexity of external merge sort?",shortAnswer:"O(n log n) but with I/O costs, the constant factor is much larger.",explanation:"The number of passes over the data is O(log n).",hint:"I/O cost.",level:"advanced",codeExample:"// O(n log n) with I/O"},{question:"Why is merge sort considered a 'divide and conquer' algorithm?",shortAnswer:"Because it divides the problem into smaller subproblems and conquers them recursively.",explanation:"The divide step splits the array; the conquer step sorts and merges.",hint:"Divide, conquer, combine.",level:"basic",codeExample:"// divide and conquer"}],T=()=>{const[a,l]=d.useState("overview"),s="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(s,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 28"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Algorithm Analysis"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Merge Sort Complexity Analysis"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["A deep dive into the ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"O(n log n)"})," ","complexity of merge sort — the classic divide-and-conquer sorting algorithm with guaranteed performance."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is Merge Sort?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Merge sort"})," is a classic ",e.jsx("strong",{children:"divide-and-conquer"})," sorting algorithm that divides the array into two halves, recursively sorts each half, and then merges the sorted halves back together. It's known for its ",e.jsx("strong",{children:"guaranteed O(n log n)"})," time complexity in all cases (best, worst, and average)."]}),e.jsx("p",{children:"The algorithm works in three phases:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Divide:"})," Split the array into two halves."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conquer:"})," Recursively sort each half."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine:"})," Merge the two sorted halves back together."]})]}),e.jsx("p",{children:"Think of it like organizing a deck of cards: split the deck in half, sort each half (recursively), then merge them by comparing the top cards of each half. It's the algorithm behind Java's `Arrays.sort()` for objects (Timsort is a hybrid of merge sort and insertion sort)."})]})]}),e.jsxs("section",{className:t(s,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," How Merge Sort Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{step:"1. Divide",desc:"Split the array into two halves. If the array has 1 element, it's already sorted (base case).",icon:"✂️"},{step:"2. Conquer",desc:"Recursively sort each half. This creates a recursion tree of depth log₂(n).",icon:"🔄"},{step:"3. Merge",desc:"Merge the two sorted halves by comparing elements from each half and placing them in order.",icon:"🔗"}].map((r,n)=>e.jsxs("div",{className:t(i(n),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-3xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{className:t(s,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{case:"Best Case (Θ(n log n))",desc:"Even if the array is already sorted, merge sort still does all the work.",example:"n log n comparisons."},{case:"Worst Case (Θ(n log n))",desc:"Merge sort is always O(n log n), even in the worst case.",example:"n log n comparisons."},{case:"Average Case (Θ(n log n))",desc:"The average case is also O(n log n).",example:"n log n comparisons."}].map((r,n)=>e.jsxs("div",{className:t(i(n+3),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.case}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:r.desc}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-2",children:r.example})]},n))})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Merge Sort Tree"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full h-auto max-h-72",role:"img","aria-label":"Merge sort visualization",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow28",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Original Array: [38, 27, 43, 3, 9, 82, 10]"}),e.jsx("rect",{x:"150",y:"35",width:"200",height:"25",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"250",y:"53",textAnchor:"middle",fontSize:"11",fill:"white",children:"[38, 27, 43, 3]"}),e.jsx("rect",{x:"450",y:"35",width:"200",height:"25",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"550",y:"53",textAnchor:"middle",fontSize:"11",fill:"white",children:"[9, 82, 10]"}),e.jsx("rect",{x:"100",y:"75",width:"120",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"160",y:"91",textAnchor:"middle",fontSize:"10",fill:"white",children:"[38, 27]"}),e.jsx("rect",{x:"230",y:"75",width:"120",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"290",y:"91",textAnchor:"middle",fontSize:"10",fill:"white",children:"[43, 3]"}),e.jsx("rect",{x:"420",y:"75",width:"90",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"465",y:"91",textAnchor:"middle",fontSize:"10",fill:"white",children:"[9, 82]"}),e.jsx("rect",{x:"520",y:"75",width:"90",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"565",y:"91",textAnchor:"middle",fontSize:"10",fill:"white",children:"[10]"}),e.jsx("rect",{x:"60",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"85",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[38]"}),e.jsx("rect",{x:"120",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"145",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[27]"}),e.jsx("rect",{x:"200",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"225",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[43]"}),e.jsx("rect",{x:"260",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"285",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[3]"}),e.jsx("rect",{x:"390",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"415",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[9]"}),e.jsx("rect",{x:"450",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"475",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[82]"}),e.jsx("rect",{x:"530",y:"115",width:"50",height:"18",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"555",y:"129",textAnchor:"middle",fontSize:"9",fill:"white",children:"[10]"}),e.jsx("line",{x1:"250",y1:"60",x2:"160",y2:"75",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"250",y1:"60",x2:"290",y2:"75",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"160",y1:"97",x2:"85",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"160",y1:"97",x2:"145",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"290",y1:"97",x2:"225",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"290",y1:"97",x2:"285",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("text",{x:"400",y:"155",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"↓ Merging (O(n) per level) ↓"}),e.jsx("rect",{x:"80",y:"170",width:"140",height:"22",rx:"4",fill:"#fbbf24",opacity:"0.7"}),e.jsx("text",{x:"150",y:"186",textAnchor:"middle",fontSize:"10",fill:"white",children:"[27, 38]"}),e.jsx("rect",{x:"230",y:"170",width:"100",height:"22",rx:"4",fill:"#fbbf24",opacity:"0.7"}),e.jsx("text",{x:"280",y:"186",textAnchor:"middle",fontSize:"10",fill:"white",children:"[3, 43]"}),e.jsx("rect",{x:"400",y:"170",width:"120",height:"22",rx:"4",fill:"#fbbf24",opacity:"0.7"}),e.jsx("text",{x:"460",y:"186",textAnchor:"middle",fontSize:"10",fill:"white",children:"[9, 82]"}),e.jsx("rect",{x:"530",y:"170",width:"80",height:"22",rx:"4",fill:"#fbbf24",opacity:"0.7"}),e.jsx("text",{x:"570",y:"186",textAnchor:"middle",fontSize:"10",fill:"white",children:"[10]"}),e.jsx("rect",{x:"120",y:"210",width:"220",height:"22",rx:"4",fill:"#a78bfa",opacity:"0.7"}),e.jsx("text",{x:"230",y:"226",textAnchor:"middle",fontSize:"10",fill:"white",children:"[3, 27, 38, 43]"}),e.jsx("rect",{x:"410",y:"210",width:"180",height:"22",rx:"4",fill:"#a78bfa",opacity:"0.7"}),e.jsx("text",{x:"500",y:"226",textAnchor:"middle",fontSize:"10",fill:"white",children:"[9, 10, 82]"}),e.jsx("rect",{x:"150",y:"250",width:"500",height:"25",rx:"4",fill:"#f87171",opacity:"0.8"}),e.jsx("text",{x:"400",y:"268",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"[3, 9, 10, 27, 38, 43, 82]"}),e.jsx("text",{x:"400",y:"310",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"There are log₂(n) levels, and each level does O(n) work → O(n log n)"}),e.jsx("text",{x:"400",y:"330",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Space complexity: O(n) for the temporary array used during merging."})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Merge sort creates a recursion tree with log₂(n) levels. At each level, the total work is O(n), giving O(n log n) time. It uses O(n) extra space for the merge step."})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Relation"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = 2T(n/2) + O(n),   T(1) = O(1)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Each step does O(n) work (merging) and makes two recursive calls on half the input."}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Solving the recurrence (Master Theorem, Case 2):",e.jsx("span",{className:"block font-mono",children:"T(n) = n · log₂(n) = O(n log n)"})]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2",children:["Time Complexity: ",e.jsx("span",{className:"font-mono",children:"Θ(n log n)"})," (all cases)"]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:["Space Complexity: ",e.jsx("span",{className:"font-mono",children:"O(n)"})," (auxiliary array for merging)"]})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Merge sort is stable",desc:"It preserves the relative order of equal elements, which is useful for sorting by multiple keys."},{tip:"Use insertion sort for small subarrays",desc:"Timsort (Java's sort) uses insertion sort for small subarrays to improve performance."},{tip:"Watch the space complexity",desc:"Merge sort uses O(n) extra space, which can be a problem for very large arrays."},{tip:"Prefer iterative for memory efficiency",desc:"Iterative merge sort uses less stack space than recursive (O(1) vs O(log n))."}].map((r,n)=>e.jsxs("div",{className:t(i(n+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that merge sort needs extra space:"})," The merge step requires a temporary array of size O(n). This can be a memory issue for large datasets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrectly implementing the merge step:"})," Off-by-one errors in the merge loop are common. Always test with small arrays first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming merge sort is the fastest sorting algorithm:"})," For small arrays, insertion sort is faster. For large arrays, quicksort is often faster in practice (though merge sort has guaranteed performance)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misunderstanding the complexity:"})," Some think merge sort is O(n) because it does O(n) work per level. But there are O(log n) levels, so total is O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling large arrays:"})," The O(n) space complexity means merge sort can be memory-intensive for very large arrays (e.g., > 100 million elements).",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Debangshu"})," once tried to sort an array of 50 million integers using merge sort and ran out of memory. He switched to quicksort with in-place partitioning."]})]})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use merge sort when stability is required"})," — it preserves the order of equal elements."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative merge sort"})," to avoid recursion stack overhead."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use insertion sort for small subarrays"})," (n ≤ 50) to improve performance."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use in-place merging when possible"})," to reduce space complexity (though rare in practice)."]})})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you explain the divide-conquer-merge approach?","✅ Do you know the time complexity (O(n log n)) and why?","✅ Can you write both recursive and iterative implementations?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you identify the recurrence T(n) = 2T(n/2) + O(n)?","✅ Do you know when to use merge sort vs other sorts?"].map((r,n)=>e.jsx("div",{className:t(i(n+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},n))})]}),e.jsxs("section",{className:t(s,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For merge sort, how many levels are there in the recursion tree? What is the work done at each level? That's log₂(n) levels, O(n) work each → O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if merge sort used a 3-way split instead of 2-way? The recurrence would be T(n) = 3T(n/3) + O(n), which still solves to O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 10,000 student records that need to be sorted. Merge sort will use about 10,000 × log₂(10,000) ≈ 140,000 comparisons. Bubble sort would use 100,000,000 comparisons. The difference is huge!"]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort — Recursive (O(n log n) Time, O(n) Space)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Recursive implementation of merge sort using divide-and-conquer."}),e.jsx(o,{fileModule:h,title:"MergeSortRecursive.java",highlightLines:[]})]}),e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort — Iterative (O(n log n) Time, O(n) Space)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Iterative (bottom-up) implementation of merge sort. Avoids recursion stack overhead."}),e.jsx(o,{fileModule:g,title:"MergeSortIterative.java",highlightLines:[]})]}),e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Merge Sort Analysis — Comparing with Other Sorts"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares merge sort with quicksort and insertion sort for different input sizes."}),e.jsx(o,{fileModule:x,title:"MergeSortAnalysis.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:t(s,"space-y-4"),children:e.jsx(m,{title:"Merge Sort Complexity Analysis — FAQs",questions:p})})]}),e.jsx("div",{className:t(s,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:"Merge sort is the quintessential divide-and-conquer algorithm. I emphasize to students that it's the 'guaranteed' O(n log n) sort — it doesn't have a bad case like quicksort. The recurrence T(n) = 2T(n/2) + O(n) is a classic example of the Master Theorem. I make sure students understand why the space complexity is O(n) — the temporary array used during merging. Also, I highlight that merge sort is stable, which is important for multi-key sorting. Have students practice both recursive and iterative implementations and compare them. Finally, remind them that Timsort (used in Java) is a hybrid of merge sort and insertion sort, showing the practical importance of this algorithm."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 28 · Merge Sort Complexity Analysis · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

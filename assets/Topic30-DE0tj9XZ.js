import{r as d,j as e}from"./index-NACEEa8w.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-Co0nmDkI.js";import{F as m}from"./FAQTemplate-Bm57jzsr.js";import{J as o}from"./JavaFileLoader-Bpvh3LEd.js";import"./github-W-9UECod.js";import"./createLucideIcon-DogKn5wF.js";import"./git-branch-BkCyvWIP.js";import"./JavaCodeBlock-BenGqs1_.js";import"./prism-aQ4BM5eP.js";import"./browser-CZeQo2s3.js";import"./prism-java-BwO6k4I_.js";const h=`/**\r
 * Compares different algorithms for the same task.\r
 * Shows how choice of algorithm affects performance.\r
 */\r
public class AlgorithmComparison {\r
    public static void main(String[] args) {\r
        int n = 100000;\r
\r
        // 1. Search: Linear vs Binary\r
        int[] sortedArr = new int[n];\r
        for (int i = 0; i < n; i++) sortedArr[i] = i;\r
        int target = n - 1;\r
\r
        System.out.println("=== Search Comparison ===");\r
        System.out.println("Array size: " + n);\r
\r
        long start = System.nanoTime();\r
        int linearResult = linearSearch(sortedArr, target);\r
        long end = System.nanoTime();\r
        System.out.println("Linear search: " + (end - start) / 1_000_000 + " ms");\r
\r
        start = System.nanoTime();\r
        int binaryResult = binarySearch(sortedArr, target);\r
        end = System.nanoTime();\r
        System.out.println("Binary search: " + (end - start) / 1_000_000 + " ms");\r
\r
        // 2. Sorting: Bubble vs Merge (using smaller n for bubble)\r
        System.out.println("\\n=== Sorting Comparison ===");\r
        int smallN = 1000;\r
        int[] arr1 = generateRandomArray(smallN);\r
        int[] arr2 = arr1.clone();\r
\r
        start = System.nanoTime();\r
        bubbleSort(arr1);\r
        end = System.nanoTime();\r
        System.out.println("Bubble sort (n=" + smallN + "): " + (end - start) / 1_000_000 + " ms");\r
\r
        start = System.nanoTime();\r
        mergeSort(arr2, 0, arr2.length - 1);\r
        end = System.nanoTime();\r
        System.out.println("Merge sort (n=" + smallN + "): " + (end - start) / 1_000_000 + " ms");\r
\r
        System.out.println("\\nBinary search is O(log n) vs linear O(n) — huge difference.");\r
        System.out.println("Merge sort is O(n log n) vs bubble O(n²) — also huge.");\r
    }\r
\r
    public static int linearSearch(int[] arr, int target) {\r
        for (int i = 0; i < arr.length; i++) {\r
            if (arr[i] == target) return i;\r
        }\r
        return -1;\r
    }\r
\r
    public static int binarySearch(int[] arr, int target) {\r
        int low = 0, high = arr.length - 1;\r
        while (low <= high) {\r
            int mid = low + (high - low) / 2;\r
            if (arr[mid] == target) return mid;\r
            if (arr[mid] < target) low = mid + 1;\r
            else high = mid - 1;\r
        }\r
        return -1;\r
    }\r
\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            for (int j = 0; j < n - 1 - i; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                }\r
            }\r
        }\r
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
            if (L[i] <= R[j]) arr[k++] = L[i++];\r
            else arr[k++] = R[j++];\r
        }\r
        while (i < n1) arr[k++] = L[i++];\r
        while (j < n2) arr[k++] = R[j++];\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        java.util.Random rand = new java.util.Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
}`,g=`/**\r
 * Compares theoretical growth rates (Big-O) with practical measurements.\r
 * Shows why algorithms with better Big-O are preferred for large n.\r
 */\r
public class GrowthRatesComparison {\r
    public static void main(String[] args) {\r
        int[] sizes = {10, 100, 1000, 10000, 100000};\r
\r
        System.out.println("n\\tO(n)\\tO(n log n)\\tO(n²)\\t\\tO(2ⁿ)");\r
        System.out.println("------------------------------------------------");\r
\r
        for (int n : sizes) {\r
            long linear = n;\r
            long nLogN = (long)(n * (Math.log(n) / Math.log(2)));\r
            long quadratic = (long)n * n;\r
            long exponential = 1L << n; // only for small n\r
\r
            // Only show exponential for n <= 10 (to avoid overflow)\r
            String expStr = (n <= 10) ? String.valueOf(exponential) : "too large";\r
\r
            System.out.printf("%d\\t%d\\t%d\\t%d\\t\\t%s\\n", n, linear, nLogN, quadratic, expStr);\r
        }\r
\r
        System.out.println("\\nFor n=1,000,000:");\r
        int n = 1000000;\r
        long linear = n;\r
        long nLogN = (long)(n * (Math.log(n) / Math.log(2)));\r
        long quadratic = (long)n * n;\r
        System.out.println("O(n) ≈ " + linear + " operations");\r
        System.out.println("O(n log n) ≈ " + nLogN + " operations");\r
        System.out.println("O(n²) ≈ " + quadratic + " operations");\r
        System.out.println("O(n log n) is " + (quadratic / nLogN) + "x faster than O(n²)!");\r
\r
        // Simulate actual runtime\r
        System.out.println("\\nSimulating algorithm runtime (ns):");\r
        System.out.println("n\\t\\tO(n)\\tO(n log n)\\tO(n²)");\r
        int[] simSizes = {100, 500, 1000, 2000, 5000};\r
        for (int s : simSizes) {\r
            // Simulate O(n) — a simple loop\r
            long start = System.nanoTime();\r
            int sum = 0;\r
            for (int i = 0; i < s; i++) sum += i;\r
            long timeN = System.nanoTime() - start;\r
\r
            // Simulate O(n log n) — nested loop with halving\r
            start = System.nanoTime();\r
            int count = 0;\r
            for (int i = 0; i < s; i++) {\r
                int k = s;\r
                while (k > 1) {\r
                    k /= 2;\r
                    count++;\r
                }\r
            }\r
            long timeNLogN = System.nanoTime() - start;\r
\r
            // Simulate O(n²) — nested loop\r
            start = System.nanoTime();\r
            count = 0;\r
            for (int i = 0; i < s; i++) {\r
                for (int j = 0; j < s; j++) {\r
                    count++;\r
                }\r
            }\r
            long timeN2 = System.nanoTime() - start;\r
\r
            System.out.printf("%d\\t\\t%d\\t%d\\t\\t%d\\n", s, timeN, timeNLogN, timeN2);\r
        }\r
    }\r
}`,x=`/**\r
 * Demonstrates that for small n, O(n²) can be faster than O(n log n)\r
 * due to lower constant factors and overhead.\r
 */\r
public class PracticalTradeoffs {\r
    public static void main(String[] args) {\r
        int[] sizes = {10, 20, 30, 50, 100, 200, 500};\r
\r
        System.out.println("Comparing Bubble Sort (O(n²)) vs Merge Sort (O(n log n))");\r
        System.out.println("n\\t\\tBubble (ms)\\tMerge (ms)\\tFaster");\r
        System.out.println("------------------------------------------------");\r
\r
        for (int n : sizes) {\r
            int[] arr1 = generateRandomArray(n);\r
            int[] arr2 = arr1.clone();\r
\r
            // Bubble Sort\r
            long start = System.nanoTime();\r
            bubbleSort(arr1);\r
            long bubbleTime = (System.nanoTime() - start) / 1_000_000;\r
\r
            // Merge Sort\r
            start = System.nanoTime();\r
            mergeSort(arr2, 0, arr2.length - 1);\r
            long mergeTime = (System.nanoTime() - start) / 1_000_000;\r
\r
            String faster = (bubbleTime < mergeTime) ? "Bubble" : "Merge";\r
            System.out.printf("%d\\t\\t%d\\t\\t%d\\t\\t%s\\n", n, bubbleTime, mergeTime, faster);\r
        }\r
\r
        System.out.println("\\nFor small n (n < 30), bubble sort can be faster because:");\r
        System.out.println("  - Lower constant factor");\r
        System.out.println("  - No recursion overhead");\r
        System.out.println("  - In-place (no extra array allocation)");\r
        System.out.println("For large n, merge sort is always faster.");\r
    }\r
\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            boolean swapped = false;\r
            for (int j = 0; j < n - 1 - i; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            if (!swapped) break;\r
        }\r
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
            if (L[i] <= R[j]) arr[k++] = L[i++];\r
            else arr[k++] = R[j++];\r
        }\r
        while (i < n1) arr[k++] = L[i++];\r
        while (j < n2) arr[k++] = R[j++];\r
    }\r
\r
    public static int[] generateRandomArray(int n) {\r
        int[] arr = new int[n];\r
        java.util.Random rand = new java.util.Random(42);\r
        for (int i = 0; i < n; i++) arr[i] = rand.nextInt(n);\r
        return arr;\r
    }\r
}`,p=[{question:"What is the most important factor when comparing algorithms?",shortAnswer:"It depends — time complexity, space complexity, constants, and input size all matter.",explanation:"The 'best' algorithm depends on the specific context and constraints.",hint:"No single answer.",level:"basic",codeExample:"// Depends on the situation"},{question:"Which is faster: O(n) or O(n log n)?",shortAnswer:"O(n) is faster for large n.",explanation:"Linear time grows slower than linearithmic time.",hint:"Compare growth rates.",level:"basic",codeExample:"// O(n) < O(n log n)"},{question:"Can an O(n²) algorithm be faster than an O(n log n) algorithm?",shortAnswer:"Yes, for small input sizes or when constants in O(n²) are much smaller.",explanation:"Big-O ignores constants; in practice, constants matter.",hint:"Constants matter.",level:"intermediate",codeExample:"// For small n, O(n²) can be faster"},{question:"When should you choose quicksort over merge sort?",shortAnswer:"When you need in-place sorting and are okay with worst-case O(n²) (rare with random pivot).",explanation:"Quicksort is faster on average and uses less memory than merge sort.",hint:"In-place vs stable.",level:"intermediate",codeExample:"// quicksort for speed, merge sort for stability"},{question:"When should you choose merge sort over quicksort?",shortAnswer:"When stability is required or guaranteed O(n log n) performance is needed.",explanation:"Merge sort is stable and always O(n log n), but uses O(n) space.",hint:"Stability and guarantee.",level:"intermediate",codeExample:"// merge sort for stability"},{question:"Which is more memory efficient: quicksort or merge sort?",shortAnswer:"Quicksort uses O(log n) space; merge sort uses O(n) space.",explanation:"Quicksort is in-place; merge sort needs a temporary array.",hint:"Memory usage.",level:"basic",codeExample:"// quicksort uses O(log n), merge sort O(n)"},{question:"What is the time complexity of binary search?",shortAnswer:"O(log n) — logarithmic time.",explanation:"Each step halves the search space.",hint:"Halving.",level:"basic",codeExample:"// O(log n)"},{question:"What is the time complexity of linear search?",shortAnswer:"O(n) — linear time.",explanation:"Each element is checked one by one.",hint:"One by one.",level:"basic",codeExample:"// O(n)"},{question:"For n=10,000, which is faster: O(n) or O(n²)?",shortAnswer:"O(n) is much faster — 10,000 vs 100,000,000 operations.",explanation:"The difference is 10,000×.",hint:"Huge difference.",level:"basic",codeExample:"// 10,000 vs 100,000,000"},{question:"What does a 'constant factor' mean in algorithm analysis?",shortAnswer:"The fixed number of operations per element, which Big-O ignores.",explanation:"An O(n) algorithm could be 2n or 100n operations; both are O(n).",hint:"Hidden multiplier.",level:"intermediate",codeExample:"// O(2n) = O(100n) = O(n)"},{question:"Why is it important to consider the input size when choosing an algorithm?",shortAnswer:"Because different algorithms have different growth rates; some work well for small n, others for large n.",explanation:"O(n²) is fine for n=100 but terrible for n=1,000,000.",hint:"Scale matters.",level:"basic",codeExample:"// Choose based on n"},{question:"What is the lower bound for comparison-based sorting?",shortAnswer:"Ω(n log n).",explanation:"No comparison-based sorting algorithm can do better than O(n log n) in the worst case.",hint:"Lower bound.",level:"advanced",codeExample:"// Ω(n log n)"},{question:"Which sorting algorithm is used in Java's Arrays.sort() for primitives?",shortAnswer:"Dual-pivot quicksort (for primitives).",explanation:"For objects, it uses Timsort (a hybrid of merge sort and insertion sort).",hint:"Dual-pivot quicksort.",level:"advanced",codeExample:"// Arrays.sort(int[]) uses dual-pivot quicksort"},{question:"Which sorting algorithm is used in Java's Collections.sort()?",shortAnswer:"Timsort (a hybrid of merge sort and insertion sort).",explanation:"Timsort is stable and efficient for real-world data.",hint:"Hybrid sort.",level:"advanced",codeExample:"// Collections.sort() uses Timsort"},{question:"What is the time complexity of Java's Arrays.sort() for objects?",shortAnswer:"O(n log n) — uses Timsort.",explanation:"Timsort is O(n log n) worst-case and O(n) best-case.",hint:"Timsort.",level:"advanced",codeExample:"// O(n log n)"},{question:"What is the space complexity of Java's Arrays.sort() for primitives?",shortAnswer:"O(log n) — quicksort uses recursion stack.",explanation:"Quicksort is in-place, so space is O(log n) for the stack.",hint:"In-place.",level:"advanced",codeExample:"// O(log n) space"},{question:"What is the space complexity of Java's Arrays.sort() for objects?",shortAnswer:"O(n) — Timsort uses O(n) space.",explanation:"Timsort creates temporary arrays for merging.",hint:"O(n) space.",level:"advanced",codeExample:"// O(n) space"},{question:"Can we sort in O(n) time?",shortAnswer:"Yes, with non-comparison sorts like counting sort, radix sort.",explanation:"Non-comparison sorts can be O(n) under certain conditions.",hint:"Non-comparison.",level:"advanced",codeExample:"// counting sort O(n+k)"},{question:"What is the time complexity of a hash table lookup?",shortAnswer:"O(1) average, O(n) worst-case.",explanation:"Hash tables are O(1) on average but can degrade to O(n) with collisions.",hint:"Average constant.",level:"intermediate",codeExample:"// map.get(key) — O(1) average"},{question:"What is the time complexity of a TreeMap lookup?",shortAnswer:"O(log n) — balanced BST operations.",explanation:"TreeMap uses a Red-Black tree.",hint:"O(log n).",level:"intermediate",codeExample:"// treeMap.get(key) — O(log n)"},{question:"What is the trade-off between HashMap and TreeMap?",shortAnswer:"HashMap is O(1) average but unordered; TreeMap is O(log n) but sorted.",explanation:"Choose HashMap for speed, TreeMap for sorted order.",hint:"Speed vs order.",level:"intermediate",codeExample:"// HashMap: O(1), TreeMap: O(log n)"},{question:"Why is it important to profile your code?",shortAnswer:"Because theoretical complexity doesn't always match practical performance.",explanation:"Constants, hardware, and data distribution affect real-world performance.",hint:"Measure, don't guess.",level:"intermediate",codeExample:"// Use a profiler"},{question:"What is the best sorting algorithm for small arrays (n < 50)?",shortAnswer:"Insertion sort is often fastest for small arrays.",explanation:"Low overhead and good cache behavior make insertion sort efficient for small n.",hint:"Small arrays.",level:"intermediate",codeExample:"// insertion sort for small n"},{question:"What is the best sorting algorithm for large arrays (n > 10,000)?",shortAnswer:"Quicksort (with random pivot) or merge sort, depending on requirements.",explanation:"Both are O(n log n); quicksort is faster on average, merge sort is stable.",hint:"Efficient sorting.",level:"intermediate",codeExample:"// quicksort or merge sort"},{question:"When should you use a linked list over an array?",shortAnswer:"When you need frequent insertions/deletions at arbitrary positions.",explanation:"Linked lists have O(1) insertion/deletion at known positions.",hint:"Frequent insertions.",level:"intermediate",codeExample:"// linked list for frequent insertions"},{question:"When should you use an array over a linked list?",shortAnswer:"When you need fast random access (O(1)) and traversal.",explanation:"Arrays have O(1) access by index and better cache locality.",hint:"Fast access.",level:"intermediate",codeExample:"// array for random access"},{question:"What is the time complexity of adding an element to the end of an ArrayList?",shortAnswer:"O(1) amortized.",explanation:"Most additions are O(1), but occasional resizing is O(n) for n elements.",hint:"Amortized constant.",level:"intermediate",codeExample:"// list.add(element) — O(1) amortized"},{question:"What is the time complexity of adding an element to the beginning of an ArrayList?",shortAnswer:"O(n) — because all elements must be shifted.",explanation:"Inserting at the front requires shifting all other elements.",hint:"Shift needed.",level:"intermediate",codeExample:"// list.add(0, element) — O(n)"},{question:"What is the time complexity of adding an element to the beginning of a LinkedList?",shortAnswer:"O(1) — constant time.",explanation:"Linked lists support O(1) insertion at the head.",hint:"Constant time.",level:"intermediate",codeExample:"// list.addFirst(element) — O(1)"},{question:"What is the time complexity of accessing an element in a LinkedList by index?",shortAnswer:"O(n) — linear time.",explanation:"You must traverse the list from the beginning.",hint:"Traversal needed.",level:"intermediate",codeExample:"// list.get(index) — O(n)"},{question:"What is the time complexity of accessing an element in an ArrayList by index?",shortAnswer:"O(1) — constant time.",explanation:"Arrays support direct random access.",hint:"Direct access.",level:"basic",codeExample:"// list.get(index) — O(1)"}],C=()=>{const[s,l]=d.useState("overview"),n="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=t=>`animate-[fadeSlideUp_0.5s_ease-out_${t*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:r(n,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 30"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Algorithm Analysis"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Comparing Algorithm Efficiency"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["How to choose between algorithms — understanding ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"trade-offs"})," ","in time complexity, space complexity, constants, and practical considerations."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(t=>e.jsxs("button",{onClick:()=>l(t),className:r("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",s===t?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[t==="overview"&&"📖 Overview",t==="code"&&"☕ Code Examples",t==="faq"&&"❓ FAQ"]},t))}),e.jsxs("div",{className:"space-y-12",children:[s==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"}),' What Does "Comparing Efficiency" Mean?']}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["When we compare algorithm efficiency, we're not just looking at ",e.jsx("strong",{children:"time complexity"}),"in isolation. We need to consider multiple factors:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Time Complexity:"})," How does the runtime grow with input size?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Space Complexity:"})," How much memory does the algorithm use?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constant Factors:"})," In practice, constants can make a difference."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Input Characteristics:"})," Best, worst, and average cases matter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implementation Complexity:"})," Simpler code is often preferred."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real-World Constraints:"})," Hardware, data size, and environment."]})]}),e.jsx("p",{children:'Think of it like choosing a vehicle for a trip: a bicycle (O(n)) is efficient for short distances, a car (O(n log n)) is good for medium trips, and a plane (O(1)) is best for long trips but has high overhead. The "best" algorithm depends on the specific situation.'})]})]}),e.jsxs("section",{className:r(n,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Key Factors in Comparison"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:"⏱️",title:"Time Complexity",desc:"The growth rate of runtime with input size (Big-O).",example:"O(n) vs O(n log n) vs O(n²)"},{icon:"💾",title:"Space Complexity",desc:"Memory usage during execution (auxiliary space).",example:"O(1) vs O(log n) vs O(n)"},{icon:"🔢",title:"Constant Factors",desc:"Hidden constants that affect actual runtime.",example:"2n vs 100n — both are O(n), but one is faster."},{icon:"📊",title:"Input Characteristics",desc:"Best, worst, and average case behavior.",example:"Quicksort: O(n log n) avg, O(n²) worst."},{icon:"🧩",title:"Implementation Complexity",desc:"Code readability, maintainability, and bug potential.",example:"Simple algorithms vs complex optimizations."},{icon:"⚡",title:"Practical Constraints",desc:"Hardware, data size, and real-world environment.",example:"Memory limits, cache behavior, parallelism."}].map((t,a)=>e.jsxs("div",{className:r(i(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:t.icon}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-1",children:t.example})]},a))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Growth Rates Comparison"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full h-auto max-h-72",role:"img","aria-label":"Growth rates comparison",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow30",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsxs("g",{stroke:"#d1d5db",strokeWidth:"0.5",opacity:"0.3",className:"dark:stroke-gray-700",children:[e.jsx("line",{x1:"60",y1:"50",x2:"760",y2:"50"}),e.jsx("line",{x1:"60",y1:"100",x2:"760",y2:"100"}),e.jsx("line",{x1:"60",y1:"150",x2:"760",y2:"150"}),e.jsx("line",{x1:"60",y1:"200",x2:"760",y2:"200"}),e.jsx("line",{x1:"60",y1:"250",x2:"760",y2:"250"}),e.jsx("line",{x1:"60",y1:"300",x2:"760",y2:"300"}),e.jsx("line",{x1:"60",y1:"50",x2:"60",y2:"300"}),e.jsx("line",{x1:"207",y1:"50",x2:"207",y2:"300"}),e.jsx("line",{x1:"354",y1:"50",x2:"354",y2:"300"}),e.jsx("line",{x1:"501",y1:"50",x2:"501",y2:"300"}),e.jsx("line",{x1:"648",y1:"50",x2:"648",y2:"300"})]}),e.jsx("line",{x1:"60",y1:"300",x2:"760",y2:"300",stroke:"#374151",strokeWidth:"2",className:"dark:stroke-gray-400"}),e.jsx("line",{x1:"60",y1:"50",x2:"60",y2:"300",stroke:"#374151",strokeWidth:"2",className:"dark:stroke-gray-400"}),e.jsx("text",{x:"400",y:"330",textAnchor:"middle",fontSize:"13",fill:"#6b7280",className:"dark:fill-gray-400",children:"Input Size (n)"}),e.jsx("text",{x:"20",y:"180",textAnchor:"middle",fontSize:"13",fill:"#6b7280",className:"dark:fill-gray-400",transform:"rotate(-90,20,180)",children:"Operations"}),e.jsx("rect",{x:"60",y:"80",width:"700",height:"4",fill:"#818cf8",opacity:"0.8",rx:"2"}),e.jsx("text",{x:"770",y:"85",fontSize:"10",fill:"#818cf8",fontWeight:"bold",children:"O(1)"}),e.jsx("path",{d:"M60 290 L200 260 L340 230 L480 195 L620 155 L760 120",fill:"none",stroke:"#34d399",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("text",{x:"770",y:"122",fontSize:"10",fill:"#34d399",fontWeight:"bold",children:"O(log n)"}),e.jsx("path",{d:"M60 300 L760 60",fill:"none",stroke:"#f472b6",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("text",{x:"770",y:"62",fontSize:"10",fill:"#f472b6",fontWeight:"bold",children:"O(n)"}),e.jsx("path",{d:"M60 300 C200 260 340 200 480 140 C560 100 640 80 760 55",fill:"none",stroke:"#a78bfa",strokeWidth:"2.5",strokeLinecap:"round",strokeDasharray:"6 4"}),e.jsx("text",{x:"770",y:"57",fontSize:"10",fill:"#a78bfa",fontWeight:"bold",children:"O(n log n)"}),e.jsx("path",{d:"M60 300 Q100 290 200 240 Q300 160 400 100 Q500 60 600 55 Q700 52 760 52",fill:"none",stroke:"#fbbf24",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("text",{x:"770",y:"54",fontSize:"10",fill:"#fbbf24",fontWeight:"bold",children:"O(n²)"}),e.jsx("path",{d:"M60 300 Q100 300 200 290 Q300 250 400 160 Q500 80 600 55 Q700 52 760 52",fill:"none",stroke:"#f87171",strokeWidth:"2.5",strokeLinecap:"round",strokeDasharray:"4 4"}),e.jsx("text",{x:"770",y:"55",fontSize:"10",fill:"#f87171",fontWeight:"bold",children:"O(2ⁿ)"}),e.jsxs("line",{x1:"200",y1:"300",x2:"200",y2:"230",stroke:"#fbbf24",strokeWidth:"2",opacity:"0.5",children:[e.jsx("animate",{attributeName:"x1",values:"100;700;100",dur:"6s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"x2",values:"100;700;100",dur:"6s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"6s",repeatCount:"indefinite"})]})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:'Different complexity classes grow at vastly different rates. The "best" algorithm depends on the input size, available resources, and specific requirements.'})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Decision Framework: How to Choose"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"1. Understand Your Data Size"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Small data (n < 1000) → O(n²) may be fine. Large data (n > 10⁶) → O(n log n) or better is required."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"2. Consider Memory Constraints"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Limited memory → prefer in-place algorithms (O(1) space). Plenty of memory → merge sort may be fine."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"3. Evaluate Best/Worst/Average Cases"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"If your input is often worst-case, avoid algorithms with poor worst-case performance."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"4. Think About Implementation Effort"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Simple code is easier to maintain. Use built-in functions when available."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"5. Profile and Measure"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Theory is important, but real-world performance matters. Always profile your code."})]})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Real-World Comparison Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Search:"})," ","If you have a sorted array of 1 million elements, binary search (O(log n) ≈ 20 steps) is far better than linear search (O(n) ≈ 1,000,000 steps)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Sorting:"})," ","For 10,000 items, merge sort (O(n log n) ≈ 140,000 operations) vs bubble sort (O(n²) ≈ 100,000,000 operations). Merge sort wins by a huge margin."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Data Structures:"})," ","For frequent lookups, HashMap (O(1) average) beats TreeMap (O(log n)) for large data. But TreeMap gives sorted order."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Classroom Analogy:"})," ",e.jsx("strong",{children:"Swadeep"})," needs to find a student's grade. If the list is sorted by roll number, binary search (O(log n)) is best. If it's unsorted, he must scan (O(n)) or use a hash table."]})})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always measure before optimizing",desc:"Profile your code to identify real bottlenecks before making changes."},{tip:"Consider the environment",desc:"A mobile app has different constraints than a server application."},{tip:"Use the right data structure",desc:"Choosing the right data structure often simplifies your algorithm."},{tip:"Don't forget about I/O",desc:"In real systems, I/O operations often dominate CPU time."}].map((t,a)=>e.jsxs("div",{className:r(i(a+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",t.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc})]},a))})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Focusing only on Big-O:"})," An O(n log n) algorithm with a huge constant can be slower than an O(n²) algorithm with a tiny constant for small n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring space complexity:"})," A fast algorithm that uses too much memory may crash or be unusable in memory-constrained environments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming worst-case is always the best metric:"})," Sometimes average-case or best-case matters more. Quicksort is O(n²) worst-case but O(n log n) average and is the fastest in practice."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not considering the input distribution:"})," If your data is already nearly sorted, insertion sort (O(n) best) may outperform merge sort (O(n log n))."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over-optimizing prematurely:"})," Writing complex code for a 2% gain is often a waste. Make it work, make it right, then make it fast.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Debangshu"})," once spent a week optimizing an algorithm for a dataset of 100 items, only to find that the simpler O(n²) version was more than fast enough."]})]})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Profile before optimizing"})," — use tools like JProfiler or VisualVM."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use built-in functions"})," — Arrays.sort() and Collections.sort() are optimized."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Consider the full context"})," — data size, memory, hardware, and use case."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document your choices"})," — explain why you chose a particular algorithm."]})})]})]}),e.jsxs("section",{className:r(n,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you identify the time and space complexity of different algorithms?","✅ Do you understand the trade-offs between time and space?","✅ Can you choose between O(n) and O(n²) for a given data size?","✅ Do you know when to use built-in sorting vs custom sorting?","✅ Can you profile your code to find bottlenecks?","✅ Can you justify your algorithm choice in real-world terms?"].map((t,a)=>e.jsx("div",{className:r(i(a+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:t},a))})]}),e.jsxs("section",{className:r(n,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For n=100, O(n²)=10,000 and O(n log n)≈664 — both are fast. For n=1,000,000, O(n²)=10¹² vs O(n log n)≈20×10⁶ — the difference is huge."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you have unlimited memory but need to process 1 billion elements? You'd prefer O(n) time with O(n) space over O(n²) time with O(1) space."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has 50,000 students. Sorting them with quicksort (O(n log n)) is fine, but with bubble sort (O(n²)) it's impossible. Choosing the right algorithm matters!"]})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Algorithm Comparison — Searching and Sorting"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares different algorithms for the same task (searching and sorting) to show performance differences."}),e.jsx(o,{fileModule:h,title:"AlgorithmComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Growth Rates Comparison — Theoretical vs Practical"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares theoretical growth rates (Big-O) with practical measurements for different algorithms."}),e.jsx(o,{fileModule:g,title:"GrowthRatesComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:r(n,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Practical Trade-offs — When O(n²) is Better than O(n log n)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Demonstrates that for small n, O(n²) can be faster than O(n log n) due to lower constant factors."}),e.jsx(o,{fileModule:x,title:"PracticalTradeoffs.java",highlightLines:[]})]})]}),s==="faq"&&e.jsx("div",{className:r(n,"space-y-4"),children:e.jsx(m,{title:"Comparing Algorithm Efficiency — FAQs",questions:p})})]}),e.jsx("div",{className:r(n,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:"Comparing algorithm efficiency is the culmination of everything we've learned. I tell students: 'The best algorithm depends on the situation.' Use the following rules of thumb: For n < 100, O(n²) is usually fine. For n > 10,000, aim for O(n log n) or better. Always consider space: an in-place O(n²) can be better than an O(n) algorithm that uses O(n) memory. And always profile — theory is a guide, but real-world performance is what matters. Encourage students to think like engineers: choose the simplest algorithm that meets performance goals."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 30 · Comparing Algorithm Efficiency · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{C as default};

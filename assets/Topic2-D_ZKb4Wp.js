import{r as d,j as e}from"./index-Da242x_v.js";import{T as c}from"./TeacherSukantaHui-CPTgRfho.js";import{J as s}from"./JavaFileLoader-ByXlwT7S.js";import{F as m}from"./FAQTemplate-oa9iEk_9.js";import"./git-branch-DA1yYObF.js";import"./JavaCodeBlock-Dra3Hw0G.js";import"./prism-zhFG2M2I.js";import"./browser-B29B4uVk.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";const p=`public class BubbleSortBasic {\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            for (int j = 0; j < n - i - 1; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    // swap arr[j] and arr[j+1]\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                }\r
            }\r
            // Print after each pass (for demonstration)\r
            System.out.print("Pass " + (i+1) + ": ");\r
            printArray(arr);\r
        }\r
    }\r
    \r
    public static void printArray(int[] arr) {\r
        for (int num : arr) System.out.print(num + " ");\r
        System.out.println();\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] arr = {64, 34, 25, 12, 22, 11, 90};\r
        System.out.println("Original array:");\r
        printArray(arr);\r
        bubbleSort(arr);\r
        System.out.println("Sorted array:");\r
        printArray(arr);\r
    }\r
}`,h=`public class BubbleSortOptimized {\r
    public static void optimizedBubbleSort(int[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            for (int j = 0; j < n - i - 1; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            // If no swaps, array is already sorted\r
            if (!swapped) break;\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] arr = {1, 2, 3, 4, 5, 6, 7}; // already sorted\r
        System.out.println("Optimized bubble sort on sorted array: only O(n) passes");\r
        optimizedBubbleSort(arr);\r
        // No unnecessary passes\r
    }\r
}`,b=`public class SelectionSortBasic {\r
    public static void selectionSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            // Find the minimum element in unsorted part\r
            int minIdx = i;\r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j] < arr[minIdx]) {\r
                    minIdx = j;\r
                }\r
            }\r
            // Swap with the first unsorted element\r
            int temp = arr[minIdx];\r
            arr[minIdx] = arr[i];\r
            arr[i] = temp;\r
            \r
            System.out.print("After placing element " + (i+1) + ": ");\r
            printArray(arr);\r
        }\r
    }\r
    \r
    public static void printArray(int[] arr) {\r
        for (int num : arr) System.out.print(num + " ");\r
        System.out.println();\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] arr = {64, 25, 12, 22, 11};\r
        System.out.println("Original array:");\r
        printArray(arr);\r
        selectionSort(arr);\r
        System.out.println("Sorted array:");\r
        printArray(arr);\r
    }\r
}`,u=`public class SelectionSortStepByStep {\r
    public static void main(String[] args) {\r
        int[] arr = {29, 10, 14, 37, 13};\r
        System.out.println("Step-by-step selection sort:");\r
        printArray(arr);\r
        \r
        for (int i = 0; i < arr.length - 1; i++) {\r
            int minIdx = i;\r
            for (int j = i + 1; j < arr.length; j++) {\r
                if (arr[j] < arr[minIdx]) minIdx = j;\r
            }\r
            System.out.println("Minimum from index " + i + " to end is " + arr[minIdx] + " at position " + minIdx);\r
            // Swap\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
            printArray(arr);\r
        }\r
    }\r
    \r
    public static void printArray(int[] arr) {\r
        for (int num : arr) System.out.print(num + " ");\r
        System.out.println();\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class CompareSorts {\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            for (int j = 0; j < n - i - 1; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                }\r
            }\r
        }\r
    }\r
    \r
    public static void selectionSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            int minIdx = i;\r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j] < arr[minIdx]) minIdx = j;\r
            }\r
            int temp = arr[minIdx];\r
            arr[minIdx] = arr[i];\r
            arr[i] = temp;\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int size = 10000;\r
        int[] arr1 = new int[size];\r
        int[] arr2 = new int[size];\r
        // Fill with random numbers\r
        for (int i = 0; i < size; i++) {\r
            int val = (int)(Math.random() * size);\r
            arr1[i] = val;\r
            arr2[i] = val;\r
        }\r
        \r
        long start = System.nanoTime();\r
        bubbleSort(arr1);\r
        long end = System.nanoTime();\r
        System.out.println("Bubble sort time: " + (end - start) / 1e6 + " ms");\r
        \r
        start = System.nanoTime();\r
        selectionSort(arr2);\r
        end = System.nanoTime();\r
        System.out.println("Selection sort time: " + (end - start) / 1e6 + " ms");\r
        \r
        // Note: Both are O(n^2), but selection sort often faster due to fewer swaps.\r
    }\r
}`,a=[{question:"What is the time complexity of bubble sort in the worst case?",shortAnswer:"O(n²)",explanation:"Bubble sort compares and swaps adjacent elements. In the worst case (reverse sorted), it performs about n²/2 comparisons and swaps.",hint:"Quadratic time.",level:"basic",codeExample:"// n(n-1)/2 comparisons"},{question:"What is the best-case time complexity of optimized bubble sort?",shortAnswer:"O(n) when the array is already sorted.",explanation:"With a swap flag, if no swaps occur in a pass, the algorithm terminates early after one pass.",hint:"Linear time for sorted input.",level:"intermediate",codeExample:"boolean swapped; if (!swapped) break;"},{question:"Is bubble sort stable?",shortAnswer:"Yes.",explanation:"Bubble sort only swaps adjacent elements when they are out of order. Equal elements never cross each other, preserving original order.",hint:"Stable sorting preserves relative order of equal keys.",level:"basic",codeExample:"// Equal elements remain in same sequence"},{question:"What is the main advantage of selection sort over bubble sort?",shortAnswer:"Fewer swaps (O(n) swaps vs O(n²) swaps).",explanation:"Selection sort finds the minimum and swaps once per pass, while bubble sort may swap many times per pass.",hint:"Swap efficiency.",level:"intermediate",codeExample:"// Selection sort does at most n swaps total"},{question:"Is selection sort stable?",shortAnswer:"Not in its typical implementation.",explanation:"Selection sort can swap distant elements, potentially moving an equal element past another. It can be made stable with careful implementation, but usually it's not.",hint:"Long-distance swaps break stability.",level:"intermediate",codeExample:"// Example: [2a, 2b, 1] -> [1, 2b, 2a] order of 2's changed"},{question:"What is the space complexity of both bubble and selection sort?",shortAnswer:"O(1) (in-place).",explanation:"Both algorithms use only a few extra variables (loop counters, temporary swap variable) regardless of input size.",hint:"Constant extra memory.",level:"basic",codeExample:"// No additional arrays created"},{question:"Why is bubble sort called 'bubble' sort?",shortAnswer:"Because larger elements 'bubble up' to the end of the array like bubbles in water.",explanation:"During each pass, the largest unsorted element moves to its correct position at the end, resembling bubbles rising to the surface.",hint:"Visual analogy.",level:"basic",codeExample:"// Largest element moves to the rightmost"},{question:"How many passes does bubble sort require in the worst case?",shortAnswer:"n-1 passes.",explanation:"Each pass places one element in its final position. After n-1 passes, all elements are sorted.",hint:"One element per pass.",level:"basic",codeExample:"for (int i=0; i < n-1; i++)"},{question:"How can you optimize bubble sort?",shortAnswer:"Add a flag to detect if any swap occurred; if not, break early.",explanation:"If a pass completes without any swaps, the array is already sorted, and further passes are unnecessary.",hint:"Early termination.",level:"intermediate",codeExample:"boolean swapped = false; if (!swapped) break;"},{question:"What is the number of comparisons in selection sort for an array of size n?",shortAnswer:"n(n-1)/2 regardless of input.",explanation:"Selection sort always compares every pair of unsorted elements to find the minimum, so comparisons are fixed.",hint:"Always the same number of comparisons.",level:"intermediate",codeExample:"// Sum from 1 to n-1 = n(n-1)/2"},{question:"Which algorithm is better for nearly sorted data?",shortAnswer:"Bubble sort (optimized) because it can finish in O(n).",explanation:"If the array is almost sorted, bubble sort's early exit triggers quickly. Selection sort always takes O(n²) comparisons.",hint:"Best-case linear time.",level:"intermediate",codeExample:"// Optimized bubble sort on sorted array: one pass"},{question:"What is the main disadvantage of bubble sort?",shortAnswer:"It is very slow for large datasets (O(n²)).",explanation:"Bubble sort performs many unnecessary comparisons and swaps, making it impractical for arrays larger than a few thousand elements.",hint:"Quadratic time is slow.",level:"basic",codeExample:"// 1 million elements -> ~500 billion operations"},{question:"What is the main disadvantage of selection sort?",shortAnswer:"It always performs O(n²) comparisons, even on already sorted data.",explanation:"Unlike bubble sort, selection sort cannot detect if the array is sorted; it always goes through all comparisons.",hint:"No early exit.",level:"intermediate",codeExample:"// Always n(n-1)/2 comparisons"},{question:"Can bubble sort be used to sort in descending order?",shortAnswer:"Yes, change the comparison operator to '<'.",explanation:"To sort in descending order, swap when arr[j] < arr[j+1] instead of >.",hint:"Reverse the condition.",level:"basic",codeExample:"if (arr[j] < arr[j+1]) swap; // descending"},{question:"What happens if you don't use the optimization flag in bubble sort on a sorted array?",shortAnswer:"It still performs n-1 passes, wasting time.",explanation:"Without early exit, bubble sort will continue to compare and not swap, but still complete all passes.",hint:"Unnecessary work.",level:"basic",codeExample:"// Still O(n²) instead of O(n)"},{question:"How do you sort an array of objects using bubble sort?",shortAnswer:"Use Comparable interface or Comparator, and compare using compareTo() or compare().",explanation:"Instead of primitive comparison, call obj1.compareTo(obj2) for natural ordering.",hint:"Object comparison.",level:"expert",codeExample:"if (arr[j].compareTo(arr[j+1]) > 0) swap;"},{question:"Which sorting algorithm is taught first in most CS courses?",shortAnswer:"Bubble sort, due to its simplicity.",explanation:"Bubble sort is intuitive and easy to implement, making it a good starting point for understanding sorting concepts.",hint:"Pedagogical choice.",level:"basic",codeExample:"// Simple nested loops"},{question:"What is the stability of selection sort if implemented with a stable minimum selection?",shortAnswer:"It can be made stable by shifting elements instead of swapping.",explanation:"Instead of swapping, you can insert the minimum by shifting elements to the right, but this increases time complexity.",hint:"Trade-off.",level:"expert",codeExample:"// Not typical; usually unstable"},{question:"How many swaps does selection sort perform in the worst case?",shortAnswer:"n-1 swaps.",explanation:"Selection sort performs exactly one swap per pass (n-1 passes), regardless of data.",hint:"Linear number of swaps.",level:"intermediate",codeExample:"// At most n-1 swaps total"},{question:"Why is bubble sort rarely used in production?",shortAnswer:"Because it's too slow for large datasets; built-in sorts (like Arrays.sort) are much faster.",explanation:"Bubble sort's O(n²) time complexity makes it impractical for real-world applications with large data volumes.",hint:"Performance.",level:"basic",codeExample:"// Use Arrays.sort() instead"},{question:"What is the difference between bubble sort and selection sort in terms of number of swaps?",shortAnswer:"Bubble sort: O(n²) swaps; Selection sort: O(n) swaps.",explanation:"Bubble sort swaps on every inversion, while selection sort swaps only once per pass.",hint:"Swap count difference.",level:"intermediate",codeExample:"// Selection sort minimizes writes"},{question:"Can selection sort be used for linked lists?",shortAnswer:"Yes, but bubble sort is often easier on linked lists.",explanation:"Selection sort requires finding the minimum in the unsorted part, which requires O(n) scans on a linked list. Bubble sort can be implemented with pointer manipulation.",hint:"Both work but with different complexities.",level:"expert",codeExample:"// Not as efficient as merge sort for linked lists"},{question:"What is an inversion in the context of sorting?",shortAnswer:"A pair of elements (i, j) such that i < j but arr[i] > arr[j].",explanation:"Inversions measure how unsorted an array is. Bubble sort removes one inversion per swap, which is why it's slow on highly inverted arrays.",hint:"Out-of-order pairs.",level:"intermediate",codeExample:"// [3,1,2] has inversions: (3,1) and (3,2)"},{question:"How does bubble sort behave on an array with duplicate elements?",shortAnswer:"It remains stable; duplicates are not swapped because condition uses > (not >=).",explanation:"Using > ensures that equal elements are not swapped, preserving their relative order.",hint:"Stable handling.",level:"basic",codeExample:"if (arr[j] > arr[j+1]) // no swap if equal"},{question:"What is the adaptive property of sorting algorithms?",shortAnswer:"Adaptive algorithms perform better on partially sorted data.",explanation:"Optimized bubble sort is adaptive because it can finish early. Selection sort is not adaptive because it always does the same work.",hint:"Performance improves with pre-sortedness.",level:"expert",codeExample:"// Bubble sort adaptive, selection sort not"},{question:"How would you sort a large array of integers in Java without writing your own sort?",shortAnswer:"Use Arrays.sort(arr).",explanation:"Java's built-in sort uses Dual-Pivot Quicksort for primitives (O(n log n)) and TimSort for objects.",hint:"Don't reinvent the wheel.",level:"basic",codeExample:"import java.util.Arrays; Arrays.sort(arr);"},{question:"What is the main reason to learn bubble and selection sort if they are not used in production?",shortAnswer:"They teach fundamental algorithm design and analysis concepts.",explanation:"These simple sorts help beginners understand loops, swapping, complexity analysis, and stability before moving to advanced algorithms.",hint:"Pedagogical foundation.",level:"basic",codeExample:"// Building block for understanding"},{question:"What is the difference between a stable and unstable sort?",shortAnswer:"Stable sorts preserve the original order of equal elements; unstable sorts may change it.",explanation:"Stability matters when sorting by multiple keys (e.g., sort by last name, then by first name).",hint:"Order of equal items.",level:"intermediate",codeExample:"// Stable: [2a, 1, 2b] -> [1, 2a, 2b]; Unstable: [1, 2b, 2a] possible"},{question:"Can you implement bubble sort recursively?",shortAnswer:"Yes, but iterative is better.",explanation:"You can write a recursive version where each call bubbles the largest element to the end and recurses on the remaining n-1 elements.",hint:"Recursion possible but not practical.",level:"expert",codeExample:"void bubble(int[] arr, int n) { if (n==1) return; for (int j=0; j<n-1; j++)... bubble(arr, n-1); }"},{question:"What is the worst-case input for selection sort?",shortAnswer:"Any input, because it always does the same number of comparisons.",explanation:"Selection sort's performance does not depend on input order; it always does n(n-1)/2 comparisons.",hint:"Input independent.",level:"intermediate",codeExample:"// Already sorted array still takes O(n²) comparisons"}],q=()=>{const[i,o]=d.useState(new Array(a.length).fill(!1)),l=t=>{o(r=>{const n=[...r];return n[t]=!n[t],n})};return e.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[slideUpFade_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Sorting: Bubble & Selection"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Master two fundamental sorting algorithms: Bubble Sort (simple but slow) and Selection Sort (more efficient). Understand their logic, complexity, and practical use cases."})]}),e.jsxs("div",{className:"space-y-8 animate-[slideUpFade_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"📊"})," Why Sorting Matters"]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Sorting"})," arranges data in a specific order (ascending or descending). It is a fundamental operation in computer science because sorted data enables faster searching (binary search), easier merging, and better data presentation."]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Real-world example:"})," Swadeep, a teacher in Barrackpore, wants to arrange student marks in ascending order to find the highest and lowest scores quickly. Sorting algorithms like Bubble Sort and Selection Sort are the building blocks for more advanced sorting (Quick Sort, Merge Sort)."]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm italic",children:[e.jsx("strong",{children:"💡 Think about:"})," How would you sort a deck of cards? Which method is more intuitive: repeatedly swapping adjacent cards (bubble) or picking the smallest card each time (selection)?"]})})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🫧"})," Bubble Sort"]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Bubble Sort"}),' repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed. Larger elements "bubble up" to the end.']}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Time Complexity:"})," O(n²) worst/average case, O(n) best case (already sorted with optimization)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Space Complexity:"})," O(1) (in-place sorting)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stable:"})," Yes (equal elements retain original order)."]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2",children:"Basic Implementation"}),e.jsx(s,{fileModule:p,title:"BubbleSortBasic.java",highlightLines:[]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:"Optimized Version (Early Exit)"}),e.jsx(s,{fileModule:h,title:"BubbleSortOptimized.java",highlightLines:[]}),e.jsxs("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl",children:[e.jsx("p",{className:"font-semibold",children:"✅ When to use Bubble Sort:"}),e.jsx("p",{className:"text-sm",children:"Educational purposes, small datasets (&lt 100 elements), or when the array is nearly sorted (optimized version runs in O(n))."})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🎯"})," Selection Sort"]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Selection Sort"})," divides the array into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first unsorted element."]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Time Complexity:"})," O(n²) in all cases (best, average, worst)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Space Complexity:"})," O(1) (in-place)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stable:"})," No (can be implemented as stable but usually not)."]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2",children:"Basic Implementation"}),e.jsx(s,{fileModule:b,title:"SelectionSortBasic.java",highlightLines:[]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:"Step-by-Step Trace"}),e.jsx(s,{fileModule:u,title:"SelectionSortStepByStep.java",highlightLines:[]}),e.jsxs("div",{className:"mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl",children:[e.jsx("p",{className:"font-semibold",children:"⚠️ Note:"}),e.jsx("p",{className:"text-sm",children:"Selection sort performs fewer swaps than bubble sort (n swaps vs O(n²) swaps), making it better when writing to memory is expensive."})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"})," Bubble vs Selection: Comparison"]}),e.jsx(s,{fileModule:x,title:"CompareSorts.java",highlightLines:[]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("p",{className:"font-semibold",children:"Bubble Sort"}),e.jsxs("ul",{className:"text-sm list-disc list-inside",children:[e.jsx("li",{children:"Best-case O(n) (optimized)"}),e.jsx("li",{children:"Stable"}),e.jsx("li",{children:"Many swaps"}),e.jsx("li",{children:"Intuitive for beginners"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("p",{className:"font-semibold",children:"Selection Sort"}),e.jsxs("ul",{className:"text-sm list-disc list-inside",children:[e.jsx("li",{children:"Always O(n²)"}),e.jsx("li",{children:"Not stable (usually)"}),e.jsx("li",{children:"Fewer swaps (n swaps)"}),e.jsx("li",{children:"Good for small arrays"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Off-by-one errors:"})," In bubble sort, inner loop should go up to ",e.jsx("code",{children:"n-i-1"})," to avoid accessing out of bounds."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting optimization flag:"})," Without a swap flag, bubble sort always runs O(n²) even on sorted data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Selection sort swapping with itself:"})," When the minimum index equals the current index, swapping is unnecessary but harmless."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming stability matters:"})," If stability is required, bubble sort is preferable; selection sort is generally unstable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using sorting for large datasets:"})," O(n²) algorithms are impractical for n > 10,000. Use Arrays.sort() (TimSort/Dual-Pivot QuickSort) for production."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6 shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-3",children:"💡 Pro Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✓ Use ",e.jsx("code",{children:"Arrays.sort(arr)"})," for real projects – it's highly optimized."]}),e.jsx("li",{children:"✓ Understand sorting algorithms to appreciate why built-in sorts are better."}),e.jsx("li",{children:"✓ Visualize swaps: draw arrays on paper and trace each pass."}),e.jsx("li",{children:"✓ For nearly sorted data, optimized bubble sort is O(n)."}),e.jsx("li",{children:"✓ Selection sort minimizes writes – useful when swapping is expensive (e.g., EEPROM)."}),e.jsxs("li",{children:["✓ Use ",e.jsx("code",{children:"System.out.println(Arrays.toString(arr))"})," after each pass to debug."]})]})]}),e.jsx(c,{note:"Start with bubble sort because it's intuitive: students can physically simulate swapping adjacent cards. Then introduce selection sort as a more efficient swap-wise algorithm. Emphasize that both are O(n²) but have different constant factors and stability characteristics. Use small arrays (size 5-6) for manual tracing. Encourage students to implement both and compare performance on random vs sorted data."}),e.jsx(m,{title:"Sorting (Bubble & Selection) FAQs",questions:a}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"✍️"})," Practice Questions"]}),e.jsx("div",{className:"space-y-4",children:a.map((t,r)=>e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 pb-3",children:[e.jsxs("p",{className:"font-medium",children:[r+1,". ",t.q]}),e.jsx("button",{onClick:()=>l(r),className:"text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 transition",children:i[r]?"Hide Answer":"Show Answer"}),i[r]&&e.jsx("p",{className:"mt-2 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-2 rounded",children:t.a})]},r))})]})]})]})})};export{q as default};

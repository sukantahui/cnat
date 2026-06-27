import{r as c,j as e}from"./index-CNNP-EED.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-BOnCSEBg.js";import{F as h}from"./FAQTemplate-B-lMXd6e.js";import{J as o}from"./JavaFileLoader-DiuG8jZc.js";import"./git-branch-BwKA7x2_.js";import"./JavaCodeBlock-hEWYnJeG.js";import"./prism-CQDD5-RF.js";import"./browser-B7OMk5-w.js";import"./prism-java-BwO6k4I_.js";const m=`/**\r
 * Demonstrates different recurrence types with code examples.\r
 * Each method shows a different recurrence pattern.\r
 */\r
public class RecurrenceTypes {\r
    public static void main(String[] args) {\r
        System.out.println("=== Recurrence Types ===\\n");\r
\r
        // 1. Linear Recursion: T(n) = T(n-1) + O(1)\r
        System.out.println("1. Linear Recursion");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(1), T(0) = O(1)");\r
        System.out.println("   Solution: O(n)");\r
        System.out.println("   factorial(5) = " + factorial(5) + "\\n");\r
\r
        // 2. Divide & Conquer (Balanced): T(n) = 2T(n/2) + O(n)\r
        System.out.println("2. Divide & Conquer (Balanced)");\r
        System.out.println("   Recurrence: T(n) = 2T(n/2) + O(n), T(1) = O(1)");\r
        System.out.println("   Solution: O(n log n)");\r
        int[] arr = {38, 27, 43, 3, 9, 82, 10};\r
        mergeSort(arr, 0, arr.length-1);\r
        System.out.print("   Sorted: ");\r
        for (int x : arr) System.out.print(x + " ");\r
        System.out.println("\\n");\r
\r
        // 3. Divide & Conquer (Unbalanced): T(n) = T(n-1) + O(n)\r
        System.out.println("3. Divide & Conquer (Unbalanced)");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(n), T(1) = O(1)");\r
        System.out.println("   Solution: O(n²)");\r
        System.out.println("   selectionSort on array of size 5 (conceptual)");\r
        int[] data = {5, 4, 3, 2, 1};\r
        selectionSort(data);\r
        System.out.print("   Sorted: ");\r
        for (int x : data) System.out.print(x + " ");\r
        System.out.println("\\n");\r
\r
        // 4. Binary Recursion: T(n) = T(n-1) + T(n-2) + O(1)\r
        System.out.println("4. Binary Recursion");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)");\r
        System.out.println("   Solution: O(2ⁿ)");\r
        System.out.println("   fib(6) = " + fib(6) + "\\n");\r
\r
        // 5. Multiple Recursion: T(n) = 3T(n/3) + O(n)\r
        System.out.println("5. Multiple Recursion");\r
        System.out.println("   Recurrence: T(n) = 3T(n/3) + O(n), T(1) = O(1)");\r
        System.out.println("   Solution: O(n log n)");\r
        System.out.println("   3-way merge sort (conceptual) -> O(n log n)");\r
    }\r
\r
    // Linear: T(n) = T(n-1) + O(1) → O(n)\r
    public static int factorial(int n) {\r
        if (n <= 1) return 1;\r
        return n * factorial(n - 1);\r
    }\r
\r
    // Divide & Conquer: T(n) = 2T(n/2) + O(n) → O(n log n)\r
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
    // Unbalanced D&C: T(n) = T(n-1) + O(n) → O(n²)\r
    public static void selectionSort(int[] arr) {\r
        int n = arr.length;\r
        for (int i = 0; i < n - 1; i++) {\r
            int minIdx = i;\r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j] < arr[minIdx]) minIdx = j;\r
            }\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
        }\r
    }\r
\r
    // Binary: T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)\r
    public static int fib(int n) {\r
        if (n <= 1) return n;\r
        return fib(n - 1) + fib(n - 2);\r
    }\r
}`,x=`/**\r
 * Shows how to write recurrences from recursive code, step by step.\r
 * Each method includes the recurrence in comments.\r
 */\r
public class WritingRecurrences {\r
    public static void main(String[] args) {\r
        System.out.println("=== Writing Recurrences ===\\n");\r
\r
        // Example 1: Factorial\r
        System.out.println("Example 1: Factorial");\r
        System.out.println("  Code: factorial(n) = n * factorial(n-1), base case n<=1");\r
        System.out.println("  Recurrence: T(n) = T(n-1) + O(1), T(0) = O(1)");\r
        System.out.println("  Solution: O(n)");\r
        System.out.println("  factorial(5) = " + factorial(5) + "\\n");\r
\r
        // Example 2: Binary Search\r
        System.out.println("Example 2: Binary Search");\r
        System.out.println("  Code: search(arr, target, low, high) = search on half");\r
        System.out.println("  Recurrence: T(n) = T(n/2) + O(1), T(1) = O(1)");\r
        System.out.println("  Solution: O(log n)");\r
        int[] arr = {1, 3, 5, 7, 9, 11};\r
        System.out.println("  binarySearch(7) = " + binarySearch(arr, 7, 0, arr.length-1) + "\\n");\r
\r
        // Example 3: Merge Sort\r
        System.out.println("Example 3: Merge Sort");\r
        System.out.println("  Code: mergeSort(arr, left, right) = mergeSort(left) + mergeSort(right) + merge");\r
        System.out.println("  Recurrence: T(n) = 2T(n/2) + O(n), T(1) = O(1)");\r
        System.out.println("  Solution: O(n log n)");\r
        int[] data = {38, 27, 43, 3, 9, 82, 10};\r
        mergeSort(data, 0, data.length-1);\r
        System.out.print("  Sorted: ");\r
        for (int x : data) System.out.print(x + " ");\r
        System.out.println("\\n");\r
\r
        // Example 4: Fibonacci\r
        System.out.println("Example 4: Fibonacci (naive)");\r
        System.out.println("  Code: fib(n) = fib(n-1) + fib(n-2), base cases n<=1");\r
        System.out.println("  Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)");\r
        System.out.println("  Solution: O(2ⁿ)");\r
        System.out.println("  fib(6) = " + fib(6) + "\\n");\r
\r
        // Example 5: Tower of Hanoi\r
        System.out.println("Example 5: Tower of Hanoi");\r
        System.out.println("  Code: hanoi(n) = hanoi(n-1) + 1 + hanoi(n-1)");\r
        System.out.println("  Recurrence: T(n) = 2T(n-1) + O(1), T(1) = O(1)");\r
        System.out.println("  Solution: O(2ⁿ)");\r
        System.out.println("  hanoi(3) moves = " + hanoi(3, 'A', 'C', 'B') + "\\n");\r
\r
        // Example 6: D&C Max\r
        System.out.println("Example 6: Divide & Conquer Max");\r
        System.out.println("  Code: max(arr, left, right) = max(max(left), max(right))");\r
        System.out.println("  Recurrence: T(n) = 2T(n/2) + O(1), T(1) = O(1)");\r
        System.out.println("  Solution: O(n)");\r
        int[] nums = {3, 7, 2, 9, 5, 1, 8, 4, 6};\r
        System.out.println("  max of array = " + findMax(nums, 0, nums.length-1));\r
    }\r
\r
    // T(n) = T(n-1) + O(1) → O(n)\r
    public static int factorial(int n) {\r
        if (n <= 1) return 1;\r
        return n * factorial(n - 1);\r
    }\r
\r
    // T(n) = T(n/2) + O(1) → O(log n)\r
    public static int binarySearch(int[] arr, int target, int low, int high) {\r
        if (low > high) return -1;\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);\r
        return binarySearch(arr, target, low, mid - 1);\r
    }\r
\r
    // T(n) = 2T(n/2) + O(n) → O(n log n)\r
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
    // T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)\r
    public static int fib(int n) {\r
        if (n <= 1) return n;\r
        return fib(n - 1) + fib(n - 2);\r
    }\r
\r
    // T(n) = 2T(n-1) + O(1) → O(2ⁿ)\r
    public static int hanoi(int n, char from, char to, char aux) {\r
        if (n == 1) return 1;\r
        int moves = hanoi(n - 1, from, aux, to);\r
        moves += 1;\r
        moves += hanoi(n - 1, aux, to, from);\r
        return moves;\r
    }\r
\r
    // T(n) = 2T(n/2) + O(1) → O(n)\r
    public static int findMax(int[] arr, int left, int right) {\r
        if (left == right) return arr[left];\r
        int mid = left + (right - left) / 2;\r
        int maxLeft = findMax(arr, left, mid);\r
        int maxRight = findMax(arr, mid + 1, right);\r
        return Math.max(maxLeft, maxRight);\r
    }\r
}`,u=`/**\r
 * Demonstrates common recurrence patterns and how to identify them.\r
 * Each method shows a pattern with its recurrence and solution.\r
 */\r
public class RecurrencePatterns {\r
    public static void main(String[] args) {\r
        System.out.println("=== Recurrence Patterns ===\\n");\r
\r
        // Pattern 1: Linear T(n) = T(n-1) + O(1) → O(n)\r
        System.out.println("Pattern 1: Linear");\r
        System.out.println("  T(n) = T(n-1) + O(1) → O(n)");\r
        System.out.println("  Example: Factorial, Sum of n numbers");\r
        System.out.println("  Code: returns n * factorial(n-1)\\n");\r
\r
        // Pattern 2: Linear with O(n) work T(n) = T(n-1) + O(n) → O(n²)\r
        System.out.println("Pattern 2: Linear with O(n) work");\r
        System.out.println("  T(n) = T(n-1) + O(n) → O(n²)");\r
        System.out.println("  Example: Selection Sort, Insertion Sort (worst)");\r
        System.out.println("  Code: for i from 0 to n find min and swap\\n");\r
\r
        // Pattern 3: Divide & Conquer (constant) T(n) = 2T(n/2) + O(1) → O(n)\r
        System.out.println("Pattern 3: Divide & Conquer (constant work)");\r
        System.out.println("  T(n) = 2T(n/2) + O(1) → O(n)");\r
        System.out.println("  Example: Tree Traversal, D&C Max");\r
        System.out.println("  Code: return max(max(left), max(right))\\n");\r
\r
        // Pattern 4: Divide & Conquer (linear) T(n) = 2T(n/2) + O(n) → O(n log n)\r
        System.out.println("Pattern 4: Divide & Conquer (linear work)");\r
        System.out.println("  T(n) = 2T(n/2) + O(n) → O(n log n)");\r
        System.out.println("  Example: Merge Sort, Quick Sort (avg)");\r
        System.out.println("  Code: mergeSort(left) + mergeSort(right) + merge\\n");\r
\r
        // Pattern 5: Divide & Conquer (quadratic) T(n) = 2T(n/2) + O(n²) → O(n²)\r
        System.out.println("Pattern 5: Divide & Conquer (quadratic work)");\r
        System.out.println("  T(n) = 2T(n/2) + O(n²) → O(n²)");\r
        System.out.println("  Example: Some matrix operations");\r
        System.out.println("  Code: combine with O(n²) work\\n");\r
\r
        // Pattern 6: Binary Recursion T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)\r
        System.out.println("Pattern 6: Binary Recursion");\r
        System.out.println("  T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)");\r
        System.out.println("  Example: Naive Fibonacci");\r
        System.out.println("  Code: fib(n-1) + fib(n-2)\\n");\r
\r
        // Pattern 7: Exponential T(n) = 2T(n-1) + O(1) → O(2ⁿ)\r
        System.out.println("Pattern 7: Exponential");\r
        System.out.println("  T(n) = 2T(n-1) + O(1) → O(2ⁿ)");\r
        System.out.println("  Example: Tower of Hanoi");\r
        System.out.println("  Code: hanoi(n-1) + 1 + hanoi(n-1)\\n");\r
\r
        // Pattern 8: Logarithmic T(n) = T(n/2) + O(1) → O(log n)\r
        System.out.println("Pattern 8: Logarithmic");\r
        System.out.println("  T(n) = T(n/2) + O(1) → O(log n)");\r
        System.out.println("  Example: Binary Search");\r
        System.out.println("  Code: search in left or right half\\n");\r
\r
        // Pattern 9: Multiple Recursion T(n) = 3T(n/3) + O(n) → O(n log n)\r
        System.out.println("Pattern 9: Multiple Recursion");\r
        System.out.println("  T(n) = 3T(n/3) + O(n) → O(n log n)");\r
        System.out.println("  Example: 3-way Merge Sort");\r
        System.out.println("  Code: 3 recursive calls on thirds\\n");\r
\r
        // Summary table\r
        System.out.println("=== Summary ===");\r
        System.out.println("Pattern | Recurrence | Solution");\r
        System.out.println("Linear | T(n)=T(n-1)+O(1) | O(n)");\r
        System.out.println("Linear+O(n) | T(n)=T(n-1)+O(n) | O(n²)");\r
        System.out.println("D&C (const) | T(n)=2T(n/2)+O(1) | O(n)");\r
        System.out.println("D&C (linear) | T(n)=2T(n/2)+O(n) | O(n log n)");\r
        System.out.println("Binary | T(n)=T(n-1)+T(n-2)+O(1) | O(2ⁿ)");\r
        System.out.println("Exponential | T(n)=2T(n-1)+O(1) | O(2ⁿ)");\r
        System.out.println("Logarithmic | T(n)=T(n/2)+O(1) | O(log n)");\r
    }\r
}`,p=[{question:"What is a recurrence relation?",shortAnswer:"An equation that defines a sequence where each term is a function of previous terms.",explanation:"In algorithm analysis, it expresses T(n) in terms of T(smaller inputs) plus work done at each step.",hint:"It's like a formula for the runtime.",level:"basic",codeExample:"// T(n) = T(n-1) + O(1)"},{question:"What are the components of a recurrence relation?",shortAnswer:"Base case, recursive case (a·T(n/b)), and work per level (f(n)).",explanation:"The recurrence T(n) = a·T(n/b) + f(n) has all three components.",hint:"Base case, recursive calls, work.",level:"basic",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the recurrence for recursive factorial?",shortAnswer:"T(n) = T(n-1) + O(1), T(0) = O(1)",explanation:"Each call does constant work and makes one recursive call on n-1.",hint:"One call per step.",level:"basic",codeExample:"// T(n) = T(n-1) + 1"},{question:"What is the recurrence for binary search?",shortAnswer:"T(n) = T(n/2) + O(1), T(1) = O(1)",explanation:"Each call halves the input and does constant work.",hint:"Divide by 2.",level:"basic",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the recurrence for merge sort?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"Two recursive calls on half the input, plus O(n) work to merge.",hint:"Divide and conquer.",level:"intermediate",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the recurrence for naive Fibonacci?",shortAnswer:"T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)",explanation:"Each call makes two recursive calls on n-1 and n-2.",hint:"Two calls.",level:"intermediate",codeExample:"// T(n) = T(n-1) + T(n-2) + 1"},{question:"What is the recurrence for Tower of Hanoi?",shortAnswer:"T(n) = 2T(n-1) + O(1), T(1) = O(1)",explanation:"Each call moves n-1 disks twice, plus one move.",hint:"Two calls on n-1.",level:"advanced",codeExample:"// T(n) = 2T(n-1) + 1"},{question:"What is the base case in a recurrence?",shortAnswer:"The smallest input where recursion stops, usually T(0) = O(1) or T(1) = O(1).",explanation:"The base case terminates the recurrence and provides a starting point for the recursion.",hint:"Where the recursion ends.",level:"basic",codeExample:"// T(0) = 1, T(1) = 1"},{question:"What does the 'a' represent in T(n) = a·T(n/b) + f(n)?",shortAnswer:"The number of recursive calls made at each level.",explanation:"For merge sort, a=2 (two calls). For binary search, a=1 (one call).",hint:"Number of subproblems.",level:"intermediate",codeExample:"// a = 2 for merge sort"},{question:"What does the 'b' represent in T(n) = a·T(n/b) + f(n)?",shortAnswer:"The factor by which the input size is divided.",explanation:"For merge sort, b=2 (input is split in half).",hint:"Division factor.",level:"intermediate",codeExample:"// b = 2 for merge sort"},{question:"What does f(n) represent in a recurrence?",shortAnswer:"The work done at each recursive call (combining results, merging, etc.).",explanation:"For merge sort, f(n) = O(n) for merging. For binary search, f(n) = O(1).",hint:"Work per level.",level:"intermediate",codeExample:"// f(n) = n for merge sort"},{question:"What is the solution to T(n) = T(n-1) + O(1)?",shortAnswer:"O(n) — linear time.",explanation:"The recurrence expands to T(n) = T(0) + n, which is O(n).",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the solution to T(n) = T(n/2) + O(1)?",shortAnswer:"O(log n) — logarithmic time.",explanation:"The recurrence expands to T(n) = T(1) + log₂(n), which is O(log n).",hint:"Logarithmic.",level:"intermediate",codeExample:"// O(log n)"},{question:"What is the solution to T(n) = 2T(n/2) + O(n)?",shortAnswer:"O(n log n) — linearithmic.",explanation:"The Master Theorem Case 2 gives O(n log n).",hint:"n log n.",level:"intermediate",codeExample:"// O(n log n)"},{question:"What is the solution to T(n) = 2T(n/2) + O(1)?",shortAnswer:"O(n) — linear.",explanation:"Master Theorem Case 1: a=2, b=2, log_b a = 1, f(n)=O(1) → O(n).",hint:"Linear.",level:"advanced",codeExample:"// O(n)"},{question:"What is the solution to T(n) = T(n-1) + T(n-2) + O(1)?",shortAnswer:"O(2ⁿ) — exponential.",explanation:"The recurrence has characteristic equation r² = r + 1, leading to exponential growth.",hint:"Exponential.",level:"advanced",codeExample:"// O(2ⁿ)"},{question:"What is the solution to T(n) = 2T(n-1) + O(1)?",shortAnswer:"O(2ⁿ) — exponential.",explanation:"The recurrence doubles the number of calls at each level.",hint:"Doubling each level.",level:"advanced",codeExample:"// O(2ⁿ)"},{question:"What is linear recursion?",shortAnswer:"A recurrence with only one recursive call: T(n) = T(n-1) + O(1).",explanation:"Forms a chain of calls, like factorial.",hint:"One call.",level:"basic",codeExample:"// factorial: T(n) = T(n-1) + O(1)"},{question:"What is binary recursion?",shortAnswer:"A recurrence with two recursive calls: T(n) = T(n-1) + T(n-2) + O(1).",explanation:"Branches into two calls, like naive Fibonacci.",hint:"Two calls.",level:"intermediate",codeExample:"// Fibonacci: T(n) = T(n-1) + T(n-2) + O(1)"},{question:"What is divide-and-conquer recursion?",shortAnswer:"A recurrence of the form T(n) = a·T(n/b) + f(n) where b > 1.",explanation:"The input is divided into smaller subproblems, like merge sort.",hint:"Divide and conquer.",level:"intermediate",codeExample:"// Merge sort: T(n) = 2T(n/2) + O(n)"},{question:"What is the recurrence for quicksort in the worst case?",shortAnswer:"T(n) = T(n-1) + O(n), T(1) = O(1)",explanation:"When the pivot is always the smallest or largest, one partition is empty.",hint:"Unbalanced.",level:"advanced",codeExample:"// T(n) = T(n-1) + n"},{question:"What is the recurrence for quicksort in the average case?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"On average, the pivot splits the array roughly in half.",hint:"Balanced partitions.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the recurrence for the Euclidean algorithm (GCD)?",shortAnswer:"T(a,b) = T(b, a mod b) + O(1), T(x,0) = O(1)",explanation:"Each step reduces the problem using the modulo operation.",hint:"Modulo reduction.",level:"advanced",codeExample:"// T(a,b) = T(b, a%b) + 1"},{question:"What is the solution to the Euclidean algorithm recurrence?",shortAnswer:"O(log min(a,b)) — logarithmic.",explanation:"The numbers decrease exponentially, so the number of steps is logarithmic.",hint:"Logarithmic.",level:"advanced",codeExample:"// O(log min(a,b))"},{question:"What is the recurrence for a recursive function that divides the input by 3 and makes 3 recursive calls?",shortAnswer:"T(n) = 3T(n/3) + O(1), T(1) = O(1)",explanation:"Three calls on one-third of the input.",hint:"a=3, b=3.",level:"advanced",codeExample:"// T(n) = 3T(n/3) + 1"},{question:"What is the solution to T(n) = 3T(n/3) + O(1)?",shortAnswer:"O(n) — linear.",explanation:"Master Theorem Case 1: a=3, b=3, log_b a = 1, f(n)=O(1) → O(n).",hint:"Linear.",level:"advanced",codeExample:"// O(n)"},{question:"What is the recurrence for finding the maximum in an array using divide and conquer?",shortAnswer:"T(n) = 2T(n/2) + O(1), T(1) = O(1)",explanation:"Two calls on halves, constant work to compare.",hint:"Divide and conquer.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + 1"},{question:"What is the time complexity of divide-and-conquer max?",shortAnswer:"O(n) — because T(n) = 2T(n/2) + O(1) solves to O(n).",explanation:"Master Theorem Case 1: a=2, b=2, log_b a = 1, f(n)=O(1) → O(n).",hint:"O(n).",level:"advanced",codeExample:"// O(n)"},{question:"What is the recurrence for a recursive function that makes one call on n/2 and does O(n) work?",shortAnswer:"T(n) = T(n/2) + O(n), T(1) = O(1)",explanation:"One call on half, O(n) work for combining.",hint:"One call.",level:"advanced",codeExample:"// T(n) = T(n/2) + n"},{question:"What is the solution to T(n) = T(n/2) + O(n)?",shortAnswer:"O(n) — because the work is dominated by the root.",explanation:"The geometric series sums to O(n).",hint:"Geometric series.",level:"advanced",codeExample:"// O(n)"},{question:"What is the recurrence for a recursive function that makes two calls on n/2 and does O(1) work?",shortAnswer:"T(n) = 2T(n/2) + O(1), T(1) = O(1)",explanation:"Two calls on half, constant work.",hint:"Two calls, constant work.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + 1"},{question:"What is the solution to T(n) = 2T(n/2) + O(1)?",shortAnswer:"O(n) — by Master Theorem Case 1.",explanation:"a=2, b=2, log_b a = 1, f(n)=O(1) → O(n).",hint:"O(n).",level:"advanced",codeExample:"// O(n)"}],S=()=>{const[a,l]=c.useState("overview"),t="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",s=n=>`animate-[fadeSlideUp_0.5s_ease-out_${n*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:r(t,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 32"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recurrence Relations"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Recurrence Relations (Advanced)"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["A deeper dive into ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"recurrence relations"})," — writing them, identifying patterns, and understanding the types of recurrences in recursive algorithms."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(n=>e.jsxs("button",{onClick:()=>l(n),className:r("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===n?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[n==="overview"&&"📖 Overview",n==="code"&&"☕ Code Examples",n==="faq"&&"❓ FAQ"]},n))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What Are Recurrence Relations?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"recurrence relation"})," is an equation that defines a sequence where each term is defined as a function of its preceding terms. In algorithm analysis, recurrence relations are used to express the time complexity ",e.jsx("strong",{children:"T(n)"})," of a recursive algorithm in terms of the input size ",e.jsx("strong",{children:"n"}),"."]}),e.jsxs("p",{children:["The general form of a recurrence is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = a · T(n/b) + f(n)"}),"where:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"a"})," = number of recursive calls"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"n/b"})," = size of each subproblem"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"f(n)"})," = work done at each level (excluding recursive calls)"]})]}),e.jsxs("p",{children:["In this topic, we'll learn how to ",e.jsx("strong",{children:"write"})," recurrence relations for any recursive algorithm and identify their ",e.jsx("strong",{children:"types"})," — a crucial skill for complexity analysis."]})]})]}),e.jsxs("section",{className:r(t,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Components of a Recurrence"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:"🎯",title:"Base Case",desc:"The smallest input where the recurrence stops. Usually T(0) = O(1) or T(1) = O(1).",example:"T(0) = 1, T(1) = 1"},{icon:"🔀",title:"Recursive Case",desc:"How T(n) relates to T(smaller input). Shows the number of subproblems and their sizes.",example:"T(n) = a·T(n/b) + f(n)"},{icon:"⚡",title:"Work per Level",desc:"The f(n) term — work done at each recursive call (combining results, merging, etc.).",example:"f(n) = O(n) for merge sort"},{icon:"📊",title:"Number of Subproblems",desc:"The 'a' in T(n) = a·T(n/b) + f(n). How many recursive calls are made.",example:"a = 2 for merge sort"}].map((n,i)=>e.jsxs("div",{className:r(s(i),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:n.icon}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-1",children:n.example})]},i))})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Types of Recurrences"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{type:"Linear Recurrence",desc:"One recursive call, reducing by 1 each time.",example:"T(n) = T(n-1) + O(1)",algorithm:"Factorial, Sum of n numbers"},{type:"Divide & Conquer (Balanced)",desc:"Two or more calls on half (or constant fraction) of the input.",example:"T(n) = 2T(n/2) + O(n)",algorithm:"Merge Sort"},{type:"Divide & Conquer (Unbalanced)",desc:"One call on n-1, one call on 0 (empty).",example:"T(n) = T(n-1) + O(n)",algorithm:"Quick Sort (worst case)"},{type:"Binary Recursion",desc:"Two recursive calls on smaller inputs (often n-1 and n-2).",example:"T(n) = T(n-1) + T(n-2) + O(1)",algorithm:"Naive Fibonacci"},{type:"Multiple Recursion",desc:"More than two recursive calls, often on smaller fractions.",example:"T(n) = 3T(n/3) + O(n)",algorithm:"3-way Merge Sort"},{type:"Tail Recursion",desc:"The recursive call is the last operation, can be optimized.",example:"T(n) = T(n-1) + O(1) (tail)",algorithm:"Tail Factorial"}].map((n,i)=>e.jsxs("div",{className:r(s(i+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:n.type}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc}),e.jsx("p",{className:"text-sm font-mono text-gray-500 dark:text-gray-500 mt-1",children:n.example}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Algorithm: ",n.algorithm]})]},i))})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Recurrence Patterns"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Recurrence patterns",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow32",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"100",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Linear"}),e.jsx("rect",{x:"30",y:"40",width:"140",height:"25",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"100",y:"58",textAnchor:"middle",fontSize:"10",fill:"white",children:"T(n)"}),e.jsx("line",{x1:"100",y1:"65",x2:"100",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"50",y:"85",width:"100",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"100",y:"101",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(n-1)"}),e.jsx("line",{x1:"100",y1:"107",x2:"100",y2:"120",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"60",y:"125",width:"80",height:"20",rx:"3",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"100",y:"140",textAnchor:"middle",fontSize:"8",fill:"white",children:"T(n-2)"}),e.jsx("text",{x:"100",y:"170",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"…"}),e.jsx("text",{x:"300",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Divide & Conquer"}),e.jsx("rect",{x:"230",y:"40",width:"140",height:"25",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"300",y:"58",textAnchor:"middle",fontSize:"10",fill:"white",children:"T(n)"}),e.jsx("line",{x1:"300",y1:"65",x2:"270",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"300",y1:"65",x2:"330",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"230",y:"85",width:"80",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"270",y:"101",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(n/2)"}),e.jsx("rect",{x:"290",y:"85",width:"80",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"330",y:"101",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(n/2)"}),e.jsx("text",{x:"300",y:"130",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"2T(n/2) + O(n)"}),e.jsx("text",{x:"550",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Binary"}),e.jsx("rect",{x:"480",y:"40",width:"140",height:"25",rx:"4",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"550",y:"58",textAnchor:"middle",fontSize:"10",fill:"white",children:"T(n)"}),e.jsx("line",{x1:"550",y1:"65",x2:"520",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"65",x2:"580",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"480",y:"85",width:"80",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"520",y:"101",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(n-1)"}),e.jsx("rect",{x:"540",y:"85",width:"80",height:"22",rx:"4",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"580",y:"101",textAnchor:"middle",fontSize:"9",fill:"white",children:"T(n-2)"}),e.jsx("text",{x:"550",y:"130",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Two branches"}),e.jsx("text",{x:"400",y:"180",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"The recurrence pattern determines the complexity class."})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Different recurrence patterns lead to different complexities. Identifying the pattern is the first step to solving the recurrence."})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," How to Write a Recurrence"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 1: Identify the input size"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"What is n? (array length, number of nodes, etc.)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 2: Determine the base case"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"What's the smallest input? Usually T(0)=O(1) or T(1)=O(1)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 3: Count the recursive calls and their sizes"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"How many calls (a)? What size (n/b)? This gives the a·T(n/b) term."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100",children:"Step 4: Determine the work at each call"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"The f(n) term — merging, comparing, combining results."})]})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"School Administration:"})," ","A school in ",e.jsx("strong",{children:"Barrackpore"})," processes student records. If they split the records into two groups and process each group, the recurrence is T(n) = 2T(n/2) + O(n). This is merge sort — O(n log n)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Library Search:"})," ","Finding a book in a sorted library catalog by repeatedly halving the search space: T(n) = T(n/2) + O(1) → O(log n)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Fibonacci in Nature:"})," ","The number of rabbit pairs follows the recurrence F(n) = F(n-1) + F(n-2) — the same as the naive Fibonacci algorithm. This recurrence is O(2ⁿ) without memoization."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Swadeep"})," is arranging students in a line. If he recursively arranges n-1 students and then inserts the nth student, the recurrence is T(n) = T(n-1) + O(n) → O(n²)."]})})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always include the base case",desc:"A recurrence without a base case is incomplete — you need to know where the recursion stops."},{tip:"Use consistent notation",desc:"T(n) for time, S(n) for space. Be consistent in your analysis."},{tip:"Check your recurrence with small n",desc:"Verify that the recurrence gives the correct values for n=1, 2, 3 to catch mistakes."},{tip:"Identify the pattern first",desc:"Before solving, identify if it's linear, D&C, or binary recursion. This guides the solution method."}].map((n,i)=>e.jsxs("div",{className:r(s(i+8),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",n.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:n.desc})]},i))})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case:"})," T(1) = O(1) must be stated; without it, the recurrence is incomplete."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the f(n) term:"})," The work done at each level matters. Merge sort is O(n log n) because f(n) = O(n); if f(n) were O(1), it would be O(n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misidentifying the number of recursive calls (a):"})," For binary search, a=1 (one call); for merge sort, a=2 (two calls)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing the base case with the base of the logarithm:"})," T(n) = T(n/2) + O(1) has base 2, but T(n) = T(n/3) + O(1) has base 3 — both are O(log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not recognizing overlapping subproblems:"})," If the recurrence has overlapping subproblems (like Fibonacci), the simple recurrence may not be the most efficient way to analyze the algorithm — memoization changes the complexity.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Abhronila"})," once wrote the recurrence for Fibonacci as T(n) = T(n-1) + T(n-2) + O(1) and solved it to O(2ⁿ), but then used memoization and got O(n). She learned to distinguish between naive recursion and optimized recursion."]})]})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Always state the recurrence in comments"})," before the recursive function."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use consistent notation"})," — T(n) for time, S(n) for space."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Check the recurrence with small values"})," to ensure it matches the algorithm."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Identify the type of recurrence"})," before choosing a solution method."]})})]})]}),e.jsxs("section",{className:r(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write a recurrence for a given recursive algorithm?","✅ Can you identify the base case in a recurrence?","✅ Do you know the difference between a = number of calls and n/b = subproblem size?","✅ Can you recognize the f(n) term (work at each level)?","✅ Can you identify the type of recurrence (linear, D&C, binary)?","✅ Can you write recurrences for common algorithms (factorial, binary search, merge sort)?"].map((n,i)=>e.jsx("div",{className:r(s(i+12),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:n},i))})]}),e.jsxs("section",{className:r(t,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For a recursive function that splits the input in half and makes two recursive calls, what is the recurrence? What is the base case?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," If the function makes three recursive calls on one-third of the input, how does the recurrence change? What about the complexity?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has n students. If the principal splits them into two groups of n/2 and processes each group the same way, the recurrence is T(n) = 2T(n/2) + O(n) — like merge sort for processing student records."]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recurrence Types — Identifying Patterns"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Demonstrates different recurrence types with code examples and their corresponding recurrences."}),e.jsx(o,{fileModule:m,title:"RecurrenceTypes.java",highlightLines:[]})]}),e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Writing Recurrences — From Code to Recurrence"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Shows how to extract the recurrence from recursive code, step by step."}),e.jsx(o,{fileModule:x,title:"WritingRecurrences.java",highlightLines:[]})]}),e.jsxs("section",{className:r(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recurrence Patterns — Recognizing Common Forms"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Shows common recurrence patterns and how to identify them in code."}),e.jsx(o,{fileModule:u,title:"RecurrencePatterns.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:r(t,"space-y-4"),children:e.jsx(h,{title:"Recurrence Relations (Advanced) — FAQs",questions:p})})]}),e.jsx("div",{className:r(t,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(d,{note:"Recurrence relations are the language of recursive algorithms. I emphasize that writing the recurrence is the first and most important step — once you have the recurrence, solving it is a mechanical process. I like to walk students through the process with simple examples first: factorial, sum, then binary search, then merge sort. The key is to identify the pattern: how many recursive calls? What size are the subproblems? What work is done at each level? Practice is key — have them write recurrences for different algorithms and identify the type (linear, D&C, binary). This builds intuition for the Master Theorem and recursion trees."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 32 · Recurrence Relations (Advanced) · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

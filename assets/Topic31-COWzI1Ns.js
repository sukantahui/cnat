import{r as h,j as e}from"./index-UqT5O8p1.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as p}from"./TeacherSukantaHui-n-XI7Z6e.js";import{F as u}from"./FAQTemplate-DIfKyZOP.js";import{J as s}from"./JavaFileLoader-BN3Zd4kz.js";import"./git-branch-DqaaVz3l.js";import"./JavaCodeBlock-BRhaxxgt.js";import"./prism-D4X2Is8h.js";import"./browser-BdROBGLT.js";import"./prism-java-BwO6k4I_.js";const x=`/**\r
 * Reviews writing and solving recurrences for common recursive algorithms.\r
 * Each method shows its recurrence and complexity.\r
 */\r
public class RecurrenceReview {\r
    public static void main(String[] args) {\r
        System.out.println("=== Recurrence Review ===\\n");\r
\r
        // 1. Factorial: T(n) = T(n-1) + O(1) → O(n)\r
        System.out.println("1. Factorial:");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(1), T(0) = O(1)");\r
        System.out.println("   Solution: O(n)");\r
        System.out.println("   factorial(5) = " + factorial(5) + "\\n");\r
\r
        // 2. Binary Search: T(n) = T(n/2) + O(1) → O(log n)\r
        System.out.println("2. Binary Search:");\r
        System.out.println("   Recurrence: T(n) = T(n/2) + O(1), T(1) = O(1)");\r
        System.out.println("   Solution: O(log n)");\r
        int[] arr = {1, 3, 5, 7, 9, 11, 13};\r
        System.out.println("   binarySearch(7) = " + binarySearch(arr, 7, 0, arr.length-1) + "\\n");\r
\r
        // 3. Merge Sort: T(n) = 2T(n/2) + O(n) → O(n log n)\r
        System.out.println("3. Merge Sort:");\r
        System.out.println("   Recurrence: T(n) = 2T(n/2) + O(n), T(1) = O(1)");\r
        System.out.println("   Solution: O(n log n)");\r
        int[] data = {38, 27, 43, 3, 9, 82, 10};\r
        mergeSort(data, 0, data.length-1);\r
        System.out.print("   Sorted: ");\r
        for (int x : data) System.out.print(x + " ");\r
        System.out.println("\\n");\r
\r
        // 4. Fibonacci (naive): T(n) = T(n-1) + T(n-2) + O(1) → O(2ⁿ)\r
        System.out.println("4. Fibonacci (naive):");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)");\r
        System.out.println("   Solution: O(2ⁿ)");\r
        System.out.println("   fib(6) = " + fib(6) + "\\n");\r
\r
        // 5. Tower of Hanoi: T(n) = 2T(n-1) + O(1) → O(2ⁿ)\r
        System.out.println("5. Tower of Hanoi:");\r
        System.out.println("   Recurrence: T(n) = 2T(n-1) + O(1), T(1) = O(1)");\r
        System.out.println("   Solution: O(2ⁿ)");\r
        System.out.println("   Moves for n=3: " + towerOfHanoi(3, 'A', 'C', 'B'));\r
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
    public static int towerOfHanoi(int n, char from, char to, char aux) {\r
        if (n == 1) return 1;\r
        int moves = towerOfHanoi(n - 1, from, aux, to);\r
        moves += 1;\r
        moves += towerOfHanoi(n - 1, aux, to, from);\r
        return moves;\r
    }\r
}`,y=`/**\r
 * Applies the Master Theorem to common recursive algorithms.\r
 * For T(n) = a·T(n/b) + f(n):\r
 * - Case 1: f(n) = O(n^(log_b a - ε)) → T(n) = Θ(n^(log_b a))\r
 * - Case 2: f(n) = Θ(n^(log_b a)) → T(n) = Θ(n^(log_b a)·log n)\r
 * - Case 3: f(n) = Ω(n^(log_b a + ε)) → T(n) = Θ(f(n))\r
 */\r
public class MasterTheoremExamples {\r
    public static void main(String[] args) {\r
        System.out.println("=== Master Theorem Examples ===\\n");\r
\r
        // Example 1: Merge Sort\r
        System.out.println("Example 1: Merge Sort");\r
        System.out.println("  T(n) = 2T(n/2) + O(n)");\r
        System.out.println("  a=2, b=2, log_b a = log₂(2) = 1");\r
        System.out.println("  f(n) = n = Θ(n^1) → Case 2");\r
        System.out.println("  Solution: T(n) = Θ(n · log n)");\r
        System.out.println("  Time: O(n log n)\\n");\r
\r
        // Example 2: Binary Search\r
        System.out.println("Example 2: Binary Search");\r
        System.out.println("  T(n) = T(n/2) + O(1)");\r
        System.out.println("  a=1, b=2, log_b a = log₂(1) = 0");\r
        System.out.println("  f(n) = 1 = Θ(n^0) → Case 2");\r
        System.out.println("  Solution: T(n) = Θ(log n)");\r
        System.out.println("  Time: O(log n)\\n");\r
\r
        // Example 3: Tree Traversal (constant work per level)\r
        System.out.println("Example 3: Tree Traversal (constant work)");\r
        System.out.println("  T(n) = 2T(n/2) + O(1)");\r
        System.out.println("  a=2, b=2, log_b a = log₂(2) = 1");\r
        System.out.println("  f(n) = 1 = O(n^(1-ε)) → Case 1");\r
        System.out.println("  Solution: T(n) = Θ(n)");\r
        System.out.println("  Time: O(n)\\n");\r
\r
        // Example 4: Divide & Conquer Max\r
        System.out.println("Example 4: Divide & Conquer Max");\r
        System.out.println("  T(n) = 2T(n/2) + O(1)");\r
        System.out.println("  a=2, b=2, log_b a = log₂(2) = 1");\r
        System.out.println("  f(n) = 1 = O(n^(1-ε)) → Case 1");\r
        System.out.println("  Solution: T(n) = Θ(n)");\r
        System.out.println("  Time: O(n)\\n");\r
\r
        // Example 5: 3-way Merge Sort\r
        System.out.println("Example 5: 3-way Merge Sort");\r
        System.out.println("  T(n) = 3T(n/3) + O(n)");\r
        System.out.println("  a=3, b=3, log_b a = log₃(3) = 1");\r
        System.out.println("  f(n) = n = Θ(n^1) → Case 2");\r
        System.out.println("  Solution: T(n) = Θ(n · log n)");\r
        System.out.println("  Time: O(n log n)\\n");\r
\r
        // Example 6: Strassen's Matrix Multiplication\r
        System.out.println("Example 6: Strassen's Matrix Multiplication");\r
        System.out.println("  T(n) = 7T(n/2) + O(n²)");\r
        System.out.println("  a=7, b=2, log_b a = log₂(7) ≈ 2.807");\r
        System.out.println("  f(n) = n² = O(n^(2.807 - ε)) → Case 1");\r
        System.out.println("  Solution: T(n) = Θ(n^(log₂(7))) ≈ Θ(n^2.807)");\r
        System.out.println("  Time: O(n^2.807) (better than O(n³))\\n");\r
\r
        // Example 7: Cholesky Decomposition (special case)\r
        System.out.println("Example 7: Cholesky Decomposition");\r
        System.out.println("  T(n) = T(n/2) + O(n²)");\r
        System.out.println("  a=1, b=2, log_b a = log₂(1) = 0");\r
        System.out.println("  f(n) = n² = Ω(n^(0+ε)) → Case 3");\r
        System.out.println("  Need to check regularity condition: a·f(n/b) ≤ c·f(n)");\r
        System.out.println("  Solution: T(n) = Θ(n²)");\r
        System.out.println("  Time: O(n²)\\n");\r
    }\r
}`,g=`/**\r
 * Demonstrates the recursion tree method for solving recurrences.\r
 * Draws the tree structure and sums work at each level.\r
 */\r
public class RecursionTreeMethod {\r
    public static void main(String[] args) {\r
        System.out.println("=== Recursion Tree Method ===\\n");\r
\r
        // Example 1: T(n) = 2T(n/2) + n\r
        System.out.println("Example 1: T(n) = 2T(n/2) + n");\r
        System.out.println("  Level 0: 1 node, work = n");\r
        System.out.println("  Level 1: 2 nodes, each work = n/2, total = n");\r
        System.out.println("  Level 2: 4 nodes, each work = n/4, total = n");\r
        System.out.println("  ...");\r
        System.out.println("  Level k: 2^k nodes, each work = n/2^k, total = n");\r
        System.out.println("  Height = log₂(n)");\r
        System.out.println("  Total work = n · (log₂(n) + 1) = O(n log n)\\n");\r
\r
        // Example 2: T(n) = 2T(n/2) + 1\r
        System.out.println("Example 2: T(n) = 2T(n/2) + 1");\r
        System.out.println("  Level 0: 1 node, work = 1");\r
        System.out.println("  Level 1: 2 nodes, each work = 1, total = 2");\r
        System.out.println("  Level 2: 4 nodes, each work = 1, total = 4");\r
        System.out.println("  ...");\r
        System.out.println("  Level k: 2^k nodes, total = 2^k");\r
        System.out.println("  Height = log₂(n)");\r
        System.out.println("  Total work = 1 + 2 + 4 + ... + n = O(n)\\n");\r
\r
        // Example 3: T(n) = T(n/2) + 1\r
        System.out.println("Example 3: T(n) = T(n/2) + 1");\r
        System.out.println("  Level 0: 1 node, work = 1");\r
        System.out.println("  Level 1: 1 node, work = 1");\r
        System.out.println("  Level 2: 1 node, work = 1");\r
        System.out.println("  ...");\r
        System.out.println("  Height = log₂(n)");\r
        System.out.println("  Total work = log₂(n) + 1 = O(log n)\\n");\r
\r
        // Example 4: T(n) = 4T(n/2) + n\r
        System.out.println("Example 4: T(n) = 4T(n/2) + n");\r
        System.out.println("  Level 0: 1 node, work = n");\r
        System.out.println("  Level 1: 4 nodes, each work = n/2, total = 2n");\r
        System.out.println("  Level 2: 16 nodes, each work = n/4, total = 4n");\r
        System.out.println("  ...");\r
        System.out.println("  Level k: 4^k nodes, each work = n/2^k, total = 2^k · n");\r
        System.out.println("  Height = log₂(n)");\r
        System.out.println("  Work at level k = n · 2^k");\r
        System.out.println("  Dominated by last level: n · n = n²");\r
        System.out.println("  Total work = O(n²)\\n");\r
\r
        // Example 5: T(n) = T(n-1) + n\r
        System.out.println("Example 5: T(n) = T(n-1) + n");\r
        System.out.println("  This is a linear recursion tree (chain)");\r
        System.out.println("  Level 0: n");\r
        System.out.println("  Level 1: n-1");\r
        System.out.println("  Level 2: n-2");\r
        System.out.println("  ...");\r
        System.out.println("  Level n: 1");\r
        System.out.println("  Total work = n + (n-1) + ... + 1 = n(n+1)/2 = O(n²)\\n");\r
    }\r
}`,b=`/**\r
 * Complete analysis of multiple recursive algorithms with:\r
 * - Recurrence relation\r
 * - Solution method\r
 * - Time and space complexity\r
 * - Implementation\r
 */\r
public class AdvancedRecursiveAnalysis {\r
    public static void main(String[] args) {\r
        System.out.println("=== Advanced Recursive Analysis ===\\n");\r
\r
        // 1. Binary Search (Divide & Conquer)\r
        System.out.println("1. BINARY SEARCH");\r
        System.out.println("   Recurrence: T(n) = T(n/2) + O(1)");\r
        System.out.println("   Method: Master Theorem (a=1, b=2, f(n)=1)");\r
        System.out.println("   Time: O(log n)");\r
        System.out.println("   Space: O(log n) (recursion stack)");\r
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};\r
        System.out.println("   Search for 7: index " + binarySearch(arr, 7, 0, arr.length-1) + "\\n");\r
\r
        // 2. Merge Sort (Divide & Conquer)\r
        System.out.println("2. MERGE SORT");\r
        System.out.println("   Recurrence: T(n) = 2T(n/2) + O(n)");\r
        System.out.println("   Method: Master Theorem (a=2, b=2, f(n)=n)");\r
        System.out.println("   Time: O(n log n)");\r
        System.out.println("   Space: O(n) (auxiliary array)");\r
        int[] data = {38, 27, 43, 3, 9, 82, 10};\r
        mergeSort(data, 0, data.length-1);\r
        System.out.print("   Sorted: ");\r
        for (int x : data) System.out.print(x + " ");\r
        System.out.println("\\n");\r
\r
        // 3. Naive Fibonacci (Binary Recursion)\r
        System.out.println("3. NAIVE FIBONACCI");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + T(n-2) + O(1)");\r
        System.out.println("   Method: Recursion Tree (exponential branching)");\r
        System.out.println("   Time: O(2ⁿ)");\r
        System.out.println("   Space: O(n) (recursion stack)");\r
        System.out.println("   fib(8) = " + fib(8) + "\\n");\r
\r
        // 4. Memoized Fibonacci (DP)\r
        System.out.println("4. MEMOIZED FIBONACCI");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(1) (with memoization)");\r
        System.out.println("   Method: Substitution / DP");\r
        System.out.println("   Time: O(n)");\r
        System.out.println("   Space: O(n) (memo array)");\r
        int[] memo = new int[10];\r
        System.out.println("   fibMemo(8) = " + fibMemo(8, memo) + "\\n");\r
\r
        // 5. Tower of Hanoi\r
        System.out.println("5. TOWER OF HANOI");\r
        System.out.println("   Recurrence: T(n) = 2T(n-1) + O(1)");\r
        System.out.println("   Method: Recursion Tree / Substitution");\r
        System.out.println("   Time: O(2ⁿ)");\r
        System.out.println("   Space: O(n) (recursion stack)");\r
        System.out.println("   Moves for n=4: " + towerOfHanoi(4, 'A', 'C', 'B') + "\\n");\r
\r
        // 6. Linear Recursion (Factorial)\r
        System.out.println("6. FACTORIAL (Linear Recursion)");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(1)");\r
        System.out.println("   Method: Substitution / Iteration");\r
        System.out.println("   Time: O(n)");\r
        System.out.println("   Space: O(n) (recursion stack)");\r
        System.out.println("   factorial(6) = " + factorial(6) + "\\n");\r
\r
        // 7. Tail Recursive Factorial\r
        System.out.println("7. TAIL RECURSIVE FACTORIAL");\r
        System.out.println("   Recurrence: T(n) = T(n-1) + O(1) (can be optimized)");\r
        System.out.println("   Time: O(n)");\r
        System.out.println("   Space: O(1) (with TCO)");\r
        System.out.println("   tailFactorial(6) = " + tailFactorial(6, 1) + "\\n");\r
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
    // T(n) = T(n-1) + O(1) → O(n) (with memoization)\r
    public static int fibMemo(int n, int[] memo) {\r
        if (n <= 1) return n;\r
        if (memo[n] != 0) return memo[n];\r
        memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\r
        return memo[n];\r
    }\r
\r
    // T(n) = 2T(n-1) + O(1) → O(2ⁿ)\r
    public static int towerOfHanoi(int n, char from, char to, char aux) {\r
        if (n == 1) return 1;\r
        int moves = towerOfHanoi(n - 1, from, aux, to);\r
        moves += 1;\r
        moves += towerOfHanoi(n - 1, aux, to, from);\r
        return moves;\r
    }\r
\r
    // T(n) = T(n-1) + O(1) → O(n)\r
    public static int factorial(int n) {\r
        if (n <= 1) return 1;\r
        return n * factorial(n - 1);\r
    }\r
\r
    // T(n) = T(n-1) + O(1) → O(n), tail recursive\r
    public static int tailFactorial(int n, int acc) {\r
        if (n <= 1) return acc;\r
        return tailFactorial(n - 1, acc * n);\r
    }\r
}`,f=[{question:"What is the first step in analyzing a recursive algorithm?",shortAnswer:"Write the recurrence relation T(n) = a·T(n/b) + f(n) with the base case.",explanation:"The recurrence expresses the time complexity in terms of smaller subproblems.",hint:"Start with the recurrence.",level:"basic",codeExample:"// T(n) = T(n-1) + O(1)"},{question:"What is the recurrence for binary search?",shortAnswer:"T(n) = T(n/2) + O(1), T(1) = O(1)",explanation:"Each step halves the input and does constant work.",hint:"Divide by 2.",level:"basic",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the recurrence for merge sort?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"Two recursive calls on half the input, plus O(n) work to merge.",hint:"Divide and conquer.",level:"basic",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the recurrence for naive Fibonacci?",shortAnswer:"T(n) = T(n-1) + T(n-2) + O(1), T(0)=T(1)=O(1)",explanation:"Each call branches into two calls on smaller inputs.",hint:"Two branches.",level:"basic",codeExample:"// T(n) = T(n-1) + T(n-2) + 1"},{question:"What is the Master Theorem used for?",shortAnswer:"Solving recurrences of the form T(n) = a·T(n/b) + f(n).",explanation:"It provides a direct solution for divide-and-conquer recurrences.",hint:"For D&C recurrences.",level:"intermediate",codeExample:"// T(n) = aT(n/b) + f(n)"},{question:"What are the three cases of the Master Theorem?",shortAnswer:"Case 1: f(n)=O(n^(log_b a-ε)) → Θ(n^(log_b a)); Case 2: f(n)=Θ(n^(log_b a)) → Θ(n^(log_b a)·log n); Case 3: f(n)=Ω(n^(log_b a+ε)) → Θ(f(n)).",explanation:"Compare f(n) with n^(log_b a) to determine the complexity.",hint:"Three cases.",level:"advanced",codeExample:"// Compare f(n) with n^(log_b a)"},{question:"What is the recursion tree method?",shortAnswer:"A visual method that draws a tree of recursive calls and sums the work at each level.",explanation:"It helps visualize how work accumulates across levels.",hint:"Draw and sum.",level:"intermediate",codeExample:"// Sum work at each level"},{question:"What is the space complexity of a recursive algorithm?",shortAnswer:"O(depth) — the maximum depth of the recursion stack.",explanation:"Each recursive call adds a frame to the stack, consuming memory.",hint:"Recursion depth.",level:"basic",codeExample:"// O(depth) space"},{question:"What is the space complexity of recursive factorial?",shortAnswer:"O(n) — recursion depth is n.",explanation:"Each call adds a frame until the base case is reached.",hint:"Depth = n.",level:"basic",codeExample:"// O(n) space"},{question:"What is the space complexity of recursive binary search?",shortAnswer:"O(log n) — recursion depth is log₂(n).",explanation:"The depth is logarithmic because the input is halved each time.",hint:"Depth = log n.",level:"intermediate",codeExample:"// O(log n) space"},{question:"What is the space complexity of recursive merge sort?",shortAnswer:"O(n) for the auxiliary array + O(log n) for the stack = O(n).",explanation:"The auxiliary array dominates the space usage.",hint:"Auxiliary array.",level:"intermediate",codeExample:"// O(n) space"},{question:"What is the substitution method for solving recurrences?",shortAnswer:"Guess the solution and prove it by induction.",explanation:"You guess T(n) = O(g(n)) and then prove it satisfies the recurrence.",hint:"Guess and verify.",level:"advanced",codeExample:"// Guess T(n) = O(n), then prove"},{question:"What is the iteration method for solving recurrences?",shortAnswer:"Expand the recurrence repeatedly until a pattern emerges.",explanation:"Write T(n) in terms of T(n-1), then T(n-2), until reaching the base case.",hint:"Expand to find pattern.",level:"intermediate",codeExample:"// T(n) = T(n-1) + 1 = T(n-2) + 2 = ..."},{question:"How do you identify linear recursion?",shortAnswer:"The recurrence has only one recursive call: T(n) = T(n-1) + O(1).",explanation:"Linear recursion forms a chain of calls.",hint:"One call.",level:"basic",codeExample:"// factorial: T(n) = T(n-1) + O(1)"},{question:"How do you identify binary recursion?",shortAnswer:"The recurrence has two recursive calls: T(n) = T(n-1) + T(n-2) + O(1).",explanation:"Binary recursion branches into two calls.",hint:"Two calls.",level:"intermediate",codeExample:"// Fibonacci: T(n) = T(n-1) + T(n-2) + O(1)"},{question:"How do you identify divide-and-conquer recursion?",shortAnswer:"The recurrence is T(n) = a·T(n/b) + f(n) with b > 1.",explanation:"The input is divided into smaller subproblems.",hint:"Divide and conquer.",level:"intermediate",codeExample:"// Merge sort: T(n) = 2T(n/2) + O(n)"},{question:"What is overlapping subproblems in recursion?",shortAnswer:"When the same subproblem is solved multiple times, as in naive Fibonacci.",explanation:"Memoization can avoid recomputation.",hint:"Repeated work.",level:"intermediate",codeExample:"// Fibonacci recomputes fib(2) many times"},{question:"How does memoization improve recursive algorithms?",shortAnswer:"It stores results of subproblems, reducing time from exponential to polynomial.",explanation:"Each subproblem is computed only once.",hint:"Caching.",level:"intermediate",codeExample:"// memo[n] = fib(n)"},{question:"What is tail recursion?",shortAnswer:"A recursive function where the recursive call is the last operation.",explanation:"Tail recursion can be optimized by the compiler to avoid stack growth.",hint:"Last operation.",level:"advanced",codeExample:"// tailFactorial(n, acc) = tailFactorial(n-1, acc*n)"},{question:"Can all recursive algorithms be made iterative?",shortAnswer:"Yes, using an explicit stack, but some recursive solutions are more elegant.",explanation:"Recursion can always be converted to iteration with a stack.",hint:"Use explicit stack.",level:"advanced",codeExample:"// Iterative stack replaces recursion"},{question:"What is the recurrence for the Euclidean algorithm (GCD)?",shortAnswer:"T(a,b) = T(b, a mod b) + O(1), T(x,0) = O(1)",explanation:"Each step reduces the numbers using modulo.",hint:"Modulo reduction.",level:"advanced",codeExample:"// gcd(a,b) = gcd(b, a%b)"},{question:"What is the time complexity of the Euclidean algorithm?",shortAnswer:"O(log min(a,b)) — logarithmic time.",explanation:"The numbers decrease exponentially, so steps are logarithmic.",hint:"Logarithmic.",level:"advanced",codeExample:"// O(log min(a,b))"},{question:"What is the recurrence for quicksort in the worst case?",shortAnswer:"T(n) = T(n-1) + O(n), T(1) = O(1)",explanation:"When the pivot is always the smallest or largest, one partition is empty.",hint:"Unbalanced.",level:"intermediate",codeExample:"// T(n) = T(n-1) + n"},{question:"What is the recurrence for quicksort in the average case?",shortAnswer:"T(n) = 2T(n/2) + O(n), T(1) = O(1)",explanation:"On average, the pivot splits the array roughly in half.",hint:"Balanced partitions.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + n"},{question:"What is the time complexity of the Tower of Hanoi?",shortAnswer:"O(2ⁿ) — exponential time.",explanation:"T(n) = 2T(n-1) + O(1) solves to O(2ⁿ).",hint:"Doubling each level.",level:"intermediate",codeExample:"// Tower of Hanoi O(2ⁿ)"},{question:"What is the recurrence for finding the maximum in an array using divide and conquer?",shortAnswer:"T(n) = 2T(n/2) + O(1), T(1) = O(1)",explanation:"Two calls on halves, constant work to compare.",hint:"Divide and conquer.",level:"advanced",codeExample:"// T(n) = 2T(n/2) + 1"},{question:"What is the time complexity of divide-and-conquer max?",shortAnswer:"O(n) — linear time.",explanation:"T(n) = 2T(n/2) + O(1) solves to O(n) by Master Theorem Case 1.",hint:"O(n).",level:"advanced",codeExample:"// O(n)"},{question:"What is the recurrence for binary search on a rotated sorted array?",shortAnswer:"T(n) = T(n/2) + O(1) — still O(log n).",explanation:"Modified binary search still halves the search space.",hint:"Still logarithmic.",level:"advanced",codeExample:"// O(log n)"},{question:"What is the Master Theorem case for T(n) = 2T(n/2) + n?",shortAnswer:"Case 2: a=2, b=2, f(n)=n = Θ(n^(log_b a)) → Θ(n log n).",explanation:"f(n) matches n^(log_b a), so the solution is Θ(n log n).",hint:"Case 2.",level:"advanced",codeExample:"// Θ(n log n)"},{question:"What is the Master Theorem case for T(n) = 4T(n/2) + n?",shortAnswer:"Case 1: a=4, b=2, f(n)=n, log_b a = 2. f(n)=O(n^(2-ε)) → Θ(n²).",explanation:"The work is dominated by the leaves.",hint:"Case 1.",level:"advanced",codeExample:"// Θ(n²)"},{question:"What is the Master Theorem case for T(n) = T(n/2) + n²?",shortAnswer:"Case 3: a=1, b=2, f(n)=n², log_b a = 0. f(n)=Ω(n^(0+ε)) → Θ(n²).",explanation:"The work is dominated by the root.",hint:"Case 3.",level:"advanced",codeExample:"// Θ(n²)"}],C=()=>{const[a,l]=h.useState("overview"),t="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",o=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:n(t,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 31"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Advanced Analysis"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Analyzing Recursive Algorithms (Advanced)"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["A comprehensive guide to analyzing recursive algorithms — from writing recurrences to applying the",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:" Master Theorem"})," and",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:" recursion trees"}),"."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:n("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",a===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[a==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," The Art of Analyzing Recursive Algorithms"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["Analyzing recursive algorithms is a ",e.jsx("strong",{children:"systematic process"})," that combines:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Writing recurrence relations:"})," Expressing T(n) in terms of smaller subproblems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Choosing the right solution method:"})," Substitution, iteration, recursion tree, or Master Theorem."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Considering both time and space:"})," The recursion stack consumes O(depth) memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Identifying the type of recursion:"})," Linear, binary, multiple, tail, or divide-and-conquer."]})]}),e.jsxs("p",{children:["In this topic, we'll build on the foundations from Topics 16-18 and 53-57 to provide a",e.jsx("strong",{children:"complete framework"})," for analyzing any recursive algorithm."]})]})]}),e.jsxs("section",{className:n(t,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," The Analysis Framework"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"Step 1: Write the Recurrence",desc:"Identify T(n) in terms of T(smaller) + work(n). Include the base case.",icon:"📝"},{step:"Step 2: Identify the Recursion Type",desc:"Is it linear (T(n-1)), divide-and-conquer (T(n/2)), or branching (2T(n/2))?",icon:"🔍"},{step:"Step 3: Choose a Solution Method",desc:"Master Theorem (if applicable), recursion tree, substitution, or iteration.",icon:"🎯"},{step:"Step 4: Solve and Verify",desc:"Solve the recurrence and verify with small values of n.",icon:"✅"},{step:"Step 5: Analyze Space Complexity",desc:"Count the maximum recursion depth and any auxiliary memory.",icon:"💾"},{step:"Step 6: Document and Optimize",desc:"Consider tail recursion, memoization, or iterative alternatives.",icon:"⚡"}].map((r,i)=>e.jsxs("div",{className:n(o(i),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Cheat Sheet"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"Recurrence"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Recursion Type"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Solution"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Example"})]})}),e.jsx("tbody",{children:[["T(n) = T(n-1) + O(1)","Linear","O(n)","Factorial"],["T(n) = T(n-1) + O(n)","Linear","O(n²)","Selection Sort"],["T(n) = T(n/2) + O(1)","Divide & Conquer","O(log n)","Binary Search"],["T(n) = T(n/2) + O(n)","Divide & Conquer","O(n)","Find Max (D&C)"],["T(n) = 2T(n/2) + O(1)","Binary","O(n)","Tree Traversal"],["T(n) = 2T(n/2) + O(n)","Divide & Conquer","O(n log n)","Merge Sort"],["T(n) = 2T(n/2) + O(n log n)","Divide & Conquer","O(n log² n)","Special Case"],["T(n) = T(n-1) + T(n-2) + O(1)","Binary (overlap)","O(2ⁿ)","Naive Fibonacci"],["T(n) = 2T(n-1) + O(1)","Binary (overlap)","O(2ⁿ)","Tower of Hanoi"],["T(n) = 3T(n/3) + O(n)","Divide & Conquer","O(n log n)","3-way Merge Sort"],["T(n) = 4T(n/2) + O(n)","Divide & Conquer","O(n²)","Strassen-like"],["T(n) = T(n-1) + T(n-2) + O(n)","Binary (overlap)","O(n·2ⁿ)","Modified Fibonacci"]].map(([r,i,c,d],m)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400",children:r}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:i}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400",children:c}),e.jsx("td",{className:"px-4 py-2 text-gray-600 dark:text-gray-400",children:d})]},m))})]})})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Recursion Tree Types"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Recursion tree types",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow31",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"100",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Linear: O(n)"}),e.jsx("circle",{cx:"100",cy:"40",r:"12",fill:"#818cf8"}),e.jsx("line",{x1:"100",y1:"52",x2:"100",y2:"70",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"100",cy:"80",r:"10",fill:"#34d399"}),e.jsx("line",{x1:"100",y1:"90",x2:"100",y2:"110",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"100",cy:"120",r:"8",fill:"#f472b6"}),e.jsx("text",{x:"100",y:"150",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"…"}),e.jsx("text",{x:"300",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Binary: O(n)"}),e.jsx("circle",{cx:"300",cy:"40",r:"12",fill:"#818cf8"}),e.jsx("line",{x1:"300",y1:"52",x2:"280",y2:"70",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"300",y1:"52",x2:"320",y2:"70",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"280",cy:"80",r:"10",fill:"#34d399"}),e.jsx("circle",{cx:"320",cy:"80",r:"10",fill:"#34d399"}),e.jsx("line",{x1:"280",y1:"90",x2:"270",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"280",y1:"90",x2:"290",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"320",y1:"90",x2:"310",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"320",y1:"90",x2:"330",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"270",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"290",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"310",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"330",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("text",{x:"550",y:"20",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Divide & Conquer: O(n log n)"}),e.jsx("circle",{cx:"550",cy:"40",r:"12",fill:"#818cf8"}),e.jsx("line",{x1:"550",y1:"52",x2:"520",y2:"70",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"550",y1:"52",x2:"580",y2:"70",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"520",cy:"80",r:"10",fill:"#34d399"}),e.jsx("circle",{cx:"580",cy:"80",r:"10",fill:"#34d399"}),e.jsx("line",{x1:"520",y1:"90",x2:"505",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"520",y1:"90",x2:"535",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"580",y1:"90",x2:"565",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"580",y1:"90",x2:"595",y2:"105",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"505",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"535",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"565",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("circle",{cx:"595",cy:"115",r:"7",fill:"#f472b6"}),e.jsx("text",{x:"400",y:"180",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Each node represents a recursive call. The shape determines the complexity."}),e.jsx("text",{x:"400",y:"200",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Linear = chain, Binary = balanced tree, D&C = full tree with O(n) work per level."}),e.jsx("text",{x:"400",y:"235",textAnchor:"middle",fontSize:"11",fill:"#f87171",children:"⚠️ Overlapping subproblems (like Fibonacci) → use memoization!"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Different recursion structures lead to different complexities. The key is to identify the pattern and choose the right solution method."})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always include the base case in the recurrence",desc:"T(0) = O(1) or T(1) = O(1) is essential for solving."},{tip:"Use the Master Theorem when applicable",desc:"For T(n) = a·T(n/b) + f(n), it provides a direct solution."},{tip:"Draw the recursion tree",desc:"Visualizing the tree helps identify the pattern of work."},{tip:"Check for overlapping subproblems",desc:"If subproblems repeat, use memoization to reduce exponential time."}].map((r,i)=>e.jsxs("div",{className:n(o(i+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case in the recurrence:"})," The recurrence is incomplete without T(0) = O(1) or T(1) = O(1)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing the number of calls with the work per call:"})," Fibonacci has 2ⁿ calls, but each call does O(1) work → total O(2ⁿ). Merge sort has 2ᵏ calls at each level, each does O(n) work per level → total O(n log n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misapplying the Master Theorem:"})," The Master Theorem only applies to recurrences of the form T(n) = a·T(n/b) + f(n). Check the conditions before using it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring the recursion stack in space analysis:"})," Recursive algorithms use O(depth) memory on the stack, which can be significant."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking for overlapping subproblems:"})," Some recurrences have overlapping subproblems (like Fibonacci) that can be optimized with memoization.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Tuhina"})," once analyzed Fibonacci as O(2ⁿ) and didn't realize that memoization would make it O(n). She learned to always check for overlapping subproblems."]})]})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Always document the recurrence"})," in comments before the recursive function."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use multiple methods to verify"})," — cross-check your solution with recursion trees and the Master Theorem."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Consider iterative alternatives"})," when the recursion depth is large."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use memoization"})," for overlapping subproblems to reduce exponential time to polynomial."]})})]})]}),e.jsxs("section",{className:n(t,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for any recursive algorithm?","✅ Can you identify the recursion type (linear, binary, D&C)?","✅ Do you know which solution method to apply?","✅ Can you use the Master Theorem correctly?","✅ Can you draw and analyze a recursion tree?","✅ Can you analyze both time and space complexity?"].map((r,i)=>e.jsx("div",{className:n(o(i+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},i))})]}),e.jsxs("section",{className:n(t,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For a recursive function that makes 2 calls on half the input (like merge sort), the recurrence is T(n) = 2T(n/2) + O(n). This solves to O(n log n) by the Master Theorem."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the function makes 3 calls on one-third of the input? The recurrence is T(n) = 3T(n/3) + O(n), which also solves to O(n log n). The base doesn't matter!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a recursive algorithm to process student records. If it splits the records into two halves and processes each, the recurrence is T(n) = 2T(n/2) + O(n). This is O(n log n) — efficient for thousands of records."]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recurrence Review — Writing and Solving"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Reviews how to write recurrences for different recursive algorithms and solve them."}),e.jsx(s,{fileModule:x,title:"RecurrenceReview.java",highlightLines:[]})]}),e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Master Theorem — Applied to Real Algorithms"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Applies the Master Theorem to common recursive algorithms like merge sort and binary search."}),e.jsx(s,{fileModule:y,title:"MasterTheoremExamples.java",highlightLines:[]})]}),e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursion Tree Method — Visual Analysis"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Demonstrates the recursion tree method for solving recurrences step by step."}),e.jsx(s,{fileModule:g,title:"RecursionTreeMethod.java",highlightLines:[]})]}),e.jsxs("section",{className:n(t,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Advanced Recursive Analysis — Complete Examples"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Complete analysis of multiple recursive algorithms with full recurrence, solution, and complexity."}),e.jsx(s,{fileModule:b,title:"AdvancedRecursiveAnalysis.java",highlightLines:[]})]})]}),a==="faq"&&e.jsx("div",{className:n(t,"space-y-4"),children:e.jsx(u,{title:"Analyzing Recursive Algorithms (Advanced) — FAQs",questions:f})})]}),e.jsx("div",{className:n(t,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(p,{note:"Analyzing recursive algorithms is a skill that improves with practice. I emphasize the systematic approach: write the recurrence first, identify the pattern, then apply the right solution method. The Master Theorem is a powerful tool, but I remind students that it has conditions — don't use it blindly. The recursion tree method is more general and builds intuition. Also, space complexity is often overlooked: recursion uses the stack, so depth matters. Finally, always check for overlapping subproblems — memoization can turn exponential time into linear. With practice, students will be able to analyze any recursive algorithm they encounter."})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 31 · Analyzing Recursive Algorithms (Advanced) · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * File: DuplicateAndMissingNumbersDemo.java\r
 * Module: 001_008_foundations-practice-assessment-lab (Topic 4)\r
 * Description: Implements optimal algorithms to find Missing and Duplicate numbers in Java:\r
 *              1. Finding Single Missing Number: Gauss Sum vs Bitwise XOR (O(N) Time, O(1) Space)\r
 *              2. Finding Single Duplicate Number: Floyd's Tortoise and Hare Cycle Detection\r
 *              3. Set Mismatch (Find Duplicate & Missing Pair): Mathematical System vs Negative Index Marking\r
 *              for student roll number audits & serial ledger checks at Coder & AccoTax Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.foundations;\r
\r
import java.util.Arrays;\r
\r
public class DuplicateAndMissingNumbersDemo {\r
\r
    // =========================================================================\r
    // 1. FIND SINGLE MISSING NUMBER: Bitwise XOR (Zero Overflow Risk)\r
    // =========================================================================\r
    /**\r
     * Finds missing number in array containing (N - 1) distinct elements from range [1..N]\r
     */\r
    public static int findMissingNumberXor(int[] nums, int n) {\r
        int xorFull = 0;\r
        for (int i = 1; i <= n; i++) {\r
            xorFull ^= i;\r
        }\r
\r
        int xorArray = 0;\r
        for (int val : nums) {\r
            xorArray ^= val;\r
        }\r
\r
        // xorFull ^ xorArray leaves only the single missing element:\r
        return xorFull ^ xorArray;\r
    }\r
\r
    // Mathematical Sum alternative:\r
    public static int findMissingNumberSum(int[] nums, int n) {\r
        long expectedSum = (long) n * (n + 1) / 2;\r
        long actualSum = 0;\r
        for (int val : nums) {\r
            actualSum += val;\r
        }\r
        return (int) (expectedSum - actualSum);\r
    }\r
\r
    // =========================================================================\r
    // 2. FIND DUPLICATE NUMBER: Floyd's Cycle Detection (Tortoise & Hare)\r
    // =========================================================================\r
    /**\r
     * Finds duplicate in array of size (N + 1) with values in range [1..N] without mutating array\r
     */\r
    public static int findDuplicateFloyd(int[] nums) {\r
        // Phase 1: Finding intersection point inside cycle\r
        int tortoise = nums[0];\r
        int hare = nums[0];\r
\r
        do {\r
            tortoise = nums[tortoise];\r
            hare = nums[nums[hare]];\r
        } while (tortoise != hare);\r
\r
        // Phase 2: Finding the entrance to the cycle (the duplicate value)\r
        int ptr1 = nums[0];\r
        int ptr2 = tortoise;\r
\r
        while (ptr1 != ptr2) {\r
            ptr1 = nums[ptr1];\r
            ptr2 = nums[ptr2];\r
        }\r
\r
        return ptr1;\r
    }\r
\r
    // =========================================================================\r
    // 3. SET MISMATCH: Find Duplicate & Missing Pair [Duplicate, Missing]\r
    // =========================================================================\r
    public static int[] findSetMismatch(int[] nums) {\r
        int duplicate = -1;\r
        int missing = -1;\r
\r
        // Step 1: Negative index marking to locate duplicate\r
        for (int i = 0; i < nums.length; i++) {\r
            int val = Math.abs(nums[i]);\r
            if (nums[val - 1] < 0) {\r
                duplicate = val; // Already visited!\r
            } else {\r
                nums[val - 1] = -nums[val - 1]; // Mark as visited\r
            }\r
        }\r
\r
        // Step 2: Positive value index identifies missing element\r
        for (int i = 0; i < nums.length; i++) {\r
            if (nums[i] > 0) {\r
                missing = i + 1;\r
                break;\r
            }\r
        }\r
\r
        // Restore array signs:\r
        for (int i = 0; i < nums.length; i++) {\r
            nums[i] = Math.abs(nums[i]);\r
        }\r
\r
        return new int[]{duplicate, missing};\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 4 DUPLICATE & MISSING NUMBERS");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // --- 1. MISSING NUMBER AUDIT (Barrackpore Student Roll Range: 1 to 10) ---\r
        int[] studentRollsMissing = {1, 2, 3, 5, 6, 7, 8, 9, 10}; // Missing 4\r
        int missingXor = findMissingNumberXor(studentRollsMissing, 10);\r
        int missingSum = findMissingNumberSum(studentRollsMissing, 10);\r
\r
        System.out.println("1. SINGLE MISSING NUMBER AUDIT [Range: 1..10]:");\r
        System.out.printf("   Array        : %s%n", Arrays.toString(studentRollsMissing));\r
        System.out.printf("   Missing (XOR): Roll ID %d%n", missingXor);\r
        System.out.printf("   Missing (Sum): Roll ID %d%n%n", missingSum);\r
\r
        // --- 2. FLOYD'S CYCLE DETECTION FOR DUPLICATE NUMBER ---\r
        int[] studentRollsDuplicate = {3, 1, 3, 4, 2}; // Duplicate 3\r
        int duplicateId = findDuplicateFloyd(studentRollsDuplicate);\r
\r
        System.out.println("2. DUPLICATE NUMBER AUDIT (Floyd's Tortoise & Hare):");\r
        System.out.printf("   Array        : %s%n", Arrays.toString(studentRollsDuplicate));\r
        System.out.printf("   Duplicate ID : %d (Found without mutating array in O(1) space)%n%n", duplicateId);\r
\r
        // --- 3. SET MISMATCH: FIND BOTH DUPLICATE & MISSING ---\r
        int[] transactionIds = {1, 2, 2, 4}; // Duplicate 2, Missing 3\r
        int[] mismatch = findSetMismatch(transactionIds);\r
\r
        System.out.println("3. SET MISMATCH (Duplicate & Missing Pair):");\r
        System.out.printf("   Array        : %s%n", Arrays.toString(transactionIds));\r
        System.out.printf("   Result Pair  : Duplicate = %d, Missing = %d%n%n", mismatch[0], mismatch[1]);\r
\r
        System.out.println("================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Bitwise XOR eliminates integer overflow hazard completely for missing numbers.");\r
        System.out.println("2. Floyd's Tortoise & Hare finds duplicates in O(N) time and O(1) space non-destructively.");\r
        System.out.println("3. Negative index marking tracks visitation using array sign bits in-place.");\r
        System.out.println("4. Always restore modified array signs after negative index marking.");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_008: Segment 1 Foundations Practice, Mini-Projects & Assessment\r
TOPIC 4: Finding Duplicate & Missing Numbers in Arrays\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE ALGORITHMIC APPROACHES\r
--------------------------------------------------------------------------------\r
- Finding Single Missing Number (1..N in array of size N - 1):\r
  * Bitwise XOR Method : (1 ^ 2 ^ ... ^ N) ^ (arr[0] ^ arr[1] ^ ...)\r
    - Time: O(N) | Space: O(1) | Completely immune to integer overflow!\r
  * Gauss Sum Method   : (long) N * (N + 1) / 2 - actualSum (requires 'long').\r
\r
- Finding Single Duplicate (1..N-1 in array of size N):\r
  * Floyd's Cycle Detection (Tortoise & Hare) :\r
    - Phase 1: slow = nums[slow], fast = nums[nums[fast]] until slow == fast.\r
    - Phase 2: ptr1 = nums[0], ptr2 = slow; advance by 1 until ptr1 == ptr2.\r
    - Non-destructive, O(N) Time, O(1) Space.\r
\r
- Set Mismatch (One Duplicate + One Missing in 1..N):\r
  * Negative Index Marking :\r
    - Check if nums[abs(val) - 1] < 0 → duplicate found!\r
    - Otherwise negate nums[abs(val) - 1] = -nums[abs(val) - 1].\r
    - Index with positive number identifies missing value.\r
    - Restore array signs: nums[i] = Math.abs(nums[i]).\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] XOR self-inverse property: X ^ X = 0 and X ^ 0 = X.\r
[✓] Floyd's algorithm requires 1-based indexing in range [1..N].\r
[✓] In Set Mismatch, always restore array signs to prevent side-effects.\r
[✓] In Topic 5, we master Array Element Frequency Counters & Direct Address Tables!\r
================================================================================\r
`,l=[{question:"How do you find a single missing number in an array of size $N-1$ containing distinct elements from $[1..N]$ using Bitwise XOR?",shortAnswer:"Compute the XOR sum of all numbers from $1$ to $N$ (`xorFull`) and the XOR sum of all array elements (`xorArray`); their XOR `xorFull ^ xorArray` isolates the missing number in $O(N)$ time and $O(1)$ space with zero overflow risk.",explanation:"Bitwise XOR missing number principle.",hint:"xorFull ^ xorArray leaves the single missing number.",level:"basic",codeExample:"int missing = xorFull ^ xorArray;"},{question:"Why is the Bitwise XOR method safer than the Gauss Sum formula ($N(N+1)/2 - \\sum arr$)?",shortAnswer:"Because for large $N$ (e.g. $N = 100,000$), $N(N+1)/2$ exceeds 32-bit `Integer.MAX_VALUE` ($2.14 \\times 10^9$) causing integer overflow, whereas Bitwise XOR operates on individual bit columns without numerical accumulation.",explanation:"Integer overflow safety comparison.",hint:"Bitwise XOR never accumulates large sums and is immune to integer overflow.",level:"basic",codeExample:"// Sum formula requires 'long expectedSum = (long) n * (n + 1) / 2;'"},{question:"How does Floyd's Tortoise and Hare algorithm find a duplicate number in an array of size $N+1$ with values $[1..N]$?",shortAnswer:"Treat the array as a linked list where `nums[i]` is a pointer to the next index; because a duplicate exists, a cycle is created. Use slow and fast pointers to find the cycle intersection, then find the cycle entry point.",explanation:"Floyd's cycle detection in arrays (LeetCode 287).",hint:"Treat array as a linked list: slow moves 1 step, fast moves 2 steps.",level:"intermediate",codeExample:"do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow != fast);"},{question:"What is the Space and Time Complexity of Floyd's Cycle Detection for finding duplicates?",shortAnswer:"$O(N)$ Time Complexity and strict $O(1)$ Auxiliary Space without modifying the original array or allocating hash tables.",explanation:"Floyd's cycle complexity profile.",hint:"O(N) time and O(1) space non-destructively.",level:"basic",codeExample:"// O(N) Time, O(1) Space without modifying array"},{question:"How does Negative Index Marking find a duplicate in an array with elements in $[1..N]$?",shortAnswer:"For each element, calculate index `Math.abs(val) - 1`. If `nums[index] < 0`, `val` is the duplicate (already visited); otherwise, mark it by setting `nums[index] = -nums[index]`.",explanation:"Negative index marking technique.",hint:"Negate nums[abs(val) - 1] to mark visited; if already negative, duplicate found.",level:"intermediate",codeExample:"if (nums[val - 1] < 0) duplicate = val; else nums[val - 1] = -nums[val - 1];"},{question:"In the Coder & AccoTax Barrackpore lab, what was the missing roll number in range $[1..10]$?",shortAnswer:"Roll ID `4`.",explanation:"Missing roll number verification.",hint:"4.",level:"basic",codeExample:"findMissingNumberXor(studentRollsMissing, 10) → 4"},{question:"In the Coder & AccoTax Barrackpore lab, what was the duplicate ID in `{3, 1, 3, 4, 2}`?",shortAnswer:"Duplicate ID `3`.",explanation:"Duplicate ID verification.",hint:"3.",level:"basic",codeExample:"findDuplicateFloyd(studentRollsDuplicate) → 3"},{question:"In the Coder & AccoTax Barrackpore lab, what were the duplicate and missing values in transaction IDs `{1, 2, 2, 4}`?",shortAnswer:"Duplicate = `2`, Missing = `3` (Set Mismatch).",explanation:"Set mismatch result verification.",hint:"Duplicate: 2, Missing: 3.",level:"basic",codeExample:"findSetMismatch(transactionIds) → [2, 3]"},{question:"Why must array signs be restored after Negative Index Marking?",shortAnswer:"To maintain method purity and prevent side-effects in caller code by converting all negated elements back to positive values via `Math.abs()`.",explanation:"Array state restoration best practice.",hint:"Restores array to original state to avoid side-effects.",level:"basic",codeExample:"for (int i = 0; i < nums.length; i++) nums[i] = Math.abs(nums[i]);"},{question:"How can you find TWO missing numbers in range $[1..N]$ (Array size $N-2$)?",shortAnswer:"1. XOR all elements and full range to get $X = A \\oplus B$. 2. Find the rightmost set bit in $X$ (`diff = X & (-X)`). 3. Partition numbers into two groups based on that bit to isolate $A$ and $B$.",explanation:"Two missing numbers bitwise partitioning algorithm.",hint:"Find rightmost set bit of total XOR, partition into two buckets, and XOR each bucket.",level:"advanced",codeExample:"int diff = xorAll & (-xorAll); // Rightmost set bit"},{question:"What is the Time Complexity of finding Set Mismatch via Negative Index Marking?",shortAnswer:"$O(N)$ linear time, making two passes over the array in $O(1)$ space.",explanation:"Set mismatch complexity.",hint:"O(N) time and O(1) space.",level:"basic",codeExample:"// 2 linear passes = O(N) Time"},{question:"Can sorting be used to find duplicate or missing numbers?",shortAnswer:"YES (`Arrays.sort(nums)`), but sorting takes $O(N \\log N)$ time and modifies array order, which is strictly inferior to $O(N)$ XOR or Floyd's algorithm.",explanation:"Sorting vs linear algorithms comparison.",hint:"Yes, but sorting takes O(N log N) time which is slower than O(N).",level:"basic",codeExample:"// Arrays.sort() is O(N log N)"},{question:"How does a Hash Set find duplicates, and why is it not ideal for memory-constrained systems?",shortAnswer:"A `HashSet` adds elements and returns false if already present ($O(N)$ time); however, it consumes $O(N)$ Heap memory and incurs object wrapper overhead.",explanation:"HashSet memory overhead.",hint:"Takes O(N) time but uses O(N) heap memory.",level:"basic",codeExample:"Set<Integer> set = new HashSet<>(); if (!set.add(x)) return x;"},{question:"What is the mathematical equation system to solve Set Mismatch ($[1..N]$)?",shortAnswer:"Let $D$ = Duplicate, $M$ = Missing. 1. $\\sum nums - \\sum [1..N] = D - M$. 2. $\\sum nums^2 - \\sum [1..N]^2 = D^2 - M^2 = (D - M)(D + M)$. Solving these yields $D$ and $M$ directly.",explanation:"Mathematical algebraic equation system for Set Mismatch.",hint:"Difference of sums gives (D - M); difference of squares gives (D^2 - M^2).",level:"advanced",codeExample:"long sumDiff = actualSum - expectedSum; // D - M"},{question:"What property of Bitwise XOR allows it to cancel duplicate pairs?",shortAnswer:"$X \\oplus X = 0$ (Self-inverse property) and $X \\oplus 0 = X$ (Identity property), combined with Commutative and Associative laws.",explanation:"XOR mathematical properties.",hint:"X ^ X = 0 and X ^ 0 = X.",level:"basic",codeExample:"5 ^ 5 = 0 | 5 ^ 0 = 5"},{question:"What happens if an array is missing NO numbers and contains all $[1..N]$?",shortAnswer:"The XOR result `xorFull ^ xorArray` equals `0`, indicating that all numbers from $1$ to $N$ are present with zero missing elements.",explanation:"Zero missing number edge case.",hint:"XOR returns 0 when no elements are missing.",level:"basic",codeExample:'if ((xorFull ^ xorArray) == 0) System.out.println("No missing number");'},{question:"In Floyd's algorithm, why are we guaranteed that a cycle exists when array size is $N+1$ with elements in $[1..N]$?",shortAnswer:"By the **Pigeonhole Principle**: $N+1$ integers mapped into $N$ distinct values guarantees at least one value appears twice, creating a cycle in the index pointer graph.",explanation:"Pigeonhole Principle in cycle detection.",hint:"Pigeonhole Principle guarantees at least 1 duplicate among N+1 elements.",level:"intermediate",codeExample:"// N+1 elements in [1..N] → Cycle guaranteed by Pigeonhole Principle"},{question:"Can Floyd's Cycle Detection handle arrays containing zeros or negative numbers?",shortAnswer:"NO! Floyd's algorithm assumes values are valid 1-based indices in range $[1..N]$; if elements contain 0 or negative numbers, pointer indexing jumps out of bounds.",explanation:"Floyd's algorithm precondition.",hint:"Requires 1-based positive integers in range [1..N].",level:"intermediate",codeExample:"// Requires nums[i] in [1, N]"},{question:"How do you find all numbers that appear TWICE in an array where elements are in $[1..N]$?",shortAnswer:"Using Negative Index Marking: Iterate through array; for each `val`, if `nums[abs(val) - 1] < 0`, add `abs(val)` to the duplicate list, otherwise negate `nums[abs(val) - 1]`.",explanation:"Multiple duplicates finding algorithm (LeetCode 442).",hint:"Negate index on visit; if already negative, add to duplicate list.",level:"intermediate",codeExample:"if (nums[idx] < 0) duplicates.add(Math.abs(val)); else nums[idx] = -nums[idx];"},{question:"In the Coder & AccoTax Barrackpore lab, what was `expectedSum` for $N = 10$?",shortAnswer:"$10 \\times 11 / 2 = 55$.",explanation:"Gauss sum calculation verification.",hint:"55.",level:"basic",codeExample:"expectedSum = 10 * 11 / 2 = 55"},{question:"What is 'Count Inversions' in an array?",shortAnswer:"The number of pairs $(i, j)$ such that $i < j$ and $arr[i] > arr[j]$, measured using MergeSort in $O(N \\log N)$ time.",explanation:"Count inversions algorithmic concept.",hint:"Pairs (i, j) where i < j and arr[i] > arr[j] computed via MergeSort.",level:"advanced",codeExample:"// Count inversions using MergeSort divide-and-conquer"},{question:"Why should `(long) n * (n + 1) / 2` cast `n` to `long` before multiplication?",shortAnswer:"Because `n * (n + 1)` is evaluated as a 32-bit `int` by default before division; casting `(long) n` promotes the expression to 64-bit arithmetic, preventing overflow.",explanation:"Type promotion overflow trap.",hint:"Prevents 32-bit int multiplication overflow before division.",level:"basic",codeExample:"long sum = (long) n * (n + 1) / 2; // Safe"},{question:"How does `BitSet` find multiple missing numbers in range $[1..N]$?",shortAnswer:"Initialize `BitSet bs = new BitSet(N + 1)`; for each value set `bs.set(val)`; all unset bits `bs.nextClearBit(1)` up to $N$ are missing numbers.",explanation:"BitSet missing numbers identification.",hint:"Mark present numbers in BitSet; clear bits identify missing numbers.",level:"intermediate",codeExample:"BitSet bs = new BitSet(n + 1); for (int v : nums) bs.set(v);"},{question:"In the Coder & AccoTax Barrackpore lab, how did Phase 2 of Floyd's algorithm locate the duplicate entry?",shortAnswer:"By placing `ptr1` at `nums[0]` and `ptr2` at the intersection point, advancing both 1 step at a time until `ptr1 == ptr2`.",explanation:"Floyd's algorithm phase 2 cycle entry proof.",hint:"Advance ptr1 from start and ptr2 from intersection 1 step at a time.",level:"intermediate",codeExample:"while (ptr1 != ptr2) { ptr1 = nums[ptr1]; ptr2 = nums[ptr2]; }"},{question:"Can XOR be used to find a single non-repeating number in an array where every other number appears twice?",shortAnswer:"YES! XOR-ing all elements results in duplicates cancelling to 0 ($X \\oplus X = 0$), leaving only the unique single number in $O(N)$ time and $O(1)$ space (Single Number - LeetCode 136).",explanation:"Single Number XOR trick.",hint:"XOR all elements: pairs cancel to 0, leaving the unique single number.",level:"basic",codeExample:"int single = 0; for (int x : nums) single ^= x; return single;"},{question:"What is the difference between finding duplicates with `Math.abs()` vs boolean frequency arrays?",shortAnswer:"`Math.abs()` modifies array signs in-place with $O(1)$ extra space; a boolean frequency array requires $O(N)$ extra heap memory.",explanation:"In-place vs auxiliary space comparison.",hint:"Math.abs() uses O(1) in-place space; frequency array uses O(N) extra RAM.",level:"basic",codeExample:"// In-place sign marking (O(1)) vs boolean[] seen = new boolean[N] (O(N))"},{question:"In the Coder & AccoTax Barrackpore lab, what was the actual sum of rolls `{1, 2, 3, 5, 6, 7, 8, 9, 10}`?",shortAnswer:"$51$ (Expected: $55$, Missing: $55 - 51 = 4$).",explanation:"Sum subtraction calculation.",hint:"51.",level:"basic",codeExample:"actualSum = 51 → 55 - 51 = 4"},{question:"What is the ultimate takeaway of Module 001_008 Topic 4 for Java developers?",shortAnswer:"Finding missing and duplicate numbers efficiently requires bitwise and in-place tricks: Bitwise XOR eliminates overflow for missing numbers, Floyd's Cycle Detection finds duplicates non-destructively in $O(1)$ space, and Negative Index Marking identifies Set Mismatches in $O(N)$ time.",explanation:"Mastery of missing and duplicate number algorithms.",hint:"XOR for missing numbers; Floyd's Tortoise & Hare for duplicates; Negative index marking for Set Mismatch.",level:"basic",codeExample:"// Summary: XOR (Missing), Floyd's (Duplicate), Negative Marking (Mismatch)"},{question:"What is the next topic (Topic 5) in Module 001_008?",shortAnswer:"Algorithmic Problem 5: Array element frequency counter using frequency arrays.",explanation:"Topic 5 implements high-speed array element frequency counting using direct address frequency arrays and hash maps.",hint:"Algorithmic Problem 5: Array element frequency counter using frequency arrays.",level:"basic",codeExample:"// Topic 5: Array Element Frequency Counter"},{question:"How does Java 21 `java.util.Collections` and Stream API calculate frequencies?",shortAnswer:"Using `Collectors.groupingBy(Function.identity(), Collectors.counting())` to produce a frequency map in a single declarative stream pipeline.",explanation:"Stream API frequency collection.",hint:"Collectors.groupingBy() with Collectors.counting().",level:"intermediate",codeExample:"Map<Integer, Long> freq = list.stream().collect(Collectors.groupingBy(e → e, Collectors.counting()));"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowDup {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-dp {
            animation: glowDup 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Algorithmic Lab 4 · Bitwise & Pointers"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Finding Duplicate & Missing Numbers in Arrays"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master optimal algorithms for finding missing and duplicate values in Java: Bitwise XOR elimination (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(N) time, O(1) space, zero overflow"}),"), Floyd's Tortoise and Hare Cycle Detection, and Negative Index Marking for Set Mismatches."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Three Core Algorithmic Techniques"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Locating missing and duplicate values in arrays can be solved with three distinct mathematical and pointer strategies:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-2",children:"1. Bitwise XOR Isolation"}),e.jsx("p",{className:"text-sky-300 mb-1",children:"xorFull ^ xorArray"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["Leverages ",e.jsx("code",{className:"text-sky-300 font-mono",children:"X ^ X = 0"})," to cancel out matching pairs, leaving only the missing number without integer overflow hazards."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-2",children:"2. Floyd's Cycle Detection"}),e.jsx("p",{className:"text-purple-300 mb-1",children:"Tortoise & Hare"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["Treats values as linked list next-pointers to detect cycles in ",e.jsx("code",{className:"text-purple-300 font-mono",children:"O(1)"})," space non-destructively."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-2",children:"3. Negative Index Marking"}),e.jsx("p",{className:"text-emerald-300 mb-1",children:"nums[abs(val)-1] = -nums"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"Uses the sign bit of array elements to flag visited indices in-place, solving Set Mismatches in two linear passes."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Roll ID Audits):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," used Bitwise XOR to find missing Roll ID ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"4"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"[1, 2, 3, 5, 6, 7, 8, 9, 10]"}),", ",e.jsx("strong",{children:"Tuhina"})," located duplicate ID ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"3"})," via Floyd's cycle detection, and ",e.jsx("strong",{children:"Abhronila"})," identified the Set Mismatch pair ",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"[Duplicate: 2, Missing: 3]"})," in transaction logs."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Algorithmic Visualizations: Bitwise XOR & Floyd's Cycle Detection"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Comparing bitwise pair cancellation with pointer cycle convergence:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Duplicate and Missing Numbers Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradXor",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradFloyd",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),e.jsx("stop",{offset:"100%",stopColor:"#6d28d9"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"390",height:"215",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"55",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"1. BITWISE XOR ISOLATION (Missing Number)"}),e.jsx("rect",{x:"45",y:"70",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"92",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"Full Range (1..5) : (1 ^ 2 ^ 3 ^ 4 ^ 5)"}),e.jsx("rect",{x:"45",y:"110",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"132",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"Array Elements     : (1 ^ 2 ^ 3 ^ 5)"}),e.jsx("rect",{x:"45",y:"150",width:"360",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"55",y:"174",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",fontWeight:"bold",children:"XOR Sum: (1^1) ^ (2^2) ^ (3^3) ^ (5^5) ^ 4"}),e.jsx("text",{x:"225",y:"215",fill:"#fef08a",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Result = 0 ^ 0 ^ 0 ^ 0 ^ 4 = 4 (Missing Found!)"}),e.jsx("rect",{x:"450",y:"30",width:"400",height:"215",rx:"10",fill:"#0f172a",stroke:"#8b5cf6",strokeWidth:"1.5"}),e.jsx("text",{x:"650",y:"55",fill:"#a78bfa",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. FLOYD'S CYCLE DETECTION (Duplicate: 3)"}),e.jsx("rect",{x:"465",y:"70",width:"370",height:"40",rx:"4",fill:"#2e1065"}),e.jsx("text",{x:"475",y:"90",fill:"#ddd6fe",fontSize:"10",fontFamily:"monospace",children:"Index Graph: [3, 1, 3, 4, 2]"}),e.jsx("text",{x:"475",y:"102",fill:"#c4b5fd",fontSize:"9",children:"Index 0 → 3 → 4 → 2 → 3 (Cycle on 3!)"}),e.jsx("rect",{x:"465",y:"120",width:"370",height:"35",rx:"4",fill:"#2e1065"}),e.jsx("text",{x:"475",y:"142",fill:"#ddd6fe",fontSize:"10",fontFamily:"monospace",children:"Phase 1: Slow (1x) & Fast (2x) meet at Index 2"}),e.jsx("rect",{x:"465",y:"165",width:"370",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"185",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",fontWeight:"bold",children:"Phase 2: ptr1(0) & ptr2(meet) intersect at value 3!"}),e.jsx("text",{x:"650",y:"225",fill:"#a78bfa",fontSize:"9",textAnchor:"middle",children:"O(N) Time | O(1) Space Non-Destructive"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Bitwise XOR cancels duplicate pairs in O(1) space; Floyd's Tortoise and Hare locates cycle entries without mutating array memory."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Strategy Comparison Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Target Problem"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Optimal Technique"}),e.jsx("th",{className:"p-3 font-semibold text-purple-400",children:"Time / Space Complexity"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Key Advantage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Single Missing Number"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"Bitwise XOR Sum"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"$O(N)$ Time / $O(1)$ Space"}),e.jsx("td",{className:"p-3 text-emerald-300 font-sans",children:"Immune to integer overflow"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Single Duplicate ($N+1$)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"Floyd's Cycle Detection"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"$O(N)$ Time / $O(1)$ Space"}),e.jsx("td",{className:"p-3 text-purple-300 font-sans",children:"Zero array mutation (read-only)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Set Mismatch (Pair)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"Negative Index Marking"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"$O(N)$ Time / $O(1)$ Space"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Locates both duplicate & missing in 2 passes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Multiple Missing Values"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"`java.util.BitSet`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"$O(N)$ Time / $O(N/8)$ Space"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"8x less memory than boolean array"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"DuplicateAndMissingNumbersDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program implements Bitwise XOR for missing numbers, Floyd's Tortoise and Hare for duplicates, and Negative Index Marking for Set Mismatch."}),e.jsx(t,{fileModule:a,title:"DuplicateAndMissingNumbersDemo.java",highlightLines:[21,25,30,36,47,53,58,64,76,84,91]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Forgetting to Restore Array Signs in Negative Marking"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["If you use negative index marking, leaving the array in a corrupted negative state creates bugs for downstream caller methods. Always restore signs with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"nums[i] = Math.abs(nums[i])"})," before returning!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Prefer Bitwise XOR Over Sum Formulas for Large $N$"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["When finding missing numbers in large datasets ($N > 100,000$), Bitwise XOR is inherently safe from 32-bit integer overflow and avoids the need to allocate 64-bit ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"long"})," variables."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why is Floyd's Cycle Detection guaranteed to find a duplicate in an array of size $N+1$ with values $1..N$?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," The Pigeonhole Principle! Putting $N+1$ items into $N$ boxes means at least one box contains two items. In array indexing, this means two different indices point to the same next node, creating an inescapable cycle!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Duplicate & Missing Numbers FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 001_008 Topic 4: Duplicate & Missing Numbers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_008_topic4_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Bitwise XOR and Floyd's cycle detection are legendary interview patterns. Master these three algorithms! In Topic 5, we tackle Algorithmic Problem 5: Array Element Frequency Counter using Frequency Arrays! — Sukanta Hui"})})]})}export{g as default};

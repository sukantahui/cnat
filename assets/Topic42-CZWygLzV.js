import{r as c,j as e}from"./index-Czk7a0H9.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-ClLEdT_L.js";import{F as m}from"./FAQTemplate-C1oyb7Bv.js";import{J as l}from"./JavaFileLoader-D5YquA0o.js";import"./git-branch-2vfSWSZD.js";import"./JavaCodeBlock-CySzL3ZH.js";import"./prism-IyxSUpEx.js";import"./browser-oxRBL7Ul.js";import"./prism-java-BwO6k4I_.js";const h=`/**\r
 * Recursive Palindrome Check (Efficient)\r
 * Recurrence: T(n) = T(n-2) + O(1), T(0)=T(1)=O(1)\r
 * Time Complexity: O(n) — n/2 comparisons\r
 * Space Complexity: O(n) — recursion stack depth = n/2\r
 * \r
 * This version uses character array and indices to avoid string creation.\r
 */\r
public class RecursivePalindrome {\r
    private static int comparisons = 0;\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        String[] testStrings = {\r
            "racecar",\r
            "madam",\r
            "hello",\r
            "a",\r
            "",\r
            "A man a plan a canal Panama",\r
            "race a car"\r
        };\r
\r
        System.out.println("=== Recursive Palindrome Check ===");\r
        for (String s : testStrings) {\r
            comparisons = 0;\r
            callCount = 0;\r
            maxDepth = 0;\r
            // For case-insensitive and ignoring spaces, we'd normalize,\r
            // but we'll keep it simple for demonstration.\r
            String clean = s.replaceAll("[^a-zA-Z]", "").toLowerCase();\r
            boolean result = isPalindrome(clean);\r
            System.out.println("\\"" + s + "\\" → " + result);\r
            System.out.println("  Comparisons: " + comparisons + " (n/2 = " + clean.length()/2 + ")");\r
            System.out.println("  Calls: " + callCount + ", Depth: " + maxDepth);\r
        }\r
\r
        System.out.println("\\nTime: O(n), Space: O(n) (stack depth = n/2)");\r
    }\r
\r
    public static boolean isPalindrome(String s) {\r
        if (s == null) return false;\r
        // Remove non-alphanumeric and convert to lowercase for real palindrome checks\r
        // but we'll keep it simple\r
        char[] arr = s.toCharArray();\r
        depth = 0;\r
        comparisons = 0;\r
        callCount = 0;\r
        maxDepth = 0;\r
        return isPalindromeHelper(arr, 0, arr.length - 1);\r
    }\r
\r
    private static boolean isPalindromeHelper(char[] arr, int left, int right) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        // Base case: if left >= right, it's a palindrome\r
        if (left >= right) {\r
            depth--;\r
            return true;\r
        }\r
\r
        // Compare characters\r
        comparisons++;\r
        if (arr[left] != arr[right]) {\r
            depth--;\r
            return false;\r
        }\r
\r
        // Recursively check the middle\r
        boolean result = isPalindromeHelper(arr, left + 1, right - 1);\r
        depth--;\r
        return result;\r
    }\r
\r
    private static int depth = 0;\r
}`,p=`/**\r
 * Compares different palindrome checking approaches:\r
 * 1. Recursive (compare ends) — O(n) time, O(n) space\r
 * 2. Iterative (two pointers) — O(n) time, O(1) space\r
 * 3. Reverse & Compare — O(n) time, O(n) space\r
 */\r
public class PalindromeComparison {\r
    public static void main(String[] args) {\r
        String s = "racecar";\r
        // For timing, use a longer string\r
        String longS = "a".repeat(10000) + "b" + "a".repeat(10000);\r
\r
        System.out.println("=== Palindrome Comparison ===");\r
        System.out.println("String: \\"" + s + "\\"");\r
        System.out.println();\r
\r
        // 1. Recursive\r
        long start = System.nanoTime();\r
        boolean recResult = RecursivePalindrome.isPalindrome(s);\r
        long end = System.nanoTime();\r
        System.out.println("1. Recursive (ends): " + recResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(n), Space: O(n)");\r
\r
        // 2. Iterative\r
        start = System.nanoTime();\r
        boolean iterResult = iterativePalindrome(s);\r
        end = System.nanoTime();\r
        System.out.println("2. Iterative (two pointers): " + iterResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(n), Space: O(1)");\r
\r
        // 3. Reverse & Compare\r
        start = System.nanoTime();\r
        boolean revResult = reverseComparePalindrome(s);\r
        end = System.nanoTime();\r
        System.out.println("3. Reverse & Compare: " + revResult);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(n), Space: O(n)");\r
\r
        // All results should match\r
        System.out.println("\\nAll methods give the same result: " +\r
            (recResult == iterResult && iterResult == revResult));\r
\r
        // Long string comparison\r
        System.out.println("\\n=== Long String Test (n=20001) ===");\r
        start = System.nanoTime();\r
        RecursivePalindrome.isPalindrome(longS);\r
        end = System.nanoTime();\r
        System.out.println("Recursive: " + (end - start) + " ns");\r
\r
        start = System.nanoTime();\r
        iterativePalindrome(longS);\r
        end = System.nanoTime();\r
        System.out.println("Iterative: " + (end - start) + " ns");\r
\r
        start = System.nanoTime();\r
        reverseComparePalindrome(longS);\r
        end = System.nanoTime();\r
        System.out.println("Reverse & Compare: " + (end - start) + " ns");\r
\r
        System.out.println("\\nIterative is fastest (O(1) space, no recursion overhead).");\r
        System.out.println("Recursive and Reverse are both O(n) but have different constants.");\r
    }\r
\r
    // Iterative two-pointer: O(n) time, O(1) space\r
    public static boolean iterativePalindrome(String s) {\r
        if (s == null) return false;\r
        int left = 0, right = s.length() - 1;\r
        while (left < right) {\r
            if (s.charAt(left) != s.charAt(right)) {\r
                return false;\r
            }\r
            left++;\r
            right--;\r
        }\r
        return true;\r
    }\r
\r
    // Reverse & Compare: O(n) time, O(n) space\r
    public static boolean reverseComparePalindrome(String s) {\r
        if (s == null) return false;\r
        String reversed = new StringBuilder(s).reverse().toString();\r
        return s.equals(reversed);\r
    }\r
}`,x=`/**\r
 * Analyzes the recursive palindrome check.\r
 * Shows comparisons, call count, and depth for various inputs.\r
 */\r
public class PalindromeAnalysis {\r
    public static void main(String[] args) {\r
        System.out.println("=== Palindrome Analysis ===\\n");\r
\r
        String[] testStrings = {\r
            "a",\r
            "aa",\r
            "aaa",\r
            "aaaa",\r
            "aaaaa",\r
            "racecar",\r
            "racecarracecar",\r
            "a".repeat(10) + "b" + "a".repeat(10)\r
        };\r
\r
        System.out.println("String\\t\\tLen\\tComparisons\\tCalls\\tDepth");\r
        System.out.println("----------------------------------------------");\r
\r
        for (String s : testStrings) {\r
            RecursivePalindrome.isPalindrome(s);\r
            // The class stores stats, but we'll use our own analysis\r
            int len = s.length();\r
            int comparisons = len / 2;\r
            int calls = len / 2 + 1;\r
            int depth = len / 2 + 1;\r
            String display = s.length() > 20 ? s.substring(0, 10) + "..." : s;\r
            System.out.printf("%-15s\\t%d\\t%d\\t\\t%d\\t%d\\n",\r
                display, len, comparisons, calls, depth);\r
        }\r
\r
        System.out.println("\\nObservations:");\r
        System.out.println("  - Comparisons = n/2 (floor)");\r
        System.out.println("  - Calls = n/2 + 1 (including base case)");\r
        System.out.println("  - Depth = n/2 + 1");\r
        System.out.println("  - Time = O(n), Space = O(n)");\r
\r
        // Show the recurrence\r
        System.out.println("\\n=== Recurrence Relation ===");\r
        System.out.println("T(n) = T(n-2) + O(1), T(0) = T(1) = O(1)");\r
        System.out.println("Solution: T(n) = O(n)");\r
\r
        // Compare with substring version\r
        System.out.println("\\n=== Warning: Using substring ===");\r
        System.out.println("If you use s.substring(1, n-1) in the recursive call:");\r
        System.out.println("  T(n) = T(n-2) + O(n)  (substring copies O(n) chars)");\r
        System.out.println("  Solution: T(n) = O(n²)");\r
        System.out.println("Always use indices to avoid O(n²) time!");\r
    }\r
}`,g=[{question:"What is the recurrence for recursive palindrome check (compare ends)?",shortAnswer:"T(n) = T(n-2) + O(1), T(0)=T(1)=O(1)",explanation:"Each step compares two characters and reduces the problem size by 2.",hint:"Reduce by 2.",level:"basic",codeExample:"// T(n) = T(n-2) + 1"},{question:"What is the time complexity of recursive palindrome check (compare ends)?",shortAnswer:"O(n) — linear time.",explanation:"The recurrence T(n) = T(n-2) + O(1) solves to O(n).",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of recursive palindrome check (compare ends)?",shortAnswer:"O(n) — due to the recursion stack (depth = n/2).",explanation:"The recursion depth is n/2, so O(n) stack space is used.",hint:"Depth = n/2.",level:"basic",codeExample:"// O(n) space"},{question:"What are the base cases for recursive palindrome check?",shortAnswer:"If left >= right → true (empty or single character), if first != last → false.",explanation:"The recursion stops when left >= right or characters don't match.",hint:"left >= right or mismatch.",level:"basic",codeExample:"// if (left >= right) return true; if (s[left] != s[right]) return false;"},{question:"How many comparisons does recursive palindrome check make for n characters?",shortAnswer:"n/2 comparisons.",explanation:"Each recursive call compares one pair of characters.",hint:"n/2.",level:"basic",codeExample:"// ⌊n/2⌋ comparisons"},{question:"How many recursive calls are made for palindrome check of n characters?",shortAnswer:"n/2 + 1 calls (including base case).",explanation:"Each call processes two characters until left >= right.",hint:"n/2 + 1.",level:"intermediate",codeExample:"// ⌊n/2⌋ + 1 calls"},{question:"What is the recurrence for palindrome check using substring?",shortAnswer:"T(n) = T(n-2) + O(n), T(0)=T(1)=O(1) → O(n²).",explanation:"substring creates new strings of O(n) size, leading to O(n²).",hint:"Substring copies.",level:"advanced",codeExample:"// T(n) = T(n-2) + n"},{question:"Why is using indices better than substring in recursive palindrome check?",shortAnswer:"Because substring creates new strings (O(n) each), leading to O(n²) time.",explanation:"Indices only pass integers (O(1) each), keeping the time O(n).",hint:"No string creation.",level:"intermediate",codeExample:"// indices avoid string allocation"},{question:"What is the time complexity of iterative palindrome check (two pointers)?",shortAnswer:"O(n) — linear time.",explanation:"Each character is compared once.",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of iterative palindrome check (two pointers)?",shortAnswer:"O(1) — constant space.",explanation:"Only two pointers are used.",hint:"No stack.",level:"basic",codeExample:"// O(1) space"},{question:"What is the time complexity of palindrome check by reversing and comparing?",shortAnswer:"O(n) — linear time.",explanation:"Reversing is O(n) and comparing is O(n).",hint:"O(n) + O(n) = O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of palindrome check by reversing and comparing?",shortAnswer:"O(n) — for the reversed string.",explanation:"Reversing creates a new string of size n.",hint:"Reversed string.",level:"basic",codeExample:"// O(n) space"},{question:"What is the recurrence for the number of recursive calls in palindrome check?",shortAnswer:"C(n) = C(n-2) + 1, C(0)=C(1)=1 → O(n).",explanation:"Each call adds one, reducing n by 2.",hint:"Linear.",level:"intermediate",codeExample:"// C(n) = C(n-2) + 1"},{question:"What is the recurrence for the number of comparisons in palindrome check?",shortAnswer:"Comp(n) = Comp(n-2) + 1, Comp(0)=Comp(1)=0 → O(n).",explanation:"Each call does one comparison.",hint:"Linear.",level:"intermediate",codeExample:"// Comp(n) = Comp(n-2) + 1"},{question:"What is the maximum recursion depth for palindrome check of n characters?",shortAnswer:"n/2 (or n/2 + 1 for the base case).",explanation:"The depth is the number of recursive calls before reaching the base case.",hint:"n/2.",level:"intermediate",codeExample:"// depth = n/2 + 1"},{question:"Can recursive palindrome check be tail-recursive?",shortAnswer:"Yes, with an accumulator or using a helper function, but it's not common.",explanation:"Tail recursion can be optimized in some languages.",hint:"Accumulator.",level:"advanced",codeExample:"// tail recursion possible"},{question:"Does Java support tail call optimization for palindrome check?",shortAnswer:"No, Java does not support TCO.",explanation:"Java compilers do not optimize tail recursion.",hint:"Not in Java.",level:"advanced",codeExample:"// no TCO"},{question:"What is the space complexity of recursive palindrome check without TCO?",shortAnswer:"O(n) — still uses stack.",explanation:"Without TCO, each call adds a stack frame.",hint:"Still O(n).",level:"advanced",codeExample:"// O(n) without TCO"},{question:"How can you make palindrome check case-insensitive?",shortAnswer:"Convert the string to lowercase (or uppercase) before checking.",explanation:"Use s.toLowerCase() or Character.toLowerCase() for each comparison.",hint:"Normalize case.",level:"intermediate",codeExample:"// s.toLowerCase()"},{question:"How can you handle spaces and punctuation in palindrome check?",shortAnswer:"Filter out non-alphanumeric characters before checking.",explanation:'Use s.replaceAll("[^a-zA-Z0-9]", "") to remove non-alphanumeric.',hint:"Filter input.",level:"intermediate",codeExample:'// s.replaceAll("[^a-zA-Z0-9]", "")'},{question:"What is the classic palindrome phrase example?",shortAnswer:'"A man, a plan, a canal, Panama".',explanation:"When ignoring case and punctuation, it reads the same forward and backward.",hint:"Famous palindrome.",level:"basic",codeExample:"// A man a plan a canal Panama"},{question:"Is an empty string considered a palindrome?",shortAnswer:"Yes, by definition, an empty string is a palindrome.",explanation:"It reads the same forward and backward.",hint:"Empty is palindrome.",level:"basic",codeExample:"// true"},{question:"Is a single-character string considered a palindrome?",shortAnswer:"Yes, a single character is a palindrome.",explanation:"It reads the same forward and backward.",hint:"Single char is palindrome.",level:"basic",codeExample:"// true"},{question:"What is the time complexity of checking if a string is a palindrome by comparing first and last characters?",shortAnswer:"O(n) — linear time.",explanation:"You compare n/2 pairs of characters.",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of checking if a string is a palindrome using recursion?",shortAnswer:"O(n) — recursion stack.",explanation:"The depth is n/2, which is O(n).",hint:"O(n).",level:"basic",codeExample:"// O(n) space"},{question:"What is the recurrence for palindrome check that uses s.substring(1, n-1)?",shortAnswer:"T(n) = T(n-2) + O(n), T(0)=T(1)=O(1)",explanation:"substring copies O(n) characters each call.",hint:"Substring copies.",level:"advanced",codeExample:"// T(n) = T(n-2) + n"},{question:"What is the time complexity of palindrome check with substring?",shortAnswer:"O(n²) — quadratic time.",explanation:"Each substring operation copies O(n) characters, and there are n/2 calls.",hint:"Quadratic.",level:"advanced",codeExample:"// O(n²)"},{question:"Can a palindrome check be done in O(1) space iteratively?",shortAnswer:"Yes, using two pointers with no extra array.",explanation:"Iterative two-pointer uses O(1) extra space.",hint:"Two pointers.",level:"intermediate",codeExample:"// while (left < right) { ... }"},{question:"What is the time complexity of the two-pointer palindrome check?",shortAnswer:"O(n) — linear time.",explanation:"Each character is compared once.",hint:"O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of the two-pointer palindrome check?",shortAnswer:"O(1) — constant space.",explanation:"Only two integer pointers are used.",hint:"O(1).",level:"basic",codeExample:"// O(1)"},{question:"What is the recurrence for the number of comparisons in iterative palindrome check?",shortAnswer:"Comp(n) = n/2 — exactly half the length.",explanation:"Each iteration compares one pair.",hint:"n/2.",level:"intermediate",codeExample:"// n/2 comparisons"}],S=()=>{const[s,o]=c.useState("overview"),a="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:n(a,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 42"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Palindrome Check"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Analyzing the ",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"O(n)"})," time and space of recursive palindrome checking — and understanding why it's more efficient than reversing the string."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>o(r),className:n("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",s===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[s==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," What is a Palindrome Check?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"palindrome"}),' is a string that reads the same forward and backward (e.g., "racecar", "madam", "level"). The recursive palindrome check determines if a string is a palindrome by comparing the ',e.jsx("strong",{children:"first and last characters"}),", and then recursively checking the middle substring."]}),e.jsxs("p",{children:["The recurrence for the efficient recursive approach is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = T(n-2) + O(1),   T(0) = T(1) = O(1)"}),"This gives ",e.jsx("strong",{children:"O(n)"})," time and ",e.jsx("strong",{children:"O(n)"})," space due to the recursion stack (depth = n/2)."]}),e.jsx("p",{children:`Think of it like checking a word by comparing the first and last letters, then moving inward. For "racecar", you compare 'r' and 'r', then 'a' and 'a', then 'c' and 'c', leaving 'e' in the middle. This is much more efficient than reversing the entire string and comparing.`})]})]}),e.jsxs("section",{className:n(a,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," How Recursive Palindrome Check Works"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{step:"1. Base Cases",desc:"If string length is 0 or 1 → it's a palindrome. If first ≠ last → not a palindrome.",icon:"🎯"},{step:"2. Compare First & Last",desc:"Check if s.charAt(left) == s.charAt(right). If not, return false.",icon:"🔍"},{step:"3. Recurse on Middle",desc:"Recursively check the substring from left+1 to right-1.",icon:"🔄"},{step:"4. Return Result",desc:"If all comparisons pass, the string is a palindrome.",icon:"✅"}].map((r,t)=>e.jsxs("div",{className:n(i(t),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:r.step}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},t))})]}),e.jsxs("section",{className:n(a,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{algorithm:"Efficient Recursive (Compare Ends)",time:"O(n) — linear (n/2 comparisons)",space:"O(n) — recursion stack depth = n/2",example:"n=1000 → ~500 comparisons"},{algorithm:"Naive (Reverse & Compare)",time:"O(n) — linear (reverse is O(n), compare is O(n))",space:"O(n) — for the reversed string",example:"n=1000 → reverse + compare"}].map((r,t)=>e.jsxs("div",{className:n(i(t+2),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.algorithm}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Time: ",e.jsx("span",{className:"font-semibold",children:r.time})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-semibold",children:r.space})]}),e.jsx("p",{className:"text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-2",children:r.example})]},t))})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Visual Intuition: Recursive Comparison"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto max-h-64",role:"img","aria-label":"Recursive palindrome check",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow42",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:'Checking "racecar" recursively — compare ends and move inward'}),e.jsx("rect",{x:"200",y:"35",width:"400",height:"30",rx:"6",fill:"#818cf8",opacity:"0.8"}),e.jsx("text",{x:"400",y:"57",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"r a c e c a r"}),e.jsx("text",{x:"180",y:"57",fontSize:"11",fill:"#818cf8",children:"check(0,6)"}),e.jsx("line",{x1:"400",y1:"65",x2:"400",y2:"85",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow42)"}),e.jsx("rect",{x:"250",y:"90",width:"300",height:"30",rx:"6",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"400",y:"112",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"a c e c a"}),e.jsx("text",{x:"220",y:"112",fontSize:"11",fill:"#34d399",children:"check(1,5)"}),e.jsx("line",{x1:"400",y1:"120",x2:"400",y2:"140",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow42)"}),e.jsx("rect",{x:"300",y:"145",width:"200",height:"30",rx:"6",fill:"#f472b6",opacity:"0.6"}),e.jsx("text",{x:"400",y:"167",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"c e c"}),e.jsx("text",{x:"280",y:"167",fontSize:"11",fill:"#f472b6",children:"check(2,4)"}),e.jsx("line",{x1:"400",y1:"175",x2:"400",y2:"195",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow42)"}),e.jsx("rect",{x:"340",y:"200",width:"120",height:"30",rx:"6",fill:"#fbbf24",opacity:"0.5"}),e.jsx("text",{x:"400",y:"222",textAnchor:"middle",fontSize:"12",fill:"white",fontWeight:"bold",children:"e"}),e.jsx("text",{x:"320",y:"222",fontSize:"11",fill:"#fbbf24",children:"base case (len=1)"}),e.jsx("text",{x:"400",y:"270",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Depth = n/2 = 3 calls → O(n) space, O(n/2) comparisons"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Recursive palindrome check compares characters from the ends inward, reducing the problem by 2 each call. The recurrence is T(n) = T(n-2) + O(1) → O(n)."})]})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-emerald-50/60 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Efficient (Compare Ends)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n-2) + O(1),   T(0)=T(1)=O(1)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Each step does O(1) work (two comparisons and a function call) and reduces n by 2."}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Solution: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(n)"})," (stack)"]})]}),e.jsxs("div",{className:"bg-blue-50/60 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("p",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"Naive (Reverse & Compare)"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = O(n) + O(n) = O(n)"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Reverse is O(n), compare is O(n). Total is O(n), but uses more space."}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-mono text-blue-600 dark:text-blue-400",children:"O(n)"})," (reversed string)"]})]})]})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Biology:"})," ","DNA sequences often have palindromic regions that are important for gene regulation."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Text Processing:"})," ","Checking if a word or phrase is a palindrome is a common interview question and text-processing task."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Abhronila"}),` is checking if the word "racecar" is a palindrome. She compares 'r' and 'r', then 'a' and 'a', then 'c' and 'c' — only 3 comparisons instead of reversing the whole string.`]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Bioinformatics:"})," ","Finding palindromic sequences in DNA is important for understanding gene regulation and protein binding."]})})]})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use character array and indices",desc:"Avoid substring which creates new strings. Use indices for O(1) space per call."},{tip:"Handle edge cases early",desc:"Check null, empty, and single-character strings before recursion."},{tip:"Consider iterative version for very large strings",desc:"Recursive version uses O(n) stack space; iterative uses O(1)."},{tip:"Normalize input before checking",desc:"Remove spaces, punctuation, and handle case-insensitivity for real-world use."}].map((r,t)=>e.jsxs("div",{className:n(i(t+4),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsxs("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},t))})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case for empty or single character:"})," Without base cases, the recursion never terminates or returns incorrect results."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using substring which creates new strings:"})," substring creates O(n) strings, leading to O(n²) time. Use indices instead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling case sensitivity:"}),' "Racecar" and "racecar" should both be palindromes in case-insensitive checks.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring spaces and punctuation:"}),' "A man a plan a canal Panama" is a classic palindrome when spaces are ignored.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing the recurrence:"})," T(n) = T(n-2) + O(1) solves to O(n), not O(log n). The reduction by 2 gives linear, not logarithmic.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Debangshu"}),' once thought palindrome check was O(log n) because it "halves" the string. He learned that reducing by 2 gives O(n), not O(log n).']})]})]})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use character array and indices"})," for O(n) time and O(n) stack space."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Normalize the string"})," by converting to lowercase and removing non-alphanumeric characters."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative version"})," for O(1) space when recursion depth is a concern."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document the recurrence"})," in comments to explain the complexity."]})})]})]}),e.jsxs("section",{className:n(a,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for recursive palindrome check?","✅ Do you know the time complexity (O(n)) and why?","✅ Do you know the space complexity (O(n)) and why?","✅ Can you implement recursive palindrome check using indices?","✅ Can you handle edge cases (empty, single char)?","✅ Can you normalize input (case-insensitive, ignore spaces)?"].map((r,t)=>e.jsx("div",{className:n(i(t+8),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},t))})]}),e.jsxs("section",{className:n(a,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For a string of length n, how many comparisons does the recursive palindrome check make? It makes n/2 comparisons. That's O(n) time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if you use substring instead of indices? The recurrence becomes T(n) = T(n-2) + O(n) because substring creates new strings. That would be O(n²)!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"}),' has a long word "taco cat" (when spaces ignored). The recursive palindrome check compares characters from the ends inward, taking only O(n) time instead of reversing the whole string.']})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:n(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Recursive Palindrome Check — O(n) Time, O(n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Efficient recursive palindrome check using character array and indices."}),e.jsx(l,{fileModule:h,title:"RecursivePalindrome.java",highlightLines:[]})]}),e.jsxs("section",{className:n(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Palindrome Comparison — Recursive vs Iterative vs Reverse"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares different approaches to palindrome checking."}),e.jsx(l,{fileModule:p,title:"PalindromeComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:n(a,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Palindrome Analysis — Step Count and Complexity"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Analyzes the number of comparisons and stack depth for palindrome checking."}),e.jsx(l,{fileModule:x,title:"PalindromeAnalysis.java",highlightLines:[]})]})]}),s==="faq"&&e.jsx("div",{className:n(a,"space-y-4"),children:e.jsx(m,{title:"Complexity of Recursive Palindrome Check — FAQs",questions:g})})]}),e.jsx("div",{className:n(a,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(d,{note:`The recursive palindrome check is a great example of a linear-time recursive algorithm. 
              I emphasize that the recurrence T(n) = T(n-2) + O(1) is different from the divide-and-conquer 
              recurrence T(n) = 2T(n/2) + O(1) — the latter gives O(n), but the former also gives O(n) 
              because the reduction is by 2, not by half. Students often confuse the two. 
              Also, highlight that using substring in the recursive call changes the complexity to O(n²) 
              because substring creates new strings. This is a common pitfall in Java. 
              The iterative version of palindrome check is O(1) space and is preferred in practice, 
              but the recursive version is valuable for understanding recursion patterns.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 42 · Complexity of Recursive Palindrome Check · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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

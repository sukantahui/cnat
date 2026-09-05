import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * File: Segment1TimedCodingAssessmentDemo.java\r
 * Module: 001_008_foundations-practice-assessment-lab (Topic 12)\r
 * Description: Capstone Timed Coding Assessment Engine for Segment 1 Foundations:\r
 *              1. Challenge 1: Matrix Diagonal Sum & Border Perimeter Extraction\r
 *              2. Challenge 2: Recursive Palindrome & Binary Search Composite Pipeline\r
 *              3. Challenge 3: Modern Switch Expression Evaluation & Scholarship Dispatch\r
 *              4. Challenge 4: In-Memory Sieve Prime Filter for Student Roll Validation\r
 *              5. Challenge 5: Comprehensive Academic Billing Ledger in Indian Rupees (₹)\r
 *              for student final evaluations at Coder & AccoTax Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.foundations;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public final class Segment1TimedCodingAssessmentDemo {\r
\r
    private Segment1TimedCodingAssessmentDemo() {}\r
\r
    // =========================================================================\r
    // CHALLENGE 1: MATRIX DIAGONAL SUM & BOUNDARY PERIMETER\r
    // =========================================================================\r
    public static int computeMatrixDiagonalSum(int[][] matrix) {\r
        if (matrix == null || matrix.length == 0) return 0;\r
        int n = matrix.length;\r
        int primarySum = 0;\r
        int secondarySum = 0;\r
\r
        for (int i = 0; i < n; i++) {\r
            primarySum += matrix[i][i];\r
            secondarySum += matrix[i][n - 1 - i];\r
        }\r
\r
        // Avoid double counting center element for odd n:\r
        if (n % 2 != 0) {\r
            return primarySum + secondarySum - matrix[n / 2][n / 2];\r
        }\r
        return primarySum + secondarySum;\r
    }\r
\r
    // =========================================================================\r
    // CHALLENGE 2: RECURSIVE BINARY SEARCH PIPELINE\r
    // =========================================================================\r
    public static int recursiveBinarySearch(int[] arr, int low, int high, int target) {\r
        if (low > high) return -1; // Base case: not found\r
        int mid = low + (high - low) / 2; // Overflow-safe midpoint\r
\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] > target) {\r
            return recursiveBinarySearch(arr, low, mid - 1, target);\r
        } else {\r
            return recursiveBinarySearch(arr, mid + 1, high, target);\r
        }\r
    }\r
\r
    // =========================================================================\r
    // CHALLENGE 3: MODERN JAVA 14+ SWITCH EXPRESSION SCHOLARSHIP DISPATCH\r
    // =========================================================================\r
    public enum AcademicTier {\r
        DISTINCTION,\r
        FIRST_CLASS,\r
        SECOND_CLASS,\r
        PASS,\r
        FAIL\r
    }\r
\r
    public static double dispatchScholarshipInr(AcademicTier tier, double baseFeeInr) {\r
        return switch (tier) {\r
            case DISTINCTION -> baseFeeInr * 0.25; // 25% waiver\r
            case FIRST_CLASS  -> baseFeeInr * 0.15; // 15% waiver\r
            case SECOND_CLASS -> baseFeeInr * 0.05; // 5% waiver\r
            case PASS, FAIL   -> 0.0;\r
        };\r
    }\r
\r
    // =========================================================================\r
    // CHALLENGE 4: SIEVE OF ERATOSTHENES ROLL NUMBER PRIMALITY VALIDATOR\r
    // =========================================================================\r
    public static boolean[] generateSievePrimeTable(int maxRoll) {\r
        if (maxRoll < 2) return new boolean[0];\r
        boolean[] isPrime = new boolean[maxRoll + 1];\r
        Arrays.fill(isPrime, true);\r
        isPrime[0] = false;\r
        isPrime[1] = false;\r
\r
        for (int p = 2; p * p <= maxRoll; p++) {\r
            if (isPrime[p]) {\r
                for (int multiple = p * p; multiple <= maxRoll; multiple += p) {\r
                    isPrime[multiple] = false;\r
                }\r
            }\r
        }\r
        return isPrime;\r
    }\r
\r
    // =========================================================================\r
    // CHALLENGE 5: CAPSTONE STUDENT BILLING RECORD\r
    // =========================================================================\r
    public record CapstoneCandidateResult(\r
        int rollNumber,\r
        String studentName,\r
        AcademicTier tier,\r
        double baseFeeInr,\r
        double scholarshipInr,\r
        double finalPayableFeeInr,\r
        boolean hasPrimeRollId\r
    ) {}\r
\r
    public static CapstoneCandidateResult evaluateCandidate(\r
            int roll, String name, double score, double baseFee, boolean[] sieveTable) {\r
        Objects.requireNonNull(name, "name must not be null");\r
\r
        AcademicTier tier = (score >= 90) ? AcademicTier.DISTINCTION :\r
                            (score >= 75) ? AcademicTier.FIRST_CLASS :\r
                            (score >= 60) ? AcademicTier.SECOND_CLASS :\r
                            (score >= 40) ? AcademicTier.PASS : AcademicTier.FAIL;\r
\r
        double scholarship = dispatchScholarshipInr(tier, baseFee);\r
        double netBeforeTax = baseFee - scholarship;\r
        double finalPayable = netBeforeTax * 1.18; // 18% GST in India\r
        boolean isPrimeRoll = (roll < sieveTable.length) && sieveTable[roll];\r
\r
        return new CapstoneCandidateResult(roll, name, tier, baseFee, scholarship, finalPayable, isPrimeRoll);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 12 SEGMENT 1 TIMED CODING ASSESSMENT");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Matrix Diagonal Sum Test\r
        int[][] scoreGrid = {\r
            {10, 20, 30},\r
            {40, 50, 60},\r
            {70, 80, 90}\r
        };\r
        int diagSum = computeMatrixDiagonalSum(scoreGrid);\r
        System.out.printf("1. MATRIX DIAGONAL SUM (3x3 Grid): %d (Primary + Secondary - Center)%n%n", diagSum);\r
\r
        // 2. Sieve Precomputation Table (Rolls up to 200)\r
        boolean[] sieve = generateSievePrimeTable(200);\r
\r
        // 3. Capstone Evaluations\r
        List<CapstoneCandidateResult> candidates = List.of(\r
            evaluateCandidate(101, "Swadeep", 94.5, 20000.0, sieve),\r
            evaluateCandidate(103, "Tuhina", 96.0, 25000.0, sieve),\r
            evaluateCandidate(107, "Abhronila", 82.0, 18000.0, sieve),\r
            evaluateCandidate(110, "Debangshu", 72.0, 22000.0, sieve)\r
        );\r
\r
        System.out.println("2. FINAL CAPSTONE CANDIDATE CERTIFICATION LEDGER:\\n");\r
        double totalRevenue = 0.0;\r
        for (CapstoneCandidateResult c : candidates) {\r
            System.out.printf("  Roll #%03d (%s) | %-12s | Tier: %-12s | Base: ₹%,.2f | Waiver: ₹%,.2f | Net: ₹%,.2f%n",\r
                    c.rollNumber(),\r
                    c.hasPrimeRollId() ? "PRIME ROLL ✓" : "STANDARD    ",\r
                    c.studentName(),\r
                    c.tier(),\r
                    c.baseFeeInr(),\r
                    c.scholarshipInr(),\r
                    c.finalPayableFeeInr());\r
            totalRevenue += c.finalPayableFeeInr();\r
        }\r
\r
        System.out.println("--------------------------------------------------------------------------------");\r
        System.out.printf("TOTAL CERTIFIED CAMPUS REVENUE: ₹%,.2f%n", totalRevenue);\r
        System.out.println("================================================================================\\n");\r
\r
        System.out.println("CONGRATULATIONS SWADEEP, TUHINA, ABHRONILA, & DEBANGSHU!");\r
        System.out.println("You have officially completed Segment 1: Java Core Foundations (Modules 001_001..008)!");\r
        System.out.println("Next Destination: SEGMENT 2: Object-Oriented Programming Core Mechanics (Module 002_001)!");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_008: Segment 1 Foundations Practice, Mini-Projects & Assessment\r
TOPIC 12: Segment 1 Timed Coding Assessment (Comprehensive Capstone)\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEGMENT 1 CAPSTONE TIMED CHALLENGES\r
--------------------------------------------------------------------------------\r
- Challenge 1: Matrix Diagonal Sum (Primary + Secondary - Center for odd n in O(N)).\r
- Challenge 2: Recursive Binary Search (low + (high - low)/2 overflow-safe in O(log N)).\r
- Challenge 3: Modern Switch Expression Scholarship Dispatch (Enum → Expression).\r
- Challenge 4: Sieve of Eratosthenes Prime Table (O(N log(log N)) in-memory lookup).\r
- Challenge 5: Comprehensive Academic Billing Ledger in Indian Rupees (₹) (Record models).\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] All 8 Modules of Segment 1 (001_001 through 001_008) are 100% COMPLETE!\r
[✓] Complete mastery of JVM memory, 8 primitives, switch expressions, arrays, and recursion.\r
[✓] Clean code conformity to Google Java Style Guide.\r
[✓] Ready to advance to SEGMENT 2: Module 002_001 Classes & Objects Deep Dive!\r
================================================================================\r
`,o=[{question:"What is the Time Complexity to compute both Primary and Secondary Diagonal sums of an $N \\times N$ matrix?",shortAnswer:"$O(N)$ linear time with respect to the matrix dimension, computing both diagonals in a single loop pass.",explanation:"Matrix diagonal summation complexity.",hint:"O(N) single loop pass.",level:"basic",codeExample:"for (int i = 0; i < n; i++) { sum += matrix[i][i] + matrix[i][n-1-i]; }"},{question:"How do you avoid double-counting the center element in an odd-dimension $N \\times N$ matrix diagonal sum?",shortAnswer:"Subtract `matrix[n / 2][n / 2]` once when `n % 2 != 0`.",explanation:"Odd matrix diagonal center duplicate guard.",hint:"Subtract center element matrix[n/2][n/2] when n is odd.",level:"basic",codeExample:"if (n % 2 != 0) total -= matrix[n/2][n/2];"},{question:"In the Coder & AccoTax Barrackpore lab, what was the diagonal sum of the 3x3 score grid `[[10,20,30],[40,50,60],[70,80,90]]`?",shortAnswer:"$(10 + 50 + 90) + (30 + 50 + 70) - 50 = 150 + 150 - 50 =$ **250**.",explanation:"Diagonal sum calculation verification.",hint:"250.",level:"basic",codeExample:"computeMatrixDiagonalSum(scoreGrid) → 250"},{question:"How do Java 14+ Enhanced Switch Expressions improve scholarship tier dispatch?",shortAnswer:"They return values directly as expressions using arrow syntax (`case DISTINCTION → baseFee * 0.25;`), ensuring exhaustiveness and eliminating `break` statements.",explanation:"Modern switch expressions in business logic dispatch.",hint:"Yields discount values directly with arrow syntax and compiler exhaustiveness checks.",level:"basic",codeExample:"return switch (tier) { case DISTINCTION → base * 0.25; ... };"},{question:"In the Coder & AccoTax Barrackpore assessment, what was Swadeep's scholarship award on ₹20,000 base fee (Distinction: 25% waiver)?",shortAnswer:"₹20,000 $\\times 0.25 =$ **₹5,000.00** waiver (Net before tax: ₹15,000 → Net payable with 18% GST: **₹17,700.00**).",explanation:"Swadeep capstone fee breakdown.",hint:"Waiver: ₹5,000.00 | Net Payable: ₹17,700.00.",level:"basic",codeExample:"20000 * 0.75 * 1.18 = 17,700.00"},{question:"In the Coder & AccoTax Barrackpore assessment, what was Tuhina's scholarship award on ₹25,000 base fee (Distinction: 25% waiver)?",shortAnswer:"₹25,000 $\\times 0.25 =$ **₹6,250.00** waiver (Net before tax: ₹18,750 → Net payable with 18% GST: **₹22,125.00**).",explanation:"Tuhina capstone fee breakdown.",hint:"Waiver: ₹6,250.00 | Net Payable: ₹22,125.00.",level:"basic",codeExample:"25000 * 0.75 * 1.18 = 22,125.00"},{question:"Which candidate roll numbers were verified as PRIME numbers by the Sieve precomputation table?",shortAnswer:"Roll `#101`, Roll `#103`, and Roll `#107` are prime numbers; Roll `#110` is composite ($110 = 2 \\times 5 \\times 11$).",explanation:"Prime roll numbers identification.",hint:"101, 103, 107 are prime.",level:"basic",codeExample:"sieveTable[101] → true | sieveTable[110] → false"},{question:"In the Coder & AccoTax Barrackpore assessment, what was Abhronila's scholarship award on ₹18,000 base fee (First Class: 15% waiver)?",shortAnswer:"₹18,000 $\\times 0.15 =$ **₹2,700.00** waiver (Net before tax: ₹15,300 → Net payable with 18% GST: **₹18,054.00**).",explanation:"Abhronila capstone fee breakdown.",hint:"Waiver: ₹2,700.00 | Net Payable: ₹18,054.00.",level:"basic",codeExample:"18000 * 0.85 * 1.18 = 18,054.00"},{question:"In the Coder & AccoTax Barrackpore assessment, what was Debangshu's scholarship award on ₹22,000 base fee (Second Class: 5% waiver)?",shortAnswer:"₹22,000 $\\times 0.05 =$ **₹1,100.00** waiver (Net before tax: ₹20,900 → Net payable with 18% GST: **₹24,662.00**).",explanation:"Debangshu capstone fee breakdown.",hint:"Waiver: ₹1,100.00 | Net Payable: ₹24,662.00.",level:"basic",codeExample:"22000 * 0.95 * 1.18 = 24,662.00"},{question:"In the Coder & AccoTax Barrackpore assessment, what was the total certified campus net revenue across all 4 candidates?",shortAnswer:"₹17,700 + ₹22,125 + ₹18,054 + ₹24,662 = **₹82,541.00** total revenue.",explanation:"Total revenue verification.",hint:"₹82,541.00.",level:"basic",codeExample:"TOTAL CERTIFIED CAMPUS REVENUE: ₹82,541.00"},{question:"What is the benefit of Java Records for capstone data modeling?",shortAnswer:"Records provide immutable, compact, thread-safe data carriers with built-in constructor validation, accessors, `equals()`, and `toString()`, eliminating verbose boilerplate.",explanation:"Record data modeling advantages.",hint:"Immutable, boilerplate-free data carriers with built-in validation and accessors.",level:"intermediate",codeExample:"public record CapstoneCandidateResult(...) {}"},{question:"What makes Recursive Binary Search optimal for sorted data lookups?",shortAnswer:"It achieves logarithmic time complexity $O(\\log N)$ by eliminating half the remaining search space on every recursive invocation.",explanation:"Binary search optimality.",hint:"O(log N) divide-and-conquer efficiency.",level:"basic",codeExample:"// T(N) = T(N/2) + O(1) → O(log N)"},{question:"Why should utility classes declare a private constructor?",shortAnswer:"To prevent external code from creating useless object instances of a class that only contains static utility methods.",explanation:"Utility class constructor privacy rule.",hint:"Prevents instantiation of static-only utility classes.",level:"basic",codeExample:"private Segment1TimedCodingAssessmentDemo() {}"},{question:"What is the Time Complexity of Sieve of Eratosthenes prime table precomputation up to limit $M$?",shortAnswer:"$O(M \\log(\\log M))$ near-linear time.",explanation:"Sieve precomputation time complexity.",hint:"O(M log(log M)).",level:"basic",codeExample:"generateSievePrimeTable(200) // Runs in < 1 ms"},{question:"What is the Space Complexity of `generateSievePrimeTable(int maxRoll)`?",shortAnswer:"$O(M)$ auxiliary heap memory to store the boolean primality array of size $M + 1$.",explanation:"Sieve space complexity.",hint:"O(M) memory.",level:"basic",codeExample:"boolean[] isPrime = new boolean[maxRoll + 1];"},{question:"How does `Objects.requireNonNull()` safeguard candidate evaluations?",shortAnswer:"It immediately throws a descriptive `NullPointerException` if any required reference (like `studentName`) is `null`, preventing silent corrupted state downstream.",explanation:"Defensive validation with Objects.requireNonNull.",hint:"Fails fast if mandatory references are null.",level:"basic",codeExample:'Objects.requireNonNull(name, "name must not be null");'},{question:"What is the GST rate applied to tuition fees in India in our capstone demo?",shortAnswer:"18% GST (multiplied by `1.18`).",explanation:"GST rate configuration.",hint:"18% GST.",level:"basic",codeExample:"double finalPayable = netBeforeTax * 1.18;"},{question:"How are Enums in Java more type-safe than integer constants (e.g. `1=DISTINCTION, 2=FIRST_CLASS`)?",shortAnswer:"Enums are strongly typed and checked by the Java compiler at compile-time, preventing invalid integers from being passed to methods.",explanation:"Enum type-safety advantage over integer constants.",hint:"Compiler guarantees only valid enum constants can be passed.",level:"basic",codeExample:"public enum AcademicTier { DISTINCTION, FIRST_CLASS, ... }"},{question:"What happens if a matrix passed to `computeMatrixDiagonalSum` is `null`?",shortAnswer:"Defensive guard `if (matrix == null || matrix.length == 0) return 0;` returns 0 safely without throwing `NullPointerException`.",explanation:"Null defensive check in matrix summation.",hint:"Returns 0 safely.",level:"basic",codeExample:"if (matrix == null || matrix.length == 0) return 0;"},{question:"How many total modules were synthesized in Segment 1 (Java Core Foundations)?",shortAnswer:"8 comprehensive modules: `001_001` through `001_008` (encompassing 100+ topics).",explanation:"Segment 1 total module scope.",hint:"8 modules (001_001 to 001_008).",level:"basic",codeExample:"// Modules 001_001 through 001_008"},{question:"What is the primary topic of upcoming Segment 2?",shortAnswer:"**Object-Oriented Programming (OOP) Core Mechanics** (Classes, Objects, Constructors, Encapsulation, Inheritance, Polymorphism, and Interfaces).",explanation:"Segment 2 OOP curriculum preview.",hint:"Object-Oriented Programming (OOP) Core Mechanics.",level:"basic",codeExample:"// Segment 2: OOP Core Mechanics (Modules 002_001..002_007)"},{question:"In binary search midpoint calculation, why is `mid = (low + high) / 2` discouraged?",shortAnswer:"Because `low + high` overflows 32-bit `Integer.MAX_VALUE` for large array lengths, producing negative index crashes.",explanation:"Binary search midpoint overflow prevention.",hint:"Avoids 32-bit integer overflow.",level:"basic",codeExample:"int mid = low + (high - low) / 2;"},{question:"Why should `double` money calculations in production enterprise systems use `BigDecimal`?",shortAnswer:"Because `double` uses IEEE 754 binary floating-point representation which cannot represent exact base-10 decimals, whereas `BigDecimal` guarantees arbitrary precision arithmetic.",explanation:"BigDecimal vs Double financial precision.",hint:"BigDecimal avoids IEEE 754 binary floating-point rounding errors.",level:"intermediate",codeExample:'BigDecimal amount = new BigDecimal("17700.00");'},{question:"What is the time complexity of looking up a precomputed prime in a boolean sieve array?",shortAnswer:"$O(1)$ constant time direct array indexing.",explanation:"O(1) array index lookup.",hint:"O(1) constant time.",level:"basic",codeExample:"boolean isPrime = sieveTable[rollNumber]; // O(1)"},{question:"In the Coder & AccoTax Barrackpore assessment, what was the tier assigned to Abhronila (score 82.0%)?",shortAnswer:"`AcademicTier.FIRST_CLASS` ($75 \\le \\text{score} < 90$).",explanation:"Tier boundary check verification.",hint:"FIRST_CLASS.",level:"basic",codeExample:"tier for 82.0% → FIRST_CLASS"},{question:"In the Coder & AccoTax Barrackpore assessment, what was the tier assigned to Debangshu (score 72.0%)?",shortAnswer:"`AcademicTier.SECOND_CLASS` ($60 \\le \\text{score} < 75$).",explanation:"Tier boundary check verification.",hint:"SECOND_CLASS.",level:"basic",codeExample:"tier for 72.0% → SECOND_CLASS"},{question:"What is the significance of the `final` keyword on class `Segment1TimedCodingAssessmentDemo`?",shortAnswer:"It prevents other classes from subclassing / extending the utility class.",explanation:"Final class immutability and inheritance prevention.",hint:"Prevents subclassing.",level:"basic",codeExample:"public final class Segment1TimedCodingAssessmentDemo { ... }"},{question:"What is the ultimate takeaway of Module 001_008 Topic 12 for Java developers?",shortAnswer:"The Timed Coding Assessment unifies all foundational Java Core pillars: matrices, algorithms, recursion, switch expressions, clean records, and billing calculations, confirming 100% readiness for Segment 2 Object-Oriented Programming!",explanation:"Mastery of Segment 1 capstone timed assessment.",hint:"Unifies matrices, algorithms, recursion, switch expressions, and clean code.",level:"basic",codeExample:"// Summary: Complete Foundations Mastery → Ready for Segment 2 OOP!"},{question:"What is the next module in the Java Core Roadmap?",shortAnswer:"Module `002_001_classes-objects-and-constructors-deep-dive`.",explanation:"Next roadmap module transition.",hint:"Module 002_001: Classes, Objects, and Constructors Deep Dive.",level:"basic",codeExample:"// Module 002_001 Classes & Objects Deep Dive"},{question:"How does clean code architecture improve developer velocity in Java?",shortAnswer:"Self-documenting names, consistent Google Java Style formatting, immutable records, and defensive parameter validation reduce bugs and make codebases easy to understand and maintain.",explanation:"Clean code architectural value.",hint:"Reduces bugs, simplifies code reviews, and accelerates maintainability.",level:"basic",codeExample:"// Clean Code = High Velocity + Low Maintenance Cost"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowFinish {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.9)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-fn {
            animation: glowFinish 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_008 · Topic 12 (Final Topic)"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Segment 1 Capstone Complete"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Segment 1 Timed Coding Assessment: Capstone Evaluation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The ultimate coding capstone for Segment 1 Foundations: evaluating dynamic matrix diagonal summations, recursive binary search pipelines, modern Java 14+ switch expressions, in-memory prime filters, and immutable student billing records in Indian Rupees (₹)."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏆"})," The 5 Capstone Timed Challenges"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"The Capstone Timed Assessment tests integrated problem-solving across all Segment 1 foundational pillars:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"1. Matrix Diagonals"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"Computes primary and secondary diagonals in $O(N)$ time with center-overlap elimination."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"2. Binary Search Pipeline"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"Recursive logarithmic divide-and-conquer with overflow-safe midpoint calculation."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"3. Switch & Sieve Ledger"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"Enhanced switch expressions + Sieve roll checks + Java Records billing in Indian Rupees (₹)."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Final Certification):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," (Roll #101, Distinction, ₹17,700 net), ",e.jsx("strong",{children:"Tuhina"})," (Roll #103, Distinction, ₹22,125 net), ",e.jsx("strong",{children:"Abhronila"})," (Roll #107, First Class, ₹18,054 net), and ",e.jsx("strong",{children:"Debangshu"})," (Roll #110, Second Class, ₹24,662 net) successfully completed the assessment with ",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹82,541.00 Total Certified Revenue"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Segment 1 Capstone Synthesis & Milestone Badge"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing the capstone assessment challenges and Segment 1 completion certificate:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Segment 1 Capstone Assessment Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradCapLeft",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradCapBadge",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"390",height:"215",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"55",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"THE 5 CAPSTONE CODING CHALLENGES"}),e.jsx("rect",{x:"45",y:"70",width:"360",height:"28",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"88",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"1. Matrix Diagonals  : O(N) Primary + Secondary Sum"}),e.jsx("rect",{x:"45",y:"103",width:"360",height:"28",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"121",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"2. Binary Search     : Recursive O(log N) Overflow-Safe"}),e.jsx("rect",{x:"45",y:"136",width:"360",height:"28",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"154",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"3. Switch Dispatch   : Modern Java 14+ Enum Match"}),e.jsx("rect",{x:"45",y:"169",width:"360",height:"28",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"187",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"4. Sieve Primality   : O(1) Precomputed Array Lookup"}),e.jsx("text",{x:"225",y:"225",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"5. Student Records & GST Invoicing in INR (₹)"}),e.jsx("rect",{x:"450",y:"30",width:"400",height:"215",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"650",y:"55",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"MILESTONE CERTIFICATE: SEGMENT 1 COMPLETE!"}),e.jsx("rect",{x:"465",y:"70",width:"370",height:"60",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"475",y:"92",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"JAVA CORE FOUNDATIONS: 100% MASTERED"}),e.jsx("text",{x:"475",y:"112",fill:"#6ee7b7",fontSize:"9",fontFamily:"monospace",children:"Modules 001_001 through 001_008 Completed Successfully"}),e.jsx("rect",{x:"465",y:"140",width:"370",height:"55",rx:"6",fill:"#1e1b4b"}),e.jsx("text",{x:"475",y:"162",fill:"#c7d2fe",fontSize:"10",fontWeight:"bold",children:"NEXT DESTINATION: SEGMENT 2 (OOP CORE)"}),e.jsx("text",{x:"475",y:"180",fill:"#a5b4fc",fontSize:"9",fontFamily:"monospace",children:"Module 002_001: Classes, Objects & Constructors Deep Dive"}),e.jsx("text",{x:"650",y:"225",fill:"#fef08a",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Certified Total Revenue: ₹82,541.00"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Congratulations! Segment 1 Foundations is 100% complete. You are fully prepared for Segment 2 OOP!"})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Capstone Candidate Results & Fee Breakdown"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Roll #"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Student Name"}),e.jsx("th",{className:"p-3 font-semibold text-purple-400",children:"Tier / Waiver"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Base Fee"}),e.jsx("th",{className:"p-3 font-semibold text-rose-400",children:"Scholarship"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-300",children:"Net Payable (18% GST)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"#101 (Prime ✓)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Swadeep"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"DISTINCTION (25%)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"₹20,000.00"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"₹5,000.00"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"₹17,700.00"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"#103 (Prime ✓)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Tuhina"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"DISTINCTION (25%)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"₹25,000.00"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"₹6,250.00"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"₹22,125.00"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"#107 (Prime ✓)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Abhronila"}),e.jsx("td",{className:"p-3 text-purple-400",children:"FIRST_CLASS (15%)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"₹18,000.00"}),e.jsx("td",{className:"p-3 text-purple-300",children:"₹2,700.00"}),e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"₹18,054.00"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"#110"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Debangshu"}),e.jsx("td",{className:"p-3 text-amber-400",children:"SECOND_CLASS (5%)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"₹22,000.00"}),e.jsx("td",{className:"p-3 text-amber-300",children:"₹1,100.00"}),e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"₹24,662.00"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"Segment1TimedCodingAssessmentDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program is the complete capstone assessment engine executing all 5 challenges."}),e.jsx(t,{fileModule:i,title:"Segment1TimedCodingAssessmentDemo.java",highlightLines:[22,28,38,42,57,65,75,85,96,110]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Double-Counting the Center in Matrix Diagonals"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["When $N$ is odd (e.g. 3x3), the center element ",e.jsx("code",{className:"text-rose-300 font-mono",children:"matrix[1][1]"})," is on both diagonals; failing to subtract it once will overstate the total sum."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Celebrate Mastering Segment 1 Foundations!"]}),e.jsx("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:"You now have complete mastery over JVM memory, primitives, expressions, switch logic, loops, multi-dimensional arrays, and recursion. You are 100% prepared for Object-Oriented Programming in Segment 2!"})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“What awaits us in Segment 2: Object-Oriented Programming (OOP) Core Mechanics?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Real-World Abstractions & Polymorphism! In Segment 2, we will master Classes, Objects, Constructors, Encapsulation, Method Overriding, Inheritance, Abstract Classes, and Polymorphic Interfaces to design enterprise software systems!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Segment 1 Capstone Assessment FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:r,title:"Module 001_008 Topic 12: Segment 1 Timed Coding Assessment",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_008_topic12_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"Heartiest congratulations to Swadeep, Tuhina, Abhronila, and Debangshu! You have successfully conquered all 8 modules of Segment 1: Java Core Foundations! We now advance to Segment 2: Object-Oriented Programming (OOP) Core Mechanics, starting with Module 002_001: Classes, Objects, and Constructors Deep Dive! — Sukanta Hui"})})]})}export{b as default};

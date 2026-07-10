import{r as d,j as e}from"./index-DKhGj2r9.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-C0AXZMBk.js";import{F as p}from"./FAQTemplate-DNMa4yDj.js";import{J as i}from"./JavaFileLoader-DwhOVPk0.js";import"./github-BlE0UCNo.js";import"./createLucideIcon-DZ4EMxs8.js";import"./git-branch-BCLsXsvv.js";import"./JavaCodeBlock-BDo80ffG.js";import"./prism-CMJExfNS.js";import"./browser-DA-_IcxN.js";import"./prism-java-BwO6k4I_.js";const x=`/**\r
 * Naive Power Function\r
 * Recurrence: T(n) = T(n-1) + O(1), T(0) = O(1)\r
 * Time Complexity: O(n)\r
 * Space Complexity: O(n) — recursion stack depth = n\r
 * \r
 * Note: This is the simplest but slowest implementation.\r
 * For large exponents, use fast power (O(log n)).\r
 */\r
public class NaivePower {\r
    private static int callCount = 0;\r
\r
    public static void main(String[] args) {\r
        int base = 2;\r
        int exp = 10;\r
\r
        callCount = 0;\r
        long result = naivePower(base, exp);\r
\r
        System.out.println("Naive Power");\r
        System.out.println(base + "^" + exp + " = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Time: O(n), Space: O(n)");\r
\r
        // Show steps for different exponents\r
        System.out.println("\\nSteps for different exponents:");\r
        for (int e : new int[]{1, 2, 4, 8, 16, 32}) {\r
            callCount = 0;\r
            naivePower(base, e);\r
            System.out.println("exp = " + e + " → " + callCount + " calls");\r
        }\r
        System.out.println("Notice: steps = exp + 1 (linear growth).");\r
    }\r
\r
    public static long naivePower(int base, int exp) {\r
        callCount++;\r
\r
        // Base case: any number to power 0 is 1\r
        if (exp == 0) {\r
            return 1;\r
        }\r
\r
        // Recursive case: T(n) = T(n-1) + O(1)\r
        return base * naivePower(base, exp - 1);\r
    }\r
}`,m=`/**\r
 * Fast Power Function (Exponentiation by Squaring)\r
 * Recurrence: T(n) = T(n/2) + O(1), T(0) = O(1)\r
 * Time Complexity: O(log n)\r
 * Space Complexity: O(log n) — recursion stack depth = log₂(n)\r
 * \r
 * This is significantly faster than naive power for large exponents.\r
 */\r
public class FastPower {\r
    private static int callCount = 0;\r
\r
    public static void main(String[] args) {\r
        int base = 2;\r
        int exp = 10;\r
\r
        callCount = 0;\r
        long result = fastPower(base, exp);\r
\r
        System.out.println("Fast Power (Exponentiation by Squaring)");\r
        System.out.println(base + "^" + exp + " = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Time: O(log n), Space: O(log n)");\r
\r
        // Show steps for different exponents\r
        System.out.println("\\nSteps for different exponents:");\r
        for (int e : new int[]{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024}) {\r
            callCount = 0;\r
            fastPower(base, e);\r
            System.out.println("exp = " + e + " → " + callCount + " calls");\r
        }\r
        System.out.println("Notice: steps = floor(log₂(exp)) + 2 (logarithmic growth).");\r
\r
        // Compare with naive power\r
        System.out.println("\\nFor exp = 1,000,000:");\r
        System.out.println("Naive power: ~1,000,000 calls");\r
        System.out.println("Fast power: ~log₂(1,000,000) ≈ 20 calls");\r
        System.out.println("Fast power is ~50,000x faster!");\r
    }\r
\r
    // Recursive fast power (exponentiation by squaring)\r
    public static long fastPower(int base, int exp) {\r
        callCount++;\r
\r
        // Base case: any number to power 0 is 1\r
        if (exp == 0) {\r
            return 1;\r
        }\r
\r
        // If exponent is even: (base^2)^(exp/2)\r
        if (exp % 2 == 0) {\r
            long half = fastPower(base, exp / 2);\r
            return half * half;\r
        }\r
        // If exponent is odd: base * (base^2)^((exp-1)/2)\r
        else {\r
            long half = fastPower(base, exp / 2);\r
            return base * half * half;\r
        }\r
    }\r
\r
    // Iterative fast power (O(log n) time, O(1) space)\r
    public static long fastPowerIterative(int base, int exp) {\r
        long result = 1;\r
        long b = base;\r
        int e = exp;\r
\r
        while (e > 0) {\r
            if ((e & 1) == 1) { // if e is odd\r
                result *= b;\r
            }\r
            b *= b; // square the base\r
            e >>= 1; // divide e by 2\r
        }\r
        return result;\r
    }\r
}`,h=`/**\r
 * Compares different power implementations:\r
 * 1. Naive Power (O(n) time, O(n) space)\r
 * 2. Fast Power (O(log n) time, O(log n) space)\r
 * 3. Iterative Fast Power (O(log n) time, O(1) space)\r
 * 4. Math.pow (built-in, optimized)\r
 */\r
public class PowerComparison {\r
    public static void main(String[] args) {\r
        int base = 2;\r
        int exp = 1000000; // 1 million!\r
\r
        System.out.println("=== Power Comparison ===");\r
        System.out.println("Base = " + base + ", Exponent = " + exp);\r
        System.out.println();\r
\r
        // 1. Naive Power - SKIP for large exp (would be too slow)\r
        System.out.println("1. Naive Power: O(n) time, O(n) space");\r
        System.out.println("   Skipped for exp = " + exp + " (would take ~1,000,000 steps)");\r
\r
        // 2. Fast Power (Recursive)\r
        long start = System.nanoTime();\r
        long result1 = FastPower.fastPower(base, exp);\r
        long end = System.nanoTime();\r
        System.out.println("2. Fast Power (recursive): " + result1);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(log n), Space: O(log n)");\r
\r
        // 3. Fast Power (Iterative)\r
        start = System.nanoTime();\r
        long result2 = FastPower.fastPowerIterative(base, exp);\r
        end = System.nanoTime();\r
        System.out.println("3. Fast Power (iterative): " + result2);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Time: O(log n), Space: O(1)");\r
\r
        // 4. Math.pow (built-in)\r
        start = System.nanoTime();\r
        double result3 = Math.pow(base, exp);\r
        end = System.nanoTime();\r
        System.out.println("4. Math.pow: " + result3);\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Uses highly optimized C code");\r
\r
        // Verify all results are equal (within floating point precision)\r
        System.out.println("\\nAll methods give the same result: " + \r
            (result1 == result2 && (long)result3 == result1));\r
\r
        // Show steps for different methods\r
        System.out.println("\\n=== Steps Comparison ===");\r
        System.out.println("Exponent\\tNaive\\tFast (steps)");\r
        for (int e : new int[]{1, 2, 4, 8, 16, 32, 64}) {\r
            int naiveSteps = e + 1;\r
            int fastSteps = (int)(Math.log(e) / Math.log(2)) + 2;\r
            System.out.println(e + "\\t\\t" + naiveSteps + "\\t" + fastSteps);\r
        }\r
        System.out.println("\\nFast power is exponentially faster for large exponents!");\r
    }\r
}`,g=`/**\r
 * Modular Exponentiation: (base^exp) % mod\r
 * Used in cryptography, RSA, and many other applications.\r
 * \r
 * Fast power with modulo keeps numbers small by applying modulo at each step.\r
 * Time Complexity: O(log n)\r
 * Space Complexity: O(log n) — recursion stack\r
 */\r
public class PowerModulo {\r
    private static int callCount = 0;\r
\r
    public static void main(String[] args) {\r
        int base = 2;\r
        int exp = 1000;\r
        int mod = 1000000007; // A large prime (commonly used in competitive programming)\r
\r
        callCount = 0;\r
        long result = powerMod(base, exp, mod);\r
\r
        System.out.println("=== Modular Exponentiation ===");\r
        System.out.println(base + "^" + exp + " % " + mod + " = " + result);\r
        System.out.println("Number of recursive calls: " + callCount);\r
        System.out.println("Time: O(log n), Space: O(log n)");\r
\r
        // Show how modulo keeps numbers manageable\r
        System.out.println("\\nWithout modulo: 2^1000 = " + FastPower.fastPower(base, exp));\r
        System.out.println("With modulo: " + result);\r
\r
        // Cryptography example\r
        System.out.println("\\n=== Cryptography Example ===");\r
        System.out.println("RSA encryption uses modular exponentiation with very large numbers.");\r
        System.out.println("For example, computing (base^exp) % mod where exp = 65537, mod is a 2048-bit number.");\r
        System.out.println("Fast modular exponentiation makes this feasible in O(log exp) steps.");\r
    }\r
\r
    // Recursive modular exponentiation\r
    public static long powerMod(int base, int exp, int mod) {\r
        callCount++;\r
\r
        if (exp == 0) {\r
            return 1 % mod;\r
        }\r
\r
        if (exp % 2 == 0) {\r
            long half = powerMod(base, exp / 2, mod);\r
            return (half * half) % mod;\r
        } else {\r
            long half = powerMod(base, exp / 2, mod);\r
            return (base * ((half * half) % mod)) % mod;\r
        }\r
    }\r
\r
    // Iterative modular exponentiation (O(log n) time, O(1) space)\r
    public static long powerModIterative(long base, long exp, long mod) {\r
        long result = 1;\r
        long b = base % mod;\r
        long e = exp;\r
\r
        while (e > 0) {\r
            if ((e & 1) == 1) {\r
                result = (result * b) % mod;\r
            }\r
            b = (b * b) % mod;\r
            e >>= 1;\r
        }\r
        return result;\r
    }\r
}`,u=[{question:"What is the recurrence for naive power?",shortAnswer:"T(n) = T(n-1) + O(1), T(0) = O(1)",explanation:"Each call reduces the exponent by 1 and does constant work (multiplication).",hint:"Reducing by 1 each time.",level:"basic",codeExample:"// T(n) = T(n-1) + 1"},{question:"What is the time complexity of naive power?",shortAnswer:"O(n) — linear time.",explanation:"The recurrence T(n) = T(n-1) + O(1) solves to O(n).",hint:"Linear.",level:"basic",codeExample:"// O(n)"},{question:"What is the recurrence for fast power?",shortAnswer:"T(n) = T(n/2) + O(1), T(0) = O(1)",explanation:"Each call halves the exponent and does constant work.",hint:"Halving the exponent.",level:"intermediate",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the time complexity of fast power?",shortAnswer:"O(log n) — logarithmic time.",explanation:"The recurrence T(n) = T(n/2) + O(1) solves to O(log n).",hint:"Logarithmic.",level:"intermediate",codeExample:"// O(log n)"},{question:"What is the space complexity of recursive fast power?",shortAnswer:"O(log n) — due to recursion stack depth = log₂(n).",explanation:"The recursion depth is O(log n).",hint:"Depth = log n.",level:"intermediate",codeExample:"// O(log n) space"},{question:"What is the space complexity of iterative fast power?",shortAnswer:"O(1) — constant space.",explanation:"The iterative version uses only a few variables.",hint:"No recursion stack.",level:"intermediate",codeExample:"// O(1) space"},{question:"What is the base case for both naive and fast power?",shortAnswer:"b⁰ = 1 for any b ≠ 0.",explanation:"Any number raised to the power 0 is 1.",hint:"Exponent 0.",level:"basic",codeExample:"// if (exp == 0) return 1;"},{question:"How does fast power handle odd exponents?",shortAnswer:"It multiplies by one extra base: b^e = b × (b²)^((e-1)/2).",explanation:"For odd e, b^e = b × (b²)^(e/2) using integer division.",hint:"Extra multiplication.",level:"advanced",codeExample:"// if (exp % 2 == 1) return base * fastPower(base, exp-1);"},{question:"How does fast power handle even exponents?",shortAnswer:"It squares the base and halves the exponent: b^e = (b²)^(e/2).",explanation:"For even e, b^e = (b²)^(e/2).",hint:"Square and halve.",level:"advanced",codeExample:"// if (exp % 2 == 0) return fastPower(base*base, exp/2);"},{question:"Why is fast power faster than naive power?",shortAnswer:"Because it reduces the exponent by half each step (O(log n)) vs reducing by 1 (O(n)).",explanation:"Fast power uses exponentiation by squaring, which is exponentially faster.",hint:"Halving vs decrementing.",level:"intermediate",codeExample:"// O(log n) vs O(n)"},{question:"How many multiplications does fast power need for b^1000000?",shortAnswer:"About 20 multiplications (log₂(1,000,000) ≈ 20).",explanation:"Fast power reduces the exponent by half each step.",hint:"~20 steps.",level:"intermediate",codeExample:"// 20 multiplications"},{question:"How many multiplications does naive power need for b^1000000?",shortAnswer:"1,000,000 multiplications.",explanation:"Naive power multiplies the base exp times.",hint:"1,000,000.",level:"basic",codeExample:"// 1,000,000 multiplications"},{question:"What is modular exponentiation?",shortAnswer:"Computing (b^e) % m using fast power with modulo at each step.",explanation:"Used in cryptography to keep numbers manageable while computing large powers.",hint:"Modulo at each step.",level:"advanced",codeExample:"// (b^e) % m"},{question:"What is the time complexity of modular exponentiation?",shortAnswer:"O(log n) — same as fast power.",explanation:"It's fast power with modulo operations at each step.",hint:"O(log n).",level:"advanced",codeExample:"// O(log n)"},{question:"Why is modular exponentiation used in cryptography?",shortAnswer:"Because it computes (b^e) % m efficiently without overflow or huge numbers.",explanation:"RSA and Diffie-Hellman rely on modular exponentiation.",hint:"Cryptography.",level:"advanced",codeExample:"// RSA uses modular exponentiation"},{question:"What is the recurrence for fast power in terms of steps?",shortAnswer:"T(e) = T(e/2) + O(1), T(0) = O(1) → O(log e).",explanation:"The number of steps is the number of bits in the exponent.",hint:"Bits in exponent.",level:"advanced",codeExample:"// O(log e)"},{question:"What is the recurrence for naive power in terms of steps?",shortAnswer:"T(e) = T(e-1) + O(1), T(0) = O(1) → O(e).",explanation:"The number of steps is equal to the exponent.",hint:"Exponent steps.",level:"basic",codeExample:"// O(e)"},{question:"Can fast power be implemented iteratively?",shortAnswer:"Yes, with O(log n) time and O(1) space.",explanation:"Iterative fast power uses a while loop instead of recursion.",hint:"Iterative version.",level:"intermediate",codeExample:"// while (exp > 0) { ... }"},{question:"What is the space complexity of recursive fast power in Java?",shortAnswer:"O(log n) — because Java doesn't optimize recursion.",explanation:"Even with tail recursion, Java doesn't use TCO.",hint:"O(log n) in Java.",level:"advanced",codeExample:"// O(log n) space"},{question:"What is the advantage of iterative fast power over recursive?",shortAnswer:"O(1) space vs O(log n) space.",explanation:"Iterative version avoids the recursion stack.",hint:"Less space.",level:"intermediate",codeExample:"// O(1) space"},{question:"What happens when the exponent is negative in power?",shortAnswer:"b⁻ⁿ = 1/bⁿ for b ≠ 0. Handle separately or throw an exception.",explanation:"Negative exponents result in fractions.",hint:"Fractional.",level:"advanced",codeExample:"// if (exp < 0) return 1.0 / power(b, -exp);"},{question:"What is the difference between Math.pow and fast power?",shortAnswer:"Math.pow is implemented in C and handles floating-point numbers; fast power is for integers.",explanation:"Math.pow is optimized for double precision; fast power is for integer exponentiation.",hint:"Floating vs integer.",level:"intermediate",codeExample:"// Math.pow for double, fast power for int/long"},{question:"Can fast power overflow for large bases/exponents?",shortAnswer:"Yes, the result can exceed long.MAX_VALUE. Use BigInteger or modular exponentiation.",explanation:"Even small bases can overflow for large exponents (e.g., 2^63).",hint:"Overflow.",level:"advanced",codeExample:"// Use BigInteger for large results"},{question:"What is the time complexity of modular exponentiation with BigInteger?",shortAnswer:"O(log n) multiplications, but each multiplication is O(k log k) where k is the number of digits.",explanation:"BigInteger operations are not constant time for large numbers.",hint:"BigInteger overhead.",level:"advanced",codeExample:"// O(log n) multiplications"},{question:"What is the binary representation of exponent used in fast power?",shortAnswer:"Fast power processes the bits of the exponent from LSB to MSB.",explanation:"The iterative version checks each bit of the exponent.",hint:"Bits of exponent.",level:"advanced",codeExample:"// while (exp > 0) { if (exp & 1) ... }"},{question:"What is the value of 2^10 using fast power?",shortAnswer:"1024.",explanation:"2^10 = 1024, and fast power computes it in about 4 steps.",hint:"1024.",level:"basic",codeExample:"// 2^10 = 1024"},{question:"What is the value of 2^20 using fast power?",shortAnswer:"1,048,576.",explanation:"2^20 = 1,048,576.",hint:"1,048,576.",level:"basic",codeExample:"// 2^20 = 1,048,576"},{question:"How does fast power relate to binary search?",shortAnswer:"Both have the same recurrence: T(n) = T(n/2) + O(1) → O(log n).",explanation:"Fast power reduces the exponent by half each step, just like binary search halves the search space.",hint:"Same recurrence.",level:"intermediate",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the recurrence for fast power with modulo?",shortAnswer:"T(n) = T(n/2) + O(1) — same as fast power.",explanation:"Modulo operations are O(1) and added at each step.",hint:"Same recurrence.",level:"advanced",codeExample:"// T(n) = T(n/2) + 1"},{question:"What is the maximum exponent that fast power can handle for 64-bit integers?",shortAnswer:"Exponents up to 2^63-1 (about 9.22e18) in the exponent, but results may overflow.",explanation:"The exponent is a long (64-bit), but the result may overflow.",hint:"Exponent limit.",level:"advanced",codeExample:"// exponent up to 9.22e18"},{question:"What is the recurrence for the number of multiplications in fast power?",shortAnswer:"M(e) = M(e/2) + 1, M(0) = 0 → O(log e).",explanation:"Each recursive call does at most 2 multiplications.",hint:"Logarithmic.",level:"advanced",codeExample:"// O(log e)"}],F=()=>{const[s,l]=d.useState("overview"),r="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",o=t=>`animate-[fadeSlideUp_0.5s_ease-out_${t*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:n(r,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 37"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Power Function"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Comparing the ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"naive O(n)"})," and",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:" fast O(log n)"})," power functions — understanding how exponentiation by squaring dramatically improves performance."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(t=>e.jsxs("button",{onClick:()=>l(t),className:n("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",s===t?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[t==="overview"&&"📖 Overview",t==="code"&&"☕ Code Examples",t==="faq"&&"❓ FAQ"]},t))}),e.jsxs("div",{className:"space-y-12",children:[s==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," What is the Recursive Power Function?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"power function"})," computes ",e.jsxs("strong",{children:["b",e.jsx("sup",{children:"e"})]})," (base raised to exponent). There are two common recursive implementations:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Naive Power:"})," Multiply the base e times: ",e.jsx("strong",{children:"b × b × ... × b"}),". Recurrence: T(n) = T(n-1) + O(1) → ",e.jsx("span",{className:"font-semibold text-red-600 dark:text-red-400",children:"O(n)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fast Power (Exponentiation by Squaring):"})," Reduce the exponent by half each step. Recurrence: T(n) = T(n/2) + O(1) → ",e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"O(log n)"}),"."]})]}),e.jsxs("p",{children:["The fast power algorithm is ",e.jsx("strong",{children:"exponentially faster"})," for large exponents, making it essential in cryptography, modular arithmetic, and scientific computing."]}),e.jsx("p",{children:"Think of it like calculating compound interest: instead of multiplying n times, you double your money and halve the number of steps — that's the power of squaring!"})]})]}),e.jsxs("section",{className:n(r,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," How the Power Functions Work"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Naive Power (O(n))",desc:"Multiply the base by itself n times using linear recursion.",example:"pow(b, e) = b × pow(b, e-1), pow(b, 0) = 1",icon:"🔄"},{title:"Fast Power (O(log n))",desc:"Square the base and halve the exponent using divide-and-conquer.",example:"pow(b, e) = pow(b², e/2) if e even, else b × pow(b², (e-1)/2)",icon:"⚡"}].map((t,a)=>e.jsxs("div",{className:n(o(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:t.icon}),e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc}),e.jsx("p",{className:"text-sm font-mono text-gray-500 dark:text-gray-500 mt-1",children:t.example})]},a))})]}),e.jsxs("section",{className:n(r,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{algorithm:"Naive Power",time:"O(n) — linear",space:"O(n) — recursion stack depth = n",example:"b¹⁰⁰⁰⁰⁰ → 100,000 steps"},{algorithm:"Fast Power",time:"O(log n) — logarithmic",space:"O(log n) — recursion stack depth = log₂(n)",example:"b¹⁰⁰⁰⁰⁰ → ~17 steps"}].map((t,a)=>e.jsxs("div",{className:n(o(a+2),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10","hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:t.algorithm}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Time: ",e.jsx("span",{className:"font-semibold",children:t.time})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-semibold",children:t.space})]}),e.jsx("p",{className:"text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-2",children:t.example})]},a))})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Visual Intuition: Fast vs Naive"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Power function comparison",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow37",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Computing b^8 using different approaches"}),e.jsx("text",{x:"180",y:"50",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Naive: 8 steps"}),[0,1,2,3,4,5,6,7].map(t=>e.jsx("rect",{x:60+t*35,y:"65",width:"30",height:"20",rx:"3",fill:"#f472b6",opacity:.8-t*.05},t)),e.jsx("text",{x:"180",y:"105",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"b × b × b × b × b × b × b × b"}),e.jsx("text",{x:"580",y:"50",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Fast: 3 steps"}),e.jsx("rect",{x:"530",y:"65",width:"100",height:"20",rx:"3",fill:"#34d399",opacity:"0.9"}),e.jsx("text",{x:"580",y:"80",textAnchor:"middle",fontSize:"9",fill:"white",children:"b² = b×b"}),e.jsx("line",{x1:"580",y1:"85",x2:"580",y2:"100",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"530",y:"105",width:"100",height:"20",rx:"3",fill:"#34d399",opacity:"0.8"}),e.jsx("text",{x:"580",y:"120",textAnchor:"middle",fontSize:"9",fill:"white",children:"b⁴ = b²×b²"}),e.jsx("line",{x1:"580",y1:"125",x2:"580",y2:"140",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("rect",{x:"530",y:"145",width:"100",height:"20",rx:"3",fill:"#34d399",opacity:"0.7"}),e.jsx("text",{x:"580",y:"160",textAnchor:"middle",fontSize:"9",fill:"white",children:"b⁸ = b⁴×b⁴"}),e.jsx("text",{x:"400",y:"205",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Fast power uses exponentiation by squaring: O(log n) vs O(n)"}),e.jsx("text",{x:"400",y:"235",textAnchor:"middle",fontSize:"11",fill:"#34d399",className:"dark:fill-emerald-400",children:"✓ For b^1000000: Naive = 1,000,000 steps, Fast = 20 steps!"})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Fast power reduces the exponent by half each step, leading to logarithmic complexity. For large exponents, the difference is enormous."})]})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Recurrence Relations"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-semibold text-red-600 dark:text-red-400",children:"Naive Power"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n-1) + O(1),   T(0) = O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-red-600 dark:text-red-400",children:"O(n)"})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Fast Power"}),e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(n/2) + O(1),   T(0) = O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Solution: ",e.jsx("span",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:"O(log n)"})]})]})]}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:"The fast power recurrence is identical to binary search — that's why it's so efficient!"})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Cryptography:"})," ","RSA encryption uses modular exponentiation with very large exponents (e.g., 2⁶⁵⁵³⁷). Fast power (modular exponentiation) makes this feasible."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Scientific Computing:"})," ","Computing very large powers in physics simulations — fast power is essential."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Compound Interest:"})," ","Calculating compound interest over many years: A = P(1+r)^n. Fast power computes this efficiently."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"Classroom Example:"})," ",e.jsx("strong",{children:"Swadeep"})," needs to calculate 2¹⁰⁰ for a math competition. Using fast power, he does it in ~7 multiplications instead of 100!"]})})]})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Always use fast power for large exponents",desc:"Naive power is O(n) and becomes impractical for n > 10,000."},{tip:"Use modular exponentiation for cryptography",desc:"Compute (b^e) % m using fast power with modulo at each step."},{tip:"Iterative fast power avoids stack space",desc:"The iterative version is O(log n) time and O(1) space."},{tip:"Be careful with exponent 0",desc:"b⁰ = 1 for any b ≠ 0. Handle this as a base case."}].map((t,a)=>e.jsxs("div",{className:n(o(a+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"),children:[e.jsxs("p",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:["✦ ",t.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:t.desc})]},a))})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using naive power for large exponents:"})," For e = 1,000,000, naive power takes 1,000,000 multiplications. Fast power takes only 20. Don't make this mistake!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case for exponent 0:"})," Any base to the power 0 is 1. This is essential for termination."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling negative exponents:"})," For negative exponents, b⁻ⁿ = 1/bⁿ. Handle this separately or throw an exception."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integer overflow in multiplication:"})," Power results can be enormous. Use long or BigInteger for large bases/exponents."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing fast power with naive power:"})," Both are recursive, but fast power reduces the exponent by half, not by 1.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Abhronila"})," once wrote a power function that reduced exponent by 1, not by half, and got O(n) instead of O(log n). She learned to check the reduction factor."]})]})]})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Always use fast power"})," for exponentiation — it's O(log n) and easy to implement."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use modular exponentiation"})," for cryptographic applications to avoid huge numbers."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iteration for fast power"})," to avoid recursion stack (O(1) space)."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Document the recurrence"})," in comments to explain the complexity."]})})]})]}),e.jsxs("section",{className:n(r,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for naive power (O(n))?","✅ Can you write the recurrence for fast power (O(log n))?","✅ Do you know why fast power is O(log n)?","✅ Can you implement both recursive and iterative fast power?","✅ Do you know the space complexity of both implementations?","✅ Can you handle edge cases (exponent 0, negative exponents)?"].map((t,a)=>e.jsx("div",{className:n(o(a+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:t},a))})]}),e.jsxs("section",{className:n(r,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For b^16, how many multiplications does naive power need? 16. How many does fast power need? 4 (b², b⁴, b⁸, b¹⁶). That's the power of squaring!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the exponent is odd (e.g., 15)? Fast power handles it by multiplying one extra b: b¹⁵ = b × (b²)⁷."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a computer science lab with 2¹⁰⁰⁰⁰⁰ possible states. Using fast power, a student can compute this in ~17 steps instead of 100,000 steps. That's the magic of logarithmic algorithms!"]})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:n(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Naive Power — O(n) Time, O(n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Simple recursive power with recurrence T(n) = T(n-1) + O(1) → O(n)."}),e.jsx(i,{fileModule:x,title:"NaivePower.java",highlightLines:[]})]}),e.jsxs("section",{className:n(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Fast Power — O(log n) Time, O(log n) Space"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Fast power using exponentiation by squaring. Recurrence T(n) = T(n/2) + O(1) → O(log n)."}),e.jsx(i,{fileModule:m,title:"FastPower.java",highlightLines:[]})]}),e.jsxs("section",{className:n(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Power Comparison — Naive vs Fast vs Math.pow"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares the runtime and steps of naive power vs fast power vs built-in Math.pow."}),e.jsx(i,{fileModule:h,title:"PowerComparison.java",highlightLines:[]})]}),e.jsxs("section",{className:n(r,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Modular Exponentiation — (b^e) % m"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Fast power with modulo operations — essential for cryptography and large computations."}),e.jsx(i,{fileModule:g,title:"PowerModulo.java",highlightLines:[]})]})]}),s==="faq"&&e.jsx("div",{className:n(r,"space-y-4"),children:e.jsx(p,{title:"Complexity of Recursive Power Function — FAQs",questions:u})})]}),e.jsx("div",{className:n(r,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:`The power function is a classic example of how a simple change in approach can dramatically improve 
              performance. Naive power is O(n) — it's straightforward but slow. Fast power (exponentiation by squaring) 
              is O(log n) — it's one of the most important algorithmic optimizations. I emphasize that this is the 
              same principle as binary search: reduce the problem size by half each step. The recurrence 
              T(n) = T(n/2) + O(1) appears everywhere in computer science. Also, highlight that fast power is 
              the foundation of modular exponentiation, which is used in RSA, Diffie-Hellman, and many cryptographic 
              protocols. This isn't just a theoretical exercise — it's a real-world algorithm used billions of times 
              every day.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 37 · Complexity of Recursive Power Function · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
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
      `})]})};export{F as default};

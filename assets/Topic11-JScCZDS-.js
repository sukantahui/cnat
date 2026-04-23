import{j as e}from"./index-CEi3MejZ.js";import{c as i}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-7xaK7fMm.js";import{F as s}from"./FAQTemplate-D5jtwzrb.js";import{T as t}from"./TeacherSukantaHui-CUBiDJUj.js";import"./JavaCodeBlock-BWtBTZEf.js";import"./prism-w9TuYdiW.js";import"./browser-DsqnkEHn.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DDFFUd5U.js";const a=[{question:"Why is using + for string concatenation in a loop bad for performance?",shortAnswer:"It creates O(n²) intermediate objects and copies.",explanation:"Each iteration creates a new StringBuilder and copies the entire accumulated string, leading to quadratic complexity.",hint:"For n=10,000, that's ~50 million character copies.",level:"intermediate",codeExample:`// Bad
String s = "";
for(int i=0;i<10000;i++) s += i;`},{question:"What is the time complexity of StringBuilder.append()?",shortAnswer:"Amortized O(1) – constant time on average.",explanation:"Most appends are constant time; occasional resizing copies the array (O(n)) but happens rarely.",hint:"Pre‑sizing eliminates resizing copies.",level:"intermediate",codeExample:"// Amortized constant time"},{question:"How much faster is StringBuilder than String for 10,000 concatenations?",shortAnswer:"Typically 100-500x faster.",explanation:"String: ~500-1000 ms; StringBuilder: ~1-2 ms.",hint:"The gap grows with larger n.",level:"basic",codeExample:"// StringBuilder wins by a huge margin"},{question:"What is the performance cost of StringBuffer over StringBuilder?",shortAnswer:"StringBuffer is slower due to synchronization (typically 2-3x).",explanation:"Each method acquires a lock, adding overhead even when not needed.",hint:"Use StringBuilder unless you need thread‑safety.",level:"intermediate",codeExample:"// StringBuilder is faster"},{question:"Does pre‑sizing StringBuilder improve performance?",shortAnswer:"Yes, it avoids internal array resizing and copying.",explanation:"If you know the final length, pre‑sizing eliminates multiple resize operations.",hint:"Especially beneficial for large strings.",level:"basic",codeExample:"StringBuilder sb = new StringBuilder(10000);"},{question:"What is the memory overhead of a String object?",shortAnswer:"About 24 bytes + 2 bytes per character (plus array overhead).",explanation:"Each String has object header, hash code, and reference to char array. The char array itself has overhead.",hint:"Many small strings waste memory.",level:"advanced",codeExample:'// new String("a") uses ~40+ bytes'},{question:"Is String interning always beneficial for performance?",shortAnswer:"No – it saves memory but costs CPU and can cause issues in large heaps.",explanation:"Interning adds strings to the pool, which can reduce duplicates but the pool lookup has overhead. Over‑interning can cause contention.",hint:"Use only for known repeated strings (e.g., HTTP methods).",level:"expert",codeExample:"String method = httpMethod.intern(); // OK for GET/POST"},{question:"What is the performance impact of using String.format()?",shortAnswer:"Slower than manual concatenation or StringBuilder.",explanation:"format() parses the format string and uses Formatter internally, which has overhead.",hint:"Use for readability, not for hot paths.",level:"intermediate",codeExample:`// Faster: "a" + b
// Slower: String.format("a%s", b)`},{question:"How to efficiently clear a StringBuilder for reuse?",shortAnswer:"Use setLength(0).",explanation:"setLength(0) resets the length counter but keeps the internal array, avoiding new allocation.",hint:"More efficient than creating a new StringBuilder.",level:"intermediate",codeExample:"sb.setLength(0); // clear"},{question:"Why does calling toUpperCase() on a large string multiple times hurt performance?",shortAnswer:"Each call creates a new String, copying all characters.",explanation:"If you need to check case‑insensitive equality, use equalsIgnoreCase() instead of converting both to upper/lower.",hint:"Avoid creating unnecessary copies.",level:"basic",codeExample:`// Bad: s.toUpperCase().equals("YES")
// Good: s.equalsIgnoreCase("yes")`},{question:'What is the performance difference between new String("abc") and "abc"?',shortAnswer:'"abc" is faster and uses less memory because it uses the String Pool.',explanation:'new String("abc") always creates a new heap object, bypassing the pool.',hint:"Never use new String(String) unless you need a distinct object.",level:"basic",codeExample:`String s = "abc"; // good
String t = new String("abc"); // bad`},{question:"How does split() affect performance?",shortAnswer:"It compiles a regex each time; for repeated calls, pre‑compile the Pattern.",explanation:"split(String regex) compiles the regex on every call. Use Pattern.compile() and reuse.",hint:"For simple delimiters, use StringUtils or manual loop.",level:"advanced",codeExample:`Pattern p = Pattern.compile(",");
String[] parts = p.split(str);`},{question:"Is it faster to use + or concat() for two strings?",shortAnswer:"concat() can be slightly faster for exactly two strings.",explanation:"concat() creates a new char array of exact size; + may use StringBuilder overhead.",hint:"Difference is negligible; use + for readability.",level:"advanced",codeExample:"// a.concat(b) may be a tiny bit faster than a + b"},{question:"What is the cost of substring() in modern Java?",shortAnswer:"O(n) – it creates a new string with a copy of the characters.",explanation:"Older Java shared the backing array, which could cause memory leaks. Now it's a copy, trading memory for safety.",hint:"Still fine for typical use.",level:"intermediate",codeExample:"String sub = s.substring(0,5); // copies 5 chars"},{question:"How to efficiently join many strings with a delimiter?",shortAnswer:"Use String.join() or Collectors.joining() – they use StringBuilder internally.",explanation:"Both are optimized and handle delimiter placement correctly.",hint:"Avoid manual loops with conditional delimiter logic.",level:"basic",codeExample:'String result = String.join(", ", list);'},{question:"What is the performance impact of using StringBuilder's default capacity (16) for large strings?",shortAnswer:"It causes multiple resizes (copying the array many times), hurting performance.",explanation:"Each time capacity is exceeded, the array size increases (often doubled) and all characters are copied.",hint:"Pre‑size to avoid resizes.",level:"intermediate",codeExample:`// Bad for large strings: new StringBuilder()
// Good: new StringBuilder(10000)`},{question:"How does garbage collection affect string‑heavy applications?",shortAnswer:"Many short‑lived strings increase GC frequency and pause times.",explanation:"String concatenation in loops creates many temporary objects, putting pressure on the garbage collector.",hint:"Use StringBuilder to reduce object churn.",level:"advanced",codeExample:"// StringBuilder creates fewer objects → less GC"},{question:"What is the fastest way to convert an int to a String?",shortAnswer:"Integer.toString(i) is fastest.",explanation:'Direct conversion avoids intermediate objects. "" + i uses StringBuilder internally.',hint:"Use Integer.toString(i) for performance.",level:"intermediate",codeExample:"String s = Integer.toString(123);"},{question:"Why is String concatenation with + at compile time optimized?",shortAnswer:"The compiler folds constant expressions into a single literal.",explanation:'String s = "a" + "b" + "c"; becomes "abc" at compile time – no runtime cost.',hint:"Works only with literals, not variables.",level:"intermediate",codeExample:`// Compiles to "abc"
String s = "a" + "b" + "c";`},{question:"Does using charAt() in a loop have any performance issues?",shortAnswer:"No, it's O(1) per call and efficient.",explanation:"String stores characters in an array; charAt() is a simple array access.",hint:"Fine for most use cases.",level:"basic",codeExample:"for(int i=0;i<s.length();i++) { char c = s.charAt(i); }"},{question:"What is the performance cost of using replaceAll() with a simple string?",shortAnswer:"It compiles a regex, which is slower than replace() for literal replacement.",explanation:"replaceAll() treats the first argument as regex; replace() uses literal string.",hint:"Use replace() for literal replacements.",level:"intermediate",codeExample:`// Faster: s.replace("a", "b")
// Slower: s.replaceAll("a", "b")`},{question:"How to measure string performance in Java?",shortAnswer:"Use System.nanoTime() for micro‑benchmarks or JMH for robust benchmarking.",explanation:"System.nanoTime() gives high‑precision timing. JMH is the standard for Java micro‑benchmarking.",hint:"Warm up the JVM before measuring.",level:"advanced",codeExample:`long start = System.nanoTime();
// code
long end = System.nanoTime();`},{question:"Is it beneficial to reuse StringBuilder across multiple operations?",shortAnswer:"Yes, using setLength(0) to clear and reuse avoids object allocation.",explanation:"Reusing the same StringBuilder reduces GC pressure.",hint:"But be careful not to share across threads.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder();
for(...) { sb.setLength(0); sb.append(...); }`},{question:"What is the memory impact of storing many small strings (e.g., single characters)?",shortAnswer:"High overhead per string; consider using char[] or StringBuilder instead.",explanation:"Each String object has overhead. For many small strings, memory usage can be 3-5x the actual character data.",hint:"For large collections of small strings, consider alternative structures.",level:"expert",codeExample:"// 10,000 single‑char strings use ~400KB overhead"},{question:"Does using StringBuilder.append() with a char faster than with a String of length 1?",shortAnswer:"Slightly faster because it avoids creating a String object.",explanation:`append('a') directly adds the char; append("a") creates a temporary String.`,hint:"Use char literal when possible.",level:"advanced",codeExample:`sb.append('a'); // faster than sb.append("a")`},{question:"What is the performance impact of using String.intern() on many distinct strings?",shortAnswer:"Can cause performance degradation and memory leaks (older JVMs).",explanation:"Interned strings are stored in the PermGen (Java 7-) which has limited size; excessive interning causes OutOfMemoryError. Even in modern JVMs, the pool is a hash table that can become large and slow.",hint:"Only intern known limited values.",level:"expert",codeExample:"// Only for small set of repeated values"},{question:"How does Java 9+ compact strings affect performance?",shortAnswer:"Reduces memory usage for strings containing only Latin‑1 characters (stores as byte[] instead of char[]).",explanation:"Most strings in many applications are Latin‑1, so memory is halved, improving cache efficiency.",hint:"Transparent to developers.",level:"advanced",codeExample:"// Enabled by default since Java 9"},{question:"What is the fastest way to check if a string is empty?",shortAnswer:"isEmpty() is fastest; checking length() == 0 is similar.",explanation:'Both are O(1). Avoid equals("") which creates a new String object.',hint:"Use isEmpty() for clarity.",level:"basic",codeExample:"if (s.isEmpty()) { ... }"},{question:"Why does reading large files line by line with StringBuilder improve performance?",shortAnswer:"It avoids creating many intermediate strings and reduces GC.",explanation:"If you accumulate the whole file, using StringBuilder is much faster than String concatenation.",hint:"Read line, append to StringBuilder.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder();
while((line=reader.readLine())!=null) sb.append(line).append('\\n');`},{question:"What is the performance trade‑off between using String and StringBuilder for small, fixed concatenations?",shortAnswer:"Negligible – the compiler optimizes small + expressions.",explanation:"For a few strings (e.g., 2-5), the compiler uses StringBuilder internally anyway.",hint:"Don't micro‑optimize; prioritize readability.",level:"basic",codeExample:'String s = "a" + "b" + "c"; // fine'}],l=`// topic11_files/StringPerformanceIssues.java\r
public class StringPerformanceIssues {\r
    public static void main(String[] args) {\r
        // 1. Bad: String concatenation in loop\r
        int iterations = 50000;\r
        long start = System.nanoTime();\r
        String result = "";\r
        for (int i = 0; i < iterations; i++) {\r
            result += "a";\r
        }\r
        long end = System.nanoTime();\r
        System.out.println("String + in loop: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 2. Good: StringBuilder in loop\r
        start = System.nanoTime();\r
        StringBuilder sb = new StringBuilder(iterations);\r
        for (int i = 0; i < iterations; i++) {\r
            sb.append("a");\r
        }\r
        String sbResult = sb.toString();\r
        end = System.nanoTime();\r
        System.out.println("StringBuilder loop: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 3. Unnecessary string conversions\r
        int number = 12345;\r
        start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            String s = "" + number;  // slower\r
        }\r
        end = System.nanoTime();\r
        System.out.println("\\"\\" + int time: " + (end - start) / 1_000_000 + " ms");\r
        \r
        start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            String s = Integer.toString(number); // faster\r
        }\r
        end = System.nanoTime();\r
        System.out.println("Integer.toString() time: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 4. Unnecessary toUpperCase/toLowerCase in loop\r
        String test = "Hello World";\r
        start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            if (test.toLowerCase().equals("hello world")) { } // creates new string each time\r
        }\r
        end = System.nanoTime();\r
        System.out.println("\\ntoLowerCase() in loop: " + (end - start) / 1_000_000 + " ms");\r
        \r
        start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            if (test.equalsIgnoreCase("hello world")) { } // no new string\r
        }\r
        end = System.nanoTime();\r
        System.out.println("equalsIgnoreCase() in loop: " + (end - start) / 1_000_000 + " ms");\r
    }\r
}`,o=`// topic11_files/StringBuilderOptimizations.java\r
public class StringBuilderOptimizations {\r
    public static void main(String[] args) {\r
        // 1. Pre‑sizing\r
        int size = 100000;\r
        long start, end;\r
        \r
        // Without pre‑sizing\r
        start = System.nanoTime();\r
        StringBuilder sb1 = new StringBuilder();\r
        for (int i = 0; i < size; i++) {\r
            sb1.append("a");\r
        }\r
        end = System.nanoTime();\r
        System.out.println("Without pre‑sizing: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // With pre‑sizing\r
        start = System.nanoTime();\r
        StringBuilder sb2 = new StringBuilder(size);\r
        for (int i = 0; i < size; i++) {\r
            sb2.append("a");\r
        }\r
        end = System.nanoTime();\r
        System.out.println("With pre‑sizing: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 2. Reusing StringBuilder with setLength(0)\r
        StringBuilder reusable = new StringBuilder(1000);\r
        start = System.nanoTime();\r
        for (int i = 0; i < 10000; i++) {\r
            reusable.setLength(0);\r
            reusable.append("Iteration ").append(i);\r
            // use reusable.toString()\r
        }\r
        end = System.nanoTime();\r
        System.out.println("\\nReusing StringBuilder: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 3. Using char append instead of String for single chars\r
        StringBuilder sb3 = new StringBuilder(10000);\r
        start = System.nanoTime();\r
        for (int i = 0; i < 10000; i++) {\r
            sb3.append("a"); // String of length 1\r
        }\r
        end = System.nanoTime();\r
        System.out.println("\\nappend(\\"a\\"): " + (end - start) / 1_000_000 + " ms");\r
        \r
        sb3.setLength(0);\r
        start = System.nanoTime();\r
        for (int i = 0; i < 10000; i++) {\r
            sb3.append('a'); // char literal\r
        }\r
        end = System.nanoTime();\r
        System.out.println("append('a'): " + (end - start) / 1_000_000 + " ms");\r
        \r
        // 4. String.join vs manual loop\r
        String[] words = new String[1000];\r
        for (int i = 0; i < words.length; i++) words[i] = "word" + i;\r
        \r
        start = System.nanoTime();\r
        String joined = String.join(", ", words);\r
        end = System.nanoTime();\r
        System.out.println("\\nString.join(): " + (end - start) / 1_000_000 + " ms");\r
        \r
        start = System.nanoTime();\r
        StringBuilder sbManual = new StringBuilder();\r
        for (int i = 0; i < words.length; i++) {\r
            if (i > 0) sbManual.append(", ");\r
            sbManual.append(words[i]);\r
        }\r
        String manual = sbManual.toString();\r
        end = System.nanoTime();\r
        System.out.println("Manual StringBuilder loop: " + (end - start) / 1_000_000 + " ms");\r
    }\r
}`,d=`// topic11_files/InterningDemo.java\r
public class InterningDemo {\r
    public static void main(String[] args) {\r
        // Without interning: many duplicate objects\r
        long start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            String s = new String("test");\r
            // each iteration creates a new object\r
        }\r
        long end = System.nanoTime();\r
        System.out.println("Without interning (new String): " + (end - start) / 1_000_000 + " ms");\r
        \r
        // With literal (already pooled)\r
        start = System.nanoTime();\r
        for (int i = 0; i < 100000; i++) {\r
            String s = "test"; // same object each time\r
        }\r
        end = System.nanoTime();\r
        System.out.println("With literal (pooled): " + (end - start) / 1_000_000 + " ms");\r
        \r
        // Interning dynamically created strings\r
        String s1 = new String("hello");\r
        String s2 = new String("hello");\r
        System.out.println("\\ns1 == s2: " + (s1 == s2)); // false\r
        \r
        String s3 = s1.intern();\r
        String s4 = s2.intern();\r
        System.out.println("s3 == s4: " + (s3 == s4)); // true (both from pool)\r
        \r
        // Performance cost of interning many distinct strings\r
        System.out.println("\\nInterning many distinct strings (may be slow):");\r
        start = System.nanoTime();\r
        for (int i = 0; i < 10000; i++) {\r
            String s = new String("value" + i).intern();\r
        }\r
        end = System.nanoTime();\r
        System.out.println("Interning 10,000 distinct strings: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // Without interning (just creating new objects)\r
        start = System.nanoTime();\r
        for (int i = 0; i < 10000; i++) {\r
            String s = new String("value" + i);\r
        }\r
        end = System.nanoTime();\r
        System.out.println("Without interning (new objects): " + (end - start) / 1_000_000 + " ms");\r
        \r
        // Recommendation: only intern known limited values\r
        String[] methods = {"GET", "POST", "PUT", "DELETE"};\r
        String[] internedMethods = new String[methods.length];\r
        for (int i = 0; i < methods.length; i++) {\r
            internedMethods[i] = methods[i].intern(); // good: limited set\r
        }\r
        System.out.println("\\nInterning limited set is beneficial.");\r
    }\r
}`,b=()=>{const n=i("bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]","border border-gray-100 dark:border-gray-700");return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-slide-up { animation: none; opacity: 1; transform: none; }
        }
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 space-y-8",children:[e.jsxs("div",{className:"animate-fade-slide-up text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Performance Considerations in String Handling"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed",children:"Writing correct code is not enough – understanding performance pitfalls and optimizations separates good developers from great ones."})]}),e.jsxs("div",{className:n,style:{animationDelay:"0.1s"},className:"animate-fade-slide-up",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚡"})," What Affects String Performance?"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"Memory Overhead"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm mt-1",children:[e.jsx("li",{children:"Each String object has overhead (~24 bytes + chars)"}),e.jsx("li",{children:"Immutable operations create many intermediate objects"}),e.jsx("li",{children:"StringBuilder reduces object churn"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"CPU / Time"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm mt-1",children:[e.jsx("li",{children:"String concatenation in loops is O(n²)"}),e.jsx("li",{children:"StringBuilder operations are O(n)"}),e.jsx("li",{children:"Regular expressions can be expensive"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"GC Pressure"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm mt-1",children:[e.jsx("li",{children:"Many short-lived strings trigger frequent GC"}),e.jsx("li",{children:"StringBuilder reuses buffers"}),e.jsx("li",{children:"String interning can reduce duplicates"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"String Pool"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm mt-1",children:[e.jsx("li",{children:"Literals are automatically pooled"}),e.jsx("li",{children:"Interning can save memory but adds CPU cost"}),e.jsx("li",{children:"Too many interned strings cause pool contention"})]})]})]})]}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.2s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 Visual: Why StringBuilder Wins"}),e.jsx("div",{className:"flex justify-center py-4",children:e.jsx(c,{})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"String concatenation in a loop creates O(n²) work; StringBuilder is linear."})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.3s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🚫 Top 5 Performance Killers"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"+"})," in loops"]})," – Each iteration creates a new StringBuilder and copies entire string."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Calling ",e.jsx("code",{children:"toUpperCase()"})," / ",e.jsx("code",{children:"toLowerCase()"})," repeatedly"]})," – Each call creates a new string."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"StringBuffer"})," in single‑threaded code"]})," – Unnecessary synchronization overhead."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not pre‑sizing ",e.jsx("code",{children:"StringBuilder"})]})," – Causes repeated array resizing and copying."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Excessive use of ",e.jsx("code",{children:"intern()"})]})," – Can degrade performance and cause memory leaks in old JVMs."]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Remember:"})," Profile before optimizing – don't guess where the bottleneck is."]})})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.4s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🚀 Key Optimization Techniques"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"1. Pre‑size StringBuilder"}),e.jsx("code",{className:"block text-xs mt-1",children:"new StringBuilder(1000);"}),e.jsx("p",{className:"text-xs mt-1",children:"Avoids internal array resizing and copying."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"2. Use StringBuilder for loops"}),e.jsx("code",{className:"block text-xs mt-1",children:"sb.append(i); // not s += i"}),e.jsx("p",{className:"text-xs mt-1",children:"Linear time instead of quadratic."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"3. Reuse StringBuilder with setLength(0)"}),e.jsx("code",{className:"block text-xs mt-1",children:"sb.setLength(0);"}),e.jsx("p",{className:"text-xs mt-1",children:"Clears without new allocation."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"4. Use literals when possible"}),e.jsx("code",{className:"block text-xs mt-1",children:'String s = "constant";'}),e.jsx("p",{className:"text-xs mt-1",children:"Leverages String Pool, no new objects."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"5. Avoid unnecessary conversions"}),e.jsx("code",{className:"block text-xs mt-1",children:'Integer.toString(i); // not "" + i'}),e.jsx("p",{className:"text-xs mt-1",children:"Direct conversion is faster."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"6. Use String.format() sparingly"}),e.jsx("code",{className:"block text-xs mt-1",children:"// Heavy, use + or StringBuilder"}),e.jsx("p",{className:"text-xs mt-1",children:"Format is convenient but slower."})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.5s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"💻 Performance Demos"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{fileModule:l,title:"StringPerformanceIssues.java",highlightLines:[]}),e.jsx(r,{fileModule:o,title:"StringBuilderOptimizations.java",highlightLines:[]}),e.jsx(r,{fileModule:d,title:"InterningDemo.java",highlightLines:[]})]}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:["🧠 ",e.jsx("strong",{children:"Try changing this:"})," Increase the loop counts to see the dramatic difference between String and StringBuilder."]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.6s"},children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:i(n,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"⚠️ Common Performance Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:'new String("literal")'})]})," – Bypasses string pool, creates unnecessary object."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Concatenating in loops with ",e.jsx("code",{children:"+"})]})," – The #1 performance mistake."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"StringBuffer"})," without need"]})," – Pays synchronization cost."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Calling ",e.jsx("code",{children:"trim()"})," or ",e.jsx("code",{children:"toLowerCase()"})," repeatedly"]})," – Each call creates new string."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"split()"})," in tight loops"]})," – Compiles regex each time; compile once."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interning every string"})," – Can fill up PermGen (older JVMs) and slow lookups."]})]})]}),e.jsxs("div",{className:i(n,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"✅ Performance Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsx("li",{children:e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"StringBuilder"})," for dynamic building."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Pre‑size ",e.jsx("code",{children:"StringBuilder"})," when length is known."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"String"})," literals instead of ",e.jsx("code",{children:"new String()"}),"."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Reuse ",e.jsx("code",{children:"StringBuilder"})," with ",e.jsx("code",{children:"setLength(0)"})," in loops."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"String.join()"})," or ",e.jsx("code",{children:"Collectors.joining()"})," for delimited lists."]})}),e.jsx("li",{children:e.jsx("strong",{children:"Profile your code – don't optimize prematurely."})})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📈 Real‑World Benchmark (10,000 operations)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-mono text-sm",children:"String concatenation in loop"}),e.jsx("div",{className:"w-48 bg-gray-200 dark:bg-gray-700 rounded h-5 overflow-hidden",children:e.jsx("div",{className:"bg-red-500 h-full",style:{width:"100%"}})}),e.jsx("span",{className:"text-sm font-bold text-red-600",children:"~800 ms"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-mono text-sm",children:"StringBuffer (default capacity)"}),e.jsx("div",{className:"w-48 bg-gray-200 dark:bg-gray-700 rounded h-5 overflow-hidden",children:e.jsx("div",{className:"bg-orange-500 h-full",style:{width:"2%"}})}),e.jsx("span",{className:"text-sm",children:"~4 ms"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-mono text-sm",children:"StringBuilder (default capacity)"}),e.jsx("div",{className:"w-48 bg-gray-200 dark:bg-gray-700 rounded h-5 overflow-hidden",children:e.jsx("div",{className:"bg-green-500 h-full",style:{width:"1.5%"}})}),e.jsx("span",{className:"text-sm",children:"~2.5 ms"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-mono text-sm",children:"StringBuilder (pre‑sized)"}),e.jsx("div",{className:"w-48 bg-gray-200 dark:bg-gray-700 rounded h-5 overflow-hidden",children:e.jsx("div",{className:"bg-green-600 h-full",style:{width:"1%"}})}),e.jsx("span",{className:"text-sm",children:"~1.2 ms"})]})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"* Times are illustrative; actual values depend on JVM and hardware."})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📝 Performance Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5",children:[e.jsxs("li",{children:["✅ I avoid using ",e.jsx("code",{children:"+"})," in loops – always use ",e.jsx("code",{children:"StringBuilder"}),"."]}),e.jsxs("li",{children:["✅ I pre‑size ",e.jsx("code",{children:"StringBuilder"})," when I know the final length."]}),e.jsxs("li",{children:["✅ I reuse ",e.jsx("code",{children:"StringBuilder"})," with ",e.jsx("code",{children:"setLength(0)"})," in loops."]}),e.jsxs("li",{children:["✅ I use string literals instead of ",e.jsx("code",{children:"new String()"}),"."]}),e.jsxs("li",{children:["✅ I understand that ",e.jsx("code",{children:"StringBuffer"})," is slower than ",e.jsx("code",{children:"StringBuilder"}),"."]}),e.jsx("li",{children:"✅ I avoid unnecessary string transformations (trim, case change) in hot paths."}),e.jsx("li",{children:"✅ I profile before optimizing – I don't guess."})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.9s"},children:e.jsx(s,{title:"String Performance – FAQs",questions:a})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"1.0s"},children:e.jsx(t,{note:"This topic ties everything together. Run the performance demos live – students will be amazed at the difference. Emphasize that premature optimization is bad, but knowing these pitfalls saves you from writing O(n²) code. Use real examples: building a large CSV file, processing logs, generating HTML. Show them how to profile with System.nanoTime() or JMH. Ask: 'If you have a loop that runs 100,000 times, would you use String or StringBuilder?' The answer is obvious after the demo."})})]})]})},c=()=>e.jsx("div",{className:"inline-block p-2 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg",children:e.jsxs("svg",{width:"500",height:"220",viewBox:"0 0 500 220",xmlns:"http://www.w3.org/2000/svg",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"180",x2:"450",y2:"180",stroke:"#4B5563",strokeWidth:"2",markerEnd:"url(#axisArrow)"}),e.jsx("line",{x1:"50",y1:"180",x2:"50",y2:"20",stroke:"#4B5563",strokeWidth:"2",markerEnd:"url(#axisArrow)"}),e.jsx("text",{x:"250",y:"200",textAnchor:"middle",fontSize:"10",fill:"#6B7280",children:"Number of operations (n)"}),e.jsx("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"10",fill:"#6B7280",transform:"rotate(-90,20,100)",children:"Time (ms)"}),e.jsx("path",{d:"M 50 178 Q 150 178, 250 150 Q 350 100, 450 30",stroke:"#EF4444",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"420",y:"25",fontSize:"11",fill:"#EF4444",fontWeight:"bold",children:"String (O(n²))"}),e.jsx("line",{x1:"50",y1:"178",x2:"450",y2:"160",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"400",y:"155",fontSize:"11",fill:"#10B981",fontWeight:"bold",children:"StringBuilder (O(n))"}),e.jsx("line",{x1:"250",y1:"180",x2:"250",y2:"20",stroke:"#9CA3AF",strokeWidth:"1",strokeDasharray:"4"}),e.jsx("defs",{children:e.jsx("marker",{id:"axisArrow",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#4B5563"})})})]})});export{b as default};

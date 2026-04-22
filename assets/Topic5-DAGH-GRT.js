import{j as e}from"./index-CJBYzsBp.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as i}from"./JavaFileLoader-Dax7XGvZ.js";import{F as r}from"./FAQTemplate-BjI0qxLa.js";import{T as s}from"./TeacherSukantaHui-BpioJGg-.js";import"./JavaCodeBlock-mMDJ51Fq.js";import"./prism-Dc-XSp4L.js";import"./browser-K208wPFZ.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-BkM3LVEU.js";const a=[{question:"What are the different ways to concatenate strings in Java?",shortAnswer:"+ operator, concat() method, StringBuilder/StringBuffer, String.join(), String.format().",explanation:"Each has different use cases: + for readability, concat() for two strings, StringBuilder for loops, join() for delimiters.",hint:"Choose based on number of strings and performance needs.",level:"basic",codeExample:`String a = "Hello" + " World";
String b = "Hello".concat(" World");
StringBuilder sb = new StringBuilder().append("Hello").append(" World");`},{question:"Is using + for string concatenation efficient?",shortAnswer:"Yes for a few fixed strings (compiler optimizes), but not in loops.",explanation:"The compiler translates + into StringBuilder for simple cases. But in loops, each iteration creates a new StringBuilder and intermediate strings.",hint:"Use + for 2-5 strings, StringBuilder for loops.",level:"intermediate",codeExample:`// Good: String s = "a" + "b" + "c";
// Bad: for(...) s += i;`},{question:"What is the difference between StringBuilder and StringBuffer?",shortAnswer:"StringBuilder is not thread-safe (faster); StringBuffer is thread-safe (slower due to synchronization).",explanation:"Use StringBuilder in single-threaded code. Use StringBuffer only when sharing across threads.",hint:"99% of the time, StringBuilder is the right choice.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder(); // preferred
StringBuffer sbf = new StringBuffer(); // legacy`},{question:"Why is using + in a loop bad for performance?",shortAnswer:"Each iteration creates a new StringBuilder and a new String object, leading to O(n²) complexity.",explanation:"s += x is roughly s = new StringBuilder(s).append(x).toString(). So each iteration copies the entire accumulated string.",hint:"For 10,000 iterations, it creates ~10,000 intermediate strings.",level:"basic",codeExample:`// Bad
String s = "";
for(int i=0;i<10000;i++) s += i;`},{question:"How does the compiler optimize the + operator?",shortAnswer:"It replaces simple concatenations with a single StringBuilder or with StringConcatFactory (Java 9+).",explanation:"For constant expressions (e.g., 'a' + 'b' + 'c'), it folds at compile time. For non-constants, it uses invokedynamic or StringBuilder.",hint:"You don't need to manually use StringBuilder for a few strings.",level:"expert",codeExample:`// Compiles to single string: "abc"
String s = "a" + "b" + "c";`},{question:"What is the return type of concat()?",shortAnswer:"String (a new string).",explanation:"concat() returns a new String object; original unchanged.",hint:"Like all String methods, it returns a new string.",level:"basic",codeExample:'String result = "Hello".concat(" World");'},{question:"Can concat() handle null?",shortAnswer:"No, it throws NullPointerException.",explanation:'If you call concat(null), you get NPE. Use + which handles null by converting to "null".',hint:"+ is more null-friendly.",level:"basic",codeExample:`String s = "Hi";
s.concat(null); // NPE`},{question:"What is the purpose of String.join()?",shortAnswer:"To join multiple strings with a delimiter.",explanation:"Convenient for creating CSV, paths, or any delimited list. Handles null elements gracefully.",hint:"Introduced in Java 8.",level:"intermediate",codeExample:'String joined = String.join(", ", "apple", "banana", "cherry");'},{question:"How to concatenate many strings with a separator efficiently?",shortAnswer:"Use StringBuilder with a loop, or String.join() for collections.",explanation:"StringBuilder.append() is efficient. For arrays/iterables, String.join() is cleaner.",hint:"Avoid manual separator handling with if statements.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder();
for(String s : list) sb.append(s).append(", ");
String result = sb.toString();`},{question:"What is the difference between String.format() and concatenation?",shortAnswer:"format() uses placeholders; more readable for complex messages, but slightly slower.",explanation:"format() is great for logs, error messages with multiple variables. It's clearer than many + operators.",hint:"Use format() when you have 3+ variables.",level:"intermediate",codeExample:'String msg = String.format("Student %s from %s scored %d", name, city, score);'},{question:"What is the default capacity of StringBuilder?",shortAnswer:"16 characters.",explanation:"When you create new StringBuilder(), it allocates an internal char array of size 16. It grows as needed.",hint:"Pre-size if you know the final length to avoid resizing.",level:"intermediate",codeExample:"StringBuilder sb = new StringBuilder(1000); // pre-sized"},{question:"How to convert StringBuilder to String?",shortAnswer:"Using toString() method.",explanation:"toString() returns a new String object containing the characters from the StringBuilder.",hint:"Don't forget this step.",level:"basic",codeExample:"String result = sb.toString();"},{question:"Is String.concat() faster than + for two strings?",shortAnswer:"Slightly, because it avoids StringBuilder overhead.",explanation:"For exactly two strings, concat() creates a new char array of the right size and copies directly. + may create a StringBuilder.",hint:"But the difference is negligible; readability matters more.",level:"advanced",codeExample:`// concat can be a tiny bit faster
String s = a.concat(b);`},{question:"What happens when you use + with a non-string?",shortAnswer:"Java converts the non-string to string using String.valueOf().",explanation:`For primitives, it's automatic. For objects, toString() is called. If the object is null, "null" is used.`,hint:"Convenient but be aware of null behavior.",level:"basic",codeExample:'String s = "Value: " + 123; // "Value: 123"'},{question:"How to efficiently concatenate strings from a list?",shortAnswer:"Use String.join() or StringBuilder.",explanation:"String.join(delimiter, list) is simplest. For custom logic, use StringBuilder loop.",hint:"Java 8+ streams: list.stream().collect(Collectors.joining(delimiter)).",level:"intermediate",codeExample:`String result = String.join(", ", list);
// or using streams
String result = list.stream().collect(Collectors.joining(", "));`},{question:"Why is StringBuilder mutable?",shortAnswer:"So you can modify the same object without creating new ones, improving performance.",explanation:"StringBuilder's append(), insert(), delete() change the internal char array instead of creating new objects.",hint:"That's why it's efficient for loops.",level:"basic",codeExample:`StringBuilder sb = new StringBuilder("Hi");
sb.append("!"); // same object`},{question:"What is the time complexity of StringBuilder.append()?",shortAnswer:"Amortized O(1) per append (occasional O(n) when resizing).",explanation:"Appending is usually constant time. When internal array is full, it doubles in size (copying all characters), which is O(n) but rare.",hint:"Pre-sizing reduces resizing overhead.",level:"advanced",codeExample:`// Pre-size to avoid resizes
new StringBuilder(estimatedLength);`},{question:"Can you chain StringBuilder methods?",shortAnswer:"Yes, because append() returns the same StringBuilder instance.",explanation:'Method chaining allows fluent style: sb.append("a").append("b").append("c");',hint:"Improves readability.",level:"basic",codeExample:'sb.append("Hello").append(" ").append("World");'},{question:"What is the difference between StringBuilder and String?",shortAnswer:"String is immutable; StringBuilder is mutable.",explanation:"String creates new object for each change; StringBuilder modifies in place.",hint:"Use StringBuilder for building strings dynamically.",level:"basic",codeExample:`String s = "a"; s += "b"; // new object
StringBuilder sb = new StringBuilder("a"); sb.append("b"); // same object`},{question:"How to concatenate a char to a string?",shortAnswer:"Using + operator or StringBuilder.append().",explanation:"char is automatically promoted to String when using +. Or sb.append('c').",hint:"Both work fine.",level:"basic",codeExample:`String s = "Hello" + '!';
StringBuilder sb = new StringBuilder("Hello").append('!');`},{question:"What is the performance impact of using StringBuffer vs StringBuilder?",shortAnswer:"StringBuffer is slower due to synchronization overhead (2-3x slower in benchmarks).",explanation:"Each method in StringBuffer is synchronized. In single-threaded code, this is unnecessary overhead.",hint:"Never use StringBuffer unless you need thread-safety.",level:"intermediate",codeExample:"// Use StringBuilder unless shared across threads"},{question:"What is string concatenation via '+' compiled to in Java 9+?",shortAnswer:"invokedynamic with StringConcatFactory (not always StringBuilder).",explanation:"Java 9 introduced a more flexible approach using invokedynamic, which can choose optimal strategies at runtime.",hint:"Still, avoid + in loops.",level:"expert",codeExample:"// Under the hood is more sophisticated now"},{question:"How to repeat a string multiple times efficiently?",shortAnswer:"Use repeat() (Java 11+) or StringBuilder with a loop.",explanation:"repeat(n) is built-in and efficient. For older Java, use StringBuilder with append in a loop.",hint:"repeat() is the best.",level:"intermediate",codeExample:`String repeated = "abc".repeat(5); // Java 11+
// or
StringBuilder sb = new StringBuilder(); for(int i=0;i<5;i++) sb.append("abc");`},{question:'What is the output of: String s = null; s = s + "test";?',shortAnswer:'"nulltest"',explanation:'When using + with null, it is converted to the string "null" before concatenation.',hint:"Be careful: this may not be what you expect.",level:"intermediate",codeExample:`String s = null;
System.out.println(s + "test"); // "nulltest"`},{question:"Can you use += with StringBuilder?",shortAnswer:"No, StringBuilder doesn't support +=. Use append().",explanation:"+= is defined for String, not for StringBuilder.",hint:"Remember: StringBuilder is not a String.",level:"basic",codeExample:`StringBuilder sb = new StringBuilder();
sb += "text"; // compile error`},{question:"How to efficiently build a string with conditional parts?",shortAnswer:"Use StringBuilder and append conditionally.",explanation:"Avoid creating intermediate strings with if-else inside concatenation. Just append inside conditions.",hint:"StringBuilder allows building piece by piece.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder();
if(includeName) sb.append(name);
if(includeCity) sb.append(", ").append(city);`},{question:"What is the capacity method in StringBuilder?",shortAnswer:"Returns the current capacity (size of internal array).",explanation:"Capacity is not the length; it's how many characters can be stored without resizing.",hint:"Useful for debugging performance.",level:"advanced",codeExample:`StringBuilder sb = new StringBuilder();
System.out.println(sb.capacity()); // 16`},{question:"Is String.join() efficient for large lists?",shortAnswer:"Yes, it uses StringBuilder internally.",explanation:"String.join() is implemented with StringBuilder, so it's as efficient as manual StringBuilder code.",hint:"Prefer join() for readability.",level:"intermediate",codeExample:`// join is efficient
String result = String.join(", ", largeList);`},{question:"How to concatenate strings with a newline?",shortAnswer:'Use System.lineSeparator() or "\\n" with StringBuilder.',explanation:"Platform-independent: System.lineSeparator(). Or use %n in String.format().",hint:"Avoid hardcoding \\n unless you know the platform.",level:"basic",codeExample:`StringBuilder sb = new StringBuilder();
sb.append("line1").append(System.lineSeparator()).append("line2");`},{question:"What is the difference between concat() and + when one operand is null?",shortAnswer:'+ handles null (converts to "null"); concat() throws NPE.',explanation:`Be cautious: using + with null may produce "null" unexpectedly. Always check for null if that's not desired.`,hint:"Prefer explicit null checks.",level:"intermediate",codeExample:`String s = null;
String a = s + "text"; // "nulltext"
String b = s.concat("text"); // NPE`}],l=`// topic5_files/ConcatMethodsDemo.java\r
public class ConcatMethodsDemo {\r
    public static void main(String[] args) {\r
        String firstName = "Swadeep";\r
        String lastName = "Mukherjee";\r
        String city = "Barrackpore";\r
        \r
        // Method 1: + operator (most common)\r
        String result1 = firstName + " " + lastName + " from " + city;\r
        System.out.println("+ operator: " + result1);\r
        \r
        // Method 2: concat() method\r
        String result2 = firstName.concat(" ").concat(lastName).concat(" from ").concat(city);\r
        System.out.println("concat(): " + result2);\r
        \r
        // Method 3: StringBuilder\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(firstName).append(" ").append(lastName).append(" from ").append(city);\r
        String result3 = sb.toString();\r
        System.out.println("StringBuilder: " + result3);\r
        \r
        // Method 4: String.join (Java 8+)\r
        String result4 = String.join(" ", firstName, lastName, "from", city);\r
        System.out.println("String.join(): " + result4);\r
        \r
        // Method 5: String.format\r
        String result5 = String.format("%s %s from %s", firstName, lastName, city);\r
        System.out.println("String.format(): " + result5);\r
        \r
        // Bonus: mixing types\r
        int age = 20;\r
        String info = "Name: " + firstName + ", Age: " + age;\r
        System.out.println("Mixed types: " + info);\r
    }\r
}`,o=`// topic5_files/LoopConcatenation.java\r
public class LoopConcatenation {\r
    public static void main(String[] args) {\r
        int iterations = 10000;\r
        \r
        // BAD: Using + in a loop\r
        long start = System.nanoTime();\r
        String result = "";\r
        for (int i = 0; i < iterations; i++) {\r
            result += i; // Creates many intermediate strings\r
        }\r
        long end = System.nanoTime();\r
        System.out.println("Using + in loop: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // GOOD: Using StringBuilder\r
        start = System.nanoTime();\r
        StringBuilder sb = new StringBuilder(iterations * 5); // Pre-sized\r
        for (int i = 0; i < iterations; i++) {\r
            sb.append(i);\r
        }\r
        String sbResult = sb.toString();\r
        end = System.nanoTime();\r
        System.out.println("Using StringBuilder: " + (end - start) / 1_000_000 + " ms");\r
        \r
        // Demonstrate the difference in object creation\r
        System.out.println("\\nWith +, each iteration creates a new String object.");\r
        System.out.println("With StringBuilder, one object is reused.");\r
        \r
        // Example: building a comma-separated list\r
        String[] students = {"Swadeep", "Tuhina", "Abhronila", "Debangshu"};\r
        StringBuilder list = new StringBuilder();\r
        for (int i = 0; i < students.length; i++) {\r
            list.append(students[i]);\r
            if (i < students.length - 1) {\r
                list.append(", ");\r
            }\r
        }\r
        System.out.println("\\nStudent list: " + list.toString());\r
        \r
        // Simpler with String.join()\r
        String joined = String.join(", ", students);\r
        System.out.println("Using String.join(): " + joined);\r
    }\r
}`,d=`// topic5_files/StringBuilderVsString.java\r
public class StringBuilderVsString {\r
    public static void main(String[] args) {\r
        // Scenario: building a large string dynamically\r
        \r
        // Using String (bad)\r
        long start = System.currentTimeMillis();\r
        String str = "";\r
        for (int i = 0; i < 50000; i++) {\r
            str += "x";\r
        }\r
        long end = System.currentTimeMillis();\r
        System.out.println("String time: " + (end - start) + " ms");\r
        \r
        // Using StringBuilder (good)\r
        start = System.currentTimeMillis();\r
        StringBuilder sb = new StringBuilder(50000);\r
        for (int i = 0; i < 50000; i++) {\r
            sb.append("x");\r
        }\r
        String result = sb.toString();\r
        end = System.currentTimeMillis();\r
        System.out.println("StringBuilder time: " + (end - start) + " ms");\r
        \r
        // Demonstrating capacity growth\r
        StringBuilder sb2 = new StringBuilder(); // default capacity 16\r
        System.out.println("\\nInitial capacity: " + sb2.capacity());\r
        for (int i = 0; i < 20; i++) {\r
            sb2.append("a");\r
        }\r
        System.out.println("After 20 appends, capacity: " + sb2.capacity()); // grows\r
        \r
        // Pre-sizing to avoid resizing\r
        StringBuilder sb3 = new StringBuilder(1000);\r
        System.out.println("Pre-sized capacity: " + sb3.capacity());\r
        \r
        // StringBuilder methods\r
        StringBuilder sb4 = new StringBuilder("Hello");\r
        sb4.append(" World");\r
        sb4.insert(5, " Beautiful");\r
        System.out.println("\\nAfter insert: " + sb4);\r
        sb4.delete(5, 15);\r
        System.out.println("After delete: " + sb4);\r
        sb4.reverse();\r
        System.out.println("After reverse: " + sb4);\r
    }\r
}`,j=()=>{const n=t("bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]","border border-gray-100 dark:border-gray-700");return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 space-y-8",children:[e.jsxs("div",{className:"animate-fade-slide-up text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"String Concatenation Techniques"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed",children:"Combining strings is one of the most common operations. Java offers several ways, each with different performance characteristics. Choose the right tool for the job."})]}),e.jsxs("div",{className:n,style:{animationDelay:"0.1s"},className:"animate-fade-slide-up",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🔧"})," Four Ways to Concatenate Strings"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"1. + Operator"}),e.jsx("code",{className:"block text-sm mt-1",children:'String s = "Hello" + " " + "World";'}),e.jsx("p",{className:"text-xs mt-1",children:"Most readable, compiler optimizes simple cases."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"2. concat() Method"}),e.jsx("code",{className:"block text-sm mt-1",children:'String s = "Hello".concat(" World");'}),e.jsx("p",{className:"text-xs mt-1",children:"Only accepts String arguments, slightly more efficient than + for two strings."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"3. StringBuilder (or StringBuffer)"}),e.jsx("code",{className:"block text-sm mt-1",children:'new StringBuilder().append("Hello").append(" World").toString();'}),e.jsx("p",{className:"text-xs mt-1",children:"Best for loops or many concatenations; mutable."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"4. String.join() / String.format()"}),e.jsx("code",{className:"block text-sm mt-1",children:'String.join(", ", "apple", "banana");'}),e.jsx("p",{className:"text-xs mt-1",children:"Convenient for delimiters or formatted strings."})]})]})]}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.2s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"➕ The + Operator"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["The ",e.jsx("code",{children:"+"})," operator is the most intuitive way to concatenate strings. For simple concatenations (a few fixed strings), the Java compiler optimizes it into a single ",e.jsx("code",{children:"StringBuilder"})," under the hood."]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm",children:["// What you write:",e.jsx("br",{}),'String message = "Student: " + name + ", City: " + city;',e.jsx("br",{}),e.jsx("br",{}),"// Compiler roughly translates to:",e.jsx("br",{}),'String message = new StringBuilder().append("Student: ").append(name).append(", City: ").append(city).toString();']}),e.jsxs("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg",children:[e.jsxs("p",{className:"text-sm",children:["✅ ",e.jsx("strong",{children:"When to use:"})," 2-5 string concatenations, especially with literals. Readable and efficient enough."]}),e.jsxs("p",{className:"text-sm",children:["⚠️ ",e.jsx("strong",{children:"When NOT to use:"})," Inside loops or concatenating many strings (dozens/hundreds) – creates many intermediate objects."]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.3s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 The concat() Method"}),e.jsxs("p",{className:"leading-relaxed mb-2",children:[e.jsx("code",{children:"public String concat(String str)"})," – returns a new string that is the concatenation of this string and the argument."]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-sm",children:[e.jsxs("li",{children:["Only works with ",e.jsx("code",{children:"String"})," arguments (unlike + which handles any type)."]}),e.jsxs("li",{children:["Slightly more efficient than ",e.jsx("code",{children:"+"})," for exactly two strings because it avoids StringBuilder overhead."]}),e.jsx("li",{children:"If the argument is empty, returns the original string (no new object)."})]}),e.jsx("code",{className:"block mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm",children:'String full = "Swadeep".concat(" from ").concat("Barrackpore");'}),e.jsx("div",{className:"mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded",children:e.jsxs("p",{className:"text-xs",children:["💡 Most developers prefer ",e.jsx("code",{children:"+"})," for readability; ",e.jsx("code",{children:"concat()"})," is rarely used except in performance-sensitive spots."]})})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.4s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🏗️ StringBuilder – Mutable Concatenation"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:[e.jsx("code",{children:"StringBuilder"})," (and its thread-safe cousin ",e.jsx("code",{children:"StringBuffer"}),") is a mutable sequence of characters. It's the go-to solution for building strings dynamically, especially in loops."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold",children:"Key Methods:"}),e.jsxs("ul",{className:"list-disc pl-5 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"append(String s)"})," – adds at the end"]}),e.jsxs("li",{children:[e.jsx("code",{children:"insert(int offset, String s)"})," – inserts at position"]}),e.jsx("li",{children:e.jsx("code",{children:"delete(int start, int end)"})}),e.jsx("li",{children:e.jsx("code",{children:"reverse()"})}),e.jsxs("li",{children:[e.jsx("code",{children:"toString()"})," – converts to immutable String"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold",children:"Example:"}),e.jsx("code",{className:"block bg-gray-100 dark:bg-gray-700 p-2 rounded text-xs whitespace-pre",children:`StringBuilder sb = new StringBuilder();
                sb.append("Students: ");
                for (String name : names) {
                    sb.append(name).append(", ");
                }
                String result = sb.toString();`})]})]}),e.jsx("div",{className:"mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["🎯 ",e.jsx("strong",{children:"Pro Tip:"})," Pre-size StringBuilder if you know the final length: ",e.jsx("code",{children:"new StringBuilder(capacity)"})," to avoid internal array resizing."]})})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.5s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 Visual: Performance in a Loop"}),e.jsx("div",{className:"flex justify-center py-4",children:e.jsx(c,{})}),e.jsxs("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:["Using ",e.jsx("code",{children:"+"})," in a loop creates O(n²) intermediate objects; StringBuilder is O(n)."]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.6s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"💻 Live Code Demonstrations"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:l,title:"ConcatMethodsDemo.java",highlightLines:[]}),e.jsx(i,{fileModule:o,title:"LoopConcatenation.java",highlightLines:[]}),e.jsx(i,{fileModule:d,title:"StringBuilderVsString.java",highlightLines:[]})]}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:["🧠 ",e.jsx("strong",{children:"Try changing this:"})," Increase the loop count to 100,000 and observe the massive time difference between ",e.jsx("code",{children:"+"})," and ",e.jsx("code",{children:"StringBuilder"}),"."]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 Convenience Methods: join() and format()"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-green-600",children:"String.join()"}),e.jsx("code",{className:"block text-sm",children:"String.join(delimiter, elements...)"}),e.jsx("p",{className:"text-sm mt-1",children:"Perfect for CSV, list formatting."}),e.jsxs("code",{className:"block mt-1 bg-gray-100 dark:bg-gray-700 p-1 rounded text-xs",children:['String csv = String.join(", ", "Swadeep", "Tuhina", "Abhronila");',e.jsx("br",{}),'// "Swadeep, Tuhina, Abhronila"']})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-purple-600",children:"String.format()"}),e.jsx("code",{className:"block text-sm",children:"String.format(format, args...)"}),e.jsx("p",{className:"text-sm mt-1",children:"C-style formatting, great for logs and messages."}),e.jsxs("code",{className:"block mt-1 bg-gray-100 dark:bg-gray-700 p-1 rounded text-xs",children:['String msg = String.format("Student %s from %s", "Debangshu", "Shyamnagar");',e.jsx("br",{}),'// "Student Debangshu from Shyamnagar"']})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t(n,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"⚠️ Common Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using + in loops"})," – Creates thousands of intermediate strings, kills performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to call toString() on StringBuilder"})," – Using StringBuilder where a String is expected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using StringBuffer unnecessarily"})," – It's synchronized (slower); use StringBuilder unless you need thread-safety."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not pre-sizing StringBuilder"})," – Causes multiple internal array copies."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using concat() with null"})," – Throws NullPointerException."]})]})]}),e.jsxs("div",{className:t(n,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use + for 2-5 fixed strings"})," – Readable and compiler-optimized."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use StringBuilder for loops or many appends"})," – Always."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pre-size StringBuilder when you know capacity"})," – e.g., ",e.jsx("code",{children:"new StringBuilder(1000)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use String.join() for delimited lists"})," – Cleaner than manual loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use String.format() for complex messages"})," – Improves readability."]})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.9s"},children:e.jsxs("div",{className:n,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📝 Student Checklist – Concatenation"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5",children:[e.jsx("li",{children:"✅ I know four ways to concatenate strings: +, concat(), StringBuilder, join()."}),e.jsx("li",{children:"✅ I understand that + creates new String objects (except when optimized)."}),e.jsx("li",{children:"✅ I never use + inside loops – I use StringBuilder instead."}),e.jsx("li",{children:"✅ I can choose the right method based on context."}),e.jsx("li",{children:"✅ I know StringBuilder is mutable and more efficient for many concatenations."}),e.jsx("li",{children:"✅ I can use String.join() to create comma-separated lists."})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"1.0s"},children:e.jsx(r,{title:"String Concatenation – FAQs",questions:a})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"1.1s"},children:e.jsx(s,{note:"Demonstrate the performance difference with a loop of 10,000 concatenations using + vs StringBuilder. Students will be shocked by the time difference. Emphasize that + is fine for a few strings but scales horribly. Show them how to profile with System.nanoTime(). Also explain that the compiler optimizes simple + expressions, but not loops."})})]})]})},c=()=>e.jsx("div",{className:"inline-block p-2 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg",children:e.jsxs("svg",{width:"550",height:"220",viewBox:"0 0 550 220",xmlns:"http://www.w3.org/2000/svg",className:"max-w-full",children:[e.jsx("text",{x:"275",y:"25",textAnchor:"middle",fontSize:"13",fontWeight:"bold",fill:"#374151",children:"Time to concatenate 10,000 strings"}),e.jsx("rect",{x:"60",y:"150",width:"120",height:"40",rx:"4",fill:"#EF4444"}),e.jsx("text",{x:"120",y:"135",textAnchor:"middle",fontSize:"11",fill:"#EF4444",fontWeight:"bold",children:"~500-1000 ms"}),e.jsx("text",{x:"120",y:"175",textAnchor:"middle",fontSize:"12",fill:"white",children:"+ in loop"}),e.jsx("rect",{x:"260",y:"180",width:"120",height:"10",rx:"4",fill:"#10B981"}),e.jsx("text",{x:"320",y:"165",textAnchor:"middle",fontSize:"11",fill:"#10B981",fontWeight:"bold",children:"~1-2 ms"}),e.jsx("text",{x:"320",y:"205",textAnchor:"middle",fontSize:"12",fill:"#374151",children:"StringBuilder"}),e.jsx("text",{x:"50",y:"220",fontSize:"10",fill:"#6B7280",children:"Faster →"}),e.jsx("text",{x:"500",y:"220",fontSize:"10",fill:"#6B7280",children:"Slower →"}),e.jsx("line",{x1:"60",y1:"195",x2:"500",y2:"195",stroke:"#D1D5DB",strokeWidth:"1"})]})});export{j as default};

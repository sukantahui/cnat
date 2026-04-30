import{j as e}from"./index-M13epWmp.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as n}from"./JavaFileLoader-IXnK6GM0.js";import{F as s}from"./FAQTemplate-D0r5Eyku.js";import{T as a}from"./TeacherSukantaHui-D1l_wi-n.js";import"./JavaCodeBlock-BtexpujI.js";import"./prism-__2n-qyh.js";import"./browser-TC9_T_od.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-D8pg7UcO.js";const i=[{question:"How do you reverse a string in Java?",shortAnswer:"Using StringBuilder's reverse() method: new StringBuilder(str).reverse().toString()",explanation:"StringBuilder has a built-in reverse() method that reverses the character sequence efficiently.",hint:"Simplest and fastest way.",level:"basic",codeExample:'String reversed = new StringBuilder("hello").reverse().toString(); // "olleh"'},{question:"How to reverse a string without using StringBuilder?",shortAnswer:"Convert to char array and swap characters from both ends.",explanation:"Use toCharArray(), then loop from start to end swapping characters. Then create a new String from the array.",hint:"Two-pointer technique.",level:"intermediate",codeExample:`char[] arr = str.toCharArray();
for(int i=0,j=arr.length-1; i<j; i++,j--) {
    char t=arr[i]; arr[i]=arr[j]; arr[j]=t;
}
return new String(arr);`},{question:"What is a palindrome?",shortAnswer:"A word, phrase, or sequence that reads the same forwards and backwards (e.g., 'radar', 'level').",explanation:"Palindromes ignore case, spaces, and punctuation in real-world checks. Examples: 'A man, a plan, a canal: Panama'.",hint:"Compare first and last characters moving inward.",level:"basic",codeExample:"boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString());"},{question:"How to check if a string is a palindrome ignoring case and non-alphanumeric?",shortAnswer:"Normalize the string: remove non-alphanumeric, convert to lowercase, then compare with reverse.",explanation:'Use replaceAll("[^a-zA-Z0-9]", "") to keep only letters/digits, then toLowerCase().',hint:"Clean the string first.",level:"intermediate",codeExample:`String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
return clean.equals(new StringBuilder(clean).reverse().toString());`},{question:"How to count words in a string?",shortAnswer:'Use split("\\\\s+") on trimmed string, then count array length.',explanation:'trim() removes leading/trailing spaces; split("\\\\s+") splits on one or more whitespace characters.',hint:"Handle empty string specially.",level:"basic",codeExample:`if(str == null || str.trim().isEmpty()) return 0;
return str.trim().split("\\\\s+").length;`},{question:'Why not use split(" ") for word count?',shortAnswer:"It fails with multiple spaces, tabs, or newlines, creating empty strings in the array.",explanation:'split(" ") only splits on single space. For robust word counting, use regex \\\\s+.',hint:"\\\\s matches any whitespace.",level:"intermediate",codeExample:'"Hello  world".split(" ") → ["Hello", "", "world"] (incorrect count)'},{question:"How to count frequency of each character in a string?",shortAnswer:"Use a HashMap<Character, Integer> and iterate over characters.",explanation:"For each char, get current count, increment, and put back. Or use getOrDefault.",hint:"Alternatively, use int[256] for ASCII only.",level:"intermediate",codeExample:`Map<Character, Integer> map = new HashMap<>();
for(char c : str.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}`},{question:"What is the time complexity of reversing a string with StringBuilder?",shortAnswer:"O(n) where n is the length of the string.",explanation:"reverse() iterates over half the characters, swapping them.",hint:"Linear time, constant extra space.",level:"intermediate",codeExample:"// O(n) time, O(n) space for the new string"},{question:"How to find the first non-repeated character in a string?",shortAnswer:"Build frequency map, then iterate again to find first character with count 1.",explanation:"First pass: count frequencies. Second pass: check each character's frequency.",hint:"LinkedHashMap preserves insertion order.",level:"advanced",codeExample:`Map<Character, Integer> freq = new LinkedHashMap<>();
for(char c : s.toCharArray()) freq.put(c, freq.getOrDefault(c,0)+1);
for(Map.Entry<Character,Integer> e : freq.entrySet()) if(e.getValue()==1) return e.getKey();`},{question:"How to check if two strings are anagrams?",shortAnswer:"Sort both strings and compare, or count character frequencies and compare maps.",explanation:"Anagrams have same characters with same counts. Sort: O(n log n). Frequency map: O(n).",hint:"Ignore case and spaces first.",level:"intermediate",codeExample:`char[] a = s1.toCharArray(); char[] b = s2.toCharArray();
Arrays.sort(a); Arrays.sort(b);
return Arrays.equals(a, b);`},{question:"How to remove duplicate characters from a string?",shortAnswer:"Use LinkedHashSet to preserve order, then join.",explanation:"Add each character to a Set; duplicates are automatically ignored. LinkedHashSet maintains insertion order.",hint:"Alternatively, use StringBuilder and track seen characters.",level:"intermediate",codeExample:`StringBuilder sb = new StringBuilder();
Set<Character> set = new LinkedHashSet<>();
for(char c : str.toCharArray()) set.add(c);
for(char c : set) sb.append(c);
return sb.toString();`},{question:"How to check if a string contains only digits?",shortAnswer:'Use str.matches("\\\\d+") or loop with Character.isDigit().',explanation:"Regular expression \\\\d+ matches one or more digits. For empty string, handle separately.",hint:"Also str.chars().allMatch(Character::isDigit).",level:"basic",codeExample:'boolean isNumeric = str != null && str.matches("\\\\d+");'},{question:"How to capitalize the first letter of each word?",shortAnswer:"Split by spaces, capitalize first char of each word, then join.",explanation:"Use Character.toUpperCase(word.charAt(0)) + word.substring(1).toLowerCase() for rest.",hint:"Handle single-letter words and edge cases.",level:"intermediate",codeExample:`String[] words = str.split("\\\\s+");
StringBuilder sb = new StringBuilder();
for(String w : words) {
    sb.append(Character.toUpperCase(w.charAt(0))).append(w.substring(1).toLowerCase()).append(" ");
}
return sb.toString().trim();`},{question:"What is the most efficient way to reverse a string in Java?",shortAnswer:"Using StringBuilder.reverse() – it's optimized and uses native code in some JVMs.",explanation:"Manual char array swapping is also O(n) but more code. StringBuilder is preferred for readability and performance.",hint:"Let the library do the work.",level:"basic",codeExample:"// Best: new StringBuilder(str).reverse().toString()"},{question:"How to find all substrings of a string?",shortAnswer:"Use nested loops: for start from 0 to n, for end from start+1 to n, substring(start, end).",explanation:"Number of substrings = n*(n+1)/2. Complexity O(n²).",hint:"Only for small strings.",level:"advanced",codeExample:`for(int i=0; i<str.length(); i++) {
    for(int j=i+1; j<=str.length(); j++) {
        System.out.println(str.substring(i, j));
    }
}`},{question:"How to check if a string is a rotation of another string?",shortAnswer:"Check if (a.length() == b.length()) && (a + a).contains(b).",explanation:"If b is a rotation of a, then b will be a substring of a concatenated with itself.",hint:"Works for all rotations.",level:"advanced",codeExample:"return (a.length() == b.length()) && (a + a).contains(b);"},{question:"How to count vowels and consonants in a string?",shortAnswer:"Loop through characters and check against vowel set.",explanation:"Define vowels 'a','e','i','o','u' (both cases). Count vowels; consonants are letters that are not vowels.",hint:"Ignore non-letters.",level:"basic",codeExample:`int vowels = 0, consonants = 0;
String lower = str.toLowerCase();
for(char c : lower.toCharArray()) {
    if(c>='a' && c<='z') {
        if("aeiou".indexOf(c) != -1) vowels++;
        else consonants++;
    }
}`},{question:"How to find the longest palindrome substring?",shortAnswer:"Expand around center for each character and between characters.",explanation:"Classic O(n²) algorithm. For each center (2n-1 possibilities), expand outward while characters match.",hint:"Manacher's algorithm gives O(n) but is complex.",level:"expert",codeExample:"// Expand around center technique"},{question:"How to reverse words in a sentence (order of words reversed, not characters)?",shortAnswer:"Split by spaces, reverse the array of words, then join.",explanation:"Example: 'Hello world' → ['Hello','world'] → reverse → ['world','Hello'] → join with space.",hint:'Use String.join(" ", reversedArray).',level:"intermediate",codeExample:`String[] words = str.split(" ");
Collections.reverse(Arrays.asList(words));
return String.join(" ", words);`},{question:"How to find the most frequent character in a string?",shortAnswer:"Build frequency map, track max count and corresponding character.",explanation:"Iterate map entries to find maximum value.",hint:"If tie, return first occurring.",level:"intermediate",codeExample:`Map<Character, Integer> freq = new HashMap<>();
char most = '\\0';
int max = 0;
for(char c : str.toCharArray()) {
    int count = freq.getOrDefault(c,0)+1;
    freq.put(c, count);
    if(count > max) { max = count; most = c; }
}
return most;`},{question:"How to remove all whitespace from a string?",shortAnswer:'Use str.replaceAll("\\\\s+", "") or str.replace(" ", "") if only spaces.',explanation:"replaceAll with regex \\\\s removes all whitespace (spaces, tabs, newlines).",hint:'Also str = str.replace(" ", ""); for spaces only.',level:"basic",codeExample:'String noSpaces = str.replaceAll("\\\\s+", "");'},{question:"What is the difference between reversing a string and reversing words?",shortAnswer:"Reverse string flips character order; reverse words flips word order while preserving characters within words.",explanation:"Example: 'Hello World' reversed string: 'dlroW olleH'; reversed words: 'World Hello'.",hint:"Different problems, different solutions.",level:"basic",codeExample:`// reverse string: new StringBuilder(s).reverse()
// reverse words: split, reverse array, join`},{question:"How to check if a string is a valid number (integer)?",shortAnswer:"Try parsing with Integer.parseInt() and catch NumberFormatException.",explanation:'Also use regex: str.matches("-?\\\\d+") for optional sign and digits.',hint:"Be careful with large numbers.",level:"basic",codeExample:"try { Integer.parseInt(str); return true; } catch(NumberFormatException e) { return false; }"},{question:"How to find the first repeated character in a string?",shortAnswer:"Use a Set, add characters, first one that already exists is the answer.",explanation:"Iterate, if char already in set, return it; else add to set.",hint:"O(n) time, O(n) space.",level:"intermediate",codeExample:`Set<Character> seen = new HashSet<>();
for(char c : str.toCharArray()) {
    if(seen.contains(c)) return c;
    seen.add(c);
}
return null;`},{question:"How to convert a string to a character array and back?",shortAnswer:"Use toCharArray() to get array, new String(array) to convert back.",explanation:"This is common for mutable character manipulations.",hint:"Remember arrays are mutable.",level:"basic",codeExample:`char[] chars = str.toCharArray();
// modify chars
String newStr = new String(chars);`},{question:"How to check if two strings are permutations of each other?",shortAnswer:"Same as anagram: sort and compare or use frequency map.",explanation:"Permutation means same characters with same frequencies.",hint:"Length must be equal first.",level:"intermediate",codeExample:`if(s1.length() != s2.length()) return false;
int[] count = new int[256];
for(char c : s1.toCharArray()) count[c]++;
for(char c : s2.toCharArray()) if(--count[c] < 0) return false;
return true;`},{question:"How to find the longest common prefix among an array of strings?",shortAnswer:"Compare characters of first string with others, stop at first mismatch.",explanation:"Take first string as reference; for each index, check all strings have same char; if not, return prefix up to previous index.",hint:"Edge case: empty array returns empty string.",level:"advanced",codeExample:`if(strs.length == 0) return "";
String prefix = strs[0];
for(int i=1; i<strs.length; i++) {
    while(strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length()-1);
        if(prefix.isEmpty()) return "";
    }
}
return prefix;`},{question:"How to generate all permutations of a string?",shortAnswer:"Use recursion: fix first character and permute the rest, or use backtracking.",explanation:"Number of permutations is n! (factorial), so only for small strings.",hint:"Consider using Heap's algorithm.",level:"expert",codeExample:`// Recursive backtracking
public void permute(String str, int l, int r) {
    if(l == r) System.out.println(str);
    else for(int i=l; i<=r; i++) {
        str = swap(str, l, i);
        permute(str, l+1, r);
        str = swap(str, l, i);
    }
}`},{question:"How to count the number of times a substring appears in a string?",shortAnswer:"Use indexOf in a loop: int count=0, index=0; while((index=str.indexOf(sub, index))!=-1) { count++; index+=sub.length(); }",explanation:"Handles non-overlapping occurrences. For overlapping, increment by 1 instead of sub.length().",hint:"indexOf with fromIndex.",level:"intermediate",codeExample:`int count = 0, idx = 0;
while((idx = str.indexOf(sub, idx)) != -1) {
    count++;
    idx += sub.length();
}`},{question:"How to convert a string to title case (first letter of each word uppercase, rest lowercase)?",shortAnswer:"Split, capitalize first char, lowercase rest, then join.",explanation:"Use Character.toUpperCase() and Character.toLowerCase() or substring.",hint:"Watch for single-character words.",level:"intermediate",codeExample:`String[] words = str.split("\\\\s+");
StringBuilder sb = new StringBuilder();
for(String w : words) {
    if(w.length() > 0) {
        sb.append(Character.toUpperCase(w.charAt(0)));
        if(w.length() > 1) sb.append(w.substring(1).toLowerCase());
    }
    sb.append(" ");
}
return sb.toString().trim();`}],l=`// topic6_files/ReverseStringDemo.java\r
public class ReverseStringDemo {\r
    public static void main(String[] args) {\r
        String original = "Swadeep";\r
        \r
        // Method 1: StringBuilder\r
        String reversed1 = new StringBuilder(original).reverse().toString();\r
        System.out.println("Using StringBuilder: " + reversed1);\r
        \r
        // Method 2: char array\r
        char[] chars = original.toCharArray();\r
        for (int i = 0, j = chars.length - 1; i < j; i++, j--) {\r
            char temp = chars[i];\r
            chars[i] = chars[j];\r
            chars[j] = temp;\r
        }\r
        String reversed2 = new String(chars);\r
        System.out.println("Using char array: " + reversed2);\r
        \r
        // Method 3: recursion (for learning)\r
        System.out.println("Using recursion: " + reverseRecursive(original));\r
        \r
        // Edge cases\r
        System.out.println("Empty string: '" + reverseString("") + "'");\r
        System.out.println("Null string: " + reverseString(null));\r
        System.out.println("Single char: '" + reverseString("A") + "'");\r
    }\r
    \r
    public static String reverseString(String str) {\r
        if (str == null) return null;\r
        return new StringBuilder(str).reverse().toString();\r
    }\r
    \r
    public static String reverseRecursive(String str) {\r
        if (str == null || str.length() <= 1) return str;\r
        return reverseRecursive(str.substring(1)) + str.charAt(0);\r
    }\r
}`,o=`// topic6_files/PalindromeDemo.java\r
public class PalindromeDemo {\r
    public static void main(String[] args) {\r
        String[] testCases = {\r
            "radar",\r
            "level",\r
            "A man, a plan, a canal: Panama",\r
            "race a car",\r
            "hello",\r
            "12321",\r
            ""\r
        };\r
        \r
        for (String test : testCases) {\r
            System.out.println("\\"" + test + "\\" is palindrome? " + isPalindrome(test));\r
            System.out.println("   (ignoring case & non-alphanumeric): " + isPalindromeNormalized(test));\r
        }\r
        \r
        // Two-pointer technique demonstration\r
        String str = "madam";\r
        System.out.println("\\nTwo-pointer check on \\"" + str + "\\": " + isPalindromeTwoPointer(str));\r
    }\r
    \r
    // Simple: compare with reverse\r
    public static boolean isPalindrome(String str) {\r
        if (str == null) return false;\r
        String reversed = new StringBuilder(str).reverse().toString();\r
        return str.equals(reversed);\r
    }\r
    \r
    // Normalized: ignore case and non-letters/digits\r
    public static boolean isPalindromeNormalized(String str) {\r
        if (str == null) return false;\r
        String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();\r
        return clean.equals(new StringBuilder(clean).reverse().toString());\r
    }\r
    \r
    // Two-pointer (in-place, no extra string for reversed)\r
    public static boolean isPalindromeTwoPointer(String str) {\r
        if (str == null) return false;\r
        int left = 0, right = str.length() - 1;\r
        while (left < right) {\r
            if (str.charAt(left) != str.charAt(right)) {\r
                return false;\r
            }\r
            left++;\r
            right--;\r
        }\r
        return true;\r
    }\r
}`,c=`// topic6_files/WordCountDemo.java\r
public class WordCountDemo {\r
    public static void main(String[] args) {\r
        String[] sentences = {\r
            "The quick brown fox jumps over the lazy dog",\r
            "  Hello   world  ",\r
            "One",\r
            "",\r
            "   ",\r
            "Java is fun, isn't it?",\r
            null\r
        };\r
        \r
        for (String sentence : sentences) {\r
            System.out.println("Words in \\"" + sentence + "\\": " + countWords(sentence));\r
        }\r
        \r
        // More robust: handling punctuation as word separators\r
        String text = "Hello, world! How are you?";\r
        System.out.println("\\nOriginal: \\"" + text + "\\"");\r
        System.out.println("Word count (split on whitespace): " + countWords(text));\r
        System.out.println("Word count (split on non-letters): " + countWordsAdvanced(text));\r
    }\r
    \r
    // Basic: split on whitespace\r
    public static int countWords(String str) {\r
        if (str == null || str.trim().isEmpty()) return 0;\r
        return str.trim().split("\\\\s+").length;\r
    }\r
    \r
    // Advanced: split on any non-letter/digit (punctuation as delimiters)\r
    public static int countWordsAdvanced(String str) {\r
        if (str == null || str.trim().isEmpty()) return 0;\r
        String[] words = str.split("[^a-zA-Z0-9']+"); // keeps apostrophes\r
        int count = 0;\r
        for (String w : words) {\r
            if (!w.isEmpty()) count++;\r
        }\r
        return count;\r
    }\r
}`,d=`// topic6_files/CharFrequencyDemo.java\r
import java.util.HashMap;\r
import java.util.Map;\r
import java.util.LinkedHashMap;\r
import java.util.stream.Collectors;\r
\r
public class CharFrequencyDemo {\r
    public static void main(String[] args) {\r
        String text = "Swadeep Mukherjee";\r
        \r
        System.out.println("Character frequency for: " + text);\r
        Map<Character, Integer> freq = getFrequency(text);\r
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {\r
            System.out.println("'" + entry.getKey() + "' : " + entry.getValue());\r
        }\r
        \r
        // Using int array for ASCII (more efficient)\r
        System.out.println("\\nUsing int[] for ASCII:");\r
        int[] asciiFreq = getFrequencyAscii(text);\r
        for (int i = 0; i < asciiFreq.length; i++) {\r
            if (asciiFreq[i] > 0) {\r
                System.out.println("'" + (char) i + "' : " + asciiFreq[i]);\r
            }\r
        }\r
        \r
        // Java 8 streams\r
        System.out.println("\\nUsing Java 8 streams:");\r
        Map<Character, Long> streamFreq = text.chars()\r
                .mapToObj(c -> (char) c)\r
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));\r
        streamFreq.forEach((k, v) -> System.out.println("'" + k + "' : " + v));\r
        \r
        // Find most frequent character\r
        char mostFrequent = getMostFrequentChar(text);\r
        System.out.println("\\nMost frequent character: '" + mostFrequent + "'");\r
    }\r
    \r
    // Using HashMap (supports all Unicode)\r
    public static Map<Character, Integer> getFrequency(String str) {\r
        if (str == null) return new HashMap<>();\r
        Map<Character, Integer> freq = new LinkedHashMap<>(); // LinkedHashMap preserves order\r
        for (char c : str.toCharArray()) {\r
            freq.put(c, freq.getOrDefault(c, 0) + 1);\r
        }\r
        return freq;\r
    }\r
    \r
    // Using int[] for ASCII (0-255) - faster\r
    public static int[] getFrequencyAscii(String str) {\r
        if (str == null) return new int[256];\r
        int[] freq = new int[256];\r
        for (char c : str.toCharArray()) {\r
            if (c < 256) freq[c]++;\r
        }\r
        return freq;\r
    }\r
    \r
    // Find most frequent character\r
    public static char getMostFrequentChar(String str) {\r
        if (str == null || str.isEmpty()) return '\\0';\r
        Map<Character, Integer> freq = getFrequency(str);\r
        char maxChar = '\\0';\r
        int maxCount = 0;\r
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {\r
            if (entry.getValue() > maxCount) {\r
                maxCount = entry.getValue();\r
                maxChar = entry.getKey();\r
            }\r
        }\r
        return maxChar;\r
    }\r
}`,b=()=>{const r=t("bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]","border border-gray-100 dark:border-gray-700");return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 space-y-8",children:[e.jsxs("div",{className:"animate-fade-slide-up text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"String Manipulation Programs"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed",children:"Applying String methods to solve real problems: reversing text, checking palindromes, counting words, and analyzing character frequency."})]}),e.jsxs("div",{className:r,style:{animationDelay:"0.1s"},className:"animate-fade-slide-up",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"💡"})," Why These Programs Matter"]}),e.jsx("p",{className:"leading-relaxed mb-3",children:"These classic string manipulation problems appear frequently in coding interviews, homework, and real-world applications:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"🔄 Reverse String"}),e.jsx("p",{className:"text-sm",children:"Used in text editors, undo features, encryption, and data transformation."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"🔄 Palindrome Checker"}),e.jsx("p",{className:"text-sm",children:"Used in DNA sequence analysis, word games, and data validation."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"📊 Word Count"}),e.jsx("p",{className:"text-sm",children:"Used in text editors, word processors, SEO tools, and document analysis."})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("h3",{className:"font-bold",children:"🔢 Character Frequency"}),e.jsx("p",{className:"text-sm",children:"Used in cryptography, data compression, and text analysis (e.g., anagrams)."})]})]})]}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.2s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 Visual: Common String Manipulation Flow"}),e.jsx("div",{className:"flex justify-center py-4",children:e.jsx(h,{})}),e.jsxs("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:["Most string manipulation follows a pattern: input → process → output, using methods like ",e.jsx("code",{children:"charAt()"}),", ",e.jsx("code",{children:"substring()"}),", ",e.jsx("code",{children:"toCharArray()"}),"."]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.3s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔄 1. Reverse a String"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"Reversing a string is a fundamental operation. There are multiple approaches:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using StringBuilder.reverse()"})," – Simplest and most efficient."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using char array"})," – Manual loop, good for learning."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using recursion"})," – Academic exercise, not for production."]})]}),e.jsx("div",{className:"mt-3 bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-sm whitespace-pre",children:`// Method 1: StringBuilder
                String reversed = new StringBuilder(original).reverse().toString();

                // Method 2: char array
                char[] chars = original.toCharArray();
                for(int i=0, j=chars.length-1; i<j; i++, j--) {
                    char temp = chars[i]; chars[i] = chars[j]; chars[j] = temp;
                }
                String reversed2 = new String(chars);`})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.4s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔄 2. Palindrome Checker"}),e.jsx("p",{className:"leading-relaxed mb-3",children:'A palindrome reads the same forwards and backwards (e.g., "radar", "level", "A man, a plan, a canal: Panama" ignoring case and non-letters).'}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simple check"})," – Compare string with its reverse."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Two-pointer technique"})," – Compare first and last characters moving inward."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Alphanumeric only"})," – Ignore spaces, punctuation, and case for real palindromes."]})]}),e.jsx("code",{className:"block mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm",children:"boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString());"}),e.jsx("div",{className:"mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded",children:e.jsxs("p",{className:"text-xs",children:["💡 For case-insensitive alphanumeric: use ",e.jsx("code",{children:'replaceAll("[^a-zA-Z0-9]", "").toLowerCase()'})," first."]})})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.5s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📊 3. Count Words in a String"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"Word counting is common in text processing. Edge cases include multiple spaces, leading/trailing spaces, punctuation."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using split()"})," – ",e.jsx("code",{children:'str.trim().split("\\\\s+")'})," handles multiple spaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Manual loop"})," – Count transitions from non-space to space."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handling punctuation"})," – Replace non-letter/digit with spaces before splitting."]})]}),e.jsxs("code",{className:"block mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm",children:['String[] words = str.trim().split("\\\\s+");',e.jsx("br",{}),"int wordCount = (str.trim().isEmpty()) ? 0 : words.length;"]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.6s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔢 4. Frequency of Each Character"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"Count how many times each character appears. Useful for anagrams, text analysis, and cryptography."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using HashMap"})," – Stores character → count."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using int[256] array"})," – For ASCII characters (more efficient)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using Java 8 streams"})," – Functional style with"," ",e.jsx("code",{children:"Collectors.groupingBy"}),"."]})]}),e.jsx("code",{className:"block mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm whitespace-pre",children:`Map<Character, Integer> freq = new HashMap<>();
              for(char c : str.toCharArray()) {
                  freq.put(c, freq.getOrDefault(c, 0) + 1);
              }`})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"💻 Live Code Demonstrations"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:l,title:"ReverseStringDemo.java",highlightLines:[]}),e.jsx(n,{fileModule:o,title:"PalindromeDemo.java",highlightLines:[]}),e.jsx(n,{fileModule:c,title:"WordCountDemo.java",highlightLines:[]}),e.jsx(n,{fileModule:d,title:"CharFrequencyDemo.java",highlightLines:[]})]}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:["🧠 ",e.jsx("strong",{children:"Try changing this:"})," Modify the input strings and observe how each algorithm handles edge cases like empty strings, spaces, punctuation."]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t(r,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"🎯 Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reverse:"})," Use ",e.jsx("code",{children:"new StringBuilder(s).reverse()"})," – don't reinvent the wheel."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Palindrome:"})," Two-pointer technique avoids creating new strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Word count:"})," ",e.jsx("code",{children:'split("\\\\s+")'})," handles multiple spaces, but also consider punctuation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Frequency:"})," For ASCII, ",e.jsx("code",{children:"int[256]"})," is faster than HashMap."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Edge cases:"})," Always test with empty, null, single character, and all-same-character strings."]})]})]}),e.jsxs("div",{className:t(r,"h-full"),children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"⚠️ Common Mistakes"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to trim before word count"})," – Leading/trailing spaces cause empty words."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:'split(" ")'})," instead of regex"]})," – Doesn't handle multiple spaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Palindrome: not ignoring case or non-letters"}),' – "A man, a plan, a canal: Panama" is a palindrome.']}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Reversing with ",e.jsx("code",{children:"charAt"})," in loop"]})," – Inefficient; use ",e.jsx("code",{children:"toCharArray()"})," or StringBuilder."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Null checks"})," – All these programs should handle null input gracefully."]})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"0.9s"},children:e.jsxs("div",{className:r,children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"✅ Best Practices & Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-green-600 dark:text-green-400 mb-2",children:"Professional Habits"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm",children:[e.jsx("li",{children:"Write helper methods for each manipulation (reusable)."}),e.jsx("li",{children:"Handle null and empty inputs explicitly."}),e.jsx("li",{children:"Use StringBuilder for performance-critical manipulations."}),e.jsxs("li",{children:["Prefer built-in methods (",e.jsx("code",{children:"reverse()"}),", ",e.jsx("code",{children:"split()"}),") over manual loops unless teaching."]}),e.jsx("li",{children:"Add comments explaining edge case handling."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Student Checklist"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm",children:[e.jsx("li",{children:"✅ I can reverse a string using StringBuilder and manually."}),e.jsx("li",{children:"✅ I can check if a string is a palindrome (including case-insensitive)."}),e.jsx("li",{children:"✅ I can count words correctly handling multiple spaces."}),e.jsx("li",{children:"✅ I can compute character frequency using HashMap."}),e.jsx("li",{children:"✅ I test my programs with edge cases (empty, null, single char)."})]})]})]})]})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"1.0s"},children:e.jsx(s,{title:"String Manipulation Programs – FAQs",questions:i})}),e.jsx("div",{className:"animate-fade-slide-up",style:{animationDelay:"1.1s"},children:e.jsx(a,{note:"These problems are excellent for developing algorithmic thinking. Start with reverse (easy), then palindrome (slightly harder with normalization), then word count (edge cases), and finally frequency (data structures). Have students implement each in at least two ways. Emphasize testing with weird inputs: empty string, all spaces, punctuation. Relate to real-world: counting words in an essay, checking palindromes in DNA, frequency analysis in cryptograms."})})]})]})},h=()=>e.jsx("div",{className:"inline-block p-2 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg",children:e.jsxs("svg",{width:"550",height:"180",viewBox:"0 0 550 180",xmlns:"http://www.w3.org/2000/svg",className:"max-w-full",children:[e.jsx("rect",{x:"30",y:"20",width:"100",height:"40",rx:"6",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"44",textAnchor:"middle",fontSize:"12",fill:"#1E3A8A",children:"Input String"}),e.jsx("path",{d:"M130 40 L170 40",stroke:"#F59E0B",strokeWidth:"2",markerEnd:"url(#flowArrow)"}),e.jsx("rect",{x:"175",y:"15",width:"100",height:"50",rx:"6",fill:"#FEF3C7",stroke:"#F59E0B",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"35",textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"#92400E",children:"Process"}),e.jsx("text",{x:"225",y:"52",textAnchor:"middle",fontSize:"10",fill:"#92400E",children:"(loop / split / map)"}),e.jsx("path",{d:"M275 40 L315 40",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#flowArrowGreen)"}),e.jsx("rect",{x:"320",y:"20",width:"100",height:"40",rx:"6",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"370",y:"44",textAnchor:"middle",fontSize:"12",fill:"#064E3B",children:"Output"}),e.jsx("text",{x:"225",y:"100",textAnchor:"middle",fontSize:"11",fill:"#6B7280",children:"Examples:"}),e.jsx("text",{x:"225",y:"118",textAnchor:"middle",fontSize:"10",fill:"#6B7280",children:'Reverse → "olleH"'}),e.jsx("text",{x:"225",y:"136",textAnchor:"middle",fontSize:"10",fill:"#6B7280",children:"Palindrome → true/false"}),e.jsx("text",{x:"225",y:"154",textAnchor:"middle",fontSize:"10",fill:"#6B7280",children:"Word Count → 5"}),e.jsxs("text",{x:"225",y:"172",textAnchor:"middle",fontSize:"10",fill:"#6B7280",children:["  Frequency → ","{a:2, b:1}"]}),e.jsxs("defs",{children:[e.jsx("marker",{id:"flowArrow",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#F59E0B"})}),e.jsx("marker",{id:"flowArrowGreen",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#10B981"})})]})]})});export{b as default};

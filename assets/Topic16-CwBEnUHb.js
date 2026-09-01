import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * File: ScannerMethodsDeepDiveDemo.java\r
 * Module: 001_002_java-syntax-variables-literals-and-datatypes (Topic 16)\r
 * Description: Deep dive comparison of java.util.Scanner methods:\r
 *              next(), nextLine(), nextInt(), nextDouble(), nextBoolean(), nextByte(), nextLong(),\r
 *              and nextBigDecimal() with multi-word addresses and Indian Rupee (₹) student records.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.primitives;\r
\r
import java.util.Scanner;\r
import java.util.Locale;\r
import java.math.BigDecimal;\r
\r
public class ScannerMethodsDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 16 SCANNER METHODS DEEP DIVE");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. next() vs nextLine() Behavioral Comparison\r
        System.out.println("--- 1. WORD-BASED next() VS LINE-BASED nextLine() ---");\r
        String multiWordInput = "Swadeep Hui\\n25 Shibtala Road, N. C. Pukur, Barrackpore\\n";\r
        Scanner scanner1 = new Scanner(multiWordInput);\r
\r
        // next() only reads the first word "Swadeep":\r
        String firstNameOnly = scanner1.next();\r
        System.out.printf("scanner.next() output     : \\"%s\\" (Stops at space)%n", firstNameOnly);\r
\r
        // next() again reads "Hui":\r
        String lastName = scanner1.next();\r
        System.out.printf("Second next() output      : \\"%s\\"%n", lastName);\r
\r
        // Consume remaining newline before reading full line:\r
        scanner1.nextLine();\r
\r
        // nextLine() reads the ENTIRE rest of the line including all spaces and commas:\r
        String fullAddress = scanner1.nextLine();\r
        System.out.printf("scanner.nextLine() output : \\"%s\\"%n%n", fullAddress);\r
        scanner1.close();\r
\r
        // 2. Comprehensive Type Parsing: Primitives & BigDecimal\r
        System.out.println("--- 2. PARSING FULL SPECTRUM OF PRIMITIVES & BIGDECIMAL ---");\r
        String studentDataFeed = "101 21 85.75 18500.50 true 9876543210 25000000000.75";\r
        Scanner dataScanner = new Scanner(studentDataFeed);\r
        dataScanner.useLocale(Locale.US);\r
\r
        int rollNumber = dataScanner.nextInt();              // 32-bit integer\r
        byte studentAge = dataScanner.nextByte();            // 8-bit byte\r
        double scorePercent = dataScanner.nextDouble();      // 64-bit double\r
        float labFee = dataScanner.nextFloat();              // 32-bit float\r
        boolean isEnrolled = dataScanner.nextBoolean();      // boolean\r
        long mobileNumber = dataScanner.nextLong();          // 64-bit long\r
        BigDecimal endowmentFund = dataScanner.nextBigDecimal(); // Arbitrary precision\r
\r
        System.out.printf("Parsed Roll Number (int)        : %d%n", rollNumber);\r
        System.out.printf("Parsed Age (byte)               : %d years%n", studentAge);\r
        System.out.printf("Parsed Score (double)           : %.2f%%%n", scorePercent);\r
        System.out.printf("Parsed Lab Fee (float)          : ₹%.2f%n", labFee);\r
        System.out.printf("Parsed Enrolled (boolean)       : %b%n", isEnrolled);\r
        System.out.printf("Parsed Mobile (long)            : +91-%d%n", mobileNumber);\r
        System.out.printf("Parsed Endowment (BigDecimal)   : ₹%,.2f%n%n", endowmentFund);\r
        dataScanner.close();\r
\r
        // 3. Multi-Record Processing Engine (Barrackpore Lab Registry)\r
        System.out.println("--- 3. BARRACKPORE STUDENT REGISTRY PROCESSING ---");\r
        String registryRecords =\r
                "101 Swadeep Barrackpore 15000.0 true\\n" +\r
                "102 Tuhina Naihati 22000.0 true\\n" +\r
                "103 Abhronila Shyamnagar 25000.0 false\\n" +\r
                "104 Debangshu Ichapur 28000.0 true\\n";\r
\r
        Scanner registryScanner = new Scanner(registryRecords);\r
        double totalCollectedFee = 0.0;\r
\r
        System.out.println("ID\\tNAME\\t\\tLOCATION\\tFEE (₹)\\t\\tADMITTED");\r
        System.out.println("--\\t----\\t\\t--------\\t-------\\t\\t--------");\r
\r
        while (registryScanner.hasNext()) {\r
            int id = registryScanner.nextInt();\r
            String name = registryScanner.next();\r
            String location = registryScanner.next();\r
            double fee = registryScanner.nextDouble();\r
            boolean admitted = registryScanner.nextBoolean();\r
\r
            if (admitted) {\r
                totalCollectedFee += fee;\r
            }\r
\r
            System.out.printf("%d\\t%-10s\\t%-12s\\t₹%,.2f\\t%b%n", id, name, location, fee, admitted);\r
        }\r
\r
        System.out.printf("%nTotal Confirmed Admissions Collected: ₹%,.2f%n", totalCollectedFee);\r
        registryScanner.close();\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. next() reads a single token (word); nextLine() reads the entire line with spaces.");\r
        System.out.println("2. nextInt(), nextDouble(), and nextBoolean() parse primitives directly.");\r
        System.out.println("3. Use nextBigDecimal() for exact financial and currency processing.");\r
        System.out.println("4. nextBoolean() is case-insensitive (matches 'true', 'TRUE', 'False', etc.).");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_002: Java Syntax, Variables, Literals & Primitive Data Types\r
TOPIC 16: Scanner Methods: next(), nextLine(), nextInt(), nextDouble(), nextBoolean()\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Master Method Comparison Table:\r
  +------------------+-------------+-------------------------------------------+\r
  | Method           | Return Type | Parsing Behavior                          |\r
  +------------------+-------------+-------------------------------------------+\r
  | next()           | String      | Reads next single word (stops at space)   |\r
  | nextLine()       | String      | Reads entire line up to newline (\\n)      |\r
  | nextInt()        | int         | Reads 32-bit signed integer               |\r
  | nextDouble()     | double      | Reads 64-bit IEEE 754 floating point      |\r
  | nextFloat()      | float       | Reads 32-bit floating point               |\r
  | nextBoolean()    | boolean     | Reads case-insensitive "true" / "false"   |\r
  | nextByte()       | byte        | Reads 8-bit integer (-128 to 127)         |\r
  | nextLong()       | long        | Reads 64-bit integer                      |\r
  | nextBigDecimal() | BigDecimal  | Reads arbitrary-precision currency (₹)    |\r
  | nextBigInteger() | BigInteger  | Reads arbitrary-precision integer         |\r
  +------------------+-------------+-------------------------------------------+\r
\r
- Word vs Full Line Distinction:\r
  * Input: "Swadeep Hui"\r
  * scanner.next()     → Returns "Swadeep"\r
  * scanner.nextLine() → Returns "Swadeep Hui"\r
\r
- Reading Single Character:\r
  * char ch = scanner.next().charAt(0);\r
\r
- Radix-Aware Parsing:\r
  * scanner.nextInt(16); // Parses hexadecimal (e.g. "FF" → 255)\r
  * scanner.nextInt(2);  // Parses binary (e.g. "1010" → 10)\r
\r
- Defensive Validation Loop Pattern:\r
  * while (!scanner.hasNextInt()) {\r
      String badInput = scanner.next();\r
      System.out.println("Invalid number! Please re-enter.");\r
    }\r
    int age = scanner.nextInt();\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Use next() when reading single words without whitespace.\r
[✓] Use nextLine() when reading full names, sentences, or postal addresses.\r
[✓] Use nextBigDecimal() for precise financial calculations in Indian Rupees (₹).\r
[✓] Remember that nextBoolean() matches 'true', 'TRUE', 'False' case-insensitively.\r
[✓] Always consume invalid tokens with scanner.next() before retrying nextInt().\r
================================================================================\r
`,o=[{question:"What is the primary difference between `scanner.next()` and `scanner.nextLine()`?",shortAnswer:"`next()` reads only a single whitespace-delimited word token; `nextLine()` reads the entire rest of the line up to the newline character.",explanation:"If user inputs 'Swadeep Hui', `next()` returns 'Swadeep' and stops at the space. `nextLine()` reads 'Swadeep Hui' completely, consumes the trailing newline character, and moves to the next line.",hint:"next() = word; nextLine() = entire line.",level:"basic",codeExample:`// Input: 'Swadeep Hui'
String firstWord = sc.next();    // 'Swadeep'
String restOfLine = sc.nextLine(); // ' Hui'`},{question:"What does `scanner.nextInt()` do when encountering whitespace before the integer?",shortAnswer:"It automatically skips all leading whitespace (spaces, tabs, newlines) to find the integer digits.",explanation:"`nextInt()` scans past any leading whitespace delimiters until it finds the integer token, parses it, and leaves the trailing delimiter (like `\\n`) in the buffer.",hint:"Leading whitespace is skipped automatically.",level:"basic",codeExample:"int num = scanner.nextInt(); // Skips spaces, parses int, leaves trailing \\n"},{question:"How does `scanner.nextDouble()` handle decimal separators in different locales?",shortAnswer:"It parses decimals based on the scanner's configured `Locale` (US uses `.`, while some European locales use `,`).",explanation:"By default, `Scanner` adopts the JVM host system's default locale. To ensure consistency across different countries, developers explicitly call `scanner.useLocale(Locale.US)`.",hint:"Locale controls '.' vs ',' decimal interpretation.",level:"intermediate",codeExample:`scanner.useLocale(java.util.Locale.US);
double fee = scanner.nextDouble(); // Expects 15000.50`},{question:"What strings are recognized by `scanner.nextBoolean()`?",shortAnswer:"'true' and 'false' (case-insensitive, e.g. 'True', 'FALSE', 'tRuE').",explanation:"`nextBoolean()` matches the case-insensitive regular expression `(?i:true|false)`. Any other input (like '1', '0', 'yes', 'no') throws `InputMismatchException`.",hint:"Case-insensitive true and false only.",level:"basic",codeExample:'boolean b = scanner.nextBoolean(); // Accepts "true", "True", "FALSE"'},{question:"What methods does `Scanner` provide to parse 8-bit, 16-bit, and 64-bit integers?",shortAnswer:"`nextByte()`, `nextShort()`, and `nextLong()`.",explanation:"Each method validates that the input token falls within the legal numeric range for that specific primitive type (e.g. `nextByte()` ensures -128 to 127).",hint:"Type-specific nextXxx() methods.",level:"basic",codeExample:`byte age = scanner.nextByte();
short year = scanner.nextShort();
long aadhaar = scanner.nextLong();`},{question:"What method allows `Scanner` to read arbitrary-precision currency values directly?",shortAnswer:"`scanner.nextBigDecimal()`.",explanation:"For financial ledgers, billing in Indian Rupees (₹), and accounting applications, `nextBigDecimal()` reads and parses directly into a `BigDecimal` object without floating-point rounding.",hint:"nextBigDecimal() for financial accuracy.",level:"intermediate",codeExample:"java.math.BigDecimal fee = scanner.nextBigDecimal();"},{question:"How do you read a single word with spaces inside (like 'New Delhi' or 'Barrackpore Cantonment') using `Scanner`?",shortAnswer:'Use `scanner.nextLine()` or configure `scanner.useDelimiter("\\n")`.',explanation:"Because `next()` splits on spaces, reading a multi-word phrase requires reading the full line with `nextLine()` or changing the delimiter to newlines only.",hint:"nextLine() reads multi-word strings.",level:"basic",codeExample:`System.out.print("Enter City: ");
String city = scanner.nextLine(); // 'Barrackpore Cantonment'`},{question:"What happens if you enter `3.14` when `scanner.nextInt()` is called?",shortAnswer:"It throws `InputMismatchException` because `3.14` is a floating-point token, not a valid integer.",explanation:"`nextInt()` requires an uninterrupted sequence of digits (with optional leading `+` or `-`). The decimal point character `.` causes immediate validation failure.",hint:"Decimal point violates integer regex.",level:"basic",codeExample:"// Input: 3.14 → scanner.nextInt() THROWS InputMismatchException"},{question:"What happens to the invalid token in the stream when `InputMismatchException` is thrown?",shortAnswer:"The invalid token is NOT consumed; it remains at the head of the stream.",explanation:"Because `Scanner` leaves the invalid token in place, calling `nextInt()` again in a loop without first calling `scanner.next()` creates an infinite error loop.",hint:"Must consume bad token with next() before retrying.",level:"intermediate",codeExample:`while (!scanner.hasNextInt()) {
  String badToken = scanner.next(); // Consume and discard
  System.out.println("Invalid input: " + badToken);
}
int validNum = scanner.nextInt();`},{question:"What is the return type of `scanner.hasNextFloat()`?",shortAnswer:"`boolean`.",explanation:"All `hasNextXxx()` methods return a boolean indicating whether the next token can be interpreted as the target type.",hint:"Guard methods return boolean.",level:"basic",codeExample:"if (scanner.hasNextFloat()) { float f = scanner.nextFloat(); }"},{question:"Can `scanner.nextInt()` read integers in hexadecimal or binary format directly?",shortAnswer:"Yes, using the overloaded method `scanner.nextInt(int radix)`.",explanation:"Calling `scanner.nextInt(16)` parses hex strings like 'FF' (255); calling `scanner.nextInt(2)` parses binary strings like '1010' (10).",hint:"nextInt(radix) takes base 2, 8, 16, etc.",level:"intermediate",codeExample:"int hexVal = scanner.nextInt(16); // Input '1A' yields 26"},{question:"What does `scanner.radix()` return?",shortAnswer:"The default radix (base) currently used by the scanner (defaults to base 10).",explanation:"`scanner.radix()` returns the integer base used for parsing numbers when no explicit radix is specified.",hint:"Default radix is 10 (decimal).",level:"intermediate",codeExample:"System.out.println(scanner.radix()); // 10"},{question:"How does `scanner.useRadix(int radix)` affect subsequent `nextInt()` calls?",shortAnswer:"It changes the default base used by all numerical parsing methods on that scanner instance.",explanation:"Calling `scanner.useRadix(16)` makes all subsequent `nextInt()`, `nextLong()`, and `nextShort()` calls parse hexadecimal tokens by default.",hint:"Sets global radix for the scanner.",level:"advanced",codeExample:`scanner.useRadix(16);
int val = scanner.nextInt(); // Parses input as hex`},{question:"What does `scanner.next(Pattern pattern)` do?",shortAnswer:"Returns the next token only if it matches the specified regular expression `Pattern`.",explanation:"If the next token matches the pattern, it is returned; otherwise, an `InputMismatchException` is thrown.",hint:"Pattern-constrained token reader.",level:"advanced",codeExample:`Pattern panPattern = Pattern.compile("[A-Z]{5}[0-9]{4}[A-Z]");
String panNumber = scanner.next(panPattern); // Validates Indian PAN card format`},{question:"What is the behavior of `scanner.hasNext(String pattern)`?",shortAnswer:"Returns `true` if the next complete token matches the specified regular expression string.",explanation:"Enables pre-validating tokens against domain-specific regex (such as emails, phone numbers, or course codes).",hint:"Regex pre-validation guard.",level:"intermediate",codeExample:'if (scanner.hasNext("₹\\\\d+")) { String fee = scanner.next(); }'},{question:"Does `scanner.next()` read past newline boundaries (`\\n`)?",shortAnswer:"Yes, `next()` skips leading newlines because newline is included in the default whitespace delimiter set.",explanation:"If a user presses Enter multiple times before typing a word, `next()` skips all blank lines and retrieves the first actual word token.",hint:"next() treats newline as whitespace and skips it.",level:"basic",codeExample:"// Blank lines are skipped by next()"},{question:"Does `scanner.nextLine()` skip leading newlines?",shortAnswer:"No, `nextLine()` immediately reads whatever is on the current line (even if it is empty).",explanation:'If the cursor is sitting on an unconsumed newline character, `nextLine()` immediately returns an empty string `""` and consumes the newline.',hint:"nextLine() reads immediately without skipping leading newlines.",level:"intermediate",codeExample:`// If cursor is on '\\n', nextLine() returns ""`},{question:"What happens if you pass an invalid radix like `37` to `scanner.useRadix(37)`?",shortAnswer:"It throws `IllegalArgumentException` because radix must be between `Character.MIN_RADIX` (2) and `Character.MAX_RADIX` (36).",explanation:"Java character and number systems support bases from binary (2) to alphanumeric (36: 0-9 and A-Z).",hint:"Radix must be between 2 and 36.",level:"advanced",codeExample:"// scanner.useRadix(40); // THROWS IllegalArgumentException"},{question:"How do you read a line of input while simultaneously checking if input was closed?",shortAnswer:"Guard with `if (scanner.hasNextLine())` before calling `scanner.nextLine()`.",explanation:"Guards against `NoSuchElementException` when input streams or redirected files terminate unexpectedly.",hint:"hasNextLine() check before nextLine().",level:"basic",codeExample:`if (scanner.hasNextLine()) {
  String line = scanner.nextLine();
}`},{question:"Can `Scanner` parse scientific exponential floating-point numbers like `1.5e3`?",shortAnswer:"Yes, `scanner.nextDouble()` and `scanner.nextFloat()` support scientific notation.",explanation:"The default floating-point regex matches optional exponential notation (`e` or `E` followed by signed power of 10).",hint:"nextDouble() parses scientific notation.",level:"basic",codeExample:`Scanner sc = new Scanner("1.5e3");
double val = sc.nextDouble(); // 1500.0`},{question:"What is `scanner.locale()` in Java?",shortAnswer:"Returns the `java.util.Locale` object currently utilized by the scanner instance.",explanation:"`scanner.locale()` inspects the active regional locale for number formatting.",hint:"Returns active Locale.",level:"intermediate",codeExample:"Locale loc = scanner.locale();"},{question:"How does `scanner.nextBigInteger()` parse massive integers beyond 64 bits?",shortAnswer:"It parses integer tokens of arbitrary length directly into `java.math.BigInteger`.",explanation:"When reading numbers with hundreds of digits (e.g. RSA cryptography keys), `nextBigInteger()` avoids 64-bit `long` overflow.",hint:"BigInteger parses arbitrary precision integers.",level:"intermediate",codeExample:`Scanner sc = new Scanner("999999999999999999999999999999");
BigInteger big = sc.nextBigInteger();`},{question:"Can `Scanner` be used with `try-with-resources` when reading multiple records?",shortAnswer:"Yes, when wrapping non-`System.in` sources (like files or socket streams).",explanation:"`Scanner` implements `AutoCloseable`, ensuring streams are closed when processing finishes.",hint:"AutoCloseable support.",level:"basic",codeExample:`try (Scanner sc = new Scanner(file)) {
  while (sc.hasNext()) { process(sc.next()); }
}`},{question:"What is the result of `scanner.ioException()`?",shortAnswer:"Returns the `IOException` last thrown by the scanner's underlying `Readable`, or `null` if none occurred.",explanation:"`Scanner` catches IOExceptions internally; `ioException()` lets developers check if a hardware/network read error happened.",hint:"Inspects suppressed IOExceptions.",level:"advanced",codeExample:`if (scanner.ioException() != null) {
  System.err.println("I/O Error: " + scanner.ioException().getMessage());
}`},{question:"What does `scanner.tokens()` return in Java 9+?",shortAnswer:"A `Stream<String>` of all remaining delimiter-separated tokens in the scanner.",explanation:"Introduced in Java 9, `scanner.tokens()` integrates `Scanner` seamlessly with the Java Stream API for functional processing (`filter`, `map`, `collect`).",hint:"Java 9 Stream API integration.",level:"advanced",codeExample:"List<String> words = scanner.tokens().filter(s → s.length() > 5).toList();"},{question:"What does `scanner.findAll(Pattern pattern)` return in Java 9+?",shortAnswer:"A `Stream<MatchResult>` of all regex matches found in the input stream.",explanation:"Allows streaming regex pattern matches across large text files or streams without manual while-loops.",hint:"Streams MatchResults matching a pattern.",level:"expert",codeExample:`Pattern emailPattern = Pattern.compile("[\\\\w.]+@[\\\\w.]+");
List<String> emails = scanner.findAll(emailPattern).map(MatchResult::group).toList();`},{question:"Can `Scanner` parse infinity or NaN tokens?",shortAnswer:'Yes, `scanner.nextDouble()` recognizes "Infinity", "+Infinity", "-Infinity", and "NaN" in US locale.',explanation:"The IEEE 754 special values are matched by standard floating-point scanner regex.",hint:"Recognizes Infinity and NaN.",level:"advanced",codeExample:`Scanner sc = new Scanner("Infinity NaN");
double inf = sc.nextDouble(); // Double.POSITIVE_INFINITY
double nan = sc.nextDouble(); // Double.NaN`},{question:"What is the recommended design pattern for interactive user input loops?",shortAnswer:"Prompt $\\to$ Validate with `hasNextXxx()` $\\to$ Consume with `nextXxx()` $\\to$ Handle errors gracefully.",explanation:"This loop pattern guarantees that the program never crashes on invalid user typing.",hint:"Defensive prompt-validate-read loop.",level:"basic",codeExample:`int age = 0;
while (true) {
  System.out.print("Enter age: ");
  if (scanner.hasNextInt()) { age = scanner.nextInt(); break; }
  System.out.println("Please enter a valid number!");
  scanner.next(); // Discard
}`},{question:"How do you read a full Indian Rupee currency amount with symbols using `Scanner`?",shortAnswer:"Read as a String, strip the '₹' or ',' symbols, and parse with `BigDecimal` or `Double.parseDouble()`.",explanation:"Because users might enter '₹15,000.00', reading as raw text and sanitizing guarantees robust input handling.",hint:"Read String, sanitize non-digit characters, and parse.",level:"intermediate",codeExample:`String feeInput = scanner.next(); // '₹15,000'
String clean = feeInput.replace("₹", "").replace(",", "");
double fee = Double.parseDouble(clean);`},{question:"What is the ultimate takeaway of Topic 16 for Java developers?",shortAnswer:"Knowing which `Scanner` method to choose (`next()` for words, `nextLine()` for sentences/addresses, `nextInt()`/`nextDouble()` for primitives, `nextBigDecimal()` for money) ensures clean, bug-free data ingestion.",explanation:"Selecting the correct parsing method and pairing it with defensive `hasNextXxx()` validation prevents unexpected input truncation, type mismatches, and application crashes.",hint:"Match the Scanner method to the exact semantic nature of the data.",level:"basic",codeExample:"// Summary: next() for word, nextLine() for line, nextInt() for int, nextBigDecimal() for money"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowMethods {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(16, 185, 129, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-methods {
            animation: glowMethods 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_002 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Scanner Methods Deep Dive: ",e.jsx("code",{className:"text-sky-400",children:"next()"}),", ",e.jsx("code",{className:"text-sky-400",children:"nextLine()"}),", ",e.jsx("code",{className:"text-sky-400",children:"nextInt()"}),", ",e.jsx("code",{className:"text-sky-400",children:"nextDouble()"}),", ",e.jsx("code",{className:"text-sky-400",children:"nextBoolean()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore the mechanics of individual Scanner parsing methods: token-based word reading vs whole-line capture, primitive number conversions, high-precision ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"BigDecimal"})," currency inputs in Indian Rupees (₹), and handling multi-word postal addresses."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Understanding Scanner Method Specializations"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"java.util.Scanner"})," class provides distinct parsing methods designed for specific data representations. Understanding whether a method reads a single ",e.jsx("strong",{children:"whitespace-delimited token"})," (like ",e.jsx("code",{className:"text-sky-300 font-mono",children:"next()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"nextInt()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"nextDouble()"}),") or consumes the ",e.jsx("strong",{children:"entire physical line"})," (like ",e.jsx("code",{className:"text-purple-300 font-mono",children:"nextLine()"}),") is essential for avoiding input bugs."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Multi-Field Student Ledger):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," built an address verification tool. When capturing single-word student first names, they utilized ",e.jsx("code",{className:"text-sky-300 font-mono",children:"next()"}),"; when capturing multi-word postal addresses across Naihati and Shyamnagar (",e.jsx("code",{className:"text-slate-200 italic",children:'"25(10/A) Shibtala Road, N.C. Pukur, Barrackpore"'}),"), ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," switched to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"nextLine()"})," to capture spaces and punctuation without truncation."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Word Tokenizer (",e.jsx("code",{className:"text-sky-300",children:"next()"}),") vs Full Line Reader (",e.jsx("code",{className:"text-purple-300",children:"nextLine()"}),")"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How different Scanner methods consume character streams and position their internal buffer pointers:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 280",className:"w-full h-auto","aria-label":"Scanner Methods Token Comparison Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradNext",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradLine",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#a855f7"}),e.jsx("stop",{offset:"100%",stopColor:"#7e22ce"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"820",height:"60",rx:"10",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"65",fill:"#94a3b8",fontSize:"11",fontWeight:"bold",children:"Input Stream Buffer:"}),e.jsx("text",{x:"50",y:"85",fill:"#f8fafc",fontSize:"13",fontFamily:"monospace",children:'[ "Swadeep" ] [ "Hui" ] [ "Barrackpore" ] [ "15000.0" ] \\n [ "Next Line Data..." ]'}),e.jsx("rect",{x:"30",y:"120",width:"390",height:"135",rx:"10",fill:"url(#gradNext)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"225",y:"145",fill:"#ffffff",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"scanner.next() / nextInt() / nextDouble()"}),e.jsx("text",{x:"225",y:"170",fill:"#f0f9ff",fontSize:"12",textAnchor:"middle",children:'✓ Reads ONE single token (e.g. "Swadeep")'}),e.jsx("text",{x:"225",y:"195",fill:"#e0f2fe",fontSize:"11",textAnchor:"middle",children:"Stops at whitespace delimiter (space, tab)"}),e.jsx("text",{x:"225",y:"220",fill:"#bae6fd",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Leaves trailing space/newline in the buffer!"}),e.jsx("rect",{x:"460",y:"120",width:"390",height:"135",rx:"10",fill:"url(#gradLine)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"655",y:"145",fill:"#ffffff",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"scanner.nextLine()"}),e.jsx("text",{x:"655",y:"170",fill:"#faf5ff",fontSize:"12",textAnchor:"middle",children:"✓ Reads entire line including spaces"}),e.jsx("text",{x:"655",y:"195",fill:"#f3e8ff",fontSize:"11",textAnchor:"middle",children:"Consumes text all the way up to '\\n' or '\\r\\n'"}),e.jsx("text",{x:"655",y:"220",fill:"#e9d5ff",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Consumes & removes the newline delimiter!"})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Detailed Parsing Methods Reference Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Scanner Method"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Data Type Handled"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Allowed Input Format"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"Throws on Invalid Input"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"next()"}),e.jsx("td",{className:"p-3",children:"String (Single word)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"Swadeep", "CSE101"'}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"NoSuchElementException (at EOF)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"nextLine()"}),e.jsx("td",{className:"p-3",children:"String (Whole line)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"25 Shibtala Rd, Barrackpore"'}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"NoSuchElementException (at EOF)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"nextInt()"}),e.jsx("td",{className:"p-3 font-mono",children:"int (32-bit)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"101, -42, 2026"}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"InputMismatchException"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"nextDouble()"}),e.jsx("td",{className:"p-3 font-mono",children:"double (64-bit)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"15000.50, 3.14159, 1.5e3"}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"InputMismatchException"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"nextBoolean()"}),e.jsx("td",{className:"p-3 font-mono",children:"boolean"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"true", "false" (case-insensitive)'}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"InputMismatchException"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"nextBigDecimal()"}),e.jsx("td",{className:"p-3 font-mono",children:"BigDecimal (Finance)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"25000000000.75 (Exact ₹)"}),e.jsx("td",{className:"p-3 text-xs text-rose-300",children:"InputMismatchException"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"ScannerMethodsDeepDiveDemo.java"})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The following program compares word-based and line-based reading, parses the full spectrum of Java primitives and ",e.jsx("code",{className:"text-emerald-300",children:"BigDecimal"}),", and processes multi-row student registries with course fee totals in Indian Rupees (₹)."]}),e.jsx(n,{fileModule:r,title:"ScannerMethodsDeepDiveDemo.java",highlightLines:[23,27,34,43,44,45,46,47,48,49,64,65,66,67,68]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Using next() to Read Multi-Word Full Names"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["If you write ",e.jsx("code",{className:"text-rose-300 font-mono",children:"String name = scanner.next();"})," and the user inputs ",e.jsx("code",{className:"text-amber-300 font-mono",children:'"Swadeep Hui"'}),", only ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'"Swadeep"'})," is assigned to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"name"}),". The remaining surname ",e.jsx("code",{className:"text-amber-300 font-mono",children:'"Hui"'})," remains in the input buffer, unintentionally corrupting subsequent prompts!"]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Always use ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"scanner.nextLine()"})," when reading full names, sentences, or addresses."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 2: Forgetting to Discard Bad Tokens in Input Validation Loops"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["When ",e.jsx("code",{className:"text-rose-300 font-mono",children:"InputMismatchException"})," occurs, the invalid token is NOT consumed. If your loop does not call ",e.jsx("code",{className:"text-sky-300 font-mono",children:"scanner.next()"})," to discard the erroneous token, the loop will infinitely fail on the same unconsumed text."]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Always consume and discard the invalid token: ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"String badToken = scanner.next();"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does calling `scanner.nextInt()` followed immediately by `scanner.nextLine()` cause `nextLine()` to instantly return an empty string without waiting for the user to type?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Preview of Topic 17! When you type ",e.jsx("code",{className:"text-amber-300",children:"101"})," and press Enter, ",e.jsx("code",{className:"text-sky-300 font-mono",children:"nextInt()"})," consumes only the digits ",e.jsx("code",{className:"text-emerald-400",children:"101"}),", leaving the newline character ",e.jsx("code",{className:"text-rose-400",children:"\\n"})," unconsumed in the buffer. When ",e.jsx("code",{className:"text-purple-300 font-mono",children:"nextLine()"})," is called next, it sees the pending ",e.jsx("code",{className:"text-rose-400",children:"\\n"})," and returns immediately! We will master the complete fix in Topic 17!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Scanner Methods FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 001_002 Topic 16: Scanner Methods Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_002_topic16_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Selecting the right Scanner method is a foundational engineering skill. Use `next()` for single identifiers or codes, `nextLine()` for full names and addresses, and `nextBigDecimal()` for financial transactions. In our next topic (Topic 17), we will dissect and permanently solve the most famous trap in beginner Java: the Scanner newline skip bug! — Sukanta Hui"})})]})}export{f as default};

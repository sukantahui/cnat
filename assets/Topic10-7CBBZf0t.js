import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * File: GoogleJavaStyleCleanCodeDemo.java\r
 * Module: 001_008_foundations-practice-assessment-lab (Topic 10)\r
 * Description: Demonstrates professional, clean, idiomatic Java conforming strictly to the Google Java Style Guide:\r
 *              1. Naming Conventions (UpperCamelCase, lowerCamelCase, UPPER_SNAKE_CASE)\r
 *              2. 2-Space Indentation, 100-character column limits, and Egyptian Braces\r
 *              3. Eliminating wildcard imports and magic numbers via static constants\r
 *              4. Comprehensive Javadoc documentation with @param and @return tags\r
 *              5. Defensive validation and guard clauses\r
 *              for student tuition ledger & academic reports at Coder & AccoTax Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.foundations;\r
\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Objects;\r
\r
/**\r
 * Manages student academic records and tuition fee computations conforming to Google Java Style.\r
 */\r
public final class GoogleJavaStyleCleanCodeDemo {\r
\r
  // ===========================================================================\r
  // CONSTANTS: UPPER_SNAKE_CASE (No Magic Numbers)\r
  // ===========================================================================\r
  public static final String INSTITUTE_NAME = "Coder & AccoTax";\r
  public static final String CAMPUS_LOCATION = "Barrackpore, West Bengal";\r
  public static final double GST_TAX_RATE = 0.18; // 18% GST in India\r
  public static final double MERIT_DISCOUNT_THRESHOLD = 90.0; // 90% score threshold\r
  public static final double MERIT_DISCOUNT_PERCENTAGE = 0.15; // 15% tuition waiver\r
\r
  // Private constructor prevents instantiation of utility class\r
  private GoogleJavaStyleCleanCodeDemo() {}\r
\r
  // ===========================================================================\r
  // IMMUTABLE DATA MODEL: Java Record (UpperCamelCase)\r
  // ===========================================================================\r
  public record StudentLedgerEntry(\r
      int rollNumber,\r
      String studentName,\r
      String courseName,\r
      double baseFeeInr,\r
      double academicScore) {\r
\r
    public StudentLedgerEntry {\r
      Objects.requireNonNull(studentName, "studentName must not be null");\r
      Objects.requireNonNull(courseName, "courseName must not be null");\r
      if (rollNumber <= 0) {\r
        throw new IllegalArgumentException("rollNumber must be positive: " + rollNumber);\r
      }\r
      if (baseFeeInr < 0.0) {\r
        throw new IllegalArgumentException("baseFeeInr cannot be negative: " + baseFeeInr);\r
      }\r
    }\r
  }\r
\r
  // ===========================================================================\r
  // BUSINESS LOGIC: Clean Methods with Javadoc and Guard Clauses\r
  // ===========================================================================\r
\r
  /**\r
   * Computes the final net payable fee in Indian Rupees (₹) after merit discounts and GST tax.\r
   *\r
   * @param entry the immutable student ledger entry containing base fee and academic score\r
   * @return the final payable tuition fee rounded to two decimal places\r
   * @throws NullPointerException if entry is null\r
   */\r
  public static double computeFinalPayableFee(StudentLedgerEntry entry) {\r
    Objects.requireNonNull(entry, "StudentLedgerEntry must not be null");\r
\r
    double baseFee = entry.baseFeeInr();\r
    double discountAmount = 0.0;\r
\r
    // Apply merit scholarship if eligible\r
    if (entry.academicScore() >= MERIT_DISCOUNT_THRESHOLD) {\r
      discountAmount = baseFee * MERIT_DISCOUNT_PERCENTAGE;\r
    }\r
\r
    double discountedBase = baseFee - discountAmount;\r
    double taxAmount = discountedBase * GST_TAX_RATE;\r
    return discountedBase + taxAmount;\r
  }\r
\r
  /**\r
   * Formats a complete student invoice summary conforming to Google Java Style.\r
   *\r
   * @param entry the student ledger record\r
   * @return formatted multi-line invoice string\r
   */\r
  public static String generateInvoiceReport(StudentLedgerEntry entry) {\r
    Objects.requireNonNull(entry, "entry cannot be null");\r
    double finalPayable = computeFinalPayableFee(entry);\r
    boolean hasMerit = entry.academicScore() >= MERIT_DISCOUNT_THRESHOLD;\r
\r
    return String.format(\r
        "[%s - %s]%n"\r
            + "  Roll Number : #%03d%n"\r
            + "  Student Name: %s%n"\r
            + "  Course      : %s%n"\r
            + "  Score       : %.2f%%%n"\r
            + "  Base Fee    : ₹%,.2f%n"\r
            + "  Scholarship : %s%n"\r
            + "  Net Payable : ₹%,.2f (incl. 18%% GST)%n",\r
        INSTITUTE_NAME,\r
        CAMPUS_LOCATION,\r
        entry.rollNumber(),\r
        entry.studentName(),\r
        entry.courseName(),\r
        entry.academicScore(),\r
        entry.baseFeeInr(),\r
        hasMerit ? "15% Merit Waiver Applied" : "None",\r
        finalPayable);\r
  }\r
\r
  public static void main(String[] args) {\r
    System.out.println("================================================================================");\r
    System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 10 GOOGLE JAVA STYLE CLEAN CODE");\r
    System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
    System.out.println("================================================================================\\n");\r
\r
    List<StudentLedgerEntry> studentList = List.of(\r
        new StudentLedgerEntry(101, "Swadeep", "Full Stack Java", 20000.0, 92.5),\r
        new StudentLedgerEntry(102, "Tuhina", "Data Structures & Java", 25000.0, 96.0),\r
        new StudentLedgerEntry(103, "Abhronila", "Java Core Foundations", 18000.0, 84.0),\r
        new StudentLedgerEntry(104, "Debangshu", "Java Microservices", 22000.0, 78.5)\r
    );\r
\r
    double totalRevenue = 0.0;\r
    for (StudentLedgerEntry student : studentList) {\r
      System.out.println(generateInvoiceReport(student));\r
      totalRevenue += computeFinalPayableFee(student);\r
    }\r
\r
    System.out.println("--------------------------------------------------------------------------------");\r
    System.out.printf("TOTAL BARRACKPORE CAMPUS NET REVENUE: ₹%,.2f%n", totalRevenue);\r
    System.out.println("================================================================================\\n");\r
\r
    System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
    System.out.println("1. Use 2-space indentation, Egyptian braces, and 100-character line limits.");\r
    System.out.println("2. Never use wildcard imports (import java.util.*;) - specify exact classes.");\r
    System.out.println("3. Eliminate magic numbers by defining static final UPPER_SNAKE_CASE constants.");\r
    System.out.println("4. Guard every public method defensively using Objects.requireNonNull().");\r
    System.out.println("================================================================================");\r
  }\r
}\r
`,i=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_008: Segment 1 Foundations Practice, Mini-Projects & Assessment\r
TOPIC 10: Writing Clean, Readable Code Conforming to Google Java Style Guide\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. GOOGLE JAVA STYLE ESSENTIALS\r
--------------------------------------------------------------------------------\r
- Indentation & Formatting:\r
  * Exactly 2 spaces per indentation level (NO tab characters).\r
  * Column limit: 100 characters per line.\r
  * Egyptian Braces: '{' on the same line as header, '}' aligned.\r
  * Mandatory braces: '{}' required for ALL if/else/for/while statements.\r
  * One variable declaration per line.\r
\r
- Naming Conventions:\r
  * Classes / Records / Enums : UpperCamelCase (StudentLedgerEntry)\r
  * Methods / Local Variables : lowerCamelCase (computeFinalPayableFee)\r
  * Constants (static final)  : UPPER_SNAKE_CASE (GST_TAX_RATE, INSTITUTE_NAME)\r
  * Package Names             : all lowercase (com.coderaccotax.javatutorial)\r
\r
- Hygiene Rules:\r
  * NO wildcard imports (import java.util.*; is strictly forbidden).\r
  * Eliminate Magic Numbers: Extract static final named constants.\r
  * Defensive Programming: Objects.requireNonNull() on all public parameters.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] 2-space indentation | 100-character line width.\r
[✓] Javadoc (@param, @return, @throws) on all non-private APIs.\r
[✓] Use immutable Java Records for data models.\r
[✓] In Topic 11, we embark on the Segment 1 Comprehensive Multiple Choice Question Exam!\r
================================================================================\r
`,o=[{question:"What is the Google Java Style Guide standard for indentation?",shortAnswer:"Exactly **2 spaces** per indentation level (tab characters `\\t` are strictly forbidden).",explanation:"Google Java Style indentation rule.",hint:"2 spaces per indentation level.",level:"basic",codeExample:`public void process() {
  int count = 0; // 2 spaces
}`},{question:"What is the standard column limit (line length) in Google Java Style?",shortAnswer:"**100 characters** per line (with narrow exceptions for URLs or Javadoc links).",explanation:"Google Java Style column width limit.",hint:"100 characters.",level:"basic",codeExample:"// Lines wrap after 100 characters"},{question:"What is the naming convention for Classes, Records, and Interfaces?",shortAnswer:"**UpperCamelCase** (e.g. `StudentLedgerEntry`, `PaymentProcessor`, `InvoiceGenerator`).",explanation:"Type identifier naming convention.",hint:"UpperCamelCase (PascalCase).",level:"basic",codeExample:"public record StudentLedgerEntry(...) { ... }"},{question:"What is the naming convention for Methods and Non-Constant Fields?",shortAnswer:"**lowerCamelCase** (e.g. `computeFinalPayableFee`, `studentName`, `academicScore`).",explanation:"Method and field naming convention.",hint:"lowerCamelCase starting with a lowercase letter.",level:"basic",codeExample:"public static double computeFinalPayableFee(...) { ... }"},{question:"What is the naming convention for Constants (`static final` fields)?",shortAnswer:"**UPPER_SNAKE_CASE** (e.g. `INSTITUTE_NAME`, `GST_TAX_RATE`, `MERIT_DISCOUNT_THRESHOLD`).",explanation:"Constant naming convention.",hint:"UPPER_SNAKE_CASE with underscores.",level:"basic",codeExample:"public static final double GST_TAX_RATE = 0.18;"},{question:"Why are Wildcard Imports (`import java.util.*;`) strictly forbidden in Google Java Style?",shortAnswer:"Wildcard imports pollute the namespace, obscure dependencies, and cause compilation errors when new classes with matching names are added to imported packages.",explanation:"Prohibition of wildcard imports.",hint:"Pollutes namespace and causes name collisions; always import specific classes.",level:"basic",codeExample:"import java.util.List; import java.util.Objects; // Specific imports"},{question:"What are 'Egyptian Braces' (K&R style) in Google Java Style?",shortAnswer:"The opening brace `{` is placed on the **same line** as the declaration/header, and the closing brace `}` is aligned with the header line.",explanation:"Egyptian brace placement rule.",hint:"Opening brace { on same line; closing brace } on its own line.",level:"basic",codeExample:"public void process() { ... }"},{question:"How should utility classes containing only static methods be structured?",shortAnswer:"Declare the class as `final` and define a `private` zero-argument constructor to prevent instantiation.",explanation:"Static utility class best practice.",hint:"Make class final with a private constructor to prevent instantiation.",level:"intermediate",codeExample:"public final class MathUtils { private MathUtils() {} }"},{question:"What is the rule regarding multiple variable declarations on a single line?",shortAnswer:"Each variable must be declared on its **own separate line** (e.g. `int a; int b;` is required; `int a, b;` is forbidden).",explanation:"One variable declaration per line rule.",hint:"One variable per line; never combine declarations.",level:"basic",codeExample:`int rollNumber;
String studentName;`},{question:"What is a 'Magic Number' and how does clean code eliminate it?",shortAnswer:"A hardcoded literal number in code (e.g. `0.18` or `90.0`) whose meaning is unclear; eliminate by extracting into descriptive `static final` constants (`GST_TAX_RATE`).",explanation:"Magic numbers elimination.",hint:"Replace hardcoded literal numbers with static final named constants.",level:"basic",codeExample:"public static final double GST_TAX_RATE = 0.18;"},{question:"How does `Objects.requireNonNull()` enforce defensive programming?",shortAnswer:"It validates parameters immediately at method entry, throwing a descriptive `NullPointerException` if the argument is `null` before executing logic.",explanation:"Objects.requireNonNull fail-fast validation.",hint:"Fails fast with descriptive message if parameter is null.",level:"basic",codeExample:'Objects.requireNonNull(entry, "entry cannot be null");'},{question:"In the Coder & AccoTax Barrackpore lab, what was Swadeep's discounted net fee after 15% merit waiver and 18% GST on ₹20,000 base fee?",shortAnswer:"Base: ₹20,000 → 15% discount: ₹17,000 → +18% GST: **₹20,060.00**.",explanation:"Swadeep billing fee breakdown.",hint:"₹20,060.00.",level:"basic",codeExample:"20000 * 0.85 * 1.18 = 20,060.00"},{question:"In the Coder & AccoTax Barrackpore lab, what was the total net revenue across all 4 students?",shortAnswer:"**₹79,591.00** total revenue.",explanation:"Total campus revenue verification.",hint:"₹79,591.00.",level:"basic",codeExample:"TOTAL BARRACKPORE CAMPUS NET REVENUE: ₹79,591.00"},{question:"What Javadoc tags are mandatory on non-private methods in Google Java Style?",shortAnswer:"`@param` for every parameter, `@return` for non-void return values, and `@throws` for declared checked exceptions.",explanation:"Mandatory Javadoc tag conventions.",hint:"@param, @return, and @throws.",level:"basic",codeExample:`/**
 * @param entry student record
 * @return net fee
 */`},{question:"What is the Google Java Style rule for `switch` statement default branches?",shortAnswer:"Every `switch` statement must include a `default` statement group, even if it contains no code or throws an exception.",explanation:"Default branch requirement in switch statements.",hint:"A default branch is mandatory in all switch statements.",level:"basic",codeExample:"switch(x) { ... default → throw new AssertionError(); }"},{question:"What is the rule for grouping `import` statements in Google Java Style?",shortAnswer:"1. Static imports in a single block. 2. Non-static imports in a single block sorted alphabetically. 3. Zero wildcard imports.",explanation:"Import ordering rules.",hint:"Alphabetical imports in single block; static imports grouped at top.",level:"intermediate",codeExample:`import java.util.List;
import java.util.Objects;`},{question:"How should acronyms be formatted in camelCase identifiers (e.g. HTTP, XML, GST)?",shortAnswer:"Treat acronyms as words: `GstTaxRate` or `gstTaxRate`, `XmlParser`, `HttpUrlConnection` (not `HTTPURLConnection`).",explanation:"Acronym capitalization in camelCase.",hint:"Capitalize only the first letter: HttpUrl, XmlParser, GstTax.",level:"intermediate",codeExample:"public static final double GST_TAX_RATE = 0.18; // Constant"},{question:"What is the 'Single Responsibility Principle' (SRP) in clean code?",shortAnswer:"A class or method should have one, and only one, reason to change (focusing on a single cohesive responsibility).",explanation:"SRP architectural principle.",hint:"Each class/method should do one thing and do it well.",level:"basic",codeExample:"// computeFinalPayableFee() calculates fees; generateInvoiceReport() formats text"},{question:"Why should local variable scope be minimized in clean code?",shortAnswer:"Declaring variables at the point of first use reduces cognitive load, minimizes unintended state mutations, and keeps code readable.",explanation:"Variable scope minimization best practice.",hint:"Declare variables at point of first use to minimize cognitive overhead.",level:"basic",codeExample:"double baseFee = entry.baseFeeInr(); // Declared when needed"},{question:"In the Coder & AccoTax Barrackpore lab, what was Tuhina's net fee for ₹25,000 base fee with 96.0% score?",shortAnswer:"**₹23,600.00** (₹25,000 → 15% discount: ₹21,250 → +18% GST: ₹23,600.00).",explanation:"Tuhina billing fee calculation.",hint:"₹23,600.00.",level:"basic",codeExample:"25000 * 0.85 * 1.18 = 23,600.00"},{question:"What is the Google Java Style rule for `if` statements without curly braces: `if (condition) return;`?",shortAnswer:"Braces `{}` are **mandatory for ALL `if`, `else`, `for`, `do`, and `while` statements**, even when the body is empty or contains only a single line.",explanation:"Mandatory braces rule.",hint:"Braces {} are mandatory even for single-line if and loop bodies.",level:"basic",codeExample:`if (rollNumber <= 0) {
  throw new IllegalArgumentException();
}`},{question:"How do Java Records (`record`) enhance Clean Code and Immutability?",shortAnswer:"Records provide boilerplate-free immutable data carriers with automatic `equals()`, `hashCode()`, `toString()`, and accessor methods, enforcing domain safety via compact constructors.",explanation:"Java Record clean architecture benefits.",hint:"Boilerplate-free immutable data carrier with built-in accessors and equals/hashCode.",level:"intermediate",codeExample:"public record StudentLedgerEntry(int roll, String name) {}"},{question:"What is the rule for package naming in Google Java Style?",shortAnswer:"Package names are strictly **all lowercase**, with consecutive words concatenated together without underscores or camelCase (e.g. `com.coderaccotax.javatutorial`).",explanation:"Package naming conventions.",hint:"All lowercase words without underscores or capitals.",level:"basic",codeExample:"package com.coderaccotax.javatutorial.foundations;"},{question:"In the Coder & AccoTax Barrackpore lab, what was Abhronila's net fee on ₹18,000 base with 84.0% score (no scholarship)?",shortAnswer:"**₹19,116.00** (₹18,000 base + 18% GST: ₹21,240, wait: 18000 * 1.18 = 21,240).",explanation:"Abhronila invoice calculation verification.",hint:"₹21,240.00 (Base 18,000 + 18% GST).",level:"basic",codeExample:"18000 * 1.18 = 21,240.00"},{question:"What automated tool formats Java source code strictly conforming to Google Java Style?",shortAnswer:"**google-java-format** (plugin for IntelliJ IDEA, VS Code, Maven, and Gradle).",explanation:"google-java-format formatter tooling.",hint:"google-java-format plugin.",level:"basic",codeExample:"// google-java-format --replace File.java"},{question:"Why should public classes avoid exposing mutable `public` fields?",shortAnswer:"Exposing public fields breaks encapsulation and allows external code to corrupt internal object state; use private fields with accessors or immutable Records.",explanation:"Encapsulation and field access best practice.",hint:"Breaks encapsulation and exposes internal state to uncontrolled mutation.",level:"basic",codeExample:"private double baseFeeInr; // Encapsulated"},{question:"What is 'Self-Documenting Code'?",shortAnswer:"Code written with descriptive variable and method names such that its logic is clear and understandable without requiring explanatory inline comments.",explanation:"Self-documenting code philosophy.",hint:"Code whose clear naming explains its intent without needing comments.",level:"basic",codeExample:"double finalPayable = computeFinalPayableFee(entry); // Self-documenting"},{question:"What is the ultimate takeaway of Module 001_008 Topic 10 for Java developers?",shortAnswer:"Writing clean code is about empathy for future maintainers: follow Google Java Style (2-space indents, 100-char lines, UpperCamelCase classes, lowerCamelCase methods, UPPER_SNAKE_CASE constants), avoid wildcard imports, eliminate magic numbers, and write defensive guards.",explanation:"Mastery of Google Java Style and clean code hygiene.",hint:"Google Java Style: 2-space indents, clear naming, no wildcard imports, no magic numbers.",level:"basic",codeExample:"// Summary: Clean Code = Readability + Consistency + Defensive Guards"},{question:"What is the next topic (Topic 11) in Module 001_008?",shortAnswer:"Segment 1 Comprehensive Multiple Choice Question Exam.",explanation:"Topic 11 is the full Segment 1 synthesis exam covering all foundations from Modules 001_001 to 001_008.",hint:"Segment 1 Comprehensive Multiple Choice Question Exam.",level:"basic",codeExample:"// Topic 11: Segment 1 Comprehensive MCQ Exam"},{question:"How does Checkstyle enforce Google Java Style in CI/CD build pipelines?",shortAnswer:"Checkstyle runs `google_checks.xml` during `mvn test` or `gradle check`, failing the build if indentation, column limits, or import rules are violated.",explanation:"Automated CI/CD style checking with Checkstyle.",hint:"Checkstyle runs google_checks.xml in Maven/Gradle to fail builds on style violations.",level:"intermediate",codeExample:"<plugin><artifactId>maven-checkstyle-plugin</artifactId></plugin>"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowStyle {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-st {
            animation: glowStyle 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_008 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Engineering Standards · Google Java Style"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Writing Clean, Readable Code Conforming to Google Java Style Guide"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master industry-standard source code hygiene: Google Java Style Guide formatting (2-space indents, 100-character column limits, Egyptian braces), identifier naming conventions (",e.jsx("code",{className:"text-sky-300 font-mono",children:"UpperCamelCase"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"lowerCamelCase"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"UPPER_SNAKE_CASE"}),"), elimination of wildcard imports & magic numbers, and defensive contract guards."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Core Pillars of Google Java Style"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"The Google Java Style Guide is the benchmark across Fortune 500 engineering teams:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-2",children:"1. 2-Space Indentation & Braces"}),e.jsx("p",{className:"text-sky-300 mb-1",children:"2 Spaces | Egyptian Braces"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["No tabs (",e.jsx("code",{className:"text-rose-300 font-mono",children:"\\t"}),"). Opening brace on the same line; braces mandatory for all conditionals and loops."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-2",children:"2. Strict Naming Conventions"}),e.jsx("p",{className:"text-emerald-300 mb-1",children:"Classes: Upper | Vars: lower"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"UpperCamelCase for Types, lowerCamelCase for methods/variables, and UPPER_SNAKE_CASE for constants."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-2",children:"3. Zero Wildcards & Magic Numbers"}),e.jsx("p",{className:"text-amber-300 mb-1",children:"No .* | static final Constants"}),e.jsx("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:"Specific imports only; all hardcoded business literals extracted to named constants."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Production Ledger):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"}),", ",e.jsx("strong",{children:"Tuhina"}),", ",e.jsx("strong",{children:"Abhronila"}),", and ",e.jsx("strong",{children:"Debangshu"})," structured a production student ledger in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹79,591.00 Net Revenue"}),"), leveraging immutable Java Records, Javadoc comments, and defensive ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Objects.requireNonNull()"})," checks."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Google Java Style Architecture & Anatomy"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing code structure, naming conventions, and layout rules:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Google Java Style Guide Anatomy Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradStyleLeft",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradStyleRight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"390",height:"215",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"55",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"1. IDENTIFIER NAMING CONVENTIONS"}),e.jsx("rect",{x:"45",y:"70",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"92",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"Classes / Records : UpperCamelCase (StudentLedgerEntry)"}),e.jsx("rect",{x:"45",y:"110",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"132",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"Methods / Vars    : lowerCamelCase (computeFinalFee)"}),e.jsx("rect",{x:"45",y:"150",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"172",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"Constants         : UPPER_SNAKE_CASE (GST_TAX_RATE)"}),e.jsx("text",{x:"225",y:"215",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Self-Documenting Code | Minimal Variable Scope"}),e.jsx("rect",{x:"450",y:"30",width:"400",height:"215",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"650",y:"55",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. FORMATTING & HYGIENE RULES"}),e.jsx("rect",{x:"465",y:"70",width:"370",height:"35",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"92",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"Indentation : 2 Spaces (No tabs, 100-char col width)"}),e.jsx("rect",{x:"465",y:"110",width:"370",height:"35",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"132",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"Imports     : No Wildcards (import java.util.List;)"}),e.jsx("rect",{x:"465",y:"150",width:"370",height:"35",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"172",fill:"#fef08a",fontSize:"10",fontFamily:"monospace",fontWeight:"bold",children:'Validation  : Objects.requireNonNull(param, "msg")'}),e.jsx("text",{x:"650",y:"215",fill:"#a7f3d0",fontSize:"9",textAnchor:"middle",children:"Egyptian Braces | Mandatory Braces on All Conditionals"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Google Java Style guarantees consistency across large distributed engineering teams."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Clean Code Style Comparison Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Rule Element"}),e.jsx("th",{className:"p-3 font-semibold text-rose-400",children:"Anti-Pattern (Avoid)"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Google Style Standard (Required)"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Rationale"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Indentation"}),e.jsx("td",{className:"p-3 text-rose-300",children:"4 spaces or tabs (`\\t`)"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"Exactly 2 spaces"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Consistent display across all terminals and editors"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Imports"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`import java.util.*;`"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"`import java.util.List;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Prevents namespace pollution and name collisions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Magic Numbers"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`fee * 0.18;`"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"`fee * GST_TAX_RATE;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Self-documenting business intent"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Single-line Ifs"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`if (x < 0) return 0;`"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"`if (x < 0) { return 0; }`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Prevents dangling else and accidental multi-line bugs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Declarations"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`int x, y, z;`"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"`int x; int y; int z;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"One variable declaration per line enhances git diffs"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"GoogleJavaStyleCleanCodeDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program conforms strictly to the Google Java Style Guide, implementing student billing and invoice reporting."}),e.jsx(t,{fileModule:r,title:"GoogleJavaStyleCleanCodeDemo.java",highlightLines:[18,23,27,34,40,56,60,72,85,96]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Omitting Braces on Single-Line Conditionals"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if (err) return;"})," without braces makes code fragile to future line additions (e.g. Apple's famous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"goto fail;"})," SSL bug). Always wrap in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"{ ... }"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Automate Formatting with `google-java-format`"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Integrate ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"google-java-format"})," in your IDE on save and CI/CD pre-commit hooks to eliminate code style debates during code reviews entirely."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does Google Java Style require 100 characters per line instead of 80 or 120?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Multi-Window Productivity! A 100-character line width allows software engineers to comfortably view side-by-side code diffs and 3-way git merge windows simultaneously on standard 1080p and 4K displays!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Google Java Style Guide FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 001_008 Topic 10: Google Java Style Clean Code",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_008_topic10_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Code is read ten times more often than it is written. Writing clean, style-compliant code is the hallmark of a true professional. In Topic 11, we enter the Segment 1 Comprehensive Multiple Choice Question Exam! — Sukanta Hui"})})]})}export{b as default};

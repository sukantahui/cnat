import{j as e,b as i,bh as o}from"./vendor-react-core-CaA1o1Cx.js";import{J as l}from"./JavaFileLoader-BYsFDtcs.js";import{F as c}from"./FAQTemplate-D_90hN4m.js";import{P as d}from"./PlainTextPrint-yt10TRX1.js";import{T as h}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const m=`/**
 * ============================================================================
 * ICSE CLASS X - TOP 10 EXAMINER TRAPS & PREVENTION DEMO
 * ============================================================================
 * Educator: Sukanta Hui | Barrackpore, Kolkata
 * Institute: Coder & AccoTax
 * 
 * This class isolates and contrasts the 10 most lethal traps that cost ICSE
 * students marks every year in Section A snippets and Section B programs:
 * 
 * TRAP 1: Integer division truncation (e.g. 5/9 = 0 instead of 5.0/9)
 * TRAP 2: String comparison with == vs .equals()
 * TRAP 3: Math function return types (Math.ceil/floor returns double)
 * TRAP 4: Scanner buffer newline trap
 * TRAP 5: Off-by-one errors in String extraction
 * TRAP 6: Destructive digit extraction losing the original number
 * TRAP 7: Switch-case fall-through missing break
 * TRAP 8: Array length property vs String length() method
 * ============================================================================
 */

import java.util.Scanner;

public class ExaminerTrapsPreventionDemo {

    // TRAP 1: FAHRENHEIT TO CELSIUS (Integer Division)
    public static void demonstrateTrap1() {
        double f = 98.6;
        // FLAWED: (5 / 9) evaluates to 0 in integer arithmetic!
        double flawedC = (5 / 9) * (f - 32); 

        // CORRECT: (5.0 / 9.0) ensures double floating-point division
        double correctC = (5.0 / 9.0) * (f - 32);

        System.out.println("--- TRAP 1: INTEGER DIVISION ---");
        System.out.println("Flawed result (5/9)*(f-32)   : " + flawedC + " (Zero!)");
        System.out.printf("Correct result (5.0/9)*(f-32): %.2f °C\\n", correctC);
    }

    // TRAP 2: STRING EQUALITY (== vs .equals)
    public static void demonstrateTrap2() {
        String s1 = "KOLKATA";
        String s2 = new String("KOLKATA");

        System.out.println("\\n--- TRAP 2: STRING EQUALITY ---");
        System.out.println("s1 == s2      : " + (s1 == s2) + " (Compares memory references!)");
        System.out.println("s1.equals(s2) : " + s1.equals(s2) + " (Compares actual characters!)");
    }

    // TRAP 3: MATH FUNCTION RETURN TYPES
    public static void demonstrateTrap3() {
        System.out.println("\\n--- TRAP 3: MATH FUNCTION RETURN TYPES ---");
        // Math.ceil and Math.floor always return double, NOT int!
        double ceilVal = Math.ceil(4.2);
        double floorVal = Math.floor(4.8);
        System.out.println("Math.ceil(4.2)  : " + ceilVal + " (Type: double, NOT 5)");
        System.out.println("Math.floor(4.8) : " + floorVal + " (Type: double, NOT 4)");
        // Math.round returns long (for double) or int (for float)
        long roundVal = Math.round(4.8);
        System.out.println("Math.round(4.8) : " + roundVal + " (Type: long/int)");
    }

    // TRAP 4: DESTRUCTIVE DIGIT EXTRACTION
    public static void demonstrateTrap4(int num) {
        System.out.println("\\n--- TRAP 4: PRESERVING ORIGINAL NUMBER ---");
        // FLAWED: Modifying num directly leaves it at 0
        int temp = num; // CORRECT: Always work on a copy!
        int digitSum = 0;
        while (temp > 0) {
            digitSum += temp % 10;
            temp /= 10;
        }
        System.out.println("Original Number (preserved) : " + num);
        System.out.println("Sum of Digits               : " + digitSum);
    }

    // TRAP 5: ARRAY LENGTH VS STRING LENGTH()
    public static void demonstrateTrap5() {
        System.out.println("\\n--- TRAP 5: LENGTH PROPERTY VS METHOD ---");
        int[] arr = { 10, 20, 30, 40 };
        String str = "BARRACKPORE";

        System.out.println("Array length (no parentheses)  : arr.length = " + arr.length);
        System.out.println("String length (has parentheses): str.length() = " + str.length());
    }

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println(" ICSE EXAMINER TRAP PREVENTION DEMONSTRATION     ");
        System.out.println("==================================================");

        demonstrateTrap1();
        demonstrateTrap2();
        demonstrateTrap3();
        demonstrateTrap4(458);
        demonstrateTrap5();

        System.out.println("==================================================");
    }
}
`,u=`================================================================================
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS
MODULE 008_002: Selection Examination & Final ICSE Board Prep
TOPIC 3: Final Board Exam Tips, Presentation Rules & Error Prevention
Educator: Sukanta Hui | Barrackpore, Kolkata
================================================================================

1. CISCE ANSWER SCRIPT PRESENTATION GOLDEN RULES
--------------------------------------------------------------------------------
1. PEN & INK:
   - Use only BLUE or BLACK ink (ballpoint or fountain pen).
   - Use pencil and ruler for all borders, underlines, and tables.
   - Strictly NO red/green ink, NO whitener/correction fluid.

2. HEADINGS & NUMBERING:
   - Write section headings clearly: SECTION A or SECTION B.
   - Place question numbers prominently: e.g. "Question 3" in the left margin.
   - Never write question numbers inside code or body paragraphs.
   - Start every Section B program on a FRESH PAGE.

3. CORRECTIONS:
   - To cancel mistaken code, draw a single neat diagonal line.
   - Never scribble densely or create ink blots.

4. INDENTATION & BRACES:
   - Indent method bodies and loop blocks by 2-4 spaces.
   - Match every opening brace { with its closing brace } vertically.

2. TOP 10 LETHAL EXAMINER TRAPS TO PREVENT
--------------------------------------------------------------------------------
[1] INTEGER DIVISION   : (5/9) evaluates to 0. Write (5.0/9) or (5/9.0).
[2] STRING COMPARISON  : s1 == s2 checks heap address! Always use s1.equals(s2).
[3] MATH RETURN TYPES  : Math.ceil() and Math.floor() return double (e.g. 5.0).
[4] SCANNER BUFFER     : After sc.nextInt(), call sc.nextLine() before reading text.
[5] DESTRUCTIVE LOOPS  : Save original number in temp before while(temp > 0).
[6] SWITCH FALL-THROUGH: Watch out for missing break; statements in snippets.
[7] LENGTH CONFUSION   : Array uses arr.length (no ()). String uses str.length().
[8] OFF-BY-ONE STRINGS : Valid indices are 0 to str.length() - 1.
[9] CASE SENSITIVITY   : 'A' (65) != 'a' (97). Difference is 32.
[10] VDT OMISSION      : Always draw the 3-column VDT at the end of each program.

3. FINAL PRE-SUBMISSION AUDIT (LAST 10 MINUTES)
--------------------------------------------------------------------------------
[✓] Check Question 1: All 20 MCQs written with sub-part and option letter.
[✓] Check Question 2: All 10 snippets checked with trace tables in rough.
[✓] Check Section B : Exactly 4 programs attempted.
[✓] Check Class Code: Scanner imported, class header valid, methods called in main.
[✓] Check VDTs      : All 4 programs have a neat 3-column Variable Description Table.

================================================================================
End of Printable Note
================================================================================
`,p=[{question:"What are the official CISCE rules regarding pen color and answer script presentation?",shortAnswer:"Candidates must use either blue or black ballpoint or fountain pen for writing answers. Pencil may only be used for drawing diagrams, tables, and underlines.",explanation:"Do not use red or green ink under any circumstances (those are reserved for examiners and moderators). Write with a consistent shade of blue or black. Use a 2B or HB pencil with a clear ruler to draw box borders for tables, especially the Variable Description Table.",hint:"Carry at least 3 identical blue or black pens into the examination hall.",level:"basic",codeExample:"// Allowed: Blue / Black ink for text; Pencil for VDT borders & diagrams"},{question:"How should question numbers and sections be marked on the ICSE answer script?",shortAnswer:"Write the Section heading prominently in the center (e.g. 'SECTION A' or 'SECTION B'). Write the question number clearly in the left margin and center (e.g. 'Question 3').",explanation:"Never write question numbers inside your code or squeeze them into margins. Leave 2 blank lines between sub-questions in Question 1 and Question 2. If answering Section B, begin each 15-mark program on a fresh new page.",hint:"Starting each Section B program on a fresh page makes reading effortless for the examiner.",level:"basic",codeExample:`// SECTION B
// Question 3
public class ElectricBill { ... }`},{question:"Why does `(5 / 9) * (f - 32)` always evaluate to `0.0` in Java?",shortAnswer:"Because both 5 and 9 are integer literals. Integer division truncates the decimal part, giving 0. Then `0 * (f - 32)` is always 0.0.",explanation:"In Java, binary arithmetic on two integers produces an integer. `5 / 9` produces `0`. To fix this, write `(5.0 / 9)` or `(5 / 9.0)` or `((double) 5 / 9)` so the compiler performs floating-point division (`0.5555...`).",hint:"Always include `.0` in division constants for physics and math formulas.",level:"basic",codeExample:"double c = (5.0 / 9) * (f - 32); // Correct"},{question:"Why does `s1 == s2` fail when comparing strings accepted from `sc.nextLine()`?",shortAnswer:"`==` compares the memory addresses (references) of the two string objects on the heap, not their character contents.",explanation:"User input strings created at runtime are stored in distinct heap memory locations even if they contain the exact same characters. Always use `s1.equals(s2)` or `s1.equalsIgnoreCase(s2)` to compare string contents.",hint:"Never use `==` for String comparison in ICSE Java.",level:"basic",codeExample:`if (s1.equals(s2)) { ... } // Correct
if (s1 == s2) { ... }      // WRONG`},{question:"What is the return data type of `Math.ceil(x)` and `Math.floor(x)`?",shortAnswer:"Both `Math.ceil(x)` and `Math.floor(x)` return a primitive `double`, NOT an `int`.",explanation:"Even though `Math.ceil(4.2)` mathematically represents 5, in Java it returns the double value `5.0`. Writing `int ans = Math.ceil(4.2);` causes a compilation error (possible loss of precision). In Section A, writing `5` instead of `5.0` loses 1 mark.",hint:"Always include the decimal point: `5.0`, `-4.0`.",level:"intermediate",codeExample:`double r1 = Math.ceil(4.2);  // 5.0
double r2 = Math.floor(4.8); // 4.0`},{question:"What is the return data type of `Math.round(x)`?",shortAnswer:"`Math.round(double a)` returns a `long`; `Math.round(float a)` returns an `int`.",explanation:"Unlike ceil and floor, `Math.round()` returns an integral type: a 64-bit `long` when passed a `double`, or a 32-bit `int` when passed a `float`. For `Math.round(4.8)`, the result is `5` (an integer), not `5.0`.",hint:"`round` returns integer; `ceil` & `floor` return double.",level:"intermediate",codeExample:"long ans = Math.round(4.8); // 5 (type: long)"},{question:"What happens if you omit the `break` statement in a `switch-case` block?",shortAnswer:"Execution falls through and continues executing subsequent case blocks until a `break` is encountered or the switch block ends.",explanation:"This is called 'fall-through'. In ICSE Section A snippets, examiners frequently omit `break` on purpose to test if candidates notice that subsequent cases execute and overwrite output variables.",hint:"Carefully trace every case when `break;` is absent.",level:"intermediate",codeExample:`switch(ch) {
    case 1: x += 10; // no break!
    case 2: x += 20; break;
}`},{question:"How do you distinguish `arr.length` from `str.length()`?",shortAnswer:"`arr.length` is a public final instance variable (property) of an array (no parentheses), while `str.length()` is a member method of the String class (requires parentheses).",explanation:"Writing `arr.length()` on an array or `str.length` on a String produces a compilation error. Examiners frequently ask this difference in Question 2 short answer questions.",hint:"Arrays are built-in language structures (field); Strings are objects of a class (method).",level:"basic",codeExample:`int aLen = arr.length;   // No ()
int sLen = str.length(); // Has ()`},{question:"What is the consequence of modifying the original number during digit extraction loops?",shortAnswer:"The original number variable becomes `0` at loop termination, making it impossible to check if the sum/property equals the original number.",explanation:"In `while(num > 0) { sum += num % 10; num /= 10; }`, `num` becomes 0! If you later test `if (sum == num)`, it compares against 0. Always store a copy in a temporary variable: `int temp = num;`.",hint:"Always write: `int temp = num;` before the while loop.",level:"basic",codeExample:`int temp = num;
while(temp > 0) { ... temp /= 10; }
if (sum == num) // Safe!`},{question:"How should mistakes in code be corrected on the ICSE answer booklet?",shortAnswer:"Draw a single, clean diagonal strike with a pencil or pen through the wrong line, and write the corrected code clearly next to or below it.",explanation:"Never use correction fluid (whitener) - it is strictly banned in board examinations. Never create dense black scribbles. A single neat horizontal or diagonal line through erroneous code is the only accepted method.",hint:"Neat strike-through preserves the tidy appearance of your script.",level:"basic",codeExample:"// Draw one single clean line through erroneous code."},{question:"What is the difference between prefix and postfix increment in expression evaluation?",shortAnswer:"Prefix (`++x`) increments the variable first, then evaluates to the new value. Postfix (`x++`) evaluates to the current value first, then increments the variable.",explanation:"In `int p = 5; int q = p++ + ++p;`: `p++` uses 5 (then p becomes 6); `++p` increments p to 7 and uses 7. `q = 5 + 7 = 12`. Always write down step-by-step intermediate values in rough space.",hint:"Pre = change BEFORE use; Post = change AFTER use.",level:"intermediate",codeExample:`int x = 5;
int a = ++x; // x=6, a=6
int b = x++; // b=6, x=7`},{question:"Why should `Scanner` be imported and instantiated inside `main()` or member methods?",shortAnswer:"Because `Scanner` is located in package `java.util`. Without `import java.util.Scanner;`, the compiler throws 'cannot find symbol class Scanner'.",explanation:"Always write `import java.util.Scanner;` as the very first line above your class declaration in Section B programs. Inside the method, create `Scanner sc = new Scanner(System.in);`.",hint:"First line of every ICSE Section B program: `import java.util.Scanner;`.",level:"basic",codeExample:`import java.util.Scanner;
public class MyClass { ... }`},{question:"What is the difference between `print()` and `println()`?",shortAnswer:"`print()` displays the output and keeps the cursor on the same line; `println()` displays the output and moves the cursor to the beginning of the next line.",explanation:"Crucial for pattern printing (e.g. printing matrices or asterisk triangles): use `System.out.print()` inside the inner column loop, and `System.out.println()` after the inner loop to start a new row.",hint:"Pattern programs require combining both `print` and `println`.",level:"basic",codeExample:`for(int i=0; i<3; i++) {
    for(int j=0; j<3; j++) System.out.print("*");
    System.out.println();
}`},{question:"What is the difference between `compareTo()` and `compareToIgnoreCase()`?",shortAnswer:"`compareTo()` is case-sensitive and compares characters based on their exact ASCII/Unicode values; `compareToIgnoreCase()` ignores uppercase/lowercase differences.",explanation:'"A".compareTo("a") returns `65 - 97 = -32`. "A".compareToIgnoreCase("a") returns `0`. Examiners test this distinction in Section A MCQs and output snippets.',hint:"'A' is 65; 'a' is 97. Difference is always 32.",level:"intermediate",codeExample:`"CAT".compareTo("cat")           // -32
"CAT".compareToIgnoreCase("cat") // 0`},{question:"How does `substring(beginIndex, endIndex)` work when `beginIndex == endIndex`?",shortAnswer:'It returns an empty string `""` with length 0.',explanation:'The second parameter is exclusive. If both indices are identical (e.g. `"JAVA".substring(2, 2)`), zero characters are extracted and the result is `""`. If `beginIndex > endIndex`, a `StringIndexOutOfBoundsException` is thrown.',hint:"Length of result is always `endIndex - beginIndex`.",level:"intermediate",codeExample:'String empty = "COMPUTER".substring(3, 3); // ""'},{question:"What is an Escape Sequence and what are the most common ones in ICSE?",shortAnswer:"An escape sequence is a character combination consisting of a backslash (`\\`) followed by a letter or symbol that represents non-printable or special characters.",explanation:"Top ICSE escape sequences:\n- `\\n` : Newline\n- `\\t` : Horizontal Tab (moves cursor to next tab stop)\n- `\\\\` : Backslash character\n- `\\\"` : Double quote character\n- `\\'` : Single quote character",hint:"Useful for output prediction questions containing escape characters.",level:"basic",codeExample:'System.out.println("Hello\\tWorld\\nDone");'},{question:"Can an abstract method have a body `{}` in Java?",shortAnswer:"NO. An abstract method has only a declaration and signature ending with a semicolon, but NO body `{}`.",explanation:"Syntax: `abstract void calculate();`. The implementation must be provided by the inheriting subclass. ICSE questions frequently ask students to identify invalid syntax like `abstract void show() {}`.",hint:"Abstract methods end with semicolon `;`, never `{}`.",level:"intermediate",codeExample:`abstract void display(); // Correct
abstract void show() {}  // Syntax Error!`},{question:"What is the difference between a Class and an Object in ICSE theory?",shortAnswer:"A class is a blueprint, template, or user-defined data type that defines attributes and behaviors; an object is an identifiable entity, an instance of a class with state and behavior.",explanation:`Key contrasts:
1. Class is an abstraction / logical entity; Object is a physical reality / memory allocated entity.
2. Class definition does not allocate memory for instance variables; Object instantiation (\`new\`) allocates memory on the heap.
3. One class can produce multiple distinct objects.`,hint:"Class = Blueprint of a building; Object = The actual constructed building.",level:"basic",codeExample:"Dog d1 = new Dog(); // Dog = Class; d1 = Object"},{question:"What is the difference between static and non-static methods?",shortAnswer:"Static methods belong to the class itself and can be invoked without creating an object; non-static methods belong to an object and require an instantiated object to be called.",explanation:"Static methods (e.g. `Math.sqrt()`, `Character.isDigit()`) cannot access non-static instance variables directly. Non-static methods (e.g. `str.substring()`) operate on the specific object's instance fields.",hint:"Static methods use ClassName.methodName().",level:"intermediate",codeExample:`Math.pow(2, 3); // Static
str.length();   // Non-static`},{question:"Why should `sc.close()` be included at the end of `main()`?",shortAnswer:"`sc.close()` closes the underlying input stream, freeing system resources and demonstrating professional coding standards.",explanation:"While omitting `sc.close()` usually does not result in a mark deduction in ICSE, writing it signals complete mastery of Java resource management to the examiner.",hint:"Place `sc.close();` as the very last statement inside `main()`.",level:"basic",codeExample:"sc.close(); // Clean resource release"},{question:"What is the difference between an Exception and an Error in Java?",shortAnswer:"An Exception represents conditions that a reasonable application might want to catch and recover from; an Error represents serious problems (like OutOfMemoryError) that should not be caught.",explanation:"Exceptions include `ArrayIndexOutOfBoundsException`, `NullPointerException`, `NumberFormatException`. Both inherit from `Throwable`.",hint:"Exceptions are recoverable; Errors are fatal system crashes.",level:"advanced",codeExample:`// Exception: User input error
// Error: JVM memory depletion`},{question:"How should you write answers to Question 1 MCQs in your answer script?",shortAnswer:"Write the sub-part number, the correct option letter, and the option text clearly. Do NOT rewrite the question stem.",explanation:"Format: `Question 1`, followed by `(i) (B) int x = (int) 78.65;`, `(ii) (C) Encapsulation`. Writing both the option letter and text eliminates any ambiguity if handwriting is smudged.",hint:"Save precious time: do not copy the full question text.",level:"basic",codeExample:`(i) (B) int x = (int) 78.65;
(ii) (C) Encapsulation`},{question:"What should you do if an examination question appears ambiguous or contains a typo?",shortAnswer:"Solve the question based on the most reasonable standard interpretation, and state your assumption politely in a brief one-line note.",explanation:"CISCE evaluation committees review all ambiguous questions during marking key meetings and issue guidelines to award marks for multiple valid interpretations. Never leave it blank.",hint:"Write: 'Note: Assuming ascending order input...' and proceed.",level:"intermediate",codeExample:"// Assumption: The input array contains only positive integers."},{question:"What is the single most important habit that guarantees scoring 100/100 in ICSE Computer Applications?",shortAnswer:"Disciplined handwriting and double-checking: neat margins, distinct indentation for loops/methods, bordered VDTs with pencil, and a 15-minute final review.",explanation:"Nearly all students who know the syllabus score between 90 and 95. The leap to 100/100 happens through zero avoidable syntax mistakes, complete VDTs, and flawless presentation that leaves no opening for examiners to deduct a single mark.",hint:"Make it effortlessly easy and pleasurable for the examiner to award full marks.",level:"basic",codeExample:"// 100/100 = Clear Logic + Clean Indentation + Complete VDT"},{question:"What final routine should you follow the night before the examination?",shortAnswer:"Revise the 10-year special number definitions, wrapper class methods, Math functions, review your VDT column format, and sleep at least 7 hours.",explanation:"Do not attempt to write complex programs late into the night. Your brain needs rest to maintain peak concentration for loop dry runs and prefix/postfix traces under exam conditions.",hint:"Rest well, stay hydrated, and enter the hall with full confidence in your preparation.",level:"basic",codeExample:"// Golden Rule: Rest well, think clearly, execute with precision!"}],x=()=>{const[a,r]=i.useState(0),s=[{title:"Integer Division in Formulas",category:"Arithmetic Trap",flawedCode:"double c = (5 / 9) * (f - 32);",flawExplanation:"5 and 9 are integer literals. 5 / 9 truncates to 0 in integer arithmetic. Then 0 * (f - 32) evaluates to 0.0 regardless of the Fahrenheit value!",correctedCode:"double c = (5.0 / 9) * (f - 32);",correctionTip:"Append .0 to integer constants to force double floating-point division."},{title:"String Equality via == Operator",category:"Object Reference Trap",flawedCode:'if (s1 == s2) { System.out.println("Matching"); }',flawExplanation:"The == operator compares memory addresses (heap references), not character contents. For user-entered strings, s1 == s2 will almost always evaluate to false even if the text matches identically.",correctedCode:'if (s1.equals(s2)) { System.out.println("Matching"); }',correctionTip:"Always use .equals() for case-sensitive equality or .equalsIgnoreCase() for case-insensitive matching."},{title:"Math Library Return Types",category:"Data Type Precision Trap",flawedCode:`int ans = Math.ceil(4.2); // Compilation Error!
// Writing '5' in Section A instead of '5.0'`,flawExplanation:"Math.ceil() and Math.floor() return primitive double values, not int! Writing 5 instead of 5.0 in Section A output prediction questions forfeits 1 mark.",correctedCode:`double ans = Math.ceil(4.2); // returns 5.0
long roundAns = Math.round(4.8); // returns 5`,correctionTip:"Remember: ceil and floor return double (5.0); round returns long or int (5)."},{title:"Scanner Buffer Newline Leak",category:"Input Stream Trap",flawedCode:`int units = sc.nextInt();
String name = sc.nextLine(); // Reads empty line!`,flawExplanation:"sc.nextInt() only consumes numeric characters, leaving the newline '\\n' in the keyboard buffer. The subsequent sc.nextLine() immediately consumes that newline and returns an empty string!",correctedCode:`int units = sc.nextInt();
sc.nextLine(); // Clear buffer!
String name = sc.nextLine();`,correctionTip:"Insert an extra dummy sc.nextLine(); immediately after nextInt() or nextDouble() before reading strings."},{title:"Array length vs String length()",category:"Syntax Property Trap",flawedCode:`int a = arr.length(); // Compile Error!
int b = str.length;   // Compile Error!`,flawExplanation:"In Java, an array's length is an immutable public field (no parentheses: arr.length). In contrast, String's length is a member method (requires parentheses: str.length()).",correctedCode:`int a = arr.length;   // Correct for array
int b = str.length(); // Correct for String`,correctionTip:"Arrays are language structures (property); Strings are class objects (method)."},{title:"Switch-Case Fall-Through",category:"Control Flow Trap",flawedCode:`switch(ch) {
    case 1: x += 10; // Missing break!
    case 2: x += 20;
}`,flawExplanation:"If ch is 1, case 1 executes and then control immediately 'falls through' and executes case 2 as well, resulting in x increasing by 30 instead of 10!",correctedCode:`switch(ch) {
    case 1: x += 10; break;
    case 2: x += 20; break;
}`,correctionTip:"Check for missing break; statements when tracing Section A switch snippets."}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2",children:s.map((t,n)=>e.jsxs("button",{onClick:()=>r(n),className:o("p-3 rounded-xl border text-left transition-all",a===n?"bg-rose-500/10 border-rose-500/40 text-rose-300 font-semibold shadow-md shadow-rose-500/5":"bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("div",{className:"text-xs font-mono text-rose-400/80 mb-1",children:t.category}),e.jsx("div",{className:"text-xs line-clamp-2 leading-tight",children:t.title})]},n))}),(()=>{const t=s[a];return e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-rose-400/10 text-rose-400 border border-rose-400/20 mr-2",children:t.category}),e.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:t.title})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400",children:"❌ Fatal Mistake (Mark Deduction)"}),e.jsx("pre",{className:"p-3 rounded-lg bg-slate-950/60 text-xs font-mono text-rose-300 border border-rose-500/20 overflow-x-auto",children:t.flawedCode}),e.jsx("p",{className:"text-xs text-rose-200/90 leading-relaxed",children:t.flawExplanation})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400",children:"✓ Board-Approved Solution (Centum Grade)"}),e.jsx("pre",{className:"p-3 rounded-lg bg-slate-950/60 text-xs font-mono text-emerald-300 border border-emerald-500/20 overflow-x-auto",children:t.correctedCode}),e.jsx("p",{className:"text-xs text-emerald-200/90 leading-relaxed font-semibold",children:t.correctionTip})]})]})]})})()]})},E=()=>e.jsxs("div",{className:"space-y-12 text-slate-200",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
        `}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20",children:"Module 008_002 · Topic 3"}),e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20",children:"Final Board Exam Survival Guide"}),e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:"Presentation & Error Prevention"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Final Board Exam Tips, Presentation Rules, and Error Prevention"}),e.jsx("p",{className:"text-base text-slate-400 max-w-4xl leading-relaxed",children:"The ultimate ICSE Computer Applications examination blueprint: CISCE answer script presentation standards, the top 10 lethal examiner traps, and the step-by-step strategy for achieving a perfect 100/100."})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-5 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," The Psychology of a CISCE Computer Applications Examiner"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"A board examiner evaluates hundreds of scripts every day. An examiner does not want to read messy, cramped code with missing question numbers and unreadable handwriting. When a student presents:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5",children:[e.jsx("div",{className:"text-sm font-bold text-amber-400",children:"1. Clean Visual Hierarchy"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Clear section headers, prominent question numbering, and starting every Section B program on a fresh page."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5",children:[e.jsx("div",{className:"text-sm font-bold text-sky-400",children:"2. Structured Indentation"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Proper 2 to 4 space indentation for method blocks and loops, with matching curly braces ",e.jsx("code",{className:"text-sky-300",children:"{ }"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5",children:[e.jsx("div",{className:"text-sm font-bold text-emerald-400",children:"3. Neat Ruler-Drawn VDT"}),e.jsx("p",{className:"text-xs text-slate-400",children:"A bordered 3-column table listing every variable and its precise algorithmic purpose."})]})]}),e.jsx("p",{className:"text-xs text-slate-400 italic",children:'"When code looks clean, professional, and well-documented, the examiner immediately adopts a high-scoring mindset."'})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-6 shadow-lg",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"⚠️"})," The Top 6 Lethal Examiner Traps & Prevention Guide"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Click each trap to inspect how tiny syntax mistakes cause massive mark deductions, and see the exact Centum-grade corrections:"})]}),e.jsx(x,{})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-6 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," Official CISCE Answer Script Presentation Rules"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"✍️"})," Ink, Margins & Layout"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ink Color:"})," Use exclusively ",e.jsx("strong",{children:"BLUE"})," or ",e.jsx("strong",{children:"BLACK"})," pen. Never mix blue and black inks randomly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pencil Usage:"})," Use an HB/2B pencil and a transparent ruler for all table borders, VDT grids, and underlines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Red/Green Ink:"})," Strictly banned. Red is reserved for the head examiner, green for the chief moderator."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Whitener / Correction Fluid:"})," Banned under board examination regulations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Margins:"})," Maintain a 1-inch left margin. Do not write code spilling off the right edge of the page."]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"📋"})," Section B Program Formatting"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fresh Page Rule:"})," Begin every new 15-mark program at the top of a fresh new page."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Question Header:"})," Write ",e.jsx("code",{className:"text-amber-300 font-bold",children:"SECTION B - Question 3"})," prominently at the top."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import Scanner:"})," Write ",e.jsx("code",{className:"text-sky-300",children:"import java.util.Scanner;"})," as line 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inline Comments:"})," Add 2-3 brief comments (e.g. ",e.jsx("code",{className:"text-slate-400",children:"// Calculate slab charges"}),") to earn documentation marks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"VDT Placement:"})," Draw the Variable Description Table immediately after the closing brace of the class."]})]})]})]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," Examiner Traps Demonstration Source Code"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Runnable Java class demonstrating the 5 most lethal runtime and compile-time traps in action:"}),e.jsx(l,{fileModule:m,title:"ExaminerTrapsPreventionDemo.java",highlightLines:[23,26,38,39,49,50]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"✓"})," The 24-Hour Pre-Exam & Exam Hall Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-300",children:"The Night Before:"}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-1.5 list-disc pl-4",children:[e.jsx("li",{children:"Review the 8 Special Number definitions (Tech, Krishnamurthy, Automorphic, etc.)."}),e.jsx("li",{children:"Re-read String methods: substring, indexOf, lastIndexOf, compareTo, trim."}),e.jsx("li",{children:"Pack your geometry pouch: 3 identical pens, 2 sharpened pencils, ruler, eraser."}),e.jsx("li",{children:"Get at least 7 hours of uninterrupted sleep for mental clarity."})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-300",children:"In the Exam Hall (Last 10 Mins):"}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-1.5 list-disc pl-4",children:[e.jsx("li",{children:"Verify that Question 1 has all 20 MCQs answered with both part & option."}),e.jsx("li",{children:"Verify that Section B has exactly 4 programs attempted."}),e.jsx("li",{children:"Check that all 4 programs have a neat Variable Description Table."}),e.jsxs("li",{children:["Count opening ",e.jsx("code",{className:"text-sky-300",children:"{"})," and closing ",e.jsx("code",{className:"text-sky-300",children:"}"})," braces to ensure they balance."]})]})]})]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:'💡 Think About This: The "Attempt 5th Question" Myth'}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Students often ask: ",e.jsx("em",{children:'"Should I attempt a 5th question in Section B just in case?"'}),e.jsx("br",{}),e.jsx("strong",{children:"Teacher's Advice:"})," NO. Under CISCE evaluation instructions, examiners evaluate the FIRST 4 questions attempted and strike out any surplus questions (or mark them as 'Extra'). Spending 20 minutes writing an extra question wastes time that could have been used to eliminate errors, draw perfect VDTs, and review Section A snippets for a guaranteed 100/100!"]})]}),e.jsx(c,{title:"Board Exam Presentation & Trap Prevention FAQs",questions:p}),e.jsx(d,{content:u,title:"Module 008_002 Topic 3: Board Exam Survival Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Board Exam Survival Guide",downloadFileName:"008_002_selection-exam_topic3_survival_guide.txt"}),e.jsx(h,{note:"My dear students: You have worked tirelessly through your entire Class X Java curriculum — from JVM architecture to arrays, strings, constructors, and encapsulation. Walk into the examination room with heads held high and hearts calm. Read each question twice, write with pride and elegance, and conquer your paper. I have complete faith in each of you! — Sukanta Hui"})]});export{E as default};

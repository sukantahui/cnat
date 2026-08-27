import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 1: Rules of Writing Constructors: Name Matches Class, No Return Type\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The 5 Golden Rules of Constructor Syntax\r
 * ----------------------------------------------------------------------------\r
 * 1. RULE 1: Exact Name Match\r
 *    - The constructor name MUST match the enclosing class name with exact case sensitivity.\r
 *    - Example: Class \`CourseEnrollment\` -> Constructor \`public CourseEnrollment(...)\`.\r
 *\r
 * 2. RULE 2: No Return Type (Not Even 'void')\r
 *    - Constructors have NO return type whatsoever.\r
 *    - If you write \`public void CourseEnrollment(...)\`, the Java compiler treats it\r
 *      as a standard instance METHOD rather than a constructor!\r
 *\r
 * 3. RULE 3: Permitted Access Modifiers\r
 *    - Constructors CAN have: \`public\`, \`protected\`, package-private (no modifier), or \`private\`.\r
 *\r
 * 4. RULE 4: Prohibited Modifiers\r
 *    - Constructors CANNOT be: \`static\`, \`final\`, \`abstract\`, \`synchronized\`, \`native\`, or \`strictfp\`.\r
 *    - Attempting any of these produces a compile-time error.\r
 *\r
 * 5. RULE 5: Invocation Mechanism\r
 *    - Constructors CANNOT be called directly like normal methods (\`obj.CourseEnrollment()\`).\r
 *    - They are invoked ONLY via \`new\`, \`this(...)\`, or \`super(...)\`.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.util.Objects;\r
\r
public class ConstructorRulesAndSyntaxDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Part 1: THE TRAP - Accidental 'void' Method vs True Constructor\r
    // ------------------------------------------------------------------------\r
    public static class CourseRegistrationTrap {\r
        private String studentName;\r
        private double feeInr;\r
        private boolean isProperlyConstructed = false;\r
\r
        // --- TRAP: THIS IS A METHOD, NOT A CONSTRUCTOR! ---\r
        // Notice the 'void' return type!\r
        public void CourseRegistrationTrap(String name, double fee) {\r
            System.out.println("  [ACCIDENTAL METHOD EXECUTED] This is a NORMAL METHOD, not a constructor!");\r
            this.studentName = name;\r
            this.feeInr = fee;\r
            this.isProperlyConstructed = true;\r
        }\r
\r
        // Implicit default no-arg constructor runs when 'new CourseRegistrationTrap()' is called!\r
\r
        public String getStudentName() { return studentName; }\r
        public double getFeeInr() { return feeInr; }\r
        public boolean isProperlyConstructed() { return isProperlyConstructed; }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Part 2: THE PROPER CONSTRUCTOR - Compliant with All 5 Golden Rules\r
    // ------------------------------------------------------------------------\r
    public static class ProperCourseRegistration {\r
        private final int registrationId;\r
        private final String studentName;\r
        private final String campusLocation;\r
        private final double feeInr;\r
        private final boolean isScholarshipGranted;\r
\r
        // --- TRUE CONSTRUCTOR: Name matches class, NO return type ---\r
        public ProperCourseRegistration(int regId, String name, String campus, double fee, boolean scholarship) {\r
            if (regId <= 0) throw new IllegalArgumentException("Registration ID must be positive.");\r
            if (fee < 0.0) throw new IllegalArgumentException("Fee cannot be negative.");\r
\r
            this.registrationId = regId;\r
            this.studentName = Objects.requireNonNull(name, "Name required").trim();\r
            this.campusLocation = Objects.requireNonNull(campus, "Campus required").trim();\r
            this.feeInr = fee;\r
            this.isScholarshipGranted = scholarship;\r
\r
            System.out.printf("  [PROPER CONSTRUCTOR] Initialized Registration REG-%04d for %s at %s.\\n",\r
                    this.registrationId, this.studentName, this.campusLocation);\r
        }\r
\r
        public int getRegistrationId() { return registrationId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCampusLocation() { return campusLocation; }\r
        public double getFeeInr() { return feeInr; }\r
        public boolean isScholarshipGranted() { return isScholarshipGranted; }\r
\r
        public void printBadge() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | REGISTRATION BADGE: REG-%05d                             |\\n", registrationId);\r
            System.out.printf("  | Student Name      : %-39s |\\n", studentName);\r
            System.out.printf("  | Campus Location   : %-39s |\\n", campusLocation);\r
            System.out.printf("  | Course Fee        : ₹%-38.2f |\\n", feeInr);\r
            System.out.printf("  | Has Scholarship   : %-39b |\\n", isScholarshipGranted);\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Demonstrating Constructor Rules & The 'void' Method Trap\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: RULES OF WRITING CONSTRUCTORS & THE 'void' TRAP");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: The 'void' Constructor Trap in Action\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: The Accidental 'void' Return Type Trap");\r
        System.out.println("Executing: CourseRegistrationTrap trap = new CourseRegistrationTrap();");\r
        CourseRegistrationTrap trap = new CourseRegistrationTrap();\r
\r
        System.out.println("Checking fields right after 'new':");\r
        System.out.println("  studentName           : " + trap.getStudentName() + " (null!)");\r
        System.out.println("  feeInr                : ₹" + trap.getFeeInr() + " (0.0!)");\r
        System.out.println("  isProperlyConstructed : " + trap.isProperlyConstructed() + " (false!)");\r
        System.out.println("Why? Because 'public void CourseRegistrationTrap' was treated as a METHOD and was NEVER executed by 'new'!");\r
\r
        System.out.println("\\nManually invoking the fake constructor method: trap.CourseRegistrationTrap(\\"Swadeep\\", 8500.0);");\r
        trap.CourseRegistrationTrap("Swadeep Paul", 8500.0);\r
        System.out.println("  studentName after method call: " + trap.getStudentName());\r
        System.out.println("  Result: Adding 'void' completely destroys constructor semantics!\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: The 5 Golden Rules in Proper Construction\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 2: Proper Constructor Invocation (Swadeep Paul - Barrackpore Hub)");\r
        ProperCourseRegistration regSwadeep = new ProperCourseRegistration(\r
                101, "Swadeep Paul", "Barrackpore Hub", 12000.00, true\r
        );\r
        regSwadeep.printBadge();\r
\r
        System.out.println("\\n>>> DEMO 3: Proper Constructor Invocation (Tuhina Das - Naihati Hub)");\r
        ProperCourseRegistration regTuhina = new ProperCourseRegistration(\r
                102, "Tuhina Das", "Naihati Hub", 14500.00, true\r
        );\r
        regTuhina.printBadge();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Summary of Permitted and Prohibited Modifiers\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Constructor Modifiers Summary");\r
        System.out.println("  [PERMITTED MODIFIERS]:");\r
        System.out.println("    &check; public          : Accessible globally across all packages");\r
        System.out.println("    &check; protected       : Accessible in same package + cross-package subclasses");\r
        System.out.println("    &check; default (none)  : Accessible strictly within same package");\r
        System.out.println("    &check; private         : Accessible only within enclosing class (Singletons/Utility)");\r
        System.out.println("\\n  [PROHIBITED MODIFIERS (Causes Compile-Time Error)]:");\r
        System.out.println("    &cross; static          : Compile Error (No 'this' instance context)");\r
        System.out.println("    &cross; final           : Compile Error (Constructors are never overridden)");\r
        System.out.println("    &cross; abstract        : Compile Error (Constructors must have bodies to init memory)");\r
        System.out.println("    &cross; synchronized    : Compile Error (Creating thread has exclusive access)");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CONSTRUCTOR RULES & SYNTAX DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 1: Rules of Writing Constructors: Name Matches Class, No Return Type\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 5 GOLDEN RULES OF CONSTRUCTOR DECLARATION:\r
   -----------------------------------------------------------------------------\r
   RULE 1: EXACT NAME MATCH\r
           - Must match the class name with exact case sensitivity.\r
           - Class \`CourseRegistration\` -> \`public CourseRegistration(...)\`.\r
\r
   RULE 2: NO RETURN TYPE (NOT EVEN 'void')\r
           - Has NO return type.\r
           - Adding \`void\` turns it into a NORMAL METHOD, never executed by \`new\`!\r
\r
   RULE 3: PERMITTED ACCESS MODIFIERS\r
           - \`public\`, \`protected\`, package-private (default), or \`private\`.\r
\r
   RULE 4: PROHIBITED MODIFIERS (Causes Compile Error)\r
           - CANNOT be \`static\`, \`final\`, \`abstract\`, \`synchronized\`, or \`native\`.\r
\r
   RULE 5: INVOCATION MECHANISM\r
           - Cannot be invoked on existing objects like methods (\`obj.Constructor()\`).\r
           - Invoked ONLY via \`new\`, \`this(...)\`, or \`super(...)\`.\r
   -----------------------------------------------------------------------------\r
\r
2. THE 'void' CONSTRUCTOR TRAP:\r
   - \`public void Student() { ... }\` is a METHOD, NOT a constructor!\r
   - When calling \`new Student()\`, the compiler default constructor executes,\r
     leaving all your initialization fields as \`null\` and \`0\`!\r
\r
3. CONSTRUCTOR INHERITANCE:\r
   - Constructors are NOT members and are NEVER inherited by subclasses.\r
   - Child constructors MUST invoke parent constructors via \`super(...)\`.\r
\r
4. BYTECODE INSTRUCTION:\r
   - The JVM compiles constructors into special \`<init>\` methods invoked via\r
     the \`invokespecial\` opcode (early static binding).\r
\r
5. SUKANTA HUI'S GOLDEN MOTTO:\r
   - "A constructor is not a method; it has no return type, bears the proud\r
      name of its class, and exists solely to forge a valid living object in memory."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What are the two mandatory syntax rules for declaring a Constructor in Java?",shortAnswer:"1. The constructor name MUST exactly match the class name (case-sensitive). 2. It MUST NOT declare any return type (not even 'void').",explanation:"Unlike methods, constructors have no return type and share the exact identifier of their enclosing class. Violating either rule causes a compile error or converts the constructor into a regular method.",hint:"Exact class name + No return type.",level:"Beginner",codeExample:`public class Trainee {
    public Trainee() { /* Valid Constructor */ }
}`},{question:"What happens if you accidentally add 'void' as the return type to a constructor?",shortAnswer:"It ceases to be a constructor and becomes a standard instance method that is NEVER executed by the 'new' operator.",explanation:"Writing 'public void Student()' defines a regular method named Student. When 'new Student()' is executed, the JVM calls the compiler's default no-arg constructor, leaving your initialization logic untouched!",hint:"Adding 'void' creates a regular method, not a constructor.",level:"Beginner",codeExample:`// THE VOID TRAP:
public void Student() { this.name = "Swadeep"; } // Method! Never runs during 'new Student()'`},{question:"Is constructor naming in Java case-sensitive?",shortAnswer:"Yes! Java is strictly case-sensitive. The constructor name must match the class name with exact casing.",explanation:"If the class is named 'StudentAccount', writing 'public studentaccount()' results in a compile-time error: 'invalid method declaration; return type required' (because javac thinks it's a method without a return type).",hint:"Exact case matching is mandatory.",level:"Beginner",codeExample:`// Class: public class StudentAccount {}
// Valid:   public StudentAccount() {}
// Invalid: public studentAccount() {} // Compile error!`},{question:"Which Access Modifiers can be applied to a constructor in Java?",shortAnswer:"All 4 standard access modifiers: public, protected, package-private (no modifier), and private.",explanation:"Constructor visibility controls who is permitted to instantiate the class. Public allows universal instantiation; protected allows same package + subclasses; package-private allows same package; private restricts to the class itself.",hint:"All 4 access modifiers: public, protected, default, private.",level:"Beginner",codeExample:`public Student() {}
protected Student(int id) {}
Student(String name) {}
private Student(long ssn) {}`},{question:"Why does the Java compiler prohibit the 'static' modifier on constructors?",shortAnswer:"Because a constructor's fundamental purpose is to initialize a specific 'this' instance on the Heap, while static members execute without any instance context.",explanation:"Constructors operate directly on the newly allocated Heap instance referenced by 'this'. Since static members have no 'this' pointer, marking a constructor static is impossible.",hint:"Constructors initialize 'this'; static has no 'this'.",level:"Intermediate",codeExample:"// Compile Error: public static Student() {} // modifier static not allowed here"},{question:"Why does the Java compiler prohibit the 'final' modifier on constructors?",shortAnswer:"Because 'final' prevents method overriding in subclasses, but constructors are NEVER inherited or overridden in the first place.",explanation:"Since constructors cannot be inherited or overridden by child classes, applying 'final' is redundant and syntactically prohibited.",hint:"Constructors cannot be overridden, making 'final' illegal.",level:"Beginner",codeExample:"// Compile Error: public final Student() {} // modifier final not allowed here"},{question:"Why does the Java compiler prohibit the 'abstract' modifier on constructors?",shortAnswer:"Because abstract methods have no execution body, but an object cannot be constructed without an executing body to initialize allocated Heap memory.",explanation:"Constructors must contain executable initialization bytecode. Declaring an abstract constructor would leave the newly allocated memory uninitialized, violating JVM safety.",hint:"Constructors must have bodies to initialize memory.",level:"Beginner",codeExample:"// Compile Error: public abstract Student(); // modifier abstract not allowed here"},{question:"Why does the Java compiler prohibit the 'synchronized' modifier on constructors?",shortAnswer:"Because only the thread executing 'new' has access to the newly allocated instance until construction finishes, making synchronization locks redundant.",explanation:"While an object is undergoing construction, no other thread holds a reference to it. The creating thread has exclusive access, so acquiring an object monitor is unnecessary.",hint:"Constructing thread already has exclusive access.",level:"Advanced",codeExample:"// Compile Error: public synchronized Student() {} // modifier synchronized not allowed here"},{question:"Can a constructor be declared with 'native' or 'strictfp' modifiers?",shortAnswer:"No! Neither 'native' nor 'strictfp' is permitted on constructors in modern Java.",explanation:"Constructors must be implemented in Java bytecode (not native C/C++ libraries), so 'native' is prohibited. 'strictfp' on individual methods/constructors was deprecated/removed in Java 17.",hint:"Native and strictfp are prohibited on constructors.",level:"Advanced",codeExample:"// Compile Error: public native Student();"},{question:"Can a constructor have parameters with the EXACT same names as the instance variables?",shortAnswer:"Yes! This is standard Java idiom, and the 'this.' keyword is used to disambiguate the field from the parameter.",explanation:"When parameter names shadow instance fields ('public Student(int id) { this.id = id; }'), 'this.id' refers to the Heap instance variable, while 'id' refers to the parameter.",hint:"Use 'this.' to resolve variable shadowing.",level:"Beginner",codeExample:`public Trainee(int rollNumber, String studentName) {
    this.rollNumber = rollNumber;
    this.studentName = studentName;
}`},{question:"Can a constructor invoke instance methods of the same class?",shortAnswer:"Yes! However, it should only invoke 'final' or 'private' methods to prevent subclasses from executing overridden methods on uninitialized child state.",explanation:"Calling an overridable method inside a constructor allows a subclass to execute its override BEFORE the subclass constructor has run, causing NullPointerExceptions.",hint:"Only invoke private or final methods from constructors.",level:"Advanced",codeExample:"public Account(double bal) { validateBalancePrivate(bal); this.balance = bal; }"},{question:"Can a constructor contain a 'return' statement without a value?",shortAnswer:"Yes! A plain 'return;' statement is completely legal in a constructor to terminate execution early.",explanation:"Writing 'return;' exits the constructor body early. However, writing 'return value;' (returning a value) is a compile-time error.",hint:"Plain 'return;' is valid; returning a value is illegal.",level:"Intermediate",codeExample:`public Student(int score) {
    if (score < 0) return; // Early exit (Legal!)
    this.score = score;
}`},{question:"What happens if a developer writes 'return 10;' inside a constructor?",shortAnswer:"A compile-time error occurs: 'cannot return a value from a constructor'.",explanation:"Constructors have no return type and cannot return expressions or values. The only value produced by a constructor expression is the object reference managed by the JVM.",hint:"Returning any expression from a constructor is a compile error.",level:"Beginner",codeExample:"// Compile Error: public Student() { return 10; }"},{question:"Can a constructor be invoked directly on an existing object like a method (e.g. 'obj.Student()')?",shortAnswer:"No! Constructors can NEVER be called explicitly on an object reference after instantiation.",explanation:"Constructors are invoked ONLY during object birth via 'new', or via constructor chaining ('this(...)' / 'super(...)'). You cannot re-invoke a constructor on an already existing object.",hint:"Constructors cannot be called on existing object instances.",level:"Beginner",codeExample:`Student s = new Student();
// s.Student(); // COMPILE ERROR: cannot find symbol method Student()`},{question:"How does the Java compiler differentiate between a class constructor and an instance method named identically to the class?",shortAnswer:"By the presence or absence of a return type. A constructor has NO return type; a method MUST declare a return type (e.g. void, int, String).",explanation:"If a method signature declares a return type (e.g. 'public void Student()'), javac registers it in the method table rather than the constructor '<init>' table.",hint:"Absence of return type indicates a constructor.",level:"Beginner",codeExample:`public Student() {}      // Constructor (<init> in bytecode)
public void Student() {} // Method (named Student in bytecode)`},{question:"Can a class have BOTH a constructor and a method with the EXACT same name?",shortAnswer:"Yes! Java allows declaring a method with the same name as the class (though it is considered terrible coding practice).",explanation:"Writing a method with the class's name compiles cleanly, but generates IDE compiler warnings ('Method name is same as class name') and causes massive confusion.",hint:"Compiles, but violates naming conventions and causes bugs.",level:"Intermediate",codeExample:`public class Demo {
    public Demo() {}     // Constructor
    public void Demo() {} // Method (terrible practice!)
}`},{question:"What is the bytecode instruction used by the JVM to invoke a constructor?",shortAnswer:"'invokespecial'.",explanation:"Unlike normal virtual methods which use 'invokevirtual' (dynamic vtable dispatch), constructors use 'invokespecial' for static early binding to the class's '<init>' method.",hint:"invokespecial is used for constructor invocations.",level:"Advanced",codeExample:'// Bytecode: 4: invokespecial #1 // Method "<init>":()V'},{question:"What are the valid parameter types for a constructor?",shortAnswer:"Any valid Java type: primitives, object references, arrays, generics, functional interfaces, and varargs.",explanation:"Constructors have full parameter flexibility identical to normal methods, supporting any combination of data types required for initialization.",hint:"All primitive and reference types are supported.",level:"Beginner",codeExample:"public Profile(int id, String name, List<String> skills, Consumer<Profile> callback) { ... }"},{question:"Can a constructor have Generic Type Parameters (e.g. '<T> Student(T data)')?",shortAnswer:"Yes! Constructors can declare their own generic type parameters independently of the class's generic type parameters.",explanation:"You can write generic constructors that accept type-parameterized arguments, enhancing type safety during object construction.",hint:"Generic type parameters can be declared on constructors.",level:"Advanced",codeExample:`public class Container {
    public <T> Container(T element) { ... }
}`},{question:"What happens if a constructor is declared 'private' and a developer tries to instantiate it with 'new' from another class?",shortAnswer:"A compile-time error occurs: '<ConstructorName> has private access in <ClassName>'.",explanation:"Private access limits instantiation strictly to the declaring class. Outside callers cannot invoke 'new' on a private constructor.",hint:"Private constructors block external 'new' instantiations.",level:"Beginner",codeExample:"// Compile Error: 'Student() has private access in Student'"},{question:"Can a constructor declare checked exceptions in its 'throws' clause?",shortAnswer:"Yes! A constructor can declare any checked exception (e.g. throws IOException, SQLException).",explanation:"If object initialization requires opening a file or database connection that might fail, declaring checked exceptions on the constructor forces callers to wrap 'new' in try-catch.",hint:"Constructors can declare checked exceptions in 'throws' clause.",level:"Intermediate",codeExample:`public FileLogger(String path) throws IOException {
    this.writer = new FileWriter(path);
}`},{question:"If a parent class constructor throws a checked exception, what MUST the child constructor do?",shortAnswer:"The child constructor MUST declare the same checked exception or a broader superclass exception in its own 'throws' clause.",explanation:"Because the child constructor automatically invokes the parent constructor via 'super()', the child constructor cannot catch the parent exception during super() and must propagate it.",hint:"Child constructor must declare parent constructor exceptions.",level:"Advanced",codeExample:`class Parent { Parent() throws IOException {} }
class Child extends Parent { Child() throws IOException { super(); } }`},{question:"What is the visibility of the default constructor generated by the compiler?",shortAnswer:"It inherits the EXACT same access modifier as its enclosing class (public if class is public; default if class is default).",explanation:"If the class is declared 'public class Account', the compiler generates 'public Account()'. If the class has package-private access, the constructor has package-private access.",hint:"Default constructor matches class visibility.",level:"Intermediate",codeExample:"// 'public class Student {}' -> Compiler generates: 'public Student() { super(); }'"},{question:"Can an abstract class have constructors?",shortAnswer:"Yes! Abstract classes have constructors to initialize inherited parent fields when subclasses are instantiated.",explanation:"Although abstract classes cannot be directly instantiated with 'new AbstractClass()', their constructors execute whenever a concrete child class is created via 'super()'.",hint:"Abstract classes have constructors invoked via super() by subclasses.",level:"Intermediate",codeExample:`abstract class Person {
    private String name;
    public Person(String name) { this.name = name; } // Subclass calls via super(name)
}`},{question:"Can an Interface in Java have a constructor?",shortAnswer:"No! Interfaces cannot declare constructors under any circumstances.",explanation:"Interfaces do not maintain instance state or Heap memory layouts; they only define abstract contracts and static constants, so constructors are strictly forbidden.",hint:"Interfaces cannot have constructors.",level:"Beginner",codeExample:"// Compile Error in Interface: interface Worker { Worker(); } // Illegal in interface"},{question:"Can an Enum class in Java have 'public' or 'protected' constructors?",shortAnswer:"No! Enum constructors in Java are implicitly private and cannot be declared public or protected.",explanation:"Enum constants represent a fixed, compile-time set of instances. Allowing public enum constructors would permit creating unauthorized enum values with 'new'.",hint:"Enum constructors are strictly private.",level:"Intermediate",codeExample:"// Compile Error: enum Campus { BARRACKPORE; public Campus() {} } // Modifier public not allowed"},{question:"What is the difference between a Constructor and an Instance Initialization Block (IIB)?",shortAnswer:"A constructor runs for a specific parameter signature; an IIB runs for EVERY constructor before the constructor body executes.",explanation:"IIBs allow writing shared initialization code that applies uniformly across all constructors before any constructor-specific code runs.",hint:"IIB runs uniformly across all constructor invocations.",level:"Intermediate",codeExample:`class Student {
    { System.out.println("IIB runs"); }
    Student() { System.out.println("Constructor runs"); }
}`},{question:"Why does the Java compiler flag 'this.constructorName()' as an error?",shortAnswer:"Because constructors are not methods; to call another constructor in the same class, the keyword 'this(...)' must be used.",explanation:"Writing 'this.Student()' attempts to call a method named Student. To invoke a constructor, write 'this()' or 'this(arg)'.",hint:"Use 'this(...)', not 'this.ClassName()'.",level:"Beginner",codeExample:`// WRONG: this.Student("Swadeep");
// CORRECT: this("Swadeep");`},{question:"What is the order of execution between Field Initializers, IIBs, and Constructor Body?",shortAnswer:"1. Field Initializers & IIBs execute in textual order -> 2. Constructor body executes.",explanation:"When 'new' runs, instance field default assignments and IIBs run in the order they appear in source code, followed immediately by the body of the constructor.",hint:"Field initializers + IIBs run before constructor body.",level:"Intermediate",codeExample:`int x = 10; // 1. Runs first
{ x = 20; }  // 2. Runs second (IIB)
Demo() { x = 30; } // 3. Runs third (Constructor)`},{question:"What is Sukanta Hui's Law of Constructor Purity at the Barrackpore Academy?",shortAnswer:"A constructor is not a method; it has no return type, bears the proud name of its class, and exists solely to forge a valid living object in memory.",explanation:"At the Barrackpore campus, Sukanta Hui teaches that constructor purity is the cornerstone of robust object architecture. Respect the 5 golden rules, never poison a constructor with 'void', and ensure every instance is forged with validated state and unshakeable domain truth.",hint:"Exact name match, zero return type, unshakeable domain truth.",level:"Beginner",codeExample:"// Sukanta Hui's Constructor Rule Checklist: Exact Name + No Return Type + Invariant Validation"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes syntaxGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-syntax {
            animation: syntaxGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Constructor Syntax & Rules"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Rules of Writing Constructors: Name Matches Class, No Return Type"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the exact grammatical laws and compiler constraints governing constructor declarations in Java: exploring exact case-sensitive name matching, the catastrophic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'void'"})," return type trap, permitted access modifiers, and analyzing why ",e.jsx("code",{className:"text-amber-400 font-mono",children:"static"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"final"}),", and ",e.jsx("code",{className:"text-amber-400 font-mono",children:"abstract"})," are strictly forbidden."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"📜"})," The 5 Golden Rules of Constructor Declaration"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Constructors occupy a unique syntactic position in Java, governed by 5 uncompromisable compiler rules:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"1. Exact Name Match"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Constructor identifier must match the class name with 100% exact case sensitivity (",e.jsx("code",{className:"text-purple-300 font-mono",children:"public CourseRegistration(...)"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-500/30",children:[e.jsx("h3",{className:"text-rose-400 font-bold text-sm mb-1",children:"2. Zero Return Type"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Must NOT declare any return type. Adding ",e.jsx("code",{className:"text-rose-300 font-mono",children:"void"})," converts it into a standard method that ",e.jsx("code",{className:"text-rose-300 font-mono",children:"new"})," will never run!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"3. Permitted Visibility"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Can be declared ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"public"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"protected"}),", package-private, or ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"private"}),"."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Classroom Case Study (The 'void' Constructor Trap in Barrackpore Hub):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," wrote ",e.jsx("code",{className:"text-rose-400 font-mono",children:"public void CourseRegistrationTrap(...)"}),", the compiler treated it as a regular instance method. When ",e.jsx("code",{className:"text-slate-200 font-mono",children:"new CourseRegistrationTrap()"})," was executed, the compiler's default no-arg constructor ran instead, leaving his fee as ",e.jsx("code",{className:"text-amber-300 font-mono",children:"₹0.0"})," and name as ",e.jsx("code",{className:"text-rose-400 font-mono",children:"null"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Constructor Grammar: Permitted Modifiers vs Prohibited Keywords"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing the syntactic anatomy and compiler rules of Java constructors:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 320",className:"w-full h-auto","aria-label":"Constructor Syntax and Modifier Rules Diagram",children:[e.jsx("rect",{x:"25",y:"25",width:"260",height:"270",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"155",y:"52",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"PERMITTED MODIFIERS"}),e.jsx("text",{x:"155",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Access Control Scopes"}),e.jsx("rect",{x:"35",y:"85",width:"240",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"110",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"&check; public Student(...) [Global]"}),e.jsx("rect",{x:"35",y:"135",width:"240",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"160",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"&check; protected Student(...) [Pkg+Sub]"}),e.jsx("rect",{x:"35",y:"185",width:"240",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"210",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"&check; Student(...) [Package-Private]"}),e.jsx("rect",{x:"35",y:"235",width:"240",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"260",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"&check; private Student(...) [Singleton]"}),e.jsx("rect",{x:"305",y:"25",width:"310",height:"270",rx:"10",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"52",fill:"#c084fc",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"ANATOMY OF A TRUE CONSTRUCTOR"}),e.jsx("text",{x:"460",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Compiler Verified Signature"}),e.jsx("rect",{x:"315",y:"85",width:"290",height:"60",rx:"6",fill:"#1e1b4b",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"325",y:"105",fill:"#f3e8ff",fontSize:"10",fontWeight:"bold",children:"Signature Anatomy:"}),e.jsx("text",{x:"325",y:"125",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:"public Student(int id, String name)"}),e.jsx("text",{x:"325",y:"138",fill:"#c7d2fe",fontSize:"8",children:"→ NO return type! Name matches 'Student'"}),e.jsx("rect",{x:"315",y:"155",width:"290",height:"120",rx:"6",fill:"#022c22",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"325",y:"175",fill:"#34d399",fontSize:"9",fontWeight:"bold",children:"Execution Characteristics:"}),e.jsx("text",{x:"325",y:"195",fill:"#a7f3d0",fontSize:"8",children:"• Bytecode name: <init>"}),e.jsx("text",{x:"325",y:"210",fill:"#a7f3d0",fontSize:"8",children:"• Opcode: invokespecial"}),e.jsx("text",{x:"325",y:"225",fill:"#a7f3d0",fontSize:"8",children:"• Invoked ONLY via 'new', this(), super()"}),e.jsx("text",{x:"325",y:"255",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; Forges living Heap instance"}),e.jsx("rect",{x:"635",y:"25",width:"260",height:"270",rx:"10",fill:"#0f172a",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"765",y:"52",fill:"#f87171",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"PROHIBITED MODIFIERS"}),e.jsx("text",{x:"765",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Compiler Enforced Illegal Keywords"}),e.jsx("rect",{x:"645",y:"85",width:"240",height:"40",rx:"4",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"655",y:"110",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"× static (No 'this' context)"}),e.jsx("rect",{x:"645",y:"135",width:"240",height:"40",rx:"4",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"655",y:"160",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"× final (Never overridden)"}),e.jsx("rect",{x:"645",y:"185",width:"240",height:"40",rx:"4",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"655",y:"210",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"× abstract (Must have body)"}),e.jsx("rect",{x:"645",y:"235",width:"240",height:"40",rx:"4",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"655",y:"260",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"× synchronized (Thread exclusive)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"ConstructorRulesAndSyntaxDemo.java"})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:["The executable Java code below demonstrates the real-world trap of adding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"void"})," to a constructor, contrasting it with a 100% rule-compliant constructor:"]}),e.jsx(t,{fileName:"ConstructorRulesAndSyntaxDemo.java",code:a})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Syntax Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Case-Sensitive Exact Match"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["The constructor name must match the class name with exact casing. Mismatched casing causes a compile error: ",e.jsx("code",{className:"text-rose-300 font-mono",children:"invalid method declaration; return type required"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," The 'void' Return Type Trap"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Adding ",e.jsx("code",{className:"text-rose-300 font-mono",children:"void"})," transforms the constructor into a standard instance method. Calling ",e.jsx("code",{className:"text-slate-300 font-mono",children:"new ClassName()"})," will bypass your method entirely!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Prohibited Modifiers"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Constructors can NEVER be marked ",e.jsx("code",{className:"text-purple-300 font-mono",children:"static"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"final"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"abstract"}),", or ",e.jsx("code",{className:"text-purple-300 font-mono",children:"synchronized"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Plain 'return;' is Legal"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["A constructor can contain a plain ",e.jsx("code",{className:"text-amber-300 font-mono",children:"return;"})," statement for early exit, but returning any value (",e.jsx("code",{className:"text-rose-400 font-mono",children:"return val;"}),") causes a compile error."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Calling Constructor Directly on Existing Object"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Attempting to call ",e.jsx("code",{className:"text-rose-300 font-mono",children:"obj.Student()"})," on an already existing instance causes a compile error. Constructors are not methods and cannot be re-invoked."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// COMPILE ERROR:
Student s = new Student();
s.Student(); // cannot find symbol method Student()`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Invoke via 'new' or Constructor Chaining"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Constructors are invoked strictly during instantiation with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"new"})," or chained via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this(...)"})," / ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"super(...)"}),"."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// CORRECT INVOCATION:
Student s = new Student("Swadeep"); // 'new' invokes constructor
public Student() { this("Swadeep"); } // 'this()' chains`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-emerald-500/10 p-6 md:p-8 rounded-2xl border border-purple-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why does Java allow methods to have the exact same name as the class?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Java allows a regular method to be named ",e.jsx("code",{className:"text-purple-300 font-mono",children:"public void Student()"})," for historical backward compatibility with C++ syntax parsers. However, modern IDEs flag this as a critical warning (",e.jsx("code",{className:"text-amber-300 font-mono",children:"“Method name is same as class name”"}),"). In professional enterprise code, naming a method after the class is considered an egregious anti-pattern that leads to severe initialization bugs!"]})]}),e.jsx(s,{quote:"A constructor is not a method; it has no return type, bears the proud name of its class, and exists solely to forge a valid living object in memory. Respect the 5 golden rules, never poison a constructor with 'void', and your object architecture will stand solid.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:i})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(r,{content:o,fileName:"Topic1_Constructor_Rules_and_Syntax_Note.txt"})]})]})}export{b as default};

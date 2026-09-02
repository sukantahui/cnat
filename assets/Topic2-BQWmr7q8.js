import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 2: Constructors vs Methods: Detailed Comparison Table\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The 10-Point Architectural Comparison Matrix\r
 * ----------------------------------------------------------------------------\r
 * ----------------------------------------------------------------------------\r
 * FEATURE               CONSTRUCTOR                        METHOD\r
 * ----------------------------------------------------------------------------\r
 * 1. Primary Purpose    Initialize newly allocated Heap    Execute business behavior or\r
 *                       memory and establish invariants.   perform calculations on state.\r
 * 2. Invocation Trigger Implicitly by JVM during \`new\`.    Explicitly by caller via dot (.).\r
 * 3. Return Type        NO return type (not even void).    MANDATORY return type or void.\r
 * 4. Identifier Name    Must match class name EXACTLY.     Any valid identifier (camelCase).\r
 * 5. Inheritance        NOT inherited by subclasses.       Inherited by subclasses.\r
 * 6. Overriding         CANNOT be overridden.              CAN be overridden polymorphically.\r
 * 7. Default Generated  Compiler supplies default if none. Compiler NEVER generates methods.\r
 * 8. Static Modifier    PROHIBITED (needs 'this' context). PERMITTED for utility routines.\r
 * 9. Other Modifiers    Only access modifiers permitted.   final, abstract, synchronized, native.\r
 * 10. Bytecode Opcode   \`invokespecial <init>\`             \`invokevirtual\`, \`invokestatic\`, etc.\r
 * ----------------------------------------------------------------------------\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.util.Objects;\r
\r
public class ConstructorsVsMethodsComparisonDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: ScholarshipCandidate (Illustrating Constructors vs Methods)\r
    // ------------------------------------------------------------------------\r
    public static class ScholarshipCandidate {\r
\r
        // --- Instance State ---\r
        private final int candidateId;\r
        private final String candidateName;\r
        private final String campusHub;\r
        private double entranceMarksPercentage;\r
        private double awardedScholarshipInr;\r
        private boolean isApproved = false;\r
\r
        // ====================================================================\r
        // CONSTRUCTOR: Executed ONCE at birth via 'new'\r
        // ====================================================================\r
        // - Name matches class exactly\r
        // - NO return type\r
        // - Cannot be static or final\r
        // - Opcode: invokespecial <init>\r
        public ScholarshipCandidate(int candidateId, String candidateName, String campusHub, double entranceMarks) {\r
            if (candidateId <= 0) throw new IllegalArgumentException("ID must be positive.");\r
            if (entranceMarks < 0.0 || entranceMarks > 100.0) {\r
                throw new IllegalArgumentException("Marks must be 0-100: " + entranceMarks);\r
            }\r
\r
            this.candidateId = candidateId;\r
            this.candidateName = Objects.requireNonNull(candidateName, "Name required").trim();\r
            this.campusHub = Objects.requireNonNull(campusHub, "Campus required").trim();\r
            this.entranceMarksPercentage = entranceMarks;\r
            this.awardedScholarshipInr = 0.0;\r
\r
            System.out.printf("  [CONSTRUCTOR <init>] Candidate CAND-%04d (%s) instantiated at %s.\\n",\r
                    this.candidateId, this.candidateName, this.campusHub);\r
        }\r
\r
        // ====================================================================\r
        // METHOD 1: Instance Method (Mutates state, can be called repeatedly)\r
        // ====================================================================\r
        // - Has return type (boolean)\r
        // - Custom name: evaluateAndAwardScholarship\r
        // - Invoked explicitly via dot operator\r
        // - Opcode: invokevirtual\r
        public boolean evaluateAndAwardScholarship(double minCutoff, double baseScholarshipInr) {\r
            if (this.entranceMarksPercentage >= minCutoff) {\r
                this.awardedScholarshipInr = baseScholarshipInr;\r
                this.isApproved = true;\r
                System.out.printf("  [METHOD evaluate] %s approved for ₹%,.2f scholarship (Marks: %.1f%% >= %.1f%% cutoff)\\n",\r
                        candidateName, awardedScholarshipInr, entranceMarksPercentage, minCutoff);\r
                return true;\r
            } else {\r
                this.isApproved = false;\r
                System.out.printf("  [METHOD evaluate] %s did not meet cutoff (Marks: %.1f%% < %.1f%% cutoff)\\n",\r
                        candidateName, entranceMarksPercentage, minCutoff);\r
                return false;\r
            }\r
        }\r
\r
        // ====================================================================\r
        // METHOD 2: Static Utility Method (Class-level behavior, no 'this')\r
        // ====================================================================\r
        public static double calculateGstOnScholarship(double scholarshipAmount) {\r
            // Static method belongs to the class, not individual instances\r
            return scholarshipAmount * 0.18; // 18% GST calculation\r
        }\r
\r
        // Getters\r
        public int getCandidateId() { return candidateId; }\r
        public String getCandidateName() { return candidateName; }\r
        public double getEntranceMarksPercentage() { return entranceMarksPercentage; }\r
        public double getAwardedScholarshipInr() { return awardedScholarshipInr; }\r
        public boolean isApproved() { return isApproved; }\r
\r
        public void printBadge() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | CANDIDATE BADGE : CAND-%05d                               |\\n", candidateId);\r
            System.out.printf("  | Candidate Name  : %-41s |\\n", candidateName);\r
            System.out.printf("  | Campus Hub      : %-41s |\\n", campusHub);\r
            System.out.printf("  | Entrance Marks  : %-40.1f%% |\\n", entranceMarksPercentage);\r
            System.out.printf("  | Scholarship Amt : ₹%-40.2f |\\n", awardedScholarshipInr);\r
            System.out.printf("  | Approval Status : %-41s |\\n", (isApproved ? "APPROVED" : "PENDING"));\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Demonstrations of Constructor vs Method\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: CONSTRUCTORS VS METHODS COMPARISON");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Printing the 10-Point Comparison Matrix\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> THE 10-POINT CONSTRUCTOR VS METHOD COMPARISON MATRIX:");\r
        System.out.println("  +----+---------------------+-----------------------------+-----------------------------+");\r
        System.out.println("  | #  | Feature             | Constructor                 | Method                      |");\r
        System.out.println("  +----+---------------------+-----------------------------+-----------------------------+");\r
        System.out.println("  | 1  | Purpose             | Initialize Heap memory      | Execute behavior / compute  |");\r
        System.out.println("  | 2  | Invocation Trigger  | Implicitly via 'new'        | Explicitly via dot (.)      |");\r
        System.out.println("  | 3  | Return Type         | NO return type (not void)   | Mandatory return type/void  |");\r
        System.out.println("  | 4  | Identifier Name     | Must match class exactly    | Any camelCase identifier    |");\r
        System.out.println("  | 5  | Inheritance         | NOT inherited by child      | Inherited by child classes  |");\r
        System.out.println("  | 6  | Overriding          | CANNOT be overridden        | CAN be overridden           |");\r
        System.out.println("  | 7  | Default Generated   | Provided if none written    | Never generated by compiler |");\r
        System.out.println("  | 8  | static Modifier     | Prohibited                  | Permitted                   |");\r
        System.out.println("  | 9  | other Modifiers     | Access modifiers only       | final, abstract, sync, etc. |");\r
        System.out.println("  | 10 | Bytecode Opcode     | invokespecial <init>        | invokevirtual, invokestatic |");\r
        System.out.println("  +----+---------------------+-----------------------------+-----------------------------+\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Executing Constructor (Genesis) vs Method (Behavior)\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 2: Instantiation (Constructor) for Swadeep Paul (Barrackpore):");\r
        ScholarshipCandidate swadeep = new ScholarshipCandidate(101, "Swadeep Paul", "Barrackpore Hub", 92.5);\r
\r
        System.out.println("\\n>>> DEMO 3: Invoking Instance Method Repeatedly via Dot Operator:");\r
        // Method can be called multiple times across object lifecycle\r
        swadeep.evaluateAndAwardScholarship(85.0, 15000.00);\r
        swadeep.printBadge();\r
\r
        System.out.println("\\n>>> DEMO 4: Instantiating Tuhina Das (Naihati) & Testing Evaluation:");\r
        ScholarshipCandidate tuhina = new ScholarshipCandidate(102, "Tuhina Das", "Naihati Hub", 88.0);\r
        tuhina.evaluateAndAwardScholarship(85.0, 15000.00);\r
        tuhina.printBadge();\r
\r
        System.out.println("\\n>>> DEMO 5: Calling Static Class Method (No Object Instance Needed):");\r
        double gst = ScholarshipCandidate.calculateGstOnScholarship(15000.00);\r
        System.out.printf("  Static calculation on ₹15,000.00 scholarship: ₹%,.2f GST\\n", gst);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CONSTRUCTORS VS METHODS COMPARISON COMPLETE - BARRACKPORE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 2: Constructors vs Methods: Detailed Comparison Table\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 10-POINT ARCHITECTURAL COMPARISON MATRIX:\r
   -----------------------------------------------------------------------------\r
   FEATURE              CONSTRUCTOR                       METHOD\r
   -----------------------------------------------------------------------------\r
   1. Purpose           Initialize Heap memory & state   Execute behavior & computation\r
   2. Invocation        Implicit via 'new', this(), super Explicit via dot operator (.)\r
   3. Return Type       NONE (not even void)             Mandatory (type or void)\r
   4. Name              EXACT match with class name      Any valid identifier (camelCase)\r
   5. Inheritance       NEVER inherited by child classes  Inherited by subclasses\r
   6. Overriding        CANNOT be overridden             CAN be overridden polymorphically\r
   7. Default Generated Synthesized if zero written      NEVER generated by compiler\r
   8. static Modifier   PROHIBITED (needs 'this')         PERMITTED for class-level logic\r
   9. Other Modifiers   Access modifiers ONLY            final, abstract, synchronized, etc.\r
   10. JVM Opcode       invokespecial <init>             invokevirtual, invokestatic, etc.\r
   -----------------------------------------------------------------------------\r
\r
2. KEY PITFALLS:\r
   - Adding 'void' turns a constructor into a normal method!\r
   - Calling overridable methods inside a constructor risks subclass bugs.\r
   - Constructors cannot be static, final, abstract, or synchronized.\r
\r
3. CLASSROOM ANALOGY (SUKANTA HUI - BARRACKPORE):\r
   - Constructor = Trainee Admission Certificate (issued once at birth).\r
   - Methods = Daily tests, score updates, and project submissions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the fundamental architectural difference in purpose between a Constructor and a Method?",shortAnswer:"A constructor initializes newly allocated Heap memory to forge a valid object state, whereas a method defines operational behavior or computes values on existing state.",explanation:"Constructors are invoked automatically during 'new' to bring an object into existence with guaranteed domain invariants. Methods are executed after creation to perform calculations or state transitions.",hint:"Initialization of state vs execution of behavior.",level:"Beginner",codeExample:`// Constructor: initializes state
public Student(String name) { this.name = name; }

// Method: operational behavior
public void updateAttendance(int days) { this.attendance += days; }`},{question:"Can a constructor have a return type in Java?",shortAnswer:"No. Constructors must NEVER have a return type, not even 'void'.",explanation:"A constructor implicitly returns the newly allocated Heap reference. Declaring a return type converts it into a standard method that the JVM's 'new' opcode will ignore.",hint:"Zero return types allowed on constructors.",level:"Beginner",codeExample:`public Student() {} // Constructor
public void Student() {} // Method! NOT a constructor`},{question:"How do invocation mechanisms differ between constructors and methods?",shortAnswer:"Constructors are invoked implicitly by the runtime during object creation ('new', 'this()', 'super()'), while methods are explicitly called on object references via dot (.).",explanation:"Constructors cannot be called directly on an already initialized object reference. Methods can be invoked arbitrarily many times using 'reference.methodName()'.",hint:"Triggered via 'new' vs invoked via dot operator.",level:"Beginner",codeExample:`Student s = new Student("Swadeep"); // Constructor runs
s.calculateMarks(); // Method runs`},{question:"Can constructors be inherited by subclasses in Java?",shortAnswer:"No, constructors are NOT members of a class and are never inherited by subclasses.",explanation:"A child class inherits instance variables and instance methods, but not constructors. The child must declare its own constructors, which explicitly or implicitly invoke a parent constructor via 'super()'.",hint:"Constructors are not inherited; child must define its own.",level:"Intermediate",codeExample:`class Parent { Parent(int x) {} }
class Child extends Parent {
    Child(int x) { super(x); } // Must call super
}`},{question:"Can constructors be overridden polymorphically?",shortAnswer:"No. Since constructors are not inherited and must match their declaring class name, they cannot be overridden.",explanation:"Method overriding requires inheritance and identical names. Subclass constructors have their own distinct class name, making overriding syntactically impossible.",hint:"Overriding requires inheritance and identical names.",level:"Intermediate",codeExample:`// Overriding is impossible for constructors
class Animal { Animal() {} }
class Dog extends Animal { Dog() {} } // New constructor, not an override`},{question:"What bytecode opcode is used by the JVM to invoke a constructor vs an instance method?",shortAnswer:"Constructors are invoked via 'invokespecial <init>', while standard instance methods are invoked via 'invokevirtual' (or 'invokeinterface').",explanation:"The JVM treats constructors as special instance initialization methods named '<init>', resolved with static binding via 'invokespecial'. Virtual methods use dynamic dispatch via 'invokevirtual'.",hint:"invokespecial <init> vs invokevirtual.",level:"Advanced",codeExample:`// Bytecode:
// new Student → invokespecial Student.<init>()V
// s.study()   → invokevirtual Student.study()V`},{question:"Does the compiler ever generate a default method if none is defined?",shortAnswer:"No. The compiler only generates a default no-argument constructor if zero constructors are written; it NEVER generates default methods.",explanation:"Methods represent custom application logic and are never automatically synthesized by javac. The compiler only generates the default constructor '<init>()' to satisfy JVM object lifecycle requirements.",hint:"Only default constructors are generated, never methods.",level:"Beginner",codeExample:"class Sample {} // Compiler creates Sample() {}, but creates zero methods"},{question:"Can a constructor be declared 'static'?",shortAnswer:"No. The 'static' modifier is strictly illegal for constructors because constructors initialize the 'this' instance context.",explanation:"Static members belong to the class and execute without an instance. Constructors require an active, allocated instance reference ('this') in Eden space to populate fields.",hint:"Constructors operate on 'this', which does not exist in static context.",level:"Intermediate",codeExample:`// Compile Error: modifier static not allowed here
// public static Student() {}`},{question:"Can a constructor be declared 'final'?",shortAnswer:"No. 'final' on methods prevents overriding, but constructors cannot be inherited or overridden, making 'final' invalid.",explanation:"The Java Language Specification forbids 'final' on constructors as it serves no semantic purpose and is syntactically invalid.",hint:"Cannot override constructors, so 'final' is meaningless.",level:"Beginner",codeExample:`// Compile Error: modifier final not allowed here
// public final Student() {}`},{question:"Can a constructor be declared 'abstract'?",shortAnswer:"No. Abstract members have no implementation and defer logic to subclasses, but a constructor must execute object initialization.",explanation:"A constructor is bound to create instances of its specific class. An abstract constructor would mean an object cannot initialize its own state, violating object encapsulation.",hint:"Constructors must initialize; they cannot be abstract.",level:"Intermediate",codeExample:`// Compile Error: modifier abstract not allowed here
// public abstract Student();`},{question:"Can a constructor be declared 'synchronized'?",shortAnswer:"No. Java syntax forbids 'synchronized' on constructors because only the creating thread has access to the newly allocated instance during construction.",explanation:"During construction, the object reference has not yet been published to other threads. Locking 'this' during construction is redundant and illegal. Synchronized blocks inside the constructor are permitted if locking on a shared lock object.",hint:"Objects are private to the constructing thread until published.",level:"Advanced",codeExample:`// Illegal:
// public synchronized Student() {}

// Legal:
public Student() { synchronized(sharedLock) { /* ... */ } }`},{question:"How many times can a constructor be executed on a single object instance?",shortAnswer:"Exactly once, at the instant of object creation via the 'new' operator.",explanation:"Once an object is instantiated and its constructor completes, the constructor cannot be re-invoked on that object reference. Methods, in contrast, can be called repeatedly.",hint:"Constructor runs once per lifecycle; methods run repeatedly.",level:"Beginner",codeExample:`Student s = new Student(); // Constructor runs ONCE
s.attend(); // Method run 1
s.attend(); // Method run 2`},{question:"Can a constructor call an instance method of the same class?",shortAnswer:"Yes, but it is considered risky if the method is overridable (non-final, non-private), as subclass overrides may execute before subclass fields are initialized.",explanation:"Calling an overridable method from a constructor causes subclass implementations to run against uninitialized subclass fields, leading to NullPointerExceptions or corrupt state.",hint:"Beware of calling overridable methods during construction.",level:"Advanced",codeExample:`class Parent {
    Parent() { printState(); } // Dangerous! If overridden in Child
    void printState() { System.out.println("Parent"); }
}`},{question:"Can a method have the exact same name as the class in Java?",shortAnswer:"Yes, it is legally allowed by the compiler if it specifies a return type, but it violates Java naming conventions and causes major confusion.",explanation:"Writing 'public void Student()' is a valid method. However, javac will treat it strictly as a regular method, and executing 'new Student()' will NOT call it.",hint:"Legal with return type, but terrible practice.",level:"Intermediate",codeExample:`public class Trainee {
    public void Trainee() { System.out.println("I am a method!"); }
}`},{question:"What is the naming convention for methods vs constructors?",shortAnswer:"Constructors must match the class name in PascalCase (UpperCamelCase). Methods should use lowerCamelCase and typically start with a verb.",explanation:"Class & Constructor: 'StudentRegistration', 'InvoiceProcessor'. Methods: 'calculateTotal()', 'registerStudent()', 'getFeeDetails()'.",hint:"PascalCase for Constructors, lowerCamelCase for Methods.",level:"Beginner",codeExample:`public class BankAccount {
    public BankAccount() {} // PascalCase
    public void depositFunds() {} // lowerCamelCase
}`},{question:"Can methods be overloaded in Java? Can constructors be overloaded?",shortAnswer:"Yes, both methods and constructors can be overloaded by providing distinct parameter lists (different number, types, or order of parameters).",explanation:"Constructor overloading allows multiple ways to initialize an object (e.g. default values vs customized parameters). Method overloading provides multiple ways to perform an operation.",hint:"Both support overloading with distinct parameter signatures.",level:"Beginner",codeExample:`public Student() {}
public Student(String name) {}

public void study() {}
public void study(int hours) {}`},{question:"How does 'this' keyword behave inside a constructor vs inside an instance method?",shortAnswer:"In both, 'this' refers to the current instance. However, inside a constructor, 'this(...)' with parentheses calls an overloaded constructor, which must be the first line.",explanation:"As a variable, 'this.fieldName' resolves instance variables in both. As an invocation 'this(...)', it can ONLY be used inside constructors on line 1 for constructor chaining.",hint:"this.field works in both; this(...) call works only in constructors.",level:"Intermediate",codeExample:`public Student(String name) {
    this(name, 0); // Constructor call
}
public void setName(String name) {
    this.name = name; // Field access
}`},{question:"Can an interface in Java declare a constructor?",shortAnswer:"No, interfaces can NEVER declare constructors because interfaces cannot be instantiated directly and have no instance state to initialize.",explanation:"Interfaces only define abstract contracts, default methods, static methods, and public static final constants. They do not have instance state on the Heap.",hint:"Interfaces cannot be instantiated, so no constructors allowed.",level:"Beginner",codeExample:`interface Calculable {
    // Calculable() {} // COMPILE ERROR!
    void compute(); // Valid method
}`},{question:"Can an abstract class declare a constructor?",shortAnswer:"Yes! Abstract classes can and often do declare constructors to initialize inherited fields for concrete subclasses.",explanation:"Even though abstract classes cannot be directly instantiated via 'new AbstractClass()', their constructors execute via 'super(...)' when concrete child instances are created.",hint:"Abstract classes have constructors called via super() from subclasses.",level:"Intermediate",codeExample:`abstract class Person {
    String name;
    Person(String name) { this.name = name; }
}
class Student extends Person {
    Student(String name) { super(name); }
}`},{question:"What happens in memory when a constructor fails by throwing an exception?",shortAnswer:"Object creation aborts, the reference is never returned to the caller, and the unreferenced memory in Eden space becomes eligible for Garbage Collection.",explanation:"If an exception is thrown in a constructor before completion, the object is considered partially initialized and unusable. It will be reclaimed during the next GC cycle.",hint:"Creation aborts; incomplete object is garbage collected.",level:"Advanced",codeExample:`public Student(int age) {
    if (age < 0) throw new IllegalArgumentException("Invalid age");
    this.age = age;
}`},{question:"Can constructors be declared with variable arguments (varargs)?",shortAnswer:"Yes! Both constructors and methods can accept varargs ('Type... args') as their final parameter.",explanation:"Varargs provide flexible parameter passing at instantiation time. The JVM compiles varargs into an array parameter under the hood.",hint:"Varargs are supported on constructors as the final parameter.",level:"Intermediate",codeExample:`public class CourseBatch {
    public CourseBatch(String courseName, String... students) {
        // students is treated as String[]
    }
}`},{question:"Can a method be recursive? Can a constructor be recursive?",shortAnswer:"Methods can be recursive with base cases. Constructors CANNOT be directly recursive via 'this()', as the compiler detects circular chaining and rejects it.",explanation:"A method can call itself conditionally. Constructor recursion via 'this()' is unconditionally circular, causing the compiler to flag 'recursive constructor invocation'.",hint:"Method recursion is legal; constructor circular this() is a compile error.",level:"Intermediate",codeExample:`// Method recursion: legal
int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
// Constructor recursion: illegal
Sample() { this(); } // COMPILE ERROR`},{question:"Can a constructor have the 'native' modifier in Java?",shortAnswer:"No. The 'native' modifier is prohibited on constructors by the Java Language Specification.",explanation:"Constructors manage Java Heap allocation protocols, object headers, and bytecode initialization sequences that cannot be implemented as pure C/C++ native functions.",hint:"Constructors cannot be native; methods can.",level:"Advanced",codeExample:`// Compile Error: modifier native not allowed here
// public native Student();`},{question:"Why do factory methods like 'Student.createDefault()' exist if we already have constructors?",shortAnswer:"Static factory methods provide descriptive names, can return cached or existing instances, and can return subtypes, unlike constructors.",explanation:"Constructors are locked to their class name and always allocate a new object. Static factory methods (e.g. 'Integer.valueOf()') allow caching, descriptive names, and polymorphic return types.",hint:"Descriptive names, caching, and subtype flexibility.",level:"Advanced",codeExample:`public static Student createScholarshipStudent(String name) {
    return new Student(name, 100.0, true);
}`},{question:"In what order do Instance Initialization Blocks (IIBs) execute relative to Constructors and Methods?",shortAnswer:"IIBs execute on every object instantiation immediately before the constructor body runs. Methods execute only when explicitly called thereafter.",explanation:"The compiler copies IIB bytecode into the start of each constructor right after the 'super()' call. Methods only execute when invoked on the completed reference.",hint:"super() → IIB → Constructor Body → Methods (when called).",level:"Intermediate",codeExample:`class Demo {
    { System.out.println("IIB"); }
    Demo() { System.out.println("Constructor"); }
    void run() { System.out.println("Method"); }
}`},{question:"What is the key takeaway for students in Barrackpore when comparing constructors and methods?",shortAnswer:"A constructor is the birth certificate and architect of an object (runs once to build invariants); methods are the daily skills and actions the object performs throughout its life.",explanation:"Remember Sukanta Hui's analogy: When Swadeep registers at Barrackpore hub, the Constructor issues his ID and locks his initial state. His daily submissions and marks calculations are Methods invoked across the year.",hint:"Birth & identity (Constructor) vs lifelong actions (Methods).",level:"Beginner",codeExample:`Student s = new Student("Swadeep", 101); // Birth
s.submitAssignment(); // Action`},{question:"Can a constructor return 'null'?",shortAnswer:"No. A constructor cannot specify a return statement with a value, nor can it return 'null'.",explanation:"Writing 'return null;' inside a constructor is a compile-time error. You can use 'return;' with no value to exit early, which returns the newly constructed instance.",hint:"Return statement with value is prohibited in constructors.",level:"Beginner",codeExample:`public Student() {
    if (someCondition) return; // Legal early exit
    // return null; // ILLEGAL: Compile error
}`},{question:"How does garbage collection perceive an object initialized by a constructor vs modified by methods?",shortAnswer:"GC does not care how an object was initialized or modified; it reclaims any object that becomes unreachable from GC Roots.",explanation:"The constructor allocates memory and populates references. Methods may mutate fields or detach sub-objects. GC continuously traces root references regardless of member types.",hint:"Reachability from GC roots dictates garbage collection.",level:"Intermediate",codeExample:`Student s = new Student(); // Live on Heap
s = null; // Unreachable, eligible for GC`},{question:"Can a private method be called inside a constructor?",shortAnswer:"Yes, constructors can freely invoke private helper methods of the same class to modularize complex validation or calculation logic.",explanation:"Using private final methods for internal validation is a clean code best practice, keeping constructor bodies concise and readable.",hint:"Private helper methods in constructors are clean practice.",level:"Intermediate",codeExample:`public Student(String email) {
    this.email = validateEmail(email);
}
private String validateEmail(String e) { /* validation logic */ return e; }`},{question:"Summarize the 10 core differences between Java Constructors and Methods.",shortAnswer:"1. Purpose (Init vs Behavior), 2. Trigger (new vs dot), 3. Return type (None vs Mandatory), 4. Name (Class name vs CamelCase), 5. Inheritance (No vs Yes), 6. Overriding (No vs Yes), 7. Default synthesis (Yes if zero vs Never), 8. static (Prohibited vs Allowed), 9. Modifiers (Access only vs all), 10. Opcode (invokespecial vs invokevirtual).",explanation:"Mastering these 10 distinctions provides rock-solid foundation for enterprise Java OOP architecture, design patterns, and JVM bytecode mechanics.",hint:"10-point architectural matrix.",level:"Expert",codeExample:"// Full comparison table implemented in Topic 2"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes comparePulse {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-compare {
            animation: comparePulse 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Core OOP Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Constructors vs Methods: The 10-Point Architectural Comparison"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demystify the foundational divide of Java Object-Oriented Programming: exploring the precise structural, semantic, and JVM bytecode distinctions between Object Initialization (Constructors) and Operational Behavior (Methods)."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Conceptual Divide: Genesis vs Behavior"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["In Java, classes contain two primary callable constructs: ",e.jsx("strong",{children:"Constructors"})," and ",e.jsx("strong",{children:"Methods"}),". While both contain executable blocks of statements, their roles in the JVM lifecycle are fundamentally distinct:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-5 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sky-400 font-bold text-sm",children:"CONSTRUCTOR (<init>)"}),e.jsx("span",{className:"px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded text-[10px]",children:"Birth / Genesis"})]}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Executes ",e.jsx("strong",{children:"once per object lifetime"})," during the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"})," opcode. Its sole purpose is to initialize newly allocated zero-filled bytes in Eden space into a valid, invariant-protected living object."]}),e.jsx("div",{className:"text-sky-300 bg-slate-900 p-2 rounded text-[11px]",children:e.jsx("code",{children:'ScholarshipCandidate s = new ScholarshipCandidate(101, "Swadeep");'})})]}),e.jsxs("div",{className:"p-5 bg-slate-950 rounded-xl border border-purple-500/30 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-purple-400 font-bold text-sm",children:"METHOD (invokevirtual)"}),e.jsx("span",{className:"px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-[10px]",children:"Lifelong Behavior"})]}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Executes ",e.jsx("strong",{children:"arbitrarily many times"})," throughout the object's life when explicitly called via the dot (",e.jsx("code",{className:"text-purple-300 font-mono",children:"."}),") operator. Performs business computations, state mutations, and external interactions."]}),e.jsx("div",{className:"text-purple-300 bg-slate-900 p-2 rounded text-[11px]",children:e.jsx("code",{children:"s.evaluateAndAwardScholarship(85.0, 15000.00);"})})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Barrackpore Classroom Story (Sukanta Hui):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," enrolls at the Barrackpore center, his ",e.jsx("strong",{children:"Admission Form & Registration"})," is the Constructor—it assigns his permanent Roll Number and sets up his profile once. His daily test appearances, attendance submissions, and fee updates are ",e.jsx("strong",{children:"Methods"}),", called repeatedly throughout his course!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Architectural Comparison Matrix: Constructors vs Methods"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing the JVM opcode dispatch, lifecycle triggers, and syntactic laws separating Constructors from Methods:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 340",className:"w-full h-auto animate-compare","aria-label":"Constructors vs Methods Architectural Comparison Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow1",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"arrow2",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#c084fc"})})]}),e.jsx("rect",{x:"30",y:"30",width:"410",height:"280",rx:"12",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"235",y:"60",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"CONSTRUCTOR (<init>)"}),e.jsx("text",{x:"235",y:"80",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Opcode: invokespecial | Runs Once at Birth"}),e.jsx("rect",{x:"50",y:"100",width:"370",height:"35",rx:"6",fill:"#0369a1",fillOpacity:"0.2",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"65",y:"122",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"Trigger: Implicitly during 'new' keyword"}),e.jsx("rect",{x:"50",y:"145",width:"370",height:"35",rx:"6",fill:"#0369a1",fillOpacity:"0.2",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"65",y:"167",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"Return Type: NO return type (not even void)"}),e.jsx("rect",{x:"50",y:"190",width:"370",height:"35",rx:"6",fill:"#0369a1",fillOpacity:"0.2",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"65",y:"212",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"Name: EXACT match with class name"}),e.jsx("rect",{x:"50",y:"235",width:"370",height:"35",rx:"6",fill:"#0369a1",fillOpacity:"0.2",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"65",y:"257",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"Inheritance / Overriding: FORBIDDEN"}),e.jsx("rect",{x:"50",y:"280",width:"370",height:"20",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"235",y:"294",fill:"#bae6fd",fontSize:"9",textAnchor:"middle",children:"Default Generated: YES (if zero constructors written)"}),e.jsx("rect",{x:"480",y:"30",width:"410",height:"280",rx:"12",fill:"#0f172a",stroke:"#9333ea",strokeWidth:"2"}),e.jsx("text",{x:"685",y:"60",fill:"#c084fc",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"METHOD (invokevirtual)"}),e.jsx("text",{x:"685",y:"80",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Opcode: invokevirtual / invokestatic | Lifelong"}),e.jsx("rect",{x:"500",y:"100",width:"370",height:"35",rx:"6",fill:"#581c87",fillOpacity:"0.2",stroke:"#c084fc",strokeWidth:"1"}),e.jsx("text",{x:"515",y:"122",fill:"#f5d0fe",fontSize:"10",fontFamily:"monospace",children:"Trigger: Explicitly called via dot (.) operator"}),e.jsx("rect",{x:"500",y:"145",width:"370",height:"35",rx:"6",fill:"#581c87",fillOpacity:"0.2",stroke:"#c084fc",strokeWidth:"1"}),e.jsx("text",{x:"515",y:"167",fill:"#f5d0fe",fontSize:"10",fontFamily:"monospace",children:"Return Type: MANDATORY (type or void)"}),e.jsx("rect",{x:"500",y:"190",width:"370",height:"35",rx:"6",fill:"#581c87",fillOpacity:"0.2",stroke:"#c084fc",strokeWidth:"1"}),e.jsx("text",{x:"515",y:"212",fill:"#f5d0fe",fontSize:"10",fontFamily:"monospace",children:"Name: Any valid identifier (camelCase)"}),e.jsx("rect",{x:"500",y:"235",width:"370",height:"35",rx:"6",fill:"#581c87",fillOpacity:"0.2",stroke:"#c084fc",strokeWidth:"1"}),e.jsx("text",{x:"515",y:"257",fill:"#f5d0fe",fontSize:"10",fontFamily:"monospace",children:"Inheritance / Overriding: PERMITTED"}),e.jsx("rect",{x:"500",y:"280",width:"370",height:"20",rx:"4",fill:"#3b0764"}),e.jsx("text",{x:"685",y:"294",fill:"#f0abfc",fontSize:"9",textAnchor:"middle",children:"Default Generated: NEVER (must be coded by developer)"})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📋"})," Complete 10-Point Technical Comparison Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs md:text-sm border border-slate-700 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-200 border-b border-slate-700 font-mono",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-sky-400",children:"#"}),e.jsx("th",{className:"p-3 text-sky-400",children:"Feature"}),e.jsx("th",{className:"p-3 text-sky-300",children:"Constructor"}),e.jsx("th",{className:"p-3 text-purple-300",children:"Method"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"1"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Primary Purpose"}),e.jsx("td",{className:"p-3",children:"Initialize newly allocated Heap memory & domain invariants"}),e.jsx("td",{className:"p-3",children:"Execute business behavior & perform calculations on state"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"2"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Invocation Trigger"}),e.jsx("td",{className:"p-3 font-mono text-sky-300",children:"Implicitly via 'new', this(), super()"}),e.jsx("td",{className:"p-3 font-mono text-purple-300",children:"Explicitly via dot (.) operator"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"3"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Return Type"}),e.jsx("td",{className:"p-3 text-rose-300 font-semibold",children:"NO return type (not even void)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"MANDATORY return type or void"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"4"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Identifier Name"}),e.jsx("td",{className:"p-3",children:"Must match class name with exact case sensitivity"}),e.jsx("td",{className:"p-3",children:"Any valid Java identifier (lowerCamelCase verb)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"5"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Inheritance"}),e.jsx("td",{className:"p-3 text-rose-300",children:"NOT inherited by subclasses"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Inherited by subclasses (based on visibility)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"6"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Overriding"}),e.jsx("td",{className:"p-3 text-rose-300",children:"CANNOT be overridden"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"CAN be overridden polymorphically"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"7"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Default Synthesis"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Compiler generates no-arg if zero written"}),e.jsx("td",{className:"p-3 text-rose-300",children:"Compiler NEVER generates default methods"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"8"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"static Modifier"}),e.jsx("td",{className:"p-3 text-rose-300",children:"PROHIBITED (requires 'this' context)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"PERMITTED for class-level utility routines"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"9"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Other Modifiers"}),e.jsx("td",{className:"p-3",children:"Access modifiers only (public, prot, pkg, priv)"}),e.jsx("td",{className:"p-3",children:"final, abstract, synchronized, native, static, default"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"10"}),e.jsx("td",{className:"p-3 font-semibold text-white",children:"Bytecode Opcode"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"invokespecial <init>"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"invokevirtual, invokestatic, invokeinterface"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Runnable Java Source Code"]}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Observe how the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ScholarshipCandidate"})," class demonstrates constructor initialization, instance method evaluation, and static method utilities:"]}),e.jsx(t,{fileModule:s,title:"ConstructorsVsMethodsComparisonDemo.java",highlightLines:[58,81,99,155,159,168]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Traps"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm",children:[e.jsxs("div",{className:"p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 space-y-2",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-sm",children:"1. The Return Type Silent Trap"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"public void Student()"})," compiles with zero errors, but converts the constructor into a normal method! The object fields will silently remain ",e.jsx("code",{className:"text-rose-300 font-mono",children:"null"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"0"})," upon ",e.jsx("code",{className:"text-slate-200 font-mono",children:"new Student()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-amber-950/30 rounded-xl border border-amber-800/40 space-y-2",children:[e.jsx("h3",{className:"text-amber-300 font-bold text-sm",children:"2. Calling Overridable Methods in Constructors"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Never call non-final public methods inside a constructor. If a child class overrides that method, the child override runs ",e.jsx("em",{children:"before"})," the child's own constructor executes, operating on uninitialized child fields!"]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This... (Conceptual Check)"]}),e.jsxs("ul",{className:"space-y-3 text-slate-300 text-sm list-disc pl-5 leading-relaxed",children:[e.jsxs("li",{children:["Why did the designers of Java invent ",e.jsx("code",{className:"text-sky-300 font-mono",children:"static factory methods"})," (like ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Integer.valueOf(100)"})," or ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"List.of(...)"}),") when standard constructors were already available?"]}),e.jsxs("li",{children:["If a class has 5 constructors and 10 methods, how many total ",e.jsx("code",{className:"text-purple-300 font-mono",children:"<init>"})," bytecode methods will appear in the compiled ",e.jsx("code",{className:"text-amber-300 font-mono",children:".class"})," file?"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Constructors vs Methods FAQs (30 Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_002 Topic 2: Constructors vs Methods Detailed Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic2_constructors_vs_methods_note.txt"})}),e.jsx(a,{note:"Remember my 10-point matrix: A constructor is your birth certificate—invoked once by the JVM to build your foundation. Methods are your skills and actions—called repeatedly throughout your life. Never mix them up, and never put 'void' on your constructor! — Sukanta Hui"})]})}export{b as default};

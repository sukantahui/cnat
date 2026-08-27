import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 0: What is a Constructor and Why Object Initialization is Mandatory\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The Genesis of an Object in Java\r
 * ----------------------------------------------------------------------------\r
 * 1. What is a Constructor?\r
 *    - A specialized member block in a class that shares the EXACT name of the class\r
 *      and has NO return type (not even void).\r
 *    - It is automatically executed by the JVM at the exact moment of instantiation\r
 *      via the \`new\` operator.\r
 *\r
 * 2. Why is Object Initialization Mandatory?\r
 *    - Memory Safety: When \`new\` executes, it allocates raw zero-filled Heap memory.\r
 *      Without initialization, reference variables remain \`null\`, leading to immediate\r
 *      \`NullPointerException\` when methods are called.\r
 *    - Invariant Establishment: A constructor guarantees that an object is born in a\r
 *      valid, consistent, and legally compliant business state (e.g. Bank balance >= 0).\r
 *\r
 * 3. The 3-Step Creation Pipeline:\r
 *    Step 1: \`new\` Operator allocates raw bytes in Eden Space (Zero-Initialization).\r
 *    Step 2: Constructor executes, binding instance variables and running initialization logic on \`this\`.\r
 *    Step 3: The 64-bit Heap reference is returned and assigned to the Stack reference variable.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.time.LocalDateTime;\r
import java.time.format.DateTimeFormatter;\r
import java.util.Objects;\r
\r
public class ConstructorFundamentalsAndMandatoryInitDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Part 1: THE DANGEROUS UNINITIALIZED ENTITY (Missing Mandatory Init)\r
    // ------------------------------------------------------------------------\r
    public static class UninitializedTrainee {\r
        public int studentId;            // Defaults to 0\r
        public String studentName;       // Defaults to null!\r
        public String enrolledCourse;    // Defaults to null!\r
        public double scholarshipInr;    // Defaults to 0.0\r
\r
        // No explicit constructor provided (Compiler inserts no-arg constructor that does nothing)\r
        public void printBadge() {\r
            // NullPointerException risk when calling methods on studentName!\r
            System.out.println("    Student ID   : " + studentId);\r
            System.out.println("    Student Name : " + studentName);\r
            System.out.println("    Course Name  : " + enrolledCourse);\r
            System.out.println("    Scholarship  : ₹" + scholarshipInr);\r
        }\r
\r
        public String getUppercaseName() {\r
            // BUG: Throws NullPointerException if studentName is null!\r
            return studentName.toUpperCase();\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Part 2: THE FORTIFIED CONSTRUCTOR-INITIALIZED ENTITY\r
    // ------------------------------------------------------------------------\r
    public static class InitializedTrainee {\r
        private final int studentId;\r
        private final String studentName;\r
        private final String campusBranch;\r
        private final String enrolledCourse;\r
        private final double scholarshipInr;\r
        private final String registrationTimestamp;\r
\r
        // Constructor establishing mandatory state and domain invariants at birth\r
        public InitializedTrainee(int studentId, String studentName, String campusBranch, String enrolledCourse, double scholarshipInr) {\r
            if (studentId <= 0) {\r
                throw new IllegalArgumentException("Student ID must be strictly positive. Supplied: " + studentId);\r
            }\r
            this.studentId = studentId;\r
            this.studentName = Objects.requireNonNull(studentName, "Student name is mandatory").trim();\r
            this.campusBranch = Objects.requireNonNull(campusBranch, "Campus branch is mandatory").trim();\r
            this.enrolledCourse = Objects.requireNonNull(enrolledCourse, "Course name is mandatory").trim();\r
\r
            if (scholarshipInr < 0.0) {\r
                throw new IllegalArgumentException("Scholarship cannot be negative. Supplied: ₹" + scholarshipInr);\r
            }\r
            this.scholarshipInr = scholarshipInr;\r
\r
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");\r
            this.registrationTimestamp = LocalDateTime.now().format(dtf);\r
\r
            System.out.printf("  [CONSTRUCTOR EXECUTED] Initialized Trainee STU-%04d (%s) at %s campus.\\n",\r
                    this.studentId, this.studentName, this.campusBranch);\r
        }\r
\r
        public int getStudentId() { return studentId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCampusBranch() { return campusBranch; }\r
        public String getEnrolledCourse() { return enrolledCourse; }\r
        public double getScholarshipInr() { return scholarshipInr; }\r
        public String getRegistrationTimestamp() { return registrationTimestamp; }\r
\r
        public String getUppercaseName() {\r
            // Guaranteed 100% NPE-safe because constructor asserted non-null!\r
            return studentName.toUpperCase();\r
        }\r
\r
        public void printBadge() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | [INITIALIZED ENTITY] BARRACKPORE ACADEMY TRAINEE BADGE      |\\n");\r
            System.out.printf("  | Student ID   : STU-%05d                                |\\n", studentId);\r
            System.out.printf("  | Student Name : %-43s |\\n", studentName);\r
            System.out.printf("  | Campus Hub   : %-43s |\\n", campusBranch);\r
            System.out.printf("  | Course       : %-43s |\\n", enrolledCourse);\r
            System.out.printf("  | Scholarship  : ₹%-42.2f |\\n", scholarshipInr);\r
            System.out.printf("  | Registered On: %-43s |\\n", registrationTimestamp);\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Demonstrating Object Genesis and Initialization Safety\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: CONSTRUCTORS & MANDATORY OBJECT INITIALIZATION");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: The Hazards of Uninitialized Objects\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Uninitialized Object with Raw Default State");\r
        UninitializedTrainee rawTrainee = new UninitializedTrainee();\r
        System.out.println("  Raw instance created via new without explicit constructor:");\r
        rawTrainee.printBadge();\r
\r
        System.out.println("\\n  Attempting to call getUppercaseName() on uninitialized object:");\r
        try {\r
            rawTrainee.getUppercaseName();\r
        } catch (NullPointerException npe) {\r
            System.out.println("  [CRASH DETECTED] NullPointerException thrown because studentName was uninitialized (null)!");\r
        }\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: The Fortress of Constructor-Initialized Objects\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 2: Initializing Objects via Parameterized Constructor");\r
        System.out.println("Instantiating Swadeep Paul (Barrackpore Hub):");\r
        InitializedTrainee swadeep = new InitializedTrainee(\r
                101,\r
                "Swadeep Paul",\r
                "Barrackpore Hub",\r
                "Java Fullstack Enterprise Architecture",\r
                12500.00\r
        );\r
        swadeep.printBadge();\r
        System.out.println("  NPE-Safe uppercase name: " + swadeep.getUppercaseName());\r
\r
        System.out.println("\\nInstantiating Tuhina Das (Naihati Hub):");\r
        InitializedTrainee tuhina = new InitializedTrainee(\r
                102,\r
                "Tuhina Das",\r
                "Naihati Hub",\r
                "Spring Boot & Cloud Native Microservices",\r
                15000.00\r
        );\r
        tuhina.printBadge();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Constructor Enforcing Invariants at Object Birth\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Constructor Rejecting Invalid Arguments at Birth");\r
        try {\r
            System.out.print("  Attempting to instantiate with negative scholarship (-₹5000) -> ");\r
            new InitializedTrainee(103, "Abhronila Ray", "Shyamnagar", "DevOps", -5000.0);\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("REJECTED AT BIRTH: " + e.getMessage());\r
        }\r
\r
        try {\r
            System.out.print("  Attempting to instantiate with null name -> ");\r
            new InitializedTrainee(104, null, "Ichapur", "DevOps", 5000.0);\r
        } catch (NullPointerException e) {\r
            System.out.println("REJECTED AT BIRTH: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CONSTRUCTOR INITIALIZATION DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 0: What is a Constructor and Why Object Initialization is Mandatory\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A CONSTRUCTOR?\r
   - A specialized member block sharing the EXACT name of the class with\r
     NO return type (not even \`void\`).\r
   - Automatically executed by the JVM during \`new\` operator evaluation to\r
     initialize newly allocated Heap memory.\r
\r
2. WHY OBJECT INITIALIZATION IS MANDATORY:\r
   -----------------------------------------------------------------------------\r
   - Memory Safety  : Uninitialized reference fields default to \`null\`, causing\r
                      catastrophic \`NullPointerException\`s during method execution.\r
   - Invariant Birth: Establishes business rules (e.g. \`balance >= 0\`, \`id > 0\`)\r
                      at the exact moment of birth before callers can touch the object.\r
   - Resource Setup : Prepares database handles, locks, timestamps, and collections.\r
   -----------------------------------------------------------------------------\r
\r
3. THE 3-STAGE OBJECT GENESIS PIPELINE:\r
   Step 1: Memory Allocation (\`new\` opcode allocates raw bytes in Eden Space).\r
   Step 2: Zero-Initialization (fields set to 0, 0.0, false, null).\r
   Step 3: Constructor Execution (\`invokespecial <init>\` binds fields on \`this\`).\r
   Step 4: Stack Reference Assignment (64-bit Heap address returned to caller).\r
\r
4. CRITICAL RULES OF CONSTRUCTORS:\r
   a) Name must match the class name with exact case sensitivity.\r
   b) No return type (adding \`void\` turns it into a standard method!).\r
   c) Cannot be \`static\`, \`final\`, \`abstract\`, or \`synchronized\`.\r
   d) Can have access modifiers: \`public\`, \`protected\`, package-private, or \`private\`.\r
   e) If no constructor is written, the compiler generates a default no-arg constructor.\r
      If ANY constructor is written, compiler default is suppressed!\r
\r
5. SUKANTA HUI'S LAW OF OBJECT GENESIS:\r
   - "An object must never be born in sin. A constructor is the sacred temple\r
      where an entity receives its identity, validates its domain truth,\r
      and establishes its lifelong invariants."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is a Constructor in Java and what is its primary purpose?",shortAnswer:"A special member block that has the same name as the class, no return type, and is invoked automatically when an object is instantiated via 'new' to initialize the object's state in Heap memory.",explanation:"A constructor is not a method; its sole purpose is to initialize instance variables, establish domain invariants, and prepare resources on the newly allocated Heap memory before returning the reference to the caller.",hint:"Special block with class's exact name used for object initialization.",level:"Beginner",codeExample:`public class Student {
    private String name;
    public Student(String name) { this.name = name; } // Constructor
}`},{question:"Why is Object Initialization considered mandatory in Object-Oriented Programming?",shortAnswer:"To prevent objects from existing in corrupted, uninitialized, or invalid states (e.g. null references, zero IDs) that cause immediate NullPointerExceptions or broken business logic.",explanation:"When 'new' allocates memory, all bytes are zeroed out (0, 0.0, null). Without constructor initialization, calling methods on reference fields throws NullPointerException immediately. Initialization guarantees object validity from the moment of birth.",hint:"Memory safety and invariant guarantee at birth.",level:"Beginner",codeExample:"// Without constructor: studentName is null -> calling studentName.toUpperCase() throws NullPointerException"},{question:"What are the 3 stages in the Object Creation Pipeline in Java?",shortAnswer:"1. Memory Allocation in Eden Space (Zero-Initialization) -> 2. Constructor Execution on 'this' -> 3. Reference Assignment to Stack variable.",explanation:"First, the 'new' keyword allocates required bytes on the Heap and zero-initializes all fields. Second, the constructor executes on the uninitialized instance using 'this'. Third, the 64-bit Heap address pointer is returned and stored in the caller's Stack frame.",hint:"Allocate -> Initialize -> Assign reference.",level:"Intermediate",codeExample:`Student s = new Student("Swadeep"); // 1. new allocates -> 2. Student(...) inits -> 3. 's' receives pointer`},{question:"Does a constructor allocate memory on the Heap?",shortAnswer:"No! The 'new' operator allocates Heap memory; the constructor only initializes the allocated memory.",explanation:"A common interview misconception is that constructors allocate memory. In bytecode, the 'new' instruction allocates memory and pushes the object reference onto the operand stack; 'invokespecial <init>' then calls the constructor to initialize that memory.",hint:"'new' allocates memory; the constructor initializes it.",level:"Intermediate",codeExample:"// Bytecode: 0: new #2 (Allocates) -> 3: dup -> 4: invokespecial #3 (Constructor Initializes)"},{question:"What happens if a developer writes NO constructor in a Java class?",shortAnswer:"The Java compiler automatically generates a Default No-Argument Constructor with an empty body and a call to 'super()'.",explanation:"If you don't declare any constructors, javac inserts 'public ClassName() { super(); }' into bytecode. This ensures every class has at least 1 constructor for instantiation.",hint:"Compiler supplies a default no-arg constructor.",level:"Beginner",codeExample:`// Source: class A {}
// Bytecode generated: class A { public A() { super(); } }`},{question:"What happens to the compiler-generated default constructor if you declare ANY custom constructor?",shortAnswer:"The compiler immediately suppresses and deletes the automatic default constructor.",explanation:"As soon as you define any constructor (e.g. 'public Student(int id)'), the compiler assumes you want to enforce specific initialization parameters, so it will no longer provide a no-arg constructor unless you explicitly write one.",hint:"Custom constructor suppresses the compiler's default constructor.",level:"Beginner",codeExample:`class Student { public Student(int id) {} }
// Student s = new Student(); // COMPILE ERROR: constructor Student() is undefined!`},{question:"Can a constructor have a return type like 'void' or 'int'?",shortAnswer:"No! If you add a return type (even 'void'), it ceases to be a constructor and becomes a normal method with the same name as the class.",explanation:"Writing 'public void Student()' declares a normal instance method named Student that returns void, leaving the class with a compiler-generated default constructor! This is a classic trap for beginner programmers.",hint:"Adding 'void' turns a constructor into a normal method.",level:"Beginner",codeExample:`// TRAP: This is a METHOD, NOT a constructor:
public void Student() { System.out.println("I am just a method!"); }`},{question:"What does the 'this' keyword represent inside a constructor body?",shortAnswer:"It holds the reference pointer to the newly allocated, currently initializing object instance on the Heap.",explanation:"Inside the constructor, 'this' refers to the exact physical object in Eden space that was just allocated by the 'new' operator, allowing constructor statements to assign values to its instance fields.",hint:"Pointer to the currently initializing object instance.",level:"Beginner",codeExample:"public Trainee(String name) { this.name = name; // 'this' points to new Heap instance }"},{question:"What is the return value of a constructor expression like 'new Student()'?",shortAnswer:"The 64-bit Heap memory address reference of the newly initialized object.",explanation:"The expression 'new Student()' evaluates to the reference address of the freshly initialized instance on the Heap, which can be stored in a Stack reference variable or passed anonymously.",hint:"Evaluates to the Heap address reference.",level:"Beginner",codeExample:"Student s = new Student(); // Evaluates to Heap pointer (e.g. 0x4517D9A3)"},{question:"Can a constructor throw an exception, and what happens to the allocated memory?",shortAnswer:"Yes! If a constructor throws an exception, object instantiation is aborted immediately and the unreferenced Heap memory is reclaimed during the next GC cycle.",explanation:"Throwing IllegalArgumentException inside a constructor prevents an object from being born in an invalid state. The caller never receives a reference, leaving the allocated bytes eligible for Garbage Collection.",hint:"Fail-fast at birth: exception aborts creation and memory is recycled.",level:"Intermediate",codeExample:`public Account(double balance) {
    if (balance < 0) throw new IllegalArgumentException("Negative balance disallowed");
}`},{question:"How do constructors enforce Domain Invariants at object birth?",shortAnswer:"By validating all constructor arguments (null checks, range limits, formatting) and rejecting invalid parameters before fields are assigned.",explanation:"An invariant is a rule that must hold true for the object across its entire lifecycle. Establishing invariants at birth ensures that no invalid instance can ever exist in Heap memory.",hint:"Validate arguments at birth before assigning to fields.",level:"Intermediate",codeExample:'this.studentId = (id > 0) ? id : throw new IllegalArgumentException("Invalid ID");'},{question:"Can a constructor be declared 'private', and what is the primary use case?",shortAnswer:"Yes! Private constructors prevent outside classes from instantiating the class with 'new', used in Singletons, Utility classes, and Factory patterns.",explanation:"Declaring a private constructor suppresses the default constructor and forces callers to use static factory methods ('Student.of(...)') or singleton instance accessors ('DatabasePool.getInstance()').",hint:"Private constructor prevents external 'new' instantiation.",level:"Intermediate",codeExample:`public final class MathUtils {
    private MathUtils() {} // Non-instantiable utility class
}`},{question:"What is the bytecode name used by the JVM for constructors?",shortAnswer:"'<init>'.",explanation:"In Java bytecode, instance constructors are represented by the special method name '<init>', while static initializer blocks are represented by '<clinit>'.",hint:"<init> for instance constructors; <clinit> for static initializers.",level:"Advanced",codeExample:'// Bytecode: 4: invokespecial #3 // Method "<init>":()V'},{question:"Can constructors be inherited by subclasses in Java?",shortAnswer:"No! Constructors are NOT members of a class and are NEVER inherited by subclasses.",explanation:"A child class inherits fields and methods, but NOT parent constructors. However, a child class constructor MUST invoke a parent constructor (either implicitly via super() or explicitly via super(...)).",hint:"Constructors are not inherited; they must be invoked via super().",level:"Beginner",codeExample:`class Parent { public Parent(int x) {} }
class Child extends Parent { public Child(int x) { super(x); } } // Must call super`},{question:"Why can't a constructor be marked with the 'static' modifier?",shortAnswer:"Because a constructor's purpose is to initialize a specific 'this' instance on the Heap, whereas static members belong to the class itself with no 'this' context.",explanation:"Combining 'static' with a constructor is a contradiction in terms. The compiler rejects 'static Student()' with 'modifier static not allowed here'.",hint:"Constructors initialize instance state on 'this'; static has no 'this'.",level:"Beginner",codeExample:"// Compile Error: public static Student() {}"},{question:"Why can't a constructor be marked with the 'final' modifier?",shortAnswer:"Because 'final' on a method prevents overriding in subclasses, but constructors are NEVER inherited or overridden in the first place.",explanation:"Since constructor overriding does not exist in Java, marking a constructor 'final' is meaningless and prohibited by the compiler ('modifier final not allowed here').",hint:"Constructors cannot be overridden, so final is illegal.",level:"Beginner",codeExample:"// Compile Error: public final Student() {}"},{question:"Why can't a constructor be marked with the 'abstract' modifier?",shortAnswer:"Because an abstract method has no implementation body, but an object cannot be constructed without an executing constructor body to initialize memory.",explanation:"Constructors must contain executable initialization bytecode. Declaring an abstract constructor causes a compile error: 'modifier abstract not allowed here'.",hint:"Constructors must have bodies to initialize memory.",level:"Beginner",codeExample:"// Compile Error: public abstract Student();"},{question:"Can a constructor be marked 'synchronized' in Java?",shortAnswer:"No. The JVM guarantees that the initializing instance is only visible to the creating thread until construction completes, making synchronization redundant.",explanation:"While an object is being constructed, only the thread executing 'new' has access to it. Therefore, locking the object during construction is unnecessary and prohibited by the compiler.",hint:"Constructing thread has exclusive access; synchronization is redundant.",level:"Advanced",codeExample:"// Compile Error: public synchronized Student() {}"},{question:"What is the first statement automatically executed in every constructor if no explicit constructor call is written?",shortAnswer:"'super();' (invoking the no-argument constructor of the superclass).",explanation:"If neither 'this(...)' nor 'super(...)' is the first line of a constructor, javac automatically inserts 'super();' as line 1 to ensure parent class state initializes before child state.",hint:"Implicit super() call to parent no-arg constructor.",level:"Intermediate",codeExample:`public Student() {
    // Compiler inserts 'super();' right here!
    System.out.println("Student init");
}`},{question:"What happens if a parent class has NO no-arg constructor and the child constructor does not write explicit 'super(...)'?",shortAnswer:"A compile-time error occurs: 'constructor Parent in class Parent cannot be applied to given types: required: int, found: no arguments'.",explanation:"Because the compiler tries to insert 'super();' automatically, but the parent has only parameterized constructors, compilation fails. The child MUST explicitly call 'super(args)' on line 1.",hint:"Child must explicitly invoke parent parameterized constructor.",level:"Intermediate",codeExample:`class Parent { Parent(int x) {} }
class Child extends Parent {
    Child() { super(10); } // Explicit super call is mandatory!
}`},{question:"Can a constructor invoke another constructor of the SAME class?",shortAnswer:"Yes! Using the 'this(...)' constructor chaining syntax as the very first line of the constructor body.",explanation:"Constructor chaining allows overloaded constructors to delegate to a master canonical constructor, eliminating duplicate validation and field assignment code.",hint:"this(...) syntax for constructor chaining in same class.",level:"Beginner",codeExample:'public Student(String name) { this(name, "Barrackpore"); } // Delegates to 2-arg constructor'},{question:"How do constructors facilitate Immutable Objects with 'final' fields?",shortAnswer:"Final fields must be assigned exactly once before constructor completion, making constructors the exclusive gateway for setting immutable state.",explanation:"Java guarantees that all 'final' fields assigned in a constructor are permanently frozen and safely published to all threads without race conditions.",hint:"Final fields are assigned permanently inside constructors.",level:"Intermediate",codeExample:`public class ImmutablePoint {
    private final int x, y;
    public ImmutablePoint(int x, int y) { this.x = x; this.y = y; }
}`},{question:"What is the danger of starting a background Thread inside a constructor?",shortAnswer:"The new thread can start executing before the constructor finishes initializing fields, accessing partially initialized state ('this' escape).",explanation:"If a constructor starts a thread that reads instance fields, the thread may run concurrently while fields are still null or zero. Never start threads inside constructors.",hint:"Never start threads inside constructors due to race conditions.",level:"Advanced",codeExample:"// BAD: public Worker() { new Thread(this).start(); // Escapes before init! }"},{question:"Can a constructor call an instance method of the same class?",shortAnswer:"Yes, but calling OVERRIDABLE (non-final, non-private) methods is dangerous because a subclass override could execute before child fields initialize.",explanation:"If parent constructor calls 'init()', and child overrides 'init()', the child's 'init()' runs before the child constructor has initialized its own fields! Only call private or final methods.",hint:"Only call private or final helper methods inside constructors.",level:"Advanced",codeExample:"public Parent() { validatePrivate(); } // Safe: private method cannot be overridden"},{question:"How does the 'record' feature in Java 16+ handle constructors?",shortAnswer:"Records automatically generate a Canonical Constructor matching all component fields, and support a Compact Constructor for validation.",explanation:"In a record, you can write 'public StudentRecord { Objects.requireNonNull(name); }' without parameter lists or field assignments—the compiler handles the rest.",hint:"Canonical and Compact constructors in Java records.",level:"Intermediate",codeExample:`public record Student(int roll, String name) {
    public Student { if (roll <= 0) throw new IllegalArgumentException(); }
}`},{question:"What is the difference between an Instance Initialization Block (IIB) and a Constructor?",shortAnswer:"An IIB runs for EVERY constructor before the constructor body executes; a constructor runs specific code for a given parameter signature.",explanation:"IIBs are useful for sharing common setup logic across all overloaded constructors without repeating code or when configuring anonymous inner classes.",hint:"IIB runs before constructor body on every instantiation.",level:"Intermediate",codeExample:`class Demo {
    { System.out.println("IIB runs first"); }
    Demo() { System.out.println("Constructor runs second"); }
}`},{question:"What happens if a constructor attempts to call itself recursively ('this()')?",shortAnswer:"A compile-time error occurs: 'recursive constructor invocation'.",explanation:"The Java compiler detects cyclic constructor calls at compile time and halts with an error, preventing infinite loops during instantiation.",hint:"Compiler detects and rejects recursive constructor loops.",level:"Beginner",codeExample:"// Compile Error: Demo() { this(); } -> recursive constructor invocation"},{question:"Can a constructor accept varargs (variable-length arguments) as parameters?",shortAnswer:"Yes! A constructor can take varargs (e.g. 'public Group(String... members)') as its last parameter.",explanation:"Varargs constructors allow flexible instantiation with zero, one, or many arguments, converted into an array under the hood.",hint:"Varargs parameter must be the last argument in constructor.",level:"Beginner",codeExample:"public Batch(String campus, Student... students) { ... }"},{question:"What is a 'Copy Constructor' in Java?",shortAnswer:"A constructor that creates a new independent duplicate object by copying state from an existing instance of the same class.",explanation:"Unlike C++, Java has no built-in copy constructor syntax, but developers implement 'public Student(Student other)' for clean, safe, deep object copying.",hint:"Constructor accepting an instance of the same class to clone state.",level:"Intermediate",codeExample:`public Student(Student other) {
    this.id = other.id;
    this.name = other.name;
}`},{question:"What is Sukanta Hui's Law of Object Genesis taught at the Barrackpore Academy?",shortAnswer:"An object must never be born in sin. A constructor is the sacred temple where an entity receives its identity, validates its domain truth, and establishes its lifelong invariants.",explanation:"At the Barrackpore academy, Sukanta Hui teaches that 90% of software bugs are born at instantiation time when uninitialized or invalid data slips into Heap memory. By establishing strict non-null validation, range checking, and invariant enforcement inside your constructors, your objects stand mathematically pure and bulletproof across the entire enterprise ecosystem.",hint:"Objects must never be born in invalid states; constructors establish lifelong truth.",level:"Beginner",codeExample:`// Sukanta Hui's Object Genesis Formula:
// Allocate Memory (new) -> Validate Invariants -> Bind 'this' State -> Safe Publication`}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes genesisGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(14, 165, 233, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-genesis {
            animation: genesisGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Genesis & Initialization Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"What is a Constructor and Why Object Initialization is Mandatory"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enter the gateway of object creation in Java: understanding the exact mechanical division of labor between the ",e.jsx("code",{className:"text-sky-400 font-mono",children:"new"})," operator (memory allocation) and the Constructor (state initialization), why uninitialized entities trigger catastrophic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," crashes, and how constructors guarantee domain invariants from the very instant of birth."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The 3-Stage Object Genesis Pipeline"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["When a Java program executes ",e.jsx("code",{className:"text-sky-300 font-mono",children:'Student s = new Student("Swadeep");'}),", the JVM executes a strict 3-stage creation pipeline:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"Stage 1: Allocation"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"})," opcode allocates raw zero-filled bytes in Eden Space (numbers set to 0, references to ",e.jsx("code",{className:"text-rose-300 font-mono",children:"null"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"Stage 2: Initialization"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["The constructor (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<init>"}),") executes on ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this"}),", validating arguments and populating fields."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"Stage 3: Assignment"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"The 64-bit Heap address pointer is returned and stored in the caller's Stack reference variable."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Uninitialized vs Initialized Trainee in Barrackpore Hub):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," was represented by an uninitialized class, his name defaulted to ",e.jsx("code",{className:"text-rose-400 font-mono",children:"null"}),", crashing the portal with a ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," the moment ",e.jsx("code",{className:"text-slate-200 font-mono",children:"getUppercaseName()"})," ran! Refactoring into a parameterized constructor guaranteed that all fields were validated and non-null before any method could ever execute!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The Object Genesis Architecture: From Raw Bytes to Valid Living Entity"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:["Visualizing how the JVM coordinates the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"})," operator, Eden memory allocation, constructor execution, and Stack assignment:"]}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 320",className:"w-full h-auto","aria-label":"Constructor Object Genesis Architecture Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"genArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"initArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})]}),e.jsx("rect",{x:"25",y:"25",width:"250",height:"270",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"150",y:"52",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"CALLER STACK FRAME"}),e.jsx("text",{x:"150",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"main() Method Execution"}),e.jsx("rect",{x:"35",y:"85",width:"230",height:"70",rx:"6",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"105",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:"Student s = new Student(...);"}),e.jsx("text",{x:"45",y:"125",fill:"#94a3b8",fontSize:"8",children:"1. Evaluates 'new' opcode"}),e.jsx("text",{x:"45",y:"140",fill:"#94a3b8",fontSize:"8",children:"2. Invokes constructor <init>"}),e.jsx("rect",{x:"35",y:"170",width:"230",height:"110",rx:"6",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"192",fill:"#bae6fd",fontSize:"9",fontWeight:"bold",children:"Local Variable Table (LVT):"}),e.jsx("text",{x:"45",y:"212",fill:"#7dd3fc",fontSize:"9",fontFamily:"monospace",children:"Slot 1: ref 's' → 0x4517D9A3"}),e.jsx("text",{x:"45",y:"240",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"&check; Receives initialized reference"}),e.jsx("text",{x:"45",y:"258",fill:"#a7f3d0",fontSize:"8",children:"after constructor completes!"}),e.jsx("rect",{x:"310",y:"25",width:"280",height:"270",rx:"10",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"52",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"STAGE 1: RAW HEAP ALLOCATION"}),e.jsx("text",{x:"450",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"'new' Operator in Eden Space"}),e.jsx("rect",{x:"325",y:"85",width:"250",height:"55",rx:"4",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"335",y:"105",fill:"#fef3c7",fontSize:"9",fontWeight:"bold",children:"Object Header Allocated (12B):"}),e.jsx("text",{x:"335",y:"125",fill:"#fde68a",fontSize:"8",fontFamily:"monospace",children:"Mark Word (8B) + Klass Word (4B)"}),e.jsx("rect",{x:"325",y:"150",width:"250",height:"130",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"335",y:"172",fill:"#e0e7ff",fontSize:"9",fontWeight:"bold",children:"Zero-Initialization Phase:"}),e.jsx("text",{x:"335",y:"192",fill:"#c7d2fe",fontSize:"8",fontFamily:"monospace",children:"studentId   = 0"}),e.jsx("text",{x:"335",y:"208",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"studentName = null (NPE Hazard!)"}),e.jsx("text",{x:"335",y:"224",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"branch      = null (NPE Hazard!)"}),e.jsx("text",{x:"335",y:"240",fill:"#c7d2fe",fontSize:"8",fontFamily:"monospace",children:"scholarship = 0.0"}),e.jsx("text",{x:"335",y:"265",fill:"#f87171",fontSize:"8",fontWeight:"bold",children:"× Unsafe for use until initialized!"}),e.jsx("rect",{x:"625",y:"25",width:"270",height:"270",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"760",y:"52",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"STAGE 2: CONSTRUCTOR INITIALIZATION"}),e.jsx("text",{x:"760",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"invokespecial <init> on 'this'"}),e.jsx("rect",{x:"635",y:"85",width:"250",height:"60",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"645",y:"105",fill:"#a7f3d0",fontSize:"9",fontWeight:"bold",children:"Validation & Invariant Defense:"}),e.jsx("text",{x:"645",y:"123",fill:"#fde047",fontSize:"8",fontFamily:"monospace",children:"Objects.requireNonNull(name)"}),e.jsx("text",{x:"645",y:"137",fill:"#fde047",fontSize:"8",fontFamily:"monospace",children:"if (id <= 0) throw IllegalArgumentException"}),e.jsx("rect",{x:"635",y:"155",width:"250",height:"125",rx:"4",fill:"#022c22",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"645",y:"175",fill:"#34d399",fontSize:"9",fontWeight:"bold",children:"Living Populated State:"}),e.jsx("text",{x:"645",y:"195",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"this.studentId   = 101"}),e.jsx("text",{x:"645",y:"210",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'this.studentName = "Swadeep Paul"'}),e.jsx("text",{x:"645",y:"225",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'this.campusBranch= "Barrackpore"'}),e.jsx("text",{x:"645",y:"240",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"this.scholarship = 12500.0"}),e.jsx("text",{x:"645",y:"265",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; 100% Invariant Compliant & NPE-Safe"}),e.jsx("path",{d:"M 275 115 L 310 115",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#genArrow)"}),e.jsx("path",{d:"M 590 200 L 625 200",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#initArrow)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"ConstructorFundamentalsAndMandatoryInitDemo.java"})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:["The executable Java code below demonstrates the perils of uninitialized objects crashing with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"}),", followed by the invariant defense of a robust parameterized constructor:"]}),e.jsx(t,{fileName:"ConstructorFundamentalsAndMandatoryInitDemo.java",code:i})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Constructor Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," 'new' vs Constructor"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"})," operator allocates raw memory in Eden space; the constructor initializes that allocated memory on ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Compiler Default Suppression"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"If NO constructor is written, the compiler generates a default no-arg constructor. As soon as you write ANY custom constructor, the compiler default is permanently suppressed."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," No Return Type Allowed"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Constructors have NO return type (not even ",e.jsx("code",{className:"text-rose-400 font-mono",children:"void"}),"). Adding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"void"})," turns the constructor into a normal instance method!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Invariant Defense at Birth"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Throwing an exception inside a constructor aborts instantiation immediately, preventing an object from ever existing in an invalid state in Heap memory."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Accidental 'void' Return Type on Constructor"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Adding ",e.jsx("code",{className:"text-rose-300 font-mono",children:"void"})," turns the constructor into a standard method. When calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"new Student()"}),", the compiler will call the default no-arg constructor, leaving fields uninitialized!"]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// TRAP: This is a METHOD, NOT a constructor!
public void Student(String name) {
    this.name = name; // Never runs during 'new Student()'
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Clean Constructor Signature with Invariant Validation"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Omit return types completely, match the class name exactly, and validate all parameters before binding."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// TRUE CONSTRUCTOR:
public Student(String name) {
    this.name = Objects.requireNonNull(name, "Name required");
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-indigo-500/10 p-6 md:p-8 rounded-2xl border border-sky-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why can a constructor NEVER be marked 'static'?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"static"})," keyword in Java designates a member that belongs to the class itself and executes without any instance context. However, the fundamental purpose of a constructor is to initialize a ",e.jsx("strong",{children:"specific physical object instance on the Heap"})," using the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this"})," reference pointer! Combining ",e.jsx("code",{className:"text-rose-400 font-mono",children:"static"})," with a constructor is a fundamental architectural contradiction: you cannot initialize an instance without an instance context!"]})]}),e.jsx(r,{quote:"An object must never be born in sin. A constructor is the sacred temple where an entity receives its identity, validates its domain truth, and establishes its lifelong invariants. If you guard object birth, your systems will run bug-free forever.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(a,{content:s,fileName:"Topic0_Constructor_Fundamentals_and_Mandatory_Init_Note.txt"})]})]})}export{f as default};

import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 3: Object Instantiation using the 'new' Keyword\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The 5 Phases of Object Instantiation in Java\r
 * ----------------------------------------------------------------------------\r
 * When a statement like:\r
 *     CourseEnrollment enrollment = new CourseEnrollment(101, "Java Fullstack", 6500.00);\r
 * is executed by the JVM, the following precise sequential phases take place:\r
 *\r
 * Phase 1: Class Loading & Verification (if not already loaded)\r
 *   - The JVM ClassLoader locates CourseEnrollment.class, loads it into Metaspace,\r
 *     verifies bytecode integrity, prepares static variables with default values,\r
 *     and runs static initializer blocks <clinit>() once per classloader.\r
 *\r
 * Phase 2: Heap Memory Allocation\r
 *   - The JVM calculates the exact memory size needed in Heap (Young Generation / Eden space):\r
 *       * Object Header:\r
 *           - Mark Word (64-bit on 64-bit JVM): hash code, GC age, locking state, biased locking metadata.\r
 *           - Klass Word (32-bit with Compressed Oops, or 64-bit): pointer to Metaspace class metadata.\r
 *       * Instance Fields: storage for primitive fields and reference pointers.\r
 *       * Padding / Alignment: byte padding to ensure the object size is a multiple of 8 bytes.\r
 *\r
 * Phase 3: Default Zero-Initialization\r
 *   - The allocated Heap memory block is zero-initialized:\r
 *       * byte, short, int, long -> 0\r
 *       * float, double          -> 0.0\r
 *       * boolean                -> false\r
 *       * char                   -> '\\u0000'\r
 *       * object references      -> null\r
 *\r
 * Phase 4: Explicit Field Initializers & Instance Initializer Blocks\r
 *   - Instance variable default assignments (e.g. status = "ACTIVE") and instance initializer\r
 *     blocks { ... } execute in textual declaration order.\r
 *\r
 * Phase 5: Constructor Invocation (<init>() Method)\r
 *   - The compiler-generated <init>() method executes:\r
 *       1. super() call to parent constructor (Object constructor).\r
 *       2. Constructor parameter validation and explicit field assignments.\r
 *   - Finally, the 'new' operator produces the 64-bit/32-bit Heap memory address reference,\r
 *     which is pushed onto the current Stack frame and assigned to the reference variable.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.time.LocalDateTime;\r
import java.time.format.DateTimeFormatter;\r
\r
public class ObjectInstantiationNewKeywordDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Nested Class: CourseEnrollment (Domain Entity)\r
    // ------------------------------------------------------------------------\r
    public static class CourseEnrollment {\r
\r
        // --- Class-Level Constant (Metaspace / Class Area) ---\r
        public static final String ACADEMY_BRANCH = "Barrackpore Learning Centre";\r
        private static int totalEnrollmentsCounter = 0;\r
\r
        // Static Initializer Block (Phase 1)\r
        static {\r
            System.out.println("  [Phase 1 - Class Loading] CourseEnrollment class metadata loaded into Metaspace.");\r
            System.out.println("  [Phase 1 - Class Loading] Static initialization complete. Branch: " + ACADEMY_BRANCH);\r
        }\r
\r
        // --- Instance Fields (Heap Storage) ---\r
        // Phase 3 sets: enrollmentId=0, studentName=null, courseTitle=null, feePaid=0.0, ...\r
        // Phase 4 sets explicit initializers below:\r
        private int enrollmentId;\r
        private String studentName;\r
        private String courseTitle;\r
        private double courseFeeInr;\r
        private String enrollmentStatus = "REGISTERED"; // Phase 4 explicit field initializer\r
        private final LocalDateTime registrationTimestamp; // Must be initialized before constructor finishes\r
\r
        // Instance Initializer Block (Phase 4)\r
        {\r
            totalEnrollmentsCounter++;\r
            this.registrationTimestamp = LocalDateTime.now();\r
            System.out.println("  [Phase 4 - Instance Initializer] Instance block running for Object #" + totalEnrollmentsCounter);\r
            System.out.println("  [Phase 4 - Instance Initializer] Pre-constructor status = '" + this.enrollmentStatus + "'");\r
        }\r
\r
        // --- Constructor (Phase 5 - <init>() method execution) ---\r
        public CourseEnrollment(int enrollmentId, String studentName, String courseTitle, double courseFeeInr) {\r
            System.out.println("  [Phase 5 - Constructor] super() completed. Executing constructor body...");\r
\r
            // Defensive Validation\r
            if (enrollmentId <= 0) {\r
                throw new IllegalArgumentException("Enrollment ID must be strictly positive.");\r
            }\r
            if (studentName == null || studentName.trim().isEmpty()) {\r
                throw new IllegalArgumentException("Student name cannot be blank.");\r
            }\r
            if (courseTitle == null || courseTitle.trim().isEmpty()) {\r
                throw new IllegalArgumentException("Course title cannot be blank.");\r
            }\r
            if (courseFeeInr < 0.0) {\r
                throw new IllegalArgumentException("Course fee cannot be negative.");\r
            }\r
\r
            this.enrollmentId = enrollmentId;\r
            this.studentName = studentName.trim();\r
            this.courseTitle = courseTitle.trim();\r
            this.courseFeeInr = courseFeeInr;\r
            this.enrollmentStatus = "CONFIRMED"; // Mutate status during constructor\r
\r
            System.out.println("  [Phase 5 - Constructor] Field assignment complete for: " + this.studentName);\r
        }\r
\r
        // --- Business Behavior Methods ---\r
        public void displayEnrollmentCard() {\r
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");\r
            System.out.println("  +-----------------------------------------------------------+");\r
            System.out.printf("  | Enrollment ID  : ENR-%05d                                |\\n", enrollmentId);\r
            System.out.printf("  | Student Name   : %-39s |\\n", studentName);\r
            System.out.printf("  | Course Title   : %-39s |\\n", courseTitle);\r
            System.out.printf("  | Course Fee     : ₹%-38.2f |\\n", courseFeeInr);\r
            System.out.printf("  | Status         : %-39s |\\n", enrollmentStatus);\r
            System.out.printf("  | Branch         : %-39s |\\n", ACADEMY_BRANCH);\r
            System.out.printf("  | Registered At  : %-39s |\\n", registrationTimestamp.format(dtf));\r
            System.out.printf("  | Identity Hash  : 0x%08X (JVM Heap Identity)        |\\n", System.identityHashCode(this));\r
            System.out.println("  +-----------------------------------------------------------+");\r
        }\r
\r
        public void applyScholarshipDiscount(double percentage) {\r
            if (percentage <= 0.0 || percentage > 100.0) {\r
                System.out.println("  [Warning] Invalid scholarship percentage: " + percentage + "%");\r
                return;\r
            }\r
            double discountAmount = (this.courseFeeInr * percentage) / 100.0;\r
            this.courseFeeInr -= discountAmount;\r
            System.out.printf("  [Scholarship Applied] %s received %.1f%% discount (-₹%.2f). New Fee: ₹%.2f\\n",\r
                    this.studentName, percentage, discountAmount, this.courseFeeInr);\r
        }\r
\r
        // Accessors\r
        public int getEnrollmentId() { return enrollmentId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCourseTitle() { return courseTitle; }\r
        public double getCourseFeeInr() { return courseFeeInr; }\r
        public String getEnrollmentStatus() { return enrollmentStatus; }\r
        public static int getTotalEnrollmentsCounter() { return totalEnrollmentsCounter; }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Complete Step-by-Step Instantiation Lifecycle Demonstrations\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP FOUNDATIONS: OBJECT INSTANTIATION VIA 'new' KEYWORD");\r
        System.out.println(" Educator: Sukanta Hui | Locations: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Step-by-Step 5-Phase Instantiation of Object 1 (Swadeep)\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Instantiating Object 1 (Swadeep - Barrackpore Lab)");\r
        System.out.println("Executing: CourseEnrollment swadeepEnrollment = new CourseEnrollment(1001, \\"Swadeep Paul\\", \\"Java Fullstack Enterprise\\", 8500.00);");\r
        System.out.println("Tracing 5 JVM internal lifecycle phases:\\n");\r
\r
        CourseEnrollment swadeepEnrollment = new CourseEnrollment(\r
                1001,\r
                "Swadeep Paul",\r
                "Java Fullstack Enterprise",\r
                8500.00\r
        );\r
\r
        System.out.println("\\n[Stack Reference Created]: 'swadeepEnrollment' contains Heap pointer -> 0x"\r
                + Integer.toHexString(System.identityHashCode(swadeepEnrollment)).toUpperCase());\r
        swadeepEnrollment.displayEnrollmentCard();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Instantiating Object 2 (Tuhina) - Distinct Heap Identity\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 2: Instantiating Object 2 (Tuhina - Naihati Centre)");\r
        System.out.println("Note: Class is already loaded. Phase 1 static loading is SKIPPED!\\n");\r
\r
        CourseEnrollment tuhinaEnrollment = new CourseEnrollment(\r
                1002,\r
                "Tuhina Das",\r
                "Spring Boot & Microservices",\r
                9500.00\r
        );\r
\r
        tuhinaEnrollment.applyScholarshipDiscount(15.0); // 15% Merit scholarship\r
        tuhinaEnrollment.displayEnrollmentCard();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Instantiating Object 3 (Abhronila) - Shyamnagar Centre\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Instantiating Object 3 (Abhronila - Shyamnagar Lab)");\r
\r
        CourseEnrollment abhronilaEnrollment = new CourseEnrollment(\r
                1003,\r
                "Abhronila Ray",\r
                "Advanced Data Structures & Algorithms",\r
                7500.00\r
        );\r
        abhronilaEnrollment.displayEnrollmentCard();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Demonstrating Identity Separation (Memory Addresses)\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Memory Identity Comparison (Reference vs State)");\r
        System.out.println("Comparing Stack references using == operator (Heap memory addresses):");\r
        boolean isSameReference = (swadeepEnrollment == tuhinaEnrollment);\r
        System.out.println("  swadeepEnrollment == tuhinaEnrollment : " + isSameReference + " (Distinct Heap memory addresses)");\r
        System.out.printf("  Swadeep Heap Address Hash : 0x%08X\\n", System.identityHashCode(swadeepEnrollment));\r
        System.out.printf("  Tuhina Heap Address Hash  : 0x%08X\\n", System.identityHashCode(tuhinaEnrollment));\r
        System.out.printf("  Abhronila Heap Address Hash: 0x%08X\\n", System.identityHashCode(abhronilaEnrollment));\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 5: Anonymous Object Instantiation (Fire-and-Forget)\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 5: Anonymous Object Instantiation via 'new' (No Stack Reference)");\r
        System.out.println("Executing: new CourseEnrollment(1004, \\"Debangshu Ghosh\\", \\"Python AI\\", 6000.00).displayEnrollmentCard();");\r
        System.out.println("Note: No reference variable holds this object; it becomes immediately eligible for Garbage Collection after method return.\\n");\r
\r
        new CourseEnrollment(\r
                1004,\r
                "Debangshu Ghosh",\r
                "Python AI & Data Engineering",\r
                6000.00\r
        ).displayEnrollmentCard();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 6: Total Cumulative Object Count via Static Metadata\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 6: Aggregated Class Metadata");\r
        System.out.println("Total CourseEnrollment instances created across all labs: "\r
                + CourseEnrollment.getTotalEnrollmentsCounter());\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" OBJECT INSTANTIATION DEMONSTRATION COMPLETE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 3: Object Instantiation using the 'new' Keyword\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPT: THE 'new' KEYWORD\r
   - Operator in Java used to dynamically allocate memory on the JVM Heap.\r
   - Creates a new instance of a class, executes the constructor, and returns\r
     the reference (Heap memory address) to the caller.\r
   - Syntax:\r
       ClassName refVar = new ClassName(arguments);\r
       ^-------^ ^----^   ^-^ ^------------------^\r
        Type      Stack   Operator Constructor Invocation\r
\r
2. THE 5-PHASE OBJECT INSTANTIATION LIFECYCLE:\r
   -----------------------------------------------------------------------------\r
   Phase 1: Class Loading & Static Initialization (if not already loaded)\r
            - ClassLoader loads .class into Metaspace.\r
            - Static variables initialized; static blocks <clinit>() run once.\r
   Phase 2: Heap Memory Allocation\r
            - Eden space contiguous block allocated.\r
            - Object Header: Mark Word (64-bit) + Klass Word (32/64-bit).\r
            - Space reserved for all primitive fields and reference pointers.\r
            - Memory alignment padding (8-byte boundary).\r
   Phase 3: Default Zero-Initialization\r
            - All primitive fields set to zero/false (0, 0.0, false, '\\u0000').\r
            - All reference fields set to null.\r
   Phase 4: Explicit Field Initializers & Instance Initializer Blocks\r
            - Field defaults and { ... } instance blocks execute in code order.\r
   Phase 5: Constructor Body Execution (<init> Method)\r
            - super() parent constructor runs.\r
            - Constructor parameter validation and explicit assignments occur.\r
            - Heap memory reference returned to Stack variable.\r
   -----------------------------------------------------------------------------\r
\r
3. OBJECT HEADER IN HOTSPOT JVM (64-bit):\r
   +-------------------------------------------------------------+\r
   | Mark Word (8 Bytes)   : HashCode, Age, Lock State, Biased ID |\r
   +-------------------------------------------------------------+\r
   | Klass Word (4/8 Bytes): Pointer to Metaspace Class Metadata |\r
   +-------------------------------------------------------------+\r
   | Instance Fields Data  : Primitives + References             |\r
   +-------------------------------------------------------------+\r
   | Padding (0-7 Bytes)   : 8-byte word alignment               |\r
   +-------------------------------------------------------------+\r
\r
4. STACK VS HEAP ROLES:\r
   - Stack Frame : Holds local reference variable (stores 4-byte/8-byte pointer).\r
   - Heap Memory : Holds the actual Object instance (Header + Fields).\r
   - Identity    : \`ref1 == ref2\` checks if both Stack variables point to the\r
                   EXACT same Heap memory address.\r
\r
5. ANONYMOUS OBJECTS:\r
   - Created without assigning to a reference variable.\r
   - Example: \`new CourseEnrollment(1004, "Debangshu", "AI", 6000.0).displayCard();\`\r
   - Use Case: Fire-and-forget method execution or passing as single-use parameter.\r
   - Lifecycle: Eligible for Garbage Collection immediately after statement execution.\r
\r
6. COMMON PITFALLS:\r
   - Confusing variable declaration (\`Student s;\`) with instantiation (\`new Student();\`).\r
   - Allowing \`this\` reference to escape inside a constructor before completion.\r
   - Unnecessary object creation in high-frequency loops causing Eden space churn.\r
   - Forgetting that multidimensional arrays instantiate multiple array objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the primary role of the 'new' keyword in Java?",shortAnswer:"It dynamically allocates memory on the JVM Heap for an object instance and triggers constructor initialization.",explanation:"The 'new' keyword is an operator in Java responsible for requesting Heap memory from the JVM, zero-initializing instance fields, triggering constructor execution (<init> method), and returning the 32/64-bit reference address of the newly allocated object to the caller.",hint:"Think about where objects live in memory (Heap) and how their lifecycle begins.",level:"Beginner",codeExample:'CourseEnrollment student = new CourseEnrollment(101, "Swadeep Paul", "Java", 6500.0);'},{question:"What are the 5 sequential phases that occur when 'new ClassName()' is executed?",shortAnswer:"1. Class loading/verification, 2. Heap memory allocation, 3. Default zero-initialization, 4. Explicit initializers & instance blocks, 5. Constructor execution.",explanation:"If the class is not yet loaded, the JVM ClassLoader loads it into Metaspace. Then the JVM allocates Heap bytes for object header + fields, zero-fills fields (0, null, false), executes explicit field initializers and instance initializer blocks in order, and finally executes the constructor body (<init>).",hint:"Trace from disk loading down to constructor execution.",level:"Intermediate",codeExample:`// Bytecode invokes 'new', 'dup', and 'invokespecial <init>'
CourseEnrollment s = new CourseEnrollment(102, "Tuhina Das", "Spring", 8500.0);`},{question:"What does the 'new' operator actually return in Java?",shortAnswer:"A reference (memory address pointer) to the allocated object on the Heap, not the object itself.",explanation:"In Java, object variables do not hold the object's composite data. Instead, 'new' returns a 32-bit or 64-bit reference value (an address in the Heap) which is stored in the reference variable on the Thread's execution Stack frame.",hint:"Variables on the Stack hold pointers, while the actual object state lives in Heap memory.",level:"Beginner",codeExample:`CourseEnrollment ref = new CourseEnrollment(...);
// 'ref' stores 0x7FFF1234 (Heap address), not the raw fields.`},{question:"What is the structure of an Object Header in JVM HotSpot memory?",shortAnswer:"Mark Word (metadata, lock state, GC age, hash) + Klass Word (pointer to Metaspace class metadata).",explanation:"In HotSpot 64-bit JVM, the object header typically consists of an 8-byte Mark Word (storing hashcode, GC age, locking flags, biased locking thread ID) and a Klass Word (4 bytes with Compressed OOPs or 8 bytes without) pointing to the class metadata in Metaspace.",hint:"Every object has overhead bytes before its actual fields begin.",level:"Advanced",codeExample:`// Object layout in memory:
// [Mark Word: 8 bytes] [Klass Word: 4/8 bytes] [Instance Fields] [Alignment Padding]`},{question:"Can an object exist in Java without using the 'new' keyword?",shortAnswer:"Yes, via reflection (newInstance), deserialization, clone(), Unsafe, or string literals.",explanation:"While 'new' is the standard way, objects can also be instantiated via Reflection (Constructor.newInstance()), Object Deserialization (ObjectInputStream.readObject()), the clone() method, sun.misc.Unsafe.allocateInstance(), or String literal pooling by the JVM.",hint:"Think about frameworks, serialization, and prototype copying.",level:"Intermediate",codeExample:`// Reflection instantiation:
CourseEnrollment c = CourseEnrollment.class.getDeclaredConstructor().newInstance();`},{question:"What happens if JVM Heap memory is completely exhausted when 'new' is called?",shortAnswer:"The JVM triggers Garbage Collection, and if still insufficient, throws java.lang.OutOfMemoryError (OOM).",explanation:"When Heap allocation fails, the JVM initiates a synchronous Stop-the-World Garbage Collection to reclaim dead objects. If available contiguous space is still insufficient to satisfy the allocation request, the JVM throws an OutOfMemoryError: Java heap space.",hint:"It is an Error, not an Exception, representing fatal resource exhaustion.",level:"Intermediate",codeExample:`try {
    byte[] hugeArray = new byte[Integer.MAX_VALUE - 2];
} catch (OutOfMemoryError e) {
    System.err.println("Heap exhausted: " + e.getMessage());
}`},{question:"What is default zero-initialization during object instantiation?",shortAnswer:"The JVM sets all primitive fields to zero/false and reference fields to null before any user code runs.",explanation:"During Phase 3 of instantiation, right after memory allocation, the memory page is wiped. Numeric primitives become 0 (or 0.0), booleans become false, chars become '\\u0000', and all object reference variables become null.",hint:"This prevents reading uninitialized garbage memory, ensuring type safety.",level:"Beginner",codeExample:`class Student {
    int age;         // 0
    boolean isPaid;  // false
    String name;     // null
}`},{question:"In what order do static blocks, instance blocks, and constructors execute when creating the first instance?",shortAnswer:"1. Static blocks (once) → 2. Instance initializers/fields → 3. Constructor body.",explanation:"When the first object of a class is created, static initializers and static fields execute first during class loading. Then, for each instance created, instance field initializers and instance blocks execute in textual order, followed immediately by the constructor body.",hint:"Static belongs to the Class; instance blocks belong to each individual Object.",level:"Intermediate",codeExample:`class Demo {
    static { System.out.println("1. Static"); }
    { System.out.println("2. Instance"); }
    Demo() { System.out.println("3. Constructor"); }
}`},{question:"What is an 'anonymous object' in Java?",shortAnswer:"An object created using 'new' without storing its reference in a named variable.",explanation:"An anonymous object is instantiated purely to invoke a single method or pass as an immediate method argument. Because no named reference variable keeps it reachable on the Stack, it becomes eligible for Garbage Collection right after the invoking statement completes.",hint:"Fire-and-forget object instantiation.",level:"Beginner",codeExample:'new CourseEnrollment(104, "Debangshu", "Python", 6000.0).displayEnrollmentCard();'},{question:"What are the 3 key bytecode instructions generated by javac for 'new CourseEnrollment()'?",shortAnswer:"'new', 'dup', and 'invokespecial <init>'.",explanation:"1. 'new #index' allocates uninitialized Heap memory and pushes the reference onto the operand stack. 2. 'dup' duplicates that reference on the stack (one for <init>, one to assign to the variable). 3. 'invokespecial' invokes the <init> constructor to initialize the object.",hint:"Check Java disassembler (javap -c) output.",level:"Advanced",codeExample:`// javap -c snippet:
// 0: new           #2 // class CourseEnrollment
// 3: dup
// 4: invokespecial #3 // Method <init>:()V
// 7: astore_1`},{question:"What is Memory Alignment/Padding in the JVM Object Layout?",shortAnswer:"Adding padding bytes so that total object size is always an exact multiple of 8 bytes.",explanation:"64-bit CPUs fetch data from memory most efficiently in 64-bit (8-byte) words. HotSpot JVM enforces 8-byte address alignment. If an object's header + fields total 21 bytes, the JVM adds 3 bytes of padding to round it up to 24 bytes.",hint:"Hardware architecture optimization for 64-bit bus alignment.",level:"Advanced",codeExample:`// Header (12B) + int id (4B) + boolean (1B) = 17 bytes
// JVM adds 7 bytes padding → Total 24 bytes.`},{question:"Does the declaration 'CourseEnrollment swadeep;' allocate memory for an object on the Heap?",shortAnswer:"No. It only allocates 4 or 8 bytes on the Stack for a reference variable, initialized to null or unassigned.",explanation:"Variable declaration alone reserves a slot in the Stack frame's local variable table. No Heap memory is allocated, and no constructor is called until the 'new' keyword is evaluated.",hint:"Declaration is a Stack slot; instantiation is Heap allocation.",level:"Beginner",codeExample:`CourseEnrollment swadeep; // Only Stack slot created. swadeep == null
swadeep = new CourseEnrollment(...); // Heap memory allocated now!`},{question:"Can 'new' be used with abstract classes or interfaces?",shortAnswer:"No, abstract classes and interfaces cannot be instantiated directly with 'new'.",explanation:"Attempting 'new AbstractClass()' or 'new InterfaceName()' triggers a compile-time error ('is abstract; cannot be instantiated'). However, 'new' can be used with an anonymous inner class syntax that implements all abstract methods on the fly.",hint:"Incomplete contracts cannot be turned into standalone objects.",level:"Beginner",codeExample:`// Compile Error: List list = new List();
// Valid: List<String> list = new ArrayList<>();`},{question:`What is the difference between 'new String("Barrackpore")' and '"Barrackpore"'?`,shortAnswer:"'new String()' always creates a distinct object in Heap; string literal uses the String Constant Pool.",explanation:`A string literal '"Barrackpore"' is stored in the String Constant Pool (inside Heap) and reused. Using 'new String("Barrackpore")' forces the JVM to allocate a brand new String object on the standard Heap outside the pool, referencing the pooled char array.`,hint:"Literal enables caching/interning; 'new' forces a distinct Heap allocation.",level:"Intermediate",codeExample:`String s1 = "Barrackpore";
String s2 = "Barrackpore";      // s1 == s2 is true
String s3 = new String("Barrackpore"); // s1 == s3 is false`},{question:"What role does the 'super()' statement play during object instantiation?",shortAnswer:"It initializes the parent class state before the subclass constructor executes its own body.",explanation:"Every constructor in Java (except java.lang.Object) must invoke its parent class constructor as its first statement (either explicitly or via compiler-inserted default super()). This ensures parent fields and invariants are established from top of inheritance down to the child.",hint:"Inherited state must be initialized before child specializations.",level:"Intermediate",codeExample:`class Student extends Person {
    Student(String name) {
        super(name); // Person state initialized first
    }
}`},{question:"What happens if a constructor throws an unhandled RuntimeException during 'new' execution?",shortAnswer:"Object creation fails, no reference is assigned, and partially created state becomes eligible for GC.",explanation:"If an exception is thrown inside the constructor, the assignment to the reference variable is aborted. The partially initialized memory on the Heap becomes orphaned and will be reclaimed during future Garbage Collection cycles.",hint:"Atomicity of reference assignment: assignment only happens if constructor finishes cleanly.",level:"Intermediate",codeExample:`CourseEnrollment s = null;
try {
    s = new CourseEnrollment(-5, "Tuhina", "Java", 5000.0); // Throws IllegalArgumentException
} catch (Exception e) {
    // 's' remains null!
}`},{question:"What is 'Escape Analysis' and can the JIT compiler eliminate 'new' Heap allocation?",shortAnswer:"Yes. JIT uses Escape Analysis to allocate non-escaping objects on the Stack instead of the Heap (Scalar Replacement).",explanation:"If the JIT compiler determines that an object created with 'new' does not escape the current method (never returned, not stored in a static/instance field, not passed across threads), it can perform Scalar Replacement, breaking the object into primitive local variables on the Stack, avoiding Heap GC overhead.",hint:"High-performance JVM optimization for local short-lived objects.",level:"Advanced",codeExample:`void calculate() {
    Point p = new Point(10, 20); // If 'p' never escapes, JIT allocates on Stack!
    int sum = p.x + p.y;
}`},{question:"Why should we avoid allowing the 'this' reference to escape during constructor execution?",shortAnswer:"Because other threads or callbacks might observe an incompletely constructed object in inconsistent state.",explanation:"If a constructor passes 'this' to an event listener, static registry, or starts a Thread in its body, another thread can access fields before the constructor finishes assigning default/validated values, violating thread-safety and object invariants.",hint:"Never publish 'this' before the closing brace of the constructor.",level:"Advanced",codeExample:`// UNSAFE Constructor:
class EventSource {
    public EventSource(EventListener listener) {
        listener.register(this); // BAD: 'this' escapes before construction finishes!
    }
}`},{question:"What is Compressed OOPs (Compressed Ordinary Object Pointers) in 64-bit JVMs?",shortAnswer:"A JVM feature that compresses 64-bit pointers down to 32 bits on heaps up to 32 GB.",explanation:"On 64-bit JVMs with heaps < 32 GB, HotSpot uses 3-bit shifted 32-bit integer offsets (since objects are 8-byte aligned, the lowest 3 bits are always 0). This cuts reference size from 8 bytes to 4 bytes, saving up to 40% memory cache footprint.",hint:"-XX:+UseCompressedOops is enabled by default on 64-bit Java.",level:"Advanced",codeExample:`// 64-bit reference uncompressed: 8 bytes
// 64-bit reference with Compressed OOPs: 4 bytes`},{question:"What is the difference between 'System.identityHashCode(obj)' and 'obj.hashCode()'?",shortAnswer:"identityHashCode returns the default JVM-assigned memory hash regardless of method overrides; hashCode() can be overridden.",explanation:"System.identityHashCode(obj) computes the default hash code generated from the object's original identity (stored in the Mark Word). In contrast, obj.hashCode() calls whatever overridden logic the class developer defined.",hint:"Use identityHashCode when you want pure reference identity.",level:"Intermediate",codeExample:`CourseEnrollment c = new CourseEnrollment(...);
System.out.println(System.identityHashCode(c)); // Raw JVM identity hash
System.out.println(c.hashCode());              // Class-defined hash code`},{question:"Can you invoke a method on an object directly after 'new' without saving it in a variable?",shortAnswer:"Yes, this creates an anonymous object and immediately invokes the method.",explanation:"Syntax such as 'new Scanner(System.in).nextLine()' or 'new CourseEnrollment(...).displayEnrollmentCard()' is completely valid. The object is created, the method is invoked, and the object reference is discarded.",hint:"Chaining method call immediately on the instantiation expression.",level:"Beginner",codeExample:'new CourseEnrollment(105, "Abhronila", "DSA", 7500.0).displayEnrollmentCard();'},{question:"What is the difference between shallow copy and creating a new object via 'new'?",shortAnswer:"Shallow copy shares nested object references; creating with 'new' allocates independent instances.",explanation:"A shallow copy duplicates primitive fields and copies reference addresses (meaning both outer objects share the same internal nested objects). Instantiating deeply with 'new' allocates brand new distinct internal objects.",hint:"Beware of shared mutable references in cloned structures.",level:"Intermediate",codeExample:`// Deep copy instantiates new internal objects with 'new':
Student copy = new Student(original.getName(), new Address(original.getAddress()));`},{question:"Why does Java not support stack allocation for objects directly like C++ does?",shortAnswer:"Java guarantees memory safety, automatic garbage collection, and unified reference semantics via Heap allocation.",explanation:"In C++, objects can be declared directly on the stack (`Student s;`), causing dangling pointer bugs if a pointer escapes the stack frame. Java eliminates manual memory corruption by forcing dynamic allocations onto the managed Heap, leaving Stack optimization to the JIT compiler (Escape Analysis).",hint:"Safety and garbage collection manageability over manual memory risks.",level:"Intermediate",codeExample:`// C++ (Stack): Student s; // destroyed on scope exit
// Java: Student s = new Student(); // managed on Heap by JVM GC`},{question:"What is the TLAB (Thread-Local Allocation Buffer) in JVM Heap?",shortAnswer:"A private memory region in Eden space allocated to each thread to allow lock-free 'new' instantiations.",explanation:"To prevent multi-threaded lock contention when thousands of threads allocate objects simultaneously, the JVM gives each thread a small chunk of Eden space called a TLAB. 'new' allocations within the TLAB require only updating a thread-local pointer (bump-the-pointer) with zero synchronization locks.",hint:"Massive performance optimization for multi-threaded object allocation.",level:"Advanced",codeExample:"// TLAB enables ultra-fast O(1) lock-free allocation for 'new Object()'"},{question:"Does 'new' call a static method or an instance method when executing the constructor?",shortAnswer:"It executes a special instance initialization method named '<init>' via the 'invokespecial' bytecode.",explanation:"In JVM bytecode, constructors do not exist as standard methods. The javac compiler translates every constructor into a private instance method named '<init>'. The 'new' operator prepares the memory and then 'invokespecial' runs '<init>' on that uninitialized memory block.",hint:"<init> is instance initialization; <clinit> is static class initialization.",level:"Advanced",codeExample:"// Bytecode: invokespecial #1 // Method <init>:(ILjava/lang/String;)V"},{question:"Can a constructor have a return type like 'void' or 'CourseEnrollment'?",shortAnswer:"No. If you specify a return type, Java treats it as a regular instance method, not a constructor.",explanation:"Constructors must have the exact same name as the class and must NOT declare any return type (not even void). If you write 'public void Student()', the compiler interprets it as a normal method named Student, which won't be called by 'new Student()'.",hint:"Adding 'void' silently turns your constructor into a ordinary method.",level:"Beginner",codeExample:`class Student {
    public void Student() {} // WARNING: Normal method, NOT a constructor!
    public Student() {}      // Valid constructor
}`},{question:"What is the lifecycle of an object created via 'new' from creation to reclamation?",shortAnswer:"1. Created & Initialized → 2. In Use (Reachable) → 3. Unreachable → 4. Finalized (deprecated) → 5. Reclaimed by GC.",explanation:"An object is born when 'new' allocates it. It remains in-use as long as a GC Root holds a reference. When all references are cleared (nullified or out of scope), it enters the unreachable state and the Garbage Collector reclaims its Heap space during minor/major GC.",hint:"Root reachability determines when JVM Garbage Collector recycles the bytes.",level:"Intermediate",codeExample:`CourseEnrollment s = new CourseEnrollment(...); // Created & In Use
s = null; // Unreachable → GC Reclaims memory`},{question:"What is the danger of repeatedly creating large numbers of short-lived objects in a tight loop?",shortAnswer:"High GC pressure, Eden space churn, frequent minor GC pauses, and CPU overhead.",explanation:"Creating millions of temporary objects inside loops fills Eden space rapidly, triggering frequent Minor Garbage Collections. While modern JVMs optimize short-lived allocations, excessive churn reduces throughput and causes latency spikes.",hint:"Object pooling or reusing mutable builders/buffers can alleviate GC pressure.",level:"Intermediate",codeExample:`// Inefficient:
for (int i = 0; i < 1_000_000; i++) {
    String s = new String("Item: " + i); // 1M objects created
}
// Better: StringBuilder or primitive structures`},{question:"How does the 'new' keyword handle multidimensional arrays like 'int[][] matrix = new int[3][4]'?",shortAnswer:"It allocates an array of array references in the Heap, where each row is a separate 1D array object.",explanation:"In Java, multidimensional arrays are 'arrays of arrays'. 'new int[3][4]' creates 1 parent array holding 3 reference pointers, and 3 distinct child array objects of size 4 on the Heap.",hint:"Java arrays are non-contiguous in multidimensional layouts (ragged array support).",level:"Intermediate",codeExample:"int[][] matrix = new int[3][4]; // 4 distinct array objects allocated on Heap!"},{question:"What is the Golden Rule of Object Creation taught by Sukanta Hui at the Barrackpore Academy?",shortAnswer:"Construct valid, fully initialized objects with guaranteed invariants from the moment 'new' returns.",explanation:"Never allow an object to escape constructor initialization in a half-baked, invalid, or corrupted state. Every constructor called by 'new' must validate arguments, assign immutable baselines, and guarantee domain invariants before handing the reference to the caller.",hint:"Invariants must be established at birth so that all downstream methods can trust object state.",level:"Beginner",codeExample:`// Sukanta Hui's Invariant Pattern:
public CourseEnrollment(int id, String name, double fee) {
    if (id <= 0 || name == null || fee < 0) throw new IllegalArgumentException("Invalid enrollment state!");
    this.id = id; this.name = name; this.fee = fee;
}`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.35)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.75)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-pulse-glow {
            animation: pulseGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Creation & Runtime Lifecycle"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Object Instantiation using the ",e.jsx("code",{className:"text-sky-400 font-mono",children:"'new'"})," Keyword"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Unveil the precise 5-phase JVM lifecycle triggered when the ",e.jsx("code",{className:"text-sky-400 font-mono",children:"new"})," operator executes: exploring dynamic Heap allocation in Eden space, the HotSpot 64-bit Object Header (Mark Word & Klass Word), default zero-initialization, instance blocks, and constructor binding."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," The 5 Sequential Phases of ",e.jsx("code",{className:"font-mono",children:"new ClassName()"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["When a Java statement like ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'CourseEnrollment student = new CourseEnrollment(1001, "Swadeep", "Java", 8500.0);'})," executes, the JVM carries out 5 rigorous internal operations:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs",children:[e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-sky-400 font-bold block mb-1",children:"Phase 1"}),e.jsx("h3",{className:"text-white font-bold text-xs mb-1",children:"Class Loading"}),e.jsxs("p",{className:"text-slate-400 font-sans text-xs",children:["Locates ",e.jsx("code",{className:"text-sky-300",children:".class"}),", loads to Metaspace, runs static initializers once."]})]})}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-indigo-500/30 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-indigo-400 font-bold block mb-1",children:"Phase 2"}),e.jsx("h3",{className:"text-white font-bold text-xs mb-1",children:"Heap Allocation"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"Calculates size (Header + Fields + 8B Padding) & claims Eden memory."})]})}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-purple-400 font-bold block mb-1",children:"Phase 3"}),e.jsx("h3",{className:"text-white font-bold text-xs mb-1",children:"Zero Init"}),e.jsxs("p",{className:"text-slate-400 font-sans text-xs",children:["Fills memory with type defaults: ",e.jsx("code",{className:"text-purple-300",children:"0, 0.0, false, null"}),"."]})]})}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-amber-400 font-bold block mb-1",children:"Phase 4"}),e.jsx("h3",{className:"text-white font-bold text-xs mb-1",children:"Instance Inits"}),e.jsxs("p",{className:"text-slate-400 font-sans text-xs",children:["Executes field defaults & ",e.jsx("code",{className:"text-amber-300",children:"{ ... }"})," instance initializer blocks."]})]})}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-emerald-400 font-bold block mb-1",children:"Phase 5"}),e.jsx("h3",{className:"text-white font-bold text-xs mb-1",children:"Constructor"}),e.jsxs("p",{className:"text-slate-400 font-sans text-xs",children:["Runs ",e.jsx("code",{className:"text-emerald-300",children:"<init>()"}),", validates invariants, and returns Heap pointer to Stack."]})]})})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Barrackpore & Naihati Labs):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," was registered in our Barrackpore lab, Phase 1 loaded the academy static metadata into Metaspace. When ",e.jsx("strong",{children:"Tuhina Das"})," registered next in Naihati, Phase 1 was completely bypassed because the class definition was already compiled in memory!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Architectural Memory Model: Stack Pointer & Heap Object Anatomy"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing the JVM Stack frame holding the 64-bit reference address pointing to the Eden Heap Object Layout (Mark Word, Klass Word, Instance Fields, and 8-byte Alignment Padding):"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 900 320",className:"w-full h-auto","aria-label":"Object Instantiation Stack and Heap Memory Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"stackGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#0284c7"}),e.jsx("stop",{offset:"100%",stopColor:"#0369a1"})]}),e.jsxs("linearGradient",{id:"heapGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsx("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})})]}),e.jsx("rect",{x:"30",y:"30",width:"260",height:"260",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"60",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"Thread Call Stack"}),e.jsx("text",{x:"160",y:"78",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"main() Stack Frame"}),e.jsx("rect",{x:"45",y:"100",width:"230",height:"60",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"55",y:"122",fill:"#bae6fd",fontSize:"11",fontFamily:"monospace",children:"swadeepEnrollment"}),e.jsx("text",{x:"55",y:"142",fill:"#fef08a",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"Value: 0x7BA4F24F"}),e.jsx("rect",{x:"45",y:"175",width:"230",height:"60",rx:"6",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"55",y:"197",fill:"#94a3b8",fontSize:"11",fontFamily:"monospace",children:"tuhinaEnrollment"}),e.jsx("text",{x:"55",y:"217",fill:"#86efac",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"Value: 0x5D099F62"}),e.jsx("text",{x:"160",y:"270",fill:"#64748b",fontSize:"10",textAnchor:"middle",children:"Holds 32/64-bit Reference Pointers"}),e.jsx("path",{d:"M 275 130 C 350 130, 390 100, 445 100",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",strokeDasharray:"4 2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"450",y:"30",width:"420",height:"260",rx:"10",fill:"#0f172a",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"660",y:"55",fill:"#34d399",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"JVM Heap (Eden Generation)"}),e.jsx("text",{x:"660",y:"72",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Memory Address: 0x7BA4F24F"}),e.jsx("rect",{x:"465",y:"85",width:"390",height:"32",rx:"4",fill:"#042f2e",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"475",y:"105",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"Mark Word (8B) : HashCode, GC Age, Lock State"}),e.jsx("rect",{x:"465",y:"122",width:"390",height:"32",rx:"4",fill:"#042f2e",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"475",y:"142",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"Klass Word (4/8B) : Pointer to Metaspace Class Metadata"}),e.jsx("rect",{x:"465",y:"160",width:"390",height:"70",rx:"4",fill:"#134e4a",stroke:"#14b8a6",strokeWidth:"1"}),e.jsx("text",{x:"475",y:"180",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:"int enrollmentId = 1001 (4 Bytes)"}),e.jsx("text",{x:"475",y:"196",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:'String studentName = "Swadeep Paul" (Reference Pointer)'}),e.jsx("text",{x:"475",y:"212",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:"double courseFeeInr = 8500.00 (8 Bytes)"}),e.jsx("rect",{x:"465",y:"235",width:"390",height:"25",rx:"4",fill:"#1e293b",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"475",y:"252",fill:"#94a3b8",fontSize:"10",fontFamily:"monospace",children:"Alignment Padding (0-7 Bytes to round to 8-byte boundary)"}),e.jsx("text",{x:"660",y:"280",fill:"#6ee7b7",fontSize:"10",textAnchor:"middle",children:"Physical Object Size = Header + Fields + Padding"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"ObjectInstantiationNewKeywordDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The complete runnable source code below traces the 5 JVM instantiation phases in real-time, validates domain parameters, and demonstrates anonymous object garbage-collection eligibility:"}),e.jsx(t,{fileName:"ObjectInstantiationNewKeywordDemo.java",code:s})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & JVM Technical Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Reference vs Object Identity"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"})," keyword produces a reference memory address. The variable on the Stack only holds this pointer. Two distinct objects created with identical parameters will have distinct Heap memory addresses (",e.jsx("code",{className:"text-red-400 font-mono",children:"objA == objB"})," is ",e.jsx("code",{className:"text-red-400 font-mono",children:"false"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," HotSpot Object Header Structure"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Every Java object in memory has an overhead of 12 to 16 bytes: an 8-byte ",e.jsx("strong",{children:"Mark Word"})," (hash, GC age, lock state) and a 4/8-byte ",e.jsx("strong",{children:"Klass Word"})," (Metaspace type pointer)."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Bytecode Triad: ",e.jsx("code",{className:"font-mono",children:"new"}),", ",e.jsx("code",{className:"font-mono",children:"dup"}),", ",e.jsx("code",{className:"font-mono",children:"invokespecial"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["The Java compiler emits 3 consecutive bytecode instructions: ",e.jsx("code",{className:"text-purple-300 font-mono",children:"new"})," to allocate uninitialized Heap space, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"dup"})," to duplicate the pointer, and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"invokespecial <init>"})," to run the constructor."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Anonymous Object Lifecycle"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new CourseEnrollment(...).displayCard();"})," creates an object without storing it in a named reference variable. It is immediately eligible for Garbage Collection once the statement completes."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Anti-Pattern: Allowing 'this' to Escape during Construction"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Publishing the object reference to an event listener or starting a thread inside a constructor exposes partially initialized, invalid state to other threads."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// UNSAFE: 'this' escapes before fields are set!
public CourseManager(EventListener listener) {
    listener.register(this); // Dangerous race condition!
    this.academyId = 101;
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Safe Construction & Guarded Invariants"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Perform all validation and field initialization first. Only register or publish the object via a static factory method after the constructor returns cleanly."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Static Factory Method pattern
public static CourseManager createAndRegister(EventListener listener) {
    CourseManager mgr = new CourseManager(101);
    listener.register(mgr); // Fully constructed!
    return mgr;
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-sky-500/10 p-6 md:p-8 rounded-2xl border border-amber-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Can the JVM allocate objects without Heap memory?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Through a JIT compiler optimization known as ",e.jsx("strong",{children:"Escape Analysis"})," (Scalar Replacement), if the JVM proves that an object created via ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new Point(x, y)"})," never escapes the method scope (never returned, never stored in a field, never shared across threads), the JVM can deconstruct the object and allocate its primitive fields directly onto the CPU registers or Stack frame, eliminating Heap allocation and Garbage Collection overhead entirely!"]})]}),e.jsx(r,{quote:"When you type 'new', you are not just allocating bytes in RAM—you are ushering a new autonomous entity into existence. Guard its creation with rigorous validations so that no invalid object ever walks the memory of your application.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(a,{content:i,fileName:"Topic3_Object_Instantiation_New_Keyword_Note.txt"})]})]})}export{x as default};

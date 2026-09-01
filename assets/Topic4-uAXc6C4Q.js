import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 4: Memory Model: Reference Variables on Stack Pointing to Object Instances on Heap\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Architecture: JVM Runtime Data Areas (Stack vs Heap)\r
 * ----------------------------------------------------------------------------\r
 * 1. Thread Call Stack (Thread-Private, Fast, LIFO Lifecycle):\r
 *    - Each thread has its own private execution Stack.\r
 *    - Whenever a method is invoked, a new 'Stack Frame' is pushed onto the stack.\r
 *    - Stack Frame contains:\r
 *        a) Local Variable Table (primitives like int, double, boolean + reference pointers).\r
 *        b) Operand Stack (temporary computation evaluation).\r
 *        c) Frame Data (return values, exception dispatch tables).\r
 *    - When the method finishes execution, the Stack Frame is popped immediately,\r
 *      reclaiming memory with zero Garbage Collector overhead!\r
 *\r
 * 2. JVM Heap Memory (Thread-Shared, Dynamic, GC Managed):\r
 *    - Shared globally across all application threads.\r
 *    - All object instances, arrays, and instance variables live on the Heap.\r
 *    - Divided into Young Generation (Eden, Survivor S0, Survivor S1) and\r
 *      Old/Tenured Generation.\r
 *    - Objects remain on the Heap until no reachable reference paths exist from GC Roots,\r
 *      at which point the Garbage Collector recycles the memory.\r
 *\r
 * 3. Reference Semantics in Java:\r
 *    - Java is STRICTLY PASS-BY-VALUE.\r
 *    - For primitive variables: the actual numeric/boolean literal value is copied.\r
 *    - For object references: the 64-bit/32-bit MEMORY ADDRESS POINTER is copied by value.\r
 *    - Modifying state via \`ref.field = val\` mutates the shared Heap object!\r
 *    - Reassigning \`ref = new Object()\` merely changes the local pointer on the current Stack Frame.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
public class StackHeapMemoryModelDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: StudentScholarshipRecord (Lives on Heap)\r
    // ------------------------------------------------------------------------\r
    public static class StudentScholarshipRecord {\r
        private int studentId;\r
        private String studentName;\r
        private String campusBranch;\r
        private double scholarshipAmountInr;\r
\r
        public StudentScholarshipRecord(int studentId, String studentName, String campusBranch, double scholarshipAmountInr) {\r
            this.studentId = studentId;\r
            this.studentName = studentName;\r
            this.campusBranch = campusBranch;\r
            this.scholarshipAmountInr = scholarshipAmountInr;\r
        }\r
\r
        // State Mutation Behavior\r
        public void awardBonus(double bonusInr) {\r
            this.scholarshipAmountInr += bonusInr;\r
        }\r
\r
        public void relocateBranch(String newBranch) {\r
            this.campusBranch = newBranch;\r
        }\r
\r
        public void printState(String label) {\r
            System.out.printf("  [%-18s] ID: %d | Name: %-15s | Campus: %-12s | Scholarship: ₹%,9.2f | Heap Hash: 0x%08X\\n",\r
                    label, studentId, studentName, campusBranch, scholarshipAmountInr, System.identityHashCode(this));\r
        }\r
\r
        public int getStudentId() { return studentId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCampusBranch() { return campusBranch; }\r
        public double getScholarshipAmountInr() { return scholarshipAmountInr; }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Method 1: Demonstrating Pass-by-Value on Object References (Mutating State)\r
    // ------------------------------------------------------------------------\r
    public static void upgradeScholarship(StudentScholarshipRecord recordParam, double bonusInr) {\r
        System.out.println("  --> [Entering upgradeScholarship() Stack Frame]");\r
        System.out.printf("      recordParam Stack pointer value: 0x%08X (Copied Reference Value)\\n",\r
                System.identityHashCode(recordParam));\r
\r
        // Mutating the object on the shared Heap\r
        recordParam.awardBonus(bonusInr);\r
        recordParam.relocateBranch("Barrackpore Central");\r
\r
        System.out.println("      State modified via recordParam on shared Heap!");\r
        System.out.println("  <-- [Exiting upgradeScholarship() Stack Frame Popped]\\n");\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Method 2: Demonstrating Reference Reassignment inside a Method (No External Effect)\r
    // ------------------------------------------------------------------------\r
    public static void attemptReferenceReassignment(StudentScholarshipRecord recordParam) {\r
        System.out.println("  --> [Entering attemptReferenceReassignment() Stack Frame]");\r
        System.out.printf("      Initial recordParam pointer: 0x%08X\\n", System.identityHashCode(recordParam));\r
\r
        // Reassigning local parameter to point to a BRAND NEW Heap object\r
        recordParam = new StudentScholarshipRecord(9999, "Temp Student", "Naihati Lab", 1000.0);\r
        System.out.printf("      Reassigned recordParam to new Heap Object: 0x%08X\\n",\r
                System.identityHashCode(recordParam));\r
        recordParam.printState("Inside Method After Reassign");\r
\r
        System.out.println("      Local pointer changed; original caller Stack reference remains untouched!");\r
        System.out.println("  <-- [Exiting attemptReferenceReassignment() Stack Frame Popped]\\n");\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Method 3: Recursive Stack Frame Depth Demonstration\r
    // ------------------------------------------------------------------------\r
    public static void traceStackDepth(int currentDepth, int maxDepth, StudentScholarshipRecord sharedRef) {\r
        if (currentDepth > maxDepth) {\r
            System.out.printf("      [Max Depth %d Reached] Stack contains %d active frames all pointing to Heap 0x%08X\\n",\r
                    maxDepth, maxDepth, System.identityHashCode(sharedRef));\r
            return;\r
        }\r
        traceStackDepth(currentDepth + 1, maxDepth, sharedRef);\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Complete Stack vs Heap Lifetime & Pass-by-Value Visualizer\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA JVM MEMORY MODEL: STACK VS HEAP ARCHITECTURE");\r
        System.out.println(" Mentor: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // SCENARIO 1: Stack Frame Allocation for Primitives vs Heap References\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> SCENARIO 1: Local Variables on main() Stack Frame");\r
        int baseBatchYear = 2026;                       // Primitive: value 2026 stored directly on Stack\r
        double minimumStipend = 5000.00;                 // Primitive: 8-byte IEEE 754 value on Stack\r
\r
        // Heap Object Allocation: 'swadeep' holds 64-bit Heap address pointer\r
        StudentScholarshipRecord swadeep = new StudentScholarshipRecord(\r
                101, "Swadeep Paul", "Barrackpore", 12000.00\r
        );\r
\r
        // Another Heap Object: 'tuhina' holds distinct Heap pointer\r
        StudentScholarshipRecord tuhina = new StudentScholarshipRecord(\r
                102, "Tuhina Das", "Naihati", 14500.00\r
        );\r
\r
        System.out.println("  Stack Local Variable 'baseBatchYear'   : " + baseBatchYear + " (Direct Value on Stack)");\r
        System.out.println("  Stack Local Variable 'minimumStipend' : ₹" + minimumStipend + " (Direct Value on Stack)");\r
        System.out.printf("  Stack Reference Var  'swadeep'        : Points to Heap 0x%08X\\n", System.identityHashCode(swadeep));\r
        System.out.printf("  Stack Reference Var  'tuhina'         : Points to Heap 0x%08X\\n", System.identityHashCode(tuhina));\r
\r
        System.out.println("\\nInitial State on Heap:");\r
        swadeep.printState("Swadeep Initial");\r
        tuhina.printState("Tuhina Initial");\r
\r
        // --------------------------------------------------------------------\r
        // SCENARIO 2: Pass-by-Value Reference Passing & Heap State Mutation\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> SCENARIO 2: Passing Reference to Method upgradeScholarship(swadeep, 3000.0)");\r
        System.out.println("Calling upgradeScholarship()...");\r
        upgradeScholarship(swadeep, 3000.00);\r
\r
        System.out.println("State in main() after upgradeScholarship() returned:");\r
        swadeep.printState("Swadeep Post-Upgrade");\r
\r
        // --------------------------------------------------------------------\r
        // SCENARIO 3: Pass-by-Value Reference Reassignment Test\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> SCENARIO 3: Attempting Reference Reassignment inside attemptReferenceReassignment(tuhina)");\r
        System.out.println("Calling attemptReferenceReassignment()...");\r
        attemptReferenceReassignment(tuhina);\r
\r
        System.out.println("State in main() after attemptReferenceReassignment() returned:");\r
        tuhina.printState("Tuhina Unaffected");\r
\r
        // --------------------------------------------------------------------\r
        // SCENARIO 4: Stack Frame Push & Pop Recursion Visualization\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> SCENARIO 4: Tracing Deep Stack Frames with Shared Heap Reference");\r
        System.out.println("Invoking recursive method to build 5 Stack Frames holding the same Heap pointer:");\r
        traceStackDepth(1, 5, swadeep);\r
\r
        // --------------------------------------------------------------------\r
        // SCENARIO 5: Demonstrating Null Reference on Stack\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> SCENARIO 5: Nullifying Reference on Stack");\r
        StudentScholarshipRecord temporaryStudent = new StudentScholarshipRecord(\r
                103, "Abhronila Ray", "Shyamnagar", 16000.00\r
        );\r
        temporaryStudent.printState("Abhronila Active");\r
\r
        System.out.println("Executing: temporaryStudent = null; (Stack variable pointer wiped to 0x00000000)");\r
        temporaryStudent = null;\r
        System.out.println("  temporaryStudent is now null. The Abhronila object in Heap is orphaned and eligible for GC.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" STACK VS HEAP MEMORY MODEL DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 4: Memory Model: Stack Reference Variables vs Heap Object Instances\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JVM RUNTIME DATA AREAS: STACK VS HEAP\r
   -----------------------------------------------------------------------------\r
   FEATURE               STACK MEMORY                  HEAP MEMORY\r
   -----------------------------------------------------------------------------\r
   Scope & Sharing       Thread-Private (per thread)   Shared globally (all threads)\r
   Contents              Stack Frames (LVT, Operands)  Objects, Arrays, Fields\r
   Storage Units         Primitives & 64-bit pointers  Mark Word + Klass Word + Data\r
   Lifecycle             LIFO (pushed/popped on call)  Dynamic (reclaimed by GC)\r
   Speed                 Ultra-fast (CPU Stack Pointer) Managed, dynamic allocation\r
   Error Thrown          java.lang.StackOverflowError  java.lang.OutOfMemoryError\r
   Configuration Flag    -Xss (e.g. -Xss1m)            -Xms, -Xmx (e.g. -Xmx4g)\r
   -----------------------------------------------------------------------------\r
\r
2. ANATOMY OF A STACK FRAME:\r
   +-------------------------------------------------------------------+\r
   | Local Variable Table (LVT) : 'this' pointer, parameters, locals   |\r
   +-------------------------------------------------------------------+\r
   | Operand Stack              : Intermediate CPU computation stack   |\r
   +-------------------------------------------------------------------+\r
   | Frame Data                 : Runtime constant pool, return values |\r
   +-------------------------------------------------------------------+\r
\r
3. JAVA REFERENCE PASSING SEMANTICS:\r
   - Java is ALWAYS PASS-BY-VALUE.\r
   - For Primitives : The actual literal bits (e.g. 100, true) are copied.\r
   - For References : The 64-bit/32-bit HEAP ADDRESS POINTER is copied by value.\r
   - Mutation       : \`refParam.setField(x)\` mutates the shared Heap object!\r
   - Reassignment   : \`refParam = new Object()\` only updates the local Stack slot;\r
                      the caller's reference variable remains unchanged.\r
\r
4. OBJECT REACHABILITY & GARBAGE COLLECTION:\r
   - Reachable   : At least one active reference chain from a GC Root exists.\r
   - Unreachable : All Stack references have gone out of scope or set to null.\r
   - GC Action   : Periodically sweeps unreachable Heap memory.\r
\r
5. ADVANCED JVM OPTIMIZATIONS:\r
   - Escape Analysis: JIT determines if an object leaves the method scope.\r
   - Scalar Replacement: Non-escaping objects are dismantled into local variables\r
     on the Stack / CPU registers, avoiding Heap allocation entirely.\r
   - Compressed OOPs: Reduces 64-bit references to 32 bits on heaps < 32GB.\r
\r
6. GOLDEN RULE BY SUKANTA HUI:\r
   - "The Stack represents the verbs (action, execution trajectory, methods),\r
      while the Heap represents the nouns (entities, state, domain records)."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the key architectural difference between Stack Memory and Heap Memory in the JVM?",shortAnswer:"Stack memory is thread-private and holds method call frames/local variables with LIFO lifecycle; Heap memory is thread-shared and holds all objects and arrays managed by Garbage Collection.",explanation:"Each thread gets its own Stack containing frames for active method calls (storing primitives and reference handles). When a method returns, its frame is popped instantly. The Heap is a unified, shared memory pool where all object instances reside until garbage-collected.",hint:"Think about scope/lifecycle (LIFO vs dynamic allocation) and thread sharing.",level:"Beginner",codeExample:`int count = 10;                     // Primitive on Stack frame
Student s = new Student("Swadeep"); // 's' is reference on Stack; Student data is on Heap`},{question:"Is Java pass-by-value or pass-by-reference?",shortAnswer:"Java is strictly PASS-BY-VALUE for everything, including object references.",explanation:"When you pass an object reference to a method, Java makes a copy of the reference pointer (the memory address value) and places it into the method's parameter slot on the new Stack frame. The address itself is copied by value.",hint:"The bits of the reference pointer are copied, not the object itself.",level:"Beginner",codeExample:`void modify(Student s) {
    s.setName("Tuhina"); // Mutates shared object on Heap
    s = new Student("New"); // Only reassigns local copied pointer on Stack!
}`},{question:"What happens in memory when you assign one reference variable to another (e.g., 'Student b = a;')?",shortAnswer:"The memory address stored in 'a' on the Stack is copied into 'b' on the Stack, so both variables point to the same Heap object.",explanation:"Assigning reference variables performs a shallow pointer copy on the Stack. No new Heap object is allocated. Any modification made through variable 'b' immediately reflects when accessed via variable 'a'.",hint:"Two remote controls pointing to the exact same television.",level:"Beginner",codeExample:`Student a = new Student("Swadeep");
Student b = a; // 'b' points to the same Heap instance as 'a'
b.setMarks(95.0);
System.out.println(a.getMarks()); // Prints 95.0`},{question:"What are the components of a Stack Frame in the JVM?",shortAnswer:"1. Local Variable Table (LVT), 2. Operand Stack, 3. Frame Data (constant pool resolution & exception dispatch).",explanation:"A Stack Frame is pushed onto the thread stack when a method is called. The LVT stores method arguments and local variables. The Operand Stack handles intermediate byte-code evaluation. Frame Data holds runtime constant pool references and exception handlers.",hint:"Every executing method receives one dedicated Stack Frame.",level:"Intermediate",codeExample:"// Bytecode frame stores: this (slot 0), int param (slot 1), double local (slot 2-3)"},{question:"What error is thrown when Stack memory overflows vs when Heap memory is exhausted?",shortAnswer:"Stack exhaustion causes java.lang.StackOverflowError; Heap exhaustion causes java.lang.OutOfMemoryError (OOM).",explanation:"StackOverflowError occurs when method call depth exceeds stack capacity (e.g. infinite recursion). OutOfMemoryError: Java heap space occurs when the JVM cannot allocate memory for new objects despite Garbage Collection.",hint:"One is depth-related (Stack); the other is capacity-related (Heap).",level:"Beginner",codeExample:`// StackOverflow: void infinite() { infinite(); }
// OutOfMemory: List<byte[]> list = new ArrayList<>(); while(true) list.add(new byte[1000000]);`},{question:"Why is Stack memory allocation and deallocation significantly faster than Heap memory?",shortAnswer:"Stack operations only adjust the CPU Stack Pointer (LIFO); Heap operations require finding free memory blocks, handling fragmentation, and GC cycles.",explanation:"Stack allocation is a simple pointer decrement/increment on the CPU stack register (O(1)). Heap memory management involves concurrent thread synchronization, free-list searches, memory compaction, and background GC tracing.",hint:"Hardware stack pointer movement vs dynamic heap fragmentation management.",level:"Intermediate",codeExample:`// Method entry: Stack pointer adjusts in nanoseconds
// Method exit: Stack pointer pops instantly with zero GC overhead`},{question:"Where are instance variables of primitive types stored in memory?",shortAnswer:"On the Heap, inside the memory block allocated for the enclosing object instance.",explanation:"Even though primitive variables declared inside methods reside on the Stack, primitive fields (instance variables like 'int rollNumber') declared inside a class live on the Heap as part of the object's contiguous payload.",hint:"Where an object lives, all its embedded instance fields live.",level:"Intermediate",codeExample:`class Student {
    int roll = 101; // Resides on HEAP inside the Student object memory
}`},{question:"Where are static variables stored in modern Java (Java 8+)?",shortAnswer:"In the JVM Heap, specifically associated with the Class object in Metaspace/Heap.",explanation:"Prior to Java 8, static variables lived in PermGen. In Java 8 and newer, PermGen was replaced with Metaspace (native memory for bytecode metadata), and static variables were moved directly into the Java Heap associated with the java.lang.Class object instance.",hint:"PermGen is gone; class metadata is in Metaspace, static variables are on Heap.",level:"Advanced",codeExample:`class Academy {
    public static String branch = "Barrackpore"; // Stored on Heap with Academy.class object
}`},{question:"What is a 'GC Root' in JVM Garbage Collection?",shortAnswer:"An active reference outside the Heap (such as local variables on Stack, JNI pointers, static references) from which reachability is traced.",explanation:"The JVM Garbage Collector determines whether an object is alive by tracing reference chains starting from GC Roots. If an object cannot be reached through any active reference chain starting from a GC Root, it is unreachable and candidate for collection.",hint:"The starting anchors of the object reachability graph.",level:"Advanced",codeExample:`// Active local reference 's' in main() is a GC Root:
Student s = new Student("Abhronila");`},{question:"What happens to the Heap object when the method creating it returns, but does NOT return the reference?",shortAnswer:"The Stack Frame is popped, the reference is destroyed, and the Heap object becomes orphaned and eligible for Garbage Collection.",explanation:"If a method allocates an object on the Heap but neither returns it nor assigns it to an outer field, the only reference to it disappears when the method's Stack frame is popped. The object becomes unreachable immediately.",hint:"No reference paths remain from any active Stack frame.",level:"Intermediate",codeExample:`void generateReport() {
    Student temp = new Student("Debangshu"); // 'temp' on Stack
    temp.print();
} // 'temp' popped! Heap Student object is now eligible for GC`},{question:"How does the '==' operator behave on reference variables vs primitive variables?",shortAnswer:"'==' on primitives compares actual literal values; '==' on reference variables compares Heap memory addresses.",explanation:"For primitives (int, double, char), '==' evaluates whether the values are identical. For object reference variables, '==' checks whether both variables point to the exact same physical memory address in Heap (identity equality).",hint:"Value equality vs Address identity equality.",level:"Beginner",codeExample:`int a = 10, b = 10;
System.out.println(a == b); // true (value)
Student s1 = new Student("Swadeep");
Student s2 = new Student("Swadeep");
System.out.println(s1 == s2); // false (different Heap addresses)`},{question:"Can two different threads access the same object on the Heap?",shortAnswer:"Yes, Heap memory is shared across all threads, which is why synchronization is required for mutable state.",explanation:"While each thread has its own private Stack, any thread with a reference pointer to a Heap object can read and mutate its fields. Concurrent modifications by multiple threads without synchronization lead to race conditions.",hint:"Shared Heap is the foundation of multi-threaded shared-memory concurrency.",level:"Intermediate",codeExample:"// Thread 1 & Thread 2 can both hold reference to the same 'bankAccount' on Heap"},{question:"What is the difference between a Local Variable and an Instance Variable in terms of memory?",shortAnswer:"Local variables live on the Stack frame and have no default values; instance variables live on the Heap and receive default zero-initialization.",explanation:"Local variables are created when a method/block executes and destroyed on exit. They MUST be explicitly initialized before reading. Instance variables are created when 'new' is called on Heap and are automatically zero-initialized by the JVM.",hint:"Stack vs Heap, mandatory initialization vs automatic default values.",level:"Beginner",codeExample:`class Demo {
    int instVar; // On Heap, initialized to 0
    void test() {
        int localVar; // On Stack, uninitialized! Compilation error if read without assignment
    }
}`},{question:"What is the Young Generation vs Old (Tenured) Generation in the JVM Heap?",shortAnswer:"Young Gen (Eden + S0 + S1) holds newly allocated, short-lived objects; Old Gen holds long-lived objects that survived multiple GC cycles.",explanation:"HotSpot Heap is partitioned based on the 'Weak Generational Hypothesis' (most objects die young). New objects are born in Eden. Survivors of Minor GCs move between Survivor spaces (S0/S1) and are eventually tenured/promoted to Old Generation after reaching a tenuring threshold.",hint:"Eden → Survivor S0/S1 → Old Generation.",level:"Advanced",codeExample:"// Minor GC collects dead Eden objects in milliseconds without scanning Old Gen"},{question:"What is an 'orphaned object' in the JVM Heap?",shortAnswer:"An allocated object on the Heap that no longer has any active references pointing to it.",explanation:"When reference variables pointing to an object are reassigned, set to null, or go out of scope, the object becomes orphaned. It occupies Heap memory until the Garbage Collector sweeps it.",hint:"An unreachable island in Heap memory.",level:"Beginner",codeExample:`Student s = new Student("Tuhina");
s = null; // The Student("Tuhina") object is now orphaned on Heap`},{question:"What does 'Compressed OOPs' mean in the context of 64-bit JVM reference pointers?",shortAnswer:"It allows 64-bit JVMs to store Heap object references in 32 bits by utilizing 8-byte object alignment.",explanation:"Since objects are aligned to 8-byte boundaries, the last 3 bits of every object address are 000. HotSpot shifts 32-bit pointers by 3 bits to address up to 32 GB of Heap, reducing pointer memory footprint on Stack and Heap from 8 bytes to 4 bytes.",hint:"Enables 32-bit pointer speed and compactness on 64-bit JVM architectures.",level:"Advanced",codeExample:"// With -XX:+UseCompressedOops (default on <32GB heaps), references occupy 4 bytes"},{question:"Why does reassigning a method parameter inside a method not affect the caller's variable?",shortAnswer:"Because the parameter is a local copy of the reference address on the callee's Stack frame.",explanation:"When method 'foo(Student param)' is called, 'param' is a separate slot on foo's Stack frame containing a copy of the caller's address. Changing 'param = new Student()' only updates foo's local slot, leaving the caller's Stack slot untouched.",hint:"Local variable reassignment never escapes the local Stack Frame.",level:"Intermediate",codeExample:`void reassign(Student s) {
    s = new Student("Abhronila"); // Caller's variable is NOT changed!
}`},{question:"What is Scalar Replacement in JVM JIT Compilation?",shortAnswer:"An optimization where the JIT compiler decomposes an unescaped object into its individual primitive fields on the Stack/registers.",explanation:"If Escape Analysis proves an object never leaves a method, the JIT avoids Heap allocation altogether by representing the object's fields as simple local variables in CPU registers or Stack slots, eliminating GC overhead.",hint:"Deconstructing an object into scalar primitives on the Stack.",level:"Advanced",codeExample:"// JIT turns 'Point p = new Point(10, 20); int sum = p.x + p.y;' into 'int x = 10, y = 20; int sum = x + y;'"},{question:"What is the memory size of a reference variable on a 64-bit JVM without Compressed OOPs?",shortAnswer:"8 bytes (64 bits).",explanation:"Without pointer compression, every reference variable on the Stack or in object fields requires a full 64-bit (8-byte) native pointer to address modern large memory spaces.",hint:"Native 64-bit architecture address bus width.",level:"Intermediate",codeExample:"// Size of reference variable on Stack = 8 bytes (or 4 bytes if compressed)"},{question:"How does the JVM handle memory when an array of objects is created (e.g., 'Student[] arr = new Student[5];')?",shortAnswer:"It allocates one array object on the Heap containing 5 null reference pointers; no Student instances are created yet.",explanation:"'new Student[5]' allocates memory for an array object with 5 slots, each initialized to default 'null'. You must instantiate individual Student objects ('arr[0] = new Student(...)') separately.",hint:"An array of references is just a container of pointers.",level:"Beginner",codeExample:`Student[] batch = new Student[3]; // batch on Heap holds [null, null, null]
batch[0] = new Student("Swadeep"); // Now slot 0 points to Student instance`},{question:"What is the effect of the 'final' keyword on a reference variable?",shortAnswer:"The reference variable cannot be reassigned to point to another Heap address, but the internal state of the object it points to can still be mutated.",explanation:`A 'final' reference variable freezes the pointer value on the Stack frame. You cannot execute 'ref = new Student()', but you CAN invoke mutating methods like 'ref.setName("Tuhina")' unless the object itself is immutable.`,hint:"Final reference != Immutable object.",level:"Intermediate",codeExample:`final Student s = new Student("Swadeep");
s.setMarks(98.0); // Allowed: modifying Heap object state
// s = new Student("Debangshu"); // Compile Error: cannot reassign final reference`},{question:"What is Memory Leak in Java despite having an automatic Garbage Collector?",shortAnswer:"When unused objects remain reachable from active GC Roots (e.g., uncleaned static collections, unclosed listeners), preventing GC reclamation.",explanation:"Java GC can only collect unreachable objects. If an application holds unused object references in static maps, event registries, or thread locals, the JVM assumes they are still needed, resulting in gradual Heap exhaustion and eventual OutOfMemoryError.",hint:"Unintentional retention of references prevents garbage collection.",level:"Intermediate",codeExample:`class Cache {
    private static List<Student> history = new ArrayList<>(); // Grows forever, never cleared!
}`},{question:"Can an object in Java be allocated partially on Stack and partially on Heap?",shortAnswer:"No, a single Java object instance is always stored contiguously on the Heap (unless Scalar Replacement completely decomposes it).",explanation:"Java objects maintain strict contiguous layout in Heap memory with their Object Header, primitive fields, and reference pointers in a single allocated chunk.",hint:"Atomic contiguous memory chunk on the Heap.",level:"Intermediate",codeExample:"// The entire Student object (header + fields) is contiguous in Heap memory"},{question:"What is the Metaspace in Java 8+ and how does it relate to Stack and Heap?",shortAnswer:"Metaspace is native off-heap memory that stores class metadata, bytecode, method tables, and constant pools.",explanation:"In Java 8+, class metadata was moved from PermGen (Heap) to Metaspace (out-of-heap native memory). Metaspace auto-resizes based on OS memory availability unless constrained with -XX:MaxMetaspaceSize.",hint:"Native OS memory for class definitions, separate from JVM Heap.",level:"Advanced",codeExample:"// Class metadata in Metaspace → Object instances on Heap → References on Stack"},{question:"What happens when a reference variable goes out of block scope (e.g. inside an 'if' or 'for' block)?",shortAnswer:"Its slot on the Stack Frame becomes inactive or eligible for reuse by other local variables.",explanation:"The JVM local variable table reuses slots for variables with non-overlapping scopes. Once a variable goes out of scope, its reference is no longer a valid GC Root, making unreferenced Heap objects eligible for collection.",hint:"Stack slot recycling during method execution.",level:"Intermediate",codeExample:`{
    Student temp = new Student("Swadeep");
    temp.print();
} // 'temp' goes out of scope; slot can be recycled by JVM`},{question:"How do primitive wrappers like Integer and Double behave in Stack vs Heap?",shortAnswer:"Primitive wrapper variables on the Stack hold references pointing to wrapper objects on the Heap (or in Integer cache).",explanation:"While primitive 'int x = 10' stores 10 directly on the Stack, 'Integer x = 10' causes autoboxing, allocating an Integer object on the Heap (or referencing the -128 to 127 cached Integer instance).",hint:"Primitives are raw values on Stack; Wrappers are objects on Heap.",level:"Beginner",codeExample:`int p = 500;        // 4 bytes direct on Stack
Integer w = 500;    // Reference on Stack → Integer object on Heap (16-24 bytes)`},{question:"Why does returning an object from a method not destroy it when the method's Stack Frame is popped?",shortAnswer:"Because the object lives on the Heap, and its reference address is copied to the caller's Stack Frame before pop.",explanation:"Heap memory exists independently of Stack frame lifecycles. When a method returns an object, the reference pointer is placed in the return register/operand stack and assigned to the caller's variable before the frame is popped.",hint:"Stack frames die; Heap objects survive as long as a reference is maintained.",level:"Intermediate",codeExample:`Student createStudent() {
    return new Student("Tuhina"); // Created on Heap, pointer returned to caller
}`},{question:"What is 'Escape' in the context of method execution?",shortAnswer:"An object escapes when its reference is made accessible outside the creating method (returned, stored in a field, passed across threads).",explanation:"Escape Analysis classifies object lifetimes into GlobalEscape (accessible anywhere), ArgEscape (passed as parameter but not stored), and NoEscape (strictly contained inside the method). NoEscape objects are candidates for Stack scalar replacement.",hint:"Visibility boundary of an object pointer.",level:"Advanced",codeExample:`// NoEscape:
void helper() { Student s = new Student(); s.calc(); }
// GlobalEscape:
Student helper() { return new Student(); }`},{question:"What is the primary difference between Stack memory sizing (-Xss) and Heap memory sizing (-Xmx)?",shortAnswer:"-Xss configures the stack size per individual thread; -Xmx configures the maximum total heap size for the entire JVM process.",explanation:"-Xss1m assigns 1 MB of stack memory to every created thread. -Xmx4g sets the upper limit of the shared JVM Heap to 4 Gigabytes. High -Xss allows deeper recursion but reduces total thread capacity.",hint:"Per-thread stack depth vs global heap capacity.",level:"Intermediate",codeExample:"java -Xms2g -Xmx4g -Xss512k -jar academy-app.jar"},{question:"What is Sukanta Hui's Core Architectural Rule regarding Stack and Heap memory visualization?",shortAnswer:"Always visualize the Stack as the active execution trajectory of verbs, and the Heap as the persistent reservoir of nouns (entities).",explanation:"At the Barrackpore academy, Sukanta Hui teaches that methods, computations, and transient pointers live on the rapid, fleeting Stack (the 'verbs' of the program), while objects, domain models, and business state reside securely on the managed Heap (the 'nouns' of the program).",hint:"Stack is the flow of action; Heap is the ground of existence.",level:"Beginner",codeExample:`// Stack (Verb/Action): calculateFinalScore(studentRef)
// Heap (Noun/Entity): StudentRecord { name: "Abhronila", marks: 98.5 }`}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulsePointer {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 12; }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-pointer-flow {
            stroke-dasharray: 6 3;
            animation: pulsePointer 2.5s linear infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Memory Model: Reference Variables on Stack Pointing to Object Instances on Heap"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dive deep into the dual-engine JVM memory runtime: understanding how thread-private LIFO Stack Frames manage local execution contexts and 64-bit reference pointers, while the globally shared JVM Heap manages object graphs, generational collections, and pass-by-value pointer mutations."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🧠"})," Stack vs Heap: Dual-Engine JVM Runtime Architecture"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"The Java Virtual Machine organizes application memory into two primary runtime data areas with vastly different responsibilities:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-5 bg-slate-950 rounded-xl border border-sky-500/30 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm",children:"Thread Call Stack (LIFO)"}),e.jsx("span",{className:"px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded text-[10px]",children:"Thread-Private"})]}),e.jsxs("ul",{className:"space-y-1.5 text-slate-300 font-sans text-xs",children:[e.jsxs("li",{children:["• Stores method ",e.jsx("strong",{children:"Stack Frames"})," (LVT, Operand Stack, Frame Data)."]}),e.jsxs("li",{children:["• Holds primitive local variables directly (e.g. ",e.jsx("code",{className:"text-sky-300",children:"int, double, boolean"}),")."]}),e.jsx("li",{children:"• Holds 64-bit/32-bit reference handles pointing to Heap memory addresses."}),e.jsx("li",{children:"• Ultra-fast allocation/deallocation (adjusts CPU stack pointer on frame exit)."}),e.jsxs("li",{children:["• Throws ",e.jsx("code",{className:"text-rose-400 font-mono",children:"StackOverflowError"})," on runaway recursion."]})]})]}),e.jsxs("div",{className:"p-5 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm",children:"JVM Heap Memory (Dynamic)"}),e.jsx("span",{className:"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px]",children:"Thread-Shared"})]}),e.jsxs("ul",{className:"space-y-1.5 text-slate-300 font-sans text-xs",children:[e.jsxs("li",{children:["• Stores all ",e.jsx("strong",{children:"Class Instances (Objects)"})," and Array structures."]}),e.jsx("li",{children:"• Holds all instance variables (primitives and references) inside object memory."}),e.jsx("li",{children:"• Partitioned into Young Gen (Eden, S0, S1) and Old / Tenured Generation."}),e.jsx("li",{children:"• Managed automatically by the Garbage Collector tracing GC Roots."}),e.jsxs("li",{children:["• Throws ",e.jsx("code",{className:"text-rose-400 font-mono",children:"OutOfMemoryError: Java heap space"})," on exhaustion."]})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Pass-by-Value Reference Semantics):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," was passed into ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"upgradeScholarship(swadeep, 3000.0)"}),", Java copied the 64-bit address ",e.jsx("code",{className:"text-sky-300 font-mono",children:"0x31BEFD9F"})," into the parameter slot. Mutating the object modified the shared Heap record. However, when ",e.jsx("strong",{children:"Tuhina Das"})," was passed to ",e.jsx("code",{className:"text-purple-400 font-mono",children:"attemptReferenceReassignment(tuhina)"}),", reassigning the parameter only modified the callee's local Stack slot, leaving Tuhina's original record completely untouched!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," JVM Memory Anatomy: Stack Frames, Pointers & Generational Heap"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Interactive visual tracing of Stack Frame execution and Heap object allocation:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 340",className:"w-full h-auto","aria-label":"Stack Frames and Heap Generational Memory Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"stackGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#0284c7"}),e.jsx("stop",{offset:"100%",stopColor:"#0369a1"})]}),e.jsxs("linearGradient",{id:"heapGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsx("marker",{id:"ptrArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"ptrArrow2",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#a855f7"})})]}),e.jsx("rect",{x:"25",y:"25",width:"310",height:"290",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"52",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"THREAD CALL STACK (LIFO)"}),e.jsx("text",{x:"180",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Thread-1 Stack (-Xss1m)"}),e.jsx("rect",{x:"40",y:"85",width:"280",height:"100",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"103",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"Stack Frame: main()"}),e.jsx("rect",{x:"50",y:"112",width:"260",height:"22",rx:"3",fill:"#0f172a"}),e.jsx("text",{x:"58",y:"127",fill:"#fef08a",fontSize:"9",fontFamily:"monospace",children:"int baseYear = 2026 (Primitive)"}),e.jsx("rect",{x:"50",y:"138",width:"260",height:"22",rx:"3",fill:"#0f172a"}),e.jsx("text",{x:"58",y:"153",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"swadeepRef = 0x31BEFD9F (Pointer)"}),e.jsx("rect",{x:"50",y:"164",width:"260",height:"16",rx:"3",fill:"#0f172a"}),e.jsx("text",{x:"58",y:"176",fill:"#a855f7",fontSize:"9",fontFamily:"monospace",children:"tuhinaRef  = 0x0EED1F14 (Pointer)"}),e.jsx("rect",{x:"40",y:"195",width:"280",height:"95",rx:"6",fill:"#1e293b",stroke:"#06b6d4",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"213",fill:"#67e8f9",fontSize:"10",fontWeight:"bold",children:"Stack Frame: upgradeScholarship()"}),e.jsx("rect",{x:"50",y:"222",width:"260",height:"25",rx:"3",fill:"#0f172a"}),e.jsx("text",{x:"58",y:"238",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"recordParam = 0x31BEFD9F [Copy]"}),e.jsx("rect",{x:"50",y:"252",width:"260",height:"25",rx:"3",fill:"#0f172a"}),e.jsx("text",{x:"58",y:"268",fill:"#fef08a",fontSize:"9",fontFamily:"monospace",children:"double bonusInr = 3000.00"}),e.jsx("text",{x:"180",y:"306",fill:"#64748b",fontSize:"8",textAnchor:"middle",children:"Stack Frames pushed on call, popped on return"}),e.jsx("path",{d:"M 320 150 C 400 150, 420 120, 500 120",fill:"none",stroke:"#38bdf8",strokeWidth:"2",className:"animate-pointer-flow",markerEnd:"url(#ptrArrow)"}),e.jsx("path",{d:"M 320 235 C 400 235, 420 135, 500 135",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeDasharray:"4 2",markerEnd:"url(#ptrArrow)"}),e.jsx("path",{d:"M 320 172 C 400 172, 420 230, 500 230",fill:"none",stroke:"#a855f7",strokeWidth:"2",className:"animate-pointer-flow",markerEnd:"url(#ptrArrow2)"}),e.jsx("rect",{x:"470",y:"25",width:"425",height:"290",rx:"10",fill:"#0f172a",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"682",y:"52",fill:"#34d399",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"JVM HEAP MEMORY (Shared, Managed by GC)"}),e.jsx("text",{x:"682",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Young Generation (Eden) & Tenured Old Gen"}),e.jsx("rect",{x:"490",y:"85",width:"385",height:"95",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("text",{x:"500",y:"103",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:"Object @ 0x31BEFD9F (StudentScholarshipRecord)"})}),e.jsx("rect",{x:"500",y:"110",width:"365",height:"20",rx:"3",fill:"#022c22"}),e.jsx("text",{x:"510",y:"124",fill:"#6ee7b7",fontSize:"9",fontFamily:"monospace",children:"Header: [Mark Word: 8B] [Klass Word: 4B]"}),e.jsx("rect",{x:"500",y:"134",width:"365",height:"40",rx:"3",fill:"#022c22"}),e.jsx("text",{x:"510",y:"148",fill:"#ecfdf5",fontSize:"9",fontFamily:"monospace",children:'studentId=101 | studentName="Swadeep Paul"'}),e.jsx("text",{x:"510",y:"164",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:'campus="Barrackpore Central" | fee=₹15,000.00'}),e.jsx("rect",{x:"490",y:"195",width:"385",height:"95",rx:"6",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"500",y:"213",fill:"#e9d5ff",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:"Object @ 0x0EED1F14 (StudentScholarshipRecord)"}),e.jsx("rect",{x:"500",y:"220",width:"365",height:"20",rx:"3",fill:"#1e1b4b"}),e.jsx("text",{x:"510",y:"234",fill:"#c084fc",fontSize:"9",fontFamily:"monospace",children:"Header: [Mark Word: 8B] [Klass Word: 4B]"}),e.jsx("rect",{x:"500",y:"244",width:"365",height:"40",rx:"3",fill:"#1e1b4b"}),e.jsx("text",{x:"510",y:"258",fill:"#faf5ff",fontSize:"9",fontFamily:"monospace",children:'studentId=102 | studentName="Tuhina Das"'}),e.jsx("text",{x:"510",y:"274",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:'campus="Naihati" | fee=₹14,500.00'}),e.jsx("text",{x:"682",y:"306",fill:"#6ee7b7",fontSize:"8",textAnchor:"middle",children:"All instances dynamically allocated; collected when GC Roots are severed"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"StackHeapMemoryModelDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The code below traces Stack Frame allocations, reference pointer passing, pass-by-value mutations, reference reassignments, and GC eligibility in real-time:"}),e.jsx(t,{fileName:"StackHeapMemoryModelDemo.java",code:s})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & JVM Memory Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Java is Purely Pass-by-Value"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"When passing an object reference to a method, the 64-bit memory pointer value is copied to the parameter slot on the callee's Stack Frame. Mutating fields alters the shared Heap object, but reassigning the parameter variable only updates the local Stack slot."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Stack Frame Zero-GC Reclamation"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"When a method completes, the JVM CPU Stack Pointer simply decrements/increments to pop the frame. All local variables and pointers are reclaimed in nanoseconds with zero Garbage Collector workload!"})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," GC Roots & Reachability Graph"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"The JVM Garbage Collector traces live objects starting from active Stack variables, JNI pointers, and static class references (GC Roots). When all references to a Heap object are removed, it is marked as unreachable and recycled."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Reference Size & Compressed OOPs"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["On 64-bit HotSpot JVMs with heaps under 32 GB, ",e.jsx("code",{className:"text-amber-300 font-mono",children:"-XX:+UseCompressedOops"})," is enabled by default, compressing 64-bit pointers down to 32 bits (4 bytes) by taking advantage of 8-byte object alignment."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Assuming Parameter Reassignment Modifies Caller"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Beginners often believe that reassigning a method parameter ",e.jsx("code",{className:"text-rose-300 font-mono",children:"param = new Student()"})," swaps the caller's object. Because Java passes copies of reference pointers, the caller's variable remains completely unchanged."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// BUGGY ASSUMPTION:
void replaceStudent(Student s) {
    s = new Student("New Student"); // Caller's variable NEVER changes!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Return New Instance or Mutate via Invariants"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Either return the newly created instance from the method, or mutate fields through guarded domain methods on the existing reference."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// CLEAN DESIGN: Return the new object
Student replaceStudent(Student existing) {
    return new Student("New Student"); // Caller receives new pointer explicitly
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 p-6 md:p-8 rounded-2xl border border-indigo-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why does Java avoid manual pointer arithmetic?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["In languages like C/C++, raw memory pointers allow arithmetic (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"ptr++"}),"), leading to buffer overflows, dangling pointers, and memory corruption. In Java, reference variables on the Stack are strictly opaque handles managed by the JVM. You can dereference behaviors via the dot (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"."}),") operator, but you can never perform address math, guaranteeing memory safety and thread integrity!"]})]}),e.jsx(r,{quote:"Think of the Stack as the active stream of your thoughts—fleeting, fast, and organized in strict sequence. The Heap is the library of your permanent knowledge. Keep your Stack lightweight, and protect your Heap with disciplined encapsulation.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(a,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(n,{content:i,fileName:"Topic4_Stack_Heap_Memory_Model_Note.txt"})]})]})}export{b as default};

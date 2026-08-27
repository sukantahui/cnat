import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 9: Anonymous Objects: Creation and Valid Use Cases\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Anonymous Objects & The Fire-and-Forget Pattern\r
 * ----------------------------------------------------------------------------\r
 * 1. What is an Anonymous Object?\r
 *    - An object instantiated using the \`new\` keyword WITHOUT assigning its\r
 *      Heap reference address to a named reference variable on the Stack frame.\r
 *    - Syntax:\r
 *          new NotificationDispatcher("Barrackpore").sendSmsAlert("Swadeep", "Exam at 10 AM");\r
 *\r
 * 2. Lifecycle & Memory Dynamics:\r
 *    - Phase 1: JVM allocates Heap memory in Eden space.\r
 *    - Phase 2: Constructor executes and returns the 64-bit Heap address pointer.\r
 *    - Phase 3: The method (e.g. \`sendSmsAlert\`) executes using that pointer as \`this\`.\r
 *    - Phase 4: Statement completes. No variable on the Stack holds the pointer.\r
 *    - Phase 5: The object has ZERO active GC Roots and becomes immediately\r
 *               eligible for Garbage Collection reclamation.\r
 *\r
 * 3. The 4 Valid Production Use Cases:\r
 *    - Use Case 1: Single-use method invocation (Fire-and-forget execution).\r
 *    - Use Case 2: Passing as a transient argument to another method.\r
 *    - Use Case 3: Returning a fresh instance directly from a factory method.\r
 *    - Use Case 4: Temporary calculation / formatting helper execution.\r
 *\r
 * 4. Critical Anti-Pattern to Avoid:\r
 *    - Invoking multiple methods on separate anonymous objects expecting state retention:\r
 *          new BankAccount().deposit(5000);\r
 *          new BankAccount().withdraw(2000); // OPERATES ON A BRAND NEW OBJECT WITH ZERO BALANCE!\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
public class AnonymousObjectsAndUseCasesDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Helper Class 1: NotificationDispatcher (Single-Use Task Execution)\r
    // ------------------------------------------------------------------------\r
    public static class NotificationDispatcher {\r
        private String campusHub;\r
\r
        public NotificationDispatcher(String campusHub) {\r
            this.campusHub = campusHub;\r
        }\r
\r
        public void dispatchSmsNotification(String recipient, String messageText) {\r
            System.out.printf("  [SMS SENT] To: %-15s | Campus: %-12s | Text: '%s' | Heap: 0x%08X\\n",\r
                    recipient, campusHub, messageText, System.identityHashCode(this));\r
        }\r
\r
        public void dispatchEmailDigest(String recipient, String reportTitle) {\r
            System.out.printf("  [EMAIL SENT] To: %-13s | Campus: %-12s | Title: '%s' | Heap: 0x%08X\\n",\r
                    recipient, campusHub, reportTitle, System.identityHashCode(this));\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Helper Class 2: PaymentGatewayReceipt (Transient Method Parameter)\r
    // ------------------------------------------------------------------------\r
    public static class PaymentGatewayReceipt {\r
        private String transactionId;\r
        private String studentName;\r
        private double feeAmountInr;\r
\r
        public PaymentGatewayReceipt(String transactionId, String studentName, double feeAmountInr) {\r
            this.transactionId = transactionId;\r
            this.studentName = studentName;\r
            this.feeAmountInr = feeAmountInr;\r
        }\r
\r
        public String getTransactionId() { return transactionId; }\r
        public String getStudentName() { return studentName; }\r
        public double getFeeAmountInr() { return feeAmountInr; }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Helper Class 3: FeeAccountingLedger (Consumes Transient Anonymous Objects)\r
    // ------------------------------------------------------------------------\r
    public static class FeeAccountingLedger {\r
        private String ledgerBranch;\r
        private double cumulativeRevenueInr;\r
\r
        public FeeAccountingLedger(String ledgerBranch) {\r
            this.ledgerBranch = ledgerBranch;\r
            this.cumulativeRevenueInr = 0.0;\r
        }\r
\r
        // Method that accepts an anonymous or named PaymentGatewayReceipt\r
        public void processFeePayment(PaymentGatewayReceipt receipt) {\r
            this.cumulativeRevenueInr += receipt.getFeeAmountInr();\r
            System.out.printf("  [LEDGER RECORDED] Txn: %-10s | Student: %-12s | Paid: ₹%,9.2f | Ledger Total: ₹%,9.2f (Receipt Heap: 0x%08X)\\n",\r
                    receipt.getTransactionId(), receipt.getStudentName(), receipt.getFeeAmountInr(),\r
                    this.cumulativeRevenueInr, System.identityHashCode(receipt));\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Helper Class 4: Anti-Pattern Demonstrator (State Loss Across Calls)\r
    // ------------------------------------------------------------------------\r
    public static class TraineeScoreCard {\r
        private int totalPoints = 0;\r
\r
        public void addScore(int points) {\r
            this.totalPoints += points;\r
            System.out.printf("    addScore(%d) on Object 0x%08X -> totalPoints = %d\\n",\r
                    points, System.identityHashCode(this), this.totalPoints);\r
        }\r
\r
        public void printFinalScore() {\r
            System.out.printf("    printFinalScore() on Object 0x%08X -> totalPoints = %d\\n",\r
                    System.identityHashCode(this), this.totalPoints);\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Demonstrations of Anonymous Objects\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA CORE: ANONYMOUS OBJECTS (CREATION & PRODUCTION USE CASES)");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // USE CASE 1: Single-Use Method Invocation (Fire-and-Forget)\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> USE CASE 1: Single-Use Fire-and-Forget Method Execution");\r
        System.out.println("Executing: new NotificationDispatcher(\\"Barrackpore\\").dispatchSmsNotification(...);");\r
        System.out.println("Note: No reference variable on Stack. Object is created, executes, and becomes GC candidate:\\n");\r
\r
        new NotificationDispatcher("Barrackpore")\r
                .dispatchSmsNotification("Swadeep Paul", "Your Java Fullstack Lab begins tomorrow at 10:00 AM.");\r
\r
        new NotificationDispatcher("Naihati")\r
                .dispatchEmailDigest("Tuhina Das", "Weekly Spring Boot Architecture Assessment Report");\r
\r
        // --------------------------------------------------------------------\r
        // USE CASE 2: Passing Anonymous Object as a Transient Parameter\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> USE CASE 2: Passing Anonymous Object as Method Parameter");\r
        FeeAccountingLedger barrackporeLedger = new FeeAccountingLedger("Barrackpore Main");\r
\r
        System.out.println("Calling ledger.processFeePayment(new PaymentGatewayReceipt(...));");\r
        barrackporeLedger.processFeePayment(\r
                new PaymentGatewayReceipt("TXN-9081", "Swadeep Paul", 8500.00)\r
        );\r
\r
        barrackporeLedger.processFeePayment(\r
                new PaymentGatewayReceipt("TXN-9082", "Tuhina Das", 9200.00)\r
        );\r
\r
        barrackporeLedger.processFeePayment(\r
                new PaymentGatewayReceipt("TXN-9083", "Abhronila Ray", 7500.00)\r
        );\r
\r
        // --------------------------------------------------------------------\r
        // USE CASE 3: Anonymous Object in Chained Fluent Calls\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> USE CASE 3: Temporary Calculation & Immediate Formatting");\r
        double baseFee = 10000.00;\r
        double taxAmount = new Object() {\r
            double calculateGst(double amount) {\r
                return amount * 0.18; // 18% GST calculation\r
            }\r
        }.calculateGst(baseFee);\r
\r
        System.out.printf("  Calculated GST for base fee ₹%,.2f via anonymous helper: ₹%,.2f\\n", baseFee, taxAmount);\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: The Dangerous Anti-Pattern: State Loss Across Multiple Calls\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: CRITICAL PITFALL - State Loss from Repeated Anonymous Instantiations");\r
        System.out.println("Beginner Mistake: Attempting to accumulate state across separate 'new' calls:");\r
        System.out.println("  new TraineeScoreCard().addScore(50);");\r
        System.out.println("  new TraineeScoreCard().addScore(30);");\r
        System.out.println("  new TraineeScoreCard().printFinalScore();\\n");\r
\r
        System.out.println("Execution Output:");\r
        new TraineeScoreCard().addScore(50);\r
        new TraineeScoreCard().addScore(30);\r
        new TraineeScoreCard().printFinalScore(); // Prints 0! Because it's a 3rd distinct object!\r
\r
        System.out.println("\\nCorrect Approach: Use a Named Reference Variable for Stateful Operations:");\r
        TraineeScoreCard namedCard = new TraineeScoreCard();\r
        namedCard.addScore(50);\r
        namedCard.addScore(30);\r
        namedCard.printFinalScore(); // Correctly prints 80!\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" ANONYMOUS OBJECTS DEMONSTRATION COMPLETE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 9: Anonymous Objects: Creation and Valid Use Cases\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANONYMOUS OBJECTS DEFINED:\r
   - An object instantiated via \`new\` without assigning its reference\r
     address to a named variable on the Stack frame.\r
   - Syntax:\r
       new ClassName(arguments).methodName();\r
       or\r
       methodCall(new ClassName(arguments));\r
\r
2. LIFECYCLE & MEMORY DYNAMICS:\r
   -----------------------------------------------------------------------------\r
   Step 1: JVM allocates memory in Eden Generation (Heap).\r
   Step 2: Constructor initializes fields and returns Heap pointer.\r
   Step 3: Target method runs using that pointer as \`this\`.\r
   Step 4: Semicolon ends the statement.\r
   Step 5: Reference is discarded (0 active GC Roots) -> Immediately GC eligible!\r
   -----------------------------------------------------------------------------\r
\r
3. THE 4 VALID PRODUCTION USE CASES:\r
   a) Fire-and-Forget Single-Use Invocation:\r
      \`new NotificationDispatcher("Barrackpore").sendSmsAlert("Swadeep", "Exam at 10 AM");\`\r
   b) Transient Method Parameter:\r
      \`ledger.processPayment(new PaymentGatewayReceipt("TXN-1", "Tuhina", 8500.0));\`\r
   c) Factory Return Expression:\r
      \`return new StudentRecord(id, name);\`\r
   d) Single-Use Calculation / Converter:\r
      \`double tax = new TaxCalculator().compute(amount);\`\r
\r
4. CRITICAL ANTI-PATTERN: STATE LOSS ACROSS MULTIPLE CALLS:\r
   - WRONG:\r
       \`new ScoreCard().add(50);\`\r
       \`new ScoreCard().print();\` // PRINTS 0! (2 distinct objects on Heap!)\r
   - CORRECT:\r
       \`ScoreCard card = new ScoreCard();\`\r
       \`card.add(50);\`\r
       \`card.print();\` // PRINTS 50!\r
\r
5. RESOURCE LEAK WARNING:\r
   - NEVER use anonymous objects for \`Closeable\` resources (e.g. \`FileInputStream\`).\r
   - Because no reference is held, you cannot call \`.close()\`, leaking OS handles!\r
   - Always use named variables inside \`try-with-resources\`.\r
\r
6. SUKANTA HUI'S GOLDEN RULE:\r
   - "Transient couriers (actions, one-way messages, arguments) can be anonymous;\r
      Domain citizens (entities, stateful records, bank accounts) MUST have names."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is an Anonymous Object in Java?",shortAnswer:"An object instantiated via the 'new' keyword without assigning its reference address to a named reference variable on the Stack.",explanation:"Because an anonymous object has no variable holding its address on the Stack frame, it is used for a single statement (such as calling a method or passing as a parameter) and becomes immediately eligible for Garbage Collection once the statement completes.",hint:"An unnamed, single-use object instance.",level:"Beginner",codeExample:'new NotificationDispatcher("Barrackpore").dispatchSmsNotification("Swadeep", "Exam at 10 AM");'},{question:"What is the complete lifecycle of an anonymous object in JVM memory?",shortAnswer:"1. Allocated in Eden space -> 2. Constructor initializes fields -> 3. Target method executes on 'this' -> 4. Statement completes -> 5. Immediately eligible for GC.",explanation:"Unlike named objects which remain reachable until their Stack variable goes out of scope or is nullified, an anonymous object loses reachability as soon as the semicolon terminating the instantiation expression is reached.",hint:"Created, executed, and orphaned in a single statement.",level:"Intermediate",codeExample:'new PaymentGatewayReceipt("TXN-1", "Tuhina", 5000.0).getFeeAmountInr(); // GC eligible immediately'},{question:"What are the 4 main valid production use cases for anonymous objects?",shortAnswer:"1. Fire-and-forget method execution, 2. Transient method arguments, 3. Anonymous event listeners/callbacks, 4. Immediate return values from factory methods.",explanation:"Anonymous objects reduce code clutter and local variable proliferation when an object's sole purpose is to execute one operation or serve as a transient data container for a single method call.",hint:"Single-use executions, parameters, callbacks, and factory returns.",level:"Beginner",codeExample:'ledger.processPayment(new PaymentGatewayReceipt("TXN-101", "Swadeep", 7500.0));'},{question:"What is the critical 'State Loss' pitfall with anonymous objects?",shortAnswer:"Calling multiple methods across separate lines on 'new ClassName()' creates a brand new independent object for each call, losing all previous state changes.",explanation:"If you write 'new ScoreCard().add(50);' and on the next line write 'new ScoreCard().print();', the second line instantiates a fresh ScoreCard with 0 points. Each 'new' creates a completely different object on the Heap.",hint:"Each 'new' keyword creates a separate physical object instance.",level:"Beginner",codeExample:`// BUG:
new TraineeScoreCard().addScore(50);
new TraineeScoreCard().printFinalScore(); // Prints 0!`},{question:"Does an anonymous object take less Heap memory than a named object?",shortAnswer:"No. The Heap memory footprint (Object Header + fields + padding) is identical; only the 4-8 bytes on the Stack frame are saved.",explanation:"Every object created with 'new' allocates the exact same bytes in Eden space regardless of whether it is assigned to a named variable. The only difference is that a named variable occupies a slot in the Stack's Local Variable Table.",hint:"Heap allocation is identical; only Stack slot is omitted.",level:"Intermediate",codeExample:"// 'new TraineeProfile()' consumes the exact same 32 bytes in Heap whether named or anonymous"},{question:"Can an anonymous object invoke multiple methods in a single statement via Method Chaining?",shortAnswer:"Yes! If the methods return 'this', you can chain multiple operations on the single anonymous instance.",explanation:`Writing 'new Account().setTier("Gold").credit(5000.0).displayStatement();' executes all 3 methods on the SAME single anonymous object before it is orphaned at the terminating semicolon.`,hint:"Method chaining keeps the anonymous reference alive through the chain.",level:"Intermediate",codeExample:`new StudentScholarshipAccount(101, "Swadeep", "Barrackpore", 5000.0)
    .upgradeTier("Platinum")
    .displayStatement();`},{question:"What is the difference between an 'Anonymous Object' and an 'Anonymous Inner Class'?",shortAnswer:"An anonymous object is an unnamed instance of an existing class; an anonymous inner class is an unnamed subclass/implementation defined inline.",explanation:"'new Student()' creates an anonymous object of the existing Student class. 'new ActionListener() { public void actionPerformed(ActionEvent e) {} }' defines and instantiates an unnamed subclass implementing the interface.",hint:"Unnamed instance vs unnamed subclass definition.",level:"Intermediate",codeExample:`// Anonymous Object: new Point(10, 20)
// Anonymous Inner Class: new Runnable() { public void run() { ... } }`},{question:"Can the JIT compiler optimize anonymous objects using Escape Analysis?",shortAnswer:"Yes! Because anonymous objects frequently do not escape the invoking method, the JIT can easily scalar-replace them on the Stack.",explanation:"If an anonymous object is created solely to invoke a local helper method and is never stored in a field or returned (NoEscape), Escape Analysis can eliminate Heap allocation entirely, executing the method using CPU registers.",hint:"Short-lived local objects are prime candidates for Scalar Replacement.",level:"Advanced",codeExample:"double tax = new TaxCalculator().compute(10000.0); // JIT can scalar-replace TaxCalculator!"},{question:"Why is passing an anonymous object as a method parameter better than creating a temporary named variable?",shortAnswer:"It reduces scope pollution, eliminates redundant Stack local variables, and clarifies that the argument is a single-use transient value.",explanation:"If 'PaymentGatewayReceipt receipt = new PaymentGatewayReceipt(...); ledger.process(receipt);' is used and 'receipt' is never touched again, declaring 'receipt' clutters the method scope. Passing it anonymously keeps the code concise.",hint:"Eliminates single-use temporary variables.",level:"Beginner",codeExample:'barrackporeLedger.processFeePayment(new PaymentGatewayReceipt("TXN-9081", "Swadeep", 8500.0));'},{question:"What happens if an exception is thrown inside an anonymous object's constructor?",shortAnswer:"Object instantiation aborts immediately, the method is never called, and the partially allocated Heap memory is reclaimed during GC.",explanation:"Just like with named objects, an unhandled exception during constructor evaluation halts the statement before method dispatch occurs.",hint:"Atomicity of object creation: exception in constructor aborts execution.",level:"Intermediate",codeExample:`// If constructor throws IllegalArgumentException, dispatchSmsNotification() is never reached:
new NotificationDispatcher(null).dispatchSmsNotification("Swadeep", "Hello");`},{question:"Can you pass an anonymous array as an argument to a method in Java?",shortAnswer:"Yes! Using syntax like 'method(new int[]{1, 2, 3})' creates an anonymous array without a named variable.",explanation:"Anonymous arrays are instantiated on the fly to pass collections of values to methods without declaring intermediate array reference variables.",hint:"Inline array instantiation without variable declaration.",level:"Beginner",codeExample:"processMarks(new int[]{95, 88, 92, 100}); // Anonymous array"},{question:"How does Garbage Collection handle high volumes of anonymous objects created in tight loops?",shortAnswer:"They fill Eden space rapidly, triggering frequent Minor Garbage Collections (Eden churn).",explanation:"While Minor GCs on Eden space are very fast, creating millions of anonymous objects per second increases GC pause frequency and CPU overhead. Reusing a single mutable helper or static utility method is preferred.",hint:"Eden churn from rapid object creation in high-frequency loops.",level:"Intermediate",codeExample:`// Inefficient:
for (int i = 0; i < 1_000_000; i++) new Formatter().format(data[i]);
// Better: reuse 1 Formatter or use static methods`},{question:"Can an anonymous object access private fields of other objects in the same class?",shortAnswer:"Yes. All instances of the same class can access each other's private members.",explanation:"Java access control is class-based, not instance-based. An anonymous instance of Class A executing inside Class A has full access to private fields of any other Class A instance.",hint:"Class-level encapsulation access.",level:"Intermediate",codeExample:`class Secret {
    private int key = 42;
    void compare(Secret other) {
        // Anonymous object can access other.key
    }
}`},{question:"What is the difference between 'new Thread(new Task()).start()' and storing the Thread in a variable?",shortAnswer:"'new Thread(task).start()' runs the thread asynchronously without retaining a Stack reference in the spawning method.",explanation:"The thread object is registered with the JVM ThreadGroup (an active GC Root). Even though the spawning method holds no Stack reference, the thread remains alive until its 'run()' method completes.",hint:"Active threads are GC Roots regardless of Stack reference variables.",level:"Intermediate",codeExample:'new Thread(() -> System.out.println("Background Task running")).start();'},{question:"Can you synchronize on an anonymous object (e.g. 'synchronized(new Object())') and why is it useless?",shortAnswer:"It compiles, but is completely useless because every thread creates and locks its own distinct object instance, providing ZERO synchronization.",explanation:"Synchronization requires all competing threads to lock the SAME object monitor. 'synchronized(new Object())' locks a private temporary object that no other thread will ever see, defeating the purpose of locking.",hint:"Locks must be shared across threads to provide mutual exclusion.",level:"Advanced",codeExample:`// USELESS ANTI-PATTERN:
synchronized(new Object()) { /* Never blocks any other thread! */ }`},{question:"What is the return type of an expression that invokes a method on an anonymous object?",shortAnswer:"The exact return type declared by the invoked method (primitive, reference, or void).",explanation:"In 'double fee = new PaymentGatewayReceipt(...).getFeeAmountInr();', the return value is a primitive 'double', and the anonymous receipt object on the Heap is discarded.",hint:"The expression evaluates to the invoked method's return value.",level:"Beginner",codeExample:'double fee = new PaymentGatewayReceipt("TXN-1", "Swadeep", 8500.0).getFeeAmountInr();'},{question:"Can an anonymous object be cast to another type during invocation?",shortAnswer:"Yes, using standard casting parentheses: '((SubClass) new SuperClass()).subMethod()'.",explanation:"You can cast an anonymous object expression before invoking a method on it, provided the runtime type conforms to the cast.",hint:"Wrap instantiation in parentheses to cast before method call.",level:"Intermediate",codeExample:"((StudentScholarshipAccount) new Object()).displayStatement(); // Casts before calling"},{question:"Why do builder patterns frequently return anonymous objects from intermediate steps?",shortAnswer:"To provide a fluent domain-specific language (DSL) that guides the developer step-by-step toward the final build() call.",explanation:`Staged builders return transient step objects (e.g. 'StudentBuilder.named("Swadeep").withRoll(101).build()') that provide compile-time safety for mandatory fields.`,hint:"Step-builder pattern with transient intermediate objects.",level:"Advanced",codeExample:'CourseEnrollment enrollment = CourseEnrollment.builder().name("Swadeep").fee(8500.0).build();'},{question:`What happens when you pass an anonymous object into 'List.add(new Student("Tuhina"))'?`,shortAnswer:"The List stores the Heap address in its internal array, creating an active reference that prevents the object from being garbage-collected.",explanation:"Although no local variable on the caller's Stack holds the reference, the List's internal array element holds the pointer, keeping the object alive on the Heap as long as the List is reachable.",hint:"The collection becomes the active GC Root anchor.",level:"Beginner",codeExample:`List<Student> list = new ArrayList<>();
list.add(new Student("Tuhina")); // Object is safely preserved in the list!`},{question:"Can an anonymous object be used to instantiate an anonymous inner class in a single line?",shortAnswer:"Yes! For example, 'new Thread(new Runnable() { public void run() { ... } }).start();'.",explanation:"This combines anonymous object creation with anonymous inner class implementation in a single compact statement.",hint:"Double anonymous idiom in legacy Java.",level:"Intermediate",codeExample:'new Thread(new Runnable() { public void run() { System.out.println("Running"); } }).start();'},{question:"How does the 'record' feature in Java 16+ interact with anonymous objects?",shortAnswer:"Records make excellent anonymous transient data carriers (DTOs) due to their compact constructor syntax and zero-boilerplate immutability.",explanation:"Passing an anonymous record 'new Point(10, 20)' provides immutable, validated data transfer with built-in equals/hashCode support and minimal syntax.",hint:"Immutable lightweight records as transient anonymous parameters.",level:"Intermediate",codeExample:`record GeoCoord(double lat, double lon) {}
mapService.pinLocation(new GeoCoord(22.76, 88.37)); // Barrackpore coordinates`},{question:"What is the danger of using anonymous objects with heavy native resources (e.g. 'new FileInputStream(...).read()')?",shortAnswer:"Resource Leak: the file stream or socket is never explicitly closed with '.close()', leaking OS file descriptors.",explanation:"Because no variable holds the stream, you cannot call 'close()' or wrap it in a try-with-resources statement. The file descriptor remains open until the JVM's Cleaner/GC eventually reclaims it (which may be too late).",hint:"Always use named variables in try-with-resources for Closeable resources.",level:"Advanced",codeExample:`// DANGEROUS LEAK:
int b = new FileInputStream("data.txt").read(); // File descriptor leaked!
// SAFE:
try (FileInputStream fis = new FileInputStream("data.txt")) { int b = fis.read(); }`},{question:"Can an anonymous object have instance initializer blocks?",shortAnswer:"Yes. An anonymous object runs all static and instance initializer blocks of its class during instantiation.",explanation:"Because an anonymous object uses standard class constructors, all normal initialization stages (zero-init, field inits, instance initializer blocks) execute identically.",hint:"Standard class initialization pipeline applies.",level:"Beginner",codeExample:`class Task {
    { System.out.println("Instance block runs for anonymous object!"); }
}`},{question:"Why should you avoid creating anonymous instances of utility classes that have only static methods?",shortAnswer:"Utility classes should have private constructors and be invoked via 'UtilityClass.method()'; instantiating them wastes Heap memory.",explanation:"Creating 'new Math().max(a, b)' or 'new StringUtils().trim(s)' allocates unnecessary Heap objects. Utility classes should enforce non-instantiability with a private constructor.",hint:"Static utility classes should never be instantiated.",level:"Beginner",codeExample:`// Anti-pattern: new Math().sqrt(16.0);
// Correct: Math.sqrt(16.0);`},{question:"What is the bytecode difference between 'Student s = new Student(); s.display();' and 'new Student().display();'?",shortAnswer:"The named version uses 'astore_1' and 'aload_1' to save and reload the reference from the local variable table; the anonymous version keeps the reference directly on the operand stack.",explanation:"The anonymous version saves 2 bytecode instructions ('astore' and 'aload') because the reference pushed by 'new/dup' is consumed directly by 'invokevirtual' without being written to the Stack frame's local variable table.",hint:"Saves astore/aload bytecode instructions.",level:"Advanced",codeExample:`// Anonymous bytecode:
// 0: new #2; 3: dup; 4: invokespecial #3; 7: invokevirtual #4; 10: return`},{question:"How does Kotlin's 'apply' or 'also' scope functions compare to Java's anonymous object chaining?",shortAnswer:"Kotlin scope functions provide language-level block scoping for transient object configuration; Java achieves similar ergonomics via fluent builder methods returning 'this'.",explanation:"While Kotlin has built-in scope functions, Java developers design classes with fluent mutators ('return this;') to enable seamless multi-step configuration on anonymous instances.",hint:"Fluent mutators provide scope-function ergonomics in Java.",level:"Intermediate",codeExample:'new StudentRecord().setRoll(101).setName("Swadeep").save();'},{question:"Can an anonymous object be passed to 'System.identityHashCode()'?",shortAnswer:"Yes! 'System.identityHashCode(new Object())' returns the JVM identity hash of that transient object.",explanation:"The anonymous object is created, passed to the static method, its identity hash code is extracted from its Mark Word, and then it is immediately discarded.",hint:"Extracts identity hash before discarding instance.",level:"Beginner",codeExample:'int hash = System.identityHashCode(new NotificationDispatcher("Barrackpore"));'},{question:"What is the primary indicator that an anonymous object SHOULD be converted into a named variable?",shortAnswer:"When the object's methods need to be called multiple times across distinct lines, or its state must be queried after an operation.",explanation:"If you need to inspect the return code, check a boolean flag, or query the balance after an operation, storing the reference in a named variable is strictly necessary.",hint:"Multi-line interaction or state inspection mandates a named variable.",level:"Beginner",codeExample:`StudentRecord record = new StudentRecord(101, "Swadeep");
record.registerCourse("Java");
if (record.isEnrolled()) record.printCard(); // Requires named variable!`},{question:"How do modern microservices use anonymous objects in reactive streams or message publishing?",shortAnswer:"By instantiating and publishing transient event messages directly into Kafka/RabbitMQ streams without caching them in memory.",explanation:"In event-driven architectures, event objects ('new StudentEnrolledEvent(studentId, timestamp)') are fired directly into reactive publishers ('eventBus.publish(new StudentEnrolledEvent(...))') and immediately reclaimed by GC.",hint:"Fire-and-forget event message publication.",level:"Advanced",codeExample:'eventPublisher.emit(new EnrollmentConfirmedEvent(101, "Barrackpore"));'},{question:"What is Sukanta Hui's Rule of Thumb for Anonymous Objects?",shortAnswer:"Use anonymous objects for transient actions and one-way messages; use named references for persistent domain entities and long-term state.",explanation:"At the Barrackpore academy, Sukanta Hui teaches that an anonymous object is like a postal courier—it delivers a message or executes a task and departs immediately. If an entity represents a student, bank account, or persistent system record, it deserves a proud, named reference variable on the Stack.",hint:"Couriers are anonymous; citizens have names.",level:"Beginner",codeExample:`// Sukanta Hui's Law:
// Transient Action (Anonymous): new ReceiptPrinter().print(report);
// Domain Entity (Named)       : StudentAccount swadeep = new StudentAccount(...);`}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes singlePulse {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-single-pulse {
            animation: singlePulse 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Single-Use Invocations & Memory Dynamics"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Anonymous Objects: Creation and Valid Use Cases"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore the mechanics and production patterns of Anonymous Objects in Java: analyzing fire-and-forget single-statement executions, transient method parameter passing, immediate Garbage Collection eligibility, and dissecting the dangerous “state loss” anti-pattern when mutating unnamed instances."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," The 4 Valid Production Use Cases for Anonymous Objects"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["An anonymous object is created when ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new ClassName(...)"})," executes without storing its 64-bit Heap address into a named reference variable on the Stack. It has 4 primary production use cases:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-1",children:"1. Fire & Forget"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Executing a single action: ",e.jsx("code",{className:"text-amber-300",children:"new Dispatcher().sendAlert()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"2. Method Argument"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Passing transient payload: ",e.jsx("code",{className:"text-sky-300",children:"ledger.record(new Receipt(...))"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"3. Factory Return"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Returning new instances cleanly: ",e.jsx("code",{className:"text-emerald-300",children:"return new StudentRecord(...)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"4. Chained Execution"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Chaining fluent methods on a single unnamed builder pipeline."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-amber-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-amber-300",children:"Classroom Case Study (Barrackpore Fee Accounting Ledger):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," and ",e.jsx("strong",{children:"Tuhina Das"})," submitted payments, passing anonymous ",e.jsx("code",{className:"text-amber-300 font-mono",children:'new PaymentGatewayReceipt("TXN-9081", "Swadeep", 8500.0)'})," into the ledger allowed the accounting service to extract the fee and update cumulative revenue without polluting the caller's Stack frame with single-use temporary variables!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Anonymous Object Memory Lifecycle: Creation → Execution → Immediate GC"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing how the JVM manages Stack operand evaluation, Heap allocation in Eden, and instantaneous Garbage Collection eligibility upon statement completion:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 310",className:"w-full h-auto","aria-label":"Anonymous Object Memory Lifecycle Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"execArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#f59e0b"})}),e.jsx("marker",{id:"gcArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#ef4444"})})]}),e.jsx("rect",{x:"25",y:"25",width:"280",height:"260",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"165",y:"52",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"CALLER STACK FRAME"}),e.jsx("text",{x:"165",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Local Variable Table (LVT)"}),e.jsx("rect",{x:"40",y:"85",width:"250",height:"70",rx:"6",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"105",fill:"#f87171",fontSize:"10",fontWeight:"bold",children:"NO Named Variable Created!"}),e.jsx("text",{x:"50",y:"125",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"LVT Slot = Empty / Unused"}),e.jsx("text",{x:"50",y:"142",fill:"#94a3b8",fontSize:"9",children:"Reference stays only on Operand Stack"}),e.jsx("rect",{x:"40",y:"170",width:"250",height:"95",rx:"6",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"190",fill:"#bae6fd",fontSize:"9",fontWeight:"bold",children:"Bytecode Pipeline:"}),e.jsx("text",{x:"50",y:"208",fill:"#fef08a",fontSize:"9",fontFamily:"monospace",children:"1. new & dup (Pushes 0x4517D9A3)"}),e.jsx("text",{x:"50",y:"224",fill:"#fef08a",fontSize:"9",fontFamily:"monospace",children:"2. invokespecial <init>"}),e.jsx("text",{x:"50",y:"240",fill:"#fef08a",fontSize:"9",fontFamily:"monospace",children:"3. invokevirtual dispatchSms"}),e.jsx("text",{x:"50",y:"256",fill:"#f87171",fontSize:"8",children:"→ Semicolon pops reference!"}),e.jsx("rect",{x:"345",y:"25",width:"310",height:"260",rx:"10",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"500",y:"52",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"ANONYMOUS HEAP OBJECT"}),e.jsx("text",{x:"500",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Address: 0x4517D9A3 (Eden Space)"}),e.jsx("rect",{x:"360",y:"85",width:"280",height:"35",rx:"4",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"370",y:"107",fill:"#fde68a",fontSize:"9",fontFamily:"monospace",children:"Mark Word (8B) + Klass Word (4B)"}),e.jsx("rect",{x:"360",y:"130",width:"280",height:"75",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"370",y:"150",fill:"#e0e7ff",fontSize:"9",fontFamily:"monospace",children:'campusHub = "Barrackpore"'}),e.jsx("text",{x:"370",y:"170",fill:"#4ade80",fontSize:"9",fontFamily:"monospace",children:"Method: dispatchSmsNotification()"}),e.jsx("text",{x:"370",y:"190",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Runs successfully on 'this'!"}),e.jsx("rect",{x:"360",y:"215",width:"280",height:"55",rx:"4",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"370",y:"235",fill:"#fca5a5",fontSize:"9",fontWeight:"bold",children:"Post-Execution State:"}),e.jsx("text",{x:"370",y:"252",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"Active GC Roots = 0 (Orphaned!)"}),e.jsx("rect",{x:"695",y:"25",width:"200",height:"260",rx:"10",fill:"#0f172a",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"795",y:"52",fill:"#f87171",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"JVM GARBAGE COLLECTOR"}),e.jsx("text",{x:"795",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Minor GC in Eden Space"}),e.jsx("rect",{x:"710",y:"95",width:"170",height:"170",rx:"6",fill:"#18181b",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"720",y:"125",fill:"#fca5a5",fontSize:"10",fontWeight:"bold",children:"Reclamation Cycle:"}),e.jsx("text",{x:"720",y:"150",fill:"#94a3b8",fontSize:"9",children:"1. Object identified"}),e.jsx("text",{x:"720",y:"165",fill:"#94a3b8",fontSize:"9",children:"   as unreachable."}),e.jsx("text",{x:"720",y:"190",fill:"#94a3b8",fontSize:"9",children:"2. Eden memory chunk"}),e.jsx("text",{x:"720",y:"205",fill:"#94a3b8",fontSize:"9",children:"   reset and recycled."}),e.jsx("text",{x:"720",y:"235",fill:"#4ade80",fontSize:"9",fontWeight:"bold",children:"Memory Zero-Cost Exit"}),e.jsx("path",{d:"M 290 120 L 345 120",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#execArrow)"}),e.jsx("path",{d:"M 655 240 L 695 240",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#gcArrow)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"AnonymousObjectsAndUseCasesDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The code below showcases single-use fire-and-forget executions, passing anonymous objects as method parameters, temporary calculations, and illustrates the state loss pitfall:"}),e.jsx(t,{fileName:"AnonymousObjectsAndUseCasesDemo.java",code:r})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & JVM Technical Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Immediate GC Eligibility"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Because no Stack reference variable holds the Heap address pointer, the anonymous object loses all GC Root reachability as soon as the statement terminates."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Bytecode Economy"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Anonymous objects save ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"astore"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"aload"})," bytecode instructions by keeping the reference directly on the operand stack rather than storing and reloading it from the Local Variable Table."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Collections Retain References"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Passing an anonymous object to a collection (",e.jsx("code",{className:"text-purple-300 font-mono",children:'list.add(new Student("Tuhina"))'}),") preserves the object! The list's internal array holds the reference, preventing Garbage Collection."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Beware of Closeable Leaks"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Never use anonymous objects for native OS resources (like ",e.jsx("code",{className:"text-rose-400 font-mono",children:'new FileInputStream("...").read()'}),"). Without a reference, you cannot invoke ",e.jsx("code",{className:"text-rose-400 font-mono",children:"close()"}),", causing OS file descriptor leaks."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Calling Multiple Methods on Separate Anonymous Objects"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Every ",e.jsx("code",{className:"text-rose-300 font-mono",children:"new"})," creates a distinct object instance. Mutating state on one anonymous object will never reflect when calling another method on a newly instantiated anonymous object."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// BUG: Operates on 2 different objects!
new TraineeScoreCard().addScore(50);
new TraineeScoreCard().printFinalScore(); // Prints 0!`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Use Named Variables for Stateful Multi-Step Work"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Whenever state must be accumulated or queried across distinct statements, store the object in a named reference variable."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// CORRECT: Single object preserves state!
TraineeScoreCard card = new TraineeScoreCard();
card.addScore(50);
card.printFinalScore(); // Prints 50!`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 p-6 md:p-8 rounded-2xl border border-amber-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why is synchronizing on an anonymous object completely useless?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"synchronized(new Object()) { ... }"})," compiles without warnings, but provides ",e.jsx("strong",{children:"zero concurrency protection"}),"! Thread synchronization requires competing threads to acquire the monitor lock of the ",e.jsx("em",{children:"exact same shared Heap object"}),". When each thread creates its own anonymous object, every thread acquires its own private, isolated lock simultaneously, completely destroying mutual exclusion!"]})]}),e.jsx(s,{quote:"Think of an anonymous object as a courier on a bicycle—it delivers a message or performs an errand and departs into memory recycling. If an entity represents a student, bank account, or system ledger, give it a proud named variable on the Stack.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(a,{content:i,fileName:"Topic9_Anonymous_Objects_and_Use_Cases_Note.txt"})]})]})}export{b as default};

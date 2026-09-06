import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 5: Multiple Reference Variables Pointing to the Same Object (Aliasing)\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Object Aliasing & Shared Mutable State\r
 * ----------------------------------------------------------------------------\r
 * In Java:\r
 * 1. An object resides in a single contiguous block of Heap memory.\r
 * 2. When one reference variable is assigned to another:\r
 *        BatchProjectAccount primaryLead = new BatchProjectAccount("AI Automation Lab", 45000.00);\r
 *        BatchProjectAccount coLead = primaryLead;\r
 *        BatchProjectAccount auditor = primaryLead;\r
 *    No new object is created on the Heap!\r
 *    Instead, the Stack memory slots for \`primaryLead\`, \`coLead\`, and \`auditor\`\r
 *    all store the identical 64-bit/32-bit Heap memory address pointer (e.g. 0x4A12B890).\r
 *\r
 * 3. Side Effects of Shared Mutable State:\r
 *    - Any mutation executed through \`coLead.spendBudget(5000.0)\` directly modifies\r
 *      the single shared object on the Heap.\r
 *    - When \`auditor\` or \`primaryLead\` inspects the state, they immediately see the reduced budget.\r
 *\r
 * 4. Partial Nullification:\r
 *    - If \`primaryLead = null;\`, the Heap object is NOT garbage collected because\r
 *      \`coLead\` and \`auditor\` are still active GC Roots holding valid pointers!\r
 *    - An object is only eligible for GC when ALL reference variables are severed.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
public class MultipleReferencesSingleObjectDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: BatchProjectAccount (Shared Financial Ledger)\r
    // ------------------------------------------------------------------------\r
    public static class BatchProjectAccount {\r
        private String projectTitle;\r
        private String leadStudent;\r
        private String campusBranch;\r
        private double allocatedBudgetInr;\r
        private double totalExpensesInr;\r
\r
        public BatchProjectAccount(String projectTitle, String leadStudent, String campusBranch, double allocatedBudgetInr) {\r
            this.projectTitle = projectTitle;\r
            this.leadStudent = leadStudent;\r
            this.campusBranch = campusBranch;\r
            this.allocatedBudgetInr = allocatedBudgetInr;\r
            this.totalExpensesInr = 0.0;\r
        }\r
\r
        // State Mutator\r
        public void recordExpense(String description, double amountInr, String recordedBy) {\r
            if (amountInr <= 0.0) {\r
                System.out.println("  [Error] Expense amount must be positive.");\r
                return;\r
            }\r
            if ((this.totalExpensesInr + amountInr) > this.allocatedBudgetInr) {\r
                System.out.printf("  [Budget Alert] Expense of ₹%.2f rejected! Exceeds remaining budget.\\n", amountInr);\r
                return;\r
            }\r
            this.totalExpensesInr += amountInr;\r
            System.out.printf("  [Expense Recorded by %-12s] %-25s : -₹%,9.2f | Remaining: ₹%,9.2f\\n",\r
                    recordedBy, description, amountInr, (this.allocatedBudgetInr - this.totalExpensesInr));\r
        }\r
\r
        public void printLedgerSummary(String accessorLabel) {\r
            double remainingBudget = this.allocatedBudgetInr - this.totalExpensesInr;\r
            System.out.printf("  +--- [Accessed via %-18s] -------------------------+\\n", accessorLabel);\r
            System.out.printf("  | Project Title   : %-37s |\\n", projectTitle);\r
            System.out.printf("  | Lead Student    : %-37s |\\n", leadStudent);\r
            System.out.printf("  | Campus Branch   : %-37s |\\n", campusBranch);\r
            System.out.printf("  | Initial Budget  : ₹%-37.2f |\\n", allocatedBudgetInr);\r
            System.out.printf("  | Total Expenses  : ₹%-37.2f |\\n", totalExpensesInr);\r
            System.out.printf("  | Available Funds : ₹%-37.2f |\\n", remainingBudget);\r
            System.out.printf("  | Heap Memory Hash: 0x%08X (Physical Object Identity)      |\\n", System.identityHashCode(this));\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
\r
        // Accessors\r
        public String getProjectTitle() { return projectTitle; }\r
        public double getRemainingBudget() { return allocatedBudgetInr - totalExpensesInr; }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Method: External Service Receiving an Aliased Reference\r
    // ------------------------------------------------------------------------\r
    public static void auditAndApproveGrant(BatchProjectAccount accountReference, double grantAmountInr) {\r
        System.out.println("  --> [Audit Service Invoked] Account pointer received: 0x"\r
                + Integer.toHexString(System.identityHashCode(accountReference)).toUpperCase());\r
        accountReference.recordExpense("Hardware Lab Upgrade Grant", grantAmountInr, "External Auditor");\r
        System.out.println("  <-- [Audit Service Completed]\\n");\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Aliasing, Mutation Ripple & GC Trace\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: MULTIPLE REFERENCES POINTING TO A SINGLE OBJECT");\r
        System.out.println(" Educator: Sukanta Hui | Locations: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // STAGE 1: Creating 1 Heap Object with 3 Stack Reference Variables\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> STAGE 1: Instantiating Single Shared Project Account");\r
        System.out.println("Executing: BatchProjectAccount leadRef = new BatchProjectAccount(...);");\r
\r
        BatchProjectAccount leadRef = new BatchProjectAccount(\r
                "Barrackpore AI & Robotics Lab",\r
                "Swadeep Paul",\r
                "Barrackpore",\r
                75000.00\r
        );\r
\r
        System.out.println("Creating two aliases pointing to leadRef:");\r
        System.out.println("  BatchProjectAccount coLeadRef = leadRef;");\r
        System.out.println("  BatchProjectAccount financeAuditorRef = leadRef;\\n");\r
\r
        BatchProjectAccount coLeadRef = leadRef;\r
        BatchProjectAccount financeAuditorRef = leadRef;\r
\r
        // Checking Reference Equality (Identity Comparison)\r
        System.out.println(">>> Verifying Memory Identity using '==' Operator:");\r
        System.out.println("  (leadRef == coLeadRef)            : " + (leadRef == coLeadRef) + " (Identical Heap Address)");\r
        System.out.println("  (coLeadRef == financeAuditorRef)  : " + (coLeadRef == financeAuditorRef) + " (Identical Heap Address)");\r
        System.out.printf("  leadRef Stack Pointer             : 0x%08X\\n", System.identityHashCode(leadRef));\r
        System.out.printf("  coLeadRef Stack Pointer           : 0x%08X\\n", System.identityHashCode(coLeadRef));\r
        System.out.printf("  financeAuditorRef Stack Pointer   : 0x%08X\\n\\n", System.identityHashCode(financeAuditorRef));\r
\r
        leadRef.printLedgerSummary("leadRef (Swadeep)");\r
\r
        // --------------------------------------------------------------------\r
        // STAGE 2: Mutation via coLeadRef (Tuhina) Affects All References\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> STAGE 2: Mutating State via 'coLeadRef' (Tuhina in Naihati)");\r
        System.out.println("Executing: coLeadRef.recordExpense(\\"Sensors & Microcontrollers\\", 18500.0, \\"Tuhina\\");");\r
\r
        coLeadRef.recordExpense("Sensors & Microcontrollers", 18500.00, "Tuhina Das");\r
\r
        System.out.println("\\nInspecting ledger through the OTHER two reference variables:");\r
        leadRef.printLedgerSummary("leadRef (Swadeep)");\r
        financeAuditorRef.printLedgerSummary("financeAuditorRef");\r
\r
        // --------------------------------------------------------------------\r
        // STAGE 3: External Method Mutation via Method Parameter Alias\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> STAGE 3: Passing Alias to External Service Method");\r
        auditAndApproveGrant(financeAuditorRef, 12000.00);\r
\r
        System.out.println("State seen by leadRef after audit service finished:");\r
        leadRef.printLedgerSummary("leadRef (Swadeep)");\r
\r
        // --------------------------------------------------------------------\r
        // STAGE 4: Severing References (Nullification) & Object Reachability\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> STAGE 4: Severing Reference 1 (leadRef = null)");\r
        System.out.println("Executing: leadRef = null;");\r
        leadRef = null;\r
        System.out.println("Note: 'leadRef' is null, but the Heap object is NOT collected because");\r
        System.out.println("      'coLeadRef' and 'financeAuditorRef' are still active GC Roots!\\n");\r
\r
        System.out.println("Executing: coLeadRef = null;");\r
        coLeadRef = null;\r
        System.out.println("Note: Only 1 reference remains ('financeAuditorRef').\\n");\r
\r
        financeAuditorRef.printLedgerSummary("financeAuditorRef");\r
\r
        System.out.println("Executing: financeAuditorRef = null;");\r
        financeAuditorRef = null;\r
        System.out.println("Result: All references are now severed (0 active GC Roots).");\r
        System.out.println("        The BatchProjectAccount object on the Heap is now 100% eligible for GC!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MULTIPLE REFERENCES (ALIASING) DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 5: Multiple Reference Variables Pointing to the Same Object (Aliasing)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OBJECT ALIASING DEFINED:\r
   - When two or more reference variables on the Stack hold the identical\r
     Heap memory address pointing to a single object instance.\r
   - Syntax:\r
       BatchProjectAccount leadRef = new BatchProjectAccount(...);\r
       BatchProjectAccount coLeadRef = leadRef; // Aliasing created!\r
\r
2. KEY RULES & CHARACTERISTICS:\r
   -----------------------------------------------------------------------------\r
   RULE 1: No New Object Created\r
           - Assignment (\`b = a\`) only copies the 64-bit/32-bit pointer on Stack.\r
           - Zero additional Heap memory is allocated.\r
\r
   RULE 2: Shared Mutable State (Action at a Distance)\r
           - Mutating an object through \`coLeadRef.recordExpense(...)\` alters\r
             the single shared instance in Heap.\r
           - Reading via \`leadRef.getRemainingBudget()\` immediately sees the change!\r
\r
   RULE 3: Reference Identity (\`==\`)\r
           - \`leadRef == coLeadRef\` evaluates to \`true\` (identical Heap addresses).\r
           - \`System.identityHashCode(leadRef) == System.identityHashCode(coLeadRef)\`.\r
\r
   RULE 4: Partial Severance & GC Reachability\r
           - Setting \`leadRef = null;\` clears only that local Stack slot.\r
           - The object on the Heap is NOT collected as long as \`coLeadRef\` or\r
             any other active GC Root holds a valid reference.\r
           - Object becomes GC eligible ONLY when ALL reference paths are severed.\r
   -----------------------------------------------------------------------------\r
\r
3. DEFENSIVE STRATEGIES AGAINST UNINTENDED ALIASING BUGS:\r
   a) Immutability: Make fields \`final\` and provide no mutators (e.g. String, Record).\r
   b) Defensive Copying: Return cloned/copied instances from getters.\r
   c) Unmodifiable Wrappers: Return \`Collections.unmodifiableList(internalList)\`.\r
\r
4. ALIASING IN CONCURRENCY:\r
   - Shared mutable objects accessed by multiple threads require synchronization.\r
   - Synchronizing on any alias locks the single object's intrinsic monitor lock\r
     in the HotSpot Mark Word.\r
\r
5. SUKANTA HUI'S CLASSROOM ANALOGY:\r
   - "One physical house (Heap object) can have multiple keys (Stack reference variables)\r
      held by Swadeep, Tuhina, and the Auditor. If Tuhina paints the wall red,\r
      Swadeep and the Auditor walk in and see red walls!"\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is 'Object Aliasing' in Java?",shortAnswer:"When two or more distinct reference variables on the Stack hold the memory address of the exact same object on the Heap.",explanation:"Aliasing occurs whenever a reference assignment like 'ref2 = ref1' is executed. Both variables become independent handles pointing to a single underlying object instance in Heap memory.",hint:"Multiple names or remote controls for a single physical entity.",level:"Beginner",codeExample:`BatchProjectAccount primary = new BatchProjectAccount(...);
BatchProjectAccount coLead = primary; // Aliasing: primary and coLead point to the same object`},{question:"What happens to the object state when one alias mutates a field?",shortAnswer:"The mutation immediately affects what all other aliases see, because there is only one object in Heap memory.",explanation:"Since all aliases share the exact same Heap memory block, invoking a mutating method through 'aliasA.setBudget(5000)' directly alters the fields in that shared memory chunk. When 'aliasB.getBudget()' is called, it reads the updated value.",hint:"There is only one copy of the fields on the Heap.",level:"Beginner",codeExample:`coLead.recordExpense("Lab Equipment", 5000.0, "Tuhina");
System.out.println(primary.getRemainingBudget()); // Reads the updated reduced balance!`},{question:"Does assigning 'ref1 = null' destroy the shared object if 'ref2' is still pointing to it?",shortAnswer:"No. Setting 'ref1 = null' only clears the pointer in ref1's Stack slot; the object remains alive because ref2 is an active GC Root.",explanation:"Garbage Collection is based on reachability. An object is only eligible for GC when NO active reference paths from any GC Root exist. As long as ref2 holds the Heap address, the object remains 100% alive in memory.",hint:"Partial severance does not trigger garbage collection.",level:"Beginner",codeExample:`BatchProjectAccount a = new BatchProjectAccount(...);
BatchProjectAccount b = a;
a = null; // Object remains alive via 'b'!`},{question:"How does the '==' operator behave between aliased reference variables?",shortAnswer:"It always returns 'true' because both variables contain the identical Heap memory address pointer.",explanation:"The '==' operator on reference types compares the physical 32/64-bit addresses stored in their Stack slots. For aliases, those address values are identical.",hint:"Reference identity comparison checks address equality.",level:"Beginner",codeExample:`BatchProjectAccount a = new BatchProjectAccount(...);
BatchProjectAccount b = a;
System.out.println(a == b); // true`},{question:"What is a 'Defensive Copy' and why is it used to prevent aliasing bugs?",shortAnswer:"Creating and returning a separate duplicate object so that callers cannot mutate the internal private state of the original object.",explanation:"If a getter returns a reference to an internal mutable object (e.g. a Date or List), the caller gains an alias and can mutate internal state directly. Returning a new cloned/copied instance breaks the alias and preserves encapsulation.",hint:"Never hand over your private keys; hand over a duplicate copy.",level:"Intermediate",codeExample:`public Date getStartDate() {
    return new Date(this.startDate.getTime()); // Defensive Copy prevents caller mutation
}`},{question:"What are the common concurrency dangers of object aliasing in multi-threaded programs?",shortAnswer:"Race conditions, data corruption, and dirty reads when multiple threads mutate the shared object simultaneously without synchronization.",explanation:"Because Heap memory is shared across all threads, two threads with aliased references can execute conflicting mutations concurrently, corrupting object invariants and causing non-deterministic application crashes.",hint:"Shared mutable state is the root cause of multi-threading bugs.",level:"Intermediate",codeExample:"// Thread 1 & Thread 2 both call account.recordExpense(...) without synchronization"},{question:"How does creating an immutable class completely neutralize the risks of aliasing?",shortAnswer:"Since immutable objects have no mutator methods, sharing aliases across multiple references is 100% side-effect free and thread-safe.",explanation:"Classes like String, Integer, and LocalDate have final fields and no setter methods. Multiple references can point to the same String instance without any fear of unexpected state changes, making aliasing an asset rather than a liability.",hint:"If state cannot change, sharing pointers is completely safe.",level:"Intermediate",codeExample:`String s1 = "Barrackpore";
String s2 = s1; // 100% safe aliasing because String is immutable!`},{question:"What is the difference between shallow copy and deep copy in relation to aliasing?",shortAnswer:"Shallow copy creates a new outer object but aliases all inner nested objects; Deep copy recursively creates new instances for both outer and inner objects.",explanation:"In a shallow copy, nested mutable reference fields still point to the original internal objects (creating aliased child structures). A deep copy instantiates new objects for every nested tier, guaranteeing zero shared mutable references.",hint:"Shallow copies share internal organs; deep copies clone everything.",level:"Intermediate",codeExample:`// Shallow Copy aliases child address:
Student clone = new Student(this.id, this.addressRef); // addressRef is aliased!`},{question:"What is 'Escape Analysis' regarding aliased method parameters?",shortAnswer:"The JVM JIT compiler checks if a reference escapes the method scope by being aliased into an external field or returned.",explanation:"If a method parameter is only aliased to local variables within the method and never published externally (NoEscape), the JIT compiler can optimize its access or perform scalar replacement.",hint:"Tracking pointer visibility boundaries.",level:"Advanced",codeExample:`void process(Student s) {
    Student localAlias = s; // Does not escape outside process()
}`},{question:"What happens if you modify an object inside a 'forEach' loop through an iteration alias variable?",shortAnswer:"The changes mutate the actual objects stored in the collection, because the loop variable is an alias to the element.",explanation:"In enhanced for-loops ('for (Student s : studentList)'), 's' is an alias holding the reference to each list element in Heap memory. Calling 's.setFees(0)' modifies the actual student object within the list.",hint:"The iteration variable is a reference pointer, not an independent copy.",level:"Beginner",codeExample:`for (BatchProjectAccount acc : accounts) {
    acc.recordExpense("Tax", 100.0, "System"); // Mutates elements in collection!
}`},{question:"Can an alias reference have a different access modifier or scope than the original variable?",shortAnswer:"Yes. Reference variables have their own independent scopes, types (subtypes/supertypes), and modifiers on their respective Stack frames.",explanation:"A public field can hold a reference, a private local variable in a method can hold the same reference, and a parameter can hold it simultaneously. The scope belongs to the variable, while the object resides independently in the Heap.",hint:"Variable visibility is separate from object location.",level:"Intermediate",codeExample:"private BatchProjectAccount internalRef = publicService.getSharedAccount();"},{question:"What is the difference between 'Reference Aliasing' and 'Polymorphic Reference'?",shortAnswer:"Aliasing is multiple variables pointing to one object; Polymorphism is a parent type reference variable holding a child object instance.",explanation:"Polymorphism allows 'Object obj = new Student()' or 'List list = new ArrayList()'. If you have 'Student s = (Student) obj', both 'obj' and 's' are aliases to the same ArrayList instance, with 's' offering specialized subtype access.",hint:"Polymorphism defines type hierarchy; aliasing defines pointer multiplicity.",level:"Intermediate",codeExample:`Object ref1 = new Student("Swadeep");
Student ref2 = (Student) ref1; // Both are aliases, but ref2 has Student-specific methods.`},{question:"How can the 'final' keyword prevent reference reassignment while still allowing aliased mutation?",shortAnswer:"'final' locks the reference pointer to a specific Heap address, but does not prevent mutating the object's internal fields.",explanation:"Writing 'final BatchProjectAccount acc = primary;' prevents 'acc' from pointing to any other object in the future. However, calling 'acc.recordExpense(...)' is completely valid and mutates the shared Heap object.",hint:"Final reference protects the pointer, not the payload.",level:"Beginner",codeExample:`final BatchProjectAccount acc = primary;
acc.recordExpense("Lab Books", 500.0, "Admin"); // Allowed!
// acc = new BatchProjectAccount(...); // Compile Error!`},{question:"What is an 'Unintended Side Effect' (Action at a Distance) in software architecture?",shortAnswer:"When modifying an object via one alias unexpectedly breaks assumptions or logic in an unrelated part of the codebase holding another alias.",explanation:"If Module A and Module B both hold references to the same mutable Configuration object, Module A changing a flag might cause Module B to fail without any explicit method call between them.",hint:"Hidden dependencies through shared mutable pointers.",level:"Intermediate",codeExample:`// Module A: config.setTimeout(0);
// Module B: reads timeout=0 and crashes unexpectedly!`},{question:"How does the 'Flyweight Pattern' intentionally use aliasing to optimize memory?",shortAnswer:"It shares a single immutable object instance among thousands of references to eliminate duplicate Heap allocations.",explanation:"In graphics rendering, text editors, or game engines (e.g. rendering 100,000 trees with the same texture), the Flyweight pattern maintains one shared Texture object and aliases it across 100,000 Tree coordinate objects.",hint:"Intentional massive aliasing for memory efficiency.",level:"Advanced",codeExample:`TreeModel sharedModel = TreeModelFactory.get("Pine");
forest.add(new Tree(x1, y1, sharedModel));
forest.add(new Tree(x2, y2, sharedModel)); // Shared pointer`},{question:"What is the role of IdentityHashCode vs Overridden HashCode when inspecting aliases?",shortAnswer:"System.identityHashCode() returns identical hashes for all aliases because it reads directly from the JVM object header.",explanation:"Even if an overridden hashCode() method calculates values based on mutable fields, System.identityHashCode(refA) and System.identityHashCode(refB) will always return the exact same integer for aliases, proving identical memory identity.",hint:"identityHashCode reflects physical Heap object identity.",level:"Intermediate",codeExample:"System.out.println(System.identityHashCode(refA) == System.identityHashCode(refB)); // true"},{question:"What happens when you pass an object reference to a method that stores it in a static collection?",shortAnswer:"The object gains a permanent alias rooted in Metaspace/Heap, preventing Garbage Collection until explicitly removed.",explanation:"Adding an aliased reference to a static list/map creates a permanent GC Root. Even if all local method variables go out of scope, the object remains reachable indefinitely (a common source of memory leaks).",hint:"Static collections hold persistent aliases.",level:"Intermediate",codeExample:`public static void register(Student s) {
    registry.add(s); // 's' is now aliased in static registry for the entire application lifetime
}`},{question:"How does Java's 'String Constant Pool' utilize reference aliasing?",shortAnswer:"Identical string literals are interned in the pool, so multiple variables with the same literal point to the exact same Heap object.",explanation:`When you declare 'String s1 = "Barrackpore"; String s2 = "Barrackpore";', the JVM does not create two string objects. Instead, both s1 and s2 are aliased to the same interned String instance in the pool.`,hint:"String pooling is automatic compiler-assisted aliasing of immutable strings.",level:"Beginner",codeExample:`String s1 = "Barrackpore";
String s2 = "Barrackpore";
System.out.println(s1 == s2); // true (Aliased to same pooled instance)`},{question:"What is a 'WeakReference' in Java and how does it alter aliasing behavior?",shortAnswer:"A WeakReference allows pointing to an object without preventing the Garbage Collector from reclaiming it during GC.",explanation:"Standard aliases are 'Strong References'. A WeakReference ('WeakReference<Student> weakRef = new WeakReference<>(student);') allows accessing the object, but if no strong references remain, the GC reclaims it immediately.",hint:"Useful for memory-sensitive caches and listeners.",level:"Advanced",codeExample:`WeakReference<Student> weak = new WeakReference<>(new Student("Swadeep"));
// Eligible for GC if no strong references exist`},{question:"Can two references point to each other (Circular Reference) and what happens to GC?",shortAnswer:"Yes. In modern JVMs, circular references (isolated islands) are successfully collected if unreachable from any GC Root.",explanation:"Older reference-counting collectors failed on cycles (A points to B, B points to A). Modern HotSpot JVM uses Tracing Garbage Collection from GC Roots; if the entire cycle is disconnected from the root set, the entire island is reclaimed.",hint:"Root reachability ignores internal circular references.",level:"Advanced",codeExample:`Node a = new Node(); Node b = new Node();
a.next = b; b.next = a;
a = null; b = null; // Island of isolation reclaimed by GC!`},{question:"Why does Java not provide an operator to 'delete' or manually free an aliased object from memory?",shortAnswer:"To prevent 'Dangling Pointers' where deleting an object through one reference leaves other aliases pointing to corrupt memory.",explanation:"In C++, calling 'delete ptrA' frees the memory, leaving 'ptrB' as a dangerous dangling pointer. Java eliminates dangling pointers and segmentation faults by giving memory reclamation control exclusively to the automatic Garbage Collector.",hint:"Automatic GC guarantees pointer safety across all aliases.",level:"Intermediate",codeExample:"// In Java, you simply set references to null; the JVM safely collects memory when all aliases die."},{question:"What is the difference between 'Object Identity' and 'Object Equality' in aliased structures?",shortAnswer:"Identity ('==') means two references point to the exact same physical memory location; Equality ('equals()') means two objects contain equivalent logical field values.",explanation:"Aliased references are always identical (ref1 == ref2 is true). Two separate objects created at different Heap addresses may not be identical (ref1 == ref2 is false), but can be equal if their overridden equals() method matches their field values.",hint:"Address match vs content match.",level:"Beginner",codeExample:`Student s1 = new Student(101, "Tuhina");
Student s2 = new Student(101, "Tuhina");
// s1 == s2 is false (different identity), but s1.equals(s2) is true (logical equality)`},{question:"How do builder patterns prevent aliasing of internal collection fields?",shortAnswer:"By making unmodifiable or defensive copies inside the build() method before constructing the target object.",explanation:"If a builder accepts a List and passes it directly to the entity constructor, the caller retains an alias to that List and can mutate it later. Encapsulated builders wrap collections using 'List.copyOf()' or 'Collections.unmodifiableList()'.",hint:"Seal collections before publishing the built entity.",level:"Advanced",codeExample:`public Project build() {
    return new Project(this.title, List.copyOf(this.tasks)); // Immutable snapshot
}`},{question:"What happens when an alias is passed as a key to a HashMap and its internal state is mutated?",shortAnswer:"The object's hashCode changes, corrupting the HashMap bucket index and making the key unsearchable (HashMap leak).",explanation:"If a mutable object is used as a HashMap key and its fields are modified through an alias, its computed hash code shifts. When calling 'map.get(key)', the HashMap searches the wrong bucket and returns null, trapping the entry in memory forever.",hint:"Never use mutable objects with aliases as Map keys.",level:"Advanced",codeExample:`Map<Student, Grade> map = new HashMap<>();
Student s = new Student("Swadeep");
map.put(s, gradeA);
s.setName("Swadeep Paul"); // Hash changed! map.get(s) now returns null!`},{question:"Can an aliased object be locked by multiple threads using the 'synchronized' keyword?",shortAnswer:"Yes. Synchronizing on any alias locks the single underlying object's intrinsic monitor (Monitor Lock).",explanation:"Because synchronization in Java acquires the monitor associated with the physical object in Heap memory (Mark Word lock bits), synchronizing on 'refA' or 'refB' locks the exact same monitor, ensuring mutually exclusive thread execution.",hint:"The lock belongs to the Heap object, not to the reference variable.",level:"Intermediate",codeExample:"synchronized(leadRef) { ... } // Locks the same intrinsic monitor as synchronized(coLeadRef) { ... }"},{question:"What is 'Reference Escaping' in constructor design?",shortAnswer:"When a constructor prematurely passes 'this' to an external variable or listener before the object is fully initialized.",explanation:"Publishing 'this' creates an external alias before constructor validation or field assignment finishes, exposing corrupt or default zeroed state to other threads.",hint:"Keep 'this' private until constructor execution terminates.",level:"Advanced",codeExample:`public ProjectAccount() {
    AccountRegistry.register(this); // BAD: Escaping 'this' creates alias before construction completes!
    this.budget = 10000.0;
}`},{question:"How does the 'clone()' method in java.lang.Object behave with regard to aliasing?",shortAnswer:"Object.clone() performs a field-by-field shallow copy, meaning all reference fields in the clone remain aliased to the original objects.",explanation:"The default clone() implementation copies primitive bit patterns and reference address bits directly. To avoid aliasing internal child objects, the class must explicitly override clone() and instantiate new clones for each mutable reference field.",hint:"Default Object.clone() creates shallow aliases.",level:"Intermediate",codeExample:`protected Object clone() throws CloneNotSupportedException {
    Student cloned = (Student) super.clone();
    cloned.address = (Address) this.address.clone(); // Deep clone breaks alias
    return cloned;
}`},{question:"Why should API designers return unmodifiable collections instead of raw collection aliases?",shortAnswer:"To prevent external consumers from adding, removing, or clearing elements from internal service state.",explanation:"Returning 'Collections.unmodifiableList(internalList)' wraps the list in a read-only decorator. Any attempt by external code to call 'add()' or 'remove()' throws an UnsupportedOperationException, defending domain invariants.",hint:"Read-only wrappers guard against malicious or accidental mutations.",level:"Intermediate",codeExample:`public List<Student> getEnrolledStudents() {
    return Collections.unmodifiableList(this.enrolledStudents);
}`},{question:"What is the visual difference between a variable and an object in memory diagrams?",shortAnswer:"A variable is a labeled slot on the Stack containing a 32/64-bit address; an object is a shaped block on the Heap containing headers and field data.",explanation:"Students often conflate the name of the variable with the object. Visualizing the variable as a 'labeled arrow' and the object as a 'target box' clarifies that multiple arrows can point to the same target box.",hint:"Arrows on Stack, Boxes on Heap.",level:"Beginner",codeExample:`// Stack: [leadRef: 0x100] ---> [Heap Object @ 0x100]
// Stack: [coLeadRef: 0x100] --/`},{question:"What is Sukanta Hui's Pedagogy on Object Aliasing at the Barrackpore Academy?",shortAnswer:"Understand that an object has ONE heart (Heap state) and many hands (Stack references). When one hand moves, the heart beats for all.",explanation:"At the Barrackpore centre, Sukanta Hui teaches that mastering aliasing is the key to preventing the #1 beginner bug in Java: unexpected side effects from shared mutable state. He advises using immutability by default and defensive copies whenever sharing state across architectural boundaries.",hint:"One heart on Heap, many hands on Stack.",level:"Beginner",codeExample:"// Sukanta Hui's Rule: Default to immutable records or defensive copies when passing state across boundaries."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes convergeGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-converge-glow {
            animation: convergeGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Object Aliasing & Shared State"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Multiple Reference Variables Pointing to the Same Object"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the mechanics of Object Aliasing in Java: dissecting how multiple independent Stack reference variables converge on a single Heap object instance, the ripple effects of shared mutable state, reference equality (",e.jsx("code",{className:"text-purple-400 font-mono",children:"=="}),"), partial pointer nullification, and defensive copying patterns."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔗"})," The Anatomy of Object Aliasing"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["When a reference assignment like ",e.jsx("code",{className:"text-purple-400 font-mono",children:"BatchProjectAccount coLead = primaryLead;"})," executes, Java does ",e.jsx("strong",{children:"not"})," duplicate the object on the Heap. Instead, both reference variables on the Stack receive the identical 64-bit/32-bit Heap memory address pointer:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"1. Zero Allocation"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Pointer copying happens purely on the Stack. Zero bytes are allocated in Heap memory."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"2. Shared Mutation"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Modifying fields through any single alias mutates the shared Heap memory seen by all aliases."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"3. GC Reachability"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Nullifying one alias keeps the Heap object alive as long as at least one active reference remains."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Classroom Case Study (Barrackpore AI Project Ledger):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," created the project ledger with ₹75,000 budget, ",e.jsx("strong",{children:"Tuhina Das"})," (Naihati) and the external financial auditor were assigned aliases. When Tuhina recorded a ₹18,500 sensor expense, Swadeep and the auditor instantly saw the available budget decrease to ₹56,500. Even when Swadeep cleared his variable (",e.jsx("code",{className:"text-purple-400 font-mono",children:"leadRef = null"}),"), the ledger stayed 100% active in Heap memory via the remaining aliases!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Converging Reference Architecture: 3 Stack Handles → 1 Heap Object"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing 3 Stack reference variables pointing to the exact same physical Heap instance:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 320",className:"w-full h-auto","aria-label":"Multiple Reference Variables Pointing to Single Object Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"aliasArrow1",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"aliasArrow2",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#a855f7"})}),e.jsx("marker",{id:"aliasArrow3",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})]}),e.jsx("rect",{x:"25",y:"25",width:"310",height:"270",rx:"10",fill:"#0f172a",stroke:"#6366f1",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"52",fill:"#818cf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"THREAD CALL STACK"}),e.jsx("text",{x:"180",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Local Reference Variables in main()"}),e.jsx("rect",{x:"40",y:"85",width:"280",height:"55",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"105",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"leadRef (Swadeep)"}),e.jsx("text",{x:"50",y:"125",fill:"#fef08a",fontSize:"11",fontFamily:"monospace",children:"Value: 0x72EA2F77"}),e.jsx("rect",{x:"40",y:"150",width:"280",height:"55",rx:"6",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"170",fill:"#e9d5ff",fontSize:"10",fontWeight:"bold",children:"coLeadRef (Tuhina)"}),e.jsx("text",{x:"50",y:"190",fill:"#fef08a",fontSize:"11",fontFamily:"monospace",children:"Value: 0x72EA2F77"}),e.jsx("rect",{x:"40",y:"215",width:"280",height:"55",rx:"6",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"235",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"financeAuditorRef (Auditor)"}),e.jsx("text",{x:"50",y:"255",fill:"#fef08a",fontSize:"11",fontFamily:"monospace",children:"Value: 0x72EA2F77"}),e.jsx("path",{d:"M 320 115 C 400 115, 430 140, 500 140",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",markerEnd:"url(#aliasArrow1)"}),e.jsx("path",{d:"M 320 178 C 390 178, 430 160, 500 160",fill:"none",stroke:"#a855f7",strokeWidth:"2.5",markerEnd:"url(#aliasArrow2)"}),e.jsx("path",{d:"M 320 242 C 400 242, 430 180, 500 180",fill:"none",stroke:"#10b981",strokeWidth:"2.5",markerEnd:"url(#aliasArrow3)"}),e.jsx("rect",{x:"500",y:"25",width:"395",height:"270",rx:"10",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"697",y:"52",fill:"#c084fc",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"SINGLE SHARED HEAP OBJECT"}),e.jsx("text",{x:"697",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Physical Heap Address: 0x72EA2F77"}),e.jsx("rect",{x:"515",y:"85",width:"365",height:"30",rx:"4",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"525",y:"105",fill:"#f3e8ff",fontSize:"10",fontFamily:"monospace",children:"Object Header [Mark Word: 8B | Klass Word: 4B]"}),e.jsx("rect",{x:"515",y:"125",width:"365",height:"110",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"525",y:"145",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:'projectTitle = "Barrackpore AI & Robotics Lab"'}),e.jsx("text",{x:"525",y:"165",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:'leadStudent = "Swadeep Paul"'}),e.jsx("text",{x:"525",y:"185",fill:"#fde047",fontSize:"10",fontFamily:"monospace",children:"allocatedBudget = ₹75,000.00"}),e.jsx("text",{x:"525",y:"205",fill:"#f87171",fontSize:"10",fontFamily:"monospace",children:"totalExpenses   = ₹30,500.00 [Mutated by Tuhina & Auditor]"}),e.jsx("text",{x:"525",y:"225",fill:"#4ade80",fontSize:"10",fontFamily:"monospace",children:"remainingBudget = ₹44,500.00"}),e.jsx("text",{x:"697",y:"270",fill:"#a7f3d0",fontSize:"9",textAnchor:"middle",children:"Active GC Roots Count = 3 → 2 → 1 → 0 (Collected)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"MultipleReferencesSingleObjectDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The complete runnable source code below traces multiple reference aliasing, mutator ripple effects across aliases, external service parameters, and GC reachability:"}),e.jsx(t,{fileName:"MultipleReferencesSingleObjectDemo.java",code:i})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & JVM Technical Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Assignment Copies Addresses, Not Objects"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In ",e.jsx("code",{className:"text-sky-300 font-mono",children:"b = a;"}),", only the memory address value on the Stack is copied. No constructor is called, and zero bytes of new Heap memory are allocated."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Identity Comparison with ",e.jsx("code",{className:"font-mono",children:"=="})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["When two reference variables are aliases, ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ref1 == ref2"})," always evaluates to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"true"}),", and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"System.identityHashCode()"})," yields identical integer hashes."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Reachability & GC Roots"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Setting one reference variable to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"null"})," does NOT destroy the object if another active reference variable still holds its address. Only when all reference paths are severed does the object become eligible for Garbage Collection."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Intrinsic Lock Sharing"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Synchronizing on any alias (",e.jsx("code",{className:"text-amber-300 font-mono",children:"synchronized(leadRef)"}),") acquires the monitor lock on the single underlying Heap object, locking out other threads attempting to synchronize on any other alias."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Returning Direct References to Mutable Fields"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Returning private mutable fields (like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Date"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayList"}),") creates an external alias, allowing callers to bypass encapsulation and corrupt internal state."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// DANGEROUS: Leaks internal mutable reference!
public List<Student> getStudents() {
    return this.students; // Caller can call .clear() or .add()!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Defensive Copying & Unmodifiable Wrappers"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Return unmodifiable collection wrappers or cloned copies to seal your internal domain data against unexpected external mutations."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Returns unmodifiable view
public List<Student> getStudents() {
    return Collections.unmodifiableList(this.students);
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-emerald-500/10 p-6 md:p-8 rounded-2xl border border-purple-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: How does Immutability turn Aliasing into a Superpower?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["While aliasing causes bugs in mutable objects, it is a massive performance feature for ",e.jsx("strong",{children:"Immutable Objects"}),"! Because immutable classes (like ",e.jsx("code",{className:"text-purple-300 font-mono",children:"String"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Integer"}),", or Java 16+ ",e.jsx("code",{className:"text-purple-300 font-mono",children:"record"}),") guarantee their fields can never change after construction, thousands of threads can safely share aliases to a single instance with zero locks, zero synchronization, and zero memory duplication!"]})]}),e.jsx(r,{quote:"Remember the Golden House Analogy: One physical house on the Heap can have ten keys on the Stack. If one tenant paints the kitchen blue, every other tenant opens the door to blue walls. Respect shared state, or build immutable fortresses.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(a,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(n,{content:s,fileName:"Topic5_Multiple_References_Aliasing_Note.txt"})]})]})}export{x as default};

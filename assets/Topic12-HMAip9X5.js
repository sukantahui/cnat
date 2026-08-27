import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 12: Access Modifiers Overview: private, default, protected, public\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The 4-Tier Access Control Matrix of Java\r
 * ----------------------------------------------------------------------------\r
 * Java provides 4 distinct visibility levels to control scope and encapsulation:\r
 *\r
 * ----------------------------------------------------------------------------\r
 * ACCESS MODIFIER     SAME CLASS | SAME PACKAGE | SUBCLASS (DIFF PKG) | WORLD\r
 * ----------------------------------------------------------------------------\r
 * 1. private              YES           NO                 NO            NO\r
 * 2. default (no mod)     YES           YES                NO            NO\r
 * 3. protected            YES           YES                YES           NO\r
 * 4. public               YES           YES                YES           YES\r
 * ----------------------------------------------------------------------------\r
 *\r
 * 1. 'private':\r
 *    - Strict encapsulation. Visible ONLY within the enclosing class (and Nestmates).\r
 *\r
 * 2. 'default' (Package-Private / Friendly):\r
 *    - When no modifier is specified. Visible to all classes residing in the SAME package.\r
 *    - Ideal for package-internal collaborator classes and subsystem utilities.\r
 *\r
 * 3. 'protected':\r
 *    - Package-private + Subclass inheritance across packages.\r
 *    - Subclasses in other packages can access protected members through inheritance\r
 *      (\`super.member\` or on instances of the subclass itself), but NOT on raw parent instances.\r
 *\r
 * 4. 'public':\r
 *    - Globally accessible from any class across all packages (subject to JPMS module exports).\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
public class AccessModifiersOverviewDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Parent Class: AcademyPerson (Exposing All 4 Access Levels)\r
    // ------------------------------------------------------------------------\r
    public static class AcademyPerson {\r
        // 1. Private Member: Only accessible within AcademyPerson\r
        private String nationalIdentityNumber = "IND-WB-998822";\r
\r
        // 2. Default (Package-Private) Member: Accessible within same package\r
        String campusLocation = "Barrackpore Academy Hub";\r
\r
        // 3. Protected Member: Accessible within same package + Subclasses anywhere\r
        protected double scholarshipAllowanceInr = 12500.00;\r
\r
        // 4. Public Member: Accessible globally from anywhere\r
        public String personFullName = "Swadeep Paul";\r
\r
        // Methods demonstrating self-access to all 4 levels\r
        public void displaySelfInspection() {\r
            System.out.println("  [Inside AcademyPerson - Full Access to all 4 tiers]:");\r
            System.out.println("    1. private   nationalIdentityNumber : " + nationalIdentityNumber);\r
            System.out.println("    2. default   campusLocation         : " + campusLocation);\r
            System.out.println("    3. protected scholarshipAllowanceInr: ₹" + scholarshipAllowanceInr);\r
            System.out.println("    4. public    personFullName         : " + personFullName);\r
        }\r
\r
        // Private helper method\r
        private String formatSecretAudit() {\r
            return "Audit Hash: 0x" + Integer.toHexString(System.identityHashCode(this));\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Subclass: AcademyTrainee (Demonstrating Inheritance of Protected & Public)\r
    // ------------------------------------------------------------------------\r
    public static class AcademyTrainee extends AcademyPerson {\r
        private String enrolledBatch = "Java Fullstack 2026";\r
\r
        public void displayInheritedAccess() {\r
            System.out.println("  [Inside AcademyTrainee Subclass]:");\r
            // 1. private nationalIdentityNumber -> NOT ACCESSIBLE (Compile Error!)\r
            // 2. default campusLocation -> ACCESSIBLE (same package)\r
            // 3. protected scholarshipAllowanceInr -> ACCESSIBLE (inherited member)\r
            // 4. public personFullName -> ACCESSIBLE (global member)\r
\r
            System.out.println("    &check; default   campusLocation         : " + campusLocation);\r
            System.out.println("    &check; protected scholarshipAllowanceInr: ₹" + scholarshipAllowanceInr);\r
            System.out.println("    &check; public    personFullName         : " + personFullName);\r
            System.out.println("    &cross; private   nationalIdentityNumber : [BLOCKED - Inaccessible in Subclass]");\r
        }\r
\r
        public void applyMeritIncrement(double incrementAmount) {\r
            // Modifying inherited protected field\r
            this.scholarshipAllowanceInr += incrementAmount;\r
            System.out.printf("    [Increment Applied] New allowance for %s: ₹%,.2f\\n",\r
                    this.personFullName, this.scholarshipAllowanceInr);\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Collaborator Class: AcademyAuditor (Same Package, Non-Subclass)\r
    // ------------------------------------------------------------------------\r
    public static class AcademyAuditor {\r
        public void auditPerson(AcademyPerson person) {\r
            System.out.println("  [Inside AcademyAuditor (Same Package, Non-Subclass)]:");\r
            // 1. private -> NOT ACCESSIBLE\r
            // 2. default -> ACCESSIBLE (same package)\r
            // 3. protected -> ACCESSIBLE (same package)\r
            // 4. public -> ACCESSIBLE (everywhere)\r
\r
            System.out.println("    &check; default   person.campusLocation         : " + person.campusLocation);\r
            System.out.println("    &check; protected person.scholarshipAllowanceInr: ₹" + person.scholarshipAllowanceInr);\r
            System.out.println("    &check; public    person.personFullName         : " + person.personFullName);\r
            System.out.println("    &cross; private   person.nationalIdentityNumber : [BLOCKED - Private to AcademyPerson]");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Demonstrations of All 4 Access Modifiers\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: THE 4 ACCESS MODIFIERS (private, default, protected, public)");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Printing the 4x4 Access Matrix\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> THE COMPLETE JAVA ACCESS MODIFIER MATRIX:");\r
        System.out.println("  +-----------------+------------+--------------+------------------+-------+");\r
        System.out.println("  | Modifier        | Same Class | Same Package | Subclass (Diff)  | World |");\r
        System.out.println("  +-----------------+------------+--------------+------------------+-------+");\r
        System.out.println("  | private         |    YES     |      NO      |        NO        |  NO   |");\r
        System.out.println("  | default (none)  |    YES     |     YES      |        NO        |  NO   |");\r
        System.out.println("  | protected       |    YES     |     YES      |       YES        |  NO   |");\r
        System.out.println("  | public          |    YES     |     YES      |       YES        |  YES  |");\r
        System.out.println("  +-----------------+------------+--------------+------------------+-------+\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Accessing Members from Within the Declaring Class\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 2: Self-Access Inside Declaring Class (AcademyPerson)");\r
        AcademyPerson person = new AcademyPerson();\r
        person.displaySelfInspection();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Accessing Members from a Subclass (AcademyTrainee)\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Inherited Access Inside Subclass (AcademyTrainee)");\r
        AcademyTrainee swadeepTrainee = new AcademyTrainee();\r
        swadeepTrainee.displayInheritedAccess();\r
        swadeepTrainee.applyMeritIncrement(3500.00);\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Accessing Members from a Neighbor Class in Same Package\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Package-Private & Protected Access from Same-Package Auditor");\r
        AcademyAuditor auditor = new AcademyAuditor();\r
        auditor.auditPerson(person);\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 5: Best Practices Rule Summary\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 5: Access Modifier Selection Hierarchy (Sukanta Hui's Law)");\r
        System.out.println("  1. Default to 'private' for all instance fields and helper methods.");\r
        System.out.println("  2. Use 'package-private' for package-internal collaboration classes.");\r
        System.out.println("  3. Use 'protected' ONLY for methods designed to be overridden by subclasses.");\r
        System.out.println("  4. Use 'public' for official API contracts and stable domain services.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" ACCESS MODIFIERS OVERVIEW DEMONSTRATION COMPLETE - BARRACKPORE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 12: Access Modifiers Overview: private, default, protected, public\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4-TIER ACCESS MATRIX:\r
   -----------------------------------------------------------------------------\r
   MODIFIER          SAME CLASS | SAME PACKAGE | SUBCLASS (DIFF PKG) | WORLD\r
   -----------------------------------------------------------------------------\r
   private              YES            NO                 NO            NO\r
   default (none)       YES           YES                 NO            NO\r
   protected            YES           YES                YES            NO\r
   public               YES           YES                YES           YES\r
   -----------------------------------------------------------------------------\r
\r
2. SCOPE DEFINITIONS:\r
   - \`private\`          : Only visible inside the declaring class.\r
   - \`default\` (Package): Visible to all classes in the same package directory.\r
   - \`protected\`        : Package-private + Subclasses anywhere via inheritance.\r
   - \`public\`           : Globally visible from any class (subject to JPMS).\r
\r
3. TOP-LEVEL VS MEMBER ACCESS RULES:\r
   - Top-Level Classes  : Can ONLY be \`public\` or \`package-private\` (no modifier).\r
   - Member Members     : Can have any of the 4 modifiers.\r
   - Local Variables    : CANNOT have access modifiers (block-scoped only).\r
   - Interface Members  : Fields are \`public static final\`; methods \`public abstract\`.\r
\r
4. METHOD OVERRIDING ACCESS RULE:\r
   - An overriding method CANNOT reduce visibility (can stay same or widen).\r
   - Example: A \`protected\` parent method can be overridden as \`protected\` or \`public\`,\r
     but NEVER as \`default\` or \`private\`.\r
\r
5. SUKANTA HUI'S CONCENTRIC RINGS ANALOGY:\r
   - Ring 1 (Private)  : Your Inner Sanctum (Private fields & algorithms).\r
   - Ring 2 (Default)  : Your Local Village (Package collaborator classes).\r
   - Ring 3 (Protected): Your Extended Family (Subclass inheritance hooks).\r
   - Ring 4 (Public)   : The Global Highway (Official public API contracts).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"What are the 4 Access Modifiers in Java and their visibility order from most restrictive to least restrictive?",shortAnswer:"1. private (most restrictive) -> 2. default (package-private) -> 3. protected -> 4. public (least restrictive).",explanation:"Java controls member visibility through these 4 tiers. Private restricts to the same class; default extends to the same package; protected extends to subclasses across packages; public extends globally.",hint:"Private -> Default -> Protected -> Public.",level:"Beginner",codeExample:`private int a; // Class
int b;         // Package
protected int c; // Package + Subclass
public int d;    // World`},{question:"What is 'Package-Private' (Default) access in Java?",shortAnswer:"The access level applied when no modifier keyword is written; members are accessible to all classes in the same package.",explanation:"There is no keyword named 'default' for access control (except in interfaces for default methods). Leaving a member without a modifier gives it package-private access, making it visible to all classes in that exact package directory.",hint:"No modifier specified = visible in the same package.",level:"Beginner",codeExample:"class PackageHelper { void assist() {} } // Both class and method are package-private"},{question:"What is the difference between 'default' (package-private) and 'protected' access?",shortAnswer:"'protected' allows subclasses in DIFFERENT packages to access the member via inheritance; 'default' does NOT allow cross-package subclass access.",explanation:"Both modifiers allow full access within the same package. However, if a subclass extends the parent from another package, it can access 'protected' parent members but is completely blocked from 'default' parent members.",hint:"Protected crosses package boundaries for subclasses.",level:"Intermediate",codeExample:`// Package A:
public class Parent { protected void hook() {} void internal() {} }
// Package B:
public class Child extends Parent { void test() { hook(); /* internal() is illegal! */ } }`},{question:"Can a top-level (outer) class in Java be declared 'private' or 'protected'?",shortAnswer:"No. Top-level classes can only be 'public' or package-private (no modifier).",explanation:"A top-level class cannot be 'private' because it would be unusable by any other file, nor 'protected' because package-level scoping already suffices. Only nested/inner classes can be private or protected.",hint:"Top-level classes have only 2 choices: public or default.",level:"Beginner",codeExample:`// Compile Error: private class MyClass {}
// Valid: public class MyClass {} or class MyClass {}`},{question:"How does a subclass in another package access a 'protected' member of its superclass?",shortAnswer:"Only through inheritance ('this.member' or 'super.member') or on references of the subclass's own type, NOT on a raw parent instance.",explanation:"Under JLS §6.6.2, a subclass in a different package cannot write 'Parent p = new Parent(); p.protectedField;' because it cannot access protected members on instances of the parent class directly, only on instances of its own subtype.",hint:"Protected access across packages requires subclass context.",level:"Advanced",codeExample:`class Sub extends Super {
    void test() {
        this.protectedMethod(); // Valid!
        // new Super().protectedMethod(); // Compile Error in different package!
    }
}`},{question:"What are the access modifier rules when overriding a method in a subclass?",shortAnswer:"The overriding method CANNOT reduce visibility (it must have the same or wider access modifier).",explanation:"If a parent method is 'protected', the child can make it 'protected' or 'public', but NOT 'default' or 'private'. Reducing visibility violates the Liskov Substitution Principle and causes a compile error ('attempting to assign weaker access privileges').",hint:"Visibility can stay the same or widen, never narrow.",level:"Intermediate",codeExample:`class Parent { protected void serve() {} }
class Child extends Parent { public void serve() {} } // Valid widening!`},{question:"What is the access level of members declared inside an Interface?",shortAnswer:"Fields are implicitly 'public static final'; methods are implicitly 'public abstract' (unless marked default, static, or private).",explanation:"Every field in an interface is an immutable public constant. Methods without bodies are implicitly public abstract. Java 9 allows private methods in interfaces for helper routines.",hint:"Interfaces are public contracts by default.",level:"Beginner",codeExample:`interface Worker {
    int MAX = 10; // public static final
    void work();  // public abstract
}`},{question:"Can a constructor have a different access modifier than its enclosing class?",shortAnswer:"Yes! A public class can have private, protected, or package-private constructors.",explanation:"For example, Singleton classes are 'public class Singleton' with a 'private Singleton()' constructor. Utility classes have private constructors to prevent instantiation.",hint:"Constructor access controls who can instantiate the class.",level:"Intermediate",codeExample:`public class MathUtils {
    private MathUtils() {} // Prevents instantiation while class is public
}`},{question:"What is the default access modifier of local variables declared inside a method?",shortAnswer:"Local variables have NO access modifiers (not even default); they are scoped strictly to the enclosing method block.",explanation:"Access modifiers (private, protected, public) cannot be applied to local variables. The only modifier allowed on a local variable is 'final'.",hint:"Local variables are block-scoped, not class members.",level:"Beginner",codeExample:`void test() {
    // public int x = 10; // Compile Error: illegal start of expression
    final int y = 20;     // Valid!
}`},{question:"How does the Java 9+ Module System (JPMS) restrict 'public' classes?",shortAnswer:"A public class is only accessible outside its module if its package is explicitly 'exported' in module-info.java.",explanation:"Before Java 9, 'public' meant universally accessible. With JPMS, if a package is not exported, its public classes are treated as internal and cannot be accessed by other modules.",hint:"Module boundaries supercede public access modifiers.",level:"Advanced",codeExample:`// module-info.java:
module academy.core {
    exports com.academy.api; // com.academy.internal remains hidden!
}`},{question:"Why should fields in a public API class NEVER be declared 'protected' unless designed for inheritance?",shortAnswer:"Because 'protected' exposes fields to anyone in the same package and tightly couples subclasses to internal field representations.",explanation:"Joshua Bloch (Effective Java Item 15) warns that 'protected' is part of the exported API and must be supported forever. Changing a protected field breaks external subclasses.",hint:"Protected fields become permanent public commitments.",level:"Intermediate",codeExample:`// BAD: protected double balance;
// GOOD: private double balance; protected double getBalance() { return balance; }`},{question:"Can two classes in DIFFERENT sub-packages (e.g. 'com.app.core' and 'com.app.core.util') access each other's default (package-private) members?",shortAnswer:"No! Sub-packages in Java are completely independent packages with zero inheritance of package-private access.",explanation:"In Java, package hierarchy is purely visual/conceptual. 'com.app.core' and 'com.app.core.util' are treated as two distinct, unrelated packages by the compiler and JVM.",hint:"Sub-packages do not inherit package-private visibility.",level:"Intermediate",codeExample:"// com.app.core.A cannot access package-private members in com.app.core.util.B"},{question:"What is 'Subsystem Encapsulation' and which access modifier is used for internal collaborator classes?",shortAnswer:"Package-private (default) access; it allows classes within a package to collaborate freely while presenting only 1 public facade class to the outside world.",explanation:"By making internal parsers, validators, and handlers package-private, outside packages only see the single public Service class, keeping the public API footprint minimal.",hint:"Package-private classes form internal subsystem machinery.",level:"Intermediate",codeExample:`class InternalParser {} // Package-private
public class PublicService { InternalParser p; } // Public Facade`},{question:"Can an abstract class have a 'private' abstract method?",shortAnswer:"No! Abstract methods MUST be implemented by subclasses, but private methods cannot be inherited or overridden.",explanation:"Combining 'private' with 'abstract' creates a logical contradiction that causes a compile-time error: 'illegal combination of modifiers: abstract and private'.",hint:"Abstract demands overriding; private forbids overriding.",level:"Beginner",codeExample:`// Compile Error:
// abstract class Demo { private abstract void compute(); }`},{question:"Can an abstract class have 'private' concrete methods?",shortAnswer:"Yes! Abstract classes can contain private concrete helper methods used by their own implemented methods.",explanation:"Private concrete methods in abstract classes provide shared internal utilities that are not exposed to child classes.",hint:"Concrete private helpers in abstract classes are completely legal.",level:"Beginner",codeExample:`abstract class BaseDao {
    private void logSql(String q) { ... }
    public void execute(String q) { logSql(q); doExec(q); }
}`},{question:"What is the access level of an enum constant?",shortAnswer:"Enum constants are implicitly 'public static final'.",explanation:"Every enum constant (e.g. 'Status.ACTIVE') is a globally accessible, immutable instance of the enum class.",hint:"Enum constants are public static final members.",level:"Beginner",codeExample:"enum Level { BEGINNER, ADVANCED } // Both are public static final Level"},{question:"How does the 'protected' modifier enable the 'Template Method Pattern' in OOP?",shortAnswer:"The parent class defines a public template workflow method that calls protected hook methods for subclasses to customize.",explanation:"In the Template Method pattern, the overall algorithm is final/public, while individual steps ('stepA()', 'stepB()') are declared protected so subclasses can override them without exposing them to general callers.",hint:"Protected hooks inside a public template method.",level:"Advanced",codeExample:`public abstract class ReportGenerator {
    public final void generate() { readData(); format(); }
    protected abstract void format(); // Protected hook
}`},{question:"What happens if a class attempts to import a package-private class from another package?",shortAnswer:"A compile-time error occurs: '<ClassName> is not public in <package>; cannot be accessed from outside package'.",explanation:"Package-private classes cannot be imported or referenced by classes located in any other package directory.",hint:"Package-private classes cannot be imported across packages.",level:"Beginner",codeExample:"// Compile Error: import com.other.PackagePrivateClass;"},{question:"Can an overridden method in a subclass throw MORE checked exceptions if its access modifier is widened?",shortAnswer:"No! Widening access does not allow throwing new or broader checked exceptions.",explanation:"Access modifier rules (visibility can stay same or widen) and exception rules (checked exceptions can stay same or narrow) are independent constraints of method overriding.",hint:"Visibility can widen, but checked exceptions must never widen.",level:"Intermediate",codeExample:`class Parent { void run() throws IOException {} }
class Child extends Parent { public void run() {} } // Valid: widened access, narrowed exceptions`},{question:"Why should utility classes (e.g. StringUtils, MathHelpers) have a 'private' constructor?",shortAnswer:"To prevent accidental instantiation with 'new' and suppress the compiler-generated default public constructor.",explanation:"If no constructor is declared, javac automatically generates a public no-arg constructor ('public UtilityClass()'). Declaring a private constructor suppresses this default.",hint:"Suppress compiler default constructor to enforce static-only usage.",level:"Beginner",codeExample:`public final class ValidationUtils {
    private ValidationUtils() { throw new AssertionError("No instances!"); }
}`},{question:"Can an inner class declared inside a method (Local Class) have access modifiers?",shortAnswer:"No! Local inner classes cannot have public, protected, private, or static modifiers.",explanation:"Local classes are scoped purely within the executing method block, just like local variables, and cannot declare access modifiers.",hint:"Local classes have no access modifiers.",level:"Intermediate",codeExample:`void process() {
    class LocalHelper {} // Valid: no access modifier allowed
}`},{question:"What is the visibility of a static nested class declared 'private' inside a public class?",shortAnswer:"Visible only within the enclosing outer class and its inner nestmates.",explanation:"Private static nested classes are commonly used for internal data structures (e.g. 'private static class Node<E>' in LinkedList) that external callers should never see.",hint:"Internal data structure hidden inside outer class.",level:"Intermediate",codeExample:`public class CustomList {
    private static class Node { int data; Node next; }
}`},{question:"How does the 'protected' modifier interact with Object's 'clone()' and 'finalize()' methods?",shortAnswer:"Object.clone() is protected in java.lang.Object; a class must override it as 'public' and implement Cloneable to allow external cloning.",explanation:"Because clone() is protected in Object, code in unrelated packages cannot call 'student.clone()' unless the Student class explicitly overrides clone() with public visibility.",hint:"clone() is protected in java.lang.Object.",level:"Advanced",codeExample:`public class Student implements Cloneable {
    @Override
    public Object clone() throws CloneNotSupportedException { return super.clone(); }
}`},{question:"Can a subclass make a public method 'protected'?",shortAnswer:"No! A subclass cannot reduce the visibility of an inherited method; overriding a public method as protected causes a compile error.",explanation:"Under polymorphic dispatch, any code holding a reference to the parent expects to call public methods. Narrowing visibility breaks polymorphic substitution.",hint:"Never reduce inherited visibility.",level:"Beginner",codeExample:"// Compile Error: 'attempting to assign weaker access privileges; was public'"},{question:"What is the access level of a default constructor generated by the Java compiler?",shortAnswer:"The default constructor receives the exact same access modifier as its enclosing class.",explanation:"If the class is declared 'public', the generated default constructor is 'public'. If the class is package-private, the generated default constructor is package-private.",hint:"Matches the visibility of the class declaration.",level:"Intermediate",codeExample:"// 'public class Student {}' -> Compiler generates: 'public Student() {}'"},{question:"What is 'Friendly' access in legacy Java terminology?",shortAnswer:"An informal historical term for package-private (default) access.",explanation:"In early Java 1.0 documentation, package-private was informally called 'friendly access' because classes in the same package were considered friends that could see each other's default members.",hint:"Synonym for package-private access.",level:"Beginner",codeExample:"// 'Friendly' = Package-private = No modifier"},{question:"How do access modifiers affect Java Reflection performance and security?",shortAnswer:"Access modifiers are verified by the JVM security manager and bytecode verifier; reflective bypasses require SecurityPermission and add invocation overhead.",explanation:"Reflective invocations on non-public members require security checks that can be blocked in secure sandbox environments and disable certain JIT inlining optimizations.",hint:"Public access allows direct, fast JIT execution without reflective checks.",level:"Advanced",codeExample:"// JIT optimizes direct public/protected invocations with zero security check overhead"},{question:"Can a record in Java 16+ have private constructors or private static methods?",shortAnswer:"Yes! Records can declare private canonical/custom constructors and private static helper methods.",explanation:"Records support private static helper methods and private constructors when factory methods or builder patterns are preferred.",hint:"Records allow private constructors and static helpers.",level:"Intermediate",codeExample:`public record Point(int x, int y) {
    private Point { /* Validation */ }
    public static Point of(int x, int y) { return new Point(x, y); }
}`},{question:"What is the 'Principle of Least Privilege' in choosing access modifiers?",shortAnswer:"Every module, class, and member should be granted the minimum visibility necessary to accomplish its intended function.",explanation:"Always start by declaring fields and helper methods 'private'. Only escalate to package-private if collaborating within the package, protected if designed for extension, and public for exported APIs.",hint:"Start at Private and escalate only when strictly necessary.",level:"Beginner",codeExample:"1. private -> 2. package-private -> 3. protected -> 4. public"},{question:"What is Sukanta Hui's Concentric Circle Hierarchy for Access Modifiers?",shortAnswer:"Visualize 4 concentric rings: Private is the inner sanctum, Default is your local village (package), Protected is your extended family (subclasses), and Public is the global highway.",explanation:"At the Barrackpore academy, Sukanta Hui teaches this mental model to ensure students never hesitate on access control. Keep your inner sanctum guarded, collaborate freely in your village, share heritage with your family, and open only official gates to the highway.",hint:"Inner Sanctum -> Village -> Family -> Highway.",level:"Beginner",codeExample:`// Sukanta Hui's Hierarchy:
// Private (Sanctum) -> Default (Village) -> Protected (Family) -> Public (Highway)`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes expandRings {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.02); opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-rings {
            animation: expandRings 4s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Visibility & Access Control Architecture"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Access Modifiers Overview: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"private"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"default"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"protected"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"public"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete 4-tier visibility architecture of Java: analyzing the full 4x4 access matrix, understanding package boundaries, cross-package subclass inheritance rules with ",e.jsx("code",{className:"text-amber-400 font-mono",children:"protected"}),", method overriding visibility constraints, and applying the Principle of Least Privilege."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," The Complete 4x4 Access Control Matrix"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Java controls member and type visibility across 4 architectural scopes:"}),e.jsx("div",{className:"w-full overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs",children:e.jsxs("table",{className:"w-full text-left border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-sky-400",children:[e.jsx("th",{className:"py-2.5 px-3",children:"Access Modifier"}),e.jsx("th",{className:"py-2.5 px-3 text-center",children:"Same Class"}),e.jsx("th",{className:"py-2.5 px-3 text-center",children:"Same Package"}),e.jsx("th",{className:"py-2.5 px-3 text-center",children:"Subclass (Diff Pkg)"}),e.jsx("th",{className:"py-2.5 px-3 text-center",children:"World (Anywhere)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"py-2.5 px-3 font-bold text-purple-400",children:"private"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"py-2.5 px-3 font-bold text-sky-400",children:"default (package-private)"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"py-2.5 px-3 font-bold text-amber-400",children:"protected"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-rose-400 font-bold",children:"NO"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"py-2.5 px-3 font-bold text-emerald-400",children:"public"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:"YES"})]})]})]})}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-indigo-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-indigo-300",children:"Classroom Case Study (Barrackpore Person & Trainee Hierarchy):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," extended ",e.jsx("code",{className:"text-sky-300 font-mono",children:"AcademyPerson"}),", his subclass gained direct access to ",e.jsx("code",{className:"text-amber-400 font-mono",children:"protected double scholarshipAllowanceInr"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"public String personFullName"}),", but his private national ID remained completely hidden within the parent class."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Concentric Rings of Visibility: From Inner Sanctum to Global Highway"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing Sukanta Hui's 4 concentric rings of Java access control:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 330",className:"w-full h-auto","aria-label":"Concentric Rings of Java Access Modifiers Diagram",children:[e.jsx("rect",{x:"25",y:"25",width:"870",height:"280",rx:"14",fill:"#022c22",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"52",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"RING 4: PUBLIC (The Global Highway)"}),e.jsx("text",{x:"50",y:"68",fill:"#a7f3d0",fontSize:"9",children:"Accessible by all classes across all packages & modules"}),e.jsx("rect",{x:"60",y:"80",width:"800",height:"210",rx:"12",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"105",fill:"#fde68a",fontSize:"12",fontWeight:"bold",children:"RING 3: PROTECTED (The Extended Family)"}),e.jsx("text",{x:"80",y:"120",fill:"#fef3c7",fontSize:"9",children:"Accessible in same package + all subclasses across different packages"}),e.jsx("rect",{x:"100",y:"135",width:"720",height:"140",rx:"10",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"120",y:"158",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"RING 2: DEFAULT / PACKAGE-PRIVATE (The Village)"}),e.jsx("text",{x:"120",y:"172",fill:"#bae6fd",fontSize:"9",children:"Accessible only to classes residing within the exact same package"}),e.jsx("rect",{x:"140",y:"188",width:"640",height:"75",rx:"8",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"212",fill:"#f3e8ff",fontSize:"12",fontWeight:"bold",children:"RING 1: PRIVATE (The Inner Sanctum)"}),e.jsx("text",{x:"160",y:"228",fill:"#e9d5ff",fontSize:"9",children:"Strictly confined to the enclosing declaring class and its nestmates"}),e.jsx("text",{x:"160",y:"246",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"&check; Foundation of True OOP Encapsulation & Data Hiding"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"AccessModifiersOverviewDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The code below demonstrates all 4 access levels inside the declaring class, inherited subclass access across package boundaries, and same-package collaborator access:"}),e.jsx(t,{fileName:"AccessModifiersOverviewDemo.java",code:n})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Overriding Visibility Rule"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["When overriding a method in a subclass, visibility can stay the same or widen (e.g. ",e.jsx("code",{className:"text-sky-300 font-mono",children:"protected → public"}),"), but can NEVER be narrowed (",e.jsx("code",{className:"text-rose-400 font-mono",children:"public → protected"})," causes a compile error)."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Top-Level Class Constraints"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Top-level outer classes can only be ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"public"})," or ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"package-private"})," (no modifier). They can never be ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"})," or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"protected"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Sub-Packages Are Independent"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In Java, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"com.app.core"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"com.app.core.util"})," are treated as two distinct, unrelated packages. They do NOT share package-private access."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Principle of Least Privilege"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Always start by declaring members ",e.jsx("code",{className:"text-amber-300 font-mono",children:"private"}),". Elevate to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"package-private"})," for subsystem collaboration, ",e.jsx("code",{className:"text-amber-300 font-mono",children:"protected"})," for template hooks, and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"public"})," only for stable API contracts."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Declaring Protected Fields in Public Classes"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Declaring fields ",e.jsx("code",{className:"text-rose-300 font-mono",children:"protected"})," exposes them to all classes in the same package and creates permanent subclass dependencies that cannot be refactored later."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// DANGEROUS: Protected field locks implementation
public class Parent {
    protected double balance; // Hard to refactor later!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Private Fields with Protected Accessors"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Keep fields private and provide ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"protected"})," getter/setter methods for subclasses, preserving encapsulation and safe refactoring."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Private field with protected accessor
public class Parent {
    private double balance;
    protected double getBalance() { return balance; }
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 p-6 md:p-8 rounded-2xl border border-indigo-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why does Java forbid private abstract methods?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"abstract"})," keyword is an explicit command demanding that a subclass ",e.jsx("strong",{children:"must"})," provide an implementation. However, the ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"private"})," keyword dictates that the method is strictly invisible to all subclasses! Combining them creates an unresolvable architectural paradox: a subclass would be forced to override a method it is not permitted to see! Hence, the compiler rejects ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private abstract"})," on sight."]})]}),e.jsx(r,{quote:"Think of Java's access modifiers as concentric rings of trust: Private is your inner sanctum, Default is your local village, Protected is your extended family, and Public is the global highway. Guard your sanctum and open only official gates to the highway.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(a,{questions:c})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(s,{content:i,fileName:"Topic12_Access_Modifiers_Overview_Note.txt"})]})]})}export{x as default};

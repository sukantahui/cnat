import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 11: Data Hiding: Restricting Direct Field Access using 'private' Modifier\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Data Hiding & The 'private' Security Wall\r
 * ----------------------------------------------------------------------------\r
 * 1. What is Data Hiding?\r
 *    - The specific Object-Oriented mechanism of making internal fields and\r
 *      helper methods inaccessible to any external class using the \`private\` modifier.\r
 *    - It guarantees that no outside class can read or overwrite internal data\r
 *      directly, enforcing that all interaction flows through authorized public methods.\r
 *\r
 * 2. How the 'private' Modifier Works:\r
 *    - Compile-Time Enforcement: javac blocks any code attempting \`object.privateField\`\r
 *      with the error: "fieldName has private access in ClassName".\r
 *    - Bytecode Enforcement: The JVM verifier checks access flags before executing\r
 *      \`getfield\`, \`putfield\`, and \`invokevirtual\` instructions.\r
 *\r
 * 3. What Should Be Hidden?\r
 *    - Sensitive Domain Data : Passwords, PINs, encryption keys, raw tax algorithms.\r
 *    - Internal Implementation: Pointers, raw arrays, transient state caches.\r
 *    - Helper / Utility Code : Internal validation routines and sub-computations.\r
 *\r
 * 4. Java 11+ Nestmates (JEP 181):\r
 *    - Allows nested inner classes and their outer enclosing class to share\r
 *      private members natively in bytecode without generating synthetic bridge methods.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.nio.charset.StandardCharsets;\r
import java.security.MessageDigest;\r
import java.security.NoSuchAlgorithmException;\r
import java.util.Objects;\r
\r
public class DataHidingPrivateModifierDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: SecureStudentCredentialVault (Demonstrating Data Hiding)\r
    // ------------------------------------------------------------------------\r
    public static class SecureStudentCredentialVault {\r
\r
        // --- Hidden Private Fields (Completely Inaccessible from Outside) ---\r
        private final int studentId;\r
        private final String studentName;\r
        private final String campusBranch;\r
        private String rawEmailAddress;\r
        private String saltedPasswordHash; // Hidden cryptographic hash (NEVER store plaintext!)\r
        private int failedLoginAttemptsCount = 0;\r
        private boolean isAccountLocked = false;\r
\r
        // Constructor (Private validation of secret credentials)\r
        public SecureStudentCredentialVault(int studentId, String studentName, String campusBranch, String email, String plainPassword) {\r
            if (studentId <= 0) throw new IllegalArgumentException("Student ID must be positive.");\r
            this.studentId = studentId;\r
            this.studentName = Objects.requireNonNull(studentName, "Name required").trim();\r
            this.campusBranch = campusBranch;\r
            this.rawEmailAddress = Objects.requireNonNull(email, "Email required").trim().toLowerCase();\r
\r
            // Hash password internally before storing\r
            this.saltedPasswordHash = computeSha256Hash(plainPassword);\r
        }\r
\r
        // --- Public Authorized Behavior: Authenticate Student ---\r
        public boolean authenticate(String enteredPassword) {\r
            if (isAccountLocked) {\r
                System.out.printf("  [AUTH FAILED] Account for %s is LOCKED due to excessive failed attempts.\\n", studentName);\r
                return false;\r
            }\r
\r
            String enteredHash = computeSha256Hash(enteredPassword);\r
            if (this.saltedPasswordHash.equals(enteredHash)) {\r
                this.failedLoginAttemptsCount = 0; // Reset failed counter\r
                System.out.printf("  [AUTH SUCCESS] %s logged in successfully to %s portal.\\n", studentName, campusBranch);\r
                return true;\r
            } else {\r
                this.failedLoginAttemptsCount++;\r
                System.out.printf("  [AUTH FAILED] Invalid password for %s! Attempt %d of 3.\\n",\r
                        studentName, this.failedLoginAttemptsCount);\r
                if (this.failedLoginAttemptsCount >= 3) {\r
                    this.isAccountLocked = true;\r
                    System.out.printf("  [SECURITY LOCK] Account for %s has been auto-locked!\\n", studentName);\r
                }\r
                return false;\r
            }\r
        }\r
\r
        // --- Public Behavior: Reset Password (Requires Old Password Verification) ---\r
        public boolean changePassword(String oldPassword, String newPassword) {\r
            if (!this.saltedPasswordHash.equals(computeSha256Hash(oldPassword))) {\r
                System.out.println("  [Password Change REJECTED] Current password verification failed.");\r
                return false;\r
            }\r
            if (newPassword == null || newPassword.length() < 8) {\r
                System.out.println("  [Password Change REJECTED] New password must be at least 8 characters.");\r
                return false;\r
            }\r
            this.saltedPasswordHash = computeSha256Hash(newPassword);\r
            System.out.println("  [Password Change SUCCESS] Password securely updated for: " + studentName);\r
            return true;\r
        }\r
\r
        // --- Private Internal Helper Method (Hidden Cryptographic Algorithm) ---\r
        private String computeSha256Hash(String input) {\r
            if (input == null) return "";\r
            try {\r
                MessageDigest md = MessageDigest.getInstance("SHA-256");\r
                byte[] hashBytes = md.digest(input.getBytes(StandardCharsets.UTF_8));\r
                StringBuilder hexString = new StringBuilder();\r
                for (byte b : hashBytes) {\r
                    hexString.append(String.format("%02x", b));\r
                }\r
                return hexString.toString();\r
            } catch (NoSuchAlgorithmException e) {\r
                throw new RuntimeException("SHA-256 algorithm missing", e);\r
            }\r
        }\r
\r
        // --- Controlled Public Accessors (Expose only safe metadata) ---\r
        public int getStudentId() { return studentId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCampusBranch() { return campusBranch; }\r
        public boolean isAccountLocked() { return isAccountLocked; }\r
\r
        // Masked email accessor (e.g. s***p@domain.com) to prevent data leakage\r
        public String getMaskedEmail() {\r
            int atIndex = rawEmailAddress.indexOf('@');\r
            if (atIndex <= 2) return "***" + rawEmailAddress.substring(atIndex);\r
            return rawEmailAddress.charAt(0) + "***" + rawEmailAddress.charAt(atIndex - 1) + rawEmailAddress.substring(atIndex);\r
        }\r
\r
        public void printPublicProfile() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | Student ID     : STU-%05d                                |\\n", studentId);\r
            System.out.printf("  | Student Name   : %-42s |\\n", studentName);\r
            System.out.printf("  | Campus Branch  : %-42s |\\n", campusBranch);\r
            System.out.printf("  | Masked Email   : %-42s |\\n", getMaskedEmail());\r
            System.out.printf("  | Account Status : %-42s |\\n", (isAccountLocked ? "LOCKED" : "ACTIVE"));\r
            System.out.println("  | Password Hash  : [PROTECTED & HIDDEN BEHIND PRIVATE MODIFIER] |");\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Demonstrating Data Hiding Security & Access Control\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: DATA HIDING & THE 'private' ACCESS MODIFIER");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Instantiating Secure Vault with Hidden Private Data\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Creating Vault for Swadeep Paul (Barrackpore Lab)");\r
        SecureStudentCredentialVault swadeepVault = new SecureStudentCredentialVault(\r
                101,\r
                "Swadeep Paul",\r
                "Barrackpore Lab",\r
                "swadeep.paul@barrackpore-academy.edu",\r
                "Swadeep@Secret2026"\r
        );\r
\r
        swadeepVault.printPublicProfile();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Attempting Direct Field Access (Compile-Time Protection)\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 2: The Compile-Time Defense of the 'private' Modifier");\r
        System.out.println("Note: The following operations are IMPOSSIBLE in Java source code:");\r
        System.out.println("  // swadeepVault.saltedPasswordHash = \\"hacked\\"; // COMPILE ERROR: saltedPasswordHash has private access");\r
        System.out.println("  // swadeepVault.failedLoginAttemptsCount = 0;   // COMPILE ERROR: failedLoginAttemptsCount has private access");\r
        System.out.println("  // swadeepVault.computeSha256Hash(\\"...\\");       // COMPILE ERROR: computeSha256Hash has private access");\r
        System.out.println("Result: Internal secrets and algorithms are 100% hidden behind the class boundary!");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Authorized Interaction through Public Behavioral Methods\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Executing Authentication Flow via Public Methods");\r
\r
        System.out.println("\\nAttempt 1: Entering incorrect password:");\r
        swadeepVault.authenticate("WrongPassword123");\r
\r
        System.out.println("\\nAttempt 2: Entering another incorrect password:");\r
        swadeepVault.authenticate("GuessPassword456");\r
\r
        System.out.println("\\nAttempt 3: Entering correct password before lockout:");\r
        swadeepVault.authenticate("Swadeep@Secret2026");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Password Change with Invariant Verification\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Updating Secret State via Guarded Public Method");\r
        swadeepVault.changePassword("Swadeep@Secret2026", "Swadeep@NewSuperSecure2027");\r
\r
        System.out.println("\\nVerifying login with new updated password:");\r
        swadeepVault.authenticate("Swadeep@NewSuperSecure2027");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 5: Simulating 3 Failed Logins to Trigger Security Lockout\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 5: Simulating Brute-Force Lockout Invariant");\r
        swadeepVault.authenticate("Hack1");\r
        swadeepVault.authenticate("Hack2");\r
        swadeepVault.authenticate("Hack3"); // Hits threshold -> auto-locks!\r
\r
        System.out.println("\\nAttempting login after lockout:");\r
        swadeepVault.authenticate("Swadeep@NewSuperSecure2027"); // Blocked!\r
\r
        swadeepVault.printPublicProfile();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" DATA HIDING & 'private' MODIFIER DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 11: Data Hiding: Restricting Direct Field Access using 'private' Modifier\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS DATA HIDING?\r
   - The Object-Oriented mechanism of making class fields and helper methods\r
     inaccessible to external classes using the \`private\` access modifier.\r
   - Restricts data access strictly to the class that declared it.\r
   - Enforces that all interaction occurs through validated public methods.\r
\r
2. THE 'private' ACCESS MODIFIER:\r
   -----------------------------------------------------------------------------\r
   Scope                : ONLY within the declaring class (and nested Nestmates).\r
   Compile-Time Rule    : \`object.privateField\` throws compile error outside class:\r
                          "<field> has private access in <Class>".\r
   Bytecode Instruction : Private methods use \`invokespecial\` (early static binding).\r
   Subclass Inheritance : Private members are NOT inherited and cannot be overridden.\r
   -----------------------------------------------------------------------------\r
\r
3. WHAT MUST BE HIDDEN?\r
   - Sensitive Credentials: Passwords (salted hashes), PINs, encryption keys.\r
   - Internal Implementation: Pointers, raw arrays, transient state caches.\r
   - Helper Routines: Cryptographic hashing, internal validation functions.\r
\r
4. MASKED ACCESSORS & DEFENSIVE PRIVACY:\r
   - Provide accessors that reveal only masked / safe data (e.g. \`s***l@domain.com\`).\r
   - Never return raw mutable objects (e.g. \`Date\`, arrays) without defensive copying.\r
   - Return unmodifiable collection views (\`Collections.unmodifiableList\`).\r
\r
5. JAVA 11+ NESTMATES (JEP 181):\r
   - Outer classes and inner classes share private access natively in bytecode\r
     without synthetic bridge methods (\`access$000\`).\r
\r
6. SUKANTA HUI'S VAULT PRINCIPLE:\r
   - "Lock your raw state in an underground private vault; expose a fortified\r
      teller window of validated public methods to the outside world."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is 'Data Hiding' in Object-Oriented Programming?",shortAnswer:"The technique of restricting direct external access to an object's internal fields by declaring them with the 'private' modifier.",explanation:"Data Hiding ensures that internal state variables and auxiliary algorithms can only be accessed or modified by code residing within the same class, shielding data from unauthorized tampering.",hint:"Concealing internal variables behind the private modifier.",level:"Beginner",codeExample:`public class Vault {
    private String passwordHash; // Data hidden from external access
}`},{question:"What error does the Java compiler generate if external code attempts to access a private field?",shortAnswer:"'<fieldName> has private access in <ClassName>' compile-time error.",explanation:"Java enforces access modifiers strictly at compile-time. If Class B writes 'vault.saltedPasswordHash', javac halts compilation with an access violation error.",hint:"Compile-time access control enforcement.",level:"Beginner",codeExample:"// Compile Error: 'saltedPasswordHash has private access in SecureStudentCredentialVault'"},{question:"Why should sensitive data like passwords or PINs NEVER be stored in public or package-private fields?",shortAnswer:"Because any class in the classpath could inspect, print, or overwrite the credentials in cleartext without authentication.",explanation:"Hiding credentials behind private fields and storing only cryptographic hashes (e.g. SHA-256) ensures that even memory inspectors or external callers cannot extract plaintext secrets.",hint:"Confidentiality and tamper-proofing of critical credentials.",level:"Beginner",codeExample:"private String saltedPasswordHash; // Stored securely, never exposed via getter"},{question:"What are 'Nestmates' in Java 11+ (JEP 181) and how do they relate to private access?",shortAnswer:"A JVM feature that allows nested inner classes and their enclosing outer class to access each other's private members directly without synthetic compiler bridge methods.",explanation:"Prior to Java 11, javac had to generate package-private synthetic accessor methods ('access$000') so inner classes could touch outer private fields. JEP 181 added 'NestHost' and 'NestMembers' bytecode attributes for native private sharing.",hint:"Native JVM support for nested class private member access.",level:"Advanced",codeExample:`class Outer {
    private int secret;
    class Inner {
        void read() { int x = secret; } // Native Nestmate access in Java 11+
    }
}`},{question:"Can an instance of a class access the private fields of ANOTHER instance of the SAME class?",shortAnswer:"Yes! In Java, access control is class-based, not instance-based.",explanation:"Any method in Class A can directly access private fields of any Class A object ('otherInstance.privateField'). This allows implementing equals(), compareTo(), and copy constructors efficiently.",hint:"Encapsulation boundaries are at the Class level, not individual objects.",level:"Intermediate",codeExample:`public boolean isSameVault(SecureStudentCredentialVault other) {
    return this.studentId == other.studentId; // Directly reads other's private field!
}`},{question:"Can private methods in a class be overridden by a subclass?",shortAnswer:"No. Private methods are not inherited and cannot be overridden by subclasses.",explanation:"If a child class declares a method with the exact same name and signature as a parent private method, it is treated as a completely new, unrelated method in the child (Method Hiding/Redeclaration), not polymorphic overriding.",hint:"Private methods are invisible to subclasses.",level:"Intermediate",codeExample:`class Parent { private void log() {} }
class Child extends Parent { void log() {} /* New method, NOT an override */ }`},{question:"What bytecode instruction is generated when invoking a private instance method?",shortAnswer:"'invokespecial'.",explanation:"Because private methods cannot be overridden, dynamic vtable lookup is unnecessary. The compiler emits 'invokespecial' for static/direct early binding.",hint:"Early binding bytecode instruction for private methods.",level:"Advanced",codeExample:"// Bytecode: 12: invokespecial #5 // Method computeSha256Hash:(Ljava/lang/String;)Ljava/lang/String;"},{question:"How does Data Hiding enable API Evolution without breaking clients?",shortAnswer:"Developers can rename, delete, or change the data type of private fields freely as long as the public method signatures remain constant.",explanation:"Because outside callers cannot reference private field names, refactoring an internal variable (e.g. from 'int age' to 'LocalDate birthDate') requires zero changes in external client code.",hint:"Decouples public contract from internal storage implementation.",level:"Intermediate",codeExample:"// Private field refactored from 'int' to 'LocalDate'; getAge() computes Period.between"},{question:"What is 'Data Masking' in accessor methods?",shortAnswer:"Returning an obfuscated or partially redacted representation of a private field (e.g. 's***l@domain.com') to protect user privacy.",explanation:"Data Hiding allows designing accessors that reveal only non-sensitive portions of internal data, preventing PII (Personally Identifiable Information) leaks in UI logs.",hint:"Partial redaction of private fields in accessors.",level:"Beginner",codeExample:'public String getMaskedEmail() { return rawEmail.charAt(0) + "***@" + domain; }'},{question:"Can an interface in Java declare private methods, and starting in which Java version?",shortAnswer:"Yes, starting in Java 9, interfaces can declare private static and private instance methods as internal helper routines for default methods.",explanation:"Java 9 introduced private interface methods so that complex default methods in an interface could share common code without exposing those helper routines to implementing classes or API consumers.",hint:"Java 9 private interface helpers for default methods.",level:"Intermediate",codeExample:`interface PaymentGateway {
    default void pay() { log(); }
    private void log() { System.out.println("Payment logging"); } // Java 9+
}`},{question:"Why can't top-level (outer) classes be marked with the 'private' modifier in Java?",shortAnswer:"A private top-level class would be inaccessible to all other files and the JVM ClassLoader, making it completely unusable.",explanation:"Top-level classes can only be 'public' or package-private (default). Only nested/inner classes can be declared 'private' because their access is scoped inside the enclosing outer class.",hint:"Top-level classes must be accessible to at least their package.",level:"Beginner",codeExample:`// Compile Error: private class MyOuterClass { ... }
// Valid: class MyOuterClass { private class InnerClass { ... } }`},{question:"What is the difference between declaring a constructor 'private' vs declaring class fields 'private'?",shortAnswer:"A private constructor prevents external classes from instantiating the class directly with 'new' (used in Singletons and Utility classes).",explanation:"Private fields hide data; private constructors control or prohibit object instantiation, forcing callers to use static factory methods or singleton instances.",hint:"Instance creation control vs field visibility control.",level:"Intermediate",codeExample:`public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    private Singleton() {} // Disallows 'new Singleton()' from outside
    public static Singleton getInstance() { return INSTANCE; }
}`},{question:"How does Data Hiding prevent Invalid State Transitions in state machines?",shortAnswer:"By keeping the state variable private and exposing transition methods that validate allowed state transitions (e.g. ACTIVE → LOCKED).",explanation:"If the 'status' field were public, outside code could jump from 'CLOSED' back to 'APPROVED'. With a private field, methods like 'lockAccount()' enforce that only valid lifecycle transitions occur.",hint:"State machine guards on private status variables.",level:"Intermediate",codeExample:`public void lockAccount() {
    if (this.status == Status.ACTIVE) this.status = Status.LOCKED;
}`},{question:"Can a subclass access private fields of its parent class using 'super.fieldName'?",shortAnswer:"No. 'super' cannot bypass private access; private fields are strictly hidden from subclasses.",explanation:"Inheritance does not grant access to private parent members. The subclass must interact with inherited private state through the parent's protected or public getter/setter methods.",hint:"Private means private, even to child classes.",level:"Beginner",codeExample:`class Child extends Parent {
    void test() {
        // super.privateField = 10; // Compile Error!
        super.setProtectedField(10); // Valid via accessor
    }
}`},{question:"What is 'Representation Exposure' and how does it compromise Data Hiding?",shortAnswer:"When an object returns a direct reference to a mutable internal private field, allowing the caller to mutate it without the class's knowledge.",explanation:"If a private array or Date field is returned directly from a getter, the caller holds an alias to the private data, effectively destroying data hiding.",hint:"Leaking internal mutable references compromises privacy.",level:"Intermediate",codeExample:`private int[] scores;
public int[] getScores() { return scores.clone(); } // Cloned to prevent representation exposure`},{question:"Why does Joshua Bloch advise 'Minimize the Accessibility of Classes and Members' in Effective Java?",shortAnswer:"Making members as private as possible reduces coupling, prevents accidental misuse, and maximizes freedom to modify implementation details later.",explanation:"Item 15 of Effective Java states that well-designed components hide all implementation details, cleanly separating their API from their implementation. Default to private and only elevate visibility when strictly required.",hint:"Principle of least privilege in access modifier selection.",level:"Intermediate",codeExample:"// Rule: Start with 'private'; elevate to package-private only if collaborating; never use public for fields"},{question:"Can private static variables be accessed by instance methods of the same class?",shortAnswer:"Yes! Instance methods have full access to private static variables.",explanation:"Static variables are shared class-wide, and any method declared within the class boundary (static or instance) can read and write to private static fields.",hint:"Class-wide scope for all methods within the class.",level:"Beginner",codeExample:`private static int totalVaults = 0;
public SecureStudentCredentialVault() { totalVaults++; } // Modifies private static field`},{question:"How does the 'record' construct in Java 16+ enforce Data Hiding?",shortAnswer:"Record components are compiled into private final fields automatically, and can only be read via accessor methods.",explanation:"Records guarantee that data components are immutable private fields, preventing external modification while generating standard accessors automatically.",hint:"Compiler-generated private final component fields in records.",level:"Intermediate",codeExample:"record Student(int roll, String name) {} // 'roll' and 'name' are private final fields in bytecode"},{question:"What is the role of Private Helper Methods in Code Cleanliness?",shortAnswer:"They break down complex public methods into small, readable, reusable subroutines without polluting the class's public API.",explanation:"Internal validation, encryption algorithms, and data parsing logic should be private helpers ('computeSha256Hash()'), keeping the public interface concise and focused.",hint:"Internal decomposition without public interface pollution.",level:"Beginner",codeExample:"private void validateCredentials(String u, String p) { ... }"},{question:"Can Java Reflection (setAccessible) break private data hiding in modern Java 17+?",shortAnswer:"No, unless the JVM is started with specific override flags ('--add-opens'); JPMS strongly encapsulates private internals by default.",explanation:"In Java 17+ (JEP 403 Strongly Encapsulate JDK Internals by Default), calling 'setAccessible(true)' across module boundaries throws an 'InaccessibleObjectException' at runtime.",hint:"Strong encapsulation in modern Java restricts reflective bypasses.",level:"Advanced",codeExample:"// Throws java.lang.reflect.InaccessibleObjectException in Java 17+"},{question:"What is the difference between Data Hiding and Abstraction?",shortAnswer:"Data Hiding focuses on restricting access to internal state (security/safety); Abstraction focuses on hiding complexity and showing only essential features (design).",explanation:"Data Hiding is achieved using access modifiers ('private'); Abstraction is achieved using Abstract Classes and Interfaces.",hint:"Data Hiding hides state; Abstraction hides implementation complexity.",level:"Intermediate",codeExample:`// Abstraction: List interface defines behavior
// Data Hiding: ArrayList's 'elementData' array is private`},{question:"Can an enum in Java have private fields and private constructors?",shortAnswer:"Yes! In fact, all enum constructors in Java are implicitly private and cannot be invoked with 'new'.",explanation:"Enums can declare private fields to hold associated constants (e.g. 'private final int code;'). Their constructors are strictly private to guarantee a fixed set of constants.",hint:"Enum constructors are always private.",level:"Intermediate",codeExample:"enum Campus { BARRACKPORE(101), NAIHATI(102); private final int id; private Campus(int id){ this.id = id; } }"},{question:"What happens if a private field is never read or written inside its enclosing class?",shortAnswer:"The Java compiler generates an 'unused private field' warning, and dead-code elimination in JIT may strip it from execution.",explanation:"Because a private field is completely invisible outside the class, if no method in the class uses it, it is guaranteed to be dead code.",hint:"Compiler detects dead private members with 100% certainty.",level:"Beginner",codeExample:"private int unusedVar; // Warning: The value of the field is not used"},{question:"Why should mutable collection fields never be initialized directly from constructor arguments without defensive copying?",shortAnswer:"Because the caller retains a reference to the passed collection and can add or remove elements, bypassing private field data hiding.",explanation:"If 'this.list = inputList;' is used, any change made by the caller to 'inputList' mutates 'this.list'. Using 'this.list = new ArrayList<>(inputList);' seals the private boundary.",hint:"Defensive copying on constructor input.",level:"Intermediate",codeExample:`public ClassRoster(List<String> students) {
    this.students = new ArrayList<>(students); // Defensive copy breaks external alias
}`},{question:"What is a 'Transient Private Field'?",shortAnswer:"A private field marked with 'transient' that is excluded from serialization while remaining hidden from outside code.",explanation:"Combining 'private' with 'transient' ensures the variable is invisible to outside classes during normal execution AND skipped when writing the object to an ObjectOutputStream.",hint:"Hidden from classes and hidden from serialization streams.",level:"Intermediate",codeExample:"private transient String cachedSessionToken;"},{question:"Can an anonymous inner class access private members of its enclosing class?",shortAnswer:"Yes! Anonymous inner classes have full access to all private fields and methods of their outer enclosing class.",explanation:"Just like named inner classes, anonymous inner classes belong to the outer class's nest and can read and mutate outer private state seamlessly.",hint:"Anonymous classes share outer class scope.",level:"Intermediate",codeExample:"button.addActionListener(e → this.privateField = true);"},{question:"What is the relationship between Data Hiding and the Single Responsibility Principle (SRP)?",shortAnswer:"Data Hiding ensures a class manages its own data exclusively, preventing other classes from meddling in its single designated responsibility.",explanation:"When fields are private, other classes cannot take over data manipulation. The class remains the sole authority over its internal business logic, maintaining high cohesion and SRP.",hint:"Ownership of state defines ownership of responsibility.",level:"Advanced",codeExample:"// Vault handles authentication; Payroll handles salary calculation"},{question:"How does the 'private' modifier support Thread Safety?",shortAnswer:"It guarantees that state changes cannot happen from arbitrary outside threads without passing through synchronized methods or lock blocks.",explanation:"If fields were public, external threads could interleave un-synchronized writes. Hiding data forces all threads through the class's synchronized methods.",hint:"Private state ensures all thread mutations follow the class concurrency policy.",level:"Intermediate",codeExample:`private int counter = 0;
public synchronized void increment() { counter++; }`},{question:"What is the difference between 'package-private' (default) and 'private' visibility?",shortAnswer:"'private' is visible only inside the same class; 'package-private' (no modifier) is visible to all classes in the same package.",explanation:"Default access allows neighboring classes in the same package directory to inspect and mutate fields. Data Hiding requires 'private' to restrict access strictly to the declaring class.",hint:"Class-level restriction vs Package-level sharing.",level:"Beginner",codeExample:`int defaultField;      // Package-private: visible to all classes in package
private int privateField; // Private: visible ONLY inside this class`},{question:"What is Sukanta Hui's Vault Analogy for Data Hiding at the Barrackpore Academy?",shortAnswer:"A bank never leaves cash on the sidewalk; it locks currency in a private underground vault and exposes a fortified teller window. Treat your class fields as currency in a vault.",explanation:"At the Barrackpore campus, Sukanta Hui teaches that an unhidden field is like dumping cash in the street. By marking fields 'private' and exposing only validated public teller methods ('authenticate', 'changePassword'), your domain records remain forever secure and uncompromised.",hint:"Private vault within, fortified teller window without.",level:"Beginner",codeExample:"// Sukanta Hui's Vault Architecture: Private Fields (Vault) → Public Methods (Teller Window) → Guarded Contracts"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes vaultLock {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(139, 92, 246, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-vault-lock {
            animation: vaultLock 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Data Hiding & Access Control"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Data Hiding: Restricting Direct Field Access Using the ",e.jsx("code",{className:"text-purple-400 font-mono",children:"'private'"})," Modifier"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the defensive core of data hiding in Java: understanding how the ",e.jsx("code",{className:"text-purple-400 font-mono",children:"private"})," modifier enforces compile-time and bytecode-level barriers against direct field manipulation, protecting sensitive domain secrets, implementing masked accessors, and leveraging Java 11+ Nestmates."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔒"})," The Architecture of Data Hiding"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["Data Hiding is the precise mechanism of making internal fields and helper routines inaccessible to any external class using the ",e.jsx("code",{className:"text-purple-400 font-mono",children:"private"})," modifier:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"1. Compile-Time Barrier"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Direct external access (",e.jsx("code",{className:"text-rose-300",children:"vault.password"}),") is halted at compile time with a private access violation error."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"2. Secret Protection"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Raw secrets, cryptographic salts, and internal algorithms remain forever hidden behind private member boundaries."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"3. Masked Exposure"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Exposing only safe, redacted metadata (e.g. ",e.jsx("code",{className:"text-emerald-300",children:"s***l@domain.com"}),") to prevent data leakage in logs."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Classroom Case Study (Barrackpore Credential Vault):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," registered his academy credentials, his plain password was immediately hashed into a private SHA-256 string. Outside code could never read or overwrite his hash. When an unauthorized attacker attempted 3 consecutive incorrect passwords, our private lockout invariant locked the account automatically!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The 'private' Security Wall: Blocked Direct Access vs Authorized Method Gates"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing how the compiler blocks unauthorized external field writes while channeling requests through public teller methods:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 320",className:"w-full h-auto","aria-label":"Private Access Security Wall Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"blockArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#ef4444"})}),e.jsx("marker",{id:"allowArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})]}),e.jsx("rect",{x:"25",y:"25",width:"280",height:"270",rx:"10",fill:"#0f172a",stroke:"#64748b",strokeWidth:"2"}),e.jsx("text",{x:"165",y:"52",fill:"#94a3b8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"EXTERNAL CALLER CLASS"}),e.jsx("text",{x:"165",y:"68",fill:"#64748b",fontSize:"9",textAnchor:"middle",children:"Outside Application Package"}),e.jsx("rect",{x:"40",y:"85",width:"250",height:"60",rx:"6",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"105",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:'vault.saltedPasswordHash = "x";'}),e.jsx("text",{x:"50",y:"125",fill:"#f87171",fontSize:"9",fontWeight:"bold",children:"× COMPILE ERROR: private access"}),e.jsx("rect",{x:"40",y:"155",width:"250",height:"60",rx:"6",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"175",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"vault.failedAttempts = 0;"}),e.jsx("text",{x:"50",y:"195",fill:"#f87171",fontSize:"9",fontWeight:"bold",children:"× COMPILE ERROR: private access"}),e.jsx("rect",{x:"40",y:"225",width:"250",height:"55",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"245",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:'vault.authenticate("pwd123");'}),e.jsx("text",{x:"50",y:"265",fill:"#4ade80",fontSize:"9",fontWeight:"bold",children:"&check; VALID: Public Method Gate"}),e.jsx("line",{x1:"345",y1:"25",x2:"345",y2:"295",stroke:"#a855f7",strokeWidth:"4",strokeDasharray:"8 4"}),e.jsx("text",{x:"345",y:"165",fill:"#c084fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",transform:"rotate(-90 345 165)",children:"THE 'private' SECURITY WALL"}),e.jsx("rect",{x:"380",y:"25",width:"515",height:"270",rx:"10",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"637",y:"52",fill:"#c084fc",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"SecureStudentCredentialVault (INSIDE CAPSULE)"}),e.jsx("text",{x:"637",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Encapsulated Private State & Cryptographic Helpers"}),e.jsx("rect",{x:"395",y:"85",width:"485",height:"55",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"405",y:"105",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"Public Authorized Teller Windows:"}),e.jsx("text",{x:"405",y:"125",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:"+ authenticate(pwd) | + changePassword(old, new) | + getMaskedEmail()"}),e.jsx("rect",{x:"395",y:"150",width:"485",height:"130",rx:"6",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"405",y:"172",fill:"#e0e7ff",fontSize:"10",fontWeight:"bold",children:"Protected Private Vault Chamber (Inaccessible from Outside):"}),e.jsx("text",{x:"405",y:"192",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"- private String saltedPasswordHash (SHA-256 Hash)"}),e.jsx("text",{x:"405",y:"208",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"- private int failedLoginAttemptsCount (Brute-force counter)"}),e.jsx("text",{x:"405",y:"224",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"- private boolean isAccountLocked (Security invariant)"}),e.jsx("text",{x:"405",y:"240",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"- private String computeSha256Hash(...) [Hidden Crypto Method]"}),e.jsx("text",{x:"405",y:"265",fill:"#a7f3d0",fontSize:"8",children:"&check; Bytecode verifier enforces access rules natively in JVM"}),e.jsx("path",{d:"M 290 115 L 340 115",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#blockArrow)"}),e.jsx("path",{d:"M 290 185 L 340 185",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#blockArrow)"}),e.jsx("path",{d:"M 290 250 L 395 115",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#allowArrow)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"DataHidingPrivateModifierDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The runnable source code below showcases private cryptographic hashing, masked accessors, brute-force lockout invariants, and password verification workflows:"}),e.jsx(t,{fileName:"DataHidingPrivateModifierDemo.java",code:i})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Security Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Class-Based Access Control"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In Java, access control is class-based rather than instance-based. Any method in Class A can directly access private fields of another instance of Class A (",e.jsx("code",{className:"text-sky-300 font-mono",children:"other.privateField"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Java 11+ Nestmates (JEP 181)"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Inner nested classes and outer enclosing classes share private members natively in bytecode without generating synthetic ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"access$000"})," bridge methods."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Private Methods Cannot Be Overridden"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Subclasses do not inherit private methods. If a child class defines a method with the same signature, it is treated as a completely separate method, not a polymorphic override."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Masked Accessors for PII"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Sensitive information like email addresses or phone numbers should be exposed through masked accessors (",e.jsx("code",{className:"text-amber-300 font-mono",children:"getMaskedEmail()"}),") to prevent data leakage in logging pipelines."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Exposing Plaintext Passwords or Raw Secrets via Getters"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Providing a public getter for a private password or secret key completely defeats Data Hiding and exposes confidential credentials to reflection and log scrapers."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// DANGEROUS: Leaks raw private secret!
private String password;
public String getPassword() {
    return this.password; // NEVER DO THIS!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Store Cryptographic Hashes & Provide Verifier Methods"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Store salted hashes internally and expose only verification methods (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"authenticate(password)"}),") that return boolean outcomes without ever revealing the secret."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Validates without exposing hash
private String saltedHash;
public boolean authenticate(String input) {
    return this.saltedHash.equals(hash(input));
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-emerald-500/10 p-6 md:p-8 rounded-2xl border border-purple-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why does Java allow private interface methods?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Starting in ",e.jsx("strong",{children:"Java 9"}),", interfaces were granted the ability to declare ",e.jsx("code",{className:"text-purple-300 font-mono",children:"private"})," static and instance methods. When multiple ",e.jsx("code",{className:"text-purple-300 font-mono",children:"default"})," methods in a large interface share duplicate validation or algorithmic logic, private interface methods allow developers to refactor that shared code into private helpers without leaking those implementation details into the public API of implementing classes!"]})]}),e.jsx(n,{quote:"A bank does not leave currency on the pavement—it locks the cash in an underground vault and opens a fortified teller window. Treat your class fields as currency in a vault; make them private, and let authorized public methods be your tellers.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(a,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(s,{content:r,fileName:"Topic11_Data_Hiding_Private_Modifier_Note.txt"})]})]})}export{g as default};

import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 15: Read-Only and Write-Only Classes Using Selective Getter/Setter Exposure\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Selective Accessor/Mutator Exposure\r
 * ----------------------------------------------------------------------------\r
 * 1. What is a Read-Only Class?\r
 *    - A class that provides ONLY public getters (no setters).\r
 *    - State is established during construction and can be read by any component,\r
 *      but cannot be mutated externally.\r
 *    - Use Cases: Financial transaction receipts, audit snapshots, telemetry reports.\r
 *\r
 * 2. What is a Write-Only Class?\r
 *    - A class that provides ONLY public setters (no getters).\r
 *    - Callers can feed credentials, configurations, or logs into the object, but\r
 *      cannot inspect or extract stored values back out.\r
 *    - Use Cases: Password reset ingestion, security token sinks, encrypted log writers.\r
 *\r
 * 3. Mixed Field Selective Exposure (Enterprise Hybrid Pattern):\r
 *    - A domain class where fields have different access policies:\r
 *      * Read-Only Fields   : \`accountId\`, \`creationTimestamp\` (Getters only).\r
 *      * Read-Write Fields  : \`emailAddress\`, \`phoneNumber\` (Getters & Setters).\r
 *      * Write-Only Fields  : \`rawPassword\`, \`cvvSecurityPin\` (Setters only).\r
 *      * Internal-Only State: \`failedLoginCount\`, \`auditHash\` (No getters or setters).\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.nio.charset.StandardCharsets;\r
import java.security.MessageDigest;\r
import java.security.NoSuchAlgorithmException;\r
import java.time.LocalDateTime;\r
import java.time.format.DateTimeFormatter;\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class ReadOnlyWriteOnlyClassesDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Part 1: PURE READ-ONLY CLASS (Academic Semester Report Card)\r
    // ------------------------------------------------------------------------\r
    public static final class ReadOnlyAcademicReportCard {\r
        private final int studentRollNumber;\r
        private final String studentFullName;\r
        private final String campusBranch;\r
        private final double javaTheoryMarks;\r
        private final double springBootLabMarks;\r
        private final double cloudDevOpsMarks;\r
        private final String generationTimestamp;\r
\r
        // All fields assigned in constructor; NO setters exist!\r
        public ReadOnlyAcademicReportCard(int rollNumber, String name, String branch, double java, double spring, double cloud) {\r
            this.studentRollNumber = rollNumber;\r
            this.studentFullName = Objects.requireNonNull(name, "Name required").trim();\r
            this.campusBranch = Objects.requireNonNull(branch, "Branch required").trim();\r
            this.javaTheoryMarks = validateMarks(java);\r
            this.springBootLabMarks = validateMarks(spring);\r
            this.cloudDevOpsMarks = validateMarks(cloud);\r
\r
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");\r
            this.generationTimestamp = LocalDateTime.now().format(dtf);\r
        }\r
\r
        private double validateMarks(double m) {\r
            if (m < 0.0 || m > 100.0) throw new IllegalArgumentException("Marks must be 0-100: " + m);\r
            return m;\r
        }\r
\r
        // --- Only Getters Exposed (Pure Read-Only Contract) ---\r
        public int getStudentRollNumber() { return studentRollNumber; }\r
        public String getStudentFullName() { return studentFullName; }\r
        public String getCampusBranch() { return campusBranch; }\r
        public double getJavaTheoryMarks() { return javaTheoryMarks; }\r
        public double getSpringBootLabMarks() { return springBootLabMarks; }\r
        public double getCloudDevOpsMarks() { return cloudDevOpsMarks; }\r
        public String getGenerationTimestamp() { return generationTimestamp; }\r
\r
        // Virtual calculated property\r
        public double getAggregatePercentage() {\r
            return (javaTheoryMarks + springBootLabMarks + cloudDevOpsMarks) / 3.0;\r
        }\r
\r
        public String getLetterGrade() {\r
            double agg = getAggregatePercentage();\r
            if (agg >= 90.0) return "A+ (Exemplary)";\r
            if (agg >= 80.0) return "A (Distinction)";\r
            if (agg >= 70.0) return "B+ (First Class)";\r
            return "B (Pass)";\r
        }\r
\r
        public void printReportCard() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | [READ-ONLY] ACADEMIC SEMESTER REPORT CARD                   |\\n");\r
            System.out.printf("  | Roll Number   : %-43d |\\n", studentRollNumber);\r
            System.out.printf("  | Student Name  : %-43s |\\n", studentFullName);\r
            System.out.printf("  | Campus Branch : %-43s |\\n", campusBranch);\r
            System.out.printf("  | Java Theory   : %-43.1f |\\n", javaTheoryMarks);\r
            System.out.printf("  | Spring Lab    : %-43.1f |\\n", springBootLabMarks);\r
            System.out.printf("  | Cloud DevOps  : %-43.1f |\\n", cloudDevOpsMarks);\r
            System.out.printf("  | Aggregate %%   : %-42.2f%% |\\n", getAggregatePercentage());\r
            System.out.printf("  | Grade Awarded : %-43s |\\n", getLetterGrade());\r
            System.out.printf("  | Certified On  : %-43s |\\n", generationTimestamp);\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Part 2: PURE WRITE-ONLY CLASS (Password Reset Ingestion Sink)\r
    // ------------------------------------------------------------------------\r
    public static class WriteOnlyCredentialIngestionSink {\r
        private String processedHash;\r
        private int saltRounds = 12;\r
        private boolean isProcessed = false;\r
\r
        // No-arg constructor\r
        public WriteOnlyCredentialIngestionSink() {}\r
\r
        // --- Only Setters Exposed (NO Getters exist!) ---\r
        public void setPlaintextPassword(String rawPassword) {\r
            Objects.requireNonNull(rawPassword, "Password cannot be null.");\r
            if (rawPassword.length() < 8) {\r
                throw new IllegalArgumentException("Password must be at least 8 characters.");\r
            }\r
            this.processedHash = computeHash(rawPassword);\r
            this.isProcessed = true;\r
            System.out.println("  [WRITE-ONLY SINK] Plaintext password digested and securely hashed.");\r
        }\r
\r
        public void setSaltRounds(int rounds) {\r
            if (rounds < 10 || rounds > 30) {\r
                throw new IllegalArgumentException("Salt rounds must be between 10 and 30.");\r
            }\r
            this.saltRounds = rounds;\r
        }\r
\r
        // Action method that internally checks match without exposing secret\r
        public boolean verifyPasswordMatch(String candidatePassword) {\r
            if (!isProcessed || processedHash == null) return false;\r
            return processedHash.equals(computeHash(candidatePassword));\r
        }\r
\r
        private String computeHash(String input) {\r
            try {\r
                MessageDigest md = MessageDigest.getInstance("SHA-256");\r
                byte[] bytes = md.digest((input + "_SALT_" + saltRounds).getBytes(StandardCharsets.UTF_8));\r
                StringBuilder sb = new StringBuilder();\r
                for (byte b : bytes) sb.append(String.format("%02x", b));\r
                return sb.toString();\r
            } catch (NoSuchAlgorithmException e) {\r
                throw new RuntimeException("SHA-256 unavailable", e);\r
            }\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Part 3: HYBRID CLASS (Selective Mixed Field-Level Exposure)\r
    // ------------------------------------------------------------------------\r
    public static class SelectiveExposureStudentProfile {\r
        // 1. Read-Only Properties (Getters Only)\r
        private final int studentId;\r
        private final String registrationDate;\r
\r
        // 2. Read-Write Properties (Getters AND Setters)\r
        private String contactEmail;\r
        private String residentialAddress;\r
\r
        // 3. Write-Only Properties (Setters Only)\r
        private String paymentPinHash;\r
\r
        // 4. Internal-Only Properties (NO Getters, NO Setters)\r
        private int internalAuditCounter = 0;\r
\r
        public SelectiveExposureStudentProfile(int studentId, String email, String address) {\r
            this.studentId = studentId;\r
            this.registrationDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MMM-yyyy"));\r
            this.contactEmail = email;\r
            this.residentialAddress = address;\r
        }\r
\r
        // Read-Only Accessors\r
        public int getStudentId() { return studentId; }\r
        public String getRegistrationDate() { return registrationDate; }\r
\r
        // Read-Write Accessors & Mutators\r
        public String getContactEmail() { return contactEmail; }\r
        public void setContactEmail(String email) {\r
            this.contactEmail = Objects.requireNonNull(email, "Email required");\r
            this.internalAuditCounter++;\r
        }\r
\r
        public String getResidentialAddress() { return residentialAddress; }\r
        public void setResidentialAddress(String address) {\r
            this.residentialAddress = Objects.requireNonNull(address, "Address required");\r
            this.internalAuditCounter++;\r
        }\r
\r
        // Write-Only Mutator (No getter!)\r
        public void setPaymentPin(String pin) {\r
            if (pin == null || pin.length() != 4 || !pin.matches("\\\\d{4}")) {\r
                throw new IllegalArgumentException("Payment PIN must be exactly 4 digits.");\r
            }\r
            this.paymentPinHash = "HASH_" + pin.hashCode();\r
            this.internalAuditCounter++;\r
            System.out.println("  [Selective Profile] Payment PIN securely ingested (Write-Only).");\r
        }\r
\r
        public void printProfileSummary() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | [HYBRID PROFILE] SELECTIVE EXPOSURE                         |\\n");\r
            System.out.printf("  | (Read-Only)  Student ID   : STU-%05d                       |\\n", studentId);\r
            System.out.printf("  | (Read-Only)  Registered On: %-31s |\\n", registrationDate);\r
            System.out.printf("  | (Read-Write) Email        : %-31s |\\n", contactEmail);\r
            System.out.printf("  | (Read-Write) Address      : %-31s |\\n", residentialAddress);\r
            System.out.printf("  | (Write-Only) Payment PIN  : [PROTECTED & INACCESSIBLE]      |\\n");\r
            System.out.printf("  | (Internal)   Audit Count  : %-31d |\\n", internalAuditCounter);\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Demonstrating Read-Only, Write-Only, and Selective Exposure\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: READ-ONLY & WRITE-ONLY SELECTIVE ENCAPSULATION");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Pure Read-Only Class Demonstration\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Pure Read-Only Class (Academic Report Card for Swadeep Paul)");\r
        ReadOnlyAcademicReportCard swadeepCard = new ReadOnlyAcademicReportCard(\r
                101, "Swadeep Paul", "Barrackpore Hub", 94.0, 96.5, 91.0\r
        );\r
\r
        swadeepCard.printReportCard();\r
        System.out.println("Notice: No setter exists. Outside code cannot alter marks: swadeepCard.setJavaTheoryMarks() is IMPOSSIBLE!\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Pure Write-Only Class Demonstration\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 2: Pure Write-Only Class (Password Ingestion Sink)");\r
        WriteOnlyCredentialIngestionSink sink = new WriteOnlyCredentialIngestionSink();\r
        sink.setSaltRounds(16);\r
        sink.setPlaintextPassword("Swadeep@Barrackpore2026");\r
\r
        System.out.println("Notice: No getter exists. Outside code cannot read: sink.getPlaintextPassword() or sink.getHash() is IMPOSSIBLE!");\r
        System.out.println("Testing verification through behavioral method: verifyPasswordMatch(\\"Swadeep@Barrackpore2026\\") -> "\r
                + sink.verifyPasswordMatch("Swadeep@Barrackpore2026"));\r
        System.out.println("Testing verification with wrong password: verifyPasswordMatch(\\"WrongPass\\") -> "\r
                + sink.verifyPasswordMatch("WrongPass") + "\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Hybrid Selective Exposure Demonstration\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 3: Hybrid Selective Exposure (Tuhina Das Profile - Naihati)");\r
        SelectiveExposureStudentProfile tuhinaProfile = new SelectiveExposureStudentProfile(\r
                202, "tuhina.das@naihati.edu", "Naihati Anandapuri, WB"\r
        );\r
\r
        tuhinaProfile.setContactEmail("tuhina.fullstack@naihati.edu");\r
        tuhinaProfile.setPaymentPin("4892"); // Write-only property updated\r
        tuhinaProfile.printProfileSummary();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" READ-ONLY & WRITE-ONLY SELECTIVE EXPOSURE DEMO COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 15: Read-Only and Write-Only Classes Using Selective Getter/Setter Exposure\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SELECTIVE EXPOSURE PATTERNS:\r
   -----------------------------------------------------------------------------\r
   PATTERN               EXPOSURE               PRIMARY USE CASE\r
   -----------------------------------------------------------------------------\r
   Read-Only Class       GETTERS ONLY           Report cards, audit snapshots,\r
                         (No setters)           financial transaction receipts.\r
\r
   Write-Only Class      SETTERS ONLY           Password ingestion, secret sinks,\r
                         (No getters)           encrypted logging pipelines.\r
\r
   Hybrid Class          MIXED PER FIELD        Enterprise domain entities\r
                         (Get/Set/None)         (e.g., Student/Employee profiles).\r
   -----------------------------------------------------------------------------\r
\r
2. READ-ONLY VS TRULY IMMUTABLE:\r
   - Read-Only Interface: Omits public setters, but state might mutate internally.\r
   - Truly Immutable    : \`final\` class, all \`final\` fields, no setters, and\r
                          defensive copying on all constructors and getters.\r
\r
3. WRITE-ONLY SECURITY REQUIREMENTS:\r
   - Never store raw plaintext secrets in write-only fields.\r
   - Digest/Hash immediately upon ingestion (e.g. SHA-256 / bcrypt).\r
   - Provide verification methods (\`verifyMatch(candidate)\`) that return booleans\r
     without exposing the underlying hash.\r
\r
4. FIELD-LEVEL ACCESS POLICY IN HYBRID CLASSES:\r
   - Read-Only Fields   : \`studentId\`, \`registrationDate\` (Getters only).\r
   - Read-Write Fields  : \`emailAddress\`, \`residentialAddress\` (Getters + Setters).\r
   - Write-Only Fields  : \`paymentPin\`, \`rawPassword\` (Setters only).\r
   - Internal-Only      : \`auditCounter\`, \`securityLockFlag\` (No getters or setters).\r
\r
5. SUKANTA HUI'S THREE-WAY MODEL:\r
   - "Museum Showcase (Read-Only) : Look and inspect freely, but cannot touch.\r
      Ballot Box      (Write-Only): Drop your vote in; no one can pull it back out.\r
      Bank Window     (Hybrid)    : Dedicated channels for deposits, statements, and PINs."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What is a 'Read-Only' class in Java?",shortAnswer:"A class that exposes ONLY getter (accessor) methods and provides NO setter (mutator) methods.",explanation:"In a read-only class, all fields are initialized during constructor execution or computed lazily. External classes can read the state freely, but have zero mechanisms to mutate it.",hint:"Getters provided, setters omitted.",level:"Beginner",codeExample:`public class ReportCard {
    private final double score;
    public ReportCard(double score) { this.score = score; }
    public double getScore() { return score; } // Read-Only
}`},{question:"What is a 'Write-Only' class in Java?",shortAnswer:"A class that exposes ONLY setter (mutator) methods and provides NO getter (accessor) methods.",explanation:"Write-only classes act as ingestion sinks or consumers (e.g. password reset receivers, encrypted log streamers). External code can push data in, but cannot extract or inspect internal state.",hint:"Setters provided, getters omitted.",level:"Beginner",codeExample:`public class LogSink {
    private StringBuilder buffer = new StringBuilder();
    public void appendLog(String log) { buffer.append(log); } // Write-Only
}`},{question:"What is the difference between a 'Read-Only Class' and a 'Truly Immutable Class'?",shortAnswer:"A read-only class has no public setters, but its internal state could still be mutated by its own methods or mutable references; an immutable class cannot change at all.",explanation:"If a read-only class holds a mutable Date or List and returns it without defensive copying, its state can be modified externally. A truly immutable class (like String) has final fields, a final class, and defensive copies everywhere.",hint:"Read-only interface vs unchangeable physical memory.",level:"Intermediate",codeExample:`// Read-only interface: no setters, but internal state might advance
// Truly Immutable: class final, all fields final, zero state change`},{question:"What are the 4 main tiers in Mixed Selective Field Exposure?",shortAnswer:"1. Read-Only (Id, creation date), 2. Read-Write (Email, address), 3. Write-Only (Password, PIN), 4. Internal-Only (Audit count, lock flags).",explanation:"Enterprise domain classes rarely make all fields uniform. Selective exposure tailors access modifiers and getter/setter presence to the exact security and business needs of each field.",hint:"Read-Only, Read-Write, Write-Only, and Internal-Only.",level:"Intermediate",codeExample:`public int getId() { return id; } // Read-Only
public void setPassword(String p) { this.hash = hash(p); } // Write-Only`},{question:"How do Java 16+ Records naturally model Read-Only domain data?",shortAnswer:"Records automatically generate private final fields, canonical constructor validation, and accessor methods without setters.",explanation:"Records provide built-in read-only data carriers with zero boilerplate, ensuring properties cannot be modified after construction.",hint:"Built-in read-only data carriers in Java 16+.",level:"Beginner",codeExample:"public record TransactionReceipt(long txnId, double amountInr) {}"},{question:"Why should write-only password ingesters never store raw plaintext passwords in internal fields?",shortAnswer:"Because plaintext strings in Heap memory persist until garbage collected and can be extracted from memory dumps.",explanation:"Write-only setters should hash the password immediately upon ingestion (using SHA-256 or bcrypt) and overwrite or discard the temporary plaintext reference.",hint:"Hash immediately upon ingestion; discard plaintext.",level:"Intermediate",codeExample:"public void setPassword(String raw) { this.hash = computeHash(raw); }"},{question:"Can a Read-Only class have private mutator methods?",shortAnswer:"Yes! Internal private methods or background event listeners can update internal caches while keeping the public API strictly read-only.",explanation:"A class might be read-only to external callers, but internally refresh a cached stock price or calculation index.",hint:"Read-only to the public; mutable internally.",level:"Intermediate",codeExample:"private void refreshCache() { this.cachedVal = compute(); }"},{question:"How does Jackson JSON Serializer handle a Write-Only property annotated with '@JsonProperty(access = Access.WRITE_ONLY)'?",shortAnswer:"Jackson deserializes JSON into the property via the setter during HTTP POST/PUT, but NEVER includes the property in outgoing JSON responses.",explanation:"This allows client apps to send passwords or credit card CVVs into the API without Jackson accidentally returning the secret in GET responses.",hint:"Jackson WRITE_ONLY access property.",level:"Advanced",codeExample:`@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
private String password;`},{question:"What is the 'Snapshot Pattern' and how does it use Read-Only classes?",shortAnswer:"Capturing the state of a mutable entity at a specific point in time as an immutable, read-only snapshot object.",explanation:"A mutable BankAccount creates an immutable 'AccountStatementSnapshot' for the month. Callers can inspect the snapshot without any risk of affecting the active account.",hint:"Immutable point-in-time state capture.",level:"Intermediate",codeExample:"public AccountSnapshot takeSnapshot() { return new AccountSnapshot(this.id, this.balance); }"},{question:"Why is declaring a Read-Only class 'final' recommended for thread safety and immutability?",shortAnswer:"It prevents malicious subclasses from overriding getters or adding mutable fields that break the immutable contract.",explanation:"If a read-only class is non-final, a subclass could add setters and mutable state, allowing child instances to masquerade as immutable parents.",hint:"Final classes prevent subclass mutability breaches.",level:"Intermediate",codeExample:"public final class FinancialSnapshot { /* Immutable & unextendable */ }"},{question:"What is a 'Virtual Read-Only Property'?",shortAnswer:"A getter that returns a dynamically computed value on the fly without any underlying backing field (e.g. 'getAggregatePercentage()').",explanation:"Virtual read-only properties derive their values from other fields at invocation time, guaranteeing that calculated values are always fresh and consistent.",hint:"Calculated getter without a dedicated field.",level:"Beginner",codeExample:"public double getAggregate() { return (math + science) / 2.0; }"},{question:"Can a Write-Only class provide a verification method (e.g. 'verifyMatch(candidate)')?",shortAnswer:"Yes! A write-only class can verify candidate inputs against its internal state without ever revealing the stored secret.",explanation:"A verifier method takes a candidate password, hashes it, compares it with the stored hash, and returns boolean true/false—preserving complete data confidentiality.",hint:"Boolean verification without state exposure.",level:"Beginner",codeExample:"public boolean verifyPin(String candidate) { return hash.equals(hash(candidate)); }"},{question:"Why should read-only classes containing collection fields use 'Collections.unmodifiableList()'?",shortAnswer:"Because omitting setters is not enough; if a getter returns the raw List reference, external code can call list.add() and mutate internal state.",explanation:"A class without setters is not read-only if its getter leaks mutable collections. Wrapping with 'Collections.unmodifiableList()' enforces true read-only behavior.",hint:"Wrap collections in read-only armor.",level:"Intermediate",codeExample:"public List<String> getSkills() { return Collections.unmodifiableList(skills); }"},{question:"What is an 'Audit Sinkhole' in enterprise architecture and how does it use Write-Only design?",shortAnswer:"A security component that accepts compliance logs, signs them cryptographically, and writes them to write-once storage without allowing log reads.",explanation:"Write-only audit loggers prevent compromised microservices from tampering with or reading previous audit events, creating a secure append-only audit sink.",hint:"Append-only security log ingestion.",level:"Advanced",codeExample:"public class ComplianceAuditSink { public void appendAudit(String msg) { writeToWorm(msg); } }"},{question:"How does the 'final' keyword on fields reinforce a Read-Only class?",shortAnswer:"It ensures the field pointer cannot be modified after constructor completion, guaranteeing memory visibility and thread safety across threads.",explanation:"Final fields have special memory model guarantees in the JVM (JSR-133), ensuring all threads see initialized values without synchronization.",hint:"JVM memory model guarantees for final fields.",level:"Intermediate",codeExample:"private final int rollNumber; // Immutable once assigned in constructor"},{question:"Can a JavaBean specification bean be purely Read-Only?",shortAnswer:"Yes, the JavaBeans spec supports read-only properties by simply declaring getters without corresponding setters.",explanation:"PropertyDescriptor in Java Introspector marks a property as read-only if 'getWriteMethod()' returns null while 'getReadMethod()' is present.",hint:"ReadMethod present, WriteMethod null.",level:"Intermediate",codeExample:"// Introspector discovers read-only property when write method is absent"},{question:"What is the danger of returning 'this' from a Read-Only method?",shortAnswer:"None, provided the object has no mutating methods; fluent read-only query pipelines frequently return 'this' or new transformed instances.",explanation:"In read-only classes, methods returning 'this' or new instances enable fluent transformation pipelines (e.g. 'report.withFilter().format()').",hint:"Fluent queries on immutable state.",level:"Beginner",codeExample:"public ReportCard filterPassed() { return this; }"},{question:"Why should read-only classes avoid generating hashCode() from mutable external references?",shortAnswer:"Because if an external object mutates, the read-only object's hash code changes, corrupting its position in HashMaps and HashSets.",explanation:"Read-only classes must compute hashCode and equals strictly from immutable primitive fields or immutable components.",hint:"Hash consistency requires immutable components.",level:"Advanced",codeExample:"public int hashCode() { return Objects.hash(studentRollNumber, studentFullName); }"},{question:"What is 'Selective Serialization' and how does it relate to Write-Only fields?",shortAnswer:"Marking write-only fields with 'transient' or excluding them from serialization so sensitive ingested data is never written to disk or network.",explanation:"Fields like 'private transient String pinHash;' ensure write-only credentials are never serialized into sessions or caching clusters.",hint:"Transient modifier prevents write-only fields from serializing.",level:"Intermediate",codeExample:"private transient String paymentPinHash;"},{question:"Can an interface enforce a Read-Only contract on implementing classes?",shortAnswer:"Yes! By declaring only getter methods in the interface, callers interacting via the interface can only read data.",explanation:"Declaring 'public interface ReadableStudent { int getRoll(); String getName(); }' forces callers to treat the object as read-only, even if the concrete class has package-private setters.",hint:"Interface-segregated read-only view.",level:"Intermediate",codeExample:`public interface ReadOnlyStudent { int getRoll(); String getName(); }
class Student implements ReadOnlyStudent { /* Has internal setters */ }`},{question:"What is 'Defensive Copying on Construction' in a Read-Only class?",shortAnswer:"Cloning or copying mutable arguments passed into the constructor to prevent the caller from retaining a backdoor alias to internal state.",explanation:"If a caller passes a 'Date' or 'int[]' into a read-only constructor, writing 'this.date = new Date(d.getTime());' breaks the caller's reference.",hint:"Never trust external references in immutable constructors.",level:"Intermediate",codeExample:"public ReadOnlyData(int[] arr) { this.data = arr.clone(); }"},{question:"Why do configuration classes in microservices (e.g. @ConfigurationProperties) often use Read-Only designs in production?",shortAnswer:"To prevent application threads from accidentally mutating configuration settings (e.g. database URLs, timeout thresholds) at runtime.",explanation:"Immutable configuration beans initialized during startup guarantee that all worker threads read consistent, tamper-proof settings.",hint:"Immutable configuration guarantees thread safety.",level:"Intermediate",codeExample:"public final class DatabaseConfig { private final String url; public String getUrl() { return url; } }"},{question:"Can a Write-Only class be used to implement the 'Builder Pattern'?",shortAnswer:"Yes! A Builder starts as a write-only accumulator (only setters/fluent withers), and finally produces a read-only target object via build().",explanation:"The builder collects configuration through mutators, and seals the state into an immutable target object upon calling 'build()'.",hint:"Write-only accumulator building a read-only result.",level:"Intermediate",codeExample:'ReportCard card = ReportCard.builder().setRoll(101).setName("Swadeep").build();'},{question:"What is 'Lazy Evaluation' in a Read-Only class?",shortAnswer:"Computing an expensive read-only property only when its getter is called for the first time, and caching it in a private field.",explanation:"If calculating aggregate statistics is CPU-intensive, the getter computes it on demand and caches the result for future calls.",hint:"Compute once on demand, cache forever.",level:"Intermediate",codeExample:`public double getGpa() {
    if (cachedGpa == 0.0) cachedGpa = computeGpa();
    return cachedGpa;
}`},{question:"How does the 'Command Pattern' use Write-Only parameter setting?",shortAnswer:"Command objects receive parameters via setters or constructors and expose an 'execute()' method without revealing parameter getters.",explanation:"The command encapsulates the action and its arguments, executing the operation autonomously when triggered.",hint:"Encapsulate parameters, execute action.",level:"Advanced",codeExample:"public class SendFeeAlertCommand { public void setRecipient(String r) { ... } public void execute() { ... } }"},{question:"What is 'Field-Level Access Control' in security architectures?",shortAnswer:"Enforcing distinct read, write, and hidden permissions for individual fields within the same domain entity.",explanation:"In an employee record, 'id' is read-only for all; 'salary' is read-write for HR only; 'ssn' is write-only upon hiring; 'performanceRating' is internal.",hint:"Granular access policy per domain field.",level:"Advanced",codeExample:"// Mixed field security policy in SelectiveExposureStudentProfile"},{question:"Can a read-only class implement the 'Comparable' interface?",shortAnswer:"Yes! Read-only classes are ideal candidates for Comparable because their natural ordering never changes over time.",explanation:"Implementing 'compareTo()' on immutable fields (like rollNumber or timestamp) guarantees stable sorting behavior in TreeSets and sorted lists.",hint:"Stable sorting on immutable natural keys.",level:"Beginner",codeExample:`public final class Student implements Comparable<Student> {
    public int compareTo(Student o) { return Integer.compare(this.roll, o.roll); }
}`},{question:"Why should write-only setters avoid returning the written value?",shortAnswer:"Returning the value turns the setter into a getter-hybrid, violating write-only encapsulation.",explanation:"A write-only setter should return 'void' (or 'this' for fluent builders) without echoing back the secret argument.",hint:"Do not echo back ingested secrets.",level:"Beginner",codeExample:"public void setPin(String pin) { this.hash = hash(pin); } // Returns void"},{question:"What is 'Copy-on-Write' in immutable and read-only data structures?",shortAnswer:"Instead of modifying an existing read-only object, a mutator returns a BRAND NEW read-only instance with the updated value.",explanation:"Like String.replace() or java.time.LocalDate.plusDays(), copy-on-write preserves the original instance while returning a fresh modified copy.",hint:"Return a new instance on modification.",level:"Intermediate",codeExample:`public ReportCard withSpringMarks(double m) {
    return new ReportCard(this.roll, this.name, this.branch, this.java, m, this.cloud);
}`},{question:"What is Sukanta Hui's One-Way Mirror Analogy for Selective Exposure at the Barrackpore Academy?",shortAnswer:"A read-only class is a museum showcase (look, don't touch); a write-only class is a ballot box (drop your vote in, no one can pull it back out); a hybrid profile is a smart bank account with distinct windows for every operation.",explanation:"At the Barrackpore academy, Sukanta Hui teaches that master architects never give blanket read/write access to everything. By designing museum showcases (read-only), ballot boxes (write-only), and hybrid windows, your domain objects enforce airtight security and flawless data integrity.",hint:"Showcase (read-only), Ballot Box (write-only), Bank Teller (hybrid).",level:"Beginner",codeExample:"// Sukanta Hui's Triple Pattern: Museum Showcase (Read-Only) | Ballot Box (Write-Only) | Hybrid Profile"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes showcaseGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(14, 165, 233, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-showcase {
            animation: showcaseGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Selective Encapsulation & Access Exposure"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Read-Only and Write-Only Classes Using Selective Getter/Setter Exposure"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master advanced architectural encapsulation through selective accessor and mutator exposure: creating tamper-proof Read-Only domain entities (museum showcases), secure Write-Only secret ingestion sinks (ballot boxes), and enterprise Hybrid profiles with granular field-level access control."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Three Selective Exposure Patterns"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Enterprise software design avoids blanket getters and setters. Instead, it tailors exposure to the precise operational role of each entity:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"1. Read-Only (Showcase)"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:[e.jsx("strong",{children:"Getters Only"}),". Immutable snapshots, certified academic report cards, financial audit receipts."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"2. Write-Only (Ballot Box)"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:[e.jsx("strong",{children:"Setters Only"}),". Password reset ingesters, encryption sinks, append-only compliance loggers."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"3. Hybrid Selective"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:[e.jsx("strong",{children:"Granular per field"}),". Read-only ID, read-write contact info, write-only payment PIN."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Swadeep's Report Card & Tuhina's Profile):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," graduated with a 93.83% score, our academy generated a ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ReadOnlyAcademicReportCard"})," that outside callers can inspect freely, but cannot tamper with because zero setters exist! Meanwhile, ",e.jsx("strong",{children:"Tuhina Das"})," updated her hybrid profile with a write-only payment PIN that digested into a hash without exposing the secret to reading APIs."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Selective Exposure Architecture: Read-Only, Write-Only, and Hybrid Profiles"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Comparing the three architectural access models in Java:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 310",className:"w-full h-auto","aria-label":"Selective Exposure Architecture Diagram",children:[e.jsx("rect",{x:"25",y:"25",width:"270",height:"260",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"52",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"READ-ONLY (SHOWCASE)"}),e.jsx("text",{x:"160",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"All Getters · ZERO Setters"}),e.jsx("rect",{x:"35",y:"85",width:"250",height:"55",rx:"4",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"105",fill:"#bae6fd",fontSize:"9",fontWeight:"bold",children:"Public Read Accessors:"}),e.jsx("text",{x:"45",y:"125",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"+ getMarks() | + getGrade()"}),e.jsx("rect",{x:"35",y:"150",width:"250",height:"120",rx:"4",fill:"#0c4a6e",stroke:"#0284c7",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"172",fill:"#e0f2fe",fontSize:"9",fontWeight:"bold",children:"Immutable Heap Core:"}),e.jsx("text",{x:"45",y:"192",fill:"#7dd3fc",fontSize:"9",fontFamily:"monospace",children:"- private final double marks"}),e.jsx("text",{x:"45",y:"208",fill:"#7dd3fc",fontSize:"9",fontFamily:"monospace",children:"- private final String certDate"}),e.jsx("text",{x:"45",y:"235",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; 100% Tamper-Proof Snapshot"}),e.jsx("text",{x:"45",y:"252",fill:"#a7f3d0",fontSize:"8",children:"External mutation is impossible"}),e.jsx("rect",{x:"325",y:"25",width:"270",height:"260",rx:"10",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"52",fill:"#c084fc",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"WRITE-ONLY (BALLOT BOX)"}),e.jsx("text",{x:"460",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"All Setters · ZERO Getters"}),e.jsx("rect",{x:"335",y:"85",width:"250",height:"55",rx:"4",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"345",y:"105",fill:"#f3e8ff",fontSize:"9",fontWeight:"bold",children:"Public Ingestion Mutators:"}),e.jsx("text",{x:"345",y:"125",fill:"#c084fc",fontSize:"9",fontFamily:"monospace",children:"+ setPassword(p) | + setSalt(s)"}),e.jsx("rect",{x:"335",y:"150",width:"250",height:"120",rx:"4",fill:"#581c87",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"345",y:"172",fill:"#f3e8ff",fontSize:"9",fontWeight:"bold",children:"Confidential Ingestor Core:"}),e.jsx("text",{x:"345",y:"192",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:"- private String digestedHash"}),e.jsx("text",{x:"345",y:"208",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"× No getPassword() getter!"}),e.jsx("text",{x:"345",y:"235",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; Secret Sinkhole Protection"}),e.jsx("text",{x:"345",y:"252",fill:"#a7f3d0",fontSize:"8",children:"Verifies matches without exposure"}),e.jsx("rect",{x:"625",y:"25",width:"270",height:"260",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"760",y:"52",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"HYBRID SELECTIVE PROFILE"}),e.jsx("text",{x:"760",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Fine-Grained Field Exposure"}),e.jsx("rect",{x:"635",y:"85",width:"250",height:"185",rx:"4",fill:"#022c22",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"645",y:"105",fill:"#34d399",fontSize:"9",fontWeight:"bold",children:"Field-Level Access Policy:"}),e.jsx("text",{x:"645",y:"125",fill:"#38bdf8",fontSize:"8",fontFamily:"monospace",children:"• (Read-Only)  getId()"}),e.jsx("text",{x:"645",y:"145",fill:"#4ade80",fontSize:"8",fontFamily:"monospace",children:"• (Read-Write) get/setEmail()"}),e.jsx("text",{x:"645",y:"165",fill:"#c084fc",fontSize:"8",fontFamily:"monospace",children:"• (Write-Only) setPaymentPin()"}),e.jsx("text",{x:"645",y:"185",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"• (Internal)   auditCounter (None)"}),e.jsx("text",{x:"645",y:"215",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; Tailored Enterprise Security"}),e.jsx("text",{x:"645",y:"232",fill:"#a7f3d0",fontSize:"8",children:"Zero accidental credential leaks"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"ReadOnlyWriteOnlyClassesDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The executable code below showcases pure read-only report cards, write-only password ingestion sinks with boolean verifiers, and hybrid selective exposure profiles:"}),e.jsx(t,{fileName:"ReadOnlyWriteOnlyClassesDemo.java",code:s})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Architecture Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Read-Only vs Truly Immutable"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Omitting setters makes a class read-only, but true immutability additionally requires declaring the class ",e.jsx("code",{className:"text-sky-300 font-mono",children:"final"}),", all fields ",e.jsx("code",{className:"text-sky-300 font-mono",children:"final"}),", and performing defensive copying on all collection inputs and outputs."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Write-Only Security Pattern"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Write-only classes accept credentials, digest them immediately into salted cryptographic hashes, and expose only boolean verifiers (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"verifyMatch(...)"}),") rather than returning hashes."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Jackson WRITE_ONLY Integration"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In Spring Boot REST APIs, annotating fields with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@JsonProperty(access = Access.WRITE_ONLY)"})," allows incoming JSON to bind credentials without ever returning them in HTTP GET responses."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Java 16+ Records as Read-Only DTOs"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Records are Java's modern built-in solution for pure read-only data carriers, generating private final fields and component accessors automatically."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Returning Mutable References from Read-Only Classes"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["If a read-only class has no setters but returns a raw ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Date"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"List"})," reference in a getter, external code can call ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list.clear()"})," and destroy internal state."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// LEAK IN READ-ONLY CLASS:
public List<String> getSkills() {
    return this.skills; // Callers can call .clear()!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Return Unmodifiable Views or Clones"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Wrap collections with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Collections.unmodifiableList()"})," and clone arrays before returning in getters."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Read-only armor on collections
public List<String> getSkills() {
    return Collections.unmodifiableList(this.skills);
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-emerald-500/10 p-6 md:p-8 rounded-2xl border border-sky-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why is a Write-Only class with a getter that returns a masked hash NOT write-only?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["The moment any getter is exposed—even if it returns a masked string or a cryptographic hash—the class ceases to be write-only and becomes a ",e.jsx("strong",{children:"Hybrid Profile"}),"! A true write-only class exposes ",e.jsx("strong",{children:"zero accessor methods"})," of any kind, functioning strictly as a one-way terminal data sinkhole (like a sealed ballot box)."]})]}),e.jsx(a,{quote:"A master software architect never gives blanket read/write access to everything. Design museum showcases (read-only) for your certificates, ballot boxes (write-only) for your secrets, and dedicated bank windows (hybrid) for your domain records.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:l})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(r,{content:i,fileName:"Topic15_ReadOnly_WriteOnly_Classes_Note.txt"})]})]})}export{g as default};

import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 14: Adding Business Validation Logic Inside Setters to Protect Object Integrity\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Setters as Domain Invariant Gatekeepers\r
 * ----------------------------------------------------------------------------\r
 * 1. Why Validate Inside Setters?\r
 *    - In an enterprise application, data enters from untrusted sources (UI forms,\r
 *      REST payloads, CSV imports, external APIs).\r
 *    - An unvalidated setter is an open invitation to state corruption.\r
 *    - Validating inside mutators guarantees that an object can NEVER enter an\r
 *      invalid, illegal, or inconsistent state.\r
 *\r
 * 2. The 4 Essential Tiers of Setter Validation:\r
 *    - Tier 1: Null & Blank Checks (Objects.requireNonNull, isBlank()).\r
 *    - Tier 2: Normalization / Sanitization (trimming, toLowerCase, formatting).\r
 *    - Tier 3: Range & Format Bounds (regex checks, min/max limits, positive values).\r
 *    - Tier 4: Business Rule & Lifecycle Invariants (cross-field logic, state transitions).\r
 *\r
 * 3. Standard Exception Conventions:\r
 *    - IllegalArgumentException : When an argument violates domain constraints (e.g. age < 0).\r
 *    - NullPointerException     : When a mandatory argument is null (via Objects.requireNonNull).\r
 *    - IllegalStateException    : When the object's current state forbids the mutation.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.util.Objects;\r
import java.util.regex.Pattern;\r
\r
public class SetterValidationAndIntegrityDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: TraineeAdmissionRecord (Strict Invariant Validation)\r
    // ------------------------------------------------------------------------\r
    public static class TraineeAdmissionRecord {\r
\r
        // Precompiled regex pattern for West Bengal Indian Mobile Numbers (e.g., +91 or 10 digits)\r
        private static final Pattern PHONE_PATTERN = Pattern.compile("^[6-9]\\\\d{9}$");\r
        private static final Pattern EMAIL_PATTERN = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");\r
\r
        // --- Encapsulated Private Fields ---\r
        private int studentRollNumber;\r
        private String studentFullName;\r
        private String contactPhoneNumber;\r
        private String verifiedEmailAddress;\r
        private double entranceScorePercentage;\r
        private double baseFeeInr;\r
        private double scholarshipDiscountPercentage;\r
        private String enrollmentStatus; // APPLIED, ENROLLED, SUSPENDED, GRADUATED\r
\r
        // Constructor delegating to setters for unified validation\r
        public TraineeAdmissionRecord(int rollNumber, String fullName, String phone, String email, double entranceScore, double baseFee) {\r
            setStudentRollNumber(rollNumber);\r
            setStudentFullName(fullName);\r
            setContactPhoneNumber(phone);\r
            setVerifiedEmailAddress(email);\r
            setEntranceScorePercentage(entranceScore);\r
            setBaseFeeInr(baseFee);\r
            this.scholarshipDiscountPercentage = 0.0;\r
            this.enrollmentStatus = "APPLIED";\r
        }\r
\r
        // --- Validated Setter 1: Roll Number (Positive Integer) ---\r
        public void setStudentRollNumber(int studentRollNumber) {\r
            if (studentRollNumber <= 0) {\r
                throw new IllegalArgumentException("Roll number must be strictly positive. Supplied: " + studentRollNumber);\r
            }\r
            this.studentRollNumber = studentRollNumber;\r
        }\r
\r
        // --- Validated Setter 2: Full Name (Sanitization + Length Validation) ---\r
        public void setStudentFullName(String studentFullName) {\r
            Objects.requireNonNull(studentFullName, "Student full name cannot be null.");\r
            String sanitized = studentFullName.trim();\r
            if (sanitized.isEmpty()) {\r
                throw new IllegalArgumentException("Student full name cannot be blank.");\r
            }\r
            if (sanitized.length() < 2 || sanitized.length() > 60) {\r
                throw new IllegalArgumentException("Name length must be between 2 and 60 characters. Supplied: '" + sanitized + "'");\r
            }\r
            this.studentFullName = sanitized;\r
        }\r
\r
        // --- Validated Setter 3: Indian Phone Number (Regex Validation) ---\r
        public void setContactPhoneNumber(String contactPhoneNumber) {\r
            Objects.requireNonNull(contactPhoneNumber, "Phone number cannot be null.");\r
            String cleanPhone = contactPhoneNumber.trim().replaceAll("[\\\\s\\\\-+]", "");\r
            if (cleanPhone.startsWith("91") && cleanPhone.length() == 12) {\r
                cleanPhone = cleanPhone.substring(2); // Strip country code +91\r
            }\r
            if (!PHONE_PATTERN.matcher(cleanPhone).matches()) {\r
                throw new IllegalArgumentException("Invalid 10-digit Indian mobile number: " + contactPhoneNumber);\r
            }\r
            this.contactPhoneNumber = cleanPhone;\r
        }\r
\r
        // --- Validated Setter 4: Email Address (Normalization + Regex) ---\r
        public void setVerifiedEmailAddress(String verifiedEmailAddress) {\r
            Objects.requireNonNull(verifiedEmailAddress, "Email address cannot be null.");\r
            String cleanEmail = verifiedEmailAddress.trim().toLowerCase();\r
            if (!EMAIL_PATTERN.matcher(cleanEmail).matches()) {\r
                throw new IllegalArgumentException("Invalid email format: " + verifiedEmailAddress);\r
            }\r
            this.verifiedEmailAddress = cleanEmail;\r
        }\r
\r
        // --- Validated Setter 5: Score Percentage (Range: 0.0 to 100.0) ---\r
        public void setEntranceScorePercentage(double entranceScorePercentage) {\r
            if (entranceScorePercentage < 0.0 || entranceScorePercentage > 100.0) {\r
                throw new IllegalArgumentException("Entrance score must be between 0.0% and 100.0%. Supplied: " + entranceScorePercentage);\r
            }\r
            this.entranceScorePercentage = entranceScorePercentage;\r
        }\r
\r
        // --- Validated Setter 6: Base Fee (Positive Financial Invariant) ---\r
        public void setBaseFeeInr(double baseFeeInr) {\r
            if (baseFeeInr < 0.0) {\r
                throw new IllegalArgumentException("Base fee cannot be negative. Supplied: ₹" + baseFeeInr);\r
            }\r
            this.baseFeeInr = baseFeeInr;\r
        }\r
\r
        // --- Validated Setter 7: Scholarship Discount (Conditional Business Logic) ---\r
        public void setScholarshipDiscountPercentage(double discountPercentage) {\r
            if (discountPercentage < 0.0 || discountPercentage > 50.0) {\r
                throw new IllegalArgumentException("Scholarship discount cannot exceed 50.0%. Attempted: " + discountPercentage + "%");\r
            }\r
            // Business Invariant: Merit discount requires entrance score >= 75.0%\r
            if (discountPercentage > 0.0 && this.entranceScorePercentage < 75.0) {\r
                throw new IllegalStateException("Student entrance score (" + this.entranceScorePercentage\r
                        + "%) is below the 75.0% threshold required for scholarship grants!");\r
            }\r
            this.scholarshipDiscountPercentage = discountPercentage;\r
        }\r
\r
        // --- Validated Setter 8: State Transition Lifecycle Validation ---\r
        public void transitionEnrollmentStatus(String newStatus) {\r
            Objects.requireNonNull(newStatus, "Status cannot be null.");\r
            String target = newStatus.trim().toUpperCase();\r
\r
            // Guarding State Machine Invariants\r
            if ("GRADUATED".equals(this.enrollmentStatus)) {\r
                throw new IllegalStateException("Cannot change status: Student has already GRADUATED!");\r
            }\r
            if ("SUSPENDED".equals(this.enrollmentStatus) && !"ENROLLED".equals(target)) {\r
                throw new IllegalStateException("Suspended student can only transition back to ENROLLED.");\r
            }\r
\r
            System.out.printf("  [State Transition] %s status changed: %s -> %s\\n",\r
                    this.studentFullName, this.enrollmentStatus, target);\r
            this.enrollmentStatus = target;\r
        }\r
\r
        // Calculated property: Net Payable Fee after discount\r
        public double getNetPayableFeeInr() {\r
            double discountAmount = (this.baseFeeInr * this.scholarshipDiscountPercentage) / 100.0;\r
            return this.baseFeeInr - discountAmount;\r
        }\r
\r
        // Getters\r
        public int getStudentRollNumber() { return studentRollNumber; }\r
        public String getStudentFullName() { return studentFullName; }\r
        public String getContactPhoneNumber() { return contactPhoneNumber; }\r
        public String getVerifiedEmailAddress() { return verifiedEmailAddress; }\r
        public double getEntranceScorePercentage() { return entranceScorePercentage; }\r
        public double getBaseFeeInr() { return baseFeeInr; }\r
        public double getScholarshipDiscountPercentage() { return scholarshipDiscountPercentage; }\r
        public String getEnrollmentStatus() { return enrollmentStatus; }\r
\r
        public void printRecordCard() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | Roll Number    : %-42d |\\n", studentRollNumber);\r
            System.out.printf("  | Student Name   : %-42s |\\n", studentFullName);\r
            System.out.printf("  | Phone Number   : +91-%-38s |\\n", contactPhoneNumber);\r
            System.out.printf("  | Email Address  : %-42s |\\n", verifiedEmailAddress);\r
            System.out.printf("  | Entrance Score : %-41.1f%% |\\n", entranceScorePercentage);\r
            System.out.printf("  | Base Fee       : ₹%-41.2f |\\n", baseFeeInr);\r
            System.out.printf("  | Scholarship    : %-41.1f%% |\\n", scholarshipDiscountPercentage);\r
            System.out.printf("  | Net Payable Fee: ₹%-41.2f |\\n", getNetPayableFeeInr());\r
            System.out.printf("  | Status         : %-42s |\\n", enrollmentStatus);\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Demonstrations of Setter Validation Defenses\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: BUSINESS VALIDATION INSIDE SETTERS");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Successful Instantiation with Valid Clean Data\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Creating Valid Student Record (Swadeep Paul - Barrackpore)");\r
        TraineeAdmissionRecord swadeep = new TraineeAdmissionRecord(\r
                101,\r
                "  Swadeep Paul  ", // Will be normalized/trimmed\r
                "+91 98301 23456",  // Will be sanitized to 9830123456\r
                "Swadeep.Paul@Barrackpore-Academy.EDU", // Will be lowercased\r
                92.5,\r
                15000.00\r
        );\r
\r
        // Granting merit scholarship (Valid because entranceScore 92.5 >= 75.0)\r
        swadeep.setScholarshipDiscountPercentage(25.0);\r
        swadeep.transitionEnrollmentStatus("ENROLLED");\r
        swadeep.printRecordCard();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Catching Range & Format Violations via Setters\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 2: Testing Setter Validation Defenses Against Bad Data\\n");\r
\r
        // Test A: Invalid Phone Number\r
        try {\r
            System.out.print("  [Test A: Invalid Phone '12345'] -> ");\r
            swadeep.setContactPhoneNumber("12345");\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        // Test B: Invalid Score Percentage (150%)\r
        try {\r
            System.out.print("  [Test B: Score 150.0%]          -> ");\r
            swadeep.setEntranceScorePercentage(150.0);\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        // Test C: Invalid Negative Fee\r
        try {\r
            System.out.print("  [Test C: Negative Fee -₹8000]   -> ");\r
            swadeep.setBaseFeeInr(-8000.0);\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        // Test D: Invalid Email Format\r
        try {\r
            System.out.print("  [Test D: Malformed Email]       -> ");\r
            swadeep.setVerifiedEmailAddress("swadeep_invalid_email.com");\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Testing Cross-Field Business Invariants\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Testing Conditional Business Invariant (Scholarship Eligibility)");\r
        TraineeAdmissionRecord tuhina = new TraineeAdmissionRecord(\r
                102, "Tuhina Das", "9876543210", "tuhina.das@naihati.edu", 68.0, 15000.00\r
        );\r
        System.out.println("  Tuhina Entrance Score: " + tuhina.getEntranceScorePercentage() + "% (Threshold: 75.0%)");\r
\r
        try {\r
            System.out.print("  Attempting 30% scholarship grant for Tuhina -> ");\r
            tuhina.setScholarshipDiscountPercentage(30.0);\r
        } catch (IllegalStateException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Testing State Machine Lifecycle Guards\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Testing State Machine Transition Guards");\r
        swadeep.transitionEnrollmentStatus("GRADUATED");\r
\r
        try {\r
            System.out.print("  Attempting to change status of GRADUATED student to SUSPENDED -> ");\r
            swadeep.transitionEnrollmentStatus("SUSPENDED");\r
        } catch (IllegalStateException e) {\r
            System.out.println("CAUGHT & REJECTED: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" SETTER VALIDATION & INTEGRITY DEMONSTRATION COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 14: Adding Business Validation Logic Inside Setters to Protect Object Integrity\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY VALIDATE INSIDE SETTERS?\r
   - Input comes from untrusted external sources (Forms, REST JSON, CSV files).\r
   - An unvalidated setter is an open door to data corruption.\r
   - Validating mutators guarantees that objects are ALWAYS in a valid state.\r
\r
2. THE 5-STAGE SETTER VALIDATION PIPELINE:\r
   -----------------------------------------------------------------------------\r
   STAGE 1: NULL & MANDATORY CHECK\r
            \`Objects.requireNonNull(input, "Field is mandatory");\`\r
   STAGE 2: SANITIZATION & NORMALIZATION\r
            \`String clean = input.trim().toLowerCase();\`\r
   STAGE 3: FORMAT & REGEX BOUNDS\r
            \`if (!PHONE_PATTERN.matcher(clean).matches()) throw ...;\`\r
   STAGE 4: RANGE & NUMERIC LIMITS\r
            \`if (score < 0.0 || score > 100.0) throw ...;\`\r
   STAGE 5: CROSS-FIELD & STATE TRANSITION GUARDS\r
            \`if (discount > 0 && this.score < 75.0) throw IllegalStateException;\`\r
   -----------------------------------------------------------------------------\r
\r
3. EXCEPTION THROWING CONVENTIONS:\r
   - \`IllegalArgumentException\` : Invalid parameter value (negative price, bad email).\r
   - \`NullPointerException\`     : Null passed for mandatory field.\r
   - \`IllegalStateException\`    : Operation forbidden in object's CURRENT state.\r
\r
4. DEFENSIVE BEST PRACTICES:\r
   a) Delegate constructor initialization to setters to reuse validation (DRY).\r
   b) Use precompiled static regex \`Pattern\` objects (\`private static final Pattern\`).\r
   c) Never fail silently (do not just \`return;\`—throw informative exceptions!).\r
   d) Mark setters \`final\` if called inside constructors to prevent child overrides.\r
\r
5. SUKANTA HUI'S BORDER SECURITY LAW:\r
   - "Inspect every passport, sanitize every crate, and reject illegal cargo at the gate.\r
      Every setter is a border checkpoint defending your application's domain truth."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why should setters contain business validation logic instead of blindly assigning parameters?",shortAnswer:"To protect object invariants, reject corrupted/malicious inputs, and guarantee that the object is always in a mathematically and logically valid state.",explanation:"External callers (REST controllers, UI forms, database parsers) can pass invalid data (e.g. negative prices, null names). Validating at the setter gate stops bad data from corrupting system memory.",hint:"Setters guard internal domain invariants against invalid external inputs.",level:"Beginner",codeExample:`public void setAge(int age) {
    if (age < 0 || age > 120) throw new IllegalArgumentException("Invalid age: " + age);
    this.age = age;
}`},{question:"Which standard Java exception should be thrown when a setter argument is invalid?",shortAnswer:"IllegalArgumentException (for bad arguments) and NullPointerException (for null arguments).",explanation:"Standard Java API design specifies throwing IllegalArgumentException (an unchecked RuntimeException) when a parameter violates domain constraints, and NullPointerException (or via Objects.requireNonNull) when a mandatory argument is null.",hint:"IllegalArgumentException for invalid values; NullPointerException for nulls.",level:"Beginner",codeExample:`Objects.requireNonNull(name, "Name cannot be null");
if (name.isBlank()) throw new IllegalArgumentException("Name cannot be blank");`},{question:"What is 'Input Sanitization / Normalization' inside a setter method?",shortAnswer:"Cleaning and standardizing input data (e.g. trimming whitespace, converting email to lowercase, removing punctuation) BEFORE validation and assignment.",explanation:"Sanitization removes extraneous characters (e.g. turning '+91 98301 23456' into '9830123456' or '  SWADEEP@GMAIL.COM ' into 'swadeep@gmail.com') to ensure consistent storage representation.",hint:"Clean data before validating and storing.",level:"Intermediate",codeExample:"this.email = email.trim().toLowerCase();"},{question:"Why should constructors delegate to setter methods for initialization?",shortAnswer:"To reuse validation logic in one single source of truth, avoiding duplicate validation code between constructors and setters.",explanation:"If a constructor writes 'setAge(age);' instead of 'this.age = age;', any change to age validation rules is automatically enforced across both construction and subsequent updates.",hint:"DRY (Don't Repeat Yourself) principle for invariant validation.",level:"Intermediate",codeExample:`public Student(int roll, String name) {
    setRoll(roll); // Reuses setter validation
    setName(name);
}`},{question:"When should an 'IllegalStateException' be thrown from a setter instead of 'IllegalArgumentException'?",shortAnswer:"When the parameter itself is valid, but the object's CURRENT STATE prevents the mutation (e.g. modifying an account that has already been closed).",explanation:"IllegalArgumentException means 'the argument you gave me is bad'; IllegalStateException means 'the object is currently in a state where this operation is forbidden'.",hint:"Bad argument vs Bad object state.",level:"Intermediate",codeExample:`if ("GRADUATED".equals(this.status)) {
    throw new IllegalStateException("Cannot modify record of a graduated student!");
}`},{question:"What is a 'Cross-Field Invariant' and how is it validated in a setter?",shortAnswer:"A business rule that depends on the relationship between two or more fields (e.g. 'discountPercentage > 0 requires entranceScore >= 75.0%').",explanation:"Some validations cannot be evaluated in isolation. A setter must check the incoming parameter against existing instance fields to ensure cross-field consistency.",hint:"Validating one field in relation to another field.",level:"Intermediate",codeExample:`public void setDiscount(double d) {
    if (d > 0 && this.score < 75.0) throw new IllegalStateException("Score too low for discount");
    this.discount = d;
}`},{question:"Why is 'Objects.requireNonNull(arg, message)' preferred over manual 'if (arg == null)' checks?",shortAnswer:"It is concise, standard in Java 7+, throws NullPointerException with a clear informative message, and enables fast JIT inlining.",explanation:`Objects.requireNonNull expresses developer intent directly in one clean line and returns the checked object, allowing fluent assignment: 'this.name = Objects.requireNonNull(name, "Name required");'.`,hint:"Standard, concise, fluent null defense.",level:"Beginner",codeExample:'this.studentName = Objects.requireNonNull(name, "Student name is required");'},{question:"How does precompiling regex 'Pattern' objects improve setter validation performance?",shortAnswer:`Creating 'private static final Pattern PATTERN = Pattern.compile("...")' compiles the regex state machine ONCE at class loading rather than re-compiling it on every setter call.`,explanation:"Using 'String.matches()' compiles a new Pattern object on every single invocation, which creates CPU overhead in high-throughput applications. A static final Pattern executes in microseconds.",hint:"Compile regex once statically; reuse matches() across all calls.",level:"Intermediate",codeExample:`private static final Pattern PHONE_PAT = Pattern.compile("^[6-9]\\\\d{9}$");
public void setPhone(String p) { if (!PHONE_PAT.matcher(p).matches()) throw ...; }`},{question:"What is the 'Fail-Fast' principle in setter validation?",shortAnswer:"Aborting immediately with an exception at the exact moment bad data enters the setter, rather than storing bad data and failing silently later.",explanation:"Failing fast stops corruption at the gate. If a negative price is accepted silently, errors might surface hours later in billing calculations where debugging is 100x harder.",hint:"Reject invalid inputs immediately at the point of entry.",level:"Beginner",codeExample:'if (price < 0) throw new IllegalArgumentException("Price cannot be negative: " + price);'},{question:"Why should setters avoid swallowing errors silently (e.g. logging and continuing without updating)?",shortAnswer:"Because the caller assumes the mutation succeeded, leading to subtle bugs where caller and object hold divergent state expectations.",explanation:"If 'setFee(-500)' just prints a message without updating or throwing, the caller believes the fee was set to -500 while the object quietly retained its old value. Throwing an exception alerts the caller to failure.",hint:"Never fail silently in domain mutators.",level:"Intermediate",codeExample:`// BAD: if (fee < 0) return; // Silent failure!
// GOOD: if (fee < 0) throw new IllegalArgumentException("Invalid fee: " + fee);`},{question:"What is 'String.isBlank()' (Java 11+) and why is it superior to 'String.isEmpty()' in setter validation?",shortAnswer:"'isBlank()' checks if the string is empty OR contains only whitespace characters, whereas 'isEmpty()' returns false for '   '.",explanation:"A string containing three spaces ('   ') has length 3 and is NOT empty, but is completely blank. In Java 11+, 'name.isBlank()' properly catches whitespace-only names.",hint:"isBlank() catches both empty strings and whitespace-only strings.",level:"Beginner",codeExample:'if (name == null || name.isBlank()) throw new IllegalArgumentException("Name cannot be blank");'},{question:"Can a setter method sanitize HTML/JavaScript tags to prevent Stored Cross-Site Scripting (XSS)?",shortAnswer:"Yes! Setters can run HTML entity encoding or HTML sanitizers on string inputs before storing them in database fields.",explanation:"Sanitizing user comments or student bios inside the mutator strips dangerous '<script>' tags before the text is saved to persistent storage.",hint:"XSS prevention through setter sanitization.",level:"Advanced",codeExample:"this.bio = HtmlSanitizer.clean(rawBio);"},{question:"How should a setter handle updating an immutable reference field like 'java.time.LocalDate'?",shortAnswer:"Validate that the date is within logical domain bounds (e.g. birthDate must be in the past: '!date.isAfter(LocalDate.now())').",explanation:"Because LocalDate is immutable, you don't need defensive copying, but you must validate temporal invariants (e.g. enrollment date cannot be in the year 2099).",hint:"Validate temporal domain constraints on date fields.",level:"Intermediate",codeExample:'if (birthDate.isAfter(LocalDate.now())) throw new IllegalArgumentException("Birth date cannot be in the future");'},{question:"What is 'Clamping' in setter methods, and when is it appropriate vs throwing exceptions?",shortAnswer:"Clamping constrains an out-of-bounds value to the nearest legal limit (e.g. volume < 0 becomes 0, > 100 becomes 100).",explanation:"Clamping is common in UI controls (audio sliders, opacity levels, bounding boxes) where user gestures exceed bounds, whereas financial/domain entities strictly demand throwing exceptions.",hint:"Constrain to min/max vs Throwing exceptions.",level:"Intermediate",codeExample:"public void setVolume(int v) { this.volume = Math.max(0, Math.min(100, v)); } // Clamping"},{question:"How can Bean Validation annotations (Jakarta Validation) complement setter validation?",shortAnswer:"Annotations (@NotNull, @Min, @Pattern) provide declarative metadata for frameworks, while setter code provides programmatic runtime enforcement.",explanation:"Combining declarative annotations with programmatic setter validation provides layered defense: frameworks validate HTTP payloads before calling setters, and setters defend invariants if invoked directly in unit tests.",hint:"Dual defense: framework annotations + runtime setter guards.",level:"Advanced",codeExample:"@Min(0) @Max(100) public void setMarks(int marks) { if (marks < 0 || marks > 100) throw ...; this.marks = marks; }"},{question:"Why should setters avoid calling overridable public methods of the same class during validation?",shortAnswer:"If a subclass overrides that method, it may execute on partially initialized child state, causing unexpected behavior or NullPointerExceptions.",explanation:"In Java, calling an overridable method inside a constructor or setter can invoke the child's implementation before the child has finished initializing. Use private helper methods for validation.",hint:"Use private or final helper methods for internal validation.",level:"Advanced",codeExample:"public void setCode(String c) { validateCodePrivate(c); this.code = c; } // Private helper is safe"},{question:"What is 'Atomic Mutation' in a setter that updates multiple related internal variables?",shortAnswer:"Ensuring that either ALL related variables update successfully or NONE update if an exception occurs.",explanation:"If a setter computes multiple derived values, perform all validations and computations into local variables FIRST, and only assign to 'this.fields' once all checks pass completely.",hint:"Validate all steps before mutating instance fields.",level:"Advanced",codeExample:`double newTax = computeTax(amt); // Validate first
this.amount = amt; this.tax = newTax; // Atomic update`},{question:"Can a setter method validate against an external database or external API?",shortAnswer:"Technically possible, but strongly discouraged because it mixes entity state management with network I/O and creates high latency.",explanation:"Database uniqueness checks (e.g. 'isEmailUnique(email)') belong in a Service Layer (Domain Service), not inside the in-memory entity setter.",hint:"Entity setters validate format and invariants; Services validate external database uniqueness.",level:"Intermediate",codeExample:"// Service layer checks DB uniqueness; Entity setter checks email regex format"},{question:"What is a 'State Transition Matrix' and how does a setter enforce it?",shortAnswer:"A lookup table or conditional check specifying which status changes are legal (e.g. NEW → PROCESSING is valid; CANCELLED → DELIVERED is invalid).",explanation:"Finite State Machines enforce lifecycle transitions. A setter like 'transitionStatus(newStatus)' checks if the requested transition is in the allowed set and rejects illegal jumps.",hint:"State machine lifecycle transition enforcement.",level:"Intermediate",codeExample:'if (!currentStatus.canTransitionTo(newStatus)) throw new IllegalStateException("Invalid transition!");'},{question:"Why should setter methods be made 'final' if they are called inside constructors?",shortAnswer:"To guarantee that a subclass cannot override the setter and bypass crucial invariant validation during object construction.",explanation:"Marking 'public final void setRoll(int r)' ensures that every subclass instance is constructed using the parent's exact validation rules without risk of override.",hint:"Final setters prevent subclass validation tampering.",level:"Intermediate",codeExample:"public final void setRollNumber(int r) { if (r <= 0) throw ...; this.roll = r; }"},{question:"How does Java 14+ Record Compact Constructor simplify setter-style validation?",shortAnswer:"It allows writing validation logic once without repeating parameter assignments ('this.field = field' is implicit).",explanation:"In records, the compact constructor 'public TraineeRecord { if (roll <= 0) throw ...; }' validates components before canonical assignment automatically.",hint:"Compact constructor validation in modern Java records.",level:"Beginner",codeExample:`public record Student(int roll, String name) {
    public Student {
        if (roll <= 0) throw new IllegalArgumentException();
    }
}`},{question:"What is the danger of returning 'boolean' (true/false) from a setter instead of throwing an exception on validation failure?",shortAnswer:"Callers frequently ignore boolean return values, leading to silent failures and undetected bugs.",explanation:"Writing 'boolean setAge(int age)' lets callers write 'student.setAge(-5);' without checking the return value. Throwing IllegalArgumentException forces explicit error handling.",hint:"Throw exceptions to guarantee failure notification.",level:"Beginner",codeExample:`// BAD: public boolean setAge(int age) { ... return false; }
// GOOD: public void setAge(int age) { if (bad) throw new IllegalArgumentException(); }`},{question:"How should a setter handle setting a password with complexity requirements?",shortAnswer:"Validate length (>= 8 chars), character classes (uppercase, lowercase, digit, special symbol), and immediately hash it before storing.",explanation:"The setter acts as the security boundary: validate complexity rules, reject weak passwords with descriptive error messages, and hash with salt.",hint:"Complexity validation + Cryptographic hashing inside the mutator.",level:"Intermediate",codeExample:`public void setPassword(String p) {
    if (!isComplex(p)) throw new IllegalArgumentException("Password too weak");
    this.hash = hash(p);
}`},{question:"What is 'Deep Validation' when a setter accepts another object reference (e.g. 'setAddress(Address a)')?",shortAnswer:"Checking that the passed child object is not null AND that its internal state is valid and non-corrupted.",explanation:"If an entity receives an Address object, it should verify 'Objects.requireNonNull(a)' and optionally assert that the address contains valid postal codes before linking.",hint:"Validating child object integrity before linking.",level:"Intermediate",codeExample:`public void setAddress(Address a) {
    Objects.requireNonNull(a, "Address required");
    if (a.getZipCode() == null) throw new IllegalArgumentException("Zip required");
    this.address = a;
}`},{question:"Can a setter trigger asynchronous audit logging without blocking the caller?",shortAnswer:"Yes! By publishing an event (e.g. 'eventPublisher.publishEvent(new StateChangedEvent(this))') to an async event bus.",explanation:"Setters can record state changes into message queues or reactive streams for decoupled audit tracking without slowing down transaction processing.",hint:"Decoupled async audit via event publishing.",level:"Advanced",codeExample:"public void setStatus(Status s) { this.status = s; eventBus.publish(new StatusChangeEvent(s)); }"},{question:"What is 'Temporal Validation' in setters handling start and end dates?",shortAnswer:"Ensuring that the start date precedes the end date ('startDate.isBefore(endDate)').",explanation:"When setting an end date, verify that it is not before the current start date, preventing negative duration intervals.",hint:"Ensure chronological validity across date fields.",level:"Intermediate",codeExample:`public void setEndDate(LocalDate end) {
    if (end.isBefore(this.startDate)) throw new IllegalArgumentException("End cannot be before start");
    this.endDate = end;
}`},{question:"How should a setter handle floating-point edge cases like 'Double.NaN' or 'Double.POSITIVE_INFINITY'?",shortAnswer:"Explicitly check 'Double.isNaN(value)' and 'Double.isInfinite(value)' and reject them with IllegalArgumentException.",explanation:"Accepting NaN or Infinity can corrupt arithmetic pipelines and financial calculations down the line. Always validate for finite numbers.",hint:"Reject NaN and Infinite floating-point values in financial setters.",level:"Intermediate",codeExample:'if (!Double.isFinite(fee) || fee < 0) throw new IllegalArgumentException("Invalid fee: " + fee);'},{question:"What is the 'Self-Defending Object' pattern in Domain-Driven Design (DDD)?",shortAnswer:"An entity that encapsulates all validation rules internally, making it impossible to exist in an invalid state regardless of external context.",explanation:"Rather than relying on controllers or UI screens to remember validation rules, the entity itself rigorously enforces all invariants in constructors and setters.",hint:"Entities enforce their own domain truth.",level:"Advanced",codeExample:"// Self-defending entity: Rejects bad state anywhere in the application"},{question:"Why should error messages in thrown exceptions be rich and descriptive?",shortAnswer:"To drastically reduce debugging time in production logs by identifying the exact field name, the invalid value passed, and the violated rule.",explanation:`Throwing 'throw new IllegalArgumentException("Score must be 0-100, got: " + score);' gives instant root-cause clarity in server stack traces.`,hint:"Include parameter name, bad value, and expected constraint in error messages.",level:"Beginner",codeExample:'throw new IllegalArgumentException("Entrance score must be 0.0-100.0%. Supplied: " + val);'},{question:"What is Sukanta Hui's Border Security Metaphor for Setters taught at the Barrackpore Academy?",shortAnswer:"A country without border security collapses from within; a class without validated setters collapses from data corruption. Inspect every passport, sanitize every crate, and turn away illegal cargo at the gate.",explanation:"At the Barrackpore academy, Sukanta Hui emphasizes that software bugs cost millions because bad data slips into databases undetected. By placing strict sanitization, range checks, and state transition guards inside your mutators, your systems run resilient, secure, and rock-solid.",hint:"Inspect every passport, sanitize every crate, defend your domain.",level:"Beginner",codeExample:`// Sukanta Hui's Setter Guard Pattern:
// 1. Objects.requireNonNull → 2. Sanitize/Trim → 3. Range/Format Check → 4. Invariant Guard → 5. Assign`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes checkpointPulse {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-checkpoint {
            animation: checkpointPulse 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Domain Invariant & Integrity Defense"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Adding Business Validation Logic Inside Setters to Protect Object Integrity"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the defensive implementation of mutator methods: turning setters into rigorous border checkpoints through input sanitization, precompiled regex format bounds, numeric range limits, cross-field conditional invariants, and state transition lifecycle guards."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," The 5-Stage Setter Validation Pipeline"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"An unvalidated setter leaves an application vulnerable to corrupted memory, invalid calculations, and security leaks. A production-ready setter executes a disciplined 5-stage validation pipeline:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-xs mb-1",children:"1. Null Check"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:[e.jsx("code",{className:"text-sky-300",children:"Objects.requireNonNull()"})," rejects missing references."]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-xs mb-1",children:"2. Sanitization"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs",children:"Trim spaces, strip formatting symbols, and lowercase emails."})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-xs mb-1",children:"3. Regex Bounds"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs",children:"Validate phone numbers & emails with static regex patterns."})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-xs mb-1",children:"4. Range Checks"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:["Enforce numeric bounds: ",e.jsx("code",{className:"text-amber-300",children:"score ≥ 0 && score ≤ 100"}),"."]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-rose-400 font-bold text-xs mb-1",children:"5. State Invariants"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs",children:"Guard cross-field logic and block illegal lifecycle jumps."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-amber-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-amber-300",children:"Classroom Case Study (Barrackpore Trainee Admission System):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," was registered, our setter sanitized his phone number from ",e.jsx("code",{className:"text-slate-200 font-mono",children:"+91 98301 23456"})," to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"9830123456"}),", lowercased his email, verified his 92.5% entrance score, and granted a 25% merit scholarship. When an unauthorized change attempted to assign scholarship to a student below 75% or modify a GRADUATED student, the setter threw an ",e.jsx("code",{className:"text-rose-400 font-mono",children:"IllegalStateException"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The Setter Checkpoint Pipeline: Input → Inspection → Safe Mutation vs Exception"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing the decision flow of a guarded setter method defending object integrity:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 310",className:"w-full h-auto","aria-label":"Setter Validation Pipeline Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"pipeArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"rejectArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#ef4444"})}),e.jsx("marker",{id:"passArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})]}),e.jsx("rect",{x:"25",y:"25",width:"200",height:"260",rx:"10",fill:"#0f172a",stroke:"#64748b",strokeWidth:"2"}),e.jsx("text",{x:"125",y:"52",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"INCOMING UNTRUSTED INPUT"}),e.jsx("text",{x:"125",y:"68",fill:"#64748b",fontSize:"8",textAnchor:"middle",children:"REST JSON / UI Form / CSV"}),e.jsx("rect",{x:"35",y:"85",width:"180",height:"40",rx:"4",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"105",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:'rawPhone = "+91 98301 23456"'}),e.jsx("text",{x:"45",y:"118",fill:"#94a3b8",fontSize:"8",children:"or rawScore = 150.0"}),e.jsx("rect",{x:"35",y:"135",width:"180",height:"40",rx:"4",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"155",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:'rawEmail = "Swadeep@EDU"'}),e.jsx("text",{x:"45",y:"168",fill:"#94a3b8",fontSize:"8",children:"Mixed casing & whitespaces"}),e.jsx("rect",{x:"35",y:"185",width:"180",height:"85",rx:"4",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"205",fill:"#f87171",fontSize:"9",fontWeight:"bold",children:"Potential Hazards:"}),e.jsx("text",{x:"45",y:"222",fill:"#fca5a5",fontSize:"8",children:"• Null pointers"}),e.jsx("text",{x:"45",y:"238",fill:"#fca5a5",fontSize:"8",children:"• Negative/overflow values"}),e.jsx("text",{x:"45",y:"254",fill:"#fca5a5",fontSize:"8",children:"• Malformed string formats"}),e.jsx("rect",{x:"260",y:"25",width:"370",height:"260",rx:"10",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"445",y:"52",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"GUARDED SETTER CHECKPOINT PIPELINE"}),e.jsx("text",{x:"445",y:"68",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Step-by-step invariant enforcement"}),e.jsx("rect",{x:"275",y:"85",width:"340",height:"35",rx:"4",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"285",y:"105",fill:"#fef3c7",fontSize:"9",fontFamily:"monospace",children:"1. Objects.requireNonNull(input)"}),e.jsx("rect",{x:"275",y:"125",width:"340",height:"35",rx:"4",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"285",y:"145",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"2. Sanitize: trim().replaceAll()"}),e.jsx("rect",{x:"275",y:"165",width:"340",height:"35",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"285",y:"185",fill:"#e0e7ff",fontSize:"9",fontFamily:"monospace",children:"3. Regex Pattern Bounds & Range Checks"}),e.jsx("rect",{x:"275",y:"205",width:"340",height:"35",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"285",y:"225",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"4. Cross-Field & Lifecycle State Guards"}),e.jsx("rect",{x:"665",y:"25",width:"230",height:"120",rx:"8",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"780",y:"52",fill:"#f87171",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"VIOLATION: FAIL-FAST"}),e.jsx("text",{x:"675",y:"75",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"throw IllegalArgumentException"}),e.jsx("text",{x:"675",y:"92",fill:"#fca5a5",fontSize:"8",fontFamily:"monospace",children:"or IllegalStateException"}),e.jsx("text",{x:"675",y:"112",fill:"#fca5a5",fontSize:"8",children:"• Zero state corruption in Heap"}),e.jsx("rect",{x:"665",y:"160",width:"230",height:"125",rx:"8",fill:"#022c22",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"780",y:"185",fill:"#34d399",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"PASS: SAFE MUTATION"}),e.jsx("text",{x:"675",y:"208",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'this.contactPhone = "9830123456"'}),e.jsx("text",{x:"675",y:"225",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'this.verifiedEmail = "swadeep@edu"'}),e.jsx("text",{x:"675",y:"250",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"&check; 100% Invariant Compliant"}),e.jsx("path",{d:"M 225 105 L 260 105",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#pipeArrow)"}),e.jsx("path",{d:"M 630 105 L 665 75",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#rejectArrow)"}),e.jsx("path",{d:"M 630 225 L 665 225",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#passArrow)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"SetterValidationAndIntegrityDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The executable code below illustrates input sanitization, regex formatting, range validation, conditional invariants, and state transition guards:"}),e.jsx(t,{fileName:"SetterValidationAndIntegrityDemo.java",code:i})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Fail-Fast Principle"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Throw descriptive unchecked exceptions (",e.jsx("code",{className:"text-sky-300 font-mono",children:"IllegalArgumentException"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"IllegalStateException"}),") immediately upon detecting invalid inputs rather than failing silently."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Precompiled Regex Efficiency"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Always compile regex patterns once as ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"private static final Pattern"})," to avoid expensive regex recompilation on every setter execution."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Constructors Delegate to Setters (DRY)"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Calling validated setters inside constructors guarantees that initialization and subsequent updates share the exact same validation rules without code duplication."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Cross-Field & State Guards"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Setters can inspect relationships between multiple fields (e.g. scholarship vs entrance score) and lock operations once an entity reaches terminal states (e.g. GRADUATED)."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Silent Failure via Empty Returns or Log-Only"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if (fee < 0) return;"})," hides errors from callers, leading to silent state desynchronization and corrupted transaction records."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// BUG-PRONE: Caller thinks fee was updated!
public void setFee(double fee) {
    if (fee < 0) return; // NEVER FAIL SILENTLY!
    this.fee = fee;
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Explicit Informative Exception Throwing"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Throw an exception with a rich error message containing the field name, supplied invalid value, and expected constraint."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// SAFE: Instant feedback in production stack traces
public void setFee(double fee) {
    if (fee < 0.0) throw new IllegalArgumentException("Fee cannot be negative: ₹" + fee);
    this.fee = fee;
}`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 p-6 md:p-8 rounded-2xl border border-amber-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why should database uniqueness checks NOT be placed inside entity setters?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Entity classes belong in the ",e.jsx("strong",{children:"Domain Layer"})," and should remain lightweight, pure in-memory representations. If a setter executes ",e.jsx("code",{className:"text-amber-300 font-mono",children:"database.isEmailUnique(email)"}),", it introduces network latency, database connection dependencies, and breaks unit tests. Unique constraints belong in a ",e.jsx("strong",{children:"Domain Service"})," or database unique index; entity setters focus strictly on format, range, sanitization, and state invariants!"]})]}),e.jsx(r,{quote:"A country without border security collapses from within; a class without validated setters collapses from data corruption. Inspect every passport, sanitize every crate, and turn away illegal cargo at the gate.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:l})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(a,{content:s,fileName:"Topic14_Setter_Validation_and_Integrity_Note.txt"})]})]})}export{x as default};

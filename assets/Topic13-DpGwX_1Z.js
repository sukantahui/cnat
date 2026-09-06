import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 13: Getter and Setter Methods: Accessor and Mutator Conventions\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: The JavaBeans Specification & Accessor/Mutator Patterns\r
 * ----------------------------------------------------------------------------\r
 * 1. What are Getters (Accessors) and Setters (Mutators)?\r
 *    - Standardized public methods used to read (get) and update (set) private fields.\r
 *    - They form the official Java contract defined in the JavaBeans API Specification (1997).\r
 *\r
 * 2. Official JavaBean Naming Conventions:\r
 *    -------------------------------------------------------------------------\r
 *    PROPERTY TYPE      FIELD NAME         GETTER CONVENTION      SETTER CONVENTION\r
 *    -------------------------------------------------------------------------\r
 *    Object/Primitive   studentName        getStudentName()       setStudentName(String n)\r
 *    Numeric            courseFeeInr       getCourseFeeInr()      setCourseFeeInr(double f)\r
 *    boolean (Primitive)isScholarshipHolder isScholarshipHolder()  setScholarshipHolder(boolean b)\r
 *    Boolean (Wrapper)  isEnrolled         getIsEnrolled()        setIsEnrolled(Boolean b)\r
 *    Indexed Array/List skills             getSkills(int i)       setSkills(int i, String s)\r
 *    -------------------------------------------------------------------------\r
 *\r
 * 3. Why Frameworks Rely on JavaBean Conventions:\r
 *    - Spring Boot (JSON serialization via Jackson)\r
 *    - Hibernate / JPA (Entity property mapping)\r
 *    - Jakarta EE / Struts / JSP (EL expression \`\${student.studentName}\`)\r
 *    All frameworks inspect class metadata via Reflection to find \`get...\` and \`set...\`\r
 *    methods rather than reading fields directly!\r
 *\r
 * 4. Fluent Setters:\r
 *    - Standard JavaBeans specify \`void setProperty(...)\`, but modern fluent builders\r
 *      return \`this\` (\`return this;\`) for method chaining.\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class GettersSettersConventionsDemo {\r
\r
    // ------------------------------------------------------------------------\r
    // Domain Class: TraineeEnrollmentBean (Strict JavaBean Standard)\r
    // ------------------------------------------------------------------------\r
    public static class TraineeEnrollmentBean {\r
\r
        // --- Private Encapsulated Properties ---\r
        private int rollNumber;\r
        private String studentFullName;\r
        private double courseFeeInr;\r
        private boolean activeScholarship;   // Primitive boolean -> uses is...() getter\r
        private Boolean remoteAccessGranted; // Wrapper Boolean -> uses get...() getter\r
        private List<String> technicalSkillsList;\r
\r
        // No-Arg Constructor (Mandatory for JavaBean Specification & Frameworks)\r
        public TraineeEnrollmentBean() {\r
            this.technicalSkillsList = new ArrayList<>();\r
        }\r
\r
        // Parameterized Constructor\r
        public TraineeEnrollmentBean(int rollNumber, String studentFullName, double courseFeeInr, boolean activeScholarship) {\r
            this();\r
            this.rollNumber = rollNumber;\r
            this.studentFullName = studentFullName;\r
            this.courseFeeInr = courseFeeInr;\r
            this.activeScholarship = activeScholarship;\r
            this.remoteAccessGranted = Boolean.FALSE;\r
        }\r
\r
        // --- Standard JavaBean Accessors (Getters) ---\r
        public int getRollNumber() {\r
            return rollNumber;\r
        }\r
\r
        public String getStudentFullName() {\r
            return studentFullName;\r
        }\r
\r
        public double getCourseFeeInr() {\r
            return courseFeeInr;\r
        }\r
\r
        // Primitive boolean getter: 'is' prefix convention\r
        public boolean isActiveScholarship() {\r
            return activeScholarship;\r
        }\r
\r
        // Wrapper Boolean getter: 'get' prefix convention\r
        public Boolean getRemoteAccessGranted() {\r
            return remoteAccessGranted;\r
        }\r
\r
        // Encapsulated collection getter (Unmodifiable View)\r
        public List<String> getTechnicalSkillsList() {\r
            return Collections.unmodifiableList(this.technicalSkillsList);\r
        }\r
\r
        // Indexed Accessor: getSkill at index\r
        public String getSkill(int index) {\r
            if (index >= 0 && index < technicalSkillsList.size()) {\r
                return technicalSkillsList.get(index);\r
            }\r
            return null;\r
        }\r
\r
        // --- Standard JavaBean Mutators (Setters) ---\r
        public void setRollNumber(int rollNumber) {\r
            if (rollNumber <= 0) {\r
                System.out.println("  [Setter Warning] Roll number must be positive. Rejected: " + rollNumber);\r
                return;\r
            }\r
            this.rollNumber = rollNumber;\r
        }\r
\r
        public void setStudentFullName(String studentFullName) {\r
            if (studentFullName == null || studentFullName.trim().isEmpty()) {\r
                System.out.println("  [Setter Warning] Full name cannot be blank.");\r
                return;\r
            }\r
            this.studentFullName = studentFullName.trim();\r
        }\r
\r
        public void setCourseFeeInr(double courseFeeInr) {\r
            if (courseFeeInr < 0.0) {\r
                System.out.println("  [Setter Warning] Course fee cannot be negative. Rejected: ₹" + courseFeeInr);\r
                return;\r
            }\r
            this.courseFeeInr = courseFeeInr;\r
        }\r
\r
        public void setActiveScholarship(boolean activeScholarship) {\r
            this.activeScholarship = activeScholarship;\r
        }\r
\r
        public void setRemoteAccessGranted(Boolean remoteAccessGranted) {\r
            this.remoteAccessGranted = (remoteAccessGranted != null) ? remoteAccessGranted : Boolean.FALSE;\r
        }\r
\r
        // Indexed Mutator / Helper\r
        public void addSkill(String skill) {\r
            if (skill != null && !skill.trim().isEmpty()) {\r
                this.technicalSkillsList.add(skill.trim());\r
            }\r
        }\r
\r
        // --- Modern Fluent Setter Variant (Returns 'this' for chaining) ---\r
        public TraineeEnrollmentBean withStudentFullName(String name) {\r
            setStudentFullName(name);\r
            return this;\r
        }\r
\r
        public TraineeEnrollmentBean withCourseFeeInr(double fee) {\r
            setCourseFeeInr(fee);\r
            return this;\r
        }\r
\r
        public void printBeanSummary() {\r
            System.out.println("  +-------------------------------------------------------------+");\r
            System.out.printf("  | Roll Number    : %-42d |\\n", rollNumber);\r
            System.out.printf("  | Student Name   : %-42s |\\n", studentFullName);\r
            System.out.printf("  | Course Fee     : ₹%-42.2f |\\n", courseFeeInr);\r
            System.out.printf("  | Has Scholarship: %-42b |\\n", activeScholarship);\r
            System.out.printf("  | Remote Access  : %-42s |\\n", remoteAccessGranted);\r
            System.out.printf("  | Skills Count   : %-42d |\\n", technicalSkillsList.size());\r
            System.out.printf("  | Skills Items   : %-42s |\\n", technicalSkillsList.toString());\r
            System.out.println("  +-------------------------------------------------------------+");\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Simulated JSON Serializer using JavaBean Reflection Conventions\r
    // ------------------------------------------------------------------------\r
    public static void simulateJacksonJsonSerialization(TraineeEnrollmentBean bean) {\r
        System.out.println("  --> [Simulating Jackson JSON Serializer]");\r
        System.out.println("      Jackson discovers getters via reflection: getRollNumber(), getStudentFullName(), etc.");\r
        System.out.println("      Generated JSON Payload:");\r
        System.out.println("      {");\r
        System.out.printf("        \\"rollNumber\\": %d,\\n", bean.getRollNumber());\r
        System.out.printf("        \\"studentFullName\\": \\"%s\\",\\n", bean.getStudentFullName());\r
        System.out.printf("        \\"courseFeeInr\\": %.2f,\\n", bean.getCourseFeeInr());\r
        System.out.printf("        \\"activeScholarship\\": %b,\\n", bean.isActiveScholarship());\r
        System.out.printf("        \\"remoteAccessGranted\\": %s,\\n", bean.getRemoteAccessGranted());\r
        System.out.printf("        \\"skills\\": %s\\n", bean.getTechnicalSkillsList().toString());\r
        System.out.println("      }");\r
        System.out.println("  <-- [Serialization Complete]\\n");\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Demonstrations of Accessor/Mutator Conventions\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: JAVABEAN GETTERS & SETTERS CONVENTIONS");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 1: Instantiating Bean & Modifying via Setters\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> DEMO 1: Instantiating TraineeEnrollmentBean for Swadeep Paul (Barrackpore)");\r
        TraineeEnrollmentBean swadeepBean = new TraineeEnrollmentBean();\r
\r
        // Mutating fields via standard setters\r
        swadeepBean.setRollNumber(101);\r
        swadeepBean.setStudentFullName("Swadeep Paul");\r
        swadeepBean.setCourseFeeInr(8500.00);\r
        swadeepBean.setActiveScholarship(true);\r
        swadeepBean.setRemoteAccessGranted(Boolean.TRUE);\r
        swadeepBean.addSkill("Core Java");\r
        swadeepBean.addSkill("Spring Boot");\r
        swadeepBean.addSkill("PostgreSQL");\r
\r
        swadeepBean.printBeanSummary();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 2: Reading Properties via Getters (Standard vs Boolean Conventions)\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 2: Inspecting Accessor Conventions");\r
        System.out.println("  getRollNumber()             : " + swadeepBean.getRollNumber());\r
        System.out.println("  getStudentFullName()        : " + swadeepBean.getStudentFullName());\r
        System.out.println("  getCourseFeeInr()           : ₹" + swadeepBean.getCourseFeeInr());\r
        System.out.println("  isActiveScholarship()       : " + swadeepBean.isActiveScholarship() + " (Primitive boolean uses 'is')");\r
        System.out.println("  getRemoteAccessGranted()    : " + swadeepBean.getRemoteAccessGranted() + " (Wrapper Boolean uses 'get')");\r
        System.out.println("  getSkill(0) [Indexed]       : " + swadeepBean.getSkill(0));\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 3: Testing Invariant Guards inside Setters\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 3: Testing Validation Logic in Mutators");\r
        System.out.println("Attempting invalid fee: swadeepBean.setCourseFeeInr(-5000.0);");\r
        swadeepBean.setCourseFeeInr(-5000.0); // Rejected!\r
\r
        System.out.println("Attempting blank name: swadeepBean.setStudentFullName(\\"  \\");");\r
        swadeepBean.setStudentFullName("  "); // Rejected!\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 4: Modern Fluent Builder Chaining\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 4: Modern Fluent Chaining on Tuhina Das (Naihati)");\r
        TraineeEnrollmentBean tuhinaBean = new TraineeEnrollmentBean()\r
                .withStudentFullName("Tuhina Das")\r
                .withCourseFeeInr(9200.00);\r
        tuhinaBean.setRollNumber(102);\r
        tuhinaBean.setActiveScholarship(true);\r
        tuhinaBean.addSkill("Microservices");\r
        tuhinaBean.addSkill("Docker & Kubernetes");\r
\r
        tuhinaBean.printBeanSummary();\r
\r
        // --------------------------------------------------------------------\r
        // DEMO 5: Simulating Framework JSON Reflection\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> DEMO 5: How Spring Boot / Jackson Utilizes JavaBean Getters");\r
        simulateJacksonJsonSerialization(swadeepBean);\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVABEAN GETTER & SETTER CONVENTIONS DEMO COMPLETE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 13: Getter and Setter Methods: Accessor and Mutator Conventions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVABEAN SPECIFICATION NAMING CONVENTIONS:\r
   -----------------------------------------------------------------------------\r
   PROPERTY TYPE       FIELD NAME          GETTER SYNTAX          SETTER SYNTAX\r
   -----------------------------------------------------------------------------\r
   Standard Objects    studentName         getStudentName()       setStudentName(String s)\r
   Numeric Primitives  courseFeeInr        getCourseFeeInr()      setCourseFeeInr(double d)\r
   boolean (Primitive) activeScholarship   isActiveScholarship()  setActiveScholarship(boolean b)\r
   Boolean (Wrapper)   remoteAccessGranted getRemoteAccessGranted() setRemoteAccessGranted(Boolean b)\r
   Indexed Elements    skills              getSkill(int i)        setSkill(int i, String s)\r
   -----------------------------------------------------------------------------\r
\r
2. WHY FRAMEWORKS RELY ON JAVABEANS:\r
   - Spring Boot (Jackson JSON mapping, form binding).\r
   - Hibernate / JPA (Entity column mapping via property access).\r
   - Jakarta EE / JSP (EL expression \`\${student.studentName}\`).\r
   - Frameworks inspect method names via Java Reflection Introspection to pair\r
     \`get...\` and \`set...\` with JSON keys and database columns.\r
\r
3. MODERN CONVENTIONS & VARIANTS:\r
   - Fluent Setters: Return \`this\` (\`return this;\`) for method chaining.\r
   - Java 16+ Records: Omit \`get\` prefix and use \`student.name()\` directly.\r
   - Virtual Properties: Computed on the fly in a getter without dedicated field.\r
\r
4. DEFENSIVE BEST PRACTICES:\r
   a) Validate all arguments inside setters (Throw \`IllegalArgumentException\` on error).\r
   b) Return unmodifiable views or cloned copies for arrays and collections.\r
   c) Never return \`null\` for collection getters (return \`Collections.emptyList()\`).\r
   d) Avoid heavy I/O, database queries, or blocking operations inside getters.\r
\r
5. SUKANTA HUI'S GOLDEN RULE:\r
   - "Every setter is a border security checkpoint; every getter is a protective\r
      diplomatic courier. Guard your gates and respect JavaBean naming standards."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the JavaBean Specification convention for Accessor (Getter) methods?",shortAnswer:"Prefix 'get' followed by the capitalized property name (e.g. 'getStudentName()'); for primitive boolean types, prefix 'is' (e.g. 'isActive()').",explanation:"The JavaBeans standard defines 'get<PropertyName>()' for returning a field's value without parameters. For primitive booleans, 'is<PropertyName>()' or 'has<PropertyName>()' is the official standard.",hint:"get for standard types; is for primitive booleans.",level:"Beginner",codeExample:`public String getName() { return name; }
public boolean isEnrolled() { return isEnrolled; }`},{question:"What is the JavaBean Specification convention for Mutator (Setter) methods?",shortAnswer:"Prefix 'set' followed by the capitalized property name, taking 1 argument of the property's type and returning 'void'.",explanation:"A standard setter must have the signature 'public void set<PropertyName>(PropertyType value)'. It mutates the internal state and optionally validates input.",hint:"set + CapitalizedName with void return.",level:"Beginner",codeExample:"public void setName(String name) { this.name = name; }"},{question:"Why do frameworks like Spring Boot, Jackson, and Hibernate strictly require JavaBean naming conventions?",shortAnswer:"Because they use Reflection and Introspection to dynamically discover properties, serialize JSON, bind form parameters, and map database columns.",explanation:`Jackson looks for 'getStudentName()' to create the JSON key '"studentName"'. Hibernate inspects 'setBalance()' to populate entity state from database rows. Violating conventions breaks framework automation.`,hint:"Reflection introspection relies on standardized prefixes.",level:"Intermediate",codeExample:'// Jackson converts getCourseFee() → { "courseFee": 8500.0 }'},{question:"What is the naming rule difference between primitive 'boolean' and wrapper 'Boolean' getters?",shortAnswer:"Primitive 'boolean' uses 'isPropertyName()'; Wrapper 'Boolean' (object reference) uses 'getPropertyName()'.",explanation:"Because a wrapper Boolean can be 'null' in addition to true/false, the JavaBeans spec dictates that object wrappers use 'get', while only primitive booleans use 'is'.",hint:"Primitive boolean = is...(); Wrapper Boolean = get...().",level:"Intermediate",codeExample:`private boolean active;       // public boolean isActive()
private Boolean remoteAccess; // public Boolean getRemoteAccess()`},{question:"What is an 'Indexed Getter/Setter' in the JavaBeans specification?",shortAnswer:"Methods that get or set an individual element at a specific index in an array or collection property.",explanation:"Indexed accessors follow the signature: 'public T getProperty(int index)' and 'public void setProperty(int index, T value)', allowing item-level access without returning the whole collection.",hint:"Index-based element accessors.",level:"Intermediate",codeExample:`public String getSkill(int index) { return skills[index]; }
public void setSkill(int index, String skill) { this.skills[index] = skill; }`},{question:"What is a 'Fluent Setter' and how does it deviate from traditional JavaBeans?",shortAnswer:"A fluent setter returns 'this' (the object reference) instead of 'void' to enable method chaining.",explanation:"While JavaBeans standard specifies 'void', modern builder APIs return 'this' (e.g. 'public Student withName(String n) { this.name = n; return this; }'), enabling chained invocations.",hint:"Returns 'this' for method chaining.",level:"Beginner",codeExample:"public Student withName(String name) { this.name = name; return this; }"},{question:"Why should a field name with two consecutive uppercase letters (e.g. 'uName') be avoided?",shortAnswer:"It causes Introspector decapitalization ambiguity in JavaBeans property mapping (e.g. 'getuName()' vs 'getUName()').",explanation:"The JavaBeans spec dictates that if the first two characters of a property are capitalized (e.g. 'URL'), decapitalization keeps both uppercase. Odd casings like 'uName' or 'eMail' create bugs in Jackson and Spring binding.",hint:"Stick to standard camelCase like 'userName' or 'email'.",level:"Advanced",codeExample:`// BAD: private String eMail; → Getter: geteMail() vs getEMail()
// GOOD: private String email; → Getter: getEmail()`},{question:"What is the difference between a JavaBean and a POJO (Plain Old Java Object)?",shortAnswer:"A JavaBean is a stricter POJO that implements Serializable, has a no-arg constructor, and exposes private fields via standard getters/setters.",explanation:"All JavaBeans are POJOs, but not all POJOs are JavaBeans. A POJO can have any constructor or method signature, whereas a JavaBean strictly complies with the 1997 Component specification.",hint:"JavaBean = POJO + Serializable + No-arg constructor + Getters/Setters.",level:"Beginner",codeExample:"// JavaBean: public class Student implements Serializable { public Student() {} ... }"},{question:"Why should getter methods generally avoid performing heavy I/O or network calls?",shortAnswer:"Getters are expected by frameworks and developers to be lightweight, idempotent, side-effect-free, and execute in O(1) time.",explanation:"Frameworks (like debuggers, serializers, and UI binders) call getters frequently. If a getter triggers a database query or REST call, it can cause latency spikes, N+1 query problems, and thread blocking.",hint:"Getters must be fast, lightweight, and side-effect-free.",level:"Intermediate",codeExample:`// BAD: public double getBalance() { return fetchFromRemoteBankApi(); }
// GOOD: public double getBalance() { return this.balance; }`},{question:"Can a getter method compute a derived property that has no underlying field?",shortAnswer:"Yes! A 'Virtual Property' calculates its return value on the fly from other existing fields.",explanation:`Writing 'public String getFullName() { return firstName + " " + lastName; }' exposes a 'fullName' property to frameworks and callers even though no 'private String fullName' field exists.`,hint:"Calculated property without dedicated field storage.",level:"Beginner",codeExample:'public String getFullName() { return firstName + " " + lastName; }'},{question:"How does Project Lombok (@Getter / @Setter) generate accessors at compile-time?",shortAnswer:"Using an Annotation Processor that modifies the Abstract Syntax Tree (AST) to inject standard getter/setter bytecode during compilation.",explanation:"Lombok eliminates boilerplate code by generating compliant JavaBeans accessors and mutators in bytecode while keeping the source code clean and concise.",hint:"Annotation processor AST bytecode injection.",level:"Intermediate",codeExample:"@Getter @Setter public class Student { private String name; }"},{question:"What happens if a getter method returns a mutable internal array directly?",shortAnswer:"It violates encapsulation by giving the caller a direct alias to the array, allowing external elements to be mutated.",explanation:"Arrays in Java are always mutable. To prevent representation exposure, getters should return a clone ('return array.clone();') or an unmodifiable List.",hint:"Always clone arrays before returning in getters.",level:"Intermediate",codeExample:"public String[] getSkills() { return skills.clone(); } // Safe defensive copy"},{question:"Can a setter method be marked 'final' and what is the benefit?",shortAnswer:"Yes! Marking a setter 'final' prevents subclasses from overriding it, guaranteeing that validation logic cannot be bypassed in children.",explanation:"If a parent class has strict invariant validation in 'public final void setAge(int age)', no subclass can override it to remove the validation check.",hint:"Locks validation rules across the inheritance tree.",level:"Intermediate",codeExample:"public final void setRollNumber(int roll) { if (roll <= 0) throw ...; this.roll = roll; }"},{question:"What is a 'Write-Only' property in JavaBean architecture?",shortAnswer:"A property that has a public setter but no getter (e.g. setPassword(String pwd)).",explanation:"Write-only properties accept configuration or credentials from callers/frameworks without allowing other components to read the stored secret back out.",hint:"Setter provided, getter omitted.",level:"Beginner",codeExample:"public void setSecretPin(String pin) { this.pinHash = hash(pin); } // No getSecretPin()"},{question:"What is a 'Read-Only' property in JavaBean architecture?",shortAnswer:"A property that has a public getter but no setter (e.g. getAccountId()).",explanation:"Read-only properties expose state (initialized during construction or computed dynamically) while preventing outside classes from modifying it.",hint:"Getter provided, setter omitted.",level:"Beginner",codeExample:"public int getAccountId() { return this.accountId; } // No setAccountId()"},{question:"How does the 'record' feature in Java 16+ name its accessor methods?",shortAnswer:"Records omit the 'get' prefix and use the component name directly (e.g. 'student.name()' instead of 'student.getName()').",explanation:"Record accessors use mathematical / functional naming: 'public int rollNumber()' and 'public String studentFullName()', departing from legacy JavaBeans 'get' prefixes.",hint:"Records use componentName() rather than getComponentName().",level:"Intermediate",codeExample:`record Student(int roll, String name) {}
int r = student.roll(); // Component accessor`},{question:"Why should setter parameters use the exact same name as the instance field?",shortAnswer:"It makes code self-documenting and uses 'this.fieldName = fieldName' to clearly distinguish field from parameter.",explanation:"Writing 'public void setName(String name) { this.name = name; }' is standard Java idiom. Disambiguating with 'this.' makes the binding explicit.",hint:"Parameter shadows field; use 'this.' to assign.",level:"Beginner",codeExample:"public void setBranch(String branch) { this.branch = branch; }"},{question:"What is 'Lazy Initialization' inside a getter method?",shortAnswer:"Deferring object creation until the getter is called for the very first time.",explanation:"If an object or heavy report is expensive to create and may not always be needed, the getter checks if the field is null, instantiates it on demand, and caches it.",hint:"Create on first get() call.",level:"Intermediate",codeExample:`public Report getReport() {
    if (report == null) report = generateHeavyReport();
    return report;
}`},{question:"How do ORM frameworks like Hibernate handle entities with getters/setters vs direct field access?",shortAnswer:"Hibernate can use 'AccessType.PROPERTY' (invoking getters/setters, triggering validation) or 'AccessType.FIELD' (using direct bytecode/reflection injection).",explanation:"Property access routes database column reads and writes through getters and setters, allowing business logic to run during entity hydration.",hint:"Property access vs Field access in JPA/Hibernate.",level:"Advanced",codeExample:"@Access(AccessType.PROPERTY) // Enforces getter/setter execution on DB load"},{question:"Can a setter method throw a checked exception?",shortAnswer:"Technically yes in Java syntax, but it is strongly discouraged by the JavaBeans specification and breaks framework auto-binding.",explanation:"Frameworks like Spring MVC and Jackson cannot handle checked exceptions in setters during HTTP parameter binding. Setters should throw IllegalArgumentException (unchecked) on validation errors.",hint:"Use unchecked RuntimeExceptions (IllegalArgumentException) in setters.",level:"Intermediate",codeExample:`public void setScore(int s) {
    if (s < 0) throw new IllegalArgumentException("Score cannot be negative");
}`},{question:"What is 'VetoableChangeListener' in the java.beans package?",shortAnswer:"A listener mechanism allowing external subscribers to validate and potentially reject (veto) a proposed property change in a JavaBean.",explanation:"Before a constrained property is updated, the setter fires a PropertyChangeEvent. If any listener throws a PropertyVetoException, the setter reverts the change.",hint:"Constrained property change listener in java.beans.",level:"Advanced",codeExample:'vetoSupport.fireVetoableChange("fee", oldFee, newFee);'},{question:"Can an accessor method have arguments?",shortAnswer:"No, standard property getters must take ZERO arguments (except indexed getters which take 1 int index).",explanation:"A method like 'public String getName(String format)' is a general business method, NOT a JavaBean getter property.",hint:"Standard getters take no parameters.",level:"Beginner",codeExample:"public String getName() { return name; } // Valid getter: 0 arguments"},{question:"Why should getters returning Collections never return null?",shortAnswer:"To prevent callers from having to write null checks and avoid NullPointerExceptions in for-each loops.",explanation:"If a list has no elements, return 'Collections.emptyList()' rather than 'null'. Callers can safely write 'for(var item : bean.getItems())' with zero NPE risk.",hint:"Always return empty collections, never null.",level:"Beginner",codeExample:"public List<String> getSkills() { return skills.isEmpty() ? Collections.emptyList() : skills; }"},{question:"What is 'PropertyDescriptor' in the java.beans.Introspector API?",shortAnswer:"A standard Java reflection class that describes a JavaBean property by pairing its getter (ReadMethod) and setter (WriteMethod).",explanation:"Introspector.getBeanInfo(Class).getPropertyDescriptors() is how Spring and Java frameworks programmatically discover and link matching getters and setters.",hint:"Introspection metadata pairing getter and setter.",level:"Advanced",codeExample:`PropertyDescriptor pd = new PropertyDescriptor("studentName", TraineeEnrollmentBean.class);
Method getter = pd.getReadMethod(); // getStudentFullName`},{question:"How does the 'synchronized' modifier on getters and setters support Thread Safety?",shortAnswer:"It prevents race conditions by acquiring the object's monitor lock on both reads and writes of shared mutable state.",explanation:"If Thread A is writing via 'setFee()' and Thread B is reading via 'getFee()', synchronizing both methods guarantees visibility and atomic state transitions.",hint:"Synchronize both getter and setter for thread-safe access.",level:"Intermediate",codeExample:`public synchronized double getFee() { return fee; }
public synchronized void setFee(double f) { this.fee = f; }`},{question:"What is the difference between an Immutable Class and a JavaBean?",shortAnswer:"JavaBeans are typically mutable with public no-arg constructors and setters; Immutable classes have final fields, no setters, and initialize via constructors.",explanation:"Traditional JavaBeans were designed for mutable component builders. Modern microservices favor immutable records/DTOs for concurrency safety.",hint:"Mutable component bean vs immutable domain record.",level:"Intermediate",codeExample:`// JavaBean: mutable with setters
// Immutable: final fields + constructor only`},{question:"Can a setter method trigger secondary side-effects like recalculating total balances or notifying listeners?",shortAnswer:"Yes! Encapsulating state modification inside a setter allows updating dependent cached fields and firing change notifications.",explanation:"When 'setUnitPrice(p)' is called, the setter can automatically update 'this.totalPrice = this.quantity * p' and notify listeners, keeping internal state consistent.",hint:"Centralized state mutation enables automated dependency updates.",level:"Intermediate",codeExample:`public void setPrice(double price) {
    this.price = price;
    recalculateTotal(); // Automated side-effect
}`},{question:"What is the danger of providing a setter for a collection property (e.g. 'setSkills(List<String> s)')?",shortAnswer:"Direct assignment creates an external alias and can overwrite the internal collection with an unvalidated or null list.",explanation:"A setter like 'this.skills = s;' lets callers pass null or clear the list from outside. It is safer to clear and copy: 'this.skills.clear(); if(s!=null) this.skills.addAll(s);'.",hint:"Copy collection contents; do not overwrite the list reference.",level:"Intermediate",codeExample:`public void setSkills(List<String> list) {
    this.skills = (list != null) ? new ArrayList<>(list) : new ArrayList<>();
}`},{question:"What is 'Bean Validation' (JSR 380 / Jakarta Validation) on getters and setters?",shortAnswer:"Standardized annotations like @NotNull, @Size, @Min, @Email placed on fields or getters to enforce declarative domain constraints.",explanation:"Frameworks like Hibernate Validator automatically validate annotated properties before persisting to databases or handling REST payloads.",hint:"Declarative validation annotations on JavaBean properties.",level:"Intermediate",codeExample:"@NotNull @Size(min = 2, max = 50) private String studentName;"},{question:"What is Sukanta Hui's Pedagogical Rule on Getters and Setters at the Barrackpore Academy?",shortAnswer:"Never treat getters and setters as mindless robotic boilerplate. Every setter is a border security checkpoint, and every getter is a protective diplomatic courier.",explanation:"At the Barrackpore academy, Sukanta Hui teaches that an unvalidated setter is an open invitation to data corruption. Validate inputs rigorously at the setter gate, return safe defensive copies from getters, and follow JavaBean naming rules so enterprise frameworks work with your code effortlessly.",hint:"Setters are border checkpoints; getters are diplomatic couriers.",level:"Beginner",codeExample:"// Sukanta Hui's Rule: Validate at setter → Guard invariants → Return unmodifiable/defensive copies from getters"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bridgeGlow {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-bridge {
            animation: bridgeGlow 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"JavaBean Standards & Framework Contracts"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Getter and Setter Methods: Accessor and Mutator Conventions"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the official JavaBeans Specification conventions for accessors and mutators: dissecting ",e.jsx("code",{className:"text-sky-400 font-mono",children:"get...()"})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"is...()"})," boolean conventions, understanding how Spring Boot, Jackson, and Hibernate use Reflection introspection to map JSON payloads and database columns, and building modern fluent chaining setters."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📋"})," The Official JavaBeans Accessor & Mutator Conventions"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"The JavaBeans API specification defines precise standardized naming rules that allow frameworks and IDEs to discover and bind properties automatically:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"Standard Property"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:[e.jsx("code",{className:"text-sky-300",children:"getStudentName()"})," & ",e.jsx("code",{className:"text-sky-300",children:"setStudentName(...)"})]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"Primitive boolean"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:[e.jsx("code",{className:"text-emerald-300",children:"isActiveScholarship()"})," (uses ",e.jsx("code",{className:"text-emerald-200",children:"is"})," prefix)"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"Wrapper Boolean"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:[e.jsx("code",{className:"text-purple-300",children:"getRemoteAccess()"})," (uses ",e.jsx("code",{className:"text-purple-200",children:"get"})," prefix)"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-1",children:"Indexed Element"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:[e.jsx("code",{className:"text-amber-300",children:"getSkill(int i)"})," & ",e.jsx("code",{className:"text-amber-300",children:"setSkill(int i, s)"})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Jackson JSON Serialization in Barrackpore):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," and ",e.jsx("strong",{children:"Tuhina Das"})," were enrolled into the academy portal, Jackson JSON Serializer used Java Reflection to inspect our ",e.jsx("code",{className:"text-sky-300 font-mono",children:"TraineeEnrollmentBean"}),". By finding ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"getRollNumber()"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"isActiveScholarship()"}),", it generated clean, compliant REST JSON payloads without exposing private fields directly!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The JavaBean Reflection Bridge: Frameworks → Getters/Setters → Private Fields"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing how Spring Boot, Jackson, and Hibernate interact with private state through standardized JavaBean accessor bridges:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 320",className:"w-full h-auto","aria-label":"JavaBean Reflection Bridge Diagram",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"bridgeArrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})}),e.jsx("marker",{id:"bridgeArrow2",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})]}),e.jsx("rect",{x:"25",y:"25",width:"280",height:"270",rx:"10",fill:"#0f172a",stroke:"#6366f1",strokeWidth:"2"}),e.jsx("text",{x:"165",y:"52",fill:"#818cf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"ENTERPRISE FRAMEWORKS"}),e.jsx("text",{x:"165",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Spring Boot · Jackson · Hibernate"}),e.jsx("rect",{x:"40",y:"85",width:"250",height:"55",rx:"6",fill:"#1e1b4b",stroke:"#818cf8",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"105",fill:"#e0e7ff",fontSize:"10",fontWeight:"bold",children:"JSON Payload / REST API"}),e.jsx("text",{x:"50",y:"125",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:'{ "studentFullName": "Swadeep" }'}),e.jsx("rect",{x:"40",y:"150",width:"250",height:"55",rx:"6",fill:"#1e1b4b",stroke:"#818cf8",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"170",fill:"#e0e7ff",fontSize:"10",fontWeight:"bold",children:"JPA / SQL Table Mapping"}),e.jsx("text",{x:"50",y:"190",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:"SELECT course_fee_inr FROM trainees"}),e.jsx("rect",{x:"40",y:"215",width:"250",height:"65",rx:"6",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"50",y:"235",fill:"#bae6fd",fontSize:"9",fontWeight:"bold",children:"Reflection Introspector:"}),e.jsx("text",{x:"50",y:"250",fill:"#94a3b8",fontSize:"8",children:"Pairs property names with matching"}),e.jsx("text",{x:"50",y:"265",fill:"#94a3b8",fontSize:"8",children:"get...() and set...() methods in bytecode"}),e.jsx("rect",{x:"340",y:"25",width:"290",height:"270",rx:"10",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"485",y:"52",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"JAVABEAN METHOD BRIDGE"}),e.jsx("text",{x:"485",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Public Getters & Setters Contract"}),e.jsx("rect",{x:"355",y:"85",width:"260",height:"55",rx:"6",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"365",y:"105",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"+ getStudentFullName() : String"}),e.jsx("text",{x:"365",y:"125",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"+ setStudentFullName(String s) : void"}),e.jsx("rect",{x:"355",y:"150",width:"260",height:"55",rx:"6",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"365",y:"170",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"+ isActiveScholarship() : boolean"}),e.jsx("text",{x:"365",y:"190",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"+ setActiveScholarship(boolean b) : void"}),e.jsx("rect",{x:"355",y:"215",width:"260",height:"65",rx:"6",fill:"#042f2e",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"365",y:"235",fill:"#a7f3d0",fontSize:"9",fontWeight:"bold",children:"Validation & Invariant Defense:"}),e.jsx("text",{x:"365",y:"252",fill:"#fde047",fontSize:"9",fontFamily:"monospace",children:"if (fee < 0) throw IllegalArgumentException"}),e.jsx("text",{x:"365",y:"268",fill:"#6ee7b7",fontSize:"8",children:"&check; Guards state before mutating"}),e.jsx("rect",{x:"665",y:"25",width:"230",height:"270",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"780",y:"52",fill:"#34d399",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"PROTECTED HEAP STATE"}),e.jsx("text",{x:"780",y:"68",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Encapsulated Private Fields"}),e.jsx("rect",{x:"680",y:"85",width:"200",height:"195",rx:"6",fill:"#022c22",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"690",y:"110",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"- int rollNumber"}),e.jsx("text",{x:"690",y:"135",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"- String studentFullName"}),e.jsx("text",{x:"690",y:"160",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"- double courseFeeInr"}),e.jsx("text",{x:"690",y:"185",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"- boolean activeScholarship"}),e.jsx("text",{x:"690",y:"210",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"- List<String> skills"}),e.jsx("text",{x:"690",y:"250",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"Hidden & Secure in Heap"}),e.jsx("path",{d:"M 290 115 L 340 115",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#bridgeArrow)"}),e.jsx("path",{d:"M 615 115 L 665 115",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#bridgeArrow2)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"GettersSettersConventionsDemo.java"})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:["The runnable source code below showcases strict JavaBean naming conventions, boolean ",e.jsx("code",{className:"text-sky-300 font-mono",children:"is...()"})," rules, setter validation logic, indexed accessors, and simulated Jackson JSON reflection:"]}),e.jsx(t,{fileName:"GettersSettersConventionsDemo.java",code:s})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & JavaBean Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Boolean Getter Naming Rule"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Primitive ",e.jsx("code",{className:"text-sky-300 font-mono",children:"boolean"})," getters use the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"is...()"})," prefix (e.g. ",e.jsx("code",{className:"text-slate-300 font-mono",children:"isActive()"}),"), whereas wrapper ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Boolean"})," getters use the standard ",e.jsx("code",{className:"text-sky-300 font-mono",children:"get...()"})," prefix (e.g. ",e.jsx("code",{className:"text-slate-300 font-mono",children:"getActive()"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Mandatory No-Arg Constructor"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Frameworks like Spring and Hibernate instantiate beans dynamically via reflection (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Class.getDeclaredConstructor().newInstance()"}),"), requiring every JavaBean to declare a public no-arg constructor."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Virtual Computed Properties"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["A getter does not require a backing field. Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:'public String getFullName() { return first + " " + last; }'})," exposes a valid read-only property to JSON serializers."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Never Throw Checked Exceptions in Setters"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Framework parameter binding fails if setters declare checked exceptions. Setters should throw unchecked ",e.jsx("code",{className:"text-amber-300 font-mono",children:"IllegalArgumentException"})," on validation errors."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Odd Field Casing (e.g. 'uName', 'eMail')"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Naming fields with an initial lowercase letter followed immediately by an uppercase letter causes Introspector decapitalization bugs in Jackson and Spring binding."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// BUG-PRONE: Introspector creates 'eMail' property!
private String eMail;
public String geteMail() { return eMail; }`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: Standard CamelCase Naming"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Use standard camelCase (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"emailAddress"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"userName"}),") to ensure 100% flawless reflection mapping across all frameworks."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// CLEAN: Standard camelCase JavaBean mapping
private String emailAddress;
public String getEmailAddress() { return emailAddress; }`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-6 md:p-8 rounded-2xl border border-sky-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why did Java 16+ Records drop the 'get' prefix entirely?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sky-300 font-mono",children:"get"})," prefix in JavaBeans was designed in 1997 for mutable GUI component introspection. In modern Java, ",e.jsx("strong",{children:"Records"})," represent immutable mathematical tuples (DTOs). Using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"student.rollNumber()"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"student.studentFullName()"})," aligns with functional programming standards, reduces syntactic noise, and clarifies that the accessor is an immutable component projection rather than a mutable JavaBean property!"]})]}),e.jsx(a,{quote:"Never view getters and setters as mindless robotic boilerplate. Every setter is a border security checkpoint that defends your invariants, and every getter is a protective diplomatic courier. Follow JavaBean naming standards, and the entire enterprise ecosystem will work with your code effortlessly.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(r,{content:i,fileName:"Topic13_Getters_Setters_Conventions_Note.txt"})]})]})}export{g as default};

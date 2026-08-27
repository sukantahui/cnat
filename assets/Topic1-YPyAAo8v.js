import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * File: RealWorldDomainModelingDemo.java\r
 * Module: 002_001_classes-objects-memory-and-encapsulation (Topic 1)\r
 * Description: Demonstrates Real-World Domain Modeling in Java:\r
 *              1. Mapping real-world physical/conceptual entities to State (fields) & Behavior (methods)\r
 *              2. Entity 1: Student (Roll, name, GPA, attendance, honors eligibility)\r
 *              3. Entity 2: Course (Course code, title, max capacity, enrollment validation)\r
 *              4. Entity 3: FacultyMentor (Mentor ID, name, assigned students, payout in ₹)\r
 *              for campus academic administration at Coder & AccoTax Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class RealWorldDomainModelingDemo {\r
\r
    // =========================================================================\r
    // ENTITY 1: Student (State & Behavior Mapping)\r
    // =========================================================================\r
    public static class Student {\r
        // STATE (Attributes / Fields)\r
        private final int rollNumber;\r
        private final String studentName;\r
        private double attendancePercentage;\r
        private double gradePointAverage; // GPA on 10.0 scale\r
\r
        public Student(int rollNumber, String studentName, double attendance, double gpa) {\r
            if (rollNumber <= 0) throw new IllegalArgumentException("Roll number must be positive");\r
            this.rollNumber = rollNumber;\r
            this.studentName = Objects.requireNonNull(studentName, "Student name cannot be null");\r
            setAttendancePercentage(attendance);\r
            setGradePointAverage(gpa);\r
        }\r
\r
        // BEHAVIOR (Operations / Methods)\r
        public boolean isEligibleForHonors() {\r
            return this.gradePointAverage >= 9.0 && this.attendancePercentage >= 85.0;\r
        }\r
\r
        public void recordAttendance(boolean present) {\r
            // Adjust attendance percentage\r
            if (present && this.attendancePercentage < 100.0) {\r
                this.attendancePercentage = Math.min(100.0, this.attendancePercentage + 1.0);\r
            } else if (!present && this.attendancePercentage > 0.0) {\r
                this.attendancePercentage = Math.max(0.0, this.attendancePercentage - 1.0);\r
            }\r
        }\r
\r
        public void setAttendancePercentage(double attendance) {\r
            if (attendance < 0.0 || attendance > 100.0) {\r
                throw new IllegalArgumentException("Attendance must be between 0 and 100: " + attendance);\r
            }\r
            this.attendancePercentage = attendance;\r
        }\r
\r
        public void setGradePointAverage(double gpa) {\r
            if (gpa < 0.0 || gpa > 10.0) {\r
                throw new IllegalArgumentException("GPA must be between 0.0 and 10.0: " + gpa);\r
            }\r
            this.gradePointAverage = gpa;\r
        }\r
\r
        public int getRollNumber() { return rollNumber; }\r
        public String getStudentName() { return studentName; }\r
        public double getAttendancePercentage() { return attendancePercentage; }\r
        public double getGradePointAverage() { return gradePointAverage; }\r
\r
        @Override\r
        public String toString() {\r
            return String.format("Student #%03d (%s) | Attendance: %.1f%% | GPA: %.2f/10.0 | Honors: %s",\r
                    rollNumber, studentName, attendancePercentage, gradePointAverage,\r
                    isEligibleForHonors() ? "YES ✓" : "NO");\r
        }\r
    }\r
\r
    // =========================================================================\r
    // ENTITY 2: Course (Capacity Invariant & Enrollment Behavior)\r
    // =========================================================================\r
    public static class Course {\r
        // STATE\r
        private final String courseCode;\r
        private final String courseTitle;\r
        private final double tuitionFeeInr;\r
        private final int maxCapacity;\r
        private final List<Student> enrolledStudents;\r
\r
        public Course(String courseCode, String courseTitle, double fee, int maxCapacity) {\r
            this.courseCode = Objects.requireNonNull(courseCode, "courseCode cannot be null");\r
            this.courseTitle = Objects.requireNonNull(courseTitle, "courseTitle cannot be null");\r
            if (fee < 0.0) throw new IllegalArgumentException("Fee cannot be negative");\r
            if (maxCapacity <= 0) throw new IllegalArgumentException("Capacity must be positive");\r
            this.tuitionFeeInr = fee;\r
            this.maxCapacity = maxCapacity;\r
            this.enrolledStudents = new ArrayList<>();\r
        }\r
\r
        // BEHAVIOR\r
        public boolean enrollStudent(Student student) {\r
            Objects.requireNonNull(student, "student cannot be null");\r
            if (isFull()) {\r
                System.out.printf("  [ENROLLMENT FAILED] %s is at full capacity (%d/%d seats filled)%n",\r
                        this.courseTitle, enrolledStudents.size(), maxCapacity);\r
                return false;\r
            }\r
            enrolledStudents.add(student);\r
            System.out.printf("  [ENROLLMENT SUCCESS] Enrolled %s into %s (#%03d)%n",\r
                    student.getStudentName(), this.courseTitle, student.getRollNumber());\r
            return true;\r
        }\r
\r
        public boolean isFull() {\r
            return enrolledStudents.size() >= maxCapacity;\r
        }\r
\r
        public int getRemainingSeats() {\r
            return maxCapacity - enrolledStudents.size();\r
        }\r
\r
        public double calculateTotalCollectedTuitionInr() {\r
            return enrolledStudents.size() * tuitionFeeInr;\r
        }\r
\r
        public String getCourseTitle() { return courseTitle; }\r
        public List<Student> getEnrolledStudents() { return List.copyOf(enrolledStudents); }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 1 REAL-WORLD DOMAIN MODELING");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        System.out.println("--- 1. MODELING STUDENT ENTITIES (STATE & BEHAVIOR) ---\\n");\r
        Student s1 = new Student(101, "Swadeep", 92.0, 9.4);\r
        Student s2 = new Student(102, "Tuhina", 95.0, 9.8);\r
        Student s3 = new Student(103, "Abhronila", 88.0, 8.7);\r
        Student s4 = new Student(104, "Debangshu", 82.0, 7.9);\r
\r
        List<Student> batch = List.of(s1, s2, s3, s4);\r
        for (Student s : batch) {\r
            System.out.println("  " + s);\r
        }\r
\r
        System.out.println("\\n--- 2. MODELING COURSE ENTITY & ENROLLMENT BEHAVIOR ---\\n");\r
        Course javaCourse = new Course("CS-301", "Full Stack Java & Microservices", 25000.0, 3);\r
\r
        javaCourse.enrollStudent(s1);\r
        javaCourse.enrollStudent(s2);\r
        javaCourse.enrollStudent(s3);\r
        javaCourse.enrollStudent(s4); // Should fail: max capacity is 3!\r
\r
        System.out.printf("%n  Course Status : %s | Remaining Seats: %d | Total Tuition: ₹%,.2f%n%n",\r
                javaCourse.getCourseTitle(),\r
                javaCourse.getRemainingSeats(),\r
                javaCourse.calculateTotalCollectedTuitionInr());\r
\r
        System.out.println("================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Real-world modeling expresses entities as State (fields) and Behavior (methods).");\r
        System.out.println("2. Validate state transitions (e.g. GPA range 0..10, attendance 0..100) in mutators.");\r
        System.out.println("3. Behavior methods enforce domain business rules (e.g. course capacity limits).");\r
        System.out.println("4. Return unmodifiable defensive copies (List.copyOf) to protect internal lists.");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
TOPIC 1: Real-World Domain Modeling: Mapping Entities to State & Behavior\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. REAL-WORLD DOMAIN MODELING CONCEPTS\r
--------------------------------------------------------------------------------\r
- Real-World Entity -> Software Class Blueprint:\r
  * STATE (Attributes / Fields)   : What the entity holds (e.g. roll, name, gpa, balance).\r
  * BEHAVIOR (Operations / Methods): What the entity does / computes (e.g. enroll(), withdraw()).\r
\r
- Rich Domain Model vs Anemic Model:\r
  * Rich Domain Model (Best Practice): Class contains both data and validating business methods.\r
  * Anemic Model (Anti-pattern)      : Class has only dumb getters/setters with zero business logic.\r
\r
- Modeling Relationships:\r
  * IS-A  : Inheritance / Specialization (GraduateStudent IS-A Student).\r
  * HAS-A : Composition / Aggregation (Course HAS-A List<Student>).\r
\r
- Defensive State Protection:\r
  * Return unmodifiable defensive copies (List.copyOf) to prevent external tampering.\r
  * Enforce domain bounds (e.g. GPA 0.0..10.0, Attendance 0..100) inside mutators.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] State = private instance fields; Behavior = public methods.\r
[✓] Command-Query Separation: Query computes; Command mutates.\r
[✓] In Topic 2, we master Class Definition: Syntax, Anatomy & Naming Conventions!\r
================================================================================\r
`,o=[{question:"What is Real-World Domain Modeling in Object-Oriented Programming?",shortAnswer:"The process of identifying real-world business entities (e.g. Student, Course, BankAccount) and translating their attributes into **State (Fields)** and their capabilities into **Behavior (Methods)**.",explanation:"Core definition of domain modeling.",hint:"Mapping real-world entities to State (fields) and Behavior (methods).",level:"basic",codeExample:"// Student -> State: roll, name, gpa | Behavior: isEligibleForHonors()"},{question:"What constitutes the 'State' of an object in Java?",shortAnswer:"The collection of instance variables (fields) stored inside the object's Heap memory at any given point in time.",explanation:"Object state definition.",hint:"The values stored in an object's instance fields.",level:"basic",codeExample:"private double gradePointAverage; private double attendancePercentage;"},{question:"What constitutes the 'Behavior' of an object in Java?",shortAnswer:"The set of instance methods that operate on and modify the object's internal state or compute results based on that state.",explanation:"Object behavior definition.",hint:"The methods that execute actions or compute results using object state.",level:"basic",codeExample:"public boolean isEligibleForHonors() { return gpa >= 9.0; }"},{question:"In the Coder & AccoTax Barrackpore lab, what criteria defined honors eligibility for a Student?",shortAnswer:"A GPA of at least **9.0/10.0** AND attendance of at least **85.0%**.",explanation:"Honors eligibility business rule.",hint:"GPA >= 9.0 and Attendance >= 85.0%.",level:"basic",codeExample:"return this.gradePointAverage >= 9.0 && this.attendancePercentage >= 85.0;"},{question:"In the Coder & AccoTax Barrackpore lab, which students qualified for Honors?",shortAnswer:"**Swadeep** (GPA 9.4, 92% attendance) and **Tuhina** (GPA 9.8, 95% attendance).",explanation:"Student honors verification.",hint:"Swadeep and Tuhina.",level:"basic",codeExample:"s1.isEligibleForHonors() -> true | s2.isEligibleForHonors() -> true"},{question:"Why did Abhronila (GPA 8.7) and Debangshu (GPA 7.9) NOT qualify for Honors?",shortAnswer:"Because their GPAs were below the required 9.0 minimum threshold.",explanation:"Honors disqualification verification.",hint:"GPA was below 9.0.",level:"basic",codeExample:"s3.isEligibleForHonors() -> false (GPA 8.7 < 9.0)"},{question:"In the Coder & AccoTax Barrackpore lab, what happened when attempting to enroll student 4 (Debangshu) into a course with max capacity 3?",shortAnswer:"The enrollment method rejected the request with an `[ENROLLMENT FAILED]` message because `enrolledStudents.size() >= maxCapacity`.",explanation:"Capacity constraint domain invariant.",hint:"Rejected safely because the course reached its maximum capacity of 3 seats.",level:"basic",codeExample:"javaCourse.enrollStudent(s4) -> false (Capacity full)"},{question:"What is an 'Anemic Domain Model' anti-pattern?",shortAnswer:"A class that contains only public fields or getters/setters with ZERO business logic or behavior, reducing objects to dumb data holders while logic is scattered in external service classes.",explanation:"Anemic domain model anti-pattern.",hint:"Classes containing only data fields without business behavior methods.",level:"intermediate",codeExample:"// Anti-pattern: Student with only getters/setters and zero domain methods"},{question:"What is a 'Rich Domain Model' in OOP?",shortAnswer:"A class that encapsulates both its data and its business logic, containing self-validating behavior methods (`enrollStudent()`, `isEligibleForHonors()`).",explanation:"Rich domain model definition.",hint:"Classes bundling data with business behavior and domain rules.",level:"intermediate",codeExample:"// Rich Model: Course validates capacity directly inside enrollStudent()"},{question:"Why should `getEnrolledStudents()` return `List.copyOf(enrolledStudents)` instead of the raw list?",shortAnswer:"Returning `List.copyOf()` creates an unmodifiable **defensive copy**, preventing external callers from clearing or modifying the course enrollment list without going through `enrollStudent()`.",explanation:"Defensive copying for collection fields.",hint:"Prevents external callers from modifying internal list state directly.",level:"intermediate",codeExample:"public List<Student> getEnrolledStudents() { return List.copyOf(enrolledStudents); }"},{question:"In the Coder & AccoTax Barrackpore lab, what was the total collected tuition for 3 enrolled students at ₹25,000 fee?",shortAnswer:"$3 \\times ₹25,000 =$ **₹75,000.00**.",explanation:"Tuition collection calculation.",hint:"₹75,000.00.",level:"basic",codeExample:"3 * 25000 = 75,000.00"},{question:"What is the difference between an Attribute and a Property in Java?",shortAnswer:"An **Attribute** is an internal instance field; a **Property** is a characteristic exposed externally via getter/setter accessor methods (following JavaBeans convention).",explanation:"Attribute vs Property distinction.",hint:"Attribute is the internal field; Property is exposed via getter/setter.",level:"basic",codeExample:"private double gpa; // Attribute | public double getGpa() // Property"},{question:"How does domain modeling help identify whether a relationship is 'IS-A' or 'HAS-A'?",shortAnswer:"**IS-A** represents Inheritance / Specialization (e.g. `GraduateStudent IS-A Student`); **HAS-A** represents Composition / Aggregation (e.g. `Course HAS-A List<Student>`).",explanation:"IS-A vs HAS-A modeling relationships.",hint:"IS-A = Inheritance; HAS-A = Composition.",level:"basic",codeExample:"Course has-a List<Student> (Composition)"},{question:"Why should setters enforce boundary constraints (e.g. GPA between 0.0 and 10.0)?",shortAnswer:"To guarantee that the object's internal state remains valid and mathematically consistent, throwing `IllegalArgumentException` on invalid inputs.",explanation:"Mutator validation best practice.",hint:"Guarantees domain state validity by rejecting invalid numbers.",level:"basic",codeExample:"if (gpa < 0.0 || gpa > 10.0) throw new IllegalArgumentException();"},{question:"What is the `@Override` annotation on `toString()` used for?",shortAnswer:"It informs the compiler that the method is overriding `Object.toString()`, providing a human-readable text representation of the object's state.",explanation:"toString override purpose.",hint:"Provides custom human-readable text representation of object state.",level:"basic",codeExample:"@Override public String toString() { return ...; }"},{question:"Can an entity have behavior methods that do NOT mutate state?",shortAnswer:"YES! (e.g. `isEligibleForHonors()`, `isFull()`, `getRemainingSeats()`) are read-only query methods that compute conclusions based on current state.",explanation:"Query vs Command methods (CQS principle).",hint:"Yes, query methods compute results without modifying state.",level:"basic",codeExample:"public boolean isFull() { return enrolledStudents.size() >= maxCapacity; }"},{question:"In the Coder & AccoTax Barrackpore lab, what was the remaining seat count after 3 enrollments in a capacity-3 course?",shortAnswer:"`0` remaining seats.",explanation:"Seat count verification.",hint:"0.",level:"basic",codeExample:"javaCourse.getRemainingSeats() -> 0"},{question:"What is the 'Command-Query Separation' (CQS) principle in OOP method design?",shortAnswer:"A method should either be a **Command** (performs an action and mutates state) OR a **Query** (computes and returns a value without mutating state), but never both.",explanation:"CQS architectural design principle.",hint:"Methods should either mutate state or return a query result, not both.",level:"intermediate",codeExample:"// Query: isFull() | Command: recordAttendance(present)"},{question:"Why is `studentName` marked `final` in the Student class?",shortAnswer:"To make the identity attribute immutable after object creation, preventing accidental reassignment of the student's name.",explanation:"Field immutability using final.",hint:"Prevents accidental reassignment after construction.",level:"basic",codeExample:"private final String studentName;"},{question:"What happens if you pass `null` as the student name to the `Student` constructor?",shortAnswer:'`Objects.requireNonNull(studentName, "...")` immediately throws a `NullPointerException` before creating an invalid object.',explanation:"Constructor null defense verification.",hint:"Throws NullPointerException with descriptive error message.",level:"basic",codeExample:"new Student(101, null, 90, 8.5) // Throws NPE"},{question:"How do you model a real-world Car entity in OOP?",shortAnswer:"State: `make`, `model`, `currentSpeedKmph`, `fuelLevelPercentage`; Behavior: `accelerate()`, `brake()`, `refuel()`, `getEngineStatus()`.",explanation:"Car entity domain mapping example.",hint:"State: make, model, speed; Behavior: accelerate, brake, refuel.",level:"basic",codeExample:"class Car { private double speed; public void accelerate() {} }"},{question:"How do you model an Employee entity in an HR Payroll system?",shortAnswer:"State: `empId`, `name`, `baseSalaryInr`, `department`, `leaveBalanceDays`; Behavior: `calculateNetMonthlySalary()`, `applyForLeave()`, `promote()`.",explanation:"Employee domain entity mapping.",hint:"State: empId, baseSalary; Behavior: calculateSalary, applyForLeave.",level:"basic",codeExample:"class Employee { private double baseSalary; public double calculateSalary() {} }"},{question:"In the Coder & AccoTax Barrackpore lab, what was Swadeep's GPA and attendance?",shortAnswer:"GPA: `9.4/10.0` | Attendance: `92.0%`.",explanation:"Swadeep student record verification.",hint:"GPA: 9.4, Attendance: 92.0%.",level:"basic",codeExample:'Student s1 = new Student(101, "Swadeep", 92.0, 9.4);'},{question:"What is 'Encapsulating What Varies' in OOP design?",shortAnswer:"Isolating parts of the system that are subject to change behind stable method interfaces so modifications do not ripple across the codebase.",explanation:"Encapsulating what varies design heuristic.",hint:"Isolating changing requirements behind stable interfaces.",level:"intermediate",codeExample:"// Business discount rules encapsulated inside computeDiscount() method"},{question:"Why should domain entity classes avoid holding UI rendering or SQL database queries directly?",shortAnswer:"To uphold the **Single Responsibility Principle (SRP)**; domain entities should only model business logic and state, leaving persistence to Repositories and UI to Views/Controllers.",explanation:"Separation of concerns in domain modeling.",hint:"Upholds Single Responsibility: entities model business rules, not SQL or UI.",level:"intermediate",codeExample:"// Repository handles database; Student handles GPA & honors logic"},{question:"In the Coder & AccoTax Barrackpore lab, what course code was assigned to Full Stack Java?",shortAnswer:'`"CS-301"`.',explanation:"Course code identifier verification.",hint:"CS-301.",level:"basic",codeExample:'new Course("CS-301", "Full Stack Java & Microservices", 25000.0, 3)'},{question:"How does `recordAttendance(boolean present)` adjust attendance percentage safely?",shortAnswer:"It increments attendance up to a maximum of 100.0% if present (`Math.min(100.0, ...)`), or decrements down to a minimum of 0.0% if absent (`Math.max(0.0, ...)`).",explanation:"Bounded arithmetic transition.",hint:"Uses Math.min(100) and Math.max(0) to keep attendance strictly within bounds.",level:"basic",codeExample:"this.attendancePercentage = Math.min(100.0, this.attendancePercentage + 1.0);"},{question:"What is the ultimate takeaway of Module 002_001 Topic 1 for Java developers?",shortAnswer:"Real-world modeling transforms business concepts into cohesive software classes: State is represented by private validated fields, and Behavior is represented by methods enforcing domain invariants.",explanation:"Mastery of real-world domain entity modeling.",hint:"State = private validated fields; Behavior = methods enforcing business invariants.",level:"basic",codeExample:"// Summary: Entity = Private State + Public Validating Behavior"},{question:"What is the next topic (Topic 2) in Module 002_001?",shortAnswer:"Class definition: syntax, anatomy, and naming conventions.",explanation:"Topic 2 breaks down class anatomy, structure, and naming rules in depth.",hint:"Class definition: syntax, anatomy, and naming conventions.",level:"basic",codeExample:"// Topic 2: Class Definition Syntax & Anatomy"},{question:"How does Java 21 Sealed Interfaces assist in domain modeling?",shortAnswer:"Sealed interfaces restrict which classes can implement or extend domain types (`permits FullTimeStudent, PartTimeStudent`), creating exhaustive domain hierarchies.",explanation:"Sealed types in domain modeling.",hint:"Restricts subtyping to an explicit, exhaustive set of domain models.",level:"advanced",codeExample:"public sealed interface AcademicEntity permits Student, Course {}"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowDomain {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-dm {
            animation: glowDomain 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Domain Modeling & Entities"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Real-World Modeling: Mapping Entities to State & Behavior"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the foundation of Object-Oriented system design: transforming real-world business concepts into cohesive software classes, mapping attributes to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"State (fields)"}),", mapping capabilities to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Behavior (methods)"}),", and maintaining domain invariants."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," State vs. Behavior in Domain Modeling"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["In software architecture, every business entity is defined by what it ",e.jsx("em",{children:"holds"})," (State) and what it ",e.jsx("em",{children:"does"})," (Behavior):"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-2",children:"1. State (Instance Attributes)"}),e.jsx("p",{className:"text-sky-300 mb-1",children:"private int roll; private double gpa;"}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["Represents the stored data values residing inside Heap memory. Kept ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"private"})," to protect domain consistency."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-2",children:"2. Behavior (Domain Operations)"}),e.jsx("p",{className:"text-emerald-300 mb-1",children:"public boolean isEligibleForHonors()"}),e.jsx("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:"Methods that execute business rules, validate state transitions, and enforce invariant boundaries (e.g. course capacity limits)."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Academic Domain):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," (GPA 9.4) and ",e.jsx("strong",{children:"Tuhina"})," (GPA 9.8) qualified for Honors, while our ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Course"})," entity enrolled 3 students and safely rejected excess registration when maximum capacity was reached, collecting ",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹75,000.00 Total Tuition"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Domain Entity Mapping & Composition Architecture"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing how real-world entities decompose into state and behavior, and aggregate into higher-order domain models:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Real World Domain Modeling Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradStud",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradCourse",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"390",height:"215",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"55",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"1. STUDENT ENTITY (State & Behavior)"}),e.jsx("rect",{x:"45",y:"70",width:"360",height:"40",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"90",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"STATE (Private Fields):"}),e.jsx("text",{x:"55",y:"103",fill:"#7dd3fc",fontSize:"9",fontFamily:"monospace",children:"rollNumber, studentName, attendance, GPA"}),e.jsx("rect",{x:"45",y:"120",width:"360",height:"40",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"140",fill:"#bae6fd",fontSize:"10",fontWeight:"bold",children:"BEHAVIOR (Public Methods):"}),e.jsx("text",{x:"55",y:"153",fill:"#7dd3fc",fontSize:"9",fontFamily:"monospace",children:"isEligibleForHonors(), recordAttendance(present)"}),e.jsx("text",{x:"225",y:"215",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Self-Contained Domain Rules & Validations"}),e.jsx("rect",{x:"450",y:"30",width:"400",height:"215",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"650",y:"55",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. COURSE ENTITY (Composition HAS-A)"}),e.jsx("rect",{x:"465",y:"70",width:"370",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"90",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"COMPOSITION (Course HAS-A List<Student>):"}),e.jsx("text",{x:"475",y:"103",fill:"#6ee7b7",fontSize:"9",fontFamily:"monospace",children:"courseCode, courseTitle, maxCapacity, tuitionFee"}),e.jsx("rect",{x:"465",y:"120",width:"370",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"475",y:"140",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"CAPACITY INVARIANT BEHAVIOR:"}),e.jsx("text",{x:"475",y:"153",fill:"#6ee7b7",fontSize:"9",fontFamily:"monospace",children:"enrollStudent() → Rejects if enrolled >= capacity"}),e.jsx("text",{x:"650",y:"215",fill:"#fef08a",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Defensive Copying: List.copyOf(enrolledStudents)"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Entities encapsulate state and behavior, composing complex multi-entity domain models with strict invariant rules."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Domain Modeling Patterns Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Model Pattern"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Characteristics"}),e.jsx("th",{className:"p-3 font-semibold text-purple-400",children:"Key Advantage"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Industry Verdict"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Rich Domain Model"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"State + Business Methods in Entity"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"Self-protecting invariants & high cohesion"}),e.jsx("td",{className:"p-3 text-emerald-300 font-sans font-bold",children:"Industry Best Practice (DDD)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Anemic Domain Model"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Only getters/setters; logic in services"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Simple data structure mapping"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Anti-pattern (Procedural in disguise)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Immutable Value Object"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"All fields `final`; zero mutators"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans font-bold",children:"Thread-safe, hash-safe, zero side-effects"}),e.jsx("td",{className:"p-3 text-emerald-300 font-sans font-bold",children:"Preferred for identity & money"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"RealWorldDomainModelingDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program implements rich domain modeling for Student and Course entities with capacity constraints."}),e.jsx(t,{fileModule:i,title:"RealWorldDomainModelingDemo.java",highlightLines:[21,26,33,44,52,65,75,87,98,110]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Leaking Mutable Collection References from Getters"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Returning ",e.jsx("code",{className:"text-rose-300 font-mono",children:"return this.enrolledStudents;"})," allows external callers to call ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list.clear()"}),", corrupting internal state. Always return ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List.copyOf(enrolledStudents)"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Build Rich Domain Models with Cohesive Methods"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Give your entities domain methods that express real-world actions (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"enrollStudent()"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"isEligibleForHonors()"}),") rather than exposing dumb setters."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“What is the difference between Command methods and Query methods?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Command-Query Separation (CQS)! A ",e.jsx("strong",{children:"Query"})," method (like ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"isFull()"})," or ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"getRemainingSeats()"}),") answers a question without modifying state. A ",e.jsx("strong",{children:"Command"})," method (like ",e.jsx("code",{className:"text-sky-300 font-mono",children:"enrollStudent()"}),") mutates state. Keeping them distinct prevents unexpected side-effects!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Real-World Domain Modeling FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 002_001 Topic 1: Real-World Domain Modeling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_001_topic1_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Rich domain modeling is what turns programmers into software architects. In Topic 2, we dive into Class Definition: Syntax, Anatomy, and Naming Conventions! — Sukanta Hui"})})]})}export{b as default};

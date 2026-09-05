import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 9: Copy Constructor: Concept & Manual Deep Object Cloning\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class CopyConstructorDeepCloningDemo {\r
\r
    // Nested Mutable Reference Class: Address\r
    public static class CampusAddress {\r
        private String street;\r
        private String town;\r
\r
        public CampusAddress(String street, String town) {\r
            this.street = street;\r
            this.town = town;\r
        }\r
\r
        // Copy constructor for Address (Deep copying)\r
        public CampusAddress(CampusAddress source) {\r
            this.street = source.street;\r
            this.town = source.town;\r
        }\r
\r
        public void setTown(String town) { this.town = town; }\r
        public String toString() { return street + ", " + town; }\r
    }\r
\r
    // Domain Class: StudentProfile\r
    public static class StudentProfile {\r
        private final int studentId;\r
        private final String studentName;\r
        private final CampusAddress address;\r
        private final List<String> enrolledCourses;\r
\r
        // Primary Parameterized Constructor\r
        public StudentProfile(int studentId, String studentName, CampusAddress address, List<String> courses) {\r
            this.studentId = studentId;\r
            this.studentName = Objects.requireNonNull(studentName, "Name required");\r
            this.address = new CampusAddress(address); // Defensive copy at birth\r
            this.enrolledCourses = new ArrayList<>(courses); // Defensive copy\r
        }\r
\r
        // ====================================================================\r
        // COPY CONSTRUCTOR (Deep Cloning)\r
        // ====================================================================\r
        public StudentProfile(StudentProfile source) {\r
            if (source == null) throw new IllegalArgumentException("Source cannot be null.");\r
            this.studentId = source.studentId;\r
            this.studentName = source.studentName;\r
            // DEEP COPY: Creating a fresh new CampusAddress and ArrayList\r
            this.address = new CampusAddress(source.address);\r
            this.enrolledCourses = new ArrayList<>(source.enrolledCourses);\r
            System.out.printf("  [COPY CONSTRUCTOR] Deep cloned profile for: %s (ID: %d)\\n",\r
                    this.studentName, this.studentId);\r
        }\r
\r
        public CampusAddress getAddress() { return address; }\r
        public List<String> getCourses() { return enrolledCourses; }\r
\r
        public void display(String label) {\r
            System.out.printf("  [%s] ID: %d | Name: %s | Address: [%s] | Courses: %s\\n",\r
                    label, studentId, studentName, address, enrolledCourses);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: COPY CONSTRUCTORS & DEEP CLONING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Original Profile for Swadeep Paul (Barrackpore):");\r
        CampusAddress addr = new CampusAddress("Station Road", "Barrackpore");\r
        List<String> courses = new ArrayList<>();\r
        courses.add("Core Java");\r
        courses.add("Data Structures");\r
\r
        StudentProfile original = new StudentProfile(101, "Swadeep Paul", addr, courses);\r
        original.display("ORIGINAL BEFORE MUTATION");\r
\r
        System.out.println("\\n>>> 2. Deep Cloning via Copy Constructor:");\r
        StudentProfile cloned = new StudentProfile(original);\r
        cloned.display("CLONED PROFILE");\r
\r
        System.out.println("\\n>>> 3. Mutating the Cloned Profile's Nested Address & Courses:");\r
        cloned.getAddress().setTown("Shyamnagar");\r
        cloned.getCourses().add("Spring Boot Pro");\r
\r
        System.out.println("\\n>>> 4. Verification: Original Profile remains 100% UNTOUCHED (Deep Isolation):");\r
        original.display("ORIGINAL AFTER MUTATION");\r
        cloned.display("CLONED AFTER MUTATION");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 9: Copy Constructor: Concept & Manual Deep Object Cloning\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COPY CONSTRUCTOR DEFINITION:\r
   -----------------------------------------------------------------------------\r
   - A constructor accepting an instance of its own class to duplicate state:\r
     'public Student(Student source) { ... }'\r
\r
2. SHALLOW VS DEEP COPYING:\r
   - Shallow Copy: Copies reference pointers (nested objects are shared!).\r
   - Deep Copy: Creates brand-new copies of all nested mutable objects\r
     (CampusAddress, ArrayList, Date) ensuring complete memory isolation.\r
\r
3. WHY JAVA PREFERS COPY CONSTRUCTORS OVER Object.clone():\r
   - Type-safe (no casting required).\r
   - No CloneNotSupportedException.\r
   - Assigns 'final' fields cleanly and safely.\r
   - Full control over shallow vs deep duplication.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is a Copy Constructor in Java?",shortAnswer:"A constructor that creates a new object as an exact duplicate of an existing object of the same class by copying its field values.",explanation:"A copy constructor accepts a single parameter of its own class type: 'public Student(Student source) { ... }'.",hint:"Constructor taking an instance of its own class to copy state.",level:"Beginner",codeExample:"public Student(Student other) { this.id = other.id; this.name = other.name; }"},{question:"Why does Java favor Copy Constructors over 'Object.clone()' and 'Cloneable'?",shortAnswer:"Copy constructors do not require type casting, don't throw CloneNotSupportedException, don't rely on fragile C++ memory hacking, and work cleanly with 'final' fields.",explanation:"Joshua Bloch famously stated that Cloneable is broken in Java. Copy constructors provide type-safe, explicit, and extensible object duplication.",hint:"Type-safe, no exception handling, works with final fields.",level:"Intermediate",codeExample:"// Safe & clean: Student s2 = new Student(s1);"},{question:"What is the difference between a Shallow Copy and a Deep Copy in a copy constructor?",shortAnswer:"A shallow copy duplicates only reference pointers (sharing nested objects on the Heap). A deep copy duplicates nested reference objects creating independent copies in memory.",explanation:"With shallow copy, modifying a nested object in the clone alters the original. Deep copy provides complete object graph isolation.",hint:"Sharing references vs duplicating nested objects.",level:"Intermediate",codeExample:`// Shallow: this.addr = source.addr;
// Deep: this.addr = new Address(source.addr);`},{question:"How do you implement a Deep Copy in a Copy Constructor for mutable fields like List or Date?",shortAnswer:"Instantiate fresh collections or call the copy constructor of the nested mutable object (e.g. 'new ArrayList<>(source.list)').",explanation:"Creating a new collection ensures mutations in the clone do not bleed into the original object.",hint:"Create fresh new instances of nested mutable collections/objects.",level:"Intermediate",codeExample:`this.courses = new ArrayList<>(source.courses);
this.address = new Address(source.address);`},{question:"What happens if 'source == null' is passed to a Copy Constructor?",shortAnswer:"Accessing 'source.field' throws a NullPointerException unless guarded with 'Objects.requireNonNull(source)'.",explanation:"Always validate that the source object is non-null at the start of a copy constructor.",hint:"Validate source != null with Objects.requireNonNull.",level:"Beginner",codeExample:'if (source == null) throw new IllegalArgumentException("Source required");'},{question:"Does the Java compiler automatically generate a copy constructor if none is written?",shortAnswer:"No! Unlike C++, Java NEVER generates an automatic copy constructor. Developers must write it manually.",explanation:"Java only generates a 0-argument default constructor, never copy constructors.",hint:"Compiler never generates copy constructors in Java.",level:"Beginner",codeExample:"// Must be explicitly coded by the developer"},{question:"Can a copy constructor be polymorphic (e.g. 'Student(Person source)')?",shortAnswer:"Yes! A subclass copy constructor can accept a parent class instance to initialize inherited parent fields, or accept interface contracts.",explanation:"This is known as a conversion constructor.",hint:"Conversion constructor accepting supertype or interface.",level:"Advanced",codeExample:"public Student(Person p) { super(p); }"},{question:"Can a Copy Constructor be chained to an existing parameterized constructor via 'this(...)'?",shortAnswer:"Yes! 'this(source.id, source.name, source.hub)' can be used for flat objects with primitive/immutable fields.",explanation:"If no deep defensive copying of nested mutables is needed, chaining simplifies code.",hint:"Use this(source.fields...) for flat objects.",level:"Beginner",codeExample:"public Point(Point p) { this(p.x, p.y); }"},{question:"What is the classroom story by Sukanta Hui for copy constructors in Barrackpore?",shortAnswer:"Trainee Swadeep's Exam Admit Card Duplicate: When issuing a duplicate card for Swadeep, we deep clone his details so changing his exam center on the duplicate does NOT corrupt his permanent admission master record!",explanation:"Deep cloning guarantees that student mutations remain completely isolated.",hint:"Admit card duplicate with isolated exam center updates.",level:"Beginner",codeExample:"StudentProfile clone = new StudentProfile(original);"},{question:"Are 'String' fields required to be deep cloned in a copy constructor?",shortAnswer:"No! Strings are immutable in Java; copying the reference pointer ('this.name = source.name') is 100% thread-safe and memory efficient.",explanation:"Because Strings cannot be mutated, sharing String references on the Heap is completely safe.",hint:"Immutable types like String need no deep cloning.",level:"Beginner",codeExample:"this.name = source.name; // Perfectly safe for immutable String"},{question:"How do you deep-copy an array in a copy constructor?",shortAnswer:"Using 'Arrays.copyOf(source.arr, source.arr.length)' or 'source.arr.clone()'.",explanation:"For arrays of objects, you must also copy each individual element if elements are mutable.",hint:"Use Arrays.copyOf() or element-by-element cloning.",level:"Intermediate",codeExample:"this.marks = Arrays.copyOf(source.marks, source.marks.length);"},{question:"Can a Copy Constructor be declared 'private'?",shortAnswer:"Yes. Private copy constructors are used inside factory methods or Prototype pattern implementations.",explanation:"A private copy constructor can be called by 'public Student duplicate()' method.",hint:"Private copy constructor for internal factory/prototype methods.",level:"Intermediate",codeExample:"private Student(Student s) {} public Student copy() { return new Student(this); }"},{question:"How does the Prototype Design Pattern use Copy Constructors?",shortAnswer:"Prototype classes implement a 'clone()' or 'copy()' method that simply invokes their internal copy constructor.",explanation:"Copy constructors provide the clean implementation engine for the Prototype GoF pattern.",hint:"Engine for Prototype pattern.",level:"Advanced",codeExample:"public Prototype clone() { return new ConcretePrototype(this); }"},{question:"What is a 'Copy Factory' and how does it compare to a Copy Constructor?",shortAnswer:"A static factory method (e.g. 'Student.copyOf(existing)') that returns a new duplicate instance.",explanation:"Like copy constructors, copy factories avoid Cloneable and can return subtypes.",hint:"Static factory method returning duplicate instance.",level:"Intermediate",codeExample:"public static Student newInstance(Student source) { return new Student(source); }"},{question:"Can circular object references cause infinite loops in a Copy Constructor?",shortAnswer:"Yes! If Object A contains Object B and Object B references Object A, naive deep copying causes StackOverflowError.",explanation:"Circular graphs require an identity hash map or tracking registry during deep cloning.",hint:"Circular references cause StackOverflowError without identity tracking.",level:"Expert",codeExample:"// A → B → A requires identity map during deep clone"},{question:"How does a copy constructor handle 'final' fields?",shortAnswer:"Flawlessly! Final fields can be assigned directly inside the copy constructor body, unlike 'Object.clone()' which struggles with final fields.",explanation:"Copy constructors respect standard Java constructor rules for final field assignment.",hint:"Assigns final fields cleanly without reflection hacks.",level:"Intermediate",codeExample:"public Student(Student s) { this.id = s.id; /* id is final */ }"},{question:"Can a copy constructor be overloaded for different subtypes?",shortAnswer:"Yes! A class can declare 'Student(Student s)' and 'Student(GraduateStudent gs)' with specialized copying logic.",explanation:"Overloaded copy constructors enable specialized subtype cloning.",hint:"Overloaded for different source types.",level:"Intermediate",codeExample:`Student(Student s) {}
Student(GraduateStudent gs) {}`},{question:"What is the performance overhead of deep cloning in a copy constructor?",shortAnswer:"It allocates fresh memory on the Heap for every duplicated object, increasing GC pressure for massive object graphs.",explanation:"Deep cloning should only be used when state isolation is strictly required.",hint:"Allocates fresh memory for all nested objects.",level:"Advanced",codeExample:"// Duplicates memory footprint for isolated safety"},{question:"Can you pass an uninitialized reference to a copy constructor?",shortAnswer:"Passing null throws an exception; passing a reference to an object currently under construction can expose uninitialized fields.",explanation:"Always ensure the source object has completed construction before cloning.",hint:"Ensure source has completed construction.",level:"Intermediate",codeExample:"new Student(s); // 's' must be fully initialized"},{question:"Summarize the primary rule of Copy Constructors in Java.",shortAnswer:"A Copy Constructor provides an explicit, type-safe, and exception-free mechanism to duplicate objects with complete deep state isolation.",explanation:"It is the gold standard for object cloning in professional Java development.",hint:"Explicit, type-safe, deep state duplication.",level:"Beginner",codeExample:"// Gold standard for object duplication in Java"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Duplication & Cloning"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Copy Constructor: Deep Cloning and Defensive State Duplication"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why professional Java architectures replace ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Object.clone()"})," with Copy Constructors. Master shallow vs deep cloning and implement defensive state duplication for mutable references."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Architectural Superiority of Copy Constructors"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Copy Constructor"})," accepts an existing object of the same class and duplicates its state into a new Heap instance. Unlike Java's flawed ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Cloneable"})," interface, copy constructors are type-safe, support ",e.jsx("code",{className:"text-sky-300 font-mono",children:"final"})," fields, and don't throw checked exceptions."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Barrackpore Admit Card Duplicate Story:"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," requests a duplicate admit card, the center deep-clones his record. When he changes his exam center address on the duplicate, his original master record at Barrackpore remains 100% untouched!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Shallow Copy vs Deep Copy Memory Architecture"]}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 250",className:"w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"380",height:"200",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"60",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"ORIGINAL OBJECT (HEAP)"}),e.jsx("rect",{x:"50",y:"80",width:"340",height:"130",rx:"6",fill:"#1e293b"}),e.jsx("text",{x:"65",y:"105",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:'studentName: "Swadeep" (Immutable)'}),e.jsx("text",{x:"65",y:"130",fill:"#fde047",fontSize:"10",fontFamily:"monospace",children:"address: 0x88AA → [Station Rd, Barrackpore]"}),e.jsx("text",{x:"65",y:"155",fill:"#fde047",fontSize:"10",fontFamily:"monospace",children:"courses: 0x99BB → [Core Java, DSA]"}),e.jsx("rect",{x:"490",y:"30",width:"380",height:"200",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"680",y:"60",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"DEEP CLONED OBJECT (HEAP)"}),e.jsx("rect",{x:"510",y:"80",width:"340",height:"130",rx:"6",fill:"#064e3b",fillOpacity:"0.3",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"525",y:"105",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:'studentName: "Swadeep"'}),e.jsx("text",{x:"525",y:"130",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"address: 0x11CC → [Station Rd, Shyamnagar]"}),e.jsx("text",{x:"525",y:"155",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"courses: 0x22DD → [Core Java, DSA, Spring]"}),e.jsx("text",{x:"680",y:"195",fill:"#fde047",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"✔ Completely Independent Memory Addresses!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CopyConstructorDeepCloningDemo.java",highlightLines:[22,43,67,72,76]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Copy Constructor FAQs (30 Technical Q&As)",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_002 Topic 9: Copy Constructor & Deep Cloning",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic9_copy_constructor_note.txt"})}),e.jsx(o,{note:"Never use Object.clone() in modern Java! Always write an explicit Copy Constructor that deep-copies mutable collections and nested objects. It makes your code clean, type-safe, and 100% bug-free. — Sukanta Hui"})]})}export{y as default};

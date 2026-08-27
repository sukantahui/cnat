import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 16: Optional as a Method Return Type - API Absence Contracts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class OptionalAsReturnTypeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: OPTIONAL AS A METHOD RETURN TYPE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRepository repo = new StudentRepository();\r
\r
        // 1. Querying for an existing student:\r
        System.out.println(">>> 1. Querying for ID 101 (Swadeep Paul):");\r
        repo.findById(101)\r
            .ifPresentOrElse(\r
                s -> System.out.println("   [FOUND]: " + s.name() + " (" + s.center() + ")"),\r
                () -> System.out.println("   [NOT FOUND]: No student matches ID 101")\r
            );\r
\r
        // 2. Querying for a non-existing student:\r
        System.out.println("\\n>>> 2. Querying for ID 999 (Missing):");\r
        String studentName = repo.findById(999)\r
            .map(Student::name)\r
            .orElse("Guest / Unregistered");\r
        System.out.println("   [RESOLVED]: " + studentName);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static class StudentRepository {\r
        private final List<Student> database = List.of(\r
            new Student(101, "Swadeep Paul", "Barrackpore"),\r
            new Student(102, "Tuhina Das", "Naihati"),\r
            new Student(103, "Abhronila Das", "Shyamnagar")\r
        );\r
\r
        // Standard Enterprise Pattern: Return Optional<T>\r
        public Optional<Student> findById(int id) {\r
            return database.stream()\r
                .filter(s -> s.id() == id)\r
                .findFirst();\r
        }\r
    }\r
\r
    record Student(int id, String name, String center) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 16: Optional as a Method Return Type\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. API CONTRACT CLARITY:\r
   - Returning 'Optional<T>' makes absence explicit in the method signature.\r
   - Eliminates need for '@Nullable' annotations or ambiguous Javadoc comments.\r
   - Prevents callers from writing careless code that crashes on missing records.\r
\r
2. WHEN NOT TO RETURN OPTIONAL:\r
   - If a method returns a Collection or Array, NEVER return 'Optional<List<T>>'!\r
     * Return an empty collection ('Collections.emptyList()' or 'List.of()') instead.\r
     * Empty collections already represent absence cleanly without extra wrapper objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why should a method never return Optional<List<T>> or Optional<Set<T>>?",shortAnswer:"Because collections already have a built-in, universal way to represent absence: an empty collection (List.of() or Collections.emptyList()). Wrapping a collection in an Optional adds unnecessary heap allocation and confusing nested API layers.",explanation:"Always return an empty collection rather than null or Optional<Collection>.",hint:"Return an empty collection (e.g. List.of()) instead of Optional<List<T>>.",level:"Intermediate",codeExample:"// BAD: Optional<List<Student>> findAll()\\n// GOOD: List<Student> findAll() -> returns List.of() if empty"},{question:"What is the benefit of returning Optional<T> from database repository methods?",shortAnswer:"It makes it impossible for calling code to forget that an entity might not exist, allowing seamless chaining with .orElseThrow(), .map(), and .ifPresent().",explanation:"Adopted universally across Spring Data JPA and modern ORMs.",hint:"Guarantees caller handles entity absence at compile time.",level:"Beginner",codeExample:"Optional<User> findById(Long id);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Optional as a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Method Return Type"}),": Expressing API Absence Contracts"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"API design excellence: making absence explicit in method signatures, eliminating Javadoc null warnings, and guiding API consumers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"OptionalAsReturnTypeDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_008 Topic 16: Optional as Return Type",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic16_optional_as_return_type_note.txt"})}),e.jsx(a,{note:"When your repository or service method might not find a record, return Optional<T>! It forces the developer who calls your method to immediately think about what happens when the record is missing! — Sukanta Hui"})]})}export{y as default};

import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 8: Generic Base DAO Interface - GenericDao<T, ID>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.io.Serializable;\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class GenericBaseDaoInterfaceDemo {\r
\r
    // 1. Standard Generic DAO Interface (Spring Data / Hibernate style):\r
    public interface GenericDao<T, ID extends Serializable> {\r
        Optional<T> findById(ID id);\r
        List<T> findAll();\r
        T save(T entity);\r
        void update(T entity);\r
        boolean deleteById(ID id);\r
        long count();\r
    }\r
\r
    // 2. Specific Entity Domain Model:\r
    public record Student(Integer id, String name, String center) {}\r
\r
    // 3. Entity-specific DAO Interface inheriting standard CRUD:\r
    public interface StudentDao extends GenericDao<Student, Integer> {\r
        // Additional domain-specific query methods:\r
        List<Student> findByCenter(String center);\r
        List<Student> findTopScorers(int limit);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: GENERIC BASE DAO INTERFACE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE POWER OF GENERICDAO<T, ID>:");\r
        System.out.println("  1. Standardizes CRUD contracts across all application entities (Student, Teacher, Course, Invoice).");\r
        System.out.println("  2. Type Safety : Generics guarantee strong compile-time types for IDs and Return values.");\r
        System.out.println("  3. Extensibility: Entity DAOs inherit 6 CRUD methods and only declare custom domain queries!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 8: Generic Base DAO Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC DAO INTERFACE DEFINITION:\r
   'public interface GenericDao<T, ID> {\r
        Optional<T> findById(ID id);\r
        List<T> findAll();\r
        void save(T entity);\r
        void update(T entity);\r
        void deleteById(ID id);\r
    }'\r
\r
2. TYPE PARAMETERS:\r
   - 'T'  : The Entity Domain type (e.g. 'Student', 'Invoice').\r
   - 'ID' : The Primary Key type (e.g. 'Integer', 'String', 'Long').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What are the advantages of creating a GenericDao<T, ID> base interface?",shortAnswer:"It standardizes standard CRUD method signatures across all application entities, enforces compile-time type safety for entity and primary key types, and eliminates duplicate interface definitions for common database operations.",explanation:"The foundational abstraction behind Spring Data CrudRepository.",hint:"Standardizes CRUD method signatures and eliminates duplicate interface code.",level:"Intermediate",codeExample:"public interface StudentDao extends GenericDao<Student, Integer> {}"},{question:"Why should findById(ID id) return Optional<T> instead of null?",shortAnswer:"To explicitly signal to callers that an entity with the requested primary key might not exist in the database, forcing null-safe handling and preventing NullPointerExceptions.",explanation:"Standard modern Java API design practice.",hint:"Signals that a record may not exist, preventing NullPointerExceptions.",level:"Beginner",codeExample:"Optional<T> findById(ID id);"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Generic Base DAO Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"GenericDao<T, ID>"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Reusable CRUD templates: designing a strongly typed generic DAO interface with findById, findAll, save, update, and deleteById."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"GenericBaseDaoInterfaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_005 Topic 8: Generic Base DAO Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic8_generic_base_dao_interface_note.txt"})}),e.jsx(r,{note:"Instead of writing findById, save, and delete for every single entity in your project, create ONE GenericDao<T, ID> interface! All your specific DAOs can extend it and inherit standard CRUD methods for free! — Sukanta Hui"})]})}export{f as default};

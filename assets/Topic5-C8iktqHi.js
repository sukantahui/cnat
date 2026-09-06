import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 5: @Documented Meta-Annotation - Javadoc Metadata Preservation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Documented;\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
\r
public class DocumentedMetaAnnotationDemo {\r
\r
    // 1. With @Documented: Will appear in public Javadoc HTML!\r
    @Documented\r
    @Target(ElementType.METHOD)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface PublicApiEndpoint {\r
        String version() default "v1.0";\r
        String description();\r
    }\r
\r
    // 2. Without @Documented: Secret internal annotation (Hidden from Javadoc HTML)\r
    @Target(ElementType.METHOD)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface InternalDevHack {}\r
\r
    public static class StudentPortalService {\r
\r
        @PublicApiEndpoint(version = "v2.0", description = "Retrieves student report card from Barrackpore DB")\r
        public void getReportCard(int studentId) {\r
            System.out.println("Fetching report card for ID: " + studentId);\r
        }\r
\r
        @InternalDevHack\r
        public void bypassCacheForTesting() {\r
            System.out.println("Internal test routine executed.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: @DOCUMENTED META-ANNOTATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentPortalService service = new StudentPortalService();\r
        service.getReportCard(101);\r
\r
        System.out.println("\\n>>> @DOCUMENTED BEST PRACTICES:");\r
        System.out.println("  - Apply @Documented to public framework annotations (e.g. @Autowired, @Transactional).");\r
        System.out.println("  - Omit @Documented from private implementation details and internal code linters.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 5: @Documented Meta-Annotation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT @DOCUMENTED DOES:\r
   - Instructs the 'javadoc' tool that elements annotated with this custom annotation\r
     should display the annotation above their signatures in generated HTML documentation.\r
\r
2. DEFAULT BEHAVIOR:\r
   - Without '@Documented', custom annotations are completely invisible in Javadoc HTML,\r
     even if they have 'RetentionPolicy.RUNTIME'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why should library developers apply @Documented to public API annotations?",shortAnswer:"Because without @Documented, the javadoc tool strips the annotations from the generated documentation HTML, preventing developers using the library from knowing that the method or class requires or supports that annotation.",explanation:"Crucial for public contracts like @Transactional or @NonNull.",hint:"Ensures annotations are visible in the generated HTML Javadoc documentation.",level:"Beginner",codeExample:"@Documented public @interface ApiContract {}"},{question:"Does @Documented have any effect on runtime Reflection or bytecode execution?",shortAnswer:"No. @Documented is strictly a tool directive for the javadoc documentation generator and has zero effect on runtime performance or bytecode execution.",explanation:"Purely a documentation metadata flag.",hint:"Zero effect on runtime execution or bytecode.",level:"Beginner",codeExample:"// Only affects javadoc generation tool"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Documented"}),": Preserving Metadata in Public API Javadocs"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"API documentation governance: ensuring custom annotations appear in generated Javadoc HTML documentation for external library consumers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"DocumentedMetaAnnotationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Annotations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 010_002 Topic 5: @Documented Meta-Annotation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic5_documented_meta_annotation_note.txt"})}),e.jsx(a,{note:"By default, annotations are omitted from generated Javadoc! Adding @Documented ensures that anyone reading your API documentation sees your custom annotations in the HTML docs! — Sukanta Hui"})]})}export{v as default};

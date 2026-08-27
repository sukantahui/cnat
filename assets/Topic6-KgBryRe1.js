import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 6: Managing Multiple Resources in a Single Statement: Semicolon Syntax\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.IOException;\r
\r
public class MultipleResourcesSemicolonSyntaxDemo {\r
\r
    public static void processDataTransformation(byte[] rawData) {\r
        System.out.println("  [PIPELINE START] Opening multiple stream resources...");\r
\r
        // Separating multiple resource declarations with semicolons ';' (Trailing semicolon is optional):\r
        try (\r
            ByteArrayInputStream inStream = new ByteArrayInputStream(rawData);\r
            ByteArrayOutputStream outStream = new ByteArrayOutputStream();\r
        ) {\r
            int byteVal;\r
            while ((byteVal = inStream.read()) != -1) {\r
                outStream.write(Character.toUpperCase(byteVal)); // Transform to uppercase\r
            }\r
\r
            System.out.println("  [TRANSFORMED DATA] " + outStream.toString());\r
            System.out.println("  [STATUS] Both inStream and outStream will now close automatically.");\r
\r
        } catch (IOException e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("  [PIPELINE COMPLETE] Resources released cleanly.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: MULTIPLE RESOURCES SEMICOLON SYNTAX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        byte[] input = "barrackpore academy java tutorial".getBytes();\r
        processDataTransformation(input);\r
\r
        System.out.println(">>> SYNTAX RULES FOR MULTIPLE RESOURCES:");\r
        System.out.println("  1. Each resource declaration must be separated by a semicolon ';'.");\r
        System.out.println("  2. The trailing semicolon after the last resource is optional in Java 7+.");\r
        System.out.println("  3. All declared resources must implement AutoCloseable.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 6: Multiple Resources Semicolon Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE RESOURCES SYNTAX:\r
   - Separate declarations with semicolons: 'try (Res1 r1 = ...; Res2 r2 = ...)'.\r
   - Both resources are scoped to the try block.\r
   - Automatically closed in reverse order upon completion.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do you declare multiple AutoCloseable resources inside a single Try-with-Resources header?",shortAnswer:"Separate each resource declaration with a semicolon ';' inside the try parentheses: 'try (ResourceA a = new ResourceA(); ResourceB b = new ResourceB()) { ... }'. The trailing semicolon after the final resource is optional.",explanation:"All resources in the header will be closed in reverse order of declaration upon exit.",hint:"Separate declarations using semicolons ';' inside the try parentheses.",level:"Beginner",codeExample:"try (InputStream in = ...; OutputStream out = ...) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Multi-Resource ARM"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Managing Multiple Resources in a Single Statement: Semicolon Syntax"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Coordinate complex data streams: declaring input and output pipelines in a single unified try statement separated by semicolons."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MultipleResourcesSemicolonSyntaxDemo.java",highlightLines:[7,10,15,16,17,18,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Multiple Resources FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 004_004 Topic 6: Multiple Resources ARM",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic6_multiple_resources_arm_note.txt"})}),e.jsx(n,{note:"You can declare as many resources as you want inside try (...) separated by semicolons! Java will track every single one and close them all cleanly! — Sukanta Hui"})]})}export{x as default};

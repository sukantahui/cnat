import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 10: The Decorator Pattern - Dynamic Behavior Attachment\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class DecoratorPatternDemo {\r
\r
    // 1. Component Interface:\r
    public interface TextData {\r
        String getContent();\r
    }\r
\r
    // 2. Concrete Base Component:\r
    public static class PlainText implements TextData {\r
        private final String text;\r
        public PlainText(String text) { this.text = text; }\r
        @Override public String getContent() { return text; }\r
    }\r
\r
    // 3. Base Decorator:\r
    public static abstract class TextDecorator implements TextData {\r
        protected final TextData wrapped;\r
        public TextDecorator(TextData wrapped) { this.wrapped = wrapped; }\r
    }\r
\r
    // Concrete Decorator 1: UpperCase\r
    public static class UpperCaseDecorator extends TextDecorator {\r
        public UpperCaseDecorator(TextData wrapped) { super(wrapped); }\r
        @Override\r
        public String getContent() {\r
            return wrapped.getContent().toUpperCase();\r
        }\r
    }\r
\r
    // Concrete Decorator 2: HTML Bold Tag\r
    public static class BoldDecorator extends TextDecorator {\r
        public BoldDecorator(TextData wrapped) { super(wrapped); }\r
        @Override\r
        public String getContent() {\r
            return "<b>" + wrapped.getContent() + "</b>";\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: DECORATOR DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Stacking decorators dynamically:\r
        TextData raw = new PlainText("Welcome to Coder & AccoTax Barrackpore");\r
        TextData upper = new UpperCaseDecorator(raw);\r
        TextData boldAndUpper = new BoldDecorator(upper);\r
\r
        System.out.println("Raw Text       : " + raw.getContent());\r
        System.out.println("Upper Text     : " + upper.getContent());\r
        System.out.println("Decorated Final: " + boldAndUpper.getContent());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 10: Decorator Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Attach additional responsibilities to an object dynamically.\r
   - Provide a flexible alternative to subclassing for extending functionality.\r
\r
2. CLASSIC JDK EXAMPLE:\r
   'new BufferedReader(new FileReader("data.txt"))'\r
   'new GZIPOutputStream(new BufferedOutputStream(new FileOutputStream("out.gz")))'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is the Decorator pattern superior to subclass inheritance when adding multiple optional features to an object?",shortAnswer:"Because subclass inheritance leads to a combinatorial explosion of subclasses (e.g. BufferedStream, EncryptedStream, CompressedStream, BufferedAndEncryptedStream, etc.), whereas the Decorator pattern allows wrapping any combination of features dynamically at runtime.",explanation:"Avoids class explosion through dynamic wrapping.",hint:"Prevents a combinatorial explosion of subclasses.",level:"Intermediate",codeExample:"new EncryptionDecorator(new CompressionDecorator(new BaseStream()));"},{question:"What is the key structural requirement for a Decorator class?",shortAnswer:"It must implement the same interface as the target component and hold a reference to an instance of that component interface.",explanation:"Preserves transparent substitutability.",hint:"Implements the component interface and wraps a component reference.",level:"Beginner",codeExample:"public abstract class Decorator implements Component { protected Component target; }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Decorator Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Dynamic Behavior Attachment"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extending functionality without inheritance: wrapping objects dynamically with buffering, encryption, compression, and logging (Java I/O streams)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DecoratorPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 012_001 Topic 10: Decorator Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic10_decorator_pattern_note.txt"})}),e.jsx(a,{note:"The Decorator pattern is how Java I/O works! When you write new BufferedReader(new InputStreamReader(new FileInputStream(file))), you are decorating a raw byte stream with character decoding, and then decorating that with buffering! — Sukanta Hui"})]})}export{b as default};

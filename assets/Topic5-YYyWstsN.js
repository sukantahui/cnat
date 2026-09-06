import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 5: Abstract Factory Pattern - Product Families\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class AbstractFactoryPatternDemo {\r
\r
    // 1. Abstract Products:\r
    public interface Button { void render(); }\r
    public interface Checkbox { void render(); }\r
\r
    // Concrete Products - Windows Family:\r
    public static class WindowsButton implements Button {\r
        @Override public void render() { System.out.println("   [WIN UI]: Rendering Windows Fluent Button."); }\r
    }\r
    public static class WindowsCheckbox implements Checkbox {\r
        @Override public void render() { System.out.println("   [WIN UI]: Rendering Windows Checkbox."); }\r
    }\r
\r
    // Concrete Products - Mac Family:\r
    public static class MacButton implements Button {\r
        @Override public void render() { System.out.println("   [MAC UI]: Rendering macOS Aqua Button."); }\r
    }\r
    public static class MacCheckbox implements Checkbox {\r
        @Override public void render() { System.out.println("   [MAC UI]: Rendering macOS Checkbox."); }\r
    }\r
\r
    // 2. Abstract Factory Interface:\r
    public interface GUIFactory {\r
        Button createButton();\r
        Checkbox createCheckbox();\r
    }\r
\r
    // Concrete Factories:\r
    public static class WindowsFactory implements GUIFactory {\r
        @Override public Button createButton() { return new WindowsButton(); }\r
        @Override public Checkbox createCheckbox() { return new WindowsCheckbox(); }\r
    }\r
\r
    public static class MacFactory implements GUIFactory {\r
        @Override public Button createButton() { return new MacButton(); }\r
        @Override public Checkbox createCheckbox() { return new MacCheckbox(); }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ABSTRACT FACTORY PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        GUIFactory factory = new WindowsFactory();\r
        Button btn = factory.createButton();\r
        Checkbox chk = factory.createCheckbox();\r
\r
        btn.render();\r
        chk.render();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 5: Abstract Factory Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Provide an interface for creating families of related or dependent objects without specifying\r
     their concrete classes.\r
\r
2. FACTORY METHOD VS ABSTRACT FACTORY:\r
   - Factory Method   : Creates ONE product type using subclassing.\r
   - Abstract Factory : Creates FAMILIES of related products using object composition.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does the Abstract Factory pattern differ from the Factory Method pattern?",shortAnswer:"Factory Method produces a single product type via subclass inheritance, whereas Abstract Factory defines an interface for creating an entire family of multiple related or dependent product objects via composition.",explanation:"Single product creation vs product family creation.",hint:"Abstract Factory creates families of related objects; Factory Method creates a single product.",level:"Intermediate",codeExample:"GUIFactory creates Button AND Checkbox family."},{question:"What is an example of the Abstract Factory pattern in the standard Java runtime library?",shortAnswer:"javax.xml.parsers.DocumentBuilderFactory.newInstance() and javax.xml.transform.TransformerFactory.newInstance().",explanation:"Creates families of XML document parsing and transformation engines.",hint:"DocumentBuilderFactory and TransformerFactory.",level:"Intermediate",codeExample:"DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Abstract Factory Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Product Families"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Families of related objects: creating cross-platform UI components, database drivers, and multi-cloud infrastructure adapters without specifying concrete classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"AbstractFactoryPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:c,title:"Module 012_001 Topic 5: Abstract Factory Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic5_abstract_factory_pattern_note.txt"})}),e.jsx(a,{note:"The Abstract Factory pattern creates whole families of matching objects! If you need a Dark Theme, it produces Dark Buttons, Dark Scrollbars, and Dark Menus together so you never mix up Dark and Light styles! — Sukanta Hui"})]})}export{h as default};

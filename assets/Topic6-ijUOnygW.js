import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 6: The Classic Rectangle vs Square LSP Violation & Proper Architectural Remedy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class RectangleSquareLspViolationDemo {\r
\r
    // 1. Base Class\r
    public static class Rectangle {\r
        protected int width;\r
        protected int height;\r
\r
        public void setWidth(int w) { this.width = w; }\r
        public void setHeight(int h) { this.height = h; }\r
        public int getWidth() { return width; }\r
        public int getHeight() { return height; }\r
        public int getArea() { return width * height; }\r
    }\r
\r
    // 2. Subclass attempting to model 'Square IS-A Rectangle'\r
    public static class Square extends Rectangle {\r
        @Override\r
        public void setWidth(int w) {\r
            this.width = w;\r
            this.height = w; // Enforcing square property mutates height unexpectedly!\r
        }\r
\r
        @Override\r
        public void setHeight(int h) {\r
            this.width = h;\r
            this.height = h; // Enforcing square property mutates width unexpectedly!\r
        }\r
    }\r
\r
    // CLIENT FUNCTION EXPECTING RECTANGLE INVARIANTS:\r
    public static void verifyRectangleArea(Rectangle r) {\r
        r.setWidth(10);\r
        r.setHeight(5);\r
        // Client expects Area == 10 * 5 = 50:\r
        System.out.printf("  Expected Area: 50 | Actual Area: %d | (Passed: %b)\\n",\r
                r.getArea(), (r.getArea() == 50));\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: RECTANGLE VS SQUARE LSP VIOLATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Testing with genuine Rectangle:");\r
        verifyRectangleArea(new Rectangle()); // Works perfectly: Area = 50\r
\r
        System.out.println("\\n>>> 2. Testing with Square substituted for Rectangle (LSP FAILURE):");\r
        verifyRectangleArea(new Square()); // Fails! Area = 5 * 5 = 25!\r
\r
        System.out.println("\\n>>> ARCHITECTURAL LESSON:");\r
        System.out.println("  - In mathematics, a Square is a Rectangle.");\r
        System.out.println("  - In Software Engineering, a mutable Square is NOT substitutable for a mutable Rectangle!");\r
        System.out.println("  - SOLUTION: Make both inherit from an abstract 'Shape' interface (with getArea()) instead.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 6: Rectangle vs Square LSP Violation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE SQUARE-RECTANGLE LESSON:\r
   - Behavior defines subtype validity, not real-world taxonomy.\r
   - Mutable Square breaks Rectangle width/height independence invariants.\r
   - Remedy: Use a common 'Shape' interface with 'int getArea()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does having 'class Square extends Rectangle' violate the Liskov Substitution Principle (LSP)?",shortAnswer:"Because a Rectangle assumes its width and height can be mutated independently. Overriding setters in Square to keep sides equal unexpectedly couples width and height, causing clients expecting Rectangle invariants (e.g. Area = 10 * 5 = 50) to fail.",explanation:"Mathematical relationships do not always translate to mutable software class hierarchies.",hint:"Mutating square width unexpectedly alters height, breaking rectangular area expectations.",level:"Intermediate",codeExample:"// Solution: interface Shape { int getArea(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Classic Anti-Pattern"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The Classic Rectangle vs Square LSP Violation & Remedy"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why mathematical intuition fails in mutable OOP hierarchies: exploring the infamous Square-Rectangle trap and how to design clean behavioral models with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Shape"})," interfaces."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"RectangleSquareLspViolationDemo.java",highlightLines:[11,21,24,30,35,47,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Square-Rectangle FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_011 Topic 6: Rectangle vs Square LSP Trap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic6_square_lsp_note.txt"})}),e.jsx(r,{note:"In math class, every square is a rectangle. But in Java, if setting width also silently mutates height, you break the caller's trust! Make them both implement Shape instead. — Sukanta Hui"})]})}export{x as default};

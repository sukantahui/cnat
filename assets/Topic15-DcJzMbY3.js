import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 15: Real-World Polymorphism: Shape Hierarchy (Circle, Rectangle, Triangle)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class RealWorldShapeHierarchyPolymorphismDemo {\r
\r
    public abstract static class Shape {\r
        protected String shapeName;\r
        public Shape(String name) { this.shapeName = name; }\r
        public abstract double calculateArea(); // Abstract contract for polymorphic dispatch\r
    }\r
\r
    public static class Circle extends Shape {\r
        private double radius;\r
        public Circle(double radius) {\r
            super("Circle");\r
            this.radius = radius;\r
        }\r
        @Override\r
        public double calculateArea() {\r
            return Math.PI * radius * radius;\r
        }\r
    }\r
\r
    public static class Rectangle extends Shape {\r
        private double width, height;\r
        public Rectangle(double width, double height) {\r
            super("Rectangle");\r
            this.width = width;\r
            this.height = height;\r
        }\r
        @Override\r
        public double calculateArea() {\r
            return width * height;\r
        }\r
    }\r
\r
    public static class Triangle extends Shape {\r
        private double base, height;\r
        public Triangle(double base, double height) {\r
            super("Triangle");\r
            this.base = base;\r
            this.height = height;\r
        }\r
        @Override\r
        public double calculateArea() {\r
            return 0.5 * base * height;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: SHAPE HIERARCHY POLYMORPHISM CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Shape[] blueprints = {\r
            new Circle(5.0),\r
            new Rectangle(4.0, 6.0),\r
            new Triangle(3.0, 8.0)\r
        };\r
\r
        double totalArea = 0.0;\r
        System.out.println(">>> Calculating blueprint areas polymorphically:");\r
        for (Shape s : blueprints) {\r
            double area = s.calculateArea(); // Dynamic Dispatch!\r
            System.out.printf("  -> %-12s Area: %8.2f sq. units\\n", s.shapeName, area);\r
            totalArea += area;\r
        }\r
\r
        System.out.printf("\\n>>> Total Combined Layout Area: %.2f sq. units\\n", totalArea);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_006 POLYMORPHISM & METHOD OVERRIDING 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 15: Shape Hierarchy Polymorphism Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 002_006 SUMMARY:\r
   - Compile-Time: Overloading (Static Binding, matching signatures).\r
   - Runtime: Overriding (Dynamic Method Dispatch via vtable).\r
   - Rules: Identical signature, cannot narrow access, covariant return allowed.\r
   - Upcasting is safe & implicit; Downcasting requires instanceof checks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is the Shape hierarchy (Circle, Rectangle, Triangle) the classic textbook demonstration of Dynamic Method Dispatch?",shortAnswer:"Because client loops can compute areas across mixed geometric collections via 'shape.calculateArea()' without writing cumbersome 'if (shape instanceof Circle)' conditionals.",explanation:"Dynamic Method Dispatch handles the mathematical formula dispatch internally.",hint:"Unified loop computes areas without manual type checking.",level:"Beginner",codeExample:"for (Shape s : shapes) total += s.calculateArea();"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Hierarchy"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Real-World Polymorphism: Shape Hierarchy (",e.jsx("code",{className:"text-sky-300 font-mono",children:"calculateArea()"})," Dispatch)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all Dynamic Method Dispatch mechanics in the classic Shape hierarchy: Circle, Rectangle, and Triangle area computations dispatched across heterogeneous arrays."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"RealWorldShapeHierarchyPolymorphismDemo.java",highlightLines:[10,13,22,33,44,57]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Shape Hierarchy FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 002_006 Topic 15: Shape Hierarchy Polymorphism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic15_shape_poly_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 002_006! You have mastered the full spectrum of Polymorphism in Java: from method overloading and covariant returns to JVM dynamic method dispatch and pattern matching instanceof! — Sukanta Hui"})]})}export{y as default};

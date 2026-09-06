import{j as e,b as o}from"./vendor-react-core-Doz9nIC6.js";import{J as l}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{T as d}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 3\r
 * Constructor Overloading (Compile-Time Polymorphism)\r
 *\r
 * Demonstrates:\r
 * 1. Defining multiple constructors in the same class with different parameter signatures.\r
 * 2. Creating a Rectangle class with:\r
 *    - Non-parameterized constructor (Default 0x0)\r
 *    - 1-parameter constructor (Square)\r
 *    - 2-parameter constructor (Custom Rectangle)\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class ConstructorOverloadingDemo {\r
\r
    private double length;\r
    private double breadth;\r
\r
    // Constructor 1: Default / Non-parameterized\r
    public ConstructorOverloadingDemo() {\r
        System.out.println(">>> [Constructor 1] Default 0x0 Shape Created");\r
        this.length = 0.0;\r
        this.breadth = 0.0;\r
    }\r
\r
    // Constructor 2: Overloaded (1 Parameter - Square)\r
    public ConstructorOverloadingDemo(double side) {\r
        System.out.println(">>> [Constructor 2] Square (" + side + " x " + side + ") Created");\r
        this.length = side;\r
        this.breadth = side;\r
    }\r
\r
    // Constructor 3: Overloaded (2 Parameters - Custom Rectangle)\r
    public ConstructorOverloadingDemo(double length, double breadth) {\r
        System.out.println(">>> [Constructor 3] Rectangle (" + length + " x " + breadth + ") Created");\r
        this.length = length;\r
        this.breadth = breadth;\r
    }\r
\r
    // Calculate Area\r
    public double calculateArea() {\r
        return this.length * this.breadth;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("--- Instantiating Overloaded Constructors ---");\r
\r
        // Invokes Constructor 1\r
        ConstructorOverloadingDemo shape1 = new ConstructorOverloadingDemo();\r
        System.out.println("Shape 1 Area: " + shape1.calculateArea());\r
\r
        // Invokes Constructor 2\r
        ConstructorOverloadingDemo shape2 = new ConstructorOverloadingDemo(5.0);\r
        System.out.println("Shape 2 Area: " + shape2.calculateArea());\r
\r
        // Invokes Constructor 3\r
        ConstructorOverloadingDemo shape3 = new ConstructorOverloadingDemo(8.0, 4.0);\r
        System.out.println("Shape 3 Area: " + shape3.calculateArea());\r
    }\r
}\r
`,u=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 3: CONSTRUCTOR OVERLOADING\r
================================================================================\r
\r
1. WHAT IS CONSTRUCTOR OVERLOADING?\r
   Constructor overloading is an example of Compile-Time Polymorphism where a class\r
   contains MULTIPLE constructors with the SAME NAME but DIFFERENT PARAMETER LISTS.\r
\r
2. RULES FOR CONSTRUCTOR OVERLOADING:\r
   Constructors must differ in at least ONE of the following:\r
   - Number of parameters (e.g. () vs (double) vs (double, double))\r
   - Data types of parameters (e.g. (int) vs (double))\r
   - Order of parameters (e.g. (int, double) vs (double, int))\r
\r
3. WHY OVERLOAD CONSTRUCTORS?\r
   Allows objects of the same class to be initialized in multiple flexible ways\r
   depending on the data available at the time of creation.\r
\r
4. ICSE EXAM WARNING:\r
   Changing ONLY the access specifier or return type does NOT overload a constructor!\r
   Constructors are matched at compile-time purely by argument signatures.\r
================================================================================\r
`,p=[{id:1,question:"What form of polymorphism is Constructor Overloading in Java?",options:["Runtime Polymorphism (Dynamic Binding)","Compile-Time Polymorphism (Static Binding)","Inheritance Abstraction","Encapsulated Data Binding"],correctAnswer:1,explanation:"Constructor overloading is resolved at compile time based on parameter signatures, making it Compile-Time Polymorphism."},{id:2,question:"Which of the following constructor signatures correctly overloads 'Demo(int x)'?",options:["public void Demo(int x)","Demo(int y)","Demo(double x)","private Demo(int z)"],correctAnswer:2,explanation:"Demo(double x) has a different data type (double vs int), validly overloading Demo(int x). Changing parameter names or return types alone is invalid."},{id:3,question:"Can a class have 3 constructors with signatures () , (int) , and (double, int)?",options:["Yes, because all 3 have different numbers or types of parameters.","No, a Java class can have at most 2 constructors.","No, constructors cannot mix int and double parameter types.","Yes, but only if they belong to different subclasses."],correctAnswer:0,explanation:"Java allows any number of overloaded constructors as long as their parameter lists differ in count, sequence, or data types."}],h=()=>{const[t,n]=o.useState(0),r=[{signature:"Shape()",params:"0 Arguments (Non-Parameterized)",code:"new Shape()",result:"Length = 0.0, Breadth = 0.0 | Area = 0.0",desc:"Invokes default non-parameterized constructor to initialize blank 0x0 shape."},{signature:"Shape(double side)",params:"1 Argument (double)",code:"new Shape(5.0)",result:"Length = 5.0, Breadth = 5.0 | Area = 25.0",desc:"Invokes 1-parameter constructor to initialize a Square object."},{signature:"Shape(double len, double brd)",params:"2 Arguments (double, double)",code:"new Shape(8.0, 4.0)",result:"Length = 8.0, Breadth = 4.0 | Area = 32.0",desc:"Invokes 2-parameter constructor to initialize a custom Rectangle object."}];return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔄 Interactive Constructor Overloading Matcher"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click a constructor signature to see how Java matches argument lists at compile time."})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:r.map((a,s)=>e.jsxs("button",{onClick:()=>n(s),className:`p-3 rounded-xl border text-left font-mono text-xs transition-all ${t===s?"bg-sky-500/20 text-sky-300 border-sky-400 ring-2 ring-sky-400/20":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-amber-300 mb-1",children:a.signature}),e.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:a.params})]},s))}),e.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2 font-sans",children:[e.jsx("span",{className:"text-slate-400",children:"Matched Invocation:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:r[t].code})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-amber-300",children:r[t].result}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed font-sans pt-1",children:["💡 ",r[t].desc]})]})]})},j=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Constructor Overloading"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Constructor Overloading & Polymorphism"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mastering compile-time polymorphism in Java by defining multiple constructors with distinct parameter lists within the same class."})]}),e.jsx("section",{children:e.jsx(h,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Overloading Rules & Signature Matching"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400",children:"Valid Overloading Criteria"}),e.jsx("p",{children:"Constructors must differ in one of 3 ways:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-xs text-slate-400",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Number of Parameters:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"()"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(int)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(int, int)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Types:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"(int)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(double)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sequence:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"(int, String)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(String, int)"})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-amber-400",children:"Invalid Overloading Traps"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Changing variable names alone (e.g. ",e.jsx("code",{className:"text-amber-300",children:"Demo(int x)"})," vs ",e.jsx("code",{className:"text-amber-300",children:"Demo(int y)"}),") is NOT valid overloading and causes a duplicate constructor compile error."]})]})]})]}),e.jsx("section",{children:e.jsx(l,{fileName:"ConstructorOverloadingDemo.java",code:m,title:"Executable Code: Overloaded Constructor Shapes Program"})}),e.jsx("section",{children:e.jsx(i,{questions:p,title:"ICSE Quiz: Constructor Overloading"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(d,{note:"ICSE Board Pattern: Question 4 of Section B often asks you to write a class like 'Employee' or 'Rectangle' containing two overloaded constructors. Always check that their parameter lists are distinct!"}),e.jsx(c,{content:u,title:"Printable Cheat Sheet: Topic 3 Notes"})]})]});export{j as default};

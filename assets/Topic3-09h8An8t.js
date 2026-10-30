import{j as e,b as s}from"./vendor-react-core-B-R9HE-Z.js";import{J as i}from"./JavaFileLoader-6jhmPdiK.js";import{F as c}from"./FAQTemplate-16IfroqC.js";import{P as l}from"./PlainTextPrint-C6NaUtnE.js";import{T as d}from"./TeacherSukantaHui-BNkj6ayy.js";import"./JavaCodeBlock-DATOiX7m.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-C3ItUxP5.js";const u=`/**\r
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
`,p=`================================================================================\r
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
`,m=[{id:1,question:"What is the core purpose of Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #1 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:2,question:"How does the Java compiler handle Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #2 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:3,question:"What is the syntax specification for Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #3 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:4,question:"Which common error occurs in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #4 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:5,question:"How does variable scope relate to Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #5 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:6,question:"What is the memory behavior in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #6 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:7,question:"How do you call another constructor in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #7 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:8,question:"Can access specifiers be used with Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #8 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:9,question:"What is the difference between methods and constructors in Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #9 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:10,question:"How does BlueJ visualize Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #10 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:11,question:"Can exception handling be added to Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #11 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:12,question:"What is constructor chaining in the context of Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #12 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:13,question:"How are default values affected by Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #13 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:14,question:"What role does the 'this' keyword play in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #14 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:15,question:"What role does the 'super' keyword play in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #15 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:16,question:"Can Constructor Topic 3 be declared static?",shortAnswer:"Constructor Topic 3: Core principle #16 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:17,question:"Can Constructor Topic 3 be declared final?",shortAnswer:"Constructor Topic 3: Core principle #17 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:18,question:"Can Constructor Topic 3 be declared abstract?",shortAnswer:"Constructor Topic 3: Core principle #18 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:19,question:"How does inheritance affect Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #19 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:20,question:"What happens during object creation in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #20 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:21,question:"How does parameter matching work in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #21 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:22,question:"What is defensive copying in Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #22 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:23,question:"How do you write a VDT entry for Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #23 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:24,question:"What is the ICSE marking breakdown for Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #24 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:25,question:"What is Sukanta Hui's golden rule for Constructor Topic 3?",shortAnswer:"Constructor Topic 3: Core principle #25 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 3: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`}],h=()=>{const[t,r]=s.useState(0),n=[{signature:"Shape()",params:"0 Arguments (Non-Parameterized)",code:"new Shape()",result:"Length = 0.0, Breadth = 0.0 | Area = 0.0",desc:"Invokes default non-parameterized constructor to initialize blank 0x0 shape."},{signature:"Shape(double side)",params:"1 Argument (double)",code:"new Shape(5.0)",result:"Length = 5.0, Breadth = 5.0 | Area = 25.0",desc:"Invokes 1-parameter constructor to initialize a Square object."},{signature:"Shape(double len, double brd)",params:"2 Arguments (double, double)",code:"new Shape(8.0, 4.0)",result:"Length = 8.0, Breadth = 4.0 | Area = 32.0",desc:"Invokes 2-parameter constructor to initialize a custom Rectangle object."}];return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔄 Interactive Constructor Overloading Matcher"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click a constructor signature to see how Java matches argument lists at compile time."})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:n.map((o,a)=>e.jsxs("button",{onClick:()=>r(a),className:`p-3 rounded-xl border text-left font-mono text-xs transition-all ${t===a?"bg-sky-500/20 text-sky-300 border-sky-400 ring-2 ring-sky-400/20":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-amber-300 mb-1",children:o.signature}),e.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:o.params})]},a))}),e.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2 font-sans",children:[e.jsx("span",{className:"text-slate-400",children:"Matched Invocation:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:n[t].code})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-amber-300",children:n[t].result}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed font-sans pt-1",children:["💡 ",n[t].desc]})]})]})},j=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Constructor Overloading"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Constructor Overloading & Polymorphism"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mastering compile-time polymorphism in Java by defining multiple constructors with distinct parameter lists within the same class."})]}),e.jsx("section",{children:e.jsx(h,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Overloading Rules & Signature Matching"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400",children:"Valid Overloading Criteria"}),e.jsx("p",{children:"Constructors must differ in one of 3 ways:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-xs text-slate-400",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Number of Parameters:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"()"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(int)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(int, int)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Types:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"(int)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(double)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sequence:"})," e.g. ",e.jsx("code",{className:"text-sky-300",children:"(int, String)"})," vs ",e.jsx("code",{className:"text-sky-300",children:"(String, int)"})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-amber-400",children:"Invalid Overloading Traps"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Changing variable names alone (e.g. ",e.jsx("code",{className:"text-amber-300",children:"Demo(int x)"})," vs ",e.jsx("code",{className:"text-amber-300",children:"Demo(int y)"}),") is NOT valid overloading and causes a duplicate constructor compile error."]})]})]})]}),e.jsx("section",{children:e.jsx(i,{fileName:"ConstructorOverloadingDemo.java",code:u,title:"Executable Code: Overloaded Constructor Shapes Program"})}),e.jsx("section",{children:e.jsx(c,{questions:m,title:"ICSE Quiz: Constructor Overloading"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(d,{note:"ICSE Board Pattern: Question 4 of Section B often asks you to write a class like 'Employee' or 'Rectangle' containing two overloaded constructors. Always check that their parameter lists are distinct!"}),e.jsx(l,{content:p,title:"Printable Cheat Sheet: Topic 3 Notes"})]})]});export{j as default};

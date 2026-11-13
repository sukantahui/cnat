import{j as t,b as r}from"./vendor-react-core-B-R9HE-Z.js";import{J as i}from"./JavaFileLoader-6jhmPdiK.js";import{F as s}from"./FAQTemplate-16IfroqC.js";import{P as c}from"./PlainTextPrint-C6NaUtnE.js";import{T as l}from"./TeacherSukantaHui-Bmd0QPjl.js";import"./JavaCodeBlock-DATOiX7m.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-C-igd3yh.js";const d=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 1\r
 * Default Constructor vs User-Defined Non-Parameterized Constructor\r
 *\r
 * Demonstrates:\r
 * 1. Automatic insertion of compiler default constructor when no constructors are defined.\r
 * 2. Loss of default constructor once a parameterized constructor is declared.\r
 * 3. Default zero/null initialization values for primitive and reference data types.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class DefaultConstructorDemo {\r
\r
    // Instance variables of various data types\r
    private int intVal;\r
    private double doubleVal;\r
    private boolean booleanVal;\r
    private char charVal;\r
    private String stringVal;\r
\r
    // Explicit Non-Parameterized Constructor\r
    public DefaultConstructorDemo() {\r
        System.out.println(">>> User-Defined Non-Parameterized Constructor Invoked!");\r
        // We explicitly set initial values\r
        intVal = 10;\r
        doubleVal = 99.5;\r
        booleanVal = true;\r
        charVal = 'A';\r
        stringVal = "Coder & AccoTax";\r
    }\r
\r
    public void displayDefaults() {\r
        System.out.println("----------------------------------------");\r
        System.out.println("Integer Value  : " + intVal);\r
        System.out.println("Double Value   : " + doubleVal);\r
        System.out.println("Boolean Value  : " + booleanVal);\r
        System.out.println("Char Value     : '" + charVal + "'");\r
        System.out.println("String Value   : " + stringVal);\r
        System.out.println("----------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("--- Creating Object with Non-Parameterized Constructor ---");\r
        DefaultConstructorDemo obj = new DefaultConstructorDemo();\r
        obj.displayDefaults();\r
    }\r
}\r
`,u=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 1: DEFAULT VS NON-PARAMETERIZED CONSTRUCTOR\r
================================================================================\r
\r
1. COMPILER-PROVIDED DEFAULT CONSTRUCTOR:\r
   If a class contains NO constructors at all, the Java compiler automatically\r
   supplies a hidden default constructor with no arguments.\r
   \r
   Default Initialization Values:\r
   - byte, short, int, long : 0\r
   - float, double          : 0.0 / 0.0f\r
   - char                   : '\\u0000' (null character)\r
   - boolean                : false\r
   - Object references      : null\r
\r
2. CRITICAL ICSE EXAM TRAP:\r
   If you define ANY constructor (e.g. a Parameterized Constructor), the compiler\r
   WILL NOT supply the default constructor automatically!\r
   \r
   Example Trap:\r
   class Demo {\r
       Demo(int x) { ... } // Parameterized\r
   }\r
   \r
   Demo d = new Demo(); // COMPILATION ERROR! No default constructor available.\r
\r
3. NON-PARAMETERIZED CONSTRUCTOR:\r
   A constructor written by the programmer that accepts zero arguments but contains\r
   explicit initialization logic.\r
================================================================================\r
`,p=[{id:1,question:"What is the core purpose of Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #1 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:2,question:"How does the Java compiler handle Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #2 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:3,question:"What is the syntax specification for Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #3 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:4,question:"Which common error occurs in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #4 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:5,question:"How does variable scope relate to Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #5 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:6,question:"What is the memory behavior in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #6 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:7,question:"How do you call another constructor in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #7 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:8,question:"Can access specifiers be used with Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #8 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:9,question:"What is the difference between methods and constructors in Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #9 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:10,question:"How does BlueJ visualize Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #10 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:11,question:"Can exception handling be added to Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #11 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:12,question:"What is constructor chaining in the context of Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #12 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:13,question:"How are default values affected by Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #13 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:14,question:"What role does the 'this' keyword play in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #14 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:15,question:"What role does the 'super' keyword play in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #15 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:16,question:"Can Constructor Topic 1 be declared static?",shortAnswer:"Constructor Topic 1: Core principle #16 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:17,question:"Can Constructor Topic 1 be declared final?",shortAnswer:"Constructor Topic 1: Core principle #17 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:18,question:"Can Constructor Topic 1 be declared abstract?",shortAnswer:"Constructor Topic 1: Core principle #18 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:19,question:"How does inheritance affect Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #19 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:20,question:"What happens during object creation in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #20 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:21,question:"How does parameter matching work in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #21 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:22,question:"What is defensive copying in Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #22 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:23,question:"How do you write a VDT entry for Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #23 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:24,question:"What is the ICSE marking breakdown for Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #24 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:25,question:"What is Sukanta Hui's golden rule for Constructor Topic 1?",shortAnswer:"Constructor Topic 1: Core principle #25 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 1: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`}],m=()=>{const[e,o]=r.useState("int"),a={int:{label:"int / short / byte",value:"0",desc:"Integer numeric fields default to zero."},double:{label:"double / float",value:"0.0 / 0.0f",desc:"Floating-point numbers default to 0.0."},boolean:{label:"boolean",value:"false",desc:"Booleans default to false."},char:{label:"char",value:"'\\u0000' (Null char)",desc:"Character fields default to Unicode null character."},String:{label:"String / Object Ref",value:"null",desc:"All object references (Strings, Arrays, Objects) default to null."}};return t.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[t.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[t.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔍 Compiler Default Zero-Fill Value Inspector"}),t.jsx("p",{className:"text-xs text-slate-400",children:"Select a Java data type to inspect its automatic default initialization value when no explicit value is assigned."})]}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:Object.keys(a).map(n=>t.jsx("button",{onClick:()=>o(n),className:`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${e===n?"bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"}`,children:n},n))}),t.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"text-xs text-slate-400 font-mono mb-1",children:["Data Type: ",t.jsx("span",{className:"text-sky-300 font-bold",children:a[e].label})]}),t.jsx("div",{className:"text-sm font-semibold text-slate-200",children:a[e].desc})]}),t.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-base text-amber-300 font-bold min-w-[140px] text-center",children:["Default: ",a[e].value]})]})]})},g=()=>t.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Default vs Non-Parameterized"})]}),t.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Default Constructor vs Non-Parameterized Constructor"}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding compiler-supplied default constructors, default zero-fill memory states, and programmer-defined non-parameterized constructors."})]}),t.jsx("section",{children:t.jsx(m,{})}),t.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[t.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Key Differences: Default vs User Non-Parameterized"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[t.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[t.jsx("h3",{className:"font-bold text-amber-400",children:"1. Compiler Default Constructor"}),t.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-xs text-slate-400",children:[t.jsxs("li",{children:["Inserted ",t.jsx("strong",{className:"text-slate-200",children:"automatically"})," by Java compiler if NO constructors exist."]}),t.jsxs("li",{children:["Body contains no custom logic; only calls ",t.jsx("code",{className:"text-sky-300",children:"super()"}),"."]}),t.jsxs("li",{children:["Fills fields with standard zero/null values (e.g. ",t.jsx("code",{className:"text-amber-300",children:"int → 0"}),", ",t.jsx("code",{className:"text-amber-300",children:"String → null"}),")."]})]})]}),t.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[t.jsx("h3",{className:"font-bold text-emerald-400",children:"2. User Non-Parameterized Constructor"}),t.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-xs text-slate-400",children:[t.jsx("li",{children:"Explicitly written by the programmer in the source code."}),t.jsx("li",{children:"Takes 0 arguments but contains explicit custom initialization logic."}),t.jsx("li",{children:"Overrides and replaces compiler default constructor."})]})]})]})]}),t.jsx("section",{children:t.jsx(i,{fileName:"DefaultConstructorDemo.java",code:d,title:"Executable Code: Non-Parameterized Constructor Demonstration"})}),t.jsx("section",{children:t.jsx(s,{questions:p,title:"ICSE Quiz: Default Constructor Rules"})}),t.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsx(l,{note:"Beware of ICSE output questions: If a class defines 'Demo(int x)', calling 'new Demo()' causes a Compile-Time Error because Java revokes the default constructor once any constructor is explicitly declared!"}),t.jsx(c,{content:u,title:"Printable Cheat Sheet: Topic 1 Notes"})]})]});export{g as default};

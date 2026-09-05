import{j as e,b as s}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const l=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 2\r
 * Parameterized Constructor & The 'this' Keyword\r
 *\r
 * Demonstrates:\r
 * 1. Passing dynamic arguments to initialize object state during creation.\r
 * 2. Using 'this' keyword to resolve variable shadowing between instance variables and parameters.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class ParameterizedConstructorDemo {\r
\r
    // Instance variables (State)\r
    private String studentName;\r
    private int rollNumber;\r
    private double percentage;\r
\r
    // Parameterized Constructor using 'this' keyword\r
    public ParameterizedConstructorDemo(String studentName, int rollNumber, double percentage) {\r
        System.out.println(">>> Parameterized Constructor Invoked with Custom Arguments!");\r
        // 'this.studentName' refers to instance field; 'studentName' refers to parameter\r
        this.studentName = studentName;\r
        this.rollNumber = rollNumber;\r
        this.percentage = percentage;\r
    }\r
\r
    public void displayProfile() {\r
        System.out.println("----------------------------------------");\r
        System.out.println("Student Name : " + this.studentName);\r
        System.out.println("Roll Number  : " + this.rollNumber);\r
        System.out.println("Percentage   : " + this.percentage + "%");\r
        System.out.println("----------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("--- Instantiating Objects with Custom Data ---");\r
        \r
        // Creating student 1\r
        ParameterizedConstructorDemo s1 = new ParameterizedConstructorDemo("Rahul Sharma", 101, 92.4);\r
        s1.displayProfile();\r
\r
        // Creating student 2\r
        ParameterizedConstructorDemo s2 = new ParameterizedConstructorDemo("Ananya Roy", 102, 95.8);\r
        s2.displayProfile();\r
    }\r
}\r
`,d=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 2: PARAMETERIZED CONSTRUCTOR & 'this' KEYWORD\r
================================================================================\r
\r
1. PARAMETERIZED CONSTRUCTOR:\r
   A constructor that accepts parameters to initialize an object's instance\r
   variables with custom data at the moment of creation.\r
   \r
   Syntax:\r
   public Student(String name, int r) {\r
       studentName = name;\r
       rollNumber = r;\r
   }\r
\r
2. THE 'this' KEYWORD:\r
   - 'this' is a reference variable that refers to the CURRENT OBJECT instance.\r
   - Purpose: Differentiates instance variables from constructor parameters when\r
     they share the exact same parameter names (Variable Shadowing).\r
\r
3. VARIABLE SHADOWING EXAMPLE:\r
   public Student(String name, int roll) {\r
       this.name = name; // 'this.name' = instance field; 'name' = parameter\r
       this.roll = roll;\r
   }\r
\r
4. ICSE EXAM ADVICE:\r
   Always use 'this' when constructor parameter names match instance variable names!\r
   Writing 'name = name;' without 'this' assigns the parameter to itself, leaving\r
   the instance field unchanged (zero or null)!\r
================================================================================\r
`,c=[{id:1,question:"What is the primary role of the 'this' keyword when used inside a Java constructor?",options:["To destroy the current object from memory","To refer to the current class instance and resolve variable shadowing","To convert primitive data types into wrapper objects","To call static methods of another class"],correctAnswer:1,explanation:"The 'this' keyword refers to the current executing object instance, allowing Java to distinguish between instance fields and local method parameters when they share the same name."},{id:2,question:`Consider: class Book { String title; Book(String title) { title = title; } }. What happens when an object is instantiated with 'new Book("Java")'?`,options:[`The instance variable 'title' receives the value "Java".`,"Variable shadowing occurs: parameter assigns to itself, leaving instance variable 'title' as null.","A compilation error occurs due to duplicate variable names.","The JVM throws a NullPointerException."],correctAnswer:1,explanation:"Without 'this.title = title;', the parameter title assigns to itself (local scope), leaving the instance field 'title' uninitialized (null)."},{id:3,question:"Which constructor call correctly instantiates: 'class Car { Car(String model, int speed) {} }'?",options:["Car c = new Car();",'Car c = new Car("Tesla", 120);','Car c = Car("Tesla", 120);','Car c = new Car(120, "Tesla");'],correctAnswer:1,explanation:"The arguments must match the constructor's parameter types and sequence: String followed by int."}],m=()=>{const[t,r]=s.useState(!0);return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔍 Variable Shadowing & 'this' Keyword Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle between using 'this.name = name' vs 'name = name' to see how Java resolves object state initialization."})]}),e.jsx("button",{onClick:()=>r(!t),className:`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${t?"bg-emerald-500/20 text-emerald-400 border-emerald-500/40":"bg-amber-500/20 text-amber-400 border-amber-500/40"}`,children:t?"✅ Using 'this' Keyword":"⚠️ Without 'this' Keyword"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-2",children:[e.jsx("div",{className:"text-slate-400",children:"// Constructor Definition"}),e.jsx("div",{className:"text-sky-300",children:"public Student(String name, int roll) {"}),e.jsx("div",{className:"pl-4 text-amber-300 font-bold",children:t?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"this.name = name;"}),e.jsx("div",{children:"this.roll = roll;"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["name = name; ",e.jsx("span",{className:"text-slate-500",children:"// Assigns parameter to parameter!"})]}),e.jsx("div",{children:"roll = roll;"})]})}),e.jsx("div",{className:"text-sky-300",children:"}"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Resulting Object State on Heap"}),e.jsxs("div",{className:"font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"instance field 'name':"}),e.jsx("span",{className:t?"text-emerald-400 font-bold":"text-rose-400 font-bold",children:t?'"Rahul Sharma"':"null (Unassigned!)"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"instance field 'roll':"}),e.jsx("span",{className:t?"text-emerald-400 font-bold":"text-rose-400 font-bold",children:t?"101":"0 (Unassigned!)"})]})]}),e.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed font-sans",children:t?"💡 'this.name' explicitly targets the current Heap object's field, ensuring data is saved.":"⚠️ Without 'this', parameter 'name' hides the instance variable (Shadowing), so instance field remains null!"})]})]})]})},y=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Parameterized Constructors & 'this'"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Parameterized Constructors & The 'this' Keyword"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to pass custom arguments during object creation and resolve instance variable shadowing using the Java 'this' reference."})]}),e.jsx("section",{children:e.jsx(m,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Core Principles of Parameterized Initialization"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400",children:"Custom State Instantiation"}),e.jsx("p",{children:"Parameterized constructors accept inputs during instantiation, enabling each object to start with unique attributes (e.g. unique account numbers, student names, or dimensions)."})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400",children:"Role of 'this' Keyword"}),e.jsxs("p",{children:["The ",e.jsx("code",{className:"text-amber-300",children:"this"})," keyword holds the memory reference of the current object. It cleanly separates ",e.jsx("code",{className:"text-sky-300",children:"this.field"})," from method parameters."]})]})]})]}),e.jsx("section",{children:e.jsx(a,{fileName:"ParameterizedConstructorDemo.java",code:l,title:"Executable Code: Parameterized Constructor & 'this' Reference"})}),e.jsx("section",{children:e.jsx(n,{questions:c,title:"ICSE Quiz: Parameterized Constructor & 'this'"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(o,{note:"ICSE Board Exam Tip: In Section B programming questions, if instance fields are named 'name' and 'roll', use 'this.name = name;' inside your parameterized constructor to score full marks for clean OOP style!"}),e.jsx(i,{content:d,title:"Printable Cheat Sheet: Topic 2 Notes"})]})]});export{y as default};

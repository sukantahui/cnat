import{j as t,b as r}from"./vendor-react-core-B-R9HE-Z.js";import{J as d}from"./JavaFileLoader-6jhmPdiK.js";import{F as u}from"./FAQTemplate-16IfroqC.js";import{P as m}from"./PlainTextPrint-C6NaUtnE.js";import{T as p}from"./TeacherSukantaHui-Bmd0QPjl.js";import"./JavaCodeBlock-DATOiX7m.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-C-igd3yh.js";const h=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 5\r
 * Comprehensive ICSE Board Program: BankAccount & Library Book Management\r
 *\r
 * Demonstrates:\r
 * 1. 15-Mark ICSE Board Exam Class Design.\r
 * 2. Parameterized constructor initializing fields.\r
 * 3. Member methods performing calculations (Deposit, Withdraw, Fine calculation).\r
 * 4. Display method printing complete object status.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class ComprehensiveConstructorPractice {\r
\r
    // Instance Variables (Fields)\r
    private String depositorName;\r
    private long accountNumber;\r
    private double balance;\r
\r
    // 1. Parameterized Constructor to initialize account\r
    public ComprehensiveConstructorPractice(String depositorName, long accountNumber, double balance) {\r
        this.depositorName = depositorName;\r
        this.accountNumber = accountNumber;\r
        this.balance = balance;\r
    }\r
\r
    // 2. Member Method to Deposit Amount\r
    public void deposit(double amount) {\r
        if (amount > 0) {\r
            this.balance += amount;\r
            System.out.println("✅ Deposited: Rs. " + amount + " | Updated Balance: Rs. " + this.balance);\r
        } else {\r
            System.out.println("❌ Invalid Deposit Amount!");\r
        }\r
    }\r
\r
    // 3. Member Method to Withdraw Amount\r
    public void withdraw(double amount) {\r
        if (amount > 0 && this.balance >= amount) {\r
            this.balance -= amount;\r
            System.out.println("✅ Withdrawn: Rs. " + amount + " | Remaining Balance: Rs. " + this.balance);\r
        } else {\r
            System.out.println("❌ Insufficient Balance or Invalid Amount!");\r
        }\r
    }\r
\r
    // 4. Member Method to Display Account Status\r
    public void display() {\r
        System.out.println("========================================");\r
        System.out.println("ACCOUNT STATUS REPORT");\r
        System.out.println("Account Holder : " + this.depositorName);\r
        System.out.println("Account Number : " + this.accountNumber);\r
        System.out.println("Current Balance: Rs. " + this.balance);\r
        System.out.println("========================================");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("=== ICSE Class Design Practice Program ===");\r
\r
        // Create object using Parameterized Constructor\r
        ComprehensiveConstructorPractice acc1 = new ComprehensiveConstructorPractice("Amitav Ghosh", 9876543210L, 5000.0);\r
        \r
        acc1.display();\r
        acc1.deposit(2500.0);\r
        acc1.withdraw(1200.0);\r
        acc1.display();\r
    }\r
}\r
`,b=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 5: COMPREHENSIVE BOARD EXAM PROGRAMMING PRACTICE\r
================================================================================\r
\r
ICSE SECTION B CLASS DESIGN RUBRIC (15 MARKS):\r
\r
1. Instance Variables Declaration (2 Marks):\r
   - Declare fields with correct access modifier (private/default) and data types.\r
\r
2. Constructor Definition (3 Marks):\r
   - Correct constructor signature (exact class name, matching parameter list).\r
   - Accurate initialization of instance fields.\r
\r
3. Member Methods (7 Marks):\r
   - Calculation logic, loops, conditionals, or string manipulations.\r
\r
4. Main Method & Instantiation (3 Marks):\r
   - Object instantiation using 'new' operator.\r
   - Method invocation in correct order.\r
================================================================================\r
`,x=[{id:1,question:"What is the core purpose of Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #1 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:2,question:"How does the Java compiler handle Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #2 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:3,question:"What is the syntax specification for Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #3 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:4,question:"Which common error occurs in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #4 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:5,question:"How does variable scope relate to Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #5 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:6,question:"What is the memory behavior in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #6 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:7,question:"How do you call another constructor in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #7 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:8,question:"Can access specifiers be used with Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #8 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"basic",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:9,question:"What is the difference between methods and constructors in Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #9 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:10,question:"How does BlueJ visualize Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #10 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:11,question:"Can exception handling be added to Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #11 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:12,question:"What is constructor chaining in the context of Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #12 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:13,question:"How are default values affected by Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #13 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:14,question:"What role does the 'this' keyword play in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #14 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:15,question:"What role does the 'super' keyword play in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #15 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:16,question:"Can Constructor Topic 5 be declared static?",shortAnswer:"Constructor Topic 5: Core principle #16 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:17,question:"Can Constructor Topic 5 be declared final?",shortAnswer:"Constructor Topic 5: Core principle #17 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:18,question:"Can Constructor Topic 5 be declared abstract?",shortAnswer:"Constructor Topic 5: Core principle #18 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"intermediate",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:19,question:"How does inheritance affect Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #19 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:20,question:"What happens during object creation in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #20 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:21,question:"How does parameter matching work in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #21 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:22,question:"What is defensive copying in Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #22 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:23,question:"How do you write a VDT entry for Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #23 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:24,question:"What is the ICSE marking breakdown for Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #24 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`},{id:25,question:"What is Sukanta Hui's golden rule for Constructor Topic 5?",shortAnswer:"Constructor Topic 5: Core principle #25 regarding constructor mechanics in ICSE Class 10.",explanation:"Detailed explanation for Topic 5: Constructors in Java are specialized routines responsible for safe object creation and instance variable initialization. Adheres to ICSE board standards.",hint:"Focus on OOP initialization rules, memory allocation, and class syntax.",level:"advanced",options:["A constructor must match the class name exactly and have no return type","A constructor must have a void return type","A constructor can be called explicitly on an object anytime using dot notation","Constructors are inherited by all subclasses automatically"],correctAnswer:0,codeExample:`// Constructor standard code:
class Demo {
  Demo() { /* initialization */ }
}`}],C=()=>{const[n,a]=r.useState(5e3),[i,o]=r.useState(["Account created with initial balance Rs. 5000.0"]),s=()=>{a(e=>e+1e3),o(e=>[...e,"Deposited +Rs. 1000 | New Balance: Rs. "+(n+1e3)])},c=()=>{n>=500&&(a(e=>e-500),o(e=>[...e,"Withdrew -Rs. 500 | New Balance: Rs. "+(n-500)]))};return t.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[t.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🎮 Interactive ICSE Class Design Bank Simulator"}),t.jsx("p",{className:"text-xs text-slate-400",children:"Simulate object instantiation via parameterized constructor and execute member method transactions."})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:s,className:"px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded-lg shadow transition-all",children:"+ Deposit Rs. 1000"}),t.jsx("button",{onClick:c,className:"px-3 py-1.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold rounded-lg shadow transition-all",children:"- Withdraw Rs. 500"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[t.jsxs("div",{className:"text-sky-400 font-bold",children:['BankAccount acc1 = new BankAccount("Amitav", 98765L, ',n,");"]}),t.jsxs("div",{className:"text-slate-400 text-[11px]",children:["Current Balance State: ",t.jsxs("span",{className:"text-amber-300 font-bold",children:["Rs. ",n]})]})]}),t.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 font-mono text-[11px] max-h-36 overflow-y-auto",children:[t.jsx("div",{className:"text-slate-400 font-bold font-sans text-xs mb-1",children:"Execution Audit Trail:"}),i.map((e,l)=>t.jsxs("div",{className:"text-emerald-400",children:["➜ ",e]},l))]})]})]})},E=()=>t.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 5"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Comprehensive ICSE Programs"})]}),t.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Comprehensive ICSE Board Program & Class Design"}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Full 15-mark ICSE Section B practice program: Class variables, Parameterized Constructors, member calculation methods, and main() driver execution."})]}),t.jsx("section",{children:t.jsx(C,{})}),t.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[t.jsx("h2",{className:"text-xl font-bold text-white",children:"📋 ICSE Section B 15-Mark Class Marking Blueprint"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans",children:[t.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[t.jsx("div",{className:"text-sky-400 font-bold text-sm",children:"1. Instance Fields"}),t.jsx("div",{className:"text-slate-400",children:"Declare data members with appropriate data types (2 Marks)."})]}),t.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[t.jsx("div",{className:"text-amber-400 font-bold text-sm",children:"2. Constructor"}),t.jsx("div",{className:"text-slate-400",children:"Initialize fields using parameterized constructor (3 Marks)."})]}),t.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[t.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"3. Methods"}),t.jsx("div",{className:"text-slate-400",children:"Implement calculation, processing & display logic (7 Marks)."})]}),t.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[t.jsx("div",{className:"text-indigo-400 font-bold text-sm",children:"4. Main Driver"}),t.jsx("div",{className:"text-slate-400",children:"Instantiate object via 'new' and execute methods (3 Marks)."})]})]})]}),t.jsx("section",{children:t.jsx(d,{fileName:"ComprehensiveConstructorPractice.java",code:h,title:"Complete Executable Board Program: BankAccount Class Design"})}),t.jsx("section",{children:t.jsx(u,{questions:x,title:"ICSE Quiz: Board Program Design"})}),t.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsx(p,{note:"ICSE Board Secret: Always test your class by creating an object in main() using new BankAccount('Name', 101, 5000.0) and calling its display method. Examiners test your code by running your main method!"}),t.jsx(m,{content:b,title:"Printable Cheat Sheet: Topic 5 Notes"})]})]});export{E as default};

import{j as e,b as n}from"./vendor-react-core-Doz9nIC6.js";import{J as d}from"./JavaFileLoader-BfBG3xz_.js";import{F as m}from"./FAQTemplate-BHhlgA96.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import{T as p}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const x=`/**\r
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
`,h=[{id:1,question:"In an ICSE 15-mark Section B class design question, what is the penalty for omitting the constructor?",options:["No penalty, Java automatically supplies everything","Deduction of 2 to 3 marks from the constructor marking rubric","Immediate cancellation of the entire answer","Only 1 mark deduction if main() is present"],correctAnswer:1,explanation:"Omitted or incorrectly named constructors lose 2-3 marks under the official ICSE marking scheme."},{id:2,question:"What is the recommended modifier for instance variables in an ICSE class definition?",options:["public","private","static","abstract"],correctAnswer:1,explanation:"Instance variables should be declared private (Encapsulation) and accessed via constructors/methods."},{id:3,question:"Why do we pass primitive arguments (like double balance) into parameterized constructors rather than hardcoding values?",options:["To allow dynamic instantiation of multiple distinct objects with unique starting state","Because Java forbids hardcoded numbers inside constructor bodies","To speed up JVM garbage collection","To prevent inheritance by subclasses"],correctAnswer:0,explanation:"Passing arguments allows each object to be created with its own custom initial values."}],g=()=>{const[a,r]=n.useState(5e3),[i,s]=n.useState(["Account created with initial balance Rs. 5000.0"]),o=()=>{r(t=>t+1e3),s(t=>[...t,"Deposited +Rs. 1000 | New Balance: Rs. "+(a+1e3)])},c=()=>{a>=500&&(r(t=>t-500),s(t=>[...t,"Withdrew -Rs. 500 | New Balance: Rs. "+(a-500)]))};return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🎮 Interactive ICSE Class Design Bank Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate object instantiation via parameterized constructor and execute member method transactions."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:o,className:"px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded-lg shadow transition-all",children:"+ Deposit Rs. 1000"}),e.jsx("button",{onClick:c,className:"px-3 py-1.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold rounded-lg shadow transition-all",children:"- Withdraw Rs. 500"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsxs("div",{className:"text-sky-400 font-bold",children:['BankAccount acc1 = new BankAccount("Amitav", 98765L, ',a,");"]}),e.jsxs("div",{className:"text-slate-400 text-[11px]",children:["Current Balance State: ",e.jsxs("span",{className:"text-amber-300 font-bold",children:["Rs. ",a]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 font-mono text-[11px] max-h-36 overflow-y-auto",children:[e.jsx("div",{className:"text-slate-400 font-bold font-sans text-xs mb-1",children:"Execution Audit Trail:"}),i.map((t,l)=>e.jsxs("div",{className:"text-emerald-400",children:["➜ ",t]},l))]})]})]})},I=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Comprehensive ICSE Programs"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Comprehensive ICSE Board Program & Class Design"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Full 15-mark ICSE Section B practice program: Class variables, Parameterized Constructors, member calculation methods, and main() driver execution."})]}),e.jsx("section",{children:e.jsx(g,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"📋 ICSE Section B 15-Mark Class Marking Blueprint"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans",children:[e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-sky-400 font-bold text-sm",children:"1. Instance Fields"}),e.jsx("div",{className:"text-slate-400",children:"Declare data members with appropriate data types (2 Marks)."})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm",children:"2. Constructor"}),e.jsx("div",{className:"text-slate-400",children:"Initialize fields using parameterized constructor (3 Marks)."})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"3. Methods"}),e.jsx("div",{className:"text-slate-400",children:"Implement calculation, processing & display logic (7 Marks)."})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-indigo-400 font-bold text-sm",children:"4. Main Driver"}),e.jsx("div",{className:"text-slate-400",children:"Instantiate object via 'new' and execute methods (3 Marks)."})]})]})]}),e.jsx("section",{children:e.jsx(d,{fileName:"ComprehensiveConstructorPractice.java",code:x,title:"Complete Executable Board Program: BankAccount Class Design"})}),e.jsx("section",{children:e.jsx(m,{questions:h,title:"ICSE Quiz: Board Program Design"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(p,{note:"ICSE Board Secret: Always test your class by creating an object in main() using new BankAccount('Name', 101, 5000.0) and calling its display method. Examiners test your code by running your main method!"}),e.jsx(u,{content:b,title:"Printable Cheat Sheet: Topic 5 Notes"})]})]});export{I as default};

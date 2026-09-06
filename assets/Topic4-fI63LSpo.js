import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as o}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const c=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 4\r
 * Difference Between Constructor and Member Method\r
 *\r
 * Demonstrates:\r
 * 1. Constructor: Automatic instantiation call, no return type, same name as class.\r
 * 2. Member Method: Explicit dot-notation call, requires return type (void or data type), any name.\r
 * 3. Exam Trap: What happens when 'void' is added to a constructor name.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class ConstructorVsMethodDemo {\r
\r
    private int score;\r
\r
    // 1. CONSTRUCTOR (No return type, same name as class)\r
    public ConstructorVsMethodDemo() {\r
        System.out.println("[1. CONSTRUCTOR] Executed automatically by 'new' operator.");\r
        this.score = 50;\r
    }\r
\r
    // 2. MEMBER METHOD (Has return type 'void', explicit dot-notation invocation)\r
    public void displayScore() {\r
        System.out.println("[2. METHOD] Explicitly called via obj.displayScore(). Score = " + this.score);\r
    }\r
\r
    // 3. EXAM TRAP: Method with SAME NAME as class (Has 'void' return type)\r
    public void ConstructorVsMethodDemo() {\r
        System.out.println("[3. EXAM TRAP METHOD] This is a regular method, NOT a constructor!");\r
        this.score += 10;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("=== Instantiating Object ===");\r
        // Step A: Invokes Constructor #1\r
        ConstructorVsMethodDemo obj = new ConstructorVsMethodDemo();\r
\r
        System.out.println("\\n=== Invoking Member Methods ===");\r
        // Step B: Explicit call to regular method #2\r
        obj.displayScore();\r
\r
        // Step C: Explicit call to exam trap method #3\r
        obj.ConstructorVsMethodDemo();\r
\r
        // Display updated state\r
        obj.displayScore();\r
    }\r
}\r
`,d=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 4: DIFFERENCE BETWEEN CONSTRUCTOR AND METHOD\r
================================================================================\r
\r
COMPARISON TABLE (ICSE BOARD FAVORITE):\r
\r
+-----------------------+-----------------------------+-----------------------------+\r
| Feature               | Constructor                 | Member Method               |\r
+-----------------------+-----------------------------+-----------------------------+\r
| 1. Name               | Must match Class Name       | Any valid Java identifier   |\r
| 2. Return Type        | NO return type (not void)   | MUST have a return type     |\r
| 3. Invocation         | Implicit via 'new' operator | Explicit via dot notation   |\r
| 4. Purpose            | Initializes object state    | Performs specific tasks     |\r
| 5. Compiler Default   | Provided if none declared   | Never provided by compiler  |\r
| 6. Inheritance        | Not inherited by subclass   | Inherited by subclass       |\r
+-----------------------+-----------------------------+-----------------------------+\r
\r
ICSE EXAM WARNING:\r
Adding 'void' to a constructor does NOT cause a syntax error! Instead, Java treats it\r
as a standard method that must be invoked explicitly using dot notation.\r
================================================================================\r
`,l=[{id:1,question:"Which of the following is a major structural difference between a constructor and a member method?",options:["A constructor cannot accept arguments, whereas a method can.","A constructor MUST NOT specify any return type, whereas a method MUST specify a return type.","A constructor is stored in Stack memory, whereas a method is stored on Heap memory.","A constructor must be private, whereas a method must be public."],correctAnswer:1,explanation:"Constructors never specify a return type (not even void), whereas member methods must specify a return type (void, primitive, or reference)."},{id:2,question:"How is a constructor invoked compared to a regular member method?",options:["Constructors are called using dot notation (obj.Constructor()), while methods are called automatically.","Constructors are invoked automatically during 'new' object creation, while methods are invoked explicitly via dot notation.","Both constructors and methods are invoked automatically at system boot.","Constructors can only be invoked from static main() methods."],correctAnswer:1,explanation:"Constructors run automatically during 'new' instantiation, whereas methods require explicit invocation using obj.methodName()."},{id:3,question:"Are constructors inherited by subclasses in Java?",options:["Yes, all constructors are inherited by subclasses.","No, constructors are NOT inherited by subclasses, though superclass constructors can be called via super().","Only parameterized constructors are inherited.","Only default constructors are inherited."],correctAnswer:1,explanation:"Constructors belong to the class in which they are declared and are NOT inherited by subclasses."}],m=()=>{const r=[{feature:"Name",constructor:"Must match Class Name exactly",method:"Any valid Java identifier"},{feature:"Return Type",constructor:"NO return type (not even void)",method:"MUST specify return type (void, primitive, ref)"},{feature:"Invocation",constructor:"Implicit via 'new' operator",method:"Explicit via dot notation (obj.method())"},{feature:"Primary Role",constructor:"Initialize object state",method:"Perform tasks / compute operations"},{feature:"Compiler Default",constructor:"Provided if zero constructors declared",method:"Never provided by compiler"},{feature:"Inheritance",constructor:"NOT inherited by subclasses",method:"Inherited by subclasses (unless private)"}];return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"📊 Comprehensive Comparison: Constructor vs Member Method"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Side-by-side breakdown of structural and behavioral differences essential for ICSE Board Exams."})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-sans border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900 border-b border-slate-800 text-slate-300",children:[e.jsx("th",{className:"p-3 font-bold",children:"Feature"}),e.jsx("th",{className:"p-3 font-bold text-amber-400",children:"Constructor"}),e.jsx("th",{className:"p-3 font-bold text-emerald-400",children:"Member Method"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 text-slate-400",children:r.map((t,s)=>e.jsxs("tr",{className:"hover:bg-slate-900/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-semibold text-slate-300",children:t.feature}),e.jsx("td",{className:"p-3 text-amber-300 font-mono text-[11px]",children:t.constructor}),e.jsx("td",{className:"p-3 text-emerald-300 font-mono text-[11px]",children:t.method})]},s))})]})})]})},f=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Constructor vs Method"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Difference Between Constructor and Member Method"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Detailed comparison of structural rules, invocation mechanics, and common ICSE exam traps regarding constructor definitions."})]}),e.jsx("section",{children:e.jsx(m,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Common ICSE Exam Traps & Misconceptions"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-amber-400",children:"The 'void' Return Type Trap"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Writing ",e.jsx("code",{className:"text-amber-300",children:"public void Student()"})," inside a ",e.jsx("code",{className:"text-sky-300",children:"Student"})," class does NOT cause a compile error. Instead, Java turns it into a regular method. During ",e.jsx("code",{className:"text-sky-300",children:"new Student()"}),", this method is IGNORED!"]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400",children:"Explicit Invocation Rule"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Constructors can only be invoked during instantiation (",e.jsx("code",{className:"text-emerald-300",children:"new Class()"}),") or inside another constructor via ",e.jsx("code",{className:"text-emerald-300",children:"this()"})," or ",e.jsx("code",{className:"text-emerald-300",children:"super()"}),". They cannot be called via ",e.jsx("code",{className:"text-slate-400",children:"obj.Constructor()"}),"."]})]})]})]}),e.jsx("section",{children:e.jsx(o,{fileName:"ConstructorVsMethodDemo.java",code:c,title:"Executable Code: Demonstrating Constructor vs Method Invocation"})}),e.jsx("section",{children:e.jsx(a,{questions:l,title:"ICSE Quiz: Constructor vs Method"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(i,{note:"ICSE Board Pattern: Question 2 of Section A frequently asks: 'State two differences between a constructor and a method'. Memorize the table above for full 2 marks!"}),e.jsx(n,{content:d,title:"Printable Cheat Sheet: Topic 4 Notes"})]})]});export{f as default};

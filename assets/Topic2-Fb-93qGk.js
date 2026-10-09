import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as l}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as i}from"./FAQTemplate-16IfroqC.js";import{P as c}from"./PlainTextPrint-C6NaUtnE.js";import{c as d,bI as u,t as m,az as x}from"./vendor-icons-C1Dcofhq.js";const p=[{question:"What is a constructor in Java?",answer:"A constructor in Java is a special member block/method that has the exact same name as the class and has NO return type (not even void). It is automatically invoked whenever an object of that class is instantiated using the `new` operator, primarily to initialize the instance variables of the object.",marks:2,hint:"Same name as class, no return type, initializes instance variables."},{question:"Which of the following is TRUE about Java constructors?",options:["A constructor must have the same name as the class and cannot have any return type, not even void.","A constructor must always return an int status code.","A constructor is called manually like `s1.Student();`.","A constructor cannot accept parameters."],correctAnswer:0,explanation:"Constructors strictly share the class name, have no return type, and are automatically executed upon instantiation.",marks:1},{question:"What happens if you write a return type like `void` before a constructor name, e.g., `void Student() { ... }`?",options:["The Java compiler treats it as a regular member method, NOT a constructor.","It causes a compilation syntax error.","It becomes a default constructor.","It runs automatically when object is created."],correctAnswer:0,explanation:"Adding a return type (even void) demotes the constructor to a regular member method. It will no longer execute automatically upon instantiation.",marks:1},{question:"When is a constructor executed in Java?",options:["Automatically at the exact moment when an object is created with `new`","When the program terminates","When the class is compiled","Only when explicitly called with the dot operator"],correctAnswer:0,explanation:"Constructors are triggered automatically by the `new` operator during heap memory allocation.",marks:1},{question:"State two primary purposes of a constructor in Java class design.",answer:`1. To initialize the state (instance variables) of newly created objects.
2. To execute mandatory initial startup logic (such as opening database connections or logging initialization).`,marks:2,hint:"Initialization of object fields."}],h=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 2: WHAT IS A CONSTRUCTOR IN JAVA? (SAME NAME AS CLASS, NO RETURN TYPE)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. FORMAL DEFINITION OF A CONSTRUCTOR\r
--------------------------------------------------------------------------------\r
A constructor is a special member function of a class designed specifically to \r
initialize the instance variables of a newly created object.\r
\r
2. THE THREE GOLDEN RULES OF CONSTRUCTORS\r
--------------------------------------------------------------------------------\r
Rule 1: Name Matching\r
A constructor MUST have the exact same name as the class in which it is defined \r
(case-sensitive).\r
\r
Rule 2: No Return Type\r
A constructor MUST NOT have any return type—not even \`void\`. \r
If you specify a return type (e.g. \`void Student()\`), the compiler treats it \r
as a normal method, and it will NOT be invoked automatically when \`new\` is called.\r
\r
Rule 3: Automatic Invocation\r
A constructor cannot be called explicitly like normal methods (e.g. \`obj.Student()\` \r
is illegal). It is called implicitly and automatically when the \`new\` keyword \r
instantiates the object.\r
\r
3. JAVA CONSTRUCTOR CODE BLUEPRINT\r
--------------------------------------------------------------------------------\r
public class Book {\r
    String title;\r
    double price;\r
\r
    // CONSTRUCTOR (Same name as class, no return type)\r
    public Book(String t, double p) {\r
        title = t;\r
        price = p;\r
        System.out.println("Book initialized: " + title + " (₹" + price + ")");\r
    }\r
}\r
\r
Usage:\r
    Book b1 = new Book("Information Technology 802", 450.0);\r
\r
4. CONSTRUCTOR VS METHOD QUICK SUMMARY\r
--------------------------------------------------------------------------------\r
Feature             | Constructor                  | Method\r
--------------------|------------------------------|-----------------------------\r
Name                | Must match class name        | Any valid Java identifier\r
Return Type         | NO return type (not even void)| MUST specify return type/void\r
Invocation          | Automatically upon \`new\`     | Explicitly called via \`.\` dot\r
Primary Purpose     | Initialize object state      | Execute specific operations\r
================================================================================\r
`,b=()=>{const[t,n]=o.useState(!1),[r,s]=o.useState(!0),a=!t&&r;return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2",children:[e.jsx(u,{className:"w-3.5 h-3.5"})," Syntax & Semantic Analyzer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Anatomy of a Java Constructor: The 3 Golden Rules"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"CBSE Board Exam Core Concept"})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6 grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"1. Return Type Specifier:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>n(!1),className:`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${t?"bg-slate-900 border border-slate-800 text-slate-400":"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950"}`,children:"No Return Type (Valid)"}),e.jsx("button",{onClick:()=>n(!0),className:`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${t?"bg-rose-500 text-slate-950 shadow-md shadow-rose-950":"bg-slate-900 border border-slate-800 text-slate-400"}`,children:"Add `void` (Trap!)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"2. Method Name Match:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>s(!0),className:`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${r?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950":"bg-slate-900 border border-slate-800 text-slate-400"}`,children:"Exact Match (`Student`)"}),e.jsx("button",{onClick:()=>s(!1),className:`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${r?"bg-slate-900 border border-slate-800 text-slate-400":"bg-amber-500 text-slate-950 shadow-md shadow-amber-950"}`,children:"Different (`initStudent`)"})]})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Generated Java Class Blueprint:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`public class Student {
    int roll;
    String name;

    // ${a?"✅ VALID CONSTRUCTOR":"❌ REGULAR METHOD (NOT A CONSTRUCTOR)"}
    public ${t?"void ":""}${r?"Student":"initStudent"}() {
        roll = 101;
        name = "Mamata";
        System.out.println("Initialized!");
    }
}`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-2 ${a?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-rose-500/10 border-rose-500/30 text-rose-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-sm",children:[a?e.jsx(m,{className:"w-4 h-4 text-emerald-400"}):e.jsx(x,{className:"w-4 h-4 text-rose-400"}),e.jsx("span",{children:a?"Valid Constructor Active":"Demoted to Regular Method"})]}),e.jsx("p",{className:"text-[11px] leading-relaxed opacity-90",children:a?"Shares the exact class name ('Student') and has NO return type. Will execute automatically when 'new Student()' is called!":t?"Specifying 'void' converts this constructor into a normal method. It will NEVER run automatically on 'new Student()'!":"Name does not match the class name ('Student'). Java treats this as an ordinary member method."})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400",children:["💡 ",e.jsx("strong",{children:"Golden Rule:"})," Constructors never return values, not even ",e.jsx("code",{className:"text-amber-400",children:"void"}),"."]})]})]})]})},T=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20",children:[e.jsx(d,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 2"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"What is a Constructor in Java?"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Master the formal definition, naming conventions, return-type rules, and primary initialization duties of Java constructors."})]}),e.jsx(b,{}),e.jsx(i,{title:"Frequently Asked Questions • Java Constructor Definition",questions:p}),e.jsx(c,{content:h,title:"CBSE Class XII IT 802 – Constructor Definition Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 2 Note (.txt)",downloadFileName:"004_001_topic2_note.txt"}),e.jsx(l,{note:"Whenever you write a constructor, double check that you didn't accidentally write `public void ClassName()`. Adding `void` is the number 1 mistake students make in board exams, causing it to lose its constructor identity! — Sukanta Hui"})]})});export{T as default};

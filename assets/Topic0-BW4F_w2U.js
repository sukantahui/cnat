import{j as e,b as o,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{J as d}from"./JavaFileLoader-BfBG3xz_.js";import{F as u}from"./FAQTemplate-BHhlgA96.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{T as x}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const p=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 0\r
 * Need and Purpose of Java Constructors\r
 *\r
 * Demonstrates:\r
 * 1. Default vs explicit object initialization.\r
 * 2. Automatic invocation of constructor during 'new' keyword execution.\r
 * 3. Memory allocation on Heap and initial variable binding.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class ConstructorBasicsDemo {\r
\r
    // Instance variables (State of the object)\r
    private String studentName;\r
    private int rollNumber;\r
    private double percentage;\r
\r
    // Explicit Default Constructor (No arguments)\r
    public ConstructorBasicsDemo() {\r
        System.out.println(">>> Constructor Executed: Initializing Student Object...");\r
        studentName = "Unassigned Student";\r
        rollNumber = 100;\r
        percentage = 0.0;\r
    }\r
\r
    // Method to display state\r
    public void displayStudentDetails() {\r
        System.out.println("----------------------------------------");\r
        System.out.println("Student Name : " + studentName);\r
        System.out.println("Roll Number  : " + rollNumber);\r
        System.out.println("Percentage   : " + percentage + "%");\r
        System.out.println("----------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("--- Starting Java Object Instantiation ---");\r
        \r
        // Creating object using 'new' operator -> triggers ConstructorBasicsDemo()\r
        ConstructorBasicsDemo s1 = new ConstructorBasicsDemo();\r
        \r
        // Displaying state after constructor initialization\r
        s1.displayStudentDetails();\r
        \r
        System.out.println("--- End of Program ---");\r
    }\r
}\r
`,h=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 0: NEED & PURPOSE OF CONSTRUCTORS\r
================================================================================\r
\r
1. WHAT IS A CONSTRUCTOR?\r
   A constructor is a special member method of a class used to initialize the\r
   instance variables of an object at the time of its creation.\r
\r
2. KEY CHARACTERISTICS:\r
   - Same Name: The constructor MUST have the exact same name as the class.\r
   - No Return Type: It has NO return type, not even void.\r
   - Automatic Invocation: It is executed automatically when an object is\r
     instantiated using the 'new' operator.\r
\r
3. MEMORY ALLOCATION & INITIALIZATION FLOW:\r
   Step 1: 'new' operator allocates memory on the Heap.\r
   Step 2: Default zero-initialization occurs for primitive fields.\r
   Step 3: Constructor body is executed to assign user-defined initial state.\r
   Step 4: Address of Heap memory is returned to the Stack reference variable.\r
\r
4. ICSE BOARD EXAM NOTE:\r
   Never specify a return type for a constructor! If you write:\r
   public void Student() { ... }\r
   Java treats it as a regular method, NOT a constructor, and will not execute\r
   it during 'new Student()' instantiation.\r
================================================================================\r
`,b=[{id:1,question:"What is the primary purpose of a constructor in Java?",options:["To destroy unused objects from heap memory","To initialize instance variables during object creation","To compile Java source code into bytecode","To return computed mathematical values to main()"],correctAnswer:1,explanation:"Constructors are special methods executed during object instantiation (using 'new') to initialize the object's instance variables."},{id:2,question:"Which of the following is TRUE regarding Java constructors?",options:["A constructor must have a 'void' return type.","A constructor must have the exact same name as its class.","A constructor can be called explicitly at any time like a regular method.","A constructor is stored in the Stack memory frame."],correctAnswer:1,explanation:"A Java constructor MUST have the exact same name as its class and MUST NOT specify any return type."},{id:3,question:"What happens if a developer writes: 'public void Student()' inside a Student class?",options:["It acts as a default constructor.","It results in a syntax error at compile-time.","Java treats it as a regular member method, NOT a constructor.","It causes a runtime NullPointerException."],correctAnswer:2,explanation:"Specifying any return type (even 'void') turns the constructor into a standard member method that won't be invoked automatically during 'new Student()'."},{id:4,question:"When is a constructor invoked in Java?",options:["When the class bytecode is loaded by the JVM","Automatically when an object is instantiated using the 'new' operator","When system garbage collection runs","Only when explicitly called via object dot notation (obj.Constructor())"],correctAnswer:1,explanation:"The constructor is automatically called when memory is allocated for a new object using the 'new' keyword."}],g=()=>{const[r,n]=o.useState(0),[a,i]=o.useState(!1),t=[{title:"Step 1: Reference Declaration on Stack",code:"ConstructorBasicsDemo s1;",stack:"s1 = uninitialized (null reference)",heap:"No memory allocated on Heap yet",desc:"The JVM creates a reference variable 's1' on the Stack frame. It points to nothing."},{title:"Step 2: 'new' Memory Allocation on Heap",code:"new ConstructorBasicsDemo()",stack:"s1 = [waiting for address]",heap:"Allocated 48 bytes at address @0x7b92a",desc:"The 'new' operator calculates class memory footprint and reserves space on the Heap."},{title:"Step 3: Default Zero-Initialization of Fields",code:"JVM Default Zero Fill",stack:"s1 -> @0x7b92a",heap:"studentName: null | rollNumber: 0 | percentage: 0.0",desc:"Before your constructor code runs, Java automatically fills primitive fields with 0/0.0/false and references with null."},{title:"Step 4: Constructor Body Execution",code:"public ConstructorBasicsDemo() { ... }",stack:"s1 -> @0x7b92a",heap:"studentName: 'Unassigned Student' | rollNumber: 100 | percentage: 0.0",desc:"Your explicit constructor body executes line-by-line, populating fields with your custom initial state!"}];return o.useEffect(()=>{let s;return a&&(s=setInterval(()=>{n(l=>(l+1)%t.length)},2e3)),()=>clearInterval(s)},[a,t.length]),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔄 Interactive Constructor Execution Lifecycle"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Step-by-step memory trace showing Stack reference creation, Heap allocation, and Constructor execution."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>n(s=>s>0?s-1:t.length-1),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800 transition-all",children:"◀ Prev Step"}),e.jsx("button",{onClick:()=>i(!a),className:c("px-4 py-1.5 text-xs font-bold rounded-lg shadow-md transition-all",a?"bg-amber-500 text-slate-950 hover:bg-amber-400":"bg-emerald-500 text-white hover:bg-emerald-400"),children:a?"⏸ Pause":"▶ Play Lifecycle"}),e.jsx("button",{onClick:()=>n(s=>(s+1)%t.length),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800 transition-all",children:"Next Step ▶"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-mono",children:[e.jsx("span",{className:"text-sky-400 font-bold",children:t[r].title}),e.jsxs("span",{children:["Step ",r+1," of 4"]})]}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-amber-300",children:e.jsx("code",{children:t[r].code})}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed font-sans bg-slate-900/50 p-3 rounded-lg border border-slate-800/80",children:["💡 ",t[r].desc]})]}),e.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-sky-500/30",children:[e.jsx("div",{className:"text-[11px] text-sky-400 font-bold uppercase mb-1",children:"Stack Frame (Local Reference)"}),e.jsx("div",{className:"text-slate-300",children:t[r].stack})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-emerald-500/30",children:[e.jsx("div",{className:"text-[11px] text-emerald-400 font-bold uppercase mb-1",children:"Heap Memory (Object Memory Space)"}),e.jsx("div",{className:"text-slate-300",children:t[r].heap})]})]})]})]})},T=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Constructors in Java"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Need, Purpose & Lifecycle of Java Constructors"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding automatic object state initialization, memory allocation on Heap, and core rules of constructors for ICSE Computer Applications."})]}),e.jsx("section",{children:e.jsx(g,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Core Theory & ICSE Examination Rules"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400",children:"Why Do We Need Constructors?"}),e.jsx("p",{children:"When an object is created, its instance fields need default or specific starting values. Without a constructor, variables remain zero-filled or uninitialized, leading to runtime null pointer bugs."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-xs text-slate-400",children:[e.jsx("li",{children:"Ensures objects are created in a valid, safe state."}),e.jsx("li",{children:"Eliminates manual setter method calls after creation."}),e.jsxs("li",{children:["Executed automatically during ",e.jsx("code",{className:"text-amber-300",children:"new"})," operator execution."]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400",children:"3 Golden Rules of Constructors"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1 text-xs text-slate-400",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Exact Name Match:"})," Must match the class name character-for-character (case-sensitive)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"No Return Type:"})," Must NOT specify any return type (not even ",e.jsx("code",{className:"text-amber-300",children:"void"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"No Direct Call:"})," Cannot be invoked directly using dot operator (",e.jsx("code",{className:"text-slate-400",children:"obj.Constructor()"})," is invalid)."]})]})]})]})]}),e.jsx("section",{children:e.jsx(d,{fileName:"ConstructorBasicsDemo.java",code:p,title:"Executable Program: Need & Purpose of Java Constructors"})}),e.jsx("section",{children:e.jsx(u,{questions:b,title:"ICSE Board Quiz: Constructor Basics"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(x,{note:"Always remember for ICSE Section B programs: Do NOT write void before constructor name! Writing 'void Student()' turns it into a regular method and ICSE examiners deduct 2 to 3 marks."}),e.jsx(m,{content:h,title:"Printable Cheat Sheet: Topic 0 Notes"})]})]});export{T as default};

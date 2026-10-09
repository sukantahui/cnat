import{j as e,b as r}from"./vendor-react-core-B-R9HE-Z.js";import{T as u}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as m}from"./FAQTemplate-16IfroqC.js";import{P as p}from"./PlainTextPrint-C6NaUtnE.js";import{c as x,bu as b}from"./vendor-icons-C1Dcofhq.js";const f=[{question:"What is the difference between a default constructor and a parameterized constructor in Java?",answer:'A default constructor (or no-argument constructor) takes no parameters and initializes instance variables with predefined default values (e.g. 0, null, or fixed literals). A parameterized constructor accepts arguments and initializes instance variables with custom values passed during object creation (e.g. `new Student(101, "Mamata")`).',marks:2,hint:"No-args vs accepting custom parameters."},{question:"What happens if a programmer does not define any constructor in a Java class?",options:["The Java compiler automatically provides a hidden, no-argument default constructor.","The code fails to compile.","Objects cannot be created from that class.","The JVM throws a RuntimeException."],correctAnswer:0,explanation:"If no constructor is explicitly written in a class, the Java compiler automatically inserts a default no-argument constructor that sets fields to their default zero values.",marks:1},{question:"What happens to the compiler-provided default constructor once a programmer defines a parameterized constructor in a class?",options:["The compiler-provided default constructor is no longer generated; calling `new ClassName()` without parameters causes a compilation error unless explicitly written.","The compiler continues to provide the default constructor.","The parameterized constructor is ignored.","A warning is shown but it runs."],correctAnswer:0,explanation:"Once you define any explicit constructor (e.g. parameterized), the Java compiler immediately stops providing the automatic default constructor.",marks:1},{question:"Given `public class Item { int id; Item(int i) { id = i; } }`, what is the result of `Item item = new Item();`?",options:["Compilation error: constructor Item() in class Item cannot be applied to given types; required: int; found: no arguments","Item object created with id = 0","NullPointerException","Runs successfully"],correctAnswer:0,explanation:"Because an explicit parameterized constructor `Item(int)` exists, no default `Item()` exists, resulting in a compile-time error.",marks:2}],h=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 4: TYPES OF CONSTRUCTORS: DEFAULT VS PARAMETERIZED\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. THE TWO PRIMARY TYPES OF CONSTRUCTORS\r
--------------------------------------------------------------------------------\r
A. DEFAULT CONSTRUCTOR (No-Argument Constructor):\r
   - Definition: A constructor that takes NO parameters.\r
   - Purpose: Initializes instance variables with standard default values \r
     (e.g., 0, 0.0, null, false) or predefined fixed constants.\r
   - Compiler-Supplied: If a class has zero user-defined constructors, the Java \r
     compiler automatically creates a default no-argument constructor.\r
\r
   Code:\r
   public class Employee {\r
       int id;\r
       String name;\r
\r
       // User-Defined Default Constructor\r
       public Employee() {\r
           id = 100;\r
           name = "Not Assigned";\r
       }\r
   }\r
\r
B. PARAMETERIZED CONSTRUCTOR:\r
   - Definition: A constructor that accepts one or more arguments.\r
   - Purpose: Allows dynamic initialization of object fields with unique, custom \r
     values supplied at the time of creation.\r
\r
   Code:\r
   public class Employee {\r
       int id;\r
       String name;\r
\r
       // Parameterized Constructor\r
       public Employee(int i, String n) {\r
           id = i;\r
           name = n;\r
       }\r
   }\r
\r
2. THE "COMPILER DEFAULT CONSTRUCTOR" TRAP\r
--------------------------------------------------------------------------------\r
CRITICAL RULE FOR CBSE EXAMS:\r
* If you write NO constructors -> Compiler gives you \`Employee()\`.\r
* If you write ANY parameterized constructor (e.g. \`Employee(int, String)\`) -> \r
  Compiler DOES NOT provide \`Employee()\`.\r
* Therefore, calling \`new Employee()\` without explicitly writing a no-arg \r
  constructor will produce a COMPILE ERROR:\r
  "constructor Employee in class Employee cannot be applied to given types".\r
\r
3. COMPARISON SUMMARY\r
--------------------------------------------------------------------------------\r
Feature             | Default Constructor        | Parameterized Constructor\r
--------------------|----------------------------|----------------------------\r
Parameters          | None (empty parentheses)   | 1 or more typed parameters\r
Data Assigned       | Fixed / default values     | Dynamic custom caller values\r
Object Diversity    | All objects start identical| Objects start with distinct states\r
================================================================================\r
`,g=()=>{const[a,l]=r.useState("param"),[s,i]=r.useState(105),[n,c]=r.useState("Susmita"),[o,d]=r.useState(7500);return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2",children:[e.jsx(b,{className:"w-3.5 h-3.5"})," Constructor Type Explorer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Default (No-Arg) vs Parameterized Constructor"})]}),e.jsx("div",{className:"flex gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs",children:[{id:"default",label:"Default Constructor"},{id:"param",label:"Parameterized Constructor"}].map(t=>e.jsx("button",{onClick:()=>l(t.id),className:`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${a===t.id?"bg-sky-500 text-slate-950 shadow-md shadow-sky-950":"text-slate-400 hover:text-white"}`,children:t.label},t.id))})]}),a==="param"&&e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6 grid sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:"Custom ID (`int i`):"}),e.jsx("input",{type:"number",value:s,onChange:t=>i(Number(t.target.value)),className:"w-full bg-slate-900 text-white font-mono text-xs px-3 py-2 rounded-xl border border-slate-700"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:"Custom Name (`String n`):"}),e.jsx("input",{type:"text",value:n,onChange:t=>c(t.target.value),className:"w-full bg-slate-900 text-white font-mono text-xs px-3 py-2 rounded-xl border border-slate-700"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:"Custom Fee (`double f`):"}),e.jsx("input",{type:"number",value:o,onChange:t=>d(Number(t.target.value)),className:"w-full bg-slate-900 text-white font-mono text-xs px-3 py-2 rounded-xl border border-slate-700"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Java Class Definition & Instantiation:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:a==="default"?`public class Student {
    int id;
    String name;
    double fee;

    // Default (No-Argument) Constructor
    public Student() {
        id = 100;
        name = "Default Student";
        fee = 5000.0;
    }
}

// In main method:
Student s = new Student(); // No arguments passed!`:`public class Student {
    int id;
    String name;
    double fee;

    // Parameterized Constructor
    public Student(int i, String n, double f) {
        id = i;
        name = n;
        fee = f;
    }
}

// In main method:
Student s = new Student(${s}, "${n}", ${o}.0);`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2",children:"Resulting Heap Object State:"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-800 pb-1.5",children:[e.jsx("span",{className:"text-slate-400",children:"Object Type:"}),e.jsx("span",{className:"text-white font-bold",children:"Student"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"id:"}),e.jsx("span",{className:"text-sky-300 font-bold",children:a==="default"?100:s})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"name:"}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:['"',a==="default"?"Default Student":n,'"']})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"fee:"}),e.jsxs("span",{className:"text-amber-300 font-bold",children:["₹",a==="default"?"5000.00":o+".00"]})]})]})]}),e.jsxs("div",{className:"p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-xs space-y-1",children:[e.jsx("strong",{className:"block font-bold",children:"CBSE Examiner Trap:"}),e.jsxs("p",{className:"text-[11px] leading-relaxed opacity-90",children:["If you write only a parameterized constructor, you cannot call ",e.jsx("code",{className:"text-white font-mono",children:"new Student()"})," unless you manually write a default constructor!"]})]})]})]})]})},C=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:[e.jsx(x,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 4"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Types of Constructors: Default vs Parameterized"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Understand the distinction between no-argument default constructors and parameterized constructors, and learn how the compiler manages constructor generation."})]}),e.jsx(g,{}),e.jsx(m,{title:"Frequently Asked Questions • Constructor Types in Java",questions:f}),e.jsx(p,{content:h,title:"CBSE Class XII IT 802 – Constructor Types Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note (.txt)",downloadFileName:"004_001_topic4_note.txt"}),e.jsx(u,{note:"In Java class design, whenever you define a parameterized constructor, always get into the habit of adding a no-arg default constructor as well. That way, both `new Student()` and `new Student(101, 'Mamata', 9000)` remain fully functional. — Sukanta Hui"})]})});export{C as default};

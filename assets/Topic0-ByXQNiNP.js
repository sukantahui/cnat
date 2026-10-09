import{j as e,b as r}from"./vendor-react-core-B-R9HE-Z.js";import{T as o}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as l}from"./FAQTemplate-16IfroqC.js";import{P as d}from"./PlainTextPrint-C6NaUtnE.js";import{c,bu as m,t as p,br as h}from"./vendor-icons-C1Dcofhq.js";const b=[{question:"Name the four fundamental pillars of Object-Oriented Programming (OOP) in Java.",answer:`The four pillars are:
1. Abstraction (Hiding complex implementation details and showing only essential features).
2. Encapsulation (Wrapping data/fields and code/methods into a single unit and restricting direct access via private variables).
3. Inheritance (Mechanism by which one class acquires the properties and behaviors of a parent class).
4. Polymorphism (Ability of a message, method, or object to take on multiple forms, such as method overloading and method overriding).`,marks:4,hint:"Recall the acronym A-E-I-P."},{question:"Which OOP principle focuses on wrapping data members and methods into a single protective capsule?",options:["Encapsulation","Inheritance","Polymorphism","Abstraction"],correctAnswer:0,explanation:"Encapsulation is the process of binding data variables and methods together within a class, shielding internal state using private access modifiers.",marks:1},{question:"Which OOP principle allows a class to reuse existing code from an existing parent class?",options:["Inheritance","Abstraction","Encapsulation","Compilation"],correctAnswer:0,explanation:"Inheritance enables code reusability and creates an 'is-a' hierarchical relationship using the 'extends' keyword in Java.",marks:1},{question:"What is the difference between Abstraction and Encapsulation?",answer:"Abstraction focuses on 'what' an object does by presenting external interfaces while hiding internal complexity (e.g. driving a car by using the accelerator without knowing engine combustion mechanics). Encapsulation focuses on 'how' to achieve data hiding and security by bundling variables and methods together with private access modifiers and public getters/setters.",marks:3,hint:"Abstraction = hiding complexity; Encapsulation = hiding data."},{question:"Which concept is demonstrated when multiple methods have the same name but different parameter lists?",options:["Polymorphism (Method Overloading)","Inheritance","Data Hiding","Package Import"],correctAnswer:0,explanation:"Compile-time polymorphism in Java is implemented via Method Overloading, where methods share the same name with different signatures.",marks:1}],x=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 0: CORE PRINCIPLES OF OOP: ABSTRACTION, ENCAPSULATION, INHERITANCE, POLYMORPHISM\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS OBJECT-ORIENTED PROGRAMMING (OOP)?\r
--------------------------------------------------------------------------------\r
Object-Oriented Programming (OOP) is a programming paradigm organized around \r
real-world objects rather than standalone functions and procedural logic. \r
In Java, every application is modeled using classes (blueprints) and objects \r
(concrete instances).\r
\r
2. THE FOUR PILLARS OF OOP\r
--------------------------------------------------------------------------------\r
A. ABSTRACTION (Essential Features vs Implementation Details):\r
   - Definition: Displaying only essential information to the outside world \r
     while hiding underlying complex background details.\r
   - Real-World Analogy: Pressing the brake pedal in a car stops the vehicle \r
     without the driver having to know hydraulic cylinder fluid mechanics.\r
\r
B. ENCAPSULATION (Data Binding & Data Hiding):\r
   - Definition: Bundling data variables (state) and methods (behavior) into \r
     a single unit (the class) and shielding data from unauthorized outside \r
     tampering using \`private\` access modifiers and \`public\` getter/setter methods.\r
   - Real-World Analogy: A medical capsule encapsulating diverse chemical \r
     compounds inside a safe, controlled outer shell.\r
\r
C. INHERITANCE (Code Reuse & Hierarchy):\r
   - Definition: The mechanism by which a child (subclass) inherits state \r
     and behavior from a parent (superclass) using the \`extends\` keyword.\r
   - Advantages: Avoids code duplication, models real-world taxonomies.\r
\r
D. POLYMORPHISM (Many Forms):\r
   - Definition: The ability of a message, method, or operator to exhibit \r
     different behaviors depending on context.\r
   - Types in Java:\r
     1. Compile-Time Polymorphism: Method Overloading (same name, different arguments).\r
     2. Runtime Polymorphism: Method Overriding (subclass redefining superclass method).\r
\r
3. CBSE BOARD EXAM QUICK POINTERS\r
--------------------------------------------------------------------------------\r
* What guarantees data security in OOP? Encapsulation with \`private\` fields.\r
* What keyword establishes an inheritance relationship? \`extends\`.\r
* What enables compile-time polymorphism? Method overloading / constructor overloading.\r
================================================================================\r
`,u=()=>{const[n,i]=r.useState("encapsulation"),s=[{id:"abstraction",name:"1. Abstraction",badge:"Complexity Hiding",color:"text-sky-400",bg:"bg-sky-500/10",border:"border-sky-500/30",analogy:"Car Dashboard & Accelerator Pedal",desc:"Hiding internal mechanical complexity (valves, fuel injection) and exposing only clean, high-level control interfaces to the driver/user.",code:`// Abstraction: User calls startEngine() without managing spark plugs
Car myCar = new Car();
myCar.startEngine(); // Clean, simple high-level interface`},{id:"encapsulation",name:"2. Encapsulation",badge:"Data Hiding & Security",color:"text-emerald-400",bg:"bg-emerald-500/10",border:"border-emerald-500/30",analogy:"Medicine Capsule / Bank Account Vault",desc:"Wrapping private variables and public methods into a single class entity. Data cannot be accessed or modified directly without getter/setter validations.",code:`public class BankAccount {
    private double balance; // Protected from outside tampering
    
    public double getBalance() { return balance; }
    public void deposit(double amt) { 
        if (amt > 0) balance += amt; // Validation rule
    }
}`},{id:"inheritance",name:"3. Inheritance",badge:"Code Reusability",color:"text-purple-400",bg:"bg-purple-500/10",border:"border-purple-500/30",analogy:"Parent to Child Biological Traits",desc:'Deriving child classes from a parent class using the "extends" keyword. Eliminates redundant code and establishes natural "is-a" hierarchies.',code:`public class Teacher extends Employee {
    String subjectSpecialization;
    // Automatically inherits name, empId, salary from Employee
}`},{id:"polymorphism",name:"4. Polymorphism",badge:"Many Forms",color:"text-amber-400",bg:"bg-amber-500/10",border:"border-amber-500/30",analogy:"Smartphone Button / Camera Lens",desc:"The capability of a method or operator to perform different tasks based on the number or types of input arguments (Overloading) or object instance (Overriding).",code:`public class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; } // Overloaded
}`}],a=s.find(t=>t.id===n)||s[1];return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(m,{className:"w-3.5 h-3.5"})," Architecture Explorer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"The 4 Fundamental Pillars of Java OOP"})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800",children:s.map(t=>e.jsx("button",{onClick:()=>i(t.id),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${n===t.id?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950":"text-slate-400 hover:text-white"}`,children:t.name.split(". ")[1]},t.id))})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`px-2.5 py-1 rounded-lg text-xs font-bold ${a.bg} ${a.color} border ${a.border}`,children:a.badge}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Analogy: ",e.jsx("strong",{className:"text-slate-200",children:a.analogy})]})]}),e.jsx("h3",{className:"text-xl font-bold text-white",children:a.name}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:a.desc}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsxs("strong",{className:"text-white flex items-center gap-1.5",children:[e.jsx(p,{className:"w-4 h-4 text-emerald-400"})," Academic Board Definition:"]}),e.jsxs("p",{className:"text-[11px] leading-relaxed text-slate-400",children:["In CBSE IT (802), define ",e.jsx("span",{className:"text-white font-semibold",children:a.name.split(". ")[1]})," clearly using data protection, reusability, or overloading terms."]})]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5",children:[e.jsx(h,{className:"w-4 h-4 text-sky-400"})," Java Implementation Syntax"]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:a.code})]}),e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono",children:["Key Java Keyword: ",e.jsx("span",{className:"text-emerald-400 font-bold",children:n==="inheritance"?"extends":n==="encapsulation"?"private / public":"class / method"})]})]})]})]})},w=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(c,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 0"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Core Principles of Object-Oriented Programming (OOP)"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Master the four cornerstones of Object-Oriented Programming: Abstraction, Encapsulation, Inheritance, and Polymorphism, and see how they are implemented in modern Java applications."})]}),e.jsx(u,{}),e.jsx(l,{title:"Frequently Asked Questions • Core OOP Principles",questions:b}),e.jsx(d,{content:x,title:"CBSE Class XII IT 802 – OOP Principles Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 0 Note (.txt)",downloadFileName:"004_001_topic0_note.txt"}),e.jsx(o,{note:"In CBSE Class XII IT 802, distinguishing Abstraction (hiding implementation complexity) from Encapsulation (hiding data using private fields) is a classic 2-mark question. Remember: Abstraction is 'What to show', Encapsulation is 'How to hide and protect data'. — Sukanta Hui"})]})});export{w as default};

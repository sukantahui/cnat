import{j as e,b as a}from"./vendor-react-core-B-R9HE-Z.js";import{T as p}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as g}from"./PlainTextPrint-C6NaUtnE.js";import{c as f,dE as w}from"./vendor-icons-C1Dcofhq.js";const N=[{question:"What is constructor overloading in Java?",answer:"Constructor overloading is a technique in Java class design where a single class defines multiple constructors with the same name (the class name) but differing in their parameter list (number of parameters, types of parameters, or order of parameters). This provides multiple ways to initialize objects.",marks:2,hint:"Multiple constructors in the same class with different parameters."},{question:"Which criteria distinguish overloaded constructors from each other?",options:["The number, data types, and sequence of parameters in their parameter lists.","The return type specified in the header.","The access modifiers (public vs private).","The names of local variables inside the constructor body."],correctAnswer:0,explanation:"Overloaded constructors are differentiated solely by their parameter signatures (number, type, and order of parameters).",marks:1},{question:"Which Java keyword is used to call one constructor from another constructor within the same class?",options:["this() keyword","super() keyword","new keyword","call() keyword"],correctAnswer:0,explanation:"The `this()` constructor call is used for explicit constructor chaining within the same class and must be the first statement in the constructor.",marks:1},{question:`What is the result of the following Java class design?
public class Item {
    int code;
    Item() { code = 10; }
    Item(int c) { code = c; }
    Item(String s) { code = Integer.parseInt(s); }
}`,options:["Valid constructor overloading; allows instantiating Item with 0 arguments, an int argument, or a String argument.","Compilation error because all constructors have the same name.","Runtime exception.","Only the first constructor will be executed."],correctAnswer:0,explanation:"This is a clean, textbook implementation of constructor overloading with distinct parameter types.",marks:1}],v=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 5: CONSTRUCTOR OVERLOADING (MULTIPLE INITIALIZATION STRATEGIES)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS CONSTRUCTOR OVERLOADING?\r
--------------------------------------------------------------------------------\r
Constructor overloading is the practice of having more than one constructor \r
in the same class, each having a unique parameter list.\r
\r
It is an implementation of compile-time polymorphism (static binding) in Java.\r
\r
2. RULES FOR VALID CONSTRUCTOR OVERLOADING\r
--------------------------------------------------------------------------------\r
Overloaded constructors must differ in at least ONE of the following:\r
1. Number of parameters: \`Box()\` vs \`Box(int side)\` vs \`Box(int l, int w, int h)\`\r
2. Data types of parameters: \`Student(int roll)\` vs \`Student(String regNo)\`\r
3. Order of parameters: \`Account(int id, String name)\` vs \`Account(String name, int id)\`\r
\r
3. CODE EXAMPLE: RECTANGLE / BOX CLASS\r
--------------------------------------------------------------------------------\r
public class Box {\r
    int length, width, height;\r
\r
    // 1. Default constructor (Unit Cube)\r
    public Box() {\r
        length = width = height = 1;\r
    }\r
\r
    // 2. Single-parameter constructor (Cube of size s)\r
    public Box(int side) {\r
        length = width = height = side;\r
    }\r
\r
    // 3. Three-parameter constructor (Custom Cuboid)\r
    public Box(int l, int w, int h) {\r
        length = l;\r
        width = w;\r
        height = h;\r
    }\r
\r
    public int getVolume() {\r
        return length * width * height;\r
    }\r
}\r
\r
4. INSTANTIATION FLEXIBILITY\r
--------------------------------------------------------------------------------\r
Box b1 = new Box();              // Calls Constructor 1 -> Volume = 1\r
Box b2 = new Box(5);             // Calls Constructor 2 -> Volume = 125\r
Box b3 = new Box(4, 6, 8);       // Calls Constructor 3 -> Volume = 192\r
\r
5. CONSTRUCTOR CHAINING WITH \`THIS()\`\r
--------------------------------------------------------------------------------\r
Inside a constructor, you can delegate initialization to another constructor \r
using \`this(...)\`:\r
    public Box(int side) {\r
        this(side, side, side); // Calls 3-arg constructor\r
    }\r
* Rule: \`this()\` MUST be the first statement inside the constructor!\r
================================================================================\r
`,j=()=>{const[r,c]=a.useState(1),[s,d]=a.useState(4),[o,m]=a.useState(3),[l,x]=a.useState(5),[i,u]=a.useState(8),n=r===1?{l:1,w:1,h:1}:r===2?{l:s,w:s,h:s}:{l:o,w:l,h:i},h=n.l*n.w*n.h;return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(w,{className:"w-3.5 h-3.5"})," Polymorphic Signature Studio"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Constructor Overloading in Action: The Box Geometry Class"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"Compile-Time Polymorphism"})]}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-3 mb-6",children:[{id:1,name:"1. No-Arg: Box()",desc:"Default Unit Cube (1×1×1)"},{id:2,name:"2. 1-Arg: Box(side)",desc:"Uniform Cube (S×S×S)"},{id:3,name:"3. 3-Arg: Box(l, w, h)",desc:"Custom Cuboid (L×W×H)"}].map(t=>e.jsxs("button",{onClick:()=>c(t.id),className:`p-3.5 rounded-2xl border text-left transition cursor-pointer ${r===t.id?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-950/40":"bg-slate-950/70 border-slate-800 text-slate-400 hover:bg-slate-900"}`,children:[e.jsx("div",{className:"font-bold text-xs text-white mb-0.5",children:t.name}),e.jsx("div",{className:"text-[11px] text-slate-400",children:t.desc})]},t.id))}),r===2&&e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6",children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:["Adjust Cube Side Length: ",e.jsxs("span",{className:"font-mono text-emerald-400 font-bold",children:[s," cm"]})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:t=>d(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),r===3&&e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 grid sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:["Length (l): ",e.jsx("span",{className:"text-emerald-400 font-mono",children:o})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:o,onChange:t=>m(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:["Width (w): ",e.jsx("span",{className:"text-sky-400 font-mono",children:l})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:l,onChange:t=>x(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1",children:["Height (h): ",e.jsx("span",{className:"text-amber-400 font-mono",children:i})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:i,onChange:t=>u(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Matching Constructor Execution:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:r===1?`// Signature 1: Box()
Box b = new Box(); // l=1, w=1, h=1`:r===2?`// Signature 2: Box(int side)
Box b = new Box(${s}); // l=${s}, w=${s}, h=${s}`:`// Signature 3: Box(int l, int w, int h)
Box b = new Box(${o}, ${l}, ${i});`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2",children:"Calculated Dimensions & Volume:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Dimensions:"}),e.jsxs("span",{className:"text-white font-bold",children:[n.l," × ",n.w," × ",n.h]})]}),e.jsxs("div",{className:"flex justify-between text-emerald-400 font-bold border-t border-slate-800 pt-1.5 text-sm",children:[e.jsx("span",{children:"getVolume():"}),e.jsxs("span",{children:[h," cm³"]})]})]})]}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:["Java binds the call to the correct constructor at ",e.jsx("strong",{children:"compile time"})," by examining the argument list."]})]})]})]})},O=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(f,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 5"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Constructor Overloading: Multiple Initialization Strategies"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Learn how constructor overloading allows a class to provide diverse object initialization paths based on argument counts and types, demonstrating compile-time polymorphism."})]}),e.jsx(j,{}),e.jsx(b,{title:"Frequently Asked Questions • Constructor Overloading",questions:N}),e.jsx(g,{content:v,title:"CBSE Class XII IT 802 – Constructor Overloading Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Note (.txt)",downloadFileName:"004_001_topic5_note.txt"}),e.jsx(p,{note:"Constructor overloading is one of the clearest examples of Compile-Time Polymorphism in CBSE IT (802). Make sure each overloaded constructor has a distinct parameter list (either different count or different data types). — Sukanta Hui"})]})});export{O as default};

import{j as e,b as c}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as p}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{c as b,cd as g,aA as C,$ as f}from"./vendor-icons-C1Dcofhq.js";const w=[{question:"When is a constructor invoked in Java?",answer:"A constructor is invoked automatically and implicitly at the exact moment when an object of a class is instantiated using the `new` operator. It cannot be explicitly invoked on an already created object via the dot operator.",marks:2,hint:"Think about the lifecycle moment when memory is allocated."},{question:"How many times does a constructor execute for a single object instance?",options:["Exactly once upon instantiation","Multiple times whenever a method is called","Continuously in the background","Twice"],correctAnswer:0,explanation:"A constructor executes exactly once during the creation and memory allocation of that particular object instance.",marks:1},{question:"Can you call a constructor directly using an object reference like `s1.Student()` in Java?",options:["No, it results in a compile-time error.","Yes, to re-initialize the object.","Yes, if the constructor is public.","Only inside main()."],correctAnswer:0,explanation:"Constructors cannot be invoked explicitly on existing objects; they are only triggered during object construction with `new`.",marks:1},{question:`What is the output of the following Java snippet?
class Box {
    Box() {
        System.out.print("Created ");
    }
}
public class Test {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box();
    }
}`,options:["Created Created ","Created ","No output","Compilation error"],correctAnswer:0,explanation:"Since two objects are instantiated with `new Box()`, the constructor executes automatically twice, printing 'Created Created '.",marks:2}],y=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 3: AUTOMATIC INVOCATION OF CONSTRUCTORS UPON OBJECT CREATION\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. AUTOMATIC INVOCATION LIFECYCLE\r
--------------------------------------------------------------------------------\r
In Java, you never explicitly call a constructor like a normal method. \r
Instead, the Java Virtual Machine (JVM) automatically invokes the constructor \r
during heap allocation whenever the \`new\` keyword is executed.\r
\r
Execution Sequence:\r
1. JVM allocates memory in the Heap for instance variables.\r
2. Default zero values (0, 0.0, false, null) are assigned to fields.\r
3. The constructor matching the arguments is automatically invoked.\r
4. User-defined initial values and setup logic execute.\r
5. The memory address of the initialized object is returned to the reference variable.\r
\r
2. MULTIPLE OBJECT INSTANTIATION EXAMPLE\r
--------------------------------------------------------------------------------\r
class Counter {\r
    static int totalCount = 0;\r
\r
    Counter() {\r
        totalCount++;\r
        System.out.println("Object #" + totalCount + " created automatically!");\r
    }\r
}\r
\r
public class Main {\r
    public static void main(String[] args) {\r
        Counter c1 = new Counter(); // Constructor runs for c1\r
        Counter c2 = new Counter(); // Constructor runs for c2\r
        Counter c3 = new Counter(); // Constructor runs for c3\r
    }\r
}\r
\r
Output:\r
Object #1 created automatically!\r
Object #2 created automatically!\r
Object #3 created automatically!\r
\r
3. KEY TAKEAWAYS FOR CBSE IT 802\r
--------------------------------------------------------------------------------\r
* Every time \`new\` is called, the constructor runs exactly once for that instance.\r
* You cannot re-invoke a constructor on an existing object reference (e.g. \`c1.Counter()\` is illegal).\r
================================================================================\r
`,j=()=>{const[r,o]=c.useState([{id:1,name:"Student_A",time:"10:00:01"},{id:2,name:"Student_B",time:"10:00:03"}]),[l,s]=c.useState(["Constructor executed automatically for Student_A (Memory: 0x10A)","Constructor executed automatically for Student_B (Memory: 0x10B)"]),d=()=>{const n=r.length+1,t=`Student_${String.fromCharCode(64+n)}`,i=new Date().toLocaleTimeString(),x="0x"+Math.floor(Math.random()*65535).toString(16).toUpperCase();o(a=>[...a,{id:Date.now(),name:t,time:i}]),s(a=>[...a,`[${i}] Constructor executed automatically for ${t} (Heap Address: ${x})`])},u=()=>{o([]),s(["Heap cleared. Instantiate new objects to trigger constructors."])};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(g,{className:"w-3.5 h-3.5"})," Lifecycle Event Monitor"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Real-Time Automatic Constructor Invocation"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:d,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-950",children:[e.jsx(C,{className:"w-3.5 h-3.5"})," Call `new Student()`"]}),e.jsx("button",{onClick:u,className:"bg-slate-800 hover:bg-slate-700 text-slate-400 py-2 px-3 rounded-xl text-xs transition cursor-pointer",children:"Clear"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Java Code Being Executed:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`public class Student {
    // Automatically runs upon 'new'
    public Student() {
        System.out.println("Constructor triggered!");
    }
}

// In main method:
Student s = new Student(); // Runs automatically!`}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400",children:["Active Object Instances: ",e.jsx("strong",{className:"text-emerald-400 font-mono text-sm",children:r.length})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5",children:[e.jsx(f,{className:"w-4 h-4"})," Constructor Invocation Event Log"]}),e.jsx("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 max-h-48 overflow-y-auto",children:l.map((n,t)=>e.jsxs("div",{className:"text-emerald-400/90 flex items-start gap-1.5",children:[e.jsx("span",{className:"text-slate-600",children:"❯"}),e.jsx("span",{children:n})]},t))})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 pt-2 border-t border-slate-800/80",children:["Notice: You didn't write ",e.jsx("code",{className:"text-slate-200",children:"s.Student()"}),"! Java triggered the constructor automatically during ",e.jsx("code",{className:"text-emerald-400",children:"new"}),"."]})]})]})]})},I=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(b,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 3"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Automatic Invocation of Constructors when an Object is Created"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Discover the exact lifecycle timing of constructor execution in Java, understand why constructors cannot be called with the dot operator, and track multi-instance heap allocations."})]}),e.jsx(j,{}),e.jsx(p,{title:"Frequently Asked Questions • Automatic Constructor Invocation",questions:w}),e.jsx(h,{content:y,title:"CBSE Class XII IT 802 – Constructor Invocation Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Note (.txt)",downloadFileName:"004_001_topic3_note.txt"}),e.jsx(m,{note:"Remember: Every single time the keyword `new` is evaluated, the constructor executes exactly once for that specific object instance. It is the gatekeeper that guarantees an object is never in an uninitialized state! — Sukanta Hui"})]})});export{I as default};

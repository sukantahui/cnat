import{j as e,b as n}from"./vendor-react-core-B-R9HE-Z.js";import{T as s}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as r}from"./FAQTemplate-16IfroqC.js";import{P as l}from"./PlainTextPrint-C6NaUtnE.js";import{c as i,L as o,a1 as d,a as c}from"./vendor-icons-C1Dcofhq.js";const h=[{id:1,question:"What are the two standard ways of creating a thread in Java?",options:["1. Extending the Thread class, 2. Implementing the Runnable interface","1. Extending the Object class, 2. Implementing the Serializable interface","1. Importing java.util.Thread, 2. Using the process() keyword","1. Extending the Main class, 2. Implementing the Applet interface"],correctAnswer:0,explanation:"Java provides two distinct mechanisms for creating threads: 1. Extending the java.lang.Thread class, and 2. Implementing the java.lang.Runnable interface.",marks:1,hint:"Recall: Thread class (inheritance) and Runnable interface (implementation)."},{id:2,question:"Why is implementing the Runnable interface generally preferred over extending the Thread class?",options:["Because Java does not support multiple inheritance of classes, implementing Runnable leaves room to extend another class","Because Runnable executes twice as fast as the Thread class","Because Runnable does not require overriding the run() method","Because Thread class cannot be used in console applications"],correctAnswer:0,explanation:"Since Java supports single inheritance only for classes, extending Thread prevents your class from extending any other superclass. Implementing Runnable allows your class to extend another class while still functioning as a thread.",marks:1,hint:"Multiple inheritance limitation of Java classes."},{id:3,question:"When creating a thread by implementing Runnable, how is the thread instantiated and started?",options:["MyRunnable r = new MyRunnable(); Thread t = new Thread(r); t.start();","MyRunnable r = new MyRunnable(); r.start();","Thread t = new MyRunnable(); t.run();","Runnable.start(new MyRunnable());"],correctAnswer:0,explanation:"When implementing Runnable, you must pass the Runnable instance into a Thread constructor: `Thread t = new Thread(r);` and then invoke `t.start()`.",marks:1,hint:"The Runnable instance is passed as a target argument to the Thread constructor."},{id:4,question:"Which package contains both the Thread class and the Runnable interface in Java?",options:["java.lang","java.util","java.io","java.net"],correctAnswer:0,explanation:"Both Thread and Runnable are defined in the default `java.lang` package, so no explicit import statement is required.",marks:1,hint:"The default Java package automatically imported into every class."},{id:5,question:"Which single abstract method must be implemented by any class implementing the Runnable interface?",options:["public void run()","public void start()","public void execute()","public int run(int id)"],correctAnswer:0,explanation:"The Runnable interface is a functional interface containing exactly one abstract method: `public void run()`.",marks:1,hint:"The entry point method for thread code execution."}],m=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_004: MULTITHREADING, ASSERTIONS & EXCEPTION HANDLING\r
TOPIC 1: Two Ways of Creating Threads in Java (Thread Class vs Runnable Interface)\r
================================================================================\r
\r
1. THE TWO APPROACHES:\r
----------------------\r
Java provides two ways to create custom threads:\r
1. Extending the \`java.lang.Thread\` class.\r
2. Implementing the \`java.lang.Runnable\` interface.\r
\r
2. APPROACH 1: EXTENDING THE THREAD CLASS\r
-----------------------------------------\r
Syntax:\r
\`\`\`java\r
class TaskA extends Thread {\r
    @Override\r
    public void run() {\r
        for (int i = 1; i <= 5; i++) {\r
            System.out.println("Thread A: " + i);\r
        }\r
    }\r
}\r
\r
// In main method:\r
TaskA t1 = new TaskA();\r
t1.start(); // Spawns new thread and executes run()\r
\`\`\`\r
\r
Pros & Cons:\r
- Simple syntax for direct thread creation.\r
- Disadvantage: Java does NOT support multiple class inheritance. If your class extends \`Thread\`, it cannot extend any other class (such as \`JFrame\`, \`JPanel\`, or \`Employee\`).\r
\r
3. APPROACH 2: IMPLEMENTING THE RUNNABLE INTERFACE (RECOMMENDED)\r
----------------------------------------------------------------\r
Syntax:\r
\`\`\`java\r
class TaskB implements Runnable {\r
    @Override\r
    public void run() {\r
        for (int i = 1; i <= 5; i++) {\r
            System.out.println("Runnable B: " + i);\r
        }\r
    }\r
}\r
\r
// In main method:\r
TaskB job = new TaskB();\r
Thread t2 = new Thread(job); // Pass Runnable instance to Thread constructor\r
t2.start();\r
\`\`\`\r
\r
Pros & Cons:\r
- Flexible: Your class can extend another parent class (e.g., \`class TaskB extends DatabaseService implements Runnable\`).\r
- Decouples the task logic (\`Runnable\`) from the thread execution engine (\`Thread\`).\r
\r
4. COMPARISON SUMMARY FOR CBSE BOARD EXAM:\r
------------------------------------------\r
| Criteria | Extending Thread Class | Implementing Runnable Interface |\r
| :--- | :--- | :--- |\r
| Keyword used | \`extends Thread\` | \`implements Runnable\` |\r
| Multiple Inheritance | Locked out (cannot extend other classes) | Supported (can extend another class) |\r
| Object Instantiation | \`MyThread t = new MyThread(); t.start();\` | \`Thread t = new Thread(new MyRunnable()); t.start();\` |\r
| Design Principle | Inheritance (Tight Coupling) | Composition / Interface (Loose Coupling) |\r
| Mandatory Method | \`public void run()\` | \`public void run()\` |\r
================================================================================\r
`,x=()=>{const[a,t]=n.useState("runnable");return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2",children:[e.jsx(d,{className:"w-3.5 h-3.5"})," Implementation Architecture"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Extending Thread Class vs Implementing Runnable Interface"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>t("thread"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${a==="thread"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-950 font-bold":"bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"}`,children:"1. Extending Thread"}),e.jsx("button",{onClick:()=>t("runnable"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${a==="runnable"?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950 font-bold":"bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"}`,children:"2. Implementing Runnable (Recommended)"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider",children:[e.jsx("span",{children:"Java Source Code"}),e.jsx("span",{className:"font-mono text-emerald-400",children:a==="thread"?"extends Thread":"implements Runnable"})]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:a==="thread"?`// Approach 1: Extending java.lang.Thread class
class NumberPrinter extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread Count: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        NumberPrinter t1 = new NumberPrinter();
        t1.start(); // Directly calls start() on subclass instance
    }
}`:`// Approach 2: Implementing java.lang.Runnable interface (Best Practice)
class MessagePrinter implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Runnable Task: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MessagePrinter task = new MessagePrinter();
        Thread t1 = new Thread(task); // Pass target task into Thread object
        t1.start(); // Spawns new thread
    }
}`})]}),e.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[e.jsx(c,{className:"w-4 h-4 text-emerald-400"}),a==="thread"?"Extending Thread Characteristics":"Implementing Runnable Advantages"]}),e.jsx("ul",{className:"space-y-2 text-xs text-slate-300",children:a==="thread"?e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-400 font-bold",children:"•"}),e.jsx("span",{children:"Direct and quick syntax for simple single-purpose background workers."})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Inheritance Limitation:"})," Your class cannot extend any other superclass because Java does not allow multiple class inheritance."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-slate-400 font-bold",children:"•"}),e.jsx("span",{children:"Tightly couples thread management code with actual business logic."})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Free to Extend Superclasses:"})," Your class can extend classes like ",e.jsx("code",{className:"text-sky-300",children:"Applet"}),", ",e.jsx("code",{className:"text-sky-300",children:"JFrame"}),", or custom base classes."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Clean Separation of Concerns:"})," Task logic is decoupled from thread creation/execution mechanics."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsx("span",{children:"Seamlessly compatible with Java Thread Pools and Executor frameworks."})]})]})})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 font-mono",children:[e.jsx("span",{className:"text-amber-400 font-bold block mb-1",children:"Board Exam Tip:"}),a==="thread"?"To start: create instance -> call t.start()":"To start: create Runnable -> pass to new Thread(runnable) -> call t.start()"]})]})]})]})},T=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:[e.jsx(i,{className:"w-3.5 h-3.5"})," Module 004_004 • Topic 1"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"The Two Ways of Creating Threads in Java: Extending Thread Class vs Implementing Runnable Interface"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-400 leading-relaxed",children:"Master the two distinct mechanisms for thread creation in Java, contrast their architectural trade-offs, and learn why implementing the Runnable interface is standard industry practice."})]}),e.jsx(x,{}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(o,{className:"w-5 h-5 text-sky-400"}),"Direct Comparison Matrix for CBSE Board Examination"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-300 font-bold uppercase tracking-wider",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Criteria"}),e.jsx("th",{className:"p-3 border border-slate-800 text-amber-400",children:"1. Extending Thread Class"}),e.jsx("th",{className:"p-3 border border-slate-800 text-emerald-400",children:"2. Implementing Runnable Interface"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold border border-slate-800",children:"Core Keyword"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono text-amber-300",children:"class MyTask extends Thread"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono text-emerald-300",children:"class MyTask implements Runnable"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold border border-slate-800",children:"Multiple Inheritance"}),e.jsx("td",{className:"p-3 border border-slate-800 text-rose-400 font-semibold",children:"Not allowed (Locks out other superclasses)"}),e.jsx("td",{className:"p-3 border border-slate-800 text-emerald-400 font-semibold",children:"Allowed (Can extend another superclass)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold border border-slate-800",children:"Instantiation Syntax"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono",children:"MyTask t = new MyTask(); t.start();"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono",children:"Thread t = new Thread(new MyTask()); t.start();"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold border border-slate-800",children:"Required Method"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono",children:"public void run()"}),e.jsx("td",{className:"p-3 border border-slate-800 font-mono",children:"public void run()"})]})]})]})})]}),e.jsx(s,{quote:"A classic CBSE board question asks: 'Why is implementing Runnable preferred over extending Thread?' The definitive answer is: Java does not allow multiple inheritance of classes. If you extend Thread, your class is locked and cannot extend any other parent class. With Runnable, you can extend any parent class while still executing as a thread!"}),e.jsx(r,{questions:h}),e.jsx(l,{title:"CBSE Class 12 IT (802) • Two Ways of Thread Creation",content:m})]})});export{T as default};

import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as g}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as w}from"./FAQTemplate-16IfroqC.js";import{P as S}from"./PlainTextPrint-C6NaUtnE.js";import{c as f,bn as C,bh as v,t as N}from"./vendor-icons-C1Dcofhq.js";const y=[{question:`What is the output of the following Java program?
class Sample {
    int a;
    Sample() {
        a = 10;
    }
    Sample(int x) {
        a = x * 2;
    }
}
public class Main {
    public static void main(String[] args) {
        Sample s1 = new Sample();
        Sample s2 = new Sample(5);
        System.out.println(s1.a + " " + s2.a);
    }
}`,options:["10 10","10 5","0 10","10 0"],correctAnswer:0,explanation:"s1 uses the default constructor (a=10). s2 uses the parameterized constructor (a=5*2=10). Output is '10 10'.",marks:2},{question:"Which of the following constructor declarations is INVALID in class `Product`?",options:["void Product() { ... } (Invalid: specifies return type void)","Product() { ... }","Product(int code) { ... }","Product(String name, double price) { ... }"],correctAnswer:0,explanation:"`void Product()` has a return type and is therefore treated as a regular method, not a valid constructor.",marks:1},{question:"What happens if you attempt to access a `private` field from another class directly?",options:["Compile-time error: variable has private access in class","Runtime NullPointerException","Field is accessed with default value 0","Security warning but runs"],correctAnswer:0,explanation:"Private variables are strictly shielded from direct access outside their declaring class, triggering a compile error.",marks:1}],P=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 9: PRACTICE YOUR SKILL HERE (INTERACTIVE WORKSPACE)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. PRACTICE EXERCISES\r
--------------------------------------------------------------------------------\r
Exercise 1:\r
Design a \`Student\` class with:\r
- Private fields: \`rollNo\`, \`name\`, \`percentage\`\r
- Default constructor setting roll=0, name="Unknown", percentage=0.0\r
- Parameterized constructor accepting all 3 attributes\r
- Getter and setter methods with validation (percentage between 0 and 100).\r
\r
Exercise 2:\r
Trace constructor output when an array of objects is instantiated.\r
================================================================================\r
`,T=()=>{const[s,x]=l.useState(0),[a,u]=l.useState({}),[i,m]=l.useState({}),c=[{id:0,title:"Challenge 1: Constructor Tracing",code:`class Point {
    int x, y;
    Point() { x = 2; y = 3; }
    Point(int a, int b) { x = a * 2; y = b * 3; }
}
// In main:
Point p1 = new Point();
Point p2 = new Point(4, 5);
System.out.println(p1.x + p2.x + " " + (p1.y + p2.y));`,options:["10 18","6 8","10 8","2 15"],correct:0,explanation:`p1: x=2, y=3.
p2: x=4*2=8, y=5*3=15.
p1.x + p2.x = 2 + 8 = 10.
p1.y + p2.y = 3 + 15 = 18.
Output: '10 18'.`},{id:1,title:"Challenge 2: Method vs Constructor Identification",code:`public class Test {
    public void Test() {
        System.out.print("Method ");
    }
    public Test() {
        System.out.print("Constructor ");
    }
    public static void main(String[] args) {
        Test t = new Test();
    }
}`,options:["Constructor ","Method ","Method Constructor ","Compilation error"],correct:0,explanation:"`new Test()` calls the constructor (the one without a return type). The method `public void Test()` is not invoked, so it prints 'Constructor '."},{id:2,title:"Challenge 3: Encapsulation Access Check",code:`class Student {
    private int marks = 90;
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.marks);
    }
}`,options:["Compilation error: marks has private access in Student","Prints 90","NullPointerException","Prints 0"],correct:0,explanation:"Private fields cannot be accessed directly across class boundaries. Accessing `s.marks` causes a compile error."}],r=c[s],h=n=>{u(t=>({...t,[s]:n})),m(t=>({...t,[s]:!0}))};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(C,{className:"w-3.5 h-3.5"})," Interactive Assessment Arena"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"OOP Principles & Constructor Mastery Challenges"})]}),e.jsx("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",children:c.map((n,t)=>e.jsxs("button",{onClick:()=>x(t),className:`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${s===t?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950":"text-slate-400 hover:text-white"}`,children:["Task ",t+1]},n.id))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(v,{className:"w-4 h-4 text-emerald-400"})," ",r.title]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:r.code}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Select the correct result:"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5",children:r.options.map((n,t)=>{const b=a[s]===t,d=r.correct===t,p=i[s];let o="bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-850";return p&&(d?o="bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold":b&&(o="bg-rose-500/10 border-rose-500/40 text-rose-300")),e.jsxs("button",{onClick:()=>h(t),className:`p-3 rounded-xl border text-xs font-mono text-left transition cursor-pointer flex items-center justify-between ${o}`,children:[e.jsx("span",{children:n}),p&&d&&e.jsx(N,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},t)})})]}),i[s]&&e.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1 ${a[s]===r.correct?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-amber-500/10 border-amber-500/30 text-amber-300"}`,children:[e.jsx("strong",{className:"block font-bold",children:a[s]===r.correct?"🎉 Correct Answer!":"💡 Solution Walkthrough:"}),e.jsx("p",{className:"whitespace-pre-line font-mono text-[11px] leading-relaxed text-slate-300",children:r.explanation})]})]})]})},I=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(f,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 9"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Practice your Skill here: OOP & Constructors"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Test your understanding with authentic CBSE examination constructor questions, void traps, and encapsulation problem sets."})]}),e.jsx(T,{}),e.jsx(w,{title:"Frequently Asked Questions • OOP Practice Challenges",questions:y}),e.jsx(S,{content:P,title:"CBSE Class XII IT 802 – OOP Practice Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 9 Note (.txt)",downloadFileName:"004_001_topic9_note.txt"}),e.jsx(g,{note:"Congratulations on mastering OOP principles and constructors! You now know how to design classes, prevent return type traps, and write clean overloaded constructors. — Sukanta Hui"})]})});export{I as default};

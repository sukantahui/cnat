import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as p}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as u}from"./FAQTemplate-16IfroqC.js";import{P as h}from"./PlainTextPrint-C6NaUtnE.js";import{c as g,a5 as v,bt as f,$ as N}from"./vendor-icons-C1Dcofhq.js";const w=[{question:"How is Encapsulation implemented in Java classes?",answer:"Encapsulation is implemented by:\n1. Declaring all instance variables as `private` to prevent direct external access.\n2. Providing `public` getter (accessor) and setter (mutator) methods to safely read and validate modifications to the variables.",marks:2,hint:"Private variables + public getter and setter methods."},{question:"What is the primary benefit of declaring fields `private` and using setter methods?",options:["It allows adding data validation rules (e.g. rejecting negative salary or invalid marks) before updating internal state.","It makes the program compile faster.","It converts the class into an abstract class.","It automatically synchronizes multi-threading."],correctAnswer:0,explanation:"Setters provide a controlled gatekeeper where input validation can intercept invalid or malicious assignments.",marks:1},{question:"Write a standard Java getter and setter method for a `private double balance;` field.",answer:`public double getBalance() {
    return balance;
}

public void setBalance(double b) {
    if (b >= 0) {
        balance = b;
    } else {
        System.out.println("Invalid balance: cannot be negative");
    }
}`,marks:3,hint:"get... returns field; set... accepts parameter with validation."}],j=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 7: ENCAPSULATION IN ACTION: PRIVATE FIELDS & GETTERS/SETTERS\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS ENCAPSULATION?\r
--------------------------------------------------------------------------------\r
Encapsulation is the OOP mechanism of binding data variables and methods together \r
into a class while restricting direct outside access.\r
\r
2. THE ENCAPSULATION RECIPE IN JAVA\r
--------------------------------------------------------------------------------\r
1. Private Data Fields:\r
   Declare all internal attributes with the \`private\` access modifier:\r
   \`private int age;\`\r
   \`private double balance;\`\r
\r
2. Public Accessor (Getter):\r
   Allows safe, read-only access to the variable:\r
   \`public int getAge() { return age; }\`\r
\r
3. Public Mutator (Setter):\r
   Allows controlled write access with data validation:\r
   \`public void setAge(int a) {\`\r
   \`    if (a >= 5 && a <= 100) { age = a; }\`\r
   \`}\`\r
\r
3. WHY NOT MAKE FIELDS PUBLIC?\r
--------------------------------------------------------------------------------\r
If fields are public (\`public int age;\`), any external code can write:\r
\`obj.age = -500;\` // Corrupts system state without any defense!\r
\r
With encapsulation:\r
\`obj.setAge(-500);\` // Intercepted by setter validation rule and rejected!\r
\r
4. BENEFITS SUMMARY\r
--------------------------------------------------------------------------------\r
* Data Hiding: Internal state is invisible to outside classes.\r
* Flexibility: Read-only (getter only) or Write-only (setter only) fields.\r
* Maintainability: Internal implementation can change without breaking client code.\r
================================================================================\r
`,y=()=>{const[r,i]=l.useState(15e3),[s,o]=l.useState(5e3),[a,d]=l.useState(2e4),[c,n]=l.useState(["Account initialized: Balance = ₹15,000.00 (Private field protected)"]),m=()=>{s<=0?n(t=>[`❌ Validation Error: Deposit amount ₹${s} must be positive!`,...t]):(i(t=>t+s),n(t=>[`✅ Success: Deposited ₹${s}. New Balance = ₹${r+s}`,...t]))},x=()=>{a<=0?n(t=>["❌ Validation Error: Withdrawal amount must be positive!",...t]):a>r?n(t=>[`❌ Validation Error: Insufficient funds! Attempted to withdraw ₹${a}, but current balance is only ₹${r}.`,...t]):(i(t=>t-a),n(t=>[`✅ Success: Withdrew ₹${a}. New Balance = ₹${r-a}`,...t]))};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(v,{className:"w-3.5 h-3.5"})," Banking Security & Mutator Validator"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Encapsulation in Action: Private Fields & Getter/Setter Rules"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`private double balance;`"})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-slate-400 block font-semibold",children:"Protected Private Field (`balance`):"}),e.jsxs("span",{className:"text-2xl font-black text-emerald-400 font-mono",children:["₹",r.toLocaleString("en-IN"),".00"]})]}),e.jsx("div",{className:"p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30",children:e.jsx(f,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3",children:[e.jsx("input",{type:"number",value:s,onChange:t=>o(Number(t.target.value)),className:"w-28 bg-slate-950 text-white font-mono text-xs px-2.5 py-1.5 rounded border border-slate-700"}),e.jsx("button",{onClick:m,className:"flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-1.5 px-3 rounded-lg transition cursor-pointer",children:"Call `deposit(amt)` Setter"})]}),e.jsxs("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3",children:[e.jsx("input",{type:"number",value:a,onChange:t=>d(Number(t.target.value)),className:"w-28 bg-slate-950 text-white font-mono text-xs px-2.5 py-1.5 rounded border border-slate-700"}),e.jsx("button",{onClick:x,className:"flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-1.5 px-3 rounded-lg transition cursor-pointer",children:"Call `withdraw(amt)` Setter"})]})]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5",children:[e.jsx(N,{className:"w-4 h-4 text-emerald-400"})," Setter Validation & Audit Log"]}),e.jsx("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1.5 max-h-48 overflow-y-auto",children:c.map((t,b)=>e.jsx("div",{className:t.includes("❌")?"text-rose-400":"text-emerald-300",children:t},b))})]}),e.jsx("div",{className:"text-[11px] text-slate-400 pt-2 border-t border-slate-800/80",children:"Encapsulation ensures balance cannot be set to a negative number directly."})]})]})]})},C=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(g,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 7"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Encapsulation in Action: Private Fields and Public Getters/Setters"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Understand how private instance variables and public accessor/mutator methods secure software systems against data corruption and enforce business logic validation."})]}),e.jsx(y,{}),e.jsx(u,{title:"Frequently Asked Questions • Encapsulation & Getters/Setters",questions:w}),e.jsx(h,{content:j,title:"CBSE Class XII IT 802 – Encapsulation Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 7 Note (.txt)",downloadFileName:"004_001_topic7_note.txt"}),e.jsx(p,{note:"Always protect your object variables with the `private` keyword. Providing public getter and setter methods gives your class complete control over how data is viewed and modified! — Sukanta Hui"})]})});export{C as default};

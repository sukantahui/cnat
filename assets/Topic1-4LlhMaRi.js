import{j as e,b as n}from"./vendor-react-core-Doz9nIC6.js";import{J as l}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as c}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const d=`/**\r
 * ICSE Class 10 Computer Applications - Module 004_001 Topic 1\r
 * Default Constructor vs User-Defined Non-Parameterized Constructor\r
 *\r
 * Demonstrates:\r
 * 1. Automatic insertion of compiler default constructor when no constructors are defined.\r
 * 2. Loss of default constructor once a parameterized constructor is declared.\r
 * 3. Default zero/null initialization values for primitive and reference data types.\r
 *\r
 * @author Sukanta Hui - Coder & AccoTax\r
 */\r
public class DefaultConstructorDemo {\r
\r
    // Instance variables of various data types\r
    private int intVal;\r
    private double doubleVal;\r
    private boolean booleanVal;\r
    private char charVal;\r
    private String stringVal;\r
\r
    // Explicit Non-Parameterized Constructor\r
    public DefaultConstructorDemo() {\r
        System.out.println(">>> User-Defined Non-Parameterized Constructor Invoked!");\r
        // We explicitly set initial values\r
        intVal = 10;\r
        doubleVal = 99.5;\r
        booleanVal = true;\r
        charVal = 'A';\r
        stringVal = "Coder & AccoTax";\r
    }\r
\r
    public void displayDefaults() {\r
        System.out.println("----------------------------------------");\r
        System.out.println("Integer Value  : " + intVal);\r
        System.out.println("Double Value   : " + doubleVal);\r
        System.out.println("Boolean Value  : " + booleanVal);\r
        System.out.println("Char Value     : '" + charVal + "'");\r
        System.out.println("String Value   : " + stringVal);\r
        System.out.println("----------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("--- Creating Object with Non-Parameterized Constructor ---");\r
        DefaultConstructorDemo obj = new DefaultConstructorDemo();\r
        obj.displayDefaults();\r
    }\r
}\r
`,u=`================================================================================\r
ICSE CLASS 10 COMPUTER APPLICATIONS: CONSTRUCTORS IN JAVA\r
TOPIC 1: DEFAULT VS NON-PARAMETERIZED CONSTRUCTOR\r
================================================================================\r
\r
1. COMPILER-PROVIDED DEFAULT CONSTRUCTOR:\r
   If a class contains NO constructors at all, the Java compiler automatically\r
   supplies a hidden default constructor with no arguments.\r
   \r
   Default Initialization Values:\r
   - byte, short, int, long : 0\r
   - float, double          : 0.0 / 0.0f\r
   - char                   : '\\u0000' (null character)\r
   - boolean                : false\r
   - Object references      : null\r
\r
2. CRITICAL ICSE EXAM TRAP:\r
   If you define ANY constructor (e.g. a Parameterized Constructor), the compiler\r
   WILL NOT supply the default constructor automatically!\r
   \r
   Example Trap:\r
   class Demo {\r
       Demo(int x) { ... } // Parameterized\r
   }\r
   \r
   Demo d = new Demo(); // COMPILATION ERROR! No default constructor available.\r
\r
3. NON-PARAMETERIZED CONSTRUCTOR:\r
   A constructor written by the programmer that accepts zero arguments but contains\r
   explicit initialization logic.\r
================================================================================\r
`,m=[{id:1,question:"What is the default value assigned to an uninitialized boolean instance variable by Java's default constructor?",options:["true","false","null","0"],correctAnswer:1,explanation:"Java's automatic default initialization sets boolean fields to false."},{id:2,question:"What default value is assigned to an uninitialized String object reference field?",options:['""','"null"',"null","0"],correctAnswer:2,explanation:"All object reference variables (including String, arrays, and objects) default to null."},{id:3,question:"When does the Java compiler automatically insert a default constructor into a class?",options:["Always, for every class without exception","Only when the developer writes at least one parameterized constructor","Only when NO constructor of any type is declared in the class source code","Never, Java does not support automatic constructors"],correctAnswer:2,explanation:"The compiler provides a default no-argument constructor ONLY if the programmer has defined ZERO constructors in the class."},{id:4,question:"Consider: class Test { Test(int a) {} }. What is the result of writing 'Test t = new Test();'?",options:["Executes normally with a default value for 'a'","Compilation Error: constructor Test() is undefined","Runtime NullPointerException","Creates an empty object with all fields set to null"],correctAnswer:1,explanation:"Because an explicit parameterized constructor Test(int) was declared, Java removed the automatic default no-arg constructor, resulting in a compile-time error when calling new Test()."}],p=()=>{const[t,s]=n.useState("int"),r={int:{label:"int / short / byte",value:"0",desc:"Integer numeric fields default to zero."},double:{label:"double / float",value:"0.0 / 0.0f",desc:"Floating-point numbers default to 0.0."},boolean:{label:"boolean",value:"false",desc:"Booleans default to false."},char:{label:"char",value:"'\\u0000' (Null char)",desc:"Character fields default to Unicode null character."},String:{label:"String / Object Ref",value:"null",desc:"All object references (Strings, Arrays, Objects) default to null."}};return e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔍 Compiler Default Zero-Fill Value Inspector"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a Java data type to inspect its automatic default initialization value when no explicit value is assigned."})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:Object.keys(r).map(a=>e.jsx("button",{onClick:()=>s(a),className:`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${t===a?"bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"}`,children:a},a))}),e.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs text-slate-400 font-mono mb-1",children:["Data Type: ",e.jsx("span",{className:"text-sky-300 font-bold",children:r[t].label})]}),e.jsx("div",{className:"text-sm font-semibold text-slate-200",children:r[t].desc})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-base text-amber-300 font-bold min-w-[140px] text-center",children:["Default: ",r[t].value]})]})]})},j=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Default vs Non-Parameterized"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Default Constructor vs Non-Parameterized Constructor"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding compiler-supplied default constructors, default zero-fill memory states, and programmer-defined non-parameterized constructors."})]}),e.jsx("section",{children:e.jsx(p,{})}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"💡 Key Differences: Default vs User Non-Parameterized"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-slate-300",children:[e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-amber-400",children:"1. Compiler Default Constructor"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["Inserted ",e.jsx("strong",{className:"text-slate-200",children:"automatically"})," by Java compiler if NO constructors exist."]}),e.jsxs("li",{children:["Body contains no custom logic; only calls ",e.jsx("code",{className:"text-sky-300",children:"super()"}),"."]}),e.jsxs("li",{children:["Fills fields with standard zero/null values (e.g. ",e.jsx("code",{className:"text-amber-300",children:"int → 0"}),", ",e.jsx("code",{className:"text-amber-300",children:"String → null"}),")."]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400",children:"2. User Non-Parameterized Constructor"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-xs text-slate-400",children:[e.jsx("li",{children:"Explicitly written by the programmer in the source code."}),e.jsx("li",{children:"Takes 0 arguments but contains explicit custom initialization logic."}),e.jsx("li",{children:"Overrides and replaces compiler default constructor."})]})]})]})]}),e.jsx("section",{children:e.jsx(l,{fileName:"DefaultConstructorDemo.java",code:d,title:"Executable Code: Non-Parameterized Constructor Demonstration"})}),e.jsx("section",{children:e.jsx(o,{questions:m,title:"ICSE Quiz: Default Constructor Rules"})}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(c,{note:"Beware of ICSE output questions: If a class defines 'Demo(int x)', calling 'new Demo()' causes a Compile-Time Error because Java revokes the default constructor once any constructor is explicitly declared!"}),e.jsx(i,{content:u,title:"Printable Cheat Sheet: Topic 1 Notes"})]})]});export{j as default};

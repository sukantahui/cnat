import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as u}from"./TeacherSukantaHui-1kTygSSH.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as g}from"./PlainTextPrint-C6NaUtnE.js";import{P as y}from"./PythonFileLoader-DZ61U3Y_.js";import{c as f,d as j,cb as N,L as C,$ as v,az as m,t as E,br as S,ae as A}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const R=[{question:"Which language processor translates mnemonic assembly language instructions into machine language?",options:["Compiler","Assembler","Interpreter","Linker"],correctAnswer:1,explanation:"An Assembler is specialized system software designed to translate assembly language mnemonics (e.g. MOV, ADD) into binary machine code."},{question:"How does a Compiler differ from an Interpreter in handling syntax errors?",options:["A Compiler stops at the first error, while an Interpreter displays all errors together","A Compiler reports all syntax errors across the entire program at once, whereas an Interpreter halts execution immediately upon encountering the first error","Neither Compilers nor Interpreters report syntax errors","An Interpreter automatically corrects syntax errors without reporting them"],correctAnswer:1,explanation:"Compilers perform full-source batch analysis reporting all errors at once, while Interpreters execute line-by-line and halt at the first faulty statement."},{question:"Does an Interpreter generate a permanent standalone Object Code (.obj or .exe) file?",options:["Yes, always","Yes, but only in Python","No, it translates and executes statements on the fly in memory without producing a permanent object file","No, because object files are only created by word processors"],correctAnswer:2,explanation:"Interpreters translate instructions in memory directly during runtime without saving a permanent standalone machine code executable on disk."},{question:`Assertion (A): C and C++ programs generally execute faster than pure interpreted Python programs.
Reason (R): Compilers produce pre-translated native machine instructions directly executed by the CPU hardware with zero translation overhead during runtime.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Compiled machine code executes directly on CPU silicon registers without runtime translation delays, yielding superior execution speed."},{question:"Which of the following best describes Python's execution architecture?",options:["Pure assembly translation","Pure machine code compilation directly into .exe","A hybrid model: Source (.py) is compiled into Bytecode (.pyc), which is then interpreted by the Python Virtual Machine (PVM)","An uninterpreted text script fed directly into electrical circuits"],correctAnswer:2,explanation:"Python uses a hybrid translation model where source code is compiled into platform-independent bytecode and subsequently interpreted line-by-line by the PVM."}],P=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 2: LANGUAGE PROCESSORS - ASSEMBLER, COMPILER, AND INTERPRETER\r
================================================================================\r
\r
1. WHAT IS A LANGUAGE PROCESSOR (TRANSLATOR)?\r
Computers can execute instructions ONLY in Machine Language (0s and 1s binary code). Humans write programs in Assembly language (mnemonics) or High-Level Languages (Python, C++, Java). A Language Processor is system software that converts source code into machine-executable binary object code.\r
\r
2. THREE MAJOR TYPES OF LANGUAGE PROCESSORS:\r
\r
A. ASSEMBLER:\r
Translates Low-Level Assembly Language programs (mnemonics like \`MOV\`, \`ADD\`, \`SUB\`, \`JMP\`) into Machine Language (binary opcodes).\r
- 1-to-1 Mapping: Usually one assembly statement maps directly to one machine instruction.\r
- Hardware-dependent: Assembly code written for an x86 Intel processor will not run on an ARM processor.\r
\r
B. COMPILER:\r
Translates the ENTIRE High-Level Language source program into Machine Code in a single batch pass BEFORE execution.\r
- Generates an intermediate Object Code file (.obj / .exe).\r
- Lists all syntax errors at once after analyzing the entire source file.\r
- Once compiled, the target executable runs at maximum CPU hardware speed without needing the compiler present.\r
- Examples: C, C++, Rust, Go, Fortran compilers (GCC, Clang, MSVC).\r
\r
C. INTERPRETER:\r
Translates High-Level Language source code LINE-BY-LINE, executing each line immediately as it is translated.\r
- Does NOT create a standalone object code file.\r
- Halts execution immediately upon encountering the first syntax/runtime error.\r
- Slower execution speed compared to compiled code because translation overhead occurs on every run.\r
- Easier for debugging and interactive experimentation.\r
- Examples: Python (CPython bytecode interpreter), JavaScript (V8), Ruby, PHP.\r
\r
3. CBSE COMPARISON TABLE: COMPILER VS INTERPRETER\r
\r
| Feature | Compiler | Interpreter |\r
| :--- | :--- | :--- |\r
| Translation Strategy | Translates entire source file at once | Translates line-by-line sequentially |\r
| Error Reporting | Displays all syntax errors at once | Halts at the first error encountered |\r
| Object Code Created | Yes (.obj / .exe generated) | No standalone object file generated |\r
| Execution Speed | Very Fast (executed directly by CPU) | Slower (interpreting overhead per run) |\r
| Source Code Needed at Run? | No (only the binary is needed) | Yes (source code interpreted each time) |\r
| Memory Requirement | Requires more memory during compile | Requires less memory during execution |\r
| Primary Examples | C, C++, Rust | Python, JavaScript, Ruby |\r
\r
4. HYBRID EXECUTION MODEL (PYTHON & JAVA):\r
Modern languages like Python use a two-step hybrid approach:\r
Step 1: Python Compiler compiles source code (.py) into intermediate Bytecode (.pyc).\r
Step 2: Python Virtual Machine (PVM Interpreter) interprets and executes the bytecode on the target host CPU.\r
`,w=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: compiler_vs_interpreter_benchmark.py\r
Topic 2: Language Processors - Assembler, Compiler, and Interpreter\r
\r
Demonstrates:\r
1. Three-way Language Translation Models:\r
   - Assembler (Mnemonic Assembly -> Machine Code)\r
   - Compiler (Entire Source Code -> Intermediate/Object File .o/.exe)\r
   - Interpreter (Line-by-line Parsing & Immediate Execution)\r
2. Execution speed benchmark and error reporting differences\r
"""\r
\r
import time\r
\r
# 1. Assembler Simulation\r
ASSEMBLY_SOURCE = [\r
    "MOV R1, #10",\r
    "MOV R2, #20",\r
    "ADD R0, R1, R2",\r
    "HLT"\r
]\r
\r
OPCODE_TABLE = {\r
    "MOV": "0001",\r
    "ADD": "0010",\r
    "HLT": "1111"\r
}\r
\r
def assemble_code(asm_lines: list) -> list:\r
    print("\\n--- [1. ASSEMBLER TRANSLATION PIPELINE] ---")\r
    machine_code = []\r
    for line in asm_lines:\r
        tokens = line.replace(",", "").split()\r
        mnemonic = tokens[0]\r
        opcode = OPCODE_TABLE.get(mnemonic, "0000")\r
        binary_repr = f"{opcode} {tokens[1:] if len(tokens) > 1 else ''}"\r
        machine_code.append(binary_repr)\r
        print(f"Assembly: {line.ljust(16)} -> Machine Binary: {binary_repr}")\r
    return machine_code\r
\r
\r
# 2. Compiler vs Interpreter Comparison Simulation\r
SOURCE_PROGRAM = [\r
    "x = 10",\r
    "y = 25",\r
    "total = x + y",\r
    "invalid_variable_name % 99",  # Syntax error at line 4\r
    "print('Finished computation')"\r
]\r
\r
def simulate_compiler(source: list):\r
    print("\\n--- [2. COMPILER TRANSLATION (Batch Analysis)] ---")\r
    print("[*] Phase 1: Lexical, Syntax, & Semantic Analysis across entire file...")\r
    errors_found = []\r
    for line_num, statement in enumerate(source, start=1):\r
        if "%" in statement and "=" not in statement:\r
            errors_found.append(f"SyntaxError on Line {line_num}: Invalid token '%' in expression '{statement}'")\r
    \r
    if errors_found:\r
        print("[!] Compilation Failed! All syntax errors listed at once:")\r
        for err in errors_found:\r
            print(f"    - {err}")\r
        print("[!] No Object Code (.exe/.obj) generated. Program CANNOT run until all errors are fixed.")\r
    else:\r
        print("[+] Compilation Succeeded! Standalone binary target generated.")\r
\r
\r
def simulate_interpreter(source: list):\r
    print("\\n--- [3. INTERPRETER EXECUTION (Line-by-Line)] ---")\r
    scope = {}\r
    for line_num, statement in enumerate(source, start=1):\r
        print(f"[*] Interpreting Line {line_num}: '{statement}'")\r
        time.sleep(0.05)\r
        try:\r
            if "%" in statement and "=" not in statement:\r
                raise SyntaxError(f"Invalid token on Line {line_num}")\r
            exec(statement, {}, scope)\r
            print(f"    [+] Executed successfully. Scope state: {scope}")\r
        except Exception as e:\r
            print(f"    [!] RUNTIME HALT: {e}")\r
            print("    [!] Interpreter stopped execution at line of first error. Subsequent lines never reached.")\r
            break\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - LANGUAGE PROCESSORS BENCHMARK SUITE   ")\r
    print("=================================================================\\n")\r
\r
    # 1. Assemble Mnemonic code\r
    assemble_code(ASSEMBLY_SOURCE)\r
\r
    # 2. Compiler batch translation\r
    simulate_compiler(SOURCE_PROGRAM)\r
\r
    # 3. Interpreter immediate execution\r
    simulate_interpreter(SOURCE_PROGRAM)\r
\r
if __name__ == "__main__":\r
    main()\r
`,L=()=>{const[r,c]=o.useState("compiler"),[s,a]=o.useState("idle"),[d,i]=o.useState(0),x=[{line:1,text:"a = 15",valid:!0},{line:2,text:"b = 30",valid:!0},{line:3,text:"sum_val = a + b",valid:!0},{line:4,text:"print % 99 (Syntax Error)",valid:!1},{line:5,text:"print('Result:', sum_val)",valid:!0}],h=()=>{if(a("translating"),i(1),r==="compiler")setTimeout(()=>{i(2),setTimeout(()=>{a("error")},600)},600);else{let t=1;const n=setInterval(()=>{t++,i(t),t===4&&(clearInterval(n),a("error"))},500)}},l=()=>{a("idle"),i(0)};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold",children:e.jsx(S,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Language Processor Execution Engine: Compiler vs Interpreter"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how a batch compiler compares against a line-by-line interpreter on buggy source code."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>{c("compiler"),l()},className:`px-3 py-1.5 font-semibold rounded-lg transition-all ${r==="compiler"?"bg-purple-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Compiler (Batch Pass)"}),e.jsx("button",{onClick:()=>{c("interpreter"),l()},className:`px-3 py-1.5 font-semibold rounded-lg transition-all ${r==="interpreter"?"bg-purple-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Interpreter (Line-by-Line)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 font-mono",children:"source_program.py"}),e.jsx("span",{className:"text-[10px] uppercase font-bold text-amber-400",children:"Contains 1 Error at Line 4"})]}),e.jsx("div",{className:"font-mono text-xs space-y-1.5",children:x.map(t=>{const n=r==="interpreter"&&d===t.line,p=!t.valid&&s==="error";return e.jsxs("div",{className:`p-2 rounded-lg flex items-center justify-between border transition-all ${p&&(r==="compiler"||n)?"bg-rose-950/50 border-rose-500/80 text-rose-300":n?"bg-amber-500/20 border-amber-500/80 text-amber-200":"bg-slate-950 border-slate-850 text-slate-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-500 select-none w-4",children:t.line}),e.jsx("code",{children:t.text})]}),n&&e.jsx("span",{className:"text-[10px] text-amber-400 font-bold animate-pulse",children:"Executing →"}),p&&e.jsx("span",{className:"text-[10px] text-rose-400 font-bold",children:"Syntax Error!"})]},t.line)})}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsxs("button",{onClick:h,disabled:s==="translating",className:"px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer",children:[e.jsx(A,{size:14})," Run ",r==="compiler"?"Compilation":"Interpretation"]}),e.jsx("button",{onClick:l,className:"px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition cursor-pointer",children:"Reset"})]})]}),e.jsxs("div",{className:"lg:col-span-6 bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Diagnostic Output Window"}),e.jsxs("span",{className:"text-[10px] font-mono text-purple-400 uppercase tracking-wider",children:[r," Mode"]})]}),e.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-850 min-h-[190px] font-mono text-xs space-y-2",children:[s==="idle"&&e.jsxs("p",{className:"text-slate-500 italic",children:['Click "Run" to initiate the ',r," pipeline."]}),s==="translating"&&e.jsx("div",{className:"text-amber-300 space-y-1",children:r==="compiler"?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"[*] Compiler parsing source AST and symbol tables..."}),e.jsx("p",{children:"[*] Analyzing scope and token hierarchy across entire file..."})]}):e.jsxs("p",{children:["[*] Interpreter translating and evaluating statement ",d,"..."]})}),s==="error"&&r==="compiler"&&e.jsxs("div",{className:"text-rose-300 space-y-1.5",children:[e.jsx("p",{className:"font-bold text-rose-400",children:"[!] Compilation Aborted with 1 Fatal Syntax Error:"}),e.jsx("div",{className:"p-2 rounded bg-rose-950/80 border border-rose-800 text-[11px]",children:e.jsx("code",{children:"Line 4: SyntaxError: invalid syntax in expression 'print % 99'"})}),e.jsxs("p",{className:"text-slate-400 text-[11px]",children:[e.jsx("strong",{children:"CBSE Rule:"})," A compiler analyzes the whole program at once. It produces 0 output / 0 object code until ALL errors are corrected."]})]}),s==="error"&&r==="interpreter"&&e.jsxs("div",{className:"text-rose-300 space-y-1.5",children:[e.jsx("p",{className:"text-emerald-400",children:"[+] Lines 1, 2, and 3 executed successfully in memory."}),e.jsx("p",{className:"font-bold text-rose-400",children:"[!] Runtime Crash at Line 4:"}),e.jsx("div",{className:"p-2 rounded bg-rose-950/80 border border-rose-800 text-[11px]",children:e.jsx("code",{children:"SyntaxError on Line 4: Execution halted immediately."})}),e.jsxs("p",{className:"text-slate-400 text-[11px]",children:[e.jsx("strong",{children:"CBSE Rule:"})," An interpreter halts at the exact line of the first error. Line 5 was never reached or executed."]})]})]})]})]})]})};function H(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Language Processors: Assembler, Compiler, and Interpreter"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Compare language translation paradigms, error reporting models, object code generation, and Python's hybrid Bytecode-PVM architecture."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(f,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Book Translation vs Live UN Diplomat"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-purple-400 flex items-center gap-1.5",children:[e.jsx(j,{size:14})," The Compiler: Full Book Publisher"]}),e.jsxs("p",{className:"text-slate-300",children:["A translator receives an entire 500-page English book, translates the whole text into Hindi, prints a brand-new Hindi book (the ",e.jsx("strong",{children:"Object File"}),"), and hands it to readers. Once printed, anyone can read the Hindi book instantly without needing the translator present."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[e.jsx(N,{size:14})," The Interpreter: Live UN Speech Interpreter"]}),e.jsx("p",{className:"text-slate-300",children:"A live diplomat interpreter stands next to the speaker, translating sentence-by-sentence in real time. If the speaker stumbles or speaks an unintelligible word (syntax error), the interpreter stops speaking immediately. No translated book is saved for later."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(C,{className:"text-purple-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Comparative Analysis: Compiler vs Interpreter"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-300 uppercase font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Comparison Parameter"}),e.jsx("th",{className:"p-3 text-purple-400",children:"Compiler"}),e.jsx("th",{className:"p-3 text-sky-400",children:"Interpreter"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Translation Methodology"}),e.jsx("td",{className:"p-3",children:"Translates entire program in one complete batch pass"}),e.jsx("td",{className:"p-3",children:"Translates and executes code statement by statement"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Error Reporting"}),e.jsx("td",{className:"p-3",children:"Lists all syntax errors at once after scanning the whole file"}),e.jsx("td",{className:"p-3",children:"Halts immediately upon the first error encountered"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Target Object Code"}),e.jsx("td",{className:"p-3",children:"Produces standalone machine object code (.exe / .obj)"}),e.jsx("td",{className:"p-3",children:"No permanent object code file generated"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Execution Speed"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"Fast (runs directly on CPU hardware)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Slower (translation overhead on every run)"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Representative Languages"}),e.jsx("td",{className:"p-3 font-mono",children:"C, C++, Rust, Go"}),e.jsx("td",{className:"p-3 font-mono",children:"Python, JavaScript, Ruby, PHP"})]})]})]})})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(L,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(v,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Language Processor Benchmark Simulation"})]}),e.jsx(y,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic2_files/compiler_vs_interpreter_benchmark.py",fileContent:w})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(m,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(m,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Writing that an Assembler translates high-level code:"})," Assemblers ONLY translate low-level Assembly mnemonics to machine code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Claiming that an Interpreter creates an .exe file:"})," Interpreters never save a standalone object file on disk."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(E,{size:18}),e.jsx("span",{children:"Examiner Recommended Points"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mention Python Bytecode:"})," Explain that Python compiles source code to Bytecode (.pyc) before interpretation by the Python Virtual Machine."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Highlight error reporting differences:"}),' Explicitly mention "batch error reporting" vs "halt at first error".']})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(b,{questions:R})}),e.jsx("div",{className:"space-y-4",children:e.jsx(g,{fileName:"CBSE_Class11_CS_Topic2_Language_Processors_Notes.txt",content:P})}),e.jsx("div",{className:"space-y-4",children:e.jsx(u,{topicName:"Language Processors (Assembler, Compiler & Interpreter)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{H as default};

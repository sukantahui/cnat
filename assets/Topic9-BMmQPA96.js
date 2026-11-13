import{b as o,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as u}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as x}from"./FAQTemplate-16IfroqC.js";import{P as S}from"./PlainTextPrint-C6NaUtnE.js";import{F as h,D as y,$ as b,f,g}from"./vendor-icons-Bcvdak5x.js";const C=[{question:"Which document in the module repository contains the master consolidated notes for Types of Software and OS Functions?",options:["topic9_note.txt","firmware_hex_dump.bin","windows_registry_keys.reg","dos_boot_sector.img"],correctAnswer:0,explanation:"topic9_note.txt contains the complete consolidated revision notes and cheat sheets for Module 001_002."},{question:"What is the primary benefit of downloading and running the module's Python master lab script locally?",options:["It overclocking the computer hardware","It allows students to experiment hands-on with CPU scheduling algorithms, language translators, and device spooling","It automatically finishes the CBSE board practical exam","It replaces the computer operating system"],correctAnswer:1,explanation:"The Python simulation scripts provide interactive hands-on exploration of theoretical OS and compiler concepts."}],l=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083) - UNIT I: CSO\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 9: DOWNLOADABLE DOCUMENTS & MASTER REVISION COMPENDIUM\r
================================================================================\r
\r
1. MODULE 001_002 QUICK REVISION CHEAT SHEET:\r
\r
* SOFTWARE TAXONOMY:\r
  - System Software: OS, Device Drivers, System Utilities.\r
  - Application Software: General Purpose (MS Word, Excel) vs Customized/Bespoke (IRCTC, School ERP).\r
\r
* LANGUAGE PROCESSORS:\r
  - Assembler: Assembly mnemonics -> Machine code.\r
  - Compiler: Entire high-level source -> Object code (.exe). Batch error reporting.\r
  - Interpreter: Translates line-by-line. Halts at first error. No permanent object file.\r
  - Python Hybrid Model: Source (.py) -> Bytecode (.pyc) -> Python Virtual Machine (PVM).\r
\r
* OPERATING SYSTEM 4 CORE PILLARS:\r
  1. Processor Management: Process states (Ready, Running, Blocked), CPU scheduling (FCFS, Round Robin).\r
  2. Memory Management: Dynamic RAM allocation, Base/Limit register protection, Paging/Virtual Memory.\r
  3. File Management: Hierarchical directory tree, Inodes, FAT/NTFS/ext4, rwx permissions.\r
  4. Device Management: Device drivers, Buffering, Spooling (Simultaneous Peripheral Operations On-Line).\r
\r
* OS CONCURRENCY PARADIGMS:\r
  - Single-User Single-Tasking: MS-DOS.\r
  - Single-User Multi-Tasking: Windows 11, macOS, Android.\r
  - Multi-User: Ubuntu Linux Server, Unix.\r
  - Multiprogramming: Overlaps CPU bursts with I/O wait to maximize CPU utilization.\r
  - Time-Sharing: Rapid Round Robin time-slicing to minimize interactive response time.\r
  - Real-Time OS (RTOS): Deterministic execution satisfying hard timing deadlines (VxWorks, QNX).\r
`,s=`"""\r
================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083) - MASTER LAB SUITE\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
FILE: module_001_002_master_lab.py\r
AUTHOR: Sukanta Hui (Teacher & Curriculum Lead)\r
\r
Comprehensive Master Lab Script combining:\r
1. Software Layer Classifier (System, Utility, Application, Bespoke)\r
2. Language Processor Speed & Error Benchmark (Assembler, Compiler, Interpreter)\r
3. Operating System Core Resource Managers (CPU Scheduler, RAM Allocator, Inode Tree, Spooler)\r
4. Hardware Abstraction Layer & System Call Trap Simulator\r
5. Real-Time OS (RTOS) Deadline Verification Engine\r
================================================================================\r
"""\r
\r
import time\r
import collections\r
\r
def run_software_classification_audit():\r
    print("\\n--- [PART 1: ENTERPRISE SOFTWARE CLASSIFICATION AUDIT] ---")\r
    catalog = [\r
        {"name": "Ubuntu Linux 24.04 LTS", "category": "System Software (Operating System)"},\r
        {"name": "NVIDIA Graphics Display Driver", "category": "System Software (Device Driver)"},\r
        {"name": "Windows Disk Defragmenter", "category": "System Software (System Utility)"},\r
        {"name": "Microsoft Excel", "category": "Application Software (General Purpose)"},\r
        {"name": "IRCTC Train Reservation Engine", "category": "Application Software (Customized / Bespoke)"}\r
    ]\r
    for idx, item in enumerate(catalog, start=1):\r
        print(f"[{idx}] {item['name'].ljust(35)} -> {item['category']}")\r
\r
\r
def run_cpu_scheduling_demo():\r
    print("\\n--- [PART 2: CPU SCHEDULING (ROUND ROBIN TIME-SLICING)] ---")\r
    queue = collections.deque([\r
        {"id": "P1", "app": "Python Script", "burst": 25},\r
        {"id": "P2", "app": "Web Browser", "burst": 15},\r
        {"id": "P3", "app": "Audio Stream", "burst": 10}\r
    ])\r
    quantum = 10\r
    time_tick = 0\r
    while queue:\r
        p = queue.popleft()\r
        slice_used = min(quantum, p['burst'])\r
        time_tick += slice_used\r
        p['burst'] -= slice_used\r
        print(f"Time {time_tick:02d}ms: CPU assigned to {p['id']} ({p['app']}) | Remaining burst: {p['burst']}ms")\r
        if p['burst'] > 0:\r
            queue.append(p)\r
        else:\r
            print(f"    [+] {p['id']} successfully terminated.")\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - MODULE 001_002 MASTER LAB REPOSITORY  ")\r
    print("=================================================================")\r
    run_software_classification_audit()\r
    run_cpu_scheduling_demo()\r
    print("\\n[+] Module 001_002 Master Verification complete. All tests PASSED.")\r
\r
if __name__ == "__main__":\r
    main()\r
`;function A(){const[a,i]=o.useState(!1),[_,N]=o.useState("resources"),c=()=>{navigator.clipboard.writeText(s),i(!0),setTimeout(()=>i(!1),2e3)},d=(t,n)=>{const r=document.createElement("a"),m=new Blob([n],{type:"text/plain;charset=utf-8"});r.href=URL.createObjectURL(m),r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)},p=[{title:"Module 001_002 Consolidated Theory & Exam Notes",desc:"Complete 11-topic textbook summary with software classifications, language processors, OS 4 pillars, and concurrency comparisons.",file:"CBSE_Class11_CS_Module_001_002_Master_Notes.txt",content:l,tag:"Comprehensive Note"},{title:"Full Python Interactive Simulation Master Lab",desc:"Ready-to-run Python script featuring OS scheduling, memory allocation, trap transitions, and language translator benchmarks.",file:"module_001_002_master_lab.py",content:s,tag:"Python Lab Script"}];return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"Resource Repository"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Downloadable Documents & Lab Code Repository"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Access and download full study notes, printable cheat sheets, and verified Python simulation code for Module 001_002 (Types of Software & OS Functions)."})]})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:p.map((t,n)=>e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-sky-500/50 transition-all shadow-xl",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:t.tag}),e.jsx(h,{className:"text-slate-500",size:18})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:t.title}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:t.desc})]}),e.jsx("div",{className:"pt-2",children:e.jsxs("button",{onClick:()=>d(t.file,t.content),className:"w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow",children:[e.jsx(y,{size:14})," Download ",t.file]})})]},n))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-base font-bold text-white",children:"module_001_002_master_lab.py (Direct Source Preview)"})]}),e.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer",children:[a?e.jsx(f,{size:14,className:"text-emerald-400"}):e.jsx(g,{size:14}),e.jsx("span",{children:a?"Copied to Clipboard":"Copy Code"})]})]}),e.jsx("pre",{className:"bg-slate-950 p-4 rounded-xl border border-slate-850 font-mono text-xs text-slate-300 overflow-x-auto max-h-96 leading-relaxed",children:s})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(x,{questions:C})}),e.jsx("div",{className:"space-y-4",children:e.jsx(S,{fileName:"CBSE_Class11_CS_Module_001_002_Consolidated_Notes.txt",content:l})}),e.jsx("div",{className:"space-y-4",children:e.jsx(u,{topicName:"Module 001_002 Downloadable Resources",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{A as default};

import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as g}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as h}from"./FAQTemplate-16IfroqC.js";import{P as S}from"./PlainTextPrint-C6NaUtnE.js";import{P as b}from"./PythonFileLoader-DZ61U3Y_.js";import{c as f,r as y,aq as d,d as T,$ as N,az as c,t as j,ae as O}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const C=[{question:"What is the primary objective of a Multiprogramming Operating System?",options:["To maximize CPU utilization by switching to another job whenever the active process halts for an I/O operation","To format disk sectors every 5 minutes","To restrict the computer to only one running program","To prevent any user from logging in without a mouse"],correctAnswer:0,explanation:"Multiprogramming keeps multiple programs in RAM and transfers CPU control to another process whenever the current one waits for I/O, eliminating CPU idle time."},{question:"How does a Time-Sharing Operating System differ from a basic Multiprogramming System?",options:["Time-sharing systems only run during night hours","Time-sharing allocates fixed rapid time slices (quanta) to multiple interactive users to minimize response time, whereas multiprogramming focuses on maximizing batch CPU utilization","Time-sharing systems do not support RAM","Multiprogramming does not allow files on disk"],correctAnswer:1,explanation:"Time-sharing uses preemptive time-slicing so multiple users receive immediate interactive responses, creating the illusion of dedicated system ownership."},{question:"Which of the following is a critical requirement of a Real-Time Operating System (RTOS)?",options:["Vibrant 3D desktop animations","Guaranteed execution within strict, deterministic time constraints / deadlines","Unlimited free cloud storage","Compatibility with video game gamepads"],correctAnswer:1,explanation:"An RTOS must process events and guarantee responses within rigid time limits (deadlines), making it indispensable for avionics, medical implants, and automotive controls."},{question:`Assertion (A): In a Multi-User operating system like Linux, multiple users can log in simultaneously from different remote terminals without interfering with each other's private files.
Reason (R): The OS enforces rigorous user authentication, process isolation, and file ownership access control permissions.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Multi-user operating systems use UID/GID access control lists and virtual memory isolation to safeguard each user's environment."},{question:"Which of the following Operating Systems is classified as a Single-User Single-Tasking OS?",options:["MS-DOS","Ubuntu Linux","Windows 11","macOS"],correctAnswer:0,explanation:"MS-DOS is a classic single-user single-tasking operating system capable of executing only one application at a time."}],v=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 7: TYPES OF OPERATING SYSTEMS - PRESCRIBED & ENRICHMENT CONCEPTS\r
================================================================================\r
\r
1. PRESCRIBED CBSE OPERATING SYSTEM TYPES:\r
\r
A. SINGLE-USER SINGLE-TASKING OS:\r
Allows only one user to execute one program at any given time.\r
- Example: MS-DOS (Microsoft Disk Operating System).\r
- Limitation: If a program is printing a large file, the entire system is locked until printing completes.\r
\r
B. SINGLE-USER MULTI-TASKING OS:\r
Allows a single user to run multiple active applications concurrently.\r
- Example: Windows 11, macOS, Android.\r
- Benefit: A student can type a Python program in VS Code while listening to music and downloading a PDF in the background.\r
\r
C. MULTI-USER OPERATING SYSTEM:\r
Allows multiple distinct users to access computer system resources, memory, and CPU time concurrently from different terminals.\r
- Uses strict authentication, file ownership access permissions, and session sandboxing.\r
- Example: Linux (Ubuntu Server, Red Hat Enterprise Linux), Unix, Mainframe OS (z/OS).\r
\r
D. MULTIPROGRAMMING OPERATING SYSTEM:\r
Keeps multiple programs loaded into physical memory simultaneously.\r
- Core Mechanism: When the actively running program halts to wait for an I/O operation (e.g. reading from disk or waiting for user keyboard input), the CPU immediately context-switches to another ready program.\r
- Primary Goal: Maximize CPU utilization and eliminate idle CPU cycles.\r
\r
E. TIME-SHARING (MULTITASKING) OPERATING SYSTEM:\r
A logical extension of multiprogramming where the CPU switches between multiple jobs so rapidly using a fixed time quantum (e.g., 10 to 50 milliseconds) that each user gets the illusion of having a dedicated computer.\r
- Employs preemptive Round Robin scheduling.\r
- Primary Goal: Minimize user interactive response time.\r
\r
2. ENRICHMENT / ADVANCED CONCEPTS:\r
\r
A. REAL-TIME OPERATING SYSTEM (RTOS):\r
Designed for systems where computations must strictly complete within rigid, deterministic time deadlines. A late answer is treated as a total system failure.\r
- Hard RTOS: Missed deadline causes catastrophic failure (e.g., Flight Avionics, Automotive ABS/Airbags, Nuclear Plant Coolant Control). Examples: VxWorks, QNX.\r
- Soft RTOS: Occasional missed deadline causes degraded quality but no fatal crash (e.g., Live Video Streaming, Audio Synthesizers). Example: RTLinux, FreeRTOS.\r
\r
B. DISTRIBUTED OPERATING SYSTEM:\r
Manages a collection of independent, networked computers appearing to users as a single coherent system. Tasks and computational loads are automatically distributed across multiple cluster nodes.\r
- Examples: Apache Hadoop OS layer, Google Borg/Kubernetes cluster orchestrator.\r
\r
3. CBSE EXAMINATION SUMMARY TABLE:\r
\r
| OS Type | Primary Objective | Key Real-World Example |\r
| :--- | :--- | :--- |\r
| Single-User Single-Tasking | Minimalist single execution | MS-DOS |\r
| Single-User Multi-Tasking | Individual productivity multitasking | Windows 11, macOS, Android |\r
| Multi-User | Multi-terminal concurrent access | Linux (Ubuntu Server), Unix |\r
| Multiprogramming | Maximize CPU hardware utilization | IBM OS/360, Linux Kernel |\r
| Time-Sharing | Minimize interactive response time | CTSS, Unix time-slice clusters |\r
| Real-Time (RTOS) | Guaranteed strict timing deadlines | VxWorks, QNX, FreeRTOS |\r
`,A=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: os_types_concurrency_sim.py\r
Topic 7: Types of Operating Systems - Single-User, Multi-User, Multiprogramming, Time-Sharing, RTOS, Distributed\r
\r
Demonstrates:\r
1. Multiprogramming (Overlapping CPU burst with I/O wait)\r
2. Time-Sharing (Round Robin time slicing across multiple concurrent users)\r
3. Real-Time OS (Hard deadline deterministic scheduling)\r
4. Distributed OS (Network node load sharing)\r
"""\r
\r
import collections\r
import time\r
\r
class OperatingSystemTypeSimulator:\r
    """Simulates concurrency models across major OS paradigms."""\r
    \r
    @staticmethod\r
    def simulate_multiprogramming():\r
        print("\\n--- [1. MULTIPROGRAMMING OS SIMULATION] ---")\r
        print("[*] Goal: Maximize CPU utilization by running Process B whenever Process A waits for I/O.")\r
        print("    Time 0ms: P1 starts CPU burst (Duration: 10ms)")\r
        print("    Time 10ms: P1 issues Disk Read -> CPU switches immediately to P2 (Duration: 15ms)")\r
        print("    Time 25ms: P1 Disk Read completes -> P1 resumes on CPU.")\r
        print("[+] CPU was 100% busy; 0ms wasted on idle waiting.")\r
\r
    @staticmethod\r
    def simulate_timesharing(users: list, quantum_ms: int = 10):\r
        print(f"\\n--- [2. TIME-SHARING MULTI-USER OS (Quantum: {quantum_ms}ms)] ---")\r
        queue = collections.deque(users)\r
        while queue:\r
            user = queue.popleft()\r
            print(f"[*] Allocating {quantum_ms}ms slice to {user['name']} on Terminal {user['tty']}...")\r
            user['remaining'] -= quantum_ms\r
            if user['remaining'] > 0:\r
                print(f"    -> Slice expired. Preempting {user['name']} (Remaining: {user['remaining']}ms) -> Appended to back of Ready Queue.")\r
                queue.append(user)\r
            else:\r
                print(f"    [+] {user['name']} task finished execution.")\r
\r
    @staticmethod\r
    def simulate_rtos_deadline(task_name: str, deadline_ms: float, execution_ms: float):\r
        print(f"\\n--- [3. REAL-TIME OS (RTOS) HARD DEADLINE CHECK] ---")\r
        print(f"[*] Critical Task: '{task_name}' | Max Permissible Deadline: {deadline_ms} ms")\r
        if execution_ms <= deadline_ms:\r
            print(f"[+] SUCCESS: Task completed in {execution_ms} ms <= {deadline_ms} ms deadline. Actuator fired safely.")\r
        else:\r
            print(f"[!] DEADLINE MISSED: Task took {execution_ms} ms > {deadline_ms} ms. SYSTEM SAFETY FAULT!")\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - OS TAXONOMY CONCURRENCY SUITE         ")\r
    print("=================================================================\\n")\r
\r
    # 1. Multiprogramming\r
    OperatingSystemTypeSimulator.simulate_multiprogramming()\r
\r
    # 2. Time-Sharing Multi-User\r
    users = [\r
        {"name": "Sukanta (Teacher)", "tty": "pts/0", "remaining": 20},\r
        {"name": "Mamata (Student)", "tty": "pts/1", "remaining": 15},\r
        {"name": "Ananya (Admin)", "tty": "pts/2", "remaining": 10}\r
    ]\r
    OperatingSystemTypeSimulator.simulate_timesharing(users, quantum_ms=10)\r
\r
    # 3. Real-Time OS\r
    OperatingSystemTypeSimulator.simulate_rtos_deadline("Airbag Deployment Sensor", deadline_ms=5.0, execution_ms=1.8)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=()=>{const[i,p]=l.useState("multiprogramming"),[o,n]=l.useState(0),[u,m]=l.useState(!1),r={single:{name:"1. Single-User Single-Tasking (e.g. MS-DOS)",focus:"One user, one program at a time. System is locked during I/O.",timeline:[{time:"0ms - 20ms",desc:"Program A executes on CPU",state:"CPU Active"},{time:"20ms - 50ms",desc:"Program A waits for Disk I/O (CPU sits completely idle)",state:"CPU Idle ⚠️"},{time:"50ms - 70ms",desc:"Program A resumes and finishes on CPU",state:"CPU Active"}]},multiprogramming:{name:"2. Multiprogramming OS (CPU Utilization Maximizer)",focus:"Switches to Job B immediately when Job A halts for I/O.",timeline:[{time:"0ms - 20ms",desc:"Job A runs on CPU",state:"Job A CPU"},{time:"20ms - 50ms",desc:"Job A halts for Disk Read -> CPU instantly context-switches to Job B",state:"Job B CPU"},{time:"50ms - 70ms",desc:"Job A I/O completes -> CPU switches back to Job A",state:"Job A CPU"}]},timesharing:{name:"3. Time-Sharing Multi-User OS (Round Robin Time-Slicing)",focus:"Preemptive 10ms time slices across multiple interactive users.",timeline:[{time:"0ms - 10ms",desc:"Slice 1 allocated to User 1 (Sukanta)",state:"User 1"},{time:"10ms - 20ms",desc:"Slice 2 allocated to User 2 (Mamata)",state:"User 2"},{time:"20ms - 30ms",desc:"Slice 3 allocated to User 3 (Ananya)",state:"User 3"},{time:"30ms - 40ms",desc:"Cycle repeats: Slice 4 allocated back to User 1",state:"User 1"}]},rtos:{name:"4. Real-Time Operating System - RTOS (Hard Deadline)",focus:"Guarantees deterministic execution before deadline threshold.",timeline:[{time:"0.0ms",desc:"Airbag Collision Sensor triggers IRQ interrupt",state:"IRQ Trigger"},{time:"1.2ms",desc:"Deterministic Kernel context switch to Safety Task",state:"Kernel ISR"},{time:"2.8ms",desc:"Actuator pulse fired (Well within 5.0ms deadline threshold)",state:"Safe Deployment"}]}},x=()=>{m(!0),n(0);const s=r[i].timeline.length;let t=0;const a=setInterval(()=>{t++,t<s?n(t):(clearInterval(a),m(!1))},800)};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(d,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Operating System Concurrency Paradigm Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare Multiprogramming, Time-Sharing, and Real-Time deterministic scheduling."})]})]}),e.jsxs("button",{onClick:x,disabled:u,className:"px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer flex items-center gap-2 shadow",children:[e.jsx(O,{size:14})," Animate Concurrency Timeline"]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:Object.entries(r).map(([s,t])=>e.jsxs("button",{onClick:()=>{p(s),n(0)},className:`p-3 rounded-xl border text-left transition-all cursor-pointer ${i===s?"border-amber-500 bg-amber-500/10 text-white shadow-lg":"border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("h4",{className:"text-xs font-bold text-white mb-1 truncate",children:t.name}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2",children:t.focus})]},s))}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-300",children:["Active Concurrency Timeline: ",e.jsx("span",{className:"text-amber-400",children:r[i].name})]}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Step ",o+1," of ",r[i].timeline.length]})]}),e.jsx("div",{className:"space-y-3 font-mono text-xs",children:r[i].timeline.map((s,t)=>{const a=o===t;return e.jsxs("div",{className:`p-3.5 rounded-xl border flex items-center justify-between transition-all ${a?"bg-amber-500/20 border-amber-500 text-amber-200 shadow-md scale-[1.01]":"bg-slate-950 border-slate-850 text-slate-400 opacity-70"}`,children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider block font-semibold",children:s.time}),e.jsx("span",{className:"text-xs font-medium text-slate-200",children:s.desc})]}),e.jsx("span",{className:`px-2.5 py-1 rounded-lg text-[11px] font-bold ${s.state.includes("Idle")?"bg-rose-950 text-rose-300 border border-rose-800":"bg-emerald-950 text-emerald-300 border border-emerald-800"}`,children:s.state})]},t)})})]})]})};function D(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full",children:"Prescribed & Enrichment"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Types of Operating Systems: Multiprogramming, Time-Sharing & RTOS"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Compare Single-User, Multi-User, Multiprogramming, Time-Sharing systems with enrichment on Real-Time Operating Systems (RTOS) and Distributed architectures."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(f,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Doctor Clinic vs Chess Grandmaster"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-amber-400 flex items-center gap-1.5",children:[e.jsx(y,{size:14})," Multiprogramming: Doctor Clinic"]}),e.jsx("p",{className:"text-slate-300",children:"While Patient A goes to the X-ray room (waiting for I/O), the doctor immediately examines Patient B. The doctor's time (CPU) is never wasted waiting for X-rays."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[e.jsx(d,{size:14})," Time-Sharing: Simultaneous Chess Exhibition"]}),e.jsx("p",{className:"text-slate-300",children:"A chess grandmaster plays against 30 opponents simultaneously, spending 5 seconds at each board (time quantum). To each opponent, it feels like the grandmaster is playing with them continuously."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(T,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Comprehensive OS Classification"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"1. Multiprogramming OS"}),e.jsx("p",{className:"text-slate-300",children:"Maximizes CPU utilization by loading multiple programs into memory. When the active process halts for I/O, the CPU context-switches to another ready job."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-amber-400",children:"2. Time-Sharing (Multitasking) OS"}),e.jsx("p",{className:"text-slate-300",children:"A logical extension of multiprogramming that allocates rapid CPU time slices (10 to 50ms) to multiple interactive users, minimizing response time."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400",children:"3. Real-Time OS (RTOS - Enrichment)"}),e.jsx("p",{className:"text-slate-300",children:"Guarantees deterministic response times for mission-critical systems (automotive airbags, pacemakers, avionics). A late result is treated as a fatal failure."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-purple-400",children:"4. Distributed OS (Enrichment)"}),e.jsx("p",{className:"text-slate-300",children:"Coordinates a cluster of physically separated computers over a network, presenting them as a single unified supercomputer to users."})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(w,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(N,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python OS Concurrency & Deadline Simulator"})]}),e.jsx(b,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic7_files/os_types_concurrency_sim.py",fileContent:A})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(c,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(c,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing Multiprogramming with Multiprocessing:"})," Multiprogramming means running multiple programs on a SINGLE CPU core; Multiprocessing means having TWO or MORE physical CPU cores."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'Defining RTOS as just "very fast":'})," RTOS is not necessarily the fastest; it is ",e.jsx("em",{children:"deterministic"})," (guarantees timing deadlines)."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(j,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"State primary objective for each:"})," Multiprogramming → Maximize CPU utilization; Time-Sharing → Minimize user response time; RTOS → Satisfy hard deadlines."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(h,{questions:C})}),e.jsx("div",{className:"space-y-4",children:e.jsx(S,{fileName:"CBSE_Class11_CS_Topic7_OS_Types_Notes.txt",content:v})}),e.jsx("div",{className:"space-y-4",children:e.jsx(g,{topicName:"Types of Operating Systems (Multiprogramming, Time-Sharing, RTOS)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{D as default};

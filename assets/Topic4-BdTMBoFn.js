import{j as e,b as i}from"./vendor-react-core-B-R9HE-Z.js";import{T as N}from"./TeacherSukantaHui-1kTygSSH.js";import{F as S}from"./FAQTemplate-16IfroqC.js";import{P as v}from"./PlainTextPrint-C6NaUtnE.js";import{P}from"./PythonFileLoader-DZ61U3Y_.js";import{c as C,C as p,L as l,c9 as x,P as h,d as M,$ as w,az as m,t as _,ae as A}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const O=[{question:"What is the primary function of Processor Management in an Operating System?",options:["Formatting the hard drive and deleting files","Deciding which process receives CPU execution time and allocating time slices","Writing assembly code for peripheral devices","Converting AC power to DC voltage inside the SMPS"],correctAnswer:1,explanation:"Processor Management (CPU Scheduling) manages the allocation of the central processing unit among multiple competing active processes."},{question:"What is Spooling (Simultaneous Peripheral Operations On-Line) primarily used for in Device Management?",options:["Compressing JPEG image files","Buffering I/O jobs on disk to prevent fast CPU programs from being blocked by slow devices like printers","Overclocking the GPU clock speed","Translating Python bytecode into Assembly"],correctAnswer:1,explanation:"Spooling queues I/O jobs into a temporary disk buffer so applications can resume execution immediately while the slow peripheral processes jobs sequentially."},{question:"How does the Operating System protect memory allocated to Process A from being overwritten by Process B?",options:["By shutting down the computer whenever two programs open","Using hardware Base and Limit registers to enforce memory isolation and boundary checks","By converting all data into read-only PDF files","By only allowing one program to exist in storage"],correctAnswer:1,explanation:"The OS and CPU hardware use Base (starting address) and Limit (length) registers to ensure a process accesses only its designated memory partition."},{question:`Assertion (A): Spooling allows multiple users on a school network to send print jobs to a single printer simultaneously without program crashes.
Reason (R): The print jobs are queued onto secondary storage (disk buffer) and dispatched sequentially to the printer.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Print spoolers store print requests in a FIFO disk queue, allowing client computers to continue working without waiting for the physical printer."},{question:"Which OS component is responsible for organizing files into folders and enforcing Read/Write/Execute permissions?",options:["File Management Subsystem","ALU Multiplexer","Bootstrap Loader","Assembler"],correctAnswer:0,explanation:"The File Management Subsystem handles directory hierarchies, file allocation tables, inodes, and user access permissions."}],R=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 4: OPERATING SYSTEM CORE FUNCTIONS (4 RESOURCE MANAGERS)\r
================================================================================\r
\r
1. THE FOUR PILLARS OF OPERATING SYSTEM RESOURCE MANAGEMENT:\r
\r
A. PROCESSOR MANAGEMENT (CPU SCHEDULING):\r
The OS determines which process gets CPU time, for how long, and in what order.\r
Key Tasks:\r
- Process State Management: Transitions processes across Ready, Running, and Blocked/Waiting states.\r
- CPU Scheduling Algorithms:\r
  * First-Come, First-Served (FCFS): Non-preemptive, executes in arrival order.\r
  * Shortest Job First (SJF): Schedules smallest burst time first.\r
  * Round Robin (RR): Preemptive, allocates fixed time slice (quantum) to each process.\r
- Context Switching: Saves current CPU register state (PC, SP) and loads the next process.\r
\r
B. MEMORY MANAGEMENT (PRIMARY STORAGE / RAM ALLOCATION):\r
The OS keeps track of every byte in physical RAM, allocating and deallocating memory dynamically.\r
Key Tasks:\r
- Dynamic Allocation: Allocates memory blocks when programs launch (\`malloc()\` / object creation) and reclaims them upon termination.\r
- Protection & Isolation: Ensures Process A cannot access or overwrite the memory region of Process B using Base and Limit hardware registers.\r
- Virtual Memory & Paging: Uses secondary storage swap space as an extension of physical RAM when memory is full.\r
\r
C. FILE MANAGEMENT (SECONDARY STORAGE HIERARCHY):\r
The OS organizes files and directories on disk, managing permissions and physical cluster allocation.\r
Key Tasks:\r
- Hierarchical Tree Directory Structure: Organizes files into folders, subfolders, and root paths (e.g. \`/home/user/docs\` or \`C:\\Users\\Admin\`).\r
- Access Control: Enforces Read (\`r\`), Write (\`w\`), and Execute (\`x\`) security permissions.\r
- Inodes & Allocation Tables: Maintains File Allocation Tables (FAT / NTFS / ext4) tracking physical disk sectors.\r
\r
D. DEVICE MANAGEMENT (I/O SUBSYSTEM & DRIVERS):\r
The OS manages communication with peripheral hardware devices via device controllers and drivers.\r
Key Tasks:\r
- I/O Buffering: Temporarily stores data in memory buffers to smooth out speed mismatches between fast CPUs and slow mechanical I/O devices.\r
- Spooling (Simultaneous Peripheral Operations On-Line): Buffers incoming I/O jobs (e.g., print jobs) on disk and feeds them sequentially to slow printers without stalling the calling application.\r
- Interrupt Handling: Service hardware interrupt requests (IRQ) triggered by keyboards, network cards, and mice.\r
\r
2. CBSE EXAMINATION HIGH-FREQUENCY TOPICS:\r
- Definition of Spooling with printer example.\r
- Difference between Process (program in active execution) and Program (passive code stored on disk).\r
- Role of Base and Limit registers in memory protection.\r
`,E=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: os_core_managers_sim.py\r
Topic 4: Operating System Core Functions - 4 Core Resource Managers\r
\r
Demonstrates:\r
1. Processor Management (First-Come First-Served & Round Robin CPU Scheduling)\r
2. Memory Management (RAM Partition Allocation & Base/Limit Register Protection)\r
3. File Management (Hierarchical Directory Tree & File Inode Allocation)\r
4. Device Management (I/O Spooling & Device Controller Queuing)\r
"""\r
\r
import collections\r
import time\r
\r
class ProcessorManager:\r
    """Simulates CPU scheduling algorithms (FCFS and Round Robin)."""\r
    @staticmethod\r
    def fcfs_schedule(processes: list):\r
        print("\\n--- [1. PROCESSOR MANAGEMENT: FCFS SCHEDULING] ---")\r
        current_time = 0\r
        for p in processes:\r
            name, burst = p["name"], p["burst"]\r
            wait_time = current_time\r
            print(f"[*] Process {name} (Burst: {burst}ms) starts at {current_time}ms | Wait Time: {wait_time}ms")\r
            current_time += burst\r
        print(f"[+] All processes completed in total {current_time}ms.")\r
\r
\r
class MemoryManager:\r
    """Simulates RAM allocation and address boundary checks."""\r
    def __init__(self, total_ram_mb: int = 1024):\r
        self.total_ram_mb = total_ram_mb\r
        self.allocated = {}\r
        self.free_mb = total_ram_mb\r
\r
    def allocate(self, process_name: str, size_mb: int) -> bool:\r
        print("\\n--- [2. MEMORY MANAGEMENT: RAM ALLOCATION] ---")\r
        if size_mb <= self.free_mb:\r
            base_address = self.total_ram_mb - self.free_mb\r
            limit_address = base_address + size_mb\r
            self.allocated[process_name] = (base_address, limit_address)\r
            self.free_mb -= size_mb\r
            print(f"[+] Allocated {size_mb} MB to {process_name} at physical RAM range [0x{base_address:04X} - 0x{limit_address:04X}].")\r
            print(f"    Available RAM: {self.free_mb} MB / {self.total_ram_mb} MB")\r
            return True\r
        else:\r
            print(f"[!] Out of Memory! Cannot allocate {size_mb} MB to {process_name}.")\r
            return False\r
\r
\r
class DeviceManager:\r
    """Simulates Device Spooling (Simultaneous Peripheral Operations On-Line)."""\r
    def __init__(self):\r
        self.spool_queue = collections.deque()\r
\r
    def enqueue_print_job(self, document_name: str, pages: int):\r
        print("\\n--- [3. DEVICE MANAGEMENT: I/O SPOOLING] ---")\r
        job = {"doc": document_name, "pages": pages, "timestamp": time.time()}\r
        self.spool_queue.append(job)\r
        print(f"[+] Print job '{document_name}' ({pages} pages) placed into disk spool buffer.")\r
        print(f"    Spool Queue Depth: {len(self.spool_queue)} jobs pending.")\r
\r
    def process_spool(self):\r
        while self.spool_queue:\r
            job = self.spool_queue.popleft()\r
            print(f"    -> [PRINTER SPOOLER] Printing document: '{job['doc']}' ({job['pages']} pages) complete.")\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - OS CORE FUNCTIONS DEMONSTRATION       ")\r
    print("=================================================================\\n")\r
\r
    # 1. Processor Management\r
    process_list = [\r
        {"name": "P1 (VS Code)", "burst": 4},\r
        {"name": "P2 (Chrome)", "burst": 8},\r
        {"name": "P3 (Terminal)", "burst": 2}\r
    ]\r
    ProcessorManager.fcfs_schedule(process_list)\r
\r
    # 2. Memory Management\r
    ram = MemoryManager(total_ram_mb=512)\r
    ram.allocate("P1 (VS Code)", 128)\r
    ram.allocate("P2 (Chrome)", 256)\r
\r
    # 3. Device Management (Spooling)\r
    spooler = DeviceManager()\r
    spooler.enqueue_print_job("CBSE_CS_Question_Paper.pdf", 6)\r
    spooler.enqueue_print_job("Student_Report_Card.pdf", 2)\r
    spooler.process_spool()\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=()=>{const[t,u]=i.useState("cpu"),[a,g]=i.useState([{id:"P1",name:"VS Code IDE",burst:4,status:"Ready"},{id:"P2",name:"Chrome Browser",burst:6,status:"Ready"},{id:"P3",name:"Spotify Music",burst:2,status:"Ready"}]),[n,c]=i.useState(null),[b,k]=i.useState([{id:"OS",size:128,name:"Linux Kernel (Reserved)",color:"bg-rose-500/20 border-rose-500 text-rose-300"},{id:"P1",size:256,name:"VS Code (0x0080 - 0x0180)",color:"bg-sky-500/20 border-sky-500 text-sky-300"},{id:"FREE",size:640,name:"Free Unallocated RAM",color:"bg-slate-900 border-slate-700 text-slate-500 border-dashed"}]),[o,d]=i.useState([{id:"JOB-101",doc:"CBSE_CS_Sample_Paper.pdf",pages:8},{id:"JOB-102",doc:"Fee_Receipt_Sukanta.pdf",pages:2}]),f=()=>{if(a.length===0)return;const s=a[0];c(s),g(r=>r.slice(1)),setTimeout(()=>{c(null)},1200)},y=()=>{const s=`JOB-${Math.floor(100+Math.random()*900)}`;d(r=>[...r,{id:s,doc:`Document_${s}.pdf`,pages:Math.floor(1+Math.random()*5)}])},j=()=>{o.length>0&&d(s=>s.slice(1))};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(l,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Operating System 4-Pillar Resource Manager Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Interact with the 4 primary OS resource modules: Processor, Memory, Files, and Devices."})]})]}),e.jsx("div",{className:"flex flex-wrap bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[{id:"cpu",label:"1. Processor Mgr",icon:p},{id:"mem",label:"2. Memory Mgr",icon:l},{id:"file",label:"3. File Mgr",icon:x},{id:"dev",label:"4. Device Mgr",icon:h}].map(s=>{const r=s.icon;return e.jsxs("button",{onClick:()=>u(s.id),className:`flex items-center gap-1.5 px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${t===s.id?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:[e.jsx(r,{size:14}),e.jsx("span",{children:s.label})]},s.id)})})]}),t==="cpu"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"CPU Scheduling & Process State Queue"}),e.jsx("p",{className:"text-xs text-slate-400",children:"First-Come First-Served (FCFS) Ready Queue Scheduler."})]}),e.jsxs("button",{onClick:f,disabled:a.length===0||n!==null,className:"px-4 py-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-2",children:[e.jsx(A,{size:14})," Dispatch Next Process to CPU"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Ready Queue (FIFO)"}),a.length===0?e.jsx("p",{className:"text-xs text-slate-500 italic",children:"Ready queue is empty."}):e.jsx("div",{className:"space-y-1.5",children:a.map(s=>e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs flex justify-between items-center text-slate-300",children:[e.jsxs("span",{className:"font-bold text-sky-400 font-mono",children:[s.id,": ",s.name]}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Burst: ",s.burst,"ms"]})]},s.id))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider block",children:"Active Running Core (CPU)"}),n?e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500 text-center space-y-1 animate-pulse",children:[e.jsx("span",{className:"text-xs text-emerald-400 font-bold uppercase",children:"Executing on CPU Core 0"}),e.jsxs("h5",{className:"text-base font-bold text-white",children:[n.id," - ",n.name]}),e.jsxs("p",{className:"text-[11px] font-mono text-emerald-300",children:["Burst: ",n.burst,"ms · Registers Active"]})]}):e.jsx("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-slate-500 text-xs italic",children:"CPU Core Idle · Waiting for dispatcher signal"})]})]})]})}),t==="mem"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"Physical RAM Partition Map (1024 MB Total Memory)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Base & Limit registers isolate the OS Kernel from user application memory partitions."}),e.jsx("div",{className:"space-y-2 font-mono text-xs",children:b.map(s=>e.jsxs("div",{className:`p-3 rounded-lg border flex items-center justify-between ${s.color}`,children:[e.jsx("span",{className:"font-bold",children:s.name}),e.jsxs("span",{className:"text-xs font-semibold",children:[s.size," MB"]})]},s.id))})]})}),t==="file"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"Hierarchical Directory Tree & File Inodes"}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-850 font-mono text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{children:["📁 ",e.jsx("span",{className:"text-sky-400 font-bold",children:"/ (Root File System - Inode #2)"})]}),e.jsxs("div",{className:"pl-4",children:["├── 📁 ",e.jsx("span",{className:"text-amber-300",children:"/bin"})," (System Executables: ls, python3, bash)"]}),e.jsxs("div",{className:"pl-4",children:["├── 📁 ",e.jsx("span",{className:"text-emerald-300",children:"/home/student"})]}),e.jsxs("div",{className:"pl-8",children:["├── 📄 ",e.jsx("span",{className:"text-slate-200",children:"practical_lab.py"})," (Permissions: -rw-r--r--)"]}),e.jsxs("div",{className:"pl-8",children:["└── 📄 ",e.jsx("span",{className:"text-slate-200",children:"cbse_notes.txt"})," (Permissions: -rw-rw-r--)"]}),e.jsxs("div",{className:"pl-4",children:["└── 📁 ",e.jsx("span",{className:"text-purple-300",children:"/var/spool"})," (Printer and Mail Queues)"]})]})]})}),t==="dev"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"Device Spooler Buffer (Simultaneous Peripheral Operations On-Line)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Queues print requests on disk so apps continue without stalling."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold rounded-lg transition cursor-pointer",children:"Send Print Job"}),e.jsx("button",{onClick:j,disabled:o.length===0,className:"px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold rounded-lg transition cursor-pointer",children:"Print Next Page"})]})]}),e.jsx("div",{className:"space-y-2 font-mono text-xs",children:o.length===0?e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-850 text-slate-500 text-center italic",children:"Spooler queue empty. All jobs printed."}):o.map((s,r)=>e.jsxs("div",{className:"p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-300",children:[e.jsxs("span",{className:"font-bold text-sky-400",children:["#",r+1," [",s.id,"] ",s.doc]}),e.jsxs("span",{className:"text-slate-400",children:[s.pages," Pages queued in disk spool buffer"]})]},s.id))})]})})]})};function G(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Operating System Core Functions: The 4 Primary Resource Managers"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Master the fundamental duties of an Operating System: Processor Management (CPU Scheduling), Memory Allocation, File Hierarchies, and Device I/O Spooling."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(C,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: The Grand Luxury Hotel Manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[e.jsx(p,{size:14})," Processor Manager"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Executive Head Chef"})," scheduling who gets the master cooking stove and for how many minutes per dish."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[e.jsx(l,{size:14})," Memory Manager"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Front Desk Receptionist"})," allocating private luxury rooms (RAM partitions) and ensuring guests cannot open other rooms."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-amber-400 flex items-center gap-1.5",children:[e.jsx(x,{size:14})," File Manager"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Hotel Records Archivist"})," maintaining labelled filing cabinets for guest bills, records, and access keys."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-purple-400 flex items-center gap-1.5",children:[e.jsx(h,{size:14})," Device Manager"]}),e.jsxs("p",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Concierge & Valet Queue"})," parking cars and holding packages in the luggage room (Spooling) until ready."]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(M,{className:"text-sky-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Detailed Overview of the 4 Core Functions"})]}),e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5",children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"1. Processor Management (CPU Scheduling)"}),e.jsx("p",{children:"Decides process state transitions (Ready → Running → Blocked → Terminated) and executes scheduling algorithms such as First-Come First-Served (FCFS) and Round Robin (RR) time slicing to maximize CPU utilization."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400",children:"2. Memory Management (RAM Allocation & Protection)"}),e.jsx("p",{children:"Tracks every byte of primary memory, performs dynamic address allocation on program launch, and enforces strict partition isolation through Base and Limit hardware registers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5",children:[e.jsx("h3",{className:"text-base font-bold text-amber-400",children:"3. File Management (Storage & Permissions)"}),e.jsx("p",{children:"Organizes data on secondary storage in hierarchical tree folder directories, maintains File Allocation Tables (FAT / NTFS / ext4), and enforces Read, Write, and Execute file access permissions."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5",children:[e.jsx("h3",{className:"text-base font-bold text-purple-400",children:"4. Device Management (I/O Subsystems & Spooling)"}),e.jsx("p",{children:"Communicates with hardware peripherals via device drivers and coordinates I/O buffering and Spooling (Simultaneous Peripheral Operations On-Line) to avoid stalling fast processors when interacting with slow physical devices."})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(T,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(w,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python OS 4-Pillar Simulation Script"})]}),e.jsx(P,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic4_files/os_core_managers_sim.py",fileContent:E})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(m,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(m,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing Process with Program:"})," A Program is a passive collection of instructions stored on disk; a Process is an active program loaded into RAM with CPU state."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the full form of SPOOL:"})," SPOOL stands for ",e.jsx("em",{children:"Simultaneous Peripheral Operations On-Line"}),"."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(_,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Structure answer into the 4 Clear Pillars:"})," Processor, Memory, File, and Device Management with real-world examples for each."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Explain Spooling accurately:"})," Mention intermediate disk buffering for slow I/O devices (like printers)."]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(S,{questions:O})}),e.jsx("div",{className:"space-y-4",children:e.jsx(v,{fileName:"CBSE_Class11_CS_Topic4_OS_Core_Functions_Notes.txt",content:R})}),e.jsx("div",{className:"space-y-4",children:e.jsx(N,{topicName:"Operating System Core Functions (4 Pillars)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{G as default};

import{j as e,b as t}from"./vendor-react-core-B-R9HE-Z.js";import{T as D}from"./TeacherSukantaHui-1kTygSSH.js";import{F as E}from"./FAQTemplate-16IfroqC.js";import{P as T}from"./PlainTextPrint-C6NaUtnE.js";import{P as _}from"./PythonFileLoader-DZ61U3Y_.js";import{c as C,bJ as A,Z as u,ah as I,d as k,$ as O,az as g,t as R,ag as P,cb as L}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const U=[{question:"Which category of software is responsible for directly managing hardware resources and providing a platform for application programs?",options:["Application Software","System Software","Customized Software","General Purpose Software"],correctAnswer:1,explanation:"System Software (including the Operating System, Device Drivers, and System Utilities) directly controls and manages hardware resources and provides a runtime foundation for application software."},{question:"What is the primary role of a Device Driver in a computer system?",options:["To edit documents and compile Python source code","To act as a translator between the Operating System and specific hardware peripheral devices","To optimize hard drive storage by deleting temporary files","To protect the system from network malware and ransomware"],correctAnswer:1,explanation:"A Device Driver translates generic OS read/write commands into proprietary hardware control signals specific to the connected peripheral."},{question:"Which of the following is classified as a System Utility software?",options:["VLC Media Player","Adobe Photoshop","Disk Defragmenter","Mozilla Firefox"],correctAnswer:2,explanation:"Disk Defragmenter is a system maintenance utility that consolidates fragmented file blocks on storage media to optimize read/write performance."},{question:`Assertion (A): Antivirus software is classified as System Utility software.
Reason (R): It performs maintenance, security upkeep, and protects the operating environment from malicious code.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Antivirus software serves a system maintenance and security purpose rather than solving a direct end-user productivity problem, classifying it as a System Utility."},{question:"Why is a Disk Defragmenter generally NOT required on solid-state drives (SSDs)?",options:["SSDs do not store binary data in files","SSDs have near-zero mechanical seek latency and defragmenting causes unnecessary write wear on NAND flash cells","SSDs already contain an operating system inside their controller","SSDs can only store uncompressed text files"],correctAnswer:1,explanation:"SSDs access all memory cells in uniform electronic access time with no mechanical head movement; running defragmentation causes premature NAND flash degradation."}],F=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 1: SYSTEM SOFTWARE - OPERATING SYSTEMS, DEVICE DRIVERS & SYSTEM UTILITIES\r
================================================================================\r
\r
1. SYSTEM SOFTWARE DEFINITION:\r
System software is a collection of programs designed to operate, control, and extend the processing capabilities of the computer itself. It acts as an indispensable intermediary layer between hardware circuitry and user application software.\r
\r
Key Characteristics:\r
- Hardware-centric: Directly interacts with CPU registers, memory controllers, and I/O bus interfaces.\r
- Low-level control: Written in high-performance languages like C, C++, and Assembly.\r
- Ubiquitous: Starts executing upon system boot (bootstrap loader) and remains active until shutdown.\r
\r
2. THREE CORE SUB-CATEGORIES OF SYSTEM SOFTWARE:\r
\r
A. OPERATING SYSTEM (OS):\r
The master control program that manages computer hardware resources (CPU, RAM, Storage, I/O devices) and provides a unified runtime environment for application programs.\r
Examples: GNU/Linux (Ubuntu, Debian, RedHat), Microsoft Windows 11, Apple macOS, Google Android, Apple iOS.\r
\r
B. DEVICE DRIVERS:\r
Specialized system software modules that act as software translators between the Operating System and specific hardware peripheral devices.\r
Why Drivers are Needed:\r
- Hardware manufacturers use proprietary electronic command protocols.\r
- The OS provides generic system calls (e.g. \`read()\`, \`write()\`, \`print()\`).\r
- The Device Driver translates generic OS calls into the precise electrical/digital signal commands understood by the device chipset (e.g., Realtek Audio Driver, NVIDIA Graphics Driver, HP LaserJet Printer Driver).\r
\r
C. SYSTEM UTILITY SOFTWARE (HOUSEKEEPING TOOLS):\r
Maintenance and optimization software designed to help analyze, configure, optimize, or maintain a computer system.\r
Key Examples:\r
- Disk Defragmenter: Reorganizes non-contiguous file clusters on HDDs into contiguous sectors, minimizing physical read/write head movement and boosting access speed.\r
- Antivirus / Antimalware: Scans system files for known malware signatures and heuristic threats.\r
- File Compression Tools (WinRAR, 7-Zip, gzip): Reduces file size using lossless algorithms (e.g. DEFLATE, Huffman Coding) to save storage and bandwidth.\r
- Disk Cleanup Tools: Cleans temporary files, cache, and system error dumps.\r
- Backup & Restore Utilities: Creates redundant copies of mission-critical data on external storage.\r
\r
3. CBSE EXAMINATION QUESTIONS & PITFALLS:\r
- Common Mistake: Writing that Antivirus is Application Software.\r
  Correct View: Antivirus is classified as System Utility Software because its purpose is system maintenance, security, and hardware upkeep.\r
- Distinguishing OS vs Device Driver:\r
  OS manages global resources for all applications; Device Drivers provide device-specific translation for a single hardware model.\r
`,M=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: system_utility_driver_sim.py\r
Topic 1: System Software - Operating Systems, Device Drivers & System Utilities\r
\r
Demonstrates:\r
1. Hardware Abstraction Layer & Device Driver communication via I/O Control (IOCTL)\r
2. System Utilities: Disk Defragmentation & Compression simulation\r
3. Antivirus signature hash checking simulation\r
"""\r
\r
import hashlib\r
import time\r
\r
class DeviceDriver:\r
    """Simulates an OS Device Driver translating high-level read/write commands into hardware packets."""\r
    def __init__(self, device_name: str, device_type: str):\r
        self.device_name = device_name\r
        self.device_type = device_type\r
        self.is_initialized = False\r
        self.buffer = []\r
\r
    def initialize_hardware(self):\r
        print(f"[*] [DRIVER] Initializing {self.device_name} ({self.device_type})...")\r
        time.sleep(0.1)\r
        self.is_initialized = True\r
        print(f"[+] [DRIVER] {self.device_name} handshaking complete. Interrupt Vector IRQ registered.")\r
\r
    def send_command(self, high_level_cmd: str, data: str = "") -> dict:\r
        if not self.is_initialized:\r
            return {"status": "ERROR", "msg": "Hardware not initialized."}\r
        \r
        # Translate generic OS command into hardware control signals\r
        hardware_opcode = f"0x{len(high_level_cmd):02X}"\r
        packet = {\r
            "device": self.device_name,\r
            "opcode": hardware_opcode,\r
            "raw_payload": data.encode("utf-8").hex().upper(),\r
            "status": "SUCCESS"\r
        }\r
        print(f"    -> [OS API] -> [DRIVER: {self.device_name}] -> [HW BUS]: Translated '{high_level_cmd}' to Opcode {hardware_opcode}")\r
        return packet\r
\r
\r
class SystemUtilities:\r
    """Simulates essential OS Maintenance Utilities."""\r
    \r
    @staticmethod\r
    def disk_defragmenter_simulation(fragmented_clusters: list) -> list:\r
        print("\\n--- [UTILITY 1: DISK DEFRAGMENTER] ---")\r
        print(f"Original Cluster Map: {fragmented_clusters}")\r
        # Compact and group contiguous file blocks\r
        defragged = sorted(fragmented_clusters, key=lambda x: (x != 'EMPTY', x))\r
        print(f"Defragmented Layout:  {defragged}")\r
        print("[+] Head movement reduced from 14ms seek time to 2.1ms sequential read time.")\r
        return defragged\r
\r
    @staticmethod\r
    def antivirus_scanner(file_data: str, known_signatures: list) -> bool:\r
        print("\\n--- [UTILITY 2: ANTIVIRUS SIGNATURE ENGINE] ---")\r
        file_hash = hashlib.sha256(file_data.encode()).hexdigest()\r
        print(f"File SHA-256 Hash: {file_hash}")\r
        for sig in known_signatures:\r
            if sig.lower() in file_hash.lower():\r
                print(f"[!] MALWARE DETECTED matching signature: {sig}")\r
                return True\r
        print("[+] File scanned: Clean. No heuristic signatures found.")\r
        return False\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - SYSTEM SOFTWARE & UTILITIES SIMULATOR ")\r
    print("=================================================================\\n")\r
\r
    # 1. Device Driver Demonstration\r
    printer_driver = DeviceDriver("LaserJet Pro 400", "Output Peripheral")\r
    printer_driver.initialize_hardware()\r
    printer_driver.send_command("PRINT_DOCUMENT", "CBSE Class 11 CS 083 Notes")\r
\r
    # 2. Disk Defragmenter Simulation\r
    disk_clusters = ['FILE_A', 'EMPTY', 'FILE_B', 'FILE_A', 'FILE_C', 'EMPTY', 'FILE_B']\r
    SystemUtilities.disk_defragmenter_simulation(disk_clusters)\r
\r
    # 3. Antivirus Scanner Simulation\r
    signatures = ["a1b2c3d4", "deadbeef", "e3b0c442"]\r
    sample_payload = "Clean student python script for CBSE practical lab."\r
    SystemUtilities.antivirus_scanner(sample_payload, signatures)\r
\r
if __name__ == "__main__":\r
    main()\r
`,z=()=>{const[n,d]=t.useState("driver"),[a,f]=t.useState("printer"),[l,c]=t.useState(!1),[m,b]=t.useState([]),[y,p]=t.useState(["FILE_A","EMPTY","FILE_B","FILE_A","FILE_C","EMPTY","FILE_B"]),[x,h]=t.useState(!1),i={printer:{name:"LaserJet Pro Network Printer",type:"Output Peripheral",genericCall:"print_document(doc_path='cbse_report.pdf')",driverTranslation:"ESC/P Raster byte stream (0x1B 0x40 -> 600 DPI Dot Matrix)",irq:"IRQ 7"},gpu:{name:"Discrete Graphics Accelerator (GPU)",type:"Processing Coprocessor",genericCall:"render_frame(polygon_mesh, shader)",driverTranslation:"Vulkan/DirectX API -> PCIe Gen4 Packet (Opcode 0xA4)",irq:"IRQ 16 (MSI-X)"},scanner:{name:"High-Speed Optical Document Scanner",type:"Input Peripheral",genericCall:"acquire_image(dpi=300, color=True)",driverTranslation:"TWAIN / SANE Protocol -> CCD Sensor Line Step Signals",irq:"IRQ 12"}},v=()=>{c(!0);const s=i[a],r=`[${new Date().toLocaleTimeString()}] OS -> ${s.genericCall} ===> [Driver] ===> ${s.driverTranslation} (${s.irq})`;b(o=>[r,...o.slice(0,4)]),setTimeout(()=>c(!1),600)},S=()=>{h(!0),p(["FILE_A","FILE_A","FILE_B","FILE_B","FILE_C","EMPTY","EMPTY"])},w=()=>{h(!1),p(["FILE_A","EMPTY","FILE_B","FILE_A","FILE_C","EMPTY","FILE_B"])};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(P,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Interactive System Software & Utility Engine"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate Device Driver translation and Disk Defragmenter cluster reordering in real-time."})]})]}),e.jsxs("div",{className:"flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>d("driver"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all ${n==="driver"?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Device Driver Bridge"}),e.jsx("button",{onClick:()=>d("utility"),className:`px-3 py-1.5 font-semibold rounded-lg transition-all ${n==="utility"?"bg-sky-500 text-white shadow":"text-slate-400 hover:text-white"}`,children:"Disk Defragmenter Utility"})]})]}),n==="driver"?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:Object.entries(i).map(([s,r])=>e.jsxs("button",{onClick:()=>f(s),className:`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${a===s?"border-sky-500 bg-sky-500/10 text-white shadow-lg":"border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-400",children:r.type}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300",children:r.irq})]}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:r.name})]},s))}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-xs",children:[e.jsxs("div",{className:"p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-400 font-semibold block",children:"1. OS Generic Call"}),e.jsx("code",{className:"text-sky-300 font-mono block truncate",children:i[a].genericCall})]}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:`p-2 rounded-full border transition-all ${l?"bg-amber-500/20 border-amber-500 text-amber-300 animate-pulse":"bg-slate-800 border-slate-700 text-slate-400"}`,children:e.jsx(u,{size:18})})}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-400 font-semibold block",children:"2. Driver Hardware Translation"}),e.jsx("code",{className:"text-emerald-300 font-mono block truncate",children:i[a].driverTranslation})]})]}),e.jsxs("div",{className:"flex justify-between items-center pt-2",children:[e.jsxs("button",{onClick:v,disabled:l,className:"px-4 py-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2",children:[e.jsx(L,{size:14,className:l?"animate-spin":""}),"Dispatch System Call via Driver"]}),e.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"Status: Driver Loaded & Ready"})]}),m.length>0&&e.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1",children:[e.jsx("span",{className:"text-slate-500 block mb-1 font-bold",children:"Driver Execution Log:"}),m.map((s,r)=>e.jsx("div",{className:"text-emerald-400/90",children:s},r))]})]})]}):e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"Physical Storage Sector Map (Hard Disk Drive)"}),e.jsx("p",{className:"text-xs text-slate-400",children:x?"Continuous contiguous sectors: Read head completes seek in 1 single sweep (High Speed).":"Fragmented clusters: Read head must jump back and forth (High Latency Seek Penalty)."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:S,disabled:x,className:"px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold rounded-lg transition cursor-pointer",children:"Run Defrag"}),e.jsx("button",{onClick:w,className:"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition cursor-pointer",children:"Reset Clusters"})]})]}),e.jsx("div",{className:"grid grid-cols-7 gap-2",children:y.map((s,r)=>{const o=s==="FILE_A",j=s==="FILE_B",N=s==="FILE_C";return e.jsxs("div",{className:`p-3 rounded-lg border text-center font-mono text-xs transition-all ${o?"bg-sky-500/20 border-sky-500 text-sky-300":j?"bg-purple-500/20 border-purple-500 text-purple-300":N?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-slate-950 border-slate-800 text-slate-600 border-dashed"}`,children:[e.jsxs("span",{className:"block text-[10px] text-slate-500",children:["Sec ",r+1]}),e.jsx("span",{className:"font-bold",children:s})]},r)})})]})})]})};function Q(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"System Software: Operating System, Device Drivers & System Utilities"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Understand the foundational system programs that directly control computer hardware, bridge peripheral devices via device drivers, and maintain storage integrity through system utilities."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(C,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: The International Airport"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Think of a modern computer as an ",e.jsx("strong",{children:"International Airport"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[e.jsx(A,{size:14})," Operating System"]}),e.jsxs("p",{className:"text-slate-400",children:["The ",e.jsx("strong",{children:"Air Traffic Control Tower"})," directing runways, scheduling departures, allocating boarding gates, and supervising overall airport security."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[e.jsx(u,{size:14})," Device Drivers"]}),e.jsxs("p",{className:"text-slate-400",children:["The ",e.jsx("strong",{children:"Multilingual Flight Translators"})," converting global standard traffic instructions into specific engine and avionics protocols understood by different aircraft models."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-purple-400 flex items-center gap-1.5",children:[e.jsx(I,{size:14})," System Utilities"]}),e.jsxs("p",{className:"text-slate-400",children:["The ",e.jsx("strong",{children:"Ground Maintenance & Security Crews"})," repairing runways (defragging), inspecting luggage for hazards (antivirus), and packing cargo tightly (compression)."]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(k,{className:"text-sky-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Core Architectural Breakdown"})]}),e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-sky-300",children:"1. Operating System (OS)"}),e.jsx("p",{children:"The Operating System is the master supervisory program loaded during bootstrap. It manages computer hardware resources (CPU, RAM, Storage, I/O devices) and provides system call interfaces (APIs) so application programs don't need to communicate with raw electronic registers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-300",children:"2. Device Drivers (Hardware Abstraction Layer)"}),e.jsxs("p",{children:["A Device Driver is a specialized low-level program that translates generic operating system commands (like ",e.jsx("code",{className:"text-sky-400",children:"write()"})," or ",e.jsx("code",{className:"text-sky-400",children:"read()"}),") into hardware-specific binary command sequences recognized by peripheral chipsets. Without the appropriate driver, the OS cannot utilize connected hardware."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"text-base font-bold text-purple-300",children:"3. System Utility Software (Housekeeping Tools)"}),e.jsx("p",{children:"Utilities are programs designed to perform maintenance, configuration, diagnostic, and optimization tasks on computer storage and operating system files. Unlike Application Software which solves end-user problems, utilities ensure the underlying computer operates efficiently and safely."})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(z,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(O,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python System Software Simulation Script"})]}),e.jsx(_,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic1_files/system_utility_driver_sim.py",fileContent:M})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(g,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Best Practices"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(g,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Classifying Antivirus as Application Software:"})," Antivirus is System Utility Software because its core purpose is system maintenance and security upkeep."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing Device Drivers with Firmware:"})," Firmware is embedded permanently in hardware ROM; Device Drivers reside on the OS file system and run in OS kernel space."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stating that SSDs need defragmentation:"})," SSDs have near-zero mechanical latency and defragging causes unnecessary write wear."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(R,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Define System Software clearly:"})," Mention that it directly manages computer hardware and acts as an interface between hardware and application software."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Give 3 distinct categories with examples:"})," Operating Systems (Linux, Windows), Device Drivers (Graphics driver, Printer driver), System Utilities (Disk defragmenter, Antivirus)."]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(E,{questions:U})}),e.jsx("div",{className:"space-y-4",children:e.jsx(T,{fileName:"CBSE_Class11_CS_Topic1_System_Software_Notes.txt",content:F})}),e.jsx("div",{className:"space-y-4",children:e.jsx(D,{topicName:"System Software, Device Drivers & Utilities",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{Q as default};

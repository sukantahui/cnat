import{b as p,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as y}from"./TeacherSukantaHui-1kTygSSH.js";import{F as x}from"./FAQTemplate-16IfroqC.js";import{P as b}from"./PlainTextPrint-C6NaUtnE.js";import{D as s,br as u,a7 as f,F as m,P as g,f as M,g as C}from"./vendor-icons-Bgr6sRjK.js";const R=[{id:"q1",question:"What is the primary benefit of having downloadable laboratory scripts and notes?",answer:"Downloadable offline scripts and printable plain text revision notes allow students to practice Python architectural simulations offline and perform quick paper-based revision before school and board exams.",explanation:"Offline access supports uninterrupted study regardless of internet availability.",explanationBn:"অফলাইন স্ক্রিপ্ট ও প্রিন্টযোগ্য নোটের মাধ্যমে শিক্ষার্থীরা ইন্টারনেট ছাড়াই কম্পিউটারে প্র্যাকটিস এবং পরীক্ষার আগে দ্রুত রিভিশন দিতে পারে।",category:"Revision"},{id:"q2",question:"Summarize the Von Neumann Architecture bottleneck ('Memory Wall').",answer:"The Von Neumann bottleneck refers to the throughput throughput limit caused by the fact that data and instructions must share the same system bus between the ultra-fast CPU and slower main memory.",explanation:"Multi-level SRAM cache hierarchies (L1/L2/L3) directly alleviate this bottleneck.",explanationBn:"ভন নিউম্যান বটলনেক হলো প্রসেসরের গতি ও মেমোরি বাসের গতির মধ্যকার তারতম্যজনিত সমস্যা, যা ক্যাশ মেমোরির সাহায্যে সমাধান করা হয়।",category:"Architecture"},{id:"q3",question:"How does the memory hierarchy balance cost, capacity, and access speed?",answer:"By placing small, ultra-expensive, fast memory (Registers, L1/L2 Cache) closest to the CPU, backed by moderate-cost DRAM for main memory, and vast, inexpensive secondary storage (SSDs, HDDs) at the bottom.",explanation:"This pyramid hierarchy delivers near-SRAM average speeds at an affordable total system cost.",explanationBn:"গতিশীল ও দামি মেমোরি CPU-র কাছে এবং বড় ও সাশ্রয়ী মেমোরি নিচে রেখে গতি ও খরচের নিখুঁত ভারসাম্য তৈরি করা হয়।",category:"Hierarchy"},{id:"q4",question:"Which register directly drives the Address Bus during the Fetch phase?",answer:"The Memory Address Register (MAR) holds the physical address and directly drives the unidirectional Address Bus lines.",explanation:"PC supplies the address to MAR; MAR drives the external bus pins.",explanationBn:"Memory Address Register (MAR) সরাসরি অ্যাড্রেস বাসের সাথে যুক্ত থাকে।",category:"Registers"},{id:"q5",question:"What is the exact relationship between Clock Frequency (GHz) and Clock Period (ns)?",answer:"Clock Period T (seconds) = 1 / Frequency (Hertz). A 4.0 GHz CPU has a period T = 1 / (4.0 × 10^9) = 0.25 nanoseconds (250 picoseconds).",explanation:"Higher clock frequency yields shorter individual clock periods.",explanationBn:"T = ১ / f। ৪.০ গিগাহার্টজ প্রসেসরের প্রতিটি ক্লক সাইকেল ০.২৫ ন্যানোসেকেন্ড সময় নেয়।",category:"Calculations"},{id:"q6",question:"Why can't non-impact printers make carbon copies?",answer:"Because non-impact printers (laser/inkjet) do not apply mechanical striking pressure to the surface of the paper to transfer ink through carbon layers.",explanation:"Only impact printers (dot matrix) exert the physical force required for carbon duplication.",explanationBn:"কারণ নন-ইমপ্যাক্ট প্রিন্টার কাগজে কোনো যান্ত্রিক আঘাত করে না; তাই কার্বন পেপারে চাপ পড়ে না।",category:"Printers"},{id:"q7",question:"Convert 2^36 bytes into Gigabytes (GB).",answer:"2^36 Bytes = 2^6 × 2^30 Bytes = 64 Gigabytes (GB).",explanation:"Since 2^30 Bytes = 1 GB, 2^36 = 64 GB.",explanationBn:"২^৩৬ বাইট = ২^৬ × ২^৩০ = ৬৪ GB।",category:"Calculations"},{id:"q8",question:"What is the difference between Spatial and Temporal locality?",answer:"Temporal locality refers to accessing the same memory address repeatedly over a short time window. Spatial locality refers to accessing nearby adjacent addresses in sequence.",explanation:"Temporal = loops; Spatial = arrays.",explanationBn:"Temporal: একই ডেটা বারবার ব্যবহার। Spatial: পাশাপাশি থাকা মেমোরি ডেটার ধারাবাহিক ব্যবহার।",category:"Locality"},{id:"q9",question:"Why is ROM considered primary memory despite being non-volatile?",answer:"Because ROM is wired directly to the system address and data buses, allowing the CPU to fetch bootstrap instructions byte-by-byte without an intermediate drive controller.",explanation:"Direct bus addressability defines primary memory.",explanationBn:"কারণ ROM সরাসরি প্রসেসরের সিস্টেম বাসের সাথে যুক্ত থাকে এবং বাইট অনুযায়ী অ্যাড্রেস করা যায়।",category:"ROM"},{id:"q10",question:"What is an OMR device's typical error rate compared to human manual checking?",answer:"OMR error rate is less than 0.01% (virtually 100% accurate) compared to 2-5% for manual human exam paper evaluation.",explanation:"Optical sensor calibration guarantees precise, unbiased scoring.",explanationBn:"OMR-এর ভুলের মাত্রা ০.০১%-এরও কম, যা মানুষের ম্যানুয়াল মূল্যায়নের চেয়ে বহুগুণ নির্ভুল।",category:"Input Devices"},{id:"q11",question:"How many Kilobytes are in 1 Petabyte (PB)?",answer:"1 PB = 1024 TB = 1024 × 1024 GB = 1024^3 MB = 1024^4 KB = 2^40 KB = 1,099,511,627,776 Kilobytes.",explanation:"Multiply by 1024 for each step: PB -> TB -> GB -> MB -> KB.",explanationBn:"১ PB = ১০২৪^৪ KB = ১,০৯৯,৫১১,৬২৭,৭৭৬ KB (২^৪০ KB)।",category:"Calculations"},{id:"q12",question:"What role does the Accumulator play in multi-step arithmetic calculations?",answer:"The Accumulator holds the running total and intermediate outputs of ALU operations so they do not need to be written back to slow main memory after every individual step.",explanation:"Dramatically reduces bus traffic during heavy computational tasks.",explanationBn:"Accumulator গাণিতিক হিসাবের অন্তর্বর্তীকালীন ফলাফল ধারণ করে বাস ট্রাফিক কমায়।",category:"Registers"},{id:"q13",question:"What is the function of the POST (Power-On Self-Test) routine in ROM BIOS?",answer:"POST checks all critical hardware (keyboard, RAM modules, graphics card, storage controllers) upon power-up to confirm the system is safe to boot.",explanation:"Emits beep codes or diagnostic errors if a hardware fault is detected.",explanationBn:"POST কম্পিউটার অন হওয়ার পর সমস্ত হার্ডওয়্যার সঠিকভাবে কাজ করছে কিনা তা পরীক্ষা করে।",category:"Boot Process"},{id:"q14",question:"Differentiate between a 1D Barcode and a 2D QR Code.",answer:"1D barcodes hold ~20 characters in horizontal bars; 2D QR codes hold up to 4,000+ characters in a 2D matrix, supporting URLs, payment strings, and built-in error correction.",explanation:"QR codes offer 200x higher data density than linear barcodes.",explanationBn:"১ডি বারকোডে ২০টি অক্ষর ধরে; আর ২ডি কিউআর কোডে ৪০০০-এর বেশি অক্ষর ও ইউপিআই লিঙ্ক ধরে।",category:"Scanners"},{id:"q15",question:"Calculate the rotational latency of a 10,000 RPM enterprise SAS hard drive.",answer:"Latency = (30,000 / 10,000) ms = 3.0 milliseconds.",explanation:"Formula: Average Rotational Delay = 30000 / RPM (in ms).",explanationBn:"ঘূর্ণন বিলম্ব = ৩০,০০০ / ১০,০০০ = ৩.০ মিলি-সেকেন্ড।",category:"Calculations"},{id:"q16",question:"Why is the Data Bus bidirectional while the Address Bus is unidirectional?",answer:"CPU only sends addresses out to target devices (unidirectional), but must both read incoming data and write outgoing data (bidirectional).",explanation:"Memory never initiates addresses back into the CPU.",explanationBn:"CPU কেবল অ্যাড্রেস পাঠায় (একমুখী), কিন্তু ডেটা গ্রহণ ও প্রেরণ উভয়ই করে (দ্বিমুখী)।",category:"Bus Architecture"},{id:"q17",question:"What is the difference between PROM and EEPROM?",answer:"PROM is One-Time Programmable (OTP) by fuse burning; EEPROM can be electrically erased and rewritten thousands of times in-circuit.",explanation:"Modern BIOS uses EEPROM (Flash ROM) for software updates.",explanationBn:"PROM-এ মাত্র একবার লেখা যায়; আর EEPROM বারবার বিদ্যুৎ দিয়ে মুছে পুনরায় লেখা যায়।",category:"ROM Variations"},{id:"q18",question:"What is an 'instruction word' in computer architecture?",answer:"An instruction word is a fixed-width binary packet consisting of an Opcode (operation code) and zero or more Operands (memory addresses or registers).",explanation:"Example: `ADD R1, R2` encodes the operation and target registers into binary.",explanationBn:"ইন্সট্রাকশন ওয়ার্ড হলো অপকোড এবং অপারেন্ড সমন্বিত একটি বাইনারি নির্দেশের প্যাকেট।",category:"Instruction Architecture"},{id:"q19",question:"Why are plotters preferred over inkjet printers for engineering blueprints?",answer:"Plotters draw continuous mathematical vector lines with physical pens, preventing pixelation and jagged edges on massive multi-meter architectural plans.",explanation:"Delivers crisp vector precision at large physical scales.",explanationBn:"প্লটার পেন দিয়ে মসৃণ ভেক্টর লাইন আঁকে, ফলে বড় ড্রয়িংয়ে কোনো পিক্সেল ফেটে যায় না।",category:"Plotters"},{id:"q20",question:"What happens during a Cache Miss in L1 cache?",answer:"The request cascades to L2 cache; if L2 misses, it checks L3 cache; if L3 misses, a 64-byte block is fetched from main DRAM into all cache tiers.",explanation:"The pipeline stalls for the duration of the miss penalty.",explanationBn:"L1-এ মিস হলে L2, তারপর L3 এবং পরিশেষে র‍্যাম থেকে ডেটা এনে ক্যাশে লোড করা হয়।",category:"Cache Mechanics"},{id:"q21",question:"How many bits are in 0.75 Megabytes?",answer:`0.75 MB = 0.75 × 1024 × 1024 Bytes = 786,432 Bytes.
Total Bits = 786,432 × 8 = 6,291,456 bits.`,explanation:"Convert MB -> Bytes -> Bits.",explanationBn:"০.৭৫ × ১০২৪ × ১০২৪ × ৮ = ৬,২৯১,৪৫৬ বিট।",category:"Calculations"},{id:"q22",question:"Which bus carries the MEM_READ and MEM_WRITE control strobes?",answer:"The Control Bus carries all memory and I/O command strobes.",explanation:"Tells memory hardware whether to latch or output data.",explanationBn:"কন্ট্রোল বাস MEM_READ এবং MEM_WRITE সিগন্যাল বহন করে।",category:"Control Bus"},{id:"q23",question:"Why is MICR font E-13B designed with specific distinctive character shapes?",answer:"The distinctive thick geometric shapes ensure that magnetic read heads can reliably identify characters by their unique magnetic flux waveforms.",explanation:"Prevents misreading between similar digits like 0, 8, and 6.",explanationBn:"E-13B ফন্টের বিশেষ আকৃতি ম্যাগনেটিক রিডারকে নির্ভুলভাবে প্রতিটি অক্ষর চিনতে সাহায্য করে।",category:"MICR"},{id:"q24",question:"True or False: 'A 64-bit CPU has 64-bit wide internal registers.'",answer:"True. The word size of a 64-bit CPU means its internal registers and ALU process 64 bits (8 bytes) per clock cycle.",explanation:"Enables single-cycle processing of 64-bit integers and large pointers.",explanationBn:"সত্য। ৬৪-বিট প্রসেসরের অভ্যন্তরীণ রেজিস্টারগুলো ৬৪ বিট চওড়া হয়।",category:"True/False"},{id:"q25",question:"Summary Question: Outline the full path of data when a user types a character 'K' on a keyboard until it appears on an OLED monitor.",answer:`1. Keypress generates Scan Code for 'K'.
2. Keyboard controller pulls INTR line on Control Bus.
3. CPU executes ISR, reads ASCII 75 via Data Bus into RAM buffer.
4. CPU renders font glyph into Video RAM (VRAM) buffer.
5. GPU outputs RGB raster stream to OLED monitor pixels.`,explanation:"This full cycle shows input, control, registers, memory, bus, and output operating seamlessly.",explanationBn:"১. কিবোর্ডে চাপ ➔ ২. ইন্টারাপ্ট সিগন্যাল ➔ ৩. ডেটা বাসে ASCII কোড র‍্যামে লোড ➔ ৪. GPU ফন্ট রেন্ডার করে VRAM-এ ➔ ৫. মনিটরে 'K' দৃশ্যমান হয়।",category:"Tracing"}],A=`===============================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION (CSO) - 10 MARKS\r
MODULE 001: BASIC COMPUTER ORGANISATION, CPU ARCHITECTURE & MEMORY UNITS\r
COMPLETE MODULE REVISION HANDBOOK & FORMULA SUMMARY\r
EDUCATOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE, KOLKATA)\r
===============================================================================\r
\r
1. FUNCTIONAL UNITS OF A COMPUTER SYSTEM\r
-------------------------------------------------------------------------------\r
1. Input Unit: Transduces user commands into binary data (Keyboard, Mouse, OMR, OCR, MICR).\r
2. CPU: Executes instructions (ALU for math/logic, CU for sequencing, Registers for storage).\r
3. Primary Memory: Volatile RAM (SRAM/DRAM) & Non-Volatile ROM (PROM/EPROM/EEPROM).\r
4. Secondary Storage: Auxiliary persistent storage (HDD, SSD, Optical Discs, Flash).\r
5. Output Unit: Converts processed binary into human-readable form (Monitor, Printer, Plotter).\r
\r
\r
2. SYSTEM BUS ARCHITECTURE SUMMARY\r
-------------------------------------------------------------------------------\r
* Address Bus: STRICTLY UNIDIRECTIONAL (CPU -> Memory/IO). Width N determines max RAM: 2^N bytes.\r
* Data Bus: BIDIRECTIONAL (CPU <-> Memory/IO). Width M determines word transfer size: M/8 bytes.\r
* Control Bus: Carries timing strobes (MEMR, MEMW, IOR, IOW, INTR, RESET).\r
\r
\r
3. INSTRUCTION (MACHINE) CYCLE PHASES\r
-------------------------------------------------------------------------------\r
1. FETCH   : PC -> MAR -> RAM -> MDR -> IR; PC is incremented automatically.\r
2. DECODE  : Control Unit examines opcode in IR and generates micro-control signals.\r
3. EXECUTE : ALU computes operation or evaluates branch jumps; Flags updated.\r
4. STORE   : Result written to Accumulator or RAM via MDR.\r
\r
\r
4. MEMORY HIERARCHY SUMMARY\r
-------------------------------------------------------------------------------\r
Level             | Type     | Speed / Latency | Typical Capacity\r
------------------+----------+-----------------+-----------------\r
Registers         | Silicon  | 0.25 – 0.5 ns   | Bytes / KBs\r
L1/L2/L3 Cache    | SRAM     | 0.5 – 15 ns     | 32 KB – 96 MB\r
Main Memory (RAM) | DRAM     | 10 – 60 ns      | 8 GB – 64 GB\r
Secondary (SSD)   | 3D NAND  | 10 – 50 µs      | 500 GB – 4 TB\r
Secondary (HDD)   | Magnetic | 10 – 15 ms      | 1 TB – 22 TB\r
\r
\r
5. HIGH-YIELD FORMULA CHEAT SHEET\r
-------------------------------------------------------------------------------\r
* Max Addressable Memory = 2^N Bytes (N = address bus lines)\r
* Clock Period (T) = 1 / Frequency (f)\r
* Average Rotational Latency (ms) = (30,000 / RPM)\r
* Total HDD Access Time = Seek Time + Rotational Latency + Transfer Time\r
* Cache Hit Ratio (H) = Hits / Total Requests\r
* Average Memory Access Time (AMAT) = Hit_Time + (Miss_Rate * Miss_Penalty)\r
* 1 KB = 2^10 B | 1 MB = 2^20 B | 1 GB = 2^30 B | 1 TB = 2^40 B | 1 PB = 2^50 B\r
\r
===============================================================================\r
Coder & AccoTax - 25-10/A Shibtala Road, Barrackpore, Kolkata - 700120\r
===============================================================================\r
`,i=`"""\r
=============================================================================\r
MODULE 001: MASTER LAB SCRIPT & REVISION SUITE (PYTHON 3)\r
CBSE Class XI Computer Science (Subject Code: 083)\r
Unit I: Computer Systems and Organisation (CSO)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
=============================================================================\r
Comprehensive laboratory execution script integrating:\r
1. Von Neumann Architecture & Bus Addressing Simulator\r
2. CPU Internal Register Execution Pipeline (PC, IR, MAR, MDR, ACC)\r
3. Primary Memory Taxonomy & Storage Physics Audit (SRAM vs DRAM)\r
4. Cache Memory AMAT & Locality of Reference Engine\r
5. Secondary Storage Benchmark (HDD Seek Time vs NVMe SSD)\r
6. Digital Memory Unit Conversion Calculator (Bit to Yottabyte)\r
"""\r
\r
import math\r
\r
def module_001_full_audit():\r
    print("=" * 80)\r
    print("CODER & ACCOTAX - CBSE CLASS XI CS 083: MODULE 001 MASTER AUDIT")\r
    print("=" * 80)\r
\r
    # 1. System Bus Memory Calculation\r
    print("\\n--- 1. SYSTEM BUS ADDRESSING CAPACITIES ---")\r
    for lines in [16, 20, 32, 48, 64]:\r
        total_bytes = 2 ** lines\r
        if total_bytes >= 1024**5:\r
            cap = f"{total_bytes / (1024**5):,.2f} PB"\r
        elif total_bytes >= 1024**4:\r
            cap = f"{total_bytes / (1024**4):,.2f} TB"\r
        elif total_bytes >= 1024**3:\r
            cap = f"{total_bytes / (1024**3):,.2f} GB"\r
        elif total_bytes >= 1024**2:\r
            cap = f"{total_bytes / (1024**2):,.2f} MB"\r
        else:\r
            cap = f"{total_bytes / 1024:,.2f} KB"\r
        print(f"Address Bus Width: {lines:2d} bits -> Direct Addressable Memory: {cap}")\r
\r
    # 2. Cache AMAT Calculation\r
    print("\\n--- 2. CACHE AMAT PERFORMANCE METRIC ---")\r
    hit_time = 1.0  # ns\r
    miss_penalty = 50.0  # ns\r
    for hit_rate in [80, 90, 95, 98]:\r
        miss_rate = (100 - hit_rate) / 100\r
        amat = hit_time + (miss_rate * miss_penalty)\r
        print(f"Hit Rate: {hit_rate}% | Miss Rate: {miss_rate*100:.0f}% -> AMAT = {amat:.2f} nanoseconds")\r
\r
    # 3. HDD Access Time vs NVMe SSD\r
    print("\\n--- 3. SECONDARY STORAGE ACCESS LATENCY ---")\r
    rpm = 7200\r
    seek_ms = 8.5\r
    rot_latency = (30000 / rpm)\r
    transfer_ms = 0.4\r
    total_hdd = seek_ms + rot_latency + transfer_ms\r
    nvme_latency = 0.02  # ms\r
    print(f"7200 RPM HDD Total Access Time : {total_hdd:.2f} ms")\r
    print(f"NVMe PCIe Gen4 SSD Latency    : {nvme_latency:.2f} ms (~20 microseconds)")\r
    print(f"Speed Advantage of NVMe SSD   : {total_hdd / nvme_latency:.0f}x FASTER!")\r
\r
    # 4. Memory Unit Conversions\r
    print("\\n--- 4. DIGITAL MEMORY UNIT EXPONENTS (POWERS OF 2) ---")\r
    units = [("KB", 10), ("MB", 20), ("GB", 30), ("TB", 40), ("PB", 50), ("EB", 60), ("ZB", 70), ("YB", 80)]\r
    for u, p in units:\r
        print(f"1 {u:<3} = 2^{p:2d} Bytes = {2**p:,} Bytes")\r
\r
    print("\\n" + "=" * 80)\r
    print("MODULE 001 AUDIT COMPLETED SUCCESSFULLY - READY FOR BOARD EXAMS")\r
    print("=" * 80)\r
\r
\r
if __name__ == "__main__":\r
    module_001_full_audit()\r
`;function w(){const[o,l]=p.useState(!1),[a,c]=p.useState("resources"),h=()=>{navigator.clipboard.writeText(i),l(!0),setTimeout(()=>l(!1),2e3)},d=()=>{const t=new Blob([i],{type:"text/x-python;charset=utf-8"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download="module_001_cso_master_lab.py",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)};return e.jsx("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full",children:"Downloadable Revision Hub"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Downloadable Documents & Master Laboratory Scripts"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Export offline study notes, printable formula cheat sheets, and complete Python simulation suites for hands-on computer architecture practice."})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-3",children:[{id:"resources",label:"1. Download Center",icon:s},{id:"python",label:"2. Master Python Script",icon:u},{id:"faqs",label:"3. Revision FAQs (25 Qs)",icon:f},{id:"notes",label:"4. Printable Document",icon:m}].map(t=>{const r=t.icon;return e.jsxs("button",{onClick:()=>c(t.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${a===t.id?"bg-sky-500 text-white shadow-lg shadow-sky-500/25 border-b-2 border-sky-400":"bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/40"}`,children:[e.jsx(r,{size:16}),e.jsx("span",{children:t.label})]},t.id)})}),a==="resources"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(m,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Module 001 Complete Revision Handbook"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Comprehensive 12-page textbook-aligned revision guide covering all computer organisation concepts, bus formulas, cache metrics, and memory unit tables."}),e.jsxs("button",{onClick:()=>c("notes"),className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-xl transition cursor-pointer",children:[e.jsx(g,{size:14}),"Print / Download Plain Text Note"]})]}),e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(u,{size:20})}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Master Python Simulation Suite"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Ready-to-run .py script containing bus width calculators, AMAT engines, HDD latency models, and interactive binary memory unit converters."}),e.jsxs("button",{onClick:d,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition cursor-pointer",children:[e.jsx(s,{size:14}),"Download Master .py File"]})]})]}),e.jsx(y,{note:"Before your CBSE Class XI exam, make sure you download and run the master Python script on your local machine to verify your memory unit conversions and bus width calculations! — Sukanta Hui"})]}),a==="python"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"module_001_cso_master_lab.py"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Complete Architecture Simulation & Calculation Suite"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition cursor-pointer",children:[o?e.jsx(M,{size:14,className:"text-emerald-400"}):e.jsx(C,{size:14}),o?"Copied":"Copy Python"]}),e.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-lg transition cursor-pointer",children:[e.jsx(s,{size:14}),"Download .py"]})]})]}),e.jsx("pre",{className:"bg-slate-950 p-4 rounded-xl text-slate-200 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-relaxed max-h-[500px]",children:e.jsx("code",{children:i})})]})}),a==="faqs"&&e.jsx("div",{className:"space-y-6",children:e.jsx(x,{title:"Topic 9 · Module 001 Review FAQs & Board Questions",questions:R})}),a==="notes"&&e.jsx("div",{className:"space-y-6",children:e.jsx(b,{content:A,filename:"module_001_cso_full_revision_note.txt",title:"CBSE Class XI CS 083 – Module 001 Complete Revision Handbook",hidePreview:!1,showDownload:!0})})]})})}export{w as default};

import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as d}from"./TeacherSukantaHui-1kTygSSH.js";import{F as c}from"./FAQTemplate-16IfroqC.js";import{P as p}from"./PlainTextPrint-C6NaUtnE.js";import{P as m}from"./PythonFileLoader-DZ61U3Y_.js";import{c as x,bJ as h,O as u,bk as b,d as S,$ as y,az as i,t as f,ag as g}from"./vendor-icons-Bgr6sRjK.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const N=[{question:"Under which licensing model is the core GNU/Linux Operating System distributed?",options:["Proprietary Commercial EULA","Free and Open Source Software (GNU General Public License - GPL)","Shareware 30-Day Trial","Apple APSL Restricted License"],correctAnswer:1,explanation:"Linux is distributed as Free and Open Source Software under the GNU General Public License (GPL), allowing anyone to view, modify, and redistribute the source code."},{question:"Which operating system powers the vast majority of the world's top 500 supercomputers and cloud data centers?",options:["GNU/Linux","Microsoft Windows 98","Apple iOS","MS-DOS"],correctAnswer:0,explanation:"GNU/Linux powers virtually 100% of the world's top 500 supercomputers and cloud infrastructure due to its stability, open source flexibility, and performance."},{question:"What is the underlying kernel foundation of Google's Android mobile operating system?",options:["Windows NT Kernel","A modified Linux LTS Kernel","MS-DOS Command Kernel","FreeRTOS Kernel"],correctAnswer:1,explanation:"Android is built upon a modified version of the Linux kernel, which manages memory, process scheduling, power, and hardware drivers for mobile chipsets."},{question:`Assertion (A): Apple macOS is built on top of a Unix-compliant Darwin / BSD foundation.
Reason (R): This Unix architecture gives macOS a native POSIX-compliant terminal environment for developers alongside Apple's proprietary graphical interface.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"macOS uses the Darwin / XNU hybrid kernel based on BSD Unix, providing full POSIX terminal compatibility with the Aqua desktop interface."},{question:"Which of the following file systems is the default standard for modern Microsoft Windows installations?",options:["ext4","NTFS (New Technology File System)","APFS","FAT12"],correctAnswer:1,explanation:"NTFS is the default proprietary file system for Microsoft Windows, featuring journaling, access control lists (ACLs), and encryption."}],j=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 8: COMMON OPERATING SYSTEMS (WINDOWS, LINUX, MACOS, ANDROID, IOS)\r
================================================================================\r
\r
1. DESKTOP & SERVER OPERATING SYSTEMS:\r
\r
A. MICROSOFT WINDOWS:\r
The most widely adopted desktop operating system globally.\r
- Kernel Architecture: Windows NT Hybrid Kernel.\r
- Licensing: Proprietary commercial software (Requires paid license key).\r
- Default File System: NTFS (New Technology File System).\r
- Primary Strength: Unmatched third-party software catalog, legacy enterprise compatibility, and PC gaming support (DirectX).\r
\r
B. GNU/LINUX (UBUNTU, DEBIAN, RED HAT, FEDORA):\r
A Unix-like operating system built around the open-source Linux kernel created by Linus Torvalds.\r
- Kernel Architecture: Monolithic Kernel.\r
- Licensing: Free and Open Source Software (FOSS) under GNU General Public License (GPL).\r
- Default File System: ext4, Btrfs.\r
- Primary Strength: Powers over 90% of the world's top 500 supercomputers, cloud servers (AWS, Azure, Google Cloud), and developer infrastructure due to stability, zero licensing cost, and security.\r
\r
C. APPLE macOS:\r
The proprietary operating system engineered specifically for Apple Mac desktop and laptop computers.\r
- Kernel Architecture: XNU / Darwin Hybrid Kernel based on BSD Unix.\r
- Licensing: Proprietary (bundled with Apple Mac hardware).\r
- Default File System: APFS (Apple File System).\r
- Primary Strength: Seamless hardware-software integration, Unix-compliant terminal environment for developers, and creative production workflows.\r
\r
2. MOBILE & EMBEDDED OPERATING SYSTEMS:\r
\r
A. GOOGLE ANDROID:\r
The dominant global mobile operating system developed by Google and the Open Handset Alliance.\r
- Kernel Foundation: Customized Linux Kernel with the Android Runtime (ART) executing compiled bytecode.\r
- Licensing: Open-source foundation (Android Open Source Project - AOSP) with proprietary Google Mobile Services (GMS).\r
- File System: ext4 / F2FS (Flash-Friendly File System).\r
\r
B. APPLE iOS:\r
The proprietary mobile operating system designed exclusively for Apple iPhone hardware.\r
- Kernel Foundation: Darwin / XNU Hybrid Kernel.\r
- Architecture: Heavily sandboxed security architecture; applications can only be installed from the official Apple App Store.\r
- File System: APFS with hardware-encrypted storage.\r
\r
3. CBSE EXAMINATION SUMMARY TABLE:\r
\r
| Operating System | Developer / Community | Kernel Basis | Licensing Model | Primary Domain |\r
| :--- | :--- | :--- | :--- | :--- |\r
| Windows | Microsoft | Windows NT Hybrid | Proprietary Commercial | Desktop PCs, Workstations, PC Gaming |\r
| Linux (Ubuntu/Debian) | Open Source Community | Linux Monolithic | Open Source (GPL) | Cloud Servers, Supercomputers, AI Labs |\r
| macOS | Apple Inc. | Darwin / XNU (BSD Unix) | Proprietary | Mac Desktops & Laptops, Creative Studios |\r
| Android | Google / OHA | Modified Linux Kernel | Open Source (AOSP) + GMS | Smartphones, Tablets, Smart TVs |\r
| iOS | Apple Inc. | Darwin / XNU | Proprietary Closed | Apple iPhone Mobile Hardware |\r
`,A=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: os_ecosystem_comparator.py\r
Topic 8: Common Operating Systems - Windows, Linux (Ubuntu, Debian), macOS, Android, and iOS\r
\r
Demonstrates:\r
1. Kernel architecture comparison (Monolithic, Hybrid, Microkernel)\r
2. Licensing and Open Source vs Proprietary software models (GPL vs EULA)\r
3. Package managers and default file system architectures\r
"""\r
\r
class OperatingSystemEcosystem:\r
    """Provides detailed architectural telemetry across the top 5 global operating system platforms."""\r
    \r
    SYSTEMS = {\r
        "Linux (Ubuntu / Debian)": {\r
            "kernel": "Linux Monolithic Kernel",\r
            "license": "Open Source (GNU GPL v2)",\r
            "primary_domain": "Cloud Servers, Supercomputers, AI / Data Science Labs",\r
            "package_manager": "APT / DPKG (apt install), Snap",\r
            "file_system": "ext4, Btrfs, ZFS",\r
            "shell": "GNU Bash / Zsh"\r
        },\r
        "Microsoft Windows 11": {\r
            "kernel": "Windows NT Hybrid Kernel",\r
            "license": "Proprietary Commercial (Microsoft EULA)",\r
            "primary_domain": "Enterprise Desktop, PC Gaming, Office Workstations",\r
            "package_manager": "winget, MSI / EXE installers",\r
            "file_system": "NTFS, ReFS",\r
            "shell": "PowerShell, Command Prompt (cmd.exe)"\r
        },\r
        "Apple macOS": {\r
            "kernel": "XNU Hybrid Kernel (Mach + BSD Unix)",\r
            "license": "Proprietary Commercial (Apple APSL / Closed)",\r
            "primary_domain": "Creative Media, Software Development, Audio Engineering",\r
            "package_manager": "Homebrew (brew), Mac App Store (.dmg / .app)",\r
            "file_system": "APFS (Apple File System)",\r
            "shell": "Zsh (default since Catalina)"\r
        },\r
        "Google Android": {\r
            "kernel": "Modified Linux LTS Kernel with Android Runtime (ART)",\r
            "license": "Open Source Foundation (AOSP Apache 2.0 + GPL)",\r
            "primary_domain": "Smartphones, Tablets, Smart TVs, Wearables",\r
            "package_manager": "Google Play, APK package format",\r
            "file_system": "ext4, F2FS (Flash-Friendly File System)",\r
            "shell": "mksh / Toybox"\r
        },\r
        "Apple iOS": {\r
            "kernel": "Darwin / XNU Hybrid Kernel (Sandboxed)",\r
            "license": "Proprietary Closed Source (Apple EULA)",\r
            "primary_domain": "iPhones and Apple Mobile Ecosystem",\r
            "package_manager": "Apple App Store (IPA binary format)",\r
            "file_system": "APFS (Encrypted partitions)",\r
            "shell": "Sandboxed / Restricted"\r
        }\r
    }\r
\r
    @classmethod\r
    def print_ecosystem_matrix(cls):\r
        print("\\n=================================================================")\r
        print("  CBSE CLASS 11 CS (083) - COMMON OPERATING SYSTEMS MATRIX       ")\r
        print("=================================================================\\n")\r
        for os_name, specs in cls.SYSTEMS.items():\r
            print(f"[*] {os_name.upper()}")\r
            print(f"    - Kernel Architecture: {specs['kernel']}")\r
            print(f"    - Licensing Model:     {specs['license']}")\r
            print(f"    - Primary Deployment:  {specs['primary_domain']}")\r
            print(f"    - Default File System: {specs['file_system']}")\r
            print(f"    - Default Shell:       {specs['shell']}\\n")\r
\r
\r
def main():\r
    OperatingSystemEcosystem.print_ecosystem_matrix()\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=()=>{const[n,l]=o.useState("linux"),a={linux:{name:"GNU/Linux (Ubuntu, Debian, Fedora)",category:"Desktop, Server & Supercomputers",kernel:"Linux Monolithic Kernel",license:"Open Source (GNU GPL)",fileSystem:"ext4, Btrfs, ZFS",shell:"Bash / Zsh",marketDomain:"Cloud Servers, High Performance Computing (Top 500 Supercomputers), AI/Data Science",accent:"border-orange-500 bg-orange-500/10 text-orange-400"},windows:{name:"Microsoft Windows 11",category:"Desktop & Enterprise Workstations",kernel:"Windows NT Hybrid Kernel",license:"Proprietary Commercial (EULA)",fileSystem:"NTFS, ReFS",shell:"PowerShell, Command Prompt",marketDomain:"Enterprise Office PCs, PC Gaming (DirectX), General Consumer Desktops",accent:"border-sky-500 bg-sky-500/10 text-sky-400"},macos:{name:"Apple macOS (Darwin)",category:"Desktop & Laptops",kernel:"XNU Hybrid (Mach + BSD Unix)",license:"Proprietary Commercial",fileSystem:"APFS (Apple File System)",shell:"Zsh (POSIX compliant)",marketDomain:"Creative Audio/Video Studios, Software Engineering, Apple Ecosystem",accent:"border-purple-500 bg-purple-500/10 text-purple-400"},android:{name:"Google Android",category:"Mobile & Smart Devices",kernel:"Modified Linux LTS Kernel + ART",license:"Open Source (AOSP) + Google GMS",fileSystem:"ext4, F2FS",shell:"mksh / Toybox (Hidden)",marketDomain:"Smartphones, Tablets, Smart TVs, Wearable Devices",accent:"border-emerald-500 bg-emerald-500/10 text-emerald-400"},ios:{name:"Apple iOS",category:"Mobile & Tablets",kernel:"Darwin / XNU Hybrid (Sandboxed)",license:"Proprietary Closed Source",fileSystem:"APFS (Hardware Encrypted)",shell:"Sandboxed (No Terminal Access)",marketDomain:"Apple iPhone, iPad (iPadOS), Apple Watch (watchOS)",accent:"border-rose-500 bg-rose-500/10 text-rose-400"}},r=a[n];return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Operating System Ecosystem & Kernel Inspector"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Explore kernel types, licensing models, file systems, and enterprise domains across the top 5 platforms."})]})]})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2.5",children:Object.entries(a).map(([s,t])=>e.jsxs("button",{onClick:()=>l(s),className:`p-3 rounded-xl border text-center transition-all cursor-pointer ${n===s?`${t.accent} shadow-lg ring-2 ring-sky-400/40`:"border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("span",{className:"text-xs font-bold text-white block truncate",children:t.name.split(" ")[0]}),e.jsx("span",{className:"text-[10px] text-slate-400 block truncate",children:t.category.split("&")[0]})]},s))}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-sky-400 uppercase tracking-wider",children:r.category}),e.jsx("h4",{className:"text-lg font-bold text-white",children:r.name})]}),e.jsx("span",{className:"px-3 py-1 bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800 rounded-lg",children:r.license})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold block uppercase tracking-wider text-[10px]",children:"Kernel Architecture"}),e.jsx("span",{className:"font-semibold text-white font-mono",children:r.kernel})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-855 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold block uppercase tracking-wider text-[10px]",children:"Primary File System"}),e.jsx("span",{className:"font-semibold text-emerald-400 font-mono",children:r.fileSystem})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold block uppercase tracking-wider text-[10px]",children:"Default Shell Interface"}),e.jsx("span",{className:"font-semibold text-purple-400 font-mono",children:r.shell})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5 text-xs",children:[e.jsx("span",{className:"text-amber-400 font-bold uppercase tracking-wider text-[10px] block",children:"Primary Market Deployment Domain:"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:r.marketDomain})]})]})]})};function E(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full",children:"Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Common Operating Systems: Windows, Linux, macOS, Android & iOS"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Survey modern operating system platforms across desktops, cloud servers, supercomputers, and mobile smartphones."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(x,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Global Automobile Brands"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Different operating systems are like different classes of vehicles engineered for specific terrain:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-orange-400 flex items-center gap-1.5",children:[e.jsx(h,{size:14})," Linux: Industrial Heavy Cargo Train"]}),e.jsx("p",{className:"text-slate-300",children:"Open blueprints, carries massive freight across cloud datacenters 24/7 with zero breakdowns and zero license tolls."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[e.jsx(u,{size:14})," Windows: Family Sedan / SUV"]}),e.jsx("p",{className:"text-slate-300",children:"Versatile, easy to drive for work and gaming, parts and mechanics available at every corner shop globally."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-purple-400 flex items-center gap-1.5",children:[e.jsx(b,{size:14})," macOS: Luxury Precision Coupe"]}),e.jsx("p",{className:"text-slate-300",children:"Custom engineered only for Apple chassis, polished leather interior, tight integration with your iPhone watch and keys."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(S,{className:"text-sky-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Top 5 Operating System Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-300 uppercase font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Operating System"}),e.jsx("th",{className:"p-3",children:"Developer"}),e.jsx("th",{className:"p-3",children:"Kernel Type"}),e.jsx("th",{className:"p-3",children:"Licensing"}),e.jsx("th",{className:"p-3",children:"Dominant Domain"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-orange-400",children:"GNU/Linux"}),e.jsx("td",{className:"p-3",children:"Open Source Community"}),e.jsx("td",{className:"p-3 font-mono",children:"Linux Monolithic"}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:"Open Source (GPL)"}),e.jsx("td",{className:"p-3",children:"Supercomputers, Cloud Servers, AI"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-sky-400",children:"Windows 11"}),e.jsx("td",{className:"p-3",children:"Microsoft Corporation"}),e.jsx("td",{className:"p-3 font-mono",children:"Windows NT Hybrid"}),e.jsx("td",{className:"p-3 font-semibold text-rose-300",children:"Proprietary EULA"}),e.jsx("td",{className:"p-3",children:"Desktop PCs, Enterprise, Gaming"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-purple-400",children:"macOS"}),e.jsx("td",{className:"p-3",children:"Apple Inc."}),e.jsx("td",{className:"p-3 font-mono",children:"Darwin / XNU Hybrid"}),e.jsx("td",{className:"p-3 font-semibold text-rose-300",children:"Proprietary"}),e.jsx("td",{className:"p-3",children:"Mac Desktops & Laptops, Creative Studios"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-400",children:"Android"}),e.jsx("td",{className:"p-3",children:"Google / Open Handset"}),e.jsx("td",{className:"p-3 font-mono",children:"Modified Linux Kernel"}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:"Open Source (AOSP)"}),e.jsx("td",{className:"p-3",children:"Smartphones, Tablets, Smart TVs"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-rose-400",children:"iOS"}),e.jsx("td",{className:"p-3",children:"Apple Inc."}),e.jsx("td",{className:"p-3 font-mono",children:"Darwin / XNU (Sandboxed)"}),e.jsx("td",{className:"p-3 font-semibold text-rose-300",children:"Proprietary Closed"}),e.jsx("td",{className:"p-3",children:"Apple iPhone, iPad Mobile Hardware"})]})]})]})})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(w,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(y,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python OS Ecosystem Telemetry Script"})]}),e.jsx(m,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic8_files/os_ecosystem_comparator.py",fileContent:A})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(i,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(i,{size:18}),e.jsx("span",{children:"Common Student Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Writing that Linux is owned by a single commercial company:"})," Linux is an open-source project maintained by the worldwide developer community and the Linux Foundation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that Android uses the Linux kernel:"})," State that Android is built on top of a customized Linux LTS kernel."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(f,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsx("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:e.jsxs("li",{children:[e.jsx("strong",{children:"Define FOSS vs Proprietary clearly:"})," State that Linux is Free and Open Source under GPL, whereas Windows and macOS are proprietary commercial software."]})})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(c,{questions:N})}),e.jsx("div",{className:"space-y-4",children:e.jsx(p,{fileName:"CBSE_Class11_CS_Topic8_Common_OS_Notes.txt",content:j})}),e.jsx("div",{className:"space-y-4",children:e.jsx(d,{topicName:"Common Operating Systems (Windows, Linux, macOS, Android, iOS)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{E as default};

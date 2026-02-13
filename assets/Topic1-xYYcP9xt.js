import{r as i,j as e}from"./index-Do7ncMju.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const c=`#!/bin/bash
# Interactive shell features demonstration
# Run this in an interactive terminal session

echo "=== Interactive Shell Features ==="
echo ""

# 1. Job Control Example
echo "1. Starting a background job:"
sleep 5 &
echo "  Job started in background (PID: $!)"
echo ""

# 2. History Expansion
echo "2. History feature available"
echo "  Try: !! (repeats last command)"
echo "  Try: !vim (runs last vim command)"
echo ""

# 3. Command Line Editing
echo "3. Line editing features:"
echo "  Ctrl+A: Move to beginning of line"
echo "  Ctrl+E: Move to end of line"
echo "  Ctrl+U: Clear line"
echo ""

# 4. Prompt Customization
echo "4. Prompt variable PS1 is set:"
echo "  PS1='$PS1'"
echo ""

# 5. Readline capabilities
echo "5. Tab completion works"
echo "  Type 'ls /usr/b' then press Tab"
echo ""

jobs
echo ""
echo "Note: These features only work in interactive shells!"`,o=`#!/bin/bash
# Non-interactive script example
# This would be run by cron or from another script

LOG_FILE="/tmp/backup_$(date +%Y%m%d).log"

echo "=== Non-Interactive Backup Script ===" > "$LOG_FILE"
echo "Start time: $(date)" >> "$LOG_FILE"

# No prompt, no user interaction
BACKUP_DIR="/backup/$(date +%Y%m%d)"
mkdir -p "$BACKUP_DIR" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "Backup directory created: $BACKUP_DIR" >> "$LOG_FILE"
    
    # Copy important files
    cp -r /etc/nginx/nginx.conf "$BACKUP_DIR/" 2>/dev/null
    cp -r /var/www/html/index.html "$BACKUP_DIR/" 2>/dev/null
    
    echo "Backup completed at: $(date)" >> "$LOG_FILE"
    echo "Files backed up:" >> "$LOG_FILE"
    find "$BACKUP_DIR" -type f >> "$LOG_FILE" 2>/dev/null
else
    echo "ERROR: Could not create backup directory" >> "$LOG_FILE"
    exit 1
fi

# Note: No interactive features available
# - No job control (Ctrl+Z won't work)
# - No command history
# - No line editing
# - PS1 is empty

echo "=== Script completed ===" >> "$LOG_FILE"`,x=`#!/bin/bash
# Test script to demonstrate login shell behavior

echo "=== Shell Environment Analysis ==="
echo ""

# Check if this is a login shell
if shopt -q login_shell; then
    echo "✓ This is a LOGIN shell"
    echo "  Shell name: $0"
else
    echo "✗ This is a NON-LOGIN shell"
    echo "  Shell name: $0"
fi

echo ""

# Check if interactive
if [[ $- == *i* ]]; then
    echo "✓ This is an INTERACTIVE shell"
    echo "  Prompt (PS1): '$PS1'"
else
    echo "✗ This is a NON-INTERACTIVE shell"
    echo "  Prompt (PS1): '$PS1'"
fi

echo ""

# Show which startup files would be read
echo "=== Startup Files Analysis ==="
echo "Based on shell type, these files would be read:"
echo ""

if shopt -q login_shell; then
    echo "Login shells read (in order):"
    echo "  1. /etc/profile"
    echo "  2. ~/.bash_profile"
    echo "  3. ~/.bash_login (if .bash_profile doesn't exist)"
    echo "  4. ~/.profile (if neither of above exist)"
    echo ""
    echo "They do NOT read:"
    echo "  • ~/.bashrc (unless explicitly sourced)"
else
    echo "Non-login shells read:"
    echo "  1. ~/.bashrc"
    echo "  2. /etc/bash.bashrc (on some systems)"
    echo ""
    echo "They do NOT read:"
    echo "  • ~/.bash_profile"
    echo "  • ~/.profile"
fi

echo ""
echo "=== Environment Variables ==="
echo "PATH: $PATH"
echo "HOME: $HOME"
echo "USER: $USER"
echo "SHELL: $SHELL"`,h=`#!/bin/bash
# Script to detect and test shell type
# Can be run in different modes to see behavior

echo "=== Shell Type Detection Script ==="
echo ""

# Method 1: Check PS1 (simplest)
echo "1. Checking PS1 variable:"
if [ -n "$PS1" ]; then
    echo "   PS1 is set: INTERACTIVE shell"
else
    echo "   PS1 is empty: NON-INTERACTIVE shell"
fi

echo ""

# Method 2: Check shell options
echo "2. Using shopt command:"
if shopt -q login_shell; then
    echo "   login_shell option is set: LOGIN shell"
else
    echo "   login_shell option is not set: NON-LOGIN shell"
fi

echo ""

# Method 3: Check $- special parameter
echo "3. Checking \\$- special parameter:"
echo "   Current flags: $-"
if [[ $- == *i* ]]; then
    echo "   Contains 'i': INTERACTIVE"
else
    echo "   Does not contain 'i': NON-INTERACTIVE"
fi

echo ""

# Method 4: Check shell name
echo "4. Checking shell name (\\$0):"
echo "   Shell name: $0"
if [[ $0 == -* ]]; then
    echo "   Starts with '-': LOGIN shell"
else
    echo "   Does not start with '-': NON-LOGIN shell"
fi

echo ""

# Method 5: Test if connected to terminal
echo "5. Testing terminal connection:"
if [ -t 0 ]; then
    echo "   stdin is connected to terminal"
else
    echo "   stdin is NOT connected to terminal"
fi

echo ""
echo "=== Summary ==="
if [[ $- == *i* ]] && shopt -q login_shell; then
    echo "Type: Interactive Login Shell"
    echo "Example: SSH login, console login"
elif [[ $- == *i* ]] && ! shopt -q login_shell; then
    echo "Type: Interactive Non-Login Shell"
    echo "Example: New terminal tab, GUI terminal"
elif ! [[ $- == *i* ]] && shopt -q login_shell; then
    echo "Type: Non-Interactive Login Shell"
    echo "Example: ssh host 'command'"
else
    echo "Type: Non-Interactive Non-Login Shell"
    echo "Example: Cron job, script execution"
fi

echo ""
echo "Tip: Run this script in different ways to see different results:"
echo "  bash topic1_files/startup_test.sh          # Non-interactive non-login"
echo "  bash -i topic1_files/startup_test.sh       # Interactive non-login"
echo "  bash --login -c 'bash topic1_files/startup_test.sh'  # Non-interactive login"
echo "  bash --login -i -c 'bash topic1_files/startup_test.sh' # Interactive login"`;function j(){const[a,d]=i.useState("interactive"),[n,t]=i.useState(null);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-6 transition-colors duration-500",children:[e.jsx("style",{children:`
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(34, 197, 94, 0);
            }
            50% {
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
            }
          }
          
          @keyframes flowArrow {
            0% {
              stroke-dashoffset: 100;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          .motion-safe\\:fade-slide-up {
            animation: fadeSlideUp 0.6s ease-out forwards;
          }
          
          .motion-reduced\\:animate-none {
            animation: none;
          }
          
          .tab-active-indicator {
            transform-origin: left;
            transition: transform 0.3s ease;
          }
        `}),e.jsx("header",{className:"max-w-6xl mx-auto mb-12",children:e.jsxs("div",{className:"motion-safe:fade-slide-up opacity-0",children:[e.jsx("div",{className:"inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg mb-4",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-300 font-medium",children:"Topic 1: Shell Modes & Sessions"})}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent leading-tight",children:"Interactive vs Non-Interactive & Login Shells"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl",children:"Discover how your shell behaves differently in various modes—understanding this is crucial for configuring your environment and debugging script issues."})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.1s"},children:e.jsxs("div",{className:l("bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-500","hover:shadow-2xl hover:scale-[1.002] border border-gray-200 dark:border-gray-700",n===1&&"ring-2 ring-emerald-500 dark:ring-emerald-400"),onMouseEnter:()=>t(1),onMouseLeave:()=>t(null),children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-emerald-100 dark:bg-emerald-900 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-gray-100",children:"The Two Faces of Shell"})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Interactive Shell"}),e.jsx("p",{className:"text-lg leading-relaxed text-gray-700 dark:text-gray-300",children:"A shell that reads commands from a terminal or terminal emulator. When Swadeep types commands in his Barrackpore lab terminal and sees immediate responses—that's interactive mode."}),e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500",children:[e.jsx("h4",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2",children:"Characteristics:"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"Reads from TTY (teletypewriter)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"Shows prompt ($ or #)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"Supports job control (Ctrl+Z, fg, bg)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"Has input/output redirection"})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Non-Interactive Shell"}),e.jsx("p",{className:"text-lg leading-relaxed text-gray-700 dark:text-gray-300",children:"A shell that reads commands from a file or string. When Tuhina's backup script runs automatically at midnight—that's non-interactive mode."}),e.jsxs("div",{className:"bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border-l-4 border-teal-500",children:[e.jsx("h4",{className:"font-bold text-teal-700 dark:text-teal-300 mb-2",children:"Characteristics:"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-teal-500 rounded-full"}),e.jsx("span",{children:"Reads from script/pipe/heredoc"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-teal-500 rounded-full"}),e.jsx("span",{children:"No prompt displayed"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-teal-500 rounded-full"}),e.jsx("span",{children:"Limited job control"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-teal-500 rounded-full"}),e.jsx("span",{children:"Often runs in restricted environment"})]})]})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center",children:"How Commands Flow in Different Modes"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"text-5xl text-emerald-200 dark:text-emerald-800 opacity-50",children:"→"})}),e.jsxs("svg",{className:"w-full h-48",viewBox:"0 0 400 200",children:[e.jsx("rect",{x:"20",y:"20",width:"100",height:"40",rx:"5",fill:"#A7F3D0",fillOpacity:"0.3",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#065F46",children:"Swadeep"}),e.jsx("text",{x:"70",y:"60",textAnchor:"middle",className:"text-xs",fill:"#047857",children:"User Input"}),e.jsx("rect",{x:"150",y:"20",width:"80",height:"40",rx:"5",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#10B981",children:"Terminal"}),e.jsx("rect",{x:"250",y:"20",width:"100",height:"40",rx:"5",fill:"#059669",fillOpacity:"0.2",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"300",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#059669",children:"Shell"}),e.jsx("rect",{x:"20",y:"80",width:"330",height:"40",rx:"5",fill:"#D1FAE5",fillOpacity:"0.3",stroke:"#34D399",strokeWidth:"2"}),e.jsx("text",{x:"185",y:"105",textAnchor:"middle",className:"text-sm",fill:"#065F46",children:"Immediate Response"}),e.jsx("path",{d:"M120,40 L150,40",stroke:"#10B981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M230,40 L250,40",stroke:"#10B981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("path",{d:"M350,40 L350,100 L20,100",stroke:"#34D399",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"200",y:"160",textAnchor:"middle",className:"text-xs font-bold",fill:"#059669",children:"Interactive: Human ↔ Terminal ↔ Shell"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"text-5xl text-teal-200 dark:text-teal-800 opacity-50",children:"→"})}),e.jsxs("svg",{className:"w-full h-48",viewBox:"0 0 400 200",children:[e.jsx("rect",{x:"20",y:"20",width:"100",height:"40",rx:"5",fill:"#99F6E4",fillOpacity:"0.3",stroke:"#0D9488",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#0F766E",children:"Script.sh"}),e.jsx("rect",{x:"150",y:"20",width:"80",height:"40",rx:"5",fill:"#0D9488",fillOpacity:"0.2",stroke:"#0D9488",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#0D9488",children:"Shell"}),e.jsx("rect",{x:"250",y:"20",width:"100",height:"40",rx:"5",fill:"#14B8A6",fillOpacity:"0.2",stroke:"#14B8A6",strokeWidth:"2"}),e.jsx("text",{x:"300",y:"45",textAnchor:"middle",className:"text-sm font-bold",fill:"#0F766E",children:"Result"}),e.jsx("rect",{x:"20",y:"80",width:"330",height:"40",rx:"5",fill:"#CCFBF1",fillOpacity:"0.3",stroke:"#2DD4BF",strokeWidth:"2"}),e.jsx("text",{x:"185",y:"105",textAnchor:"middle",className:"text-sm",fill:"#134E4A",children:"Log File / No Output"}),e.jsx("path",{d:"M120,40 L150,40",stroke:"#0D9488",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite",begin:"0.2s"})}),e.jsx("path",{d:"M230,40 L250,40",stroke:"#0D9488",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite",begin:"0.7s"})}),e.jsx("path",{d:"M350,40 L350,100 L20,100",stroke:"#2DD4BF",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;100,100",dur:"2s",repeatCount:"indefinite",begin:"1.2s"})}),e.jsx("text",{x:"200",y:"160",textAnchor:"middle",className:"text-xs font-bold",fill:"#0F766E",children:"Non-Interactive: Script → Shell → Result"})]})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.2s"},children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",children:[e.jsx("div",{className:"border-b border-gray-200 dark:border-gray-700",children:e.jsx("div",{className:"flex",children:["interactive","nonInteractive","detection"].map(s=>e.jsxs("button",{onClick:()=>d(s),className:l("flex-1 py-4 text-lg font-medium transition-all duration-300 relative",a===s?"text-emerald-600 dark:text-emerald-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"),children:[s==="interactive"&&"Interactive Examples",s==="nonInteractive"&&"Non-Interactive Examples",s==="detection"&&"How to Detect",a===s&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 tab-active-indicator"})]},s))})}),e.jsxs("div",{className:"p-8",children:[a==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Interactive Shell Commands"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"When Debangshu works in his Naihati college terminal, he uses interactive shell features:"}),e.jsx(r,{fileModule:c,title:"Interactive Features Demonstration",highlightLines:[1,2,5,8,11]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg",children:[e.jsx("div",{className:"text-sm font-bold text-emerald-700 dark:text-emerald-300",children:"Job Control"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block mt-2",children:"Ctrl+Z  # Suspend"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block",children:"fg     # Resume"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("div",{className:"text-sm font-bold text-blue-700 dark:text-blue-300",children:"History"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block mt-2",children:"history   # View"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block",children:"!vim     # Rerun"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg",children:[e.jsx("div",{className:"text-sm font-bold text-purple-700 dark:text-purple-300",children:"Tab Completion"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block mt-2",children:"cd /et<Tab>"}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"Expands to /etc/"})]})]})]}),a==="nonInteractive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Non-Interactive Shell Usage"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"When Abhronila's cron job runs her backup script at 2 AM, it uses non-interactive mode:"}),e.jsx(r,{fileModule:o,title:"Non-Interactive Script Example",highlightLines:[1,3,6,9]}),e.jsxs("div",{className:"mt-6 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg text-teal-800 dark:text-teal-300 mb-3",children:"Common Non-Interactive Use Cases"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Cron jobs:"})," Scheduled tasks running without user intervention"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"CI/CD pipelines:"})," Automated testing and deployment scripts"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"SSH command execution:"}),e.jsx("code",{className:"text-xs ml-2 text-gray-600 dark:text-gray-400",children:'ssh user@host "command"'})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Shell within scripts:"}),e.jsx("code",{className:"text-xs ml-2 text-gray-600 dark:text-gray-400",children:"$(command)"})," or",e.jsx("code",{className:"text-xs ml-2 text-gray-600 dark:text-gray-400",children:""})]})]})]})]})]}),a==="detection"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Detecting Shell Mode Programmatically"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sometimes scripts need to know which mode they're running in, especially when Swadeep at Barrackpore college writes scripts that behave differently in each mode."}),e.jsx(r,{fileModule:h,title:"Detecting Interactive vs Non-Interactive",highlightLines:[3,6,9,12,15]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg text-gray-800 dark:text-gray-100 mb-3",children:"Environment Variables for Detection"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("code",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"$PS1"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Set in interactive shells (primary prompt)"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"$-"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Contains 'i' if shell is interactive"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"tty -s"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Exit code indicates if connected to terminal"})]})]})]}),e.jsxs("div",{className:"p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg text-blue-800 dark:text-blue-300 mb-3",children:"Practical Detection Code"}),e.jsx("pre",{className:"text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-lg",children:`# Check if interactive
if [[ $- == *i* ]]; then
    echo "Interactive shell"
else
    echo "Non-interactive shell"
fi

# Alternative method
if [ -t 0 ]; then
    echo "Connected to terminal"
fi

# Check for PS1 (most reliable)
if [ -z "$PS1" ]; then
    # Non-interactive
    : # Do non-interactive things
else
    # Interactive
    : # Do interactive things
fi`})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.3s"},children:e.jsxs("div",{className:l("bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-500","hover:shadow-2xl hover:scale-[1.002] border border-gray-200 dark:border-gray-700",n===2&&"ring-2 ring-amber-500 dark:ring-amber-400"),onMouseEnter:()=>t(2),onMouseLeave:()=>t(null),children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100",children:"Login Shells vs Non-Login Shells"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-400 font-bold text-xl",children:"L"})}),e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Login Shell"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["A shell started when you ",e.jsx("strong",{children:"authenticate"})," to the system. When Tuhina logs into her Shyamnagar college workstation via SSH or console—that's a login shell."]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-700 dark:text-amber-300 mb-2",children:"How to Identify:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"bash --login"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"su - username"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(with hyphen)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"SSH session start"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Reads these startup files:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-sm",children:"/etc/profile"}),e.jsx("span",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-sm",children:"~/.bash_profile"}),e.jsx("span",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-sm",children:"~/.bash_login"}),e.jsx("span",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-sm",children:"~/.profile"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-bold text-xl",children:"N"})}),e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Non-Login Shell"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["A shell started ",e.jsx("strong",{children:"without authentication"}),". When Debangshu opens a new terminal tab in his Naihati lab or runs a script—that's a non-login shell."]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2",children:"How to Identify:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"bash"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(without --login)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"su username"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(without hyphen)"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"New terminal window/tab"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Reads these startup files:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm",children:"~/.bashrc"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm",children:"/etc/bash.bashrc"})]})]})]})]}),e.jsx(r,{fileModule:x,title:"Login Shell Environment Test",highlightLines:[1,3,6,9,12]}),e.jsxs("div",{className:"p-6 bg-gradient-to-r from-amber-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",children:"Real-World Scenario at Barrackpore College"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Swadeep"})," logs into the college server via SSH (login shell). His",e.jsx("code",{className:"mx-1 text-sm text-amber-600 dark:text-amber-400",children:"~/.bash_profile"}),"sets up his Java and Python paths."]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["He then opens a new terminal tab (non-login shell) where",e.jsx("code",{className:"mx-1 text-sm text-indigo-600 dark:text-indigo-400",children:"~/.bashrc"}),"sets his aliases and prompt. His aliases work but PATH changes from .bash_profile don't apply unless .bashrc sources .bash_profile."]}),e.jsxs("div",{className:"mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Pro Tip: The Universal .bashrc Pattern"}),e.jsx("pre",{className:"text-sm text-gray-700 dark:text-gray-300",children:`# In ~/.bashrc
if [ -f ~/.bash_profile ]; then
    . ~/.bash_profile  # Source login config
fi

# Your non-login shell customizations
alias ll='ls -la'
export PS1='\\u@\\h:\\w\\$ '`})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.4s"},children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100",children:"The Complete Matrix: 4 Shell Types"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b-2 border-gray-300 dark:border-gray-700",children:[e.jsx("th",{className:"pb-4 pr-8 text-lg font-bold text-gray-800 dark:text-gray-100",children:"Type"}),e.jsx("th",{className:"pb-4 pr-8 text-lg font-bold text-gray-800 dark:text-gray-100",children:"Interactive Login"}),e.jsx("th",{className:"pb-4 pr-8 text-lg font-bold text-gray-800 dark:text-gray-100",children:"Interactive Non-Login"}),e.jsx("th",{className:"pb-4 pr-8 text-lg font-bold text-gray-800 dark:text-gray-100",children:"Non-Interactive Login"}),e.jsx("th",{className:"pb-4 text-lg font-bold text-gray-800 dark:text-gray-100",children:"Non-Interactive Non-Login"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 font-bold text-emerald-600 dark:text-emerald-400",children:"Example"}),e.jsx("td",{className:"py-4 pr-8",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"SSH login"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-emerald-500 rounded-full"}),e.jsx("span",{children:"Console login"})]})]})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("span",{children:"New terminal tab"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("span",{children:"GUI terminal"})]})]})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-amber-500 rounded-full"}),e.jsx("span",{children:e.jsx("code",{className:"text-xs",children:'ssh host "script.sh"'})})]})})}),e.jsx("td",{className:"py-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-indigo-500 rounded-full"}),e.jsx("span",{children:"Cron job"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-indigo-500 rounded-full"}),e.jsx("span",{children:"Script execution"})]})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 font-bold text-emerald-600 dark:text-emerald-400",children:"Prompt"}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("code",{className:"px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded text-sm",children:"Yes"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("code",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm",children:"Yes"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("code",{className:"px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded text-sm",children:"No"})}),e.jsx("td",{className:"py-4",children:e.jsx("code",{className:"px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-sm",children:"No"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 font-bold text-emerald-600 dark:text-emerald-400",children:"Reads .bash_profile"}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-green-500 font-bold",children:"✓"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-gray-400",children:"✗"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-green-500 font-bold",children:"✓"})}),e.jsx("td",{className:"py-4",children:e.jsx("div",{className:"text-gray-400",children:"✗"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 font-bold text-emerald-600 dark:text-emerald-400",children:"Reads .bashrc"}),e.jsxs("td",{className:"py-4 pr-8",children:[e.jsx("div",{className:"text-gray-400",children:"✗"}),e.jsx("span",{className:"text-xs text-gray-500",children:"(unless sourced)"})]}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-green-500 font-bold",children:"✓"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-gray-400",children:"✗"})}),e.jsx("td",{className:"py-4",children:e.jsx("div",{className:"text-gray-400",children:"✗"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pr-8 font-bold text-emerald-600 dark:text-emerald-400",children:"Job Control"}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-green-500 font-bold",children:"✓"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-green-500 font-bold",children:"✓"})}),e.jsx("td",{className:"py-4 pr-8",children:e.jsx("div",{className:"text-gray-400",children:"✗"})}),e.jsx("td",{className:"py-4",children:e.jsx("div",{className:"text-gray-400",children:"✗"})})]})]})]})}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",children:"Memory Aid: Tuhina's College Routine"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"Morning SSH login"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:["Tuhina logs into college server = ",e.jsx("strong",{children:"Interactive Login"})," (reads .bash_profile)"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"Opens new terminal tab"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:["To run Python script = ",e.jsx("strong",{children:"Interactive Non-Login"})," (reads .bashrc)"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-indigo-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"Nightly backup runs"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:["Cron executes script = ",e.jsx("strong",{children:"Non-Interactive Non-Login"})," (reads neither)"]})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.5s"},children:e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-red-100 dark:bg-red-900 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-gray-100",children:"Common Pitfalls & Debugging"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-300",children:"Beginner Mistakes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:`"My aliases don't work in SSH!"`}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:[e.jsx("strong",{children:"Problem:"})," Aliases in .bashrc but SSH starts login shell (reads .bash_profile)"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm mt-2",children:[e.jsx("strong",{children:"Solution:"})," Source .bashrc from .bash_profile or use .bash_profile for aliases"]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:'"Script works manually but fails in cron!"'}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:[e.jsx("strong",{children:"Problem:"})," Cron runs non-interactive non-login shell (no .bashrc/.bash_profile)"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm mt-2",children:[e.jsx("strong",{children:"Solution:"})," Set full PATH and environment in script or use wrapper script"]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-300",children:"Debugging Commands"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block p-3 bg-gray-50 dark:bg-gray-900 rounded",children:"echo $0          # Prints shell name with leading dash for login"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block p-3 bg-gray-50 dark:bg-gray-900 rounded",children:'shopt -q login_shell && echo "Login" || echo "Non-login"'}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block p-3 bg-gray-50 dark:bg-gray-900 rounded",children:'[[ $- == *i* ]] && echo "Interactive" || echo "Non-interactive"'}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block p-3 bg-gray-50 dark:bg-gray-900 rounded",children:'echo "PS1: $PS1"  # Empty in non-interactive'})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Hint Section"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Think about:"})," Why does",e.jsx("code",{className:"mx-1 text-sm text-gray-700 dark:text-gray-300",children:"su - username"}),"behave differently from",e.jsx("code",{className:"mx-1 text-sm text-gray-700 dark:text-gray-300",children:"su username"}),"?"]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:[e.jsx("strong",{children:"Observe carefully:"})," Check your environment variables in different shell types. Notice which ones are missing in non-interactive mode."]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.6s"},children:e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100",children:"Best Practices & Professional Habits"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-700 dark:text-emerald-300",children:"Configuration Strategy"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"The Unified Approach"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Keep environment variables in .bash_profile, aliases in .bashrc, and source .bash_profile from .bashrc"}),e.jsx("pre",{className:"text-xs text-gray-700 dark:text-gray-300 mt-3 bg-gray-50 dark:bg-gray-900 p-3 rounded",children:`# ~/.bash_profile
export JAVA_HOME=/usr/lib/jvm/java-11
export PATH="$JAVA_HOME/bin:$PATH"

# ~/.bashrc
if [ -f ~/.bash_profile ]; then
    . ~/.bash_profile
fi
alias ll='ls -la'
alias gs='git status'`})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Script Portability"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Always set PATH and environment in scripts that might run non-interactively"}),e.jsx("pre",{className:"text-xs text-gray-700 dark:text-gray-300 mt-3 bg-gray-50 dark:bg-gray-900 p-3 rounded",children:`#!/bin/bash
# Set environment explicitly
export PATH="/usr/local/bin:/usr/bin:/bin"
export LANG="en_US.UTF-8"
# Rest of script...`})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-700 dark:text-emerald-300",children:"Testing & Verification"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Test in All Modes"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"→"}),e.jsxs("span",{children:["Test scripts with",e.jsx("code",{className:"mx-1 text-xs",children:'bash -c "your_script"'})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"→"}),e.jsxs("span",{children:["Test login shell behavior with",e.jsx("code",{className:"mx-1 text-xs",children:'bash --login -c "echo test"'})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"→"}),e.jsxs("span",{children:["Simulate cron with",e.jsx("code",{className:"mx-1 text-xs",children:"env -i /bin/bash your_script.sh"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-100 mb-2",children:"Debug Wrapper Script"}),e.jsx("pre",{className:"text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded",children:`#!/bin/bash
# debug_wrapper.sh - Test script in different modes
echo "=== Testing in different modes ==="
echo "1. Interactive Login:"
bash --login -i <<'EOF'
    echo "  PS1: $PS1"
    echo "  Shell type: $0"
EOF

echo -e "
2. Non-Interactive Non-Login:"
bash -c "echo '  PS1: $PS1'; echo '  Shell type: $0'"`})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.7s"},children:e.jsx("div",{className:"bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border-2 border-emerald-200 dark:border-emerald-800 transition-all duration-500 hover:shadow-2xl hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[e.jsx("div",{className:"md:w-1/4",children:e.jsx("div",{className:"bg-gradient-to-br from-emerald-500 to-teal-600 p-1 rounded-xl inline-block",children:e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-lg",children:[e.jsx("div",{className:"w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-3xl font-bold text-emerald-600 dark:text-emerald-300",children:"SH"})}),e.jsx("h4",{className:"text-center font-bold text-lg mt-4 text-gray-800 dark:text-gray-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:"27 Years Experience"})]})})}),e.jsxs("div",{className:"md:w-3/4",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("svg",{className:"w-8 h-8 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl border border-emerald-100 dark:border-emerald-900",children:[e.jsx("h4",{className:"font-bold text-lg text-emerald-700 dark:text-emerald-300 mb-4",children:"The #1 Debugging Skill in Shell Scripting"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["In my 27 years teaching at Ichapur and Barrackpore institutes, I've seen this pattern countless times: ",e.jsx("strong",{children:"A script works perfectly when run manually but fails in cron."})]}),e.jsx("div",{className:"mb-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500",children:e.jsxs("p",{className:"text-amber-800 dark:text-amber-300",children:[e.jsx("strong",{children:"Reason:"})," Interactive shells inherit your environment—PATH, variables, current directory. Non-interactive shells start with a clean environment."]})}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"Always test in clean environment:"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:["Use ",e.jsx("code",{className:"text-xs",children:"env -i bash script.sh"})," to simulate cron environment"]})]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"The hyphen matters:"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:["When Swadeep uses ",e.jsx("code",{className:"text-xs",children:"su - user"})," (with hyphen), he gets a login shell with that user's environment. Without hyphen, he keeps his own environment."]})]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold mt-1",children:"•"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-gray-800 dark:text-gray-100",children:"SSH command execution is tricky:"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm mt-1",children:[e.jsx("code",{className:"text-xs",children:'ssh host "command"'})," runs a non-interactive login shell. Tuhina at Shyamnagar needs to know it reads .bash_profile but not .bashrc."]})]})]})]})]}),e.jsxs("div",{className:"pt-6 border-t border-emerald-200 dark:border-emerald-800",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-400 italic",children:`"Remember: Shell type determines environment inheritance. Interactive shells know about you, non-interactive shells don't. Login shells authenticate, non-login shells inherit. Master these distinctions, and you'll debug 80% of shell environment issues."`}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("span",{className:"text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full",children:"Email: sukantahui@codernaccotax.co.in"}),e.jsx("span",{className:"text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full",children:"Mobile: 7003756860"})]})]})]})]})]})})}),e.jsx("section",{className:"motion-safe:fade-slide-up opacity-0",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Mini Checklist: Shell Mode Mastery"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Interactive Shell"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-emerald-600 font-bold",children:"✓"})}),e.jsx("span",{children:"Has PS1 variable set"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-emerald-600 font-bold",children:"✓"})}),e.jsx("span",{children:"Supports job control"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-emerald-600 font-bold",children:"✓"})}),e.jsx("span",{children:"Reads from terminal"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Login Shell"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-teal-600 font-bold",children:"✓"})}),e.jsx("span",{children:"Reads .bash_profile"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-teal-600 font-bold",children:"✓"})}),e.jsx("span",{children:'Shell name starts with "-"'})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-teal-600 font-bold",children:"✓"})}),e.jsx("span",{children:"Authenticates user"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Debugging Steps"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white bg-blue-600 rounded-full font-bold p-1",children:"1"})}),e.jsx("span",{children:"Check $- for 'i'"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white bg-blue-600 rounded-full font-bold p-1",children:"2"})}),e.jsx("span",{children:"Test with env -i"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-white rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white bg-blue-600 rounded-full font-bold p-1",children:"3"})}),e.jsx("span",{children:"Check shell name ($0)"})]})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-white/20 rounded-xl backdrop-blur-sm",children:[e.jsx("h4",{className:"text-xl font-bold mb-4",children:"Next Topic Preview"}),e.jsxs("p",{className:"opacity-90",children:[e.jsx("strong",{children:"Topic 2:"})," Bash startup files (.bashrc, .bash_profile, .profile). Learn exactly when each file loads and how to organize your shell configuration properly."]})]})]})})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"text-center text-gray-600 dark:text-gray-400",children:[e.jsx("p",{children:"© Shell Scripting Mastery • Topic 1: Shell Modes • Barrackpore Learning Series"}),e.jsx("p",{className:"text-sm mt-2",children:"Real examples from Shyamnagar, Ichapur, and Naihati college environments"})]})})]})}export{j as default};

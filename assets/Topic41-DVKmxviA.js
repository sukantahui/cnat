import{j as e}from"./index-meFSU1Lv.js";import{c as n}from"./clsx-B-dksMZM.js";import{S as s}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const i=`#!/bin/bash
# trap_demo.sh – Basic trap for cleanup on exit and interrupt
# Usage: ./trap_demo.sh

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Cleanup function ----------
cleanup() {
    local exit_code=$?
    echo "🧹 Cleaning up temporary files..."
    if [[ -n "\${TEMP_FILE:-}" && -f "$TEMP_FILE" ]]; then
        rm -f "$TEMP_FILE"
        echo "   Removed $TEMP_FILE"
    fi
    echo "Exiting with code: $exit_code"
    exit "$exit_code"
}

# ---------- Set traps ----------
trap cleanup INT TERM EXIT

# ---------- Main script ----------
echo "Creating temporary file..."
TEMP_FILE=$(mktemp) || exit 1
echo "This is important data" > "$TEMP_FILE"
echo "Temporary file created: $TEMP_FILE"

echo "Processing... (press Ctrl+C to interrupt)"
for i in {1..10}; do
    echo "Step $i"
    sleep 1
done

echo "✅ Script completed normally."
exit 0`,l=`#!/bin/bash
# trap_ignore.sh – Temporarily ignore SIGINT during critical section
# Usage: ./trap_ignore.sh

set -euo pipefail
IFS=$'\\n\\t'

# Critical section – cannot be interrupted
critical_work() {
    echo "🔐 Starting critical operation (Ctrl+C disabled)"
    # Ignore SIGINT
    trap '' INT
    
    # Simulate critical work
    sleep 3
    echo "   Critical operation finished"
    
    # Restore default SIGINT behaviour
    trap - INT
    echo "🔓 Ctrl+C re-enabled"
}

# Main
echo "Script started"
critical_work
echo "Continuing with normal work..."

# Loop to show Ctrl+C works again
for i in {1..5}; do
    echo "   ... working $i"
    sleep 1
done

echo "✅ Done"`,o=`#!/bin/bash
# trap_multiple.sh – Multiple signals, multiple handlers, listing traps
# Usage: ./trap_multiple.sh

set -euo pipefail
IFS=$'\\n\\t'

echo "PID: $$"

# ---------- Handlers ----------
cleanup_temp() {
    echo "🧹 Removing temporary files..."
}
log_shutdown() {
    echo "📝 Logging shutdown at $(date)"
}
graceful_exit() {
    echo "👋 Exiting gracefully..."
    exit 0
}

# ---------- Set multiple traps ----------
trap cleanup_temp EXIT
trap log_shutdown INT TERM
trap graceful_exit INT  # Overwrites log_shutdown for INT? No, last one wins.

# Show current traps
echo "Current traps:"
trap -p

# Better: combine multiple actions in one trap
trap 'cleanup_temp; log_shutdown; graceful_exit' INT TERM EXIT

echo -e "\\nUpdated traps (combined):"
trap -p

echo -e "\\nScript running. Try Ctrl+C or 'kill -INT $$' from another terminal."
echo "Press Ctrl+C to trigger combined handler."

# Infinite loop – wait for signal
while true; do
    sleep 5
done`,c=`#!/bin/bash
# trap_cleanup.sh – Structured cleanup with function stack
# Usage: ./trap_cleanup.sh

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Cleanup stack ----------
CLEANUP_STACK=()

push_cleanup() {
    local cmd="$1"
    CLEANUP_STACK+=("$cmd")
}

pop_cleanup() {
    if [[ \${#CLEANUP_STACK[@]} -gt 0 ]]; then
        local cmd="\${CLEANUP_STACK[-1]}"
        unset 'CLEANUP_STACK[\${#CLEANUP_STACK[@]}-1]'
        eval "$cmd"
    fi
}

run_all_cleanup() {
    echo "🧹 Running all cleanup handlers..."
    local cmd
    # Run in reverse order (LIFO)
    for (( idx=\${#CLEANUP_STACK[@]}-1 ; idx>=0 ; idx-- )); do
        eval "\${CLEANUP_STACK[idx]}"
    done
}

trap run_all_cleanup EXIT INT TERM

# ---------- Main script ----------
echo "Creating resources..."

# Create temporary directory
TEMP_DIR=$(mktemp -d)
push_cleanup "rm -rf '$TEMP_DIR'"
echo "   Created $TEMP_DIR"

# Create temporary file
TEMP_FILE=$(mktemp)
push_cleanup "rm -f '$TEMP_FILE'"
echo "   Created $TEMP_FILE"

# Simulate work
echo "Working... (press Ctrl+C to test cleanup)"
sleep 5

# Normally, we would pop cleanups as resources are released
pop_cleanup  # removes TEMP_FILE (but we already have run_all_cleanup on exit)
pop_cleanup  # removes TEMP_DIR

echo "✅ Script completed normally."
exit 0`,m=()=>{const t=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes signalPulse {
          0% { r: 4; opacity: 0.8; }
          50% { r: 8; opacity: 1; }
          100% { r: 4; opacity: 0.8; }
        }
      `}),e.jsxs("div",{className:n("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:n("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["🛑 Example Script: ",e.jsx("span",{className:"text-red-400",children:"Signal Handling with trap"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Interrupts happen. Be ready.",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"})," uses",e.jsx("code",{children:"trap"})," to clean up temporary files; ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," in",e.jsx("span",{className:"italic",children:"Barrackpore"})," ensures his backups aren't left half‑written."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Signal sent to process, trap catches it and runs cleanup",children:[e.jsx("rect",{x:"30",y:"40",width:"80",height:"60",rx:"8",fill:"#1e293b",stroke:"#6b7280"}),e.jsx("text",{x:"50",y:"77",fontSize:"14",fill:"#d1d5db",children:"script.sh"}),e.jsxs("g",{transform:"translate(130, 30)",children:[e.jsx("path",{d:"M0 0 L15 20 L8 20 L20 40",stroke:"#ef4444",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"20",cy:"40",r:"4",fill:"#ef4444",children:e.jsx("animate",{attributeName:"r",values:"4;8;4",dur:"1s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(160, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"30",rx:"6",fill:"#312e81",stroke:"#a78bfa"}),e.jsx("text",{x:"20",y:"22",fontSize:"14",fill:"#e0e7ff",children:"trap"})]}),e.jsxs("g",{transform:"translate(270, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"30",height:"30",rx:"4",fill:"#4ade80"}),e.jsx("text",{x:"5",y:"22",fontSize:"12",fill:"#ffffff",children:"🧹"}),e.jsx("text",{x:"40",y:"22",fontSize:"12",fill:"#d1d5db",children:"cleanup"})]}),e.jsx("line",{x1:"135",y1:"50",x2:"160",y2:"55",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"250",y1:"55",x2:"270",y2:"55",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:`🧠 Signals: The Kernel's Way of Saying "Stop!"`}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-amber-400",children:"Signals"})," are asynchronous notifications sent to a process. Common ones: ",e.jsx("code",{children:"SIGINT"})," (Ctrl+C), ",e.jsx("code",{children:"SIGTERM"})," (default ",e.jsx("code",{children:"kill"}),"),",e.jsx("code",{children:"SIGHUP"})," (terminal closed), and ",e.jsx("code",{children:"EXIT"})," (pseudo‑signal for script exit)."]}),e.jsxs("p",{children:[e.jsx("code",{children:"trap"})," lets you intercept signals and execute custom code. Without it, the default action is usually to terminate the process – often leaving behind temporary files, incomplete data, or corrupted state."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," in ",e.jsx("span",{className:"italic",children:"Ichapur"})," once lost a day's work because her script was killed mid‑write. Now every script she writes has a",e.jsx("code",{children:"trap"})," to save partial progress."]})]}),e.jsxs("div",{className:n("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-red-700","hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Signal Quick Reference"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"INT"})," – interactive attention (Ctrl+C)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"TERM"})," – termination request"]}),e.jsxs("li",{children:[e.jsx("code",{children:"EXIT"})," – script exits (any reason)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"ERR"})," – any command returns non‑zero (with ",e.jsx("code",{children:"set -e"}),")"]}),e.jsxs("li",{children:[e.jsx("code",{children:"DEBUG"})," – before every command"]}),e.jsxs("li",{children:[e.jsx("code",{children:"RETURN"})," – after function or sourced script"]})]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"📜 Four Essential Trap Patterns"}),e.jsx(s,{fileModule:i,title:"🧹 trap_demo.sh – Basic cleanup on EXIT and INT",highlightLines:[5,7,12]}),e.jsx(s,{fileModule:l,title:"🚫 trap_ignore.sh – Temporarily ignore SIGINT during critical section",highlightLines:[4,10,15]}),e.jsx(s,{fileModule:o,title:"🔄 trap_multiple.sh – Multiple signals, multiple handlers, listing traps",highlightLines:[5,8,18,26]}),e.jsx(s,{fileModule:c,title:"📦 trap_cleanup.sh – Structured cleanup with functions and stack",highlightLines:[6,13,23]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Signal Handling Pitfalls"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Using `trap - signal` without quotes – `trap - INT` resets, `trap - 'INT'` does nothing.","❌ Forgetting that `EXIT` trap runs on any exit (even successful).","❌ Overwriting previous traps instead of chaining.","❌ Trying to trap `KILL` or `STOP` – cannot be caught.","❌ Not resetting traps in subshells – traps are inherited but can be overridden.","❌ Using `exit` inside an `EXIT` trap – creates infinite loop.","❌ Assuming signal numbers are portable – always use signal names.","❌ Not restoring ignored signals – script continues with signal ignored."].map((a,r)=>e.jsx("div",{className:n("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:"{pitfall}"})},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Signal Handling Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Always use signal names, not numbers (INT, TERM, EXIT).","🔹 Keep cleanup functions simple and idempotent.","🔹 Set `trap` early in the script, before creating temporary resources.","🔹 Use `trap -p` to inspect current traps.","🔹 For multiple cleanup actions, maintain a stack or call a master cleanup.","🔹 Reset signals to default when done ignoring (`trap - INT`).","🔹 Test your trap by sending signals manually: `kill -INT $$`.","🔹 In libraries, avoid setting traps that affect the calling script."].map((a,r)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:a})]},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips – Advanced trap Usage"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `trap ... EXIT` for guaranteed cleanup."})," Even if the script succeeds, the EXIT trap runs. This is perfect for removing temporary files, releasing locks, etc."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Chain traps by saving and restoring."})," If you need to add a handler without overwriting an existing one, save the old trap and call it from your new one.",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:`old_trap=$(trap -p EXIT); trap 'my_cleanup; eval "$old_trap"' EXIT`})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `trap '...' RETURN` for function cleanup."})," Combined with `local` traps, you can ensure resources allocated in a function are freed when it returns."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Signal masking in subshells."})," Each subshell resets ignored signals to default. To propagate ignored status, you must re‑ignore in the subshell."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Debug with `trap DEBUG`."})," Run a command before every statement – extremely useful for logging or breakpoints (see Topic40)."]})]})]}),e.jsxs("section",{className:n("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"trap_demo.sh"}),", we call ",e.jsx("code",{children:"cleanup"})," from both ",e.jsx("code",{children:"INT"})," and ",e.jsx("code",{children:"EXIT"})," traps. What happens if you press Ctrl+C twice? Why does the script still exit?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying ",e.jsx("code",{children:"trap_ignore.sh"})," to restore the original ",e.jsx("code",{children:"INT"})," behaviour, not just resetting to default. How would you capture the previous trap and reinstall it?"]})]})]}),e.jsx("section",{className:n("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",t," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“I remember teaching ",e.jsx("code",{children:"trap"})," to a batch in ",e.jsx("span",{className:"italic",children:"Naihati"})," back in 2002.",e.jsx("span",{className:"text-blue-400",children:"Swadeep"})," asked, ‘Why bother? Ctrl+C kills it anyway.’ Two weeks later, his database import script was interrupted and left a half‑written table. Now he's the biggest advocate for signal handling. Over ",e.jsxs("span",{className:"font-semibold",children:[t," years"]}),", I've learned: ",e.jsx("span",{className:"text-amber-400",children:"graceful exit is a sign of professionalism"}),".”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#TrapEverything"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#CleanupOnExit"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#NoMoreCorruption"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Signal Handling Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-red-400",children:[e.jsx("li",{children:"Set `trap` before creating temporary resources."}),e.jsx("li",{children:"Use `EXIT` trap for unconditional cleanup."}),e.jsx("li",{children:"Use signal names, not numbers."}),e.jsx("li",{children:"Keep cleanup functions idempotent."}),e.jsx("li",{children:"Test traps by sending signals manually."}),e.jsx("li",{children:"Restore ignored signals after critical section."}),e.jsx("li",{children:"Chain traps if multiple handlers needed."}),e.jsx("li",{children:"Document signal behaviour in script comments."})]})]}),e.jsxs("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:[e.jsx("p",{children:"🎉 Congratulations! You've completed all 42 topics of Shell Scripting."}),e.jsx("p",{className:"mt-2",children:"Now go forth and write robust, professional scripts."})]})]})]})};export{m as default};

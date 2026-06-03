import{j as e}from"./index-DjvKv1PW.js";import{S as s}from"./ShellFileLoader-BW2W_vnJ.js";import{F as r}from"./FAQTemplate-ByAk5Pae.js";import"./prism-BF08qRUT.js";import"./clsx-B-dksMZM.js";const t=[{question:"What is the first step when you suspect a runaway process?",shortAnswer:"Use `top` or `ps aux --sort=-%cpu` to identify the problematic PID.",explanation:"You need to locate the process consuming excessive resources before taking action.",hint:"Look for high CPU or memory usage.",level:"basic",codeExample:"$ ps aux --sort=-%cpu | head -5"},{question:"Why should you try `kill -15` before `kill -9`?",shortAnswer:"SIGTERM (15) allows the process to clean up resources; SIGKILL (9) forces immediate termination without cleanup.",explanation:"Using SIGTERM first is polite and safer for data integrity.",hint:"Think of it as asking nicely vs. pulling the plug.",level:"intermediate",codeExample:"$ kill -15 PID && sleep 2 && kill -0 PID || kill -9 PID"},{question:"How do you run a command with low CPU priority from the start?",shortAnswer:"Use `nice -n 19 command`.",explanation:"Nice values range from -20 (highest) to 19 (lowest). Default is 0.",hint:"Higher nice number = less priority.",level:"basic",codeExample:"$ nice -n 19 ./long_task &"},{question:"What command keeps a process running after you log out from SSH?",shortAnswer:"`nohup command &` or start with `disown` after backgrounding.",explanation:"nohup ignores SIGHUP and redirects output to nohup.out by default.",hint:"nohup = no hangup.",level:"intermediate",codeExample:"$ nohup ./server > server.log 2>&1 &"},{question:"How do you reload a daemon's configuration without restarting it?",shortAnswer:"Send the SIGHUP signal to the daemon's PID: `kill -HUP PID`.",explanation:"Many daemons (nginx, sshd, apache) reload config on SIGHUP.",hint:"HUP = HangUp, but repurposed for reload.",level:"advanced",codeExample:"$ sudo kill -HUP $(cat /var/run/nginx.pid)"},{question:"You have a background `tail -f` running. How do you stop it?",shortAnswer:"Bring it to foreground with `fg` then press Ctrl+C, or `kill %jobID`.",explanation:"You cannot directly Ctrl+C a background job because it does not receive terminal signals.",hint:"Background → foreground → interrupt.",level:"basic",codeExample:`$ fg %1
^C`},{question:"How can you change the priority of an already running process?",shortAnswer:"Use `renice` with the PID: `renice +10 -p PID`.",explanation:"renice changes the nice value of a running process.",hint:"renice (re-nice).",level:"intermediate",codeExample:"$ renice +5 -p 12345"},{question:"What does `kill -0 PID` do?",shortAnswer:"It checks if the process exists without sending a signal.",explanation:"Useful in scripts to test whether a process is still alive.",hint:"0 is a null signal – no actual signal sent.",level:"advanced",codeExample:"if kill -0 $PID; then echo 'Process running'; fi"},{question:"Why does my background job stop when I close the terminal even with `&`?",shortAnswer:"Because `&` only backgrounds it; the shell still sends SIGHUP on exit. Use `nohup` or `disown`.",explanation:"The job is still a child of the shell. The shell sends hangup signal to all children when exiting.",hint:"Terminal logout sends SIGHUP to all jobs.",level:"intermediate",codeExample:"$ long_task &; disown"},{question:"How do you kill all processes belonging to a specific user?",shortAnswer:"Use `pkill -u username` or `killall -u username`.",explanation:"Be very careful with these commands; they can log out a user.",hint:"pkill can match by user, terminal, or pattern.",level:"expert",codeExample:"$ sudo pkill -u john"},{question:"What is the difference between `kill %1` and `kill PID`?",shortAnswer:"`%1` is a job ID (shell-specific), while PID is a system-wide process ID.",explanation:"Use job IDs when you're in the same shell; use PIDs when you need to affect processes from other sessions.",hint:"job IDs are easier in interactive shell.",level:"basic",codeExample:"$ kill %1   # within same shell"},{question:"How can you monitor a log file and also grep for errors in real-time?",shortAnswer:"`tail -f logfile | grep --line-buffered ERROR` in background.",explanation:"`--line-buffered` ensures grep outputs lines immediately for further processing.",hint:"Line buffering prevents delay.",level:"advanced",codeExample:"$ tail -f app.log | grep --line-buffered ERROR > errors.log &"},{question:"Your system is sluggish. Which command gives a quick overview?",shortAnswer:"`top` or `htop` (interactive), or `ps aux --sort=-%cpu | head`.",explanation:"These show real-time CPU and memory usage.",hint:"top is the standard tool.",level:"basic",codeExample:"$ top -o %CPU"},{question:"What signal should you send to a process to ask it to re-read its config?",shortAnswer:"SIGHUP (1) is conventional, but some daemons use SIGUSR1 or SIGUSR2.",explanation:"Check the daemon's documentation (e.g., `man nginx`).",hint:"HUP = reload config, not die.",level:"advanced",codeExample:"$ kill -HUP PID"},{question:"How do you make a process immune to SIGHUP without using nohup?",shortAnswer:"Use `disown` after starting the job in background.",explanation:"`disown` removes the job from the shell's job table, so no SIGHUP is sent.",hint:"disown = detach from current shell.",level:"intermediate",codeExample:"$ long_task &; disown %1"},{question:"What is the purpose of `wait` in a script with background jobs?",shortAnswer:"It pauses the script until the specified background job completes.",explanation:"Useful for synchronizing parallel tasks.",hint:"wait for child processes.",level:"intermediate",codeExample:`#!/bin/bash
task1 & task2 &
wait
 echo 'Both done'`},{question:"How can you see the nice values of all processes?",shortAnswer:"`ps -eo pid,ni,comm` or `top` then press 'n' to sort by nice.",explanation:"NI column shows nice value.",hint:"NI = nice.",level:"basic",codeExample:"$ ps -eo pid,ni,comm --sort=ni"},{question:"What happens if you `kill -9` a process that holds important locks?",shortAnswer:"Locks may not be released, causing corruption or stale lock files.",explanation:"Always prefer SIGTERM unless absolutely necessary.",hint:"SIGKILL cannot be caught or ignored, hence no cleanup.",level:"expert",codeExample:"Use `kill -15` first, wait, then `kill -9` if still alive."},{question:"How do you start a command that continues even after the terminal closes, and also logs output?",shortAnswer:"`nohup command > output.log 2>&1 &`",explanation:"nohup prevents SIGHUP; redirection captures output.",hint:"Combine nohup, redirection, and &.",level:"advanced",codeExample:"$ nohup ./backup.sh > backup.log 2>&1 &"},{question:"Why might `ps` show a process as `Z` (zombie)?",shortAnswer:"The process has terminated but its parent has not yet called `wait()` to reap it.",explanation:"Zombies consume no resources except a PID entry. They are cleared when parent exits or calls wait.",hint:"Zombie = dead but not buried.",level:"expert",codeExample:"Use `ps aux | grep Z` to find zombies."}],i=`#!/bin/bash
# scenario1_cleanup.sh - Handle runaway process

echo "=== Runaway Process Detection and Termination ==="
echo "1. Identify CPU-hungry processes:"
ps -eo pid,pcpu,comm --sort=-pcpu | head -10

echo -e "\\n2. Find a specific misbehaving script (simulate):"
# Simulate a runaway process (in real life you'd find a real PID)
# For demo: we create a dummy infinite loop in background
( while : ; do : ; done ) &
BAD_PID=$!
echo "Simulated runaway PID: $BAD_PID"

echo -e "\\n3. Check its CPU usage:"
ps -p $BAD_PID -o pid,pcpu,comm

echo -e "\\n4. Send SIGTERM (graceful):"
kill -15 $BAD_PID
sleep 1
if kill -0 $BAD_PID 2>/dev/null; then
    echo "Process still alive, sending SIGKILL..."
    kill -9 $BAD_PID
else
    echo "Process terminated successfully."
fi

echo -e "\\n5. Verify termination:"
ps -p $BAD_PID 2>/dev/null || echo "Process $BAD_PID is gone"`,l=`#!/bin/bash
# scenario2_monitor.sh - Monitor logs in background

echo "=== Background Log Monitoring ==="
# Create a dummy log file that updates
LOGFILE="/tmp/dummy_app.log"
echo "Creating dummy log file at $LOGFILE"

# Generate log entries every 2 seconds in background
( for i in {1..10}; do echo "$(date): INFO - Processing item $i" >> $LOGFILE; sleep 2; done ) &
GENERATOR_PID=$!

echo "Log generator PID: $GENERATOR_PID"

echo -e "\\nStart tail -f in background:"
tail -f $LOGFILE &
TAIL_JOB=$!
echo "Tail job PID: $TAIL_JOB"

echo -e "\\nNow you can run other commands while tail runs in background."
echo "Check jobs:"
jobs -l

echo -e "\\nAfter 5 seconds, we'll bring tail to foreground and stop it."
sleep 5
echo "Bringing tail to foreground (fg %1) - press Ctrl+C to stop it when you see logs."
read -p "Press Enter to bring tail to foreground..." 
fg %1 2>/dev/null

echo "Cleaning up log generator..."
kill $GENERATOR_PID 2>/dev/null
rm -f $LOGFILE`,d=`#!/bin/bash
# scenario3_batch.sh - Run low-priority batch job

echo "=== Low Priority Batch Processing ==="
# Simulate a CPU-intensive task (compression, backup, etc.)
cat << 'EOF' > /tmp/intensive_task.sh
#!/bin/bash
echo "Starting intensive task at $(date)"
for i in {1..20}; do
    echo "Task progress: $i/20"
    dd if=/dev/zero of=/dev/null bs=1M count=100 2>/dev/null
    sleep 1
done
echo "Intensive task finished at $(date)"
EOF
chmod +x /tmp/intensive_task.sh

echo "Running task with nice +19 (lowest priority) in background:"
nice -n 19 /tmp/intensive_task.sh > /tmp/task_output.log 2>&1 &
TASK_PID=$!
echo "Task PID: $TASK_PID, priority: $(ps -o ni -p $TASK_PID | tail -1)"

echo "Checking system load while task runs:"
top -b -n 1 | head -5

echo -e "\\nYou can also renice an existing process:"
echo "renice +10 -p $TASK_PID"
sudo renice +10 -p $TASK_PID 2>/dev/null || echo "(sudo may be required for renice)"

echo "Waiting for task to finish..."
wait $TASK_PID
echo "Output saved to /tmp/task_output.log"
rm -f /tmp/intensive_task.sh`,c=`#!/bin/bash
# scenario4_safekill.sh - Safe escalation of kill signals

echo "=== Safe Process Termination: Escalate Signals ==="
# Create a dummy hung process (simulate by ignoring SIGTERM)
cat << 'EOF' > /tmp/hung_simulator.sh
#!/bin/bash
trap '' TERM   # Ignore SIGTERM
echo "I am ignoring SIGTERM. Use SIGKILL to stop me."
while true; do sleep 10; done
EOF
chmod +x /tmp/hung_simulator.sh
/tmp/hung_simulator.sh &
HUNG_PID=$!
echo "Simulated hung process PID: $HUNG_PID"

echo -e "\\nStep 1: Try SIGTERM (kill -15)"
kill -15 $HUNG_PID
sleep 1
if kill -0 $HUNG_PID 2>/dev/null; then
    echo "Process still alive. Step 2: Try SIGINT (kill -2)"
    kill -2 $HUNG_PID
    sleep 1
    if kill -0 $HUNG_PID 2>/dev/null; then
        echo "Process still alive. Step 3: Force SIGKILL (kill -9)"
        kill -9 $HUNG_PID
        echo "SIGKILL sent."
    else
        echo "Process responded to SIGINT."
    fi
else
    echo "Process responded to SIGTERM."
fi

sleep 1
if kill -0 $HUNG_PID 2>/dev/null; then
    echo "ERROR: Process still exists!"
else
    echo "Process successfully terminated."
fi
rm -f /tmp/hung_simulator.sh`,h=`#!/bin/bash
# scenario5_logrotate.sh - Reload config with SIGHUP

echo "=== Graceful Configuration Reload Using SIGHUP ==="
# Simulate a daemon (simple web server or service)
cat << 'EOF' > /tmp/simulated_daemon.sh
#!/bin/bash
CONFIG_FILE="/tmp/demo.conf"
echo "port=8080" > $CONFIG_FILE

reload_config() {
    echo "$(date): Reloading configuration..." >> /tmp/daemon.log
    source $CONFIG_FILE
    echo "New port = $port" >> /tmp/daemon.log
}

trap reload_config HUP

echo "Daemon started. PID: $$"
while true; do
    echo "Listening on port $port" >> /tmp/daemon.log
    sleep 5
done
EOF
chmod +x /tmp/simulated_daemon.sh
/tmp/simulated_daemon.sh &
DAEMON_PID=$!
echo "Simulated daemon PID: $DAEMON_PID"
echo "Log file: /tmp/daemon.log"

echo -e "\\nInitial log entries:"
tail -3 /tmp/daemon.log

echo -e "\\nNow change config file and send SIGHUP"
echo "port=9090" > /tmp/demo.conf
kill -HUP $DAEMON_PID
sleep 2
echo -e "\\nLog after SIGHUP:"
tail -5 /tmp/daemon.log

echo -e "\\nClean up: kill daemon"
kill $DAEMON_PID
rm -f /tmp/simulated_daemon.sh /tmp/demo.conf /tmp/daemon.log`,g=`#!/bin/bash
# scenario6_webserver.sh - Keep process alive after logout

echo "=== Keeping Process Alive After Logout ==="
# Simulate a simple HTTP server using Python (if available) or a sleep task
if command -v python3 &>/dev/null; then
    echo "Using Python3 to start a simple HTTP server on port 8000"
    CMD="python3 -m http.server 8000"
elif command -v python &>/dev/null; then
    CMD="python -m SimpleHTTPServer 8000"
else
    CMD="sleep 3600"   # fallback
fi

echo "Method 1: nohup + background"
nohup $CMD > /tmp/server.out 2>&1 &
JOB1=$!
echo "Started with nohup, PID: $JOB1"
echo "Check: ps -p $JOB1"

echo -e "\\nMethod 2: Disown after starting in background"
$CMD > /tmp/server2.out 2>&1 &
JOB2=$!
disown $JOB2
echo "Started and disowned, PID: $JOB2"

echo -e "\\nNow you can log out; both processes should survive."
echo "To test without logging out, simulate SIGHUP:"
kill -HUP $$   # This would kill the script itself, so we won't do it.

echo "Demonstration: Use 'ps' to see they are still there after you exit this script."
echo "Press Enter to clean up (kill the jobs) before exiting."
read
kill $JOB1 $JOB2 2>/dev/null
rm -f /tmp/server.out /tmp/server2.out`,y=()=>{const a=new Date().getFullYear()-1998;return e.jsx("div",{className:"dark min-h-screen py-12 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeSlideUp_0.6s_ease-out] motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent",children:"Common Process Management Scenarios"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Real-world situations and practical solutions using process control tools"})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 animate-[fadeSlideUp_0.5s_ease-out_0.1s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.1s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-blue-500 pl-4 mb-4",children:"Process Management in Practice"}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4",children:[e.jsxs("p",{children:["Knowing the commands (",e.jsx("code",{children:"ps"}),", ",e.jsx("code",{children:"top"}),", ",e.jsx("code",{children:"kill"}),", ",e.jsx("code",{children:"bg"}),", ",e.jsx("code",{children:"fg"}),", ",e.jsx("code",{children:"jobs"}),", ",e.jsx("code",{children:"nice"}),", ",e.jsx("code",{children:"nohup"}),") is one thing; applying them to solve real problems is another. This topic brings together everything you've learned into practical, everyday scenarios faced by system administrators, developers, and power users."]}),e.jsx("p",{children:"From cleaning up runaway processes to scheduling batch jobs safely, these scenarios will help you think like a professional. We'll work through examples inspired by real classrooms and production systems."})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800",children:[e.jsxs("svg",{viewBox:"0 0 800 180",className:"w-full h-auto","aria-label":"Process management workflow",children:[e.jsx("rect",{x:"20",y:"20",width:"140",height:"50",rx:"8",fill:"#ef4444",fillOpacity:"0.1",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"50",textAnchor:"middle",fill:"#ef4444",fontSize:"13",fontWeight:"bold",children:"Identify"}),e.jsx("rect",{x:"220",y:"20",width:"140",height:"50",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"290",y:"50",textAnchor:"middle",fill:"#f59e0b",fontSize:"13",fontWeight:"bold",children:"Analyze"}),e.jsx("rect",{x:"420",y:"20",width:"140",height:"50",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"490",y:"50",textAnchor:"middle",fill:"#3b82f6",fontSize:"13",fontWeight:"bold",children:"Act"}),e.jsx("rect",{x:"620",y:"20",width:"140",height:"50",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"690",y:"50",textAnchor:"middle",fill:"#10b981",fontSize:"13",fontWeight:"bold",children:"Verify"}),e.jsx("path",{d:"M160 45 L210 45",stroke:"#9ca3af",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowSmall)"}),e.jsx("path",{d:"M360 45 L410 45",stroke:"#9ca3af",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowSmall)"}),e.jsx("path",{d:"M560 45 L610 45",stroke:"#9ca3af",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowSmall)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowSmall",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 3, 0 6",fill:"#9ca3af"})})})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Systematic approach to handling process issues: Identify → Analyze → Act → Verify"})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.15s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.15s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-red-500 pl-4 mb-4",children:"Scenario 1: Runaway Process Eating CPU"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-red-800 dark:text-red-300",children:"Problem:"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A misbehaving script (e.g., infinite loop) is consuming 100% CPU, slowing down the entire system. You need to locate and terminate it without rebooting."})]}),e.jsx(s,{fileModule:i,title:"Solution: Identify and Kill Runaway Process",highlightLines:[7,12,18]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Pro Tip:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"top -p PID"})," to monitor a single process in real-time before killing."]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.2s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.2s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-yellow-500 pl-4 mb-4",children:"Scenario 2: Monitoring Logs in Background"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-yellow-800 dark:text-yellow-300",children:"Problem:"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["You need to watch a log file for errors, but you also need to keep using the terminal for other commands. Running ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"tail -f"})," in foreground blocks the shell."]})]}),e.jsx(s,{fileModule:l,title:"Solution: Background tail with job control",highlightLines:[6,12,19]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Think about…"})," How would you stop the background ",e.jsx("code",{children:"tail -f"})," without killing it? (Hint: ",e.jsx("code",{children:"fg"})," then Ctrl+C)"]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.25s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.25s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-green-500 pl-4 mb-4",children:"Scenario 3: Low-Priority Batch Job"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-green-800 dark:text-green-300",children:"Problem:"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"You need to run a large data compression or backup that might take hours, but you don't want it to interfere with interactive tasks. It should yield CPU to other processes."})]}),e.jsx(s,{fileModule:d,title:"Solution: nice + background + nohup",highlightLines:[5,9,14]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Pro Technique:"})," Combine ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"renice"})," on already running processes: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"renice +10 -p PID"}),"."]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.3s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.3s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-purple-500 pl-4 mb-4",children:"Scenario 4: Killing Stale or Hung Processes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-purple-800 dark:text-purple-300",children:"Problem:"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"An application has become unresponsive (hung). Sending a normal SIGTERM (kill -15) does nothing. You need to force terminate it, but want to avoid collateral damage."})]}),e.jsx(s,{fileModule:c,title:"Solution: Escalate signals safely",highlightLines:[8,14,22]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Safety First:"})," Always try ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"kill -15"})," before ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"kill -9"}),". SIGKILL shouldn't be your first resort."]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.35s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.35s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-indigo-500 pl-4 mb-4",children:"Scenario 5: Reloading Configuration with SIGHUP"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-indigo-800 dark:text-indigo-300",children:"Problem:"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["You've changed a configuration file (e.g., ",e.jsx("code",{children:"/etc/nginx/nginx.conf"}),"). Instead of restarting the service (which would cause downtime), you want to reload gracefully."]})]}),e.jsx(s,{fileModule:h,title:"Solution: Using SIGHUP for graceful reload",highlightLines:[5,12,18]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Classroom Note:"})," Many daemons treat SIGHUP as a configuration reload signal. Check documentation; some use SIGUSR1 or SIGUSR2."]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.4s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-teal-500 pl-4 mb-4",children:"Scenario 6: Long-Running Server Startup on SSH"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium text-teal-800 dark:text-teal-300",children:"Problem:"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"You SSH into a remote machine, start a development web server, then need to disconnect. But the server dies when you log out because of SIGHUP."})]}),e.jsx(s,{fileModule:g,title:"Solution: nohup + disown + background",highlightLines:[7,13,20]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Pro Tip:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"screen"})," or ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"tmux"})," for persistent sessions – more robust than nohup alone."]})})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.45s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.45s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-red-500 pl-4 mb-4",children:"Common Pitfalls in Scenario-Based Process Management"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"⚠️"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Killing the wrong process"})," – Double-check PIDs with ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"ps aux | grep pattern"})," before kill."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"⚠️"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Forgetting to redirect output"})," – Background jobs writing to terminal can cause confusion when you switch workspaces."]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"⚠️"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Assuming nice works for I/O"})," – ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"nice"})," affects CPU only; use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"ionice"})," for disk priority."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"⚠️"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Not checking job status after logout"})," – If you use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"nohup"})," but forget ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"&"}),", it still runs in foreground blocking logout."]})]})]})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.5s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.5s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-green-500 pl-4 mb-4",children:"Best Practices & Pro Mindset"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"✅ Professional Habits"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-2",children:[e.jsxs("li",{children:["Always verify before kill: ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:'ps -ef | grep -E "pattern1|pattern2"'})]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"kill -l"})," to list signals prior to sending."]}),e.jsxs("li",{children:["Redirect output of any background job: ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"command > log 2>&1 &"})]}),e.jsxs("li",{children:["For critical production processes, use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"systemd"})," or ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"supervisord"}),", not manual background."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-green-600 dark:text-green-400",children:"💡 Debugging Mindset"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-2",children:[e.jsxs("li",{children:["When a process misbehaves, check its state: ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"ps -o pid,stat,comm -p PID"})]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"strace -p PID"})," to see system calls (advanced)."]}),e.jsxs("li",{children:["Monitor system load with ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"htop"})," or ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"top -c"}),"."]})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-400 flex items-center gap-2",children:"💭 Think About…"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["You have a script that starts 10 background jobs. How would you reliably kill all of them if one fails? Could you use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"pkill -P $$"}),"? What are the risks?"]})]})]}),e.jsxs("div",{className:"rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-[fadeSlideUp_0.5s_ease-out_0.55s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.55s] [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-purple-500 pl-4 mb-4",children:"Scenario Mastery Checklist"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["Identify runaway processes using top/ps","Gracefully terminate with SIGTERM before SIGKILL","Run long tasks in background with & and job control","Use nice/renice to manage CPU priority","Keep processes alive after logout with nohup or disown","Redirect output from background jobs to avoid clutter","Send SIGHUP to reload configurations gracefully","Combine tools (ps, grep, kill, jobs, fg, bg) fluidly"].map((n,o)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✓"}),e.jsx("span",{children:n})]},o))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.5s_ease-out_0.6s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.6s] [animation-fill-mode:forwards]",children:e.jsx(r,{title:"Process Management Scenarios – FAQs",questions:t})}),e.jsx("div",{className:"rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900/80 border border-blue-200 dark:border-blue-800/50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] animate-[fadeSlideUp_0.5s_ease-out_0.65s] motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.65s] [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4 text-gray-700 dark:text-gray-300 space-y-2",children:[e.jsx("p",{className:"font-medium",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{className:"text-sm",children:"💻 Programming Language, RDBMs, Operating System, Web Development"}),e.jsxs("p",{className:"text-sm",children:["🎓 ",a," years of teaching experience (since 1998)"]}),e.jsx("div",{className:"mt-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:e.jsxs("p",{className:"italic",children:['"Over my ',a,` years in the classroom at Barrackpore and Shyamnagar, I've seen students like Swadeep, Abhronila, and Debangshu excel when they stop memorizing commands and start thinking in scenarios. When Tuhina asked, 'How do I keep my download running after I close the laptop?' that was the perfect moment to teach nohup and disown. The key is to connect each tool to a real pain point. Practice each scenario until it becomes second nature."`]})}),e.jsx("div",{className:"mt-2 text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"🌟 Final Takeaway:"})," Process management is not about isolated commands but about solving problems. Master these six scenarios, and you'll handle 90% of real-world situations."]})})]})]})]})}),e.jsx("style",{children:`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .motion-safe\\:animate-\\[fadeSlideUp_.*\\] { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `})]})})};export{y as default};

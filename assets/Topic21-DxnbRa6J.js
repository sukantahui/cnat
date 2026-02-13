import{r as i,j as e}from"./index-Do7ncMju.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as n}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const d=`#!/bin/bash
# Basic process monitoring script
# For Barrackpore College server monitoring

echo "=== System Process Monitor ==="
echo "Generated: $(date)"
echo "=============================="

# 1. Show top 10 CPU-consuming processes
echo -e "\\n🔍 Top 10 CPU Consumers:"
ps aux --sort=-%cpu | head -11

# 2. Show top 10 memory-consuming processes  
echo -e "\\n💾 Top 10 Memory Consumers:"
ps aux --sort=-%mem | head -11

# 3. Check specific service status
echo -e "\\n🔧 Service Status:"
services=("nginx" "mysql" "redis" "postgres")
for service in "\${services[@]}"; do
    if pgrep -x "$service" > /dev/null; then
        echo "✅ $service: RUNNING (PID: $(pgrep -x $service))"
    else
        echo "❌ $service: STOPPED"
    fi
done

# 4. Zombie process check
zombies=$(ps aux | awk '$8=="Z" {print $2}')
if [ -n "$zombies" ]; then
    echo -e "\\n🧟 Zombie Processes Found:"
    echo "$zombies"
else
    echo -e "\\n✅ No zombie processes"
fi

# 5. System load average
echo -e "\\n📊 System Load:"
uptime | awk -F'load average:' '{print $2}'`,c=`#!/bin/bash
# Parallel job execution with wait
# Used by Tuhina for batch student data processing

echo "Starting parallel data processing jobs..."

# Start multiple background jobs
echo "Job 1: Processing mathematics data..."
process_math.sh &
job1_pid=$!

echo "Job 2: Processing physics data..."
process_physics.sh &
job2_pid=$!

echo "Job 3: Processing chemistry data..."
process_chemistry.sh &
job3_pid=$!

echo "Job 4: Generating reports..."
generate_reports.sh &
job4_pid=$!

echo -e "\\nAll jobs started in background."
echo "Job PIDs: $job1_pid, $job2_pid, $job3_pid, $job4_pid"

# Wait for all jobs to complete
echo -e "\\n⏳ Waiting for all jobs to complete..."
wait $job1_pid
math_exit=$?

wait $job2_pid
physics_exit=$?

wait $job3_pid
chemistry_exit=$?

wait $job4_pid
report_exit=$?

# Check results
echo -e "\\n📋 Job Results:"
echo "Mathematics: $([ $math_exit -eq 0 ] && echo "✅ Success" || echo "❌ Failed")"
echo "Physics: $([ $physics_exit -eq 0 ] && echo "✅ Success" || echo "❌ Failed")"
echo "Chemistry: $([ $chemistry_exit -eq 0 ] && echo "✅ Success" || echo "❌ Failed")"
echo "Reports: $([ $report_exit -eq 0 ] && echo "✅ Success" || echo "❌ Failed")"

# Final status
if [ $math_exit -eq 0 ] && [ $physics_exit -eq 0 ] && [ $chemistry_exit -eq 0 ] && [ $report_exit -eq 0 ]; then
    echo -e "\\n🎉 All jobs completed successfully!"
else
    echo -e "\\n⚠️ Some jobs failed. Check logs for details."
    exit 1
fi`,x=`#!/bin/bash
# Graceful shutdown with signal handling
# For Naihati High School database maintenance

# Trap signals for graceful shutdown
trap 'cleanup_and_exit' SIGTERM SIGINT SIGQUIT

cleanup_and_exit() {
    echo -e "\\n⚠️ Received shutdown signal"
    echo "Stopping database connections..."
    
    # Gracefully stop background processes
    if [ -n "$backup_pid" ]; then
        echo "Stopping backup process (PID: $backup_pid)..."
        kill -TERM $backup_pid 2>/dev/null
        wait $backup_pid 2>/dev/null
    fi
    
    if [ -n "$index_pid" ]; then
        echo "Stopping index process (PID: $index_pid)..."
        kill -TERM $index_pid 2>/dev/null
        wait $index_pid 2>/dev/null
    fi
    
    echo "Closing database connections..."
    # Actual cleanup code here
    sleep 2
    
    echo "✅ Cleanup complete. Exiting."
    exit 0
}

# Main process
echo "Starting database maintenance..."

# Start background tasks
echo "1. Starting database backup..."
backup_database.sh &
backup_pid=$!

echo "2. Starting index optimization..."
optimize_indexes.sh &
index_pid=$!

echo "3. Starting log rotation..."
rotate_logs.sh &
log_pid=$!

echo -e "\\n📊 Process Status:"
echo "Backup PID: $backup_pid"
echo "Index PID: $index_pid"
echo "Log PID: $log_pid"

# Wait for all processes
echo -e "\\n⏳ Monitoring processes..."
wait $backup_pid
backup_status=$?

wait $index_pid
index_status=$?

wait $log_pid
log_status=$?

echo -e "\\n✅ Maintenance completed"
exit 0`,h=`#!/bin/bash
# Advanced process monitoring with alerts
# Used by Swadeep for Ichapur school server

threshold_cpu=80
threshold_mem=70
log_file="/var/log/process_monitor.log"

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$log_file"
}

check_processes() {
    echo "=== Advanced Process Monitor ==="
    echo "Time: $(date)"
    echo "CPU Threshold: \${threshold_cpu}%"
    echo "Memory Threshold: \${threshold_mem}%"
    echo "================================"
    
    # Check high CPU processes
    high_cpu=$(ps aux --sort=-%cpu | awk -v threshold=$threshold_cpu 'NR>1 && $3 > threshold')
    if [ -n "$high_cpu" ]; then
        echo -e "\\n⚠️ HIGH CPU PROCESSES:"
        echo "$high_cpu"
        log_message "High CPU alert: $high_cpu"
        
        # Optional: Send notification
        # echo "High CPU alert" | mail -s "Server Alert" admin@school.edu
    fi
    
    # Check high memory processes
    high_mem=$(ps aux --sort=-%mem | awk -v threshold=$threshold_mem 'NR>1 && $4 > threshold')
    if [ -n "$high_mem" ]; then
        echo -e "\\n⚠️ HIGH MEMORY PROCESSES:"
        echo "$high_mem"
        log_message "High memory alert: $high_mem"
    fi
    
    # Process count by user
    echo -e "\\n👤 Processes per user:"
    ps -eo user= | sort | uniq -c | sort -rn | head -5
    
    # Long running processes
    echo -e "\\n⏱️ Long running processes (>30 minutes):"
    ps -eo pid,etime,cmd | awk '$2 ~ /^[0-9]+:[0-9]+:[0-9]+/ {print $0}' | head -5
    
    # Orphaned processes (PPID = 1 but not init/systemd)
    echo -e "\\n👻 Orphaned processes check:"
    ps -eo pid,ppid,cmd | awk '$2 == 1 && $3 !~ /^\\[/ {print $0}' | head -5
}

# Run check every 5 minutes in background
while true; do
    check_processes
    echo -e "\\nSleeping for 300 seconds...\\n"
    sleep 300
done`,m=`#!/bin/bash
# Production service manager
# For Barrackpore College web services

SERVICES=("web_server" "api_service" "cache_service" "database_proxy")
LOG_DIR="/var/log/services"
PID_DIR="/var/run/services"

# Create directories if they don't exist
mkdir -p "$LOG_DIR" "$PID_DIR"

start_service() {
    local service=$1
    local script="./\${service}.sh"
    
    if [ ! -f "$script" ]; then
        echo "❌ Script not found: $script"
        return 1
    fi
    
    if [ -f "\${PID_DIR}/\${service}.pid" ]; then
        local pid=$(cat "\${PID_DIR}/\${service}.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo "⚠️ $service is already running (PID: $pid)"
            return 0
        fi
    fi
    
    echo "🚀 Starting $service..."
    nohup "$script" > "\${LOG_DIR}/\${service}.log" 2>&1 &
    local pid=$!
    
    echo $pid > "\${PID_DIR}/\${service}.pid"
    echo "✅ $service started with PID: $pid"
    return 0
}

stop_service() {
    local service=$1
    
    if [ ! -f "\${PID_DIR}/\${service}.pid" ]; then
        echo "⚠️ $service is not running (no PID file)"
        return 0
    fi
    
    local pid=$(cat "\${PID_DIR}/\${service}.pid")
    
    echo "🛑 Stopping $service (PID: $pid)..."
    
    # Try graceful shutdown first
    if kill -0 "$pid" 2>/dev/null; then
        kill -TERM "$pid"
        
        # Wait for graceful shutdown
        local timeout=30
        while kill -0 "$pid" 2>/dev/null && [ $timeout -gt 0 ]; do
            sleep 1
            ((timeout--))
        done
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            echo "⚠️ Force killing $service..."
            kill -KILL "$pid"
            sleep 2
        fi
    fi
    
    rm -f "\${PID_DIR}/\${service}.pid"
    echo "✅ $service stopped"
}

check_service() {
    local service=$1
    
    if [ ! -f "\${PID_DIR}/\${service}.pid" ]; then
        echo "❌ $service: NOT RUNNING (no PID file)"
        return 1
    fi
    
    local pid=$(cat "\${PID_DIR}/\${service}.pid")
    
    if kill -0 "$pid" 2>/dev/null; then
        echo "✅ $service: RUNNING (PID: $pid)"
        # Check memory usage
        local mem_usage=$(ps -p "$pid" -o %mem= 2>/dev/null || echo "N/A")
        echo "   Memory usage: \${mem_usage}%"
        return 0
    else
        echo "❌ $service: STOPPED (stale PID file)"
        rm -f "\${PID_DIR}/\${service}.pid"
        return 1
    fi
}

case "$1" in
    start)
        echo "Starting all services..."
        for service in "\${SERVICES[@]}"; do
            start_service "$service" &
        done
        wait
        echo "All services started"
        ;;
    stop)
        echo "Stopping all services..."
        for service in "\${SERVICES[@]}"; do
            stop_service "$service"
        done
        echo "All services stopped"
        ;;
    restart)
        echo "Restarting all services..."
        for service in "\${SERVICES[@]}"; do
            stop_service "$service"
            start_service "$service" &
        done
        wait
        echo "All services restarted"
        ;;
    status)
        echo "Service Status:"
        for service in "\${SERVICES[@]}"; do
            check_service "$service"
        done
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac`,j=()=>{const[r,l]=i.useState(!1),[t,o]=i.useState("ps");return i.useEffect(()=>{const a=setTimeout(()=>l(!0),100);return()=>clearTimeout(a)},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8",children:[e.jsx("style",{jsx:!0,children:`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes processFlow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes pulseSignal {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}),e.jsxs("div",{className:s("max-w-6xl mx-auto mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]"),children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent",children:"Topic 21: Process Management"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Monitoring, controlling, and managing system processes like a professional"})]})]}),e.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"leading-relaxed",children:["Process management is the art of creating, monitoring, and controlling processes in Unix/Linux systems. From simple background jobs (",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"&"}),") to sophisticated signal handling with ",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"kill"}),"and ",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"wait"}),", mastering these tools is essential for any shell scripter working with long-running tasks, parallel execution, or resource management."]})})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Process Lifecycle & States"]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("svg",{width:"100%",height:"200",className:"overflow-visible",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#10b981"})}),e.jsxs("linearGradient",{id:"processGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#059669"})]})]}),e.jsxs("g",{className:"hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"5%",y:"30",width:"20%",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"15%",y:"55",textAnchor:"middle",fill:"#065f46",className:"text-sm font-semibold",children:"Created"}),e.jsx("text",{x:"15%",y:"70",textAnchor:"middle",fill:"#047857",className:"text-xs",children:"Forked"})]}),e.jsxs("g",{className:"hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"30%",y:"30",width:"20%",height:"40",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"40%",y:"55",textAnchor:"middle",fill:"#92400e",className:"text-sm font-semibold",children:"Running"}),e.jsx("text",{x:"40%",y:"70",textAnchor:"middle",fill:"#b45309",className:"text-xs",children:"CPU Active"})]}),e.jsxs("g",{className:"hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"55%",y:"30",width:"20%",height:"40",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"65%",y:"55",textAnchor:"middle",fill:"#1e40af",className:"text-sm font-semibold",children:"Sleeping"}),e.jsx("text",{x:"65%",y:"70",textAnchor:"middle",fill:"#1d4ed8",className:"text-xs",children:"Waiting"})]}),e.jsxs("g",{className:"hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"80%",y:"30",width:"15%",height:"40",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"87.5%",y:"55",textAnchor:"middle",fill:"#991b1b",className:"text-sm font-semibold",children:"Zombie"}),e.jsx("text",{x:"87.5%",y:"70",textAnchor:"middle",fill:"#dc2626",className:"text-xs",children:"Exited"})]}),e.jsx("path",{d:"M130,50 L210,50",stroke:"#10b981",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M270,50 L350,50",stroke:"#10b981",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M410,50 L480,50",stroke:"#10b981",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"1s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"30%",y:"120",width:"40%",height:"40",rx:"8",fill:"#f5f3ff",stroke:"#8b5cf6",strokeWidth:"2"}),e.jsx("text",{x:"50%",y:"145",textAnchor:"middle",fill:"#5b21b6",className:"text-sm font-semibold",children:"Background Job (&)"}),e.jsx("text",{x:"50%",y:"160",textAnchor:"middle",fill:"#7c3aed",className:"text-xs",children:"Running detached"}),e.jsx("circle",{cx:"50%",cy:"120",r:"8",fill:"#8b5cf6",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"2s",repeatCount:"indefinite"})})]})}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-2",children:"Process ID (PID)"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Unique identifier assigned to each process. View with ",e.jsx("code",{className:"text-sm",children:"ps"})," or ",e.jsx("code",{className:"text-sm",children:"echo $$"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-300 mb-2",children:"Parent PID (PPID)"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["The PID of the process that created this process. View with ",e.jsx("code",{className:"text-sm",children:"ps -f"}),"."]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Essential Process Commands"]}),e.jsx("div",{className:"flex space-x-2 mb-6 overflow-x-auto",children:["ps","top","kill","wait","jobs","&"].map(a=>e.jsx("button",{onClick:()=>o(a),className:s("px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap",t===a?"bg-emerald-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:a==="&"?"Background (&)":a},a))}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700",children:[t==="ps"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"ps - Process Status"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Displays information about active processes. Essential for monitoring what's running on your system."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"ps"}),e.jsx("span",{children:"Basic process list for current terminal"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"ps aux"}),e.jsx("span",{children:"All processes with detailed information (BSD style)"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"ps -ef"}),e.jsx("span",{children:"All processes with full format (System V style)"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"ps -p PID"}),e.jsx("span",{children:"Check specific process by PID"})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Real Example in Barrackpore Lab"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Tuhina uses ",e.jsx("code",{className:"text-sm",children:"ps aux | grep python"})," to find all Python processes running on the college server before deploying new scripts."]})]})]}),t==="top"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"top - Real-time Process Monitor"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Interactive command that provides a dynamic real-time view of system processes, CPU, and memory usage."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Interactive Commands"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"k"})," - Kill a process"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"r"})," - Renice a process"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"P"})," - Sort by CPU"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"M"})," - Sort by memory"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"q"})," - Quit"]})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-300 mb-2",children:"Batch Mode"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:"top -b -n 1 > process_snapshot.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Swadeep uses this for automated monitoring of the Ichapur school server."})]})]})]}),t==="kill"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"kill - Send Signals to Processes"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sends signals to processes to terminate, pause, or resume execution. Different signals have different effects."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-red-100 dark:bg-red-900 px-3 py-1 rounded mr-3",children:"kill -9 PID"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-red-700 dark:text-red-300",children:"SIGKILL (9)"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Forceful termination - cannot be caught or ignored"})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-green-100 dark:bg-green-900 px-3 py-1 rounded mr-3",children:"kill -15 PID"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-green-700 dark:text-green-300",children:"SIGTERM (15)"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Graceful termination - allows cleanup"})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded mr-3",children:"kill -STOP PID"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-blue-700 dark:text-blue-300",children:"SIGSTOP"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Pause process execution"})]})]})]})]}),t==="wait"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"wait - Synchronize Process Execution"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Waits for background processes to complete before continuing. Essential for script synchronization."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Basic Usage"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-3 rounded",children:`#!/bin/bash
sleep 10 &
sleep_pid=$!
echo "Waiting for sleep to finish..."
wait $sleep_pid
echo "All done!"`})]}),e.jsxs("div",{className:"p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-teal-800 dark:text-teal-300 mb-2",children:"Real-world Scenario"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Abhronila uses ",e.jsx("code",{className:"text-sm",children:"wait"})," in backup scripts to ensure database dump completes before starting file compression at Naihati High School."]})]})]})]}),t==="jobs"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"jobs - Manage Background Jobs"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Lists and manages jobs running in the background of the current shell session."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"jobs"}),e.jsx("span",{children:"List all background jobs"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"fg %1"}),e.jsx("span",{children:"Bring job 1 to foreground"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"bg %2"}),e.jsx("span",{children:"Send job 2 to background"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded mr-3",children:"kill %3"}),e.jsx("span",{children:"Terminate job 3"})]})]})]}),t==="&"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"Background Execution (&)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Runs a command in the background, allowing the shell to continue processing without waiting."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Basic Syntax"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-3 rounded",children:`# Run command in background
long_running_task.sh &

# Run multiple commands in parallel
process_data.sh &
generate_report.sh &
send_email.sh &

# Store the PID
backup_script.sh &
backup_pid=$!`})]}),e.jsxs("div",{className:"p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-indigo-800 dark:text-indigo-300 mb-2",children:"Important Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Background jobs will be terminated when you log out unless you use ",e.jsx("code",{className:"text-sm",children:"nohup"}),"or ",e.jsx("code",{className:"text-sm",children:"disown"})," to detach them from the terminal."]})]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Practical Script Examples"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Process Monitoring Script"}),e.jsx(n,{fileModule:d,title:"System Process Monitor",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15]}),e.jsxs("div",{className:"mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg border border-emerald-200 dark:border-emerald-700",children:[e.jsx("h4",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-2",children:"Use Case: Shyamnagar Server"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Debangshu runs this script daily to monitor critical services on the college web server. It helps identify memory leaks and hung processes before they affect students."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Job Control Script"}),e.jsx(n,{fileModule:c,title:"Parallel Job Execution",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Signal Handling Script"}),e.jsx(n,{fileModule:x,title:"Graceful Process Termination",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15]})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Advanced Monitoring Techniques"]}),e.jsx(n,{fileModule:h,title:"Advanced Process Monitor",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Process Trees"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"pstree -p"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Visualize parent-child relationships"})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Resource Limits"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"ulimit -a"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"View system resource limits per process"})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Process Priority"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"nice -n 10 script.sh"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Run with adjusted priority (-20 to 19)"})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Production-Ready Script"]}),e.jsx(n,{fileModule:m,title:"Production Service Manager",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-purple-200 dark:border-purple-700",children:[e.jsx("h4",{className:"text-lg font-bold text-purple-800 dark:text-purple-300 mb-3",children:"Scenario: Barrackpore College Web Services"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"This script manages multiple web services for the college portal. Swadeep uses it to:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 text-sm",children:"1"})}),e.jsx("span",{children:"Start all services in parallel for faster boot time"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 text-sm",children:"2"})}),e.jsx("span",{children:"Monitor service health and restart if failed"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 text-sm",children:"3"})}),e.jsx("span",{children:"Gracefully stop services during maintenance"})]})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-red-700 dark:text-red-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"Pitfall 1: Zombie Processes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-red-700 dark:text-red-400",children:"When parent doesn't wait for child process termination"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:`# Creates zombie if parent doesn't wait
./child_process.sh &
# Missing: wait $!`}),e.jsxs("p",{className:"text-red-700 dark:text-red-400 text-sm",children:[e.jsx("strong",{children:"Solution:"})," Always use ",e.jsx("code",{className:"text-sm",children:"wait"})," or implement signal handlers"]})]})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Pitfall 2: kill -9 Abuse"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400",children:"Using SIGKILL when SIGTERM would be sufficient"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/30 rounded",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"kill -9 PID"}),e.jsxs("p",{className:"text-xs text-red-600 dark:text-red-400 mt-1",children:["• No cleanup possible",e.jsx("br",{}),"• Resource leaks"]})]}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/30 rounded",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"kill -15 PID"}),e.jsxs("p",{className:"text-xs text-green-600 dark:text-green-400 mt-1",children:["• Graceful shutdown",e.jsx("br",{}),"• Cleanup handlers run"]})]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Pitfall 3: Background Job Limitations"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:`# This job dies when terminal closes
./long_job.sh &`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:`# Survives terminal closure
nohup ./long_job.sh &`}),e.jsx("p",{className:"text-blue-700 dark:text-blue-400 text-sm",children:"Students in Ichapur often lose their background jobs when SSH session drops."})]})]})]})]}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"Process Safety"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Always trap SIGTERM for graceful shutdown"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Store PIDs in variables for later reference"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-sm",children:"wait"})," to prevent zombies"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"Monitoring Guidelines"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Monitor CPU and memory with ",e.jsx("code",{className:"text-sm",children:"ps aux --sort=-%cpu"})]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-sm",children:"timeout"})," for runaway processes"]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Log process activities for debugging"})]})]})]})]})]}),e.jsx("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[800ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border border-teal-300 dark:border-teal-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-teal-800 dark:text-teal-300",children:"Teacher's Note"}),e.jsx("p",{className:"text-sm text-teal-600 dark:text-teal-400",children:"Sukanta Hui • 27 years experience • Operating Systems, Web Development"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Professional Insight:"})," In my decades of teaching students from Barrackpore to Shyamnagar, I've seen process management make or break production systems. The difference between a junior and senior developer is often how they handle process lifecycle."]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Critical Knowledge:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("code",{className:"text-sm",children:"kill -9"})," should be your ",e.jsx("em",{children:"last"})," resort, not your first choice"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:["Background jobs (",e.jsx("code",{className:"text-sm",children:"&"}),") are tied to your terminal session - use ",e.jsx("code",{className:"text-sm",children:"nohup"})," or ",e.jsx("code",{className:"text-sm",children:"screen"})," for long-running tasks"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:["Always check process return codes with ",e.jsx("code",{className:"text-sm",children:"wait"})," to detect failures"]})]})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Pro Tip:"})," When Tuhina manages the college database server, she uses",e.jsx("code",{className:"text-sm",children:" ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem"})," to identify memory-hungry processes. This single command has prevented three server crashes this semester."]})]}),e.jsx("div",{className:"mt-4 pt-4 border-t border-teal-200 dark:border-teal-700",children:e.jsx("p",{className:"text-sm text-teal-700 dark:text-teal-400",children:"Email: sukantahui@codernaccotax.co.in • Mobile: 7003756860"})})]})}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"What You Should Remember"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Process States"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Running, Sleeping, Zombie, Stopped"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Essential Commands"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"ps, top, kill, jobs, bg, fg, wait"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Background Jobs"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Use ",e.jsx("code",{className:"text-sm",children:"&"}),", manage with ",e.jsx("code",{className:"text-sm",children:"jobs"})]})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-400 font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Signal Priority"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"SIGTERM (15) before SIGKILL (9)"})]})]})]})]})]}),e.jsx("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1000ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-300 dark:border-cyan-700",children:[e.jsxs("h3",{className:"text-xl font-bold text-cyan-800 dark:text-cyan-300 mb-4 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens when you run ",e.jsx("code",{className:"text-sm",children:"sleep 60 &"}),"and then immediately close your terminal? Why does the process sometimes continue and sometimes die?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Try changing this:"})," In the production script example, what if Abhronila changes the signal from ",e.jsx("code",{className:"text-sm",children:"SIGTERM"})," to ",e.jsx("code",{className:"text-sm",children:"SIGKILL"})," for stopping services? What could break in the Ichapur school portal?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Consider:"})," How would you modify the process monitoring script to alert Debangshu when any service uses more than 80% CPU for more than 5 minutes?"]})]})]})}),e.jsxs("section",{className:s("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300",children:"Professional Tips & Tricks"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Process Tree Hack"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Kill an entire process tree:",e.jsx("code",{className:"text-sm block mt-1",children:"pkill -TERM -P $parent_pid"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"Monitoring Shortcut"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Watch processes in real-time:",e.jsx("code",{className:"text-sm block mt-1",children:"watch -n 2 'ps aux --sort=-%cpu | head -20'"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-purple-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Production Trick"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["For critical services in Barrackpore, I use:",e.jsx("code",{className:"text-sm block mt-1",children:"timeout 300 ./critical_script.sh"})]})]})]})]})]}),e.jsx("div",{className:s("max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 dark:border-gray-700",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1200ms]"),children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Topic 21: Process Management"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{className:"px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300",children:"Previous: Here Documents"}),e.jsx("button",{className:"px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300",children:"Next: Command-line Option Parsing"})]})]})})]})};export{j as default};

import{r as l,j as e}from"./index-CG3iA-Ea.js";import{c as d}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const g=`#!/bin/bash
# Subshell for temporary directory changes in Barrackpore project

echo "=== Barrackpore Project File Processing ==="
echo "Current directory: $(pwd)"
echo "Original directory contents:"
ls -la | head -5

# Use subshell to temporarily change directory
(
    echo "Entering subshell..."
    cd /tmp
    echo "Subshell directory: $(pwd)"
    echo "Creating test file..."
    echo "Test content" > test_file.txt
    echo "Subshell directory contents:"
    ls -la test_file.txt
)

# Back in original shell
echo -e "\\nBack in original shell..."
echo "Current directory: $(pwd)"
echo "Can we see test_file.txt?"
if [ -f test_file.txt ]; then
    echo "Yes, test_file.txt exists here"
else
    echo "No, test_file.txt only existed in the subshell"
fi

# Check if we can access /tmp/test_file.txt
if [ -f /tmp/test_file.txt ]; then
    echo "The file exists in /tmp (created by subshell)"
    # Clean up
    rm /tmp/test_file.txt
fi`,u=`#!/bin/bash
# Subshell for isolated student data processing in Shyamnagar

echo "=== Shyamnagar Student Data Processing ==="

# Original sensitive data
original_data="Name,Grade,Score
Swadeep,12th,95
Tuhina,11th,88
Abhronila,12th,92"

# Process data in subshell without modifying original
processed_data=$(
    echo "$original_data" | 
    awk -F, 'NR>1 {
        name=$1
        grade=$2
        score=$3
        
        # Anonymize and process
        if(score >= 90) grade="A"
        else if(score >= 80) grade="B"
        else grade="C"
        
        printf "Student_%d,%s\\n", NR-1, grade
    }'
)

echo "Original data (unchanged):"
echo "$original_data"
echo -e "\\nProcessed data (from subshell):"
echo "$processed_data"

# Demonstrate variable isolation
counter=0
(
    echo -e "\\nInside subshell:"
    counter=100
    echo "Counter in subshell: $counter"
)

echo -e "\\nOutside subshell:"
echo "Counter in main shell: $counter (unchanged!)"`,x=`#!/bin/bash
# Command grouping for I/O redirection in Ichapur logs

echo "=== Ichapur Server Monitoring ==="
LOG_FILE="/tmp/ichapur_monitor_$(date +%Y%m%d).log"

# Group commands to redirect all output to log file
{
    echo "Starting monitoring at $(date)"
    echo "=== System Information ==="
    uname -a
    echo -e "\\n=== Disk Usage ==="
    df -h
    echo -e "\\n=== Memory Usage ==="
    free -h
    echo -e "\\n=== Top Processes ==="
    ps aux --sort=-%cpu | head -10
    echo "Monitoring completed at $(date)"
} > "$LOG_FILE"

echo "All monitoring output saved to: $LOG_FILE"
echo "Log file size: $(wc -l < "$LOG_FILE") lines"

# Another example: Group with error redirection
echo -e "\\n=== Testing Command Grouping ==="
{
    echo "Starting test commands..."
    ls /tmp
    ls /nonexistent  # This will fail
    echo "More commands..."
} 2>&1 | tee /tmp/test_output.log

echo -e "\\nCheck /tmp/test_output.log for combined stdout/stderr"`,p=`#!/bin/bash
# Command grouping for variable persistence in Naihati

echo "=== Naihati Configuration Management ==="

# Initialize variables
config_loaded=false
config_version=""
services_running=0

# Group commands that update multiple variables together
{
    echo "Loading configuration..."
    
    # Simulate config loading
    config_loaded=true
    config_version="2.1.4"
    
    echo "Checking services..."
    
    # Count running services
    services_running=$(ps aux | grep -c "[s]ervice_")
    
    echo "Configuration loaded successfully"
}

# All variable changes persist
echo -e "\\nConfiguration Status:"
echo "Config loaded: $config_loaded"
echo "Config version: $config_version"
echo "Services running: $services_running"

# Example of grouping with conditional execution
echo -e "\\n=== Conditional Command Group ==="

if { 
    echo "Checking prerequisites..."
    [ -f "/etc/config.txt" ] && 
    [ -x "/usr/bin/processor" ] && 
    [ "$(id -u)" -eq 0 ]
}; then
    echo "All prerequisites met!"
else
    echo "Missing prerequisites!" >&2
    exit 1
fi`,b=`#!/bin/bash
# Side-by-side comparison of subshell vs grouping

echo "=== File Processing Comparison: Subshell vs Grouping ==="

# Method 1: Using subshell (variables isolated)
echo -e "\\n1. Using Subshell ( ):"
file_count=0
total_size=0

(
    echo "  Inside subshell..."
    for file in /etc/*.conf; do
        if [ -f "$file" ]; then
            file_count=$((file_count + 1))
            size=$(stat -c%s "$file" 2>/dev/null || echo "0")
            total_size=$((total_size + size))
        fi
    done
    echo "  Subshell counted: $file_count files"
    echo "  Subshell total size: $total_size bytes"
)

echo "  Outside subshell:"
echo "  Main shell file_count: $file_count"
echo "  Main shell total_size: $total_size"

# Method 2: Using grouping (variables shared)
echo -e "\\n2. Using Grouping { }:"
file_count=0
total_size=0

{
    echo "  Inside command group..."
    for file in /etc/*.conf; do
        if [ -f "$file" ]; then
            file_count=$((file_count + 1))
            size=$(stat -c%s "$file" 2>/dev/null || echo "0")
            total_size=$((total_size + size))
        fi
    done
    echo "  Group counted: $file_count files"
    echo "  Group total size: $total_size bytes"
}

echo "  Outside group:"
echo "  Main shell file_count: $file_count"
echo "  Main shell total_size: $total_size"

# Summary
echo -e "\\n=== Summary ==="
echo "Subshell: Variables isolated - main shell values unchanged"
echo "Grouping: Variables shared - main shell values updated"
echo -e "\\nUse subshell when you want isolation"
echo "Use grouping when you want persistence"`,y=`#!/bin/bash
# Pipeline subshell behavior demonstration

echo "=== Pipeline Subshell Behavior ==="

echo -e "\\n1. Pipeline Creates Subshells:"
counter=0

# This pipeline creates subshells
seq 1 5 | while read num; do
    counter=$((counter + num))
    echo "  Inside pipeline: counter=$counter"
done

echo "  After pipeline: counter=$counter (UNCHANGED!)"

echo -e "\\n2. Avoiding Pipeline Subshells:"
counter=0

# Method 1: Process substitution
while read num; do
    counter=$((counter + num))
    echo "  Inside process substitution: counter=$counter"
done < <(seq 1 5)

echo "  After process substitution: counter=$counter (CHANGED!)"

echo -e "\\n3. Another Example with Command Substitution:"
counter=0

# Command substitution also creates subshell
result=$(
    counter=100
    echo "Inside command substitution: counter=$counter"
    echo "This is the result"
)

echo "Command substitution result: $result"
echo "After command substitution: counter=$counter (unchanged)"

echo -e "\\n4. Grouping Alternative:"
counter=0

# Using grouping to avoid subshell
{
    while read num; do
        counter=$((counter + num))
    done
} <<EOF
1
2
3
4
5
EOF

echo "After grouping with here-doc: counter=$counter (CHANGED!)"

echo -e "\\n=== Key Insight ==="
echo "Each pipe '|' creates a new subshell"
echo "Command substitution '$()' creates a subshell"
echo "Process substitution '<()' creates a subshell"
echo "Use grouping or here-docs to avoid unwanted subshells"`,N=()=>{const[r,c]=l.useState("subshell"),[t,i]=l.useState({subshell:{pid:"?",variables:"isolated",output:"Waiting..."},grouping:{pid:"?",variables:"shared",output:"Waiting..."}}),h=[{id:"subshell",name:"Subshell",description:"Commands executed in child process",syntax:"(command1; command2)",color:"from-blue-500 to-cyan-600",icon:"↻"},{id:"grouping",name:"Command Grouping",description:"Commands executed in current shell",syntax:"{ command1; command2; }",color:"from-green-500 to-emerald-600",icon:"{}"}],m=[{aspect:"Process ID",subshell:"Different PID (child process)",grouping:"Same PID (current shell)",explanation:"Subshells create new processes, grouping doesn't"},{aspect:"Variable Scope",subshell:"Variables isolated, changes lost",grouping:"Variables shared, changes persist",explanation:"Subshell cannot modify parent's variables"},{aspect:"Exit Status",subshell:"Last command's exit status",grouping:"Last command's exit status",explanation:"Both return exit status of last command"},{aspect:"Performance",subshell:"Slower (process creation)",grouping:"Faster (no process creation)",explanation:"Subshells have overhead of new process"},{aspect:"Use Cases",subshell:"Isolated environments, parallel execution",grouping:"Command grouping, I/O redirection",explanation:"Choose based on variable sharing needs"}],o=s=>{i(s==="subshell"?{...t,subshell:{pid:"$(sh -c 'echo $PPID')",variables:"count remains 1",output:"Variable changes isolated to subshell"}}:{...t,grouping:{pid:"$$",variables:"count becomes 2",output:"Variable changes persist in current shell"}})};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:"Subshells vs Command Grouping Using "}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Understand the crucial difference between executing commands in subshells (parentheses) and command grouping (braces). Master when to use each for variable scope control, performance optimization, and proper command execution."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Core Concepts"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:h.map((s,n)=>e.jsxs("button",{onClick:()=>c(s.id),className:d("p-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-left",r===s.id?`bg-gradient-to-r ${s.color} text-white shadow-lg`:"bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${n*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:d("w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-2xl font-bold",r===s.id?"bg-white/30":"bg-gray-100 dark:bg-gray-600"),children:s.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-xl",children:s.name}),e.jsx("div",{className:"text-sm opacity-90",children:s.description})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"text-sm font-medium mb-2",children:"Syntax:"}),e.jsx("code",{className:"block bg-black/20 dark:bg-white/20 p-3 rounded text-sm font-mono",children:s.syntax})]})]},s.id))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Subshell Demo"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-900 text-gray-100 p-3 rounded",children:`count=1
( count=2; echo "Subshell PID: $$" )
echo "Count: $count"`}),e.jsx("button",{onClick:()=>o("subshell"),className:"w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-all duration-300",children:"Run Subshell Example"}),e.jsx("div",{className:"p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"PID:"})," ",t.subshell.pid]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Variables:"})," ",t.subshell.variables]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Output:"})," ",t.subshell.output]})]})})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Grouping Demo"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-900 text-gray-100 p-3 rounded",children:`count=1
{ count=2; echo "Group PID: $$"; }
echo "Count: $count"`}),e.jsx("button",{onClick:()=>o("grouping"),className:"w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:opacity-90 transition-all duration-300",children:"Run Grouping Example"}),e.jsx("div",{className:"p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"PID:"})," ",t.grouping.pid]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Variables:"})," ",t.grouping.variables]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Output:"})," ",t.grouping.output]})]})})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Key Differences"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Aspect"}),e.jsx("th",{className:"px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider",children:"Subshell ( )"}),e.jsx("th",{className:"px-4 py-3 bg-green-50 dark:bg-green-900/20 text-left text-xs font-medium text-green-600 dark:text-green-300 uppercase tracking-wider",children:"Grouping "}),e.jsx("th",{className:"px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Explanation"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:m.map((s,n)=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200",style:{animationDelay:`${n*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsx("td",{className:"px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-300",children:s.aspect}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:s.subshell}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:s.grouping}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600 dark:text-gray-400",children:s.explanation})]},n))})]})}),e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Memory Aid"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Parentheses ( ) create a Parent Process"})," - New shell, isolated environment",e.jsx("br",{}),e.jsxs("strong",{children:["Braces "," Bind commands Together"]})," - Same shell, shared environment"]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Execution Flow Comparison"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-center mb-4",children:e.jsx("div",{className:"px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-semibold",children:"Subshell Execution"})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-700"}),[{step:1,text:"Parent Shell PID: 1234",color:"blue"},{step:2,text:"Fork → Child Shell PID: 1235",color:"cyan"},{step:3,text:"Execute commands in child",color:"cyan"},{step:4,text:"Child terminates",color:"cyan"},{step:5,text:"Parent continues (vars unchanged)",color:"blue"}].map((s,n)=>e.jsxs("div",{className:"relative flex items-center mb-6",children:[e.jsx("div",{className:`z-10 w-8 h-8 rounded-full bg-gradient-to-r from-${s.color}-500 to-${s.color}-600 flex items-center justify-center text-white font-bold`,children:s.step}),e.jsx("div",{className:"ml-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow flex-1",children:e.jsx("div",{className:"text-gray-800 dark:text-gray-300",children:s.text})})]},n))]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-center mb-4",children:e.jsx("div",{className:"px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold",children:"Grouping Execution"})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 dark:bg-green-700"}),[{step:1,text:"Current Shell PID: 1234",color:"green"},{step:2,text:"Execute command group",color:"green"},{step:3,text:"Variables modified directly",color:"green"},{step:4,text:"Continue execution",color:"green"},{step:5,text:"All changes persist",color:"green"}].map((s,n)=>e.jsxs("div",{className:"relative flex items-center mb-6",children:[e.jsx("div",{className:`z-10 w-8 h-8 rounded-full bg-gradient-to-r from-${s.color}-500 to-${s.color}-600 flex items-center justify-center text-white font-bold`,children:s.step}),e.jsx("div",{className:"ml-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow flex-1",children:e.jsx("div",{className:"text-gray-800 dark:text-gray-300",children:s.text})})]},n))]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Subshell: Isolated Environment"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Environment Isolation"})]}),e.jsx(a,{fileModule:g,title:"Temporary directory changes in Barrackpore project",highlightLines:[5,6,7,8,9]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs to run commands in a different directory without affecting the current shell's working directory. Subshell isolates the `cd` command."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Subshell: Variable Scope"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Scope Control"})]}),e.jsx(a,{fileModule:u,title:"Processing student data without side effects",highlightLines:[5,6,7,8,9,10,11,12]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina needs to process sensitive student data in Shyamnagar without accidentally modifying variables in the main script. Subshell provides isolation."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Grouping: I/O Redirection"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"I/O Management"})]}),e.jsx(a,{fileModule:x,title:"Redirecting multiple commands in Ichapur logs",highlightLines:[5,6,7,8,9]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Abhronila needs to redirect output from multiple commands to the same log file in Ichapur's monitoring system. Grouping ensures all output goes to the same destination."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Grouping: Variable Persistence"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"State Management"})]}),e.jsx(a,{fileModule:p,title:"Maintaining state across commands in Naihati",highlightLines:[5,6,7,8,9,10,11]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Debangshu needs to update multiple variables together in Naihati's configuration system. Grouping ensures all variable changes happen atomically in the same shell context."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Side-by-Side Comparison"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Same Task, Different Approaches"}),e.jsx(a,{fileModule:b,title:"Processing files with and without variable persistence",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Insight:"})," This comparison shows when to use each approach. Use subshells when you need isolation, grouping when you need to maintain state. The choice affects whether variable changes persist."]})})]})})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Pipelines & Subshells"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Pipeline Subshells"}),e.jsx(a,{fileModule:y,title:"Variable scope in pipeline commands",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Important:"})," Each command in a pipeline runs in its own subshell. This means variable assignments in pipelines don't persist. Use command grouping or alternative approaches when you need to preserve variable changes."]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Pipeline Problem"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`count=0
cat file.txt | while read line; do
    count=$((count + 1))
done
echo "Count: $count"  # Prints 0!`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"The `while` loop runs in a subshell, so `count` changes don't persist."})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Pipeline Solution"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`count=0
while read line; do
    count=$((count + 1))
done < file.txt
echo "Count: $count"  # Correct!`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Avoid pipeline to keep loop in current shell, or use process substitution."})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Unexpected Variable Loss"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Variable changes in subshells don't persist"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`config="default"
(
    config="modified"
    echo "Inside: $config"  # Prints "modified"
)
echo "Outside: $config"  # Prints "default" - SURPRISE!`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Use command grouping or return values from subshells"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Missing Space in Grouping"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Missing spaces around braces cause syntax errors"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`{echo "test";}  # ERROR: Missing space
{ echo "test"; } # CORRECT`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Braces must be surrounded by spaces and end with semicolon or newline"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Pipeline Variable Scope"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Variables in pipeline commands don't affect parent"]}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`count=0
seq 10 | while read num; do
    count=$((count + num))
done
echo "Total: $count"  # Prints 0!`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Use process substitution or avoid pipelines for variable accumulation"]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Use Subshells When..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"You need isolated environment for commands"}),e.jsx("li",{children:"Changing directory temporarily"}),e.jsx("li",{children:"Setting environment variables temporarily"}),e.jsx("li",{children:"Running commands in background"}),e.jsx("li",{children:"Parallel execution is needed"}),e.jsx("li",{children:"You want to capture command output without side effects"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance Considerations"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Subshells have process creation overhead"}),e.jsx("li",{children:"Avoid subshells in tight loops"}),e.jsx("li",{children:"Use grouping for performance-critical sections"}),e.jsx("li",{children:"Consider command substitution overhead"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Use Grouping When..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"You need to redirect I/O for multiple commands"}),e.jsx("li",{children:"Variable changes must persist"}),e.jsx("li",{children:"Commands must run in current shell context"}),e.jsx("li",{children:"Performance is critical"}),e.jsx("li",{children:"You need to apply redirection to command list"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Syntax Guidelines"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Subshells: `(commands)`"}),e.jsxs("li",{children:["Grouping: ","{ commands; }"," (note spaces and semicolon)"]}),e.jsx("li",{children:"Always test variable persistence assumptions"}),e.jsx("li",{children:"Use `set -x` to debug execution flow"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," When would you intentionally use a subshell to prevent variable pollution in your main script? Consider cleanup operations or temporary settings."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."})," The performance difference when using subshells in loops processing thousands of items vs using grouping. How would you measure this?"]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A script that uses pipelines to avoid subshell variable isolation. What alternative approaches could maintain variable state?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Subshells isolate, grouping shares variables"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Pipelines create implicit subshells"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Subshells have performance overhead"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Grouping needs spaces: `","`"]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_3.0s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Understanding subshells vs grouping is critical for professional shell scripting. In Barrackpore's production systems, I've debugged countless issues where variables mysteriously didn't update - almost always a subshell issue. Remember:",e.jsx("strong",{children:"Pipelines create implicit subshells"}),". This catches even experienced developers off guard. When in doubt, test variable persistence with a simple echo before and after."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:'When teaching Abhronila and Tuhina, I use the "sandbox vs workshop" analogy. Subshells are like a sandbox - you can play and make changes, but when you leave, everything resets. Grouping is like a workshop - changes you make stay until you clean up. Create simple test scripts that demonstrate variable persistence and have students predict the output before running. This builds intuitive understanding.'})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance Wisdom"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["In the Shyamnagar high-frequency monitoring system, we avoid subshells in performance-critical loops. Creating thousands of processes adds noticeable overhead. Instead, we use grouping and process substitution. However, for safety - like processing untrusted data in Naihati - we use subshells for isolation. The rule: ",e.jsx("strong",{children:"Grouping for performance, subshells for safety"}),". Profile your scripts with `time` to make informed decisions."]})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `})]})};export{N as default};

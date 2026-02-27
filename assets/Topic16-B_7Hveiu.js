import{j as e}from"./index-meFSU1Lv.js";import{S as r}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const n=`#!/bin/bash
# Basic redirection examples

echo "Basic Redirection Operators"
echo "==========================="

# Create a test directory
mkdir -p /tmp/redir_test
cd /tmp/redir_test

echo "1. Output Redirection (>):"
echo "--------------------------"
echo "Hello, World!" > output.txt
echo "File contents:"
cat output.txt

echo -e "\\n2. Append Redirection (>>):"
echo "------------------------------"
echo "Second line" >> output.txt
echo "Third line" >> output.txt
echo "File now contains:"
cat output.txt

echo -e "\\n3. Error Redirection (2>):"
echo "-----------------------------"
ls /nonexistent 2> error.log
echo "Error log contents:"
cat error.log

echo -e "\\n4. Input Redirection (<):"
echo "----------------------------"
cat > input.txt << EOF
Apple
Banana
Cherry
Date
EOF
echo "Sorting input from file:"
sort < input.txt

echo -e "\\n5. Here Document (<<):"
echo "------------------------"
wc -l << EOF
Line 1
Line 2
Line 3
Line 4
Line 5
EOF

echo -e "\\n6. Discarding Output:"
echo "----------------------"
echo "This message won't appear" > /dev/null
echo "Check if message was discarded:"
ls /tmp/redir_test > /dev/null && echo "Command succeeded (output discarded)"

# Cleanup
cd ..
rm -rf /tmp/redir_test`,o=`#!/bin/bash
# Advanced redirection techniques

echo "Advanced Redirection Patterns"
echo "============================="

# Create test directory
mkdir -p /tmp/adv_redir
cd /tmp/adv_redir

echo "1. Redirect Both stdout and stderr (&>):"
echo "----------------------------------------"
ls . /nonexistent &> both.log
echo "Both stdout and stderr in same file:"
cat both.log

echo -e "\\n2. Redirect stderr to stdout (2>&1):"
echo "---------------------------------------"
ls . /nonexistent > combined.log 2>&1
echo "Combined output (traditional method):"
cat combined.log

echo -e "\\n3. Pipe Both stdout and stderr (|&):"
echo "--------------------------------------"
ls . /nonexistent |& grep "ls:" | head -2

echo -e "\\n4. Redirect to Multiple Files with tee:"
echo "-----------------------------------------"
echo "Testing tee command" | tee tee1.log tee2.log
echo "tee1.log:"
cat tee1.log
echo "tee2.log:"
cat tee2.log

echo -e "\\n5. Grouping Commands for Single Redirection:"
echo "-----------------------------------------------"
{
    echo "Start of group"
    ls .
    echo "Middle of group"
    ls /nonexistent
    echo "End of group"
} > group_output.log 2>&1
echo "Group output (last 5 lines):"
tail -5 group_output.log

echo -e "\\n6. Using exec for Permanent Redirection:"
echo "------------------------------------------"
exec 3> custom_fd.log
echo "This goes to file descriptor 3" >&3
echo "This also goes to fd 3" >&3
exec 3>&-  # Close fd 3
echo "custom_fd.log contents:"
cat custom_fd.log

# Cleanup
cd ..
rm -rf /tmp/adv_redir`,a=`#!/bin/bash
# Using tee to split output streams

echo "The tee Command: Split Output Streams"
echo "======================================"

# Create test directory
mkdir -p /tmp/tee_test
cd /tmp/tee_test

echo "1. Basic tee usage:"
echo "-------------------"
echo "Original command output:"
ls -la /etc/passwd /etc/group /nonexistent
echo -e "\\nWith tee (errors to stderr still visible):"
ls -la /etc/passwd /etc/group /nonexistent 2>&1 | tee output.log
echo -e "\\nSaved to output.log:"
cat output.log

echo -e "\\n2. Append mode (tee -a):"
echo "--------------------------"
echo "First line" | tee append.log
echo "Second line" | tee -a append.log
echo "Third line" | tee -a append.log
echo "append.log contents:"
cat append.log

echo -e "\\n3. Debugging pipeline with tee:"
echo "----------------------------------"
echo "Data processing pipeline:"
cat << 'EOF' | tee raw_data.log | grep "ERROR" | tee errors.log | wc -l
2024-01-15 INFO: System started
2024-01-15 ERROR: Disk space low
2024-01-15 WARN: High memory usage
2024-01-15 ERROR: Database connection failed
2024-01-15 INFO: Backup completed
EOF
echo -e "\\nRaw data saved in raw_data.log"
echo "Errors saved in errors.log:"
cat errors.log

echo -e "\\n4. Multiple tee commands:"
echo "---------------------------"
echo "Processing data through multiple stages:" | tee stage1.log | \\
    sed 's/Processing/Transforming/' | tee stage2.log | \\
    awk '{print toupper($0)}' | tee stage3.log
echo -e "\\nStage 1:" && cat stage1.log
echo "Stage 2:" && cat stage2.log
echo "Stage 3:" && cat stage3.log

# Cleanup
cd ..
rm -rf /tmp/tee_test`,i=`#!/bin/bash
# Process substitution examples

echo "Process Substitution: <() and >()"
echo "================================="

# Create test files
mkdir -p /tmp/psub_test
cd /tmp/psub_test

cat > file1.txt << EOF
apple
orange
banana
grape
EOF

cat > file2.txt << EOF
banana
grape
kiwi
mango
EOF

echo "1. Compare sorted output of two commands:"
echo "-----------------------------------------"
echo "File1:" && cat file1.txt
echo -e "\\nFile2:" && cat file2.txt
echo -e "\\nCommon lines (intersection):"
comm -12 <(sort file1.txt) <(sort file2.txt)

echo -e "\\n2. Feed command output as file input:"
echo "----------------------------------------"
echo "Using wc on sorted version of file:"
wc -l <(sort file1.txt)
echo "Note: wc sees it as a file!"

echo -e "\\n3. Multiple process substitutions:"
echo "-------------------------------------"
echo "Differences between sorted files:"
diff <(sort file1.txt) <(sort file2.txt)

echo -e "\\n4. Output process substitution:"
echo "----------------------------------"
echo "Sending output to multiple processors:"
echo "test data" > >(grep -o "test") > >(wc -w) > /dev/null
# Note: The above runs in background, need to wait
sleep 0.1

echo -e "\\n5. Real-world example: Find unique users in logs"
echo "---------------------------------------------------"
cat << 'EOF' > log1.txt
user1 logged in
user2 logged in
user1 performed action
user3 logged in
EOF

cat << 'EOF' > log2.txt
user2 logged in
user3 performed action
user4 logged in
user1 logged out
EOF

echo "Log1 users:" && awk '{print $1}' log1.txt | sort -u
echo -e "\\nLog2 users:" && awk '{print $1}' log2.txt | sort -u
echo -e "\\nUsers in either log:"
sort -u <(awk '{print $1}' log1.txt) <(awk '{print $1}' log2.txt)

# Cleanup
cd ..
rm -rf /tmp/psub_test`,l=`#!/bin/bash
# Complete production pipeline with redirection

echo "Production Pipeline with Full Redirection"
echo "========================================="

# Simulate a production log processing script
process_logs() {
    local input_log="$1"
    local output_dir="$2"
    
    echo "Processing: $input_log"
    echo "Output directory: $output_dir"
    echo "================================="
    
    # Create output directory
    mkdir -p "$output_dir"
    
    # Start processing with full error handling and logging
    {
        echo "=== Starting log processing at $(date) ==="
        
        # Extract unique IP addresses with counts
        echo -e "\\n1. Top 10 IP addresses:"
        awk '{print $1}' "$input_log" | \\
            sort | \\
            uniq -c | \\
            sort -rn | \\
            head -10 | \\
            tee "$output_dir/top_ips.txt"
        
        # Extract HTTP status codes
        echo -e "\\n2. HTTP status code distribution:"
        awk '{print $9}' "$input_log" | \\
            grep -E '^[0-9]{3}$' | \\
            sort | \\
            uniq -c | \\
            sort -rn | \\
            tee "$output_dir/status_codes.txt"
        
        # Find error pages (4xx and 5xx)
        echo -e "\\n3. Error pages (4xx and 5xx):"
        awk '$9 ~ /^[45][0-9]{2}$/ {print $7}' "$input_log" | \\
            sort | \\
            uniq -c | \\
            sort -rn | \\
            head -5 | \\
            tee "$output_dir/error_pages.txt"
        
        # Calculate request rate per hour
        echo -e "\\n4. Requests per hour:"
        awk '{print $4}' "$input_log" | \\
            cut -d: -f1,2 | \\
            sort | \\
            uniq -c | \\
            tee "$output_dir/requests_per_hour.txt"
        
        echo -e "\\n=== Processing completed at $(date) ==="
        
    } > "$output_dir/processing.log" 2> "$output_dir/errors.log"
    
    # Summary
    echo -e "\\nProcessing Summary:"
    echo "-------------------"
    echo "Main log: $output_dir/processing.log ($(wc -l < "$output_dir/processing.log") lines)"
    echo "Error log: $output_dir/errors.log ($(wc -l < "$output_dir/errors.log") lines)"
    
    if [ -s "$output_dir/errors.log" ]; then
        echo -e "\\nErrors found (last 5 lines):"
        tail -5 "$output_dir/errors.log"
    else
        echo -e "\\nNo errors encountered."
    fi
}

# Create sample log data
mkdir -p /tmp/prod_logs
cat > /tmp/prod_logs/access.log << 'EOF'
192.168.1.1 - - [15/Jan/2024:10:30:45 +0530] "GET /index.html HTTP/1.1" 200 1234
203.0.113.5 - - [15/Jan/2024:10:31:22 +0530] "GET /about.html HTTP/1.1" 200 5678
192.168.1.1 - - [15/Jan/2024:10:32:15 +0530] "POST /login HTTP/1.1" 302 2345
198.51.100.23 - - [15/Jan/2024:10:33:01 +0530] "GET /contact.html HTTP/1.1" 404 3456
192.168.1.1 - - [15/Jan/2024:10:34:18 +0530] "GET /products.html HTTP/1.1" 200 4567
203.0.113.5 - - [15/Jan/2024:10:35:42 +0530] "GET /index.html HTTP/1.1" 200 1234
192.168.1.1 - - [15/Jan/2024:10:36:09 +0530] "GET /about.html HTTP/1.1" 200 5678
203.0.113.5 - - [15/Jan/2024:10:37:33 +0530] "GET /contact.html HTTP/1.1" 500 3456
192.168.1.1 - - [15/Jan/2024:10:38:56 +0530] "POST /logout HTTP/1.1" 302 2345
198.51.100.23 - - [15/Jan/2024:10:39:12 +0530] "GET /products.html HTTP/1.1" 200 4567
EOF

# Run the pipeline
process_logs "/tmp/prod_logs/access.log" "/tmp/prod_logs/output"

# Show results
echo -e "\\nGenerated Files:"
echo "----------------"
ls -la /tmp/prod_logs/output/

# Cleanup
rm -rf /tmp/prod_logs`,h=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 p-6 md:p-8 lg:p-12 font-sans dark",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-12 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-rose-900/20 to-sky-900/20 rounded-3xl blur-xl"}),e.jsxs("div",{className:`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 \r
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-900/30 \r
                    animate-[fadeIn_0.8s_ease-out]`,style:{animation:"fadeIn 0.8s ease-out"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-rose-600 to-sky-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-rose-400 to-sky-400 bg-clip-text text-transparent",children:"Topic 16: Text Processing with Pipes & Redirection"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Mastering UNIX I/O Streams: stdin, stdout, stderr"})]})]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Core Concept"}),e.jsx("p",{className:"text-sm",children:"Controlling where command input/output goes"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-sky-300 mb-2",children:"Key Operators"}),e.jsx("p",{className:"text-sm",children:">, >>, <, |, 2>, &>, >>, <<"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-blue-300 mb-2",children:"Real-World Use"}),e.jsx("p",{className:"text-sm",children:"Logging, data pipelines, automation scripts"})]})]})]})]}),e.jsx("style",{children:`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes staggerItem {
                    0% { opacity: 0; transform: translateX(-10px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes flowAnimation {
                    0% { stroke-dashoffset: 20; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes pulseArrow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-rose-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Understanding UNIX Streams"]}),e.jsxs("div",{className:"space-y-6 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Every UNIX process has three standard streams:",e.jsx("span",{className:"text-rose-300",children:" stdin (0)"})," for input,",e.jsx("span",{className:"text-sky-300",children:" stdout (1)"})," for normal output, and",e.jsx("span",{className:"text-amber-300",children:" stderr (2)"})," for error messages. Redirection controls where these streams go."]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border-l-4 border-sky-500",children:[e.jsx("h3",{className:"font-bold text-sky-300 mb-3",children:"Why Redirection Matters"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{icon:"📁",title:"Save Output",desc:"Store results in files for later use"},{icon:"📝",title:"Log Management",desc:"Separate logs from normal output"},{icon:"⚡",title:"Automation",desc:"Scripts that run without interaction"},{icon:"🔀",title:"Data Flow",desc:"Control where data goes in pipelines"},{icon:"🚫",title:"Error Handling",desc:"Capture and process error messages"},{icon:"🔄",title:"Feedback Loops",desc:"Output becomes input for other commands"}].map((s,t)=>e.jsxs("div",{className:"bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-colors duration-300 hover:scale-[1.02]",style:{animationDelay:`${t*.1}s`},children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-2xl",children:s.icon}),e.jsx("h4",{className:"font-bold text-rose-300",children:s.title})]}),e.jsx("p",{className:"text-sm text-gray-300",children:s.desc})]},t))})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-sky-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),"The Three Standard Streams"]}),e.jsxs("div",{className:"bg-gray-900/50 p-6 rounded-xl",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("svg",{width:"800",height:"320",className:"hover:scale-[1.02] transition-transform duration-500",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"stdinGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f43f5e",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#be185d",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"stdoutGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#0ea5e9",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#0369a1",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"stderrGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f59e0b",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#b45309",stopOpacity:1}})]}),e.jsx("marker",{id:"arrowHead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#0ea5e9"})})]}),e.jsx("rect",{x:"300",y:"100",width:"200",height:"120",rx:"15",fill:"#1e293b",stroke:"#475569",strokeWidth:"3"}),e.jsx("text",{x:"400",y:"140",textAnchor:"middle",fill:"#f8fafc",fontSize:"20",fontWeight:"bold",children:"Command"}),e.jsx("text",{x:"400",y:"170",textAnchor:"middle",fill:"#cbd5e1",fontSize:"14",children:"ls -la"}),e.jsx("path",{d:"M100,160 L300,160",fill:"none",stroke:"url(#stdinGradient)",strokeWidth:"4",strokeDasharray:"10,5",markerEnd:"url(#arrowHead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"15",dur:"2s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"50",y:"130",width:"50",height:"60",rx:"8",fill:"#881337",stroke:"#f43f5e",strokeWidth:"2",children:e.jsx("title",{children:"Standard Input (0)"})}),e.jsx("text",{x:"75",y:"160",textAnchor:"middle",fill:"#fda4af",fontSize:"14",fontWeight:"bold",children:"stdin"}),e.jsx("text",{x:"75",y:"180",textAnchor:"middle",fill:"#fda4af",fontSize:"10",children:"(0)"}),e.jsx("path",{d:"M500,160 L700,160",fill:"none",stroke:"url(#stdoutGradient)",strokeWidth:"4",strokeDasharray:"10,5",markerEnd:"url(#arrowHead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"15",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("rect",{x:"700",y:"130",width:"50",height:"60",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9",strokeWidth:"2",children:e.jsx("title",{children:"Standard Output (1)"})}),e.jsx("text",{x:"725",y:"160",textAnchor:"middle",fill:"#7dd3fc",fontSize:"14",fontWeight:"bold",children:"stdout"}),e.jsx("text",{x:"725",y:"180",textAnchor:"middle",fill:"#7dd3fc",fontSize:"10",children:"(1)"}),e.jsx("path",{d:"M500,200 L700,240",fill:"none",stroke:"url(#stderrGradient)",strokeWidth:"4",strokeDasharray:"10,5",markerEnd:"url(#arrowHead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"15",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("rect",{x:"700",y:"230",width:"50",height:"60",rx:"8",fill:"#78350f",stroke:"#f59e0b",strokeWidth:"2",children:e.jsx("title",{children:"Standard Error (2)"})}),e.jsx("text",{x:"725",y:"260",textAnchor:"middle",fill:"#fcd34d",fontSize:"14",fontWeight:"bold",children:"stderr"}),e.jsx("text",{x:"725",y:"280",textAnchor:"middle",fill:"#fcd34d",fontSize:"10",children:"(2)"}),e.jsxs("g",{transform:"translate(50, 250)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"60",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"2"}),e.jsx("text",{x:"150",y:"20",textAnchor:"middle",fill:"#f8fafc",fontSize:"14",fontWeight:"bold",children:"Redirection Operators"}),e.jsxs("g",{transform:"translate(20, 35)",children:[e.jsx("rect",{x:"0",y:"0",width:"20",height:"20",rx:"4",fill:"#881337"}),e.jsx("text",{x:"10",y:"14",textAnchor:"middle",fill:"#fda4af",fontSize:"10",children:"stdin"}),e.jsx("text",{x:"40",y:"14",textAnchor:"start",fill:"#cbd5e1",fontSize:"12",children:"<, <<"}),e.jsx("rect",{x:"80",y:"0",width:"20",height:"20",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"90",y:"14",textAnchor:"middle",fill:"#7dd3fc",fontSize:"10",children:"stdout"}),e.jsx("text",{x:"120",y:"14",textAnchor:"start",fill:"#cbd5e1",fontSize:"12",children:">, >>, |"}),e.jsx("rect",{x:"180",y:"0",width:"20",height:"20",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"190",y:"14",textAnchor:"middle",fill:"#fcd34d",fontSize:"10",children:"stderr"}),e.jsx("text",{x:"220",y:"14",textAnchor:"start",fill:"#cbd5e1",fontSize:"12",children:"2>, 2>>"})]})]}),e.jsxs("circle",{cx:"100",cy:"160",r:"6",fill:"#f43f5e",opacity:"0.8",children:[e.jsx("animate",{attributeName:"cx",from:"100",to:"300",dur:"3s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"3s",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"500",cy:"160",r:"6",fill:"#0ea5e9",opacity:"0.8",children:[e.jsx("animate",{attributeName:"cx",from:"500",to:"700",dur:"3s",repeatCount:"indefinite",begin:"1s"}),e.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"3s",repeatCount:"indefinite",begin:"1s"})]}),e.jsxs("circle",{cx:"500",cy:"200",r:"6",fill:"#f59e0b",opacity:"0.8",children:[e.jsx("animate",{attributeName:"cx",from:"500",to:"700",dur:"3s",repeatCount:"indefinite",begin:"2s"}),e.jsx("animate",{attributeName:"cy",from:"200",to:"240",dur:"3s",repeatCount:"indefinite",begin:"2s"}),e.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"3s",repeatCount:"indefinite",begin:"2s"})]})]})}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4 mt-6",children:[{stream:"stdin (0)",color:"rose",desc:"Standard Input - Keyboard or file input"},{stream:"stdout (1)",color:"sky",desc:"Standard Output - Normal program output"},{stream:"stderr (2)",color:"amber",desc:"Standard Error - Error messages"}].map((s,t)=>e.jsxs("div",{className:`p-4 bg-${s.color}-900/20 rounded-lg border border-${s.color}-700/50`,children:[e.jsx("h4",{className:`font-bold text-${s.color}-300 mb-2`,children:s.stream}),e.jsx("p",{className:"text-sm",children:s.desc})]},t))})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Basic Redirection Operators"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-rose-300",children:"Essential Redirection Patterns"}),e.jsx("span",{className:"px-3 py-1 bg-rose-900/50 text-rose-300 rounded-full text-sm font-semibold",children:">, >>, <, 2>"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Swadeep"})," needs to save command output to files, append to logs, and handle errors properly in his automation scripts:"]}),e.jsx(r,{fileModule:n,title:"Basic Redirection Examples",highlightLines:[]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-sky-300 mb-2",children:"Output Redirection:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:"command > file.txt"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Overwrite file with output"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:"command >> file.txt"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Append output to file"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:"command 2> error.log"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Redirect errors to file"})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-rose-300 mb-2",children:"Input Redirection:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:"command < input.txt"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Read input from file"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:'command << "EOF"'}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Here document - inline input"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm",children:"command1 | command2"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Pipe stdout to stdin"})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"Advanced Redirection Techniques"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-purple-300",children:"Professional Redirection Patterns"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg mb-6",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Real-World Challenge:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Abhronila"})," needs to run scripts that:"]}),e.jsxs("ul",{className:"text-xs text-gray-400 mt-2 space-y-1",children:[e.jsx("li",{children:"• Save both output AND errors to different files"}),e.jsx("li",{children:"• Discard error messages completely"}),e.jsx("li",{children:"• Send output to multiple places simultaneously"}),e.jsx("li",{children:"• Use output as input for other commands"})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Advanced Operators:"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-300 font-bold",children:"&"}),e.jsxs("span",{children:[e.jsx("code",{children:"&>"})," - Redirect both stdout and stderr"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-sky-300 font-bold",children:"|&"}),e.jsxs("span",{children:[e.jsx("code",{children:"|&"})," - Pipe both stdout and stderr"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300 font-bold",children:">&"}),e.jsxs("span",{children:[e.jsx("code",{children:"2>&1"})," - Redirect stderr to stdout"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-300 font-bold",children:">()"}),e.jsxs("span",{children:[e.jsx("code",{children:">(command)"})," - Process substitution"]})]})]})]})]}),e.jsxs("div",{children:[e.jsx(r,{fileModule:o,title:"Advanced Redirection Examples",highlightLines:[4,5,6,7,8,9,10,11]}),e.jsxs("div",{className:"mt-4 bg-purple-900/20 p-4 rounded-lg border border-purple-700/50",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-2",children:"Key Patterns:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"2>&1"}),' is read as "redirect file descriptor 2 (stderr) to where file descriptor 1 (stdout) currently goes"']})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"The Power of tee: Split Streams"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-300",children:"tee - T-shaped Pipe"}),e.jsx("span",{className:"px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold",children:"Split Output"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Tuhina"})," needs to both see output on screen AND save it to a file simultaneously for debugging her scripts:"]}),e.jsx(r,{fileModule:a,title:"Using tee for Output Splitting",highlightLines:[4,5,6,7,8,9]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-rose-300 mb-2",children:"tee file.txt"}),e.jsx("p",{className:"text-sm",children:"Save to file AND pass to next command"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"command | tee output.log"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-sky-300 mb-2",children:"tee -a"}),e.jsx("p",{className:"text-sm",children:"Append instead of overwrite"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"command | tee -a logfile"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-amber-300 mb-2",children:"tee /dev/tty"}),e.jsx("p",{className:"text-sm",children:"Force output to terminal"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"command | tee /dev/tty | wc -l"})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Debugging with tee:"}),e.jsxs("p",{className:"text-sm",children:["Use ",e.jsx("code",{children:"tee"})," in pipelines to save intermediate results. For example: ",e.jsx("code",{children:"grep pattern file | tee filtered.txt | wc -l"}),"saves filtered results while counting lines."]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Process Substitution: Next Level Redirection"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-300",children:"Treat Output as Files"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold",children:"<( ) and >( )"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Debangshu"})," needs to compare output of two commands or feed command output to tools that expect filenames:"]}),e.jsx(r,{fileModule:i,title:"Process Substitution Examples",highlightLines:[]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-rose-300 mb-2",children:"Input Substitution"}),e.jsx("code",{className:"text-sm block bg-gray-900 p-3 rounded mb-2",children:"diff <(sort file1) <(sort file2)"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Compare sorted versions without creating temporary files"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-sky-300 mb-2",children:"Output Substitution"}),e.jsx("code",{className:"text-sm block bg-gray-900 p-3 rounded mb-2",children:"command >(grep pattern) >(wc -l)"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Send output to multiple commands simultaneously"})]})]}),e.jsxs("div",{className:"bg-amber-900/20 p-4 rounded-lg border border-amber-700/50",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"How It Works:"}),e.jsxs("p",{className:"text-sm",children:["Bash creates a named pipe (FIFO) or uses ",e.jsx("code",{children:"/dev/fd"})," to make command output appear as a file. The command inside ",e.jsx("code",{children:"<( )"}),"runs, and its output is presented as a file path that the outer command can read."]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-amber-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Order Matters!"}),e.jsx("p",{className:"text-sm mb-2",children:"Redirection order affects results"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:"command 2>&1 > file.txt  # WRONG!"}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Correct order:"}),e.jsx("code",{className:"text-xs",children:"command > file.txt 2>&1"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Truncating Files"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:">"})," overwrites, ",e.jsx("code",{children:">>"})," appends"]}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:'echo "test" > file.txt  # Overwrites entire file!'})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Here Document Traps"}),e.jsx("p",{className:"text-sm",children:"Whitespace matters in here documents"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:`cat << EOF
                                        indented text
                                    EOF  # Includes indentation!`}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:"cat <<-EOF"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Pipe vs Redirect"}),e.jsx("p",{className:"text-sm",children:"Pipes connect processes, redirects connect to files"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:`echo "data" > grep "pattern"  # WRONG!
                                    echo "data" | grep "pattern"  # CORRECT`})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Professional Pipeline Patterns"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-rose-300",children:"Production-Grade Pipelines"}),e.jsx(r,{fileModule:l,title:"Complete Production Pipeline",highlightLines:[4,5,6,7,8,9,10,11,12]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Best Practices:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Always redirect stderr for production scripts"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"tee"})," for debugging complex pipelines"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Clean up temporary files with ",e.jsx("code",{children:"trap"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Use process substitution to avoid temp files"})]})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Performance Tips:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"&>"})," instead of ",e.jsx("code",{children:"> file 2>&1"})," for brevity"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:[e.jsx("code",{children:"/dev/null"})," discards output efficiently"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Group commands with ",e.jsx("code",{children:"{ }"})," for single redirection"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"exec"})," to redirect all subsequent output"]})]})]})]})]})]})]}),e.jsx("section",{className:`bg-gradient-to-br from-rose-900/30 to-sky-900/30 border border-rose-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-rose-900/30\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-rose-600 to-sky-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-rose-300",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("strong",{className:"text-sky-300",children:"Remember:"})," Redirection is about",e.jsx("span",{className:"text-yellow-300",children:" controlling data flow"}),". Think of",e.jsx("code",{children:">"})," and ",e.jsx("code",{children:"<"})," as arrows showing where data goes."]}),e.jsxs("div",{className:"bg-black/30 p-4 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-2",children:"Mental Model:"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-rose-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-rose-300",children:"→"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Output Redirection"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Command → File"}),e.jsx("code",{className:"text-xs",children:"ls > files.txt"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-sky-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sky-300",children:"←"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Input Redirection"}),e.jsx("p",{className:"text-sm text-gray-400",children:"File → Command"}),e.jsx("code",{className:"text-xs",children:"sort < data.txt"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-amber-300",children:"⇄"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Pipes"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Command → Command"}),e.jsx("code",{className:"text-xs",children:"ls | wc -l"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-purple-300",children:"↻"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Process Substitution"}),e.jsx("p",{className:"text-sm text-gray-400",children:'Command → "File" → Command'}),e.jsx("code",{className:"text-xs",children:"diff <(cmd1) <(cmd2)"})]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-gray-400",children:"27 years experience in UNIX Systems"}),e.jsx("p",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in | 7003756860"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Skills: Shell Scripting, I/O Redirection, System Automation"})})]})]})]})]})}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Redirection & Pipeline Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-rose-300",children:"Basic Operations"}),e.jsx("div",{className:"space-y-3",children:["> file - Overwrite file with output",">> file - Append output to file","< file - Read input from file","2> file - Redirect errors to file","| command - Pipe output to another command","&> file - Redirect both stdout and stderr"].map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-rose-900/50 rounded-full flex items-center justify-center group-hover:bg-rose-700 transition-colors duration-300",children:e.jsx("span",{className:"text-rose-300",children:t+1})}),e.jsx("code",{className:"text-sm",children:s})]},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-sky-300",children:"Advanced Techniques"}),e.jsx("div",{className:"space-y-3",children:["tee file - Save AND display output","2>&1 - Redirect stderr to stdout","<< EOF - Here document (multiline input)",">(cmd) - Process substitution output","<(cmd) - Process substitution input","exec > file - Redirect all subsequent output"].map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-sky-900/50 rounded-full flex items-center justify-center group-hover:bg-sky-700 transition-colors duration-300",children:e.jsx("span",{className:"text-sky-300",children:t+1})}),e.jsx("code",{className:"text-sm",children:s})]},t))})]})]})]}),e.jsxs("section",{className:`bg-gradient-to-br from-sky-900/20 to-rose-900/20 border border-sky-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-sky-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"1s"},children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-sky-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:['"If Swadeep runs ',e.jsx("code",{children:"command > file 2>&1"})," and",e.jsx("code",{children:"command 2>&1 > file"}),`, what's the difference in output?"`]})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"How would you create a pipeline that saves normal output to one file, errors to another, AND displays everything on screen simultaneously?"'})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:['"What happens when you redirect to ',e.jsx("code",{children:"/dev/null"})," vs",e.jsx("code",{children:"/dev/zero"})," vs ",e.jsx("code",{children:"/dev/random"}),'?"']})})]}),e.jsx("div",{className:"mt-6 p-4 bg-rose-900/20 border border-rose-700/50 rounded-lg",children:e.jsxs("p",{className:"text-rose-200",children:[e.jsx("strong",{children:"Hint:"})," Remember the order: redirection happens left to right.",e.jsx("code",{children:"2>&1 > file"}),' means "send stderr to current stdout (terminal), THEN redirect stdout to file". Test with: ',e.jsx("code",{children:"ls nofile > out 2>&1"}),"vs ",e.jsx("code",{children:"ls nofile 2>&1 > out"})]})})]})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Topic 16: Text Processing with Pipes and Redirection"}),e.jsx("p",{className:"mt-2",children:"Next Topic: Sorting and Filtering Output Using sort, uniq, wc"})]})})]});export{h as default};

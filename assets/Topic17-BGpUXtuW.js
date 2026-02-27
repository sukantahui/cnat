import{j as e}from"./index-meFSU1Lv.js";import{S as n}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const r=`#!/bin/bash
# sort command examples

echo "sort Command - Data Organization"
echo "================================"

# Create test data
cat > /tmp/products.txt << 'EOF'
Laptop 85000
Mouse 1200
Keyboard 2500
Monitor 22000
Tablet 45000
Mouse 1200
Laptop 85000
Headphones 3500
EOF

echo "1. Basic alphabetical sort:"
echo "---------------------------"
sort /tmp/products.txt

echo -e "\\n2. Reverse sort:"
echo "----------------"
sort -r /tmp/products.txt

echo -e "\\n3. Numerical sort by price (2nd column):"
echo "------------------------------------------"
sort -k2 -n /tmp/products.txt

echo -e "\\n4. Sort and remove duplicates:"
echo "---------------------------------"
sort -u /tmp/products.txt

echo -e "\\n5. Case-insensitive sort:"
echo "---------------------------"
cat > /tmp/case_test.txt << 'EOF'
apple
Banana
cherry
Date
EOF
echo "Before sort:" && cat /tmp/case_test.txt
echo "After sort -f:" && sort -f /tmp/case_test.txt

echo -e "\\n6. Sort by multiple columns:"
echo "------------------------------"
cat > /tmp/students.txt << 'EOF'
John Math 85
Alice Science 92
Bob Math 78
Alice Math 88
John Science 79
EOF
echo "Sort by name, then subject:"
sort -k1,1 -k2,2 /tmp/students.txt

# Cleanup
rm -f /tmp/products.txt /tmp/case_test.txt /tmp/students.txt`,a=`#!/bin/bash
# uniq command examples

echo "uniq Command - Deduplication & Counting"
echo "========================================"

# Create test data with duplicates
cat > /tmp/access_log.txt << 'EOF'
192.168.1.1
192.168.1.2
192.168.1.1
192.168.1.3
192.168.1.1
192.168.1.2
192.168.1.4
192.168.1.1
EOF

echo "1. Basic uniq (requires sorted input):"
echo "--------------------------------------"
echo "Raw data:" && cat /tmp/access_log.txt
echo -e "\\nAfter sort | uniq:"
sort /tmp/access_log.txt | uniq

echo -e "\\n2. Count occurrences (uniq -c):"
echo "---------------------------------"
sort /tmp/access_log.txt | uniq -c

echo -e "\\n3. Show only duplicates (uniq -d):"
echo "-------------------------------------"
sort /tmp/access_log.txt | uniq -d

echo -e "\\n4. Show only unique lines (uniq -u):"
echo "---------------------------------------"
sort /tmp/access_log.txt | uniq -u

echo -e "\\n5. Case-insensitive uniq:"
echo "---------------------------"
cat > /tmp/case_dup.txt << 'EOF'
Apple
apple
Banana
banana
Apple
cherry
EOF
echo "Data:" && cat /tmp/case_dup.txt
echo -e "\\nCase-insensitive uniq:"
sort -f /tmp/case_dup.txt | uniq -i

echo -e "\\n6. Real example: Find duplicate products"
echo "-------------------------------------------"
cat > /tmp/products.txt << 'EOF'
Laptop
Mouse
Keyboard
Laptop
Monitor
Mouse
Tablet
Mouse
EOF
echo "Products with counts:"
sort /tmp/products.txt | uniq -c

# Cleanup
rm -f /tmp/access_log.txt /tmp/case_dup.txt /tmp/products.txt`,o=`#!/bin/bash
# wc command examples

echo "wc Command - Counting Lines, Words, Characters"
echo "=============================================="

# Create test files
cat > /tmp/sample.txt << 'EOF'
The quick brown fox
jumps over the lazy dog
This is a test file
with multiple lines
for counting examples
EOF

echo "1. Basic wc (lines, words, characters):"
echo "---------------------------------------"
wc /tmp/sample.txt

echo -e "\\n2. Count lines only (wc -l):"
echo "------------------------------"
wc -l /tmp/sample.txt

echo -e "\\n3. Count words only (wc -w):"
echo "------------------------------"
wc -w /tmp/sample.txt

echo -e "\\n4. Count characters only (wc -c):"
echo "-----------------------------------"
wc -c /tmp/sample.txt

echo -e "\\n5. Count characters without newlines (wc -m):"
echo "-----------------------------------------------"
wc -m /tmp/sample.txt

echo -e "\\n6. Practical examples:"
echo "-----------------------"
echo "Count number of files in directory:"
ls /bin | wc -l

echo -e "\\nCount words in multiple files:"
cat > /tmp/file1.txt << 'EOF'
Hello world
This is file one
EOF
cat > /tmp/file2.txt << 'EOF'
This is file two
With more words
EOF
wc -w /tmp/file1.txt /tmp/file2.txt

echo -e "\\n7. Using wc in pipelines:"
echo "---------------------------"
echo "Count unique IPs in access log:"
cat > /tmp/access.log << 'EOF'
192.168.1.1
192.168.1.2
192.168.1.1
192.168.1.3
192.168.1.1
EOF
echo "Total entries:" && wc -l < /tmp/access.log
echo "Unique IPs:" && sort /tmp/access.log | uniq | wc -l

# Cleanup
rm -f /tmp/sample.txt /tmp/file1.txt /tmp/file2.txt /tmp/access.log`,l=`#!/bin/bash
# Combined pipeline examples

echo "Combined Pipelines: sort | uniq | wc"
echo "===================================="

# Create comprehensive test data
cat > /tmp/sales_data.txt << 'EOF'
2024-01-15,Laptop,Swadeep,85000
2024-01-15,Mouse,Tuhina,1200
2024-01-16,Laptop,Swadeep,85000
2024-01-16,Keyboard,Abhronila,2500
2024-01-16,Mouse,Debangshu,1200
2024-01-17,Monitor,Tuhina,22000
2024-01-17,Laptop,Swadeep,85000
2024-01-17,Mouse,Abhronila,1200
2024-01-18,Tablet,Debangshu,45000
2024-01-18,Mouse,Tuhina,1200
EOF

echo "1. Most common product sold:"
echo "---------------------------"
cut -d',' -f2 /tmp/sales_data.txt | sort | uniq -c | sort -rn

echo -e "\\n2. Sales count per customer:"
echo "------------------------------"
cut -d',' -f3 /tmp/sales_data.txt | sort | uniq -c | sort -rn

echo -e "\\n3. Daily sales count:"
echo "----------------------"
cut -d',' -f1 /tmp/sales_data.txt | sort | uniq -c

echo -e "\\n4. Total revenue by product:"
echo "------------------------------"
cat /tmp/sales_data.txt | while IFS=',' read date product customer price; do
    echo "$product,$price"
done | sort | awk -F',' '{arr[$1]+=$2} END {for (i in arr) print i, arr[i]}' | sort -k2 -nr

echo -e "\\n5. Complete analysis:"
echo "----------------------"
echo "Total transactions:" && wc -l < /tmp/sales_data.txt
echo -e "\\nUnique products:" && cut -d',' -f2 /tmp/sales_data.txt | sort -u | wc -l
echo -e "\\nUnique customers:" && cut -d',' -f3 /tmp/sales_data.txt | sort -u | wc -l

echo -e "\\n6. Finding duplicate entries:"
echo "-------------------------------"
echo "Checking for duplicate sales entries..."
sort /tmp/sales_data.txt | uniq -d

# Create log analysis example
cat > /tmp/server.log << 'EOF'
ERROR: Database connection failed
INFO: User login successful
WARN: High memory usage
ERROR: Database connection failed
INFO: Backup completed
ERROR: File not found
WARN: Disk space low
ERROR: Database connection failed
INFO: Cache cleared
EOF

echo -e "\\n7. Log file analysis:"
echo "----------------------"
echo "Error frequency:"
grep "ERROR" /tmp/server.log | sort | uniq -c | sort -rn
echo -e "\\nTotal log entries by type:"
cut -d':' -f1 /tmp/server.log | sort | uniq -c | sort -rn

# Cleanup
rm -f /tmp/sales_data.txt /tmp/server.log`,i=`#!/bin/bash
# Real-world analysis pipeline

echo "Real-World Analysis: Web Server Logs"
echo "===================================="

# Create realistic Apache access log
cat > /tmp/access.log << 'EOF'
192.168.1.105 - - [15/Jan/2024:10:30:45 +0530] "GET /index.html HTTP/1.1" 200 1234
203.0.113.42 - - [15/Jan/2024:10:31:22 +0530] "GET /about.html HTTP/1.1" 200 5678
192.168.1.105 - - [15/Jan/2024:10:32:15 +0530] "GET /contact.html HTTP/1.1" 200 3456
198.51.100.23 - - [15/Jan/2024:10:33:01 +0530] "GET /products.html HTTP/1.1" 200 4567
192.168.1.105 - - [15/Jan/2024:10:34:18 +0530] "GET /index.html HTTP/1.1" 200 1234
203.0.113.42 - - [15/Jan/2024:10:35:42 +0530] "GET /about.html HTTP/1.1" 404 234
192.168.1.105 - - [15/Jan/2024:10:36:09 +0530] "POST /login HTTP/1.1" 302 2345
198.51.100.23 - - [15/Jan/2024:10:37:33 +0530] "GET /contact.html HTTP/1.1" 200 3456
192.168.1.220 - - [15/Jan/2024:10:38:56 +0530] "GET /products.html HTTP/1.1" 200 4567
203.0.113.42 - - [15/Jan/2024:10:39:12 +0530] "GET /index.html HTTP/1.1" 200 1234
192.168.1.105 - - [15/Jan/2024:10:40:45 +0530] "GET /about.html HTTP/1.1" 200 5678
192.168.1.220 - - [15/Jan/2024:10:41:22 +0530] "GET /contact.html HTTP/1.1" 200 3456
192.168.1.105 - - [15/Jan/2024:10:42:15 +0530] "GET /products.html HTTP/1.1" 500 678
203.0.113.42 - - [15/Jan/2024:10:43:01 +0530] "POST /logout HTTP/1.1" 302 2345
EOF

echo "Analyzing web server access.log..."
echo "=================================="

echo "1. Total requests:"
echo "------------------"
wc -l < /tmp/access.log

echo -e "\\n2. Top 5 IP addresses:"
echo "----------------------"
awk '{print $1}' /tmp/access.log | sort | uniq -c | sort -rn | head -5

echo -e "\\n3. Most accessed pages:"
echo "-------------------------"
awk '{print $7}' /tmp/access.log | sort | uniq -c | sort -rn | head -5

echo -e "\\n4. HTTP status code distribution:"
echo "-----------------------------------"
awk '{print $9}' /tmp/access.log | sort | uniq -c | sort -rn

echo -e "\\n5. Requests per hour:"
echo "----------------------"
awk '{print $4}' /tmp/access.log | cut -d: -f1,2 | sort | uniq -c

echo -e "\\n6. Error analysis (4xx and 5xx):"
echo "----------------------------------"
awk '$9 ~ /^[45][0-9]{2}$/ {print $7 " - " $9}' /tmp/access.log | sort | uniq -c | sort -rn

echo -e "\\n7. Successful requests (2xx):"
echo "-------------------------------"
awk '$9 ~ /^2[0-9]{2}$/ {count++} END {print count}' /tmp/access.log

echo -e "\\n8. Busiest hour:"
echo "-----------------"
awk '{print $4}' /tmp/access.log | cut -d: -f1,2 | sort | uniq -c | sort -rn | head -1

# Create error log example
cat > /tmp/error.log << 'EOF'
[Wed Jan 15 10:30:45 2024] [error] [client 192.168.1.105] File does not exist: /var/www/favicon.ico
[Wed Jan 15 10:31:22 2024] [error] [client 203.0.113.42] PHP Warning: Invalid argument
[Wed Jan 15 10:32:15 2024] [error] [client 192.168.1.105] File does not exist: /var/www/robots.txt
[Wed Jan 15 10:33:01 2024] [error] [client 192.168.1.105] PHP Warning: Invalid argument
[Wed Jan 15 10:34:18 2024] [error] [client 198.51.100.23] File does not exist: /var/www/favicon.ico
[Wed Jan 15 10:35:42 2024] [error] [client 192.168.1.105] PHP Warning: Invalid argument
EOF

echo -e "\\n9. Error log analysis:"
echo "----------------------"
echo "Top error sources:"
grep -o 'client [0-9.]*' /tmp/error.log | cut -d' ' -f2 | sort | uniq -c | sort -rn
echo -e "\\nMost common error messages:"
grep -o '\\[error\\].*' /tmp/error.log | sed 's/\\[error\\]//' | sort | uniq -c | sort -rn

# Cleanup
rm -f /tmp/access.log /tmp/error.log`,x=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 p-6 md:p-8 lg:p-12 font-sans dark",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-12 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-teal-900/20 to-lime-900/20 rounded-3xl blur-xl"}),e.jsxs("div",{className:`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 \r
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/30 \r
                    animate-[fadeIn_0.8s_ease-out]`,style:{animation:"fadeIn 0.8s ease-out"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-teal-600 to-lime-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent",children:"Topic 17: Sorting & Filtering with sort, uniq, wc"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Data Organization, Deduplication, and Counting Essentials"})]})]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-teal-300 mb-2",children:"sort"}),e.jsx("p",{className:"text-sm",children:"Organize data alphabetically or numerically"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-lime-300 mb-2",children:"uniq"}),e.jsx("p",{className:"text-sm",children:"Remove duplicates and count occurrences"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-green-300 mb-2",children:"wc"}),e.jsx("p",{className:"text-sm",children:"Count lines, words, and characters"})]})]})]})]}),e.jsx("style",{children:`
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
                @keyframes pulseCount {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-teal-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"The Data Processing Trio"]}),e.jsxs("div",{className:"space-y-6 text-lg leading-relaxed",children:[e.jsxs("p",{children:["These three simple tools—",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"sort"}),",",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"uniq"}),", and",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"wc"}),"—form the backbone of UNIX data processing. They're often used together in pipelines to organize, clean, and analyze text data efficiently."]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border-l-4 border-lime-500",children:[e.jsx("h3",{className:"font-bold text-lime-300 mb-3",children:"Why These Tools Are Essential"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{icon:"📊",title:"Data Organization",desc:"Sort data for better analysis and presentation"},{icon:"🧹",title:"Data Cleaning",desc:"Remove duplicates and clean datasets"},{icon:"🔢",title:"Quick Statistics",desc:"Get basic counts and metrics instantly"},{icon:"⚡",title:"Lightweight",desc:"Process large files efficiently"},{icon:"🔗",title:"Pipeline Friendly",desc:"Combine seamlessly with other tools"},{icon:"🎯",title:"Simple Syntax",desc:"Easy to learn and remember"}].map((s,t)=>e.jsxs("div",{className:"bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-colors duration-300 hover:scale-[1.02]",style:{animationDelay:`${t*.1}s`},children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-2xl",children:s.icon}),e.jsx("h4",{className:"font-bold text-teal-300",children:s.title})]}),e.jsx("p",{className:"text-sm text-gray-300",children:s.desc})]},t))})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-lime-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),"How These Tools Transform Data"]}),e.jsxs("div",{className:"bg-gray-900/50 p-6 rounded-xl",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("svg",{width:"800",height:"320",className:"hover:scale-[1.02] transition-transform duration-500",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"sortGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#0d9488",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#059669",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"uniqGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#65a30d",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#4d7c0f",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"wcGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#16a34a",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#15803d",stopOpacity:1}})]}),e.jsx("marker",{id:"toolArrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#0d9488"})})]}),e.jsx("rect",{x:"50",y:"50",width:"150",height:"80",rx:"10",fill:"#1f2937",stroke:"#4b5563",strokeWidth:"2"}),e.jsx("text",{x:"125",y:"30",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontWeight:"bold",children:"Raw Data"}),e.jsx("text",{x:"125",y:"70",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",fontFamily:"monospace",children:"banana"}),e.jsx("text",{x:"125",y:"85",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",fontFamily:"monospace",children:"apple"}),e.jsx("text",{x:"125",y:"100",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",fontFamily:"monospace",children:"banana"}),e.jsx("path",{d:"M220,90 L270,90",fill:"none",stroke:"url(#sortGradient)",strokeWidth:"3",markerEnd:"url(#toolArrow)",strokeDasharray:"5,3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"8",dur:"2s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"270",y:"50",width:"100",height:"80",rx:"10",fill:"#134e4a",stroke:"#0d9488",strokeWidth:"2",className:"hover:stroke-teal-400 transition-colors duration-300",children:e.jsx("title",{children:"sort - Organizes data"})}),e.jsx("text",{x:"320",y:"70",textAnchor:"middle",fill:"#5eead4",fontSize:"14",fontWeight:"bold",children:"sort"}),e.jsx("text",{x:"320",y:"95",textAnchor:"middle",fill:"#a7f3d0",fontSize:"11",children:"Alphabetical/Numeric"}),e.jsx("path",{d:"M380,90 L430,90",fill:"none",stroke:"url(#uniqGradient)",strokeWidth:"3",markerEnd:"url(#toolArrow)",strokeDasharray:"5,3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"8",dur:"2s",repeatCount:"indefinite",begin:"0.3s"})}),e.jsx("rect",{x:"430",y:"50",width:"100",height:"80",rx:"10",fill:"#14532d",stroke:"#65a30d",strokeWidth:"2",className:"hover:stroke-lime-400 transition-colors duration-300",children:e.jsx("title",{children:"uniq - Removes duplicates"})}),e.jsx("text",{x:"480",y:"70",textAnchor:"middle",fill:"#a3e635",fontSize:"14",fontWeight:"bold",children:"uniq"}),e.jsx("text",{x:"480",y:"95",textAnchor:"middle",fill:"#d9f99d",fontSize:"11",children:"Deduplicate & Count"}),e.jsx("path",{d:"M540,90 L590,90",fill:"none",stroke:"url(#wcGradient)",strokeWidth:"3",markerEnd:"url(#toolArrow)",strokeDasharray:"5,3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"8",dur:"2s",repeatCount:"indefinite",begin:"0.6s"})}),e.jsx("rect",{x:"590",y:"50",width:"100",height:"80",rx:"10",fill:"#052e16",stroke:"#16a34a",strokeWidth:"2",className:"hover:stroke-green-400 transition-colors duration-300",children:e.jsx("title",{children:"wc - Counts elements"})}),e.jsx("text",{x:"640",y:"70",textAnchor:"middle",fill:"#4ade80",fontSize:"14",fontWeight:"bold",children:"wc"}),e.jsx("text",{x:"640",y:"95",textAnchor:"middle",fill:"#86efac",fontSize:"11",children:"Lines, Words, Chars"}),e.jsxs("g",{transform:"translate(50, 150)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"40",rx:"5",fill:"#374151",stroke:"#6b7280",strokeWidth:"1"}),e.jsx("text",{x:"75",y:"15",textAnchor:"middle",fill:"#d1d5db",fontSize:"11",fontWeight:"bold",children:"Input"}),e.jsx("text",{x:"75",y:"30",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",fontFamily:"monospace",children:"banana\\napple\\nbanana"}),e.jsx("rect",{x:"220",y:"0",width:"100",height:"40",rx:"5",fill:"#0f766e",stroke:"#14b8a6",strokeWidth:"1"}),e.jsx("text",{x:"270",y:"15",textAnchor:"middle",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"After sort"}),e.jsx("text",{x:"270",y:"30",textAnchor:"middle",fill:"#5eead4",fontSize:"10",fontFamily:"monospace",children:"apple\\nbanana\\nbanana"}),e.jsx("rect",{x:"380",y:"0",width:"100",height:"40",rx:"5",fill:"#166534",stroke:"#22c55e",strokeWidth:"1"}),e.jsx("text",{x:"430",y:"15",textAnchor:"middle",fill:"#bbf7d0",fontSize:"11",fontWeight:"bold",children:"After uniq"}),e.jsx("text",{x:"430",y:"30",textAnchor:"middle",fill:"#86efac",fontSize:"10",fontFamily:"monospace",children:"apple\\nbanana"}),e.jsx("rect",{x:"540",y:"0",width:"100",height:"40",rx:"5",fill:"#14532d",stroke:"#4ade80",strokeWidth:"1"}),e.jsx("text",{x:"590",y:"15",textAnchor:"middle",fill:"#86efac",fontSize:"11",fontWeight:"bold",children:"After wc -l"}),e.jsx("text",{x:"590",y:"30",textAnchor:"middle",fill:"#4ade80",fontSize:"10",fontFamily:"monospace",children:"2"})]}),e.jsx("rect",{x:"700",y:"50",width:"50",height:"80",rx:"10",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"725",y:"70",textAnchor:"middle",fill:"#93c5fd",fontSize:"14",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"725",y:"95",textAnchor:"middle",fill:"#bfdbfe",fontSize:"11",children:"Result"}),e.jsxs("circle",{cx:"640",cy:"140",r:"15",fill:"#16a34a",opacity:"0.7",children:[e.jsx("animate",{attributeName:"r",values:"15;20;15",dur:"2s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"640",y:"145",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"2"})]})}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4 mt-6",children:[{tool:"sort",color:"teal",desc:"Organizes lines of text alphabetically or numerically"},{tool:"uniq",color:"lime",desc:"Removes consecutive duplicate lines (requires sorted input)"},{tool:"wc",color:"green",desc:"Counts lines, words, and characters in input"}].map((s,t)=>e.jsxs("div",{className:`p-4 bg-${s.color}-900/20 rounded-lg border border-${s.color}-700/50`,children:[e.jsx("h4",{className:`font-bold text-${s.color}-300 mb-2`,children:s.tool}),e.jsx("p",{className:"text-sm",children:s.desc})]},t))})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Mastering the sort Command"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-teal-300",children:"sort: Data Organization Powerhouse"}),e.jsx("span",{className:"px-3 py-1 bg-teal-900/50 text-teal-300 rounded-full text-sm font-semibold",children:"Alphabetical & Numerical"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Swadeep"})," needs to organize product lists, student grades, and log entries for his store in Naihati:"]}),e.jsx(n,{fileModule:r,title:"sort Command Examples",highlightLines:[4,5,6,7,8,9,10,11]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lime-300 mb-2",children:"Common sort Options:"}),e.jsx("div",{className:"space-y-3",children:[{opt:"-r",desc:"Reverse sort order (descending)"},{opt:"-n",desc:"Numeric sort (not alphabetical)"},{opt:"-k N",desc:"Sort by column N (1-indexed)"},{opt:"-u",desc:"Unique - output only first of equal lines"},{opt:"-f",desc:"Case-insensitive sort"},{opt:"-t','",desc:"Use comma as field separator"}].map((s,t)=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm text-teal-300",children:s.opt}),e.jsx("span",{className:"text-xs text-gray-400",children:s.desc})]},t))})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Real-World Examples:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"sort -nr"})," - Sort numbers in descending order"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"sort -t':' -k3 -n"})," - Sort by 3rd colon-separated field numerically"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"sort -u"})," - Sort and remove duplicates in one pass"]})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"The uniq Command: Deduplication Master"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-purple-300",children:"Understanding uniq"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg mb-6",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"CRITICAL:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"uniq"})," only removes ",e.jsx("span",{className:"text-yellow-300",children:"consecutive"})," duplicate lines. You must ",e.jsx("code",{children:"sort"})," first for complete deduplication!"]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Common uniq Options:"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-lime-300 font-bold",children:"-c"}),e.jsx("span",{children:"Count occurrences of each line"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-lime-300 font-bold",children:"-d"}),e.jsx("span",{children:"Only show duplicate lines"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-lime-300 font-bold",children:"-u"}),e.jsx("span",{children:"Only show unique lines (non-duplicates)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-lime-300 font-bold",children:"-i"}),e.jsx("span",{children:"Case-insensitive comparison"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(n,{fileModule:a,title:"uniq Command Examples",highlightLines:[4,5,6,7,8,9,10]}),e.jsxs("div",{className:"mt-4 bg-purple-900/20 p-4 rounded-lg border border-purple-700/50",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-2",children:"Key Insight:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"uniq -c"})," is one of the most powerful combinations. It adds a count column showing how many times each line appeared consecutively."]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"wc: Word Count and Beyond"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-300",children:"Counting Made Simple"}),e.jsx("span",{className:"px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold",children:"Lines, Words, Characters"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Abhronila"})," at Barrackpore College needs to count student submissions, analyze essay lengths, and monitor log file sizes:"]}),e.jsx(n,{fileModule:o,title:"wc Command Examples",highlightLines:[4,5,6,7,8,9]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-teal-300 mb-2",children:"wc -l"}),e.jsx("p",{className:"text-sm",children:"Count lines"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"cat file | wc -l"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-lime-300 mb-2",children:"wc -w"}),e.jsx("p",{className:"text-sm",children:"Count words"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:'echo "hello world" | wc -w'})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-green-300 mb-2",children:"wc -c"}),e.jsx("p",{className:"text-sm",children:"Count characters"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:'echo "test" | wc -c'})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Pro Tip:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"wc"})," without options shows all three counts:",e.jsx("span",{className:"text-teal-300",children:" lines"}),",",e.jsx("span",{className:"text-lime-300",children:" words"}),", and",e.jsx("span",{className:"text-green-300",children:" characters"}),". Use specific flags when you need just one count."]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Power Combinations"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-300",children:"Classic UNIX Pipeline Patterns"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold",children:"sort | uniq | wc"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Tuhina"}),", the school administrator in Shyamnagar, needs to analyze student data and generate reports using combined tools:"]}),e.jsx(n,{fileModule:l,title:"Combined Pipeline Examples",highlightLines:[4,5,6,7,8,9,10,11,12]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-teal-300 mb-2",children:"Most Common Pipeline:"}),e.jsx("code",{className:"text-sm block bg-gray-900 p-3 rounded mb-2",children:"sort file | uniq -c | sort -nr"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Sort, count occurrences, then sort by count (descending)"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lime-300 mb-2",children:"Quick Analysis:"}),e.jsx("code",{className:"text-sm block bg-gray-900 p-3 rounded mb-2",children:"cat file | wc -l && sort file | uniq | wc -l"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Count total lines and count unique lines"})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-red-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"uniq Without sort"}),e.jsx("p",{className:"text-sm mb-2",children:"Expecting uniq to remove all duplicates"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:'echo -e "a\\\\nb\\\\na" | uniq # Output: a, b, a (not deduplicated!)'}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:'echo -e "a\\\\nb\\\\na" | sort | uniq'})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Wrong Column Sorting"}),e.jsx("p",{className:"text-sm",children:"Not specifying column for tabular data"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:"sort data.csv  # Sorts by first column only"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Alphabetical vs Numeric"}),e.jsx("p",{className:"text-sm mb-2",children:"Using default sort on numbers"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:`echo -e "10\\n2\\n100" | sort
                                    # Output: 10, 100, 2 (alphabetical!)`}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:'echo -e "10\\\\n2\\\\n100" | sort -n'})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"wc Count Includes Filename"}),e.jsx("p",{className:"text-sm",children:"wc output includes filename when given argument"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:`wc -l file.txt  # Output: "3 file.txt"
                                    wc -l < file.txt  # Output: "3" (no filename)`})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Professional Tips & Real-World Use"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-teal-300",children:"Production Analysis"}),e.jsx(n,{fileModule:i,title:"Real-World Log Analysis Pipeline",highlightLines:[]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Pro Tips:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Use <code>sort -u</code> instead of <code>sort | uniq</code> for simple deduplication"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"wc -l"})," is great for counting files: ",e.jsx("code",{children:"ls | wc -l"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Combine with ",e.jsx("code",{children:"find"}),": ",e.jsx("code",{children:'find . -name "*.log" | wc -l'})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"sort -rnk2"})," to sort by second column numerically in reverse"]})]})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Performance Tips:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:[e.jsx("code",{children:"sort"})," can handle very large files with ",e.jsx("code",{children:"-S"})," (buffer size)"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"LC_ALL=C"})," before sort for faster ASCII sorting"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:[e.jsx("code",{children:"wc"})," is extremely fast even on multi-gigabyte files"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Pipe to ",e.jsx("code",{children:"head"})," or ",e.jsx("code",{children:"tail"})," to limit output"]})]})]})]})]})]})]}),e.jsx("section",{className:`bg-gradient-to-br from-teal-900/30 to-lime-900/30 border border-teal-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-teal-900/30\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-teal-600 to-lime-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-teal-300",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("strong",{className:"text-lime-300",children:"Remember:"})," These three tools are the",e.jsx("span",{className:"text-yellow-300",children:" Swiss Army knife"})," of data analysis. Master them, and you can solve 80% of text processing problems."]}),e.jsxs("div",{className:"bg-black/30 p-4 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-2",children:"Mental Model:"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-teal-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-teal-300",children:"⇅"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"sort first"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Always sort before uniq"}),e.jsx("code",{className:"text-xs",children:"sort | uniq"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-lime-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-lime-300",children:"🔢"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Count with -c"}),e.jsx("p",{className:"text-sm text-gray-400",children:"uniq -c adds counts"}),e.jsx("code",{className:"text-xs",children:"uniq -c"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-green-300",children:"📊"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"wc for metrics"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Quick line/word counts"}),e.jsx("code",{className:"text-xs",children:"wc -l"})]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-gray-400",children:"27 years experience in Data Analysis"}),e.jsx("p",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in | 7003756860"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Skills: Data Processing, Log Analysis, Statistics"})})]})]})]})]})}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Essential Commands Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-teal-300",children:"Command Options"}),e.jsx("div",{className:"space-y-3",children:["sort -n: Numerical sort","sort -r: Reverse order","sort -u: Unique (sort & deduplicate)","uniq -c: Count occurrences","uniq -d: Show duplicates only","wc -l: Count lines","wc -w: Count words","wc -c: Count characters"].map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-teal-900/50 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-colors duration-300",children:e.jsx("span",{className:"text-teal-300",children:t+1})}),e.jsx("code",{className:"text-sm",children:s})]},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-lime-300",children:"Common Pipelines"}),e.jsx("div",{className:"space-y-3",children:["sort file | uniq: Remove duplicates","sort file | uniq -c | sort -nr: Frequency analysis","wc -l file: Count lines in file","sort -t',' -k2 -n: Sort CSV by 2nd column","uniq -c | sort -rn: Count and sort by frequency","find . -name '*.txt' | wc -l: Count matching files","cat file | wc -w: Count words in file","sort | uniq -d: Find duplicate lines"].map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-lime-900/50 rounded-full flex items-center justify-center group-hover:bg-lime-700 transition-colors duration-300",children:e.jsx("span",{className:"text-lime-300",children:t+1})}),e.jsx("code",{className:"text-sm",children:s})]},t))})]})]})]}),e.jsxs("section",{className:`bg-gradient-to-br from-lime-900/20 to-teal-900/20 border border-lime-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-lime-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"1s"},children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-lime-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"If Swadeep has a log file with timestamps, how can he count how many entries occurred each hour using only sort, uniq, and wc?"'})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:[`"What's the difference between `,e.jsx("code",{children:"sort -u"})," and",e.jsx("code",{children:"sort | uniq"}),'? When would you use one over the other?"']})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"How would you find the most common word in a text file using only these three commands and basic shell tools?"'})})]}),e.jsx("div",{className:"mt-6 p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg",children:e.jsxs("p",{className:"text-teal-200",children:[e.jsx("strong",{children:"Hint:"})," Remember that ",e.jsx("code",{children:"uniq"})," works on consecutive lines. For timestamp analysis: extract the hour field, sort, then ",e.jsx("code",{children:"uniq -c"}),". For word frequency: convert to one word per line, sort, then ",e.jsx("code",{children:"uniq -c | sort -nr"}),"."]})})]})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Topic 17: Sorting and Filtering Output Using sort, uniq, wc"}),e.jsx("p",{className:"mt-2",children:"Next Topic: Log File Analysis Using grep and awk"})]})})]});export{x as default};

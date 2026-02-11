import{r as o,j as e}from"./index-D1bhWpF_.js";import{c as t}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const d=`#!/bin/bash
# Topic 24: Basic Server Access Log Analysis - Part 1
# Traffic Volume Analysis

echo "=== Basic Traffic Analysis ==="
echo ""

# 1. Total number of requests
echo "1. TOTAL REQUESTS:"
wc -l access.log | awk '{print "   Total lines (requests):", $1}'
echo ""

# 2. Requests per hour (peak traffic analysis)
echo "2. REQUESTS PER HOUR (Peak Traffic):"
echo "   Time  |  Count"
echo "   --------------"
awk -F: '{print $2":00"}' access.log | sort | uniq -c | sort -rn | head -10 | \\
  awk '{printf "   %-7s|  %-6s\\n", $2, $1}'
echo ""

# 3. Unique IP addresses (visitors)
echo "3. UNIQUE VISITORS:"
awk '{print $1}' access.log | sort -u | wc -l | \\
  awk '{print "   Unique IP addresses:", $1}'
echo ""

# 4. Busiest hour summary
echo "4. BUSIEST HOUR SUMMARY:"
awk -F: '{print $2":00"}' access.log | sort | uniq -c | sort -rn | head -1 | \\
  awk '{print "   Peak hour:", $2, "with", $1, "requests"}'
echo ""

# 5. Daily request trend
echo "5. DAILY REQUEST TREND:"
echo "   Date       |  Requests"
echo "   --------------------"
awk -F'[' '{print $2}' access.log | cut -d: -f1 | sort | uniq -c | \\
  awk '{printf "   %-10s|  %-6s\\n", $2, $1}'`,c=`#!/bin/bash
# Topic 24: Basic Server Access Log Analysis - Part 2
# Page Popularity Analysis

echo "=== Page Popularity Analysis ==="
echo ""

# 1. Most requested pages (URLs)
echo "1. TOP 10 MOST REQUESTED PAGES:"
echo "   Count | URL"
echo "   -----------------------------"
awk '{print $7}' access.log | sort | uniq -c | sort -rn | head -10 | \\
  awk '{printf "   %-6s| %s\\n", $1, $2}'
echo ""

# 2. Most common HTTP methods
echo "2. HTTP METHODS DISTRIBUTION:"
awk -F'"' '{print $2}' access.log | awk '{print $1}' | sort | uniq -c | sort -rn | \\
  awk '{printf "   %-4s: %-6s requests\\n", $2, $1}'
echo ""

# 3. File extensions requested
echo "3. FILE EXTENSION ANALYSIS:"
awk '{print $7}' access.log | grep -o '\\.[a-zA-Z0-9]*$' | sort | uniq -c | sort -rn | \\
  awk '{printf "   %-6s %-10s\\n", $1, $2}'
echo ""

# 4. Top referrers (if using combined log format)
echo "4. TOP REFERRERS:"
awk -F'"' '{print $4}' access.log | sort | uniq -c | sort -rn | head -5 | \\
  awk '{printf "   %-6s %s\\n", $1, $2}'
echo ""

# 5. User agents analysis (simplified)
echo "5. BROWSER/CLIENT ANALYSIS:"
awk -F'"' '{print $6}' access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -5 | \\
  awk '{printf "   %-6s %s\\n", $1, $2}'`,x=`#!/bin/bash
# Topic 24: Error Pattern Detection
# Monitoring 4xx and 5xx Status Codes

echo "=== Error Pattern Analysis ==="
echo ""

# 1. Total error count
echo "1. ERROR SUMMARY:"
echo "   Type  | Count | Percentage"
echo "   ---------------------------"
total=$(wc -l < access.log)
errors_4xx=$(awk '$9 ~ /^4[0-9][0-9]$/ {count++} END {print count}' access.log)
errors_5xx=$(awk '$9 ~ /^5[0-9][0-9]$/ {count++} END {print count}' access.log)
all_errors=$((errors_4xx + errors_5xx))

printf "   4xx   | %-6s| %.1f%%\\n" "$errors_4xx" $(echo "scale=1; $errors_4xx * 100 / $total" | bc)
printf "   5xx   | %-6s| %.1f%%\\n" "$errors_5xx" $(echo "scale=1; $errors_5xx * 100 / $total" | bc)
printf "   Total | %-6s| %.1f%%\\n" "$all_errors" $(echo "scale=1; $all_errors * 100 / $total" | bc)
echo ""

# 2. Most common error pages (404s)
echo "2. TOP 404 ERRORS (Page Not Found):"
echo "   Count | URL"
echo "   -----------------------------"
awk '$9 == 404 {print $7}' access.log | sort | uniq -c | sort -rn | head -10 | \\
  awk '{printf "   %-6s| %s\\n", $1, $2}'
echo ""

# 3. Error codes distribution
echo "3. ERROR CODES DISTRIBUTION:"
awk '$9 >= 400 && $9 < 600 {print $9}' access.log | sort | uniq -c | sort -rn | \\
  awk '{printf "   %-3s: %-6s occurrences\\n", $2, $1}'
echo ""

# 4. IPs causing most errors
echo "4. IPS WITH MOST ERRORS:"
echo "   Count | IP Address"
echo "   --------------------"
awk '$9 >= 400 && $9 < 600 {print $1}' access.log | sort | uniq -c | sort -rn | head -10 | \\
  awk '{printf "   %-6s| %s\\n", $1, $2}'
echo ""

# 5. Error trends by hour
echo "5. ERROR TREND BY HOUR:"
echo "   Hour  | 4xx | 5xx"
echo "   -----------------"
for hour in {00..23}; do
    count_4xx=$(awk -v hour=$hour -F: '$2 == hour && $9 ~ /^4[0-9][0-9]$/ {count++} END {print count+0}' access.log)
    count_5xx=$(awk -v hour=$hour -F: '$2 == hour && $9 ~ /^5[0-9][0-9]$/ {count++} END {print count+0}' access.log)
    if [ $count_4xx -gt 0 ] || [ $count_5xx -gt 0 ]; then
        printf "   %-5s | %-4s | %-4s\\n" "\${hour}:00" "$count_4xx" "$count_5xx"
    fi
done`,m=`#!/bin/bash
# Topic 24: Bandwidth Consumption Analysis
# Calculate total bandwidth usage by file type

echo "=== Bandwidth Usage Analysis ==="
echo ""

# 1. Total bandwidth consumed
echo "1. TOTAL BANDWIDTH CONSUMED:"
total_bytes=$(awk '{sum += $10} END {print sum}' access.log)
total_mb=$(echo "scale=2; $total_bytes / 1048576" | bc)
echo "   Total data transferred: $total_mb MB"
echo ""

# 2. Bandwidth by file extension
echo "2. BANDWIDTH BY FILE TYPE:"
echo "   Type     | Size (MB) | % of Total"
echo "   ---------------------------------"
awk '
{
    # Extract file extension
    if (match($7, /\\.[a-zA-Z0-9]+$/)) {
        ext = substr($7, RSTART, RLENGTH)
    } else {
        ext = "no_ext"
    }
    bytes[ext] += $10
    total += $10
}
END {
    for (ext in bytes) {
        mb = bytes[ext] / 1048576
        percentage = (bytes[ext] / total) * 100
        printf "   %-9s| %-9.2f | %.1f%%\\n", ext, mb, percentage
    }
}' access.log | sort -rnk2
echo ""

# 3. Largest files served
echo "3. LARGEST FILES SERVED:"
echo "   Size (KB) | URL"
echo "   -----------------------------"
awk '{printf "%d %s\\n", $10/1024, $7}' access.log | sort -rn | head -10 | \\
  awk '{printf "   %-10s| %s\\n", $1, substr($0, index($0,$2))}'
echo ""

# 4. Bandwidth by hour
echo "4. BANDWIDTH USAGE BY HOUR:"
echo "   Hour   | MB Transferred"
echo "   -----------------------"
awk -F: '{bytes[$2] += $NF} END {
    for (hour in bytes) {
        mb = bytes[hour] / 1048576
        printf "   %-6s | %.2f MB\\n", hour ":00", mb
    }
}' access.log | sort
echo ""

# 5. Average file size
echo "5. AVERAGE FILE SIZE STATISTICS:"
awk '$10 > 0 {
    count++
    sum += $10
    if ($10 > max) max = $10
    if (count == 1) min = $10
    if ($10 < min) min = $10
}
END {
    avg = sum / count
    print "   Average file size: " int(avg/1024) " KB"
    print "   Largest file: " int(max/1024) " KB"
    print "   Smallest file: " int(min/1024) " KB"
    print "   Total files served: " count
}' access.log`,b=()=>{const[n,i]=o.useState(0),l=[{id:0,title:"Log Format Understanding",description:"Apache/Nginx access log structure"},{id:1,title:"Traffic Analysis",description:"Request counts, peak hours, popular pages"},{id:2,title:"Error Monitoring",description:"4xx and 5xx status codes analysis"},{id:3,title:"Security Insights",description:"Suspicious activities detection"},{id:4,title:"Performance Metrics",description:"Response times, bandwidth usage"}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-500",children:[e.jsx("section",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out]",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6 animate-[slideInLeft_0.6s_ease-out]",children:e.jsx("span",{className:"text-sm font-semibold text-blue-700 dark:text-blue-300",children:"Mini Project 02"})}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight",children:"Server Access Log Analysis"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl",children:"A practical project to analyze web server logs using grep, awk, and sed for real-world insights"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[{label:"Lines Analyzed",value:"10M+",color:"bg-green-100 dark:bg-green-900/30",text:"text-green-700 dark:text-green-300"},{label:"Tools Used",value:"5",color:"bg-purple-100 dark:bg-purple-900/30",text:"text-purple-700 dark:text-purple-300"},{label:"Key Metrics",value:"12",color:"bg-orange-100 dark:bg-orange-900/30",text:"text-orange-700 dark:text-orange-300"},{label:"Complexity",value:"Intermediate",color:"bg-red-100 dark:bg-red-900/30",text:"text-red-700 dark:text-red-300"}].map((s,a)=>e.jsxs("div",{className:t("p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl",s.color,"animate-[fadeInUp_0.8s_ease-out]"),style:{animationDelay:`${a*100}ms`},children:[e.jsx("div",{className:"text-3xl font-bold mb-2 dark:text-white",children:s.value}),e.jsx("div",{className:t("text-sm font-medium",s.text),children:s.label})]},a))})]})}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.9s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Project Scenario"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Imagine:"})," Debangshu manages the school's web server at Barrackpore. The server logs have grown to 2GB. He needs to extract insights without specialized tools. Using command-line utilities, he'll analyze:"]}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300 pl-5",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Peak traffic hours to optimize server resources"]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Most popular content to guide website improvements"]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Error patterns (404s, 500s) for troubleshooting"]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Suspicious activities (brute force attempts)"]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_1s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Understanding Access Log Format"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg",children:e.jsxs("code",{className:"text-sm text-gray-800 dark:text-gray-200 block whitespace-pre-wrap",children:['127.0.0.1 - - [10/Oct/2024:15:32:45 +0530] "GET /about.html HTTP/1.1" 200 2326',e.jsx("br",{}),'192.168.1.100 - abhronila [10/Oct/2024:15:32:46 +0530] "POST /login.php HTTP/1.1" 302 498',e.jsx("br",{}),'203.0.113.5 - - [10/Oct/2024:15:32:47 +0530] "GET /admin.php HTTP/1.1" 403 1271']})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4 mb-6",children:[{label:"Client IP",color:"bg-blue-100 dark:bg-blue-900/30"},{label:"Timestamp",color:"bg-green-100 dark:bg-green-900/30"},{label:"HTTP Method",color:"bg-yellow-100 dark:bg-yellow-900/30"},{label:"Status Code",color:"bg-red-100 dark:bg-red-900/30"},{label:"Bytes Sent",color:"bg-purple-100 dark:bg-purple-900/30"}].map((s,a)=>e.jsx("div",{className:t("p-3 rounded-lg text-center transition-transform duration-300 hover:scale-105",s.color),children:e.jsx("span",{className:"text-sm font-medium text-gray-800 dark:text-gray-200",children:s.label})},a))}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200",children:"Common Log Formats"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-sm font-bold text-green-600 dark:text-green-400",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200",children:"Common Log Format (CLF)"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:'%h %l %u %t "%r" %s %b'})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-sm font-bold text-blue-600 dark:text-blue-400",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200",children:"Combined Log Format"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Adds Referrer and User-Agent"})]})]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.1s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Step-by-Step Analysis"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"1"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Traffic Volume Analysis"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Count total requests, analyze hourly patterns, identify peak traffic times"}),e.jsx(r,{fileModule:d,title:"Basic Traffic Analysis",highlightLines:[1,4,7]})]}),e.jsxs("div",{className:"p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-lg",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"2"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Popular Content & Pages"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Find most accessed URLs, identify broken links, optimize content strategy"}),e.jsx(r,{fileModule:c,title:"Page Popularity Analysis",highlightLines:[2,5,8]})]}),e.jsxs("div",{className:"p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 rounded-r-lg",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"3"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Error Monitoring"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Detect 4xx client errors and 5xx server errors for quick troubleshooting"}),e.jsx(r,{fileModule:x,title:"Error Pattern Detection",highlightLines:[1,4,7]})]})]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Project Steps"}),e.jsx("div",{className:"space-y-3",children:l.map((s,a)=>e.jsx("button",{onClick:()=>i(s.id),className:t("w-full text-left p-4 rounded-xl transition-all duration-300 transform",n===s.id?"bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 scale-[1.02]":"bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:scale-[1.01]"),style:{animationDelay:`${a*100}ms`},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:t("w-8 h-8 rounded-full flex items-center justify-center mr-3",n===s.id?"bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"),children:e.jsx("span",{className:"font-bold",children:s.id+1})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:s.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:s.description})]})]})},s.id))})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_0.9s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Advanced Metrics"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-300 mb-2",children:"Bandwidth Consumption"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Calculate total bandwidth usage by file type"}),e.jsx(r,{fileModule:m,title:"Bandwidth Analysis",highlightLines:[2,5,9]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-semibold text-cyan-700 dark:text-cyan-300 mb-2",children:"Security Analysis"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Detect brute force attacks and suspicious IPs"}),e.jsxs("div",{className:"mt-3 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("code",{className:"block p-2 bg-gray-900 text-gray-100 rounded mb-2",children:`grep "POST /login" access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -10`}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Shows IPs with most login attempts"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_1s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Real-world Application"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-300 mb-2",children:"Tuhina's E-commerce Site"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Used log analysis to identify that 40% of 404 errors came from old product URLs. Implemented redirects, improving user experience by 35%."})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300 mb-2",children:"Shyamnagar School Portal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Discovered peak traffic at 10 AM daily. Scheduled server maintenance at 2 AM, reducing downtime complaints by 90%."})]})]})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.1s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-rose-600 dark:text-rose-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Common Pitfalls & Solutions"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-rose-700 dark:text-rose-300",children:"Beginner Mistakes"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-rose-500 mr-2",children:"✗"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Not checking log format before writing patterns"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-rose-500 mr-2",children:"✗"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Forgetting to escape special characters in URLs"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-rose-500 mr-2",children:"✗"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Analyzing incomplete log files (rotated logs)"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-rose-500 mr-2",children:"✗"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Ignoring timezone differences in timestamps"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-700 dark:text-green-300",children:"Pro Tips"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"zcat"})," for compressed logs"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Combine logs with ",e.jsx("code",{children:"cat access.log* | grep"})]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Cache results: ",e.jsx("code",{children:"analysis.sh | tee results.txt"})]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"LC_ALL=C"})," for faster grep on ASCII logs"]})]})]})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.2s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Data Validation"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Always verify log format and sample data before full analysis. Check for anomalies."})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Performance"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Use pipe chains efficiently. Sort and unique operations should come after filtering."})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-purple-600 dark:text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Documentation"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Create reusable scripts with clear comments. Maintain analysis history for trend comparison."})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_1.3s_ease-out]",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center",children:e.jsx("span",{className:"text-xl font-bold text-white",children:"SH"})})}),e.jsxs("div",{className:"ml-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Sukanta Hui • 27 years experience • sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Remember This"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"When Abhronila first analyzed logs, she only counted requests. But real value comes from patterns: Why do errors spike at 3 PM? Why does one IP access only login pages? Think beyond counts to causality."})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Pro Insight"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"In production, combine commands into scripts. For example, a daily report script that emails you top errors and suspicious activities. This transforms analysis from reactive to proactive monitoring."})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Classroom Tip"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Start with small log samples from Naihati school's server. Gradually increase complexity. Debug each pipeline step separately before chaining. Use ",e.jsx("code",{children:"tee"})," to inspect intermediate results."]})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.4s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Think About This..."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-6",children:[e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("h3",{className:"font-semibold text-indigo-700 dark:text-indigo-300 mb-2",children:"Pattern Recognition"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"If you see 10 failed logins from same IP, it's suspicious. But what if they're spaced 30 minutes apart? Does that change your assessment?"})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("h3",{className:"font-semibold text-indigo-700 dark:text-indigo-300 mb-2",children:"Data Correlation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"High traffic and high errors often correlate. But what if errors increase while traffic decreases? What could that indicate about your server health?"})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.5s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Project Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4",children:["✓ Understand log format structure","✓ Count total requests and unique visitors","✓ Identify top 10 requested pages","✓ Detect 4xx and 5xx error patterns","✓ Find peak traffic hours","✓ Calculate bandwidth usage","✓ Identify suspicious activities","✓ Create summary report"].map((s,a)=>e.jsxs("div",{className:"flex items-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md",style:{animationDelay:`${a*100}ms`},children:[e.jsx("span",{className:"text-green-500 mr-3",children:"●"}),e.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:s})]},a))}),e.jsxs("div",{className:"mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-cyan-700 dark:text-cyan-300 mb-2",children:"Next Steps Challenge"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Now try combining all analyses into a single script that generates a daily report. Format it for email with clear sections. Add alerting for critical errors exceeding threshold."})]})]})]}),e.jsxs("footer",{className:"mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Mini Project: Server Access Log Analysis • Topic 24 • Command Line Text Processing"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 mt-2",children:"Apply these techniques to analyze your own server logs. Start with small files, validate results, then scale up."})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[fadeInUp_0\\.8s_ease-out\\],
                    .animate-\\[slideInLeft_0\\.6s_ease-out\\],
                    .animate-\\[fadeInUp_0\\.9s_ease-out\\],
                    .animate-\\[fadeInUp_1s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.1s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.2s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.3s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.4s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.5s_ease-out\\] {
                        animation: none !important;
                    }
                }
            `})]})};export{b as default};

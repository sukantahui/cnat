import{j as e}from"./index-Do7ncMju.js";import{S as n}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const t=`#!/bin/bash
# Sum aggregation example - Sales data
# Data: Product, Quantity, Price

echo "Sales Total Calculator"
echo "======================"

awk '
BEGIN {
    total_sales = 0
    printf("%-15s %10s %12s %12s\\n", "Product", "Quantity", "Price", "Subtotal")
    printf("%-15s %10s %12s %12s\\n", "-------", "--------", "-----", "--------")
}
{
    subtotal = $2 * $3
    total_sales += subtotal  # Accumulate running total
    
    printf("%-15s %10d ₹%10.2f ₹%10.2f\\n", $1, $2, $3, subtotal)
}
END {
    printf("\\n%-15s %10s %12s %12s\\n", "", "", "", "-----------")
    printf("%-15s %10s %12s ₹%10.2f\\n", "TOTAL SALES", "", "", total_sales)
}
' << 'EOF'
Laptop 5 45999.99
Mouse 25 849.50
Keyboard 12 1299.00
Monitor 8 15499.75
EOF`,r=`#!/bin/bash
# Average calculation - Student marks
# Data: StudentName, Marks

echo "Class Average Calculator - Barrackpore School"
echo "=============================================="

awk '
BEGIN {
    sum = 0
    count = 0
    printf("%-20s %10s\\n", "Student", "Marks")
    printf("%-20s %10s\\n", "-------", "-----")
}
{
    printf("%-20s %10d\\n", $1, $2)
    sum += $2      # Add to running sum
    count++        # Increment count
}
END {
    if (count > 0) {
        average = sum / count
        printf("\\n%-20s %10s\\n", "---------------", "----------")
        printf("%-20s %10d\\n", "Total Students:", count)
        printf("%-20s %10d\\n", "Sum of Marks:", sum)
        printf("%-20s %10.2f\\n", "Class Average:", average)
    } else {
        print "No data found"
    }
}
' << 'EOF'
Abhronila 85
Swadeep 92
Tuhina 78
Debangshu 65
Rohit 88
Priya 95
EOF`,i=`#!/bin/bash
# Min/Max calculation - Temperature data
# Data: City, Temperature

echo "Temperature Extremes - Ichapur Weather Station"
echo "=============================================="

awk '
BEGIN {
    # Initialize with unrealistic values
    min_temp = 1000   # Very high initial value
    max_temp = -1000  # Very low initial value
    min_city = ""
    max_city = ""
    
    printf("%-15s %12s\\n", "City", "Temperature")
    printf("%-15s %12s\\n", "----", "-----------")
}
{
    temp = $2
    printf("%-15s %10.1f°C\\n", $1, temp)
    
    # Update minimum
    if (temp < min_temp) {
        min_temp = temp
        min_city = $1
    }
    
    # Update maximum
    if (temp > max_temp) {
        max_temp = temp
        max_city = $1
    }
}
END {
    printf("\\n%-15s %12s\\n", "------------", "-----------")
    printf("%-15s %10.1f°C (%s)\\n", "Minimum:", min_temp, min_city)
    printf("%-15s %10.1f°C (%s)\\n", "Maximum:", max_temp, max_city)
    printf("%-15s %10.1f°C\\n", "Range:", max_temp - min_temp)
}
' << 'EOF'
Kolkata 32.5
Delhi 41.2
Mumbai 35.8
Chennai 38.4
Shillong 24.6
Jaipur 39.8
EOF`,l=`#!/bin/bash
# Comprehensive aggregation - All statistics
# Data: Student, Physics, Chemistry, Maths

echo "Complete Student Performance Analysis"
echo "====================================="

awk '
BEGIN {
    # Initialize all aggregation variables
    phys_sum = chem_sum = math_sum = 0
    phys_min = chem_min = math_min = 100  # Start with perfect score
    phys_max = chem_max = math_max = 0    # Start with zero
    count = 0
    
    printf("%-12s %8s %8s %8s %8s\\n", "Student", "Physics", "Chem", "Maths", "Total")
    printf("%-12s %8s %8s %8s %8s\\n", "-------", "-------", "----", "-----", "-----")
}
{
    total = $2 + $3 + $4
    count++
    
    # Update sums
    phys_sum += $2
    chem_sum += $3
    math_sum += $4
    
    # Update minimums
    if ($2 < phys_min) phys_min = $2
    if ($3 < chem_min) chem_min = $3
    if ($4 < math_min) math_min = $4
    
    # Update maximums
    if ($2 > phys_max) phys_max = $2
    if ($3 > chem_max) chem_max = $3
    if ($4 > math_max) math_max = $4
    
    printf("%-12s %8.1f %8.1f %8.1f %8.1f\\n", $1, $2, $3, $4, total)
}
END {
    if (count > 0) {
        phys_avg = phys_sum / count
        chem_avg = chem_sum / count
        math_avg = math_sum / count
        overall_avg = (phys_avg + chem_avg + math_avg) / 3
        
        printf("\\n%-12s %8s %8s %8s\\n", "STATISTICS", "Physics", "Chem", "Maths")
        printf("%-12s %8s %8s %8s\\n", "----------", "-------", "----", "-----")
        printf("%-12s %8.1f %8.1f %8.1f\\n", "Average:", phys_avg, chem_avg, math_avg)
        printf("%-12s %8.1f %8.1f %8.1f\\n", "Minimum:", phys_min, chem_min, math_min)
        printf("%-12s %8.1f %8.1f %8.1f\\n", "Maximum:", phys_max, chem_max, math_max)
        printf("\\n%-12s %8.1f\\n", "Overall Avg:", overall_avg)
        printf("%-12s %8d\\n", "Students:", count)
    }
}
' << 'EOF'
Tuhina 85 78 92
Swadeep 92 88 95
Abhronila 78 82 75
Debangshu 65 72 68
Priya 88 85 90
Rohit 75 79 82
EOF`,o=`#!/bin/bash
# Group-wise aggregation example
# Data: Class, Student, Marks

echo "Group-wise Average by Class"
echo "============================"

awk '
BEGIN {
    printf("%-10s %-15s %10s\\n", "Class", "Student", "Marks")
    printf("%-10s %-15s %10s\\n", "-----", "-------", "-----")
    
    # Variables for current group
    current_class = ""
    class_sum = 0
    class_count = 0
}
{
    # Check if class changed
    if (current_class != "" && current_class != $1) {
        # Print statistics for previous class
        class_avg = (class_count > 0) ? class_sum / class_count : 0
        printf("%-10s %-15s %10.2f  (Avg: %.2f)\\n", 
               "", "Class Average", "", class_avg)
        printf("%-10s %-15s %10s\\n", "", "", "---")
        
        # Reset for new class
        class_sum = 0
        class_count = 0
    }
    
    current_class = $1
    printf("%-10s %-15s %10d\\n", $1, $2, $3)
    
    # Update group aggregates
    class_sum += $3
    class_count++
}
END {
    # Print final class statistics
    if (class_count > 0) {
        class_avg = class_sum / class_count
        printf("%-10s %-15s %10.2f  (Avg: %.2f)\\n", 
               "", "Class Average", "", class_avg)
    }
}
' << 'EOF'
10A Tuhina 85
10A Swadeep 92
10A Abhronila 78
10B Debangshu 65
10B Priya 88
10B Rohit 75
10C Aniket 82
10C Sneha 91
EOF`,h=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 p-6 md:p-8 lg:p-12 font-sans dark",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-12 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 rounded-3xl blur-xl"}),e.jsxs("div",{className:`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 \r
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-900/30 \r
                    animate-[fadeIn_0.8s_ease-out]`,style:{animation:"fadeIn 0.8s ease-out"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",children:"Topic 13: Aggregations Using awk"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Sum, Average, Min, Max - Data Analysis Made Simple"})]})]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"Core Concept"}),e.jsx("p",{className:"text-sm",children:"Aggregating data across records using awk variables"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-cyan-300 mb-2",children:"Key Operations"}),e.jsx("p",{className:"text-sm",children:"SUM, AVG, MIN, MAX, COUNT with real-time calculation"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-green-300 mb-2",children:"Applications"}),e.jsx("p",{className:"text-sm",children:"Reports, Statistics, Data Analysis, Log Processing"})]})]})]})]}),e.jsx("style",{children:`
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
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 5px currentColor; }
                    50% { box-shadow: 0 0 20px currentColor; }
                }
            `}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Conceptual Foundation"]}),e.jsxs("div",{className:"space-y-6 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Aggregation in awk involves ",e.jsx("span",{className:"text-emerald-300",children:"accumulating values"})," across multiple records to produce summary statistics. Unlike simple calculations that work on individual rows, aggregations require ",e.jsx("span",{className:"text-cyan-300",children:"state maintenance"})," between records using variables in ",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"BEGIN"}),", main processing, and",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"END"})," blocks."]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border-l-4 border-emerald-500",children:[e.jsx("h3",{className:"font-bold text-cyan-300 mb-3",children:"Why Aggregations Matter in Real World"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{icon:"💰",title:"Financial Reports",desc:"Total sales, average revenue per customer"},{icon:"📊",title:"Academic Analysis",desc:"Class average, highest score, pass percentage"},{icon:"🖥️",title:"System Monitoring",desc:"Average CPU usage, max memory consumption"},{icon:"📈",title:"Business Intelligence",desc:"Monthly growth, year-over-year comparisons"}].map((a,s)=>e.jsxs("div",{className:"bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-2xl",children:a.icon}),e.jsx("h4",{className:"font-bold text-emerald-300",children:a.title})]}),e.jsx("p",{className:"text-sm text-gray-300",children:a.desc})]},s))})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),"Aggregation Variables Flow"]}),e.jsxs("div",{className:"bg-gray-900/50 p-6 rounded-xl",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("svg",{width:"700",height:"300",className:"hover:scale-[1.02] transition-transform duration-500",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"flowGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#10b981",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#06b6d4",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#8b5cf6",stopOpacity:1}})]}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#06b6d4"})})]}),e.jsxs("rect",{x:"50",y:"100",width:"120",height:"80",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2",className:"hover:animate-[pulseGlow_2s_ease-in-out_infinite] hover:stroke-emerald-400 transition-all duration-300",children:[e.jsx("title",{children:"BEGIN Block - Initialize aggregation variables"}),e.jsx("animate",{attributeName:"stroke-width",values:"2;3;2",dur:"3s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"110",y:"130",textAnchor:"middle",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:"BEGIN"}),e.jsx("text",{x:"110",y:"155",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:"sum=0; count=0"}),e.jsx("text",{x:"110",y:"170",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:"min=9999; max=0"}),e.jsx("path",{d:"M180,140 L230,140 L230,40 L320,40",fill:"none",stroke:"#06b6d4",strokeWidth:"2",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"10",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"35",textAnchor:"middle",fill:"#67e8f9",fontSize:"11",children:"Record Processing"}),e.jsxs("rect",{x:"320",y:"20",width:"150",height:"60",rx:"8",fill:"#155e75",stroke:"#06b6d4",strokeWidth:"2",className:"hover:animate-[pulseGlow_2s_ease-in-out_infinite] hover:stroke-cyan-400 transition-all duration-300",children:[e.jsx("title",{children:"Main Processing - Update aggregations per record"}),e.jsx("animate",{attributeName:"stroke-width",values:"2;3;2",dur:"3s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("text",{x:"395",y:"40",textAnchor:"middle",fill:"#a5f3fc",fontSize:"14",fontWeight:"bold",children:"For Each Record"}),e.jsx("text",{x:"395",y:"55",textAnchor:"middle",fill:"#cffafe",fontSize:"11",children:"sum += $3; count++"}),e.jsxs("g",{transform:"translate(320, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"160",rx:"8",fill:"#1e3a8a",stroke:"#4f46e5",strokeWidth:"2",className:"hover:stroke-blue-500 transition-colors duration-300"}),e.jsx("text",{x:"75",y:"20",textAnchor:"middle",fill:"#818cf8",fontSize:"14",fontWeight:"bold",children:"Variable States"}),e.jsxs("g",{className:"hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"20",y:"40",width:"110",height:"30",rx:"6",fill:"#312e81",children:e.jsx("animate",{attributeName:"fill",values:"#312e81;#3730a3;#312e81",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"75",y:"60",textAnchor:"middle",fill:"#c7d2fe",fontSize:"12",children:"sum: 0 → 100 → 250"})]}),e.jsxs("g",{className:"hover:scale-105 transition-transform duration-300",style:{animationDelay:"0.5s"},children:[e.jsx("rect",{x:"20",y:"80",width:"110",height:"30",rx:"6",fill:"#312e81",children:e.jsx("animate",{attributeName:"fill",values:"#312e81;#3730a3;#312e81",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("text",{x:"75",y:"100",textAnchor:"middle",fill:"#c7d2fe",fontSize:"12",children:"count: 0 → 1 → 5"})]}),e.jsxs("g",{className:"hover:scale-105 transition-transform duration-300",style:{animationDelay:"1s"},children:[e.jsx("rect",{x:"20",y:"120",width:"110",height:"30",rx:"6",fill:"#312e81",children:e.jsx("animate",{attributeName:"fill",values:"#312e81;#3730a3;#312e81",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"75",y:"140",textAnchor:"middle",fill:"#c7d2fe",fontSize:"12",children:"avg: sum/count"})]})]}),e.jsx("path",{d:"M470,140 L520,140 L520,100 L580,100",fill:"none",stroke:"#8b5cf6",strokeWidth:"2",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"10",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsxs("rect",{x:"580",y:"60",width:"120",height:"80",rx:"10",fill:"#4c1d95",stroke:"#8b5cf6",strokeWidth:"2",className:"hover:animate-[pulseGlow_2s_ease-in-out_infinite] hover:stroke-purple-400 transition-all duration-300",children:[e.jsx("title",{children:"END Block - Calculate and display final results"}),e.jsx("animate",{attributeName:"stroke-width",values:"2;3;2",dur:"3s",repeatCount:"indefinite",begin:"2s"})]}),e.jsx("text",{x:"640",y:"90",textAnchor:"middle",fill:"#e9d5ff",fontSize:"14",fontWeight:"bold",children:"END"}),e.jsx("text",{x:"640",y:"115",textAnchor:"middle",fill:"#f3e8ff",fontSize:"12",children:"avg = sum/count"}),e.jsx("text",{x:"640",y:"130",textAnchor:"middle",fill:"#f3e8ff",fontSize:"12",children:"print sum, avg"})]})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-emerald-900/20 rounded-lg border border-emerald-700/50",children:[e.jsx("h4",{className:"font-bold text-emerald-300 mb-2",children:"Initialization"}),e.jsx("p",{className:"text-sm",children:"Variables start in BEGIN block (sum=0, count=0)"})]}),e.jsxs("div",{className:"p-4 bg-cyan-900/20 rounded-lg border border-cyan-700/50",children:[e.jsx("h4",{className:"font-bold text-cyan-300 mb-2",children:"Accumulation"}),e.jsx("p",{className:"text-sm",children:"Each record updates variables (sum += value)"})]}),e.jsxs("div",{className:"p-4 bg-purple-900/20 rounded-lg border border-purple-700/50",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-2",children:"Finalization"}),e.jsx("p",{className:"text-sm",children:"END block calculates results (avg = sum/count)"})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Basic Aggregation Operations"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-300",children:"SUM Operation"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold",children:"Running Total"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Swadeep"})," from Naihati needs to calculate total sales for his store. SUM aggregation helps track cumulative totals:"]}),e.jsx(n,{fileModule:t,title:"Summing Sales Data",highlightLines:[5,6,8]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-cyan-300",children:"AVERAGE Operation"}),e.jsx("span",{className:"px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold",children:"Mean Calculation"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Abhronila"}),", the class representative at Barrackpore school, needs to calculate average marks for the class:"]}),e.jsx(n,{fileModule:r,title:"Calculating Class Average",highlightLines:[5,6,8,9]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"Finding Extremes: MIN & MAX"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-yellow-300",children:"MIN (Minimum Value)"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Initialization Strategy:"}),e.jsx("p",{className:"text-sm mb-3",children:"Initialize min with a very large number so first comparison works"}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded",children:"min = 999999  # Or use min = $1 for first record"})]}),e.jsx("h3",{className:"text-xl font-bold mb-4 text-red-300",children:"MAX (Maximum Value)"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Initialization Strategy:"}),e.jsx("p",{className:"text-sm mb-3",children:"Initialize max with 0 or a very small number"}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded",children:"max = 0  # Works for positive numbers"})]})]}),e.jsxs("div",{children:[e.jsx(n,{fileModule:i,title:"Finding Min/Max in Temperature Data",highlightLines:[5,6,7,8,12,13]}),e.jsxs("div",{className:"mt-4 bg-blue-900/20 p-4 rounded-lg border border-blue-700/50",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-2",children:"Real-World Scenario:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Debangshu"})," at Ichapur weather station uses this to find daily temperature extremes from hourly readings."]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Comprehensive Aggregation Example"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-emerald-300",children:"Complete Student Analysis"}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Tuhina"}),", a teacher in Shyamnagar, needs a complete analysis of her class performance including all statistics:"]}),e.jsx(n,{fileModule:l,title:"Complete Student Performance Analysis",highlightLines:[5,6,7,8,9,10,18,19,20]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-emerald-900/20 rounded-xl border border-emerald-700/50",children:[e.jsx("div",{className:"text-2xl font-bold text-emerald-300 mb-2",children:"87.5"}),e.jsx("p",{className:"text-sm text-emerald-200",children:"Average Score"})]}),e.jsxs("div",{className:"p-4 bg-red-900/20 rounded-xl border border-red-700/50",children:[e.jsx("div",{className:"text-2xl font-bold text-red-300 mb-2",children:"65"}),e.jsx("p",{className:"text-sm text-red-200",children:"Minimum Score"})]}),e.jsxs("div",{className:"p-4 bg-blue-900/20 rounded-xl border border-blue-700/50",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-300 mb-2",children:"98"}),e.jsx("p",{className:"text-sm text-blue-200",children:"Maximum Score"})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-red-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Division by Zero"}),e.jsx("p",{className:"text-sm mb-2",children:"Calculating average when count is zero"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:"avg = sum / count  # ERROR if count = 0"}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:"avg = (count > 0) ? sum/count : 0"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Uninitialized Variables"}),e.jsx("p",{className:"text-sm",children:"Using variables before initialization"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:"sum += $2  # sum is undefined!"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Wrong MIN/MAX Init"}),e.jsx("p",{className:"text-sm mb-2",children:"Initializing min with 0 when all values are positive"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:"min = 0  # Will never update if all values > 0"}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Better:"}),e.jsx("code",{className:"text-xs",children:"min = $1  # Use first record's value"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"String vs Number"}),e.jsx("p",{className:"text-sm",children:"Treating string columns as numbers"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:'sum += $1  # ERROR if $1 contains "N/A"'})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Professional Tips & Tricks"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-emerald-300",children:"Industry Best Practices"}),e.jsx("ul",{className:"space-y-3",children:["Always initialize aggregation variables in BEGIN block","Use printf in END for formatted output","Check for empty files before division operations","Use descriptive variable names (total_sales, avg_score)","Include count along with average for context","Handle edge cases (negative numbers, zero values)"].map((a,s)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-300 text-sm",children:s+1})}),e.jsx("span",{children:a})]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-cyan-300",children:"Advanced Techniques"}),e.jsx(n,{fileModule:o,title:"Group-wise Aggregation Pattern",highlightLines:[5,6,7,8,9,10]}),e.jsxs("div",{className:"mt-4 bg-cyan-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-cyan-300 mb-2",children:"Group-wise Analysis"}),e.jsx("p",{className:"text-sm",children:"This pattern allows calculating statistics per group (by class, department, etc.) by resetting variables when group changes."})]})]})]})]}),e.jsx("section",{className:`bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-emerald-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-900/30\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.7s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-emerald-300",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("strong",{className:"text-cyan-300",children:"Remember:"})," Aggregations transform raw data into meaningful insights. The pattern is always the same: ",e.jsx("span",{className:"text-yellow-300",children:"Initialize → Accumulate → Calculate → Report"}),". This fundamental pattern applies to everything from simple sums to complex statistical analyses."]}),e.jsxs("div",{className:"bg-black/30 p-4 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-2",children:"Key Insight:"}),e.jsxs("p",{className:"mb-2",children:["Think of aggregation variables as ",e.jsx("span",{className:"text-emerald-300",children:"memory cells"}),"that remember information across records. They're the bridge between individual data points and overall patterns."]}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:"sum"})," remembers the running total"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"count"})," remembers how many items"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"min/max"})," remember extremes seen so far"]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-gray-400",children:"27 years experience in Data Processing"}),e.jsx("p",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in | 7003756860"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Skills: awk, Data Analysis, Statistical Computing"})})]})]})]})]})}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.8s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Aggregation Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-emerald-300",children:"Must-Do Steps"}),e.jsx("div",{className:"space-y-3",children:["Initialize variables in BEGIN block","Update aggregations for each record","Calculate final results in END block","Handle division by zero for averages","Format output with meaningful labels","Test with sample data first"].map((a,s)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors duration-300",children:e.jsx("span",{className:"text-emerald-300",children:s+1})}),e.jsx("span",{children:a})]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-cyan-300",children:"Common Use Cases"}),e.jsx("div",{className:"space-y-3",children:["Sales totals and averages","Student performance statistics","System resource utilization","Website traffic analysis","Inventory level tracking","Financial report generation"].map((a,s)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-cyan-900/50 rounded-full flex items-center justify-center group-hover:bg-cyan-700 transition-colors duration-300",children:e.jsx("span",{className:"text-cyan-300",children:s+1})}),e.jsx("span",{children:a})]},s))})]})]})]}),e.jsxs("section",{className:`bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-cyan-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:[`"If Swadeep's store has days with zero sales, how would you calculate the`,e.jsx("span",{className:"text-emerald-300",children:" average daily sales"}),' without getting division by zero errors?"']})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:['"How would you modify the MIN/MAX logic to also track',e.jsx("span",{className:"text-red-300",children:" which student"}),' got the highest and lowest scores?"']})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsxs("p",{className:"italic text-lg",children:['"What happens to your aggregations if the input file is',e.jsx("span",{className:"text-yellow-300",children:" sorted differently"}),'? Should aggregation results depend on sorting?"']})})]}),e.jsx("div",{className:"mt-6 p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg",children:e.jsxs("p",{className:"text-emerald-200",children:[e.jsx("strong",{children:"Hint:"})," Start with sum and count. Once those work, add min/max. Always test with small datasets before running on large files."]})})]})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Topic 13: Aggregations Using awk (Sum, Average, Min, Max)"}),e.jsx("p",{className:"mt-2",children:"Next Topic: Working with CSV and Delimited Files"})]})})]});export{h as default};

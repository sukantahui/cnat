import{j as e}from"./index-Do7ncMju.js";import{S as a}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const n=`#!/bin/bash
# Basic CSV processing example
# Data: Product,Quantity,Price,Date

echo "Basic CSV Processing - Sales Report"
echo "==================================="

awk '
BEGIN {
    FS = ","  # Set field separator to comma
    total_sales = 0
    printf("%-15s %8s %10s %12s %12s\\n", 
           "Product", "Qty", "Price", "Date", "Subtotal")
    printf("%-15s %8s %10s %12s %12s\\n", 
           "-------", "---", "-----", "----", "--------")
}
NR == 1 { next }  # Skip header row
{
    quantity = $2
    price = $3
    date = $4
    subtotal = quantity * price
    total_sales += subtotal
    
    # Format output with proper alignment
    printf("%-15s %8d ₹%9.2f %12s ₹%11.2f\\n", 
           $1, quantity, price, date, subtotal)
}
END {
    printf("\\n%-15s %8s %10s %12s %12s\\n", 
           "", "", "", "", "-----------")
    printf("%-15s %8s %10s %12s ₹%11.2f\\n", 
           "TOTAL", "", "", "", total_sales)
}
' << 'EOF'
Product,Quantity,Price,Date
Laptop,5,45999.99,2024-01-15
Mouse,25,849.50,2024-01-15
Keyboard,12,1299.00,2024-01-16
Monitor,8,15499.75,2024-01-16
Tablet,15,28999.00,2024-01-17
EOF`,t=`#!/bin/bash
# Processing CSV with quoted fields containing commas

echo "Processing Quoted CSV Fields"
echo "============================="

awk '
BEGIN {
    # FPAT defines what a field looks like (not what separates them)
    # Pattern: Either non-comma sequence OR quoted string
    FPAT = "([^,]*)|(\\"[^\\"]*\\")"
    print "Number of fields per row:"
    print "-------------------------"
}
{
    # Remove quotes from fields for display
    for (i = 1; i <= NF; i++) {
        # Remove surrounding quotes if present
        gsub(/^"|"$/, "", $i)
    }
    
    printf("Row %2d: %s, %s, %s\\n", NR, $1, $2, $3)
}
' << 'EOF'
Name,Address,Age
John Doe,"123 Main St, Apt 4B",25
Jane Smith,"456 Oak Ave, Springfield",30
"Deb, Roy","789 Pine Rd, Kolkata",35
EOF`,i=`#!/bin/bash
# Handling multiple delimiter formats

echo "Multi-Delimiter CSV Processing"
echo "==============================="

# Example 1: Comma-separated
echo "1. Standard CSV (comma):"
echo "------------------------"
awk 'BEGIN {FS=","} {printf("%-10s | %-10s | %-10s\\n", $1, $2, $3)}' << 'EOF'
Product,Qty,Price
Laptop,5,45999
Mouse,25,849
EOF

echo -e "\\n2. Pipe-separated:"
echo "------------------"
awk 'BEGIN {FS="|"} {printf("%-10s | %-10s | %-10s\\n", $1, $2, $3)}' << 'EOF'
Product|Qty|Price
Laptop|5|45999
Mouse|25|849
EOF

echo -e "\\n3. Tab-separated (TSV):"
echo "------------------------"
awk 'BEGIN {FS="\\t"} {printf("%-10s | %-10s | %-10s\\n", $1, $2, $3)}' << 'EOF'
Product	Qty	Price
Laptop	5	45999
Mouse	25	849
EOF

echo -e "\\n4. Mixed delimiters (comma or semicolon):"
echo "-------------------------------------------"
awk '
BEGIN {
    # Regular expression: comma OR semicolon
    FS = "[,;]"
    print "Processing mixed-format data:"
}
{
    if (NF == 3) {
        printf("  %-10s (Qty: %2s) = ₹%6s\\n", $1, $2, $3)
    } else {
        printf("  ERROR: Expected 3 fields, got %d\\n", NF)
    }
}
' << 'EOF'
Laptop,5,45999
Mouse;25,849  # Mixed - will cause error!
Keyboard,12,1299
Monitor;8,15499
EOF`,l=`#!/bin/bash
# Real-world CSV processing with multiple challenges

echo "School Database Processing - Shyamnagar High School"
echo "==================================================="

awk '
BEGIN {
    # Try to auto-detect delimiter
    print "Processing student records..."
    print "-----------------------------"
    
    # Variables for statistics
    student_count = 0
    total_age = 0
    max_age = 0
    min_age = 100
}
NR == 1 {
    # Analyze first line to detect delimiter
    if (index($0, "|") > 0) {
        FS = "|"
        print "Detected pipe delimiter (|)"
    } else if (index($0, ",") > 0) {
        FS = ","
        print "Detected comma delimiter (,)"
    } else if (index($0, ";") > 0) {
        FS = ";"
        print "Detected semicolon delimiter (;)"
    } else {
        FS = " "  # Fallback to space
        print "Using space delimiter"
    }
    next  # Skip header
}
{
    student_count++
    
    # Clean and normalize data
    gsub(/^[ \\t]+|[ \\t]+$/, "", $1)  # Trim spaces
    gsub(/^[ \\t]+|[ \\t]+$/, "", $2)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $3)
    
    # Remove quotes if present
    gsub(/^"|"$/, "", $1)
    gsub(/^"|"$/, "", $2)
    
    # Convert age to number, handle empty values
    if ($3 == "") {
        age = 0
        missing_age_count++
    } else {
        age = $3 + 0  # Force numeric conversion
    }
    
    total_age += age
    
    # Track min/max
    if (age > max_age && age > 0) max_age = age
    if (age < min_age && age > 0) min_age = age
    
    # Format and print
    printf("%2d. %-15s | %-20s | %3d years\\n", 
           student_count, $1, $2, age)
}
END {
    print "\\nStatistics:"
    print "-----------"
    printf("Total students: %d\\n", student_count)
    if (student_count > 0 && total_age > 0) {
        printf("Average age: %.1f years\\n", total_age/student_count)
        printf("Age range: %d - %d years\\n", min_age, max_age)
    }
    if (missing_age_count > 0) {
        printf("Warning: %d records missing age data\\n", missing_age_count)
    }
}
' << 'EOF'
Name|Address|Age
"Tuhina Das"|"12 College St, Barrackpore"|17
Swadeep Roy|"45 Gopal Nagar, Naihati"|16
Abhronila Sen|"78 Station Road, Ichapur"|
"Deb, Roy"|"90 Lake Town, Kolkata"|18
Priya Sharma|"23 Park Street, Shyamnagar"|17
Rohit Verma|"56 Mall Road"|16
EOF`,o=`#!/bin/bash
# Advanced CSV processing with validation and error handling

echo "Robust CSV Processing with Validation"
echo "====================================="

awk '
BEGIN {
    FS = ","
    OFS = "|"  # Convert to pipe-separated output
    
    # Counters
    valid_records = 0
    invalid_records = 0
    warnings = 0
    
    print "Processing log file..."
    print "======================"
}
NR == 1 {
    # Store header
    header = $0
    gsub(/,/, OFS, header)  # Convert header to output format
    print "HEADER: " header
    print "-------" 
    next
}
{
    # Skip empty lines
    if (NF == 0 || $0 ~ /^[[:space:]]*$/) {
        print "WARNING: Empty line at row " NR " - Skipping"
        warnings++
        next
    }
    
    # Validate field count (expected 4 fields)
    if (NF != 4) {
        print "ERROR: Row " NR " has " NF " fields (expected 4)"
        invalid_records++
        next
    }
    
    # Clean and validate each field
    errors = ""
    
    # Field 1: Username (non-empty)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $1)
    if ($1 == "") {
        errors = errors "Empty username; "
    }
    
    # Field 2: Email (basic validation)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $2)
    if ($2 !~ /@/) {
        errors = errors "Invalid email; "
    }
    
    # Field 3: Age (numeric, 1-120)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $3)
    if ($3 !~ /^[0-9]+$/) {
        errors = errors "Age not numeric; "
    } else if ($3 < 1 || $3 > 120) {
        errors = errors "Age out of range; "
    }
    
    # Field 4: Score (numeric, 0-100)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $4)
    if ($4 !~ /^[0-9]+(\\.[0-9]+)?$/) {
        errors = errors "Score not numeric; "
    } else if ($4 < 0 || $4 > 100) {
        errors = errors "Score out of range; "
    }
    
    if (errors != "") {
        print "ERROR: Row " NR " - " errors
        invalid_records++
    } else {
        # All valid - output in pipe-separated format
        print $1, $2, $3, $4
        valid_records++
    }
}
END {
    print "\\nProcessing Complete:"
    print "===================="
    printf("Valid records:     %d\\n", valid_records)
    printf("Invalid records:   %d\\n", invalid_records)
    printf("Warnings:          %d\\n", warnings)
    printf("Success rate:      %.1f%%\\n", 
           (valid_records/(valid_records+invalid_records))*100)
}
' << 'EOF'
Username,Email,Age,Score
tuhina_das,tuhina@school.edu,17,85.5
swadeep_roy,swadeep@school.edu,16,92.0
abhronila,abhronila@college.edu,18,78.5
deb_roy,deb@work.com,35,65.0
priya,priya@gmail.com,,88.0  # Missing age
rohit,rohit@yahoo.com,25,105 # Invalid score
,empty@test.com,30,75.0      # Empty username
sam,sam@test,28,82.5         # Invalid email
EOF`,x=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 p-6 md:p-8 lg:p-12 font-sans dark",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-12 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-3xl blur-xl"}),e.jsxs("div",{className:`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 \r
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/30 \r
                    animate-[fadeIn_0.8s_ease-out]`,style:{animation:"fadeIn 0.8s ease-out"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent",children:"Topic 14: CSV & Delimited Files in awk"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Mastering structured data processing with field separators"})]})]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-amber-300 mb-2",children:"Core Concept"}),e.jsx("p",{className:"text-sm",children:"Field separation: CSV, TSV, custom delimiters"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-orange-300 mb-2",children:"Key Variables"}),e.jsx("p",{className:"text-sm",children:"FS (Field Separator), OFS (Output Field Separator)"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-yellow-300 mb-2",children:"Real-World Use"}),e.jsx("p",{className:"text-sm",children:"Data import/export, ETL pipelines, reports"})]})]})]})]}),e.jsx("style",{children:`
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
                @keyframes delimiterPulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
            `}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-amber-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Understanding Delimited Files"]}),e.jsxs("div",{className:"space-y-6 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Delimited files use specific ",e.jsx("span",{className:"text-amber-300",children:"separator characters"})," to distinguish between fields (columns). While space is awk's default separator, real-world data uses various delimiters like commas, tabs, pipes, or custom characters."]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border-l-4 border-orange-500",children:[e.jsx("h3",{className:"font-bold text-orange-300 mb-3",children:"Common Delimited File Formats"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{type:"CSV",delimiter:",",desc:"Comma Separated Values - Most common for spreadsheets",color:"bg-green-900/30"},{type:"TSV",delimiter:"\\t",desc:"Tab Separated Values - Common in logs and databases",color:"bg-blue-900/30"},{type:"PSV",delimiter:"|",desc:"Pipe Separated Values - Used in database exports",color:"bg-purple-900/30"},{type:"SSV",delimiter:";",desc:"Semicolon Separated - European CSV alternative",color:"bg-red-900/30"}].map((s,r)=>e.jsxs("div",{className:`p-4 rounded-lg border ${s.color} hover:scale-[1.02] transition-all duration-300`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-bold text-lg text-white",children:s.type}),e.jsx("code",{className:"px-2 py-1 bg-gray-800 rounded text-sm",children:s.delimiter})]}),e.jsx("p",{className:"text-sm text-gray-300",children:s.desc})]},r))})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-orange-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),"How Field Separation Works"]}),e.jsxs("div",{className:"bg-gray-900/50 p-6 rounded-xl",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("svg",{width:"700",height:"250",className:"hover:scale-[1.02] transition-transform duration-500",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"csvGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f59e0b",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#f97316",stopOpacity:1}})]}),e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})]}),e.jsx("rect",{x:"50",y:"50",width:"600",height:"40",rx:"8",fill:"#1f2937",stroke:"#4b5563",strokeWidth:"2"}),e.jsx("text",{x:"350",y:"30",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontWeight:"bold",children:"Raw CSV Line"}),e.jsx("text",{x:"80",y:"75",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontFamily:"monospace",children:"John"}),e.jsx("text",{x:"80",y:"95",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Field 1"}),e.jsx("text",{x:"150",y:"75",textAnchor:"middle",fill:"#f59e0b",fontSize:"16",fontWeight:"bold",children:","}),e.jsxs("circle",{cx:"150",cy:"70",r:"15",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"5,5",children:[e.jsx("animate",{attributeName:"r",values:"15;20;15",dur:"2s",repeatCount:"indefinite"}),e.jsx("title",{children:"Field Separator (comma)"})]}),e.jsx("text",{x:"220",y:"75",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontFamily:"monospace",children:"Doe"}),e.jsx("text",{x:"220",y:"95",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Field 2"}),e.jsx("text",{x:"290",y:"75",textAnchor:"middle",fill:"#f59e0b",fontSize:"16",fontWeight:"bold",children:","}),e.jsx("circle",{cx:"290",cy:"70",r:"15",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"r",values:"15;20;15",dur:"2s",repeatCount:"indefinite",begin:"0.3s"})}),e.jsx("text",{x:"360",y:"75",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontFamily:"monospace",children:"25"}),e.jsx("text",{x:"360",y:"95",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Field 3"}),e.jsx("text",{x:"430",y:"75",textAnchor:"middle",fill:"#f59e0b",fontSize:"16",fontWeight:"bold",children:","}),e.jsx("circle",{cx:"430",cy:"70",r:"15",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"r",values:"15;20;15",dur:"2s",repeatCount:"indefinite",begin:"0.6s"})}),e.jsx("text",{x:"500",y:"75",textAnchor:"middle",fill:"#fbbf24",fontSize:"14",fontFamily:"monospace",children:'"New York, NY"'}),e.jsx("text",{x:"500",y:"95",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Field 4 (quoted)"}),e.jsx("path",{d:"M350,100 L350,150",fill:"none",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"10",dur:"2s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"50",y:"180",width:"600",height:"40",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"350",y:"160",textAnchor:"middle",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:'After FS="," Processing'}),e.jsxs("g",{children:[e.jsx("rect",{x:"60",y:"185",width:"60",height:"30",rx:"4",fill:"#065f46",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065f46;#047857;#065f46",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"90",y:"205",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:'$1="John"'})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"140",y:"185",width:"60",height:"30",rx:"4",fill:"#065f46",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065f46;#047857;#065f46",dur:"3s",repeatCount:"indefinite",begin:"0.3s"})}),e.jsx("text",{x:"170",y:"205",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:'$2="Doe"'})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"220",y:"185",width:"60",height:"30",rx:"4",fill:"#065f46",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065f46;#047857;#065f46",dur:"3s",repeatCount:"indefinite",begin:"0.6s"})}),e.jsx("text",{x:"250",y:"205",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:'$3="25"'})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"300",y:"185",width:"120",height:"30",rx:"4",fill:"#065f46",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065f46;#047857;#065f46",dur:"3s",repeatCount:"indefinite",begin:"0.9s"})}),e.jsx("text",{x:"360",y:"205",textAnchor:"middle",fill:"#d1fae5",fontSize:"12",children:'$4="New York, NY"'}),e.jsx("text",{x:"360",y:"220",textAnchor:"middle",fill:"#86efac",fontSize:"8",children:"(comma preserved in quotes)"})]})]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"p-4 bg-amber-900/20 rounded-lg border border-amber-700/50",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"FS - Field Separator"}),e.jsx("p",{className:"text-sm mb-2",children:"Tells awk how to split input lines into fields"}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded",children:'BEGIN { FS = "," }  # CSV files'}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded mt-1",children:'BEGIN { FS = "\\t" }  # TSV files'})]}),e.jsxs("div",{className:"p-4 bg-orange-900/20 rounded-lg border border-orange-700/50",children:[e.jsx("h4",{className:"font-bold text-orange-300 mb-2",children:"OFS - Output Field Separator"}),e.jsx("p",{className:"text-sm mb-2",children:"Controls separator when printing multiple fields"}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded",children:'BEGIN { OFS = "|" }  # Output as PSV'}),e.jsx("code",{className:"text-xs block bg-gray-800 p-2 rounded mt-1",children:"print $1, $2, $3  # Uses OFS between fields"})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Basic CSV Processing"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-amber-300",children:"Simple CSV Reading"}),e.jsx("span",{className:"px-3 py-1 bg-amber-900/50 text-amber-300 rounded-full text-sm font-semibold",children:'FS = ","'})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Swadeep"})," from Naihati has a CSV export from his store's POS system. He needs to process sales data:"]}),e.jsx(a,{fileModule:n,title:"Basic CSV Processing with awk",highlightLines:[3,5,6,7]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-300 mb-2",children:"Input CSV Structure"}),e.jsx("pre",{className:"text-sm font-mono bg-gray-900 p-3 rounded",children:`Product,Quantity,Price,Date
Laptop,5,45999.99,2024-01-15
Mouse,25,849.50,2024-01-15
Keyboard,12,1299.00,2024-01-16`})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-2",children:"Key Points"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:'FS = ","'})," tells awk to split on commas"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"$1, $2, $3"})," now refer to comma-separated columns"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Header row (",e.jsx("code",{children:"NR == 1"}),") can be skipped if needed"]})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"Advanced: Quoted Fields & Escaping"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-purple-300",children:"The Quoted CSV Problem"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg mb-6",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Problematic CSV:"}),e.jsx("pre",{className:"text-sm font-mono",children:`Name,Address,Age
John Doe,"123 Main St, Apt 4B",25
Jane Smith,"456 Oak Ave, Springfield",30`}),e.jsx("p",{className:"text-sm text-gray-400 mt-2",children:'The comma in "123 Main St, Apt 4B" should NOT be treated as a field separator!'})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Solution Approaches:"}),e.jsxs("ol",{className:"space-y-3 pl-5",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300 font-bold",children:"1."}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"FPAT"})," (Field Pattern) for complex CSV"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300 font-bold",children:"2."}),e.jsxs("span",{children:["Pre-process with ",e.jsx("code",{children:"sed"})," to handle quotes"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300 font-bold",children:"3."}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"gawk"}),"'s ",e.jsx("code",{children:"--csv"})," option (GNU awk 4.2+)"]})]})]})]})]}),e.jsxs("div",{children:[e.jsx(a,{fileModule:t,title:"Processing Quoted CSV Fields",highlightLines:[4,5,6,7,8]}),e.jsxs("div",{className:"mt-4 bg-purple-900/20 p-4 rounded-lg border border-purple-700/50",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-2",children:"How FPAT Works:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"FPAT"})," defines what a field looks like rather than what separates fields. The pattern ",e.jsx("code",{children:'[^,]*|"[^"]*"'}),' means: "non-comma sequence OR quoted string".']})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Multiple & Custom Delimiters"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-blue-300",children:"Complex Data Formats"}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Abhronila"})," at Barrackpore College receives data from different systems with various delimiter formats. She needs a flexible solution:"]}),e.jsx(a,{fileModule:i,title:"Handling Multiple Delimiter Formats",highlightLines:[4,5,6,7,8,9,10]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-amber-300 mb-2",children:'FS = ","'}),e.jsx("p",{className:"text-sm",children:"Standard CSV format"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:'a,b,c → $1="a", $2="b", $3="c"'})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-green-300 mb-2",children:'FS = "[:;]"'}),e.jsx("p",{className:"text-sm",children:"Colon OR semicolon"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:'a:b;c → $1="a", $2="b", $3="c"'})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-300 mb-2",children:'FS = "\\\\t"'}),e.jsx("p",{className:"text-sm",children:"Tab-separated (TSV)"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:'a\\\\tb\\\\tc → $1="a", $2="b", $3="c"'})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Real-World: Student Database Processing"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-300",children:"School Database Export"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold",children:"Production Scenario"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Tuhina"}),", the school administrator in Shyamnagar, needs to process student data exported from their legacy system with mixed formats:"]}),e.jsx(a,{fileModule:l,title:"School Database Processing Pipeline",highlightLines:[4,5,6,10,11,12,13,14,15]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Input Challenges:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsx("span",{children:"Mixed delimiters (comma, pipe)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsx("span",{children:"Missing values (empty fields)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsx("span",{children:"Inconsistent quoting"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsx("span",{children:"Header rows to skip"})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Processing Strategy:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Detect delimiter automatically"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Handle missing values gracefully"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Clean and normalize data"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Generate formatted reports"})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-red-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Forgot to Set FS"}),e.jsx("p",{className:"text-sm mb-2",children:"Using default space separator on CSV data"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:'John,Doe,25 → $1="John,Doe,25", $2="", $3=""'}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:'BEGIN { FS = "," }'})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Commas in Quoted Fields"}),e.jsx("p",{className:"text-sm",children:"Field splitting breaks quoted fields with commas"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:'"New York, NY" → $1="\\"New York", $2=" NY\\""'})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Empty/Null Fields"}),e.jsx("p",{className:"text-sm mb-2",children:"Missing values shift field numbering"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:'a,,c → $1="a", $2="", $3="c"'}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Check:"}),e.jsx("code",{className:"text-xs",children:'if ($3 == "") print "Field 3 is empty"'})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Trailing Delimiters"}),e.jsx("p",{className:"text-sm",children:"Extra delimiter creates empty last field"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:'a,b, → $1="a", $2="b", $3=""'})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Professional Tips & Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-amber-300",children:"Industry Best Practices"}),e.jsx(a,{fileModule:o,title:"Robust CSV Processing Script",highlightLines:[4,5,6,7,8,9,10,15,16,17]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Validation Checklist"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Always check ",e.jsx("code",{children:"NF"})," (Number of Fields) for consistency"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"OFS"})," for consistent output formatting"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Handle header rows separately (",e.jsx("code",{children:"NR == 1"}),")"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Validate data types (strings vs numbers)"})]})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-2",children:"Performance Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300",children:"⚡"}),e.jsx("span",{children:"Set FS/OFS in BEGIN block (not per record)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"getline"})," for very large files"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-300",children:"⚡"}),e.jsx("span",{children:"Process files in chunks for memory efficiency"})]})]})]})]})]})]}),e.jsx("section",{className:`bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-amber-900/30\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-amber-300",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("strong",{className:"text-orange-300",children:"Remember:"})," CSV processing is 90% about understanding your data's structure. Before writing any awk code,",e.jsx("span",{className:"text-yellow-300",children:" inspect sample data"})," to identify:"]}),e.jsxs("div",{className:"bg-black/30 p-4 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-2",children:"Data Inspection Checklist:"}),e.jsxs("ul",{className:"grid md:grid-cols-2 gap-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"What delimiter is used?"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"Are fields quoted?"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"Any embedded delimiters?"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"Missing/empty fields?"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"Header row present?"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{children:"Consistent field count?"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-gray-400",children:"27 years experience in Data Processing"}),e.jsx("p",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in | 7003756860"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Skills: awk, CSV Processing, ETL, Data Migration"})})]})]})]})]})}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"CSV Processing Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-amber-300",children:"Setup & Configuration"}),e.jsx("div",{className:"space-y-3",children:["Set FS to correct delimiter (comma, tab, pipe, etc.)","Configure OFS for output formatting","Handle header row if present (NR > 1)","Validate field count consistency (check NF)","Initialize variables in BEGIN block","Test with small sample first"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-900/50 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300",children:e.jsx("span",{className:"text-amber-300",children:r+1})}),e.jsx("span",{children:s})]},r))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-orange-300",children:"Data Quality & Handling"}),e.jsx("div",{className:"space-y-3",children:["Check for quoted fields with embedded delimiters","Handle empty/missing fields gracefully","Validate data types (string vs numeric)","Clean and normalize string values","Handle different character encodings","Log processing errors for debugging"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-900/50 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors duration-300",children:e.jsx("span",{className:"text-orange-300",children:r+1})}),e.jsx("span",{children:s})]},r))})]})]})]}),e.jsxs("section",{className:`bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"1s"},children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-orange-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"If Debangshu receives CSV data where some fields contain the delimiter character (like addresses with commas), how can he process it without breaking fields?"'})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"What happens when you have a CSV file with inconsistent delimiters (some lines use comma, others use semicolon)? How would you detect and handle this?"'})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"How would you convert a pipe-delimited file to CSV format while preserving any pipes that might appear within the actual data fields?"'})})]}),e.jsx("div",{className:"mt-6 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg",children:e.jsxs("p",{className:"text-amber-200",children:[e.jsx("strong",{children:"Hint:"})," Start by examining a few lines of your data with",e.jsx("code",{className:"mx-1 px-1 bg-black/50 rounded",children:"head -n 5 file.csv"}),"and",e.jsx("code",{className:"mx-1 px-1 bg-black/50 rounded",children:"cat -A file.csv"}),"(shows invisible characters)."]})})]})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Topic 14: Working with CSV and Delimited Files Using awk"}),e.jsx("p",{className:"mt-2",children:"Next Topic: Pipelines - Combining grep, sed, awk"})]})})]});export{x as default};

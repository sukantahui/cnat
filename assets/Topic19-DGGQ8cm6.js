import{j as e}from"./index-BFnLuail.js";import{S as s}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const a=`#!/bin/bash
# Basic Data Cleanup Example
# This script demonstrates common data cleanup operations using sed

echo "=== Example 1: Cleaning Student Data ==="
echo "Original data with inconsistencies:"
cat << 'EOF'
Name , Age , Grade ,City
John  DOE ,15,A, New York  
Jane Smith,16 ,B,Los Angeles
Bob  Johnson ,14 , A , Chicago
EOF

echo ""
echo "Step 1: Remove extra spaces around commas"
echo "sed 's/\\\\s*,\\\\s*/,/g' - removes spaces before/after commas"
echo "Result:"
sed 's/\\s*,\\s*/,/g' << 'EOF'
Name , Age , Grade ,City
John  DOE ,15,A, New York  
Jane Smith,16 ,B,Los Angeles
Bob  Johnson ,14 , A , Chicago
EOF

echo ""
echo "Step 2: Trim extra spaces between words"
echo "sed 's/\\\\s\\\\+/ /g' - reduces multiple spaces to single space"
echo "Result:"
sed -e 's/\\s*,\\s*/,/g' -e 's/\\s\\+/ /g' << 'EOF'
Name , Age , Grade ,City
John  DOE ,15,A, New York  
Jane Smith,16 ,B,Los Angeles
Bob  Johnson ,14 , A , Chicago
EOF

echo ""
echo "Step 3: Standardize column names to title case"
echo "sed 's/^[a-z]/\\U&/' - capitalizes first letter of each line"
echo "Final Clean Data:"
sed -e 's/\\s*,\\s*/,/g' -e 's/\\s\\+/ /g' -e 's/^[a-z]/\\U&/' << 'EOF'
Name , Age , Grade ,City
John  DOE ,15,A, New York  
Jane Smith,16 ,B,Los Angeles
Bob  Johnson ,14 , A , Chicago
EOF`,t=`#!/bin/bash
# Advanced Data Normalization Example
# Standardizing product data with mixed formats

echo "=== Example 2: Product Data Normalization ==="
echo "Original inconsistent product data:"
cat << 'EOF'
product: Laptop, price: $999.99, date: 04-12-2023
PRODUCT: MOUSE, PRICE: $49.50, DATE: 2023/12/04
Product: Keyboard, Price: $79, Date: Dec 4, 2023
EOF

echo ""
echo "Step 1: Normalize product name casing"
echo "sed 's/^[Pp]RODUCT:/Product:/' - standardizes 'product:' prefix"
sed 's/^[Pp]RODUCT:/Product:/' << 'EOF'
product: Laptop, price: $999.99, date: 04-12-2023
PRODUCT: MOUSE, PRICE: $49.50, DATE: 2023/12/04
Product: Keyboard, Price: $79, Date: Dec 4, 2023
EOF

echo ""
echo "Step 2: Remove currency symbols and standardize price format"
echo "sed 's/\\\\$//g' - removes dollar signs"
sed -e 's/^[Pp]RODUCT:/Product:/' -e 's/\\$//g' << 'EOF'
product: Laptop, price: $999.99, date: 04-12-2023
PRODUCT: MOUSE, PRICE: $49.50, DATE: 2023/12/04
Product: Keyboard, Price: $79, Date: Dec 4, 2023
EOF

echo ""
echo "Step 3: Standardize date format to YYYY-MM-DD"
echo "Multiple sed commands for different date formats"
cat > /tmp/normalize_dates.sed << 'EOF'
# Convert DD-MM-YYYY to YYYY-MM-DD
s/\\([0-9]\\{2\\}\\)-\\([0-9]\\{2\\}\\)-\\([0-9]\\{4\\}\\)/\\3-\\2-\\1/
# Convert YYYY/MM/DD to YYYY-MM-DD
s|\\([0-9]\\{4\\}\\)/\\([0-9]\\{2\\}\\)/\\([0-9]\\{2\\}\\)|\\1-\\2-\\3|
# Convert Month D, YYYY to YYYY-MM-DD (simplified)
s/Jan \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-01-\\1/
s/Feb \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-02-\\1/
s/Mar \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-03-\\1/
s/Apr \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-04-\\1/
s/May \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-05-\\1/
s/Jun \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-06-\\1/
s/Jul \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-07-\\1/
s/Aug \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-08-\\1/
s/Sep \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-09-\\1/
s/Oct \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-10-\\1/
s/Nov \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-11-\\1/
s/Dec \\([0-9]\\{1,2\\}\\), \\([0-9]\\{4\\}\\)/\\2-12-\\1/
EOF

echo ""
echo "Step 4: Complete normalization pipeline"
echo "Final normalized data:"
sed -e 's/^[Pp]RODUCT:/Product:/' \\
    -e 's/\\$//g' \\
    -e 's/price:/Price:/g' \\
    -e 's/date:/Date:/g' \\
    -e 's/PRICE:/Price:/g' \\
    -e 's/DATE:/Date:/g' \\
    -f /tmp/normalize_dates.sed << 'EOF'
product: Laptop, price: $999.99, date: 04-12-2023
PRODUCT: MOUSE, PRICE: $49.50, DATE: 2023/12/04
Product: Keyboard, Price: $79, Date: Dec 4, 2023
EOF`,n=`#!/bin/bash
# Multi-step Cleanup Pipeline Example
# Demonstrating complex data transformation pipeline

echo "=== Multi-step Cleanup Pipeline ==="
echo "Creating a complex cleanup script with multiple sed operations"

cat > cleanup_pipeline.sed << 'EOF'
# Cleanup Pipeline Script
# Step 1: Remove leading/trailing whitespace
s/^[[:space:]]*//
s/[[:space:]]*$//

# Step 2: Convert all text to lowercase first (for case normalization)
s/.*/\\L&/

# Step 3: Capitalize first letter of each word (for proper names)
s/\\b\\(.\\)/\\u\\1/g

# Step 4: Fix date formats (MM/DD/YYYY to YYYY-MM-DD)
s#\\([0-9]\\{1,2\\}\\)/\\([0-9]\\{1,2\\}\\)/\\([0-9]\\{4\\}\\)#\\3-\\1-\\2#
s#\\([0-9]\\{4\\}\\)-\\([0-9]\\{1\\}\\)-\\([0-9]\\{1,2\\}\\)#\\3-0\\2-0\\1#
s#\\([0-9]\\{4\\}\\)-\\([0-9]\\{2\\}\\)-\\([0-9]\\{1\\}\\)#\\3-0\\2-\\1#
s#\\([0-9]\\{4\\}\\)-\\([0-9]\\{1\\}\\)-\\([0-9]\\{2\\}\\)#\\3-0\\2-\\1#

# Step 5: Clean currency values (remove $ and add .00 if needed)
s/\\$\\([0-9]\\+\\.[0-9]\\{2\\}\\)/\\1/
s/\\$\\([0-9]\\+\\)/\\1.00/

# Step 6: Remove duplicate whitespace
s/[[:space:]]\\+/ /g

# Step 7: Normalize delimiters (ensure comma-space separation)
s/[[:space:]]*,[[:space:]]*/, /g

# Step 8: Remove empty lines
/^$/d
EOF

echo "Pipeline script created. Sample data processing:"
echo ""
echo "Original messy data:"
cat << 'EOF'
  john smith  , $100 , 1/5/2023  ,new york

JANE DOE,$150.50,2023-01-05,BOSTON  
  bob  jones,$75,2023-1-5,chicago
EOF

echo ""
echo "After applying cleanup pipeline:"
sed -f cleanup_pipeline.sed << 'EOF'
  john smith  , $100 , 1/5/2023  ,new york

JANE DOE,$150.50,2023-01-05,BOSTON  
  bob  jones,$75,2023-1-5,chicago
EOF`,r=`#!/bin/bash
# Pattern Validation Example
# Validating and cleaning data based on patterns

echo "=== Data Validation with sed ==="
echo "Validating email addresses, phone numbers, and dates"

cat > validate_data.sed << 'EOF'
# Validation and Cleanup Script
# Email validation and formatting
/^[^@]*@[^@]*\\.[^@]*$/ {
    s/[[:space:]]*//g
    s/\\(.*\\)/\\L\\1/
    s/$/ [VALID_EMAIL]/
}

# Phone number validation (10 digits, various formats)
/[0-9]\\{3\\}[-. ][0-9]\\{3\\}[-. ][0-9]\\{4\\}/ {
    s/[^0-9]//g
    s/\\([0-9]\\{3\\}\\)\\([0-9]\\{3\\}\\)\\([0-9]\\{4\\}\\)/(\\1) \\2-\\3 [VALID_PHONE]/
}

# Date validation and standardization
/[0-9]\\{1,2\\}[\\/.-][0-9]\\{1,2\\}[\\/.-][0-9]\\{4\\}/ {
    # Convert to YYYY-MM-DD
    s#\\([0-9]\\{1,2\\}\\)[\\/.-]\\([0-9]\\{1,2\\}\\)[\\/.-]\\([0-9]\\{4\\}\\)#\\3-\\1-\\2#
    s/$/ [VALID_DATE]/
}

# Mark invalid entries
/^[^@]*@[^@]*\\.[^@]*$/! {
    /@.*@/ s/$/ [INVALID_EMAIL]/
}

/[0-9]\\{3\\}[-. ][0-9]\\{3\\}[-. ][0-9]\\{4\\}/! {
    /[0-9]\\{10,\\}/ s/$/ [INVALID_PHONE_FORMAT]/
}
EOF

echo "Sample data for validation:"
cat << 'EOF'
john.doe@example.com
invalid.email@com
555-123-4567
1234567890
01/15/2023
15-01-2023
invalid-date-2023
jane.smith@company.co.in
(555) 987-6543
EOF

echo ""
echo "Validation results:"
sed -f validate_data.sed << 'EOF'
john.doe@example.com
invalid.email@com
555-123-4567
1234567890
01/15/2023
15-01-2023
invalid-date-2023
jane.smith@company.co.in
(555) 987-6543
EOF`,i=`#!/bin/bash
# Batch File Processing Example
# Processing multiple files with sed

echo "=== Batch Processing Multiple Files ==="
echo "Creating sample data files..."

# Create sample data files
mkdir -p /tmp/sed_demo

cat > /tmp/sed_demo/data1.txt << 'EOF'
Student,Score,Date
John,85,04-12-2023
Jane,92,2023/12/04
Bob,78,Dec 4, 2023
EOF

cat > /tmp/sed_demo/data2.txt << 'EOF'
Employee,Department,Salary
Alice,IT,$75000
Bob,HR,$65000
Charlie,Sales,$80000
EOF

cat > /tmp/sed_demo/data3.txt << 'EOF'
Product,Price,Stock
Laptop,$999,50
Mouse,$49,200
Keyboard,$79,150
EOF

echo "Original files created in /tmp/sed_demo/"
echo ""
echo "Processing all text files in batch:"

# Create cleanup script
cat > /tmp/cleanup_script.sed << 'EOF'
# Common cleanup operations
s/\\$//g
s/, /,/g
s/ ,/,/g
s/^[[:space:]]*//
s/[[:space:]]*$//
EOF

echo ""
echo "1. Clean all files (remove $ and fix commas):"
for file in /tmp/sed_demo/*.txt; do
    echo "Processing $(basename $file)..."
    sed -f /tmp/cleanup_script.sed "$file" | head -3
    echo "---"
done

echo ""
echo "2. Create backup and modify files in-place:"
echo "sed -i.bak -f /tmp/cleanup_script.sed /tmp/sed_demo/*.txt"
echo "(This would create backup files with .bak extension)"

echo ""
echo "3. Process and output to new directory:"
mkdir -p /tmp/sed_demo/cleaned
for file in /tmp/sed_demo/*.txt; do
    base=$(basename "$file" .txt)
    sed -f /tmp/cleanup_script.sed "$file" > "/tmp/sed_demo/cleaned/\${base}_cleaned.txt"
    echo "Created: \${base}_cleaned.txt"
done

echo ""
echo "4. Log all changes made:"
echo "Processing with logging..."
for file in /tmp/sed_demo/*.txt; do
    echo "=== Processing $(basename $file) ===" >> /tmp/sed_demo/processing.log
    sed -f /tmp/cleanup_script.sed "$file" | tee -a "/tmp/sed_demo/cleaned/$(basename $file)" >> /tmp/sed_demo/processing.log
    echo "---" >> /tmp/sed_demo/processing.log
done
echo "Log saved to /tmp/sed_demo/processing.log"`,c=()=>e.jsxs("div",{className:"dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 p-4 md:p-8",children:[e.jsx("style",{children:`
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
                
                @keyframes pulseSubtle {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
                
                @keyframes svgFlow {
                    0% {
                        stroke-dashoffset: 1000;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
                `}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.8s_ease-out] mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-3 h-8 bg-blue-500 rounded-full"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent",children:"Topic 19: Data Cleanup and Normalization Using sed"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed animate-[fadeSlideUp_1s_ease-out]",children:"Master the art of cleaning and standardizing data using sed's powerful text transformation capabilities"})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1s_ease-out] mb-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Why Data Cleanup Matters"]}),e.jsx("p",{className:"text-gray-300 leading-relaxed mb-4",children:"In real-world data processing, raw data is often messy, inconsistent, and requires standardization before analysis. Swadeep from Barrackpore recently struggled with inconsistent student data where names, dates, and scores were formatted differently across files."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"bg-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-green-300 mb-2",children:"Common Data Issues"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Inconsistent date formats"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Mixed case entries"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Extra whitespace"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Inconsistent delimiters"]})]})]}),e.jsxs("div",{className:"bg-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-yellow-300 mb-2",children:"sed Solution Benefits"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Batch processing capabilities"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Consistent transformations"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Non-interactive automation"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Pattern-based cleanup"]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Understanding Data Cleanup Patterns"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/40 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-cyan-200",children:"What is Data Cleanup?"}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:'Data cleanup involves transforming raw, inconsistent data into a standardized format. When Abhronila from Shyamnagar collected survey data, she found entries like "12-04-2023", "April 12, 2023", and "2023/04/12" all referring to the same date.'})]}),e.jsxs("div",{className:"bg-gray-800/40 p-5 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-purple-200",children:"Normalization Goals"}),e.jsxs("ul",{className:"space-y-2 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-400 mt-1",children:"•"}),"Standardize date/time formats across dataset"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-400 mt-1",children:"•"}),"Convert text to consistent case (lower/upper)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-400 mt-1",children:"•"}),"Remove unnecessary whitespace and characters"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-400 mt-1",children:"•"}),"Replace inconsistent delimiters with standard ones"]})]})]})]}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 h-full",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-blue-200",children:"Cleanup Process Flow"}),e.jsxs("svg",{viewBox:"0 0 400 300",className:"w-full h-64",children:[e.jsx("rect",{x:"20",y:"40",width:"80",height:"40",rx:"5",fill:"#4B5563",stroke:"#6B7280",strokeWidth:"2",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#4B5563;#6B7280;#4B5563",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"60",y:"65",textAnchor:"middle",fill:"#D1D5DB",fontSize:"12",children:"Raw Data"}),e.jsx("path",{d:"M110,60 L150,60",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"150,60 142,55 142,65",fill:"#9CA3AF"}),e.jsx("rect",{x:"160",y:"40",width:"80",height:"40",rx:"5",fill:"#1E40AF",stroke:"#3B82F6",strokeWidth:"2",className:"hover:fill-blue-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.8;1",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"65",textAnchor:"middle",fill:"#E5E7EB",fontSize:"12",children:"sed Processing"}),e.jsx("path",{d:"M250,60 L290,60",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("polygon",{points:"290,60 282,55 282,65",fill:"#9CA3AF"}),e.jsx("rect",{x:"300",y:"40",width:"80",height:"40",rx:"5",fill:"#065F46",stroke:"#10B981",strokeWidth:"2",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065F46;#10B981;#065F46",dur:"3s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"340",y:"65",textAnchor:"middle",fill:"#E5E7EB",fontSize:"12",children:"Clean Data"}),e.jsxs("g",{transform:"translate(0, 100)",children:[e.jsx("rect",{x:"20",y:"40",width:"360",height:"120",rx:"8",fill:"#1F2937",stroke:"#374151",strokeWidth:"1"}),e.jsx("text",{x:"40",y:"70",fill:"#9CA3AF",fontSize:"10",children:'Input: "John  DOE , NewYork  " (messy)'}),e.jsx("path",{d:"M40,80 L360,80",stroke:"#4B5563",strokeWidth:"1",strokeDasharray:"2,2"}),e.jsx("text",{x:"40",y:"110",fill:"#9CA3AF",fontSize:"10",children:"sed command: s/\\\\s\\\\+,/,/g; s/\\\\s\\\\+/ /g"}),e.jsx("path",{d:"M40,120 L360,120",stroke:"#4B5563",strokeWidth:"1",strokeDasharray:"2,2"}),e.jsx("text",{x:"40",y:"150",fill:"#10B981",fontSize:"10",children:'Output: "John DOE,NewYork" (clean)'})]})]}),e.jsx("p",{className:"text-sm text-gray-400 mt-4 text-center",children:"The flow shows how sed transforms inconsistent data into standardized format"})]})})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.4s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-emerald-300 border-b border-emerald-800 pb-2",children:"Practical sed Cleanup Examples"}),e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 mb-6",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-emerald-200",children:"Example 1: Basic Data Cleanup"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"When Debangshu was preparing student data from Ichapur schools, he encountered inconsistent spacing and formatting. Here's how to fix it:"}),e.jsx(s,{fileModule:a,title:"Basic Data Cleanup Script",highlightLines:[3,6,9,12]}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-2",children:"Expected Output:"}),e.jsxs("pre",{className:"text-sm text-gray-300 font-mono",children:["Name,Age,Grade,City",`
`,"John Doe,15,A,New York",`
`,"Jane Smith,16,B,Los Angeles",`
`,"Bob Johnson,14,A,Chicago"]})]})]})}),e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Example 2: Advanced Normalization"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Tuhina from Naihati needed to standardize product data with mixed case, inconsistent date formats, and varying units:"}),e.jsx(s,{fileModule:t,title:"Data Normalization Script",highlightLines:[4,8,12,16,20]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg border border-red-500/20",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-2",children:"Before Normalization:"}),e.jsxs("pre",{className:"text-xs text-gray-400",children:["product: Laptop, price: $999.99, date: 04-12-2023",`
`,"PRODUCT: MOUSE, PRICE: $49.50, DATE: 2023/12/04",`
`,"Product: Keyboard, Price: $79, Date: Dec 4, 2023"]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg border border-green-500/20",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"After Normalization:"}),e.jsxs("pre",{className:"text-xs text-gray-300",children:["Product: Laptop, Price: 999.99, Date: 2023-12-04",`
`,"Product: Mouse, Price: 49.50, Date: 2023-12-04",`
`,"Product: Keyboard, Price: 79.00, Date: 2023-12-04"]})]})]})]})})]}),e.jsx("div",{className:"animate-[fadeSlideUp_1.6s_ease-out] mb-12",children:e.jsxs("div",{className:"bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-purple-300 border-b border-purple-800 pb-2",children:"Complex Cleanup Pipeline"}),e.jsx(s,{fileModule:n,title:"Multi-step Cleanup Pipeline",highlightLines:[2,4,6,8,10,12]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/40 rounded-xl",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-cyan-200",children:"Pipeline Breakdown"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-green-400 mb-1",children:"Step 1"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Trim extra spaces"})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-blue-400 mb-1",children:"Step 2"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Standardize case"})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-yellow-400 mb-1",children:"Step 3"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Fix date formats"})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-purple-400 mb-1",children:"Step 4"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Clean currency"})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-pink-400 mb-1",children:"Step 5"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Remove duplicates"})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-300",children:[e.jsx("div",{className:"text-sm font-semibold text-red-400 mb-1",children:"Step 6"}),e.jsx("div",{className:"text-xs text-gray-300",children:"Final validation"})]})]})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.8s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-yellow-300 border-b border-yellow-800 pb-2",children:"Pattern Validation & Error Detection"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:r,title:"Data Validation Script",highlightLines:[3,6,9,12,15,18]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-yellow-200",children:"Validation Rules Applied"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),e.jsx("span",{className:"text-gray-300",children:"Email format validation"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-500"}),e.jsx("span",{className:"text-gray-300",children:"Phone number pattern matching"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-500"}),e.jsx("span",{className:"text-gray-300",children:"Date format standardization"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),e.jsx("span",{className:"text-gray-300",children:"Marking invalid entries"})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Batch File Processing"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:i,title:"Batch Processing Multiple Files",highlightLines:[2,4,6,8,10]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-3",children:"File Processing Flow"}),e.jsxs("svg",{viewBox:"0 0 300 200",className:"w-full",children:[e.jsx("rect",{x:"20",y:"20",width:"60",height:"40",rx:"5",fill:"#4B5563",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("animate",{attributeName:"y",values:"20;25;20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"50",y:"45",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"data1.txt"}),e.jsx("rect",{x:"20",y:"80",width:"60",height:"40",rx:"5",fill:"#4B5563",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("animate",{attributeName:"y",values:"80;85;80",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("text",{x:"50",y:"105",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"data2.txt"}),e.jsx("rect",{x:"20",y:"140",width:"60",height:"40",rx:"5",fill:"#4B5563",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("animate",{attributeName:"y",values:"140;145;140",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"50",y:"165",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"data3.txt"}),e.jsx("path",{d:"M90,40 L140,40 M90,100 L140,100 M90,160 L140,160",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"3s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"150",y:"60",width:"80",height:"80",rx:"10",fill:"#1E40AF",className:"hover:fill-blue-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"190",y:"105",textAnchor:"middle",fill:"#E5E7EB",fontSize:"12",children:"sed"}),e.jsx("path",{d:"M240,100 L290,100",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"3s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("rect",{x:"300",y:"60",width:"80",height:"80",rx:"10",fill:"#065F46",className:"hover:fill-emerald-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#065F46;#10B981;#065F46",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"340",y:"105",textAnchor:"middle",fill:"#E5E7EB",fontSize:"12",children:"Clean Files"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-900/40 p-3 rounded-lg hover:bg-gray-900/60 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Wildcard Processing"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Process all .txt files in directory"})]}),e.jsxs("div",{className:"bg-gray-900/40 p-3 rounded-lg hover:bg-gray-900/60 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-1",children:"Backup Creation"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Automatic backup before modification"})]}),e.jsxs("div",{className:"bg-gray-900/40 p-3 rounded-lg hover:bg-gray-900/60 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-1",children:"Log Generation"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Track all changes made"})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-red-300 border-b border-red-800 pb-2",children:"Common Pitfalls & Solutions"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-red-700/30 hover:border-red-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-red-200",children:"Beginner Mistakes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg hover:bg-red-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"No Backup Copies"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Editing files without backup using -i flag"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Always use sed -i.bak or keep original copies"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg hover:bg-red-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Greedy Patterns"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Using .* without considering boundaries"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Use non-greedy patterns or specific character classes"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg hover:bg-red-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Case Sensitivity"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Forgetting to handle different text cases"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Use /I flag or convert to lowercase first"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-yellow-200",children:"Professional Tips"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg hover:bg-yellow-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Test First, Apply Later"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Always test sed commands without -i flag first"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: sed 's/pattern/replacement/' file | head -5"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg hover:bg-yellow-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Use Script Files"}),e.jsx("p",{className:"text-sm text-gray-300",children:"For complex transformations, use sed -f script.sed"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Maintain reusable sed script libraries"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg hover:bg-yellow-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Log Changes"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Always log what changes were made and when"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Use tee to log while processing"})]})]})]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_2.4s_ease-out] mb-12",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/50 hover:border-cyan-500/50 transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z",opacity:"0.5"})]})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-cyan-300",children:"Teacher's Note"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-900/40 rounded-xl border border-gray-700",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Dear students, data cleanup is 80% of data analysis work. I've seen many students, including Swadeep and Tuhina, spend hours manually cleaning data when a few sed commands could do it in seconds. Remember: Always backup, test on sample data first, and document your transformation rules."})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-300",children:"Sukanta Hui"}),e.jsx("div",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-green-300",children:"Contact"}),e.jsx("div",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-purple-300",children:"Expertise"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Data Processing, Automation"})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-yellow-200",children:"Pro Tip for Exams"}),e.jsx("p",{className:"text-gray-300",children:"In practical exams, always show your work: 1) Original data sample, 2) Your sed command, 3) Output sample. This demonstrates understanding even if the result isn't perfect."})]})]})]})})}),e.jsx("div",{className:"animate-[fadeSlideUp_2.6s_ease-out]",children:e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-300 border-b border-green-800 pb-2",children:"What to Remember"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-green-200",children:"Always Backup"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Use -i.bak or keep original copies before editing"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-blue-200",children:"Test Incrementally"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Test each sed command separately before combining"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-purple-200",children:"Order Matters"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Apply sed commands in logical sequence (clean → format → validate)"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-yellow-200",children:"Document Patterns"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Keep a cheat sheet of common sed patterns for data cleanup"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"5"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-200",children:"Handle Edge Cases"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Consider empty lines, special characters, and unexpected formats"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:"6"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-cyan-200",children:"Validate Results"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Always check output for consistency and completeness"})]})]})]})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Hint Section"}),e.jsx("p",{className:"text-gray-300 italic",children:"Think about: How would you handle data where some entries use tabs and others use spaces as delimiters? Observe carefully: What patterns emerge in messy data that can be exploited for cleanup? Try changing this: Instead of multiple sed commands, can you use a single command with multiple expressions?"})]})]})})]})]});export{c as default};

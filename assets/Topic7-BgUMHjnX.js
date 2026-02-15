import{r as i,j as e}from"./index-CG3iA-Ea.js";import{c as d}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const o=`#!/bin/bash
# String Length Examples
# Topic 7: String Manipulation

echo "=== STRING LENGTH EXAMPLES ==="
echo

# Example 1: Basic length calculation
name="Swadeep"
echo "Example 1: Basic length"
echo "Name: $name"
echo "Length: \${#name} characters"
echo

# Example 2: String with spaces
full_name="Swadeep Kumar"
echo "Example 2: String with spaces"
echo "Full Name: $full_name"
echo "Length (unquoted): \${#full_name} characters"
echo "Length (quoted): \${#\\"$full_name\\"} characters"
echo

# Example 3: Empty string
empty_string=""
echo "Example 3: Empty string"
echo "Empty string length: \${#empty_string}"
echo

# Example 4: Special characters
special="Hello@2024#Barrackpore"
echo "Example 4: String with special characters"
echo "String: $special"
echo "Length: \${#special}"
echo

# Example 5: Multi-line string (using variable)
address="123 Main Street
Barrackpore
Kolkata 700120"
echo "Example 5: Multi-line string length"
echo "Address:"
echo "$address"
echo "Length (first line only): \${#address}"
echo "Note: Newlines count as single character"
echo

# Example 6: Practical use - validation
validate_password() {
    local password="$1"
    local min_length=8
    
    if [ \${#password} -lt $min_length ]; then
        echo "Password too short! Minimum $min_length characters required."
    else
        echo "Password length OK."
    fi
}

echo "Example 6: Password validation"
validate_password "pass123"
validate_password "SecurePass@2024"`,c=`#!/bin/bash
# Substring Extraction Examples
# Topic 7: String Manipulation

echo "=== SUBSTRING EXTRACTION EXAMPLES ==="
echo

# Example 1: Extract from position to end
text="Hello from Ichapur"
echo "Example 1: Extract from position 6 to end"
echo "Original: $text"
echo "Substring: \${text:6}"
echo

# Example 2: Extract with specific length
echo "Example 2: Extract 4 characters from position 7"
echo "Original: $text"
echo "Substring: \${text:7:4}"
echo

# Example 3: Extract last characters (using negative position)
filename="assignment_final_v2.pdf"
echo "Example 3: Extract file extension"
echo "Filename: $filename"
extension="\${filename: -3}"  # Note: space before negative
echo "Extension: $extension"
echo

# Example 4: Extract middle portion
student_id="S2023001_CS101_A+"
echo "Example 4: Extract course code"
echo "Student ID: $student_id"
course_code="\${student_id:8:5}"
echo "Course Code: $course_code"
echo

# Example 5: Extract using variable positions
path="/home/tuhina/documents/report_2024.txt"
echo "Example 5: Extract filename without extension"
echo "Path: $path"

# Find last slash position (simulated)
filename_with_ext="\${path##*/}"
echo "Filename with ext: $filename_with_ext"

# Extract without extension
filename_no_ext="\${filename_with_ext%.*}"
echo "Filename without ext: $filename_no_ext"
echo

# Example 6: Practical - Extract date components
date_string="2024-12-15"
echo "Example 6: Extract date components"
echo "Date: $date_string"
year="\${date_string:0:4}"
month="\${date_string:5:2}"
day="\${date_string:8:2}"
echo "Year: $year, Month: $month, Day: $day"`,m=`#!/bin/bash
# String Replacement Examples
# Topic 7: String Manipulation

echo "=== STRING REPLACEMENT EXAMPLES ==="
echo

# Example 1: Replace first occurrence
text="The quick brown fox jumps over the lazy dog"
echo "Example 1: Replace first 'the' with 'a'"
echo "Original: $text"
echo "Modified: \${text/the/a}"
echo

# Example 2: Replace all occurrences
echo "Example 2: Replace all spaces with underscores"
echo "Original: $text"
echo "Modified: \${text// /_}"
echo

# Example 3: Replace at beginning only (prefix)
filename="backup_2024_12_15.tar.gz"
echo "Example 3: Replace 'backup' with 'archive' at beginning"
echo "Original: $filename"
echo "Modified: \${filename/#backup/archive}"
echo

# Example 4: Replace at end only (suffix)
echo "Example 4: Replace '.gz' with '.zip' at end"
echo "Original: $filename"
echo "Modified: \${filename/%.gz/.zip}"
echo

# Example 5: Practical - Sanitize filename
bad_filename="My Document (Final Version).pdf"
echo "Example 5: Sanitize filename"
echo "Original: $bad_filename"

# Remove spaces
sanitized="\${bad_filename// /_}"
# Remove parentheses
sanitized="\${sanitized//[()]/}"
# Convert to lowercase
sanitized="\${sanitized,,}"

echo "Sanitized: $sanitized"
echo

# Example 6: Replace with pattern
log_entry="ERROR: Connection timeout at 192.168.1.100"
echo "Example 6: Mask IP addresses"
echo "Original: $log_entry"

# Simple IP masking (for demonstration)
masked="\${log_entry//[0-9]/X}"
echo "Masked: $masked"
echo

# Example 7: Multiple replacements in sequence
message="Hello WORLD! Today is 2024-12-15"
echo "Example 7: Multiple transformations"
echo "Original: $message"

# Convert to lowercase
step1="\${message,,}"
# Replace spaces with hyphens
step2="\${step1// /-}"
# Remove punctuation
step3="\${step2//[!]/}"

echo "Step 1 (lowercase): $step1"
echo "Step 2 (hyphens): $step2"
echo "Step 3 (no punctuation): $step3"`,x=`#!/bin/bash
# Regex Pattern Matching Examples
# Topic 7: String Manipulation

echo "=== REGEX PATTERN MATCHING EXAMPLES ==="
echo

# Example 1: Simple pattern matching
email="abhronila@shyamnagar-college.edu.in"
echo "Example 1: Validate email format"
echo "Email: $email"

if [[ $email =~ ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$ ]]; then
    echo "✓ Valid email format"
    
    # Extract domain using BASH_REMATCH
    echo "Domain: \${BASH_REMATCH[0]##*@}"
else
    echo "✗ Invalid email format"
fi
echo

# Example 2: Extract specific patterns
log_line="2024-12-15 14:30:25 [INFO] User 'debangshu' logged in from 192.168.1.50"
echo "Example 2: Parse log entry"
echo "Log line: $log_line"

if [[ $log_line =~ ([0-9]{4}-[0-9]{2}-[0-9]{2})\\ ([0-9]{2}:[0-9]{2}:[0-9]{2})\\ \\[(INFO|WARN|ERROR)\\] ]]; then
    echo "✓ Pattern matched"
    echo "Date: \${BASH_REMATCH[1]}"
    echo "Time: \${BASH_REMATCH[2]}"
    echo "Level: \${BASH_REMATCH[3]}"
fi

# Extract username
if [[ $log_line =~ \\'([A-Za-z]+)\\' ]]; then
    echo "Username: \${BASH_REMATCH[1]}"
fi

# Extract IP address
if [[ $log_line =~ ([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}) ]]; then
    echo "IP Address: \${BASH_REMATCH[1]}"
fi
echo

# Example 3: Phone number validation
phone_numbers=("+91 98765 43210" "9876543210" "033 1234 5678" "12345" "abcd")
echo "Example 3: Phone number validation"

for phone in "\${phone_numbers[@]}"; do
    echo -n "Testing '$phone': "
    
    if [[ $phone =~ ^(\\+91[[:space:]])?[0-9]{10}$ ]] || \\
       [[ $phone =~ ^[0-9]{3}[[:space:]][0-9]{4}[[:space:]][0-9]{4}$ ]]; then
        echo "✓ Valid phone number"
    else
        echo "✗ Invalid phone number"
    fi
done
echo

# Example 4: URL parsing
url="https://www.naihati-college.edu.in:8080/department/cs/index.html"
echo "Example 4: Parse URL components"
echo "URL: $url"

if [[ $url =~ ^(https?)://([^:/]+)(:([0-9]+))?(/.*)$ ]]; then
    echo "Protocol: \${BASH_REMATCH[1]}"
    echo "Domain: \${BASH_REMATCH[2]}"
    echo "Port: \${BASH_REMATCH[4]:-80 (default)}"
    echo "Path: \${BASH_REMATCH[5]}"
fi
echo

# Example 5: File extension check
filename="report_final_v2.pdf"
echo "Example 5: Check file extension"
echo "Filename: $filename"

if [[ $filename =~ \\.(pdf|txt|docx?)$ ]]; then
    echo "✓ Supported document format"
    echo "Extension: \${BASH_REMATCH[1]}"
else
    echo "✗ Unsupported file format"
fi`,h=`#!/bin/bash
# Complete Practical Example
# Topic 7: String Manipulation - All operations combined

echo "=== COMPREHENSIVE PRACTICAL EXAMPLE ==="
echo "Scenario: Student Record Processing System"
echo

# Sample student records (simulating a database)
records=(
    "S2023001|Swadeep Kumar|swadeep@college.edu|9876543210|CS101|A+"
    "S2023002|Tuhina Das|tuhina_das@shyamnagar.edu|8765432109|MA202|B"
    "S2023003|Abhronila Sen|abroni.sen@naihati.edu.in|7654321098|PH303|A"
    "S2023004|Debangshu Roy|deban.roy@ichapur.ac.in|9012345678|CS101|A-"
    "S2023055|John Smith|john@test|12345|EE404|C"  # Invalid records
)

echo "Processing \${#records[@]} student records..."
echo

valid_count=0
invalid_count=0

for record in "\${records[@]}"; do
    echo "--- Processing Record ---"
    
    # Split record into components
    IFS='|' read -r student_id full_name email phone course grade <<< "$record"
    
    echo "Raw Data:"
    echo "  ID: $student_id"
    echo "  Name: $full_name"
    echo "  Email: $email"
    echo "  Phone: $phone"
    echo "  Course: $course"
    echo "  Grade: $grade"
    
    # ========== STRING VALIDATION & TRANSFORMATION ==========
    
    # 1. Validate Student ID format: S followed by 7 digits
    if [[ ! $student_id =~ ^S[0-9]{7}$ ]]; then
        echo "  ❌ Invalid Student ID format"
        ((invalid_count++))
        continue
    fi
    
    # 2. Extract year from student ID (positions 1-4)
    year="\${student_id:1:4}"
    echo "  📅 Admission Year: $year"
    
    # 3. Format name: Convert to "Last, First" format
    if [[ $full_name =~ ^([A-Za-z]+)[[:space:]]([A-Za-z]+)$ ]]; then
        first_name="\${BASH_REMATCH[1]}"
        last_name="\${BASH_REMATCH[2]}"
        formatted_name="$last_name, $first_name"
        echo "  👤 Formatted Name: $formatted_name"
    else
        echo "  ⚠️  Name format unusual: $full_name"
        formatted_name="$full_name"
    fi
    
    # 4. Validate and extract email domain
    if [[ $email =~ ^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\\.[A-Za-z]{2,})$ ]]; then
        domain="\${BASH_REMATCH[1]}"
        echo "  📧 Valid email | Domain: $domain"
        
        # Create username from email (part before @)
        username="\${email%@*}"
        echo "  👤 Username: $username"
    else
        echo "  ❌ Invalid email format"
        ((invalid_count++))
        continue
    fi
    
    # 5. Standardize phone number format
    # Remove all non-digits
    clean_phone="\${phone//[^0-9]/}"
    
    # Check if it's a valid 10-digit number
    if [[ \${#clean_phone} -eq 10 ]]; then
        # Format as +91 XXXXX XXXXX
        formatted_phone="+91 \${clean_phone:0:5} \${clean_phone:5:5}"
        echo "  📱 Formatted Phone: $formatted_phone"
    else
        echo "  ❌ Invalid phone number (must be 10 digits)"
        ((invalid_count++))
        continue
    fi
    
    # 6. Course code validation and expansion
    case $course in
        CS101)
            course_name="Computer Science Fundamentals"
            ;;
        MA202)
            course_name="Advanced Mathematics"
            ;;
        PH303)
            course_name="Modern Physics"
            ;;
        EE404)
            course_name="Electrical Engineering"
            ;;
        *)
            course_name="Unknown Course"
            ;;
    esac
    echo "  📚 Course: $course ($course_name)"
    
    # 7. Grade validation
    valid_grades=("A+" "A" "A-" "B+" "B" "B-" "C+" "C" "C-" "D" "F")
    if [[ " \${valid_grades[*]} " =~ " $grade " ]]; then
        echo "  🎓 Valid Grade: $grade"
        
        # Calculate grade points
        case $grade in
            "A+") points=4.0 ;;
            "A")  points=3.8 ;;
            "A-") points=3.6 ;;
            "B+") points=3.3 ;;
            "B")  points=3.0 ;;
            "B-") points=2.7 ;;
            "C+") points=2.3 ;;
            "C")  points=2.0 ;;
            "C-") points=1.7 ;;
            "D")  points=1.0 ;;
            "F")  points=0.0 ;;
        esac
        echo "  ⭐ Grade Points: $points"
    else
        echo "  ❌ Invalid grade"
        ((invalid_count++))
        continue
    fi
    
    # 8. Generate student summary
    summary="Student: $formatted_name | ID: $student_id | Course: $course_name | Grade: $grade"
    
    # Truncate if too long (max 80 chars)
    if [ \${#summary} -gt 80 ]; then
        summary="\${summary:0:77}..."
    fi
    echo "  📋 Summary: $summary"
    
    # 9. Generate filename for student report
    # Remove special characters from name for filename
    safe_name="\${formatted_name//[^A-Za-z0-9, ]/_}"
    safe_name="\${safe_name//, /_}"
    safe_name="\${safe_name// /_}"
    
    filename="report_\${student_id}_\${safe_name}.txt"
    echo "  💾 Report File: $filename"
    
    ((valid_count++))
    echo
done

# ========== FINAL REPORT ==========
echo "=== PROCESSING COMPLETE ==="
echo
echo "📊 Summary Statistics:"
echo "  Total Records Processed: \${#records[@]}"
echo "  ✅ Valid Records: $valid_count"
echo "  ❌ Invalid Records: $invalid_count"
echo "  📈 Success Rate: $(( (valid_count * 100) / \${#records[@]} ))%"
echo

# Additional analysis
echo "📈 Additional Analysis:"
echo -n "  📅 Students by admission year: "
for year in 2023 2024 2025; do
    count=0
    for record in "\${records[@]}"; do
        if [[ $record =~ ^S\${year}[0-9]{3} ]]; then
            ((count++))
        fi
    done
    [ $count -gt 0 ] && echo -n "$year: $count | "
done
echo

# Extract all domains from emails
echo -n "  🌐 Email domains found: "
declare -A domains
for record in "\${records[@]}"; do
    if [[ $record =~ @([A-Za-z0-9.-]+\\.[A-Za-z]{2,}) ]]; then
        domain="\${BASH_REMATCH[1]}"
        ((domains[$domain]++))
    fi
done

for domain in "\${!domains[@]}"; do
    echo -n "$domain (\${domains[$domain]}) | "
done
echo
echo
echo "🎯 This example demonstrates real-world application of:"
echo "   • String length validation"
echo "   • Substring extraction"
echo "   • Pattern replacement"
echo "   • Regular expression matching"
echo "   • Data transformation and formatting"`;function f(){const[n,l]=i.useState("overview");return i.useEffect(()=>{const a=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate-[slideUp_0.6s_ease-out_forwards]"),t.target.classList.remove("opacity-0"))})},{threshold:.1});return document.querySelectorAll(".section-reveal").forEach(s=>a.observe(s)),()=>a.disconnect()},[n]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-6 transition-colors duration-300",children:[e.jsx("style",{children:`
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes svgFlow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
        `}),e.jsx("header",{className:"section-reveal max-w-6xl mx-auto mb-12 opacity-0",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-4 animate-pulse",children:"Topic 7"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"String Manipulation in Bash"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed",children:"Master the art of manipulating text in shell scripts: calculating length, extracting substrings, performing replacements, and pattern matching with regular expressions."})]}),e.jsx("div",{className:"w-full md:w-1/3",children:e.jsxs("svg",{viewBox:"0 0 400 200",className:"w-full h-48",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"textGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#3b82f6",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#8b5cf6",stopOpacity:1}})]})}),e.jsx("rect",{x:"20",y:"80",width:"360",height:"40",rx:"8",fill:"none",stroke:"url(#textGradient)",strokeWidth:"3",className:"stroke-dasharray-100 stroke-dashoffset-100 animate-[svgFlow_2s_ease-in-out_forwards]"}),e.jsx("rect",{x:"80",y:"85",width:"120",height:"30",rx:"4",fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",className:"hover:fill-opacity-40 transition-all duration-300",children:e.jsx("animate",{attributeName:"x",values:"80;100;80",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"50",textAnchor:"middle",className:"text-2xl font-bold fill-gray-800 dark:fill-gray-200",children:"Hello, Swadeep!"}),e.jsx("line",{x1:"20",y1:"130",x2:"380",y2:"130",stroke:"#10b981",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("text",{x:"200",y:"150",textAnchor:"middle",className:"fill-emerald-600 dark:fill-emerald-400 font-semibold",children:"Length: 14"})]})})]})})}),e.jsx("nav",{className:"section-reveal max-w-6xl mx-auto mb-8 opacity-0",children:e.jsx("div",{className:"flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl",children:["overview","length","substring","replace","regex","practical","mistakes","best-practices"].map(a=>e.jsx("button",{onClick:()=>l(a),className:d("px-4 py-2 rounded-lg font-medium transition-all duration-300",n===a?"bg-white dark:bg-gray-700 shadow-md text-blue-600 dark:text-blue-400":"hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"),children:a.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")},a))})}),e.jsxs("main",{className:"max-w-6xl mx-auto",children:[n==="overview"&&e.jsxs("div",{className:"space-y-8",children:[e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-blue-100 dark:bg-blue-900 rounded-lg",children:"📝"}),"What is String Manipulation?"]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",children:["String manipulation refers to the process of ",e.jsx("span",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"analyzing, modifying, and extracting information"})," from text data. In shell scripting, strings are sequences of characters that can represent filenames, paths, user input, configuration data, or any textual information."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:"Parsing log files from Naihati server"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:"Validating user input (Tuhina's registration form)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:"Transforming file names in bulk"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:"Extracting specific data from CSV files"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"Key Operations"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"🔤"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Length:"})," Count characters in a string"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"✂️"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Substring:"})," Extract portions of text"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"🔄"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Replace:"})," Find and replace patterns"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"🔍"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Regex:"})," Advanced pattern matching"]})]})]})]})]})]})]})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-200",children:e.jsxs("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-2xl p-8 shadow-2xl",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-white text-center",children:"String Manipulation Journey"}),e.jsx("div",{className:"relative",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full h-48",children:[e.jsx("path",{d:"M50,100 C150,100 250,50 350,100 S550,150 650,100",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:"10,5",className:"stroke-dasharray-100 stroke-dashoffset-100 animate-[svgFlow_3s_ease-in-out_forwards]"}),[{x:50,y:100,text:"Input",color:"#3b82f6"},{x:200,y:50,text:"Length",color:"#10b981"},{x:350,y:100,text:"Substring",color:"#f59e0b"},{x:500,y:150,text:"Replace",color:"#ef4444"},{x:650,y:100,text:"Output",color:"#8b5cf6"}].map((a,s)=>e.jsxs("g",{children:[e.jsx("circle",{cx:a.x,cy:a.y,r:"20",fill:a.color,className:"hover:r-24 transition-all duration-300 cursor-pointer"}),e.jsx("text",{x:a.x,y:a.y+40,textAnchor:"middle",className:"fill-white text-sm font-semibold",children:a.text})]},s))]})})]})})]}),n==="length"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-green-100 dark:bg-green-900 rounded-lg",children:"📏"}),"Finding String Length"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300",children:"Syntax & Prototype"}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mb-6",children:[e.jsx("code",{className:"text-lg text-gray-700 dark:text-gray-300 font-mono",children:"${#variable_name}"}),e.jsxs("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:["The ",e.jsx("span",{className:"font-semibold",children:"#"})," operator returns the number of characters in the string value of the variable."]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Purpose & Usage"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"1"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"Input Validation:"})," Check if user input meets length requirements"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"2"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"Data Truncation:"})," Ensure strings fit within database fields"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"3"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"Progress Indicators:"})," Calculate percentage completion"]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300",children:"Real-world Example"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["When ",e.jsx("span",{className:"font-semibold",children:"Swadeep"})," submits his assignment filename, we need to check if it follows the naming convention: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"studentID_assignment.ext"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Filename:"}),e.jsx("span",{className:"font-mono",children:"S2023001_bash_assignment.pdf"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Length:"}),e.jsx("span",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:"30 characters"})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:o,title:"String Length Examples",highlightLines:[4,7,10,14,17]})})]})})}),n==="substring"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-amber-100 dark:bg-amber-900 rounded-lg",children:"✂️"}),"Substring Extraction"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-amber-700 dark:text-amber-300",children:"Syntax Variations"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsxs("h4",{className:"font-mono text-lg mb-2",children:["$","${string:position}"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Extract from position to end"}),e.jsx("p",{className:"text-sm text-amber-600 dark:text-amber-400 mt-2",children:"Position starts at 0"})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsxs("h4",{className:"font-mono text-lg mb-2",children:["$","${string:position:length}"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Extract specific number of characters"}),e.jsx("p",{className:"text-sm text-amber-600 dark:text-amber-400 mt-2",children:"Control exact substring size"})]})]})]}),e.jsxs("div",{className:"mb-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-amber-800 dark:text-amber-300",children:"Visual Demonstration"}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"inline-block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg",children:[e.jsx("div",{className:"flex items-center justify-center gap-1 mb-4",children:"Hello, Abhronila!".split("").map((a,s)=>e.jsx("div",{className:"w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 font-mono",children:a},s))}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("div",{children:"Positions:"}),e.jsx("div",{className:"flex gap-1 mt-1",children:Array.from({length:16}).map((a,s)=>e.jsx("div",{className:"w-8 text-center",children:s},s))})]})})]})})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:c,title:"Substring Extraction Examples",highlightLines:[5,8,11,14,19]})})]})})}),n==="replace"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-red-100 dark:bg-red-900 rounded-lg",children:"🔄"}),"String Replacement"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-6 text-red-700 dark:text-red-300",children:"Replacement Patterns"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[{pattern:"${string/pattern/replacement}",desc:"First occurrence",type:"single"},{pattern:"${string//pattern/replacement}",desc:"All occurrences",type:"global"},{pattern:"${string/#pattern/replacement}",desc:"Start of string",type:"prefix"},{pattern:"${string/%pattern/replacement}",desc:"End of string",type:"suffix"}].map((a,s)=>e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800 hover:scale-105 transition-transform duration-300",children:[e.jsx("code",{className:"font-mono text-sm block mb-2 text-red-700 dark:text-red-300",children:a.pattern}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.desc}),e.jsx("span",{className:"inline-block mt-2 px-2 py-1 text-xs bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 rounded-full",children:a.type})]},s))})]}),e.jsxs("div",{className:"mb-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 p-6 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-red-800 dark:text-red-300",children:"Real Scenario: File Renaming"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("span",{className:"font-semibold",children:"Debangshu"})," has uploaded photos from his trip to Barrackpore, but they have spaces in filenames which cause issues in scripts:"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg",children:[e.jsx("span",{className:"text-red-500",children:"Before:"}),e.jsx("code",{className:"flex-1 font-mono",children:"IMG_2024 Barrackpore Trip.jpg"})]}),e.jsxs("div",{className:"flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg",children:[e.jsx("span",{className:"text-green-500",children:"After:"}),e.jsx("code",{className:"flex-1 font-mono",children:"IMG_2024_Barrackpore_Trip.jpg"})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:m,title:"String Replacement Examples",highlightLines:[5,9,13,17,21]})})]})})}),n==="regex"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-purple-100 dark:bg-purple-900 rounded-lg",children:"🔍"}),"Regular Expression Matching"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300",children:"Regex Operator: =~"}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-6",children:[e.jsx("code",{className:"text-lg text-gray-700 dark:text-gray-300 font-mono",children:"[[ $string =~ pattern ]]"}),e.jsxs("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:["The ",e.jsx("span",{className:"font-semibold",children:"=~"})," operator is used within double brackets for pattern matching. Captured groups are stored in the ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"BASH_REMATCH"})," array."]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Common Patterns"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{pattern:"^[A-Za-z]+$",desc:"Only letters"},{pattern:"^[0-9]{10}$",desc:"10-digit number (mobile)"},{pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",desc:"Email validation"},{pattern:"^\\+?[0-9\\s-]{10,}$",desc:"Phone numbers"},{pattern:"^\\d{2}-\\d{2}-\\d{4}$",desc:"Date format (DD-MM-YYYY)"},{pattern:"^[A-Z]{3}[0-9]{3}$",desc:"Vehicle registration"}].map((a,s)=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-400 transition-colors duration-300",children:[e.jsx("code",{className:"font-mono text-sm text-purple-600 dark:text-purple-400",children:a.pattern}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:a.desc})]},s))})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:x,title:"Regex Pattern Matching Examples",highlightLines:[5,9,14,19,24]})})]})})}),n==="practical"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg",children:"🚀"}),"Practical Applications"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300",children:"📊 Log File Analysis"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Analyzing web server logs from ",e.jsx("span",{className:"font-semibold",children:"Shyamnagar College"})," to extract:"]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{children:"IP addresses of visitors"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{children:"Requested URLs"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{children:"Response status codes"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{children:"Browser user agents"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-green-700 dark:text-green-300",children:"👨‍🎓 Student Data Processing"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Processing Ichapur University student records:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"Extract roll numbers from IDs"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"Format names consistently"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"Validate email patterns"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"Generate username from names"})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:h,title:"Complete Practical Example",highlightLines:[7,12,17,22,27,32]})})]})})}),n==="mistakes"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-2xl p-8 shadow-lg border border-rose-200 dark:border-rose-800",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-rose-800 dark:text-rose-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-rose-100 dark:bg-rose-900 rounded-lg",children:"⚠️"}),"Common Pitfalls & Mistakes"]}),e.jsx("div",{className:"space-y-6",children:[{title:"Off-by-One Errors in Substring",description:"Forgetting that Bash substring positions start at 0, not 1",example:"Getting 'ello' instead of 'Hello' when using ${string:1:4}",fix:"Remember: position 0 = first character"},{title:"Unquoted Variables with Spaces",description:"Not quoting variables leads to word splitting",example:"name='Swadeep Kumar'; echo ${#name} vs echo ${#\"$name\"}",fix:'Always quote variables: ${#"$variable"}'},{title:"Regex Special Characters Not Escaped",description:"Forgetting to escape dots, stars, or other regex metacharacters",example:"Matching 'file.txt' with 'file.txt' instead of 'file\\.txt'",fix:"Use double backslashes: 'file\\.txt'"},{title:"Assuming Case-Insensitive Matching",description:"Bash regex is case-sensitive by default",example:"'Hello' =~ 'hello' returns false",fix:"Use [[ ${string,,} =~ ${pattern,,} ]] or shopt -s nocasematch"},{title:"Ignoring Empty Strings",description:"Not handling empty strings can cause unexpected behavior",example:"${empty:0:3} returns empty without error",fix:'Check if string is empty first: [[ -n "$string" ]]'}].map((a,s)=>e.jsx("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-rose-300 dark:border-rose-700 hover:border-rose-500 transition-colors duration-300",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-rose-600 dark:text-rose-400 font-bold",children:s+1})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-rose-700 dark:text-rose-300",children:a.title}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:a.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-semibold text-rose-600 dark:text-rose-400",children:"Example:"}),e.jsx("code",{className:"block mt-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:a.example})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:"Fix:"}),e.jsx("code",{className:"block mt-1 font-mono text-sm bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded",children:a.fix})]})]})]})]})},s))})]})})}),n==="best-practices"&&e.jsxs("div",{className:"space-y-8",children:[e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-800 dark:text-emerald-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg",children:"✅"}),"Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"🛡️ Defensive Coding"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Always quote variables: ",e.jsxs("code",{children:["$",'"$variable"']})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Use parameter expansion defaults: ",e.jsxs("code",{children:["$","${var:-default}"]})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Validate input before processing"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"🔍 Pattern Clarity"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Comment complex regex patterns"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Use named groups when possible"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Test patterns with sample data first"})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"⚡ Performance"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Use built-in expansion over external commands"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Avoid regex for simple patterns"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Store repeated operations in variables"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"📚 Readability"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Use descriptive variable names"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Break complex operations into steps"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Add comments explaining non-obvious logic"})]})]})]})]})]}),e.jsxs("div",{className:"mt-8 bg-white dark:bg-gray-900 p-6 rounded-xl border border-blue-300 dark:border-blue-700",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300",children:"🧠 What to Remember"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:["Length: ${#string}","Substring: ${string:start:length}","Replace: ${string/pattern/replacement}","Regex: [[ $string =~ pattern ]]","Position starts at 0","Quote variables always"].map((a,s)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 text-sm",children:s+1})}),e.jsx("code",{className:"font-mono text-blue-700 dark:text-blue-300",children:a})]},s))})]})]})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-300",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[e.jsx("strong",{children:"String manipulation is fundamental"})," to effective shell scripting. When working with students like ",e.jsx("span",{className:"font-semibold",children:"Tuhina"})," or ",e.jsx("span",{className:"font-semibold",children:"Abhronila"}),", I emphasize understanding the ",e.jsx("span",{className:"text-yellow-300",children:"difference between pattern matching and literal string operations"}),"."]}),e.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[e.jsx("strong",{children:"Tip:"})," Always test your string operations with edge cases - empty strings, strings with special characters, and strings containing spaces. This practice will save you hours of debugging."]}),e.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[e.jsx("strong",{children:"Remember:"})," The ",e.jsx("code",{className:"bg-blue-800 px-2 py-1 rounded",children:"BASH_REMATCH"})," array is your best friend for regex. Capture groups make complex pattern extraction trivial."]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-blue-700",children:e.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-blue-300",children:"Teacher:"}),e.jsx("span",{className:"ml-2 text-white font-semibold",children:"Sukanta Hui"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-blue-300",children:"Experience:"}),e.jsx("span",{className:"ml-2 text-white",children:"27 years"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-blue-300",children:"Skills:"}),e.jsx("span",{className:"ml-2 text-white",children:"Programming, Shell Scripting, System Administration"})]})]})})]})]})]})})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-600",children:e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-300 dark:border-amber-700",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-amber-100 dark:bg-amber-900 rounded-lg",children:"💡"}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens when you try to extract a substring that starts beyond the string's length? Does it return an empty string or an error?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Try changing:"})," The global replace pattern ",e.jsxs("code",{children:["$","${string//pattern/replacement}"]}),"to a single replace. How does it affect the output when multiple matches exist?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Consider:"})," How would you handle a situation where you need to extract the domain name from ",e.jsx("span",{className:"font-semibold",children:"Swadeep's email"}),": ",e.jsx("code",{children:"swadeep@shyamnagar-college.edu.in"}),"?"]})]})]})})]}),e.jsx("footer",{className:"section-reveal max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 opacity-0",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-6",children:[e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Topic 7: String Manipulation • Shell Scripting Mastery"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>l("overview"),className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:"Review Concepts"}),e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300",children:"Back to Top ↑"})]})]})})]})]})}export{f as default};

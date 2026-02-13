import{r as d,j as e}from"./index-Do7ncMju.js";import{c as t}from"./clsx-B-dksMZM.js";import{S as n}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const x=`#!/bin/bash
# Basic sed operations for Barrackpore College data processing

echo "=== Basic sed Examples ==="
echo

# Create sample file
cat > sample.txt << 'EOF'
Student Records - Barrackpore College
======================================
1. Tuhina Das - Computer Science - 92%
2. Swadeep Roy - Mathematics - 88%
3. Abhronila Sen - Physics - 95%
4. Debangshu Ghosh - Chemistry - 87%
5. John Doe - Unknown - 75%
EOF

echo "Original file:"
cat sample.txt
echo

echo "1. Replace first occurrence:"
sed 's/ - /, /' sample.txt
echo

echo "2. Replace all occurrences (global):"
sed 's/ - /, /g' sample.txt
echo

echo "3. Delete lines containing 'Unknown':"
sed '/Unknown/d' sample.txt
echo

echo "4. Extract lines 2-4:"
sed -n '2,4p' sample.txt
echo

echo "5. Append text after line 3:"
sed '3a\\--- Intermediate Report ---' sample.txt
echo

echo "6. Insert text before line 3:"
sed '3i\\--- Start of Data ---' sample.txt
echo

echo "7. Change line 5:"
sed '5c\\5. Anonymous Student - Undeclared - 70%' sample.txt
echo

echo "8. Multiple commands (using -e):"
sed -e 's/Barrackpore/BPC/' -e 's/%/ percent/' sample.txt
echo

echo "9. In-place edit with backup:"
cp sample.txt sample_backup.txt
sed -i.bak 's/College/University/' sample_backup.txt
echo "Backup created: sample_backup.txt.bak"
echo "Modified:"
cat sample_backup.txt`,m=`#!/bin/bash
# Advanced sed examples for Naihati school data processing

echo "=== Advanced sed Techniques ==="
echo

# Create sample CSV
cat > students.csv << 'EOF'
ID,Name,Department,Score,Email
101,Tuhina Das,Computer Science,92,tuhina@barrackpore.edu
102,Swadeep Roy,Mathematics,88,swadeep@barrackpore.edu
103,Abhronila Sen,Physics,95,abhronila@naihati.edu
104,Debangshu Ghosh,Chemistry,87,debangshu@shyamnagar.edu
105,John Doe,Unknown,75,john@example.com
EOF

echo "Original CSV:"
cat students.csv
echo

echo "1. Swap first two fields:"
sed 's/^\\([^,]*\\),\\([^,]*\\)/\\2,\\1/' students.csv
echo

echo "2. Convert to uppercase:"
sed 's/[a-z]/\\U&/g' students.csv
echo

echo "3. Add quotes around names:"
sed 's/,\\([^,]*\\),/,"\\1",/2' students.csv
echo

echo "4. Extract email domains:"
sed 's/.*@\\(.*\\)$/\\1/' students.csv | tail -n +2
echo

echo "5. Conditional replacement (score > 90):"
sed '/9[0-9]%/s/\\(.*\\) - \\(.*\\)/\\1 - EXCELLENT - \\2/' students.csv 2>/dev/null || echo "Score format different"
echo

echo "6. Number lines:"
sed = students.csv | sed 'N;s/\\n/, /'
echo

echo "7. Remove trailing commas:"
echo "field1,field2,field3," | sed 's/,*$//'
echo

echo "8. Complex pattern (students with @barrackpore.edu):"
sed -n '/@barrackpore\\.edu/{s/\\(.*\\),.*,\\(.*\\)@barrackpore\\.edu/\\1 (\\2)/p}' students.csv
echo

echo "9. Multi-line pattern (using hold space):"
cat > multi.txt << 'EOF'
Start
Tuhina: 92
Swadeep: 88
End
EOF
sed -n '/Tuhina:/{N;s/Tuhina: \\(.*\\)\\nSwadeep: \\(.*\\)/Tuhina+\\Swadeep: \\1+\\2/p}' multi.txt`,h=`#!/bin/bash
# Basic awk operations for student data processing

echo "=== Basic awk Examples ==="
echo

# Create sample data
cat > grades.txt << 'EOF'
Tuhina Das Computer_Science 92 88 95
Swadeep Roy Mathematics 85 90 88
Abhronila Sen Physics 95 92 98
Debangshu Ghosh Chemistry 87 85 90
John Doe Unknown 75 70 72
EOF

cat > students.csv << 'EOF'
ID,Name,Age,Department,Grade
101,Tuhina Das,18,Computer Science,A
102,Swadeep Roy,19,Mathematics,B+
103,Abhronila Sen,18,Physics,A+
104,Debangshu Ghosh,19,Chemistry,B
105,John Doe,20,Unknown,C
EOF

echo "Sample data created: grades.txt and students.csv"
echo

echo "1. Print entire file:"
awk '{print}' grades.txt
echo

echo "2. Print first field (default whitespace separator):"
awk '{print $1}' grades.txt
echo

echo "3. Print first and last field:"
awk '{print $1, $NF}' grades.txt
echo

echo "4. Print line number with content:"
awk '{print NR ": " $0}' grades.txt
echo

echo "5. Sum of third column:"
awk '{sum += $3} END {print "Total: " sum}' grades.txt
echo

echo "6. Average of third column:"
awk '{sum += $3; count++} END {print "Average: " sum/count}' grades.txt
echo

echo "7. Lines where third column > 90:"
awk '$3 > 90 {print $1 " scored " $3}' grades.txt
echo

echo "8. CSV processing with comma separator:"
awk -F, '{print $2 " is in " $4}' students.csv
echo

echo "9. BEGIN and END blocks:"
awk 'BEGIN {print "Student Report"; print "=============="} 
     {print NR ": " $1} 
     END {print "==============\\nTotal: " NR " students"}' grades.txt
echo

echo "10. Field count per line:"
awk '{print NR " has " NF " fields"}' grades.txt`,g=`#!/bin/bash
# Advanced awk with built-in functions for Barrackpore College

echo "=== Advanced awk with Functions ==="
echo

# Create detailed sample
cat > student_details.csv << 'EOF'
ID,Name,Department,Score,Email,EnrollmentDate
101,Tuhina Das,Computer Science,92,tuhina.das@barrackpore.edu,2023-08-15
102,Swadeep Roy,Mathematics,88,swadeep.roy@barrackpore.edu,2023-08-16
103,Abhronila Sen,Physics,95,abhronila.sen@naihati.edu,2023-08-14
104,Debangshu Ghosh,Chemistry,87,debangshu.ghosh@shyamnagar.edu,2023-08-17
105,John Doe,Unknown,75,john.doe@example.com,2023-08-18
EOF

echo "Data:"
cat student_details.csv
echo

echo "1. String functions - uppercase names:"
awk -F, 'NR>1 {print toupper($2)}' student_details.csv
echo

echo "2. String functions - extract first name:"
awk -F, 'NR>1 {split($2, names, " "); print names[1]}' student_details.csv
echo

echo "3. String functions - email username:"
awk -F, 'NR>1 {print "Username: " substr($5, 1, index($5, "@")-1)}' student_details.csv
echo

echo "4. Math functions - rounded scores:"
awk -F, 'NR>1 {printf "%s: %.0f\\n", $2, $4}' student_details.csv
echo

echo "5. Arrays - count by department:"
awk -F, 'NR>1 {dept[$3]++} END {for (d in dept) print d ": " dept[d] " students"}' student_details.csv
echo

echo "6. Arrays - average score by department:"
awk -F, 'NR>1 {sum[$3] += $4; count[$3]++} 
        END {for (d in sum) printf "%s: %.1f\\n", d, sum[d]/count[d]}' student_details.csv
echo

echo "7. Custom field separator with regex:"
echo "Tuhina:Das:92|Swadeep:Roy:88" | awk -F'[:|]' '{print $1, $3, $5}'
echo

echo "8. Formatting with printf:"
awk -F, 'NR>1 {printf "%-15s %-20s %4d\\n", $2, $3, $4}' student_details.csv
echo

echo "9. Condition with regex:"
awk -F, '$5 ~ /barrackpore/ {print $2 " - barrackpore student"}' student_details.csv
echo

echo "10. Complex processing - grade assignment:"
awk -F, 'NR>1 {
    if ($4 >= 90) grade = "A";
    else if ($4 >= 80) grade = "B";
    else if ($4 >= 70) grade = "C";
    else grade = "F";
    print $2 " (" $4 "): " grade;
}' student_details.csv`,p=`#!/bin/bash
# Combined sed and awk pipeline for Shyamnagar school data

echo "=== sed + awk Pipeline Processing ==="
echo

# Create messy input data
cat > raw_data.txt << 'EOF'
# Student data - needs cleaning
NAME: Tuhina Das; SCORE: 92; DEPARTMENT: CS; EMAIL: tuhina@bpc.edu
NAME: Swadeep Roy; SCORE: 88; DEPARTMENT: MATH; EMAIL: swadeep@bpc.edu  
NAME: Abhronila Sen; SCORE: 95; DEPARTMENT: PHYSICS; EMAIL: abhronila@naihati.edu
NAME: Debangshu Ghosh; SCORE: 87; DEPARTMENT: CHEM; EMAIL: debangshu@shyamnagar.edu
# Invalid entry
NAME: John Doe; SCORE: NA; DEPARTMENT: UNKNOWN; EMAIL: john@example.com
EOF

echo "Raw input data:"
cat raw_data.txt
echo

echo "Processing pipeline:"
echo "1. sed - Remove comments and trim spaces"
echo "2. sed - Convert to CSV format"
echo "3. awk - Filter valid scores and calculate"
echo "4. sed - Format final output"
echo

echo "Final processed output:"
# Pipeline: Clean -> Convert -> Process -> Format
sed '/^#/d' raw_data.txt |                    # Remove comment lines
sed 's/; /,/g' |                              # Replace ; with ,
sed 's/NAME: //g; s/ SCORE: //g; s/ DEPARTMENT: //g; s/ EMAIL: //g' |
sed 's/^ *//; s/ *$//' |                      # Trim spaces
awk -F, '$2 != "NA" && $2 ~ /^[0-9]+$/ {      # Filter valid scores
    sum += $2; count++; 
    print $1 "," $2 "," $3 "," $4
} END { 
    print "Total students: " count
    print "Average score: " (count ? sum/count : 0)
}' |
sed '1i\\Name,Score,Department,Email' |        # Add header
sed 's/CS/Computer Science/; s/MATH/Mathematics/; s/PHYSICS/Physics/; s/CHEM/Chemistry/'`,u=`#!/bin/bash
# Production-grade student grade processing system
# Used across Barrackpore, Shyamnagar, and Ichapur schools

set -euo pipefail

# Default configuration
INPUT_FILE=""
OUTPUT_FILE="report_$(date +%Y%m%d).txt"
TITLE="Student Grade Report"
MIN_SCORE=0
MAX_SCORE=100
VERBOSE=0

# Help function
usage() {
    cat << EOF
Student Grade Processor v2.0

Usage: $0 -i INPUT_FILE [OPTIONS]

Options:
  -i FILE     Input CSV file (required)
  -o FILE     Output report file (default: report_DATE.txt)
  -t TITLE    Report title (default: Student Grade Report)
  -min N      Minimum valid score (default: 0)
  -max N      Maximum valid score (default: 100)
  -v          Verbose output
  -h          Show this help

Input CSV format:
  Name,Department,Score1,Score2,Score3,Email

Example:
  $0 -i grades.csv -o march_report.txt -t "March 2024 Results" -v
EOF
    exit 1
}

# Parse arguments
while getopts ":i:o:t:min:max:vh" opt; do
    case $opt in
        i) INPUT_FILE="$OPTARG" ;;
        o) OUTPUT_FILE="$OPTARG" ;;
        t) TITLE="$OPTARG" ;;
        min) MIN_SCORE="$OPTARG" ;;
        max) MAX_SCORE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        h) usage ;;
        ?) echo "Invalid option: -$OPTARG" >&2; usage ;;
        :) echo "Option -$OPTARG requires argument" >&2; usage ;;
    esac
done

shift $((OPTIND - 1))

# Validate input
if [ -z "$INPUT_FILE" ] || [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file required and must exist" >&2
    usage
fi

if [ $VERBOSE -eq 1 ]; then
    echo "=== Starting Grade Processing ==="
    echo "Input: $INPUT_FILE"
    echo "Output: $OUTPUT_FILE"
    echo "Title: $TITLE"
    echo "Score Range: $MIN_SCORE-$MAX_SCORE"
    echo
fi

# Temporary files
CLEANED_FILE=$(mktemp)
SUMMARY_FILE=$(mktemp)

# Cleanup trap
trap 'rm -f "$CLEANED_FILE" "$SUMMARY_FILE"' EXIT

# Step 1: Clean and validate data with sed
if [ $VERBOSE -eq 1 ]; then
    echo "Step 1: Cleaning input data..."
fi

sed '
# Remove empty lines
/^$/d
# Remove leading/trailing spaces
s/^[[:space:]]*//
s/[[:space:]]*$//
# Replace multiple commas with single comma
s/,,*/,/g
# Remove lines with insufficient fields (less than 6)
/^[^,]*\\(,[^,]*\\)\\{4\\}/!d
' "$INPUT_FILE" > "$CLEANED_FILE"

# Step 2: Process with awk for analysis
if [ $VERBOSE -eq 1 ]; then
    echo "Step 2: Analyzing data with awk..."
fi

awk -F, -v min="$MIN_SCORE" -v max="$MAX_SCORE" '
BEGIN {
    print "DEPARTMENT,COUNT,AVERAGE,HIGHEST,LOWEST,TOP_STUDENT"
    dept_count = 0
    total_students = 0
    overall_sum = 0
}

NR == 1 { next }  # Skip header if exists

{
    name = $1
    department = $2
    score1 = $3 + 0  # Force numeric
    score2 = $4 + 0
    score3 = $5 + 0
    email = $6
    
    # Validate scores
    if (score1 < min || score1 > max || 
        score2 < min || score2 > max || 
        score3 < min || score3 > max) {
        invalid++
        next
    }
    
    avg_score = (score1 + score2 + score3) / 3
    total_students++
    overall_sum += avg_score
    
    # Department statistics
    dept_count[department]++
    dept_sum[department] += avg_score
    
    if (avg_score > dept_high[department]) {
        dept_high[department] = avg_score
        dept_top_student[department] = name
    }
    
    if (dept_low[department] == 0 || avg_score < dept_low[department]) {
        dept_low[department] = avg_score
    }
    
    # Store for student ranking
    student_avg[name] = avg_score
    student_dept[name] = department
}

END {
    # Print department summary
    for (dept in dept_count) {
        avg = dept_sum[dept] / dept_count[dept]
        printf "%s,%d,%.1f,%.1f,%.1f,%s\\n", 
            dept, dept_count[dept], avg, 
            dept_high[dept], dept_low[dept], 
            dept_top_student[dept]
    }
    
    # Overall statistics
    print ""
    print "OVERALL_STATISTICS"
    printf "Total students:,%d\\n", total_students
    printf "Overall average:,.1f\\n", (total_students ? overall_sum / total_students : 0)
    printf "Invalid records:,%d\\n", invalid
    
    # Top 5 students
    print ""
    print "TOP_5_STUDENTS,AVERAGE,DEPARTMENT"
    n = asorti(student_avg, sorted, "@val_num_desc")
    for (i = 1; i <= (n < 5 ? n : 5); i++) {
        student = sorted[i]
        printf "%s,%.1f,%s\\n", student, student_avg[student], student_dept[student]
    }
}' "$CLEANED_FILE" > "$SUMMARY_FILE"

# Step 3: Format final report with sed
if [ $VERBOSE -eq 1 ]; then
    echo "Step 3: Formatting final report..."
fi

{
    # Header
    echo "========================================="
    echo "    $TITLE"
    echo "    Generated: $(date)"
    echo "    Source: $INPUT_FILE"
    echo "========================================="
    echo
    
    # Department summary
    echo "DEPARTMENT SUMMARY"
    echo "------------------"
    sed -n '2,/^$/p' "$SUMMARY_FILE" | sed 's/,/ | /g'
    echo
    
    # Overall statistics
    sed -n '/OVERALL_STATISTICS/,/^$/p' "$SUMMARY_FILE" | 
        sed 's/,/ : /; /^$/d; s/OVERALL_STATISTICS/Overall Statistics/'
    echo
    
    # Top students
    sed -n '/TOP_5_STUDENTS/,/^$/p' "$SUMMARY_FILE" | 
        sed 's/,/ | /g; s/TOP_5_STUDENTS/Top 5 Students/; /^$/d'
    echo
    
    # Footer
    echo "========================================="
    echo "Processed by: Barrackpore College System"
    echo "========================================="
} > "$OUTPUT_FILE"

# Step 4: Final output
if [ $VERBOSE -eq 1 ]; then
    echo "Step 4: Generating output..."
    echo "Report saved to: $OUTPUT_FILE"
    echo
    echo "=== Report Preview ==="
    head -20 "$OUTPUT_FILE"
    echo "..."
fi

echo "Processing complete. Report generated: $OUTPUT_FILE"`,N=()=>{const[r,o]=d.useState(!1),[l,c]=d.useState("sed"),[a,i]=d.useState("basic");return d.useEffect(()=>{const s=setTimeout(()=>o(!0),100);return()=>clearTimeout(s)},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8",children:[e.jsx("style",{jsx:!0,children:`
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
        
        @keyframes textFlow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes pulseTransform {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}),e.jsxs("div",{className:t("max-w-6xl mx-auto mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]"),children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent",children:"Topic 23: Using sed and awk within Shell Scripts"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Mastering text processing powerhouses for data manipulation and transformation"})]})]}),e.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"leading-relaxed",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"sed"})," (Stream Editor) and",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"awk"})," (Aho, Weinberger, Kernighan) are the Swiss Army knives of Unix text processing. While ",e.jsx("strong",{children:"sed"})," excels at line-by-line editing and pattern substitution, ",e.jsx("strong",{children:"awk"})," is a full-fledged programming language for columnar data processing. Together, they can handle 90% of text processing tasks without resorting to heavier tools like Python or Perl."]})})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-amber-700 dark:text-amber-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"sed vs awk: When to Use Which?"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300 font-bold text-xl",children:"sed"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Stream Editor"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Line-by-line text transformation"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Pattern matching and substitution"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Simple, single-line commands"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Best For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Search and replace in files"}),e.jsx("li",{children:"• Removing or adding text"}),e.jsx("li",{children:"• Simple text filtering"}),e.jsx("li",{children:"• In-place file editing"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-green-600 dark:text-green-300 font-bold text-xl",children:"awk"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Pattern Scanning & Processing"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Column/field-based processing"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Built-in variables and functions"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Arithmetic and string operations"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"Best For:"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• CSV/TSV data processing"}),e.jsx("li",{children:"• Column calculations and reports"}),e.jsx("li",{children:"• Data aggregation and summaries"}),e.jsx("li",{children:"• Complex text transformations"})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 mb-8 border border-gray-300 dark:border-gray-700",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"Text Processing Flow"}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("svg",{width:"100%",height:"180",className:"overflow-visible",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})}),e.jsx("rect",{x:"5%",y:"30",width:"20%",height:"50",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2",className:"hover:fill-amber-200 transition-colors duration-300"}),e.jsx("text",{x:"15%",y:"55",textAnchor:"middle",fill:"#92400e",className:"text-sm font-semibold",children:"Input File"}),e.jsx("text",{x:"15%",y:"70",textAnchor:"middle",fill:"#b45309",className:"text-xs",children:"students.csv"}),e.jsx("rect",{x:"30%",y:"30",width:"20%",height:"50",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2",className:"hover:fill-blue-200 transition-colors duration-300"}),e.jsx("text",{x:"40%",y:"55",textAnchor:"middle",fill:"#1e40af",className:"text-sm font-semibold",children:"sed"}),e.jsx("text",{x:"40%",y:"70",textAnchor:"middle",fill:"#1d4ed8",className:"text-xs",children:"Clean & Transform"}),e.jsx("rect",{x:"55%",y:"30",width:"20%",height:"50",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2",className:"hover:fill-green-200 transition-colors duration-300"}),e.jsx("text",{x:"65%",y:"55",textAnchor:"middle",fill:"#065f46",className:"text-sm font-semibold",children:"awk"}),e.jsx("text",{x:"65%",y:"70",textAnchor:"middle",fill:"#047857",className:"text-xs",children:"Analyze & Report"}),e.jsx("rect",{x:"80%",y:"30",width:"15%",height:"50",rx:"8",fill:"#f5f3ff",stroke:"#8b5cf6",strokeWidth:"2",className:"hover:fill-purple-200 transition-colors duration-300"}),e.jsx("text",{x:"87.5%",y:"55",textAnchor:"middle",fill:"#5b21b6",className:"text-sm font-semibold",children:"Output"}),e.jsx("text",{x:"87.5%",y:"70",textAnchor:"middle",fill:"#7c3aed",className:"text-xs",children:"report.txt"}),e.jsx("path",{d:"M150,55 L210,55",stroke:"#f59e0b",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M270,55 L330,55",stroke:"#f59e0b",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M390,55 L450,55",stroke:"#f59e0b",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"1s",repeatCount:"indefinite"})}),e.jsxs("g",{transform:"translate(0, 110)",children:[e.jsx("rect",{x:"10%",y:"0",width:"15%",height:"30",rx:"6",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"17.5%",y:"18",textAnchor:"middle",fill:"#92400e",className:"text-xs",children:"John,Math,85"}),e.jsx("rect",{x:"30%",y:"0",width:"15%",height:"30",rx:"6",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"1"}),e.jsx("text",{x:"37.5%",y:"18",textAnchor:"middle",fill:"#1e40af",className:"text-xs",children:"JOHN,Math,85"}),e.jsx("rect",{x:"50%",y:"0",width:"15%",height:"30",rx:"6",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"57.5%",y:"18",textAnchor:"middle",fill:"#065f46",className:"text-xs",children:"Math: 85"}),e.jsx("rect",{x:"70%",y:"0",width:"15%",height:"30",rx:"6",fill:"#f5f3ff",stroke:"#8b5cf6",strokeWidth:"1"}),e.jsx("text",{x:"77.5%",y:"18",textAnchor:"middle",fill:"#5b21b6",className:"text-xs",children:"Math Avg: 85"})]})]})})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("div",{className:"flex space-x-4 mb-6 overflow-x-auto",children:["sed","awk"].map(s=>e.jsx("button",{onClick:()=>c(s),className:t("px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap",l===s?s==="sed"?"bg-blue-500 text-white shadow-lg":"bg-green-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:s.toUpperCase()},s))}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700",children:[l==="sed"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300 font-bold text-xl",children:"sed"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"sed - Stream Editor"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Reads input line by line, applies commands, outputs results"})]})]}),e.jsx("div",{className:"flex space-x-2 mb-6 overflow-x-auto",children:["basic","substitution","deletion","transformation"].map(s=>e.jsx("button",{onClick:()=>i(s),className:t("px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm",a===s?"bg-blue-500 text-white shadow":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),e.jsxs("div",{children:[a==="basic"&&e.jsx(n,{fileModule:x,title:"Basic sed Operations",highlightLines:[2,3,4,5,6,7,8,9,10,11,12]}),a==="substitution"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Substitution Commands"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed 's/old/new/' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Replace first occurrence per line"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed 's/old/new/g' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Replace all occurrences (global)"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed 's/old/new/2' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Replace second occurrence only"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed 's/old/new/I' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Case-insensitive replacement"})]})]})]}),a==="deletion"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Deletion Commands"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:"sed '5d' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Delete line 5"})]}),e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:"sed '1,3d' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Delete lines 1-3"})]}),e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:"sed '/pattern/d' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Delete lines matching pattern"})]}),e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/30 rounded-lg",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:"sed '/start/,/end/d' file.txt"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Delete range between patterns"})]})]})]}),a==="transformation"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Advanced Transformations"}),e.jsx(n,{fileModule:m,title:"Advanced sed Examples",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]})]})]})]}),l==="awk"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-green-600 dark:text-green-300 font-bold text-xl",children:"awk"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-700 dark:text-gray-300",children:"awk - Pattern Scanning Language"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Processes input as records and fields with built-in programming"})]})]}),e.jsx("div",{className:"flex space-x-2 mb-6 overflow-x-auto",children:["basic","fields","patterns","functions"].map(s=>e.jsx("button",{onClick:()=>i(s),className:t("px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm",a===s?"bg-green-500 text-white shadow":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),e.jsxs("div",{children:[a==="basic"&&e.jsx(n,{fileModule:h,title:"Basic awk Operations",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15]}),a==="fields"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Field-Based Processing"}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/30 rounded-lg mb-4",children:[e.jsx("h5",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"Built-in Variables"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"$0"}),e.jsx("span",{className:"text-sm ml-2",children:"Entire line"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"$1"}),e.jsx("span",{className:"text-sm ml-2",children:"First field"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"$NF"}),e.jsx("span",{className:"text-sm ml-2",children:"Last field"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"NR"}),e.jsx("span",{className:"text-sm ml-2",children:"Record number"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"NF"}),e.jsx("span",{className:"text-sm ml-2",children:"Number of fields"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded",children:"FS"}),e.jsx("span",{className:"text-sm ml-2",children:"Field separator"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:["# Print first and last field of each line",e.jsx("br",{}),"awk '{print $1, $NF}' students.csv"]})}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:["# Sum values in third column",e.jsx("br",{}),`awk '{sum += $3} END {print "Total:", sum}' data.txt`]})}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:["# Count lines with more than 5 fields",e.jsx("br",{}),"awk 'NF > 5 {count++} END {print count}' file.txt"]})})]})]}),a==="patterns"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Pattern Matching"}),e.jsxs("div",{className:"p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg mb-4",children:[e.jsx("h5",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Pattern Types"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"/regex/"}),e.jsx("span",{className:"text-sm ml-2",children:"Regular expression"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"$3 > 50"}),e.jsx("span",{className:"text-sm ml-2",children:"Field comparison"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"BEGIN"}),e.jsx("span",{className:"text-sm ml-2",children:"Before processing"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-sm bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"END"}),e.jsx("span",{className:"text-sm ml-2",children:"After processing"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:['# Process only lines containing "Math"',e.jsx("br",{}),"awk '/Math/ {print $1, $3}' students.csv"]})}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:["# Students with score > 80",e.jsx("br",{}),`awk '$3 > 80 {print $1, ":", $3}' grades.txt`]})}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700",children:e.jsxs("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:["# Add header and footer",e.jsx("br",{}),`awk 'BEGIN {print "Student Report"}
                                 {print $0}
                                 END {print "Total:", NR, "students"}' file.txt`]})})]})]}),a==="functions"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Built-in Functions"}),e.jsx(n,{fileModule:g,title:"Advanced awk with Functions",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]})]})]})]})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"sed + awk: Power Combination"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(n,{fileModule:p,title:"Combined sed and awk Processing",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-purple-200 dark:border-purple-700",children:[e.jsx("h4",{className:"text-lg font-bold text-purple-800 dark:text-purple-300 mb-3",children:"Pipeline Strategy for Barrackpore College"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Tuhina uses this pipeline approach for processing student data:"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"sed cleans the data:"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-purple-100 dark:bg-purple-900 p-1 rounded mt-1",children:"Remove extra spaces, fix formatting, standardize names"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"awk analyzes the data:"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-purple-100 dark:bg-purple-900 p-1 rounded mt-1",children:"Calculate averages, generate reports, filter results"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"sed formats the output:"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-purple-100 dark:bg-purple-900 p-1 rounded mt-1",children:"Add headers, adjust spacing, create final presentation"})]})]})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-blue-300 dark:border-blue-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"sed First"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed 's/,,/,NA,/g' | awk -F, '{...}'"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Clean data before processing with awk"})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-green-300 dark:border-green-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"awk First"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:"awk '{print $1}' | sed 's/.$//'"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Extract data then clean with sed"})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-purple-300 dark:border-purple-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-300 mb-2",children:"Both Together"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-purple-100 dark:bg-purple-900 p-2 rounded",children:"sed -n '10,20p' | awk 'NR%2==0'"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Extract range with sed, filter with awk"})]})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Production-Ready Example"]}),e.jsx(n,{fileModule:u,title:"Student Grade Processing System",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl border border-emerald-200 dark:border-emerald-700",children:[e.jsx("h4",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-2",children:"Real Usage in Shyamnagar"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Swadeep runs this script monthly to process grades for 500+ students:",e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-emerald-100 dark:bg-emerald-900 p-2 rounded mt-2",children:'./grade_processor.sh -i raw_grades.csv -o report_2024_03.pdf -t "March Report"'})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl border border-amber-200 dark:border-amber-700",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Key Techniques Used"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"sed for data cleaning and standardization"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"awk for calculations and aggregation"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Pipeline chaining for efficiency"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Error handling and validation"})]})]})]})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Performance Optimization"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-red-200 dark:border-red-700",children:[e.jsx("h4",{className:"font-bold text-red-800 dark:text-red-300 mb-3",children:"Common Performance Issues"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{children:"Too many sed/awk calls in loops"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{children:"Reading same file multiple times"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{children:"Using shell loops instead of awk arrays"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-green-200 dark:border-green-700",children:[e.jsx("h4",{className:"font-bold text-green-800 dark:text-green-300 mb-3",children:"Optimization Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsxs("span",{children:["Combine multiple sed commands with ",e.jsx("code",{className:"text-xs",children:"-e"})]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{children:"Use awk arrays for grouping instead of sort|uniq"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{children:"Process data in single pass when possible"})]})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl border border-blue-200 dark:border-blue-700",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Performance Comparison"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-red-600 dark:text-red-400",children:"10s"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Shell loop with grep"})]}),e.jsxs("div",{className:"text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-amber-600 dark:text-amber-400",children:"2s"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Single sed command"})]}),e.jsxs("div",{className:"text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:"0.5s"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Optimized awk"})]})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-3",children:"Abhronila reduced grade processing time from 10 minutes to 30 seconds by replacing shell loops with optimized awk scripts for Ichapur school data."})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-red-700 dark:text-red-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"Pitfall 1: Unquoted Special Characters"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:`# WRONG: &, /, $ need escaping
sed s/old/new/ file.txt`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:`# RIGHT: Use different delimiters or escape
sed 's|old|new|' file.txt
sed 's/old\\/path/new\\/path/' file.txt`}),e.jsx("p",{className:"text-red-700 dark:text-red-400 text-sm",children:"Students in Barrackpore often struggle with paths containing slashes."})]})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Pitfall 2: Forgetting sed -i Extension"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-amber-100 dark:bg-amber-900 p-2 rounded",children:`# WRONG: No backup, dangerous on macOS
sed -i 's/old/new/' important.txt`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:`# RIGHT: Always provide backup extension
sed -i.bak 's/old/new/' important.txt
# Or test first
sed 's/old/new/' important.txt > test.txt`})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Pitfall 3: awk Field Number Confusion"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:`# WRONG: Assuming fixed number of fields
awk '{print $5}' file.txt  # Might be empty!`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:`# RIGHT: Check NF or use $NF
awk 'NF >= 5 {print $5}' file.txt
awk '{print $(NF-1)}' file.txt  # Second from last`}),e.jsx("p",{className:"text-blue-700 dark:text-blue-400 text-sm",children:"Debangshu spent hours debugging why his reports were empty before discovering some lines had fewer fields."})]})]})]})]}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"sed Best Practices"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Always quote sed expressions"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-sm",children:"-i.bak"})," for in-place editing"]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Test with ",e.jsx("code",{className:"text-sm",children:"sed -n"})," before making changes"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"awk Best Practices"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Set ",e.jsx("code",{className:"text-sm",children:"FS"})," and ",e.jsx("code",{className:"text-sm",children:"OFS"})," explicitly"]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-sm",children:"BEGIN"})," for initialization"]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Store complex scripts in separate files"})]})]})]})]})]}),e.jsx("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[800ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 border border-amber-300 dark:border-amber-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-amber-800 dark:text-amber-300",children:"Teacher's Note"}),e.jsx("p",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Sukanta Hui • 27 years experience • Programming Languages, RDBMS"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Professional Insight:"})," In my 27 years teaching across Barrackpore, Shyamnagar, and Ichapur, I've seen sed and awk separate amateur scripters from professionals. These tools are not just commands—they're complete text processing languages that can replace hundreds of lines of Python or Java code."]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Golden Rules for Mastery:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"sed is for editing, awk is for processing."})," Use sed when you need to change text, awk when you need to analyze it."]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Always test with sample data first."})," Create a small test file before running on production data. Tuhina keeps a ",e.jsx("code",{className:"text-sm",children:"test_samples/"})," directory for this."]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Learn regular expressions well."})," Both tools rely heavily on regex. Spend time mastering patterns—it pays back exponentially."]})]})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Pro Tip:"})," When Swadeep processes Naihati school data, he writes complex awk scripts to files (",e.jsx("code",{className:"text-sm",children:"process.awk"}),") and runs them with ",e.jsx("code",{className:"text-sm",children:"awk -f process.awk data.csv"}),". This makes them readable, reusable, and much easier to debug than one-liners."]})]}),e.jsx("div",{className:"mt-4 pt-4 border-t border-amber-200 dark:border-amber-700",children:e.jsx("p",{className:"text-sm text-amber-700 dark:text-amber-400",children:"Email: sukantahui@codernaccotax.co.in • Mobile: 7003756860"})})]})}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"What You Should Remember"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"sed Syntax"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.jsx("code",{className:"text-sm",children:"sed 's/pattern/replacement/flags'"})})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-400 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"awk Structure"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.jsx("code",{className:"text-sm",children:"pattern { action }"})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Key Variables"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["sed: ",e.jsx("code",{className:"text-sm",children:"&"}),", ",e.jsx("code",{className:"text-sm",children:"\\1"}),e.jsx("br",{}),"awk: ",e.jsx("code",{className:"text-sm",children:"$0"}),", ",e.jsx("code",{className:"text-sm",children:"$1"}),", ",e.jsx("code",{className:"text-sm",children:"NR"}),", ",e.jsx("code",{className:"text-sm",children:"NF"})]})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-400 font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Safety First"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Always backup: ",e.jsx("code",{className:"text-sm",children:"sed -i.bak"})]})]})]})]})]})]}),e.jsx("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1000ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-300 dark:border-cyan-700",children:[e.jsxs("h3",{className:"text-xl font-bold text-cyan-800 dark:text-cyan-300 mb-4 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens when you run ",e.jsx("code",{className:"text-sm",children:"sed 's/.*/\\U&/' file.txt"}),"? Why does ",e.jsx("code",{className:"text-sm",children:"\\U"})," work in GNU sed but not BSD sed? How would you make it portable?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Try changing this:"})," In the production script, what if Abhronila needs to handle CSV files with quoted fields containing commas? How would you modify the awk field separator?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Consider:"})," How would you combine sed and awk to extract all email addresses from a mixed-format log file and count how many are from the ",e.jsx("code",{className:"text-sm",children:"@barrackpore.edu"})," domain?"]})]})]})}),e.jsxs("section",{className:t("mb-12",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300",children:"Professional Tips & Tricks"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"sed Portability Hack"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["For case-insensitive search across sed versions:",e.jsx("code",{className:"text-sm block mt-1 bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"sed '/[Pp][Aa][Tt][Tt][Ee][Rr][Nn]/d'"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"awk Debugging Trick"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Print debugging info without stopping:",e.jsx("code",{className:"text-sm block mt-1 bg-green-100 dark:bg-green-900 p-2 rounded",children:`awk '{print NR ": " $0 > "/dev/stderr"; print $1}'`})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-amber-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Production Trick"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["For Barrackpore data, I pipe through tee to debug:",e.jsx("code",{className:"text-sm block mt-1 bg-amber-100 dark:bg-amber-900 p-2 rounded",children:"sed '...' | tee /tmp/debug.log | awk '...'"})]})]})]})]})]}),e.jsx("div",{className:t("max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 dark:border-gray-700",r&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1200ms]"),children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Topic 23: Using sed and awk within Shell Scripts"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{className:"px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors duration-300",children:"Previous: Command-line Option Parsing"}),e.jsx("button",{className:"px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300",children:"Next: Debugging Techniques"})]})]})})]})};export{N as default};

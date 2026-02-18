import{r as l,j as e}from"./index-BFnLuail.js";import{c as t}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const x=`#!/bin/bash
# Topic 25: Basic CSV Cleanup Script
# Removes duplicates, empty lines, and fixes basic formatting

INPUT_FILE="\${1:-students_raw.csv}"
CLEAN_FILE="students_cleaned.csv"
ERROR_LOG="cleanup_errors.log"

echo "Starting CSV cleanup process..."
echo "Input: $INPUT_FILE"
echo "Output: $CLEAN_FILE"
echo ""

# 1. Remove exact duplicates (keeping first occurrence)
echo "1. Removing duplicate records..."
awk '!seen[$0]++' "$INPUT_FILE" > temp1.csv
duplicates_removed=$(( $(wc -l < "$INPUT_FILE") - $(wc -l < temp1.csv) ))
echo "   Removed $duplicates_removed exact duplicates"
echo ""

# 2. Remove completely empty lines
echo "2. Removing empty lines..."
grep -v '^$' temp1.csv > temp2.csv
empty_removed=$(( $(wc -l < temp1.csv) - $(wc -l < temp2.csv) ))
echo "   Removed $empty_removed empty lines"
echo ""

# 3. Fix inconsistent quoting (ensure fields with commas are quoted)
echo "3. Standardizing quotation..."
awk -F',' '
BEGIN { OFS="," }
{
    for (i=1; i<=NF; i++) {
        if ($i ~ /,/ && $i !~ /^"/) {
            $i = "\\"" $i "\\""
        }
    }
    print $0
}' temp2.csv > temp3.csv
echo "   Fixed field quoting"
echo ""

# 4. Trim whitespace from all fields
echo "4. Trimming whitespace..."
awk -F',' '
BEGIN { OFS="," }
{
    for (i=1; i<=NF; i++) {
        gsub(/^[ \\t]+|[ \\t]+$/, "", $i)
    }
    print $0
}' temp3.csv > "$CLEAN_FILE"
echo "   Trimmed leading/trailing spaces"
echo ""

# 5. Generate summary
echo "=== CLEANUP SUMMARY ==="
echo "Original records: $(wc -l < "$INPUT_FILE")"
echo "Final records: $(wc -l < "$CLEAN_FILE")"
echo "Total removed: $(( $(wc -l < "$INPUT_FILE") - $(wc -l < "$CLEAN_FILE") ))"
echo "Clean file saved as: $CLEAN_FILE"

# Cleanup temp files
rm -f temp1.csv temp2.csv temp3.csv`,g=`#!/bin/bash
# Topic 25: Advanced CSV Transformation
# Converts data types and standardizes formats

INPUT_FILE="\${1:-students_cleaned.csv}"
OUTPUT_FILE="students_transformed.csv"
TRANSFORM_LOG="transform.log"

echo "Starting advanced transformation..."
echo "Input: $INPUT_FILE"
echo "Output: $OUTPUT_FILE"
echo ""

# Save header
head -1 "$INPUT_FILE" > "$OUTPUT_FILE"

# Process data rows
echo "Processing transformations..." > "$TRANSFORM_LOG"
tail -n +2 "$INPUT_FILE" | while IFS= read -r line; do
    # Parse CSV fields (handling quoted fields with commas)
    echo "$line" | awk -F',' '
    BEGIN { OFS="," }
    {
        # Extract fields (simplified parsing)
        id = $1
        name = $2
        dob = $3
        school = $4
        marks = $5
        grade = $6
        
        # Transformation 1: Standardize date format to YYYY-MM-DD
        # Remove quotes first
        gsub(/"/, "", dob)
        
        # Try different date formats
        cmd = "date -d \\"" dob "\\" +%Y-%m-%d 2>/dev/null"
        cmd | getline std_date
        close(cmd)
        
        if (std_date == "") {
            std_date = "1900-01-01"  # Default for invalid dates
            print "WARN: Could not parse date: " dob >> "'"$TRANSFORM_LOG"'"
        }
        
        # Transformation 2: Standardize school names
        gsub(/"/, "", school)
        if (school ~ /Barrackpore.*HS/) school = "Barrackpore High School"
        else if (school ~ /BP HS/) school = "Barrackpore High School"
        else if (school ~ /Shyamnagar/) school = "Shyamnagar Public School"
        else if (school ~ /Naihati/) school = "Naihati Academy"
        
        # Transformation 3: Calculate grade if missing but marks present
        gsub(/"/, "", marks)
        gsub(/"/, "", grade)
        
        if (marks != "" && grade == "") {
            marks_num = marks + 0
            if (marks_num >= 90) grade = "A"
            else if (marks_num >= 75) grade = "B"
            else if (marks_num >= 50) grade = "C"
            else grade = "D"
        }
        
        # Transformation 4: Capitalize first letter of each name word
        gsub(/"/, "", name)
        split(name, name_parts, " ")
        result_name = ""
        for (i in name_parts) {
            first = substr(name_parts[i], 1, 1)
            rest = substr(name_parts[i], 2)
            result_name = result_name toupper(first) tolower(rest) " "
        }
        gsub(/ $/, "", result_name)
        
        # Output transformed record
        print id, "\\"" result_name "\\"", "\\"" std_date "\\"", "\\"" school "\\"", marks, "\\"" grade "\\""
    }' >> "$OUTPUT_FILE"
done

echo "Transformations completed!"
echo "Original records: $(wc -l < "$INPUT_FILE")"
echo "Transformed records: $(wc -l < "$OUTPUT_FILE")"
echo "Check $TRANSFORM_LOG for any warnings"`,p=`#!/bin/bash
# Topic 25: CSV Validation Script
# Checks for data quality issues

INPUT_FILE="\${1:-students_cleaned.csv}"
VALIDATION_LOG="validation_report.txt"
ERROR_FILE="invalid_records.csv"

echo "Starting CSV validation..."
echo "Input file: $INPUT_FILE"
echo ""

# Initialize counters
total_records=0
valid_records=0
invalid_records=0

# Clear output files
> "$VALIDATION_LOG"
> "$ERROR_FILE"

echo "=== VALIDATION CHECKS ===" > "$VALIDATION_LOG"
echo "Timestamp: $(date)" >> "$VALIDATION_LOG"
echo "" >> "$VALIDATION_LOG"

# Process CSV (skip header)
tail -n +2 "$INPUT_FILE" | while IFS= read -r line; do
    ((total_records++))
    error=""
    
    # Parse fields
    IFS=',' read -r -a fields <<< "$line"
    
    # Check 1: ID should be numeric
    if [[ ! "\${fields[0]}" =~ ^[0-9]+$ ]]; then
        error+="Invalid ID: \${fields[0]}; "
    fi
    
    # Check 2: Name should not be empty
    if [[ -z "\${fields[1]}" || "\${fields[1]}" == "\\"\\"" ]]; then
        error+="Empty name; "
    fi
    
    # Check 3: Date validation (accepts multiple formats)
    date_str=$(echo "\${fields[2]}" | tr -d '"')
    if ! date -d "$date_str" "+%Y-%m-%d" > /dev/null 2>&1; then
        error+="Invalid date: $date_str; "
    fi
    
    # Check 4: Marks should be between 0 and 100 (if present)
    if [[ -n "\${fields[4]}" && "\${fields[4]}" != "\\"\\"" ]]; then
        marks=$(echo "\${fields[4]}" | tr -d '"')
        if [[ ! "$marks" =~ ^[0-9]+$ ]] || (( marks < 0 || marks > 100 )); then
            error+="Invalid marks: $marks; "
        fi
    fi
    
    # Check 5: Grade should be A, B, C, or empty
    if [[ -n "\${fields[5]}" && "\${fields[5]}" != "\\"\\"" ]]; then
        grade=$(echo "\${fields[5]}" | tr -d '"')
        if [[ ! "$grade" =~ ^[ABC]$ ]]; then
            error+="Invalid grade: $grade; "
        fi
    fi
    
    # Record result
    if [[ -z "$error" ]]; then
        ((valid_records++))
    else
        ((invalid_records++))
        echo "$line" >> "$ERROR_FILE"
        echo "Record $total_records: $error" >> "$VALIDATION_LOG"
    fi
done

# Add summary to log
echo "" >> "$VALIDATION_LOG"
echo "=== VALIDATION SUMMARY ===" >> "$VALIDATION_LOG"
echo "Total records processed: $total_records" >> "$VALIDATION_LOG"
echo "Valid records: $valid_records ($((valid_records * 100 / total_records))%)" >> "$VALIDATION_LOG"
echo "Invalid records: $invalid_records ($((invalid_records * 100 / total_records))%)" >> "$VALIDATION_LOG"
echo "Error records saved to: $ERROR_FILE" >> "$VALIDATION_LOG"

# Display summary
cat "$VALIDATION_LOG" | tail -10
echo ""
echo "Full report: $VALIDATION_LOG"`,u=`#!/bin/bash
# Topic 25: CSV Analysis Report Generation
# Creates comprehensive data quality and summary report

INPUT_FILE="\${1:-students_transformed.csv}"
REPORT_FILE="analysis_report.txt"

echo "Generating analysis report..."
echo "Input: $INPUT_FILE"
echo ""

# Get total records (excluding header)
total_records=$(tail -n +2 "$INPUT_FILE" | wc -l)

{
echo "=== CSV DATA QUALITY REPORT ==="
echo "Generated: $(date '+%Y-%m-%d %H:%M:%S')"
echo "File: $INPUT_FILE"
echo ""
echo "SUMMARY STATISTICS:"
echo "Total Records: $total_records"
echo ""

# Count by school
echo "SCHOOL DISTRIBUTION:"
tail -n +2 "$INPUT_FILE" | awk -F',' '
{
    # Extract school name, remove quotes
    school = $4
    gsub(/"/, "", school)
    schools[school]++
}
END {
    for (s in schools) {
        printf "  %-30s: %4d (%.1f%%)\\n", s, schools[s], (schools[s]/NR)*100
    }
}'
echo ""

# Grade distribution
echo "GRADE DISTRIBUTION:"
tail -n +2 "$INPUT_FILE" | awk -F',' '
{
    grade = $6
    gsub(/"/, "", grade)
    if (grade == "") grade = "Ungraded"
    grades[grade]++
    total++
}
END {
    for (g in grades) {
        printf "  %-10s: %4d (%.1f%%)\\n", g, grades[g], (grades[g]/total)*100
    }
}'
echo ""

# Marks statistics
echo "MARKS STATISTICS:"
tail -n +2 "$INPUT_FILE" | awk -F',' '
{
    marks = $5 + 0
    if (marks > 0) {
        sum += marks
        count++
        if (marks > max || count == 1) max = marks
        if (marks < min || count == 1) min = marks
    }
}
END {
    if (count > 0) {
        printf "  Average marks: %.1f\\n", sum/count
        printf "  Highest marks: %d\\n", max
        printf "  Lowest marks:  %d\\n", min
        printf "  Records with marks: %d\\n", count
    }
}'
echo ""

# Data completeness
echo "DATA COMPLETENESS:"
tail -n +2 "$INPUT_FILE" | awk -F',' '
BEGIN {
    total = 0
    has_name = 0
    has_dob = 0
    has_school = 0
    has_marks = 0
    has_grade = 0
}
{
    total++
    
    # Check each field
    if ($2 != "\\"\\"") has_name++
    if ($3 != "\\"\\"") has_dob++
    if ($4 != "\\"\\"") has_school++
    if ($5 != "") has_marks++
    if ($6 != "\\"\\"") has_grade++
}
END {
    printf "  Name:     %4d/%d (%.1f%%)\\n", has_name, total, (has_name/total)*100
    printf "  DOB:      %4d/%d (%.1f%%)\\n", has_dob, total, (has_dob/total)*100
    printf "  School:   %4d/%d (%.1f%%)\\n", has_school, total, (has_school/total)*100
    printf "  Marks:    %4d/%d (%.1f%%)\\n", has_marks, total, (has_marks/total)*100
    printf "  Grade:    %4d/%d (%.1f%%)\\n", has_grade, total, (has_grade/total)*100
}'

} > "$REPORT_FILE"

echo "Report generated: $REPORT_FILE"
echo ""
echo "=== REPORT PREVIEW ==="
head -30 "$REPORT_FILE"`,k=()=>{const[d,o]=l.useState(0),[n,c]=l.useState({completeness:85,accuracy:92,consistency:78,timeliness:95}),m=[{id:0,title:"Data Cleaning",description:"Remove duplicates, fix formatting"},{id:1,title:"Type Conversion",description:"Convert strings to proper types"},{id:2,title:"Missing Values",description:"Handle nulls and empty fields"},{id:3,title:"Data Validation",description:"Check constraints and rules"},{id:4,title:"Format Standardization",description:"Consistent date/number formats"}],h=[{issue:"Missing quotes",example:"John,Doe,25,NY",impact:"High",fix:"Add proper quoting"},{issue:"Inconsistent delimiters",example:"John,Doe;25;NY",impact:"High",fix:"Standardize delimiter"},{issue:"Mixed line endings",example:"CRLF vs LF",impact:"Medium",fix:"Convert to uniform"},{issue:"UTF-8 BOM",example:"ï»¿Header1,Header2",impact:"Low",fix:"Remove BOM"},{issue:"Extra commas in data",example:'"John","Doe, Jr.",25',impact:"High",fix:"Escape properly"}],i=a=>{c(s=>({...s,[a]:Math.min(100,s[a]+5)}))};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8 transition-colors duration-500",children:[e.jsx("section",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out]",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-6 animate-[slideInLeft_0.6s_ease-out]",children:e.jsx("span",{className:"text-sm font-semibold text-teal-700 dark:text-teal-300",children:"Mini Project 03"})}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight",children:"Clean & Transform Raw CSV Data"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl",children:"A hands-on project to process messy CSV files using awk, sed, and grep for data quality improvement"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[{label:"Data Quality",value:`${Math.round(Object.values(n).reduce((a,s)=>a+s)/4)}%`,color:"bg-teal-100 dark:bg-teal-900/30",text:"text-teal-700 dark:text-teal-300",metric:"overall"},{label:"Files Processed",value:"100+",color:"bg-indigo-100 dark:bg-indigo-900/30",text:"text-indigo-700 dark:text-indigo-300",metric:"files"},{label:"Transformation Rules",value:"15",color:"bg-amber-100 dark:bg-amber-900/30",text:"text-amber-700 dark:text-amber-300",metric:"rules"},{label:"Complexity Level",value:"Advanced",color:"bg-rose-100 dark:bg-rose-900/30",text:"text-rose-700 dark:text-rose-300",metric:"complexity"}].map((a,s)=>e.jsxs("div",{className:t("p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl",a.color,"animate-[fadeInUp_0.8s_ease-out]"),style:{animationDelay:`${s*100}ms`},onClick:()=>a.metric&&i(a.metric),children:[e.jsx("div",{className:"text-3xl font-bold mb-2 dark:text-white",children:a.value}),e.jsx("div",{className:t("text-sm font-medium",a.text),children:a.label})]},s))})]})}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.9s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-teal-600 dark:text-teal-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Real-World Challenge"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Situation:"})," Swadeep at Ichapur Municipal Corporation received student data from 50 schools. The CSV files have inconsistent formats, missing values, and duplicate records. He needs to:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4 mt-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-300 mb-2",children:"Problems Found"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-red-500 mr-2",children:"•"}),"Mixed date formats (DD/MM/YYYY, MM-DD-YYYY)"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-red-500 mr-2",children:"•"}),"Inconsistent school names (Abbreviations vs Full)"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-red-500 mr-2",children:"•"}),"Missing marks for transferred students"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-red-500 mr-2",children:"•"}),"Duplicate enrollment records"]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300 mb-2",children:"Required Output"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Standardized CSV format"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Validated and cleaned data"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Summary statistics report"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"Error log for manual review"]})]})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-3",children:"Sample Raw CSV (Problematic):"}),e.jsx("div",{className:"p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm font-mono",children:e.jsx("pre",{children:`ID,Name,DOB,School,Marks,Grade
101,"John, Doe",15/03/2005,Barrackpore HS,85,A
102,Mary Smith,03-15-2005,BP HS,92,
103,"Robert ""Bob"" Jr",2005-07-22,"Shyamnagar School",78,B
104,Jane Doe,22/07/2005,Barrackpore High School,85,A
101,"John, Doe",15/03/2005,Barrackpore HS,85,A
105,,31/12/2005,Naihati Academy,,C`})})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Transformation Pipeline"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg transform transition-all duration-300 hover:scale-[1.01]",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"1"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Initial Cleanup"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Remove duplicates, fix basic formatting issues, and standardize headers"}),e.jsx(r,{fileModule:x,title:"Basic CSV Cleanup",highlightLines:[3,7,12]}),e.jsxs("div",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Result:"})," Removes exact duplicates and empty lines"]})]}),e.jsxs("div",{className:"p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-lg transform transition-all duration-300 hover:scale-[1.01]",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"2"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Data Validation"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Check for required fields, valid ranges, and consistency rules"}),e.jsx(r,{fileModule:p,title:"CSV Validation Script",highlightLines:[5,10,15]}),e.jsxs("div",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Result:"})," Generates error report for manual review"]})]}),e.jsxs("div",{className:"p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10 rounded-r-lg transform transition-all duration-300 hover:scale-[1.01]",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold",children:"3"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Advanced Transformation"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Convert data types, standardize formats, and derive new columns"}),e.jsx(r,{fileModule:g,title:"Complex Data Transformation",highlightLines:[8,14,20]}),e.jsxs("div",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Result:"})," Uniform YYYY-MM-DD dates and standardized school names"]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.1s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Common CSV Issues & Solutions"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300",children:"Issue"}),e.jsx("th",{className:"py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300",children:"Example"}),e.jsx("th",{className:"py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300",children:"Impact"}),e.jsx("th",{className:"py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300",children:"Solution"})]})}),e.jsx("tbody",{children:h.map((a,s)=>e.jsxs("tr",{className:t("border-b border-gray-100 dark:border-gray-800","hover:bg-gray-50 dark:hover:bg-gray-700/50","transition-colors duration-200","animate-[fadeInUp_0.8s_ease-out]"),style:{animationDelay:`${s*100}ms`},children:[e.jsx("td",{className:"py-3 px-4",children:e.jsx("div",{className:"font-medium text-gray-800 dark:text-gray-200",children:a.issue})}),e.jsx("td",{className:"py-3 px-4",children:e.jsx("code",{className:"text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded",children:a.example})}),e.jsx("td",{className:"py-3 px-4",children:e.jsx("span",{className:t("px-2 py-1 rounded-full text-xs font-medium",a.impact==="High"?"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300":a.impact==="Medium"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300":"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"),children:a.impact})}),e.jsx("td",{className:"py-3 px-4",children:e.jsx("div",{className:"text-gray-700 dark:text-gray-300",children:a.fix})})]},s))})]})})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Transformation Steps"}),e.jsx("div",{className:"space-y-3",children:m.map((a,s)=>e.jsx("button",{onClick:()=>o(a.id),className:t("w-full text-left p-4 rounded-xl transition-all duration-300 transform",d===a.id?"bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 scale-[1.02]":"bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:scale-[1.01]"),style:{animationDelay:`${s*100}ms`},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:t("w-8 h-8 rounded-full flex items-center justify-center mr-3",d===a.id?"bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"),children:e.jsx("span",{className:"font-bold",children:a.id+1})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.description})]})]})},a.id))})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_0.9s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Data Quality Dashboard"}),e.jsxs("div",{className:"space-y-4",children:[Object.entries(n).map(([a,s])=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 capitalize",children:a}),e.jsxs("span",{className:"text-sm font-bold text-teal-600 dark:text-teal-400",children:[s,"%"]})]}),e.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${s}%`}})})]},a)),e.jsx("div",{className:"pt-4 border-t border-gray-200 dark:border-gray-700",children:e.jsx("button",{onClick:()=>{Object.keys(n).forEach(a=>{i(a)})},className:"w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300",children:"Apply All Transformations"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-[fadeInUp_1s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Quick Commands"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1",children:"Count CSV Rows"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:"awk 'END {print NR}' file.csv"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1",children:"Remove Header"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:"tail -n +2 file.csv"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1",children:"Extract Columns"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:"cut -d',' -f1,3 file.csv"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1",children:"Find Duplicates"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:"awk -F',' 'seen[$0]++' file.csv"})]})]})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.2s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Report Generation"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-6 mb-6",children:[e.jsxs("div",{className:"p-5 bg-white/70 dark:bg-gray-800/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-indigo-700 dark:text-indigo-300 mb-3",children:"Summary Statistics"}),e.jsx(r,{fileModule:u,title:"Generate Analysis Report",highlightLines:[4,9,14]})]}),e.jsxs("div",{className:"p-5 bg-white/70 dark:bg-gray-800/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-indigo-700 dark:text-indigo-300 mb-3",children:"Sample Output"}),e.jsx("div",{className:"p-4 bg-gray-900 text-gray-100 rounded-lg text-sm font-mono",children:e.jsx("pre",{children:`=== CSV DATA QUALITY REPORT ===
Generated: 2024-03-15 14:30:45
File: students_cleaned.csv

SUMMARY STATISTICS:
Total Records: 1,045
Valid Records: 987 (94.5%)
Invalid Records: 58 (5.5%)
Duplicate Removed: 12

FIELD COMPLETENESS:
Name: 100.0%
DOB: 99.8%
School: 100.0%
Marks: 92.3%
Grade: 88.7%

DATA DISTRIBUTION:
Schools: Barrackpore HS (45%), Shyamnagar (30%), Naihati (25%)
Grade A: 42%, Grade B: 35%, Grade C: 23%
Average Marks: 78.5

ISSUES FOUND:
- 15 records with future DOB
- 8 records with marks > 100
- 22 records missing grades
- 13 inconsistent school names`})})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.3s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"CSV Processing Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Always Backup First"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Create a copy before transformation. Use: ",e.jsx("code",{children:"cp original.csv backup/"})]})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Test Incrementally"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Apply transformations on sample data first. Use: ",e.jsx("code",{children:"head -100 data.csv > sample.csv"})]})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-5 h-5 text-purple-600 dark:text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Log Everything"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Keep transformation logs: ",e.jsx("code",{children:"script.sh 2>&1 | tee transformation.log"})]})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_1.4s_ease-out]",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center",children:e.jsx("span",{className:"text-xl font-bold text-white",children:"SH"})})}),e.jsxs("div",{className:"ml-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Sukanta Hui • 27 years experience • sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Critical Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["When Abhronila processed Naihati school data, she found 5% duplicates. But upon checking, some were legitimate transfers between Barrackpore and Shyamnagar branches.",e.jsx("strong",{children:" Never auto-delete without domain knowledge."})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Pro Tip"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Create a validation pipeline that runs daily. Use ",e.jsx("code",{children:"cron"})," to check new CSV uploads and email Tuhina if data quality drops below 90%. Automation prevents garbage-in, garbage-out."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Classroom Strategy"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Start with intentionally messy data. Ask Debangshu to fix it. Then reveal there were 10 hidden issues. This teaches attention to detail better than perfect examples."})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.5s_ease-out]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mr-4",children:e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Think About This..."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-6",children:[e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("h3",{className:"font-semibold text-violet-700 dark:text-violet-300 mb-2",children:"Edge Cases"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["What if a student's name contains a comma? How should ",e.jsx("code",{children:'"Doe, John Jr."'}),"be handled differently from regular comma-separated values?"]})]}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("h3",{className:"font-semibold text-violet-700 dark:text-violet-300 mb-2",children:"Data Integrity"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"If marks are out of 100, what's more likely: a student scoring 101 (data error) or scoring -5 (different scoring system)? How would you validate this?"})]})]})]}),e.jsxs("section",{className:"mt-12 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-2xl shadow-xl p-6 md:p-8 animate-[fadeInUp_1.6s_ease-out]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Project Completion Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 mb-8",children:["✓ Verify CSV encoding (UTF-8)","✓ Check for BOM character","✓ Validate delimiter consistency","✓ Remove empty rows","✓ Standardize date formats","✓ Handle missing values","✓ Remove exact duplicates","✓ Generate quality report"].map((a,s)=>e.jsxs("div",{className:"flex items-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md",style:{animationDelay:`${s*100}ms`},children:[e.jsx("span",{className:"text-green-500 mr-3",children:"●"}),e.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:a})]},s))}),e.jsxs("div",{className:"p-5 bg-white/50 dark:bg-gray-800/50 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-cyan-700 dark:text-cyan-300 mb-2",children:"Advanced Challenge"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Create a complete ETL pipeline: Extract from messy CSV, Transform using all techniques learned, Load into a clean database table. Add error recovery so processing continues even if some rows fail."}),e.jsxs("div",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["Hint: Use ",e.jsx("code",{children:"while IFS= read -r line; do ... done < input.csv"})," for row-by-row processing with error handling."]})]})]})]}),e.jsxs("footer",{className:"mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Mini Project: CSV Data Cleaning & Transformation • Topic 25 • Command Line Text Processing"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 mt-2",children:"Real data is always messy. These skills turn chaos into actionable insights."})]}),e.jsx("style",{jsx:!0,children:`
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
                    .animate-\\[fadeInUp_1\\.5s_ease-out\\],
                    .animate-\\[fadeInUp_1\\.6s_ease-out\\] {
                        animation: none !important;
                    }
                }
            `})]})};export{k as default};

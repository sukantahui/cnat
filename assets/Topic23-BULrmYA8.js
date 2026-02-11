import{j as e}from"./index-D1bhWpF_.js";import{S as s}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const i=`#!/bin/bash
# Student Data Example Files
# Creating sample data files for the lab exercise

echo "=== Creating Sample Student Data Files ==="
echo ""

# Create directory for data files
mkdir -p /tmp/student_lab_data

echo "1. Mathematics marks (math_marks.txt):"
cat > /tmp/student_lab_data/math_marks.txt << 'EOF'
RollNo,Name,Mathematics
101,Swadeep Roy,92
102,Tuhina Das,88
103,Abhronila Sen,78
104,Debangshu Ghosh,85
105,Arjun Kumar,95
106, Priya Sharma , 82
107,Rohan Singh,NA
108,Anjali Verma,91
109,,75
110,Ravi Kumar,105
EOF
cat /tmp/student_lab_data/math_marks.txt
echo ""

echo "2. Science marks (science_marks.txt):"
cat > /tmp/student_lab_data/science_marks.txt << 'EOF'
RollNo;Name;Science
101;Swadeep Roy;88
102;Tuhina Das;92
103;Abhronila Sen;85
104;Debangshu Ghosh;80
105;Arjun Kumar;90
106;Priya Sharma;78
107;Rohan Singh;72
108;Anjali Verma;89
109;Sneha Patel;82
110;Ravi Kumar;88
EOF
cat /tmp/student_lab_data/science_marks.txt
echo ""

echo "3. English marks (english_marks.txt):"
cat > /tmp/student_lab_data/english_marks.txt << 'EOF'
RollNo  Name  English
101  Swadeep Roy  85
102  Tuhina Das  90
103  Abhronila Sen  82
104  Debangshu Ghosh  78
105  Arjun Kumar  88
106  Priya Sharma  85
107  Rohan Singh  68
108  Anjali Verma  92
109  Sneha Patel  80
110  Ravi Kumar  75
EOF
cat /tmp/student_lab_data/english_marks.txt
echo ""

echo "4. History marks (history_marks.txt):"
cat > /tmp/student_lab_data/history_marks.txt << 'EOF'
RollNo,Name,History
101,Swadeep Roy,78
102,Tuhina Das,85
103,Abhronila Sen,88
104,Debangshu Ghosh,82
105,Arjun Kumar,90
106,Priya Sharma,79
107,Rohan Singh,65
108,Anjali Verma,87
109,Sneha Patel,81
110,Ravi Kumar,72
EOF
cat /tmp/student_lab_data/history_marks.txt
echo ""

echo "5. Computer Science marks (cs_marks.txt):"
cat > /tmp/student_lab_data/cs_marks.txt << 'EOF'
RollNo|Name|Computer
101|Swadeep Roy|95
102|Tuhina Das|88
103|Abhronila Sen|92
104|Debangshu Ghosh|85
105|Arjun Kumar|96
106|Priya Sharma|87
107|Rohan Singh|70
108|Anjali Verma|93
109|Sneha Patel|84
110|Ravi Kumar|89
EOF
cat /tmp/student_lab_data/cs_marks.txt
echo ""

echo "6. Student information (student_info.txt):"
cat > /tmp/student_lab_data/student_info.txt << 'EOF'
RollNo,Name,Class,Section,Gender
101,Swadeep Roy,XII,A,Male
102,Tuhina Das,XII,A,Female
103,Abhronila Sen,XII,A,Female
104,Debangshu Ghosh,XII,A,Male
105,Arjun Kumar,XII,B,Male
106,Priya Sharma,XII,B,Female
107,Rohan Singh,XII,B,Male
108,Anjali Verma,XII,B,Female
109,Sneha Patel,XII,B,Female
110,Ravi Kumar,XII,C,Male
EOF
cat /tmp/student_lab_data/student_info.txt
echo ""

echo "=== Data Issues Summary ==="
echo ""
echo "Issues to fix in the data:"
echo "1. Different delimiters: , ; | and whitespace"
echo "2. Inconsistent spacing: ' Priya Sharma ' has extra spaces"
echo "3. Missing values: Roll 109 has empty name in math file"
echo "4. Invalid marks: Ravi Kumar has 105 in math (out of 100)"
echo "5. NA values: Rohan Singh has 'NA' in math"
echo "6. Mixed case: Names inconsistent across files"
echo "7. Different column orders"
echo ""
echo "Total files created:"
ls -la /tmp/student_lab_data/*.txt | wc -l
echo "Total students: 10"
echo "Total subjects: 5"`,l=`#!/bin/bash
# Student Marks Processing Script
# Step 1: Clean and process the raw data files

echo "=== Step 1: Data Cleaning and Processing ==="
echo ""

echo "1.1 Standardizing Mathematics marks file:"
echo "Original file has issues: extra spaces, NA values, invalid marks"
echo ""
echo "Cleaning steps:"
cat > /tmp/clean_math.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/math_marks.txt"
output="/tmp/student_lab_data/math_cleaned.txt"

echo "Step 1: Remove extra spaces around commas"
echo "Step 2: Replace NA with 0"
echo "Step 3: Cap marks at 100 (fix 105 -> 100)"
echo "Step 4: Remove empty lines"
echo ""

# Process the file
sed 's/ *, */,/g' "$input" | \\
    sed 's/,NA,/,0,/g' | \\
    awk -F, '{
        if ($3 > 100) $3 = 100
        if ($1 != "" && $2 != "") print $1 "," $2 "," $3
    }' > "$output"

echo "Before cleaning:"
head -n 5 "$input"
echo ""
echo "After cleaning:"
head -n 5 "$output"
EOF

chmod +x /tmp/clean_math.sh
/tmp/clean_math.sh
echo ""

echo "1.2 Processing Science marks (different delimiter):"
cat > /tmp/clean_science.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/science_marks.txt"
output="/tmp/student_lab_data/science_cleaned.txt"

echo "Converting from ; delimiter to , delimiter"
echo "Also standardizing column names"

# Convert delimiter and clean
sed 's/;/,/g' "$input" | \\
    sed 's/RollNo,Name,Science/RollNo,Name,Science/' > "$output"

echo "Original (first 3 lines):"
head -n 3 "$input"
echo ""
echo "Cleaned (first 3 lines):"
head -n 3 "$output"
EOF

chmod +x /tmp/clean_science.sh
/tmp/clean_science.sh
echo ""

echo "1.3 Processing English marks (space delimited):"
cat > /tmp/clean_english.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/english_marks.txt"
output="/tmp/student_lab_data/english_cleaned.txt"

echo "Converting space-delimited to CSV"
echo "Handling variable spaces between columns"

# Convert spaces to commas, handling multiple spaces
awk '{
    # Skip header
    if (NR == 1) {
        print "RollNo,Name,English"
        next
    }
    # For data lines, fields are separated by 2+ spaces
    rollno = $1
    name = $2 " " $3
    marks = $4
    print rollno "," name "," marks
}' "$input" > "$output"

echo "Original (first 3 lines):"
head -n 3 "$input"
echo ""
echo "Cleaned (first 3 lines):"
head -n 3 "$output"
EOF

chmod +x /tmp/clean_english.sh
/tmp/clean_english.sh
echo ""

echo "1.4 Creating unified student database:"
cat > /tmp/create_unified_db.sh << 'EOF'
#!/bin/bash
echo "Creating unified student database from all cleaned files"
echo ""

# Create temporary files for each subject
math_file="/tmp/student_lab_data/math_cleaned.txt"
science_file="/tmp/student_lab_data/science_cleaned.txt"
english_file="/tmp/student_lab_data/english_cleaned.txt"
history_file="/tmp/student_lab_data/history_marks.txt"  # Already clean
cs_file="/tmp/student_lab_data/cs_marks.txt"

# Convert CS marks from | to , delimiter
awk -F'|' 'OFS="," {print $1, $2, $3}' "$cs_file" > /tmp/cs_cleaned.txt

# Extract just RollNo and marks for each subject
awk -F, 'NR>1 {print $1 "," $3}' "$math_file" > /tmp/math_scores.txt
awk -F, 'NR>1 {print $1 "," $3}' "$science_file" > /tmp/science_scores.txt
awk -F, 'NR>1 {print $1 "," $3}' "$english_file" > /tmp/english_scores.txt
awk -F, 'NR>1 {print $1 "," $3}' "$history_file" > /tmp/history_scores.txt
awk -F, 'NR>1 {print $1 "," $3}' /tmp/cs_cleaned.txt > /tmp/cs_scores.txt

echo "Sample of extracted scores:"
echo "Math:"
head -n 3 /tmp/math_scores.txt
echo ""
echo "Science:"
head -n 3 /tmp/science_scores.txt
echo ""

# Merge all scores by RollNo
echo "Merging all scores by RollNo..."
awk -F, '
BEGIN {
    # Initialize arrays
    OFS = ","
    print "RollNo,Math,Science,English,History,Computer"
}
{
    rollno = $1
    score = $2
    
    if (FILENAME == "/tmp/math_scores.txt") math[rollno] = score
    if (FILENAME == "/tmp/science_scores.txt") science[rollno] = score
    if (FILENAME == "/tmp/english_scores.txt") english[rollno] = score
    if (FILENAME == "/tmp/history_scores.txt") history[rollno] = score
    if (FILENAME == "/tmp/cs_scores.txt") computer[rollno] = score
}
END {
    # Print all students
    for (rollno = 101; rollno <= 110; rollno++) {
        m = (rollno in math) ? math[rollno] : "NA"
        s = (rollno in science) ? science[rollno] : "NA"
        e = (rollno in english) ? english[rollno] : "NA"
        h = (rollno in history) ? history[rollno] : "NA"
        c = (rollno in computer) ? computer[rollno] : "NA"
        print rollno, m, s, e, h, c
    }
}
' /tmp/math_scores.txt /tmp/science_scores.txt /tmp/english_scores.txt /tmp/history_scores.txt /tmp/cs_scores.txt > /tmp/student_lab_data/unified_scores.csv

echo "Unified scores database:"
cat /tmp/student_lab_data/unified_scores.csv
EOF

chmod +x /tmp/create_unified_db.sh
/tmp/create_unified_db.sh
echo ""

echo "=== Processing Complete ==="
echo ""
echo "Files created:"
ls -la /tmp/student_lab_data/*cleaned* /tmp/student_lab_data/*.csv 2>/dev/null
echo ""
echo "Next step: Calculate averages and assign grades"`,o=`#!/bin/bash
# Grade Assignment Script
# Step 2: Calculate averages and assign grades

echo "=== Step 2: Grade Assignment ==="
echo ""

echo "2.1 Loading unified scores database:"
unified_file="/tmp/student_lab_data/unified_scores.csv"
echo "File: $unified_file"
echo ""
head -n 5 "$unified_file"
echo "..."

echo ""
echo "2.2 Calculating subject averages and overall average:"
cat > /tmp/calculate_averages.sh << 'EOF'
#!/bin/bash
input="$unified_file"
output="/tmp/student_lab_data/student_averages.csv"

echo "Processing each student's marks..."
echo "Converting NA to 0 for average calculation"
echo ""

awk -F, '
BEGIN {
    OFS = ","
    print "RollNo,Math,Science,English,History,Computer,Total,Average,Grade"
}
NR == 1 { next }  # Skip header

{
    rollno = $1
    
    # Convert marks to numeric, NA becomes 0
    math = ($2 == "NA") ? 0 : $2
    science = ($3 == "NA") ? 0 : $3
    english = ($4 == "NA") ? 0 : $4
    history = ($5 == "NA") ? 0 : $5
    computer = ($6 == "NA") ? 0 : $6
    
    # Count subjects with actual marks (not NA)
    subjects_count = 0
    if ($2 != "NA") subjects_count++
    if ($3 != "NA") subjects_count++
    if ($4 != "NA") subjects_count++
    if ($5 != "NA") subjects_count++
    if ($6 != "NA") subjects_count++
    
    # Calculate total and average
    total = math + science + english + history + computer
    average = (subjects_count > 0) ? total / subjects_count : 0
    
    # Assign grade based on average
    if (average >= 90) grade = "A+"
    else if (average >= 80) grade = "A"
    else if (average >= 70) grade = "B+"
    else if (average >= 60) grade = "B"
    else if (average >= 50) grade = "C"
    else if (average >= 40) grade = "D"
    else grade = "F"
    
    print rollno, math, science, english, history, computer, total, sprintf("%.2f", average), grade
}
' "$input" > "$output"

echo "Student averages with grades:"
column -t -s, "$output" | head -n 12
EOF

chmod +x /tmp/calculate_averages.sh
/tmp/calculate_averages.sh
echo ""

echo "2.3 Generating class statistics:"
cat > /tmp/class_statistics.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/student_averages.csv"

echo "=== Class Statistics ==="
echo ""

# Calculate various statistics
awk -F, '
BEGIN {
    math_sum = science_sum = english_sum = history_sum = computer_sum = 0
    math_count = science_count = english_count = history_count = computer_count = 0
    max_avg = 0
    min_avg = 100
    total_students = 0
    
    # Grade distribution
    a_plus = a = b_plus = b = c = d = f = 0
}
NR == 1 { next }

{
    # Subject averages
    if ($2 > 0) { math_sum += $2; math_count++ }
    if ($3 > 0) { science_sum += $3; science_count++ }
    if ($4 > 0) { english_sum += $4; english_count++ }
    if ($5 > 0) { history_sum += $5; history_count++ }
    if ($6 > 0) { computer_sum += $6; computer_count++ }
    
    # Overall statistics
    avg = $8
    if (avg > max_avg) max_avg = avg
    if (avg < min_avg) min_avg = avg
    
    # Grade distribution
    grade = $9
    if (grade == "A+") a_plus++
    else if (grade == "A") a++
    else if (grade == "B+") b_plus++
    else if (grade == "B") b++
    else if (grade == "C") c++
    else if (grade == "D") d++
    else if (grade == "F") f++
    
    total_students++
}
END {
    print "SUBJECT-WISE AVERAGES:"
    print "Mathematics:   " (math_count > 0 ? sprintf("%.2f", math_sum/math_count) : "N/A")
    print "Science:       " (science_count > 0 ? sprintf("%.2f", science_sum/science_count) : "N/A")
    print "English:       " (english_count > 0 ? sprintf("%.2f", english_sum/english_count) : "N/A")
    print "History:       " (history_count > 0 ? sprintf("%.2f", history_sum/history_count) : "N/A")
    print "Computer:      " (computer_count > 0 ? sprintf("%.2f", computer_sum/computer_count) : "N/A")
    print ""
    
    print "OVERALL STATISTICS:"
    print "Total Students: " total_students
    print "Highest Average: " sprintf("%.2f", max_avg)
    print "Lowest Average:  " sprintf("%.2f", min_avg)
    print "Class Average:   " sprintf("%.2f", (math_sum + science_sum + english_sum + history_sum + computer_sum) / (math_count + science_count + english_count + history_count + computer_count))
    print ""
    
    print "GRADE DISTRIBUTION:"
    print "A+: " a_plus " students"
    print "A:  " a " students"
    print "B+: " b_plus " students"
    print "B:  " b " students"
    print "C:  " c " students"
    print "D:  " d " students"
    print "F:  " f " students"
    print ""
    
    pass_rate = (total_students - f) / total_students * 100
    print "PASS RATE: " sprintf("%.2f", pass_rate) "%"
}
' "$input"
EOF

chmod +x /tmp/class_statistics.sh
/tmp/class_statistics.sh
echo ""

echo "2.4 Creating rank list:"
cat > /tmp/create_rank_list.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/student_averages.csv"
output="/tmp/student_lab_data/rank_list.csv"

echo "Generating rank list sorted by average..."
echo ""

# Add rank column
awk -F, '
BEGIN {
    OFS = ","
    print "Rank,RollNo,Name,Average,Grade"
}
NR == 1 { next }

# Store all records
{
    records[NR] = $0
    averages[NR] = $8
    rollnos[NR] = $1
}
END {
    # Sort by average (descending)
    n = length(averages)
    for (i = 2; i <= n; i++) {
        for (j = i + 1; j <= n; j++) {
            if (averages[i] < averages[j]) {
                # Swap averages
                temp_avg = averages[i]
                averages[i] = averages[j]
                averages[j] = temp_avg
                
                # Swap records
                temp_rec = records[i]
                records[i] = records[j]
                records[j] = temp_rec
                
                # Swap rollnos
                temp_roll = rollnos[i]
                rollnos[i] = rollnos[j]
                rollnos[j] = temp_roll
            }
        }
    }
    
    # Print ranked list
    for (i = 2; i <= n; i++) {
        split(records[i], fields, ",")
        rank = i - 1
        # Get name from student info file
        name = "Unknown"
        cmd = "awk -F, '\\''$1 == " fields[1] " {print $2}'\\'' /tmp/student_lab_data/student_info.txt"
        cmd | getline name
        close(cmd)
        
        print rank, fields[1], name, sprintf("%.2f", fields[8]), fields[9]
    }
}
' "$input" > "$output"

echo "Top 5 ranked students:"
head -n 6 "$output" | column -t -s,
echo ""
echo "Full rank list saved to: $output"
EOF

chmod +x /tmp/create_rank_list.sh
/tmp/create_rank_list.sh`,c=`#!/bin/bash
# Report Generation Script
# Step 3: Generate various reports from processed data

echo "=== Step 3: Report Generation ==="
echo ""

echo "3.1 Generating individual student report cards:"
cat > /tmp/generate_report_cards.sh << 'EOF'
#!/bin/bash
input="/tmp/student_lab_data/student_averages.csv"
student_info="/tmp/student_lab_data/student_info.txt"
output_dir="/tmp/student_lab_data/report_cards"
mkdir -p "$output_dir"

echo "Creating individual report cards for each student..."
echo ""

awk -F, '
BEGIN {
    # Read student info into array
    while ((getline < "'"$student_info"'") > 0) {
        split($0, info, ",")
        student_name[info[1]] = info[2]
        student_class[info[1]] = info[3]
        student_section[info[1]] = info[4]
    }
}
NR == 1 { next }  # Skip header

{
    rollno = $1
    math = $2
    science = $3
    english = $4
    history = $5
    computer = $6
    total = $7
    average = $8
    grade = $9
    
    name = student_name[rollno]
    class = student_class[rollno]
    section = student_section[rollno]
    
    # Get rank from rank list
    rank_cmd = "grep '^[0-9]*," rollno "," "'"$input"' | head -1"
    rank_cmd | getline rank_line
    close(rank_cmd)
    split(rank_line, rank_fields, ",")
    rank = rank_fields[1]
    
    # Create report card
    report_file = "'"$output_dir"'/report_" rollno "_" name ".txt"
    
    print "=========================================" > report_file
    print "      BARRACKPORE HIGH SCHOOL" > report_file
    print "      TERM EXAMINATION REPORT" > report_file
    print "=========================================" > report_file
    print "" > report_file
    print "STUDENT INFORMATION:" > report_file
    print "Name:      " name > report_file
    print "Roll No:   " rollno > report_file
    print "Class:     " class "-" section > report_file
    print "Date:      " strftime("%d-%m-%Y") > report_file
    print "" > report_file
    print "SUBJECT-WISE MARKS:" > report_file
    print "-----------------------------------------" > report_file
    print "Subject       Marks   Grade   Remarks" > report_file
    print "-----------------------------------------" > report_file
    print "Mathematics    " sprintf("%3d", math) "      " get_subject_grade(math) "     " get_remarks(math) > report_file
    print "Science        " sprintf("%3d", science) "      " get_subject_grade(science) "     " get_remarks(science) > report_file
    print "English        " sprintf("%3d", english) "      " get_subject_grade(english) "     " get_remarks(english) > report_file
    print "History        " sprintf("%3d", history) "      " get_subject_grade(history) "     " get_remarks(history) > report_file
    print "Computer       " sprintf("%3d", computer) "      " get_subject_grade(computer) "     " get_remarks(computer) > report_file
    print "-----------------------------------------" > report_file
    print "" > report_file
    print "OVERALL PERFORMANCE:" > report_file
    print "Total Marks:   " total "/500" > report_file
    print "Average:       " sprintf("%.2f", average) "%" > report_file
    print "Overall Grade: " grade > report_file
    print "Class Rank:    " rank " (out of 10)" > report_file
    print "-----------------------------------------" > report_file
    print "" > report_file
    print "TEACHER'"'"'S REMARKS:" > report_file
    print get_overall_remarks(grade) > report_file
    print "" > report_file
    print "=========================================" > report_file
    print "Principal'"'"'s Signature: _______________" > report_file
    print "Class Teacher: _______________" > report_file
    print "=========================================" > report_file
    
    print "Generated report for " name " (Roll No: " rollno ")"
}

function get_subject_grade(marks) {
    if (marks >= 90) return "A+"
    else if (marks >= 80) return "A"
    else if (marks >= 70) return "B+"
    else if (marks >= 60) return "B"
    else if (marks >= 50) return "C"
    else if (marks >= 40) return "D"
    else return "F"
}

function get_remarks(marks) {
    if (marks >= 90) return "Outstanding"
    else if (marks >= 80) return "Excellent"
    else if (marks >= 70) return "Very Good"
    else if (marks >= 60) return "Good"
    else if (marks >= 50) return "Satisfactory"
    else if (marks >= 40) return "Needs Improvement"
    else return "Poor"
}

function get_overall_remarks(grade) {
    if (grade == "A+") return "Exceptional performance. Keep up the excellent work!"
    else if (grade == "A") return "Very good performance. Continue to work hard."
    else if (grade == "B+") return "Good performance. Room for improvement."
    else if (grade == "B") return "Satisfactory performance. Needs more focus."
    else if (grade == "C") return "Average performance. Requires more effort."
    else if (grade == "D") return "Below average. Needs significant improvement."
    else return "Failed. Requires remedial classes and parental guidance."
}
' "$input"

echo ""
echo "Report cards generated in: $output_dir"
echo "Sample report card for Swadeep Roy:"
cat "$output_dir/report_101_Swadeep Roy.txt" 2>/dev/null || echo "Report not found"
EOF

chmod +x /tmp/generate_report_cards.sh
/tmp/generate_report_cards.sh
echo ""

echo "3.2 Generating class-wise summary report:"
cat > /tmp/generate_class_summary.sh << 'EOF'
#!/bin/bash
output="/tmp/student_lab_data/class_summary.txt"

echo "Generating comprehensive class summary..."
echo ""

# Combine various statistics
{
    echo "================================================"
    echo "       BARRACKPORE HIGH SCHOOL - CLASS XII"
    echo "           TERM EXAMINATION SUMMARY"
    echo "================================================"
    echo ""
    echo "GENERATED ON: $(date)"
    echo ""
    
    echo "1. OVERALL STATISTICS"
    echo "====================="
    awk -F, '
    BEGIN {
        total_students = 0
        total_avg = 0
        pass_count = 0
    }
    NR == 1 { next }
    {
        total_students++
        total_avg += $8
        if ($9 != "F") pass_count++
    }
    END {
        print "Total Students:      " total_students
        print "Class Average:       " sprintf("%.2f", total_avg/total_students) "%"
        print "Pass Percentage:     " sprintf("%.2f", (pass_count/total_students)*100) "%"
        print "Fail Percentage:     " sprintf("%.2f", ((total_students-pass_count)/total_students)*100) "%"
    }
    ' /tmp/student_lab_data/student_averages.csv
    
    echo ""
    echo "2. TOP PERFORMERS"
    echo "================="
    echo "Rank  Roll No  Name              Average  Grade"
    echo "----  -------  ----------------  -------  -----"
    head -n 5 /tmp/student_lab_data/rank_list.csv | awk -F, '{printf "%-4s  %-7s  %-16s  %-7s  %-5s\\n", $1, $2, $3, $4, $5}'
    
    echo ""
    echo "3. SUBJECT-WISE ANALYSIS"
    echo "========================"
    awk -F, '
    BEGIN {
        math_sum = science_sum = english_sum = history_sum = computer_sum = 0
        math_count = science_count = english_count = history_count = computer_count = 0
        math_max = science_max = english_max = history_max = computer_max = 0
        math_min = science_min = english_min = history_min = computer_min = 100
    }
    NR == 1 { next }
    {
        if ($2 > 0) {
            math_sum += $2; math_count++
            if ($2 > math_max) math_max = $2
            if ($2 < math_min) math_min = $2
        }
        if ($3 > 0) {
            science_sum += $3; science_count++
            if ($3 > science_max) science_max = $3
            if ($3 < science_min) science_min = $3
        }
        if ($4 > 0) {
            english_sum += $4; english_count++
            if ($4 > english_max) english_max = $4
            if ($4 < english_min) english_min = $4
        }
        if ($5 > 0) {
            history_sum += $5; history_count++
            if ($5 > history_max) history_max = $5
            if ($5 < history_min) history_min = $5
        }
        if ($6 > 0) {
            computer_sum += $6; computer_count++
            if ($6 > computer_max) computer_max = $6
            if ($6 < computer_min) computer_min = $6
        }
    }
    END {
        printf "%-12s %-8s %-8s %-8s\\n", "Subject", "Average", "Highest", "Lowest"
        printf "%-12s %-8s %-8s %-8s\\n", "--------", "-------", "-------", "------"
        printf "%-12s %-8s %-8s %-8s\\n", "Mathematics", sprintf("%.2f", math_sum/math_count), math_max, math_min
        printf "%-12s %-8s %-8s %-8s\\n", "Science", sprintf("%.2f", science_sum/science_count), science_max, science_min
        printf "%-12s %-8s %-8s %-8s\\n", "English", sprintf("%.2f", english_sum/english_count), english_max, english_min
        printf "%-12s %-8s %-8s %-8s\\n", "History", sprintf("%.2f", history_sum/history_count), history_max, history_min
        printf "%-12s %-8s %-8s %-8s\\n", "Computer", sprintf("%.2f", computer_sum/computer_count), computer_max, computer_min
    }
    ' /tmp/student_lab_data/student_averages.csv
    
    echo ""
    echo "4. GRADE DISTRIBUTION"
    echo "====================="
    awk -F, '
    BEGIN {
        a_plus = a = b_plus = b = c = d = f = 0
    }
    NR == 1 { next }
    {
        grade = $9
        if (grade == "A+") a_plus++
        else if (grade == "A") a++
        else if (grade == "B+") b_plus++
        else if (grade == "B") b++
        else if (grade == "C") c++
        else if (grade == "D") d++
        else if (grade == "F") f++
    }
    END {
        total = a_plus + a + b_plus + b + c + d + f
        printf "A+: %2d students (%5.1f%%)\\n", a_plus, (a_plus/total)*100
        printf "A:  %2d students (%5.1f%%)\\n", a, (a/total)*100
        printf "B+: %2d students (%5.1f%%)\\n", b_plus, (b_plus/total)*100
        printf "B:  %2d students (%5.1f%%)\\n", b, (b/total)*100
        printf "C:  %2d students (%5.1f%%)\\n", c, (c/total)*100
        printf "D:  %2d students (%5.1f%%)\\n", d, (d/total)*100
        printf "F:  %2d students (%5.1f%%)\\n", f, (f/total)*100
    }
    ' /tmp/student_lab_data/student_averages.csv
    
    echo ""
    echo "5. RECOMMENDATIONS"
    echo "=================="
    echo "1. Students with grade F need remedial classes"
    echo "2. Focus on improving English scores"
    echo "3. Computer Science performed exceptionally well"
    echo "4. Consider additional support for Mathematics"
    echo ""
    echo "================================================"
    echo "Prepared by: School Administration System"
    echo "================================================"
} > "$output"

echo "Class summary report generated: $output"
echo ""
echo "First 30 lines of summary:"
head -n 30 "$output"
EOF

chmod +x /tmp/generate_class_summary.sh
/tmp/generate_class_summary.sh`,d=`#!/bin/bash
# Comprehensive Lab Solution
# Complete solution integrating all steps

echo "=== COMPREHENSIVE LAB SOLUTION ==="
echo "Student Marks Processing System"
echo "================================="
echo ""

# Configuration
DATA_DIR="/tmp/student_lab_comprehensive"
mkdir -p "$DATA_DIR"

echo "Step 0: Create sample data"
echo "--------------------------"
cat > "$DATA_DIR/create_sample_data.sh" << 'SAMPLE'
#!/bin/bash
# Create all sample data files
echo "Creating sample data files..."

# Student info
cat > $DATA_DIR/students.csv << EOF
101,Swadeep Roy,XII,A
102,Tuhina Das,XII,A
103,Abhronila Sen,XII,A
104,Debangshu Ghosh,XII,A
105,Arjun Kumar,XII,B
106,Priya Sharma,XII,B
107,Rohan Singh,XII,B
108,Anjali Verma,XII,B
109,Sneha Patel,XII,B
110,Ravi Kumar,XII,C
EOF

# Subject marks with various issues
cat > $DATA_DIR/math.txt << EOF
101  ,Swadeep Roy,  92
102,  Tuhina Das  ,88
103,Abhronila Sen,78
104,Debangshu Ghosh,85
105,Arjun Kumar,95
106, Priya Sharma , 82
107,Rohan Singh,NA
108,Anjali Verma,91
109,,75
110,Ravi Kumar,105
EOF

cat > $DATA_DIR/science.csv << EOF
RollNo;Name;Science
101;Swadeep Roy;88
102;Tuhina Das;92
103;Abhronila Sen;85
104;Debangshu Ghosh;80
105;Arjun Kumar;90
106;Priya Sharma;78
107;Rohan Singh;72
108;Anjali Verma;89
109;Sneha Patel;82
110;Ravi Kumar;88
EOF

cat > $DATA_DIR/english.tsv << EOF
RollNo	Name	English
101	Swadeep Roy	85
102	Tuhina Das	90
103	Abhronila Sen	82
104	Debangshu Ghosh	78
105	Arjun Kumar	88
106	Priya Sharma	85
107	Rohan Singh	68
108	Anjali Verma	92
109	Sneha Patel	80
110	Ravi Kumar	75
EOF

echo "Sample data created in $DATA_DIR/"
SAMPLE

chmod +x "$DATA_DIR/create_sample_data.sh"
"$DATA_DIR/create_sample_data.sh"
echo ""

echo "Step 1: Data Cleaning Module"
echo "----------------------------"
cat > "$DATA_DIR/clean_data.sh" << 'CLEAN'
#!/bin/bash
# Clean all data files

echo "1.1 Cleaning Mathematics data..."
awk '
BEGIN {FS=","; OFS=","}
{
    gsub(/^[ \\t]+|[ \\t]+$/, "", $1)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $2)
    gsub(/^[ \\t]+|[ \\t]+$/, "", $3)
    
    if ($3 == "NA" || $3 == "") $3 = 0
    if ($3 > 100) $3 = 100
    
    if ($1 != "" && $2 != "") print $1, $2, $3
}' "$DATA_DIR/math.txt" > "$DATA_DIR/math_clean.csv"

echo "1.2 Cleaning Science data..."
sed 's/;/,/g' "$DATA_DIR/science.csv" | tail -n +2 > "$DATA_DIR/science_clean.csv"

echo "1.3 Cleaning English data..."
tail -n +2 "$DATA_DIR/english.tsv" | awk 'BEGIN {FS="\\t"; OFS=","} {print $1, $2, $3}' > "$DATA_DIR/english_clean.csv"

echo "Data cleaning complete!"
CLEAN

chmod +x "$DATA_DIR/clean_data.sh"
"$DATA_DIR/clean_data.sh"
echo ""

echo "Step 2: Data Processing Module"
echo "------------------------------"
cat > "$DATA_DIR/process_data.sh" << 'PROCESS'
#!/bin/bash
# Process cleaned data

echo "2.1 Creating unified database..."
# Create a unified file with all marks
awk -F, '
BEGIN {
    print "RollNo,Name,Math,Science,English"
}
# Read math data into arrays
FILENAME == "'"$DATA_DIR/math_clean.csv"'" {
    math_name[$1] = $2
    math_mark[$1] = $3
}
FILENAME == "'"$DATA_DIR/science_clean.csv"'" {
    science_name[$1] = $2
    science_mark[$1] = $3
}
FILENAME == "'"$DATA_DIR/english_clean.csv"'" {
    english_name[$1] = $2
    english_mark[$1] = $3
}
END {
    for (rollno = 101; rollno <= 110; rollno++) {
        name = math_name[rollno] ? math_name[rollno] : 
               science_name[rollno] ? science_name[rollno] : 
               english_name[rollno] ? english_name[rollno] : "Unknown"
        
        math = (rollno in math_mark) ? math_mark[rollno] : 0
        science = (rollno in science_mark) ? science_mark[rollno] : 0
        english = (rollno in english_mark) ? english_mark[rollno] : 0
        
        print rollno "," name "," math "," science "," english
    }
}' "$DATA_DIR/math_clean.csv" "$DATA_DIR/science_clean.csv" "$DATA_DIR/english_clean.csv" > "$DATA_DIR/unified.csv"

echo "2.2 Calculating averages and grades..."
awk -F, '
BEGIN {
    print "RollNo,Name,Math,Science,English,Total,Average,Grade"
}
NR == 1 { next }
{
    rollno = $1
    name = $2
    math = $3
    science = $4
    english = $5
    
    total = math + science + english
    average = total / 3
    
    if (average >= 90) grade = "A+"
    else if (average >= 80) grade = "A"
    else if (average >= 70) grade = "B+"
    else if (average >= 60) grade = "B"
    else if (average >= 50) grade = "C"
    else if (average >= 40) grade = "D"
    else grade = "F"
    
    print rollno "," name "," math "," science "," english "," total "," sprintf("%.2f", average) "," grade
}' "$DATA_DIR/unified.csv" > "$DATA_DIR/processed.csv"

echo "Processing complete!"
PROCESS

chmod +x "$DATA_DIR/process_data.sh"
"$DATA_DIR/process_data.sh"
echo ""

echo "Step 3: Report Generation Module"
echo "--------------------------------"
cat > "$DATA_DIR/generate_reports.sh" << 'REPORT'
#!/bin/bash
# Generate various reports

echo "3.1 Generating rank list..."
sort -t, -k7,7nr "$DATA_DIR/processed.csv" | awk -F, '
BEGIN {
    print "Rank,RollNo,Name,Average,Grade"
    rank = 0
    last_avg = -1
    same_rank_count = 0
}
NR == 1 { next }
{
    if ($7 != last_avg) {
        rank = rank + same_rank_count + 1
        same_rank_count = 0
    } else {
        same_rank_count++
    }
    last_avg = $7
    print rank "," $1 "," $2 "," $7 "," $8
}' > "$DATA_DIR/rank_list.csv"

echo "3.2 Generating class summary..."
{
    echo "CLASS PERFORMANCE SUMMARY"
    echo "=========================="
    echo ""
    echo "Date: $(date)"
    echo ""
    
    echo "Top 3 Students:"
    echo "---------------"
    head -n 3 "$DATA_DIR/rank_list.csv" | awk -F, '{printf "%d. %s (Roll No: %s) - %s (Avg: %s)\\n", $1, $3, $2, $5, $4}'
    echo ""
    
    echo "Grade Distribution:"
    echo "------------------"
    awk -F, '
    BEGIN {
        a_plus = a = b_plus = b = c = d = f = 0
    }
    NR == 1 { next }
    {
        grade = $8
        if (grade == "A+") a_plus++
        else if (grade == "A") a++
        else if (grade == "B+") b_plus++
        else if (grade == "B") b++
        else if (grade == "C") c++
        else if (grade == "D") d++
        else if (grade == "F") f++
    }
    END {
        total = a_plus + a + b_plus + b + c + d + f
        printf "A+: %d (%.1f%%)\\n", a_plus, (a_plus/total)*100
        printf "A:  %d (%.1f%%)\\n", a, (a/total)*100
        printf "B+: %d (%.1f%%)\\n", b_plus, (b_plus/total)*100
        printf "B:  %d (%.1f%%)\\n", b, (b/total)*100
        printf "C:  %d (%.1f%%)\\n", c, (c/total)*100
        printf "D:  %d (%.1f%%)\\n", d, (d/total)*100
        printf "F:  %d (%.1f%%)\\n", f, (f/total)*100
        printf "\\nPass Rate: %.1f%%\\n", ((total-f)/total)*100
    }
    ' "$DATA_DIR/processed.csv"
    
    echo ""
    echo "Subject-wise Performance:"
    echo "-------------------------"
    awk -F, '
    BEGIN {
        math_sum = science_sum = english_sum = 0
        math_count = science_count = english_count = 0
    }
    NR == 1 { next }
    {
        if ($3 > 0) { math_sum += $3; math_count++ }
        if ($4 > 0) { science_sum += $4; science_count++ }
        if ($5 > 0) { english_sum += $5; english_count++ }
    }
    END {
        printf "Mathematics: %.1f/100\\n", math_sum/math_count
        printf "Science:     %.1f/100\\n", science_sum/science_count
        printf "English:     %.1f/100\\n", english_sum/english_count
    }
    ' "$DATA_DIR/processed.csv"
} > "$DATA_DIR/class_summary.txt"

echo "3.3 Generating individual reports..."
mkdir -p "$DATA_DIR/individual_reports"
awk -F, '
NR == 1 { next }
{
    rollno = $1
    name = $2
    math = $3
    science = $4
    english = $5
    total = $6
    average = $7
    grade = $8
    
    # Get rank
    rank_cmd = "grep '\\''^[0-9]*," rollno "," "'"$DATA_DIR/rank_list.csv"'" | head -1"
    rank_cmd | getline rank_line
    close(rank_cmd)
    split(rank_line, rank_fields, ",")
    rank = rank_fields[1]
    
    report_file = "'"$DATA_DIR/individual_reports/"'" "report_" rollno ".txt"
    
    print "STUDENT REPORT CARD" > report_file
    print "===================" > report_file
    print "Name:   " name > report_file
    print "Roll No: " rollno > report_file
    print "" > report_file
    print "SUBJECT    MARKS   GRADE" > report_file
    print "-------    -----   -----" > report_file
    print "Math       " sprintf("%3d", math) "      " get_grade(math) > report_file
    print "Science    " sprintf("%3d", science) "      " get_grade(science) > report_file
    print "English    " sprintf("%3d", english) "      " get_grade(english) > report_file
    print "" > report_file
    print "TOTAL:     " total "/300" > report_file
    print "AVERAGE:   " sprintf("%.1f", average) "%" > report_file
    print "GRADE:     " grade > report_file
    print "RANK:      " rank " of 10" > report_file
    print "" > report_file
    print "Generated on: " strftime("%d-%m-%Y") > report_file
    
    print "Generated report for " name
}

function get_grade(marks) {
    if (marks >= 90) return "A+"
    else if (marks >= 80) return "A"
    else if (marks >= 70) return "B+"
    else if (marks >= 60) return "B"
    else if (marks >= 50) return "C"
    else if (marks >= 40) return "D"
    else return "F"
}
' "$DATA_DIR/processed.csv"

echo "Report generation complete!"
REPORT

chmod +x "$DATA_DIR/generate_reports.sh"
"$DATA_DIR/generate_reports.sh"
echo ""

echo "Step 4: Verification and Output"
echo "-------------------------------"
echo ""
echo "4.1 Final output files:"
echo "======================="
ls -la "$DATA_DIR/"*.csv "$DATA_DIR/"*.txt "$DATA_DIR/individual_reports/" 2>/dev/null | head -20
echo ""

echo "4.2 Sample outputs:"
echo "==================="
echo "Processed data (first 3 lines):"
head -n 4 "$DATA_DIR/processed.csv" | column -t -s,
echo ""
echo "Rank list (top 3):"
head -n 4 "$DATA_DIR/rank_list.csv" | column -t -s,
echo ""
echo "Class summary:"
head -n 20 "$DATA_DIR/class_summary.txt"
echo ""
echo "Sample individual report (Roll No 101):"
cat "$DATA_DIR/individual_reports/report_101.txt" 2>/dev/null || echo "Report not found"
echo ""

echo "4.3 Statistics:"
echo "==============="
echo "Total students processed: $(tail -n +2 "$DATA_DIR/processed.csv" | wc -l)"
echo "Reports generated: $(ls "$DATA_DIR/individual_reports/"*.txt 2>/dev/null | wc -l)"
echo "Class average: $(awk -F, 'NR>1 {sum+=$7; count++} END {printf "%.2f", sum/count}' "$DATA_DIR/processed.csv")%"
echo ""

echo "========================================"
echo "LAB COMPLETED SUCCESSFULLY!"
echo "All tasks completed: Data cleaning, processing,"
echo "grade assignment, and report generation."
echo "========================================"`,u=()=>e.jsxs("div",{className:"dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 p-4 md:p-8",children:[e.jsx("style",{children:`
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
                
                @keyframes labPulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
                    }
                    50% {
                        transform: scale(1.02);
                        box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
                    }
                }
                
                @keyframes dataFlow {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes progressBar {
                    0% {
                        width: 0%;
                    }
                    100% {
                        width: 100%;
                    }
                }
                `}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.8s_ease-out] mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-3 h-8 bg-blue-500 rounded-full"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent",children:"Topic 23: Practical Lab - Generate Student Marks Reports from Text Files"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed animate-[fadeSlideUp_1s_ease-out]",children:"Apply your text processing skills to solve real-world problems: Process, analyze, and generate comprehensive student reports"})]}),e.jsx("div",{className:"animate-[fadeSlideUp_1s_ease-out] mb-12 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 animate-[labPulse_3s_ease-in-out_infinite]",children:e.jsx("svg",{className:"w-12 h-12 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-3 text-blue-300",children:"Lab Scenario: Barrackpore High School Exam Processing"}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Swadeep, the school administrator at Barrackpore High School, needs to process examination results for 500+ students. The data comes in messy text files with inconsistencies. Your task: Clean the data, calculate statistics, assign grades, and generate professional reports using only Unix text processing tools."})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-emerald-300 border-b border-emerald-800 pb-2",children:"Lab Objectives"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{objective:"Data Cleaning",tasks:["Fix formatting issues","Handle missing values","Standardize data"],icon:"M3 10h11M9 21V5a2 2 0 012-2h2a2 2 0 012 2v16m-3.22-6.22l2.44-2.44m0 0l2.44-2.44M15.78 15.78l2.44 2.44M3 10h6m0 0v11",color:"blue"},{objective:"Processing",tasks:["Calculate averages","Assign grades","Generate statistics"],icon:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",color:"purple"},{objective:"Reporting",tasks:["Create summary reports","Generate class lists","Produce analytics"],icon:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",color:"green"}].map((n,t)=>e.jsxs("div",{className:`animate-[fadeSlideUp_${1.2+t*.1}s_ease-out] bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-${n.color}-700/30 hover:border-${n.color}-500/50 transition-all duration-300 hover:scale-[1.02]`,children:[e.jsxs("div",{className:`flex items-center gap-3 mb-4 text-${n.color}-300`,children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})}),e.jsx("h3",{className:"font-bold text-xl",children:n.objective})]}),e.jsx("ul",{className:"space-y-2",children:n.tasks.map((a,r)=>e.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-300",children:[e.jsx("div",{className:`w-2 h-2 bg-${n.color}-500 rounded-full`}),a]},r))})]},t))})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.4s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Sample Data Structure"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 mb-8",children:[e.jsx(s,{fileModule:i,title:"Student Marks Data Files",highlightLines:[3,7,11,15,19,23]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-cyan-300 mb-3",children:"Data Flow Visualization"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Data Sources (Multiple Files)"}),[{x:20,label:"math.txt",color:"#EF4444"},{x:120,label:"science.txt",color:"#3B82F6"},{x:220,label:"english.txt",color:"#10B981"},{x:320,label:"history.txt",color:"#F59E0B"},{x:420,label:"attendance.txt",color:"#8B5CF6"}].map((n,t)=>e.jsxs("g",{transform:`translate(${n.x}, 50)`,children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"40",rx:"5",fill:n.color,className:"hover:opacity-90 transition-opacity duration-300",children:e.jsx("animate",{attributeName:"y",values:"0;5;0",dur:"2s",repeatCount:"indefinite",begin:`${t*.3}s`})}),e.jsx("text",{x:"40",y:"25",textAnchor:"middle",fill:"white",fontSize:"10",children:n.label})]},t))]}),e.jsxs("g",{transform:"translate(0, 120)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Processing Pipeline"}),e.jsx("path",{d:"M100,50 L100,80",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("g",{transform:"translate(50, 100)",children:[{x:0,label:"Clean",color:"#EF4444",width:60},{x:80,label:"Merge",color:"#3B82F6",width:60},{x:160,label:"Calculate",color:"#10B981",width:80},{x:260,label:"Grade",color:"#F59E0B",width:60},{x:340,label:"Sort",color:"#8B5CF6",width:60},{x:420,label:"Report",color:"#EC4899",width:70}].map((n,t)=>e.jsxs("g",{transform:`translate(${n.x}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:n.width,height:"40",rx:"5",fill:n.color,className:"hover:opacity-90 transition-opacity duration-300 animate-[dataFlow_3s_ease-in-out_infinite]",style:{animationDelay:`${t*.5}s`},children:e.jsx("animate",{attributeName:"fill",values:`${n.color};#000000;${n.color}`,dur:"3s",repeatCount:"indefinite",begin:`${t*.5}s`})}),e.jsx("text",{x:n.width/2,y:"25",textAnchor:"middle",fill:"white",fontSize:"10",children:n.label}),t<5&&e.jsx("path",{d:`M${n.width},20 L${n.width+20},20`,stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite",begin:`${t*.5}s`})})]},t))})]}),e.jsxs("g",{transform:"translate(0, 220)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Output Reports"}),[{x:50,label:"Class Report",color:"#10B981",icon:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},{x:200,label:"Rank List",color:"#3B82F6",icon:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},{x:350,label:"Statistics",color:"#F59E0B",icon:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},{x:500,label:"Grade Sheet",color:"#8B5CF6",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}].map((n,t)=>e.jsxs("g",{transform:`translate(${n.x}, 50)`,children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"60",rx:"8",fill:n.color,className:"hover:opacity-90 transition-opacity duration-300",children:e.jsx("animate",{attributeName:"y",values:"0;-5;0",dur:"2s",repeatCount:"indefinite",begin:`${t*.4}s`})}),e.jsx("text",{x:"60",y:"25",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",children:n.label}),e.jsx("text",{x:"60",y:"40",textAnchor:"middle",fill:"white",fontSize:"8",children:"(PDF/CSV/TXT)"})]},t))]})]})})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-red-300",children:"Common Data Issues to Fix"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("th",{className:"text-left py-3 px-4 text-red-300",children:"Issue Type"}),e.jsx("th",{className:"text-left py-3 px-4 text-red-300",children:"Example"}),e.jsx("th",{className:"text-left py-3 px-4 text-red-300",children:"Impact"}),e.jsx("th",{className:"text-left py-3 px-4 text-green-300",children:"Solution"})]})}),e.jsx("tbody",{children:[{issue:"Missing Marks",example:"Science: , English: 85",impact:"Average calculation fails",solution:"Replace with 0 or NA"},{issue:"Inconsistent Case",example:"john doe, JOHN DOE, John Doe",impact:"Duplicate detection fails",solution:"Standardize to Title Case"},{issue:"Extra Whitespace",example:"Swadeep  ,  85",impact:"Field splitting incorrect",solution:"Trim spaces with sed"},{issue:"Mixed Delimiters",example:"Name: Swadeep, Marks:85",impact:"awk -F fails",solution:"Standardize delimiter"},{issue:"Invalid Marks",example:"Math: 105 (out of 100)",impact:"Statistics skewed",solution:"Validate range 0-100"}].map((n,t)=>e.jsxs("tr",{className:"border-b border-gray-800 hover:bg-gray-800/50 transition-colors duration-300",children:[e.jsx("td",{className:"py-3 px-4 text-gray-300",children:n.issue}),e.jsx("td",{className:"py-3 px-4",children:e.jsx("code",{className:"bg-gray-900/50 px-2 py-1 rounded text-xs",children:n.example})}),e.jsx("td",{className:"py-3 px-4 text-red-400",children:n.impact}),e.jsx("td",{className:"py-3 px-4 text-green-400",children:n.solution})]},t))})]})})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.6s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-purple-300 border-b border-purple-800 pb-2",children:"Step 1: Data Processing & Cleaning"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:l,title:"Student Marks Processing Script",highlightLines:[4,8,12,16,20,24,28,32]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-3",children:"Processing Steps Visualization"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{step:"1. Load",desc:"Read all subject files",color:"blue",icon:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"},{step:"2. Clean",desc:"Fix formatting issues",color:"red",icon:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},{step:"3. Merge",desc:"Combine all data",color:"green",icon:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},{step:"4. Calculate",desc:"Compute averages",color:"yellow",icon:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}].map((n,t)=>e.jsxs("div",{className:"bg-gray-800/30 p-3 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300",children:[e.jsx("div",{className:`text-${n.color}-400 mb-1 flex justify-center`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})})}),e.jsx("div",{className:"font-semibold text-gray-200 text-sm",children:n.step}),e.jsx("div",{className:"text-xs text-gray-400",children:n.desc})]},t))})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 hover:border-cyan-500/30 transition-all duration-500",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-cyan-300",children:"Processing Progress Tracking"}),e.jsx("div",{className:"space-y-4",children:[{task:"Data Loading",progress:100,color:"green"},{task:"Format Cleaning",progress:85,color:"blue"},{task:"Missing Value Handling",progress:70,color:"yellow"},{task:"Data Validation",progress:60,color:"purple"},{task:"Final Merge",progress:40,color:"red"}].map((n,t)=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-gray-300",children:n.task}),e.jsxs("span",{className:`text-${n.color}-400`,children:[n.progress,"%"]})]}),e.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:`h-full bg-${n.color}-500 rounded-full animate-[progressBar_2s_ease-out]`,style:{width:`${n.progress}%`}})})]},t))})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.8s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-300 border-b border-green-800 pb-2",children:"Step 2: Grade Assignment & Classification"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-green-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:o,title:"Grade Assignment Based on Marks",highlightLines:[4,8,12,16,20,24,28]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-3",children:"Grade Distribution System"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 700 250",className:"w-full",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Grade Classification Scale"}),[{grade:"A+",range:"90-100",color:"#10B981",width:120},{grade:"A",range:"80-89",color:"#34D399",width:110},{grade:"B+",range:"70-79",color:"#3B82F6",width:100},{grade:"B",range:"60-69",color:"#60A5FA",width:90},{grade:"C",range:"50-59",color:"#F59E0B",width:80},{grade:"D",range:"40-49",color:"#F97316",width:70},{grade:"F",range:"0-39",color:"#EF4444",width:60}].map((n,t)=>e.jsxs("g",{transform:`translate(${t*100}, 50)`,children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"40",rx:"5",fill:n.color,className:"hover:opacity-90 transition-opacity duration-300",children:e.jsx("animate",{attributeName:"height",values:"40;50;40",dur:"2s",repeatCount:"indefinite",begin:`${t*.3}s`})}),e.jsx("text",{x:"40",y:"20",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:n.grade}),e.jsx("text",{x:"40",y:"35",textAnchor:"middle",fill:"white",fontSize:"10",children:n.range})]},t))]}),e.jsxs("g",{transform:"translate(0, 120)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Sample Grade Distribution (500 Students)"}),[{grade:"A+",count:45,color:"#10B981"},{grade:"A",count:85,color:"#34D399"},{grade:"B+",count:120,color:"#3B82F6"},{grade:"B",count:110,color:"#60A5FA"},{grade:"C",count:75,color:"#F59E0B"},{grade:"D",count:40,color:"#F97316"},{grade:"F",count:25,color:"#EF4444"}].map((n,t)=>e.jsxs("g",{transform:`translate(${50+t*80}, 50)`,children:[e.jsx("rect",{x:"0",y:100-n.count/2,width:"40",height:n.count/2,fill:n.color,rx:"3",className:"hover:opacity-90 transition-opacity duration-300",children:e.jsx("animate",{attributeName:"height",from:"0",to:n.count/2,dur:"1s",fill:"freeze",begin:`${t*.2}s`})}),e.jsx("text",{x:"20",y:95-n.count/2,textAnchor:"middle",fill:"white",fontSize:"10",children:n.count}),e.jsx("text",{x:"20",y:"120",textAnchor:"middle",fill:"#9CA3AF",fontSize:"10",children:n.grade})]},t)),e.jsxs("g",{transform:"translate(500, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"100",rx:"5",fill:"#1F2937",stroke:"#374151"}),e.jsx("text",{x:"10",y:"20",fill:"#10B981",fontSize:"12",fontWeight:"bold",children:"Class Statistics"}),e.jsx("line",{x1:"10",y1:"25",x2:"170",y2:"25",stroke:"#4B5563"}),e.jsx("text",{x:"10",y:"45",fill:"#D1D5DB",fontSize:"10",children:"Total Students: 500"}),e.jsx("text",{x:"10",y:"60",fill:"#D1D5DB",fontSize:"10",children:"Class Average: 68.5%"}),e.jsx("text",{x:"10",y:"75",fill:"#D1D5DB",fontSize:"10",children:"Top Grade: A+ (45 students)"}),e.jsx("text",{x:"10",y:"90",fill:"#D1D5DB",fontSize:"10",children:"Pass Rate: 95%"})]})]})]})})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-yellow-300 border-b border-yellow-800 pb-2",children:"Step 3: Report Generation & Output"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:c,title:"Comprehensive Report Generation",highlightLines:[4,8,12,16,20,24,28,32]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-blue-500/20",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-2",children:"Report Types Generated"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),"Individual student report cards"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Class rank list with positions"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),"Subject-wise performance analysis"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Teacher summary with statistics"]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-green-500/20",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Output Formats"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded",children:[e.jsx("div",{className:"text-xs text-blue-400",children:"CSV"}),e.jsx("div",{className:"text-xs text-gray-400",children:"For Excel"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded",children:[e.jsx("div",{className:"text-xs text-green-400",children:"TXT"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Readable"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded",children:[e.jsx("div",{className:"text-xs text-purple-400",children:"HTML"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Web View"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded",children:[e.jsx("div",{className:"text-xs text-yellow-400",children:"PDF"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Printable"})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-purple-500/20",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Sample Report Preview"}),e.jsx("div",{className:"bg-gray-900 p-3 rounded border border-gray-700",children:e.jsx("pre",{className:"text-xs text-gray-300",children:`=========================================
      BARRACKPORE HIGH SCHOOL
      TERM EXAMINATION REPORT
=========================================

Student: Swadeep Roy
Roll No: 101
Class: XII-A

SUBJECTS    MARKS   GRADE   REMARKS
-----------------------------------------
Mathematics   92     A+     Excellent
Science       88     A      Very Good
English       85     A      Good
History       78     B+     Good
Computer      95     A+     Outstanding

-----------------------------------------
TOTAL:       438/500
AVERAGE:     87.6%
OVERALL:     A
RANK:        5/120
-----------------------------------------`})})]})})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-red-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:d,title:"Complete Lab Solution - All Steps Combined",highlightLines:[5,10,15,20,25,30,35,40]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-3",children:"Lab Success Criteria"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-900/20 p-4 rounded-lg border border-green-500/20",children:[e.jsx("div",{className:"font-bold text-green-300 mb-1",children:"✓ Must Achieve"}),e.jsxs("ul",{className:"text-sm text-gray-300 space-y-1",children:[e.jsx("li",{children:"Clean all data inconsistencies"}),e.jsx("li",{children:"Calculate correct averages"}),e.jsx("li",{children:"Assign accurate grades"}),e.jsx("li",{children:"Generate error-free reports"})]})]}),e.jsxs("div",{className:"bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20",children:[e.jsx("div",{className:"font-bold text-yellow-300 mb-1",children:"★ Bonus Points"}),e.jsxs("ul",{className:"text-sm text-gray-300 space-y-1",children:[e.jsx("li",{children:"Handle edge cases (absent students)"}),e.jsx("li",{children:"Create graphical statistics"}),e.jsx("li",{children:"Generate multiple report formats"}),e.jsx("li",{children:"Optimize for performance"})]})]})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-red-300 border-b border-red-800 pb-2",children:"Lab Challenges & Problem Solving"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-900/30 to-red-800/20 p-5 rounded-xl border border-red-700/30 hover:border-red-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-red-200",children:"Common Challenges"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Challenge 1: Duplicate Records"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Same student appears multiple times in different files"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"Solution: Use sort -u or awk '!seen[$0]++'"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Challenge 2: Missing Subjects"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Some students missing marks for certain subjects"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"Solution: Use awk with default values or imputation"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Challenge 3: Performance Issues"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Processing 500+ students takes too long"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"Solution: Optimize awk scripts, use associative arrays"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-5 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Debugging Strategies"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Test with Small Data"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Create 5-student test files first"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"When Abhronila from Shyamnagar tested with 5 students first, she caught 80% of bugs early"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Verify Intermediate Results"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Save and check each processing step"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Use tee command: command | tee step1.out | next_command"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Compare with Manual Calculation"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Verify results for few students manually"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Swadeep verified first 10 students manually to validate his script"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-5 rounded-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-purple-200",children:"Real-World Extensions"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-green-300 mb-1",children:"Attendance Integration"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Combine marks with attendance data. Students with less than 75% attendance get grade reduction."})]})]})}),e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-yellow-300 mb-1",children:"Parent Notification"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Generate personalized emails/SMS for parents with their child's performance."})]})]})}),e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-blue-300 mb-1",children:"Trend Analysis"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Compare current term with previous terms to identify improvement/decline patterns."})]})]})})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-green-900/30 to-green-800/20 p-5 rounded-xl border border-green-700/30 hover:border-green-500/50 transition-all duration-300",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-green-200",children:"Success Story: Tuhina's Implementation"}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-6 h-6 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 text-sm",children:"Tuhina from Naihati implemented this system for her school. What took teachers 3 days manually now takes 5 minutes. The script processes 600 students, generates 4 report types, and even emails reports to parents automatically."}),e.jsx("div",{className:"mt-2 text-sm text-green-400",children:"Time saved: 99.7% | Accuracy: 100% | Teacher satisfaction: 100%"})]})]})]})})]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_2.4s_ease-out] mb-12",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-300",children:"Teacher's Note"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-900/40 rounded-xl border border-gray-700",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Dear students, this lab is where theory meets practice. In my 27 years of teaching, I've seen students who could recite every grep flag but couldn't solve a real problem. This lab teaches you to think systematically. Remember Debangshu from Ichapur? He failed this lab twice because he jumped straight to coding. On the third attempt, he first wrote down: 1) What data I have, 2) What I need to produce, 3) Steps to get there. He aced it. Plan first, code second."})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-300",children:"Sukanta Hui"}),e.jsx("div",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-green-300",children:"Lab Philosophy"}),e.jsx("div",{className:"text-sm text-gray-400",children:'"Solve the problem, then write the code"'})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-cyan-300",children:"Contact"}),e.jsx("div",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-yellow-200",children:"Lab Evaluation Criteria"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-300",children:[e.jsx("li",{children:"Correctness (40%) - Does it produce right results?"}),e.jsx("li",{children:"Efficiency (20%) - Does it process data optimally?"}),e.jsx("li",{children:"Robustness (20%) - Does it handle edge cases?"}),e.jsx("li",{children:"Code Quality (20%) - Is it readable and maintainable?"})]}),e.jsx("p",{className:"mt-3 text-sm text-gray-400",children:"Tip: Document your approach. Even if code has issues, showing systematic thinking earns partial marks."})]})]})]})})}),e.jsx("div",{className:"animate-[fadeSlideUp_2.6s_ease-out]",children:e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-emerald-300 border-b border-emerald-800 pb-2",children:"Lab Completion Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:[{task:"Setup test data files",status:"pending",points:10},{task:"Clean and standardize data",status:"pending",points:20},{task:"Calculate student averages",status:"pending",points:20},{task:"Assign letter grades",status:"pending",points:15}].map((n,t)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-6 h-6 rounded-full ${n.status==="completed"?"bg-green-500":"bg-gray-700"} flex items-center justify-center`,children:n.status==="completed"?e.jsx("svg",{className:"w-4 h-4 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):e.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200",children:n.task}),e.jsxs("div",{className:"text-xs text-gray-400",children:[n.points," points"]})]})]}),e.jsx("div",{className:`text-sm font-bold ${n.status==="completed"?"text-green-400":"text-yellow-400"}`,children:n.status==="completed"?"✓ Done":"Pending"})]},t))}),e.jsx("div",{className:"space-y-4",children:[{task:"Generate rank list",status:"pending",points:15},{task:"Create summary report",status:"pending",points:10},{task:"Handle edge cases",status:"pending",points:5},{task:"Optimize performance",status:"pending",points:5}].map((n,t)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-6 h-6 rounded-full ${n.status==="completed"?"bg-green-500":"bg-gray-700"} flex items-center justify-center`,children:n.status==="completed"?e.jsx("svg",{className:"w-4 h-4 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):e.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200",children:n.task}),e.jsxs("div",{className:"text-xs text-gray-400",children:[n.points," points"]})]})]}),e.jsx("div",{className:`text-sm font-bold ${n.status==="completed"?"text-green-400":"text-yellow-400"}`,children:n.status==="completed"?"✓ Done":"Pending"})]},t))})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Hint Section"}),e.jsx("p",{className:"text-gray-300 italic",children:"Think about: How would you handle a student who was absent for one subject but attended others? Observe carefully: What patterns emerge when you look at top-performing vs struggling students? Try changing this: Instead of processing all students at once, what if you process by class sections first?"})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Professional Implementation Tip"}),e.jsx("p",{className:"text-gray-300 text-sm",children:"When Swadeep implemented this for Barrackpore High School, he created a modular approach: 1) data_cleaner.sh, 2) calculator.sh, 3) grader.sh, 4) reporter.sh. This allowed testing each module independently and made debugging 10x easier. The whole system processes 500 students in under 30 seconds on a basic laptop."})]}),e.jsxs("div",{className:"mt-6 flex justify-between items-center p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/20",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-emerald-300",children:"Total Possible Points: 100"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Complete all tasks to achieve perfect score"})]}),e.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:"Lab 23"})]})]})})]})]});export{u as default};

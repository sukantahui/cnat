import{r,j as e}from"./index-Do7ncMju.js";import{c as x}from"./clsx-B-dksMZM.js";import{S as t}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const p=`#!/bin/bash
# Basic READ Command Examples
# Topic 8: Reading User Input

echo "=== BASIC READ COMMAND EXAMPLES ==="
echo

# Example 1: Simple read (waiting for Enter)
echo "Example 1: Simple read"
echo -n "What is your name? "
read username
echo "Hello, $username!"
echo

# Example 2: Read with prompt (-p option)
echo "Example 2: Using -p for inline prompt"
read -p "Where are you from? (e.g., Barrackpore, Naihati): " location
echo "Nice! $location is a beautiful place."
echo

# Example 3: Reading multiple variables
echo "Example 3: Reading multiple values at once"
read -p "Enter your full name (First Last): " first last
echo "First name: $first"
echo "Last name: $last"
echo

# Example 4: Silent input for passwords (-s option)
echo "Example 4: Silent mode for passwords"
read -sp "Enter your password (won't show): " password
echo -e "\\nPassword accepted! (Length: \${#password} characters)"
echo

# Example 5: Reading into an array (-a option)
echo "Example 5: Reading into an array"
echo "Enter your top 3 favorite subjects (separated by spaces):"
read -a subjects
echo "Your subjects:"
for i in "\${!subjects[@]}"; do
    echo "  $((i+1)). \${subjects[i]}"
done
echo

# Example 6: Reading with timeout (-t option)
echo "Example 6: Timeout after 5 seconds"
read -t 5 -p "Quick! Enter your favorite color: " color
if [ -z "$color" ]; then
    echo "Too slow! Timeout reached."
else
    echo "You chose: $color"
fi
echo

# Example 7: Reading exactly N characters (-n option)
echo "Example 7: Reading exactly 1 character (no Enter needed)"
read -n 1 -p "Continue? (y/n): " choice
echo -e "\\nYou chose: $choice"
echo

# Example 8: Reading with default value
echo "Example 8: Read with default value"
read -p "Enter editor [vim]: " editor
editor="\${editor:-vim}"  # Default to vim if empty
echo "Using editor: $editor"`,g=`#!/bin/bash
# Advanced READ Options
# Topic 8: Reading User Input

echo "=== ADVANCED READ OPTIONS ==="
echo

# Example 1: Raw input mode (-r) - preserves backslashes
echo "Example 1: Raw mode vs Normal mode"
echo "Enter a path with backslashes: C:\\\\Users\\\\Tuhina\\\\Documents"
echo -n "Normal read: "
read normal_path
echo "You entered: $normal_path"
echo -n "Raw read (-r): "
read -r raw_path
echo "You entered: $raw_path"
echo "Notice the difference in backslash handling!"
echo

# Example 2: Reading with delimiter
echo "Example 2: Custom delimiter"
IFS=: read -p "Enter name:age:city (separated by :): " name age city
echo "Name: $name, Age: $age, City: $city"
echo

# Example 3: Reading with validation loop
echo "Example 3: Input validation loop"
while true; do
    read -p "Enter a number between 1 and 10: " number
    
    # Check if it's a number
    if ! [[ "$number" =~ ^[0-9]+$ ]]; then
        echo "Error: Please enter a valid number"
        continue
    fi
    
    # Check range
    if [ "$number" -lt 1 ] || [ "$number" -gt 10 ]; then
        echo "Error: Number must be between 1 and 10"
        continue
    fi
    
    echo "Valid number entered: $number"
    break
done
echo

# Example 4: Reading file paths with validation
echo "Example 4: File path validation"
read -p "Enter a filename to check: " filename
if [ -f "$filename" ]; then
    echo "File exists: $filename"
    echo "Size: $(wc -c < "$filename") bytes"
else
    echo "File does not exist or is not a regular file"
fi
echo

# Example 5: Reading with line limit
echo "Example 5: Limiting input length"
read -n 20 -p "Enter a short message (max 20 chars): " message
echo -e "\\nYou entered: '$message'"
echo "Length: \${#message} characters"
echo

# Example 6: Reading with default and timeout
echo "Example 6: Combined options - timeout with default"
read -t 3 -p "Press Enter quickly or use default [3 seconds]: " response
response="\${response:-default_value}"
echo "Result: $response"
echo

# Example 7: Reading and processing immediately
echo "Example 7: Processing while reading"
echo "Enter numbers to sum (press Ctrl+D when done):"
sum=0
count=0
while read -p "Number: " num; do
    if [[ "$num" =~ ^[0-9]+$ ]]; then
        sum=$((sum + num))
        count=$((count + 1))
        echo "Current sum: $sum"
    else
        echo "Invalid number, skipping..."
    fi
done
echo "Final sum: $sum (from $count numbers)"`,u=`#!/bin/bash
# Positional Parameters Examples
# Topic 8: Reading User Input

echo "=== POSITIONAL PARAMETERS EXAMPLES ==="
echo

# Example 1: Basic positional parameters
echo "Example 1: Basic usage"
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Third argument: $3"
echo

# Example 2: Argument count
echo "Example 2: Argument count checking"
echo "Total arguments: $#"
echo "All arguments: $@"
echo

# Example 3: Looping through all arguments
echo "Example 3: Processing all arguments"
echo "Processing $# file(s):"
count=1
for file in "$@"; do
    echo "  $count. $file"
    count=$((count + 1))
done
echo

# Example 4: Using shift
echo "Example 4: Using shift to process arguments"
echo "Original arguments: $@"
echo "Processing first argument: $1"
shift  # Remove first argument
echo "After shift, remaining: $@"
echo "New first argument: $1"
echo

# Example 5: Default values
echo "Example 5: Default values for arguments"
input_file="\${1:-input.txt}"
output_file="\${2:-output.txt}"
echo "Input file: $input_file"
echo "Output file: $output_file"
echo

# Example 6: Argument validation
echo "Example 6: Argument validation"
if [ $# -lt 2 ]; then
    echo "Error: Insufficient arguments"
    echo "Usage: $0 source destination"
    echo "Example: $0 /home/tuhina /backup"
    exit 1
fi

source="$1"
destination="$2"

if [ ! -d "$source" ]; then
    echo "Error: Source directory '$source' not found"
    exit 1
fi

if [ ! -d "$destination" ]; then
    echo "Warning: Destination '$destination' doesn't exist, creating..."
    mkdir -p "$destination"
fi

echo "Backup from $source to $destination"
echo

# Example 7: Processing specific arguments
echo "Example 7: Named argument processing"
while [ $# -gt 0 ]; do
    case "$1" in
        -v|--verbose)
            verbose=1
            shift
            ;;
        -o|--output)
            output="$2"
            shift 2
            ;;
        *)
            # Assume it's a filename
            files+=("$1")
            shift
            ;;
    esac
done

echo "Verbose mode: \${verbose:-0}"
echo "Output file: \${output:-stdout}"
echo "Files to process: \${files[*]}"
echo

# Example 8: All special parameters
echo "Example 8: All special parameters"
echo "\\$0 (script): $0"
echo "\\$# (count): $#"
echo "\\$@ (all): $@"
echo "\\$* (all as one): $*"
echo "\\$$ (PID): $$"
echo "\\$? (exit code): $?"
echo

# Example 9: Practical file processing
echo "Example 9: Practical file processing example"
if [ $# -eq 0 ]; then
    echo "No files specified. Processing all .txt files in current directory..."
    files=(*.txt)
else
    files=("$@")
fi

echo "Processing \${#files[@]} file(s):"
for file in "\${files[@]}"; do
    if [ -f "$file" ]; then
        lines=$(wc -l < "$file")
        words=$(wc -w < "$file")
        echo "  $file: $lines lines, $words words"
    else
        echo "  Warning: $file not found"
    fi
done`,b=`#!/bin/bash
# Complete Practical Example: Student Grade Calculator
# Topic 8: Reading User Input

echo "=== STUDENT GRADE CALCULATOR ==="
echo

# Function to display usage
usage() {
    echo "Usage: $0 [OPTIONS]"
    echo "Calculate student grades and generate reports"
    echo
    echo "Options:"
    echo "  -h, --help          Show this help message"
    echo "  -s, --student NAME  Student name (required)"
    echo "  -m, --math SCORE    Math score (0-100)"
    echo "  -s, --science SCORE Science score (0-100)"
    echo "  -e, --english SCORE English score (0-100)"
    echo "  -i, --interactive   Use interactive mode"
    echo
    echo "Examples:"
    echo "  $0 -s Swadeep -m 85 -s 92 -e 78"
    echo "  $0 --interactive"
    echo "  $0 --help"
}

# Function to calculate grade
calculate_grade() {
    local score=$1
    if [ $score -ge 90 ]; then
        echo "A+"
    elif [ $score -ge 80 ]; then
        echo "A"
    elif [ $score -ge 70 ]; then
        echo "B+"
    elif [ $score -ge 60 ]; then
        echo "B"
    elif [ $score -ge 50 ]; then
        echo "C"
    elif [ $score -ge 40 ]; then
        echo "D"
    else
        echo "F"
    fi
}

# Function to generate report
generate_report() {
    local name="$1"
    local math=$2
    local science=$3
    local english=$4
    
    # Calculate grades
    math_grade=$(calculate_grade $math)
    science_grade=$(calculate_grade $science)
    english_grade=$(calculate_grade $english)
    
    # Calculate average
    average=$(( (math + science + english) / 3 ))
    overall_grade=$(calculate_grade $average)
    
    # Generate report
    echo
    echo "========================================"
    echo "        STUDENT GRADE REPORT"
    echo "========================================"
    echo "Student: $name"
    echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "----------------------------------------"
    echo "SUBJECT       SCORE     GRADE"
    echo "----------------------------------------"
    printf "Mathematics   %3d       %s\\n" $math "$math_grade"
    printf "Science       %3d       %s\\n" $science "$science_grade"
    printf "English       %3d       %s\\n" $english "$english_grade"
    echo "----------------------------------------"
    printf "AVERAGE       %3d       %s\\n" $average "$overall_grade"
    echo "========================================"
    echo
}

# Initialize variables
student_name=""
math_score=""
science_score=""
english_score=""
interactive_mode=0

# Parse command line arguments
while [ $# -gt 0 ]; do
    case "$1" in
        -h|--help)
            usage
            exit 0
            ;;
        -s|--student)
            student_name="$2"
            shift 2
            ;;
        -m|--math)
            math_score="$2"
            shift 2
            ;;
        --science)
            science_score="$2"
            shift 2
            ;;
        -e|--english)
            english_score="$2"
            shift 2
            ;;
        -i|--interactive)
            interactive_mode=1
            shift
            ;;
        *)
            echo "Error: Unknown option '$1'"
            usage
            exit 1
            ;;
    esac
done

# Interactive mode
if [ $interactive_mode -eq 1 ] || [ -z "$student_name" ]; then
    echo "=== INTERACTIVE MODE ==="
    echo
    
    # Get student name
    while [ -z "$student_name" ]; do
        read -p "Enter student name (e.g., Swadeep, Tuhina): " student_name
        if [ -z "$student_name" ]; then
            echo "Error: Student name cannot be empty"
        fi
    done
    
    # Get math score
    while true; do
        read -p "Enter math score (0-100): " math_score
        if [[ "$math_score" =~ ^[0-9]+$ ]] && [ "$math_score" -ge 0 ] && [ "$math_score" -le 100 ]; then
            break
        else
            echo "Error: Please enter a number between 0 and 100"
        fi
    done
    
    # Get science score
    while true; do
        read -p "Enter science score (0-100): " science_score
        if [[ "$science_score" =~ ^[0-9]+$ ]] && [ "$science_score" -ge 0 ] && [ "$science_score" -le 100 ]; then
            break
        else
            echo "Error: Please enter a number between 0 and 100"
        fi
    done
    
    # Get english score
    while true; do
        read -p "Enter english score (0-100): " english_score
        if [[ "$english_score" =~ ^[0-9]+$ ]] && [ "$english_score" -ge 0 ] && [ "$english_score" -le 100 ]; then
            break
        else
            echo "Error: Please enter a number between 0 and 100"
        fi
    done
fi

# Validate all inputs
if [ -z "$student_name" ] || [ -z "$math_score" ] || [ -z "$science_score" ] || [ -z "$english_score" ]; then
    echo "Error: Missing required information"
    echo
    usage
    exit 1
fi

# Generate report
generate_report "$student_name" "$math_score" "$science_score" "$english_score"

# Additional statistics
echo "Additional Statistics:"
echo "----------------------"

# Check if student passed all subjects
passed=0
if [ $math_score -ge 40 ]; then ((passed++)); fi
if [ $science_score -ge 40 ]; then ((passed++)); fi
if [ $english_score -ge 40 ]; then ((passed++)); fi

if [ $passed -eq 3 ]; then
    echo "✓ Passed all subjects"
elif [ $passed -eq 2 ]; then
    echo "⚠ Passed 2 out of 3 subjects"
elif [ $passed -eq 1 ]; then
    echo "⚠ Passed only 1 subject"
else
    echo "✗ Failed all subjects"
fi

# Subject with highest score
if [ $math_score -ge $science_score ] && [ $math_score -ge $english_score ]; then
    echo "✓ Strongest subject: Mathematics"
elif [ $science_score -ge $math_score ] && [ $science_score -ge $english_score ]; then
    echo "✓ Strongest subject: Science"
else
    echo "✓ Strongest subject: English"
fi

# Save to file
report_file="\${student_name// /_}_report_$(date +%Y%m%d).txt"
{
    generate_report "$student_name" "$math_score" "$science_score" "$english_score"
    echo "Additional Statistics:"
    echo "----------------------"
    if [ $passed -eq 3 ]; then
        echo "✓ Passed all subjects"
    elif [ $passed -eq 2 ]; then
        echo "⚠ Passed 2 out of 3 subjects"
    elif [ $passed -eq 1 ]; then
        echo "⚠ Passed only 1 subject"
    else
        echo "✗ Failed all subjects"
    fi
} > "$report_file"

echo
echo "Report saved to: $report_file"`,f=`#!/bin/bash
# Interactive Menu System
# Topic 8: Reading User Input

echo "=== STUDENT MANAGEMENT SYSTEM ==="
echo "Location: Shyamnagar College"
echo

# Function to display menu
show_menu() {
    echo "========================================"
    echo "            MAIN MENU"
    echo "========================================"
    echo "1. Add New Student"
    echo "2. View Student Records"
    echo "3. Calculate Grades"
    echo "4. Search Student"
    echo "5. Backup Data"
    echo "6. Exit"
    echo "========================================"
}

# Function to add student
add_student() {
    echo
    echo "=== ADD NEW STUDENT ==="
    
    # Read student details
    read -p "Enter student ID (e.g., S2024001): " student_id
    read -p "Enter full name: " student_name
    read -p "Enter class: " student_class
    read -p "Enter phone number: " phone
    
    # Validate email
    while true; do
        read -p "Enter email: " email
        if [[ "$email" =~ ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$ ]]; then
            break
        else
            echo "Invalid email format. Please try again."
        fi
    done
    
    # Read marks
    echo "Enter marks (0-100):"
    read -p "  Mathematics: " math
    read -p "  Science: " science
    read -p "  English: " english
    
    # Save to file
    record="$student_id|$student_name|$student_class|$phone|$email|$math|$science|$english"
    echo "$record" >> students.txt
    
    echo
    echo "✓ Student added successfully!"
    echo "Record saved to students.txt"
    
    # Ask if user wants to add another
    read -n 1 -p "Add another student? (y/n): " another
    echo
    if [[ "$another" =~ ^[Yy]$ ]]; then
        add_student
    fi
}

# Function to view records
view_records() {
    echo
    echo "=== STUDENT RECORDS ==="
    
    if [ ! -f "students.txt" ] || [ ! -s "students.txt" ]; then
        echo "No student records found."
        return
    fi
    
    echo "Total records: $(wc -l < students.txt)"
    echo
    
    # Ask for display mode
    echo "Display options:"
    echo "1. View all records"
    echo "2. View with pagination (10 per page)"
    echo "3. Search and view specific"
    read -n 1 -p "Choose option (1-3): " view_option
    echo
    
    case $view_option in
        1)
            # View all
            echo "=================================================================================================="
            printf "%-10s %-20s %-10s %-15s %-25s %-5s %-5s %-5s\\n" \\
                   "ID" "Name" "Class" "Phone" "Email" "M" "S" "E"
            echo "=================================================================================================="
            while IFS='|' read -r id name class phone email math science english; do
                printf "%-10s %-20s %-10s %-15s %-25s %-5s %-5s %-5s\\n" \\
                       "$id" "$name" "$class" "$phone" "$email" "$math" "$science" "$english"
            done < students.txt
            ;;
        2)
            # Paginated view
            page=1
            lines_per_page=10
            total_lines=$(wc -l < students.txt)
            total_pages=$(( (total_lines + lines_per_page - 1) / lines_per_page ))
            
            while true; do
                echo "=== Page $page of $total_pages ==="
                echo "=================================================================================================="
                printf "%-10s %-20s %-10s %-15s %-25s %-5s %-5s %-5s\\n" \\
                       "ID" "Name" "Class" "Phone" "Email" "M" "S" "E"
                echo "=================================================================================================="
                
                # Calculate which lines to show
                start_line=$(( (page - 1) * lines_per_page + 1 ))
                end_line=$(( page * lines_per_page ))
                
                # Display the page
                sed -n "\${start_line},\${end_line}p" students.txt | \\
                while IFS='|' read -r id name class phone email math science english; do
                    printf "%-10s %-20s %-10s %-15s %-25s %-5s %-5s %-5s\\n" \\
                           "$id" "$name" "$class" "$phone" "$email" "$math" "$science" "$english"
                done
                
                echo
                echo "Navigation: n=next, p=previous, q=quit"
                read -n 1 -p "Command: " nav_cmd
                echo
                
                case $nav_cmd in
                    n|N)
                        if [ $page -lt $total_pages ]; then
                            ((page++))
                        else
                            echo "Already on last page"
                        fi
                        ;;
                    p|P)
                        if [ $page -gt 1 ]; then
                            ((page--))
                        else
                            echo "Already on first page"
                        fi
                        ;;
                    q|Q)
                        break
                        ;;
                    *)
                        echo "Invalid command"
                        ;;
                esac
            done
            ;;
        3)
            # Search view
            read -p "Enter search term (name or ID): " search_term
            echo
            echo "Search results for '$search_term':"
            echo "=================================================================================================="
            grep -i "$search_term" students.txt | \\
            while IFS='|' read -r id name class phone email math science english; do
                printf "%-10s %-20s %-10s %-15s %-25s %-5s %-5s %-5s\\n" \\
                       "$id" "$name" "$class" "$phone" "$email" "$math" "$science" "$english"
            done
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
}

# Function to calculate statistics
calculate_stats() {
    echo
    echo "=== GRADE STATISTICS ==="
    
    if [ ! -f "students.txt" ]; then
        echo "No data available"
        return
    fi
    
    # Initialize counters
    total_students=0
    math_sum=0
    science_sum=0
    english_sum=0
    pass_count=0
    
    # Process each student
    while IFS='|' read -r id name class phone email math science english; do
        ((total_students++))
        math_sum=$((math_sum + math))
        science_sum=$((science_sum + science))
        english_sum=$((english_sum + english))
        
        # Check if passed all subjects (40+)
        if [ $math -ge 40 ] && [ $science -ge 40 ] && [ $english -ge 40 ]; then
            ((pass_count++))
        fi
    done < students.txt
    
    if [ $total_students -eq 0 ]; then
        echo "No students in database"
        return
    fi
    
    # Calculate averages
    math_avg=$((math_sum / total_students))
    science_avg=$((science_sum / total_students))
    english_avg=$((english_sum / total_students))
    pass_percentage=$((pass_count * 100 / total_students))
    
    # Display statistics
    echo "Total Students: $total_students"
    echo "Average Scores:"
    echo "  Mathematics: $math_avg"
    echo "  Science: $science_avg"
    echo "  English: $english_avg"
    echo
    echo "Pass Rate: $pass_count/$total_students ($pass_percentage%)"
    echo
    
    # Find top student
    echo "=== TOP PERFORMERS ==="
    echo "Finding student with highest average..."
    
    highest_avg=0
    top_student=""
    
    while IFS='|' read -r id name class phone email math science english; do
        avg=$(( (math + science + english) / 3 ))
        if [ $avg -gt $highest_avg ]; then
            highest_avg=$avg
            top_student="$name (ID: $id)"
        fi
    done < students.txt
    
    echo "Top Student: $top_student"
    echo "Average Score: $highest_avg"
}

# Function to search student
search_student() {
    echo
    echo "=== SEARCH STUDENT ==="
    
    read -p "Enter search term (name, ID, or class): " search_term
    
    # Search in file
    results=$(grep -i "$search_term" students.txt 2>/dev/null)
    
    if [ -z "$results" ]; then
        echo "No students found matching '$search_term'"
        return
    fi
    
    echo
    echo "Found $(echo "$results" | wc -l) student(s):"
    echo "=================================================================================================="
    
    echo "$results" | while IFS='|' read -r id name class phone email math science english; do
        avg=$(( (math + science + english) / 3 ))
        grade=""
        if [ $avg -ge 80 ]; then
            grade="A"
        elif [ $avg -ge 60 ]; then
            grade="B"
        elif [ $avg -ge 40 ]; then
            grade="C"
        else
            grade="F"
        fi
        
        printf "%-10s %-20s %-10s %-15s %-25s AVG: %-3d GRADE: %s\\n" \\
               "$id" "$name" "$class" "$phone" "$email" "$avg" "$grade"
    done
}

# Function to backup data
backup_data() {
    echo
    echo "=== DATA BACKUP ==="
    
    timestamp=$(date +%Y%m%d_%H%M%S)
    backup_dir="backups"
    
    # Create backup directory if it doesn't exist
    if [ ! -d "$backup_dir" ]; then
        mkdir -p "$backup_dir"
    fi
    
    # Create backup
    backup_file="$backup_dir/students_backup_$timestamp.txt"
    cp students.txt "$backup_file"
    
    if [ $? -eq 0 ]; then
        echo "✓ Backup created successfully: $backup_file"
        echo "Backup size: $(wc -l < "$backup_file") records"
        
        # List recent backups
        echo
        echo "Recent backups:"
        ls -lt "$backup_dir"/*.txt 2>/dev/null | head -5
    else
        echo "✗ Backup failed!"
    fi
}

# Main program loop
while true; do
    show_menu
    echo
    read -n 1 -p "Enter your choice (1-6): " choice
    echo
    echo
    
    case $choice in
        1)
            add_student
            ;;
        2)
            view_records
            ;;
        3)
            calculate_stats
            ;;
        4)
            search_student
            ;;
        5)
            backup_data
            ;;
        6)
            echo "Exiting Student Management System..."
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please enter a number between 1 and 6."
            ;;
    esac
    
    # Pause before showing menu again
    echo
    read -n 1 -p "Press any key to continue to main menu..."
    echo
    echo
done`;function y(){const[a,o]=r.useState("overview"),[i,m]=r.useState(""),[d,h]=r.useState(["","",""]);r.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("animate-[slideUp_0.6s_ease-out_forwards]")})},{threshold:.1});return document.querySelectorAll(".section-reveal").forEach(n=>s.observe(n)),()=>s.disconnect()},[]);const l=s=>{h(s)};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-6 transition-colors duration-300",children:[e.jsx("style",{children:`
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
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 5px #3b82f6; }
            50% { box-shadow: 0 0 20px #3b82f6; }
          }
        `}),e.jsx("header",{className:"section-reveal max-w-6xl mx-auto mb-12 opacity-0",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex flex-col lg:flex-row items-start justify-between gap-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-semibold mb-4 animate-pulse",children:"Topic 8"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",children:"Reading User Input & Positional Parameters"}),e.jsxs("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed",children:["Learn how to make your shell scripts interactive by reading user input and accepting command-line arguments using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"read"})," command and positional parameters ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"$1, $2, $@, $#"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 animate-pulse"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Interactive Scripts"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-500 animate-pulse"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Command-line Arguments"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-500 animate-pulse"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"User Feedback"})]})]})]}),e.jsxs("div",{className:"w-full lg:w-2/5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-300",children:"💻 Live Demo"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",children:"Enter command (simulated):"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-shrink-0 text-green-600 dark:text-green-400 font-mono",children:"$"}),e.jsxs("div",{className:"flex-1 font-mono bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-lg",children:["./student_grades.sh",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:" Swadeep"}),e.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:" 85"}),e.jsx("span",{className:"text-green-600 dark:text-green-400",children:" 92"}),e.jsx("span",{className:"text-purple-600 dark:text-purple-400",children:" 78"})]})]})]}),e.jsxs("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"text-green-400",children:"Processing arguments:"}),e.jsxs("div",{className:"mt-2 space-y-1",children:[e.jsxs("div",{children:["$0: ",e.jsx("span",{className:"text-yellow-300",children:"./student_grades.sh"})]}),e.jsxs("div",{children:["$1: ",e.jsx("span",{className:"text-indigo-300",children:"Swadeep"})," (Student Name)"]}),e.jsxs("div",{children:["$2: ",e.jsx("span",{className:"text-blue-300",children:"85"})," (Math Score)"]}),e.jsxs("div",{children:["$3: ",e.jsx("span",{className:"text-green-300",children:"92"})," (Science Score)"]}),e.jsxs("div",{children:["$4: ",e.jsx("span",{className:"text-purple-300",children:"78"})," (English Score)"]}),e.jsxs("div",{className:"mt-2",children:["Total arguments ($#): ",e.jsx("span",{className:"text-yellow-300",children:"4"})]})]})]})]})]})]})})}),e.jsx("nav",{className:"section-reveal max-w-6xl mx-auto mb-8 opacity-0",children:e.jsx("div",{className:"flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl",children:["overview","read-command","positional","practical","pitfalls","best-practices"].map(s=>e.jsx("button",{onClick:()=>o(s),className:x("px-4 py-2 rounded-lg font-medium transition-all duration-300",a===s?"bg-white dark:bg-gray-700 shadow-md text-indigo-600 dark:text-indigo-400":"hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"),children:s.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")},s))})}),e.jsxs("main",{className:"max-w-6xl mx-auto",children:[a==="overview"&&e.jsxs("div",{className:"space-y-8",children:[e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg",children:"🎯"}),"Two Ways to Get Input in Shell Scripts"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 hover:scale-[1.02] transition-transform duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 text-xl",children:"⌨️"})}),e.jsx("h3",{className:"text-2xl font-bold text-blue-700 dark:text-blue-300",children:"Interactive Input"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Using the ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded",children:"read"})," command to prompt users for input while the script is running."]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Best for:"})," Forms, surveys, configuration setup"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Example:"})," Asking ",e.jsx("span",{className:"font-semibold",children:"Tuhina"})," for her marks"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Command:"})," ",e.jsx("code",{children:'read -p "Enter name: " username'})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 hover:scale-[1.02] transition-transform duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 text-xl",children:"⚡"})}),e.jsx("h3",{className:"text-2xl font-bold text-purple-700 dark:text-purple-300",children:"Positional Parameters"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Using command-line arguments passed when executing the script: ",e.jsx("code",{children:"$1, $2, $3, ..."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Best for:"})," Automation, batch processing, cron jobs"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Example:"})," Processing files from ",e.jsx("span",{className:"font-semibold",children:"Naihati"})," server"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Usage:"})," ",e.jsx("code",{children:"./script.sh file1.txt file2.txt"})]})]})]})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center",children:"When to Use Which Method?"}),e.jsx("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-2xl p-8",children:e.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full h-64",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#8b5cf6"})})}),e.jsx("rect",{x:"350",y:"50",width:"100",height:"60",rx:"10",fill:"#4f46e5",className:"hover:fill-opacity-80 transition-all duration-300"}),e.jsx("text",{x:"400",y:"85",textAnchor:"middle",className:"fill-white font-bold text-xl",children:"Start"}),e.jsx("rect",{x:"250",y:"150",width:"300",height:"60",rx:"10",fill:"#7c3aed",className:"hover:fill-opacity-80 transition-all duration-300"}),e.jsx("text",{x:"400",y:"185",textAnchor:"middle",className:"fill-white font-semibold",children:"Need user interaction during execution?"}),e.jsx("path",{d:"M 400 210 L 400 250 L 200 250 L 200 300",fill:"none",stroke:"#10b981",strokeWidth:"3","marker-end":"url(#arrow)"}),e.jsx("path",{d:"M 400 210 L 400 250 L 600 250 L 600 300",fill:"none",stroke:"#ef4444",strokeWidth:"3","marker-end":"url(#arrow)"}),e.jsx("rect",{x:"100",y:"300",width:"200",height:"60",rx:"10",fill:"#10b981",className:"hover:fill-opacity-80 transition-all duration-300"}),e.jsx("text",{x:"200",y:"335",textAnchor:"middle",className:"fill-white font-semibold",children:"Use READ Command"}),e.jsx("rect",{x:"500",y:"300",width:"200",height:"60",rx:"10",fill:"#ef4444",className:"hover:fill-opacity-80 transition-all duration-300"}),e.jsx("text",{x:"600",y:"335",textAnchor:"middle",className:"fill-white font-semibold",children:"Use Positional Parameters"}),e.jsx("text",{x:"300",y:"240",textAnchor:"middle",className:"fill-green-400 font-bold",children:"YES"}),e.jsx("text",{x:"500",y:"240",textAnchor:"middle",className:"fill-red-400 font-bold",children:"NO"})]})})]})]})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-200",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-amber-100 dark:bg-amber-900 rounded-lg",children:"🔑"}),"Key Concepts to Remember"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{icon:"💾",title:"Variable Storage",desc:"Both methods store input in variables for later use",example:"read stores in named variables, $1 stores first argument"},{icon:"🔄",title:"Flexibility",desc:"Can combine both methods in same script",example:"Use $1 for filename, read for user confirmation"},{icon:"⚡",title:"Script Execution",desc:"Positional parameters must be provided at script start",example:"./backup.sh /home/tuhina /backup"},{icon:"👤",title:"User Experience",desc:"read provides interactive feedback",example:"Prompts and validation messages"},{icon:"🔧",title:"Automation",desc:"Positional parameters enable script automation",example:"Cron jobs with predefined arguments"},{icon:"🛡️",title:"Validation",desc:"Both need input validation",example:"Check if $1 exists, validate read input"}].map((s,n)=>e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 rounded-xl border border-amber-300 dark:border-amber-700 hover:border-amber-500 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-2xl",children:s.icon}),e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200",children:s.title})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:s.desc}),e.jsx("code",{className:"text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-2 py-1 rounded block",children:s.example})]},n))})]})})]}),a==="read-command"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-blue-100 dark:bg-blue-900 rounded-lg",children:"⌨️"}),"The READ Command"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300",children:"Basic Syntax & Prototype"}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl mb-6",children:[e.jsx("code",{className:"text-xl text-gray-700 dark:text-gray-300 font-mono block mb-4",children:"read [options] variable_name"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Reads a line from standard input (keyboard) and stores it in the specified variable."})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300",children:"Common Options"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[{option:"-p 'prompt'",desc:"Display prompt before reading",example:"read -p 'Name: ' name"},{option:"-s",desc:"Silent mode (for passwords)",example:"read -sp 'Password: ' pass"},{option:"-n N",desc:"Read exactly N characters",example:"read -n 1 choice"},{option:"-t SEC",desc:"Timeout after SEC seconds",example:"read -t 10 -p 'Quick! '"},{option:"-a array",desc:"Read into array",example:"read -a numbers"},{option:"-r",desc:"Raw input (preserve backslashes)",example:"read -r path"}].map((s,n)=>e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300",children:[e.jsx("code",{className:"font-mono text-blue-700 dark:text-blue-300 text-lg block mb-2",children:s.option}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-sm mb-3",children:s.desc}),e.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block",children:s.example})]},n))})]}),e.jsx("div",{className:"mb-8",children:e.jsx(t,{fileModule:p,title:"Basic READ Command Examples",highlightLines:[4,8,12,16,20,24]})}),e.jsx("div",{children:e.jsx(t,{fileModule:g,title:"Advanced READ Options",highlightLines:[5,11,17,23,29,35]})}),e.jsxs("div",{className:"mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300",children:"🎮 Interactive Demo"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",children:"Try the -n option (simulated): Enter 1 character"}),e.jsx("input",{type:"text",maxLength:1,value:i,onChange:s=>m(s.target.value.slice(0,1)),className:"w-16 text-center font-mono text-xl border-2 border-blue-300 rounded-lg p-2 bg-white dark:bg-gray-900",placeholder:"X"}),e.jsxs("div",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Characters entered: ",i.length,"/1"]})]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg",children:e.jsxs("div",{className:"font-mono text-sm",children:[e.jsx("div",{className:"text-green-600 dark:text-green-400",children:"# Simulated read command:"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:"text-blue-500",children:'read -n 1 -p "Continue? (y/n): "'})," choice"]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:"text-purple-500",children:"echo"}),' "You chose: ',e.jsx("span",{className:"text-yellow-600 dark:text-yellow-400",children:i||"[waiting...]"}),'"']})]})})]})]})]})})}),a==="positional"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-purple-100 dark:bg-purple-900 rounded-lg",children:"⚡"}),"Positional Parameters"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300",children:"Special Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300 dark:divide-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-purple-50 dark:bg-purple-900/30",children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider",children:"Parameter"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider",children:"Description"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider",children:"Example"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-800",children:[{param:"$0",desc:"Script name/path",example:"./backup.sh"},{param:"$1, $2, $3...",desc:"First, second, third arguments",example:"file1.txt, file2.txt"},{param:"$#",desc:"Number of arguments",example:"3 (if 3 args passed)"},{param:"$@",desc:"All arguments as separate words",example:"arg1 arg2 arg3"},{param:"$*",desc:"All arguments as single word",example:"arg1 arg2 arg3"},{param:"$?",desc:"Exit status of last command",example:"0 (success)"},{param:"$$",desc:"Process ID of script",example:"12345"},{param:"$!",desc:"Process ID of last background job",example:"12346"}].map((s,n)=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("code",{className:"font-mono text-lg text-purple-600 dark:text-purple-400",children:s.param})}),e.jsx("td",{className:"px-6 py-4 text-gray-700 dark:text-gray-300",children:s.desc}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded",children:s.example})})]},n))})]})})]}),e.jsxs("div",{className:"mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300",children:"📊 Visual Representation"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"inline-block bg-gray-900 p-4 rounded-xl",children:[e.jsx("div",{className:"text-green-400 font-mono text-sm mb-2",children:"Command:"}),e.jsxs("div",{className:"font-mono text-lg",children:[e.jsx("span",{className:"text-yellow-300",children:"./process_data.sh"}),e.jsx("span",{className:"text-blue-300",children:" student_records.csv"}),e.jsx("span",{className:"text-green-300",children:" 2024-12-15"}),e.jsx("span",{className:"text-purple-300",children:" verbose"})]})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[{param:"$0",value:"./process_data.sh",color:"text-yellow-300"},{param:"$1",value:"student_records.csv",color:"text-blue-300"},{param:"$2",value:"2024-12-15",color:"text-green-300"},{param:"$3",value:"verbose",color:"text-purple-300"}].map((s,n)=>e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300",children:[e.jsx("div",{className:"text-gray-400 text-sm mb-1",children:s.param}),e.jsx("div",{className:`font-mono ${s.color} text-lg`,children:s.value})]},n))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"$# (Argument Count):"}),e.jsx("div",{className:"text-yellow-300 text-2xl font-bold",children:"3"})]}),e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"$@ (All Arguments):"}),e.jsx("div",{className:"text-green-300 font-mono text-sm",children:"student_records.csv 2024-12-15 verbose"})]})]})]})]}),e.jsx("div",{children:e.jsx(t,{fileModule:u,title:"Positional Parameters Examples",highlightLines:[5,10,15,21,27,34,40]})})]})})}),a==="practical"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-green-100 dark:bg-green-900 rounded-lg",children:"🚀"}),"Practical Applications"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-green-700 dark:text-green-300",children:"🏫 Student Management System"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("span",{className:"font-semibold",children:"Shyamnagar College"})," uses scripts to manage student data:"]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:e.jsx("code",{children:"./add_student.sh Swadeep Kumar 85 92"})})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Interactive grade entry for ",e.jsx("span",{className:"font-semibold",children:"Abhronila"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),e.jsx("span",{children:"Batch processing of Ichapur branch records"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300",children:"🖥️ System Administration"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("span",{className:"font-semibold",children:"Naihati Server"})," automation scripts:"]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"✓"}),e.jsx("span",{children:e.jsx("code",{children:"./backup.sh /home /backup weekly"})})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"✓"}),e.jsx("span",{children:"Interactive log file analysis"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"✓"}),e.jsx("span",{children:"User account creation with confirmation prompts"})]})]})]})]}),e.jsx("div",{className:"mb-8",children:e.jsx(t,{fileModule:b,title:"Complete Practical Example: Student Grade Calculator",highlightLines:[7,14,21,28,35,42,50]})}),e.jsx("div",{children:e.jsx(t,{fileModule:f,title:"Interactive Menu System",highlightLines:[5,11,17,24,31,38,46,54]})}),e.jsxs("div",{className:"mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-amber-800 dark:text-amber-300",children:"🎯 Try It Yourself"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Imagine you're creating a script for ",e.jsx("span",{className:"font-semibold",children:"Debangshu"})," to manage his photography files from Barrackpore:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("button",{onClick:()=>l(["IMG_001.jpg","IMG_002.jpg","resized/"]),className:"p-4 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300",children:[e.jsx("div",{className:"font-mono text-sm mb-2",children:"Batch Resize:"}),e.jsx("div",{children:"./resize.sh file1 file2 output/"})]}),e.jsxs("button",{onClick:()=>l(["2024-12-","Barrackpore","jpg"]),className:"p-4 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300",children:[e.jsx("div",{className:"font-mono text-sm mb-2",children:"Search Photos:"}),e.jsx("div",{children:'./search.sh "2024-12-" "Barrackpore"'})]}),e.jsxs("button",{onClick:()=>l(["backup","photos/","/external/"]),className:"p-4 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300",children:[e.jsx("div",{className:"font-mono text-sm mb-2",children:"Backup Script:"}),e.jsx("div",{children:"./backup.sh mode source dest"})]})]}),d.some(s=>s)&&e.jsxs("div",{className:"mt-4 p-4 bg-gray-800 rounded-lg",children:[e.jsx("div",{className:"text-green-400 text-sm mb-2",children:"Arguments would be:"}),e.jsx("div",{className:"font-mono",children:d.map((s,n)=>e.jsxs("div",{className:"ml-4",children:["$",`${n+1}`,": ",e.jsx("span",{className:"text-yellow-300",children:s||"(empty)"})]},n))})]})]})]})]})})}),a==="pitfalls"&&e.jsx("div",{className:"space-y-8",children:e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-2xl p-8 shadow-lg border border-rose-200 dark:border-rose-800",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-rose-800 dark:text-rose-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-rose-100 dark:bg-rose-900 rounded-lg",children:"⚠️"}),"Common Pitfalls & Mistakes"]}),e.jsx("div",{className:"space-y-6",children:[{title:"Not Checking Argument Count",description:"Using $1 without checking if arguments were provided",example:'echo "File: $1"  # Empty if no args',fix:'Check $# first: [ $# -eq 0 ] && echo "Usage..."',impact:"Script crashes or produces incorrect output"},{title:"Forgetting to Quote Variables",description:"Arguments with spaces get split incorrectly",example:"cp $1 $2  # Fails if $1 has spaces",fix:'Always quote: cp "$1" "$2"',impact:"File operations fail, data loss possible"},{title:"Read Without -r for Paths",description:"Backslashes in paths get interpreted",example:"read path; ls $path  #  gets removed",fix:"Use read -r for raw input",impact:"File paths don't work correctly"},{title:"Assuming $* and $@ are Same",description:"They behave differently in loops",example:'for arg in $* vs for arg in "$@"',fix:'Use "$@" for separate arguments',impact:"Word splitting issues in loops"},{title:"No Input Validation for Read",description:"Accepting empty or invalid input",example:'read name; echo "Hello $name"',fix:"while [[ -z $name ]]; do read -p...",impact:"Empty variables cause errors"},{title:"Confusing $0 with Script Name",description:"$0 includes path when script is sourced",example:"./scripts/tool.sh vs . scripts/tool.sh",fix:'Use basename "$0" for just name',impact:"Log messages show full paths"}].map((s,n)=>e.jsx("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-rose-300 dark:border-rose-700 hover:border-rose-500 transition-colors duration-300",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-rose-600 dark:text-rose-400 font-bold",children:n+1})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-rose-700 dark:text-rose-300",children:s.title}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:s.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-semibold text-rose-600 dark:text-rose-400",children:"Example:"}),e.jsx("code",{className:"block mt-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:s.example})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:"Fix:"}),e.jsx("code",{className:"block mt-1 font-mono text-sm bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded",children:s.fix})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-semibold text-amber-600 dark:text-amber-400",children:"Impact:"}),e.jsx("div",{className:"mt-1 text-sm text-gray-700 dark:text-gray-300 p-2 bg-amber-50 dark:bg-amber-900/20 rounded",children:s.impact})]})]})]})]})},n))})]})})}),a==="best-practices"&&e.jsxs("div",{className:"space-y-8",children:[e.jsx("section",{className:"section-reveal opacity-0",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-800 dark:text-emerald-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg",children:"✅"}),"Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"🛡️ Defensive Scripting"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Always validate input: ",e.jsx("code",{children:'[ -z "$1" ] && exit 1'})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Use default values: ",e.jsxs("code",{children:["$","${1:-default}"]})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Check file existence before processing"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"📝 Read Command Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"-p"})," for clear prompts"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:[e.jsx("code",{children:"-t"})," for timeout in automated scripts"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:[e.jsx("code",{children:"-s"})," for passwords/sensitive data"]})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"⚡ Positional Parameter Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Shift arguments after processing: ",e.jsx("code",{children:"shift"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsxs("span",{children:["Use ",e.jsxs("code",{children:["$","${@:2}"]})," for all args except first"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Store in named variables for readability"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300",children:"📚 Readability & Maintenance"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Add usage/help function"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Comment complex argument parsing"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"✓"}),e.jsx("span",{children:"Use getopts for complex options"})]})]})]})]})]}),e.jsxs("div",{className:"mt-8 bg-white dark:bg-gray-900 p-6 rounded-xl border border-blue-300 dark:border-blue-700",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300",children:"🧠 What to Remember"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:["Check $# before using $1",'Quote all variables: "$1"',"Use read -r for paths","read -p for prompts","read -s for passwords","Shift processed args","Default values: ${1:-default}",'Use "$@" in loops',"Validate all user input"].map((s,n)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 text-sm",children:n+1})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:s})]},n))})]})]})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-300",children:e.jsx("div",{className:"bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-indigo-100 leading-relaxed",children:[e.jsx("strong",{children:"Input handling separates amateur scripts from professional ones."})," When",e.jsx("span",{className:"font-semibold",children:" Tuhina"})," or ",e.jsx("span",{className:"font-semibold",children:"Swadeep"}),"write scripts, I emphasize the ",e.jsx("span",{className:"text-yellow-300",children:"importance of validation"})," - never trust user input or command-line arguments blindly."]}),e.jsxs("p",{className:"text-indigo-100 leading-relaxed",children:[e.jsx("strong",{children:"Professional Tip:"})," Always write a ",e.jsx("code",{className:"bg-indigo-800 px-2 py-1 rounded",children:"usage()"})," function that explains how to use your script. This helps users (and your future self) understand the expected arguments."]}),e.jsxs("p",{className:"text-indigo-100 leading-relaxed",children:[e.jsx("strong",{children:"Remember:"})," The ",e.jsx("code",{className:"bg-indigo-800 px-2 py-1 rounded",children:"shift"})," command is your friend when processing multiple arguments. It lets you handle arguments in a loop without complex indexing."]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-indigo-700",children:e.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-indigo-300",children:"Teacher:"}),e.jsx("span",{className:"ml-2 text-white font-semibold",children:"Sukanta Hui"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-indigo-300",children:"Experience:"}),e.jsx("span",{className:"ml-2 text-white",children:"27 years"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-indigo-300",children:"Contact:"}),e.jsx("span",{className:"ml-2 text-white",children:"sukantahui@codernaccotax.co.in"})]})]})})]})]})]})})}),e.jsx("section",{className:"section-reveal opacity-0 animation-delay-600",children:e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl p-8 border border-amber-300 dark:border-amber-700",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-amber-100 dark:bg-amber-900 rounded-lg",children:"💡"}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens when you pass arguments with special characters like ",e.jsx("code",{children:"*"})," or ",e.jsx("code",{children:"?"})," to your script? How does the shell interpret them before they reach ",e.jsx("code",{children:"$1"}),"?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Try changing:"})," The timeout value in ",e.jsx("code",{children:"read -t 5"})," to see how it affects user experience. What's a reasonable timeout for different types of scripts?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Consider:"})," How would you design a script that accepts ",e.jsx("span",{className:"font-semibold",children:"both"}),"command-line arguments ",e.jsx("span",{className:"font-semibold",children:"and"})," interactive input? When would each method be appropriate in the same script?"]})]})]})})]}),e.jsx("footer",{className:"section-reveal max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 opacity-0",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-6",children:[e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Topic 8: Reading User Input • Shell Scripting Mastery"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>o("overview"),className:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:"Review Concepts"}),e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300",children:"Back to Top ↑"})]})]})})]})]})}export{y as default};

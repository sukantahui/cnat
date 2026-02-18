import{r as o,j as e}from"./index-BFnLuail.js";import{c as r}from"./clsx-B-dksMZM.js";import{S as n}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const p=`#!/bin/bash
# Simple grade management system for Barrackpore school
echo "=== Barrackpore School Grade Management ==="
echo "1. Add student grade"
echo "2. View class average"
echo "3. Generate report"
echo "4. Exit"
read -p "Enter your choice (1-4): " choice

case "$choice" in
    "1")
        echo "Adding new student grade..."
        read -p "Enter student name: " student
        read -p "Enter grade (0-100): " grade
        echo "$student: $grade" >> grades.txt
        echo "Grade added successfully!"
        ;;
    "2")
        echo "Calculating class average..."
        if [ -f grades.txt ] && [ -s grades.txt ]; then
            total=0
            count=0
            while IFS=: read -r name score; do
                total=$((total + score))
                count=$((count + 1))
            done < grades.txt
            average=$((total / count))
            echo "Class average: $average"
        else
            echo "No grades found. Add grades first."
        fi
        ;;
    "3")
        echo "Generating report..."
        if [ -f grades.txt ]; then
            echo "=== Grade Report ===" > report.txt
            date >> report.txt
            echo "=================" >> report.txt
            cat grades.txt >> report.txt
            echo "Report saved to report.txt"
        else
            echo "No grades available for report."
        fi
        ;;
    "4")
        echo "Exiting grade management system."
        exit 0
        ;;
    *)
        echo "Error: Invalid choice. Please enter 1-4."
        exit 1
        ;;
esac
`,u=`#!/bin/bash
# Complete CLI tool for Ichapur server management
VERSION="1.2.0"
SERVER_CONFIG="/etc/ichapur/servers.conf"

show_help() {
    echo "Ichapur Server Management Tool v$VERSION"
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start     Start all servers"
    echo "  stop      Stop all servers"
    echo "  restart   Restart all servers"
    echo "  status    Check server status"
    echo "  backup    Create server backup"
    echo "  logs      View server logs"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -v, --version  Show version information"
    echo "  -f FILE        Use alternate config file"
}

show_status() {
    echo "=== Server Status ==="
    if [ -f "$SERVER_CONFIG" ]; then
        while IFS= read -r server; do
            [[ -z "$server" || "$server" =~ ^# ]] && continue
            if ping -c 1 -W 2 "$server" > /dev/null 2>&1; then
                echo "✓ $server: ONLINE"
            else
                echo "✗ $server: OFFLINE"
            fi
        done < "$SERVER_CONFIG"
    else
        echo "Config file not found: $SERVER_CONFIG"
    fi
}

# Parse command line arguments
case "$1" in
    start)
        echo "Starting Ichapur servers..."
        # Start server logic here
        ;;
    stop)
        echo "Stopping Ichapur servers..."
        # Stop server logic here
        ;;
    restart)
        echo "Restarting Ichapur servers..."
        # Restart logic here
        ;;
    status)
        show_status
        ;;
    backup)
        echo "Creating server backup..."
        timestamp=$(date +%Y%m%d_%H%M%S)
        backup_dir="/backups/ichapur_$timestamp"
        mkdir -p "$backup_dir"
        # Backup logic here
        echo "Backup created: $backup_dir"
        ;;
    logs)
        echo "Viewing server logs..."
        tail -f /var/log/ichapur/*.log
        ;;
    -h|--help)
        show_help
        ;;
    -v|--version)
        echo "Ichapur Server Management Tool v$VERSION"
        ;;
    *)
        echo "Error: Unknown command '$1'"
        echo "Use '$0 --help' for usage information."
        exit 1
        ;;
esac`,b=`#!/bin/bash
# File type handler for Shyamnagar data center
process_file() {
    local file="$1"
    
    case "$file" in
        *.csv)
            echo "Processing CSV file: $file"
            # Validate CSV format
            if head -1 "$file" | grep -q ","; then
                record_count=$(wc -l < "$file")
                echo "  Records: $((record_count - 1))"  # Subtract header
            else
                echo "  Warning: May not be valid CSV"
            fi
            ;;
        *.json)
            echo "Processing JSON file: $file"
            # Validate JSON
            if python3 -m json.tool "$file" > /dev/null 2>&1; then
                echo "  Valid JSON format"
            else
                echo "  Error: Invalid JSON"
            fi
            ;;
        *.log)
            echo "Processing log file: $file"
            # Count error lines
            error_count=$(grep -c -i "error\\|fail\\|critical" "$file")
            warning_count=$(grep -c -i "warning" "$file")
            echo "  Errors: $error_count, Warnings: $warning_count"
            ;;
        *.sql)
            echo "Processing SQL file: $file"
            # Check for dangerous operations
            if grep -q -i "drop table\\|delete from" "$file"; then
                echo "  WARNING: Contains dangerous operations!"
            fi
            ;;
        *.sh)
            echo "Processing shell script: $file"
            # Check syntax
            if bash -n "$file"; then
                echo "  Syntax: OK"
            else
                echo "  Syntax: ERROR"
            fi
            ;;
        *.gz|*.bz2|*.xz)
            echo "Processing compressed file: $file"
            # Check if we can decompress
            if [[ "$file" == *.gz ]]; then
                if gzip -t "$file"; then
                    echo "  Compression: Valid gzip"
                else
                    echo "  Compression: Corrupted"
                fi
            fi
            ;;
        *)
            echo "Unknown file type: $file"
            echo "  Skipping processing..."
            ;;
    esac
}

# Main execution
for file in "$@"; do
    if [ -f "$file" ]; then
        process_file "$file"
        echo "---"
    else
        echo "File not found: $file"
    fi
done`,f=`#!/bin/bash
# Nested case statements for multi-level menu
main_menu() {
    echo "=== Naihati Database Management ==="
    echo "1. User Management"
    echo "2. Database Operations"
    echo "3. Backup & Recovery"
    echo "4. Exit"
    read -p "Select main category: " main_choice
    
    case "$main_choice" in
        1)
            echo "=== User Management ==="
            echo "1. Add user"
            echo "2. Delete user"
            echo "3. List users"
            echo "4. Back to main"
            read -p "Select option: " user_choice
            
            case "$user_choice" in
                1)
                    read -p "Enter username: " username
                    echo "Adding user: $username"
                    # Add user logic
                    ;;
                2)
                    read -p "Enter username to delete: " username
                    echo "Deleting user: $username"
                    # Delete user logic
                    ;;
                3)
                    echo "Listing all users..."
                    # List users logic
                    ;;
                4)
                    main_menu
                    ;;
                *)
                    echo "Invalid user management option"
                    ;;
            esac
            ;;
        2)
            echo "=== Database Operations ==="
            echo "1. Create database"
            echo "2. Drop database"
            echo "3. List databases"
            read -p "Select option: " db_choice
            
            case "$db_choice" in
                1)
                    read -p "Enter database name: " dbname
                    echo "Creating database: $dbname"
                    ;;
                2)
                    read -p "Enter database name to drop: " dbname
                    echo "Dropping database: $dbname"
                    ;;
                3)
                    echo "Listing databases..."
                    ;;
                *)
                    echo "Invalid database option"
                    ;;
            esac
            ;;
        3)
            echo "=== Backup & Recovery ==="
            echo "1. Create backup"
            echo "2. Restore from backup"
            echo "3. Schedule backup"
            read -p "Select option: " backup_choice
            # Backup case logic would go here
            ;;
        4)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid main menu option"
            main_menu
            ;;
    esac
}

# Start the menu system
main_menu`,y=`#!/bin/bash
# Comprehensive error handling with case statements
handle_error() {
    local error_code="$1"
    local context="$2"
    
    case "$error_code" in
        0)
            echo "Success: $context completed successfully."
            ;;
        1)
            echo "Error: General error in $context."
            ;;
        2)
            echo "Error: Misuse of shell builtins in $context."
            ;;
        126)
            echo "Error: Command invoked cannot execute in $context."
            ;;
        127)
            echo "Error: Command not found in $context."
            ;;
        128)
            echo "Error: Invalid argument to exit in $context."
            ;;
        130)
            echo "Error: Script terminated by Control-C in $context."
            ;;
        255)
            echo "Error: Exit status out of range in $context."
            ;;
        *)
            if (( error_code > 128 && error_code <= 148 )); then
                signal=$((error_code - 128))
                echo "Error: Terminated by signal $signal in $context."
            elif (( error_code > 148 )); then
                echo "Error: Unknown exit status $error_code in $context."
            else
                echo "Error: Exit code $error_code in $context."
            fi
            ;;
    esac
}

# Example usage
check_file() {
    local file="$1"
    
    if [ ! -e "$file" ]; then
        handle_error 1 "File existence check for '$file'"
        return 1
    fi
    
    if [ ! -r "$file" ]; then
        handle_error 126 "File read permission check for '$file'"
        return 126
    fi
    
    echo "File '$file' is accessible."
    return 0
}

# Test the error handling
echo "Testing error handling in Barrackpore system..."

# Test case 1: Non-existent file
check_file "/nonexistent/file.txt"
result=$?
handle_error $result "File check for non-existent file"

echo "---"

# Test case 2: Existing file
check_file "/etc/passwd"
result=$?
handle_error $result "File check for /etc/passwd"

echo "---"

# Test case 3: Command not found
nonexistent_command 2>/dev/null
result=$?
handle_error $result "Running nonexistent command"`,w=()=>{const[d,c]=o.useState("simple"),[t,h]=o.useState(""),[i,s]=o.useState(""),m=[{id:"simple",name:"Simple Case",description:"Basic pattern matching with literals",useCase:"Menu options, status codes, simple matching",color:"from-blue-500 to-cyan-600"},{id:"pattern",name:"Pattern Matching",description:"Wildcards and glob patterns in cases",useCase:"File extensions, partial matches, ranges",color:"from-green-500 to-emerald-600"},{id:"menu",name:"Menu-Driven",description:"Complete interactive menu systems",useCase:"CLI tools, configuration menus, user interfaces",color:"from-purple-500 to-pink-600"},{id:"nested",name:"Nested Cases",description:"Case statements within cases",useCase:"Complex decision trees, multi-level menus",color:"from-orange-500 to-red-600"}],g=[{value:"1",label:"View System Status",description:"Check CPU, memory, and disk usage"},{value:"2",label:"Backup Files",description:"Create backup of important files"},{value:"3",label:"Update System",description:"Check for and install updates"},{value:"4",label:"View Logs",description:"Display system log files"},{value:"q",label:"Quit",description:"Exit the program"}],x=a=>{switch(h(a),a){case"1":s(`✓ System Status:
  CPU: 24%  Memory: 3.2G/16G  Disk: 45%
  All systems normal in Barrackpore server.`);break;case"2":s(`✓ Starting backup...
  Backing up /home/students/projects/
  Backup saved to /backups/2024-01-15/`);break;case"3":s(`✓ Checking for updates...
  5 packages available for update.
  Run 'sudo apt upgrade' to install.`);break;case"4":s(`✓ Recent log entries:
  [INFO] User login: Swadeep
  [INFO] Backup completed
  [WARN] High memory usage at 22:00`);break;case"q":s(`✗ Exiting system management tool.
  Thank you for using the Barrackpore Server Manager.`);break;default:s("✗ Invalid selection. Please choose a valid option.")}};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:"Case Statement for Menu-Driven Programs"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Master the powerful `case` statement for creating clean, readable, and maintainable menu-driven interfaces in shell scripts. Learn pattern matching, fall-through logic, and professional menu design patterns."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Case Statement Prototype"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Basic Syntax"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-700 p-4 rounded",children:`case "$variable" in
    pattern1)
        # Commands for pattern1
        ;;
    pattern2)
        # Commands for pattern2
        ;;
    pattern3|pattern4)
        # Commands for pattern3 OR pattern4
        ;;
    *)
        # Default case (catch-all)
        ;;
esac`})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Key Characteristics"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"Return Type"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Exit status of last executed command in matched case"})]}),e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"Purpose"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Multi-way branching based on pattern matching"})]}),e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"When to Use"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Menu systems, command dispatch, status code handling"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Interactive Menu Demo"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"System Management Menu"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Select an option to see the case statement in action:"}),e.jsx("div",{className:"space-y-2",children:g.map((a,l)=>e.jsx("button",{onClick:()=>x(a.value),className:r("w-full p-4 rounded-lg transition-all duration-300 text-left transform hover:scale-[1.02]",t===a.value?"bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"),style:{animationDelay:`${l*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:r("w-8 h-8 rounded-full flex items-center justify-center mr-3",t===a.value?"bg-white/30":a.value==="q"?"bg-red-100 dark:bg-red-900/30":"bg-blue-100 dark:bg-blue-900/30"),children:e.jsx("span",{className:r("font-bold",t===a.value?"text-white":a.value==="q"?"text-red-600 dark:text-red-400":"text-blue-600 dark:text-blue-400"),children:a.value})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:a.label}),e.jsx("div",{className:"text-sm opacity-80",children:a.description})]})]})},a.value))})]})}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Case Statement Execution"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Selected Option:"}),e.jsx("div",{className:"font-mono text-lg font-bold text-blue-600 dark:text-blue-400",children:t?`"${t}"`:"None selected"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Case Statement Output:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono",children:`case "$selected_option" in
    ${t?`${t})`:"    # Waiting for selection..."}
        ${i||"        # Output will appear here..."}
    ${t?"    ;;":""}
esac`})]}),i&&e.jsxs("div",{className:"mt-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Actual Output:"}),e.jsx("pre",{className:"text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:i})]})]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Pattern Matching Capabilities"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:m.map((a,l)=>e.jsxs("button",{onClick:()=>c(a.id),className:r("p-4 rounded-xl transition-all duration-300 transform hover:scale-105",d===a.id?`bg-gradient-to-r ${a.color} text-white shadow-lg`:"bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${l*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsx("div",{className:"font-semibold mb-1",children:a.name}),e.jsx("div",{className:"text-sm mb-2",children:a.description}),e.jsx("div",{className:"text-xs opacity-80 bg-black/10 dark:bg-white/10 px-2 py-1 rounded",children:a.useCase})]},a.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Common Patterns"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:'"start"|"begin") # Exact match for start OR begin'}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"[Yy]|[Yy][Ee][Ss]) # Case-insensitive yes"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"*.txt) # All .txt files"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"[0-9]) # Single digit 0-9"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"[a-zA-Z]*) # Starts with letter"})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Advanced Patterns"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"???) # Exactly three characters"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"[[:digit:]]) # POSIX character class for digits"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"*[!0-9]*) # Contains non-digit"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"@(opt1|opt2)) # Extended glob: opt1 OR opt2"})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Simple Menu System"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Basic Menu"})]}),e.jsx(n,{fileModule:p,title:"Student grade management system for Barrackpore school",highlightLines:[6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs to create a simple menu for managing student grades in the Barrackpore school system. The case statement handles each menu option cleanly."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"File Type Handler"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"Pattern Matching"})]}),e.jsx(n,{fileModule:b,title:"Process different file types in Shyamnagar data center",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina is processing various file types in the Shyamnagar data center. The case statement uses pattern matching to handle different file extensions appropriately."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Complete CLI Tool"}),e.jsx("span",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:"Production Ready"})]}),e.jsx(n,{fileModule:u,title:"System administration tool for Ichapur servers",highlightLines:[9,10,11,12,13,14,15,16,17,18,19,20,21]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Debangshu manages multiple servers in Ichapur and needs a robust administration tool. This case statement handles commands, subcommands, and help text."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Case Statement Techniques"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Complex Decision Tree"}),e.jsx(n,{fileModule:f,title:"Nested case statements for multi-level menus",highlightLines:[10,11,12,13,14,15,16,17,18,19,20,21,22]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Nested case statements allow for complex menu hierarchies. However, consider extracting deeply nested logic into functions for better readability."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Robust Error Handling"}),e.jsx(n,{fileModule:y,title:"Comprehensive error handling with case statements",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Best Practice:"})," Always include a default case (`*`)`) to handle unexpected inputs gracefully. This prevents scripts from failing silently."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Case vs If-Else: When to Use Which"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Use Case Statement When..."]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Matching against multiple exact strings"}),e.jsx("li",{children:"Working with simple patterns/wildcards"}),e.jsx("li",{children:"Creating menu-driven interfaces"}),e.jsx("li",{children:"Dispatching commands based on input"}),e.jsx("li",{children:"Code needs to be readable and maintainable"}),e.jsx("li",{children:"Pattern matching is required"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Use If-Else When..."]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Testing complex boolean conditions"}),e.jsx("li",{children:"Comparing numeric values"}),e.jsx("li",{children:"Checking file attributes/permissions"}),e.jsx("li",{children:"Need arithmetic comparisons"}),e.jsx("li",{children:"Testing multiple unrelated conditions"}),e.jsx("li",{children:"Need to execute commands in conditions"})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Rule of Thumb"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"If you have 3 or more `elif` statements checking the same variable against different values, you should probably use a `case` statement instead. Case statements are generally more readable for string/pattern matching scenarios."})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Forgot Double Semicolons"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Missing `;;` causes fall-through to next case"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`case "$choice" in
    "1")
        echo "Option 1"  # Missing ;;
    "2")
        echo "Option 2"
        ;;
esac`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Always terminate each case with `;;` (except the last if using `*`))"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Pattern Order Issues"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," More specific patterns after wildcards never match"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`case "$file" in
    *)           # This matches everything!
        echo "Wildcard"
        ;;
    *.txt)
        echo "Text file"  # Never reached
        ;;
esac`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Place more specific patterns before wildcards"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Unquoted Variables"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Unquoted variables cause word splitting"]}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`case $input in  # Should be "$input"
    "pattern")
        echo "Matched"
        ;;
esac`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Always quote variables in case statements"]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Readability"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use consistent indentation (4 spaces per level)"}),e.jsx("li",{children:"Align closing `esac` with opening `case`"}),e.jsx("li",{children:"Comment complex pattern logic"}),e.jsx("li",{children:"Keep case bodies short (extract to functions if long)"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Maintainability"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Always include a default case (`*`))"}),e.jsx("li",{children:"Group related patterns together"}),e.jsx("li",{children:"Use variables for repeated patterns"}),e.jsx("li",{children:"Order patterns from specific to general"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Safety"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Always quote the tested variable"}),e.jsx("li",{children:"Validate input before case statement when possible"}),e.jsx("li",{children:"Handle errors within each case"}),e.jsx("li",{children:"Use `exit` codes appropriately in cases"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Case statements are generally faster than long if-elif chains"}),e.jsx("li",{children:"Order frequently matched patterns first"}),e.jsx("li",{children:"Avoid expensive commands in patterns"}),e.jsx("li",{children:"Consider using functions for complex case bodies"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," How would you handle case-insensitive menu options? Consider both the pattern approach and transforming the input before the case statement."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."}),' The difference between `*.txt` and `.*.txt` patterns. Which one matches "report.txt" and which one matches ".hidden.txt"?']})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A case statement that uses `break` in some cases to use `;;` instead. What's the difference in behavior, and when would you use each?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Always quote the variable: ",e.jsx("code",{className:"text-sm",children:'"$choice"'})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["End each case with ",e.jsx("code",{className:"text-sm",children:";;"})," (except last with `*`))"]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use `*`)) as default case to handle unexpected input"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Order patterns from specific to general"})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_3.0s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["The case statement is one of the most underutilized features in shell scripting. In production systems across Naihati and Ichapur, I've replaced miles of if-elif chains with clean case statements, reducing bugs by 40%. Remember: ",e.jsx("strong",{children:"case statements are for pattern matching, not complex logic"}),". If you find yourself putting lots of logic in a case body, extract it to a function."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:'When teaching Abhronila and Tuhina, I emphasize starting with simple exact matches before moving to patterns. Create a "pattern playground" script where they can test different patterns against various inputs. This hands-on approach helps internalize how `*`, `?`, and character classes work. Also, practice converting if-elif chains to case statements - it\'s an excellent exercise in code refactoring.'})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Production Wisdom"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"In the Barrackpore server management system, we use case statements for command dispatch. Each command handler is a separate function, and the case statement just calls the appropriate function. This separation makes the code testable and maintainable. Also, always log which case was matched - it's invaluable for debugging production issues in Shyamnagar."})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `})]})};export{w as default};

import{j as e}from"./index-CG3iA-Ea.js";import{S as r}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const n=`#!/bin/bash
# Global Variable Examples

echo "=== Global Variables (Shell Variables) ==="
echo ""

# 1. Creating global variables
echo "1. Creating global variables:"
name="Swadeep"
age=22
project_dir="/home/swadeep/projects"
echo "  name='$name'"
echo "  age=$age"
echo "  project_dir='$project_dir'"
echo ""

# 2. Accessing global variables
echo "2. Accessing variables:"
echo "  Hello $name, you are $age years old."
echo "  Project directory: $project_dir"
echo ""

# 3. Modifying global variables
echo "3. Modifying variables:"
age=23
name="Swadeep Das"
echo "  Updated: $name is now $age years old."
echo ""

# 4. Using variables in commands
echo "4. Using variables in commands:"
file_count=$(ls -1 "$project_dir" 2>/dev/null | wc -l)
echo "  Files in $project_dir: $file_count"
echo ""

# 5. Variable expansion
echo "5. Variable expansion techniques:"
base_name="document"
extension="txt"
filename="\${base_name}_report.\${extension}"
echo "  Filename: $filename"
echo ""

# 6. Default values
echo "6. Using default values:"
unset maybe_set
echo "  Value: \${maybe_set:-default_value}"
echo "  Variable is still: \${maybe_set:-unset}"
echo ""
maybe_set="actual_value"
echo "  When set: \${maybe_set:-default_value}"
echo ""

# 7. Arrays as global variables
echo "7. Global array variables:"
students=("Tuhina" "Abhronila" "Debangshu" "Swadeep")
echo "  Students: \${students[@]}"
echo "  First student: \${students[0]}"
echo "  Total students: \${#students[@]}"
echo ""

# 8. Special global variables
echo "8. Special global variables:"
echo "  Script name: $0"
echo "  Number of arguments: $#"
echo "  All arguments: $@"
echo "  Process ID: $$"
echo "  Exit status of last command: $?"
echo ""

# 9. Showing all global variables
echo "9. Showing all shell variables (partial list):"
echo "  Running: set | head -20"
set | head -20
echo ""

echo "=== Key Points About Global Variables ==="
echo "• Created with: VAR=value"
echo "• Accessible throughout current shell"
echo "• Not inherited by child processes"
echo "• View with 'set' command"
echo "• Use curly braces for clarity: \\\${VAR}"`,a=`#!/bin/bash
# Environment Variable Examples

echo "=== Environment Variables (Exported Variables) ==="
echo ""

# 1. Creating and exporting environment variables
echo "1. Creating environment variables:"
export DATABASE_URL="postgresql://localhost:5432/mydb"
export APP_ENV="production"
export MAX_CONNECTIONS=100
echo "  DATABASE_URL='$DATABASE_URL'"
echo "  APP_ENV='$APP_ENV'"
echo "  MAX_CONNECTIONS=$MAX_CONNECTIONS"
echo ""

# 2. Showing all environment variables
echo "2. Current environment variables (partial list):"
echo "  Running: printenv | head -15"
printenv | head -15
echo ""

# 3. Exporting existing variables
echo "3. Exporting existing variables:"
TEMP_DIR="/tmp/myapp"
export TEMP_DIR
echo "  TEMP_DIR exported: $TEMP_DIR"
echo ""

# 4. One-line export and assignment
echo "4. Export and assign in one line:"
export API_KEY="secret-key-12345"
echo "  API_KEY exported: \${API_KEY:0:10}..."
echo ""

# 5. Testing inheritance in subshell
echo "5. Testing variable inheritance:"
export INHERITED_VAR="I am inherited"
NORMAL_VAR="I am NOT inherited"

echo "  In parent shell:"
echo "    INHERITED_VAR: $INHERITED_VAR"
echo "    NORMAL_VAR: $NORMAL_VAR"
echo ""

echo "  In subshell:"
(
    echo "    INHERITED_VAR: \${INHERITED_VAR:-Not found}"
    echo "    NORMAL_VAR: \${NORMAL_VAR:-Not found}"
)
echo ""

# 6. Using environment variables in child processes
echo "6. Passing to child processes:"
export CONFIG_PATH="/etc/myapp/config.yaml"

# Create a test Python script
cat > /tmp/test_env.py << 'EOF'
import os
print("Python sees CONFIG_PATH:", os.environ.get('CONFIG_PATH', 'Not found'))
print("Python sees NORMAL_VAR:", os.environ.get('NORMAL_VAR', 'Not found'))
EOF

echo "  Running Python script:"
python3 /tmp/test_env.py
echo ""

# 7. Common important environment variables
echo "7. Important system environment variables:"
echo "  USER: $USER"
echo "  HOME: $HOME"
echo "  SHELL: $SHELL"
echo "  PATH: $PATH"
echo "  PWD: $PWD"
echo "  LANG: $LANG"
echo ""

# 8. Removing environment variables
echo "8. Removing environment variables:"
export TO_BE_REMOVED="remove me"
echo "  Before: TO_BE_REMOVED='$TO_BE_REMOVED'"
unset TO_BE_REMOVED
echo "  After unset: TO_BE_REMOVED='\${TO_BE_REMOVED:-unset}'"
echo ""

# 9. Making variables read-only
echo "9. Read-only environment variables:"
export READONLY_VAR="cannot change"
readonly READONLY_VAR
echo "  READONLY_VAR: $READONLY_VAR"
echo "  Trying to change (will error):"
READONLY_VAR="new value" 2>/dev/null || echo "  ✓ Failed as expected"
echo ""

# 10. Exporting functions
echo "10. Exporting shell functions:"
my_function() {
    echo "Hello from exported function"
}
export -f my_function

echo "  Testing in subshell:"
bash -c 'my_function' 2>/dev/null && echo "  ✓ Function executed in subshell"
echo ""

echo "=== When to Use Environment Variables ==="
echo "• Configuration for child processes"
echo "• Database connections, API keys"
echo "• Environment-specific settings (dev/staging/prod)"
echo "• Paths needed by external tools"
echo "• Shared configuration between scripts"`,s=`#!/bin/bash
# Local Variable Examples

echo "=== Local Variables (Function Scope) ==="
echo ""

# 1. Basic local variable in function
echo "1. Local variables in functions:"
function counter_example {
    local count=0
    count=$((count + 1))
    echo "  Inside function: count=$count"
}

counter_example
echo "  Outside function: count=\${count:-undefined}"
echo ""

# 2. Without local keyword (BAD PRACTICE)
echo "2. Without 'local' keyword (shows the problem):"
function bad_counter {
    # Missing 'local' - modifies global variable!
    count=0
    count=$((count + 5))
    echo "  Inside bad function: count=$count"
}

global_count=10
echo "  Before function: global_count=$global_count"
bad_counter
echo "  After function: global_count=$global_count"
echo "  Oops! Global variable was modified!"
echo ""

# 3. Multiple local variables
echo "3. Multiple local variables:"
function calculate_stats {
    local files=(*.txt)
    local total_files=\${#files[@]}
    local total_size=0
    
    for file in "\${files[@]}"; do
        if [ -f "$file" ]; then
            local size=$(wc -c < "$file" 2>/dev/null || echo 0)
            total_size=$((total_size + size))
        fi
    done
    
    echo "  Files: $total_files, Total size: $total_size bytes"
}

# Create some test files
echo "test1" > /tmp/file1.txt
echo "test2" > /tmp/file2.txt
cd /tmp && calculate_stats
cd - > /dev/null
echo ""

# 4. Local variables with parameters
echo "4. Local variables with function parameters:"
function create_user {
    local username="$1"
    local email="$2"
    local role="\${3:-user}"  # Default value
    
    echo "  Creating user:"
    echo "    Username: $username"
    echo "    Email: $email"
    echo "    Role: $role"
    
    # Local variable for timestamp
    local created_at=$(date +"%Y-%m-%d %H:%M:%S")
    echo "    Created: $created_at"
}

create_user "swadeep" "swadeep@example.com"
create_user "tuhina" "tuhina@example.com" "admin"
echo ""

# 5. Nested functions with local variables
echo "5. Nested functions:"
function outer_function {
    local outer_var="I'm in outer function"
    
    function inner_function {
        local inner_var="I'm in inner function"
        echo "  Inner sees: $inner_var"
        echo "  Inner also sees outer: $outer_var"
    }
    
    echo "  Outer sees: $outer_var"
    # echo "  Outer cannot see inner: \${inner_var:-not visible}"
    inner_function
}

outer_function
echo ""

# 6. Local variables in loops within functions
echo "6. Local variables in loops:"
function process_items {
    local items=("$@")
    local processed=0
    local skipped=0
    
    for item in "\${items[@]}"; do
        if [[ "$item" == skip_* ]]; then
            skipped=$((skipped + 1))
            continue
        fi
        echo "  Processing: $item"
        processed=$((processed + 1))
    done
    
    echo "  Summary: Processed $processed, Skipped $skipped"
}

process_items "item1" "skip_this" "item2" "skip_that" "item3"
echo ""

# 7. Local variables prevent naming conflicts
echo "7. Preventing naming conflicts:"
config_file="/etc/global.conf"

function read_config {
    local config_file="/tmp/local.conf"  # Different file!
    
    echo "  Inside function:"
    echo "    config_file='$config_file'"
    echo "    Creating local config..."
    echo "local_setting=value" > "$config_file"
}

echo "  Global config_file: $config_file"
read_config
echo "  Global config_file unchanged: $config_file"
echo ""

# 8. Returning values from functions using local variables
echo "8. Returning values:"
function calculate_average {
    local numbers=("$@")
    local sum=0
    local count=\${#numbers[@]}
    
    for num in "\${numbers[@]}"; do
        sum=$((sum + num))
    done
    
    local average=$((sum / count))
    echo "$average"  # Output to stdout
}

result=$(calculate_average 10 20 30 40)
echo "  Average: $result"
echo ""

# 9. Local variables with arithmetic
echo "9. Local variables with arithmetic:"
function math_operations {
    local a=$1
    local b=$2
    local sum=$((a + b))
    local diff=$((a - b))
    local product=$((a * b))
    
    echo "  $a + $b = $sum"
    echo "  $a - $b = $diff"
    echo "  $a * $b = $product"
    
    # Local variable only used in calculation
    local temp=$((a * a + b * b))
    echo "  $a² + $b² = $temp"
}

math_operations 15 7
echo ""

echo "=== Best Practices for Local Variables ==="
echo "• Always use 'local' keyword in functions"
echo "• Use descriptive names"
echo "• Initialize with default values when appropriate"
echo "• Use local variables for temporary calculations"
echo "• Prevents side effects and naming conflicts"`,t=`#!/bin/bash
# Complete Variable Management Script

echo "=== Professional Variable Management System ==="
echo ""

# Configuration section - Environment variables for script-wide use
export SCRIPT_VERSION="1.0.0"
export LOG_LEVEL="\${LOG_LEVEL:-INFO}"  # Default value
export TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Global variables for script state
config_loaded=false
error_count=0
processed_files=0

# Function to load configuration with local variables
load_configuration() {
    local config_file="\${1:-config.conf}"
    local line_count=0
    
    echo "[INFO] Loading configuration from: $config_file"
    
    if [ ! -f "$config_file" ]; then
        echo "[ERROR] Config file not found: $config_file" >&2
        return 1
    fi
    
    # Use local variables to parse config
    while IFS='=' read -r key value || [ -n "$key" ]; do
        # Skip comments and empty lines
        [[ $key =~ ^# ]] || [[ -z $key ]] && continue
        
        line_count=$((line_count + 1))
        
        # Trim whitespace
        key=$(echo "$key" | xargs)
        value=$(echo "$value" | xargs)
        
        # Export as environment variable
        export "CONFIG_\${key^^}"="$value"
        echo "  Loaded: $key=$value"
    done < "$config_file"
    
    config_loaded=true
    echo "[INFO] Loaded $line_count configuration items"
    return 0
}

# Function to process files with local variables
process_files() {
    local input_dir="$1"
    local output_dir="$2"
    local file_pattern="\${3:-*.txt}"
    local files_processed=0
    local errors=0
    
    echo "[INFO] Processing files from: $input_dir"
    echo "[INFO] Pattern: $file_pattern"
    
    # Check if input directory exists
    if [ ! -d "$input_dir" ]; then
        echo "[ERROR] Input directory not found: $input_dir" >&2
        return 1
    fi
    
    # Create output directory if it doesn't exist
    mkdir -p "$output_dir"
    
    # Process each file
    for file in "$input_dir"/$file_pattern; do
        # Skip if no files match pattern
        [ ! -f "$file" ] && continue
        
        local filename=$(basename "$file")
        local file_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        local temp_output="$output_dir/temp_$filename"
        
        echo "  Processing: $filename (\${file_size} bytes)"
        
        # Simulate processing with a local function
        process_single_file() {
            local input_file="$1"
            local output_file="$2"
            local attempts=0
            local max_attempts=3
            
            while [ $attempts -lt $max_attempts ]; do
                attempts=$((attempts + 1))
                
                # Simulate file processing (in real script, would do actual work)
                if cp "$input_file" "$output_file" 2>/dev/null; then
                    echo "    ✓ Processed successfully (attempt $attempts)"
                    return 0
                else
                    echo "    ✗ Attempt $attempts failed"
                    sleep 1
                fi
            done
            
            echo "    ✗ All $max_attempts attempts failed"
            return 1
        }
        
        # Process the file
        if process_single_file "$file" "$temp_output"; then
            # Rename temp file to final name
            local final_output="$output_dir/$filename"
            mv "$temp_output" "$final_output" 2>/dev/null
            
            files_processed=$((files_processed + 1))
            echo "    → Saved to: $final_output"
        else
            errors=$((errors + 1))
            echo "    → Failed to process: $filename"
        fi
    done
    
    # Update global counters
    processed_files=$((processed_files + files_processed))
    error_count=$((error_count + errors))
    
    # Return local counts
    echo "$files_processed $errors"
}

# Function to generate report with local calculations
generate_report() {
    local start_time="$1"
    local end_time="$2"
    local report_file="\${3:-report_$TIMESTAMP.txt}"
    
    echo "[INFO] Generating report: $report_file"
    
    # Calculate duration
    local duration=$((end_time - start_time))
    local hours=$((duration / 3600))
    local minutes=$(( (duration % 3600) / 60 ))
    local seconds=$((duration % 60))
    
    # Create report with local variable for content
    local report_content="=== PROCESSING REPORT ===
    
Generated: $(date)
Script Version: $SCRIPT_VERSION
Log Level: $LOG_LEVEL

PROCESSING SUMMARY:
------------------
Files Processed: $processed_files
Errors Encountered: $error_count
Success Rate: $(( (processed_files * 100) / (processed_files + error_count) ))% (approx)

TIMING:
-------
Start Time: $(date -r "$start_time" +"%H:%M:%S")
End Time: $(date -r "$end_time" +"%H:%M:%S")
Duration: \${hours}h \${minutes}m \${seconds}s

CONFIGURATION:
-------------
Config Loaded: $config_loaded
Environment: $CONFIG_ENVIRONMENT
Max Files: \${CONFIG_MAX_FILES:-not set}

SYSTEM INFO:
-----------
User: $USER
Hostname: $(hostname)
Working Directory: $PWD
"
    
    # Write report
    echo "$report_content" > "$report_file"
    
    # Verify report was created
    local report_size=$(wc -c < "$report_file")
    echo "[INFO] Report generated: $report_file (\${report_size} bytes)"
    
    # Return report filename
    echo "$report_file"
}

# Main execution
main() {
    local script_start=$(date +%s)
    
    echo "Starting script execution..."
    echo "Script Version: $SCRIPT_VERSION"
    echo "Log Level: $LOG_LEVEL"
    echo ""
    
    # Load configuration
    if ! load_configuration "script_config.conf"; then
        echo "[WARNING] Using default configuration"
        export CONFIG_ENVIRONMENT="development"
        export CONFIG_MAX_FILES=100
    fi
    
    # Process files based on configuration
    local input_dir="\${CONFIG_INPUT_DIR:-/tmp/input}"
    local output_dir="\${CONFIG_OUTPUT_DIR:-/tmp/output}"
    local max_files="\${CONFIG_MAX_FILES:-10}"
    
    echo ""
    echo "PROCESSING PARAMETERS:"
    echo "  Input Directory: $input_dir"
    echo "  Output Directory: $output_dir"
    echo "  Max Files: $max_files"
    echo ""
    
    # Create test files if input directory is empty
    if [ ! -d "$input_dir" ] || [ -z "$(ls -A "$input_dir" 2>/dev/null)" ]; then
        echo "[INFO] Creating test files..."
        mkdir -p "$input_dir"
        for i in $(seq 1 5); do
            echo "Test content for file $i" > "$input_dir/file$i.txt"
        done
    fi
    
    # Process files
    local process_result
    process_result=$(process_files "$input_dir" "$output_dir")
    
    # Parse result (local variables from function)
    local files_processed=$(echo "$process_result" | awk '{print $1}')
    local errors=$(echo "$process_result" | awk '{print $2}')
    
    echo ""
    echo "PROCESSING COMPLETE:"
    echo "  Files processed in batch: $files_processed"
    echo "  Errors in batch: $errors"
    echo ""
    
    # Generate report
    local script_end=$(date +%s)
    local report_file
    report_file=$(generate_report "$script_start" "$script_end")
    
    echo ""
    echo "=== SCRIPT COMPLETED ==="
    echo "Total files processed: $processed_files"
    echo "Total errors: $error_count"
    echo "Report saved to: $report_file"
    echo ""
    
    # Show environment variables set
    echo "ENVIRONMENT VARIABLES SET:"
    printenv | grep -E "^(CONFIG_|SCRIPT_|LOG_)" | sort
    
    # Cleanup local test files
    rm -rf "$input_dir"/*.txt 2>/dev/null
    rm -rf "$output_dir"/*.txt 2>/dev/null
}

# Run main function
main

echo ""
echo "=== VARIABLE SCOPE DEMONSTRATION ==="
echo ""
echo "After script execution:"
echo "  Global variable 'processed_files': $processed_files"
echo "  Global variable 'error_count': $error_count"
echo "  Environment variable 'SCRIPT_VERSION': $SCRIPT_VERSION"
echo ""
echo "Note:"
echo "  • 'processed_files' and 'error_count' are global to script"
echo "  • 'SCRIPT_VERSION' is exported and available to child processes"
echo "  • Local variables from functions are no longer accessible"`,d=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto animate-[fadeInUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"mb-10 animate-[fadeInUp_0.8s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",children:"Topic 4: Shell Variables"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Local, Global, and Environment Variables - Understanding variable scope in shell scripting"})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("div",{children:e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Variables in shell scripting store data that can be used and manipulated throughout your scripts. Understanding the difference between local, global, and environment variables is crucial for writing robust, maintainable scripts. Variable scope determines where a variable can be accessed and modified."})})]})})]}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-purple-600 dark:text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Variable Scope Visualization"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 800 500",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead-purple",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8b5cf6"})}),e.jsxs("linearGradient",{id:"globalGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#7c3aed"}),e.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]}),e.jsxs("linearGradient",{id:"envGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#10b981"})]}),e.jsxs("linearGradient",{id:"localGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#3b82f6"}),e.jsx("stop",{offset:"100%",stopColor:"#60a5fa"})]})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"50",width:"200",height:"80",rx:"10",fill:"url(#globalGradient)",className:"transition-all duration-300 hover:stroke-purple-400 hover:stroke-2"}),e.jsx("text",{x:"150",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Parent Shell Process"}),e.jsx("text",{x:"150",y:"105",textAnchor:"middle",fill:"#e9d5ff",className:"font-sans text-xs",children:"Global Variables Accessible"}),e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"30",width:"150",height:"40",rx:"6",fill:"#8b5cf6",className:"transition-all duration-300 hover:fill-purple-500"}),e.jsx("text",{x:"355",y:"55",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'GLOBAL_VAR="parent"'})]}),e.jsx("path",{d:"M250 90 L280 70",stroke:"#8b5cf6",strokeWidth:"2",markerEnd:"url(#arrowhead-purple)"}),e.jsx("text",{x:"265",y:"80",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Can access"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"80",width:"150",height:"40",rx:"6",fill:"url(#envGradient)",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"355",y:"105",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'export ENV_VAR="exported"'}),e.jsx("animate",{attributeName:"fill",values:"#10b981;#34d399;#10b981",dur:"3s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("path",{d:"M250 90 L280 100",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowhead-purple)"}),e.jsx("text",{x:"265",y:"95",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Can access"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"180",width:"200",height:"80",rx:"10",fill:"#3b82f6",className:"transition-all duration-300 hover:stroke-blue-400 hover:stroke-2"}),e.jsx("text",{x:"150",y:"215",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Subshell Process"}),e.jsx("text",{x:"150",y:"235",textAnchor:"middle",fill:"#dbeafe",className:"font-sans text-xs",children:"( ) or bash -c"}),e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsx("path",{d:"M150 130 L150 180",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead-purple)"}),e.jsx("text",{x:"140",y:"155",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Forked"}),e.jsx("path",{d:"M250 230 L280 70",stroke:"#8b5cf6",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("text",{x:"280",y:"140",textAnchor:"start",fill:"#8b5cf6",className:"font-sans text-xs",children:"✗ Global Vars"}),e.jsx("path",{d:"M250 230 L280 100",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"160",textAnchor:"start",fill:"#10b981",className:"font-sans text-xs",children:"✓ Env Vars"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"200",width:"150",height:"40",rx:"6",fill:"url(#localGradient)",className:"transition-all duration-300 hover:fill-blue-500"}),e.jsx("text",{x:"355",y:"225",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'LOCAL_VAR="subshell"'})]}),e.jsx("path",{d:"M250 230 L280 220",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead-purple)"}),e.jsx("text",{x:"265",y:"225",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Can access"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"300",width:"200",height:"80",rx:"10",fill:"#f59e0b",className:"transition-all duration-300 hover:stroke-amber-400 hover:stroke-2"}),e.jsx("text",{x:"150",y:"335",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Function Call"}),e.jsx("text",{x:"150",y:"355",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:"my_function()"}),e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite",begin:"1s"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"320",width:"150",height:"40",rx:"6",fill:"#f59e0b",className:"transition-all duration-300 hover:fill-amber-500"}),e.jsx("text",{x:"355",y:"345",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'local FUNC_VAR="inside"'}),e.jsx("animate",{attributeName:"fill",values:"#f59e0b;#fbbf24;#f59e0b",dur:"3s",repeatCount:"indefinite",begin:"2s"})]}),e.jsx("path",{d:"M250 340 L280 340",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-purple)"}),e.jsx("text",{x:"265",y:"335",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Can access"}),e.jsx("rect",{x:"450",y:"50",width:"300",height:"120",rx:"8",fill:"#1f2937",fillOpacity:"0.8"}),e.jsx("text",{x:"460",y:"70",fill:"#10b981",className:"font-sans text-sm font-bold",children:"✓ Environment Variables"}),e.jsx("text",{x:"460",y:"90",fill:"#9ca3af",className:"font-sans text-xs",children:"Inherited by all child processes"}),e.jsx("text",{x:"460",y:"110",fill:"#8b5cf6",className:"font-sans text-sm font-bold",children:"✗ Global Variables"}),e.jsx("text",{x:"460",y:"130",fill:"#9ca3af",className:"font-sans text-xs",children:"Not inherited by subshells"}),e.jsx("text",{x:"460",y:"150",fill:"#f59e0b",className:"font-sans text-sm font-bold",children:"• Local Variables"}),e.jsx("text",{x:"460",y:"170",fill:"#9ca3af",className:"font-sans text-xs",children:"Only accessible in defining scope"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsxs("h3",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Global Variables"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Accessible throughout the current shell session. Not inherited by child processes."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-800 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-700",children:[e.jsxs("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Environment Variables"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Exported variables inherited by all child processes. Use ",e.jsx("code",{children:"export"})," command."]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsxs("h3",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),"Local Variables"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Confined to functions or subshells. Use ",e.jsx("code",{children:"local"})," keyword in functions."]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Variable Types & Scope Rules"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsx("h3",{className:"font-bold text-xl text-purple-600 dark:text-purple-400 mb-3",children:"Global Variables (Shell Variables)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Global variables are available throughout the current shell session. They are created by simple assignment but are ",e.jsx("strong",{children:"not automatically passed to child processes"}),"."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-purple-800 dark:text-purple-300 font-semibold",children:"Key Characteristics"}),e.jsxs("div",{className:"text-purple-700 dark:text-purple-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:["Created with: ",e.jsx("code",{children:'VAR="value"'})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsx("span",{children:"Accessible everywhere in current shell"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Not"})," available to subshells or child processes"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:["View with: ",e.jsx("code",{children:"set"})," command (shows all variables)"]})]})]})]})]})}),e.jsx(r,{fileModule:n,title:"Global Variable Examples",highlightLines:[1,3,5,7,9,11,13,15]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-700",children:[e.jsx("h3",{className:"font-bold text-xl text-green-600 dark:text-green-400 mb-3",children:"Environment Variables (Exported Variables)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Environment variables are ",e.jsx("strong",{children:"inherited by child processes"}),". They're created using the ",e.jsx("code",{children:"export"})," command and are essential for configuring the execution environment."]}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-green-800 dark:text-green-300 font-semibold",children:"Important Environment Variables"}),e.jsxs("div",{className:"text-green-700 dark:text-green-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"PATH"})," - Command search path"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"HOME"})," - User's home directory"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"USER"})," / ",e.jsx("code",{children:"LOGNAME"})," - Current user"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"SHELL"})," - Current shell"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"PWD"})," - Present working directory"]})]})]})]})]})}),e.jsx(r,{fileModule:a,title:"Environment Variable Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("h3",{className:"font-bold text-xl text-blue-600 dark:text-blue-400 mb-3",children:"Local Variables (Function Scope)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Local variables are confined to functions or subshells. They prevent variable naming conflicts and are essential for writing modular, reusable functions."}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-blue-800 dark:text-blue-300 font-semibold",children:"When to Use Local Variables"}),e.jsxs("div",{className:"text-blue-700 dark:text-blue-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsx("span",{children:"Inside functions to avoid side effects"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsx("span",{children:"Temporary calculations"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsx("span",{children:"Loop counters in functions"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsx("span",{children:"Function parameters"})]})]})]})]})}),e.jsx(r,{fileModule:s,title:"Local Variable Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Real-World Scenarios & Student Projects"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Swadeep's Configuration Script"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Swadeep from Barrackpore is writing a script to set up his development environment. He needs different variables for different projects."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"E"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Environment Variables:"})," ",e.jsx("code",{children:"JAVA_HOME"}),", ",e.jsx("code",{children:"PYTHONPATH"})," - needed by child processes"]}),e.jsx("code",{className:"text-xs bg-orange-100 dark:bg-orange-900 p-1 rounded block mt-1",children:'export JAVA_HOME="/usr/lib/jvm/java-11"'})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"G"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Global Variables:"})," Project paths - only needed in current script"]}),e.jsx("code",{className:"text-xs bg-purple-100 dark:bg-purple-900 p-1 rounded block mt-1",children:'PROJECT_DIR="/home/swadeep/projects"'})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"L"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Local Variables:"})," Temporary calculations in functions"]}),e.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900 p-1 rounded block mt-1",children:"local file_count=$(ls | wc -l)"})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Tuhina's Production Script"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Tuhina from Shyamnagar is writing a deployment script for production servers. She needs to manage different environments safely."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"!"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Problem:"})," Global variable conflict in nested functions"]}),e.jsx("code",{className:"text-xs bg-red-100 dark:bg-red-900 p-1 rounded block mt-1",children:`# Both functions modify same global variable
process_files() {
    COUNT=0
    # ... modifies COUNT
}

validate_files() {
    COUNT=0  # Oops! Resets parent's COUNT
}`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"✓"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Solution:"})," Use local variables in functions"]}),e.jsx("code",{className:"text-xs bg-green-100 dark:bg-green-900 p-1 rounded block mt-1",children:`process_files() {
    local count=0
    # ... safe modifications
}`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"⚠"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Important:"})," Environment variables for configuration"]}),e.jsx("code",{className:"text-xs bg-yellow-100 dark:bg-yellow-900 p-1 rounded block mt-1",children:`# Set in calling script
export DEPLOY_ENV="production"
export DB_HOST="db.prod.example.com"`})]})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:t,title:"Complete Variable Management Script",highlightLines:[1,3,5,7,9,11,13,15,17,19,21]})})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Common Variable Pitfalls & Debugging"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 1: Variable Not Available in Subshell"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"The most common mistake - expecting global variables to be available in child processes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Wrong Approach"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`#!/bin/bash
CONFIG_FILE="/path/to/config"

# This won't work - subshell doesn't see CONFIG_FILE
( echo "Config: $CONFIG_FILE" )  # Empty!`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Correct Solution"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`#!/bin/bash
export CONFIG_FILE="/path/to/config"

# Now it works - exported to environment
( echo "Config: $CONFIG_FILE" )  # Shows value`})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 2: Unintended Global Variable Modification"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Functions modifying global variables unintentionally, causing hard-to-find bugs."}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-800 dark:text-yellow-300 font-semibold",children:"Example: Counter variable conflict"}),e.jsx("code",{className:"text-yellow-700 dark:text-yellow-400 text-sm mt-1 block",children:`count=0

process_items() {
    for item in "$@"; do
        count=$((count + 1))  # Modifies global count!
    done
}

# Later in script...
count=10  # Reset for different purpose
process_items a b c  # Oops! Changes count to 13`})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 3: Forgetting to Export for Child Processes"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Scripts calling external commands that need configuration variables."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Broken Script"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`#!/bin/bash
DB_HOST="localhost"
DB_PORT="5432"

# Python script can't see these variables!
python3 database_script.py  # Error!`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Working Script"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`#!/bin/bash
export DB_HOST="localhost"
export DB_PORT="5432"

# Now Python can access them as os.environ
python3 database_script.py  # Success!`})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-6 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Best Practices & Professional Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Variable Naming & Scope Rules"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"UPPER_CASE"})," for environment variables"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"lower_case"})," for local/global variables"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Always use ",e.jsx("code",{children:"local"})," in functions unless you need side effects"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Debugging & Inspection Commands"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"printenv"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Show all environment variables"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"set"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Show all shell variables (including local)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"unset VAR"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Remove a variable"})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl shadow-lg p-6 border border-violet-200 dark:border-violet-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Variable Scope Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"1"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Need child access?"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Use ",e.jsx("code",{children:"export"})," for environment vars"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"2"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Function variables"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Always use ",e.jsx("code",{children:"local"})," keyword"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"3"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Debug first"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Check with ",e.jsx("code",{children:"printenv"})," and ",e.jsx("code",{children:"set"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"4"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Naming convention"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"UPPER_CASE for env, lower_case for others"})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-amber-600 dark:text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Exercises"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Think about..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Why would Abhronila, working on a collaborative project in Ichapur, need to understand the difference between global and environment variables when sharing scripts with Debangshu in Naihati?"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Observe carefully..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["What happens when you create a variable in a function without the ",e.jsx("code",{children:"local"})," keyword? Try creating two functions that both modify a variable called ",e.jsx("code",{children:"counter"}),"."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Try changing this..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Write a script that calls another script. Pass configuration using environment variables. Then try without ",e.jsx("code",{children:"export"}),". What's the difference?"]})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s]",children:e.jsx("div",{className:"bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Sukanta Hui • 27 years experience"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600 p-4 rounded-r-lg mb-4",children:e.jsxs("p",{className:"text-purple-800 dark:text-purple-300",children:[e.jsx("strong",{children:"Memory Aid:"})," Think of variables like conversations in rooms.",e.jsx("strong",{children:"Local variables"})," are whispers in a private room - only heard inside.",e.jsx("strong",{children:"Global variables"})," are conversations in your living room - everyone in your house (shell) can hear.",e.jsx("strong",{children:"Environment variables"})," are phone calls - they travel to other houses (processes). Remember: ",e.jsx("code",{children:"export"})," makes the call, ",e.jsx("code",{children:"local"})," closes the door."]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Classroom Exercise"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Have students create a script with a function that uses a global variable, then modify it to use local. Show how the global version causes side effects when the function is called multiple times."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In production scripts, always declare configuration as environment variables at the script start. Use ",e.jsx("code",{children:"set -u"}),' to catch undefined variables. This prevents "silent failures" when variables are missing.']})]})]})]})]})})})]}),e.jsx("style",{jsx:!0,children:`
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
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[fadeInUp_0\\.8s_ease-out\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.1s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.2s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.3s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.4s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.5s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.6s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.7s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.8s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.9s\\] {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `})]});export{d as default};

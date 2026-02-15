import{r as o,j as e}from"./index-CG3iA-Ea.js";import{c as i}from"./clsx-B-dksMZM.js";import{S as n}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const u=`#!/bin/bash
# Logging utility for Barrackpore server monitoring

# Function definition
log_message() {
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    local level="$1"
    local message="$2"
    
    echo "[$timestamp] [$level] $message" >> /var/log/barrackpore_monitor.log
    
    # Also print to console if in debug mode
    if [[ "\${DEBUG:-false}" == "true" ]]; then
        echo "[$timestamp] [$level] $message"
    fi
}

# Function usage examples
echo "Starting Barrackpore server monitoring..."

# Call the function multiple times
log_message "INFO" "Monitoring script started"
log_message "WARNING" "CPU usage above 80%"
log_message "ERROR" "Disk /var is 95% full"
log_message "INFO" "Backup completed successfully"

echo "Check /var/log/barrackpore_monitor.log for details"`,p=`#!/bin/bash
# Student grade processing functions for Shyamnagar school

# Function returns average via echo
calculate_average() {
    local total=0
    local count=0
    
    # Read grades from arguments
    for grade in "$@"; do
        if [[ "$grade" =~ ^[0-9]+$ ]] && (( grade >= 0 && grade <= 100 )); then
            total=$((total + grade))
            count=$((count + 1))
        else
            echo "Invalid grade: $grade" >&2
            return 1
        fi
    done
    
    if (( count > 0 )); then
        local average=$((total / count))
        echo "$average"  # Return value via stdout
        return 0
    else
        return 1  # Error exit status
    fi
}

# Function returns letter grade
get_letter_grade() {
    local numeric_grade="$1"
    
    case $((numeric_grade / 10)) in
        10|9) echo "A" ;;
        8) echo "B" ;;
        7) echo "C" ;;
        6) echo "D" ;;
        *) echo "F" ;;
    esac
}

# Main script
echo "Processing student grades for Shyamnagar school..."

# Call function and capture output
student_grades=(85 92 78 88 95)
average=$(calculate_average "\${student_grades[@]}")

if [[ $? -eq 0 ]]; then
    echo "Average grade: $average"
    
    # Call another function
    letter_grade=$(get_letter_grade "$average")
    echo "Letter grade: $letter_grade"
else
    echo "Error calculating average"
fi`,f=`#!/bin/bash
# File processing with parameter validation for Ichapur data center

# Process file with various options
process_file() {
    local input_file="$1"
    local output_file="$2"
    local options="\${3:-default}"
    
    # Parameter validation
    if [[ -z "$input_file" ]]; then
        echo "Error: Input file required" >&2
        return 1
    fi
    
    if [[ ! -f "$input_file" ]]; then
        echo "Error: Input file not found: $input_file" >&2
        return 1
    fi
    
    if [[ -z "$output_file" ]]; then
        output_file="\${input_file}.processed"
    fi
    
    echo "Processing file: $input_file"
    echo "Output file: $output_file"
    echo "Options: $options"
    
    # Actual processing logic would go here
    case "$options" in
        "compress")
            echo "Compressing file..."
            gzip -c "$input_file" > "$output_file.gz"
            ;;
        "encrypt")
            echo "Encrypting file..."
            openssl enc -aes-256-cbc -in "$input_file" -out "$output_file.enc"
            ;;
        "default")
            echo "Default processing..."
            cp "$input_file" "$output_file"
            ;;
        *)
            echo "Unknown option: $options"
            return 1
            ;;
    esac
    
    local exit_status=$?
    if [[ $exit_status -eq 0 ]]; then
        echo "Processing completed successfully"
        return 0
    else
        echo "Processing failed" >&2
        return $exit_status
    fi
}

# Usage examples
echo "Ichapur Data Center File Processing"

# Process with default options
process_file "/data/reports/daily.csv" "/data/processed/daily_processed.csv"

# Process with compression
process_file "/data/logs/server.log" "/data/archived/server.log.gz" "compress"

# Process with missing parameters (error)
process_file ""`,b=`#!/bin/bash
# Function library for Naihati project utilities
# Save as: /usr/local/lib/naihati_utils.sh

# Color codes for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "\${GREEN}[INFO]\${NC} $*"
}

log_warning() {
    echo -e "\${YELLOW}[WARNING]\${NC} $*" >&2
}

log_error() {
    echo -e "\${RED}[ERROR]\${NC} $*" >&2
}

# File system utilities
ensure_directory() {
    local dir="$1"
    
    if [[ ! -d "$dir" ]]; then
        log_info "Creating directory: $dir"
        mkdir -p "$dir"
        
        if [[ $? -ne 0 ]]; then
            log_error "Failed to create directory: $dir"
            return 1
        fi
    fi
}

safe_copy() {
    local src="$1"
    local dst="$2"
    
    if [[ ! -f "$src" ]]; then
        log_error "Source file not found: $src"
        return 1
    fi
    
    # Create destination directory if needed
    local dst_dir=$(dirname "$dst")
    ensure_directory "$dst_dir" || return 1
    
    cp "$src" "$dst"
    
    if [[ $? -eq 0 ]]; then
        log_info "Copied: $src → $dst"
        return 0
    else
        log_error "Failed to copy: $src → $dst"
        return 1
    fi
}

# System monitoring
check_disk_usage() {
    local threshold="\${1:-80}"  # Default 80%
    local partitions=("/" "/var" "/home")
    
    for partition in "\${partitions[@]}"; do
        local usage=$(df "$partition" | awk 'NR==2 {print $5}' | sed 's/%//')
        
        if [[ "$usage" -ge "$threshold" ]]; then
            log_warning "High disk usage on $partition: \${usage}%"
            return 1
        else
            log_info "Disk usage on $partition: \${usage}% (OK)"
        fi
    done
    
    return 0
}`,y=`#!/bin/bash
# Recursive directory traversal for file processing

# Recursive function to find and process files
find_and_process() {
    local dir="$1"
    local pattern="\${2:-*}"  # Default pattern: all files
    
    # Safety check: prevent infinite recursion
    local depth=\${3:-0}
    if (( depth > 20 )); then
        echo "Error: Maximum recursion depth reached" >&2
        return 1
    fi
    
    # Process current directory
    echo "Scanning directory: $dir (depth: $depth)"
    
    # Process files matching pattern
    for file in "$dir"/$pattern; do
        if [[ -f "$file" ]]; then
            process_file "$file"
        fi
    done
    
    # Recursively process subdirectories
    for subdir in "$dir"/*/; do
        if [[ -d "$subdir" ]]; then
            find_and_process "$subdir" "$pattern" $((depth + 1))
        fi
    done
}

# Function to process individual files
process_file() {
    local file="$1"
    local size=$(stat -c%s "$file" 2>/dev/null)
    
    if [[ -n "$size" ]]; then
        echo "  Processing: $(basename "$file") (\${size} bytes)"
        # Actual file processing would go here
    fi
}

# Main execution
echo "Recursive file processing for project directory..."

# Start recursion from current directory
find_and_process "/home/projects/naihati" "*.txt"

echo "Processing complete!"`,w=()=>{const[c,g]=o.useState("basic"),[m,l]=o.useState(""),[t,d]=o.useState(0),h=[{id:"basic",name:"Basic Function",description:"Simple function definition and calling",syntax:"function_name() { commands; }",color:"from-blue-500 to-cyan-600"},{id:"parameters",name:"With Parameters",description:"Functions that accept arguments",syntax:'func() { echo "$1 $2"; }',color:"from-green-500 to-emerald-600"},{id:"return",name:"Return Values",description:"Functions that return data",syntax:"func() { return 42; }",color:"from-purple-500 to-pink-600"},{id:"library",name:"Function Library",description:"Reusable function collections",syntax:"source functions.sh",color:"from-orange-500 to-red-600"}],r=[{step:1,description:"Function Definition",code:'greet() { echo "Hello!"; }'},{step:2,description:"Function Call",code:"greet"},{step:3,description:"Argument Passing",code:'greet "Swadeep"'},{step:4,description:"Return Capture",code:"result=$(get_data)"},{step:5,description:"Exit Status Check",code:'if process_file; then echo "Success"; fi'}],x=()=>{if(t<r.length){const a=r[t];l(a.code),d(t+1)}else d(0),l("")};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:"Functions: Defining, Calling, and Returning Values"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Master the art of creating reusable, modular code in shell scripts using functions. Learn to define functions, pass parameters, return values, and build function libraries for professional script development."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Function Fundamentals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Function Prototypes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-700 p-3 rounded",children:`# Traditional syntax
function_name() {
    # Function body
    commands
}`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-700 p-3 rounded",children:`# With function keyword (Bash-specific)
function function_name {
    # Function body
    commands
}`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-700 p-3 rounded",children:`# One-line function
greet() { echo "Hello, $1"; }`})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Key Characteristics"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"Return Type"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Exit status (0-255) via `return`, or output via stdout"})]}),e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"Purpose"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Code reuse, modularity, abstraction, organization"})]}),e.jsxs("div",{className:"p-3 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:"When to Use"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-300",children:"Repeated code blocks, complex operations, reusable utilities"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Function Execution Flow"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Function Lifecycle"}),e.jsx("div",{className:"space-y-2 mb-4",children:r.map((a,s)=>e.jsx("div",{className:i("p-3 rounded-lg transition-all duration-300 transform",t>s?"bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105":"bg-gray-100 dark:bg-gray-700"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:i("w-8 h-8 rounded-full flex items-center justify-center mr-3",t>s?"bg-white/30":"bg-gray-200 dark:bg-gray-600"),children:e.jsx("span",{className:i("font-bold",t>s?"text-white":"text-gray-600 dark:text-gray-400"),children:a.step})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:a.description}),e.jsx("div",{className:"text-sm opacity-80",children:a.code})]})]})},a.step))}),e.jsxs("button",{onClick:x,className:"w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center",children:[e.jsxs("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),t===0?"Start Execution":t===r.length?"Reset Simulation":"Next Step"]})]})}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Function Execution"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Current Step:"}),e.jsx("div",{className:"font-mono text-lg font-bold text-blue-600 dark:text-blue-400",children:t>0?r[t-1]?.description:"Ready to start"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Code Being Executed:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono",children:m||`# Click "Start Execution" to begin
# the function lifecycle simulation`})]}),t>0&&e.jsxs("div",{className:"mt-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"What's Happening:"}),e.jsxs("ul",{className:"text-gray-700 dark:text-gray-300 space-y-1",children:[t>=1&&e.jsx("li",{children:"✓ Function is defined in memory"}),t>=2&&e.jsx("li",{children:"✓ Function is invoked (called)"}),t>=3&&e.jsx("li",{children:"✓ Arguments are passed to function parameters"}),t>=4&&e.jsx("li",{children:"✓ Return value is captured"}),t>=5&&e.jsx("li",{children:"✓ Exit status is checked"})]})]})]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Function Types & Patterns"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:h.map((a,s)=>e.jsxs("button",{onClick:()=>g(a.id),className:i("p-4 rounded-xl transition-all duration-300 transform hover:scale-105",c===a.id?`bg-gradient-to-r ${a.color} text-white shadow-lg`:"bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${s*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsx("div",{className:"font-semibold mb-1",children:a.name}),e.jsx("div",{className:"text-sm mb-2",children:a.description}),e.jsx("code",{className:"text-xs opacity-80 bg-black/10 dark:bg-white/10 px-2 py-1 rounded block truncate",children:a.syntax})]},a.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Parameter Access"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"$1, $2, $3... # Positional parameters"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"$@ # All parameters as separate words"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"$* # All parameters as single string"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"$# # Number of parameters"})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Return Methods"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"return 0 # Success exit status"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:'echo "data" # Output to stdout'}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:'global_var="value" # Set global variable'}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:'printf "%s" "$result" # Controlled output'})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Basic Function Definition"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Simple Reuse"})]}),e.jsx(n,{fileModule:u,title:"Logging utility for Barrackpore server monitoring",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs consistent logging across multiple scripts in the Barrackpore server environment. This function provides a reusable logging utility."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Function Return Values"}),e.jsx("span",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:"Data Return"})]}),e.jsx(n,{fileModule:p,title:"Data processing functions with return values",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina is processing student grades in Shyamnagar school. Functions return calculated values that can be used in further computations."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Parameter Handling"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"Flexible Input"})]}),e.jsx(n,{fileModule:f,title:"File processing with parameter validation",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Abhronila needs to process files with various options in the Ichapur data center. Parameters allow flexible function behavior."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Function Techniques"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Function Libraries"}),e.jsx(n,{fileModule:b,title:"Reusable function library for Naihati projects",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Create function libraries to share common utilities across multiple scripts. Use `source` or `.` to include them in your scripts."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Recursive Functions"}),e.jsx(n,{fileModule:y,title:"Recursive directory traversal for file processing",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Note:"})," Shell functions can call themselves (recursion), but be cautious of infinite recursion and stack limitations."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Scope & Variable Visibility"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Local Variables"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`func() {
    local var="value"  # Local to function
    echo "$var"
}
func
echo "$var"  # Empty - not accessible`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Use `local` keyword to create function-scoped variables that don't affect global scope."})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Global Variables"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`global_var="outside"

func() {
    global_var="modified"  # Modifies global
    local local_var="temp"
}
func
echo "$global_var"  # "modified"
echo "$local_var"   # Empty`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Variables without `local` keyword are global and can be modified from within functions."})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Best Practice: Avoid Global Side Effects"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Always use `local` for variables inside functions unless you intentionally need to modify global state. This prevents unexpected side effects and makes functions more predictable and reusable."})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Missing Local Variables"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Functions modifying global variables unintentionally"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`count=0

increment() {
    count=$((count + 1))  # Modifies global count!
}

increment
echo "$count"  # 1 - but maybe unexpected`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Use `local count` inside the function"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Return Value Misunderstanding"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Confusing `return` with function output"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`get_data() {
    echo "result"
    return 0
}

# WRONG: This captures exit status, not output
data=$(get_data)
echo "$data"  # Empty`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Use `echo` for data, `return` for success/failure"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Function Definition Order"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Calling functions before they're defined"]}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`main() {
    helper  # Error: helper not defined yet
}

helper() {
    echo "Helping..."
}

main  # Will fail`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Define all functions before calling them, or use function libraries"]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Function Design"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"One function = one responsibility"}),e.jsx("li",{children:"Keep functions small (under 50 lines)"}),e.jsx("li",{children:"Use descriptive function names"}),e.jsx("li",{children:"Document function purpose, parameters, returns"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Parameter Handling"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Validate parameters at function start"}),e.jsx("li",{children:"Use default values for optional parameters"}),e.jsx("li",{children:"Shift to handle multiple arguments"}),e.jsx("li",{children:"Return error codes for invalid input"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Error Handling"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `set -e` in functions for strict error checking"}),e.jsx("li",{children:"Return meaningful exit codes"}),e.jsx("li",{children:"Use `trap` for cleanup in long-running functions"}),e.jsx("li",{children:"Log errors before returning"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Avoid subshells in performance-critical functions"}),e.jsx("li",{children:"Use function libraries to avoid redefining functions"}),e.jsx("li",{children:"Consider command grouping for related operations"}),e.jsx("li",{children:"Profile functions with `time` command"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," When should you use `return` vs `echo` in a function? Consider the difference between exit status and output data."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."})," How variable scope changes when you use `local` keyword vs when you don't. What happens to variables with the same name in nested functions?"]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A function that uses global variables to use only local variables and parameters. How does this affect reusability and testing?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Always use `local` for function variables"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use `echo` for data, `return` for success/failure"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Validate parameters at function start"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Create function libraries for reusable code"})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_3.0s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Functions transform shell scripts from simple command sequences into professional software. In Barrackpore's production systems, we maintain libraries of functions that are reused across hundreds of scripts. Remember: ",e.jsx("strong",{children:"A good function should be testable in isolation"}),". If you can't test it separately, it's probably doing too much. Also, always include a usage comment at the top of each function - future maintainers (including yourself) will thank you."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:'When teaching Debangshu and Abhronila, I emphasize the "extract function" refactoring pattern. When you see the same code three times, extract it to a function. Start with simple extraction, then add parameters for flexibility, then handle edge cases. This incremental approach builds confidence. Also, practice creating "mock" functions for testing - functions that simulate external dependencies like database calls or file operations.'})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Production Wisdom"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"In the Shyamnagar deployment pipeline, we use function libraries extensively. Each library has a specific purpose: logging, configuration parsing, error handling, etc. We source these libraries at the beginning of scripts. This approach has reduced code duplication by 70% and made maintenance much easier. Pro tip: Create a `common.sh` library with functions you use across multiple projects in Naihati. It's a game-changer for productivity."})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
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

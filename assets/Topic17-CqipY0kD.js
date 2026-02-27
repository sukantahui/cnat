import{r as i,j as e}from"./index-meFSU1Lv.js";import{c as o}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const p=`#!/bin/bash
# File backup with exit status checking in Barrackpore

echo "=== Barrackpore Server Backup ==="
BACKUP_DIR="/backups/barrackpore_$(date +%Y%m%d)"

# Create backup directory
mkdir -p "$BACKUP_DIR"
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to create backup directory $BACKUP_DIR"
    exit 1
fi
echo "✓ Backup directory created: $BACKUP_DIR"

# Backup important files
echo "Backing up configuration files..."
cp -r /etc/nginx "$BACKUP_DIR/"
NGINX_EXIT=$?

cp -r /etc/mysql "$BACKUP_DIR/"
MYSQL_EXIT=$?

# Check each copy operation
if [ $NGINX_EXIT -ne 0 ]; then
    echo "WARNING: Failed to backup nginx configuration"
fi

if [ $MYSQL_EXIT -ne 0 ]; then
    echo "WARNING: Failed to backup mysql configuration"
fi

# Create archive
echo "Creating backup archive..."
tar -czf "$BACKUP_DIR.tar.gz" "$BACKUP_DIR"
TAR_EXIT=$?

if [ $TAR_EXIT -eq 0 ]; then
    echo "✓ Backup archive created: $BACKUP_DIR.tar.gz"
    
    # Clean up temporary directory
    rm -rf "$BACKUP_DIR"
    echo "✓ Cleaned up temporary files"
    
    # Verify archive
    if tar -tzf "$BACKUP_DIR.tar.gz" > /dev/null 2>&1; then
        echo "✓ Backup verified successfully"
        exit 0
    else
        echo "ERROR: Backup verification failed"
        exit 3
    fi
else
    echo "ERROR: Failed to create backup archive"
    exit 2
fi`,f=`#!/bin/bash
# Service monitoring with detailed error reporting in Shyamnagar

echo "=== Shyamnagar Service Monitoring ==="
LOG_FILE="/var/log/service_monitor.log"
SERVICES=("nginx" "mysql" "redis" "postgresql")

# Function to check service status
check_service() {
    local service="$1"
    
    systemctl is-active --quiet "$service"
    local status=$?
    
    case $status in
        0)
            echo "[$(date)] ✓ $service: ACTIVE" >> "$LOG_FILE"
            echo "  ✓ $service: Running"
            return 0
            ;;
        3)
            echo "[$(date)] ✗ $service: INACTIVE" >> "$LOG_FILE"
            echo "  ✗ $service: Not running"
            return 1
            ;;
        4)
            echo "[$(date)] ? $service: UNKNOWN" >> "$LOG_FILE"
            echo "  ? $service: Service not found"
            return 2
            ;;
        *)
            echo "[$(date)] ! $service: ERROR (code: $status)" >> "$LOG_FILE"
            echo "  ! $service: Error checking status"
            return 3
            ;;
    esac
}

# Main monitoring loop
overall_status=0
failed_services=()

echo "Checking services..."
for service in "\${SERVICES[@]}"; do
    check_service "$service"
    service_exit=$?
    
    if [ $service_exit -ne 0 ]; then
        overall_status=1
        failed_services+=("$service:$service_exit")
    fi
done

# Report results
echo -e "\\n=== Monitoring Summary ==="
if [ $overall_status -eq 0 ]; then
    echo "✓ All services are running normally"
    exit 0
else
    echo "✗ Some services have issues:"
    for failed in "\${failed_services[@]}"; do
        IFS=':' read -r service code <<< "$failed"
        echo "  - $service (exit code: $code)"
    done
    
    # Send alert (simulated)
    echo "Sending alert to Shyamnagar operations team..."
    
    # Return custom exit code based on severity
    if [ \${#failed_services[@]} -eq 1 ]; then
        exit 10  # Minor issue
    elif [ \${#failed_services[@]} -le 3 ]; then
        exit 20  # Moderate issue
    else
        exit 30  # Critical issue
    fi
fi`,b=`#!/bin/bash
# Processing pipeline with exit status tracking in Ichapur

echo "=== Ichapur Data Processing Pipeline ==="
DATA_FILE="/data/ichapur/sales.csv"
OUTPUT_FILE="/data/ichapur/processed/summary.txt"

# Enable pipefail to detect pipeline errors
set -o pipefail

echo "Processing data file: $DATA_FILE"

# Complex pipeline with multiple stages
cat "$DATA_FILE" \\
    | grep -v "^#" \\
    | awk -F, '{
        if(NF == 3) {
            product=$1
            quantity=$2
            price=$3
            total=quantity*price
            printf "%s,%.2f\\n", product, total
        }
    }' \\
    | sort -t, -k2 -nr \\
    | head -10 > "$OUTPUT_FILE"

# Capture the pipeline exit status
pipeline_exit=$?

# Check individual pipe status if needed
if [ \${#PIPESTATUS[@]} -gt 0 ]; then
    echo -e "\\nPipeline command statuses:"
    for i in "\${!PIPESTATUS[@]}"; do
        echo "  Stage $((i+1)): \${PIPESTATUS[$i]}"
    done
fi

if [ $pipeline_exit -eq 0 ]; then
    echo "✓ Data processing completed successfully"
    echo "Top 10 products by revenue:"
    cat "$OUTPUT_FILE"
    exit 0
else
    echo "✗ Data processing failed with exit code: $pipeline_exit"
    
    # Try to identify which stage failed
    for i in "\${!PIPESTATUS[@]}"; do
        if [ \${PIPESTATUS[$i]} -ne 0 ]; then
            case $i in
                0) echo "  Failed at: Reading input file" ;;
                1) echo "  Failed at: Filtering comments" ;;
                2) echo "  Failed at: Processing data (awk)" ;;
                3) echo "  Failed at: Sorting results" ;;
                4) echo "  Failed at: Limiting output" ;;
                *) echo "  Failed at: Unknown stage $i" ;;
            esac
        fi
    done
    
    exit $pipeline_exit
fi`,y=`#!/bin/bash
# Function-based error handling in Naihati projects

echo "=== Naihati Project Validation ==="

# Function with custom exit codes
validate_file() {
    local file="$1"
    
    if [ -z "$file" ]; then
        echo "ERROR: No file specified"
        return 1  # Missing parameter
    fi
    
    if [ ! -e "$file" ]; then
        echo "ERROR: File does not exist: $file"
        return 2  # File not found
    fi
    
    if [ ! -f "$file" ]; then
        echo "ERROR: Not a regular file: $file"
        return 3  # Not a file
    fi
    
    if [ ! -r "$file" ]; then
        echo "ERROR: File not readable: $file"
        return 4  # Permission denied
    fi
    
    if [ ! -s "$file" ]; then
        echo "ERROR: File is empty: $file"
        return 5  # Empty file
    fi
    
    echo "✓ File validation passed: $file"
    return 0  # Success
}

# Function to process validated file
process_file() {
    local file="$1"
    
    echo "Processing $file..."
    
    # Count lines
    local line_count=$(wc -l < "$file")
    echo "  Line count: $line_count"
    
    # Check for errors in content
    if grep -q "ERROR" "$file"; then
        echo "  WARNING: File contains ERROR markers"
        return 10  # Content warning
    fi
    
    # Process based on file type
    case "$file" in
        *.csv)
            echo "  Processing as CSV"
            # CSV processing logic
            return 0
            ;;
        *.json)
            echo "  Processing as JSON"
            # JSON processing logic
            return 0
            ;;
        *.txt)
            echo "  Processing as text"
            # Text processing logic
            return 0
            ;;
        *)
            echo "  WARNING: Unknown file type"
            return 20  # Unknown type
            ;;
    esac
}

# Main script
main() {
    local input_file="\${1:-/etc/hosts}"
    
    echo "Validating file: $input_file"
    validate_file "$input_file"
    local validate_exit=$?
    
    if [ $validate_exit -ne 0 ]; then
        echo "File validation failed with code: $validate_exit"
        return $validate_exit
    fi
    
    echo "File validation successful, proceeding to processing..."
    process_file "$input_file"
    local process_exit=$?
    
    if [ $process_exit -eq 0 ]; then
        echo "✓ File processing completed successfully"
        return 0
    elif [ $process_exit -eq 10 ]; then
        echo "⚠ File processed with warnings"
        return 0  # Treat warnings as success for now
    else
        echo "✗ File processing failed with code: $process_exit"
        return $process_exit
    fi
}

# Execute main function and capture exit status
main "$1"
final_exit=$?

echo -e "\\n=== Script Exit ==="
echo "Exit code: $final_exit"
exit $final_exit`,k=`#!/bin/bash
# Complex error handling patterns for production systems

echo "=== Advanced Exit Status Patterns ==="

# Pattern 1: Exit on error with cleanup
set -eE  # Exit on error, enable ERR trap

cleanup() {
    local exit_code=$?
    echo "Cleanup triggered with exit code: $exit_code"
    
    # Perform cleanup operations
    if [ -f "/tmp/tempfile.txt" ]; then
        echo "Removing temporary files..."
        rm -f "/tmp/tempfile.txt"
    fi
    
    # Log the error
    if [ $exit_code -ne 0 ]; then
        echo "[ERROR] Script failed at line: \${BASH_LINENO[0]}"
    fi
}

# Set up trap
trap cleanup EXIT

# Pattern 2: Retry logic with exponential backoff
retry_command() {
    local cmd="$1"
    local max_retries="\${2:-3}"
    local retry_delay="\${3:-1}"
    
    local attempt=1
    while [ $attempt -le $max_retries ]; do
        echo "Attempt $attempt/$max_retries: $cmd"
        
        if eval "$cmd"; then
            echo "✓ Command succeeded on attempt $attempt"
            return 0
        else
            local exit_code=$?
            echo "✗ Command failed with exit code: $exit_code"
            
            if [ $attempt -eq $max_retries ]; then
                echo "Maximum retries reached"
                return $exit_code
            fi
            
            echo "Waiting \${retry_delay}s before retry..."
            sleep $retry_delay
            
            # Exponential backoff
            retry_delay=$((retry_delay * 2))
            attempt=$((attempt + 1))
        fi
    done
}

# Pattern 3: Command grouping with exit status
echo -e "\\nTesting command grouping..."
{
    echo "Starting grouped commands..."
    date
    false  # This will fail
    echo "This won't execute"
} && {
    echo "Success block executed"
} || {
    local group_exit=$?
    echo "Failure block executed with exit: $group_exit"
}

# Pattern 4: Subshell exit status
echo -e "\\nTesting subshell exit status..."
(
    echo "Inside subshell..."
    exit 42
)
subshell_exit=$?
echo "Subshell exited with: $subshell_exit"

# Pattern 5: Multiple condition checks
echo -e "\\nTesting multiple conditions..."
check_all() {
    local all_ok=true
    
    # Check 1: Disk space
    df -h / | tail -1 | awk '{print $5}' | sed 's/%//' | {
        read usage
        if [ "$usage" -gt 90 ]; then
            echo "✗ Disk usage too high: \${usage}%"
            all_ok=false
        else
            echo "✓ Disk usage OK: \${usage}%"
        fi
    }
    
    # Check 2: Memory
    free -m | awk 'NR==2 {print $3/$2 * 100.0}' | {
        read usage
        if (( $(echo "$usage > 90" | bc -l) )); then
            echo "✗ Memory usage too high: \${usage}%"
            all_ok=false
        else
            echo "✓ Memory usage OK: \${usage}%"
        fi
    }
    
    # Check 3: Load average
    load=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | tr -d ',')
    if (( $(echo "$load > 5" | bc -l) )); then
        echo "✗ Load average too high: $load"
        all_ok=false
    else
        echo "✓ Load average OK: $load"
    fi
    
    if $all_ok; then
        return 0
    else
        return 1
    fi
}

check_all
system_status=$?

echo -e "\\n=== Final Status ==="
echo "System check exit code: $system_status"
exit $system_status`,j=`#!/bin/bash
# Debugging exit status issues in production scripts

echo "=== Debugging Exit Status Issues ==="

# Enable tracing
set -x

# Function that might fail
process_data() {
    local input="$1"
    
    echo "Processing: $input"
    
    # Simulate processing
    if [[ "$input" == "error" ]]; then
        echo "Simulating error..."
        return 1
    elif [[ "$input" == "fail" ]]; then
        echo "Simulating failure..."
        return 2
    fi
    
    echo "Processing successful"
    return 0
}

# Test case 1: Direct call
echo -e "\\n=== Test 1: Direct function call ==="
process_data "test"
echo "Exit status: $?"

# Test case 2: Error case
echo -e "\\n=== Test 2: Error case ==="
process_data "error"
error_status=$?
echo "Exit status: $error_status"

# Test case 3: In pipeline
echo -e "\\n=== Test 3: In pipeline ==="
process_data "test" | grep -q "success"
pipeline_status=$?
echo "Pipeline exit status: $pipeline_status"
echo "PIPESTATUS: \${PIPESTATUS[@]}"

# Test case 4: Command substitution
echo -e "\\n=== Test 4: Command substitution ==="
result=$(process_data "fail")
substitution_status=$?
echo "Command substitution exit: $substitution_status"
echo "Result: $result"

# Test case 5: Conditional execution
echo -e "\\n=== Test 5: Conditional execution ==="
process_data "test" && echo "Success branch" || echo "Failure branch"
process_data "error" && echo "Success branch" || echo "Failure branch"

# Test case 6: set -e behavior
echo -e "\\n=== Test 6: Testing set -e ==="
set -e
process_data "test"
echo "This executes (success)"
process_data "error"  # This should exit
echo "This should not execute"

# Disable tracing
set +x

echo -e "\\n=== Debugging Tips ==="
echo "1. Use 'set -x' to trace execution"
echo "2. Check \\$? immediately after command"
echo "3. Use 'set -o pipefail' for pipelines"
echo "4. Check PIPESTATUS array for pipeline components"
echo "5. Save exit status to variable if needed later"`,_=()=>{const[l,d]=i.useState("success"),[x,h]=i.useState(""),[c,m]=i.useState(0),g=[{code:0,name:"Success",description:"Command completed successfully",color:"from-green-500 to-emerald-600",icon:"✓"},{code:1,name:"General Error",description:"Catchall for general errors",color:"from-yellow-500 to-amber-600",icon:"⚠"},{code:2,name:"Misuse",description:"Misuse of shell builtins",color:"from-orange-500 to-red-600",icon:"✗"},{code:126,name:"Cannot Execute",description:"Command invoked cannot execute",color:"from-red-500 to-pink-600",icon:"🚫"},{code:127,name:"Not Found",description:"Command not found",color:"from-purple-500 to-indigo-600",icon:"🔍"},{code:130,name:"Terminated",description:"Script terminated by Control-C",color:"from-blue-500 to-cyan-600",icon:"⏹"}],u=[{range:"0",meaning:"Success",example:"ls /tmp"},{range:"1-2",meaning:"General error / Shell builtin misuse",example:"false"},{range:"126",meaning:"Command invoked cannot execute",example:"/dev/null"},{range:"127",meaning:"Command not found",example:"nonexistent_command"},{range:"128",meaning:"Invalid exit argument",example:"exit -1"},{range:"128+N",meaning:"Fatal error signal N",example:"kill -9 $$"},{range:"130",meaning:"Script terminated by Control-C",example:"Press Ctrl+C"},{range:"255",meaning:"Exit status out of range",example:"exit 256"}],r=t=>{let n="",s=0;switch(t){case"success":n=`Command executed successfully
File listed successfully`,s=0;break;case"notfound":n="bash: nonexistent_command: command not found",s=127;break;case"permission":n="bash: /root/file.txt: Permission denied",s=126;break;case"syntax":n="bash: syntax error near unexpected token '}'",s=2;break;default:n="Ready to test commands...",s=0}h(n),m(s),d(t)};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:"Exit Status and Error Codes ($?)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Master the art of error handling in shell scripting. Understand how commands communicate success or failure, learn to interpret exit codes, and build robust scripts that properly handle errors using the special `$?` variable."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Exit Status Fundamentals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"What is $?"}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("code",{className:"font-mono text-blue-600 dark:text-blue-400",children:"$?"})," is a special shell variable that contains the ",e.jsx("strong",{children:"exit status"})," of the last executed command."]})}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Range: 0 to 255 (8-bit integer)"}),e.jsx("li",{children:"0 always means success"}),e.jsx("li",{children:"Non-zero means failure (usually)"}),e.jsx("li",{children:"Updated after every command execution"}),e.jsx("li",{children:"Accessible but read-only"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Interactive Demo"}),e.jsxs("div",{className:"p-4 bg-gray-900 text-gray-100 rounded-lg font-mono",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"})," ls /tmp"]}),e.jsx("div",{className:"mb-2 text-gray-300",children:"file1.txt  file2.log  directory"}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"})," echo $?"]}),e.jsx("div",{className:"text-blue-400",children:"0"})]}),e.jsxs("div",{className:"p-4 bg-gray-900 text-gray-100 rounded-lg font-mono",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"})," ls /nonexistent"]}),e.jsx("div",{className:"mb-2 text-red-400",children:"ls: cannot access '/nonexistent': No such file or directory"}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"})," echo $?"]}),e.jsx("div",{className:"text-red-400",children:"2"})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Exit Code Categories"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",children:g.map((t,n)=>e.jsxs("button",{onClick:()=>r(t.name.toLowerCase()),className:o("p-4 rounded-xl transition-all duration-300 transform hover:scale-105",l===t.name.toLowerCase()?`bg-gradient-to-r ${t.color} text-white shadow-lg`:"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${n*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:o("w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl",l===t.name.toLowerCase()?"bg-white/30":"bg-white dark:bg-gray-600"),children:t.icon}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-bold text-lg",children:["Exit ",t.code]}),e.jsx("div",{className:"text-sm",children:t.name})]})]}),e.jsx("div",{className:"text-sm opacity-90",children:t.description})]},t.code))}),e.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-4",children:"Command Exit Status Tester"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>r("success"),className:"flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300",children:"Test Success"}),e.jsx("button",{onClick:()=>r("notfound"),className:"flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300",children:"Test Not Found"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>r("permission"),className:"flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300",children:"Test Permission"}),e.jsx("button",{onClick:()=>r("syntax"),className:"flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300",children:"Test Syntax Error"})]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Command Output:"}),e.jsx("pre",{className:"text-gray-100 whitespace-pre-wrap font-mono text-sm",children:x}),e.jsx("div",{className:"mt-4 pt-4 border-t border-gray-700",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-400",children:"Exit Status:"}),e.jsxs("span",{className:o("font-bold text-xl",c===0?"text-green-400":"text-red-400"),children:["$? = ",c]})]})})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Common Exit Codes Reference"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Exit Code"}),e.jsx("th",{className:"px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Meaning"}),e.jsx("th",{className:"px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Example"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:u.map((t,n)=>e.jsxs("tr",{className:"hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200",style:{animationDelay:`${n*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("code",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono",children:t.range})}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:t.meaning}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("code",{className:"text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:t.example})})]},n))})]})}),e.jsxs("div",{className:"mt-6 p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Signal Exit Codes (128+N)"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[1,2,3,9,15].map(t=>e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-800 rounded",children:[e.jsxs("div",{className:"font-mono text-sm",children:["Exit ",128+t]}),e.jsxs("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:["Signal ",t," (",t===9?"KILL":t===15?"TERM":`SIG${t}`,")"]})]},t))})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Basic Exit Status Checking"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Foundation"})]}),e.jsx(a,{fileModule:p,title:"File backup with exit status checking in Barrackpore",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs to create a backup script that checks if each command succeeds before proceeding. Proper exit status handling prevents partial backups."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Comprehensive Error Handling"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"Production Ready"})]}),e.jsx(a,{fileModule:f,title:"Service monitoring with detailed error reporting in Shyamnagar",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina monitors services in Shyamnagar data center. Different exit codes provide specific information about what went wrong."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Pipeline Exit Status"}),e.jsx("span",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:"Advanced"})]}),e.jsx(a,{fileModule:b,title:"Processing pipeline with exit status tracking in Ichapur",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Abhronila processes data through pipelines in Ichapur. Understanding which command in a pipeline failed is crucial for debugging."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Techniques"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Function Exit Status"}),e.jsx(a,{fileModule:y,title:"Function-based error handling in Naihati projects",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Functions can return exit statuses using the `return` command. This allows for modular error handling and reusable validation logic."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Advanced Exit Status Patterns"}),e.jsx(a,{fileModule:k,title:"Complex error handling patterns for production systems",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Note:"})," Advanced patterns like `PIPESTATUS` and conditional execution provide fine-grained control over error handling in complex scripts."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Exit Status in Conditional Execution"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"AND List (&&)"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`command1 && command2
# Run command2 only if command1 succeeds (exit 0)`}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/20 rounded",children:[e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Example:"})," Create directory and enter it"]}),e.jsx("code",{className:"text-xs text-gray-600 dark:text-gray-400 block mt-1",children:"mkdir /tmp/test && cd /tmp/test"})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),"OR List (||)"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`command1 || command2
# Run command2 only if command1 fails (non-zero exit)`}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 rounded",children:[e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Example:"})," Try apt, fall back to yum"]}),e.jsx("code",{className:"text-xs text-gray-600 dark:text-gray-400 block mt-1",children:"apt update || yum update"})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Combined Conditional Execution"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`# Complex logic with exit status
make && echo "Build successful" || {
    echo "Build failed"
    exit 1
}`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"This pattern executes the success message only if `make` succeeds, otherwise executes the error block and exits."})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Forgetting to Check $? Immediately"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," $? is overwritten by the next command"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`command_that_might_fail
echo "Doing other things..."
if [ $? -eq 0 ]; then  # Checks echo's exit status!
    echo "Success"
fi`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Save $? immediately or use conditional execution"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`command_that_might_fail
exit_status=$?
echo "Doing other things..."
if [ $exit_status -eq 0 ]; then
    echo "Success"
fi`})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Misunderstanding Pipeline Exit Status"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," $? only captures last command in pipeline"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`grep "error" file.txt | wc -l
if [ $? -eq 0 ]; then
    echo "Found errors"  # Actually checks wc's exit status!
fi`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Use `set -o pipefail` or check `PIPESTATUS`"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`set -o pipefail
grep "error" file.txt | wc -l
if [ $? -eq 0 ]; then
    echo "Pipeline successful"
fi`})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Ignoring Non-Zero Success Codes"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"}),' Some commands use non-zero for "success with conditions"']}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`grep "pattern" file.txt
if [ $? -ne 0 ]; then
    echo "Pattern not found"  # grep returns 1 for "not found", not error
fi`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Understand each command's exit code semantics"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`grep "pattern" file.txt
case $? in
    0) echo "Pattern found" ;;
    1) echo "Pattern not found" ;;
    *) echo "Error occurred" ;;
esac`})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Error Handling"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `set -e` to exit on error (with caution)"}),e.jsx("li",{children:"Use `set -o pipefail` for pipeline error detection"}),e.jsx("li",{children:"Always check $? after critical commands"}),e.jsx("li",{children:"Provide meaningful error messages"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Script Design"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Define clear exit code conventions for your script"}),e.jsx("li",{children:"Document expected exit codes in comments"}),e.jsx("li",{children:"Use functions to encapsulate error-prone operations"}),e.jsx("li",{children:"Test with both success and failure scenarios"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Debugging"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `set -x` to trace execution"}),e.jsx("li",{children:"Log exit statuses for debugging"}),e.jsx("li",{children:"Test edge cases and error conditions"}),e.jsx("li",{children:"Check `PIPESTATUS` for pipeline debugging"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Production Ready"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Always handle errors gracefully"}),e.jsx("li",{children:"Clean up resources on exit (use traps)"}),e.jsx("li",{children:"Return appropriate exit codes to calling processes"}),e.jsx("li",{children:"Consider using `trap` for exit cleanup"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Debugging Exit Status Issues"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Debugging Script with set -x"}),e.jsx(a,{fileModule:j,title:"Debugging exit status issues in production scripts",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Use `set -x` to trace command execution and see exit statuses in real-time. This is invaluable for debugging complex error handling logic."]})})]})})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," When should you use `set -e` in a script versus manually checking each command's exit status? Consider maintenance vs. safety trade-offs."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."}),' The difference between `command && echo "Success"` and `if command; then echo "Success"; fi`. Which is more readable? Which handles errors better?']})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A script that uses many `if [ $? -eq 0 ]` checks to use conditional execution operators (`&&` and `||`). How does this affect readability and maintainability?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"0 = success, non-zero = failure (usually)"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"$? is overwritten after each command"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use `set -o pipefail` for pipeline error detection"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Save $? immediately if you need it later"})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_3.0s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Exit status handling is what separates amateur scripts from production-ready systems. In Barrackpore's mission-critical systems, we log every non-zero exit with context. Remember: ",e.jsx("strong",{children:"Every command tells a story through its exit code"}),". Learn to listen. Also, `set -e` is powerful but dangerous - it can mask errors if not used with `set -o errtrace` and proper trap handlers. In Shyamnagar, we use a combination of `set -euo pipefail` and explicit error checking for maximum robustness."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:'When teaching Debangshu and Abhronila, I emphasize the "check early, check often" principle. Create scripts that deliberately fail at different points and observe the exit codes. Practice debugging with `set -x` to see the flow. Also, teach them to write functions that return meaningful exit codes - this builds good habits for larger projects. A useful exercise: rewrite a script that ignores errors to one that handles them gracefully.'})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Production Wisdom"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"In the Naihati deployment system, we have a standard: scripts must document their exit codes in the header comment. We also use a wrapper script that interprets exit codes and sends appropriate alerts. For pipelines, we always use `set -o pipefail` and check `PIPESTATUS`. Pro tip: Create a function `log_and_exit()` that logs the error context and exits with a meaningful code. This pattern has saved us countless debugging hours across Ichapur projects."})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
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
            `})]})};export{_ as default};

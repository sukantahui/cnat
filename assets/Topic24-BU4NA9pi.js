import{r as a,j as e}from"./index-meFSU1Lv.js";import{c as r}from"./clsx-B-dksMZM.js";import{S as l}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const n=`#!/bin/bash\r
# debug_example1.sh - Basic set -x demonstration\r
# Shows how set -x prints each command before execution\r
\r
echo "Starting backup process..."\r
\r
# Enable debug mode\r
set -x\r
\r
USER="abhronila"\r
echo "Backing up files for user: $USER"\r
\r
BACKUP_DIR="/home/$USER/backups"\r
echo "Backup completed at: $(date)"\r
\r
# Turn off debug mode\r
set +x\r
\r
echo "Backup process finished."`,i=`#!/bin/bash\r
# debug_example2.sh - set -e demonstration\r
# Script exits immediately when any command fails\r
\r
set -e  # Exit on error\r
\r
echo "Processing file: data1.txt"\r
# Simulate successful processing\r
sleep 0.1\r
echo "File processed successfully"\r
\r
echo "Processing file: data2.txt"\r
# Another successful operation\r
sleep 0.1\r
echo "File processed successfully"\r
\r
echo "Processing file: /nonexistent"\r
# This command will fail\r
ls /nonexistent\r
\r
# This line will never execute because of set -e\r
echo "This message will not appear"\r
\r
# Note: The script exits with the exit code of the failed command`,d=`#!/bin/bash\r
# debug_example3.sh - Combined set -ex\r
# Shows both trace and exit-on-error behavior\r
\r
set -ex  # Enable both trace mode and exit on error\r
\r
# Function to process user data\r
process_user() {\r
    local username="$1"\r
    local home_dir="/home/$username"\r
    \r
    echo "Processing user: $username"\r
    \r
    # Check if user home exists\r
    if [ ! -d "$home_dir" ]; then\r
        echo "Error: Home directory not found for $username"\r
        return 1\r
    fi\r
    \r
    # Count files in user's home\r
    file_count=$(find "$home_dir" -type f -name "*.txt" 2>/dev/null | wc -l)\r
    echo "Found $file_count text files"\r
    \r
    return 0\r
}\r
\r
# Main script\r
echo "Starting user data processing..."\r
\r
# Process multiple users\r
process_user "swadeep"\r
process_user "tuhina"\r
\r
# This will fail and exit the script\r
process_user "nonexistentuser"\r
\r
echo "Processing complete"  # This won't execute`,c=`#!/bin/bash\r
# debug_example4.sh - Script to test with bash -x\r
# Run with: bash -x debug_example4.sh <username>\r
\r
# Check if username is provided\r
if [ $# -eq 0 ]; then\r
    echo "Usage: $0 <username>"\r
    echo "Example: $0 swadeep"\r
    exit 1\r
fi\r
\r
USERNAME="$1"\r
BASE_DIR="/tmp/backup_test"\r
\r
echo "Starting backup simulation for user: $USERNAME"\r
\r
# Create backup directory\r
mkdir -p "$BASE_DIR/$USERNAME"\r
\r
# Create some test files\r
for i in {1..3}; do\r
    echo "Test file $i for $USERNAME" > "$BASE_DIR/$USERNAME/file$i.txt"\r
done\r
\r
# List created files\r
echo "Created files:"\r
ls -la "$BASE_DIR/$USERNAME/"\r
\r
# Calculate total size\r
total_size=$(du -sh "$BASE_DIR/$USERNAME" | cut -f1)\r
echo "Total backup size: $total_size"\r
\r
# Cleanup (comment out for debugging)\r
# rm -rf "$BASE_DIR/$USERNAME"\r
\r
echo "Backup simulation completed."`,o=`#!/bin/bash\r
# debug_example5.sh - Custom debug function with levels\r
# Shows professional debugging approach\r
\r
# Debug levels\r
DEBUG_LEVEL=\${DEBUG_LEVEL:-0}  # 0=off, 1=error, 2=warning, 3=info, 4=debug\r
\r
# Custom debug function\r
debug() {\r
    local level="$1"\r
    local message="$2"\r
    \r
    if [ "$DEBUG_LEVEL" -ge "$level" ]; then\r
        case "$level" in\r
            1) prefix="[ERROR] " ;;\r
            2) prefix="[WARN]  " ;;\r
            3) prefix="[INFO]  " ;;\r
            4) prefix="[DEBUG] " ;;\r
            *) prefix="" ;;\r
        esac\r
        \r
        # Print with timestamp and script name\r
        echo "$(date '+%Y-%m-%d %H:%M:%S') \${prefix}\${BASH_SOURCE[0]##*/}:\${BASH_LINENO[0]} - $message" >&2\r
    fi\r
}\r
\r
# Main processing function\r
process_data() {\r
    local input_file="$1"\r
    local output_file="$2"\r
    \r
    debug 3 "Starting to process $input_file"\r
    \r
    # Check if input file exists\r
    if [ ! -f "$input_file" ]; then\r
        debug 1 "Input file not found: $input_file"\r
        return 1\r
    fi\r
    \r
    # Count lines in input file\r
    line_count=$(wc -l < "$input_file")\r
    debug 4 "File has $line_count lines"\r
    \r
    # Process each line\r
    local processed=0\r
    while IFS= read -r line; do\r
        # Skip empty lines\r
        if [ -z "$line" ]; then\r
            debug 4 "Skipping empty line"\r
            continue\r
        fi\r
        \r
        # Process the line (example: convert to uppercase)\r
        echo "$line" | tr '[:lower:]' '[:upper:]' >> "$output_file"\r
        processed=$((processed + 1))\r
        \r
        debug 4 "Processed line: $line"\r
    done < "$input_file"\r
    \r
    debug 3 "Processed $processed lines from $input_file"\r
    return 0\r
}\r
\r
# Main script\r
debug 3 "Script started with DEBUG_LEVEL=$DEBUG_LEVEL"\r
\r
# Create test data\r
TEST_INPUT="/tmp/test_input.txt"\r
TEST_OUTPUT="/tmp/test_output.txt"\r
\r
cat > "$TEST_INPUT" << EOF\r
Hello from Barrackpore\r
Greetings from Shyamnagar\r
Welcome from Ichapur\r
EOF\r
\r
debug 4 "Created test input file: $TEST_INPUT"\r
\r
# Process the data\r
if process_data "$TEST_INPUT" "$TEST_OUTPUT"; then\r
    debug 3 "Data processing completed successfully"\r
    echo "Output file contents:"\r
    cat "$TEST_OUTPUT"\r
else\r
    debug 1 "Data processing failed"\r
    exit 1\r
fi\r
\r
# Cleanup\r
rm -f "$TEST_INPUT" "$TEST_OUTPUT"\r
debug 3 "Cleanup completed"\r
\r
debug 3 "Script finished"`;function p(){const[s,t]=a.useState(!1);return a.useEffect(()=>{t(!0)},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 md:p-8 dark",children:[e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16","transform transition-all duration-700",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300",children:"Topic 24: Debugging Techniques"}),e.jsx("p",{className:"text-xl text-gray-300 mb-6",children:"Mastering the art of troubleshooting shell scripts with professional debugging tools"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[e.jsx("span",{className:"px-4 py-2 bg-blue-900/50 rounded-full text-blue-300 border border-blue-700/50",children:"set -x"}),e.jsx("span",{className:"px-4 py-2 bg-purple-900/50 rounded-full text-purple-300 border border-purple-700/50",children:"set -e"}),e.jsx("span",{className:"px-4 py-2 bg-green-900/50 rounded-full text-green-300 border border-green-700/50",children:"bash -x"}),e.jsx("span",{className:"px-4 py-2 bg-red-900/50 rounded-full text-red-300 border border-red-700/50",children:"Debug Traps"})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-150 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),"Why Debugging Matters"]}),e.jsxs("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed",children:["Debugging is the process of finding and fixing errors in your shell scripts. Even experienced developers like ",e.jsx("span",{className:"text-cyan-300",children:"Debangshu"})," from Barrackpore spend significant time debugging. A script that works on your machine might fail on",e.jsx("span",{className:"text-cyan-300",children:"Tuhina's"})," system in Shyamnagar due to different environments."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-300",children:"The Debugging Mindset"}),e.jsxs("ul",{className:"space-y-2 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Assume nothing works until proven"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Isolate the problem step by step"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Read error messages carefully"})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-purple-300",children:"Common Debugging Scenarios"}),e.jsxs("ul",{className:"space-y-2 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{children:"Variable not expanding as expected"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{children:"Script exits without error message"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{children:"Permission or path issues"})]})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"set -x: Print Each Command Before Execution"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-gray-200",children:"Concept Explanation"}),e.jsxs("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed",children:["When you add ",e.jsx("code",{className:"text-blue-300",children:"set -x"})," (or ",e.jsx("code",{className:"text-blue-300",children:"set -o xtrace"}),") at the beginning of your script, Bash will print each command to stderr before executing it. This is invaluable for understanding the flow of execution and seeing exactly what's happening."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-green-300",children:"How It Works"}),e.jsxs("ul",{className:"space-y-3 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Shows expanded variables (after substitution)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Reveals actual command being executed"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:["Prefixes each line with ",e.jsx("code",{className:"text-green-300",children:"+"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:["Can be turned off with ",e.jsx("code",{className:"text-green-300",children:"set +x"})]})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-amber-300",children:"Real-World Use Case"}),e.jsxs("p",{className:"text-gray-300 mb-3",children:["Imagine ",e.jsx("span",{className:"text-amber-300",children:"Swadeep"})," is debugging a backup script that's failing only when run from cron. With ",e.jsx("code",{className:"text-amber-300",children:"set -x"}),", he can see:"]}),e.jsxs("ul",{className:"text-gray-300 space-y-2",children:[e.jsx("li",{children:"• What paths are being used"}),e.jsx("li",{children:"• How variables expand in different environments"}),e.jsx("li",{children:"• Which specific command fails"})]})]})]})]}),e.jsx(l,{fileModule:n,title:"Basic Debug Example with set -x",highlightLines:[2,3,4,5,6,7]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2 text-blue-300",children:"Expected Output:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/50 p-4 rounded",children:`+ echo 'Starting backup process...'
Starting backup process...
+ USER=abhronila
+ echo 'Backing up files for user: abhronila'
Backing up files for user: abhronila
+ BACKUP_DIR=/home/abhronila/backups
+ date
+ echo 'Backup completed at: Mon Dec 12 14:30:45 IST 2023'
Backup completed at: Mon Dec 12 14:30:45 IST 2023`})]}),e.jsxs("div",{className:"mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/30",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2 text-purple-300",children:"Hint Section"}),e.jsxs("p",{className:"text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Think about:"})," Why does ",e.jsx("code",{className:"text-purple-300",children:"set -x"}),"show the command ",e.jsx("em",{children:"after"})," variable expansion? Try running the same script without",e.jsx("code",{className:"text-purple-300",children:"set -x"})," and compare the outputs."]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-450 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-red-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),"set -e: Exit Immediately on Error"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-gray-200",children:"Concept Explanation"}),e.jsxs("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed",children:["The ",e.jsx("code",{className:"text-red-300",children:"set -e"})," option (or ",e.jsx("code",{className:"text-red-300",children:"set -o errexit"}),") tells Bash to exit immediately if any command exits with a non-zero status. This prevents scripts from continuing after an error, which could cause more damage."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-green-300",children:"When to Use set -e"}),e.jsxs("ul",{className:"space-y-3 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Production scripts where failure should stop execution"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Critical operations like database updates"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"When you want to know the first point of failure"})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-amber-300",children:"When NOT to Use set -e"}),e.jsxs("ul",{className:"space-y-3 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Interactive scripts where you want to handle errors manually"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"When using commands that may fail intentionally"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"During cleanup operations in traps"})]})]})]})]})]}),e.jsx(l,{fileModule:i,title:"set -e: Exit on Error Example",highlightLines:[2,3,4,5,6,7,8,9]}),e.jsxs("div",{className:"mt-6 p-4 bg-red-900/20 rounded-lg border border-red-700/30",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2 text-red-300",children:"Expected Behavior:"}),e.jsxs("p",{className:"text-gray-300 mb-2",children:["The script will exit at line 6 because ",e.jsx("code",{className:"text-red-300",children:"ls /nonexistent"}),"returns a non-zero exit code. Line 7 will never execute."]}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/50 p-4 rounded",children:`Processing file: data1.txt
File processed successfully
Processing file: data2.txt
File processed successfully
Processing file: /nonexistent
ls: cannot access '/nonexistent': No such file or directory
[Script exits here with code 2]`})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-600 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",clipRule:"evenodd"})}),"Combining Debug Options: set -ex"]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed",children:["Professional shell scripters often combine debugging options. The most common combination is",e.jsx("code",{className:"text-green-300",children:"set -ex"}),", which enables both trace mode and exit-on-error. This gives you the best of both worlds: detailed execution tracing and automatic error detection."]}),e.jsx(l,{fileModule:d,title:"Combined set -ex Example",highlightLines:[2,4,5,6,7,8]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-cyan-300",children:"Professional Tip"}),e.jsxs("p",{className:"text-gray-300",children:["Use ",e.jsx("code",{className:"text-cyan-300",children:"set -euxo pipefail"})," for maximum safety:"]}),e.jsxs("ul",{className:"mt-3 space-y-2 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("code",{className:"text-cyan-300",children:"-e"}),": Exit on error"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("code",{className:"text-cyan-300",children:"-u"}),": Exit on undefined variables"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("code",{className:"text-cyan-300",children:"-x"}),": Print commands"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"}),e.jsxs("span",{children:[e.jsx("code",{className:"text-cyan-300",children:"-o pipefail"}),": Catch pipe failures"]})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-amber-300",children:"Temporary Debugging"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Sometimes you only want debugging for specific sections:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/70 p-3 rounded",children:`#!/bin/bash
# Normal execution here
set -x  # Start debugging
# Debug this section
set +x  # Stop debugging
# Continue normally`})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-750 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",clipRule:"evenodd"})}),"bash -x: Debugging Without Modifying Scripts"]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed",children:["You can debug scripts without editing them by using ",e.jsx("code",{className:"text-yellow-300",children:"bash -x"}),"on the command line. This is especially useful when:"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-green-300",children:"Command Line Debugging"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/70 p-4 rounded",children:`# Debug entire script
bash -x script.sh

# Debug specific script with arguments
bash -x backup.sh /home/tuhina/data

# Debug from stdin
bash -x << 'EOF'
echo "Hello from stdin"
ls /tmp
EOF

# Combine with other options
bash -ex script.sh  # -e for exit on error too`})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-blue-300",children:"Practical Example"}),e.jsxs("p",{className:"text-gray-300 mb-3",children:["When ",e.jsx("span",{className:"text-blue-300",children:"Abhronila"})," gets a script from her colleague in Ichapur that's failing, she can debug it without risking changes:"]}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/70 p-4 rounded",children:`$ bash -x problematic_script.sh
+ check_dependencies
+ which docker
+ echo 'Docker found at: /usr/bin/docker'
Docker found at: /usr/bin/docker
+ backup_files
+ tar czf backup.tar.gz /important/data
tar: /important/data: Cannot stat: No such file or directory
[Script fails here]`})]})]}),e.jsx(l,{fileModule:c,title:"Script to Debug with bash -x",highlightLines:[]}),e.jsxs("div",{className:"mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2 text-yellow-300",children:"Exercise:"}),e.jsxs("p",{className:"text-gray-300",children:["Run this script with: ",e.jsx("code",{className:"text-yellow-300",children:"bash -x topic24_files/debug_example4.sh Swadeep"}),e.jsx("br",{}),e.jsx("span",{className:"font-semibold",children:"Observe carefully:"})," How does the variable ",e.jsx("code",{className:"text-yellow-300",children:"$1"}),"expand in the debug output?"]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-900 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zm4.657 2.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm3 6v-1h4v1a2 2 0 11-4 0zm4-2c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})}),"Advanced Debugging Techniques"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(l,{fileModule:o,title:"Custom Debug Function with Levels",highlightLines:[3,4,5,6,7,8,10,11,12,13,16,17,22,23]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-green-300",children:"Debug Function Benefits"}),e.jsxs("ul",{className:"space-y-3 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Can be turned on/off with environment variable"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Adds timestamps and script name automatically"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Can write to log file instead of stderr"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:"Supports different debug levels (INFO, DEBUG, ERROR)"})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-blue-300",children:"Using PS4 for Custom Debug Output"}),e.jsxs("p",{className:"text-gray-300 mb-3",children:["The ",e.jsx("code",{className:"text-blue-300",children:"PS4"})," variable controls what's printed before each debug line when using ",e.jsx("code",{className:"text-blue-300",children:"set -x"}),":"]}),e.jsx("pre",{className:"text-sm text-gray-300 bg-gray-900/70 p-3 rounded",children:"# Show line numbers and function names\nexport PS4='+ ${BASH_SOURCE}:${LINENO}: ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'\n\n# Show timestamp and script name\nexport PS4='+ $(date \"+%T\"): [${BASH_SOURCE##*/}:${LINENO}] '"})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-red-900/10 backdrop-blur-sm border border-red-700/30","transform transition-all duration-700 delay-1050",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-red-300",children:"Common Pitfalls & Mistakes"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 bg-red-900/20 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-red-300",children:"Beginner Mistakes"}),e.jsxs("ul",{className:"space-y-4 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Forgetting set +x:"})," Leaving debug mode on in production"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Overusing set -e:"})," Breaking scripts that handle errors intentionally"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Ignoring pipefail:"})," Missing errors in pipelines like",e.jsx("code",{className:"text-red-300 mx-1",children:"cmd1 | cmd2 | cmd3"})]})]})]})]}),e.jsxs("div",{className:"p-6 bg-red-900/20 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-amber-300",children:"Conceptual Misunderstandings"}),e.jsxs("ul",{className:"space-y-4 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"!"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"set -x shows commands before execution:"}),"It shows the command that ",e.jsx("em",{children:"will be"})," executed, not what you typed"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"!"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Debug output goes to stderr:"}),"This is why you can redirect normal output separately"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-sm font-bold",children:"!"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"bash -x works on any script:"}),"Even scripts without shebang or permission issues"]})]})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-green-900/10 backdrop-blur-sm border border-green-700/30","transform transition-all duration-700 delay-1200",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-green-300",children:"Best Practices"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-green-300",children:"Coding Standards"}),e.jsxs("ul",{className:"space-y-4 text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsxs("span",{children:["Always start production scripts with ",e.jsx("code",{className:"text-green-300",children:"set -euo pipefail"})]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsxs("span",{children:["Use a debug flag: ",e.jsx("code",{className:"text-green-300",children:"DEBUG=${DEBUG:-false}"})]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-green-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Log to both console and file in production"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-semibold mb-4 text-blue-300",children:"Debugging Workflow"}),e.jsxs("ol",{className:"space-y-4 text-gray-300 list-decimal pl-5",children:[e.jsx("li",{children:"First, run script normally to see the error"}),e.jsxs("li",{children:["Add ",e.jsx("code",{className:"text-blue-300",children:"set -x"})," at the top"]}),e.jsxs("li",{children:["Run with ",e.jsx("code",{className:"text-blue-300",children:"bash -x script.sh"})," if needed"]}),e.jsx("li",{children:"Isolate the failing command"}),e.jsx("li",{children:"Test the command manually"}),e.jsx("li",{children:"Fix and remove debug code before commit"})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-700/30","transform transition-all duration-700 delay-1350 hover:border-blue-500/50",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xl font-bold",children:"SH"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-300",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4 text-gray-300",children:[e.jsxs("p",{className:"text-lg",children:["Debugging is not just about finding errors—it's about understanding how your code actually runs versus how you think it runs. I've seen students like ",e.jsx("span",{className:"text-blue-300",children:"Swadeep"})," from Naihati spend hours on problems that",e.jsx("code",{className:"text-blue-300",children:"set -x"})," would solve in minutes."]}),e.jsxs("div",{className:"p-4 bg-blue-900/30 rounded-lg border border-blue-700/30",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2 text-blue-300",children:"Remember This:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),e.jsxs("span",{children:[e.jsx("code",{className:"text-yellow-300",children:"set -x"})," shows the command ",e.jsx("em",{children:"after"})," all expansions and substitutions"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-yellow-300",children:"bash -n script.sh"})," to check syntax without executing"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),e.jsx("span",{children:"Always test scripts as the user who will run them (cron runs as different user!)"})]})]})]}),e.jsxs("p",{className:"text-lg",children:["When ",e.jsx("span",{className:"text-purple-300",children:"Tuhina"})," submits her assignment from Shyamnagar, I always check if she's used proper debugging techniques. A well-debugged script tells me the student understands not just the syntax, but the execution flow."]}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-4 border-t border-blue-700/30",children:[e.jsxs("div",{className:"px-4 py-2 bg-gray-800/50 rounded-lg",children:[e.jsx("span",{className:"text-gray-400",children:"Email: "}),e.jsx("span",{className:"text-blue-300",children:"sukantahui@codernaccotax.co.in"})]}),e.jsxs("div",{className:"px-4 py-2 bg-gray-800/50 rounded-lg",children:[e.jsx("span",{className:"text-gray-400",children:"Mobile: "}),e.jsx("span",{className:"text-blue-300",children:"7003756860"})]})]})]})]}),e.jsxs("section",{className:r("max-w-6xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50","transform transition-all duration-700 delay-1500",s?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-cyan-300",children:"What to Remember"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto",children:e.jsx("span",{className:"text-2xl",children:"📝"})}),e.jsx("h4",{className:"text-xl font-semibold mb-3 text-center text-green-300",children:"Basic Commands"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 text-center",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-green-300",children:"set -x"})," for trace mode"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-green-300",children:"set -e"})," to exit on error"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-green-300",children:"bash -x"})," for external debugging"]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto",children:e.jsx("span",{className:"text-2xl",children:"🔧"})}),e.jsx("h4",{className:"text-xl font-semibold mb-3 text-center text-blue-300",children:"Professional Setup"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 text-center",children:[e.jsx("li",{children:e.jsx("code",{className:"text-blue-300",children:"set -euxo pipefail"})}),e.jsx("li",{children:"Custom debug functions"}),e.jsx("li",{children:"Proper error logging"})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto",children:e.jsx("span",{className:"text-2xl",children:"🚨"})}),e.jsx("h4",{className:"text-xl font-semibold mb-3 text-center text-purple-300",children:"Common Pitfalls"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 text-center",children:[e.jsx("li",{children:"Debug output to stderr"}),e.jsx("li",{children:"Test as actual user"}),e.jsx("li",{children:"Remove debug in production"})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gray-900/30 rounded-xl border border-gray-700/50",children:[e.jsx("h4",{className:"text-xl font-semibold mb-3 text-amber-300",children:"Next Steps:"}),e.jsxs("p",{className:"text-gray-300",children:["Practice debugging the scripts you've written earlier. Try breaking them intentionally and using these techniques to find the problems. Remember what ",e.jsx("span",{className:"text-amber-300",children:"Debangshu"}),"learned: The best debugger is the one that helps you understand, not just fix."]})]})]})]})}export{p as default};

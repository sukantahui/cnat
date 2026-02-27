import{r as o,j as e}from"./index-meFSU1Lv.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const p=`#!/bin/bash
# Log file management in Barrackpore server

echo "=== Barrackpore Server Log Management ==="
LOG_DIR="/var/log/barrackpore"
TIMESTAMP=$(date "+%Y%m%d_%H%M%S")

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# 1. Overwrite (>) - Create new log file
echo "Creating new log file with > operator..."
echo "=== Server Startup ===" > "$LOG_DIR/server_$TIMESTAMP.log"
echo "Startup time: $(date)" >> "$LOG_DIR/server_$TIMESTAMP.log"
echo "Hostname: $(hostname)" >> "$LOG_DIR/server_$TIMESTAMP.log"

# 2. Input redirection (<) - Process configuration
echo -e "\\nProcessing configuration with < operator..."
if [ -f /etc/barrackpore/config.txt ]; then
    echo "Config contents:"
    # Using < to feed file to cat (equivalent to cat file)
    cat < /etc/barrackpore/config.txt
    
    # Count lines in config
    line_count=$(wc -l < /etc/barrackpore/config.txt)
    echo "Config has $line_count lines"
else
    echo "No config file found, creating default..."
    echo "port=8080" > /etc/barrackpore/config.txt
    echo "timeout=30" >> /etc/barrackpore/config.txt
fi

# 3. Multiple redirections
echo -e "\\nTesting multiple redirections..."
{
    echo "=== System Info ==="
    uname -a
    echo -e "\\n=== Disk Usage ==="
    df -h /
} > "$LOG_DIR/system_info_$TIMESTAMP.log"

echo "System info saved to: $LOG_DIR/system_info_$TIMESTAMP.log"

# 4. Show log contents
echo -e "\\nCurrent log file contents:"
cat "$LOG_DIR/server_$TIMESTAMP.log"`,x=`#!/bin/bash
# Application logging in Shyamnagar monitoring

echo "=== Shyamnagar Application Logging ==="
APP_LOG="/var/log/shyamnagar/app.log"
AUDIT_LOG="/var/log/shyamnagar/audit.log"

# Ensure log directory exists
mkdir -p "/var/log/shyamnagar"

# Function to log messages
log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    
    # Append to main log
    echo "[$timestamp] [$level] $message" >> "$APP_LOG"
    
    # Also log to audit if level is ERROR or CRITICAL
    if [[ "$level" =~ ^(ERROR|CRITICAL)$ ]]; then
        echo "[$timestamp] [AUDIT] $level: $message" >> "$AUDIT_LOG"
    fi
}

# Simulate application events
echo "Starting application logging simulation..."

# Initial log entry (would overwrite if using >)
log_message "INFO" "Application started in Shyamnagar"
log_message "INFO" "Loading configuration from /etc/shyamnagar"
log_message "WARN" "Configuration file missing defaults, using fallback"
log_message "INFO" "Database connection established"
log_message "ERROR" "Failed to connect to backup server"
log_message "INFO" "Starting scheduled tasks"
log_message "CRITICAL" "Disk usage above 90% on /var"

# Show log contents
echo -e "\\nApplication log contents (last 5 entries):"
tail -5 "$APP_LOG"

echo -e "\\nAudit log contents:"
cat "$AUDIT_LOG"

# Demonstrate append vs overwrite
echo -e "\\n=== Append Demonstration ==="
echo "Using >> (append):"
echo "Entry 1" > test.log
echo "Entry 2" >> test.log
echo "Entry 3" >> test.log
echo "test.log contains:"
cat test.log

echo -e "\\nUsing > (overwrite):"
echo "New Entry" > test.log
echo "test.log now contains:"
cat test.log

# Cleanup
rm -f test.log`,u=`#!/bin/bash
# Error logging for Ichapur backup system

echo "=== Ichapur Backup System ==="
BACKUP_DIR="/backups/ichapur"
LOG_FILE="/var/log/ichapur_backup.log"
ERROR_LOG="/var/log/ichapur_errors.log"

# Create directories
mkdir -p "$BACKUP_DIR"
mkdir -p "/var/log"

# Clear previous logs
> "$LOG_FILE"
> "$ERROR_LOG"

echo "Starting backup process..."
echo "Backup started at $(date)" >> "$LOG_FILE"

# 1. Redirect stderr to error log, stdout to main log
echo "Backing up configuration files..." >> "$LOG_FILE"
cp -r /etc/nginx "$BACKUP_DIR/" 2>> "$ERROR_LOG"
cp -r /etc/mysql "$BACKUP_DIR/" 2>> "$ERROR_LOG"

# 2. Redirect both stdout and stderr
echo "Creating archive..." >> "$LOG_FILE"
tar -czf "$BACKUP_DIR/backup_$(date +%Y%m%d).tar.gz" "$BACKUP_DIR" &>> "$LOG_FILE"

# 3. Discard stderr completely
echo "Cleaning old backups..." >> "$LOG_FILE"
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete 2>/dev/null

# 4. Separate stdout and stderr to different files
echo "Verifying backup..." >> "$LOG_FILE"
{
    echo "=== Backup Verification ==="
    tar -tzf "$BACKUP_DIR/backup_$(date +%Y%m%d).tar.gz" | head -10
    echo "Verification completed"
} >> "$LOG_FILE" 2>> "$ERROR_LOG"

# 5. Show logs
echo -e "\\n=== Main Log (last 10 lines) ==="
tail -10 "$LOG_FILE"

echo -e "\\n=== Error Log ==="
if [ -s "$ERROR_LOG" ]; then
    echo "Errors found:"
    cat "$ERROR_LOG"
else
    echo "No errors encountered"
fi

# 6. Demonstrate stderr redirection
echo -e "\\n=== stderr Redirection Demo ==="
echo "Testing error output:"
ls /nonexistent_directory 2>/dev/null || echo "Error redirected to /dev/null"
ls /nonexistent_directory 2>> test_errors.log && echo "This won't execute"
echo "Error log contents:"
cat test_errors.log 2>/dev/null || echo "No error log created"

# Cleanup
rm -f test_errors.log`,f=`#!/bin/bash
# Complete output capture for Naihati deployment

echo "=== Naihati Deployment System ==="
DEPLOY_LOG="/var/log/naihati_deploy_$(date +%Y%m%d_%H%M%S).log"

# Method 1: Using &> (Bash specific)
echo "Method 1: Using &> to capture all output"
{
    echo "Starting deployment..."
    echo "Current directory: $(pwd)"
    
    # Simulate deployment steps
    echo "Step 1: Checking prerequisites"
    which docker && echo "Docker found" || echo "Docker not found"
    
    echo "Step 2: Building image"
    echo "docker build -t naihati-app ."
    
    echo "Step 3: Deploying containers"
    echo "docker-compose up -d"
    
    # This error will be captured too
    ls /nonexistent 2>/dev/null || echo "Error handled gracefully"
    
    echo "Deployment completed at $(date)"
} &> "$DEPLOY_LOG"

echo "Deployment log saved to: $DEPLOY_LOG"
echo -e "\\nLog contents:"
cat "$DEPLOY_LOG"

# Method 2: Using > file 2>&1 (POSIX compatible)
echo -e "\\n\\nMethod 2: Using > file 2>&1 (POSIX)"
POSIX_LOG="/tmp/posix_deploy.log"

echo "Starting POSIX-compatible deployment" > "$POSIX_LOG"
echo "Running checks..." >> "$POSIX_LOG"
uname -a >> "$POSIX_LOG" 2>&1
ls /nonexistent >> "$POSIX_LOG" 2>&1
echo "Checks completed" >> "$POSIX_LOG" 2>&1

echo -e "\\nPOSIX log contents:"
cat "$POSIX_LOG"

# Method 3: Using tee to see and save output
echo -e "\\n\\nMethod 3: Using tee to see and save"
echo "Deploying with tee (see output and save to log)..."

{
    echo "=== Tee Deployment ==="
    echo "Step 1: Update packages"
    echo "apt-get update"
    
    echo "Step 2: Install dependencies"
    echo "apt-get install -y python3 nodejs"
    
    echo "Step 3: Start services"
    echo "systemctl start nginx"
    
    echo "Deployment with tee completed"
} 2>&1 | tee "/tmp/tee_deploy.log"

echo -e "\\nTee log also saved to /tmp/tee_deploy.log"

# Cleanup
rm -f "$POSIX_LOG" "/tmp/tee_deploy.log"`,y=`#!/bin/bash
# Inline input for configuration generation

echo "=== Configuration Generation ==="

# 1. Basic here-document
echo "Creating config file with here-document..."

cat > /tmp/app_config.conf << EOF
# Application Configuration
# Generated on $(date)

server {
    listen 8080;
    server_name localhost;
    
    location / {
        root /var/www/html;
        index index.html;
    }
    
    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;
}

# Database settings
database {
    host = localhost
    port = 3306
    name = app_db
    user = app_user
}
EOF

echo "Config file created at /tmp/app_config.conf"
echo -e "\\nConfig contents:"
cat /tmp/app_config.conf

# 2. Here-document with variable expansion
echo -e "\\n\\nCreating deployment script with variables..."
ENVIRONMENT="production"
DATABASE_HOST="db.production.naihati.internal"

cat > /tmp/deploy.sh << EOF
#!/bin/bash
# Deployment script for $ENVIRONMENT
# Database: $DATABASE_HOST

echo "Deploying to $ENVIRONMENT environment"
echo "Connecting to database at $DATABASE_HOST"

# Deployment steps
cd /opt/app
git pull origin main
npm install
npm run build:$ENVIRONMENT

echo "Deployment completed at \\$(date)"
EOF

chmod +x /tmp/deploy.sh
echo "Deployment script created: /tmp/deploy.sh"
echo -e "\\nScript contents:"
cat /tmp/deploy.sh

# 3. Here-document without variable expansion
echo -e "\\n\\nCreating template without variable expansion..."
cat > /tmp/template.txt << 'EOF'
# Template File
# Variables will not be expanded

Environment: \${ENVIRONMENT}
Database: \${DB_HOST}
Port: \${APP_PORT}

# These remain as literals
EOF

echo "Template created at /tmp/template.txt"
echo -e "\\nTemplate contents (note variables not expanded):"
cat /tmp/template.txt

# 4. Here-string (<<<) for single line input
echo -e "\\n\\nUsing here-string for single line input..."
echo "Converting text to uppercase with here-string:"
tr 'a-z' 'A-Z' <<< "hello from naihati deployment system"

echo -e "\\nCounting words:"
wc -w <<< "This is a test sentence for the deployment system"

# 5. Feeding here-document to command
echo -e "\\n\\nFeeding here-document directly to sort command:"
sort << END
banana
apple
cherry
date
elderberry
END

# Cleanup
rm -f /tmp/app_config.conf /tmp/deploy.sh /tmp/template.txt`,b=`#!/bin/bash
# Sophisticated I/O redirection for production systems

echo "=== Advanced Redirection Techniques ==="

# 1. File descriptor manipulation
echo "1. File Descriptor Duplication"
# Save original stdout to fd 3
exec 3>&1

# Redirect stdout to file, but stderr still goes to terminal
echo "This goes to file" > /tmp/output.txt
echo "This goes to terminal (stderr)" >&2

# Restore stdout
echo "This goes to terminal (stdout restored)" >&3

# 2. Multiple redirections
echo -e "\\n2. Multiple Redirections"
# stdout to file1, stderr to file2
{
    echo "Normal message"
    echo "Error message" >&2
} > /tmp/file1.txt 2> /tmp/file2.txt

echo "file1.txt:"
cat /tmp/file1.txt
echo -e "\\nfile2.txt:"
cat /tmp/file2.txt

# 3. Process substitution
echo -e "\\n3. Process Substitution"
echo "Comparing directory listings:"
diff <(ls /tmp) <(ls /var/tmp) | head -5

echo -e "\\nProcessing command output as file:"
grep -c "file" <(find /tmp -type f -name "*.txt" 2>/dev/null)

# 4. tee for splitting streams
echo -e "\\n4. Using tee to Split Output"
echo "Deployment output being sent to multiple locations..."
{
    echo "=== Deployment Started ==="
    date
    echo "Current user: $(whoami)"
    echo "Disk space:"
    df -h /
    echo "=== Deployment Ended ==="
} 2>&1 | tee /tmp/deploy.log | tee >(grep -i "error" > /tmp/errors.txt) > >(grep -i "disk" > /tmp/disk_info.txt)

echo -e "\\nDeploy log:"
cat /tmp/deploy.log
echo -e "\\nErrors captured:"
cat /tmp/errors.txt
echo -e "\\nDisk info captured:"
cat /tmp/disk_info.txt

# 5. Redirecting to/from multiple files
echo -e "\\n5. Redirecting to Multiple Files"
# Use tee to write to multiple files
echo "Important log entry" | tee /tmp/log1.txt /tmp/log2.txt /tmp/log3.txt >/dev/null

echo "Written to 3 files:"
echo "log1.txt:" && cat /tmp/log1.txt
echo "log2.txt:" && cat /tmp/log2.txt
echo "log3.txt:" && cat /tmp/log3.txt

# 6. Custom file descriptors
echo -e "\\n6. Custom File Descriptors"
# Open fd 4 for reading, fd 5 for writing
exec 4</etc/passwd
exec 5>/tmp/custom_output.txt

# Read from fd 4, write to fd 5
head -3 <&4 >&5

# Close file descriptors
exec 4<&-
exec 5>&-

echo "Custom output written to /tmp/custom_output.txt:"
cat /tmp/custom_output.txt

# 7. Redirection with exec
echo -e "\\n7. Permanent Redirection with exec"
# Redirect all subsequent output to log file
exec > /tmp/exec_demo.log 2>&1

echo "This goes to log file"
echo "So does this"
ls /nonexistent  # Error also goes to log

# Restore original stdout/stderr
exec >&3 2>&1

echo -e "\\nCheck /tmp/exec_demo.log for captured output"

# Cleanup
rm -f /tmp/output.txt /tmp/file1.txt /tmp/file2.txt /tmp/deploy.log \\
      /tmp/errors.txt /tmp/disk_info.txt /tmp/log1.txt /tmp/log2.txt \\
      /tmp/log3.txt /tmp/custom_output.txt /tmp/exec_demo.log`,w=()=>{const[a,i]=o.useState("stdout"),[l,d]=o.useState(""),c=[{id:"stdout",name:"Standard Output",symbol:">",description:"Redirect stdout to file (overwrite)",syntax:"command > file",color:"from-blue-500 to-cyan-600"},{id:"append",name:"Append Output",symbol:">>",description:"Append stdout to file",syntax:"command >> file",color:"from-green-500 to-emerald-600"},{id:"stdin",name:"Standard Input",symbol:"<",description:"Redirect file to stdin",syntax:"command < file",color:"from-purple-500 to-pink-600"},{id:"stderr",name:"Standard Error",symbol:"2>",description:"Redirect stderr to file",syntax:"command 2> error.log",color:"from-red-500 to-orange-600"},{id:"combined",name:"Combined Output",symbol:"&>",description:"Redirect stdout and stderr",syntax:"command &> output.log",color:"from-yellow-500 to-amber-600"},{id:"heredoc",name:"Here Document",symbol:"<<",description:"Inline input redirection",syntax:`command << EOF
input
EOF`,color:"from-indigo-500 to-purple-600"}],m=[{fd:0,name:"stdin",description:"Standard Input",default:"Keyboard",color:"bg-purple-100 dark:bg-purple-900/30"},{fd:1,name:"stdout",description:"Standard Output",default:"Terminal",color:"bg-blue-100 dark:bg-blue-900/30"},{fd:2,name:"stderr",description:"Standard Error",default:"Terminal",color:"bg-red-100 dark:bg-red-900/30"}],g=[{command:"ls /tmp > files.txt",description:"Save directory listing to file"},{command:'echo "New log entry" >> app.log',description:"Append to log file"},{command:"sort < unsorted.txt",description:"Sort contents of file"},{command:'find / -name "*.conf" 2> errors.log',description:"Save errors to separate file"},{command:"script.sh &> all_output.log",description:"Capture all output"},{command:`cat << EOF
Line 1
Line 2
EOF`,description:"Use here-document for input"}],h=n=>{let t="";switch(n){case"stdout":t=`Command: echo 'Hello from Barrackpore' > greeting.txt

`,t+=`Result: greeting.txt created with content:
`,t+="Hello from Barrackpore";break;case"append":t=`Command: echo 'Line 1' > log.txt
`,t+=`        echo 'Line 2' >> log.txt

`,t+=`Result: log.txt contains:
`,t+=`Line 1
Line 2`;break;case"stdin":t=`File input.txt contains:
`,t+=`apple
banana
cherry

`,t+=`Command: sort < input.txt

`,t+=`Result:
apple
banana
cherry`;break;case"stderr":t=`Command: ls /nonexistent 2> error.log

`,t+=`Terminal shows nothing (errors redirected)
`,t+=`error.log contains:
`,t+="ls: cannot access '/nonexistent': No such file or directory";break;case"combined":t=`Command: ./script.sh &> output.log

`,t+=`Both stdout and stderr go to output.log
`,t+="Nothing appears in terminal";break;default:t="Select a redirection type to see simulation"}d(t),i(n)};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:["Redirection: ",">, >>, <, 2>, &>"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Master the art of controlling input and output streams in shell scripting. Learn how to redirect standard streams, combine outputs, and create powerful data processing pipelines using redirection operators."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Standard Streams (File Descriptors)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:m.map((n,t)=>e.jsxs("div",{className:s("p-4 rounded-xl transition-all duration-300 transform hover:scale-105",n.color),style:{animationDelay:`${t*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mr-3 font-bold text-gray-800 dark:text-gray-300",children:n.fd}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-gray-800 dark:text-white",children:n.name}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:n.description})]})]}),e.jsxs("div",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Default: ",e.jsx("code",{className:"bg-black/10 dark:bg-white/10 px-2 py-1 rounded",children:n.default})]})]},n.fd))}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Stream Flow Visualization"}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0",children:[e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"stdin (0)"}),e.jsx("div",{className:"text-sm",children:"Input → Process"})]})}),e.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})}),e.jsxs("div",{className:"p-4 bg-gray-800 text-white rounded-lg",children:[e.jsx("div",{className:"font-mono",children:"Command"}),e.jsx("div",{className:"text-xs opacity-80",children:"Process"})]}),e.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"stdout (1)"}),e.jsx("div",{className:"text-sm",children:"Process → Output"})]})}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-red-100 dark:bg-red-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"stderr (2)"}),e.jsx("div",{className:"text-sm",children:"Process → Errors"})]})})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Redirection Operators"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",children:c.map((n,t)=>e.jsxs("button",{onClick:()=>h(n.id),className:s("p-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-left",a===n.id?`bg-gradient-to-r ${n.color} text-white shadow-lg`:"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${t*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:s("w-12 h-12 rounded-lg flex items-center justify-center mr-3 text-2xl font-bold",a===n.id?"bg-white/30":"bg-white dark:bg-gray-600"),children:n.symbol}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:n.name}),e.jsx("div",{className:"text-sm opacity-90",children:n.description})]})]}),e.jsx("code",{className:"block text-sm bg-black/10 dark:bg-white/10 p-2 rounded mt-2",children:n.syntax})]},n.id))}),e.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-4",children:"Redirection Simulation"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Command Execution:"}),e.jsx("pre",{className:"text-gray-100 whitespace-pre-wrap font-mono text-sm",children:l||"Select a redirection type to see simulation"})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Quick Examples"}),e.jsx("div",{className:"space-y-2",children:g.map((n,t)=>e.jsxs("div",{className:"p-2 bg-gray-100 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block",children:n.command}),e.jsx("div",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:n.description})]},t))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"File Descriptor Redirection"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command > file"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Short for 1> file"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command 2>&1"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Redirect stderr to stdout"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command > file 2>&1"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Both to file (old style)"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command &> file"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Both to file (Bash)"})]})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Special Files"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command > /dev/null"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Discard output"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command 2> /dev/null"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Discard errors"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded",children:"command < /dev/null"}),e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"No input"})]})]})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Basic File Operations"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Foundation"})]}),e.jsx(r,{fileModule:p,title:"Log file management in Barrackpore server",highlightLines:[5,6,7,8,9,10,11,12,13,14]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs to manage log files in the Barrackpore server. Redirection operators help create, overwrite, and append to log files efficiently."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Appending Logs"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"Log Management"})]}),e.jsx(r,{fileModule:x,title:"Application logging in Shyamnagar monitoring",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina manages application logs in Shyamnagar. Using `>>` ensures log entries are preserved instead of overwritten."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Error Redirection"}),e.jsx("span",{className:"px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium",children:"Error Handling"})]}),e.jsx(r,{fileModule:u,title:"Error logging for Ichapur backup system",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Abhronila handles backup errors in Ichapur. Separating stdout and stderr allows clean output while capturing errors for debugging."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Redirection Techniques"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Combined Output Redirection"}),e.jsx(r,{fileModule:f,title:"Complete output capture for Naihati deployment",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Use `&>` when you need to capture both stdout and stderr to the same file. This is cleaner than `command > file 2>&1`."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Here Documents & Here Strings"}),e.jsx(r,{fileModule:y,title:"Inline input for configuration generation",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Note:"})," ","Here documents (",e.jsx("code",{children:"<<"}),") are useful for multi-line input, while here strings (",e.jsx("code",{children:"<<<"}),") work for single-line input."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Redirection Patterns"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Complex Redirection Patterns"}),e.jsx(r,{fileModule:b,title:"Sophisticated I/O redirection for production systems",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Duplicate File Descriptors"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`# Save stdout to fd 3, redirect stdout to file
exec 3>&1
echo "This goes to file" > output.log
# Restore stdout
echo "This goes to terminal" >&3`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Save and restore file descriptors for complex redirection scenarios."})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Process Substitution"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`# Compare outputs of two commands
diff <(ls /dir1) <(ls /dir2)

# Feed command output as file
grep "pattern" <(find . -name "*.txt")`}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Use process substitution to treat command output as files."})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Order Matters in Redirection"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Redirections are processed left to right"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`# WRONG: stderr redirected to current stdout (terminal), then stdout to file
command 2>&1 > output.log

# CORRECT: stdout to file, then stderr to same file
command > output.log 2>&1`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Think about the order: redirect stdout first, then stderr to stdout"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Noclobber Protection"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," `>` overwrites files without warning"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`# Enable noclobber to prevent overwrites
set -o noclobber
echo "test" > existing_file.txt  # Error: cannot overwrite
echo "test" >| existing_file.txt  # Force overwrite with >|`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Use `set -o noclobber` or `>|` to force overwrite"]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Empty File Creation"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," `>` creates empty file even if command fails"]}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`# Creates empty file even if ls fails
ls /nonexistent > output.txt
# File exists but empty`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Check command success before using output, or use append"]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Logging Strategy"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `>>` for log files to preserve history"}),e.jsx("li",{children:"Separate stdout and stderr for debugging"}),e.jsx("li",{children:"Use timestamps in log entries"}),e.jsx("li",{children:"Consider log rotation for large files"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Error Handling"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Always redirect stderr for production scripts"}),e.jsx("li",{children:"Use `/dev/null` to discard unimportant output"}),e.jsx("li",{children:"Check exit status after redirections"}),e.jsx("li",{children:"Log errors with context information"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Minimize disk I/O in performance-critical code"}),e.jsx("li",{children:"Use pipes instead of temporary files when possible"}),e.jsx("li",{children:"Consider buffering for high-volume output"}),e.jsx("li",{children:"Use `tee` to split output streams"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Readability"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `&>` instead of `> file 2>&1` for clarity"}),e.jsx("li",{children:"Comment complex redirection setups"}),e.jsx("li",{children:"Use here-documents for multi-line input"}),e.jsx("li",{children:"Break complex pipelines into steps"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," ","When would you use"," ",e.jsx("code",{children:"2>&1 | tee file.log"})," ","versus"," ",e.jsx("code",{children:"&> file.log"}),"?"," ","Consider the difference between seeing output and capturing it."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."})," ","The behavior difference between"," ",e.jsx("code",{children:"command < input.txt"})," ","and"," ",e.jsx("code",{children:"cat input.txt | command"}),". Which preserves command's stdin? Which is more efficient?"]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A script that uses temporary files for intermediate results to use pipes instead. How does this affect performance and cleanup?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"`>` overwrites, `>>` appends"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"`2>` redirects stderr, `&>` redirects both"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Order matters: `command > file 2>&1`"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use here-documents for multi-line input"})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Redirection is the Swiss Army knife of shell scripting. In Barrackpore's production systems, we use redirection for everything from log rotation to data transformation pipelines. Remember: ",e.jsx("strong",{children:"Always separate stdout and stderr in production scripts"}),". This simple practice has saved us countless debugging hours. Also, `tee` is your friend - it lets you see what's happening while capturing output to files. For complex redirections, use file descriptor duplication (`exec 3>&1`) to save and restore streams."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:'When teaching Abhronila and Tuhina, I emphasize hands-on practice with each operator. Create a "redirection playground" script that demonstrates each type. Have students predict what files will contain before running commands. A great exercise: convert a script that uses temporary files to one that uses pipes and process substitution. Also, teach them about `set -o noclobber` early - it prevents accidental file overwrites, a common beginner mistake in Shyamnagar projects.'})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Production Wisdom"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["In the Ichapur logging infrastructure, we use a combination of `tee` and process substitution for sophisticated log handling. For example: ","command 2>&1 | tee >(grep ERROR > error.log) | tee >(grep WARN > warn.log) > output.log",". This splits the stream multiple ways. Also, remember that ","&>"," in Bash is not POSIX - for portable scripts in Naihati, use ","> file 2>&1",". Always test redirection edge cases: what happens when the output file can't be created? What if disk is full? Handle these gracefully."]})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
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

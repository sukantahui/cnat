import{j as e}from"./index-BFnLuail.js";import{S as r}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const t=`#!/bin/bash
# PATH Examples - Viewing and Modifying PATH

echo "=== Understanding PATH Variable ==="
echo ""

# 1. View current PATH
echo "1. Current PATH variable:"
echo "$PATH"
echo ""

# 2. Show PATH in readable format
echo "2. PATH directories (one per line):"
echo "$PATH" | tr ':' '\\n' | nl
echo ""

# 3. Check if a directory is in PATH
check_in_path() {
    local dir_to_check="$1"
    if echo "$PATH" | tr ':' '\\n' | grep -q "^$dir_to_check$"; then
        echo "✓ $dir_to_check is in PATH"
    else
        echo "✗ $dir_to_check is NOT in PATH"
    fi
}

echo "3. Checking common directories:"
check_in_path "/usr/local/bin"
check_in_path "/usr/bin"
check_in_path "/bin"
check_in_path "$HOME/bin"
echo ""

# 4. Add directory to PATH temporarily
echo "4. Adding ~/scripts to PATH (temporary):"
export PATH="$PATH:$HOME/scripts"
echo "New PATH: $PATH"
echo ""

# 5. Add directory to PATH (prepend - higher priority)
echo "5. Adding /opt/myapp/bin to beginning of PATH:"
export PATH="/opt/myapp/bin:$PATH"
echo "New PATH: $PATH"
echo ""

# 6. Remove duplicate entries from PATH
echo "6. Cleaning duplicate PATH entries:"
clean_path=$(echo "$PATH" | awk -v RS=: '!a[$0]++' | paste -sd:)
export PATH="$clean_path"
echo "Cleaned PATH: $PATH"
echo ""

# 7. Check which executable will be run
echo "7. Checking command locations:"
commands_to_check=("ls" "python3" "bash" "git" "docker")
for cmd in "\${commands_to_check[@]}"; do
    location=$(which "$cmd" 2>/dev/null || echo "Not found")
    echo "  $cmd -> $location"
done
echo ""

# 8. Create user bin directory if it doesn't exist
echo "8. Setting up personal bin directory:"
if [ ! -d "$HOME/bin" ]; then
    echo "Creating $HOME/bin directory..."
    mkdir -p "$HOME/bin"
    echo "Add to .bashrc: export PATH=\\"\\$PATH:\\$HOME/bin\\""
else
    echo "$HOME/bin already exists"
fi
echo ""

echo "=== PATH Management Tips ==="
echo "• Use 'export PATH=\\$PATH:/new/path' to append"
echo "• Use 'export PATH=/new/path:\\$PATH' to prepend"
echo "• Never include '.' in PATH for security"
echo "• Check with 'which command' before troubleshooting"`,s=`#!/bin/bash
# Command Location Examples

echo "=== How Shell Locates Commands ==="
echo ""

# Create test directories and executables
setup_test() {
    echo "Setting up test environment..."
    mkdir -p /tmp/test_bin1 /tmp/test_bin2 /tmp/test_bin3
    
    # Create different versions of 'myapp'
    echo '#!/bin/bash
echo "Running myapp from /tmp/test_bin1 - Version 1.0"' > /tmp/test_bin1/myapp
    chmod +x /tmp/test_bin1/myapp
    
    echo '#!/bin/bash
echo "Running myapp from /tmp/test_bin2 - Version 2.0"' > /tmp/test_bin2/myapp
    chmod +x /tmp/test_bin2/myapp
    
    echo '#!/bin/bash
echo "Running myapp from /tmp/test_bin3 - Version 3.0"' > /tmp/test_bin3/myapp
    chmod +x /tmp/test_bin3/myapp
    
    # Create an alias
    echo '#!/bin/bash
echo "This is an actual script, not an alias"' > /tmp/test_bin1/myalias
    chmod +x /tmp/test_bin1/myalias
}

cleanup_test() {
    echo "Cleaning up test environment..."
    rm -rf /tmp/test_bin1 /tmp/test_bin2 /tmp/test_bin3
}

setup_test

echo ""
echo "1. Understanding 'which' command:"
echo "   which ls: $(which ls)"
echo "   which bash: $(which bash)"
echo "   which myapp: $(which myapp 2>/dev/null || echo 'Not found')"
echo ""

echo "2. Understanding 'type' command:"
echo "   type ls:"
type ls
echo ""
echo "   type cd:"
type cd
echo ""
echo "   type ll:"
type ll 2>/dev/null || echo "ll: not found"
echo ""

echo "3. PATH search order demonstration:"
echo "   Setting PATH with multiple myapp versions..."
OLD_PATH="$PATH"
export PATH="/tmp/test_bin1:/tmp/test_bin2:/tmp/test_bin3:$PATH"

echo "   PATH order:"
echo "$PATH" | tr ':' '\\n' | grep test_bin | nl
echo ""

echo "   Running 'myapp':"
myapp
echo ""

echo "4. Changing PATH order changes which version runs:"
export PATH="/tmp/test_bin3:/tmp/test_bin2:/tmp/test_bin1:$PATH"
echo "   New PATH order (reversed):"
echo "$PATH" | tr ':' '\\n' | grep test_bin | nl
echo ""

echo "   Running 'myapp' now:"
myapp
echo ""

echo "5. Command not found scenarios:"
echo "   Trying non-existent command:"
nonexistent_command 2>&1 | head -1
echo ""

echo "6. Shell builtins vs external commands:"
echo "   'cd' is a shell builtin:"
type cd
echo "   Location (should be empty for builtins): $(which cd 2>/dev/null || echo 'builtin')"
echo ""

echo "   'ls' is an external command:"
type ls
echo "   Location: $(which ls)"
echo ""

echo "7. Aliases vs commands:"
# Create an alias
alias myalias="echo 'This is an alias, not a script'"
echo "   Created alias: myalias"
echo "   type myalias:"
type myalias
echo "   which myalias: $(which myalias 2>/dev/null || echo 'alias')"
echo "   Running myalias:"
myalias
echo ""

echo "8. Function vs command:"
# Create a function
myfunction() {
    echo "This is a shell function"
}
echo "   Created function: myfunction"
echo "   type myfunction:"
type myfunction
echo ""

# Restore PATH
export PATH="$OLD_PATH"

cleanup_test

echo "=== Key Takeaways ==="
echo "• 'which' shows path to executable"
echo "• 'type' shows if command is builtin, alias, function, or external"
echo "• PATH order determines which version runs"
echo "• Builtins (cd, echo) don't use PATH"
echo "• Aliases and functions override external commands"`,n=`#!/bin/bash
# Script Execution Methods

echo "=== Different Ways to Execute Shell Scripts ==="
echo ""

# Create test scripts
create_test_scripts() {
    echo "Creating test scripts..."
    
    # Script 1: Simple hello world
    cat > /tmp/hello.sh << 'EOF'
#!/bin/bash
# hello.sh - Simple test script
echo "Hello from $(hostname) at $(date)"
echo "Script name: $0"
echo "Running from directory: $(pwd)"
echo "User: $(whoami)"
EOF
    chmod +x /tmp/hello.sh
    
    # Script 2: With parameters
    cat > /tmp/greet.sh << 'EOF'
#!/bin/bash
# greet.sh - Script with parameters
if [ $# -eq 0 ]; then
    echo "Hello anonymous!"
else
    echo "Hello $1!"
fi
echo "Number of arguments: $#"
echo "All arguments: $@"
EOF
    chmod +x /tmp/greet.sh
    
    # Script 3: That modifies environment
    cat > /tmp/setenv.sh << 'EOF'
#!/bin/bash
# setenv.sh - Script that modifies environment
export MY_VAR="Script set this variable"
echo "MY_VAR set to: $MY_VAR"
change_dir() {
    cd /tmp
    echo "Changed to: $(pwd)"
}
change_dir
EOF
    chmod +x /tmp/setenv.sh
}

cleanup_scripts() {
    rm -f /tmp/hello.sh /tmp/greet.sh /tmp/setenv.sh
}

create_test_scripts

echo "1. Method 1: Direct execution (requires executable bit)"
echo "   Command: ./hello.sh"
echo "   Result:"
/tmp/hello.sh
echo ""

echo "2. Method 2: Using bash interpreter"
echo "   Command: bash /tmp/hello.sh"
echo "   Result:"
bash /tmp/hello.sh
echo ""

echo "3. Method 3: Using sh interpreter"
echo "   Command: sh /tmp/hello.sh"
echo "   Result:"
sh /tmp/hello.sh
echo ""

echo "4. Method 4: Sourcing the script (runs in current shell)"
echo "   Command: source /tmp/setenv.sh"
echo "   Before sourcing: MY_VAR=\${MY_VAR:-not set}"
source /tmp/setenv.sh
echo "   After sourcing: MY_VAR=$MY_VAR"
echo "   Current directory: $(pwd)"
echo ""

# Reset directory
cd ~

echo "5. Method 5: Dot command (same as source)"
echo "   Command: . /tmp/setenv.sh"
echo "   Before: MY_VAR=\${MY_VAR:-not set}"
. /tmp/setenv.sh
echo "   After: MY_VAR=$MY_VAR"
echo ""

# Reset variable
unset MY_VAR

echo "6. Method 6: Execution without ./ (requires PATH)"
echo "   Without PATH: hello.sh"
hello.sh 2>&1 | head -1
echo ""
echo "   Adding to PATH temporarily:"
OLD_PATH="$PATH"
export PATH="/tmp:$PATH"
echo "   hello.sh (now works):"
hello.sh
export PATH="$OLD_PATH"
echo ""

echo "7. Method 7: Absolute path"
echo "   Command: /tmp/hello.sh"
echo "   Result:"
/tmp/hello.sh
echo ""

echo "8. Method 8: With command substitution"
echo "   Command: result=\\$(/tmp/greet.sh Swadeep)"
result=$(/tmp/greet.sh Swadeep)
echo "   Result captured in variable:"
echo "$result"
echo ""

echo "9. Method 9: With parameters"
echo "   Command: /tmp/greet.sh Tuhina Abhronila Debangshu"
/tmp/greet.sh Tuhina Abhronila Debangshu
echo ""

echo "10. Method 10: Piping input to script"
echo "    Creating script that reads stdin..."
cat > /tmp/read_input.sh << 'EOF'
#!/bin/bash
# read_input.sh - Reads from stdin
echo "Script received input:"
while IFS= read -r line; do
    echo "  Line: $line"
done
EOF
chmod +x /tmp/read_input.sh

echo "    Command: echo -e 'Line 1\\nLine 2' | /tmp/read_input.sh"
echo -e "Line 1\\nLine 2" | /tmp/read_input.sh
echo ""

echo "=== Comparison Table ==="
echo "+-------------------+---------------------+---------------------------+"
echo "| Method            | Runs in             | Environment Changes       |"
echo "+-------------------+---------------------+---------------------------+"
echo "| ./script.sh       | New shell           | Lost after script ends    |"
echo "| bash script.sh    | New shell           | Lost after script ends    |"
echo "| source script.sh  | Current shell       | Persists                  |"
echo "| . script.sh       | Current shell       | Persists                  |"
echo "| script.sh (PATH)  | New shell           | Lost after script ends    |"
echo "+-------------------+---------------------+---------------------------+"

cleanup_scripts

echo ""
echo "=== Key Differences ==="
echo "• ./script.sh: Requires executable permission, runs in subshell"
echo "• source script.sh: No permission needed, runs in current shell"
echo "• script.sh: Requires directory in PATH, runs in subshell"
echo "• bash script.sh: Explicit interpreter, runs in subshell"
echo ""
echo "Use 'source' when you want to:"
echo "  - Modify current shell environment"
echo "  - Define functions/aliases for current session"
echo "  - Run configuration scripts"
echo ""
echo "Use './' or bash when you want to:"
echo "  - Run independent scripts"
echo "  - Avoid modifying current environment"
echo "  - Run scripts with different interpreters"`,a=`#!/bin/bash
# Creating and Installing Scripts

echo "=== Professional Script Installation Guide ==="
echo ""

# Create a sample useful script
create_sample_script() {
    local script_name="$1"
    
    cat > "$script_name" << 'EOF'
#!/bin/bash
# backup_files.sh - Professional backup script
# Usage: backup_files [source_dir] [backup_name]

set -e  # Exit on error

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Default values
SOURCE_DIR="\${1:-.}"
BACKUP_NAME="\${2:-backup_$(date +%Y%m%d_%H%M%S)}"
BACKUP_DIR="$HOME/backups"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Validate source directory
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "\${RED}Error: Source directory '$SOURCE_DIR' not found\${NC}" >&2
    exit 1
fi

echo -e "\${YELLOW}Starting backup...\${NC}"
echo "Source: $SOURCE_DIR"
echo "Backup: $BACKUP_DIR/$BACKUP_NAME.tar.gz"

# Create backup
tar czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" -C "$(dirname "$SOURCE_DIR")" "$(basename "$SOURCE_DIR")"

# Check if backup was successful
if [ $? -eq 0 ]; then
    BACKUP_SIZE=$(du -h "$BACKUP_DIR/$BACKUP_NAME.tar.gz" | cut -f1)
    echo -e "\${GREEN}✓ Backup created successfully\${NC}"
    echo "Location: $BACKUP_DIR/$BACKUP_NAME.tar.gz"
    echo "Size: $BACKUP_SIZE"
    echo "Timestamp: $(date)"
else
    echo -e "\${RED}✗ Backup failed\${NC}" >&2
    exit 1
fi

# Show recent backups
echo ""
echo -e "\${YELLOW}Recent backups:\${NC}"
ls -lh "$BACKUP_DIR"/*.tar.gz 2>/dev/null | tail -5 || echo "No backups found"
EOF
}

echo "1. Creating a professional backup script..."
create_sample_script "/tmp/backup_files.sh"
chmod +x /tmp/backup_files.sh

echo "   Script created at /tmp/backup_files.sh"
echo "   Testing the script:"
echo "   -------------------"
/tmp/backup_files.sh /tmp "test_backup"
echo ""

echo "2. Making scripts globally available"
echo ""
echo "   Option A: Install to /usr/local/bin (requires sudo)"
echo "   sudo cp /tmp/backup_files.sh /usr/local/bin/backup_files"
echo "   Then run: backup_files"
echo ""
echo "   Option B: Install to ~/bin (user directory)"
echo "   mkdir -p ~/bin"
echo "   cp /tmp/backup_files.sh ~/bin/backup_files"
echo "   Add to ~/.bashrc: export PATH=\\"\\$PATH:\\$HOME/bin\\""
echo ""

echo "3. Creating a proper installation script"
cat > /tmp/install_backup.sh << 'EOF'
#!/bin/bash
# install_backup.sh - Installation script

SCRIPT_NAME="backup_files"
INSTALL_DIR="$HOME/bin"
SCRIPT_SRC="/tmp/backup_files.sh"

# Check if source script exists
if [ ! -f "$SCRIPT_SRC" ]; then
    echo "Error: Source script $SCRIPT_SRC not found"
    exit 1
fi

# Create installation directory if it doesn't exist
mkdir -p "$INSTALL_DIR"

# Copy script
cp "$SCRIPT_SRC" "$INSTALL_DIR/$SCRIPT_NAME"
chmod +x "$INSTALL_DIR/$SCRIPT_NAME"

# Check if ~/bin is in PATH
if echo "$PATH" | tr ':' '\\n' | grep -q "^$INSTALL_DIR$"; then
    echo "✓ $INSTALL_DIR is already in PATH"
else
    echo "⚠ $INSTALL_DIR is not in PATH"
    echo ""
    echo "Add this line to your ~/.bashrc or ~/.bash_profile:"
    echo "  export PATH=\\"\\$PATH:$INSTALL_DIR\\""
    echo ""
    echo "Then run: source ~/.bashrc"
fi

echo ""
echo "✓ Installation complete!"
echo "You can now run: $SCRIPT_NAME"
EOF

chmod +x /tmp/install_backup.sh

echo "   Installation script created: /tmp/install_backup.sh"
echo "   Run it with: ./install_backup.sh"
echo ""

echo "4. Creating a man page for the script"
mkdir -p /tmp/man/man1
cat > /tmp/man/man1/backup_files.1 << 'EOF'
.TH BACKUP_FILES 1 "2024" "1.0" "Backup Utility"
.SH NAME
backup_files \\- create compressed backups of directories
.SH SYNOPSIS
.B backup_files
[\\fISOURCE_DIR\\fP] [\\fIBACKUP_NAME\\fP]
.SH DESCRIPTION
.B backup_files
creates a compressed tar archive of the specified directory.
If no arguments are provided, it backs up the current directory.
.SH OPTIONS
.TP
.B SOURCE_DIR
Directory to backup (default: current directory)
.TP
.B BACKUP_NAME
Name for the backup file (default: backup_YYYYMMDD_HHMMSS)
.SH EXAMPLES
.TP
Backup current directory:
backup_files
.TP
Backup specific directory:
backup_files /path/to/directory
.TP
Backup with custom name:
backup_files /path/to/directory my_backup
.SH FILES
.TP
.I ~/backups/
Default backup location
.SH AUTHOR
Written by Shell Scripting Student
EOF

echo "   Man page created at /tmp/man/man1/backup_files.1"
echo "   View with: man -M /tmp/man backup_files"
echo ""

echo "5. Creating desktop integration (optional)"
cat > /tmp/backup_files.desktop << 'EOF'
[Desktop Entry]
Name=Backup Files
Comment=Create compressed backups
Exec=backup_files %F
Icon=document-save
Terminal=true
Type=Application
Categories=Utility;FileTools;
MimeType=inode/directory;
EOF

echo "   Desktop entry created for GUI integration"
echo ""

echo "6. Testing the installed script"
echo "   ----------------------------"
echo "   Creating test directory..."
mkdir -p /tmp/test_data
echo "File 1" > /tmp/test_data/file1.txt
echo "File 2" > /tmp/test_data/file2.txt

echo "   Running backup..."
/tmp/backup_files.sh /tmp/test_data "classroom_test"
echo ""

echo "=== Professional Installation Checklist ==="
echo "✓ Script has proper shebang (#!/bin/bash)"
echo "✓ Script is executable (chmod +x)"
echo "✓ Script has error handling (set -e)"
echo "✓ Script has usage instructions"
echo "✓ Script installed to appropriate directory"
echo "✓ Directory added to PATH"
echo "✓ Optional: Man page created"
echo "✓ Optional: Desktop integration"
echo ""
echo "=== Best Practices ==="
echo "• Use ~/bin for personal scripts"
echo "• Use /usr/local/bin for system-wide scripts"
echo "• Always include help/usage information"
echo "• Test scripts before installing"
echo "• Version control your scripts"
echo "• Document with comments and man pages"

# Cleanup
rm -rf /tmp/test_data
rm -f /tmp/backup_files.sh /tmp/install_backup.sh
rm -rf /tmp/man
rm -f /tmp/backup_files.desktop`,d=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto animate-[fadeInUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"mb-10 animate-[fadeInUp_0.8s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent",children:"Topic 3: Understanding PATH"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"How shell locates and executes commands, scripts, and programs"})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-green-700",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("div",{children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sm bg-green-100 dark:bg-green-900 px-1 rounded",children:"PATH"})," environment variable is the shell's directory search path. When you type a command, the shell searches through these directories in order to find and execute it. Understanding PATH is crucial for script execution, program installation, and system administration."]})})]})})]}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-green-300 dark:hover:border-green-700",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"PATH Search Process Visualization"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 800 500",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead-green",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#10b981"})}),e.jsx("marker",{id:"arrowhead-red",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ef4444"})}),e.jsxs("linearGradient",{id:"terminalGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#10b981"})]}),e.jsxs("linearGradient",{id:"foundGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#34d399"})]})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"50",width:"180",height:"60",rx:"8",fill:"url(#terminalGradient)",className:"transition-all duration-300 hover:stroke-green-400 hover:stroke-2"}),e.jsx("text",{x:"140",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"User types: ls"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M230 80 L280 80",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowhead-green)"}),e.jsx("text",{x:"255",y:"70",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Shell receives"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"50",width:"200",height:"60",rx:"8",fill:"#f59e0b",className:"transition-all duration-300 hover:fill-amber-500"}),e.jsx("text",{x:"380",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"Shell checks: Builtin or PATH?"}),e.jsx("animate",{attributeName:"fill",values:"#f59e0b;#fbbf24;#f59e0b",dur:"3s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M480 80 L530 80",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowhead-green)"}),e.jsx("text",{x:"505",y:"70",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Not builtin"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"530",y:"30",width:"220",height:"80",rx:"8",fill:"#3b82f6",className:"transition-all duration-300 hover:fill-blue-500"}),e.jsx("text",{x:"640",y:"45",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"PATH Variable"}),e.jsx("text",{x:"640",y:"65",textAnchor:"middle",fill:"#dbeafe",className:"font-sans text-xs",children:"/usr/local/bin:/usr/bin:/bin"}),e.jsx("text",{x:"640",y:"85",textAnchor:"middle",fill:"#dbeafe",className:"font-sans text-xs",children:":/usr/local/sbin:/usr/sbin:/sbin"}),e.jsx("animate",{attributeName:"fill",values:"#3b82f6;#60a5fa;#3b82f6",dur:"3s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"100",y:"150",width:"160",height:"40",rx:"6",fill:"#6b7280",className:"transition-all duration-300 hover:fill-gray-500"}),e.jsx("text",{x:"180",y:"175",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Check /usr/local/bin"}),e.jsx("animate",{attributeName:"fill",values:"#6b7280;#9ca3af;#6b7280",dur:"2s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("path",{d:"M180 190 L180 220",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrowhead-red)"}),e.jsx("text",{x:"180",y:"210",textAnchor:"middle",fill:"#ef4444",className:"font-sans text-xs",children:"Not found"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"100",y:"240",width:"160",height:"40",rx:"6",fill:"#6b7280",className:"transition-all duration-300 hover:fill-gray-500"}),e.jsx("text",{x:"180",y:"265",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Check /usr/bin"}),e.jsx("animate",{attributeName:"fill",values:"#6b7280;#9ca3af;#6b7280",dur:"2s",repeatCount:"indefinite",begin:"2s"})]}),e.jsx("path",{d:"M180 280 L180 310",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrowhead-red)"}),e.jsx("text",{x:"180",y:"300",textAnchor:"middle",fill:"#ef4444",className:"font-sans text-xs",children:"Not found"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"500",y:"150",width:"160",height:"40",rx:"6",fill:"#6b7280",className:"transition-all duration-300 hover:fill-gray-500"}),e.jsx("text",{x:"580",y:"175",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Check /bin"}),e.jsx("animate",{attributeName:"fill",values:"#6b7280;#9ca3af;#6b7280",dur:"2s",repeatCount:"indefinite",begin:"3s"})]}),e.jsx("path",{d:"M580 190 L580 220",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrowhead-green)"}),e.jsx("text",{x:"580",y:"210",textAnchor:"middle",fill:"#10b981",className:"font-sans text-xs",children:"Found!"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"500",y:"240",width:"160",height:"40",rx:"6",fill:"url(#foundGradient)",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"580",y:"265",textAnchor:"middle",fill:"white",className:"font-sans text-xs font-bold",children:"/bin/ls"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"1.5s",repeatCount:"indefinite",begin:"4s"})]}),e.jsx("path",{d:"M580 280 L580 340",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrowhead-green)"}),e.jsx("text",{x:"580",y:"320",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Execute"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"480",y:"360",width:"200",height:"60",rx:"8",fill:"#059669",className:"transition-all duration-300 hover:fill-emerald-600"}),e.jsx("text",{x:"580",y:"395",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Command executed!"})]}),e.jsx("rect",{x:"50",y:"400",width:"300",height:"40",rx:"6",fill:"#1f2937",fillOpacity:"0.8"}),e.jsx("text",{x:"60",y:"420",fill:"#60a5fa",className:"font-sans text-xs",children:"PATH Order: Leftmost directories checked first"}),e.jsx("text",{x:"60",y:"435",fill:"#10b981",className:"font-sans text-xs",children:"Search stops at first match"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsxs("h3",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"PATH Basics"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"A colon-separated list of directories. Shell searches these in order when you type a command."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-800 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-700",children:[e.jsxs("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Search Order"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Leftmost directory first, rightmost last. First match wins - stops searching."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsxs("h3",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Built-in Commands"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Shell builtins (cd, echo) don't use PATH. External commands (ls, grep) do."})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"PATH Components & Mechanics"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("h3",{className:"font-bold text-xl text-blue-600 dark:text-blue-400 mb-3",children:"What is PATH Exactly?"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"PATH"})," is an environment variable containing a list of directory paths separated by colons (:). When you execute a command without specifying its full path, the shell searches these directories in order until it finds an executable file with that name."]}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-green-800 dark:text-green-300 font-semibold",children:"Typical PATH Structure"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm mt-1 block",children:"/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/user/bin"}),e.jsxs("p",{className:"text-green-700 dark:text-green-400 text-sm mt-2",children:["• ",e.jsx("strong",{children:"/usr/local/bin"}),": Locally installed software",e.jsx("br",{}),"• ",e.jsx("strong",{children:"/usr/bin"}),": System-wide user commands",e.jsx("br",{}),"• ",e.jsx("strong",{children:"/bin"}),": Essential system binaries",e.jsx("br",{}),"• ",e.jsx("strong",{children:"/home/user/bin"}),": User's personal scripts"]})]})]})}),e.jsx(r,{fileModule:t,title:"Viewing and Modifying PATH",highlightLines:[1,3,5,7,9,11,13,15]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-700",children:[e.jsx("h3",{className:"font-bold text-xl text-green-600 dark:text-green-400 mb-3",children:"How Shell Locates Commands"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["When you type ",e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"ls"}),', the shell follows a specific lookup order. Understanding this flow helps debug "command not found" errors.']}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-blue-800 dark:text-blue-300 font-semibold",children:"Command Lookup Order"}),e.jsxs("div",{className:"text-blue-700 dark:text-blue-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs",children:"1"}),e.jsx("span",{children:"Check shell builtins (cd, echo, type)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs",children:"2"}),e.jsx("span",{children:"Check shell functions"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs",children:"3"}),e.jsx("span",{children:"Search directories in PATH (left to right)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs",children:"4"}),e.jsx("span",{children:'If not found: "command not found" error'})]})]})]})]})}),e.jsx(r,{fileModule:s,title:"Command Location Examples",highlightLines:[1,3,5,7,9,11,13,15]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsx("h3",{className:"font-bold text-xl text-purple-600 dark:text-purple-400 mb-3",children:"Script Execution Methods"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Different ways to execute shell scripts, each with different PATH considerations and execution contexts."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2",children:"Methods with PATH"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"▶"}),e.jsxs("span",{children:[e.jsx("code",{children:"script.sh"})," - Searches PATH"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"▶"}),e.jsxs("span",{children:[e.jsx("code",{children:"./script.sh"})," - Current directory"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"▶"}),e.jsxs("span",{children:[e.jsx("code",{children:"bash script.sh"})," - Explicit interpreter"]})]})]})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-700 dark:text-amber-300 mb-2",children:"Methods without PATH"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsxs("span",{children:[e.jsx("code",{children:"source script.sh"})," - Runs in current shell"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsxs("span",{children:[e.jsx("code",{children:". script.sh"})," - Same as source"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsx("span",{children:"Absolute path always works"})]})]})]})]}),e.jsx(r,{fileModule:n,title:"Different Execution Methods",highlightLines:[1,3,5,7,9,11,13]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Real-World Scenarios & Student Examples"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"Swadeep's Python Development Issue"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Swadeep from Barrackpore installed Python but can't run ",e.jsx("code",{children:"python3"}),' in his terminal. His script shows "command not found".']}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"1"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Problem:"})," Python installed to ",e.jsx("code",{children:"/usr/local/python3.9/bin"})]}),e.jsx("code",{className:"text-xs bg-orange-100 dark:bg-orange-900 p-1 rounded block mt-1",children:"which python3  # Returns nothing"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"2"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Diagnosis:"})," Check PATH doesn't include Python directory"]}),e.jsx("code",{className:"text-xs bg-orange-100 dark:bg-orange-900 p-1 rounded block mt-1",children:"echo $PATH | grep python  # No output"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"3"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Solution:"})," Add to PATH in ~/.bashrc"]}),e.jsx("code",{className:"text-xs bg-green-100 dark:bg-green-900 p-1 rounded block mt-1",children:'export PATH="/usr/local/python3.9/bin:$PATH"'})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Tuhina's Security Audit"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:'Tuhina from Shyamnagar needs to audit system security. She finds a user added "." (current directory) to PATH.'}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"!"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Security Risk:"})," ",e.jsx("code",{children:"PATH=.:$PATH"})]}),e.jsx("p",{className:"text-xs text-red-600 dark:text-red-400 mt-1",children:"Malicious scripts in any directory could be executed accidentally"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"2"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Attack Scenario:"}),' User downloads a file called "ls"']}),e.jsx("code",{className:"text-xs bg-yellow-100 dark:bg-yellow-900 p-1 rounded block mt-1",children:"# In download directory: ./ls (malicious) runs instead of /bin/ls"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"✓"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Best Practice:"}),' Never include "." in PATH']}),e.jsx("code",{className:"text-xs bg-green-100 dark:bg-green-900 p-1 rounded block mt-1",children:"# Use ./script.sh or full paths instead"})]})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:a,title:"Creating and Installing Scripts",highlightLines:[1,3,5,7,9,11,13,15,17]})})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Common PATH Problems & Solutions"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Problem 1: Command Not Found"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"The most common PATH issue - the shell can't find your command or script."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Symptoms"}),e.jsxs("ul",{className:"text-sm text-red-600 dark:text-red-400 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:"bash: myapp: command not found"})]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"bash: ./script.sh: No such file or directory"})]}),e.jsx("li",{children:"• Command works with full path but not by name"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Solutions"}),e.jsxs("ul",{className:"text-sm text-green-600 dark:text-green-400 space-y-1",children:[e.jsxs("li",{children:["• Check PATH: ",e.jsx("code",{children:"echo $PATH"})]}),e.jsxs("li",{children:["• Check file exists: ",e.jsx("code",{children:"ls -la /path/to/command"})]}),e.jsxs("li",{children:["• Check executable bit: ",e.jsx("code",{children:"chmod +x script.sh"})]})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Problem 2: Wrong Version Executed"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"PATH order causes an unexpected version of a command to run."}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-800 dark:text-yellow-300 font-semibold",children:"Example: Python version conflict"}),e.jsx("code",{className:"text-yellow-700 dark:text-yellow-400 text-sm mt-1 block",children:`$ which python3
/usr/local/bin/python3  # Python 3.9

$ python3 --version
Python 3.6.9  # But running gives old version!

# Why? PATH has /usr/bin before /usr/local/bin`})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Problem 3: PATH Overwritten"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Scripts or profiles overwrite PATH instead of appending to it."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Wrong"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`# In .bashrc - DESTROYS existing PATH!
export PATH="/my/new/path"

# Results: ls, cp, mv all stop working!`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Correct"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`# Append to PATH
export PATH="$PATH:/my/new/path"

# Prepend to PATH (higher priority)
export PATH="/my/new/path:$PATH"`})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-6 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Best Practices & Professional Workflow"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"PATH Management Strategy"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"$HOME/bin"})," for personal scripts"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:'Never include "." (current directory) in PATH'})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"System paths (/bin, /usr/bin) should come before custom paths"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Debugging Commands"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"which command"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Shows which executable will run"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"type command"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Shows if builtin, alias, or external"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded",children:"command -v command"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"- Portable version of which"})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl shadow-lg p-6 border border-violet-200 dark:border-violet-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"PATH Essentials Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"1"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Check PATH"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Always use ",e.jsx("code",{children:"echo $PATH"})," first"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"2"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Append, Don't Replace"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[e.jsx("code",{children:'PATH="$PATH:/new"'})," not ",e.jsx("code",{children:'PATH="/new"'})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"3"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"No Dot in PATH"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:'Never include "." for security'})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"4"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Use which/type"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Debug with ",e.jsx("code",{children:"which command"})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-amber-600 dark:text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Exercises"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Think about..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Why would Abhronila, working on a project in Ichapur, need to understand PATH when collaborating with Debangshu in Naihati?"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Observe carefully..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["What happens when you have two different versions of Python in ",e.jsx("code",{children:"/usr/local/bin"})," and ",e.jsx("code",{children:"/usr/bin"}),"? Which one runs when you type ",e.jsx("code",{children:"python3"}),"?"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Try changing this..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Create a simple script called ",e.jsx("code",{children:"hello"})," in your home directory. Try to run it from different locations. What do you need to do to run it from anywhere?"]})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s]",children:e.jsx("div",{className:"bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Sukanta Hui • 27 years experience"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 rounded-r-lg mb-4",children:e.jsxs("p",{className:"text-green-800 dark:text-green-300",children:[e.jsx("strong",{children:"Critical Insight:"}),` Think of PATH as your shell's "phone directory." When you call a friend (command), the shell looks through this directory in order. If your friend is listed in multiple places, the first listing wins. This is why understanding PATH order is crucial for managing software versions and avoiding conflicts.`]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Classroom Exercise"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Have students create a script, make it executable, and try different execution methods. Then have them add their script directory to PATH and observe the difference."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Tip"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In production environments, always use absolute paths in scripts and cron jobs. Never rely on PATH being set correctly. Use ",e.jsx("code",{children:"/usr/bin/python3"})," not just ",e.jsx("code",{children:"python3"}),"."]})]})]})]})]})})})]}),e.jsx("style",{jsx:!0,children:`
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

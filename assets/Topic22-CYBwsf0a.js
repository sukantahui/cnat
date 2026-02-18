import{r as o,j as e}from"./index-BFnLuail.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const d=`#!/bin/bash
# Basic getopts example for Barrackpore College scripts

# Default values
INPUT_FILE=""
OUTPUT_FILE="output.txt"
VERBOSE=0

# Help function
usage() {
    echo "Usage: $0 [-f input_file] [-o output_file] [-v] [arguments...]"
    echo "Options:"
    echo "  -f FILE    Input file (required)"
    echo "  -o FILE    Output file (default: output.txt)"
    echo "  -v         Verbose mode"
    echo "  -h         Show this help message"
    echo ""
    echo "Example: $0 -f students.csv -o report.txt -v"
    exit 1
}

# Parse command line options
while getopts ":f:o:vh" opt; do
    case $opt in
        f)
            INPUT_FILE="$OPTARG"
            ;;
        o)
            OUTPUT_FILE="$OPTARG"
            ;;
        v)
            VERBOSE=1
            ;;
        h)
            usage
            ;;
        \\?)
            echo "Invalid option: -$OPTARG" >&2
            usage
            ;;
        :)
            echo "Option -$OPTARG requires an argument." >&2
            usage
            ;;
    esac
done

# Shift processed options out
shift $((OPTIND - 1))

# Validate required options
if [ -z "$INPUT_FILE" ]; then
    echo "Error: Input file (-f) is required." >&2
    usage
fi

if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found." >&2
    exit 1
fi

# Display settings if verbose
if [ $VERBOSE -eq 1 ]; then
    echo "=== Script Configuration ==="
    echo "Input file: $INPUT_FILE"
    echo "Output file: $OUTPUT_FILE"
    echo "Verbose mode: ON"
    echo "Additional arguments: $@"
    echo "============================"
fi

# Process remaining arguments (if any)
for arg in "$@"; do
    if [ $VERBOSE -eq 1 ]; then
        echo "Processing argument: $arg"
    fi
done

echo "Processing complete. Output saved to $OUTPUT_FILE"`,c=`#!/bin/bash
# Advanced getopts example with multiple features
# Used by Swadeep in Naihati school administration

# Initialize variables
INPUT_FILES=()
OUTPUT_DIR="."
COMPRESS=0
EXTRACT=0
FORCE=0
LOG_LEVEL="INFO"

# Parse options
while getopts ":i:o:cefvl:" opt; do
    case $opt in
        i)
            # Multiple -i options allowed
            INPUT_FILES+=("$OPTARG")
            ;;
        o)
            OUTPUT_DIR="$OPTARG"
            ;;
        c)
            COMPRESS=1
            ;;
        e)
            EXTRACT=1
            ;;
        f)
            FORCE=1
            ;;
        v)
            # Multiple -v increases verbosity
            if [ "$LOG_LEVEL" = "INFO" ]; then
                LOG_LEVEL="DEBUG"
            elif [ "$LOG_LEVEL" = "DEBUG" ]; then
                LOG_LEVEL="TRACE"
            fi
            ;;
        l)
            case "$OPTARG" in
                error|ERROR) LOG_LEVEL="ERROR" ;;
                warn|WARN)   LOG_LEVEL="WARN"  ;;
                info|INFO)   LOG_LEVEL="INFO"  ;;
                debug|DEBUG) LOG_LEVEL="DEBUG" ;;
                trace|TRACE) LOG_LEVEL="TRACE" ;;
                *)
                    echo "Invalid log level: $OPTARG" >&2
                    echo "Valid levels: error, warn, info, debug, trace" >&2
                    exit 1
                    ;;
            esac
            ;;
        \\?)
            echo "Invalid option: -$OPTARG" >&2
            exit 1
            ;;
        :)
            echo "Option -$OPTARG requires an argument." >&2
            exit 1
            ;;
    esac
done

shift $((OPTIND - 1))

# Validate inputs
if [ \${#INPUT_FILES[@]} -eq 0 ]; then
    echo "Error: At least one input file (-i) is required." >&2
    exit 1
fi

# Check for conflicting options
if [ $COMPRESS -eq 1 ] && [ $EXTRACT -eq 1 ]; then
    echo "Error: Cannot use -c (compress) and -e (extract) together." >&2
    exit 1
fi

# Validate output directory
if [ ! -d "$OUTPUT_DIR" ]; then
    if [ $FORCE -eq 1 ]; then
        mkdir -p "$OUTPUT_DIR"
        echo "Created output directory: $OUTPUT_DIR"
    else
        echo "Error: Output directory '$OUTPUT_DIR' doesn't exist." >&2
        echo "Use -f to create it automatically." >&2
        exit 1
    fi
fi

# Log based on level
log() {
    local level="$1"
    local message="$2"
    
    case "$LOG_LEVEL" in
        ERROR) [[ "$level" =~ ^(ERROR)$ ]] && echo "[$level] $message" >&2 ;;
        WARN)  [[ "$level" =~ ^(ERROR|WARN)$ ]] && echo "[$level] $message" >&2 ;;
        INFO)  [[ "$level" =~ ^(ERROR|WARN|INFO)$ ]] && echo "[$level] $message" ;;
        DEBUG) [[ "$level" =~ ^(ERROR|WARN|INFO|DEBUG)$ ]] && echo "[$level] $message" ;;
        TRACE) echo "[$level] $message" ;;
    esac
}

# Process files
log "INFO" "Starting processing with log level: $LOG_LEVEL"
log "DEBUG" "Output directory: $OUTPUT_DIR"
log "DEBUG" "Force mode: $FORCE"
log "DEBUG" "Compress: $COMPRESS, Extract: $EXTRACT"

for file in "\${INPUT_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        log "ERROR" "Input file not found: $file"
        continue
    fi
    
    log "INFO" "Processing: $file"
    
    if [ $COMPRESS -eq 1 ]; then
        log "DEBUG" "Compressing $file"
        # Compression logic here
    elif [ $EXTRACT -eq 1 ]; then
        log "DEBUG" "Extracting $file"
        # Extraction logic here
    else
        log "DEBUG" "Copying $file to $OUTPUT_DIR"
        cp "$file" "$OUTPUT_DIR/"
    fi
done

log "INFO" "Processing complete"`,x=`#!/bin/bash
# Production-ready backup script with comprehensive option handling
# Used by Abhronila for Barrackpore College backups

set -euo pipefail

# Default configuration
BACKUP_DIR="/backups/college"
COMPRESSION_LEVEL=6
RETENTION_DAYS=30
DRY_RUN=0
QUIET=0
LOG_FILE="/var/log/backup.log"
DEPARTMENT="all"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    if [ $QUIET -eq 0 ]; then
        echo "[$timestamp] [$level] $message"
    fi
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Display usage
usage() {
    cat << EOF
Usage: $0 [OPTIONS] [SOURCE_DIRS...]

Backup script for Barrackpore College data.

OPTIONS:
  -d, --department NAME   Department to backup (default: all)
  -o, --output DIR        Backup directory (default: $BACKUP_DIR)
  -c, --compress LEVEL    Compression level 0-9 (default: $COMPRESSION_LEVEL)
  -r, --retention DAYS    Keep backups for N days (default: $RETENTION_DAYS)
  -l, --log FILE          Log file (default: $LOG_FILE)
  -q, --quiet             Suppress console output
  -n, --dry-run           Show what would be done without doing it
  -h, --help              Show this help message

EXAMPLES:
  $0 -d physics -c 9 /home/physics/data
  $0 --department "computer science" --retention 60 /var/www
  $0 -q -o /mnt/backup /home /etc

SOURCE_DIRS:
  One or more directories to backup. If not specified, defaults to
  department-specific directories.
EOF
    exit 0
}

# Parse long options as arguments
for arg in "$@"; do
    shift
    case "$arg" in
        "--help")      set -- "$@" "-h" ;;
        "--department") set -- "$@" "-d" ;;
        "--output")    set -- "$@" "-o" ;;
        "--compress")  set -- "$@" "-c" ;;
        "--retention") set -- "$@" "-r" ;;
        "--log")       set -- "$@" "-l" ;;
        "--quiet")     set -- "$@" "-q" ;;
        "--dry-run")   set -- "$@" "-n" ;;
        *)             set -- "$@" "$arg" ;;
    esac
done

# Parse options with getopts
while getopts ":d:o:c:r:l:qnh" opt; do
    case $opt in
        d)
            DEPARTMENT="$OPTARG"
            ;;
        o)
            BACKUP_DIR="$OPTARG"
            ;;
        c)
            if [[ ! "$OPTARG" =~ ^[0-9]$ ]] || [ "$OPTARG" -gt 9 ]; then
                echo "Error: Compression level must be 0-9" >&2
                exit 1
            fi
            COMPRESSION_LEVEL="$OPTARG"
            ;;
        r)
            if [[ ! "$OPTARG" =~ ^[0-9]+$ ]] || [ "$OPTARG" -lt 1 ]; then
                echo "Error: Retention days must be positive integer" >&2
                exit 1
            fi
            RETENTION_DAYS="$OPTARG"
            ;;
        l)
            LOG_FILE="$OPTARG"
            ;;
        q)
            QUIET=1
            ;;
        n)
            DRY_RUN=1
            log "INFO" "DRY RUN MODE ENABLED - No changes will be made"
            ;;
        h)
            usage
            ;;
        \\?)
            echo "Invalid option: -$OPTARG" >&2
            usage
            ;;
        :)
            echo "Option -$OPTARG requires an argument." >&2
            usage
            ;;
    esac
done

shift $((OPTIND - 1))

# Get source directories
if [ $# -eq 0 ]; then
    # Default directories based on department
    case "$DEPARTMENT" in
        physics)    SOURCE_DIRS=("/home/physics" "/var/physics_data") ;;
        maths)      SOURCE_DIRS=("/home/maths" "/opt/maths_app") ;;
        cs|"computer science")
                    SOURCE_DIRS=("/home/cs" "/var/www" "/opt/labs") ;;
        all)        SOURCE_DIRS=("/home" "/etc" "/var/www") ;;
        *)
            echo "Error: Unknown department: $DEPARTMENT" >&2
            echo "Available: physics, maths, cs, all" >&2
            exit 1
            ;;
    esac
else
    SOURCE_DIRS=("$@")
fi

# Validate
for dir in "\${SOURCE_DIRS[@]}"; do
    if [ ! -d "$dir" ]; then
        echo "Error: Source directory not found: $dir" >&2
        exit 1
    fi
done

if [ ! -d "$BACKUP_DIR" ] && [ $DRY_RUN -eq 0 ]; then
    mkdir -p "$BACKUP_DIR"
    log "INFO" "Created backup directory: $BACKUP_DIR"
fi

# Create log directory if needed
LOG_DIR=$(dirname "$LOG_FILE")
if [ ! -d "$LOG_DIR" ] && [ $DRY_RUN -eq 0 ]; then
    mkdir -p "$LOG_DIR"
fi

# Main backup logic
log "INFO" "Starting backup for department: $DEPARTMENT"
log "INFO" "Source directories: \${SOURCE_DIRS[*]}"
log "INFO" "Backup directory: $BACKUP_DIR"
log "INFO" "Compression level: $COMPRESSION_LEVEL"

TIMESTAMP=$(date '+%Y%m%d_%H%M%S')
BACKUP_NAME="\${DEPARTMENT}_backup_\${TIMESTAMP}.tar.gz"

if [ $DRY_RUN -eq 1 ]; then
    log "INFO" "Would create: $BACKUP_DIR/$BACKUP_NAME"
    log "INFO" "Would compress with level: $COMPRESSION_LEVEL"
    log "INFO" "Would clean backups older than $RETENTION_DAYS days"
else
    # Actual backup
    tar czf "$BACKUP_DIR/$BACKUP_NAME" \\
        --exclude="*.tmp" \\
        --exclude="*.log" \\
        --exclude="cache/*" \\
        -C / \\
        "\${SOURCE_DIRS[@]}" 2>&1 | while read line; do
        log "DEBUG" "tar: $line"
    done
    
    # Verify backup
    if [ -f "$BACKUP_DIR/$BACKUP_NAME" ]; then
        SIZE=$(du -h "$BACKUP_DIR/$BACKUP_NAME" | cut -f1)
        log "INFO" "Backup created: $BACKUP_NAME ($SIZE)"
    else
        log "ERROR" "Backup failed to create"
        exit 1
    fi
    
    # Clean old backups
    find "$BACKUP_DIR" -name "\${DEPARTMENT}_backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete 2>/dev/null || true
fi

log "INFO" "Backup process completed"`,m=`#!/bin/bash
# Comparison of different option parsing methods

echo "=== Method Comparison: Parsing '-f file.txt -v' ==="
echo

# Method 1: Manual parsing (not recommended)
echo "1. MANUAL PARSING (Error-prone):"
cat << 'EOF'
while [ $# -gt 0 ]; do
    case $1 in
        -f)
            if [ -z "$2" ]; then
                echo "Error: -f requires argument"
                exit 1
            fi
            FILE="$2"
            shift 2
            ;;
        -v)
            VERBOSE=1
            shift
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done
EOF
echo "Issues: No support for -vf, messy error handling"
echo

# Method 2: getopts (recommended for short options)
echo "2. GETOPTS (Built-in, Portable):"
cat << 'EOF'
while getopts ":f:v" opt; do
    case $opt in
        f) FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        ?) echo "Invalid option" >&2; exit 1 ;;
        :) echo "Option requires argument" >&2; exit 1 ;;
    esac
done
shift $((OPTIND - 1))
EOF
echo "Pros: Portable, handles -vf, good error handling"
echo "Cons: No long option support"
echo

# Method 3: getopt (external, more features)
echo "3. GETOPT (External, More Features):"
cat << 'EOF'
TEMP=$(getopt -o f:v --long file:,verbose -n "$0" -- "$@")
eval set -- "$TEMP"

while true; do
    case "$1" in
        -f|--file)
            FILE="$2"
            shift 2
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        --)
            shift
            break
            ;;
        *)
            echo "Internal error!"
            exit 1
            ;;
    esac
done
EOF
echo "Pros: Long option support, more Unix-like"
echo "Cons: Not always available, external dependency"
echo

# Method 4: Modern approach with shift
echo "4. MODERN MANUAL (Simple cases only):"
cat << 'EOF'
while [[ $# -gt 0 ]]; do
    case $1 in
        -f|--file)
            FILE="$2"
            shift 2
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        -*)
            echo "Unknown option: $1"
            exit 1
            ;;
        *)
            # Non-option argument
            break
            ;;
    esac
done
EOF
echo "Use: Simple scripts, when getopts is overkill"
echo

echo "=== RECOMMENDATION ==="
echo "• Use getopts for portable scripts with short options"
echo "• Use getopt if you need long options and can rely on it"
echo "• Use manual parsing only for trivial cases"`,h=`#!/bin/bash
# Real-world student database management system
# Used across Barrackpore, Shyamnagar, and Ichapur schools

set -euo pipefail

# Configuration
DB_FILE="\${HOME}/.student_db.csv"
BACKUP_DIR="\${HOME}/student_backups"

# Ensure database exists
init_db() {
    if [ ! -f "$DB_FILE" ]; then
        echo "id,name,age,department,email,grade,enrollment_date" > "$DB_FILE"
    fi
}

# Backup database
backup_db() {
    local timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_file="$BACKUP_DIR/backup_$timestamp.csv"
    
    mkdir -p "$BACKUP_DIR"
    cp "$DB_FILE" "$backup_file"
    echo "Backup created: $backup_file"
}

# Add student
add_student() {
    local name age department email grade
    
    # Parse add command options
    while getopts ":n:a:d:e:g:" opt; do
        case $opt in
            n) name="$OPTARG" ;;
            a) age="$OPTARG" ;;
            d) department="$OPTARG" ;;
            e) email="$OPTARG" ;;
            g) grade="$OPTARG" ;;
            ?) echo "Invalid option for add command" >&2; return 1 ;;
            :) echo "Option requires argument" >&2; return 1 ;;
        esac
    done
    shift $((OPTIND - 1))
    
    # Validate
    if [ -z "$name" ] || [ -z "$age" ] || [ -z "$department" ]; then
        echo "Error: Name, age, and department are required" >&2
        return 1
    fi
    
    # Generate ID
    local next_id=1
    if [ -f "$DB_FILE" ] && [ $(wc -l < "$DB_FILE") -gt 1 ]; then
        next_id=$(($(tail -1 "$DB_FILE" | cut -d, -f1) + 1))
    fi
    
    # Defaults
    : \${email:="unknown@school.edu"}
    : \${grade:="N/A"}
    local enrollment_date=$(date '+%Y-%m-%d')
    
    # Add to database
    echo "$next_id,$name,$age,$department,$email,$grade,$enrollment_date" >> "$DB_FILE"
    echo "Added student: $name (ID: $next_id)"
}

# Search students
search_students() {
    local department grade
    
    while getopts ":d:g:" opt; do
        case $opt in
            d) department="$OPTARG" ;;
            g) grade="$OPTARG" ;;
            ?) echo "Invalid option for search command" >&2; return 1 ;;
        esac
    done
    shift $((OPTIND - 1))
    
    echo "Search results:"
    echo "==============="
    
    # Build grep pattern
    local grep_pattern=""
    [ -n "$department" ] && grep_pattern="\${grep_pattern}.*$department.*"
    [ -n "$grade" ] && grep_pattern="\${grep_pattern}.*$grade.*"
    
    if [ -n "$grep_pattern" ]; then
        grep -i "$grep_pattern" "$DB_FILE" | column -t -s,
    else
        # Show all if no filters
        tail -n +2 "$DB_FILE" | column -t -s,
    fi
}

# Generate report
generate_report() {
    local format="text"
    local output_file="report_$(date '+%Y%m%d').txt"
    
    # Parse report options
    while getopts ":f:o:" opt; do
        case $opt in
            f) format="$OPTARG" ;;
            o) output_file="$OPTARG" ;;
            ?) echo "Invalid option for report command" >&2; return 1 ;;
            :) echo "Option requires argument" >&2; return 1 ;;
        esac
    done
    shift $((OPTIND - 1))
    
    case "$format" in
        text)
            echo "Student Database Report" > "$output_file"
            echo "Generated: $(date)" >> "$output_file"
            echo "======================" >> "$output_file"
            awk -F, 'NR>1 {dept[$4]++; total++} END {
                print "Total students:", total
                print "\\nBy department:"
                for (d in dept) printf "  %-20s: %d\\n", d, dept[d]
            }' "$DB_FILE" >> "$output_file"
            echo "Text report saved to: $output_file"
            ;;
        csv)
            cp "$DB_FILE" "$output_file"
            echo "CSV report saved to: $output_file"
            ;;
        *)
            echo "Unknown format: $format" >&2
            echo "Available formats: text, csv" >&2
            return 1
            ;;
    esac
}

# Main command dispatcher
main() {
    init_db
    
    if [ $# -eq 0 ]; then
        echo "Usage: $0 COMMAND [OPTIONS]"
        echo "Commands:"
        echo "  add     - Add new student"
        echo "  search  - Search students"
        echo "  report  - Generate report"
        echo "  backup  - Backup database"
        echo "  help    - Show help"
        exit 1
    fi
    
    local command="$1"
    shift
    
    case "$command" in
        add)
            add_student "$@"
            ;;
        search)
            search_students "$@"
            ;;
        report)
            generate_report "$@"
            ;;
        backup)
            backup_db "$@"
            ;;
        help|--help|-h)
            cat << EOF
Student Database Management System
==================================

Commands:
  add     -n NAME -a AGE -d DEPARTMENT [-e EMAIL] [-g GRADE]
  search  [-d DEPARTMENT] [-g GRADE]
  report  [-f FORMAT] [-o OUTPUT_FILE]
  backup

Examples:
  $0 add -n "Tuhina Das" -a 18 -d "Computer Science"
  $0 search -d "Physics" -g A
  $0 report -f csv -o physics_report.csv
EOF
            ;;
        *)
            echo "Unknown command: $command" >&2
            echo "Use: add, search, report, backup, help" >&2
            exit 1
            ;;
    esac
}

# Run main function
main "$@"`,b=()=>{const[t,l]=o.useState(!1),[n,i]=o.useState("basic");return o.useEffect(()=>{const r=setTimeout(()=>l(!0),100);return()=>clearTimeout(r)},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8",children:[e.jsx("style",{jsx:!0,children:`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes optionFlow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes highlightOption {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}),e.jsxs("div",{className:s("max-w-6xl mx-auto mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]"),children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent",children:"Topic 22: Command-line Option Parsing with getopts"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Professional argument handling for robust, user-friendly shell scripts"})]})]}),e.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"leading-relaxed",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"getopts"})," is the professional's choice for parsing command-line options in shell scripts. Unlike manual parsing with",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"$1, $2, ..."}),", getopts provides built-in support for short options (",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"-h"}),"), long options (",e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:"--help"}),"), option arguments, error handling, and more. It's essential for creating production-quality scripts that follow Unix/Linux conventions."]})})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-violet-700 dark:text-violet-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Why Use getopts Instead of Manual Parsing?"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-red-200 dark:border-red-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-red-600 dark:text-red-300 font-bold text-xl",children:"✗"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Manual Parsing ($1, $2...)"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{className:"text-sm",children:"Error-prone and verbose"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{className:"text-sm",children:"No built-in validation"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("span",{className:"text-sm",children:"Hard to handle combined options (-xvf)"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg",children:e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300",children:`# Manual parsing example (messy!)
while [ "$1" != "" ]; do
    case $1 in
        -f) shift; FILE=$1 ;;
        -v) VERBOSE=1 ;;
        *) echo "Unknown option"; exit 1 ;;
    esac
    shift
done`})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-green-600 dark:text-green-300 font-bold text-xl",children:"✓"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"getopts (Built-in)"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Standardized and reliable"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Built-in error handling"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm",children:"Supports combined short options (-xvf)"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg",children:e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300",children:`# getopts example (clean!)
while getopts ":f:v" opt; do
    case $opt in
        f) FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        ?) echo "Invalid option"; exit 1 ;;
    esac
done`})})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 mb-8 border border-gray-300 dark:border-gray-700",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300",children:"getopts Data Flow"}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs("svg",{width:"100%",height:"180",className:"overflow-visible",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8b5cf6"})})}),e.jsx("rect",{x:"5%",y:"20",width:"25%",height:"50",rx:"8",fill:"#f5f3ff",stroke:"#8b5cf6",strokeWidth:"2",className:"hover:fill-violet-200 transition-colors duration-300"}),e.jsx("text",{x:"17.5%",y:"45",textAnchor:"middle",fill:"#5b21b6",className:"text-sm font-semibold",children:"Command Line"}),e.jsx("text",{x:"17.5%",y:"62",textAnchor:"middle",fill:"#7c3aed",className:"text-xs",children:"script.sh -f file.txt -v"}),e.jsx("rect",{x:"35%",y:"20",width:"25%",height:"50",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2",className:"hover:fill-blue-200 transition-colors duration-300"}),e.jsx("text",{x:"47.5%",y:"45",textAnchor:"middle",fill:"#1e40af",className:"text-sm font-semibold",children:"getopts"}),e.jsx("text",{x:"47.5%",y:"62",textAnchor:"middle",fill:"#1d4ed8",className:"text-xs",children:"Parser & Validator"}),e.jsx("rect",{x:"65%",y:"20",width:"30%",height:"50",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2",className:"hover:fill-green-200 transition-colors duration-300"}),e.jsx("text",{x:"80%",y:"45",textAnchor:"middle",fill:"#065f46",className:"text-sm font-semibold",children:"Script Variables"}),e.jsx("text",{x:"80%",y:"62",textAnchor:"middle",fill:"#047857",className:"text-xs",children:'FILE="file.txt", VERBOSE=1'}),e.jsx("path",{d:"M150,45 L240,45",stroke:"#8b5cf6",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M340,45 L430,45",stroke:"#8b5cf6",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsxs("g",{transform:"translate(0, 100)",children:[e.jsx("rect",{x:"10%",y:"0",width:"15%",height:"30",rx:"6",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"17.5%",y:"18",textAnchor:"middle",fill:"#92400e",className:"text-xs font-semibold",children:"Short"}),e.jsx("text",{x:"17.5%",y:"28",textAnchor:"middle",fill:"#b45309",className:"text-xs",children:"-f file"}),e.jsx("rect",{x:"30%",y:"0",width:"15%",height:"30",rx:"6",fill:"#fce7f3",stroke:"#db2777",strokeWidth:"2"}),e.jsx("text",{x:"37.5%",y:"18",textAnchor:"middle",fill:"#9d174d",className:"text-xs font-semibold",children:"Combined"}),e.jsx("text",{x:"37.5%",y:"28",textAnchor:"middle",fill:"#be185d",className:"text-xs",children:"-xvf"}),e.jsx("rect",{x:"50%",y:"0",width:"15%",height:"30",rx:"6",fill:"#e0e7ff",stroke:"#4f46e5",strokeWidth:"2"}),e.jsx("text",{x:"57.5%",y:"18",textAnchor:"middle",fill:"#3730a3",className:"text-xs font-semibold",children:"Long"}),e.jsx("text",{x:"57.5%",y:"28",textAnchor:"middle",fill:"#4338ca",className:"text-xs",children:"--file"}),e.jsx("rect",{x:"70%",y:"0",width:"20%",height:"30",rx:"6",fill:"#f0f9ff",stroke:"#0ea5e9",strokeWidth:"2"}),e.jsx("text",{x:"80%",y:"18",textAnchor:"middle",fill:"#075985",className:"text-xs font-semibold",children:"With Args"}),e.jsx("text",{x:"80%",y:"28",textAnchor:"middle",fill:"#0369a1",className:"text-xs",children:"-o output"})]})]})})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-violet-700 dark:text-violet-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"getopts Basic Syntax"]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("div",{className:"flex space-x-4 mb-6 overflow-x-auto",children:["basic","syntax","variables","colon"].map(r=>e.jsx("button",{onClick:()=>i(r),className:s("px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap",n===r?"bg-violet-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r==="colon"?"Colon Magic":r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{children:[n==="basic"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"Basic Loop Structure"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-4 rounded",children:`while getopts ":o:v" opt; do
    case $opt in
        o) OUTPUT_FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        ?) echo "Invalid option: -$OPTARG" >&2; exit 1 ;;
    esac
done`})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-300 mb-1",children:"getopts string"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-xs",children:'":o:v"'})," - Options specification"]})]}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-green-800 dark:text-green-300 mb-1",children:"opt variable"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-xs",children:"opt"})," - Current option character"]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-purple-800 dark:text-purple-300 mb-1",children:"OPTARG"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-xs",children:"$OPTARG"})," - Argument for current option"]})]})]})]}),n==="syntax"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Option Specification String"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg",children:[e.jsx("code",{className:"text-lg font-mono text-blue-700 dark:text-blue-300",children:'":f:vo:"'}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-blue-500 mr-2"}),e.jsxs("span",{className:"text-sm",children:[e.jsx("code",{className:"text-xs",children:"f:"})," - Option f with required argument"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-green-500 mr-2"}),e.jsxs("span",{className:"text-sm",children:[e.jsx("code",{className:"text-xs",children:"v"})," - Option v without argument"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-purple-500 mr-2"}),e.jsxs("span",{className:"text-sm",children:[e.jsx("code",{className:"text-xs",children:"o:"})," - Option o with required argument"]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Character Meanings"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("code",{className:"text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"a:"}),e.jsx("span",{className:"ml-2",children:"Option 'a' requires argument"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"b"}),e.jsx("span",{className:"ml-2",children:"Option 'b' takes no argument"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:":"}),e.jsx("span",{className:"ml-2",children:"First char: silent error reporting"})]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded",children:"?"}),e.jsx("span",{className:"ml-2",children:"Invalid option placeholder"})]})]})]})]})]}),n==="variables"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"Built-in Variables"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("code",{className:"text-lg font-mono text-green-700 dark:text-green-300 mr-3",children:"$OPTARG"}),e.jsx("span",{className:"text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded",children:"Read-Only"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Contains the argument for the current option. Only set for options that require arguments."}),e.jsxs("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded mt-2",children:['# When parsing "-f file.txt", inside case for "f":',e.jsx("br",{}),'f) filename="$OPTARG" ;;  # OPTARG contains "file.txt"']})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("code",{className:"text-lg font-mono text-purple-700 dark:text-purple-300 mr-3",children:"$OPTIND"}),e.jsx("span",{className:"text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded",children:"Index Variable"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"The index of the next argument to be processed. Essential for accessing non-option arguments after getopts."}),e.jsxs("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-purple-100 dark:bg-purple-900 p-2 rounded mt-2",children:["# After getopts loop:",e.jsx("br",{}),"shift $((OPTIND - 1))  # Remove processed options",e.jsx("br",{}),"# Now $1, $2... contain non-option arguments"]})]})]})]}),n==="colon"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300",children:"The Magic of Colon"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700",children:[e.jsx("h5",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"Without Leading Colon"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-3 rounded",children:`while getopts "f:v" opt; do
    case $opt in
        f) FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        ?) echo "Invalid option" ;;
    esac
done`}),e.jsxs("p",{className:"text-sm text-red-700 dark:text-red-400 mt-2",children:["• getopts shows default error messages",e.jsx("br",{}),"• Script continues on errors",e.jsx("br",{}),"• Harder to customize"]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700",children:[e.jsx("h5",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"With Leading Colon"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-3 rounded",children:`while getopts ":f:v" opt; do
    case $opt in
        f) FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        ?) echo "Invalid option: -$OPTARG" ;;
        :) echo "Option -$OPTARG requires argument" ;;
    esac
done`}),e.jsxs("p",{className:"text-sm text-green-700 dark:text-green-400 mt-2",children:["• Silent error reporting",e.jsx("br",{}),"• Custom error handling",e.jsx("br",{}),"• Better user experience"]})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Real Example from Barrackpore"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Tuhina uses the leading colon in all her scripts at Barrackpore College. When a student types ",e.jsx("code",{className:"text-xs",children:"backup.sh -f"})," without a filename, her script shows:",e.jsx("code",{className:"text-xs block bg-blue-100 dark:bg-blue-900 p-2 rounded mt-2",children:"Error: Option -f requires a filename argument"}),"instead of the generic getopts error."]})]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-violet-700 dark:text-violet-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Basic getopts Example"]}),e.jsx(a,{fileModule:d,title:"Basic Option Parsing Script",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Test Commands"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"./script.sh -f students.csv -o report.txt -v"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"./script.sh --help"}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-900 p-2 rounded",children:"./script.sh -f data.txt"})]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"What This Does"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Parses -f (file) with required argument"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Handles -o (output) optional argument"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Sets -v (verbose) flag"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"}),e.jsx("span",{children:"Shows help with --help or -h"})]})]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Key Learning"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Notice the ",e.jsx("code",{className:"text-xs",children:"shift $((OPTIND - 1))"})," on line 22. This removes all processed options, leaving only non-option arguments in ",e.jsx("code",{className:"text-xs",children:"$@"}),"."]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Advanced getopts Features"]}),e.jsx(a,{fileModule:c,title:"Advanced Option Parsing",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Advanced Techniques Demonstrated"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-semibold text-amber-700 dark:text-amber-400",children:"Option Grouping"}),e.jsxs("code",{className:"text-xs text-gray-700 dark:text-gray-300 bg-amber-100 dark:bg-amber-900 p-2 rounded block",children:["-xvf","  # Equivalent to -x -v -f"]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-semibold text-amber-700 dark:text-amber-400",children:"Multiple Arguments"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 bg-amber-100 dark:bg-amber-900 p-2 rounded block",children:"-i file1 -i file2 -i file3"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-semibold text-amber-700 dark:text-amber-400",children:"Validation"}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 bg-amber-100 dark:bg-amber-900 p-2 rounded block",children:"Check if argument is a valid file"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-semibold text-amber-700 dark:text-amber-400",children:"Mutual Exclusion"}),e.jsxs("code",{className:"text-xs text-gray-700 dark:text-gray-300 bg-amber-100 dark:bg-amber-900 p-2 rounded block",children:["-c"," and ","-d"," cannot be used together"]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Real Usage in Naihati Schools"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Swadeep uses this pattern for the student grade processing system. Teachers can combine options like:",e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded mt-2",children:"process_grades.sh -c maths -i students.csv -i grades.csv -o report.pdf -v"}),"This processes multiple input files for the maths class and generates a verbose PDF report."]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"getopts vs getopt vs Manual Parsing"]}),e.jsx(a,{fileModule:m,title:"Comparison of Different Methods",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-green-800 dark:text-green-300 mb-3",children:"getopts (Built-in)"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Built into bash/shell"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Portable across systems"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{children:"No long option support"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-3",children:"getopt (External)"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Supports long options"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"More features"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{children:"External dependency"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-red-200 dark:border-red-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-red-800 dark:text-red-300 mb-3",children:"Manual Parsing"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Full control"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{children:"Error prone"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{children:"Verbose code"})]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Production-Ready Script"]}),e.jsx(a,{fileModule:x,title:"Production Backup Script with getopts",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700",children:[e.jsx("h4",{className:"text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-3",children:"Scenario: Barrackpore College Backup System"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Abhronila uses this script for daily backups across multiple departments. The getopts implementation allows:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"1"})}),e.jsxs("span",{children:["Faculty to specify department with ",e.jsx("code",{className:"text-sm",children:"-d"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"2"})}),e.jsxs("span",{children:["IT staff to set compression level with ",e.jsx("code",{className:"text-sm",children:"-c"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"3"})}),e.jsxs("span",{children:["Automated scripts to run silently with ",e.jsx("code",{className:"text-sm",children:"-q"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-sm",children:"4"})}),e.jsxs("span",{children:["Dry runs for testing with ",e.jsx("code",{className:"text-sm",children:"-n"})]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-rose-700 dark:text-rose-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Real-World Application"]}),e.jsx(a,{fileModule:h,title:"Student Database Management System",highlightLines:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]}),e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl border border-rose-200 dark:border-rose-700",children:[e.jsx("h4",{className:"font-bold text-rose-800 dark:text-rose-300 mb-2",children:"How This Script is Used"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-rose-100 dark:bg-rose-900 px-3 py-1 rounded mr-3",children:'./student_db.sh add -n "Tuhina Das" -a 18 -d "Computer Science" -e tuhina@barrackpore.edu'}),e.jsx("span",{className:"text-sm text-rose-700 dark:text-rose-400",children:"Add new student"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-rose-100 dark:bg-rose-900 px-3 py-1 rounded mr-3",children:'./student_db.sh search -d "Physics" -g A'}),e.jsx("span",{className:"text-sm text-rose-700 dark:text-rose-400",children:"Search physics students with grade A"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 bg-rose-100 dark:bg-rose-900 px-3 py-1 rounded mr-3",children:"./student_db.sh report --format pdf --output annual_report.pdf"}),e.jsx("span",{className:"text-sm text-rose-700 dark:text-rose-400",children:"Generate PDF report"})]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-red-700 dark:text-red-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"Pitfall 1: Forgetting to Shift"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-red-100 dark:bg-red-900 p-2 rounded",children:`# WRONG: Non-option arguments still contain processed options
while getopts ":f:v" opt; do ... done
echo "First arg: $1"  # Still shows "-f" if called with "-f file other"`}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-green-100 dark:bg-green-900 p-2 rounded",children:`# RIGHT: Shift processed options out
while getopts ":f:v" opt; do ... done
shift $((OPTIND - 1))
echo "First arg: $1"  # Now shows "other"`}),e.jsx("p",{className:"text-red-700 dark:text-red-400 text-sm",children:"Many students in Ichapur forget this step and wonder why their scripts behave strangely."})]})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"Pitfall 2: Missing Colon in Option String"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/30 rounded",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:'"f:v"'}),e.jsxs("p",{className:"text-xs text-red-600 dark:text-red-400 mt-1",children:["• Shows default error messages",e.jsx("br",{}),"• Hard to customize"]})]}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/30 rounded",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300",children:'":f:v"'}),e.jsxs("p",{className:"text-xs text-green-600 dark:text-green-400 mt-1",children:["• Silent error reporting",e.jsx("br",{}),"• Custom error handling"]})]})]})})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Pitfall 3: Case Sensitivity"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-blue-100 dark:bg-blue-900 p-2 rounded",children:`# 'f' and 'F' are different options!
while getopts ":f:F:" opt; do
    case $opt in
        f) input_file="$OPTARG" ;;
        F) filter="$OPTARG" ;;
    esac
done`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-400 text-sm",children:["Debangshu spent hours debugging why ",e.jsx("code",{className:"text-xs",children:"-F"})," wasn't working before realizing he was checking for ",e.jsx("code",{className:"text-xs",children:"f"})," (lowercase) in his case statement."]})]})]})]})]}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"Option Design"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Use lowercase for common options, uppercase for special cases"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Always include ",e.jsx("code",{className:"text-sm",children:"-h"})," or ",e.jsx("code",{className:"text-sm",children:"--help"})]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Validate option arguments immediately"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3",children:"Code Organization"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Define defaults before option parsing"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Group related options in the case statement"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:["Use ",e.jsx("code",{className:"text-sm",children:"shift $((OPTIND - 1))"})," consistently"]})]})]})]})]})]}),e.jsx("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1000ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 rounded-2xl p-6 border border-violet-300 dark:border-violet-700 hover:shadow-2xl transition-all duration-500 group",children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-violet-800 dark:text-violet-300",children:"Teacher's Note"}),e.jsx("p",{className:"text-sm text-violet-600 dark:text-violet-400",children:"Sukanta Hui • 27 years experience • Programming Languages, Web Development"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Professional Insight:"})," In my 27 years of teaching across Barrackpore and Shyamnagar, I've seen getopts transform amateur scripts into professional tools. The difference is immediately visible in how users interact with your scripts."]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-2",children:"Remember These Golden Rules:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-violet-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:["Always start your option string with a colon (",e.jsx("code",{className:"text-sm",children:'":"'}),") for silent error reporting"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-violet-500 mt-2 mr-3 flex-shrink-0"}),e.jsxs("span",{children:["Never forget ",e.jsx("code",{className:"text-sm",children:"shift $((OPTIND - 1))"})," after your getopts loop"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-violet-500 mt-2 mr-3 flex-shrink-0"}),e.jsx("span",{children:"Validate option arguments immediately in the case statement - don't defer validation"})]})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Pro Tip:"})," When Swadeep builds scripts for Ichapur schools, he creates a",e.jsx("code",{className:"text-sm",children:" usage()"})," function that's called from the ",e.jsx("code",{className:"text-sm",children:"-h"}),"option AND when option parsing fails. This ensures users always get helpful information, reducing support calls by 80%."]})]}),e.jsx("div",{className:"mt-4 pt-4 border-t border-violet-200 dark:border-violet-700",children:e.jsx("p",{className:"text-sm text-violet-700 dark:text-violet-400",children:"Email: sukantahui@codernaccotax.co.in • Mobile: 7003756860"})})]})}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"What You Should Remember"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-violet-600 dark:text-violet-400 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Option String Syntax"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-sm",children:":o:v"})," - colon silent, o requires arg, v doesn't"]})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Key Variables"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-sm",children:"$OPTARG"}),", ",e.jsx("code",{className:"text-sm",children:"$OPTIND"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-400 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Must-Do Step"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("code",{className:"text-sm",children:"shift $((OPTIND - 1))"})," after parsing"]})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-400 font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"Error Cases"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Handle ",e.jsx("code",{className:"text-sm",children:"\\?"})," and ",e.jsx("code",{className:"text-sm",children:":"})," in case"]})]})]})]})]})]}),e.jsx("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1200ms]"),children:e.jsxs("div",{className:"bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-300 dark:border-cyan-700",children:[e.jsxs("h3",{className:"text-xl font-bold text-cyan-800 dark:text-cyan-300 mb-4 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens when you run the basic script with",e.jsx("code",{className:"text-sm",children:" ./script.sh -f -v"}),"? Why does ",e.jsx("code",{className:"text-sm",children:"-v"}),"become the argument to ",e.jsx("code",{className:"text-sm",children:"-f"}),"? How could you prevent this?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Try changing this:"})," In the production script, what if Abhronila wants to add a ",e.jsx("code",{className:"text-sm",children:"--dry-run"})," option alongside ",e.jsx("code",{className:"text-sm",children:"-n"}),"? How would you modify the getopts string and case statement?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Consider:"})," How would you modify the student database script to allow",e.jsx("code",{className:"text-sm",children:' --department="Computer Science"'})," (with equals sign) in addition to ",e.jsx("code",{className:"text-sm",children:' -d "Computer Science"'}),"?"]})]})]})}),e.jsxs("section",{className:s("mb-12",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1300ms]"),children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300",children:"Professional Tips & Tricks"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-violet-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Option Validation Hack"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Validate file arguments immediately:",e.jsx("code",{className:"text-sm block mt-1 bg-violet-100 dark:bg-violet-900 p-2 rounded",children:`f) [ -f "$OPTARG" ] || { echo "File not found: $OPTARG"; exit 1; }
   FILE="$OPTARG" ;;`})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"Debugging Shortcut"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Add debug option to see parsed values:",e.jsx("code",{className:"text-sm block mt-1 bg-blue-100 dark:bg-blue-900 p-2 rounded",children:"D) set -x ;;  # Enable debug mode"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Production Trick"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["For Barrackpore scripts, I use descriptive error messages:",e.jsx("code",{className:"text-sm block mt-1 bg-emerald-100 dark:bg-emerald-900 p-2 rounded",children:':) echo "Option -$OPTARG requires an argument. See --help." >&2'})]})]})]})]})]}),e.jsx("div",{className:s("max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 dark:border-gray-700",t&&"motion-safe:animate-[fadeSlideUp_0.8s_ease-out] motion-safe:animation-delay-[1400ms]"),children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Topic 22: Command-line Option Parsing with getopts"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{className:"px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors duration-300",children:"Previous: Process Management"}),e.jsx("button",{className:"px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300",children:"Next: Using sed and awk"})]})]})})]})};export{b as default};

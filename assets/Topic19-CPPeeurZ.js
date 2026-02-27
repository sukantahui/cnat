import{r as o,j as e}from"./index-meFSU1Lv.js";import{c as i}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const u=`#!/bin/bash
# System monitoring pipeline in Barrackpore

echo "=== Barrackpore System Monitoring ==="

# 1. Basic pipe: Count processes
echo "1. Counting running processes:"
ps aux | wc -l
echo "Total processes running"

# 2. Pipe with filter: Find specific processes
echo -e "\\n2. Finding Java processes:"
ps aux | grep java | grep -v grep
echo "Java processes above"

# 3. Pipe with formatting: Disk usage
echo -e "\\n3. Disk usage (sorted by usage %):"
df -h | sort -k5 -hr | head -5
echo "Top 5 disks by usage"

# 4. Pipe with multiple commands
echo -e "\\n4. Memory usage summary:"
free -m | awk 'NR==2{printf "Used: %sMB (%.1f%%)\\n", $3, $3/$2*100}'
echo "Memory utilization"

# 5. Real-time monitoring with pipe
echo -e "\\n5. Top 5 CPU consuming processes:"
ps aux --sort=-%cpu | head -6 | tail -5 | awk '{printf "%-10s %-6s %s\\n", $11, $3, $1}'
echo "Format: Command %CPU User"

# 6. Network connections count by state
echo -e "\\n6. Network connections by state:"
netstat -an | grep tcp | awk '{print $6}' | sort | uniq -c | sort -rn
echo "TCP connection states"

# 7. User login monitoring
echo -e "\\n7. Current logged in users:"
who | awk '{print $1}' | sort | uniq -c | sort -rn
echo "Users with login count"

# 8. System load average
echo -e "\\n8. System load average:"
uptime | awk -F'load average:' '{print $2}' | awk '{printf "1m: %s, 5m: %s, 15m: %s\\n", $1, $2, $3}'
echo "Load averages"`,f=`#!/bin/bash
# Log analysis pipeline for Shyamnagar servers

echo "=== Shyamnagar Server Log Analysis ==="
LOG_FILE="/var/log/shyamnagar/server.log"

# Create sample log data if file doesn't exist
if [ ! -f "$LOG_FILE" ]; then
    echo "Creating sample log data..."
    cat > "$LOG_FILE" << 'EOF'
2024-01-15 08:30:45 INFO Application started successfully
2024-01-15 08:31:10 WARN High memory usage detected: 85%
2024-01-15 08:32:05 ERROR Database connection failed
2024-01-15 08:33:22 INFO User login: swadeep
2024-01-15 08:34:18 ERROR File not found: /data/config.json
2024-01-15 08:35:42 INFO Backup completed
2024-01-15 08:36:15 WARN Slow query detected: 4.2s
2024-01-15 08:37:30 ERROR Permission denied: /var/log/app.log
2024-01-15 08:38:55 INFO Cache cleared
2024-01-15 08:39:10 WARN Disk space low: 15% free
EOF
fi

echo "Analyzing log file: $LOG_FILE"
echo "================================="

# 1. Count log entries by level
echo -e "\\n1. Log level distribution:"
grep -E "(INFO|WARN|ERROR)" "$LOG_FILE" | \\
    awk '{print $3}' | \\
    sort | \\
    uniq -c | \\
    sort -rn | \\
    awk '{printf "%-6s: %3d entries\\n", $2, $1}'

# 2. Extract error messages only
echo -e "\\n2. Error messages:"
grep "ERROR" "$LOG_FILE" | \\
    sed 's/.*ERROR //' | \\
    sort

# 3. Extract timestamps of warnings
echo -e "\\n3. Warning timestamps:"
grep "WARN" "$LOG_FILE" | \\
    awk '{print $1, $2}' | \\
    while read timestamp; do
        echo "Warning at: $timestamp"
    done

# 4. Count events per minute
echo -e "\\n4. Events per minute:"
awk '{print $1, $2}' "$LOG_FILE" | \\
    awk -F: '{print $1":"$2}' | \\
    sort | \\
    uniq -c | \\
    sort -n | \\
    awk '{printf "%s:00 - %d events\\n", $2, $1}'

# 5. Extract usernames from log entries
echo -e "\\n5. User activities detected:"
grep -o "login: [a-zA-Z]*" "$LOG_FILE" | \\
    awk '{print $2}' | \\
    sort | \\
    uniq -c | \\
    while read count user; do
        echo "User $user: $count login(s)"
    done

# 6. Find resource-related warnings
echo -e "\\n6. Resource warnings:"
grep -i "memory\\|disk\\|cpu" "$LOG_FILE" | \\
    sed 's/.*WARN //' | \\
    sort

# 7. Calculate error rate
echo -e "\\n7. Error statistics:"
total_lines=$(wc -l < "$LOG_FILE")
error_lines=$(grep -c "ERROR" "$LOG_FILE")
if [ $total_lines -gt 0 ]; then
    error_rate=$((error_lines * 100 / total_lines))
    echo "Total entries: $total_lines"
    echo "Errors: $error_lines"
    echo "Error rate: \${error_rate}%"
else
    echo "No log entries found"
fi

# 8. Create summary report
echo -e "\\n8. Summary report:"
{
    echo "=== Shyamnagar Log Analysis Report ==="
    echo "Generated: $(date)"
    echo "Log file: $LOG_FILE"
    echo "Analysis period: $(head -1 "$LOG_FILE" | awk '{print $1}')"
    echo "----------------------------------------"
    grep -c "INFO" "$LOG_FILE" | awk '{print "INFO events: "$1}'
    grep -c "WARN" "$LOG_FILE" | awk '{print "WARN events: "$1}'
    grep -c "ERROR" "$LOG_FILE" | awk '{print "ERROR events: "$1}'
    echo "----------------------------------------"
    echo "Most recent error:"
    grep "ERROR" "$LOG_FILE" | tail -1 | sed 's/.*ERROR //'
} | tee /tmp/log_analysis_report.txt

echo -e "\\nReport saved to: /tmp/log_analysis_report.txt"`,y=`#!/bin/bash
# Data processing pipeline for Ichapur analytics

echo "=== Ichapur Data Processing Pipeline ==="

# Create sample data file
DATA_FILE="/tmp/ichapur_sales.csv"
cat > "$DATA_FILE" << 'EOF'
date,product,region,quantity,price
2024-01-15,Widget A,North,150,25.50
2024-01-15,Widget B,South,200,18.75
2024-01-15,Widget A,East,180,25.50
2024-01-15,Widget C,West,90,32.00
2024-01-16,Widget B,North,220,18.75
2024-01-16,Widget A,South,170,25.50
2024-01-16,Widget C,East,110,32.00
2024-01-16,Widget B,West,190,18.75
2024-01-17,Widget A,North,160,25.50
2024-01-17,Widget C,South,85,32.00
EOF

echo "Processing sales data from: $DATA_FILE"
echo "=========================================="

# Multi-stage pipeline 1: Daily sales summary
echo -e "\\n1. Daily Sales Summary:"
cat "$DATA_FILE" | \\
    tail -n +2 | \\                # Skip header
    awk -F, '{print $1, $4 * $5}' | \\    # Calculate revenue
    awk '{
        date=$1
        revenue=$2
        total[date] += revenue
        count[date]++
    }
    END {
        for (date in total) {
            printf "%s: $%.2f (avg: $%.2f)\\n", 
                   date, total[date], total[date]/count[date]
        }
    }' | \\
    sort

# Multi-stage pipeline 2: Product performance
echo -e "\\n2. Product Performance Ranking:"
cat "$DATA_FILE" | \\
    tail -n +2 | \\
    awk -F, '{
        product=$2
        quantity=$4
        price=$5
        revenue[product] += quantity * price
        units[product] += quantity
    }
    END {
        for (product in revenue) {
            avg_price = revenue[product] / units[product]
            printf "%s,%.0f,%.2f,%.2f\\n", 
                   product, units[product], revenue[product], avg_price
        }
    }' | \\
    sort -t, -k3 -nr | \\          # Sort by revenue
    awk -F, 'BEGIN {
        print "Product,Units,Revenue,Avg Price"
        print "--------------------------------"
    }
    {
        printf "%-10s %6d $%9.2f $%8.2f\\n", $1, $2, $3, $4
    }'

# Multi-stage pipeline 3: Regional analysis
echo -e "\\n3. Regional Analysis:"
cat "$DATA_FILE" | \\
    tail -n +2 | \\
    awk -F, '{
        region=$3
        product=$2
        quantity=$4
        region_quantity[region] += quantity
        product_quantity[region,product] += quantity
    }
    END {
        # First pass: total by region
        for (region in region_quantity) {
            printf "Region: %s\\n", region
            printf "  Total units: %d\\n", region_quantity[region]
            printf "  Product breakdown:\\n"
            
            # Second pass: products in this region
            for (key in product_quantity) {
                split(key, parts, SUBSEP)
                if (parts[1] == region) {
                    printf "    - %s: %d units\\n", parts[2], product_quantity[key]
                }
            }
            print ""
        }
    }'

# Multi-stage pipeline 4: Complex transformation
echo -e "\\n4. Data Quality Check:"
cat "$DATA_FILE" | \\
    tail -n +2 | \\
    awk -F, '{
        # Flag suspicious entries
        if ($4 <= 0) {
            printf "ERROR: Invalid quantity on %s: %s\\n", $1, $0
        } else if ($5 <= 0) {
            printf "ERROR: Invalid price on %s: %s\\n", $1, $0
        } else if ($4 > 1000) {
            printf "WARN: Large order on %s: %d units\\n", $1, $4
        } else {
            print "OK: " $0
        }
    }' | \\
    grep -E "(ERROR|WARN)" | \\
    sort

# Multi-stage pipeline 5: Create summary report
echo -e "\\n5. Generating Summary Report..."
cat "$DATA_FILE" | \\
    tail -n +2 | \\
    awk -F, 'BEGIN {
        total_revenue = 0
        total_units = 0
        products_count = 0
        split("", products_seen)
    }
    {
        revenue = $4 * $5
        total_revenue += revenue
        total_units += $4
        
        if (!($2 in products_seen)) {
            products_seen[$2] = 1
            products_count++
        }
    }
    END {
        print "=== Ichapur Sales Summary ==="
        print "Period: 2024-01-15 to 2024-01-17"
        print "Total Revenue: $" total_revenue
        print "Total Units Sold: " total_units
        print "Average Price: $" total_revenue/total_units
        print "Unique Products: " products_count
        print "Average Daily Revenue: $" total_revenue/3
    }'

# Cleanup
rm -f "$DATA_FILE"`,b=`#!/bin/bash
# Error handling in Naihati deployment pipelines

echo "=== Naihati Deployment Pipeline with Error Handling ==="

# Enable pipefail for better error detection
set -o pipefail

# Function to simulate deployment steps
simulate_deploy() {
    local step="$1"
    local should_fail="\${2:-false}"
    
    echo "Executing: $step"
    
    if [ "$should_fail" = "true" ]; then
        echo "Simulating failure in: $step" >&2
        return 1
    else
        echo "Success: $step"
        return 0
    fi
}

echo "1. Basic pipeline with error handling:"
echo "---------------------------------------"

# Pipeline with error checking
if simulate_deploy "Step 1: Check dependencies" | \\
   simulate_deploy "Step 2: Build application" | \\
   simulate_deploy "Step 3: Run tests"; then
    echo "✓ Pipeline completed successfully"
else
    echo "✗ Pipeline failed with exit code: $?"
    echo "PIPESTATUS: \${PIPESTATUS[@]}"
fi

echo -e "\\n2. Pipeline with simulated failure:"
echo "----------------------------------------"

# Reset pipe status
PIPESTATUS=()

if simulate_deploy "Step 1: Check dependencies" | \\
   simulate_deploy "Step 2: Build application" true | \\
   simulate_deploy "Step 3: Run tests"; then
    echo "✓ Pipeline completed successfully"
else
    echo "✗ Pipeline failed"
    echo "Individual exit codes: \${PIPESTATUS[@]}"
    
    # Check which step failed
    for i in "\${!PIPESTATUS[@]}"; do
        if [ "\${PIPESTATUS[$i]}" -ne 0 ]; then
            echo "  Step $((i+1)) failed with code: \${PIPESTATUS[$i]}"
        fi
    done
fi

echo -e "\\n3. Using tee to capture output while checking errors:"
echo "---------------------------------------------------------"

{
    echo "=== Deployment Log ==="
    echo "Start time: $(date)"
    
    # Simulate deployment steps with tee
    simulate_deploy "Step 1: Backup current version"
    simulate_deploy "Step 2: Deploy new binaries" true
    simulate_deploy "Step 3: Update configuration"
    
    echo "End time: $(date)"
} 2>&1 | tee /tmp/deployment.log | \\
    while read line; do
        # Process each line while also checking for errors
        if echo "$line" | grep -q "Simulating failure"; then
            echo "ERROR DETECTED: $line" >&2
        fi
    done

deploy_exit=\${PIPESTATUS[0]}
echo "Deployment exit code: $deploy_exit"

echo -e "\\n4. Complex error handling with multiple conditions:"
echo "--------------------------------------------------------"

# Create a more complex pipeline
deploy_pipeline() {
    local log_file="$1"
    
    # Track individual command status
    local status1 status2 status3
    
    # Step 1: Pre-deployment checks
    simulate_deploy "Pre-check: Disk space" > >(tee -a "$log_file") 2>&1
    status1=$?
    
    # Step 2: Build (might fail)
    simulate_deploy "Build: Compile sources" true > >(tee -a "$log_file") 2>&1
    status2=$?
    
    # Step 3: Deploy (only if build succeeded)
    if [ $status2 -eq 0 ]; then
        simulate_deploy "Deploy: Copy files" > >(tee -a "$log_file") 2>&1
        status3=$?
    else
        echo "Skipping deployment due to build failure" | tee -a "$log_file"
        status3=0  # Not an error, just skipped
    fi
    
    # Return overall status
    if [ $status1 -eq 0 ] && [ $status2 -eq 0 ] && [ $status3 -eq 0 ]; then
        return 0
    else
        return 1
    fi
}

echo "Running complex deployment pipeline..."
deploy_pipeline "/tmp/naihati_deploy.log"
pipeline_status=$?

echo "Pipeline status: $pipeline_status"
echo -e "\\nLog file contents:"
cat "/tmp/naihati_deploy.log"

echo -e "\\n5. Best practices summary:"
echo "------------------------------"
cat << 'EOF'
Best practices for pipe error handling:
1. Always use 'set -o pipefail' in production scripts
2. Check PIPESTATUS array for individual command status
3. Use 'tee' to capture output while preserving error detection
4. Consider using process substitution for complex error handling
5. Log errors with context for debugging
6. Implement retry logic for transient failures
EOF

# Cleanup
rm -f "/tmp/deployment.log" "/tmp/naihati_deploy.log"`,k=`#!/bin/bash
# Optimizing pipeline performance for large datasets

echo "=== Pipeline Performance Optimization ==="

# Generate a large dataset
echo "Generating test data (100000 lines)..."
seq 1 100000 > /tmp/large_data.txt
echo "Additional data..." >> /tmp/large_data.txt
echo "More lines..." >> /tmp/large_data.txt
echo "Done. File size: $(wc -l < /tmp/large_data.txt) lines"

echo -e "\\n1. Testing different pipeline patterns:"
echo "------------------------------------------"

# Pattern 1: Simple but inefficient
echo -e "\\na) Inefficient pattern (multiple greps):"
time {
    grep "1" /tmp/large_data.txt | \\
    grep "2" | \\
    grep "3" | \\
    grep "4" | \\
    grep "5" > /tmp/result1.txt
}
echo "Results: $(wc -l < /tmp/result1.txt) lines"

# Pattern 2: Single grep with regex
echo -e "\\nb) Efficient pattern (single grep with regex):"
time {
    grep "1.*2.*3.*4.*5" /tmp/large_data.txt > /tmp/result2.txt
}
echo "Results: $(wc -l < /tmp/result2.txt) lines"

# Pattern 3: Using awk instead of multiple pipes
echo -e "\\nc) Using awk (single process):"
time {
    awk '/1/ && /2/ && /3/ && /4/ && /5/' /tmp/large_data.txt > /tmp/result3.txt
}
echo "Results: $(wc -l < /tmp/result3.txt) lines"

echo -e "\\n2. Stream processing vs buffering:"
echo "--------------------------------------"

# Create a data generator function
generate_data() {
    for i in {1..50000}; do
        echo "Line $i: $(date +%s%N) $(shuf -i 100-999 -n 1)"
        # Small delay to simulate streaming
        sleep 0.0001
    done
}

echo -e "\\na) Stream processing (process as data arrives):"
time {
    generate_data | \\
    awk '{print $1, $2, $3}' | \\
    grep "Line 1" | \\
    head -100 > /tmp/stream_results.txt
}

echo -e "\\nb) Buffered processing (collect all then process):"
time {
    generate_data > /tmp/buffer.txt
    cat /tmp/buffer.txt | \\
    awk '{print $1, $2, $3}' | \\
    grep "Line 1" | \\
    head -100 > /tmp/buffer_results.txt
}

echo -e "\\n3. Parallel processing with xargs:"
echo "--------------------------------------"

# Create files for processing
mkdir -p /tmp/parallel_test
for i in {1..100}; do
    seq 1 1000 > "/tmp/parallel_test/file_$i.txt"
done

echo -e "\\na) Sequential processing:"
time {
    find /tmp/parallel_test -name "*.txt" -exec wc -l {} \\; | \\
    awk '{sum += $1} END {print "Total lines:", sum}'
}

echo -e "\\nb) Parallel processing (4 jobs):"
time {
    find /tmp/parallel_test -name "*.txt" -print0 | \\
    xargs -0 -P4 -n1 wc -l | \\
    awk '{sum += $1} END {print "Total lines:", sum}'
}

echo -e "\\n4. Memory usage considerations:"
echo "-----------------------------------"

# Large sort example
echo "Creating large unsorted file..."
seq 1000000 | shuf > /tmp/large_unsorted.txt

echo -e "\\na) Sorting with pipe (may use temp files):"
time {
    sort /tmp/large_unsorted.txt > /tmp/sorted1.txt
}

echo -e "\\nb) Using sort with memory limit:"
time {
    sort -S 100M /tmp/large_unsorted.txt > /tmp/sorted2.txt
}

echo -e "\\n5. Pipeline optimization tips:"
echo "----------------------------------"
cat << 'EOF'
Performance optimization strategies:
1. Filter early: Remove unwanted data as soon as possible
2. Use fewer processes: Combine operations in awk/sed
3. Avoid unnecessary sorts: sort breaks streaming
4. Use appropriate buffer sizes
5. Consider parallel processing for independent tasks
6. Profile with 'time' command to identify bottlenecks
7. Use efficient regex patterns
8. Consider temporary files for very large datasets
EOF

# Cleanup
rm -rf /tmp/large_data.txt /tmp/result*.txt /tmp/stream_results.txt \\
       /tmp/buffer.txt /tmp/buffer_results.txt /tmp/parallel_test \\
       /tmp/large_unsorted.txt /tmp/sorted*.txt`,j=`#!/bin/bash
# Advanced pipeline patterns for production analytics

echo "=== Advanced Pipeline Patterns ==="

echo "1. Process Substitution for Multiple Inputs:"
echo "--------------------------------------------"

# Compare two directories
echo "Comparing /tmp and /var/tmp:"
diff <(ls -la /tmp | head -10) <(ls -la /var/tmp | head -10) || true

# Combine outputs from multiple commands
echo -e "\\nCombined system info:"
paste <(uptime) <(date) <(whoami)

echo -e "\\n2. Named Pipes (FIFO) for Complex Workflows:"
echo "------------------------------------------------"

# Create named pipe
PIPE_PATH="/tmp/my_pipe"
rm -f "$PIPE_PATH"
mkfifo "$PIPE_PATH"

# Producer: Generate data
(
    echo "Starting data generation..."
    for i in {1..5}; do
        echo "Data packet $i: $(date +%s%N)"
        sleep 0.5
    done
    echo "END"
) > "$PIPE_PATH" &

# Consumer: Process data
(
    echo "Starting data processing..."
    while read line; do
        if [ "$line" = "END" ]; then
            break
        fi
        echo "Processed: $line" | sed 's/Data/Processed data/'
    done
) < "$PIPE_PATH"

wait
rm -f "$PIPE_PATH"

echo -e "\\n3. Tee for Multi-directional Pipelines:"
echo "-------------------------------------------"

# Pipeline that splits, processes, and recombines
echo "Processing with tee splitting:"
{
    echo "=== Multi-path Processing ==="
    seq 1 10
} | tee \\
    >(awk '{sum += $1} END {print "Sum:", sum}' > /tmp/sum.txt) \\
    >(awk '{prod = !prod ? $1 : prod * $1} END {print "Product:", prod}' > /tmp/prod.txt) \\
    >(awk '{print "Square:", $1 * $1}' > /tmp/squares.txt) \\
    > /tmp/original.txt

echo "Results:"
echo "Original: $(cat /tmp/original.txt | head -5)..."
echo "Sum: $(cat /tmp/sum.txt)"
echo "Product: $(cat /tmp/prod.txt)"
echo "Squares: $(cat /tmp/squares.txt | head -3)..."

echo -e "\\n4. Co-processes for Bidirectional Communication:"
echo "-----------------------------------------------------"

# Using coproc for interactive communication
coproc CALC {
    bc -l
}

# Send calculations
echo "5 + 3" >&"\${CALC[1]}"
read -u "\${CALC[0]}" result
echo "5 + 3 = $result"

echo "2 * 3.14" >&"\${CALC[1]}"
read -u "\${CALC[0]}" result
echo "2 * 3.14 = $result"

# Close coproc
exec {CALC[1]}>&-

echo -e "\\n5. Pipeline with Error Recovery:"
echo "------------------------------------"

# Function with retry logic
retry_pipeline() {
    local max_retries=3
    local retry_count=0
    
    while [ $retry_count -lt $max_retries ]; do
        if [ $retry_count -gt 0 ]; then
            echo "Retry attempt $retry_count/$max_retries"
        fi
        
        # Pipeline that might fail
        set +e
        (
            set -e
            echo "Step 1: Fetching data"
            echo "data line 1"
            echo "data line 2"
            if [ $retry_count -eq 1 ]; then
                echo "Simulating transient failure" >&2
                exit 1
            fi
            echo "Step 2: Processing data"
            echo "processed: data line 1"
            echo "processed: data line 2"
            echo "Step 3: Finalizing"
        ) 2>&1 | tee /tmp/pipeline.log
            
        pipeline_exit=\${PIPESTATUS[0]}
        set -e
        
        if [ $pipeline_exit -eq 0 ]; then
            echo "Pipeline succeeded!"
            break
        else
            echo "Pipeline failed with exit code: $pipeline_exit"
            retry_count=$((retry_count + 1))
            sleep 1
        fi
    done
    
    if [ $retry_count -eq $max_retries ]; then
        echo "Pipeline failed after $max_retries attempts"
        return 1
    fi
    return 0
}

retry_pipeline

echo -e "\\n6. Dynamic Pipeline Construction:"
echo "-------------------------------------"

# Build pipeline based on conditions
build_pipeline() {
    local filters=()
    
    # Add filters based on arguments
    for arg in "$@"; do
        case $arg in
            numeric)
                filters+=("grep '[0-9]'")
                ;;
            uppercase)
                filters+=("tr 'a-z' 'A-Z'")
                ;;
            reverse)
                filters+=("tac")
                ;;
            unique)
                filters+=("sort -u")
                ;;
        esac
    done
    
    # Execute the constructed pipeline
    echo "Input data:
apple
Banana
123
cherry
456" | eval "$(IFS='|'; echo "\${filters[*]}")"
}

echo "Testing dynamic pipeline with: numeric + uppercase"
build_pipeline numeric uppercase

echo -e "\\n7. Pipeline Performance Monitoring:"
echo "--------------------------------------"

# Monitor pipeline performance
monitor_pipeline() {
    local pipeline="$1"
    
    echo "Monitoring pipeline: $pipeline"
    
    # Time the pipeline
    time eval "$pipeline" > /dev/null
    
    # Monitor memory
    /usr/bin/time -v bash -c "$pipeline" 2>&1 | grep -E "Maximum resident|Elapsed"
}

monitor_pipeline 'seq 1 1000000 | grep "1" | wc -l'

echo -e "\\n8. Pipeline Design Patterns Summary:"
echo "----------------------------------------"
cat << 'EOF'
Advanced Pipeline Patterns:
1. Process Substitution: <(cmd) for multiple inputs
2. Named Pipes: mkfifo for complex workflows
3. Tee Splitting: Multiple processing paths
4. Co-processes: Bidirectional communication
5. Error Recovery: Retry logic in pipelines
6. Dynamic Pipelines: Build based on conditions
7. Performance Monitoring: Track resource usage
8. Parallel Processing: xargs -P or GNU parallel

Choose pattern based on:
- Data volume and velocity
- Error handling requirements
- Processing complexity
- Resource constraints
EOF

# Cleanup
rm -f /tmp/sum.txt /tmp/prod.txt /tmp/squares.txt /tmp/original.txt /tmp/pipeline.log`,P=()=>{const[c,m]=o.useState("basic"),[p,l]=o.useState(""),[t,d]=o.useState(0),h=[{id:"basic",name:"Basic Pipe",description:"Simple command chaining",syntax:"command1 | command2",color:"from-blue-500 to-cyan-600",example:"ls | grep .txt"},{id:"text",name:"Text Processing",description:"Filtering and transforming text",syntax:"cat file | grep pattern | sort",color:"from-green-500 to-emerald-600",example:"cat logs.txt | grep ERROR | sort"},{id:"multi",name:"Multi-stage",description:"Complex multi-command pipelines",syntax:"cmd1 | cmd2 | cmd3 | cmd4",color:"from-purple-500 to-pink-600",example:"ps aux | grep java | awk '{print $2}' | xargs kill"},{id:"tee",name:"Tee Pipe",description:"Split pipeline output",syntax:"command | tee file | command",color:"from-orange-500 to-red-600",example:"make | tee build.log | grep -i error"},{id:"named",name:"Named Pipe",description:"FIFO for process communication",syntax:"mkfifo pipe; cmd1 > pipe & cmd2 < pipe",color:"from-yellow-500 to-amber-600",example:"mkfifo mypipe; producer > mypipe & consumer < mypipe"},{id:"process",name:"Process Substitution",description:"Treat command output as file",syntax:"diff <(cmd1) <(cmd2)",color:"from-indigo-500 to-purple-600",example:"diff <(sort file1) <(sort file2)"}],r=[{stage:1,command:"Generate Data",example:"seq 1 100",output:`1
2
3
...
100`},{stage:2,command:"Filter Data",example:"grep '^[0-9]*[02468]$'",output:`2
4
6
...
100`},{stage:3,command:"Transform Data",example:"sed 's/$/ bottles/'",output:`2 bottles
4 bottles
...
100 bottles`},{stage:4,command:"Sort Data",example:"sort -n",output:`2 bottles
4 bottles
...
100 bottles`},{stage:5,command:"Limit Output",example:"head -5",output:`2 bottles
4 bottles
6 bottles
8 bottles
10 bottles`}],g=()=>{if(t<r.length){const n=r[t];l(`Stage ${n.stage}: ${n.command}
Command: ${n.example}

Output:
${n.output}`),d(t+1)}else d(0),l("")},x=[{command:"grep",purpose:"Filter lines matching pattern",example:"cat file | grep 'error'"},{command:"sort",purpose:"Sort lines",example:"cat file | sort -n"},{command:"uniq",purpose:"Remove duplicate lines",example:"cat file | sort | uniq"},{command:"wc",purpose:"Count words/lines/characters",example:"cat file | wc -l"},{command:"awk",purpose:"Pattern scanning and processing",example:"cat file | awk '{print $1}'"},{command:"sed",purpose:"Stream editor for filtering/transforming",example:"cat file | sed 's/old/new/g'"},{command:"tee",purpose:"Split output to file and stdout",example:"command | tee log.txt"},{command:"xargs",purpose:"Build and execute command lines",example:"find . -name *.txt | xargs rm"}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4",children:"Pipes: Chaining Commands with |"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Master the art of command chaining using pipes - the Unix philosophy of connecting small, specialized programs together to perform complex tasks. Learn to build efficient data processing pipelines that transform, filter, and analyze data streamingly."})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.0s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})}),"Pipe Fundamentals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"What is a Pipe?"}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["The pipe operator (",e.jsx("code",{className:"font-mono text-blue-600 dark:text-blue-400",children:"|"}),") connects the",e.jsx("strong",{children:" stdout"})," of one command to the ",e.jsx("strong",{children:"stdin"})," of another command, allowing data to flow between commands without temporary files."]})}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-700 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Data flows left to right through the pipeline"}),e.jsx("li",{children:"Each command runs in its own subshell"}),e.jsx("li",{children:"Pipes enable stream processing (no intermediate files)"}),e.jsx("li",{children:"Exit status is of the last command in pipe (by default)"}),e.jsx("li",{children:"Pipes can be combined with redirection"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-white",children:"Pipe Visualization"}),e.jsxs("div",{className:"p-4 bg-gray-900 text-gray-100 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-blue-600 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"Command 1"}),e.jsx("div",{className:"text-sm",children:"stdout →"})]})}),e.jsx("svg",{className:"w-8 h-8 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-green-600 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"Pipe"}),e.jsx("div",{className:"text-sm",children:"Data Flow"})]})}),e.jsx("svg",{className:"w-8 h-8 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-3 bg-purple-600 rounded-lg",children:[e.jsx("div",{className:"font-bold",children:"Command 2"}),e.jsx("div",{className:"text-sm",children:"← stdin"})]})})]}),e.jsxs("div",{className:"text-center mt-4",children:[e.jsx("code",{className:"block bg-gray-800 p-3 rounded font-mono",children:"command1 | command2"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:"Output of command1 becomes input of command2"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.2s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Pipe Types & Patterns"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",children:h.map((n,s)=>e.jsxs("button",{onClick:()=>m(n.id),className:i("p-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-left",c===n.id?`bg-gradient-to-r ${n.color} text-white shadow-lg`:"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300"),style:{animationDelay:`${s*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.6s_ease-out]"},children:[e.jsx("div",{className:"font-bold mb-1",children:n.name}),e.jsx("div",{className:"text-sm mb-2",children:n.description}),e.jsx("code",{className:"text-xs opacity-80 bg-black/10 dark:bg-white/10 px-2 py-1 rounded block truncate mb-1",children:n.syntax}),e.jsx("div",{className:"text-xs opacity-70",children:n.example})]},n.id))}),e.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-4",children:"Pipeline Stage Simulation"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Multi-stage Pipeline"}),e.jsx("div",{className:"space-y-2 mb-4",children:r.map((n,s)=>e.jsx("div",{className:i("p-3 rounded-lg transition-all duration-300 transform",t>s?"bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105":"bg-gray-100 dark:bg-gray-700"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:i("w-8 h-8 rounded-full flex items-center justify-center mr-3",t>s?"bg-white/30":"bg-gray-200 dark:bg-gray-600"),children:e.jsx("span",{className:i("font-bold",t>s?"text-white":"text-gray-600 dark:text-gray-400"),children:n.stage})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:n.command}),e.jsx("div",{className:"text-sm opacity-80 font-mono",children:n.example})]})]})},n.stage))}),e.jsxs("button",{onClick:g,className:"w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center",children:[e.jsxs("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),t===0?"Start Pipeline":t===r.length?"Reset Simulation":"Next Stage"]})]})}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"Pipeline Execution"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Current Stage:"}),e.jsx("div",{className:"font-mono text-lg font-bold text-blue-600 dark:text-blue-400",children:t>0?r[t-1]?.command:"Ready to start"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Pipeline Output:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono min-h-[200px]",children:p||`# Click "Start Pipeline" to begin
# the multi-stage pipeline simulation`})]}),t>0&&e.jsxs("div",{className:"mt-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Data Flow:"}),e.jsxs("ul",{className:"text-gray-700 dark:text-gray-300 space-y-1",children:[t>=1&&e.jsx("li",{children:"✓ Generated 1-100 with seq"}),t>=2&&e.jsx("li",{children:"✓ Filtered even numbers with grep"}),t>=3&&e.jsx("li",{children:"✓ Transformed numbers to text with sed"}),t>=4&&e.jsx("li",{children:"✓ Sorted numerically with sort"}),t>=5&&e.jsx("li",{children:"✓ Limited to top 5 with head"})]})]})]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Common Pipe Commands"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:x.map((n,s)=>e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",style:{animationDelay:`${s*100}ms`,animation:"motion-safe:animate-[fadeInUp_0.8s_ease-out]"},children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3",children:e.jsx("span",{className:"font-bold text-blue-600 dark:text-blue-400",children:n.command})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-800 dark:text-white",children:n.command}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:n.purpose})]})]}),e.jsx("code",{className:"text-xs text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-2 rounded",children:n.example})]},n.command))})]}),e.jsxs("div",{className:"mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Basic Pipe Operations"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium",children:"Foundation"})]}),e.jsx(a,{fileModule:u,title:"System monitoring pipeline in Barrackpore",highlightLines:[5,6,7,8,9,10,11,12,13]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Swadeep needs to monitor system resources in Barrackpore. Pipes allow chaining multiple commands to extract and format relevant information."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Text Processing Pipeline"}),e.jsx("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:"Data Analysis"})]}),e.jsx(a,{fileModule:f,title:"Log analysis pipeline for Shyamnagar servers",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Tuhina analyzes server logs in Shyamnagar. Pipes transform raw log data into meaningful statistics and reports."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Multi-stage Processing"}),e.jsx("span",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:"Complex Processing"})]}),e.jsx(a,{fileModule:y,title:"Data processing pipeline for Ichapur analytics",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Scenario:"})," Abhronila processes analytics data in Ichapur. Multi-stage pipes clean, transform, and analyze data in a single command."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_1.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Pipe Techniques"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Pipe Error Handling"}),e.jsx(a,{fileModule:b,title:"Error handling in Naihati deployment pipelines",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Use `set -o pipefail` to detect errors in any stage of a pipeline, not just the last command."]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Performance Considerations"}),e.jsx(a,{fileModule:k,title:"Optimizing pipeline performance for large datasets",highlightLines:[5,6,7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Note:"})," Pipes process data streamingly, but some commands (like `sort`) need all data before producing output."]})})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.0s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Pipes vs Temporary Files"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Using Pipes"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`# Process data without intermediate files
cat large_file.txt |     grep "pattern" |     sort |     uniq -c |     sort -nr |     head -10`}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"No disk I/O for intermediate results"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Stream processing (memory efficient)"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Cleaner, more readable code"})]})]})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),"Using Temporary Files"]}),e.jsx("code",{className:"text-sm text-gray-700 dark:text-gray-300 block bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:`# Process data with intermediate files
cat large_file.txt > tmp1
grep "pattern" tmp1 > tmp2
sort tmp2 > tmp3
uniq -c tmp3 > tmp4
sort -nr tmp4 > tmp5
head -10 tmp5
# Cleanup
rm tmp1 tmp2 tmp3 tmp4 tmp5`}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Disk I/O overhead"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Need cleanup to avoid disk filling"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"More verbose code"})]})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-3",children:"When to Use Each"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-white mb-2",children:"Use Pipes When:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Processing data sequentially"}),e.jsx("li",{children:"Working with streamable data"}),e.jsx("li",{children:"Performance is important"}),e.jsx("li",{children:"Want cleaner code"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 dark:text-white mb-2",children:"Use Files When:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Need to reuse intermediate results"}),e.jsx("li",{children:"Commands need random access to data"}),e.jsx("li",{children:"Debugging intermediate steps"}),e.jsx("li",{children:"Piping is not possible"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.2s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 dark:text-red-300 mb-2",children:"Variable Scope in Pipelines"}),e.jsxs("p",{className:"text-red-700 dark:text-red-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," Each command in a pipeline runs in a subshell"]}),e.jsx("code",{className:"text-sm text-red-800 dark:text-red-300 block bg-red-100 dark:bg-red-900/30 p-3 rounded mb-2",children:`count=0
seq 10 | while read num; do
    count=$((count + num))
done
echo "Total: $count"  # Prints 0!`}),e.jsxs("p",{className:"text-red-700 dark:text-red-300",children:[e.jsx("strong",{children:"Solution:"})," Avoid pipelines for variable accumulation, or use process substitution"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`count=0
while read num; do
    count=$((count + num))
done < <(seq 10)
echo "Total: $count"  # Correct: 55`})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-300 mb-2",children:"Pipe Error Detection"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," By default, only last command's exit status matters"]}),e.jsx("code",{className:"text-sm text-yellow-800 dark:text-yellow-300 block bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded mb-2",children:`# If grep fails but wc succeeds, pipeline returns 0
grep "pattern" file.txt | wc -l
echo $?  # 0 even if pattern not found`}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300",children:[e.jsx("strong",{children:"Solution:"})," Use `set -o pipefail` or check `PIPESTATUS` array"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`set -o pipefail
grep "pattern" file.txt | wc -l
echo $?  # Non-zero if any command fails
# Or check individual commands
grep "pattern" file.txt | wc -l
echo "\${PIPESTATUS[@]}"  # Shows [grep_exit, wc_exit]`})]}),e.jsxs("div",{className:"p-4 bg-white/70 dark:bg-gray-700/70 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Performance with sort"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Problem:"})," `sort` needs all input before producing output"]}),e.jsx("code",{className:"text-sm text-blue-800 dark:text-blue-300 block bg-blue-100 dark:bg-blue-900/30 p-3 rounded mb-2",children:`# sort buffers all data, loses streaming benefits
generate_large_data | sort | process_stream`}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-300",children:[e.jsx("strong",{children:"Solution:"})," Consider alternatives or use sort early in small datasets"]}),e.jsx("code",{className:"text-sm text-green-800 dark:text-green-300 block bg-green-100 dark:bg-green-900/30 p-3 rounded",children:`# Filter first, then sort smaller dataset
generate_large_data | grep "interesting" | sort | process_stream
# Or use temporary file for huge datasets
generate_large_data > tmpfile
sort tmpfile | process_stream
rm tmpfile`})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.4s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Pipeline Design"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Filter early to reduce data volume"}),e.jsx("li",{children:"Put memory-intensive commands (sort) after filtering"}),e.jsx("li",{children:"Use `tee` for debugging intermediate results"}),e.jsx("li",{children:"Break long pipelines for readability"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Error Handling"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `set -o pipefail` in production scripts"}),e.jsx("li",{children:"Check `PIPESTATUS` array for debugging"}),e.jsx("li",{children:"Handle pipe failures gracefully"}),e.jsx("li",{children:"Log errors from each pipeline stage"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Avoid unnecessary commands in pipelines"}),e.jsx("li",{children:"Use streaming commands when possible"}),e.jsx("li",{children:"Consider parallel processing for CPU-bound tasks"}),e.jsx("li",{children:"Profile pipelines with `time` command"})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Readability"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use line continuation for long pipelines"}),e.jsx("li",{children:"Comment complex pipeline logic"}),e.jsx("li",{children:"Use meaningful command options"}),e.jsx("li",{children:"Test pipelines with sample data"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"Advanced Pipeline Examples"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-800 dark:text-white",children:"Complex Data Processing"}),e.jsx(a,{fileModule:j,title:"Advanced pipeline patterns for production analytics",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Professional Tip:"})," Combine pipes with process substitution, command grouping, and parallel processing for complex data workflows."]})})]})})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.6s_ease-out]"},children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("svg",{className:"w-6 h-6 mr-2 text-cyan-600 dark:text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Points"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Think about..."})," When should you break a long pipeline into multiple steps with intermediate files? Consider trade-offs between performance, debuggability, and maintainability."]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Observe carefully..."})," The difference between `command | tee file` and `command > file`. When would you use each, and how do they affect pipeline flow?"]})}),e.jsx("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 italic",children:[e.jsx("strong",{children:"Try changing..."})," A pipeline that uses `xargs` to one that uses `while read` loops. What are the performance implications and error handling differences?"]})})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",style:{animation:"motion-safe:animate-[fadeInUp_2.8s_ease-out]"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:"What to Remember"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Pipes connect stdout to stdin"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Each pipe command runs in a subshell"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use `set -o pipefail` for error detection"})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Filter early in pipelines for performance"})]})]})]}),e.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{animation:"motion-safe:animate-[fadeInUp_3.0s_ease-out]"},children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mr-4",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sukanta Hui • 27 years experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Pipes embody the Unix philosophy: small tools that do one thing well, connected together. In Barrackpore's data processing systems, we build pipelines that handle terabytes of data daily. Remember: ",e.jsx("strong",{children:"The most efficient pipeline is one that processes the least data"}),". Always filter as early as possible. Also, `tee` is invaluable for debugging - it lets you see what's flowing through the pipe without breaking it. For complex pipelines in Shyamnagar, we use named pipes (`mkfifo`) when we need bidirectional communication between processes."]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Classroom Tip"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"When teaching Debangshu and Abhronila, I start with simple two-command pipes and gradually add complexity. Have students predict what each stage will produce before running the pipeline. A great exercise: take a problem that would normally require a Python script and solve it with shell pipes. This teaches the power of composition. Also, emphasize `set -o pipefail` early - it prevents silent failures that are common in pipeline debugging in Naihati projects."})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-white mb-2",children:"Performance Wisdom"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["In the Ichapur analytics pipeline, we process millions of records per hour. The key insight:",e.jsx("strong",{children:"buffer size matters"}),". By default, pipes have 64KB buffers. For high-volume data, we increase this with `ulimit -p`. Also, avoid `sort` in the middle of pipelines when possible - it breaks streaming. Instead, filter first, then sort the reduced dataset. For parallel processing, we use `xargs -P` or GNU parallel with pipes. This can dramatically improve throughput for CPU-bound tasks."]})]})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in • 7003756860",e.jsx("br",{}),e.jsx("strong",{children:"Expertise:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]})})]})]}),e.jsx("style",{jsx:!0,children:`
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
            `})]})};export{P as default};

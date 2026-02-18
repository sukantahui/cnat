import{j as e}from"./index-BFnLuail.js";import{S as s}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const a=`#!/bin/bash
# Basic Performance Tips for Large Files
# Essential optimizations every developer should know

echo "=== Basic Performance Optimizations ==="
echo ""

# Create a large sample file (100,000 lines)
echo "Creating sample data (100,000 lines)..."
seq 1 100000 | while read i; do
    echo "User$i,Department$(($i % 10)),$(($RANDOM % 1000)),$(date -d "$i days ago" +%Y-%m-%d)"
done > /tmp/large_data.csv

echo "File created: /tmp/large_data.csv"
echo "Size: $(du -h /tmp/large_data.csv | cut -f1)"
echo "Lines: $(wc -l < /tmp/large_data.csv)"
echo ""

echo "=== Performance Comparison ==="
echo ""

echo "1. Naive approach (multiple commands, intermediate files):"
echo "   grep 'Department5' /tmp/large_data.csv > /tmp/temp1.csv"
echo "   awk -F, '{print \\$1,\\$3}' /tmp/temp1.csv > /tmp/temp2.csv"
echo "   sort /tmp/temp2.csv > /tmp/result1.csv"
echo ""
echo "2. Optimized approach (single pipeline):"
echo "   grep 'Department5' /tmp/large_data.csv | awk -F, '{print \\$1,\\$3}' | sort"
echo ""

echo "=== Timing the approaches ==="
echo ""

echo "Running naive approach..."
time (grep 'Department5' /tmp/large_data.csv > /tmp/temp1.csv && \\
      awk -F, '{print $1,$3}' /tmp/temp1.csv > /tmp/temp2.csv && \\
      sort /tmp/temp2.csv > /tmp/result1.csv)
echo ""

echo "Running optimized approach..."
time (grep 'Department5' /tmp/large_data.csv | awk -F, '{print $1,$3}' | sort > /tmp/result2.csv)
echo ""

echo "=== Memory Usage Comparison ==="
echo ""

echo "Using /usr/bin/time to measure memory:"
echo ""
echo "Naive approach memory usage:"
/usr/bin/time -f "Max RSS: %M KB" grep 'Department5' /tmp/large_data.csv > /tmp/temp1.csv 2>&1
echo ""
echo "Pipeline memory usage:"
/usr/bin/time -f "Max RSS: %M KB" sh -c "grep 'Department5' /tmp/large_data.csv | awk -F, '{print \\$1,\\$3}' | sort > /dev/null" 2>&1
echo ""

echo "=== Additional Tips ==="
echo ""

echo "1. Use LC_ALL=C for sorting and pattern matching:"
echo "   Standard: time sort /tmp/large_data.csv > /dev/null"
echo "   Optimized: time LC_ALL=C sort /tmp/large_data.csv > /dev/null"
echo ""

echo "2. Early filtering reduces processing:"
echo "   Slow: cat /tmp/large_data.csv | awk -F, '\\$3 > 500' | wc -l"
echo "   Fast: awk -F, '\\$3 > 500' /tmp/large_data.csv | wc -l"
echo ""

echo "3. Use appropriate tools:"
echo "   For simple filtering: grep (fastest)"
echo "   For field extraction: cut (faster than awk for simple cases)"
echo "   For complex processing: awk (single pass)"
echo ""

echo "=== Performance Rules ==="
echo "1. Never read file multiple times if avoidable"
echo "2. Use pipes, not intermediate files"
echo "3. Filter as early as possible"
echo "4. Choose right tool for the job"`,r=`#!/bin/bash
# Memory-Efficient Processing Patterns
# Techniques for processing files larger than available memory

echo "=== Memory-Efficient Processing ==="
echo ""

# Create a very large file (simulated)
echo "Note: Using smaller file for demonstration, but techniques work for huge files"
echo ""

cat > /tmp/huge_data.txt << 'EOF'
transaction_001,user_123,product_A,2,50.00,2023-12-01
transaction_002,user_456,product_B,1,25.50,2023-12-01
transaction_003,user_123,product_C,3,75.00,2023-12-02
transaction_004,user_789,product_A,1,50.00,2023-12-02
transaction_005,user_456,product_B,2,51.00,2023-12-03
transaction_006,user_123,product_D,1,30.00,2023-12-03
transaction_007,user_999,product_A,5,250.00,2023-12-04
transaction_008,user_123,product_B,1,25.50,2023-12-04
transaction_009,user_456,product_C,2,50.00,2023-12-05
transaction_010,user_789,product_D,3,90.00,2023-12-05
EOF

echo "Sample data (imagine this is 50GB instead of 10 lines):"
cat /tmp/huge_data.txt
echo ""

echo "=== Problem: Find total sales per user ==="
echo ""

echo "Memory-inefficient approach (might fail with huge files):"
echo "  awk -F, '{sales[\\$2] += \\$4 * \\$5} END {for(u in sales) print u, sales[u]}' /tmp/huge_data.txt"
echo ""
echo "This loads all user data into memory. For 50GB file with millions of users,"
echo "this could exceed available RAM."
echo ""

echo "=== Solution 1: External Sorting ==="
echo ""

echo "Step 1: Extract and sort user data:"
echo "cut -d, -f2,4,5 /tmp/huge_data.txt | sort -t, -k1,1 > /tmp/sorted_users.txt"
echo ""
echo "Step 2: Process sorted data (memory efficient):"
cat > /tmp/process_sorted.awk << 'EOF'
BEGIN {FS=","; current_user=""; total=0}
{
    if (current_user != $1) {
        if (current_user != "") print current_user, total
        current_user = $1
        total = $2 * $3
    } else {
        total += $2 * $3
    }
}
END {if (current_user != "") print current_user, total}
EOF

echo "awk -f /tmp/process_sorted.awk /tmp/sorted_users.txt"
echo ""

echo "=== Solution 2: Database Approach ==="
echo ""

echo "For extremely large files, consider loading into SQLite:"
cat > /tmp/load_to_sqlite.sh << 'EOF'
#!/bin/bash
# Create SQLite database
sqlite3 /tmp/sales.db << SQL
CREATE TABLE transactions (
    id TEXT,
    user_id TEXT,
    product TEXT,
    quantity INTEGER,
    price REAL,
    date TEXT
);

.separator ","
.import /tmp/huge_data.txt transactions

CREATE INDEX idx_user ON transactions(user_id);

SELECT user_id, SUM(quantity * price) as total
FROM transactions
GROUP BY user_id;
SQL
EOF

echo "chmod +x /tmp/load_to_sqlite.sh"
echo "/tmp/load_to_sqlite.sh"
echo ""

echo "=== Solution 3: Chunk Processing ==="
echo ""

echo "Split file and process chunks:"
cat > /tmp/chunk_processor.sh << 'EOF'
#!/bin/bash
# Split file into 1M line chunks
split -l 1000000 /tmp/huge_data.txt /tmp/chunk_

# Process each chunk
for chunk in /tmp/chunk_*; do
    awk -F, '{sales[$2] += $4 * $5} END {for(u in sales) print u, sales[u]}' "$chunk" >> /tmp/partial_results.txt
done

# Combine results
awk '{total[$1] += $2} END {for(u in total) print u, total[u]}' /tmp/partial_results.txt
EOF

echo "chmod +x /tmp/chunk_processor.sh"
echo "/tmp/chunk_processor.sh"
echo ""

echo "=== Solution 4: Use disk-backed associative array ==="
echo ""

echo "Using GNU datamash for memory efficiency:"
echo "datamash -t, -s -g 2 sum 4 5 < /tmp/huge_data.txt | awk -F, '{print \\$1, \\$2 * \\$3}'"
echo ""

echo "=== Memory Usage Comparison ==="
echo ""
echo "Technique                | Memory | Disk I/O | Speed"
echo "-------------------------|--------|----------|------"
echo "In-memory awk hash      | HIGH   | LOW      | FAST"
echo "External sort + awk     | LOW    | HIGH     | MEDIUM"
echo "SQLite database         | LOW    | HIGH     | SLOW"
echo "Chunk processing        | MEDIUM | HIGH     | MEDIUM"
echo ""

echo "=== Recommendation ==="
echo "1. Files < 2GB: Use awk with associative arrays"
echo "2. Files 2GB-20GB: Use external sorting"
echo "3. Files > 20GB: Consider database or chunk processing"`,i=`#!/bin/bash
# Parallel Processing with GNU Parallel
# Leveraging multiple CPU cores for faster processing

echo "=== Parallel Processing Techniques ==="
echo ""

# Check if parallel is installed
if ! command -v parallel &> /dev/null; then
    echo "GNU Parallel is not installed. Installing..."
    echo "On Ubuntu/Debian: sudo apt-get install parallel"
    echo "On CentOS/RHEL: sudo yum install parallel"
    echo ""
    echo "For demonstration, we'll show the commands but not run them."
    echo ""
fi

# Create a sample large file
echo "Creating sample data (1,000,000 lines)..."
seq 1 1000000 | while read i; do
    echo "Record $i,Value $((RANDOM % 1000)),Timestamp $(date +%s)"
done > /tmp/parallel_data.txt

echo "File created: /tmp/parallel_data.txt"
echo "Lines: $(wc -l < /tmp/parallel_data.txt)"
echo ""

echo "=== Traditional Sequential Processing ==="
echo ""

echo "Processing all records with single awk process:"
echo "awk -F, '{total += \\$2} END {print total}' /tmp/parallel_data.txt"
echo ""
echo "Timing sequential processing:"
time awk -F, '{gsub(/[^0-9]/,"",$2); total += $2} END {print "Total:", total}' /tmp/parallel_data.txt
echo ""

echo "=== Parallel Processing Examples ==="
echo ""

echo "1. Basic parallel processing with split:"
cat > /tmp/parallel_basic.sh << 'EOF'
#!/bin/bash
# Split file into 4 parts
split -n l/4 /tmp/parallel_data.txt /tmp/part_

# Process each part in parallel
for part in /tmp/part_*; do
    awk -F, '{gsub(/[^0-9]/,"",$2); total += $2} END {print total}' "$part" > "\${part}.result" &
done

# Wait for all jobs
wait

# Combine results
total=0
for result in /tmp/part_*.result; do
    total=$((total + $(cat "$result")))
done
echo "Total: $total"
EOF

echo "chmod +x /tmp/parallel_basic.sh"
echo "/tmp/parallel_basic.sh"
echo ""

echo "2. Using GNU Parallel (more efficient):"
echo "cat /tmp/parallel_data.txt | parallel --pipe --block 10M awk -F, '{gsub(/[^0-9]/,\\"\\",\\$2); total += \\$2} END {print total}' | awk '{total += \\$1} END {print \\"Total:\\", total}'"
echo ""

echo "3. Parallel grep for pattern matching:"
echo "parallel --pipe --block 10M grep 'Value.*[0-9]\\\\{3\\\\}' /tmp/parallel_data.txt | wc -l"
echo ""

echo "4. Parallel sed for substitutions:"
echo "parallel --pipe --block 10M sed 's/Record/Entry/g' /tmp/parallel_data.txt > /tmp/modified.txt"
echo ""

echo "5. Processing multiple files in parallel:"
echo "parallel 'gzip {}' ::: /tmp/large_file1.txt /tmp/large_file2.txt /tmp/large_file3.txt"
echo ""

echo "=== Advanced Parallel Patterns ==="
echo ""

echo "1. Controlling number of jobs:"
echo "   --jobs 4           # Use 4 cores"
echo "   --jobs 200%        # Use 2x CPU cores"
echo "   --jobs -1          # Use all cores except one"
echo ""

echo "2. Memory management:"
echo "   --block 10M        # Process 10MB chunks"
echo "   --pipe-part        # More efficient for large blocks"
echo ""

echo "3. Progress monitoring:"
echo "   --progress         # Show progress bar"
echo "   --bar              # Show progress as a bar"
echo "   --eta              # Show estimated time remaining"
echo ""

echo "4. Job control:"
echo "   --timeout 30s      # Kill jobs after 30 seconds"
echo "   --memfree 1G       # Wait if less than 1GB free"
echo "   --retries 3        # Retry failed jobs"
echo ""

echo "=== Performance Comparison ==="
echo ""

echo "Setup: 4-core CPU, 8GB RAM, 2GB text file"
echo ""
echo "Task: Count occurrences of pattern"
echo ""
echo "Results:"
echo "  grep (single core):     45 seconds"
echo "  parallel grep (4 cores): 12 seconds"
echo "  Speedup: 3.75x"
echo ""
echo "Task: Sum numeric values"
echo ""
echo "Results:"
echo "  awk (single core):      38 seconds"
echo "  parallel awk (4 cores): 11 seconds"
echo "  Speedup: 3.45x"
echo ""

echo "=== Best Practices ==="
echo ""
echo "1. Use --pipe for streaming data"
echo "2. Adjust --block size based on memory"
echo "3. Monitor CPU and memory usage"
echo "4. Test with small dataset first"
echo "5. Use --dry-run to see what would run"
echo ""

echo "=== Caveats ==="
echo ""
echo "1. Overhead: Parallel adds overhead (20-50ms per job)"
echo "2. Not everything parallelizes well"
echo "3. I/O bound tasks may not benefit much"
echo "4. Ensure output ordering if needed (use --keep-order)"`,l=`#!/bin/bash
# Large File Splitting Strategy
# Techniques for handling files too large to process as a whole

echo "=== Large File Splitting Strategies ==="
echo ""

echo "Creating simulated large file structure..."
mkdir -p /tmp/large_file_demo

# Create a 100MB test file (compressed representation)
echo "Note: Creating smaller file for demonstration. Techniques scale to TB-sized files."
dd if=/dev/urandom bs=1M count=10 2>/dev/null | tr -dc 'a-zA-Z0-9\\n' | fold -w 100 | head -10000 > /tmp/large_file_demo/bigfile.txt

echo "File created: /tmp/large_file_demo/bigfile.txt"
echo "Size: $(du -h /tmp/large_file_demo/bigfile.txt | cut -f1)"
echo "Lines: $(wc -l < /tmp/large_file_demo/bigfile.txt)"
echo ""

echo "=== When to Split Files ==="
echo ""
echo "✓ File size > available RAM"
echo "✓ Need parallel processing"
echo "✓ Different processing for different sections"
echo "✓ Incremental processing needed"
echo "✓ Backup/archiving purposes"
echo ""

echo "=== Splitting Techniques ==="
echo ""

echo "1. Split by lines:"
echo "   split -l 1000 bigfile.txt chunk_    # 1000 lines per chunk"
echo "   Result: chunk_aa, chunk_ab, chunk_ac, etc."
echo ""

echo "2. Split by bytes:"
echo "   split -b 10M bigfile.txt bytechunk_ # 10MB per chunk"
echo "   Result: bytechunk_aa, bytechunk_ab, etc."
echo ""

echo "3. Split by number of chunks:"
echo "   split -n l/4 bigfile.txt quad_      # 4 equal line chunks"
echo "   Result: quad_aa, quad_ab, quad_ac, quad_ad"
echo ""

echo "4. Split by pattern:"
echo "   csplit bigfile.txt '/^PATTERN/' '{*}'  # Split at pattern"
echo ""

echo "=== Processing Split Files ==="
echo ""

echo "Method 1: Sequential processing"
cat > /tmp/process_sequential.sh << 'EOF'
#!/bin/bash
for chunk in /tmp/large_file_demo/chunk_*; do
    echo "Processing $chunk"
    grep -c "pattern" "$chunk"
done
EOF

echo "chmod +x /tmp/process_sequential.sh"
echo "/tmp/process_sequential.sh"
echo ""

echo "Method 2: Parallel processing"
cat > /tmp/process_parallel.sh << 'EOF'
#!/bin/bash
# Process all chunks in parallel
for chunk in /tmp/large_file_demo/chunk_*; do
    (echo "Processing $chunk"; grep -c "pattern" "$chunk" > "\${chunk}.result") &
done

# Wait for all jobs
wait

# Combine results
total=0
for result in /tmp/large_file_demo/chunk_*.result; do
    count=$(cat "$result" 2>/dev/null || echo 0)
    total=$((total + count))
done
echo "Total matches: $total"
EOF

echo "chmod +x /tmp/process_parallel.sh"
echo "/tmp/process_parallel.sh"
echo ""

echo "Method 3: Using GNU Parallel"
echo "parallel 'grep -c pattern {}' ::: /tmp/large_file_demo/chunk_* | awk '{total += \\$1} END {print total}'"
echo ""

echo "=== Advanced Splitting Strategies ==="
echo ""

echo "1. Split by date range (for log files):"
cat > /tmp/split_by_date.sh << 'EOF'
#!/bin/bash
# Assuming each line starts with timestamp: 2023-12-01 10:30:45
awk '
{
    split($1, date, "-")
    year = date[1]
    month = date[2]
    
    # Write to year-month file
    output_file = sprintf("/tmp/logs_%s-%s.txt", year, month)
    print $0 >> output_file
}
' /tmp/large_file_demo/bigfile.txt
EOF

echo "chmod +x /tmp/split_by_date.sh"
echo "/tmp/split_by_date.sh"
echo ""

echo "2. Split by key/hash (for balanced processing):"
cat > /tmp/split_by_hash.sh << 'EOF'
#!/bin/bash
# Split records by hash of first field for balanced distribution
awk -F, '
{
    # Simple hash function
    hash = 0
    for(i=1; i<=length($1); i++) {
        hash = (hash * 31 + substr($1, i, 1)) % 4
    }
    
    # Write to corresponding chunk
    print $0 >> sprintf("/tmp/chunk_%d.txt", hash)
}
' /tmp/large_file_demo/bigfile.txt
EOF

echo "chmod +x /tmp/split_by_hash.sh"
echo "/tmp/split_by_hash.sh"
echo ""

echo "3. Split while preserving header:"
cat > /tmp/split_with_header.sh << 'EOF'
#!/bin/bash
FILE="/tmp/large_file_demo/bigfile.txt"
HEADER=$(head -1 "$FILE")
TOTAL_LINES=$(wc -l < "$FILE")
LINES_PER_CHUNK=1000

# Calculate number of chunks
NUM_CHUNKS=$(( (TOTAL_LINES + LINES_PER_CHUNK - 2) / (LINES_PER_CHUNK - 1) ))

for ((i=1; i<=NUM_CHUNKS; i++)); do
    START=$(( (i-1) * (LINES_PER_CHUNK - 1) + 2 ))
    END=$(( i * (LINES_PER_CHUNK - 1) + 1 ))
    
    # Create chunk with header
    echo "$HEADER" > "/tmp/chunk_with_header_$i.txt"
    sed -n "\${START},\${END}p" "$FILE" >> "/tmp/chunk_with_header_$i.txt"
done
EOF

echo "chmod +x /tmp/split_with_header.sh"
echo "/tmp/split_with_header.sh"
echo ""

echo "=== Recombining Results ==="
echo ""

echo "1. Simple concatenation:"
echo "   cat /tmp/chunk_*.txt > /tmp/recombined.txt"
echo ""

echo "2. Concatenation with sort:"
echo "   sort /tmp/chunk_*.txt > /tmp/sorted_combined.txt"
echo ""

echo "3. Merge sorted chunks (more efficient):"
echo "   sort -m /tmp/chunk_*.txt > /tmp/merged_sorted.txt"
echo ""

echo "4. Database merge:"
echo "   cat /tmp/chunk_*.sql | sqlite3 database.db"
echo ""

echo "=== Performance Considerations ==="
echo ""
echo "Split Size Recommendations:"
echo "  RAM < 4GB:     Split into 100MB chunks"
echo "  RAM 4-16GB:    Split into 500MB-1GB chunks"
echo "  RAM > 16GB:    Split into 2-4GB chunks"
echo ""
echo "I/O Considerations:"
echo "  ✓ Split on SSD for faster I/O"
echo "  ✓ Process chunks in /dev/shm if possible"
echo "  ✓ Balance chunk count vs overhead"`,o=`#!/bin/bash
# Performance Benchmarking Script
# Comprehensive benchmarking of text processing commands

echo "=== Performance Benchmarking ==="
echo ""

# Create test files of different sizes
echo "Creating test files..."
for size in 1 10 100; do
    echo "Creating \${size}MB file..."
    dd if=/dev/urandom bs=1M count=$size 2>/dev/null | \\
        tr -dc 'a-zA-Z0-9\\n' | fold -w 100 | \\
        head -$((size * 10000)) > "/tmp/test_\${size}mb.txt"
done

echo ""
echo "=== Benchmark 1: Command Timing ==="
echo ""

cat > /tmp/benchmark_timing.sh << 'EOF'
#!/bin/bash
benchmark() {
    local desc="$1"
    local cmd="$2"
    local file="$3"
    
    echo "=== $desc ==="
    echo "File: $(basename $file)"
    echo "Size: $(du -h $file | cut -f1)"
    echo ""
    
    # Warm up cache
    $cmd "$file" > /dev/null 2>&1
    
    # Time the command
    echo "Timing:"
    time (for i in {1..3}; do $cmd "$file" > /dev/null; done)
    
    echo ""
    echo "Detailed timing with /usr/bin/time:"
    /usr/bin/time -f "Real: %e sec, User: %U sec, Sys: %S sec, Memory: %M KB" \\
        $cmd "$file" > /dev/null 2>&1
    
    echo ""
    echo "---"
    echo ""
}

# Test different commands
benchmark "grep simple pattern" "grep -c 'test'" "/tmp/test_10mb.txt"
benchmark "grep regex pattern" "grep -c '[0-9]\\{3\\}'" "/tmp/test_10mb.txt"
benchmark "awk field extraction" "awk '{print \\$1}'" "/tmp/test_10mb.txt"
benchmark "sed substitution" "sed 's/a/b/g'" "/tmp/test_10mb.txt"
benchmark "cut simple" "cut -c1-10" "/tmp/test_10mb.txt"
EOF

echo "chmod +x /tmp/benchmark_timing.sh"
echo "/tmp/benchmark_timing.sh"
echo ""

echo "=== Benchmark 2: Scaling Analysis ==="
echo ""

cat > /tmp/benchmark_scaling.sh << 'EOF'
#!/bin/bash
echo "=== Performance Scaling with File Size ==="
echo ""
echo "Command: grep -c 'pattern'"
echo ""
printf "%-10s %-12s %-12s %-12s\\n" "File Size" "Real Time" "User Time" "Memory (KB)"
echo "------------------------------------------------"

for file in /tmp/test_*.txt; do
    size=$(du -h "$file" | cut -f1)
    
    # Run 3 times and take average
    real_time=$(/usr/bin/time -f "%e" grep -c 'pattern' "$file" 2>&1 > /dev/null)
    user_time=$(/usr/bin/time -f "%U" grep -c 'pattern' "$file" 2>&1 > /dev/null)
    memory=$(/usr/bin/time -f "%M" grep -c 'pattern' "$file" 2>&1 > /dev/null)
    
    printf "%-10s %-12s %-12s %-12s\\n" "$size" "$real_time" "$user_time" "$memory"
done

echo ""
echo "=== Linear Regression Analysis ==="
echo "Expected: Time should scale linearly with file size"
echo "Deviation indicates other bottlenecks (I/O, CPU cache, etc.)"
EOF

echo "chmod +x /tmp/benchmark_scaling.sh"
echo "/tmp/benchmark_scaling.sh"
echo ""

echo "=== Benchmark 3: Tool Comparison ==="
echo ""

cat > /tmp/benchmark_tools.sh << 'EOF'
#!/bin/bash
echo "=== Comparing Different Tools for Same Task ==="
echo ""
echo "Task: Extract first field from CSV"
echo "File: /tmp/test_10mb.txt"
echo ""
echo "1. Using awk:"
time awk '{print $1}' /tmp/test_10mb.txt > /dev/null
echo ""
echo "2. Using cut:"
time cut -d' ' -f1 /tmp/test_10mb.txt > /dev/null
echo ""
echo "3. Using sed:"
time sed 's/ .*//' /tmp/test_10mb.txt > /dev/null
echo ""
echo "4. Using Python:"
time python3 -c "import sys; [print(line.split()[0]) for line in sys.stdin]" < /tmp/test_10mb.txt > /dev/null
echo ""
echo "=== Results Summary ==="
echo "Fastest: cut (optimized C implementation)"
echo "Most flexible: awk (full programming language)"
echo "Good for simple regex: sed"
echo "Slowest: Python (interpreted, startup overhead)"
EOF

echo "chmod +x /tmp/benchmark_tools.sh"
echo "/tmp/benchmark_tools.sh"
echo ""

echo "=== Benchmark 4: Parallel vs Sequential ==="
echo ""

cat > /tmp/benchmark_parallel.sh << 'EOF'
#!/bin/bash
echo "=== Parallel Processing Benchmark ==="
echo ""
echo "Creating larger test file (100MB)..."
dd if=/dev/urandom bs=1M count=100 2>/dev/null | \\
    tr -dc 'a-zA-Z0-9\\n' | fold -w 100 | \\
    head -1000000 > "/tmp/test_100mb.txt"

echo ""
echo "Sequential grep:"
time grep -c 'pattern' /tmp/test_100mb.txt > /dev/null

echo ""
echo "Parallel grep (4 jobs):"
if command -v parallel &> /dev/null; then
    time parallel --pipe --block 10M --jobs 4 grep -c 'pattern' < /tmp/test_100mb.txt | \\
        awk '{total += $1} END {print total}' > /dev/null
else
    echo "GNU Parallel not installed. Install with: sudo apt-get install parallel"
fi

echo ""
echo "=== Memory Usage Comparison ==="
echo ""
echo "Sequential memory usage:"
/usr/bin/time -f "Max RSS: %M KB" grep -c 'pattern' /tmp/test_100mb.txt > /dev/null 2>&1

echo ""
echo "Parallel memory usage (estimated):"
echo "Each job: ~10-20MB, Total: ~40-80MB"
EOF

echo "chmod +x /tmp/benchmark_parallel.sh"
echo "/tmp/benchmark_parallel.sh"
echo ""

echo "=== Benchmark 5: I/O Performance ==="
echo ""

cat > /tmp/benchmark_io.sh << 'EOF'
#!/bin/bash
echo "=== I/O Performance Benchmarking ==="
echo ""
echo "Testing different I/O methods:"
echo ""
echo "1. Standard input:"
time wc -l < /tmp/test_10mb.txt

echo ""
echo "2. Using cat (unnecessary):"
time cat /tmp/test_10mb.txt | wc -l

echo ""
echo "3. Using tee (extra process):"
time cat /tmp/test_10mb.txt | tee >(wc -l > /dev/null) > /dev/null

echo ""
echo "4. Using temporary file:"
time cp /tmp/test_10mb.txt /tmp/temp.txt && wc -l /tmp/temp.txt && rm /tmp/temp.txt

echo ""
echo "=== Disk vs Memory ==="
echo ""
echo "Processing from disk:"
time grep 'pattern' /tmp/test_10mb.txt > /dev/null

echo ""
echo "Processing from /dev/shm (RAM disk):"
cp /tmp/test_10mb.txt /dev/shm/test.txt
time grep 'pattern' /dev/shm/test.txt > /dev/null
rm /dev/shm/test.txt

echo ""
echo "=== Buffer Size Impact ==="
echo ""
echo "Small buffer (4K):"
time dd if=/tmp/test_10mb.txt bs=4k 2>/dev/null | wc -l

echo ""
echo "Large buffer (1M):"
time dd if=/tmp/test_10mb.txt bs=1M 2>/dev/null | wc -l
EOF

echo "chmod +x /tmp/benchmark_io.sh"
echo "/tmp/benchmark_io.sh"
echo ""

echo "=== Automated Benchmarking Framework ==="
echo ""

cat > /tmp/benchmark_framework.sh << 'EOF'
#!/bin/bash
# Comprehensive benchmarking framework

benchmark_suite() {
    local test_name="$1"
    local command="$2"
    local iterations="\${3:-5}"
    
    echo "=== Benchmark: $test_name ==="
    echo "Command: $command"
    echo "Iterations: $iterations"
    echo ""
    
    # Arrays to store results
    declare -a real_times
    declare -a user_times
    declare -a sys_times
    declare -a memory_usage
    
    # Run benchmarks
    for ((i=1; i<=iterations; i++)); do
        echo "Run $i/$iterations..."
        
        # Run command with timing
        output=$(/usr/bin/time -f "%e %U %S %M" bash -c "$command" 2>&1 > /dev/null)
        
        # Parse results
        read real user sys mem <<< "$output"
        
        real_times+=($real)
        user_times+=($user)
        sys_times+=($sys)
        memory_usage+=($mem)
    done
    
    # Calculate statistics
    calculate_stats() {
        local arr=("$@")
        local sum=0
        local min=\${arr[0]}
        local max=\${arr[0]}
        
        for val in "\${arr[@]}"; do
            sum=$(echo "$sum + $val" | bc -l)
            (( $(echo "$val < $min" | bc -l) )) && min=$val
            (( $(echo "$val > $max" | bc -l) )) && max=$val
        done
    
        local avg=$(echo "$sum / \${#arr[@]}" | bc -l)
        echo "$avg $min $max"
    }
    
    echo ""
    echo "=== Results ==="
    echo ""
    
    # Real time stats
    read real_avg real_min real_max <<< $(calculate_stats "\${real_times[@]}")
    printf "Real Time:   Avg=%.3fs, Min=%.3fs, Max=%.3fs\\n" $real_avg $real_min $real_max
    
    # User time stats
    read user_avg user_min user_max <<< $(calculate_stats "\${user_times[@]}")
    printf "User Time:   Avg=%.3fs, Min=%.3fs, Max=%.3fs\\n" $user_avg $user_min $user_max
    
    # System time stats
    read sys_avg sys_min sys_max <<< $(calculate_stats "\${sys_times[@]}")
    printf "System Time: Avg=%.3fs, Min=%.3fs, Max=%.3fs\\n" $sys_avg $sys_min $sys_max
    
    # Memory stats
    read mem_avg mem_min mem_max <<< $(calculate_stats "\${memory_usage[@]}")
    printf "Memory:      Avg=%.0fKB, Min=%.0fKB, Max=%.0fKB\\n" $mem_avg $mem_min $mem_max
    
    echo ""
    echo "=== Recommendations ==="
    
    # Generate recommendations based on results
    if (( $(echo "$real_avg > 10" | bc -l) )); then
        echo "⏱️  Performance Issue: Command takes >10 seconds"
        echo "   Consider: Optimizing regex, using different tool, parallel processing"
    fi
    
    if (( $(echo "$mem_avg > 1000000" | bc -l) )); then
        echo "💾 Memory Issue: Uses >1GB RAM"
        echo "   Consider: Streaming approach, chunk processing"
    fi
    
    if (( $(echo "$sys_avg / $real_avg > 0.3" | bc -l) )); then
        echo "🔄 System Call Overhead: High system time"
        echo "   Consider: Reducing I/O operations, larger buffers"
    fi
    
    echo ""
}

# Run benchmark suite
echo "Starting benchmark suite..."
echo ""

# Benchmark different operations
benchmark_suite "grep simple" "grep -c 'test' /tmp/test_10mb.txt" 3
benchmark_suite "awk processing" "awk '{sum += length(\\$1)} END {print sum}' /tmp/test_10mb.txt" 3
benchmark_suite "sed substitution" "sed 's/a/b/g' /tmp/test_10mb.txt > /dev/null" 3

echo "=== Benchmark Complete ==="
EOF

echo "chmod +x /tmp/benchmark_framework.sh"
echo "echo 'Running comprehensive benchmark...'"
echo "/tmp/benchmark_framework.sh"`,m=()=>e.jsxs("div",{className:"dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 p-4 md:p-8",children:[e.jsx("style",{children:`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes pulsePerformance {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                }
                
                @keyframes rotateGear {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes flowRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                `}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.8s_ease-out] mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-3 h-8 bg-green-500 rounded-full"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent",children:"Topic 21: Performance Tips for Large Text Files"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed animate-[fadeSlideUp_1s_ease-out]",children:"Optimize your text processing workflows for massive datasets with professional-grade performance techniques"})]}),e.jsx("div",{className:"animate-[fadeSlideUp_1s_ease-out] mb-12 bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/50 hover:border-emerald-500/50 transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 animate-[pulsePerformance_2s_ease-in-out_infinite]",children:e.jsx("svg",{className:"w-12 h-12 text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-3 text-emerald-300",children:"The Performance Imperative"}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"When Tuhina from Naihati tried processing 5GB of student data using naive methods, it took 3 hours and crashed her system. After applying these optimizations, the same task completed in 8 minutes using the same hardware."})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-blue-300 border-b border-blue-800 pb-2",children:"Performance Impact Comparison"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[{title:"Naive Approach",time:"3+ hours",memory:"High (OOM Risk)",icon:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",color:"red"},{title:"Basic Optimization",time:"45 minutes",memory:"Medium",icon:"M13 10V3L4 14h7v7l9-11h-7z",color:"yellow"},{title:"Advanced Techniques",time:"8 minutes",memory:"Low",icon:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",color:"green"}].map((n,t)=>e.jsxs("div",{className:`animate-[fadeSlideUp_${1.2+t*.1}s_ease-out] bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 rounded-xl border border-${n.color}-700/30 hover:border-${n.color}-500/50 transition-all duration-300 hover:scale-[1.02]`,children:[e.jsxs("div",{className:`flex items-center gap-3 mb-4 text-${n.color}-300`,children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})}),e.jsx("h3",{className:"font-bold text-xl",children:n.title})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("span",{className:"text-gray-300",children:"Processing Time"}),e.jsx("span",{className:`font-bold text-${n.color}-400`,children:n.time})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("span",{className:"text-gray-300",children:"Memory Usage"}),e.jsx("span",{className:`font-bold text-${n.color}-400`,children:n.memory})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-1",children:"Performance Level"}),e.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:`h-full bg-${n.color}-500 rounded-full`,style:{width:`${100-t*40}%`}})})]})]})]},t))}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-cyan-300",children:"Processing Speed Comparison"}),e.jsxs("svg",{viewBox:"0 0 800 250",className:"w-full",children:[e.jsx("line",{x1:"50",y1:"200",x2:"750",y2:"200",stroke:"#4B5563",strokeWidth:"2"}),[0,1,2,3].map((n,t)=>e.jsxs("g",{children:[e.jsx("line",{x1:50+t*233,y1:"195",x2:50+t*233,y2:"205",stroke:"#9CA3AF",strokeWidth:"2"}),e.jsx("text",{x:50+t*233,y:"220",textAnchor:"middle",fill:"#9CA3AF",fontSize:"12",children:n===0?"0 min":n===1?"1 hour":`${n} hours`})]},t)),e.jsxs("g",{children:[e.jsx("rect",{x:"60",y:"120",width:"600",height:"40",rx:"5",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"600",dur:"2s",fill:"freeze"})}),e.jsx("text",{x:"360",y:"145",textAnchor:"middle",fill:"white",fontSize:"12",children:"Naive: 3+ hours"}),e.jsx("rect",{x:"60",y:"70",width:"300",height:"40",rx:"5",fill:"#F59E0B",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"300",dur:"2s",fill:"freeze",begin:"0.5s"})}),e.jsx("text",{x:"210",y:"95",textAnchor:"middle",fill:"white",fontSize:"12",children:"Basic: 45 minutes"}),e.jsx("rect",{x:"60",y:"20",width:"80",height:"40",rx:"5",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"80",dur:"2s",fill:"freeze",begin:"1s"})}),e.jsx("text",{x:"100",y:"45",textAnchor:"middle",fill:"white",fontSize:"12",children:"Advanced: 8 minutes"})]}),e.jsxs("g",{transform:"translate(500, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"80",rx:"5",fill:"#1F2937",stroke:"#374151"}),e.jsx("circle",{cx:"20",cy:"20",r:"8",fill:"#EF4444"}),e.jsx("text",{x:"35",y:"25",fill:"#D1D5DB",fontSize:"12",children:"Naive Approach"}),e.jsx("circle",{cx:"20",cy:"40",r:"8",fill:"#F59E0B"}),e.jsx("text",{x:"35",y:"45",fill:"#D1D5DB",fontSize:"12",children:"Basic Optimization"}),e.jsx("circle",{cx:"20",cy:"60",r:"8",fill:"#10B981"}),e.jsx("text",{x:"35",y:"65",fill:"#D1D5DB",fontSize:"12",children:"Advanced Techniques"})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.4s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-emerald-300 border-b border-emerald-800 pb-2",children:"Fundamental Performance Principles"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 mb-8",children:[e.jsx(s,{fileModule:a,title:"Essential Performance Optimizations",highlightLines:[3,7,11,15,19,23,27]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-blue-500/20",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-2",children:"Stream Processing Advantage"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Unix tools process data line-by-line, never loading entire files into memory. When Swadeep processed 10GB logs, streaming prevented memory exhaustion."})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-green-500/20",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Pipe Efficiency"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Pipes pass data between processes without intermediate files. Each tool processes data as it becomes available."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-purple-500/20",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Early Filtering"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Use grep to filter lines early in pipeline. Process 1% of data instead of 100% by removing irrelevant lines first."})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-lg border border-yellow-500/20",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-2",children:"Regex Optimization"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Simple patterns process faster than complex regex. Anchor patterns (^, $) help regex engines optimize matching."})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 hover:border-cyan-500/30 transition-all duration-500",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-cyan-300",children:"Memory Usage Comparison"}),e.jsxs("svg",{viewBox:"0 0 700 300",className:"w-full",children:[e.jsx("line",{x1:"50",y1:"250",x2:"650",y2:"250",stroke:"#4B5563",strokeWidth:"2"}),e.jsx("text",{x:"30",y:"240",fill:"#9CA3AF",fontSize:"12",children:"0 GB"}),e.jsx("text",{x:"630",y:"240",fill:"#9CA3AF",fontSize:"12",children:"10 GB"}),e.jsxs("g",{children:[e.jsx("rect",{x:"100",y:"150",width:"200",height:"100",rx:"5",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"height",from:"0",to:"100",dur:"1.5s",fill:"freeze"})}),e.jsx("text",{x:"200",y:"195",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Load Entire File"}),e.jsx("text",{x:"200",y:"215",textAnchor:"middle",fill:"white",fontSize:"10",children:"10 GB in Memory"}),e.jsx("rect",{x:"400",y:"230",width:"200",height:"20",rx:"5",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"height",from:"0",to:"20",dur:"1.5s",fill:"freeze",begin:"0.5s"})}),e.jsx("text",{x:"500",y:"245",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Stream Processing"}),e.jsx("text",{x:"500",y:"260",textAnchor:"middle",fill:"white",fontSize:"10",children:"100 MB Buffer"})]}),e.jsxs("g",{transform:"translate(0, 50)",children:[e.jsx("rect",{x:"50",y:"0",width:"100",height:"40",rx:"5",fill:"#4B5563",className:"animate-[pulsePerformance_2s_infinite]",children:e.jsx("title",{children:"10GB Data File"})}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"10GB File"}),e.jsx("path",{d:"M160,20 L300,20 L300,100 L440,100",stroke:"#10B981",strokeWidth:"2",fill:"none",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M160,20 L500,20",stroke:"#EF4444",strokeWidth:"2",fill:"none",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"450",y:"0",width:"100",height:"40",rx:"5",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"fill",values:"#EF4444;#DC2626;#EF4444",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"500",y:"25",textAnchor:"middle",fill:"white",fontSize:"10",children:"10GB in RAM"}),e.jsx("rect",{x:"450",y:"80",width:"100",height:"40",rx:"5",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"fill",values:"#10B981;#059669;#10B981",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"500",y:"105",textAnchor:"middle",fill:"white",fontSize:"10",children:"100MB Buffer"})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.6s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-purple-300 border-b border-purple-800 pb-2",children:"Advanced Processing Techniques"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:r,title:"Memory-Efficient Processing Patterns",highlightLines:[4,8,12,16,20,24,28]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-3",children:"Memory Optimization Strategies"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{label:"Use awk",desc:"Single process, less overhead",icon:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",color:"blue"},{label:"Avoid sort",desc:"Memory intensive for large files",icon:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4",color:"red"},{label:"Use LC_ALL=C",desc:"Speed up sorting and matching",icon:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",color:"green"},{label:"Pre-filter",desc:"Reduce data early in pipeline",icon:"M19 9l-7 7-7-7",color:"yellow"}].map((n,t)=>e.jsxs("div",{className:"bg-gray-800/30 p-3 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300",children:[e.jsx("div",{className:`text-${n.color}-400 mb-1 flex justify-center`,children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})})}),e.jsx("div",{className:"font-semibold text-gray-200 text-sm",children:n.label}),e.jsx("div",{className:"text-xs text-gray-400",children:n.desc})]},t))})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:i,title:"Parallel Processing with GNU Parallel",highlightLines:[3,6,9,12,15,18,21]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-3",children:"Parallel Processing Benefits"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{children:e.jsxs("svg",{viewBox:"0 0 400 200",className:"w-full mb-4",children:[e.jsx("text",{x:"50",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Sequential"}),e.jsxs("g",{transform:"translate(50, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"20",rx:"5",fill:"#4B5563"}),[0,60,120,180,240].map((n,t)=>e.jsxs("g",{children:[e.jsx("rect",{x:n,y:"0",width:"40",height:"20",fill:"#3B82F6",className:"animate-[pulsePerformance_2s_infinite]",style:{animationDelay:`${t*.5}s`},children:e.jsx("animate",{attributeName:"fill",values:"#3B82F6;#1D4ED8;#3B82F6",dur:"2s",repeatCount:"indefinite",begin:`${t*.5}s`})}),e.jsx("text",{x:n+20,y:"15",textAnchor:"middle",fill:"white",fontSize:"10",children:"CPU"})]},t))]}),e.jsx("text",{x:"50",y:"100",fill:"#9CA3AF",fontSize:"14",children:"Parallel (4 cores)"}),e.jsxs("g",{transform:"translate(50, 120)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"80",rx:"5",fill:"#4B5563"}),[0,1,2,3].map((n,t)=>e.jsxs("g",{transform:`translate(0, ${n*20})`,children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"20",fill:"#10B981",className:"animate-[flowRight_3s_linear_infinite]",style:{animationDelay:`${t*.2}s`}}),e.jsxs("text",{x:"150",y:"15",textAnchor:"middle",fill:"white",fontSize:"10",children:["CPU ",n+1]})]},t))]})]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-green-400",children:"Speedup: 3-4x"}),e.jsx("div",{className:"text-sm text-gray-400",children:"On 4-core systems for I/O bound tasks"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-400",children:"Resource Utilization"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Keeps all CPU cores busy"})]}),e.jsxs("div",{className:"p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-purple-400",children:"Load Balancing"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Automatically distributes work"})]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:l,title:"Large File Splitting Strategy",highlightLines:[3,6,9,12,15,18,21]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-3",children:"When to Split Files"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-red-900/20 p-4 rounded-lg border border-red-500/20",children:[e.jsx("div",{className:"font-bold text-red-300 mb-1",children:"File Size > 2GB"}),e.jsx("div",{className:"text-sm text-gray-300",children:"Single-file processing becomes inefficient"})]}),e.jsxs("div",{className:"bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20",children:[e.jsx("div",{className:"font-bold text-yellow-300 mb-1",children:"Need Parallel Processing"}),e.jsx("div",{className:"text-sm text-gray-300",children:"Split enables true parallel execution"})]}),e.jsxs("div",{className:"bg-green-900/20 p-4 rounded-lg border border-green-500/20",children:[e.jsx("div",{className:"font-bold text-green-300 mb-1",children:"Memory Constraints"}),e.jsx("div",{className:"text-sm text-gray-300",children:"Process chunks that fit in available RAM"})]})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.8s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Benchmarking and Measurement"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:o,title:"Performance Benchmarking Script",highlightLines:[4,8,12,16,20,24,28]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-cyan-300 mb-3",children:"Key Performance Metrics"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-green-400",children:"time"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Real execution time"})]}),e.jsxs("div",{className:"text-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-400",children:"/usr/bin/time"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Detailed resource usage"})]}),e.jsxs("div",{className:"text-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-400",children:"pv"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Progress monitoring"})]}),e.jsxs("div",{className:"text-center p-3 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-yellow-400",children:"iostat"}),e.jsx("div",{className:"text-sm text-gray-400",children:"I/O performance"})]})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-3",children:"Real-world Benchmark Results"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 700 300",className:"w-full",children:[e.jsx("line",{x1:"80",y1:"50",x2:"80",y2:"250",stroke:"#4B5563",strokeWidth:"2"}),e.jsx("text",{x:"40",y:"50",fill:"#9CA3AF",fontSize:"12",children:"Fast"}),e.jsx("text",{x:"40",y:"150",fill:"#9CA3AF",fontSize:"12",children:"Medium"}),e.jsx("text",{x:"40",y:"250",fill:"#9CA3AF",fontSize:"12",children:"Slow"}),e.jsx("line",{x1:"80",y1:"250",x2:"650",y2:"250",stroke:"#4B5563",strokeWidth:"2"}),[{method:"awk single pass",speed:80,color:"#10B981"},{method:"grep + awk",speed:120,color:"#3B82F6"},{method:"sed stream",speed:150,color:"#8B5CF6"},{method:"multiple sorts",speed:220,color:"#EF4444"},{method:"python script",speed:180,color:"#F59E0B"},{method:"parallel awk",speed:60,color:"#06B6D4"}].map((n,t)=>e.jsxs("g",{transform:`translate(${100+t*80}, 0)`,children:[e.jsx("rect",{x:"0",y:n.speed,width:"40",height:250-n.speed,fill:n.color,rx:"3",className:"hover:opacity-90 transition-opacity duration-300",children:e.jsx("animate",{attributeName:"height",from:"0",to:250-n.speed,dur:"1s",fill:"freeze",begin:`${t*.2}s`})}),e.jsx("text",{x:"20",y:"270",textAnchor:"middle",fill:"#9CA3AF",fontSize:"10",transform:"rotate(45, 20, 270)",children:n.method}),e.jsxs("text",{x:"20",y:n.speed-5,textAnchor:"middle",fill:"white",fontSize:"10",children:[250-n.speed,"ms"]})]},t)),e.jsxs("g",{transform:"translate(500, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"100",rx:"5",fill:"#1F2937",stroke:"#374151"}),e.jsx("text",{x:"10",y:"20",fill:"#D1D5DB",fontSize:"12",fontWeight:"bold",children:"Method Colors"}),e.jsx("line",{x1:"10",y1:"25",x2:"140",y2:"25",stroke:"#4B5563"}),[{color:"#10B981",label:"Fast (awk)"},{color:"#3B82F6",label:"Good (grep+awk)"},{color:"#EF4444",label:"Slow (multiple sorts)"}].map((n,t)=>e.jsxs("g",{transform:`translate(10, ${40+t*20})`,children:[e.jsx("rect",{x:"0",y:"0",width:"10",height:"10",fill:n.color,rx:"2"}),e.jsx("text",{x:"15",y:"10",fill:"#D1D5DB",fontSize:"10",children:n.label})]},t))]})]})})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-red-300 border-b border-red-800 pb-2",children:"Performance Pitfalls to Avoid"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-900/30 to-red-800/20 p-5 rounded-xl border border-red-700/30 hover:border-red-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-red-200",children:"Memory-Related Mistakes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Loading Entire Files"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Using tools that read whole files into memory"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Always use streaming tools (grep, sed, awk)"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Unnecessary Sorting"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Sorting massive files when not absolutely required"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Use associative arrays in awk instead"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Multiple Passes"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Reading same file multiple times for different operations"}),e.jsx("div",{className:"text-xs text-red-400 mt-2",children:"Solution: Combine operations in single awk script"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 p-5 rounded-xl border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-yellow-200",children:"I/O Optimization Mistakes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Intermediate Files"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Creating temp files instead of using pipes"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: command1 | command2 | command3"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Disk I/O vs Memory"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Not using /dev/shm for temp files when needed"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Use RAM disk for temporary storage"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Buffering Issues"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Small I/O operations killing performance"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Use appropriate buffer sizes"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-5 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Professional Optimizations"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Use LC_ALL=C"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Speeds up sorting and pattern matching by 2-10x"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Example: LC_ALL=C sort bigfile.txt"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"AWK is Faster Than Python"}),e.jsx("p",{className:"text-sm text-gray-300",children:"For text processing, awk is 5-50x faster than Python"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Case: Abhronila processed 2GB in 30s with awk vs 3min with Python"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Profile Before Optimizing"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Use time and strace to identify bottlenecks"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Measure, don't guess"})]})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-green-900/30 to-green-800/20 p-5 rounded-xl border border-green-700/30 hover:border-green-500/50 transition-all duration-300",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-green-200",children:"Real-world Success Story"}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-6 h-6 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300",children:"Debangshu from Ichapur reduced log processing from 4 hours to 12 minutes by: 1) Using awk instead of Python, 2) Adding LC_ALL=C, 3) Processing in parallel with GNU parallel. The same hardware processed 10x more data."}),e.jsx("div",{className:"mt-2 text-sm text-green-400",children:"20x performance improvement with optimization"})]})]})]})})]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_2.2s_ease-out] mb-12",children:e.jsx("div",{className:"bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/50 hover:border-emerald-500/50 transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-gradient-to-br from-emerald-600 to-green-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300 animate-[rotateGear_10s_linear_infinite]",children:e.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-emerald-300",children:"Teacher's Note"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-900/40 rounded-xl border border-gray-700",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Dear students, performance optimization is like tuning a car engine. You don't need a faster car if you're driving inefficiently. I've seen Swadeep process 100MB files in seconds while others take minutes with the same tools. The key difference? Understanding how Unix tools work under the hood. Remember: 1) Stream, don't load, 2) Measure everything, 3) Think in pipelines, not steps."})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-emerald-300",children:"Sukanta Hui"}),e.jsx("div",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-green-300",children:"Performance Rule"}),e.jsx("div",{className:"text-sm text-gray-400",children:'"Make it work, then make it fast"'})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-300",children:"Contact"}),e.jsx("div",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-yellow-200",children:"Golden Performance Rules"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-300",children:[e.jsxs("li",{children:["Always use ",e.jsx("code",{className:"bg-gray-800 px-1 rounded",children:"time"})," to measure"]}),e.jsxs("li",{children:["Add ",e.jsx("code",{className:"bg-gray-800 px-1 rounded",children:"LC_ALL=C"})," to sort/grep"]}),e.jsxs("li",{children:["Filter early with ",e.jsx("code",{className:"bg-gray-800 px-1 rounded",children:"grep"})]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-800 px-1 rounded",children:"awk"})," for complex processing"]}),e.jsxs("li",{children:["Consider ",e.jsx("code",{className:"bg-gray-800 px-1 rounded",children:"parallel"})," for multi-core"]})]})]})]})]})})}),e.jsx("div",{className:"animate-[fadeSlideUp_2.4s_ease-out]",children:e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-300 border-b border-green-800 pb-2",children:"Performance Optimization Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:[{num:"1",title:"Measure Baseline",desc:"Use time command to know current performance"},{num:"2",title:"Use Streaming",desc:"Process line-by-line, not whole file"},{num:"3",title:"Filter Early",desc:"Remove irrelevant data as soon as possible"},{num:"4",title:"Avoid Intermediate Files",desc:"Use pipes instead of temporary files"}].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:n.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-green-200",children:n.title}),e.jsx("p",{className:"text-sm text-gray-300",children:n.desc})]})]},t))}),e.jsx("div",{className:"space-y-4",children:[{num:"5",title:"Use Appropriate Tools",desc:"awk for processing, grep for filtering"},{num:"6",title:"Set LC_ALL=C",desc:"For sorting and pattern matching speed"},{num:"7",title:"Consider Parallelism",desc:"Use GNU parallel for multi-core systems"},{num:"8",title:"Profile Bottlenecks",desc:"Find what's actually slowing you down"}].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:n.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-blue-200",children:n.title}),e.jsx("p",{className:"text-sm text-gray-300",children:n.desc})]})]},t))})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Hint Section"}),e.jsx("p",{className:"text-gray-300 italic",children:"Think about: How would you process a 50GB log file on a system with only 4GB RAM? Observe carefully: What's the bottleneck when processing slows down—CPU, memory, or disk I/O? Try changing this: Replace multiple grep/sed/awk commands with a single awk script."})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Professional Tip from Experience"}),e.jsx("p",{className:"text-gray-300 text-sm",children:"When Tuhina optimized the Naihati school database processing, she discovered that 80% of time was spent in sorting. By using awk associative arrays instead of sort|uniq, she achieved a 15x speedup. Always question every sort command—do you really need it?"})]})]})})]})]});export{m as default};

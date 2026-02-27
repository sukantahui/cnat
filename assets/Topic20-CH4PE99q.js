import{j as e}from"./index-meFSU1Lv.js";import{S as r}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const s=`#!/bin/bash
# Basic Pattern Validation Examples
# Demonstrating common validation patterns using grep

echo "=== Basic Pattern Validation ==="
echo ""

# Create sample data file
cat > /tmp/sample_data.txt << 'EOF'
john.doe@example.com
invalid-email
jane@company
555-123-4567
1234567890
987654
01/15/2023
13/45/2023
2023-02-30
valid@test.co.in
(555) 987-6543
EOF

echo "Sample data:"
cat /tmp/sample_data.txt
echo ""

echo "1. Email Validation (basic pattern):"
echo "Pattern: ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
grep -E '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$' /tmp/sample_data.txt
echo ""

echo "2. Phone Number Validation (US format):"
echo "Pattern: ^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
grep -E '^[0-9]{3}-[0-9]{3}-[0-9]{4}$' /tmp/sample_data.txt
echo ""

echo "3. Date Validation (MM/DD/YYYY format):"
echo "Pattern: ^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$"
grep -E '^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}$' /tmp/sample_data.txt
echo ""

echo "4. Finding Invalid Emails (no @ symbol or no . after @):"
echo "Pattern: @.*\\."
grep -v '@.*\\.' /tmp/sample_data.txt | grep '@'
echo ""

echo "5. Validating Mixed Format Phone Numbers:"
echo "Pattern: ^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
grep -E '^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$' /tmp/sample_data.txt
echo ""

echo "6. Detecting Invalid Dates (month > 12 or day > 31):"
echo "Using awk for more complex validation:"
awk 'BEGIN {print "Line\\tContent\\t\\t\\tStatus"} 
     /^[0-9]{1,2}\\/[0-9]{1,2}\\/[0-9]{4}$/ {
        split($0, d, "/")
        if (d[1] > 12 || d[2] > 31) 
            print NR "\\t" $0 "\\t\\tINVALID_DATE"
        else 
            print NR "\\t" $0 "\\t\\tvalid"
     }' /tmp/sample_data.txt`,l=`#!/bin/bash
# Comprehensive Error Detection Script
# Detecting various types of errors in data files

echo "=== Comprehensive Error Detection ==="
echo ""

# Create a sample data file with various errors
cat > /tmp/student_data.csv << 'EOF'
ID,Name,Age,Grade,Email,Phone,JoinDate
1,John Doe,25,B,john@example.com,555-123-4567,2023-01-15
2,Jane Smith, ,A,jane.smith@company,123-456-7890,2023-02-30
3,Bob Johnson,30,F,bob@,987654321,2023-13-01
4, ,22,C,alice@test.com,555-987-6543,2023-01-15
5,Mike Brown,17,A,mike@example.com,555-111-2233,2023-01-15
6,Sarah Davis,120,D,sarah@test.com,555-444-5566,2023-01-15
7,Tom Wilson,19,E,tom@company.com,123-456-789,2023-01-15
8,,21,B,invalid-email,555-999-8888,2023-01-15
EOF

echo "Sample Student Data:"
cat /tmp/student_data.csv
echo ""

echo "=== Running Error Detection ==="
echo ""

echo "1. Detecting Empty Fields:"
awk -F, 'NR>1 {
    for(i=1; i<=NF; i++) {
        if ($i ~ /^[[:space:]]*$/) {
            print "Line " NR ", Field " i " is empty: " $0
        }
    }
}' /tmp/student_data.csv
echo ""

echo "2. Validating Age Range (5-100):"
awk -F, 'NR>1 && $3 !~ /^[0-9]+$/ || $3 < 5 || $3 > 100 {
    print "Line " NR ": Invalid age (" $3 "): " $0
}' /tmp/student_data.csv
echo ""

echo "3. Validating Grade (A-F only):"
awk -F, 'NR>1 && $4 !~ /^[A-F]$/ {
    print "Line " NR ": Invalid grade (" $4 "): " $0
}' /tmp/student_data.csv
echo ""

echo "4. Validating Email Format:"
awk -F, 'NR>1 && $5 !~ /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/ {
    print "Line " NR ": Invalid email (" $5 "): " $0
}' /tmp/student_data.csv
echo ""

echo "5. Validating Phone Format (###-###-####):"
awk -F, 'NR>1 && $6 !~ /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ {
    print "Line " NR ": Invalid phone (" $6 "): " $0
}' /tmp/student_data.csv
echo ""

echo "6. Validating Date Format (YYYY-MM-DD):"
awk -F, 'NR>1 {
    if ($7 !~ /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) {
        print "Line " NR ": Invalid date format (" $7 "): " $0
    } else {
        split($7, d, "-")
        # Simple date validation (not accounting for month lengths)
        if (d[2] < 1 || d[2] > 12 || d[3] < 1 || d[3] > 31) {
            print "Line " NR ": Impossible date (" $7 "): " $0
        }
    }
}' /tmp/student_data.csv
echo ""

echo "7. Generating Summary Report:"
echo "Total records: $(awk 'END{print NR-1}' /tmp/student_data.csv)"
echo "Records with errors: $(awk -F, '
NR>1 {
    error=0
    if ($3 < 5 || $3 > 100) error=1
    if ($4 !~ /^[A-F]$/) error=1
    if ($5 !~ /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/) error=1
    if ($6 !~ /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) error=1
    if (error) count++
} END {print count+0}
' /tmp/student_data.csv)"`,o=`#!/bin/bash
# Complex Business Rule Validation
# Validating data against business logic rules

echo "=== Complex Business Rule Validation ==="
echo ""

# Create sample product data
cat > /tmp/product_data.csv << 'EOF'
ID,Name,Category,Price,Stock,MinStock,MaxStock,LastOrder
1,Laptop,Electronics,999.99,50,10,100,2023-12-15
2,Mouse,Electronics,25.50,200,20,500,2023-12-30
3,Chair,Furniture,150.00,-5,5,50,2023-11-15
4,Desk,Furniture,300.00,15,5,30,2023-13-01
5,Monitor,Electronics,299.99,75,10,100,2023-12-15
6,Keyboard,,79.99,150,20,300,2023-12-15
7,Tablet,Electronics,499.99,0,5,50,2023-12-15
8,Printer,Electronics,199.99,8,5,25,2024-01-15
EOF

echo "Sample Product Data:"
cat /tmp/product_data.csv
echo ""

echo "=== Applying Business Rules ==="
echo ""

echo "1. Stock Level Validation:"
echo "   Rule: Stock must be between MinStock and MaxStock"
awk -F, 'NR>1 {
    if ($5 < 0) {
        print "ERROR: Line " NR " - Negative stock (" $5 ") for " $2
    } else if ($5 < $6) {
        print "WARNING: Line " NR " - Low stock (" $5 " < min " $6 ") for " $2
    } else if ($5 > $7) {
        print "WARNING: Line " NR " - High stock (" $5 " > max " $7 ") for " $2
    }
}' /tmp/product_data.csv
echo ""

echo "2. Price Validation:"
echo "   Rule: Price must be positive and reasonable for category"
awk -F, 'NR>1 {
    if ($4 <= 0) {
        print "ERROR: Line " NR " - Invalid price (" $4 ") for " $2
    } else if ($3 == "Electronics" && $4 > 1000) {
        print "WARNING: Line " NR " - High price for electronics: " $2
    } else if ($3 == "Furniture" && $4 > 500) {
        print "WARNING: Line " NR " - High price for furniture: " $2
    }
}' /tmp/product_data.csv
echo ""

echo "3. Category Validation:"
echo "   Rule: Category must not be empty and must be valid"
awk -F, 'NR>1 {
    if ($3 == "") {
        print "ERROR: Line " NR " - Empty category for " $2
    } else if ($3 !~ /^(Electronics|Furniture|Office|Books)$/) {
        print "WARNING: Line " NR " - Unusual category (" $3 ") for " $2
    }
}' /tmp/product_data.csv
echo ""

echo "4. Date Logic Validation:"
echo "   Rule: LastOrder date must be in the past"
awk -F, 'NR>1 {
    split($8, d, "-")
    order_date = d[1] d[2] d[3]
    current_date = strftime("%Y%m%d")
    if (order_date > current_date) {
        print "ERROR: Line " NR " - Future order date (" $8 ") for " $2
    } else if (order_date < "20230101") {
        print "WARNING: Line " NR " - Old order date (" $8 ") for " $2
    }
}' /tmp/product_data.csv
echo ""

echo "5. Cross-field Validation:"
echo "   Rule: High-value items should have adequate stock coverage"
awk -F, 'NR>1 {
    if ($4 > 200 && $5 < 20) {
        print "WARNING: Line " NR " - High value item " $2 " has low stock (" $5 ")"
    }
    if ($3 == "Electronics" && $5 == 0) {
        print "ERROR: Line " NR " - Electronics item " $2 " is out of stock"
    }
}' /tmp/product_data.csv
echo ""

echo "6. Generating Validation Report:"
awk -F, '
BEGIN {
    print "=== VALIDATION REPORT ==="
    print "Timestamp: " strftime("%Y-%m-%d %H:%M:%S")
    print ""
}
NR==1 { next }
{
    errors = 0
    warnings = 0
    
    # Check each rule
    if ($3 == "") { cat_error = "Missing category"; errors++ }
    if ($4 <= 0) { price_error = "Invalid price"; errors++ }
    if ($5 < 0) { stock_error = "Negative stock"; errors++ }
    if ($5 < $6) { low_stock = "Below minimum"; warnings++ }
    if ($5 > $7) { high_stock = "Above maximum"; warnings++ }
    
    if (errors > 0 || warnings > 0) {
        printf "Product: %s (ID: %s)\\n", $2, $1
        if (errors > 0) printf "  ERRORS: %d - Needs immediate attention\\n", errors
        if (warnings > 0) printf "  WARNINGS: %d - Review recommended\\n", warnings
        print ""
    } else {
        valid_count++
    }
}
END {
    print "=== SUMMARY ==="
    print "Total products checked: " NR-1
    print "Fully valid products: " valid_count
    print "Products with issues: " (NR-1 - valid_count)
}
' /tmp/product_data.csv`,d=`#!/bin/bash
# Log File Analysis and Validation
# Validating log file formats and detecting anomalies

echo "=== Log File Validation ==="
echo ""

# Create sample log file with various entries
cat > /tmp/server.log << 'EOF'
[2024-01-15 10:30:45] INFO: User login successful from 192.168.1.100
[2024-01-15 10:31:22] ERROR: Database connection failed
[2024-01-15 10:31:25] WARNING: High memory usage detected (85%)
[2024-01-15 10:32:10] INFO: Backup completed successfully
[INVALID TIMESTAMP] DEBUG: Starting process
[2024-01-15 10:33:00] ERROR: File not found: /var/www/data.txt
[2024-01-15 10:33:15] INFO: Scheduled task started
[2024-01-15 10:34:00] CRITICAL: Disk full on /dev/sda1
[2024-01-15 10:35:00] WARNING: CPU usage above threshold
[2024-01-15 10:36:00] INFO: User logout from 192.168.1.100
EOF

echo "Sample Log File:"
cat /tmp/server.log
echo ""

echo "=== Validating Log Entries ==="
echo ""

echo "1. Checking Timestamp Format:"
echo "   Expected: [YYYY-MM-DD HH:MM:SS]"
grep -v '^\\[[0-9]\\{4\\}-[0-9]\\{2\\}-[0-9]\\{2\\} [0-9]\\{2\\}:[0-9]\\{2\\}:[0-9]\\{2\\}\\]' /tmp/server.log
echo ""

echo "2. Validating Log Levels:"
echo "   Valid levels: INFO, WARNING, ERROR, CRITICAL, DEBUG"
awk '
/^\\[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\\]/ {
    match($0, /\\] ([A-Z]+):/, level)
    if (level[1] !~ /^(INFO|WARNING|ERROR|CRITICAL|DEBUG)$/) {
        print "Invalid log level at line " NR ": " level[1]
    }
}
' /tmp/server.log
echo ""

echo "3. Detecting Error and Critical Logs:"
grep -E '\\] (ERROR|CRITICAL):' /tmp/server.log
echo ""

echo "4. Finding IP Addresses in Logs:"
grep -oE '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' /tmp/server.log | sort -u
echo ""

echo "5. Validating Log Structure:"
echo "   Line\\tStatus\\t\\tMessage"
awk '
BEGIN {
    print "Line\\tStatus\\t\\tMessage"
    print "----\\t------\\t\\t-------"
}
{
    if ($0 ~ /^\\[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\\] [A-Z]+: .+$/) {
        status = "VALID"
    } else if ($0 ~ /^\\[[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\\]/) {
        status = "INVALID_FORMAT"
    } else {
        status = "MALFORMED"
    }
    printf "%d\\t%s\\t%s\\n", NR, status, substr($0, 1, 40) "..."
}
' /tmp/server.log
echo ""

echo "6. Log Analysis Summary:"
echo "Total log entries: $(wc -l < /tmp/server.log)"
echo "Valid entries: $(grep -c '^\\[[0-9]\\{4\\}-[0-9]\\{2\\}-[0-9]\\{2\\} [0-9]\\{2\\}:[0-9]\\{2\\}:[0-9]\\{2\\}\\] [A-Z]\\+: .\\+$' /tmp/server.log)"
echo "Error entries: $(grep -c 'ERROR' /tmp/server.log)"
echo "Warning entries: $(grep -c 'WARNING' /tmp/server.log)"
echo "Critical entries: $(grep -c 'CRITICAL' /tmp/server.log)"
echo ""

echo "7. Time-based Analysis:"
echo "   First log: $(grep -o '^\\[[^]]*\\]' /tmp/server.log | head -1)"
echo "   Last log: $(grep -o '^\\[[^]]*\\]' /tmp/server.log | tail -1)"
echo "   Duration: Approximately $(expr $(grep -o '^\\[[^]]*\\]' /tmp/server.log | tail -1 | grep -o '[0-9]\\{2\\}:[0-9]\\{2\\}:[0-9]\\{2\\}' | tr -d ':') - $(grep -o '^\\[[^]]*\\]' /tmp/server.log | head -1 | grep -o '[0-9]\\{2\\}:[0-9]\\{2\\}:[0-9]\\{2\\}' | tr -d ':') | sed 's/^/0./') minutes"`,c=`#!/bin/bash
# CSV Data Integrity Checking
# Comprehensive validation of CSV file structure and content

echo "=== CSV Data Integrity Validation ==="
echo ""

# Create sample CSV with integrity issues
cat > /tmp/sales_data.csv << 'EOF'
OrderID,CustomerID,ProductID,Quantity,Price,Total,OrderDate
1001,C101,P001,2,25.50,51.00,2023-12-15
1002,C102,P002,1,99.99,99.99,2023-12-15
1003,C103,P003,3,15.00,45.00,2023-12-16
1004,C104,P004,0,10.00,0.00,2023-12-16
1005,C105,P005,2,30.00,60.00,2023-12-17
1006,C106,P006,1,25.50,25.50,2023-12-17
1007,C107,P007,5,12.00,60.00,2023-12-18
1008,C108,P008,2,45.00,90.00,2023-12-18
1009,C109,P009,1,75.00,75.00,2023-12-19
1010,C110,P010,3,20.00,60.00,2023-12-19
EOF

echo "Sample Sales Data:"
cat /tmp/sales_data.csv
echo ""

echo "=== Running Integrity Checks ==="
echo ""

echo "1. Checking File Structure:"
echo "   - Line endings: $(file /tmp/sales_data.csv | grep -o 'with [^,]*' || echo 'Unknown')"
echo "   - Total lines: $(wc -l < /tmp/sales_data.csv)"
echo "   - Expected columns: $(head -1 /tmp/sales_data.csv | tr ',' '\\n' | wc -l)"
echo ""

echo "2. Validating Column Count Consistency:"
awk -F, '{
    if (NR == 1) {
        expected_cols = NF
        print "Header has " expected_cols " columns"
    } else if (NF != expected_cols) {
        print "ERROR: Line " NR " has " NF " columns (expected " expected_cols ")"
    }
}' /tmp/sales_data.csv
echo ""

echo "3. Checking for Duplicate OrderIDs:"
awk -F, 'NR>1 {
    if (orderids[$1]++) {
        print "ERROR: Duplicate OrderID " $1 " at line " NR
    }
    orderids[$1] = NR
}' /tmp/sales_data.csv
echo ""

echo "4. Validating Numeric Fields:"
awk -F, 'NR>1 {
    # Quantity validation (positive integer)
    if ($4 !~ /^[0-9]+$/ || $4 < 0) {
        print "ERROR: Line " NR " - Invalid quantity: " $4
    }
    
    # Price validation (positive decimal)
    if ($5 !~ /^[0-9]+(\\.[0-9]+)?$/ || $5 <= 0) {
        print "ERROR: Line " NR " - Invalid price: " $5
    }
    
    # Total validation (should equal Quantity * Price)
    expected_total = $4 * $5
    actual_total = $6 + 0  # Force numeric conversion
    if (expected_total != actual_total) {
        print "ERROR: Line " NR " - Total mismatch: expected " expected_total ", got " actual_total
    }
}' /tmp/sales_data.csv
echo ""

echo "5. Date Validation:"
awk -F, 'NR>1 {
    if ($7 !~ /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) {
        print "ERROR: Line " NR " - Invalid date format: " $7
    } else {
        split($7, d, "-")
        # Basic date validation
        if (d[1] < 2023 || d[1] > 2024) {
            print "WARNING: Line " NR " - Year out of range: " d[1]
        }
        if (d[2] < 1 || d[2] > 12) {
            print "ERROR: Line " NR " - Invalid month: " d[2]
        }
        if (d[3] < 1 || d[3] > 31) {
            print "ERROR: Line " NR " - Invalid day: " d[3]
        }
    }
}' /tmp/sales_data.csv
echo ""

echo "6. Referential Integrity (simplified):"
echo "   Checking for orphaned references..."
# In real scenario, we would check against actual reference tables
awk -F, 'NR>1 {
    # CustomerID format check
    if ($2 !~ /^C[0-9]{3}$/) {
        print "WARNING: Line " NR " - Non-standard CustomerID: " $2
    }
    # ProductID format check
    if ($3 !~ /^P[0-9]{3}$/) {
        print "WARNING: Line " NR " - Non-standard ProductID: " $3
    }
}' /tmp/sales_data.csv
echo ""

echo "7. Business Rule Validation:"
echo "   - Orders with zero quantity should have zero total"
awk -F, 'NR>1 && $4 == 0 && $6 != 0 {
    print "ERROR: Line " NR " - Zero quantity but non-zero total"
}' /tmp/sales_data.csv

echo "   - Large orders (>10 items) should be reviewed"
awk -F, 'NR>1 && $4 > 10 {
    print "WARNING: Line " NR " - Large order: " $4 " items"
}' /tmp/sales_data.csv
echo ""

echo "8. Generating Integrity Report:"
awk -F, '
BEGIN {
    print "=== DATA INTEGRITY REPORT ==="
    print "File: /tmp/sales_data.csv"
    print "Generated: " strftime("%Y-%m-%d %H:%M:%S")
    print ""
    
    error_count = 0
    warning_count = 0
    valid_count = 0
}

NR == 1 {
    header = $0
    expected_cols = NF
    next
}

{
    line_errors = 0
    line_warnings = 0
    
    # Check 1: Column count
    if (NF != expected_cols) {
        errors[NR] = errors[NR] "Wrong column count (" NF " vs " expected_cols "). "
        line_errors++
    }
    
    # Check 2: OrderID uniqueness
    if (orderids[$1]) {
        errors[NR] = errors[NR] "Duplicate OrderID. "
        line_errors++
    }
    orderids[$1] = 1
    
    # Check 3: Quantity validation
    if ($4 !~ /^[0-9]+$/ || $4 < 0) {
        errors[NR] = errors[NR] "Invalid quantity. "
        line_errors++
    }
    
    # Check 4: Price validation
    if ($5 !~ /^[0-9]+(\\.[0-9]+)?$/ || $5 <= 0) {
        errors[NR] = errors[NR] "Invalid price. "
        line_errors++
    }
    
    # Check 5: Total calculation
    if ($4 * $5 != $6 + 0) {
        errors[NR] = errors[NR] "Total calculation error. "
        line_errors++
    }
    
    # Check 6: Date format
    if ($7 !~ /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) {
        errors[NR] = errors[NR] "Invalid date format. "
        line_errors++
    }
    
    # Warnings
    if ($4 == 0) {
        warnings[NR] = warnings[NR] "Zero quantity order. "
        line_warnings++
    }
    if ($4 > 5) {
        warnings[NR] = warnings[NR] "Large order. "
        line_warnings++
    }
    
    if (line_errors == 0 && line_warnings == 0) {
        valid_count++
    } else {
        if (line_errors > 0) error_count++
        if (line_warnings > 0) warning_count++
    }
}

END {
    print "=== SUMMARY ==="
    print "Total records: " NR-1
    print "Valid records: " valid_count
    print "Records with errors: " error_count
    print "Records with warnings: " warning_count
    print ""
    
    if (error_count > 0) {
        print "=== ERROR DETAILS ==="
        for (line in errors) {
            print "Line " line ": " errors[line]
        }
    }
    
    if (warning_count > 0) {
        print "=== WARNING DETAILS ==="
        for (line in warnings) {
            print "Line " line ": " warnings[line]
        }
    }
    
    print ""
    print "=== RECOMMENDATIONS ==="
    if (error_count > 0) {
        print "1. Fix data errors before processing"
        print "2. Review the error details above"
    }
    if (warning_count > 0) {
        print "3. Review warnings for potential issues"
    }
    if (error_count == 0 && warning_count == 0) {
        print "Data integrity check passed successfully!"
    }
}
' /tmp/sales_data.csv`,g=()=>e.jsxs("div",{className:"dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 p-4 md:p-8",children:[e.jsx("style",{children:`
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
                
                @keyframes pulseAlert {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
                    }
                }
                
                @keyframes slideInRight {
                    0% {
                        transform: translateX(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes checkMark {
                    0% {
                        stroke-dashoffset: 100;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
                `}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.8s_ease-out] mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-3 h-8 bg-red-500 rounded-full"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent",children:"Topic 20: Error Detection and Pattern Validation in Text Files"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed animate-[fadeSlideUp_1s_ease-out]",children:"Master techniques to identify errors, validate patterns, and ensure data integrity using powerful Unix tools"})]}),e.jsx("div",{className:"animate-[fadeSlideUp_1s_ease-out] mb-12 bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 border border-red-700/50 hover:border-red-500/50 transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 animate-pulse",children:e.jsx("svg",{className:"w-12 h-12 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-3 text-red-300",children:"The Critical Importance of Validation"}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"When Tuhina from Naihati processed exam results, she discovered that 15% of records had errors that would have skewed the entire analysis. Error detection isn't just about finding mistakes—it's about ensuring data integrity for critical decision-making."})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-orange-300 border-b border-orange-800 pb-2",children:"Common Error Types in Text Files"}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"Format Errors",color:"red",examples:["Invalid dates","Malformed emails","Incorrect phone numbers"],icon:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Structural Errors",color:"yellow",examples:["Missing columns","Extra delimiters","Inconsistent line lengths"],icon:"M4 6h16M4 10h16M4 14h16M4 18h16"},{title:"Content Errors",color:"blue",examples:["Out-of-range values","Invalid categories","Data type mismatches"],icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},{title:"Consistency Errors",color:"green",examples:["Duplicate records","Referential issues","Cross-field validation"],icon:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},{title:"Syntax Errors",color:"purple",examples:["Unclosed quotes","Invalid JSON/CSV","Special character issues"],icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},{title:"Business Rule Errors",color:"pink",examples:["Age < 0","Future birth dates","Impossible combinations"],icon:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}].map((n,t)=>e.jsxs("div",{className:`animate-[fadeSlideUp_${1.2+t*.1}s_ease-out] bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-${n.color}-700/30 hover:border-${n.color}-500/50 transition-all duration-300 hover:scale-[1.02]`,children:[e.jsxs("div",{className:`flex items-center gap-3 mb-3 text-${n.color}-300`,children:[e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})}),e.jsx("h3",{className:"font-bold text-lg",children:n.title})]}),e.jsx("ul",{className:"space-y-2",children:n.examples.map((a,i)=>e.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-300",children:[e.jsx("div",{className:`w-2 h-2 bg-${n.color}-500 rounded-full`}),a]},i))})]},t))})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.6s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Basic Pattern Validation with grep"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 mb-8",children:[e.jsx(r,{fileModule:s,title:"Basic Pattern Validation Script",highlightLines:[3,6,9,12,15,18]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg border border-green-500/20",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-3",children:"Validation Success Indicators"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Email format matches pattern"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Phone number has correct format"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Date falls within valid range"})]})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg border border-red-500/20",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-3",children:"Error Detection Patterns"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Missing @ symbol in email"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Phone number too short/long"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-2 h-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Impossible date (e.g., Feb 30)"})]})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-blue-300",children:"Pattern Matching Visualization"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full min-h-[200px]",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Email Pattern: ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"}),e.jsx("rect",{x:"10",y:"40",width:"780",height:"30",rx:"5",fill:"#1F2937",stroke:"#4B5563"}),e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"10",rx:"2",fill:"#3B82F6",className:"hover:fill-blue-400 transition-colors duration-300",children:e.jsx("title",{children:"Local part: letters, numbers, dots, underscores, percent, plus, hyphen"})}),e.jsx("text",{x:"60",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"local part"}),e.jsx("rect",{x:"130",y:"0",width:"20",height:"10",rx:"2",fill:"#EF4444",className:"hover:fill-red-400 transition-colors duration-300",children:e.jsx("title",{children:"Required @ symbol"})}),e.jsx("text",{x:"140",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"@"}),e.jsx("rect",{x:"160",y:"0",width:"80",height:"10",rx:"2",fill:"#10B981",className:"hover:fill-green-400 transition-colors duration-300",children:e.jsx("title",{children:"Domain name"})}),e.jsx("text",{x:"200",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"domain"}),e.jsx("rect",{x:"250",y:"0",width:"10",height:"10",rx:"2",fill:"#F59E0B",className:"hover:fill-yellow-400 transition-colors duration-300",children:e.jsx("title",{children:"Required dot"})}),e.jsx("text",{x:"255",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"."}),e.jsx("rect",{x:"270",y:"0",width:"60",height:"10",rx:"2",fill:"#8B5CF6",className:"hover:fill-purple-400 transition-colors duration-300",children:e.jsx("title",{children:"Top-level domain (2+ chars)"})}),e.jsx("text",{x:"300",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"TLD"})]}),e.jsxs("g",{transform:"translate(20, 80)",children:[e.jsx("text",{x:"0",y:"20",fill:"#9CA3AF",fontSize:"12",children:"Example: john.doe@example.com"}),e.jsx("rect",{x:"0",y:"25",width:"75",height:"10",rx:"2",fill:"#3B82F6",opacity:"0.7"}),e.jsx("rect",{x:"85",y:"25",width:"10",height:"10",rx:"2",fill:"#EF4444",opacity:"0.7"}),e.jsx("rect",{x:"105",y:"25",width:"50",height:"10",rx:"2",fill:"#10B981",opacity:"0.7"}),e.jsx("rect",{x:"165",y:"25",width:"10",height:"10",rx:"2",fill:"#F59E0B",opacity:"0.7"}),e.jsx("rect",{x:"185",y:"25",width:"25",height:"10",rx:"2",fill:"#8B5CF6",opacity:"0.7"})]})]}),e.jsxs("g",{transform:"translate(0, 120)",children:[e.jsxs("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:["Phone Pattern: ^\\d",3,"[-.]?\\d",3,"[-.]?\\d",4,"$"]}),e.jsx("rect",{x:"10",y:"40",width:"780",height:"30",rx:"5",fill:"#1F2937",stroke:"#4B5563"}),e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"40",height:"10",rx:"2",fill:"#3B82F6"}),e.jsx("text",{x:"20",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"3 digits"}),e.jsx("rect",{x:"50",y:"0",width:"20",height:"10",rx:"2",fill:"#10B981"}),e.jsx("text",{x:"60",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"optional - or ."}),e.jsx("rect",{x:"80",y:"0",width:"40",height:"10",rx:"2",fill:"#F59E0B"}),e.jsx("text",{x:"100",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"3 digits"}),e.jsx("rect",{x:"130",y:"0",width:"20",height:"10",rx:"2",fill:"#8B5CF6"}),e.jsx("text",{x:"140",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"optional - or ."}),e.jsx("rect",{x:"160",y:"0",width:"50",height:"10",rx:"2",fill:"#EC4899"}),e.jsx("text",{x:"185",y:"8",textAnchor:"middle",fill:"white",fontSize:"8",children:"4 digits"})]})]})]})})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.8s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-purple-300 border-b border-purple-800 pb-2",children:"Advanced Error Detection Scripts"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300",children:[e.jsx(r,{fileModule:l,title:"Comprehensive Error Detection Script",highlightLines:[4,8,12,16,20,24]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-3",children:"Detection Capabilities"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{label:"Empty Fields",color:"red",icon:"M20 12H4"},{label:"Date Range",color:"yellow",icon:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},{label:"Numeric Range",color:"green",icon:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"},{label:"Pattern Match",color:"blue",icon:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}].map((n,t)=>e.jsxs("div",{className:"bg-gray-800/30 p-3 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300",children:[e.jsx("div",{className:`text-${n.color}-400 mb-1 flex justify-center`,children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:n.icon})})}),e.jsx("div",{className:"text-xs text-gray-300",children:n.label})]},t))})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-all duration-300",children:[e.jsx(r,{fileModule:o,title:"Complex Business Rule Validation",highlightLines:[5,10,15,20,25,30]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-3",children:"Business Rule Examples from Shyamnagar School"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center",children:e.jsx("span",{className:"text-red-400 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-red-300",children:"Age Validation"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Student age must be between 5 and 25"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center",children:e.jsx("span",{className:"text-yellow-400 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-yellow-300",children:"Grade Consistency"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Marks must correspond to appropriate grade (A: 90+, B: 80-89, etc.)"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center",children:e.jsx("span",{className:"text-green-400 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-300",children:"Date Logic"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Birth date must be before admission date"})]})]})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-300 border-b border-green-800 pb-2",children:"Real-world Validation Applications"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-green-500/40 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-green-200",children:"Log File Analysis & Validation"}),e.jsx(r,{fileModule:d,title:"Server Log Validation Script",highlightLines:[3,7,11,15,19]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-2",children:"Valid Log Patterns"}),e.jsxs("pre",{className:"text-xs text-gray-300 font-mono",children:["[2024-01-15 10:30:45] INFO: User login successful",`
`,"[2024-01-15 10:31:22] ERROR: Database connection failed",`
`,"[2024-01-15 10:32:10] WARNING: High memory usage detected"]})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-cyan-200",children:"Data Integrity Checking"}),e.jsx(r,{fileModule:c,title:"CSV Data Integrity Validation",highlightLines:[4,8,12,16,20,24]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-cyan-300 mb-3",children:"Integrity Check Flow"}),e.jsxs("svg",{viewBox:"0 0 300 180",className:"w-full",children:[e.jsx("rect",{x:"20",y:"20",width:"80",height:"40",rx:"5",fill:"#4B5563",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("animate",{attributeName:"fill",values:"#4B5563;#6B7280;#4B5563",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"60",y:"45",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"CSV File"}),e.jsx("path",{d:"M110,40 L150,40",stroke:"#9CA3AF",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"150,40 142,35 142,45",fill:"#9CA3AF"}),e.jsx("rect",{x:"160",y:"20",width:"80",height:"40",rx:"5",fill:"#1E40AF",className:"hover:fill-blue-700 transition-colors duration-300",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.8;1",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"45",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"Validation"}),e.jsxs("g",{transform:"translate(0, 60)",children:[e.jsx("rect",{x:"20",y:"20",width:"260",height:"80",rx:"8",fill:"#1F2937",stroke:"#374151",strokeWidth:"1"}),e.jsx("circle",{cx:"40",cy:"50",r:"15",fill:"#EF4444",className:"hover:fill-red-400 transition-colors duration-300",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"40",y:"55",textAnchor:"middle",fill:"white",fontSize:"8",children:"Errors"}),e.jsx("circle",{cx:"100",cy:"50",r:"15",fill:"#F59E0B",className:"hover:fill-yellow-400 transition-colors duration-300",children:e.jsx("animate",{attributeName:"r",values:"15;16;15",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"white",fontSize:"8",children:"Warnings"}),e.jsx("circle",{cx:"160",cy:"50",r:"15",fill:"#10B981",className:"hover:fill-green-400 transition-colors duration-300",children:e.jsx("animate",{attributeName:"r",values:"15;17;15",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"160",y:"55",textAnchor:"middle",fill:"white",fontSize:"8",children:"Valid"}),e.jsx("circle",{cx:"220",cy:"50",r:"15",fill:"#3B82F6",className:"hover:fill-blue-400 transition-colors duration-300",children:e.jsx("animate",{attributeName:"r",values:"15;16;15",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"220",y:"55",textAnchor:"middle",fill:"white",fontSize:"8",children:"Total"}),e.jsx("text",{x:"150",y:"85",textAnchor:"middle",fill:"#9CA3AF",fontSize:"8",children:"Validation Report Summary"})]})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-red-300 border-b border-red-800 pb-2",children:"Common Validation Pitfalls"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-900/30 to-red-800/20 p-5 rounded-xl border border-red-700/30 hover:border-red-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-red-200",children:"Pattern Design Mistakes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Overly Restrictive Patterns"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Rejecting valid international phone numbers or email formats"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Missing Edge Cases"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Not accounting for special characters or whitespace variations"})]}),e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-1",children:"Performance Issues"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Using complex regex on large files without optimization"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 p-5 rounded-xl border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-yellow-200",children:"Validation Logic Errors"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Order of Operations"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Validating before cleaning data (e.g., checking trimmed values)"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"Silent Failures"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Not logging or reporting validation failures clearly"})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-1",children:"False Positives"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Marking valid data as errors due to overly strict rules"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-5 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Professional Solutions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Progressive Validation"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Start with basic format checks, then business rules"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Clean → Format → Validate → Report"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Test Data Sets"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Maintain test files with known valid/invalid data"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Include edge cases in test data"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Modular Validation"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Create separate validation functions for each rule"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Best Practice: Reusable validation scripts"})]})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-green-900/30 to-green-800/20 p-5 rounded-xl border border-green-700/30 hover:border-green-500/50 transition-all duration-300",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-green-200",children:"Validation Workflow"}),e.jsxs("svg",{viewBox:"0 0 300 120",className:"w-full mb-4",children:[e.jsx("path",{d:"M30,60 Q50,30 70,60 T110,60 T150,60 T190,60 T230,60 T270,60",stroke:"#10B981",strokeWidth:"2",fill:"none",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"3s",repeatCount:"indefinite"})}),[{x:30,label:"Input",color:"#6B7280"},{x:70,label:"Clean",color:"#3B82F6"},{x:110,label:"Format",color:"#8B5CF6"},{x:150,label:"Validate",color:"#10B981"},{x:190,label:"Report",color:"#F59E0B"},{x:230,label:"Fix",color:"#EF4444"},{x:270,label:"Output",color:"#6366F1"}].map((n,t)=>e.jsxs("g",{transform:`translate(${n.x}, 60)`,children:[e.jsx("circle",{r:"15",fill:n.color,className:"hover:scale-110 transition-transform duration-300",children:e.jsx("animate",{attributeName:"r",values:"15;17;15",dur:`${1+t*.5}s`,repeatCount:"indefinite"})}),e.jsx("text",{y:"35",textAnchor:"middle",fill:"#D1D5DB",fontSize:"8",children:n.label})]},t))]}),e.jsx("p",{className:"text-sm text-gray-300",children:"When Abhronila from Barrackpore validated exam data, she followed this workflow and caught 97% of errors before processing."})]})})]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_2.4s_ease-out] mb-12",children:e.jsx("div",{className:"bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-purple-300",children:"Teacher's Note"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-900/40 rounded-xl border border-gray-700",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Dear students, error detection is like proofreading your own work—it's tedious but essential. I remember Swadeep once processed 10,000 student records from Ichapur schools without validation and had to redo everything because of date format errors. Always validate early, validate often. Your validation scripts should be as important as your processing scripts."})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-purple-300",children:"Sukanta Hui"}),e.jsx("div",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-pink-300",children:"Golden Rule"}),e.jsx("div",{className:"text-sm text-gray-400",children:'"Trust, but verify" all data'})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-300",children:"Contact"}),e.jsx("div",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-yellow-200",children:"Exam Strategy"}),e.jsx("p",{className:"text-gray-300",children:"In exams, when asked to validate data: 1) List possible error types, 2) Write regex patterns for each, 3) Show how you would detect each error type, 4) Suggest corrections. Showing systematic thinking gets more marks than just correct answers."})]})]})]})})}),e.jsx("div",{className:"animate-[fadeSlideUp_2.6s_ease-out]",children:e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-orange-300 border-b border-orange-800 pb-2",children:"Validation Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:[{num:"1",title:"Define Clear Rules",desc:"Specify exactly what constitutes valid data"},{num:"2",title:"Test Patterns",desc:"Verify regex patterns with sample valid/invalid data"},{num:"3",title:"Handle Edge Cases",desc:"Account for empty values, whitespace, special chars"},{num:"4",title:"Create Test Suite",desc:"Maintain test files for regular validation"}].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:n.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-orange-200",children:n.title}),e.jsx("p",{className:"text-sm text-gray-300",children:n.desc})]})]},t))}),e.jsx("div",{className:"space-y-4",children:[{num:"5",title:"Log Everything",desc:"Record all validation attempts and results"},{num:"6",title:"Provide Clear Reports",desc:"Generate human-readable error summaries"},{num:"7",title:"Automate Where Possible",desc:"Use scripts for repetitive validation tasks"},{num:"8",title:"Review Periodically",desc:"Update validation rules as data formats evolve"}].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:n.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-200",children:n.title}),e.jsx("p",{className:"text-sm text-gray-300",children:n.desc})]})]},t))})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Hint Section"}),e.jsx("p",{className:"text-gray-300 italic",children:"Think about: How would you validate a CSV file where some columns are optional? Observe carefully: What patterns emerge when data fails validation—are errors clustered or random? Try changing this: Instead of rejecting invalid data immediately, can you suggest automatic corrections?"})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Professional Tip from Debangshu's Experience"}),e.jsx("p",{className:"text-gray-300 text-sm",children:'When I worked on the Naihati student database project, I created a validation pipeline that: 1) Logged all errors with line numbers, 2) Suggested possible fixes, 3) Generated a summary report, 4) Could run in "dry-run" mode to preview changes. This saved 40+ hours of manual checking.'})]})]})})]})]});export{g as default};

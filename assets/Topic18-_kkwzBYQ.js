import{j as e}from"./index-CG3iA-Ea.js";import{S as t}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const n=`#!/bin/bash
# Basic log analysis examples

echo "Basic Log Analysis with grep and awk"
echo "===================================="

# Create sample Apache access log
cat > /tmp/access.log << 'EOF'
192.168.1.1 - - [15/Jan/2024:10:30:45 +0530] "GET /index.html HTTP/1.1" 200 1234
203.0.113.5 - - [15/Jan/2024:10:31:22 +0530] "GET /about.html HTTP/1.1" 404 234
192.168.1.1 - - [15/Jan/2024:10:32:15 +0530] "POST /login HTTP/1.1" 302 2345
198.51.100.23 - - [15/Jan/2024:10:33:01 +0530] "GET /products.html HTTP/1.1" 200 4567
192.168.1.1 - - [15/Jan/2024:10:34:18 +0530] "GET /admin.php HTTP/1.1" 403 345
203.0.113.5 - - [15/Jan/2024:10:35:42 +0530] "GET /index.html HTTP/1.1" 200 1234
192.168.1.1 - - [15/Jan/2024:10:36:09 +0530] "GET /contact.html HTTP/1.1" 200 3456
203.0.113.5 - - [15/Jan/2024:10:37:33 +0530] "GET /api/data HTTP/1.1" 500 678
192.168.1.1 - - [15/Jan/2024:10:38:56 +0530] "POST /logout HTTP/1.1" 302 2345
198.51.100.23 - - [15/Jan/2024:10:39:12 +0530] "GET /products.html HTTP/1.1" 200 4567
EOF

echo "1. Count total requests:"
echo "------------------------"
wc -l /tmp/access.log

echo -e "\\n2. Extract all IP addresses:"
echo "-----------------------------"
awk '{print $1}' /tmp/access.log

echo -e "\\n3. Find all errors (4xx and 5xx):"
echo "-----------------------------------"
awk '$9 ~ /^[45][0-9]{2}$/ {print $0}' /tmp/access.log

echo -e "\\n4. Count requests per IP:"
echo "---------------------------"
awk '{print $1}' /tmp/access.log | sort | uniq -c | sort -rn

echo -e "\\n5. List unique HTTP status codes:"
echo "-----------------------------------"
awk '{print $9}' /tmp/access.log | sort | uniq -c

echo -e "\\n6. Find requests to specific paths:"
echo "-------------------------------------"
grep -E "(admin|api)" /tmp/access.log

echo -e "\\n7. Extract timestamps and IPs of errors:"
echo "------------------------------------------"
awk '$9 ~ /^[45][0-9]{2}$/ {print $4, $1}' /tmp/access.log

echo -e "\\n8. Calculate total bytes transferred:"
echo "---------------------------------------"
awk '{sum += $10} END {print "Total bytes:", sum}' /tmp/access.log

# Create sample error log
cat > /tmp/error.log << 'EOF'
[Wed Jan 15 10:30:45 2024] [error] [client 192.168.1.1] File does not exist: /var/www/favicon.ico
[Wed Jan 15 10:31:22 2024] [error] [client 203.0.113.5] PHP Warning: Invalid argument supplied for foreach()
[Wed Jan 15 10:32:15 2024] [error] [client 192.168.1.1] File does not exist: /var/www/robots.txt
[Wed Jan 15 10:33:01 2024] [error] [client 192.168.1.1] PHP Fatal error: Call to undefined function mysql_connect()
[Wed Jan 15 10:34:18 2024] [error] [client 198.51.100.23] File does not exist: /var/www/favicon.ico
EOF

echo -e "\\n9. Analyze error log:"
echo "----------------------"
echo "Error types:"
grep -o '\\[error\\].*' /tmp/error.log | cut -d']' -f2- | sort | uniq -c

# Cleanup
rm -f /tmp/access.log /tmp/error.log`,a=`#!/bin/bash
# Error analysis techniques

echo "Advanced Error Analysis"
echo "======================="

# Create comprehensive error log
cat > /tmp/app_errors.log << 'EOF'
2024-01-15 10:30:45 ERROR [Database] Connection failed: timeout after 30s
2024-01-15 10:31:22 WARN  [Cache] Memory usage at 85%
2024-01-15 10:32:15 ERROR [API] Invalid response from payment gateway
2024-01-15 10:33:01 INFO  [System] Backup completed successfully
2024-01-15 10:34:18 ERROR [Database] Deadlock detected on table 'orders'
2024-01-15 10:35:42 WARN  [Network] High latency detected: 450ms
2024-01-15 10:36:09 ERROR [API] Authentication failed for user: admin
2024-01-15 10:37:33 ERROR [Database] Connection failed: timeout after 30s
2024-01-15 10:38:56 INFO  [System] Scheduled maintenance started
2024-01-15 10:39:12 ERROR [API] Rate limit exceeded for IP: 203.0.113.5
2024-01-15 10:40:45 ERROR [Database] Connection failed: timeout after 30s
2024-01-15 10:41:22 WARN  [Disk] Storage at 92% capacity
2024-01-15 10:42:15 ERROR [API] Invalid response from payment gateway
EOF

echo "1. Error frequency by type:"
echo "---------------------------"
grep -i "error" /tmp/app_errors.log | awk '{print $4}' | sort | uniq -c | sort -rn

echo -e "\\n2. Error timeline (last 10 errors):"
echo "-------------------------------------"
grep -i "error" /tmp/app_errors.log | tail -10

echo -e "\\n3. Most common error messages:"
echo "--------------------------------"
grep -i "error" /tmp/app_errors.log | cut -d']' -f2- | sort | uniq -c | sort -rn

echo -e "\\n4. Errors by hour:"
echo "-------------------"
grep -i "error" /tmp/app_errors.log | awk '{print $2}' | cut -d: -f1 | sort | uniq -c

echo -e "\\n5. Find recurring errors (same error > 2 times):"
echo "--------------------------------------------------"
grep -i "error" /tmp/app_errors.log | cut -d']' -f2- | sort | uniq -c | awk '$1 > 2'

echo -e "\\n6. Extract error details with context:"
echo "----------------------------------------"
grep -B1 -A1 "timeout" /tmp/app_errors.log

echo -e "\\n7. Calculate error rate over time:"
echo "------------------------------------"
total_lines=$(wc -l < /tmp/app_errors.log)
error_count=$(grep -c -i "error" /tmp/app_errors.log)
warn_count=$(grep -c -i "warn" /tmp/app_errors.log)
echo "Total log entries: $total_lines"
echo "Errors: $error_count"
echo "Warnings: $warn_count"
echo "Error rate: $(( (error_count * 100) / total_lines ))%"

# Create authentication error log
cat > /tmp/auth_errors.log << 'EOF'
2024-01-15 10:30:45 Failed login for user: admin from IP: 192.168.1.1
2024-01-15 10:31:22 Failed login for user: admin from IP: 192.168.1.1
2024-01-15 10:32:15 Failed login for user: admin from IP: 192.168.1.1
2024-01-15 10:33:01 Failed login for user: admin from IP: 203.0.113.5
2024-01-15 10:34:18 Successful login for user: tuhina from IP: 192.168.1.105
2024-01-15 10:35:42 Failed login for user: root from IP: 192.168.1.1
2024-01-15 10:36:09 Account locked: admin from IP: 192.168.1.1
2024-01-15 10:37:33 Failed login for user: admin from IP: 203.0.113.5
EOF

echo -e "\\n8. Security analysis - Failed login attempts:"
echo "----------------------------------------------"
echo "Top IPs with failed logins:"
grep "Failed login" /tmp/auth_errors.log | awk '{print $NF}' | sort | uniq -c | sort -rn
echo -e "\\nTop usernames with failed logins:"
grep "Failed login" /tmp/auth_errors.log | awk -F"user: " '{print $2}' | awk '{print $1}' | sort | uniq -c | sort -rn

# Cleanup
rm -f /tmp/app_errors.log /tmp/auth_errors.log`,o=`#!/bin/bash
# Performance analysis script

echo "Performance Analysis from Logs"
echo "=============================="

# Create performance log with response times
cat > /tmp/performance.log << 'EOF'
192.168.1.1 - - [15/Jan/2024:10:30:45 +0530] "GET /index.html HTTP/1.1" 200 1234 0.045
203.0.113.5 - - [15/Jan/2024:10:31:22 +0530] "GET /api/users HTTP/1.1" 200 5678 1.234
192.168.1.1 - - [15/Jan/2024:10:32:15 +0530] "POST /login HTTP/1.1" 302 2345 0.125
198.51.100.23 - - [15/Jan/2024:10:33:01 +0530] "GET /products.html HTTP/1.1" 200 4567 0.089
192.168.1.1 - - [15/Jan/2024:10:34:18 +0530] "GET /admin/dashboard HTTP/1.1" 200 3456 2.567
203.0.113.5 - - [15/Jan/2024:10:35:42 +0530] "GET /index.html HTTP/1.1" 200 1234 0.042
192.168.1.1 - - [15/Jan/2024:10:36:09 +0530] "GET /api/products HTTP/1.1" 200 34567 1.890
203.0.113.5 - - [15/Jan/2024:10:37:33 +0530] "GET /contact.html HTTP/1.1" 200 3456 0.067
192.168.1.1 - - [15/Jan/2024:10:38:56 +0530] "POST /api/order HTTP/1.1" 200 5678 3.456
198.51.100.23 - - [15/Jan/2024:10:39:12 +0530] "GET /products.html HTTP/1.1" 200 4567 0.091
EOF

echo "1. Response time statistics (last field):"
echo "----------------------------------------"
awk '{print $NF}' /tmp/performance.log | sort -n | awk '
    NR == 1 {min = $1}
    {sum += $1; sumsq += $1*$1}
    NR == 1 || $1 < min {min = $1}
    NR == 1 || $1 > max {max = $1}
    END {
        print "Min:", min "s";
        print "Max:", max "s";
        print "Avg:", sum/NR "s";
        print "Std Dev:", sqrt(sumsq/NR - (sum/NR)**2) "s"
    }
'

echo -e "\\n2. Slowest endpoints (> 1 second):"
echo "-----------------------------------"
awk '$NF > 1 {print $7, $NF "s"}' /tmp/performance.log | sort -k2 -nr

echo -e "\\n3. Average response time by endpoint:"
echo "---------------------------------------"
awk '{endpoint=$7; time=$NF; count[endpoint]++; sum[endpoint]+=time} 
     END {for (e in sum) print e, sum[e]/count[e] "s"}' /tmp/performance.log | sort -k2 -nr

echo -e "\\n4. Requests per minute:"
echo "-------------------------"
awk '{print $4}' /tmp/performance.log | cut -d: -f1,2 | sort | uniq -c

echo -e "\\n5. Throughput analysis:"
echo "-------------------------"
echo "Total requests:" $(wc -l < /tmp/performance.log)
echo "Total response time:" $(awk '{sum+=$NF} END {print sum "s"}' /tmp/performance.log)
echo "Requests per second:" $(awk 'END {print NR/600}' /tmp/performance.log)

echo -e "\\n6. Performance by HTTP method:"
echo "--------------------------------"
awk '{method=$6; gsub(/"/, "", method); time=$NF; count[method]++; sum[method]+=time} 
     END {for (m in sum) print m, sum[m]/count[m] "s", "(" count[m] " requests)"}' /tmp/performance.log

# Create database query log
cat > /tmp/db_performance.log << 'EOF'
2024-01-15 10:30:45 SELECT * FROM users WHERE id=1 - 0.045s
2024-01-15 10:31:22 SELECT * FROM orders WHERE user_id=42 - 1.234s
2024-01-15 10:32:15 UPDATE users SET last_login=NOW() WHERE id=1 - 0.125s
2024-01-15 10:33:01 SELECT * FROM products WHERE category='electronics' - 2.567s
2024-01-15 10:34:18 SELECT COUNT(*) FROM orders WHERE status='pending' - 0.089s
2024-01-15 10:35:42 INSERT INTO logs (message) VALUES ('test') - 0.042s
2024-01-15 10:36:09 SELECT * FROM products JOIN categories ON products.category_id=categories.id - 3.456s
EOF

echo -e "\\n7. Database query analysis:"
echo "----------------------------"
echo "Slow queries (> 1s):"
grep -E '[0-9]+\\.[0-9]+s$' /tmp/db_performance.log | awk '{if ($NF+0 > 1) print $0}'
echo -e "\\nQuery types:"
awk '{print $4}' /tmp/db_performance.log | sort | uniq -c | sort -rn

# Cleanup
rm -f /tmp/performance.log /tmp/db_performance.log`,i=`#!/bin/bash
# Security analysis script

echo "Security Analysis from Logs"
echo "==========================="

# Create web server log with suspicious activity
cat > /tmp/security.log << 'EOF'
192.168.1.1 - - [15/Jan/2024:10:30:45 +0530] "GET /index.html HTTP/1.1" 200 1234
203.0.113.5 - - [15/Jan/2024:10:31:22 +0530] "GET /admin HTTP/1.1" 403 234
192.168.1.1 - - [15/Jan/2024:10:32:15 +0530] "GET /wp-login.php HTTP/1.1" 404 345
198.51.100.23 - - [15/Jan/2024:10:33:01 +0530] "GET /../../../etc/passwd HTTP/1.1" 400 456
192.168.1.1 - - [15/Jan/2024:10:34:18 +0530] "GET /index.html?param=<script>alert(1)<\/script> HTTP/1.1" 200 1234
203.0.113.5 - - [15/Jan/2024:10:35:42 +0530] "POST /login HTTP/1.1" 401 234
192.168.1.1 - - [15/Jan/2024:10:36:09 +0530] "GET /api/users?admin=1' OR '1'='1 HTTP/1.1" 500 678
203.0.113.5 - - [15/Jan/2024:10:37:33 +0530] "GET /cgi-bin/test.cgi HTTP/1.1" 404 345
192.168.1.1 - - [15/Jan/2024:10:38:56 +0530] "GET /backup.zip HTTP/1.1" 403 456
198.51.100.23 - - [15/Jan/2024:10:39:12 +0530] "GET /phpmyadmin HTTP/1.1" 404 567
192.168.1.105 - - [15/Jan/2024:10:40:45 +0530] "GET /index.html HTTP/1.1" 200 1234
192.168.1.1 - - [15/Jan/2024:10:41:22 +0530] "GET /shell.php?cmd=ls HTTP/1.1" 404 345
EOF

echo "1. Suspicious requests (common attack patterns):"
echo "----------------------------------------------"
echo "Directory traversal attempts:"
grep -E "\\.\\./|\\.\\.\\\\\\\\" /tmp/security.log
echo -e "\\nSQL injection patterns:"
grep -i -E "union.*select|select.*from|' OR '1'='1" /tmp/security.log
echo -e "\\nXSS attempts:"
grep -i "<script>" /tmp/security.log
echo -e "\\nSensitive file access:"
grep -i -E "(passwd|config|backup|\\.zip|\\.sql)" /tmp/security.log
echo -e "\\nAdmin/login page probes:"
grep -i -E "(admin|login|wp-login|phpmyadmin)" /tmp/security.log

echo -e "\\n2. Failed authentication attempts:"
echo "------------------------------------"
grep " 401 \\| 403 " /tmp/security.log | awk '{print $1, $7}' | sort | uniq -c | sort -rn

echo -e "\\n3. Most active suspicious IPs:"
echo "--------------------------------"
awk '$9 ~ /^[45][0-9]{2}$/ {print $1}' /tmp/security.log | sort | uniq -c | sort -rn | head -5

echo -e "\\n4. Request patterns by hour:"
echo "------------------------------"
awk '{print $4}' /tmp/security.log | cut -d: -f1,2 | sort | uniq -c

echo -e "\\n5. Blocked requests analysis:"
echo "-------------------------------"
echo "Total requests:" $(wc -l < /tmp/security.log)
blocked=$(grep -c " 403 \\| 400 \\| 404 " /tmp/security.log)
echo "Blocked/suspicious requests: $blocked"
echo "Block rate: $(( (blocked * 100) / $(wc -l < /tmp/security.log) ))%"

# Create SSH authentication log
cat > /tmp/ssh_auth.log << 'EOF'
Jan 15 10:30:45 server sshd[1234]: Failed password for root from 192.168.1.1 port 22 ssh2
Jan 15 10:31:22 server sshd[1235]: Failed password for admin from 192.168.1.1 port 22 ssh2
Jan 15 10:32:15 server sshd[1236]: Failed password for root from 192.168.1.1 port 22 ssh2
Jan 15 10:33:01 server sshd[1237]: Accepted password for tuhina from 192.168.1.105 port 22 ssh2
Jan 15 10:34:18 server sshd[1238]: Failed password for root from 203.0.113.5 port 22 ssh2
Jan 15 10:35:42 server sshd[1239]: Failed password for ubuntu from 192.168.1.1 port 22 ssh2
Jan 15 10:36:09 server sshd[1240]: Failed password for root from 192.168.1.1 port 22 ssh2
Jan 15 10:37:33 server sshd[1241]: Failed password for admin from 203.0.113.5 port 22 ssh2
Jan 15 10:38:56 server sshd[1242]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.1.1
Jan 15 10:39:12 server sshd[1243]: Failed password for root from 192.168.1.1 port 22 ssh2
EOF

echo -e "\\n6. SSH brute force analysis:"
echo "-----------------------------"
echo "Failed SSH attempts by IP:"
grep "Failed password" /tmp/ssh_auth.log | awk '{print $11}' | sort | uniq -c | sort -rn
echo -e "\\nFailed SSH attempts by username:"
grep "Failed password" /tmp/ssh_auth.log | awk -F"for " '{print $2}' | awk '{print $1}' | sort | uniq -c | sort -rn
echo -e "\\nIPs with > 3 failed attempts (potential brute force):"
grep "Failed password" /tmp/ssh_auth.log | awk '{print $11}' | sort | uniq -c | awk '$1 > 3'

# Cleanup
rm -f /tmp/security.log /tmp/ssh_auth.log`,l=`#!/bin/bash
# Production log analysis pipeline

echo "Production Log Analysis Pipeline"
echo "================================"

# Create realistic multi-source log data
cat > /tmp/production_access.log << 'EOF'
192.168.1.105 - tuhina [15/Jan/2024:10:30:45 +0530] "GET /dashboard HTTP/1.1" 200 5432 "-" "Mozilla/5.0" 0.045
203.0.113.42 - - [15/Jan/2024:10:31:22 +0530] "GET /api/users HTTP/1.1" 200 2345 "-" "python-requests/2.28" 1.234
192.168.1.105 - tuhina [15/Jan/2024:10:32:15 +0530] "POST /api/order HTTP/1.1" 201 3456 "-" "Mozilla/5.0" 0.567
198.51.100.23 - swadeep [15/Jan/2024:10:33:01 +0530] "GET /products HTTP/1.1" 200 4567 "-" "Mozilla/5.0" 0.089
192.168.1.220 - - [15/Jan/2024:10:34:18 +0530] "GET /admin HTTP/1.1" 403 234 "-" "curl/7.68" 0.023
203.0.113.42 - - [15/Jan/2024:10:35:42 +0530] "GET /api/products HTTP/1.1" 200 12345 "-" "python-requests/2.28" 0.456
192.168.1.105 - tuhina [15/Jan/2024:10:36:09 +0530] "GET /profile HTTP/1.1" 200 3456 "-" "Mozilla/5.0" 0.034
203.0.113.42 - - [15/Jan/2024:10:37:33 +0530] "POST /api/auth HTTP/1.1" 401 123 "-" "python-requests/2.28" 0.125
192.168.1.105 - tuhina [15/Jan/2024:10:38:56 +0530] "GET /logout HTTP/1.1" 302 234 "-" "Mozilla/5.0" 0.045
198.51.100.23 - swadeep [15/Jan/2024:10:39:12 +0530] "GET /cart HTTP/1.1" 200 3456 "-" "Mozilla/5.0" 0.067
192.168.1.220 - - [15/Jan/2024:10:40:45 +0530] "GET /wp-login.php HTTP/1.1" 404 456 "-" "curl/7.68" 0.032
192.168.1.105 - abhronila [15/Jan/2024:10:41:22 +0530] "GET /dashboard HTTP/1.1" 200 5432 "-" "Mozilla/5.0" 0.041
203.0.113.42 - - [15/Jan/2024:10:42:15 +0530] "GET /api/orders?limit=1000 HTTP/1.1" 200 23456 "-" "python-requests/2.28" 2.345
EOF

echo "PRODUCTION LOG ANALYSIS REPORT"
echo "=============================="
echo "Generated: $(date)"
echo "Log file: /tmp/production_access.log"
echo ""

# Complete analysis pipeline
{
    echo "1. EXECUTIVE SUMMARY"
    echo "-------------------"
    total_requests=$(wc -l < /tmp/production_access.log)
    successful_requests=$(awk '$9 == 200 || $9 == 201 {count++} END {print count}' /tmp/production_access.log)
    error_requests=$(awk '$9 ~ /^[45][0-9]{2}$/ {count++} END {print count}' /tmp/production_access.log)
    
    echo "Total requests: $total_requests"
    echo "Successful (2xx): $successful_requests"
    echo "Errors (4xx/5xx): $error_requests"
    echo "Success rate: $(( (successful_requests * 100) / total_requests ))%"
    echo "Error rate: $(( (error_requests * 100) / total_requests ))%"
    
    echo -e "\\n2. TRAFFIC ANALYSIS"
    echo "-------------------"
    echo "Requests per hour:"
    awk '{print $4}' /tmp/production_access.log | cut -d: -f1,2 | sort | uniq -c
    
    echo -e "\\nTop 5 IP addresses:"
    awk '{print $1}' /tmp/production_access.log | sort | uniq -c | sort -rn | head -5
    
    echo -e "\\nAuthenticated vs Anonymous:"
    awk '{if ($3 != "-") auth++; else anon++} END {print "Authenticated:", auth; print "Anonymous:", anon}' /tmp/production_access.log
    
    echo -e "\\n3. PERFORMANCE METRICS"
    echo "----------------------"
    echo "Response time statistics (seconds):"
    awk '{print $NF}' /tmp/production_access.log | sort -n | awk '
        NR == 1 {min = $1}
        {sum += $1; sumsq += $1*$1}
        NR == 1 || $1 < min {min = $1}
        NR == 1 || $1 > max {max = $1}
        END {
            print "  Min:", sprintf("%.3f", min);
            print "  Max:", sprintf("%.3f", max);
            print "  Avg:", sprintf("%.3f", sum/NR);
            print "  95th percentile:", sprintf("%.3f", int(NR*0.95) == NR*0.95 ? a[int(NR*0.95)] : a[int(NR*0.95)+1])
        }' a="$(awk '{print $NF}' /tmp/production_access.log | sort -n)"
    
    echo -e "\\nSlow endpoints (> 1s):"
    awk '$NF > 1 {print $7, sprintf("%.3fs", $NF)}' /tmp/production_access.log | sort -k2 -nr
    
    echo -e "\\n4. ERROR ANALYSIS"
    echo "-----------------"
    echo "HTTP status code distribution:"
    awk '{print $9}' /tmp/production_access.log | sort | uniq -c | sort -rn
    
    echo -e "\\nError details (4xx/5xx):"
    awk '$9 ~ /^[45][0-9]{2}$/ {print $1, $7, $9, $NF "s"}' /tmp/production_access.log
    
    echo -e "\\n5. SECURITY MONITORING"
    echo "----------------------"
    echo "Suspicious activity detected:"
    grep -i -E "(admin|login\\\\.php|wp-|cgi-bin|\\.\\\\./)" /tmp/production_access.log | \\
        awk '{print "  [" $4 "] " $1 " -> " $7 " (" $9 ")"}'
    
    echo -e "\\nFailed authentication attempts:"
    awk '$9 == 401 {print $1, $7}' /tmp/production_access.log | sort | uniq -c | sort -rn
    
    echo -e "\\n6. API USAGE"
    echo "------------"
    echo "API requests vs Web requests:"
    awk '{if ($7 ~ /^\\/api\\//) api++; else web++} END {print "API:", api; print "Web:", web}' /tmp/production_access.log
    
    echo -e "\\nTop API endpoints:"
    awk '$7 ~ /^\\/api\\// {print $7}' /tmp/production_access.log | sort | uniq -c | sort -rn
    
    echo -e "\\n7. USER ACTIVITY"
    echo "---------------"
    echo "Active users (by username):"
    awk '$3 != "-" {print $3}' /tmp/production_access.log | sort | uniq -c | sort -rn
    
    echo -e "\\nUser session analysis:"
    awk '$3 != "-" {user=$3; ip=$1; count[user]++; ips[user]=ip} 
         END {for (u in count) print u " (" ips[u] "): " count[u] " requests"}' /tmp/production_access.log | sort -k3 -nr
    
    echo -e "\\n8. DATA TRANSFER"
    echo "---------------"
    total_bytes=$(awk '{sum += $(NF-1)} END {print sum}' /tmp/production_access.log)
    avg_bytes=$(awk '{sum += $(NF-1)} END {print sum/NR}' /tmp/production_access.log)
    echo "Total bytes transferred: $total_bytes"
    echo "Average response size: $(printf "%.0f" $avg_bytes) bytes"
    
    echo -e "\\nLargest responses:"
    awk '{print $7, $(NF-1) " bytes"}' /tmp/production_access.log | sort -k2 -nr | head -5
    
    echo -e "\\n--- END OF REPORT ---"
    
} | tee /tmp/log_analysis_report.txt

echo -e "\\nReport saved to: /tmp/log_analysis_report.txt"
echo "Top 10 lines of report:"
head -10 /tmp/log_analysis_report.txt

# Create monitoring script
cat > /tmp/monitor_logs.sh << 'EOF'
#!/bin/bash
# Real-time log monitoring script

LOG_FILE="/tmp/production_access.log"
ALERT_FILE="/tmp/security_alerts.txt"
ERROR_THRESHOLD=5  # Alert if more than 5 errors in 1 minute
SLOW_THRESHOLD=2   # Alert if response time > 2 seconds

echo "Starting real-time log monitoring..."
echo "Monitoring: $LOG_FILE"
echo "Alert file: $ALERT_FILE"
echo ""

tail -f "$LOG_FILE" | while read line; do
    timestamp=$(echo "$line" | awk '{print $4}' | tr -d '[]')
    ip=$(echo "$line" | awk '{print $1}')
    status=$(echo "$line" | awk '{print $9}')
    response_time=$(echo "$line" | awk '{print $NF}')
    endpoint=$(echo "$line" | awk '{print $7}')
    
    # Check for errors
    if [[ "$status" =~ ^[45][0-9]{2}$ ]]; then
        echo "[$(date)] ERROR: $ip -> $endpoint ($status)" | tee -a "$ALERT_FILE"
    fi
    
    # Check for slow responses
    if (( $(echo "$response_time > $SLOW_THRESHOLD" | bc -l) )); then
        echo "[$(date)] SLOW: $endpoint took \${response_time}s" | tee -a "$ALERT_FILE"
    fi
    
    # Check for suspicious patterns
    if [[ "$endpoint" =~ (admin|login\\\\.php|wp-|\\\\.\\\\./) ]]; then
        echo "[$(date)] SUSPICIOUS: $ip accessed $endpoint" | tee -a "$ALERT_FILE"
    fi
done
EOF

chmod +x /tmp/monitor_logs.sh

echo -e "\\nReal-time monitoring script created: /tmp/monitor_logs.sh"
echo "To use: ./tmp/monitor_logs.sh"

# Cleanup
rm -f /tmp/production_access.log`,m=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 p-6 md:p-8 lg:p-12 font-sans dark",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-12 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 rounded-3xl blur-xl"}),e.jsxs("div",{className:`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 \r
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-900/30 \r
                    animate-[fadeIn_0.8s_ease-out]`,style:{animation:"fadeIn 0.8s ease-out"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent",children:"Topic 18: Log File Analysis Using grep and awk"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Professional System Monitoring and Debugging Techniques"})]})]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-violet-300 mb-2",children:"Real-World Application"}),e.jsx("p",{className:"text-sm",children:"System monitoring, debugging, security auditing"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-semibold text-fuchsia-300 mb-2",children:"Key Tools"}),e.jsx("p",{className:"text-sm",children:"grep for filtering, awk for processing"})]}),e.jsxs("div",{className:"p-4 bg-gray-900/50 rounded-xl border border-gray700",children:[e.jsx("h3",{className:"font-semibold text-purple-300 mb-2",children:"Production Value"}),e.jsx("p",{className:"text-sm",children:"Proactive monitoring, incident response, performance tuning"})]})]})]})]}),e.jsx("style",{children:`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes staggerItem {
                    0% { opacity: 0; transform: translateX(-10px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes pulseLog {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            `}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-violet-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"The Art of Log Analysis"]}),e.jsxs("div",{className:"space-y-6 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Log files are the ",e.jsx("span",{className:"text-violet-300",children:"black boxes"})," of computing systems. They record everything that happens, from routine operations to critical errors. Mastering log analysis with ",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"grep"})," and",e.jsx("code",{className:"bg-gray-900 px-2 py-1 rounded",children:"awk"})," turns you from a passive observer into an active ",e.jsx("span",{className:"text-fuchsia-300",children:"system detective"}),"."]}),e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border-l-4 border-fuchsia-500",children:[e.jsx("h3",{className:"font-bold text-fuchsia-300 mb-3",children:"Why Log Analysis is Crucial"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{icon:"🔍",title:"Debugging",desc:"Find root causes of system failures"},{icon:"🛡️",title:"Security",desc:"Detect intrusion attempts and breaches"},{icon:"⚡",title:"Performance",desc:"Identify bottlenecks and optimize systems"},{icon:"📈",title:"Compliance",desc:"Meet audit and regulatory requirements"},{icon:"🚨",title:"Monitoring",desc:"Proactive alerting before issues escalate"},{icon:"📊",title:"Analytics",desc:"Understand user behavior and system usage"}].map((s,r)=>e.jsxs("div",{className:"bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-colors duration-300 hover:scale-[1.02]",style:{animationDelay:`${r*.1}s`},children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-2xl",children:s.icon}),e.jsx("h4",{className:"font-bold text-violet-300",children:s.title})]}),e.jsx("p",{className:"text-sm text-gray-300",children:s.desc})]},r))})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-lg hover:shadow-fuchsia-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-fuchsia-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),"Anatomy of a Log Entry"]}),e.jsxs("div",{className:"bg-gray-900/50 p-6 rounded-xl",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("svg",{width:"800",height:"320",className:"hover:scale-[1.02] transition-transform duration-500",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"logGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8b5cf6",stopOpacity:1}}),e.jsx("stop",{offset:"25%",style:{stopColor:"#7c3aed",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#d946ef",stopOpacity:1}}),e.jsx("stop",{offset:"75%",style:{stopColor:"#ec4899",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#f43f5e",stopOpacity:1}})]}),e.jsx("marker",{id:"logArrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8b5cf6"})})]}),e.jsx("rect",{x:"50",y:"50",width:"700",height:"60",rx:"10",fill:"#1f2937",stroke:"#4b5563",strokeWidth:"2"}),e.jsx("text",{x:"400",y:"30",textAnchor:"middle",fill:"#fbbf24",fontSize:"16",fontWeight:"bold",children:"Apache Access Log Entry"}),e.jsxs("rect",{x:"60",y:"55",width:"140",height:"50",rx:"5",fill:"#5b21b6",stroke:"#7c3aed",strokeWidth:"2",className:"hover:stroke-violet-400 transition-colors duration-300",children:[e.jsx("title",{children:"Timestamp - When the event occurred"}),e.jsx("animate",{attributeName:"fill",values:"#5b21b6;#7c3aed;#5b21b6",dur:"3s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"130",y:"80",textAnchor:"middle",fill:"#c4b5fd",fontSize:"12",children:"[15/Jan/2024:10:30:45]"}),e.jsx("text",{x:"130",y:"95",textAnchor:"middle",fill:"#a78bfa",fontSize:"10",children:"Timestamp"}),e.jsxs("rect",{x:"210",y:"55",width:"100",height:"50",rx:"5",fill:"#7c2d12",stroke:"#ea580c",strokeWidth:"2",className:"hover:stroke-orange-400 transition-colors duration-300",children:[e.jsx("title",{children:"Client IP Address - Who made the request"}),e.jsx("animate",{attributeName:"fill",values:"#7c2d12;#ea580c;#7c2d12",dur:"3s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsx("text",{x:"260",y:"80",textAnchor:"middle",fill:"#fdba74",fontSize:"12",children:"192.168.1.1"}),e.jsx("text",{x:"260",y:"95",textAnchor:"middle",fill:"#fb923c",fontSize:"10",children:"IP Address"}),e.jsxs("rect",{x:"320",y:"55",width:"60",height:"50",rx:"5",fill:"#065f46",stroke:"#059669",strokeWidth:"2",className:"hover:stroke-emerald-400 transition-colors duration-300",children:[e.jsx("title",{children:"HTTP Method - What action was requested"}),e.jsx("animate",{attributeName:"fill",values:"#065f46;#059669;#065f46",dur:"3s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("text",{x:"350",y:"80",textAnchor:"middle",fill:"#6ee7b7",fontSize:"12",children:"GET"}),e.jsx("text",{x:"350",y:"95",textAnchor:"middle",fill:"#34d399",fontSize:"10",children:"Method"}),e.jsxs("rect",{x:"390",y:"55",width:"140",height:"50",rx:"5",fill:"#3730a3",stroke:"#4f46e5",strokeWidth:"2",className:"hover:stroke-indigo-400 transition-colors duration-300",children:[e.jsx("title",{children:"Requested URL - What resource was accessed"}),e.jsx("animate",{attributeName:"fill",values:"#3730a3;#4f46e5;#3730a3",dur:"3s",repeatCount:"indefinite",begin:"1.5s"})]}),e.jsx("text",{x:"460",y:"80",textAnchor:"middle",fill:"#a5b4fc",fontSize:"12",children:"/index.html"}),e.jsx("text",{x:"460",y:"95",textAnchor:"middle",fill:"#818cf8",fontSize:"10",children:"URL"}),e.jsxs("rect",{x:"540",y:"55",width:"60",height:"50",rx:"5",fill:"#7c2d12",stroke:"#dc2626",strokeWidth:"2",className:"hover:stroke-red-400 transition-colors duration-300",children:[e.jsx("title",{children:"HTTP Status Code - Result of the request"}),e.jsx("animate",{attributeName:"fill",values:"#7c2d12;#dc2626;#7c2d12",dur:"3s",repeatCount:"indefinite",begin:"2s"})]}),e.jsx("text",{x:"570",y:"80",textAnchor:"middle",fill:"#fca5a5",fontSize:"12",children:"200"}),e.jsx("text",{x:"570",y:"95",textAnchor:"middle",fill:"#f87171",fontSize:"10",children:"Status"}),e.jsxs("rect",{x:"610",y:"55",width:"80",height:"50",rx:"5",fill:"#4338ca",stroke:"#6366f1",strokeWidth:"2",className:"hover:stroke-blue-400 transition-colors duration-300",children:[e.jsx("title",{children:"Response Size - How much data was sent"}),e.jsx("animate",{attributeName:"fill",values:"#4338ca;#6366f1;#4338ca",dur:"3s",repeatCount:"indefinite",begin:"2.5s"})]}),e.jsx("text",{x:"650",y:"80",textAnchor:"middle",fill:"#93c5fd",fontSize:"12",children:"1234"}),e.jsx("text",{x:"650",y:"95",textAnchor:"middle",fill:"#60a5fa",fontSize:"10",children:"Bytes"}),e.jsxs("g",{transform:"translate(50, 150)",children:[e.jsx("text",{x:"350",y:"0",textAnchor:"middle",fill:"#fbbf24",fontSize:"16",fontWeight:"bold",children:"Log Analysis Pipeline"}),e.jsx("rect",{x:"50",y:"20",width:"120",height:"60",rx:"10",fill:"#5b21b6",stroke:"#8b5cf6",strokeWidth:"2",children:e.jsx("title",{children:"grep - Filter relevant log entries"})}),e.jsx("text",{x:"110",y:"45",textAnchor:"middle",fill:"#c4b5fd",fontSize:"14",fontWeight:"bold",children:"grep"}),e.jsx("text",{x:"110",y:"65",textAnchor:"middle",fill:"#ddd6fe",fontSize:"10",children:'"ERROR\\|WARN"'}),e.jsx("rect",{x:"200",y:"20",width:"120",height:"60",rx:"10",fill:"#7c3aed",stroke:"#a78bfa",strokeWidth:"2",children:e.jsx("title",{children:"awk - Extract and process fields"})}),e.jsx("text",{x:"260",y:"45",textAnchor:"middle",fill:"#ddd6fe",fontSize:"14",fontWeight:"bold",children:"awk"}),e.jsx("text",{x:"260",y:"65",textAnchor:"middle",fill:"#ede9fe",fontSize:"10",children:"'{print $1, $9}'"}),e.jsx("rect",{x:"350",y:"20",width:"120",height:"60",rx:"10",fill:"#d946ef",stroke:"#f0abfc",strokeWidth:"2",children:e.jsx("title",{children:"sort - Organize results"})}),e.jsx("text",{x:"410",y:"45",textAnchor:"middle",fill:"#fae8ff",fontSize:"14",fontWeight:"bold",children:"sort"}),e.jsx("text",{x:"410",y:"65",textAnchor:"middle",fill:"#fce7f3",fontSize:"10",children:"| uniq -c"}),e.jsx("rect",{x:"500",y:"20",width:"120",height:"60",rx:"10",fill:"#ec4899",stroke:"#f9a8d4",strokeWidth:"2",children:e.jsx("title",{children:"head - Limit output"})}),e.jsx("text",{x:"560",y:"45",textAnchor:"middle",fill:"#fce7f3",fontSize:"14",fontWeight:"bold",children:"head"}),e.jsx("text",{x:"560",y:"65",textAnchor:"middle",fill:"#fdf2f8",fontSize:"10",children:"-10"}),e.jsx("path",{d:"M180,50 L200,50",fill:"none",stroke:"#8b5cf6",strokeWidth:"2",markerEnd:"url(#logArrow)"}),e.jsx("path",{d:"M330,50 L350,50",fill:"none",stroke:"#a78bfa",strokeWidth:"2",markerEnd:"url(#logArrow)"}),e.jsx("path",{d:"M480,50 L500,50",fill:"none",stroke:"#f0abfc",strokeWidth:"2",markerEnd:"url(#logArrow)"})]}),e.jsxs("rect",{x:"60",y:"120",width:"20",height:"10",rx:"2",fill:"#8b5cf6",opacity:"0.7",children:[e.jsx("animate",{attributeName:"x",from:"60",to:"700",dur:"4s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"4s",repeatCount:"indefinite"})]})]})}),e.jsx("div",{className:"grid md:grid-cols-4 gap-4 mt-6",children:[{field:"Timestamp",color:"violet",desc:"When event occurred"},{field:"IP Address",color:"orange",desc:"Source of request"},{field:"Status Code",color:"red",desc:"Success/Error indicator"},{field:"Response Size",color:"blue",desc:"Data transferred"}].map((s,r)=>e.jsxs("div",{className:`p-4 bg-${s.color}-900/20 rounded-lg border border-${s.color}-700/50`,children:[e.jsx("h4",{className:`font-bold text-${s.color}-300 mb-2`,children:s.field}),e.jsx("p",{className:"text-sm",children:s.desc})]},r))})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-green-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Basic Log Analysis Techniques"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-violet-300",children:"Essential grep + awk Patterns"}),e.jsx("span",{className:"px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-sm font-semibold",children:"Filter → Extract → Analyze"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Swadeep"})," needs to monitor his web server in Naihati and quickly identify issues before they affect customers:"]}),e.jsx(t,{fileModule:n,title:"Basic Log Analysis Commands",highlightLines:[4,5,6,7,8,9,10,11]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-300 mb-2",children:"Common Log Patterns:"}),e.jsx("div",{className:"space-y-3",children:[{pattern:"ERROR.*",desc:"Find error messages"},{pattern:"\\[error\\]",desc:"Apache error logs"},{pattern:"status [45][0-9]{2}",desc:"HTTP 4xx/5xx errors"},{pattern:"Failed.*password",desc:"Failed login attempts"}].map((s,r)=>e.jsxs("div",{className:"p-3 bg-gray-900/50 rounded",children:[e.jsx("code",{className:"text-sm text-violet-300",children:s.pattern}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]},r))})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-2",children:"Key awk Fields for Logs:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"$1"})," - IP address (Apache logs)"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"$9"})," - HTTP status code"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"$7"})," - Requested URL"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{children:[e.jsx("code",{children:"$4"})," - Timestamp (bracketed)"]})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"Error Analysis and Debugging"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-purple-300",children:"Systematic Error Investigation"}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg mb-6",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"The Debugging Mindset:"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Abhronila"})," at Barrackpore College needs to debug application failures systematically:"]}),e.jsxs("ol",{className:"text-xs text-gray-400 mt-2 space-y-1 pl-5",children:[e.jsx("li",{children:"1. Identify error patterns"}),e.jsx("li",{children:"2. Find most frequent errors"}),e.jsx("li",{children:"3. Trace error sources"}),e.jsx("li",{children:"4. Monitor error trends over time"})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Error Severity Levels:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"ERROR"}),e.jsx("span",{children:"Critical failures requiring immediate attention"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-yellow-500 font-bold",children:"WARN"}),e.jsx("span",{children:"Potential issues that need monitoring"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500 font-bold",children:"INFO"}),e.jsx("span",{children:"Normal operational messages"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-gray-500 font-bold",children:"DEBUG"}),e.jsx("span",{children:"Detailed information for troubleshooting"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{fileModule:a,title:"Error Analysis Techniques",highlightLines:[4,5,6,7,8,9,10]}),e.jsxs("div",{className:"mt-4 bg-purple-900/20 p-4 rounded-lg border border-purple-700/50",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-2",children:"Pro Tip:"}),e.jsxs("p",{className:"text-sm",children:["Use ",e.jsx("code",{children:"tail -f"})," to monitor logs in real-time:",e.jsx("code",{children:' tail -f error.log | grep --color=auto "ERROR"'})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Performance Analysis"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-300",children:"Identifying Performance Bottlenecks"}),e.jsx("span",{className:"px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold",children:"Response Times, Throughput, Errors"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Tuhina"})," needs to optimize her school's web server in Shyamnagar by analyzing performance metrics:"]}),e.jsx(t,{fileModule:o,title:"Performance Analysis Script",highlightLines:[]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-teal-300 mb-2",children:"Response Time"}),e.jsx("p",{className:"text-sm",children:"Time between request and response"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"awk '{print $(NF-1)}' | sort -n"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-amber-300 mb-2",children:"Throughput"}),e.jsx("p",{className:"text-sm",children:"Requests per minute/second"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"cut -d: -f2 | uniq -c"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold text-red-300 mb-2",children:"Error Rate"}),e.jsx("p",{className:"text-sm",children:"Percentage of failed requests"}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-900 p-2 rounded",children:"awk '$9 ~ /^[45]/' | wc -l"})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Performance Metrics to Track:"}),e.jsx("p",{className:"text-sm",children:"• 95th percentile response time • Error rate by endpoint • Slowest endpoints • Traffic patterns by hour/day • Geographic distribution of errors"})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-emerald-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),"Security Monitoring and Intrusion Detection"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl hover:bg-gray-900/80 transition-colors duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-300",children:"Detecting Suspicious Activity"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold",children:"Security Auditing"})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Debangshu"})," at Ichapur Systems needs to monitor for security breaches and suspicious patterns:"]}),e.jsx(t,{fileModule:i,title:"Security Analysis Script",highlightLines:[4,5,6,7,8,9,10,11]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Common Attack Patterns:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsxs("span",{children:["SQL injection attempts (",e.jsx("code",{children:"UNION SELECT"}),")"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsxs("span",{children:["Directory traversal (",e.jsx("code",{children:"../.."}),")"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsx("span",{children:"Brute force attacks (many 401/403 errors)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-400",children:"•"}),e.jsxs("span",{children:["XSS attempts (",e.jsx("code",{children:"<script>"}),")"]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Security Monitoring:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Failed authentication attempts"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Access to sensitive files"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Unusual request patterns"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-400",children:"•"}),e.jsx("span",{children:"Geographic anomalies"})]})]})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-red-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Log Analysis Pitfalls"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Ignoring Time Zones"}),e.jsx("p",{className:"text-sm mb-2",children:"Logs from different servers in different time zones"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:"[15/Jan/2024:10:30:45 +0000]  # UTC [15/Jan/2024:16:00:45 +0530] # IST"}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Solution:"}),e.jsx("code",{className:"text-xs",children:"Convert to UTC before analysis"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Missing Context"}),e.jsx("p",{className:"text-sm",children:"Analyzing errors without surrounding log entries"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:'grep -A5 -B5 "ERROR" logfile  # Get context!'})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Assuming Log Format"}),e.jsx("p",{className:"text-sm mb-2",children:"Different applications use different log formats"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded",children:'# Apache: 192.168.1.1 - - [date] "GET" 200 # Nginx: 192.168.1.1 - - [date] "GET" 200 # Custom: [date] INFO [module] message'}),e.jsxs("div",{className:"mt-2 p-2 bg-gray-800 rounded",children:[e.jsx("p",{className:"text-xs text-green-300",children:"Always:"}),e.jsx("code",{className:"text-xs",children:"head -20 logfile | cat -A"})]})]}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700/50 p-4 rounded-xl hover:border-red-500 transition-colors duration-300",children:[e.jsx("h4",{className:"font-bold text-red-300 mb-2",children:"Not Rotating Logs"}),e.jsx("p",{className:"text-sm",children:"Running out of disk space from unchecked log growth"}),e.jsx("code",{className:"text-xs block bg-gray-900 p-2 rounded mt-2",children:"du -sh /var/log/*  # Monitor log sizes find /var/log -size +1G  # Find large logs"})]})]})]})]}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Professional Production Pipeline"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-violet-300",children:"Enterprise Log Analysis"}),e.jsx(t,{fileModule:l,title:"Production Log Analysis Pipeline",highlightLines:[4,5,6,7,8,9,10,11,12,13]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-2",children:"Best Practices:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Use log rotation to manage file sizes"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Standardize log formats across applications"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Include correlation IDs for tracing requests"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-green-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{children:"Monitor log analysis performance itself"})]})]})]}),e.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Advanced Techniques:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"parallel"})," for multi-file analysis"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsx("span",{children:"Create daily/weekly automated reports"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsx("span",{children:"Set up real-time alerts for critical errors"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300",children:"⚡"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"logwatch"})," or ",e.jsx("code",{children:"logcheck"})," for automated monitoring"]})]})]})]})]})]})]}),e.jsx("section",{className:`bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30 border border-violet-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-violet-900/30\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-violet-300",children:"Teacher's Note"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("strong",{className:"text-fuchsia-300",children:"Remember:"})," Log analysis is",e.jsx("span",{className:"text-yellow-300",children:" detective work"}),". You're looking for patterns, anomalies, and stories in the data. Start with the",e.jsx("span",{className:"text-teal-300",children:` "5 W's"`}),":"]}),e.jsxs("div",{className:"bg-black/30 p-4 rounded-lg border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-2",children:"The 5 W's of Log Analysis:"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-violet-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-violet-300",children:"W"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"WHAT happened?"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Error message, status code"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-fuchsia-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-fuchsia-300",children:"W"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"WHEN did it happen?"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Timestamp, frequency"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-purple-300",children:"W"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"WHERE did it happen?"}),e.jsx("p",{className:"text-sm text-gray-400",children:"IP address, endpoint"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-pink-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-pink-300",children:"W"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"WHO was involved?"}),e.jsx("p",{className:"text-sm text-gray-400",children:"User, service, process"})]})]}),e.jsxs("div",{className:"flex items-start gap-2 col-span-2",children:[e.jsx("div",{className:"w-6 h-6 bg-rose-900/50 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-rose-300",children:"W"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"WHY did it happen?"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Root cause analysis"})]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-gray-400",children:"27 years experience in System Administration"}),e.jsx("p",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in | 7003756860"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Skills: Log Analysis, Security Monitoring, Performance Tuning"})})]})]})]})]})}),e.jsxs("section",{className:`bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Log Analysis Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-violet-300",children:"Basic Commands"}),e.jsx("div",{className:"space-y-3",children:["grep -i error logfile - Find errors (case-insensitive)","awk '{print $9}' - Extract HTTP status codes","tail -f logfile - Real-time monitoring","grep -c pattern - Count occurrences","awk '$9 ~ /^[45]/' - Find 4xx/5xx errors","sort | uniq -c - Count unique occurrences","cut -d' ' -f1 - Extract first field (IP)","grep -A5 -B5 pattern - Get context around matches"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-violet-900/50 rounded-full flex items-center justify-center group-hover:bg-violet-700 transition-colors duration-300",children:e.jsx("span",{className:"text-violet-300",children:r+1})}),e.jsx("code",{className:"text-sm",children:s})]},r))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-fuchsia-300",children:"Analysis Tasks"}),e.jsx("div",{className:"space-y-3",children:["Find most frequent errors","Identify top IP addresses","Calculate error rates over time","Monitor response times","Detect security threats","Track resource usage patterns","Create daily summary reports","Set up automated alerts"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-colors duration-300 group",children:[e.jsx("div",{className:"w-6 h-6 bg-fuchsia-900/50 rounded-full flex items-center justify-center group-hover:bg-fuchsia-700 transition-colors duration-300",children:e.jsx("span",{className:"text-fuchsia-300",children:r+1})}),e.jsx("span",{children:s})]},r))})]})]})]}),e.jsxs("section",{className:`bg-gradient-to-br from-fuchsia-900/20 to-violet-900/20 border border-fuchsia-700/50 rounded-2xl p-8\r
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-900/20\r
                    motion-safe:animate-[slideUp_0.6s_ease-out]`,style:{animationDelay:"1s"},children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-fuchsia-300 flex items-center gap-3",children:[e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:`"If Swadeep's web server suddenly shows a spike in 500 errors, what would be your step-by-step investigation process using grep and awk?"`})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"How would you differentiate between a DDoS attack and normal traffic surge by analyzing access logs?"'})}),e.jsx("div",{className:"p-4 bg-black/30 rounded-lg",children:e.jsx("p",{className:"italic text-lg",children:'"What patterns would you look for to detect a compromised user account from authentication logs?"'})})]}),e.jsx("div",{className:"mt-6 p-4 bg-violet-900/20 border border-violet-700/50 rounded-lg",children:e.jsxs("p",{className:"text-violet-200",children:[e.jsx("strong",{children:"Hint:"})," Start with broad patterns, then narrow down. First check error rates over time, then isolate specific time periods, then examine individual requests. Use ",e.jsx("code",{children:"grep -v"})," to exclude known-good traffic and focus on anomalies."]})})]})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800",children:e.jsxs("div",{className:"text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Topic 18: Log File Analysis Using grep and awk"}),e.jsx("p",{className:"mt-2",children:"Next Topic: Data Cleanup and Normalization Using sed"})]})})]});export{m as default};

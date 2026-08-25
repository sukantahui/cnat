import{b as c,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{T as d}from"./TeacherSukantaHui-ObIX4NbR.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CbUXUJ65.js";const A=[{question:"What is the mathematical formula for calculating the InnoDB Buffer Pool Hit Ratio, and what is the target production SLA?",shortAnswer:"$\\text{Hit Ratio} = \\left(1 - \\frac{\\text{Innodb\\_buffer\\_pool\\_reads}}{\\text{Innodb\\_buffer\\_pool\\_read\\_requests}}\\right) \\times 100\\%$. The target production SLA is **>99.0%** (gold standard: **>99.9%**).",explanation:"If the hit ratio falls below 95%, it indicates that more than 5% of all read requests are causing physical disk I/O, resulting in severe query latency degradation.",hint:"(1 - (reads / read_requests)) * 100, target >99.0%.",level:"basic",codeExample:`SELECT 
  ROUND((1 - (r.VARIABLE_VALUE / req.VARIABLE_VALUE)) * 100, 4) AS buffer_pool_hit_ratio_pct
FROM performance_schema.global_status r
JOIN performance_schema.global_status req 
  ON req.VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'
WHERE r.VARIABLE_NAME = 'Innodb_buffer_pool_reads';`},{question:"What is the formula for calculating Connection Pool Saturation percentage in MySQL?",shortAnswer:"$\\text{Saturation} = \\left(\\frac{\\text{Threads\\_connected}}{\\text{max\\_connections}}\\right) \\times 100\\%$.",explanation:"Standard enterprise alerting triggers a Warning alert at 80% saturation and a Critical PagerDuty alert at 90% saturation to prevent `ERROR 1040: Too many connections`.",hint:"(Threads_connected / max_connections) * 100.",level:"basic",codeExample:`SELECT 
  c.VARIABLE_VALUE AS connected,
  m.VARIABLE_VALUE AS max_allowed,
  ROUND((c.VARIABLE_VALUE / m.VARIABLE_VALUE) * 100, 2) AS connection_saturation_pct
FROM performance_schema.global_status c
JOIN performance_schema.global_variables m ON m.VARIABLE_NAME = 'max_connections'
WHERE c.VARIABLE_NAME = 'Threads_connected';`},{question:"Why was the legacy MySQL Query Cache completely removed in MySQL 8.0?",shortAnswer:"Because the Query Cache used a single global mutex lock across the entire server; every single table modification (`INSERT`/`UPDATE`/`DELETE`) invalidated all cached entries for that table, causing severe thread lock contention and throughput degradation on multicore servers.",explanation:"Modern MySQL 8.0 relies on InnoDB buffer pool caching and external application caching (Redis/Memcached) which scale horizontally.",hint:"Global mutex lock caused severe concurrency bottlenecks on multicore servers.",level:"intermediate",codeExample:"-- Query Cache is fully removed in MySQL 8.0; query_cache_type and query_cache_size are obsolete."},{question:"How do you calculate real-time Queries Per Second (QPS) over an exact 10-second monitoring interval?",shortAnswer:"$\\text{QPS} = \\frac{\\text{Questions}(t_2) - \\text{Questions}(t_1)}{t_2 - t_1}$.",explanation:"Subtracting initial client questions from final client questions and dividing by elapsed seconds produces the true current workload throughput.",hint:"(Questions_t2 - Questions_t1) / (t2 - t1).",level:"basic",codeExample:`# Sample: Questions at t=0s is 50,000; Questions at t=10s is 85,000:
# QPS = (85,000 - 50,000) / 10 = 3,500 QPS.`},{question:"In Mamata & Susmita's Barrackpore retail store, POS checkout slowed during evening rush. How did Mamata calculate the Buffer Pool Hit Ratio live to prove memory was starved?",shortAnswer:"She queried `performance_schema.global_status` and calculated a Hit Ratio of **88.4%** (`Innodb_buffer_pool_reads` = 580,000 vs `read_requests` = 5,000,000), proving that 11.6% of all page requests were hitting physical disk.",explanation:"Increasing `innodb_buffer_pool_size` from 2GB to 8GB restored the Hit Ratio to 99.9%, restoring sub-millisecond checkout speeds across ₹1.2 Crores in retail inventory.",hint:"Calculated 88.4% hit ratio, proving 11.6% of queries hit physical disk.",level:"moderate",codeExample:`# Barrackpore Hit Ratio Calculation:
# (1 - (580,000 / 5,000,000)) * 100 = 88.4% (Severely Starved!)`},{question:"In Abhronila & Debangshu's Kolkata fintech bank, how did Debangshu calculate Transactions Per Second (TPS) across ₹500 Crores in banking ledgers?",shortAnswer:"He measured the delta of `Com_commit` and `Com_rollback` over 60 seconds: $\\text{TPS} = \\frac{(\\Delta \\text{Com\\_commit} + \\Delta \\text{Com\\_rollback})}{60}$, measuring 4,200 write transactions per second.",explanation:"TPS measures write transaction throughput, distinguishing transactional changes from read-only `SELECT` queries.",hint:"(Delta Com_commit + Delta Com_rollback) / elapsed seconds.",level:"expert",codeExample:`SELECT 
  SUM(VARIABLE_VALUE) AS total_commits_and_rollbacks 
FROM performance_schema.global_status 
WHERE VARIABLE_NAME IN ('Com_commit', 'Com_rollback');`},{question:"What is the formula for the Index Utilization Efficiency Ratio in MySQL?",shortAnswer:"$\\text{Index Efficiency} = \\left(\\frac{\\text{Handler\\_read\\_key}}{\\text{Handler\\_read\\_key} + \\text{Handler\\_read\\_rnd\\_next}}\\right) \\times 100\\%$.",explanation:"A healthy OLTP system should achieve **>95.0%**. A ratio below 90% indicates excessive sequential table scanning.",hint:"(Handler_read_key / (Handler_read_key + Handler_read_rnd_next)) * 100.",level:"intermediate",codeExample:`SELECT 
  k.VARIABLE_VALUE AS indexed_reads,
  s.VARIABLE_VALUE AS scan_reads,
  ROUND((k.VARIABLE_VALUE / (k.VARIABLE_VALUE + s.VARIABLE_VALUE)) * 100, 2) AS index_efficiency_pct
FROM performance_schema.global_status k
JOIN performance_schema.global_status s ON s.VARIABLE_NAME = 'Handler_read_rnd_next'
WHERE k.VARIABLE_NAME = 'Handler_read_key';`},{question:"What is the Temporary Disk Table Spill Ratio formula, and what is its target SLA?",shortAnswer:"$\\text{Disk Spill Ratio} = \\left(\\frac{\\text{Created\\_tmp\\_disk\\_tables}}{\\text{Created\\_tmp\\_tables}}\\right) \\times 100\\%$. The target SLA is **<10.0%** (ideally <5%).",explanation:"A ratio higher than 15% indicates that complex `GROUP BY`, `DISTINCT`, or unindexed joins are spilling from RAM to disk storage.",hint:"(Created_tmp_disk_tables / Created_tmp_tables) * 100, target <10%.",level:"intermediate",codeExample:`SELECT 
  d.VARIABLE_VALUE AS disk_tmp_tables,
  t.VARIABLE_VALUE AS total_tmp_tables,
  ROUND((d.VARIABLE_VALUE / (t.VARIABLE_VALUE + 0.001)) * 100, 2) AS disk_tmp_spill_pct
FROM performance_schema.global_status d
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Created_tmp_tables'
WHERE d.VARIABLE_NAME = 'Created_tmp_disk_tables';`},{question:"How do you calculate the InnoDB Redo Log generation rate in Megabytes per second (MB/s)?",shortAnswer:"$\\text{Redo Rate (MB/s)} = \\frac{\\text{Innodb\\_os\\_log\\_written}(t_2) - \\text{Innodb\\_os\\_log\\_written}(t_1)}{1024 \\times 1024 \\times (t_2 - t_1)}$.",explanation:"Used to properly size `innodb_redo_log_capacity` in MySQL 8.0 so that checkpoints occur every 15-30 minutes without flushing stalls.",hint:"Delta of Innodb_os_log_written in bytes / (1024 * 1024 * delta_time).",level:"expert",codeExample:"-- Used to size innodb_redo_log_capacity in MySQL 8.0.30+"},{question:"What does the Read-to-Write Ratio formula measure in MySQL?",shortAnswer:"$\\text{Read Pct} = \\left(\\frac{\\text{Com\\_select}}{\\text{Com\\_select} + \\text{Com\\_insert} + \\text{Com\\_update} + \\text{Com\\_delete}}\\right) \\times 100\\%$.",explanation:"Standard web applications typically exhibit 80% to 95% Reads and 5% to 20% Writes, dictating read-replica scaling architecture.",hint:"Com_select / (Com_select + Com_insert + Com_update + Com_delete) * 100.",level:"basic",codeExample:`SELECT 
  s.VARIABLE_VALUE AS selects,
  (i.VARIABLE_VALUE + u.VARIABLE_VALUE + d.VARIABLE_VALUE) AS writes,
  ROUND((s.VARIABLE_VALUE / (s.VARIABLE_VALUE + i.VARIABLE_VALUE + u.VARIABLE_VALUE + d.VARIABLE_VALUE)) * 100, 2) AS read_pct
FROM performance_schema.global_status s
JOIN performance_schema.global_status i ON i.VARIABLE_NAME = 'Com_insert'
JOIN performance_schema.global_status u ON u.VARIABLE_NAME = 'Com_update'
JOIN performance_schema.global_status d ON d.VARIABLE_NAME = 'Com_delete'
WHERE s.VARIABLE_NAME = 'Com_select';`},{question:"What is the formula for Table Open Cache Hit Ratio in MySQL?",shortAnswer:"$\\text{Table Cache Hit Ratio} = \\left(1 - \\frac{\\text{Opened\\_tables}}{\\text{Open\\_tables} + \\text{Opened\\_tables}}\\right) \\times 100\\%$.",explanation:"A hit ratio below 85% indicates `table_open_cache` is too small, forcing MySQL to repeatedly open and close `.ibd` files on disk.",hint:"(1 - (Opened_tables / (Open_tables + Opened_tables))) * 100.",level:"intermediate",codeExample:`SELECT 
  o.VARIABLE_VALUE AS open_tables,
  od.VARIABLE_VALUE AS opened_tables,
  ROUND((1 - (od.VARIABLE_VALUE / (o.VARIABLE_VALUE + od.VARIABLE_VALUE))) * 100, 2) AS table_cache_hit_pct
FROM performance_schema.global_status o
JOIN performance_schema.global_status od ON od.VARIABLE_NAME = 'Opened_tables'
WHERE o.VARIABLE_NAME = 'Open_tables';`},{question:"How do you calculate the Thread Cache Hit Ratio in MySQL?",shortAnswer:"$\\text{Thread Cache Hit Ratio} = \\left(1 - \\frac{\\text{Threads\\_created}}{\\text{Connections}}\\right) \\times 100\\%$.",explanation:"Target SLA is **>99.0%**. If thread hit ratio is low, increasing `thread_cache_size` avoids expensive OS thread creation overhead on new connections.",hint:"(1 - (Threads_created / Connections)) * 100, target >99%.",level:"intermediate",codeExample:`SELECT 
  tc.VARIABLE_VALUE AS threads_created,
  c.VARIABLE_VALUE AS total_connections,
  ROUND((1 - (tc.VARIABLE_VALUE / c.VARIABLE_VALUE)) * 100, 3) AS thread_cache_hit_ratio_pct
FROM performance_schema.global_status tc
JOIN performance_schema.global_status c ON c.VARIABLE_NAME = 'Connections'
WHERE tc.VARIABLE_NAME = 'Threads_created';`},{question:"What does an Index Efficiency Ratio of 65% indicate on a production MySQL database?",shortAnswer:"It indicates that 35% of all row access operations are performing sequential full table scans, pointing to missing composite indexes on high-frequency queries.",explanation:"Immediate action: inspect `sys.statements_with_full_table_scans` and create indexes matching `WHERE` clauses.",hint:"Indicates 35% of row reads are full scans; requires immediate indexing.",level:"basic",codeExample:"-- Action: Review sys.statements_with_full_table_scans"},{question:"What is the formula for calculating InnoDB Buffer Pool Fill Percentage?",shortAnswer:"$\\text{Fill Pct} = \\left(\\frac{\\text{Innodb\\_buffer\\_pool\\_pages\\_data}}{\\text{Innodb\\_buffer\\_pool\\_pages\\_total}}\\right) \\times 100\\%$.",explanation:"Indicates how much of the allocated buffer pool RAM is actively populated with database data.",hint:"(pages_data / pages_total) * 100.",level:"basic",codeExample:`SELECT 
  d.VARIABLE_VALUE AS pages_data,
  t.VARIABLE_VALUE AS pages_total,
  ROUND((d.VARIABLE_VALUE / t.VARIABLE_VALUE) * 100, 2) AS buffer_pool_fill_pct
FROM performance_schema.global_status d
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Innodb_buffer_pool_pages_total'
WHERE d.VARIABLE_NAME = 'Innodb_buffer_pool_pages_data';`},{question:"What is the formula for calculating the Average Query Latency across all client queries since server boot?",shortAnswer:"Divide the sum of statement timer waits from `performance_schema.events_statements_summary_global_by_event_name` by `Questions`.",explanation:"Measures overall server average query execution time.",hint:"Sum of timer waits divided by total statement count.",level:"expert",codeExample:`SELECT 
  ROUND(SUM(SUM_TIMER_WAIT) / SUM(COUNT_STAR) / 1000000000, 3) AS avg_query_latency_ms 
FROM performance_schema.events_statements_summary_global_by_event_name;`},{question:"How do you calculate the Aborted Connection Ratio in MySQL?",shortAnswer:"$\\text{Aborted Ratio} = \\left(\\frac{\\text{Aborted\\_connects}}{\\text{Connections}}\\right) \\times 100\\%$.",explanation:"A ratio >1% signals network packet loss, firewall drops, or authentication brute-force attempts.",hint:"(Aborted_connects / Connections) * 100.",level:"basic",codeExample:`SELECT 
  a.VARIABLE_VALUE AS aborted,
  c.VARIABLE_VALUE AS total,
  ROUND((a.VARIABLE_VALUE / c.VARIABLE_VALUE) * 100, 3) AS aborted_connect_pct
FROM performance_schema.global_status a
JOIN performance_schema.global_status c ON c.VARIABLE_NAME = 'Connections'
WHERE a.VARIABLE_NAME = 'Aborted_connects';`},{question:"What is the formula for calculating InnoDB Row Lock Contention Percentage?",shortAnswer:"$\\text{Lock Wait Pct} = \\left(\\frac{\\text{Innodb\\_row\\_lock\\_waits}}{\\text{Innodb\\_rows\\_inserted} + \\text{Innodb\\_rows\\_updated} + \\text{Innodb\\_rows\\_deleted}}\\right) \\times 100\\%$.",explanation:"Measures the probability that a write transaction encounters a row-level lock conflict.",hint:"Innodb_row_lock_waits / total write row mutations * 100.",level:"expert",codeExample:`SELECT 
  w.VARIABLE_VALUE AS lock_waits,
  (i.VARIABLE_VALUE + u.VARIABLE_VALUE + d.VARIABLE_VALUE) AS total_writes,
  ROUND((w.VARIABLE_VALUE / (i.VARIABLE_VALUE + u.VARIABLE_VALUE + d.VARIABLE_VALUE)) * 100, 4) AS lock_wait_pct
FROM performance_schema.global_status w
JOIN performance_schema.global_status i ON i.VARIABLE_NAME = 'Innodb_rows_inserted'
JOIN performance_schema.global_status u ON u.VARIABLE_NAME = 'Innodb_rows_updated'
JOIN performance_schema.global_status d ON d.VARIABLE_NAME = 'Innodb_rows_deleted'
WHERE w.VARIABLE_NAME = 'Innodb_row_lock_waits';`},{question:"How do you calculate the Slow Query Ratio across all executed queries?",shortAnswer:"$\\text{Slow Query Pct} = \\left(\\frac{\\text{Slow\\_queries}}{\\text{Questions}}\\right) \\times 100\\%$.",explanation:"Target SLA is **<0.1%** (less than 1 slow query per 1,000 queries).",hint:"(Slow_queries / Questions) * 100, target <0.1%.",level:"basic",codeExample:`SELECT 
  s.VARIABLE_VALUE AS slow_queries,
  q.VARIABLE_VALUE AS total_questions,
  ROUND((s.VARIABLE_VALUE / q.VARIABLE_VALUE) * 100, 4) AS slow_query_pct
FROM performance_schema.global_status s
JOIN performance_schema.global_status q ON q.VARIABLE_NAME = 'Questions'
WHERE s.VARIABLE_NAME = 'Slow_queries';`},{question:"What is the formula for calculating In-Memory Sort Efficiency Ratio?",shortAnswer:"$\\text{Sort Efficiency} = \\left(1 - \\frac{\\text{Sort\\_merge\\_passes}}{\\text{Sort\\_rows} + 0.001}\\right) \\times 100\\%$.",explanation:"If `Sort_merge_passes` is >0, sorting result sets are spilling from RAM to disk. Target SLA is **100%** (zero merge passes).",hint:"Zero sort merge passes represents 100% in-memory sorting.",level:"intermediate",codeExample:`SELECT 
  VARIABLE_NAME, VARIABLE_VALUE 
FROM performance_schema.global_status 
WHERE VARIABLE_NAME IN ('Sort_merge_passes', 'Sort_rows', 'Sort_scan');`},{question:"How do you calculate the Network Egress Bandwidth rate in Megabits per second (Mbps)?",shortAnswer:"$\\text{Egress (Mbps)} = \\frac{(\\text{Bytes\\_sent}(t_2) - \\text{Bytes\\_sent}(t_1)) \\times 8}{1024 \\times 1024 \\times (t_2 - t_1)}$.",explanation:"Multiplies bytes by 8 to convert to bits, then divides by $1024^2$ and elapsed seconds to measure network interface card (NIC) utilization.",hint:"(Delta Bytes_sent * 8) / (1024 * 1024 * delta_seconds).",level:"intermediate",codeExample:"-- Monitors network interface bandwidth saturation."},{question:"What is the formula for calculating the Percentage of Transactions Rolled Back?",shortAnswer:"$\\text{Rollback Pct} = \\left(\\frac{\\text{Com\\_rollback}}{\\text{Com\\_commit} + \\text{Com\\_rollback}}\\right) \\times 100\\%$.",explanation:"A high rollback percentage (>5%) indicates application validation errors, deadlock retries, or lock timeout failures.",hint:"Com_rollback / (Com_commit + Com_rollback) * 100.",level:"basic",codeExample:`SELECT 
  r.VARIABLE_VALUE AS rollbacks,
  c.VARIABLE_VALUE AS commits,
  ROUND((r.VARIABLE_VALUE / (r.VARIABLE_VALUE + c.VARIABLE_VALUE)) * 100, 2) AS rollback_pct
FROM performance_schema.global_status r
JOIN performance_schema.global_status c ON c.VARIABLE_NAME = 'Com_commit'
WHERE r.VARIABLE_NAME = 'Com_rollback';`},{question:"What does a Connection Saturation of 85% indicate during peak ecommerce hours?",shortAnswer:"The database is approaching maximum connection capacity with only 15% connection headroom remaining; any unexpected microservice scaling burst will cause `ERROR 1040: Too many connections`.",explanation:"Immediate action: scale connection pool sizing or reduce application idle connection lifetimes (`wait_timeout`).",hint:"Indicates near-exhaustion of connection capacity requiring immediate pool tuning.",level:"basic",codeExample:"-- Action: Increase max_connections or tune connection pooling."},{question:"What is the formula for calculating InnoDB Checkpoint Age Lag in Megabytes?",shortAnswer:"Subtract `Last Checkpoint LSN` from `Log Sequence Number` (LSN) and divide by $1024^2$: $\\text{Checkpoint Lag (MB)} = \\frac{\\text{Log Sequence Number} - \\text{Last Checkpoint LSN}}{1024 \\times 1024}$.",explanation:"Measures the volume of uncheckpointed redo log data that must be scanned during crash recovery.",hint:"(Log Sequence Number - Last Checkpoint LSN) / (1024 * 1024).",level:"expert",codeExample:"SHOW ENGINE INNODB STATUS\\G -- Check LOG section for LSN vs Checkpoint"},{question:"How do you calculate the ratio of Temporary Table Creation in Memory vs Disk?",shortAnswer:"$\\text{Memory Tmp Ratio} = \\left(1 - \\frac{\\text{Created\\_tmp\\_disk\\_tables}}{\\text{Created\\_tmp\\_tables}}\\right) \\times 100\\%$.",explanation:"Target SLA is **>90.0%** in memory.",hint:"(1 - (disk_tmp / total_tmp)) * 100, target >90%.",level:"intermediate",codeExample:`SELECT 
  d.VARIABLE_VALUE AS disk_tmp,
  t.VARIABLE_VALUE AS total_tmp,
  ROUND((1 - (d.VARIABLE_VALUE / (t.VARIABLE_VALUE + 0.001))) * 100, 2) AS memory_tmp_ratio_pct
FROM performance_schema.global_status d
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Created_tmp_tables'
WHERE d.VARIABLE_NAME = 'Created_tmp_disk_tables';`},{question:"What is the formula for calculating Average Rows Examined per Query across the server?",shortAnswer:"$\\text{Avg Rows Examined} = \\frac{\\text{Innodb\\_rows\\_read}}{\\text{Questions}}$.",explanation:"A high average (>1,000 rows examined per query) indicates the overall workload is scan-heavy rather than point-lookup-driven.",hint:"Innodb_rows_read / Questions.",level:"basic",codeExample:`SELECT 
  r.VARIABLE_VALUE AS rows_read,
  q.VARIABLE_VALUE AS questions,
  ROUND(r.VARIABLE_VALUE / q.VARIABLE_VALUE, 2) AS avg_rows_examined_per_query
FROM performance_schema.global_status r
JOIN performance_schema.global_status q ON q.VARIABLE_NAME = 'Questions'
WHERE r.VARIABLE_NAME = 'Innodb_rows_read';`},{question:"What does an InnoDB Buffer Pool Hit Ratio of 99.98% signify?",shortAnswer:"It signifies that 9,998 out of every 10,000 16KB data page requests are served directly from RAM cache with microsecond access times, with only 2 requests requiring physical disk I/O.",explanation:"Represents optimal memory cache sizing and excellent query indexing.",hint:"99.98% of requests served from RAM; optimal performance.",level:"basic",codeExample:"-- Excellent health: 99.98% in-memory cache hit rate."},{question:"How do you calculate the Rate of Binlog Disk Flushes per Second in MySQL?",shortAnswer:"$\\text{Binlog Flush Rate} = \\frac{\\text{Binlog\\_cache\\_disk\\_use}(t_2) - \\text{Binlog\\_cache\\_disk\\_use}(t_1)}{t_2 - t_1}$.",explanation:"Non-zero rates indicate large transactions are spilling from `binlog_cache_size` to temporary disk files.",hint:"Delta of Binlog_cache_disk_use / delta_time.",level:"expert",codeExample:"SHOW GLOBAL STATUS LIKE 'Binlog_cache_disk_use';"},{question:"How do you calculate the ratio of Com_select vs Com_insert/update/delete to verify read scalability?",shortAnswer:"Calculate read percentage: if read percentage is >90%, adding read replicas will offload 90% of database query demand from the primary master.",explanation:"Confirms whether the database workload is suited for horizontal read scaling.",hint:"Read percentage >90% confirms read-replica scaling suitability.",level:"basic",codeExample:"-- High read ratio indicates read-replica scale-out readiness."},{question:"What is the primary danger of using lifetime average QPS ($	ext{Questions} / 	ext{Uptime}$) for capacity planning?",shortAnswer:"Lifetime average QPS smooths out peak traffic bursts over weeks or months, completely concealing 10x traffic surges during flash sales or morning logon rushes.",explanation:"Always measure interval QPS (5-second or 1-minute delta rates) for accurate peak capacity provisioning.",hint:"Lifetime averages hide peak traffic spikes; use interval delta rates.",level:"basic",codeExample:"-- Always calculate delta QPS over 10-second intervals."},{question:"What is the primary operational takeaway of Topic 11 in Module 004_005?",shortAnswer:"Derived health indicators provide actionable intelligence for database capacity management: maintain **Buffer Pool Hit Ratio >99.0%** to avoid disk thrashing, keep **Connection Saturation <80%** to prevent connection rejections, calculate **Interval QPS & TPS** to size infrastructure for peak traffic surges, enforce **Index Efficiency >95%**, and maintain **Temporary Disk Table Spill Ratio <10%**.",explanation:"Translating raw telemetry counters into mathematical ratios empowers database engineers to enforce SLAs, prevent outages, and maintain high-performance sub-millisecond database execution.",hint:"Summarize the 5 core formulas: Hit Ratio >99%, Connection Saturation <80%, Interval QPS/TPS, Index Efficiency >95%, and Disk Spill <10%.",level:"basic",codeExample:`-- Master Health Scorecard Query:
SELECT 
  ROUND((1 - (r.VARIABLE_VALUE / req.VARIABLE_VALUE)) * 100, 3) AS buffer_pool_hit_pct,
  ROUND((c.VARIABLE_VALUE / m.VARIABLE_VALUE) * 100, 2) AS connection_saturation_pct,
  ROUND((k.VARIABLE_VALUE / (k.VARIABLE_VALUE + s.VARIABLE_VALUE)) * 100, 2) AS index_efficiency_pct,
  ROUND((d.VARIABLE_VALUE / (t.VARIABLE_VALUE + 0.001)) * 100, 2) AS tmp_disk_spill_pct
FROM performance_schema.global_status r
JOIN performance_schema.global_status req ON req.VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'
JOIN performance_schema.global_status c ON c.VARIABLE_NAME = 'Threads_connected'
JOIN performance_schema.global_variables m ON m.VARIABLE_NAME = 'max_connections'
JOIN performance_schema.global_status k ON k.VARIABLE_NAME = 'Handler_read_key'
JOIN performance_schema.global_status s ON s.VARIABLE_NAME = 'Handler_read_rnd_next'
JOIN performance_schema.global_status d ON d.VARIABLE_NAME = 'Created_tmp_disk_tables'
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Created_tmp_tables'
WHERE r.VARIABLE_NAME = 'Innodb_buffer_pool_reads';`}],p=`================================================================================
MYSQL 8.0 SERVER LOGS, MONITORING & PERFORMANCE SCHEMA
TOPIC 11: Calculating Critical Health Indicators – Formulas, Ratios & SLAs
================================================================================

1. THE FIVE MISSION-CRITICAL DERIVED HEALTH FORMULAS
--------------------------------------------------------------------------------
Database administrators must calculate derived ratios to evaluate server capacity,
memory adequacy, and query health:

1. InnoDB Buffer Pool Hit Ratio:
   Formula: (1 - (Innodb_buffer_pool_reads / Innodb_buffer_pool_read_requests)) * 100%
   - Target: >99.0% (Gold Standard: >99.9%)
   - Action if <95%: Increase innodb_buffer_pool_size or optimize table scans.

2. Connection Pool Saturation Percentage:
   Formula: (Threads_connected / max_connections) * 100%
   - Target: <80%
   - Action if >80%: Scale application connection pooling, adjust wait_timeout.

3. Real-Time Queries Per Second (QPS):
   Formula: (Questions_t2 - Questions_t1) / (t2 - t1)
   - Baseline for application traffic demand and capacity planning.

4. Transactions Per Second (TPS):
   Formula: ((Com_commit_t2 + Com_rollback_t2) - (Com_commit_t1 + Com_rollback_t1)) / (t2 - t1)
   - Measures transactional write throughput across all client sessions.

5. Index Utilization Efficiency Ratio:
   Formula: (Handler_read_key / (Handler_read_key + Handler_read_rnd_next)) * 100%
   - Target: >95.0%
   - Action if <90%: Add composite indexes on frequent WHERE predicates.

6. Temporary Disk Table Spill Ratio:
   Formula: (Created_tmp_disk_tables / Created_tmp_tables) * 100%
   - Target: <10.0%
   - Action if >25%: Increase tmp_table_size / max_heap_table_size.

2. QUERY CACHE REMOVAL IN MYSQL 8.0
--------------------------------------------------------------------------------
- The legacy Query Cache was completely removed in MySQL 8.0 due to severe global
  mutex locking contention on multicore CPUs.
- Modern Architecture: Replaced by InnoDB buffer pool efficiency, server-side
  thread caching, and application-level Redis / Memcached caching.

3. ALL-IN-ONE SQL HEALTH DERIVATION QUERY
--------------------------------------------------------------------------------
SELECT 
  'Health Scorecard' AS category,
  ROUND((1 - (r.VARIABLE_VALUE / req.VARIABLE_VALUE)) * 100, 3) AS buffer_pool_hit_pct,
  ROUND((c.VARIABLE_VALUE / m.VARIABLE_VALUE) * 100, 2) AS connection_saturation_pct,
  ROUND((d.VARIABLE_VALUE / (t.VARIABLE_VALUE + 0.001)) * 100, 2) AS tmp_disk_spill_pct
FROM performance_schema.global_status r
JOIN performance_schema.global_status req ON req.VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'
JOIN performance_schema.global_status c ON c.VARIABLE_NAME = 'Threads_connected'
JOIN performance_schema.global_variables m ON m.VARIABLE_NAME = 'max_connections'
JOIN performance_schema.global_status d ON d.VARIABLE_NAME = 'Created_tmp_disk_tables'
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Created_tmp_tables'
WHERE r.VARIABLE_NAME = 'Innodb_buffer_pool_reads';

4. PRODUCTION BEST PRACTICES
--------------------------------------------------------------------------------
1. Maintain Buffer Pool Hit Ratio >99.0% on OLTP instances.
2. Alert on Connection Saturation crossing 80% threshold.
3. Keep Temporary Disk Spill Ratio under 10%.
4. Ensure Index Utilization Ratio remains above 95%.
================================================================================
`,f=()=>{const[r,i]=c.useState("formula1_hit_ratio"),s={formula1_hit_ratio:{formulaName:"1. Buffer Pool Hit Ratio",title:"1. InnoDB Buffer Pool Hit Ratio (>99.0% SLA)",badge:"Memory Caching SLA",badgeColor:"emerald",sqlSnippet:`-- 🧠 INNODB BUFFER POOL HIT RATIO FORMULA:
-- Formula: (1 - (Innodb_buffer_pool_reads / Innodb_buffer_pool_read_requests)) * 100%

SELECT 
  req.VARIABLE_VALUE AS logical_read_requests,
  r.VARIABLE_VALUE AS physical_disk_reads,
  ROUND((1 - (r.VARIABLE_VALUE / req.VARIABLE_VALUE)) * 100, 4) AS buffer_pool_hit_ratio_pct
FROM performance_schema.global_status r
JOIN performance_schema.global_status req 
  ON req.VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'
WHERE r.VARIABLE_NAME = 'Innodb_buffer_pool_reads';

-- 🎯 SLA Targets:
-- > 99.0% : Healthy Production OLTP
-- < 95.0% : Memory Starvation / Table Scan Disk Thrashing!`,explanation:"The Buffer Pool Hit Ratio measures the percentage of 16KB data page requests satisfied directly from system RAM. In healthy OLTP production systems, this ratio must remain strictly above 99.0%.",keyTakeaways:["Compares logical RAM requests against physical disk reads.","Target SLA is >99.0% (Gold standard: >99.9%).","A ratio <95% indicates disk thrashing and memory starvation."]},formula2_connection_saturation:{formulaName:"2. Connection Saturation",title:"2. Connection Pool Saturation Percentage (<80% SLA)",badge:"Capacity Sizing",badgeColor:"cyan",sqlSnippet:`-- 🔌 CONNECTION POOL SATURATION FORMULA:
-- Formula: (Threads_connected / max_connections) * 100%

SELECT 
  c.VARIABLE_VALUE AS active_connected_threads,
  m.VARIABLE_VALUE AS max_allowed_connections,
  ROUND((c.VARIABLE_VALUE / m.VARIABLE_VALUE) * 100, 2) AS connection_saturation_pct
FROM performance_schema.global_status c
JOIN performance_schema.global_variables m ON m.VARIABLE_NAME = 'max_connections'
WHERE c.VARIABLE_NAME = 'Threads_connected';

-- 🎯 Alert Thresholds:
-- < 80% : Normal Operating Headroom
-- >= 80% : Warning Alert (Scale Pool!)
-- >= 90% : Critical Alert (Outage Imminent -> Error 1040!)`,explanation:"Connection Pool Saturation tracks how close the database is to exhausting its connection limit. Crossing 80% triggers automated alerts to prevent Error 1040 (Too many connections).",keyTakeaways:["Calculates the percentage of available client connection slots used.","Warning alert at 80% saturation; Critical alert at 90%.","Prevents sudden client connection rejections across microservices."]},formula3_qps_and_tps:{formulaName:"3. QPS & TPS Rates",title:"3. Real-Time QPS & TPS Workload Rates",badge:"Workload Metrics",badgeColor:"purple",sqlSnippet:`-- ⚡ 1. REAL-TIME INTERVAL QPS (10-SECOND WINDOW):
-- QPS = (Questions(t2) - Questions(t1)) / 10

-- 📝 2. REAL-TIME TRANSACTIONS PER SECOND (TPS):
-- TPS = ((Com_commit(t2) + Com_rollback(t2)) - (Com_commit(t1) + Com_rollback(t1))) / 10

SELECT 
  SUM(VARIABLE_VALUE) AS total_lifetime_transactions 
FROM performance_schema.global_status 
WHERE VARIABLE_NAME IN ('Com_commit', 'Com_rollback');`,explanation:"Questions measures client query throughput (QPS), while Com_commit and Com_rollback measure transactional write mutations (TPS). Delta math over 10-second intervals captures real-time throughput spikes.",keyTakeaways:["QPS measures client query demand; TPS measures write transactions.","Interval delta math captures peak traffic spikes without smoothing.","Crucial for capacity planning and auto-scaling read replicas."]},formula4_index_and_tmp_ratios:{formulaName:"4. Index & Disk Spills",title:"4. Index Efficiency (>95%) & Disk Spill (<10%) Ratios",badge:"Query Optimization",badgeColor:"rose",sqlSnippet:`-- 🔍 1. INDEX EFFICIENCY RATIO (>95.0% TARGET):
SELECT 
  k.VARIABLE_VALUE AS indexed_reads,
  s.VARIABLE_VALUE AS scan_reads,
  ROUND((k.VARIABLE_VALUE / (k.VARIABLE_VALUE + s.VARIABLE_VALUE)) * 100, 2) AS index_efficiency_pct
FROM performance_schema.global_status k
JOIN performance_schema.global_status s ON s.VARIABLE_NAME = 'Handler_read_rnd_next'
WHERE k.VARIABLE_NAME = 'Handler_read_key';

-- 💾 2. TEMPORARY DISK TABLE SPILL RATIO (<10.0% TARGET):
SELECT 
  d.VARIABLE_VALUE AS disk_tmp_tables,
  t.VARIABLE_VALUE AS total_tmp_tables,
  ROUND((d.VARIABLE_VALUE / (t.VARIABLE_VALUE + 0.001)) * 100, 2) AS disk_tmp_spill_pct
FROM performance_schema.global_status d
JOIN performance_schema.global_status t ON t.VARIABLE_NAME = 'Created_tmp_tables'
WHERE d.VARIABLE_NAME = 'Created_tmp_disk_tables';`,explanation:"Index efficiency measures the ratio of B-Tree point lookups vs sequential row scans. The Temporary Disk Spill Ratio reveals whether temporary tables are fitting in RAM or spilling to physical disk.",keyTakeaways:["Index Efficiency >95% confirms optimizer is using B-Tree indexes.","Temporary Disk Spill Ratio <10% ensures queries sort in RAM.","High disk spills indicate undersized tmp_table_size or missing indexes."]}},t=s[r];return e.jsxs("div",{className:"bg-slate-950 text-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-10 text-center sm:text-left border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800 rounded-full text-xs font-mono font-semibold uppercase tracking-wider",children:"Module 004.5: Server Logs, Slow Queries & Performance Schema"}),e.jsx("span",{className:"px-3 py-1 bg-cyan-950/80 text-cyan-400 border border-cyan-800 rounded-full text-xs font-mono font-semibold uppercase tracking-wider",children:"Topic 11 of 13"})]}),e.jsxs("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight",children:["Calculating ",e.jsx("span",{className:"text-emerald-400",children:"Health Indicators"}),": Ratios & ",e.jsx("span",{className:"text-cyan-400",children:"QPS / TPS"})]}),e.jsx("p",{className:"mt-4 text-base sm:text-lg text-slate-400 max-w-4xl leading-relaxed",children:"Mastering mathematical health derivations in MySQL 8.0: calculating the InnoDB Buffer Pool Hit Ratio (>99.0% SLA), evaluating connection pool saturation percentages, deriving real-time QPS and TPS rates, and tracking index efficiency."})]}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-16",children:[e.jsxs("section",{id:"formula-pillars",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-emerald-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"1. The Four Pillars of Derived Health Indicators"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"How derived mathematical ratios transform raw counters into actionable capacity and performance intelligence."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"Formula 1"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Hit Ratio > 99%"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("code",{children:"(1 - (reads / requests)) * 100"})," verifies in-memory RAM caching performance."]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold uppercase",children:"Formula 2"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Saturation < 80%"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("code",{children:"(Threads_connected / max_connections) * 100"})," prevents Error 1040 connection rejections."]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-purple-700/60 bg-purple-950/20 space-y-2 shadow-lg shadow-purple-950/40",children:[e.jsx("span",{className:"text-xs font-mono text-purple-400 font-bold uppercase",children:"Formula 3"}),e.jsx("h3",{className:"font-bold text-purple-300 text-base",children:"Interval QPS / TPS"}),e.jsxs("p",{className:"text-xs text-slate-200 leading-relaxed",children:[e.jsx("code",{children:"ΔQuestions / Δt"})," measures real-time application throughput during traffic surges."]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-rose-700/60 bg-rose-950/20 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-rose-400 font-bold uppercase",children:"Formula 4"}),e.jsx("h3",{className:"font-bold text-rose-300 text-base",children:"Index Ratio > 95%"}),e.jsxs("p",{className:"text-xs text-slate-200 leading-relaxed",children:[e.jsx("code",{children:"Handler_read_key / total reads"})," verifies B-Tree index lookup efficiency."]})]})]})]}),e.jsxs("section",{id:"interactive-workbench",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-cyan-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"2. Interactive Health Indicator Formulas Workbench"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Test and observe buffer pool hit ratios, connection saturation formulas, QPS interval calculations, and index ratios."})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:Object.keys(s).map(a=>{const o=s[a],l=r===a;return e.jsx("button",{onClick:()=>i(a),className:n("px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 border",l?"bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-950/40":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900"),children:o.formulaName},a)})}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider",children:"Health Indicator"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white mt-1",children:t.title})]}),e.jsx("span",{className:n("px-3 py-1 rounded-full text-xs font-mono font-semibold border w-fit",t.badgeColor==="emerald"&&"bg-emerald-950/80 text-emerald-300 border-emerald-700",t.badgeColor==="cyan"&&"bg-cyan-950/80 text-cyan-300 border-cyan-700",t.badgeColor==="purple"&&"bg-purple-950/80 text-purple-300 border-purple-700",t.badgeColor==="rose"&&"bg-rose-950/80 text-rose-300 border-rose-700"),children:t.badge})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:t.explanation}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:"SQL Formulas & Derived Health Queries:"}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed",children:t.sqlSnippet})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:"Architectural Takeaways:"}),e.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300",children:t.keyTakeaways.map((a,o)=>e.jsxs("li",{className:"p-3 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"✓"}),e.jsx("span",{children:a})]},o))})]})]})]}),e.jsxs("section",{id:"case-studies",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-purple-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"3. Real-World Engineering Scenarios in Bengal"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Health indicator calculation case studies in Barrackpore and Kolkata demonstrating 88.4% Hit Ratio remediation and 4,200 TPS throughput scaling."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),"Case 1: Mamata & Susmita – Fixing 88.4% Hit Ratio in Barrackpore Retail"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800",children:"88.4% → 99.9%"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["In Barrackpore, retail store POS checkout slowed during evening rush. Mamata calculated the Buffer Pool Hit Ratio: ",e.jsx("code",{children:"(1 - (580,000 / 5,000,000)) * 100 = 88.4%"}),", proving that 11.6% of all page requests were reading from physical disk. Increasing ",e.jsx("code",{children:"innodb_buffer_pool_size"})," from 2GB to 8GB brought the Hit Ratio to 99.9%, restoring sub-millisecond checkout speeds across ₹1.2 Crores in retail inventory."]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),"Case 2: Abhronila & Debangshu – Measuring 4,200 TPS in Kolkata Bank"]}),e.jsx("span",{className:"text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800",children:"4,200 TPS Sustained"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["In Kolkata, managing core banking transaction ledgers across ₹500 Crores in volume required benchmarking write capacity. Debangshu measured interval deltas of ",e.jsx("code",{children:"Com_commit"})," and ",e.jsx("code",{children:"Com_rollback"})," over 60 seconds, recording a sustained 4,200 write transactions per second (TPS) with an Index Efficiency Ratio of 99.4% and zero temporary disk table spills."]})]})]})]}),e.jsxs("section",{id:"pitfalls-rules",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-rose-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"4. Senior Pitfalls & Production Best Practices"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Avoid relying on lifetime smoothed averages and ignoring temporary disk spills."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Relying on Lifetime Average QPS"]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:["Dividing ",e.jsx("code",{children:"Questions"})," by ",e.jsx("code",{children:"Uptime"})," smooths traffic over weeks, concealing 10x traffic spikes during morning login rushes or flash sales."]}),e.jsx("div",{className:"text-xs font-mono text-emerald-400 p-2 bg-slate-950 rounded border border-slate-800",children:"Rule: Always calculate interval delta rates (10s window) for capacity planning."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: High Disk Spill Ratio (>15%)"]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:["When ",e.jsx("code",{children:"Created_tmp_disk_tables"})," exceeds 15% of total temporary tables, queries write intermediate results to disk, choking NVMe I/O."]}),e.jsx("div",{className:"text-xs font-mono text-emerald-400 p-2 bg-slate-950 rounded border border-slate-800",children:"Rule: Keep Temporary Disk Spill Ratio <10% by increasing tmp_table_size and indexing."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"✓"})," Best Practice 1: Maintain Hit Ratio >99.0%"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:"Ensure the InnoDB Buffer Pool Hit Ratio stays strictly above 99.0% on OLTP instances to guarantee sub-millisecond RAM query execution."}),e.jsx("div",{className:"text-xs text-slate-400",children:"Size innodb_buffer_pool_size to 60-75% of total host RAM on dedicated database servers."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"✓"})," Best Practice 2: Enforce Index Ratio >95%"]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:["Monitor ",e.jsx("code",{children:"Handler_read_key / (Handler_read_key + Handler_read_rnd_next)"})," to verify that B-Tree indexes satisfy over 95% of row requests."]}),e.jsx("div",{className:"text-xs text-slate-400",children:"Prevents unindexed table scans from consuming excessive CPU cycles."})]})]})]}),e.jsxs("section",{id:"printable-note",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-emerald-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"5. Printable Study Note & Teacher Advice"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Download complete printable notes and review key takeaways from Sir Sukanta Hui."})]}),e.jsx(_,{title:"Topic 11: Calculating Critical Health Indicators: Buffer Pool Hit Ratio, Connection Pool Saturation, Query Cache / QPS Rates",content:p}),e.jsx(d,{note:"Raw numbers without formulas are meaningless! Master these five essential formulas: maintain your Buffer Pool Hit Ratio strictly above 99.0% (ideally >99.9%), keep Connection Saturation below 80% to avoid Error 1040, calculate real-time QPS and TPS over 10-second intervals for accurate capacity planning, and ensure your Index Efficiency Ratio stays above 95% to keep queries blazing fast!"})]}),e.jsxs("section",{id:"faq-section",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-cyan-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"6. Frequently Asked Questions (30 Deep-Dive Questions)"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Master the technical nuances of derived health indicator formulas, buffer pool hit ratios, connection saturation SLAs, interval QPS/TPS math, and index ratios."})]}),e.jsx(m,{title:"Health Indicator Formulas & Ratios FAQs",questions:A})]})]})]})};export{f as default};

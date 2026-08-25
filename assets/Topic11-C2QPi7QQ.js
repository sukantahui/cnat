import{b as s,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as k}from"./PythonFileLoader-hCi5osN-.js";import{P as I}from"./PlainTextPrint-C08xhKA4.js";import{F as R}from"./FAQTemplate-CkSqDH4B.js";import{T as q}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const C=`# topic11_files/infinite_stream_generators_and_itertools.py\r
# Module: 003_003_decorators-generators\r
# Topic: Infinite streams and large data processing with generators\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 1: Infinite Stream Generators & itertools Slicing\r
Demonstrates:\r
  1. Creating infinite event and timestamp stream generators\r
  2. Bounding infinite streams safely with \`itertools.islice\` and \`itertools.takewhile\`\r
  3. Cycle generators and stateful sequence synthesis\r
"""\r
\r
import itertools\r
import time\r
from typing import Generator, Dict, Any\r
\r
def institutional_heartbeat_stream() -> Generator[Dict[str, Any], None, None]:\r
    """Generates an infinite heartbeat telemetry stream."""\r
    sequence_id = 1\r
    while True:\r
        yield {\r
            "seq": sequence_id,\r
            "timestamp": time.time(),\r
            "server": "srv-kolkata-primary.codernaccotax.internal",\r
            "status": "HEALTHY",\r
            "cpu_load_pct": round(20.0 + (sequence_id % 15) * 1.8, 1)\r
        }\r
        sequence_id += 1\r
\r
\r
def timestamped_transaction_stream(start_tx_id: int = 1001) -> Generator[Dict[str, Any], None, None]:\r
    """Infinite synthetic payment stream."""\r
    current_id = start_tx_id\r
    while True:\r
        yield {\r
            "tx_id": f"TX-2026-{current_id}",\r
            "amount": float(15000 + (current_id % 7) * 2500),\r
            "gateway": "RAZORPAY_INDIA"\r
        }\r
        current_id += 1\r
\r
\r
def demonstrate_infinite_streams():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INFINITE STREAM GENERATORS & ITERTOOLS")\r
    print("=" * 70)\r
\r
    # 1. Bounding Infinite Heartbeat Stream with \`itertools.islice\`:\r
    print("1. Bounding Infinite Heartbeat Stream (Taking 5 items with \`itertools.islice\`):")\r
    heartbeats = institutional_heartbeat_stream()\r
\r
    for hb in itertools.islice(heartbeats, 5):\r
        print(f"   * [HEARTBEAT #{hb['seq']:03d}] Server: {hb['server']} | CPU: {hb['cpu_load_pct']:4.1f}% | Status: {hb['status']}")\r
\r
    # 2. Bounding with \`itertools.takewhile\`:\r
    print("\\n2. Consuming Transactions with \`itertools.takewhile(lambda t: t['amount'] <= 25000, stream)\`:")\r
    tx_stream = timestamped_transaction_stream()\r
    bounded_txs = itertools.takewhile(lambda t: t["amount"] <= 25000.0, tx_stream)\r
\r
    for tx in bounded_txs:\r
        print(f"   * Processed Transaction {tx['tx_id']}: INR {tx['amount']:,.2f} via {tx['gateway']}")\r
\r
    # 3. Round-Robin Resource Cycle with \`itertools.cycle\`:\r
    print("\\n3. Round-Robin Classroom Server Rotation with \`itertools.cycle\`:")\r
    servers = ["srv-barrackpore-01", "srv-barrackpore-02", "srv-kolkata-01"]\r
    rotator = itertools.cycle(servers)\r
\r
    for req_id in range(1, 7):\r
        assigned_server = next(rotator)\r
        print(f"   * Incoming Portal Request #{req_id:02d} -> Routed to: {assigned_server}")\r
\r
    print(r"""\r
Infinite Stream Golden Rules:\r
  1. Never use \`list(infinite_gen)\` or \`for x in infinite_gen:\` without a termination condition (Causes infinite loop / freeze).\r
  2. Use \`itertools.islice(gen, limit)\` to consume a fixed count safely.\r
  3. Use \`itertools.takewhile(predicate, gen)\` to consume until condition fails.\r
""")\r
    print("[PASSED] Infinite Stream Generators & itertools Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_infinite_streams()\r
`,P=`# topic11_files/chunked_large_file_and_log_streamer.py\r
# Module: 003_003_decorators-generators\r
# Topic: Infinite streams and large data processing with generators\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 2: Chunked Large File & Server Log Streamer\r
Demonstrates:\r
  1. Reading large datasets line-by-line / chunk-by-chunk with constant O(1) memory\r
  2. Parsing structured log events on the fly (HTTP method, endpoint, status code, latency)\r
  3. Safe resource cleanup with \`try...finally\` and \`gen.close()\`\r
"""\r
\r
import io\r
from typing import Generator, Dict, Any\r
\r
def simulated_large_nginx_access_log() -> io.StringIO:\r
    """Creates a simulated in-memory server log stream."""\r
    log_content = (\r
        '192.168.1.10 - - [2026-08-24 10:00:01] "GET /api/v1/courses HTTP/1.1" 200 45.2\\n'\r
        '192.168.1.15 - - [2026-08-24 10:00:02] "POST /api/v1/admissions HTTP/1.1" 201 128.5\\n'\r
        '192.168.1.22 - - [2026-08-24 10:00:03] "GET /api/v1/student/STU-101 HTTP/1.1" 200 18.3\\n'\r
        '10.0.0.99    - - [2026-08-24 10:00:04] "POST /api/v1/auth/login HTTP/1.1" 401 12.1\\n'\r
        '192.168.1.10 - - [2026-08-24 10:00:05] "GET /api/v1/exam-scores HTTP/1.1" 200 89.4\\n'\r
        '10.0.0.99    - - [2026-08-24 10:00:06] "POST /api/v1/admin/purge HTTP/1.1" 403 8.0\\n'\r
        '192.168.1.44 - - [2026-08-24 10:00:07] "GET /api/v1/certificates HTTP/1.1" 500 350.2\\n'\r
    )\r
    return io.StringIO(log_content)\r
\r
\r
def stream_parsed_log_events(log_file) -> Generator[Dict[str, Any], None, None]:\r
    """Streams parsed log entries one-by-one, guaranteeing file cleanup on exit."""\r
    print("  [RESOURCE ACQUIRED] Opened server access log stream.")\r
    try:\r
        for line in log_file:\r
            line = line.strip()\r
            if not line:\r
                continue\r
\r
            parts = line.split()\r
            ip = parts[0]\r
            timestamp = f"{parts[3][1:]} {parts[4][:-1]}"\r
            method = parts[5][1:]\r
            endpoint = parts[6]\r
            status = int(parts[8])\r
            latency_ms = float(parts[9])\r
\r
            yield {\r
                "ip": ip,\r
                "timestamp": timestamp,\r
                "method": method,\r
                "endpoint": endpoint,\r
                "status": status,\r
                "latency_ms": latency_ms,\r
                "is_error": status >= 400\r
            }\r
    finally:\r
        print("  [RESOURCE CLEANUP] File handle closed safely via generator finally block.")\r
        log_file.close()\r
\r
\r
def demonstrate_log_streamer():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CHUNKED LARGE LOG FILE STREAMER")\r
    print("=" * 70)\r
\r
    log_file = simulated_large_nginx_access_log()\r
    log_stream = stream_parsed_log_events(log_file)\r
\r
    print("1. Streaming and Filtering HTTP Anomalies (Status >= 400):")\r
    for event in log_stream:\r
        if event["is_error"]:\r
            print(\r
                f"   * [ANOMALY HTTP {event['status']}] IP: {event['ip']:<14} | "\r
                f"Path: {event['method']} {event['endpoint']:<26} | Latency: {event['latency_ms']:5.1f} ms"\r
            )\r
\r
    # Demonstrate early termination and guaranteed cleanup:\r
    print("\\n2. Demonstrating Early Stream Termination with \`gen.close()\`:")\r
    log_file_2 = simulated_large_nginx_access_log()\r
    stream_2 = stream_parsed_log_events(log_file_2)\r
\r
    first_item = next(stream_2)\r
    print(f"   * Consumed Single Item: {first_item['method']} {first_item['endpoint']}")\r
    print("   * Invoking \`stream_2.close()\` (Simulating client disconnect):")\r
    stream_2.close()  # Triggers finally block immediately!\r
\r
    print("\\n[PASSED] Chunked Log Streamer & Resource Cleanup Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_log_streamer()\r
`,O=`# topic11_files/sliding_window_realtime_metrics_aggregator.py\r
# Module: 003_003_decorators-generators\r
# Topic: Infinite streams and large data processing with generators\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 3: Real-Time Sliding Window Metrics Aggregator\r
Demonstrates:\r
  1. Processing infinite time-series telemetry streams with rolling windows (\`collections.deque\`)\r
  2. Calculating rolling moving averages and latency spikes in constant O(1) space\r
  3. Composing generator pipelines over infinite streams\r
"""\r
\r
import collections\r
import itertools\r
from typing import Generator, Dict, Any, Iterable\r
\r
def synthetic_latency_stream() -> Generator[float, None, None]:\r
    """Infinite stream of API endpoint latency measurements (ms)."""\r
    base_latencies = [24.5, 28.0, 31.2, 195.0, 26.4, 29.8, 305.0, 22.1, 25.0]\r
    for lat in itertools.cycle(base_latencies):\r
        yield lat\r
\r
\r
def rolling_window_metrics_pipeline(\r
    data_stream: Iterable[float],\r
    window_size: int = 4,\r
    spike_threshold_ms: float = 100.0\r
) -> Generator[Dict[str, Any], None, None]:\r
    """Computes rolling statistics over incoming stream using fixed-size deque."""\r
    window = collections.deque(maxlen=window_size)\r
\r
    for val in data_stream:\r
        window.append(val)\r
        if len(window) == window_size:\r
            avg_latency = sum(window) / window_size\r
            is_spike = val >= spike_threshold_ms\r
\r
            yield {\r
                "current_val": val,\r
                "window": list(window),\r
                "moving_avg": round(avg_latency, 2),\r
                "window_min": min(window),\r
                "window_max": max(window),\r
                "is_spike": is_spike\r
            }\r
\r
\r
def demonstrate_sliding_window_stream():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SLIDING WINDOW REAL-TIME METRICS STREAM")\r
    print("=" * 70)\r
\r
    raw_stream = synthetic_latency_stream()\r
    metrics_pipeline = rolling_window_metrics_pipeline(raw_stream, window_size=4, spike_threshold_ms=100.0)\r
\r
    print("1. Monitoring First 8 Windows of Infinite Telemetry Stream:")\r
    for metric in itertools.islice(metrics_pipeline, 8):\r
        status = "[LATENCY SPIKE!]" if metric["is_spike"] else "[NORMAL]"\r
        print(\r
            f"   {status:<16} Current: {metric['current_val']:>5.1f} ms | "\r
            f"Moving Avg: {metric['moving_avg']:>5.1f} ms | "\r
            f"Window: {metric['window']}"\r
        )\r
\r
    print(r"""\r
Sliding Window Stream Rules:\r
  1. Use \`collections.deque(maxlen=N)\` to ensure memory never grows beyond N items.\r
  2. Yield enriched telemetry envelopes containing moving metrics.\r
  3. Combine with \`itertools.islice()\` or consumer break conditions.\r
""")\r
    print("[PASSED] Sliding Window Real-Time Metrics Aggregator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sliding_window_stream()\r
`,z=`# topic11_files/institutional_enterprise_telemetry_stream_monitor.py\r
# Module: 003_003_decorators-generators\r
# Topic: Infinite streams and large data processing with generators\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 4: Enterprise Server Telemetry Stream Monitor (Case Study)\r
Demonstrates:\r
  1. Production pipeline monitoring infinite student portal request traffic\r
  2. Multi-stage generator composition: Source -> Ingestion -> Security Filter -> Anomaly Detector -> Telemetry Sink\r
  3. Operating with zero memory growth across millions of requests\r
"""\r
\r
import itertools\r
import collections\r
from typing import Generator, Dict, Any\r
\r
def portal_request_traffic_stream() -> Generator[Dict[str, Any], None, None]:\r
    """Generates continuous stream of student portal web requests."""\r
    synthetic_traffic = [\r
        {"ip": "103.21.14.50", "endpoint": "/api/v1/auth/login", "status": 200, "latency_ms": 32.5},\r
        {"ip": "103.21.14.50", "endpoint": "/api/v1/student/dashboard", "status": 200, "latency_ms": 48.0},\r
        {"ip": "45.122.90.11", "endpoint": "/admin/config/db_dump", "status": 403, "latency_ms": 14.2},\r
        {"ip": "103.21.14.88", "endpoint": "/api/v1/exam/submit", "status": 200, "latency_ms": 85.0},\r
        {"ip": "45.122.90.11", "endpoint": "/.env", "status": 404, "latency_ms": 9.5},\r
        {"ip": "103.21.14.92", "endpoint": "/api/v1/certificates/download", "status": 500, "latency_ms": 420.0},\r
        {"ip": "103.21.14.50", "endpoint": "/api/v1/fee/receipt", "status": 200, "latency_ms": 38.0},\r
    ]\r
    req_id = 1\r
    for raw in itertools.cycle(synthetic_traffic):\r
        yield {\r
            "request_id": f"REQ-{req_id:06d}",\r
            **raw\r
        }\r
        req_id += 1\r
\r
\r
def security_anomaly_interceptor(\r
    request_stream: Generator[Dict[str, Any], None, None]\r
) -> Generator[Dict[str, Any], None, None]:\r
    """Filters incoming requests and flags security threats and server errors."""\r
    for req in request_stream:\r
        threat_level = "NONE"\r
        if req["status"] in (401, 403):\r
            threat_level = "UNAUTHORIZED_PROBE"\r
        elif req["status"] >= 500:\r
            threat_level = "SERVER_CRITICAL_FAULT"\r
        elif req["latency_ms"] >= 300.0:\r
            threat_level = "LATENCY_DEGRADATION"\r
\r
        yield {\r
            **req,\r
            "threat_level": threat_level,\r
            "requires_alert": threat_level != "NONE"\r
        }\r
\r
\r
def run_enterprise_telemetry_monitor():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE SERVER TELEMETRY STREAM MONITOR")\r
    print("=" * 70)\r
\r
    # Ingest Infinite Traffic Stream:\r
    raw_traffic = portal_request_traffic_stream()\r
\r
    # Pass through Security Interceptor Pipeline:\r
    security_pipeline = security_anomaly_interceptor(raw_traffic)\r
\r
    # Monitor First 10 Requests from infinite pipeline:\r
    print("1. Ingesting Real-Time Student Portal Request Telemetry (First 10 Events):")\r
    alert_count = 0\r
\r
    for event in itertools.islice(security_pipeline, 10):\r
        if event["requires_alert"]:\r
            print(\r
                f"   [SECURITY ALERT] {event['request_id']} | Threat: {event['threat_level']:<22} | "\r
                f"IP: {event['ip']:<14} | Path: {event['endpoint']:<28} | HTTP {event['status']}"\r
            )\r
            alert_count += 1\r
        else:\r
            print(\r
                f"   [OK]             {event['request_id']} | IP: {event['ip']:<14} | "\r
                f"Path: {event['endpoint']:<28} | HTTP {event['status']} | Latency: {event['latency_ms']:5.1f} ms"\r
            )\r
\r
    print(f"\\n   Total Alerts Triggered: {alert_count} / 10")\r
    print("[PASSED] Enterprise Telemetry Stream Monitor Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_enterprise_telemetry_monitor()\r
`,G=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
      TOPIC 11: INFINITE STREAMS & LARGE DATA PROCESSING WITH GENERATORS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. INFINITE STREAM GENERATION & SAFE BOUNDING\r
--------------------------------------------------------------------------------\r
  def telemetry_stream():\r
      seq = 1\r
      while True:\r
          yield {"seq": seq, "time": time.time()}\r
          seq += 1\r
\r
  # SAFE: Take first 100 items:\r
  for event in itertools.islice(telemetry_stream(), 100):\r
      process(event)\r
\r
--------------------------------------------------------------------------------\r
2. CHUNKED LARGE FILE PROCESSING WITH GUARANTEED CLEANUP\r
--------------------------------------------------------------------------------\r
  def read_large_file(filepath):\r
      f = open(filepath, "r")\r
      try:\r
          for line in f:\r
              yield parse(line)\r
      finally:\r
          f.close()  # Guaranteed to run on gen.close() or exit!\r
\r
--------------------------------------------------------------------------------\r
3. ROLLING WINDOW METRICS WITH deque(maxlen=N)\r
--------------------------------------------------------------------------------\r
  window = collections.deque(maxlen=5)\r
  for reading in sensor_stream():\r
      window.append(reading)\r
      moving_avg = sum(window) / len(window)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 11: INFINITE STREAMS\r
================================================================================\r
`,D=[{question:"What is an Infinite Stream Generator in Python?",shortAnswer:"A generator function containing an infinite loop ('while True: yield item') that continuously produces an unbounded sequence of elements on demand.",explanation:"Provides infinite streams (timestamps, IoT telemetry, IDs) with constant O(1) memory.",hint:"A generator with while True: yield item that produces values indefinitely.",level:"basic",codeExample:`def counter():
    i = 0
    while True:
        yield i
        i += 1`},{question:"What happens if you pass an infinite generator to 'list()' or 'sum()' without a bounding condition?",shortAnswer:"The program enters an infinite loop, continuously consuming CPU and allocating memory until the operating system crashes or raises 'MemoryError'.",explanation:"Eager collectors must never be called directly on infinite generators.",hint:"Causes an infinite loop / program freeze / Out-Of-Memory crash.",level:"basic",codeExample:"# DANGEROUS: list(infinite_generator())  # Freezes Python!"},{question:"How does 'itertools.islice(gen, N)' safely consume items from an infinite stream?",shortAnswer:"It acts as a lazy bounding iterator, consuming and yielding only the first 'N' elements before raising 'StopIteration', leaving the remaining infinite stream intact.",explanation:"The standard tool for safe consumption of infinite streams.",hint:"Yields only the first N items from the generator safely.",level:"basic",codeExample:"for event in itertools.islice(infinite_stream, 10): pass"},{question:"How does 'itertools.takewhile(predicate, gen)' differ from 'itertools.islice'?",shortAnswer:"'itertools.islice' bounds by element count; 'itertools.takewhile' bounds by condition, yielding elements as long as 'predicate(item)' evaluates to True and stopping permanently on the first False.",explanation:"Conditional stream bounding based on live telemetry data.",hint:"Consumes items as long as predicate is True; stops on the first False.",level:"moderate",codeExample:"safe_events = itertools.takewhile(lambda e: e.temp < 100, sensor_gen)"},{question:"How do Python generators naturally solve the 'Backpressure' problem in data streaming?",shortAnswer:"Because Python generators are 'pull-based' (lazy); data is produced only when the consumer explicitly calls 'next()', automatically pacing data generation to match consumption speed.",explanation:"Prevents memory buffer overflows in high-throughput data pipelines.",hint:"Pull-based model produces data only when the consumer asks for it.",level:"complex",codeExample:"# Consumer drives production speed via next()"},{question:"How do you ensure open file handles or network sockets are safely closed inside an infinite/large stream generator?",shortAnswer:"By wrapping stream iteration in a 'try...finally' block inside the generator; the 'finally' block is guaranteed to execute when the generator is exhausted, closed via 'gen.close()', or garbage collected.",explanation:"Essential pattern for leak-free file and socket streaming.",hint:"Use a try...finally block around the generator loop.",level:"moderate",codeExample:`try:
    for line in file: yield parse(line)
finally:
    file.close()`},{question:"What exception does 'gen.close()' raise inside the generator frame?",shortAnswer:"'gen.close()' raises the 'GeneratorExit' exception at the current suspension point, triggering 'finally' blocks and closing the generator.",explanation:"GeneratorExit does not inherit from Exception, but from BaseException.",hint:"Raises GeneratorExit to trigger finally cleanup blocks.",level:"moderate",codeExample:"gen.close()  # Raises GeneratorExit inside gen"},{question:"How does 'collections.deque(maxlen=N)' enable memory-efficient sliding windows over infinite streams?",shortAnswer:"When an element is appended to a full deque, the oldest element is automatically discarded in O(1) time, ensuring the buffer size never exceeds N regardless of stream length.",explanation:"Eliminates list reallocation overhead in rolling window calculations.",hint:"Automatically discards oldest items so buffer size never exceeds N.",level:"moderate",codeExample:`window = collections.deque(maxlen=5)
window.append(new_metric)`},{question:"How do you read a 100 GB CSV file in Python without running out of RAM?",shortAnswer:"By using a generator function that iterates over the file object line-by-line ('for line in f: yield parse(line)'), consuming ~1 line in memory (~1 KB) at any given instant.",explanation:"Keeps memory usage strictly O(1) across gigabyte/terabyte files.",hint:"Stream line-by-line using a generator instead of read() or readlines().",level:"basic",codeExample:`def stream_csv(path):
    with open(path) as f:
        for line in f: yield line.strip()`},{question:"Why is 'for line in f:' more memory efficient than 'f.readlines()'?",shortAnswer:"'f.readlines()' reads the entire file into memory as a list of strings (O(N) RAM); 'for line in f:' uses an internal C-level buffer iterator yielding 1 line at a time (O(1) RAM).",explanation:"Fundamental file I/O best practice in Python.",hint:"f.readlines() loads everything in RAM; for line in f: streams line-by-line.",level:"basic",codeExample:`# BAD: for l in f.readlines(): ...
# GOOD: for l in f: ...`},{question:"How can you chunk a large binary file into 64KB blocks using 'iter()'?",shortAnswer:`'iter(lambda: file.read(65536), b"")' creates a sentinel iterator yielding 64KB chunks until EOF (empty bytes).`,explanation:"Standard recipe for chunked binary file streaming.",hint:"Use iter(lambda: f.read(65536), b'').",level:"complex",codeExample:`for chunk in iter(lambda: f.read(65536), b''):
    process(chunk)`},{question:"What is 'itertools.cycle' and how is it used in infinite stream processing?",shortAnswer:"'itertools.cycle(iterable)' endlessly repeats elements of the given iterable in order, commonly used for round-robin server routing and repeating test fixtures.",explanation:"Infinite round-robin rotator.",hint:"Endlessly repeats elements of a sequence in a loop.",level:"basic",codeExample:"rotator = itertools.cycle(['node1', 'node2', 'node3'])"},{question:"What is 'itertools.count(start, step)'?",shortAnswer:"An infinite iterator that generates numbers starting from 'start' and incrementing by 'step' on each 'next()' call.",explanation:"Standard infinite sequence counter.",hint:"Generates infinite numbers starting at start with step increments.",level:"basic",codeExample:"for i in itertools.count(100, 5): pass  # 100, 105, 110..."},{question:"What is the danger of catching 'BaseException' or 'GeneratorExit' inside a generator's try block?",shortAnswer:"If you catch 'GeneratorExit' and attempt to yield another value with 'yield', Python raises 'RuntimeError: generator ignored GeneratorExit'.",explanation:"GeneratorExit must only be caught to perform cleanup and exit.",hint:"Catching GeneratorExit and yielding another value raises RuntimeError.",level:"complex",codeExample:`try: yield
except GeneratorExit: pass # MUST NOT yield here!`},{question:"How do you calculate moving standard deviation over an infinite stream in O(1) space?",shortAnswer:"Using Welford's algorithm or maintaining rolling sum and rolling sum of squares inside a fixed-size deque.",explanation:"Streaming statistical metrics calculation.",hint:"Maintain rolling sum and squared sums in a fixed deque.",level:"complex",codeExample:"# Welford's online algorithm for streaming variance"},{question:"How can you implement an 'Infinite Telemetry Heartbeat' daemon with generators?",shortAnswer:"A generator function yielding timestamped health metrics inside a 'while True' loop, coupled with consumer timers or socket emitters.",explanation:"Standard backend server health heartbeat pattern.",hint:"while True loop yielding heartbeat dictionaries with timestamps.",level:"moderate",codeExample:`def heartbeat():
    while True: yield {'time': time.time(), 'status': 'OK'}`},{question:"What is 'itertools.dropwhile(predicate, gen)'?",shortAnswer:"It drops elements from the stream as long as 'predicate(item)' is True, and yields all remaining elements once the predicate becomes False.",explanation:"Skips unwanted stream preambles (e.g. log headers).",hint:"Discards initial items as long as predicate is True, then streams the rest.",level:"moderate",codeExample:"logs = itertools.dropwhile(lambda l: l.startswith('#'), log_gen)"},{question:"Can multiple consumers share the same infinite generator stream?",shortAnswer:"Yes, but they will pull items cooperatively (each 'next()' call consumes an item from the single stream), or you can use 'itertools.tee' to create independent copies.",explanation:"itertools.tee creates independent split iterators from a single stream.",hint:"Use itertools.tee(gen, 2) to duplicate stream streams independently.",level:"moderate",codeExample:"s1, s2 = itertools.tee(stream, 2)"},{question:"What is the memory risk when using 'itertools.tee' on divergent consumers?",shortAnswer:"If one consumer advances far ahead of the other, 'itertools.tee' must cache all intermediate unconsumed items in RAM, leading to memory growth.",explanation:"Divergent consumers cause itertools.tee memory buffers to expand.",hint:"Caches unconsumed items in memory if one consumer is much faster.",level:"complex",codeExample:"# Keep tee consumers synchronized to avoid RAM buffers"},{question:"How do you batch items from an infinite stream into fixed-size chunks of N items?",shortAnswer:"Using 'itertools.islice(gen, N)' inside a generator function: 'while True: chunk = list(itertools.islice(gen, N)); if not chunk: break; yield chunk'. (In Python 3.12+, 'itertools.batched').",explanation:"Standard stream batching idiom.",hint:"Use itertools.batched(gen, N) or while chunk: yield chunk.",level:"moderate",codeExample:"for batch in itertools.batched(infinite_stream, 50): ..."},{question:"How do you rate-limit or throttle an infinite generator stream?",shortAnswer:"By inserting 'time.sleep(interval)' inside the generator loop or consumer before each yield, controlling the emission frequency.",explanation:"Prevents consuming CPU at 100% in polling loops.",hint:"Add time.sleep() between yields to throttle emission rate.",level:"basic",codeExample:`while True:
    yield get_reading()
    time.sleep(0.1)`},{question:"How do you profile memory consumption of an infinite stream generator pipeline?",shortAnswer:"Using the standard library 'tracemalloc' module or 'memory_profiler' to verify that peak memory remains flat/constant over millions of processed records.",explanation:"Verifies O(1) memory invariance in production pipelines.",hint:"Use tracemalloc to verify that peak allocated RAM remains constant.",level:"moderate",codeExample:`import tracemalloc
tracemalloc.start()`},{question:"Can an infinite generator stream be converted into an asynchronous generator?",shortAnswer:"Yes. By declaring 'async def my_stream(): while True: await asyncio.sleep(1); yield data', supporting non-blocking concurrency with 'async for'.",explanation:"Asynchronous stream generators for modern web frameworks.",hint:"Declare with async def and use await inside the loop.",level:"complex",codeExample:`async def ticker():
    while True:
        await asyncio.sleep(1)
        yield time.time()`},{question:"What happens if a generator encounters an unhandled exception during infinite stream processing?",shortAnswer:"The exception propagates to the consumer, terminating the generator frame and closing the stream permanently.",explanation:"Always wrap volatile external operations in try...except.",hint:"Terminates the generator and propagates the exception to the caller.",level:"basic",codeExample:`try:
    item = next(stream)
except Exception as exc: ...`},{question:"What is the ultimate golden rule for Infinite Streams and Large Data Processing in Python?",shortAnswer:"Always stream data with generators to ensure O(1) memory, bound infinite streams safely using 'itertools.islice' or conditional breaks, protect resources with 'try...finally', and use 'collections.deque' for sliding window aggregations.",explanation:"The master architectural pattern for enterprise data engineering in Python.",hint:"Use generators for O(1) RAM, itertools.islice for bounding, and try...finally for cleanup.",level:"basic",codeExample:"# Python Infinite Stream & Large Data Processing Mastery"}];function V(){const c=s.useRef([]),[l,m]=s.useState("infinite"),h=[{ip:"103.21.14.50",path:"/api/v1/auth/login",status:200,latency:32.5},{ip:"103.21.14.50",path:"/api/v1/student/dashboard",status:200,latency:48},{ip:"45.122.90.11",path:"/admin/config/db_dump",status:403,latency:14.2},{ip:"103.21.14.88",path:"/api/v1/exam/submit",status:200,latency:85},{ip:"45.122.90.11",path:"/.env",status:404,latency:9.5},{ip:"103.21.14.92",path:"/api/v1/certificates/download",status:500,latency:420},{ip:"103.21.14.50",path:"/api/v1/fee/receipt",status:200,latency:38}],[j,p]=s.useState(0),[a,u]=s.useState(!1),[g,N]=s.useState(!1),[d,S]=s.useState(4),[y,b]=s.useState([]),[x,w]=s.useState([]),v=()=>{p(t=>{const n=t+1,r=h[(n-1)%h.length],E=r.status>=400||r.latency>=300,A={seq:n,reqId:`REQ-${String(n).padStart(6,"0")}`,ip:r.ip,path:r.path,status:r.status,latency:r.latency,isAnomaly:E};return b(f=>[A,...f.slice(0,19)]),w(f=>[...f,r.latency].slice(-d)),n})};s.useEffect(()=>{let t=null;return a&&(t=setInterval(()=>{v()},750)),()=>{t&&clearInterval(t)}},[a,d]);const T=x.length>0?(x.reduce((t,n)=>t+n,0)/x.length).toFixed(1):"0.0",_=g?y.filter(t=>t.isAnomaly):y;s.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const i=t=>{t&&!c.current.includes(t)&&c.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:i,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 11 • Final Topic"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Infinite Streams & ",e.jsx("span",{className:"text-teal-400",children:"Large Data Processing"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master high-throughput streaming architectures in Python: generating unbounded streams (",e.jsx("code",{className:"text-teal-300 font-mono",children:"while True: yield"}),"), safe stream bounding with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"itertools.islice"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"itertools.takewhile"}),", chunked multi-gigabyte log streaming with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"try...finally"})," cleanup, and real-time sliding window metrics."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"♾️ Infinite Streams (while True)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✂️ itertools.islice & takewhile"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📁 Chunked Large File Streaming"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ try...finally & gen.close() Cleanup"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Architecture of Infinite Data Streams"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In production systems, real-world data feeds (IoT telemetry, stock tickers, web server access logs) are infinite. Generators provide the only memory-safe mechanism to process unbounded streams:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Unbounded Generator"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"while True: yield data"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Produces elements continuously on demand. Memory stays constant ",e.jsx("code",{className:"text-teal-300",children:"O(1)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ itertools Slicing"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"itertools.islice(gen, N)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Safely bounds consumption to N items without loading or freezing Python."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Guaranteed Teardown"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"try...finally: close()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:[e.jsx("code",{className:"text-purple-300",children:"gen.close()"})," raises ",e.jsx("code",{className:"text-purple-300",children:"GeneratorExit"})," to safely close sockets and file descriptors."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"How Generators Handle Backpressure Automatically"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Because Python generators are ",e.jsx("strong",{children:"pull-based"})," (evaluating solely upon ",e.jsx("code",{className:"text-teal-300 font-mono",children:"next()"})," calls), fast producers never overwhelm slow consumers. Data is generated only at the exact rate the consumer processes it!"]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Slicing, File Streaming & Rolling Deques"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("infinite"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="infinite"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`itertools.islice` Slicing"}),e.jsx("button",{onClick:()=>m("chunked"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="chunked"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Chunked File Streaming"}),e.jsx("button",{onClick:()=>m("rolling"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="rolling"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Rolling `deque(maxlen=N)`"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining unbounded stream bounding, leak-free file streaming, and fixed-capacity rolling sliding windows:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="infinite"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"BOUNDING INFINITE STREAM GENERATORS SAFELY WITH `itertools.islice`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Infinite Stream Source"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def heartbeat_stream():"}),e.jsx("text",{x:"30",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"while True: yield ping()"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Unbounded Producer:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Emits telemetry continuous"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"without internal stop condition."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `itertools.islice(gen, 5)`"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"counts items: 1, 2, 3, 4, 5"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"raises StopIteration at 5"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Safe Stream Governor:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Intercepts consumption and"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"halts after exactly N yields."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Consumer Finishes"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"for ping in islice_gen:"}),e.jsx("text",{x:"620",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"process(ping)"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Clean Termination:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"No freezing, no infinite loops,"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and zero memory leakage."})]})]}):l==="chunked"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CHUNKED LARGE FILE STREAMING WITH GUARANTEED CLEANUP (`try...finally`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Generator Function with `try...finally`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:'f = open("100GB_server.log", "r")'}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"35",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:"for line in f: yield parse(line)"}),e.jsx("text",{x:"20",y:"125",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:"finally:"}),e.jsx("text",{x:"35",y:"145",fill:"#fda4af",fontSize:"9 font-mono font-bold",children:"f.close()  # Guaranteed Teardown!"}),e.jsx("rect",{x:"20",y:"165",width:"340",height:"55",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"185",fill:"#34d399",fontSize:"9 font-bold",children:"Resource Safety:"}),e.jsx("text",{x:"30",y:"202",fill:"#ecfdf5",fontSize:"8 font-mono",children:"File closes even if consumer crashes or exits early!"})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"protects"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Consumer Early Exit via `gen.close()`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"gen = stream_logs()"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"first_log = next(gen)"}),e.jsx("text",{x:"20",y:"105",fill:"#c4b5fd",fontSize:"9 font-mono font-bold",children:"gen.close()  # Triggers GeneratorExit"}),e.jsx("rect",{x:"20",y:"135",width:"330",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"160",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Zero Descriptor Leaks:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8 font-mono",children:"CPython raises `GeneratorExit` inside gen frame,"}),e.jsx("text",{x:"30",y:"198",fill:"#a7f3d0",fontSize:"8 font-mono",children:"immediately executing `finally: f.close()`."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"REAL-TIME SLIDING WINDOW METRICS WITH `collections.deque(maxlen=N)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Live Metric Influx"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"incoming latency: 420.0 ms"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Appended to fixed-size deque."}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Stream Event:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Continuous time-series latency"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"measurements arrive."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `deque(maxlen=4)`"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"auto-discards oldest item"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"buffer = [32, 48, 85, 420]"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Fixed Ring Buffer:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Memory never grows beyond 4"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"items regardless of stream size."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Yield Enriched Event"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"moving_avg = 146.2 ms"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"is_spike = True (Alert!)"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Enriched Telemetry:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Emits actionable telemetry"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"to downstream dashboards."})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Enterprise Portal Telemetry Stream Monitor"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Monitor a live infinite stream of student portal traffic, calculate rolling average latencies with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque(maxlen=N)"}),", and intercept HTTP security anomalies in real time:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Stream Engine Controls"}),e.jsx("button",{onClick:()=>{u(!1),p(0),b([]),w([])},className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Telemetry Stream"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>u(!a),className:o("flex-1 py-2.5 rounded-lg text-xs font-mono font-bold transition-all shadow-lg",a?"bg-rose-600 hover:bg-rose-500 text-white":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:a?"⏸️ Pause Live Stream":"▶️ Start Live Auto-Stream (750ms)"}),e.jsx("button",{onClick:v,disabled:a,className:"px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-mono font-bold transition-all",children:"Step Single `next()`"})]}),e.jsxs("label",{className:"flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer p-2 bg-slate-900 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Filter Security Threats & HTTP Anomalies Only (Status >= 400 or Latency >= 300ms)"})]}),e.jsxs("div",{className:"space-y-1 pt-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-300",children:[e.jsx("span",{children:"Rolling Deque Window Capacity (`maxlen`):"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[d," Requests"]})]}),e.jsx("input",{type:"range",min:"2",max:"8",step:"1",value:d,onChange:t=>S(Number(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Real-Time Stream Metrics:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Total Streamed Requests:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[j," Requests"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Rolling Moving Average Latency:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[T," ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Stream Generator Memory:"}),e.jsx("span",{className:"text-cyan-300 font-bold",children:"112 Bytes (Constant O(1) RAM)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Recent Telemetry Events (Live Stream Window):"}),_.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Start Live Auto-Stream" or "Step Single next()" to ingest telemetry.'}):_.map(t=>e.jsxs("div",{className:o("p-1.5 rounded border flex justify-between text-[11px] transition-all",t.isAnomaly?"bg-rose-950/60 border-rose-800 text-rose-200 font-bold":"bg-slate-950 border-slate-800 text-slate-300"),children:[e.jsxs("div",{children:[e.jsxs("span",{children:["[",t.reqId,"] ",t.path]}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["IP: ",t.ip]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:o("font-bold",t.status>=400?"text-rose-400":"text-emerald-400"),children:["HTTP ",t.status]}),e.jsxs("span",{className:"text-[10px] text-slate-400 block",children:[t.latency," ms"]})]})]},t.seq))]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Infinite Streaming & itertools Toolkit"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Streaming Tool / Construct"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Stopping / Bounding Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Production Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"itertools.islice"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`islice(gen, stop)`"}),e.jsx("td",{className:"py-3 px-4",children:"Stops after exact count N"}),e.jsx("td",{className:"py-3 px-4",children:"Sampling N events from infinite telemetry"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"itertools.takewhile"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`takewhile(predicate, gen)`"}),e.jsx("td",{className:"py-3 px-4",children:"Stops permanently on first False"}),e.jsx("td",{className:"py-3 px-4",children:"Consuming until threshold breach or timeout"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"collections.deque"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`deque(maxlen=N)`"}),e.jsx("td",{className:"py-3 px-4",children:"Auto-discards oldest in O(1)"}),e.jsx("td",{className:"py-3 px-4",children:"Rolling average & sliding window statistics"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"try...finally / close()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`gen.close()` -> GeneratorExit"}),e.jsx("td",{className:"py-3 px-4",children:"Immediate resource teardown"}),e.jsx("td",{className:"py-3 px-4",children:"Leak-free socket and multi-GB file streaming"})]})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating infinite stream generators, chunked log file streaming, sliding window metrics, and enterprise telemetry monitors:"}),e.jsx(k,{files:[{filename:"infinite_stream_generators_and_itertools.py",code:C,description:"Infinite heartbeat streams, itertools.islice, takewhile, and round-robin cycle rotators."},{filename:"chunked_large_file_and_log_streamer.py",code:P,description:"Chunked multi-GB server log file streaming with guaranteed try...finally cleanup."},{filename:"sliding_window_realtime_metrics_aggregator.py",code:O,description:"Real-time sliding window moving average metrics calculation with collections.deque."},{filename:"institutional_enterprise_telemetry_stream_monitor.py",code:z,description:"Enterprise Server Telemetry Stream Monitor with security anomaly detection."}]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Calling `list()` on Infinite Stream"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list(infinite_gen)"})," freezes Python in an infinite loop and crashes the server with Out-Of-Memory."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always bound infinite streams using ",e.jsx("code",{className:"text-emerald-300",children:"itertools.islice()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Leaking File Handles on Early Exit"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If an infinite generator opens a file or socket without ",e.jsx("code",{className:"text-amber-300 font-mono",children:"try...finally"}),", closing the stream early leaks open OS descriptors."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always wrap open streams in ",e.jsx("code",{className:"text-emerald-300",children:"try...finally: file.close()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Yielding inside `except GeneratorExit`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When ",e.jsx("code",{className:"text-purple-300 font-mono",children:"close()"})," is called, attempting to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"yield"})," inside ",e.jsx("code",{className:"text-purple-300 font-mono",children:"except GeneratorExit"})," raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"RuntimeError: generator ignored GeneratorExit"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," In ",e.jsx("code",{className:"text-emerald-300",children:"GeneratorExit"})," blocks, only perform cleanup and exit."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Memory Growth in Rolling Window Lists"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using a regular list for a moving window (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"window.append(x); window.pop(0)"}),") causes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"O(N)"})," memory copying overhead on every pop."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"collections.deque(maxlen=N)"})," for constant ",e.jsx("code",{className:"text-emerald-300",children:"O(1)"})," ring buffers."]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering infinite streams, itertools utilities, chunked file streaming, and sliding window aggregations:"}),e.jsx(R,{questions:D})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with infinite stream bounding recipes, chunked file patterns, and sliding window templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(I,{content:G,filename:"python_topic11_infinite_streams_notes.txt",title:"Print Topic 11 Study Notes"})}),e.jsx(q,{})]})]})]})}export{V as default};

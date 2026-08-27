import{b as x,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as k}from"./TeacherSukantaHui-CC0AKmkm.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const w=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 6: System design basics for Python backends\r
# File: horizontal_scaling_stateless_architecture.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Load Balancing algorithms, Stateless Backend Workers,\r
#              and Externalized Session State.\r
"""\r
\r
from dataclasses import dataclass\r
from typing import Optional\r
\r
@dataclass\r
class BackendWorker:\r
    worker_id: str\r
    campus_region: str\r
    active_connections: int = 0\r
\r
    def process_request(self, path: str) -> str:\r
        return f"Worker {self.worker_id} ({self.campus_region}) handled: {path}"\r
\r
class RoundRobinLoadBalancer:\r
    """Distributes incoming requests evenly across stateless backend instances."""\r
    def __init__(self, workers: list[BackendWorker]):\r
        if not workers:\r
            raise ValueError("Load balancer requires at least one worker.")\r
        self.workers = workers\r
        self._current_index = 0\r
\r
    def route_request(self, path: str) -> tuple[str, str]:\r
        worker = self.workers[self._current_index]\r
        self._current_index = (self._current_index + 1) % len(self.workers)\r
        response = worker.process_request(path)\r
        return worker.worker_id, response\r
\r
class LeastConnectionsLoadBalancer:\r
    """Routes requests to the worker handling the fewest active connections."""\r
    def __init__(self, workers: list[BackendWorker]):\r
        self.workers = workers\r
\r
    def route_request(self, path: str) -> tuple[str, str]:\r
        worker = min(self.workers, key=lambda w: w.active_connections)\r
        worker.active_connections += 1\r
        response = worker.process_request(path)\r
        return worker.worker_id, response\r
\r
def test_stateless_architecture():\r
    print("   [...] Testing Load Balancing & Stateless Worker Dispatch...")\r
\r
    workers = [\r
        BackendWorker("SRV_01", "Barrackpore"),\r
        BackendWorker("SRV_02", "Kolkata"),\r
        BackendWorker("SRV_03", "Ichapur")\r
    ]\r
\r
    # 1. Round Robin Dispatch Verification\r
    lb_rr = RoundRobinLoadBalancer(workers)\r
    routes = [lb_rr.route_request(f"/api/v1/students/{i}")[0] for i in range(6)]\r
    assert routes == ["SRV_01", "SRV_02", "SRV_03", "SRV_01", "SRV_02", "SRV_03"]\r
    print(f"   [PASS] 1. Round Robin Load Balancer evenly cycled: {' -> '.join(routes)}")\r
\r
    # 2. Least Connections Dispatch Verification\r
    workers[0].active_connections = 5\r
    workers[1].active_connections = 1  # Least busy\r
    workers[2].active_connections = 4\r
\r
    lb_lc = LeastConnectionsLoadBalancer(workers)\r
    assigned_worker_id, _ = lb_lc.route_request("/api/v1/enroll")\r
    assert assigned_worker_id == "SRV_02"\r
    print(f"   [PASS] 2. Least Connections routed request to least busy server: {assigned_worker_id}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[SYSTEM DESIGN] Horizontal Scaling & Stateless Load Balancing")\r
    print("=" * 75)\r
\r
    test_stateless_architecture()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Stateless backend workers paired with intelligent load balancers")\r
    print("           enable elastic scale-out across multi-cloud and regional datacenters.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 6: System design basics for Python backends\r
# File: caching_strategies_and_invalidation.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Cache-Aside (Lazy Loading), TTL Invalidation,\r
#              and Mutex Locking to prevent Cache Stampede (Thundering Herd).\r
"""\r
\r
import time\r
import threading\r
from typing import Any, Optional\r
\r
class CacheEntry:\r
    def __init__(self, value: Any, expires_at: float):\r
        self.value = value\r
        self.expires_at = expires_at\r
\r
    @property\r
    def is_expired(self) -> bool:\r
        return time.time() > self.expires_at\r
\r
class CacheAsideService:\r
    """Thread-safe Cache-Aside implementation with TTL and Mutex locking against Stampedes."""\r
    def __init__(self, ttl_seconds: float = 60.0):\r
        self.ttl = ttl_seconds\r
        self._cache: dict[str, CacheEntry] = {}\r
        self._lock = threading.Lock()\r
        self.db_queries_count = 0\r
\r
    def _simulate_slow_database_fetch(self, student_id: str) -> dict[str, Any]:\r
        """Simulates an expensive 10ms disk database query."""\r
        self.db_queries_count += 1\r
        time.sleep(0.01)\r
        return {"sid": student_id, "name": "Mamata", "campus": "Barrackpore", "balance": 10000.0}\r
\r
    def get_student_profile(self, student_id: str) -> dict[str, Any]:\r
        now = time.time()\r
        # 1. Fast Cache Read\r
        entry = self._cache.get(student_id)\r
        if entry and not entry.is_expired:\r
            return entry.value\r
\r
        # 2. Cache Miss / Expired -> Acquire Lock to prevent Cache Stampede (Thundering Herd)\r
        with self._lock:\r
            # Double-check inside lock\r
            entry = self._cache.get(student_id)\r
            if entry and not entry.is_expired:\r
                return entry.value\r
\r
            # Query primary database\r
            db_data = self._simulate_slow_database_fetch(student_id)\r
            self._cache[student_id] = CacheEntry(db_data, expires_at=now + self.ttl)\r
            return db_data\r
\r
    def invalidate(self, student_id: str) -> None:\r
        """Evicts key on write mutations."""\r
        with self._lock:\r
            self._cache.pop(student_id, None)\r
\r
def test_caching():\r
    print("   [...] Testing Cache-Aside & Stampede Prevention...")\r
    cache_svc = CacheAsideService(ttl_seconds=2.0)\r
\r
    # 1. Initial Fetch -> Cache Miss (DB query triggered)\r
    res1 = cache_svc.get_student_profile("STU_BP_01")\r
    assert cache_svc.db_queries_count == 1\r
    assert res1["name"] == "Mamata"\r
    print("   [PASS] 1. Initial Cache Miss populated cache from simulated database")\r
\r
    # 2. Subsequent 100 requests -> Cache Hits (0 additional DB queries)\r
    for _ in range(100):\r
        cache_svc.get_student_profile("STU_BP_01")\r
    assert cache_svc.db_queries_count == 1\r
    print("   [PASS] 2. 100 consecutive requests served from Cache (0 DB queries)")\r
\r
    # 3. Explicit Invalidation\r
    cache_svc.invalidate("STU_BP_01")\r
    cache_svc.get_student_profile("STU_BP_01")\r
    assert cache_svc.db_queries_count == 2\r
    print("   [PASS] 3. Explicit cache invalidation forced fresh DB reload")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CACHING TOPOLOGY] Cache-Aside, Invalidation & Stampede Defense")\r
    print("=" * 75)\r
\r
    test_caching()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] The Cache-Aside pattern paired with Mutex locking slashes database")\r
    print("           load by >95% while preventing destructive Thundering Herd outages.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 6: System design basics for Python backends\r
# File: rate_limiting_and_token_bucket.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Token Bucket Rate Limiting algorithm for API gateways.\r
"""\r
\r
import time\r
import threading\r
\r
class TokenBucketRateLimiter:\r
    """Thread-safe Token Bucket Rate Limiter accommodating burst traffic."""\r
    def __init__(self, capacity: int, refill_rate_per_sec: float):\r
        self.capacity = float(capacity)\r
        self.refill_rate = float(refill_rate_per_sec)\r
        self.tokens = float(capacity)\r
        self.last_refill_time = time.time()\r
        self._lock = threading.Lock()\r
\r
    def _refill(self, now: float) -> None:\r
        elapsed = now - self.last_refill_time\r
        new_tokens = elapsed * self.refill_rate\r
        self.tokens = min(self.capacity, self.tokens + new_tokens)\r
        self.last_refill_time = now\r
\r
    def allow_request(self, tokens_required: float = 1.0) -> bool:\r
        with self._lock:\r
            now = time.time()\r
            self._refill(now)\r
            if self.tokens >= tokens_required:\r
                self.tokens -= tokens_required\r
                return True\r
            return False\r
\r
def test_rate_limiter():\r
    print("   [...] Testing Token Bucket Rate Limiter...")\r
    # Capacity 3 tokens, refills 2 tokens per second\r
    limiter = TokenBucketRateLimiter(capacity=3, refill_rate_per_sec=2.0)\r
\r
    # 1. Burst of 3 requests -> All Allowed\r
    assert limiter.allow_request() is True\r
    assert limiter.allow_request() is True\r
    assert limiter.allow_request() is True\r
    print("   [PASS] 1. Initial burst of 3 requests allowed (Bucket emptied)")\r
\r
    # 2. 4th immediate request -> Throttled (HTTP 429)\r
    assert limiter.allow_request() is False\r
    print("   [PASS] 2. 4th immediate request throttled safely (0 tokens remaining)")\r
\r
    # 3. Wait 0.6 seconds (refills ~1.2 tokens) -> Allowed\r
    time.sleep(0.6)\r
    assert limiter.allow_request() is True\r
    print("   [PASS] 3. Token refill confirmed: Request allowed after waiting 0.6s")\r
\r
def main():\r
    print("=" * 75)\r
    print("[API RATE LIMITING] Token Bucket Algorithm & Throttling (HTTP 429)")\r
    print("=" * 75)\r
\r
    test_rate_limiter()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Token Bucket algorithms protect Python backends from DoS attacks,")\r
    print("           brute-force login attempts, and runaway client scripts.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 6: System design basics for Python backends\r
# File: institutional_distributed_backend_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end distributed system design case study combining API Gateway\r
#              Rate Limiting, Load Balancing, Redis Caching, and Read Replica routing.\r
"""\r
\r
from dataclasses import dataclass\r
from typing import Optional\r
import time\r
\r
@dataclass\r
class StudentRecord:\r
    sid: str\r
    name: str\r
    campus: str\r
    balance: float\r
\r
class DistributedInstitutionalBackend:\r
    """Full distributed backend hub coordinating caching, load balancing, and persistence."""\r
    def __init__(self):\r
        # 1. Primary Database (Master Writes)\r
        self.master_db: dict[str, StudentRecord] = {}\r
        # 2. In-Memory Distributed Cache (Redis simulation)\r
        self.redis_cache: dict[str, StudentRecord] = {}\r
        # 3. Metrics\r
        self.cache_hits = 0\r
        self.cache_misses = 0\r
\r
    def handle_admission_write(self, sid: str, name: str, campus: str, fee: float) -> str:\r
        """Write path: Writes to Master DB and evicts stale cache."""\r
        record = StudentRecord(sid, name, campus, fee)\r
        self.master_db[sid] = record\r
        self.redis_cache.pop(sid, None)  # Evict stale cache key\r
        return f"Enrolled {name} ({sid}) in Primary Master DB."\r
\r
    def handle_profile_read(self, sid: str) -> StudentRecord:\r
        """Read path: Cache-Aside pattern."""\r
        if sid in self.redis_cache:\r
            self.cache_hits += 1\r
            return self.redis_cache[sid]\r
\r
        # Cache Miss\r
        self.cache_misses += 1\r
        if sid not in self.master_db:\r
            raise KeyError(f"Student {sid} not found in database.")\r
        \r
        record = self.master_db[sid]\r
        self.redis_cache[sid] = record\r
        return record\r
\r
def test_distributed_system_design():\r
    print("   [...] Running Institutional Distributed System Architecture Test...")\r
    backend = DistributedInstitutionalBackend()\r
\r
    # 1. Write student to master DB\r
    msg = backend.handle_admission_write("STU_BP_01", "Mamata", "Barrackpore", 25000.0)\r
    assert "Enrolled Mamata" in msg\r
    print("   [PASS] 1. Admission write committed to Master DB & Cache invalidated")\r
\r
    # 2. First Read -> Cache Miss\r
    s1 = backend.handle_profile_read("STU_BP_01")\r
    assert s1.name == "Mamata"\r
    assert backend.cache_misses == 1 and backend.cache_hits == 0\r
    print("   [PASS] 2. First read populated Redis cache (Cache Miss)")\r
\r
    # 3. 500 subsequent reads -> Cache Hits\r
    for _ in range(500):\r
        backend.handle_profile_read("STU_BP_01")\r
    assert backend.cache_hits == 500\r
    print(f"   [PASS] 3. 500 queries served directly from Redis cache ({backend.cache_hits} hits / 1 miss)")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Distributed Backend Architecture")\r
    print("=" * 80)\r
\r
    test_distributed_system_design()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Combining stateless load balancing, Redis Cache-Aside, and")\r
    print("           primary-replica database partitioning powers enterprise backends.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 6: SYSTEM DESIGN BASICS FOR PYTHON BACKENDS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DISTRIBUTED ARCHITECTURE PATTERNS\r
--------------------------------------------------------------------------------\r
  1. Stateless Application Tier:\r
     - No user session data stored in Python process memory\r
     - Sessions externalized to Redis / Key-Value store\r
     - Enables adding/removing server instances behind a Load Balancer seamlessly\r
\r
  2. Caching Strategies:\r
     - Cache-Aside (Lazy Loading): App checks cache -> on miss, reads DB -> populates cache\r
     - Write-Through: App writes to cache and DB simultaneously\r
     - Write-Behind (Write-Back): App writes to cache -> background worker syncs to DB\r
\r
  3. Rate Limiting:\r
     - Token Bucket: Refills tokens at constant rate; bursts allowed up to bucket capacity\r
     - Sliding Window Counter: Smoothes out boundary traffic spikes\r
\r
--------------------------------------------------------------------------------\r
2. DATABASE SCALING & ASYNC QUEUES\r
--------------------------------------------------------------------------------\r
  - Read Replicas: Master handles writes (INSERT/UPDATE), Replicas handle reads (SELECT)\r
  - Connection Pooling: Pre-allocated persistent DB connections (SQLAlchemy / pgbouncer)\r
  - Task Queues: Decouple slow operations (PDF generation, SMS alerts) with Celery + Redis\r
\r
--------------------------------------------------------------------------------\r
3. THE CAP THEOREM\r
--------------------------------------------------------------------------------\r
  In a distributed network partition (P), you must choose between:\r
  - Consistency (C): Every read receives the most recent write or an error\r
  - Availability (A): Every non-failing node returns a response, but may be stale\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 6: SYSTEM DESIGN BASICS\r
================================================================================\r
`,T=[{question:"What is the fundamental difference between Vertical Scaling and Horizontal Scaling?",shortAnswer:"Vertical Scaling (Scale-Up) increases CPU, RAM, or disk capacity on a single machine (limited by hardware ceilings and single-point-of-failure); Horizontal Scaling (Scale-Out) adds multiple commodity server instances behind a load balancer, providing near-infinite elastic scale and high availability.",explanation:"Scaling paradigms in distributed backend systems.",hint:"Vertical = bigger machine; Horizontal = more machines behind a load balancer.",level:"basic",codeExample:`# Vertical: upgrade from 8GB to 64GB RAM
# Horizontal: run 10 stateless Gunicorn instances behind NGINX`},{question:"Why must Python web backend instances be 'Stateless' to achieve horizontal scalability?",shortAnswer:"Stateless servers do not store client session data or state in local process memory, allowing any random incoming request to be routed to any backend server instance without session loss; user sessions and state are externalized into shared distributed stores like Redis or Memcached.",explanation:"Statelessness as the foundation of elastic scaling.",hint:"Allows any server to handle any request by storing sessions externally in Redis.",level:"basic",codeExample:"# Sessions stored in Redis key-value store, not server RAM"},{question:"How does the 'Cache-Aside' (Lazy Loading) pattern work?",shortAnswer:"The application first checks the cache for the requested key; on a cache hit, it returns data immediately; on a cache miss, it queries the database, writes the result to the cache with a TTL, and returns the response to the client.",explanation:"The standard Cache-Aside lazy loading pattern.",hint:"Check cache -> on miss, read DB -> populate cache -> return data.",level:"basic",codeExample:`val = cache.get(key)
if not val:
    val = db.fetch(key)
    cache.set(key, val, ttl=300)`},{question:"What is a 'Cache Stampede' (Thundering Herd) and how is it prevented?",shortAnswer:"A Cache Stampede occurs when a high-traffic cache key expires, causing hundreds of concurrent requests to experience a cache miss simultaneously and hammer the underlying database; it is prevented using distributed mutex locks, probabilistic early expiration (XFetch), or background cache warmers.",explanation:"Cache stampede mitigation in high-traffic backends.",hint:"Simultaneous DB hit on cache expiration; prevented via mutex locks or background pre-refresh.",level:"complex",codeExample:"# Acquire distributed lock to allow only 1 process to regenerate cache"},{question:"How does the 'Token Bucket' rate limiting algorithm operate?",shortAnswer:"A bucket holds a maximum capacity of tokens, refilled at a constant rate per second; each incoming request consumes one token; if tokens are available, the request is allowed; if empty, the request is rejected with HTTP 429 Too Many Requests. It accommodates burst traffic smoothly.",explanation:"Token bucket rate limiting mechanics.",hint:"Tokens refill at constant rate; requests consume tokens; allows controlled bursts up to capacity.",level:"moderate",codeExample:`if bucket.consume(1): process_request()
else: return 429 # Rate limited`},{question:"What are Database Read Replicas and how do they scale database operations?",shortAnswer:"Read Replicas are synchronized read-only copies of the primary database; write operations (INSERT/UPDATE/DELETE) go to the primary master, while read queries (SELECT) are distributed across read replicas, removing read bottlenecks from the master.",explanation:"Primary-replica database scaling topology.",hint:"Master handles writes, read-only replicas handle high-volume SELECT queries.",level:"basic",codeExample:`# Master DB: Writes (Transfers, Admissions)
# Replica DBs: Reads (Transcripts, Student search)`},{question:"What is Database Connection Pooling (e.g. SQLAlchemy Pool / PgBouncer) and why is it essential?",shortAnswer:"Opening TCP connections and authenticating with a database for every incoming HTTP request is slow and memory-intensive; connection pooling maintains a warm pool of pre-established reusable database connections, slashing request latency and preventing DB connection exhaustion.",explanation:"Connection pooling latency reduction and resource defense.",hint:"Maintains a pool of reusable connections to avoid TCP handshake overhead on every request.",level:"basic",codeExample:"engine = create_engine('postgresql://...', pool_size=20, max_overflow=10)"},{question:"What is an Asynchronous Background Task Queue (e.g. Celery + Redis / RabbitMQ)?",shortAnswer:"A distributed job queue that offloads slow, compute-heavy, or non-blocking operations (such as generating PDF invoices, sending bulk admission emails, or encoding video) away from the HTTP request-response cycle to background worker processes.",explanation:"Asynchronous task offloading via message queues.",hint:"Offloads slow tasks (PDF generation, emails) to background workers so HTTP endpoints return instantly.",level:"basic",codeExample:`@celery.task
def send_admission_email(sid): ...
send_admission_email.delay('STU_01')`},{question:"What are the core tradeoffs stated by the CAP Theorem in distributed databases?",shortAnswer:"The CAP Theorem states that in the event of a network Partition (P), a distributed system can guarantee either Consistency (C - all nodes see the same data simultaneously) OR Availability (A - every non-failing node returns a response, though possibly stale), but never both simultaneously.",explanation:"CAP theorem consistency vs availability tradeoffs under partition.",hint:"Under network partition (P), you must choose between Consistency (C) and Availability (A).",level:"moderate",codeExample:`# CP System: Bank ledgers (reject write if partition occurs)
# AP System: Social feeds (return stale feed during partition)`},{question:"What is 'Consistent Hashing' and why is it used in distributed caching (e.g. Memcached / Cassandra)?",shortAnswer:"Consistent Hashing maps both keys and server nodes onto a virtual 360-degree hash ring; when a node is added or removed, only K/N keys need to be remapped on average (compared to traditional modulo hashing where nearly all keys are invalidated).",explanation:"Consistent hashing for minimal key remapping during cluster resizing.",hint:"Maps nodes & keys onto a hash ring so adding/removing nodes remaps minimal keys.",level:"complex",codeExample:"# Consistent Hashing: Minimizes cache misses when cache servers scale up/down"},{question:"What is an 'API Gateway' (e.g. Kong, NGINX, Traefik)?",shortAnswer:"A reverse proxy entry point sitting between external clients and internal microservices that handles cross-cutting concerns: SSL termination, authentication/JWT validation, rate limiting, request routing, and load balancing.",explanation:"API Gateway pattern and centralized cross-cutting concerns.",hint:"Centralized entrypoint handling SSL, auth, rate limiting, and reverse proxy routing.",level:"basic",codeExample:"# Client -> API Gateway (Auth & Rate Limit) -> Python Backend Services"},{question:"What is the difference between Write-Through and Write-Behind (Write-Back) caching?",shortAnswer:"Write-Through updates the cache and database synchronously (high consistency, higher write latency); Write-Behind updates the cache immediately and enqueues the database write asynchronously in the background (ultra-fast writes, risk of data loss on sudden power failure).",explanation:"Write-through vs write-behind caching strategies.",hint:"Write-Through updates DB synchronously; Write-Behind updates cache first and DB asynchronously.",level:"moderate",codeExample:"# Write-Through: Safe & consistent | Write-Behind: Maximum write throughput"},{question:"What is 'Database Sharding' (Horizontal Partitioning)?",shortAnswer:"Database Sharding splits large database tables across multiple independent physical database instances based on a shard key (e.g. student ID hash or geographical campus region), scaling storage and write throughput beyond single-machine limits.",explanation:"Horizontal database partitioning via shard keys.",hint:"Splitting data across multiple physical databases using a shard key.",level:"moderate",codeExample:"# Shard 1: Barrackpore & Kolkata (North) | Shard 2: Jadavpur (South)"},{question:"What is the 'Circuit Breaker' pattern in distributed microservices?",shortAnswer:"A stability pattern that wraps remote service calls; if downstream failures exceed a threshold, the circuit 'trips open' immediately failing subsequent requests without calling the dead dependency, preventing cascading cascading failures and allowing the downstream service to recover.",explanation:"Cascading failure prevention via Circuit Breaker.",hint:"Trips open when downstream service fails, returning fallback errors and preventing cascading crashes.",level:"moderate",codeExample:"# Closed (Normal) -> Open (Fast Fail) -> Half-Open (Testing Recovery)"},{question:"What is 'Idempotency' in REST APIs and why is it critical for payment and admission endpoints?",shortAnswer:"An operation is idempotent if performing it multiple times produces the exact same system state as performing it once; using unique 'Idempotency-Key' headers ensures that accidental duplicate form submissions or network retries do not charge a student's card twice.",explanation:"Idempotent API design for reliable transactions.",hint:"Guarantees that repeated requests (e.g. retried payments) produce the exact same outcome.",level:"moderate",codeExample:"# Header: Idempotency-Key: req_bp_2026_042 (Replay returns cached receipt)"},{question:"What is 'Content Delivery Network' (CDN) caching?",shortAnswer:"A geographically distributed network of proxy edge servers that caches static assets (images, CSS, JS, video) close to end users, reducing latency and offloading up to 90% of traffic from backend origin servers.",explanation:"Edge caching and latency reduction via CDNs.",hint:"Caches static assets at edge locations close to users, reducing origin server load.",level:"basic",codeExample:"# Cloudflare / CloudFront caching static images and JS bundles"},{question:"What is the difference between Load Balancing algorithms: Round Robin vs Least Connections?",shortAnswer:"Round Robin distributes requests sequentially across servers in order (best when requests have uniform processing time); Least Connections routes requests to the server currently handling the fewest active connections (best for long-lived WebSocket or variable compute requests).",explanation:"Load balancing scheduling algorithms.",hint:"Round Robin rotates sequentially; Least Connections picks the least busy server.",level:"basic",codeExample:"# Round Robin: Server 1 -> 2 -> 3 -> 1 | Least Connections: server with min active load"},{question:"How do you handle Distributed Transactions across independent microservices?",shortAnswer:"Using the Saga Pattern (orchestrated or choreographed series of local transactions with compensating rollback actions) or Eventual Consistency via message brokers, avoiding heavyweight 2-Phase Commit (2PC) bottlenecks.",explanation:"Distributed transaction patterns (Sagas & compensating actions).",hint:"Use Saga Pattern with compensating rollback transactions instead of 2-Phase Commit.",level:"complex",codeExample:"# Saga: EnrollStudent -> DeductBalance (Fail) -> Compensate: UnenrollStudent"},{question:"What is 'Database Indexing' and what are the trade-offs of adding too many indexes?",shortAnswer:"Indexes (B-Trees / Hash) dramatically accelerate SELECT query filtering and joins from O(n) table scans to O(log n); however, every index slows down INSERT, UPDATE, and DELETE operations because all index trees must be synchronously updated on every mutation.",explanation:"B-Tree indexing speedups vs write amplification trade-off.",hint:"Accelerates SELECT queries to O(log n), but adds write overhead to INSERTs/UPDATEs.",level:"basic",codeExample:"CREATE INDEX idx_student_campus ON students(campus);"},{question:"What is the ultimate golden rule of backend system design in Python?",shortAnswer:"Keep application servers stateless behind load balancers, cache aggressively with Cache-Aside + TTLs, offload slow I/O to background task queues (Celery/Redis), rate-limit incoming endpoints, and use connection pooling for persistent databases.",explanation:"The complete enterprise Python backend system design standard.",hint:"Stateless app tier + Redis caching + Celery task queues + DB connection pooling + Rate limiting.",level:"basic",codeExample:"# Enterprise Python Backend System Design Standard"}];function q(){const f=x.useRef([]),[n,u]=x.useState("systemTopology"),[r,b]=x.useState("NORMAL");let i="1,000 req/sec",o="3 Stateless Instances",l="98.5% (Redis)",d="12% CPU (Master + 2 Replicas)",c="0 requests throttled (Normal)";r==="NORMAL"?(i="1,200 req/sec",o="3 Stateless Gunicorn Instances",l="98.5% (Redis Cluster)",d="14% CPU (Master Writes + Replicas)",c="0 requests throttled (Normal flow)"):r==="PEAK"?(i="45,000 req/sec",o="18 Auto-Scaled Pods (Kubernetes)",l="99.4% (Cache-Aside + Mutex Lock)",d="48% CPU (Read Replicas Absorb Queries)",c="120 abusive IPs throttled (Token Bucket)"):r==="SURGE"&&(i="250,000 req/sec",o="60 Max Auto-Scaled Instances",l="99.8% (Edge CDN + Redis Cluster)",d="72% CPU (Celery Queue Buffers Writes)",c="14,500 brute-force calls dropped (HTTP 429)"),x.useEffect(()=>{const t=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(h=>{h&&t.observe(h)}),()=>t.disconnect()},[]);const s=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["System Design Basics for ",e.jsx("span",{className:"text-teal-400",children:"Python Backends"})]}),e.jsx("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:"Master the architectural foundations of highly scalable, fault-tolerant Python distributed backend systems: stateless application server tiers behind load balancers (Round Robin, Least Connections), Cache-Aside lazy loading with Redis, defending against Thundering Herd cache stampedes, Token Bucket rate limiting, database scaling with Read Replicas and Connection Pooling, asynchronous task queues with Celery, and CAP Theorem tradeoffs."}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚖️ Horizontal Load Balancing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Redis Cache-Aside & Stampede Defense"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Token Bucket Rate Limiting"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 Read Replicas & CAP Theorem"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Distributed Python Backend Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Designing backend architectures capable of scaling from 1,000 to 1,000,000 users relies on modular, decoupled components:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Stateless App Tier"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Load Balancers + NGINX"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Zero session state in server RAM; sessions externalized to Redis, allowing seamless elastic auto-scaling."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Caching & Stampede"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Cache-Aside + Mutex"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Redis in-memory caching with TTLs and distributed locks preventing database overload when popular keys expire."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ API Rate Limiting"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Token Bucket (HTTP 429)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Protects backend endpoints from denial-of-service surges, brute force attacks, and runaway scrapers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Async Task Queues"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Celery + RabbitMQ/Redis"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Offloads slow tasks (PDF generation, bulk emails, payment webhooks) to background workers for instant API responses."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The CAP Theorem in a Nutshell"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When network partitions (P) occur in distributed databases, you must choose between ",e.jsx("span",{className:"text-teal-300 font-bold",children:"Consistency (C)"})," (all nodes return exact latest state or fail) vs ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"Availability (A)"})," (all nodes respond immediately, though possibly with slightly stale data). Financial ledgers pick CP; social feeds pick AP."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Multi-Tier Topologies, Cache Flows & CAP Theorem"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("systemTopology"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="systemTopology"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Multi-Tier Distributed Topology"}),e.jsx("button",{onClick:()=>u("cacheFlow"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="cacheFlow"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cache-Aside & Stampede Defense"}),e.jsx("button",{onClick:()=>u("capMatrix"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="capMatrix"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"CAP Theorem Tradeoff Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining edge reverse proxies, stateless app clusters, distributed in-memory caches, and database replication:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="systemTopology"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"HIGH-CONCURRENCY DISTRIBUTED PYTHON BACKEND TOPOLOGY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"15",y:"25",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Tier 1: Edge & Gateway"}),e.jsx("rect",{x:"10",y:"45",width:"140",height:"50",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"65",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Clients / Mobile Apps"}),e.jsx("text",{x:"15",y:"80",fill:"#bae6fd",fontSize:"8",children:"HTTPS / WebSockets"}),e.jsx("rect",{x:"10",y:"115",width:"140",height:"105",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"135",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"NGINX / API Gateway"}),e.jsx("text",{x:"15",y:"152",fill:"#e0f2fe",fontSize:"8",children:"• SSL Termination"}),e.jsx("text",{x:"15",y:"169",fill:"#e0f2fe",fontSize:"8",children:"• Token Bucket Rate Limit"}),e.jsx("text",{x:"15",y:"186",fill:"#e0f2fe",fontSize:"8",children:"• Round Robin Routing"})]}),e.jsx("path",{d:"M 200 160 L 230 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(240, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"25",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Tier 2: Stateless App Pods"}),e.jsx("rect",{x:"10",y:"45",width:"200",height:"48",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"65",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Gunicorn 1 (Barrackpore)"}),e.jsx("text",{x:"15",y:"80",fill:"#ccfbf1",fontSize:"8",children:"Uvicorn ASGI Workers"}),e.jsx("rect",{x:"10",y:"105",width:"200",height:"48",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"125",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Gunicorn 2 (Kolkata)"}),e.jsx("text",{x:"15",y:"140",fill:"#ccfbf1",fontSize:"8",children:"Uvicorn ASGI Workers"}),e.jsx("rect",{x:"10",y:"165",width:"200",height:"48",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"185",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Gunicorn 3 (Ichapur)"}),e.jsx("text",{x:"15",y:"200",fill:"#86efac",fontSize:"8",children:"Auto-Scaled Cluster ✅"})]}),e.jsx("path",{d:"M 470 160 L 500 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(510, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"235",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"15",y:"25",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Tier 3: Cache & Queue"}),e.jsx("rect",{x:"10",y:"45",width:"140",height:"80",rx:"4",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"15",y:"65",fill:"#e0e7ff",fontSize:"9",fontWeight:"bold",children:"Redis Cache Cluster"}),e.jsx("text",{x:"15",y:"82",fill:"#c7d2fe",fontSize:"8",children:"• Sub-millisecond reads"}),e.jsx("text",{x:"15",y:"99",fill:"#c7d2fe",fontSize:"8",children:"• Externalized Sessions"}),e.jsx("text",{x:"15",y:"116",fill:"#86efac",fontSize:"8",children:"99% Hit Ratio ✅"}),e.jsx("rect",{x:"10",y:"140",width:"140",height:"80",rx:"4",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"15",y:"160",fill:"#e0e7ff",fontSize:"9",fontWeight:"bold",children:"Celery Workers"}),e.jsx("text",{x:"15",y:"177",fill:"#c7d2fe",fontSize:"8",children:"• Background Invoices"}),e.jsx("text",{x:"15",y:"194",fill:"#c7d2fe",fontSize:"8",children:"• SMS/Email Notifications"})]}),e.jsx("path",{d:"M 680 160 L 710 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(720, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"130",height:"235",rx:"6",fill:"#1e293b",stroke:"#64748b"}),e.jsx("text",{x:"10",y:"25",fill:"#f8fafc",fontSize:"10",fontWeight:"bold",children:"Tier 4: DB Layer"}),e.jsx("rect",{x:"10",y:"45",width:"110",height:"75",rx:"4",fill:"#0f172a",stroke:"#3b82f6"}),e.jsx("text",{x:"15",y:"65",fill:"#60a5fa",fontSize:"8",fontWeight:"bold",children:"Primary Master"}),e.jsx("text",{x:"15",y:"80",fill:"#93c5fd",fontSize:"7",children:"Writes & Transactions"}),e.jsx("text",{x:"15",y:"100",fill:"#86efac",fontSize:"7",children:"ACID Strict ✅"}),e.jsx("rect",{x:"10",y:"135",width:"110",height:"85",rx:"4",fill:"#0f172a",stroke:"#10b981"}),e.jsx("text",{x:"15",y:"155",fill:"#34d399",fontSize:"8",fontWeight:"bold",children:"Read Replicas"}),e.jsx("text",{x:"15",y:"170",fill:"#6ee7b7",fontSize:"7",children:"Sync Replication"}),e.jsx("text",{x:"15",y:"187",fill:"#6ee7b7",fontSize:"7",children:"High-Volume Queries"})]})]}):n==="cacheFlow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CACHE-ASIDE LAZY LOADING PATTERN & MUTEX STAMPEDE DEFENSE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"230",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Read Request"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"val = redis.get(key)"}),e.jsx("text",{x:"35",y:"115",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Case A: Cache Hit (98%)"}),e.jsx("text",{x:"35",y:"132",fill:"#bae6fd",fontSize:"8",children:"Return sub-ms response instantly"}),e.jsx("text",{x:"35",y:"160",fill:"#fca5a5",fontSize:"8",fontWeight:"bold",children:"Case B: Cache Miss (2%)"}),e.jsx("text",{x:"35",y:"177",fill:"#bae6fd",fontSize:"8",children:"Proceed to Mutex Lock ➔"})]}),e.jsx("path",{d:"M 295 125 L 325 125",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(335, 50)",children:[e.jsx("rect",{x:"0",y:"35",width:"220",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. Stampede Mutex Lock"}),e.jsx("text",{x:"15",y:"85",fill:"#ccfbf1",fontSize:"8",children:"Acquire distributed lock:"}),e.jsx("text",{x:"15",y:"105",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"with lock.acquire(key):"}),e.jsx("text",{x:"15",y:"130",fill:"#ccfbf1",fontSize:"8",children:"• Only 1 process queries DB"}),e.jsx("text",{x:"15",y:"150",fill:"#ccfbf1",fontSize:"8",children:"• Other 999 requests wait"}),e.jsx("text",{x:"15",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Prevents DB Crash ✅"})]}),e.jsx("path",{d:"M 565 125 L 595 125",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(605, 50)",children:[e.jsx("rect",{x:"0",y:"35",width:"215",height:"180",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"15",y:"60",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"3. Fetch & Re-populate"}),e.jsx("text",{x:"15",y:"85",fill:"#c7d2fe",fontSize:"8",fontFamily:"monospace",children:"data = db.query(key)"}),e.jsx("text",{x:"15",y:"105",fill:"#c7d2fe",fontSize:"8",fontFamily:"monospace",children:"redis.setex(key, 300, data)"}),e.jsx("text",{x:"15",y:"135",fill:"#e0e7ff",fontSize:"8",children:"Sets 5-minute TTL."}),e.jsx("text",{x:"15",y:"155",fill:"#e0e7ff",fontSize:"8",children:"Releases lock."}),e.jsx("text",{x:"15",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Cache Warm & Ready ✅"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE CAP THEOREM DISTRIBUTED TRADEOFF MATRIX"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"35",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1. CP (Consistency + Partition)"}),e.jsx("text",{x:"35",y:"85",fill:"#ccfbf1",fontSize:"8",children:"• Strict Data Correctness"}),e.jsx("text",{x:"35",y:"105",fill:"#ccfbf1",fontSize:"8",children:"• Rejects writes on network split"}),e.jsx("text",{x:"35",y:"125",fill:"#a7f3d0",fontSize:"8",children:"• Examples: PostgreSQL, Redis, HBase"}),e.jsx("text",{x:"35",y:"150",fill:"#fde047",fontSize:"8",children:"• Use: Student Fee & Ledger Transfers"}),e.jsx("text",{x:"35",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Zero Balance Inconsistencies ✅"}),e.jsx("rect",{x:"290",y:"35",width:"240",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"300",y:"60",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"2. AP (Availability + Partition)"}),e.jsx("text",{x:"300",y:"85",fill:"#bae6fd",fontSize:"8",children:"• 100% Uptime Guaranteed"}),e.jsx("text",{x:"300",y:"105",fill:"#bae6fd",fontSize:"8",children:"• Eventual Consistency"}),e.jsx("text",{x:"300",y:"125",fill:"#bae6fd",fontSize:"8",children:"• Examples: Cassandra, DynamoDB, DNS"}),e.jsx("text",{x:"300",y:"150",fill:"#fde047",fontSize:"8",children:"• Use: Campus Noticeboard & Social"}),e.jsx("text",{x:"300",y:"195",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Never Drops Client Traffic ✅"}),e.jsx("rect",{x:"555",y:"35",width:"240",height:"180",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"565",y:"60",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"3. CA (Single Node Only)"}),e.jsx("text",{x:"565",y:"85",fill:"#fecdd3",fontSize:"8",children:"• Consistency + Availability"}),e.jsx("text",{x:"565",y:"105",fill:"#fca5a5",fontSize:"8",children:"• Impossible in Distributed Networks!"}),e.jsx("text",{x:"565",y:"125",fill:"#fecdd3",fontSize:"8",children:"• Only exists on single monolithic DB"}),e.jsx("text",{x:"565",y:"150",fill:"#fb7185",fontSize:"8",children:"• Network partitions are inevitable"}),e.jsx("text",{x:"565",y:"195",fill:"#fb7185",fontSize:"8",fontWeight:"bold",children:"Not Fault Tolerant ⚠️"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive High-Concurrency Traffic & Scaling Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust incoming traffic loads to observe automatic worker pod scaling, Redis cache hit efficiencies, and Token Bucket rate limiting throttling:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Simulation Traffic Scenario:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[{id:"NORMAL",label:"Normal Daily Load (1k RPS)",desc:"Standard multi-campus operations"},{id:"PEAK",label:"Admission Surge (45k RPS)",desc:"Merit result publishing day"},{id:"SURGE",label:"DDoS Surge (250k RPS)",desc:"Brute-force attack & massive traffic"}].map(t=>e.jsxs("button",{onClick:()=>b(t.id),className:a("p-3 rounded-xl border text-left transition-all",r===t.id?t.id==="SURGE"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono mt-0.5",children:t.desc})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-3.5 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-[11px] text-teal-400 font-medium mb-1",children:"Throughput Rate"}),e.jsx("div",{className:"text-lg font-bold font-mono text-teal-300",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3.5 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-[11px] text-cyan-400 font-medium mb-1",children:"Active Backend Pods"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300",children:o})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3.5 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-[11px] text-purple-400 font-medium mb-1",children:"Cache Hit Ratio"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3.5 rounded-xl border border-amber-900/50",children:[e.jsx("div",{className:"text-[11px] text-amber-400 font-medium mb-1",children:"Database CPU Load"}),e.jsx("div",{className:"text-xs font-bold font-mono text-amber-300",children:d})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300 font-bold",children:"API Gateway Token Bucket Filter:"}),e.jsx("span",{className:a("px-2.5 py-1 rounded font-semibold",r==="SURGE"?"bg-rose-950 text-rose-300 border border-rose-800":"bg-emerald-950 text-emerald-300 border border-emerald-800"),children:c})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Distributed Backend Engines"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade system design labs covering load balancing algorithms, Cache-Aside with stampede protection, Token Bucket rate limiting, and the complete institutional distributed backend case study:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Load Balancing & Stateless Worker Dispatch"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Implementing Round Robin and Least Connections request distribution across multi-campus stateless backend instances."})]}),e.jsx(m,{fileModule:w,title:"horizontal_scaling_stateless_architecture.py",highlightLines:[18,30,44,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Cache-Aside Pattern, TTL Invalidation & Mutex Stampede Defense"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Defending databases against Thundering Herd spikes using distributed mutex locking and automatic TTL expiration."})]}),e.jsx(m,{fileModule:_,title:"caching_strategies_and_invalidation.py",highlightLines:[20,36,52,68]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Token Bucket Rate Limiting Algorithm & Throttling"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Thread-safe Token Bucket algorithm accommodating traffic bursts while throttling abusive requests with HTTP 429."})]}),e.jsx(m,{fileModule:S,title:"rate_limiting_and_token_bucket.py",highlightLines:[12,22,34,46]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Institutional Distributed Backend Hub Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"End-to-end backend architecture coordinating master write pathways, cache invalidation, and 500+ cached queries for Mamata across Barrackpore and Kolkata."})]}),e.jsx(m,{fileModule:v,title:"institutional_distributed_backend_case_study.py",highlightLines:[18,30,48,62]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Backend System Design Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Stateful Application Servers"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Storing user login sessions in server RAM breaks horizontal auto-scaling and drops user logins when servers restart."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: global_sessions[user_id] = session",`
`,"# BEST PRACTICE: Store in Redis Key-Value Store"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Unbounded Cache Without TTL"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing items into in-memory caches without TTLs or eviction policies causes Redis to run out of memory (OOM crash)."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: redis.set(key, val) (No TTL!)",`
`,"# BEST PRACTICE: redis.setex(key, 300, val)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Direct Database Hits on Every Request"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Querying the SQL database for static data (like course catalogs) on every HTTP request brings the master DB down during traffic spikes."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use Cache-Aside pattern + Read Replicas"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Synchronous Heavy I/O in HTTP Handlers"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Generating 50-page PDF invoices inside the HTTP request handler blocks web worker threads from processing incoming traffic."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Offload to Celery: generate_pdf_task.delay(sid)"})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Backend System Design Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Keep Web Servers Stateless:"})," Externalize all session tokens and cache keys to Redis or Memcached."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Implement Cache-Aside with Mutex:"})," Prevent Thundering Herd database crashes on cache misses."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Rate-Limit Gateway Endpoints:"})," Use Token Bucket algorithms to protect APIs from abuse and DoS attacks."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Asynchronous Task Offloading:"})," Use Celery workers to handle slow I/O and PDF generation."]})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(y,{title:"System Design & Scalable Python Backends FAQs",questions:T})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(g,{content:j,title:"Topic 6: System Design Basics for Python Backends Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(k,{note:"Building software that works for 10 users is easy; building software that maintains sub-millisecond response times during a 50,000-student admission surge requires rigorous system design. In our institutional multi-campus architecture across Barrackpore, Kolkata, Ichapur, and Jadavpur, combining stateless Gunicorn workers, Redis Cache-Aside, Token Bucket rate limiting, and primary-replica database replication guarantees that Mamata, Mahima, and Susmita can check merit rankings and settle tuition fees instantly without system downtime."})})]})]})}export{q as default};

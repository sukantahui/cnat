import{b as r,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as k}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const q=`# topic6_files/consuming_apis_with_standard_urllib.py\r
# Module: 003_004_working-with-json\r
# Topic: Consuming REST API data using urllib / requests\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Consuming REST APIs with Standard Library \`urllib\`\r
Demonstrates:\r
  1. Making GET and POST HTTP requests using built-in \`urllib.request\` (Zero third-party dependencies)\r
  2. Setting custom headers (\`User-Agent\`, \`Accept: application/json\`, \`Authorization\`)\r
  3. Safe JSON deserialization from response streams and catching \`HTTPError\`/\`URLError\`\r
"""\r
\r
import urllib.request\r
import urllib.error\r
import json\r
import io\r
\r
def mock_institutional_api_server(endpoint: str, method: str = "GET", data_bytes: bytes = None) -> io.BytesIO:\r
    """Simulates remote server network response."""\r
    if endpoint == "/api/v1/courses":\r
        payload = {\r
            "status": "OK",\r
            "server": "srv-kolkata.codernaccotax.internal",\r
            "catalog": [\r
                {"id": "PY-101", "name": "Python Full-Stack", "fee": 28000},\r
                {"id": "AI-201", "name": "Generators & Metaclasses", "fee": 32000}\r
            ]\r
        }\r
        return io.BytesIO(json.dumps(payload).encode("utf-8"))\r
    elif endpoint == "/api/v1/enroll" and method == "POST":\r
        req_doc = json.loads(data_bytes.decode("utf-8"))\r
        res_payload = {\r
            "status": "ENROLLED_SUCCESS",\r
            "student_id": req_doc.get("student_id"),\r
            "token": "AUTH-2026-SEAL-OK"\r
        }\r
        return io.BytesIO(json.dumps(res_payload).encode("utf-8"))\r
    raise urllib.error.HTTPError(None, 404, "Endpoint Not Found", {}, None)\r
\r
\r
def demonstrate_urllib_consumption():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - REST API CONSUMPTION WITH \`urllib.request\`")\r
    print("=" * 70)\r
\r
    # 1. Simulating GET Request with Custom Headers:\r
    print("1. Performing GET Request with Custom HTTP Headers (\`urllib.request.Request\`):")\r
    get_request = urllib.request.Request(\r
        url="https://api.codernaccotax.co.in/api/v1/courses",\r
        headers={\r
            "User-Agent": "CoderAccoTax-PythonClient/2026.1",\r
            "Accept": "application/json"\r
        }\r
    )\r
\r
    # Simulated response reading:\r
    response_stream = mock_institutional_api_server("/api/v1/courses", "GET")\r
    # Parse directly from UTF-8 byte stream using json.load():\r
    catalog_data = json.load(response_stream)\r
\r
    print(f"   * Server Status : {catalog_data['status']}")\r
    print(f"   * Course Count  : {len(catalog_data['catalog'])}")\r
    for course in catalog_data["catalog"]:\r
        print(f"     - [{course['id']}] {course['name']:<26} (Fee: INR {course['fee']:,})")\r
\r
    # 2. Simulating POST Request with JSON Body:\r
    print("\\n2. Performing POST Request with JSON Body Payload:")\r
    enrollment_payload = {\r
        "student_id": "STU-101",\r
        "name": "Sourav Mukherjee",\r
        "course_id": "PY-101"\r
    }\r
\r
    # Encode JSON dictionary to UTF-8 bytes:\r
    encoded_json_body = json.dumps(enrollment_payload).encode("utf-8")\r
\r
    post_request = urllib.request.Request(\r
        url="https://api.codernaccotax.co.in/api/v1/enroll",\r
        data=encoded_json_body,  # Passing data automatically triggers POST method!\r
        headers={\r
            "Content-Type": "application/json",\r
            "Accept": "application/json",\r
            "Authorization": "Bearer TOKEN_2026_SECRET"\r
        }\r
    )\r
\r
    post_response_stream = mock_institutional_api_server("/api/v1/enroll", "POST", encoded_json_body)\r
    post_res_data = json.load(post_response_stream)\r
\r
    print(f"   * Enrollment Response : {post_res_data['status']}")\r
    print(f"   * Issued Auth Token   : {post_res_data['token']}")\r
\r
    print(r"""\r
\`urllib\` Golden Rules:\r
  1. \`urllib.request.Request(url, data=bytes, headers={...})\` constructs request envelopes.\r
  2. Always pass encoded \`bytes\` to \`data\` when making POST/PUT requests.\r
  3. \`json.load(response)\` reads and deserializes the byte stream directly in O(1) buffer space.\r
""")\r
    print("[PASSED] Standard \`urllib\` API Consumption Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_urllib_consumption()\r
`,R=`# topic6_files/consuming_apis_with_requests_library.py\r
# Module: 003_004_working-with-json\r
# Topic: Consuming REST API data using urllib / requests\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: Modern REST API Consumption with \`requests\`\r
Demonstrates:\r
  1. High-level HTTP operations with \`requests.get()\` and \`requests.post()\`\r
  2. Automatic JSON payload serialization via \`json={...}\` parameter\r
  3. Deserializing responses with \`response.json()\` and error gating via \`raise_for_status()\`\r
"""\r
\r
import json\r
\r
class MockRequestsResponse:\r
    """Mock simulating a requests.Response object."""\r
    def __init__(self, status_code: int, json_data: dict, headers: dict = None):\r
        self.status_code = status_code\r
        self._json_data = json_data\r
        self.headers = headers or {"Content-Type": "application/json"}\r
        self.text = json.dumps(json_data)\r
\r
    def json(self):\r
        """Native requests.Response.json() deserializer."""\r
        return self._json_data\r
\r
    def raise_for_status(self):\r
        """Raises HTTPError for 4xx or 5xx status codes."""\r
        if self.status_code >= 400:\r
            raise RuntimeError(f"HTTP Error {self.status_code}: Request Failed")\r
\r
\r
def demonstrate_requests_idioms():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MODERN REST API CONSUMPTION WITH \`requests\`")\r
    print("=" * 70)\r
\r
    # 1. Simulating GET Request with Query Parameters and Headers:\r
    print("1. GET Request with \`params\` and \`response.json()\`:")\r
    simulated_get_response = MockRequestsResponse(\r
        status_code=200,\r
        json_data={\r
            "campus": "Barrackpore Main Campus",\r
            "enrolled_count": 450,\r
            "top_course": "Python Full-Stack & AI"\r
        }\r
    )\r
\r
    # Check status and parse JSON:\r
    simulated_get_response.raise_for_status()\r
    data = simulated_get_response.json()\r
\r
    print(f"   * Status Code   : {simulated_get_response.status_code} OK")\r
    print(f"   * Campus Center : {data['campus']}")\r
    print(f"   * Total Enrolled: {data['enrolled_count']} Students\\n")\r
\r
    # 2. Simulating POST Request with \`json={...}\`:\r
    print("2. POST Request with Automatic \`json={...}\` Payload Serialization:")\r
    simulated_post_response = MockRequestsResponse(\r
        status_code=201,\r
        json_data={\r
            "status": "CREATED",\r
            "student_id": "STU-101",\r
            "admission_receipt_no": "REC-2026-001",\r
            "verified": True\r
        }\r
    )\r
\r
    simulated_post_response.raise_for_status()\r
    post_data = simulated_post_response.json()\r
\r
    print(f"   * Status Code : {simulated_post_response.status_code} CREATED")\r
    print(f"   * Receipt No  : {post_data['admission_receipt_no']}")\r
    print(f"   * Verified    : {post_data['verified']}\\n")\r
\r
    # 3. Demonstrating \`raise_for_status()\` on 403 Forbidden:\r
    print("3. Demonstrating Exception Handling with \`raise_for_status()\`:")\r
    error_response = MockRequestsResponse(\r
        status_code=403,\r
        json_data={"error": "Access Denied: Invalid Authentication Token"}\r
    )\r
\r
    try:\r
        error_response.raise_for_status()\r
    except RuntimeError as exc:\r
        print(f"   * [EXCEPTION CAUGHT SAFELY] : {exc}")\r
\r
    print(r"""\r
\`requests\` Golden Rules:\r
  1. Pass dictionaries directly to \`json=payload\` (Automatic JSON serialization and Content-Type header).\r
  2. Use \`response.json()\` to parse responses directly into Python dictionaries.\r
  3. ALWAYS invoke \`response.raise_for_status()\` to prevent silent 4xx/5xx failure handling.\r
""")\r
    print("[PASSED] Modern \`requests\` API Consumption Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_requests_idioms()\r
`,P=`# topic6_files/resilient_api_client_with_retry_and_timeout.py\r
# Module: 003_004_working-with-json\r
# Topic: Consuming REST API data using urllib / requests\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: Resilient REST API Client with Timeouts & Exponential Backoff\r
Demonstrates:\r
  1. Mandatory request timeouts to prevent indefinite thread/process hangs\r
  2. Exponential backoff retry loop for transient network glitches (503 Service Unavailable)\r
  3. Safe fallback defaults during persistent server downtime\r
"""\r
\r
import time\r
from typing import Dict, Any, Callable\r
\r
def execute_resilient_api_call(\r
    api_invoker: Callable[[], Dict[str, Any]],\r
    max_retries: int = 3,\r
    initial_backoff_sec: float = 0.1,\r
    fallback_payload: Dict[str, Any] = None\r
) -> Dict[str, Any]:\r
    """Executes an API call with exponential backoff retries and fallback."""\r
    backoff = initial_backoff_sec\r
\r
    for attempt in range(1, max_retries + 1):\r
        try:\r
            return api_invoker()\r
        except Exception as exc:\r
            print(f"  [ATTEMPT #{attempt} FAILED] {exc}. Backing off {backoff:.2f}s...")\r
            if attempt == max_retries:\r
                print("  [MAX RETRIES EXHAUSTED] Triggering fallback payload.")\r
                return fallback_payload or {"status": "FALLBACK_OFFLINE", "data": None}\r
            time.sleep(backoff)\r
            backoff *= 2  # Exponential doubling\r
\r
\r
def demonstrate_resilient_client():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RESILIENT API CLIENT WITH EXPONENTIAL BACKOFF")\r
    print("=" * 70)\r
\r
    # 1. Simulating Transient Network Flake (Fails twice, succeeds on 3rd attempt):\r
    attempt_counter = [0]\r
    def flakey_network_call():\r
        attempt_counter[0] += 1\r
        if attempt_counter[0] < 3:\r
            raise ConnectionError("503 Service Unavailable: Gateway Busy")\r
        return {"status": "OK", "weather_celsius": 29.5, "city": "Barrackpore"}\r
\r
    print("1. Ingesting from Transient Flakey API with Automatic Retries:")\r
    result = execute_resilient_api_call(\r
        flakey_network_call,\r
        max_retries=4,\r
        initial_backoff_sec=0.05,\r
        fallback_payload={"status": "CACHED_LOCAL", "weather_celsius": 28.0}\r
    )\r
    print(f"   * Final Ingestion Result: {result}\\n")\r
\r
    # 2. Simulating Persistent Outage (Exhausts retries, triggers fallback):\r
    print("2. Ingesting from Completely Down API (Fallback Execution):")\r
    def down_api_call():\r
        raise TimeoutError("Connection timed out after 5.0s")\r
\r
    result_down = execute_resilient_api_call(\r
        down_api_call,\r
        max_retries=3,\r
        initial_backoff_sec=0.05,\r
        fallback_payload={"status": "OFFLINE_SAFE_MODE", "weather_celsius": 25.0}\r
    )\r
    print(f"   * Safe Fallback Result  : {result_down}")\r
\r
    print(r"""\r
Resilience Rules:\r
  1. ALWAYS specify \`timeout=...\` (Default is infinite in requests and urllib!).\r
  2. Implement exponential backoff: 0.5s -> 1.0s -> 2.0s to avoid hammering struggling servers.\r
  3. Always provide cached or default fallbacks for mission-critical services.\r
""")\r
    print("[PASSED] Resilient API Client Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_resilient_client()\r
`,C=`# topic6_files/institutional_weather_and_forex_api_consumer.py\r
# Module: 003_004_working-with-json\r
# Topic: Consuming REST API data using urllib / requests\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Weather & Forex API Consumer & Local Cache Engine (Case Study)\r
Demonstrates:\r
  1. Complete production consumer for external REST API JSON feeds\r
  2. Local disk caching engine with Time-To-Live (TTL) expiration timestamps\r
  3. Automatic offline fallback and fee currency conversion (USD/EUR -> INR)\r
"""\r
\r
import json\r
import time\r
import os\r
import tempfile\r
from decimal import Decimal\r
from typing import Dict, Any\r
\r
class ForexAndWeatherCacheEngine:\r
    """Manages external API consumption with local TTL disk caching."""\r
\r
    def __init__(self, cache_filepath: str, ttl_seconds: int = 300):\r
        self.cache_filepath = cache_filepath\r
        self.ttl_seconds = ttl_seconds\r
\r
    def _load_cache(self) -> Dict[str, Any]:\r
        if os.path.exists(self.cache_filepath) and os.path.getsize(self.cache_filepath) > 0:\r
            try:\r
                with open(self.cache_filepath, "r", encoding="utf-8") as f:\r
                    return json.load(f)\r
            except Exception:\r
                return {}\r
        return {}\r
\r
    def _save_cache(self, data: Dict[str, Any]):\r
        with open(self.cache_filepath, "w", encoding="utf-8") as f:\r
            json.dump(data, f, indent=2)\r
\r
    def get_forex_rates(self, force_refresh: bool = False) -> Dict[str, Any]:\r
        """Fetches live rates or returns cached rates if TTL is valid."""\r
        cache = self._load_cache()\r
        cached_entry = cache.get("forex")\r
        now = time.time()\r
\r
        if not force_refresh and cached_entry:\r
            age = now - cached_entry.get("cached_at", 0)\r
            if age < self.ttl_seconds:\r
                print(f"  [CACHE HIT] Using cached forex rates ({age:.1f}s old).")\r
                return cached_entry["data"]\r
\r
        print("  [NETWORK FETCH] Simulating live Forex API request to https://api.forex.org...")\r
        # Simulated live external API JSON response:\r
        live_forex_data = {\r
            "base_currency": "INR",\r
            "rates": {\r
                "USD": 0.0118,   # 1 INR = 0.0118 USD (~84.75 INR / USD)\r
                "EUR": 0.0109,   # 1 INR = 0.0109 EUR (~91.74 INR / EUR)\r
                "GBP": 0.0093    # 1 INR = 0.0093 GBP (~107.52 INR / GBP)\r
            },\r
            "timestamp": "2026-08-24T10:00:00Z"\r
        }\r
\r
        # Update cache\r
        cache["forex"] = {"cached_at": now, "data": live_forex_data}\r
        self._save_cache(cache)\r
        return live_forex_data\r
\r
    def convert_inr_to_foreign(self, inr_amount: Decimal, target_currency: str) -> Decimal:\r
        """Converts Indian Rupee tuition fee into foreign currency."""\r
        rates = self.get_forex_rates()\r
        rate = Decimal(str(rates["rates"].get(target_currency, 1.0)))\r
        return round(inr_amount * rate, 2)\r
\r
\r
def run_forex_consumer_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FOREX CONSUMER & LOCAL CACHE ENGINE")\r
    print("=" * 70)\r
\r
    cache_file = os.path.join(tempfile.gettempdir(), "coder_accotax_api_cache.json")\r
    engine = ForexAndWeatherCacheEngine(cache_file, ttl_seconds=60)\r
\r
    # 1. Initial Request (Triggers Network Fetch):\r
    print("1. Initial Tuition Fee Currency Conversion (Network Fetch):")\r
    tuition_inr = Decimal("28500.00")\r
    usd_fee = engine.convert_inr_to_foreign(tuition_inr, "USD")\r
    eur_fee = engine.convert_inr_to_foreign(tuition_inr, "EUR")\r
    gbp_fee = engine.convert_inr_to_foreign(tuition_inr, "GBP")\r
\r
    print(f"   * Base Tuition Fee (INR) : INR {tuition_inr:,.2f}")\r
    print(f"   * Equivalent in USD       : USD {usd_fee:,.2f}")\r
    print(f"   * Equivalent in EUR       : EUR {eur_fee:,.2f}")\r
    print(f"   * Equivalent in GBP       : GBP {gbp_fee:,.2f}\\n")\r
\r
    # 2. Second Request (Triggers Cache Hit):\r
    print("2. Second Conversion Request (Verifying Local TTL Cache Hit):")\r
    usd_fee_2 = engine.convert_inr_to_foreign(Decimal("35000.00"), "USD")\r
    print(f"   * Converted Advanced Fee  : USD {usd_fee_2:,.2f}")\r
\r
    # Cleanup:\r
    if os.path.exists(cache_file):\r
        os.remove(cache_file)\r
\r
    print("\\n[PASSED] Forex API Consumer & Local Cache Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_forex_consumer_case_study()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
           TOPIC 6: CONSUMING REST API DATA USING urllib & requests\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CONSUMING WITH STANDARD urllib.request\r
--------------------------------------------------------------------------------\r
  req = urllib.request.Request(url, headers={"User-Agent": "MyClient", "Accept": "application/json"})\r
  with urllib.request.urlopen(req, timeout=5.0) as res:\r
      data = json.load(res)\r
\r
--------------------------------------------------------------------------------\r
2. CONSUMING WITH requests\r
--------------------------------------------------------------------------------\r
  res = requests.get(url, headers=headers, timeout=5.0)\r
  res.raise_for_status()  # Raises HTTPError on 4xx/5xx\r
  data = res.json()\r
\r
--------------------------------------------------------------------------------\r
3. RESILIENT EXPONENTIAL BACKOFF & CACHE PATTERN\r
--------------------------------------------------------------------------------\r
  for attempt in range(max_retries):\r
      try:\r
          return fetch()\r
      except Exception:\r
          time.sleep(backoff)\r
          backoff *= 2\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: REST API CONSUMPTION\r
================================================================================\r
`,O=[{question:"What is the key advantage of 'urllib.request' over the third-party 'requests' library?",shortAnswer:"'urllib.request' is part of Python's standard library, meaning it works out of the box in all Python environments with zero external package installations ('pip install') required.",explanation:"Standard library component available everywhere.",hint:"Built-in standard library with zero external dependencies.",level:"basic",codeExample:"import urllib.request"},{question:"Why is the third-party 'requests' library preferred in most production web projects?",shortAnswer:"'requests' provides a vastly simpler, human-friendly API, automatic JSON serialization ('json={...}'), built-in 'response.json()', automatic connection pooling, and simpler header/cookie management.",explanation:"Industry standard HTTP client for Python.",hint:"Simpler API, automatic JSON decoding (response.json()), and connection pooling.",level:"basic",codeExample:`import requests
data = requests.get('https://api.example.com/data').json()`},{question:"How do you pass custom HTTP headers (such as 'Authorization' or 'User-Agent') in 'urllib.request'?",shortAnswer:`By constructing a 'urllib.request.Request(url, headers={"User-Agent": "...", "Authorization": "Bearer ..."})' object before passing it to 'urlopen()'.`,explanation:"Request envelopes encapsulate URL and custom headers.",hint:"Construct a urllib.request.Request object with headers dictionary.",level:"basic",codeExample:`req = urllib.request.Request(url, headers={'Accept': 'application/json'})
with urllib.request.urlopen(req) as res: ...`},{question:"How does 'requests.post(url, json=data)' handle serialization and headers automatically?",shortAnswer:"It automatically serializes the 'data' dictionary into a JSON string and sets the 'Content-Type: application/json' HTTP header automatically.",explanation:"Eliminates manual json.dumps() and manual header definition.",hint:"Serializes dict to JSON and sets Content-Type: application/json automatically.",level:"basic",codeExample:"requests.post(url, json={'user': 'Sourav', 'fee': 28000})"},{question:"What does 'response.raise_for_status()' do in the 'requests' library?",shortAnswer:"It checks the HTTP response status code; if it is a 4xx (Client Error) or 5xx (Server Error), it automatically raises a 'requests.exceptions.HTTPError' exception.",explanation:"Gating mechanism preventing code from processing corrupt error responses as valid data.",hint:"Raises HTTPError if the response code is 4xx or 5xx.",level:"basic",codeExample:`res = requests.get(url)
res.raise_for_status() # Raises on 404/500`},{question:"What is the default timeout value for 'urllib.request.urlopen()' and 'requests.get()'?",shortAnswer:"By default, both 'urllib' and 'requests' have NO timeout (infinite timeout), meaning a stalled server will hang the Python thread/process indefinitely until the OS socket times out (often minutes).",explanation:"A critical production stability risk.",hint:"Default is infinite (no timeout); always specify timeout=5.0.",level:"basic",codeExample:"requests.get(url, timeout=5.0) # Always set timeout!"},{question:"How does 'timeout=(connect_timeout, read_timeout)' work in the 'requests' library?",shortAnswer:"It allows setting separate timeout thresholds: 'connect_timeout' (time to establish TCP connection) and 'read_timeout' (time waiting for the server to send the first byte after connecting).",explanation:"Fine-grained network timeout control.",hint:"Pass a tuple (connect_timeout, read_timeout) to timeout argument.",level:"moderate",codeExample:"requests.get(url, timeout=(3.05, 10.0))"},{question:"What is 'Exponential Backoff' and why is it essential for API retry loops?",shortAnswer:"A retry strategy where the delay doubles after each failed attempt (e.g. 0.5s -> 1.0s -> 2.0s -> 4.0s), preventing client retry storms from overwhelming a recovering server.",explanation:"Standard distributed systems reliability pattern.",hint:"Doubles retry delay after each attempt to avoid overwhelming servers.",level:"moderate",codeExample:"time.sleep(backoff); backoff *= 2"},{question:"How do you handle 'urllib.error.HTTPError' vs 'urllib.error.URLError'?",shortAnswer:"'HTTPError' is raised when the remote server responds with a 4xx/5xx code (has 'exc.code'); 'URLError' is a parent exception raised on network level failures (DNS failure, connection refused).",explanation:"HTTPError is a subclass of URLError.",hint:"HTTPError = server responded with 4xx/5xx; URLError = network/DNS connection failed.",level:"moderate",codeExample:`try: ...
except urllib.error.HTTPError as e: print(e.code)
except urllib.error.URLError as e: print(e.reason)`},{question:"How do you implement a local disk cache with Time-To-Live (TTL) for API responses?",shortAnswer:"By storing API JSON payloads alongside a timestamp ('cached_at: time.time()'); on subsequent requests, check 'if time.time() - cached_at < TTL: return cached_data' before making a network call.",explanation:"Drastically reduces API latency and protects rate limit quotas.",hint:"Store cached_at timestamp and compare with current time against TTL.",level:"moderate",codeExample:"if time.time() - cache['time'] < 300: return cache['data']"},{question:"How do you pass URL query parameters in 'requests.get()'?",shortAnswer:`By passing a dictionary to the 'params' argument: 'requests.get("https://api.com/search", params={"query": "python", "page": 2})'.`,explanation:"Automatically URL-encodes special characters and query strings.",hint:"Pass a dictionary to the params argument in requests.get().",level:"basic",codeExample:"requests.get(url, params={'campus': 'Barrackpore', 'limit': 10})"},{question:"How do you pass URL query parameters in 'urllib.request'?",shortAnswer:`By encoding the query dictionary using 'urllib.parse.urlencode(params)' and appending it to the URL: 'f"{base_url}?{urllib.parse.urlencode(params)}"'.`,explanation:"Standard library query parameter encoding.",hint:"Use urllib.parse.urlencode(params) and append to URL with '?'.",level:"basic",codeExample:`import urllib.parse
url = f'{base_url}?{urllib.parse.urlencode(params)}'`},{question:"What is a 'Session' object ('requests.Session()') and why should you use it?",shortAnswer:"'requests.Session()' persists cookies across requests, reuses underlying TCP connections (HTTP Keep-Alive / connection pooling), and avoids reconnect overhead, speeding up multi-request pipelines by 3x-5x.",explanation:"Essential for high-volume API consumption.",hint:"Reuses TCP connections and persists cookies for major performance gains.",level:"moderate",codeExample:`with requests.Session() as s:
    s.get(url1); s.get(url2)`},{question:"How do you consume a streaming JSON API response with 'requests' without loading it all into memory?",shortAnswer:"By setting 'stream=True' in 'requests.get(url, stream=True)' and iterating over lines with 'response.iter_lines()': 'for line in response.iter_lines(): yield json.loads(line)'.",explanation:"Constant O(1) memory for infinite streaming APIs and SSE feeds.",hint:"Use stream=True and iterate over response.iter_lines().",level:"complex",codeExample:"for line in requests.get(url, stream=True).iter_lines(): ..."},{question:"What HTTP status code indicates that you have exceeded an API's Rate Limit?",shortAnswer:"HTTP 429 Too Many Requests (often accompanied by a 'Retry-After: <seconds>' HTTP response header).",explanation:"Standard rate limiting response code.",hint:"HTTP 429 Too Many Requests.",level:"basic",codeExample:"if response.status_code == 429: time.sleep(float(response.headers.get('Retry-After', 1)))"},{question:"How do you authenticate using HTTP Basic Auth in 'requests'?",shortAnswer:`By passing a 2-tuple to the 'auth' parameter: 'requests.get(url, auth=("username", "password"))'.`,explanation:"Encodes credentials in Base64 Authorization header.",hint:"Pass auth=('user', 'pass') to requests.get().",level:"basic",codeExample:"requests.get(url, auth=('admin', 'secret_key'))"},{question:"How do you authenticate using Bearer JWT tokens in 'requests'?",shortAnswer:`By passing the Authorization header: 'headers={"Authorization": f"Bearer {jwt_token}"}'.`,explanation:"The standard authentication protocol for modern REST APIs.",hint:"Set Authorization: Bearer <token> in headers dictionary.",level:"basic",codeExample:"headers = {'Authorization': f'Bearer {token}'}"},{question:"What is 'urllib3' and how does it relate to 'requests'?",shortAnswer:"'requests' is a high-level wrapper built directly on top of 'urllib3', which provides the low-level connection pooling, SSL verification, and thread-safe HTTP client logic.",explanation:"Architectural relationship between requests and urllib3.",hint:"urllib3 is the underlying low-level connection library powering requests.",level:"moderate",codeExample:"# requests uses urllib3 internally"},{question:"How do you handle self-signed SSL certificates in 'requests' during local development?",shortAnswer:"By passing 'verify=False' to bypass SSL verification: 'requests.get(url, verify=False)' (Caution: insecure in production).",explanation:"Disables SSL certificate verification for local test servers.",hint:"Pass verify=False to disable SSL checks during local development.",level:"basic",codeExample:"requests.get('https://localhost:8443', verify=False)"},{question:"What happens if 'response.json()' is called on a response that returned HTML or plain text instead of JSON?",shortAnswer:"It raises 'json.decoder.JSONDecodeError' (or 'requests.exceptions.JSONDecodeError' in newer versions) because the response body cannot be parsed as JSON.",explanation:"Always check Content-Type or wrap in try...except.",hint:"Raises JSONDecodeError when the response body is not valid JSON.",level:"basic",codeExample:`try: data = res.json()
except ValueError: data = {'raw_text': res.text}`},{question:"How do you download a large file (e.g. 1GB JSON export) using 'requests' with constant RAM?",shortAnswer:`Using 'requests.get(url, stream=True)' and writing chunks in a loop: 'with open(dest, "wb") as f: for chunk in res.iter_content(chunk_size=8192): f.write(chunk)'.`,explanation:"Chunked streaming pattern for large files.",hint:"Use stream=True and iterate over res.iter_content(chunk_size=8192).",level:"moderate",codeExample:"for chunk in res.iter_content(chunk_size=8192): f.write(chunk)"},{question:"How do you inspect the final URL after following HTTP 301/302 redirects in 'requests'?",shortAnswer:"By accessing 'response.url' and inspecting the redirect history with 'response.history'.",explanation:"Tracks redirect chains automatically.",hint:"Use response.url for final URL and response.history for redirect list.",level:"moderate",codeExample:"print(response.url, response.history)"},{question:"What is the 'urllib.robotparser' module used for?",shortAnswer:"It parses web servers' 'robots.txt' files to check whether a web crawler or API scraper is permitted to fetch specific URL paths.",explanation:"Standard compliance tool for polite web crawlers.",hint:"Parses robots.txt to determine crawler access permissions.",level:"moderate",codeExample:"import urllib.robotparser"},{question:"How do you test API clients locally without making actual internet requests?",shortAnswer:"By using mock libraries like 'unittest.mock.patch', 'responses', or 'pytest-mock' to mock HTTP calls and return canned JSON responses.",explanation:"Ensures fast, isolated, deterministic unit tests.",hint:"Use unittest.mock.patch('requests.get') to simulate network responses.",level:"moderate",codeExample:`@patch('requests.get')
def test_api(mock_get): mock_get.return_value.json.return_value = {'ok': True}`},{question:"What is the ultimate golden rule for Consuming REST APIs in Python?",shortAnswer:"Always set explicit timeouts, check status codes with 'raise_for_status()', parse JSON with 'response.json()' or 'json.load()', implement exponential backoff retries for transient errors, and protect API limits with local TTL caching.",explanation:"The complete enterprise blueprint for robust, production-ready REST API clients.",hint:"Explicit timeouts, raise_for_status, exponential backoff retries, and TTL caching.",level:"basic",codeExample:"# Python REST API Client Mastery"}];function J(){const x=r.useRef([]),[c,p]=r.useState("comparison"),[n,j]=r.useState("/api/v1/forex/inr-rates"),[h,b]=r.useState("requests"),[H,L]=r.useState(5),[g,T]=r.useState(!0),[u,w]=r.useState(!0),[m,f]=r.useState({}),[y,_]=r.useState(!1),[i,o]=r.useState({status:200,statusText:"OK",latencyMs:142,isCacheHit:!1,attempts:1,data:{base_currency:"INR",rates:{USD:.0118,EUR:.0109,GBP:.0093},timestamp:"2026-08-24T10:00:00Z"}}),v=()=>{_(!0),setTimeout(()=>{_(!1);const t=Date.now();if(u&&m[n]&&(t-m[n].timestamp)/1e3<30){o({status:200,statusText:"200 OK (Cache Hit)",latencyMs:4,isCacheHit:!0,attempts:1,data:m[n].data});return}if(n==="/api/v1/weather/barrackpore"){const s={campus:"Barrackpore Main Campus",weather:"Clear Skies",temp_celsius:31.4,humidity_pct:68,timestamp:new Date().toISOString()};u&&f(d=>({...d,[n]:{data:s,timestamp:t}})),o({status:200,statusText:"200 OK",latencyMs:Math.floor(Math.random()*80)+110,isCacheHit:!1,attempts:1,data:s})}else if(n==="/api/v1/forex/inr-rates"){const s={base_currency:"INR",rates:{USD:.0118,EUR:.0109,GBP:.0093},tuition_usd:336.3,tuition_eur:310.65,timestamp:new Date().toISOString()};u&&f(d=>({...d,[n]:{data:s,timestamp:t}})),o({status:200,statusText:"200 OK",latencyMs:Math.floor(Math.random()*90)+120,isCacheHit:!1,attempts:1,data:s})}else if(n==="/api/v1/admissions/verify"){const s={status:"VERIFIED",student_id:"STU-101",course:"Python AI & Decorators",token:"SEAL-2026-AUTH-TOKEN-OK"};o({status:201,statusText:"201 Created",latencyMs:Math.floor(Math.random()*120)+160,isCacheHit:!1,attempts:1,data:s})}else o(g?{status:200,statusText:"200 OK (Recovered via Retries)",latencyMs:740,isCacheHit:!1,attempts:3,data:{status:"OK_AFTER_RETRIES",server:"srv-backup-barrackpore",message:"Recovered from 503 Service Unavailable via Exponential Backoff (Attempt #3)"}}:{status:503,statusText:"503 Service Unavailable",latencyMs:210,isCacheHit:!1,attempts:1,data:{error:"Gateway Busy: Connection refused on primary server."}})},280)},S=()=>{f({}),o(t=>({...t,isCacheHit:!1,statusText:t.statusText.replace(" (Cache Hit)","")}))};r.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const a=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Consuming REST APIs: ",e.jsx("span",{className:"text-teal-400",children:"`urllib` vs `requests`"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master production REST API consumption in Python: standard library ",e.jsx("code",{className:"text-teal-300 font-mono",children:"urllib.request"})," vs modern ",e.jsx("code",{className:"text-teal-300 font-mono",children:"requests"}),", automatic JSON payloads (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"json={...}"}),"), error handling with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"response.raise_for_status()"}),", timeouts, exponential backoff retries, and local TTL disk caching."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 `urllib.request` (Zero-Deps)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ `requests.get()` & `.json()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⏱️ Mandatory Timeouts (`timeout=5.0`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Exponential Backoff & TTL Cache"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. REST API Consumption: `urllib` vs `requests`"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python provides two primary mechanisms to interact with HTTP/JSON REST APIs:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `urllib.request`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"urllib.request.urlopen()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Built-in standard library with zero external dependencies. Reads raw response byte streams."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `requests` Library"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"res = requests.get(...)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Human-friendly third-party library with automatic JSON serialization, headers, and connection pooling."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `raise_for_status()`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"res.raise_for_status()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Essential status check preventing unhandled 4xx/5xx HTTP errors from propagating silently."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Infinite Timeout Hazard"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["By default, both ",e.jsx("code",{className:"text-teal-300 font-mono",children:"urllib.request.urlopen()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"requests.get()"})," have NO default timeout. A stalled server or broken network socket will block the Python thread indefinitely. Always specify ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"timeout=5.0"})," in production!"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing HTTP Pipelines, Backoff Retries & TTL Cache"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("comparison"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="comparison"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`urllib` vs `requests`"}),e.jsx("button",{onClick:()=>p("lifecycle"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="lifecycle"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"HTTP Request Lifecycle"}),e.jsx("button",{onClick:()=>p("resilience"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="resilience"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Retry & TTL Cache"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining syntax differences, HTTP connection lifecycles, and resilient exponential backoff retry patterns:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="comparison"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"`urllib.request` (BUILT-IN) VS `requests` (THIRD-PARTY)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Standard Library `urllib.request`"}),e.jsx("text",{x:"20",y:"58",fill:"#ecfdf5",fontSize:"8 font-mono",children:"req = urllib.request.Request(url, headers={...})"}),e.jsx("text",{x:"20",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"with urllib.request.urlopen(req, timeout=5) as res:"}),e.jsx("text",{x:"35",y:"92",fill:"#34d399",fontSize:"8 font-mono",children:"data = json.load(res)"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"138",fill:"#34d399",fontSize:"9 font-bold",children:"Standard Library Characteristics:"}),e.jsx("text",{x:"30",y:"158",fill:"#cbd5e1",fontSize:"8",children:"• 0 external dependencies (Standard Python install)"}),e.jsx("text",{x:"30",y:"173",fill:"#cbd5e1",fontSize:"8",children:"• Low-level byte stream handling (requires json.load)"}),e.jsx("text",{x:"30",y:"188",fill:"#cbd5e1",fontSize:"8",children:"• Manual URL encoding via urllib.parse.urlencode()"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. Third-Party `requests`"}),e.jsx("text",{x:"20",y:"58",fill:"#ecfdf5",fontSize:"8 font-mono",children:"res = requests.get(url, params={...}, timeout=5)"}),e.jsx("text",{x:"20",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"res.raise_for_status()"}),e.jsx("text",{x:"20",y:"92",fill:"#38bdf8",fontSize:"8 font-mono",children:"data = res.json()"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"138",fill:"#38bdf8",fontSize:"9 font-bold",children:"Industry Standard Characteristics:"}),e.jsx("text",{x:"30",y:"158",fill:"#cbd5e1",fontSize:"8",children:"• Human-friendly API with automatic JSON serialization"}),e.jsx("text",{x:"30",y:"173",fill:"#cbd5e1",fontSize:"8",children:"• Connection pooling and automatic keep-alive sessions"}),e.jsx("text",{x:"30",y:"188",fill:"#cbd5e1",fontSize:"8",children:"• Native response.json() and raise_for_status()"})]})]}):c==="lifecycle"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HTTP CLIENT-SERVER REQUEST/RESPONSE LIFECYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Outgoing Request"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"POST /api/v1/admissions"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Headers: Content-Type: json"}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:'Body: {"student": "Sourav"}'}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Client Serialization:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Dict converted to UTF-8"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"bytes over TCP socket."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Server Processing"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"HTTP 201 Created"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Headers: App/JSON"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:'Body: {"token": "SEAL-OK"}'}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Remote Execution:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Database transaction"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"committed on server."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Ingestion & Deserialization"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"res.raise_for_status()"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"data = res.json()"}),e.jsx("text",{x:"605",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:'print(data["token"])'}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Parsed Native Python:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Ready for business"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"logic execution."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"EXPONENTIAL BACKOFF RETRY & LOCAL TTL DISK CACHE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"1. Check Local TTL Cache"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"if now - cached_at < 300:"}),e.jsx("text",{x:"15",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'return cache["forex"]'}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Cache Hit (4ms):"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Eliminates network latency"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and preserves API quota."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"310",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"2. Transient 503 Flake"}),e.jsx("text",{x:"310",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"Attempt #1: 503 -> Sleep 0.5s"}),e.jsx("text",{x:"310",y:"75",fill:"#fca5a5",fontSize:"8 font-mono",children:"Attempt #2: 503 -> Sleep 1.0s"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"320",y:"135",fill:"#fda4af",fontSize:"9 font-bold",children:"Exponential Delay:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Doubles wait interval to"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"prevent server thundering herd."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Successful Ingestion"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"Attempt #3: 200 OK"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"Save to Cache + Return"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Resilient Ingestion:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Automated self-healing"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"without downtime."})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive REST API Client & Local TTL Cache Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Send live simulated HTTP requests to institutional weather, forex, admission, and flakey 503 endpoints, test exponential backoff self-healing, and observe local TTL cache performance:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Endpoint Selector"}),e.jsx("button",{onClick:S,className:"text-[11px] text-rose-400 hover:text-white underline font-mono",children:"Purge Local Cache"})]}),e.jsxs("select",{value:n,onChange:t=>j(t.target.value),className:"w-full bg-slate-900 text-slate-100 font-mono text-xs p-2.5 rounded-lg border border-slate-800 focus:border-teal-500 focus:outline-none",children:[e.jsx("option",{value:"/api/v1/forex/inr-rates",children:"GET /api/v1/forex/inr-rates (Forex Exchange Rates)"}),e.jsx("option",{value:"/api/v1/weather/barrackpore",children:"GET /api/v1/weather/barrackpore (Campus Weather)"}),e.jsx("option",{value:"/api/v1/admissions/verify",children:"POST /api/v1/admissions/verify (Enrollment Verification)"}),e.jsx("option",{value:"/api/v1/server/flakey-503",children:"GET /api/v1/server/flakey-503 (Transient 503 Server Gateway)"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Client Engine:"}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>b("requests"),className:l("flex-1 py-1.5 rounded transition-all",h==="requests"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"`requests` (Recommended)"}),e.jsx("button",{onClick:()=>b("urllib"),className:l("flex-1 py-1.5 rounded transition-all",h==="urllib"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"`urllib.request` (Zero-Deps)"})]})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono pt-2 border-t border-slate-800",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>T(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable Exponential Backoff Retries on 503 Errors"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable Local Disk TTL Cache (30s Expiration)"})]})]}),e.jsx("button",{onClick:v,disabled:y,className:"w-full py-3 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-800 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-teal-950/50",children:y?"Sending HTTP Request...":`Execute ${h.toUpperCase()} Request`})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center font-mono text-xs",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block uppercase",children:"Status Code"}),e.jsx("span",{className:l("font-bold text-sm",i.status<400?"text-emerald-400":"text-rose-400"),children:i.status})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block uppercase",children:"Latency"}),e.jsxs("span",{className:"font-bold text-sm text-cyan-300",children:[i.latencyMs," ms"]})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block uppercase",children:"Cache Source"}),e.jsx("span",{className:l("font-bold text-sm",i.isCacheHit?"text-purple-300":"text-slate-400"),children:i.isCacheHit?"CACHE HIT":"NETWORK"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[190px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[10px] font-bold uppercase text-slate-400 mb-1",children:[e.jsx("span",{children:"Deserialized JSON Response:"}),e.jsxs("span",{children:["Attempts: ",i.attempts]})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:JSON.stringify(i.data,null,2)})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master REST API Client Feature Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Operation"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Standard `urllib.request`"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Third-Party `requests`"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Best Practice Recommendation"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"GET Request"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`urlopen(url, timeout=5)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`requests.get(url, timeout=5)`"}),e.jsx("td",{className:"py-3 px-4",children:"Use `requests.get()` for clean syntax"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"JSON POST Body"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`Request(url, data=bytes)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`requests.post(url, json=dict)`"}),e.jsxs("td",{className:"py-3 px-4",children:["`json={...}`"," sets headers & serializes automatically"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"JSON Parsing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`json.load(response)`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-mono",children:"`response.json()`"}),e.jsx("td",{className:"py-3 px-4",children:"Both are direct in-memory parsers"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Status Code Check"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`except HTTPError as e`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300 font-mono",children:"`response.raise_for_status()`"}),e.jsx("td",{className:"py-3 px-4",children:"Always invoke `raise_for_status()`"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating standard urllib, modern requests, resilient retry clients, and institutional forex & weather caching engines:"}),e.jsx(N,{files:[{filename:"consuming_apis_with_standard_urllib.py",code:q,description:"Consuming REST APIs with built-in urllib.request, custom headers, and stream parsing."},{filename:"consuming_apis_with_requests_library.py",code:R,description:"Modern REST API consumption with requests.get, requests.post, json=, and response.json()."},{filename:"resilient_api_client_with_retry_and_timeout.py",code:P,description:"Resilient API client with mandatory timeouts, exponential backoff retries, and fallbacks."},{filename:"institutional_weather_and_forex_api_consumer.py",code:C,description:"Institutional Forex & Weather API consumer with local disk TTL caching engine."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Omission of Request Timeouts"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"By default, requests has NO timeout. If a remote server hangs, your worker thread is trapped indefinitely, causing catastrophic thread pool starvation."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," ALWAYS pass ",e.jsx("code",{className:"text-emerald-300",children:"timeout=5.0"})," to every HTTP call."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Silent Failures Without `raise_for_status()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If an API returns 404 or 500 with a JSON error body, calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"res.json()"})," succeeds and processes error messages as valid data!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always invoke ",e.jsx("code",{className:"text-emerald-300",children:"res.raise_for_status()"})," before parsing."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Retry Storms Without Backoff"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Retrying immediately in a tight loop during server outages overwhelms the struggling server and causes permanent blackouts."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use exponential backoff (",e.jsx("code",{className:"text-emerald-300",children:"time.sleep(backoff); backoff *= 2"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Exhausting Rate Limit Quotas"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Re-fetching static exchange rates or weather feeds on every user hit triggers HTTP 429 Too Many Requests and exhausts billable API quotas."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Cache responses locally with a Time-To-Live (TTL) timestamp."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering urllib, requests, timeouts, exponential backoff, raise_for_status, and TTL caching:"}),e.jsx(k,{questions:O})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with urllib and requests recipes, exponential backoff templates, and TTL cache implementations:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:I,filename:"python_topic6_consuming_rest_apis_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(A,{})]})]})]})}export{J as default};

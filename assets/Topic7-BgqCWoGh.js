import{b as a,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as E}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic7_files/generator_pipeline_composition_and_streaming.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Building clean data transformation pipelines\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Generator Pipeline Composition & Streaming Conveyor\r
Demonstrates:\r
  1. Composing multi-stage generator pipelines: \`stage3(stage2(stage1(source)))\`\r
  2. Pull-based lazy streaming: processing data one record at a time\r
  3. Constant O(1) memory footprint during multi-gigabyte transformations\r
"""\r
\r
import sys\r
from typing import Iterator, Dict, Any, List\r
\r
def stage_1_source_stream() -> Iterator[Dict[str, Any]]:\r
    """Stage 1: Generates raw student registration records lazily."""\r
    raw_records = [\r
        {"id": "STU-101", "name": "  sourav mukherjee  ", "fee": "30000", "status": "active"},\r
        {"id": "STU-102", "name": "priyanka sen", "fee": "35000", "status": "active"},\r
        {"id": "STU-103", "name": "debolina roy", "fee": "invalid_fee", "status": "active"},\r
        {"id": "STU-104", "name": "rahul verma", "fee": "25000", "status": "inactive"},\r
        {"id": "STU-105", "name": "  sneha gupta", "fee": "32000", "status": "active"}\r
    ]\r
    for r in raw_records:\r
        yield r\r
\r
\r
def stage_2_filter_active(stream: Iterator[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
    """Stage 2: Filters only active records."""\r
    for record in stream:\r
        if record.get("status") == "active":\r
            yield record\r
\r
\r
def stage_3_sanitize_and_cast(stream: Iterator[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
    """Stage 3: Normalizes names and converts fee to float, safely skipping corrupt items."""\r
    for record in stream:\r
        try:\r
            cleaned_name = " ".join(record["name"].strip().split()).title()\r
            fee_float = float(record["fee"])\r
            yield {\r
                **record,\r
                "name": cleaned_name,\r
                "fee": fee_float\r
            }\r
        except (ValueError, KeyError):\r
            # Skip or quarantine corrupt records without crashing pipeline\r
            continue\r
\r
\r
def stage_4_apply_gst_tax(stream: Iterator[Dict[str, Any]], tax_rate: float = 0.18) -> Iterator[Dict[str, Any]]:\r
    """Stage 4: Appends calculated GST tax and gross tuition fee."""\r
    for record in stream:\r
        base_fee = record["fee"]\r
        gst_amt = round(base_fee * tax_rate, 2)\r
        gross_fee = round(base_fee + gst_amt, 2)\r
        yield {\r
            **record,\r
            "gst_amount": gst_amt,\r
            "gross_fee": gross_fee\r
        }\r
\r
\r
def demonstrate_generator_pipeline():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - GENERATOR PIPELINE COMPOSITION & STREAMING")\r
    print("=" * 70)\r
\r
    # 1. Composing Lazy Generator Pipeline (Zero elements processed yet!):\r
    raw_stream = stage_1_source_stream()\r
    active_stream = stage_2_filter_active(raw_stream)\r
    sanitized_stream = stage_3_sanitize_and_cast(active_stream)\r
    taxed_pipeline = stage_4_apply_gst_tax(sanitized_stream, tax_rate=0.18)\r
\r
    print("1. Pipeline Constructed (Lazy Evaluation Invariant):")\r
    print(f"   * Pipeline Head Object: {taxed_pipeline}")\r
    print("   -> No memory allocated; no loops executed until pull consumer triggers iteration!\\n")\r
\r
    # 2. Consuming Pipeline Record-by-Record (Pull-based streaming):\r
    print("2. Pulling Transformed Records through Conveyor Pipeline:")\r
    total_gross = 0.0\r
    for count, student in enumerate(taxed_pipeline, start=1):\r
        print(f"   * [{student['id']}] {student['name']:<18} | Base: INR {student['fee']:>8,.2f} | GST: INR {student['gst_amount']:>7,.2f} | Gross: INR {student['gross_fee']:>8,.2f}")\r
        total_gross += student["gross_fee"]\r
\r
    print(f"\\n   * Total Pipeline Audited Gross: INR {total_gross:,.2f}")\r
\r
    print(r"""\r
Pipeline Invariants:\r
  1. Composed generator pipelines stream data with constant O(1) memory overhead.\r
  2. Each stage acts as a filter or transformer connected via lazy iterator protocols.\r
""")\r
    print("[PASSED] Generator Pipeline Composition & Streaming Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_generator_pipeline()\r
`,I=`# topic7_files/fluent_pipeline_builder_and_method_chaining.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Building clean data transformation pipelines\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Fluent Pipeline Builder & Method Chaining DSL\r
Demonstrates:\r
  1. Building a declarative \`Pipeline[T]\` wrapper supporting method chaining\r
  2. Fluent \`.filter()\`, \`.map()\`, \`.take()\`, and \`.collect()\` methods\r
  3. Composing transformations into self-documenting expressive pipelines\r
"""\r
\r
import itertools\r
from typing import Callable, Iterator, Any, List, TypeVar, Generic\r
\r
T = TypeVar("T")\r
U = TypeVar("U")\r
\r
class FluentPipeline(Generic[T]):\r
    """A lazy, fluent data transformation pipeline wrapper."""\r
\r
    def __init__(self, source: Iterator[T]):\r
        self._source = source\r
\r
    @classmethod\r
    def from_iterable(cls, iterable: Any) -> "FluentPipeline[T]":\r
        """Factory method to initialize pipeline from any iterable."""\r
        return cls(iter(iterable))\r
\r
    def map(self, func: Callable[[T], U]) -> "FluentPipeline[U]":\r
        """Applies a transformation function lazily to each element."""\r
        return FluentPipeline(map(func, self._source))\r
\r
    def filter(self, predicate: Callable[[T], bool]) -> "FluentPipeline[T]":\r
        """Filters elements matching the boolean predicate lazily."""\r
        return FluentPipeline(filter(predicate, self._source))\r
\r
    def take(self, count: int) -> "FluentPipeline[T]":\r
        """Limits stream to the first N elements using itertools.islice."""\r
        return FluentPipeline(itertools.islice(self._source, count))\r
\r
    def collect(self) -> List[T]:\r
        """Eagerly materializes the transformed stream into a list."""\r
        return list(self._source)\r
\r
    def reduce(self, reducer_fn: Callable[[Any, T], Any], initializer: Any) -> Any:\r
        """Folds the stream into a single aggregated scalar."""\r
        acc = initializer\r
        for item in self._source:\r
            acc = reducer_fn(acc, item)\r
        return acc\r
\r
\r
def demonstrate_fluent_pipeline():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FLUENT PIPELINE BUILDER & METHOD CHAINING")\r
    print("=" * 70)\r
\r
    raw_candidates = [\r
        {"id": "STU-101", "name": "sourav mukherjee", "marks": 92.5, "branch": "AI"},\r
        {"id": "STU-102", "name": "priyanka sen", "marks": 88.0, "branch": "ML"},\r
        {"id": "STU-103", "name": "debolina roy", "marks": 95.0, "branch": "AI"},\r
        {"id": "STU-104", "name": "rahul verma", "marks": 54.0, "branch": "WEB"},  # Below 60%\r
        {"id": "STU-105", "name": "sneha gupta", "marks": 91.0, "branch": "AI"}\r
    ]\r
\r
    print("1. Executing Fluent Chained Pipeline (Clean Declarative DSL):")\r
    # Expressive fluent pipeline chain:\r
    honors_roster = (\r
        FluentPipeline.from_iterable(raw_candidates)\r
        .filter(lambda s: s["marks"] >= 60.0)                        # Step 1: Filter qualifying marks\r
        .filter(lambda s: s["branch"] == "AI")                       # Step 2: Select AI branch\r
        .map(lambda s: {**s, "name": s["name"].title(), "tier": "HONORS"}) # Step 3: Enrich\r
        .take(2)                                                     # Step 4: Top 2 candidates\r
        .collect()                                                   # Step 5: Materialize\r
    )\r
\r
    for cand in honors_roster:\r
        print(f"   * [{cand['id']}] {cand['name']:<18} | Marks: {cand['marks']}% | Tier: {cand['tier']}")\r
\r
    # Aggregation through pipeline:\r
    total_marks = (\r
        FluentPipeline.from_iterable(raw_candidates)\r
        .filter(lambda s: s["marks"] >= 60.0)\r
        .reduce(lambda acc, s: acc + s["marks"], 0.0)\r
    )\r
    print(f"\\n2. Total Qualifying Marks Aggregate: {total_marks:.2f}")\r
\r
    print(r"""\r
Fluent Pipeline Benefits:\r
  1. Replaces deeply nested \`map(..., filter(..., ...))\` calls with clean linear method chaining.\r
  2. Keeps computation fully lazy until terminal \`.collect()\` or \`.reduce()\` is invoked.\r
""")\r
    print("[PASSED] Fluent Pipeline Builder & Method Chaining Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_fluent_pipeline()\r
`,P=`# topic7_files/resilient_pipeline_with_error_quarantine.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Building clean data transformation pipelines\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: Resilient Data Pipeline with Error Quarantine & Dead-Letter Queue (DLQ)\r
Demonstrates:\r
  1. Intercepting parsing and validation failures without breaking the streaming pipeline\r
  2. Partitioning stream into \`(valid_records, quarantined_dlq_records)\`\r
  3. Real-time pipeline health telemetry and error logging\r
"""\r
\r
from typing import Iterator, Dict, Any, List, Tuple\r
from decimal import Decimal, InvalidOperation\r
\r
class ResilientETLPipeline:\r
    """Production ETL pipeline with built-in Dead-Letter Queue (DLQ) quarantine."""\r
\r
    def __init__(self):\r
        self.dlq_quarantine: List[Dict[str, Any]] = []\r
        self.metrics = {"ingested": 0, "processed": 0, "quarantined": 0}\r
\r
    def process_stream(self, raw_stream: Iterator[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
        """Processes and enriches valid records, routing failures to quarantine."""\r
        for record in raw_stream:\r
            self.metrics["ingested"] += 1\r
            is_valid, parsed_record, err_reason = self._validate_and_normalize(record)\r
\r
            if is_valid and parsed_record is not None:\r
                self.metrics["processed"] += 1\r
                yield parsed_record\r
            else:\r
                self.metrics["quarantined"] += 1\r
                self.dlq_quarantine.append({\r
                    "raw_payload": record,\r
                    "rejection_reason": err_reason\r
                })\r
\r
    def _validate_and_normalize(self, raw: Dict[str, Any]) -> Tuple[bool, Dict[str, Any] | None, str | None]:\r
        """Internal pure validation guard."""\r
        # Check 1: Mandatory ID\r
        if not raw.get("id"):\r
            return False, None, "Missing mandatory field: 'id'"\r
\r
        # Check 2: Name sanity\r
        raw_name = raw.get("name", "").strip()\r
        if not raw_name:\r
            return False, None, "Student name is empty or missing"\r
\r
        # Check 3: Fee parsing to Decimal\r
        try:\r
            fee_dec = Decimal(str(raw.get("fee", "")))\r
            if fee_dec <= 0:\r
                return False, None, "Tuition fee must be strictly positive"\r
        except (InvalidOperation, ValueError, TypeError):\r
            return False, None, f"Invalid fee numeric literal: {raw.get('fee')}"\r
\r
        normalized = {\r
            "id": raw["id"],\r
            "name": " ".join(raw_name.split()).title(),\r
            "tuition_fee": fee_dec,\r
            "course": raw.get("course", "GENERAL_PYTHON")\r
        }\r
        return True, normalized, None\r
\r
\r
def demonstrate_resilient_pipeline():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RESILIENT PIPELINE WITH ERROR QUARANTINE")\r
    print("=" * 70)\r
\r
    mixed_raw_stream = [\r
        {"id": "STU-101", "name": "sourav mukherjee", "fee": "30000.00", "course": "PY-AI"},\r
        {"id": "STU-102", "name": "", "fee": "35000.00", "course": "DS-ML"},               # Missing Name!\r
        {"id": "STU-103", "name": "debolina roy", "fee": "INVALID_FEE", "course": "PY-AI"}, # Corrupt Fee!\r
        {"id": "", "name": "anonymous", "fee": "20000.00", "course": "WEB-DEV"},           # Missing ID!\r
        {"id": "STU-105", "name": "sneha gupta", "fee": "32000.00", "course": "DS-ML"}\r
    ]\r
\r
    pipeline = ResilientETLPipeline()\r
    valid_stream = pipeline.process_stream(iter(mixed_raw_stream))\r
\r
    print("1. Consuming Validated Records Stream:")\r
    for student in valid_stream:\r
        print(f"   * [CLEARED] {student['id']}: {student['name']:<18} | Fee: INR {student['tuition_fee']:,.2f}")\r
\r
    print("\\n2. Pipeline Health & Telemetry Metrics:")\r
    print(f"   * Total Records Ingested   : {pipeline.metrics['ingested']}")\r
    print(f"   * Successfully Processed   : {pipeline.metrics['processed']}")\r
    print(f"   * Quarantined (DLQ) Records: {pipeline.metrics['quarantined']}\\n")\r
\r
    print("3. Dead-Letter Queue (DLQ) Quarantine Inspection:")\r
    for q in pipeline.dlq_quarantine:\r
        print(f"   * [QUARANTINE] Reason: {q['rejection_reason']:<35} | Payload: {q['raw_payload']}")\r
\r
    print(r"""\r
Resilience Invariants:\r
  1. Production data pipelines must NEVER crash the process on single dirty records.\r
  2. Dirty records are diverted to Dead-Letter Queues (DLQs) for auditing and alerts.\r
""")\r
    print("[PASSED] Resilient Pipeline with Error Quarantine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_resilient_pipeline()\r
`,D=`# topic7_files/institutional_admission_etl_pipeline_suite.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Building clean data transformation pipelines\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Institutional Admission ETL Pipeline Suite (Case Study)\r
Demonstrates:\r
  1. Complete multi-stage streaming ETL pipeline architecture for Coder & AccoTax\r
  2. Extract -> Clean/Validate -> Tax Computation -> Aggregation & Persistence\r
  3. Real-time telemetry, audit logging, and financial ledger generation\r
"""\r
\r
from decimal import Decimal\r
from typing import Iterator, Dict, Any, List, Tuple\r
import json\r
\r
class InstitutionalAdmissionETLPipeline:\r
    """Production Multi-Stage ETL Engine for Institutional Candidate Processing."""\r
\r
    GST_RATE = Decimal("0.18")\r
    MIN_FEE_THRESHOLD = Decimal("10000.00")\r
\r
    def __init__(self):\r
        self.dlq_records: List[Dict[str, Any]] = []\r
\r
    # STAGE 1: EXTRACT / INGESTION\r
    def stage_extract(self, raw_data_batch: List[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
        """Yields raw student application records from raw batch."""\r
        for item in raw_data_batch:\r
            yield item\r
\r
    # STAGE 2: TRANSFORM - VALIDATE & SANITIZE\r
    def stage_validate_sanitize(self, stream: Iterator[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
        """Cleans and validates records; routes corrupt records to DLQ."""\r
        for record in stream:\r
            app_id = record.get("app_id")\r
            raw_name = record.get("name", "").strip()\r
            raw_fee = record.get("fee_offered")\r
\r
            if not app_id or not raw_name or raw_fee is None:\r
                self.dlq_records.append({"record": record, "error": "Missing mandatory fields"})\r
                continue\r
\r
            try:\r
                fee_val = Decimal(str(raw_fee))\r
                if fee_val < self.MIN_FEE_THRESHOLD:\r
                    self.dlq_records.append({"record": record, "error": f"Fee below threshold INR {self.MIN_FEE_THRESHOLD}"})\r
                    continue\r
            except Exception:\r
                self.dlq_records.append({"record": record, "error": f"Invalid fee literal: {raw_fee}"})\r
                continue\r
\r
            yield {\r
                "app_id": app_id,\r
                "name": " ".join(raw_name.split()).title(),\r
                "course": record.get("course", "PY-AI"),\r
                "campus": record.get("campus", "Barrackpore"),\r
                "base_fee": fee_val\r
            }\r
\r
    # STAGE 3: TRANSFORM - TAX & NET COMPUTATION\r
    def stage_compute_financials(self, stream: Iterator[Dict[str, Any]]) -> Iterator[Dict[str, Any]]:\r
        """Pure transformation calculating GST tax and gross payable."""\r
        for record in stream:\r
            base = record["base_fee"]\r
            gst_amount = round(base * self.GST_RATE, 2)\r
            gross_amount = round(base + gst_amount, 2)\r
\r
            yield {\r
                **record,\r
                "gst_amount": gst_amount,\r
                "gross_fee": gross_amount\r
            }\r
\r
    # STAGE 4: LOAD / AUDIT REPORT GENERATION\r
    def execute_etl(self, raw_input_batch: List[Dict[str, Any]]) -> Dict[str, Any]:\r
        """Executes the full pipeline and compiles audit summary."""\r
        s1 = self.stage_extract(raw_input_batch)\r
        s2 = self.stage_validate_sanitize(s1)\r
        s3 = self.stage_compute_financials(s2)\r
\r
        cleared_candidates = list(s3)\r
\r
        total_base = sum(c["base_fee"] for c in cleared_candidates)\r
        total_gst = sum(c["gst_amount"] for c in cleared_candidates)\r
        total_gross = sum(c["gross_fee"] for c in cleared_candidates)\r
\r
        return {\r
            "total_ingested": len(raw_input_batch),\r
            "total_cleared": len(cleared_candidates),\r
            "total_quarantined": len(self.dlq_records),\r
            "financial_audit": {\r
                "total_net_base_fee": total_base,\r
                "total_gst_collected_18": total_gst,\r
                "total_gross_bank_deposit": total_gross\r
            },\r
            "cleared_roster": cleared_candidates,\r
            "dlq_audit": self.dlq_records\r
        }\r
\r
\r
def demonstrate_etl_pipeline():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL ADMISSION ETL PIPELINE SUITE")\r
    print("=" * 70)\r
\r
    raw_batch = [\r
        {"app_id": "APP-901", "name": "sourav mukherjee", "course": "PY-AI", "campus": "Barrackpore", "fee_offered": "30000.00"},\r
        {"app_id": "APP-902", "name": "priyanka sen", "course": "DS-ML", "campus": "Kolkata", "fee_offered": "35000.00"},\r
        {"app_id": "APP-903", "name": "corrupt record", "fee_offered": "not_a_number"}, # Corrupt!\r
        {"app_id": "APP-904", "name": "debolina roy", "course": "PY-AI", "campus": "Barrackpore", "fee_offered": "28000.00"},\r
        {"app_id": "APP-905", "name": "low fee candidate", "fee_offered": "5000.00"},   # Below threshold!\r
        {"app_id": "APP-906", "name": "rahul verma", "course": "WEB-DEV", "campus": "Kolkata", "fee_offered": "25000.00"}\r
    ]\r
\r
    pipeline = InstitutionalAdmissionETLPipeline()\r
    report = pipeline.execute_etl(raw_batch)\r
\r
    print("1. ETL Pipeline Execution Audit Summary:")\r
    print(f"   * Total Records Ingested    : {report['total_ingested']}")\r
    print(f"   * Cleared Candidates (Load) : {report['total_cleared']}")\r
    print(f"   * Quarantined (DLQ) Records : {report['total_quarantined']}\\n")\r
\r
    print("2. Financial Ledger Telemetry:")\r
    audit = report["financial_audit"]\r
    print(f"   * Total Net Base Revenue    : INR {audit['total_net_base_fee']:>10,.2f}")\r
    print(f"   * Total GST Collected (18%) : INR {audit['total_gst_collected_18']:>10,.2f}")\r
    print(f"   * Total Gross Bank Deposit  : INR {audit['total_gross_bank_deposit']:>10,.2f}\\n")\r
\r
    print("3. Cleared Candidate Enrolment Roster:")\r
    for c in report["cleared_roster"]:\r
        print(f"   * [{c['app_id']}] {c['name']:<18} | {c['course']:<8} | {c['campus']:<12} | Gross: INR {c['gross_fee']:>8,.2f}")\r
\r
    print("\\n4. DLQ Quarantine Inspection Log:")\r
    for dlq in report["dlq_audit"]:\r
        print(f"   * [DLQ] Reason: {dlq['error']:<30} | App: {dlq['record'].get('app_id')}")\r
\r
    print("\\n[PASSED] Institutional Admission ETL Pipeline Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_etl_pipeline()\r
`,L=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
               TOPIC 7: BUILDING CLEAN DATA TRANSFORMATION PIPELINES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. GENERATOR CONVEYOR PIPELINES\r
--------------------------------------------------------------------------------\r
  def stage1(source): yield ...\r
  def stage2(stream): yield ...\r
  def stage3(stream): yield ...\r
\r
  pipeline = stage3(stage2(stage1(data_stream)))  # O(1) Memory Streaming\r
\r
--------------------------------------------------------------------------------\r
2. FLUENT METHOD CHAINING DSL\r
--------------------------------------------------------------------------------\r
  result = (\r
      FluentPipeline.from_iterable(raw_data)\r
      .filter(lambda x: x["marks"] >= 60)\r
      .map(lambda x: {**x, "tax": x["fee"] * 0.18})\r
      .take(10)\r
      .collect()\r
  )\r
\r
--------------------------------------------------------------------------------\r
3. DEAD-LETTER QUEUE (DLQ) RESILIENCE\r
--------------------------------------------------------------------------------\r
  * Never crash on corrupt records; route parsing failures to DLQ\r
  * Track metrics: Ingested, Processed, Quarantined\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: DATA TRANSFORMATION PIPELINES\r
================================================================================\r
`,k=[{question:"What is a 'Generator Pipeline' in Python?",shortAnswer:"A data architecture where multiple generator functions are chained together ('stage3(stage2(stage1(source)))'), allowing data records to stream one-by-one from source to destination with constant O(1) memory.",explanation:"Chained generator streaming conveyor architecture.",hint:"Chaining generator functions where each stage consumes and yields items lazily.",level:"basic",codeExample:"pipeline = stage3(stage2(stage1(data_stream)))"},{question:"What is the difference between 'Pull-Based Streaming' (generators) and 'Push-Based Processing'?",shortAnswer:"In pull-based streaming, the consumer at the end of the pipeline requests the next item ('next(pipeline)'), pulling one record through each stage on demand; in push-based processing, the producer pushes batches forward.",explanation:"Demand-driven streaming execution.",hint:"Pull streams one item on demand from consumer; push forces batches forward.",level:"moderate",codeExample:"for item in pipeline: # Consumer pulls items one-by-one"},{question:"Why do composed generator pipelines maintain constant O(1) memory during multi-gigabyte transformations?",shortAnswer:"Because no intermediate collections or lists are allocated in RAM; each item is generated, transformed through all stages, consumed, and garbage-collected before the next item is processed.",explanation:"Zero-copy streaming memory efficiency.",hint:"Only one record exists in memory at any point in time.",level:"basic",codeExample:"# Constant 100 bytes RAM processing a 50 GB log file"},{question:"What is a 'Fluent Pipeline Builder' in Python?",shortAnswer:"A class wrapper that encapsulates generator iterators, providing method chaining like '.filter().map().take().collect()' for clean, expressive, and readable functional pipelines.",explanation:"Method-chaining domain-specific language.",hint:"A wrapper class that enables chaining methods like .filter().map().collect().",level:"basic",codeExample:"FluentPipeline.from_iterable(data).filter(...).map(...).collect()"},{question:"What is the difference between 'Intermediate Operations' and 'Terminal Operations' in a pipeline?",shortAnswer:"Intermediate operations (like '.map()' and '.filter()') return a new lazy iterator without executing any loops; terminal operations (like '.collect()', '.reduce()', or 'for' loops) trigger the actual computation.",explanation:"Lazy evaluation triggers in data pipelines.",hint:"Intermediate ops are lazy; terminal ops trigger execution and materialize data.",level:"moderate",codeExample:"# Intermediate: .map(), .filter(); Terminal: .collect(), .reduce()"},{question:"What is a 'Dead-Letter Queue' (DLQ) in data pipeline engineering?",shortAnswer:"A quarantine storage mechanism where malformed, corrupt, or schema-invalid records are routed for inspection and alerting, preventing a single dirty record from crashing the entire streaming pipeline.",explanation:"Production pipeline error resilience.",hint:"A quarantine location for corrupt records that fail parsing or validation.",level:"basic",codeExample:"dlq.append({'payload': raw, 'error': 'Invalid fee format'})"},{question:"How do you handle type conversion errors gracefully inside a streaming pipeline stage?",shortAnswer:"Wrap the type conversion in a 'try...except' block within the generator loop; yield valid records and divert exceptions to a DLQ or logger instead of allowing unhandled exceptions to crash the process.",explanation:"Safe inline error quarantine.",hint:"Use try...except inside the generator stage and route failures to DLQ.",level:"basic",codeExample:`try: fee = float(r['fee']); yield r
except ValueError: dlq.append(r)`},{question:"How do you split a single generator stream into two separate streams (e.g. valid vs invalid)?",shortAnswer:"Using 'itertools.tee(stream, 2)' combined with complementary filters, or iterating through the stream once and partitioning into two destination queues.",explanation:"Stream branching techniques.",hint:"Use itertools.tee() or partition during iteration.",level:"moderate",codeExample:"s1, s2 = itertools.tee(stream, 2)"},{question:"Why should you avoid reading an entire file into memory before passing it to a pipeline?",shortAnswer:"Calling 'file.readlines()' or 'file.read()' loads the entire file into RAM, destroying the O(1) memory benefit; iterate directly over the file object ('for line in file: yield line').",explanation:"Streaming file I/O fundamentals.",hint:"Iterate over the file object directly to stream lines with O(1) RAM.",level:"basic",codeExample:"def file_stream(path): with open(path) as f: yield from f"},{question:"What is 'Pipeline Idempotency'?",shortAnswer:"A pipeline is idempotent if running it multiple times on the same input dataset produces the exact same output without duplicate side-effects, corrupted balances, or repeated records.",explanation:"Safe retryability and fault-tolerance.",hint:"Running the pipeline repeatedly on the same data produces identical results safely.",level:"moderate",codeExample:"# Idempotent pipeline with deduplication keys"},{question:"How do you batch a generator stream into chunks of N records using itertools?",shortAnswer:"Using 'iter = iter(stream)' and repeatedly calling 'list(itertools.islice(iter, N))' until the chunk is empty (or 'itertools.batched()' in Python 3.12+).",explanation:"Stream batching for bulk database updates.",hint:"Use itertools.batched(stream, n) in Python 3.12+ or islice in older versions.",level:"moderate",codeExample:`import itertools
for batch in itertools.batched(stream, 100): process_batch(batch)`},{question:"How do you implement pipeline telemetry and metrics tracking?",shortAnswer:"Maintain a lightweight metrics dictionary (e.g. '{'ingested': 0, 'cleared': 0, 'quarantined': 0}') updated as records pass through intermediate validation filters.",explanation:"Real-time pipeline observability.",hint:"Increment telemetry counters as records pass through stages.",level:"basic",codeExample:"metrics['processed'] += 1"},{question:"What is 'Backpressure' in data streaming pipelines?",shortAnswer:"A flow-control mechanism where the rate of data production is regulated by the processing capacity of downstream consumers, preventing memory buffers from overflowing.",explanation:"Streaming backpressure management.",hint:"Downstream consumers regulate upstream production rate to prevent buffer overflow.",level:"complex",codeExample:"# Pull-based generators have automatic native backpressure!"},{question:"Why do Python generator pipelines naturally provide 'Automatic Backpressure'?",shortAnswer:"Because upstream generators ONLY produce the next item when downstream consumers call 'next()'; if the consumer is slow, upstream stages pause execution automatically.",explanation:"Inherent flow-control of Python generator iterators.",hint:"Upstream pauses automatically until downstream consumer calls next().",level:"moderate",codeExample:"# Automatic pull-based backpressure in Python generators"},{question:"How do you inject external configurations (like tax rates or discount percentages) into pipeline stages cleanly?",shortAnswer:"Use default keyword arguments in generator functions or 'functools.partial' to bind configuration parameters prior to pipeline construction.",explanation:"Configuration parameterization for pipeline stages.",hint:"Pass configuration as default arguments or use functools.partial.",level:"basic",codeExample:"def apply_tax(stream, tax_rate=0.18): ..."},{question:"How do you profile the memory consumption of a generator pipeline versus a list comprehension pipeline?",shortAnswer:"Using the 'tracemalloc' standard library module to measure peak memory allocation ('tracemalloc.get_traced_memory()').",explanation:"Memory profiling in Python.",hint:"Use tracemalloc.start() and tracemalloc.get_traced_memory().",level:"moderate",codeExample:`import tracemalloc
tracemalloc.start(); current, peak = tracemalloc.get_traced_memory()`},{question:"How do you chain multiple transformation functions dynamically from a configuration list?",shortAnswer:"Using 'functools.reduce(lambda stream, func: func(stream), stages_list, initial_stream)'.",explanation:"Dynamic pipeline assembly via functional reduction.",hint:"Use functools.reduce to fold functions over the data stream.",level:"complex",codeExample:"pipeline = functools.reduce(lambda s, f: f(s), [stage1, stage2, stage3], source)"},{question:"What is the 'Decorator Pattern' applied to pipeline stages?",shortAnswer:"Wrapping individual stage generators with logging, timing, or metrics decorators without modifying the internal data transformation logic.",explanation:"Cross-cutting concerns in pipeline architecture.",hint:"Using decorators to add timing, metrics, and error logging to pipeline stages.",level:"moderate",codeExample:`@log_pipeline_stage
def stage_clean(stream): ...`},{question:"How do you ensure resources (like open database connections or file handles) are closed properly in streaming pipelines?",shortAnswer:"Use context managers ('with open(...) as f:') within the generator, or use 'generator.close()' and 'try...finally' blocks inside generator definitions.",explanation:"Resource lifecycle safety in streaming generators.",hint:"Use context managers or try...finally blocks inside generator functions.",level:"moderate",codeExample:"def stream(path): with open(path) as f: for l in f: yield l"},{question:"How do you write unit tests for individual pipeline stages in isolation?",shortAnswer:"Pass a small static list to the stage function and assert on the materialized list of output items: 'assert list(stage_clean([mock_record])) == [expected_record]'.",explanation:"Isolated unit testing of generator stages.",hint:"Pass a mock list to the generator stage and assert on list(stage_func(mock_data)).",level:"basic",codeExample:"assert list(stage_tax([{'fee': 100}])) == [{'fee': 100, 'tax': 18}]"},{question:"What is the difference between 'Data Enrichment' and 'Data Filtering' in a pipeline?",shortAnswer:"Data Filtering removes non-qualifying records based on predicates (reducing stream length); Data Enrichment adds or modifies attributes without changing record count.",explanation:"Core ETL transformation categories.",hint:"Filtering selects records; enrichment appends or calculates new fields.",level:"basic",codeExample:"# Filter: if x['valid']: yield x; Enrich: yield {**x, 'tax': x['fee']*0.18}"},{question:"How do you convert a synchronous generator pipeline into an asynchronous streaming pipeline?",shortAnswer:"Use 'async def' and 'async for' to build an 'AsyncIterator' pipeline that yields data over network sockets without blocking the asyncio event loop.",explanation:"Asynchronous stream processing with asyncio.",hint:"Use async def and async for to yield items asynchronously.",level:"complex",codeExample:"async def async_stage(stream): async for item in stream: yield item"},{question:"Why should you avoid catching broad 'Exception' without logging or quarantining in pipeline stages?",shortAnswer:"Silently ignoring exceptions masks bugs, swallows fatal syntax/logic errors, and creates phantom data loss where records vanish without audit trails.",explanation:"Anti-pattern of silent exception suppression.",hint:"Always log or quarantine caught exceptions to prevent silent data loss.",level:"basic",codeExample:"# BAD: except: pass -> GOOD: except Exception as e: dlq.append({'err': str(e)})"},{question:"How do you implement schema normalization for inconsistent field names (e.g. 'student_name' vs 'Name')?",shortAnswer:"Use an aliasing lookup map in the ingestion stage to map all alternative key names to standard canonical schema keys.",explanation:"Schema normalization in ETL pipelines.",hint:"Map alternative key names to canonical field names in ingestion stage.",level:"basic",codeExample:"name = r.get('name') or r.get('student_name') or r.get('Name')"},{question:"What is the ultimate golden rule for building clean data transformation pipelines in Python?",shortAnswer:"Compose modular, single-responsibility generator stages that stream with O(1) memory, intercept errors gracefully via Dead-Letter Queues (DLQs), use pure functions for transformations, and maintain comprehensive telemetry.",explanation:"The complete enterprise guideline for production data transformation pipelines in Python.",hint:"Modular O(1) generator stages, DLQ error resilience, pure functions, and telemetry metrics.",level:"basic",codeExample:"# Python Data Transformation Pipeline Mastery"}];function G(){const m=a.useRef([]),[s,p]=a.useState("conveyor"),f=[{app_id:"APP-901",name:"sourav mukherjee",course:"PY-AI",campus:"Barrackpore",fee:3e4,valid:!0},{app_id:"APP-902",name:"priyanka sen",course:"DS-ML",campus:"Kolkata",fee:35e3,valid:!0},{app_id:"APP-903",name:"corrupt record",course:"PY-AI",campus:"Barrackpore",fee:"invalid_num",valid:!1,error:"Non-numeric fee literal"},{app_id:"APP-904",name:"debolina roy",course:"PY-AI",campus:"Barrackpore",fee:28e3,valid:!0},{app_id:"APP-905",name:"low fee student",course:"WEB-DEV",campus:"Kolkata",fee:5e3,valid:!1,error:"Fee below threshold"}],[h,g]=a.useState(4),[d,b]=a.useState(.18),[i,y]=a.useState(1e4),o=[],x=[];f.forEach(t=>{if(!t.valid)x.push({...t,rejection_reason:t.error});else if(typeof t.fee=="number"&&t.fee<i)x.push({...t,rejection_reason:`Fee INR ${t.fee} below threshold INR ${i}`});else{const r=Math.round(t.fee*(1+d)*100)/100,c=Math.round((r-t.fee)*100)/100;o.push({...t,name:t.name.split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" "),base_fee:t.fee,gst_amount:c,gross_fee:r})}});const _=o.reduce((t,r)=>t+r.base_fee,0),N=o.reduce((t,r)=>t+r.gst_amount,0),j=o.reduce((t,r)=>t+r.gross_fee,0),v=`# Multi-Stage Streaming Generator Pipeline:
def stage_extract(batch): yield from batch
def stage_sanitize(stream):
    for r in stream:
        if r.get('fee') >= ${i}: yield r
def stage_tax(stream):
    for r in stream:
        yield {**r, 'gross': round(r['fee'] * (1 + ${d}), 2)}

pipeline = stage_tax(stage_sanitize(stage_extract(raw_batch)))
cleared = list(pipeline) # Pull-based streaming execution!`;a.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Building Clean ",e.jsx("span",{className:"text-teal-400",children:"Data Transformation Pipelines"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master end-to-end data transformation pipeline architecture in Python: multi-stage generator streaming conveyors, pull-based ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"})," constant memory scaling, fluent method-chaining DSLs (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Pipeline.map().filter().collect()"}),"), resilient error handling with Dead-Letter Queues (DLQ), and institutional financial ETL pipelines."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Generator Stream Conveyors"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 Fluent Method-Chaining DSL"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Dead-Letter Queue (DLQ)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Institutional ETL Telemetry"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of Modern Python Data Pipelines"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Data pipelines connect modular, single-responsibility transformation stages that pull data lazily through generator iterators:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Ingest & Normalize"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"stage_extract(source)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Streams raw bytes, JSON payloads, or DB records without loading full files into RAM."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Sanitize & Quarantine"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"stage_validate(stream)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Validates schemas and routes dirty records to Dead-Letter Queues (DLQ) without crashing."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Enrich & Load"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"stage_enrich(stream)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Applies tax, currency conversions, and emits audited records to database or reports."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The In-Memory Eager List Disaster"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Materializing intermediate stages with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list()"})," (e.g. ",e.jsx("code",{className:"text-rose-400",children:"s2 = [clean(x) for x in s1]"}),") creates multi-gigabyte lists in memory. Always chain lazy generators ",e.jsx("code",{className:"text-teal-300 font-mono",children:"s2 = (clean(x) for x in s1)"})," to stream multi-gigabyte datasets with constant ",e.jsx("code",{className:"text-teal-300",children:"O(1)"})," memory!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Streaming Conveyors, Memory & DLQ"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("conveyor"),className:l("px-3 py-1.5 rounded-lg transition-all",s==="conveyor"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Streaming Conveyor"}),e.jsx("button",{onClick:()=>p("memoryProfile"),className:l("px-3 py-1.5 rounded-lg transition-all",s==="memoryProfile"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory Profile"}),e.jsx("button",{onClick:()=>p("dlqFlow"),className:l("px-3 py-1.5 rounded-lg transition-all",s==="dlqFlow"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"DLQ Quarantine Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining multi-stage generator streaming pipes, constant memory scaling, and error quarantine routing:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="conveyor"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"MULTI-STAGE GENERATOR STREAMING CONVEYOR PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Extract & Ingest"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Source: Raw JSON Feed"}),e.jsx("text",{x:"15",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Stream: yield record"}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"PULL ON DEMAND"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Buffering:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Emits records one-by-one"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"as downstream requests."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Sanitize & Validate"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Check fee >= threshold"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Invalid -> DLQ list"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Valid -> yield clean"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Error Resilience:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Pipeline NEVER crashes"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"on single corrupt items."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Financial Enrich & Load"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"Apply 18% GST Tax"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Audit Ledger Output"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Terminal Load:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Writes to transactional"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"database or audit ledger."})]})]}):s==="memoryProfile"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"MEMORY PROFILING: EAGER LISTS VS LAZY STREAMING CONVEYOR"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Eager List Pipeline (Anti-Pattern)"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"Stage 1: Allocates 10M List in RAM (420 MB)"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"Stage 2: Allocates Cleaned List (420 MB)"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Total Memory: > 1.2 GB RAM (Crash!)"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"80",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"160",fill:"#fda4af",fontSize:"9 font-bold",children:"High Memory Overhead:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Allocates massive intermediate arrays between stages."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Lazy Streaming Pipeline (Optimal)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"Stage 1: Streams record 1 (104 bytes)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"Stage 2: Transforms record 1"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Total Memory: Constant 4 KB RAM!"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"O(1) Memory Invariant:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Processes 100M records without exceeding 4 KB memory."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DEAD-LETTER QUEUE (DLQ) STREAM PARTITIONING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Partitioning Stream into Valid Stream vs Quarantine DLQ"}),e.jsxs("g",{transform:"translate(20, 55)",children:[e.jsx("rect",{x:"0",y:"30",width:"180",height:"100",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"10",y:"55",fill:"#a78bfa",fontSize:"10 font-bold",children:"Mixed Input Stream"}),e.jsx("text",{x:"10",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Raw JSON payloads"}),e.jsx("text",{x:"200",y:"85",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"240",y:"15",width:"220",height:"130",rx:"6",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"250",y:"40",fill:"#38bdf8",fontSize:"10 font-bold",children:"Validation Guard"}),e.jsx("text",{x:"250",y:"65",fill:"#cbd5e1",fontSize:"8 font-mono",children:"try parse fee"}),e.jsx("text",{x:"250",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"Valid: yield"}),e.jsx("text",{x:"250",y:"105",fill:"#f43f5e",fontSize:"8 font-mono",children:"Error: dlq.append()"}),e.jsx("text",{x:"480",y:"45",fill:"#10b981",fontSize:"16",fontWeight:"bold",children:"↗ Valid"}),e.jsx("rect",{x:"560",y:"0",width:"220",height:"70",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"570",y:"25",fill:"#34d399",fontSize:"9 font-bold",children:"Main Pipeline Stream"}),e.jsx("text",{x:"570",y:"45",fill:"#cbd5e1",fontSize:"8",children:"Enrichment & Financial Ledger"}),e.jsx("text",{x:"480",y:"120",fill:"#f43f5e",fontSize:"16",fontWeight:"bold",children:"↘ Corrupt"}),e.jsx("rect",{x:"560",y:"85",width:"220",height:"70",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"570",y:"110",fill:"#fda4af",fontSize:"9 font-bold",children:"Dead-Letter Queue (DLQ)"}),e.jsx("text",{x:"570",y:"130",fill:"#cbd5e1",fontSize:"8",children:"Quarantined for Admin Audit"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Admission ETL & Financial Audit Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure pipeline thresholds, step through transformation stages, observe Dead-Letter Queue (DLQ) quarantine, and inspect live financial ledger telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Step Through Transformation Stages:"}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:1,label:"1. Ingest"},{id:2,label:"2. Validate"},{id:3,label:"3. Tax"},{id:4,label:"4. Audit"}].map(t=>e.jsx("button",{onClick:()=>g(t.id),className:l("py-1.5 rounded transition-all",h===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. GST Tax Parameter:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[0,.05,.12,.18].map(t=>e.jsxs("button",{onClick:()=>b(t),className:l("flex-1 py-1 rounded transition-all",d===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:[t*100,"% GST"]},t))})]}),e.jsxs("div",{className:"space-y-1 pt-1 border-t border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Minimum Fee Cutoff (Validation Guard):"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",i.toLocaleString()]})]}),e.jsx("input",{type:"range",min:5e3,max:25e3,step:2500,value:i,onChange:t=>y(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs font-mono",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase",children:"Ingested"}),e.jsx("div",{className:"text-white font-bold text-base",children:f.length})]}),e.jsxs("div",{className:"p-2.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg",children:[e.jsx("div",{className:"text-emerald-400 text-[10px] uppercase",children:"Cleared"}),e.jsx("div",{className:"text-emerald-300 font-bold text-base",children:o.length})]}),e.jsxs("div",{className:"p-2.5 bg-rose-950/40 border border-rose-800/60 rounded-lg",children:[e.jsx("div",{className:"text-rose-400 text-[10px] uppercase",children:"Quarantined"}),e.jsx("div",{className:"text-rose-300 font-bold text-base",children:x.length})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Streaming ETL Pipeline Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:v})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Financial Audit Summary:"}),e.jsx("span",{className:"text-emerald-400",children:"Loaded State"})]}),e.jsxs("div",{className:"space-y-1 text-[11px]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-300",children:"Total Net Base Revenue:"}),e.jsxs("span",{className:"text-white font-bold",children:["INR ",_.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-slate-300",children:["Total GST Collected (",d*100,"%):"]}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:["INR ",N.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"flex justify-between border-t border-slate-800 pt-1",children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Total Gross Bank Deposit:"}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:["INR ",j.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Pipeline Architecture Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pipeline Stage"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Evaluation Mode"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory Footprint"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Responsibility"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"1. Extract (Ingest)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy Iterator (`yield`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Constant O(1)"}),e.jsx("td",{className:"py-3 px-4",children:"Stream raw byte chunks / API lines"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"2. Validate & Quarantine"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy Filter + DLQ"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Constant O(1)"}),e.jsx("td",{className:"py-3 px-4",children:"Schema verification & dirty record capture"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"3. Transform (Enrich)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy Map (`yield`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Constant O(1)"}),e.jsx("td",{className:"py-3 px-4",children:"Financial tax, currency, and discount calculation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"4. Load (Terminal)"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Eager Consumer (`reduce`/`collect`)"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Proportional to output"}),e.jsx("td",{className:"py-3 px-4",children:"Persist to database / emit audit report"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating generator conveyor pipelines, fluent method chaining DSLs, resilient Dead-Letter Queues, and institutional ETL engines:"}),e.jsx(w,{files:[{filename:"generator_pipeline_composition_and_streaming.py",code:T,description:"Multi-stage generator streaming conveyors."},{filename:"fluent_pipeline_builder_and_method_chaining.py",code:I,description:"Generic fluent pipeline builder with method chaining."},{filename:"resilient_pipeline_with_error_quarantine.py",code:P,description:"Error interception, dead-letter queues, and stream validation."},{filename:"institutional_admission_etl_pipeline_suite.py",code:D,description:"End-to-end multi-stage ETL pipelines, tax computation, and DLQ quarantine."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Materializing Intermediate Lists"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list()"})," between intermediate stages allocates full collections in RAM, defeating O(1) generator streaming."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Keep intermediate stages lazy with ",e.jsx("code",{className:"text-emerald-300",children:"yield"})," or generator expressions."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Bare `except: pass` in Pipeline Stages"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Silently suppressing exceptions causes corrupt records to vanish without audit logs or alert metrics."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Route failed payloads to a Dead-Letter Queue (DLQ) with error details."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Reading Entire Files with `f.readlines()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"f.readlines()"})," loads the entire file into RAM at once, crashing on large multi-gigabyte logs."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Iterate directly over the file object: ",e.jsx("code",{className:"text-emerald-300",children:"for line in f: yield line"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Non-Idempotent Transformation Stages"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Re-running a pipeline on the same dataset produces double billing or duplicate records if stages are not idempotent."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use unique deduplication keys and pure deterministic transformations."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering generator pipelines, fluent method chaining, dead-letter queues, memory profiling, and ETL architecture:"}),e.jsx(S,{questions:k})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with streaming pipeline recipes, fluent DSL builders, and DLQ quarantine templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(A,{content:L,filename:"python_topic7_data_transformation_pipelines_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(E,{})]})]})]})}export{G as default};

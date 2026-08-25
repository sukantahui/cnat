import{b as r,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as Y}from"./PythonFileLoader-hCi5osN-.js";import{P as V}from"./PlainTextPrint-C08xhKA4.js";import{F as G}from"./FAQTemplate-CkSqDH4B.js";import{T as Q}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const K=`# topic7_files/custom_range_iterator_class.py\r
# Module: 003_003_decorators-generators\r
# Topic: Creating custom iterator classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Custom Range Iterator Class (\`FloatRange\`)\r
Demonstrates:\r
  1. Building a custom iterator class from scratch supporting floating-point stepping\r
  2. Managing internal state (\`_current\`, \`_stop\`, \`_step\`)\r
  3. Proper \`StopIteration\` termination condition for both positive and negative steps\r
"""\r
\r
class FloatRange:\r
    """A custom iterable and iterator for floating-point step ranges."""\r
\r
    def __init__(self, start: float, stop: float, step: float = 1.0):\r
        if step == 0:\r
            raise ValueError("FloatRange() arg 3 (step) must not be zero")\r
        self.start = float(start)\r
        self.stop = float(stop)\r
        self.step = float(step)\r
        self._current = self.start\r
\r
    def __iter__(self):\r
        """Returns self as the iterator object."""\r
        return self\r
\r
    def __next__(self) -> float:\r
        """Computes and returns the next floating-point value."""\r
        if self.step > 0:\r
            if self._current >= self.stop:\r
                raise StopIteration("Reached upper range boundary.")\r
        else:\r
            if self._current <= self.stop:\r
                raise StopIteration("Reached lower range boundary.")\r
\r
        value = self._current\r
        self._current = round(self._current + self.step, 10)  # Avoid float IEEE-754 drift\r
        return value\r
\r
\r
def demonstrate_custom_range():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM \`FloatRange\` ITERATOR CLASS")\r
    print("=" * 70)\r
\r
    # 1. Forward Float Range (1.0 to 3.0 step 0.5):\r
    print("1. Forward Stepping with \`FloatRange(1.0, 3.0, 0.5)\`:")\r
    forward_range = FloatRange(1.0, 3.0, 0.5)\r
    for val in forward_range:\r
        print(f"   * Value: {val:.2f}")\r
\r
    # 2. Reverse Float Range (10.0 to 0.0 step -2.5):\r
    print("\\n2. Reverse Stepping with \`FloatRange(10.0, 0.0, -2.5)\`:")\r
    reverse_range = FloatRange(10.0, 0.0, -2.5)\r
    for val in reverse_range:\r
        print(f"   * Value: {val:.2f}")\r
\r
    # 3. Dynamic Fee Concession Bracket Calculation:\r
    print("\\n3. Calculating Dynamic Fee Discounts using FloatRange(0.05, 0.25, 0.05):")\r
    base_fee = 20000.0\r
    for rate in FloatRange(0.05, 0.25, 0.05):\r
        discount = base_fee * rate\r
        print(f"   * Discount {rate*100:4.1f}%: Concession = INR {discount:6,f} -> Payable = INR {base_fee-discount:6,f}")\r
\r
    print("\\n[PASSED] Custom FloatRange Iterator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_range()\r
`,X=`# topic7_files/bidirectional_circular_and_sliding_iterators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Creating custom iterator classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Sliding Window & Circular Iterator Classes\r
Demonstrates:\r
  1. \`SlidingWindowIterator\`: Yielding fixed-size moving sub-arrays over sequences\r
  2. \`CircularIterator\`: Wrapping around a collection for round-robin scheduling\r
  3. Advanced state cursor manipulation without intermediate full copies\r
"""\r
\r
from typing import Sequence, Any, Tuple\r
\r
class SlidingWindowIterator:\r
    """Iterates over a sequence yielding overlapping windows of size \`window_size\`."""\r
\r
    def __init__(self, data: Sequence[Any], window_size: int = 3):\r
        if window_size <= 0:\r
            raise ValueError(f"window_size must be >= 1, got {window_size}")\r
        self._data = data\r
        self._window_size = window_size\r
        self._cursor = 0\r
\r
    def __iter__(self):\r
        return self\r
\r
    def __next__(self) -> Tuple[Any, ...]:\r
        if self._cursor + self._window_size > len(self._data):\r
            raise StopIteration("End of sliding window stream.")\r
\r
        window = tuple(self._data[self._cursor : self._cursor + self._window_size])\r
        self._cursor += 1\r
        return window\r
\r
\r
class CircularIterator:\r
    """Cycles through a sequence up to \`max_cycles\` times in round-robin fashion."""\r
\r
    def __init__(self, data: Sequence[Any], max_cycles: int = 2):\r
        if not data:\r
            raise ValueError("Data sequence must not be empty.")\r
        self._data = data\r
        self._max_cycles = max_cycles\r
        self._total_yields_limit = len(data) * max_cycles\r
        self._yielded_count = 0\r
        self._index = 0\r
\r
    def __iter__(self):\r
        return self\r
\r
    def __next__(self) -> Any:\r
        if self._yielded_count >= self._total_yields_limit:\r
            raise StopIteration("Circular iteration limit reached.")\r
\r
        item = self._data[self._index]\r
        self._index = (self._index + 1) % len(self._data)  # Wrap around\r
        self._yielded_count += 1\r
        return item\r
\r
\r
def demonstrate_advanced_iterators():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SLIDING WINDOW & CIRCULAR ITERATORS")\r
    print("=" * 70)\r
\r
    # 1. Sliding Window over Student Exam Scores (3-Exam Moving Average):\r
    scores = [78.0, 85.0, 92.0, 88.0, 95.0, 90.0]\r
    print("1. 3-Score Sliding Window over Exam History:")\r
    slider = SlidingWindowIterator(scores, window_size=3)\r
    for window in slider:\r
        avg = sum(window) / len(window)\r
        print(f"   * Window {window} -> Moving Average: {avg:.2f}")\r
\r
    # 2. Circular Round-Robin Lab Demonstrator Allocation:\r
    mentors = ["Sukanta Hui", "Deblina Roy", "Amitava Sen"]\r
    print("\\n2. Round-Robin Lab Support Allocation (2 Cycles):")\r
    lab_schedule = CircularIterator(mentors, max_cycles=2)\r
    shift = 1\r
    for mentor in lab_schedule:\r
        print(f"   * Shift #{shift:02d}: Assigned Mentor -> {mentor}")\r
        shift += 1\r
\r
    print("\\n[PASSED] Sliding Window & Circular Iterators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_advanced_iterators()\r
`,Z=`# topic7_files/lazy_database_paginator_iterator.py\r
# Module: 003_003_decorators-generators\r
# Topic: Creating custom iterator classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: Lazy Database Cursor Paginator Iterator\r
Demonstrates:\r
  1. Lazily fetching database pages on demand rather than loading all records into RAM\r
  2. Managing internal buffer queue and page offset cursors\r
  3. Seamless integration with Python \`for\` loops\r
"""\r
\r
from typing import Dict, Any, List\r
\r
class LazyDatabasePaginatorIterator:\r
    """Lazily fetches database records page-by-page as required by the consumer."""\r
\r
    def __init__(self, total_database_records: int = 10, page_size: int = 4):\r
        self._total_records = total_database_records\r
        self._page_size = page_size\r
        self._offset = 0\r
        self._current_page_buffer: List[Dict[str, Any]] = []\r
        self._buffer_index = 0\r
        self._pages_fetched_count = 0\r
\r
    def __iter__(self):\r
        return self\r
\r
    def _fetch_next_page_from_database(self) -> bool:\r
        """Simulates SQL \`SELECT * FROM students LIMIT page_size OFFSET offset\`."""\r
        if self._offset >= self._total_records:\r
            return False  # No more records in database\r
\r
        self._pages_fetched_count += 1\r
        records_to_fetch = min(self._page_size, self._total_records - self._offset)\r
        print(f"  [DB DISK I/O] Fetching Page #{self._pages_fetched_count} (Offset: {self._offset}, Limit: {records_to_fetch})...")\r
\r
        # Simulate fetched page batch:\r
        self._current_page_buffer = [\r
            {"id": f"STU-{100 + self._offset + i + 1}", "name": f"Student_{self._offset + i + 1}"}\r
            for i in range(records_to_fetch)\r
        ]\r
        self._offset += records_to_fetch\r
        self._buffer_index = 0\r
        return True\r
\r
    def __next__(self) -> Dict[str, Any]:\r
        # If buffer is empty or consumed, fetch next database page:\r
        if self._buffer_index >= len(self._current_page_buffer):\r
            has_more = self._fetch_next_page_from_database()\r
            if not has_more:\r
                raise StopIteration("Database pagination complete.")\r
\r
        record = self._current_page_buffer[self._buffer_index]\r
        self._buffer_index += 1\r
        return record\r
\r
\r
def demonstrate_lazy_paginator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - LAZY DATABASE PAGINATOR ITERATOR")\r
    print("=" * 70)\r
\r
    print("1. Consuming 10 Records with \`page_size=4\` Lazily:")\r
    paginator = LazyDatabasePaginatorIterator(total_database_records=10, page_size=4)\r
\r
    for student in paginator:\r
        print(f"     * Consumer Received: {student['id']} ({student['name']})")\r
\r
    print("\\n[PASSED] Lazy Database Paginator Iterator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_lazy_paginator()\r
`,$=`# topic7_files/institutional_examination_rank_iterator_suite.py\r
# Module: 003_003_decorators-generators\r
# Topic: Creating custom iterator classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Institutional Exam Rank & Merit Iterator (Case Study)\r
Demonstrates:\r
  1. Complete custom Iterator class sorting, computing rank percentiles, and assigning tiers\r
  2. Encapsulating ranking logic into an iterable domain model\r
  3. Clean termination and custom inspection methods\r
"""\r
\r
from typing import List, Dict, Any\r
\r
class StudentCandidate:\r
    def __init__(self, student_id: str, name: str, raw_score: float):\r
        self.student_id = student_id\r
        self.name = name\r
        self.raw_score = raw_score\r
\r
\r
class ExamRankIterator:\r
    """Iterator that sorts candidates and yields ranked merit records with tiers."""\r
\r
    def __init__(self, candidates: List[StudentCandidate], min_qualifying_score: float = 60.0):\r
        # Sort candidates descending by score at instantiation:\r
        self._ranked_candidates = sorted(candidates, key=lambda c: c.raw_score, reverse=True)\r
        self._min_score = min_qualifying_score\r
        self._cursor = 0\r
        self._current_rank = 1\r
\r
    def __iter__(self):\r
        return self\r
\r
    def __next__(self) -> Dict[str, Any]:\r
        while self._cursor < len(self._ranked_candidates):\r
            candidate = self._ranked_candidates[self._cursor]\r
            self._cursor += 1\r
\r
            if candidate.raw_score < self._min_score:\r
                continue  # Skip candidates below qualifying mark\r
\r
            # Determine Scholarship Tier\r
            if candidate.raw_score >= 90.0:\r
                tier = "PLATINUM (100% SCHOLARSHIP)"\r
            elif candidate.raw_score >= 80.0:\r
                tier = "GOLD (50% SCHOLARSHIP)"\r
            elif candidate.raw_score >= 70.0:\r
                tier = "SILVER (25% SCHOLARSHIP)"\r
            else:\r
                tier = "BRONZE (MERIT CERTIFICATE)"\r
\r
            rank_entry = {\r
                "rank": self._current_rank,\r
                "student_id": candidate.student_id,\r
                "name": candidate.name,\r
                "score": candidate.raw_score,\r
                "tier": tier\r
            }\r
            self._current_rank += 1\r
            return rank_entry\r
\r
        raise StopIteration("All qualified candidates processed.")\r
\r
\r
def run_exam_rank_iterator_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL EXAM RANK & MERIT ITERATOR")\r
    print("=" * 70)\r
\r
    # 1. Raw Candidate Score Records:\r
    candidates = [\r
        StudentCandidate("STU-101", "Sourav Mukherjee", 94.5),\r
        StudentCandidate("STU-102", "Priyanka Sen", 88.0),\r
        StudentCandidate("STU-103", "Rahul Verma", 76.5),\r
        StudentCandidate("STU-104", "Debolina Roy", 91.0),\r
        StudentCandidate("STU-105", "Amitava Sen", 54.0),  # Below 60% qualifying\r
    ]\r
\r
    print("1. Processing Ranked Examination Merit Cohort:")\r
    rank_stream = ExamRankIterator(candidates, min_qualifying_score=60.0)\r
\r
    for entry in rank_stream:\r
        print(\r
            f"   Rank #{entry['rank']}: {entry['name']:<18} ({entry['student_id']}) | "\r
            f"Score: {entry['score']:4.1f}% | Tier: {entry['tier']}"\r
        )\r
\r
    print("\\n[PASSED] Institutional Exam Rank Iterator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_exam_rank_iterator_demo()\r
`,J=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
               TOPIC 7: CREATING CUSTOM ITERATOR CLASSES IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CUSTOM ITERATOR CLASS SKELETON\r
--------------------------------------------------------------------------------\r
  class MyIterator:\r
      def __init__(self, data):\r
          self.data = data\r
          self.cursor = 0\r
\r
      def __iter__(self):\r
          return self  # Idempotence: returns self\r
\r
      def __next__(self):\r
          if self.cursor >= len(self.data):\r
              raise StopIteration("Stream completed")\r
          item = self.data[self.cursor]\r
          self.cursor += 1\r
          return item\r
\r
--------------------------------------------------------------------------------\r
2. ADVANCED PATTERNS: FloatRange & SlidingWindow\r
--------------------------------------------------------------------------------\r
  • FloatRange(start, stop, step): Generates float step sequences.\r
  • SlidingWindow(data, size): Yields rolling N-element tuples.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: CUSTOM ITERATOR CLASSES\r
================================================================================\r
`,ee=[{question:"What 2 dunder methods must a custom Iterator class implement in Python?",shortAnswer:"1. '__iter__(self)': returning 'self'. 2. '__next__(self)': returning the next computed/retrieved item or raising 'StopIteration'.",explanation:"Fulfills the formal Python Iterator protocol interface.",hint:"Must implement __iter__() returning self, and __next__() returning items.",level:"basic",codeExample:`class MyIter:
    def __iter__(self): return self
    def __next__(self): ...`},{question:"Why does standard Python 'range()' not support floating-point steps (e.g. range(1.0, 3.0, 0.5))?",shortAnswer:"Because 'range()' is optimized purely for exact integer indexing; floating-point numbers suffer from IEEE-754 binary precision drift (e.g. 0.1 + 0.2 != 0.3), so custom float ranges require explicit rounding.",explanation:"A custom FloatRange class solves this limitation.",hint:"Standard range() only accepts integers due to float precision drift.",level:"basic",codeExample:"# TypeError: 'float' object cannot be interpreted as an integer"},{question:"How do you prevent floating-point precision drift in a custom 'FloatRange' iterator?",shortAnswer:"By rounding the internal accumulator on each step: 'self._current = round(self._current + self.step, 10)'.",explanation:"Eliminates cumulative floating-point rounding errors.",hint:"Use round(self._current + self.step, 10) on each increment.",level:"moderate",codeExample:"self._current = round(self._current + self.step, 10)"},{question:"How does a 'SlidingWindowIterator' work?",shortAnswer:"It maintains a cursor over a sequence and yields overlapping sub-tuples of length 'window_size' (e.g. [1,2,3,4] with size 3 yields (1,2,3) then (2,3,4)) until the sequence end.",explanation:"Crucial for calculating moving averages in time-series data.",hint:"Yields overlapping slices of fixed length as cursor advances.",level:"moderate",codeExample:"window = tuple(self.data[self.cursor : self.cursor + self.size])"},{question:"How does a 'CircularIterator' wrap around a sequence for round-robin scheduling?",shortAnswer:"By using the modulo operator to compute the next element index: 'self._index = (self._index + 1) % len(self._data)'.",explanation:"Implements round-robin load balancing and scheduling algorithms.",hint:"Uses (index + 1) % len(data) to wrap index back to 0.",level:"basic",codeExample:"self.index = (self.index + 1) % len(self.data)"},{question:"What is a 'Lazy Database Paginator Iterator'?",shortAnswer:"An iterator that fetches records from a database page-by-page (e.g. 50 rows per SQL query) only when its internal buffer is consumed, preventing loading millions of rows into memory at once.",explanation:"Eliminates Out-Of-Memory crashes in large-scale backend systems.",hint:"Fetches SQL pages on demand only when the local buffer is emptied.",level:"complex",codeExample:"if self.buffer_idx >= len(self.buffer): self.fetch_next_page()"},{question:"When should you write a full Custom Iterator Class instead of a simple Generator function?",shortAnswer:"When you need to attach custom state introspection methods (e.g. 'reset()', 'stats()', 'seek()'), support serializable object state, or manage complex multi-cursor collection architectures.",explanation:"Generator functions are simpler; Iterator classes offer richer OOP control.",hint:"When you need custom helper methods, state introspection, or complex OOP design.",level:"moderate",codeExample:"# Iterator class: class MyIter: def seek(self, pos): ..."},{question:"How does 'StopIteration' propagate when nesting custom iterators?",shortAnswer:"When an inner iterator raises 'StopIteration', the outer iterator's '__next__()' can catch it to switch streams or re-raise 'StopIteration' to signal total pipeline completion.",explanation:"Foundation of chained stream iterators.",hint:"Catch StopIteration from inner iterators to advance to the next stream.",level:"moderate",codeExample:`try: return next(self.inner)
except StopIteration: self.next_stream()`},{question:"How do you make a custom collection class both an Iterable and support 'len()' and 'in' checks?",shortAnswer:"By implementing '__iter__()' for iteration, '__len__()' for 'len(obj)', and '__contains__()' for 'item in obj'.",explanation:"Full Python Collection protocol implementation.",hint:"Implement __iter__(), __len__(), and __contains__().",level:"basic",codeExample:"def __len__(self): return len(self.items)"},{question:"Can an iterator class accept negative step values (e.g. counting down from 10 to 0)?",shortAnswer:"Yes, by checking if 'step < 0' and terminating when 'self._current <= self._stop' instead of '>='.",explanation:"Supports bidirectional range stepping.",hint:"Check step sign and adjust termination condition accordingly.",level:"moderate",codeExample:"if self.step < 0 and self.current <= self.stop: raise StopIteration"},{question:`What happens if a custom iterator class raises 'StopIteration' with a message: 'raise StopIteration("Done")'?`,shortAnswer:"The message is stored in the exception's 'args' attribute, which can be inspected if caught manually; 'for' loops discard the message and cleanly break.",explanation:"Standard exception metadata storage.",hint:"Message is stored in exc.args; for loops discard it and break cleanly.",level:"basic",codeExample:"raise StopIteration('Completed 100 items')"},{question:"How do you implement a 'Reverse Iterator' in a custom class?",shortAnswer:"By implementing the '__reversed__()' dunder method, which returns an iterator that traverses the collection backwards from the last element to the first.",explanation:"Triggered automatically when calling 'reversed(my_collection)'.",hint:"Implement the __reversed__() dunder method.",level:"moderate",codeExample:"def __reversed__(self): return ReverseIterator(self)"},{question:"Why is an Iterator's cursor usually a private attribute (e.g. 'self._cursor')?",shortAnswer:"To encapsulate internal iteration state and prevent external code from accidentally corrupting the active stream position during loop execution.",explanation:"Standard object-oriented encapsulation practice.",hint:"To protect internal stream pointer state from external corruption.",level:"basic",codeExample:"self._cursor = 0"},{question:"Can an iterator class wrap a network socket or binary file?",shortAnswer:"Yes. In '__next__()', it can read bytes from the socket/file and return parsed packet objects, raising 'StopIteration' on EOF or connection close.",explanation:"Standard pattern for streaming network protocols.",hint:"Yes, read socket bytes in __next__() and raise StopIteration on EOF.",level:"complex",codeExample:`data = self.sock.recv(1024)
if not data: raise StopIteration`},{question:"What is the 'Two-Pointer' or 'Peekable Iterator' pattern?",shortAnswer:"An iterator wrapper that allows looking ahead at the next item via 'peek()' without advancing the stream cursor.",explanation:"Essential for building parsers, lexers, and syntax tokenizers.",hint:"Allows inspecting the next element with peek() without consuming it.",level:"complex",codeExample:`class Peekable:
    def peek(self): return self._cached_next`},{question:"How does 'itertools.cycle' compare to a custom 'CircularIterator'?",shortAnswer:"'itertools.cycle' runs infinitely without bounds; a custom CircularIterator can enforce a finite cycle count ('max_cycles=N') and terminate cleanly.",explanation:"Custom iterators allow adding domain-specific boundary constraints.",hint:"Custom CircularIterator can terminate after N cycles; itertools.cycle is infinite.",level:"moderate",codeExample:"# CircularIterator(items, max_cycles=3)"},{question:"What happens if a custom iterator class mutates the underlying collection while iterating?",shortAnswer:"It introduces subtle cursor misalignments, skipping or repeating elements; the iterator should either operate on an immutable snapshot or use safe indexing.",explanation:"Avoid in-flight mutations during active streaming.",hint:"Causes skipped or repeated elements; operate on a snapshot instead.",level:"moderate",codeExample:"# Work on defensive copy or tuple"},{question:"How can a custom iterator class calculate running statistics (e.g. running mean, standard deviation) on the fly?",shortAnswer:"By updating running sum, count, and squared difference accumulators in '__next__()' before returning each element, keeping memory O(1).",explanation:"Welford's algorithm for streaming statistical calculation.",hint:"Update running accumulator variables inside __next__() on each yield.",level:"complex",codeExample:`self.running_sum += val
self.count += 1`},{question:"Can a custom iterator class be pickled / serialized with standard 'pickle'?",shortAnswer:"Yes, if all its internal state attributes (data, cursor, flags) are picklable, allowing active iteration state to be saved to disk and resumed later!",explanation:"Major advantage of Iterator classes over generator objects.",hint:"Yes, top-level Iterator classes with picklable attributes can be saved/resumed.",level:"complex",codeExample:`import pickle
saved_state = pickle.dumps(my_iterator)`},{question:"How do you write a unit test for a custom Iterator class in pytest?",shortAnswer:"Instantiate the iterator, assert that successive 'next()' calls produce expected items, and assert that the final 'next()' raises 'pytest.raises(StopIteration)'.",explanation:"Verifies both happy-path streaming and clean termination.",hint:"Test item values via next() and assert pytest.raises(StopIteration) at the end.",level:"basic",codeExample:`with pytest.raises(StopIteration):
    next(it)`},{question:"How does a custom Iterator class implement reset functionality?",shortAnswer:"By providing a custom 'reset()' method that resets 'self._cursor = 0' and re-initializes internal state variables.",explanation:"Provides rewinding capabilities unavailable on generator functions.",hint:"Define a reset() method that resets self._cursor = 0.",level:"basic",codeExample:`def reset(self):
    self._cursor = 0`},{question:"What is the memory complexity of a well-designed Custom Iterator class?",shortAnswer:"O(1) auxiliary space, as it only stores the current cursor index and reference to data rather than generating intermediate full collections.",explanation:"Constant memory efficiency regardless of dataset volume.",hint:"O(1) constant auxiliary memory.",level:"basic",codeExample:"# Memory footprint: ~128 bytes"},{question:"What is the 'Chain Iterator' pattern?",shortAnswer:"An iterator that accepts a sequence of multiple iterables and iterates through all elements of the first, then all elements of the second, until all are exhausted.",explanation:"Custom implementation of itertools.chain.",hint:"Sequentially iterates through multiple distinct collections.",level:"moderate",codeExample:`class ChainIterator:
    def __init__(self, *iterables): ...`},{question:"How does a custom iterator handle empty input collections?",shortAnswer:"On the very first '__next__()' invocation, it immediately detects 'cursor >= len(data)' (or 0 >= 0) and raises 'StopIteration' without emitting any elements.",explanation:"Clean boundary condition handling.",hint:"Immediately raises StopIteration on the first next() call.",level:"basic",codeExample:"if not self.data: raise StopIteration"},{question:"What is the ultimate golden rule for Creating Custom Iterator Classes in Python?",shortAnswer:"Implement '__iter__()' returning 'self', manage cursor pointers safely in '__next__()', handle termination conditions precisely by raising 'StopIteration', and maintain O(1) constant memory complexity.",explanation:"The blueprint for professional Python data streaming architectures.",hint:"Implement __iter__() returning self, manage cursor in __next__(), raise StopIteration.",level:"basic",codeExample:"# Custom Python Iterator Architecture Mastery"}];function me(){const u=r.useRef([]),[l,h]=r.useState("floatrange"),[s,g]=r.useState("floatrange"),[C,te]=r.useState(1),[_,ne]=r.useState(3),[R,re]=r.useState(.5),[b,E]=r.useState(1),[y,A]=r.useState([]),[d,w]=r.useState(!1),j=[78,85,92,88,95,90],[f,se]=r.useState(3),[m,k]=r.useState(0),[S,T]=r.useState([]),[c,v]=r.useState(!1),z=10,P=3,[p,O]=r.useState(0),[N,F]=r.useState([]),[x,I]=r.useState(!1),D=()=>{E(C),A([]),w(!1)},W=()=>{if(d)return;if(b>=_){w(!0);return}const t=b,n=Math.round((b+R)*100)/100;A([...y,t]),E(n),n>=_&&w(!0)},L=()=>{k(0),T([]),v(!1)},M=()=>{if(c)return;if(m+f>j.length){v(!0);return}const t=j.slice(m,m+f),n=(t.reduce((B,U)=>B+U,0)/f).toFixed(1);T([...S,{items:t,avg:n}]);const i=m+1;k(i),i+f>j.length&&v(!0)},q=()=>{O(0),F([]),I(!1)},H=()=>{if(x)return;if(p>=z){I(!0);return}const t=p+1,n=Math.floor(p/P)+1;F([...N,{id:`STU-${100+t}`,page:n}]);const i=p+1;O(i),i>=z&&I(!0)};r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!u.current.includes(t)&&u.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Creating Custom ",e.jsx("span",{className:"text-teal-400",children:"Iterator Classes"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master building stateful Iterator classes in Python from scratch: custom floating-point ranges (",e.jsx("code",{className:"text-teal-300 font-mono",children:"FloatRange"}),"), sliding window rolling frames over sequences, round-robin circular schedulers, and lazy page-by-page database paginators."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📏 Custom FloatRange(start, stop, step)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🪟 SlidingWindow Rolling Frames"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Circular Round-Robin Schedulers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💾 Lazy Database Cursor Pagination"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of a Custom Iterator Class"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"To create an iterator class, you must implement the 3 essential structural components:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `__init__(self, ...)`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"self._cursor = 0"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Initializes dataset reference and pointer cursors."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `__iter__(self)`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"return self"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Mandatory idempotence: returns ",e.jsx("code",{className:"text-cyan-300",children:"self"})," so the iterator can be looped."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `__next__(self)`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"raise StopIteration"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Advances cursor, computes next element, or raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"StopIteration"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Solving Floating-Point Precision Drift in Range Iterators"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In binary floating-point representation, adding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"0.1 + 0.2"})," yields ",e.jsx("code",{className:"text-rose-400 font-mono",children:"0.30000000000000004"}),". In a custom ",e.jsx("code",{className:"text-teal-300 font-mono",children:"FloatRange"})," class, always sanitize intermediate values using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"round(self._current + self.step, 10)"}),"!"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Custom Iterators: Range, Window & Cursor"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("floatrange"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="floatrange"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"FloatRange Pointer"}),e.jsx("button",{onClick:()=>h("sliding"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="sliding"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Sliding Window Slices"}),e.jsx("button",{onClick:()=>h("paginator"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="paginator"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Lazy DB Cursor Pages"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining internal cursor states, sliding frame boundaries, and paginated SQL buffer refills:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="floatrange"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"FLOATRANGE ITERATOR POINTER ADVANCEMENT: `FloatRange(1.0, 3.0, 0.5)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Step 1: start=1.0"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: 1.0"}),e.jsx("text",{x:"15",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"_current: 1.0 -> 1.5"}),e.jsx("rect",{x:"15",y:"120",width:"150",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Condition Check:"}),e.jsx("text",{x:"25",y:"165",fill:"#ecfdf5",fontSize:"8 font-mono",children:"1.0 < 3.0 (OK)"}),e.jsx("text",{x:"190",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"215",y:"0",width:"180",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"230",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Step 2: val=1.5"}),e.jsx("text",{x:"230",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: 1.5"}),e.jsx("text",{x:"230",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"_current: 1.5 -> 2.0"}),e.jsx("rect",{x:"230",y:"120",width:"150",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"240",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Condition Check:"}),e.jsx("text",{x:"240",y:"165",fill:"#ecfdf5",fontSize:"8 font-mono",children:"1.5 < 3.0 (OK)"}),e.jsx("text",{x:"405",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"430",y:"0",width:"180",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"445",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Step 3: val=2.0 / 2.5"}),e.jsx("text",{x:"445",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: 2.0, 2.5"}),e.jsx("text",{x:"445",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"_current: 2.5 -> 3.0"}),e.jsx("rect",{x:"445",y:"120",width:"150",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"455",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Condition Check:"}),e.jsx("text",{x:"455",y:"165",fill:"#ecfdf5",fontSize:"8 font-mono",children:"2.5 < 3.0 (OK)"}),e.jsx("text",{x:"620",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"645",y:"0",width:"175",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"660",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"Step 4: _current=3.0"}),e.jsx("text",{x:"660",y:"55",fill:"#f87171",fontSize:"10 font-mono font-bold",children:"StopIteration"}),e.jsx("text",{x:"660",y:"80",fill:"#fca5a5",fontSize:"8 font-mono",children:"_current >= stop"}),e.jsx("rect",{x:"660",y:"120",width:"145",height:"90",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"670",y:"145",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Terminated:"}),e.jsx("text",{x:"670",y:"165",fill:"#fca5a5",fontSize:"8 font-mono",children:"Loop terminates!"})]})]}):l==="sliding"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SLIDING WINDOW ITERATOR: ROLLING FRAMES OVER SEQUENCE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"70",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"25",fill:"#a5f3fc",fontSize:"10 font-bold",children:"Source Sequence: `scores = [78, 85, 92, 88, 95, 90]` (Window Size = 3)"}),e.jsx("g",{transform:"translate(20, 35)",children:[78,85,92,88,95,90].map((t,n)=>e.jsxs("g",{transform:`translate(${n*125}, 0)`,children:[e.jsx("rect",{width:"110",height:"25",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsxs("text",{x:"55",y:"17",fill:"#ecfdf5",fontSize:"10 font-mono",textAnchor:"middle",children:["idx[",n,"]: ",t]})]},n))})]}),e.jsxs("g",{transform:"translate(30, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"150",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"Window 1: slice[0:3]"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: (78, 85, 92)"}),e.jsx("text",{x:"15",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Moving Avg: 85.0"}),e.jsx("text",{x:"15",y:"110",fill:"#a7f3d0",fontSize:"8 font-mono",children:"cursor: 0 -> 1"}),e.jsx("rect",{x:"285",y:"0",width:"250",height:"150",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"300",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"Window 2: slice[1:4]"}),e.jsx("text",{x:"300",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: (85, 92, 88)"}),e.jsx("text",{x:"300",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Moving Avg: 88.3"}),e.jsx("text",{x:"300",y:"110",fill:"#a7f3d0",fontSize:"8 font-mono",children:"cursor: 1 -> 2"}),e.jsx("rect",{x:"570",y:"0",width:"250",height:"150",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"585",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"Window 3: slice[2:5]"}),e.jsx("text",{x:"585",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"Yield: (92, 88, 95)"}),e.jsx("text",{x:"585",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Moving Avg: 91.7"}),e.jsx("text",{x:"585",y:"110",fill:"#a7f3d0",fontSize:"8 font-mono",children:"cursor: 2 -> 3"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"LAZY DATABASE PAGINATOR ITERATOR BUFFER ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Local Page Buffer"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"buffer = [STU-1, STU-2, STU-3]"}),e.jsx("text",{x:"15",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"buffer_index = 0, 1, 2"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Fast RAM Yields:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Yields elements from local"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"buffer at memory speeds."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Buffer Exhausted?"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"if buffer_index >= len(buffer):"}),e.jsx("text",{x:"320",y:"75",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"_fetch_next_page()"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Lazy SQL Query:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"SELECT * LIMIT 3 OFFSET 3"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Only queries DB on demand!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Database Exhausted"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"if offset >= total_records:"}),e.jsx("text",{x:"615",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"raise StopIteration()"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Constant O(1) Memory:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Can iterate 10 million rows"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"using only 50 rows of RAM!"})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Custom Iterator Laboratory & Stepper"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Choose an iterator pattern to step through custom range arithmetic, moving window frames, or paginated database buffers:"}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 mb-6 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>g("floatrange"),className:o("flex-1 py-2 rounded-lg transition-all text-center",s==="floatrange"?"bg-teal-950 border border-teal-500 text-teal-200 font-bold":"text-slate-400 hover:text-white"),children:"1. FloatRange(1.0, 3.0, 0.5)"}),e.jsx("button",{onClick:()=>g("sliding"),className:o("flex-1 py-2 rounded-lg transition-all text-center",s==="sliding"?"bg-cyan-950 border border-cyan-500 text-cyan-200 font-bold":"text-slate-400 hover:text-white"),children:"2. SlidingWindow(size=3)"}),e.jsx("button",{onClick:()=>g("paginator"),className:o("flex-1 py-2 rounded-lg transition-all text-center",s==="paginator"?"bg-purple-950 border border-purple-500 text-purple-200 font-bold":"text-slate-400 hover:text-white"),children:"3. LazyDatabasePaginator(page=3)"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:[s==="floatrange"&&"FloatRange Stepping",s==="sliding"&&"Sliding Window Stepping",s==="paginator"&&"Lazy Database Paginator Stepping"]}),e.jsx("button",{onClick:()=>{s==="floatrange"?D():s==="sliding"?L():q()},className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"`iter()` (Reset Iterator)"})]}),s==="floatrange"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Configuration: ",e.jsxs("code",{className:"text-teal-300 font-bold",children:["FloatRange(start=",C,", stop=",_,", step=",R,")"]})]}),e.jsx("button",{onClick:W,disabled:d,className:o("w-full py-2.5 font-mono text-xs font-bold rounded-lg transition-all shadow-lg",d?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:d?"FloatRange Exhausted (StopIteration)":"Execute `next(float_range_iter)`"})]}),s==="sliding"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Source: ",e.jsx("code",{className:"text-cyan-300 font-bold",children:"scores = [78, 85, 92, 88, 95, 90]"})," (Window: 3)"]}),e.jsx("button",{onClick:M,disabled:c,className:o("w-full py-2.5 font-mono text-xs font-bold rounded-lg transition-all shadow-lg",c?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-950/50"),children:c?"Window Stream Exhausted (StopIteration)":"Execute `next(sliding_window_iter)`"})]}),s==="paginator"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Total DB Records: ",e.jsx("code",{className:"text-purple-300 font-bold",children:"10"})," | Page Size: ",e.jsx("code",{className:"text-purple-300 font-bold",children:"3"})]}),e.jsx("button",{onClick:H,disabled:x,className:o("w-full py-2.5 font-mono text-xs font-bold rounded-lg transition-all shadow-lg",x?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-purple-600 hover:bg-purple-500 text-white shadow-purple-950/50"),children:x?"DB Cursor Exhausted (StopIteration)":"Execute `next(db_paginator_iter)`"})]})]}),e.jsx("div",{className:"space-y-4 flex flex-col justify-between",children:e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Consumer Received Stream Elements:"}),s==="floatrange"&&e.jsxs("div",{className:"flex flex-wrap gap-1.5 min-h-[60px]",children:[y.length===0?e.jsx("span",{className:"text-slate-500 italic",children:"No values yielded yet. Click `next()` to step."}):y.map((t,n)=>e.jsx("span",{className:"px-2 py-1 bg-teal-950 border border-teal-700 text-teal-200 rounded font-bold",children:t.toFixed(2)},n)),d&&e.jsx("span",{className:"px-2 py-1 bg-rose-950 border border-rose-800 text-rose-300 rounded font-bold",children:"[StopIteration]"})]}),s==="sliding"&&e.jsxs("div",{className:"space-y-1 min-h-[60px]",children:[S.length===0?e.jsx("span",{className:"text-slate-500 italic",children:"No sliding windows yielded yet. Click `next()`."}):S.map((t,n)=>e.jsxs("div",{className:"p-1.5 bg-slate-950 rounded border border-slate-800 flex justify-between text-[11px]",children:[e.jsxs("span",{className:"text-cyan-300 font-bold",children:["Window #",n+1,": (",t.items.join(", "),")"]}),e.jsxs("span",{className:"text-emerald-400",children:["Avg: ",t.avg]})]},n)),c&&e.jsx("div",{className:"p-1 bg-rose-950/60 border border-rose-800 text-rose-300 rounded text-center font-bold",children:"[StopIteration Reached]"})]}),s==="paginator"&&e.jsxs("div",{className:"space-y-1 min-h-[60px] max-h-[140px] overflow-y-auto",children:[N.length===0?e.jsx("span",{className:"text-slate-500 italic",children:"No DB records fetched yet. Click `next()`."}):N.map((t,n)=>e.jsxs("div",{className:"p-1 bg-slate-950 rounded border border-slate-800 flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-purple-300 font-bold",children:t.id}),e.jsxs("span",{className:"text-slate-500 text-[10px]",children:["Loaded via DB Page #",t.page]})]},n)),x&&e.jsx("div",{className:"p-1 bg-rose-950/60 border border-rose-800 text-rose-300 rounded text-center font-bold",children:"[Database Pagination Complete]"})]})]})})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Custom Iterator Design Pattern Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Iterator Class Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Internal State Variables"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"`StopIteration` Condition"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Production Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"FloatRange"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"_current, _stop, _step"}),e.jsx("td",{className:"py-3 px-4",children:"`_current >= _stop` (for step > 0)"}),e.jsx("td",{className:"py-3 px-4",children:"Financial discount brackets & physics steps"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"SlidingWindow"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"_data, _window_size, _cursor"}),e.jsx("td",{className:"py-3 px-4",children:"`_cursor + _window_size > len(_data)`"}),e.jsx("td",{className:"py-3 px-4",children:"Time-series moving averages & NLP n-grams"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"CircularIterator"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"_data, _index, _yielded, _limit"}),e.jsx("td",{className:"py-3 px-4",children:"`_yielded >= _limit`"}),e.jsx("td",{className:"py-3 px-4",children:"Round-robin load balancing & shift rotation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"LazyDbPaginator"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"_offset, _buffer, _buffer_index"}),e.jsx("td",{className:"py-3 px-4",children:"`_offset >= total_db_records`"}),e.jsx("td",{className:"py-3 px-4",children:"High-volume database queries without OOM"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating FloatRange, sliding windows, circular schedulers, lazy database paginators, and rank iterator engines:"}),e.jsx(Y,{files:[{filename:"custom_range_iterator_class.py",code:K,description:"Custom FloatRange iterator class with float arithmetic and bounds checking."},{filename:"bidirectional_circular_and_sliding_iterators.py",code:X,description:"SlidingWindow and Circular round-robin iterator classes over sequences."},{filename:"lazy_database_paginator_iterator.py",code:Z,description:"Memory-efficient page-by-page database cursor iterator."},{filename:"institutional_examination_rank_iterator_suite.py",code:$,description:"Rank-ordered student examination merit iterator with scholarship tier classification."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Float Drift Accumulation"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Repeatedly adding floats without rounding produces drift like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"0.30000000000000004"}),", causing boundary checks to misfire."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"round(self._current + self.step, 10)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Infinite Loop on Missing `StopIteration`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If ",e.jsx("code",{className:"text-amber-300 font-mono",children:"__next__()"})," returns ",e.jsx("code",{className:"text-amber-300 font-mono",children:"None"})," instead of raising ",e.jsx("code",{className:"text-amber-300 font-mono",children:"StopIteration"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"for"})," loops run forever."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always raise ",e.jsx("code",{className:"text-emerald-300",children:"StopIteration"})," when bounds are exceeded."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing `__iter__` Returning `self`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["An Iterator class without ",e.jsx("code",{className:"text-purple-300 font-mono",children:"def __iter__(self): return self"})," cannot be passed into ",e.jsx("code",{className:"text-purple-300 font-mono",children:"for"})," loops or ",e.jsx("code",{className:"text-purple-300 font-mono",children:"iter()"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Every Iterator must implement ",e.jsx("code",{className:"text-emerald-300",children:"__iter__"})," returning ",e.jsx("code",{className:"text-emerald-300",children:"self"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Sliding Window Off-By-One"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Checking ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cursor >= len(data)"})," instead of ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cursor + size > len(data)"})," yields truncated, partial windows at the end."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Terminate when ",e.jsx("code",{className:"text-emerald-300",children:"cursor + window_size > len(data)"}),"."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering custom iterator classes, FloatRange, sliding windows, and database paginators:"}),e.jsx(G,{questions:ee})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with custom iterator blueprints, FloatRange templates, and sliding window recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(V,{content:J,filename:"python_topic7_custom_iterator_classes_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(Q,{})]})]})]})}export{me as default};

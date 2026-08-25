import{b as i,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const A=`# topic6_files/pure_functions_and_referential_transparency.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Pure functions & immutable programming principles in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Pure Functions, Side-Effects & Referential Transparency\r
Demonstrates:\r
  1. The formal definition of Pure Functions: Determinism + Zero Side-Effects\r
  2. Referential Transparency: replacing function calls with return values safely\r
  3. The dangers of Impure Functions (global state mutation, mutating input arguments)\r
"""\r
\r
from typing import List, Dict, Any\r
\r
# GLOBAL STATE (FOR DEMONSTRATING IMPURE ANTI-PATTERNS)\r
_global_audit_counter = 0\r
\r
# ----------------------------------------------------------------------\r
# 1. IMPURE FUNCTIONS (ANTI-PATTERNS)\r
# ----------------------------------------------------------------------\r
def impure_apply_discount(student_record: Dict[str, Any], discount: float) -> Dict[str, Any]:\r
    """IMPURE: Mutates the incoming input dictionary in-place and modifies global state!"""\r
    global _global_audit_counter\r
    _global_audit_counter += 1\r
    # IN-PLACE MUTATION (Dangerous side-effect! Destroys original caller's data!)\r
    student_record["fee"] = student_record["fee"] - discount\r
    return student_record\r
\r
\r
# ----------------------------------------------------------------------\r
# 2. PURE FUNCTIONS (FUNCTIONAL BEST PRACTICE)\r
# ----------------------------------------------------------------------\r
def pure_apply_discount(student_record: Dict[str, Any], discount: float) -> Dict[str, Any]:\r
    """PURE: Deterministic, zero side-effects, returns a brand new dictionary copy."""\r
    return {\r
        **student_record,\r
        "fee": student_record["fee"] - discount,\r
        "discount_applied": discount\r
    }\r
\r
\r
def demonstrate_pure_functions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PURE FUNCTIONS & REFERENTIAL TRANSPARENCY")\r
    print("=" * 70)\r
\r
    original_student = {"id": "STU-101", "name": "Sourav Mukherjee", "fee": 30000.0}\r
\r
    # 1. Demonstrating Pure Function Execution (Leaves original intact):\r
    print("1. Executing Pure Function \`pure_apply_discount()\`:")\r
    discounted_copy = pure_apply_discount(original_student, 5000.0)\r
\r
    print(f"   * Original Record (Intact & Unmutated) : {original_student}")\r
    print(f"   * Returned New Record Copy (Pure State): {discounted_copy}\\n")\r
\r
    # 2. Demonstrating Referential Transparency:\r
    # \`pure_apply_discount(record, 5000)\` can be replaced with its value anywhere in the code!\r
    print("2. Referential Transparency Invariant:")\r
    val1 = pure_apply_discount(original_student, 5000.0)\r
    val2 = pure_apply_discount(original_student, 5000.0)\r
    print(f"   * Call 1 == Call 2 (100% Deterministic): {val1 == val2}")\r
    print("   -> Function can be safely memoized, parallelized, or cached without concurrency locks!\\n")\r
\r
    # 3. Demonstrating Impure Function Mutation:\r
    print("3. Demonstrating Impure Function Side-Effects (In-Place Mutation):")\r
    impure_student = {"id": "STU-102", "name": "Priyanka Sen", "fee": 35000.0}\r
    print(f"   * Before Impure Call: {impure_student}")\r
    impure_apply_discount(impure_student, 5000.0)\r
    print(f"   * After Impure Call : {impure_student} (Original data was destroyed!)")\r
\r
    print(r"""\r
Pure Function Invariants:\r
  1. Given the same inputs, a pure function ALWAYS returns the exact same output.\r
  2. A pure function NEVER modifies input arguments, globals, or external filesystem/I/O state.\r
  3. Pure functions eliminate race conditions in multi-threaded concurrent pipelines.\r
""")\r
    print("[PASSED] Pure Functions and Referential Transparency Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pure_functions()\r
`,E=`# topic6_files/immutable_data_structures_and_frozen_dataclasses.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Pure functions & immutable programming principles in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: Immutable Data Structures & \`@dataclass(frozen=True)\`\r
Demonstrates:\r
  1. Built-in immutable types: \`tuple\`, \`frozenset\`, \`bytes\`\r
  2. Read-only dictionary views with \`types.MappingProxyType\`\r
  3. Enforcing strict schema immutability using \`@dataclass(frozen=True)\`\r
"""\r
\r
from dataclasses import dataclass, replace\r
from types import MappingProxyType\r
from typing import Set, Tuple\r
\r
# 1. Strict Immutable Data Container using frozen=True\r
@dataclass(frozen=True)\r
class ImmutableStudentRecord:\r
    student_id: str\r
    name: str\r
    course: str\r
    tuition_fee: float\r
    badges: Tuple[str, ...] = ()  # Must use immutable tuple, NOT mutable list!\r
\r
    def with_fee_discount(self, discount_inr: float) -> "ImmutableStudentRecord":\r
        """Pure Copy-on-Write transformation returning new frozen instance."""\r
        return replace(self, tuition_fee=self.tuition_fee - discount_inr)\r
\r
    def with_new_badge(self, badge: str) -> "ImmutableStudentRecord":\r
        """Pure Copy-on-Write adding badge to tuple."""\r
        return replace(self, badges=(*self.badges, badge))\r
\r
\r
def demonstrate_immutable_structures():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - IMMUTABLE STRUCTURES & FROZEN DATACLASSES")\r
    print("=" * 70)\r
\r
    # 1. Frozen Dataclass Instantiation:\r
    student = ImmutableStudentRecord(\r
        student_id="STU-101",\r
        name="Sourav Mukherjee",\r
        course="Python Full-Stack & AI",\r
        tuition_fee=35000.0,\r
        badges=("PYTHON_CORE", "DECORATORS")\r
    )\r
\r
    print("1. Inspecting Initial Frozen Dataclass:")\r
    print(f"   * Student ID : {student.student_id}")\r
    print(f"   * Name       : {student.name}")\r
    print(f"   * Fee        : INR {student.tuition_fee:,.2f}")\r
    print(f"   * Badges     : {student.badges}\\n")\r
\r
    # 2. Attempting Illegal In-Place Mutation:\r
    print("2. Attempting Direct Mutation (\`student.tuition_fee = 20000.0\`):")\r
    try:\r
        student.tuition_fee = 20000.0  # type: ignore\r
    except Exception as exc:\r
        print(f"   * [MUTATION PREVENTED] {type(exc).__name__}: {exc}")\r
        print("   -> Frozen dataclasses reject in-place attribute assignment!\\n")\r
\r
    # 3. Pure Copy-on-Write Transformation using dataclasses.replace:\r
    print("3. Pure Copy-on-Write Transformation (\`replace()\` / \`with_fee_discount()\`):")\r
    discounted_student = student.with_fee_discount(5000.0).with_new_badge("ADVANCED_COMPREHENSIONS")\r
\r
    print(f"   * Original Student (Still INR 35,000) : INR {student.tuition_fee:,.2f} | Badges: {student.badges}")\r
    print(f"   * New Student Copy (INR 30,000 + Badge): INR {discounted_student.tuition_fee:,.2f} | Badges: {discounted_student.badges}\\n")\r
\r
    # 4. Read-Only Dictionary Views with MappingProxyType:\r
    print("4. Read-Only Dictionary View with \`types.MappingProxyType\`:")\r
    internal_config = {"institution": "Coder & AccoTax", "city": "Barrackpore"}\r
    read_only_view = MappingProxyType(internal_config)\r
\r
    print(f"   * Read-Only Config View: {read_only_view['institution']} @ {read_only_view['city']}")\r
    try:\r
        read_only_view["city"] = "Kolkata"  # type: ignore\r
    except TypeError as exc:\r
        print(f"   * [MUTATION PREVENTED] TypeError: {exc}")\r
\r
    print(r"""\r
Immutability Invariants:\r
  1. Use \`@dataclass(frozen=True)\` for domain models to prevent accidental mutations.\r
  2. Use \`dataclasses.replace(instance, **changes)\` for pure copy-on-write updates.\r
  3. Wrap mutable dictionaries in \`MappingProxyType\` before exposing them to external consumers.\r
""")\r
    print("[PASSED] Immutable Data Structures & Frozen Dataclasses Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_immutable_structures()\r
`,I=`# topic6_files/side_effect_free_state_transitions.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Pure functions & immutable programming principles in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: Side-Effect-Free Functional State Transitions (Redux/Elm Pattern)\r
Demonstrates:\r
  1. Pure state transitions: \`reducer(state, action) -> new_state\`\r
  2. Time-travel auditing: preserving full immutable historical states\r
  3. Composing state updates with dictionary unpacking (\`{**state, ...}\`)\r
"""\r
\r
from typing import Dict, Any, List, Tuple\r
\r
# Type definition for immutable state\r
State = Dict[str, Any]\r
Action = Dict[str, Any]\r
\r
def student_state_reducer(state: State, action: Action) -> State:\r
    """Pure functional state reducer. NEVER mutates input 'state'."""\r
    action_type = action.get("type")\r
\r
    if action_type == "REGISTER_STUDENT":\r
        student_id = action["payload"]["id"]\r
        return {\r
            **state,\r
            "students": {\r
                **state["students"],\r
                student_id: action["payload"]\r
            },\r
            "total_registered": state["total_registered"] + 1\r
        }\r
\r
    elif action_type == "RECORD_PAYMENT":\r
        student_id = action["payload"]["id"]\r
        amount = action["payload"]["amount"]\r
        current_student = state["students"][student_id]\r
        updated_student = {\r
            **current_student,\r
            "fee_paid": current_student["fee_paid"] + amount,\r
            "status": "PAID_IN_FULL" if (current_student["fee_paid"] + amount) >= current_student["total_fee"] else "PARTIAL"\r
        }\r
        return {\r
            **state,\r
            "students": {\r
                **state["students"],\r
                student_id: updated_student\r
            },\r
            "total_collected": state["total_collected"] + amount\r
        }\r
\r
    return state  # Unknown action returns state unmodified\r
\r
\r
def demonstrate_functional_state_machine():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SIDE-EFFECT-FREE STATE MACHINE (REDUX PATTERN)")\r
    print("=" * 70)\r
\r
    # Initial Immutable Base State:\r
    state_v0: State = {\r
        "institution": "Coder & AccoTax",\r
        "total_registered": 0,\r
        "total_collected": 0.0,\r
        "students": {}\r
    }\r
\r
    # Action 1: Register Sourav\r
    action_1: Action = {\r
        "type": "REGISTER_STUDENT",\r
        "payload": {"id": "STU-101", "name": "Sourav Mukherjee", "total_fee": 30000.0, "fee_paid": 0.0, "status": "REGISTERED"}\r
    }\r
    state_v1 = student_state_reducer(state_v0, action_1)\r
\r
    # Action 2: Record Payment\r
    action_2: Action = {\r
        "type": "RECORD_PAYMENT",\r
        "payload": {"id": "STU-101", "amount": 30000.0}\r
    }\r
    state_v2 = student_state_reducer(state_v1, action_2)\r
\r
    # 1. Inspect State Evolution History (Time-Travel Proof):\r
    print("1. Time-Travel Audit History Across Immutable State Snapshots:")\r
    print(f"   * State V0 (Initial) : Total Students = {state_v0['total_registered']} | Total Collected = INR {state_v0['total_collected']}")\r
    print(f"   * State V1 (Enrolled): Total Students = {state_v1['total_registered']} | Total Collected = INR {state_v1['total_collected']}")\r
    print(f"   * State V2 (Paid)    : Total Students = {state_v2['total_registered']} | Total Collected = INR {state_v2['total_collected']:,.2f}\\n")\r
\r
    # 2. Verify Immutability Integrity:\r
    print("2. Verifying Previous Historical Snapshots were Untouched:")\r
    print(f"   * State V0 Students Dict: {state_v0['students']} (Still Empty!)")\r
    print(f"   * State V1 Sourav Status: {state_v1['students']['STU-101']['status']} (Still 'REGISTERED'!)")\r
    print(f"   * State V2 Sourav Status: {state_v2['students']['STU-101']['status']} (Cleanly 'PAID_IN_FULL'!)")\r
\r
    print(r"""\r
State Transition Invariants:\r
  1. \`(state, action) -> new_state\` is a pure function with 100% referential transparency.\r
  2. Historical state snapshots remain intact indefinitely, enabling complete audit trails and rollbacks.\r
""")\r
    print("\\n[PASSED] Side-Effect-Free State Transitions Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_functional_state_machine()\r
`,P=`# topic6_files/institutional_immutable_student_ledger_engine.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Pure functions & immutable programming principles in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Institutional Immutable Student Ledger Engine (Case Study)\r
Demonstrates:\r
  1. Complete immutable domain model using \`@dataclass(frozen=True)\`\r
  2. Pure transformation pipelines with tamper-proof audit hashing\r
  3. Verifiable time-travel historical state progression\r
"""\r
\r
import hashlib\r
import json\r
from dataclasses import dataclass, replace\r
from decimal import Decimal\r
from typing import Tuple, List, Dict, Any\r
\r
@dataclass(frozen=True)\r
class AcademicRecord:\r
    student_id: str\r
    name: str\r
    course: str\r
    tuition_fee: Decimal\r
    fee_paid: Decimal\r
    grade_points: Tuple[float, ...] = ()\r
    status: str = "REGISTERED"\r
\r
    @property\r
    def gpa(self) -> float:\r
        return round(sum(self.grade_points) / len(self.grade_points), 2) if self.grade_points else 0.0\r
\r
    @property\r
    def is_cleared(self) -> bool:\r
        return self.fee_paid >= self.tuition_fee\r
\r
    def apply_scholarship(self, discount_pct: Decimal) -> "AcademicRecord":\r
        """Pure copy-on-write scholarship application."""\r
        discount_amount = round(self.tuition_fee * (discount_pct / Decimal("100")), 2)\r
        new_fee = self.tuition_fee - discount_amount\r
        return replace(self, tuition_fee=new_fee)\r
\r
    def record_payment(self, amount: Decimal) -> "AcademicRecord":\r
        """Pure copy-on-write fee payment."""\r
        new_paid = self.fee_paid + amount\r
        new_status = "PAID_CLEARED" if new_paid >= self.tuition_fee else "PARTIAL"\r
        return replace(self, fee_paid=new_paid, status=new_status)\r
\r
    def append_grade(self, mark: float) -> "AcademicRecord":\r
        """Pure copy-on-write grade recording."""\r
        return replace(self, grade_points=(*self.grade_points, mark))\r
\r
    def compute_record_hash(self) -> str:\r
        """Computes deterministic cryptographic fingerprint of immutable state."""\r
        raw_repr = f"{self.student_id}|{self.name}|{self.tuition_fee}|{self.fee_paid}|{self.status}"\r
        return hashlib.sha256(raw_repr.encode("utf-8")).hexdigest()[:12]\r
\r
\r
def demonstrate_immutable_ledger_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL IMMUTABLE ACADEMIC LEDGER")\r
    print("=" * 70)\r
\r
    # 1. Instantiate Initial Immutable Student State:\r
    v0 = AcademicRecord(\r
        student_id="STU-101",\r
        name="Sourav Mukherjee",\r
        course="Python Full-Stack & AI",\r
        tuition_fee=Decimal("35000.00"),\r
        fee_paid=Decimal("0.00"),\r
        grade_points=(9.2, 9.5)\r
    )\r
\r
    print("1. Version 0 (Initial Enrolment State):")\r
    print(f"   * Status   : {v0.status} | Fee: INR {v0.tuition_fee:,.2f} | Paid: INR {v0.fee_paid:,.2f} | GPA: {v0.gpa}")\r
    print(f"   * Hash V0  : {v0.compute_record_hash()}\\n")\r
\r
    # 2. Pure Transition 1: Apply 15% Academic Scholarship:\r
    v1 = v0.apply_scholarship(Decimal("15.0"))\r
    print("2. Version 1 (Scholarship Applied via Pure Transformation):")\r
    print(f"   * Fee After 15% Discount: INR {v1.tuition_fee:,.2f}")\r
    print(f"   * Hash V1               : {v1.compute_record_hash()}\\n")\r
\r
    # 3. Pure Transition 2: Complete Tuition Payment:\r
    v2 = v1.record_payment(Decimal("29750.00"))\r
    print("3. Version 2 (Tuition Fee Paid in Full):")\r
    print(f"   * Status   : {v2.status} | Cleared: {v2.is_cleared}")\r
    print(f"   * Hash V2  : {v2.compute_record_hash()}\\n")\r
\r
    # 4. Audit Proof: Verifying Historical Immutability\r
    print("4. Cryptographic Audit Chain (Zero Tampering):")\r
    audit_chain = [v0, v1, v2]\r
    for idx, snap in enumerate(audit_chain):\r
        print(f"   * Snapshot V{idx} [{snap.compute_record_hash()}] Fee: INR {snap.tuition_fee:>9,.2f} | Paid: INR {snap.fee_paid:>9,.2f} | Status: {snap.status}")\r
\r
    print("\\n[PASSED] Institutional Immutable Student Ledger Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_immutable_ledger_suite()\r
`,R=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
        TOPIC 6: PURE FUNCTIONS & IMMUTABLE PROGRAMMING PRINCIPLES IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. PURE FUNCTION INVARIANTS\r
--------------------------------------------------------------------------------\r
  * Deterministic: Same input ALWAYS returns exact same output\r
  * Zero Side-Effects: Never mutates arguments, globals, or external I/O\r
  * Referential Transparency: func(x) can be replaced with its returned value\r
\r
--------------------------------------------------------------------------------\r
2. FROZEN DATACLASS & COPY-ON-WRITE\r
--------------------------------------------------------------------------------\r
  @dataclass(frozen=True)\r
  class Student:\r
      id: str\r
      fee: Decimal\r
      badges: Tuple[str, ...] = ()\r
\r
  # Update without mutating:\r
  updated_student = dataclasses.replace(student, fee=new_fee)\r
\r
--------------------------------------------------------------------------------\r
3. FUNCTIONAL STATE REDUCER\r
--------------------------------------------------------------------------------\r
  def reducer(state: State, action: Action) -> State:\r
      return {**state, "balance": state["balance"] + action["amount"]}\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: PURE FUNCTIONS & IMMUTABILITY\r
================================================================================\r
`,C=[{question:"What are the two mandatory criteria that define a 'Pure Function' in Python?",shortAnswer:"1. Determinism: Given the same arguments, it ALWAYS returns the exact same result. 2. Zero Side-Effects: It does not mutate input arguments, global variables, or external system state (I/O, files, network).",explanation:"The formal definition of mathematical functional purity.",hint:"1. Deterministic output for same inputs. 2. No side-effects on external state or input arguments.",level:"basic",codeExample:"def pure_add(a, b): return a + b # 100% Pure"},{question:"What is 'Referential Transparency' in functional programming?",shortAnswer:"An expression or function call is referentially transparent if it can be replaced with its evaluated return value anywhere in the program without altering the program's behavior.",explanation:"Enables safe compiler optimizations, memoization, and mathematical reasoning.",hint:"The function call can be replaced directly with its return value without altering behavior.",level:"moderate",codeExample:"# pure_square(4) can be replaced with 16 anywhere in the codebase"},{question:"Why is mutating an input dictionary or list in-place inside a function considered dangerous?",shortAnswer:"Because it alters the caller's data without their knowledge, introducing subtle side-effects, breaking concurrency safety, and making functions unpredictable.",explanation:"The hidden mutable state bug.",hint:"It destroys the caller's data unexpectedly and causes concurrency bugs.",level:"basic",codeExample:"# BAD: def add_item(d): d['key'] = 1 # In-place mutation!"},{question:"How does '@dataclass(frozen=True)' enforce immutability on domain model instances?",shortAnswer:"It generates '__setattr__' and '__delattr__' methods that raise a 'FrozenInstanceError' whenever any code attempts to modify or delete an attribute on the instance.",explanation:"Standard library dataclass immutability enforcement.",hint:"Raises FrozenInstanceError on any attribute assignment attempt.",level:"basic",codeExample:`@dataclass(frozen=True)
class User: name: str
u = User('Alice'); u.name = 'Bob' # FrozenInstanceError!`},{question:"How do you perform a 'Copy-on-Write' update on a frozen dataclass instance?",shortAnswer:"Using 'dataclasses.replace(instance, **changes)', which returns a brand new frozen instance containing the modified fields while leaving the original untouched.",explanation:"Pure non-mutating update pattern for dataclasses.",hint:"Use dataclasses.replace(instance, **changes).",level:"basic",codeExample:"updated_user = dataclasses.replace(user, name='Bob')"},{question:"Why MUST list fields in a frozen dataclass be typed as 'Tuple' instead of 'List'?",shortAnswer:"'frozen=True' only prevents reassigning the attribute reference ('obj.badges = ...'); if 'badges' is a mutable 'list', its contents can still be mutated in-place ('obj.badges.append(...)').",explanation:"Shallow immutability vs deep immutability.",hint:"Lists can still be mutated in-place with .append(); tuples are fully immutable.",level:"moderate",codeExample:"badges: Tuple[str, ...] = () # Safe; List[str] is mutable!"},{question:"What is 'types.MappingProxyType' and when should you use it?",shortAnswer:"A standard library wrapper that provides an immutable, read-only view of a dictionary, preventing external callers from modifying internal configuration or lookup maps.",explanation:"Read-only dictionary encapsulation.",hint:"Provides a read-only view over a dictionary.",level:"moderate",codeExample:`from types import MappingProxyType
read_only = MappingProxyType({'api_key': 'secret'})`},{question:"How do Pure Functions eliminate race conditions in multi-threaded concurrent Python applications?",shortAnswer:"Because pure functions operate exclusively on immutable data and never modify shared state, multiple threads can execute the function simultaneously without locks ('threading.Lock').",explanation:"Lock-free concurrency through immutability.",hint:"Threads never mutate shared state, eliminating lock contention and race conditions.",level:"moderate",codeExample:"# Concurrent threads can read immutable data safely without locks"},{question:"What is the 'Functional State Reducer' pattern ('(state, action) -> new_state')?",shortAnswer:"A design pattern where state transitions are computed by a pure reducer function that receives the previous state and an action, returning a new immutable state dictionary without mutating the previous state.",explanation:"Redux / Elm architecture for predictable state management.",hint:"A pure function taking (old_state, action) and returning new_state.",level:"moderate",codeExample:"def reducer(state, action): return {**state, 'count': state['count'] + 1}"},{question:"Why is 'random.random()' or 'time.time()' inside a function considered impure?",shortAnswer:"Because they introduce non-determinism: calling the function with the exact same arguments produces different return values across successive invocations.",explanation:"Non-deterministic side-effects.",hint:"They produce different results on every call, violating determinism.",level:"basic",codeExample:"def get_id(): return time.time() # Impure (non-deterministic)"},{question:"How do you refactor an impure timestamp-dependent function into a pure function?",shortAnswer:"Inject the timestamp as an explicit argument ('def generate_receipt(order, timestamp=None):') rather than calling 'time.time()' internally.",explanation:"Dependency injection for functional purity.",hint:"Pass the timestamp in as an argument instead of calling time.time() internally.",level:"moderate",codeExample:"def create_log(msg, current_time): return {'msg': msg, 'ts': current_time}"},{question:"What is 'Memoization' and why does it require pure functions?",shortAnswer:"Memoization caches return values indexed by function arguments; if a function is impure or relies on external state, the cached value will become stale or incorrect.",explanation:"Caching optimization enabled by referential transparency.",hint:"Caching results based on inputs requires deterministic pure functions.",level:"basic",codeExample:`import functools
@functools.lru_cache
def fib(n): ...`},{question:"How do you add an element to an immutable tuple without mutating the original?",shortAnswer:"Using tuple unpacking / concatenation: 'new_tuple = (*old_tuple, new_item)' (or 'old_tuple + (new_item,)').",explanation:"Non-mutating tuple extension.",hint:"Use (*old_tuple, new_item) or old_tuple + (new_item,).",level:"basic",codeExample:"badges = ('PY', 'AI'); new_badges = (*badges, 'DS')"},{question:"What is a 'frozenset' in Python?",shortAnswer:"An immutable version of a Python 'set'; once created, elements cannot be added or removed, making 'frozenset' hashable and usable as dictionary keys or set members.",explanation:"Immutable hashable set collection.",hint:"An immutable, hashable set that can be used as a dictionary key.",level:"basic",codeExample:"valid_codes = frozenset(['PY-AI', 'DS-ML'])"},{question:"How do you update a nested key in an immutable dictionary using dictionary unpacking?",shortAnswer:"Using nested dictionary unpacking: '{**state, 'user': {**state['user'], 'name': 'Bob'}}'.",explanation:"Deep copy-on-write with dictionary unpacking.",hint:"Nest {**dict, key: new_val} unpacking expressions.",level:"moderate",codeExample:"{**state, 'user': {**state['user'], 'status': 'ACTIVE'}}"},{question:"What is 'Time-Travel Debugging' in immutable architectures?",shortAnswer:"Because every state transition produces a new immutable snapshot while keeping previous states intact, developers can inspect, replay, or roll back to any historical point in time.",explanation:"Auditing and debugging superpowers of immutable state.",hint:"Inspecting or replaying past immutable state snapshots without data destruction.",level:"moderate",codeExample:"history = [state_v0, state_v1, state_v2]"},{question:"Why should default mutable arguments (e.g. 'def func(items=[])') NEVER be used in Python?",shortAnswer:"Default arguments are evaluated ONCE at function definition time; mutating 'items.append()' alters the shared default object across all subsequent function calls.",explanation:"The infamous Python mutable default argument trap.",hint:"Default lists are shared across all invocations; use None as default instead.",level:"basic",codeExample:"# BAD: def f(x, l=[]): l.append(x) -> GOOD: def f(x, l=None): l = l or []"},{question:"What is the performance tradeoff of immutable data structures in pure Python?",shortAnswer:"Creating new object copies on every mutation introduces slight memory allocation and garbage collection overhead compared to in-place mutation, though it eliminates locking overhead.",explanation:"Memory allocation vs concurrency safety tradeoff.",hint:"Slight allocation overhead for new copies vs massive concurrency and debugging gains.",level:"moderate",codeExample:"# Tradeoff: Object copies vs lock-free thread safety"},{question:"What third-party libraries provide high-performance persistent immutable data structures in Python?",shortAnswer:"'pyrsistent' (providing PVector, PMap, PSet) and 'immutables' (used by Python's asyncio contextvars).",explanation:"Production immutable data structure libraries.",hint:"pyrsistent and immutables (HAMT trie-based persistent structures).",level:"complex",codeExample:"from pyrsistent import pvector, pmap"},{question:"How does immutability prevent 'Torn Reads' in concurrent multi-producer environments?",shortAnswer:"Readers always receive a complete, unchangeable snapshot; writers create new versions without modifying the version currently being read by other threads.",explanation:"Snapshot isolation in RAM.",hint:"Readers see an immutable snapshot that is never modified out from under them.",level:"moderate",codeExample:"# Lock-free snapshot isolation"},{question:"How do you verify whether a function is pure during automated unit testing?",shortAnswer:"Call the function multiple times with the same input to verify deterministic outputs, and assert that input argument objects remain identical and unmutated before and after the call.",explanation:"Testing purity invariants.",hint:"Verify same output on repeat calls and assert input arguments are unchanged.",level:"basic",codeExample:"assert func(data) == func(data); assert data == original_snapshot"},{question:"What is the difference between shallow copy ('copy.copy') and deep copy ('copy.deepcopy') in immutable workflows?",shortAnswer:"Shallow copy duplicates only the outer container; nested mutable objects (e.g. inner lists) remain shared. Deep copy recursively duplicates all nested objects.",explanation:"Container copying boundaries.",hint:"Shallow copies outer container; deep copy duplicates all nested sub-objects.",level:"moderate",codeExample:`import copy
deep = copy.deepcopy(nested_state)`},{question:"How do you implement a cryptographic audit hash on an immutable record?",shortAnswer:"Compute a SHA-256 hash over the deterministic string representation of the record's attributes: 'hashlib.sha256(repr.encode()).hexdigest()'.",explanation:"Tamper-proof cryptographic state verification.",hint:"Hash the deterministic string representation of the immutable fields with sha256.",level:"moderate",codeExample:"hashlib.sha256(f'{self.id}|{self.fee}'.encode()).hexdigest()"},{question:"Why are immutable dataclasses automatically hashable if all their fields are hashable?",shortAnswer:"Setting 'frozen=True' causes Python to automatically generate a '__hash__' method based on the field values, allowing the dataclass instance to be stored in sets or used as dictionary keys.",explanation:"Automatic hash generation in frozen dataclasses.",hint:"frozen=True auto-generates __hash__, allowing use in sets and as dict keys.",level:"basic",codeExample:`@dataclass(frozen=True)
class Point: x: int; y: int
point_set = {Point(1, 2), Point(3, 4)}`},{question:"What is the ultimate golden rule for Pure Functions and Immutability in Python?",shortAnswer:"Write pure functions with zero side-effects and deterministic outputs, model domain entities with '@dataclass(frozen=True)', and manage state transitions via '(state, action) -> new_state' copy-on-write reducers.",explanation:"The complete enterprise guideline for pure functional and immutable architecture in Python.",hint:"Pure deterministic functions, frozen dataclasses, and copy-on-write state reducers.",level:"basic",codeExample:"# Python Pure Functional & Immutability Mastery"}];function H(){const u=i.useRef([]),[o,m]=i.useState("pureAnatomy"),y={version:0,student_id:"STU-101",name:"Sourav Mukherjee",course:"Python Full-Stack & AI",tuition_fee:35e3,fee_paid:0,status:"REGISTERED",badges:["PYTHON_CORE","DECORATORS"],hash:"a4f81c9d2b0e"},[a,p]=i.useState([y]),[h,d]=i.useState(0),[b,l]=i.useState(null),x=a[h],g=()=>{l(null);const t=a[a.length-1],n=t.tuition_fee*.15,s={...t,version:t.version+1,tuition_fee:t.tuition_fee-n,hash:Math.random().toString(16).substring(2,14)};p(f=>[...f,s]),d(a.length)},_=()=>{l(null);const t=a[a.length-1],n=t.tuition_fee,s={...t,version:t.version+1,fee_paid:n,status:"PAID_CLEARED",hash:Math.random().toString(16).substring(2,14)};p(f=>[...f,s]),d(a.length)},v=()=>{l(null);const t=a[a.length-1],n={...t,version:t.version+1,badges:[...t.badges,"ADVANCED_COMPREHENSIONS"],hash:Math.random().toString(16).substring(2,14)};p(s=>[...s,n]),d(a.length)},N=()=>{l("FrozenInstanceError: cannot assign to field 'tuition_fee' on immutable @dataclass(frozen=True) instance!")};i.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!u.current.includes(t)&&u.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Pure Functions & ",e.jsx("span",{className:"text-teal-400",children:"Immutable Programming"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master mathematical purity and immutability in Python: deterministic execution without side-effects, referential transparency, frozen domain models with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@dataclass(frozen=True)"}),", read-only dictionary views (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"MappingProxyType"}),"), and pure functional state reducers."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💎 Pure Functions (Zero Side-Effects)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧊 `@dataclass(frozen=True)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Read-Only `MappingProxyType`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🕰️ Time-Travel State Reducers"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💎"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Principles of Functional Purity & Immutability"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Writing pure functions and modeling immutable state eliminates race conditions, simplifies unit testing, and unlocks referential transparency:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Deterministic Output"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"f(x) == f(x) Always"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Given the same input arguments, the function always returns the exact same result."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Zero Side-Effects"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"No In-Place Mutation"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Never modifies incoming arguments, global variables, or external system I/O."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Referential Transparency"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Value Equivalence"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"The function call can be safely replaced by its return value without altering program behavior."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The In-Place Argument Mutation Hazard"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Modifying a caller's dictionary via ",e.jsx("code",{className:"text-rose-400 font-mono",children:'dict["key"] = val'})," is a catastrophic side-effect that destroys original data and creates concurrency race conditions. Always use copy-on-write unpacking ",e.jsx("code",{className:"text-teal-300 font-mono",children:'{**dict, "key": val}'})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"dataclasses.replace()"}),"!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Pure Functions, Copy-on-Write & State Trees"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("pureAnatomy"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="pureAnatomy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Pure Function Anatomy"}),e.jsx("button",{onClick:()=>m("copyOnWrite"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="copyOnWrite"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Copy-on-Write"}),e.jsx("button",{onClick:()=>m("auditChain"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="auditChain"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Immutable Audit Chain"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining side-effect boundaries, copy-on-write memory branches, and verifiable time-travel audit chains:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="pureAnatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ANATOMY OF A PURE FUNCTION VS IMPURE FUNCTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Pure Function: `pure_apply_discount(record, 5k)`"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Takes Immutable Input: `record`"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. Operates in Isolated Scope (Zero Side-Effects)"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. Returns Brand New Object: `{**record, fee: 25k}`"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"100% Referential Transparency:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Input object is completely untouched. Safe for parallel threads."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Impure Function: `impure_discount(record, 5k)` [HAZARD]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. Mutates `record['fee'] -= 5000` In-Place!"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. Mutates global audit counter: `global counter += 1`"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"3. Destroys Caller's Original State!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Side-Effect Hazard:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Causes race conditions and bugs in multi-threaded code."})]})]}):o==="copyOnWrite"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"COPY-ON-WRITE PERSISTENCE WITH `@dataclass(frozen=True)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Frozen Instance V0"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'Student(id="STU-101")'}),e.jsx("text",{x:"15",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"tuition_fee = 35000.0"}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"IMMUTABLE IN RAM"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Guaranteed Safety:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Any direct attribute"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"assignment raises error."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"310",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"2. `dataclasses.replace()`"}),e.jsx("text",{x:"310",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"replace(v0, fee=30000.0)"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Clones fields with updates"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Zero mutation on V0"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"320",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Pure Transition:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Produces new instance"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"leaving V0 untouched."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"605",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"3. Frozen Instance V1"}),e.jsx("text",{x:"605",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'Student(id="STU-101")'}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"tuition_fee = 30000.0"}),e.jsx("text",{x:"605",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"V0 and V1 Coexist!"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"615",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Time-Travel Ready:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Both versions exist in RAM"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"for complete auditability."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"IMMUTABLE STATE MACHINE AUDIT CHAIN (`(state, action) -> new_state`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Verifiable Cryptographic Audit Progression"}),e.jsxs("g",{transform:"translate(20, 55)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"150",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"10",y:"25",fill:"#a78bfa",fontSize:"10 font-bold",children:"Snapshot V0 [Enrolled]"}),e.jsx("text",{x:"10",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Fee: INR 35,000.00"}),e.jsx("text",{x:"10",y:"75",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Paid: INR 0.00"}),e.jsx("text",{x:"10",y:"95",fill:"#38bdf8",fontSize:"8 font-mono",children:"Hash: #a4f81c9d2b0e"}),e.jsx("text",{x:"250",y:"80",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"280",y:"0",width:"240",height:"150",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"290",y:"25",fill:"#38bdf8",fontSize:"10 font-bold",children:"Snapshot V1 [Scholarship]"}),e.jsx("text",{x:"290",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Fee: INR 29,750.00 (-15%)"}),e.jsx("text",{x:"290",y:"75",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Paid: INR 0.00"}),e.jsx("text",{x:"290",y:"95",fill:"#38bdf8",fontSize:"8 font-mono",children:"Hash: #7e2d9a3b8c4f"}),e.jsx("text",{x:"530",y:"80",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"560",y:"0",width:"240",height:"150",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"570",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"Snapshot V2 [Paid Cleared]"}),e.jsx("text",{x:"570",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Fee: INR 29,750.00"}),e.jsx("text",{x:"570",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Paid: INR 29,750.00"}),e.jsx("text",{x:"570",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Hash: #3b9f4e8d1a6c"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Pure Function & Immutable State Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Dispatch pure state transition actions, attempt illegal in-place mutations, and inspect time-travel historical audit snapshots:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Pure Action Dispatcher (Copy-on-Write):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:g,className:"py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"➕ Apply 15% Scholarship"}),e.jsx("button",{onClick:_,className:"py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"💳 Pay Tuition in Full"}),e.jsx("button",{onClick:v,className:"py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"🏅 Award Badge"}),e.jsx("button",{onClick:N,className:"py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"🚫 Illegal Direct Mutation"})]}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-300 block",children:"Time-Travel Inspector: View Historical Snapshot:"}),e.jsx("div",{className:"flex flex-wrap gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:a.map((t,n)=>e.jsxs("button",{onClick:()=>{l(null),d(n)},className:c("px-3 py-1 rounded transition-all",h===n?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:["Snapshot V",t.version]},n))})]}),b&&e.jsxs("div",{className:"p-3 bg-rose-950/40 border border-rose-700/80 rounded-lg text-xs font-mono text-rose-300 space-y-1",children:[e.jsx("div",{className:"font-bold uppercase text-[10px]",children:"Purity Invariant Protected:"}),e.jsx("div",{className:"text-[11px] leading-relaxed",children:b})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[10px] font-bold uppercase text-slate-400",children:[e.jsxs("span",{children:["Current Snapshot: Version ",x.version]}),e.jsxs("span",{className:"text-teal-300",children:["Hash: #",x.hash]})]}),e.jsxs("div",{className:"text-[11px] text-slate-300 pt-1",children:["Historical snapshots stored in memory: ",a.length," versions."]})]}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[170px] font-mono text-xs space-y-1",children:e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:JSON.stringify(x,null,2)})})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Immutability & Purity Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Immutability Primitive"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Mutation Prevention Mechanism"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Update Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Benefit"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`@dataclass(frozen=True)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Raises `FrozenInstanceError`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300",children:"`dataclasses.replace(obj, ...)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Strict domain model immutability"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`MappingProxyType(dict)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Raises `TypeError` on item assignment"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"Read-only proxy view"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Safe dictionary encapsulation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`frozenset([items])`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Raises `AttributeError` (no `.add()`)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300",children:"`frozenset.union()`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Hashable set for dictionary keys"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`Tuple[T, ...]`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Raises `TypeError` on index assignment"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300",children:"`(*t, new_item)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Immutable ordered sequence"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating pure functions, frozen dataclasses, Redux-style state machines, and institutional immutable academic ledgers:"}),e.jsx(w,{files:[{filename:"pure_functions_and_referential_transparency.py",code:A,description:"Pure functions, referential transparency, and side-effect avoidance."},{filename:"immutable_data_structures_and_frozen_dataclasses.py",code:E,description:"Frozen dataclasses, MappingProxyType, and copy-on-write."},{filename:"side_effect_free_state_transitions.py",code:I,description:"Pure reducer state transitions, Redux pattern, and time-travel snapshots."},{filename:"institutional_immutable_student_ledger_engine.py",code:P,description:"Frozen dataclass domain models, copy-on-write, and cryptographic audit chains."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: In-Place Argument Mutation"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Modifying an input list or dictionary inside a function mutates the caller's data unexpectedly, introducing hidden state bugs."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always return a new copy using ",e.jsx("code",{className:"text-emerald-300",children:"{**input_dict, ...}"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Default Mutable Function Arguments"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"def add_student(name, roster=[])"})," shares the same list across all invocations!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"roster=None"})," and initialize inside: ",e.jsx("code",{className:"text-emerald-300",children:"roster = roster or []"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Mutable List Fields in Frozen Dataclasses"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"frozen=True"})," only prevents reassigning the list attribute; ",e.jsx("code",{className:"text-slate-300 font-mono",children:"obj.badges.append()"})," will still mutate the inner list!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always type collection fields as ",e.jsx("code",{className:"text-emerald-300",children:"Tuple[str, ...]"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Non-Deterministic Impure Functions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"time.time()"})," or ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"random.randint()"})," inside a function destroys referential transparency and memoization."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass timestamps and random seeds as explicit input arguments."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering pure functions, referential transparency, frozen dataclasses, and time-travel state machines:"}),e.jsx(S,{questions:C})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with pure function rules, frozen dataclass recipes, and state reducer patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(j,{content:R,filename:"python_topic6_pure_functions_and_immutability_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(T,{})]})]})]})}export{H as default};

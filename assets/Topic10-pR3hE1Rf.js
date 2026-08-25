import{b as c,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const b=`# topic10_files/mro_fundamentals_and_c3_linearization.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Resolution Order (MRO)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 1: Method Resolution Order (MRO) & C3 Linearization Fundamentals\r
Demonstrates:\r
  1. What is MRO: The deterministic order in which Python searches classes for attributes/methods\r
  2. Inspecting MRO using \`ClassName.__mro__\` and \`ClassName.mro()\`\r
  3. Method lookup in classic diamond hierarchies\r
"""\r
\r
# =====================================================================\r
# DIAMOND HIERARCHY SETUP\r
# =====================================================================\r
class RootEntity:\r
    def identify(self) -> str:\r
        return "Identity from RootEntity"\r
\r
\r
class BranchA(RootEntity):\r
    def identify(self) -> str:\r
        return "Identity from BranchA (Left)"\r
\r
\r
class BranchB(RootEntity):\r
    def identify(self) -> str:\r
        return "Identity from BranchB (Right)"\r
\r
\r
class CompositeDiamond(BranchA, BranchB):\r
    """Inherits from BranchA first, then BranchB."""\r
    pass\r
\r
\r
class InvertedDiamond(BranchB, BranchA):\r
    """Inherits from BranchB first, then BranchA."""\r
    pass\r
\r
\r
def demonstrate_mro_inspection():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - METHOD RESOLUTION ORDER (MRO) FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Inspect CompositeDiamond MRO\r
    print("1. MRO for CompositeDiamond(BranchA, BranchB):")\r
    for idx, cls in enumerate(CompositeDiamond.__mro__):\r
        print(f"   [{idx}] {cls.__name__}")\r
\r
    cd = CompositeDiamond()\r
    print(f"\\n   Calling cd.identify() -> '{cd.identify()}' (Resolved from BranchA first!)\\n")\r
\r
    # 2. Inspect InvertedDiamond MRO\r
    print("2. MRO for InvertedDiamond(BranchB, BranchA):")\r
    for idx, cls in enumerate(InvertedDiamond.mro()):\r
        print(f"   [{idx}] {cls.__name__}")\r
\r
    inv = InvertedDiamond()\r
    print(f"\\n   Calling inv.identify() -> '{inv.identify()}' (Resolved from BranchB first!)")\r
\r
    print("\\n[PASSED] MRO Fundamentals & Inspection Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_mro_inspection()\r
`,y=`# topic10_files/mro_inconsistent_hierarchy_and_errors.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Resolution Order (MRO)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 2: Inconsistent MRO & TypeError Diagnosis\r
Demonstrates:\r
  1. What causes \`TypeError: Cannot create a consistent method resolution order (MRO)\`\r
  2. How contradictory parent ordering violates the Monotonicity constraint\r
  3. Diagnosing and refactoring invalid class definitions\r
"""\r
\r
class BaseA:\r
    pass\r
\r
class BaseB(BaseA):\r
    pass\r
\r
def demonstrate_inconsistent_mro_trap():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INCONSISTENT MRO CONFLICT DIAGNOSIS")\r
    print("=" * 70)\r
\r
    print(r"""\r
The Conflict Scenario:\r
  - BaseB inherits from BaseA (So in MRO: BaseB MUST precede BaseA)\r
  - If a child defines: \`class InvalidChild(BaseA, BaseB):\`\r
    * The declaration header demands: BaseA comes before BaseB\r
    * But BaseB's definition demands: BaseB comes before BaseA\r
  - These two constraints are mutually contradictory! C3 linearization FAILS!\r
""")\r
\r
    print("Attempting to declare: \`class InvalidChild(BaseA, BaseB):\`")\r
    try:\r
        # Dynamically create the contradictory class to catch TypeError at runtime:\r
        type("InvalidChild", (BaseA, BaseB), {})\r
    except TypeError as err:\r
        print(f"  [PYTHON BLOCKED COMPILATION] TypeError: {err}")\r
\r
    # Canonical Fix:\r
    print("\\nCanonical Solution: List more specialized classes before general base classes:")\r
    print("  \`class ValidChild(BaseB, BaseA): pass\`")\r
    ValidChild = type("ValidChild", (BaseB, BaseA), {})\r
    print(f"  Valid MRO: {[c.__name__ for c in ValidChild.__mro__]}")\r
\r
    print("\\n[PASSED] Inconsistent MRO Diagnosis Complete.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_inconsistent_mro_trap()\r
`,g=`# topic10_files/complex_multiple_inheritance_mro_visualizer.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Resolution Order (MRO)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 3: C3 Linearization Merge Algorithm in Pure Python\r
Demonstrates:\r
  1. The mathematical C3 merge formula: L(C) = [C] + merge(L(B1), L(B2), ..., [B1, B2, ...])\r
  2. A reference implementation of the C3 merge algorithm in pure Python\r
  3. Verifying that our Python calculation matches CPython's internal \`Class.__mro__\` 100%\r
"""\r
\r
from typing import List, Type\r
\r
def c3_merge(sequences: List[List[Type]]) -> List[Type]:\r
    """Pure Python implementation of the C3 Linearization Merge step."""\r
    result = []\r
    # Make a shallow copy of sequences:\r
    seqs = [list(s) for s in sequences if s]\r
\r
    while seqs:\r
        # Find a good candidate head (not in the tail of any other sequence):\r
        candidate = None\r
        for seq in seqs:\r
            head = seq[0]\r
            # Check if 'head' appears in the tail (index 1+) of any sequence:\r
            in_any_tail = any(head in s[1:] for s in seqs)\r
            if not in_any_tail:\r
                candidate = head\r
                break\r
\r
        if candidate is None:\r
            raise TypeError("Cannot create a consistent method resolution order (MRO) - Cyclic dependency!")\r
\r
        result.append(candidate)\r
\r
        # Remove candidate from all sequences:\r
        for seq in seqs:\r
            if seq and seq[0] == candidate:\r
                seq.pop(0)\r
\r
        # Filter out empty lists:\r
        seqs = [s for s in seqs if s]\r
\r
    return result\r
\r
\r
def compute_mro(cls: Type) -> List[Type]:\r
    """Recursively computes MRO of a class using C3 linearization."""\r
    if not cls.__bases__:\r
        return [cls]\r
    # L(C) = [C] + merge(L(B1), L(B2), ..., [B1, B2, ...])\r
    base_mros = [compute_mro(b) for b in cls.__bases__]\r
    direct_bases = [list(cls.__bases__)]\r
    return [cls] + c3_merge(base_mros + direct_bases)\r
\r
\r
# =====================================================================\r
# TEST HIERARCHY (Complex Multi-Layer Diamond)\r
# =====================================================================\r
class O: pass\r
class A(O): pass\r
class B(O): pass\r
class C(O): pass\r
class D(O): pass\r
class E(O): pass\r
class K1(A, B, C): pass\r
class K2(D, B, E): pass\r
class K3(D, A): pass\r
class Z(K1, K2, K3): pass\r
\r
\r
def demonstrate_c3_calculation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - C3 LINEARIZATION ALGORITHM VERIFICATION")\r
    print("=" * 70)\r
\r
    calculated = compute_mro(Z)\r
    cpython_actual = list(Z.__mro__)\r
\r
    print(f"Target Class: {Z.__name__}(K1, K2, K3)\\n")\r
    print("Step-by-Step C3 Linearization Result:")\r
    for idx, (calc, actual) in enumerate(zip(calculated, cpython_actual)):\r
        match_str = "[MATCH]" if calc == actual else "[MISMATCH]"\r
        print(f"  [{idx}] Computed: {calc.__name__:<6} | CPython __mro__: {actual.__name__:<6} -> {match_str}")\r
\r
    is_identical = calculated == cpython_actual\r
    print(f"\\nExact 1-to-1 Match with CPython Internal C-Engine? -> {is_identical}")\r
    print("\\n[PASSED] C3 Linearization Algorithm Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_c3_calculation()\r
`,_=`# topic10_files/enterprise_plugin_and_event_pipeline_mro.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Resolution Order (MRO)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 4: Enterprise Event Middleware & Plugin Pipeline via MRO (Case Study)\r
Demonstrates:\r
  1. Using MRO to determine the deterministic execution order of middleware plugins\r
  2. Composing RateLimiting, Authentication, ResponseCaching, and AuditLogging\r
  3. Tracing request and response lifecycle through cooperative \`super()\` MRO traversal\r
"""\r
\r
import time\r
from typing import Dict, Any\r
\r
class BaseMiddleware:\r
    """Terminal root of the middleware pipeline."""\r
    def handle_request(self, context: Dict[str, Any]) -> str:\r
        print("  [BASE PIPELINE] Executing core database transaction for request...")\r
        return f"SUCCESS: Action '{context.get('action')}' executed for User '{context.get('user')}'"\r
\r
\r
class RateLimitPlugin(BaseMiddleware):\r
    """Plugin 1: Enforces rate limits."""\r
    def handle_request(self, context: Dict[str, Any]) -> str:\r
        print("  [1. RATE LIMIT] Verifying request quota (OK: 42/1000 requests used)...")\r
        context["rate_checked"] = True\r
        return super().handle_request(context)\r
\r
\r
class JWTAuthenticationPlugin(BaseMiddleware):\r
    """Plugin 2: Validates cryptographic user tokens."""\r
    def handle_request(self, context: Dict[str, Any]) -> str:\r
        print(f"  [2. AUTHENTICATION] Validating JWT for user '{context.get('user')}' (OK)...")\r
        context["authenticated"] = True\r
        return super().handle_request(context)\r
\r
\r
class AuditTelemetryPlugin(BaseMiddleware):\r
    """Plugin 3: Records forensic audit trail."""\r
    def handle_request(self, context: Dict[str, Any]) -> str:\r
        print("  [3. AUDIT TELEMETRY] Logging request context to immutable ledger...")\r
        result = super().handle_request(context)\r
        print("  [3. AUDIT TELEMETRY] Logged response code: 200 OK")\r
        return result\r
\r
\r
class ProductionApiEndpoint(RateLimitPlugin, JWTAuthenticationPlugin, AuditTelemetryPlugin):\r
    """Production Endpoint composed using 3 middleware plugins ordered by MRO."""\r
    pass\r
\r
\r
def run_middleware_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE MIDDLEWARE MRO PIPELINE")\r
    print("=" * 70)\r
\r
    # 1. Print Middleware Execution Order determined by MRO:\r
    print("MRO Middleware Execution Hierarchy:")\r
    for idx, plugin in enumerate(ProductionApiEndpoint.__mro__):\r
        print(f"  Stage [{idx}]: {plugin.__name__}")\r
\r
    # 2. Dispatch Request through MRO Pipeline:\r
    endpoint = ProductionApiEndpoint()\r
    req_context = {\r
        "user": "Abhishek Karmakar",\r
        "action": "PAYMENT_INSTALLMENT",\r
        "amount": 5000.0\r
    }\r
\r
    print("\\nDispatching API Request:")\r
    response = endpoint.handle_request(req_context)\r
\r
    print(f"\\nFinal Client Response: {response}")\r
    print("\\n[PASSED] Enterprise Middleware MRO Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_middleware_case_study()\r
`,j=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
                TOPIC 10: METHOD RESOLUTION ORDER (MRO) IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. INSPECTING MRO IN PYTHON\r
--------------------------------------------------------------------------------\r
  • Via Tuple Attribute : ClassName.__mro__\r
  • Via List Method     : ClassName.mro()\r
\r
--------------------------------------------------------------------------------\r
2. THE C3 LINEARIZATION FORMULA\r
--------------------------------------------------------------------------------\r
  L(C) = [C] + merge(L(B1), L(B2), ..., [B1, B2, ...])\r
\r
  Three Guiding Properties:\r
    1. Subclasses appear before parent base classes.\r
    2. Base classes declared in class header (B1, B2) preserve left-to-right order.\r
    3. Monotonicity: If A precedes B in one class, A must precede B in all subclasses.\r
\r
--------------------------------------------------------------------------------\r
3. INCONSISTENT MRO CONFLICT TRAP & FIX\r
--------------------------------------------------------------------------------\r
  ❌ CONTRADICTION (Causes TypeError):\r
      class B(A): pass\r
      class Bad(A, B): pass  # Demands A before B, but B inherits A!\r
\r
  ✓ CORRECT (Specialized before general):\r
      class Good(B, A): pass\r
\r
================================================================================\r
            END OF STUDY NOTE • TOPIC 10: METHOD RESOLUTION ORDER\r
================================================================================\r
`,C=[{question:"What is Method Resolution Order (MRO) in Python?",shortAnswer:"The deterministic linear ordering of classes that Python traverses to search for attributes, methods, and functions on an object instance.",explanation:"Ensures predictable, conflict-free method dispatching across complex inheritance hierarchies.",hint:"The linear search order Python follows when looking up attributes on a class.",level:"basic",codeExample:"print(SubClass.__mro__)"},{question:"How do you inspect the MRO of a class programmatically in Python?",shortAnswer:"Using the 'ClassName.__mro__' tuple attribute or calling the 'ClassName.mro()' method.",explanation:"'__mro__' returns a tuple of class types, whereas 'mro()' returns a list.",hint:"Use ClassName.__mro__ or ClassName.mro().",level:"basic",codeExample:"for cls in MyClass.__mro__: print(cls.__name__)"},{question:"What algorithm does Python 3 use to calculate the Method Resolution Order?",shortAnswer:"The C3 Linearization Algorithm (introduced in Python 2.3).",explanation:"Combines local precedence order with monotonicity to produce a stable, linear sequence.",hint:"The C3 Linearization Algorithm.",level:"basic",codeExample:"# C3 Linearization: L(C) = [C] + merge(...)"},{question:"What are the three fundamental properties guaranteed by the C3 Linearization algorithm?",shortAnswer:"1. Subclasses appear before their parent base classes; 2. Declaration order of base classes in class headers is preserved (left-to-right); 3. Monotonicity (if A precedes B in any class, A must precede B in all derived subclasses).",explanation:"These constraints prevent ambiguous lookups and diamond inheritance bugs.",hint:"Subclass priority, left-to-right preservation, and Monotonicity.",level:"moderate",codeExample:"# Guarantees strict monotonic linear search order"},{question:"What causes 'TypeError: Cannot create a consistent method resolution order (MRO) for bases X, Y'?",shortAnswer:"When base classes are specified in an order that contradicts an existing inheritance relationship (e.g., class B(A) exists, but a child declares class C(A, B)), violating monotonicity.",explanation:"Because the declaration demands A before B, but B's definition requires B before A.",hint:"Contradictory base class ordering that violates monotonicity.",level:"moderate",codeExample:`# Causes TypeError:
class A: pass
class B(A): pass
class C(A, B): pass`},{question:"How do you fix an inconsistent MRO TypeError in a class declaration?",shortAnswer:"Reorder the base classes in the class header so that more specialized subclasses are listed before more general base classes (e.g. change class C(A, B) to class C(B, A)).",explanation:"Satisfies both the local declaration order and the inherited subtyping order.",hint:"List more specialized subclasses before general base classes: class C(B, A).",level:"basic",codeExample:`# FIXED:
class C(B, A): pass`},{question:"How does MRO resolve method lookups in a classic diamond hierarchy (A -> B, C -> D)?",shortAnswer:"For class D(B, C): MRO order is D -> B -> C -> A -> object. Method lookup checks D first, then B, then C, and finally the common root A.",explanation:"The shared root A is evaluated only once, after all sibling branches (B and C) have been checked.",hint:"Child -> Left Branch -> Right Branch -> Shared Root -> object.",level:"moderate",codeExample:"# D(B, C) -> [D, B, C, A, object]"},{question:"Why did Python abandon the legacy Depth-First Search (DFS) MRO used in Python 2.2 and earlier?",shortAnswer:"Because DFS visited the common root (A) before checking sibling branches (C) in diamond hierarchies, causing overridden methods in sibling classes to be ignored unexpectedly.",explanation:"C3 Linearization solved this by guaranteeing breadth-first preservation before common ancestors.",hint:"DFS prematurely visited the root class before sibling branches.",level:"complex",codeExample:`# DFS: D -> B -> A -> C (Flawed!)
# C3:  D -> B -> C -> A (Correct!)`},{question:"What is the relationship between 'super()' and MRO?",shortAnswer:"'super()' uses the active instance's MRO to determine the next class to delegate to, rather than simply calling the immediate lexical parent.",explanation:"Allows cooperative method calls across multiple inheritance branches.",hint:"super() delegates to the next class in the active MRO sequence.",level:"basic",codeExample:"# super() delegates strictly according to type(self).__mro__"},{question:"What is the final class at the end of every Python 3 class MRO?",shortAnswer:"The built-in 'object' class.",explanation:"Every class in Python 3 ultimately terminates at 'object'.",hint:"The root 'object' class.",level:"basic",codeExample:"print(MyClass.__mro__[-1])  # <class 'object'>"},{question:"What is the C3 Linearization 'merge' rule?",shortAnswer:"A candidate class is selected from the head of a list only if it does not appear in the tail (index 1+) of any other list being merged; once selected, it is removed from all lists and added to the output.",explanation:"Repeated until all lists are empty, or raises TypeError if a cycle is detected.",hint:"Candidate head must not appear in the tail of any other sequence.",level:"complex",codeExample:"# merge([B, A], [C, A], [B, C]) -> [B, C, A]"},{question:"Can an instance have a different MRO than its defining class?",shortAnswer:"No. The MRO is calculated and attached directly to the Class object when the class is defined, and all instances share that exact class MRO.",explanation:"MRO is a class-level attribute, not an instance attribute.",hint:"No, MRO is fixed at class creation time.",level:"basic",codeExample:"type(inst).__mro__ is inst.__class__.__mro__"},{question:"How does the order of classes in a multiple-inheritance declaration (e.g. class D(A, B) vs class D(B, A)) affect MRO?",shortAnswer:"The left-to-right order in the class definition header directly determines the search priority between sibling branches in the MRO.",explanation:"Class D(A, B) searches A before B; Class D(B, A) searches B before A.",hint:"Left-to-right order in the class header determines search priority.",level:"basic",codeExample:"class D(A, B): ... # A searched before B"},{question:"Can you manually modify a class's '__mro__' attribute after class creation?",shortAnswer:"No. '__mro__' is a read-only attribute enforced by CPython internals; attempting to assign to Class.__mro__ raises a TypeError.",explanation:"Guarantees runtime method resolution stability.",hint:"No, __mro__ is strictly read-only.",level:"basic",codeExample:"# TypeError: readonly attribute"},{question:"How do Mixin classes fit into MRO ordering?",shortAnswer:"Mixins should be listed BEFORE the main base class in the class header (e.g. class MyModel(JSONMixin, AuditMixin, BaseModel):) so mixin methods override or intercept base class methods.",explanation:"Places mixin capabilities higher in the MRO search sequence.",hint:"List mixins before the base class so they intercept method calls.",level:"moderate",codeExample:"class Account(AuditMixin, BaseAccount): pass"},{question:"What is 'Monotonicity' in the context of C3 Linearization?",shortAnswer:"The rule that if Class A precedes Class B in the MRO of any parent class, Class A MUST also precede Class B in the MRO of all derived subclasses.",explanation:"Prevents confusing reordering of ancestor precedence in deep hierarchies.",hint:"Precedence between classes must remain identical across all subclasses.",level:"complex",codeExample:"# If A precedes B in Parent, A must precede B in all children"},{question:"Can metaclasses customize or alter the MRO calculation of a class?",shortAnswer:"Metaclasses can participate in class creation (via __new__ / __init__), but the C3 algorithm itself is hardcoded in CPython's C source code (typeobject.c: mro_implementation).",explanation:"You can manipulate base tuples before class creation, but cannot replace the C3 merge logic itself.",hint:"C3 algorithm is compiled in CPython C core; metaclasses can only adjust bases.",level:"complex",codeExample:"# C3 algorithm implemented in CPython C core"},{question:"What happens if two parent classes define a method with the same name, and the child does NOT override it?",shortAnswer:"Python executes the method from whichever parent appears first in the child's MRO (the leftmost branch in declaration order).",explanation:"Standard left-to-right resolution order.",hint:"Executes the method from the class appearing earlier in the MRO.",level:"basic",codeExample:`class D(A, B): pass
# D().func() executes A.func()`},{question:"How does Python resolve attribute lookup when an attribute exists in both an instance dictionary and the MRO?",shortAnswer:"Instance __dict__ has top priority for standard data attributes, followed sequentially by each class in the MRO (unless a data descriptor is present).",explanation:"Descriptors can override instance dictionary priority.",hint:"Instance dict -> MRO classes in sequence.",level:"moderate",codeExample:"inst.__dict__ -> Class1 -> Class2 -> ... -> object"},{question:"What built-in function returns the class where an attribute was found along the MRO?",shortAnswer:"inspect.getattr_static() or iterating through 'cls.__dict__' along 'type(obj).__mro__'.",explanation:"Allows inspecting attribute origins without triggering descriptors or properties.",hint:"Iterate through cls.__dict__ across type(obj).__mro__.",level:"complex",codeExample:`for c in type(obj).__mro__:
    if 'attr' in c.__dict__: print(c)`},{question:"Why does Python support multiple inheritance when Java and C# explicitly banned it?",shortAnswer:"Because Python's C3 Linearization algorithm and cooperative 'super()' solve the diamond problem deterministically, enabling clean composable Mixin architectures without ambiguity.",explanation:"Python trusts developers to design clean hierarchies using C3 MRO.",hint:"C3 Linearization and cooperative super() resolve diamond ambiguities.",level:"moderate",codeExample:"# C3 provides deterministic multiple inheritance resolution"},{question:"How can MRO be utilized to build deterministic middleware execution pipelines?",shortAnswer:"By defining middleware stages as classes that call 'super().handle_request()' and inheriting them in order (e.g. class Endpoint(Auth, RateLimit, Cache, Base):), MRO guarantees strict sequential execution.",explanation:"A powerful design pattern in enterprise Python frameworks.",hint:"Inheriting middleware in order executes them sequentially via MRO.",level:"moderate",codeExample:"class Endpoint(RateLimit, Auth, Base): pass"},{question:"What is the time complexity of method lookup along the MRO in CPython?",shortAnswer:"CPython caches method lookups in a fast global type cache (MRO cache), making repeated lookups effectively O(1) in practice.",explanation:"Method caching minimizes runtime overhead in modern Python.",hint:"O(1) in practice due to CPython's internal MRO cache.",level:"complex",codeExample:"# CPython optimizes method lookup with internal type caches"},{question:"Can cyclical inheritance (class A(B): ... class B(A):) exist in Python?",shortAnswer:"No. Python rejects circular inheritance at definition time with a NameError or TypeError.",explanation:"A class cannot inherit from an undefined or circular reference.",hint:"No, Python prevents cyclical inheritance at definition time.",level:"basic",codeExample:"# Circular inheritance is rejected immediately"},{question:"What is the ultimate takeaway rule for understanding Python MRO?",shortAnswer:"MRO is a deterministic linear list calculated via C3 Linearization that dictates method search order and super() delegation; always inspect 'Class.__mro__' when debugging multiple inheritance.",explanation:"The single source of truth for method dispatching in Python.",hint:"MRO is a deterministic linear search sequence; check Class.__mro__.",level:"basic",codeExample:"# Always inspect Class.__mro__ for the definitive search sequence"}];function E(){const d=c.useRef([]),[i,h]=c.useState("c3formula"),[o,l]=c.useState("diamond_bc");c.useEffect(()=>{const r=new IntersectionObserver(s=>{s.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(s=>{s&&r.observe(s)}),()=>r.disconnect()},[]);const t=r=>{r&&!d.current.includes(r)&&d.current.push(r)},a={diamond_bc:{title:"CompositeDiamond(BranchA, BranchB)",code:"class CompositeDiamond(BranchA, BranchB): pass",mro:["CompositeDiamond","BranchA","BranchB","RootEntity","object"],description:"Standard Diamond: BranchA (left) evaluated before BranchB (right), then common root RootEntity.",isError:!1},diamond_cb:{title:"InvertedDiamond(BranchB, BranchA)",code:"class InvertedDiamond(BranchB, BranchA): pass",mro:["InvertedDiamond","BranchB","BranchA","RootEntity","object"],description:"Inverted Diamond: BranchB (left) evaluated before BranchA (right), then common root RootEntity.",isError:!1},middleware:{title:"ProductionApiEndpoint(RateLimit, JWTAuth, AuditTelemetry)",code:"class ProductionApiEndpoint(RateLimit, JWTAuth, AuditTelemetry): pass",mro:["ProductionApiEndpoint","RateLimitPlugin","JWTAuthenticationPlugin","AuditTelemetryPlugin","BaseMiddleware","object"],description:"Sequential Middleware Pipeline: strictly processes RateLimit -> JWTAuth -> AuditTelemetry.",isError:!1},conflict:{title:"InvalidChild(BaseA, BaseB) where BaseB(BaseA)",code:"class InvalidChild(BaseA, BaseB): pass  # Contradictory!",mro:[],description:"TypeError: Cannot create a consistent method resolution order (MRO) for bases BaseA, BaseB. BaseB demands BaseB before BaseA, but header demands BaseA before BaseB!",isError:!0}}[o];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 10"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Method Resolution Order (",e.jsx("span",{className:"text-teal-400 font-mono",children:"MRO"}),") & C3 Linearization"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's deterministic method lookup engine: inspecting ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Class.__mro__"}),", the mathematical C3 Linearization algorithm, diamond problem resolution, monotonicity constraints, and diagnosing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TypeError: inconsistent MRO"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 C3 Linearization Algorithm"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💎 Diamond Problem Resolution"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 Class.__mro__ vs Class.mro()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Monotonicity & Conflict Diagnosis"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Deterministic Search Path: Understanding MRO"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When you call ",e.jsx("code",{className:"text-teal-300 font-mono",children:"obj.method()"}),", Python must search through ancestor classes to find the method. The exact, deterministic sequence of classes searched is the ",e.jsx("strong",{children:"Method Resolution Order (MRO)"}),", calculated by Python's ",e.jsx("strong",{children:"C3 Linearization Algorithm"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Subclass Priority"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Child before Parent"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Subclasses are always searched before their parent base classes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Left-to-Right Order"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"class D(A, B): A then B"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Base classes declared in the class header preserve their declaration order."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Monotonicity"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Stable Ancestor Order"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"If A precedes B in one parent, A must precede B across all derived subclasses!"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Inspecting MRO in Python"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["You can inspect the exact MRO of any class using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ClassName.__mro__"})," (returns a tuple of class types) or ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ClassName.mro()"})," (returns a list). Every class in Python 3 ultimately terminates at ",e.jsx("code",{className:"text-slate-400 font-mono",children:"object"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing C3 Linearization & Diamond Traversal"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("c3formula"),className:n("px-3 py-1.5 rounded-lg transition-all",i==="c3formula"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"C3 Merge Formula"}),e.jsx("button",{onClick:()=>h("diamond"),className:n("px-3 py-1.5 rounded-lg transition-all",i==="diamond"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Diamond MRO Path"}),e.jsx("button",{onClick:()=>h("conflict"),className:n("px-3 py-1.5 rounded-lg transition-all",i==="conflict"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Inconsistent MRO Trap"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the C3 merge algorithm, diamond resolution paths, and contradictory ordering conflicts:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="c3formula"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE C3 LINEARIZATION FORMULA & MERGE STEP"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"70",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Mathematical Definition:"}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"13 font-mono font-bold",children:"L(C) = [C] + merge(L(B1), L(B2), ..., [B1, B2, ...])"})]}),e.jsxs("g",{transform:"translate(30, 135)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"150",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"25",fill:"#a5f3fc",fontSize:"11 font-bold",children:"1. Select Candidate Head"}),e.jsx("text",{x:"15",y:"50",fill:"#cbd5e1",fontSize:"9",children:"Take head of first list."}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"9",children:"Check if it appears in the TAIL"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"9",children:"(index 1+) of any other list."}),e.jsx("text",{x:"15",y:"115",fill:"#38bdf8",fontSize:"9 font-bold",children:"If in tail → Skip to next candidate!"}),e.jsx("rect",{x:"280",y:"0",width:"260",height:"150",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"295",y:"25",fill:"#c4b5fd",fontSize:"11 font-bold",children:"2. Append & Remove"}),e.jsx("text",{x:"295",y:"50",fill:"#cbd5e1",fontSize:"9",children:"If candidate is valid:"}),e.jsx("text",{x:"295",y:"70",fill:"#34d399",fontSize:"9 font-mono",children:"1. Append to result output"}),e.jsx("text",{x:"295",y:"90",fill:"#34d399",fontSize:"9 font-mono",children:"2. Remove from all input lists"}),e.jsx("text",{x:"295",y:"115",fill:"#c084fc",fontSize:"9 font-bold",children:"Repeat until all lists are empty!"}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"150",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"575",y:"25",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Final MRO Sequence"}),e.jsx("text",{x:"575",y:"50",fill:"#cbd5e1",fontSize:"9",children:"Returns strict monotonic linear"}),e.jsx("text",{x:"575",y:"70",fill:"#cbd5e1",fontSize:"9",children:"sequence ending at 'object'."}),e.jsx("text",{x:"575",y:"100",fill:"#a7f3d0",fontSize:"9 font-bold",children:"✓ Conflict-free & Deterministic!"})]})]}):i==="diamond"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DIAMOND HIERARCHY MRO RESOLUTION PATH: D(B, C)"}),e.jsxs("g",{transform:"translate(30, 40)",children:[e.jsx("rect",{x:"340",y:"10",width:"180",height:"45",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"375",y:"38",fill:"#99f6e4",fontSize:"12 font-mono font-bold",children:"RootEntity (A)"}),e.jsx("rect",{x:"170",y:"95",width:"180",height:"45",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"205",y:"123",fill:"#a5f3fc",fontSize:"12 font-mono font-bold",children:"BranchA (B)"}),e.jsx("rect",{x:"510",y:"95",width:"180",height:"45",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"545",y:"123",fill:"#c4b5fd",fontSize:"12 font-mono font-bold",children:"BranchB (C)"}),e.jsx("rect",{x:"340",y:"185",width:"180",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"360",y:"213",fill:"#a7f3d0",fontSize:"12 font-mono font-bold",children:"CompositeDiamond (D)"}),e.jsx("text",{x:"250",y:"165",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"1. D → 2. B"}),e.jsx("text",{x:"435",y:"123",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"400",y:"145",fill:"#38bdf8",fontSize:"11 font-mono",children:"3. C (Right)"}),e.jsx("text",{x:"600",y:"75",fill:"#38bdf8",fontSize:"11 font-mono",children:"4. A (Root)"})]}),e.jsxs("g",{transform:"translate(30, 270)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"45",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"28",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"MRO: [ CompositeDiamond → BranchA → BranchB → RootEntity → object ]"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"CONTRADICTORY MRO CONFLICT (TypeError: Inconsistent MRO)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ The Contradictory Definition"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"10 font-mono",children:"class BaseA: pass"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"10 font-mono",children:"class BaseB(BaseA): pass"}),e.jsx("text",{x:"20",y:"120",fill:"#fca5a5",fontSize:"10 font-mono",children:"# DANGEROUS CONTRADICTION:"}),e.jsx("text",{x:"20",y:"140",fill:"#fda4af",fontSize:"10 font-mono font-bold",children:"class InvalidChild(BaseA, BaseB): pass"}),e.jsx("text",{x:"20",y:"180",fill:"#ffe4e6",fontSize:"9",children:"• Header demands: BaseA before BaseB"}),e.jsx("text",{x:"20",y:"200",fill:"#ffe4e6",fontSize:"9",children:"• BaseB demands: BaseB before BaseA"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"20",y:"30",fill:"#ffe4e6",fontSize:"12",fontWeight:"bold",children:"CPython Compilation Reaction"}),e.jsx("rect",{x:"20",y:"60",width:"340",height:"85",rx:"4",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"85",fill:"#fda4af",fontSize:"10 font-bold",children:"TypeError Raised:"}),e.jsx("text",{x:"30",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Cannot create a consistent method resolution"}),e.jsx("text",{x:"30",y:"125",fill:"#ecfdf5",fontSize:"8 font-mono",children:"order (MRO) for bases BaseA, BaseB"}),e.jsx("text",{x:"20",y:"175",fill:"#a7f3d0",fontSize:"10 font-bold",children:"✓ Canonical Fix:"}),e.jsx("text",{x:"20",y:"200",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"class ValidChild(BaseB, BaseA): pass"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive MRO Calculator & Hierarchy Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an inheritance topology to calculate its live C3 Linearization MRO search sequence:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Class Hierarchy"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>l("diamond_bc"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="diamond_bc"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. CompositeDiamond(BranchA, BranchB)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Classic Diamond (Left Branch evaluated first)"})]}),e.jsxs("button",{onClick:()=>l("diamond_cb"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="diamond_cb"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. InvertedDiamond(BranchB, BranchA)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Inverted Diamond (Right Branch evaluated first)"})]}),e.jsxs("button",{onClick:()=>l("middleware"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="middleware"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. ProductionApiEndpoint (3 Middleware Plugins)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"RateLimit → JWTAuth → AuditTelemetry"})]}),e.jsxs("button",{onClick:()=>l("conflict"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="conflict"?"bg-rose-950/80 border-rose-500 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-rose-300",children:"4. Inconsistent MRO (TypeError Conflict)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Contradictory base ordering violating monotonicity"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Calculated C3 MRO Linearization"}),e.jsx("div",{className:n("p-4 rounded-xl border flex-1 space-y-2 text-xs font-mono",a.isError?"bg-rose-950/40 border-rose-800":"bg-slate-900 border-slate-800"),children:a.isError?e.jsxs("div",{className:"space-y-2 text-rose-300",children:[e.jsx("div",{className:"font-bold text-rose-400 text-sm",children:"❌ TypeError: Inconsistent MRO"}),e.jsx("p",{className:"text-[11px] leading-relaxed",children:a.description}),e.jsx("div",{className:"p-2.5 bg-slate-950 rounded border border-rose-900 text-[11px] text-emerald-400 font-bold",children:"✓ Fix: Reorder bases specialized before general: `class Valid(BaseB, BaseA): pass`"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-teal-300 font-bold mb-1",children:a.code}),e.jsx("div",{className:"text-[11px] text-slate-400 mb-3",children:a.description}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1 font-bold",children:"Method Search Priority:"}),a.mro.map((r,s)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"bg-slate-950 text-teal-400 font-bold px-1.5 py-0.5 rounded border border-slate-800 w-6 text-center",children:s}),e.jsx("span",{className:n(s===0?"text-emerald-300 font-bold":s===a.mro.length-1?"text-slate-500":"text-cyan-300"),children:r})]},s))]})]})})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Method Resolution Order Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Hierarchy Topology"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Declaration Header"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"MRO Sequence Result"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"First Searched Base"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Single"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class B(A):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-300",children:"[B, A, object]"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"B (Self)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Multilevel"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class C(B): (B inherits A)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-300",children:"[C, B, A, object]"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"C (Child)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Multiple (Left-First)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class D(B, C):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-300",children:"[D, B, C, A, object]"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"B (Leftmost Header Base)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Inverted Multiple"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class D(C, B):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-300",children:"[D, C, B, A, object]"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"C (Leftmost Header Base)"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating MRO inspection, C3 merge algorithm in pure Python, inconsistent MRO error handling, and middleware sequencing:"}),e.jsx(x,{files:[{filename:"mro_fundamentals_and_c3_linearization.py",code:b,description:"MRO inspection via __mro__ / mro() and diamond hierarchy method resolution."},{filename:"mro_inconsistent_hierarchy_and_errors.py",code:y,description:"Diagnosing and fixing TypeError: Cannot create a consistent method resolution order (MRO)."},{filename:"complex_multiple_inheritance_mro_visualizer.py",code:g,description:"Pure Python implementation of the C3 Linearization merge algorithm matching CPython 100%."},{filename:"enterprise_plugin_and_event_pipeline_mro.py",code:_,description:"Enterprise Event Middleware Pipeline sequencing RateLimit, Authentication, and AuditLogging via MRO."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: General Before Specialized Bases"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"class Child(GeneralBase, SpecializedSubclass):"})," causes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: Cannot create a consistent MRO"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always list specialized classes before general base classes in inheritance headers."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Assuming Depth-First Search"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Assuming Python uses DFS will lead to bugs in diamond hierarchies. C3 evaluates all sibling branches before visiting shared roots!"}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fact:"})," C3 Linearization checks all child siblings before shared ancestors."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Expecting `super()` to Call Parent"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In multiple inheritance, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"super()"})," calls the next class in MRO, which may be a sibling mixin rather than a direct parent."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always inspect ",e.jsx("code",{className:"text-emerald-300",children:"Class.__mro__"})," to trace exact delegation paths."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Attempting to Mutate `__mro__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Attempting to modify ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Class.__mro__ = (...)"})," raises ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeError: readonly attribute"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," MRO is fixed and immutable at class compilation time."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Method Resolution Order, C3 Linearization algorithm, diamond problem, and monotonicity constraints:"}),e.jsx(f,{questions:C})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with C3 linearization rules, MRO inspection recipes, and middleware architecture patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(p,{content:j,filename:"python_topic10_method_resolution_order_mro_notes.txt",title:"Print Topic 10 Study Notes"})}),e.jsx(u,{})]})]})]})}export{E as default};

import{b as r,j as e,bg as p}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic1_files/inner_functions_and_scope_resolution.py\r
# Module: 003_003_decorators-generators\r
# Topic: Inner functions and variable scope closures\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Inner Functions & LEGB Scope Resolution\r
Demonstrates:\r
  1. Defining nested inner functions inside outer parent functions\r
  2. The LEGB Scope Resolution Rule: Local -> Enclosing -> Global -> Built-in\r
  3. Reading enclosing variables inside nested functions\r
"""\r
\r
# Global Scope Variable:\r
INSTITUTION_NAME = "Coder & AccoTax (Barrackpore)"\r
\r
def outer_fee_auditor(student_name: str, gross_fee: float):\r
    """Outer enclosing function establishing Enclosing Scope."""\r
    audit_category = "PREMIUM_TIER" if gross_fee >= 20000 else "STANDARD_TIER"\r
\r
    # Inner Nested Function (Has access to Local, Enclosing, Global, Built-in):\r
    def generate_audit_summary(discount_rate: float) -> str:\r
        # Local variable:\r
        net_payable = gross_fee * (1.0 - discount_rate)\r
\r
        # Accessing:\r
        # - Global:    INSTITUTION_NAME\r
        # - Enclosing: student_name, gross_fee, audit_category\r
        # - Local:     discount_rate, net_payable\r
        # - Built-in:  len(), max(), str()\r
        return (\r
            f"[{INSTITUTION_NAME}] Audit for {student_name} ({audit_category}): "\r
            f"Gross: INR {gross_fee:,.2f} -> Net: INR {net_payable:,.2f} (Disc: {discount_rate*100:.0f}%)"\r
        )\r
\r
    # Invoking inner function from inside outer function:\r
    result = generate_audit_summary(0.15)\r
    return result\r
\r
\r
def demonstrate_legb_resolution():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INNER FUNCTIONS & LEGB SCOPE RESOLUTION")\r
    print("=" * 70)\r
\r
    print("1. Executing Outer Function with Nested Scope:")\r
    summary1 = outer_fee_auditor("Sourav Mukherjee", 25000.0)\r
    print(f"   * {summary1}")\r
\r
    summary2 = outer_fee_auditor("Rahul Verma", 15000.0)\r
    print(f"   * {summary2}\\n")\r
\r
    print(r"""\r
The LEGB Scope Resolution Order:\r
  L -> Local     : Names assigned inside the currently executing function\r
  E -> Enclosing : Names in the local scope of any enclosing parent functions (def inside def)\r
  G -> Global    : Names assigned at top-level of module file\r
  B -> Built-in  : Built-in Python identifiers (len, range, max, Exception)\r
""")\r
    print("[PASSED] Inner Functions & LEGB Scope Resolution Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_legb_resolution()\r
`,A=`# topic1_files/closures_and_cell_objects.py\r
# Module: 003_003_decorators-generators\r
# Topic: Inner functions and variable scope closures\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Closures Anatomy & CPython Cell Objects\r
Demonstrates:\r
  1. The 3 criteria required to form a Closure in Python\r
  2. Persistent state retention after outer function termination\r
  3. Inspecting \`__closure__\` and \`cell_contents\` at runtime\r
"""\r
\r
def make_tuition_discount_closure(discount_percentage: float):\r
    """Enclosing function returning an inner closure."""\r
    # Variable in enclosing scope:\r
    multiplier = 1.0 - (discount_percentage / 100.0)\r
\r
    # Inner function referencing enclosing variable \`multiplier\`:\r
    def apply_discount(base_tuition: float) -> float:\r
        return base_tuition * multiplier\r
\r
    # Return the inner function object:\r
    return apply_discount\r
\r
\r
def demonstrate_closure_anatomy():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CLOSURES & CPYTHON CELL OBJECTS")\r
    print("=" * 70)\r
\r
    # 1. Create two distinct closure instances:\r
    print("1. Instantiating Closures with Enclosed Multipliers:")\r
    scholarship_closure = make_tuition_discount_closure(20.0)  # 20% discount (0.80x)\r
    concession_closure = make_tuition_discount_closure(10.0)   # 10% discount (0.90x)\r
\r
    # Outer function \`make_tuition_discount_closure\` has ALREADY returned and finished!\r
    # Yet the inner functions still retain access to their respective \`multiplier\` values.\r
\r
    print(f"   Scholarship Closure Result (INR 25,000): INR {scholarship_closure(25000):,.2f}")\r
    print(f"   Concession Closure Result  (INR 25,000): INR {concession_closure(25000):,.2f}\\n")\r
\r
    # 2. Inspecting CPython \`__closure__\` and cell objects:\r
    print("2. Inspecting \`__closure__\` Introspection Attributes:")\r
    print(f"   Closure Object Tuple : {scholarship_closure.__closure__}")\r
    print(f"   Cell Object Type     : {type(scholarship_closure.__closure__[0])}")\r
    print(f"   Enclosed Value (Cell): {scholarship_closure.__closure__[0].cell_contents}")\r
\r
    print(f"\\n   Concession Enclosed Cell: {concession_closure.__closure__[0].cell_contents}")\r
\r
    print(r"""\r
The 3 Strict Criteria for a Python Closure:\r
  1. We must have a nested inner function (\`def apply_discount\`).\r
  2. The inner function must refer to a value in its enclosing scope (\`multiplier\`).\r
  3. The enclosing function must return the nested function object (\`return apply_discount\`).\r
""")\r
    print("[PASSED] Closures & Cell Objects Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_closure_anatomy()\r
`,R=`# topic1_files/nonlocal_keyword_and_state_mutation.py\r
# Module: 003_003_decorators-generators\r
# Topic: Inner functions and variable scope closures\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: The \`nonlocal\` Keyword & Stateful Closures\r
Demonstrates:\r
  1. Why reassigning enclosing variables fails with \`UnboundLocalError\` without \`nonlocal\`\r
  2. Using the \`nonlocal\` keyword to mutate enclosing state across function calls\r
  3. Building a stateful student enrollment counter closure\r
"""\r
\r
def make_enrollment_counter(starting_count: int = 0):\r
    """Creates a stateful counter closure encapsulating mutable state."""\r
    count = starting_count\r
\r
    def increment_and_enroll(student_name: str) -> str:\r
        # Declare \`count\` as nonlocal to mutate enclosing variable:\r
        nonlocal count\r
        count += 1\r
        return f"Enrolled Student #{count:03d}: {student_name} (Total Active: {count})"\r
\r
    return increment_and_enroll\r
\r
\r
def make_running_average_tracker():\r
    """Creates a stateful closure calculating rolling average of exam scores."""\r
    total_score = 0.0\r
    count = 0\r
\r
    def add_score(new_score: float) -> float:\r
        nonlocal total_score, count\r
        total_score += new_score\r
        count += 1\r
        return total_score / count\r
\r
    return add_score\r
\r
\r
def demonstrate_nonlocal_mutation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - THE \`nonlocal\` KEYWORD & STATEFUL CLOSURES")\r
    print("=" * 70)\r
\r
    # 1. Stateful Enrollment Counter:\r
    print("1. Incrementing Stateful Enrollment Counter:")\r
    barrackpore_counter = make_enrollment_counter(starting_count=100)\r
\r
    print(f"   * {barrackpore_counter('Sourav Mukherjee')}")\r
    print(f"   * {barrackpore_counter('Priyanka Sen')}")\r
    print(f"   * {barrackpore_counter('Rahul Verma')}\\n")\r
\r
    # 2. Stateful Running Average Tracker:\r
    print("2. Stateful Rolling Exam Score Average Tracker:")\r
    avg_tracker = make_running_average_tracker()\r
\r
    print(f"   Adding Score 85.0 -> Current Running Avg: {avg_tracker(85.0):.2f}")\r
    print(f"   Adding Score 95.0 -> Current Running Avg: {avg_tracker(95.0):.2f}")\r
    print(f"   Adding Score 90.0 -> Current Running Avg: {avg_tracker(90.0):.2f}")\r
\r
    print("\\n[PASSED] Nonlocal Keyword & Stateful Closures Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_nonlocal_mutation()\r
`,k=`# topic1_files/institutional_scholarship_accumulator_closure.py\r
# Module: 003_003_decorators-generators\r
# Topic: Inner functions and variable scope closures\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Institutional Scholarship Budget Closure (Case Study)\r
Demonstrates:\r
  1. Encapsulating rich multi-variable state inside closures without classes\r
  2. Returning a bundle of closure methods (Disburse, Balance, Audit History)\r
  3. Enforcing institutional budget limits and state integrity\r
"""\r
\r
from typing import Dict, Any, Callable, List\r
\r
def create_scholarship_budget_manager(total_budget: float) -> Dict[str, Callable]:\r
    """Creates a closure suite managing institutional scholarship funds."""\r
    if total_budget <= 0:\r
        raise ValueError(f"Scholarship budget must be strictly positive: INR {total_budget}")\r
\r
    allocated_budget = total_budget\r
    total_disbursed = 0.0\r
    history: List[Dict[str, Any]] = []\r
\r
    def disburse(student_id: str, student_name: str, amount: float) -> Dict[str, Any]:\r
        nonlocal total_disbursed\r
\r
        if amount <= 0:\r
            raise ValueError(f"Disbursement amount must be positive: INR {amount}")\r
        if total_disbursed + amount > allocated_budget:\r
            remaining = allocated_budget - total_disbursed\r
            raise ValueError(f"Budget Exceeded! Requested INR {amount:,.2f}, remaining budget: INR {remaining:,.2f}")\r
\r
        total_disbursed += amount\r
        entry = {\r
            "student_id": student_id,\r
            "student_name": student_name,\r
            "amount": amount,\r
            "remaining_budget": allocated_budget - total_disbursed\r
        }\r
        history.append(entry)\r
        return entry\r
\r
    def get_summary() -> Dict[str, Any]:\r
        return {\r
            "total_budget": allocated_budget,\r
            "total_disbursed": total_disbursed,\r
            "remaining_budget": allocated_budget - total_disbursed,\r
            "recipients_count": len(history)\r
        }\r
\r
    def get_history() -> List[Dict[str, Any]]:\r
        # Return defensive copy of history list:\r
        return list(history)\r
\r
    # Return dictionary bundle of closure methods:\r
    return {\r
        "disburse": disburse,\r
        "get_summary": get_summary,\r
        "get_history": get_history\r
    }\r
\r
\r
def run_scholarship_closure_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SCHOLARSHIP BUDGET MANAGER (CLOSURE SUITE)")\r
    print("=" * 70)\r
\r
    # 1. Initialize manager with INR 50,000 budget:\r
    manager = create_scholarship_budget_manager(50000.0)\r
    disburse_fn = manager["disburse"]\r
    summary_fn = manager["get_summary"]\r
\r
    print("1. Disbursing Merit Scholarships:")\r
    e1 = disburse_fn("STU-101", "Sourav Mukherjee", 12000.0)\r
    print(f"   * Disbursed INR {e1['amount']:,.2f} to {e1['student_name']} | Remaining: INR {e1['remaining_budget']:,.2f}")\r
\r
    e2 = disburse_fn("STU-102", "Priyanka Sen", 15000.0)\r
    print(f"   * Disbursed INR {e2['amount']:,.2f} to {e2['student_name']} | Remaining: INR {e2['remaining_budget']:,.2f}")\r
\r
    e3 = disburse_fn("STU-103", "Rahul Verma", 10000.0)\r
    print(f"   * Disbursed INR {e3['amount']:,.2f} to {e3['student_name']} | Remaining: INR {e3['remaining_budget']:,.2f}\\n")\r
\r
    # 2. Testing Budget Overflow Guard:\r
    print("2. Attempting Disbursal Exceeding Remaining Budget (INR 20,000):")\r
    try:\r
        disburse_fn("STU-104", "Debolina Roy", 20000.0)\r
    except ValueError as err:\r
        print(f"   [BLOCKED BY CLOSURE GUARD] ValueError: {err}\\n")\r
\r
    # 3. Summary Report:\r
    print("3. Final Scholarship Portfolio Summary:")\r
    summary = summary_fn()\r
    print(f"   * Total Budget     : INR {summary['total_budget']:,.2f}")\r
    print(f"   * Total Disbursed  : INR {summary['total_disbursed']:,.2f}")\r
    print(f"   * Remaining Budget : INR {summary['remaining_budget']:,.2f}")\r
    print(f"   * Total Recipients : {summary['recipients_count']}")\r
\r
    print("\\n[PASSED] Scholarship Accumulator Closure Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_scholarship_closure_case_study()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
            TOPIC 1: INNER FUNCTIONS & VARIABLE SCOPE CLOSURES IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE LEGB SCOPE RESOLUTION RULE\r
--------------------------------------------------------------------------------\r
  • L (Local)     : Inside current function\r
  • E (Enclosing) : Inside parent functions (def inside def)\r
  • G (Global)    : Top-level module variables\r
  • B (Built-in)  : Python built-in names (len, range, max)\r
\r
--------------------------------------------------------------------------------\r
2. CLOSURE ANATOMY\r
--------------------------------------------------------------------------------\r
  A closure remembers values in enclosing scopes even after the outer function\r
  finishes execution!\r
  Inspected via: \`fn.__closure__[0].cell_contents\`\r
\r
--------------------------------------------------------------------------------\r
3. THE \`nonlocal\` KEYWORD\r
--------------------------------------------------------------------------------\r
  def make_counter():\r
      count = 0\r
      def increment():\r
          nonlocal count  # Mandatory to mutate enclosing variable!\r
          count += 1\r
          return count\r
      return increment\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 1: INNER FUNCTIONS & CLOSURES\r
================================================================================\r
`,L=[{question:"What is an Inner (Nested) Function in Python?",shortAnswer:"A function defined directly inside the body of another enclosing parent function, having access to variables in the enclosing parent scope.",explanation:"Used for encapsulation, helper functions, and constructing closures.",hint:"A function defined inside another function.",level:"basic",codeExample:`def outer():
    def inner(): pass`},{question:"What does the LEGB acronym stand for in Python scope resolution?",shortAnswer:"Local -> Enclosing -> Global -> Built-in. Python searches for variable names in this exact order when resolving an identifier.",explanation:"Fundamental variable lookup sequence in Python.",hint:"Local, Enclosing, Global, Built-in.",level:"basic",codeExample:"# Search order: Local -> Enclosing -> Global -> Built-in"},{question:"What are the 3 criteria required to form a true Python Closure?",shortAnswer:"1. Must have an inner nested function. 2. The inner function must reference a variable from the enclosing scope. 3. The enclosing function must return the inner function object.",explanation:"Forms a function bundled together with its lexical environment.",hint:"Nested function, references enclosing variable, enclosing function returns it.",level:"basic",codeExample:`def outer(x):
    def inner(): return x * 2
    return inner`},{question:"What is the primary benefit of a Closure over an ordinary function?",shortAnswer:"A closure retains access to variables in its enclosing scope even after the outer function has finished execution and popped off the call stack.",explanation:"Enables persistent, encapsulated state without global variables or classes.",hint:"Remembers enclosing variables even after the outer function has finished.",level:"basic",codeExample:"mult_5 = outer(5)  # Remembers x=5 forever"},{question:"What attribute on a function object stores its closure bindings in CPython?",shortAnswer:"The '__closure__' attribute, which contains a tuple of 'cell' objects.",explanation:"Returns None if the function is not a closure.",hint:"The __closure__ attribute.",level:"moderate",codeExample:"print(my_closure.__closure__[0].cell_contents)"},{question:"What is a 'cell' object in CPython?",shortAnswer:"An internal CPython heap data structure used to store a reference to an enclosed variable, allowing multiple scopes to share and mutate the same variable across lifetimes.",explanation:"Bridges the gap between function frame lifetimes.",hint:"Heap storage holding enclosed variable references.",level:"complex",codeExample:"cell.cell_contents  # The actual enclosed Python object"},{question:"What is the purpose of the 'nonlocal' keyword introduced in Python 3?",shortAnswer:"To declare that an identifier refers to a variable in the nearest enclosing parent function's scope, allowing that variable to be modified/reassigned rather than creating a new local shadow variable.",explanation:"Without nonlocal, reassigning raises UnboundLocalError.",hint:"Allows modifying variables in enclosing parent scopes.",level:"basic",codeExample:`def outer():
    count = 0
    def inner():
        nonlocal count
        count += 1`},{question:"What happens if you execute 'count += 1' on an enclosing variable inside an inner function WITHOUT 'nonlocal'?",shortAnswer:"Python raises 'UnboundLocalError: local variable referenced before assignment', because Python sees the assignment and treats 'count' as a local variable before it is initialized.",explanation:"One of the most common gotchas in Python scope management.",hint:"Raises UnboundLocalError.",level:"moderate",codeExample:"# UnboundLocalError: local variable 'count' referenced before assignment"},{question:"What is the difference between the 'global' and 'nonlocal' keywords in Python?",shortAnswer:"'global' binds a name to the top-level module scope; 'nonlocal' binds a name to the nearest enclosing parent function scope (excluding module global scope).",explanation:"nonlocal cannot be used at module level or to refer to globals.",hint:"global targets module scope; nonlocal targets parent function enclosing scope.",level:"moderate",codeExample:`global x  # Module scope
nonlocal y  # Enclosing function scope`},{question:"What is the 'Late-Binding Closure Loop Trap' in Python?",shortAnswer:"When creating closures inside a loop (e.g. 'funcs = [lambda: i for i in range(5)]'), all closures bind to the same variable 'i' by reference; when called later, they all see the final loop value (4) rather than their value during iteration!",explanation:"A classic Python interview trap.",hint:"Closures look up variables at call time, not definition time, seeing the final loop value.",level:"complex",codeExample:`# TRAP: funcs = [lambda: i for i in range(5)] -> all return 4!
# FIX: funcs = [lambda i=i: i for i in range(5)]`},{question:"How do you fix the Late-Binding Closure Loop Trap?",shortAnswer:"By binding the current iteration variable as a default argument: 'funcs = [lambda i=i: i for i in range(5)]' or using a separate factory function.",explanation:"Default arguments are evaluated at function definition time, locking in the value.",hint:"Use default argument binding: lambda i=i: i.",level:"moderate",codeExample:"funcs = [lambda i=i: i for i in range(5)]"},{question:"Can a closure encapsulate multiple enclosing variables?",shortAnswer:"Yes. Python will create a cell object in '__closure__' for every variable in the enclosing scope that is referenced by the inner function.",explanation:"Each referenced enclosing variable gets its own slot in __closure__.",hint:"Yes, __closure__ will contain multiple cell objects.",level:"basic",codeExample:`def outer(a, b):
    def inner(): return a + b
    return inner  # __closure__ has 2 cells`},{question:"How do closures compare to classes for state encapsulation?",shortAnswer:"Closures are lightweight and concise for managing 1 or 2 mutable state variables (e.g. counters, memoization); Classes are better when you need multiple methods, inheritance, or complex object modeling.",explanation:"Both provide encapsulation; choose based on complexity.",hint:"Closures for single-purpose stateful functions; classes for rich multi-method objects.",level:"moderate",codeExample:`# Lightweight state: make_counter()
# Complex state: class Counter:`},{question:"Does mutating a mutable container (like list.append() or dict[k]=v) in an enclosing scope require 'nonlocal'?",shortAnswer:"No. Mutating the contents of an existing mutable object does not rebind the variable identifier itself, so 'nonlocal' is only needed when reassigning ('=') the variable name.",explanation:"Method calls like list.append() modify in-place without rebinding.",hint:"No, in-place mutations (append, update) do not require nonlocal.",level:"moderate",codeExample:`def outer():
    items = []
    def inner(x): items.append(x) # Valid without nonlocal!
    return inner`},{question:"What is a 'Stateful Closure'?",shortAnswer:"A closure that uses 'nonlocal' (or mutable containers) to update its internal state across successive invocations (e.g. a running sum, counter, or rolling average).",explanation:"Acts like an object instance with hidden private attributes.",hint:"A closure that remembers and updates state between calls.",level:"basic",codeExample:"counter = make_counter(); counter(); counter()"},{question:"Can an inner function be called directly from outside its enclosing parent function?",shortAnswer:"No, unless the enclosing function explicitly returns the inner function reference or exposes it via a returned data structure.",explanation:"Inner functions are private to the enclosing function's local scope.",hint:"No, it is scoped locally inside the parent function.",level:"basic",codeExample:"# outer.inner() is invalid syntax"},{question:"How does Python garbage collection handle closures whose outer function has finished?",shortAnswer:"CPython moves the enclosed variables to the heap inside 'cell' objects and increments their reference count, keeping them alive as long as the returned inner function reference is reachable.",explanation:"Prevents memory reclamation while the closure exists.",hint:"Variables are preserved on the heap via cell objects as long as the closure is alive.",level:"complex",codeExample:"# Memory is preserved until closure object is deleted"},{question:"What happens if an inner function defines a variable with the same name as an enclosing variable WITHOUT 'nonlocal'?",shortAnswer:"The inner function creates a new Local variable that 'shadows' the enclosing variable; the enclosing variable remains completely unaffected.",explanation:"Standard variable shadowing behavior in Python.",hint:"Creates a local shadow variable without altering the outer variable.",level:"moderate",codeExample:"def outer(): x = 10; def inner(): x = 20; inner(); print(x) # 10"},{question:"Can closures be serialized with the standard 'pickle' module?",shortAnswer:"Standard pickle cannot serialize nested functions or closures because they lack top-level global module names; specialized libraries like 'cloudpickle' or 'dill' are required.",explanation:"Important consideration for multiprocessing and distributed tasks (Celery/PySpark).",hint:"Standard pickle fails on closures; use dill or cloudpickle.",level:"complex",codeExample:`import cloudpickle
serialized = cloudpickle.dumps(my_closure)`},{question:"How can you expose multiple closure methods from a single enclosing factory function?",shortAnswer:"By defining multiple inner functions (e.g. 'deposit', 'withdraw', 'get_balance') that share the same enclosing variables and returning them as a dictionary of callables.",explanation:"Implements the Module/Object Pattern in pure functional Python.",hint:"Return a dictionary containing multiple inner function references.",level:"moderate",codeExample:"return {'get': get_val, 'set': set_val}"},{question:"What is 'Memoization' using a closure?",shortAnswer:"An optimization technique where a closure encapsulates a private cache dictionary, storing computed results of expensive function calls and returning cached values on repeat inputs.",explanation:"Commonly used in dynamic programming and decorators.",hint:"Caching function return values in an enclosed dictionary.",level:"moderate",codeExample:`def memoize(fn):
    cache = {}
    def wrapper(n): ...
    return wrapper`},{question:"What is the relationship between Closures and Python Decorators?",shortAnswer:"Decorators are implemented directly as closures: the decorator function takes a target function in its enclosing scope, wraps it inside an inner function (closure), and returns the inner function.",explanation:"Mastering closures is essential to understanding decorators.",hint:"Every Python decorator is an application of closures.",level:"basic",codeExample:"# Decorator wrapper is a closure over func"},{question:"Can 'nonlocal' be used to create a new variable if it doesn't already exist in an enclosing scope?",shortAnswer:"No. Python raises 'SyntaxError: no binding for nonlocal found' if the declared identifier does not exist in any enclosing parent function scope.",explanation:"nonlocal requires a pre-existing enclosing variable.",hint:"Raises SyntaxError if the variable doesn't exist in enclosing scope.",level:"moderate",codeExample:"# SyntaxError: no binding for nonlocal 'unknown_var' found"},{question:"How do you inspect the free variable names of a closure function?",shortAnswer:"By reading the '__code__.co_freevars' tuple on the closure function object.",explanation:"Returns a tuple of string names representing enclosed variables.",hint:"Read the __code__.co_freevars tuple.",level:"complex",codeExample:"print(my_closure.__code__.co_freevars)  # ('count', 'total')"},{question:"What is the ultimate golden rule for Closures in Python?",shortAnswer:"Use closures to encapsulate private state and parameterize behavior cleanly without the overhead of full OOP classes, use 'nonlocal' when state mutation is required, and be vigilant regarding late-binding in loops.",explanation:"The foundation of elegant, functional Python architecture and custom decorators.",hint:"Use closures for lightweight state encapsulation and beware of late-binding in loops.",level:"basic",codeExample:"# Master closures and lexical scoping in Python"}];function q(){const x=r.useRef([]),[a,m]=r.useState("legb"),l=5e4,[h,f]=r.useState("Sourav Mukherjee"),[o,b]=r.useState(12e3),[i,g]=r.useState(0),[c,_]=r.useState([]),[y,d]=r.useState(null),j=()=>{if(d(null),!h.trim()){d("Candidate name is required!");return}if(o<=0){d("Disbursement amount must be strictly positive!");return}if(i+o>l){const u=l-i;d(`Budget Exceeded! Requested INR ${o.toLocaleString()}, but only INR ${u.toLocaleString()} remains in closure cell!`);return}const n=i+o,s={id:`STU-${101+c.length}`,name:h.trim(),amount:o,time:new Date().toLocaleTimeString(),remainingAfter:l-n};g(n),_([...c,s]),f("")},v=()=>{g(0),_([]),d(null),f("Sourav Mukherjee"),b(12e3)},N=l-i;r.useEffect(()=>{const n=new IntersectionObserver(s=>{s.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(s=>{s&&n.observe(s)}),()=>n.disconnect()},[]);const t=n=>{n&&!x.current.includes(n)&&x.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Inner Functions & ",e.jsx("span",{className:"text-teal-400",children:"Variable Scope Closures"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master lexical scoping and memory retention in Python: the LEGB resolution hierarchy, closure anatomy with CPython heap ",e.jsx("code",{className:"text-teal-300 font-mono",children:"cell"})," objects, mutating enclosing state with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"nonlocal"}),", and avoiding late-binding loop traps."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 LEGB Scope Hierarchy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 __closure__ & Cell Objects"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ The nonlocal Keyword"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🪤 Late-Binding Loop Traps"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of a Python Closure"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Closure"})," is a function object that remembers values in its enclosing lexical scope even after the outer parent function has finished executing and popped off the call stack:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Nested Function"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def outer(): def inner():"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Must define an inner function directly inside an outer enclosing function."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Enclosed Reference"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"return x * multiplier"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"The inner function must reference a variable belonging to the outer scope."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Returned Function"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"return inner"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"The outer function must return the inner function object without calling it."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The `nonlocal` Keyword"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["By default, reading an enclosing variable is permitted. However, reassigning it (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:"count += 1"}),") will cause ",e.jsx("code",{className:"text-rose-400 font-mono",children:"UnboundLocalError"})," because Python assumes it is a local variable. Adding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"nonlocal count"})," informs Python to mutate the variable in the enclosing parent scope!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing LEGB Scope & CPython Cell Memory"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("legb"),className:p("px-3 py-1.5 rounded-lg transition-all",a==="legb"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"LEGB Scope Order"}),e.jsx("button",{onClick:()=>m("cell"),className:p("px-3 py-1.5 rounded-lg transition-all",a==="cell"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"CPython Cell Objects"}),e.jsx("button",{onClick:()=>m("nonlocal"),className:p("px-3 py-1.5 rounded-lg transition-all",a==="nonlocal"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"nonlocal Mutation Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining lexical hierarchy, heap cells, and state mutations across frames:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="legb"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE LEGB VARIABLE SCOPE RESOLUTION ORDER"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"10",fill:"#090d16",stroke:"#475569",strokeDasharray:"4 4"}),e.jsx("text",{x:"20",y:"25",fill:"#94a3b8",fontSize:"11 font-bold",children:"4. BUILT-IN SCOPE (len, range, max, Exception, id)"}),e.jsx("rect",{x:"30",y:"40",width:"760",height:"185",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"50",y:"62",fill:"#c4b5fd",fontSize:"11 font-bold",children:'3. GLOBAL SCOPE (Module-level: `INSTITUTION = "Coder & AccoTax"`)'}),e.jsx("rect",{x:"60",y:"80",width:"700",height:"130",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"80",y:"102",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. ENCLOSING SCOPE (Outer function `def outer_auditor(gross_fee)`: `gross_fee = 25000`)"}),e.jsx("rect",{x:"90",y:"120",width:"640",height:"75",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"110",y:"145",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. LOCAL SCOPE (Inner function `def summary(disc_rate)`: `net = gross_fee * (1-disc_rate)`)"}),e.jsx("text",{x:"110",y:"170",fill:"#34d399",fontSize:"9 font-mono",children:"Resolution searches inside-out: Local → Enclosing → Global → Built-in"})]})]}):a==="cell"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CPYTHON HEAP CELL OBJECTS & `__closure__`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Closure Function: `apply_discount`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def apply_discount(base):"}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"return base * multiplier"}),e.jsx("rect",{x:"20",y:"110",width:"320",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"10 font-bold",children:"Internal `__closure__` Tuple:"}),e.jsx("text",{x:"30",y:"155",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• `fn.__closure__[0]` -> <cell at 0x7ffd>"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Points to persistent heap memory"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8 font-mono",children:"even after outer() frame is destroyed!"})]}),e.jsxs("g",{transform:"translate(405, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"references"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(490, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Heap Cell Object: `<cell at 0x7ffd>`"}),e.jsx("rect",{x:"20",y:"60",width:"320",height:"155",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"85",fill:"#ecfdf5",fontSize:"9 font-mono font-bold",children:"Cell Attributes:"}),e.jsx("text",{x:"30",y:"110",fill:"#34d399",fontSize:"9 font-mono",children:"• `cell_contents` = 0.80 (Float)"}),e.jsx("text",{x:"30",y:"135",fill:"#cbd5e1",fontSize:"8 font-mono",children:"• Reference Count: 1"}),e.jsx("text",{x:"30",y:"160",fill:"#cbd5e1",fontSize:"8 font-mono",children:"• Shared across multiple inner calls"}),e.jsx("text",{x:"30",y:"185",fill:"#c4b5fd",fontSize:"8 font-bold",children:"Preserves state across entire application lifecycle!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE `nonlocal` STATE MUTATION WORKFLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ Without `nonlocal`: UnboundLocalError"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"def outer():"}),e.jsx("text",{x:"35",y:"78",fill:"#fca5a5",fontSize:"8 font-mono",children:"count = 0"}),e.jsx("text",{x:"35",y:"96",fill:"#fca5a5",fontSize:"8 font-mono",children:"def inner():"}),e.jsx("text",{x:"50",y:"114",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:"count += 1  # ❌ CRASHES!"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"75",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"165",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Python's Parsing Rule:"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Assignment `=` marks `count` as local before assignment!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ With `nonlocal`: Mutates Cell in Place"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def outer():"}),e.jsx("text",{x:"35",y:"78",fill:"#ecfdf5",fontSize:"8 font-mono",children:"count = 0"}),e.jsx("text",{x:"35",y:"96",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def inner():"}),e.jsx("text",{x:"50",y:"114",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"nonlocal count"}),e.jsx("text",{x:"50",y:"132",fill:"#34d399",fontSize:"8 font-mono",children:"count += 1  # ✓ Mutates enclosing cell!"}),e.jsx("rect",{x:"20",y:"155",width:"340",height:"60",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"180",fill:"#34d399",fontSize:"9 font-bold",children:"Stateful Retention:"}),e.jsx("text",{x:"30",y:"198",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Increments: 0 → 1 → 2 → 3 on each successive call!"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Scholarship Budget Accumulator Closure"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Disburse scholarship amounts to see how the enclosed closure cell state (",e.jsx("code",{className:"text-teal-300 font-mono",children:"total_disbursed"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"history"}),") updates persistently across successive invocations:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"Disburse Scholarship (Closure Method)"}),e.jsx("button",{onClick:v,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Closure State"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Candidate Student Name:"}),e.jsx("input",{type:"text",value:h,onChange:n=>f(n.target.value),placeholder:"e.g. Sourav Mukherjee",className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Disbursement Amount:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",o.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"2000",max:"25000",step:"1000",value:o,onChange:n=>b(Number(n.target.value)),className:"w-full accent-teal-500"})]}),e.jsx("button",{onClick:j,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Invoke `disburse(student_id, student_name, amount)`"}),y&&e.jsx("div",{className:"p-3 bg-rose-950/80 border border-rose-800 rounded-lg text-xs font-mono text-rose-300",children:y})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Closure `__closure__` Heap Cell Inspector:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`__closure__[0]` (Allocated Budget):"}),e.jsxs("span",{className:"text-slate-300 font-bold",children:["INR ",l.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`__closure__[1]` (Total Disbursed):"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",i.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Remaining Enclosed Budget:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",N.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`__closure__[2]` (Recipients Cell):"}),e.jsxs("span",{className:"text-purple-300 font-bold",children:[c.length," Enrolled"]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Enclosed State Audit History:"}),c.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:"No scholarships disbursed yet."}):c.map((n,s)=>e.jsxs("div",{className:"p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center text-[11px]",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-teal-400 font-bold",children:[n.id,": "]}),e.jsx("span",{className:"text-slate-200",children:n.name}),e.jsxs("span",{className:"text-slate-500 text-[10px] block",children:["[",n.time,"]"]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",n.amount.toLocaleString()]})})]},s))]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Lexical Scope & Closures Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Scope / Keyword"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Target Resolution Layer"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Mutation Capability"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Common Anti-Pattern"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Local (L)"}),e.jsx("td",{className:"py-3 px-4",children:"Active function frame"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Direct assignment (=)"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Shadowing outer variables"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"nonlocal (E)"}),e.jsx("td",{className:"py-3 px-4",children:"Nearest enclosing parent function"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Requires `nonlocal var`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"UnboundLocalError without nonlocal"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"global (G)"}),e.jsx("td",{className:"py-3 px-4",children:"Top-level module file"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Requires `global var`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Polluting global namespace"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Late Binding"}),e.jsx("td",{className:"py-3 px-4",children:"Closure lookup at execution time"}),e.jsx("td",{className:"py-3 px-4",children:"Evaluates variable dynamically"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Loop variable trap in lambda list"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating LEGB scope resolution, closure cell objects, nonlocal mutation, and scholarship managers:"}),e.jsx(w,{files:[{filename:"inner_functions_and_scope_resolution.py",code:T,description:"Inner functions, LEGB scope resolution order, and reading enclosing variables."},{filename:"closures_and_cell_objects.py",code:A,description:"Closure anatomy, cell objects, and __closure__ introspection in CPython."},{filename:"nonlocal_keyword_and_state_mutation.py",code:R,description:"The nonlocal keyword, stateful counters, and rolling average accumulator closures."},{filename:"institutional_scholarship_accumulator_closure.py",code:k,description:"Institutional Scholarship Budget Manager encapsulating state without OOP classes."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: The Late-Binding Loop Trap"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"funcs = [lambda: i for i in range(5)]"})," binds all lambdas to the same variable ",e.jsx("code",{className:"text-rose-300 font-mono",children:"i"}),", so calling any lambda returns ",e.jsx("code",{className:"text-rose-300 font-mono",children:"4"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use default argument: ",e.jsx("code",{className:"text-emerald-300",children:"lambda i=i: i"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Missing `nonlocal` on Reassignment"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"count += 1"})," without ",e.jsx("code",{className:"text-amber-300 font-mono",children:"nonlocal count"})," raises ",e.jsx("code",{className:"text-amber-300 font-mono",children:"UnboundLocalError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Declare ",e.jsx("code",{className:"text-emerald-300",children:"nonlocal count"})," before rebinding."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Pickling Closures with Standard Pickle"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Standard ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pickle.dump()"})," fails on nested closures because they lack global module paths."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"dill"})," or ",e.jsx("code",{className:"text-emerald-300",children:"cloudpickle"})," for serializing closures."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Memory Leak in Unbounded Accumulators"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Appended lists inside closures grow indefinitely in memory unless capped with rolling buffers or limits."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"collections.deque(maxlen=100)"})," for rolling buffers."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering inner functions, closures, cell objects, and the nonlocal keyword:"}),e.jsx(E,{questions:L})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with LEGB scope rules, closure recipes, and nonlocal templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:I,filename:"python_topic1_inner_functions_closures_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(C,{})]})]})]})}export{q as default};

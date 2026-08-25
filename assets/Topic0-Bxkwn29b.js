import{b as a,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as S}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as k}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic0_files/first_class_functions_fundamentals.py\r
# Module: 003_003_decorators-generators\r
# Topic: First-Class Functions: Passing and returning functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: First-Class Function Fundamentals in Python\r
Demonstrates:\r
  1. What 'First-Class Citizen' means in Python (Functions are objects!)\r
  2. Assigning function objects to variables\r
  3. Passing functions as arguments to higher-order functions\r
  4. Inspecting function metadata (__name__, __doc__, __code__)\r
"""\r
\r
def apply_academic_scholarship(base_fee: float) -> float:\r
    """Calculates fee with 20% Academic Scholarship applied."""\r
    return base_fee * 0.80\r
\r
def apply_sibling_concession(base_fee: float) -> float:\r
    """Calculates fee with 15% Sibling Concession applied."""\r
    return base_fee * 0.85\r
\r
def compute_standard_fee(base_fee: float) -> float:\r
    """Calculates standard fee with no discount."""\r
    return base_fee\r
\r
\r
# Higher-Order Function (Accepts a function as an argument)\r
def process_student_enrollment(student_name: str, base_fee: float, discount_strategy) -> dict:\r
    """Processes enrollment by delegating calculation to the passed function strategy."""\r
    # Invoking the passed function object:\r
    calculated_fee = discount_strategy(base_fee)\r
    strategy_name = discount_strategy.__name__\r
\r
    return {\r
        "student_name": student_name,\r
        "base_fee": base_fee,\r
        "final_fee": calculated_fee,\r
        "strategy_applied": strategy_name\r
    }\r
\r
\r
def demonstrate_first_class_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FIRST-CLASS FUNCTIONS IN PYTHON")\r
    print("=" * 70)\r
\r
    # 1. Functions are Objects: Assigning to variables\r
    print("1. Assigning Function Objects to Variables:")\r
    calc_ref = apply_academic_scholarship\r
    print(f"   Original function name: {apply_academic_scholarship.__name__}")\r
    print(f"   Variable reference name: {calc_ref.__name__}")\r
    print(f"   Memory address of calc_ref: {hex(id(calc_ref))}")\r
    print(f"   Invoking via alias calc_ref(20000): INR {calc_ref(20000):,.2f}\\n")\r
\r
    # 2. Passing Functions as Arguments (Higher-Order Functions)\r
    print("2. Passing Strategy Functions into Higher-Order Processor:")\r
    rec1 = process_student_enrollment("Sourav Mukherjee", 25000.0, apply_academic_scholarship)\r
    print(f"   * {rec1['student_name']} -> Final Fee: INR {rec1['final_fee']:,.2f} ({rec1['strategy_applied']})")\r
\r
    rec2 = process_student_enrollment("Priyanka Sen", 25000.0, apply_sibling_concession)\r
    print(f"   * {rec2['student_name']} -> Final Fee: INR {rec2['final_fee']:,.2f} ({rec2['strategy_applied']})")\r
\r
    rec3 = process_student_enrollment("Rahul Verma", 25000.0, compute_standard_fee)\r
    print(f"   * {rec3['student_name']} -> Final Fee: INR {rec3['final_fee']:,.2f} ({rec3['strategy_applied']})")\r
\r
    print("\\n[PASSED] First-Class Function Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_first_class_fundamentals()\r
`,F=`# topic0_files/function_returning_and_factories.py\r
# Module: 003_003_decorators-generators\r
# Topic: First-Class Functions: Passing and returning functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: Returning Functions from Functions (Function Factories)\r
Demonstrates:\r
  1. Defining functions inside functions (Nested functions)\r
  2. Returning function objects as values\r
  3. Dynamic Function Factory pattern for generating custom calculators\r
"""\r
\r
from typing import Callable\r
\r
# Function Factory: Takes parameters and returns a brand-new customized function\r
def create_tuition_calculator(tax_rate: float, discount_rate: float) -> Callable[[float], float]:\r
    """Factory that dynamically builds and returns a custom tax and discount calculator."""\r
\r
    def custom_calculator(raw_fee: float) -> float:\r
        discounted = raw_fee * (1.0 - discount_rate)\r
        taxed = discounted * (1.0 + tax_rate)\r
        return taxed\r
\r
    # Giving our generated function a descriptive name for introspection:\r
    custom_calculator.__name__ = f"calc_disc{int(discount_rate*100)}_tax{int(tax_rate*100)}"\r
    custom_calculator.__doc__ = f"Custom Fee Calculator (Discount: {discount_rate*100}%, Tax: {tax_rate*100}%)"\r
\r
    # Returning the uninvoked function object itself:\r
    return custom_calculator\r
\r
\r
def demonstrate_function_factories():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RETURNING FUNCTIONS & FUNCTION FACTORIES")\r
    print("=" * 70)\r
\r
    # 1. Generate specialized calculators:\r
    print("1. Generating Custom Fee Calculators via Factory:")\r
    kolkata_center_calc = create_tuition_calculator(tax_rate=0.18, discount_rate=0.10)\r
    barrackpore_center_calc = create_tuition_calculator(tax_rate=0.05, discount_rate=0.20)\r
\r
    print(f"   Generated Calculator 1: {kolkata_center_calc.__name__}")\r
    print(f"   Documentation        : {kolkata_center_calc.__doc__}")\r
    print(f"   Generated Calculator 2: {barrackpore_center_calc.__name__}")\r
    print(f"   Documentation        : {barrackpore_center_calc.__doc__}\\n")\r
\r
    # 2. Invoking returned function objects:\r
    base_tuition = 30000.0\r
    print(f"2. Invoking Generated Calculators with Base Tuition INR {base_tuition:,.2f}:")\r
\r
    fee_kolkata = kolkata_center_calc(base_tuition)\r
    print(f"   * Kolkata Center Fee    : INR {fee_kolkata:,.2f}")\r
\r
    fee_barrackpore = barrackpore_center_calc(base_tuition)\r
    print(f"   * Barrackpore Center Fee: INR {fee_barrackpore:,.2f}")\r
\r
    print("\\n[PASSED] Function Returning & Factory Pattern Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_function_factories()\r
`,P=`# topic0_files/dispatch_table_with_function_objects.py\r
# Module: 003_003_decorators-generators\r
# Topic: First-Class Functions: Passing and returning functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: Command Dispatch Tables Using Function Objects\r
Demonstrates:\r
  1. Storing function objects as values inside Python dictionaries\r
  2. Eliminating large \`if/elif/else\` ladders with O(1) Command Dispatch Tables\r
  3. Safe fallback dispatching with \`dict.get()\`\r
"""\r
\r
from typing import Dict, Callable\r
\r
# Action Handler Functions\r
def handle_admission(data: dict) -> str:\r
    return f"Processing Admission for {data.get('name')} (Course: {data.get('course')})"\r
\r
def handle_fee_payment(data: dict) -> str:\r
    return f"Recording Fee Payment of INR {data.get('amount', 0):,.2f} for {data.get('student_id')}"\r
\r
def handle_issue_certificate(data: dict) -> str:\r
    return f"Generating Certified Completion Diploma for {data.get('name')}"\r
\r
def handle_unknown_action(data: dict) -> str:\r
    return f"[ERROR] Unrecognized action '{data.get('action')}' in dispatch pipeline!"\r
\r
\r
# Command Dispatch Table (Mapping strings -> Function Objects)\r
DISPATCH_TABLE: Dict[str, Callable[[dict], str]] = {\r
    "ADMISSION": handle_admission,\r
    "PAYMENT": handle_fee_payment,\r
    "CERTIFICATE": handle_issue_certificate\r
}\r
\r
\r
def execute_portal_action(payload: dict) -> str:\r
    """Executes action by looking up the appropriate function object from dispatch table."""\r
    action_key = payload.get("action", "").upper()\r
\r
    # Retrieve function object from dictionary (O(1) lookup):\r
    handler = DISPATCH_TABLE.get(action_key, handle_unknown_action)\r
\r
    # Invoke the dispatched function:\r
    return handler(payload)\r
\r
\r
def demonstrate_dispatch_tables():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FUNCTION DISPATCH TABLES (COMMAND PATTERN)")\r
    print("=" * 70)\r
\r
    # 1. Admission Command\r
    cmd1 = {"action": "ADMISSION", "name": "Sourav Mukherjee", "course": "Full-Stack Python & AI"}\r
    print(f"1. Action 1: {execute_portal_action(cmd1)}")\r
\r
    # 2. Payment Command\r
    cmd2 = {"action": "PAYMENT", "student_id": "STU-101", "amount": 18000.0}\r
    print(f"2. Action 2: {execute_portal_action(cmd2)}")\r
\r
    # 3. Certificate Command\r
    cmd3 = {"action": "CERTIFICATE", "name": "Priyanka Sen"}\r
    print(f"3. Action 3: {execute_portal_action(cmd3)}")\r
\r
    # 4. Unknown Fallback Command\r
    cmd4 = {"action": "PURGE_DATABASE", "name": "Attacker"}\r
    print(f"4. Action 4: {execute_portal_action(cmd4)}")\r
\r
    print("\\n[PASSED] Command Dispatch Tables Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_dispatch_tables()\r
`,E=`# topic0_files/student_fee_calculator_functors.py\r
# Module: 003_003_decorators-generators\r
# Topic: First-Class Functions: Passing and returning functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Composable Financial Functor Pipelines (Case Study)\r
Demonstrates:\r
  1. Building a pipeline composer higher-order function: \`compose_pipeline(f, g, h)\`\r
  2. Passing multiple function transformations in sequence\r
  3. Processing institutional student fees through clean functional composition\r
"""\r
\r
from typing import Callable, List, Dict, Any\r
\r
# Transformation Functions\r
def add_laboratory_fee(amount: float) -> float:\r
    return amount + 2500.0\r
\r
def apply_early_bird_discount(amount: float) -> float:\r
    return amount * 0.90  # 10% discount\r
\r
def add_gst_tax(amount: float) -> float:\r
    return amount * 1.18  # 18% GST\r
\r
def round_to_nearest_hundred(amount: float) -> float:\r
    return round(amount, -2)\r
\r
\r
# Higher-Order Pipeline Composer\r
def compose_pipeline(*functions: Callable[[float], float]) -> Callable[[float], float]:\r
    """Higher-order function that takes multiple functions and returns a unified composite pipeline function."""\r
\r
    def composite_pipeline(initial_value: float) -> float:\r
        current_value = initial_value\r
        for fn in functions:\r
            current_value = fn(current_value)\r
        return current_value\r
\r
    pipeline_names = " -> ".join(fn.__name__ for fn in functions)\r
    composite_pipeline.__name__ = f"pipeline({pipeline_names})"\r
    composite_pipeline.__doc__ = f"Composed calculation pipeline consisting of {len(functions)} steps."\r
\r
    return composite_pipeline\r
\r
\r
def run_pipeline_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COMPOSABLE FEE PIPELINE (CASE STUDY)")\r
    print("=" * 70)\r
\r
    # 1. Compose specialized fee processing pipelines:\r
    standard_it_pipeline = compose_pipeline(\r
        add_laboratory_fee,\r
        apply_early_bird_discount,\r
        add_gst_tax,\r
        round_to_nearest_hundred\r
    )\r
\r
    print(f"1. Composed Pipeline: {standard_it_pipeline.__name__}")\r
    print(f"   Documentation    : {standard_it_pipeline.__doc__}\\n")\r
\r
    # 2. Process student batch through composed pipeline:\r
    student_records = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "base_tuition": 20000.0},\r
        {"id": "STU-102", "name": "Priyanka Sen", "base_tuition": 28000.0},\r
        {"id": "STU-103", "name": "Rahul Verma", "base_tuition": 15000.0}\r
    ]\r
\r
    print("2. Processing Student Batch Through Composed Pipeline:")\r
    for stu in student_records:\r
        final_payable = standard_it_pipeline(stu["base_tuition"])\r
        print(f"  * {stu['name']:<18} ({stu['id']}) | Base: INR {stu['base_tuition']:>8,.2f} -> Payable: INR {final_payable:>8,.2f}")\r
\r
    print("\\n[PASSED] Composable Financial Functor Pipelines Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_pipeline_case_study()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
            TOPIC 0: FIRST-CLASS FUNCTIONS & HIGHER-ORDER PROGRAMMING\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. FUNCTIONS ARE FIRST-CLASS OBJECTS\r
--------------------------------------------------------------------------------\r
  In Python, functions are instances of \`types.FunctionType\`.\r
  They can be:\r
    1. Assigned to variables: \`alias = my_func\`\r
    2. Passed as arguments:   \`execute(my_func)\`\r
    3. Returned from functions: \`return custom_calc\`\r
    4. Stored in collections: \`table = {"ACTION": my_func}\`\r
\r
--------------------------------------------------------------------------------\r
2. FUNCTION FACTORIES (RETURNING FUNCTIONS)\r
--------------------------------------------------------------------------------\r
  def make_multiplier(n):\r
      def multiplier(x):\r
          return x * n\r
      return multiplier\r
\r
  times_two = make_multiplier(2)\r
  print(times_two(10))  # Output: 20\r
\r
--------------------------------------------------------------------------------\r
3. COMMAND DISPATCH TABLE PATTERN\r
--------------------------------------------------------------------------------\r
  HANDLERS = {\r
      "PAY": handle_pay,\r
      "REFUND": handle_refund\r
  }\r
  HANDLERS.get(action, default_handler)(payload)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 0: FIRST-CLASS FUNCTIONS\r
================================================================================\r
`,R=[{question:"What does it mean that functions are 'First-Class Citizens' in Python?",shortAnswer:"It means functions are treated like any other standard object in Python: they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures like lists and dicts.",explanation:"Core foundation of functional programming in Python.",hint:"Functions are treated as first-class objects just like integers, strings, or lists.",level:"basic",codeExample:`f = print
f('Hello World')  # Aliasing function object`},{question:"What is the critical syntax difference between 'func' and 'func()' in Python?",shortAnswer:"'func' is a reference to the function object itself in memory; 'func()' invokes (calls) the function and evaluates to its return value.",explanation:"Passing 'func' passes the callable; passing 'func()' passes its evaluated result.",hint:"func is the function object; func() executes the function.",level:"basic",codeExample:`# Pass reference: button.on_click(handle_click)
# Mistake: button.on_click(handle_click())`},{question:"What is a 'Higher-Order Function' (HOF)?",shortAnswer:"A function that takes one or more functions as arguments, or returns a function as its result (e.g. map, filter, sorted, or custom decorators).",explanation:"Enables flexible behavioral parameterization.",hint:"A function that accepts or returns other functions.",level:"basic",codeExample:`def operate(fn, val):
    return fn(val)`},{question:"What is a 'Function Factory'?",shortAnswer:"A higher-order function that defines and returns a newly configured inner function customized with specific parameters.",explanation:"Allows dynamic creation of specialized calculation functions.",hint:"A function that builds and returns another customized function.",level:"moderate",codeExample:`def make_multiplier(n):
    def mult(x): return x * n
    return mult`},{question:"What is a 'Command Dispatch Table' pattern?",shortAnswer:"A pattern where string commands or action codes are mapped to function objects inside a dictionary, enabling O(1) lookups and eliminating sprawling 'if/elif/else' ladders.",explanation:"Clean, open-closed architecture for command routing.",hint:"A dictionary mapping command strings to function references.",level:"moderate",codeExample:`DISPATCH = {'ADD': handle_add, 'DEL': handle_del}
DISPATCH[cmd]()`},{question:"What is the type of a standard function object in Python?",shortAnswer:`'types.FunctionType' (or '<class "function">').`,explanation:"Functions are instances of the FunctionType class.",hint:"types.FunctionType.",level:"basic",codeExample:`import types
isinstance(my_func, types.FunctionType)  # True`},{question:"What does the '__name__' attribute of a function store?",shortAnswer:"A string containing the original declared name of the function (e.g. 'calculate_tuition').",explanation:"Preserves the original identifier even when aliased to another variable.",hint:"Stores the string identifier name of the function.",level:"basic",codeExample:`def foo(): pass
alias = foo
print(alias.__name__)  # 'foo'`},{question:"What does the '__doc__' attribute of a function store?",shortAnswer:"The docstring documentation string defined immediately below the function signature.",explanation:"Used by help(), IDEs, and documentation generators like Sphinx.",hint:"Stores the docstring of the function.",level:"basic",codeExample:`def calc(): '''Computes tax''' 
print(calc.__doc__)  # 'Computes tax'`},{question:"What does the '__code__' attribute of a function store?",shortAnswer:"The compiled bytecode code object ('types.CodeType') containing instruction constants, argument counts, and variable names.",explanation:"Low-level CPython execution details.",hint:"Stores the compiled bytecode code object.",level:"complex",codeExample:"print(my_func.__code__.co_argcount)  # Number of arguments"},{question:"Can function objects have custom user-defined attributes attached to them?",shortAnswer:`Yes. Because functions are standard objects with a '__dict__', you can attach arbitrary attributes: 'my_func.custom_tag = "v1.0"'.`,explanation:"Often used by frameworks to attach routing metadata or rate limits.",hint:"Yes, functions have a __dict__ and can store custom attributes.",level:"moderate",codeExample:`def service(): pass
service.version = '2.1.0'
service.author = 'Sukanta'`},{question:"How does the built-in 'sorted()' function use first-class functions?",shortAnswer:`It accepts a function reference in its 'key' parameter (e.g. 'sorted(students, key=lambda s: s["score"])') to extract the comparison key dynamically.`,explanation:"Standard library example of higher-order function usage.",hint:"Via the 'key' parameter which accepts a function reference.",level:"basic",codeExample:"sorted(roster, key=get_gpa, reverse=True)"},{question:"How do 'map()' and 'filter()' leverage first-class functions?",shortAnswer:"'map(func, iterable)' applies 'func' to each item in the iterable; 'filter(predicate, iterable)' keeps items where 'predicate(item)' evaluates to True.",explanation:"Standard functional transformation tools.",hint:"They take a function reference as their first argument to transform or filter data.",level:"basic",codeExample:"scores_taxed = list(map(add_gst, raw_scores))"},{question:"Can functions be defined inside conditional blocks or loops?",shortAnswer:"Yes. In Python, 'def' is an executable statement that creates and binds a function object at runtime, so it can be placed inside 'if/else' blocks or loops.",explanation:"Allows runtime function definition based on configuration.",hint:"Yes, 'def' executes at runtime and can be conditionally executed.",level:"moderate",codeExample:`if debug_mode:
    def log(m): print(m)
else:
    def log(m): pass`},{question:"What is 'Function Composition'?",shortAnswer:"The mathematical process of combining two or more functions (f and g) to produce a new function h(x) = f(g(x)), passing the output of one function as the input to the next.",explanation:"A fundamental technique in clean functional pipeline architecture.",hint:"Combining functions where output of one becomes input to the next.",level:"moderate",codeExample:"composed = lambda x: tax(discount(x))"},{question:"What happens when you delete the original function name with 'del original_func' after aliasing it?",shortAnswer:"The function object remains alive in memory and can still be invoked through the alias variable, because Python uses reference counting garbage collection.",explanation:"Objects exist as long as at least one reference points to them.",hint:"The function remains alive through other active variable references.",level:"moderate",codeExample:"alias = orig; del orig; alias()  # Still executes perfectly!"},{question:"How can you check if an arbitrary object is callable (i.e. can be invoked with ())?",shortAnswer:"By using the built-in 'callable(obj)' function, which returns True for functions, methods, and classes implementing '__call__'.",explanation:"Essential guard check before attempting invocation.",hint:"Use the built-in callable() function.",level:"basic",codeExample:"if callable(handler): handler()"},{question:"What is the difference between a lambda function and a standard 'def' function in terms of first-class status?",shortAnswer:"None. Both lambda and 'def' create identical first-class function objects of type 'types.FunctionType'; lambdas are simply anonymous and limited to a single expression.",explanation:"Lambdas are syntactic sugar for short single-expression functions.",hint:"Both produce identical first-class function objects.",level:"basic",codeExample:"type(lambda x: x) == type(def_func)  # True"},{question:"How does the 'functools.partial' function work?",shortAnswer:"It takes a callable and pre-fills (freezes) a subset of its positional or keyword arguments, returning a new first-class callable object.",explanation:"Standard library tool for creating specialized function variants.",hint:"Creates a new callable with certain arguments pre-filled.",level:"moderate",codeExample:`from functools import partial
power_two = partial(pow, 2)`},{question:"What is the 'Callback Pattern' in Python?",shortAnswer:"Passing a function reference into an asynchronous task or event listener to be called back when the operation finishes (e.g. on_success, on_error).",explanation:"Widely used in GUI frameworks, web servers, and event loops.",hint:"Passing a function to be executed upon completion of an event.",level:"basic",codeExample:"fetch_data(url, on_complete=render_ui)"},{question:"Can functions be stored in a set?",shortAnswer:"Yes. Function objects are immutable and hashable (they implement '__hash__' based on their memory address), so they can be elements in sets or keys in dictionaries.",explanation:"Enables creating unique collections of handler functions.",hint:"Yes, functions are hashable and can be stored in sets.",level:"moderate",codeExample:"handlers = {func_a, func_b}"},{question:"What is the memory overhead of creating many function objects at runtime?",shortAnswer:"Each function object creates a Python object header, code pointer, and '__dict__', taking approximately 140 bytes of RAM; lightweight for normal applications.",explanation:"Very efficient in CPython.",hint:"Each function takes ~140 bytes of memory.",level:"complex",codeExample:"import sys; sys.getsizeof(lambda: None)  # ~144 bytes"},{question:"Why should you avoid using mutable default arguments when returning inner functions?",shortAnswer:"Because default arguments are evaluated once at function definition time and shared across all subsequent invocations, causing unexpected shared state bugs.",explanation:"Use None as the default argument instead.",hint:"Mutable defaults are shared across calls, causing state leakage.",level:"moderate",codeExample:"# Anti-pattern: def factory(cache={}): ..."},{question:"How do first-class functions form the foundation of Python Decorators?",shortAnswer:"Decorators are higher-order functions that accept a function as an argument, wrap it inside a new inner function, and return that wrapped function object.",explanation:"Decorators are pure syntax sugar over first-class function mechanics.",hint:"Decorators accept a function, wrap it, and return the new function.",level:"basic",codeExample:"@dec -> func = dec(func)"},{question:"What happens if you invoke a dispatch table with a key that does not exist without a default?",shortAnswer:"It raises a 'KeyError'; using 'table.get(key, default_handler)' provides safe fallback execution.",explanation:"Defensive coding ensures missing commands are handled gracefully.",hint:"Raises KeyError; use table.get(key, default) for safety.",level:"basic",codeExample:"handler = DISPATCH.get(cmd, fallback_handler)"},{question:"What is the ultimate golden rule for First-Class Functions in Python?",shortAnswer:"Treat functions as dynamic data: pass them to parameterize behavior, return them from factories to generate specialized logic, and compose them into clean processing pipelines.",explanation:"The gateway to mastering Python decorators, closures, and advanced functional architecture.",hint:"Treat functions as dynamic objects: pass, return, alias, and compose them.",level:"basic",codeExample:"# First-class functions: the foundation of advanced Python"}];function L(){const f=a.useRef([]),[i,x]=a.useState("memory"),[c,g]=a.useState(25e3),[o,y]=a.useState("academic"),[h,j]=a.useState(!0),[p,N]=a.useState(!0),[b,v]=a.useState(!0),[m,w]=a.useState("PAYMENT"),s={academic:{name:"apply_academic_scholarship",label:"20% Academic Scholarship (0.80x)",rate:.8,doc:"Applies a 20% discount for meritorious students."},sibling:{name:"apply_sibling_concession",label:"15% Sibling Concession (0.85x)",rate:.85,doc:"Applies a 15% discount for enrolled siblings."},early_bird:{name:"apply_early_bird_discount",label:"10% Early Bird Registration (0.90x)",rate:.9,doc:"Applies 10% waiver for early registrations."},standard:{name:"compute_standard_fee",label:"Standard Tuition Fee (1.00x)",rate:1,doc:"Standard course rate with no waiver."}},u={ADMISSION:{handler:"handle_admission",result:"Processing Admission & Enrolling Student into Python Masterclass",time:"0.2ms"},PAYMENT:{handler:"handle_fee_payment",result:`Recording Fee Payment of INR ${(c*s[o].rate).toLocaleString()} in ledger`,time:"0.3ms"},CERTIFICATE:{handler:"handle_issue_certificate",result:"Generating Certified Completion Diploma with Cryptographic Seal",time:"0.5ms"},UNKNOWN:{handler:"handle_unknown_action (Fallback)",result:"[ERROR] Unrecognized action! Delegated to safe default fallback.",time:"0.1ms"}};let r=c;r=r*s[o].rate,h&&(r+=2500),p&&(r*=1.18),b&&(r=Math.round(r/100)*100),a.useEffect(()=>{const t=new IntersectionObserver(d=>{d.forEach(_=>{_.isIntersecting&&_.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(d=>{d&&t.observe(d)}),()=>t.disconnect()},[]);const n=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["First-Class Functions: ",e.jsx("span",{className:"text-teal-400",children:"Passing & Returning Functions"})]}),e.jsx("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:"Master the foundation of Python functional programming: treating functions as first-class objects, passing functions into higher-order processors, dynamic function factories, command dispatch tables, and composable pipelines."}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Functions as First-Class Citizens"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Higher-Order Functions (HOFs)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏭 Dynamic Function Factories"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(1) Command Dispatch Tables"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌟"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:'1. What Makes Functions "First-Class" in Python?'})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, functions are not merely static blocks of code; they are full ",e.jsx("strong",{children:"first-class objects"})," residing in heap memory. This means a function has a memory address, an identity (",e.jsx("code",{className:"text-teal-300 font-mono",children:"id()"}),"), and can be manipulated exactly like an integer, string, or list:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Variable Assignment"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"alias = calculate_fee"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Assign function references to new variable names without executing them."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Passing as Arguments"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"apply_strategy(discount_fn)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Pass function objects into higher-order functions to parameterize logic."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Returning Functions"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"return custom_calculator"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Function factories construct and return customized specialized functions."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"4️⃣ Storing in Data Structures"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:'table = {"PAY": fn}'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Store function objects inside dictionaries for O(1) command dispatching."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Difference: `func` vs `func()`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"my_func"})," refers to the ",e.jsx("strong",{children:"function object itself"})," (like passing a blueprint). Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"my_func()"})," with parentheses ",e.jsx("strong",{children:"invokes"})," the function, executing its code and evaluating to its return value!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing First-Class Objects & Factory Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("memory"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="memory"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Function Memory Reference"}),e.jsx("button",{onClick:()=>x("hof"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="hof"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Higher-Order Passing"}),e.jsx("button",{onClick:()=>x("factory"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="factory"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Dynamic Function Factory"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining heap memory references, higher-order parameterization, and factory closures:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="memory"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"FUNCTION OBJECTS IN PYTHON HEAP MEMORY"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"90",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"25",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"Variable: `apply_scholarship`"}),e.jsx("text",{x:"15",y:"50",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Reference Pointer ->"}),e.jsx("text",{x:"15",y:"70",fill:"#34d399",fontSize:"8 font-mono",children:"Points to 0x7ffd19a4"}),e.jsx("rect",{x:"0",y:"110",width:"260",height:"90",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"135",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"Variable: `discount_calc`"}),e.jsx("text",{x:"15",y:"160",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Reference Pointer ->"}),e.jsx("text",{x:"15",y:"180",fill:"#38bdf8",fontSize:"8 font-mono",children:"Points to 0x7ffd19a4 (ALIAS)"})]}),e.jsxs("g",{transform:"translate(310, 110)",children:[e.jsx("text",{x:"10",y:"0",fill:"#2dd4bf",fontSize:"26",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"10",y:"80",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(410, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"430",height:"230",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Function Object at Heap Address: 0x7ffd19a4"}),e.jsx("rect",{x:"20",y:"50",width:"390",height:"155",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"35",y:"75",fill:"#ecfdf5",fontSize:"9 font-mono",children:'• `__name__` = "apply_academic_scholarship"'}),e.jsx("text",{x:"35",y:"98",fill:"#ecfdf5",fontSize:"9 font-mono",children:'• `__doc__`  = "Calculates 20% tuition scholarship"'}),e.jsx("text",{x:"35",y:"121",fill:"#ecfdf5",fontSize:"9 font-mono",children:"• `__code__` = <code object at 0x7ffd18>"}),e.jsx("text",{x:"35",y:"144",fill:"#ecfdf5",fontSize:"9 font-mono",children:"• `__dict__` = {'version': '1.0'}"}),e.jsx("text",{x:"35",y:"172",fill:"#34d399",fontSize:"9 font-bold",children:"✓ Both variables execute identical bytecode!"})]})]}):i==="hof"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HIGHER-ORDER FUNCTIONS: PASSING FUNCTIONS AS ARGUMENTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Strategy Functions"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def academic(fee):"}),e.jsx("text",{x:"30",y:"78",fill:"#34d399",fontSize:"8 font-mono",children:"return fee * 0.80"}),e.jsx("text",{x:"15",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def sibling(fee):"}),e.jsx("text",{x:"30",y:"123",fill:"#34d399",fontSize:"8 font-mono",children:"return fee * 0.85"}),e.jsx("rect",{x:"15",y:"150",width:"220",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"175",fill:"#34d399",fontSize:"9 font-bold",children:"First-Class Callables:"}),e.jsx("text",{x:"25",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Pure functions passed as data."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Higher-Order Function"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def process(name, fee, fn):"}),e.jsx("text",{x:"325",y:"85",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"final = fn(fee) # CALLS"}),e.jsx("text",{x:"325",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"return final"}),e.jsx("rect",{x:"310",y:"150",width:"220",height:"70",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"175",fill:"#38bdf8",fontSize:"9 font-bold",children:"Dynamic Delegation:"}),e.jsx("text",{x:"320",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Behavior parameterization."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Clean Invocation"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:'process("Sourav",'}),e.jsx("text",{x:"620",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"25000,"}),e.jsx("text",{x:"620",y:"100",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"academic) # PASSED"}),e.jsx("rect",{x:"605",y:"150",width:"200",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"175",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Open-Closed Principle:"}),e.jsx("text",{x:"615",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Add new strategies easily!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DYNAMIC FUNCTION FACTORIES: RETURNING FUNCTIONS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Factory: `create_tuition_calculator(tax, disc)`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def create_tuition_calculator(tax, disc):"}),e.jsx("text",{x:"35",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"def custom_calc(raw_fee):"}),e.jsx("text",{x:"50",y:"100",fill:"#cbd5e1",fontSize:"8 font-mono",children:"return (raw_fee * (1 - disc)) * (1 + tax)"}),e.jsx("text",{x:"35",y:"125",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"return custom_calc  # RETURNS FUNCTION OBJECT"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"175",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Closure Capture:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Inner function remembers outer `tax` and `disc` parameters!"})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#c084fc",fontSize:"12",fontWeight:"bold",children:"returns"}),e.jsx("text",{x:"15",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Specialized Generated Functions"}),e.jsx("rect",{x:"20",y:"55",width:"330",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"78",fill:"#34d399",fontSize:"9 font-bold font-mono",children:"kolkata_calc = factory(0.18, 0.10)"}),e.jsx("text",{x:"30",y:"98",fill:"#cbd5e1",fontSize:"8",children:"Customized for Kolkata (18% tax, 10% disc)"}),e.jsx("text",{x:"30",y:"113",fill:"#a7f3d0",fontSize:"8 font-mono",children:"kolkata_calc(25000) -> INR 26,550.00"}),e.jsx("rect",{x:"20",y:"145",width:"330",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"168",fill:"#34d399",fontSize:"9 font-bold font-mono",children:"barrackpore_calc = factory(0.05, 0.20)"}),e.jsx("text",{x:"30",y:"188",fill:"#cbd5e1",fontSize:"8",children:"Customized for Barrackpore (5% tax, 20% disc)"}),e.jsx("text",{x:"30",y:"203",fill:"#a7f3d0",fontSize:"8 font-mono",children:"barrackpore_calc(25000) -> INR 21,000.00"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Functor Pipeline & Command Dispatch Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a discount strategy function and toggle pipeline transformation stages to see how first-class functions compose cleanly:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Select Strategy Function Object:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.keys(s).map(t=>e.jsxs("button",{onClick:()=>y(t),className:l("p-2.5 rounded-lg text-left text-xs font-mono border transition-all",o===t?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold",children:s[t].name}),e.jsx("div",{className:"text-[10px] text-slate-500 mt-0.5",children:s[t].label})]},t))}),e.jsxs("div",{className:"space-y-1 pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Base Tuition Fee:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",c.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"10000",max:"50000",step:"5000",value:c,onChange:t=>g(Number(t.target.value)),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block",children:"2. Composed Pipeline Functors:"}),e.jsxs("div",{className:"flex flex-col gap-1.5 text-xs font-mono text-slate-300",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>j(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"add_laboratory_fee (+INR 2,500)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"add_gst_tax (+18% GST)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:b,onChange:t=>v(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"round_to_nearest_hundred()"})]})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Active Function Metadata Introspection:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`fn.__name__`:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:s[o].name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`fn.__doc__`:"}),e.jsxs("span",{className:"text-slate-300 text-[11px] text-right truncate max-w-[200px]",children:['"',s[o].doc,'"']})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Memory Address:"}),e.jsx("span",{className:"text-purple-300",children:"0x7ffd19a48e20"})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-300 font-bold",children:"Composed Pipeline Output:"}),e.jsxs("span",{className:"text-base font-bold text-emerald-400",children:["INR ",r.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2.5 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"3. Command Dispatch Table: `DISPATCH.get(action)`"}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5 text-[11px]",children:Object.keys(u).map(t=>e.jsx("button",{onClick:()=>w(t),className:l("p-1.5 rounded border transition-all text-center",m===t?"bg-cyan-950 border-cyan-500 text-cyan-200 font-bold":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t},t))}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 text-[11px]",children:[e.jsx("span",{children:"Dispatched Handler:"}),e.jsx("span",{className:"text-cyan-300 font-bold",children:u[m].handler})]}),e.jsx("div",{className:"text-emerald-300 text-[11px]",children:u[m].result})]})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master First-Class Functions Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Concept / Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Code Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Benefit"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Real-World Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Function Aliasing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"calc_ref = apply_scholarship"}),e.jsx("td",{className:"py-3 px-4",children:"Dynamic runtime reassignment"}),e.jsx("td",{className:"py-3 px-4",children:"Pluggable backend drivers"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Higher-Order Passing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def run(fn, val): return fn(val)"}),e.jsx("td",{className:"py-3 px-4",children:"Behavioral parameterization"}),e.jsx("td",{className:"py-3 px-4",children:"Strategy pattern, map(), filter()"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Function Factory"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def factory(rate): return lambda x: x*rate"}),e.jsx("td",{className:"py-3 px-4",children:"Generates customized logic"}),e.jsx("td",{className:"py-3 px-4",children:"Branch-specific fee calculators"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Dispatch Tables"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"TABLE = {'ACT': fn}; TABLE[k]()"}),e.jsx("td",{className:"py-3 px-4",children:"O(1) lookups, replaces If-ladders"}),e.jsx("td",{className:"py-3 px-4",children:"REST API routers, CLI command parsers"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating first-class function fundamentals, function factories, command dispatch tables, and composable pipelines:"}),e.jsx(S,{files:[{filename:"first_class_functions_fundamentals.py",code:T,description:"First-class functions, assigning functions to variables, and higher-order argument passing."},{filename:"function_returning_and_factories.py",code:F,description:"Function factories, nested functions, and returning customized function objects."},{filename:"dispatch_table_with_function_objects.py",code:P,description:"Command dispatch tables eliminating sprawling if/elif/else ladders with dictionary lookups."},{filename:"student_fee_calculator_functors.py",code:E,description:"Composable institutional fee processing pipeline using first-class function functors."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Accidentally Calling When Passing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"button.on_click(handle_click())"})," executes the function immediately at setup time and passes its return value (",e.jsx("code",{className:"text-rose-300 font-mono",children:"None"}),") to the button!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass uncalled reference: ",e.jsx("code",{className:"text-emerald-300",children:"button.on_click(handle_click)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Shadowing Built-in Functions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"list = [1, 2, 3]"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:"max = 100"})," overwrites the built-in function object in local scope."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Never use Python built-in names (",e.jsx("code",{className:"text-emerald-300",children:"list, dict, str, max, id"}),") as variable identifiers."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Unhandled Dispatch KeyError"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using direct subscription ",e.jsx("code",{className:"text-purple-300 font-mono",children:"DISPATCH[cmd]()"})," crashes with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"KeyError"})," on unrecognized commands."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"DISPATCH.get(cmd, default_handler)()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Mutable Defaults in Factories"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using mutable defaults like ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"def factory(cache={}):"})," creates shared state across all generated function instances!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Initialize mutable objects inside the factory body."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering first-class functions, higher-order functions, function factories, and command dispatch tables:"}),e.jsx(k,{questions:R})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with first-class function templates, factory patterns, and dispatch recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:I,filename:"python_topic0_first_class_functions_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(A,{})]})]})]})}export{L as default};

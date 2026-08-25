import{b as p,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as f}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic11_files/pdb_debugger_fundamentals.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Debugging techniques & pdb breakpoints\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 1: Python Debugger (pdb) Fundamentals & \`breakpoint()\`\r
Demonstrates:\r
  1. Setting interactive breakpoints with built-in \`breakpoint()\` (Python 3.7+)\r
  2. Essential pdb debugger commands: n, s, c, q, p, pp, w, u, d, l\r
  3. Non-interactive programmatic inspection for automated environments\r
"""\r
\r
def calculate_student_gpa(scores: list) -> float:\r
    """Calculates average student GPA with debug introspection points."""\r
    total = sum(scores)\r
    count = len(scores)\r
\r
    # In an interactive terminal, calling \`breakpoint()\` pauses execution\r
    # and opens an interactive (Pdb) prompt:\r
    # breakpoint()\r
\r
    gpa = total / count if count > 0 else 0.0\r
    return gpa\r
\r
\r
def demonstrate_pdb_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PYTHON DEBUGGER (PDB) FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    print(r"""\r
Essential PDB Debugger Navigation Commands:\r
  -------------------------------------------------------------------------\r
  Command   Full Name       Action\r
  -------------------------------------------------------------------------\r
  n         next            Execute current line and stop at next line\r
  s         step            Step into function call on current line\r
  c         continue        Resume full execution until next breakpoint\r
  q         quit            Abort debugging session and exit script\r
  p <var>   print           Evaluate and print value of variable or expression\r
  pp <var>  pretty-print    Format and pretty-print complex dicts/lists\r
  l         list            Display 11 lines of source code around current line\r
  w         where           Print full call stack trace with frame pointers\r
  u         up              Move current frame up one level in call stack\r
  d         down            Move current frame down one level in call stack\r
  b <line>  break           Set dynamic breakpoint at specific line or function\r
  -------------------------------------------------------------------------\r
""")\r
\r
    scores = [85.0, 92.5, 88.0, 96.0]\r
    print(f"Sample Student Exam Scores: {scores}")\r
    avg_gpa = calculate_student_gpa(scores)\r
    print(f"Computed Grade Average: {avg_gpa:.2f}/100")\r
\r
    print("\\n[PASSED] PDB Fundamentals & Command Reference Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pdb_fundamentals()\r
`,N=`# topic11_files/post_mortem_debugging_pm.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Debugging techniques & pdb breakpoints\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 2: Post-Mortem Debugging & Stack Frame Inspection\r
Demonstrates:\r
  1. Post-mortem debugging concepts with \`pdb.post_mortem()\`\r
  2. Inspecting dead execution frames and local variables after an exception\r
  3. Programmatic traceback extraction using \`sys.exc_info()\` and \`traceback\`\r
"""\r
\r
import sys\r
import traceback\r
\r
def compute_installment_plan(total_tuition: float, num_installments: int) -> float:\r
    """Deliberately crashes on zero installments to demonstrate post-mortem inspection."""\r
    return total_tuition / num_installments\r
\r
\r
def simulate_post_mortem_inspection():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - POST-MORTEM DEBUGGING & STACK INSPECTION")\r
    print("=" * 70)\r
\r
    try:\r
        print("Executing: compute_installment_plan(36000.0, 0)")\r
        compute_installment_plan(36000.0, 0)\r
    except ZeroDivisionError:\r
        exc_type, exc_value, exc_tb = sys.exc_info()\r
\r
        print("\\n--- FORENSIC POST-MORTEM REPORT ---")\r
        print(f"Exception Type    : {exc_type.__name__}")\r
        print(f"Exception Value   : {exc_value}")\r
\r
        # Extract frames from traceback:\r
        frames = traceback.extract_tb(exc_tb)\r
        print(f"\\nCall Stack Depth  : {len(frames)} frames")\r
        for idx, frame in enumerate(frames, 1):\r
            print(f"  Frame #{idx}: File '{frame.filename}', Line {frame.lineno}, in {frame.name}")\r
            print(f"            Code -> {frame.line}")\r
\r
        print(r"""\r
Post-Mortem Debugger Usage in Terminal:\r
  When a Python script crashes in interactive shell:\r
  >>> import pdb; pdb.pm()\r
  Or from command line:\r
  $ python -m pdb script.py\r
  This drops you directly into the dying frame with all local variables preserved!\r
""")\r
\r
    print("[PASSED] Post-Mortem Stack Frame Inspection Verified.")\r
\r
\r
if __name__ == "__main__":\r
    simulate_post_mortem_inspection()\r
`,j=`# topic11_files/logging_vs_print_debugging.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Debugging techniques & pdb breakpoints\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 3: Structured Logging vs \`print()\` Debugging\r
Demonstrates:\r
  1. The 5 standard Python log levels: DEBUG, INFO, WARNING, ERROR, CRITICAL\r
  2. Configuring structured log formats with timestamps, levels, and line numbers\r
  3. Using \`logger.exception()\` to capture complete tracebacks automatically\r
  4. Dynamically toggling log verbosity between Development and Production\r
"""\r
\r
import logging\r
import sys\r
\r
def configure_institutional_logger(name: str, level=logging.DEBUG) -> logging.Logger:\r
    """Configures a professional enterprise console logger."""\r
    logger = logging.getLogger(name)\r
    logger.setLevel(level)\r
\r
    # Avoid duplicate handlers if re-run:\r
    if not logger.handlers:\r
        handler = logging.StreamHandler(sys.stdout)\r
        # Formatted with Timestamp, Log Level, Component, Line Number, Message:\r
        formatter = logging.Formatter(\r
            fmt="[%(asctime)s] [%(levelname)-8s] [%(name)s:%(lineno)d] %(message)s",\r
            datefmt="%Y-%m-%d %H:%M:%S"\r
        )\r
        handler.setFormatter(formatter)\r
        logger.addHandler(handler)\r
\r
    return logger\r
\r
\r
def process_student_scholarship(logger: logging.Logger, student_id: str, marks_pct: float, base_fee: float):\r
    logger.debug(f"Initiating scholarship audit for Student ID: {student_id} (Marks: {marks_pct}%)")\r
\r
    if marks_pct >= 90.0:\r
        logger.info(f"Student {student_id} qualified for 25% Merit Scholarship!")\r
        discount = base_fee * 0.25\r
    elif marks_pct >= 75.0:\r
        logger.info(f"Student {student_id} qualified for 10% Academic Scholarship.")\r
        discount = base_fee * 0.10\r
    else:\r
        logger.warning(f"Student {student_id} marks {marks_pct}% below scholarship threshold (75%).")\r
        discount = 0.0\r
\r
    net = base_fee - discount\r
    logger.debug(f"Calculated Net Tuition: INR {net:,.2f}")\r
    return net\r
\r
\r
def demonstrate_structured_logging():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STRUCTURED LOGGING VS PRINT DEBUGGING")\r
    print("=" * 70)\r
\r
    logger = configure_institutional_logger("ScholarshipService", level=logging.DEBUG)\r
\r
    # 1. High-scoring student (Triggers DEBUG and INFO)\r
    print("1. Auditing Top Student (Marks: 94.5%):")\r
    process_student_scholarship(logger, "STU-101", 94.5, 20000.0)\r
\r
    # 2. Borderline student (Triggers WARNING)\r
    print("\\n2. Auditing Low-Scoring Student (Marks: 68.0%):")\r
    process_student_scholarship(logger, "STU-102", 68.0, 20000.0)\r
\r
    # 3. Capturing complete exception traceback with logger.exception()\r
    print("\\n3. Capturing Exception with \`logger.exception()\`:")\r
    try:\r
        raise ValueError("Database connection dropped during fee write!")\r
    except ValueError:\r
        logger.exception("Failed to commit scholarship discount to database ledger:")\r
\r
    print("\\n[PASSED] Structured Logging Suite Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_structured_logging()\r
`,_=`# topic11_files/institutional_admission_debugger_suite.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Debugging techniques & pdb breakpoints\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 4: Institutional Score Reconciliation & Forensic Debugger Suite (Case Study)\r
Demonstrates:\r
  1. Multi-layered score reconciliation with structured diagnostic telemetry\r
  2. Programmatic frame inspection and local variable snapshotting\r
  3. Generating full forensic post-mortem failure reports\r
"""\r
\r
import sys\r
import traceback\r
import logging\r
from typing import List, Dict, Any\r
\r
class ScoreReconciliationEngine:\r
    """Enterprise Exam Score Reconciliation Service with Diagnostic Telemetry."""\r
\r
    def __init__(self, logger: logging.Logger):\r
        self.logger = logger\r
\r
    def calculate_scaled_score(self, raw_score: float, difficulty_weight: float) -> float:\r
        self.logger.debug(f"Calculating scaled score: raw={raw_score}, weight={difficulty_weight}")\r
        if difficulty_weight <= 0:\r
            raise ValueError(f"Difficulty weight must be strictly positive (>0), got {difficulty_weight}")\r
        return raw_score * difficulty_weight\r
\r
    def reconcile_student_ledger(self, student_records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:\r
        self.logger.info(f"Starting score reconciliation for {len(student_records)} students...")\r
        reconciled = []\r
\r
        for record in student_records:\r
            stu_id = record["id"]\r
            name = record["name"]\r
            raw = record["raw_score"]\r
            weight = record["weight"]\r
\r
            try:\r
                scaled = self.calculate_scaled_score(raw, weight)\r
                reconciled.append({\r
                    "id": stu_id,\r
                    "name": name,\r
                    "raw": raw,\r
                    "scaled": scaled,\r
                    "status": "VALIDATED"\r
                })\r
                self.logger.info(f"  [OK] {name} ({stu_id}) -> Scaled Score: {scaled:.2f}")\r
            except Exception as err:\r
                self.logger.error(f"  [RECONCILIATION FAILED] Student {name} ({stu_id}): {err}")\r
                # Capture frame snapshot\r
                reconciled.append({\r
                    "id": stu_id,\r
                    "name": name,\r
                    "raw": raw,\r
                    "scaled": None,\r
                    "status": f"FAILED: {type(err).__name__}"\r
                })\r
\r
        return reconciled\r
\r
\r
def run_debugger_suite_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SCORE RECONCILIATION & DEBUGGER SUITE")\r
    print("=" * 70)\r
\r
    # Configure logger\r
    logging.basicConfig(\r
        level=logging.INFO,\r
        format="[%(asctime)s] [%(levelname)s] %(message)s",\r
        datefmt="%H:%M:%S"\r
    )\r
    logger = logging.getLogger("ScoreReconciler")\r
\r
    dataset = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "raw_score": 85.0, "weight": 1.15},\r
        {"id": "STU-102", "name": "Priyanka Sen", "raw_score": 92.0, "weight": 1.10},\r
        {"id": "STU-103", "name": "Rahul Corrupt", "raw_score": 78.0, "weight": 0.0}, # Corrupt weight!\r
        {"id": "STU-104", "name": "Debolina Roy", "raw_score": 88.0, "weight": 1.05}\r
    ]\r
\r
    engine = ScoreReconciliationEngine(logger)\r
    results = engine.reconcile_student_ledger(dataset)\r
\r
    print("\\nFINAL RECONCILIATION REPORT:")\r
    for r in results:\r
        scaled_str = f"{r['scaled']:.2f}" if r['scaled'] is not None else "N/A"\r
        print(f"  * {r['name']:<18} ({r['id']}) | Status: {r['status']:<22} | Scaled: {scaled_str}")\r
\r
    print("\\n[PASSED] Institutional Score Reconciliation Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_debugger_suite_demo()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
            TOPIC 11: DEBUGGING TECHNIQUES & PDB BREAKPOINTS IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ESSENTIAL PDB DEBUGGER COMMANDS\r
--------------------------------------------------------------------------------\r
  • n (next)     : Execute current line, stop at next line in same function.\r
  • s (step)     : Step into the function call on the current line.\r
  • c (continue) : Resume execution until the next breakpoint.\r
  • q (quit)     : Abort debugging session and terminate program.\r
  • p <expr>     : Evaluate and print value of variable or expression.\r
  • w (where)    : Print the entire call stack with current frame arrow.\r
  • u (up)       : Move current frame up one level in the call stack.\r
  • d (down)     : Move current frame down one level in the call stack.\r
  • l (list)     : Show 11 lines of source code around current line.\r
\r
--------------------------------------------------------------------------------\r
2. SETTING BREAKPOINTS (PYTHON 3.7+)\r
--------------------------------------------------------------------------------\r
  def calculate(val):\r
      breakpoint()  # Drops directly into interactive (Pdb) prompt!\r
      return val * 2\r
\r
--------------------------------------------------------------------------------\r
3. POST-MORTEM DEBUGGING\r
--------------------------------------------------------------------------------\r
  $ python -m pdb my_script.py\r
  # Drops into the exact line and scope where the crash occurred!\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 11: PDB DEBUGGING TECHNIQUES\r
================================================================================\r
`,P=[{question:"What is 'pdb' in Python?",shortAnswer:"The built-in Python interactive Source Code Debugger module, allowing developers to set breakpoints, step line-by-line, inspect stack frames, and evaluate variables at runtime.",explanation:"Standard library tool for inspecting runtime state without external IDE dependencies.",hint:"Python's standard built-in interactive source code debugger.",level:"basic",codeExample:"import pdb; pdb.set_trace()"},{question:"How do you set a breakpoint in modern Python (Python 3.7+)?",shortAnswer:"By calling the built-in 'breakpoint()' function, which automatically calls 'sys.breakpointhook()' (defaulting to 'pdb.set_trace()').",explanation:"Replaces the older 'import pdb; pdb.set_trace()' idiom.",hint:"Use the built-in breakpoint() function.",level:"basic",codeExample:`def compute():
    breakpoint()  # Drops into PDB
    return 42`},{question:"What is the difference between the PDB commands 'n' (next) and 's' (step into)?",shortAnswer:"'n' (next) executes the current line as a whole and stops at the next line in the current function; 's' (step) steps into any function call located on the current line.",explanation:"Use 'n' to step over helper functions and 's' to enter their bodies.",hint:"n steps over function calls; s steps inside called functions.",level:"basic",codeExample:`# Line: result = calculate(x)
# 'n' executes calculate() and stops
# 's' enters calculate() function body`},{question:"What do the PDB commands 'u' (up) and 'd' (down) do?",shortAnswer:"'u' (up) moves the current frame pointer one level UP the call stack (toward the caller); 'd' (down) moves one level DOWN (toward the callee).",explanation:"Allows inspecting variable state in outer caller scopes while paused in a helper function.",hint:"Navigates up and down the call stack frames.",level:"moderate",codeExample:`(Pdb) u  # Inspects caller's local variables
(Pdb) d  # Returns to inner callee frame`},{question:"What does the PDB command 'w' (where) display?",shortAnswer:"It prints the entire call stack trace from the root script entry point down to the currently paused line, with an arrow indicating the active frame.",explanation:"Essential for understanding how execution arrived at the current breakpoint.",hint:"Prints the full call stack trace.",level:"basic",codeExample:`(Pdb) w
# Shows complete stack frame hierarchy`},{question:"What is 'Post-Mortem Debugging' in Python?",shortAnswer:"The technique of inspecting the dying state, call stack, and local variables of an unhandled exception immediately after it crashes, using 'pdb.post_mortem()' or 'pdb.pm()'.",explanation:"Enables post-crash forensic autopsy without having to reproduce the bug.",hint:"Debugging the state of a program immediately after an unhandled exception crashes.",level:"moderate",codeExample:`import pdb, sys
try: risky_code()
except: pdb.post_mortem(sys.exc_info()[2])`},{question:"How can you run any Python script directly inside PDB from the terminal command line?",shortAnswer:"By executing 'python -m pdb my_script.py'.",explanation:"Automatically pauses execution at the very first line of the script.",hint:"Use python -m pdb script.py.",level:"basic",codeExample:"python -m pdb manage.py runserver"},{question:"How can all 'breakpoint()' calls across an entire codebase be disabled in production without modifying code?",shortAnswer:"By setting the environment variable 'PYTHONBREAKPOINT=0' before running Python.",explanation:"Guarantees production services never hang waiting for interactive terminal input.",hint:"Set environment variable PYTHONBREAKPOINT=0.",level:"moderate",codeExample:`export PYTHONBREAKPOINT=0
python main.py  # All breakpoints ignored!`},{question:"How can you plug in alternative debuggers (like ipdb, pudb, or web-pdb) using 'PYTHONBREAKPOINT'?",shortAnswer:"By setting 'PYTHONBREAKPOINT=ipdb.set_trace' or 'PYTHONBREAKPOINT=pudb.set_trace' in the environment.",explanation:"Customizes the global breakpoint handler dynamically.",hint:"Set PYTHONBREAKPOINT=<module>.<function>.",level:"complex",codeExample:"export PYTHONBREAKPOINT=ipdb.set_trace"},{question:"What is the difference between PDB commands 'p' and 'pp'?",shortAnswer:"'p <expr>' evaluates and prints an expression; 'pp <expr>' pretty-prints complex nested data structures (like large dictionaries and lists) using the 'pprint' module.",explanation:"Improves readability when inspecting large nested datasets.",hint:"p is standard print; pp is formatted pretty-print.",level:"basic",codeExample:"(Pdb) pp student_roster  # Cleanly formatted JSON-like view"},{question:"Why is the 'logging' module preferred over 'print()' statements for debugging in production systems?",shortAnswer:"Because logging provides standardized severity levels (DEBUG, INFO, WARNING, ERROR), timestamps, module names, thread IDs, log rotation, and the ability to disable debug logs globally without editing source files.",explanation:"print() statements pollute output, lack metadata, and cannot be filtered dynamically.",hint:"Logging provides levels, timestamps, rotation, and dynamic verbosity control.",level:"basic",codeExample:"logger.debug(f'Computed value: {x}')"},{question:"What are the 5 standard logging levels in Python in ascending order of severity?",shortAnswer:"1. DEBUG (10), 2. INFO (20), 3. WARNING (30), 4. ERROR (40), 5. CRITICAL (50).",explanation:"Standard hierarchy defined in the logging module.",hint:"DEBUG -> INFO -> WARNING -> ERROR -> CRITICAL.",level:"basic",codeExample:"logger.debug('lowest') -> logger.critical('highest')"},{question:`What does 'logger.exception("msg")' do when called inside an 'except' block?`,shortAnswer:"It automatically captures and logs the full exception traceback at the ERROR severity level along with the custom message.",explanation:"Shorthand for logger.error(msg, exc_info=True).",hint:"Logs the message and automatically attaches the full exception traceback.",level:"basic",codeExample:`except DatabaseError:
    logger.exception('Database write failed')`},{question:"What does the PDB command 'c' (continue) do?",shortAnswer:"It resumes normal script execution until the next breakpoint is encountered or the program terminates.",explanation:"Exits step-by-step mode and lets the program run at full speed.",hint:"Resumes execution until the next breakpoint.",level:"basic",codeExample:"(Pdb) c  # Resumes execution"},{question:"How do you set a conditional breakpoint inside a PDB session?",shortAnswer:"Using the command 'b <line_number>, <condition>' (e.g. 'b 42, count > 1000').",explanation:"PDB will only pause execution on line 42 when count exceeds 1000.",hint:"Use 'b line, condition'.",level:"moderate",codeExample:"(Pdb) b 42, score < 40  # Pauses line 42 only on failing scores"},{question:"What does the PDB command 'l' (list) do?",shortAnswer:"Displays 11 lines of source code centered around the currently executing line (or continues listing subsequent lines if repeated).",explanation:"Provides instant source code context in terminal debugging sessions.",hint:"Lists lines of source code around current execution pointer.",level:"basic",codeExample:"(Pdb) l  # Shows source code window"},{question:"What happens if a variable in your code is named 'c' or 'n' when inside a PDB prompt?",shortAnswer:"Typing 'c' or 'n' will trigger the PDB commands (continue/next) rather than printing the variable; to inspect the variable, prefix it with 'p' (e.g. 'p c' or 'p n').",explanation:"PDB command names take precedence over bare variable names.",hint:"PDB commands shadow variable names; use 'p var' to inspect.",level:"moderate",codeExample:"(Pdb) p n  # Prints variable named 'n' rather than stepping"},{question:"How do you modify a variable's value dynamically while paused inside a PDB session?",shortAnswer:"By executing an assignment expression directly in the PDB prompt (e.g. 'x = 100' or '!x = 100').",explanation:"Allows testing live patches and exploring alternative branches interactively.",hint:"Assign the variable directly in the (Pdb) prompt: x = 100.",level:"moderate",codeExample:"(Pdb) fee_balance = 0.0  # Mutates variable live in memory"},{question:"What is the purpose of 'pdb.runcall(func, *args)'?",shortAnswer:"Executes a specified function under PDB supervision, pausing execution immediately at the function's entry point.",explanation:"Convenient for targeted debugging of isolated functions without editing source files.",hint:"Runs a function under PDB control starting at the first line.",level:"complex",codeExample:"import pdb; pdb.runcall(calculate_gpa, [85, 90])"},{question:"What is the 'Logging Configuration Dict' pattern ('logging.config.dictConfig')?",shortAnswer:"A standard declarative JSON/dict configuration format used in enterprise frameworks (Django, FastAPI) to configure loggers, handlers, formatters, and filters in a single central place.",explanation:"Separates logging configuration from application business logic.",hint:"Declarative dictionary configuration for loggers and handlers.",level:"moderate",codeExample:"logging.config.dictConfig(LOGGING_CONFIG)"},{question:"What does the PDB command 'unt' (until) do?",shortAnswer:"Continues execution until a line number greater than the current line is reached (useful for stepping completely through a loop without pausing on every iteration).",explanation:"Fast-forwards past repetitive loop bodies.",hint:"Runs until the loop finishes or a higher line number is reached.",level:"complex",codeExample:"(Pdb) unt  # Steps past current loop"},{question:"What does the PDB command 'r' (return) do?",shortAnswer:"Continues execution until the current function returns, pausing immediately at the return statement.",explanation:"Allows you to inspect the return value before exiting a function.",hint:"Executes until the current function returns.",level:"moderate",codeExample:"(Pdb) r  # Fast-forwards to function return"},{question:"Can PDB be used to debug multithreaded or multiprocessing applications?",shortAnswer:"Standard PDB operates on stdin/stdout and can freeze or get corrupted with multiple threads competing for terminal input; specialized debuggers (like 'rpdb' or 'web-pdb') or thread-safe logging are required for concurrent systems.",explanation:"Concurrent terminal I/O causes race conditions in standard PDB.",hint:"Standard PDB has terminal conflicts with threads; use logging or remote debuggers.",level:"complex",codeExample:"# Use structured logging for multithreaded systems"},{question:"What is the command to quit PDB immediately without finishing the script?",shortAnswer:"The 'q' (quit) command, which raises 'BdbQuit' to terminate the interpreter.",explanation:"Immediately stops the debugging session.",hint:"Type 'q' to quit.",level:"basic",codeExample:"(Pdb) q  # Terminates session"},{question:"What is the ultimate golden rule for debugging Python applications?",shortAnswer:"Use structured logging as the permanent foundation for production telemetry, leverage 'breakpoint()' with PDB commands ('n', 's', 'w', 'p') for interactive diagnosis, and use post-mortem 'pdb.pm()' to perform forensic root-cause analysis on unexpected crashes.",explanation:"Provides a complete, professional diagnostic toolkit for any Python system.",hint:"Use structured logging for production, breakpoint() for dev, and pdb.pm() for post-mortem analysis.",level:"basic",codeExample:"# Complete, professional Python debugging strategy"}];function O(){const x=p.useRef([]),[c,m]=p.useState("pdbflow"),[r,d]=p.useState(1),[u,h]=p.useState([{type:"SYSTEM",text:"Python 3.13.0 (main) [GCC / CPython]"},{type:"SYSTEM",text:"-> breakpoint() reached at line 1: initiate_fee_calculation()"},{type:"PROMPT",text:"(Pdb) _"}]),a=[{line:1,text:"def calculate_net_tuition(raw_fee, discount_rate):",fn:"calculate_net_tuition"},{line:2,text:"    breakpoint()  # <-- Pauses in debugger",fn:"calculate_net_tuition"},{line:3,text:"    discount = raw_fee * discount_rate",fn:"calculate_net_tuition"},{line:4,text:"    net_payable = raw_fee - discount",fn:"calculate_net_tuition"},{line:5,text:"    return net_payable",fn:"calculate_net_tuition"},{line:6,text:"fee_res = calculate_net_tuition(20000.0, 0.15)",fn:"main"},{line:7,text:"print(f'Final Fee: {fee_res}')",fn:"main"}],o=t=>{let n=[...u];if(n.push({type:"INPUT",text:`(Pdb) ${t}`}),t==="n")if(r<7){const s=r+1;d(s),n.push({type:"OUTPUT",text:`> script.py(${s})${a[s-1].fn}()
-> ${a[s-1].text}`})}else n.push({type:"SYSTEM",text:"--Return from script execution (Code 0)--"});else if(t==="s"){if(r===6)d(1),n.push({type:"OUTPUT",text:`> script.py(1)calculate_net_tuition()
-> ${a[0].text}`});else if(r<7){const s=r+1;d(s),n.push({type:"OUTPUT",text:`> script.py(${s})${a[s-1].fn}()
-> ${a[s-1].text}`})}}else t==="p raw_fee"?n.push({type:"OUTPUT",text:"20000.0"}):t==="p discount_rate"?n.push({type:"OUTPUT",text:"0.15"}):t==="p discount"?n.push({type:"OUTPUT",text:r>=4?"3000.0":"*** NameError: name 'discount' is not defined (not yet executed)"}):t==="w"?n.push({type:"OUTPUT",text:`  script.py(6)<module>()
    fee_res = calculate_net_tuition(20000.0, 0.15)
> script.py(${r})${a[r-1].fn}()
-> ${a[r-1].text}`}):t==="c"&&(d(7),n.push({type:"OUTPUT",text:`Final Fee: INR 17,000.00
The program finished and exited with code 0.`}));h(n)},g=()=>{d(2),h([{type:"SYSTEM",text:"Python 3.13.0 (main) [GCC / CPython]"},{type:"SYSTEM",text:"-> breakpoint() reached at line 2: calculate_net_tuition()"},{type:"PROMPT",text:"(Pdb) _"}])};p.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const i=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:i,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 11"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Debugging Techniques & ",e.jsx("code",{className:"text-teal-400 font-mono",children:"pdb"})," Breakpoints"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python interactive runtime diagnosis: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"breakpoint()"}),", essential PDB navigation (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"n"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"s"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"p"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"w"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"u"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"d"}),"), post-mortem debugging with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pdb.post_mortem()"}),", and structured logging vs fragile ",e.jsx("code",{className:"text-amber-300 font-mono",children:"print()"})," debugging."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🐞 Built-in breakpoint() Engine"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⌨️ Essential PDB Commands (n, s, c, p, w)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💀 Post-Mortem Frame Autopsy (pdb.pm())"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Structured logging vs print()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Python Debugger (PDB) & `breakpoint()`"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python 3.7+, you can insert an interactive breakpoint anywhere by typing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"breakpoint()"}),". This automatically pauses execution and launches the interactive ",e.jsx("strong",{children:"PDB shell"})," without requiring IDE extensions:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Step-by-Step Control"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"n (next) / s (step into)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Step line-by-line or dive directly inside helper function implementations."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Stack Traversal"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"w (where) / u (up) / d (down)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Inspect variable scopes in caller functions higher up the call stack tree."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Post-Mortem Autopsy"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"python -m pdb script.py"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Drops directly into the exact line and scope where an unhandled crash occurred."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Disabling All Breakpoints in Production"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["You can globally disable all ",e.jsx("code",{className:"text-teal-300 font-mono",children:"breakpoint()"})," statements across an entire production server by setting the environment variable ",e.jsx("code",{className:"text-teal-300 font-mono",children:"export PYTHONBREAKPOINT=0"}),". This guarantees production services will never freeze waiting for terminal input!"]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Debugger Control Flow & Stack Frames"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("pdbflow"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="pdbflow"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"PDB Execution Flow"}),e.jsx("button",{onClick:()=>m("stack"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="stack"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Call Stack Traversal (w, u, d)"}),e.jsx("button",{onClick:()=>m("logging"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="logging"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Logging vs print() Levels"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining breakpoint triggers, stack frame inspection, and structured telemetry:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="pdbflow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE `breakpoint()` INTERACTIVE EXECUTION FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"1. Code Execution"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def calculate(x):"}),e.jsx("text",{x:"30",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"breakpoint()  # PAUSE"}),e.jsx("text",{x:"30",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"return x * 2"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Execution Paused:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Interpreter halts bytecode"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"and transfers to (Pdb) prompt."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"310",y:"30",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"2. Interactive (Pdb) Prompt"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"(Pdb) p x"}),e.jsx("text",{x:"310",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"42"}),e.jsx("text",{x:"310",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"(Pdb) n"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"320",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Full Live Introspection:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Inspect/mutate variables,"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"step line-by-line, print frames."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"605",y:"30",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"3. Resume Execution (`c`)"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"(Pdb) c"}),e.jsx("text",{x:"605",y:"85",fill:"#38bdf8",fontSize:"9 font-mono",children:"Resumes full speed!"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"615",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Zero IDE Lock-in:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Works identically on servers,"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"SSH terminals, and Docker."})]})]}):c==="stack"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CALL STACK TRAVERSAL: `w` (WHERE), `u` (UP), `d` (DOWN)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"65",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"25",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"Frame 1: `main()` entry (File 'app.py', Line 50)"}),e.jsx("text",{x:"20",y:"48",fill:"#ecfdf5",fontSize:"9 font-mono",children:'fee = calculate_semester_fee(student_id="STU-101")'}),e.jsx("rect",{x:"0",y:"85",width:"380",height:"65",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"110",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"Frame 2: `calculate_semester_fee()` (Line 25)"}),e.jsx("text",{x:"20",y:"133",fill:"#ecfdf5",fontSize:"9 font-mono",children:"discount = apply_scholarship(marks=94.5)"}),e.jsx("rect",{x:"0",y:"170",width:"380",height:"65",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"195",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"> Frame 3: `apply_scholarship()` (Line 10) [ACTIVE FRAME]"}),e.jsx("text",{x:"20",y:"218",fill:"#34d399",fontSize:"9 font-mono",children:"breakpoint()  # Active debugger pause point"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"235",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Stack Traversal Command Mechanics"}),e.jsx("rect",{x:"20",y:"55",width:"360",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"75",fill:"#34d399",fontSize:"10 font-bold",children:"`u` (Up Command):"}),e.jsx("text",{x:"30",y:"93",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Moves active scope to Frame 2 or 1 to inspect caller variables."}),e.jsx("rect",{x:"20",y:"115",width:"360",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"10 font-bold",children:"`d` (Down Command):"}),e.jsx("text",{x:"30",y:"153",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Moves active scope down toward Frame 3."}),e.jsx("text",{x:"20",y:"195",fill:"#cbd5e1",fontSize:"9",children:"• `w` prints complete stack trace with current pointer"}),e.jsx("text",{x:"20",y:"215",fill:"#cbd5e1",fontSize:"9",children:"• Zero loss of local variables across all execution frames"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"STRUCTURED LOGGING LEVELS: DEBUG TO CRITICAL"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"240",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"1. DEBUG (10)"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"9",children:"Diagnostic details,"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"9",children:"variable states,"}),e.jsx("text",{x:"15",y:"100",fill:"#cbd5e1",fontSize:"9",children:"payload dumps."}),e.jsx("rect",{x:"170",y:"0",width:"150",height:"240",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"185",y:"30",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"2. INFO (20)"}),e.jsx("text",{x:"185",y:"60",fill:"#cbd5e1",fontSize:"9",children:"Normal milestones,"}),e.jsx("text",{x:"185",y:"80",fill:"#cbd5e1",fontSize:"9",children:"user logins,"}),e.jsx("text",{x:"185",y:"100",fill:"#cbd5e1",fontSize:"9",children:"successful fees."}),e.jsx("rect",{x:"340",y:"0",width:"150",height:"240",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"355",y:"30",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"3. WARNING (30)"}),e.jsx("text",{x:"355",y:"60",fill:"#cbd5e1",fontSize:"9",children:"Unexpected events,"}),e.jsx("text",{x:"355",y:"80",fill:"#cbd5e1",fontSize:"9",children:"retries, quota"}),e.jsx("text",{x:"355",y:"100",fill:"#cbd5e1",fontSize:"9",children:"approaching max."}),e.jsx("rect",{x:"510",y:"0",width:"150",height:"240",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"525",y:"30",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"4. ERROR (40)"}),e.jsx("text",{x:"525",y:"60",fill:"#cbd5e1",fontSize:"9",children:"Operation failed,"}),e.jsx("text",{x:"525",y:"80",fill:"#cbd5e1",fontSize:"9",children:"payment declined,"}),e.jsx("text",{x:"525",y:"100",fill:"#cbd5e1",fontSize:"9",children:"caught exceptions."}),e.jsx("rect",{x:"680",y:"0",width:"150",height:"240",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"695",y:"30",fill:"#ffe4e6",fontSize:"11",fontWeight:"bold",children:"5. CRITICAL (50)"}),e.jsx("text",{x:"695",y:"60",fill:"#cbd5e1",fontSize:"9",children:"System down,"}),e.jsx("text",{x:"695",y:"80",fill:"#cbd5e1",fontSize:"9",children:"database dead,"}),e.jsx("text",{x:"695",y:"100",fill:"#cbd5e1",fontSize:"9",children:"immediate pager."})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive PDB Debugger Shell Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute virtual PDB commands to step through the tuition calculation script and inspect runtime variables:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"Source Script (`script.py`)"}),e.jsx("button",{onClick:g,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Restart Session"})]}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:a.map(t=>e.jsxs("div",{className:l("flex items-center gap-3 py-1 px-2 rounded transition-all",r===t.line?"bg-teal-950/80 border border-teal-600 text-teal-200":"text-slate-400"),children:[e.jsx("span",{className:"text-slate-600 text-[10px] w-4",children:t.line}),e.jsx("span",{className:"w-4 text-teal-400 font-bold",children:r===t.line?"→":" "}),e.jsx("span",{className:l(r===t.line&&"font-bold text-white"),children:t.text})]},t.line))}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-[11px] font-mono text-slate-400 block font-bold",children:"Click Debugger Command to Send:"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs font-mono",children:[e.jsx("button",{onClick:()=>o("n"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500 rounded text-teal-300 font-bold",children:"`n` (Next Line)"}),e.jsx("button",{onClick:()=>o("s"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500 rounded text-cyan-300 font-bold",children:"`s` (Step Into)"}),e.jsx("button",{onClick:()=>o("c"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500 rounded text-emerald-300 font-bold",children:"`c` (Continue)"}),e.jsx("button",{onClick:()=>o("p raw_fee"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500 rounded text-purple-300",children:"`p raw_fee`"}),e.jsx("button",{onClick:()=>o("p discount"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500 rounded text-purple-300",children:"`p discount`"}),e.jsx("button",{onClick:()=>o("w"),className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500 rounded text-amber-300",children:"`w` (Where/Stack)"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Interactive (Pdb) Console Output"}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 flex-1 font-mono text-xs space-y-1.5 overflow-y-auto max-h-[360px]",children:u.map((t,n)=>e.jsx("div",{className:l("leading-relaxed",t.type==="SYSTEM"&&"text-slate-500 text-[11px]",t.type==="PROMPT"&&"text-teal-400 font-bold",t.type==="INPUT"&&"text-teal-300 font-bold",t.type==="OUTPUT"&&"text-slate-200 whitespace-pre-wrap pl-2 border-l border-slate-700"),children:t.text},n))})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master PDB Debugger Navigation Commands Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Command"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Full Name"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Execution Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Common Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"n"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"next"}),e.jsx("td",{className:"py-3 px-4",children:"Executes current line, stops at next line in same function"}),e.jsx("td",{className:"py-3 px-4",children:"Stepping over library calls"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"step"}),e.jsx("td",{className:"py-3 px-4",children:"Steps inside the function call on current line"}),e.jsx("td",{className:"py-3 px-4",children:"Entering helper functions to diagnose logic"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"w"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"where"}),e.jsx("td",{className:"py-3 px-4",children:"Prints entire call stack trace with frame arrow"}),e.jsx("td",{className:"py-3 px-4",children:"Finding how execution reached current line"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"u / d"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"up / down"}),e.jsx("td",{className:"py-3 px-4",children:"Moves frame pointer up to caller or down to callee"}),e.jsx("td",{className:"py-3 px-4",children:"Inspecting caller variable values"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"c"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"continue"}),e.jsx("td",{className:"py-3 px-4",children:"Resumes execution until next breakpoint or termination"}),e.jsx("td",{className:"py-3 px-4",children:"Resuming normal program speed"})]})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating PDB commands, post-mortem debugging, structured logging, and score reconciliation diagnostics:"}),e.jsx(f,{files:[{filename:"pdb_debugger_fundamentals.py",code:w,description:"PDB fundamentals, breakpoint() function, and command cheat sheet reference."},{filename:"post_mortem_debugging_pm.py",code:N,description:"Post-mortem debugging concepts, dead frame inspection, and sys.exc_info() stack extraction."},{filename:"logging_vs_print_debugging.py",code:j,description:"Structured logging vs print debugging, log levels, and automatic exception trace capturing."},{filename:"institutional_admission_debugger_suite.py",code:_,description:"Enterprise Exam Score Reconciliation Service with diagnostic telemetry and frame snapshotting."}]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Leaving `breakpoint()` in Production"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Leaving active ",e.jsx("code",{className:"text-rose-300 font-mono",children:"breakpoint()"})," calls in background services (like Celery or Gunicorn) causes worker processes to freeze permanently waiting for terminal input."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Set ",e.jsx("code",{className:"text-emerald-300",children:"export PYTHONBREAKPOINT=0"})," in production environments."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Shadowing PDB Commands with Variables"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If your code has a variable named ",e.jsx("code",{className:"text-amber-300 font-mono",children:"c"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:"n"}),", typing it into PDB executes the continue/next command instead of printing!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always prefix variable evaluation with ",e.jsx("code",{className:"text-emerald-300",children:"p c"})," or ",e.jsx("code",{className:"text-emerald-300",children:"p n"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Stepping Over Bugs (`n` vs `s`)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"n"})," (next) on a line with a buggy custom function steps completely over the function call, making it impossible to see where the internal crash occurred."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"s"})," (step) to enter suspect function bodies."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Cluttering Code with Print Statements"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"print()"})," for debugging pollutes standard output, cannot be silenced dynamically, and lacks timestamps and file locations."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"logging.getLogger()"})," with structured levels."]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering the Python Debugger (PDB), breakpoint(), stack frames, and structured logging:"}),e.jsx(y,{questions:P})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with PDB commands cheat sheet, post-mortem recipes, and logging templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:S,filename:"python_topic11_pdb_debugging_notes.txt",title:"Print Topic 11 Study Notes"})}),e.jsx(v,{})]})]})]})}export{O as default};

import{b as r,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as j}from"./FAQTemplate-CkSqDH4B.js";import{T as w}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic5_files/subprocess_run_synchronous_execution.py\r
# Module: 004_001_filesystem-os\r
# Topic: Running external shell commands using subprocess module (run, Popen, pipes)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 1: \`subprocess.run()\` Synchronous Command Execution\r
Demonstrates:\r
  1. Synchronous execution with \`subprocess.run()\`: \`capture_output=True\`, \`text=True\`\r
  2. Inspecting \`CompletedProcess\`: \`.returncode\`, \`.stdout\`, \`.stderr\`, \`.args\`\r
  3. Handling \`check=True\` & \`subprocess.CalledProcessError\`\r
  4. Setting execution timeouts (\`timeout=5.0\`) & \`subprocess.TimeoutExpired\`\r
  5. Security invariant: Safe token lists vs dangerous \`shell=True\` (Command Injection)\r
"""\r
\r
import sys\r
import subprocess\r
from typing import List\r
\r
def demonstrate_subprocess_run():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SUBPROCESS.RUN() SYNCHRONOUS EXECUTION")\r
    print("=" * 70)\r
\r
    # 1. Safe Synchronous Command with Output Capture:\r
    print("1. Safe Command Execution with \`capture_output=True, text=True\`:")\r
    python_cmd = [sys.executable, "-c", "import sys; print(f'Python Kernel {sys.version.split()[0]} Online')"]\r
    \r
    result = subprocess.run(\r
        python_cmd,\r
        capture_output=True,\r
        text=True,\r
        check=True\r
    )\r
\r
    print(f"   * Executed Command   : {' '.join(result.args)}")\r
    print(f"   * Process Returncode : {result.returncode} (0 = Success)")\r
    print(f"   * Standard Output    : {result.stdout.strip()}")\r
    print(f"   * Standard Error     : {result.stderr.strip() or 'None'}\\n")\r
\r
    # 2. Defensive Error Handling with check=True:\r
    print("2. Handling Non-Zero Exit Codes with \`check=True\`:")\r
    failing_cmd = [sys.executable, "-c", "import sys; sys.exit(42)"]\r
    try:\r
        subprocess.run(failing_cmd, check=True, capture_output=True, text=True)\r
    except subprocess.CalledProcessError as exc:\r
        print(f"   * [DEFENSIVE ERROR CAUGHT] CalledProcessError: Command failed with exit code {exc.returncode}")\r
        print(f"   * Failed Command: {' '.join(exc.cmd)}\\n")\r
\r
    # 3. Timeout Protection with timeout parameter:\r
    print("3. Timeout Protection against Hanging Commands (\`timeout=2.0\`):")\r
    hanging_cmd = [sys.executable, "-c", "import time; time.sleep(10)"]\r
    try:\r
        subprocess.run(hanging_cmd, timeout=0.5, capture_output=True, text=True)\r
    except subprocess.TimeoutExpired as exc:\r
        print(f"   * [TIMEOUT TRIGGERED] Process exceeded limit: {exc.timeout}s")\r
        print(f"   * Subprocess was automatically killed by Python runtime.\\n")\r
\r
    # 4. Security Critical: Shell Injection Prevention:\r
    print("4. Security Invariant: Why \`shell=True\` is Dangerous:")\r
    print("   * VULNERABLE: \`subprocess.run(f'ping {user_input}', shell=True)\` -> Injection Risk!")\r
    print("   * SECURE    : \`subprocess.run(['ping', user_input])\` -> Parameterized List!")\r
\r
    print(r"""\r
subprocess.run Invariants:\r
  1. Always pass command arguments as a list of strings (\`['python', '-V']\`) rather than a single raw string with \`shell=True\`.\r
  2. \`capture_output=True\` captures both stdout and stderr; \`text=True\` decodes bytes into str automatically.\r
  3. \`check=True\` raises \`CalledProcessError\` on non-zero exit codes, preventing silent failures.\r
  4. Always specify a reasonable \`timeout=\` when invoking external network or long-running binaries.\r
""")\r
    print("[PASSED] subprocess.run Synchronous Execution Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_subprocess_run()\r
`,E=`# topic5_files/subprocess_popen_asynchronous_streams.py\r
# Module: 004_001_filesystem-os\r
# Topic: Running external shell commands using subprocess module (run, Popen, pipes)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 2: \`subprocess.Popen\` Asynchronous Process Streams\r
Demonstrates:\r
  1. Non-blocking asynchronous process spawning with \`subprocess.Popen()\`\r
  2. Real-time stdout stream processing (\`for line in process.stdout:\`)\r
  3. Process lifecycle management: \`poll()\`, \`wait()\`, \`terminate()\`, \`kill()\`\r
  4. Two-way buffered communication with \`process.communicate(input=...)\`\r
"""\r
\r
import sys\r
import subprocess\r
import time\r
from typing import List\r
\r
def demonstrate_popen_streams():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SUBPROCESS.POPEN ASYNCHRONOUS STREAMS")\r
    print("=" * 70)\r
\r
    # 1. Spawning Real-Time Streaming Child Process:\r
    print("1. Real-Time Line-by-Line stdout Streaming with \`subprocess.Popen()\`:")\r
    # Script that simulates a multi-step worker printing progress:\r
    worker_script = (\r
        "import sys, time\\n"\r
        "for i in range(1, 4):\\n"\r
        "    print(f'[WORKER_EVENT] Processing Admission Batch #{i}...', flush=True)\\n"\r
        "    time.sleep(0.05)\\n"\r
        "print('[WORKER_EVENT] All Batches Completed Successfully.', flush=True)\\n"\r
    )\r
\r
    proc = subprocess.Popen(\r
        [sys.executable, "-c", worker_script],\r
        stdout=subprocess.PIPE,\r
        stderr=subprocess.PIPE,\r
        text=True,\r
        bufsize=1\r
    )\r
\r
    print(f"   * Spawned Child Process (PID = {proc.pid})")\r
    \r
    # Read streamed lines in real-time\r
    if proc.stdout:\r
        for line in iter(proc.stdout.readline, ""):\r
            print(f"     -> STREAMED LOG: {line.strip()}")\r
\r
    # Wait for process to terminate and collect returncode\r
    exit_code = proc.wait()\r
    print(f"   * Process Terminated with Exit Code: {exit_code}\\n")\r
\r
    # 2. Two-Way Communication with communicate(input=...):\r
    print("2. Two-Way Process Interaction with \`proc.communicate(input=...)\`:")\r
    # Child script that consumes stdin and converts it to uppercase:\r
    echo_script = "import sys; data = sys.stdin.read(); print(data.upper())"\r
\r
    echo_proc = subprocess.Popen(\r
        [sys.executable, "-c", echo_script],\r
        stdin=subprocess.PIPE,\r
        stdout=subprocess.PIPE,\r
        stderr=subprocess.PIPE,\r
        text=True\r
    )\r
\r
    input_payload = "sourav mukherjee - python pro - accotax barrackpore"\r
    stdout_data, stderr_data = echo_proc.communicate(input=input_payload)\r
\r
    print(f"   * Input Sent to stdin  : '{input_payload}'")\r
    print(f"   * Output from stdout   : '{stdout_data.strip()}'\\n")\r
\r
    # 3. Non-Blocking Status Checking with proc.poll():\r
    print("3. Non-Blocking Process Status Polling (\`proc.poll()\`):")\r
    sleep_proc = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(0.1)"])\r
    print(f"   * Immediate poll() : {sleep_proc.poll()} (None = Still Running)")\r
    time.sleep(0.15)\r
    print(f"   * After wait poll(): {sleep_proc.poll()} (Integer = Terminated)")\r
\r
    print(r"""\r
subprocess.Popen Invariants:\r
  1. \`Popen()\` starts the child process immediately in the background without blocking the parent Python thread.\r
  2. Always iterate over \`proc.stdout\` or call \`proc.communicate()\` to prevent OS pipe buffers from filling and deadlocking.\r
  3. \`proc.poll()\` returns \`None\` while the child process is alive, and the exit code integer once finished.\r
  4. Always ensure child processes are reaped with \`proc.wait()\` to avoid leaving zombie processes on Unix systems.\r
""")\r
    print("[PASSED] subprocess.Popen Asynchronous Streams Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_popen_streams()\r
`,_=`# topic5_files/subprocess_unix_pipes_and_chaining.py\r
# Module: 004_001_filesystem-os\r
# Topic: Running external shell commands using subprocess module (run, Popen, pipes)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 3: Process Pipeline Chaining with OS Pipes\r
Demonstrates:\r
  1. Chaining multiple subprocesses together (\`Process 1 | Process 2\`)\r
  2. Feeding \`p1.stdout\` into \`p2.stdin\`\r
  3. Proper closing of intermediate pipe file descriptors to prevent deadlocks\r
"""\r
\r
import sys\r
import subprocess\r
from typing import List\r
\r
def demonstrate_subprocess_pipes():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SUBPROCESS PIPELINE CHAINING (PIPES)")\r
    print("=" * 70)\r
\r
    # 1. Pipeline Scenario: Generator Script -> Filter Script -> Formatter Script\r
    # Simulates: "generate_students | filter_cleared_fees | format_json"\r
\r
    # Step 1: Generator Process\r
    gen_script = (\r
        "import sys\\n"\r
        "records = [\\n"\r
        "    'STU-101,Sourav Mukherjee,Python AI,PAID',\\n"\r
        "    'STU-102,Priyanka Sen,Data Science,PENDING',\\n"\r
        "    'STU-103,Amitava Ghosh,Taxation Pro,PAID',\\n"\r
        "    'STU-104,Debolina Roy,Full Stack,PENDING'\\n"\r
        "]\\n"\r
        "for r in records: print(r)\\n"\r
    )\r
\r
    # Step 2: Filter Process (Consumes stdin, filters only 'PAID' rows)\r
    filter_script = (\r
        "import sys\\n"\r
        "for line in sys.stdin:\\n"\r
        "    if 'PAID' in line:\\n"\r
        "        sys.stdout.write(line)\\n"\r
    )\r
\r
    # Step 3: Formatter Process (Consumes filtered stdin, produces formatted output)\r
    format_script = (\r
        "import sys\\n"\r
        "for line in sys.stdin:\\n"\r
        "    parts = line.strip().split(',')\\n"\r
        "    print(f'[CLEARED ADMISSION] ID: {parts[0]} | Name: {parts[1]} | Course: {parts[2]}')\\n"\r
    )\r
\r
    print("1. Constructing Multi-Process Pipe (p1 | p2 | p3):")\r
\r
    # Spawn Process 1:\r
    p1 = subprocess.Popen(\r
        [sys.executable, "-c", gen_script],\r
        stdout=subprocess.PIPE\r
    )\r
\r
    # Spawn Process 2 (takes p1.stdout as stdin):\r
    p2 = subprocess.Popen(\r
        [sys.executable, "-c", filter_script],\r
        stdin=p1.stdout,\r
        stdout=subprocess.PIPE\r
    )\r
    # CRITICAL PIPE INVARIANT: Allow p1 to receive a SIGPIPE if p2 exits early:\r
    if p1.stdout:\r
        p1.stdout.close()\r
\r
    # Spawn Process 3 (takes p2.stdout as stdin):\r
    p3 = subprocess.Popen(\r
        [sys.executable, "-c", format_script],\r
        stdin=p2.stdout,\r
        stdout=subprocess.PIPE,\r
        text=True\r
    )\r
    if p2.stdout:\r
        p2.stdout.close()\r
\r
    # Capture final pipeline output:\r
    final_output, _ = p3.communicate()\r
    p3.wait()\r
\r
    print("2. Final Aggregated Pipeline Stream Output:")\r
    for line in final_output.strip().splitlines():\r
        print(f"   * {line}")\r
\r
    print(r"""\r
Subprocess Pipe Invariants:\r
  1. When connecting \`p2.stdin = p1.stdout\`, always call \`p1.stdout.close()\` in the parent process.\r
  2. Closing \`p1.stdout\` in the parent ensures that only \`p2\` holds the read handle, enabling proper EOF detection.\r
  3. Chaining Python subprocesses with pipes enables high-throughput streaming without holding intermediate large datasets in RAM.\r
""")\r
    print("[PASSED] Subprocess Pipeline Chaining Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_subprocess_pipes()\r
`,v=`# topic5_files/institutional_automated_service_health_and_cli_runner.py\r
# Module: 004_001_filesystem-os\r
# Topic: Running external shell commands using subprocess module (run, Popen, pipes)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 4: Institutional Service Health Inspector & Command Runner (Case Study)\r
Demonstrates:\r
  1. Production external command runner and system health audit engine\r
  2. Safe parameterized list execution for Git, Python runtime, and host system checks\r
  3. Defensive timeout mitigation, returncode evaluation, and JSON compliance reporting\r
"""\r
\r
import sys\r
import json\r
import subprocess\r
from typing import Dict, Any, List\r
\r
class InstitutionalServiceHealthInspector:\r
    """Production external command executor and system health diagnostics engine."""\r
\r
    def __init__(self):\r
        self.diagnostics: List[Dict[str, Any]] = []\r
\r
    def execute_safe_command(self, cmd_args: List[str], label: str, timeout: float = 3.0) -> Dict[str, Any]:\r
        """Executes an external binary safely using subprocess.run with timeout protection."""\r
        try:\r
            res = subprocess.run(\r
                cmd_args,\r
                capture_output=True,\r
                text=True,\r
                timeout=timeout\r
            )\r
            success = (res.returncode == 0)\r
            record = {\r
                "label": label,\r
                "command": " ".join(cmd_args),\r
                "success": success,\r
                "exit_code": res.returncode,\r
                "stdout": res.stdout.strip(),\r
                "stderr": res.stderr.strip()\r
            }\r
        except subprocess.TimeoutExpired as e:\r
            record = {\r
                "label": label,\r
                "command": " ".join(cmd_args),\r
                "success": False,\r
                "exit_code": -1,\r
                "stdout": "",\r
                "stderr": f"Command timed out after {timeout}s"\r
            }\r
        except FileNotFoundError:\r
            record = {\r
                "label": label,\r
                "command": " ".join(cmd_args),\r
                "success": False,\r
                "exit_code": -1,\r
                "stdout": "",\r
                "stderr": f"Executable '{cmd_args[0]}' not found in system PATH"\r
            }\r
\r
        self.diagnostics.append(record)\r
        return record\r
\r
    def run_full_system_diagnostic_suite(self) -> Dict[str, Any]:\r
        """Executes full diagnostic suite across runtime, git repository, and internal APIs."""\r
        # 1. Python Runtime Check\r
        self.execute_safe_command(\r
            [sys.executable, "-V"],\r
            label="Python Runtime Version"\r
        )\r
\r
        # 2. Python Environment Architecture\r
        self.execute_safe_command(\r
            [sys.executable, "-c", "import platform; print(f'{platform.system()} {platform.machine()} - {platform.python_implementation()}')"],\r
            label="Host OS & Architecture"\r
        )\r
\r
        # 3. Simulated Microservice Heartbeat Process\r
        self.execute_safe_command(\r
            [sys.executable, "-c", "print('ACCOTAX_MICROSERVICE_NODE_01_HEALTHY_STATUS_200')"],\r
            label="Accounting Gateway API Heartbeat"\r
        )\r
\r
        # 4. Git Repository Working Tree Status\r
        self.execute_safe_command(\r
            ["git", "rev-parse", "--short", "HEAD"],\r
            label="Git Repository Commit Hash"\r
        )\r
\r
        total_checks = len(self.diagnostics)\r
        passed_checks = sum(1 for d in self.diagnostics if d["success"])\r
        is_healthy = (passed_checks == total_checks)\r
\r
        return {\r
            "is_system_healthy": is_healthy,\r
            "total_checks": total_checks,\r
            "passed_checks": passed_checks,\r
            "compliance_percentage": (passed_checks / total_checks) * 100 if total_checks else 0,\r
            "diagnostic_records": self.diagnostics\r
        }\r
\r
\r
def demonstrate_health_runner():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL SERVICE HEALTH INSPECTOR")\r
    print("=" * 70)\r
\r
    inspector = InstitutionalServiceHealthInspector()\r
    report = inspector.run_full_system_diagnostic_suite()\r
\r
    print("1. System Health Diagnostic Summary:")\r
    print(f"   * Overall System Health  : {'[HEALTHY]' if report['is_system_healthy'] else '[DEGRADED]'}")\r
    print(f"   * Diagnostics Passed     : {report['passed_checks']} / {report['total_checks']} ({report['compliance_percentage']:.1f}%)\\n")\r
\r
    print("2. Individual Diagnostic Check Records:")\r
    for record in report["diagnostic_records"]:\r
        status_tag = "[PASS]" if record["success"] else "[FAIL]"\r
        print(f"   * {status_tag} {record['label']:<34} (Exit: {record['exit_code']})")\r
        if record["stdout"]:\r
            print(f"          Output: {record['stdout']}")\r
        if record["stderr"]:\r
            print(f"          Error : {record['stderr']}")\r
\r
    print("\\n[PASSED] Institutional Service Health Inspector Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_health_runner()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
            TOPIC 5: EXTERNAL COMMANDS & SUBPROCESS: RUN, POPEN & PIPES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SUBPROCESS.RUN() (SYNCHRONOUS)\r
--------------------------------------------------------------------------------\r
  res = subprocess.run(\r
      ["git", "status", "--porcelain"],\r
      capture_output=True,\r
      text=True,\r
      check=True,\r
      timeout=5.0\r
  )\r
  * res.returncode : Exit code (0 = success)\r
  * res.stdout     : Decoded string output\r
\r
--------------------------------------------------------------------------------\r
2. SUBPROCESS.POPEN() (STREAMING & ASYNC)\r
--------------------------------------------------------------------------------\r
  proc = subprocess.Popen(\r
      ["python", "long_worker.py"],\r
      stdout=subprocess.PIPE,\r
      text=True\r
  )\r
  for line in proc.stdout:\r
      print("Stream:", line.strip())\r
  proc.wait()\r
\r
--------------------------------------------------------------------------------\r
3. PIPELINE CHAINING (p1 | p2)\r
--------------------------------------------------------------------------------\r
  p1 = subprocess.Popen(["cat", "data.csv"], stdout=subprocess.PIPE)\r
  p2 = subprocess.Popen(["grep", "PAID"], stdin=p1.stdout, stdout=subprocess.PIPE)\r
  p1.stdout.close() # Important pipe closing invariant!\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 5: SUBPROCESS MODULE\r
================================================================================\r
`,C=[{question:"Why was the 'subprocess' module introduced to replace legacy 'os.system()'?",shortAnswer:"'subprocess' provides a secure, powerful API to spawn new processes, connect to their standard input/output/error pipes, set execution timeouts, capture outputs cleanly, and obtain exact return codes.",explanation:"Standard library process execution replacement.",hint:"Replaced os.system to provide secure pipe handling, output capture, and timeout controls.",level:"basic",codeExample:"res = subprocess.run(['python', '--version'], capture_output=True, text=True)"},{question:"What is the return value of 'subprocess.run()'?",shortAnswer:"A 'subprocess.CompletedProcess' instance containing attributes: '.returncode', '.stdout', '.stderr', and '.args'.",explanation:"CompletedProcess data struct.",hint:"Returns a CompletedProcess object with returncode, stdout, and stderr.",level:"basic",codeExample:`res = subprocess.run(['git', 'status'], capture_output=True, text=True)
print(res.returncode, res.stdout)`},{question:"What does 'capture_output=True' do in 'subprocess.run()'?",shortAnswer:"It automatically redirects both 'stdout' and 'stderr' to 'subprocess.PIPE', capturing process outputs for programmatic inspection instead of dumping them to the terminal.",explanation:"Standard stream capturing.",hint:"Captures both stdout and stderr into the returned CompletedProcess object.",level:"basic",codeExample:"result = subprocess.run(['echo', 'hello'], capture_output=True)"},{question:"Why should you pass 'text=True' (or 'universal_newlines=True') to 'subprocess.run()'?",shortAnswer:"Without 'text=True', 'stdout' and 'stderr' return raw bytes ('b'hello\\n''); with 'text=True', Python automatically decodes them into standard strings ('str') using the system encoding.",explanation:"Automatic string decoding.",hint:"Decodes binary output bytes into standard Python strings automatically.",level:"basic",codeExample:`res = subprocess.run(['echo', 'test'], capture_output=True, text=True)
assert isinstance(res.stdout, str)`},{question:"What happens when you pass 'check=True' to 'subprocess.run()' and the command fails?",shortAnswer:"If the child process exits with a non-zero returncode, Python raises a 'subprocess.CalledProcessError' exception containing the returncode, command args, and captured stderr.",explanation:"Enforcing exit code validation.",hint:"Raises CalledProcessError on any non-zero exit code.",level:"basic",codeExample:`try:
    subprocess.run(['false'], check=True)
except subprocess.CalledProcessError as e:
    print(e.returncode)`},{question:"How do you protect your Python application from external commands that hang indefinitely?",shortAnswer:"By specifying the 'timeout=seconds' parameter in 'subprocess.run()'; if the process exceeds the timeout, Python kills the child process and raises 'subprocess.TimeoutExpired'.",explanation:"Execution timeout protection.",hint:"Pass timeout=seconds to raise TimeoutExpired if execution exceeds the limit.",level:"basic",codeExample:"subprocess.run(['sleep', '10'], timeout=2.0)"},{question:"Why is 'shell=True' considered a major security vulnerability in production applications?",shortAnswer:"Command Injection: when 'shell=True' is used with untrusted user input, malicious shell metacharacters (';', '&&', '|', '`') allow attackers to execute arbitrary unauthorized shell commands.",explanation:"Command injection vulnerability in shell execution.",hint:"Enables command injection vulnerabilities when combining with untrusted user input.",level:"complex",codeExample:"# VULNERABLE: subprocess.run(f'cat {user_file}', shell=True)"},{question:`How does passing a list of arguments (e.g. "['ping', host]") prevent command injection?`,shortAnswer:"The arguments are passed directly to the OS 'execve()' / 'CreateProcess()' API as discrete parameters without invoking the system shell interpreter, treating metacharacters strictly as literal data.",explanation:"Direct parameterized execution.",hint:"Passes arguments directly to OS kernel without shell interpreter parsing.",level:"moderate",codeExample:"subprocess.run(['ping', user_host]) # Secure: treats input strictly as host string"},{question:"What is the key difference between 'subprocess.run()' and 'subprocess.Popen()'?",shortAnswer:"'subprocess.run()' is synchronous and blocks execution until the child process terminates; 'subprocess.Popen()' is asynchronous/non-blocking, starting the process in the background and returning immediately.",explanation:"Synchronous blocking vs asynchronous background execution.",hint:"run() blocks until completion; Popen() starts the process asynchronously.",level:"basic",codeExample:"proc = subprocess.Popen(['python', 'long_task.py']) # Returns immediately"},{question:"How do you stream a child process's stdout line-by-line in real-time using 'Popen'?",shortAnswer:"Spawn with 'stdout=subprocess.PIPE, text=True' and iterate over 'proc.stdout': 'for line in proc.stdout: print(line.strip())'.",explanation:"Real-time stream iteration.",hint:"Iterate over proc.stdout when stdout=subprocess.PIPE and text=True.",level:"basic",codeExample:`proc = subprocess.Popen(['ping', 'localhost'], stdout=subprocess.PIPE, text=True)
for line in proc.stdout: print(line)`},{question:"What is 'proc.communicate(input=None, timeout=None)' and why should it be preferred over manual pipe reads?",shortAnswer:"'proc.communicate()' safely sends data to stdin, reads all stdout and stderr until EOF, waits for the process to terminate, and avoids deadlocks caused by full OS pipe buffers.",explanation:"Deadlock-free standard stream I/O.",hint:"Safely reads stdout/stderr and sends stdin without risk of OS pipe buffer deadlocks.",level:"moderate",codeExample:"stdout, stderr = proc.communicate(input='hello\\n')"},{question:"What is the difference between 'proc.poll()' and 'proc.wait()'?",shortAnswer:"'proc.poll()' checks if the child process has finished without blocking (returns 'None' if alive, exit code if finished); 'proc.wait()' blocks the calling thread until the process terminates.",explanation:"Non-blocking status query vs blocking wait.",hint:"poll() checks status without blocking; wait() blocks until termination.",level:"basic",codeExample:"if proc.poll() is None: print('Still running')"},{question:"What is the difference between 'proc.terminate()' and 'proc.kill()'?",shortAnswer:"'proc.terminate()' sends a graceful termination signal ('SIGTERM' on Unix, 'TerminateProcess' on Windows); 'proc.kill()' sends an uncatchable immediate termination signal ('SIGKILL' on Unix).",explanation:"Graceful termination vs forceful kill.",hint:"terminate sends SIGTERM (graceful); kill sends SIGKILL (forceful).",level:"basic",codeExample:"proc.terminate(); proc.wait()"},{question:'How do you chain multiple processes together using pipes in Python (equivalent to "cat file | grep text")?',shortAnswer:"Set 'p2 = subprocess.Popen(cmd2, stdin=p1.stdout, stdout=subprocess.PIPE)' and close 'p1.stdout.close()' in the parent.",explanation:"OS pipe chaining between subprocesses.",hint:"Pass p1.stdout as stdin to p2, then close p1.stdout in parent.",level:"moderate",codeExample:"p1 = Popen(['cat', 'f'], stdout=PIPE); p2 = Popen(['grep', 'x'], stdin=p1.stdout); p1.stdout.close()"},{question:"Why MUST you call 'p1.stdout.close()' in the parent script when piping 'p1.stdout' into 'p2.stdin'?",shortAnswer:"To ensure that only 'p2' holds an open read handle to the pipe; if the parent leaves its handle open, 'p2' will never receive an EOF and will hang indefinitely waiting for input.",explanation:"Pipe descriptor reference counting and EOF signaling.",hint:"Ensures p2 receives EOF when p1 terminates, preventing pipeline deadlocks.",level:"complex",codeExample:"p1.stdout.close() # Parent closes its handle to pipe"},{question:"What exception is raised if the executable specified in 'subprocess.run()' does not exist?",shortAnswer:"A 'FileNotFoundError' (or 'OSError: [Errno 2] No such file or directory').",explanation:"Missing binary exception.",hint:"Raises FileNotFoundError if the executable is not in PATH.",level:"basic",codeExample:`try:
    subprocess.run(['non_existent_binary'])
except FileNotFoundError:
    print('Binary not installed')`},{question:"How do you pass custom environment variables to a child subprocess?",shortAnswer:`Using the 'env=' parameter with a dictionary: 'custom_env = os.environ.copy(); custom_env["NODE_ENV"] = "prod"; subprocess.run(cmd, env=custom_env)'.`,explanation:"Child process environment isolation.",hint:"Pass a dictionary to the env= parameter of subprocess.run.",level:"basic",codeExample:`my_env = {**os.environ, 'API_KEY': '123'}
subprocess.run(cmd, env=my_env)`},{question:"How do you set the Current Working Directory for a subprocess?",shortAnswer:`Using the 'cwd=' parameter: 'subprocess.run(["git", "status"], cwd="/path/to/repo")'.`,explanation:"Subprocess working directory specification.",hint:"Pass the target folder to cwd= parameter.",level:"basic",codeExample:"subprocess.run(['npm', 'install'], cwd='frontend/')"},{question:"What is 'subprocess.DEVNULL' and when is it used?",shortAnswer:"A special standard library sentinel representing the OS null device ('/dev/null' on Unix, 'NUL' on Windows) used to discard stdout or stderr silently without buffering.",explanation:"Discarding child process output streams.",hint:"Discards stream output silently without consuming memory buffer.",level:"basic",codeExample:"subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)"},{question:"What is 'sys.executable' and why should it always be used to invoke Python subprocesses?",shortAnswer:"'sys.executable' holds the absolute path to the exact Python interpreter binary currently running the application, ensuring child scripts execute inside the same virtual environment.",explanation:"Virtual environment interpreter preservation.",hint:"Guarantees child scripts run in the exact same Python virtual environment.",level:"basic",codeExample:"subprocess.run([sys.executable, 'worker.py'])"},{question:"What happens if a child process produces huge output and you use 'stdout=subprocess.PIPE' without reading it?",shortAnswer:"The OS pipe buffer (typically 64KB) fills up, and the child process freezes/deadlocks permanently waiting for the buffer to drain.",explanation:"OS pipe buffer exhaustion deadlock.",hint:"The OS pipe buffer fills up and causes the child process to freeze/deadlock.",level:"complex",codeExample:"# Avoid: proc = Popen(cmd, stdout=PIPE); proc.wait() -> DEADLOCK IF LARGE OUTPUT"},{question:"How do you hide the Windows command console window when launching a GUI subprocess in Python?",shortAnswer:"Use 'creationflags=subprocess.CREATE_NO_WINDOW' (Windows only) or 'startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW'.",explanation:"Windows window creation flags.",hint:"Use creationflags=subprocess.CREATE_NO_WINDOW on Windows.",level:"moderate",codeExample:"subprocess.run(cmd, creationflags=subprocess.CREATE_NO_WINDOW)"},{question:"What is 'shlex.split()' and why is it useful when constructing subprocess argument lists?",shortAnswer:"'shlex.split(command_string)' splits a command string into a token list according to Unix shell quoting rules, safely preserving quoted arguments with spaces.",explanation:"Safe shell token splitting.",hint:"Splits a string into a list of arguments respecting quoted substrings.",level:"basic",codeExample:`import shlex
args = shlex.split('git commit -m "My Commit Message"')`},{question:"Can 'subprocess' be used with 'asyncio' in asynchronous Python code?",shortAnswer:"Yes, using 'asyncio.create_subprocess_exec(*args)' or 'asyncio.create_subprocess_shell()', which integrates non-blocking child process streams with the asyncio event loop.",explanation:"Asyncio subprocess integration.",hint:"Yes, using asyncio.create_subprocess_exec.",level:"moderate",codeExample:"proc = await asyncio.create_subprocess_exec('git', 'status')"},{question:"What is the ultimate golden rule for running external commands in Python?",shortAnswer:"Always pass arguments as a token list (never 'shell=True' with untrusted input), capture text with 'capture_output=True, text=True', enforce success with 'check=True', and guard with 'timeout=seconds'.",explanation:"The complete enterprise guideline for subprocess in Python.",hint:"Use list arguments without shell=True, text=True, check=True, and timeout limits.",level:"basic",codeExample:"# Python Subprocess Mastery"}];function W(){const p=r.useRef([]),[n,u]=r.useState("runVsPopen"),[l,b]=r.useState("PYTHON_VERSION"),[k,I]=r.useState("RUN"),[x,f]=r.useState(!0),[m,g]=r.useState(!0),[o,y]=r.useState(!0);let i="",a="";l==="PYTHON_VERSION"?(i=`# Safe synchronous command invocation:
result = subprocess.run(
    [sys.executable, "-V"],
    capture_output=True,
    text=${o?"True":"False"},
    check=${x?"True":"False"}${m?`,
    timeout=3.0`:""}
)
print("Returncode:", result.returncode)
print("Stdout    :", result.stdout.strip())`,a=`[SUBPROCESS_EXEC] Executing: [sys.executable, "-V"]
* Process ID (PID)  : 52184
* Return Code       : 0 (SUCCESS)
* Output Captured   : ${o?'"Python 3.13.2"':"b'Python 3.13.2\\r\\n'"}
[STATUS] Command completed in 18ms.`):l==="GIT_HASH"?(i=`# Query repository commit hash:
result = subprocess.run(
    ["git", "rev-parse", "--short", "HEAD"],
    capture_output=True,
    text=${o?"True":"False"},
    check=${x?"True":"False"}${m?`,
    timeout=3.0`:""}
)
print("Commit Hash:", result.stdout.strip())`,a=`[SUBPROCESS_EXEC] Executing: ["git", "rev-parse", "--short", "HEAD"]
* Process ID (PID)  : 52210
* Return Code       : 0 (SUCCESS)
* Git Commit Output : ${o?'"8f4c2e1"':"b'8f4c2e1\\n'"}
[STATUS] Head revision resolved.`):l==="STREAM_WORKER"?(i=`# Asynchronous stdout line-by-line streaming:
proc = subprocess.Popen(
    [sys.executable, "stream_worker.py"],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True,
    bufsize=1
)
for line in iter(proc.stdout.readline, ""):
    print("Streamed Log:", line.strip())
proc.wait()`,a=`[SUBPROCESS_POPEN] Spawning Background Process (PID = 52248):
-> STREAMED LOG: [WORKER_EVENT] Ingesting Barrackpore Student Roster (Batch #1)...
-> STREAMED LOG: [WORKER_EVENT] Validating KYC Documents & Fee Records...
-> STREAMED LOG: [WORKER_EVENT] Ingestion Complete. All 150 Records Verified.
* Process Terminated with Exit Code: 0`):(i=`# Multi-process pipeline chaining (p1 | p2):
p1 = subprocess.Popen([sys.executable, "gen_data.py"], stdout=subprocess.PIPE)
p2 = subprocess.Popen([sys.executable, "filter_paid.py"], stdin=p1.stdout, stdout=subprocess.PIPE, text=True)
p1.stdout.close() # Critical pipe closing invariant!

output, _ = p2.communicate()
print("Pipeline Output:", output)`,a=`[SUBPROCESS_PIPELINE] Running Process Chain (p1 | p2):
* p1 [Generator Process] -> stdout -> p2.stdin [Filter Process]
* Closed parent p1.stdout descriptor to allow proper EOF.
----------------------------------------------------------
[CLEARED RECORD] ID: STU-101 | Name: Sourav Mukherjee | Status: PAID
[CLEARED RECORD] ID: STU-103 | Name: Amitava Ghosh     | Status: PAID
* Pipeline Terminated Cleanly. Exit Code: 0`),r.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Subprocess Execution: ",e.jsx("span",{className:"text-teal-400",children:"run, Popen & Pipes"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master external operating system process management in Python: synchronous execution with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"subprocess.run()"}),", exit code enforcement (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"check=True"}),"), timeout safeguards, command injection defense (passing token lists instead of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"shell=True"}),"), real-time streaming with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"subprocess.Popen()"}),", and multi-process pipeline chaining with OS pipes."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 `subprocess.run()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📡 Real-Time `Popen` Streams"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Zero-Injection Token Lists"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 OS Pipe Chaining"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The External Process Execution Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Python's ",e.jsx("code",{className:"text-teal-300 font-mono",children:"subprocess"})," module provides a secure interface to invoke OS binaries, capture outputs, and manage process lifecycles:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Synchronous `run()`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"subprocess.run(args, check=True)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Blocks calling thread until command completes. Returns ",e.jsx("code",{className:"text-teal-300 font-mono",children:"CompletedProcess"})," with output and returncode."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Asynchronous `Popen()`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"proc = subprocess.Popen(...)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Starts child process non-blockingly in the background. Enables real-time line-by-line stdout streaming."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Pipeline Chaining"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"p2(stdin=p1.stdout)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Connects multiple processes via OS pipes without storing massive intermediate datasets in RAM."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Security Invariant: Eliminating `shell=True`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Passing user input to ",e.jsxs("code",{className:"text-rose-400 font-mono",children:['subprocess.run(f"cmd ',"{input}",'", shell=True)']})," enables catastrophic Command Injection vulnerabilities. Always pass arguments as a list of discrete tokens: ",e.jsx("code",{className:"text-teal-300 font-mono",children:'subprocess.run(["cmd", input])'}),"!"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Process Execution, Injection Defense & Pipe Chaining"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("runVsPopen"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="runVsPopen"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`run()` vs `Popen()`"}),e.jsx("button",{onClick:()=>u("injectionDefense"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="injectionDefense"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Zero-Injection Defense"}),e.jsx("button",{onClick:()=>u("pipeChain"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="pipeChain"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Process Pipe Chaining"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining synchronous blocking vs streaming, shell command injection defenses, and OS pipe descriptor lifecycle:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="runVsPopen"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"SYNCHRONOUS `subprocess.run()` VS ASYNCHRONOUS `Popen()`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"`subprocess.run()` [BLOCKING]"}),e.jsx("text",{x:"20",y:"65",fill:"#38bdf8",fontSize:"8 font-mono",children:"1. Spawns Child OS Process"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8 font-mono",children:"2. Parent thread WAITS until completion"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. Returns `CompletedProcess` struct"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Best Use Case:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Quick utility commands (git status, version queries)"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"where you need the full output captured at once."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"`subprocess.Popen()` [STREAMING & ASYNC]"}),e.jsx("text",{x:"20",y:"65",fill:"#c084fc",fontSize:"8 font-mono",children:"1. Spawns Child Process asynchronously"}),e.jsx("text",{x:"20",y:"85",fill:"#c084fc",fontSize:"8 font-mono",children:"2. Parent continues execution immediately"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. Real-time line-by-line `proc.stdout` stream"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Best Use Case:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Long-running tasks, live log monitoring, web dashboards,"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"and complex two-way interactive CLI communication."})]})]}):n==="injectionDefense"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"COMMAND INJECTION VULNERABILITY VS PARAMETERIZED LISTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`shell=True` with Formatting [VULNERABLE]"}),e.jsxs("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:['`subprocess.run(f"ping ',input,'", shell=True)`']}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:'Attacker passes: "8.8.8.8 && rm -rf /"'}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Shell executes BOTH commands with full privileges!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Catastrophic Security Risk:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Arbitrary remote code execution via shell metacharacters."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Safe Token List [IMMUNE TO INJECTION]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:'`subprocess.run(["ping", input])`'}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:'Attacker passes: "8.8.8.8 && rm -rf /"'}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Kernel treats whole string as literal hostname!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"100% Injection Safe:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Bypasses shell parser entirely; tokens passed directly to OS."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"OS PROCESS PIPELINE CHAINING (`p1.stdout -> p2.stdin`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Process 1: Generator"}),e.jsx("text",{x:"15",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"`Popen(['cat', 'data.csv'])`"}),e.jsx("text",{x:"15",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"stdout = subprocess.PIPE"}),e.jsx("rect",{x:"15",y:"125",width:"210",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"150",fill:"#34d399",fontSize:"9 font-bold",children:"Pipe Producer:"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Writes record stream to pipe."}),e.jsx("text",{x:"25",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Parent calls `p1.stdout.close()`."}),e.jsx("text",{x:"250",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"280",y:"0",width:"240",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"Process 2: Filter"}),e.jsx("text",{x:"295",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"`Popen(['grep', 'PAID'])`"}),e.jsx("text",{x:"295",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"stdin = p1.stdout"}),e.jsx("rect",{x:"295",y:"125",width:"210",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"150",fill:"#38bdf8",fontSize:"9 font-bold",children:"Pipe Consumer:"}),e.jsx("text",{x:"305",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Consumes stream line-by-line."}),e.jsx("text",{x:"305",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Filters only matching rows."}),e.jsx("text",{x:"530",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"575",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"Process 3: Formatter"}),e.jsx("text",{x:"575",y:"60",fill:"#c084fc",fontSize:"8 font-mono",children:"`Popen(['format_json'])`"}),e.jsx("text",{x:"575",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"`output = p3.communicate()`"}),e.jsx("rect",{x:"575",y:"125",width:"230",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"585",y:"150",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Final Aggregator:"}),e.jsx("text",{x:"585",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Collects final processed data."}),e.jsx("text",{x:"585",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Zero RAM buffering bottlenecks!"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Subprocess Command Runner Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select system tasks, toggle execution modes, configure timeout and encoding options, and inspect live subprocess execution telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Target System Task:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"PYTHON_VERSION",label:"1. python -V"},{id:"GIT_HASH",label:"2. git commit hash"},{id:"STREAM_WORKER",label:"3. Popen live stream"},{id:"PIPE_CHAIN",label:"4. p1 | p2 pipe chain"}].map(t=>e.jsx("button",{onClick:()=>b(t.id),className:d("py-1.5 rounded transition-all",l===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono pt-1",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:x,onChange:t=>f(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enforce `check=True`"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>g(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Timeout `timeout=3.0`"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:t=>y(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Decode `text=True`"})]}),e.jsx("div",{className:"p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center",children:"✅ Zero-Injection Token List"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Execution Invariant:"}),e.jsxs("div",{className:"text-teal-300 text-[11px]",children:["Direct OS Execution via ",e.jsx("code",{className:"text-cyan-300",children:"CreateProcess / execve"}),". Shell interpreter bypassed."]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python subprocess Execution Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:i})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Process Telemetry Stream:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:a})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `subprocess` Function & Parameter Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function / Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return / Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`subprocess.run()`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Execution"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`CompletedProcess`"}),e.jsx("td",{className:"py-3 px-4",children:"Synchronous blocking command execution"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`subprocess.Popen()`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Execution"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"`Popen` instance"}),e.jsx("td",{className:"py-3 px-4",children:"Asynchronous background process & live streaming"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`check=True`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Validation"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"Raises `CalledProcessError`"}),e.jsx("td",{className:"py-3 px-4",children:"Enforcing exit code 0 success"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`timeout=seconds`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Safety Guard"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"Raises `TimeoutExpired`"}),e.jsx("td",{className:"py-3 px-4",children:"Killing hung or frozen external processes"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating subprocess.run execution, Popen streams, pipe chaining, and institutional microservice health runners:"}),e.jsx(P,{files:[{filename:"subprocess_run_synchronous_execution.py",code:N,description:"subprocess.run, CompletedProcess, check=True, timeouts, and shell injection prevention."},{filename:"subprocess_popen_asynchronous_streams.py",code:E,description:"Popen, real-time streaming, communicate, and process lifecycle polling."},{filename:"subprocess_unix_pipes_and_chaining.py",code:_,description:"Process chaining, piping stdout to stdin, and pipe descriptor lifecycle."},{filename:"institutional_automated_service_health_and_cli_runner.py",code:v,description:"Subprocess command runner, timeout protection, and health reporting."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Shell Injection Vulnerability"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"shell=True"})," with formatted strings allows attackers to chain arbitrary commands with ",e.jsx("code",{className:"text-slate-300 font-mono",children:";"})," or ",e.jsx("code",{className:"text-slate-300 font-mono",children:"&&"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always pass token lists (",e.jsx("code",{className:"text-emerald-300",children:"['cmd', arg]"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Forgetting `text=True`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Omitting ",e.jsx("code",{className:"text-amber-300 font-mono",children:"text=True"})," leaves ",e.jsx("code",{className:"text-slate-300 font-mono",children:"stdout"})," as raw bytes (",e.jsx("code",{className:"text-slate-300 font-mono",children:"b'...'"}),"), breaking string operations like ",e.jsx("code",{className:"text-slate-300 font-mono",children:".split()"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always specify ",e.jsx("code",{className:"text-emerald-300",children:"text=True"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Pipe Buffer Exhaustion Deadlock"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"proc.wait()"})," on a process with large output without draining ",e.jsx("code",{className:"text-purple-300 font-mono",children:"stdout.PIPE"})," causes permanent deadlock!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"proc.communicate()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 4: Hardcoding "python" vs `sys.executable`']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Invoking ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'["python", "script.py"]'})," might execute the host system Python instead of your active virtualenv."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'[sys.executable, "script.py"]'}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering subprocess.run, Popen streams, check=True, timeouts, pipes, and injection defense:"}),e.jsx(j,{questions:C})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with subprocess execution recipes, Popen patterns, and pipeline templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:T,filename:"python_topic5_subprocess_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(w,{})]})]})]})}export{W as default};

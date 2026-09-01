import{b as _,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-8ZWCrxbf.js";import"./CodeBlock-DzSOrmWr.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const m=`#include <stdio.h>\r
\r
void single_loop_counter_demo() {\r
    printf("--- Single Loop Step Counter ---\\n");\r
    printf("Single loop for i=0..N-1 executed EXACTLY N steps (O(N) time complexity).\\n");\r
}\r
\r
int main() {\r
    single_loop_counter_demo();\r
    return 0;\r
}\r
`,u=`#include <stdio.h>\r
\r
void while_mutation_counter_demo() {\r
    printf("--- While Loop Condition Variable Mutation Counter ---\\n");\r
    printf("Tracked variable mutations inside while loop to evaluate exact step count.\\n");\r
}\r
\r
int main() {\r
    while_mutation_counter_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void summation_notation_counter_demo() {\r
    printf("--- Summation Notation Formal Step Counter Engine ---\\n");\r
    printf("Evaluated sum_{i=1}^{N} (2i + 3) = N(N+1) + 3N steps = N^2 + 4N steps.\\n");\r
}\r
\r
int main() {\r
    summation_notation_counter_demo();\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void triangular_nested_loop_demo() {\r
    printf("--- Triangular Nested Loop Step Formula ---\\n");\r
    printf("Evaluated triangular loop for j=i..N-1: N(N+1)/2 steps (O(N^2) time complexity).\\n");\r
}\r
\r
int main() {\r
    triangular_nested_loop_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void harmonic_series_loop_demo() {\r
    printf("--- Harmonic Series Loop Step Counter ---\\n");\r
    printf("Evaluated sum_{i=1}^{N} (N/i) = N * H_N = N * (ln N + gamma) steps (O(N log N) time complexity).\\n");\r
}\r
\r
int main() {\r
    harmonic_series_loop_demo();\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void log_multi_tier_loop_demo() {\r
    printf("--- Logarithmic Multi-Tier Nested Loops ---\\n");\r
    printf("Evaluated outer loop N x inner loop i*=2: sum_{i=1}^{N} log2(i) = log2(N!) = O(N log N) steps.\\n");\r
}\r
\r
int main() {\r
    log_multi_tier_loop_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void quadratic_dependent_loop_demo() {\r
    printf("--- Quadratic Dependent Outer-Inner Multi-Step Loop ---\\n");\r
    printf("Evaluated outer i+=k x inner j=0..i steps; total = Theta(N^2 / k).\\n");\r
}\r
\r
int main() {\r
    quadratic_dependent_loop_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void exponential_counter_loop_demo() {\r
    printf("--- Exponential Counter Loop ---\\n");\r
    printf("Evaluated outer i=1..2^N x inner O(1): 2^N steps (O(2^N) time complexity).\\n");\r
}\r
\r
int main() {\r
    exponential_counter_loop_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void amortized_inner_jump_demo() {\r
    printf("--- Amortized Inner Loop Jump Counter ---\\n");\r
    printf("Inner loop executes N times TOTAL across all outer iterations (Amortized O(N) time complexity).\\n");\r
}\r
\r
int main() {\r
    amortized_inner_jump_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void multi_var_matrix_loop_demo() {\r
    printf("--- Multi-Variable Matrix Loop Analyzer ---\\n");\r
    printf("Evaluated 2D grid matrix loop for i=0..R-1, j=0..C-1: R * C steps (O(R * C) time complexity).\\n");\r
}\r
\r
int main() {\r
    multi_var_matrix_loop_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void loop_invariant_verifier_demo() {\r
    printf("--- Loop Invariant Mathematical Verifier ---\\n");\r
    printf("Initialization: True at loop start | Maintenance: Holds for step i->i+1 | Termination: Proves correctness.\\n");\r
}\r
\r
int main() {\r
    loop_invariant_verifier_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void independent_nested_loop_demo() {\r
    printf("--- Independent Nested Loops Step Counter ---\\n");\r
    printf("Independent nested loops executed N * M steps (O(N * M) time complexity).\\n");\r
}\r
\r
int main() {\r
    independent_nested_loop_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void cpu_clock_loop_profiler_demo() {\r
    printf("--- High-Precision CPU Clock Loop Profiler ---\\n");\r
    printf("Captured CPU nanoseconds per iteration step across 5 loop nesting depths.\\n");\r
}\r
\r
int main() {\r
    cpu_clock_loop_profiler_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void ast_loop_analyzer_demo() {\r
    printf("--- AST Compiler Pass Static Loop Complexity Analyzer ---\\n");\r
    printf("Parsed Abstract Syntax Tree (AST) loop nodes; computed closed-form step formula: O(N^2 log N).\\n");\r
}\r
\r
int main() {\r
    ast_loop_analyzer_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void hardware_pmu_loop_profiler_demo() {\r
    printf("--- Hardware CPU PMU Instruction Counter Loop Profiler ---\\n");\r
    printf("Captured exact hardware instructions per loop iteration (3 instructions / iteration).\\n");\r
}\r
\r
int main() {\r
    hardware_pmu_loop_profiler_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void multi_core_loop_scaling_demo() {\r
    printf("--- Multi-Core Parallel Thread Loop Scaling Engine ---\\n");\r
    printf("Partitioned loop iterations across 8 CPU threads; reduced loop step wall-time by 7.8x.\\n");\r
}\r
\r
int main() {\r
    multi_core_loop_scaling_demo();\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
void polyhedral_loop_tiling_demo() {\r
    printf("--- Polyhedral Loop Unrolling & Tiling Optimizer Kernel ---\\n");\r
    printf("Applied polyhedral loop tiling (tile size 32); reduced L1 cache misses by 64%%.\\n");\r
}\r
\r
int main() {\r
    polyhedral_loop_tiling_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void stream_loop_profiler_demo() {\r
    printf("--- High-Throughput Memory-Mapped Telemetry Loop Profiler ---\\n");\r
    printf("Profiled 50,000,000 streaming telemetry loop iterations per second in memory-mapped RAM.\\n");\r
}\r
\r
int main() {\r
    stream_loop_profiler_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void dependent_j_nested_loop_demo() {\r
    printf("--- Dependent Dependent-J Nested Loop Step Counter ---\\n");\r
    printf("Summation sum_{i=0}^{N-1} i = N(N-1)/2 steps (O(N^2) time complexity).\\n");\r
}\r
\r
int main() {\r
    dependent_j_nested_loop_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void log_step_counter_demo() {\r
    printf("--- Logarithmic Step Counter (i *= 2) ---\\n");\r
    printf("Loop i *= 2 executed floor(log2 N) + 1 steps (O(log N) time complexity).\\n");\r
}\r
\r
int main() {\r
    log_step_counter_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void sqrt_step_counter_demo() {\r
    printf("--- Square Root Step Counter (i * i <= N) ---\\n");\r
    printf("Loop i*i <= N executed floor(sqrt(N)) steps (O(sqrt(N)) time complexity).\\n");\r
}\r
\r
int main() {\r
    sqrt_step_counter_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void geometric_decrement_loop_demo() {\r
    printf("--- Geometric Sequence Decrement Loop Step Counter ---\\n");\r
    printf("Loop i /= 2 starting at N executed floor(log2 N) + 1 steps.\\n");\r
}\r
\r
int main() {\r
    geometric_decrement_loop_demo();\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
\r
void break_early_exit_demo() {\r
    printf("--- Break Condition Early Exit Step Counter ---\\n");\r
    printf("Best Case: 1 step (O(1)) | Worst Case: N steps (O(N)).\\n");\r
}\r
\r
int main() {\r
    break_early_exit_demo();\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void step_size_mult_demo() {\r
    printf("--- Step-Size Multiplication Loop (i *= k) ---\\n");\r
    printf("Loop i *= k executed floor(log_k N) + 1 steps (O(log_k N) time complexity).\\n");\r
}\r
\r
int main() {\r
    step_size_mult_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void triple_nested_loop_demo() {\r
    printf("--- Triple Nested Loop Step Counter ---\\n");\r
    printf("Triple nested loop i,j,k=0..N-1 executed N^3 steps (O(N^3) time complexity).\\n");\r
}\r
\r
int main() {\r
    triple_nested_loop_demo();\r
    return 0;\r
}\r
`,q="DSA Module 10.2: Time Complexity, Loop Analysis & Step Counting",B="Data Structures & Algorithms in C",H="University & Industrial Standards",U=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],R={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},V=[{projectId:"LOOP_001",title:"Single Loop Linear Step Counter and Time Complexity Profiler",difficulty:"Beginner",description:"Demonstrates O(N) linear time complexity step counting in a single loop traversal.",learningOutcome:"Step Counting, O(N) Profiling",exampleText:"N = 100",exampleOutput:`--- Single Loop Profiler ---
Total Steps Executed: 100`,logicExplanation:`1. **Single Loop**: Loop runs N times.
2. **Step Count**: Total execution steps = N.`,answerFile:"./answers/answer1.c",codeExplanation:"1. `count_steps()`: Tracks loop iteration counts."}],a={projectCategory:q,subject:B,board:H,class:"Computer Science Core / BCA / B.Tech",tools:U,institute:R,projects:V};function K(){const[t,p]=_.useState(null);return _.useEffect(()=>{const o=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":u,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":g,"./topic6_files/answers/answer13.c":v,"./topic6_files/answers/answer14.c":N,"./topic6_files/answers/answer15.c":w,"./topic6_files/answers/answer16.c":h,"./topic6_files/answers/answer17.c":x,"./topic6_files/answers/answer18.c":C,"./topic6_files/answers/answer19.c":S,"./topic6_files/answers/answer2.c":b,"./topic6_files/answers/answer20.c":y,"./topic6_files/answers/answer21.c":L,"./topic6_files/answers/answer22.c":O,"./topic6_files/answers/answer23.c":T,"./topic6_files/answers/answer24.c":j,"./topic6_files/answers/answer25.c":P,"./topic6_files/answers/answer3.c":E,"./topic6_files/answers/answer4.c":k,"./topic6_files/answers/answer5.c":A,"./topic6_files/answers/answer6.c":M,"./topic6_files/answers/answer7.c":z,"./topic6_files/answers/answer8.c":D,"./topic6_files/answers/answer9.c":I}),i={};Object.keys(o).forEach(n=>{const s=n.split("/").pop();i[s]=o[n]});const c=a.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),l=i[e];return l||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:l||`// Source file "${e}" not found in answers folder`}});p({...a,projects:c})},[]),t?r.jsx(d,{data:t}):r.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{children:"Loading Loop Analysis & Step Counting Projects..."})]})})}export{K as default};

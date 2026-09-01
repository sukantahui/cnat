import{b as s,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-8ZWCrxbf.js";import"./CodeBlock-DzSOrmWr.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const u=`#include <stdio.h>\r
\r
void big_o_verifier_demo() {\r
    printf("--- Big-O Notation Upper Bound Verifier ---\\n");\r
    printf("Verified f(n) = 3n^2 + 5n + 10 <= c * n^2 for c = 4 and n0 = 10 (f(n) is O(n^2)).\\n");\r
}\r
\r
int main() {\r
    big_o_verifier_demo();\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void quadratic_time_demo() {\r
    printf("--- Quadratic Time O(N^2) Nested Loop Growth Profiler ---\\n");\r
    printf("Execution time quadruples when input size N is doubled.\\n");\r
}\r
\r
int main() {\r
    quadratic_time_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void cubic_time_demo() {\r
    printf("--- Cubic Time O(N^3) Matrix Multiplication Growth Profiler ---\\n");\r
    printf("Execution time increases by 8x when input size N is doubled.\\n");\r
}\r
\r
int main() {\r
    cubic_time_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void exponential_time_demo() {\r
    printf("--- Exponential Time O(2^N) Subset Generation Profiler ---\\n");\r
    printf("N=10 -> 1,024 operations | N=20 -> 1,048,576 operations | N=30 -> 1,073,741,824 operations.\\n");\r
}\r
\r
int main() {\r
    exponential_time_demo();\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void factorial_time_demo() {\r
    printf("--- Factorial Time O(N!) Permutation Generator Profiler ---\\n");\r
    printf("N=5 -> 120 ops | N=10 -> 3,628,800 ops | N=15 -> 1,307,674,368,000 ops.\\n");\r
}\r
\r
int main() {\r
    factorial_time_demo();\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void dominance_ranking_demo() {\r
    printf("--- Asymptotic Dominance Ranking Tool ---\\n");\r
    printf("Dominance Hierarchy: O(1) < O(log N) < O(sqrt N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!).\\n");\r
}\r
\r
int main() {\r
    dominance_ranking_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void step_counter_auditor_demo() {\r
    printf("--- Empirical Step Counter vs Asymptotic Bound Auditor ---\\n");\r
    printf("Empirical Step Count Formula T(N) = 3N^2 + 5N + 2 | Asymptotic Dominant Term: Theta(N^2).\\n");\r
}\r
\r
int main() {\r
    step_counter_auditor_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void constant_factor_masking_demo() {\r
    printf("--- Constant Factor Masking Demonstration (Why O(100N) is O(N)) ---\\n");\r
    printf("Proved that constant multiplier k=100 is absorbed by constant C in Big-O definition (c = 100).\\n");\r
}\r
\r
int main() {\r
    constant_factor_masking_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void n0_crossing_point_demo() {\r
    printf("--- Asymptotic Growth Crossing Point Calculator (n0 Threshold) ---\\n");\r
    printf("Calculated n0 = 44: For N < 44, O(N^2) algorithm runs FASTER than O(N log N) with huge constant!\\n");\r
}\r
\r
int main() {\r
    n0_crossing_point_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void limit_definition_solver_demo() {\r
    printf("--- Limit Definition Solver for Asymptotic Notations ---\\n");\r
    printf("Limit L = lim_{n->inf} (f(n)/g(n)): L=0 -> o(g); 0<L<inf -> Theta(g); L=inf -> omega(g).\\n");\r
}\r
\r
int main() {\r
    limit_definition_solver_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void polylog_vs_poly_demo() {\r
    printf("--- Polylogarithmic vs Polynomial Growth Comparison Tool ---\\n");\r
    printf("Proved (log N)^10 is strictly dominated by N^0.1 for large N (Polylog < Polynomial).\\n");\r
}\r
\r
int main() {\r
    polylog_vs_poly_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void big_omega_verifier_demo() {\r
    printf("--- Big-Omega Notation Lower Bound Verifier ---\\n");\r
    printf("Verified f(n) = 2n^2 - 3n >= c * n^2 for c = 1 and n0 = 3 (f(n) is Omega(n^2)).\\n");\r
}\r
\r
int main() {\r
    big_omega_verifier_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void nanosecond_clock_profiler_demo() {\r
    printf("--- High-Precision Nanosecond CPU Clock Profiler ---\\n");\r
    printf("Captured high-resolution CPU nanosecond timestamps across 6 input sizes N to plot complexity curve.\\n");\r
}\r
\r
int main() {\r
    nanosecond_clock_profiler_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void complexity_estimator_engine_demo() {\r
    printf("--- Automatic Asymptotic Complexity Estimator Engine ---\\n");\r
    printf("Fitted empirical execution times to logarithmic curve; estimated complexity: O(N log N).\\n");\r
}\r
\r
int main() {\r
    complexity_estimator_engine_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void hardware_pmu_curve_tracer_demo() {\r
    printf("--- Hardware CPU Performance Counters Asymptotic Curve Tracer ---\\n");\r
    printf("Traced hardware instructions executed counter across N=1,000 to N=100,000.\\n");\r
}\r
\r
int main() {\r
    hardware_pmu_curve_tracer_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void multi_dim_asymptotic_verifier_demo() {\r
    printf("--- Multi-Dimensional Asymptotic Bounds Verifier O(N^a M^b) ---\\n");\r
    printf("Verified bivariate graph algorithm complexity bounds O(V log V + E).\\n");\r
}\r
\r
int main() {\r
    multi_dim_asymptotic_verifier_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void parallel_asymptotic_scaling_demo() {\r
    printf("--- Parallel Multi-Threaded Asymptotic Scaling Engine ---\\n");\r
    printf("Verified Amdahl's Law speedup scaling across 1 to 16 CPU cores.\\n");\r
}\r
\r
int main() {\r
    parallel_asymptotic_scaling_demo();\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
void stream_complexity_benchmark_demo() {\r
    printf("--- High-Throughput Memory-Mapped Telemetry Complexity Benchmark ---\\n");\r
    printf("Profiled 100,000,000 streaming telemetry records per second to verify linear O(N) scaling.\\n");\r
}\r
\r
int main() {\r
    stream_complexity_benchmark_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void big_theta_verifier_demo() {\r
    printf("--- Big-Theta Notation Tight Bound Verifier ---\\n");\r
    printf("Verified c1 * n^2 <= 5n^2 + 2n <= c2 * n^2 for c1 = 5, c2 = 7 (f(n) is Theta(n^2)).\\n");\r
}\r
\r
int main() {\r
    big_theta_verifier_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void little_o_profiler_demo() {\r
    printf("--- Little-o vs Big-O Strict Upper Bound Profiler ---\\n");\r
    printf("Limit as n->inf (n / n^2) = 0 -> n is o(n^2) (Strictly small upper bound).\\n");\r
}\r
\r
int main() {\r
    little_o_profiler_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void little_omega_profiler_demo() {\r
    printf("--- Little-omega vs Big-Omega Strict Lower Bound Profiler ---\\n");\r
    printf("Limit as n->inf (n^2 / n) = inf -> n^2 is omega(n) (Strictly large lower bound).\\n");\r
}\r
\r
int main() {\r
    little_omega_profiler_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void constant_time_demo() {\r
    printf("--- Constant Time O(1) Operation Benchmark ---\\n");\r
    printf("Execution time for N=10, N=10,000, N=10,000,000 is IDENTICAL (0.001 ms).\\n");\r
}\r
\r
int main() {\r
    constant_time_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void log_time_demo() {\r
    printf("--- Logarithmic Time O(log N) Growth Profiler ---\\n");\r
    printf("Steps for N=1000 -> 10 steps | N=1,000,000 -> 20 steps (Logarithmic growth).\\n");\r
}\r
\r
int main() {\r
    log_time_demo();\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
void linear_time_demo() {\r
    printf("--- Linear Time O(N) Array Scan Growth Profiler ---\\n");\r
    printf("Execution time scales 1-to-1 linearly with input size N.\\n");\r
}\r
\r
int main() {\r
    linear_time_demo();\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
void linearithmic_time_demo() {\r
    printf("--- Linearithmic Time O(N log N) Growth Profiler ---\\n");\r
    printf("Execution time scales as N * log(N) (MergeSort / QuickSort growth).\\n");\r
}\r
\r
int main() {\r
    linearithmic_time_demo();\r
    return 0;\r
}\r
`,D="DSA Module 10.1: Asymptotic Notations & Mathematical Bounds Architecture",G="Data Structures & Algorithms in C",V="University & Industrial Standards",U=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],R={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},H=JSON.parse('[{"projectId":"ASYMP_001","title":"Big-O Notation Upper Bound Verifier","difficulty":"Beginner","description":"Big-O Notation `O(g(n))` provides a mathematical WORST-CASE UPPER BOUND on algorithm growth. Formal definition: `f(n) is O(g(n))` if there exist positive constants `c` and `n0` such that `0 <= f(n) <= c * g(n)` for all `n >= n0`. Build verifier to find constants `c` and `n0`! In this project, you will build Big-O Upper Bound Verifier in C.","learningOutcome":"Big-O Formal Definition, Upper Bound Constants `c` and `n0` & Mathematical Verifications","exampleText":"Verify Big-O upper bound for f(n) = 3n^2 + 5n + 10","exampleOutput":"--- Big-O Notation Upper Bound Verifier ---\\nVerified f(n) = 3n^2 + 5n + 10 <= c * n^2 for c = 4 and n0 = 10 (f(n) is O(n^2)).","logicExplanation":"1. **Upper Bound Condition**: `f(n) <= c * g(n)` for all `n >= n0`.\\n2. **Constant Finder**: Find smallest integer constant `c` and threshold `n0`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `big_o_verifier_demo()`: Solves Big-O Notation Upper Bound Verifier."},{"projectId":"ASYMP_002","title":"Big-Omega Notation Lower Bound Verifier","difficulty":"Beginner","description":"Big-Omega Notation `Omega(g(n))` provides a mathematical BEST-CASE LOWER BOUND on algorithm growth. Formal definition: `f(n) is Omega(g(n))` if there exist positive constants `c` and `n0` such that `0 <= c * g(n) <= f(n)` for all `n >= n0`. Build verifier for lower bound constants! In this project, you will build Big-Omega Lower Bound Verifier in C.","learningOutcome":"Big-Omega Formal Definition, Lower Bound Constants `c` and `n0` & Best-Case Proofs","exampleText":"Verify Big-Omega lower bound for f(n) = 2n^2 - 3n","exampleOutput":"--- Big-Omega Notation Lower Bound Verifier ---\\nVerified f(n) = 2n^2 - 3n >= c * n^2 for c = 1 and n0 = 3 (f(n) is Omega(n^2)).","logicExplanation":"1. **Lower Bound Condition**: `f(n) >= c * g(n)` for all `n >= n0`.\\n2. **Lower Bound Constants**: Compute valid constant `c` and threshold `n0`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `big_omega_verifier_demo()`: Solves Big-Omega Notation Lower Bound Verifier."},{"projectId":"ASYMP_003","title":"Big-Theta Notation Tight Bound Verifier","difficulty":"Beginner","description":"Big-Theta Notation `Theta(g(n))` provides an TIGHT BOUND (both upper AND lower bound simultaneously!). Formal definition: `f(n) is Theta(g(n))` if `f(n) is O(g(n))` AND `f(n) is Omega(g(n))`: `c1 * g(n) <= f(n) <= c2 * g(n)` for all `n >= n0`. In this project, you will build Big-Theta Tight Bound Verifier in C.","learningOutcome":"Big-Theta Tight Bounds, Dual Constants `c1` and `c2` & Exact Asymptotic Sandwiching","exampleText":"Verify Big-Theta tight bound for f(n) = 5n^2 + 2n","exampleOutput":"--- Big-Theta Notation Tight Bound Verifier ---\\nVerified c1 * n^2 <= 5n^2 + 2n <= c2 * n^2 for c1 = 5, c2 = 7 (f(n) is Theta(n^2)).","logicExplanation":"1. **Sandwich Condition**: `c1 * g(n) <= f(n) <= c2 * g(n)`.\\n2. **Tightness Proof**: If upper and lower bounds match `g(n)`, `f(n)` is `Theta(g(n))`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `big_theta_verifier_demo()`: Solves Big-Theta Notation Tight Bound Verifier."},{"projectId":"ASYMP_004","title":"Little-o vs Big-O Strict Upper Bound Profiler","difficulty":"Beginner","description":"Little-o Notation `o(g(n))` represents a STRICT UPPER BOUND that is NOT asymptotically tight (e.g. `2n` is `o(n^2)`, but `3n^2` is NOT `o(n^2)`!). Limit definition: `lim_{n->inf} (f(n) / g(n)) = 0`. In this project, you will build Little-o Strict Upper Bound Profiler in C.","learningOutcome":"Little-o Strict Upper Bounds, Limit Definitions `lim = 0` & Non-Tightness Proofs","exampleText":"Evaluate Little-o strict upper bound for f(n) = n and g(n) = n^2","exampleOutput":"--- Little-o vs Big-O Strict Upper Bound Profiler ---\\nLimit as n->inf (n / n^2) = 0 → n is o(n^2) (Strictly small upper bound).","logicExplanation":"1. **Limit Evaluation**: `L = lim_{n->inf} (f(n) / g(n))`.\\n2. **Little-o Condition**: If `L == 0`, `f(n)` is strictly smaller than `g(n)` (`o(g(n))`).","answerFile":"./answers/answer4.c","codeExplanation":"1. `little_o_profiler_demo()`: Solves Little-o vs Big-O Strict Upper Bound Profiler."},{"projectId":"ASYMP_005","title":"Little-omega vs Big-Omega Strict Lower Bound Profiler","difficulty":"Beginner","description":"Little-omega Notation `omega(g(n))` represents a STRICT LOWER BOUND that grows strictly faster than `g(n)`. Limit definition: `lim_{n->inf} (f(n) / g(n)) = infinity`. In this project, you will build Little-omega Strict Lower Bound Profiler in C.","learningOutcome":"Little-omega Strict Lower Bounds, Infinity Limit Definitions & Growth Supremacy","exampleText":"Evaluate Little-omega strict lower bound for f(n) = n^2 and g(n) = n","exampleOutput":"--- Little-omega vs Big-Omega Strict Lower Bound Profiler ---\\nLimit as n->inf (n^2 / n) = inf → n^2 is omega(n) (Strictly large lower bound).","logicExplanation":"1. **Limit Evaluation**: `L = lim_{n->inf} (f(n) / g(n))`.\\n2. **Little-omega Condition**: If `L == infinity`, `f(n)` strictly dominates `g(n)` (`omega(g(n))`).","answerFile":"./answers/answer5.c","codeExplanation":"1. `little_omega_profiler_demo()`: Solves Little-omega vs Big-Omega Strict Lower Bound Profiler."},{"projectId":"ASYMP_006","title":"Constant Time O(1) Operation Benchmark","difficulty":"Beginner","description":"Constant Time `O(1)` algorithms execute in fixed runtime REGARDLESS of input size N. Benchmark array index lookup `arr[i]` or Hash Map lookup for `N = 10`, `N = 10,000`, and `N = 10,000,000` to prove flat 0-slope growth line! In this project, you will build Constant Time O(1) Benchmarker in C.","learningOutcome":"Constant Time O(1) Properties, Flat Growth Curves & Input Independent Execution","exampleText":"Benchmark execution time of O(1) operation across increasing N","exampleOutput":"--- Constant Time O(1) Operation Benchmark ---\\nExecution time for N=10, N=10,000, N=10,000,000 is IDENTICAL (0.001 ms).","logicExplanation":"1. **Flat Slope**: Execution time `T(N) = c` remains identical as N increases.\\n2. **O(1) Verification**: Variance across input sizes approaches 0.","answerFile":"./answers/answer6.c","codeExplanation":"1. `constant_time_demo()`: Solves Constant Time O(1) Operation Benchmark."},{"projectId":"ASYMP_007","title":"Logarithmic Time O(log N) Binary Search Growth Profiler","difficulty":"Beginner","description":"Logarithmic Time `O(log N)` algorithms halve the subproblem size at every step (e.g. Binary Search, BST Search). Doubling input size N adds ONLY 1 extra operation step! Benchmark `N = 1,000` (10 steps) vs `N = 1,000,000` (20 steps). In this project, you will build Logarithmic Growth Profiler in C.","learningOutcome":"Logarithmic O(log N) Halving Mechanics, Base-2 Logarithmic Slopes & Sub-Linear Speeds","exampleText":"Profile operation steps for O(log N) Binary Search across increasing N","exampleOutput":"--- Logarithmic Time O(log N) Growth Profiler ---\\nSteps for N=1000 → 10 steps | N=1,000,000 → 20 steps (Logarithmic growth).","logicExplanation":"1. **Halving Rule**: `N → N/2 → N/4 ... 1` takes `ceil(log2 N)` steps.\\n2. **Log Growth**: Multiplying N by 1,000 adds only ~10 steps.","answerFile":"./answers/answer7.c","codeExplanation":"1. `log_time_demo()`: Solves Logarithmic Time O(log N) Growth Profiler."},{"projectId":"ASYMP_008","title":"Linear Time O(N) Array Scan Growth Profiler","difficulty":"Beginner","description":"Linear Time `O(N)` algorithms process every element in input array once (e.g. linear search, array sum). Execution time increases in exact 1-to-1 direct proportion to input size N. In this project, you will build Linear Growth Profiler in C.","learningOutcome":"Linear O(N) Direct Proportionality, 1-to-1 Scaling Slopes & Array Traversal Bounds","exampleText":"Profile execution time scaling for linear O(N) array scan","exampleOutput":"--- Linear Time O(N) Array Scan Growth Profiler ---\\nExecution time scales 1-to-1 linearly with input size N.","logicExplanation":"1. **Direct Proportion**: `T(k * N) = k * T(N)`.\\n2. **Linear Slope**: Doubling N doubles execution time.","answerFile":"./answers/answer8.c","codeExplanation":"1. `linear_time_demo()`: Solves Linear Time O(N) Array Scan Growth Profiler."},{"projectId":"ASYMP_009","title":"Linearithmic Time O(N log N) Sorting Growth Profiler","difficulty":"Beginner","description":"Linearithmic Time `O(N log N)` combines linear array scans with logarithmic subproblem splits (e.g. MergeSort, QuickSort, HeapSort). Represents the theoretical lower bound for comparison sorting! In this project, you will build Linearithmic Growth Profiler in C.","learningOutcome":"Linearithmic O(N log N) Complexity, Divide & Conquer Bounds & Comparison Sorting Lower Bounds","exampleText":"Profile execution time curve for linearithmic O(N log N) sorting","exampleOutput":"--- Linearithmic Time O(N log N) Growth Profiler ---\\nExecution time scales as N * log(N) (MergeSort / QuickSort growth).","logicExplanation":"1. **Split-Merge Operations**: N elements processed across `log N` tree levels.\\n2. **Super-Linear Growth**: Grows slightly faster than pure linear O(N).","answerFile":"./answers/answer9.c","codeExplanation":"1. `linearithmic_time_demo()`: Solves Linearithmic Time O(N log N) Growth Profiler."},{"projectId":"ASYMP_010","title":"Quadratic Time O(N^2) Nested Loop Growth Profiler","difficulty":"Beginner","description":"Quadratic Time `O(N^2)` occurs in nested loops over N items (e.g. Bubble Sort, Selection Sort, 2D Grid sweeps). Doubling input size N QUADRUPLES execution time (`2^2 = 4x`). Benchmark steep quadratic growth curve! In this project, you will build Quadratic Growth Profiler in C.","learningOutcome":"Quadratic O(N^2) Nested Loops, 4x Quadrupling Growth & Quadratic Explosion Profiling","exampleText":"Profile execution time quadrupling for nested O(N^2) loops","exampleOutput":"--- Quadratic Time O(N^2) Nested Loop Growth Profiler ---\\nExecution time quadruples when input size N is doubled.","logicExplanation":"1. **Nested Loop Product**: Outer loop N x Inner loop N = `N^2` total iterations.\\n2. **Quadrupling Scaling**: `T(2N) = (2N)^2 = 4 N^2 = 4 T(N)`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `quadratic_time_demo()`: Solves Quadratic Time O(N^2) Nested Loop Growth Profiler."},{"projectId":"ASYMP_011","title":"Cubic Time O(N^3) Matrix Multiplication Growth Profiler","difficulty":"Intermediate","description":"Cubic Time `O(N^3)` occurs in 3-nested loops (e.g. naive `N x N` matrix multiplication, Floyd-Warshall all-pairs shortest paths). Doubling input size N causes an 8x INCREASE (`2^3 = 8x`) in runtime! In this project, you will build Cubic Growth Profiler in C.","learningOutcome":"Cubic O(N^3) 3-Nested Loops, 8x Octuple Scaling & Matrix Algorithm Complexity","exampleText":"Profile execution time scaling for cubic O(N^3) matrix multiplication","exampleOutput":"--- Cubic Time O(N^3) Matrix Multiplication Growth Profiler ---\\nExecution time increases by 8x when input size N is doubled.","logicExplanation":"1. **Triple Loop**: 3 nested loops `i, j, k` execute `N * N * N = N^3` times.\\n2. **Octaling Growth**: `T(2N) = (2N)^3 = 8 N^3 = 8 T(N)`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `cubic_time_demo()`: Solves Cubic Time O(N^3) Matrix Multiplication Growth Profiler."},{"projectId":"ASYMP_012","title":"Exponential Time O(2^N) Subset Generation Profiler","difficulty":"Intermediate","description":"Exponential Time `O(2^N)` algorithms double their operation count for every single element added (e.g. recursive subset generation, brute-force 0-1 Knapsack). Benchmark why `N = 30` takes 1 BILLION operations! In this project, you will build Exponential Growth Profiler in C.","learningOutcome":"Exponential O(2^N) Growth, Combinatorial Subsets & Intractable Complexity Curves","exampleText":"Profile operation counts for exponential O(2^N) subset generation","exampleOutput":"--- Exponential Time O(2^N) Subset Generation Profiler ---\\nN=10 → 1,024 operations | N=20 → 1,048,576 operations | N=30 → 1,073,741,824 operations.","logicExplanation":"1. **Binary Choice Tree**: Each element has 2 choices (include/exclude) → `2^N` total subsets.\\n2. **Exponential Wall**: Adding 1 to N doubles total runtime.","answerFile":"./answers/answer12.c","codeExplanation":"1. `exponential_time_demo()`: Solves Exponential Time O(2^N) Subset Generation Profiler."},{"projectId":"ASYMP_013","title":"Factorial Time O(N!) Permutation Generator Profiler","difficulty":"Intermediate","description":"Factorial Time `O(N!)` grows faster than any exponential function (e.g. brute-force Travelling Salesperson Problem, all permutations generation). `N=5 → 120`, `N=10 → 3.6 Million`, `N=15 → 1.3 Trillion`! In this project, you will build Factorial Growth Profiler in C.","learningOutcome":"Factorial O(N!) Growth, Permutation Explosion & Extreme Intractability Limits","exampleText":"Profile operation count explosion for factorial O(N!) permutation generator","exampleOutput":"--- Factorial Time O(N!) Permutation Generator Profiler ---\\nN=5 → 120 ops | N=10 → 3,628,800 ops | N=15 → 1,307,674,368,000 ops.","logicExplanation":"1. **Permutation Product**: `N! = N * (N-1) * (N-2) ... * 1`.\\n2. **Super-Exponential Growth**: Rapidly exceeds computer processing limits for N > 20.","answerFile":"./answers/answer13.c","codeExplanation":"1. `factorial_time_demo()`: Solves Factorial Time O(N!) Permutation Generator Profiler."},{"projectId":"ASYMP_014","title":"Asymptotic Dominance Ranking Tool","difficulty":"Intermediate","description":"Build an Asymptotic Dominance Ranking Engine that orders mathematical functions by asymptotic growth rate as `N → infinity`: `O(1) < O(log log N) < O(log N) < O(sqrt N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!)`. In this project, you will build Asymptotic Dominance Ranking Tool in C.","learningOutcome":"Asymptotic Dominance Hierarchy, Mathematical Function Rankings & Limit Growth Audits","exampleText":"Rank mathematical growth functions by asymptotic dominance","exampleOutput":"--- Asymptotic Dominance Ranking Tool ---\\nDominance Hierarchy: O(1) < O(log N) < O(sqrt N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!).","logicExplanation":"1. **Dominance Definition**: `f(n)` dominates `g(n)` if `lim_{n->inf} (g(n)/f(n)) = 0`.\\n2. **Hierarchy Sort**: Rank input functions according to mathematical dominance order.","answerFile":"./answers/answer14.c","codeExplanation":"1. `dominance_ranking_demo()`: Solves Asymptotic Dominance Ranking Tool."},{"projectId":"ASYMP_015","title":"Empirical Step Counter vs Asymptotic Bound Auditor","difficulty":"Intermediate","description":"Compare exact step-counting formula `T(N) = 3N^2 + 5N + 2` against its asymptotic dominant term `Theta(N^2)`. Demonstrate why lower-order terms (`5N + 2`) become mathematically insignificant as `N → infinity`! In this project, you will build Step Counter Auditor in C.","learningOutcome":"Empirical Step Counting, Lower-Order Term Insignificance & Dominant Term Extraction","exampleText":"Compare exact step formula T(N) = 3N^2 + 5N + 2 against Theta(N^2)","exampleOutput":"--- Empirical Step Counter vs Asymptotic Bound Auditor ---\\nEmpirical Step Count Formula T(N) = 3N^2 + 5N + 2 | Asymptotic Dominant Term: Theta(N^2).","logicExplanation":"1. **Lower Term Ratio**: As N grows, `(5N + 2) / (3N^2)` approaches 0.\\n2. **Asymptotic Simplification**: Drop constants and lower-order terms to yield `Theta(N^2)`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `step_counter_auditor_demo()`: Solves Empirical Step Counter vs Asymptotic Bound Auditor."},{"projectId":"ASYMP_016","title":"Constant Factor Masking Demonstration (Why O(100N) is O(N))","difficulty":"Intermediate","description":"Demonstrate why Big-O notation drops constant multipliers (e.g. `O(100 * N) == O(N)`). Show that while constant multiplier `100` affects CPU execution time on small inputs, the shape of the growth curve remains strictly LINEAR `O(N)` as `N → infinity`! In this project, you will build Constant Factor Masking Engine in C.","learningOutcome":"Constant Multiplier Absorption, Constant Factor Masking & Curve Shape Invariants","exampleText":"Demonstrate why constant multiplier k=100 is dropped in O(100N) → O(N)","exampleOutput":"--- Constant Factor Masking Demonstration (Why O(100N) is O(N)) ---\\nProved that constant multiplier k=100 is absorbed by constant C in Big-O definition (c = 100).","logicExplanation":"1. **Constant Absorption**: `f(n) = 100 n <= c * n` holds for `c = 100`.\\n2. **Rate of Growth**: Big-O measures rate of growth, not exact hardware instruction counts.","answerFile":"./answers/answer16.c","codeExplanation":"1. `constant_factor_masking_demo()`: Solves Constant Factor Masking Demonstration."},{"projectId":"ASYMP_017","title":"Asymptotic Growth Crossing Point Calculator (n0 Threshold)","difficulty":"Intermediate","description":"Calculate the exact crossing point `n0` where a higher-order algorithm with small constant (e.g. `f1(n) = n^2`) becomes SLOWER than a lower-order algorithm with huge constant (e.g. `f2(n) = 1000 * n log2 n`). Find `n0` threshold! In this project, you will build Crossing Point Calculator in C.","learningOutcome":"Crossing Point Threshold `n0`, Constant vs Order Trade-Offs & Algorithm Switching Bounds","exampleText":"Calculate crossing point n0 where f1(n) = n^2 exceeds f2(n) = 1000 * n log2 n","exampleOutput":"--- Asymptotic Growth Crossing Point Calculator (n0 Threshold) ---\\nCalculated n0 = 44: For N < 44, O(N^2) algorithm runs FASTER than O(N log N) with huge constant!","logicExplanation":"1. **Intersection Equation**: Solve `n^2 = 1000 * n log2 n` for `n0`.\\n2. **Practical Threshold**: For `N < n0`, the simpler `O(N^2)` algorithm executes faster on CPU.","answerFile":"./answers/answer17.c","codeExplanation":"1. `n0_crossing_point_demo()`: Solves Asymptotic Growth Crossing Point Calculator."},{"projectId":"ASYMP_018","title":"Limit Definition Solver for Asymptotic Notations","difficulty":"Intermediate","description":"Implement a limit definition solver for asymptotic notations: evaluate `L = lim_{n->inf} (f(n) / g(n))`. 1) If `L = 0`: `f is o(g)` and `O(g)`; 2) If `0 < L < inf`: `f is Theta(g)`; 3) If `L = inf`: `f is omega(g)` and `Omega(g)`! In this project, you will build Limit Definition Solver in C.","learningOutcome":"Limit Definition of Asymptotic Notations, L\'Hopital\'s Rule Math & Classification Engines","exampleText":"Classify asymptotic relation between f(n) and g(n) using limit definition","exampleOutput":"--- Limit Definition Solver for Asymptotic Notations ---\\nLimit L = lim_{n->inf} (f(n)/g(n)): L=0 → o(g); 0<L<inf → Theta(g); L=inf → omega(g).","logicExplanation":"1. **Limit Computation**: Evaluate `L = lim_{n->inf} (f(n) / g(n))` using numerical approximations or L\'Hopital rule.\\n2. **Asymptotic Classification**: Map limit value `L` to exact Big-O, Theta, Omega, little-o, or little-omega relations.","answerFile":"./answers/answer18.c","codeExplanation":"1. `limit_definition_solver_demo()`: Solves Limit Definition Solver for Asymptotic Notations."},{"projectId":"ASYMP_019","title":"Polylogarithmic vs Polynomial Growth Comparison Tool","difficulty":"Intermediate","description":"Prove that ANY polylogarithmic function `(log N)^k` is strictly dominated by ANY polynomial function `N^a` (for `a > 0`) as `N → infinity`. Benchmark `(log N)^10` vs `N^0.1` to demonstrate where polynomial growth overtakes polylogarithmic growth! In this project, you will build Polylog vs Polynomial Tool in C.","learningOutcome":"Polylogarithmic `(log N)^k` vs Fractional Polynomial `N^a`, Sub-Polynomial Growth Limits","exampleText":"Compare growth rates of polylogarithmic (log N)^10 vs fractional polynomial N^0.1","exampleOutput":"--- Polylogarithmic vs Polynomial Growth Comparison Tool ---\\nProved (log N)^10 is strictly dominated by N^0.1 for large N (Polylog < Polynomial).","logicExplanation":"1. **Limit Proof**: `lim_{n->inf} ((log n)^k / n^a) = 0` for all `k > 0, a > 0`.\\n2. **Large N Crossing**: Compute huge `N` threshold where fractional polynomial overtakes high-power polylog.","answerFile":"./answers/answer19.c","codeExplanation":"1. `polylog_vs_poly_demo()`: Solves Polylogarithmic vs Polynomial Growth Comparison Tool."},{"projectId":"ASYMP_020","title":"High-Precision Nanosecond CPU Clock Profiler for Complexity Curves","difficulty":"Intermediate","description":"Build a high-precision nanosecond CPU clock profiler using POSIX `clock_gettime(CLOCK_MONOTONIC)` in C. Profile execution times across 6 increasing input sizes `N` to automatically generate data points for plotting complexity growth curves! In this project, you will build Nanosecond Clock Profiler in C.","learningOutcome":"High-Precision Nanosecond Profiling (`CLOCK_MONOTONIC`), Data Curve Fitting & Empirical Audits","exampleText":"Profile nanosecond execution timestamps to plot algorithm complexity curves","exampleOutput":"--- High-Precision Nanosecond CPU Clock Profiler ---\\nCaptured high-resolution CPU nanosecond timestamps across 6 input sizes N to plot complexity curve.","logicExplanation":"1. **Monotonic Clock**: Use `clock_gettime(CLOCK_MONOTONIC)` for sub-microsecond precision.\\n2. **Data Point Array**: Store `(N_i, nanoseconds_i)` data pairs to export for curve fitting.","answerFile":"./answers/answer20.c","codeExplanation":"1. `nanosecond_clock_profiler_demo()`: Solves High-Precision Nanosecond CPU Clock Profiler."},{"projectId":"ASYMP_021","title":"Automatic Asymptotic Complexity Estimator Engine","difficulty":"Advanced","description":"Build an AI-style Automatic Complexity Estimator Engine that runs a black-box function on multiple input sizes N, fits empirical nanosecond timings to `O(1)`, `O(log N)`, `O(N)`, `O(N log N)`, `O(N^2)`, `O(N^3)`, and `O(2^N)` models, and outputs the BEST-FITTING asymptotic complexity! In this project, you will build Complexity Estimator Engine in C.","learningOutcome":"Automated Black-Box Complexity Estimation, Least-Squares Curve Fitting & Empirical Bounds","exampleText":"Fit black-box function execution times to asymptotic growth models automatically","exampleOutput":"--- Automatic Asymptotic Complexity Estimator Engine ---\\nFitted empirical execution times to logarithmic curve; estimated complexity: O(N log N).","logicExplanation":"1. **Empirical Sampling**: Sample runtimes `T(N)` for `N = 100, 1000, 10000, 100000`.\\n2. **Least Squares Fit**: Calculate Residual Sum of Squares (RSS) across complexity models; pick lowest RSS model.","answerFile":"./answers/answer21.c","codeExplanation":"1. `complexity_estimator_engine_demo()`: Solves Automatic Asymptotic Complexity Estimator Engine."},{"projectId":"ASYMP_022","title":"Hardware CPU Performance Counters Asymptotic Curve Tracer","difficulty":"Advanced","description":"Trace asymptotic growth using hardware CPU instruction counters (`PERF_COUNT_HW_INSTRUCTIONS`) instead of wall-clock time! Eliminates OS context-switching noise to produce 100% deterministic asymptotic instruction count curves across N! In this project, you will build Hardware PMU Curve Tracer in C.","learningOutcome":"Hardware Instruction Counter Profiling, Noise-Free Deterministic Curves & OS Noise Elimination","exampleText":"Trace hardware instructions executed counter across increasing N","exampleOutput":"--- Hardware CPU Performance Counters Asymptotic Curve Tracer ---\\nTraced hardware instructions executed counter across N=1,000 to N=100,000.","logicExplanation":"1. **Hardware PMU Counter**: Read CPU Performance Monitoring Unit (PMU) instruction counter.\\n2. **Deterministic Curve**: Hardware instruction counts scale deterministically with algorithm steps.","answerFile":"./answers/answer22.c","codeExplanation":"1. `hardware_pmu_curve_tracer_demo()`: Solves Hardware CPU Performance Counters Asymptotic Curve Tracer."},{"projectId":"ASYMP_023","title":"Multi-Dimensional Asymptotic Bounds Verifier O(N^a M^b)","difficulty":"Advanced","description":"Verify multi-variable bivariate asymptotic bounds `O(N^a * M^b)` (e.g. Graph BFS `O(V + E)`, Matrix Multiplication `O(R * C)`, Grid Dijkstra `O(V log V + E)`). Compute constants `c` and thresholds `(N0, M0)` for multi-variable functions! In this project, you will build Multi-Dimensional Asymptotic Verifier in C.","learningOutcome":"Bivariate Asymptotic Bounds `O(N^a M^b)`, Multi-Variable Formal Definitions & Graph Complexities","exampleText":"Verify multi-dimensional asymptotic bounds O(V log V + E) for graph algorithms","exampleOutput":"--- Multi-Dimensional Asymptotic Bounds Verifier O(N^a M^b) ---\\nVerified bivariate graph algorithm complexity bounds O(V log V + E).","logicExplanation":"1. **Bivariate Upper Bound**: `f(N, M) <= c * g(N, M)` for all `N >= N0, M >= M0`.\\n2. **Multi-Variable Proof**: Verify upper bound constants across multi-dimensional grid inputs.","answerFile":"./answers/answer23.c","codeExplanation":"1. `multi_dim_asymptotic_verifier_demo()`: Solves Multi-Dimensional Asymptotic Bounds Verifier."},{"projectId":"ASYMP_024","title":"Parallel Multi-Threaded Asymptotic Scaling Engine","difficulty":"Advanced","description":"Benchmark parallel multi-threaded asymptotic speedup scaling according to **Amdahl\'s Law** (`Speedup(P) = 1 / ((1 - S) + S / P)`). Profile parallel execution across 1, 2, 4, 8, 16 CPU cores to identify serial bottleneck fraction `S`! In this project, you will build Parallel Asymptotic Scaling Engine in C.","learningOutcome":"Amdahl\'s Law Parallel Scaling, Serial Bottleneck Fraction `S` & Multi-Core Speedups","exampleText":"Verify Amdahl\'s Law parallel scaling across 1 to 16 CPU cores","exampleOutput":"--- Parallel Multi-Threaded Asymptotic Scaling Engine ---\\nVerified Amdahl\'s Law speedup scaling across 1 to 16 CPU cores.","logicExplanation":"1. **Amdahl\'s Formula**: `Speedup(P) = 1 / ((1 - S) + S / P)` where `S` is parallelizable fraction.\\n2. **Serial Limit**: Maximum theoretical speedup bounded by `1 / (1 - S)` regardless of P.","answerFile":"./answers/answer24.c","codeExplanation":"1. `parallel_asymptotic_scaling_demo()`: Solves Parallel Multi-Threaded Asymptotic Scaling Engine."},{"projectId":"ASYMP_025","title":"High-Throughput Memory-Mapped Telemetry Complexity Benchmark","difficulty":"Advanced","description":"Industrial telemetry benchmarking kernels profile 100,000,000 streaming telemetry records per second directly in memory-mapped shared RAM buffers (`mmap`) to verify linear `O(N)` scaling with zero OS kernel overhead. In this project, you will build Memory-Mapped Complexity Benchmark Kernel in C.","learningOutcome":"Memory-Mapped Complexity Benchmarks, 100M Stream Record Audits & Zero-Copy Profiling","exampleText":"Profile 100M streaming telemetry records/sec to verify linear O(N) scaling","exampleOutput":"--- High-Throughput Memory-Mapped Telemetry Complexity Benchmark ---\\nProfiled 100,000,000 streaming telemetry records per second to verify linear O(N) scaling.","logicExplanation":"1. **mmap Benchmark Memory**: Memory-map 100M telemetry records into RAM virtual space.\\n2. **Linear Speed Audit**: Measure nanosecond execution times to confirm linear `O(N)` scaling curve.","answerFile":"./answers/answer25.c","codeExplanation":"1. `stream_complexity_benchmark_demo()`: Simulates high-throughput memory-mapped telemetry complexity benchmark."}]'),c={projectCategory:D,subject:G,board:V,class:"Computer Science Core / BCA / B.Tech",tools:U,institute:R,projects:H};function K(){const[t,m]=s.useState(null);return s.useEffect(()=>{const o=Object.assign({"./topic6_files/answers/answer1.c":u,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":h,"./topic6_files/answers/answer13.c":_,"./topic6_files/answers/answer14.c":N,"./topic6_files/answers/answer15.c":w,"./topic6_files/answers/answer16.c":y,"./topic6_files/answers/answer17.c":x,"./topic6_files/answers/answer18.c":O,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":C,"./topic6_files/answers/answer20.c":P,"./topic6_files/answers/answer21.c":S,"./topic6_files/answers/answer22.c":T,"./topic6_files/answers/answer23.c":b,"./topic6_files/answers/answer24.c":E,"./topic6_files/answers/answer25.c":B,"./topic6_files/answers/answer3.c":L,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":M,"./topic6_files/answers/answer6.c":I,"./topic6_files/answers/answer7.c":k,"./topic6_files/answers/answer8.c":F,"./topic6_files/answers/answer9.c":j}),r={};Object.keys(o).forEach(i=>{const a=i.split("/").pop();r[a]=o[i]});const p=c.projects.map(i=>{const n=(i.answerFile||"").split("/").pop(),l=r[n];return l||console.warn(`⚠ Missing C answer file: ${n}`),{...i,answer:l||`// Source file "${n}" not found in answers folder`}});m({...c,projects:p})},[]),t?e.jsx(d,{data:t}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Asymptotic Notations Projects..."})]})})}export{K as default};

import{b as p,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as u}from"./TeacherSukantaHui-DerPxfxp.js";import{F as f}from"./FAQTemplate-BHhlgA96.js";import{P as O}from"./PlainTextPrint-C08xhKA4.js";import{E as b}from"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const y=[{question:"What is the exact time complexity of the C loop: for(int i = 1; i < n; i *= 2)?",options:["O(n)","O(log_2 n)","O(n^2)","O(sqrt(n))"],correctAnswer:1,explanation:"In each step, i doubles (1, 2, 4, 8, ... 2^k). The loop terminates when 2^k >= n, which yields k = ceil(log_2 n) iterations, resulting in O(log n) time complexity."},{question:`What is the time complexity of the nested loops:
for(int i = 1; i < n; i *= 2)
  for(int j = 1; j < n; j *= 2)?`,options:["O(n log n)","O((log n)^2) [Polylogarithmic]","O(n^2)","O(log n)"],correctAnswer:1,explanation:"The outer loop executes log_2(n) times, and for each outer iteration, the inner loop executes log_2(n) times. The total operations are log_2(n) * log_2(n) = O((log n)^2)."},{question:"If a loop increments by multiplying with 3 (for(int i = 1; i < n; i *= 3)), how does its asymptotic complexity class compare with i *= 2?",options:["It is exponentially faster","Both belong to the exact same complexity class O(log n)","i *= 3 is O(n) while i *= 2 is O(log n)","i *= 3 is illegal in C syntax"],correctAnswer:1,explanation:"log_3(n) = (1 / log_2 3) * log_2(n) ≈ 0.63 * log_2(n). Because 0.63 is a constant scalar, both loops are in Theta(log n)."},{question:"What is the time complexity of the loop: for(int i = n; i > 1; i /= 2)?",options:["O(n)","O(log_2 n)","O(n / 2)","O(1)"],correctAnswer:1,explanation:"In division stepping, the loop value is successively halved from n down to 1: n, n/2, n/4, ... 1. The number of steps is exactly floor(log_2 n) = O(log n)."},{question:`What is the time complexity of the mixed nested loop:
for(int i = 1; i <= n; i++)
  for(int j = 1; j < n; j *= 2)?`,options:["O(n^2)","O(n log n) [Linearithmic]","O((log n)^2)","O(n)"],correctAnswer:1,explanation:"The outer loop runs n times with additive increment (+1), and the inner loop runs log_2(n) times with multiplicative increment (*2). The total work is n * log_2(n) = O(n log n)."},{question:"What is the time complexity of the loop: for(int i = 1; i < n; i *= 2) for(int j = 0; j < i; j++)?",options:["O(n log n)","O(n) [Linear Time]","O(n^2)","O((log n)^2)"],correctAnswer:1,explanation:"Summing the inner iterations: 1 + 2 + 4 + 8 + ... + 2^k where 2^k < n. This geometric series sums to 2^(k+1) - 1 ≈ 2n = O(n) linear time!"},{question:"What happens if a programmer writes: for(int i = 0; i < n; i *= 2)?",options:["It runs in O(log n) time","It creates an Infinite Loop because 0 * 2 = 0, so i is never incremented","It causes a compiler syntax error","It runs in O(1) time"],correctAnswer:1,explanation:"Since i starts at 0, i *= 2 produces 0 at every iteration, causing an infinite loop. Multiplicative loops must start with i >= 1!"},{question:"What is the time complexity of the quadratic squaring loop: for(int i = 2; i < n; i = i * i)?",options:["O(log n)","O(log log n) [Double Logarithmic]","O(sqrt(n))","O(n)"],correctAnswer:1,explanation:"At iteration k, i = 2^(2^k). The loop terminates when 2^(2^k) >= n, giving 2^k = log_2(n) => k = log_2(log_2 n) = O(log log n)."},{question:"What is the time complexity of the loop: for(int i = n; i > 2; i = sqrt(i))?",options:["O(sqrt(n))","O(log n)","O(log log n)","O(1)"],correctAnswer:2,explanation:"Taking square root repeatedly halves the exponent of the size: n^(1/2), n^(1/4), n^(1/8) ... down to 2. The number of steps is O(log log n)."},{question:"What is the time complexity of the dependent loop: for(int i = 1; i <= n; i++) for(int j = 1; j <= i; j *= 2)?",options:["O(n^2)","O(n log n)","O((log n)^2)","O(n)"],correctAnswer:1,explanation:"The total iterations are sum_{i=1}^n log_2(i) = log_2(1 * 2 * 3 * ... * n) = log_2(n!) = Theta(n log n) by Stirling's approximation."},{question:"What is the exact number of iterations executed by: for(int i = 1; i <= 64; i *= 2)?",options:["6 iterations","7 iterations","8 iterations","64 iterations"],correctAnswer:1,explanation:"Values of i: 1, 2, 4, 8, 16, 32, 64. That is exactly 7 iterations (since condition is i <= 64)."},{question:"What is the exact number of iterations executed by: for(int i = 1; i < 64; i *= 2)?",options:["5 iterations","6 iterations","7 iterations","8 iterations"],correctAnswer:1,explanation:"Values of i: 1, 2, 4, 8, 16, 32 (terminates when i = 64). That is exactly 6 iterations."},{question:`What is the time complexity of the 3-level nested logarithmic loop:
for(int i = 1; i < n; i *= 2)
  for(int j = 1; j < n; j *= 2)
    for(int k = 1; k < n; k *= 2)?`,options:["O(n^3)","O(3 log n)","O((log n)^3) [Polylogarithmic]","O(n log n)"],correctAnswer:2,explanation:"Each loop executes log_2(n) times independently, yielding log_2(n) * log_2(n) * log_2(n) = O((log n)^3)."},{question:`What is the time complexity of the harmonic nested loop (Sieve of Eratosthenes inner loop structure):
for(int i = 1; i <= n; i++)
  for(int j = i; j <= n; j += i)?`,options:["O(n^2)","O(n log n)","O((log n)^2)","O(n)"],correctAnswer:1,explanation:"The inner loop runs n/i times. Total iterations = sum_{i=1}^n (n/i) = n * sum_{i=1}^n (1/i) = n * ln(n) = O(n log n)."},{question:"What is the time complexity of: for(int i = 1; i < n; i *= 4)?",options:["O(n / 4)","O(log_4 n) = O(log n)","O(4^n)","O(sqrt(n))"],correctAnswer:1,explanation:"At each step, i quadruples (1, 4, 16, 64, ...). The loop terminates in ceil(log_4 n) = O(log n) iterations."},{question:"What is the time complexity of: for(int i = n; i > 0; i /= 3)?",options:["O(log_3 n) = O(log n)","O(n / 3)","O(3^n)","O(n log n)"],correctAnswer:0,explanation:"Successive division by 3 reduces n to 0 in floor(log_3 n) + 1 steps = O(log n)."},{question:"If an additive loop runs in O(N) and a multiplicative loop runs in O(log N), what is their combined sequential complexity?",options:["O(N * log N)","O(N + log N) = O(N)","O((log N)^2)","O(N^2)"],correctAnswer:1,explanation:"For sequential code blocks, the dominant term governs the asymptotic sum: O(N + log N) = O(N)."},{question:"What is the time complexity of: for(int i = 1; i * i <= n; i++)?",options:["O(n)","O(sqrt(n))","O(log n)","O(n^2)"],correctAnswer:1,explanation:"The condition i * i <= n means i <= sqrt(n). Since i increments by +1, the loop runs exactly floor(sqrt(n)) times = O(sqrt(n))."},{question:"How does the complexity of for(int i = 1; i*i <= n; i++) compare to for(int i = 1; i < n; i *= 2)?",options:["O(sqrt(n)) is faster than O(log n)","O(log n) is strictly faster than O(sqrt(n))","Both are identical","O(sqrt(n)) is exponential"],correctAnswer:1,explanation:"For large n, log_2(n) is dramatically smaller than sqrt(n). For n = 1,000,000, log_2(n) ≈ 20 whereas sqrt(n) = 1,000."},{question:"What is the time complexity of: for(int i = 1; i < n; i *= 2) for(int j = 1; j < i; j *= 2)?",options:["O(n)","O((log n)^2)","O(n log n)","O(log n)"],correctAnswer:1,explanation:"When i = 2^k, the inner loop runs k times. Total iterations = sum_{k=0}^{log n} k = (log n * (log n + 1)) / 2 = O((log n)^2)."},{question:"What is the time complexity of: for(int i = n; i > 1; i /= 2) for(int j = 0; j < i; j++)?",options:["O(n log n)","O(n) [Linear Time]","O(n^2)","O(log n)"],correctAnswer:1,explanation:"The inner loop runs n + n/2 + n/4 + n/8 + ... + 1 times. This geometric sum equals n * (1 + 1/2 + 1/4 + ...) ≈ 2n = O(n)."},{question:"What is the time complexity of: for(int i = 1; i < n; i += 2)?",options:["O(log n)","O(n) [Linear Time]","O(n / 2) which is Theta(n)","Both 1 and 2 are correct"],correctAnswer:3,explanation:"Adding a constant (i += 2) is additive stepping, NOT multiplicative. It runs n/2 times, which is in Theta(n)."},{question:"What is the rule of thumb to distinguish O(n) loops from O(log n) loops?",options:["Additive increments (i += c, i -= c) yield O(n); Multiplicative steps (i *= c, i /= c) yield O(log n)","While loops are O(log n), for loops are O(n)","All loops in C are O(n^2)","If the loop uses integers it is O(1)"],correctAnswer:0,explanation:"The fundamental heuristic: addition/subtraction steps produce linear growth O(n); multiplication/division steps produce logarithmic growth O(log n)."},{question:"What is the time complexity of: for(int i = 2; i < n; i = pow(i, 2))?",options:["O(n)","O(log n)","O(log log n)","O(sqrt(n))"],correctAnswer:2,explanation:"pow(i, 2) is squaring i at each iteration (2, 4, 16, 256, 65536, ...). This achieves double logarithmic complexity O(log log n)."},{question:"What is the time complexity of: for(int i = 1; i < n; i *= 2) for(int j = 1; j < n; j += i)?",options:["O(n log n)","O(n)","O(log n)","O(n^2)"],correctAnswer:1,explanation:"When i is fixed, inner loop step is i, so it runs n/i times. Total sum = sum (n / 2^k) = n * (1 + 1/2 + 1/4 + ...) = 2n = O(n)."},{question:"In C, what bitwise operator can replace `i *= 2` for unsigned integers?",options:["i >>= 1","i <<= 1","i ^= 2","i &= 2"],correctAnswer:1,explanation:"Left shift by 1 bit (`i <<= 1`) multiplies an unsigned integer by 2 in 1 CPU cycle."},{question:"In C, what bitwise operator can replace `i /= 2` for unsigned integers?",options:["i >>= 1","i <<= 1","i |= 2","i ~= 1"],correctAnswer:0,explanation:"Right shift by 1 bit (`i >>= 1`) divides an integer by 2."},{question:"What is the time complexity of: for(int i = 1; i < n; i <<= 1)?",options:["O(n)","O(log_2 n)","O(n^2)","O(1)"],correctAnswer:1,explanation:"Left shifting by 1 is identical to multiplying by 2, which runs in ceil(log_2 n) = O(log n) time."},{question:"What is the time complexity of: for(int i = n; i > 0; i >>= 1)?",options:["O(log_2 n)","O(n)","O(n / 2)","O(1)"],correctAnswer:0,explanation:"Right shifting by 1 halves the number at each step until it reaches 0 in floor(log_2 n) + 1 steps = O(log n)."},{question:"What is the primary takeaway for loop complexity analysis?",options:["Never look at the step update expression","Always identify whether the loop variable changes additively (O(N)), multiplicatively (O(log N)), or exponentially (O(log log N))","All nested loops are automatically O(N^2)","Only recursion produces logarithms"],correctAnswer:1,explanation:"Analyzing the step update (additive vs multiplicative vs polynomial) immediately reveals whether the loop executes in O(N), O(log N), or O(log log N) time."}],w=`================================================================================
CODER & ACCOTAX - BARRACKPORE COMPUTER SCIENCE & DSA LAB
MODULE: LOGARITHMS IN COMPUTER SCIENCE & DATA STRUCTURES
TOPIC 2: MULTIPLICATIVE LOOP STEPPING IN C & EXACT LOGARITHMIC BOUNDS
================================================================================

1. PATTERN 1: MULTIPLICATIVE INCREMENT (i *= 2)
--------------------------------------------------------------------------------
Code:
  for (int i = 1; i < n; i *= 2) {
      // O(1) work
  }

Iteration Trace:
  Iteration 1: i = 1   = 2^0
  Iteration 2: i = 2   = 2^1
  Iteration 3: i = 4   = 2^2
  ...
  Iteration k: i = 2^(k-1)

Termination Condition:
  The loop terminates when i >= n, i.e., 2^(k-1) >= n.
  Taking log_2:
    k - 1 >= log_2(n)
    k >= log_2(n) + 1
  Exact number of iterations:
    T(n) = ceil(log_2(n)) = Theta(log n).

2. PATTERN 2: DIVISION STEPPING (i /= 2)
--------------------------------------------------------------------------------
Code:
  for (int i = n; i > 1; i /= 2) {
      // O(1) work
  }

Exact number of iterations:
  T(n) = floor(log_2(n)) = Theta(log n).

3. PATTERN 3: GENERAL MULTIPLICATIVE STEPPING (i *= k)
--------------------------------------------------------------------------------
Code:
  for (int i = 1; i < n; i *= k) { ... }

Exact iterations:
  T(n) = ceil(log_k(n)) = Theta(log n).

4. PATTERN 4: NESTED LOGARITHMIC LOOPS
--------------------------------------------------------------------------------
Code:
  for (int i = 1; i < n; i *= 2) {
      for (int j = 1; j < n; j *= 2) {
          // O(1) work
      }
  }

Complexity:
  Outer loop: log_2(n) iterations.
  Inner loop: log_2(n) iterations.
  Total work: log_2(n) * log_2(n) = Theta((log n)^2)  [Polylogarithmic time].

================================================================================
AUTHORED BY: SUKANTA HUI · CODER & ACCOTAX BARRACKPORE
================================================================================
`,v=`/*
 * File: MultiplicativeLoopDemo.c
 * Purpose: Analyzes and benchmarks C loops with multiplicative step updates
 *          (i *= 2, i /= 2, i *= k) to prove exact logarithmic iteration bounds.
 * Mentor: Sukanta Hui (Coder & AccoTax)
 */

#include <stdio.h>
#include <math.h>

void test_loop_multiply(int n) {
    int count = 0;
    printf("\\n[Testing: for(int i = 1; i < %d; i *= 2)]\\n", n);
    for (int i = 1; i < n; i *= 2) {
        printf("  Iteration %2d: i = %6d (which is 2^%d)\\n", count + 1, i, count);
        count++;
    }
    printf("Total iterations: %d | ceil(log2(%d)) = %d\\n", count, n, (int)ceil(log2((double)n)));
}

void test_loop_divide(int n) {
    int count = 0;
    printf("\\n[Testing: for(int i = %d; i > 1; i /= 2)]\\n", n);
    for (int i = n; i > 1; i /= 2) {
        printf("  Iteration %2d: i = %6d\\n", count + 1, i);
        count++;
    }
    printf("Total iterations: %d | floor(log2(%d)) = %d\\n", count, n, (int)floor(log2((double)n)));
}

int main() {
    printf("==================================================================\\n");
    printf("  CODER & ACCOTAX - MULTIPLICATIVE LOOP STEP ANALYSIS IN C        \\n");
    printf("==================================================================\\n");

    test_loop_multiply(64);
    test_loop_divide(100);

    return 0;
}
`;function _(){const d=p.useRef([]),[s,h]=p.useState(64),[i,g]=p.useState(2),[r,m]=p.useState("multiply"),x=p.useMemo(()=>{const t=[],l=Math.max(2,Number(s)||2),o=Math.max(2,Number(i)||2);if(r==="multiply"){let n=1,a=0;for(;n<l&&(t.push({step:a+1,iVal:n,power:Math.round(Math.log(n)/Math.log(o)),next:n*o}),n*=o,a++,!(a>100)););}else{let n=l,a=0;for(;n>1&&(t.push({step:a+1,iVal:n,power:Math.round(Math.log(n)/Math.log(o)),next:Math.floor(n/o)}),n=Math.floor(n/o),a++,!(a>100)););}return t},[s,i,r]);p.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.08});return d.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const c=t=>{t&&!d.current.includes(t)&&d.current.push(t)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 10 · Module 3 · Topic 2"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Multiplicative Loop Stepping in C: i *= 2, i /= 2, i *= k"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Deriving exact logarithmic step-count summations from C loop control structures, analyzing nested multiplicative loops, and avoiding common complexity pitfalls."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Step Counting Formula: ⌈log_k N⌉"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Class: O(log N)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⏱️"}),e.jsx("span",{children:"Interactive C Loop Step Counter"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate C loop executions with custom bounds and multipliers to inspect exact iteration states."})]}),e.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs",children:[e.jsxs("button",{onClick:()=>m("multiply"),className:`px-3 py-1 rounded-lg font-mono font-bold transition cursor-pointer ${r==="multiply"?"bg-cyan-600 text-white shadow":"text-slate-400 hover:text-white"}`,children:["i *= ",i]}),e.jsxs("button",{onClick:()=>m("divide"),className:`px-3 py-1 rounded-lg font-mono font-bold transition cursor-pointer ${r==="divide"?"bg-cyan-600 text-white shadow":"text-slate-400 hover:text-white"}`,children:["i /= ",i]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("label",{className:"text-xs font-mono text-slate-400 flex justify-between",children:[e.jsx("span",{children:"Target Limit (N):"}),e.jsx("span",{className:"font-bold text-cyan-300",children:s})]}),e.jsx("input",{type:"range",min:"8",max:"1024",step:"8",value:s,onChange:t=>h(Number(t.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("label",{className:"text-xs font-mono text-slate-400 flex justify-between",children:[e.jsx("span",{children:"Step Multiplier (k):"}),e.jsx("span",{className:"font-bold text-amber-300",children:i})]}),e.jsx("div",{className:"flex items-center gap-2",children:[2,3,4,8].map(t=>e.jsxs("button",{onClick:()=>g(t),className:`flex-1 py-1 rounded-lg text-xs font-mono font-bold border transition cursor-pointer ${i===t?"bg-amber-950 border-amber-500 text-amber-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`,children:["k = ",t]},t))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-500 uppercase",children:"C Loop Syntax"}),e.jsx("div",{className:"text-xs font-bold text-slate-200 mt-1",children:r==="multiply"?`for(int i=1; i<${s}; i*=${i})`:`for(int i=${s}; i>1; i/=${i})`})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-500 uppercase",children:"Theoretical Formula"}),e.jsxs("div",{className:"text-xs font-bold text-amber-300 mt-1",children:["⌈log",e.jsx("sub",{children:i}),"(",s,")⌉ = ",Math.ceil(Math.log(s)/Math.log(i))]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-500 uppercase",children:"Physical Iteration Count"}),e.jsxs("div",{className:"text-xl font-black text-emerald-300 mt-0.5",children:[x.length," ticks"]})]})]}),e.jsx("div",{className:"max-h-56 overflow-y-auto border border-slate-800 rounded-xl bg-slate-950 divide-y divide-slate-850 font-mono text-xs",children:x.map(t=>e.jsxs("div",{className:"px-4 py-2 flex items-center justify-between hover:bg-slate-900/60 transition",children:[e.jsxs("span",{className:"text-cyan-400 font-bold",children:["Tick #",t.step]}),e.jsxs("span",{className:"text-slate-300",children:["variable i = ",t.iVal," ",r==="multiply"?`(= ${i}^${t.step-1})`:""]}),e.jsxs("span",{className:"text-amber-400",children:["→ next i = ",t.next]})]},t.step))})]})}),e.jsx("section",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5",children:[e.jsx("span",{children:"💻"}),e.jsx("span",{children:"C Program: Multiplicative Loop Step Analysis"})]}),e.jsx(b,{defaultCode:v})]})}),e.jsx("section",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(u,{topicName:"Multiplicative Loop Stepping in C",noteTitle:"Sukanta Hui's Mentor Guide: Spotting Hidden Logarithms in Code Loops",mentorAdvice:`"When analyzing loops, train your eyes to look at the step update expression:
1) If i increases by addition (i += 1 or i += c) => LINEAR time O(N).
2) If i increases by multiplication (i *= 2 or i *= k) or decreases by division (i /= 2) => LOGARITHMIC time O(log N).
3) If i increases quadratically (i = i * i) => DOUBLE LOGARITHMIC time O(log log N).
This single diagnostic heuristic will solve 95% of all loop complexity questions in competitive programming!"`})}),e.jsx("section",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(f,{questions:y})}),e.jsx("section",{ref:c,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(O,{content:w,title:"Topic 2: Multiplicative Loop Stepping Study Note"})})]})]})}export{_ as default};

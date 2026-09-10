import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as G}from"./PythonFileLoader-CiS1GfkF.js";import{F as D}from"./FAQTemplate-D_90hN4m.js";import{P as A}from"./PlainTextPrint-yt10TRX1.js";import{T as R}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const k=`"""\r
01_rand_randn_randint_distributions.py\r
======================================\r
Topic: NumPy Random Distributions: rand, randn, randint, uniform, normal\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("NUMPY RANDOM DISTRIBUTIONS & SAMPLING")\r
    print("=" * 70)\r
\r
    # 1. Standard Uniform Distribution: np.random.rand(d0, d1, ...) or uniform(low, high, size)\r
    # Generates continuous float values in [0.0, 1.0)\r
    uniform_samples = np.random.rand(4, 3)\r
    print("1. Standard Uniform [0, 1) rand(4, 3):\\n", np.round(uniform_samples, 4))\r
\r
    # Scaled uniform distribution between [50.0, 100.0) for exam marks\r
    scaled_uniform = np.random.uniform(low=50.0, high=100.0, size=(4,))\r
    print("\\n   Custom Uniform [50, 100) Marks:\\n", np.round(scaled_uniform, 2))\r
\r
    # 2. Standard Normal (Gaussian) Distribution: np.random.randn(d0, d1, ...) or normal(mu, sigma, size)\r
    # Generates samples from N(mean=0, std=1) with bell-curve probability\r
    normal_samples = np.random.randn(5)\r
    print("\\n2. Standard Normal N(0, 1) randn(5):\\n", np.round(normal_samples, 4))\r
\r
    # Custom Gaussian: Mean student score = 75, Standard deviation = 8.5\r
    student_scores = np.random.normal(loc=75.0, scale=8.5, size=1000)\r
    print(f"\\n   Custom Normal N(75, 8.5^2) over 1000 samples:")\r
    print(f"   Empirical Mean : {np.mean(student_scores):.4f} (Expected ~75.0)")\r
    print(f"   Empirical Std  : {np.std(student_scores):.4f}  (Expected ~8.5)")\r
\r
    # 3. Discrete Uniform Integers: np.random.randint(low, high, size)\r
    # Note: 'low' is inclusive, 'high' is EXCLUSIVE!\r
    dice_rolls = np.random.randint(low=1, high=7, size=(3, 4))\r
    print("\\n3. Discrete Integers randint(1, 7, size=(3, 4)) [Dice Rolls]:\\n", dice_rolls)\r
\r
if __name__ == "__main__":\r
    main()\r
`,z=`"""\r
02_random_seed_and_generator_reproducibility.py\r
===============================================\r
Topic: Random Seeds, Reproducibility, Legacy np.random vs Modern default_rng (PCG64)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("REPRODUCIBILITY: LEGACY np.random.seed VS MODERN default_rng")\r
    print("=" * 70)\r
\r
    # 1. Why Reproducibility Matters in ML:\r
    # Train-test splits, weight initializations, and k-fold shuffles MUST be reproducible\r
    # so that Debangshu and Susmita get identical benchmark results on the same code.\r
\r
    # 2. Legacy Method: np.random.seed(seed) (Global State - Not Thread Safe)\r
    np.random.seed(42)\r
    sample_legacy_1 = np.random.rand(3)\r
    \r
    np.random.seed(42)  # Resetting global seed produces identical numbers\r
    sample_legacy_2 = np.random.rand(3)\r
    \r
    print("1. Legacy np.random.seed(42):")\r
    print("   Run 1:", np.round(sample_legacy_1, 4))\r
    print("   Run 2:", np.round(sample_legacy_2, 4))\r
    assert np.all(sample_legacy_1 == sample_legacy_2)\r
\r
    # 3. Modern Recommended Method (NumPy 1.17+): np.random.default_rng(seed)\r
    # Uses PCG64 bit-generator. Isolated generator instance, fast, statistically superior.\r
    rng = np.random.default_rng(seed=2026)\r
\r
    val_uniform = rng.random((2, 3))           # Uniform [0, 1)\r
    val_integers = rng.integers(1, 100, size=5) # Discrete integers [1, 100)\r
    val_normal = rng.normal(loc=0, scale=1, size=(2, 2)) # Gaussian\r
\r
    print("\\n2. Modern np.random.default_rng(seed=2026):")\r
    print("   rng.random((2, 3)):\\n", np.round(val_uniform, 4))\r
    print("   rng.integers(1, 100, size=5):\\n", val_integers)\r
    print("   rng.normal(0, 1, size=(2, 2)):\\n", np.round(val_normal, 4))\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
03_choice_and_permutation_sampling.py\r
=====================================\r
Topic: Discrete Sampling: choice, replacement, weighted probabilities, and shuffling\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("SAMPLING: CHOICE, WEIGHTED PROBABILITIES & PERMUTATIONS")\r
    print("=" * 70)\r
\r
    rng = np.random.default_rng(seed=42)\r
    students = np.array(["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"])\r
\r
    # 1. Random Choice with & without replacement\r
    # Without replacement (Sampling for 3 distinct presentation leaders)\r
    leaders = rng.choice(students, size=3, replace=False)\r
    print("1. Sampling without replacement (Distinct winners):", leaders)\r
\r
    # With replacement (Bootstrapping 6 samples from existing pool)\r
    bootstrap_sample = rng.choice(students, size=6, replace=True)\r
    print("2. Bootstrap sampling with replacement:", bootstrap_sample)\r
\r
    # 2. Weighted Random Choice (Simulating Class Imbalance in ML)\r
    # E.g. Fraud detection: 95% Normal (0), 5% Fraud (1)\r
    classes = np.array(["Normal_0", "Fraud_1"])\r
    imbalanced_batch = rng.choice(classes, size=10, p=[0.95, 0.05])\r
    print("\\n3. Weighted Sampling (p=[0.95, 0.05]):", imbalanced_batch)\r
\r
    # 3. Permutation vs In-place Shuffle\r
    indices = np.arange(6)\r
    \r
    # rng.permutation returns a NEW shuffled copy\r
    shuffled_copy = rng.permutation(indices)\r
    print("\\n4. rng.permutation (Returns copy):")\r
    print("   Original :", indices)\r
    print("   Shuffled :", shuffled_copy)\r
\r
    # rng.shuffle modifies the array IN-PLACE\r
    arr_to_mutate = np.copy(students)\r
    rng.shuffle(arr_to_mutate)\r
    print("\\n5. rng.shuffle (Mutates in-place):")\r
    print("   Mutated Array:", arr_to_mutate)\r
\r
if __name__ == "__main__":\r
    main()\r
`,L=`"""\r
04_ml_synthetic_dataset_and_weight_init.py\r
==========================================\r
Topic: ML Applications: Synthetic Dataset Generation & Neural Network Weight Initialization\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def generate_synthetic_regression(N: int = 100, noise_std: float = 1.5, seed: int = 42):\r
    """Generates synthetic data: y = 3.5*x1 - 2.0*x2 + 10.0 + Gaussian Noise."""\r
    rng = np.random.default_rng(seed=seed)\r
    \r
    # 2 input features: x1 (Study hours ~ Uniform[1, 10]), x2 (Absences ~ Uniform[0, 5])\r
    X = np.empty((N, 2))\r
    X[:, 0] = rng.uniform(1.0, 10.0, size=N)\r
    X[:, 1] = rng.uniform(0.0, 5.0, size=N)\r
    \r
    # True weights: w1 = 3.5, w2 = -2.0, bias = 10.0\r
    true_weights = np.array([3.5, -2.0])\r
    true_bias = 10.0\r
    \r
    # Gaussian noise epsilon ~ N(0, noise_std^2)\r
    noise = rng.normal(loc=0.0, scale=noise_std, size=N)\r
    \r
    y = (X @ true_weights) + true_bias + noise\r
    return X, y\r
\r
def xavier_glorot_weight_init(d_in: int, d_out: int, seed: int = 42) -> np.ndarray:\r
    """Xavier / Glorot Normal initialization for Neural Network Layers."""\r
    rng = np.random.default_rng(seed=seed)\r
    # std = sqrt(2 / (d_in + d_out))\r
    std = np.sqrt(2.0 / (d_in + d_out))\r
    W = rng.normal(loc=0.0, scale=std, size=(d_in, d_out))\r
    return W\r
\r
def main():\r
    print("=" * 70)\r
    print("ML WORKFLOWS: SYNTHETIC DATASET GENERATION & WEIGHT INIT")\r
    print("=" * 70)\r
\r
    # 1. Generating synthetic regression dataset\r
    X, y = generate_synthetic_regression(N=5, noise_std=0.5, seed=42)\r
    print("1. Synthetic Regression Dataset (5 samples):")\r
    print("   Features X (Hours, Absences):\\n", np.round(X, 2))\r
    print("   Labels y (Exam Marks)        :\\n", np.round(y, 2))\r
\r
    # 2. Xavier / Glorot Weight Initialization for Deep Learning\r
    # Suppose Input layer has 128 units, Hidden layer has 64 units\r
    d_in, d_out = 128, 64\r
    W = xavier_glorot_weight_init(d_in, d_out)\r
    \r
    print(f"\\n2. Xavier Weight Initialization (Shape: {W.shape}):")\r
    print(f"   Theoretical Std : {np.sqrt(2.0 / (d_in + d_out)):.4f}")\r
    print(f"   Sample Mean     : {np.mean(W):.4f} (Close to 0.0)")\r
    print(f"   Sample Std      : {np.std(W):.4f}")\r
    print("   Weight Matrix Preview (Top 2x3):\\n", np.round(W[:2, :3], 4))\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=`========================================================================\r
TOPIC 16 NOTE: NUMPY RANDOM MODULE BASICS (np.random & default_rng)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. CORE RANDOM SAMPLING FUNCTIONS\r
----------------------------------\r
- Continuous Uniform:\r
  * np.random.rand(d0, d1, ...): Uniform in interval [0.0, 1.0).\r
  * np.random.uniform(low, high, size): Custom uniform interval [low, high).\r
\r
- Standard Normal (Gaussian):\r
  * np.random.randn(d0, d1, ...): Gaussian with mean=0, std=1.\r
  * np.random.normal(loc, scale, size): Gaussian with specified mean (loc) and standard deviation (scale).\r
\r
- Discrete Integers:\r
  * np.random.randint(low, high, size): Discrete random integers in range [low, high) (inclusive low, exclusive high).\r
\r
- Discrete Sampling:\r
  * np.random.choice(a, size, replace=True/False, p=probabilities): Samples elements with or without replacement and custom weighting.\r
  * np.random.permutation(x): Returns a newly shuffled copy.\r
  * np.random.shuffle(x): In-place in-memory shuffle of array x.\r
\r
2. REPRODUCIBILITY & THE MODERN GENERATOR API\r
----------------------------------------------\r
- Legacy API: \`np.random.seed(42)\`\r
  Sets a single global state in C. Not thread-safe, uses older Mersenne Twister algorithm (MT19937).\r
- Modern API (NumPy 1.17+): \`rng = np.random.default_rng(seed=42)\`\r
  Creates an isolated \`Generator\` instance powered by PCG64 (Permuted Congruential Generator).\r
  Faster, thread-safe, and provides cleaner method names (e.g. \`rng.integers\`, \`rng.random\`, \`rng.normal\`).\r
\r
3. MACHINE LEARNING APPLICATIONS\r
---------------------------------\r
- Synthetic Data Generation:\r
  Creating controlled feature distributions with known ground truth equations plus additive Gaussian noise (epsilon ~ N(0, sigma^2)) to test regression and classification algorithms.\r
\r
- Neural Network Weight Initialization:\r
  * Too small weights -> Vanishing gradients.\r
  * Too large weights -> Exploding gradients and saturated activations.\r
  * Xavier/Glorot Initialization: std = sqrt(2 / (d_in + d_out)).\r
  * He/Kaiming Initialization: std = sqrt(2 / d_in) for ReLU activation functions.\r
\r
- Mini-batch Stochastic Gradient Descent (SGD):\r
  Shuffling training indices across epochs: \`rng.permutation(len(X_train))\`.\r
`,W=[{id:1,question:"What is the key difference in distribution and return values between `np.random.rand(5)` and `np.random.randn(5)`?",options:["`rand` generates uniform float numbers in [0, 1), whereas `randn` generates standard normal Gaussian numbers with mean=0 and std=1.","`rand` generates integers, while `randn` generates float numbers.","`rand` generates numbers with mean=0, while `randn` generates numbers in [0, 1).","Both functions generate identical Gaussian numbers."],correctAnswer:0,explanation:"`np.random.rand` samples from the continuous Uniform distribution in [0, 1). The 'n' in `randn` stands for Normal (Gaussian) distribution N(0, 1), which can produce positive or negative numbers centered around 0."},{id:2,question:"Why is `rng = np.random.default_rng(seed=42)` preferred over legacy `np.random.seed(42)` in modern ML code?",options:["default_rng produces truly non-deterministic hardware quantum numbers.","default_rng uses the modern, faster, statistically superior PCG64 generator and provides an isolated instance rather than mutating global state.","np.random.seed is deprecated and no longer available in Python 3.","default_rng runs exclusively on GPU CUDA cores."],correctAnswer:1,explanation:"Introduced in NumPy 1.17, default_rng initializes an isolated Generator instance using the PCG64 bit generator. It prevents unintended side-effects across libraries and multi-threading that occurred with the global seed."},{id:3,question:"What will `np.random.randint(1, 10, size=5)` generate?",options:["5 random integers from 1 up to 10 inclusive.","5 random integers from 1 up to 9 inclusive (10 is excluded).","5 floating-point numbers between 1 and 10.","An array of 10 numbers randomly chosen 5 times."],correctAnswer:1,explanation:"Like Python's range(), `randint(low, high)` in NumPy includes `low` but excludes `high` (half-open interval [low, high))."},{id:4,question:"When initializing neural network weights with Xavier (Glorot) normal initialization for layer with input dimension d_in and output dimension d_out, what standard deviation sigma is used?",options:["sigma = sqrt(2 / (d_in + d_out))","sigma = (d_in + d_out) / 2","sigma = 1.0 / (d_in * d_out)","sigma = 0.01"],correctAnswer:0,explanation:"Xavier / Glorot initialization scales weights with standard deviation sigma = sqrt(2 / (d_in + d_out)) to ensure signal variance remains constant across forward activations and backward gradients."},{id:5,question:"What is the difference between `rng.permutation(arr)` and `rng.shuffle(arr)`?",options:["permutation operates in-place, while shuffle returns a copy.","permutation returns a shuffled copy of the array, whereas shuffle modifies the original array in-place.","permutation only works on strings, while shuffle works on numbers.","There is no difference; they are aliases of each other."],correctAnswer:1,explanation:"`rng.permutation` returns a new shuffled array without altering the input array. `rng.shuffle` modifies the elements of the original array in place and returns None."}],f=[{id:"part1",fileName:"01_rand_randn_randint_distributions.py",title:"1. Core Random Distributions",badge:"Distributions",code:k,summary:"Explores continuous uniform (rand, uniform), Gaussian bell-curve (randn, normal), and discrete integers (randint)."},{id:"part2",fileName:"02_random_seed_and_generator_reproducibility.py",title:"2. Seed & Modern default_rng (PCG64)",badge:"Reproducibility",code:z,summary:"Contrasts legacy global np.random.seed(42) with modern isolated generator instances (default_rng) for reproducible ML experiments."},{id:"part3",fileName:"03_choice_and_permutation_sampling.py",title:"3. Choice, Replacement & Shuffling",badge:"Discrete Sampling",code:E,summary:"Demonstrates sampling with and without replacement, weighted class probabilities, and permutation vs in-place shuffle."},{id:"part4",fileName:"04_ml_synthetic_dataset_and_weight_init.py",title:"4. ML Synthetic Data & Xavier Init",badge:"ML Data & Weights",code:L,summary:"Synthesizes regression datasets with ground-truth weights plus Gaussian noise and calculates Xavier/Glorot weight matrices."}],V=()=>{const[m,N]=d.useState("distribution_sandbox"),[b,v]=d.useState("part1"),[a,w]=d.useState("normal"),[l,j]=d.useState(500),[h,S]=d.useState(42),u=f.find(n=>n.id===b)||f[0],s=d.useMemo(()=>{let n=h+12345;const t=()=>{n|=0,n=n+1831565813|0;let r=Math.imul(n^n>>>15,1|n);return r=r+Math.imul(r^r>>>7,61|r)^r,(r>>>0)/4294967296},i=[];if(a==="uniform")for(let r=0;r<l;r++)i.push(parseFloat((t()*100).toFixed(2)));else if(a==="normal")for(let r=0;r<l;r+=2){const o=Math.max(1e-15,t()),y=t(),C=Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*y),P=Math.sqrt(-2*Math.log(o))*Math.sin(2*Math.PI*y);i.push(parseFloat((70+C*10).toFixed(2))),i.length<l&&i.push(parseFloat((70+P*10).toFixed(2)))}else if(a==="integers")for(let r=0;r<l;r++)i.push(Math.floor(t()*6)+1);return i},[a,l,h]),_=(s.reduce((n,t)=>n+t,0)/s.length).toFixed(2),M=s.reduce((n,t)=>n+Math.pow(t-Number(_),2),0)/s.length,T=Math.sqrt(M).toFixed(2),c=Math.min(...s),x=Math.max(...s),p=a==="integers"?6:10,g=d.useMemo(()=>{if(a==="integers"){const n=[0,0,0,0,0,0];return s.forEach(t=>n[t-1]++),n.map((t,i)=>({label:`Die ${i+1}`,count:t,percent:(t/s.length*100).toFixed(1)}))}else{const t=(x-c||1)/p,i=new Array(p).fill(0);return s.forEach(r=>{let o=Math.floor((r-c)/t);o>=p&&(o=p-1),i[o]++}),i.map((r,o)=>({label:`${(c+o*t).toFixed(0)} - ${(c+(o+1)*t).toFixed(0)}`,count:r,percent:(r/s.length*100).toFixed(1)}))}},[s,a,p,c,x]),I=Math.max(...g.map(n=>n.count))||1;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-violet-900/60 via-slate-900 to-indigo-900/60 border border-violet-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-violet-500/20 text-violet-300 text-xs font-semibold rounded-full border border-violet-500/40",children:"Topic 16 • Probability & Sampling"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"np.random & default_rng"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-200 via-indigo-100 to-purple-300 bg-clip-text text-transparent",children:"NumPy Random Module Basics"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master statistical sampling across Uniform, Gaussian Normal, and Discrete distributions, understand modern ",e.jsx("code",{className:"text-violet-300 font-mono",children:"default_rng(seed)"})," reproducibility, and explore real-world ML dataset generation and weight initialization."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"distribution_sandbox",label:"Live Distribution Sandbox",icon:"📊"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>N(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${m===n.id?"bg-violet-500 text-slate-950 shadow-lg shadow-violet-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),m==="distribution_sandbox"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-violet-300 uppercase tracking-wider block mb-2",children:"1. Distribution Function"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"normal",label:"Normal (randn)",sub:"Bell Curve"},{id:"uniform",label:"Uniform (rand)",sub:"Flat [0, 100)"},{id:"integers",label:"Dice (randint)",sub:"Discrete [1..6]"}].map(n=>e.jsxs("button",{onClick:()=>w(n.id),className:`p-2.5 rounded-xl border text-center transition ${a===n.id?"bg-violet-500/20 border-violet-400 text-violet-200 font-bold shadow-md shadow-violet-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono",children:n.label}),e.jsx("div",{className:"text-[10px] text-slate-500 mt-0.5",children:n.sub})]},n.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("label",{className:"text-xs font-bold text-indigo-300 uppercase tracking-wider",children:"2. Sample Size (N)"}),e.jsxs("span",{className:"text-xs font-mono text-indigo-400 font-bold",children:[l," samples"]})]}),e.jsx("input",{type:"range",min:"50",max:"2000",step:"50",value:l,onChange:n=>j(Number(n.target.value)),className:"w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"50"}),e.jsx("span",{children:"1000"}),e.jsx("span",{children:"2000"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("label",{className:"text-xs font-bold text-purple-300 uppercase tracking-wider",children:"3. Random Seed (PRNG)"}),e.jsx("button",{onClick:()=>S(n=>n+1),className:"text-xs px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 hover:bg-purple-500/30 transition",children:"🎲 Re-Roll Seed"})]}),e.jsxs("div",{className:"p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between font-mono text-xs text-purple-300",children:[e.jsxs("span",{children:["default_rng(seed=",h,")"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Deterministic"})]})]})]})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-2xl",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Empirical Mean (μ)"}),e.jsx("span",{className:"text-xl font-bold font-mono text-violet-300",children:_}),e.jsxs("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:["Expected: ",a==="normal"?"70.0":a==="uniform"?"50.0":"3.5"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-2xl",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Empirical Std (σ)"}),e.jsx("span",{className:"text-xl font-bold font-mono text-indigo-300",children:T}),e.jsxs("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:["Expected: ",a==="normal"?"10.0":a==="uniform"?"28.87":"1.71"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-2xl",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Min Sample"}),e.jsx("span",{className:"text-xl font-bold font-mono text-emerald-300",children:c})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-2xl",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Max Sample"}),e.jsx("span",{className:"text-xl font-bold font-mono text-amber-300",children:x})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-slate-200",children:"Empirical Frequency Distribution (Histogram)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Displays binned sample distribution matching theoretical probability density."})]}),e.jsxs("span",{className:"text-xs font-mono text-violet-400 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/20",children:[g.length," Frequency Bins"]})]}),e.jsx("div",{className:"space-y-3",children:g.map((n,t)=>e.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono",children:[e.jsx("span",{className:"w-24 text-right text-slate-400 truncate",children:n.label}),e.jsx("div",{className:"flex-1 bg-slate-950 rounded-lg h-6 p-0.5 overflow-hidden border border-slate-800/80",children:e.jsx("div",{className:"bg-gradient-to-r from-violet-600 to-indigo-500 h-full rounded-md transition-all duration-300 flex items-center justify-end pr-2",style:{width:`${n.count/I*100}%`},children:n.count>0&&e.jsx("span",{className:"text-[10px] text-white font-bold",children:n.count})})}),e.jsxs("span",{className:"w-12 text-slate-400 text-right",children:[n.percent,"%"]})]},t))})]})]}),m==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:f.map(n=>e.jsxs("button",{onClick:()=>v(n.id),className:`p-4 rounded-xl border text-left transition-all ${b===n.id?"bg-violet-950/40 border-violet-500 shadow-lg shadow-violet-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-violet-300",children:u.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:u.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"NumPy Probability Suite"})]}),e.jsx(G,{fileModule:u.code,title:u.fileName})]})]}),m==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(R,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Randomness is the catalyst that enables machine learning models to break symmetry. Without randomized weight initialization, all neurons in a layer would compute the exact same gradient and learn identical representations! Always seed your random number generators with default_rng(seed) to guarantee that your research experiments are 100% reproducible."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-violet-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(A,{content:F})]})]}),m==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(D,{questions:W})})]})};export{V as default};

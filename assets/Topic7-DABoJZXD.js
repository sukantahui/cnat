import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cx as k,S as ee,k as te,B as M,aa as O,a as se,aP as ae,ck as re,H as ne,f as X,g as F,ad as ie}from"./vendor-icons-DFC0rBCP.js";const le=`"""\r
Topic 7: train_test_split()\r
Script 1: Basic Dataset Splitting and Reproducibility\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.model_selection import train_test_split\r
\r
# Synthetic dataset: 10 student samples (X = study hours, y = exam score)\r
X = np.array([[2], [4], [6], [8], [10], [12], [14], [16], [18], [20]])\r
y = np.array([25, 38, 48, 62, 70, 78, 85, 90, 94, 98])\r
\r
# 80/20 train/test split with deterministic random_state\r
X_train, X_test, y_train, y_test = train_test_split(\r
    X, y,\r
    test_size=0.2,       # 20% testing (2 samples), 80% training (8 samples)\r
    random_state=42,     # Guarantees identical random shuffle across runs\r
    shuffle=True         # Default is True\r
)\r
\r
print(f"Total Samples: {len(X)}")\r
print(f"Training Set ({len(X_train)} samples):")\r
print("X_train:\\n", X_train.flatten())\r
print("y_train:\\n", y_train)\r
\r
print(f"\\nTesting Set ({len(X_test)} samples):")\r
print("X_test:\\n", X_test.flatten())\r
print("y_test:\\n", y_test)\r
`,oe=`"""\r
Topic 7: train_test_split()\r
Script 2: Stratified Split for Imbalanced Classification\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.model_selection import train_test_split\r
\r
# Highly imbalanced dataset: 90% Class 0 (Normal), 10% Class 1 (Fraud / Rare)\r
np.random.seed(42)\r
n_samples = 100\r
X = np.random.randn(n_samples, 2)\r
# 90 zeros, 10 ones\r
y = np.array([0] * 90 + [1] * 10)\r
\r
print(f"Overall Class Distribution: Class 0 = {np.sum(y == 0)}%, Class 1 = {np.sum(y == 1)}%")\r
\r
# 1. Non-stratified split (Standard random sampling)\r
X_train_rand, X_test_rand, y_train_rand, y_test_rand = train_test_split(\r
    X, y, test_size=0.2, random_state=123\r
)\r
print("\\n--- Non-Stratified Split ---")\r
print(f"Train Class 1 count: {np.sum(y_train_rand == 1)} / {len(y_train_rand)} ({np.mean(y_train_rand == 1)*100:.1f}%)")\r
print(f"Test Class 1 count:  {np.sum(y_test_rand == 1)} / {len(y_test_rand)} ({np.mean(y_test_rand == 1)*100:.1f}%)")\r
\r
# 2. Stratified split (Preserves exact class proportions)\r
X_train_strat, X_test_strat, y_train_strat, y_test_strat = train_test_split(\r
    X, y, test_size=0.2, random_state=123, stratify=y\r
)\r
print("\\n--- Stratified Split (stratify=y) ---")\r
print(f"Train Class 1 count: {np.sum(y_train_strat == 1)} / {len(y_train_strat)} ({np.mean(y_train_strat == 1)*100:.1f}%)")\r
print(f"Test Class 1 count:  {np.sum(y_test_strat == 1)} / {len(y_test_strat)} ({np.mean(y_test_strat == 1)*100:.1f}%)")\r
print("Notice how both Train and Test maintain exactly 10% positive instances!")\r
`,de=`"""\r
Topic 7: train_test_split()\r
Script 3: 3-Way Split: Train, Validation, and Test\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.model_selection import train_test_split\r
\r
# 1000 simulated samples\r
X = np.random.randn(1000, 5)\r
y = np.random.randint(0, 2, size=1000)\r
\r
# Goal: 70% Train, 15% Validation, 15% Test\r
# Step 1: Split off 15% Test set first\r
X_train_val, X_test, y_train_val, y_test = train_test_split(\r
    X, y, test_size=0.15, random_state=42, stratify=y\r
)\r
\r
# Step 2: From remaining 85%, calculate fraction for 15% validation: 0.15 / 0.85 ≈ 0.1765\r
val_fraction = 0.15 / (1.0 - 0.15)\r
X_train, X_val, y_train, y_val = train_test_split(\r
    X_train_val, y_train_val, test_size=val_fraction, random_state=42, stratify=y_train_val\r
)\r
\r
print(f"Total Dataset:     {len(X)} samples (100%)")\r
print(f"Training Set:      {len(X_train)} samples ({len(X_train)/len(X)*100:.1f}%)")\r
print(f"Validation Set:    {len(X_val)} samples ({len(X_val)/len(X)*100:.1f}%)")\r
print(f"Testing Set:       {len(X_test)} samples ({len(X_test)/len(X)*100:.1f}%)")\r
`,B=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 7 - TRAIN_TEST_SPLIT()\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHY DATA SPLITTING IS MANDATORY\r
--------------------------------------------------------------------------------\r
Evaluating a model on the same data it trained on yields "optimism bias" (overfitting).\r
A model might achieve 100% training accuracy through rote memorization, yet fail completely on unseen production queries.\r
The solution: Partition the dataset into disjoint subsets:\r
- Training Set: Used by \`.fit()\` to optimize weights/coefficients.\r
- Validation Set: Used to tune hyperparameters and prevent overfitting.\r
- Test Set: Held out as an unbiased final benchmark of generalization error.\r
\r
2. KEY PARAMETERS OF \`train_test_split(*arrays, ...)\`\r
--------------------------------------------------------------------------------\r
A. \`test_size\` and \`train_size\`:\r
   - Float (e.g., 0.2): Represents proportion (20%).\r
   - Int (e.g., 200): Represents exact count of rows.\r
   - If both are omitted, \`test_size\` defaults to 0.25 (25%).\r
\r
B. \`random_state\`:\r
   - An integer seed (e.g., \`random_state=42\`) that initializes the pseudo-random number generator.\r
   - Ensures exact reproducibility across different machines, colleagues, and re-runs.\r
\r
C. \`shuffle=True\` (Default):\r
   - Shuffles the dataset before partitioning.\r
   - Set \`shuffle=False\` for time-series / sequential data where temporal order must be preserved.\r
\r
D. \`stratify=y\`:\r
   - Ensures the train and test subsets contain the EXACT same proportion of class labels as the original dataset.\r
   - Crucial for imbalanced classification tasks (e.g. Fraud detection, Medical diagnoses).\r
\r
3. SPLIT RATIO GUIDELINES\r
--------------------------------------------------------------------------------\r
- Small Datasets (< 1,000 rows): 70/30 or 80/20 train/test split.\r
- Medium Datasets (10,000 to 100,000 rows): 80/10/10 train/val/test split.\r
- Big Data (> 1,000,000 rows): 98/1/1 split (1% test set still has 10,000 samples for statistically confident evaluation).\r
\r
4. COMMON PITFALLS (BARRACKPORE CLASSROOM INSIGHTS)\r
--------------------------------------------------------------------------------\r
- Pitfall: Preprocessing (StandardScaler / Imputer) BEFORE calling \`train_test_split()\`.\r
  * Solution: ALWAYS split first! Fit the scaler on \`X_train\` only, then transform \`X_test\`.\r
- Pitfall: Forgetting \`stratify=y\` on rare diseases or fraud detection.\r
  * Without stratification, a test fold may end up with 0 positive fraud cases by chance!\r
================================================================================\r
`,P=[{id:1,question:"What is the primary objective of using `stratify=y` inside `train_test_split()`?",options:["To automatically sort the feature columns alphabetically","To guarantee that the train and test subsets contain identical proportions of each class label as the original dataset","To normalize numerical features to have 0 mean and unit variance","To perform k-fold cross-validation instead of a single split"],correctAnswer:1,explanation:"`stratify=y` forces the random split to maintain the exact class label distribution across both training and testing partitions, preventing imbalanced class starvation in smaller folds."},{id:2,question:"If neither `test_size` nor `train_size` is explicitly passed to `train_test_split()`, what is the default test size fraction?",options:["0.10 (10%)","0.20 (20%)","0.25 (25%)","0.50 (50%)"],correctAnswer:2,explanation:"In Scikit-learn, if unspecified, `test_size` defaults to 0.25 (25% for test, 75% for train)."},{id:3,question:"Why should `shuffle=False` be explicitly passed to `train_test_split()` when working with Time Series or financial stock price data?",options:["Because shuffling time series data leaks future timestamps into past training windows (Look-ahead bias)","Because time series data arrays cannot be stored in RAM if shuffled","Because Scikit-learn will raise a NotFittedError","Because pandas DataFrames do not support random indexing"],correctAnswer:0,explanation:"In time-series forecasting, temporal ordering must be preserved. Shuffling causes data from the future to leak into the training partition, creating unrealistic and overly optimistic model performance."},{id:4,question:"What is the purpose of setting `random_state=42`?",options:["It limits the execution time to 42 milliseconds","It guarantees deterministic, identical data partitioning across different runs and machines for reproducibility","It restricts the number of CPU threads to 42","It ensures exactly 42 samples are allocated to the test set"],correctAnswer:1,explanation:"`random_state` seeds the internal pseudo-random number generator, ensuring that anyone running the script gets the exact same train/test split."}],b=[{id:1,name:"Debangshu",score:45,label:"Pass"},{id:2,name:"Susmita",score:92,label:"Distinction"},{id:3,name:"Swadeep",score:38,label:"Pass"},{id:4,name:"Tuhina",score:78,label:"Distinction"},{id:5,name:"Sachin",score:62,label:"Pass"},{id:6,name:"Mahima",score:84,label:"Distinction"},{id:7,name:"Abhronila",score:55,label:"Pass"},{id:8,name:"Rohan",score:40,label:"Pass"},{id:9,name:"Priya",score:88,label:"Distinction"},{id:10,name:"Sneha",score:60,label:"Pass"},{id:11,name:"Ayan",score:52,label:"Pass"},{id:12,name:"Sourav",score:48,label:"Pass"}];function xe(){const[n,g]=i.useState("interactive"),[_,L]=i.useState(0),[A,D]=i.useState(!1),[y,$]=i.useState(.25),[j,H]=i.useState(!0),[v,W]=i.useState(42),[p,I]=i.useState({}),[x,z]=i.useState(!1),h=[{name:"01_train_test_split_basics.py",code:le},{name:"02_stratified_split_for_imbalanced_classes.py",code:oe},{name:"03_train_val_test_three_way_split.py",code:de}],R=t=>{navigator.clipboard.writeText(t),D(!0),setTimeout(()=>D(!1),2e3)},Q=(t,s)=>{x||I(a=>({...a,[t]:s}))},G=()=>{let t=0;return P.forEach(s=>{p[s.id]===s.correctAnswer&&t++}),t},N=b.length,f=Math.round(N*y),U=N-f;let l=[],o=[];if(j){const t=b.filter(u=>u.label==="Distinction"),s=b.filter(u=>u.label==="Pass"),a=Math.round(t.length*y),d=f-a,r=(u,E)=>[...u].sort((Z,q)=>Z.id*E%7-q.id*E%7),c=r(t,v),m=r(s,v),V=c.slice(0,a),Y=c.slice(a),K=m.slice(0,d),J=m.slice(d);o=[...V,...K],l=[...Y,...J]}else{const s=((a,d)=>[...a].sort((r,c)=>r.id*d%11-c.id*d%11))(b,v);o=s.slice(0,f),l=s.slice(f)}const C=t=>t.length?t.filter(a=>a.label==="Distinction").length/t.length*100:0,T=C(b),w=C(l),S=C(o);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-rose-500/20 rounded-xl text-rose-400 border border-rose-500/30",children:e.jsx(k,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20",children:"Topic 7 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.model_selection.train_test_split"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Dataset Partitioning & Stratification"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Master the art of unbiased evaluation. Learn how ",e.jsx("code",{className:"text-rose-300 font-mono",children:"train_test_split()"}),", random seeding (",e.jsx("code",{className:"text-rose-300 font-mono",children:"random_state"}),"), and stratification (",e.jsx("code",{className:"text-rose-300 font-mono",children:"stratify=y"}),") safeguard against data leakage and class imbalance starvation."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>g("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="interactive"?"border-rose-400 text-rose-400 bg-rose-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(ee,{className:"w-4 h-4"}),"Split Simulator & Stratifier"]}),e.jsxs("button",{onClick:()=>g("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="code"?"border-rose-400 text-rose-400 bg-rose-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(te,{className:"w-4 h-4"}),"Python Code Lab (",h.length,")"]}),e.jsxs("button",{onClick:()=>g("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="notes"?"border-rose-400 text-rose-400 bg-rose-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(M,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>g("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="quiz"?"border-rose-400 text-rose-400 bg-rose-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(O,{className:"w-4 h-4"}),"Knowledge Check"]})]}),n==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-2",children:[e.jsxs("span",{className:"font-semibold flex items-center gap-1.5",children:[e.jsx(k,{className:"w-3.5 h-3.5 text-rose-400"}),"test_size: ",Math.round(y*100),"%"]}),e.jsxs("span",{className:"font-mono text-rose-300",children:["Train: ",U," | Test: ",f]})]}),e.jsx("input",{type:"range",min:"0.10",max:"0.50",step:"0.05",value:y,onChange:t=>$(Number(t.target.value)),className:"w-full accent-rose-500 cursor-pointer"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs font-semibold text-slate-200 flex items-center gap-1.5",children:[e.jsx(se,{className:"w-3.5 h-3.5 text-emerald-400"}),"stratify=y"]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Preserves exact class proportions"})]}),e.jsx("input",{type:"checkbox",checked:j,onChange:t=>H(t.target.checked),className:"w-4 h-4 rounded text-rose-500 bg-slate-900 border-slate-700"})]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("button",{onClick:()=>W(t=>(t*17+5)%999),className:"w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700",children:[e.jsx(ae,{className:"w-3.5 h-3.5 text-rose-400"}),"Shuffle Seed (random_state=",v,")"]})})]})}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2",children:[e.jsx(re,{className:"w-4 h-4 text-rose-400"}),"Class Proportions Across Partitions (Distinction vs Pass)"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[e.jsx("span",{children:"1. Overall Pool (12 samples)"}),e.jsxs("span",{className:"text-white font-bold",children:[T.toFixed(1),"% Distinction"]})]}),e.jsxs("div",{className:"w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex",children:[e.jsx("div",{style:{width:`${T}%`},className:"bg-amber-400 h-full"}),e.jsx("div",{style:{width:`${100-T}%`},className:"bg-sky-500 h-full"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[e.jsxs("span",{children:["2. X_train (",l.length," samples)"]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[w.toFixed(1),"% Distinction"]})]}),e.jsxs("div",{className:"w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex",children:[e.jsx("div",{style:{width:`${w}%`},className:"bg-amber-400 h-full"}),e.jsx("div",{style:{width:`${100-w}%`},className:"bg-sky-500 h-full"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[e.jsxs("span",{children:["3. X_test (",o.length," samples)"]}),e.jsxs("span",{className:`font-bold ${j?"text-emerald-400":"text-rose-400"}`,children:[S.toFixed(1),"% Distinction"]})]}),e.jsxs("div",{className:"w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex",children:[e.jsx("div",{style:{width:`${S}%`},className:"bg-amber-400 h-full"}),e.jsx("div",{style:{width:`${100-S}%`},className:"bg-sky-500 h-full"})]})]})]}),!j&&Math.abs(w-S)>5&&e.jsx("div",{className:"mt-3 text-xs text-rose-300 font-sans flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Imbalance Alert: Without stratification, test set class distribution deviates from training set!"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-emerald-300 text-sm flex items-center gap-2",children:[e.jsx(ne,{className:"w-4 h-4"}),"X_train, y_train (",l.length," Students)"]}),e.jsxs("span",{className:"text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono",children:[Math.round(l.length/N*100),"% of data"]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:l.map(t=>e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800/80 flex items-center justify-between text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-slate-200",children:t.name}),e.jsxs("div",{className:"text-[11px] text-slate-400 font-mono",children:["Score: ",t.score]})]}),e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${t.label==="Distinction"?"bg-amber-500/20 text-amber-300":"bg-sky-500/20 text-sky-300"}`,children:t.label})]},t.id))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-rose-300 text-sm flex items-center gap-2",children:[e.jsx(k,{className:"w-4 h-4"}),"X_test, y_test (",o.length," Students)"]}),e.jsxs("span",{className:"text-xs bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded font-mono",children:[Math.round(o.length/N*100),"% of data"]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:o.map(t=>e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800/80 flex items-center justify-between text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-slate-200",children:t.name}),e.jsxs("div",{className:"text-[11px] text-slate-400 font-mono",children:["Score: ",t.score]})]}),e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${t.label==="Distinction"?"bg-amber-500/20 text-amber-300":"bg-sky-500/20 text-sky-300"}`,children:t.label})]},t.id))})]})]})]}),n==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:h.map((t,s)=>e.jsx("button",{onClick:()=>L(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${_===s?"bg-rose-600 text-white shadow-md shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:h[_].name}),e.jsx("button",{onClick:()=>R(h[_].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors",children:A?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:h[_].code})]})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(M,{className:"w-5 h-5 text-rose-400"}),"Classroom Revision Notes: train_test_split()"]}),e.jsxs("button",{onClick:()=>R(B),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400",children:[A?e.jsx(X,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:B})]}),n==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(O,{className:"w-5 h-5 text-rose-400"}),"Topic 7 Quiz: Data Partitioning & Splitting"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of random seeds, stratification, and dataset ratios."})]}),x&&e.jsxs("div",{className:"px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-rose-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[G()," / ",P.length]})]})]}),e.jsx("div",{className:"space-y-6",children:P.map((t,s)=>{p[t.id];const a=p[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((d,r)=>{const c=p[t.id]===r;let m="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return x?r===t.correctAnswer?m="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":c&&!a&&(m="bg-rose-500/20 border-rose-500/50 text-rose-200"):c&&(m="bg-rose-500/20 border-rose-500/50 text-rose-200"),e.jsxs("button",{onClick:()=>Q(t.id,r),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${m}`,children:[e.jsx("span",{children:d}),x&&r===t.correctAnswer&&e.jsx(X,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},r)})}),x&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-rose-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:x?e.jsxs("button",{onClick:()=>{I({}),z(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(ie,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>z(!0),disabled:Object.keys(p).length===0,className:"px-6 py-2.5 bg-rose-600 hover:bg-rose-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-rose-600/20",children:"Submit Answers"})})]})})]})]})}export{xe as default};

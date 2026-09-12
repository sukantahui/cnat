import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cu as V,S as U,k as q,B as F,aa as X,aM as Y,cl as K,f as _,g as M,ad as J}from"./vendor-icons-ri6cs58t.js";const Z=`"""\r
Topic 11: Naive Bayes\r
Script 1: GaussianNB for Continuous Feature Classification\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.naive_bayes import GaussianNB\r
from sklearn.metrics import accuracy_score\r
\r
# Features: [Height (cm), Weight (kg)] -> Target: 0 (Class A / Athlete) / 1 (Class B / General)\r
X_train = np.array([\r
    [175.0, 70.0],\r
    [180.0, 78.0],\r
    [185.0, 82.0],\r
    [190.0, 88.0],\r
    [155.0, 50.0],\r
    [160.0, 54.0],\r
    [165.0, 60.0],\r
    [170.0, 62.0]\r
])\r
y_train = np.array([0, 0, 0, 0, 1, 1, 1, 1])\r
\r
# Initialize and fit Gaussian Naive Bayes\r
gnb = GaussianNB()\r
gnb.fit(X_train, y_train)\r
\r
print("--- GaussianNB Learned Parameters ---")\r
print("Class Priors (class_prior_):", gnb.class_prior_)\r
print("Per-class Feature Means (theta_):\\n", gnb.theta_)\r
print("Per-class Feature Variances (var_):\\n", gnb.var_)\r
\r
# Predict on new query: [Height: 182cm, Weight: 76kg]\r
X_new = np.array([[182.0, 76.0]])\r
pred_class = gnb.predict(X_new)[0]\r
pred_prob = gnb.predict_proba(X_new)[0]\r
\r
print(f"\\nQuery: Height=182cm, Weight=76kg")\r
print(f"Predicted Class: {pred_class} ({'Athlete' if pred_class==0 else 'General'})")\r
print(f"Posterior Probabilities: P(Athlete)={pred_prob[0]*100:.2f}%, P(General)={pred_prob[1]*100:.2f}%")\r
`,ee=`"""\r
Topic 11: Naive Bayes\r
Script 2: Comparing GaussianNB, MultinomialNB, and BernoulliNB\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.naive_bayes import GaussianNB, MultinomialNB, BernoulliNB\r
\r
# 1. GaussianNB: Continuous numerical features (assumes Gaussian normal distribution)\r
X_continuous = np.array([[1.5, 3.2], [2.1, 4.0], [5.8, 8.9], [6.2, 9.4]])\r
y_cont = np.array([0, 0, 1, 1])\r
gnb = GaussianNB().fit(X_continuous, y_cont)\r
print("1. GaussianNB fitted successfully on continuous measurements.")\r
\r
# 2. MultinomialNB: Discrete integer counts (e.g. Word count frequencies in text classification)\r
# [Count of 'free', Count of 'money', Count of 'python']\r
X_counts = np.array([\r
    [5, 4, 0], # Spam\r
    [4, 3, 0], # Spam\r
    [0, 0, 8], # Ham\r
    [1, 0, 6]  # Ham\r
])\r
y_text = np.array([1, 1, 0, 0])\r
mnb = MultinomialNB(alpha=1.0) # Laplace smoothing\r
mnb.fit(X_counts, y_text)\r
print("2. MultinomialNB fitted successfully on discrete word counts.")\r
\r
# 3. BernoulliNB: Binary boolean features (Word presence/absence: 1 if word exists, 0 otherwise)\r
X_binary = np.array([\r
    [1, 1, 0],\r
    [1, 1, 0],\r
    [0, 0, 1],\r
    [0, 0, 1]\r
])\r
bnb = BernoulliNB().fit(X_binary, y_text)\r
print("3. BernoulliNB fitted successfully on binary indicator features.")\r
`,se=`"""\r
Topic 11: Naive Bayes\r
Script 3: Custom Class Priors & Incremental Partial Fitting\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.naive_bayes import GaussianNB\r
\r
# Incremental batch learning with partial_fit()\r
# Useful when datasets exceed available RAM (Out-of-core learning)\r
gnb = GaussianNB()\r
\r
# Batch 1\r
X_batch1 = np.array([[1.0, 2.0], [2.0, 1.0], [8.0, 9.0]])\r
y_batch1 = np.array([0, 0, 1])\r
classes = np.array([0, 1])\r
\r
# Initial partial fit requires passing all possible class labels\r
gnb.partial_fit(X_batch1, y_batch1, classes=classes)\r
print(f"Batch 1 processed. Samples seen: {gnb.class_count_}")\r
\r
# Batch 2\r
X_batch2 = np.array([[1.5, 2.5], [9.0, 8.5], [7.5, 8.0]])\r
y_batch2 = np.array([0, 1, 1])\r
gnb.partial_fit(X_batch2, y_batch2)\r
\r
print(f"Batch 2 processed. Total samples seen: {gnb.class_count_}")\r
print(f"Updated means (theta_):\\n{gnb.theta_}")\r
print(f"Updated class priors: {gnb.class_prior_}")\r
`,W=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 11 - GAUSSIANNAIVEBAYES (GAUSSIANNB)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. THEORETICAL FOUNDATION: BAYES' THEOREM\r
--------------------------------------------------------------------------------\r
Bayes' Rule calculates the posterior probability of class $C_k$ given feature vector $X = (x_1, x_2, ..., x_n)$:\r
    $P(C_k | X) = \\frac{P(X | C_k) \\cdot P(C_k)}{P(X)}$\r
\r
Where:\r
- $P(C_k | X)$: Posterior Probability (what we want to predict).\r
- $P(C_k)$: Prior Probability of class $C_k$ (prevalence in training data).\r
- $P(X | C_k)$: Likelihood of observing features $X$ given class $C_k$.\r
- $P(X)$: Marginal Evidence (normalization constant).\r
\r
2. THE "NAIVE" CONDITIONAL INDEPENDENCE ASSUMPTION\r
--------------------------------------------------------------------------------\r
The algorithm is called "naive" because it assumes that all features $x_1, x_2, ..., x_n$ are mutually conditionally independent given the class:\r
    $P(X | C_k) = P(x_1 | C_k) \\cdot P(x_2 | C_k) \\cdots P(x_n | C_k) = \\prod_{i=1}^n P(x_i | C_k)$\r
\r
Even though this independence assumption is rarely 100% true in real life, Naive Bayes performs remarkably well in practice, especially for high-dimensional text classification and spam filtering.\r
\r
3. GAUSSIAN NAIVE BAYES (GAUSSIANNB)\r
--------------------------------------------------------------------------------\r
For continuous numeric features, GaussianNB assumes feature values for class $C_k$ follow a 1D Normal (Gaussian) distribution:\r
    $P(x_i | C_k) = \\frac{1}{\\sqrt{2\\pi \\sigma_{ki}^2}} \\exp\\left( -\\frac{(x_i - \\mu_{ki})^2}{2\\sigma_{ki}^2} \\right)$\r
\r
Learned Attributes:\r
- \`gnb.theta_\`: Array of shape (n_classes, n_features) holding class-conditional means ($\\mu_{ki}$).\r
- \`gnb.var_\`: Array of shape (n_classes, n_features) holding class-conditional variances ($\\sigma_{ki}^2$).\r
- \`gnb.class_prior_\`: Array of shape (n_classes,) holding probability priors $P(C_k)$.\r
\r
4. NAIVE BAYES VARIANTS FAMILY\r
--------------------------------------------------------------------------------\r
| Model Variant | Input Feature Type | Primary Real-World Application |\r
|---|---|---|\r
| \`GaussianNB\` | Continuous real numbers (Float) | Sensor data, physical measurements, medical stats |\r
| \`MultinomialNB\` | Discrete integer word counts | Text classification, TF-IDF / Bag-of-Words |\r
| \`BernoulliNB\` | Binary flags (0 or 1, Yes/No) | Short document classification, presence/absence |\r
| \`CategoricalNB\` | Categorical integer codes | Tabular survey data with nominal columns |\r
\r
5. KEY ADVANTAGES\r
--------------------------------------------------------------------------------\r
- Ultra-fast training ($O(N \\cdot D)$) and prediction.\r
- Requires very little training data compared to deep neural nets.\r
- Supports incremental batch updates via \`.partial_fit()\`, making it ideal for streaming and out-of-core pipelines.\r
================================================================================\r
`,w=[{id:1,question:"Why is the Naive Bayes algorithm referred to as 'naive'?",options:["Because it does not utilize any mathematical equations","Because it naively assumes that all input features are conditionally independent given the class label","Because it requires all training samples to have equal target values","Because it ignores training data and makes random guesses"],correctAnswer:1,explanation:"Naive Bayes makes the strong (often simplistic/naive) assumption that each feature is statistically independent of every other feature given the class label, allowing joint likelihoods to be computed simply as the product of individual marginal likelihoods."},{id:2,question:"Which parameters does `GaussianNB` learn and store from the training data for each class and feature?",options:["Linear regression slope and bias","The class-conditional Mean (`theta_`) and Variance (`var_`) of the Gaussian distribution","K-means cluster centroids","Decision tree split thresholds"],correctAnswer:1,explanation:"For each class and feature, GaussianNB estimates the normal distribution parameters: the mean (`theta_`) and the variance (`var_`), along with class prior probabilities (`class_prior_`)."},{id:3,question:"Which Naive Bayes classifier is specifically intended for discrete word count vectors (e.g. TF-IDF or Bag-of-Words in spam filtering)?",options:["GaussianNB","MultinomialNB","BernoulliNB","ContinuousNB"],correctAnswer:1,explanation:"MultinomialNB is designed for multinomially distributed data, making it standard for word count frequencies and document term frequency representations."},{id:4,question:"What method in `GaussianNB` enables streaming / out-of-core online learning without loading the entire dataset into memory at once?",options:[".fit_stream()",".partial_fit()",".online_train()",".step_update()"],correctAnswer:1,explanation:"`partial_fit(X_batch, y_batch, classes=...)` incrementally updates the running count, mean, and variance arrays across successive batches of data without retraining from scratch."}];function ae(){const[n,m]=l.useState("interactive"),[u,O]=l.useState(0),[k,B]=l.useState(!1),[r,L]=l.useState(172),[h,H]=l.useState(.5),g=182,c=6,N=162,d=7,[p,C]=l.useState({}),[o,A]=l.useState(!1),x=[{name:"01_gaussian_nb_basics.py",code:Z},{name:"02_naive_bayes_variants_comparison.py",code:ee},{name:"03_inspecting_nb_parameters_and_priors.py",code:se}],S=s=>{navigator.clipboard.writeText(s),B(!0),setTimeout(()=>B(!1),2e3)},R=(s,t)=>{o||C(a=>({...a,[s]:t}))},D=()=>{let s=0;return w.forEach(t=>{p[t.id]===t.correctAnswer&&s++}),s},b=(s,t,a)=>{const v=1/(a*Math.sqrt(2*Math.PI)),i=-.5*Math.pow((s-t)/a,2);return v*Math.exp(i)},y=b(r,g,c),j=b(r,N,d),P=1-h,$=y*h,G=j*P,T=$+G||1e-5,I=$/T*100,z=G/T*100,Q=I>=50?"Athlete (Class 0)":"General (Class 1)";return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-xl text-purple-400 border border-purple-500/30",children:e.jsx(V,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20",children:"Topic 11 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.naive_bayes.GaussianNB"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Gaussian Naive Bayes & Probabilistic Inference"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Explore probabilistic classification driven by Bayes' Theorem and Gaussian normal likelihoods. Observe how class priors (",e.jsx("code",{className:"text-purple-300 font-mono",children:"class_prior_"}),") and continuous distribution curves (",e.jsx("code",{className:"text-purple-300 font-mono",children:"theta_"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"var_"}),") shape posterior probabilities."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="interactive"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(U,{className:"w-4 h-4"}),"Gaussian Likelihood Studio"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="code"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(q,{className:"w-4 h-4"}),"Python Code Lab (",x.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="notes"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(F,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="quiz"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(X,{className:"w-4 h-4"}),"Knowledge Check"]})]}),n==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(Y,{className:"w-4 h-4 text-purple-400"}),"Inference Query & Class Priors"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Query Height (x):"}),e.jsxs("span",{className:"font-mono text-purple-300 font-bold",children:[r," cm"]})]}),e.jsx("input",{type:"range",min:"145",max:"200",value:r,onChange:s=>L(Number(s.target.value)),className:"w-full accent-purple-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Prior P(Athlete):"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[(h*100).toFixed(0),"% (General: ",(P*100).toFixed(0),"%)"]})]}),e.jsx("input",{type:"range",min:"0.1",max:"0.9",step:"0.05",value:h,onChange:s=>H(Number(s.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2.5 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-semibold font-sans",children:"Bayes Step-by-Step Breakdown:"}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"1. P(x | Athlete) Likelihood:"}),e.jsx("span",{className:"text-emerald-400",children:y.toFixed(4)})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"2. P(x | General) Likelihood:"}),e.jsx("span",{className:"text-sky-400",children:j.toFixed(4)})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-900 flex justify-between text-slate-200",children:[e.jsx("span",{className:"font-sans font-bold",children:"Posterior P(Athlete | x):"}),e.jsxs("span",{className:"text-emerald-300 font-bold text-sm",children:[I.toFixed(1),"%"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-200",children:[e.jsx("span",{className:"font-sans font-bold",children:"Posterior P(General | x):"}),e.jsxs("span",{className:"text-sky-300 font-bold text-sm",children:[z.toFixed(1),"%"]})]})]}),e.jsxs("div",{className:"mt-4 p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Final Classification:"}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full font-bold font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30",children:Q})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-semibold font-sans",children:"Learned Class Gaussians:"}),e.jsx("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800/80 text-emerald-300",children:e.jsxs("div",{children:["Athlete: μ = ",g,"cm, σ = ",c,"cm (var = ",c*c,")"]})}),e.jsx("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800/80 text-sky-300",children:e.jsxs("div",{children:["General: μ = ",N,"cm, σ = ",d,"cm (var = ",d*d,")"]})})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(K,{className:"w-4 h-4 text-purple-400"}),"Class Gaussian Likelihood Curves"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"● General (Sky) | ● Athlete (Emerald)"})]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-4 border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"140 0 70 200",className:"w-full h-[300px]",children:[e.jsx("line",{x1:"140",y1:"180",x2:"210",y2:"180",stroke:"#334155",strokeWidth:"0.8"}),[150,160,170,180,190,200].map(s=>e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:"178",x2:s,y2:"182",stroke:"#64748b",strokeWidth:"0.6"}),e.jsx("text",{x:s,y:"192",fill:"#94a3b8",fontSize:"3.5",textAnchor:"middle",fontFamily:"monospace",children:s})]},s)),(()=>{const s=[];for(let t=140;t<=210;t+=1){const a=180-b(t,N,d)*2600;s.push(`${t},${a}`)}return e.jsx("polyline",{fill:"none",stroke:"#0284c7",strokeWidth:"1.5",points:s.join(" ")})})(),(()=>{const s=[];for(let t=140;t<=210;t+=1){const a=180-b(t,g,c)*2600;s.push(`${t},${a}`)}return e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"1.5",points:s.join(" ")})})(),(()=>{const s=180-y*2600,t=180-j*2600;return e.jsxs("g",{children:[e.jsx("line",{x1:r,y1:"20",x2:r,y2:"180",stroke:"#c084fc",strokeWidth:"1",strokeDasharray:"2 2"}),e.jsx("circle",{cx:r,cy:s,r:"1.8",fill:"#10b981"}),e.jsx("circle",{cx:r,cy:t,r:"1.8",fill:"#0284c7"}),e.jsxs("text",{x:r,y:"15",fill:"#e9d5ff",fontSize:"3.8",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:["x = ",r,"cm"]})]})})()]})}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-2 text-center",children:"The vertical purple line samples the Gaussian probability densities $P(x|General)$ and $P(x|Athlete)$ to form the joint evidence."})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Bayes Theorem in Action:"}),"Even if $x=172\\text",cm,"$ produces a slightly higher likelihood under the Athlete curve, shifting the Prior $P(Athlete)$ down to 20% will overturn the decision to General. Prior belief matters!"]})]})]})}),n==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:x.map((s,t)=>e.jsx("button",{onClick:()=>O(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${u===t?"bg-purple-600 text-white shadow-md shadow-purple-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:x[u].name}),e.jsx("button",{onClick:()=>S(x[u].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-400 transition-colors",children:k?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:x[u].code})]})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(F,{className:"w-5 h-5 text-purple-400"}),"Classroom Revision Notes: GaussianNB"]}),e.jsxs("button",{onClick:()=>S(W),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-400",children:[k?e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:W})]}),n==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(X,{className:"w-5 h-5 text-purple-400"}),"Topic 11 Quiz: Naive Bayes"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of Bayes' theorem, Gaussian parameters, and Naive Bayes variants."})]}),o&&e.jsxs("div",{className:"px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-purple-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[D()," / ",w.length]})]})]}),e.jsx("div",{className:"space-y-6",children:w.map((s,t)=>{p[s.id];const a=p[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((v,i)=>{const E=p[s.id]===i;let f="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return o?i===s.correctAnswer?f="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":E&&!a&&(f="bg-rose-500/20 border-rose-500/50 text-rose-200"):E&&(f="bg-purple-500/20 border-purple-500/50 text-purple-200"),e.jsxs("button",{onClick:()=>R(s.id,i),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${f}`,children:[e.jsx("span",{children:v}),o&&i===s.correctAnswer&&e.jsx(_,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},i)})}),o&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-purple-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:o?e.jsxs("button",{onClick:()=>{C({}),A(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(J,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>A(!0),disabled:Object.keys(p).length===0,className:"px-6 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-purple-600/20",children:"Submit Answers"})})]})})]})]})}export{ae as default};

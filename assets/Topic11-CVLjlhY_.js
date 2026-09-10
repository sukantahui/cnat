import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a0 as w,S as D,k as I,B as _,aa as S,cy as B,f as C,g as k}from"./vendor-icons-DFC0rBCP.js";const q=`"""\r
Topic 11: Worked Example 1 - End-to-End Z-Score Outlier Pipeline\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Real-world scenario: Real Estate Housing Price per Sq.Ft. in Barrackpore & Kolkata\r
# Raw dataset containing genuine home sales and erroneous typing entries (e.g. ₹95,000/sq.ft typo)\r
raw_prices_sqft = np.array([\r
    3200, 3450, 3100, 3600, 3300, 3550, 3250, 3400, \r
    95000, # Typo outlier entry\r
    3350, 3150, 3500, 3650, \r
    150    # Typo entry (missing zero)\r
])\r
\r
print("--- Worked Example: Real Estate Anomaly Detection ---")\r
print(f"Total Properties Collected : {len(raw_prices_sqft)}")\r
print(f"Raw Mean Price / Sq.Ft.     : \\u20b9{np.mean(raw_prices_sqft):,.2f} (Distorted by anomalies!)")\r
\r
# 1. Compute Z-scores using scipy.stats.zscore\r
z_scores = stats.zscore(raw_prices_sqft)\r
\r
# 2. Filter outliers using 3-sigma standard rule (|Z| > 3.0)\r
outlier_mask = np.abs(z_scores) > 2.5\r
clean_prices = raw_prices_sqft[~outlier_mask]\r
flagged_outliers = raw_prices_sqft[outlier_mask]\r
\r
print(f"\\nFlagged Outliers (|Z| > 2.5): {flagged_outliers.tolist()}")\r
print(f"Cleaned Dataset Count       : {len(clean_prices)} homes")\r
print(f"Cleaned Mean Price / Sq.Ft. : \\u20b9{np.mean(clean_prices):,.2f}")\r
print(f"Cleaned Std Dev             : \\u20b9{np.std(clean_prices):,.2f}")\r
`,$=`"""\r
Topic 11: Multi-Column Z-Score Data Cleaning Matrix\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# 2D Feature Matrix: [Income in ₹ Lakhs, Credit Score (300-900)]\r
customer_data = np.array([\r
    [6.5, 750],\r
    [8.0, 780],\r
    [5.2, 710],\r
    [7.1, 740],\r
    [95.0, 760], # Outlier in Income\r
    [6.8, 120],  # Outlier in Credit Score\r
    [7.5, 770]\r
])\r
\r
# scipy.stats.zscore across axis=0 standardizes each column independently\r
z_matrix = stats.zscore(customer_data, axis=0)\r
\r
print("--- 2D Multi-Feature Z-Score Matrix ---")\r
print("Standardized Z-Score Matrix:")\r
print(np.round(z_matrix, 2))\r
\r
# Row is an outlier if ANY feature has |Z| > 2.0\r
outlier_rows = (np.abs(z_matrix) > 2.0).any(axis=1)\r
clean_customers = customer_data[~outlier_rows]\r
\r
print(f"\\nOriginal Samples: {len(customer_data)}")\r
print(f"Clean Samples   : {len(clean_customers)}")\r
print("Clean Customers Matrix:\\n", clean_customers)\r
`,W=`"""\r
Topic 11: Production Real-Time Anomaly Scoring Function\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
class LiveZScoreAnomalyDetector:\r
    def __init__(self, threshold=3.0):\r
        self.threshold = threshold\r
        self.mean_ = None\r
        self.std_ = None\r
\r
    def fit(self, baseline_data):\r
        self.mean_ = np.mean(baseline_data)\r
        self.std_ = np.std(baseline_data)\r
        print(f"Detector Calibrated: Baseline Mean={self.mean_:.2f}, Std={self.std_:.2f}")\r
\r
    def predict(self, new_value):\r
        if self.std_ == 0:\r
            return False, 0.0\r
        z = (new_value - self.mean_) / self.std_\r
        is_anomaly = abs(z) > self.threshold\r
        return is_anomaly, z\r
\r
# Calibration on regular server traffic\r
detector = LiveZScoreAnomalyDetector(threshold=2.5)\r
baseline_latency_ms = [45, 48, 52, 47, 50, 49, 53, 46, 51, 48]\r
detector.fit(baseline_latency_ms)\r
\r
# Real-time incoming network requests\r
test_pings = [49, 55, 140, 48, 220]\r
for ping in test_pings:\r
    flag, score = detector.predict(ping)\r
    status = "🚨 ALERT (Anomaly)" if flag else "✅ Normal"\r
    print(f"Ping: {ping:>3}ms | Z-score: {score:>+5.2f} | Status: {status}")\r
`,z=`================================================================================\r
SCIPY OVERVIEW: TOPIC 11 - WORKED EXAMPLE 1: COMPUTING Z-SCORES WITH SCIPY\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. STEP-BY-STEP OUTLIER FILTERING WORKFLOW:\r
--------------------------------------------------------------------------------\r
1. Collect raw numerical training feature matrix $X$.\r
2. Compute column-wise or feature-wise z-scores using \`scipy.stats.zscore(X, axis=0)\`.\r
3. Establish a standard statistical threshold:\r
   - $|Z| > 2.0$ : Aggressive cleaning (filters top ~5% of distribution).\r
   - $|Z| > 2.5$ : Moderate balanced threshold (filters top ~1.2%).\r
   - $|Z| > 3.0$ : Conservative 3-sigma standard rule (filters top ~0.27%).\r
4. Construct boolean mask: \`outliers = np.abs(z_scores) > threshold\`.\r
5. Remove corrupted entries: \`clean_X = X[~outliers]\`.\r
\r
2. REAL-WORLD DATA ENGINEERING BENEFITS:\r
--------------------------------------------------------------------------------\r
- Prevents gradient explosions in Deep Learning.\r
- Eliminates severe leverage points in Ordinary Least Squares (OLS) Linear Regression.\r
- Stabilizes K-Means centroid positions (which are sensitive to distant outliers).\r
`,f=[{id:1,question:"When computing z-scores across a 2D dataset matrix with `scipy.stats.zscore(matrix, axis=0)`, what does `axis=0` specify?",options:["Compute z-scores across columns (each feature standardized independently)","Compute z-scores across rows","Compute a single z-score for the entire table","Sort the table in ascending order"],correctAnswer:0,explanation:"`axis=0` calculates the mean and standard deviation down each column, ensuring that each feature is normalized independently on its own scale."},{id:2,question:"Why is outlier removal via Z-Score filtering crucial before training a Linear Regression model?",options:["Because Python code will not compile with outliers","Because extreme outliers exert disproportionate leverage on the Mean Squared Error loss function, distorting slope and intercept coefficients","Because outliers increase hard drive storage","Because Linear Regression only works with numbers between 0 and 1"],correctAnswer:1,explanation:"OLS minimizes squared errors $(y - hat{y})^2$. Extreme outliers produce massive squared penalties, pivoting regression planes away from the true data trend."},{id:3,question:"What is the standard conservative threshold often used with Z-Scores for detecting anomalies under the 3-sigma empirical rule?",options:["|Z| > 0.5","|Z| > 1.0","|Z| > 3.0","|Z| > 10.0"],correctAnswer:2,explanation:"Under the empirical rule, 99.73% of normal data falls within ±3 standard deviations. Values exceeding $|Z| > 3.0$ are statistically anomalous."}],E=[{id:1,location:"Barrackpore Sadar Bazar",price:3200},{id:2,location:"Chandan Pukur Station Road",price:3450},{id:3,location:"Shyamnagar Ghoshpara",price:3100},{id:4,location:"Ichapur Main Road",price:3600},{id:5,location:"Barrackpore River View",price:3300},{id:6,location:"Naihati Anandapuri",price:3550},{id:7,location:"Titagarh BT Road",price:3250},{id:8,location:"Kolkata Salt Lake Extension",price:95e3},{id:9,location:"Palta Old Market",price:3400},{id:10,location:"Barrackpore Cantonment",price:3350},{id:11,location:"Shyamnagar Feeder Rd",price:150},{id:12,location:"Ichapur Rifle Factory Colony",price:3500}];function V(){const[l,R]=i.useState("interactive"),[m,T]=i.useState(0),[d,g]=i.useState(!1),[p,M]=i.useState(2),[N,A]=i.useState({}),[n,P]=i.useState(!1),h=[{name:"01_worked_example_zscore_pipeline.py",code:q},{name:"02_multivariate_zscore_filtering.py",code:$},{name:"03_production_anomaly_detector.py",code:W}],j=t=>{navigator.clipboard.writeText(t),g(!0),setTimeout(()=>g(!1),2e3)},L=(t,s)=>{n||A(r=>({...r,[t]:s}))},F=()=>{let t=0;return f.forEach(s=>{N[s.id]===s.correctAnswer&&t++}),t},c=E.map(t=>t.price),u=c.reduce((t,s)=>t+s,0)/c.length,y=Math.sqrt(c.reduce((t,s)=>t+Math.pow(s-u,2),0)/c.length),b=E.map(t=>{const s=y>0?(t.price-u)/y:0,r=Math.abs(s)>p;return{...t,zScore:s,isOutlier:r}}),a=b.filter(t=>!t.isOutlier),v=a.length>0?a.reduce((t,s)=>t+s.price,0)/a.length:0,O=a.length>1?Math.sqrt(a.reduce((t,s)=>t+Math.pow(s.price-v,2),0)/a.length):0;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(w,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 11"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Worked Example 1: Computing Z-Scores with SciPy"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["End-to-end data cleaning and outlier filtering on real-estate property valuations in North 24 Parganas using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"scipy.stats.zscore"}),"."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Pipeline Studio",icon:D},{id:"code",label:"Python Code Lab",icon:I},{id:"notes",label:"Revision Notes",icon:_},{id:"quiz",label:"Knowledge Check",icon:S}].map(t=>{const s=t.icon,r=l===t.id;return e.jsxs("button",{onClick:()=>R(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${r?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})]}),l==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(w,{className:"w-4 h-4"}),e.jsxs("span",{children:["Outlier Filter Threshold (|Z| > ",p.toFixed(1),")"]})]}),e.jsx("div",{className:"flex gap-2",children:[1.5,2,2.5,3].map(t=>e.jsxs("button",{onClick:()=>M(t),className:`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${p===t?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400 hover:text-white"}`,children:["|Z| > ",t.toFixed(1)]},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-rose-900/40",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Raw Mean Price / Sq.Ft."}),e.jsxs("div",{className:"text-lg font-bold text-rose-400 font-mono mt-0.5",children:["₹",u.toLocaleString("en-IN",{maximumFractionDigits:0})]}),e.jsx("span",{className:"text-[10px] text-rose-500",children:"Distorted by typos!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-emerald-900/40",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Cleaned Mean Price"}),e.jsxs("div",{className:"text-lg font-bold text-emerald-400 font-mono mt-0.5",children:["₹",v.toLocaleString("en-IN",{maximumFractionDigits:0})]}),e.jsx("span",{className:"text-[10px] text-emerald-400",children:"True market trend"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Cleaned Std Dev"}),e.jsxs("div",{className:"text-lg font-bold text-teal-400 font-mono mt-0.5",children:["₹",O.toLocaleString("en-IN",{maximumFractionDigits:0})]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Reduced variance"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Filtered Outliers"}),e.jsxs("div",{className:"text-lg font-bold text-amber-400 font-mono mt-0.5",children:[b.length-a.length," entries"]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:[a.length," valid rows retained"]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(B,{className:"w-4 h-4"}),e.jsx("span",{children:"Real Estate Feature Matrix Inspection"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400",children:[e.jsx("th",{className:"py-2.5 px-3",children:"#"}),e.jsx("th",{className:"py-2.5 px-3",children:"Property Locality"}),e.jsx("th",{className:"py-2.5 px-3 text-right",children:"Price (₹/sq.ft)"}),e.jsx("th",{className:"py-2.5 px-3 text-right",children:"Computed Z-Score"}),e.jsx("th",{className:"py-2.5 px-3 text-center",children:"Pipeline Verdict"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:b.map(t=>e.jsxs("tr",{className:`transition-colors ${t.isOutlier?"bg-rose-950/30 text-rose-200":"hover:bg-slate-800/50 text-slate-300"}`,children:[e.jsx("td",{className:"py-2.5 px-3 text-slate-500",children:t.id}),e.jsx("td",{className:"py-2.5 px-3 font-sans font-medium text-white",children:t.location}),e.jsxs("td",{className:"py-2.5 px-3 text-right font-bold",children:["₹",t.price.toLocaleString("en-IN")]}),e.jsxs("td",{className:"py-2.5 px-3 text-right",children:[t.zScore>0?`+${t.zScore.toFixed(2)}`:t.zScore.toFixed(2),"σ"]}),e.jsx("td",{className:"py-2.5 px-3 text-center",children:t.isOutlier?e.jsx("span",{className:"px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-bold",children:"OUTLIER FLAGGED"}):e.jsx("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold",children:"VALID SAMPLE"})})]},t.id))})]})})]})]}),l==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:h.map((t,s)=>e.jsx("button",{onClick:()=>T(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${m===s?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:t.name},s))}),e.jsxs("button",{onClick:()=>j(h[m].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[d?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:d?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:h[m].code})})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>j(z),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[d?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:d?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:z})]}),l==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),n&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",F()," / ",f.length]})]}),e.jsx("div",{className:"space-y-6",children:f.map((t,s)=>{const r=N[t.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[s+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.options.map((Z,o)=>{let x="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return r===o&&(x="bg-emerald-950 border-emerald-500 text-white"),n&&(o===t.correctAnswer?x="bg-emerald-900/80 border-emerald-500 text-white font-semibold":r===o&&r!==t.correctAnswer&&(x="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>L(t.id,o),className:`p-3 rounded-lg border text-left text-xs transition-all ${x}`,children:Z},o)})}),n&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:t.explanation})]})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>P(!n),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:n?"Reset Quiz":"Submit Answers"})})]})]})})}export{V as default};

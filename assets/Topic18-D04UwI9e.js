import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as N}from"./PythonFileLoader-DUNJ9gwR.js";import{F as S}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as A}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const T=`"""\r
==============================================================================\r
Topic 18: Value Counts and Unique Values in Pandas\r
Script 01: Value Counts, Relative Frequencies & Imbalance Auditing\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
# Student demographic and evaluation records\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Aniket", "Priyanka"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Barrackpore", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore", np.nan, "Shyamnagar"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "CSE", "CSE", "Science"],\r
    "Grade": ["A", "A+", "B", "A", "B", "A+", "A", "A", "A", "A+"]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. INITIAL DATASET")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Raw Frequency Counts with Series.value_counts()\r
# --------------------------------------------------------------------------\r
section("2. RAW FREQUENCY TALLIES (Series.value_counts())")\r
dept_counts = df["Department"].value_counts()\r
print("Students per Department:")\r
print(dept_counts)\r
\r
# --------------------------------------------------------------------------\r
# 2. Normalized Proportions & Percentages (normalize=True)\r
# --------------------------------------------------------------------------\r
section("3. RELATIVE FREQUENCIES & PERCENTAGES (normalize=True)")\r
grade_proportions = df["Grade"].value_counts(normalize=True) * 100\r
print("Grade Distribution Percentage (%):")\r
print(grade_proportions.round(1))\r
\r
# --------------------------------------------------------------------------\r
# 3. Auditing Missing Values in Distribution (dropna=False)\r
# --------------------------------------------------------------------------\r
section("4. AUDITING MISSING DATA (dropna=False)")\r
# By default, value_counts ignores NaNs. Setting dropna=False reveals missing counts!\r
loc_counts_with_na = df["Locality"].value_counts(dropna=False)\r
print("Locality Counts (Including NaN entries):")\r
print(loc_counts_with_na)\r
`,C=`"""\r
==============================================================================\r
Topic 18: Value Counts and Unique Values in Pandas\r
Script 02: unique() Arrays, nunique() Cardinality & Feature Profiling\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Aniket", "Priyanka"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Barrackpore", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore", np.nan, "Shyamnagar"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "CSE", "CSE", "Science"],\r
    "Status": ["Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled", "Enrolled"]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Series.unique(): Extracting Distinct Value Array\r
# --------------------------------------------------------------------------\r
section("2. Series.unique() - DISTINCT VALUES ARRAY")\r
unique_localities = df["Locality"].unique()\r
print("Unique Localities Array (including np.nan):")\r
print(unique_localities)\r
print("Type of returned object:", type(unique_localities))\r
\r
# --------------------------------------------------------------------------\r
# 2. Series.nunique(): Counting Distinct Elements\r
# --------------------------------------------------------------------------\r
section("3. Series.nunique() - DISTINCT COUNT (EXCLUDES NaN BY DEFAULT)")\r
n_loc_valid = df["Locality"].nunique(dropna=True)\r
n_loc_all = df["Locality"].nunique(dropna=False)\r
print(f"Unique Localities (dropna=True)  : {n_loc_valid}")\r
print(f"Unique Localities (dropna=False) : {n_loc_all}")\r
\r
# --------------------------------------------------------------------------\r
# 3. DataFrame.nunique(): High-Cardinality & Zero-Variance Feature Audit\r
# --------------------------------------------------------------------------\r
section("4. DataFrame.nunique() - PROFILING ML CARDINALITY ACROSS ALL COLUMNS")\r
cardinality = df.nunique()\r
print("Cardinality per Column:")\r
print(cardinality)\r
\r
# Machine Learning check: Detecting zero-variance (constant) columns to drop\r
constant_cols = [col for col in df.columns if df[col].nunique() <= 1]\r
print(f"\\n=> Zero-variance / Constant columns to drop: {constant_cols}")\r
`,q=`"""\r
==============================================================================\r
Topic 18: Value Counts and Unique Values in Pandas\r
Script 03: Binning Continuous Variables with value_counts(bins=k) & pd.cut()\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
# Student scores on an ML entrance test (0 - 100)\r
scores_data = {\r
    "StudentID": list(range(101, 113)),\r
    "Score": [45, 52, 58, 62, 68, 71, 74, 82, 85, 89, 94, 98]\r
}\r
\r
df = pd.DataFrame(scores_data)\r
section("1. CONTINUOUS NUMERICAL DATA")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Automatic Equal-Width Binning with Series.value_counts(bins=k)\r
# --------------------------------------------------------------------------\r
section("2. AUTOMATIC HISTOGRAM BINNING WITH value_counts(bins=4)")\r
binned_counts = df["Score"].value_counts(bins=4, sort=False)\r
print("Score Distribution Across 4 Equal-Width Interval Bins:")\r
print(binned_counts)\r
\r
# --------------------------------------------------------------------------\r
# 2. Custom Binning with pd.cut() for Domain-Specific Categorization\r
# --------------------------------------------------------------------------\r
section("3. CUSTOM INTERVAL BINNING WITH pd.cut()")\r
bin_edges = [0, 50, 70, 85, 100]\r
bin_labels = ["Needs Improvement", "Average", "Proficient", "Mastery"]\r
\r
df["Performance_Tier"] = pd.cut(df["Score"], bins=bin_edges, labels=bin_labels, right=True)\r
\r
print("Categorized Student Dataset:")\r
print(df[["StudentID", "Score", "Performance_Tier"]])\r
\r
print("\\nFrequency Distribution of Performance Tiers:")\r
print(df["Performance_Tier"].value_counts())\r
`,_=`==============================================================================\r
TOPIC 18 NOTE: VALUE COUNTS AND UNIQUE VALUES IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. Series.value_counts() ESSENTIAL PARAMETERS:\r
   --------------------------------------------------------------------------\r
   - \`normalize=True\`: Computes relative proportions / percentages (sums to 1.0).\r
   - \`dropna=False\`: Includes NaN counts in frequency tally (critical for missing data audits).\r
   - \`sort=True, ascending=False\`: Sorts from most frequent to least frequent.\r
   - \`bins=N\`: Discretizes continuous numeric data into N equal-width interval bins.\r
\r
2. unique() VS nunique():\r
   --------------------------------------------------------------------------\r
   - \`Series.unique()\`: Returns a NumPy array of unique values in order of appearance (includes NaN).\r
   - \`Series.nunique()\`: Returns the scalar integer count of distinct values (excludes NaN by default, set \`dropna=False\` to count NaN).\r
   - \`DataFrame.nunique()\`: Returns a Series showing distinct count per column across the whole table.\r
\r
3. MACHINE LEARNING DATA AUDITING BEST PRACTICES:\r
   --------------------------------------------------------------------------\r
   a) Target Class Imbalance Detection:\r
      - Calling \`y.value_counts(normalize=True)\` tells you if your classification problem is balanced (50/50) or severely imbalanced (98/2), dictating whether SMOTE, class weights, or PR-AUC metrics are necessary.\r
\r
   b) Zero-Variance / Constant Feature Removal:\r
      - Features with \`df[col].nunique() == 1\` provide zero predictive signal and should be dropped immediately.\r
\r
   c) High-Cardinality Feature Identification:\r
      - If a categorical column has thousands of unique strings (e.g. \`df['UserZipCode'].nunique() > 5000\`), one-hot encoding will explode feature dimensions; target encoding or embeddings should be used instead.\r
`,x=[{id:1,question:"How do you calculate the percentage distribution (relative frequencies) of categories in a Series named 'Grade'?",options:["df['Grade'].value_counts(normalize=True) * 100","df['Grade'].percentages()","df['Grade'].frequency_ratio()","df['Grade'].count_percent()"],correctAnswer:"df['Grade'].value_counts(normalize=True) * 100",explanation:"Setting normalize=True in value_counts() scales raw frequencies into proportions between 0.0 and 1.0; multiplying by 100 converts them to percentages."},{id:2,question:"What is the key difference between Series.unique() and Series.nunique()?",options:["unique() returns an array of distinct values, while nunique() returns the integer count of distinct values","unique() only works on numbers, while nunique() works on strings","nunique() modifies the DataFrame in place","unique() deletes duplicates from the DataFrame permanently"],correctAnswer:"unique() returns an array of distinct values, while nunique() returns the integer count of distinct values",explanation:"Series.unique() outputs an array containing all unique elements, whereas Series.nunique() computes the scalar integer count of those unique elements."},{id:3,question:"Why should you pass dropna=False to df['Locality'].value_counts(dropna=False) during exploratory data analysis?",options:["To see the count of missing (NaN) values alongside valid categories","To prevent Pandas from crashing on empty strings","To force NaN values to be replaced with zero","To sort the output in alphabetical order"],correctAnswer:"To see the count of missing (NaN) values alongside valid categories",explanation:"By default, value_counts() excludes missing NaN values. Setting dropna=False explicitly includes the NaN count in the frequency table."},{id:4,question:"In machine learning preprocessing, why is df.nunique() used to find columns with nunique() == 1?",options:["To detect and drop zero-variance / constant features that provide no predictive power to models","To find primary key columns","To calculate accuracy scores","To convert continuous variables to floats"],correctAnswer:"To detect and drop zero-variance / constant features that provide no predictive power to models",explanation:"A column with nunique() == 1 has the exact same value for all rows, offering zero variance and zero statistical signal, so it can safely be pruned."},{id:5,question:"What does df['Age'].value_counts(bins=4) do on a numeric column?",options:["Divides the range of Age into 4 equal-width intervals and counts the observations in each interval","Randomly samples 4 rows from the DataFrame","Deletes all values that are not multiples of 4","Groups ages into 4 separate DataFrames"],correctAnswer:"Divides the range of Age into 4 equal-width intervals and counts the observations in each interval",explanation:"Passing bins=N to value_counts() creates N continuous equal-width interval bins and tallies the count of data points falling into each bin."}],m=[{id:"part1",fileName:"01_value_counts_frequencies_and_normalized.py",title:"1. value_counts(), Normalization & NaNs",badge:"value_counts()",code:T,summary:"Audit categorical frequency distributions, calculate percentage shares with normalize=True, and inspect missing data with dropna=False."},{id:"part2",fileName:"02_unique_nunique_cardinality.py",title:"2. unique(), nunique() & Zero-Variance Pruning",badge:"unique() & nunique()",code:C,summary:"Extract distinct value arrays, profile feature cardinalities across DataFrames, and detect uninformative zero-variance constant features."},{id:"part3",fileName:"03_binning_continuous_variables.py",title:"3. Discretization with value_counts(bins) & pd.cut",badge:"Numeric Binning",code:q,summary:"Discretize continuous numerical features into equal-width interval histograms or custom domain-specific performance tiers."}],g=[{id:101,name:"Debangshu",locality:"Barrackpore",dept:"CSE",grade:"A",score:85},{id:102,name:"Susmita",locality:"Shyamnagar",dept:"CSE",grade:"A+",score:92},{id:103,name:"Swadeep",locality:"Ichapur",dept:"Commerce",grade:"B",score:65},{id:104,name:"Tuhina",locality:"Barrackpore",dept:"Science",grade:"A",score:88},{id:105,name:"Sachin",locality:"Kolkata",dept:"Commerce",grade:"B",score:78},{id:106,name:"Mahima",locality:"Barrackpore",dept:"CSE",grade:"A+",score:90},{id:107,name:"Abhronila",locality:"Titagarh",dept:"Science",grade:"A",score:84},{id:108,name:"Debangshu",locality:"Barrackpore",dept:"CSE",grade:"A",score:80},{id:109,name:"Aniket",locality:null,dept:"CSE",grade:"A",score:82},{id:110,name:"Priyanka",locality:"Shyamnagar",dept:"Science",grade:"A+",score:95}],R=()=>{const[r,l]=o.useState("counts_studio"),[p,f]=o.useState("part1"),[s,v]=o.useState("dept"),[c,h]=o.useState(!1),[d,b]=o.useState(!1),u=m.find(n=>n.id===p)||m[0],y=(()=>{let n={},i=0;if(s==="score_bins"){const a=[{label:"60 - 75 (Passing)",count:0},{label:"76 - 85 (Proficient)",count:0},{label:"86 - 100 (Mastery)",count:0}];return g.forEach(t=>{t.score<=75?a[0].count++:t.score<=85?a[1].count++:a[2].count++,i++}),a.map(t=>({key:t.label,count:t.count,percent:(t.count/i*100).toFixed(1)}))}return g.forEach(a=>{let t=a[s];t===null?d&&(n["NaN (Missing)"]=(n["NaN (Missing)"]||0)+1,i++):(n[t]=(n[t]||0)+1,i++)}),Object.entries(n).map(([a,t])=>({key:a,count:t,percent:(t/i*100).toFixed(1)})).sort((a,t)=>t.count-a.count)})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-amber-900/40 via-yellow-900/30 to-slate-900/60 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full",children:"Distribution & Cardinality"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 18"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Value Counts and Unique Values in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Audit categorical distributions and class balance: examine frequencies with"," ",e.jsx("code",{className:"text-amber-300 bg-slate-800 px-1 py-0.5 rounded",children:"value_counts()"}),", profile cardinalities with"," ",e.jsx("code",{className:"text-amber-300 bg-slate-800 px-1 py-0.5 rounded",children:"nunique()"}),", and discretize continuous variables into bins."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-amber-500/20",children:"📊 #"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>l("counts_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="counts_studio"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📊 Distribution Profiler Studio"}),e.jsxs("button",{onClick:()=>l("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",m.length," Scripts)"]}),e.jsx("button",{onClick:()=>l("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>l("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",x.length,")"]})]}),r==="counts_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Configure Frequency Analysis Target"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Target Column (df[col])"}),e.jsxs("select",{value:s,onChange:n=>v(n.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-amber-300 focus:outline-none focus:border-amber-500 font-mono",children:[e.jsx("option",{value:"dept",children:"Department (Categorical)"}),e.jsx("option",{value:"locality",children:"Locality (Contains NaN)"}),e.jsx("option",{value:"grade",children:"Grade (Classification Target)"}),e.jsx("option",{value:"score_bins",children:"Score (Continuous Binned)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Frequency Representation (normalize=...)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>h(!1),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${c?"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800":"bg-amber-600 text-white shadow-md shadow-amber-600/30"}`,children:"Raw Counts"}),e.jsx("button",{onClick:()=>h(!0),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${c?"bg-amber-600 text-white shadow-md shadow-amber-600/30":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"Percentages (%)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Missing Value Audit (dropna=...)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{disabled:s==="score_bins",onClick:()=>b(!1),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${d?"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800":"bg-amber-600 text-white shadow-md shadow-amber-600/30"} disabled:opacity-50`,children:"dropna=True"}),e.jsx("button",{disabled:s==="score_bins",onClick:()=>b(!0),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${d?"bg-amber-600 text-white shadow-md shadow-amber-600/30":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"} disabled:opacity-50`,children:"dropna=False"})]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-amber-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python command:"}),e.jsx("div",{className:"mt-1 font-bold",children:s==="score_bins"?"df['Score'].value_counts(bins=3)":`df['${s==="dept"?"Department":s==="locality"?"Locality":"Grade"}'].value_counts(normalize=${c?"True":"False"}, dropna=${!d})`})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"📊"})," Value Frequency Distribution Bars"]}),e.jsx("div",{className:"space-y-4",children:y.map(n=>e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-200 font-semibold",children:n.key}),e.jsx("span",{className:"text-amber-300 font-bold",children:c?`${n.percent}%`:`${n.count} students (${n.percent}%)`})]}),e.jsx("div",{className:"w-full bg-slate-950 rounded-full h-3.5 border border-slate-800 overflow-hidden",children:e.jsx("div",{className:"bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500",style:{width:`${n.percent}%`}})})]},n.key))})]}),e.jsx(A,{topic:"Class Imbalance & Cardinality in ML Preprocessing",text:"In machine learning classification, checking df['Target'].value_counts(normalize=True) is the first mandatory sanity check! If one class represents 95% of data, standard accuracy will give a false sense of success. Also, always check df.nunique() across all features: columns with nunique() == 1 offer zero signal, while high-cardinality columns (>1000 unique values) should not be one-hot encoded blindly!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:m.map(n=>e.jsxs("button",{onClick:()=>f(n.id),className:`p-4 rounded-xl text-left border transition-all ${p===n.id?"bg-amber-950/60 border-amber-500 text-white shadow-lg shadow-amber-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-amber-400 uppercase tracking-wider mb-1",children:n.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:n.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:u.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:u.summary})]})}),e.jsx(N,{fileModule:u.code,title:u.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(w,{text:_,title:"Topic 18 Revision Notes: Value Counts & Unique Values"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(S,{questions:x,title:"Topic 18 Knowledge Check: Value Counts & Unique Values"})})]})})};export{R as default};

import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ax as R,S as M,k as P,B as C,aa as k,aM as K,bp as X,f as b,g as O,ad as $}from"./vendor-icons-DFC0rBCP.js";const z=`"""\r
Topic 6: LabelEncoder and OneHotEncoder\r
Script 1: LabelEncoder for 1D Target Labels\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.preprocessing import LabelEncoder\r
\r
# Student exam result classifications\r
raw_grades = ['Pass', 'Distinction', 'Fail', 'Pass', 'Distinction', 'Pass']\r
\r
# Instantiate LabelEncoder\r
le = LabelEncoder()\r
\r
# Fit on unique classes and transform into integer labels (0 to K-1)\r
encoded_grades = le.fit_transform(raw_grades)\r
\r
print("--- Raw Categorical Target ---")\r
print(raw_grades)\r
\r
print("\\n--- Learned Classes (Alphabetically sorted) ---")\r
print("Classes (le.classes_):", le.classes_)\r
\r
print("\\n--- Integer Encoded Output ---")\r
print(encoded_grades)\r
\r
# Decode integers back to text\r
recovered_grades = le.inverse_transform([0, 1, 2, 0])\r
print("\\n--- Inverted back from [0, 1, 2, 0] ---")\r
print(recovered_grades)\r
\r
# WARNING: LabelEncoder is designed ONLY for 1D target vectors (y), NOT 2D feature matrices (X)!\r
`,G=`"""\r
Topic 6: LabelEncoder and OneHotEncoder\r
Script 2: OneHotEncoder for 2D Categorical Features\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.preprocessing import OneHotEncoder\r
\r
# Multi-column categorical student records\r
df_students = pd.DataFrame({\r
    'City': ['Barrackpore', 'Kolkata', 'Shyamnagar', 'Barrackpore'],\r
    'Department': ['CS', 'Math', 'CS', 'Physics']\r
})\r
\r
print("--- Raw Categorical Features (X) ---")\r
print(df_students)\r
\r
# 1. Standard OneHotEncoder with sparse_output=False for dense numpy array\r
ohe = OneHotEncoder(sparse_output=False, handle_unknown='ignore')\r
encoded_matrix = ohe.fit_transform(df_students)\r
\r
# Feature names after one-hot expansion\r
feature_names = ohe.get_feature_names_out(['City', 'Department'])\r
df_encoded = pd.DataFrame(encoded_matrix, columns=feature_names)\r
\r
print("\\n--- One-Hot Encoded Matrix ---")\r
print(df_encoded)\r
\r
# 2. Handling unseen / novel categories during inference\r
unseen_student = pd.DataFrame({\r
    'City': ['Naihati'],      # 'Naihati' was never seen in training\r
    'Department': ['CS']\r
})\r
\r
unseen_encoded = ohe.transform(unseen_student)\r
print("\\n--- Transforming Unseen Category ('Naihati') with handle_unknown='ignore' ---")\r
print(pd.DataFrame(unseen_encoded, columns=feature_names))\r
print("Notice how all City columns are zero for 'Naihati' instead of throwing an error!")\r
`,U=`"""\r
Topic 6: LabelEncoder and OneHotEncoder\r
Script 3: OrdinalEncoder vs OneHotEncoder & ColumnTransformer Workflow\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.preprocessing import OrdinalEncoder, OneHotEncoder, StandardScaler\r
from sklearn.compose import ColumnTransformer\r
\r
# Mixed data: Numerical, Ordinal categorical, Nominal categorical\r
data = pd.DataFrame({\r
    'Student': ['Debangshu', 'Susmita', 'Swadeep', 'Tuhina'],\r
    'Experience_Level': ['Beginner', 'Advanced', 'Intermediate', 'Intermediate'], # Ordinal\r
    'City': ['Barrackpore', 'Kolkata', 'Kolkata', 'Barrackpore'],                # Nominal\r
    'Attendance_Pct': [75.0, 95.0, 80.0, 88.0]                                   # Numeric\r
})\r
\r
print("--- Multi-Type Input Dataset ---")\r
print(data)\r
\r
# Specify explicit hierarchy for OrdinalEncoder\r
ordinal_levels = [['Beginner', 'Intermediate', 'Advanced']]\r
\r
# Build a unified ColumnTransformer\r
preprocessor = ColumnTransformer(\r
    transformers=[\r
        ('ord', OrdinalEncoder(categories=ordinal_levels), ['Experience_Level']),\r
        ('cat', OneHotEncoder(drop='first'), ['City']),\r
        ('num', StandardScaler(), ['Attendance_Pct'])\r
    ],\r
    remainder='drop'\r
)\r
\r
processed_array = preprocessor.fit_transform(data)\r
\r
print("\\n--- ColumnTransformer Processed Array ---")\r
print(processed_array)\r
print("Output Columns: ['Experience_Level(0-2)', 'City_Kolkata(0/1)', 'Attendance_Pct(std)']")\r
`,S=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 6 - LABELENCODER VS ONEHOTENCODER\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. THE FUNDAMENTAL DISTINCTION: TARGET (y) VS FEATURES (X)\r
--------------------------------------------------------------------------------\r
A common mistake among beginner ML practitioners is using LabelEncoder across input feature columns \`X\`.\r
Scikit-learn documentation is unequivocal:\r
- \`LabelEncoder\`: STRICTLY designed for encoding 1D target vector \`y\` (e.g. ['Cat', 'Dog', 'Bird'] -> [0, 1, 2]).\r
- \`OrdinalEncoder\`: Designed for 2D ordinal feature columns \`X\` where an inherent ranking exists (e.g. ['Low', 'Medium', 'High']).\r
- \`OneHotEncoder\`: Designed for 2D nominal feature columns \`X\` where NO mathematical order exists (e.g. ['Barrackpore', 'Kolkata', 'Delhi']).\r
\r
2. ONE-HOT ENCODING (DUMMY ENCODING)\r
--------------------------------------------------------------------------------\r
For a nominal category with $K$ unique levels, OneHotEncoder creates $K$ binary binary (0 or 1) indicator columns.\r
- Why NOT use integer encoding for nominal features?\r
  * If "Barrackpore"=0, "Kolkata"=1, "Delhi"=2, linear models will incorrectly assume:\r
    "Delhi" (2) = 2 * "Kolkata" (1), imposing an artificial arithmetic magnitude.\r
  * Distance calculations (KNN / Euclidean) will be severely distorted.\r
\r
Key Hyperparameters of \`OneHotEncoder\`:\r
- \`sparse_output=False\` (or \`sparse=False\` in older sklearn): Returns a dense numpy array instead of a scipy csr_matrix.\r
- \`drop='first'\`: Drops the first category column per feature to prevent multicollinearity (Dummy Variable Trap in Linear Regression).\r
- \`handle_unknown='ignore'\`: In inference time, if an unseen category appears in test data, it outputs all zeros instead of raising a ValueError.\r
- \`min_frequency\`: Groups infrequent categories into an 'infrequent_sklearn' bin.\r
\r
3. ORDINAL ENCODING\r
--------------------------------------------------------------------------------\r
- When categories possess a natural human hierarchy:\r
  * Education: ['High School', 'Bachelors', 'Masters', 'PhD'] -> [0, 1, 2, 3]\r
  * Customer Tier: ['Bronze', 'Silver', 'Gold', 'Platinum'] -> [0, 1, 2, 3]\r
- Always supply \`categories=[['Bronze', 'Silver', 'Gold', 'Platinum']]\` explicitly to preserve the true semantic hierarchy, otherwise sklearn sorts them alphabetically!\r
\r
4. ENCODER COMPARISON CHEAT SHEET\r
--------------------------------------------------------------------------------\r
| Encoder | Target vs Features | Input Shape | Preserves Order? | Number of New Columns |\r
|---|---|---|---|---|\r
| LabelEncoder | 1D Target (\`y\`) | (n_samples,) | Alphabetical (arbitrary) | 0 (Replaces in place) |\r
| OrdinalEncoder | 2D Features (\`X\`) | (n_samples, n_features) | Custom / Specified list | 0 (Replaces in place) |\r
| OneHotEncoder | 2D Features (\`X\`) | (n_samples, n_features) | None (Independent flags) | +K columns per feature |\r
\r
5. CLASSROOM TIP (Sukanta Hui to Barrackpore Batch)\r
--------------------------------------------------------------------------------\r
"Never feed \`LabelEncoder\` into \`ColumnTransformer\` or use it on input features \`X\`.\r
If you want to preprocess input columns, always choose \`OneHotEncoder\` or \`OrdinalEncoder\`."\r
================================================================================\r
`,g=[{id:1,question:"According to Scikit-learn design guidelines, what is the intended use case for `LabelEncoder`?",options:["Encoding 2D input feature matrices (X) with nominal values","Encoding 1D target vectors (y) for classification labels","Hashing high-cardinality text documents into dense embeddings","Generating dummy binary matrices for linear models"],correctAnswer:1,explanation:"LabelEncoder is explicitly designed to transform 1-dimensional target labels `y` into integer classes (0 to n_classes-1). For input features `X`, `OrdinalEncoder` or `OneHotEncoder` should be used."},{id:2,question:"Why is nominal categorical data (e.g. City: ['Kolkata', 'Delhi', 'Mumbai']) typically encoded using `OneHotEncoder` rather than integer encoding?",options:["Because integer encoding introduces an artificial numerical ordering/magnitude that biases linear and distance-based algorithms","Because Python integers consume more RAM than sparse matrices","Because Decision Trees cannot split on numerical integers","Because OneHotEncoder automatically normalizes the variance to 1"],correctAnswer:0,explanation:"Integer encoding creates an artificial magnitude (e.g. Mumbai=2 > Kolkata=0), implying arithmetic relationships that do not exist. OneHotEncoder creates independent binary columns, eliminating this bias."},{id:3,question:"What parameter in `OneHotEncoder` prevents throwing an exception when an unseen category appears during inference/test time?",options:["ignore_nan=True","handle_unknown='ignore'","allow_novel=True","drop_unseen=True"],correctAnswer:1,explanation:"`handle_unknown='ignore'` instructs OneHotEncoder to set all one-hot encoded columns to 0 when transforming a category that was not present in the training data, avoiding runtime errors."},{id:4,question:"Why is `drop='first'` frequently configured in `OneHotEncoder` when training Linear Regression models?",options:["To speed up execution by dropping 50% of the dataset","To prevent multicollinearity (the dummy variable trap) caused by linearly dependent binary columns","To ensure all matrix rows sum to 1","To automatically remove target outliers"],correctAnswer:1,explanation:"Dropping one dummy column removes linear dependency among the one-hot columns (since the sum of all K dummy columns is 1), preventing multicollinearity issues in linear models."}],Q=[{student:"Debangshu",city:"Barrackpore",tier:"Beginner",result:"Pass"},{student:"Susmita",city:"Kolkata",tier:"Advanced",result:"Distinction"},{student:"Swadeep",city:"Barrackpore",tier:"Intermediate",result:"Pass"},{student:"Tuhina",city:"Shyamnagar",tier:"Intermediate",result:"Distinction"},{student:"Sachin",city:"Kolkata",tier:"Beginner",result:"Fail"}],_=["Barrackpore","Kolkata","Shyamnagar"],T=["Beginner","Intermediate","Advanced"],D=["Distinction","Fail","Pass"];function Z(){const[a,m]=n.useState("interactive"),[x,A]=n.useState(0),[f,v]=n.useState(!1),[r,u]=n.useState("onehot"),[N,H]=n.useState(!1),[L,V]=n.useState("Naihati"),[W,q]=n.useState(!0),[l,j]=n.useState({}),[i,y]=n.useState(!1),d=[{name:"01_label_encoder_demo.py",code:z},{name:"02_one_hot_encoder_demo.py",code:G},{name:"03_ordinal_encoder_and_column_transformer.py",code:U}],w=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},I=(t,s)=>{i||j(o=>({...o,[t]:s}))},F=()=>{let t=0;return g.forEach(s=>{l[s.id]===s.correctAnswer&&t++}),t},p=N?_.slice(1):_;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-violet-500/20 rounded-xl text-violet-400 border border-violet-500/30",children:e.jsx(R,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20",children:"Topic 6 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"LabelEncoder & OneHotEncoder"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Categorical Encoding: Target (y) vs Features (X)"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Demystify the critical architectural difference between encoding 1D target labels (",e.jsx("code",{className:"text-violet-300 font-mono",children:"LabelEncoder"}),") and 2D feature matrices (",e.jsx("code",{className:"text-violet-300 font-mono",children:"OneHotEncoder"})," / ",e.jsx("code",{className:"text-violet-300 font-mono",children:"OrdinalEncoder"}),")."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-violet-400 text-violet-400 bg-violet-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(M,{className:"w-4 h-4"}),"Interactive Encoding Studio"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-violet-400 text-violet-400 bg-violet-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(P,{className:"w-4 h-4"}),"Python Code Lab (",d.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-violet-400 text-violet-400 bg-violet-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(C,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-violet-400 text-violet-400 bg-violet-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(k,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("button",{onClick:()=>u("onehot"),className:`p-4 rounded-xl border text-left transition-all ${r==="onehot"?"bg-violet-500/15 border-violet-500/60 shadow-lg shadow-violet-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"OneHotEncoder"}),e.jsx("span",{className:"text-[10px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded font-mono",children:"Features (X)"})]}),e.jsx("div",{className:"text-xs text-slate-400",children:"Creates binary columns for nominal data (e.g. City). Avoids false mathematical ordinality."})]}),e.jsxs("button",{onClick:()=>u("ordinal"),className:`p-4 rounded-xl border text-left transition-all ${r==="ordinal"?"bg-violet-500/15 border-violet-500/60 shadow-lg shadow-violet-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"OrdinalEncoder"}),e.jsx("span",{className:"text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-mono",children:"Features (X)"})]}),e.jsx("div",{className:"text-xs text-slate-400",children:"Encodes ranked categories (Beginner=0, Intermediate=1, Advanced=2) preserving hierarchy."})]}),e.jsxs("button",{onClick:()=>u("label"),className:`p-4 rounded-xl border text-left transition-all ${r==="label"?"bg-violet-500/15 border-violet-500/60 shadow-lg shadow-violet-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"LabelEncoder"}),e.jsx("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono",children:"Target (y) Only"})]}),e.jsx("div",{className:"text-xs text-slate-400",children:"Strictly for 1D classification targets (e.g. Distinction=0, Fail=1, Pass=2)."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(K,{className:"w-4 h-4 text-violet-400"}),"Encoder Settings & Parameters"]}),r==="onehot"&&e.jsxs("div",{className:"space-y-4 text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-slate-200",children:"drop='first'"}),e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Drops first dummy column to avoid multicollinearity"})]}),e.jsx("input",{type:"checkbox",checked:N,onChange:t=>H(t.target.checked),className:"w-4 h-4 rounded text-violet-600 bg-slate-900 border-slate-700"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("div",{className:"font-semibold text-slate-200",children:"handle_unknown='ignore'"}),e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Simulate unseen category during test time:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400 font-mono",children:"Unseen City:"}),e.jsx("span",{className:"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-mono rounded",children:L})]}),e.jsxs("div",{className:"p-2 bg-slate-900 rounded font-mono text-[11px] text-violet-300",children:["Output: [",p.map(()=>"0").join(", "),"] (all zeros, no crash!)"]})]})]}),r==="ordinal"&&e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400",children:"Explicit Category Ordering:"}),T.map((t,s)=>e.jsxs("div",{className:"flex justify-between items-center py-1 border-b border-slate-900 last:border-0",children:[e.jsx("span",{className:"text-sky-300 font-semibold",children:t}),e.jsxs("span",{className:"text-slate-400",children:["Mapped Integer: ",e.jsx("strong",{className:"text-white",children:s})]})]},t))]}),r==="label"&&e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400",children:"Alphabetical Target Mapping (le.classes_):"}),D.map((t,s)=>e.jsxs("div",{className:"flex justify-between items-center py-1 border-b border-slate-900 last:border-0",children:[e.jsx("span",{className:"text-amber-300 font-semibold",children:t}),e.jsxs("span",{className:"text-slate-400",children:["Class Label: ",e.jsx("strong",{className:"text-white",children:s})]})]},t)),e.jsx("div",{className:"text-[11px] text-rose-400 pt-2 border-t border-slate-900 font-sans",children:"⚠️ DO NOT apply LabelEncoder to multi-column feature matrix X!"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-violet-950/40 to-slate-900 border border-violet-500/20 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Barrackpore Lab Rule:"}),"Use ",e.jsx("code",{className:"text-violet-300 font-mono",children:"OneHotEncoder"})," or ",e.jsx("code",{className:"text-violet-300 font-mono",children:"OrdinalEncoder"})," inside a ",e.jsx("code",{className:"text-violet-300 font-mono",children:"ColumnTransformer"})," for input columns. Reserve ",e.jsx("code",{className:"text-violet-300 font-mono",children:"LabelEncoder"})," solely for classification targets (",e.jsx("code",{className:"text-violet-300 font-mono",children:"y"}),")."]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(X,{className:"w-4 h-4 text-violet-400"}),"Live Encoded Output Representation"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:r.toUpperCase()})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Student"}),r==="onehot"&&e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"p-2.5",children:"Raw City"}),p.map(t=>e.jsxs("th",{className:"p-2.5 text-violet-400",children:["City_",t]},t))]}),r==="ordinal"&&e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"p-2.5",children:"Raw Tier"}),e.jsx("th",{className:"p-2.5 text-sky-400",children:"Ordinal Encoded (0-2)"})]}),r==="label"&&e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"p-2.5",children:"Raw Target (y)"}),e.jsx("th",{className:"p-2.5 text-amber-400",children:"Encoded Target (0-2)"})]})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:Q.map((t,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-2.5 font-sans font-medium text-slate-200",children:t.student}),r==="onehot"&&e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"p-2.5 text-slate-400",children:t.city}),p.map(o=>e.jsx("td",{className:`p-2.5 font-bold ${t.city===o?"text-emerald-400 bg-emerald-500/10":"text-slate-500"}`,children:t.city===o?1:0},o))]}),r==="ordinal"&&e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"p-2.5 text-slate-400",children:t.tier}),e.jsx("td",{className:"p-2.5 text-sky-300 font-bold bg-sky-500/5",children:T.indexOf(t.tier)})]}),r==="label"&&e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"p-2.5 text-slate-400",children:t.result}),e.jsx("td",{className:"p-2.5 text-amber-300 font-bold bg-amber-500/5",children:D.indexOf(t.result)})]})]},s))})]})})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs",children:[e.jsxs("div",{className:"text-slate-400",children:["Input Matrix Shape: ",e.jsx("span",{className:"text-slate-200 font-mono",children:"5 x 1"})]}),e.jsxs("div",{className:"text-slate-400",children:["Encoded Shape:"," ",e.jsx("span",{className:"text-violet-300 font-mono font-bold",children:r==="onehot"?`5 x ${p.length}`:"5 x 1"})]})]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:d.map((t,s)=>e.jsx("button",{onClick:()=>A(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${x===s?"bg-violet-600 text-white shadow-md shadow-violet-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:d[x].name}),e.jsx("button",{onClick:()=>w(d[x].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-400 transition-colors",children:f?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:d[x].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-violet-400"}),"Classroom Revision Notes: LabelEncoder vs OneHotEncoder"]}),e.jsxs("button",{onClick:()=>w(S),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-400",children:[f?e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:S})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(k,{className:"w-5 h-5 text-violet-400"}),"Topic 6 Quiz: Categorical Encoders"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Verify your understanding of dummy columns, ordinal hierarchy, and target label encoding."})]}),i&&e.jsxs("div",{className:"px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-violet-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[F()," / ",g.length]})]})]}),e.jsx("div",{className:"space-y-6",children:g.map((t,s)=>{l[t.id];const o=l[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((B,c)=>{const E=l[t.id]===c;let h="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return i?c===t.correctAnswer?h="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":E&&!o&&(h="bg-rose-500/20 border-rose-500/50 text-rose-200"):E&&(h="bg-violet-500/20 border-violet-500/50 text-violet-200"),e.jsxs("button",{onClick:()=>I(t.id,c),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${h}`,children:[e.jsx("span",{children:B}),i&&c===t.correctAnswer&&e.jsx(b,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},c)})}),i&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-violet-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:i?e.jsxs("button",{onClick:()=>{j({}),y(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx($,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>y(!0),disabled:Object.keys(l).length===0,className:"px-6 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-violet-600/20",children:"Submit Answers"})})]})})]})]})}export{Z as default};

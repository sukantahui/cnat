import{b as x,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as T}from"./PythonFileLoader-DUNJ9gwR.js";import{F as w}from"./FAQTemplate-D_90hN4m.js";import{P as A}from"./PlainTextPrint-yt10TRX1.js";import{T as k}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const I=`"""\r
==============================================================================\r
Topic 22: Worked Example 3 - Grouping Sales by Region\r
Script 01: Transaction Ingestion & Regional Aggregation Metrics\r
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
# Sales transaction logs from commercial retail branches in North 24 Parganas\r
sales_records = {\r
    "OrderID": [501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],\r
    "SalesRep": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Susmita", "Tuhina", "Sachin", "Mahima"],\r
    "Region": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Barrackpore", "Shyamnagar", "Titagarh", "Barrackpore", "Naihati", "Ichapur", "Titagarh", "Barrackpore"],\r
    "Category": ["Laptops", "Smartphones", "Accessories", "Laptops", "Smartphones", "Laptops", "Accessories", "Smartphones", "Smartphones", "Laptops", "Accessories", "Laptops"],\r
    "Units_Sold": [5, 12, 45, 8, 15, 6, 38, 10, 14, 4, 50, 7],\r
    "Revenue_INR": [250000.0, 180000.0, 45000.0, 400000.0, 225000.0, 310000.0, 38000.0, 150000.0, 210000.0, 200000.0, 52000.0, 360000.0]\r
}\r
\r
df = pd.DataFrame(sales_records)\r
section("1. FIRST 6 TRANSACTION RECORDS")\r
print(df.head(6))\r
\r
# --------------------------------------------------------------------------\r
# 1. Grouping by Region: Total Revenue, Total Units, Order Count\r
# --------------------------------------------------------------------------\r
section("2. REGIONAL SALES PERFORMANCE SUMMARY")\r
regional_summary = df.groupby("Region", as_index=False).agg(\r
    Total_Orders=("OrderID", "count"),\r
    Total_Units=("Units_Sold", "sum"),\r
    Total_Revenue_INR=("Revenue_INR", "sum"),\r
    Average_Order_Value=("Revenue_INR", "mean")\r
).sort_values(by="Total_Revenue_INR", ascending=False).reset_index(drop=True)\r
\r
regional_summary["Total_Revenue_INR"] = regional_summary["Total_Revenue_INR"].apply(lambda v: f"₹{v:,.0f}")\r
regional_summary["Average_Order_Value"] = regional_summary["Average_Order_Value"].apply(lambda v: f"₹{v:,.0f}")\r
\r
print(regional_summary)\r
`,L=`"""\r
==============================================================================\r
Topic 22: Worked Example 3 - Grouping Sales by Region\r
Script 02: Multi-Dimensional Pivot Tables (Region vs Product Category)\r
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
sales_records = {\r
    "OrderID": [501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],\r
    "Region": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Barrackpore", "Shyamnagar", "Titagarh", "Barrackpore", "Naihati", "Ichapur", "Titagarh", "Barrackpore"],\r
    "Category": ["Laptops", "Smartphones", "Accessories", "Laptops", "Smartphones", "Laptops", "Accessories", "Smartphones", "Smartphones", "Laptops", "Accessories", "Laptops"],\r
    "Units_Sold": [5, 12, 45, 8, 15, 6, 38, 10, 14, 4, 50, 7],\r
    "Revenue_INR": [250000.0, 180000.0, 45000.0, 400000.0, 225000.0, 310000.0, 38000.0, 150000.0, 210000.0, 200000.0, 52000.0, 360000.0]\r
}\r
\r
df = pd.DataFrame(sales_records)\r
\r
# --------------------------------------------------------------------------\r
# 1. Multi-Column GroupBy (Region & Category)\r
# --------------------------------------------------------------------------\r
section("1. MULTI-COLUMN GROUPBY (Region + Category)")\r
grouped_breakdown = df.groupby(["Region", "Category"])[["Revenue_INR", "Units_Sold"]].sum()\r
print(grouped_breakdown)\r
\r
# --------------------------------------------------------------------------\r
# 2. Pivot Table: Region (Rows) vs Category (Columns) with Margins (Totals)\r
# --------------------------------------------------------------------------\r
section("2. PIVOT TABLE (pd.pivot_table WITH margins=True)")\r
pivot_revenue = pd.pivot_table(\r
    df,\r
    values="Revenue_INR",\r
    index="Region",\r
    columns="Category",\r
    aggfunc="sum",\r
    fill_value=0.0,\r
    margins=True,\r
    margins_name="Total_Region_Revenue"\r
)\r
\r
print("Revenue Breakdown Matrix (INR):")\r
print(pivot_revenue.map(lambda v: f"₹{v:,.0f}"))\r
`,C=`"""\r
==============================================================================\r
Topic 22: Worked Example 3 - Grouping Sales by Region\r
Script 03: Market Share Percentages & Top Sales Representatives\r
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
sales_records = {\r
    "OrderID": [501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],\r
    "SalesRep": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Susmita", "Tuhina", "Sachin", "Mahima"],\r
    "Region": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Barrackpore", "Shyamnagar", "Titagarh", "Barrackpore", "Naihati", "Ichapur", "Titagarh", "Barrackpore"],\r
    "Category": ["Laptops", "Smartphones", "Accessories", "Laptops", "Smartphones", "Laptops", "Accessories", "Smartphones", "Smartphones", "Laptops", "Accessories", "Laptops"],\r
    "Units_Sold": [5, 12, 45, 8, 15, 6, 38, 10, 14, 4, 50, 7],\r
    "Revenue_INR": [250000.0, 180000.0, 45000.0, 400000.0, 225000.0, 310000.0, 38000.0, 150000.0, 210000.0, 200000.0, 52000.0, 360000.0]\r
}\r
\r
df = pd.DataFrame(sales_records)\r
\r
# --------------------------------------------------------------------------\r
# 1. Calculating Regional Share of Grand Total Revenue\r
# --------------------------------------------------------------------------\r
section("1. REGIONAL REVENUE SHARE (%)")\r
total_corp_revenue = df["Revenue_INR"].sum()\r
regional_shares = (\r
    df.groupby("Region")["Revenue_INR"]\r
    .sum()\r
    .transform(lambda r: (r / total_corp_revenue) * 100)\r
    .round(2)\r
    .sort_values(ascending=False)\r
)\r
\r
print(f"Total Corporate Revenue: ₹{total_corp_revenue:,.0f}")\r
print("\\nMarket Share by Region:")\r
for reg, share in regional_shares.items():\r
    print(f"  - {reg:<15}: {share:>6.2f}%")\r
\r
# --------------------------------------------------------------------------\r
# 2. Ranking Top Performing Sales Representatives\r
# --------------------------------------------------------------------------\r
section("2. TOP SALES REPS LEADERBOARD")\r
rep_leaderboard = df.groupby("SalesRep", as_index=False).agg(\r
    Orders_Closed=("OrderID", "count"),\r
    Units_Moved=("Units_Sold", "sum"),\r
    Total_Bookings=("Revenue_INR", "sum")\r
).sort_values(by="Total_Bookings", ascending=False).reset_index(drop=True)\r
\r
rep_leaderboard["Total_Bookings"] = rep_leaderboard["Total_Bookings"].apply(lambda v: f"₹{v:,.0f}")\r
print(rep_leaderboard)\r
`,O="==============================================================================\r\nTOPIC 22 NOTE: WORKED EXAMPLE 3 - GROUPING SALES BY REGION\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. REGIONAL SALES AGGREGATION PATTERNS:\r\n   --------------------------------------------------------------------------\r\n   - Multi-Metric Regional Summary:\r\n     `df.groupby('Region', as_index=False).agg(`\r\n     `    Total_Orders=('OrderID', 'count'),`\r\n     `    Total_Units=('Units_Sold', 'sum'),`\r\n     `    Total_Revenue=('Revenue_INR', 'sum'),`\r\n     `    Avg_Order_Value=('Revenue_INR', 'mean')`\r\n     `).sort_values(by='Total_Revenue', ascending=False)`\r\n\r\n2. PIVOT TABLES (pd.pivot_table) VS GROUPBY:\r\n   --------------------------------------------------------------------------\r\n   - While `df.groupby(['Region', 'Category'])` creates long stacked rows, `pd.pivot_table()` reshapes data into a clean 2D business matrix:\r\n     `pd.pivot_table(`\r\n     `    df,`\r\n     `    values='Revenue_INR',`\r\n     `    index='Region',`\r\n     `    columns='Category',`\r\n     `    aggfunc='sum',`\r\n     `    fill_value=0,`\r\n     `    margins=True,`\r\n     `    margins_name='Grand_Total'`\r\n     `)`\r\n   - `margins=True` automatically computes subtotals and grand totals across both rows and columns.\r\n\r\n3. CALCULATING REGIONAL MARKET SHARE (%):\r\n   --------------------------------------------------------------------------\r\n   - Step 1: Compute grand total revenue `tot = df['Revenue_INR'].sum()`.\r\n   - Step 2: Group by Region and divide:\r\n     `df.groupby('Region')['Revenue_INR'].sum().apply(lambda v: (v / tot) * 100).round(2)`\r\n   - Allows business stakeholders to pinpoint top revenue-generating territories immediately.\r\n",f=[{id:1,question:"What is the primary visual difference between df.groupby(['Region', 'Category']).sum() and pd.pivot_table(df, values='Revenue', index='Region', columns='Category', aggfunc='sum')?",options:["groupby outputs long stacked rows with a MultiIndex, while pivot_table reshapes 'Category' into horizontal columns to form a 2D matrix","groupby runs on the GPU, while pivot_table runs on the CPU","pivot_table only works on text data","groupby automatically deletes all numerical values"],correctAnswer:"groupby outputs long stacked rows with a MultiIndex, while pivot_table reshapes 'Category' into horizontal columns to form a 2D matrix",explanation:"pd.pivot_table transforms distinct values in the 'columns' parameter into horizontal column headers, creating an intuitive 2D grid ideal for executive reporting."},{id:2,question:"What does the 'margins=True' parameter do in pd.pivot_table()?",options:["Automatically adds subtotal and grand total rows and columns to the pivot table","Sets the CSS border margin to 10 pixels","Filters out rows with less than 5% profit margin","Deletes zero-revenue categories"],correctAnswer:"Automatically adds subtotal and grand total rows and columns to the pivot table",explanation:"Setting margins=True in pd.pivot_table adds an 'All' row and column summing the marginal totals across all dimensions."},{id:3,question:"How do you handle cells in a pivot table where a region had zero sales for a particular product category?",options:["Set fill_value=0 in pd.pivot_table()","Set replace_nan=True","Set default_zero=True","Pandas raises a ZeroDivisionError"],correctAnswer:"Set fill_value=0 in pd.pivot_table()",explanation:"The fill_value=0 argument replaces any NaN cells (combinations with zero sales observations) with 0 directly during pivot table construction."},{id:4,question:"How can you calculate the percentage share that each Region contributes to the company's grand total revenue?",options:["(df.groupby('Region')['Revenue'].sum() / df['Revenue'].sum()) * 100","df.groupby('Region')['Revenue'].percentage_share()","df['Revenue'].pct_change(by='Region')","df.groupby('Region').share('Revenue')"],correctAnswer:"(df.groupby('Region')['Revenue'].sum() / df['Revenue'].sum()) * 100",explanation:"Dividing the grouped sum per region by the scalar grand total of all revenue and multiplying by 100 calculates the exact percentage market share."},{id:5,question:"How do you rank the top 3 sales representatives by total booking revenue in descending order?",options:["df.groupby('SalesRep')['Revenue'].sum().sort_values(ascending=False).head(3)","df.sort_values(by='Revenue').top(3)","df.groupby('SalesRep').head(3)","df.nlargest(3, columns='SalesRep')"],correctAnswer:"df.groupby('SalesRep')['Revenue'].sum().sort_values(ascending=False).head(3)",explanation:"Summing revenue per sales rep via groupby, sorting in descending order with sort_values(ascending=False), and taking the top 3 with head(3) yields the top 3 performers."}],m=[{id:"part1",fileName:"01_ingest_and_regional_groupby.py",title:"1. Ingestion & Regional Summary",badge:"groupby(Region)",code:I,summary:"Aggregate sales transactions by geographic territory, computing total bookings, unit volume, and average order value (AOV)."},{id:"part2",fileName:"02_named_aggregations_and_pivot_tables.py",title:"2. Pivot Tables (Region x Category)",badge:"pd.pivot_table()",code:L,summary:"Transform transaction logs into 2D executive pivot tables with cross-product categories, zero-fill defaults, and marginal grand totals."},{id:"part3",fileName:"03_regional_growth_and_share_metrics.py",title:"3. Market Share & Rep Leaderboard",badge:"Share % & Leaderboard",code:C,summary:"Compute territory market share percentages using grand-total broadcasting and rank top sales executives across regional territories."}],c=[{id:501,rep:"Debangshu",region:"Barrackpore",cat:"Laptops",units:5,rev:25e4},{id:502,rep:"Susmita",region:"Shyamnagar",cat:"Smartphones",units:12,rev:18e4},{id:503,rep:"Swadeep",region:"Ichapur",cat:"Accessories",units:45,rev:45e3},{id:504,rep:"Tuhina",region:"Naihati",cat:"Laptops",units:8,rev:4e5},{id:505,rep:"Sachin",region:"Barrackpore",cat:"Smartphones",units:15,rev:225e3},{id:506,rep:"Mahima",region:"Shyamnagar",cat:"Laptops",units:6,rev:31e4},{id:507,rep:"Abhronila",region:"Titagarh",cat:"Accessories",units:38,rev:38e3},{id:508,rep:"Debangshu",region:"Barrackpore",cat:"Smartphones",units:10,rev:15e4},{id:509,rep:"Susmita",region:"Naihati",cat:"Smartphones",units:14,rev:21e4},{id:510,rep:"Tuhina",region:"Ichapur",cat:"Laptops",units:4,rev:2e5},{id:511,rep:"Sachin",region:"Titagarh",cat:"Accessories",units:50,rev:52e3},{id:512,rep:"Mahima",region:"Barrackpore",cat:"Laptops",units:7,rev:36e4}],g=c.reduce((r,s)=>r+s.rev,0),V=()=>{const[r,s]=x.useState("sales_studio"),[b,N]=x.useState("part1"),[i,S]=x.useState("summary"),p=m.find(a=>a.id===b)||m[0],v=["Barrackpore","Naihati","Shyamnagar","Ichapur","Titagarh"],_=v.map(a=>{const t=c.filter(d=>d.region===a),l=t.length,y=t.reduce((d,u)=>d+u.units,0),n=t.reduce((d,u)=>d+u.rev,0),o=Math.round(n/l),h=(n/g*100).toFixed(1);return{region:a,count:l,units:y,rev:n,aov:o,share:h}}).sort((a,t)=>t.rev-a.rev),R=["Laptops","Smartphones","Accessories"],j=v.map(a=>{const t={region:a,total:0};return R.forEach(l=>{const n=c.filter(o=>o.region===a&&o.cat===l).reduce((o,h)=>o+h.rev,0);t[l]=n,t.total+=n}),t});return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-slate-900/60 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full",children:"Worked Case Study 3"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 22"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Worked Example 3: Grouping Sales by Region"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Analyze multi-branch commercial retail operations across North 24 Parganas. Construct regional revenue summaries, reshape categories with"," ",e.jsx("code",{className:"text-cyan-300 bg-slate-800 px-1 py-0.5 rounded",children:"pd.pivot_table()"}),", and compute market share metrics."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-cyan-500/20",children:"₹ Hub"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>s("sales_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="sales_studio"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🏢 Regional Sales Studio"}),e.jsxs("button",{onClick:()=>s("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",m.length," Scripts)"]}),e.jsx("button",{onClick:()=>s("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>s("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",f.length,")"]})]}),r==="sales_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Total Bookings"}),e.jsxs("div",{className:"text-2xl font-bold text-emerald-400 font-mono mt-1",children:["₹",g.toLocaleString()]}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"12 Orders Closed"})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Top Territory"}),e.jsx("div",{className:"text-2xl font-bold text-cyan-400 font-mono mt-1",children:"Barrackpore"}),e.jsx("div",{className:"text-xs text-cyan-300 mt-1",children:"₹985,000 (40.7% Share)"})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Total Units Moved"}),e.jsx("div",{className:"text-2xl font-bold text-purple-400 font-mono mt-1",children:"214 Units"}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"Laptops & Accessories"})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Corporate AOV"}),e.jsxs("div",{className:"text-2xl font-bold text-amber-400 font-mono mt-1",children:["₹",Math.round(g/c.length).toLocaleString()]}),e.jsx("div",{className:"text-xs text-amber-300 mt-1",children:"Avg per Order"})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Select Sales Analysis Perspective"]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"summary",label:"1. Regional Summary",icon:"📊"},{id:"pivot",label:"2. Pivot Table Matrix",icon:"🔲"},{id:"ledger",label:"3. Order Ledger",icon:"📋"},{id:"leaderboard",label:"4. Rep Leaderboard",icon:"🏆"}].map(a=>e.jsxs("button",{onClick:()=>S(a.id),className:`p-3.5 rounded-xl text-left border transition-all ${i===a.id?"bg-cyan-950/60 border-cyan-500 text-white shadow-md shadow-cyan-500/20":"bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("span",{className:"text-base mr-2",children:a.icon}),e.jsx("span",{className:"text-xs font-bold",children:a.label})]},a.id))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[i==="summary"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Territory Performance Leaderboard (df.groupby('Region'))"]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-cyan-300",children:"Territory Region"}),e.jsx("th",{className:"p-3 text-slate-400",children:"Orders"}),e.jsx("th",{className:"p-3 text-slate-400",children:"Units Sold"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold",children:"Total Revenue (INR)"}),e.jsx("th",{className:"p-3 text-amber-300",children:"Average Order Value (AOV)"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold",children:"Market Share (%)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:_.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-white font-sans font-bold",children:a.region}),e.jsxs("td",{className:"p-3 text-slate-400",children:[a.count," orders"]}),e.jsxs("td",{className:"p-3 text-slate-300",children:[a.units," units"]}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold",children:["₹",a.rev.toLocaleString()]}),e.jsxs("td",{className:"p-3 text-amber-300",children:["₹",a.aov.toLocaleString()]}),e.jsxs("td",{className:"p-3 font-bold text-purple-400",children:[a.share,"%"]})]},a.region))})]})]}),i==="pivot"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔲"})," Multi-Dimensional Pivot Matrix (pd.pivot_table(margins=True))"]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-cyan-300",children:"Region (Index)"}),e.jsx("th",{className:"p-3 text-cyan-400",children:"Laptops"}),e.jsx("th",{className:"p-3 text-teal-400",children:"Smartphones"}),e.jsx("th",{className:"p-3 text-amber-400",children:"Accessories"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"Total Region Revenue"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:j.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-white font-sans font-bold",children:a.region}),e.jsxs("td",{className:"p-3 text-slate-200",children:["₹",a.Laptops.toLocaleString()]}),e.jsxs("td",{className:"p-3 text-slate-200",children:["₹",a.Smartphones.toLocaleString()]}),e.jsxs("td",{className:"p-3 text-slate-200",children:["₹",a.Accessories.toLocaleString()]}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10",children:["₹",a.total.toLocaleString()]})]},a.region))})]})]}),i==="ledger"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Raw Sales Transactions (12 Orders)"}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"OrderID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Sales Rep"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Region"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Category"}),e.jsx("th",{className:"p-3 text-slate-400",children:"Units"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold",children:"Revenue"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:c.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:a.id}),e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:a.rep}),e.jsx("td",{className:"p-3 text-cyan-300 font-sans",children:a.region}),e.jsx("td",{className:"p-3 text-slate-300",children:a.cat}),e.jsx("td",{className:"p-3 text-slate-400",children:a.units}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold",children:["₹",a.rev.toLocaleString()]})]},a.id))})]})]}),i==="leaderboard"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏆"})," Top Sales Reps (df.groupby('SalesRep').sum())"]}),e.jsx("div",{className:"space-y-3",children:[{rep:"Mahima",total:67e4,orders:2,share:"27.7%"},{rep:"Tuhina",total:6e5,orders:2,share:"24.8%"},{rep:"Debangshu",total:4e5,orders:2,share:"16.5%"},{rep:"Susmita",total:39e4,orders:2,share:"16.1%"},{rep:"Sachin",total:277e3,orders:2,share:"11.4%"},{rep:"Abhronila",total:38e3,orders:1,share:"1.6%"},{rep:"Swadeep",total:45e3,orders:1,share:"1.9%"}].sort((a,t)=>t.total-a.total).map((a,t)=>e.jsxs("div",{className:"flex items-center justify-between p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold ${t===0?"bg-amber-400 text-slate-950":t===1?"bg-slate-300 text-slate-950":"bg-slate-800 text-slate-400"}`,children:t+1}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-bold text-white",children:a.rep}),e.jsxs("div",{className:"text-xs text-slate-500 font-mono",children:[a.orders," deals closed"]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-sm font-bold text-emerald-400 font-mono",children:["₹",a.total.toLocaleString()]}),e.jsxs("div",{className:"text-xs text-purple-400 font-mono",children:[a.share," share"]})]})]},a.rep))})]})]}),e.jsx(k,{topic:"Commercial Aggregation Patterns in Business Analytics",text:"Notice how pd.pivot_table(margins=True) instantly provides executive visibility by creating horizontal category columns and automated column/row totals. In corporate accounting and ML forecasting, this pivot formulation provides the precise structured inputs required for revenue projection models!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:m.map(a=>e.jsxs("button",{onClick:()=>N(a.id),className:`p-4 rounded-xl text-left border transition-all ${b===a.id?"bg-cyan-950/60 border-cyan-500 text-white shadow-lg shadow-cyan-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1",children:a.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:a.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:p.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:p.summary})]})}),e.jsx(T,{fileModule:p.code,title:p.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(A,{text:O,title:"Topic 22 Revision Notes: Worked Example 3"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(w,{questions:f,title:"Topic 22 Knowledge Check: Worked Example 3"})})]})})};export{V as default};

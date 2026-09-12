import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cl as z,S as ee,k as se,B as M,aa as H,aM as te,ck as re,cq as ae,f as L,g as P}from"./vendor-icons-ri6cs58t.js";const ne=`"""\r
01_histplot_kde_demo.py\r
Title: Modern Univariate Distribution Plotting with histplot() and kdeplot()\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: sns.histplot() & sns.kdeplot()")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Swadeep, Mahima")\r
    print("=" * 65)\r
\r
    # Note: Older Seaborn used sns.distplot() which is now DEPRECATED.\r
    # In modern Seaborn >= 0.11, use sns.histplot() and sns.kdeplot()!\r
\r
    np.random.seed(42)\r
    # Simulate exam marks in Barrackpore ML Bootcamp\r
    marks = np.concatenate([\r
        np.random.normal(loc=65, scale=8, size=150),\r
        np.random.normal(loc=88, scale=5, size=100)\r
    ])\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))\r
\r
    # 1. Histogram with overlaid KDE\r
    sns.histplot(\r
        marks,\r
        bins=20,\r
        kde=True,\r
        color="#4f46e5",\r
        ax=axes[0],\r
        stat="density"\r
    )\r
    axes[0].set_title("sns.histplot(kde=True, stat='density')", fontsize=12)\r
    axes[0].set_xlabel("Exam Marks")\r
\r
    # 2. Pure Kernel Density Estimation with shade/fill\r
    sns.kdeplot(\r
        marks,\r
        fill=True,\r
        color="#ec4899",\r
        alpha=0.4,\r
        linewidth=2.5,\r
        ax=axes[1]\r
    )\r
    axes[1].set_title("sns.kdeplot(fill=True)", fontsize=12)\r
    axes[1].set_xlabel("Exam Marks")\r
\r
    plt.tight_layout()\r
    print("✓ Successfully generated distribution visualizations.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,oe=`"""\r
02_kde_bandwidth_tuning.py\r
Title: Bandwidth Adjustment (bw_adjust) in Kernel Density Estimation\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Controlling KDE Smoothing with bw_adjust")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    np.random.seed(101)\r
    data = np.random.normal(loc=50, scale=12, size=200)\r
\r
    # bw_adjust < 1.0 -> under-smoothed (noisy, captures micro-modes)\r
    # bw_adjust = 1.0 -> standard Scott/Silverman rule\r
    # bw_adjust > 1.0 -> over-smoothed (smooths away real multi-modal structure)\r
\r
    fig, ax = plt.subplots(figsize=(8, 4))\r
    sns.kdeplot(data, bw_adjust=0.3, label="bw_adjust=0.3 (Under-smoothed)", color="#ef4444", lw=1.5, ax=ax)\r
    sns.kdeplot(data, bw_adjust=1.0, label="bw_adjust=1.0 (Optimal Default)", color="#3b82f6", lw=2.5, ax=ax)\r
    sns.kdeplot(data, bw_adjust=2.5, label="bw_adjust=2.5 (Over-smoothed)", color="#10b981", lw=1.5, ax=ax)\r
\r
    ax.set_title("Impact of Bandwidth Parameter (bw_adjust) on KDE", fontsize=12)\r
    ax.legend()\r
    plt.tight_layout()\r
    print("✓ Rendered multi-bandwidth comparison plot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,le=`"""\r
03_bivariate_kde_hist.py\r
Title: 2D Bivariate Distribution Density Surfaces\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: 2D Bivariate Density Contours")\r
    print("   Instructor: Sukanta Hui | Students: Tuhina, Sachin, Abhronila")\r
    print("=" * 65)\r
\r
    np.random.seed(42)\r
    # Simulate Study Hours vs Exam Score joint distribution\r
    hours = np.random.normal(loc=12, scale=3, size=300)\r
    score = hours * 5.5 + np.random.normal(loc=15, scale=6, size=300)\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.5))\r
\r
    # 1. 2D Bivariate Histogram\r
    sns.histplot(x=hours, y=score, bins=25, cbar=True, cmap="mako", ax=axes[0])\r
    axes[0].set_title("2D Bivariate Histogram")\r
    axes[0].set_xlabel("Hours Studied")\r
    axes[0].set_ylabel("ML Score")\r
\r
    # 2. 2D Bivariate KDE (Contour Elevation)\r
    sns.kdeplot(x=hours, y=score, cmap="viridis", fill=True, thresh=0.05, ax=axes[1])\r
    axes[1].set_title("2D Bivariate KDE Density Contours")\r
    axes[1].set_xlabel("Hours Studied")\r
    axes[1].set_ylabel("ML Score")\r
\r
    plt.tight_layout()\r
    print("✓ Successfully generated 2D bivariate density plots.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,O=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 3 - DISTRIBUTION PLOTS (HISTPLOT & KDEPLOT)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. HISTOGRAMS VS KERNEL DENSITY ESTIMATIONS:\r
--------------------------------------------------------------------------------\r
a) sns.histplot():\r
   - Divides continuous data into discrete intervals (bins).\r
   - Counts observations in each bin or calculates density/probability.\r
   - Key parameters:\r
     * bins: number of bins or bin width (e.g., bins=20 or binwidth=5)\r
     * kde: True/False (overlays a smooth continuous KDE curve)\r
     * stat: "count", "frequency", "probability", "percent", "density"\r
     * multiple: "layer", "dodge", "stack", "fill" (for multi-group comparisons)\r
\r
b) sns.kdeplot():\r
   - Computes a non-parametric Kernel Density Estimation (KDE) curve.\r
   - Places a Gaussian kernel over each data point and sums their curves.\r
   - Key parameters:\r
     * fill: True (shades the area under the probability density curve)\r
     * bw_adjust: bandwidth multiplier (< 1.0 = sharp/noisy, > 1.0 = super smooth)\r
     * hue: splits curves by category\r
     * common_norm: whether multiple category densities sum to 1.0 collectively\r
\r
2. DEPRECATION WARNING:\r
--------------------------------------------------------------------------------\r
\`sns.distplot()\` was deprecated in Seaborn 0.11.0. \r
Always use \`sns.histplot()\` or \`sns.displot()\` or \`sns.kdeplot()\` in modern code.\r
\r
3. 2D BIVARIATE DISTRIBUTIONS:\r
--------------------------------------------------------------------------------\r
By passing both \`x\` and \`y\`, Seaborn creates 2D joint density maps:\r
    sns.kdeplot(x=df['age'], y=df['salary'], fill=True, cmap="mako")\r
This creates topological contour lines showing high-density clustering zones!\r
`,f=[{id:1,question:"Which modern Seaborn function replaces the deprecated `sns.distplot()` for univariate histogram visualization?",options:["sns.barchart()","sns.histplot()","sns.barcount()","sns.freqplot()"],correctAnswer:1,explanation:"`sns.histplot()` is the primary modern axes-level function for plotting histograms with optional KDE overlays."},{id:2,question:"What happens when you increase `bw_adjust` (e.g. bw_adjust=2.5) in `sns.kdeplot()`?",options:["The curve becomes more smoothed and may hide minor multi-modal peaks","The plot turns into a scatterplot","The bins become discrete rectangles","The bandwidth shrinks to zero creating sharp spikes"],correctAnswer:0,explanation:"`bw_adjust` scales the KDE bandwidth. Increasing it creates a smoother curve, while reducing it makes the curve more sensitive to local spikes."},{id:3,question:"How do you overlay a smooth KDE curve directly onto an `sns.histplot()`?",options:["pass smooth=True","pass kde=True","pass density_curve=True","pass gaussian=True"],correctAnswer:1,explanation:"`sns.histplot(..., kde=True)` automatically calculates and overlays the continuous KDE line."},{id:4,question:"What parameter in `sns.kdeplot()` fills the area under the density curve with a gradient/color?",options:["fill=True (or shade=True in older versions)","color_area=True","paint=True","solid=True"],correctAnswer:0,explanation:"`fill=True` is the modern parameter in `sns.kdeplot()` to shade the area under the curve."}],ie={bimodal:[55,58,62,63,65,65,66,67,68,69,70,71,72,73,75,84,85,87,88,89,90,91,92,93,94,95,96,97,98,99],normal:[60,64,67,70,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,88,90,93,96],skewed:[50,52,53,54,55,56,57,58,60,62,65,68,72,78,85,92,98]};function xe(){const[c,R]=n.useState("interactive"),[g,F]=n.useState(0),[x,S]=n.useState(!1),[y,W]=n.useState("bimodal"),[i,$]=n.useState(12),[m,q]=n.useState(1),[j,V]=n.useState(!0),[d,G]=n.useState(!0),[Q,de]=n.useState(!0),[w,_]=n.useState({}),[p,T]=n.useState(!1),v=[{name:"01_histplot_kde_demo.py",code:ne},{name:"02_kde_bandwidth_tuning.py",code:oe},{name:"03_bivariate_kde_hist.py",code:le}],D=s=>{navigator.clipboard.writeText(s),S(!0),setTimeout(()=>S(!1),2e3)},U=(s,t)=>{p||_(r=>({...r,[s]:t}))},X=()=>{let s=0;return f.forEach(t=>{w[t.id]===t.correctAnswer&&s++}),s},u=ie[y],h=45,C=105,N=(C-h)/i,E=Array.from({length:i},(s,t)=>{const r=h+t*N,a=r+N,o=u.filter(l=>l>=r&&l<a).length;return{start:r,end:a,count:o,mid:(r+a)/2}}),Y=Math.max(...E.map(s=>s.count),1),k=[],A=5*m,B=80;for(let s=0;s<=B;s++){const t=h+s/B*(C-h);let r=0;u.forEach(a=>{const o=(t-a)/A;r+=Math.exp(-.5*o*o)/(Math.sqrt(2*Math.PI)*A)}),r=r/u.length,k.push({x:t,density:r})}const Z=Math.max(...k.map(s=>s.density),.001),I=k.map((s,t)=>{const r=50+(s.x-45)/60*420,a=240-s.density/Z*180;return`${t===0?"M":"L"} ${r} ${a}`}).join(" "),J=`${I} L 470 240 L 50 240 Z`;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(z,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 3"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Distribution Plots: histplot() & kdeplot()"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Inspect continuous probability distributions, bin sizes, and continuous kernel density bandwidth adjustments for exploratory machine learning analysis."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Density Studio",icon:ee},{id:"code",label:"Python Code Lab",icon:se},{id:"notes",label:"Revision Notes",icon:M},{id:"quiz",label:"Knowledge Check",icon:H}].map(s=>{const t=s.icon,r=c===s.id;return e.jsxs("button",{onClick:()=>R(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${r?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),c==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(te,{className:"w-4 h-4"}),e.jsx("span",{children:"Distribution & KDE Controls"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Data Shape (Barrackpore Batch):"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["bimodal","normal","skewed"].map(s=>e.jsx("button",{onClick:()=>W(s),className:`px-2 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${y===s?"bg-emerald-600 text-white border border-emerald-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:s},s))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Histogram Bins (bins):"}),e.jsx("span",{className:"font-mono text-emerald-400",children:i})]}),e.jsx("input",{type:"range",min:"5",max:"25",value:i,onChange:s=>$(Number(s.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"KDE Bandwidth (bw_adjust):"}),e.jsx("span",{className:"font-mono text-teal-400",children:m.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.3",max:"2.5",step:"0.1",value:m,onChange:s=>q(Number(s.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800",children:[e.jsxs("button",{onClick:()=>V(!j),className:`p-2 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${j?"bg-emerald-600/30 border border-emerald-500 text-emerald-300":"bg-slate-950 border border-slate-800 text-slate-500"}`,children:[e.jsx(re,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Histplot"})]}),e.jsxs("button",{onClick:()=>G(!d),className:`p-2 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${d?"bg-teal-600/30 border border-teal-500 text-teal-300":"bg-slate-950 border border-slate-800 text-slate-500"}`,children:[e.jsx(ae,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Kdeplot"})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-teal-300",children:"sns.histplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=marks,"}),e.jsxs("div",{className:"pl-3 text-slate-400",children:["bins=",i,","]}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:["kde=",d?"True":"False",","]}),d&&e.jsxs("div",{className:"pl-3 text-teal-300",children:["kde_kws=","{","bw_adjust: ",m.toFixed(1),"}"]}),e.jsx("div",{className:"text-teal-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(z,{className:"w-4 h-4 text-emerald-400"}),"Live Probability Density Function (PDF)"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Total Samples: ",u.length," students"]})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"520",height:"290",viewBox:"0 0 520 290",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"60",x2:"470",y2:"60",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"120",x2:"470",y2:"120",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"180",x2:"470",y2:"180",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"240",x2:"470",y2:"240",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"40",x2:"50",y2:"240",stroke:"#64748b",strokeWidth:"1.5"}),[50,60,70,80,90,100].map(s=>{const t=50+(s-45)/60*420;return e.jsxs("g",{children:[e.jsx("line",{x1:t,y1:"240",x2:t,y2:"245",stroke:"#94a3b8"}),e.jsx("text",{x:t,y:"260",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:s})]},s)}),j&&E.map((s,t)=>{const r=50+(s.start-45)/60*420,a=N/60*420-2,o=s.count/Y*180,l=240-o;return e.jsx("rect",{x:r+1,y:l,width:Math.max(a,2),height:o,fill:"#10b981",opacity:"0.45",stroke:"#34d399",strokeWidth:"1",rx:"2"},t)}),d&&Q&&e.jsx("path",{d:J,fill:"#14b8a6",opacity:"0.25"}),d&&e.jsx("path",{d:I,fill:"none",stroke:"#2dd4bf",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("text",{x:"260",y:"282",fill:"#e2e8f0",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Exam Marks Scale (/100)"}),e.jsx("text",{x:"-140",y:"20",fill:"#e2e8f0",fontSize:"11",fontWeight:"600",textAnchor:"middle",transform:"rotate(-90)",children:"Density / Frequency"})]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),e.jsxs("span",{className:"text-slate-300 font-mono",children:["Bins: ",i]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-teal-400"}),e.jsxs("span",{className:"text-slate-300 font-mono",children:["Bandwidth Factor: ",m.toFixed(2),"x"]})]}),e.jsx("div",{className:"text-slate-400",children:y==="bimodal"?"Notice 2 distinct clusters (Modes) in the KDE curve!":"Single unified peak distribution."})]})]})]}),c==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:v.map((s,t)=>e.jsx("button",{onClick:()=>F(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${g===t?"bg-emerald-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},s.name))}),e.jsxs("button",{onClick:()=>D(v[g].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-[480px]",children:v[g].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(M,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 3 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>D(O),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:O})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 3 Knowledge Assessment (4 Questions)"})]}),p&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold",children:["Score: ",X()," / ",f.length]})]}),e.jsx("div",{className:"space-y-6",children:f.map((s,t)=>{const r=w[s.id],a=r===s.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:s.options.map((o,l)=>{const K=r===l;let b="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return p?l===s.correctAnswer?b="bg-emerald-950/70 border-emerald-500 text-emerald-300":K&&(b="bg-rose-950/70 border-rose-500 text-rose-300"):K&&(b="bg-emerald-600/30 border-emerald-500 text-emerald-200"),e.jsx("button",{onClick:()=>U(s.id,l),className:`p-3 rounded-lg border text-left text-xs transition-all ${b}`,children:o},l)})}),p&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${a?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:a?"✓ Correct: ":"✗ Incorrect: "}),s.explanation]})]},s.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{_({}),T(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>T(!0),disabled:Object.keys(w).length<f.length,className:"px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{xe as default};

import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as C,S as R,k as $,B as T,aa as A,aM as D,f as E,g as I}from"./vendor-icons-ri6cs58t.js";const Q=`"""\r
01_set_theme_styles.py\r
Title: Mastering Seaborn Theme Styles (darkgrid, whitegrid, dark, white, ticks)\r
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
    print("🎓 Seaborn Essentials Lab 01: The 5 Built-in Seaborn Styles")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # 5 standard styles:\r
    # 1. 'darkgrid' (default, grey bg with white grid lines)\r
    # 2. 'whitegrid' (clean white bg with grey grid lines - best for heavy data)\r
    # 3. 'dark' (solid grey background without grid)\r
    # 4. 'white' (pure white background without grid)\r
    # 5. 'ticks' (white background with explicit tick notches on axes)\r
\r
    styles = ["darkgrid", "whitegrid", "dark", "white", "ticks"]\r
    tips = sns.load_dataset("tips")\r
\r
    for st in styles:\r
        sns.set_theme(style=st)\r
        fig, ax = plt.subplots(figsize=(6, 3))\r
        sns.boxplot(data=tips, x="day", y="total_bill", ax=ax, palette="Set3")\r
        ax.set_title(f"sns.set_theme(style='{st}')")\r
        plt.tight_layout()\r
        print(f"✓ Rendered boxplot in style: '{st}'")\r
        plt.close(fig)\r
\r
if __name__ == "__main__":\r
    main()\r
`,q=`"""\r
02_plotting_contexts.py\r
Title: Scaling Visual Elements via Plotting Contexts (paper, notebook, talk, poster)\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Plotting Contexts & Font Scaling")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # 4 built-in contexts scale font sizes, line widths, and marker sizes:\r
    # 1. 'paper' (smallest elements, for print research papers)\r
    # 2. 'notebook' (default standard size for screen/jupyter)\r
    # 3. 'talk' (enlarged elements for PowerPoint / conference slides)\r
    # 4. 'poster' (largest elements for conference posters)\r
\r
    contexts = ["paper", "notebook", "talk", "poster"]\r
\r
    for ctx in contexts:\r
        sns.set_theme(context=ctx, style="whitegrid")\r
        fig, ax = plt.subplots(figsize=(6, 3))\r
        sns.lineplot(x=[1, 2, 3, 4], y=[10, 25, 20, 40], ax=ax, lw=2.5)\r
        ax.set_title(f"Context: sns.set_theme(context='{ctx}')")\r
        plt.tight_layout()\r
        print(f"✓ Configured context: '{ctx}'")\r
        plt.close(fig)\r
\r
    # You can also pass font_scale to multiply base font sizes\r
    sns.set_theme(context="notebook", font_scale=1.2)\r
    print("✓ Configured custom font_scale=1.2")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Y=`"""\r
03_custom_color_palettes.py\r
Title: Color Palettes: Qualitative, Sequential, and Diverging Schemes\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Color Palette Taxonomy")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    # 1. Qualitative Palettes (Unordered categorical classes)\r
    # e.g., 'deep', 'muted', 'pastel', 'bright', 'dark', 'colorblind', 'Set2'\r
    qual_palette = sns.color_palette("colorblind", 6)\r
    print(f"Qualitative 'colorblind' palette (6 colors): {qual_palette}")\r
\r
    # 2. Sequential Palettes (Low to high continuous values)\r
    # e.g., 'Blues', 'viridis', 'rocket', 'mako', 'crest', 'flare'\r
    seq_palette = sns.color_palette("mako", as_cmap=False)\r
    print(f"Sequential 'mako' palette: {len(seq_palette)} hex steps")\r
\r
    # 3. Diverging Palettes (Low vs High with neutral center 0)\r
    # e.g., 'coolwarm', 'vlag', 'icefire', 'Spectral'\r
    div_palette = sns.color_palette("vlag", as_cmap=False)\r
    print(f"Diverging 'vlag' palette: {len(div_palette)} steps")\r
\r
    # Custom color palette creation with sns.color_palette()\r
    custom = sns.color_palette(["#ec4899", "#3b82f6", "#10b981", "#f59e0b"])\r
    print("✓ Successfully generated custom brand color palette.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 10 - SEABORN THEMES AND STYLES\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. THE UNIFIED THEMING API: SNS.SET_THEME()\r
--------------------------------------------------------------------------------\r
In modern Seaborn (>= 0.11), themes are set using:\r
    sns.set_theme(\r
        context="notebook",  # 'paper', 'notebook', 'talk', 'poster'\r
        style="darkgrid",    # 'darkgrid', 'whitegrid', 'dark', 'white', 'ticks'\r
        palette="deep",      # 'deep', 'muted', 'pastel', 'bright', 'dark', 'colorblind'\r
        font="sans-serif",\r
        font_scale=1.0,\r
        rc=None              # Matplotlib rcParams dictionary override\r
    )\r
\r
2. THE 5 CORE STYLES:\r
--------------------------------------------------------------------------------\r
1. 'darkgrid' (default): Subtle grey background with white gridlines.\r
2. 'whitegrid': Clean white background with faint grey gridlines (best for dense plots).\r
3. 'dark': Solid grey background without grid lines.\r
4. 'white': Pure white background without grid lines.\r
5. 'ticks': White background with explicit tick marks on the axes.\r
\r
3. THE 4 PLOTTING CONTEXTS:\r
--------------------------------------------------------------------------------\r
Context scales font size, line thickness, and marker points:\r
- 'paper'   : Smallest scale (0.8x), optimized for multi-column printed papers.\r
- 'notebook': Standard 1.0x scale for laptop screens and Jupyter notebooks.\r
- 'talk'    : Enlarged 1.3x scale for presentation slide projectors.\r
- 'poster'  : Maximum 1.6x scale for large-format academic conference posters.\r
\r
4. REMOVING AXIS SPINES WITH SNS.DESPINE():\r
--------------------------------------------------------------------------------\r
\`sns.despine()\` removes the top and right spines from the figure:\r
    sns.despine(top=True, right=True, left=False, bottom=False, offset=10)\r
`,f=[{id:1,question:"Which of the following is NOT one of the 5 built-in style presets in Seaborn?",options:["darkgrid","whitegrid","neon_cyberpunk","ticks"],correctAnswer:2,explanation:"The 5 built-in Seaborn styles are 'darkgrid', 'whitegrid', 'dark', 'white', and 'ticks'."},{id:2,question:"Which plotting context in `sns.set_theme(context=...)` scales up fonts and lines the most for large presentation projection?",options:["paper","notebook","poster","thumbnail"],correctAnswer:2,explanation:"'poster' has the highest base scaling multiplier (followed by 'talk', 'notebook', and 'paper')."},{id:3,question:"What does the `sns.despine()` helper function accomplish?",options:["It deletes outlier data points","It removes the top and right enclosing axis spines from the plot","It turns the background completely transparent","It flips the X and Y axes"],correctAnswer:1,explanation:"`sns.despine()` strips away unnecessary top and right axis spine borders for a cleaner aesthetic."},{id:4,question:"Which palette in Seaborn is specifically curated to ensure high readability for colorblind individuals?",options:["colorblind","spectral_raw","mono_black","rainbow"],correctAnswer:0,explanation:"Seaborn provides the 'colorblind' palette specifically optimized to be distinguishable across color vision deficiencies."}],G={deep:["#4c72b0","#dd8452","#55a868","#c44e52"],muted:["#4878d0","#ee854a","#6acc64","#d65f5f"],bright:["#023eff","#ff7c00","#1ac938","#e8000b"],colorblind:["#0173b2","#de8f05","#029e73","#d55e00"],pastel:["#a1c9f4","#ffb482","#8de5a1","#ff9f9b"]};function U(){const[x,W]=l.useState("interactive"),[g,z]=l.useState(0),[h,v]=l.useState(!1),[o,H]=l.useState("darkgrid"),[i,M]=l.useState("notebook"),[y,F]=l.useState("deep"),[p,B]=l.useState(!0),[k,N]=l.useState({}),[b,S]=l.useState(!1),j=[{name:"01_set_theme_styles.py",code:Q},{name:"02_plotting_contexts.py",code:q},{name:"03_custom_color_palettes.py",code:Y}],_=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},L=(t,r)=>{b||N(n=>({...n,[t]:r}))},O=()=>{let t=0;return f.forEach(r=>{k[r.id]===r.correctAnswer&&t++}),t},s=(()=>{let t="#0f172a",r="#334155",n="#e2e8f0",m=!1;o==="darkgrid"?(t="#1e293b",r="#334155",n="#f8fafc"):o==="whitegrid"?(t="#ffffff",r="#e2e8f0",n="#0f172a"):o==="dark"?(t="#0f172a",r="transparent",n="#f8fafc"):o==="white"?(t="#ffffff",r="transparent",n="#0f172a"):o==="ticks"&&(t="#ffffff",r="transparent",n="#0f172a",m=!0);let c=11,a=7,d=2;return i==="paper"?(c=9,a=5,d=1.5):i==="notebook"?(c=11,a=7,d=2):i==="talk"?(c=13,a=9,d=3):i==="poster"&&(c=15,a=11,d=3.5),{bg:t,grid:r,text:n,hasTicks:m,fontScale:c,pointRadius:a,lineWidth:d}})(),w=G[y];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 10"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Seaborn Themes and Styles"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Master publication-grade aesthetic styling with sns.set_theme(). Configure styles, plotting contexts, color palettes, and spine despining."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Theme Customizer Studio",icon:R},{id:"code",label:"Python Code Lab",icon:$},{id:"notes",label:"Revision Notes",icon:T},{id:"quiz",label:"Knowledge Check",icon:A}].map(t=>{const r=t.icon,n=x===t.id;return e.jsxs("button",{onClick:()=>W(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-purple-600 text-white shadow-lg shadow-purple-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),x==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Theme Configuration Controls"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Style Preset (style=...):"}),e.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["darkgrid","whitegrid","dark","white","ticks"].map(t=>e.jsx("button",{onClick:()=>H(t),className:`px-2 py-1.5 rounded-lg text-xs font-mono transition-all ${o===t?"bg-purple-600 text-white border border-purple-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Plotting Context (context=...):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["paper","notebook","talk","poster"].map(t=>e.jsx("button",{onClick:()=>M(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${i===t?"bg-purple-600 text-white border border-purple-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Color Palette (palette=...):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["deep","muted","bright","colorblind","pastel"].map(t=>e.jsx("button",{onClick:()=>F(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${y===t?"bg-purple-600 text-white border border-purple-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"sns.despine() (Remove Top/Right Spines):"}),e.jsx("button",{onClick:()=>B(!p),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${p?"bg-purple-600 text-white":"bg-slate-800 text-slate-400"}`,children:p?"ON":"OFF"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-purple-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-indigo-300",children:"sns.set_theme("}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:['style="',o,'",']}),e.jsxs("div",{className:"pl-3 text-cyan-300",children:['context="',i,'",']}),e.jsxs("div",{className:"pl-3 text-amber-300",children:['palette="',y,'"']}),e.jsx("div",{className:"text-indigo-300",children:")"}),p&&e.jsx("div",{className:"text-purple-300",children:"sns.despine()"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(C,{className:"w-4 h-4 text-purple-400"}),"Live Themed Figure Canvas"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[o," • ",i]})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 flex justify-center items-center overflow-x-auto transition-colors duration-200",style:{backgroundColor:s.bg},children:e.jsxs("svg",{width:"490",height:"280",viewBox:"0 0 490 280",className:"max-w-full",children:[s.grid!=="transparent"&&e.jsxs(e.Fragment,{children:[[50,100,150,200,250].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"450",y2:t,stroke:s.grid,strokeWidth:"1"},`hg-${t}`)),[60,150,240,330,420].map(t=>e.jsx("line",{x1:t,y1:"30",x2:t,y2:"250",stroke:s.grid,strokeWidth:"1"},`vg-${t}`))]}),e.jsx("line",{x1:"50",y1:"250",x2:"450",y2:"250",stroke:s.text,strokeWidth:s.lineWidth}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"250",stroke:s.text,strokeWidth:s.lineWidth}),!p&&e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"50",y1:"30",x2:"450",y2:"30",stroke:s.text,strokeWidth:s.lineWidth}),e.jsx("line",{x1:"450",y1:"30",x2:"450",y2:"250",stroke:s.text,strokeWidth:s.lineWidth})]}),s.hasTicks&&e.jsxs(e.Fragment,{children:[[60,150,240,330,420].map(t=>e.jsx("line",{x1:t,y1:"250",x2:t,y2:"256",stroke:s.text,strokeWidth:"1.5"},`tx-${t}`)),[50,100,150,200,250].map(t=>e.jsx("line",{x1:"44",y1:t,x2:"50",y2:t,stroke:s.text,strokeWidth:"1.5"},`ty-${t}`))]}),[{x:90,y:190,cat:0},{x:140,y:150,cat:0},{x:200,y:120,cat:1},{x:250,y:100,cat:1},{x:310,y:80,cat:2},{x:360,y:65,cat:2},{x:410,y:45,cat:3}].map((t,r)=>e.jsx("circle",{cx:t.x,cy:t.y,r:s.pointRadius,fill:w[t.cat],stroke:"#ffffff",strokeWidth:1.5,opacity:"0.9"},r)),e.jsx("path",{d:"M 90 190 Q 250 110, 410 45",fill:"none",stroke:w[0],strokeWidth:s.lineWidth}),e.jsxs("text",{x:"250",y:"272",fill:s.text,fontSize:s.fontScale,fontWeight:"600",textAnchor:"middle",children:["Context: ",i," (Scale: ",s.fontScale,"px)"]}),e.jsx("text",{x:"-140",y:"20",fill:s.text,fontSize:s.fontScale,fontWeight:"600",textAnchor:"middle",transform:"rotate(-90)",children:"Feature Metric (Y)"})]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Active Palette:"}),e.jsx("div",{className:"flex gap-1.5",children:w.map((t,r)=>e.jsx("span",{className:"w-5 h-5 rounded-md border border-slate-700 shadow",style:{backgroundColor:t}},r))})]}),e.jsx("div",{className:"text-purple-300 font-mono",children:p?"despine: Clean uncluttered top/right":"despine=False: Enclosed box frame"})]})]})]}),x==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:j.map((t,r)=>e.jsx("button",{onClick:()=>z(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${g===r?"bg-purple-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>_(j[g].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[h?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),h?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-purple-300 overflow-x-auto leading-relaxed max-h-[480px]",children:j[g].code})})]}),x==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 10 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>_(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[h?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),h?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:P})]}),x==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 10 Knowledge Assessment (4 Questions)"})]}),b&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold",children:["Score: ",O()," / ",f.length]})]}),e.jsx("div",{className:"space-y-6",children:f.map((t,r)=>{const n=k[t.id],m=n===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((c,a)=>{const d=n===a;let u="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return b?a===t.correctAnswer?u="bg-emerald-950/70 border-emerald-500 text-emerald-300":d&&(u="bg-rose-950/70 border-rose-500 text-rose-300"):d&&(u="bg-purple-600/30 border-purple-500 text-purple-200"),e.jsx("button",{onClick:()=>L(t.id,a),className:`p-3 rounded-lg border text-left text-xs transition-all ${u}`,children:c},a)})}),b&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${m?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:m?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{N({}),S(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(k).length<f.length,className:"px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{U as default};

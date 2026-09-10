import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as V,X as P,ce as L,r as _,F as k,aa as T,aM as G,d as z,aN as $,f as A,g as I}from"./vendor-icons-DFC0rBCP.js";const W=`"""\r
=============================================================================\r
TOPIC 10: Saving Figures with plt.savefig()\r
Script 01: Export Formats (Raster vs Vector), DPI & Bounding Boxes\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
import os\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Exporting High-Resolution Publication Figures")\r
\r
fig, ax = plt.subplots(figsize=(6, 3.5))\r
x = np.linspace(0, 10, 100)\r
ax.plot(x, np.sin(x), color='#0284c7', lw=2, label=r'$\\sin(x)$')\r
ax.plot(x, np.cos(x), color='#f43f5e', lw=2, linestyle='--', label=r'$\\cos(x)$')\r
\r
ax.set_title("Publication-Grade Waveform Export", fontweight='bold')\r
ax.set_xlabel("Time (seconds)")\r
ax.set_ylabel("Signal Amplitude")\r
ax.legend(loc="upper right")\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
# 1. Raster PNG (Lossless compressed bitmap, ideal for web/apps)\r
# bbox_inches='tight' ensures outside legends and titles are never clipped!\r
fig.savefig("signal_plot_300dpi.png", dpi=300, bbox_inches='tight', transparent=False)\r
print("✓ Saved 300 DPI raster image: signal_plot_300dpi.png")\r
\r
# 2. Vector SVG (Infinite scalability, ideal for web UI & Illustrator)\r
fig.savefig("signal_plot.svg", format='svg', bbox_inches='tight')\r
print("✓ Saved scalable vector graphic: signal_plot.svg")\r
\r
# 3. Vector PDF (Embedded fonts, ideal for LaTeX papers & conference submissions)\r
fig.savefig("signal_plot.pdf", format='pdf', bbox_inches='tight')\r
print("✓ Saved vector document: signal_plot.pdf")\r
\r
# Clean up sample files from disk\r
for f in ["signal_plot_300dpi.png", "signal_plot.svg", "signal_plot.pdf"]:\r
    if os.path.exists(f):\r
        os.remove(f)\r
\r
plt.close(fig)\r
`,H=`"""\r
=============================================================================\r
TOPIC 10: Saving Figures with plt.savefig()\r
Script 02: In-Memory BytesIO Streams for Web APIs & Base64 Embedding\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import io\r
import base64\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Exporting Charts directly to RAM Buffer (FastAPI/Flask API Pattern)")\r
\r
fig, ax = plt.subplots(figsize=(5, 3))\r
categories = ['Precision', 'Recall', 'F1-Score', 'ROC-AUC']\r
scores = [0.92, 0.88, 0.90, 0.95]\r
bars = ax.bar(categories, scores, color=['#38bdf8', '#818cf8', '#c084fc', '#f472b6'], width=0.5)\r
ax.set_ylim(0, 1.1)\r
ax.set_title("API Dynamic Metric Response", fontweight='bold')\r
ax.bar_label(bars, fmt='%.2f', padding=3)\r
\r
# Create an in-memory byte buffer\r
buffer = io.BytesIO()\r
\r
# Save to buffer stream without writing to physical disk storage\r
fig.savefig(buffer, format='png', dpi=120, bbox_inches='tight')\r
buffer.seek(0) # Rewind stream pointer to beginning\r
\r
# Encode to Base64 string for direct HTML / JSON API payloads\r
img_base64 = base64.b64encode(buffer.read()).decode('utf-8')\r
data_uri = f"data:image/png;base64,{img_base64[:40]}..." # Truncated display\r
\r
print("✓ Successfully rendered Figure directly into RAM BytesIO stream!")\r
print(f"Total In-Memory Buffer Size: {buffer.getbuffer().nbytes:,} bytes")\r
print(f"Base64 URI Preview         : {data_uri}")\r
\r
buffer.close()\r
plt.close(fig)\r
`,U=`"""\r
=============================================================================\r
TOPIC 10: Saving Figures with plt.savefig()\r
Script 03: Automated Multi-Page PDF Diagnostics Report\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import os\r
import numpy as np\r
import matplotlib.pyplot as plt\r
from matplotlib.backends.backend_pdf import PdfPages\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Multi-Page PDF Export using PdfPages Context Manager")\r
\r
pdf_filename = "ML_Diagnostics_Report.pdf"\r
\r
with PdfPages(pdf_filename) as pdf:\r
    # Page 1: Loss Convergence\r
    fig1, ax1 = plt.subplots(figsize=(7, 4))\r
    epochs = np.arange(1, 21)\r
    ax1.plot(epochs, 1.0 / epochs**0.5, 'r--o', label='Training Loss')\r
    ax1.set_title("Page 1: Training Convergence Curve", fontweight='bold')\r
    ax1.set_xlabel("Epoch")\r
    ax1.set_ylabel("Loss")\r
    ax1.legend()\r
    ax1.grid(True, alpha=0.3)\r
    pdf.savefig(fig1, bbox_inches='tight') # Attach page 1\r
    plt.close(fig1)\r
\r
    # Page 2: Confusion Matrix\r
    fig2, ax2 = plt.subplots(figsize=(5, 4))\r
    cm = np.array([[850, 45], [30, 920]])\r
    im = ax2.imshow(cm, cmap='Blues')\r
    ax2.set_title("Page 2: Confusion Matrix", fontweight='bold')\r
    fig2.colorbar(im, ax=ax2)\r
    pdf.savefig(fig2, bbox_inches='tight') # Attach page 2\r
    plt.close(fig2)\r
\r
    # Page 3: Metadata Summary\r
    d = pdf.infodict()\r
    d['Title'] = 'Coder & AccoTax ML Production Audit'\r
    d['Author'] = 'Sukanta Hui'\r
    d['Subject'] = 'Automated Model Verification Report'\r
\r
print(f"✓ Multi-page PDF report compiled: {pdf_filename} (2 Pages generated)")\r
\r
if os.path.exists(pdf_filename):\r
    os.remove(pdf_filename)\r
`,C="MATPLOTLIB ESSENTIALS: TOPIC 10 NOTE\r\n=============================================================================\r\nTOPIC: Saving Figures (plt.savefig, Raster vs Vector, DPI, In-Memory Streams)\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. CORE FUNCTION SIGNATURE:\r\n   - `plt.savefig(fname, dpi=None, facecolor='w', edgecolor='w', orientation='portrait', papertype=None, format=None, transparent=False, bbox_inches=None, pad_inches=0.1, **kwargs)`\r\n\r\n2. CRITICAL PARAMETERS:\r\n   - `dpi` (Dots Per Inch):\r\n     * Screen / Web preview: `dpi=100` to `150`\r\n     * High-res print / Publication papers: `dpi=300` to `600`\r\n   - `bbox_inches='tight'`: Automatically computes the bounding box around all Artists (including external titles and legends) and crops excess whitespace. MANDATORY for clean exports.\r\n   - `transparent=True`: Renders the figure and axes backgrounds transparent (useful for dark mode web pages & keynotes).\r\n   - `format`: Force specific format extension (`'png'`, `'pdf'`, `'svg'`, `'jpg'`, `'eps'`).\r\n\r\n3. RASTER VS VECTOR FORMATS:\r\n   - Raster (Pixel-based: PNG, JPG): Fixed pixel grid; zooming in causes pixelation. Ideal for complex scatter plots with 1,000,000 dots where vectors would become huge files.\r\n   - Vector (Math/Path-based: SVG, PDF, EPS): Scalable to infinite resolutions without quality loss; text remains selectable. Ideal for line plots, bar charts, and LaTeX papers.\r\n\r\n4. SERVERLESS & IN-MEMORY EXPORTS:\r\n   - Avoid slow disk I/O on web backends (FastAPI, Flask, Django):\r\n     ```python\r\n     buf = io.BytesIO()\r\n     fig.savefig(buf, format='png', bbox_inches='tight')\r\n     buf.seek(0)\r\n     # Send directly in HTTP response\r\n     ```\r\n\r\n5. MULTI-PAGE PDF CREATION:\r\n   - `from matplotlib.backends.backend_pdf import PdfPages`\r\n   - `with PdfPages('report.pdf') as pdf: pdf.savefig(fig1); pdf.savefig(fig2)`\r\n",d=[{id:1,question:"Why is `bbox_inches='tight'` considered essential when calling `plt.savefig()`?",options:["It compresses the image by 90% using GZIP","It recalculates the bounding box to ensure external elements like outside legends, super-titles, and tick labels are not clipped off at the canvas borders","It converts the plot to 4K UHD automatically","It makes the image background transparent"],correctAnswer:1,explanation:"By default, `savefig` uses the nominal figure dimensions, which often crops out legends placed with `bbox_to_anchor` or large titles. `bbox_inches='tight'` dynamically expands/crops the canvas to fit all artists."},{id:2,question:"When embedding Matplotlib plots into a REST API response (FastAPI/Flask) without creating temporary files on the hard drive, which standard library module is used?",options:["io.BytesIO()","os.ram_disk()","sys.tempfile()","math.memory_buffer()"],correctAnswer:0,explanation:"`io.BytesIO()` creates an in-memory binary stream in RAM where `plt.savefig(buffer, format='png')` writes bytes directly for zero-disk I/O."},{id:3,question:"Which file format preserves infinite mathematical scalability and selectable font text for Academic LaTeX publications?",options:["PNG","JPEG","PDF or SVG (Vector formats)","BMP"],correctAnswer:2,explanation:"Vector formats (PDF, SVG, EPS) store lines, text, and geometric curves as mathematical paths that scale infinitely without pixelation."},{id:4,question:"Which class in Matplotlib allows combining multiple separate Figure plots into a single multi-page PDF document?",options:["matplotlib.backends.backend_pdf.PdfPages","plt.multi_save()","matplotlib.document.PDFWriter","plt.export_book()"],correctAnswer:0,explanation:"`PdfPages` acts as a context manager (`with PdfPages('doc.pdf') as pdf:`) allowing sequential calls to `pdf.savefig(fig)` to append pages."}];function q(){const[i,F]=r.useState("studio"),[l,M]=r.useState(1),[c,h]=r.useState(!1),[n,E]=r.useState("png"),[g,R]=r.useState(300),[s,O]=r.useState(!0),[o,B]=r.useState(!1),[f,v]=r.useState({}),[p,j]=r.useState(!1),x={1:{name:"01_savefig_parameters_and_formats.py",code:W,desc:"Raster (PNG) vs Vector (SVG/PDF) exports, DPI resolutions, and tight bounding boxes"},2:{name:"02_in_memory_buffers_and_web_export.py",code:H,desc:"In-memory io.BytesIO() streams for REST APIs (FastAPI/Flask) and Base64 payloads"},3:{name:"03_batch_report_export_pipelines.py",code:U,desc:"Multi-page PDF compilation using matplotlib.backends.backend_pdf.PdfPages"}},w=t=>{navigator.clipboard.writeText(t),h(!0),setTimeout(()=>h(!1),2e3)},D=(t,a)=>{v(u=>({...u,[t]:a}))},y=()=>{let t=0;return d.forEach(a=>{f[a.id]===a.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-purple-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(V,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 10: Saving Figures with plt.savefig()"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Export and publish production ML visuals. Master raster (PNG/JPG) vs vector (SVG/PDF) choices, resolution tuning with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"dpi=300"}),", margin clipping prevention with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"bbox_inches='tight'"}),", zero-disk in-memory RAM streams with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"io.BytesIO()"}),", and multi-page ",e.jsx("code",{className:"text-purple-300 font-mono",children:"PdfPages"})," report pipelines."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5",children:[e.jsx(P,{className:"w-3.5 h-3.5"})," plt.savefig()"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(L,{className:"w-3.5 h-3.5"})," In-Memory BytesIO"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-purple-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"Mahima and Abhronila spent hours building a Flask dashboard that generated customer loss charts, but each request wrote temporary PNG files to the hard drive, causing server disk bottlenecks! Transitioning to ',e.jsx("code",{className:"text-purple-300 font-mono",children:"io.BytesIO()"})," with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"bbox_inches='tight'"}),' delivered high-res images in RAM with zero disk I/O lag!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Export Pipeline Studio",icon:P},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:_},{id:"notes",label:"Revision Notes",icon:k},{id:"quiz",label:"MCQ Assessment",icon:T}].map(t=>{const a=t.icon;return e.jsxs("button",{onClick:()=>F(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${i===t.id?"border-purple-500 text-purple-400 bg-purple-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[i==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(G,{className:"text-purple-400 w-5 h-5"}),"savefig Parameter Engine"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Target File Format"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"png",label:"PNG (Raster)",badge:"Lossless"},{id:"svg",label:"SVG (Vector)",badge:"Scalable"},{id:"pdf",label:"PDF (Vector)",badge:"Doc"}].map(t=>e.jsxs("button",{onClick:()=>E(t.id),className:`p-2.5 rounded-lg text-xs font-semibold border text-left transition ${n===t.id?"border-purple-500 bg-purple-950/60 text-purple-300 ring-1 ring-purple-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{children:t.label}),e.jsx("div",{className:"text-[10px] text-slate-400 font-normal",children:t.badge})]},t.id))})]}),n==="png"&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Resolution (dpi parameter)"}),e.jsxs("span",{className:"text-purple-400 font-mono",children:[g," DPI"]})]}),e.jsx("input",{type:"range",min:"72",max:"600",step:"50",value:g,onChange:t=>R(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 mt-1",children:[e.jsx("span",{children:"72 (Web Draft)"}),e.jsx("span",{children:"300 (Publication)"}),e.jsx("span",{children:"600 (Ultra)"})]})]}),e.jsxs("div",{className:"space-y-3 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 block",children:"bbox_inches='tight'"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Prevents clipping outside titles/legends"})]}),e.jsx("button",{onClick:()=>O(!s),className:`px-3 py-1 rounded text-xs font-bold transition ${s?"bg-purple-600 text-white":"bg-slate-800 text-slate-400"}`,children:s?"ENABLED":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 block",children:"transparent=True"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Alpha transparent canvas background"})]}),e.jsx("button",{onClick:()=>B(!o),className:`px-3 py-1 rounded text-xs font-bold transition ${o?"bg-purple-600 text-white":"bg-slate-800 text-slate-400"}`,children:o?"ON":"OFF"})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(z,{className:"w-4 h-4 text-purple-400"}),"Live Export Canvas Bounding Preview"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-purple-300 border border-slate-800 uppercase",children:["format: ",n," | ",s?"tight crop":"loose crop"]})]}),e.jsx("div",{className:`rounded-xl p-6 border transition-all flex items-center justify-center ${o?"bg-transparent border-dashed border-purple-500/40":"bg-slate-950 border-slate-800"}`,children:e.jsxs("svg",{viewBox:"0 0 520 240",className:"w-full max-w-lg h-56",children:[e.jsx("rect",{x:s?"20":"5",y:s?"15":"5",width:s?"480":"510",height:s?"210":"230",fill:"none",stroke:"#a855f7",strokeDasharray:"4,4",strokeWidth:"1.5",rx:"6"}),e.jsx("text",{x:s?"28":"12",y:s?"28":"16",fill:"#a855f7",fontSize:"8",children:s?"bbox_inches='tight' (Clipped to content)":"Nominal Canvas Window"}),e.jsx("rect",{x:"60",y:"45",width:"410",height:"150",fill:"#0f172a",stroke:"#334155",rx:"3"}),e.jsx("path",{d:"M 60 120 Q 110 50 160 120 T 260 120 T 360 120 T 460 120",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("text",{x:"265",y:"38",fill:"#f8fafc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Model Output Validation Signal"}),e.jsx("text",{x:"265",y:"215",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Time (seconds)"}),e.jsx("text",{x:"45",y:"120",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 45 120)",children:"Amplitude (V)"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx($,{className:"w-3.5 h-3.5 text-purple-400"}),"Generated Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-purple-300",children:`# Exporting production graphic
fig.savefig(
    "model_signal.${n}",
    format="${n}",
    ${n==="png"?`dpi=${g},
    `:""}bbox_inches="${s?"tight":"standard"}",
    transparent=${o?"True":"False"}
)
plt.close(fig) # Essential memory cleanup!`})]})]})]})}),i==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"text-purple-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore raster/vector formats, in-memory BytesIO streams, and multi-page PDF compilation."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>M(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${l===t?"bg-purple-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-purple-400",children:x[l].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:x[l].desc})]}),e.jsxs("button",{onClick:()=>w(x[l].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[c?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),c?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:x[l].code})})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-purple-400 w-5 h-5"}),"Figure Export & Savefig Technical Notes"]}),e.jsxs("button",{onClick:()=>w(C),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[c?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),c?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:C})]}),i==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"text-purple-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of savefig parameters, vector formats, and BytesIO buffers."})]}),p&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-300 text-sm font-bold",children:["Score: ",y()," / ",d.length," (",Math.round(y()/d.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:d.map((t,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((u,m)=>{const N=f[t.id]===m,S=t.correctAnswer===m;let b="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return p?S?b="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":N&&!S&&(b="border-rose-500 bg-rose-950/40 text-rose-200"):N&&(b="border-purple-500 bg-purple-950/50 text-purple-200 ring-1 ring-purple-500"),e.jsx("button",{onClick:()=>!p&&D(t.id,m),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${b}`,children:u},m)})}),p&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-purple-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{v({}),j(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>j(!0),disabled:Object.keys(f).length<d.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-purple-600/30",children:"Submit Quiz"})]})]})]})]})}export{q as default};

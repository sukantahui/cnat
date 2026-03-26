import{q as l,r,j as e,e as n,B as i,b as d}from"./index-C8tfbTD8.js";import{E as o}from"./EditablePythonCodeBlock-Dvgfq-eC.js";import{C as c}from"./cpu-Fx_TJnAd.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";const p=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],m=l("square-terminal",p);class D extends r.Component{constructor(s){super(s),this.examples=[{id:"hello",title:"Hello, Python!",level:"Beginner",description:"Start with the classic Hello World program and a simple variable.",tags:["print()","variables"],code:`# Python Playground — Hello from Coder & AccoTax
print("Welcome to Python Playground!")
print("This is your first Python program.")

name = "Sukanta"
print("Hello,", name)
`},{id:"loops",title:"Loops & Conditions",level:"Beginner",description:"Practice if/else, for loop and while loop with simple examples.",tags:["if","for","while"],code:`# Conditions & Loops

marks = 78

if marks >= 90:
    print("Grade: A+")
elif marks >= 75:
    print("Grade: A")
else:
    print("Keep improving!")

print("\\nFor loop example:")
for i in range(1, 6):
    print("Counting:", i)

print("\\nWhile loop example:")
count = 3
while count > 0:
    print("Countdown:", count)
    count -= 1

print("Blast off!")`},{id:"collections",title:"Lists & Dictionaries",level:"Beginner–Intermediate",description:"Use lists and dictionaries to store student data and display it.",tags:["list","dict"],code:`# Lists & Dictionaries

students = ["Ritaja", "Mounita", "Swadeep", "Devangshu"]
marks = [92, 88, 79, 95]

print("Student Marks:")
for name, score in zip(students, marks):
    print(f"{name}: {score}")

print("\\nUsing dictionary:")
student_data = {
    "Ritaja": 92,
    "Mounita": 88,
    "Swadeep": 79,
    "Devangshu": 95,
}

for name, score in student_data.items():
    status = "Excellent" if score >= 90 else "Good"
    print(f"{name}: {score} ({status})")`},{id:"numpy",title:"NumPy Demo",level:"Intermediate",description:"Demonstration of NumPy arrays and basic mathematical operations (runs via Pyodide).",tags:["numpy","arrays"],code:`# NumPy Demo — runs in browser via Pyodide
import numpy as np

data = np.array([10, 20, 30, 40, 50])
print("Data:", data)
print("Mean:", data.mean())
print("Sum:", data.sum())
print("Squared:", data ** 2)`},{id:"pandas",title:"Pandas Demo",level:"Intermediate–Advanced",description:"Create a small DataFrame and compute basic statistics with Pandas.",tags:["pandas","dataframe"],code:`# Pandas Demo — small DataFrame example
import pandas as pd

data = {
    "Student": ["Ritaja", "Mounita", "Swadeep", "Devangshu"],
    "Marks": [92, 88, 79, 95],
}

df = pd.DataFrame(data)
print("DataFrame:")
print(df)

print("\\nSummary:")
print(df.describe())`}],this.state={selectedId:"hello"}}getSelectedExample(){return this.examples.find(s=>s.id===this.state.selectedId)}renderExampleList(){const{selectedId:s}=this.state;return e.jsx("div",{className:"space-y-2",children:this.examples.map(t=>e.jsxs("button",{onClick:()=>this.setState({selectedId:t.id}),className:`w-full text-left px-3 py-2 rounded-lg border text-xs md:text-sm transition flex flex-col gap-1 ${s===t.id?"border-sky-500 bg-sky-500/10":"border-slate-700 bg-slate-900/40 hover:bg-slate-800/60"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`font-semibold ${s===t.id?"text-sky-300":"text-slate-200"}`,children:t.title}),e.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wide",children:t.level})]}),e.jsx("p",{className:"text-slate-400 text-xs line-clamp-2",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:t.tags.map(a=>e.jsx("span",{className:"px-2 py-[2px] rounded-full bg-slate-800 text-[10px] text-slate-300",children:a},a))})]},t.id))})}render(){const s=this.getSelectedExample();return e.jsxs("div",{className:"max-w-6xl mx-auto px-3 md:px-4 lg:px-0 py-6 md:py-8 space-y-6",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/40 px-3 py-1 text-xs text-sky-300",children:[e.jsx(m,{size:14}),e.jsx("span",{children:"Python Playground · Powered by Pyodide"})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight",children:"Run Python in your Browser"}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base max-w-2xl mt-1",children:"Write, run, and experiment with Python code instantly. This playground uses Pyodide to execute real Python 3 directly in your browser—no installation needed."})]}),e.jsxs("div",{className:"flex flex-col items-end gap-2 text-right",children:[e.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-1",children:[e.jsx(n,{size:14,className:"text-amber-400"}),e.jsx("span",{children:"Perfect for learning, demos & quick experiments"})]}),e.jsxs("span",{className:"text-[11px] text-slate-500 flex items-center gap-1",children:[e.jsx(c,{size:14,className:"text-emerald-400"}),e.jsx("span",{children:"Runs fully in-browser · No server"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-4 lg:gap-6 items-start",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{size:16,className:"text-sky-300"}),e.jsx("h2",{className:"text-sm md:text-base font-semibold text-slate-100",children:s.title})]}),e.jsx("p",{className:"text-slate-400 text-xs md:text-sm",children:s.description})]}),e.jsxs("div",{className:"hidden md:flex flex-col items-end gap-1",children:[e.jsxs("span",{className:"text-[11px] px-2 py-[2px] rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:["Example: ",e.jsx("span",{className:"text-sky-300",children:s.level})]}),e.jsxs("span",{className:"text-[10px] text-slate-500 flex items-center gap-1",children:[e.jsx(d,{size:12}),e.jsx("span",{children:"Switch examples from the right panel"})]})]})]}),e.jsx(o,{initialCode:s.code},s.id)]}),e.jsxs("aside",{className:"space-y-4",children:[e.jsxs("div",{className:"border border-slate-800 rounded-2xl bg-slate-900/60 p-3 md:p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{size:16,className:"text-sky-300"}),e.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Choose an Example"})]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:[this.examples.length," examples"]})]}),this.renderExampleList()]}),e.jsxs("div",{className:"border border-slate-800 rounded-2xl bg-slate-900/80 p-3 md:p-4 text-[11px] md:text-xs space-y-2",children:[e.jsx("h4",{className:"text-slate-200 font-semibold flex items-center gap-2",children:"Tips for Best Experience"}),e.jsxs("ul",{className:"list-disc pl-4 text-slate-400 space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"print()"})," to see variable values and debug."]}),e.jsx("li",{children:"For larger outputs, scroll inside the console panel at the bottom of the editor."}),e.jsxs("li",{children:["When you use ",e.jsx("code",{children:"numpy"})," or ",e.jsx("code",{children:"pandas"}),", the first run might take a few seconds while packages load."]}),e.jsx("li",{children:"You can copy or download your code from the toolbar and reuse it in your local Python setup."})]})]}),e.jsxs("div",{className:"border border-sky-900 rounded-2xl bg-sky-500/5 p-3 md:p-4 text-[11px] md:text-xs space-y-1",children:[e.jsxs("p",{className:"text-slate-300",children:["This playground is built by"," ",e.jsx("span",{className:"font-semibold text-sky-300",children:"Coder & AccoTax, Barrackpore"})," ","to help students explore Python from anywhere—mobile, laptop, or classroom projector."]}),e.jsx("p",{className:"text-slate-500",children:"Use it along with your Python roadmap lessons to practise every topic interactively."})]})]})]})]})}}export{D as default};

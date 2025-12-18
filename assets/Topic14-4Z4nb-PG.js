import{r as l,j as e,a as t}from"./index-DzTwyB1U.js";const r="animate-[fadeIn_0.8s_ease-out]",s="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/20";class o extends l.Component{render(){return e.jsxs("div",{className:`space-y-16 ${r}`,children:[e.jsxs("header",{className:"space-y-3",children:[e.jsx("h2",{className:"text-2xl font-semibold text-teal-300 tracking-wide animate-[slideDown_0.6s_ease-out]",children:"Nested Lists & 2D Data Structures"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed animate-[fadeIn_1s_ease-out]",children:["A nested list is a ",e.jsx("strong",{children:"list containing other lists"}),". This allows Python to represent ",e.jsx("strong",{children:"2D data"})," like tables and grids."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ What Is a Nested List?"}),e.jsx(t,{title:"Simple Nested List",initialCode:`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix)`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Each inner list represents a ",e.jsx("strong",{children:"row"}),"."]})]}),e.jsxs("section",{className:`bg-slate-900/60 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm mb-3 font-semibold",children:"🧱 2D Structure Visualization (Hover)"}),e.jsx("svg",{viewBox:"0 0 360 160",className:"w-full h-40",children:[0,1,2].map(a=>[0,1,2].map(i=>e.jsxs("g",{className:"transition-all duration-300 hover:scale-110",children:[e.jsx("rect",{x:60+i*80,y:30+a*40,width:60,height:30,rx:6,fill:"#0f766e"}),e.jsxs("text",{x:90+i*80,y:50+a*40,fill:"#e5e7eb",fontSize:"12",textAnchor:"middle",children:["[",a,",",i,"]"]})]},`${a}-${i}`)))}),e.jsxs("p",{className:"text-slate-400 text-xs mt-2",children:["Access pattern → ",e.jsx("code",{children:"matrix[row][column]"})]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2️⃣ Accessing Elements"}),e.jsx(t,{title:"Access Using Double Index",initialCode:`matrix = [
    [10, 20, 30],
    [40, 50, 60]
]

print(matrix[0][1])   # 20
print(matrix[1][2])   # 60`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-300",children:"3️⃣ Iterating Through a 2D List"}),e.jsx(t,{title:"Row-wise Iteration",initialCode:`matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

for row in matrix:
    for value in row:
        print(value, end=" ")
    print()`})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-pink-300",children:"4️⃣ Modifying Nested Lists"}),e.jsx(t,{title:"Update an Element",initialCode:`matrix = [[1, 2], [3, 4]]

matrix[1][0] = 99
print(matrix)`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Lists are mutable — changes affect the structure directly."})]}),e.jsxs("section",{className:`border border-red-700 rounded-xl p-4 bg-red-900/20 ${s}`,children:[e.jsx("h3",{className:"text-red-300 font-semibold",children:"❌ Common Pitfall: Shallow Copy Trap"}),e.jsx(t,{title:"Wrong Way to Create 2D List",initialCode:`grid = [[0]*3]*3
grid[0][0] = 1
print(grid)`}),e.jsxs("p",{className:"text-red-200 text-sm",children:["All rows refer to the ",e.jsx("strong",{children:"same list"}),"."]})]}),e.jsxs("section",{className:`space-y-4 ${s}`,children:[e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:"✔ Correct Way to Create 2D List"}),e.jsx(t,{title:"Safe 2D List Creation",initialCode:`grid = [[0 for _ in range(3)] for _ in range(3)]
grid[0][0] = 1
print(grid)`})]}),e.jsxs("section",{className:`border border-emerald-700 rounded-xl p-4 bg-emerald-900/20 ${s}`,children:[e.jsx("h3",{className:"text-emerald-300 font-semibold",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc list-inside text-emerald-200 text-sm space-y-1",children:[e.jsx("li",{children:"Chess boards / game grids"}),e.jsx("li",{children:"Student marks table"}),e.jsx("li",{children:"Image pixels"}),e.jsx("li",{children:"Matrix operations"})]})]}),e.jsxs("section",{className:`border border-teal-700 rounded-xl p-4 bg-teal-900/20 ${s}`,children:[e.jsx("h3",{className:"text-teal-300 font-semibold",children:"👨‍🏫 Teacher Note"}),e.jsx("p",{className:"text-teal-200 text-sm",children:"✔ Always visualize rows and columns ✔ Be careful with shallow copies ✔ Nested lists = foundation for real-world data"})]}),e.jsxs("footer",{className:`bg-slate-900/70 border border-slate-700 rounded-xl p-4 ${s}`,children:[e.jsx("p",{className:"text-slate-200 text-sm font-semibold mb-1",children:"✅ Topic14 Summary"}),e.jsxs("ul",{className:"list-disc list-inside text-slate-400 text-xs space-y-1",children:[e.jsx("li",{children:"Nested lists represent 2D data"}),e.jsxs("li",{children:["Access using ",e.jsx("code",{children:"[row][col]"})]}),e.jsx("li",{children:"Avoid shallow copy mistakes"})]})]})]})}}export{o as default};

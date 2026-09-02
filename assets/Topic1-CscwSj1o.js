import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as l}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as d}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const p=[{question:"What does turtle.pensize(width) do?",shortAnswer:"Sets the line drawing thickness in integer screen pixels.",explanation:"pensize() defines the diameter of the circular virtual brush tip used when drawing strokes.",hint:"How do you make lines thicker or thinner?",level:"basic",codeExample:`t.pensize(8)
t.forward(100)`},{question:"What is the alias for turtle.pensize()?",shortAnswer:"turtle.width(w).",explanation:"t.width() and t.pensize() are identical aliases in Python's turtle library.",hint:"What word describes the thickness of a line?",level:"basic",codeExample:"t.width(5)  # Same as t.pensize(5)"},{question:"What does turtle.shapesize() control?",shortAnswer:"The visual size and scale factors of the turtle cursor icon.",explanation:"shapesize(stretch_wid, stretch_len, outline) scales the cursor representation on canvas without changing line drawing width.",hint:"Does it scale the ink or the cursor shape?",level:"basic",codeExample:"t.shapesize(2, 2, 1)  # 2x cursor scaling"},{question:"What are the three arguments of shapesize(stretch_wid, stretch_len, outline)?",shortAnswer:"Height multiplier, width multiplier, and cursor outline border width.",explanation:"Default cursor size is 20x20 pixels; multipliers scale from that baseline.",hint:"Think about vertical scale, horizontal scale, and outline border.",level:"moderate",codeExample:"t.shapesize(stretch_wid=3, stretch_len=1.5, outline=2)"},{question:"What is the alias for turtle.shapesize()?",shortAnswer:"turtle.turtlesize().",explanation:"turtlesize() and shapesize() are identical methods in Python Turtle.",hint:"What is the alternative method name with 'turtle' in it?",level:"basic",codeExample:"t.turtlesize(2, 2)"},{question:"What does t.pen() return when called with no arguments?",shortAnswer:"A complete dictionary of all current pen state attributes.",explanation:"Returns keys like 'shown', 'pendown', 'pencolor', 'fillcolor', 'pensize', 'speed', etc.",hint:"What Python collection type stores key-value pairs?",level:"moderate",codeExample:`pen_dict = t.pen()
print(pen_dict['pensize'])`},{question:"How do you pass a complete pen dictionary to update all settings simultaneously?",shortAnswer:"By passing the dictionary to `t.pen(pen_dict)`.",explanation:"t.pen() accepts keyword arguments or a dictionary to batch-update pen configuration.",hint:"How do you apply a dictionary of settings?",level:"advanced",codeExample:"t.pen(pensize=4, pencolor='orange', speed=0)"},{question:"How do line joints and corner caps behave with very thick pensize (e.g. pensize=20)?",shortAnswer:"Tkinter renders rounded caps and smooth miter joins at segment intersections.",explanation:"Because Turtle's virtual pen has a circular brush tip, thick strokes produce rounded corner geometry.",hint:"Is the pen tip circular or square?",level:"advanced",codeExample:`t.pensize(20)
t.forward(100); t.right(90); t.forward(100)`},{question:"What is stroke hierarchy in graphical design?",shortAnswer:"Using varied line weights to convey foreground prominence vs background context.",explanation:"Thick lines draw immediate viewer attention, while thin lines provide subtle guidelines.",hint:"Why do artists use fine pens for backgrounds and bold markers for outlines?",level:"moderate",codeExample:"# 1px grid, 4px shape, 10px frame"},{question:"How can you create a dynamic tapering line in Turtle?",shortAnswer:"Change `t.pensize()` on each iteration of a step loop.",explanation:"Modulating width with an expression or mathematical function on each small step creates tapered strokes.",hint:"How do you vary thickness over distance?",level:"moderate",codeExample:`for w in range(1, 15):
    t.pensize(w); t.forward(10)`},{question:"Does changing pensize affect the turtle cursor shape?",shortAnswer:"No, pensize only affects drawn line strokes; use shapesize to change cursor size.",explanation:"Line stroke properties and cursor visual properties are completely decoupled.",hint:"Are cursor scale and line thickness the same property?",level:"basic",codeExample:`t.pensize(10)   # Cursor remains normal size
t.shapesize(3) # Cursor becomes 3x larger`},{question:"What is `t.resizemode()` in Turtle?",shortAnswer:"Controls how the turtle shape resizes: 'auto', 'user', or 'noresize'.",explanation:"'auto' adjusts shape with pensize, 'user' resizes by shapesize(), and 'noresize' locks shape dimensions.",hint:"Which method defines the resize behavior mode?",level:"advanced",codeExample:"t.resizemode('user')"},{question:"What happens if pensize is set to a floating point value like 4.7?",shortAnswer:"It works; Tkinter accepts float values and anti-aliases the stroke edges.",explanation:"While integer pixels are most common, fractional stroke weights are valid.",hint:"Can stroke widths have decimal places?",level:"moderate",codeExample:"t.pensize(4.5)"},{question:"How do you query the current shapesize scale values?",shortAnswer:"Call `t.shapesize()` without arguments.",explanation:"Returns a tuple: `(stretch_wid, stretch_len, outline)`.",hint:"How do getters work in Turtle?",level:"moderate",codeExample:"wid, len, outline = t.shapesize()"},{question:"Why should you avoid extremely large pensize values (e.g. pensize=200) for small polygons?",shortAnswer:"The stroke thickness will swallow the internal area and distort the geometry.",explanation:"If stroke width exceeds polygon side length, the inner shape is completely filled by overlapping line ink.",hint:"What happens when ink width is larger than the shape dimensions?",level:"moderate",codeExample:"# Side length 50 with pensize 80 produces a solid blob"},{question:"How do you draw concentric squares with alternating stroke weights?",shortAnswer:"Loop over increasing side sizes while alternating `pensize()` values.",explanation:"Toggling between 2px and 6px pensize creates optical contrast patterns.",hint:"How do you create visual rhythm in geometric patterns?",level:"moderate",codeExample:`for i, size in enumerate(range(40, 200, 40)):
    t.pensize(2 if i % 2 == 0 else 6)
    # draw square`},{question:"What is the visual effect of setting cursor outline in `shapesize(outline=5)`?",shortAnswer:"It draws a bold 5px border around the turtle cursor shape.",explanation:"The outline parameter modifies the stroke border around the cursor icon.",hint:"What does the third argument of shapesize control?",level:"moderate",codeExample:"t.shapesize(2, 2, outline=4)"},{question:"How can you create a 3D isometric box illusion with line thickness?",shortAnswer:"Draw foreground edges with thick pensize (8px) and background/depth edges with fine pensize (2px).",explanation:"Simulating atmospheric perspective using stroke weight gives 2D drawings a 3D depth feel.",hint:"Which lines in a 3D cube appear closer to the viewer?",level:"advanced",codeExample:`# Foreground edges: pensize(8)
# Receding edges: pensize(2)`},{question:"Can you change pensize while drawing a single circle?",shortAnswer:"No, circle() completes with the active pensize; to vary width, draw multiple small arcs with different pensize.",explanation:"A single `circle()` call uses the width active at the start of the command.",hint:"How do you segment a circle to change stroke mid-way?",level:"advanced",codeExample:`for _ in range(36):
    t.pensize(t.pensize() + 0.2)
    t.circle(100, 10) # 10-degree arc`},{question:"How do you create a calligraphy brush effect using angle-dependent stroke width?",shortAnswer:"Set pensize based on current heading: `pensize(2 + 8 * abs(sin(heading)))`.",explanation:"Real nib pens draw thin vertical strokes and thick horizontal strokes; calculating width from heading simulates this.",hint:"How does a physical calligraphy nib change thickness based on drawing direction?",level:"expert",codeExample:`import math
# Vary thickness by heading angle`},{question:"What is the default cursor size in pixels before scaling?",shortAnswer:"20 pixels by 20 pixels.",explanation:"Base vector shapes in Turtle (turtle, arrow, circle, square, triangle) are 20x20 units.",hint:"What is the standard base resolution of turtle cursors?",level:"basic",codeExample:"# shapesize(1, 1) = 20x20 pixels"},{question:"What happens when you stretch a cursor non-uniformly (e.g. shapesize(1, 4))?",shortAnswer:"The cursor elongates horizontally into an oblong spear or needle.",explanation:"Different stretch_wid and stretch_len values allow custom cursor aspect ratios.",hint:"What happens when width scale != length scale?",level:"moderate",codeExample:"t.shapesize(1, 4)  # Elongated pointer"},{question:"How do you restore default pensize after custom function drawing?",shortAnswer:"Set `t.pensize(1)` explicitly at the end of the function.",explanation:"Explicit reset avoids leaky state across drawing subroutines.",hint:"What is the standard baseline width?",level:"basic",codeExample:"t.pensize(1)"},{question:"Does `t.clear()` reset pensize?",shortAnswer:"No, clear() only erases drawings; it preserves pensize, color, and coordinates.",explanation:"To reset pen attributes as well, use `t.reset()`.",hint:"Does clear() erase lines only or reset the entire turtle?",level:"moderate",codeExample:`t.clear() # Keeps current pensize
t.reset() # Resets pensize to 1`},{question:"What is the difference between stroke color and cursor color?",shortAnswer:"pencolor() sets stroke and cursor outline; fillcolor() sets cursor interior; color(pen, fill) sets both.",explanation:"Turtle color methods control both the drawn strokes and the cursor icon colors.",hint:"How do pencolor and fillcolor affect cursor appearance?",level:"moderate",codeExample:"t.color('red', 'yellow') # Red outline, yellow interior"},{question:"Why does pensize affect rendering speed in complex 10,000-line fractals?",shortAnswer:"Thick strokes require more polygon rasterization overhead by the graphics driver.",explanation:"1px lines are rendered faster as single raster primitives compared to thick anti-aliased polygons.",hint:"Do thick strokes require more pixel rasterization than 1px lines?",level:"expert",codeExample:"# For max fractal speed, keep pensize(1) and tracer(0)"},{question:"How do you draw a multi-layered neon glowing line effect?",shortAnswer:"Draw a thick semi-transparent outer line, then overlay thinner brighter lines on top.",explanation:"Layering pensize(12) deep blue → pensize(6) light blue → pensize(2) white creates a neon glow illusion.",hint:"How do glow shaders work in 2D graphic design?",level:"advanced",codeExample:"# Layered stroke technique"},{question:"Can pensize be bound to mouse scroll events in interactive applications?",shortAnswer:"Yes, using Tkinter canvas event bindings on Button-4 and Button-5.",explanation:"Binding scroll events allows dynamic brush size adjustment in paint programs.",hint:"Can user input dynamically alter pensize in real time?",level:"expert",codeExample:"# Dynamic brush size in interactive drawing apps"},{question:"What is the relationship between pensize and turtle.stamp()?",shortAnswer:"stamp() size is determined by shapesize(), NOT pensize().",explanation:"Stamp size matches the cursor shape scale, completely ignoring line stroke width.",hint:"Does stamping use the line thickness or the cursor size?",level:"moderate",codeExample:`t.pensize(20)
t.stamp() # Stamp size remains shapesize()!`},{question:"What is the summary rule for professional stroke styling?",shortAnswer:"Use thin lines (1-2px) for grids, medium lines (3-5px) for geometry, and thick lines (8-15px) for emphasis.",explanation:"Thoughtful stroke hierarchy turns flat drawings into visually compelling illustrations.",hint:"What rule governs professional graphic stroke hierarchy?",level:"basic",codeExample:"# 1-2px: Guide | 3-5px: Shape | 8-15px: Border"}],h=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 1 - Line thickness, pensize, and cap styling\r
File: line_thickness_progression.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates a multi-tier stroke hierarchy ranging from fine 1px gridlines\r
to bold 15px structural boundaries in Python Turtle.\r
"""\r
\r
import turtle\r
\r
def draw_stroke_hierarchy():\r
    screen = turtle.Screen()\r
    screen.title("Line Thickness Progression - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=700, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(5)\r
\r
    strokes = [\r
        (1, "#94a3b8", "1px - Fine Grid / Axis Guide"),\r
        (3, "#38bdf8", "3px - Standard Vector Outline"),\r
        (6, "#34d399", "6px - Medium Architectural Feature"),\r
        (10, "#fbbf24", "10px - Heavy Foreground Boundary"),\r
        (15, "#f43f5e", "15px - Bold Structural Element")\r
    ]\r
\r
    start_y = 150\r
    for width, color, label in strokes:\r
        t.penup()\r
        t.goto(-250, start_y)\r
        t.pendown()\r
        t.pensize(width)\r
        t.color(color)\r
        t.forward(200)\r
\r
        # Write label beside stroke\r
        t.penup()\r
        t.forward(20)\r
        t.write(f"pensize({width}) -> {label}", font=("Arial", 10, "normal"))\r
\r
        start_y -= 60\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_stroke_hierarchy()\r
`,u=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 1 - Line thickness, pensize, and cap styling\r
File: tapered_calligraphy_pen.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates dynamic calligraphic stroke tapering where pensize increases\r
and decreases dynamically across a continuous mathematical curve.\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_calligraphic_spiral():\r
    screen = turtle.Screen()\r
    screen.title("Calligraphic Tapered Spiral - Coder & AccoTax")\r
    screen.bgcolor("#090d16")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.color("#a78bfa")  # Purple pastel\r
\r
    # Draw expanding and tapering spiral\r
    for i in range(120):\r
        # Calculate dynamic thickness using sine curve (1px to 10px)\r
        dynamic_width = max(1, int(1 + 9 * math.sin(i * math.pi / 60)))\r
        t.pensize(dynamic_width)\r
        t.forward(i * 1.5)\r
        t.left(35)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_calligraphic_spiral()\r
`,x=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 1 - Line thickness, pensize, and cap styling\r
File: shape_scale_and_cursor_styling.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates turtle.shapesize() / turtlesize() for scaling the cursor\r
and turtle.pen() dictionary attribute manipulation.\r
"""\r
\r
import turtle\r
\r
def style_cursor_and_pen():\r
    screen = turtle.Screen()\r
    screen.title("Cursor Scaling & Pen State Dictionary - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.shape("turtle")\r
    t.color("#38bdf8", "#0284c7")  # Outline sky-blue, fill ocean-blue\r
\r
    # Scale the turtle cursor: stretch_wid, stretch_len, outline\r
    t.shapesize(stretch_wid=3, stretch_len=3, outline=2)\r
\r
    # Inspect the full pen state dictionary\r
    current_pen_dict = t.pen()\r
    print("Full Pen Dictionary State:")\r
    for k, v in current_pen_dict.items():\r
        print(f"  {k:<12}: {v}")\r
\r
    # Draw scaled triangle with thick pensize\r
    t.pensize(5)\r
    for _ in range(3):\r
        t.forward(150)\r
        t.left(120)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    style_cursor_and_pen()\r
`,m=`================================================================================\r
  TOPIC 1: LINE THICKNESS, PENSIZE, AND CAP STYLING\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS STROKE WEIGHT AND PENSIZE?\r
--------------------------------------------------------------------------------\r
Line thickness (stroke weight) establishes visual hierarchy in computer\r
graphics. In Turtle, \`t.pensize(width)\` (or \`t.width(width)\`) sets the line\r
diameter in screen pixels.\r
\r
Visual Hierarchy Guidelines:\r
- 1px - 2px: Subtle guidelines, background grids, and coordinate ticks.\r
- 3px - 4px: Standard geometric wireframes and polygon outlines.\r
- 6px - 8px: Emphasized focal shapes, borders, and character features.\r
- 10px - 20px: Heavy structural frames, bold calligraphic strokes, and posters.\r
\r
2. PEN STATE DICTIONARY (t.pen())\r
--------------------------------------------------------------------------------\r
The \`t.pen()\` method manages all styling attributes in a single dictionary:\r
- \`shown\`: (bool) whether the cursor is visible.\r
- \`pendown\`: (bool) whether drawing is active.\r
- \`pencolor\`: (str/tuple) stroke color.\r
- \`fillcolor\`: (str/tuple) interior fill color.\r
- \`pensize\`: (int) line stroke width.\r
- \`speed\`: (int) movement animation speed.\r
- \`resizemode\`: (str) auto/user/noresize.\r
\r
3. TURTLE CURSOR SCALING (t.shapesize())\r
--------------------------------------------------------------------------------\r
\`t.shapesize(stretch_wid, stretch_len, outline)\` (or \`t.turtlesize()\`):\r
- \`stretch_wid\`: Vertical scale factor (relative to default 20px).\r
- \`stretch_len\`: Horizontal scale factor (relative to default 20px).\r
- \`outline\`: Border thickness of the cursor icon in pixels.\r
\r
4. BEST PRACTICES & CLASSROOM TIPS\r
--------------------------------------------------------------------------------\r
- Use modular helper functions that accept a \`stroke_weight\` parameter.\r
- When creating calligraphic tapering, calculate width using trigonometric\r
  curves (\`math.sin\`) for organic stroke modulation.\r
- Remember: \`shapesize()\` modifies the cursor, while \`pensize()\` modifies the ink!\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,g=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes strokeGlow {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.4)); }
  50% { filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.8)); }
}
`,_=()=>{const[s,i]=o.useState(6),a=[{name:"turtle.pensize(width) / turtle.width(w)",returnType:"int / None",purpose:"Sets or queries the line drawing stroke thickness in integer screen pixels.",usage:"t.pensize(6)"},{name:"turtle.shapesize(wid, len, outline) / turtlesize()",returnType:"tuple / None",purpose:"Scales the visual dimensions and outline border of the turtle cursor icon.",usage:"t.shapesize(2, 2, outline=3)"},{name:"turtle.pen(**kwargs)",returnType:"dict / None",purpose:"Returns or updates the complete dictionary of pen attributes simultaneously.",usage:"t.pen(pensize=4, pencolor='cyan')"},{name:"turtle.resizemode(rmode)",returnType:"str / None",purpose:"Sets cursor resize behavior ('auto', 'user', or 'noresize').",usage:"t.resizemode('user')"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:g}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 1"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent",children:["Line Thickness, ",e.jsx("span",{className:"font-mono",children:"pensize()"})," & Cursor Scaling"]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Establish professional visual hierarchy in your Python graphics. Discover stroke weight hierarchies, calligraphic dynamic tapering, and cursor geometry customization."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📏 Stroke Hierarchy (1px – 15px)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🖋️ Calligraphy Nib Tapering"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🐢 shapesize() Cursor Scale"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Stroke Weight & Join Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select different stroke weights to see how stroke thickness transforms geometry and visual prominence."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:[1,3,6,10,15].map(t=>e.jsxs("button",{onClick:()=>i(t),className:`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition cursor-pointer ${s===t?"bg-sky-500 text-white shadow-lg shadow-sky-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:["pensize(",t,")"]},t))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"180",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("rect",{x:"80",y:"40",width:"120",height:"120",fill:"none",stroke:"#38bdf8",strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("text",{x:"140",y:"105",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:[s,"px Stroke"]}),e.jsx("circle",{cx:"360",cy:"100",r:"50",fill:"none",stroke:"#34d399",strokeWidth:s}),e.jsx("circle",{cx:"360",cy:"100",r:"25",fill:"none",stroke:"#34d399",strokeWidth:Math.max(1,s/2)}),e.jsx("text",{x:"360",y:"175",fill:"#34d399",fontSize:"11",textAnchor:"middle",children:"Circle Vector"}),e.jsxs("g",{transform:"translate(560, 100)",children:[e.jsx("polygon",{points:"0,-25 35,0 0,25 8,0",fill:"#0284c7",stroke:"#38bdf8",strokeWidth:Math.max(1,s/2),transform:`scale(${Math.max(.8,s/4)})`}),e.jsxs("text",{x:"0",y:"55",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:["shapesize(",(s/4).toFixed(1),")"]})]})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Line Thickness & Cursor Method Signatures"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name & Aliases"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Purpose"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:a.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Code for Stroke Styling"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:h,title:"line_thickness_progression.py",highlightLines:[16,28,30]}),e.jsx(n,{fileModule:u,title:"tapered_calligraphy_pen.py",highlightLines:[15,20,22]}),e.jsx(n,{fileModule:x,title:"shape_scale_and_cursor_styling.py",highlightLines:[14,18,22,27]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur Tech Festival: Isometric Poster Design"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata and Mahima design an event poster featuring 3D isometric cubes. By applying ",e.jsx("code",{className:"text-sky-300",children:"pensize(8)"})," for the nearest front vertices and ",e.jsx("code",{className:"text-slate-400",children:"pensize(2)"})," for the receding back lines, they create depth perception without complex 3D libraries."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🖋️"})," Barrackpore Calligraphy Studio: Ribbon Spirals"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita writes an algorithmic calligraphy script that modulates ",e.jsx("code",{className:"text-emerald-300",children:"pensize()"})," based on mathematical sine functions. The resulting ribbon spirals simulate traditional Asian ink brush calligraphy with organic stroke pressure."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Stroke Styling Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Confusing pensize with shapesize"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"pensize()"})," changes line width. ",e.jsx("code",{className:"text-sky-300",children:"shapesize()"})," changes the cursor icon size. They are completely independent."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Overly Thick Strokes Swallowing Shapes"}),e.jsxs("p",{className:"text-slate-400",children:["Drawing a 20px polygon with ",e.jsx("code",{className:"text-rose-300",children:"pensize(30)"})," swallows the internal shape area, turning your geometry into an unrecognizable blob."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Expecting pensize to Change Stamps"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"t.stamp()"})," size is governed by ",e.jsx("code",{className:"text-sky-300",children:"shapesize()"}),", not by ",e.jsx("code",{className:"text-amber-300",children:"pensize()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Monolithic Stroke Weight Everywhere"}),e.jsx("p",{className:"text-slate-400",children:"Using default 1px lines for every element results in flat, amateurish graphics. Always establish a clear stroke hierarchy."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know that pensize(w) and width(w) set line stroke thickness","I know that shapesize(wid, len, outline) scales the cursor representation","I can inspect and batch-update pen state using the t.pen() dictionary","I understand how stroke hierarchy (1px, 4px, 10px) improves visual clarity","I can generate calligraphic tapering effects by varying pensize in loops","I understand why stamp() depends on shapesize rather than pensize"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How road maps use thin 1px lines for footpaths, 3px lines for city streets, and 8px double lines for national highways."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting ",e.jsx("code",{className:"text-sky-300",children:"t.shapesize(3, 3, outline=4)"})," creates a prominent cursor that helps students follow live classroom demonstrations."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Create a neon glowing effect by drawing a line with ",e.jsx("code",{className:"text-amber-300",children:"pensize(12)"})," in dark blue, then overdrawing it with ",e.jsx("code",{className:"text-emerald-300",children:"pensize(2)"})," in bright cyan!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In professional vector graphics engines like Adobe Illustrator, Figma, and Cairo, stroke cap joins (Round, Miter, Bevel) and stroke weight calibration form the bedrock of digital illustration. In Turtle, mastering ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pensize()"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"t.pen()"})," dictionary state transitions builds the essential foundation for procedural rendering."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(c,{title:"Line Thickness & Cursor Styling FAQs",questions:p})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(d,{content:m,title:"Topic 1: Line Thickness & Pen Styling Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(l,{note:"When we teach geometry and vector graphics at Coder & AccoTax in Barrackpore and Kolkata, line weight is the secret sauce that brings drawings to life. Don't let students draw everything with default 1px lines! Challenge them to use 3 tiers of stroke thickness in every project: 1px for helper grids, 4px for primary shapes, and 8px for bold title frames. It instantly makes student work look published and professional."})})]})]})};export{_ as default};

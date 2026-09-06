import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as c}from"./TeacherSukantaHui-DDN87fI5.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as h}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DEsnU7fn.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const p=[{question:"What are the two mandatory methods used to fill a shape with color in Turtle?",shortAnswer:"turtle.begin_fill() and turtle.end_fill().",explanation:"begin_fill() marks the starting vertex of the fill path, and end_fill() renders the interior color.",hint:"What pair of functions starts and finishes a fill operation?",level:"basic",codeExample:`t.begin_fill()
for _ in range(4): t.forward(100); t.left(90)
t.end_fill()`},{question:"What happens if you forget to call turtle.end_fill()?",shortAnswer:"The shape is never filled, remaining a hollow line outline.",explanation:"Tkinter only calculates and fills polygon raster data when end_fill() is explicitly invoked.",hint:"Will the color appear if the fill is never ended?",level:"basic",codeExample:"# Missing end_fill() → Shape remains hollow"},{question:"How do you set the fill color independently from the stroke color?",shortAnswer:"Use `turtle.fillcolor(color)`.",explanation:"fillcolor() specifies the interior color while preserving the current pencolor() stroke.",hint:"Which method specifically sets only the interior color?",level:"basic",codeExample:`t.pencolor('black')
t.fillcolor('cyan')`},{question:"What does turtle.filling() return?",shortAnswer:"A boolean indicating whether a fill operation is currently active (between begin_fill and end_fill).",explanation:"t.filling() returns True if begin_fill() was called without matching end_fill().",hint:"What query checks if a fill path is currently open?",level:"moderate",codeExample:"print(t.filling()) # True / False"},{question:"What happens if end_fill() is called on an unclosed polygon path?",shortAnswer:"Turtle automatically connects the last coordinate back to the begin_fill() coordinate with an invisible line and fills it.",explanation:"The graphics engine always closes the polygon automatically before filling.",hint:"Does Turtle automatically close unclosed paths when filling?",level:"moderate",codeExample:"# 3 lines of a square + end_fill() fills the triangular closure"},{question:"How does the Even-Odd winding rule affect self-intersecting stars?",shortAnswer:"Overlapping regions may be left unfilled if the winding number parity is even.",explanation:"Complex self-crossing polygons alternate filled and hollow interior pockets based on parity ray-casting.",hint:"Why is the center of a 5-pointed star sometimes unfilled?",level:"advanced",codeExample:"# 5-pointed star winding behavior"},{question:"Can multiple nested begin_fill() calls be active simultaneously?",shortAnswer:"No, calling begin_fill() while already filling resets the active fill path buffer.",explanation:"Always pair exactly one `begin_fill()` with one `end_fill()` before starting a new shape.",hint:"Can fill paths be nested or must they be sequential?",level:"moderate",codeExample:"# Always pair begin_fill() → draw → end_fill()"},{question:"How do you draw a filled circle in Turtle?",shortAnswer:"Call `t.begin_fill()`, then `t.circle(radius)`, then `t.end_fill()`.",explanation:"The circle curve forms a closed loop that is filled smoothly upon calling end_fill().",hint:"How do you wrap circle() with fill commands?",level:"basic",codeExample:`t.begin_fill()
t.circle(60)
t.end_fill()`},{question:"Does `t.penup()` cancel an active `begin_fill()`?",shortAnswer:"No, vertex points continue to be recorded even if the pen is up during movement.",explanation:"The fill polygon buffer records all coordinate movements between begin_fill and end_fill regardless of penup.",hint:"Does lifting the pen clear the fill vertex buffer?",level:"advanced",codeExample:`t.begin_fill()
t.forward(100); t.penup(); t.left(90); t.forward(100); t.pendown()
t.end_fill() # Fills the full polygon!`},{question:"How do you create a shape with no visible outline stroke, only solid fill?",shortAnswer:"Set `t.pencolor('')` or set `t.pencolor()` to the same color as `t.fillcolor()` or canvas background.",explanation:"Matching pencolor to fillcolor eliminates visual boundary stroke contrast.",hint:"How do you make the outline invisible against the fill?",level:"moderate",codeExample:"t.color('#38bdf8', '#38bdf8') # Same pen & fill"},{question:"What is the recommended design pattern for drawing multi-part composite scenes (e.g. house, car)?",shortAnswer:"Draw and fill each sub-component (base, roof, windows) with separate begin_fill()/end_fill() pairs.",explanation:"Breaking illustrations into modular filled polygons prevents unwanted color bleeding across shapes.",hint:"Should an entire town scene use one fill or multiple separate fills?",level:"basic",codeExample:`# Part 1: Roof → end_fill()
# Part 2: Walls → end_fill()`},{question:"Why should you avoid drawing complex 1000-line fractals inside a single begin_fill()?",shortAnswer:"Complex self-intersecting paths cause heavy CPU rasterization slowdowns and distorted fill artifacts.",explanation:"Filling thousands of self-intersecting edges forces Tkinter to calculate complex polygon triangulation.",hint:"What happens to performance when filling thousands of self-crossing lines?",level:"advanced",codeExample:"# Keep fractals wireframe or fill simple sub-polygons"},{question:"How do you fill an irregular hand-drawn polygon defined by an arbitrary list of (x, y) coordinates?",shortAnswer:"Call begin_fill(), iterate through coordinate points with goto(x, y), and call end_fill().",explanation:"Iterating through point lists creates custom freeform vector shapes.",hint:"How do you traverse a list of vertices with Turtle?",level:"moderate",codeExample:`t.begin_fill()
for x, y in polygon_vertices:
    t.goto(x, y)
t.end_fill()`},{question:"Can fillcolor be an RGB tuple like `(56, 189, 248)`?",shortAnswer:"Yes, provided `screen.colormode(255)` is enabled.",explanation:"fillcolor supports named strings, hex strings, and RGB tuples in either 1.0 or 255 modes.",hint:"Does fillcolor accept the same color formats as pencolor?",level:"basic",codeExample:`screen.colormode(255)
t.fillcolor((56, 189, 248))`},{question:"What happens if you change `fillcolor()` while inside a `begin_fill()` block?",shortAnswer:"The final color active at the exact moment `end_fill()` is called will be used for the entire shape.",explanation:"Fill color is evaluated at the conclusion of the fill operation.",hint:"Does the fill color apply when starting or when finishing?",level:"moderate",codeExample:`t.begin_fill()
t.fillcolor('red')
# draw...
t.fillcolor('blue')
t.end_fill() # Entire shape fills BLUE!`},{question:"How do you draw a semi-circular filled arc (pie slice or crescent)?",shortAnswer:"Move from center to perimeter, draw arc with `t.circle(r, extent)`, return to center, and call `end_fill()`.",explanation:"Combining radial straight lines with curved arc segments creates pie slices and wedges.",hint:"How do you close a pie wedge path back to the origin?",level:"moderate",codeExample:`t.begin_fill()
t.forward(100); t.left(90)
t.circle(100, 60); t.goto(0, 0)
t.end_fill()`},{question:"What is the result of `t.fillcolor()` with no arguments?",shortAnswer:"Returns the current fill color as a string or RGB tuple.",explanation:"Like all Turtle color methods, it functions as a getter when called without arguments.",hint:"What does calling fillcolor without arguments return?",level:"basic",codeExample:"current_fill = t.fillcolor()"},{question:"How do you draw a checkerboard grid with alternating black and white filled tiles?",shortAnswer:"Use 2D nested loops for row and column coordinates, filling each tile with `row + col % 2` color logic.",explanation:"Alternating fills across a 2D coordinate grid produces clean checkerboards.",hint:"What mathematical formula alternates between two states on a 2D grid?",level:"advanced",codeExample:"# Checkerboard generator"},{question:"Does `t.reset()` clear the active fill color?",shortAnswer:"Yes, reset() restores fillcolor back to default 'black' and pencolor to 'black'.",explanation:"reset() clears all drawings and restores initial turtle attribute states.",hint:"Does reset() restore factory default colors?",level:"moderate",codeExample:"t.reset() # fillcolor becomes 'black'"},{question:"How do you fill a donut shape (a shape with a hollow hole inside)?",shortAnswer:"Draw the outer shape and fill it, then draw and fill a smaller inner shape matching the canvas background color.",explanation:"Overdrawing with the background color creates the visual illusion of a hollow donut or aperture.",hint:"How do you punch a visual hole in a solid 2D shape?",level:"advanced",codeExample:"# Outer filled circle in gold → Inner circle in bgcolor"},{question:"What is the difference between filling convex vs concave polygons?",shortAnswer:"Convex polygons fill uniformly without ambiguity; concave polygons may produce complex internal winding triangles.",explanation:"Tkinter's polygon rasterizer handles concave shapes using the standard non-zero/even-odd winding algorithm.",hint:"Do concave shapes have internal indentations?",level:"expert",codeExample:"# Concave polygon fill"},{question:"Can two different turtles draw into the same begin_fill() path?",shortAnswer:"No, each Turtle instance maintains its own private vertex buffer.",explanation:"Fill paths are strictly encapsulated within the specific Turtle instance that invoked begin_fill().",hint:"Are fill buffers shared across multiple turtles?",level:"advanced",codeExample:"# Each turtle manages its own independent fill"},{question:"How do you create a stylized badge with a 4px black border and glowing cyan fill?",shortAnswer:"Set `t.pensize(4)`, `t.pencolor('black')`, `t.fillcolor('#38bdf8')`, and wrap drawing with `begin_fill()`/`end_fill()`.",explanation:"Combining pensize and dual colors creates professional vector UI components.",hint:"How do you configure stroke weight, stroke color, and fill color together?",level:"basic",codeExample:"t.pensize(4); t.color('black', '#38bdf8')"},{question:"What happens if an exception occurs between `begin_fill()` and `end_fill()`?",shortAnswer:"Execution halts immediately, leaving the incomplete fill path dangling without rendering color.",explanation:"Uncaught errors abort the Python process before reaching end_fill().",hint:"Will color render if code crashes before end_fill?",level:"moderate",codeExample:"# Aborted fill due to error"},{question:"How do you fill an equilateral triangle centered on the canvas?",shortAnswer:"Position turtle at `(0, -radius)`, wrap a 3-iteration loop with `begin_fill()` and `end_fill()`.",explanation:"3 sides with 120-degree exterior turns produce a closed equilateral triangle.",hint:"What exterior turn angle creates an equilateral triangle?",level:"basic",codeExample:`t.begin_fill()
for _ in range(3): t.forward(100); t.left(120)
t.end_fill()`},{question:"Why should `t.speed(0)` or `screen.tracer(0)` be used when filling complex multi-petal flowers?",shortAnswer:"To eliminate animation delays and render dozens of filled petals instantaneously.",explanation:"Instant rendering avoids waiting for each fill rasterization step during procedural generation.",hint:"How do you speed up rendering for complex filled geometry?",level:"moderate",codeExample:`screen.tracer(0)
# draw 50 filled petals
screen.update()`},{question:"How do you fill a regular octagon (stop sign shape)?",shortAnswer:"Wrap an 8-iteration loop with forward and 45-degree turns inside `begin_fill()` and `end_fill()`.",explanation:"360 / 8 = 45-degree exterior angles form a closed 8-sided polygon.",hint:"What angle is 360 divided by 8?",level:"basic",codeExample:`t.begin_fill()
for _ in range(8): t.forward(50); t.left(45)
t.end_fill()`},{question:"What is the effect of changing `t.pencolor()` during drawing while inside `begin_fill()`?",shortAnswer:"Individual line segments will have different stroke colors, while the interior is filled with a single solid `fillcolor`.",explanation:"Line stroke colors update per segment, but the interior fill uses one unified fillcolor.",hint:"Can a shape have a multi-colored outline with a solid filled center?",level:"advanced",codeExample:"# Multi-colored perimeter with solid center fill"},{question:"How do you draw a heart shape with smooth red fill in Turtle?",shortAnswer:"Combine left straight line, left 180-degree circular arc, right 180-degree circular arc, and right straight line inside fill commands.",explanation:"A classic Turtle geometry problem combining 2 straight lines and 2 semi-circles.",hint:"What geometric parts make up a standard 2D heart?",level:"advanced",codeExample:"# Classic Turtle Heart Shape"},{question:"What is the summary golden rule of Turtle fill mechanics?",shortAnswer:"Always explicitly set `fillcolor()`, call `begin_fill()` before the first vertex, draw a closed path, and call `end_fill()` immediately after the final vertex.",explanation:"Following this 4-step sequence guarantees perfect, artifact-free vector fills in every Python graphics program.",hint:"What 4 steps guarantee reliable filled shapes?",level:"basic",codeExample:"# 1. fillcolor() → 2. begin_fill() → 3. closed path → 4. end_fill()"}],g=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 3 - Fill mechanics: begin_fill(), end_fill(), fillcolor()\r
File: fill_mechanics_basic.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the fundamental begin_fill() and end_fill() lifecycle in Python Turtle.\r
"""\r
\r
import turtle\r
\r
def draw_filled_shapes():\r
    screen = turtle.Screen()\r
    screen.title("Turtle Fill Mechanics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(4)\r
    t.pensize(3)\r
\r
    # Shape 1: Solid Filled Emerald Pentagon\r
    t.penup(); t.goto(-200, 50); t.pendown()\r
    t.pencolor("#34d399")\r
    t.fillcolor("#065f46")  # Dark emerald fill\r
\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(90)\r
        t.left(72)\r
    t.end_fill()\r
\r
    # Shape 2: Filled Golden Star with Overlapping Fill\r
    t.penup(); t.goto(100, 50); t.pendown()\r
    t.pencolor("#fbbf24")\r
    t.fillcolor("#d97706")  # Amber fill\r
\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(120)\r
        t.right(144)\r
    t.end_fill()\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_filled_shapes()\r
`,u=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 3 - Fill mechanics: begin_fill(), end_fill(), fillcolor()\r
File: multi_color_house_composite.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates combining multiple distinct filled components (walls, roof, door, window)\r
to compose a complete multi-colored illustration.\r
"""\r
\r
import turtle\r
\r
def draw_composite_house():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Component Filled House - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.speed(5)\r
    t.pensize(2)\r
\r
    # 1. Base Wall (Blue Rectangle)\r
    t.penup(); t.goto(-100, -100); t.pendown()\r
    t.color("#0284c7", "#0369a1")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(200)\r
        t.left(90)\r
        t.forward(150)\r
        t.left(90)\r
    t.end_fill()\r
\r
    # 2. Roof (Rose Red Triangle)\r
    t.penup(); t.goto(-120, 50); t.pendown()\r
    t.color("#f43f5e", "#be123c")\r
    t.begin_fill()\r
    t.goto(0, 150)\r
    t.goto(120, 50)\r
    t.goto(-120, 50)\r
    t.end_fill()\r
\r
    # 3. Door (Amber Rectangle)\r
    t.penup(); t.goto(-30, -100); t.pendown()\r
    t.color("#fbbf24", "#b45309")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(60)\r
        t.left(90)\r
        t.forward(90)\r
        t.left(90)\r
    t.end_fill()\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_composite_house()\r
`,m=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 3 - Fill mechanics: begin_fill(), end_fill(), fillcolor()\r
File: star_polygon_winding_fill.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates self-intersecting polygon fill rules (even-odd winding rule)\r
when filling complex star polygons in Python Turtle.\r
"""\r
\r
import turtle\r
\r
def draw_winding_stars():\r
    screen = turtle.Screen()\r
    screen.title("Winding Rule & Self-Intersecting Fills - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(6)\r
    t.pensize(3)\r
\r
    # 5-pointed star: Center is filled depending on parity\r
    t.penup(); t.goto(-180, 0); t.pendown()\r
    t.color("#38bdf8", "#0284c7")\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(140)\r
        t.right(144)\r
    t.end_fill()\r
\r
    # 8-pointed star: Complex interior geometry\r
    t.penup(); t.goto(100, 0); t.pendown()\r
    t.color("#f43f5e", "#9f1239")\r
    t.begin_fill()\r
    for _ in range(8):\r
        t.forward(120)\r
        t.left(135)\r
    t.end_fill()\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_winding_stars()\r
`,x=`================================================================================\r
  TOPIC 3: FILL MECHANICS: BEGIN_FILL(), END_FILL(), AND FILLCOLOR()\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS FILL MECHANICS IN TURTLE GRAPHICS?\r
--------------------------------------------------------------------------------\r
By default, drawing commands only produce hollow line strokes (wireframes).\r
To create solid colored geometric figures, Turtle uses a 3-step fill protocol:\r
\r
1. \`t.fillcolor(color)\`:\r
   - Sets the active interior color (using color names, hex, or RGB tuples).\r
\r
2. \`t.begin_fill()\`:\r
   - Records the start of a closed polygon path.\r
   - Turtle tracks all subsequent vertices.\r
\r
3. \`t.end_fill()\`:\r
   - Automatically connects the current position back to the \`begin_fill()\` origin.\r
   - Fills the enclosed internal area with the active \`fillcolor\`.\r
\r
2. THE CLOSURE RULE & UNCLOSED SHAPES\r
--------------------------------------------------------------------------------\r
If you call \`end_fill()\` on a non-closed path (such as a 3-sided open triangle),\r
Turtle automatically draws an invisible straight line connecting the end point\r
back to the start point and fills that triangular area.\r
Best practice: Always explicitly close your geometric paths before calling \`end_fill()\`.\r
\r
3. FILLING SELF-INTERSECTING POLYGONS (WINDING RULE)\r
--------------------------------------------------------------------------------\r
When filling self-crossing stars (such as a 5-pointed star drawn with 144° turns),\r
Tkinter applies the Even-Odd parity rule:\r
- Outer star points are filled with color.\r
- The central pentagon may be left hollow or filled depending on coordinate parity.\r
\r
4. COMMON PITFALLS\r
--------------------------------------------------------------------------------\r
- Forgetting \`end_fill()\`: The shape remains hollow and no color appears.\r
- Calling \`begin_fill()\` multiple times without matching \`end_fill()\`: Causes\r
  merged distorted fills across multiple disconnected shapes.\r
- Changing \`fillcolor()\` AFTER \`end_fill()\`: Only shapes drawn afterwards will\r
  use the new fill color.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,b=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fillPulse {
  0%, 100% { fill-opacity: 0.8; }
  50% { fill-opacity: 1; }
}
`,A=()=>{const[l,a]=o.useState(!0),[n,s]=o.useState("pentagon"),d=[{name:"turtle.begin_fill()",returnType:"None",purpose:"Marks the starting vertex of a closed polygon path for color filling.",usage:"t.begin_fill()"},{name:"turtle.end_fill()",returnType:"None",purpose:"Renders the interior color and completes the active fill path buffer.",usage:"t.end_fill()"},{name:"turtle.fillcolor(color)",returnType:"str / tuple / None",purpose:"Sets or queries the interior shape fill color.",usage:"t.fillcolor('#065f46')"},{name:"turtle.filling()",returnType:"bool",purpose:"Returns True if begin_fill() is currently active without matching end_fill().",usage:"if not t.filling(): t.begin_fill()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:b}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 3"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent",children:["Fill Mechanics: ",e.jsx("span",{className:"font-mono",children:"begin_fill()"}),", ",e.jsx("span",{className:"font-mono",children:"end_fill()"})," & Fills"]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Transform wireframe outlines into solid, vibrant illustrations. Learn the vertex recording protocol, automatic polygon closure, multi-component composition, and winding rules."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🟢 begin_fill() & end_fill()"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏠 Multi-Part Composite Art"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⭐ Self-Intersecting Star Parity"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Polygon Fill Mechanics Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle the fill state to observe how Python Turtle handles internal rasterization and wireframe outlines."})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("button",{onClick:()=>a(!l),className:`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${l?"bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25":"bg-gray-800 text-slate-400 border border-slate-700 hover:bg-gray-700"}`,children:e.jsx("span",{children:l?"✔ end_fill() Active":"⭕ Wireframe Only (No Fill)"})}),e.jsx("div",{className:"flex bg-gray-900 p-1 rounded-xl border border-slate-700",children:["pentagon","star","house"].map(t=>e.jsx("button",{onClick:()=>s(t),className:`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition cursor-pointer ${n===t?"bg-sky-500 text-white":"text-slate-400 hover:text-white"}`,children:t},t))})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"200",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),n==="pentagon"&&e.jsxs("g",{transform:"translate(350, 110)",children:[e.jsx("polygon",{points:"0,-75 71,-23 44,61 -44,61 -71,-23",fill:l?"#065f46":"none",stroke:"#34d399",strokeWidth:"4",strokeLinejoin:"round"}),e.jsx("text",{x:"0",y:"5",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:l?"Filled Pentagon":"Wireframe Pentagon"}),e.jsx("text",{x:"0",y:"25",fill:"#34d399",fontSize:"11",textAnchor:"middle",children:l?"fillcolor('#065f46')":"begin_fill() omitted"})]}),n==="star"&&e.jsxs("g",{transform:"translate(350, 115)",children:[e.jsx("polygon",{points:"0,-70 20,-20 70,-20 30,10 45,60 0,30 -45,60 -30,10 -70,-20 -20,-20",fill:l?"#d97706":"none",stroke:"#fbbf24",strokeWidth:"3",strokeLinejoin:"round"}),e.jsxs("text",{x:"0",y:"85",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:["5-Pointed Star (",l?"Solid Fill":"Hollow Stroke",")"]})]}),n==="house"&&e.jsxs("g",{transform:"translate(350, 120)",children:[e.jsx("rect",{x:"-80",y:"-30",width:"160",height:"80",fill:l?"#0369a1":"none",stroke:"#38bdf8",strokeWidth:"3"}),e.jsx("polygon",{points:"-95,-30 0,-85 95,-30",fill:l?"#be123c":"none",stroke:"#f43f5e",strokeWidth:"3"}),e.jsx("rect",{x:"-20",y:"10",width:"40",height:"40",fill:l?"#b45309":"none",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("text",{x:"0",y:"75",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",children:"Composite Multi-Part Fills"})]})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Fill Mechanics Method Prototypes"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Functionality"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:d.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Practical Python Fill Mechanics Code Files"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:g,title:"fill_mechanics_basic.py",highlightLines:[18,19,23,29,33]}),e.jsx(i,{fileModule:u,title:"multi_color_house_composite.py",highlightLines:[18,24,29,34,39,45]}),e.jsx(i,{fileModule:m,title:"star_polygon_winding_fill.py",highlightLines:[18,22,27,31]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-amber-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur Architecture Project: Village Landscape"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata and Mahima design a detailed landscape scene with hills, trees, and cottages. By isolating each component with its own ",e.jsx("code",{className:"text-amber-300 font-mono",children:"begin_fill()"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"end_fill()"})," pair, they compose multi-layered scenes without color bleeding."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-teal-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🇮🇳"})," Barrackpore National Pride: Tiranga Flag Generator"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu codes the Indian National Flag in Python Turtle. He renders three distinct filled rectangles (Saffron, White, Green) and overlays the 24-spoke navy blue Ashoka Chakra in the center with mathematical precision."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Fill Mechanics Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting end_fill()"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-amber-300",children:"begin_fill()"})," without ",e.jsx("code",{className:"text-emerald-300",children:"end_fill()"})," leaves the polygon buffer open and no color will ever render!"]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Shared Fill Across Multiple Shapes"}),e.jsxs("p",{className:"text-slate-400",children:["Moving to a second shape before calling ",e.jsx("code",{className:"text-emerald-300",children:"end_fill()"})," joins both shapes into one distorted, merged polygon fill."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Changing fillcolor After end_fill()"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-sky-300",children:"fillcolor()"})," must be set *before* or during the fill path; changing it after has zero effect on the completed shape."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Winding Rule Surprises in Star Shapes"}),e.jsx("p",{className:"text-slate-400",children:"Self-intersecting paths may leave inner star holes uncolored due to the even-odd parity rule. Use convex outer vertices for solid stars."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the 3-step fill sequence: fillcolor() → begin_fill() → draw → end_fill()","I understand that end_fill() automatically closes unclosed polygon endpoints","I can check whether a fill is currently active using the t.filling() boolean query","I know to isolate each sub-component in composite illustrations with its own fill pair","I understand how the even-odd winding rule behaves with self-intersecting stars","I can create borderless solid color fills by matching pencolor to fillcolor"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why 2D vector graphic formats (SVG) separate path strokes (`stroke`) from interior area fills (`fill`)."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How calling ",e.jsx("code",{className:"text-sky-300",children:"t.circle(r)"})," inside ",e.jsx("code",{className:"text-sky-300",children:"begin_fill()"})," and ",e.jsx("code",{className:"text-sky-300",children:"end_fill()"})," renders perfectly smooth solid disks."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Build a crescent moon by drawing a large white circle, then overlaying an offset circle filled with the dark canvas background color!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In game engines and vector rasterizers, polygon rasterization converts vector vertex coordinates into filled pixel buffers via scanline or triangulation algorithms. In Turtle, mastering ",e.jsx("code",{className:"text-purple-300 font-mono",children:"begin_fill()"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"end_fill()"})," gives you the foundational mental model for sprite rendering, CAD solid modeling, and procedural vector geometry."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(h,{title:"Turtle Fill Mechanics FAQs",questions:p})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(f,{content:x,title:"Topic 3: Turtle Fill Mechanics Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(c,{note:"When we build graphic applications at Coder & AccoTax in Barrackpore and Kolkata, students often forget that Turtle connects the beginning and end of a fill with an invisible straight line. I always remind students: 'Every begin_fill() MUST have its own end_fill() before you pick up the pen to start the next shape!' Once students master modular component fills, they can build stunning castles, solar systems, and interactive board games."})})]})]})};export{A as default};

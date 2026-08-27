import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as u}from"./TeacherSukantaHui-CC0AKmkm.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const w=[{question:"What is the primary role of an outer loop in generative geometric patterns?",shortAnswer:"The outer loop orchestrates global transformations such as radial rotations, grid translations, or layer scaling.",explanation:"Outer loops position or orient the drawing canvas before the inner loop draws the individual shape.",hint:"What does the outer loop control in nested graphics?",level:"basic",codeExample:"for spoke in range(36): ... t.left(10)"},{question:"What is the primary role of an inner loop in nested geometry?",shortAnswer:"The inner loop renders the local geometric primitive, such as tracing the sides of a polygon or petal.",explanation:"The inner loop executes repeatedly within each outer cycle to draw the shape.",hint:"What does the inner loop draw?",level:"basic",codeExample:"for _ in range(4): t.forward(100); t.left(90)"},{question:"How many times does the inner loop body run in `for i in range(12): for j in range(4):`?",shortAnswer:"48 times (12 * 4).",explanation:"Total operations in nested loops equal the product of outer and inner iteration counts.",hint:"What is 12 multiplied by 4?",level:"basic",codeExample:"12 * 4 = 48 iterations"},{question:"How do you construct a radial rosette mandala of squares in Python Turtle?",shortAnswer:"Outer loop: 36 iterations rotating 10 degrees. Inner loop: 4 iterations drawing a square.",explanation:"36 squares rotated by 10° (36 * 10° = 360°) form a symmetric circular rosette.",hint:"How do you rotate 36 squares around the origin?",level:"moderate",codeExample:`for _ in range(36):
    for _ in range(4): t.forward(80); t.left(90)
    t.left(10)`},{question:"How do you generate a 2D matrix grid of shapes (e.g. 5 rows by 5 columns)?",shortAnswer:"Outer loop iterates rows (Y coordinates); inner loop iterates columns (X coordinates).",explanation:"Nested 2D iteration maps matrix coordinates `(x, y)` to canvas positions.",hint:"Which loop controls rows and which controls columns?",level:"moderate",codeExample:`for r in range(5):
    for c in range(5):
        t.goto(x0 + c*dx, y0 - r*dy); draw_cell()`},{question:"How do you create a checkerboard pattern using nested loops?",shortAnswer:"Check if `(row + col) % 2 == 0` to alternate between black and white fill colors for each cell.",explanation:"Parity of row + column indices yields the classic alternating checkerboard pattern.",hint:"What mathematical parity check creates alternating tiles?",level:"moderate",codeExample:"color = 'black' if (r + c) % 2 == 0 else 'white'"},{question:"What is a spinning fractal vortex in Turtle?",shortAnswer:"A pattern where each outer iteration draws a polygon with an expanding side length and a slight rotational twist.",explanation:"Expanding side lengths combined with rotational offsets create logarithmic spiral vortices.",hint:"What happens when polygon size grows and angle twists each loop?",level:"moderate",codeExample:`for i in range(60):
    for _ in range(4): t.forward(i*3); t.left(90)
    t.left(6)`},{question:"Why is `screen.tracer(0)` essential when rendering nested loops with 1,000+ iterations?",shortAnswer:"To suppress intermediate animations and render the final complex artwork instantaneously.",explanation:"Rendering 1,000+ turtle animations in real time can take minutes without tracer(0).",hint:"How do you prevent severe lag in heavy nested loops?",level:"basic",codeExample:`screen.tracer(0)
# nested loops...
screen.update()`},{question:"How do you ensure a turtle returns to its original heading after an inner polygon loop?",shortAnswer:"Ensure the inner loop completes a full 360-degree rotation (`sides * (360 / sides) = 360°`).",explanation:"Preserving rotational invariants prevents unintended angular drift.",hint:"Why does an inner polygon loop return the heading to 0° relative?",level:"advanced",codeExample:"# 4 * 90 = 360 deg -> heading unchanged"},{question:"How do you draw concentric nested polygons with diminishing sizes using nested loops?",shortAnswer:"Outer loop iterates over sizes from largest to smallest; inner loop draws each polygon.",explanation:"Descending loops layer smaller filled shapes over larger ones without occluding them.",hint:"How does loop ordering affect layered fills?",level:"moderate",codeExample:`for size in range(200, 20, -30):
    for _ in range(6): t.forward(size); t.left(60)`},{question:"What happens if you accidentally place the spoke rotation `t.left(10)` inside the inner loop?",shortAnswer:"The polygon fails to form properly because every side turns by 100° (90 + 10) instead of 90°.",explanation:"Placing outer transformation steps inside the inner loop scrambles the polygon shape.",hint:"Where must the outer spoke pivot be placed relative to the inner loop?",level:"moderate",codeExample:"# BUG: t.left(10) must be OUTSIDE the inner loop"},{question:"How do you draw a nested Islamic geometric star pattern?",shortAnswer:"Combine outer radial rotational loops with inner intersecting star polygon loops.",explanation:"Overlapping rotated star motifs create intricate Islamic arabesques.",hint:"What nested symmetry generates arabesque tile patterns?",level:"expert",codeExample:"# Islamic geometric tessellation"},{question:"How can 3 nested loops be used in Turtle Graphics?",shortAnswer:"Loop 1: Grid rows, Loop 2: Grid columns, Loop 3: Petals/sides within each cell.",explanation:"3-level nesting creates a grid where every cell contains its own complete mandala.",hint:"How do you draw a grid of mandalas?",level:"advanced",codeExample:"for r in rows: for c in cols: for spoke in mandala:"},{question:"What is time complexity of a 3-level nested loop with counts N, M, K?",shortAnswer:"O(N * M * K) cubic time complexity.",explanation:"The total number of primitive drawing steps is the product of all three bounds.",hint:"What is the Big-O complexity of 3 nested loops?",level:"moderate",codeExample:"# O(N * M * K)"},{question:"How do you create a rainbow color gradient across nested loop iterations?",shortAnswer:"Compute hue `h = outer_index / total_outer` and convert HSV to RGB using Python's `colorsys` module.",explanation:"Parametric hue modulation maps outer loop progress to the visible color spectrum.",hint:"How does colorsys map loop index to rainbow hues?",level:"advanced",codeExample:`import colorsys
r, g, b = colorsys.hsv_to_rgb(i / total, 1.0, 1.0)`},{question:"How do you draw a hexagonal honeycomb lattice with nested loops?",shortAnswer:"In outer loop (rows), offset odd rows horizontally by `0.75 * side` and vertically by `sqrt(3) * side`.",explanation:"Hexagonal grid coordinates require staggering alternate rows.",hint:"How are odd rows staggered in hexagonal grids?",level:"expert",codeExample:"offset_x = (r % 2) * (col_spacing / 2)"},{question:"Why should `penup()` and `pendown()` be used when moving between grid cells in nested loops?",shortAnswer:"To prevent unwanted connecting lines between adjacent cells across rows and columns.",explanation:"Lifting the pen during grid repositioning keeps cells visually decoupled.",hint:"How do you navigate between grid cells cleanly?",level:"basic",codeExample:"t.penup(); t.goto(x, y); t.pendown()"},{question:"How do you draw a kaleidoscope snowflake in Turtle using nested loops?",shortAnswer:"Outer loop: 6 branches (60° turn). Inner loop: recursive branching twigs along each spoke.",explanation:"Hexagonal 6-fold radial symmetry produces classic snowflake crystals.",hint:"What rotational symmetry matches snowflakes?",level:"advanced",codeExample:"for _ in range(6): draw_branch(); t.left(60)"},{question:"How do you create a nested spiral of shrinking triangles?",shortAnswer:"Outer loop rotates and shifts inwards; inner loop draws a 3-sided triangle with shrinking side length.",explanation:"Scaling both rotation and length creates logarithmic fractal spirals.",hint:"How do shrinking triangles form a spiral?",level:"moderate",codeExample:"for i in range(50): polygon(3, 100 - i*2); t.left(10)"},{question:"What is loop nesting depth limit in Python?",shortAnswer:"Python has no fixed syntactical limit, but nesting beyond 3-4 levels hurts readability and maintainability.",explanation:"Refactoring deeply nested loops into helper functions is recommended clean code practice.",hint:"Why should deeply nested loops be refactored into functions?",level:"moderate",codeExample:"# Best practice: decompose nested loops into helper functions"},{question:"How do you draw a circular clock dial with 12 hour tick marks and 60 minute ticks?",shortAnswer:"Outer loop: 60 iterations (6° turn). Inner check: if `i % 5 == 0` draw long tick, else short tick.",explanation:"Modulo indexing distinguishes hour positions from minute tick marks.",hint:"How does modulo 5 distinguish hour ticks from minute ticks?",level:"moderate",codeExample:`for i in range(60):
    tick_len = 15 if i % 5 == 0 else 5`},{question:"How do you generate a Spirograph mathematical curve with nested loops?",shortAnswer:"Iterate over parametric angle `t` from 0 to `2 * pi * k`, calculating epicycloid coordinates.",explanation:"Epicycloids and hypotrochoids simulate gears rotating inside gears.",hint:"What mathematical equations model Spirograph gear curves?",level:"expert",codeExample:"# Hypotrochoid parametric equations"},{question:"How can nested list comprehension coordinates be fed into a Turtle loop?",shortAnswer:"Precompute grid coordinates: `grid = [(x, y) for y in y_vals for x in x_vals]`, then loop `for x, y in grid:`.",explanation:"Decouples spatial math from drawing execution.",hint:"How do 2D list comprehensions generate grid point lists?",level:"advanced",codeExample:"grid = [(c*50, r*50) for r in range(5) for c in range(5)]"},{question:"How do you draw a dartboard target with nested loops?",shortAnswer:"Outer loop: concentric ring radii. Inner loop: 20 radial sector divisions.",explanation:"Combining radial spoke lines with concentric circles produces tournament dartboards.",hint:"What geometry forms a regulation dartboard?",level:"advanced",codeExample:"# Concentric rings + 20 angular sectors"},{question:"What is an isotropic geometric pattern?",shortAnswer:"A pattern with uniform physical and structural properties in all directions (high rotational symmetry).",explanation:"Radial nested loops naturally generate isotropic graphics.",hint:"What term describes rotational uniformity in all directions?",level:"expert",codeExample:"# High rotational symmetry"},{question:"How do you prevent turtle coordinate overflow when generating large nested grids?",shortAnswer:"Calculate the total bounding box `(cols * spacing, rows * spacing)` and offset `start_x = -total_width / 2`.",explanation:"Centering the entire grid bounding box keeps all cells within canvas visible boundaries.",hint:"How do you center an entire matrix grid on the canvas?",level:"moderate",codeExample:"start_x = -(cols * spacing) / 2"},{question:"Can nested loops draw 3D isometric cube grids?",shortAnswer:"Yes, by drawing 3 rhombuses (top, left, right faces) with appropriate shading for each grid cell.",explanation:"Combining 3 shaded polygons inside the inner loop renders isometric 3D cubes.",hint:"How do 3 shaded rhombuses create a 3D isometric cube?",level:"advanced",codeExample:"# Isometric cube = top, left, right rhombuses"},{question:"How do you randomize orientation inside nested loops for organic mosaics?",shortAnswer:"In the inner loop, add a slight random jitter: `t.left(random.uniform(-5, 5))`.",explanation:"Adding controlled perturbations creates hand-drawn or mosaic aesthetics.",hint:"How do you simulate handmade mosaic irregularity?",level:"moderate",codeExample:"t.left(random.uniform(-5, 5))"},{question:"What debugging technique is best for diagnosing nested loop drawing glitches?",shortAnswer:"Slow down turtle speed (`t.speed(1)`), add print statements with `(outer_i, inner_j)`, and test with small bounds (2x2).",explanation:"Isolating small iteration counts makes coordinate bugs immediately visible.",hint:"How do you debug nested loops visually?",level:"basic",codeExample:"print(f'Row {r}, Col {c}')"},{question:"What is the summary rule for mastering nested loops in Python Graphics?",shortAnswer:"Separate global layout (outer loop: rotation, rows, scaling) from local primitive drawing (inner loop: sides, arcs, fills), and always preserve state invariants.",explanation:"Clear conceptual separation between global positioning and local geometry makes any complex design modular and bug-free.",hint:"What conceptual separation makes nested graphics easy?",level:"basic",codeExample:"# Outer: Global position/angle | Inner: Local polygon edges"}],b=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 2 - Nested loops for complex geometric pattern creation\r
File: nested_loop_rosette_mandala.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates nested loop architecture:\r
- Outer Loop: Rotates the radial orientation around 360 degrees\r
- Inner Loop: Draws the individual polygon/petal shape at each rotation\r
"""\r
\r
import turtle\r
\r
def draw_nested_mandala():\r
    screen = turtle.Screen()\r
    screen.title("Nested Loop Rosette Mandala - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    total_petals = 36\r
    spoke_turn = 360 / total_petals  # 10 degrees\r
\r
    # Outer Loop: Controls radial rotation around 360 degrees\r
    for spoke in range(total_petals):\r
        t.color("#38bdf8" if spoke % 2 == 0 else "#34d399")\r
\r
        # Inner Loop: Draws a regular square at the current heading\r
        for _ in range(4):\r
            t.forward(100)\r
            t.left(90)\r
\r
        # Pivot to next spoke\r
        t.left(spoke_turn)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_nested_mandala()\r
`,v=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 2 - Nested loops for complex geometric pattern creation\r
File: matrix_grid_tessellation.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates 2D matrix grid tessellation using nested loops:\r
- Outer Loop: Iterates over rows (Y coordinates)\r
- Inner Loop: Iterates over columns (X coordinates)\r
"""\r
\r
import turtle\r
\r
def draw_tessellation_grid():\r
    screen = turtle.Screen()\r
    screen.title("2D Matrix Grid Tessellation - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    rows, cols = 5, 5\r
    cell_size = 60\r
    spacing = 75\r
    start_x, start_y = -150, 150\r
\r
    # Outer Loop: Rows (Y)\r
    for r in range(rows):\r
        y = start_y - (r * spacing)\r
\r
        # Inner Loop: Columns (X)\r
        for c in range(cols):\r
            x = start_x + (c * spacing)\r
\r
            # Move to cell position\r
            t.penup()\r
            t.goto(x, y)\r
            t.pendown()\r
\r
            # Dynamic color pattern based on (r + c) parity\r
            t.color("#fbbf24" if (r + c) % 2 == 0 else "#f43f5e")\r
\r
            # Draw cell diamond\r
            for _ in range(4):\r
                t.forward(cell_size / 2)\r
                t.left(90)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_tessellation_grid()\r
`,_=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 2 - Nested loops for complex geometric pattern creation\r
File: spinning_fractal_squares.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates nested loop depth scaling:\r
- Outer Loop: Iterates over 50 rotational angle steps\r
- Inner Loop: Draws a 4-sided square with dynamic length scaling\r
"""\r
\r
import turtle\r
\r
def draw_spinning_vortex():\r
    screen = turtle.Screen()\r
    screen.title("Spinning Fractal Vortex - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # 60 outer rotations\r
    for i in range(60):\r
        # Color shifting palette\r
        t.color("#38bdf8" if i % 3 == 0 else "#a78bfa" if i % 3 == 1 else "#34d399")\r
\r
        # Inner square with side length expanding with i\r
        for _ in range(4):\r
            t.forward(i * 3 + 20)\r
            t.left(90)\r
\r
        # 5-degree rotational twist per square\r
        t.left(6)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_spinning_vortex()\r
`,j=`================================================================================\r
  TOPIC 2: NESTED LOOPS FOR COMPLEX GEOMETRIC PATTERN CREATION\r
  MODULE: 005_003 - Turtle Patterns & Geometric Mathematics\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT ARE NESTED LOOPS IN GRAPHICS?\r
--------------------------------------------------------------------------------\r
A nested loop consists of one loop placed inside the body of another loop.\r
In computational geometry:\r
- Outer Loop: Controls global layout (radial rotations, grid rows, scale layers).\r
- Inner Loop: Draws the local geometric primitive (polygon edges, circle arcs, petals).\r
\r
2. COMMON NESTED LOOP ARCHITECTURES\r
--------------------------------------------------------------------------------\r
Architecture 1: Radial Rosettes & Mandalas\r
  Outer Loop: for spoke in range(N):\r
                # Inner Loop:\r
                for side in range(sides):\r
                    t.forward(len)\r
                    t.left(360 / sides)\r
                t.left(360 / N)\r
\r
Architecture 2: 2D Matrix Grids (Rows & Columns)\r
  Outer Loop: for r in range(rows):\r
                # Inner Loop:\r
                for c in range(cols):\r
                    t.goto(x0 + c * dx, y0 - r * dy)\r
                    draw_cell()\r
\r
Architecture 3: Dynamic Expanding Vortices\r
  Outer Loop: for i in range(count):\r
                # Inner Loop:\r
                for _ in range(4):\r
                    t.forward(i * scale)\r
                    t.left(90)\r
                t.left(twist_angle)\r
\r
3. COMPLEXITY & PERFORMANCE\r
--------------------------------------------------------------------------------\r
- If outer loop runs \`M\` times and inner loop runs \`N\` times, the inner body\r
  executes \`M * N\` total times.\r
- For large grids (e.g. 50x50 = 2,500 shapes), always enable \`screen.tracer(0)\`\r
  and flush with \`screen.update()\`.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,N=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes mandalaSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`,O=()=>{const[o,p]=l.useState(18),[s,h]=l.useState(4),[n,m]=l.useState(4),x=[{name:"Outer Loop: for spoke in range(N)",returnType:"Global Transform",purpose:"Rotates the turtle around 360° or steps across 2D grid coordinates (rows).",usage:"for spoke in range(36): ... t.left(10)"},{name:"Inner Loop: for side in range(S)",returnType:"Local Geometry",purpose:"Renders the local geometric polygon or spoke motif at the current orientation.",usage:"for _ in range(4): t.forward(100); t.left(90)"},{name:"2D Grid: for r ... for c ...",returnType:"Spatial Matrix",purpose:"Generates 2D planar matrix layouts with row/column coordinate offsets.",usage:"t.goto(x0 + c*dx, y0 - r*dy)"},{name:"Dynamic Scaling: (i * scale)",returnType:"Logarithmic Depth",purpose:"Increases or shrinks polygon side dimensions across successive outer iterations.",usage:"side = i * 4 + 20"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:N}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_003 · Turtle Patterns & Geometric Mathematics · Topic 2"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Nested Loops for Complex Geometric Patterns"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Harness two-dimensional iteration. Master nested loops to orchestrate kaleidoscopic mandalas, tessellate 2D matrix checkerboards, and generate swirling fractal vortices."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌀 Outer Spoke Rotation"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 Inner Polygon Geometry"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏁 2D Matrix Grid Tessellations"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🌀"})," Interactive Nested Mandala & Matrix Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the outer spoke count and inner polygon sides to see how nested loops generate intricate algorithmic mandalas."})]}),e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Spokes (Outer):"}),e.jsx("input",{type:"range",min:"6",max:"36",step:"2",value:o,onChange:t=>p(Number(t.target.value)),className:"w-20 accent-emerald-400 cursor-pointer"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300 w-5",children:o})]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Sides (Inner):"}),[3,4,5,6].map(t=>e.jsx("button",{onClick:()=>h(t),className:`w-6 h-6 rounded text-xs font-bold transition cursor-pointer ${s===t?"bg-emerald-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:t},t))]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Grid:"}),[3,4,5].map(t=>e.jsxs("button",{onClick:()=>m(t),className:`w-6 h-6 rounded text-xs font-bold transition cursor-pointer ${n===t?"bg-cyan-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:[t,"x",t]},t))]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-emerald-400 mb-2",children:["Outer (",o," spokes) × Inner (",s," sides) = ",o*s," Ops"]}),e.jsx("svg",{viewBox:"0 0 260 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-xs h-auto",children:e.jsx("g",{transform:"translate(130, 110)",children:Array.from({length:o}).map((t,r)=>{const c=r*360/o;return e.jsx("g",{transform:`rotate(${c})`,children:s===4?e.jsx("rect",{x:"0",y:"0",width:"55",height:"55",fill:"none",stroke:r%2===0?"#34d399":"#38bdf8",strokeWidth:"1.2",opacity:"0.8"}):s===3?e.jsx("polygon",{points:"0,0 60,0 30,-50",fill:"none",stroke:r%2===0?"#34d399":"#fbbf24",strokeWidth:"1.2",opacity:"0.8"}):e.jsx("circle",{cx:"30",cy:"0",r:"30",fill:"none",stroke:r%2===0?"#a78bfa":"#38bdf8",strokeWidth:"1.2",opacity:"0.8"})},r)})})})]}),e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["2D Matrix: ",n," rows × ",n," cols = ",n*n," Cells"]}),e.jsx("svg",{viewBox:"0 0 260 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-xs h-auto",children:e.jsx("g",{transform:"translate(30, 20)",children:Array.from({length:n}).map((t,r)=>Array.from({length:n}).map((c,i)=>{const a=170/n,g=(r+i)%2===0;return e.jsx("rect",{x:i*a,y:r*a,width:a-4,height:a-4,rx:"4",fill:g?"#0284c7":"#059669",stroke:"#1e293b",strokeWidth:"1"},`${r}-${i}`)}))})})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Nested Loop Architectural Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Loop Layer"}),e.jsx("th",{className:"py-3 px-4",children:"Responsibility"}),e.jsx("th",{className:"py-3 px-4",children:"Mathematical Model"}),e.jsx("th",{className:"py-3 px-4",children:"Python Implementation"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:x.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Nested Pattern Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:b,title:"nested_loop_rosette_mandala.py",highlightLines:[21,25,26,30]}),e.jsx(d,{fileModule:v,title:"matrix_grid_tessellation.py",highlightLines:[21,25,29,36,37]}),e.jsx(d,{fileModule:_,title:"spinning_fractal_squares.py",highlightLines:[18,23,24,28]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Barrackpore Design Studio: 36-Square Radial Mandala"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata creates an intricate generative mandala for a digital textile exhibition. By placing a 4-side square drawing loop inside a 36-iteration radial spoke loop with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"t.left(10)"})," turns, she creates a breathtaking optical pattern with only 8 lines of code."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"♟️"})," Jadavpur Game Development: 8x8 Chessboard Matrix"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu programs an 8x8 tournament chessboard using nested row and column loops. By evaluating ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(row + col) % 2 == 0"}),", the turtle automatically determines whether each cell square should be filled with obsidian black or cream white."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Nested Loop Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Indentation Scrambling"}),e.jsxs("p",{className:"text-slate-400",children:["Placing the outer spoke pivot ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.left(10)"})," inside the inner loop turns every single side, ruining the polygon geometry. Always keep pivot turns in the outer loop block!"]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Connecting Streak Artifacts in Grids"}),e.jsxs("p",{className:"text-slate-400",children:["Failing to call ",e.jsx("code",{className:"text-amber-300 font-mono",children:"t.penup()"})," before repositioning to the next grid cell draws ugly diagonal line streaks across the matrix."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Severe Rendering Freezes"}),e.jsxs("p",{className:"text-slate-400",children:["A 30x30 grid with 4-side squares executes 3,600 drawing actions. Without ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.tracer(0)"}),", this will freeze the browser canvas for minutes."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Variable Shadowing Collisions"}),e.jsxs("p",{className:"text-slate-400",children:["Using the same iteration variable ",e.jsx("code",{className:"text-rose-300 font-mono",children:"for i in ... for i in ..."})," overwrites the outer counter, breaking the entire outer loop execution."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand how outer loops control global position/rotation and inner loops draw primitives","I can construct radial mandalas with outer spoke pivots (360 / total_spokes)","I know how to build 2D matrix grids using nested row (Y) and column (X) loops","I can create checkerboard parity fills using (row + col) % 2 == 0","I know how to lift the pen (penup/pendown) to navigate between grid cells cleanly","I understand why screen.tracer(0) is necessary for high-iteration nested loops"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How 3 levels of nested loops (Rows → Columns → Spokes) can generate an entire gallery grid of intricate mandalas in seconds!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How slightly non-symmetric spoke turns (e.g. 71° instead of 72°) transform static rosettes into dynamic swirling vortex stars!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Replace the inner square with a 6-sided hexagon or 5-sided star to see how motif complexity cascades across the mandala!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Nested loops are the backbone of ",e.jsx("strong",{children:"rasterization, ray tracing, and procedural texture synthesis"}),". When a GPU renders a 4K frame (3840 × 2160 pixels), it executes nested iterations across millions of pixels. Mastering the mental model of outer spatial loops governing inner primitive shaders is the foundational intuition of graphics engineering."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(f,{title:"Nested Loops & Mandala Geometry FAQs",questions:w})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(y,{content:j,title:"Topic 2: Nested Loops Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(u,{note:"When we introduce nested loops at Coder & AccoTax in Barrackpore and Kolkata, students are often captivated by how simple mathematical combinations yield breathtaking complexity. I always remind students: keep the inner loop responsible solely for drawing the individual shape, and let the outer loop handle world transformations (stepping coordinates or rotating spokes). That clean mental separation prevents 99% of beginner geometry bugs!"})})]})]})};export{O as default};

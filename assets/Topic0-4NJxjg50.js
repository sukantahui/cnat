import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as f}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const y=[{question:"What is the primary benefit of wrapping drawing commands inside a Python function?",shortAnswer:"Reusability, parameterization, and eliminating code duplication.",explanation:"Functions allow you to draw the same shape in any size, position, and color with a single line call.",hint:"What principle eliminates copy-pasting drawing code?",level:"basic",codeExample:"def draw_circle(t, x, y, radius): ..."},{question:"Why should a drawing function accept the turtle instance `t` as its first parameter?",shortAnswer:"It allows the function to operate on any turtle instance and avoids reliance on global state.",explanation:"Passing the turtle object explicitly makes the function pure, decoupled, and testable.",hint:"Why avoid using global turtle variables in functions?",level:"basic",codeExample:"def draw_square(t, x, y, size): ..."},{question:"What should always be done before moving the turtle to `(x, y)` inside a shape function?",shortAnswer:"Call `t.penup()`.",explanation:"Calling `penup()` prevents unwanted stray drag lines across the canvas when repositioning.",hint:"How do you avoid drawing unwanted lines during repositioning?",level:"basic",codeExample:`t.penup()
t.goto(x, y)
t.pendown()`},{question:"Why is resetting the heading with `t.setheading(0)` important inside a modular drawing function?",shortAnswer:"It guarantees that the shape is drawn upright regardless of what angle the previous function left the turtle at.",explanation:"Enforcing a known initial heading ensures predictable, repeatable geometry.",hint:"How do you ensure shapes don't end up drawn tilted?",level:"basic",codeExample:"t.setheading(0)"},{question:"What is a Composite Drawing Function?",shortAnswer:"A high-level function that draws complex objects by calling simpler atomic functions.",explanation:"For example, `draw_house()` calls `draw_rectangle()` for walls, `draw_triangle()` for roof, and `draw_square()` for windows.",hint:"What do you call a function that combines smaller drawing functions?",level:"moderate",codeExample:`def draw_house(t, x, y, size):
    draw_rectangle(t, x, y, size, size*0.8)
    draw_roof(t, x, y+size*0.8, size)`},{question:"How do default parameter values improve drawing function design in Python?",shortAnswer:"They provide sensible standard sizes and colors while allowing callers to override them when needed.",explanation:"Default arguments reduce boilerplate while preserving maximum flexibility.",hint:"How can function arguments have fallback values?",level:"moderate",codeExample:"def draw_star(t, x, y, size=50, color='gold'): ..."},{question:"How does procedural composition help in drawing entire landscapes?",shortAnswer:"It allows a `main()` function to orchestrate loops over coordinate lists, placing houses, stars, and trees across the canvas.",explanation:"Separating scene layout data from shape rendering logic creates clean, scalable graphic programs.",hint:"How do you render a village with 5 houses and 20 stars cleanly?",level:"moderate",codeExample:`for x, y in star_coords:
    draw_star(t, x, y, size=15)`},{question:"What is the DRY principle and how does it apply to Turtle graphics?",shortAnswer:"'Don't Repeat Yourself' — every unique shape logic should exist in one authoritative function.",explanation:"If you need to change how a roof or star is drawn, you edit one function instead of 50 copy-pasted lines.",hint:"What acronym represents avoiding code duplication?",level:"basic",codeExample:"# DRY: Define draw_tree() once, call it 10 times"},{question:"Why should `screen.update()` typically be kept outside drawing functions?",shortAnswer:"Drawing functions should focus purely on geometry; buffer flushing is the responsibility of the scene orchestrator.",explanation:"Calling `screen.update()` inside every small helper function destroys the performance gains of double buffering.",hint:"Where should screen buffer updates be handled?",level:"moderate",codeExample:"# Keep screen.update() in main() loop"},{question:"What is the recommended coordinate origin convention for a shape function?",shortAnswer:"Bottom-left corner or geometric center `(x, y)`.",explanation:"Consistently choosing bottom-left or center ensures intuitive spatial layout when combining shapes.",hint:"What standard reference points are used for shape anchors?",level:"moderate",codeExample:"# (x, y) = bottom-left anchor"},{question:"How do you calculate relative child element offsets inside a composite shape like `draw_house`?",shortAnswer:"Multiply the base `size` parameter by proportional factors (e.g. `door_width = size * 0.25`).",explanation:"Proportional scaling ensures the door and windows scale harmoniously whenever the house size changes.",hint:"How do you keep windows proportional when scaling a house?",level:"moderate",codeExample:`win_size = size * 0.2
win_x = x + size * 0.6`},{question:"What happens if a function forgets to call `t.end_fill()`?",shortAnswer:"The fill remains unclosed and bleeds unexpectedly into shapes drawn by subsequent functions.",explanation:"Every `begin_fill()` must have a matching `end_fill()` in the same function scope.",hint:"What happens if begin_fill() is never closed?",level:"basic",codeExample:`t.begin_fill()
# ... draw ...
t.end_fill()  # Required`},{question:"How can you pass keyword arguments `**kwargs` into Turtle drawing functions?",shortAnswer:"Use `**kwargs` to forward optional pen and style configurations to underlying turtle methods.",explanation:"Keyword forwarding allows callers to specify pensize, speed, and capstyle dynamically.",hint:"How do you accept arbitrary styling arguments in Python?",level:"advanced",codeExample:"def draw_circle(t, x, y, r, **styles): ..."},{question:"How does functional decomposition simplify debugging in graphical programs?",shortAnswer:"If a window is drawn crooked, you only need to inspect and isolate `draw_window()`, rather than scrolling through 500 lines of code.",explanation:"Isolating visual components makes unit testing and visual debugging fast and pinpointed.",hint:"Why is modular code easier to debug?",level:"moderate",codeExample:"# Test draw_window(t, 0, 0, 50) in isolation"},{question:"How do you draw a polygon with an arbitrary number of sides `n` using a single function?",shortAnswer:"Loop `n` times with `forward(size)` and `left(360 / n)`.",explanation:"The exterior angle rule enables a single function `draw_regular_polygon(t, x, y, n, size)` to draw triangles, squares, octagons, etc.",hint:"What function can draw any regular polygon?",level:"moderate",codeExample:`def draw_polygon(t, x, y, n, size):
    # loop n times with turn 360/n`},{question:"Why is hardcoding coordinates inside drawing functions considered a severe anti-pattern?",shortAnswer:"Because it prevents drawing the shape anywhere else on the canvas.",explanation:"Hardcoded coordinates make functions completely non-reusable across different scenes.",hint:"Why should (x, y) coordinates always be passed as parameters?",level:"basic",codeExample:`# BAD: t.goto(100, 200)
# GOOD: t.goto(x, y)`},{question:"How do you document a reusable drawing function using Python Docstrings?",shortAnswer:'Use triple quotes `"""` beneath the `def` statement describing parameters, coordinate anchor, and side effects.',explanation:"Clear docstrings help other developers and IDE autocomplete understand required inputs.",hint:"What standard documentation format describes function parameters in Python?",level:"moderate",codeExample:`def draw_star(t, x, y, size):
    """Draws a 5-pointed star at (x,y)."""`},{question:"How do you test a drawing function independently in its own file?",shortAnswer:"Place unit test code inside `if __name__ == '__main__':` block.",explanation:"This allows the file to be imported as a library module without executing test drawings immediately.",hint:"What Python idiom allows a file to be both a module and a script?",level:"moderate",codeExample:`if __name__ == '__main__':
    main()`},{question:"What is the single-responsibility principle (SRP) in graphics programming?",shortAnswer:"Each function should do exactly one thing well (e.g. `draw_door` only draws a door).",explanation:"Small, single-purpose functions are easiest to reuse, compose, and maintain.",hint:"What software principle states each unit should have one clear job?",level:"advanced",codeExample:"# draw_door, draw_window, draw_chimney"},{question:"How do you create an arch or rounded doorway in a modular house function?",shortAnswer:"Draw vertical side rectangles and top it with `t.circle(radius, extent=180)`.",explanation:"Combining linear lines with partial circle arcs produces classic architectural arches.",hint:"What parameter in turtle.circle draws half a circle for an arch?",level:"advanced",codeExample:"t.circle(radius, 180)"},{question:"How can list unpacking `*coords` be used to render multiple trees efficiently?",shortAnswer:"Store coordinates as `[(x1, y1), (x2, y2)]` and call `draw_tree(t, *pt)` in a loop.",explanation:"Unpacking tuples cleanly separates coordinate datasets from rendering calls.",hint:"How do you unpack (x, y) tuples into function arguments in Python?",level:"moderate",codeExample:`for pt in tree_coords:
    draw_tree(t, *pt)`},{question:"What is the difference between absolute positioning `goto(x, y)` and relative movement `forward(d)` inside shape functions?",shortAnswer:"Absolute positioning sets the starting anchor `(x, y)`; relative movement constructs the shape perimeter from that anchor.",explanation:"Anchor positioning sets context; relative turtle geometry builds local shape features.",hint:"Which commands establish the starting position vs the outline?",level:"moderate",codeExample:`t.goto(x, y)  # Absolute anchor
t.forward(50)  # Relative stroke`},{question:"How do you draw a flower using modular functions?",shortAnswer:"Define `draw_petal()` and call it in a loop with radial rotation `t.left(360 / num_petals)`.",explanation:"Radial repetition of a modular petal function creates realistic floral geometry.",hint:"How do you compose a flower from a single petal function?",level:"moderate",codeExample:"for _ in range(8): draw_petal(t); t.left(45)"},{question:"How can functions return graphical metadata, such as bounding boxes?",shortAnswer:"A drawing function can return a tuple `(min_x, min_y, max_x, max_y)` indicating the shape's bounds.",explanation:"Returning bounding box metadata allows parent orchestrators to perform collision detection or alignment.",hint:"How can functions communicate shape boundaries back to the caller?",level:"advanced",codeExample:"return (x, y, x + width, y + height)"},{question:"Why should `pensize()` be parameterized with a default value?",shortAnswer:"So the caller can draw delicate hairline accents (pensize=1) or bold comic outlines (pensize=4).",explanation:"Parametric stroke weight gives the artist control over visual hierarchy.",hint:"Why allow customizable stroke thickness?",level:"basic",codeExample:"def draw_box(t, x, y, size, pensize=2): ..."},{question:"How do you draw a night cityscape using modular functions?",shortAnswer:"Loop across the x-axis, calling `draw_building(t, x, y, width, height, num_floors)` with randomized heights.",explanation:"Parameterized building functions make generating skyline silhouettes effortless.",hint:"How do you generate skyline silhouettes with modular functions?",level:"advanced",codeExample:`for x in range(-300, 300, 80):
    draw_building(t, x, -150, 70, random.randint(150, 300))`},{question:"What is functional recursion in Turtle graphics?",shortAnswer:"A function that calls itself with smaller parameter values to produce fractal structures like trees or snowflakes.",explanation:"Recursion is the natural mathematical extension of modular graphic functions.",hint:"What do you call a function that calls itself with decreasing scale?",level:"advanced",codeExample:`def draw_branch(t, length):
    draw_branch(t, length * 0.7)`},{question:"How do you handle color contrast between base walls and roofs in modular houses?",shortAnswer:"Provide distinct default parameters (e.g. wall='#3b82f6', roof='#ef4444') and validate contrast.",explanation:"Pairing complementary or high-contrast palette values ensures distinct visual silhouette recognition.",hint:"How do you ensure house components are visually distinct?",level:"moderate",codeExample:"draw_house(t, x, y, wall_color='skyblue', roof_color='crimson')"},{question:"Why is creating a custom graphics module (`shapes.py`) beneficial for large projects?",shortAnswer:"It allows multiple developers or scenes to `import shapes` and share a standardized library of geometric primitives.",explanation:"Module packaging fosters team collaboration, reusability, and clean project architecture.",hint:"Why organize drawing functions into an imported module?",level:"advanced",codeExample:"from shapes import draw_star, draw_house, draw_tree"},{question:"What is the 5-step checklist for writing a flawless reusable drawing function?",shortAnswer:"1. Accept `t, x, y, size` | 2. `t.penup(); t.goto(x, y)` | 3. `t.setheading(0)` | 4. `t.pendown()` | 5. Close `end_fill()`.",explanation:"Following these 5 steps guarantees reproducible, leak-free modular graphics anywhere on canvas.",hint:"What 5 steps guarantee clean modular drawing functions?",level:"basic",codeExample:"# 1. params | 2. goto | 3. heading | 4. pendown | 5. end_fill"}],b=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 0 - Writing reusable drawing functions\r
File: reusable_shapes_primitives.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates decomposing complex drawings into clean, parameterized,\r
reusable drawing primitive functions in Python Turtle.\r
"""\r
\r
import turtle\r
\r
def draw_square(t, x, y, size, fill_color, border_color="white"):\r
    """Draws a solid colored square positioned at bottom-left (x, y)."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(size)\r
        t.left(90)\r
    t.end_fill()\r
\r
def draw_triangle(t, x, y, size, fill_color, border_color="white"):\r
    """Draws an equilateral triangle positioned at (x, y)."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(3):\r
        t.forward(size)\r
        t.left(120)\r
    t.end_fill()\r
\r
def draw_star(t, x, y, size, fill_color):\r
    """Draws a 5-pointed star centered approximately at (x, y)."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color(fill_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(size)\r
        t.right(144)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Reusable Shape Primitives - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Draw reusable primitives at various coordinates\r
    draw_square(t, -220, -50, 90, "#38bdf8")\r
    draw_triangle(t, -60, -50, 100, "#f43f5e")\r
    draw_star(t, 120, 20, 100, "#fbbf24")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 0 - Writing reusable drawing functions\r
File: composite_house_builder.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates composite functional architecture: building a high-level \`draw_house()\`\r
function composed of reusable lower-level functions (\`draw_rectangle\`, \`draw_roof\`, \`draw_window\`).\r
"""\r
\r
import turtle\r
\r
def draw_rectangle(t, x, y, width, height, fill_color, border_color="white"):\r
    """Draws a parameterized rectangle."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(width)\r
        t.left(90)\r
        t.forward(height)\r
        t.left(90)\r
    t.end_fill()\r
\r
def draw_roof(t, x, y, width, height, fill_color):\r
    """Draws a triangular roof over a house base."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.pendown()\r
    t.color("white", fill_color)\r
    t.begin_fill()\r
    t.goto(x + width / 2, y + height)\r
    t.goto(x + width, y)\r
    t.goto(x, y)\r
    t.end_fill()\r
\r
def draw_house(t, x, y, size=100, wall_color="#3b82f6", roof_color="#ef4444"):\r
    """Draws a complete composite house with walls, roof, door, and window."""\r
    # 1. House Base Walls\r
    draw_rectangle(t, x, y, size, size * 0.8, wall_color)\r
\r
    # 2. Roof\r
    draw_roof(t, x - size * 0.1, y + size * 0.8, size * 1.2, size * 0.5, roof_color)\r
\r
    # 3. Door\r
    door_w, door_h = size * 0.25, size * 0.45\r
    draw_rectangle(t, x + size * 0.15, y, door_w, door_h, "#78350f")\r
\r
    # 4. Window\r
    win_size = size * 0.25\r
    draw_rectangle(t, x + size * 0.55, y + size * 0.35, win_size, win_size, "#fef08a")\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Composite House Builder - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Draw 3 different houses of varying sizes and colors\r
    draw_house(t, -260, -100, size=110, wall_color="#0284c7", roof_color="#f43f5e")\r
    draw_house(t, -70, -100, size=140, wall_color="#059669", roof_color="#eab308")\r
    draw_house(t, 140, -100, size=90, wall_color="#7c3aed", roof_color="#fb923c")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 0 - Writing reusable drawing functions\r
File: modular_village_landscape.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Combines modular drawing functions (stars, houses, pine trees, and moon)\r
into a cohesive nighttime landscape scene.\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_star(t, x, y, size, color="#fef08a"):\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color(color, color)\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(size)\r
        t.right(144)\r
    t.end_fill()\r
\r
def draw_tree(t, x, y, size=60):\r
    """Draws a pine tree with a trunk and layered green triangular canopies."""\r
    # Trunk\r
    t.penup(); t.goto(x - size*0.1, y); t.setheading(0); t.pendown()\r
    t.color("#78350f", "#78350f")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(size * 0.2); t.left(90)\r
        t.forward(size * 0.4); t.left(90)\r
    t.end_fill()\r
\r
    # Foliage layers\r
    foliage_colors = ["#14532d", "#15803d", "#22c55e"]\r
    for i, col in enumerate(foliage_colors):\r
        layer_y = y + size * 0.3 + (i * size * 0.25)\r
        layer_w = size * (0.8 - i * 0.15)\r
        t.penup(); t.goto(x - layer_w/2, layer_y); t.pendown()\r
        t.color(col, col)\r
        t.begin_fill()\r
        t.goto(x, layer_y + size * 0.4)\r
        t.goto(x + layer_w/2, layer_y)\r
        t.goto(x - layer_w/2, layer_y)\r
        t.end_fill()\r
\r
def draw_house(t, x, y, size=80, wall="#0369a1", roof="#e11d48"):\r
    # Base\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color("white", wall)\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(size); t.left(90)\r
    t.end_fill()\r
\r
    # Roof\r
    t.penup(); t.goto(x - size*0.1, y + size); t.pendown()\r
    t.color("white", roof)\r
    t.begin_fill()\r
    t.goto(x + size*0.5, y + size * 1.5)\r
    t.goto(x + size*1.1, y + size)\r
    t.goto(x - size*0.1, y + size)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Modular Village Landscape - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Night Sky Stars\r
    star_coords = [(-300, 220), (-180, 260), (-40, 210), (120, 250), (280, 230), (320, 160)]\r
    for sx, sy in star_coords:\r
        draw_star(t, sx, sy, 18)\r
\r
    # Ground Baseline\r
    t.penup(); t.goto(-400, -120); t.pendown()\r
    t.color("#334155"); t.pensize(3); t.forward(800)\r
\r
    # Houses\r
    draw_house(t, -260, -120, size=90, wall="#0284c7", roof="#f43f5e")\r
    draw_house(t, 60, -120, size=110, wall="#4f46e5", roof="#f59e0b")\r
\r
    # Trees\r
    draw_tree(t, -120, -120, size=80)\r
    draw_tree(t, -40, -120, size=95)\r
    draw_tree(t, 240, -120, size=75)\r
    draw_tree(t, 320, -120, size=90)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`================================================================================\r
  TOPIC 0: WRITING REUSABLE DRAWING FUNCTIONS\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE PHILOSOPHY OF FUNCTIONAL MODULARITY\r
--------------------------------------------------------------------------------\r
In beginner code, drawing operations are written sequentially in hundreds of\r
repetitive lines. If a scene requires 10 houses, beginners copy-paste code 10 times.\r
Functional modularity replaces this with parameterized reusable functions:\r
\`def draw_house(t, x, y, size, wall_color, roof_color):\`\r
\r
2. PRINCIPLES OF ROBUST DRAWING FUNCTIONS\r
--------------------------------------------------------------------------------\r
1. Parameterize Geometry:\r
   Take turtle instance \`t\`, origin \`(x, y)\`, and dimensions (\`size\`, \`width\`, \`height\`).\r
\r
2. Enforce Isolation & Determinism:\r
   Always lift the pen before moving to (x, y) with \`penup()\`, set heading \`setheading(0)\`,\r
   and put \`pendown()\` to guarantee no unintentional stray lines or skewed rotations.\r
\r
3. Composite Architecture:\r
   Build complex objects (houses, cars, trees) by calling simpler atomic functions\r
   (\`draw_rectangle\`, \`draw_triangle\`, \`draw_circle\`).\r
\r
4. Separation of Concerns:\r
   Keep drawing logic inside functions; keep screen setup, orchestration, and loop\r
   coordinates inside \`main()\`.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,N=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseGlow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5)); }
}
`,S=()=>{const[n,c]=r.useState(100),[a,h]=r.useState("#0284c7"),[o,p]=r.useState("#f43f5e"),[l,u]=r.useState(!0),[d,m]=r.useState(!0),x=[{name:"def draw_square(t, x, y, size, fill_color)",returnType:"Void Primitive",purpose:"Draws a 4-sided closed square anchored at bottom-left (x, y) with specified dimensions and fill.",usage:"draw_square(t, -100, 50, 80, '#38bdf8')"},{name:"def draw_triangle(t, x, y, size, fill_color)",returnType:"Void Primitive",purpose:"Draws an equilateral 3-sided triangle anchored at (x, y) for roofs, arrows, and mountains.",usage:"draw_triangle(t, 0, 100, 90, '#f43f5e')"},{name:"def draw_star(t, x, y, size, color)",returnType:"Void Primitive",purpose:"Draws a 5-pointed self-intersecting star centered approximately at (x, y).",usage:"draw_star(t, 120, 180, 25, '#fbbf24')"},{name:"def draw_house(t, x, y, size, wall_col, roof_col)",returnType:"Composite Function",purpose:"Composes base walls, triangular roof, door, and illuminated window into a single unified object.",usage:"draw_house(t, -200, -80, size=110)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:N}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 0"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Writing Reusable Drawing Functions"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Decompose monolithic spaghetti code into elegant, parameterized building blocks. Master functional composition by creating ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"draw_square"}),", ",e.jsx("code",{className:"text-rose-300 font-mono",children:"draw_star"}),", and composite ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"draw_house"})," primitives."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🧩 Parameterized Primitives"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏠 Composite Functional Architecture"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌲 Scalable Scene Orchestration"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Modular Scene Composer"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust function parameters to see how parameterized functions generate responsive vector geometry in real time."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("label",{className:"flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>u(t.target.checked),className:"rounded text-cyan-500 focus:ring-0"}),"Trees"]}),e.jsxs("label",{className:"flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:t=>m(t.target.checked),className:"rounded text-amber-500 focus:ring-0"}),"Stars"]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Rendered Canvas View (Modular Composition)"}),e.jsxs("svg",{viewBox:"0 0 320 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[d&&e.jsxs(e.Fragment,{children:[e.jsx("polygon",{points:"40,25 43,33 51,33 45,38 47,46 40,41 33,46 35,38 29,33 37,33",fill:"#fbbf24"}),e.jsx("polygon",{points:"120,40 122,46 128,46 123,50 125,56 120,52 115,56 117,50 112,46 118,46",fill:"#fef08a"}),e.jsx("polygon",{points:"220,20 222,26 228,26 223,30 225,36 220,32 215,36 217,30 212,26 218,26",fill:"#fbbf24"}),e.jsx("polygon",{points:"280,45 282,51 288,51 283,55 285,61 280,57 275,61 277,55 272,51 278,51",fill:"#fef08a"})]}),e.jsx("line",{x1:"10",y1:"180",x2:"310",y2:"180",stroke:"#334155",strokeWidth:"3"}),l&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"35",y:"155",width:"10",height:"25",fill:"#78350f"}),e.jsx("polygon",{points:"40,110 20,145 60,145",fill:"#15803d"}),e.jsx("polygon",{points:"40,130 25,160 55,160",fill:"#166534"}),e.jsx("rect",{x:"265",y:"155",width:"10",height:"25",fill:"#78350f"}),e.jsx("polygon",{points:"270,110 250,145 290,145",fill:"#15803d"}),e.jsx("polygon",{points:"270,130 255,160 285,160",fill:"#166534"})]}),e.jsx("rect",{x:160-n*.5,y:180-n*.8,width:n,height:n*.8,fill:a,stroke:"#ffffff",strokeWidth:"2",className:"transition-all duration-300"}),e.jsx("polygon",{points:`
                    160,${180-n*1.3}
                    ${160-n*.6},${180-n*.8}
                    ${160+n*.6},${180-n*.8}
                  `,fill:o,stroke:"#ffffff",strokeWidth:"2",className:"transition-all duration-300"}),e.jsx("rect",{x:160-n*.35,y:180-n*.45,width:n*.25,height:n*.45,fill:"#78350f",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("rect",{x:160+n*.1,y:180-n*.65,width:n*.25,height:n*.25,fill:"#fef08a",stroke:"#ffffff",strokeWidth:"1"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsx("div",{className:"text-sm font-bold text-cyan-400",children:"Function Arguments & Live Python Invocation"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsxs("span",{children:["Parameter: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"size"})]}),e.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[n," px"]})]}),e.jsx("input",{type:"range",min:"60",max:"140",value:n,onChange:t=>c(Number(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-slate-400 mb-1",children:"Wall Color (wall_color):"}),e.jsx("div",{className:"flex gap-1.5",children:["#0284c7","#059669","#7c3aed","#e11d48"].map(t=>e.jsx("button",{onClick:()=>h(t),className:`w-6 h-6 rounded-full border transition cursor-pointer ${a===t?"border-white scale-110 shadow-md":"border-transparent opacity-70"}`,style:{backgroundColor:t}},t))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-slate-400 mb-1",children:"Roof Color (roof_color):"}),e.jsx("div",{className:"flex gap-1.5",children:["#f43f5e","#eab308","#fb923c","#10b981"].map(t=>e.jsx("button",{onClick:()=>p(t),className:`w-6 h-6 rounded-full border transition cursor-pointer ${o===t?"border-white scale-110 shadow-md":"border-transparent opacity-70"}`,style:{backgroundColor:t}},t))})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Live Python Function Call"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`draw_house(
    t,
    x=0, y=-120,
    size=${n},
    wall_color="${a}",
    roof_color="${o}"
)`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Modular Drawing Function Architecture"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Function Signature"}),e.jsx("th",{className:"py-3 px-4",children:"Type"}),e.jsx("th",{className:"py-3 px-4",children:"Architectural Purpose"}),e.jsx("th",{className:"py-3 px-4",children:"Sample Invocation"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:x.map((t,s)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},s))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:b,title:"reusable_shapes_primitives.py",highlightLines:[12,13,23,24,34,35]}),e.jsx(i,{fileModule:_,title:"composite_house_builder.py",highlightLines:[12,23,33,36,39,43,47]}),e.jsx(i,{fileModule:v,title:"modular_village_landscape.py",highlightLines:[11,19,39,61,62,69,73]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Barrackpore School Project: The 300-Line Refactor"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata wrote a 450-line script to draw a miniature neighborhood in Barrackpore. When the teacher requested changing the roof style from triangular to rounded tile, she had to manually edit 12 different sections. After refactoring her drawing code into a modular ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"draw_house()"})," function, she changed the roof style across all 12 houses in just ",e.jsx("strong",{children:"2 lines of code"}),"!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-indigo-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌆"})," Kolkata Generative Art: Procedural Skylines"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu in Kolkata created an animated nighttime city skyline by writing a single ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"draw_building(t, x, y, width, height, floors)"})," function and feeding it a list of randomized coordinates. What used to take hours of manual coordinate math now renders dynamically in 0.05 seconds."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Modular Graphics Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting penup() Before Repositioning"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.goto(x, y)"})," without calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"t.penup()"})," leaves unwanted diagonal drag lines connecting consecutive shapes."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Neglecting Heading Reset (setheading)"}),e.jsxs("p",{className:"text-slate-400",children:["If a preceding function leaves the turtle facing at 45°, calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"draw_square()"})," without ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"t.setheading(0)"})," produces a tilted diamond instead of an upright square."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Hardcoding Coordinates Inside Functions"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.goto(100, 200)"})," inside a function completely destroys reusability. Always accept ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(x, y)"})," as arguments."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Unmatched begin_fill() / end_fill()"}),e.jsxs("p",{className:"text-slate-400",children:["Leaving ",e.jsx("code",{className:"text-amber-300 font-mono",children:"t.begin_fill()"})," unclosed causes fill colors to bleed uncontrollably across unrelated objects drawn later in the program."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I always pass the turtle instance `t` as the first argument to drawing functions","I lift the pen with `penup()` before moving to the starting anchor `(x, y)`","I enforce upright alignment by calling `t.setheading(0)` inside shape functions","I understand how composite functions build complex scenes from simpler primitives","I use default arguments to provide flexible yet convenient styling options","I keep `screen.update()` in the scene orchestrator rather than inside individual helpers"].map((t,s)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},s))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-sky-900/20 rounded-2xl p-5 border border-sky-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How video games like Minecraft or Terraria build entire procedural worlds by stamping modular tile functions across coordinate grids!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How passing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"size=120"})," vs ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"size=60"})," automatically scales the walls, roof, doors, and windows proportionately without recalculating manual offsets!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add a chimney function ",e.jsx("code",{className:"text-amber-300 font-mono",children:"draw_chimney(t, x, y, width, height)"})," and call it inside ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"draw_house()"}),"!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Software engineering is the art of abstraction. When you transform raw sequential turtle movements into clean, parameterized geometric abstractions, you transition from simply drawing on a canvas to designing scalable, professional graphic systems and rendering engines."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(g,{title:"Modular Drawing Functions FAQs",questions:y})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(w,{content:j,title:"Topic 0: Modular Drawing Functions Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(f,{note:"In Module 005_004 at Coder & AccoTax in Barrackpore and Kolkata, this topic represents a major cognitive milestone. When students stop thinking in 'steps' and start thinking in 'reusable modular shapes', their code shrinks by 70% while their graphical capabilities expand tenfold. Always remember the Golden Rule of Modular Drawing: decouple state, parameterize coordinates, and restore heading!"})})]})]})};export{S as default};

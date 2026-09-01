import{b as u,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as g}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{F as f}from"./FAQTemplate-BHhlgA96.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const w=[{question:"What is Turtle State Pollution?",shortAnswer:"When a helper function modifies position, heading, or pen attributes without restoring them, breaking subsequent caller drawing.",explanation:"Unrestored mutations cause unpredictable side effects in complex scenes.",hint:"What do you call unintended side effects left behind by a drawing function?",level:"basic",codeExample:"# Unrestored heading causes subsequent lines to be skewed"},{question:"Which methods return the turtle's current position, heading, and pen status?",shortAnswer:"`t.position()` (or `t.pos()`), `t.heading()`, and `t.isdown()`.",explanation:"These getter methods inspect the current kinematic state of the turtle.",hint:"What three methods read position, angle, and pen contact?",level:"basic",codeExample:`pos = t.pos()
head = t.heading()
is_down = t.isdown()`},{question:"Why must `t.penup()` be called when returning to a saved position `t.goto(saved_pos)`?",shortAnswer:"To prevent drawing an unwanted return stroke line across the canvas when moving back.",explanation:"Moving the turtle back to its saved anchor while the pen is down leaves a visible streak.",hint:"How do you prevent visible streaks during state restoration?",level:"basic",codeExample:`t.penup()
t.goto(saved_pos)
if saved_down: t.pendown()`},{question:"How does Python's `contextlib.contextmanager` simplify Turtle state preservation?",shortAnswer:"It allows wrapping drawing code inside a `with preserve_turtle(t):` block, guaranteeing cleanup via the `finally` block.",explanation:"Context managers guarantee state restoration even if exceptions or early returns occur.",hint:"What Python feature enables the `with` statement for automatic cleanup?",level:"moderate",codeExample:`with preserve_turtle(t):
    t.left(45)
    t.forward(50)`},{question:"What is a State Stack in recursive graphics programming?",shortAnswer:"A Last-In, First-Out (LIFO) list where turtle state tuples are pushed before branching and popped after returning.",explanation:"State stacks enable arbitrary-depth recursive structures like fractal trees and L-systems.",hint:"What data structure manages nested recursive snapshots?",level:"advanced",codeExample:`stack.append((t.pos(), t.heading()))
# ... branch ...
pos, head = stack.pop()`},{question:"Which getter methods read the turtle's current pen and fill colors?",shortAnswer:"`t.pencolor()` and `t.fillcolor()` (or `t.color()`).",explanation:"Calling `color()` without arguments returns `(pencolor, fillcolor)` as strings or tuples.",hint:"What getter returns current stroke and fill colors?",level:"basic",codeExample:"pen_col, fill_col = t.color()"},{question:"How do you read the current stroke width in Turtle graphics?",shortAnswer:"`t.pensize()` (or `t.width()`).",explanation:"Calling `pensize()` without arguments returns the current integer stroke width in pixels.",hint:"What method retrieves current line thickness?",level:"basic",codeExample:"current_size = t.pensize()"},{question:"Why is stack-based state management preferred over calculating manual return steps `backward()` / `right()` in fractal trees?",shortAnswer:"Because floating-point trigonometric rounding errors accumulate over deep recursion, causing the turtle to drift off-target.",explanation:"`goto(saved_pos)` is mathematically exact and immune to accumulated float errors.",hint:"Why does t.backward() drift compared to t.goto(saved_pos)?",level:"advanced",codeExample:"# Exact restore: t.goto(saved_pos)"},{question:"What is an Invariant in computer graphics programming?",shortAnswer:"A condition that remains true before and after a function executes (e.g. 'turtle returns to starting pos and heading').",explanation:"Establishing state invariants makes drawing functions robust, predictable, and composable.",hint:"What term describes a state property guaranteed to remain unchanged?",level:"advanced",codeExample:"# Invariant: Function leaves turtle exactly where it started"},{question:"How does the `try...finally` block in a context manager protect against state leakage?",shortAnswer:"The `finally` block executes unconditionally, ensuring state is restored even if an error occurs inside the `with` body.",explanation:"`finally` guarantees cleanup execution under all execution circumstances.",hint:"Why does `finally` guarantee state restoration?",level:"moderate",codeExample:`try:
    yield t
finally:
    # restore state guaranteed`},{question:"How can you snapshot all Turtle attributes into a Python dictionary?",shortAnswer:"Store keys for `'pos'`, `'heading'`, `'isdown'`, `'color'`, `'pensize'`, and `'visible'` in a dict.",explanation:"A dictionary snapshot packages complete turtle state into a clean, serializable structure.",hint:"How can you store comprehensive turtle state in a single variable?",level:"moderate",codeExample:"snapshot = {'pos': t.pos(), 'head': t.heading(), 'size': t.pensize()}"},{question:"What happens if a recursive function pops from an empty state stack?",shortAnswer:"An `IndexError: pop from empty list` exception is raised.",explanation:"Stack operations must ensure matching pairs of push and pop calls.",hint:"What error occurs when popping an empty list?",level:"moderate",codeExample:`if stack:
    state = stack.pop()`},{question:"How do L-Systems (Lindenmayer Systems) use '[' and ']' characters for state preservation?",shortAnswer:"'[' corresponds to `push_state()`, and ']' corresponds to `pop_state()`.",explanation:"L-Systems use bracket notation to generate complex botanical and fractal models.",hint:"What do brackets signify in Turtle L-System grammars?",level:"expert",codeExample:"# '[' → push_state | ']' → pop_state"},{question:"Why should visibility status `t.isvisible()` also be preserved in general-purpose utilities?",shortAnswer:"So that if a helper temporarily shows or hides the turtle cursor, the caller's visibility preference is respected.",explanation:"Complete state preservation includes visual sprite visibility.",hint:"What getter returns whether the turtle cursor is currently visible?",level:"moderate",codeExample:"was_visible = t.isvisible()"},{question:"How do you preserve speed setting `t.speed()` across functions?",shortAnswer:"Read `current_speed = t.speed()`, perform time-critical drawing, and restore `t.speed(current_speed)`.",explanation:"Calling `speed()` without parameters returns the active integer speed level (0-10).",hint:"How do you read current animation speed in Turtle?",level:"moderate",codeExample:`spd = t.speed()
# ... draw ...
t.speed(spd)`},{question:"How does state preservation enable drawing concentric multi-layered emblems easily?",shortAnswer:"The turtle returns to the exact center anchor after drawing each outer ring, ready to draw the next inner ring.",explanation:"Returning to origin center anchor prevents manual recentering calculations between layers.",hint:"How does resetting to center anchor simplify concentric shapes?",level:"basic",codeExample:`for r in [80, 60, 40, 20]:
    with preserve_turtle(t): draw_ring(t, r)`},{question:"What is the computational cost of saving and restoring turtle state?",shortAnswer:"Virtually zero (a few microsecond dictionary/tuple allocations).",explanation:"State restoration overhead is negligible compared to screen rendering time.",hint:"Is saving turtle state CPU-expensive?",level:"basic",codeExample:"# Negligible microsecond overhead"},{question:"How do you restore colors when `colormode(255)` vs `colormode(1.0)` is used?",shortAnswer:"Turtle's `pencolor()` returns a format matching the active `colormode()`, allowing direct restoration.",explanation:"Passing the captured color tuple directly to `t.color()` works seamlessly in either color mode.",hint:"Does pencolor() preserve the active colormode format?",level:"moderate",codeExample:"t.color(saved_pencolor, saved_fillcolor)"},{question:"What is the difference between local state restoration and global canvas reset `screen.reset()`?",shortAnswer:"Local restoration resets a single turtle's pose without erasing the screen; `screen.reset()` wipes all drawings and all turtles.",explanation:"State preservation preserves existing canvas artwork while resetting the pen cursor.",hint:"Which reset preserves existing drawings on screen?",level:"basic",codeExample:"# Local restore: preserves canvas | screen.reset(): wipes canvas"},{question:"How can decorators `@preserve_state` be used to automatically wrap drawing functions in Python?",shortAnswer:"A decorator captures state before calling `func(t, *args, **kwargs)` and restores state in a `finally` block.",explanation:"Function decorators provide clean declarative state preservation without boilerplate inside function bodies.",hint:"What Python feature uses '@' syntax to wrap functions automatically?",level:"expert",codeExample:`@preserve_state
def draw_ornament(t, x, y): ...`},{question:"Why should `t.tiltangle()` be tracked in 3D-like turtle extensions?",shortAnswer:"Because custom turtle cursor shapes can have independent tilt angles that alter drawing projections.",explanation:"Tilt angles control shape transformation matrices in advanced extensions.",hint:"What method tracks cursor polygon tilt angle?",level:"expert",codeExample:"tilt = t.tiltangle()"},{question:"How do you draw clock hour marks around a dial using state preservation?",shortAnswer:"For each hour: save state at center, rotate angle, move outward to radius, draw tick mark, restore to center.",explanation:"Centroid restoration makes drawing 12 evenly spaced radial tick marks trivial.",hint:"How does returning to dial center make drawing clock marks easy?",level:"moderate",codeExample:`for hr in range(12):
    with preserve_turtle(t):
        t.right(hr * 30); t.forward(100); t.dot(6)`},{question:"What is the Golden Rule of Turtle Functional Hygiene?",shortAnswer:"Leave the turtle in the exact state you found it, or explicitly document why the state was moved.",explanation:"Strict functional hygiene prevents bugs in collaborative and multi-module graphic codebases.",hint:"What rule governs clean modular graphics state management?",level:"basic",codeExample:"# Invariant: Zero side-effect state footprint"},{question:"How does state restoration prevent cumulative rotation drift in procedural games?",shortAnswer:"By snapping to absolute heading anchors rather than accumulating hundreds of relative `t.left()` turns.",explanation:"Restoring absolute heading anchors prevents floating-point angular inaccuracies.",hint:"How does restoring saved heading eliminate angular drift?",level:"advanced",codeExample:"t.setheading(saved_heading)"},{question:"How can you test if a drawing function properly restores state?",shortAnswer:"Assert that `t.pos() == initial_pos` and `t.heading() == initial_heading` after calling the function.",explanation:"Automated unit tests can verify state preservation by comparing before-and-after snapshots.",hint:"How do you unit test state preservation in Python?",level:"advanced",codeExample:`assert t.pos() == start_pos
assert t.heading() == start_heading`},{question:"Why is `t.home()` NOT a valid substitute for state restoration?",shortAnswer:"`t.home()` resets position to `(0, 0)` and heading to 0°, destroying any intermediate caller position.",explanation:"State restoration must return to the *caller's* position, which is rarely `(0, 0)`.",hint:"Why is t.home() dangerous inside helper functions?",level:"basic",codeExample:"# BAD: t.home() → jumps to (0, 0) and loses caller position"},{question:"How do you manage state when multiple turtles `[t1, t2]` are drawing concurrently?",shortAnswer:"Maintain independent state contexts or stacks keyed by each turtle instance.",explanation:"Independent state encapsulation prevents cross-turtle state collisions in multi-agent scenes.",hint:"How do you isolate state when using multiple turtles?",level:"advanced",codeExample:`with preserve_turtle(t1): ...
with preserve_turtle(t2): ...`},{question:"How do snowflake crystals benefit from recursive branch state preservation?",shortAnswer:"Each sub-crystal needle can branch out at 60° and restore to the main arm without manual back-tracing.",explanation:"State preservation enables symmetric hexagonal crystal fractal growth.",hint:"How does state restoration create intricate snowflake branches?",level:"moderate",codeExample:"with preserve_turtle(t): t.left(60); t.forward(20)"},{question:"What is the 4-step checklist for building a zero-side-effect drawing function?",shortAnswer:"1. Capture state | 2. Execute drawing | 3. Move pen up before return | 4. Restore position, heading, colors, and pen status.",explanation:"Applying this 4-step framework guarantees bug-free composability across large projects.",hint:"What 4 steps guarantee zero-side-effect drawing functions?",level:"basic",codeExample:"# 1. save | 2. draw | 3. penup | 4. restore"},{question:"What Python standard library module provides `@contextmanager`?",shortAnswer:"`contextlib`.",explanation:"`from contextlib import contextmanager` allows creating lightweight Pythonic context managers easily.",hint:"Which standard module defines the @contextmanager decorator?",level:"basic",codeExample:"from contextlib import contextmanager"}],v=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 2 - Preserving turtle position and heading with state restore functions\r
File: turtle_state_save_restore_basics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates explicit state preservation: capturing position, heading, pen status,\r
and colors before drawing sub-features and restoring them completely upon completion.\r
"""\r
\r
import turtle\r
\r
def draw_decorated_branch(t, length, decoration_color="#f43f5e"):\r
    """\r
    Draws a main stem, branches off to draw an ornament, and restores\r
    the turtle's exact position, heading, and pen status.\r
    """\r
    t.forward(length)\r
\r
    # 1. CAPTURE STATE\r
    saved_pos = t.position()\r
    saved_head = t.heading()\r
    saved_pen_down = t.isdown()\r
    saved_pencolor = t.pencolor()\r
    saved_fillcolor = t.fillcolor()\r
\r
    # 2. DRAW SUB-DECORATION (MODIFIES STATE)\r
    t.left(45)\r
    t.penup()\r
    t.forward(30)\r
    t.pendown()\r
    t.color("white", decoration_color)\r
    t.begin_fill()\r
    t.circle(12)\r
    t.end_fill()\r
\r
    # 3. RESTORE EXACT STATE\r
    t.penup()\r
    t.goto(saved_pos)\r
    t.setheading(saved_head)\r
    t.color(saved_pencolor, saved_fillcolor)\r
    if saved_pen_down:\r
        t.pendown()\r
\r
    # Continue drawing along original stem trajectory seamlessly!\r
    t.forward(length * 0.5)\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Turtle State Save and Restore - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(3)\r
    t.color("#38bdf8")\r
\r
    # Draw 4 branches radiating outward from center\r
    for angle in [0, 90, 180, 270]:\r
        t.penup()\r
        t.goto(0, 0)\r
        t.setheading(angle)\r
        t.pendown()\r
        t.color("#38bdf8")\r
        draw_decorated_branch(t, 80, decoration_color="#fbbf24")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,y=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 2 - Preserving turtle position and heading with state restore functions\r
File: turtle_state_context_manager.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Professional Pythonic pattern: building a reusable \`@contextmanager\` that automatically\r
preserves and restores Turtle position, heading, pen state, and pensize using the \`with\` statement.\r
"""\r
\r
import turtle\r
from contextlib import contextmanager\r
\r
@contextmanager\r
def preserve_turtle(t):\r
    """\r
    Context manager that saves Turtle position, heading, pen status,\r
    colors, and pensize upon enter and restores them upon exit.\r
    """\r
    saved_state = {\r
        "pos": t.position(),\r
        "heading": t.heading(),\r
        "is_down": t.isdown(),\r
        "pencolor": t.pencolor(),\r
        "fillcolor": t.fillcolor(),\r
        "pensize": t.pensize()\r
    }\r
    try:\r
        yield t\r
    finally:\r
        t.penup()\r
        t.goto(saved_state["pos"])\r
        t.setheading(saved_state["heading"])\r
        t.color(saved_state["pencolor"], saved_state["fillcolor"])\r
        t.pensize(saved_state["pensize"])\r
        if saved_state["is_down"]:\r
            t.pendown()\r
\r
def draw_snowflake_crystal(t, length=100):\r
    """Draws a 6-arm snowflake utilizing the preserve_turtle context manager."""\r
    for _ in range(6):\r
        t.forward(length)\r
\r
        # Draw left and right crystal needles safely inside isolated contexts\r
        with preserve_turtle(t):\r
            t.left(45)\r
            t.forward(length * 0.4)\r
\r
        with preserve_turtle(t):\r
            t.right(45)\r
            t.forward(length * 0.4)\r
\r
        # Draw sub-crystals halfway along arm\r
        with preserve_turtle(t):\r
            t.backward(length * 0.5)\r
            t.left(60)\r
            t.forward(length * 0.3)\r
\r
        with preserve_turtle(t):\r
            t.backward(length * 0.5)\r
            t.right(60)\r
            t.forward(length * 0.3)\r
\r
        t.backward(length)\r
        t.right(60)\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Pythonic State Context Manager - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
    t.color("#38bdf8")\r
\r
    draw_snowflake_crystal(t, length=120)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 2 - Preserving turtle position and heading with state restore functions\r
File: fractal_branch_state_stack.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates stack-based Push/Pop State Architecture for recursive branching trees:\r
- push_state(t, stack): saves current snapshot\r
- pop_state(t, stack): restores last saved snapshot\r
"""\r
\r
import turtle\r
\r
def push_state(t, stack):\r
    """Pushes a snapshot of current turtle state onto the stack."""\r
    state = (t.position(), t.heading(), t.isdown(), t.pencolor(), t.pensize())\r
    stack.append(state)\r
\r
def pop_state(t, stack):\r
    """Pops and restores the most recent turtle state snapshot."""\r
    if not stack:\r
        return\r
    pos, head, is_down, p_col, p_size = stack.pop()\r
    t.penup()\r
    t.goto(pos)\r
    t.setheading(head)\r
    t.color(p_col)\r
    t.pensize(p_size)\r
    if is_down:\r
        t.pendown()\r
\r
def draw_recursive_tree(t, branch_len, depth, stack):\r
    """Draws a branching fractal tree using push_state and pop_state."""\r
    if depth == 0:\r
        return\r
\r
    # Color shift based on depth: brown trunk to vibrant green leaves\r
    colors = ["#15803d", "#22c55e", "#84cc16", "#a16207", "#78350f"]\r
    t.color(colors[min(depth, len(colors) - 1)])\r
    t.pensize(max(1, depth * 2))\r
\r
    t.forward(branch_len)\r
\r
    # 1. Left Branch\r
    push_state(t, stack)\r
    t.left(30)\r
    draw_recursive_tree(t, branch_len * 0.72, depth - 1, stack)\r
    pop_state(t, stack)\r
\r
    # 2. Right Branch\r
    push_state(t, stack)\r
    t.right(30)\r
    draw_recursive_tree(t, branch_len * 0.72, depth - 1, stack)\r
    pop_state(t, stack)\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Stack-Based Fractal Tree - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    state_stack = []\r
\r
    # Position at bottom center\r
    t.penup()\r
    t.goto(0, -220)\r
    t.setheading(90)\r
    t.pendown()\r
\r
    draw_recursive_tree(t, branch_len=90, depth=6, stack=state_stack)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`================================================================================\r
  TOPIC 2: PRESERVING TURTLE POSITION AND HEADING WITH STATE RESTORE FUNCTIONS\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE PROBLEM OF STATE MUTATION\r
--------------------------------------------------------------------------------\r
In procedural turtle programming, calling a helper function often alters the turtle's:\r
- Position \`(x, y)\`\r
- Heading angle\r
- Pen status (up/down)\r
- Stroke and fill colors\r
- Stroke width (pensize)\r
\r
If the helper function does not restore these values, subsequent caller commands\r
will draw in the wrong location at an unpredictable angle.\r
\r
2. THE 3 STATE RESTORATION STRATEGIES\r
--------------------------------------------------------------------------------\r
Strategy 1: Manual Variable Capture & Restore\r
Capture \`pos = t.position()\`, \`head = t.heading()\`, \`is_down = t.isdown()\`.\r
Restore with \`t.penup(); t.goto(pos); t.setheading(head); if is_down: t.pendown()\`.\r
\r
Strategy 2: Context Manager Pattern (Pythonic)\r
\`\`\`python\r
@contextmanager\r
def preserve_turtle(t):\r
    state = (t.position(), t.heading(), t.isdown(), t.pencolor(), t.pensize())\r
    try:\r
        yield t\r
    finally:\r
        # restore all state elements\r
\`\`\`\r
\r
Strategy 3: Stack-Based Push/Pop Architecture\r
Essential for recursive hierarchies (fractal trees, L-systems).\r
\`push_state(t, stack)\` saves the snapshot before descending;\r
\`pop_state(t, stack)\` restores it upon returning.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,j=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.6)); }
  100% { transform: scale(0.95); opacity: 0.8; }
}
`,C=()=>{const[r,p]=u.useState("preserved"),[h,m]=u.useState(3),x=[{name:"t.position() / t.heading()",returnType:"(float, float) / float",purpose:"Queries the turtle's active 2D world coordinates and current steering orientation angle.",usage:"saved_pos = t.pos(); saved_head = t.heading()"},{name:"with preserve_turtle(t):",returnType:"Context Manager",purpose:"Encapsulates sub-drawing inside an isolated scope that auto-restores state upon block exit.",usage:`with preserve_turtle(t):
    t.left(45); t.forward(30)`},{name:"push_state(t, stack) / pop_state(t, stack)",returnType:"Stack Operations",purpose:"LIFO state snapshot management for arbitrary-depth recursive fractal trees and L-systems.",usage:"push_state(t, stack); ...; pop_state(t, stack)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:j}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 2"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Preserving Turtle Position, Heading & State Restores"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Eliminate state pollution and angle drift. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"state encapsulation"}),", Pythonic ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"@contextmanager"})," blocks, and ",e.jsx("span",{className:"text-purple-300 font-semibold",children:"LIFO State Stacks"})," for recursive fractal branching."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🛡️ Zero State Pollution"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🐍 Pythonic Context Managers"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌲 LIFO Stack Fractal Branching"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," State Mutation & Restoration Comparator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare unrestored state pollution (causing cumulative skew and drift) against strict state preservation."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>p("leaked"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${r==="leaked"?"bg-rose-500 text-white shadow-lg shadow-rose-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"❌ Unrestored State (Leaked Drift)"}),e.jsx("button",{onClick:()=>p("preserved"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${r==="preserved"?"bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-bold":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"✅ Preserved State (Perfect Snowflake)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Geometric Result: ",r==="preserved"?"Hexagonal Radial Symmetry":"Drifting Broken Geometry"]}),e.jsxs("svg",{viewBox:"0 0 320 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("circle",{cx:"160",cy:"110",r:"5",fill:"#38bdf8"}),r==="preserved"?e.jsx("g",{stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round",children:[0,60,120,180,240,300].map(t=>{const n=t*Math.PI/180,a=160+75*Math.cos(n),s=110+75*Math.sin(n),o=160+45*Math.cos(n),i=110+45*Math.sin(n),l=(t-45)*Math.PI/180,c=(t+45)*Math.PI/180;return e.jsxs("g",{children:[e.jsx("line",{x1:"160",y1:"110",x2:a,y2:s,stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("line",{x1:a,y1:s,x2:a+18*Math.cos(l),y2:s+18*Math.sin(l),stroke:"#34d399"}),e.jsx("line",{x1:a,y1:s,x2:a+18*Math.cos(c),y2:s+18*Math.sin(c),stroke:"#34d399"}),e.jsx("line",{x1:o,y1:i,x2:o+14*Math.cos(l),y2:i+14*Math.sin(l),stroke:"#fbbf24"}),e.jsx("line",{x1:o,y1:i,x2:o+14*Math.cos(c),y2:i+14*Math.sin(c),stroke:"#fbbf24"})]},t)})}):e.jsxs("g",{stroke:"#f43f5e",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M 160,110 L 230,110 L 250,90 M 230,110 L 245,135 L 210,180 L 190,195 M 210,180 L 225,200 L 150,210 L 130,225 L 90,180 L 70,170",fill:"none",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("circle",{cx:"70",cy:"170",r:"4",fill:"#fbbf24"}),e.jsx("text",{x:"75",y:"165",fill:"#f43f5e",fontSize:"10",fontFamily:"monospace",children:"Turtle Lost!"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Turtle State Hygiene Analysis"}),e.jsx("span",{className:`font-mono text-xs px-2 py-0.5 rounded ${r==="preserved"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300":"bg-rose-500/10 border border-rose-500/30 text-rose-300"}`,children:r==="preserved"?"Invariant Maintained":"State Leaked"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Positional Anchor"}),e.jsx("div",{className:"text-sm font-mono font-bold text-sky-400",children:r==="preserved"?"(0.0, 0.0) [Exact]":"(142.6, -88.4) [Drifted]"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"t.position()"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Heading Orientation"}),e.jsx("div",{className:"text-sm font-mono font-bold text-amber-400",children:r==="preserved"?"60° [Consistent]":"173.4° [Skewed]"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"t.heading()"})]})]}),e.jsxs("div",{className:"space-y-1 pt-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Fractal Stack Depth:"}),e.jsxs("span",{className:"font-mono text-purple-300",children:[h," Levels"]})]}),e.jsx("input",{type:"range",min:"1",max:"6",value:h,onChange:t=>m(Number(t.target.value)),className:"w-full accent-purple-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Recommended Pythonic Pattern"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`with preserve_turtle(t):
    t.left(45)
    t.forward(30)
# Automatically restored to center anchor!`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," State Preservation APIs & Patterns"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Pattern / API"}),e.jsx("th",{className:"py-3 px-4",children:"Classification"}),e.jsx("th",{className:"py-3 px-4",children:"State Elements Handled"}),e.jsx("th",{className:"py-3 px-4",children:"Python Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:x.map((t,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:v,title:"turtle_state_save_restore_basics.py",highlightLines:[18,19,20,31,32,33]}),e.jsx(d,{fileModule:y,title:"turtle_state_context_manager.py",highlightLines:[13,23,26,27,28,41,45]}),e.jsx(d,{fileModule:_,title:"fractal_branch_state_stack.py",highlightLines:[12,18,41,44,47,50]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"❄️"})," Barrackpore Snowflake Competition"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Abhronila was creating a 6-fold crystal snowflake in Barrackpore. Because her sub-needle drawing function left the turtle at a 45° angle, the 2nd through 6th arms rotated into a chaotic, tangled web. Teacher Sukanta Hui introduced her to the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"with preserve_turtle(t):"})," context manager. The snowflake snapped into breathtaking, crystalline hexagonal symmetry!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-purple-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌳"})," Jadavpur Algorithmics: 8-Level Fractal Tree"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu attempted to draw an 8-level binary tree by manually calculating ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.backward()"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.right()"})," steps. Due to accumulated floating-point rounding errors, the trunk tilted by 18° at the base. Switching to an explicit ",e.jsx("code",{className:"text-purple-300 font-mono",children:"push_state() / pop_state()"})," stack eliminated all floating-point drift."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 State Management Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Returning with Pen Down"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.goto(saved_pos)"})," while the pen is still down draws a stray return line right through the center of your artwork. Always call ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"t.penup()"})," first."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Using t.home() for Restoration"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-rose-300 font-mono",children:"t.home()"})," teleports the turtle to origin (0, 0) and heading 0°, wiping out wherever the caller actually was in the scene."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Forgetting Pen Colors and Pensize"}),e.jsxs("p",{className:"text-slate-400",children:["Restoring position and heading while forgetting to restore ",e.jsx("code",{className:"text-amber-300 font-mono",children:"t.pencolor()"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"t.pensize()"})," causes subsequent caller strokes to inherit unexpected colors and thicknesses."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Unbalanced State Stack Pushes/Pops"}),e.jsxs("p",{className:"text-slate-400",children:["Missing a ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pop_state()"})," inside an early return branch causes the stack to grow indefinitely, eventually crashing with an ",e.jsx("code",{className:"text-rose-300 font-mono",children:"IndexError"})," or mismatched alignment."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to read current position `t.position()` and heading `t.heading()`","I always lift the pen with `t.penup()` before moving back to a saved anchor","I understand why the Python context manager `@contextmanager` guarantees state restoration","I can implement a LIFO State Stack for recursive fractal trees and branch structures","I preserve stroke color, fill color, and pensize alongside position and heading","I understand why `t.goto(saved_pos)` eliminates trigonometric floating-point drift"].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},n))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How modern web browsers implement HTML5 Canvas ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ctx.save()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ctx.restore()"})," to push and pop transformation matrices!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How snowflake crystals drawn with state preservation radiate outward with effortless 6-fold mathematical harmony!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Build a custom function decorator ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@preserve_state"})," to auto-wrap any drawing function!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In large software systems, side effects are the number one source of elusive bugs. By enforcing strict state invariants—leaving the turtle in the exact position, heading, and color state you found it—you build bulletproof, composable graphics software that seamlessly scales to thousands of visual elements."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(f,{title:"State Preservation & Restoration FAQs",questions:w})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(b,{content:k,title:"Topic 2: State Preservation Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(g,{note:"State preservation is the secret ingredient behind all majestic recursive graphics, from botanical fractal trees to Islamic arabesque rosettes. When my students in Barrackpore and Kolkata master the push/pop state pattern, they stop fearing complex drawings and start commanding recursive mathematical geometry with absolute confidence!"})})]})]})};export{C as default};

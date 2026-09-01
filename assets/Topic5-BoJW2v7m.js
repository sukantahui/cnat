import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as l}from"./TeacherSukantaHui-BaJcBHAy.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{F as d}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const p=[{question:"What does the DRY principle stand for and why is it essential?",shortAnswer:"'Don't Repeat Yourself' — every piece of knowledge or visual logic must have a single authoritative representation.",explanation:"Eliminating copy-pasted code makes software maintainable, extensible, and less prone to regression bugs.",hint:"What acronym states that logic should never be duplicated?",level:"basic",codeExample:"# DRY: Define draw_house() once, call it 10 times"},{question:"What is the Single Responsibility Principle (SRP) in graphical programming?",shortAnswer:"Every function should have exactly one job (e.g. `draw_window` draws only a window, `draw_chimney` draws only a chimney).",explanation:"Small, focused functions are easier to compose, test, and reuse.",hint:"What principle states a function should do only one specific task?",level:"basic",codeExample:"# draw_window, draw_door, draw_roof"},{question:"What is Data-Driven Graphics Architecture?",shortAnswer:"Separating the scene data (coordinates, dimensions, colors) from the rendering algorithm functions.",explanation:"Allows modifying or importing entire new levels and scenes from JSON files without touching Python rendering code.",hint:"What pattern separates coordinate data from drawing code?",level:"moderate",codeExample:`for item in SCENE_DATA:
    render_shape(t, item)`},{question:"How does DRY refactoring reduce codebase size in Turtle graphics?",shortAnswer:"Replacing repetitive copy-pasted movement commands with parameterized helper functions typically shrinks code by 60% to 80%.",explanation:"Parameterized loops eliminate hundreds of redundant lines.",hint:"How much code reduction is typical when refactoring copy-pasted Turtle scripts?",level:"basic",codeExample:"# 500 lines of spaghetti → 40 lines of clean DRY code"},{question:"How do you define configuration constants properly in Python?",shortAnswer:"Use UPPERCASE identifiers at the top of the file (e.g. `DEFAULT_BG_COLOR = '#020617'`).",explanation:"PEP 8 conventions dictate uppercase naming for global configuration constants.",hint:"What naming convention indicates a global configuration constant?",level:"basic",codeExample:`SCREEN_WIDTH = 800
DEFAULT_PAGESIZE = 2`},{question:"How do you unit test a graphical invariant in Python Turtle?",shortAnswer:"Record `t.pos()` and `t.heading()`, run the drawing function, and `assert t.pos() == initial_pos`.",explanation:"Automated assertion testing ensures functions leave zero side effects on the environment.",hint:"How do you verify state restoration with Python assertions?",level:"moderate",codeExample:"assert t.position() == initial_pos"},{question:"Why should magic numbers (e.g. `t.forward(137.4)`) be avoided inside code bodies?",shortAnswer:"Magic numbers obscure geometric intent and make global scaling adjustments painful.",explanation:"Replacing magic numbers with named parameters or constants clarifies code semantics.",hint:"Why should hardcoded literal numbers be replaced with named constants?",level:"basic",codeExample:`# BAD: t.forward(137.4)
# GOOD: t.forward(GOLDEN_RATIO_STEP)`},{question:"What is Type Hinting in Python and how does it benefit Turtle drawing functions?",shortAnswer:"Adding type annotations (e.g. `t: turtle.Turtle, x: float, y: float`) to improve IDE autocomplete and type safety.",explanation:"Type annotations clarify expected input types and catch type mismatch errors early.",hint:"What Python feature adds type annotations to function parameters?",level:"moderate",codeExample:"def draw_circle(t: turtle.Turtle, x: float, y: float, radius: float) → None:"},{question:"How do Docstrings adhere to clean code standards?",shortAnswer:"By clearly explaining what the function draws, its anchor position, required parameters, and return types.",explanation:"Standardized docstrings turn individual scripts into professional, self-documenting libraries.",hint:"What format provides inline multi-line function documentation?",level:"basic",codeExample:'"""Draws a regular polygon anchored at (x,y)."""'},{question:"What is Code Smells in graphics programming?",shortAnswer:"Subtle indicators of poor design (e.g. functions over 100 lines long, hardcoded coordinates, deeply nested loops).",explanation:"Identifying code smells signals when refactoring is needed.",hint:"What term describes symptoms of poorly structured code?",level:"moderate",codeExample:"# Code smell: 20 consecutive penup/goto calls"},{question:"How do you refactor a 10-house neighborhood script to be 100% DRY?",shortAnswer:"Create `draw_house(t, x, y, size, wall, roof)`, store 10 house dicts in a list, and iterate with a `for` loop.",explanation:"Combining a parameterized function with a coordinate list is the classic DRY refactoring pattern.",hint:"What 2 elements replace 10 copy-pasted houses?",level:"basic",codeExample:`for h in houses:
    draw_house(t, **h)`},{question:"Why should drawing functions avoid performing console I/O (`print()`)?",shortAnswer:"Separation of concerns: drawing functions should focus strictly on graphical rendering, not terminal output.",explanation:"Mixing console logging into tight graphics routines degrades performance and couples concerns.",hint:"Why should graphical helpers avoid console print calls?",level:"moderate",codeExample:"# Keep drawing pure without print() statements"},{question:"What is the Open/Closed Principle (OCP) in graphics libraries?",shortAnswer:"Software entities should be open for extension (adding new shapes) but closed for modification (existing shapes unchanged).",explanation:"Adding `draw_hexagon` should not require modifying `draw_square` or breaking client applications.",hint:"Which SOLID principle encourages adding new shapes without altering existing ones?",level:"advanced",codeExample:"# Add new draw_star() without touching draw_circle()"},{question:"How does PEP 8 guide Python code formatting in graphical projects?",shortAnswer:"Standardizes 4-space indentation, snake_case function names, UPPERCASE constants, and 79-character line limits.",explanation:"PEP 8 ensures consistent, readable style across open-source and team projects.",hint:"What is the official style guide for Python code?",level:"basic",codeExample:"# PEP 8: def draw_house(t, x, y):"},{question:"What is Dead Code and why should it be purged during refactoring?",shortAnswer:"Unused functions or commented-out old drawing commands that clutter the codebase and confuse maintainers.",explanation:"Removing dead code keeps the repository lean, readable, and maintainable.",hint:"What do you call unused or commented-out legacy code?",level:"basic",codeExample:"# Delete commented-out legacy drawing routines"},{question:"How can dictionary unpacking `**kwargs` be used in data-driven graphics pipelines?",shortAnswer:"`draw_shape(t, **node_data)` forwards dictionary key-value pairs directly as keyword arguments.",explanation:"Dictionary unpacking cleanly maps JSON data structures to Python function signatures.",hint:"What syntax unpacks a dictionary into function keyword arguments?",level:"moderate",codeExample:"draw_house(t, **house_dict)"},{question:"Why is Cyclomatic Complexity dangerous in drawing algorithms?",shortAnswer:"Too many nested `if`/`else` and loop branches make drawing logic nearly impossible to test and debug.",explanation:"Refactoring complex branches into smaller helper functions reduces cyclomatic complexity.",hint:"What metric measures the number of decision branches in a function?",level:"advanced",codeExample:"# Keep function cyclomatic complexity < 5"},{question:"How do you refactor deeply nested loops drawing a matrix grid of tiles?",shortAnswer:"Extract the inner tile drawing logic into `draw_single_tile(t, x, y)` and keep the double loop purely for coordinate generation.",explanation:"Separating loop iteration from tile rendering makes both units simple and testable.",hint:"How do you simplify nested grid loops?",level:"moderate",codeExample:`for r in range(N):
    for c in range(M): draw_tile(t, r*dx, c*dy)`},{question:"What is the Law of Demeter (Principle of Least Knowledge) in modular graphics?",shortAnswer:"A drawing function should only know about its immediate inputs (`t, x, y, size`), not global screen internals.",explanation:"Minimizing external dependencies makes components truly decoupled and portable.",hint:"What principle states components should only know their direct parameters?",level:"advanced",codeExample:"# Depend only on t and passed arguments"},{question:"How do you create a self-contained Python package that can be installed with `pip install .`?",shortAnswer:"Include a `pyproject.toml` or `setup.py` defining package metadata, entry points, and dependencies.",explanation:"Packaging standardizes library distribution across the global Python ecosystem.",hint:"What configuration file standardizes modern Python package builds?",level:"advanced",codeExample:"# pyproject.toml"},{question:"Why should functions return early (`guard clauses`) when given invalid parameters?",shortAnswer:"Guard clauses eliminate deeply indented `if/else` ladders and catch invalid inputs immediately.",explanation:"Early returns make the primary drawing pathway clean, linear, and readable.",hint:"What programming pattern returns immediately upon detecting invalid inputs?",level:"moderate",codeExample:`if size <= 0: return
# Primary drawing code...`},{question:"How do you measure code readability in Python projects?",shortAnswer:"Using linters like Flake8, Ruff, and Black to enforce consistent formatting and cognitive simplicity.",explanation:"Automated tooling enforces professional code quality standards automatically.",hint:"What tools automatically enforce Python style and quality?",level:"basic",codeExample:"# ruff check . / black --check ."},{question:"What is the Boy Scout Rule in software engineering?",shortAnswer:"'Always leave the codebase cleaner than you found it.'",explanation:"Continuous incremental refactoring prevents technical debt accumulation over time.",hint:"What rule encourages making code cleaner every time you edit it?",level:"basic",codeExample:"# Refactor messy functions when making enhancements"},{question:"How can list comprehensions replace verbose coordinate generation loops?",shortAnswer:"`coords = [(x, math.sin(x)*50) for x in range(-200, 200, 10)]` generates points cleanly in one line.",explanation:"List comprehensions express mathematical coordinate series with high clarity and execution speed.",hint:"What one-line Python syntax generates coordinate lists concisely?",level:"moderate",codeExample:"pts = [(i*20, i*15) for i in range(10)]"},{question:"Why should helper functions be marked as private with a leading underscore `_helper()`?",shortAnswer:"To signal to consumers that the function is an internal implementation detail and not part of the public API.",explanation:"PEP 8 convention uses `_` to denote non-public internal helpers.",hint:"What prefix indicates a function is private in Python?",level:"moderate",codeExample:"def _calculate_roof_vertex(x, y, w, h):"},{question:"How does functional immutability improve data-driven graphics pipelines?",shortAnswer:"Ensures the renderer never modifies the original scene data dictionaries during rendering passes.",explanation:"Immutability prevents subtle data corruption bugs across multiple frame redraws.",hint:"Why should rendering functions avoid mutating input data?",level:"advanced",codeExample:"# Treat input dictionaries as read-only"},{question:"What is a Pure Function in graphics programming?",shortAnswer:"A function whose output depends strictly on its arguments and causes no observable side effects outside its canvas target.",explanation:"Pure functions are deterministic, thread-safe, and effortlessly testable.",hint:"What term describes deterministic functions with zero side effects?",level:"advanced",codeExample:"# Pure: f(x) always produces identical geometry without side effects"},{question:"How do you document side effects if a function intentionally alters turtle state?",shortAnswer:"Explicitly highlight state modifications in the docstring under a `Side Effects:` section.",explanation:"Clear documentation ensures callers are never surprised by state mutations.",hint:"Where should intentional state alterations be documented?",level:"basic",codeExample:'"""Side Effects: Leaves turtle heading at 45 degrees."""'},{question:"What is the ultimate 5-step checklist for Clean Code and DRY Refactoring in Turtle Graphics?",shortAnswer:"1. Eliminate copy-paste | 2. Single Responsibility per function | 3. Separate data from rendering | 4. Add type hints and docstrings | 5. Test state invariants.",explanation:"Applying this 5-step framework transforms beginner spaghetti scripts into production-ready software.",hint:"What 5 steps guarantee clean, DRY graphical architecture?",level:"basic",codeExample:"# 1. DRY | 2. SRP | 3. Data-driven | 4. Docs | 5. Test Invariants"},{question:"Why is mastering modular graphics with clean code essential for professional Python careers?",shortAnswer:"Because the same principles of modularity, abstraction, SRP, and DRY power enterprise web backends, data engineering pipelines, and game engines.",explanation:"Turtle graphics provides a visual playground to master professional software engineering fundamentals.",hint:"How does clean graphics coding translate to real-world software careers?",level:"basic",codeExample:"# Clean code fundamentals apply across all software domains"}],h=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 5 - Clean code and DRY principles in graphical programming\r
File: spaghetti_vs_dry_refactoring.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Side-by-side demonstration of DRY (Don't Repeat Yourself) Refactoring:\r
- ANTI-PATTERN: Copy-pasting 50 lines of sequential forward/left/fill commands for each house.\r
- BEST PRACTICE: Single parameterized \`draw_house()\` function called over a coordinate array.\r
"""\r
\r
import turtle\r
\r
# ==============================================================================\r
# ANTI-PATTERN (SPAGHETTI CODE): DO NOT WRITE THIS!\r
# ==============================================================================\r
def draw_spaghetti_houses_bad():\r
    """Violates DRY principle with massive copy-paste duplication."""\r
    t = turtle.Turtle()\r
    # House 1\r
    t.penup(); t.goto(-200, 0); t.pendown()\r
    t.color("blue", "lightblue"); t.begin_fill()\r
    t.forward(80); t.left(90); t.forward(80); t.left(90); t.forward(80); t.left(90); t.forward(80); t.left(90)\r
    t.end_fill()\r
    # Roof 1\r
    t.penup(); t.goto(-210, 80); t.pendown()\r
    t.color("red", "pink"); t.begin_fill()\r
    t.goto(-160, 130); t.goto(-110, 80); t.goto(-210, 80)\r
    t.end_fill()\r
    # ... Repeated 10 more times for House 2, House 3 ...\r
\r
# ==============================================================================\r
# REFACTORED BEST PRACTICE (CLEAN DRY CODE)\r
# ==============================================================================\r
def draw_rectangle(t, x, y, width, height, fill_color, border_color="white"):\r
    """Single Responsibility: Draws a clean rectangle."""\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(width); t.left(90); t.forward(height); t.left(90)\r
    t.end_fill()\r
\r
def draw_house(t, x, y, size=80, wall_color="#0284c7", roof_color="#f43f5e"):\r
    """Composite DRY Function."""\r
    # Base\r
    draw_rectangle(t, x, y, size, size*0.8, wall_color)\r
    # Roof\r
    t.penup(); t.goto(x - size*0.1, y + size*0.8); t.pendown()\r
    t.color("white", roof_color)\r
    t.begin_fill()\r
    t.goto(x + size*0.5, y + size*1.3)\r
    t.goto(x + size*1.1, y + size*0.8)\r
    t.goto(x - size*0.1, y + size*0.8)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("DRY Refactoring Showcase - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Data-driven clean execution\r
    village_dataset = [\r
        {"x": -260, "y": -50, "size": 90, "wall": "#0284c7", "roof": "#f43f5e"},\r
        {"x": -70,  "y": -50, "size": 110, "wall": "#059669", "roof": "#eab308"},\r
        {"x": 140,  "y": -50, "size": 80,  "wall": "#7c3aed", "roof": "#fb923c"}\r
    ]\r
\r
    for house in village_dataset:\r
        draw_house(t, house["x"], house["y"], house["size"], house["wall"], house["roof"])\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,u=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 5 - Clean code and DRY principles in graphical programming\r
File: data_driven_graphics_engine.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Separation of Concerns: Decouples the Scene Data (JSON/Dictionaries)\r
completely from the Rendering Logic functions.\r
"""\r
\r
import turtle\r
\r
def draw_polygon_node(t, node):\r
    """Generic Renderer: Draws any polygon entity defined in data."""\r
    t.penup(); t.goto(node["x"], node["y"]); t.setheading(node.get("rotation", 0)); t.pendown()\r
    t.color(node.get("border", "white"), node.get("fill", "#38bdf8"))\r
    t.pensize(node.get("pensize", 2))\r
    t.begin_fill()\r
\r
    sides = node["sides"]\r
    size = node["size"]\r
    angle = 360 / sides\r
    for _ in range(sides):\r
        t.forward(size)\r
        t.left(angle)\r
    t.end_fill()\r
\r
def render_scene_from_data(t, entities):\r
    """Orchestrates drawing across an entire data stream."""\r
    for entity in entities:\r
        if entity["type"] == "polygon":\r
            draw_polygon_node(t, entity)\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Data-Driven Graphics Engine - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # Scene Data definition (Could be loaded directly from JSON/API)\r
    SCENE_DATA = [\r
        {"type": "polygon", "x": -220, "y": 0, "sides": 3, "size": 90, "fill": "#f43f5e", "rotation": 0},\r
        {"type": "polygon", "x": -60,  "y": 0, "sides": 4, "size": 80, "fill": "#fbbf24", "rotation": 45},\r
        {"type": "polygon", "x": 100,  "y": 0, "sides": 6, "size": 55, "fill": "#34d399", "rotation": 0},\r
        {"type": "polygon", "x": 240,  "y": 0, "sides": 8, "size": 40, "fill": "#a855f7", "rotation": 22.5}\r
    ]\r
\r
    render_scene_from_data(t, SCENE_DATA)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,g=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 5 - Clean code and DRY principles in graphical programming\r
File: graphical_unit_testing_invariants.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates writing automated unit tests and assertions to verify\r
Turtle graphical invariants (zero state mutation, heading preservation, correct bounds).\r
"""\r
\r
import turtle\r
\r
def draw_square_safe(t, x, y, size, color="#38bdf8"):\r
    """Invariant: Leaves turtle exactly where it was before the call."""\r
    orig_pos = t.position()\r
    orig_head = t.heading()\r
\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color("white", color)\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(size); t.left(90)\r
    t.end_fill()\r
\r
    # Restore\r
    t.penup(); t.goto(orig_pos); t.setheading(orig_head); t.pendown()\r
\r
def test_draw_square_invariants():\r
    """Automated Unit Test Suite for draw_square_safe()."""\r
    t = turtle.Turtle()\r
    t.penup(); t.goto(42.5, -99.0); t.setheading(135.0); t.pendown()\r
\r
    initial_pos = t.position()\r
    initial_heading = t.heading()\r
\r
    # Execute function under test\r
    draw_square_safe(t, -100, 50, 60, color="#f43f5e")\r
\r
    # Assertions\r
    assert t.position() == initial_pos, f"Position invariant violated: {t.position()} != {initial_pos}"\r
    assert t.heading() == initial_heading, f"Heading invariant violated: {t.heading()} != {initial_heading}"\r
\r
    print("✅ All Graphical Unit Tests Passed! Zero State Leakage Verified.")\r
\r
if __name__ == "__main__":\r
    test_draw_square_invariants()\r
`,m=`================================================================================\r
  TOPIC 5: CLEAN CODE AND DRY PRINCIPLES IN GRAPHICAL PROGRAMMING\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS DRY IN GRAPHICS PROGRAMMING?\r
--------------------------------------------------------------------------------\r
DRY stands for "Don't Repeat Yourself". Every unique visual concept (e.g. how a\r
window, roof, tree, or star is drawn) should exist in exactly one authoritative function.\r
\r
2. THE 4 PILLARS OF CLEAN GRAPHICAL CODE\r
--------------------------------------------------------------------------------\r
1. Single Responsibility Principle (SRP):\r
   A function should do one thing well (\`draw_door\` only draws a door).\r
\r
2. Data-Driven Separation:\r
   Keep layout coordinates in data lists/dictionaries; keep rendering in functions.\r
\r
3. Configuration Constants:\r
   Define global colors, screen sizes, and themes as UPPERCASE constants at top of file.\r
\r
4. Verifiable Invariants & Unit Testing:\r
   Ensure functions never leak state by asserting \`t.pos() == initial_pos\`.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,f=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes badgeShine {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.6)); }
}
`,R=()=>{const[t,s]=o.useState("dry"),i=[{name:"DRY Refactoring Pattern",returnType:"Architectural Principle",purpose:"Replaces redundant copy-pasted drawing commands with a single authoritative parameterized function.",usage:`for h in houses:
    draw_house(t, **h)`},{name:"Data-Driven Renderer",returnType:"Separation of Concerns",purpose:"Decouples spatial layout datasets (JSON / Dicts) completely from geometric rendering algorithms.",usage:"render_scene_from_data(t, SCENE_DATA)"},{name:"Graphical Invariant Assertion",returnType:"Unit Testing",purpose:"Automated assertion testing verifying that drawing functions leave zero side effects on turtle state.",usage:"assert t.position() == initial_pos"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 5"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent",children:"Clean Code & DRY Principles in Graphical Programming"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Transform monolithic spaghetti code into elegant, production-grade graphics software. Master the ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"DRY (Don't Repeat Yourself)"})," principle, ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Single Responsibility (SRP)"}),", data-driven pipelines, and automated invariant testing."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🧼 DRY (Don't Repeat Yourself)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📊 Data-Driven Rendering Pipelines"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🧪 Graphical Invariant Unit Testing"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Interactive DRY Refactoring Comparator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare monolithic spaghetti script metrics against clean, data-driven DRY architecture."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>s("spaghetti"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="spaghetti"?"bg-rose-500 text-white shadow-lg shadow-rose-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"🍝 Spaghetti Anti-Pattern (80 Lines)"}),e.jsx("button",{onClick:()=>s("dry"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="dry"?"bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"✨ Clean DRY Architecture (15 Lines)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Rendered Output (Village Layout: 3 Houses)"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("line",{x1:"10",y1:"150",x2:"310",y2:"150",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(25, 65)",children:[e.jsx("rect",{x:"0",y:"45",width:"60",height:"40",fill:"#0284c7",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("polygon",{points:"30,20 -5,45 65,45",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("rect",{x:"10",y:"65",width:"14",height:"20",fill:"#78350f"}),e.jsx("rect",{x:"35",y:"55",width:"12",height:"12",fill:"#fef08a"})]}),e.jsxs("g",{transform:"translate(115, 45)",children:[e.jsx("rect",{x:"0",y:"55",width:"80",height:"50",fill:"#059669",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("polygon",{points:"40,25 -8,55 88,55",fill:"#eab308",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("rect",{x:"15",y:"80",width:"18",height:"25",fill:"#78350f"}),e.jsx("rect",{x:"48",y:"68",width:"16",height:"16",fill:"#fef08a"})]}),e.jsxs("g",{transform:"translate(225, 75)",children:[e.jsx("rect",{x:"0",y:"40",width:"55",height:"35",fill:"#7c3aed",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("polygon",{points:"27,18 -5,40 60,40",fill:"#fb923c",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("rect",{x:"10",y:"57",width:"12",height:"18",fill:"#78350f"}),e.jsx("rect",{x:"32",y:"48",width:"12",height:"12",fill:"#fef08a"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Code Quality & Maintainability Index"}),e.jsx("span",{className:`font-mono text-xs px-2 py-0.5 rounded ${t==="dry"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold":"bg-rose-500/10 border border-rose-500/30 text-rose-300"}`,children:t==="dry"?"Grade: A+ (Production Quality)":"Grade: F (High Technical Debt)"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Total Lines of Code"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:t==="dry"?"15 Lines (78% Reduction)":"80+ Lines (Copy-Pasted)"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Maintainability Factor"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Change Propagation Cost"}),e.jsx("div",{className:"text-base font-mono font-bold text-emerald-400",children:t==="dry"?"1 Single Function Edit":"30+ Manual Search/Replaces"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Refactoring Efficiency"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:["# ",t==="dry"?"Clean Data-Driven Architecture":"Copy-Pasted Monolithic Anti-Pattern"]}),e.jsx("pre",{className:`font-mono text-xs overflow-x-auto ${t==="dry"?"text-emerald-300":"text-rose-300"}`,children:t==="dry"?`for house in village_dataset:
    draw_house(t, **house)`:`# House 1 (20 lines)
t.forward(80); t.left(90)...
# House 2 (20 lines duplicate)
t.forward(100); t.left(90)...`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Clean Code Standards in Graphics Engineering"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Clean Code Principle"}),e.jsx("th",{className:"py-3 px-4",children:"Core Rule"}),e.jsx("th",{className:"py-3 px-4",children:"Graphical Benefit"}),e.jsx("th",{className:"py-3 px-4",children:"Implementation Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:i.map((n,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:n.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:n.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:n.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:n.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{fileModule:h,title:"spaghetti_vs_dry_refactoring.py",highlightLines:[14,28,38,59,60,61,62,65]}),e.jsx(r,{fileModule:u,title:"data_driven_graphics_engine.py",highlightLines:[12,13,27,28,41,42,43,44,47]}),e.jsx(r,{fileModule:g,title:"graphical_unit_testing_invariants.py",highlightLines:[12,13,14,23,27,34,38,39]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🧹"})," Barrackpore Code Review: The 600-Line Cleanup"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima brought a 650-line script drawing a railway terminal to class in Barrackpore. When the teacher requested changing track gauge widths, she was overwhelmed by 40 copy-pasted blocks. Teacher Sukanta Hui guided her to apply DRY principles. In 15 minutes, her code shrank to ",e.jsx("strong",{children:"65 lines"}),", and modifying the gauge width required altering just 1 configuration constant!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🧪"})," Jadavpur Software Testing: Invariant CI/CD"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu integrated automated assertion testing into his graphics project. By writing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"assert t.pos() == start_pos"})," before and after every drawing helper, he caught 3 elusive state leakage bugs before his final semester submission, earning top honors in software engineering."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Clean Code Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Copy-Pasting Drawing Code Blocks"}),e.jsx("p",{className:"text-slate-400",children:"Duplicating 20 lines of code every time you need a new house or star multiplies technical debt and makes bug fixes 10x harder. Always extract to a function."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Embedding Data Directly Inside Functions"}),e.jsx("p",{className:"text-slate-400",children:"Hardcoding coordinate arrays inside functions couples data with rendering. Keep datasets in standalone lists/dictionaries or external JSON files."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Magic Numbers Everywhere"}),e.jsxs("p",{className:"text-slate-400",children:["Writing literal numbers like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.forward(137.4)"})," without comments or named constants leaves future maintainers completely unable to decipher geometric intent."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Megafunctions Over 100 Lines"}),e.jsx("p",{className:"text-slate-400",children:"A single function that sets up the screen, calculates math, draws sky, mountains, houses, and handles mouse clicks violates Single Responsibility. Decompose it into small, single-purpose units."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I practice DRY (Don't Repeat Yourself) by turning repeated code into parameterized functions","I adhere to the Single Responsibility Principle (SRP) by keeping functions focused","I decouple scene layout datasets from geometric rendering algorithms","I replace magic numbers with UPPERCASE configuration constants","I write automated unit tests and assertions to verify turtle state invariants","I use type annotations and standardized docstrings across all drawing APIs"].map((n,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:n})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How modern software teams use automated CI/CD linters (Black, Ruff, PyTest) to prevent messy code from ever entering production repositories!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How refactoring to data-driven pipelines allows loading entirely new levels or scenes simply by swapping a JSON file!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Write a pytest test suite that verifies 5 of your custom drawing functions leave zero state leakage!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Anyone can write code that a computer understands; great programmers write code that humans understand. By cultivating clean code habits, DRY principles, and disciplined modularity early in your journey, you build the foundation required to architect million-line enterprise applications, game engines, and distributed cloud systems."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(d,{title:"Clean Code & DRY Principles FAQs",questions:p})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(c,{content:m,title:"Topic 5: Clean Code & DRY Principles Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(l,{note:"As we conclude Module 005_004 at Coder & AccoTax in Barrackpore and Kolkata, remember: modularity is not just a coding style—it is a superpower. Clean functions, DRY architecture, and state invariants turn programming from a frustrating maze of copy-pasted lines into a joyful discipline of creative engineering. Keep your functions pure, your datasets decoupled, and your code DRY!"})})]})]})};export{R as default};

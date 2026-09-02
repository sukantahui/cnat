import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as c}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as s}from"./PythonFileLoader-hCi5osN-.js";import{F as h}from"./FAQTemplate-BHhlgA96.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const m=[{question:"What is the purpose of creating a dedicated custom shape library module?",shortAnswer:"To organize reusable vector drawing functions in a single `.py` file that can be imported across any project.",explanation:"Modular libraries eliminate code duplication and create standardized graphical APIs.",hint:"Why place drawing functions in a standalone .py file?",level:"basic",codeExample:"from custom_shapes import draw_gear, draw_shield"},{question:"Why must library modules protect demo code inside `if __name__ == '__main__':`?",shortAnswer:"To prevent the showcase window from opening whenever another script imports the library.",explanation:"Importing a module executes top-level code; the `__name__` guard ensures silent definitions upon import.",hint:"How do you prevent code from executing on import?",level:"basic",codeExample:`if __name__ == '__main__':
    main()`},{question:"How do you calculate tooth coordinates when drawing a mechanical gear icon?",shortAnswer:"Alternate between outer radius and inner radius at angles `i * (360 / (teeth * 2))`.",explanation:"Trigonometric radial alternation creates precise gear teeth profiles.",hint:"How do you alternate outer and inner radius for gear teeth?",level:"moderate",codeExample:`r = outer_r if i % 2 == 0 else inner_r
x = cx + r * math.cos(rad)`},{question:"How do you construct a smooth cardiovascular heart icon using Turtle primitives?",shortAnswer:"Tilt 50°, draw a straight diagonal line, sweep two 200° circle arcs, and return with a symmetric diagonal line.",explanation:"Combining linear lines with two symmetric circle arcs forms a classic heart silhouette.",hint:"What combinations of lines and circle arcs create a heart shape?",level:"moderate",codeExample:"t.forward(size); t.circle(r, 200); t.right(140); t.circle(r, 200); t.forward(size)"},{question:"What is API consistency in a graphics library?",shortAnswer:"Maintaining identical argument order and parameter naming conventions across all library functions.",explanation:"Consistent parameter order (e.g. `t, x, y, size, fill, border`) makes libraries intuitive to learn and use.",hint:"Why should all library functions follow identical argument orders?",level:"basic",codeExample:`draw_gear(t, x, y, ...)
draw_shield(t, x, y, ...)`},{question:"How do you draw a rounded pill/capsule badge in Turtle?",shortAnswer:"Draw two parallel straight lines connected at the ends by two 180° semi-circular arcs with `extent=180`.",explanation:"Two parallel lines capped with semicircles form a smooth rounded pill container.",hint:"What geometric parts make up a rounded pill capsule?",level:"moderate",codeExample:"t.forward(w); t.circle(h/2, 180); t.forward(w); t.circle(h/2, 180)"},{question:"How can you implement a status dictionary for themeable UI components in Python?",shortAnswer:"Map status keys (`'success'`, `'danger'`) to tuples of background, border, and text colors.",explanation:"Theme dictionaries decouple visual styling from drawing geometry.",hint:"How do you map status names to color palettes in Python?",level:"moderate",codeExample:"themes = {'success': ('#064e3b', '#34d399'), 'danger': ('#881337', '#fb7185')}"},{question:"Why should library drawing functions avoid calling `turtle.done()`?",shortAnswer:"`turtle.done()` blocks execution in the event loop; only the top-level main application should control the event lifecycle.",explanation:"Library functions must return control immediately to the calling script.",hint:"Where should turtle.done() be invoked?",level:"basic",codeExample:"# Keep turtle.done() strictly in main application entry point"},{question:"How do you draw a sun icon with radiating rays using a custom library function?",shortAnswer:"Calculate ray endpoints using polar coordinates `(r, r + ray_len)` at angle intervals `360 / num_rays`.",explanation:"Radiating radial lines around a central disc create crisp sun icons.",hint:"How are sun rays positioned around a center circle?",level:"moderate",codeExample:"x2 = cx + (r + ray_len) * math.cos(rad)"},{question:"How do you create a package of multiple shape modules in Python?",shortAnswer:"Place the modules in a directory containing an `__init__.py` file.",explanation:"`__init__.py` marks the folder as an importable Python package.",hint:"What special file turns a folder into a Python package?",level:"moderate",codeExample:"# graphics/__init__.py"},{question:"What is the benefit of `__all__` in a library module?",shortAnswer:"It defines the public export list when a user performs `from module import *`.",explanation:"`__all__ = ['draw_gear', 'draw_shield']` encapsulates internal helper functions.",hint:"What module variable controls wildcard exports?",level:"advanced",codeExample:"__all__ = ['draw_gear', 'draw_shield', 'draw_heart']"},{question:"How do you draw a battery charge level indicator with modular library functions?",shortAnswer:"Draw an outer rectangular container with terminal nub, then render filled green fill bars proportional to percentage.",explanation:"Parameterized fill bars convert numeric telemetry values into intuitive visual gauges.",hint:"How is percentage charge rendered in a battery graphic?",level:"advanced",codeExample:"charge_width = (pct / 100.0) * inner_width"},{question:"Why should anchor conventions (e.g. Center vs Top-Left) be documented in docstrings?",shortAnswer:"So consumers know exactly how `(x, y)` aligns relative to the drawn shape boundary.",explanation:"Knowing whether (x, y) is the center or corner prevents alignment errors during scene assembly.",hint:"Why document the anchor point of a library icon?",level:"basic",codeExample:'"""Draws a shield anchored at top-center (x, y)."""'},{question:"How do you render a cybersecurity shield badge with an inner checkmark?",shortAnswer:"Draw the shield polygon outline with `draw_shield()`, then render a checkmark using `t.goto()` points.",explanation:"Composing the shield icon with vector glyphs produces verified trust badges.",hint:"How do you add an inner checkmark to a shield?",level:"advanced",codeExample:"# draw_shield() + inner checkmark path"},{question:"How can you create a cloud icon using overlapping circular arcs?",shortAnswer:"Draw a horizontal flat base line, then connect sequential `circle(r, 120)` arcs of varying radii.",explanation:"Sequential tangent circle arcs create fluffy cartoon cloud profiles.",hint:"How do you create fluffy cloud outlines with Turtle?",level:"moderate",codeExample:"t.circle(r1, 180); t.circle(r2, 120); t.circle(r3, 120)"},{question:"How do you distribute an icon library across multiple classroom students?",shortAnswer:"Save it as `turtle_icons.py` in the shared Python path or project root directory.",explanation:"Placing the module in the project root makes `import turtle_icons` work automatically.",hint:"Where do you save a module so Python can find it?",level:"basic",codeExample:"import turtle_icons as icons"},{question:"What is semantic versioning in graphics libraries?",shortAnswer:"Labeling releases as `MAJOR.MINOR.PATCH` (e.g. `1.2.0`) to track backwards-compatible features and breaking changes.",explanation:"Semantic versioning maintains stability as new shapes and icons are added over time.",hint:"What standard version format uses 3 numbers separated by dots?",level:"moderate",codeExample:"__version__ = '1.2.0'"},{question:"How do you draw a metric card in a telemetry dashboard using library icons?",shortAnswer:"Draw a dark rounded rectangle card, render the appropriate library icon at top-left, and print text metrics on the right.",explanation:"Modular icon libraries allow rapid assembly of enterprise-style dashboard widgets.",hint:"How do you combine background cards, icons, and text in a dashboard?",level:"moderate",codeExample:"draw_card(t, x, y); draw_shield(t, x+30, y+50); t.write('99.9%')"},{question:"Why should library functions avoid hardcoding specific font names?",shortAnswer:"Different operating systems (Windows, macOS, Linux) have different available system fonts.",explanation:"Using standard cross-platform fonts (e.g. Arial, Helvetica, Courier) prevents rendering failures.",hint:"Why use standard fonts in cross-platform libraries?",level:"moderate",codeExample:"font=('Arial', 10, 'normal')"},{question:"How can you test all library functions automatically in a test suite?",shortAnswer:"Write a script that iterates over all functions in `custom_shapes` and calls each with standard parameters on an offscreen canvas.",explanation:"Automated regression testing ensures new changes don't break existing shapes.",hint:"How do you verify all library shapes render without exceptions?",level:"advanced",codeExample:"for fn in [draw_gear, draw_shield, draw_heart]: fn(t, 0, 0)"},{question:"What is Namespace Pollution and how does a well-designed library avoid it?",shortAnswer:"Dumping hundreds of global variables into the consumer scope; avoid it with `__all__` and proper module scoping.",explanation:"Encapsulating functions inside clean module namespaces keeps client scripts organized.",hint:"What happens when a library exports too many internal variables?",level:"advanced",codeExample:"from shapes import draw_gear  # Clean namespace"},{question:"How do you create an audio/speaker volume icon with wave arcs?",shortAnswer:"Draw a trapezoidal speaker cone, followed by concentric arcs using `t.circle(r, extent=60)`.",explanation:"Combining a polygon horn with radial circular arcs creates standard volume indicators.",hint:"How are sound wave arcs drawn next to a speaker cone?",level:"moderate",codeExample:"t.circle(20, 60); t.circle(35, 60)"},{question:"Why is modular library architecture crucial for game UI development?",shortAnswer:"It allows separating HUD (Heads-Up Display) health bars, minimap icons, and inventory slots from core game loop physics.",explanation:"Separation of concerns keeps game logic fast, modular, and maintainable.",hint:"Why separate HUD drawing from game physics?",level:"advanced",codeExample:"# HUD: draw_heart_hud(t, player.hp)"},{question:"How do you handle default parameters when callers pass `None`?",shortAnswer:"Use sentinel checks: `if fill_color is None: fill_color = '#38bdf8'`.",explanation:"Sentinel handling provides robust fallback behavior for optional arguments.",hint:"How do you handle optional parameters that receive None?",level:"basic",codeExample:"if color is None: color = '#38bdf8'"},{question:"How do you draw a toggle switch UI component using library primitives?",shortAnswer:"Draw a rounded pill base in green or gray, and draw a solid white circle knob at the active offset position.",explanation:"Pill capsules combined with circular knobs model iOS/Android toggle switches.",hint:"What primitives create an ON/OFF toggle switch?",level:"moderate",codeExample:"# Pill capsule + circle knob at (x_offset, y)"},{question:"What is an icon sprite sheet?",shortAnswer:"A single layout or module providing a grid of pre-rendered or procedural vector icons for quick lookup.",explanation:"Sprite sheets catalog all available icons in a single visual reference gallery.",hint:"What do you call a visual catalog displaying all available icons?",level:"moderate",codeExample:"# Gallery rendering all icons in a grid"},{question:"How do you draw an interconnected flowchart using a custom shape library?",shortAnswer:"Call `draw_rect_node(t, x1, y1)` and `draw_diamond_node(t, x2, y2)` and connect them with `draw_arrow()`.",explanation:"Modular shape libraries turn Turtle into an automated diagram and flowchart generator.",hint:"How do library primitives enable automated flowchart rendering?",level:"advanced",codeExample:"draw_node(t, 0, 100); draw_arrow(t, 0, 80, 0, 20); draw_node(t, 0, 0)"},{question:"Why should library functions be pure and avoid modifying caller-supplied mutable objects?",shortAnswer:"To prevent unexpected side effects and mutation bugs in consumer applications.",explanation:"Pure functions ensure predictability and thread safety.",hint:"Why should functions avoid mutating input data structures?",level:"advanced",codeExample:"# Pure functions produce predictable output without mutating inputs"},{question:"What is the ultimate 5-point quality checklist for a published Turtle shape library?",shortAnswer:"1. Zero top-level execution | 2. Consistent signatures | 3. Complete state restoration | 4. Full docstrings | 5. `__all__` export list.",explanation:"Adhering to this standard ensures production-ready, professional graphics modules.",hint:"What 5 standards define a production-grade graphics library?",level:"basic",codeExample:"# 1. no leak | 2. standard API | 3. state hygiene | 4. docs | 5. __all__"},{question:"How do you import only specific icons from a shape library module?",shortAnswer:"Use `from custom_shapes import draw_gear, draw_shield`.",explanation:"Explicit named imports clearly document dependencies and keep namespaces uncluttered.",hint:"What import syntax imports only selected functions?",level:"basic",codeExample:"from custom_shapes import draw_gear"}],u=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 3 - Building an extensible custom Shape & Icon Library\r
File: custom_shapes_icon_library.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Professional, reusable Turtle icon & shape library providing standardized\r
API methods for rendering UI vector icons:\r
- draw_gear(t, x, y, radius, teeth, color)\r
- draw_shield(t, x, y, width, height, color)\r
- draw_heart(t, x, y, size, color)\r
- draw_cloud(t, x, y, size, color)\r
- draw_sun(t, x, y, radius, rays, color)\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_gear(t, x, y, radius=40, teeth=8, fill_color="#38bdf8", border_color="white"):\r
    """Draws a mechanical gear icon centered at (x, y)."""\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
\r
    outer_r = radius\r
    inner_r = radius * 0.75\r
    angle_step = 360 / (teeth * 2)\r
\r
    for i in range(teeth * 2):\r
        r = outer_r if i % 2 == 0 else inner_r\r
        rad = math.radians(i * angle_step)\r
        t.goto(x + r * math.cos(rad), y + r * math.sin(rad))\r
    t.goto(x + outer_r, y)\r
    t.end_fill()\r
\r
    # Center bore hole\r
    t.penup(); t.goto(x, y - radius * 0.25); t.setheading(0); t.pendown()\r
    t.color("white", "#020617")\r
    t.begin_fill()\r
    t.circle(radius * 0.25)\r
    t.end_fill()\r
\r
def draw_shield(t, x, y, width=60, height=80, fill_color="#10b981", border_color="white"):\r
    """Draws a cybersecurity/security badge shield anchored at top-center (x, y)."""\r
    t.penup(); t.goto(x - width/2, y); t.setheading(0); t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    t.forward(width)\r
    t.right(90)\r
    t.forward(height * 0.5)\r
    # Tapering to shield point\r
    t.goto(x, y - height)\r
    t.goto(x - width/2, y - height * 0.5)\r
    t.goto(x - width/2, y)\r
    t.end_fill()\r
\r
def draw_heart(t, x, y, size=50, fill_color="#f43f5e"):\r
    """Draws a smooth cardiovascular heart icon anchored at bottom point (x, y)."""\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color("white", fill_color)\r
    t.begin_fill()\r
    t.left(50)\r
    t.forward(size)\r
    t.circle(size * 0.35, 200)\r
    t.right(140)\r
    t.circle(size * 0.35, 200)\r
    t.forward(size)\r
    t.end_fill()\r
\r
def draw_cloud(t, x, y, size=60, fill_color="#0ea5e9"):\r
    """Draws a fluffy cloud icon using overlapping circular arcs."""\r
    t.penup(); t.goto(x - size*0.6, y); t.setheading(0); t.pendown()\r
    t.color("white", fill_color)\r
    t.begin_fill()\r
    t.forward(size * 1.2)\r
    t.circle(size * 0.35, 180)\r
    t.circle(size * 0.45, 120)\r
    t.circle(size * 0.35, 120)\r
    t.end_fill()\r
\r
def draw_sun(t, x, y, radius=30, rays=8, fill_color="#fbbf24"):\r
    """Draws a bright sun icon with radiating rays."""\r
    # Rays\r
    ray_len = radius * 0.5\r
    for i in range(rays):\r
        angle = i * (360 / rays)\r
        rad = math.radians(angle)\r
        x1 = x + radius * math.cos(rad)\r
        y1 = y + radius * math.sin(rad)\r
        x2 = x + (radius + ray_len) * math.cos(rad)\r
        y2 = y + (radius + ray_len) * math.sin(rad)\r
        t.penup(); t.goto(x1, y1); t.pendown()\r
        t.color(fill_color); t.pensize(3)\r
        t.goto(x2, y2)\r
\r
    # Core Disc\r
    t.penup(); t.goto(x, y - radius); t.setheading(0); t.pendown()\r
    t.color("white", fill_color); t.pensize(2)\r
    t.begin_fill()\r
    t.circle(radius)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Custom Shape & Icon Library Showcase - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # Render gallery of library icons\r
    draw_gear(t, -250, 0, radius=45, teeth=8, fill_color="#38bdf8")\r
    draw_shield(t, -120, 40, width=65, height=85, fill_color="#10b981")\r
    draw_heart(t, 20, -35, size=45, fill_color="#f43f5e")\r
    draw_cloud(t, 150, 0, size=50, fill_color="#06b6d4")\r
    draw_sun(t, 260, 10, radius=25, rays=8, fill_color="#fbbf24")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,x=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 3 - Building an extensible custom Shape & Icon Library\r
File: library_client_dashboard_demo.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Client application consuming the custom shape library (\`custom_shapes_icon_library.py\`)\r
to render a modern telemetry status dashboard in Python Turtle.\r
"""\r
\r
import turtle\r
from custom_shapes_icon_library import draw_gear, draw_shield, draw_cloud, draw_heart\r
\r
def draw_metric_card(t, x, y, width, height, title, value, icon_type, icon_color):\r
    """Draws a modern telemetry card featuring a customized vector icon."""\r
    # 1. Card Background\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color("#334155", "#0f172a")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(width); t.left(90)\r
        t.forward(height); t.left(90)\r
    t.end_fill()\r
\r
    # 2. Render Icon based on type\r
    icon_center_x = x + 35\r
    icon_center_y = y + height - 40\r
    if icon_type == "gear":\r
        draw_gear(t, icon_center_x, icon_center_y, radius=20, teeth=6, fill_color=icon_color)\r
    elif icon_type == "shield":\r
        draw_shield(t, icon_center_x, icon_center_y + 15, width=32, height=40, fill_color=icon_color)\r
    elif icon_type == "cloud":\r
        draw_cloud(t, icon_center_x, icon_center_y, size=24, fill_color=icon_color)\r
    elif icon_type == "heart":\r
        draw_heart(t, icon_center_x, icon_center_y - 15, size=20, fill_color=icon_color)\r
\r
    # 3. Text Labels\r
    t.penup(); t.goto(x + 75, y + height - 35); t.pendown()\r
    t.color("#94a3b8")\r
    t.write(title, font=("Arial", 10, "normal"))\r
\r
    t.penup(); t.goto(x + 75, y + 18); t.pendown()\r
    t.color("#f8fafc")\r
    t.write(value, font=("Arial", 14, "bold"))\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Telemetry Dashboard Client - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=850, height=450)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Render 4 Dashboard Cards\r
    draw_metric_card(t, -380, -50, 175, 110, "SYSTEM HEALTH", "99.98%", "shield", "#10b981")\r
    draw_metric_card(t, -185, -50, 175, 110, "CPU UTILIZATION", "42.5%", "gear", "#38bdf8")\r
    draw_metric_card(t, 10, -50, 175, 110, "CLOUD STORAGE", "1.24 TB", "cloud", "#06b6d4")\r
    draw_metric_card(t, 205, -50, 175, 110, "USER SATISFACTION", "4.9 / 5.0", "heart", "#f43f5e")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,f=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 3 - Building an extensible custom Shape & Icon Library\r
File: themeable_badge_system.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates designing an extensible themeable Badge & Pill component\r
system for UI notification alerts using the custom shape library.\r
"""\r
\r
import turtle\r
\r
def draw_pill_badge(t, x, y, text, status="success"):\r
    """\r
    Renders a modern rounded UI pill badge with status-aware color schemes:\r
    - 'success': emerald green\r
    - 'warning': amber gold\r
    - 'danger': rose red\r
    - 'info': sky blue\r
    """\r
    theme_colors = {\r
        "success": ("#064e3b", "#34d399", "✓"),\r
        "warning": ("#78350f", "#fbbf24", "⚠"),\r
        "danger":  ("#881337", "#fb7185", "✖"),\r
        "info":    ("#0c4a6e", "#38bdf8", "ℹ")\r
    }\r
\r
    bg_col, text_col, icon_symbol = theme_colors.get(status, theme_colors["info"])\r
\r
    width, height = 150, 36\r
    radius = height / 2\r
\r
    # Draw rounded pill capsule\r
    t.penup(); t.goto(x + radius, y); t.setheading(0); t.pendown()\r
    t.color(text_col, bg_col)\r
    t.begin_fill()\r
    t.forward(width - 2 * radius)\r
    t.circle(radius, 180)\r
    t.forward(width - 2 * radius)\r
    t.circle(radius, 180)\r
    t.end_fill()\r
\r
    # Draw text and icon inside badge\r
    t.penup(); t.goto(x + 18, y + 9); t.pendown()\r
    t.color(text_col)\r
    t.write(f"{icon_symbol}  {text.upper()}", font=("Arial", 9, "bold"))\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Themeable Status Badges - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Render Badges\r
    draw_pill_badge(t, -260, 40, "Verified Pass", status="success")\r
    draw_pill_badge(t, -80, 40, "Disk Space Low", status="warning")\r
    draw_pill_badge(t, 100, 40, "Auth Failure", status="danger")\r
    draw_pill_badge(t, -80, -40, "Update Ready", status="info")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,g=`================================================================================\r
  TOPIC 3: BUILDING AN EXTENSIBLE CUSTOM SHAPE & ICON LIBRARY\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A GRAPHICS LIBRARY MODULE?\r
--------------------------------------------------------------------------------\r
A Python graphics library module (e.g. \`icons.py\` or \`custom_shapes.py\`) is a\r
dedicated \`.py\` file containing standardized, reusable drawing functions that can\r
be imported across multiple separate game, visualization, or UI applications:\r
\`from icons import draw_gear, draw_shield, draw_heart\`\r
\r
2. PRINCIPLES OF PROFESSIONAL LIBRARY DESIGN\r
--------------------------------------------------------------------------------\r
1. Standardized Function Signatures:\r
   Always follow \`(t, x, y, size/radius, fill_color, border_color, ...)\`.\r
\r
2. Zero Top-Level Execution:\r
   Protect interactive showcase code inside \`if __name__ == '__main__':\`.\r
   When the file is imported by a client, it should define functions silently\r
   without opening a Turtle window.\r
\r
3. Clear Docstrings:\r
   Every function should document coordinate anchors, default values, and visual features.\r
\r
4. Component Decoupling:\r
   Functions should only draw geometry—they should never assume screen size or call\r
   \`turtle.done()\` or \`screen.update()\`.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,y=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spinGear {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`,S=()=>{const[a,o]=i.useState("gallery"),[n,l]=i.useState("gear"),d=[{name:"draw_gear(t, x, y, radius, teeth, fill_color)",returnType:"Library Primitive",purpose:"Renders mechanical cog/gear icon with center bore hole using radial vertex alternation.",usage:"draw_gear(t, -100, 0, radius=40, teeth=8)"},{name:"draw_shield(t, x, y, width, height, fill_color)",returnType:"Library Primitive",purpose:"Renders cybersecurity verification shield badge anchored at top-center (x, y).",usage:"draw_shield(t, 0, 50, width=60, height=80)"},{name:"draw_heart(t, x, y, size, fill_color)",returnType:"Library Primitive",purpose:"Renders cardiovascular heart icon combining 50° tangent vectors and twin 200° arcs.",usage:"draw_heart(t, 100, -20, size=45)"},{name:"draw_pill_badge(t, x, y, text, status)",returnType:"Themeable Component",purpose:"Renders rounded pill status badge with status-aware color themes (success, danger, info).",usage:"draw_pill_badge(t, 0, 0, 'Verified', status='success')"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 3"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Building an Extensible Shape & Icon Library"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Package vector primitives into a production-grade Python module. Build reusable ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Gears"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"Shields"}),", ",e.jsx("span",{className:"text-rose-300 font-semibold",children:"Hearts"}),", and themeable ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"UI Badges"})," for client dashboards."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📦 Standalone Module Architecture"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🛡️ Standardized Vector UI Icons"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📊 Live Telemetry Client App"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Icon Library Studio & Dashboard Client"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch between the Library Sprite Gallery and the assembled Live Telemetry Dashboard client."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>o("gallery"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="gallery"?"bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"📦 Shape Library Gallery"}),e.jsx("button",{onClick:()=>o("dashboard"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="dashboard"?"bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"📊 Telemetry Dashboard Client"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:a==="gallery"?"Library Icon Showcase View":"Client Dashboard Telemetry View"}),a==="gallery"?e.jsxs("svg",{viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsxs("g",{transform:"translate(35, 45)",children:[e.jsx("circle",{cx:"25",cy:"25",r:"22",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"2"}),e.jsx("circle",{cx:"25",cy:"25",r:"7",fill:"#020617",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("text",{x:"25",y:"60",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"draw_gear"})]}),e.jsxs("g",{transform:"translate(135, 30)",children:[e.jsx("polygon",{points:"25,5 50,5 50,30 25,50 0,30 0,5",fill:"#10b981",stroke:"#ffffff",strokeWidth:"2"}),e.jsx("path",{d:"M 18,25 L 23,32 L 34,18",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("text",{x:"25",y:"75",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"draw_shield"})]}),e.jsxs("g",{transform:"translate(235, 35)",children:[e.jsx("path",{d:"M 25,42 L 5,20 A 10,10 0 0,1 25,8 A 10,10 0 0,1 45,20 Z",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"2"}),e.jsx("text",{x:"25",y:"70",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"draw_heart"})]}),e.jsxs("g",{transform:"translate(75, 125)",children:[e.jsx("path",{d:"M 10,35 L 50,35 A 12,12 0 0,0 50,15 A 16,16 0 0,0 22,12 A 12,12 0 0,0 10,35 Z",fill:"#06b6d4",stroke:"#ffffff",strokeWidth:"2"}),e.jsx("text",{x:"30",y:"55",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"draw_cloud"})]}),e.jsxs("g",{transform:"translate(195, 125)",children:[e.jsx("circle",{cx:"30",cy:"25",r:"14",fill:"#fbbf24",stroke:"#ffffff",strokeWidth:"2"}),[0,45,90,135,180,225,270,315].map(r=>{const t=r*Math.PI/180;return e.jsx("line",{x1:30+17*Math.cos(t),y1:25+17*Math.sin(t),x2:30+24*Math.cos(t),y2:25+24*Math.sin(t),stroke:"#fbbf24",strokeWidth:"2",strokeLinecap:"round"},r)}),e.jsx("text",{x:"30",y:"55",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"draw_sun"})]})]}):e.jsxs("svg",{viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg p-2",children:[e.jsxs("g",{transform:"translate(10, 15)",children:[e.jsx("rect",{x:"0",y:"0",width:"140",height:"75",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("polygon",{points:"20,15 35,15 35,30 20,40 5,30 5,15",fill:"#10b981",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"24",fill:"#94a3b8",fontSize:"8",fontFamily:"sans-serif",children:"SYSTEM HEALTH"}),e.jsx("text",{x:"45",y:"45",fill:"#34d399",fontSize:"13",fontWeight:"bold",fontFamily:"monospace",children:"99.98%"})]}),e.jsxs("g",{transform:"translate(165, 15)",children:[e.jsx("rect",{x:"0",y:"0",width:"140",height:"75",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("circle",{cx:"20",cy:"27",r:"14",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("circle",{cx:"20",cy:"27",r:"5",fill:"#0f172a"}),e.jsx("text",{x:"45",y:"24",fill:"#94a3b8",fontSize:"8",fontFamily:"sans-serif",children:"CPU LOAD"}),e.jsx("text",{x:"45",y:"45",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",fontFamily:"monospace",children:"42.5%"})]}),e.jsxs("g",{transform:"translate(10, 105)",children:[e.jsx("rect",{x:"0",y:"0",width:"140",height:"75",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("path",{d:"M 10,35 L 32,35 A 7,7 0 0,0 32,23 A 10,10 0 0,0 16,20 A 7,7 0 0,0 10,35 Z",fill:"#06b6d4",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"24",fill:"#94a3b8",fontSize:"8",fontFamily:"sans-serif",children:"STORAGE"}),e.jsx("text",{x:"45",y:"45",fill:"#06b6d4",fontSize:"13",fontWeight:"bold",fontFamily:"monospace",children:"1.24 TB"})]}),e.jsxs("g",{transform:"translate(165, 105)",children:[e.jsx("rect",{x:"0",y:"0",width:"140",height:"75",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("path",{d:"M 20,38 L 8,24 A 6,6 0 0,1 20,17 A 6,6 0 0,1 32,24 Z",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("text",{x:"45",y:"24",fill:"#94a3b8",fontSize:"8",fontFamily:"sans-serif",children:"UPTIME SCORE"}),e.jsx("text",{x:"45",y:"45",fill:"#fb7185",fontSize:"13",fontWeight:"bold",fontFamily:"monospace",children:"4.9 / 5.0"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Library API Specification"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300",children:"from shapes import *"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-slate-400 text-[11px]",children:"Inspect Library Primitive:"}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:["gear","shield","heart","cloud","sun"].map(r=>e.jsx("button",{onClick:()=>l(r),className:`px-3 py-1 rounded-md capitalize text-xs font-mono transition cursor-pointer ${n===r?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:r},r))})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Clean Import & Usage Pattern"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`from custom_shapes_icon_library import draw_${n}

# Draw modular vector icon in client app:
draw_${n}(t, x=0, y=0)`})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 leading-relaxed",children:["💡 ",e.jsx("strong",{children:"Architectural Tip:"})," Library modules never invoke ",e.jsx("code",{className:"text-amber-300 font-mono",children:"turtle.done()"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:"screen.setup()"})," at the top level. They define clean mathematical drawing functions and protect demo code under ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if __name__ == '__main__':"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Shape Library API Standard"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Library Function"}),e.jsx("th",{className:"py-3 px-4",children:"Category"}),e.jsx("th",{className:"py-3 px-4",children:"Geometric Anchor & Math"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:d.map((r,t)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:r.usage})]},t))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:u,title:"custom_shapes_icon_library.py",highlightLines:[18,19,39,40,52,53,65,75,95]}),e.jsx(s,{fileModule:x,title:"library_client_dashboard_demo.py",highlightLines:[11,14,25,27,29,31,51,52,53,54]}),e.jsx(s,{fileModule:f,title:"themeable_badge_system.py",highlightLines:[12,19,20,21,22,33,35,49,50,51]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Kolkata Fintech Dashboard"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima in Kolkata was tasked with building a real-time server health monitor. Instead of rewriting shapes inside each card widget, she built a standalone ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"custom_shapes_icon_library.py"}),". By importing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"draw_shield"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"draw_gear"}),", she assembled a 4-card enterprise dashboard in under 30 minutes!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-purple-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎮"})," Barrackpore Game UI: HUD Badges"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita developed an RPG game heads-up display (HUD). Using the themeable badge system with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"draw_pill_badge()"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"draw_heart()"}),", she dynamically updated player health, armor levels, and inventory alerts with seamless color-coded state transitions."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Library Design Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Omitting `__name__ == '__main__'`"}),e.jsx("p",{className:"text-slate-400",children:"Placing test drawings at the root level of a library module causes an empty turtle window to pop up every time a consumer imports the file."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Inconsistent Anchor Conventions"}),e.jsxs("p",{className:"text-slate-400",children:["If ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"draw_gear"})," anchors at center while ",e.jsx("code",{className:"text-rose-300 font-mono",children:"draw_shield"})," anchors at bottom-left without clear documentation, client layouts will misalign horribly."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Calling turtle.done() in Libraries"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"turtle.done()"})," inside a helper blocks the caller from rendering subsequent elements. Keep ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"turtle.done()"})," exclusively in the client entry point."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Hardcoding Colors Inside Primitives"}),e.jsxs("p",{className:"text-slate-400",children:["Failing to accept ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"fill_color"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"border_color"})," parameters prevents consumers from adapting icons to custom light or dark themes."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to structure a reusable Python graphics library module (`shapes.py`)","I protect interactive demonstration code using `if __name__ == '__main__':`","I maintain consistent parameter signatures across all library icon functions","I understand how theme dictionaries map UI statuses (success/warning/danger) to palettes","I can construct gears, shields, hearts, and clouds using mathematical vector primitives","I keep `turtle.done()` and `screen.setup()` strictly in client application files"].map((r,t)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How open-source icon libraries like FontAwesome, Lucide, and Material Icons distribute thousands of standardized vector icons across the web!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How the telemetry dashboard seamlessly incorporates gears, shields, clouds, and hearts into unified metric cards!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add a new ",e.jsx("code",{className:"text-amber-300 font-mono",children:"draw_battery(t, x, y, percentage)"})," icon function to your library and render it on a dashboard card!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Great software engineers do not write one-off code; they create tools, packages, and libraries that empower other developers. Building an extensible vector icon library teaches you API design, interface stability, documentation standards, and the software engineering principles that power modern open-source ecosystems."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(h,{title:"Custom Shape & Icon Library FAQs",questions:m})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(p,{content:g,title:"Topic 3: Shape Library Design Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(c,{note:"Packaging your drawing functions into an importable module like `custom_shapes_icon_library.py` is the transition from student scriptwriter to software library author. When our students in Kolkata and Barrackpore import their own custom libraries into their game and dashboard projects, they experience firsthand the joy of clean, professional modular architecture!"})})]})]})};export{S as default};

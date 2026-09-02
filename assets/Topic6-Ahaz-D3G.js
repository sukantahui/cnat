import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as d}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const h=[{question:"What is the Painter's Algorithm in 2D computer graphics?",shortAnswer:"A rendering technique where background elements are drawn first, and foreground elements are painted on top.",explanation:"Like an oil painter laying down the distant sky before painting trees in front, later draw commands overwrite earlier ones.",hint:"How does the sequence of drawing determine what appears on top?",level:"basic",codeExample:"# 1. Draw sky → 2. Draw mountains → 3. Draw house"},{question:"What happens if you draw a window before drawing the house wall?",shortAnswer:"The house wall fill will completely cover and hide the window.",explanation:"Because Turtle follows sequential z-indexing, drawing the wall second paints over the window pixels.",hint:"Which shape gets drawn on top: the earlier or the later one?",level:"basic",codeExample:"# BUG: Wall drawn over window hides it completely!"},{question:"How do you decompose a complex illustration into modular Python functions?",shortAnswer:"Create dedicated helper functions for distinct elements like `draw_mountain()`, `draw_tree()`, and `draw_cottage()`.",explanation:"Modular decomposition makes code clean, reusable, and easy to debug.",hint:"How does functional decomposition apply to vector art?",level:"moderate",codeExample:`def draw_tree(t, x, y):
    # draw trunk & foliage
    pass`},{question:"How do you render the 24 radial spokes of the Ashoka Chakra evenly in Python?",shortAnswer:"Loop 24 times with `t.forward(radius); t.backward(radius); t.left(360 / 24)`.",explanation:"360 / 24 = 15-degree turns per spoke evenly subdivide the circle.",hint:"What angle separates each of the 24 spokes in a circle?",level:"moderate",codeExample:`for _ in range(24):
    t.forward(35); t.backward(35); t.left(15)`},{question:"How do you draw an arbitrary polygon from a list of (x, y) vertex tuples?",shortAnswer:"Iterate through the tuple list with `t.goto(x, y)` inside a `begin_fill()` / `end_fill()` block.",explanation:"This allows rendering custom vector shapes from mathematical coordinate models.",hint:"How do you traverse a coordinate array?",level:"moderate",codeExample:`t.begin_fill()
for vx, vy in vertices: t.goto(vx, vy)
t.end_fill()`},{question:"What is the recommended approach for creating complex gradients in Turtle?",shortAnswer:"Stack multiple concentric or horizontal polygons with incrementally shifted RGB values.",explanation:"Layering closely spaced thin slices with varying colors simulates linear or radial gradients.",hint:"How do you simulate smooth gradients using solid filled bands?",level:"advanced",codeExample:"# Multi-stripe gradient simulation"},{question:"Why should `screen.tracer(0)` be used for composite scenes with 10+ filled layers?",shortAnswer:"To prevent visual stutter and render all composite layers simultaneously in a single frame update.",explanation:"tracer(0) buffers all component rendering in memory and presents the completed scene instantly.",hint:"How do you eliminate rendering delays across complex multi-part art?",level:"basic",codeExample:`screen.tracer(0)
render_all_layers()
screen.update()`},{question:"How do you center an object of width W at horizontal position X?",shortAnswer:"Position the turtle starting corner at `X - (W / 2)`.",explanation:"Offsetting by half the width ensures the shape is symmetrically balanced around the target center.",hint:"How do you calculate the starting corner from a center anchor?",level:"moderate",codeExample:"start_x = target_center_x - (width / 2)"},{question:"What is the purpose of pen state restoration in modular drawing components?",shortAnswer:"To ensure a helper function leaves the turtle in a clean, predictable state for the next component.",explanation:"Lifting the pen and resetting colors at function exit prevents side effects in subsequent drawing calls.",hint:"Why should functions clean up their pen state before returning?",level:"moderate",codeExample:"# Reset penup() at the end of draw_component()"},{question:"How do you draw a pine tree using stacked green triangles and a brown trunk?",shortAnswer:"Draw a brown rectangular trunk at the base, then stack 3 overlapping green filled triangles of decreasing sizes on top.",explanation:"Layering 3 triangles (large base, medium center, small tip) creates classic stylized pine trees.",hint:"What geometric primitive creates stylized foliage layers?",level:"moderate",codeExample:"# Stack 3 green triangles with vertical offsets"},{question:"How do you create a glowing neon sign effect in composite graphics?",shortAnswer:"Draw thick dark-colored base strokes first, followed by thinner, brighter colored strokes directly on top.",explanation:"This mimics optical light bloom by layering wide soft borders under sharp intense highlights.",hint:"How does layering stroke widths create a bloom/glow illusion?",level:"advanced",codeExample:"# Layer 1: pensize(10) dark pink → Layer 2: pensize(2) bright white"},{question:"What is the coordinate anchor of `turtle.circle(radius)`?",shortAnswer:"The bottom point of the circle (the center is at `(x, y + radius)`).",explanation:"Turtle draws circles tangentially to the left of its current heading, placing the center radius units to the left.",hint:"Where is the center of a circle relative to the turtle's starting point?",level:"moderate",codeExample:"# To center a circle at (0,0), move turtle to (0, -radius)"},{question:"How do you place a circular Ashoka Chakra precisely at center (cx, cy)?",shortAnswer:"Move to `(cx, cy - radius)` to draw the outer ring, then move to `(cx, cy)` to draw the spokes.",explanation:"Accounting for tangential circle drawing ensures concentric alignment with the radial spokes.",hint:"How do you align the circular rim with the center of the spokes?",level:"moderate",codeExample:"t.goto(cx, cy - r); t.circle(r); t.goto(cx, cy)"},{question:"How do you draw a multi-story skyscraper with lighted windows in Turtle?",shortAnswer:"Draw a tall dark rectangle for the building facade, then use nested 2D loops to stamp small yellow window rectangles across floors.",explanation:"Nested loops over floor levels (Y) and column positions (X) generate architectural window grids.",hint:"What programming construct creates a regular grid of windows?",level:"advanced",codeExample:`for floor_y in range(-100, 150, 30):
    for col_x in range(-40, 40, 20):
        # draw window`},{question:"Can multiple Turtle instances be used to draw different layers in parallel?",shortAnswer:"Yes, you can instantiate separate turtles (e.g. `bg_artist`, `fg_artist`, `ui_artist`).",explanation:"Multiple named turtles help organize code into distinct architectural responsibilities.",hint:"Can you assign specific turtles to specific visual layers?",level:"moderate",codeExample:"bg_t = turtle.Turtle(); fg_t = turtle.Turtle()"},{question:"How do you create a drop-shadow effect behind a composite card or box?",shortAnswer:"Draw a semi-offset dark rectangle at `(x + 5, y - 5)` before drawing the main card at `(x, y)`.",explanation:"Underlying offset dark shapes create realistic 2.5D elevation and depth.",hint:"Where do you position a shadow relative to the primary shape?",level:"moderate",codeExample:"# Shadow at (x+5, y-5) in '#0f172a' → Main card at (x, y) in '#38bdf8'"},{question:"How do you draw cloud puffs in a sky landscape?",shortAnswer:"Draw 3 to 5 overlapping white filled circles of varying radii clustered along a horizontal line.",explanation:"Overlapping circular disks merge visually into a fluffy cloud silhouette.",hint:"What geometric shapes cluster together to form cloud silhouettes?",level:"basic",codeExample:"# Cluster of 4 overlapping circles"},{question:"What is the best way to handle color palettes across large composite projects?",shortAnswer:"Define a centralized dictionary or namespace of color hex tokens at the top of the module.",explanation:"Centralized color palettes ensure visual harmony and allow quick theme rebranding.",hint:"Where should design tokens and color constants be declared?",level:"moderate",codeExample:"PALETTE = {'sky': '#020617', 'mountain': '#1e293b', 'accent': '#38bdf8'}"},{question:"How do you draw a symmetrical robot face with identical left and right ears?",shortAnswer:"Mirror coordinate offsets: draw left ear at `(-offset_x, y)` and right ear at `(+offset_x, y)`.",explanation:"Reflecting X coordinates across the Y-axis produces perfect bilateral symmetry.",hint:"How does changing the sign of X reflect geometry across the center axis?",level:"moderate",codeExample:"# Left: (-80, 50) | Right: (+80, 50)"},{question:"Why should background mountain silhouettes be darker than foreground elements in night scenes?",shortAnswer:"Atmospheric perspective in dark mode places low-contrast dark silhouettes in the distance and bright vibrant elements in the foreground.",explanation:"Controlling tonal contrast creates depth perception in 2D illustrations.",hint:"How does contrast affect perceived visual distance?",level:"advanced",codeExample:"# Distant: #0f172a → Foreground: #38bdf8"},{question:"How do you stamp repeating ground texture dots without slowing down execution?",shortAnswer:"Set `screen.tracer(0)` and use `t.dot()` in a random distribution loop.",explanation:"Stamping dots with tracer disabled generates thousands of texture particles in milliseconds.",hint:"What method places rapid texture points on canvas?",level:"moderate",codeExample:`screen.tracer(0)
for _ in range(300): t.goto(rx, ry); t.dot(3)`},{question:"How do you clip an illustration within a decorative outer border?",shortAnswer:"Draw the outer border frame as the final topmost layer, covering any slight edge imperfections.",explanation:"Applying a crisp foreground bezel cleans up geometric boundary overflows.",hint:"Which layer acts as a picture frame over your artwork?",level:"moderate",codeExample:"# Draw outer bezel frame as the final step"},{question:"What is procedural vector generation in Python?",shortAnswer:"Generating visual art programmatically using algorithms, loops, and mathematical equations rather than manual asset files.",explanation:"Procedural graphics scale infinitely without pixelation and can generate unique variations on every run.",hint:"What is computer art generated through pure code called?",level:"advanced",codeExample:"# Algorithmic art generation"},{question:"How do you draw a sun with radiating triangular rays?",shortAnswer:"Draw a central filled circle, then loop around 360 degrees drawing small filled triangles extending outward.",explanation:"Combining a central disk with rotational triangular spikes produces stylized sunburst icons.",hint:"How do you attach radiating spikes around a central circular hub?",level:"moderate",codeExample:"# Central circle + rotational ray loop"},{question:"How do you organize a large multi-component Turtle program for maintainability?",shortAnswer:"Structure code into: 1. Setup & Config, 2. Helper drawing functions, 3. Layer orchestration, 4. Main execution entry point.",explanation:"Clean architectural separation prevents tangled spaghetti code in complex graphical projects.",hint:"What 4 phases structure clean Python applications?",level:"moderate",codeExample:"# Config → Helpers → Compose Scene → main()"},{question:"What happens if you use `t.dot(size)` while inside a `begin_fill()` block?",shortAnswer:"The dot is stamped immediately on the canvas, while the surrounding polygon vertices continue recording into the fill buffer.",explanation:"Stamping operations are instantaneous canvas overlays and do not corrupt vertex path buffers.",hint:"Does stamping a dot break active fill buffer recording?",level:"advanced",codeExample:"t.begin_fill(); t.forward(50); t.dot(10); t.forward(50); t.end_fill()"},{question:"How do you draw a smooth river winding through a landscape?",shortAnswer:"Define the river banks using two bezier-like coordinate paths and fill the enclosed water polygon with cyan/blue.",explanation:"Connecting top and bottom winding bank coordinates produces natural flowing river geometry.",hint:"How do you create organic curved waterway polygons?",level:"expert",codeExample:"# River bank coordinate polygon"},{question:"Can composite artwork be scaled to different sizes using a scaling factor variable `scale`?",shortAnswer:"Yes, by multiplying all coordinate and dimension offsets by `scale`.",explanation:"Parameterized scale factors enable responsive vector resizing across mobile, desktop, and print.",hint:"How do you make an entire vector drawing scale dynamically?",level:"moderate",codeExample:`def draw_house(x, y, scale=1.0):
    width = 100 * scale`},{question:"How do you draw a speech bubble with an arrow pointer pointing to a character?",shortAnswer:"Draw a rounded rectangle or ellipse, connect a triangular pointer at the bottom, and fill both with white/cream.",explanation:"Combining a message box with a directional triangle creates cartoon dialogue balloons.",hint:"What geometric parts make up a comic book speech bubble?",level:"moderate",codeExample:"# Balloon box + directional pointer triangle"},{question:"What is the summary rule for mastering composite vector graphics in Python Turtle?",shortAnswer:"Decompose illustrations into simple geometric primitives, order rendering from background to foreground (Painter's Algorithm), use parameterized helper functions, and render instantly with `tracer(0)`.",explanation:"This complete methodology allows developers to build museum-grade procedural vector illustrations and games.",hint:"What 4 principles govern professional vector graphics composition?",level:"basic",codeExample:"# 1. Decompose | 2. Layer (Painter's Alg) | 3. Modular DRY helpers | 4. tracer(0)"}],u=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 6 - Combining geometric fills to compose complex graphics\r
File: complex_landscape_composition.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates layered multi-component vector illustration in Python Turtle:\r
- Sky backdrop with starry night dots\r
- Glowing crescent moon with layered background cutout\r
- Distant mountain silhouettes (Background Layer)\r
- Rolling green hills (Midground Layer)\r
- Traditional cottage with triangular roof and illuminated door (Foreground)\r
"""\r
\r
import turtle\r
\r
def draw_polygon_filled(t, vertices, stroke_color, fill_color, stroke_width=2):\r
    """Helper function to draw and fill an arbitrary polygon."""\r
    if not vertices:\r
        return\r
    t.penup()\r
    t.goto(vertices[0])\r
    t.pendown()\r
    t.color(stroke_color, fill_color)\r
    t.pensize(stroke_width)\r
    t.begin_fill()\r
    for vx, vy in vertices[1:]:\r
        t.goto(vx, vy)\r
    t.goto(vertices[0])\r
    t.end_fill()\r
\r
def render_layered_landscape():\r
    screen = turtle.Screen()\r
    screen.title("Layered Landscape Composition - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # 1. Background Layer: Distant Mountains (Dark Navy)\r
    mountain_vertices = [\r
        (-400, -50), (-250, 160), (-120, 20), (0, 180),\r
        (150, 40), (280, 150), (400, -50), (400, -300), (-400, -300)\r
    ]\r
    draw_polygon_filled(t, mountain_vertices, "#1e293b", "#0f172a")\r
\r
    # 2. Midground Layer: Rolling Green Foothills (Emerald Gradient)\r
    hill_vertices = [\r
        (-400, -120), (-200, -40), (0, -100), (200, -30), (400, -120),\r
        (400, -300), (-400, -300)\r
    ]\r
    draw_polygon_filled(t, hill_vertices, "#065f46", "#047857")\r
\r
    # 3. Foreground: Cottage Base (Warm Slate)\r
    cottage_base = [(-60, -220), (60, -220), (60, -130), (-60, -130)]\r
    draw_polygon_filled(t, cottage_base, "#0369a1", "#0284c7")\r
\r
    # 4. Foreground: Cottage Roof (Rose Red)\r
    roof_vertices = [(-75, -130), (0, -70), (75, -130)]\r
    draw_polygon_filled(t, roof_vertices, "#f43f5e", "#be123c")\r
\r
    # 5. Illuminated Golden Window\r
    window_vertices = [(-20, -180), (20, -180), (20, -145), (-20, -145)]\r
    draw_polygon_filled(t, window_vertices, "#fbbf24", "#fde047")\r
\r
    # Flush all layers to canvas\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    render_layered_landscape()\r
`,g=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 6 - Combining geometric fills to compose complex graphics\r
File: layered_character_and_robot_avatar.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates combining basic geometric primitives (circles, rounded boxes,\r
triangles) to construct a retro vector robot avatar character.\r
"""\r
\r
import turtle\r
\r
def draw_robot_avatar():\r
    screen = turtle.Screen()\r
    screen.title("Vector Robot Avatar - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.setup(width=700, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(3)\r
\r
    # 1. Antenna Pole & Glowing Signal Orb\r
    t.penup(); t.goto(0, 110); t.pendown()\r
    t.color("#94a3b8")\r
    t.goto(0, 160)\r
    t.dot(18, "#f43f5e")  # Red indicator light\r
\r
    # 2. Robot Head Box (Slate Blue)\r
    t.penup(); t.goto(-70, 0); t.pendown()\r
    t.color("#38bdf8", "#0284c7")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(140)\r
        t.left(90)\r
        t.forward(110)\r
        t.left(90)\r
    t.end_fill()\r
\r
    # 3. Visor / Eye Display (Dark Charcoal)\r
    t.penup(); t.goto(-50, 45); t.pendown()\r
    t.color("#020617", "#0f172a")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(100)\r
        t.left(90)\r
        t.forward(45)\r
        t.left(90)\r
    t.end_fill()\r
\r
    # 4. Glowing Cyan Eyes\r
    t.penup(); t.goto(-25, 67); t.pendown()\r
    t.dot(14, "#38bdf8")\r
    t.penup(); t.goto(25, 67); t.pendown()\r
    t.dot(14, "#38bdf8")\r
\r
    # 5. Speaker Grille Mouth\r
    t.penup(); t.goto(-35, 20); t.pendown()\r
    t.color("#38bdf8")\r
    for _ in range(4):\r
        t.forward(12)\r
        t.penup(); t.forward(6); t.pendown()\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_robot_avatar()\r
`,m=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 6 - Combining geometric fills to compose complex graphics\r
File: ashoka_chakra_tiranga_flag.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Renders the Indian National Flag (Tiranga) with exact geometric proportions,\r
3 filled color bands (Saffron, White, Green), and the 24-spoke Ashoka Chakra.\r
"""\r
\r
import turtle\r
\r
def draw_stripe(t, x, y, width, height, stroke_color, fill_color):\r
    t.penup()\r
    t.goto(x, y)\r
    t.pendown()\r
    t.color(stroke_color, fill_color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(width)\r
        t.right(90)\r
        t.forward(height)\r
        t.right(90)\r
    t.end_fill()\r
\r
def draw_ashoka_chakra(t, center_x, center_y, radius):\r
    # Outer navy circle ring\r
    t.penup(); t.goto(center_x, center_y - radius); t.pendown()\r
    t.color("#000080")\r
    t.pensize(2)\r
    t.circle(radius)\r
\r
    # 24 radial spokes\r
    t.penup(); t.goto(center_x, center_y); t.pendown()\r
    t.pensize(1)\r
    for _ in range(24):\r
        t.forward(radius)\r
        t.backward(radius)\r
        t.left(360 / 24)\r
\r
def render_tiranga_flag():\r
    screen = turtle.Screen()\r
    screen.title("Indian National Flag (Tiranga) - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.setup(width=750, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    flag_w, stripe_h = 360, 80\r
    start_x, start_y = -180, 120\r
\r
    # 1. Top Stripe: India Saffron (#FF9933)\r
    draw_stripe(t, start_x, start_y, flag_w, stripe_h, "#ff9933", "#ff9933")\r
\r
    # 2. Middle Stripe: White (#FFFFFF)\r
    draw_stripe(t, start_x, start_y - stripe_h, flag_w, stripe_h, "#ffffff", "#ffffff")\r
\r
    # 3. Bottom Stripe: India Green (#138808)\r
    draw_stripe(t, start_x, start_y - (2 * stripe_h), flag_w, stripe_h, "#138808", "#138808")\r
\r
    # 4. Center Ashoka Chakra (Radius = 35px in middle of white band)\r
    draw_ashoka_chakra(t, 0, start_y - (1.5 * stripe_h), radius=35)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    render_tiranga_flag()\r
`,x=`================================================================================\r
  TOPIC 6: COMBINING GEOMETRIC FILLS TO COMPOSE COMPLEX GRAPHICS\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS COMPOSITE VECTOR GRAPHICS?\r
--------------------------------------------------------------------------------\r
In computer graphics, complex real-world scenes (landscapes, characters, flags,\r
posters) are not drawn as a single monolithic path. Instead, they are composed\r
by layering simple geometric primitives:\r
- Rectangles & Polygons: Walls, hills, building bodies, banners.\r
- Circles & Arcs: Moons, suns, wheels, character eyes, rounded corners.\r
- Linear Spokes & Lines: Window panes, antennas, rays, spokes.\r
\r
2. THE PAINTER'S ALGORITHM (Z-INDEX LAYERING)\r
--------------------------------------------------------------------------------\r
Python Turtle operates on the Painter's Algorithm:\r
Objects drawn earlier in the code appear in the BACKGROUND, while objects\r
drawn later in the code appear on top in the FOREGROUND.\r
\r
Layering Protocol for Clean Artwork:\r
1. Layer 1 (Backdrop): Sky, stars, canvas fill (\`screen.bgcolor\`).\r
2. Layer 2 (Background): Distant mountains, horizon lines, clouds.\r
3. Layer 3 (Midground): Foothills, roads, buildings, trees.\r
4. Layer 4 (Foreground): Character avatars, door/window details, logos.\r
5. Layer 5 (Overlay UI): Text labels, scores, title borders.\r
\r
3. REUSABLE MODULAR HELPER FUNCTIONS\r
--------------------------------------------------------------------------------\r
Always write parameterized helper functions:\r
- \`draw_rectangle(t, x, y, width, height, stroke, fill)\`\r
- \`draw_polygon(t, vertices_list, stroke, fill)\`\r
- \`draw_circle_centered(t, cx, cy, radius, stroke, fill)\`\r
\r
This keeps code DRY (Don't Repeat Yourself), highly maintainable, and readable.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,f=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes layerGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.7)); }
}
`,A=()=>{const[t,o]=l.useState({mountains:!0,hills:!0,cottage:!0,stars:!0}),s=r=>{o(a=>({...a,[r]:!a[r]}))},i=[{name:"draw_polygon_filled(t, vertices, stroke, fill)",returnType:"None (Custom Helper)",purpose:"Traverses an arbitrary vertex tuple list inside a begin_fill() / end_fill() block.",usage:"draw_polygon_filled(t, mountain_points, '#1e293b', '#0f172a')"},{name:"draw_stripe(t, x, y, w, h, stroke, fill)",returnType:"None (Custom Helper)",purpose:"Renders a parameterized rectangular color band with exact geometric coordinates.",usage:"draw_stripe(t, -180, 120, 360, 80, '#ff9933', '#ff9933')"},{name:"draw_ashoka_chakra(t, cx, cy, r)",returnType:"None (Custom Helper)",purpose:"Renders concentric navy circle rim and 24 evenly spaced 15-degree radial spokes.",usage:"draw_ashoka_chakra(t, 0, 0, radius=35)"},{name:"The Painter's Algorithm Layering",returnType:"Z-Index Hierarchy",purpose:"Background layers rendered first; foreground layers painted sequentially on top.",usage:"Sky → Mountains → Hills → Cottage → UI Header"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 6"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent",children:"Combining Geometric Fills for Complex Vector Art"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"The grand synthesis of Module 2. Learn the Painter's Algorithm for z-index layering, compose multi-tier landscapes and character avatars, and engineer precision geometric flags."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏔️ Painter's Algorithm & Z-Index"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🤖 Modular Vector Avatars"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🇮🇳 Tiranga & 24-Spoke Chakra"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Z-Index Layer Isolation Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle individual visual layers on and off to observe how the Painter's Algorithm assembles the complete illustration."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:[{key:"stars",label:"✨ Stars",color:"bg-amber-500 text-slate-950"},{key:"mountains",label:"🏔️ Mountains",color:"bg-indigo-500 text-white"},{key:"hills",label:"🌱 Hills",color:"bg-emerald-500 text-white"},{key:"cottage",label:"🏠 Cottage",color:"bg-sky-500 text-white"}].map(r=>e.jsxs("button",{onClick:()=>s(r.key),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t[r.key]?r.color:"bg-gray-800 text-slate-500 border border-slate-700 hover:bg-gray-700"}`,children:[r.label," ",t[r.key]?"(ON)":"(OFF)"]},r.key))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"220",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),t.stars&&e.jsxs("g",{fill:"#fef08a",children:[e.jsx("circle",{cx:"80",cy:"40",r:"2"}),e.jsx("circle",{cx:"160",cy:"70",r:"1.5"}),e.jsx("circle",{cx:"260",cy:"35",r:"2.5"}),e.jsx("circle",{cx:"380",cy:"55",r:"2"}),e.jsx("circle",{cx:"480",cy:"40",r:"1.5"}),e.jsx("circle",{cx:"590",cy:"65",r:"2"}),e.jsx("circle",{cx:"630",cy:"30",r:"3",fill:"#fde047"})]}),t.mountains&&e.jsx("polygon",{points:"10,180 120,70 230,140 350,50 480,130 590,60 690,180 690,230 10,230",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),t.hills&&e.jsx("path",{d:"M 10 170 Q 180 110, 360 160 T 690 140 L 690 230 L 10 230 Z",fill:"#065f46",stroke:"#047857",strokeWidth:"2"}),t.cottage&&e.jsxs("g",{transform:"translate(350, 160)",children:[e.jsx("rect",{x:"-45",y:"0",width:"90",height:"55",fill:"#0284c7",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("polygon",{points:"-55,0 0,-40 55,0",fill:"#be123c",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("rect",{x:"-15",y:"15",width:"30",height:"25",fill:"#fde047",stroke:"#fbbf24",strokeWidth:"1.5"}),e.jsx("line",{x1:"0",y1:"15",x2:"0",y2:"40",stroke:"#b45309",strokeWidth:"1"}),e.jsx("line",{x1:"-15",y1:"27",x2:"15",y2:"27",stroke:"#b45309",strokeWidth:"1"})]})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-purple-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Composite Vector Architecture Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Design Pattern / Helper"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Architectural Purpose"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:i.map((r,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-purple-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 text-xs",children:r.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Masterpiece Composite Illustration Code Files"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:u,title:"complex_landscape_composition.py",highlightLines:[12,17,21,33,40,46,50]}),e.jsx(n,{fileModule:g,title:"layered_character_and_robot_avatar.py",highlightLines:[18,23,31,37,43]}),e.jsx(n,{fileModule:m,title:"ashoka_chakra_tiranga_flag.py",highlightLines:[12,17,24,27,44,47,50,53]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-purple-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🇮🇳"})," Barrackpore Independence Day Project: Tiranga"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Student Debangshu engineers the Indian Flag with exact 3:2 aspect ratio proportions. He decomposes the flag into 3 rectangular filled bands (Saffron, White, Green) and overlays the 24-spoke Ashoka Chakra in navy blue with exact 15-degree radial angles."})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🤖"})," Jadavpur Robotics Club: Avatar Icon Generator"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mamata and Susmita build a procedural robot avatar generator. By combining rounded head boxes, glowing cyan eye dots, and frequency antenna beacons, they create unique vector avatars for all members of the university robotics team."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Composite Art Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Inverted Z-Index Layering"}),e.jsx("p",{className:"text-slate-400",children:"Drawing foreground windows before the background wall causes the wall fill to completely overwrite and erase the window. Always draw back-to-front!"})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Monolithic 500-Line Main Scripts"}),e.jsx("p",{className:"text-slate-400",children:"Writing an entire landscape in one giant script makes debugging impossible. Always decompose elements into modular helper functions."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Tangential Circle Offset Confusion"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"t.circle(r)"})," draws tangentially to the left of the turtle, placing the center at ",e.jsx("code",{className:"text-sky-300",children:"(x, y+r)"}),". Always offset by ",e.jsx("code",{className:"text-sky-300",children:"(cx, cy - r)"})," to center circles."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Forgetting screen.tracer(0) in Complex Art"}),e.jsxs("p",{className:"text-slate-400",children:["Complex composite scenes with 50+ shapes cause slow, flickering step-by-step rendering unless accelerated with ",e.jsx("code",{className:"text-purple-300",children:"tracer(0)"})," and ",e.jsx("code",{className:"text-emerald-300",children:"update()"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Module 005_002 Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I have mastered penup(), pendown(), and pensize() for clean path control","I understand stroke hierarchies and how to configure shapesize() cursor scales","I can configure 0-255 RGB modes with screen.colormode(255) and hex colors","I know the 3-step begin_fill() and end_fill() protocol for solid polygon fills","I can customize canvas window dimensions, title headers, and dark backdrops","I know how to harness screen.tracer(0) for instant, flicker-free rendering","I can compose multi-layered vector artwork using the Painter's Algorithm"].map((r,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How digital illustration software (Figma, Photoshop) organizes artwork into discrete layers and folders."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How breaking complex buildings into simple triangles, rectangles, and circular dots makes even the most intricate illustrations straightforward to code."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add smoke puffs rising from the cottage chimney using a loop of 4 semi-transparent overlapping circles!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Every master digital artist and game developer builds upon the same fundamental truth: ",e.jsx("strong",{children:"all complex beauty is composed of simple primitives orchestrated with mathematical precision"}),". By mastering pen control, color systems, polygon fills, canvas window setup, and layer composition in Module 2, you now possess the complete toolkit to design vector graphics, procedural landscapes, and interactive game worlds."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(c,{title:"Composite Vector Art & Geometric Fills FAQs",questions:h})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(p,{content:x,title:"Topic 6: Composite Vector Art Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(d,{note:"Congratulations to all students at Coder & AccoTax in Barrackpore and Kolkata for completing Module 005_002 (Turtle Design & Aesthetic Customization)! Seeing students combine math, color theory, and modular Python functions to draw the Tiranga flag, starry mountain landscapes, and robot avatars is the greatest joy of teaching computer science. You are now fully prepared to enter Module 005_003 to explore polygon mathematics, spirals, and recursive mandalas!"})})]})]})};export{A as default};

import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as w}from"./TeacherSukantaHui-CyIG3xbg.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as b}from"./FAQTemplate-CkSqDH4B.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const v=[{question:"What is Z-Index in 2D graphical scene composition?",shortAnswer:"The depth order in which layers are drawn from back to front (background drawn first, foreground last).",explanation:"Because later draw calls overwrite earlier pixels (Painter's Algorithm), background elements must be drawn before foreground objects.",hint:"What concept dictates which objects appear in front of others?",level:"basic",codeExample:"# 1. Sky -> 2. Mountains -> 3. Houses -> 4. Trees"},{question:"What is the Painter's Algorithm?",shortAnswer:"A rendering technique where distant objects are painted first, and closer objects are painted on top of them.",explanation:"Simulates optical occlusion naturally without complex 3D depth buffer clipping.",hint:"What classic graphics algorithm paints background before foreground?",level:"basic",codeExample:"# Painter's Algorithm: Far to Near"},{question:"How do you create mountain silhouettes using list vertices in Python Turtle?",shortAnswer:"Pass a list of peak `(x, y)` tuples to `t.goto()` inside a `begin_fill()` polygon.",explanation:"Vertex list polygons easily model jagged mountain horizons.",hint:"How are jagged mountain ridges drawn from coordinate lists?",level:"moderate",codeExample:"for x, y in mountain_peaks: t.goto(x, y)"},{question:"Why should `random.seed(42)` be set before generating procedural skylines?",shortAnswer:"To ensure that the procedural layout generates the exact same deterministic city every time it runs.",explanation:"Seeding pseudo-random number generators makes procedural generation reproducible and testable.",hint:"How do you make randomized procedural layouts repeatable?",level:"moderate",codeExample:`import random
random.seed(1234)`},{question:"How do you implement time-of-day lighting themes (Day, Sunset, Night) across a complex scene?",shortAnswer:"Store color palettes in a dictionary keyed by theme name and look up sky, mountain, and building colors.",explanation:"Theme dictionary configurations allow swapping daytime sunshine for neon nighttime cyberpunk in a single parameter change.",hint:"How can a scene switch between daylight and nighttime palettes?",level:"moderate",codeExample:`cfg = themes['sunset']
draw_sky(cfg['sky_col'])`},{question:"How do you draw a road with dashed lane dividers?",shortAnswer:"Draw an asphalt base rectangle, then loop across the x-axis drawing short yellow line segments with `penup()` gaps.",explanation:"Iterative linear stepping with alternating pen states creates standard roadway lane markings.",hint:"How are dashed center highway lines drawn?",level:"basic",codeExample:`for x in range(-400, 400, 40):
    t.penup(); t.goto(x, y); t.pendown(); t.forward(20)`},{question:"What is Atmospheric Perspective (aerial perspective) in landscape rendering?",shortAnswer:"Distant objects appear lighter, less saturated, and cooler in color than crisp, high-contrast foreground objects.",explanation:"Simulating haze and contrast attenuation adds immense visual depth to 2D vector scenes.",hint:"Why should distant mountains be more faded than foreground trees?",level:"advanced",codeExample:"# Far: #312e81 (faded) | Near: #0f291e (rich contrast)"},{question:"How do you render illuminated skyscraper window matrices efficiently?",shortAnswer:"Loop over rows and columns, calculating window `(wx, wy)` offsets and randomly toggling yellow fill color.",explanation:"Nested coordinate loops over building dimensions generate realistic illuminated office grids.",hint:"How are grid windows positioned across skyscraper facades?",level:"moderate",codeExample:`for r in range(rows):
    for c in range(cols):
        if random.random() > 0.4: draw_win(t, wx, wy)`},{question:"Why should background elements (e.g. stars) NOT overlap foreground elements (e.g. houses)?",shortAnswer:"Drawing background elements after foreground objects creates visual artifacts where stars appear inside living rooms.",explanation:"Strict z-index layering preserves physical visual realism.",hint:"What happens if stars are drawn after houses?",level:"basic",codeExample:"# Always draw sky and stars before houses"},{question:"What is a Scene Graph in computer graphics?",shortAnswer:"A tree-structured representation of all visual entities, nodes, and transformations in a scene.",explanation:"Organizing functions hierarchically simplifies complex multi-object scene orchestration.",hint:"What data structure models visual hierarchy in games and rendering engines?",level:"advanced",codeExample:"# Scene -> [SkyNode, TerrainNode, CityNode, RoadNode]"},{question:"How do you draw water reflections beneath mountains or skylines?",shortAnswer:"Draw the water basin rectangle, and render inverted, lower-opacity horizontal strokes of the skyline colors.",explanation:"Inverted geometric projections create realistic lake and river surface reflections.",hint:"How are landscape reflections rendered on water surfaces?",level:"advanced",codeExample:"# Render inverted geometry below baseline with darker tint"},{question:"How can you place trees along an irregular hillside curve?",shortAnswer:"Calculate the hill elevation `y = f(x)` for each tree `x` position and call `draw_tree(t, x, y)`.",explanation:"Mathematical terrain functions position vegetation accurately along sloping ridgelines.",hint:"How do you position trees on sloping hill terrain?",level:"advanced",codeExample:`for x in tree_xs:
    y = get_hill_height(x)
    draw_tree(t, x, y)`},{question:"Why should `screen.tracer(0)` and a single `screen.update()` be used for full landscape scenes?",shortAnswer:"Rendering hundreds of windows, stars, and trees sequentially takes minutes without double buffering.",explanation:"Double buffering renders the entire multi-thousand segment landscape instantaneously in milliseconds.",hint:"How do you prevent rendering delay across complex town scenes?",level:"basic",codeExample:`screen.tracer(0)
# ... render all 5 layers ...
screen.update()`},{question:"How do you scale tree sizes based on distance to simulate depth?",shortAnswer:"Assign smaller `size` parameters to trees with higher y-coordinates (further back on horizon).",explanation:"Distance-based scaling enforces perspective foreshortening.",hint:"How does tree scale relate to vertical horizon placement?",level:"moderate",codeExample:"size = base_size * (1.0 - (y - min_y) / span)"},{question:"How do you draw a crescent moon in a nighttime town scene?",shortAnswer:"Draw a bright circle, then overlay an offset circle matching the sky background color to bite out the crescent.",explanation:"Constructive solid geometry (CSG) overlay creates classic crescent moon silhouettes.",hint:"How do two overlapping circles create a crescent moon?",level:"moderate",codeExample:"draw_moon_disc(t, x, y, 'white'); draw_moon_disc(t, x+15, y, '#020617')"},{question:"How do you organize a large multi-scene project cleanly into separate files?",shortAnswer:"Put shape primitives in `primitives.py`, scenery functions in `scenery.py`, and orchestration in `main.py`.",explanation:"Separating primitives, scene builders, and entry points follows clean software architecture.",hint:"What 3 files cleanly separate primitives, scenes, and execution?",level:"moderate",codeExample:"# primitives.py | scenery.py | main.py"},{question:"How do you add street lamps with glowing conical light beams?",shortAnswer:"Draw a vertical pole, a lamp head, and a translucent yellow triangular polygon spreading down to the road.",explanation:"Transparent fill cones simulate illuminated nocturnal spotlighting.",hint:"What geometric shape models street lamp light cones?",level:"advanced",codeExample:"draw_pole(t, x, y); draw_light_cone(t, x, y+80, fill='#fef08a')"},{question:"What is Parallax Scrolling in 2D game backgrounds?",shortAnswer:"Moving background layers (mountains) slower than foreground layers (trees) as the camera pans.",explanation:"Layer velocity differentials create convincing optical illusions of 3D depth.",hint:"What 2D game technique moves background layers slower than foreground?",level:"expert",codeExample:"sky_x -= speed * 0.1; hill_x -= speed * 0.5; ground_x -= speed * 1.0"},{question:"How do you draw an antenna mast with flashing beacon dots on skyscrapers?",shortAnswer:"Draw a vertical line from rooftop center, and call `t.dot(6, 'red')` at the peak.",explanation:"Small accent details like rooftop aviation beacons add immense visual polish.",hint:"What method draws small warning beacon dots atop spires?",level:"basic",codeExample:"t.goto(x, y + height + 30); t.dot(6, 'red')"},{question:"How do you draw an arched stone bridge over a river?",shortAnswer:"Draw horizontal bridge deck rectangle and subtract an arc opening using `t.circle(r, 180)`.",explanation:"Combining horizontal deck slabs with circular underpass arches forms classic stone bridges.",hint:"How are stone river bridge arches constructed?",level:"moderate",codeExample:"draw_deck(t); draw_arch_cutout(t)"},{question:"Why should color palettes be limited to 4-6 harmonious colors per scene?",shortAnswer:"Too many random colors cause visual noise and ruin aesthetic cohesion.",explanation:"A disciplined, curated color palette creates professional, eye-catching digital artwork.",hint:"Why avoid using dozens of random colors in a single scene?",level:"basic",codeExample:"# Curate cohesive 5-color theme palette"},{question:"How do you draw smoke plumes rising from cottage chimneys?",shortAnswer:"Render sequential translucent circular puffs of increasing radius drifted rightwards by wind offset.",explanation:"Offset circles with increasing radius model rising chimney smoke puffs.",hint:"How are chimney smoke puffs drawn sequentially?",level:"advanced",codeExample:"for i in range(4): draw_puff(t, x + i*6, y + i*15, r=8 + i*4)"},{question:"How can you proceduralize village building positions without overlaps?",shortAnswer:"Maintain a running `current_x` coordinate, adding building width and spacing offset on each step.",explanation:"Accumulative spacing loops prevent building collisions across the street.",hint:"How do you prevent procedural houses from colliding?",level:"moderate",codeExample:`x = start_x
for w in widths: draw_house(t, x, y, w); x += w + margin`},{question:"What is the difference between a Backdrop and an Interactive Object in game scenes?",shortAnswer:"Backdrops are static scenery with zero collision logic; interactive objects track player collisions and physics.",explanation:"Layered architecture isolates static vector backgrounds from dynamic game entities.",hint:"Which layer contains static scenery versus playable objects?",level:"moderate",codeExample:"# Backdrop: mountain, sky | Interactive: player, coin"},{question:"How do you draw a windmill with rotating sails in a Dutch countryside scene?",shortAnswer:"Draw a tapered trapezoidal tower body, then rotate 4 sail blades with `with preserve_turtle(t): t.right(i*90 + angle)`.",explanation:"State-preserved radial rotation models rotating windmill blades.",hint:"How do you draw 4 symmetric windmill blades around a hub?",level:"advanced",codeExample:"for i in range(4): with preserve_turtle(t): t.right(i*90); draw_blade(t)"},{question:"How do you draw clouds casting shadows on the ground?",shortAnswer:"Draw the cloud in the sky in white/cyan, and draw an elongated semi-transparent dark oval on the ground below.",explanation:"Ground shadow projections connect aerial objects to the terrestrial environment.",hint:"How do ground shadows enhance aerial objects like clouds?",level:"advanced",codeExample:"draw_cloud(t, x, 200); draw_shadow(t, x+30, -120)"},{question:"What is Chunking in large procedural world generation?",shortAnswer:"Dividing a large infinite world into discrete spatial blocks and only rendering visible chunks within the camera viewport.",explanation:"Spatial chunking keeps memory and CPU rendering bounded in massive procedural scenes.",hint:"What technique divides infinite worlds into manageable grid squares?",level:"expert",codeExample:"# Chunking: render only chunks in [cam_x - w, cam_x + w]"},{question:"How do you draw a lighthouse beam scanning across an ocean night scene?",shortAnswer:"Draw a rotating triangular translucent light beam polygon originating from the lighthouse lantern room.",explanation:"Rotating polygon fans create dynamic rotating searchlight beams.",hint:"How do you render a rotating lighthouse beacon cone?",level:"advanced",codeExample:"draw_light_cone(t, lx, ly, rotation=scan_angle)"},{question:"What is the 5-layer pipeline rule for assembling complex Python Turtle scenes?",shortAnswer:"1. Sky/Celestial -> 2. Far Topography -> 3. Midground Terrain -> 4. Architecture/Props -> 5. Foreground Infrastructure.",explanation:"Adhering to this structured pipeline guarantees depth, optical occlusion, and visual clarity.",hint:"What 5 layers assemble a complete natural or urban landscape?",level:"basic",codeExample:"# 1. Sky | 2. Mountains | 3. Hills | 4. Town | 5. Road"},{question:"How do you create an animated daytime-to-nighttime transition cycle?",shortAnswer:"In a timer loop, interpolate color palettes from Day -> Sunset -> Night and re-render the scene graph.",explanation:"Palette interpolation animates smooth diurnal lighting cycles.",hint:"How do you animate day to night cycles in Turtle?",level:"expert",codeExample:"# Interpolate theme colors over 24-hour simulation loop"}],k=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 4 - Combining multiple modular shapes into complex town and nature scenes\r
File: layered_mountain_sunset_landscape.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates multi-layered procedural landscape composition:\r
1. Sky Gradient & Setting Sun (Background)\r
2. Distant Snowcapped Mountain Ranges (Midground Layer 1)\r
3. Rolling Foothills (Midground Layer 2)\r
4. Pine Forest & Lake Reflection (Foreground)\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_sun(t, x, y, radius=40, color="#f97316"):\r
    t.penup(); t.goto(x, y - radius); t.setheading(0); t.pendown()\r
    t.color(color, color)\r
    t.begin_fill(); t.circle(radius); t.end_fill()\r
\r
def draw_mountain_range(t, points, fill_color, border_color="#334155"):\r
    """Renders a continuous mountain silhouette from a list of peak vertices."""\r
    t.penup(); t.goto(points[0][0], -250); t.pendown()\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    for x, y in points:\r
        t.goto(x, y)\r
    t.goto(points[-1][0], -250)\r
    t.goto(points[0][0], -250)\r
    t.end_fill()\r
\r
def draw_pine_tree(t, x, y, size=50):\r
    """Draws a layered pine tree."""\r
    # Trunk\r
    t.penup(); t.goto(x - size*0.08, y); t.setheading(0); t.pendown()\r
    t.color("#451a03", "#451a03")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(size*0.16); t.left(90); t.forward(size*0.3); t.left(90)\r
    t.end_fill()\r
\r
    # Needles\r
    foliage = ["#064e3b", "#047857", "#10b981"]\r
    for i, col in enumerate(foliage):\r
        ly = y + size*0.25 + (i * size*0.22)\r
        lw = size * (0.7 - i*0.15)\r
        t.penup(); t.goto(x - lw/2, ly); t.pendown()\r
        t.color(col, col)\r
        t.begin_fill()\r
        t.goto(x, ly + size*0.35)\r
        t.goto(x + lw/2, ly)\r
        t.goto(x - lw/2, ly)\r
        t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Layered Mountain Sunset Landscape - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.setup(width=850, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # 1. Background Setting Sun\r
    draw_sun(t, 120, 80, radius=50, color="#fb923c")\r
\r
    # 2. Far Mountain Range (Cool Dark Indigo)\r
    far_mountains = [(-425, -250), (-300, 120), (-140, 20), (0, 160), (180, 40), (320, 140), (425, -250)]\r
    draw_mountain_range(t, far_mountains, fill_color="#1e1b4b")\r
\r
    # 3. Near Mountain Range (Deep Forest Slate)\r
    near_mountains = [(-425, -250), (-240, 40), (-100, -60), (60, 60), (220, -40), (380, 50), (425, -250)]\r
    draw_mountain_range(t, near_mountains, fill_color="#0f291e")\r
\r
    # 4. Foreground Lake Basin\r
    t.penup(); t.goto(-425, -120); t.pendown()\r
    t.color("#0284c7", "#0c4a6e")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(850); t.right(90); t.forward(130); t.right(90)\r
    t.end_fill()\r
\r
    # 5. Foreground Pine Forest Along Shoreline\r
    tree_coords = [(-380, -120), (-320, -120), (-250, -120), (-180, -120), (140, -120), (220, -120), (290, -120), (360, -120)]\r
    for tx, ty in tree_coords:\r
        draw_pine_tree(t, tx, ty, size=65)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 4 - Combining multiple modular shapes into complex town and nature scenes\r
File: procedural_metropolis_skyline.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Procedural Metropolis generator:\r
1. Moon & Starfield\r
2. Distant Dark Skyscraper Silhouettes\r
3. Foreground Tower Blocks with Grid Windows\r
4. Road with Dashed Center Lane Lines & Street Lamps\r
"""\r
\r
import turtle\r
import random\r
\r
def draw_star(t, x, y, size=10):\r
    t.penup(); t.goto(x, y); t.pendown()\r
    t.color("#fef08a", "#fef08a")\r
    t.begin_fill()\r
    for _ in range(5):\r
        t.forward(size); t.right(144)\r
    t.end_fill()\r
\r
def draw_skyscraper(t, x, y, width, height, body_color="#1e293b", has_spire=False):\r
    """Draws a modern skyscraper with antenna spire and illuminated window matrix."""\r
    # 1. Building Body\r
    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
    t.color("#475569", body_color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(width); t.left(90)\r
        t.forward(height); t.left(90)\r
    t.end_fill()\r
\r
    # 2. Spire if requested\r
    if has_spire:\r
        t.penup(); t.goto(x + width/2, y + height); t.pendown()\r
        t.color("#ef4444"); t.pensize(2)\r
        t.goto(x + width/2, y + height + 35)\r
        t.dot(6, "#ef4444")\r
        t.pensize(1)\r
\r
    # 3. Window Grid\r
    cols = max(2, int(width // 14))\r
    rows = max(3, int(height // 18))\r
    win_w = (width - (cols + 1) * 3) / cols\r
    win_h = 7\r
\r
    for r in range(rows):\r
        for c in range(cols):\r
            # 60% chance of illuminated window\r
            if random.random() > 0.35:\r
                wx = x + 3 + c * (win_w + 3)\r
                wy = y + 8 + r * (win_h + 8)\r
                t.penup(); t.goto(wx, wy); t.pendown()\r
                t.color("#fef08a", "#fef08a")\r
                t.begin_fill()\r
                for _ in range(2):\r
                    t.forward(win_w); t.left(90); t.forward(win_h); t.left(90)\r
                t.end_fill()\r
\r
def draw_road(t, y=-150, height=80):\r
    """Draws an asphalt roadway with dashed yellow center dividing lines."""\r
    # Asphalt\r
    t.penup(); t.goto(-425, y); t.setheading(0); t.pendown()\r
    t.color("#0f172a", "#1e293b")\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(850); t.right(90); t.forward(height); t.right(90)\r
    t.end_fill()\r
\r
    # Dashed Yellow Stripe\r
    dash_y = y - height / 2\r
    t.penup(); t.goto(-425, dash_y); t.pendown()\r
    t.color("#fbbf24"); t.pensize(3)\r
    for x in range(-425, 425, 40):\r
        t.penup(); t.goto(x, dash_y); t.pendown()\r
        t.forward(20)\r
\r
def main():\r
    random.seed(42)  # Deterministic procedural layout\r
    screen = turtle.Screen()\r
    screen.title("Procedural Metropolis Skyline - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=850, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # 1. Starfield\r
    for _ in range(25):\r
        draw_star(t, random.randint(-400, 400), random.randint(50, 270), random.randint(6, 12))\r
\r
    # 2. Moon\r
    t.penup(); t.goto(-280, 200); t.pendown()\r
    t.color("#ffffff", "#f8fafc"); t.begin_fill(); t.circle(35); t.end_fill()\r
\r
    # 3. Distant Skyline Layer (Dark Blue-Gray)\r
    for x in range(-420, 400, 65):\r
        h = random.randint(140, 260)\r
        draw_skyscraper(t, x, -150, width=60, height=h, body_color="#091428", has_spire=False)\r
\r
    # 4. Foreground Tower Blocks (Vibrant Illuminated)\r
    for x in range(-400, 380, 85):\r
        h = random.randint(180, 320)\r
        draw_skyscraper(t, x, -150, width=75, height=h, body_color="#0f172a", has_spire=(h > 260))\r
\r
    # 5. Road\r
    draw_road(t, y=-150, height=90)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 4 - Combining multiple modular shapes into complex town and nature scenes\r
File: interactive_scene_graph_orchestrator.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates Scene Graph Architecture: organizing modular drawing functions\r
into ordered z-index rendering layers:\r
Layer 0: Celestial & Sky (Sun/Moon/Stars)\r
Layer 1: Distant Topography (Mountains/Hills)\r
Layer 2: Architecture & Structures (Houses/Buildings)\r
Layer 3: Props & Nature (Trees/Fences/Streetlamps)\r
Layer 4: Foreground Infrastructure (Roads/Sidewalks)\r
"""\r
\r
import turtle\r
\r
def render_scene_graph(t, time_of_day="sunset"):\r
    """Orchestrates multi-layered rendering based on theme configurations."""\r
    themes = {\r
        "day": {"sky": "#38bdf8", "sun": "#fbbf24", "mountain": "#64748b", "hill": "#15803d", "wall": "#0284c7"},\r
        "sunset": {"sky": "#f97316", "sun": "#f43f5e", "mountain": "#312e81", "hill": "#064e3b", "wall": "#7c3aed"},\r
        "night": {"sky": "#020617", "sun": "#f8fafc", "mountain": "#090d16", "hill": "#031a10", "wall": "#1e293b"}\r
    }\r
    cfg = themes.get(time_of_day, themes["sunset"])\r
\r
    # 1. Sky & Sun\r
    t.penup(); t.goto(150, 80); t.pendown()\r
    t.color(cfg["sun"], cfg["sun"])\r
    t.begin_fill(); t.circle(45); t.end_fill()\r
\r
    # 2. Mountains\r
    t.penup(); t.goto(-400, -100); t.pendown()\r
    t.color(cfg["mountain"], cfg["mountain"])\r
    t.begin_fill()\r
    for x, y in [(-400, -100), (-250, 90), (-100, -30), (50, 110), (200, 20), (350, 80), (400, -100)]:\r
        t.goto(x, y)\r
    t.end_fill()\r
\r
    # 3. Rolling Foothill\r
    t.penup(); t.goto(-400, -100); t.pendown()\r
    t.color(cfg["hill"], cfg["hill"])\r
    t.begin_fill()\r
    t.goto(-400, -150); t.goto(400, -150); t.goto(400, -30); t.goto(100, -70); t.goto(-200, -40); t.goto(-400, -100)\r
    t.end_fill()\r
\r
    # 4. Cottage House\r
    t.penup(); t.goto(-140, -150); t.setheading(0); t.pendown()\r
    t.color("white", cfg["wall"])\r
    t.begin_fill()\r
    for _ in range(4): t.forward(90); t.left(90)\r
    t.end_fill()\r
\r
    # Roof\r
    t.penup(); t.goto(-150, -60); t.pendown()\r
    t.color("white", "#ef4444")\r
    t.begin_fill()\r
    t.goto(-95, 0); t.goto(-40, -60); t.goto(-150, -60)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Scene Graph Orchestrator - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    render_scene_graph(t, time_of_day="sunset")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`================================================================================\r
  TOPIC 4: COMBINING MULTIPLE MODULAR SHAPES INTO COMPLEX TOWN AND NATURE SCENES\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCENE GRAPH COMPOSITION?\r
--------------------------------------------------------------------------------\r
Complex environments (townscapes, mountain ranges, procedural cities) are constructed\r
by combining individual modular drawing functions into an ordered pipeline.\r
Instead of random drawing order, professional graphics follow a Layered Z-Index hierarchy.\r
\r
2. THE 5-LAYER Z-INDEX RENDERING PIPELINE\r
--------------------------------------------------------------------------------\r
1. Layer 0 (Backdrop): Sky gradient, Sun, Moon, Starfields.\r
2. Layer 1 (Far Distance): Distant mountains, hazy horizons.\r
3. Layer 2 (Midground): Rolling hills, riverbanks, forest silhouettes.\r
4. Layer 3 (Subject Architecture): Houses, skyscrapers, bridges.\r
5. Layer 4 (Foreground Props): Streetlamps, pine trees, roads, pedestrians.\r
\r
3. PROCEDURAL PARAMETRIC GENERATION\r
--------------------------------------------------------------------------------\r
By using \`random.randint()\` or mathematical functions inside coordinate loops,\r
a single \`draw_skyscraper()\` or \`draw_tree()\` function can generate infinite\r
unique city skylines and lush nature scenes with deterministic seeds (\`random.seed()\`).\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,T=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes floatSun {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}
`,W=()=>{const[s,p]=a.useState("sunset"),[o,u]=a.useState(!0),[l,g]=a.useState(!0),[d,m]=a.useState(!0),[c,x]=a.useState(!0),h={day:{sky:"#38bdf8",sun:"#fbbf24",mountainFar:"#64748b",mountainNear:"#15803d",building:"#0284c7",buildingWin:"#fef08a",road:"#334155",tree:"#166534"},sunset:{sky:"#f97316",sun:"#f43f5e",mountainFar:"#312e81",mountainNear:"#064e3b",building:"#4f46e5",buildingWin:"#fbbf24",road:"#1e293b",tree:"#14532d"},night:{sky:"#020617",sun:"#f8fafc",mountainFar:"#090d16",mountainNear:"#031a10",building:"#0f172a",buildingWin:"#fef08a",road:"#090d16",tree:"#052e16"},cyberpunk:{sky:"#18032b",sun:"#f43f5e",mountainFar:"#3b0764",mountainNear:"#09021e",building:"#06b6d4",buildingWin:"#ec4899",road:"#050505",tree:"#8b5cf6"}},n=h[s]||h.sunset,f=[{name:"draw_mountain_range(t, points, fill_color)",returnType:"Topography Primitive",purpose:"Renders multi-vertex mountain ridges and rolling foothills with smooth baseline closure.",usage:"draw_mountain_range(t, points, fill_color='#1e1b4b')"},{name:"draw_skyscraper(t, x, y, width, height, body_color, has_spire)",returnType:"Urban Architecture",purpose:"Renders modern multi-story high-rise tower blocks with rooftop antenna spires and grid window matrices.",usage:"draw_skyscraper(t, -120, -150, 75, 240, has_spire=True)"},{name:"draw_road(t, y, height)",returnType:"Infrastructure Layer",purpose:"Draws asphalt roadway with dashed yellow center dividing lines.",usage:"draw_road(t, y=-150, height=90)"},{name:"render_scene_graph(t, time_of_day)",returnType:"Scene Orchestrator",purpose:"Orchestrates 5-layer Z-index rendering pipeline according to theme configuration.",usage:"render_scene_graph(t, time_of_day='sunset')"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:T}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 4"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Combining Modular Shapes: Townscapes & Nature Scenes"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Assemble multi-layered panoramic landscapes. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Z-Index Layering (Painter's Algorithm)"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"Procedural City Skylines"}),", and ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Diurnal Lighting Cycles"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌄 5-Layer Z-Index Pipeline"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏙️ Procedural Metropolis Skylines"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌅 Day / Sunset / Night Theme Engine"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🏙️"})," Scene Graph Orchestrator & Lighting Engine"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle individual Z-index rendering layers and switch diurnal lighting themes to inspect the live composition pipeline."})]}),e.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:["day","sunset","night","cyberpunk"].map(r=>e.jsx("button",{onClick:()=>p(r),className:`px-2.5 py-1 rounded-lg text-xs font-bold transition capitalize cursor-pointer ${s===r?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:r},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Composite Scene Viewport (Theme: ",s.toUpperCase(),")"]}),e.jsxs("svg",{viewBox:"0 0 320 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("rect",{x:"0",y:"0",width:"320",height:"220",fill:n.sky,className:"transition-colors duration-500"}),e.jsx("circle",{cx:"250",cy:"45",r:"24",fill:n.sun,className:"animate-[floatSun_4s_ease-in-out_infinite] transition-colors duration-500"}),o&&e.jsxs(e.Fragment,{children:[e.jsx("polygon",{points:"0,150 40,75 110,130 180,60 250,120 320,80 320,170 0,170",fill:n.mountainFar,className:"transition-colors duration-500"}),e.jsx("polygon",{points:"0,165 70,115 140,150 220,105 320,155 320,180 0,180",fill:n.mountainNear,className:"transition-colors duration-500"})]}),l&&e.jsxs("g",{className:"transition-all duration-300",children:[e.jsx("rect",{x:"25",y:"80",width:"45",height:"95",fill:n.building,stroke:"#334155",strokeWidth:"1"}),e.jsx("rect",{x:"32",y:"90",width:"8",height:"6",fill:n.buildingWin}),e.jsx("rect",{x:"45",y:"90",width:"8",height:"6",fill:n.buildingWin}),e.jsx("rect",{x:"32",y:"105",width:"8",height:"6",fill:n.buildingWin}),e.jsx("rect",{x:"58",y:"105",width:"8",height:"6",fill:n.buildingWin}),e.jsx("rect",{x:"45",y:"120",width:"8",height:"6",fill:n.buildingWin}),e.jsx("rect",{x:"80",y:"55",width:"55",height:"120",fill:n.building,stroke:"#334155",strokeWidth:"1"}),e.jsx("line",{x1:"107",y1:"55",x2:"107",y2:"35",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("circle",{cx:"107",cy:"35",r:"2.5",fill:"#ef4444"}),e.jsx("rect",{x:"88",y:"65",width:"10",height:"7",fill:n.buildingWin}),e.jsx("rect",{x:"104",y:"65",width:"10",height:"7",fill:n.buildingWin}),e.jsx("rect",{x:"120",y:"65",width:"10",height:"7",fill:n.buildingWin}),e.jsx("rect",{x:"88",y:"80",width:"10",height:"7",fill:n.buildingWin}),e.jsx("rect",{x:"120",y:"80",width:"10",height:"7",fill:n.buildingWin}),e.jsx("rect",{x:"145",y:"110",width:"50",height:"65",fill:"#0284c7",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("polygon",{points:"170,85 140,110 200,110",fill:"#f43f5e"}),e.jsx("rect",{x:"155",y:"145",width:"12",height:"30",fill:"#78350f"}),e.jsx("rect",{x:"175",y:"125",width:"12",height:"12",fill:"#fef08a"})]}),d&&e.jsxs("g",{className:"transition-all duration-300",children:[e.jsx("rect",{x:"210",y:"145",width:"6",height:"20",fill:"#451a03"}),e.jsx("polygon",{points:"213,115 198,145 228,145",fill:n.tree}),e.jsx("polygon",{points:"213,125 202,152 224,152",fill:n.tree}),e.jsx("rect",{x:"235",y:"140",width:"7",height:"25",fill:"#451a03"}),e.jsx("polygon",{points:"238,105 220,140 256,140",fill:n.tree}),e.jsx("polygon",{points:"238,118 225,148 251,148",fill:n.tree})]}),c&&e.jsxs("g",{className:"transition-all duration-300",children:[e.jsx("rect",{x:"0",y:"175",width:"320",height:"45",fill:n.road}),e.jsx("line",{x1:"10",y1:"197",x2:"50",y2:"197",stroke:"#fbbf24",strokeWidth:"2",strokeDasharray:"12 12"}),e.jsx("line",{x1:"80",y1:"197",x2:"310",y2:"197",stroke:"#fbbf24",strokeWidth:"2",strokeDasharray:"12 12"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Z-Index Layer Pipeline Controls"}),e.jsx("span",{className:"font-mono text-xs text-amber-300",children:"5-Stage Pipeline"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[{label:"Layer 1: Mountains",checked:o,setter:u},{label:"Layer 2: Architecture",checked:l,setter:g},{label:"Layer 3: Nature/Trees",checked:d,setter:m},{label:"Layer 4: Roadway",checked:c,setter:x}].map((r,t)=>e.jsxs("label",{className:"flex items-center gap-2 p-2 rounded bg-slate-950 border border-slate-800 cursor-pointer text-slate-300 hover:border-slate-700",children:[e.jsx("input",{type:"checkbox",checked:r.checked,onChange:y=>r.setter(y.target.checked),className:"rounded text-cyan-500 focus:ring-0"}),e.jsx("span",{className:"text-[11px]",children:r.label})]},t))}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Layered Orchestrator Invocation"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# Render Complete Townscape
render_scene_graph(
    t,
    time_of_day="${s}"
)`})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 leading-relaxed",children:["💡 ",e.jsx("strong",{children:"Painter's Algorithm:"})," Background elements (Sky, Mountains) must always be rendered before Midground (Buildings) and Foreground (Roads, Trees) to ensure proper optical occlusion without clipping artifacts."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Scene Graph Pipeline API Standard"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Pipeline Function"}),e.jsx("th",{className:"py-3 px-4",children:"Z-Index Tier"}),e.jsx("th",{className:"py-3 px-4",children:"Occlusion Role"}),e.jsx("th",{className:"py-3 px-4",children:"Sample Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:f.map((r,t)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:r.usage})]},t))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:k,title:"layered_mountain_sunset_landscape.py",highlightLines:[12,17,26,56,59,63,67,74]}),e.jsx(i,{fileModule:j,title:"procedural_metropolis_skyline.py",highlightLines:[12,20,29,39,49,78,83,87]}),e.jsx(i,{fileModule:N,title:"interactive_scene_graph_orchestrator.py",highlightLines:[14,15,16,21,26,33,40,47]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌆"})," Barrackpore Skyline Competition"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu entered a procedural city generation challenge. By structuring his code into an ordered scene graph—rendering the starry night sky first, then dark background high-rises, followed by illuminated foreground towers and a dashed roadway—he generated 100 completely unique city skylines at the touch of a key, winning 1st prize!"})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏞️"})," Kolkata Landscape Simulator"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mamata built a dynamic weather landscape in Kolkata. By binding her scene graph to a time-of-day configuration dictionary, she smoothly transitioned her mountain lake scene from vibrant golden sunrise to misty dusk with atmospheric mountain color fading."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Scene Graph Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Inverting Z-Index Layer Order"}),e.jsx("p",{className:"text-slate-400",children:"Drawing houses before mountains causes the mountain base polygon to draw right over the rooftops, completely burying the houses."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Non-Seeded Randomness in Animations"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"random.randint()"})," without ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"random.seed()"})," inside an animation loop causes buildings to flicker and change heights randomly on every frame."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Hardcoding Canvas Boundaries"}),e.jsx("p",{className:"text-slate-400",children:"Hardcoding mountain widths to 400px when the screen is resized to 1000px leaves jarring blank white gaps on the canvas edges. Always scale terrain to screen width."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Overlapping Coordinate Collisions"}),e.jsx("p",{className:"text-slate-400",children:"Randomizing building positions without spacing offsets causes skyscrapers to generate directly on top of each other, creating messy z-fighting visual artifacts."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand the Painter's Algorithm and the 5-layer Z-index pipeline","I render background elements (sky, mountains) before midground and foreground","I use deterministic seeds (`random.seed()`) for repeatable procedural cityscapes","I know how to implement theme dictionaries for Day/Sunset/Night lighting transitions","I can generate procedural window grids across skyscrapers using nested coordinate loops","I always use `screen.tracer(0)` and `screen.update()` for sub-second scene rendering"].map((r,t)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How 2D game classics like Super Mario and Hollow Knight build immersive game worlds through layered parallax scrolling!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How switching between Day, Sunset, Night, and Cyberpunk themes instantly transforms the entire emotional mood of the scene!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add a shimmering river reflection layer beneath the mountains by rendering inverted dark shapes!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In computer graphics, a masterpiece is not a single drawing—it is an orchestrated hierarchy of smaller components cooperating across space, depth, and time. Structuring your code into clean scene graphs gives you the power to generate infinite, living virtual worlds from pure mathematical logic."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(b,{title:"Scene Graph Composition FAQs",questions:v})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(_,{content:S,title:"Topic 4: Scene Graph Composition Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(w,{note:"Combining modular shapes into panoramic townscapes and mountain sunset scenes is one of the most rewarding milestones in our curriculum at Coder & AccoTax in Barrackpore and Kolkata. When students watch their individual houses, mountains, trees, and roads assemble into a living, breathing landscape, they realize that any visual world can be built through clean, disciplined functional composition!"})})]})]})};export{W as default};

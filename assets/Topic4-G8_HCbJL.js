import{b as u,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as x}from"./TeacherSukantaHui-CC0AKmkm.js";import{P as c}from"./PythonFileLoader-hCi5osN-.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const b=[{question:"What is the Schläfli symbol {p/q} for a star polygon?",shortAnswer:"`p` represents the number of vertices, and `q` is the step stride (density) connecting every q-th vertex.",explanation:"For example, {5/2} is a 5-pointed star connecting every 2nd vertex.",hint:"What do p and q represent in {p/q}?",level:"basic",codeExample:"# {5/2} = 5-pointed star"},{question:"What is the exterior turn angle formula for regular star polygon {p/q}?",shortAnswer:"theta = (q * 360) / p degrees.",explanation:"Tracing the star wraps around the center `q` full 360° revolutions across `p` turns.",hint:"Multiply 360 by density q and divide by vertex count p.",level:"basic",codeExample:"theta = (q * 360) / p"},{question:"What is the steering turn angle to draw a standard 5-pointed star?",shortAnswer:"144 degrees.",explanation:"theta = (2 * 360) / 5 = 720 / 5 = 144°.",hint:"What is (2 * 360) / 5?",level:"basic",codeExample:"for _ in range(5): t.forward(100); t.right(144)"},{question:"What is the internal vertex angle at each point of a 5-pointed star?",shortAnswer:"36 degrees.",explanation:"180° - 144° = 36° tip angle.",hint:"What is 180 minus 144?",level:"basic",codeExample:"tip_angle = 180 - 144  # 36 deg"},{question:"What mathematical condition is required for {p/q} to be a single unicursal (continuous) star polygon?",shortAnswer:"`p` and `q` must be coprime (greatest common divisor gcd(p, q) == 1).",explanation:"If gcd(p, q) > 1, the shape decomposes into multiple disjoint polygons (e.g. {6/2} is two triangles).",hint:"What must gcd(p, q) equal for a continuous path?",level:"moderate",codeExample:"import math; assert math.gcd(p, q) == 1"},{question:"What is the exterior turn angle for an 8-pointed star {8/3}?",shortAnswer:"135 degrees.",explanation:"theta = (3 * 360) / 8 = 1080 / 8 = 135°.",hint:"What is (3 * 360) / 8?",level:"moderate",codeExample:"for _ in range(8): t.forward(100); t.left(135)"},{question:"What is the difference between heptagram {7/2} and {7/3}?",shortAnswer:"{7/2} has wide blunt points (102.86° turn); {7/3} has acute sharp needle points (154.29° turn).",explanation:"Higher stride `q` makes the star points sharper and more acute.",hint:"Which heptagram has sharper points: q=2 or q=3?",level:"moderate",codeExample:"# {7/2}: turn=102.86° | {7/3}: turn=154.29°"},{question:"What is a compound star polygon?",shortAnswer:"A star formed by overlaying multiple rotated regular polygons when gcd(p, q) > 1.",explanation:"The Star of David {6/2} consists of 2 overlapping triangles; the Islamic Octagram {8/2} is 2 overlapping squares.",hint:"What is formed when two triangles or squares overlap?",level:"moderate",codeExample:"# {6/2} = 2 triangles | {8/2} = 2 squares"},{question:"How do you draw the 6-pointed Star of David in Python Turtle?",shortAnswer:"Draw one equilateral triangle pointing up, lift pen to offset, and draw a second triangle pointing down.",explanation:"Overlaying two rotated triangles produces the hexagram.",hint:"How do you combine two triangles to form a 6-pointed star?",level:"basic",codeExample:"# Triangle 1: left(120) | Triangle 2: right(120)"},{question:"How do you draw the 8-pointed Islamic Star (Rub el Hizb)?",shortAnswer:"Draw one centered square, rotate 45 degrees, and draw a second centered square.",explanation:"Two concentric squares offset by 45° form the classic 8-pointed star rosette.",hint:"What angle separates the two squares in an 8-pointed star?",level:"moderate",codeExample:"# Square 1: heading 0 | Square 2: heading 45"},{question:"How do you create a rotational star mandala in Python Turtle?",shortAnswer:"Loop over N radial spokes, drawing a 5-pointed star at each spoke and turning by `360 / N`.",explanation:"Rotating star motifs around the origin generates intricate circular mandalas.",hint:"How do you combine star drawing with radial spoke pivots?",level:"moderate",codeExample:"for _ in range(12): draw_star(); t.left(30)"},{question:"What is the total sum of turning angles when drawing a 5-pointed star {5/2}?",shortAnswer:"720 degrees (2 full revolutions).",explanation:"5 turns of 144° = 720° (density q = 2 full turns around the center).",hint:"What is 5 multiplied by 144?",level:"basic",codeExample:"5 * 144 = 720 deg (2 revolutions)"},{question:"What is the winding number of a star polygon {p/q}?",shortAnswer:"The integer `q`, representing how many times the perimeter winds around the central hub.",explanation:"Winding number determines fill intersection parity in vector graphics.",hint:"What integer represents the number of full revolutions around center?",level:"advanced",codeExample:"winding_number = q"},{question:"How does the non-zero winding rule affect filling a 5-pointed star?",shortAnswer:"The entire star including the central pentagon is filled solid.",explanation:"Non-zero winding fills all regions with winding count != 0.",hint:"Does non-zero winding fill the center of a star?",level:"advanced",codeExample:"# Non-zero rule fills entire star"},{question:"How does the even-odd fill rule affect a 5-pointed star?",shortAnswer:"The 5 points are filled, but the central pentagon is left empty (a transparent hole).",explanation:"The central pentagon has winding number 2 (even), which becomes a hole under even-odd parity.",hint:"What rule leaves the central pentagon empty?",level:"advanced",codeExample:"# Even-odd parity leaves center hollow"},{question:"How do you draw a star polygon using polar vertex coordinates?",shortAnswer:"Compute all `p` vertices `(R*cos, R*sin)`, then connect in sequence `idx = (idx + q) % p`.",explanation:"Modulo indexing by stride `q` guarantees exact vertex connectivity without cumulative angle drift.",hint:"How does modulo arithmetic connect star vertices?",level:"expert",codeExample:"current = (current + q) % p"},{question:"What is a decagram {10/3} star?",shortAnswer:"A 10-pointed regular star polygon with exterior turn angle `theta = (3 * 360) / 10 = 108°`.",explanation:"Connects every 3rd vertex of a regular decagon.",hint:"What is (3 * 360) / 10?",level:"moderate",codeExample:"# {10/3} turn angle = 108°"},{question:"What is a dodecagram {12/5} star?",shortAnswer:"A 12-pointed acute star with exterior turn angle `theta = (5 * 360) / 12 = 150°`.",explanation:"Connects every 5th vertex of a 12-gon.",hint:"What is (5 * 360) / 12?",level:"moderate",codeExample:"# {12/5} turn angle = 150°"},{question:"How do you draw a starburst with alternating long and short rays?",shortAnswer:"Loop over 2N points, alternating radius between `R_outer` and `R_inner` on each step.",explanation:"Connecting alternating outer tips and inner valleys forms classic starbursts.",hint:"How do alternating inner and outer radii form starbursts?",level:"moderate",codeExample:"r = r_outer if i % 2 == 0 else r_inner"},{question:"Why is `q < p/2` a requirement for standard Schläfli star symbols?",shortAnswer:"Because `q > p/2` produces the exact same star traced in the reverse (clockwise) direction: `{p/(p-q)}`.",explanation:"{5/3} is geometrically identical to {5/2}, just drawn clockwise.",hint:"Why is {5/3} identical to {5/2}?",level:"advanced",codeExample:"# {p/q} is isomorphic to {p/(p-q)}"},{question:"What is sacred geometry in mathematical art?",shortAnswer:"The study of geometric proportions (Flower of Life, Seed of Life, Metatron's Cube) based on nested overlapping circles and stars.",explanation:"Found across historical architecture, stained glass, and mandala art.",hint:"What term describes the geometric study of mandalas and the Flower of Life?",level:"basic",codeExample:"# Sacred geometry overlapping circles"},{question:"How do you draw the Seed of Life in Python Turtle?",shortAnswer:"Draw one central circle, then draw 6 identical overlapping circles centered at radius R on each 60° spoke.",explanation:"7 intersecting circles with 6-fold radial symmetry form the Seed of Life.",hint:"How many circles make up the Seed of Life?",level:"advanced",codeExample:"for i in range(6): t.goto(r*cos(i*60), r*sin(i*60)); t.circle(r)"},{question:"How do you draw a multi-layered star kaleidoscope?",shortAnswer:"Draw multiple concentric star polygons with decreasing radii and alternating rotation angles.",explanation:"Layering nested star frames creates depth and kaleidoscopic symmetry.",hint:"How do shrinking rotated stars create a kaleidoscope?",level:"moderate",codeExample:"for i in range(5): draw_star(r=100 - i*15); t.left(15)"},{question:"What is the ratio of golden sections inside a regular 5-pointed pentagram?",shortAnswer:"Every line segment intersects another at the Golden Ratio (phi ≈ 1.6180339).",explanation:"The pentagram is the primary geometric embodiment of the golden ratio in Euclidean geometry.",hint:"What famous mathematical ratio appears throughout a pentagram?",level:"advanced",codeExample:"# Pentagram contains phi = 1.618"},{question:"How do you fill each triangular point of a star with different colors?",shortAnswer:"Draw each of the `p` triangular points independently from the outer tip to the inner valley using `begin_fill()`.",explanation:"Decomposing the star into `p` distinct triangle facets allows independent coloring.",hint:"How do you color star facets individually?",level:"advanced",codeExample:"# Draw p independent facet triangles"},{question:"What is an enneagram {9/2} or {9/4}?",shortAnswer:"A 9-pointed regular star polygon.",explanation:"{9/2} has 80° turn; {9/4} has 160° turn.",hint:"What is a 9-pointed star polygon called?",level:"moderate",codeExample:"# Enneagram {9/4}: turn = (4 * 360) / 9 = 160°"},{question:"How do you draw a dynamic star with a parameterized number of points in Python?",shortAnswer:"Define `draw_star(p, q, size)` where `turn = (q * 360) / p` and loop `p` times.",explanation:"Parameterized functions handle arbitrary star geometries dynamically.",hint:"How do you generalize star drawing to any (p, q)?",level:"basic",codeExample:`def star(p, q, size):
    for _ in range(p): t.forward(size); t.right((q*360)/p)`},{question:"How do you create an animated pulsing star in Turtle?",shortAnswer:"In a loop, repeatedly clear canvas, update radius with `r = base + amp * sin(time)`, and redraw with `tracer(0)`.",explanation:"Sine-modulated radius animation creates organic pulsing effects.",hint:"How does math.sin modulate star size over time?",level:"advanced",codeExample:"size = 100 + 20 * math.sin(frame * 0.1)"},{question:"What happens if you attempt to draw {6/3}?",shortAnswer:"gcd(6, 3) = 3, which collapses into 3 straight lines passing through the origin (a degenerate figure).",explanation:"q = p/2 is a straight line through the center, not a polygon.",hint:"Why is q = p/2 degenerate?",level:"expert",codeExample:"# Degenerate straight line"},{question:"What is the summary formula for star polygon mathematics?",shortAnswer:"Given Schläfli symbol `{p/q}` where `gcd(p,q) == 1`, turn by `theta = (q * 360) / p` exactly `p` times to complete the star.",explanation:"This universal formula renders every possible regular star polygon in Euclidean geometry.",hint:"What formula produces any regular star polygon?",level:"basic",codeExample:"# theta = (q * 360) / p across p iterations"}],w=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 4 - Angle mathematics in star polygons and mandalas\r
File: star_polygon_schlafli.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates regular star polygon mathematics using Schläfli symbol {p/q}:\r
- p = number of vertices\r
- q = vertex step stride (coprime to p, 1 < q < p/2)\r
- Exterior Turn Angle: theta = (q * 360) / p\r
- Total Turns to close: p turns of theta degrees\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_star_polygon(t, cx, cy, p, q, radius, color):\r
    """Draws regular star polygon {p/q} centered at (cx, cy)."""\r
    t.penup()\r
    t.color(color)\r
    t.pensize(2)\r
\r
    # Compute polar coordinates of all p vertices\r
    vertices = []\r
    for i in range(p):\r
        angle = (2 * math.pi * i) / p - (math.pi / 2)\r
        x = cx + radius * math.cos(angle)\r
        y = cy + radius * math.sin(angle)\r
        vertices.append((x, y))\r
\r
    # Connect vertices stepping by stride q\r
    current_idx = 0\r
    t.goto(vertices[0])\r
    t.pendown()\r
\r
    for _ in range(p):\r
        current_idx = (current_idx + q) % p\r
        t.goto(vertices[current_idx])\r
\r
def demonstrate_star_family():\r
    screen = turtle.Screen()\r
    screen.title("Star Polygon Schläfli Family - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
\r
    # 1. 5-pointed star {5/2} (theta = 144°)\r
    draw_star_polygon(t, -250, 0, p=5, q=2, radius=80, color="#fbbf24")\r
\r
    # 2. 7-pointed star {7/2} (theta = 102.86°)\r
    draw_star_polygon(t, -80, 0, p=7, q=2, radius=80, color="#38bdf8")\r
\r
    # 3. 7-pointed acute star {7/3} (theta = 154.29°)\r
    draw_star_polygon(t, 90, 0, p=7, q=3, radius=80, color="#34d399")\r
\r
    # 4. 8-pointed star {8/3} (theta = 135°)\r
    draw_star_polygon(t, 260, 0, p=8, q=3, radius=80, color="#f43f5e")\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    demonstrate_star_family()\r
`,v=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 4 - Angle mathematics in star polygons and mandalas\r
File: multi_pointed_mandala_stars.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates drawing multi-pointed geometric star mandalas by rotating\r
a 5-pointed star motif around a central point across 12 radial spokes.\r
"""\r
\r
import turtle\r
\r
def draw_star_mandala():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Pointed Star Mandala - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    spokes = 12\r
    star_size = 110\r
\r
    for spoke in range(spokes):\r
        t.color("#fbbf24" if spoke % 2 == 0 else "#38bdf8")\r
\r
        # Draw 5-pointed star (turn angle = 144°)\r
        for _ in range(5):\r
            t.forward(star_size)\r
            t.right(144)\r
\r
        # Pivot to next spoke\r
        t.left(360 / spokes)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_star_mandala()\r
`,q=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 4 - Angle mathematics in star polygons and mandalas\r
File: islamic_octagram_rosette.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates constructing the 8-pointed Islamic Star (Rub el Hizb / Octagram)\r
by overlaying two concentric squares rotated by 45 degrees.\r
"""\r
\r
import turtle\r
\r
def draw_octagram():\r
    screen = turtle.Screen()\r
    screen.title("Islamic 8-Pointed Star Rosette - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    side = 140\r
\r
    # Draw first square\r
    t.penup(); t.goto(-side / 2, side / 2); t.pendown()\r
    t.color("#38bdf8", "#0284c7")\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(side)\r
        t.right(90)\r
    t.end_fill()\r
\r
    # Draw second square rotated 45 degrees\r
    t.penup(); t.goto(0, 0); t.pendown()\r
    t.setheading(45)\r
    t.penup(); t.forward(side * 0.7071); t.left(135); t.pendown()\r
    t.color("#fbbf24", "#d97706")\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(side)\r
        t.right(90)\r
    t.end_fill()\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_octagram()\r
`,_=`================================================================================\r
  TOPIC 4: ANGLE MATHEMATICS IN STAR POLYGONS AND MANDALAS\r
  MODULE: 005_003 - Turtle Patterns & Geometric Mathematics\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A STAR POLYGON?\r
--------------------------------------------------------------------------------\r
A regular star polygon is denoted by the Schläfli symbol {p/q}:\r
- p = number of vertices (points)\r
- q = density / step stride (how many vertices to skip when connecting lines)\r
- Condition: q and p must be coprime (gcd(p, q) == 1), and 1 < q < p/2.\r
\r
2. STAR POLYGON ANGLE THEOREMS\r
--------------------------------------------------------------------------------\r
1. Exterior Turn Angle:\r
   theta = (q * 360) / p\r
\r
2. Pentagram {5/2} (Classic 5-Pointed Star):\r
   - p = 5, q = 2\r
   - theta = (2 * 360) / 5 = 144°\r
   - Internal tip angle: 180° - 144° = 36°\r
\r
3. Heptagrams {7/2} and {7/3}:\r
   - {7/2}: theta = (2 * 360) / 7 = 102.86° (wide star)\r
   - {7/3}: theta = (3 * 360) / 7 = 154.29° (acute sharp star)\r
\r
4. Octagram {8/3}:\r
   - theta = (3 * 360) / 8 = 135°\r
\r
3. COMPOUND STARS & ISLAMIC GEOMETRY\r
--------------------------------------------------------------------------------\r
When gcd(p, q) > 1, the star decomposes into multiple overlapping polygons:\r
- {6/2} = 2 overlapping triangles (Hexagram / Star of David)\r
- {8/2} = 2 overlapping squares (Octagram / Rub el Hizb)\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,j=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes starPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`,M=()=>{const[i,m]=u.useState("5_2"),l={"5_2":{name:"Pentagram {5/2}",p:5,q:2,turn:144,tip:36,color:"#fbbf24",desc:"Classic 5-pointed star with golden ratio intersections."},"7_2":{name:"Heptagram {7/2}",p:7,q:2,turn:102.86,tip:77.14,color:"#38bdf8",desc:"Wide 7-pointed star with obtuse vertex tips."},"7_3":{name:"Acute Heptagram {7/3}",p:7,q:3,turn:154.29,tip:25.71,color:"#34d399",desc:"Sharp needle-pointed 7-pointed star."},"8_3":{name:"Octagram {8/3}",p:8,q:3,turn:135,tip:45,color:"#f43f5e",desc:"8-pointed regular star with 135° turns."},"8_2":{name:"Islamic Octagram {8/2}",p:8,q:2,turn:90,tip:90,color:"#a78bfa",desc:"Compound star formed by two 45°-rotated squares (Rub el Hizb)."}},r=l[i]||l["5_2"],h=[{name:"Star Turn: (q * 360) / p",returnType:"float / deg",purpose:"Steering turn angle for regular star polygon with p vertices and stride q.",usage:"turn = (q * 360.0) / p"},{name:"Schläfli Symbol: {p/q}",returnType:"Fraction Notation",purpose:"Classifies star topology where gcd(p, q) == 1 for unicursal continuous stars.",usage:"p = vertices, q = density"},{name:"Compound Stars: gcd(p,q) > 1",returnType:"Overlapping Polygons",purpose:"Decomposes into gcd(p, q) overlapping regular polygons (e.g. 2 squares for {8/2}).",usage:"draw_rotated_squares(offset=45)"},{name:"Radial Star Mandala: 360 / N",returnType:"Rotational Rosette",purpose:"Rotates star motifs across N radial spokes to construct kaleidoscopic mandalas.",usage:"for _ in range(12): draw_star(); t.left(30)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:j}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_003 · Turtle Patterns & Geometric Mathematics · Topic 4"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-rose-300 to-indigo-400 bg-clip-text text-transparent",children:"Angle Mathematics in Star Polygons & Mandalas"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Master the Schläfli symbol ",e.jsx("code",{className:"text-amber-300 font-mono",children:"{p/q}"}),". Derive the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"144°"})," pentagram turn rule, construct Islamic 8-pointed octagrams, and engineer rotational sacred geometry mandalas."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsxs("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:["⭐ Schläfli ","{p/q}"," Theorem"]}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 θ = (q × 360°) / p"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🕌 Islamic Octagrams & Mandalas"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"⭐"})," Interactive Star Polygon & Schläfli Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a star polygon to inspect its vertex topology, stride density, and steering turn angle."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:Object.entries(l).map(([t,a])=>e.jsx("button",{onClick:()=>m(t),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${i===t?"bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:a.name},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 300 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-xs h-auto",children:[e.jsx("circle",{cx:"150",cy:"120",r:"85",fill:"none",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3,3"}),i==="8_2"?e.jsxs("g",{children:[e.jsx("rect",{x:"90",y:"60",width:"120",height:"120",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("rect",{x:"90",y:"60",width:"120",height:"120",fill:"none",stroke:"#fbbf24",strokeWidth:"2.5",transform:"rotate(45 150 120)"})]}):(()=>{const a=r.p,g=r.q,s=[];for(let n=0;n<a;n++){const p=n*2*Math.PI/a-Math.PI/2;s.push({x:150+85*Math.cos(p),y:120+85*Math.sin(p)})}const d=[];let o=0;d.push(`${s[0].x},${s[0].y}`);for(let n=0;n<a;n++)o=(o+g)%a,d.push(`${s[o].x},${s[o].y}`);return e.jsx("polyline",{points:d.join(" "),fill:`${r.color}22`,stroke:r.color,strokeWidth:"3",strokeLinejoin:"round"})})(),e.jsx("circle",{cx:"150",cy:"120",r:"4",fill:"#ffffff"}),e.jsx("text",{x:"150",y:"140",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Center (0,0)"})]})}),e.jsxs("div",{className:"space-y-3 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-amber-400 flex items-center justify-between",children:[e.jsx("span",{children:r.name}),e.jsxs("span",{className:"font-mono text-xs px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30",children:["p=",r.p,", q=",r.q]})]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-[11px]",children:r.desc}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Exterior Turn Angle"}),e.jsxs("div",{className:"text-lg font-mono font-bold text-sky-400",children:[r.turn.toFixed(1),"°"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"(q × 360°) / p"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Point Tip Angle"}),e.jsxs("div",{className:"text-lg font-mono font-bold text-emerald-400",children:[r.tip.toFixed(1),"°"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"180° - Turn Angle"})]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Star Polygon Mathematical Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Star Topology"}),e.jsxs("th",{className:"py-3 px-4",children:["Schläfli ","{p/q}"]}),e.jsx("th",{className:"py-3 px-4",children:"Turn Formula"}),e.jsx("th",{className:"py-3 px-4",children:"Python Expression"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:h.map((t,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 text-xs",children:t.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Star Polygon Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(c,{fileModule:w,title:"star_polygon_schlafli.py",highlightLines:[19,20,21,29,30]}),e.jsx(c,{fileModule:v,title:"multi_pointed_mandala_stars.py",highlightLines:[19,23,24,28]}),e.jsx(c,{fileModule:q,title:"islamic_octagram_rosette.py",highlightLines:[18,22,27,29]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-amber-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🕌"})," Barrackpore Heritage Expo: Rub el Hizb Islamic Star"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita and Mahima recreate traditional Mughal architectural tessellations by constructing the 8-pointed Rub el Hizb octagram. By overlaying two filled squares rotated by 45 degrees, they demonstrate how compound star mathematics (",e.jsx("code",{className:"text-amber-300 font-mono",children:"{8/2}"}),") forms the foundation of historical tile geometry."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"⭐"})," Jadavpur Mathematics Festival: 12-Spoke Star Mandala"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu programs a 12-spoke rotational mandala where each spoke draws a 5-pointed star (",e.jsx("code",{className:"text-sky-300 font-mono",children:"144°"})," turns) and rotates ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"30°"}),". The overlapping golden ratio diagonals produce an intricate sacred geometry mandala for the university tech festival."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Star Polygon Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Using 72° Instead of 144° for a Star"}),e.jsxs("p",{className:"text-slate-400",children:["Turning 72° draws a regular pentagon, NOT a star! A 5-pointed star requires skipping a vertex, turning ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"2 × 72° = 144°"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Non-Coprime Stride Deadlock"}),e.jsxs("p",{className:"text-slate-400",children:["Trying to draw ","{6/2}"," as a single continuous line loops over 3 vertices endlessly. When ",e.jsx("code",{className:"text-amber-300 font-mono",children:"gcd(p, q) > 1"}),", multiple distinct polygons must be drawn."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Even-Odd Center Fill Hollowing"}),e.jsxs("p",{className:"text-slate-400",children:["Using ",e.jsx("code",{className:"text-rose-300",children:"begin_fill()"})," on self-intersecting stars under even-odd parity leaves the central pentagon empty. Use convex facet fills for solid coloring."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Hardcoded Star Angles"}),e.jsxs("p",{className:"text-slate-400",children:["Hardcoding 144° prevents generating 7-pointed or 8-pointed stars. Always use the universal equation ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"(q * 360) / p"}),"!"]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the universal star polygon turn formula: theta = (q * 360) / p","I understand why a 5-pointed star {5/2} requires a 144° turn angle","I know why p and q must be coprime (gcd=1) for single-path stars","I can construct the Islamic 8-pointed Rub el Hizb using two 45°-rotated squares","I know how to build multi-spoke star mandalas using radial pivots (360 / spokes)","I understand the difference between wide stars ({7/2}) and acute stars ({7/3})"].map((t,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why the diagonals of a regular 5-pointed star divide each other in the Golden Ratio (",e.jsx("code",{className:"text-amber-300 font-mono",children:"phi ≈ 1.618"}),")!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How increasing the stride ",e.jsx("code",{className:"text-sky-300 font-mono",children:"q"})," from 2 to 3 in a 7-pointed star makes the points dramatically sharper and more needle-like!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Overlay 3 equilateral triangles rotated by 40° to construct an Islamic 9-pointed star (","{9/3}",")!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Star polygons bridge pure number theory (modular arithmetic, coprimality, and Euclidean GCD) with classical geometry and artistic ornamental design. In computational graphics, understanding ",e.jsx("strong",{children:"non-convex winding topologies"})," is critical for polygon rasterization, vector font glyph rendering (TrueType/OpenType), and CAD triangulation algorithms."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(f,{title:"Star Polygons & Mandala Geometry FAQs",questions:b})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(y,{content:_,title:"Topic 4: Star Polygons Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(x,{note:"When we teach star polygons at Coder & AccoTax in Barrackpore and Kolkata, the leap from regular polygons (360/N) to star polygons ((q*360)/N) is a thrilling revelation for students. When they discover that simply multiplying by density 'q' transforms a Pentagon into a glowing Star, and that two 45-degree squares create sacred Islamic architecture, programming transforms into an exhilarating creative superpower!"})})]})]})};export{M as default};

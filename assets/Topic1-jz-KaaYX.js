import{b as g,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as h}from"./TeacherSukantaHui-DerPxfxp.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as p}from"./FAQTemplate-BHhlgA96.js";import{P as x}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CH1iX9C8.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const m=[{question:"Why does the sum of exterior angles of any closed convex polygon always equal 360 degrees?",shortAnswer:"Because completing the polygon requires the turtle to make one complete rotational heading revolution back to its starting orientation.",explanation:"Any closed loop on a 2D plane represents a total angular deviation of 360° (2π radians).",hint:"How many degrees are in one full circle?",level:"basic",codeExample:"# Sum of turns = 360 degrees"},{question:"What is the exterior turn angle for an equilateral triangle?",shortAnswer:"120 degrees.",explanation:"360 / 3 = 120°. (Note: The interior angle is 60°, and 180° - 60° = 120°).",hint:"What is 360 divided by 3?",level:"basic",codeExample:"t.left(120)  # for triangle"},{question:"What is the exterior turn angle for a regular pentagon?",shortAnswer:"72 degrees.",explanation:"360 / 5 = 72° exterior turn (interior angle is 108°).",hint:"What is 360 divided by 5?",level:"basic",codeExample:"t.left(72)  # for pentagon"},{question:"What is the formula for the interior angle of a regular N-sided polygon?",shortAnswer:"((N - 2) * 180) / N degrees (or 180 - (360 / N)).",explanation:"The interior and exterior angles at any vertex lie on a straight line and sum to 180°.",hint:"How is the interior angle related to 180 minus exterior angle?",level:"moderate",codeExample:"interior_angle = 180 - (360 / n)"},{question:"Why do beginners mistakenly use 60 degrees when drawing a triangle?",shortAnswer:"Because they confuse the interior angle (60°) with the required steering exterior turn (120°).",explanation:"Turning 60° produces a 6-sided hexagon instead of a 3-sided triangle.",hint:"Does the turtle turn the interior or exterior angle?",level:"basic",codeExample:"# BUG: t.left(60) draws a hexagon, not a triangle!"},{question:"What is the exterior turn angle for a regular octagon?",shortAnswer:"45 degrees.",explanation:"360 / 8 = 45°.",hint:"What is 360 divided by 8?",level:"basic",codeExample:"t.left(45)  # for octagon"},{question:"What is the exterior turn angle for a regular dodecagon (12 sides)?",shortAnswer:"30 degrees.",explanation:"360 / 12 = 30°.",hint:"What is 360 divided by 12?",level:"basic",codeExample:"t.left(30)  # for dodecagon"},{question:"How do you calculate the side length of a regular polygon from its circumscribed radius R?",shortAnswer:"side = 2 * R * sin(pi / N).",explanation:"Trigonometric chord formula relating inscribed polygon edge length to radius.",hint:"What trigonometric formula relates chord length to circle radius?",level:"advanced",codeExample:`import math
side = 2 * r * math.sin(math.pi / n)`},{question:"How do you calculate vertex coordinates of an N-gon using polar coordinates?",shortAnswer:"x = cx + R * cos(2 * pi * i / N), y = cy + R * sin(2 * pi * i / N).",explanation:"Polar to Cartesian conversion places all N vertices evenly on a circle of radius R.",hint:"What equations convert polar radius and angle into (x, y)?",level:"advanced",codeExample:`x = cx + r * math.cos(angle)
y = cy + r * math.sin(angle)`},{question:"What is an apothem in regular polygon geometry?",shortAnswer:"The perpendicular distance from the center of the polygon to the midpoint of any side.",explanation:"apothem = R * cos(pi / N) = side / (2 * tan(pi / N)).",hint:"What is the distance from polygon center to side midpoint?",level:"expert",codeExample:"apothem = r * math.cos(math.pi / n)"},{question:"How do you calculate the area of a regular N-sided polygon in Python?",shortAnswer:"Area = (1/2) * Perimeter * Apothem = (N * side^2) / (4 * tan(pi / N)).",explanation:"Standard regular polygon area formula.",hint:"How is area related to perimeter and apothem?",level:"expert",codeExample:"area = (n * (side ** 2)) / (4 * math.tan(math.pi / n))"},{question:"What is a non-convex (concave) polygon?",shortAnswer:"A polygon where at least one interior angle exceeds 180 degrees (having internal indentations).",explanation:"The 360/N rule applies strictly to convex regular polygons.",hint:"What type of polygon has indentations and angles > 180°?",level:"moderate",codeExample:"# Concave polygon has reflex angles"},{question:"What happens as N approaches infinity in the 360/N formula?",shortAnswer:"The exterior turn approaches 0 degrees, and the polygon converges into a smooth continuous circle.",explanation:"Calculus limit: lim (N->inf) of N-gon = Circle.",hint:"What geometric shape is the limit of an infinite-sided polygon?",level:"moderate",codeExample:"# Circle approximation"},{question:"How do you draw a regular heptagon (7 sides) in Python Turtle?",shortAnswer:"Loop 7 times with `t.forward(length)` and `t.left(360 / 7)`.",explanation:"360 / 7 ≈ 51.42857° floating-point turn angle.",hint:"Can turn angles be floating-point numbers?",level:"basic",codeExample:`for _ in range(7):
    t.forward(70); t.left(360 / 7)`},{question:"Why does `360 / n` use float division in Python 3?",shortAnswer:"Because `360 // n` integer division drops decimal remainders, causing imperfect closure and gaps in heptagons and 11-gons.",explanation:"True float division `/` ensures mathematically exact rotational angle accumulation.",hint:"Why is true division `/` better than floor division `//` for angles?",level:"moderate",codeExample:"# Always use 360 / n, NOT 360 // n"},{question:"How do you draw concentric nested regular polygons with matching side count?",shortAnswer:"Loop over increasing side lengths while adjusting starting corner coordinates.",explanation:"Scaling side lengths while keeping angle constant produces nested concentric geometric frames.",hint:"How do you scale nested polygons?",level:"moderate",codeExample:`for s in range(20, 120, 20):
    draw_polygon(sides=6, length=s)`},{question:"What is the sum of interior angles of a hexagon?",shortAnswer:"720 degrees.",explanation:"(6 - 2) * 180° = 4 * 180° = 720°.",hint:"What is (6 - 2) * 180?",level:"basic",codeExample:"# Hexagon interior sum = 720°"},{question:"How do you write a universal parameterized `polygon(t, sides, length)` function in Python?",shortAnswer:"Accept `sides` and `length`, calculate `angle = 360 / sides`, and loop `sides` times.",explanation:"Parameterized functions represent clean functional abstraction.",hint:"What parameters should a reusable polygon function accept?",level:"basic",codeExample:`def polygon(t, sides, length):
    for _ in range(sides): t.forward(length); t.left(360/sides)`},{question:"What is a Reuleaux Triangle?",shortAnswer:"A curved geometric shape of constant width formed by intersecting 3 circular arcs centered at the vertices of an equilateral triangle.",explanation:"Combines triangle vertex geometry with circular arc drawing.",hint:"What curved shape is constructed on top of an equilateral triangle?",level:"expert",codeExample:"# Reuleaux triangle generator"},{question:"How do you draw a tessellated honeycomb grid using hexagons?",shortAnswer:"Arrange hexagons where adjacent columns are spaced by `1.5 * side` and rows by `sqrt(3) * side`.",explanation:"Regular hexagons tile the 2D Euclidean plane with zero gaps.",hint:"Why are hexagons ideal for tiling 2D surfaces?",level:"expert",codeExample:"# Hexagonal tessellation spacing"},{question:"What is the exterior angle for a regular icosagon (20 sides)?",shortAnswer:"18 degrees.",explanation:"360 / 20 = 18°.",hint:"What is 360 divided by 20?",level:"basic",codeExample:"t.left(18)  # for 20-gon"},{question:"How do you draw a polygon centered at origin (0,0) without polar coordinates?",shortAnswer:"Calculate apothem and half-side, position turtle at `(-side/2, -apothem)`, and draw with `360/N` turns.",explanation:"Offsetting by apothem centers the polygon bounding box around the origin.",hint:"How does apothem offset center a polygon?",level:"advanced",codeExample:"# Center offset with apothem"},{question:"Can polygons have negative side lengths in Turtle?",shortAnswer:"Passing negative length moves the turtle backward while turning, drawing an inverted polygon.",explanation:"Negative values invert forward vector displacement direction.",hint:"What happens when forward receives a negative distance?",level:"moderate",codeExample:"t.forward(-50) # Moves backward"},{question:"What is the total sum of exterior angles for an irregular non-self-intersecting polygon?",shortAnswer:"Still exactly 360 degrees.",explanation:"The Total Turning Theorem holds for ALL simple closed polygons regardless of side lengths.",hint:"Does the 360° total turning rule hold for irregular polygons?",level:"moderate",codeExample:"# Total exterior sum remains 360°"},{question:"How do you fill a regular polygon with a gradient in Turtle?",shortAnswer:"Draw concentric shrinking polygons inside with gradually shifting fill colors.",explanation:"Layering shrinking concentric polygons creates a step-gradient illusion.",hint:"How do shrinking polygons create gradient fills?",level:"advanced",codeExample:"# Concentric polygon gradient"},{question:"How do you draw an equilateral triangle pointing downwards?",shortAnswer:"Start with `t.setheading(0)` and turn `t.right(120)` instead of `t.left(120)`.",explanation:"Clockwise right turns invert the vertical orientation of the polygon.",hint:"How does right turn change polygon orientation?",level:"basic",codeExample:"for _ in range(3): t.forward(100); t.right(120)"},{question:"How do you verify mathematically that a polygon has closed completely?",shortAnswer:"Check that `t.heading()` has returned to initial angle and `t.distance(start_x, start_y) < 0.001`.",explanation:"Floating-point distance checking verifies closed loop topology.",hint:"What query checks if turtle returned to starting coordinates?",level:"advanced",codeExample:"assert t.distance(start_pos) < 0.01"},{question:"What is the golden ratio polygon?",shortAnswer:"The regular pentagon, where the ratio of diagonal length to side length is the Golden Ratio (phi ≈ 1.618).",explanation:"Pentagons and pentagrams contain inherent golden ratio proportions.",hint:"Which 5-sided polygon contains the golden ratio?",level:"advanced",codeExample:"# Golden ratio phi in pentagons"},{question:"Why should `math.radians()` or `2 * math.pi` be used when computing polar coordinates?",shortAnswer:"Because Python's `math.sin()` and `math.cos()` functions expect angle arguments in radians, not degrees.",explanation:"Converting degrees to radians (`deg * pi / 180`) is required for Python's math library.",hint:"Do Python math trig functions use degrees or radians?",level:"moderate",codeExample:"rad = math.radians(deg)"},{question:"What is the summary golden rule of polygon mathematics in Python graphics?",shortAnswer:"Always steer by the exterior turn angle `theta = 360 / N`, use true division (`/`), and use polar coordinates `(R*cos, R*sin)` when centering shapes on origin.",explanation:"This guarantees mathematically exact geometry and effortless scaling across all polygon counts.",hint:"What rule governs all regular polygon vector geometry?",level:"basic",codeExample:"# theta = 360 / N | polar: (cx + R*cos, cy + R*sin)"}],u=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 1 - Polygon mathematics: The 360/n degree exterior angle rule\r
File: polygon_mathematics_theorem.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the mathematical derivation of regular polygon geometry:\r
- Total exterior angle sum = 360°\r
- Single exterior turn angle theta = 360 / n\r
- Single interior angle phi = 180 - (360 / n) = ((n - 2) * 180) / n\r
"""\r
\r
import turtle\r
\r
def draw_regular_polygon(t, x, y, sides, side_length, stroke_color, fill_color):\r
    """Draws any regular N-sided polygon at given coordinate."""\r
    exterior_angle = 360.0 / sides\r
    interior_angle = ((sides - 2) * 180.0) / sides\r
\r
    print(f"Polygon with {sides} sides:")\r
    print(f"  Exterior Turn Angle: {exterior_angle:.2f}°")\r
    print(f"  Interior Angle     : {interior_angle:.2f}°")\r
\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color(stroke_color, fill_color)\r
    t.pensize(2)\r
\r
    t.begin_fill()\r
    for _ in range(sides):\r
        t.forward(side_length)\r
        t.left(exterior_angle)\r
    t.end_fill()\r
\r
def demonstrate_polygon_family():\r
    screen = turtle.Screen()\r
    screen.title("Polygon Mathematics Family - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(5)\r
\r
    # 1. Triangle (n=3, ext=120°)\r
    draw_regular_polygon(t, -300, 50, sides=3, side_length=90, stroke_color="#38bdf8", fill_color="#0284c7")\r
\r
    # 2. Square (n=4, ext=90°)\r
    draw_regular_polygon(t, -160, 50, sides=4, side_length=80, stroke_color="#34d399", fill_color="#065f46")\r
\r
    # 3. Pentagon (n=5, ext=72°)\r
    draw_regular_polygon(t, -10, 50, sides=5, side_length=65, stroke_color="#fbbf24", fill_color="#d97706")\r
\r
    # 4. Octagon (n=8, ext=45°)\r
    draw_regular_polygon(t, 150, 50, sides=8, side_length=45, stroke_color="#f43f5e", fill_color="#be123c")\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    demonstrate_polygon_family()\r
`,f=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 1 - Polygon mathematics: The 360/n degree exterior angle rule\r
File: circumscribed_radius_polygons.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates drawing centered regular polygons by connecting vertex points\r
lying on a circumscribed circle of radius R using trigonometric polar coordinates:\r
x = cx + R * cos(2 * pi * i / n)\r
y = cy + R * sin(2 * pi * i / n)\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_circumscribed_polygon(t, cx, cy, radius, sides, color):\r
    t.penup()\r
    t.color(color)\r
    t.pensize(2)\r
\r
    # Compute polar coordinates of all vertices\r
    vertices = []\r
    for i in range(sides):\r
        angle = (2 * math.pi * i) / sides - (math.pi / 2)  # Point apex upward\r
        x = cx + radius * math.cos(angle)\r
        y = cy + radius * math.sin(angle)\r
        vertices.append((x, y))\r
\r
    # Connect vertices\r
    t.goto(vertices[0])\r
    t.pendown()\r
    for vx, vy in vertices[1:]:\r
        t.goto(vx, vy)\r
    t.goto(vertices[0])\r
\r
def draw_nested_circumscribed_polygons():\r
    screen = turtle.Screen()\r
    screen.title("Circumscribed Polar Polygons - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
\r
    radius = 160\r
    # Overlay Triangle(3), Square(4), Pentagon(5), Hexagon(6), Octagon(8)\r
    polygon_specs = [\r
        (3, "#f43f5e"),\r
        (4, "#fbbf24"),\r
        (5, "#34d399"),\r
        (6, "#38bdf8"),\r
        (8, "#a78bfa"),\r
        (12, "#ffffff")\r
    ]\r
\r
    for sides, color in polygon_specs:\r
        draw_circumscribed_polygon(t, 0, 0, radius, sides, color)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_nested_circumscribed_polygons()\r
`,y=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 1 - Polygon mathematics: The 360/n degree exterior angle rule\r
File: interior_vs_exterior_visualizer.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Visualizes the fundamental geometric distinction between the Interior Angle\r
and the Exterior Turn Angle of a regular pentagon.\r
"""\r
\r
import turtle\r
\r
def visualize_angles():\r
    screen = turtle.Screen()\r
    screen.title("Interior vs Exterior Angle Visualizer - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(3)\r
    t.pensize(3)\r
\r
    # Draw regular pentagon (n=5, ext=72°, int=108°)\r
    side = 140\r
    t.penup(); t.goto(-100, -80); t.pendown()\r
    t.color("#38bdf8")\r
\r
    # Step 1: Forward base\r
    t.forward(side)\r
\r
    # Show extended dashed guideline for exterior turn\r
    t.color("#94a3b8")\r
    t.pensize(1)\r
    for _ in range(5):\r
        t.forward(10); t.penup(); t.forward(10); t.pendown()\r
    t.backward(100)\r
\r
    # Show exterior turn (72°)\r
    t.color("#fbbf24")\r
    t.pensize(3)\r
    t.left(72)\r
    t.forward(side)\r
\r
    # Complete remaining 3 sides of pentagon\r
    t.color("#38bdf8")\r
    for _ in range(3):\r
        t.left(72)\r
        t.forward(side)\r
\r
    # Write annotation labels\r
    t.penup(); t.goto(40, -65)\r
    t.color("#34d399")\r
    t.write("Interior Angle: 108°", font=("Arial", 10, "bold"))\r
\r
    t.goto(150, -65)\r
    t.color("#fbbf24")\r
    t.write("Exterior Turn: 72°", font=("Arial", 10, "bold"))\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    visualize_angles()\r
`,b=`================================================================================\r
  TOPIC 1: POLYGON MATHEMATICS: THE 360/N DEGREE EXTERIOR ANGLE RULE\r
  MODULE: 005_003 - Turtle Patterns & Geometric Mathematics\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE FUNDAMENTAL POLYGON THEOREM\r
--------------------------------------------------------------------------------\r
When a turtle traces any closed convex regular polygon with \`N\` sides, it starts\r
and ends pointing in the exact same direction. Therefore, the sum of all exterior\r
turn angles must equal exactly 360 degrees (one full revolution).\r
\r
Key Equations:\r
1. Single Exterior Turn Angle:\r
   theta = 360 / N\r
\r
2. Single Interior Angle:\r
   phi = 180 - theta = ((N - 2) * 180) / N\r
\r
3. Sum of All Interior Angles:\r
   Sum = (N - 2) * 180\r
\r
2. EXTERIOR VS INTERIOR ANGLES REFERENCE TABLE\r
--------------------------------------------------------------------------------\r
  Polygon Name | Sides (N) | Exterior Turn (360/N) | Interior Angle (180-Ext)\r
  -------------|-----------|-----------------------|-------------------------\r
  Triangle     | 3         | 120°                  | 60°\r
  Square       | 4         | 90°                   | 90°\r
  Pentagon     | 5         | 72°                   | 108°\r
  Hexagon      | 6         | 60°                   | 120°\r
  Heptagon     | 7         | 51.43°                | 128.57°\r
  Octagon      | 8         | 45°                   | 135°\r
  Decagon      | 10        | 36°                   | 144°\r
  Dodecagon    | 12        | 30°                   | 150°\r
  Circle approx| 360       | 1°                    | 179°\r
\r
3. CIRCUMSCRIBED POLAR COORDINATES (CENTERED POLYGONS)\r
--------------------------------------------------------------------------------\r
To center an N-sided polygon on \`(cx, cy)\` with circumscribed radius \`R\`:\r
For each vertex \`i\` from \`0\` to \`N - 1\`:\r
- angle = (2 * pi * i / N) - (pi / 2)  # -pi/2 points apex up\r
- vx = cx + R * cos(angle)\r
- vy = cy + R * sin(angle)\r
\r
Connecting these vertices produces a perfectly centered regular polygon!\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,v=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes anglePulse {
  0%, 100% { stroke-width: 2px; }
  50% { stroke-width: 4px; }
}
`,P=()=>{const[t,d]=g.useState(5),a={3:{name:"Equilateral Triangle",ext:120,int:60,sum:180,color:"#38bdf8"},4:{name:"Square",ext:90,int:90,sum:360,color:"#34d399"},5:{name:"Regular Pentagon",ext:72,int:108,sum:540,color:"#fbbf24"},6:{name:"Regular Hexagon",ext:60,int:120,sum:720,color:"#f43f5e"},8:{name:"Regular Octagon",ext:45,int:135,sum:1080,color:"#a78bfa"},12:{name:"Regular Dodecagon",ext:30,int:150,sum:1800,color:"#2dd4bf"}},c=[{name:"Exterior Turn: 360.0 / N",returnType:"float / deg",purpose:"The steering turn angle required at each vertex to close a regular N-sided polygon.",usage:"exterior_angle = 360.0 / sides"},{name:"Interior Angle: 180 - (360/N)",returnType:"float / deg",purpose:"The internal corner angle inside the polygon ((N - 2) * 180 / N).",usage:"interior_angle = ((n - 2) * 180) / n"},{name:"Total Interior Sum: (N - 2) * 180",returnType:"float / deg",purpose:"The sum of all interior angles across all N vertices.",usage:"sum_angles = (n - 2) * 180"},{name:"Polar Vertices: R * (cos θ, sin θ)",returnType:"Tuple List [(x, y)]",purpose:"Calculates centered vertex coordinates along a circumscribed circle of radius R.",usage:"x = cx + R * math.cos(angle)"}],n=a[t]||a[5];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:v}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_003 · Turtle Patterns & Geometric Mathematics · Topic 1"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent",children:["Polygon Mathematics: The ",e.jsx("span",{className:"font-mono",children:"360 / N"})," Exterior Angle Rule"]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Master the mathematical core of vector geometry. Discover why exterior turns sum to 360°, demystify interior vs exterior steering angles, and generate centered polygons with polar trigonometric coordinates."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 θ = 360° / N"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔍 Interior vs Exterior Theorem"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⭕ Circumscribed Polar Vertices"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," Polygon Mathematics Theorem Visualizer"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a polygon to inspect its mathematical properties, steering angles, and polar layout."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:[3,4,5,6,8,12].map(r=>e.jsxs("button",{onClick:()=>d(r),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t===r?"bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:["N = ",r," (",a[r].name.split(" ")[1]||a[r].name,")"]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 300 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-xs h-auto",children:[e.jsx("circle",{cx:"150",cy:"120",r:"85",fill:"none",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3,3"}),(()=>{const r=[];for(let s=0;s<t;s++){const l=s*2*Math.PI/t-Math.PI/2;r.push(`${150+85*Math.cos(l)},${120+85*Math.sin(l)}`)}return e.jsx("polygon",{points:r.join(" "),fill:`${n.color}22`,stroke:n.color,strokeWidth:"3",strokeLinejoin:"round"})})(),e.jsx("circle",{cx:"150",cy:"120",r:"4",fill:"#ffffff"}),e.jsx("text",{x:"150",y:"140",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Center (0,0)"})]})}),e.jsxs("div",{className:"space-y-3 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-amber-400 flex items-center justify-between",children:[e.jsx("span",{children:n.name}),e.jsxs("span",{className:"font-mono text-xs px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30",children:["N = ",t]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Exterior Turn (360/N)"}),e.jsxs("div",{className:"text-lg font-mono font-bold text-sky-400",children:[n.ext,"°"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Turtle steering angle"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Interior Angle (180-Ext)"}),e.jsxs("div",{className:"text-lg font-mono font-bold text-emerald-400",children:[n.int,"°"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Internal vertex angle"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Sum of All Interior Angles:"}),e.jsxs("span",{className:"font-mono font-bold text-purple-300",children:["(",t," - 2) × 180° = ",n.sum,"°"]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Polygon Mathematical Formula Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Mathematical Property"}),e.jsx("th",{className:"py-3 px-4",children:"Formula"}),e.jsx("th",{className:"py-3 px-4",children:"Geometric Meaning"}),e.jsx("th",{className:"py-3 px-4",children:"Python Expression"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:c.map((r,o)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 text-xs",children:r.usage})]},o))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Polygon Geometry Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:u,title:"polygon_mathematics_theorem.py",highlightLines:[12,13,26,27]}),e.jsx(i,{fileModule:f,title:"circumscribed_radius_polygons.py",highlightLines:[17,18,19,23,26]}),e.jsx(i,{fileModule:y,title:"interior_vs_exterior_visualizer.py",highlightLines:[16,27,28,32]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-amber-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur Geometry Olympiad: The 60° Triangle Trap"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When student Mahima was asked to draw an equilateral triangle, she initially programmed ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.left(60)"}),", producing a hexagon! Teacher Sukanta Hui guided her through the Exterior Turning Theorem: the turtle must turn ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"180° - 60° = 120°"})," to close the 3-sided triangle."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Barrackpore Science Center: Polar Hexagonal Honeycomb"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu uses polar trigonometric equations (",e.jsx("code",{className:"text-sky-300 font-mono",children:"x = R * cos(θ)"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"y = R * sin(θ)"}),") to calculate hexagon vertex coordinates. This enables him to generate perfectly centered honeycomb solar panels with zero coordinate distortion."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Polygon Mathematics Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Confusing Interior vs Exterior Turns"}),e.jsxs("p",{className:"text-slate-400",children:["Turtle turns the *exterior* supplementary angle (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"360/N"}),"), NOT the interior angle. Turning the interior angle draws the wrong polygon entirely."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Integer Division Truncation"}),e.jsxs("p",{className:"text-slate-400",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"360 // 7 = 51°"})," drops remainders, leaving a 3° open gap in heptagons. Always use true float division ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"360 / 7"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Forgetting Degrees vs Radians in Math"}),e.jsxs("p",{className:"text-slate-400",children:["Python's ",e.jsx("code",{className:"text-amber-300 font-mono",children:"math.sin()"})," expects radians. Passing raw degrees produces completely scrambled vertex coordinates. Always convert with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"math.radians()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Assuming (0,0) is Polygon Center"}),e.jsxs("p",{className:"text-slate-400",children:["Standard ",e.jsx("code",{className:"text-amber-300",children:"forward()/left()"})," polygons anchor at their bottom-left vertex. Use polar coordinates to place the center at (0,0)."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the exterior turn angle formula: theta = 360 / N","I understand why interior and exterior angles sum to 180° on a straight line","I can calculate the total interior angle sum: (N - 2) * 180°","I know why true float division (360 / N) is required to close odd polygons","I can calculate centered vertex coordinates using polar math (R * cos θ, R * sin θ)","I understand why math.sin and math.cos require radian angle arguments"].map((r,o)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},o))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why hexagonal tiling is the only regular polygon geometry (along with squares and triangles) that can tile a flat plane without gaps."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting ",e.jsx("code",{className:"text-sky-300 font-mono",children:"N = 50"})," turns the polygon into a virtually indistinguishable smooth circle!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Pass ",e.jsx("code",{className:"text-amber-300 font-mono",children:"angle = (2 * math.pi * i) / N - (math.pi / 2)"})," to orient the apex of any polygon pointing straight upwards!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In 3D computer graphics (OpenGL, Direct3D, WebGL), all complex 3D meshes (characters, sports cars, terrain) are composed entirely of ",e.jsx("strong",{children:"low-poly triangles and regular polygons"}),". Understanding the exact trigonometry and angle mathematics governing 2D regular polygons forms the direct foundation for 3D vertex shaders and matrix transformations."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(p,{title:"Polygon Mathematics & 360/N Rule FAQs",questions:m})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(x,{content:b,title:"Topic 1: Polygon Mathematics Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(h,{note:"When we teach geometry at Coder & AccoTax in Barrackpore and Kolkata, the 360/N exterior angle rule is the single most important mathematical concept in procedural graphics. Always encourage students to write out the equation 'theta = 360 / N' before typing a single line of code. Once students realize that a single formula controls triangles, octagons, and circles, geometry transforms from abstract textbook math into a vibrant, creative instrument!"})})]})]})};export{P as default};

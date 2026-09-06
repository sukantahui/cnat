import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as C}from"./TeacherSukantaHui-DDN87fI5.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{F as I}from"./FAQTemplate-BHhlgA96.js";import{P as H}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DEsnU7fn.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const D=[{question:"What are the four primary parameters in 2D graphic function design?",shortAnswer:"Position (x, y), Scale (radius/size), Orientation (rotation angle), and Color (fill/stroke).",explanation:"These four attributes form the complete mathematical specification for rendering 2D vector primitives.",hint:"What four properties fully describe a 2D shape on screen?",level:"basic",codeExample:"def draw_shape(t, x, y, size, rotation, color): ..."},{question:"How do you apply a rotation parameter to a shape in Python Turtle?",shortAnswer:"Call `t.setheading(rotation)` after moving to `(x, y)` and before drawing.",explanation:"Setting the heading aligns the turtle's forward vector with the desired angular orientation.",hint:"Which command sets absolute orientation before drawing starts?",level:"basic",codeExample:"t.setheading(rotation)"},{question:"How do you implement proportional scaling across a complex multi-segment shape?",shortAnswer:"Multiply all internal lengths, radii, and offsets by a uniform `scale` or `size` parameter.",explanation:"Uniform multiplication preserves the aspect ratio and relative component alignments of the shape.",hint:"How do you keep all parts proportional when resizing?",level:"basic",codeExample:`t.forward(40 * scale)
t.circle(10 * scale)`},{question:"What is an Affine Transformation in computer graphics?",shortAnswer:"A geometric transformation that preserves collinearity and ratios of distances (e.g. Translation, Rotation, Scaling).",explanation:"Parameterized functions implement affine transformations directly through Turtle commands.",hint:"What mathematical term encompasses translation, rotation, and scaling?",level:"moderate",codeExample:"# Translation → goto | Rotation → setheading | Scale → multiplier"},{question:"Why should rotation default to 0 in function signatures?",shortAnswer:"So the shape is drawn upright by default without forcing the caller to specify an angle every time.",explanation:"Sensible default arguments keep common use cases concise while enabling advanced rotations.",hint:"What is the standard default angle for upright shapes?",level:"basic",codeExample:"def draw_arrow(t, x, y, rotation=0): ..."},{question:"How do you calculate the side length of a regular polygon given its circumscribed radius `r` and side count `n`?",shortAnswer:"`side_length = 2 * r * sin(180 / n)`.",explanation:"Trigonometric chord formula accurately computes side lengths for any polygon radius.",hint:"What trigonometric formula relates polygon radius to side length?",level:"advanced",codeExample:"side = 2 * radius * math.sin(math.radians(180 / sides))"},{question:"How do you rotate a regular polygon around its geometric center rather than its bottom vertex?",shortAnswer:"Calculate the first vertex offset using polar coordinates `(x + r*cos(theta), y + r*sin(theta))`.",explanation:"Centering the anchor on the geometric centroid ensures rotational symmetry around `(x, y)`.",hint:"How do you offset the starting vertex for centroid-centered rotation?",level:"advanced",codeExample:"start_x = x + r * math.cos(math.radians(rotation))"},{question:"What is the difference between passing named colors ('cyan') vs hex codes ('#06b6d4')?",shortAnswer:"Named colors are limited to Tkinter presets; hex codes give access to over 16.7 million 24-bit TrueColor hues.",explanation:"Hex color parameterization enables curated modern color palettes.",hint:"Why are hex codes preferred for modern UI color styling?",level:"basic",codeExample:"draw_star(t, 0, 0, fill_color='#06b6d4')"},{question:"How can you parameterize stroke thickness in a drawing function?",shortAnswer:"Accept a `pensize` parameter and call `t.pensize(pensize)` at the start of the function.",explanation:"Allowing dynamic stroke weight enables both hairline accents and bold cartoon silhouettes.",hint:"Which parameter controls line stroke thickness?",level:"basic",codeExample:"def draw_rect(t, x, y, w, h, pensize=2): ..."},{question:"How do you draw a rotating pinwheel garden using parameterized functions?",shortAnswer:"Loop over coordinate positions and pass incrementing `rotation` and varying `petal_color` values.",explanation:"Looping over parameterized functions creates dynamic, varied procedural layouts.",hint:"How do you generate diverse flowers from a single function?",level:"moderate",codeExample:`for i, pt in enumerate(points):
    draw_flower(t, *pt, rotation=i*30)`},{question:"What happens if a negative radius is passed to `draw_circle` or `t.circle()`?",shortAnswer:"Turtle draws the circle in the opposite direction (to the right of the turtle instead of the left).",explanation:"Negative radii invert the curvature direction in Turtle graphics.",hint:"How does a negative radius alter circle curvature?",level:"moderate",codeExample:"t.circle(-50)  # Curves rightwards"},{question:"How do you validate parameter types and bounds inside a robust graphics function?",shortAnswer:"Use `isinstance()` checks and assertion bounds (e.g. `assert radius > 0`).",explanation:"Defensive input validation prevents cryptic visual bugs and infinite loops.",hint:"How do you ensure radius is positive and non-zero?",level:"advanced",codeExample:"if radius <= 0: raise ValueError('Radius must be positive')"},{question:"Why should `fill_color` and `border_color` be separate parameters?",shortAnswer:"To give callers the freedom to create filled shapes with contrasting, colored borders or transparent fills.",explanation:"Separating stroke and fill parameters provides complete styling flexibility.",hint:"Why distinguish fill color from border stroke color?",level:"basic",codeExample:"def draw_poly(t, x, y, fill_color, border_color='white'): ..."},{question:"How do you implement non-uniform scaling (stretching width and height independently)?",shortAnswer:"Accept separate `width` and `height` parameters or `scale_x` and `scale_y` multipliers.",explanation:"Independent axis scaling enables creating ellipses, rectangles, and stretched banners.",hint:"What parameters allow independent horizontal and vertical stretching?",level:"moderate",codeExample:"def draw_oval(t, x, y, width, height): ..."},{question:"How can you pass a list of points `[(x1, y1), (x2, y2)]` to draw a custom parameterized polygon?",shortAnswer:"Accept `points` as a list of tuples, move to `points[0]`, and loop `goto(px, py)` for subsequent points.",explanation:"Point array parameterization allows rendering arbitrary arbitrary vector meshes.",hint:"How do you render arbitrary vertex lists with Turtle?",level:"advanced",codeExample:`def draw_mesh(t, points):
    for pt in points: t.goto(*pt)`},{question:"What is polar coordinate conversion and why is it useful in parameterized circular arrays?",shortAnswer:"`x = cx + r * cos(theta)`, `y = cy + r * sin(theta)`; it places items evenly along a circular perimeter.",explanation:"Trigonometric polar conversion is the foundation for radial menus, clock ticks, and flowers.",hint:"What math converts radius and angle into Cartesian (x, y)?",level:"moderate",codeExample:`x = cx + r * math.cos(rad)
y = cy + r * math.sin(rad)`},{question:"How do default keyword arguments allow backward-compatible function enhancements?",shortAnswer:"Adding new parameters with default values (e.g. `rotation=0`) does not break existing calls that omit them.",explanation:"Default parameters maintain API compatibility across evolving codebases.",hint:"Why do default arguments prevent breaking existing function calls?",level:"advanced",codeExample:"def draw_house(t, x, y, size, rotation=0): ..."},{question:"How do you animate a rotating parameterized shape in a loop?",shortAnswer:"In a loop, call `t.clear()`, `draw_shape(t, x, y, rotation=angle)`, `screen.update()`, and increment `angle`.",explanation:"Passing an updated rotation angle in each frame produces fluid real-time animation.",hint:"How do you create rotation animation using parameterized functions?",level:"moderate",codeExample:`for angle in range(0, 360, 5):
    t.clear(); draw_shape(t, 0, 0, rotation=angle); screen.update()`},{question:"How do you draw a parameterized speedometer needle in Python Turtle?",shortAnswer:"Calculate angle based on value: `angle = min_angle + (val / max_val) * span`; call `draw_needle(t, x, y, rotation=angle)`.",explanation:"Mapping numeric data to rotation angles transforms Turtle into a dashboard visualization engine.",hint:"How is data value mapped to a rotating gauge needle?",level:"advanced",codeExample:"theta = 180 - (speed / 120.0) * 180"},{question:"What is the advantage of using Python's `math.radians()` before calling `math.cos()` or `math.sin()`?",shortAnswer:"Python's `math` functions require radians, while Turtle and humans work in degrees (0°-360°).",explanation:"`math.radians(deg)` converts degrees to radians (`deg * pi / 180`) preventing math domain errors.",hint:"Why must degrees be converted to radians for math.sin()?",level:"basic",codeExample:"rad = math.radians(rotation_degrees)"},{question:"How can you create a parameterized star with an arbitrary number of points `p`?",shortAnswer:"Accept `num_points` parameter, compute outer and inner radius vertices, and alternate between them.",explanation:"Radius alternating geometry generates stars with any number of points (4, 6, 8, 12).",hint:"How do you construct an n-pointed star parametrically?",level:"advanced",codeExample:"def draw_n_star(t, x, y, points=5, r_outer=50, r_inner=20): ..."},{question:"What is the computational benefit of parameterizing color palettes as tuple/list arguments?",shortAnswer:"It allows passing pre-calculated color theme arrays into functions without recomputing HSV conversions.",explanation:"Palette decoupling enables instant theme switching (Dark Mode, Cyberpunk, Solarized).",hint:"How does passing color lists enable instant theme switching?",level:"moderate",codeExample:"draw_mandala(t, x, y, palette=CYBERPUNK_PALETTE)"},{question:"Why should `t.speed()` generally NOT be changed inside a parameterized drawing function?",shortAnswer:"Changing speed inside a function overrides global animation settings and causes unexpected delays.",explanation:"Speed is a global environment configuration best managed in `main()`.",hint:"Why avoid mutating turtle speed inside reusable functions?",level:"moderate",codeExample:"# Set t.speed() once in main(), not in draw_shape()"},{question:"How do you draw a parameterized 3D isometric cube in Turtle?",shortAnswer:"Draw 3 parameterized rhombuses for top, left, and right faces with 30° and 150° slant angles.",explanation:"Composing 3 parameterized polygons produces convincing isometric 3D visuals.",hint:"Which 3 faces compose an isometric 3D cube?",level:"advanced",codeExample:"# top_face, left_face, right_face"},{question:"How do you implement a scale factor `scale=1.0` that supports zooming in and out?",shortAnswer:"Multiply all base coordinate dimensions by `scale` (e.g. `size * scale`).",explanation:"A single scalar multiplier allows seamless camera zoom effects.",hint:"How does a scalar multiplier facilitate camera zoom?",level:"moderate",codeExample:"draw_character(t, x, y, scale=0.5)  # 50% mini scale"},{question:"What is the recommended argument order for parameterized graphics functions in Python?",shortAnswer:"1. `t` (turtle) → 2. `x, y` (position) → 3. `size/radius` (scale) → 4. `rotation` → 5. `colors/styles`.",explanation:"Following standard spatial precedence (Target → Space → Scale → Angle → Style) provides an intuitive API.",hint:"What is the standard argument order from spatial anchor to style?",level:"advanced",codeExample:"def draw_icon(t, x, y, size=50, rotation=0, fill='gold', border='white'):"},{question:"How can you draw a series of concentric rotating stars with increasing size?",shortAnswer:"Loop `for i in range(5): draw_star(t, x, y, size=20 + i*15, rotation=i*10)`.",explanation:"Varying scale and rotation parameters concurrently produces rich optical illusions.",hint:"How do loops over scale and rotation create optical depth?",level:"basic",codeExample:`for i in range(5):
    draw_star(t, 0, 0, size=20*(i+1), rotation=i*15)`},{question:"What is the difference between local coordinate space and global world coordinate space?",shortAnswer:"Local space is relative to the shape's anchor `(x, y)`; global world space is the entire canvas coordinate grid.",explanation:"Parameterized functions convert local geometric offsets into global world coordinates.",hint:"What coordinate space is relative to the shape's anchor?",level:"advanced",codeExample:"# Local (0, 0) maps to World (x, y)"},{question:"How do you create a directional compass or clock hand using parameterized functions?",shortAnswer:"Draw an elongated triangle/arrow pointing along heading 0°, then rotate with `setheading(rotation)`.",explanation:"Orientation parameterization naturally models clock hands and navigational compass needles.",hint:"How do you draw clock hands pointing to different hours?",level:"moderate",codeExample:"draw_hand(t, 0, 0, length=80, rotation=hour_angle)"},{question:"What is the core benefit of parameterized graphics for UI component design?",shortAnswer:"It allows building reusable icon and badge systems where size, orientation, and color adapt dynamically to UI state.",explanation:"Parameterization bridges algorithmic drawing with modern modular UI design.",hint:"How does parameterization support adaptable UI icon libraries?",level:"basic",codeExample:"# UI Badge: draw_badge(t, x, y, status='success')"}],R=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 1 - Parameterized graphics (position x, y, radius, color, rotation)\r
File: parameterized_polygon_rotator.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates designing fully parameterized graphic functions accepting\r
anchor (x, y), side count, radius/scale, orientation angle, and dual-tone colors.\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_parameterized_polygon(t, x, y, sides, radius, rotation=0, fill_color="#38bdf8", border_color="white", pensize=2):\r
    """\r
    Draws a regular polygon centered at (x, y) with specified radius,\r
    initial rotation offset, fill, and border colors.\r
    """\r
    t.penup()\r
    t.pensize(pensize)\r
\r
    # Calculate starting vertex with rotation offset\r
    angle_step = 360 / sides\r
    start_rad = math.radians(rotation)\r
    start_x = x + radius * math.cos(start_rad)\r
    start_y = y + radius * math.sin(start_rad)\r
\r
    t.goto(start_x, start_y)\r
    t.setheading(rotation + 90 + angle_step / 2)\r
    t.pendown()\r
\r
    t.color(border_color, fill_color)\r
    t.begin_fill()\r
    side_length = 2 * radius * math.sin(math.radians(180 / sides))\r
    for _ in range(sides):\r
        t.forward(side_length)\r
        t.left(angle_step)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Parameterized Polygons - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # Draw varying shapes with distinct parameters\r
    # 1. Triangle rotated 30 deg\r
    draw_parameterized_polygon(t, -220, 0, sides=3, radius=70, rotation=30, fill_color="#f43f5e")\r
\r
    # 2. Square rotated 45 deg (Diamond)\r
    draw_parameterized_polygon(t, -70, 0, sides=4, radius=65, rotation=45, fill_color="#fbbf24")\r
\r
    # 3. Hexagon upright\r
    draw_parameterized_polygon(t, 80, 0, sides=6, radius=70, rotation=0, fill_color="#34d399")\r
\r
    # 4. Octagon rotated 15 deg\r
    draw_parameterized_polygon(t, 230, 0, sides=8, radius=65, rotation=15, fill_color="#a855f7")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,M=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 1 - Parameterized graphics (position x, y, radius, color, rotation)\r
File: multi_scale_flower_pinwheel.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates parametric floral generation: scaling and rotating petals around\r
a central hub across multiple garden coordinates.\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_petal(t, radius, angle=60, fill_color="#ec4899"):\r
    """Draws a single curved petal using two symmetric circle arcs."""\r
    t.color("white", fill_color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.circle(radius, angle)\r
        t.left(180 - angle)\r
    t.end_fill()\r
\r
def draw_flower(t, x, y, num_petals=8, petal_radius=50, rotation=0, petal_color="#ec4899", center_color="#fbbf24"):\r
    """Draws a fully parameterized flower with rotating petals and center pistil."""\r
    t.penup()\r
    t.goto(x, y)\r
\r
    # 1. Radial Petals\r
    turn_step = 360 / num_petals\r
    for i in range(num_petals):\r
        t.penup()\r
        t.goto(x, y)\r
        t.setheading(rotation + i * turn_step)\r
        t.pendown()\r
        draw_petal(t, petal_radius, angle=60, fill_color=petal_color)\r
\r
    # 2. Central Core Pistil\r
    t.penup()\r
    core_radius = petal_radius * 0.25\r
    t.goto(x, y - core_radius)\r
    t.setheading(0)\r
    t.pendown()\r
    t.color("white", center_color)\r
    t.begin_fill()\r
    t.circle(core_radius)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Scale Parametric Garden - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Parametric flowers across coordinates with distinct scales and rotations\r
    draw_flower(t, -220, 40, num_petals=6, petal_radius=40, rotation=15, petal_color="#f43f5e", center_color="#fef08a")\r
    draw_flower(t, -60, -30, num_petals=10, petal_radius=60, rotation=45, petal_color="#06b6d4", center_color="#fbbf24")\r
    draw_flower(t, 120, 60, num_petals=8, petal_radius=50, rotation=0, petal_color="#a855f7", center_color="#facc15")\r
    draw_flower(t, 250, -40, num_petals=12, petal_radius=35, rotation=30, petal_color="#10b981", center_color="#ffffff")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,W=`"""\r
Module: 005_004_turtle-modular\r
Topic: Topic 1 - Parameterized graphics (position x, y, radius, color, rotation)\r
File: interactive_transform_studio.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Interactive Transformation Engine showing the 3 Fundamental 2D Affine Transforms:\r
1. Translation: Moving shape origin to (x, y)\r
2. Scaling: Multiplying primitive dimensions by scale_factor\r
3. Rotation: Orienting the local coordinate system by theta degrees\r
"""\r
\r
import turtle\r
\r
def draw_arrow_compass(t, x, y, scale=1.0, rotation=0, color="#38bdf8"):\r
    """Draws a transformable directional arrow compass."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(rotation)\r
    t.pendown()\r
    t.color("white", color)\r
    t.begin_fill()\r
\r
    # Arrowhead + stem geometry scaled proportionally\r
    t.forward(60 * scale)\r
    t.left(90); t.forward(15 * scale)\r
    t.right(120); t.forward(40 * scale)\r
    t.right(120); t.forward(40 * scale)\r
    t.right(120); t.forward(15 * scale)\r
    t.left(90); t.forward(60 * scale)\r
    t.right(90); t.forward(20 * scale)\r
\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("2D Affine Transform Studio - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # 1. Base scale at 0 rotation\r
    draw_arrow_compass(t, -200, 0, scale=0.8, rotation=0, color="#38bdf8")\r
\r
    # 2. Scaled 1.2x at 90 deg rotation\r
    draw_arrow_compass(t, -50, -50, scale=1.2, rotation=90, color="#fbbf24")\r
\r
    # 3. Scaled 1.0x at 180 deg rotation\r
    draw_arrow_compass(t, 100, 50, scale=1.0, rotation=180, color="#f43f5e")\r
\r
    # 4. Scaled 0.7x at 270 deg rotation\r
    draw_arrow_compass(t, 220, 0, scale=0.7, rotation=270, color="#34d399")\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    main()\r
`,q=`================================================================================\r
  TOPIC 1: PARAMETERIZED GRAPHICS (POSITION X, Y, RADIUS, COLOR, ROTATION)\r
  MODULE: 005_004 - Modular Graphics with Functions\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS PARAMETERIZATION?\r
--------------------------------------------------------------------------------\r
Parameterization is the practice of replacing fixed constants in drawing algorithms\r
with variable function inputs. A fully parameterized graphical function controls:\r
- Translation: \`(x, y)\` coordinate position\r
- Scaling: \`size\`, \`radius\`, or \`scale_factor\`\r
- Rotation: \`rotation\` or \`heading_angle\`\r
- Appearance: \`fill_color\`, \`border_color\`, \`pensize\`\r
\r
2. THE 3 CORE AFFINE TRANSFORMATIONS IN TURTLE\r
--------------------------------------------------------------------------------\r
1. Translation (Positioning):\r
   \`t.penup(); t.goto(x, y); t.pendown()\`\r
\r
2. Rotation (Orientation):\r
   \`t.setheading(rotation)\`\r
\r
3. Scaling (Dilation):\r
   Multiplying every \`forward()\` distance and \`radius\` by a proportional scale multiplier.\r
\r
3. GOLDEN SIGNATURE PATTERN\r
--------------------------------------------------------------------------------\r
\`\`\`python\r
def draw_shape(t, x, y, scale=1.0, rotation=0, fill_color="cyan", border_color="white"):\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(rotation)\r
    t.pendown()\r
    # draw relative geometry scaled by scale factor...\r
\`\`\`\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,O=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`,X=()=>{const[d,y]=o.useState(0),[c,w]=o.useState(0),[r,b]=o.useState(60),[t,_]=o.useState(6),[n,v]=o.useState(30),[p,j]=o.useState("#06b6d4"),N=(a,l,u,x,A)=>{const g=[],k=A*Math.PI/180,P=2*Math.PI/x;for(let m=0;m<x;m++){const f=k+m*P,S=a+u*Math.cos(f),E=l+u*Math.sin(f);g.push(`${S.toFixed(1)},${E.toFixed(1)}`)}return g.join(" ")},s=160+d*.6,i=110-c*.6,T=N(s,i,r*.8,t,n),z=[{name:"draw_parameterized_polygon(t, x, y, sides, radius, rotation, fill_color)",returnType:"2D Affine Primitive",purpose:"Draws regular polygon with customizable vertex count, radius, orientation angle, and fill.",usage:"draw_parameterized_polygon(t, 0, 0, sides=6, radius=70, rotation=30)"},{name:"draw_flower(t, x, y, num_petals, petal_radius, rotation, petal_color)",returnType:"Radial Array Primitive",purpose:"Renders multi-petal floral arrays with concentric center pistil and rotational offset.",usage:"draw_flower(t, 100, -50, num_petals=8, petal_radius=50, rotation=45)"},{name:"draw_arrow_compass(t, x, y, scale, rotation, color)",returnType:"Vector Needle Primitive",purpose:"Generates transformable directional indicators for dashboards, gauges, and compasses.",usage:"draw_arrow_compass(t, -150, 20, scale=1.2, rotation=90)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:O}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_004 · Modular Graphics with Functions · Topic 1"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent",children:"Parameterized Graphics: Position, Scale, Color & Rotation"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Unlock complete 2D Affine Transformation control. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Translation (x, y)"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"Scaling (radius)"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Rotation (θ)"}),", and ",e.jsx("span",{className:"text-purple-300 font-semibold",children:"Color Palettes"})," in clean Python functions."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 2D Affine Transformations"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔄 Centroid-Centric Rotation"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎨 Dynamic Palette Binding"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Interactive Affine Transformation Laboratory"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Experiment with translation, scaling, side count, rotation angle, and color to inspect the underlying Python API call."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Active Side Count:"}),e.jsxs("span",{className:"px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs",children:[t,"-Gon (",t===3?"Triangle":t===4?"Square/Diamond":t===5?"Pentagon":t===6?"Hexagon":t===8?"Octagon":`${t}-Gon`,")"]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"2D Cartesian Viewport (Origin [0, 0] Centered)"}),e.jsxs("svg",{viewBox:"0 0 320 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("line",{x1:"160",y1:"10",x2:"160",y2:"210",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("line",{x1:"10",y1:"110",x2:"310",y2:"110",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("text",{x:"165",y:"25",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"+Y"}),e.jsx("text",{x:"295",y:"105",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"+X"}),e.jsx("text",{x:"165",y:"122",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"(0,0)"}),e.jsx("circle",{cx:s,cy:i,r:r*.8,fill:"none",stroke:"#475569",strokeWidth:"1",strokeDasharray:"2 2"}),e.jsx("circle",{cx:s,cy:i,r:"3",fill:"#ffffff"}),e.jsx("line",{x1:s,y1:i,x2:s+r*.8*Math.cos(n*Math.PI/180),y2:i+r*.8*Math.sin(n*Math.PI/180),stroke:"#fbbf24",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("polygon",{points:T,fill:p,stroke:"#ffffff",strokeWidth:"2",fillOpacity:"0.85",className:"transition-all duration-150"})]})]}),e.jsxs("div",{className:"space-y-3 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Transformation Parameters"}),e.jsxs("span",{className:"font-mono text-xs text-amber-300",children:["θ = ",n,"°"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"X Translation:"}),e.jsx("span",{className:"font-mono text-cyan-300",children:d})]}),e.jsx("input",{type:"range",min:"-80",max:"80",value:d,onChange:a=>y(Number(a.target.value)),className:"w-full accent-cyan-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Y Translation:"}),e.jsx("span",{className:"font-mono text-cyan-300",children:c})]}),e.jsx("input",{type:"range",min:"-60",max:"60",value:c,onChange:a=>w(Number(a.target.value)),className:"w-full accent-cyan-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Scale (radius):"}),e.jsxs("span",{className:"font-mono text-emerald-300",children:[r," px"]})]}),e.jsx("input",{type:"range",min:"30",max:"90",value:r,onChange:a=>b(Number(a.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Sides (n):"}),e.jsx("span",{className:"font-mono text-emerald-300",children:t})]}),e.jsx("input",{type:"range",min:"3",max:"10",value:t,onChange:a=>_(Number(a.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Rotation (degrees):"}),e.jsxs("span",{className:"font-mono text-amber-300",children:[n,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",value:n,onChange:a=>v(Number(a.target.value)),className:"w-full accent-amber-500 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-slate-400 mb-1 text-[11px]",children:"Fill Color (fill_color):"}),e.jsx("div",{className:"flex gap-2",children:["#06b6d4","#10b981","#f43f5e","#fbbf24","#a855f7"].map(a=>e.jsx("button",{onClick:()=>j(a),className:`w-6 h-6 rounded-full border transition cursor-pointer ${p===a?"border-white scale-110 shadow-md":"border-transparent opacity-70"}`,style:{backgroundColor:a}},a))})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Generated Python Function Call"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`draw_parameterized_polygon(
    t,
    x=${d}, y=${c},
    sides=${t},
    radius=${r},
    rotation=${n},
    fill_color="${p}"
)`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Parameterized Transform API Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Function Signature"}),e.jsx("th",{className:"py-3 px-4",children:"Transform Category"}),e.jsx("th",{className:"py-3 px-4",children:"Mathematical Behavior"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:z.map((a,l)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:a.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:a.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:a.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:a.usage})]},l))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(h,{fileModule:R,title:"parameterized_polygon_rotator.py",highlightLines:[12,13,19,20,24,28]}),e.jsx(h,{fileModule:M,title:"multi_scale_flower_pinwheel.py",highlightLines:[12,20,25,29,36,40]}),e.jsx(h,{fileModule:W,title:"interactive_transform_studio.py",highlightLines:[14,15,17,22,23,24,25]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🧭"})," Barrackpore Robotics: The Compass Gauge Challenge"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima was building a telemetry dashboard for a simulated drone. By parameterizing her ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"draw_arrow_compass(t, x, y, rotation=heading)"})," function, she mapped live sensor azimuth angles (0° to 360°) directly to the onscreen needle, rendering smooth 60 FPS real-time directional updates."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌸"})," Ichapur Botanical Art: Generative Parametric Gardens"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita in Ichapur generated a field of 50 unique blooming flowers by wrapping ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"draw_flower()"})," in a loop. By feeding randomized scales (0.5 to 1.3), petal counts (6 to 12), and rotation offsets, she created a rich botanical tapestry without duplicating a single line of geometry code."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Parameterization Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting math.radians() in Polar Math"}),e.jsxs("p",{className:"text-slate-400",children:["Passing raw degrees (e.g. 45) to ",e.jsx("code",{className:"text-rose-300 font-mono",children:"math.cos(45)"})," fails because Python trig functions expect radians. Always write ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"math.radians(45)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Non-Centroid Centric Rotation"}),e.jsx("p",{className:"text-slate-400",children:"Rotating a shape starting from its bottom-left corner causes the shape to orbit around an eccentric pivot rather than spinning symmetrically on its own axis."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Hardcoding Stroke Weights"}),e.jsxs("p",{className:"text-slate-400",children:["Setting ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.pensize(2)"})," inside a function without making it a parameter prevents callers from rendering delicate hairline accents or bold outlines."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Global Variable State Leaks"}),e.jsxs("p",{className:"text-slate-400",children:["Referencing a global variable ",e.jsx("code",{className:"text-rose-300 font-mono",children:"MY_COLOR"})," inside a function rather than accepting it as an argument breaks function portability across other modules."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand how (x, y) translation positions the shape anchor in 2D Cartesian space","I can scale multi-segment geometry proportionally using a single size or scale factor","I know how to set rotational orientation with `t.setheading(rotation)`","I always convert degrees to radians using `math.radians()` for polar calculations","I provide separate parameters for fill color and border stroke color","I assign sensible default values to optional styling parameters"].map((a,l)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:a})]},l))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How 3D rendering engines like Blender and Maya represent 3D models using Translation, Rotation, and Scale (TRS) matrices!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How changing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sides"})," from 3 to 8 smoothly transitions the geometry from an equilateral triangle to a stop-sign octagon!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Animate a rotating solar system by parameterizing both orbit radius and spin rotation over time!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In professional computer graphics, hardcoded shapes are obsolete. Everything is a parameterized entity. Mastering parameterization is what allows graphics engineers to proceduralize millions of trees in an open-world game, generate custom charts on the fly, and build dynamic UI component libraries."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(I,{title:"Parameterized Graphics FAQs",questions:D})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(H,{content:q,title:"Topic 1: Parameterized Graphics Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(C,{note:"When teaching parameterized graphics in Kolkata and Barrackpore, I emphasize that parameters are the steering wheel and throttle of your drawing engine. A function without parameters is a train trapped on a single track. Add (x, y), scale, rotation, and color, and suddenly your function can roam the entire infinite plane of creative graphics!"})})]})]})};export{X as default};

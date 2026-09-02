import{b as h,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as g}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{F as x}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const w=[{question:"What is an Archimedean spiral in polar mathematics?",shortAnswer:"A spiral where the radius `r` increases linearly with angle `theta`: `r = a * theta`.",explanation:"Because distance grows linearly, all successive spiral coils have constant equal separation distances.",hint:"What spiral has constant spacing between adjacent coil rings?",level:"basic",codeExample:"r = a * theta"},{question:"How do you draw an Archimedean spiral in Python Turtle?",shortAnswer:"Loop over increasing steps: `t.forward(i * step_scale)` followed by a fixed turn angle `t.left(angle)`.",explanation:"Increasing forward step length incrementally with loop index `i` produces linear radial growth.",hint:"How do you increment step length in a loop?",level:"basic",codeExample:`for i in range(200):
    t.forward(i * 0.5); t.left(10)`},{question:"What produces a 4-armed square spiral vortex?",shortAnswer:"Setting the turn angle to 91 degrees instead of 90 degrees inside an expanding forward loop.",explanation:"The 1-degree excess prevents closure and shifts each concentric square outward into a dynamic vortex.",hint:"What angle turn turns a square into a spiral?",level:"basic",codeExample:"for i in range(100): t.forward(i * 3); t.left(91)"},{question:"What is a Logarithmic (Equiangular) spiral?",shortAnswer:"A spiral where the radius grows exponentially with angle: `r = a * e^(b * theta)`.",explanation:"Natural phenomena like nautilus shells, hurricane vortices, and spiral galaxies follow logarithmic spiral math.",hint:"What spiral grows exponentially and models nautilus shells?",level:"moderate",codeExample:"r = a * math.exp(b * theta)"},{question:"How do you construct a Fibonacci Golden Spiral using Turtle arcs?",shortAnswer:"Iterate through the Fibonacci sequence `[1, 1, 2, 3, 5, 8, 13...]`, calling `t.circle(radius, 90)` for each value.",explanation:"Each 90-degree circular arc corresponds to a quadrant of adjacent golden rectangles.",hint:"What arc angle corresponds to a quarter circle?",level:"moderate",codeExample:`for r in fib:
    t.circle(r, 90)`},{question:"What produces a 6-armed hexagonal spiral?",shortAnswer:"Setting the turn angle to 61 degrees (or 59 degrees) inside an expanding forward loop.",explanation:"Slight deviation from the regular hexagon exterior angle (60°) produces hexagonal spiral arms.",hint:"What angle turn is 1 degree off from a hexagon?",level:"basic",codeExample:"for i in range(100): t.forward(i * 2); t.left(61)"},{question:"What is the difference between an Archimedean spiral and a Logarithmic spiral?",shortAnswer:"Archimedean spirals have constant distance between coils; Logarithmic spirals have exponentially increasing distance between coils.",explanation:"Linear growth vs exponential growth distinguishes the two geometries.",hint:"Which spiral has constant coil spacing vs expanding coil spacing?",level:"moderate",codeExample:"# Archimedean: r=a*θ | Logarithmic: r=a*e^(b*θ)"},{question:"How do you draw a multi-armed spiral galaxy with N arms?",shortAnswer:"Run an outer loop for N arms, rotating the turtle by `360 / N` before drawing each spiral arm.",explanation:"Combining radial rotation with spiral trajectories creates multi-armed pinwheels and galaxies.",hint:"How do you rotate multiple spiral arms around the center?",level:"advanced",codeExample:`for arm in range(4):
    t.penup(); t.goto(0,0); t.setheading(arm * 90); t.pendown()
    draw_spiral()`},{question:"What happens if the turn angle is set to 89 degrees instead of 91 degrees?",shortAnswer:"The spiral turns inward or mirrors orientation relative to the 91-degree clockwise vortex.",explanation:"Angles less than 90° advance the path faster than the perimeter, reversing perceived spiral flow.",hint:"How does 89° differ in visual winding from 91°?",level:"moderate",codeExample:"# 89° produces clockwise/inward phase shift"},{question:"How do you draw a Fermat Spiral (parabolic spiral)?",shortAnswer:"Use polar equation `r = a * sqrt(theta)` where radius scales with the square root of angle.",explanation:"Fermat's spiral describes sunflower seed distribution and phyllotaxis patterns.",hint:"What spiral equation uses square root of angle?",level:"expert",codeExample:"r = a * math.sqrt(theta)"},{question:"What is the Golden Angle in phyllotaxis plant spirals?",shortAnswer:"Approximately 137.508 degrees (360° * (1 - 1/phi)).",explanation:"Rotating by 137.5° between successive points creates maximally packed sunflower seed head lattices.",hint:"What angle is approximately 137.5 degrees?",level:"advanced",codeExample:"GOLDEN_ANGLE = 137.508"},{question:"How do you draw a sunflower seed head in Python Turtle?",shortAnswer:"Loop over N seeds: `t.penup(); t.goto(r * cos(i*137.5°), r * sin(i*137.5°)); t.dot(size)` where `r = c * sqrt(i)`.",explanation:"Vogel's mathematical model for sunflower seed packing using the golden angle.",hint:"What formula packs dots into sunflower spiral heads?",level:"expert",codeExample:"# Vogel's model: angle = i * 137.5°, r = c * sqrt(i)"},{question:"What happens if the forward step inside an Archimedean spiral is fixed while angle decreases?",shortAnswer:"It produces a reciprocal hyperbolic spiral where radius increases as angle approaches zero.",explanation:"Hyperbolic spiral polar equation is `r = a / theta`.",hint:"What is an inverse hyperbolic spiral?",level:"expert",codeExample:"r = a / theta"},{question:"How do you create a 3D perspective vortex illusion with spirals?",shortAnswer:"Increase line pensize `t.pensize(i / 10)` as the spiral expands outwards.",explanation:"Varying line thickness alongside radius creates simulated 3D depth perspective.",hint:"How does modulating pen width create 3D depth?",level:"moderate",codeExample:"t.pensize(1 + i * 0.05)"},{question:"Why does `screen.tracer(0)` make spiral drawing dramatically smoother?",shortAnswer:"Spirals require hundreds of micro-segments; tracer(0) renders them as a single GPU frame without animation delays.",explanation:"Suppresses frame-by-frame overhead during 500+ segment computations.",hint:"Why is tracer(0) vital for 500-step spiral paths?",level:"basic",codeExample:"screen.tracer(0); ...; screen.update()"},{question:"What is an Archimedean spiral coil pitch?",shortAnswer:"The distance between consecutive turn loops, given by `d = 2 * pi * a`.",explanation:"The pitch is constant and depends only on parameter `a`.",hint:"What formula gives the spacing between spiral turns?",level:"advanced",codeExample:"pitch = 2 * math.pi * a"},{question:"How do you draw an inward winding spiral that starts outside and terminates at center?",shortAnswer:"Loop over descending range `range(max_steps, 0, -1)`: `t.forward(i * step); t.left(angle)`.",explanation:"Decreasing the forward step shrinks the radius toward (0,0).",hint:"How do you reverse a loop to spiral inward?",level:"moderate",codeExample:`for i in range(150, 0, -1):
    t.forward(i * 0.5); t.left(15)`},{question:"How do you draw a Cornu Spiral (Clothoid / Euler Spiral)?",shortAnswer:"A spiral where curvature increases linearly with arc length, used in highway and rollercoaster track design.",explanation:"Evaluated using Fresnel integrals in computational geometry.",hint:"What spiral has curvature proportional to distance traveled?",level:"expert",codeExample:"# Clothoid / Euler spiral curvature"},{question:"What is the result of using a turn angle of 144 degrees in a spiral loop?",shortAnswer:"A 5-pointed star spiral vortex.",explanation:"144° is the exterior angle of a 5-pointed star (pentagram), so expanding steps produce a star vortex.",hint:"What geometric shape corresponds to a 144° turn?",level:"moderate",codeExample:"for i in range(80): t.forward(i * 2); t.left(144)"},{question:"How do you color code a spiral by angular sector?",shortAnswer:"Use `t.heading() // 60` to select one of 6 palette colors based on the current compass direction.",explanation:"Heading-based coloring creates rainbow quadrant fans.",hint:"How can turtle heading dictate color choices?",level:"moderate",codeExample:"sector = int(t.heading() // 60) % len(colors)"},{question:"What is a 3D conical spiral (helix)?",shortAnswer:"A spiral where the point moves along the surface of a cone, increasing radius and Z-height simultaneously.",explanation:"Projecting 3D conical coordinates onto a 2D canvas creates isometric helix spirals.",hint:"What spiral ascends a 3D cone surface?",level:"advanced",codeExample:"# 2D isometric conical helix"},{question:"How do you draw a spiral of expanding circles?",shortAnswer:"In each loop step, move along the spiral path and stamp or draw a circle whose radius scales with `i`.",explanation:"Combining spiral trajectories with secondary geometry produces bead necklace spirals.",hint:"How do you place shapes along a spiral path?",level:"moderate",codeExample:"for i in range(50): t.penup(); t.forward(i*2); t.left(30); t.pendown(); t.circle(i*0.5)"},{question:"What is an involute spiral?",shortAnswer:"The curve traced by the end of a taut string as it is unwound from a fixed cylinder or polygon.",explanation:"Used extensively in engineering for designing gear tooth profiles.",hint:"What spiral curve models unwinding string from a cylinder?",level:"expert",codeExample:"# Involute of circle for gear teeth"},{question:"How does the golden ratio phi (1.6180339) relate to the logarithmic spiral?",shortAnswer:"A Golden Spiral widens by a factor of phi for every quarter turn (90 degrees / pi/2 radians).",explanation:"Growth factor `b = ln(phi) / (pi / 2) ≈ 0.30635` in `r = a * e^(b * theta)`.",hint:"By what factor does a golden spiral expand every 90 degrees?",level:"advanced",codeExample:"b = math.log(1.6180339) / (math.pi / 2)"},{question:"How do you draw a double counter-rotating spiral (yin-yang vortex)?",shortAnswer:"Draw one clockwise spiral, return to center, and draw an identical counterclockwise spiral with opposite turns.",explanation:"Overlaying mirrored spiral paths produces interlocking counter-rotating vortices.",hint:"How do you mirror spiral directions?",level:"moderate",codeExample:"# Spiral 1: t.left(angle) | Spiral 2: t.right(angle)"},{question:"What happens if the turn angle is an exact divisor of 360 (e.g. 90 degrees)?",shortAnswer:"The path draws 4 concentric nested square lines without spiraling or rotating.",explanation:"Without an angular offset, the trajectory stays locked along the 4 Cartesian axes.",hint:"Why does 90° fail to create a rotational spiral vortex?",level:"basic",codeExample:"# 90° gives axis-aligned nested rectangles"},{question:"How do you prevent a long spiral from running off the screen boundaries?",shortAnswer:"Calculate maximum radius: `max_r = max_steps * step_size` and scale step size so `max_r < min(screen_width, screen_height) / 2`.",explanation:"Bounding box pre-calculation ensures all coils fit within canvas limits.",hint:"How do you bound spiral dimensions to window size?",level:"moderate",codeExample:"step_size = (window_width / 2) / total_steps"},{question:"Can recursive functions draw fractal spirals?",shortAnswer:"Yes, by calling `draw_spiral(step * 0.95, angle)` with a base case terminating when `step < 1`.",explanation:"Recursive branching produces self-similar fractal trees and spiral fronds.",hint:"How does recursion implement shrinking spirals?",level:"advanced",codeExample:"def spiral(len): if len > 1: t.forward(len); t.left(30); spiral(len * 0.9)"},{question:"What mathematical property makes spirals ubiquitous in biological growth?",shortAnswer:"Self-similarity: an organism can grow larger without changing its overall shape or structural proportions.",explanation:"Logarithmic spirals maintain constant equiangular geometry across all scales.",hint:"Why do shells and horns grow in logarithmic spirals?",level:"moderate",codeExample:"# Constant shape during scaling growth"},{question:"What is the summary formula for generating spirals in Python Turtle?",shortAnswer:"Combine an iterative forward step proportional to loop index (`forward(i * k)`) with a non-divisor turn angle (`left(angle)`).",explanation:"This simple 2-statement algorithm generates all polygonal, Archimedean, and vortex spirals.",hint:"What 2 commands form the core of all Turtle spirals?",level:"basic",codeExample:"for i in range(N): t.forward(i * k); t.left(angle)"}],y=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 3 - Spirals, Archimedean spirals, and radial symmetry\r
File: archimedean_spiral_polar.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the Archimedean Spiral where the radial distance from origin\r
increases linearly with the angle: r = a * theta.\r
In Turtle, this is achieved by incrementing forward distance inside a loop.\r
"""\r
\r
import turtle\r
import math\r
\r
def draw_archimedean_spiral():\r
    screen = turtle.Screen()\r
    screen.title("Archimedean Polar Spiral - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
    t.color("#38bdf8")\r
\r
    # Method 1: Discrete Turtle Step Increments\r
    t.penup(); t.goto(0, 0); t.pendown()\r
    for i in range(250):\r
        t.color("#38bdf8" if i % 2 == 0 else "#34d399")\r
        t.forward(i * 0.4)\r
        t.left(10)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_archimedean_spiral()\r
`,b=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 3 - Spirals, Archimedean spirals, and radial symmetry\r
File: square_and_hexagonal_spirals.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates polygonal spirals (spiral squares, spiral hexagons):\r
- By setting turn angle slightly off from polygon exterior (e.g. 91° or 61°),\r
  the paths shift continuously to produce geometric spiral vortices.\r
"""\r
\r
import turtle\r
\r
def draw_polygonal_spirals():\r
    screen = turtle.Screen()\r
    screen.title("Polygonal Spiral Vortices - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.setup(width=800, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # 1. Square Spiral (turn = 91°)\r
    t.penup(); t.goto(-200, 0); t.pendown()\r
    for i in range(70):\r
        t.color("#38bdf8" if i % 2 == 0 else "#a78bfa")\r
        t.forward(i * 3)\r
        t.left(91)\r
\r
    # 2. Hexagonal Spiral (turn = 61°)\r
    t.penup(); t.goto(200, 0); t.pendown()\r
    for i in range(80):\r
        t.color("#fbbf24" if i % 2 == 0 else "#f43f5e")\r
        t.forward(i * 2.5)\r
        t.left(61)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_polygonal_spirals()\r
`,v=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 3 - Spirals, Archimedean spirals, and radial symmetry\r
File: logarithmic_golden_spiral.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates drawing logarithmic and Fibonacci golden spirals:\r
- Radial distance grows exponentially: r = a * e^(b * theta)\r
- Approximated in Turtle using 90-degree quarter-circle arcs of Fibonacci radii.\r
"""\r
\r
import turtle\r
\r
def draw_fibonacci_spiral():\r
    screen = turtle.Screen()\r
    screen.title("Fibonacci Golden Spiral - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Fibonacci sequence values for arc radii\r
    fib = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144]\r
    palette = ["#38bdf8", "#34d399", "#fbbf24", "#f43f5e", "#a78bfa"]\r
\r
    t.penup(); t.goto(0, -50); t.pendown()\r
\r
    for i, radius in enumerate(fib):\r
        t.color(palette[i % len(palette)])\r
        # Draw 90-degree quarter circle arc\r
        t.circle(radius, 90)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_fibonacci_spiral()\r
`,j=`================================================================================\r
  TOPIC 3: SPIRALS, ARCHIMEDEAN SPIRALS, AND RADIAL SYMMETRY\r
  MODULE: 005_003 - Turtle Patterns & Geometric Mathematics\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A SPIRAL?\r
--------------------------------------------------------------------------------\r
A spiral is a curve that emanates from a central origin point, moving farther\r
away as it revolves around the point.\r
\r
2. MAJOR TYPES OF SPIRALS\r
--------------------------------------------------------------------------------\r
1. Archimedean Spiral:\r
   - Polar Equation: r = a * theta\r
   - Characteristics: Constant distance between successive coil turnings.\r
   - Turtle Implementation:\r
     \`\`\`python\r
     for i in range(steps):\r
         t.forward(i * step_size)\r
         t.left(turn_angle)\r
     \`\`\`\r
\r
2. Polygonal Spiral (Square / Hex Spiral):\r
   - Created by using an angle slightly larger than a regular polygon angle.\r
   - 91° turn → 4-arm square spiral vortex\r
   - 61° turn → 6-arm hexagonal spiral vortex\r
   - 121° turn → 3-arm triangular spiral vortex\r
\r
3. Logarithmic / Golden Spiral (Fibonacci):\r
   - Polar Equation: r = a * e^(b * theta)\r
   - Characteristics: Distance between coils expands exponentially (Golden Ratio phi = 1.618).\r
   - Approximated by chaining quarter-circle arcs of Fibonacci radii:\r
     \`t.circle(fib_radius, 90)\`\r
\r
3. RADIAL SYMMETRY MECHANICS\r
--------------------------------------------------------------------------------\r
Combining multiple spiral arms radiating from the origin creates multi-armed\r
galaxies, pinwheels, and radial vortex mandalas.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,A=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spiralGlow {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.4)); }
  50% { filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.8)); }
}
`,W=()=>{const[t,o]=h.useState("archimedean"),[s,m]=h.useState(91),u=[{name:"Archimedean: r = a * θ",returnType:"Linear Distance",purpose:"Distance from origin grows uniformly; constant spacing between consecutive coils.",usage:"t.forward(i * 0.4); t.left(10)"},{name:"Polygonal Spiral: (θ ± 1°)",returnType:"Vortex Geometry",purpose:"Uses non-divisor angles (e.g. 91° or 61°) to twist regular polygons into spiral vortices.",usage:"for i in range(100): t.forward(i*3); t.left(91)"},{name:"Logarithmic: r = a * e^(bθ)",returnType:"Exponential Curve",purpose:"Models natural growth (nautilus shells, hurricanes, galaxies) with constant shape scaling.",usage:"r = a * math.exp(b * theta)"},{name:"Fibonacci Golden Arcs",returnType:"90° Arc Segments",purpose:"Approximates the golden spiral using quarter circles of increasing Fibonacci sequence radii.",usage:"for r in fib: t.circle(r, 90)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:A}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_003 · Turtle Patterns & Geometric Mathematics · Topic 3"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent",children:"Spirals, Archimedean Spirals & Radial Symmetry"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Unleash the mathematics of continuous curves. Explore Archimedean linear coils, craft hypnotic 91° square spiral vortices, and construct organic Fibonacci golden spirals."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌀 Archimedean Linear Coils"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 91° Polygonal Spiral Vortices"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🐚 Fibonacci Golden Arcs"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🌀"})," Spiral Mathematics Laboratory"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a spiral paradigm and tweak angle parameters to observe real-time algorithmic vortex generation."})]}),e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx("button",{onClick:()=>o("archimedean"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="archimedean"?"bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"Archimedean (r = aθ)"}),e.jsxs("button",{onClick:()=>o("square"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="square"?"bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:["Square Vortex (",s,"°)"]}),e.jsx("button",{onClick:()=>o("golden"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="golden"?"bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"Fibonacci Golden Spiral"}),t==="square"&&e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-lg border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Angle:"}),e.jsx("input",{type:"range",min:"85",max:"95",value:s,onChange:a=>m(Number(a.target.value)),className:"w-16 accent-emerald-400 cursor-pointer"}),e.jsxs("span",{className:"font-mono text-xs text-emerald-300 w-6",children:[s,"°"]})]})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 500 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-lg h-auto",children:[e.jsx("rect",{width:"500",height:"240",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(250, 120)",children:[t==="archimedean"&&(()=>{const a=[];for(let r=0;r<180;r++){const n=r*Math.PI/15,i=.5*n*8;a.push(`${i*Math.cos(n)},${i*Math.sin(n)}`)}return e.jsx("polyline",{points:a.join(" "),fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",strokeLinecap:"round"})})(),t==="square"&&(()=>{let a=0,r=0,n=0;const i=["0,0"];for(let l=1;l<=35;l++){const c=l*4.5,p=n*Math.PI/180;a+=c*Math.cos(p),r+=c*Math.sin(p),i.push(`${a},${r}`),n+=s}return e.jsx("polyline",{points:i.join(" "),fill:"none",stroke:"#34d399",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})(),t==="golden"&&e.jsx("path",{d:"M 0,0 A 5,5 0 0,1 5,5 A 8,8 0 0,1 -3,13 A 13,13 0 0,1 -16,0 A 21,21 0 0,1 5,-21 A 34,34 0 0,1 39,13 A 55,55 0 0,1 -16,68 A 89,89 0 0,1 -105,-21",fill:"none",stroke:"#c084fc",strokeWidth:"3",strokeLinecap:"round"}),e.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"#ffffff"}),e.jsx("text",{x:"0",y:"105",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",children:t==="archimedean"?"Archimedean Spiral: r = a * θ (Uniform Spacing)":t==="square"?`Polygonal Vortex: Turn = ${s}° (Angle Deviation)`:"Logarithmic Golden Spiral: Exponential Curvature"})]})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Mathematical Spiral Types & Equations"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Spiral Category"}),e.jsx("th",{className:"py-3 px-4",children:"Growth Law"}),e.jsx("th",{className:"py-3 px-4",children:"Geometric Nature"}),e.jsx("th",{className:"py-3 px-4",children:"Python Implementation"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:u.map((a,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 font-bold text-xs",children:a.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:a.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:a.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:a.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Spiral Algorithm Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:y,title:"archimedean_spiral_polar.py",highlightLines:[18,20,21]}),e.jsx(d,{fileModule:b,title:"square_and_hexagonal_spirals.py",highlightLines:[19,21,22,27,29,30]}),e.jsx(d,{fileModule:v,title:"logarithmic_golden_spiral.py",highlightLines:[17,22,24]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌀"})," Barrackpore Physics Lab: The 91° Square Vortex"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita and Mahima simulate atmospheric cyclonic flow by generating a 100-step polygonal spiral with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"t.left(91)"}),". The 1-degree angular offset continuously shifts the square vertices outward, forming an optical spiral vortex that perfectly models storm spirals for their physics exhibition."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-purple-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🐚"})," Jadavpur Biomimicry Studio: Fibonacci Nautilus"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata constructs a biological nautilus shell using consecutive quarter-circle arcs of Fibonacci radii (",e.jsx("code",{className:"text-purple-300 font-mono",children:"[2, 3, 5, 8, 13, 21, 34, 55, 89, 144]"}),"). The resulting logarithmic curve demonstrates how biological organisms grow larger while preserving perfect self-similar geometric proportions."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Spiral Algorithm Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Using Exact Polygon Divisor Angles"}),e.jsx("p",{className:"text-slate-400",children:"Turning exactly 90° or 60° does not produce a spiral—it draws static axis-aligned nested polygons! Always introduce an angular offset (e.g. 91° or 61°)."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Linear Arcs Instead of Exponential Radii"}),e.jsxs("p",{className:"text-slate-400",children:["Incrementing arc radii linearly (",e.jsx("code",{className:"text-rose-300 font-mono",children:"10, 20, 30"}),") produces an Archimedean coil, NOT a Golden Spiral. Golden spirals require Fibonacci or exponential growth."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Canvas Coordinate Overflow"}),e.jsxs("p",{className:"text-slate-400",children:["Spirals grow rapidly. A 500-step loop with ",e.jsx("code",{className:"text-rose-300",children:"i * 3"})," expands to 1,500px radius, far off the screen. Scale step coefficients to fit window dimensions."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Forgetting tracer(0) on 300+ Steps"}),e.jsxs("p",{className:"text-slate-400",children:["Drawing 300+ tiny spiral segments one by one causes noticeable UI delays. Always wrap in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.tracer(0)"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.update()"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand why Archimedean spirals (r = a * theta) maintain constant coil spacing","I know how 91° and 61° angular offsets produce square and hexagonal spiral vortices","I can construct a Fibonacci Golden Spiral using chained 90° circular arcs","I know how to scale step increments (i * step) to keep spirals within canvas bounds","I understand the difference between linear (Archimedean) and exponential (Logarithmic) spirals","I know how to use screen.tracer(0) for smooth, instantaneous spiral rendering"].map((a,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:a})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why phonograph vinyl records use an inward Archimedean spiral groove to store audio tracks at constant spacing!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting the turn angle to 144° turns the spiral into an expanding 5-pointed star vortex!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Increase the pen width proportionally with loop index (",e.jsx("code",{className:"text-sky-300 font-mono",children:"t.pensize(1 + i * 0.05)"}),") to create a striking 3D funnel perspective illusion!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Spirals are nature's most efficient geometric design pattern, appearing across all scales from ",e.jsx("strong",{children:"DNA double helices and sunflower seed packing"})," to atmospheric hurricanes and spiral galaxies. Understanding how parametric polar equations (",e.jsx("code",{className:"text-purple-300 font-mono",children:"r(θ)"}),") translate into vector displacements builds deep intuition for computational fluid dynamics, procedural terrain generation, and particle physics simulations."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(x,{title:"Spirals & Radial Symmetry FAQs",questions:w})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(f,{content:j,title:"Topic 3: Spirals & Radial Symmetry Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(g,{note:"When we teach spirals at Coder & AccoTax in Barrackpore and Kolkata, students are mesmerized by the 91-degree square spiral. Just 1 degree of angular deviation transforms rigid boxes into a dynamic, cosmic vortex. I always encourage students: experiment with 89°, 91°, 121°, and 144°—you will discover that simple mathematical nudges yield infinite varieties of natural beauty!"})})]})]})};export{W as default};

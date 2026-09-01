import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as d}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const m=[{question:"What is the fastest standard speed setting in turtle.speed()?",shortAnswer:"speed(0) or speed('fastest').",explanation:"0 disables animation delay timers, making it faster than speed(10).",hint:"Is the fastest speed represented by 10 or 0?",level:"basic",codeExample:"t.speed(0)  # Fastest standard speed"},{question:"What is the slowest speed setting in Python Turtle?",shortAnswer:"speed(1) or speed('slowest').",explanation:"speed(1) introduces the longest artificial delay between frame ticks, making it ideal for classroom step-by-step observation.",hint:"What is the smallest positive integer speed?",level:"basic",codeExample:"t.speed(1)  # Slowest motion"},{question:"What is the default speed when a new Turtle object is initialized?",shortAnswer:"speed(6) or 'normal'.",explanation:"Default speed is set to 6, providing a balanced visual animation pace.",hint:"What is the moderate default speed setting?",level:"basic",codeExample:"print(t.speed())  # 6"},{question:"Why is speed(0) faster than speed(10)?",shortAnswer:"Because 0 represents zero animation delay, whereas 10 is a high animation rate with a small non-zero delay.",explanation:"speed(0) instructs the interpreter to remove all artificial pause timers between steps.",hint:"What does 0 delay mean compared to a 10 rate?",level:"moderate",codeExample:`# speed(0) = 0ms delay
# speed(10) = short delay`},{question:"What are the valid string aliases for turtle.speed()?",shortAnswer:"'fastest' (0), 'fast' (10), 'normal' (6), 'slow' (3), and 'slowest' (1).",explanation:"These 5 string literals map directly to their corresponding integer speed constants.",hint:"What 5 words describe speeds from slowest to fastest?",level:"basic",codeExample:"t.speed('fastest')"},{question:"What is the difference between `turtle.speed(0)` and `screen.tracer(0)`?",shortAnswer:"`speed(0)` removes sleep delays but still redraws canvas each step; `tracer(0)` disables screen redraws completely until `update()` is called.",explanation:"tracer(0) is significantly faster for 1,000+ line fractals because it avoids all intermediary screen refresh calls.",hint:"Which one disables canvas screen refreshing entirely?",level:"advanced",codeExample:`screen.tracer(0)
# Draw 10,000 lines instantly in RAM
screen.update()`},{question:"What happens if you forget to call `screen.update()` after using `screen.tracer(0)`?",shortAnswer:"The canvas remains blank or partially rendered because pending drawing buffer updates were never flushed.",explanation:"tracer(0) suppresses automatic rendering; explicit update() is mandatory to flush vector buffers to screen.",hint:"How does the canvas know when to paint buffered shapes?",level:"moderate",codeExample:`screen.tracer(0)
# draw...
screen.update() # Mandatory!`},{question:"How do you query the current speed integer of a Turtle?",shortAnswer:"Call `t.speed()` with no arguments.",explanation:"Like all Turtle property methods, speed() acts as a getter returning the active integer speed.",hint:"What does calling speed without arguments return?",level:"basic",codeExample:"current_speed = t.speed()"},{question:"What happens if you pass a number greater than 10 (e.g. speed(15))?",shortAnswer:"Any integer >= 10 or <= 0.5 defaults internally to speed(0) (fastest).",explanation:"Python clamps out-of-range speed values to 0.",hint:"How does Turtle handle integers larger than 10?",level:"moderate",codeExample:"t.speed(100) # Treated as speed(0)"},{question:"How do you hide the turtle cursor to increase drawing performance further?",shortAnswer:"Using `t.hideturtle()` or `t.ht()`.",explanation:"Hiding the cursor eliminates the CPU overhead of erasing and redrawing the turtle icon on every step.",hint:"What method hides the turtle pointer from canvas?",level:"basic",codeExample:"t.hideturtle()"},{question:"What is `screen.delay(ms)` in Python Turtle?",shortAnswer:"Sets the global animation delay in milliseconds for all turtles on the screen (default is 10ms).",explanation:"screen.delay(0) globally removes animation pauses across all artist instances.",hint:"Which screen method sets millisecond animation delays?",level:"advanced",codeExample:"screen.delay(0)"},{question:"Can different turtles have different speeds on the same canvas?",shortAnswer:"Yes, speed is an instance attribute maintained independently by each Turtle.",explanation:"Turtle A can race at speed(0) while Turtle B demonstrates at speed(1).",hint:"Is speed object-scoped or global?",level:"basic",codeExample:"t1.speed(1); t2.speed(0)"},{question:"Why is `t.speed(1)` useful in educational demonstrations?",shortAnswer:"It allows students to visually follow angle rotations, loop iterations, and coordinate translations step-by-step.",explanation:"Slow visual pacing demystifies geometric logic for beginners.",hint:"Why would a teacher want a slow animation pace?",level:"basic",codeExample:"# Teaching loops: t.speed(1)"},{question:"What is the typical execution time difference between speed(6) and tracer(0) for a 1,000-line mandala?",shortAnswer:"speed(6) may take 15-30 seconds; tracer(0) takes less than 0.05 seconds (instantaneous).",explanation:"Eliminating 1,000 intermediate Tkinter repaint cycles speeds up rendering by hundreds of times.",hint:"How dramatic is the performance leap with tracer(0)?",level:"moderate",codeExample:"# tracer(0) reduces 30s animations to < 50ms"},{question:"What does `screen.tracer(n, delay)` do when passing an integer n > 1?",shortAnswer:"Updates the screen only once every n drawing actions, with an optional delay in ms.",explanation:"`tracer(10)` redraws the canvas only once every 10 forward/turn steps, speeding up animations while keeping motion visible.",hint:"How do you refresh the screen once every N frames?",level:"advanced",codeExample:"screen.tracer(8, 25) # Update every 8th step"},{question:"How do game loops use `screen.tracer(0)` and `screen.ontimer()`?",shortAnswer:"By executing physics and drawing logic in memory, calling `screen.update()`, and scheduling the next frame with `ontimer()`.",explanation:"This classic Double-Buffering loop pattern produces smooth 60 FPS games without screen tearing.",hint:"What pattern creates smooth, flicker-free game animations?",level:"expert",codeExample:"# Game loop pattern: tracer(0) → update() → ontimer(loop, 16)"},{question:"Does `t.speed(0)` speed up computation time (like math calculations) or only canvas rendering?",shortAnswer:"Only canvas animation delays; Python's mathematical calculations execute at normal CPU speeds regardless.",explanation:"speed() modifies GUI timer delays, not CPU bytecode execution speed.",hint:"Does speed() accelerate CPU math or GUI delays?",level:"moderate",codeExample:"# Modifies GUI rendering pacing only"},{question:"Can speed be changed dynamically inside a drawing loop?",shortAnswer:"Yes, you can call `t.speed()` at any point to accelerate or decelerate motion.",explanation:"Useful for drawing complex backgrounds at speed(0) and foreground characters at speed(3).",hint:"Can you switch speeds between different phases of a script?",level:"basic",codeExample:`t.speed(0); draw_background()
t.speed(3); draw_hero()`},{question:"What is screen flickering in Turtle animations?",shortAnswer:"Rapid visual flashing caused when shapes are cleared and redrawn frame-by-frame with automatic updates enabled.",explanation:"tracer(0) and update() eliminate flicker by buffering changes in memory before painting.",hint:"What causes visual stutter when moving game sprites?",level:"advanced",codeExample:"# Eliminate flicker with tracer(0) + update()"},{question:"How do you benchmark the exact rendering time of a Turtle script in Python?",shortAnswer:"Use `time.time()` or `time.perf_counter()` before and after the drawing loop.",explanation:"Measuring elapsed seconds allows students to quantify speed optimizations mathematically.",hint:"What standard library module measures execution duration?",level:"moderate",codeExample:`import time
t0 = time.perf_counter()
# render...
print(f'Time: {time.perf_counter() - t0:.3f}s')`},{question:"What is double buffering in graphical engines?",shortAnswer:"Drawing to an off-screen memory buffer before copying the finished frame to the visible display.",explanation:"`screen.tracer(0)` enables off-screen buffer rendering; `screen.update()` swaps the buffer to display.",hint:"What technique draws in an invisible memory buffer before showing the frame?",level:"expert",codeExample:"# tracer(0) = off-screen buffer; update() = buffer swap"},{question:"Does `t.speed()` affect how fast `turtle.write()` prints text?",shortAnswer:"No, text writing is rendered instantaneously regardless of speed settings.",explanation:"write() does not interpolate path points; it delegates font rasterization directly to Tkinter.",hint:"Does text printing have step-by-step motion animation?",level:"moderate",codeExample:"t.write('Instant Text!')"},{question:"What is the slowest animation speed value in terms of milliseconds?",shortAnswer:"speed(1) introduces approximately 50-100ms pauses between steps.",explanation:"This gives a deliberate crawl allowing human inspection of individual vectors.",hint:"Approximately how long does speed(1) pause between steps?",level:"basic",codeExample:"t.speed(1)"},{question:"How does setting `screen.tracer(False)` compare to `screen.tracer(0)`?",shortAnswer:"They are completely identical; boolean False evaluates to 0 in Python.",explanation:"Passing 0, False, or None disables tracer updates.",hint:"Are False and 0 interchangeable in Python boolean evaluation?",level:"basic",codeExample:"screen.tracer(False) # Same as screen.tracer(0)"},{question:"Can `screen.tracer(True)` re-enable automatic canvas updates?",shortAnswer:"Yes, passing True (or 1) re-enables standard automatic frame updates.",explanation:"Use this to resume normal step-by-step animation after generating background assets.",hint:"How do you turn tracer automatic updates back on?",level:"basic",codeExample:"screen.tracer(True)"},{question:"Why should `t.speed(0)` be paired with `t.hideturtle()` for maximum efficiency?",shortAnswer:"Because hiding the turtle icon avoids unnecessary icon bounding box recalculations on every step.",explanation:"Eliminating cursor drawing saves significant CPU rendering cycles.",hint:"What two commands give maximum speed without using tracer?",level:"moderate",codeExample:`t.speed(0)
t.hideturtle()`},{question:"How do you achieve a cinematic dramatic reveal effect in Turtle?",shortAnswer:"Start at `speed(1)` for the opening shape, then gradually accelerate up to `speed(0)` as complexity increases.",explanation:"Modulating speed over time creates engaging visual storytelling.",hint:"How can speed pacing create drama in algorithmic art presentations?",level:"advanced",codeExample:"for i in range(1, 10): t.speed(i); t.forward(i*10); t.left(90)"},{question:"What is the return type of `screen.tracer()` when called without arguments?",shortAnswer:"An integer representing the current n-step tracer update interval.",explanation:"Functions as a getter for the current screen tracer frequency.",hint:"What does calling tracer as a getter return?",level:"advanced",codeExample:"n_interval = screen.tracer()"},{question:"How do you optimize 3D wireframe rotations rendered with Turtle?",shortAnswer:"Use `tracer(0)`, compute 3D matrix projection in RAM, draw 2D projected lines, call `update()`, then `clear()` for next frame.",explanation:"This is the classic real-time 3D vector pipeline running entirely in Python Turtle.",hint:"What sequence renders smooth 3D projections in Turtle?",level:"expert",codeExample:"# 3D Vector Engine Pipeline"},{question:"What is the summary rule for Turtle speed and performance optimization?",shortAnswer:"Use `speed(1-6)` for classroom teaching and visual animation; use `speed(0)` + `hideturtle()` for fast drawing; use `tracer(0)` + `update()` for instant fractals and 60 FPS interactive games.",explanation:"Choosing the correct rendering tier guarantees both pedagogical clarity and high-performance graphics.",hint:"What 3 tiers define speed optimization in Turtle?",level:"basic",codeExample:"# Tier 1: speed(1-6) | Tier 2: speed(0) | Tier 3: tracer(0) + update()"}],h=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 5 - Speed vs rendering performance: speed() settings\r
File: speed_settings_benchmark.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the full speed hierarchy in Python Turtle:\r
- speed(1) / 'slowest'\r
- speed(3) / 'slow'\r
- speed(6) / 'normal'\r
- speed(10) / 'fast'\r
- speed(0) / 'fastest' (Zero animation delay)\r
"""\r
\r
import turtle\r
import time\r
\r
def benchmark_turtle_speeds():\r
    screen = turtle.Screen()\r
    screen.title("Speed Settings Benchmark - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
\r
    speed_configs = [\r
        (1, "1 / 'slowest'", "#f43f5e", 150),\r
        (3, "3 / 'slow'", "#fbbf24", 80),\r
        (6, "6 / 'normal'", "#38bdf8", 10),\r
        (10, "10 / 'fast'", "#34d399", -60),\r
        (0, "0 / 'fastest'", "#a78bfa", -130)\r
    ]\r
\r
    for speed_val, label, color, y_pos in speed_configs:\r
        t = turtle.Turtle()\r
        t.shape("turtle")\r
        t.color(color)\r
        t.pensize(3)\r
        t.speed(speed_val)\r
\r
        # Move to starting lane\r
        t.penup()\r
        t.goto(-300, y_pos)\r
        t.pendown()\r
\r
        # Write speed label\r
        t.write(f"speed({label})", font=("Arial", 10, "bold"))\r
        t.penup(); t.forward(120); t.pendown()\r
\r
        # Draw a race track line\r
        t.forward(350)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    benchmark_turtle_speeds()\r
`,u=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 5 - Speed vs rendering performance: speed() settings\r
File: tracer_vs_speed_zero_performance.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Compares speed(0) vs screen.tracer(0) rendering performance for complex\r
1000-line fractal and mandala generation.\r
"""\r
\r
import turtle\r
import time\r
\r
def draw_complex_mandala(t, total_segments=300):\r
    for i in range(total_segments):\r
        t.forward(i * 0.8)\r
        t.left(59)\r
\r
def compare_performance():\r
    screen = turtle.Screen()\r
    screen.title("speed(0) vs tracer(0) Benchmark - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(1)\r
    t.color("#38bdf8")\r
\r
    # Ultra-Fast Render using tracer(0)\r
    print("Beginning instant render with screen.tracer(0)...")\r
    start_time = time.time()\r
    screen.tracer(0)  # Disable all automatic screen refresh\r
\r
    draw_complex_mandala(t, total_segments=600)\r
\r
    screen.update()  # Force single instant paint\r
    elapsed = time.time() - start_time\r
    print(f"Mandala generated in {elapsed:.4f} seconds!")\r
\r
    # Write completion benchmark on screen\r
    t.penup(); t.goto(0, -220); t.pendown()\r
    t.color("#34d399")\r
    t.write(f"Rendered 600 lines in {elapsed:.4f}s with tracer(0)", align="center", font=("Arial", 12, "bold"))\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    compare_performance()\r
`,x=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 5 - Speed vs rendering performance: speed() settings\r
File: interactive_speed_demonstrator.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates dynamic speed adjustments where turtle changes speeds\r
at different phases of an illustration (e.g. slow careful setup, fast infill).\r
"""\r
\r
import turtle\r
\r
def dynamic_speed_drawing():\r
    screen = turtle.Screen()\r
    screen.title("Dynamic Phase-Based Speed Control - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.pensize(3)\r
    t.color("#38bdf8")\r
\r
    # Phase 1: Slow deliberate pedagogical outline (speed 2)\r
    print("Phase 1: Drawing outer boundary slowly (speed=2)...")\r
    t.speed(2)\r
    for _ in range(4):\r
        t.forward(120)\r
        t.left(90)\r
\r
    # Phase 2: Moderate internal diagonal structure (speed 6)\r
    print("Phase 2: Drawing internal diagonals at normal pace (speed=6)...")\r
    t.speed(6)\r
    t.color("#34d399")\r
    t.goto(120, 120)\r
    t.penup(); t.goto(0, 120); t.pendown()\r
    t.goto(120, 0)\r
\r
    # Phase 3: Instantaneous rosette center stamping (speed 0)\r
    print("Phase 3: Generating center burst at max speed (speed=0)...")\r
    t.speed(0)\r
    t.penup(); t.goto(60, 60); t.pendown()\r
    t.color("#fbbf24")\r
    for _ in range(36):\r
        t.forward(30)\r
        t.backward(30)\r
        t.left(10)\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    dynamic_speed_drawing()\r
`,f=`================================================================================\r
  TOPIC 5: SPEED VS RENDERING PERFORMANCE: SPEED() SETTINGS\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE TURTLE SPEED HIERARCHY\r
--------------------------------------------------------------------------------\r
Turtle animation speed is configured via \`t.speed(s)\`:\r
\r
  Value | String Alias | Description\r
  ------|--------------|---------------------------------------------\r
  1     | 'slowest'    | Ultra-slow pedagogical tracing (ideal for teaching)\r
  3     | 'slow'       | Slow deliberate motion\r
  6     | 'normal'     | Default standard drawing speed\r
  10    | 'fast'       | Fast animation\r
  0     | 'fastest'    | No animation delay (Fastest possible standard mode)\r
\r
2. CRITICAL QUIRK: WHY IS 0 FASTER THAN 10?\r
--------------------------------------------------------------------------------\r
Beginners often assume \`speed(10)\` is maximum speed because 10 is the largest integer.\r
However, \`speed(0)\` is a special sentinel flag in Turtle that means:\r
"Disable internal sleep timer delays completely" (0 milliseconds of delay).\r
Therefore: \`speed(1)\` is slowest, \`speed(10)\` is very fast, and \`speed(0)\` is FASTEST.\r
\r
3. SPEED(0) VS SCREEN.TRACER(0)\r
--------------------------------------------------------------------------------\r
- \`t.speed(0)\`: Eliminates inter-step sleep delays, but Tkinter still redraws\r
  the canvas on every single vector movement (visible fast drawing).\r
- \`screen.tracer(0)\`: Disables screen canvas updates entirely. Movements happen\r
  in memory in microseconds. You MUST call \`screen.update()\` to paint the\r
  completed image onto the screen.\r
\r
When to use \`tracer(0)\`:\r
- High-density fractals (Koch snowflakes, Sierpinski triangles with 1,000+ lines).\r
- Complex mathematical mandalas and recursive branching trees.\r
- Real-time interactive 60 FPS games.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,g=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes speedPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`,T=()=>{const[s,i]=l.useState("speed0"),o=[{name:"turtle.speed(speed=None)",returnType:"int / None",purpose:"Sets or queries turtle animation speed: 1 (slowest) to 10 (fast), with 0 (fastest/no delay).",usage:"t.speed(0) # Fastest standard mode"},{name:"screen.tracer(n=None, delay=None)",returnType:"int / None",purpose:"Turns screen animation on/off and sets delay. tracer(0) disables canvas refresh completely.",usage:"screen.tracer(0)"},{name:"screen.update()",returnType:"None",purpose:"Manually flushes and refreshes the canvas buffer after using tracer(0).",usage:"screen.update()"},{name:"screen.delay(delay=None)",returnType:"int / None",purpose:"Sets or queries global millisecond drawing delay across all turtles (default is 10ms).",usage:"screen.delay(0)"}],r=[{key:"speed1",label:"speed(1) / 'slowest'",delay:"100ms delay",useCase:"Teaching, classroom step-by-step observation",color:"#f43f5e"},{key:"speed6",label:"speed(6) / 'normal'",delay:"10ms delay",useCase:"Default balanced animation pace",color:"#38bdf8"},{key:"speed10",label:"speed(10) / 'fast'",delay:"2ms delay",useCase:"Quick rendering with visible motion",color:"#fbbf24"},{key:"speed0",label:"speed(0) / 'fastest'",delay:"0ms delay",useCase:"Fast rendering without sleep timers",color:"#34d399"},{key:"tracer0",label:"screen.tracer(0)",delay:"Instant buffer (0s)",useCase:"1,000+ line fractals, mandalas, 60 FPS games",color:"#a78bfa"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:g}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 5"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:["Speed vs Rendering Performance: ",e.jsx("span",{className:"font-mono",children:"speed()"})," & ",e.jsx("span",{className:"font-mono",children:"tracer()"})]}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Understand why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"speed(0)"})," is faster than ",e.jsx("code",{className:"text-amber-300 font-mono",children:"speed(10)"}),", master the difference between animation delays and canvas redrawing, and harness ",e.jsx("code",{className:"text-purple-300 font-mono",children:"screen.tracer(0)"})," for instantaneous complex fractal generation."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚡ speed(0) vs speed(1-10)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🚀 tracer(0) Instant Render"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎮 Double Buffering & 60 FPS"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🏎️"})," Speed Hierarchy & Performance Tier Matrix"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare animation pacing, delay mechanics, and the ultimate performance leap with tracer(0)."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:r.map(t=>e.jsx("button",{onClick:()=>i(t.key),className:`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition cursor-pointer ${s===t.key?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:t.label.split(" / ")[0]},t.key))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"180",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("line",{x1:"180",y1:"50",x2:"630",y2:"50",stroke:"#334155",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("line",{x1:"180",y1:"90",x2:"630",y2:"90",stroke:"#334155",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("line",{x1:"180",y1:"130",x2:"630",y2:"130",stroke:"#334155",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("line",{x1:"180",y1:"165",x2:"630",y2:"165",stroke:"#334155",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("line",{x1:"630",y1:"35",x2:"630",y2:"175",stroke:"#f59e0b",strokeWidth:"3"}),e.jsx("text",{x:"630",y:"30",fill:"#f59e0b",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"FINISH"}),e.jsx("text",{x:"30",y:"54",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",children:"speed(1) Slowest"}),e.jsx("circle",{cx:"240",cy:"50",r:"8",fill:"#f43f5e"}),e.jsx("text",{x:"30",y:"94",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"speed(6) Normal"}),e.jsx("circle",{cx:"360",cy:"90",r:"8",fill:"#38bdf8"}),e.jsx("text",{x:"30",y:"134",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"speed(0) Fastest"}),e.jsx("circle",{cx:"580",cy:"130",r:"8",fill:"#34d399"}),e.jsx("text",{x:"30",y:"169",fill:"#a78bfa",fontSize:"11",fontWeight:"bold",children:"tracer(0) Instant"}),e.jsx("circle",{cx:"630",cy:"165",r:"9",fill:"#a78bfa",stroke:"#ffffff",strokeWidth:"2"})]})}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Active Tier: "}),e.jsx("strong",{className:"text-teal-300 font-mono",children:r.find(t=>t.key===s)?.label})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Delay: "}),e.jsx("strong",{className:"text-amber-300 font-mono",children:r.find(t=>t.key===s)?.delay})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Primary Application: "}),e.jsx("strong",{className:"text-slate-200",children:r.find(t=>t.key===s)?.useCase})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-teal-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Speed & Performance Method Prototypes"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Purpose"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:o.map((t,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-teal-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Speed Benchmark Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:h,title:"speed_settings_benchmark.py",highlightLines:[18,30,31,38]}),e.jsx(n,{fileModule:u,title:"tracer_vs_speed_zero_performance.py",highlightLines:[14,27,29,31]}),e.jsx(n,{fileModule:x,title:"interactive_speed_demonstrator.py",highlightLines:[18,25,33]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-teal-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"❄️"})," Jadavpur Mathematics Dept: Koch Snowflake Generator"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata and Mahima generate a Level-5 recursive Koch Snowflake with over 3,000 vector segments. Using default ",e.jsx("code",{className:"text-sky-300 font-mono",children:"speed(6)"}),", the script took nearly 2 minutes to finish; by switching to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"screen.tracer(0)"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.update()"}),", the fractal renders in just 0.04 seconds!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎓"})," Barrackpore Classroom: Live Step-by-Step Geometry"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Teacher Sukanta Hui sets ",e.jsx("code",{className:"text-sky-300 font-mono",children:"t.speed(1)"})," when demonstrating polygon interior angles on the projector. The slow crawl allows every student in the classroom to observe the exact moment the turtle pivots 72 degrees at each vertex."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Speed & Performance Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Assuming speed(10) is Fastest"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"speed(10)"})," still contains a small animation delay. ",e.jsx("code",{className:"text-emerald-300",children:"speed(0)"})," is the true fastest setting with zero delay."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Forgetting screen.update() with tracer(0)"}),e.jsxs("p",{className:"text-slate-400",children:["When using ",e.jsx("code",{className:"text-purple-300",children:"screen.tracer(0)"}),", drawings happen in RAM buffer. Forgetting ",e.jsx("code",{className:"text-emerald-300",children:"screen.update()"})," leaves the window blank!"]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Leaving Turtle Visible in Heavy Fractals"}),e.jsxs("p",{className:"text-slate-400",children:["Keeping the cursor visible forces Tkinter to repaint the turtle shape icon on every segment. Always call ",e.jsx("code",{className:"text-sky-300",children:"t.hideturtle()"})," for fractals."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Expecting speed() to Fix Slow Python Logic"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"speed()"})," only optimizes GUI animation delays; slow CPU loops (O(n²) algorithms) must be optimized mathematically."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the 5 standard speed tiers: 1 (slowest), 3, 6 (normal), 10, and 0 (fastest)","I understand why speed(0) represents zero animation delay timers","I can use screen.tracer(0) and screen.update() for instant fractal rendering","I know that t.hideturtle() speeds up drawing by avoiding cursor icon repaints","I can benchmark drawing duration accurately using time.perf_counter()","I know how to switch speeds dynamically between different phases of an illustration"].map((t,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why game developers use double buffering (drawing in RAM before showing the frame) to eliminate screen tearing and flickering."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How benchmark times drop from 20+ seconds down to 0.03 seconds when combining ",e.jsx("code",{className:"text-sky-300",children:"screen.tracer(0)"})," with ",e.jsx("code",{className:"text-sky-300",children:"t.hideturtle()"}),"."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Use ",e.jsx("code",{className:"text-amber-300",children:"screen.tracer(10, 20)"})," to update the screen once every 10 steps, creating a high-speed timelapse effect!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In production graphics engines (Unreal, Unity, Vulkan, Metal), separating the ",e.jsx("strong",{children:"Render Loop (painting to the screen)"})," from the ",e.jsx("strong",{children:"Simulation Loop (updating entity coordinates)"})," is the foundational rule of high-performance computing. In Turtle, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"tracer(0)"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"update()"})," introduce you to the same double-buffering architecture used by AAA game engines worldwide."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(c,{title:"Speed & Rendering Performance FAQs",questions:m})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(p,{content:f,title:"Topic 5: Speed & Performance Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(d,{note:"When students start coding complex geometric mandalas at Coder & AccoTax in Barrackpore and Kolkata, they often stare at the screen for 3 minutes waiting for the turtle to finish walking. Teaching them the magic of 'screen.tracer(0)' and 'screen.update()' is like handing them a superpower! Suddenly, complex 5,000-line fractals appear in the blink of an eye, empowering students to iterate, experiment, and push their creative limits."})})]})]})};export{T as default};

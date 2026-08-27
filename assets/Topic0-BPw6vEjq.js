import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as f}from"./TeacherSukantaHui-CC0AKmkm.js";import{P as o}from"./PythonFileLoader-hCi5osN-.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const y=[{question:"What is a Frame in computer animation?",shortAnswer:"A single static image rendered at a specific point in time within an animation sequence.",explanation:"Displaying consecutive frames at high speed creates the optical illusion of continuous motion.",hint:"What is each individual static snapshot in an animation called?",level:"basic",codeExample:"# Single frame render"},{question:"What does FPS stand for and why is 60 FPS standard in modern interactive graphics?",shortAnswer:"Frames Per Second; 60 FPS matches standard 60 Hz display refresh rates, delivering tear-free, butter-smooth motion.",explanation:"At 60 FPS, a new frame is rendered every 16.6 milliseconds, exceeding human flicker fusion rates.",hint:"What metric measures animation frame refresh frequency?",level:"basic",codeExample:"# 60 FPS = 16.6 ms per frame"},{question:"What are the 4 fundamental stages of a standard Game / Animation Loop?",shortAnswer:"1. Clear Previous Frame -> 2. Update Kinematic State -> 3. Render Geometry -> 4. Flush Buffer & Sleep `dt`.",explanation:"This 4-stage pipeline is universal across Turtle graphics, PyGame, Unity, and Unreal Engine.",hint:"What 4 steps happen on every tick of an animation loop?",level:"basic",codeExample:"t.clear(); x += vx; draw_ball(x); screen.update(); time.sleep(1/60)"},{question:"What is the frame duration budget for a 60 FPS target?",shortAnswer:"16.6 milliseconds (0.0166 seconds).",explanation:"`1.0 / 60.0 = 0.01666...` seconds. All drawing and physics calculations must complete within this window.",hint:"How many milliseconds do you have per frame at 60 FPS?",level:"basic",codeExample:"dt = 1.0 / 60.0  # 16.6 ms"},{question:"Why is `t.clear()` used instead of `t.reset()` inside the animation loop?",shortAnswer:"`t.clear()` wipes only the drawn lines while preserving pen color, size, and position; `t.reset()` resets all configurations to defaults.",explanation:"Reconfiguring pen states on every frame using `reset()` degrades performance.",hint:"Which method clears canvas lines without resetting pen styles?",level:"moderate",codeExample:"t.clear()  # Preserves pen state"},{question:"What happens if you forget to call `t.clear()` inside the animation loop?",shortAnswer:"The moving object leaves a solid, continuous smear trail of previous frames across the screen.",explanation:"Without clearing, previous frame geometry remains permanently on the canvas buffer.",hint:"What happens if old frames are never erased?",level:"basic",codeExample:"# Forgetting t.clear() creates permanent smears"},{question:"What is Delta-Time (dt) pacing?",shortAnswer:"Subtracting the actual computation time from the target frame duration: `sleep_time = max(0, frame_duration - elapsed)`.",explanation:"Delta-time compensation ensures steady frame rates regardless of CPU load variations.",hint:"How do you compensate for CPU calculation delays in animation pacing?",level:"advanced",codeExample:`elapsed = time.perf_counter() - start_time
time.sleep(max(0, 1/60 - elapsed))`},{question:"Why should `screen.tracer(0)` be invoked before starting an animation loop?",shortAnswer:"To suppress intermediate step repaints and enable instant back-buffer rendering.",explanation:"Without `tracer(0)`, Turtle animates every individual coordinate shift with heavy lag.",hint:"Which method enables double-buffered frame animation?",level:"basic",codeExample:"screen.tracer(0)"},{question:"How do you calculate the velocity step `dx` for an object moving 300 pixels in 2 seconds at 60 FPS?",shortAnswer:"Total frames = `2 * 60 = 120`; `dx = 300 / 120 = 2.5` pixels per frame.",explanation:"Dividing distance by total frame count yields the per-frame kinematic displacement.",hint:"How is displacement divided across total animation frames?",level:"moderate",codeExample:"dx = total_distance / (duration_sec * FPS)"},{question:"What causes 'screen tearing' in graphical animations?",shortAnswer:"When the display refreshes midway through a buffer swap, showing top half of new frame and bottom half of old frame.",explanation:"Vertical sync (VSync) synchronizes buffer swaps with monitor refresh intervals to prevent tearing.",hint:"What artifact occurs when buffer swaps desynchronize from display refresh?",level:"advanced",codeExample:"# Screen tearing vs VSync buffer synchronization"},{question:"How does 15 FPS visually compare to 60 FPS?",shortAnswer:"15 FPS appears visibly choppy and stuttering (strobing); 60 FPS delivers silky-smooth continuous movement.",explanation:"Higher frame rates reduce perceptual retinal jitter during fast motion.",hint:"What is the visual difference between low and high frame rates?",level:"basic",codeExample:"# 15 FPS = 66ms stutter | 60 FPS = 16.6ms fluid"},{question:"How do you animate a rotating object around a central pivot?",shortAnswer:"Increment an angle variable on each frame: `angle = (angle + speed) % 360` and pass it to your drawing function.",explanation:"Modulo 360 arithmetic keeps angular coordinates within standard circular bounds.",hint:"How do you update rotational angle per frame?",level:"moderate",codeExample:"angle = (angle + 3) % 360"},{question:"What is Persistence of Vision in human perception?",shortAnswer:"The physiological phenomenon where an image persists on the retina for ~1/25th of a second, blending discrete frames into continuous motion.",explanation:"Persistence of vision is the biological basis of cinema, television, and computer animation.",hint:"What biological principle enables humans to see animation as motion?",level:"moderate",codeExample:"# Biological persistence of vision blending frames"},{question:"Why should `time.perf_counter()` be used instead of `time.time()` for frame benchmarking?",shortAnswer:"`perf_counter()` provides the highest available resolution monotonic clock, unaffected by system clock adjustments.",explanation:"`perf_counter()` delivers sub-microsecond precision for animation timing.",hint:"Which time module function offers high-precision monotonic timing?",level:"advanced",codeExample:"t0 = time.perf_counter()"},{question:"How do you display a live HUD frame counter and FPS readout on canvas?",shortAnswer:"Use `t.write(f'Frame: {count} | FPS: {fps}', font=('Arial', 10, 'bold'))` during the render pass.",explanation:"Rendering diagnostic telemetry on screen aids debugging and performance profiling.",hint:"How do you write frame diagnostics onto the Turtle canvas?",level:"basic",codeExample:"t.write(f'FPS: {fps}', font=('Arial', 10, 'bold'))"},{question:"What is a Frame Drop (stutter) in animation loops?",shortAnswer:"When frame computation exceeds the 16.6 ms budget, causing the display to miss the refresh cycle and repeat a frame.",explanation:"Optimizing draw calls prevents frame budget overruns.",hint:"What happens when frame rendering takes longer than 16.6 ms?",level:"moderate",codeExample:"# Frame drop occurs when computation > 16.6 ms"},{question:"How do you animate multiple independent objects concurrently in a single frame loop?",shortAnswer:"Store objects in a list of dictionaries/classes, update all states in stage 2, and draw all in stage 3.",explanation:"Separating mass state updates from mass rendering ensures synchronization.",hint:"How are multiple moving objects coordinated in one loop?",level:"moderate",codeExample:"for obj in objects: obj.update(); obj.draw(t)"},{question:"Why is a `while True:` loop used for continuous games and animations?",shortAnswer:"To keep the simulation running perpetually until the user closes the window or triggers a game-over condition.",explanation:"The perpetual loop handles continuous real-time physics and graphics updates.",hint:"What loop construct runs continuous real-time simulations?",level:"basic",codeExample:`while running:
    # loop cycle`},{question:"How can you gracefully exit a `while True:` animation loop when the window is closed?",shortAnswer:"Catch `turtle.Terminator` or check a boolean flag `running = False` on window close.",explanation:"Handling termination exceptions prevents ugly console tracebacks on exit.",hint:"What exception is raised when closing an active Turtle window?",level:"advanced",codeExample:`try:
    while running: ...
except turtle.Terminator: pass`},{question:"What is Interpolation (Lerp) between frames?",shortAnswer:"Calculating intermediate positions between keyframes: `val = start + t * (end - start)`.",explanation:"Linear interpolation generates smooth transitions between discrete keypoint states.",hint:"What mathematical technique calculates intermediate animation states?",level:"advanced",codeExample:"x = x0 + progress * (x1 - x0)"},{question:"How do you draw a pulsating beacon that expands and contracts periodically?",shortAnswer:"Calculate radius using a sine wave: `radius = base_r + amplitude * math.sin(frame * speed)`.",explanation:"Trigonometric sine oscillations create natural breathing and pulsing effects.",hint:"What mathematical function generates smooth periodic pulsing?",level:"moderate",codeExample:"r = 30 + 10 * math.sin(frame * 0.1)"},{question:"Why should you separate physics state updates from drawing operations?",shortAnswer:"So physics calculations remain deterministic and can run at a fixed tick rate independent of rendering frame rates.",explanation:"Decoupling physics from rendering is standard in professional game engine design.",hint:"Why decouple physics calculations from rendering?",level:"advanced",codeExample:"# Fixed timestep physics + Variable timestep rendering"},{question:"What is Motion Blur in digital graphics?",shortAnswer:"The visual streaking of rapidly moving objects caused by sensor exposure time or persistence of vision.",explanation:"Rendering subtle trailing ghost sprites simulates motion blur in vector graphics.",hint:"What effect streaks fast-moving objects across frames?",level:"advanced",codeExample:"# Ghost trails with fading opacity"},{question:"How do you achieve 120 FPS or 144 FPS animation in high-refresh displays?",shortAnswer:"Set `frame_duration = 1.0 / 144.0` (6.94 ms budget) and minimize draw calls with `tracer(0)`.",explanation:"Sub-7ms frame budgets require aggressive draw call batching and object pooling.",hint:"What frame duration budget corresponds to 144 FPS gaming?",level:"expert",codeExample:"dt = 1.0 / 144.0  # 6.94 ms"},{question:"How do you animate an object moving along a parametric circular orbit?",shortAnswer:"Calculate `x = cx + r * cos(theta)` and `y = cy + r * sin(theta)`, incrementing `theta` on every frame.",explanation:"Polar-to-Cartesian conversion per frame produces perfect circular orbital paths.",hint:"What formulas compute orbital motion per frame?",level:"moderate",codeExample:"x = cx + r * math.cos(theta); y = cy + r * math.sin(theta)"},{question:"Why is `time.sleep(0)` sometimes used inside high-speed animation loops?",shortAnswer:"To yield the CPU timeslice briefly to the operating system and Tkinter event queue without introducing noticeable delay.",explanation:"Yielding prevents 100% CPU thread starvation during tight loops.",hint:"Why yield CPU timeslices with time.sleep(0)?",level:"expert",codeExample:"time.sleep(0.001)"},{question:"What is Keyframing in animation design?",shortAnswer:"Defining critical landmark poses at specific timestamps, and calculating in-between frames mathematically.",explanation:"Keyframing allows artists to choreograph complex character motion timelines.",hint:"What technique defines landmark poses with in-between frame interpolation?",level:"moderate",codeExample:"# Keyframe 0s: (0,0) | Keyframe 2s: (300, 100)"},{question:"How do you measure actual measured FPS versus target FPS?",shortAnswer:"Count frames rendered over 1 second: `fps = frame_count / (now - last_report_time)`.",explanation:"Tracking 1-second rolling averages yields accurate real-world FPS performance metrics.",hint:"How is rolling average FPS calculated in real time?",level:"moderate",codeExample:"fps = frames_rendered / elapsed_seconds"},{question:"What is the 5-step checklist for building a 60 FPS animation loop in Python Turtle?",shortAnswer:"1. `screen.tracer(0)` | 2. `t.clear()` | 3. Update coordinates | 4. Draw frame | 5. `screen.update()` + `sleep(1/60)`.",explanation:"Following this 5-step framework guarantees rock-solid, fluid animation.",hint:"What 5 steps guarantee rock-solid 60 FPS animation in Turtle?",level:"basic",codeExample:"# 1. tracer(0) | 2. clear | 3. update state | 4. draw | 5. update & sleep"},{question:"Why is understanding frame loops crucial for future game engine and frontend frameworks?",shortAnswer:"Because `requestAnimationFrame` in web browsers, PyGame game loops, and Unreal Engine tick cycles all follow this exact architecture.",explanation:"Frame loop principles apply directly to all modern interactive real-time systems.",hint:"How does Turtle frame looping connect to web requestAnimationFrame and game engines?",level:"basic",codeExample:"# Universal frame loop architecture"}],w=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 0 - Frame-based animation concepts and frames per second (FPS)\r
File: frame_animation_fundamentals.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the classic 4-stage Game/Animation Loop:\r
1. Erase / Clear previous frame (\`t.clear()\`)\r
2. Update mathematical state (x += vx, y += vy)\r
3. Render frame geometry\r
4. Flush GPU buffer (\`screen.update()\`) & Frame Delta Sleep (\`time.sleep(1/60)\`)\r
"""\r
\r
import turtle\r
import time\r
\r
def run_frame_loop():\r
    screen = turtle.Screen()\r
    screen.title("Frame-Based Animation Loop - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=500)\r
    screen.tracer(0)  # Suppress automatic redraws\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Ball kinematic state\r
    x, y = -300, 0\r
    vx = 4  # 4 pixels per frame\r
\r
    fps_target = 60\r
    frame_duration = 1.0 / fps_target\r
    frame_count = 0\r
\r
    while x < 300:\r
        start_time = time.perf_counter()\r
\r
        # 1. Clear previous frame\r
        t.clear()\r
\r
        # 2. Update physics state\r
        x += vx\r
        frame_count += 1\r
\r
        # 3. Render current frame\r
        t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\r
        t.color("white", "#38bdf8")\r
        t.begin_fill()\r
        t.circle(25)\r
        t.end_fill()\r
\r
        # HUD Info\r
        t.penup(); t.goto(-320, 200); t.pendown()\r
        t.color("#94a3b8")\r
        t.write(f"Frame: {frame_count:04d}  |  Target: {fps_target} FPS  |  Pos: ({x:.1f}, {y:.1f})", font=("Arial", 11, "bold"))\r
\r
        # 4. Flush Buffer\r
        screen.update()\r
\r
        # Delta time pacing to guarantee constant 60 FPS\r
        elapsed = time.perf_counter() - start_time\r
        sleep_time = max(0.0, frame_duration - elapsed)\r
        time.sleep(sleep_time)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_frame_loop()\r
`,v=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 0 - Frame-based animation concepts and frames per second (FPS)\r
File: fps_benchmark_pacing.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates visual smoothness comparisons across 15 FPS, 30 FPS, and 60 FPS,\r
illustrating frame delta time calculation:\r
- 15 FPS: 66.6 ms per frame (Noticeable stutter)\r
- 30 FPS: 33.3 ms per frame (Standard video playback)\r
- 60 FPS: 16.6 ms per frame (Fluid gaming standard)\r
"""\r
\r
import turtle\r
import time\r
\r
def run_multi_fps_comparison():\r
    screen = turtle.Screen()\r
    screen.title("FPS Pacing Benchmark - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=500)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # 3 Balls running at different FPS refresh intervals\r
    balls = [\r
        {"name": "15 FPS (Choppy)",  "y": 100,  "fps": 15, "color": "#f43f5e", "x": -350, "last_t": 0},\r
        {"name": "30 FPS (Standard)","y": 0,    "fps": 30, "color": "#fbbf24", "x": -350, "last_t": 0},\r
        {"name": "60 FPS (Fluid)",   "y": -100, "fps": 60, "color": "#34d399", "x": -350, "last_t": 0}\r
    ]\r
\r
    start_time = time.perf_counter()\r
\r
    while True:\r
        now = time.perf_counter()\r
        t.clear()\r
\r
        # Tracklines\r
        for b in balls:\r
            t.penup(); t.goto(-350, b["y"]); t.pendown()\r
            t.color("#334155"); t.forward(700)\r
            t.penup(); t.goto(-350, b["y"] + 25); t.pendown()\r
            t.color("#94a3b8"); t.write(f"{b['name']} ({1000/b['fps']:.1f} ms frame)", font=("Arial", 10, "bold"))\r
\r
        # Update and render balls based on their target FPS timers\r
        all_finished = True\r
        for b in balls:\r
            frame_dt = 1.0 / b["fps"]\r
            if now - b["last_t"] >= frame_dt:\r
                b["x"] += (600 / (b["fps"] * 4.0))  # 4 seconds to cross\r
                b["last_t"] = now\r
\r
            if b["x"] < 350:\r
                all_finished = False\r
\r
            # Draw Ball\r
            t.penup(); t.goto(b["x"], b["y"]); t.pendown()\r
            t.color("white", b["color"])\r
            t.begin_fill(); t.circle(18); t.end_fill()\r
\r
        screen.update()\r
        if all_finished:\r
            break\r
        time.sleep(0.001)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_multi_fps_comparison()\r
`,S=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 0 - Frame-based animation concepts and frames per second (FPS)\r
File: spinning_radar_sweep_animator.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates a continuous frame-by-frame 60 FPS rotational radar screen animation\r
with persistent phosphor trail fading and rotating sweep line.\r
"""\r
\r
import turtle\r
import time\r
import math\r
\r
def run_radar_simulation():\r
    screen = turtle.Screen()\r
    screen.title("60 FPS Radar Sweep Animation - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    angle = 0\r
    radius = 180\r
\r
    for frame in range(360):\r
        t.clear()\r
\r
        # 1. Concentric Radar Grid Rings\r
        for r in [60, 120, 180]:\r
            t.penup(); t.goto(0, -r); t.setheading(0); t.pendown()\r
            t.color("#064e3b")\r
            t.circle(r)\r
\r
        # Crosshairs\r
        t.penup(); t.goto(-radius, 0); t.pendown(); t.color("#064e3b"); t.goto(radius, 0)\r
        t.penup(); t.goto(0, -radius); t.pendown(); t.color("#064e3b"); t.goto(0, radius)\r
\r
        # 2. Rotating Sweep Line\r
        angle = (angle + 3) % 360\r
        rad = math.radians(angle)\r
        sweep_x = radius * math.cos(rad)\r
        sweep_y = radius * math.sin(rad)\r
\r
        t.penup(); t.goto(0, 0); t.pendown()\r
        t.color("#34d399"); t.pensize(3)\r
        t.goto(sweep_x, sweep_y)\r
        t.pensize(2)\r
\r
        # 3. Blip Target\r
        t.penup(); t.goto(80, 70); t.pendown()\r
        t.dot(10, "#fbbf24")\r
\r
        # HUD\r
        t.penup(); t.goto(-200, -220); t.pendown()\r
        t.color("#34d399")\r
        t.write(f"RADAR ACTIVE · BEARING: {angle:03d}° · 60 FPS STABLE", font=("Courier", 10, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)  # 60 FPS\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_radar_simulation()\r
`,j=`================================================================================\r
  TOPIC 0: FRAME-BASED ANIMATION CONCEPTS AND FRAMES PER SECOND (FPS)\r
  MODULE: 005_005 - Animation & Motion Logic\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS FRAME-BASED ANIMATION?\r
--------------------------------------------------------------------------------\r
Animation is an optical illusion created by rendering a rapid sequence of static\r
images (frames). The human visual system blends individual frames into continuous\r
fluid motion via the persistence of vision phenomenon.\r
\r
2. THE 4-STAGE CORE GAME / ANIMATION LOOP\r
--------------------------------------------------------------------------------\r
Every animated game and simulation executes this identical 4-stage cycle per frame:\r
1. \`t.clear()\`: Erases the previous frame geometry from the back buffer.\r
2. Update State: Updates mathematical physics variables (\`x += vx\`, \`theta += omega\`).\r
3. Render Frame: Draws the new scene objects at their updated coordinates.\r
4. Flush & Pace: Calls \`screen.update()\` and sleeps \`time.sleep(1/FPS)\`.\r
\r
3. STANDARD FRAME RATES & FRAME DELTA BUDGETS\r
--------------------------------------------------------------------------------\r
- 15 FPS: 66.6 ms per frame (Stuttery, low-power mode)\r
- 30 FPS: 33.3 ms per frame (Standard video playback)\r
- 60 FPS: 16.6 ms per frame (Standard modern fluid gaming budget)\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,_=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseRadar {
  0% { opacity: 0.3; }
  50% { opacity: 0.8; filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.7)); }
  100% { opacity: 0.3; }
}
`,C=()=>{const[a,d]=i.useState(60),[c,m]=i.useState(20),[p,u]=i.useState(0);i.useEffect(()=>{const t=1e3/a,n=280/(a*2.5),x=setInterval(()=>{m(s=>s>=290?20:s+n),u(s=>s+1)},t);return()=>clearInterval(x)},[a]);const l={15:{label:"15 FPS (Choppy / Low Power)",dt:"66.6 ms",status:"Noticeable Strobe Stutter",color:"#f43f5e"},30:{label:"30 FPS (Standard Video)",dt:"33.3 ms",status:"Playable Standard Motion",color:"#fbbf24"},60:{label:"60 FPS (Fluid Game Standard)",dt:"16.6 ms",status:"Silky Smooth Pro Animation",color:"#34d399"}},r=l[a]||l[60],h=[{name:"screen.tracer(0)",returnType:"Display Double-Buffering",purpose:"Disables automatic canvas redraws; buffers all drawing in memory for single-tick frame rendering.",usage:"screen.tracer(0)"},{name:"t.clear()",returnType:"Frame Buffer Erase",purpose:"Wipes previous frame geometry without resetting pen colors, positions, or configurations.",usage:"t.clear()"},{name:"screen.update()",returnType:"GPU Buffer Swap",purpose:"Atomically flushes the completed back-buffer frame to the display monitor.",usage:"screen.update()"},{name:"time.sleep(1/60)",returnType:"Frame Delta Pacing",purpose:"Paces loop timing to guarantee stable 60 FPS frame rate budgets (16.6 ms per frame).",usage:"time.sleep(max(0, 1/60 - elapsed))"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:_}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 · Animation & Motion Logic · Topic 0"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Frame-Based Animation & Frames Per Second (FPS)"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Unravel the core physics and graphics engine loop. Master the 4-stage ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Clear → Update → Render → Flush"})," pipeline, ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"60 FPS pacing budgets (16.6 ms)"}),", and smooth delta-time calculations."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔄 4-Stage Animation Loop"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⏱️ 60 FPS Frame Delta Budget (16.6 ms)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚡ Double-Buffered screen.update()"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎮"})," Real-Time FPS Smoothness Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch frame rates to experience visual motion smoothness differences between 15 FPS, 30 FPS, and 60 FPS in real time."})]}),e.jsx("div",{className:"flex items-center gap-2",children:[15,30,60].map(t=>e.jsxs("button",{onClick:()=>d(t),className:`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${a===t?"bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:[t," FPS"]},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-emerald-400 mb-2",children:["Live Frame Simulation (",a," FPS Refresh)"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("line",{x1:"20",y1:"90",x2:"300",y2:"90",stroke:"#334155",strokeWidth:"2",strokeDasharray:"4 4"}),e.jsx("line",{x1:"20",y1:"80",x2:"20",y2:"100",stroke:"#64748b",strokeWidth:"2"}),e.jsx("line",{x1:"300",y1:"80",x2:"300",y2:"100",stroke:"#64748b",strokeWidth:"2"}),e.jsx("circle",{cx:c,cy:"90",r:"16",fill:r.color,stroke:"#ffffff",strokeWidth:"2",className:"transition-none"}),e.jsxs("text",{x:"25",y:"30",fill:"#94a3b8",fontSize:"10",fontFamily:"monospace",children:["Frame: ",String(p).padStart(5,"0")," | Pacing: ",r.dt]}),e.jsx("text",{x:"25",y:"155",fill:r.color,fontSize:"11",fontWeight:"bold",fontFamily:"monospace",children:r.status})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-emerald-400 flex justify-between items-center",children:[e.jsx("span",{children:"Frame Timing Analysis"}),e.jsxs("span",{className:"font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300",children:[r.dt," Budget"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Frame Duration Budget"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:r.dt}),e.jsxs("div",{className:"text-[10px] text-slate-500",children:["1.0 / ",a," sec"]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Motion Smoothness"}),e.jsxs("div",{className:"text-base font-mono font-bold text-emerald-400",children:[a," FPS"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:r.status})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Core 4-Stage Animation Loop"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`while running:
    t.clear()         # 1. Erase previous frame
    x += vx           # 2. Update physics state
    draw_ball(t, x)   # 3. Render frame geometry
    screen.update()   # 4. Flush back-buffer
    time.sleep(${1/a>=.01?(1/a).toFixed(4):"0.0166"})  # Delta sleep`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Core Animation Loop APIs & Pacing"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Loop Method / API"}),e.jsx("th",{className:"py-3 px-4",children:"Loop Stage"}),e.jsx("th",{className:"py-3 px-4",children:"Mechanics & Performance Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:h.map((t,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Animation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{fileModule:w,title:"frame_animation_fundamentals.py",highlightLines:[19,30,33,40,48,51,52]}),e.jsx(o,{fileModule:v,title:"fps_benchmark_pacing.py",highlightLines:[18,38,40,41,52,54]}),e.jsx(o,{fileModule:S,title:"spinning_radar_sweep_animator.py",highlightLines:[15,23,34,38,47,48]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏓"})," Barrackpore Arcade: The 60 FPS Pong Fix"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima was coding a classic retro Pong game in Barrackpore. When the ball moved, it left an ugly smeared streak across the paddle. Teacher Sukanta Hui guided her to implement the 4-stage game loop: clearing the previous frame with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"t.clear()"}),", updating ball coordinates, and pacing with a 16.6 ms delta sleep. The game became buttery smooth at 60 FPS!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"📡"})," Jadavpur Simulation: 360° Radar Sweep"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu built an air traffic control radar in Jadavpur. By executing a 60 FPS animation loop with rotational angle increments and persistent green phosphor blips, he simulated a glowing military aviation radar display completely within standard Python Turtle."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Frame Animation Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting t.clear() in Loop"}),e.jsx("p",{className:"text-slate-400",children:"Failing to erase the previous frame leaves a permanent solid smear trail across the canvas behind moving objects."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Confusing t.reset() with t.clear()"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-rose-300 font-mono",children:"t.reset()"})," wipes pen color, thickness, and speed settings back to default on every frame, causing massive slowdown and color reset bugs."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Hardcoding Sleep Without Delta Time"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"time.sleep(0.0166)"})," without subtracting the render calculation time causes frame times to exceed 25ms, dropping the animation to 40 FPS."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Instantiating Turtles Inside Loops"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t = turtle.Turtle()"})," inside a 60 FPS loop creates 3,600 objects per minute, causing immediate memory leaks and browser/Python freezes."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand the universal 4-stage Game/Animation Loop (Clear -> Update -> Draw -> Flush)","I know why 60 FPS requires completing each frame within a 16.6 millisecond budget","I always use `t.clear()` instead of `t.reset()` to erase previous frame geometry","I know how to pace frame timing using delta-time subtraction and `time.sleep()`","I understand how `screen.tracer(0)` and `screen.update()` prevent screen tearing","I can calculate frame-by-frame velocity displacement `dx = distance / total_frames`"].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},n))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-emerald-900/20 rounded-2xl p-5 border border-emerald-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How video game consoles like PlayStation 5 and Nintendo Switch lock their rendering pipelines to 60 FPS or 120 FPS!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How switching the simulator to 15 FPS makes the ball stutter like a 1920s silent film, while 60 FPS glides effortlessly!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Animate a pulsing beating heart using a sine wave function ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"radius = 30 + 10 * sin(frame * 0.1)"}),"!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Every video game and interactive application in existence—from simple 2D retro arcade games to massive AAA 3D open-world engines—is fundamentally built on the exact same loop you learned today: clear the frame, update the math, draw the world, and swap the buffer. Master this loop, and you hold the key to all real-time interactive computer software."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(g,{title:"Frame Animation & FPS Concepts FAQs",questions:y})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(b,{content:j,title:"Topic 0: Frame Animation & FPS Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(f,{note:"Welcome to Module 005_005 at Coder & AccoTax in Barrackpore and Kolkata! This is where static drawings spring to life. When students see their code transition from drawing motionless shapes to generating 60 FPS real-time animated physics, a whole new world of game development and simulation opens up before their eyes. Remember the golden loop: clear, update, draw, and flush!"})})]})]})};export{C as default};

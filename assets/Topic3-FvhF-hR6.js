import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as x}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const y=[{question:"What is the primary difference between `time.sleep()` and `screen.ontimer()`?",shortAnswer:"`time.sleep()` synchronously blocks the execution thread; `ontimer()` asynchronously schedules callbacks inside Tkinter's event loop.",explanation:"`ontimer()` allows keyboard/mouse events to be processed while waiting for the next frame tick.",hint:"Which timing method is non-blocking and integrates with event loops?",level:"basic",codeExample:"screen.ontimer(game_tick, 16)"},{question:"How do you construct a continuous animation loop using `screen.ontimer()`?",shortAnswer:"Define a `game_tick()` function and have it call `screen.ontimer(game_tick, 16)` at the end of its own body.",explanation:"Recursive callback scheduling creates an infinite, non-blocking 60 FPS animation loop.",hint:"How does a function re-schedule itself with ontimer?",level:"basic",codeExample:`def tick():
    update_game()
    screen.ontimer(tick, 16)`},{question:"What unit of time does `screen.ontimer(fun, t)` accept for its delay parameter `t`?",shortAnswer:"Milliseconds (e.g. `16` ms corresponds to ~60 FPS; `1000` ms corresponds to 1 second).",explanation:"Unlike `time.sleep()` which accepts seconds in floats, `ontimer()` takes integer milliseconds.",hint:"Does ontimer take seconds or milliseconds?",level:"basic",codeExample:"screen.ontimer(callback, 16)  # 16 milliseconds"},{question:"What is Framerate Independence in game physics?",shortAnswer:"Ensuring game objects move at identical physical speeds regardless of whether the hardware runs at 30 FPS, 60 FPS, or 144 FPS.",explanation:"Multiplying velocity by delta-time `dt` eliminates hardware-dependent speed variations.",hint:"What principle ensures game speed remains constant on fast and slow computers?",level:"moderate",codeExample:"x += speed_px_per_sec * dt"},{question:"Why can `time.sleep(1.0)` make keyboard input feel unresponsive or frozen?",shortAnswer:"Because `time.sleep()` completely halts the OS thread, preventing Tkinter from polling keyboard and mouse keypress events.",explanation:"Blocking the main thread starves the GUI event dispatch queue.",hint:"Why does time.sleep() freeze keyboard responsiveness?",level:"moderate",codeExample:"# time.sleep(1) blocks GUI event pump"},{question:"How do you calculate Delta-Time (dt) in Python?",shortAnswer:"`now = time.perf_counter(); dt = now - last_time; last_time = now`.",explanation:"Tracking elapsed monotonic clock duration between frames gives precise delta-time values in seconds.",hint:"What formula calculates the exact duration between consecutive frames?",level:"moderate",codeExample:"dt = time.perf_counter() - last_time"},{question:"How do you run two independent timers concurrently using `screen.ontimer()`?",shortAnswer:"Schedule two separate callbacks with different millisecond intervals (e.g. 16ms for physics, 1000ms for clock).",explanation:"Tkinter's event scheduler multiplexes multiple concurrent timer callbacks seamlessly.",hint:"How are multi-interval timers scheduled in Turtle?",level:"moderate",codeExample:`screen.ontimer(physics_tick, 16)
screen.ontimer(clock_tick, 1000)`},{question:"What role does `screen.mainloop()` play in an `ontimer()` based application?",shortAnswer:"It enters Tkinter's persistent event loop, actively listening for keyboard events and firing scheduled timers.",explanation:"`screen.mainloop()` keeps the application alive without blocking CPU execution.",hint:"What method starts Tkinter's background event listener loop?",level:"basic",codeExample:"screen.mainloop()"},{question:"How do you stop or cancel a recursive `ontimer()` loop?",shortAnswer:"Check a boolean flag `if not running: return` at the start of the callback, or simply don't call `ontimer()` again.",explanation:"Condition-gating the recursive timer call allows clean pausing and game-over terminations.",hint:"How is a recursive ontimer loop cleanly exited?",level:"basic",codeExample:"if game_over: return  # Ceases timer rescheduling"},{question:"Why should `time.perf_counter()` be used over `time.time()` for delta-time physics?",shortAnswer:"`perf_counter()` is guaranteed monotonic and has nanosecond resolution, whereas `time.time()` can jump backwards during system clock syncs.",explanation:"Monotonic clocks prevent negative delta-time physics explosion glitches.",hint:"Why is perf_counter safer than time.time() for game physics?",level:"advanced",codeExample:"dt = time.perf_counter() - t0"},{question:"What is a 'Spiral of Death' in variable delta-time physics engines?",shortAnswer:"When a frame drop causes a huge `dt`, requiring more physics steps, causing an even larger frame drop, freezing the game.",explanation:"Clamping maximum `dt` (e.g. `min(dt, 0.05)`) protects physics loops from spiraling.",hint:"What happens when large dt values cause compounding computation delays?",level:"expert",codeExample:"dt = min(dt, 0.05)  # Delta clamp protection"},{question:"How do you implement smooth keyboard-driven character movement using `ontimer()`?",shortAnswer:"Track keys in a `pressed_keys = {}` dictionary via `onkeypress`/`onkeyrelease`, and apply velocity inside the 16ms `ontimer()` loop.",explanation:"Decoupling key state tracking from kinematic updates produces buttery smooth directional movement.",hint:"How do key state dictionaries enable smooth continuous movement?",level:"advanced",codeExample:"if keys['Left']: x -= speed"},{question:"What is the equivalent of `screen.ontimer()` in web browser JavaScript?",shortAnswer:"`requestAnimationFrame(callback)` or `setTimeout(callback, delay)`.",explanation:"Both JavaScript and Python GUI frameworks use asynchronous event loop timer scheduling.",hint:"What web API schedules asynchronous frame callbacks in browsers?",level:"basic",codeExample:"// JavaScript: requestAnimationFrame(tick)"},{question:"Why is `time.sleep(0.016)` in a `while True:` loop not guaranteed to run at exactly 60 FPS?",shortAnswer:"OS thread scheduling jitter and execution time of the drawing code add extra milliseconds onto the 16ms sleep.",explanation:"Uncompensated sleeps always drift and run slower than the theoretical target.",hint:"Why do raw sleep calls drift over time?",level:"moderate",codeExample:"# Sleep compensation: target_dt - render_time"},{question:"How do you pause and resume an `ontimer()` game cleanly?",shortAnswer:"Set `is_paused = True`; when unpausing, reset `last_time = time.perf_counter()` and re-trigger `screen.ontimer(tick, 16)`.",explanation:"Resetting `last_time` on unpause prevents massive delta-time jumps.",hint:"What must be reset when unpausing delta-time games?",level:"moderate",codeExample:"def unpause(): last_t = time.perf_counter(); ontimer(tick, 16)"},{question:"What happens if an `ontimer()` callback takes 30ms to compute when scheduled for every 16ms?",shortAnswer:"The callback finishes as fast as possible, and the next tick is scheduled 16ms AFTER completion, dropping effective framerate to ~22 FPS.",explanation:"Tkinter will not execute overlapping instances of the same timer callback.",hint:"Does ontimer queue overlapping callback instances if computation exceeds delay?",level:"advanced",codeExample:"# Graceful degradation under heavy CPU load"},{question:"How can you implement a one-shot delay (e.g. explosive blast disappearing after 500ms)?",shortAnswer:"Call `screen.ontimer(erase_blast, 500)` without rescheduling it inside `erase_blast`.",explanation:"A single, non-recursive `ontimer` call acts as a one-shot delayed trigger.",hint:"How is a non-recurring timer created with ontimer?",level:"basic",codeExample:"screen.ontimer(remove_explosion, 500)  # One-shot"},{question:"What is Fixed Timestep vs Variable Timestep in physics simulation?",shortAnswer:"Fixed timestep updates physics in exact deterministic increments (e.g. 1/60s); variable timestep uses real measured `dt`.",explanation:"Fixed timesteps guarantee reproducible, glitch-free physics simulations.",hint:"Which physics model uses exact constant mathematical time increments?",level:"advanced",codeExample:"# Fixed dt = 0.01666 for deterministic physics"},{question:"Why should drawing code NEVER contain `time.sleep()` calls inside helper functions?",shortAnswer:"Sleeping inside drawing helpers blocks the entire frame presentation, destroying framerate and responsiveness.",explanation:"Timing delays must exist strictly at the outer boundary of the frame loop.",hint:"Where should timing pacing reside in an animation codebase?",level:"basic",codeExample:"# Keep drawing functions pure and delay-free"},{question:"How do you animate a countdown timer from 10 to 0 on screen?",shortAnswer:"In a 1000ms `ontimer()` callback: decrement `count`, redraw the HUD text, and schedule next tick if `count > 0`.",explanation:"1-second timer callbacks cleanly drive game HUD countdowns.",hint:"How is a 1-second countdown loop structured with ontimer?",level:"basic",codeExample:`def count_tick():
    if count > 0: count -= 1; ontimer(count_tick, 1000)`},{question:"What is Cooperative Multitasking in GUI event loops?",shortAnswer:"Tasks voluntarily yield control back to the event loop (via timer callbacks) so other events (keyboard, mouse, redraws) can run.",explanation:"`ontimer` relies on cooperative yielding to prevent GUI application hangs.",hint:"What multitasking model relies on functions completing quickly to yield execution?",level:"advanced",codeExample:"# Cooperative event-loop yielding"},{question:"How do you create an ease-in-out smooth camera pan using delta-time?",shortAnswer:"Calculate progress `t = elapsed / duration` and apply a smoothstep formula `s = t*t*(3 - 2*t)` to camera position.",explanation:"Mathematical easing formulas produce organic, cinematic camera movements.",hint:"What formula generates smooth cubic ease-in-out transitions?",level:"expert",codeExample:"smooth_t = t * t * (3 - 2 * t)"},{question:"Why is `screen.listen()` required before keyboard events can trigger?",shortAnswer:"It gives Tkinter canvas focus so that keyboard keystrokes are routed to the Turtle window.",explanation:"Without focus via `listen()`, keystrokes are ignored by the application.",hint:"What method gives window keyboard focus in Turtle?",level:"basic",codeExample:"screen.listen()"},{question:"How do you measure the exact jitter of an `ontimer(callback, 16)` loop?",shortAnswer:"Record timestamps on each invocation and calculate standard deviation of `(now - last_t - 0.016)`.",explanation:"Timing jitter analysis reveals background OS scheduler interference.",hint:"How do you quantify deviations from target frame intervals?",level:"advanced",codeExample:"jitter = abs((now - last_t) - 0.016)"},{question:"What is the recommended approach for arcade game projects in Python Turtle?",shortAnswer:"Use `screen.ontimer(tick, 16)` for the main loop, `onkeypress`/`onkeyrelease` for input, and `screen.mainloop()`.",explanation:"Event-driven architecture provides the highest input responsiveness and cleanest code structure.",hint:"What is the industry-standard architecture for interactive Turtle games?",level:"basic",codeExample:"# ontimer + onkeypress + mainloop"},{question:"How can you simulate slow-motion effects using delta-time?",shortAnswer:"Multiply `dt` by a `time_scale` factor (e.g. `dt_effective = dt * 0.25` for 4x slow-motion).",explanation:"Time scaling cleanly adjusts global simulation speed without altering physics formulas.",hint:"How do you implement matrix-style bullet time slow motion?",level:"moderate",codeExample:"x += velocity * (dt * time_scale)"},{question:"Why should you avoid passing lambda expressions with complex logic directly into `ontimer()`?",shortAnswer:"Complex lambdas reduce code readability and make debugging stack traces difficult; use named functions instead.",explanation:"Named functions clarify call stacks and improve code maintainability.",hint:"Why are named callback functions preferred over inline lambdas for ontimer?",level:"basic",codeExample:"# Preferred: def tick(): ...; screen.ontimer(tick, 16)"},{question:"What is the maximum practical timer resolution of `ontimer()` on Windows/macOS?",shortAnswer:"Typically 10 to 15 milliseconds due to OS system timer interrupt granularity.",explanation:"16ms (~60 FPS) aligns perfectly with OS hardware timer ticks.",hint:"What is the typical timer resolution on desktop operating systems?",level:"expert",codeExample:"# ~15ms OS timer granularity"},{question:"What is the 3-step checklist for building an Event-Driven Game Loop in Python Turtle?",shortAnswer:"1. Bind inputs with `onkeypress()` & `screen.listen()` | 2. Define recursive `ontimer(tick, 16)` loop | 3. Call `screen.mainloop()`.",explanation:"Following this 3-step blueprint guarantees responsive, professional game loop architecture.",hint:"What 3 steps build a complete event-driven game engine in Turtle?",level:"basic",codeExample:"# 1. listen/onkeypress | 2. ontimer(tick, 16) | 3. mainloop()"},{question:"How does mastering `ontimer()` prepare students for modern software engineering?",shortAnswer:"It teaches the asynchronous event-driven programming paradigm that powers Node.js, React, Android/iOS apps, and web sockets.",explanation:"Event-driven asynchronous design is one of the most vital paradigms in modern software development.",hint:"Why is asynchronous event loop mastery critical for full-stack software engineers?",level:"basic",codeExample:"# Asynchronous event-driven programming foundations"}],b=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 3 - Timing and loop delays using time.sleep() and ontimer()\r
File: blocking_sleep_vs_ontimer.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Direct comparison between two animation paradigms:\r
1. BLOCKING: \`while True:\` loop paired with \`time.sleep(1/60)\`\r
   - Simple, linear, but can block Tkinter UI events if delays are large.\r
2. NON-BLOCKING: \`screen.ontimer(game_tick, 16)\`\r
   - Event-driven, cooperative multitasking, fully responsive to keyboard/mouse events.\r
"""\r
\r
import turtle\r
import time\r
\r
def run_ontimer_nonblocking_demo():\r
    screen = turtle.Screen()\r
    screen.title("Non-Blocking ontimer() Animation Loop - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=500)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    # Ball State\r
    state = {"x": -250, "vx": 4, "angle": 0, "frame": 0}\r
\r
    def game_tick():\r
        """Non-blocking frame tick callback scheduled every 16 ms (~60 FPS)."""\r
        t.clear()\r
\r
        # Update math\r
        state["x"] += state["vx"]\r
        state["angle"] = (state["angle"] + 5) % 360\r
        state["frame"] += 1\r
\r
        if state["x"] > 250 or state["x"] < -250:\r
            state["vx"] *= -1\r
\r
        # Draw Rotating Spinner Ball\r
        t.penup(); t.goto(state["x"], 0); t.pendown()\r
        t.color("#38bdf8", "#0284c7")\r
        t.begin_fill(); t.circle(25); t.end_fill()\r
\r
        # Spoke Line\r
        t.penup(); t.goto(state["x"], 25); t.setheading(state["angle"]); t.pendown()\r
        t.color("#fbbf24"); t.forward(25)\r
\r
        # HUD Telemetry\r
        t.penup(); t.goto(-320, 190); t.pendown()\r
        t.color("#34d399")\r
        t.write(f"ontimer(16ms) NON-BLOCKING TICK · FRAME: {state['frame']:04d}", font=("Arial", 11, "bold"))\r
\r
        # Flush buffer\r
        screen.update()\r
\r
        # Recursively schedule NEXT frame tick in 16ms\r
        screen.ontimer(game_tick, 16)\r
\r
    # Launch initial tick\r
    game_tick()\r
\r
    # Enter Tkinter main event loop (Never blocks!)\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_ontimer_nonblocking_demo()\r
`,v=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 3 - Timing and loop delays using time.sleep() and ontimer()\r
File: event_driven_multitasker_ontimer.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Event-driven multitasking architecture:\r
- Timer 1 (16 ms): Smooth 60 FPS character rendering & physics\r
- Timer 2 (1000 ms): 1-second countdown clock & game state timer\r
- Keyboard Events: Immediate arrow key responsiveness without lag\r
"""\r
\r
import turtle\r
\r
def run_event_driven_multitasker():\r
    screen = turtle.Screen()\r
    screen.title("Event-Driven Multitasker with ontimer - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    # Turtles\r
    actor_t = turtle.Turtle(); actor_t.hideturtle()\r
    hud_t = turtle.Turtle(); hud_t.hideturtle()\r
\r
    player = {"x": 0, "y": -150, "speed": 15}\r
    obstacle = {"x": -300, "y": 50, "vx": 4}\r
    game_state = {"seconds_elapsed": 0, "running": True}\r
\r
    # Keyboard Handlers (Instant responsiveness!)\r
    def move_left(): player["x"] = max(-300, player["x"] - player["speed"])\r
    def move_right(): player["x"] = min(300, player["x"] + player["speed"])\r
\r
    screen.listen()\r
    screen.onkeypress(move_left, "Left")\r
    screen.onkeypress(move_right, "Right")\r
\r
    # 1. 60 FPS Physics & Render Loop (every 16 ms)\r
    def render_loop():\r
        if not game_state["running"]: return\r
        actor_t.clear()\r
\r
        # Update Obstacle\r
        obstacle["x"] += obstacle["vx"]\r
        if abs(obstacle["x"]) > 300: obstacle["vx"] *= -1\r
\r
        # Draw Player\r
        actor_t.penup(); actor_t.goto(player["x"] - 20, player["y"]); actor_t.pendown()\r
        actor_t.color("#34d399", "#059669"); actor_t.begin_fill()\r
        for _ in range(4): actor_t.forward(40); actor_t.left(90)\r
        actor_t.end_fill()\r
\r
        # Draw Obstacle\r
        actor_t.penup(); actor_t.goto(obstacle["x"], obstacle["y"]); actor_t.pendown()\r
        actor_t.color("#f43f5e", "#e11d48"); actor_t.begin_fill(); actor_t.circle(20); actor_t.end_fill()\r
\r
        screen.update()\r
        screen.ontimer(render_loop, 16)\r
\r
    # 2. 1-Second Periodic Clock Timer (every 1000 ms)\r
    def clock_tick():\r
        if not game_state["running"]: return\r
        game_state["seconds_elapsed"] += 1\r
\r
        hud_t.clear()\r
        hud_t.penup(); hud_t.goto(-320, 220); hud_t.pendown()\r
        hud_t.color("#38bdf8")\r
        hud_t.write(f"TIME SURVIVED: {game_state['seconds_elapsed']}s  |  USE LEFT/RIGHT ARROWS", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        screen.ontimer(clock_tick, 1000)\r
\r
    # Start both asynchronous timers\r
    render_loop()\r
    clock_tick()\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_event_driven_multitasker()\r
`,k=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 3 - Timing and loop delays using time.sleep() and ontimer()\r
File: delta_time_framerate_independent_physics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Framerate-Independent Movement using Delta-Time (dt):\r
Position = Position + Velocity_Per_Second * Delta_Time\r
Guarantees that an object moves exactly 100 pixels per second whether the simulation\r
runs at 20 FPS or 240 FPS!\r
"""\r
\r
import turtle\r
import time\r
\r
def run_delta_time_simulation():\r
    screen = turtle.Screen()\r
    screen.title("Delta-Time Framerate Independence - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=500)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    x = -300\r
    speed_per_second = 150.0  # Moves exactly 150 pixels every 1 second\r
    last_time = time.perf_counter()\r
\r
    for _ in range(180):\r
        # Calculate real delta time in seconds\r
        now = time.perf_counter()\r
        dt = now - last_time\r
        last_time = now\r
\r
        t.clear()\r
\r
        # Framerate-independent kinematic update\r
        x += speed_per_second * dt\r
\r
        # Draw Ball\r
        t.penup(); t.goto(x, 0); t.pendown()\r
        t.color("#34d399", "#059669")\r
        t.begin_fill(); t.circle(22); t.end_fill()\r
\r
        # Telemetry\r
        t.penup(); t.goto(-320, 190); t.pendown()\r
        t.color("#38bdf8")\r
        t.write(f"DELTA TIME: {dt*1000:.2f} ms  |  SPEED: {speed_per_second} px/s  |  X: {x:.1f}", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_delta_time_simulation()\r
`,_=`================================================================================\r
  TOPIC 3: TIMING AND LOOP DELAYS USING TIME.SLEEP() AND ONTIMER()\r
  MODULE: 005_005 - Animation & Motion Logic\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. SYNCHRONOUS (TIME.SLEEP) VS ASYNCHRONOUS (ONTIMER)\r
--------------------------------------------------------------------------------\r
- \`time.sleep(seconds)\`:\r
  Pauses the entire Python thread. Good for linear procedural demos, but can freeze\r
  GUI event processing if delays are long.\r
\r
- \`screen.ontimer(callback, delay_ms)\`:\r
  Schedules a Python function to run after \`delay_ms\` milliseconds inside Tkinter's\r
  asynchronous event loop. Keeps keyboard and mouse handlers completely non-blocking!\r
\r
2. RECURSIVE ONTIMER LOOP PATTERN\r
--------------------------------------------------------------------------------\r
def game_tick():\r
    # 1. Update & Render Frame\r
    screen.update()\r
    # 2. Schedule next tick in 16 ms (~60 FPS)\r
    screen.ontimer(game_tick, 16)\r
\r
3. FRAMERATE-INDEPENDENT DELTA TIME (DT)\r
--------------------------------------------------------------------------------\r
By multiplying speed by actual elapsed seconds (\`dt\`), movement speeds stay\r
identical across fast 240Hz monitors and slow low-power laptops:\r
\`x += speed_in_pixels_per_second * dt\`\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,w=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseTimer {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.04); opacity: 1; filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6)); }
}
`,D=()=>{const[t,o]=r.useState("ontimer"),[c,d]=r.useState(160),[i,m]=r.useState(40),[p,u]=r.useState(0);r.useEffect(()=>{const n=setInterval(()=>{m(s=>s>=280?40:s+3)},16);return()=>clearInterval(n)},[]),r.useEffect(()=>{const n=setInterval(()=>{u(s=>s+1)},1e3);return()=>clearInterval(n)},[]);const l=n=>{t!=="sleep"&&d(s=>n==="left"?Math.max(30,s-25):Math.min(290,s+25))},h=[{name:"screen.ontimer(callback, delay_ms)",returnType:"Asynchronous Scheduling",purpose:"Schedules a non-blocking function execution after delay_ms inside Tkinter's event loop.",usage:"screen.ontimer(game_tick, 16)"},{name:"time.sleep(seconds)",returnType:"Synchronous Thread Block",purpose:"Pauses the entire Python OS execution thread for a fixed duration (simple but blocks UI events).",usage:"time.sleep(0.0166)"},{name:"dt = now - last_time",returnType:"Delta-Time Calculation",purpose:"Measures exact elapsed frame duration for framerate-independent physics: `x += speed * dt`.",usage:"x += speed_per_sec * dt"},{name:"screen.mainloop()",returnType:"Event Loop Dispatcher",purpose:"Enters Tkinter's persistent event listener, firing scheduled timers and user inputs.",usage:"screen.mainloop()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:w}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 · Animation & Motion Logic · Topic 3"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Timing & Loop Delays: time.sleep() vs ontimer()"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Master the transition from synchronous thread blocking to asynchronous event-driven game loops. Explore ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"screen.ontimer() multitasking"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"zero-input-lag keyboard controls"}),", and ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Delta-Time (dt) physics"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚡ screen.ontimer() Event Architecture"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎮 Non-Blocking Keyboard Responsiveness"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⏱️ Framerate-Independent Delta-Time"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Interactive Timing Paradigm Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch between Synchronous `time.sleep()` (Thread Blocking) and Asynchronous `ontimer()` (Cooperative Multitasking)."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>o("sleep"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="sleep"?"bg-rose-500 text-white font-bold shadow-md shadow-rose-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"⏸️ Synchronous time.sleep() (Blocks Input)"}),e.jsx("button",{onClick:()=>o("ontimer"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t==="ontimer"?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"🚀 Asynchronous ontimer() (Instant Input)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Interactive Arcade Simulation (",t.toUpperCase(),")"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("rect",{x:"10",y:"10",width:"300",height:"24",rx:"4",fill:"#0f172a",stroke:"#334155",strokeWidth:"1"}),e.jsxs("text",{x:"20",y:"26",fill:"#38bdf8",fontSize:"9.5",fontWeight:"bold",fontFamily:"monospace",children:["SURVIVED: ",p,"s | MODE: ",t==="ontimer"?"ASYNC ONTIMER":"BLOCKED SLEEP"]}),e.jsx("circle",{cx:i,cy:"70",r:"14",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("text",{x:i,y:"74",fill:"#ffffff",fontSize:"8",textAnchor:"middle",fontWeight:"bold",children:"ENEMY"}),e.jsxs("g",{transform:`translate(${c}, 130)`,children:[e.jsx("polygon",{points:"0,-18 -15,10 15,10",fill:"#34d399",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("circle",{cx:"0",cy:"-2",r:"3",fill:"#020617"})]}),t==="sleep"&&e.jsx("text",{x:"160",y:"110",fill:"#f43f5e",fontSize:"10",textAnchor:"middle",fontWeight:"bold",fontFamily:"monospace",children:"⚠️ THREAD BLOCKED - INPUT FROZEN!"})]}),e.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[e.jsx("button",{onClick:()=>l("left"),disabled:t==="sleep",className:`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${t==="sleep"?"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-800":"bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/25"}`,children:"◀ Steer Left"}),e.jsx("button",{onClick:()=>l("right"),disabled:t==="sleep",className:`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${t==="sleep"?"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-800":"bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/25"}`,children:"Steer Right ▶"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Architecture Diagnostics"}),e.jsx("span",{className:`font-mono text-xs px-2 py-0.5 rounded ${t==="ontimer"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold":"bg-rose-500/10 border border-rose-500/30 text-rose-300"}`,children:t==="ontimer"?"Event-Driven Asynchronous":"Synchronous Thread Halt"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Keyboard Input Latency"}),e.jsx("div",{className:`text-base font-mono font-bold ${t==="ontimer"?"text-emerald-400":"text-rose-400"}`,children:t==="ontimer"?"0 ms (Instant)":"1,000+ ms (Stalled)"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Event Queue Responsiveness"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Concurrent Timers"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:t==="ontimer"?"Multi-Timer (60FPS + 1s HUD)":"Single Thread Only"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Cooperative Task Slicing"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:["# ",t==="ontimer"?"Non-Blocking Event-Driven Pattern":"Blocking Linear Sleep Pattern"]}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:t==="ontimer"?`def game_tick():
    update_physics()
    screen.update()
    screen.ontimer(game_tick, 16)  # 60 FPS non-blocking!`:`while running:
    update_physics()
    screen.update()
    time.sleep(0.0166)  # Blocks OS thread!`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Timing & Loop Scheduling APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method / Timing Pattern"}),e.jsx("th",{className:"py-3 px-4",children:"Paradigm"}),e.jsx("th",{className:"py-3 px-4",children:"Execution & Event Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:h.map((n,s)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:n.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:n.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:n.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:n.usage})]},s))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:b,title:"blocking_sleep_vs_ontimer.py",highlightLines:[25,30,48,51,54,57]}),e.jsx(a,{fileModule:v,title:"event_driven_multitasker_ontimer.py",highlightLines:[22,23,26,27,47,59,62,63,65]}),e.jsx(a,{fileModule:k,title:"delta_time_framerate_independent_physics.py",highlightLines:[21,26,27,33,44]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏎️"})," Barrackpore Racing Game: Lag Elimination"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata created an arcade car racer in Barrackpore. When she added a 1-second countdown delay using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"time.sleep(1)"}),", player arrow key inputs were completely ignored. Teacher Sukanta Hui guided her to refactor to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.ontimer(game_tick, 16)"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.ontimer(countdown_tick, 1000)"}),". Controls became instantaneous and lightning responsive!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-indigo-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"✈️"})," Kolkata Delta-Time Flight Physics"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu in Kolkata tested his flight simulator across a high-end 144Hz desktop and an older 30Hz laptop. Because he multiplied velocity by ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"dt = time.perf_counter() - last_time"}),", airplanes traveled across the screen in exactly 4.0 seconds on both computers without speed distortion!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Timing Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Calling ontimer with Seconds"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ontimer(tick, 0.016)"})," rounds down to 0 milliseconds, overloading the CPU. ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ontimer()"})," expects integer milliseconds (e.g. ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"16"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Invoking the Function in ontimer"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ontimer(tick(), 16)"})," with parentheses executes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"tick()"})," immediately once instead of passing the function reference. Pass ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ontimer(tick, 16)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Mixing while True and mainloop()"}),e.jsxs("p",{className:"text-slate-400",children:["Putting a ",e.jsx("code",{className:"text-rose-300 font-mono",children:"while True:"})," loop before ",e.jsx("code",{className:"text-amber-300 font-mono",children:"screen.mainloop()"})," prevents ",e.jsx("code",{className:"text-amber-300 font-mono",children:"mainloop()"})," from ever executing, breaking all event listeners."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Unclamped Delta-Time Explosion"}),e.jsxs("p",{className:"text-slate-400",children:["When dragging the window, ",e.jsx("code",{className:"text-rose-300 font-mono",children:"dt"})," jumps to 2.0+ seconds, launching physics objects into outer space. Always clamp with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"dt = min(dt, 0.05)"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand why `screen.ontimer()` is non-blocking and preserves keyboard responsiveness","I know that `screen.ontimer()` accepts milliseconds (16 ms for ~60 FPS)","I pass function references (`ontimer(tick, 16)`) without executing parentheses `()`","I know how to run multiple concurrent timers (e.g. physics tick + countdown HUD)","I can calculate delta-time (`dt = now - last_time`) for framerate-independent physics","I always clamp maximum delta time (`min(dt, 0.05)`) to protect against physics explosions"].map((n,s)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:n})]},s))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How modern JavaScript engines (V8 in Chrome, Node.js) and React event loops use non-blocking asynchronous timers to keep web apps snappy!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How clicking the steering buttons responds instantly in `ontimer()` mode, while `time.sleep()` freezes input!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add smooth slow-motion bullet time by scaling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"dt *= 0.3"})," during evasive player dodges!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Transitioning from synchronous blocking code to asynchronous event-driven architecture is one of the biggest mental leaps in a software engineer's growth. Once you understand cooperative multitasking and delta-time pacing, you possess the core mental model used across web servers, mobile apps, and game engines worldwide."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(g,{title:"Timing & Loop Delays FAQs",questions:y})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(f,{content:_,title:"Topic 3: Timing & Loop Delays Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(x,{note:"At Coder & AccoTax in Barrackpore and Kolkata, I often see students struggle when their games freeze because of time.sleep(). When we introduce ontimer(), it's like a lightbulb turns on! Learning to let the event loop drive the animation while processing user input in parallel is the true foundation of interactive software development."})})]})]})};export{D as default};

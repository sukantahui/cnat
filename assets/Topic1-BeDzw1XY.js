import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as y}from"./TeacherSukantaHui-BaJcBHAy.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const w=[{question:"What is the primary function of `screen.listen()` in Python Turtle?",shortAnswer:"It gives keyboard focus to the Turtle canvas window so that keypress events can be captured and dispatched to callbacks.",explanation:"Without `screen.listen()`, the operating system does not route keyboard inputs to the application.",hint:"What function claims keyboard focus for the Turtle window?",level:"basic",codeExample:"screen.listen()"},{question:"What happens if a program defines `screen.onkeypress(move, 'Up')` but forgets to call `screen.listen()`?",shortAnswer:"The program runs without errors, but pressing the Up arrow key does absolutely nothing because the canvas lacks keyboard focus.",explanation:"Missing `listen()` is the most common reason keyboard bindings fail in beginner projects.",hint:"Why do arrow keys fail to respond if listen() is omitted?",level:"basic",codeExample:"# Keypresses ignored without screen.listen()"},{question:"What does the term 'Keyboard Focus' mean in operating system window management?",shortAnswer:"The state of being the active GUI window selected by the OS to receive all physical keystroke events.",explanation:"Only one desktop window holds keyboard focus at any given moment.",hint:"What determines which desktop window receives your typing?",level:"basic",codeExample:"# OS routes keys to focused window only"},{question:"Why do mouse clicks (`screen.onclick`) often work even if `screen.listen()` was not called?",shortAnswer:"Because mouse clicks carry spatial `(x, y)` coordinate pointers directly to the window beneath the cursor, unlike keyboard events.",explanation:"Mouse events carry implicit coordinate targeting; keyboard events require explicit window focus.",hint:"Why do mouse events work without listen() while keyboard events fail?",level:"moderate",codeExample:"# Mouse clicks target window under pointer directly"},{question:"What is the 'Auto-Refocus' pattern in Python Turtle?",shortAnswer:"Calling `screen.listen()` inside `screen.onclick()` so clicking anywhere on canvas reclaims lost keyboard focus.",explanation:"Guarantees keyboard controls resume working if the user previously clicked an external window.",hint:"How does binding listen() to mouse clicks protect against lost focus?",level:"moderate",codeExample:`def on_click(x, y):
    screen.listen()  # Reclaims focus
    handle_click(x, y)`},{question:"Where in your code script should `screen.listen()` be called?",shortAnswer:"After defining your key bindings (`onkeypress`) and before starting the main event loop (`screen.mainloop()`).",explanation:"Calling `listen()` during window setup ensures focus is claimed immediately upon launch.",hint:"Where is listen() placed relative to onkeypress and mainloop?",level:"basic",codeExample:`screen.onkeypress(move, 'Up')
screen.listen()
screen.mainloop()`},{question:"What Tkinter underlying method does `screen.listen()` invoke?",shortAnswer:"`canvas.focus_force()` or `canvas.focus_set()`.",explanation:"`screen.listen()` is Turtle's wrapper around Tkinter's low-level widget focus API.",hint:"What Tkinter method does listen() wrap under the hood?",level:"advanced",codeExample:"# canvas.focus_force() in Tkinter"},{question:"Can `screen.listen()` be called multiple times during program execution?",shortAnswer:"Yes, calling `screen.listen()` multiple times is completely safe and ensures focus remains active.",explanation:"`listen()` is idempotent and causes zero negative side effects when called repeatedly.",hint:"Is it safe to call screen.listen() repeatedly?",level:"basic",codeExample:"screen.listen()  # Safe to call multiple times"},{question:"What causes a Turtle window to lose keyboard focus during runtime?",shortAnswer:"The user clicking on another application, a popup input dialog appearing, or interacting with the OS taskbar.",explanation:"Switching active applications shifts OS keyboard focus away from Turtle.",hint:"What user actions cause windows to drop focus?",level:"basic",codeExample:"# Focus lost when switching to browser/terminal"},{question:"How do you know if a Turtle window currently holds keyboard focus?",shortAnswer:"The window title bar is highlighted/active, and pressing bound keys immediately triggers their respective callbacks.",explanation:"Visual title bar styling and responsive callbacks confirm active focus.",hint:"What visual and behavioral cues indicate active window focus?",level:"basic",codeExample:"# Active title bar indicates focus"},{question:"How does `turtle.listen()` compare to `screen.listen()`?",shortAnswer:"They are aliases for the exact same function in Python's standard library.",explanation:"`turtle.listen()` delegates to the active `Screen` singleton.",hint:"Are turtle.listen() and screen.listen() identical?",level:"basic",codeExample:"screen.listen()  # Standard OOP style"},{question:"Why should `screen.listen()` be re-issued after using `turtle.textinput()` or `turtle.numinput()`?",shortAnswer:"Because the popup dialog box takes focus away from the main canvas; calling `screen.listen()` restores focus to the game.",explanation:"Dismissing dialogs leaves focus in an ambiguous state without explicit re-focusing.",hint:"Why re-call listen() after a popup input dialog closes?",level:"moderate",codeExample:`name = screen.textinput('Name', 'Enter:')
screen.listen()  # Restore focus!`},{question:"What is Window Focus Trapping in web and desktop UIs?",shortAnswer:"Constraining keyboard navigation (e.g. Tab/Esc) inside a modal dialog until the user completes or closes the prompt.",explanation:"Focus trapping is an essential accessibility pattern for modal interfaces.",hint:"What UI pattern confines keyboard focus inside modal windows?",level:"advanced",codeExample:"# Modal focus trap architecture"},{question:"Does `screen.listen()` need to be called inside a `while True:` loop?",shortAnswer:"No, calling `screen.listen()` once during initialization is sufficient; calling it inside a 60 FPS loop is redundant.",explanation:"Focus remains active until explicitly stolen by another application.",hint:"Should listen() be called repeatedly inside animation loops?",level:"moderate",codeExample:"# Call listen() once during setup"},{question:"How does `screen.listen()` interact with fullscreen mode?",shortAnswer:"In fullscreen mode, `screen.listen()` claims exclusive focus, preventing background apps from intercepting keys.",explanation:"Fullscreen mode secures uninterrupted keyboard game inputs.",hint:"How does listen() behave in fullscreen game displays?",level:"moderate",codeExample:"screen.setup(width=1.0, height=1.0); screen.listen()"},{question:"What is the Focus-In and Focus-Out event pair in GUI programming?",shortAnswer:"`<FocusIn>` fires when the window gains focus; `<FocusOut>` fires when the window loses focus (e.g. auto-pausing a game).",explanation:"Handling focus events allows games to automatically pause when minimized or tabbed out.",hint:"What events detect when a window gains or loses user attention?",level:"advanced",codeExample:"# Auto-pause game on <FocusOut>"},{question:"How can you auto-pause a Turtle game when the user clicks away from the window?",shortAnswer:"Bind Tkinter's `<FocusOut>` event to an `auto_pause()` callback using `screen.getcanvas().bind('<FocusOut>', on_focus_lost)`.",explanation:"Direct Tkinter widget binding enables low-level OS focus state detection.",hint:"How do you detect lost focus using Tkinter canvas bindings?",level:"expert",codeExample:"screen.getcanvas().bind('<FocusOut>', lambda e: pause_game())"},{question:"Why does clicking on the Turtle window title bar sometimes not transfer keyboard focus to the canvas?",shortAnswer:"Because clicking the title bar focuses the OS window frame rather than the inner Tkinter canvas widget.",explanation:"Calling `screen.listen()` forces focus directly onto the canvas widget itself.",hint:"Why is canvas-level focus distinct from window-frame focus?",level:"advanced",codeExample:"# canvas.focus_force() ensures canvas widget focus"},{question:"How do you verify in code that `screen.listen()` is functioning properly?",shortAnswer:"Bind a debug key (e.g. `screen.onkeypress(lambda: print('KEY_OK'), 'space')`) and test spacebar responses.",explanation:"Quick test callbacks confirm keyboard event capture pipeline integrity.",hint:"How do you test that listen() is capturing inputs successfully?",level:"basic",codeExample:"screen.onkeypress(lambda: print('OK'), 'space')"},{question:"What is the relationship between `screen.listen()` and `screen.tracer(0)`?",shortAnswer:"They operate independently; `tracer(0)` manages display double-buffering, while `listen()` manages keyboard event focus.",explanation:"Decoupling visual rendering from input focus allows simultaneous high-speed graphics and responsive controls.",hint:"Does tracer(0) affect how screen.listen() operates?",level:"moderate",codeExample:`screen.tracer(0)
screen.listen()`},{question:"How does `screen.listen()` handle non-English keyboard layouts (e.g. AZERTY, Cyrillic)?",shortAnswer:"It captures the Unicode keysym produced by the active OS keyboard layout.",explanation:"Tkinter resolves keys according to the operating system's active input method.",hint:"How are non-QWERTY keyboard layouts handled by listen()?",level:"moderate",codeExample:"# Resolves OS active keyboard layout keysyms"},{question:"Can multiple canvases in a multi-window Python app listen simultaneously?",shortAnswer:"No, only one canvas widget can hold active keyboard focus at any single instant.",explanation:"Focus must be transferred dynamically when users click between separate windows.",hint:"Can two windows hold keyboard focus at the exact same instant?",level:"moderate",codeExample:"# Focus shifts dynamically between windows"},{question:"What is a 'Phantom Key' issue when switching focus?",shortAnswer:"When a key is held down while focus is lost, causing the key to remain stuck in the 'down' state indefinitely.",explanation:"Releasing key states upon `<FocusOut>` prevents phantom sticky keys.",hint:"What happens if a key is held while alt-tabbing away from a game?",level:"advanced",codeExample:"def on_focus_lost(e): pressed_keys.clear()"},{question:"Why should games display a 'Click to Play' overlay when focus is lost?",shortAnswer:"To inform the user why controls aren't responding and prompt them to click to re-engage `screen.listen()`.",explanation:"Clear UX messaging prevents player confusion when focus drops.",hint:"Why do web and desktop games show 'Click to Resume' overlays?",level:"basic",codeExample:"# Show 'Click to Focus' overlay when unfocused"},{question:"How do you program a joystick or gamepad controller in Python Turtle?",shortAnswer:"Use a library like `pygame.joystick` or `inputs` in a timer loop, updating ship coordinates based on stick axis values.",explanation:"Timer loops can poll external hardware controllers alongside standard Turtle events.",hint:"How are external gamepads integrated into Turtle games?",level:"expert",codeExample:"# Poll pygame.joystick inside ontimer loop"},{question:"What is the difference between `canvas.focus_set()` and `canvas.focus_force()`?",shortAnswer:"`focus_set()` requests focus politely; `focus_force()` forcefully seizes focus even if another widget currently owns it.",explanation:"`screen.listen()` uses force-focus to ensure prompt input response.",hint:"Which focus method forcefully seizes keyboard attention?",level:"expert",codeExample:"# focus_force() guarantees immediate focus capture"},{question:"How do you bind hotkeys that work regardless of Caps Lock state?",shortAnswer:"Bind both lowercase and uppercase variants: `screen.onkeypress(fire, 'f'); screen.onkeypress(fire, 'F')`.",explanation:"Binding both cases ensures player controls work whether Caps Lock is on or off.",hint:"How do you ensure keys work regardless of Caps Lock?",level:"basic",codeExample:"screen.onkeypress(fire, 'f'); screen.onkeypress(fire, 'F')"},{question:"Why should `screen.listen()` always be paired with user instructions on screen?",shortAnswer:"So users immediately know which keys are bound and how to interact with the application.",explanation:"Displaying on-screen control guides improves user experience.",hint:"Why is displaying control instructions on screen a best practice?",level:"basic",codeExample:"t.write('Use Arrow Keys to Move')"},{question:"What is the 3-step Golden Rule for Keyboard Focus in Python Turtle?",shortAnswer:"1. Bind keys with `onkeypress()` | 2. Call `screen.listen()` | 3. Add auto-refocus inside `screen.onclick()`.",explanation:"This 3-step blueprint guarantees permanent, glitch-free keyboard responsiveness across all environments.",hint:"What 3 steps guarantee robust keyboard focus in Turtle?",level:"basic",codeExample:"# 1. Bind keys → 2. screen.listen() → 3. Auto-refocus on click"},{question:"How does understanding window focus prepare developers for web frontends?",shortAnswer:"Because web browsers manage focus across DOM elements using identical concepts: `element.focus()`, `element.blur()`, `tabIndex`, and focus traps.",explanation:"Window focus principles are universal across desktop and web application engineering.",hint:"How does desktop focus connect to DOM element.focus() in web development?",level:"basic",codeExample:"# Universal GUI window and DOM focus management"}],k=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 1 - Screen event listening: screen.listen()\r
File: screen_listen_focus_mechanics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Deep dive into \`screen.listen()\` and GUI Window Focus:\r
- Why keystrokes fail without \`listen()\`: The OS does not route keyboard events\r
  to a window until it claims focus via Tkinter's \`focus_force()\` / \`listen()\`.\r
- Interactive steering demonstrator showing live key capture telemetry.\r
"""\r
\r
import turtle\r
\r
def run_listen_focus_demo():\r
    screen = turtle.Screen()\r
    screen.title("Screen Focus Mechanics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    ship = {"x": 0, "y": 0, "angle": 0, "speed": 10}\r
\r
    def render_scene():\r
        t.clear()\r
\r
        # Focus Status Banner\r
        t.penup(); t.goto(-320, 220); t.pendown()\r
        t.color("#34d399")\r
        t.write("FOCUS STATUS: LISTENING ACTIVE (screen.listen())", font=("Arial", 11, "bold"))\r
\r
        t.penup(); t.goto(-320, 190); t.pendown()\r
        t.color("#94a3b8")\r
        t.write("USE ARROWS: Left/Right to Rotate · Up to Move Forward", font=("Arial", 10))\r
\r
        # Ship Geometry\r
        t.penup(); t.goto(ship["x"], ship["y"]); t.setheading(ship["angle"]); t.pendown()\r
        t.color("#38bdf8", "#0284c7"); t.begin_fill()\r
        t.forward(30); t.left(140); t.forward(35); t.left(80); t.forward(35)\r
        t.end_fill()\r
\r
        screen.update()\r
\r
    def turn_left():\r
        ship["angle"] = (ship["angle"] + 15) % 360\r
        render_scene()\r
\r
    def turn_right():\r
        ship["angle"] = (ship["angle"] - 15) % 360\r
        render_scene()\r
\r
    def move_forward():\r
        rad = turtle.math.radians(ship["angle"])\r
        ship["x"] += ship["speed"] * turtle.math.cos(rad)\r
        ship["y"] += ship["speed"] * turtle.math.sin(rad)\r
        render_scene()\r
\r
    # Register Key Bindings\r
    screen.onkeypress(turn_left, "Left")\r
    screen.onkeypress(turn_right, "Right")\r
    screen.onkeypress(move_forward, "Up")\r
\r
    # CRITICAL: Claim keyboard focus!\r
    screen.listen()\r
\r
    render_scene()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_listen_focus_demo()\r
`,v=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 1 - Screen event listening: screen.listen()\r
File: auto_refocus_canvas_keeper.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the Auto-Refocus pattern:\r
When users click outside the window or interact with dialogs, window focus is lost.\r
Binding \`screen.onclick\` to re-issue \`screen.listen()\` guarantees immediate keyboard recovery.\r
"""\r
\r
import turtle\r
\r
def run_auto_refocus_demo():\r
    screen = turtle.Screen()\r
    screen.title("Auto-Refocus Canvas Keeper - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    t = turtle.Turtle(); t.hideturtle(); t.speed(0); t.pensize(3)\r
\r
    state = {"count": 0}\r
\r
    def on_space():\r
        state["count"] += 1\r
        t.clear()\r
        t.penup(); t.goto(0, 0); t.pendown()\r
        t.color("#38bdf8")\r
        t.write(f"SPACE PRESSES: {state['count']}", align="center", font=("Arial", 16, "bold"))\r
\r
        t.penup(); t.goto(0, -50); t.pendown()\r
        t.color("#94a3b8")\r
        t.write("Click anywhere to guarantee focus is active", align="center", font=("Arial", 10))\r
\r
    def on_click(x, y):\r
        # Auto-Refocus Pattern: Re-claim window focus upon mouse click!\r
        screen.listen()\r
        t.penup(); t.goto(x, y); t.pendown()\r
        t.dot(12, "#34d399")\r
\r
    screen.onkeypress(on_space, "space")\r
    screen.onclick(on_click)\r
\r
    screen.listen()\r
    on_space()  # Draw initial UI\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_auto_refocus_demo()\r
`,_=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 1 - Screen event listening: screen.listen()\r
File: interactive_focus_status_dashboard.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Interactive Focus Dashboard demonstrating how the OS routes keyboard signals\r
only when the Turtle canvas holds active focus.\r
"""\r
\r
import turtle\r
\r
def run_focus_dashboard():\r
    screen = turtle.Screen()\r
    screen.title("Interactive Focus Status Dashboard - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    history = []\r
\r
    def log_key(key_name):\r
        history.append(key_name)\r
        if len(history) > 8: history.pop(0)\r
\r
        t.clear()\r
        # Dashboard Header\r
        t.penup(); t.goto(0, 160); t.pendown()\r
        t.color("#38bdf8")\r
        t.write("FOCUS ACTIVE · KEYBOARD STREAM LIVE", align="center", font=("Arial", 12, "bold"))\r
\r
        # Render Key Stream Badges\r
        for i, k in enumerate(history):\r
            x = -240 + (i * 65)\r
            t.penup(); t.goto(x, 20); t.pendown()\r
            t.color("#334155", "#0f172a"); t.begin_fill()\r
            for _ in range(2): t.forward(55); t.left(90); t.forward(45); t.left(90)\r
            t.end_fill()\r
\r
            t.penup(); t.goto(x + 27, 32); t.pendown()\r
            t.color("#34d399")\r
            t.write(k, align="center", font=("Courier", 12, "bold"))\r
\r
        screen.update()\r
\r
    # Bind multiple test keys\r
    for k in ["W", "A", "S", "D", "w", "a", "s", "d", "space"]:\r
        screen.onkeypress(lambda key=k: log_key(key.upper()), k)\r
\r
    # Claim focus\r
    screen.listen()\r
    log_key("READY")\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_focus_dashboard()\r
`,j=`================================================================================\r
  TOPIC 1: SCREEN EVENT LISTENING: SCREEN.LISTEN()\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS WINDOW FOCUS?\r
--------------------------------------------------------------------------------\r
In modern windowed operating systems (Windows, macOS, Linux), multiple applications\r
exist simultaneously on screen, but only ONE window can hold Keyboard Focus at any time.\r
The OS directs physical keyboard keystrokes exclusively to the active focused window.\r
\r
2. WHAT DOES SCREEN.LISTEN() DO?\r
--------------------------------------------------------------------------------\r
- Tells Tkinter's internal canvas widget to request and claim operating system\r
  keyboard focus (\`canvas.focus_force()\`).\r
- Without calling \`screen.listen()\`, the window displays graphics normally,\r
  but completely ignores all keyboard event handlers (\`onkey\`, \`onkeypress\`).\r
\r
3. THE AUTO-REFOCUS BEST PRACTICE\r
--------------------------------------------------------------------------------\r
If a user clicks outside the window and returns, focus may be dropped.\r
Best practice: Add \`screen.listen()\` inside your mouse click handlers so that\r
any user click immediately re-claims keyboard focus!\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,N=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes focusRing {
  0%, 100% { border-color: rgba(56, 189, 248, 0.4); }
  50% { border-color: rgba(56, 189, 248, 0.9); filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5)); }
}
`,R=()=>{const[n,a]=c.useState(!0),[r,i]=c.useState({x:160,y:90,angle:0}),[h,o]=c.useState("screen.listen() active"),l=t=>{if(!n){o("⚠️ KEY IGNORED - Canvas has LOST FOCUS! Click canvas to re-focus.");return}if(t==="left")i(s=>({...s,angle:(s.angle-25)%360})),o("Rotated Left (25°)");else if(t==="right")i(s=>({...s,angle:(s.angle+25)%360})),o("Rotated Right (25°)");else if(t==="forward"){const s=r.angle*Math.PI/180,u=Math.max(25,Math.min(295,r.x+Math.sin(s)*18)),p=Math.max(25,Math.min(155,r.y-Math.cos(s)*18));i(f=>({...f,x:u,y:p})),o(`Thrust Forward → (${u.toFixed(0)}, ${p.toFixed(0)})`)}},m=()=>{a(!0),o("✨ Auto-Refocus Triggered! screen.listen() re-engaged.")},x=[{name:"screen.listen()",returnType:"Keyboard Focus Seizure",purpose:"Requests and claims active OS window focus so keyboard events are dispatched to Python callbacks.",usage:"screen.listen()"},{name:"screen.onclick(refocus_handler)",returnType:"Auto-Refocus Binding",purpose:"Re-calls `screen.listen()` upon user canvas clicks, recovering lost keyboard focus instantly.",usage:"screen.onclick(lambda x, y: screen.listen())"},{name:"canvas.focus_force()",returnType:"Underlying Tkinter Focus",purpose:"Low-level Tkinter widget method invoked by `screen.listen()` to force OS focus state.",usage:"screen.getcanvas().focus_force()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:N}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 1"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Screen Event Listening: screen.listen() & Window Focus"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Understand the mechanics of operating system window focus. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"screen.listen()"}),", prevent ",e.jsx("span",{className:"text-rose-400 font-semibold",children:"silent keyboard input failures"}),", and implement the ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Auto-Refocus Architecture"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎯 OS Window Focus Mechanics"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🛡️ Auto-Refocus on Click Pattern"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🚀 Seamless Spacecraft Flight Controls"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎮"})," Interactive Window Focus & Keyboard Capture Lab"]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Toggle focus state to observe how keyboard events succeed with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.listen()"})," and fail silently when focus is lost."]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>a(!0),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${n?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"✅ Focused (screen.listen())"}),e.jsx("button",{onClick:()=>{a(!1),o("⚠️ Window lost focus (User clicked external app)")},className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${n?"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700":"bg-rose-500 text-white font-bold shadow-md shadow-rose-500/25"}`,children:"❌ Unfocused (Lost Focus)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Flight Arena Viewport (Click to Re-Focus)"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",onClick:m,className:`w-full max-w-sm h-auto bg-slate-950 rounded-lg cursor-pointer border-2 transition-all duration-300 ${n?"border-cyan-500/80 animate-[focusRing_3s_infinite]":"border-rose-500/60 opacity-70"}`,children:[e.jsx("line",{x1:"20",y1:"90",x2:"300",y2:"90",stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("line",{x1:"160",y1:"20",x2:"160",y2:"160",stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsxs("g",{transform:`translate(${r.x}, ${r.y}) rotate(${r.angle})`,children:[e.jsx("polygon",{points:"0,-16 -12,12 12,12",fill:n?"#38bdf8":"#64748b",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#020617"}),n&&e.jsx("polygon",{points:"-5,12 0,20 5,12",fill:"#fbbf24",opacity:"0.8"})]}),e.jsxs("g",{transform:"translate(15, 15)",children:[e.jsx("rect",{x:"0",y:"0",width:"130",height:"20",rx:"4",fill:"#0f172a",stroke:n?"#34d399":"#f43f5e",strokeWidth:"1"}),e.jsx("text",{x:"65",y:"14",fill:n?"#34d399":"#f43f5e",fontSize:"8.5",textAnchor:"middle",fontWeight:"bold",fontFamily:"monospace",children:n?"● FOCUS ACTIVE":"○ LOST FOCUS"})]}),!n&&e.jsx("text",{x:"160",y:"100",fill:"#f43f5e",fontSize:"10",textAnchor:"middle",fontWeight:"bold",fontFamily:"monospace",children:"CLICK CANVAS TO RESTORE FOCUS!"})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-4",children:[e.jsx("button",{onClick:()=>l("left"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-500/40 transition cursor-pointer",children:"◀ Rotate Left"}),e.jsx("button",{onClick:()=>l("forward"),className:"px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25 transition cursor-pointer",children:"▲ Thrust Forward"}),e.jsx("button",{onClick:()=>l("right"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-500/40 transition cursor-pointer",children:"Rotate Right ▶"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Keyboard Input Stream Status"}),e.jsx("span",{className:`font-mono text-xs px-2 py-0.5 rounded ${n?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold":"bg-rose-500/10 border border-rose-500/30 text-rose-300"}`,children:n?"Event Queue: CAPTURING":"Event Queue: BLOCKED"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Last Input Event Action"}),e.jsx("div",{className:`text-xs font-mono font-bold mt-1 ${n?"text-cyan-300":"text-rose-400"}`,children:h})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# 3-Step Keyboard Focus Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# 1. Bind keys
screen.onkeypress(turn_left, "Left")
# 2. Claim OS keyboard focus!
screen.listen()
# 3. Auto-Refocus on click
screen.onclick(lambda x, y: screen.listen())`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Focus Management Core APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method / Hook"}),e.jsx("th",{className:"py-3 px-4",children:"Subsystem"}),e.jsx("th",{className:"py-3 px-4",children:"Focus Management Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:x.map((t,s)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},s))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:k,title:"screen_listen_focus_mechanics.py",highlightLines:[22,33,44,48,52,54,57]}),e.jsx(d,{fileModule:v,title:"auto_refocus_canvas_keeper.py",highlightLines:[20,27,28,32,33,35]}),e.jsx(d,{fileModule:_,title:"interactive_focus_status_dashboard.py",highlightLines:[18,37,38,41,42]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"✈️"})," Barrackpore Flight Simulator: Silent Failure"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima spent 2 hours debugging her airplane flight simulator in Barrackpore. The code had zero syntax errors, but pressing arrow keys did nothing. Teacher Sukanta Hui spotted the missing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.listen()"})," call. Adding this single line activated window focus and brought her airplane to life!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Kolkata Auto-Refocus Armor"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu in Kolkata created an arcade game with popup score dialogs. After typing a player name into ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"textinput()"}),", keyboard controls froze. By implementing the Auto-Refocus pattern (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.onclick(lambda x, y: screen.listen())"}),"), clicking anywhere immediately re-claimed game focus!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Screen.listen() Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Omitting screen.listen() Completely"}),e.jsx("p",{className:"text-slate-400",children:"The program executes without throwing errors, but keyboard event handlers are never triggered because the OS doesn't route keystrokes to an unfocused canvas."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Lost Focus After Popup Dialogs"}),e.jsxs("p",{className:"text-slate-400",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"textinput()"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"numinput()"})," steals focus away to the modal dialog; always re-call ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.listen()"})," after the dialog closes."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Calling listen() Inside Tight Loops"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"screen.listen()"})," 60 times per second inside the animation loop is redundant and wastes CPU cycles. Call it once during initialization."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Assuming Mouse Clicks Need listen()"}),e.jsxs("p",{className:"text-slate-400",children:["Mouse clicks carry implicit coordinate targeting, leading beginners to falsely assume keyboard inputs work without ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.listen()"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand that the OS directs keystrokes exclusively to the active focused window","I always call `screen.listen()` to claim keyboard focus for the Turtle canvas","I know that omitting `screen.listen()` causes keyboard events to fail silently","I implement the Auto-Refocus pattern inside `screen.onclick()` handlers","I re-call `screen.listen()` after using popup modal dialogs like `textinput()`","I know that `screen.listen()` wraps Tkinter's `canvas.focus_force()` method"].map((t,s)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},s))})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(g,{title:"Screen.listen() & Focus FAQs",questions:w})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(b,{content:j,title:"Topic 1: Screen.listen() Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(y,{note:"In my classroom at Coder & AccoTax in Barrackpore and Kolkata, the #1 question students ask when first writing interactive games is: 'Sir, why aren't my arrow keys working?' 99% of the time, the answer is a missing screen.listen(). Remember: binding keys tells your program what to do; screen.listen() tells the operating system to pay attention!"})})]})]})};export{R as default};

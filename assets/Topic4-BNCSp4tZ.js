import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as k}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as p}from"./PythonFileLoader-hCi5osN-.js";import{F as j}from"./FAQTemplate-BHhlgA96.js";import{P as N}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const D=[{question:"What is `turtle.ondrag()` used for in Python graphics?",shortAnswer:"Binding a callback function that executes continuously while the user clicks and drags a specific turtle across the screen.",explanation:"Allows building freehand painting pens, draggable sliders, and movable puzzle sprites.",hint:"What method listens to mouse drag interactions on a turtle?",level:"basic",codeExample:"t.ondrag(t.goto)"},{question:"Why should `t.ondrag(None)` be called at the start of a drag callback function?",shortAnswer:"To temporarily unbind the event and prevent rapid mouse movements from overwhelming the Tkinter event queue with hundreds of queued moves.",explanation:"The unbind-rebind pattern prevents sluggish drag lag and UI freezing.",hint:"How do you prevent event queue flooding during high-speed dragging?",level:"moderate",codeExample:`def on_drag(x, y):
    t.ondrag(None)
    t.goto(x, y)
    t.ondrag(on_drag)`},{question:"What coordinates are passed into the `ondrag` callback function?",shortAnswer:"Two float values representing the current `(x, y)` Cartesian coordinates of the mouse cursor.",explanation:"Turtle passes the real-time mouse position directly to the drag callback.",hint:"What parameters are supplied to an ondrag callback?",level:"basic",codeExample:`def handle_drag(x, y):
    t.goto(x, y)`},{question:"How do you create a 1D horizontal slider using `ondrag()`?",shortAnswer:"Clamp the `x` coordinate between minimum and maximum bounds and lock the `y` coordinate to zero: `t.goto(max(min_x, min(max_x, x)), 0)`.",explanation:"Locking the unused axis creates clean linear 1D slider widgets.",hint:"How do you constrain a draggable turtle to a horizontal line?",level:"moderate",codeExample:`clamped_x = max(-100, min(100, x))
t.goto(clamped_x, 0)`},{question:"What is Snap-to-Grid snapping in puzzle games and level editors?",shortAnswer:"Rounding the dropped coordinate to the nearest grid increment: `snap_x = round(x / grid_size) * grid_size`.",explanation:"Grid snapping aligns objects neatly into discrete board slots.",hint:"What formula snaps continuous coordinates to grid multiples?",level:"basic",codeExample:`snap_x = round(x / 50) * 50
snap_y = round(y / 50) * 50`},{question:"What does `turtle.onrelease()` do in drag-and-drop mechanics?",shortAnswer:"Fires a callback when the user releases the mouse button after dragging, ideal for snapping puzzle pieces into place.",explanation:"Complements `ondrag` by handling drop validation and placement.",hint:"What method detects when a dragged turtle is released?",level:"basic",codeExample:"t.onrelease(snap_to_target)"},{question:"How do you implement freehand brush size adjustments in a drawing app?",shortAnswer:"Bind `+` and `-` keys to increment/decrement `t.pensize(size)`.",explanation:"Dynamic pen size adjustments allow fine sketching and broad shading.",hint:"What method alters line thickness during freehand drawing?",level:"basic",codeExample:"def thicker(): t.pensize(t.pensize() + 2)"},{question:"Why should `t.speed(0)` be set for drawing pen turtles?",shortAnswer:"To eliminate turn and walk animation pauses, ensuring the pen follows the mouse cursor instantaneously without lag.",explanation:"`speed(0)` delivers zero-latency cursor tracking.",hint:"Why is speed(0) essential for freehand drawing pens?",level:"basic",codeExample:"pen.speed(0)"},{question:"What is Bezier Curve Smoothing in digital whiteboard software?",shortAnswer:"Interpolating raw mouse drag points with quadratic or cubic Bezier curves to eliminate jagged corner artifacts.",explanation:"Vector curve smoothing creates polished calligraphy strokes.",hint:"What mathematical technique transforms jagged mouse paths into smooth curves?",level:"advanced",codeExample:"# Bezier stroke smoothing algorithm"},{question:"How do you create an interactive color palette for a whiteboard app?",shortAnswer:"Bind number keys `1`-`5` or create clickable color swatch turtles that call `pen.color(chosen_color)`.",explanation:"Palette switching provides dynamic color selection.",hint:"How are brush colors switched dynamically in painting apps?",level:"basic",codeExample:"screen.onkeypress(lambda: pen.color('red'), '1')"},{question:"What is Bounding Box Clamping during sprite dragging?",shortAnswer:"Restricting dragged sprite coordinates so they cannot escape the visible screen arena: `x = max(min_x, min(max_x, x))`.",explanation:"Prevents users from accidentally dragging pieces offscreen.",hint:"What technique prevents dragging objects off the screen?",level:"basic",codeExample:"x = max(-300, min(300, x))"},{question:"How do you implement an Eraser Tool in a Turtle whiteboard?",shortAnswer:"Set the pen color to the background color (`pen.color(bg_color)`) and increase `pen.pensize(20)`.",explanation:"Drawing with background color functions as a digital eraser.",hint:"How is an eraser implemented in canvas drawing apps?",level:"basic",codeExample:"def set_eraser(): pen.color(bg_color); pen.pensize(20)"},{question:"What is Drag Threshold / Deadzone in UI controls?",shortAnswer:"Requiring the mouse to move at least 3 to 5 pixels before interpreting a mouse press as a drag rather than a static click.",explanation:"Deadzone thresholds prevent accidental micro-drags when clicking buttons.",hint:"What mechanism distinguishes intentional drags from static clicks?",level:"advanced",codeExample:"if math.hypot(dx, dy) > 5: start_dragging()"},{question:"How do you build a multi-piece jigsaw puzzle in Python Turtle?",shortAnswer:"Create 4-9 separate turtle shapes, attach `ondrag` and `onrelease` to each, checking if each piece is dropped near its target slot.",explanation:"Independent draggable turtles represent separate movable puzzle pieces.",hint:"How are multi-piece puzzle games constructed?",level:"moderate",codeExample:"for piece in pieces: piece.ondrag(drag); piece.onrelease(check_slot)"},{question:"What is Rubber-banding in box-selection tools?",shortAnswer:"Drawing an interactive expanding dashed rectangle from initial click `(x0, y0)` to current drag `(x1, y1)` to select multiple objects.",explanation:"Standard multi-item selection technique in desktop operating systems.",hint:"What is the term for rectangular drag-selection boxes?",level:"advanced",codeExample:"# Rubber-band box selection rectangle"},{question:"Why should `pen.penup()` be used when jumping the pen cursor without drawing?",shortAnswer:"To prevent unwanted stray connector lines between separate drawing strokes.",explanation:"`penup()` lifts the virtual pen off the digital paper.",hint:"How do you reposition the brush without drawing lines?",level:"basic",codeExample:"pen.penup(); pen.goto(new_x, new_y); pen.pendown()"},{question:"How do you calculate the percentage value `(0% - 100%)` from a slider knob's `x` position?",shortAnswer:"`pct = ((x - min_x) / (max_x - min_x)) * 100`.",explanation:"Linear normalization maps physical pixel ranges to logical 0-100% metrics.",hint:"What formula normalizes slider knob position to a 0-100 percentage?",level:"basic",codeExample:"pct = int(((x + 150) / 300) * 100)"},{question:"How do you export or save a freehand Turtle drawing to an image file?",shortAnswer:"Use `screen.getcanvas().postscript(file='drawing.eps')` or convert with PIL / Ghostscript.",explanation:"Tkinter canvas natively exports vector EPS PostScript files.",hint:"What method exports Turtle canvas graphics to PostScript EPS files?",level:"moderate",codeExample:"screen.getcanvas().postscript(file='art.eps')"},{question:"How do you implement Undo functionality for a freehand drawing canvas?",shortAnswer:"Store stroke coordinates in a list; on Undo keypress, clear canvas and replay all strokes except the last one.",explanation:"Stroke replay buffers implement non-destructive undo and redo stacks.",hint:"How is Undo history implemented for freehand drawings?",level:"advanced",codeExample:"strokes.pop(); redraw_all(strokes)"},{question:"Can multiple sliders (e.g. Red, Green, Blue) coexist on the same screen?",shortAnswer:"Yes, each slider uses its own draggable knob turtle clamped to its respective Y horizontal track.",explanation:"Separate knob turtles allow building complex multi-slider control panels.",hint:"How do multiple RGB sliders coexist on one canvas?",level:"moderate",codeExample:"# r_knob at y=50, g_knob at y=0, b_knob at y=-50"},{question:"What is Delta Drag Tracking (`dx, dy`)?",shortAnswer:"Calculating displacement relative to the previous frame's mouse position (`dx = x - prev_x`) rather than absolute coordinates.",explanation:"Delta tracking simplifies relative movement for complex compound objects.",hint:"What technique computes movement relative to previous mouse positions?",level:"advanced",codeExample:"dx = x - last_x; dy = y - last_y"},{question:"How do you animate dragging with a physics spring / elastic tether?",shortAnswer:"Apply spring force `fx = -k * (pos - mouse_pos)` every tick, accelerating the object smoothly toward the mouse cursor.",explanation:"Spring physics adds satisfying weight and momentum to draggable objects.",hint:"How do spring equations create elastic dragging physics?",level:"expert",codeExample:"ax = -k * (x - target_x) - damping * vx"},{question:"Why does dragging feel sluggish if `screen.tracer(0)` and `screen.update()` are not used properly?",shortAnswer:"Without tracer synchronization, Tkinter animates every microscopic sub-step of the turtle's movement.",explanation:"Double-buffering guarantees immediate, instant visual drag updates.",hint:"Why is tracer management important for smooth dragging?",level:"moderate",codeExample:"screen.tracer(0); # in drag: update(); screen.update()"},{question:"How do you create a draggable circular dial / knob that rotates around a pivot?",shortAnswer:"Compute angle using `theta = math.atan2(y - pivot_y, x - pivot_x)` and rotate the turtle heading to `theta`.",explanation:"Trigonometric arctangent converts mouse drag coordinates to rotational angles.",hint:"What trigonometric function converts drag coordinates to rotation angles?",level:"advanced",codeExample:"angle = math.degrees(math.atan2(y - cy, x - cx))"},{question:"How do you bind different drag behaviors to Left Button vs Right Button?",shortAnswer:"Specify `btn=1` or `btn=3`: `t.ondrag(drag_draw, btn=1)` and `t.ondrag(drag_erase, btn=3)`.",explanation:"Button index arguments support multi-button drag workflows.",hint:"How are multi-button drags configured in ondrag?",level:"moderate",codeExample:"t.ondrag(brush_drag, 1); t.ondrag(erase_drag, 3)"},{question:"What is Card Deck Drag-and-Drop in solitaire or trading card games?",shortAnswer:"Dragging card turtles between tableau stacks, validating target stack rules upon `onrelease`.",explanation:"Drag and drop forms the core interaction model for card and board games.",hint:"What game genre relies on card drag and drop validation?",level:"moderate",codeExample:"card_t.ondrag(drag_card); card_t.onrelease(drop_card)"},{question:"How do you provide visual feedback (like a drop-shadow) while dragging a sprite?",shortAnswer:"Scale `shapesize(1.15)` and draw a faint grey shadow polygon slightly offset beneath the dragged sprite.",explanation:"Visual elevation cues simulate picking up a physical card or tile.",hint:"How do drop shadows and scaling simulate physical elevation during drags?",level:"moderate",codeExample:"t.shapesize(2.8, 2.8)  # Elevate on drag"},{question:"What is the 3-step Golden Rule for Drag-and-Drop Interactions in Python Turtle?",shortAnswer:"1. Bind `t.ondrag(drag_fn)` with the unbind-rebind pattern | 2. Apply spatial bounds / clamping | 3. Bind `t.onrelease(drop_fn)` for snap alignment.",explanation:"This 3-step blueprint guarantees rock-solid, glitch-free dragging and snapping.",hint:"What 3 steps build robust drag and drop interactions in Turtle?",level:"basic",codeExample:"# 1. ondrag + unbind → 2. clamp bounds → 3. onrelease snap"},{question:"How does learning `ondrag()` prepare students for modern frontend and mobile development?",shortAnswer:"Because touch gestures (drag, swipe, pan), HTML5 Drag-and-Drop API, and React Native PanResponder use identical spatial event concepts.",explanation:"Drag-and-drop mechanics are foundational across all modern GUI and mobile platforms.",hint:"How does ondrag connect to HTML5 Drag-and-Drop and React Native gestures?",level:"basic",codeExample:"# Direct mapping to HTML5 Drag-and-Drop and mobile touch gestures"},{question:"Why are custom interactive widgets (sliders, knobs, color pickers) better than OS default widgets in game development?",shortAnswer:"Because custom graphical widgets can be fully styled with theme graphics, custom fonts, animations, and sound effects matching the game's aesthetic.",explanation:"Custom game UI widgets maintain visual immersion compared to standard OS grey dialogs.",hint:"Why do game developers build custom canvas sliders rather than default OS controls?",level:"basic",codeExample:"# Immersive themed custom GUI widgets"}],T=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 4 - Mouse drag events with ondrag() for freehand drawing\r
File: freehand_drawing_canvas_ondrag.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Freehand Digital Whiteboard using \`turtle.ondrag(fun)\`:\r
- Drags pen cursor following mouse coordinates in real time.\r
- Color switching palette via number keys.\r
- Clear canvas on spacebar.\r
"""\r
\r
import turtle\r
\r
def run_freehand_canvas():\r
    screen = turtle.Screen()\r
    screen.title("Freehand Digital Whiteboard - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    # Drawing Pen Turtle\r
    pen = turtle.Turtle()\r
    pen.shape("circle")\r
    pen.shapesize(0.8, 0.8)\r
    pen.color("#38bdf8")\r
    pen.pensize(4)\r
    pen.speed(0)\r
\r
    # Palette\r
    colors = {"1": "#38bdf8", "2": "#34d399", "3": "#fbbf24", "4": "#f43f5e", "5": "#a855f7"}\r
\r
    def set_color(c):\r
        pen.color(c)\r
        pen.pencolor(c)\r
\r
    def on_drag(x, y):\r
        # Continuous mouse dragging callback\r
        pen.ondrag(None)  # Temporarily disable to prevent event queue buildup\r
        pen.goto(x, y)\r
        pen.ondrag(on_drag)\r
\r
    def on_space():\r
        pen.clear()\r
\r
    # Bind Drag Callback\r
    pen.ondrag(on_drag)\r
\r
    # Bind Keyboard Palette\r
    for k, col in colors.items():\r
        screen.onkeypress(lambda c=col: set_color(c), k)\r
    screen.onkeypress(on_space, "space")\r
\r
    screen.listen()\r
\r
    # HUD\r
    hud = turtle.Turtle(); hud.hideturtle()\r
    hud.penup(); hud.goto(0, 220); hud.pendown()\r
    hud.color("#94a3b8")\r
    hud.write("DRAG MOUSE: Draw  |  KEYS [1-5]: Colors  |  SPACE: Clear", align="center", font=("Arial", 11, "bold"))\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_freehand_canvas()\r
`,z=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 4 - Mouse drag events with ondrag() for freehand drawing\r
File: drag_and_drop_puzzle_piece.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Drag-and-Drop Puzzle Piece with Snap-to-Grid Mechanics:\r
- Drag pieces smoothly across the screen.\r
- On mouse release, snap position to the nearest 50px grid cell.\r
"""\r
\r
import turtle\r
\r
def run_puzzle_game():\r
    screen = turtle.Screen()\r
    screen.title("Drag and Drop Snap-to-Grid Puzzle - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    # 1. Draw Target Grid Slots\r
    grid_t = turtle.Turtle(); grid_t.hideturtle(); grid_t.speed(0)\r
    for gx in [-100, 0, 100]:\r
        for gy in [-50, 50]:\r
            grid_t.penup(); grid_t.goto(gx - 25, gy - 25); grid_t.pendown()\r
            grid_t.color("#334155"); grid_t.pensize(2)\r
            for _ in range(4): grid_t.forward(50); grid_t.left(90)\r
\r
    # 2. Create Draggable Puzzle Block\r
    block = turtle.Turtle()\r
    block.shape("square")\r
    block.shapesize(2.5, 2.5)\r
    block.color("#38bdf8", "#0284c7")\r
    block.penup()\r
    block.goto(-220, -120)\r
\r
    def on_drag_block(x, y):\r
        block.ondrag(None)\r
        block.goto(x, y)\r
        block.ondrag(on_drag_block)\r
\r
    def on_release_block(x, y):\r
        # Snap to nearest 50px grid point\r
        snap_x = round(x / 50.0) * 50\r
        snap_y = round(y / 50.0) * 50\r
        block.goto(snap_x, snap_y)\r
\r
    block.ondrag(on_drag_block)\r
    block.onrelease(on_release_block)\r
\r
    # HUD\r
    hud = turtle.Turtle(); hud.hideturtle()\r
    hud.penup(); hud.goto(0, 210); hud.pendown()\r
    hud.color("#34d399")\r
    hud.write("DRAG THE BLUE BLOCK INTO ANY GRID SLOT (AUTO-SNAPS)", align="center", font=("Arial", 11, "bold"))\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_puzzle_game()\r
`,A=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 4 - Mouse drag events with ondrag() for freehand drawing\r
File: interactive_draggable_slider_ui.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Custom Draggable GUI Slider Widget:\r
- Constrains horizontal dragging between -150 and +150 px.\r
- Maps slider knob position to a 0% - 100% value readout.\r
"""\r
\r
import turtle\r
\r
def run_slider_widget():\r
    screen = turtle.Screen()\r
    screen.title("Draggable GUI Slider Widget - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    # 1. Slider Track Background\r
    track_t = turtle.Turtle(); track_t.hideturtle(); track_t.speed(0)\r
    track_t.penup(); track_t.goto(-150, 0); track_t.pendown()\r
    track_t.color("#334155"); track_t.pensize(8); track_t.forward(300)\r
\r
    # 2. Draggable Knob Turtle\r
    knob = turtle.Turtle()\r
    knob.shape("circle")\r
    knob.shapesize(1.6, 1.6)\r
    knob.color("white", "#38bdf8")\r
    knob.penup()\r
    knob.goto(0, 0)\r
\r
    # 3. Readout Display Turtle\r
    readout_t = turtle.Turtle(); readout_t.hideturtle(); readout_t.speed(0)\r
\r
    def update_readout(knob_x):\r
        # Map [-150, 150] -> [0%, 100%]\r
        pct = int(((knob_x + 150) / 300.0) * 100)\r
        readout_t.clear()\r
        readout_t.penup(); readout_t.goto(0, 80); readout_t.pendown()\r
        readout_t.color("#34d399")\r
        readout_t.write(f"VOLUME LEVEL: {pct}%", align="center", font=("Arial", 16, "bold"))\r
\r
    def on_drag_knob(x, y):\r
        knob.ondrag(None)\r
        # Constrain X to slider bounds [-150, 150] and lock Y = 0\r
        clamped_x = max(-150, min(150, x))\r
        knob.goto(clamped_x, 0)\r
        update_readout(clamped_x)\r
        knob.ondrag(on_drag_knob)\r
\r
    knob.ondrag(on_drag_knob)\r
    update_readout(0)\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_slider_widget()\r
`,E=`================================================================================\r
  TOPIC 4: MOUSE DRAG EVENTS WITH ONDRAG() FOR FREEHAND DRAWING\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS TURTLE.ONDRAG()?\r
--------------------------------------------------------------------------------\r
\`turtle.ondrag(fun, btn=1)\` binds a callback function that executes continuously\r
as the user clicks and drags that specific turtle across the canvas.\r
The callback automatically receives the mouse's current \`(x, y)\` Cartesian coordinates.\r
\r
2. PREVENTING EVENT QUEUE BUILDUP (THE UNBIND-REBIND PATTERN)\r
--------------------------------------------------------------------------------\r
Moving a turtle takes several milliseconds. If the user drags rapidly, thousands of\r
drag events flood the queue, causing lag.\r
Best Practice Pattern:\r
\`\`\`python\r
def on_drag(x, y):\r
    t.ondrag(None)      # Temporarily pause drag events\r
    t.goto(x, y)        # Perform move\r
    t.ondrag(on_drag)   # Re-enable drag events\r
\`\`\`\r
\r
3. DRAG CONSTRAINTS & GRID SNAPPING\r
--------------------------------------------------------------------------------\r
- 1D Axis Sliders: Clamp \`x\` between \`[min_x, max_x]\` and lock \`y = 0\`.\r
- Snap to Grid: \`snap_x = round(x / grid_size) * grid_size\`.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,S=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glowKnob {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
  50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.9)); }
}
`,H=()=>{const[i,m]=o.useState(65),[l,x]=o.useState("#38bdf8"),[g,d]=o.useState([]),[b,u]=o.useState(!1),f=["#38bdf8","#34d399","#fbbf24","#f43f5e","#a855f7"],y=n=>{u(!0);const r=n.currentTarget.getBoundingClientRect(),a=n.clientX-r.left,s=n.clientY-r.top;d(t=>[...t,[{x:a,y:s,color:l}]])},w=n=>{if(!b)return;const r=n.currentTarget.getBoundingClientRect(),a=n.clientX-r.left,s=n.clientY-r.top;d(t=>{if(t.length===0)return t;const c=[...t[t.length-1],{x:a,y:s,color:l}];return[...t.slice(0,-1),c]})},h=()=>{u(!1)},_=()=>{d([])},v=[{name:"turtle.ondrag(fun, btn=1)",returnType:"Mouse Drag Listener",purpose:"Binds callback `fun(x, y)` executing continuously while dragging that specific turtle sprite.",usage:"pen.ondrag(on_drag)"},{name:"turtle.onrelease(fun, btn=1)",returnType:"Drag Release Listener",purpose:"Fires callback when mouse button is released after dragging, ideal for snap-to-grid logic.",usage:"block.onrelease(snap_to_grid)"},{name:"Unbind-Rebind Pattern",returnType:"Queue Overflow Prevention",purpose:"Calls `ondrag(None)` → moves turtle → re-enables `ondrag(handler)` to prevent lag.",usage:`t.ondrag(None)
t.goto(x, y)
t.ondrag(on_drag)`},{name:"1D Axis Clamping",returnType:"Widget Constraint Math",purpose:"Locks orthogonal axis and clamps X between `[min_x, max_x]` for GUI sliders.",usage:"clamped_x = max(-150, min(150, x))"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:S}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 4"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent",children:"Mouse Drag Events: turtle.ondrag() & Freehand Drawing"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Build interactive whiteboards and drag-and-drop mechanics. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"turtle.ondrag()"}),", the ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Unbind-Rebind Performance Pattern"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Snap-to-Grid Puzzles"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Custom GUI Sliders"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎨 Freehand Digital Whiteboard"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🧩 Drag-and-Drop Grid Snapping"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎚️ 1D Clamped GUI Slider Widget"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Whiteboard & Custom Slider Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click and drag on the canvas to draw freehand strokes, choose palette colors, or adjust the live GUI slider widget below."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800",children:f.map(n=>e.jsx("button",{onClick:()=>x(n),style:{backgroundColor:n},className:`w-6 h-6 rounded-full cursor-pointer transition transform ${l===n?"scale-110 ring-2 ring-white":"opacity-80 hover:opacity-100"}`},n))}),e.jsx("button",{onClick:_,className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border border-rose-500/40 transition cursor-pointer",children:"Clear Board"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Freehand Drawing Surface (Click & Drag Mouse)"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",onMouseDown:y,onMouseMove:w,onMouseUp:h,onMouseLeave:h,className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg cursor-crosshair border border-slate-800 select-none",children:[g.map((n,r)=>{if(n.length===0)return null;const a=n.reduce((s,t,c)=>c===0?`M ${t.x} ${t.y}`:`${s} L ${t.x} ${t.y}`,"");return e.jsx("path",{d:a,stroke:n[0].color,strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"},r)}),g.length===0&&e.jsx("text",{x:"160",y:"95",fill:"#475569",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"CLICK & DRAG TO DRAW WITH ondrag()"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Custom Draggable Slider Widget"}),e.jsxs("span",{className:"font-mono text-xs text-emerald-300 font-bold",children:[i,"% Level"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center space-y-3",children:[e.jsxs("div",{className:"w-full flex items-center justify-between text-[11px] text-slate-400 font-mono",children:[e.jsx("span",{children:"0% (MIN)"}),e.jsx("span",{className:"text-cyan-300 font-bold",children:"1D CLAMPED TRACK"}),e.jsx("span",{children:"100% (MAX)"})]}),e.jsx("input",{type:"range",min:"0",max:"100",value:i,onChange:n=>m(parseInt(n.target.value)),className:"w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"}),e.jsxs("div",{className:"text-[11px] font-mono text-emerald-400",children:["knob_x = ",(i/100*300-150).toFixed(0)," px | status: ONDRAG_CONNECTED"]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Unbind-Rebind Drag Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`def on_drag(x, y):
    pen.ondrag(None)  # 1. Unbind (prevent queue flooding)
    pen.goto(x, y)    # 2. Update coordinate
    pen.ondrag(on_drag) # 3. Rebind handler`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Drag & Drop Architectural APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method / Keyword"}),e.jsx("th",{className:"py-3 px-4",children:"Lifecycle Phase"}),e.jsx("th",{className:"py-3 px-4",children:"Spatial Interaction Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:v.map((n,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:n.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:n.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:n.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:n.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(p,{fileModule:T,title:"freehand_drawing_canvas_ondrag.py",highlightLines:[29,30,31,32,37,40]}),e.jsx(p,{fileModule:z,title:"drag_and_drop_puzzle_piece.py",highlightLines:[32,33,34,38,39,42,43]}),e.jsx(p,{fileModule:A,title:"interactive_draggable_slider_ui.py",highlightLines:[31,32,38,40,41,44]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🧩"})," Barrackpore Jigsaw Puzzle Game"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Abhronila built a 6-piece jigsaw puzzle in Barrackpore. When players dragged puzzle pieces across the screen, she used ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"piece.onrelease()"})," to check if the piece was within 30px of its target slot, snapping it perfectly into place with a chime sound effect!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎚️"})," Kolkata RGB Color Synthesizer"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima in Kolkata developed a custom graphics tool with 3 draggable RGB sliders. By mapping each slider knob's ",e.jsx("code",{className:"text-amber-300 font-mono",children:"x"})," coordinate from ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"[-150, 150]"})," to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"[0, 255]"}),", she synthesized live background colors dynamically in real time!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Mouse Drag Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Event Queue Overflow (Drag Lag)"}),e.jsxs("p",{className:"text-slate-400",children:["Rapid mouse dragging without the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"t.ondrag(None)"})," unbind pattern queues thousands of moves, making the cursor lag 3 seconds behind the physical mouse."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Forgetting pen.speed(0)"}),e.jsxs("p",{className:"text-slate-400",children:["If the drawing pen turtle has default animation speed, it animates each crawl step slowly, destroying freehand drawing fluidity. Always set ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"speed(0)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Dragging Sliders Off Track"}),e.jsxs("p",{className:"text-slate-400",children:["Failing to lock ",e.jsx("code",{className:"text-amber-300 font-mono",children:"y = 0"})," allows users to drag horizontal slider knobs vertically all over the screen. Always lock the inactive axis."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Dragging Hidden Turtles"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-rose-300 font-mono",children:"ondrag()"})," requires a visible turtle shape to register mouse interaction; hidden turtles cannot be dragged."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know that `turtle.ondrag()` fires continuously while clicking and dragging a turtle","I implement the `t.ondrag(None)` unbind-rebind pattern to eliminate queue lag","I set `pen.speed(0)` for zero-latency freehand brush drawing","I use `round(x / grid_size) * grid_size` to snap draggable puzzle pieces to grids","I clamp 1D slider knobs using `max(min_x, min(max_x, x))` and lock the Y axis","I use `turtle.onrelease()` to detect mouse button releases after dragging"].map((n,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:n})]},r))})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(j,{title:"Mouse Drag & ondrag() FAQs",questions:D})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(N,{content:E,title:"Topic 4: Mouse Drag Events Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(k,{note:"Freehand drawing with turtle.ondrag() is one of the most exciting projects for our students at Coder & AccoTax in Barrackpore and Kolkata. Just remember my golden rule: always unbind ondrag before moving the turtle to prevent event queue flooding! With that simple trick, your digital whiteboard will glide as smoothly as silk!"})})]})]})};export{H as default};

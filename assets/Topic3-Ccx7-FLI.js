import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as v}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as s}from"./PythonFileLoader-hCi5osN-.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const C=[{question:"What is the primary difference between `screen.onclick()` and `turtle.onclick()`?",shortAnswer:"`screen.onclick()` triggers anywhere on canvas background; `turtle.onclick()` triggers only when clicking that specific turtle's visible sprite.",explanation:"Allows separating global canvas interactions from individual clickable buttons and game entities.",hint:"Which method clicks global canvas versus a specific sprite?",level:"basic",codeExample:`screen.onclick(stamp_bg)
target_turtle.onclick(hit_target)`},{question:"What arguments are automatically passed to an `onclick` callback function?",shortAnswer:"Two floats representing the `x` and `y` Cartesian coordinates of the mouse click: `def on_click(x, y):`.",explanation:"Turtle passes clicked coordinates directly to the handler.",hint:"How many coordinate arguments does onclick pass to its callback?",level:"basic",codeExample:`def on_click(x, y):
    print(f'Clicked at ({x}, {y})')`},{question:"What do the `btn` argument numbers 1, 2, and 3 correspond to in `screen.onclick(fun, btn=1)`?",shortAnswer:"1 = Left click, 2 = Middle click (scroll wheel click), 3 = Right click.",explanation:"Standard Unix/X11 mouse button index convention.",hint:"Which number corresponds to Left, Middle, and Right mouse buttons?",level:"basic",codeExample:`screen.onclick(left_click, 1)
screen.onclick(right_click, 3)`},{question:"Why must a turtle be visible (`t.isvisible() == True`) for `turtle.onclick()` to trigger?",shortAnswer:"Because Tkinter cannot detect clicks on hidden or zero-size bounding regions (`hideturtle()`).",explanation:"Clicks on hidden turtles do not intersect a visible polygon hit box.",hint:"Can users click on a hidden turtle with turtle.onclick?",level:"basic",codeExample:"# Turtle must be visible to receive clicks"},{question:"How do you increase the clickable hit-box area of an interactive Turtle button?",shortAnswer:"Use `t.shapesize(width_scale, length_scale)` to enlarge the turtle's visible sprite polygon.",explanation:"Enlarging the shape size proportionally expands the clickable boundary area.",hint:"What method enlarges the physical clickable dimensions of a turtle?",level:"moderate",codeExample:"t.shapesize(3, 6)  # 3x height, 6x width hit box"},{question:"What is Point-and-Click Adventure game mechanics in Python Turtle?",shortAnswer:"Gameplay driven by clicking interactive sprites (`turtle.onclick`) and terrain (`screen.onclick`) to navigate and interact with the world.",explanation:"Point-and-click mechanics form the core of classics like Monkey Island and Myst.",hint:"What genre of games relies entirely on mouse click event interactions?",level:"moderate",codeExample:"# Point-and-click NPC interaction"},{question:"How do you bind different actions to Left Click and Right Click simultaneously?",shortAnswer:"Call `screen.onclick(left_handler, btn=1)` and `screen.onclick(right_handler, btn=3)`.",explanation:"Separate `btn` indices register independent callbacks for each mouse button.",hint:"How are Left and Right mouse buttons bound independently?",level:"basic",codeExample:"screen.onclick(draw, 1); screen.onclick(erase, 3)"},{question:"How do you pass extra parameters (like an entity ID) to a `turtle.onclick` handler?",shortAnswer:"Use a closure factory `def make_handler(obj_id): return lambda x, y: do_action(obj_id, x, y)`.",explanation:"Closure factories capture specific instance parameters for individual sprite callbacks.",hint:"What function pattern creates custom callback handlers for specific entities?",level:"advanced",codeExample:"t.onclick(lambda x, y, id=i: on_hit(id, x, y))"},{question:"What happens if a user clicks on an overlapping cluster of multiple turtles?",shortAnswer:"The topmost turtle in the Z-order stack receives the click event.",explanation:"Tkinter canvas event routing dispatches clicks to the highest visible polygon layer.",hint:"Which turtle receives the click when multiple turtles overlap?",level:"advanced",codeExample:"# Topmost turtle in z-index receives the click"},{question:"How do you create an interactive Whack-A-Mole game in Python Turtle?",shortAnswer:"Spawn mole turtles in random holes on a timer, bind `mole.onclick()` to award score and hide the mole upon click.",explanation:"Timer-based spawning combined with `turtle.onclick` drives Whack-A-Mole gameplay.",hint:"How is Whack-a-mole constructed in Turtle?",level:"moderate",codeExample:"mole_t.onclick(lambda x, y: score_hit(mole_t))"},{question:"Why should `screen.listen()` be included inside `screen.onclick()` handlers?",shortAnswer:"To ensure that clicking the canvas background immediately re-claims keyboard focus if lost.",explanation:"Auto-refocusing ensures uninterrupted keyboard controls after mouse clicks.",hint:"Why call listen() inside onclick handlers?",level:"basic",codeExample:"def on_click(x, y): screen.listen()"},{question:"What is Hit Testing in computer graphics?",shortAnswer:"The geometric process of determining whether a mouse coordinate `(x, y)` intersects an on-screen graphical object or shape.",explanation:"Hit testing is the underlying algorithm powering `turtle.onclick`.",hint:"What is the technical term for testing if a point lies within a shape boundary?",level:"advanced",codeExample:"# Hit testing: is_inside_polygon(mx, my, poly)"},{question:"How do you disable a `turtle.onclick()` handler after an item is collected?",shortAnswer:"Call `t.onclick(None)`.",explanation:"Passing `None` detaches the event handler, preventing further clicks.",hint:"How do you unbind click listeners from a collected coin or item?",level:"basic",codeExample:"coin_t.onclick(None)"},{question:"What is Raycasting in 3D point-and-click games?",shortAnswer:"Projecting a virtual ray from the camera through the mouse cursor to detect which 3D object the ray intersects.",explanation:"3D raycasting is the three-dimensional extension of 2D screen coordinate hit testing.",hint:"What 3D technique determines which object is beneath the mouse pointer?",level:"expert",codeExample:"# Raycast hit detection from screen to world"},{question:"How do you draw a connecting line from the turtle's current position to wherever the user clicks?",shortAnswer:"In `on_screen_click(x, y)`: call `t.pendown(); t.goto(x, y)`.",explanation:"Directing the turtle to click coordinates draws interactive connector vectors.",hint:"How do you make the turtle draw a line to mouse click coordinates?",level:"basic",codeExample:"def on_click(x, y): t.goto(x, y)"},{question:"How do you measure double-clicks versus single-clicks in Python Turtle?",shortAnswer:"Track `last_click_time = time.time()`; if `time.time() - last_click_time < 0.3` seconds, trigger double-click logic.",explanation:"Delta-time threshold checks differentiate single clicks from rapid double-clicks.",hint:"How is double-click timing detected in code?",level:"moderate",codeExample:"if time.time() - last_t < 0.3: double_click()"},{question:"Can custom vector shapes (like houses or stars) registered with `screen.register_shape()` receive `turtle.onclick()` events?",shortAnswer:"Yes, custom polygon shapes registered with `register_shape()` inherit full click hit-testing capabilities.",explanation:"Turtle creates accurate polygon bounding hit areas for all custom shapes.",hint:"Do custom registered shapes support turtle.onclick?",level:"moderate",codeExample:`screen.register_shape('star', poly)
star_t.shape('star')
star_t.onclick(hit)`},{question:"How do you animate a button depression visual feedback effect when a turtle is clicked?",shortAnswer:"Temporarily shrink `t.shapesize(0.9 * scale)` and restore full size after 100ms using `screen.ontimer()`.",explanation:"Visual scaling feedback gives buttons a satisfying tactile, physical feel.",hint:"How do you create tactile click animations for Turtle buttons?",level:"moderate",codeExample:"t.shapesize(2.7, 2.7); screen.ontimer(lambda: t.shapesize(3, 3), 100)"},{question:"Why should drawing operations inside click callbacks avoid heavy recursive fractals?",shortAnswer:"Because long recursive drawing inside callbacks freezes the main event queue, preventing other clicks from responding.",explanation:"Heavy computations should be decomposed into timer steps or pre-rendered.",hint:"Why should heavy recursive drawings be avoided in click handlers?",level:"moderate",codeExample:"# Keep click callbacks lightweight and fast"},{question:"How do you create a Color Picker Palette using clickable turtles?",shortAnswer:"Place 5 colored circle turtles along the bottom edge, each bound with `t.onclick(lambda x,y, c=color: set_brush(c))`.",explanation:"Clickable color swatch turtles form a digital art toolbar palette.",hint:"How are clickable color swatch palettes assembled?",level:"moderate",codeExample:"for c in palette: make_color_swatch(c)"},{question:"What is Cursor Hover (Mouse-Over) detection in Turtle?",shortAnswer:"Detecting when the mouse enters a button area; achieved in Tkinter by binding `<Enter>` and `<Leave>` events to the canvas.",explanation:"Hover states allow buttons to glow before being clicked.",hint:"What events detect mouse enter and leave states?",level:"advanced",codeExample:"canvas.bind('<Enter>', on_hover)"},{question:"How do you calculate distance from click coordinate `(x, y)` to an object `(ox, oy)`?",shortAnswer:"`dist = math.hypot(x - ox, y - oy)`.",explanation:"Euclidean distance formula checks proximity to target objects.",hint:"What formula calculates distance from click to target?",level:"basic",codeExample:"dist = math.hypot(x - target_x, y - target_y)"},{question:"How do you prevent rapid clicking from spamming sound effects or weapon fire?",shortAnswer:"Implement a cooldown timestamp: `if time.time() < cooldown_end: return; cooldown_end = time.time() + 0.25`.",explanation:"Cooldown timers debounce rapid clicks.",hint:"How do cooldown timers prevent click spamming?",level:"moderate",codeExample:"if now < next_click_time: return"},{question:"What is Context Menu invocation using Right Click (`btn=3`)?",shortAnswer:"Opening an options or actions menu at mouse click `(x, y)` coordinates upon right-clicking.",explanation:"Right click standardly summons context-sensitive command menus.",hint:"What menu is standardly summoned by Right Click (btn=3)?",level:"basic",codeExample:"screen.onclick(open_context_menu, 3)"},{question:"How do you build an interactive Chess or Checkers board in Turtle?",shortAnswer:"Draw the grid; calculate clicked square `(col, row) = (x // tile_size, y // tile_size)` inside `screen.onclick`.",explanation:"Mathematical grid cell division maps continuous click coordinates to discrete board matrix indices.",hint:"How do you convert continuous click coordinates to discrete grid square columns and rows?",level:"moderate",codeExample:"col = int((x + 200) // 50); row = int((y + 200) // 50)"},{question:"Why is `turtle.onclick()` superior to calculating bounding boxes manually for circular sprites?",shortAnswer:"`turtle.onclick()` handles polygon hit-testing and transformation matrices automatically via Tkinter's native C implementation.",explanation:"Native hit-testing is faster and requires fewer lines of boilerplate code.",hint:"Why prefer turtle.onclick over manual bounding box math?",level:"basic",codeExample:"# Native Tkinter hit-testing"},{question:"How do you create an interactive soundboard where clicking instruments plays audio?",shortAnswer:"Create clickable instrument turtles; invoke audio playback libraries (`playsound` or `pygame.mixer`) inside their `onclick` callbacks.",explanation:"Binding audio playback to sprite clicks creates interactive soundboards.",hint:"How are audio soundboards constructed in Turtle?",level:"moderate",codeExample:"piano_t.onclick(lambda x,y: play_note('C4'))"},{question:"What is the 3-step Golden Rule for Mouse Click Handling in Python Turtle?",shortAnswer:"1. Define callback receiving `(x, y)` | 2. Choose `screen.onclick` (canvas) vs `turtle.onclick` (sprite) | 3. Start `screen.mainloop()`.",explanation:"This 3-step blueprint guarantees clean, intuitive mouse interaction architecture.",hint:"What 3 steps build interactive mouse-driven software in Turtle?",level:"basic",codeExample:"# 1. def click(x,y) → 2. bind screen/turtle.onclick → 3. mainloop()"},{question:"How does mouse click handling prepare students for modern web and mobile apps?",shortAnswer:"Because `screen.onclick(x, y)` directly translates to JavaScript `addEventListener('click', e => ...)` and React `onClick={(e) => ...}`.",explanation:"Mouse event architectures are universal across desktop and web applications.",hint:"How do Turtle click handlers map to web JavaScript and React?",level:"basic",codeExample:"# Direct mapping to React onClick and DOM event listeners"},{question:"Why is point-and-click UI design critical for modern software usability?",shortAnswer:"Because graphical click interfaces allow users of any age to navigate and control complex systems intuitively without memorizing text commands.",explanation:"Direct visual manipulation is the cornerstone of modern user interface design.",hint:"Why is intuitive point-and-click interaction essential in software design?",level:"basic",codeExample:"# Direct visual manipulation UI foundations"}],j=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 3 - Mouse click event handling: screen.onclick() and turtle.onclick()\r
File: screen_vs_turtle_onclick_mechanics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Direct comparison between two mouse click targets:\r
1. \`screen.onclick(fun)\`: Fires when user clicks ANYWHERE on the global canvas background.\r
   Callback receives \`(x, y)\` canvas coordinates.\r
2. \`turtle.onclick(fun)\`: Fires ONLY when the user clicks directly on that specific Turtle's shape/sprite!\r
   Callback receives \`(x, y)\` relative to turtle.\r
"""\r
\r
import turtle\r
import random\r
\r
def run_onclick_comparison():\r
    screen = turtle.Screen()\r
    screen.title("Screen vs Turtle onclick Mechanics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    # 1. Global Canvas Stamp Turtle\r
    brush_t = turtle.Turtle()\r
    brush_t.hideturtle()\r
    brush_t.speed(0)\r
\r
    # 2. Interactive Target Turtle (Sprite Click Target)\r
    target_t = turtle.Turtle()\r
    target_t.shape("circle")\r
    target_t.shapesize(3, 3)\r
    target_t.color("#f43f5e", "#fbbf24")\r
    target_t.penup()\r
    target_t.goto(0, 50)\r
\r
    # Instructions\r
    info_t = turtle.Turtle(); info_t.hideturtle()\r
    info_t.penup(); info_t.goto(0, 200); info_t.pendown()\r
    info_t.color("#38bdf8")\r
    info_t.write("Click Background: Stamp Star  |  Click Target Turtle: Spin & Relocate", align="center", font=("Arial", 11, "bold"))\r
\r
    # Handler 1: Screen Click Callback (Fires on canvas background)\r
    def on_screen_clicked(x, y):\r
        brush_t.penup(); brush_t.goto(x, y); brush_t.pendown()\r
        brush_t.color("#38bdf8", "#0284c7"); brush_t.begin_fill()\r
        for _ in range(5): brush_t.forward(15); brush_t.right(144)\r
        brush_t.end_fill()\r
\r
    # Handler 2: Turtle Click Callback (Fires ONLY when clicking the target turtle)\r
    def on_target_clicked(x, y):\r
        # Animate Spin & Relocate\r
        for _ in range(12):\r
            target_t.right(30)\r
        nx = random.randint(-250, 250)\r
        ny = random.randint(-150, 150)\r
        target_t.goto(nx, ny)\r
\r
    # Bind Events\r
    screen.onclick(on_screen_clicked)\r
    target_t.onclick(on_target_clicked)\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_onclick_comparison()\r
`,N=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 3 - Mouse click event handling: screen.onclick() and turtle.onclick()\r
File: multi_button_mouse_dispatcher.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Multi-Button Mouse Event Dispatching:\r
- Left Click (btn=1): Stamps a vibrant circle\r
- Middle Click / Scroll Wheel (btn=2): Clears canvas\r
- Right Click (btn=3): Stamps an emerald square\r
"""\r
\r
import turtle\r
\r
def run_multi_button_demo():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Button Mouse Dispatcher - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    t = turtle.Turtle(); t.hideturtle(); t.speed(0); t.pensize(2)\r
\r
    # Header HUD\r
    t.penup(); t.goto(0, 200); t.pendown()\r
    t.color("#38bdf8")\r
    t.write("LEFT CLICK: Circle  |  RIGHT CLICK: Square  |  MIDDLE CLICK: Clear", align="center", font=("Arial", 11, "bold"))\r
\r
    # Handler 1: Left Click (Button 1)\r
    def on_left_click(x, y):\r
        t.penup(); t.goto(x, y); t.pendown()\r
        t.color("#f43f5e", "#fbbf24"); t.begin_fill(); t.circle(20); t.end_fill()\r
\r
    # Handler 2: Right Click (Button 3)\r
    def on_right_click(x, y):\r
        t.penup(); t.goto(x - 20, y - 20); t.pendown()\r
        t.color("#34d399", "#059669"); t.begin_fill()\r
        for _ in range(4): t.forward(40); t.left(90)\r
        t.end_fill()\r
\r
    # Handler 3: Middle Click (Button 2)\r
    def on_middle_click(x, y):\r
        t.clear()\r
        t.penup(); t.goto(0, 200); t.pendown()\r
        t.color("#38bdf8")\r
        t.write("CANVAS CLEARED · LEFT: Circle | RIGHT: Square | MIDDLE: Clear", align="center", font=("Arial", 11, "bold"))\r
\r
    # Bind Mouse Buttons\r
    screen.onclick(on_left_click, btn=1)\r
    screen.onclick(on_middle_click, btn=2)\r
    screen.onclick(on_right_click, btn=3)\r
\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_multi_button_demo()\r
`,T=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 3 - Mouse click event handling: screen.onclick() and turtle.onclick()\r
File: interactive_point_and_click_target.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Point-and-Click Shooting Target Mini-Game:\r
- Multiple target turtles wander or jump randomly.\r
- Clicking a target invokes its specific \`turtle.onclick()\` handler, awarding points\r
  and playing a hit animation.\r
"""\r
\r
import turtle\r
import random\r
\r
def run_shooting_gallery():\r
    screen = turtle.Screen()\r
    screen.title("Point-and-Click Target Gallery - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    score_t = turtle.Turtle(); score_t.hideturtle()\r
    state = {"score": 0, "hits": 0}\r
\r
    def update_score_hud():\r
        score_t.clear()\r
        score_t.penup(); score_t.goto(-320, 220); score_t.pendown()\r
        score_t.color("#38bdf8")\r
        score_t.write(f"SCORE: {state['score']} pts  |  TARGETS HIT: {state['hits']}", font=("Arial", 12, "bold"))\r
\r
    # Spawn 3 Target Turtles\r
    targets = []\r
    colors = ["#f43f5e", "#fbbf24", "#34d399"]\r
\r
    for i in range(3):\r
        t = turtle.Turtle()\r
        t.shape("circle")\r
        t.shapesize(2.5, 2.5)\r
        t.color("white", colors[i])\r
        t.penup()\r
        t.goto(-200 + (i * 200), random.randint(-100, 100))\r
\r
        # Define handler for this target\r
        def make_hit_handler(target_turtle):\r
            def on_target_hit(x, y):\r
                state["score"] += 100\r
                state["hits"] += 1\r
                # Jump to new random location\r
                target_turtle.goto(random.randint(-280, 280), random.randint(-160, 160))\r
                update_score_hud()\r
            return on_target_hit\r
\r
        t.onclick(make_hit_handler(t))\r
        targets.append(t)\r
\r
    update_score_hud()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_shooting_gallery()\r
`,E=`================================================================================\r
  TOPIC 3: MOUSE CLICK EVENT HANDLING: SCREEN.ONCLICK() AND TURTLE.ONCLICK()\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. SCREEN.ONCLICK VS TURTLE.ONCLICK\r
--------------------------------------------------------------------------------\r
- \`screen.onclick(fun, btn=1)\`:\r
  Global listener. Fires whenever the user clicks anywhere on the canvas background.\r
  Useful for drawing tools, spawning objects, or global UI clicks.\r
\r
- \`turtle.onclick(fun, btn=1)\`:\r
  Object-specific listener. Fires ONLY when the user clicks directly on that\r
  particular Turtle's visible shape polygon.\r
  Useful for buttons, interactive NPCs, targets, and draggable sprites!\r
\r
2. MULTI-BUTTON MOUSE DISPATCHING\r
--------------------------------------------------------------------------------\r
- \`btn=1\`: Left mouse button (primary action / draw)\r
- \`btn=2\`: Middle mouse button / scroll wheel click (auxiliary / clear)\r
- \`btn=3\`: Right mouse button (context menu / alt-fire / secondary action)\r
\r
3. COORDINATE PARAMETERS\r
--------------------------------------------------------------------------------\r
Both \`screen.onclick\` and \`turtle.onclick\` pass the exact \`(x, y)\` canvas coordinates\r
of the click event directly into the bound callback function: \`def on_click(x, y):\`\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,S=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes targetPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); filter: drop-shadow(0 0 10px rgba(244, 63, 94, 0.7)); }
}
`,W=()=>{const[l,d]=a.useState(0),[u,h]=a.useState(0),[m,o]=a.useState([{id:1,x:70,y:70,color:"#f43f5e",r:16},{id:2,x:160,y:110,color:"#fbbf24",r:16},{id:3,x:250,y:60,color:"#34d399",r:16}]),[p,x]=a.useState([]),[g,c]=a.useState("Click targets or background");a.useEffect(()=>{const t=setInterval(()=>{o(n=>n.map(r=>({...r,x:Math.max(30,Math.min(290,r.x+(Math.random()-.5)*30)),y:Math.max(30,Math.min(140,r.y+(Math.random()-.5)*30))})))},1500);return()=>clearInterval(t)},[]);const b=(t,n)=>{n.stopPropagation(),d(r=>r+100),h(r=>r+1),c(`🎯 TURTLE.ONCLICK: Hit Target #${t}! (+100 pts)`),o(r=>r.map(i=>i.id===t?{...i,x:Math.random()*240+40,y:Math.random()*100+40}:i))},k=t=>{const n=t.currentTarget.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;x(y=>[...y.slice(-6),{x:r,y:i,color:"#38bdf8"}]),c(`✨ SCREEN.ONCLICK: Stamped Star at (${r.toFixed(0)}, ${i.toFixed(0)})`)},f=[{name:"screen.onclick(fun, btn=1)",returnType:"Canvas Background Listener",purpose:"Fires when user clicks anywhere on the canvas background, passing (x, y) coordinates.",usage:"screen.onclick(on_canvas_click, btn=1)"},{name:"turtle.onclick(fun, btn=1)",returnType:"Sprite-Specific Listener",purpose:"Fires ONLY when clicking that specific visible turtle's shape polygon (hit-box).",usage:"target_turtle.onclick(on_hit)"},{name:"Multi-Button Mouse Indices",returnType:"Button Dispatching",purpose:"btn=1 (Left Click), btn=2 (Middle Scroll Wheel Click), btn=3 (Right Click).",usage:`screen.onclick(left_click, 1)
screen.onclick(right_click, 3)`},{name:"e.stopPropagation()",returnType:"Event Isolation",purpose:"Prevents a sprite click from bubbling through to trigger background screen clicks.",usage:"target_turtle.onclick(hit_handler)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:S}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 3"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent",children:"Mouse Click Handling: screen.onclick() & turtle.onclick()"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Build interactive point-and-click software. Master the critical difference between ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"screen.onclick() (Global Canvas)"})," and ",e.jsx("span",{className:"text-rose-400 font-semibold",children:"turtle.onclick() (Sprite Hit-Testing)"}),", multi-button bindings, and arcade shooting galleries."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎯 turtle.onclick() Sprite Hit-Testing"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🖱️ Left / Middle / Right Click Dispatching"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎮 Point-and-Click Shooting Gallery"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Interactive Point-and-Click Shooting Gallery"]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Click moving targets directly to trigger ",e.jsx("code",{className:"text-rose-400 font-mono",children:"turtle.onclick()"}),", or click the background canvas to trigger ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.onclick()"}),"."]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-cyan-300 font-bold",children:["SCORE: ",l," pts"]}),e.jsxs("span",{className:"px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-emerald-300 font-bold",children:["HITS: ",u]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Shooting Gallery Arena (Click Targets / Background)"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",onClick:k,className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg cursor-crosshair border border-slate-800",children:[p.map((t,n)=>e.jsx("g",{transform:`translate(${t.x}, ${t.y})`,children:e.jsx("polygon",{points:"0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2",fill:t.color,opacity:"0.8"})},n)),m.map(t=>e.jsxs("g",{transform:`translate(${t.x}, ${t.y})`,onClick:n=>b(t.id,n),className:"cursor-pointer transition-all duration-500 animate-[targetPulse_2s_infinite]",children:[e.jsx("circle",{cx:"0",cy:"0",r:t.r,fill:t.color,stroke:"#ffffff",strokeWidth:"2"}),e.jsx("circle",{cx:"0",cy:"0",r:t.r*.5,fill:"#ffffff"}),e.jsx("circle",{cx:"0",cy:"0",r:t.r*.25,fill:t.color})]},t.id)),e.jsx("text",{x:"160",y:"168",fill:"#64748b",fontSize:"8",textAnchor:"middle",fontFamily:"monospace",children:"CLICK TARGET = turtle.onclick() | CLICK BG = screen.onclick()"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Mouse Event Dispatch Telemetry"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300",children:"Hit-Testing ACTIVE"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Last Mouse Dispatch Event"}),e.jsx("div",{className:"text-xs font-mono font-bold mt-1 text-cyan-300",children:g})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Screen vs Turtle Click Architecture"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# 1. Global Canvas Background Clicks
screen.onclick(stamp_star, btn=1)

# 2. Specific Interactive Sprite Clicks
target_turtle.onclick(handle_target_hit)`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Mouse Click Event Core APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Signature"}),e.jsx("th",{className:"py-3 px-4",children:"Scope"}),e.jsx("th",{className:"py-3 px-4",children:"Event Dispatch Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:f.map((t,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:j,title:"screen_vs_turtle_onclick_mechanics.py",highlightLines:[25,33,40,48,49]}),e.jsx(s,{fileModule:N,title:"multi_button_mouse_dispatcher.py",highlightLines:[19,24,30,36,37,38]}),e.jsx(s,{fileModule:T,title:"interactive_point_and_click_target.py",highlightLines:[28,35,36,37,43,44]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-rose-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Barrackpore Duck Hunt: Hit-Testing"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima developed a retro Duck Hunt shooting gallery in Barrackpore. When flying ducks crossed the screen, she bound ",e.jsx("code",{className:"text-rose-400 font-mono",children:"duck_turtle.onclick()"})," to trigger quacking sound effects, award 200 points, and spawn falling feather animations upon direct hits!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Kolkata Digital Paint Studio"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita in Kolkata constructed a graphic design paint app. By mapping Left Click (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"btn=1"}),") to brush strokes, Right Click (",e.jsx("code",{className:"text-amber-300 font-mono",children:"btn=3"}),") to color pickers, and Middle Click (",e.jsx("code",{className:"text-rose-300 font-mono",children:"btn=2"}),") to clear canvas, she built an intuitive multi-tool painting workstation!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Mouse Click Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Attempting to Click Hidden Turtles"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.onclick()"})," on a hidden turtle (",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.hideturtle()"}),") never triggers because Tkinter cannot hit-test invisible polygons."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Defining 0-Argument Click Handlers"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-cyan-300 font-mono",children:"onclick"})," automatically passes ",e.jsx("code",{className:"text-amber-300 font-mono",children:"(x, y)"}),". Defining ",e.jsx("code",{className:"text-rose-300 font-mono",children:"def click():"})," raises a ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: takes 0 positional arguments but 2 were given"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Small Clickable Hit-Boxes"}),e.jsxs("p",{className:"text-slate-400",children:["Default 20px turtles are frustratingly tiny to click on high-DPI screens. Always scale interactive button shapes using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"t.shapesize(2.5, 5)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Confusing Mouse Button Indices"}),e.jsxs("p",{className:"text-slate-400",children:["Setting ",e.jsx("code",{className:"text-rose-300 font-mono",children:"btn=2"})," expecting right click fails because 2 is the middle scroll wheel. Right click is strictly ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"btn=3"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the difference between `screen.onclick` (canvas) and `turtle.onclick` (sprite)","I understand that `onclick` callbacks automatically receive `(x, y)` coordinates","I know the mouse button indices: `btn=1` (Left), `btn=2` (Middle), `btn=3` (Right)","I ensure turtles are visible (`t.isvisible()`) before attaching `turtle.onclick()`","I scale button hit boxes using `t.shapesize()` for comfortable clicking","I can build point-and-click target shooting games and interactive digital paint tools"].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},n))})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(_,{title:"Mouse Click Handling FAQs",questions:C})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(w,{content:E,title:"Topic 3: Mouse Click Handling Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(v,{note:"When we teach point-and-click mechanics at Coder & AccoTax in Barrackpore and Kolkata, students love building interactive target games and digital artboards. Always remember: screen.onclick is for the world; turtle.onclick is for the actors in that world. Combine both, and you have the complete toolkit for rich interactive software!"})})]})]})};export{W as default};

import{b as a,j as e,bg as g}from"./vendor-react-core-Doz9nIC6.js";import{P as c}from"./PythonFileLoader-hCi5osN-.js";import{P as k}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T as C}from"./TeacherSukantaHui-DerPxfxp.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const I=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 0: Introduction to Turtle Graphics: history, educational purpose, and real-world relevance\r
# File: turtle_first_screen_and_motion.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: First Turtle graphics program setting up canvas, pen properties,\r
#              linear movements, and angles.\r
"""\r
\r
import turtle\r
\r
def draw_first_geometric_path(demo_mode: bool = True):\r
    """Initializes turtle screen and draws a 2-segment path."""\r
    print("   [...] Initializing Turtle Screen and Canvas...")\r
    \r
    # 1. Screen Configuration\r
    screen = turtle.Screen()\r
    screen.title("Coder & Accotax • First Turtle Canvas (Barrackpore)")\r
    screen.bgcolor("#090d16")\r
    screen.setup(width=600, height=450)\r
\r
    # 2. Instantiate Turtle Pen\r
    t = turtle.Turtle()\r
    t.shape("turtle")\r
    t.color("#2dd4bf")  # Teal pen color\r
    t.pensize(3)\r
    t.speed(3)\r
\r
    # 3. Movement Commands (Forward & Left Turn)\r
    t.forward(120)  # Move 120 units East\r
    t.left(90)      # Rotate 90 degrees North\r
    t.forward(80)   # Move 80 units North\r
\r
    # Verify positions\r
    pos = t.pos()\r
    heading = t.heading()\r
    print(f"   [PASS] 1. Turtle position verified at coordinates: ({pos[0]:.1f}, {pos[1]:.1f})")\r
    print(f"   [PASS] 2. Turtle heading angle verified: {heading:.1f} degrees (North)")\r
\r
    if demo_mode:\r
        # In automated tests, close window cleanly after drawing\r
        turtle.bye()\r
    else:\r
        # In interactive mode, wait for user click\r
        screen.exitonclick()\r
\r
def main():\r
    print("=" * 75)\r
    print("[TURTLE FOUNDATION] First Canvas Setup & Linear Path Drawing")\r
    print("=" * 75)\r
\r
    draw_first_geometric_path(demo_mode=True)\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Turtle translates procedural commands (forward, left) into")\r
    print("           continuous mathematical vector coordinates on a 2D Cartesian plane.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 0: Introduction to Turtle Graphics: history, educational purpose, and real-world relevance\r
# File: turtle_history_and_logo_origin.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Seymour Papert's Logo Turtle history and\r
#              body-syntonic coordinate tracing.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class VirtualTurtleState:\r
    x: float = 0.0\r
    y: float = 0.0\r
    angle_degrees: float = 0.0  # 0 deg = East (Right)\r
\r
    def forward(self, distance: float) -> tuple[float, float]:\r
        rad = math.radians(self.angle_degrees)\r
        self.x = round(self.x + distance * math.cos(rad), 4)\r
        self.y = round(self.y + distance * math.sin(rad), 4)\r
        return (self.x, self.y)\r
\r
    def left(self, degrees: float) -> float:\r
        self.angle_degrees = (self.angle_degrees + degrees) % 360.0\r
        return self.angle_degrees\r
\r
    def right(self, degrees: float) -> float:\r
        self.angle_degrees = (self.angle_degrees - degrees) % 360.0\r
        return self.angle_degrees\r
\r
def test_body_syntonic_math():\r
    print("   [...] Testing Body-Syntonic Coordinate Geometry Model...")\r
    vt = VirtualTurtleState()\r
\r
    # Move 100 units East\r
    vt.forward(100.0)\r
    assert math.isclose(vt.x, 100.0, abs_tol=1e-3) and math.isclose(vt.y, 0.0, abs_tol=1e-3)\r
    print(f"   [PASS] 1. Forward 100 units -> Position: ({vt.x}, {vt.y})")\r
\r
    # Turn 90 degrees Left (North) and move 50 units\r
    vt.left(90.0)\r
    vt.forward(50.0)\r
    assert math.isclose(vt.x, 100.0, abs_tol=1e-3) and math.isclose(vt.y, 50.0, abs_tol=1e-3)\r
    print(f"   [PASS] 2. Left 90 deg + Forward 50 -> Position: ({vt.x}, {vt.y})")\r
\r
    # Turn 90 degrees Left (West) and move 100 units\r
    vt.left(90.0)\r
    vt.forward(100.0)\r
    assert math.isclose(vt.x, 0.0, abs_tol=1e-3) and math.isclose(vt.y, 50.0, abs_tol=1e-3)\r
    print(f"   [PASS] 3. Left 90 deg + Forward 100 -> Position: ({vt.x}, {vt.y})")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TURTLE HISTORY & LOGO PEDAGOGY] Body-Syntonic Mathematical Modeling")\r
    print("=" * 75)\r
\r
    test_body_syntonic_math()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Seymour Papert's body-syntonic learning connects human spatial")\r
    print("           intuition directly to trigonometric coordinate vectors.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 0: Introduction to Turtle Graphics: history, educational purpose, and real-world relevance\r
# File: turtle_window_lifecycle_and_exit.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Clean window lifecycle management, event loop termination,\r
#              and exception-safe canvas cleanup.\r
"""\r
\r
import turtle\r
\r
def execute_safe_turtle_lifecycle(auto_cleanup: bool = True) -> bool:\r
    """Demonstrates clean Tkinter Turtle window setup and safe destruction."""\r
    print("   [...] Testing Safe Turtle Screen Lifecycle...")\r
\r
    try:\r
        screen = turtle.Screen()\r
        screen.title("Coder & Accotax • Lifecycle Test")\r
        screen.setup(400, 300)\r
\r
        t = turtle.Turtle()\r
        t.speed(0)\r
        t.forward(50)\r
\r
        assert t.xcor() == 50.0\r
\r
        if auto_cleanup:\r
            turtle.bye()\r
            print("   [PASS] 1. Turtle canvas closed cleanly with turtle.bye()")\r
        return True\r
    except Exception as e:\r
        print(f"   [ERROR] Canvas lifecycle error: {e}")\r
        return False\r
\r
def main():\r
    print("=" * 75)\r
    print("[WINDOW LIFECYCLE] Safe Canvas Initialization & Event Loop Teardown")\r
    print("=" * 75)\r
\r
    success = execute_safe_turtle_lifecycle(auto_cleanup=True)\r
    assert success is True\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Always use turtle.done() or screen.exitonclick() in production")\r
    print("           scripts, and turtle.bye() in automated test harnesses.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 0: Introduction to Turtle Graphics: history, educational purpose, and real-world relevance\r
# File: institutional_turtle_greeting_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Institutional welcome graphics project rendering a visual canvas\r
#              with coordinate navigation for Mamata, Mahima, and Susmita.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class StudentCoordinateWaypoint:\r
    name: str\r
    campus: str\r
    target_x: float\r
    target_y: float\r
    color_hex: str\r
\r
class InstitutionalTurtleNavigator:\r
    """Simulates graphical turtle waypoint navigation for multi-campus student welcoming."""\r
    def __init__(self):\r
        self.current_x = 0.0\r
        self.current_y = 0.0\r
        self.waypoints_visited: list[str] = []\r
\r
    def navigate_to_student(self, student: StudentCoordinateWaypoint) -> float:\r
        # Calculate Euclidean displacement distance\r
        dx = student.target_x - self.current_x\r
        dy = student.target_y - self.current_y\r
        distance = math.sqrt(dx**2 + dy**2)\r
\r
        # Update position\r
        self.current_x = student.target_x\r
        self.current_y = student.target_y\r
        self.waypoints_visited.append(student.name)\r
        return round(distance, 2)\r
\r
def test_institutional_navigator():\r
    print("   [...] Running Institutional Turtle Coordinate Navigation Suite...")\r
    navigator = InstitutionalTurtleNavigator()\r
\r
    # 1. Navigate to Mamata at Barrackpore (100, 100)\r
    d1 = navigator.navigate_to_student(StudentCoordinateWaypoint("Mamata", "Barrackpore", 100.0, 100.0, "#2dd4bf"))\r
    assert math.isclose(d1, 141.42, rel_tol=1e-2)\r
    print(f"   [PASS] 1. Traveled {d1} units to greet Mamata at Barrackpore ({navigator.current_x}, {navigator.current_y})")\r
\r
    # 2. Navigate to Mahima at Kolkata (200, 100)\r
    d2 = navigator.navigate_to_student(StudentCoordinateWaypoint("Mahima", "Kolkata", 200.0, 100.0, "#38bdf8"))\r
    assert d2 == 100.0\r
    print(f"   [PASS] 2. Traveled {d2} units to greet Mahima at Kolkata ({navigator.current_x}, {navigator.current_y})")\r
\r
    # 3. Navigate to Susmita at Ichapur (200, 250)\r
    d3 = navigator.navigate_to_student(StudentCoordinateWaypoint("Susmita", "Ichapur", 200.0, 250.0, "#a855f7"))\r
    assert d3 == 150.0\r
    print(f"   [PASS] 3. Traveled {d3} units to greet Susmita at Ichapur ({navigator.current_x}, {navigator.current_y})")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Turtle Waypoint Navigation Engine")\r
    print("=" * 80)\r
\r
    test_institutional_navigator()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Turtle coordinate navigation combines Cartesian trigonometry")\r
    print("           with vector paths for interactive visual applications.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,L=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
           TOPIC 0: INTRODUCTION TO TURTLE GRAPHICS (HISTORY & PEDAGOGY)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ORIGINS & EDUCATIONAL PURPOSE OF TURTLE GRAPHICS\r
--------------------------------------------------------------------------------\r
  1. Origin:\r
     - Developed in 1967 as part of the Logo programming language by Wally Feurzeig,\r
       Seymour Papert, and Cynthia Solomon at MIT.\r
     - Originally a physical robotic "turtle" on wheels with a pen, rolling on paper.\r
     - Introduced to the Python Standard Library as the 'turtle' module based on Tkinter.\r
\r
  2. Body Syntonic Learning:\r
     - Seymour Papert's learning philosophy where students learn geometry and logic\r
       by mentally placing themselves in the position of the turtle ("turn right 90 degrees",\r
       "step forward 100 paces").\r
\r
--------------------------------------------------------------------------------\r
2. BASIC FIRST PROGRAM STRUCTURE\r
--------------------------------------------------------------------------------\r
  import turtle\r
\r
  # 1. Setup Screen\r
  screen = turtle.Screen()\r
  screen.title("My First Turtle Canvas - Coder & Accotax")\r
  screen.bgcolor("black")\r
\r
  # 2. Create Turtle\r
  t = turtle.Turtle()\r
  t.shape("turtle")\r
  t.color("cyan")\r
  t.speed(3)\r
\r
  # 3. Simple Movement\r
  t.forward(100)  # Move 100 pixels forward\r
  t.left(90)      # Turn 90 degrees counter-clockwise\r
  t.forward(100)\r
\r
  # 4. Keep Window Open\r
  turtle.done()  # Enters GUI event loop\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 0: TURTLE INTRODUCTION\r
================================================================================\r
`,M=[{question:"Who developed the original Turtle Graphics concept and in what programming language?",shortAnswer:"Turtle Graphics was developed in 1967 by Wally Feurzeig, Seymour Papert, and Cynthia Solomon as part of the Logo programming language at MIT.",explanation:"Historical origins of Turtle Graphics in Logo and MIT Artificial Intelligence Lab.",hint:"Created by Seymour Papert and Wally Feurzeig as part of Logo in 1967.",level:"basic",codeExample:"# Developed in 1967 for Logo; built into Python Standard Library via 'turtle'"},{question:"What is Seymour Papert's concept of 'Body Syntonic' learning in Turtle Graphics?",shortAnswer:"'Body Syntonic' learning is an educational philosophy where students understand abstract mathematical geometry and algorithms by mentally projecting their own physical body into the position of the turtle on the 2D plane.",explanation:"Seymour Papert's constructivist learning philosophy.",hint:"Mentally imagining yourself as the turtle turning and stepping forward.",level:"basic",codeExample:"# 'If I were the turtle, I would turn right 90 degrees and walk 50 steps'"},{question:"What GUI framework powers Python's standard 'turtle' module under the hood?",shortAnswer:"Python's 'turtle' module is built directly on top of 'tkinter' (Python's standard Tk interface wrapper), using a Tkinter Canvas for vector rendering.",explanation:"Underlying GUI technology powering the turtle module.",hint:"Built on top of Python's standard 'tkinter' library.",level:"basic",codeExample:"import turtle # Wraps tkinter.Canvas under the hood"},{question:"Why is 'turtle.done()' or 'turtle.mainloop()' required at the end of a Turtle script?",shortAnswer:"'turtle.done()' (or 'mainloop()') enters the Tkinter GUI event loop, keeping the graphics window open to listen for user clicks, keyboard events, and window refreshes without immediately closing.",explanation:"GUI event loop lifecycle management.",hint:"Enters the Tkinter event loop to keep the window open after drawing completes.",level:"basic",codeExample:`import turtle
turtle.forward(100)
turtle.done() # Enters event loop, keeps window open`},{question:"What is the difference between procedural turtle commands ('turtle.forward(100)') and object-oriented turtle instances ('t = turtle.Turtle(); t.forward(100)')?",shortAnswer:"Procedural commands operate on the global anonymous singleton turtle; creating explicit 'turtle.Turtle()' instances allows managing multiple independent turtles with separate positions, colors, speeds, and pens on the same canvas.",explanation:"Singleton procedural vs multi-instance object-oriented turtle programming.",hint:"Procedural uses global singleton; OOP allows multiple distinct turtles on one screen.",level:"basic",codeExample:`t1 = turtle.Turtle()
t2 = turtle.Turtle() # 2 independent turtles`},{question:"In what direction is a newly initialized Turtle pointing by default?",shortAnswer:"By default, a new turtle starts at coordinates (0, 0) facing East (0 degrees / rightward along the positive X-axis).",explanation:"Default orientation and heading of new turtles.",hint:"Facing East (0 degrees, pointing to the right along the positive X-axis).",level:"basic",codeExample:`t = turtle.Turtle()
print(t.heading()) # 0.0 (East)`},{question:"What happens if you run a Turtle script in an interactive environment (like IDLE or Jupyter) without 'turtle.bye()'?",shortAnswer:"The Tkinter mainloop can remain bound to the process, causing subsequent script runs to fail with 'Terminator' exceptions or frozen windows; using 'turtle.bye()' cleanly destroys the previous canvas before creating a new one.",explanation:"Tkinter canvas lifecycle in interactive REPL environments.",hint:"Can freeze or raise Terminator exceptions; turtle.bye() resets the canvas cleanly.",level:"moderate",codeExample:"turtle.bye() # Closes existing screen cleanly"},{question:"What are the 4 fundamental movement and rotation methods in Turtle Graphics?",shortAnswer:"1. 'forward(distance)' or 'fd(d)', 2. 'backward(distance)' or 'bk(d)', 3. 'left(angle)' or 'lt(a)', and 4. 'right(angle)' or 'rt(a)'.",explanation:"Core motion primitives in the turtle graphics API.",hint:"forward(), backward(), left(), and right().",level:"basic",codeExample:"t.forward(100); t.right(90); t.backward(50); t.left(45)"},{question:"How does Turtle Graphics differ from standard pixel-based bitmap drawing (e.g. raster images)?",shortAnswer:"Turtle Graphics uses vector path drawing based on continuous mathematical coordinates and angles (infinite resolution without pixelation), whereas bitmap drawing manipulates fixed grids of colored pixels.",explanation:"Vector mathematics vs raster pixel grids.",hint:"Vector paths based on continuous coordinates vs fixed pixel grids.",level:"basic",codeExample:"# Turtle draws resolution-independent vector paths"},{question:"What is 'turtle.exitonclick()' and how is it used?",shortAnswer:"'turtle.exitonclick()' is a convenience method that binds a mouse click event to the screen to close the window and terminates the event loop when the user clicks anywhere on the canvas.",explanation:"Convenience exit binding on canvas click.",hint:"Keeps window open and closes it cleanly when user clicks the canvas.",level:"basic",codeExample:`screen = turtle.Screen()
screen.exitonclick() # Closes on mouse click`},{question:"What real-world engineering domains use the same path-following principles as Turtle Graphics?",shortAnswer:"1. CNC (Computer Numerical Control) machining and G-code, 2. 3D printers slicing toolpaths, 3. SVG vector graphics rendering engines, 4. Pen plotters and robotic arm navigation, and 5. Autonomous robot trajectory planning.",explanation:"Real-world industrial applications of path-following robotics and vector CAD.",hint:"CNC machines, 3D printing toolpaths, SVG paths, and robotic navigation.",level:"moderate",codeExample:"# G-code: G1 X100 Y50 is conceptually identical to turtle.goto(100, 50)"},{question:"How do you change the appearance shape of the turtle cursor?",shortAnswer:"Using 'turtle.shape(name)', where standard built-in shapes include 'turtle', 'arrow', 'circle', 'square', 'triangle', and 'classic'.",explanation:"Customizing turtle cursor visual representation.",hint:"Use t.shape('turtle') with shapes like circle, square, arrow, or classic.",level:"basic",codeExample:"t.shape('turtle') # Displays actual turtle icon"},{question:"What is the function of 'turtle.speed(value)' and what is the fastest speed setting?",shortAnswer:"'turtle.speed(val)' controls animation speed from 1 (slowest) to 10 (fast); setting 'speed(0)' turns off drawing delay completely for instant rendering.",explanation:"Animation speed control and instant rendering mode (speed 0).",hint:"1 is slowest, 10 is fast, and 0 is instant with zero animation delay.",level:"basic",codeExample:"t.speed(0) # Instantaneous drawing with 0 delay"},{question:"How do you set the background color and dimensions of the Turtle window?",shortAnswer:`Using 'screen.bgcolor("color")' (e.g. 'black', '#0f172a') and 'screen.setup(width, height)' (e.g. 'screen.setup(800, 600)').`,explanation:"Screen canvas configuration methods.",hint:"screen.bgcolor('black') and screen.setup(width=800, height=600).",level:"basic",codeExample:`screen = turtle.Screen()
screen.bgcolor('#0f172a')
screen.setup(800, 600)`},{question:"Why is learning Turtle Graphics recommended for building computational thinking?",shortAnswer:"It provides immediate visual feedback for abstract programming logic (loops, conditionals, functions, recursion), helping students connect mathematical geometry with algorithmic problem-solving in an engaging, visual way.",explanation:"Pedagogical benefits of visual computational thinking.",hint:"Provides immediate visual feedback connecting geometry, loops, and logic.",level:"basic",codeExample:"# Immediate visual verification of loop iterations and geometry formulas"},{question:"What is the difference between 'turtle.clear()' and 'turtle.reset()'?",shortAnswer:"'clear()' erases all drawings made by that turtle while leaving the turtle at its current position and heading; 'reset()' erases the drawings AND returns the turtle to the origin (0, 0) with default heading and colors.",explanation:"Canvas erasing vs complete turtle state reset.",hint:"clear() erases lines only; reset() erases lines AND moves turtle back to (0,0).",level:"basic",codeExample:`t.clear() # Erases canvas, stays in place
t.reset() # Erases canvas and moves home to (0,0)`},{question:"How do you hide the turtle cursor while drawing or after finishing a design?",shortAnswer:"Using 't.hideturtle()' (or 't.ht()'); show it again using 't.showturtle()' (or 't.st()').",explanation:"Controlling cursor visibility on the canvas.",hint:"t.hideturtle() hides the pen icon; t.showturtle() reveals it.",level:"basic",codeExample:"t.hideturtle() # Makes cursor invisible for clean final drawings"},{question:"What happens if you move a turtle without calling 't.penup()' first?",shortAnswer:"By default, the turtle's pen is down on the canvas, so any movement ('forward', 'goto', 'backward') will draw a visible line connecting the previous position to the new position.",explanation:"Default pen state and drawing trails.",hint:"The pen is down by default, so moving draws a visible line unless you call penup().",level:"basic",codeExample:`t.penup() # Lift pen
t.goto(100, 100) # Move without drawing
t.pendown() # Lower pen to draw`},{question:"Can multiple Python Turtle objects draw concurrently on the same canvas?",shortAnswer:"Yes; you can instantiate multiple 'turtle.Turtle()' instances, assign them different colors, shapes, and positions, and command them sequentially or in loops to create complex synchronized patterns.",explanation:"Multi-agent drawing using multiple turtle instances.",hint:"Yes, by creating multiple turtle.Turtle() instances on the same Screen.",level:"basic",codeExample:`t1 = turtle.Turtle(); t2 = turtle.Turtle()
t1.color('cyan'); t2.color('magenta')`},{question:"What is the ultimate golden rule of Turtle Graphics programming?",shortAnswer:"Always configure the screen first (`turtle.Screen()`), use explicit object-oriented turtle instances (`t = turtle.Turtle()`), set clear canvas bounds and background colors, and conclude every script with `turtle.done()` or `screen.exitonclick()` to prevent GUI window freezing.",explanation:"The complete standard for rock-solid Python Turtle scripts.",hint:"Screen setup + explicit Turtle instances + colors + turtle.done().",level:"basic",codeExample:"# Enterprise Python Turtle Template"}];function U(){const x=a.useRef([]),[s,h]=a.useState("bodySyntonic"),[i,u]=a.useState(0),[l,m]=a.useState(0),[p,d]=a.useState(0),[y,f]=a.useState([{x1:0,y1:0,x2:0,y2:0,color:"#2dd4bf"}]),v=(t=50)=>{const n=p*Math.PI/180,o=Math.round(i+t*Math.cos(n)),b=Math.round(l+t*Math.sin(n));f(S=>[...S,{x1:i,y1:l,x2:o,y2:b,color:"#2dd4bf"}]),u(o),m(b)},w=(t=90)=>{d(n=>(n+t)%360)},j=(t=90)=>{d(n=>(n-t+360)%360)},T=()=>{u(0),m(0),d(0),f([])},N=()=>{u(0),m(0),d(0),f([{x1:0,y1:0,x2:60,y2:0,color:"#2dd4bf"},{x1:60,y1:0,x2:60,y2:60,color:"#38bdf8"},{x1:60,y1:60,x2:0,y2:60,color:"#a855f7"},{x1:0,y1:60,x2:0,y2:0,color:"#facc15"}])};a.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Introduction to Turtle Graphics: ",e.jsx("span",{className:"text-teal-400",children:"History & Pedagogy"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:[`Begin your journey into visual programming, geometry, and generative computer graphics: discover Seymour Papert's 1967 Logo origin, the constructivist philosophy of "body-syntonic" spatial learning, the Python `,e.jsx("code",{className:"text-teal-300 font-mono",children:"turtle"})," architecture built on Tkinter, canvas vector coordinate planes, and real-world industrial relevance from SVG rendering to CNC robotics."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🐢 MIT Logo Origin (1967)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 Body-Syntonic Spatial Pedagogy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Cartesian Coordinate Plane (0, 0)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ Real-World Robotics & Vector CAD"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Foundations of Turtle Graphics & Constructionism"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Turtle Graphics is not merely a toy library; it is a revolutionary pedagogical paradigm designed to make abstract mathematical geometry and algorithmic logic tangible:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ 1967 Logo Roots"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Seymour Papert (MIT)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Originally a physical robotic turtle rolling on large paper sheets with an ink pen, controlled by Logo commands."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Body Syntonic"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Spatial Intuition"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:'Learners project their physical bodies onto the canvas plane ("If I turn 90° right and walk 100 paces...").'})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Vector Geometry"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Cartesian (0, 0) Origin"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Continuous mathematical coordinates (angles, distance, headings) rather than discrete pixel grids."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Industrial Impact"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"CNC & 3D Printing"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Path-following kinematics in Turtle directly map to G-code toolpaths, robotic arms, and vector SVG graphics."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Tkinter GUI Event Loop Requirement"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Because Python's ",e.jsx("code",{className:"text-teal-300 font-mono",children:"turtle"})," is built on Tkinter, scripts must end with ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"turtle.done()"})," or ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"screen.exitonclick()"}),". Without this, the operating system closes the window the microsecond the last drawing command finishes!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Body-Syntonic Geometry & Canvas Planes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("bodySyntonic"),className:g("px-3 py-1.5 rounded-lg transition-all",s==="bodySyntonic"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Body-Syntonic Geometry"}),e.jsx("button",{onClick:()=>h("canvasPlane"),className:g("px-3 py-1.5 rounded-lg transition-all",s==="canvasPlane"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Canvas vs Screen Coordinate Plane"}),e.jsx("button",{onClick:()=>h("evolutionTimeline"),className:g("px-3 py-1.5 rounded-lg transition-all",s==="evolutionTimeline"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"1967 to Modern Python Evolution"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining coordinate planes, heading trigonometry, and physical robotic origins:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="bodySyntonic"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"BODY-SYNTONIC LEARNING: THE TURTLE AS AN EXTENSION OF THE SELF"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("line",{x1:"20",y1:"120",x2:"360",y2:"120",stroke:"#0284c7",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("line",{x1:"190",y1:"20",x2:"190",y2:"220",stroke:"#0284c7",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"190",cy:"120",r:"4",fill:"#38bdf8"}),e.jsx("text",{x:"198",y:"115",fill:"#bae6fd",fontSize:"9",fontWeight:"bold",children:"Origin (0, 0)"}),e.jsx("line",{x1:"190",y1:"120",x2:"290",y2:"120",stroke:"#2dd4bf",strokeWidth:"3"}),e.jsx("line",{x1:"290",y1:"120",x2:"290",y2:"40",stroke:"#38bdf8",strokeWidth:"3"}),e.jsx("polygon",{points:"290,30 282,45 298,45",fill:"#5eead4",stroke:"#0f766e",strokeWidth:"1.5"}),e.jsx("text",{x:"235",y:"140",fill:"#2dd4bf",fontSize:"8",fontFamily:"monospace",children:"forward(100)"}),e.jsx("text",{x:"300",y:"80",fill:"#38bdf8",fontSize:"8",fontFamily:"monospace",children:"left(90); forward(80)"})]}),e.jsxs("g",{transform:"translate(440, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"25",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"The Constructivist Pedagogy"}),e.jsx("rect",{x:"15",y:"45",width:"350",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"65",fill:"#a7f3d0",fontSize:"9",fontWeight:"bold",children:"1. Relative Navigation"}),e.jsx("text",{x:"25",y:"82",fill:"#ccfbf1",fontSize:"8",children:"Movement is relative to current turtle heading (not absolute pixels)"}),e.jsx("rect",{x:"15",y:"105",width:"350",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"125",fill:"#a7f3d0",fontSize:"9",fontWeight:"bold",children:"2. Trigonometry Made Intuitive"}),e.jsx("text",{x:"25",y:"142",fill:"#ccfbf1",fontSize:"8",children:"Δx = distance × cos(θ) | Δy = distance × sin(θ) computed automatically"}),e.jsx("rect",{x:"15",y:"165",width:"350",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"185",fill:"#a7f3d0",fontSize:"9",fontWeight:"bold",children:"3. Immediate Visual Verification"}),e.jsx("text",{x:"25",y:"202",fill:"#86efac",fontSize:"8",children:"Students visually spot loop or angle errors within 0.1 seconds ✅"})]})]}):s==="canvasPlane"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"TURTLE CARTESIAN PLANE VS COMPUTER SCREEN PIXEL GRIDS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"370",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Turtle Cartesian Canvas (Standard Math)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"8",children:"• Center of window is Origin (0, 0)"}),e.jsx("text",{x:"35",y:"105",fill:"#e0f2fe",fontSize:"8",children:"• Positive Y points UP (↑ +Y)"}),e.jsx("text",{x:"35",y:"125",fill:"#e0f2fe",fontSize:"8",children:"• Positive X points RIGHT (→ +X)"}),e.jsx("text",{x:"35",y:"145",fill:"#e0f2fe",fontSize:"8",children:"• Angles: 0° East, 90° North, 180° West, 270° South"}),e.jsx("text",{x:"35",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Matches High School Geometry ✅"}),e.jsx("rect",{x:"425",y:"35",width:"370",height:"180",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"435",y:"60",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"HTML Canvas / Screen Pixel Grids"}),e.jsx("text",{x:"435",y:"85",fill:"#c7d2fe",fontSize:"8",children:"• Top-Left corner is (0, 0)"}),e.jsx("text",{x:"435",y:"105",fill:"#fca5a5",fontSize:"8",children:"• Positive Y points DOWN (↓ +Y inverted!)"}),e.jsx("text",{x:"435",y:"125",fill:"#c7d2fe",fontSize:"8",children:"• Positive X points RIGHT (→ +X)"}),e.jsx("text",{x:"435",y:"145",fill:"#c7d2fe",fontSize:"8",children:"• Requires manual offset transformations"}),e.jsx("text",{x:"435",y:"195",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Inverted Y Coordinates ⚠️"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE EVOLUTION OF TURTLE GRAPHICS (1967 TO MODERN PYTHON)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"40",width:"220",height:"165",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1967: MIT Logo Origins"}),e.jsx("text",{x:"35",y:"90",fill:"#bae6fd",fontSize:"8",children:"Seymour Papert & Wally Feurzeig"}),e.jsx("text",{x:"35",y:"110",fill:"#e0f2fe",fontSize:"8",children:"Physical motorized robot on wheels"}),e.jsx("text",{x:"35",y:"130",fill:"#e0f2fe",fontSize:"8",children:"drawing ink trails on classroom floors."}),e.jsx("text",{x:"35",y:"180",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Physical Robotic Turtle"}),e.jsx("path",{d:"M 255 120 L 285 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"165",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"305",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1990s: Python StdLib"}),e.jsx("text",{x:"305",y:"90",fill:"#ccfbf1",fontSize:"8",children:"Guido van Rossum introduces 'turtle'"}),e.jsx("text",{x:"305",y:"110",fill:"#ccfbf1",fontSize:"8",children:"Built on Tkinter Canvas wrapper."}),e.jsx("text",{x:"305",y:"130",fill:"#ccfbf1",fontSize:"8",children:"Pre-installed with every Python install."}),e.jsx("text",{x:"305",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Standard Library Integration"}),e.jsx("path",{d:"M 545 120 L 575 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"585",y:"40",width:"210",height:"165",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"595",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Today: Generative Art"}),e.jsx("text",{x:"595",y:"90",fill:"#d8b4fe",fontSize:"8",children:"Complex fractals & L-systems"}),e.jsx("text",{x:"595",y:"110",fill:"#d8b4fe",fontSize:"8",children:"Multi-agent simulation engines"}),e.jsx("text",{x:"595",y:"130",fill:"#d8b4fe",fontSize:"8",children:"Robotic G-code toolpath modeling"}),e.jsx("text",{x:"595",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Creative Vector Geometry 🚀"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Virtual Turtle Canvas Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Direct the virtual turtle cursor across the 2D Cartesian canvas. Click controls to move forward, rotate left/right, and inspect mathematical coordinates in real time:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:[e.jsx("button",{onClick:()=>v(50),className:"p-2.5 bg-teal-950/60 border border-teal-600 rounded-xl text-xs font-bold text-teal-300 hover:bg-teal-900/80 transition-all text-center",children:"Forward 50 px"}),e.jsx("button",{onClick:()=>w(90),className:"p-2.5 bg-cyan-950/60 border border-cyan-600 rounded-xl text-xs font-bold text-cyan-300 hover:bg-cyan-900/80 transition-all text-center",children:"Left 90° ↺"}),e.jsx("button",{onClick:()=>j(90),className:"p-2.5 bg-purple-950/60 border border-purple-600 rounded-xl text-xs font-bold text-purple-300 hover:bg-purple-900/80 transition-all text-center",children:"Right 90° ↻"}),e.jsx("button",{onClick:N,className:"p-2.5 bg-amber-950/60 border border-amber-600 rounded-xl text-xs font-bold text-amber-300 hover:bg-amber-900/80 transition-all text-center",children:"Preset: Square ⏹️"}),e.jsx("button",{onClick:T,className:"p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all text-center",children:"Reset Canvas 🔄"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-teal-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-teal-400 font-medium",children:"Position X"}),e.jsx("div",{className:"text-lg font-bold font-mono text-teal-300",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-cyan-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-cyan-400 font-medium",children:"Position Y"}),e.jsx("div",{className:"text-lg font-bold font-mono text-cyan-300",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-purple-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-purple-400 font-medium",children:"Heading Angle"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-purple-300",children:[p,"°"]})]})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-150 -100 300 200",className:"w-full h-full",children:[e.jsx("line",{x1:"-140",y1:"0",x2:"140",y2:"0",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("line",{x1:"0",y1:"-90",x2:"0",y2:"90",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#64748b"}),e.jsx("text",{x:"5",y:"-5",fill:"#64748b",fontSize:"7",children:"(0,0)"}),y.map((t,n)=>e.jsx("line",{x1:t.x1,y1:-t.y1,x2:t.x2,y2:-t.y2,stroke:t.color,strokeWidth:"2.5",strokeLinecap:"round"},n)),e.jsx("g",{transform:`translate(${i}, ${-l}) rotate(${-p})`,className:"transition-transform duration-300 ease-out",children:e.jsx("polygon",{points:"8,0 -5,-5 -2,0 -5,5",fill:"#2dd4bf",stroke:"#0f766e",strokeWidth:"1"})})]})})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Turtle Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade Turtle Graphics labs covering first canvas initialization, Logo mathematical models, lifecycle teardown, and institutional student greetings:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: First Turtle Canvas & Linear Vector Motion"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Configuring screen dimensions, pen colors, speeds, forward steps, and clean window exit handlers."})]}),e.jsx(c,{fileModule:I,title:"turtle_first_screen_and_motion.py",highlightLines:[16,26,36,46]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Body-Syntonic Mathematical Coordinate Modeling (Logo Origin)"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Tracing continuous mathematical vector displacements using trigonometry (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cos"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sin"}),") without GUI dependencies."]})]}),e.jsx(c,{fileModule:E,title:"turtle_history_and_logo_origin.py",highlightLines:[16,26,40,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Window Lifecycle Management & Event Loop Teardown"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Managing Tkinter event loops with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"turtle.done()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"screen.exitonclick()"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"turtle.bye()"}),"."]})]}),e.jsx(c,{fileModule:P,title:"turtle_window_lifecycle_and_exit.py",highlightLines:[14,24,34]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Turtle Multi-Campus Waypoint Navigator Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete coordinate navigation engine greeting Mamata, Mahima, and Susmita across Barrackpore, Kolkata, and Ichapur."})]}),e.jsx(c,{fileModule:A,title:"institutional_turtle_greeting_case_study.py",highlightLines:[18,30,48,62]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Turtle Graphics Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Omitting turtle.done() / exitonclick()"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Running a script without entering the Tkinter event loop causes the window to close instantly after drawing."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: t.forward(100) (Window closes in 0.01s!)",`
`,"# FIX: turtle.done() at the end of the file"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Over-reliance on Anonymous Singleton"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"turtle.forward()"})," directly instead of creating explicit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t = turtle.Turtle()"})," prevents multi-turtle animations."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: turtle.forward(100)",`
`,"# BEST PRACTICE: t1 = turtle.Turtle(); t1.forward(100)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Moving Without penup()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"goto(x, y)"})," without first lifting the pen leaves unwanted diagonal connector lines on the canvas."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: t.penup(); t.goto(x, y); t.pendown()"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Inverted Y-Axis Confusion"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Assuming (0, 0) is top-left as in HTML Canvas causes unexpected upside-down drawings in Turtle's center Cartesian plane."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# REMEMBER: Turtle (0, 0) is Center; +Y points UP"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Turtle Foundation Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Configure the Screen First:"})," Set window title, size, and background color with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"turtle.Screen()"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Instantiate OOP Turtle Objects:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t = turtle.Turtle()"})," for clean encapsulation and multi-pen capability."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use speed(0) for Instant Renders:"})," Eliminate animation wait time when generating complex mathematical fractals."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Always Conclude with Event Loop:"})," Call ",e.jsx("code",{className:"text-teal-300 font-mono",children:"turtle.done()"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.exitonclick()"}),"."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(_,{title:"Turtle Graphics Foundations & Pedagogy FAQs",questions:M})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(k,{content:L,title:"Topic 0: Introduction to Turtle Graphics Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(C,{note:"Welcome to Segment 5! Visual programming with Turtle is where code meets creativity and mathematics. When Mamata, Mahima, and Susmita began programming at our centers in Barrackpore and Kolkata, watching the turtle cursor translate loops and angles into geometric art bridged the gap between abstract algebra and visual intuition. Enjoy the journey into creative computing!"})})]})]})}export{U as default};

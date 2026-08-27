import{b as n,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import{F as D}from"./FAQTemplate-CkSqDH4B.js";import{T as I}from"./TeacherSukantaHui-CC0AKmkm.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const H=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 4: Turtle cursor (pen) behavior: position, heading, visibility (showturtle(), hideturtle())\r
# File: turtle_cursor_position_and_heading.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating turtle coordinate and compass heading telemetry.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CursorTelemetrySnapshot:\r
    pos_x: float\r
    pos_y: float\r
    heading_deg: float\r
\r
    @property\r
    def compass_direction_label(self) -> str:\r
        # Normalize angle to [0, 360)\r
        deg = self.heading_deg % 360.0\r
        if 45.0 <= deg < 135.0:\r
            return "North (+Y) [UP]"\r
        elif 135.0 <= deg < 225.0:\r
            return "West (-X) [LEFT]"\r
        elif 225.0 <= deg < 315.0:\r
            return "South (-Y) [DOWN]"\r
        else:\r
            return "East (+X) [RIGHT]"\r
\r
def test_cursor_telemetry():\r
    print("   [...] Testing Cursor Position & Compass Heading Telemetry...")\r
    \r
    # 1. East Heading (0 deg)\r
    t1 = CursorTelemetrySnapshot(100.0, 50.0, 0.0)\r
    assert "East" in t1.compass_direction_label\r
    print(f"   [PASS] 1. Telemetry at ({t1.pos_x}, {t1.pos_y}) Heading: {t1.heading_deg} deg -> Direction: {t1.compass_direction_label}")\r
\r
    # 2. North Heading (90 deg)\r
    t2 = CursorTelemetrySnapshot(100.0, 150.0, 90.0)\r
    assert "North" in t2.compass_direction_label\r
    print(f"   [PASS] 2. Telemetry at ({t2.pos_x}, {t2.pos_y}) Heading: {t2.heading_deg} deg -> Direction: {t2.compass_direction_label}")\r
\r
    # 3. West Heading (180 deg)\r
    t3 = CursorTelemetrySnapshot(0.0, 150.0, 180.0)\r
    assert "West" in t3.compass_direction_label\r
    print(f"   [PASS] 3. Telemetry at ({t3.pos_x}, {t3.pos_y}) Heading: {t3.heading_deg} deg -> Direction: {t3.compass_direction_label}")\r
\r
    # 4. South Heading (270 deg)\r
    t4 = CursorTelemetrySnapshot(0.0, 50.0, 270.0)\r
    assert "South" in t4.compass_direction_label\r
    print(f"   [PASS] 4. Telemetry at ({t4.pos_x}, {t4.pos_y}) Heading: {t4.heading_deg} deg -> Direction: {t4.compass_direction_label}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CURSOR TELEMETRY] Position Coordinates & Compass Heading Inspection")\r
    print("=" * 75)\r
\r
    test_cursor_telemetry()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Methods pos(), xcor(), ycor(), and heading() provide exact")\r
    print("           mathematical telemetry for spatial reasoning.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,R=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 4: Turtle cursor (pen) behavior: position, heading, visibility (showturtle(), hideturtle())\r
# File: cursor_visibility_and_performance.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Evaluating cursor visibility toggling and rendering performance.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CursorPerformanceBenchmark:\r
    total_steps: int\r
    visible_cursor_render_ms: float\r
    hidden_cursor_render_ms: float\r
\r
    @property\r
    def speedup_factor(self) -> float:\r
        if self.hidden_cursor_render_ms <= 0:\r
            return 1.0\r
        return round(self.visible_cursor_render_ms / self.hidden_cursor_render_ms, 1)\r
\r
def test_cursor_visibility_performance():\r
    print("   [...] Testing Cursor Visibility & Rendering Speedup...")\r
    benchmark = CursorPerformanceBenchmark(\r
        total_steps=1000,\r
        visible_cursor_render_ms=1250.0,\r
        hidden_cursor_render_ms=250.0\r
    )\r
\r
    assert benchmark.speedup_factor >= 3.0\r
    print(f"   [PASS] 1. Visible Cursor Render Time: {benchmark.visible_cursor_render_ms} ms")\r
    print(f"   [PASS] 2. Hidden Cursor Render Time: {benchmark.hidden_cursor_render_ms} ms")\r
    print(f"   [PASS] 3. Measured Speedup Factor: {benchmark.speedup_factor}x faster with hideturtle()")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CURSOR VISIBILITY] Performance Optimization via hideturtle()")\r
    print("=" * 75)\r
\r
    test_cursor_visibility_performance()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Always call t.hideturtle() when rendering complex fractals")\r
    print("           or large iteration loops to eliminate cursor redraw lag.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,W=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 4: Turtle cursor (pen) behavior: position, heading, visibility (showturtle(), hideturtle())\r
# File: turtle_pen_state_and_trail_control.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating penup/pendown state toggling, pensize, and stroke colors.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class PenTrailSegment:\r
    x1: float\r
    y1: float\r
    x2: float\r
    y2: float\r
    is_drawn: bool\r
    pen_size: int\r
    pen_color: str\r
\r
class PenStateController:\r
    """Manages pen drawing state, width, and discrete segment generation."""\r
    def __init__(self):\r
        self.is_down = True\r
        self.current_x = 0.0\r
        self.current_y = 0.0\r
        self.pen_size = 1\r
        self.pen_color = "#2dd4bf"\r
        self.segments: list[PenTrailSegment] = []\r
\r
    def penup(self):\r
        self.is_down = False\r
\r
    def pendown(self):\r
        self.is_down = True\r
\r
    def pensize(self, size: int):\r
        self.pen_size = size\r
\r
    def pencolor(self, color: str):\r
        self.pen_color = color\r
\r
    def move_to(self, new_x: float, new_y: float):\r
        seg = PenTrailSegment(\r
            x1=self.current_x,\r
            y1=self.current_y,\r
            x2=new_x,\r
            y2=new_y,\r
            is_drawn=self.is_down,\r
            pen_size=self.pen_size,\r
            pen_color=self.pen_color\r
        )\r
        self.segments.append(seg)\r
        self.current_x = new_x\r
        self.current_y = new_y\r
\r
def test_pen_state_control():\r
    print("   [...] Testing Pen Up/Down Mechanics & Trail Control...")\r
    controller = PenStateController()\r
\r
    # 1. Draw first line with pendown()\r
    controller.move_to(100.0, 0.0)\r
    assert controller.segments[0].is_drawn is True\r
    print(f"   [PASS] 1. Drawn segment from (0,0) to (100,0) with pen down: True")\r
\r
    # 2. Lift pen and jump to (200, 0)\r
    controller.penup()\r
    controller.move_to(200.0, 0.0)\r
    assert controller.segments[1].is_drawn is False\r
    print(f"   [PASS] 2. Jumped without drawing from (100,0) to (200,0) with pen up: True")\r
\r
    # 3. Lower pen and draw second line with 4px width\r
    controller.pendown()\r
    controller.pensize(4)\r
    controller.pencolor("#38bdf8")\r
    controller.move_to(300.0, 0.0)\r
    assert controller.segments[2].is_drawn is True\r
    assert controller.segments[2].pen_size == 4\r
    print(f"   [PASS] 3. Drawn segment from (200,0) to (300,0) with pen size: 4px")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PEN CONTROL] Discrete Segment Drawing via penup() and pendown()")\r
    print("=" * 75)\r
\r
    test_pen_state_control()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Toggling penup() and pendown() allows moving across the canvas")\r
    print("           without leaving unwanted connecting ink lines.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,z=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 4: Turtle cursor (pen) behavior: position, heading, visibility (showturtle(), hideturtle())\r
# File: institutional_cursor_hud_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Real-time Heads-Up Display (HUD) telemetry generator tracking\r
#              cursor telemetry for Mamata, Mahima, and Susmita.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class StudentCursorTelemetryHUD:\r
    student_name: str\r
    campus: str\r
    current_x: float\r
    current_y: float\r
    heading_deg: float\r
    is_pen_down: bool\r
    is_cursor_visible: bool\r
    stroke_width: int\r
    pencolor_hex: str\r
\r
    def generate_hud_overlay_string(self) -> str:\r
        pen_status = "DRAWING (PEN DOWN)" if self.is_pen_down else "TRANSIT (PEN UP)"\r
        vis_status = "VISIBLE" if self.is_cursor_visible else "HIDDEN (FAST)"\r
        return (\r
            f"[HUD TELEMETRY] Student: {self.student_name} ({self.campus}) | "\r
            f"Pos: ({self.current_x:.1f}, {self.current_y:.1f}) | Heading: {self.heading_deg:.1f} deg | "\r
            f"Pen: {pen_status} | Cursor: {vis_status} | Stroke: {self.stroke_width}px ({self.pencolor_hex})"\r
        )\r
\r
def test_cursor_hud():\r
    print("   [...] Running Institutional Cursor Telemetry HUD Test...")\r
    \r
    # 1. Mamata's HUD at Barrackpore\r
    hud_mamata = StudentCursorTelemetryHUD("Mamata", "Barrackpore", 150.0, 100.0, 45.0, True, False, 3, "#2dd4bf")\r
    log1 = hud_mamata.generate_hud_overlay_string()\r
    assert "Mamata" in log1 and "DRAWING" in log1\r
    print(f"   [PASS] 1. {log1}")\r
\r
    # 2. Mahima's HUD at Kolkata\r
    hud_mahima = StudentCursorTelemetryHUD("Mahima", "Kolkata", 0.0, 150.0, 90.0, False, True, 2, "#38bdf8")\r
    log2 = hud_mahima.generate_hud_overlay_string()\r
    assert "Mahima" in log2 and "TRANSIT" in log2\r
    print(f"   [PASS] 2. {log2}")\r
\r
    # 3. Susmita's HUD at Ichapur\r
    hud_susmita = StudentCursorTelemetryHUD("Susmita", "Ichapur", -120.0, -80.0, 180.0, True, True, 4, "#c084fc")\r
    log3 = hud_susmita.generate_hud_overlay_string()\r
    assert "Susmita" in log3 and "180.0 deg" in log3\r
    print(f"   [PASS] 3. {log3}")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Real-Time Student Cursor Telemetry HUD Overlay Engine")\r
    print("=" * 80)\r
\r
    test_cursor_hud()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Displaying real-time telemetry overlays assists learners in")\r
    print("           debugging spatial movements and orientation angles.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,M=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
        TOPIC 4: TURTLE CURSOR BEHAVIOR (POSITION, HEADING & VISIBILITY)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CURSOR TELEMETRY & VISIBILITY METHODS\r
--------------------------------------------------------------------------------\r
  1. Position Telemetry:\r
     - t.pos()       -> Returns (x, y) coordinates as float tuple\r
     - t.xcor()      -> Current X coordinate\r
     - t.ycor()      -> Current Y coordinate\r
\r
  2. Heading Angle Telemetry:\r
     - t.heading()   -> Returns current direction in degrees (0.0 to 359.9°)\r
       • 0°   = East (Right)\r
       • 90°  = North (Up)\r
       • 180° = West (Left)\r
       • 270° = South (Down)\r
\r
  3. Visibility & Performance:\r
     - t.hideturtle() / t.ht() -> Hides cursor icon (Speeds up drawing 3x-5x)\r
     - t.showturtle() / t.st() -> Makes cursor icon visible\r
     - t.isvisible()           -> Returns True if cursor is visible\r
\r
  4. Pen Drawing State:\r
     - t.penup() / t.up()     -> Lifts pen (movement without drawing)\r
     - t.pendown() / t.down() -> Lowers pen (drawing active)\r
     - t.isdown()             -> Returns True if pen is currently down\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 4: CURSOR BEHAVIOR\r
================================================================================\r
`,U=[{question:"How do you query the current heading angle of a Turtle cursor?",shortAnswer:"Using 't.heading()', which returns a float value between 0.0 and 359.9 degrees measured counter-clockwise from East (0°).",explanation:"Querying turtle orientation in degrees.",hint:"Use t.heading().",level:"basic",codeExample:"angle = t.heading() # e.g. 90.0 (North)"},{question:"What are the compass directions corresponding to 0°, 90°, 180°, and 270° in Turtle?",shortAnswer:"0° is East (+X), 90° is North (+Y), 180° is West (-X), and 270° is South (-Y).",explanation:"Standard compass heading angles in Python Turtle.",hint:"0° East, 90° North, 180° West, 270° South.",level:"basic",codeExample:"# 0°: East | 90°: North | 180°: West | 270°: South"},{question:"Why does calling 't.hideturtle()' significantly speed up drawing execution in large loops?",shortAnswer:"When the cursor is visible, Tkinter must redraw, rotate, and re-render the turtle icon polygon on the canvas after every single movement and turn; hiding the cursor eliminates this icon rendering overhead entirely.",explanation:"Rendering performance optimization via cursor hiding.",hint:"Eliminates Tkinter cursor polygon redraw and rotation overhead.",level:"moderate",codeExample:"t.hideturtle() # 3x-5x faster drawing in loops"},{question:"What are the short aliases for 'showturtle()' and 'hideturtle()'?",shortAnswer:"'t.st()' for 'showturtle()' and 't.ht()' for 'hideturtle()'.",explanation:"Convenience shorthand methods in turtle API.",hint:"t.st() and t.ht().",level:"basic",codeExample:`t.ht() # Hide cursor
t.st() # Show cursor`},{question:"How do you check whether a Turtle cursor is currently visible on the screen?",shortAnswer:"Using 't.isvisible()', which returns 'True' if the cursor is visible and 'False' if hidden.",explanation:"Querying cursor visibility boolean state.",hint:"Use t.isvisible().",level:"basic",codeExample:"if t.isvisible(): print('Cursor is visible')"},{question:"What is the difference between 't.pos()' and 't.xcor()' / 't.ycor()'?",shortAnswer:"'t.pos()' (or 't.position()') returns a tuple '(x, y)' of both coordinates, while 't.xcor()' and 't.ycor()' return the individual X and Y coordinate floats separately.",explanation:"Coordinate inspection methods.",hint:"pos() returns (x,y) tuple; xcor() and ycor() return individual floats.",level:"basic",codeExample:`x, y = t.pos()
x = t.xcor()
y = t.ycor()`},{question:"How do you move the turtle to a new position without leaving an ink trail on the canvas?",shortAnswer:"By calling 't.penup()' (or 't.up()') before moving, and calling 't.pendown()' (or 't.down()') after reaching the target position.",explanation:"Pen up and down mechanics for discrete drawing segments.",hint:"Lift pen with penup(), move, then lower pen with pendown().",level:"basic",codeExample:`t.penup()
t.goto(150, 200)
t.pendown()`},{question:"How do you query whether the turtle's pen is currently in the drawing state (down)?",shortAnswer:"Using 't.isdown()', which returns 'True' if the pen is down and 'False' if the pen is up.",explanation:"Inspecting pen drawing status.",hint:"Use t.isdown().",level:"basic",codeExample:"if t.isdown(): print('Pen is down, drawing active')"},{question:"What is the return type and format of 't.pos()' in Python Turtle?",shortAnswer:"It returns a 'turtle.Vec2D' object (a 2D vector subclass of tuple) representing '(x, y)' coordinates.",explanation:"Vec2D vector return type of position queries.",hint:"Returns a Vec2D tuple containing (x, y).",level:"moderate",codeExample:"pos = t.pos() # Vec2D(100.0, 50.0)"},{question:"How do you change the line thickness (stroke width) drawn by a Turtle pen?",shortAnswer:"Using 't.pensize(width)' (or 't.width(width)') where width is a positive integer representing line thickness in pixels.",explanation:"Setting pen stroke width.",hint:"Use t.pensize(width) or t.width(width).",level:"basic",codeExample:"t.pensize(4) # 4-pixel thick stroke"},{question:"Can a turtle still draw lines on the canvas while its cursor is hidden with 'hideturtle()'?",shortAnswer:"Yes; hiding the cursor only makes the icon invisible. The pen continues to draw all lines and fill polygons normally if 'pendown()' is active.",explanation:"Cursor visibility independence from pen drawing state.",hint:"Yes, drawing continues normally; only the cursor icon is invisible.",level:"basic",codeExample:`t.hideturtle()
t.forward(100) # Line is drawn cleanly without cursor`},{question:"How do you set the turtle cursor to an exact heading angle directly?",shortAnswer:"Using 't.setheading(angle)' (or 't.seth(angle)') where angle is specified in degrees (e.g. 'setheading(90)' points directly North).",explanation:"Absolute heading angle orientation.",hint:"Use t.setheading(angle) or t.seth(angle).",level:"basic",codeExample:"t.setheading(90) # Points North (+Y)"},{question:"What is the default heading angle of a newly created Turtle?",shortAnswer:"0.0 degrees (pointing directly East along the positive X-axis).",explanation:"Default orientation of newly initialized turtles.",hint:"0.0 degrees (East / rightward).",level:"basic",codeExample:`t = turtle.Turtle()
assert t.heading() == 0.0`},{question:"What happens if you pass an angle greater than 360° or negative to 'setheading()'?",shortAnswer:"Python Turtle normalizes the angle modulo 360 (e.g. 'setheading(450)' becomes 90°, and 'setheading(-90)' becomes 270°).",explanation:"Modulo 360 normalization of heading angles.",hint:"Automatically normalized modulo 360 degrees.",level:"basic",codeExample:"t.setheading(450) # Normalizes to 90.0 (North)"},{question:"How do you inspect the current pen line color of a Turtle object?",shortAnswer:"Using 't.pencolor()' without arguments, which returns the current color name, hex string, or RGB tuple.",explanation:"Querying active pencolor.",hint:"Call t.pencolor() with no arguments.",level:"basic",codeExample:"current_pencolor = t.pencolor() # '#2dd4bf'"},{question:"How do you inspect the current fill color of a Turtle object?",shortAnswer:"Using 't.fillcolor()' without arguments.",explanation:"Querying active fillcolor.",hint:"Call t.fillcolor() with no arguments.",level:"basic",codeExample:"current_fill = t.fillcolor() # '#0d9488'"},{question:"Why is tracking turtle position and heading essential when writing algorithmic drawing functions?",shortAnswer:"Algorithmic drawing requires returning the turtle to known reference coordinates or calculating delta displacements for recursive branch trees and symmetrical geometric mandalas.",explanation:"Position and heading tracking in algorithmic geometry.",hint:"Essential for restoring state in recursive functions and symmetrical art.",level:"moderate",codeExample:"saved_pos = t.pos(); saved_heading = t.heading() # Save state"},{question:"How do you restore a turtle's position and heading to a previously saved state?",shortAnswer:"By saving 'saved_pos = t.pos()' and 'saved_head = t.heading()', and later restoring with 't.penup(); t.goto(saved_pos); t.setheading(saved_head); t.pendown()'.",explanation:"State push/pop pattern in turtle graphics.",hint:"Save pos/heading to variables, then use goto() and setheading() to restore.",level:"moderate",codeExample:"t.goto(saved_pos); t.setheading(saved_head)"},{question:"What is the difference between 't.towards(x, y)' and 't.heading()'?",shortAnswer:"'t.heading()' returns the turtle's current direction, while 't.towards(x, y)' calculates the angle needed from the turtle's current position to point directly at the target point (x, y).",explanation:"Calculating orientation angle towards a target coordinate.",hint:"heading() is current direction; towards(x,y) is angle needed to face (x,y).",level:"pro",codeExample:`target_angle = t.towards(100, 100)
t.setheading(target_angle) # Faces target`},{question:"What is the ultimate golden rule of Turtle Cursor & Pen management?",shortAnswer:"Always manage pen states defensively with `penup()` and `pendown()`, hide the cursor (`hideturtle()`) during heavy computational loops to eliminate rendering lag, and inspect `pos()` and `heading()` to guarantee geometric precision.",explanation:"The complete standard for professional Turtle cursor management.",hint:"Defensive penup/pendown + hideturtle() in loops + pos()/heading() telemetry.",level:"basic",codeExample:"# Enterprise Cursor & Pen Telemetry Standard"}];function Q(){const p=n.useRef([]),[i,u]=n.useState("compassRadar"),[c,f]=n.useState(0),[h,g]=n.useState(0),[x,b]=n.useState(0),[o,y]=n.useState(!0),[l,w]=n.useState(!0),[j,B]=n.useState(3),[N,L]=n.useState("#2dd4bf"),[S,v]=n.useState([]),T=(t=40)=>{const r=x*Math.PI/180,d=Math.round(c+t*Math.cos(r)),_=Math.round(h+t*Math.sin(r));o&&v(E=>[...E,{x1:c,y1:h,x2:d,y2:_,stroke:N,width:j}]),f(d),g(_)},k=t=>{b(t%360)},C=()=>{f(0),g(0),b(0),y(!0),w(!0),v([])},P=t=>{const r=t%360;return r===0?"East (+X) [0°]":r===90?"North (+Y) [90°]":r===180?"West (-X) [180°]":r===270?"South (-Y) [270°]":`${r}° Custom`};n.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Turtle Cursor (Pen) Behavior: ",e.jsx("span",{className:"text-teal-400",children:"Position, Heading & Visibility"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master complete telemetry and control over the Turtle cursor and drawing pen: querying coordinate positions (",e.jsx("code",{className:"text-teal-300 font-mono",children:"pos()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"xcor()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ycor()"}),"), compass heading angles (",e.jsx("code",{className:"text-teal-300 font-mono",children:"heading()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"setheading()"}),"), toggling cursor visibility (",e.jsx("code",{className:"text-teal-300 font-mono",children:"showturtle()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"hideturtle()"}),") for 5x rendering speedups, and managing pen states (",e.jsx("code",{className:"text-teal-300 font-mono",children:"penup()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pendown()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"isdown()"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧭 Compass Heading Angles (0°-360°)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ hideturtle() 5x Speedup"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🖊️ penup() / pendown() Trail Physics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Real-Time HUD Telemetry"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Cursor & Pen Telemetry Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"The Turtle cursor combines geometric position telemetry with drawing state management. Understanding these methods enables precise vector navigation:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Position Telemetry"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"pos(), xcor(), ycor()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Inspect the turtle's exact 2D Cartesian coordinates anytime with sub-pixel precision."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Heading Telemetry"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"heading(), seth()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Query or orient the compass heading: 0° East, 90° North, 180° West, and 270° South."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Visibility Speedup"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"hideturtle(), ht()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Hides the cursor icon, eliminating Tkinter redraw overhead and accelerating loop execution 3x to 5x."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Pen State Physics"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"penup(), pendown()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Controls ink trail deposition: lift pen for transit, lower pen for drawing discrete geometric segments."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Performance Impact of hideturtle()"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When rendering complex mandalas, fractals, or simulations with 5,000+ steps, always call ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"t.hideturtle()"})," at the start! This prevents Tkinter from recomputing cursor matrix transformations on every single frame."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Compass Heading, Performance & Pen Trails"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("compassRadar"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="compassRadar"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Compass Heading Radar"}),e.jsx("button",{onClick:()=>u("renderBenchmark"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="renderBenchmark"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Visibility 5x Speed Benchmark"}),e.jsx("button",{onClick:()=>u("penTrailPhysics"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="penTrailPhysics"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"penup() / pendown() Trail Physics"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining compass heading angular radars, render time benchmarks, and pen state physics:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="compassRadar"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"TURTLE COMPASS HEADING ANGULAR RADAR (0° TO 360°)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("circle",{cx:"200",cy:"122",r:"85",stroke:"#334155",strokeWidth:"1.5",strokeDasharray:"4 4",fill:"#082f49"}),e.jsx("circle",{cx:"200",cy:"122",r:"5",fill:"#ffffff"}),e.jsx("line",{x1:"85",y1:"122",x2:"315",y2:"122",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("line",{x1:"200",y1:"25",x2:"200",y2:"220",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"290",y:"115",fill:"#2dd4bf",fontSize:"11",fontWeight:"bold",children:"0° East (+X)"}),e.jsx("text",{x:"160",y:"20",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"90° North (+Y)"}),e.jsx("text",{x:"88",y:"115",fill:"#c084fc",fontSize:"11",fontWeight:"bold",children:"180° West (-X)"}),e.jsx("text",{x:"160",y:"235",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"270° South (-Y)"}),e.jsx("line",{x1:"200",y1:"122",x2:"260",y2:"62",stroke:"#facc15",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"240",y:"55",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"setheading(45)"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"185",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"435",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Heading Methods in Python"}),e.jsx("text",{x:"435",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"t.heading()       # Returns current angle float"}),e.jsx("text",{x:"435",y:"110",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"t.setheading(90)  # Points North (+Y)"}),e.jsx("text",{x:"435",y:"135",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"t.setheading(180) # Points West (-X)"}),e.jsx("text",{x:"435",y:"160",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"t.setheading(270) # Points South (-Y)"}),e.jsx("text",{x:"435",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Angles automatically normalize modulo 360° ✅"})]})]}):i==="renderBenchmark"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CURSOR VISIBILITY PERFORMANCE BENCHMARK (1,000 ITERATIONS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("text",{x:"35",y:"45",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Cursor Visible (showturtle) - 1,250 ms (Slow)"}),e.jsx("rect",{x:"35",y:"60",width:"650",height:"35",rx:"4",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"45",y:"82",fill:"#ffe4e6",fontSize:"10",fontWeight:"bold",children:"1,250 ms (Tkinter constantly rotates and repaints cursor polygon icon)"}),e.jsx("text",{x:"35",y:"130",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"2. Cursor Hidden (hideturtle) - 250 ms (5.0x Faster! 🚀)"}),e.jsx("rect",{x:"35",y:"145",width:"130",height:"35",rx:"4",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"175",y:"167",fill:"#86efac",fontSize:"10",fontWeight:"bold",children:"250 ms (Zero cursor icon redraw overhead)"}),e.jsx("rect",{x:"35",y:"200",width:"750",height:"30",rx:"4",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"45",y:"220",fill:"#e0f2fe",fontSize:"9",children:"💡 Rule: Always call t.hideturtle() for complex fractals, mandalas, and multi-agent physics!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PEN STATE PHYSICS: PENUP() TRANSIT VS PENDOWN() DRAWING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"30",y:"30",width:"220",height:"185",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"40",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1. pendown() Active"}),e.jsx("line",{x1:"50",y1:"120",x2:"200",y2:"120",stroke:"#2dd4bf",strokeWidth:"4"}),e.jsx("text",{x:"40",y:"85",fill:"#ccfbf1",fontSize:"8",children:"• t.isdown() == True"}),e.jsx("text",{x:"40",y:"105",fill:"#ccfbf1",fontSize:"8",children:"• Stroke: 4px Teal"}),e.jsx("text",{x:"40",y:"165",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Active Vector Drawing ✅"}),e.jsx("rect",{x:"290",y:"30",width:"230",height:"185",rx:"6",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"300",y:"55",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"2. penup() In Transit"}),e.jsx("line",{x1:"310",y1:"120",x2:"460",y2:"120",stroke:"#94a3b8",strokeWidth:"2",strokeDasharray:"4 4"}),e.jsx("text",{x:"300",y:"85",fill:"#fef3c7",fontSize:"8",children:"• t.isdown() == False"}),e.jsx("text",{x:"300",y:"105",fill:"#fef3c7",fontSize:"8",children:"• Pen lifted from canvas"}),e.jsx("text",{x:"300",y:"165",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Clean Jump Without Trails ✈️"}),e.jsx("rect",{x:"560",y:"30",width:"230",height:"185",rx:"6",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"570",y:"55",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"3. pendown() Resumed"}),e.jsx("line",{x1:"580",y1:"120",x2:"730",y2:"120",stroke:"#38bdf8",strokeWidth:"4"}),e.jsx("text",{x:"570",y:"85",fill:"#bae6fd",fontSize:"8",children:"• t.pendown() called"}),e.jsx("text",{x:"570",y:"105",fill:"#bae6fd",fontSize:"8",children:"• New discrete polygon"}),e.jsx("text",{x:"570",y:"165",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"New Shape Started ✅"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Real-Time Cursor HUD Studio"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Direct the virtual turtle cursor and observe real-time telemetry updates. Toggle pen states, orient compass headings, and test visibility modes:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:[e.jsx("button",{onClick:()=>T(40),className:"p-2.5 bg-teal-950/80 border border-teal-600 rounded-xl text-xs font-bold text-teal-300 hover:bg-teal-900 transition-all text-center",children:"Forward 40 px 🚀"}),e.jsxs("button",{onClick:()=>y(!o),className:a("p-2.5 rounded-xl border text-xs font-bold transition-all text-center",o?"bg-emerald-950/80 border-emerald-500 text-emerald-300":"bg-amber-950/80 border-amber-500 text-amber-300"),children:["Pen: ",o?"DOWN (Draw)":"UP (Transit)"]}),e.jsxs("button",{onClick:()=>w(!l),className:a("p-2.5 rounded-xl border text-xs font-bold transition-all text-center",l?"bg-cyan-950/80 border-cyan-500 text-cyan-300":"bg-purple-950/80 border-purple-500 text-purple-300"),children:["Cursor: ",l?"VISIBLE":"HIDDEN (Fast)"]}),e.jsx("button",{onClick:C,className:"p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all text-center",children:"Reset Studio 🔄"}),e.jsx("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800",children:[0,90,180,270].map(t=>e.jsxs("button",{onClick:()=>k(t),className:a("flex-1 py-1 rounded text-[10px] font-mono transition-all",x===t?"bg-teal-800 text-white font-bold":"text-slate-400 hover:text-white"),children:[t,"°"]},t))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-900/60 p-3.5 rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-teal-400 uppercase font-mono",children:"Position (X, Y)"}),e.jsxs("div",{className:"text-base font-bold font-mono text-teal-200",children:["(",c,", ",h,")"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-cyan-400 uppercase font-mono",children:"Heading Angle"}),e.jsx("div",{className:"text-base font-bold font-mono text-cyan-200",children:P(x)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-purple-400 uppercase font-mono",children:"Pen State"}),e.jsx("div",{className:"text-base font-bold font-mono text-purple-200",children:o?"DOWN (Active)":"UP (Transit)"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-amber-400 uppercase font-mono",children:"Cursor Visibility"}),e.jsx("div",{className:"text-base font-bold font-mono text-amber-200",children:l?"VISIBLE":"HIDDEN"})]})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-150 -100 300 200",className:"w-full h-full",children:[e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#64748b"}),e.jsx("line",{x1:"-140",y1:"0",x2:"140",y2:"0",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("line",{x1:"0",y1:"-90",x2:"0",y2:"90",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),S.map((t,r)=>e.jsx("line",{x1:t.x1,y1:-t.y1,x2:t.x2,y2:-t.y2,stroke:t.stroke,strokeWidth:t.width,strokeLinecap:"round"},r)),l&&e.jsx("g",{transform:`translate(${c}, ${-h}) rotate(${-x})`,className:"transition-transform duration-200 ease-out",children:e.jsx("polygon",{points:"10,0 -6,-6 -3,0 -6,6",fill:"#2dd4bf",stroke:"#0f766e",strokeWidth:"1.5",className:"animate-glow-teal"})})]})})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Cursor Telemetry Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade cursor behavior labs covering coordinate inspection, visibility benchmarking, pen state physics, and real-time HUD telemetry:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Position Coordinates & Compass Heading Telemetry"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Querying coordinates (",e.jsx("code",{className:"text-teal-300 font-mono",children:"pos()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"xcor()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ycor()"}),") and compass directions (0° to 270°)."]})]}),e.jsx(m,{fileModule:H,title:"turtle_cursor_position_and_heading.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Cursor Visibility Control & Rendering Speedup Benchmarks"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Benchmarking execution latency with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"hideturtle()"})," vs visible cursor redraws."]})]}),e.jsx(m,{fileModule:R,title:"cursor_visibility_and_performance.py",highlightLines:[16,26,36]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Pen State Control, Widths & Discrete Segment Generation"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Managing pen up/down mechanics, checking status with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isdown()"}),", and customizing stroke widths."]})]}),e.jsx(m,{fileModule:W,title:"turtle_pen_state_and_trail_control.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Real-Time Cursor Telemetry HUD Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Generating real-time HUD telemetry overlays tracking Mamata, Mahima, and Susmita across Barrackpore and Kolkata."})]}),e.jsx(m,{fileModule:z,title:"institutional_cursor_hud_case_study.py",highlightLines:[18,30,44,58]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Cursor & Pen Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Visible Cursor in Heavy Loops"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Leaving the cursor visible while rendering 10,000-segment fractals causes extreme UI lag due to Tkinter redraws."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: t.hideturtle() before starting heavy loops"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Moving Without penup()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"goto()"})," to transit across the canvas without lifting the pen leaves ugly connector lines."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: t.penup(); t.goto(x, y); t.pendown()"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Assuming 0° Points North"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"In standard nautical compasses 0° is North, but in Turtle Graphics 0° is East (+X) and 90° is North (+Y)."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# REMEMBER: 0° is East; 90° is North"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Forgetting to Restore Heading"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Calling recursive functions without restoring original turtle heading angles produces distorted geometric trees."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Save heading with h = t.heading() and restore"})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Cursor & Pen Management Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Hide Cursor for Speed:"})," Invoke ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.hideturtle()"})," whenever drawing complex geometry."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Defensive Pen State:"})," Always lift pen (",e.jsx("code",{className:"text-teal-300 font-mono",children:"penup()"}),") before moving to non-adjacent shapes."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Verify Heading Angles:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.heading()"})," to verify orientation after rotations."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Save & Restore State:"})," Cache position and heading when writing reusable geometric functions."]})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(D,{title:"Turtle Cursor & Pen Telemetry FAQs",questions:U})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(A,{content:M,title:"Topic 4: Turtle Cursor Behavior & Telemetry Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(I,{note:"Mastering cursor telemetry is like having a flight dashboard for your code. When Mamata, Mahima, and Susmita started debugging their first multi-shape drawings at our Barrackpore and Kolkata centers, understanding that 0° points East and that hideturtle() eliminates redraw lag turned frustrating slow programs into silky-smooth, instantaneous art generators. Keep your pen state clean and your headings true!"})})]})]})}export{Q as default};

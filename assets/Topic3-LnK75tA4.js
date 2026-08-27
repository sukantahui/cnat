import{b as c,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as j}from"./FAQTemplate-CkSqDH4B.js";import{T as _}from"./TeacherSukantaHui-CyIG3xbg.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const v=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 3: Turtle object creation and lifecycle\r
# File: turtle_instantiation_and_properties.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating explicit OOP Turtle object creation, state inspection,\r
#              shapes, and pen customization.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class VirtualTurtleAgent:\r
    name: str\r
    shape_name: str = "classic"\r
    pen_color: str = "black"\r
    fill_color: str = "black"\r
    pen_size: int = 1\r
    is_pen_down: bool = True\r
    speed_val: int = 3\r
    is_cursor_visible: bool = True\r
    x: float = 0.0\r
    y: float = 0.0\r
    heading_deg: float = 0.0\r
\r
    def shape(self, new_shape: str) -> str:\r
        self.shape_name = new_shape\r
        return self.shape_name\r
\r
    def color(self, pen_col: str, fill_col: str | None = None):\r
        self.pen_color = pen_col\r
        self.fill_color = fill_col if fill_col is not None else pen_col\r
\r
    def pensize(self, size: int):\r
        self.pen_size = size\r
\r
    def speed(self, val: int):\r
        self.speed_val = val\r
\r
    def hideturtle(self):\r
        self.is_cursor_visible = False\r
\r
    def showturtle(self):\r
        self.is_cursor_visible = True\r
\r
def test_turtle_instantiation():\r
    print("   [...] Testing Object-Oriented Turtle Instantiation & State Encapsulation...")\r
    \r
    # 1. Instantiate Mamata's Custom Pen\r
    t1 = VirtualTurtleAgent("Mamata's Pen")\r
    assert t1.x == 0.0 and t1.y == 0.0\r
    assert t1.is_pen_down is True\r
    assert t1.is_cursor_visible is True\r
    print(f"   [PASS] 1. Instantiated agent '{t1.name}' with default state: Pos ({t1.x}, {t1.y}), PenDown: {t1.is_pen_down}")\r
\r
    # 2. Customize Properties\r
    t1.shape("turtle")\r
    t1.color("#2dd4bf", "#0d9488")\r
    t1.pensize(3)\r
    t1.speed(0)\r
    t1.hideturtle()\r
\r
    assert t1.shape_name == "turtle"\r
    assert t1.pen_color == "#2dd4bf" and t1.fill_color == "#0d9488"\r
    assert t1.pen_size == 3\r
    assert t1.is_cursor_visible is False\r
    print(f"   [PASS] 2. Configured custom shape: '{t1.shape_name}', Pen: {t1.pen_color}, Fill: {t1.fill_color}, Speed: {t1.speed_val}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TURTLE OOP] Explicit Object Instantiation & State Customization")\r
    print("=" * 75)\r
\r
    test_turtle_instantiation()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Explicit OOP turtle instances encapsulate independent visual")\r
    print("           state (shape, pencolor, fillcolor, visibility) with clean modularity.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 3: Turtle object creation and lifecycle\r
# File: multi_turtle_synchronized_agents.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Multi-agent coordination simulating synchronized multi-turtle drawing.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class SwarmTurtle:\r
    agent_id: int\r
    name: str\r
    color_hex: str\r
    radius: float\r
    angular_offset_deg: float\r
    current_angle_deg: float = 0.0\r
\r
    def step(self, angular_delta_deg: float) -> tuple[float, float]:\r
        self.current_angle_deg = (self.current_angle_deg + angular_delta_deg) % 360.0\r
        total_rad = math.radians(self.current_angle_deg + self.angular_offset_deg)\r
        x = round(self.radius * math.cos(total_rad), 2)\r
        y = round(self.radius * math.sin(total_rad), 2)\r
        return (x, y)\r
\r
class SwarmOrchestrator:\r
    """Manages synchronized multi-agent drawing swarms."""\r
    def __init__(self):\r
        self.agents: list[SwarmTurtle] = []\r
\r
    def add_agent(self, agent: SwarmTurtle):\r
        self.agents.append(agent)\r
\r
    def step_swarm(self, angle_step: float) -> list[tuple[str, float, float]]:\r
        return [(a.name, *a.step(angle_step)) for a in self.agents]\r
\r
def test_multi_agent_swarm():\r
    print("   [...] Testing Multi-Agent Synchronized Turtle Swarm...")\r
    orchestrator = SwarmOrchestrator()\r
\r
    # Create a 3-agent tri-arm spiral (Mamata, Mahima, Susmita)\r
    orchestrator.add_agent(SwarmTurtle(1, "Mamata's Pen", "#2dd4bf", radius=100.0, angular_offset_deg=0.0))\r
    orchestrator.add_agent(SwarmTurtle(2, "Mahima's Pen", "#38bdf8", radius=100.0, angular_offset_deg=120.0))\r
    orchestrator.add_agent(SwarmTurtle(3, "Susmita's Pen", "#c084fc", radius=100.0, angular_offset_deg=240.0))\r
\r
    assert len(orchestrator.agents) == 3\r
    print("   [PASS] 1. Initialized 3 synchronized drawing agents with 120-degree phase separation")\r
\r
    # Advance swarm by 90 degrees\r
    positions = orchestrator.step_swarm(90.0)\r
    assert len(positions) == 3\r
    for name, x, y in positions:\r
        print(f"   [PASS] 2. Agent '{name}' moved to synchronized position: ({x}, {y})")\r
\r
def main():\r
    print("=" * 75)\r
    print("[MULTI-AGENT SWARM] Synchronized Multi-Turtle Drawing Orchestration")\r
    print("=" * 75)\r
\r
    test_multi_agent_swarm()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Managing multiple Turtle instances allows creating complex")\r
    print("           synchronized geometric patterns and multi-agent physics simulations.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 3: Turtle object creation and lifecycle\r
# File: turtle_lifecycle_cloning_and_destruction.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating turtle cloning, stamp id tracking, and state reset.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CloneableTurtle:\r
    agent_name: str\r
    x: float\r
    y: float\r
    heading: float\r
    color_hex: str\r
    stamps: list[int]\r
\r
    def clone(self, new_name: str) -> "CloneableTurtle":\r
        """Performs deep state duplication identical to t.clone()."""\r
        return CloneableTurtle(\r
            agent_name=new_name,\r
            x=self.x,\r
            y=self.y,\r
            heading=self.heading,\r
            color_hex=self.color_hex,\r
            stamps=list(self.stamps)\r
        )\r
\r
    def stamp(self, stamp_id: int) -> int:\r
        self.stamps.append(stamp_id)\r
        return stamp_id\r
\r
    def clear_stamp(self, stamp_id: int):\r
        if stamp_id in self.stamps:\r
            self.stamps.remove(stamp_id)\r
\r
def test_turtle_cloning_and_stamping():\r
    print("   [...] Testing Turtle Clone & Stamp Lifecycle...")\r
    t1 = CloneableTurtle("Parent Agent", 150.0, 75.0, 45.0, "#2dd4bf", [])\r
    \r
    # Stamp canvas\r
    s_id = t1.stamp(101)\r
    assert s_id in t1.stamps\r
    print(f"   [PASS] 1. Parent stamped cursor imprint ID: {s_id}")\r
\r
    # Clone t1 to create branch t2\r
    t2 = t1.clone("Branch Agent 1")\r
    assert t2.x == 150.0 and t2.y == 75.0 and t2.heading == 45.0\r
    assert t2.color_hex == "#2dd4bf"\r
    print(f"   [PASS] 2. Successfully cloned agent -> '{t2.agent_name}' with inherited state ({t2.x}, {t2.y})")\r
\r
    # Mutate clone without affecting parent\r
    t2.x += 50.0\r
    assert t1.x == 150.0 and t2.x == 200.0\r
    print("   [PASS] 3. Verified state isolation between parent and cloned turtle instance")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TURTLE LIFECYCLE] Cloning, Stamping & Independent State Mutation")\r
    print("=" * 75)\r
\r
    test_turtle_cloning_and_stamping()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] t.clone() creates independent child turtles that inherit")\r
    print("           state, ideal for recursive fractal trees and branch art.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 3: Turtle object creation and lifecycle\r
# File: institutional_multi_agent_drawing_orchestrator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Multi-agent collaborative drawing orchestrator assigning dedicated\r
#              turtles to Mamata, Mahima, and Susmita for synchronized art.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class StudentDrawingAgent:\r
    student_name: str\r
    campus: str\r
    assigned_layer: str\r
    pencolor_hex: str\r
    active_segments_drawn: int = 0\r
\r
    def draw_segment(self, length: float):\r
        self.active_segments_drawn += 1\r
\r
class CollaborativeCanvasDirector:\r
    """Orchestrates multi-agent layered drawing projects."""\r
    def __init__(self):\r
        self.agents: list[StudentDrawingAgent] = []\r
\r
    def assign_agent(self, agent: StudentDrawingAgent):\r
        self.agents.append(agent)\r
\r
    def execute_synchronized_frame(self) -> list[str]:\r
        logs = []\r
        for a in self.agents:\r
            a.draw_segment(50.0)\r
            logs.append(\r
                f"[AGENT DISPATCH] {a.student_name} ({a.campus}) -> Layer: '{a.assigned_layer}' | "\r
                f"Color: {a.pencolor_hex} | Total Segments: {a.active_segments_drawn}"\r
            )\r
        return logs\r
\r
def test_collaborative_director():\r
    print("   [...] Running Institutional Multi-Agent Drawing Test...")\r
    director = CollaborativeCanvasDirector()\r
\r
    # Assign Mamata (Background Grid), Mahima (Fractal Tree), and Susmita (Star Mandala)\r
    director.assign_agent(StudentDrawingAgent("Mamata", "Barrackpore", "Background Coordinate Grid", "#334155"))\r
    director.assign_agent(StudentDrawingAgent("Mahima", "Kolkata", "Fractal Tree Geometry", "#2dd4bf"))\r
    director.assign_agent(StudentDrawingAgent("Susmita", "Ichapur", "Star Mandala Highlights", "#facc15"))\r
\r
    assert len(director.agents) == 3\r
    logs = director.execute_synchronized_frame()\r
    for l in logs:\r
        print(f"   [PASS] {l}")\r
\r
    assert director.agents[0].active_segments_drawn == 1\r
    assert director.agents[1].active_segments_drawn == 1\r
    assert director.agents[2].active_segments_drawn == 1\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Multi-Agent Collaborative Drawing System")\r
    print("=" * 80)\r
\r
    test_collaborative_director()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Dividing complex visual art into specialized Turtle agent")\r
    print("           layers maximizes modularity, code reuse, and teamwork.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
              TOPIC 3: TURTLE OBJECT CREATION & LIFECYCLE MANAGEMENT\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. OOP TURTLE INSTANTIATION VS PROCEDURAL SINGLETON\r
--------------------------------------------------------------------------------\r
  Procedural Singleton (Amateur):\r
    import turtle\r
    turtle.forward(100) # Operates on hidden global anonymous singleton\r
\r
  Object-Oriented Architecture (Pro):\r
    import turtle\r
    t1 = turtle.Turtle() # Instance 1 (e.g. Mamata's Pen)\r
    t2 = turtle.Turtle() # Instance 2 (e.g. Mahima's Pen)\r
    \r
    t1.color("cyan")\r
    t2.color("magenta")\r
    t1.forward(100)\r
    t2.backward(100)\r
\r
--------------------------------------------------------------------------------\r
2. TURTLE LIFECYCLE & STATE ATTRIBUTES\r
--------------------------------------------------------------------------------\r
  - t.shape("turtle")   -> Built-in shapes: "arrow", "turtle", "circle", "square", "triangle", "classic"\r
  - t.shapesize(2, 2)   -> Multiplies turtle cursor width and length (stretch_wid, stretch_len)\r
  - t.clone()           -> Creates an exact duplicate turtle with identical position, heading & pen\r
  - t.hideturtle()      -> Makes cursor invisible for crisp vector art rendering\r
  - t.showturtle()      -> Restores cursor visibility\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 3: TURTLE OBJECT LIFECYCLE\r
================================================================================\r
`,z=[{question:"Why is object-oriented instantiation ('t = turtle.Turtle()') superior to procedural global calls ('turtle.forward(100)')?",shortAnswer:"Object-oriented instantiation allows creating multiple independent turtles with isolated states (positions, headings, colors, pen sizes, speeds) on the same screen, which is impossible with the procedural singleton.",explanation:"Multi-instance object-oriented design vs procedural singleton limitations.",hint:"Allows multiple independent turtles with separate states on one canvas.",level:"basic",codeExample:`t1 = turtle.Turtle()
t2 = turtle.Turtle() # Two independent drawing agents`},{question:"What is the initial default state of a newly created 'turtle.Turtle()' instance?",shortAnswer:"Position: (0, 0) center; Heading: 0.0 degrees (East); Shape: 'classic' arrow; Pen Color: 'black'; Pen State: down (drawing); Speed: 3 (normal); Cursor Visibility: visible.",explanation:"Default properties of newly instantiated Turtle objects.",hint:"Position (0,0), Heading 0 (East), Shape 'classic', Pen down, Color black.",level:"basic",codeExample:`t = turtle.Turtle()
print(t.pos(), t.heading(), t.isdown()) # (0.0, 0.0) 0.0 True`},{question:"What are the 6 built-in cursor shapes supported by 't.shape()'?",shortAnswer:"1. 'arrow', 2. 'turtle', 3. 'circle', 4. 'square', 5. 'triangle', and 6. 'classic'.",explanation:"Standard built-in cursor shapes in the turtle module.",hint:"'arrow', 'turtle', 'circle', 'square', 'triangle', 'classic'.",level:"basic",codeExample:"t.shape('turtle') # Changes cursor to actual turtle graphic"},{question:"What does 't.clone()' do?",shortAnswer:"'t.clone()' creates and returns an exact duplicate Turtle object with the identical position, heading, pen color, pen size, and drawing state as the original turtle at that moment.",explanation:"Deep cloning of turtle state.",hint:"Creates a clone with identical position, heading, color, and pen properties.",level:"moderate",codeExample:"t2 = t1.clone() # t2 inherits t1's current coordinates and state"},{question:"How do you scale the visual size of the turtle cursor icon?",shortAnswer:"Using 't.shapesize(stretch_wid, stretch_len, outline)' (or 't.turtlesize()') where numbers represent scaling multipliers (e.g. 'shapesize(2, 2)' doubles cursor size).",explanation:"Scaling cursor dimensions on canvas.",hint:"Use t.shapesize(stretch_wid, stretch_len).",level:"basic",codeExample:"t.shapesize(2.5, 2.5) # 2.5x larger cursor"},{question:"How do you check whether a turtle's pen is currently drawing or lifted?",shortAnswer:"Using 't.isdown()', which returns 'True' if the pen is down (drawing) and 'False' if lifted with 'penup()'.",explanation:"Inspecting pen drawing status.",hint:"Use t.isdown().",level:"basic",codeExample:"if t.isdown(): print('Drawing active')"},{question:"How do you check whether the turtle cursor is currently visible or hidden?",shortAnswer:"Using 't.isvisible()', which returns 'True' if the cursor is shown and 'False' if hidden with 'hideturtle()'.",explanation:"Inspecting cursor visibility state.",hint:"Use t.isvisible().",level:"basic",codeExample:"if not t.isvisible(): print('Cursor is hidden')"},{question:"How can multiple turtles draw synchronized patterns in parallel?",shortAnswer:"By storing turtle instances in a list and iterating through them inside a loop, advancing each turtle by one step or angle rotation per iteration.",explanation:"Simulating multi-agent parallel drawing on a single thread.",hint:"Store turtles in a list and iterate through them in a single drawing loop.",level:"moderate",codeExample:`turtles = [t1, t2, t3]
for _ in range(36):
    for t in turtles:
        t.forward(10); t.left(10)`},{question:`What is the difference between 't.color("red", "yellow")' with two arguments vs one argument?`,shortAnswer:"With two arguments, the first argument sets the pen line color ('pencolor') and the second sets the polygon interior fill color ('fillcolor').",explanation:"Separate pencolor and fillcolor configuration.",hint:"First arg = pencolor (outline); Second arg = fillcolor (interior).",level:"basic",codeExample:"t.color('teal', 'yellow') # Teal outline, yellow fill"},{question:"How do you register a custom polygon shape for turtle cursors using 'screen.register_shape()'?",shortAnswer:`By defining a tuple of coordinate vertices and calling 'screen.register_shape("custom_name", shape_coords)' or registering a GIF image with 'screen.register_shape("icon.gif")'.`,explanation:"Custom shape registration in Python Turtle.",hint:"Use screen.register_shape('name', vertex_tuple) or GIF file path.",level:"pro",codeExample:"screen.register_shape('star', ((0,10), (3,3), (10,3), (5,-2)))"},{question:"What happens when a Turtle object goes out of scope and is garbage collected in Python?",shortAnswer:"The Python object is destroyed, but any visual lines and shapes already drawn by that turtle remain on the Tkinter canvas until cleared explicitly.",explanation:"Canvas vector persistence vs Python object lifecycle.",hint:"Drawn pixels remain on the canvas even after the Python object is deleted.",level:"moderate",codeExample:"del t1 # Python object deleted, canvas drawing remains intact"},{question:"How do you get a list of all active Turtle objects registered on a Screen?",shortAnswer:"Using 'screen.turtles()', which returns a list of all currently active Turtle instances associated with that screen.",explanation:"Screen-level turtle registry inspection.",hint:"Use screen.turtles().",level:"basic",codeExample:`all_turtles = screen.turtles()
print(f'{len(all_turtles)} active turtles')`},{question:"How do you reset a specific turtle's state without affecting other turtles on the screen?",shortAnswer:"By calling 't.reset()' on that specific instance; this erases only the lines drawn by that turtle and returns it to (0,0), leaving all other turtles and their drawings untouched.",explanation:"Instance-level reset vs global screen clear.",hint:"t.reset() only resets that specific turtle instance.",level:"moderate",codeExample:"t1.reset() # Only t1 is cleared and returned home"},{question:"What is 't.stamp()' and how does it relate to turtle object lifecycle?",shortAnswer:"'t.stamp()' leaves an indelible visual imprint of the turtle cursor's current shape and color at its current position on the canvas and returns a unique integer stamp ID.",explanation:"Stamping cursor imprints on the canvas.",hint:"Leaves an imprint of current turtle shape/color and returns a stamp ID.",level:"basic",codeExample:"stamp_id = t.stamp() # Imprints cursor"},{question:"How do you erase a specific stamped cursor imprint created with 't.stamp()'?",shortAnswer:"Using 't.clearstamp(stamp_id)' to erase a specific stamp, or 't.clearstamps(n)' to erase multiple stamps.",explanation:"Managing and removing stamped shapes.",hint:"Use t.clearstamp(stamp_id).",level:"moderate",codeExample:"t.clearstamp(stamp_id) # Removes specific stamped imprint"},{question:"How do you set the drawing speed of a turtle, and what values are valid?",shortAnswer:"Using 't.speed(val)' with integers 0 to 10 (or string keywords 'fastest': 0, 'fast': 10, 'normal': 6, 'slow': 3, 'slowest': 1).",explanation:"Turtle animation speed configuration.",hint:"0 (fastest/instant) to 10 (fast), with 1 being slowest.",level:"basic",codeExample:"t.speed('fastest') # or t.speed(0)"},{question:"What is the return type of 't.pencolor()' and 't.fillcolor()' when called without arguments?",shortAnswer:"They return the current pen color and fill color as strings (e.g. 'teal', '#090d16') or RGB tuples depending on the active colormode.",explanation:"Color query return values.",hint:"Returns current color name, hex code, or RGB tuple.",level:"basic",codeExample:"current_color = t.pencolor() # '#2dd4bf'"},{question:"Why should you hide the turtle cursor ('t.hideturtle()') when drawing complex mathematical curves?",shortAnswer:"Hiding the cursor improves rendering performance significantly (Tkinter does not need to constantly rotate and redraw the cursor icon) and produces cleaner, professional final graphics.",explanation:"Performance optimization and visual polish via cursor hiding.",hint:"Speeds up rendering and eliminates cursor clutter on complex curves.",level:"basic",codeExample:"t.hideturtle() # Boosts speed and hides cursor"},{question:"Can multiple turtles inherit shared drawing behavior using Python class inheritance?",shortAnswer:"Yes; you can create custom subclasses: 'class ParticleTurtle(turtle.Turtle): ...' and encapsulate custom physics, velocities, and specialized drawing methods directly into the object.",explanation:"Object-oriented subclassing of turtle.Turtle.",hint:"Yes, by subclassing turtle.Turtle to add custom physics and methods.",level:"pro",codeExample:`class StudentAgent(turtle.Turtle):
    def draw_star(self): ... # Custom method`},{question:"What is the ultimate golden rule of Turtle Object Creation?",shortAnswer:"Always instantiate explicit OOP `turtle.Turtle()` instances (`t1`, `t2`), encapsulate unique state (colors, pens, shapes), leverage `t.clone()` for fractal branches, and use `screen.turtles()` to manage multi-agent graphics systems with modular elegance.",explanation:"The complete standard for object-oriented Turtle graphics programming.",hint:"Explicit OOP instances + encapsulated states + cloning + multi-agent coordination.",level:"basic",codeExample:"# Enterprise Multi-Agent Turtle Standard"}];function L(){const h=c.useRef([]),[i,m]=c.useState("multiInstance"),[p,f]=c.useState(0),[o,b]=c.useState("turtle"),u=[{id:1,name:"Mamata's Pen (Barrackpore)",color:"#2dd4bf",offsetDeg:0,radius:80},{id:2,name:"Mahima's Pen (Kolkata)",color:"#38bdf8",offsetDeg:120,radius:80},{id:3,name:"Susmita's Pen (Ichapur)",color:"#c084fc",offsetDeg:240,radius:80}],g=(t=30)=>{f(n=>(n+t)%360)},w=()=>{f(0)};c.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Turtle Object Creation & ",e.jsx("span",{className:"text-teal-400",children:"Lifecycle"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the object-oriented architecture of Turtle Graphics: instantiating explicit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t = turtle.Turtle()"})," instances, customizing cursor shapes (",e.jsx("code",{className:"text-teal-300 font-mono",children:'"turtle"'}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:'"circle"'}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:'"arrow"'}),"), deep cloning with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"clone()"}),", imprinting marks with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"stamp()"}),", state encapsulation across isolated pen properties, and orchestrating synchronized multi-agent drawing systems on a single shared canvas."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🐢 Explicit OOP Instantiation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 t.clone() State Duplication"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ Cursor Shapes & Stamping"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🤝 Multi-Agent Synchronization"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Object-Oriented Turtle Paradigm"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Transitioning from procedural global turtle calls to explicit object-oriented instances unlocks the full potential of multi-layer graphics, recursive branch art, and multi-agent physics:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Explicit OOP"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"t = turtle.Turtle()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Creates an independent turtle instance encapsulating its own position, heading, speed, and pen attributes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Cursor Shapes"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'shape("turtle")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:'Customize the cursor representation with built-ins: "turtle", "arrow", "circle", "square", "triangle", "classic".'})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Deep Cloning"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"t_child = t.clone()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Duplicates the exact position, heading, and pen state into a new child instance, essential for fractal trees."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Multi-Agent Swarms"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"screen.turtles()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Coordinate multiple turtles drawing in parallel across distinct canvas layers (grid, fractal, annotations)."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Vector Persistence vs Object Destruction"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When a Python ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Turtle"})," object is deleted with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"del t"}),", the underlying lines and shapes already drawn on the Tkinter canvas ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"REMAIN VISIBLE"}),"! The canvas stores vector draw commands independently of the Python garbage collector."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Multi-Instance Encapsulation & Shapes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("multiInstance"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="multiInstance"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Multi-Instance Encapsulation"}),e.jsx("button",{onClick:()=>m("shapesAnatomy"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="shapesAnatomy"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cursor Shapes & Stamping"}),e.jsx("button",{onClick:()=>m("swarmMatrix"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="swarmMatrix"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Multi-Agent Swarm Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining isolated object state encapsulation, cursor shape geometries, and parallel multi-agent swarms:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="multiInstance"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"OOP MULTI-INSTANCE STATE ENCAPSULATION ON A SHARED CANVAS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"35",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"🐢 Instance: t_mamata"}),e.jsx("text",{x:"35",y:"85",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"• pos(): (150, 100)"}),e.jsx("text",{x:"35",y:"105",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"• heading(): 45.0°"}),e.jsx("text",{x:"35",y:"125",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:'• pencolor(): "#2dd4bf"'}),e.jsx("text",{x:"35",y:"145",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"• speed(): 0 (instant)"}),e.jsx("text",{x:"35",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Layer: Background Grid"}),e.jsx("rect",{x:"290",y:"35",width:"240",height:"180",rx:"6",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"300",y:"60",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"🐢 Instance: t_mahima"}),e.jsx("text",{x:"300",y:"85",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"• pos(): (0, 0)"}),e.jsx("text",{x:"300",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"• heading(): 90.0°"}),e.jsx("text",{x:"300",y:"125",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:'• pencolor(): "#38bdf8"'}),e.jsx("text",{x:"300",y:"145",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"• speed(): 6 (normal)"}),e.jsx("text",{x:"300",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Layer: Fractal Geometry"}),e.jsx("rect",{x:"555",y:"35",width:"240",height:"180",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"565",y:"60",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"🐢 Instance: t_susmita"}),e.jsx("text",{x:"565",y:"85",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"• pos(): (-120, -80)"}),e.jsx("text",{x:"565",y:"105",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"• heading(): 180.0°"}),e.jsx("text",{x:"565",y:"125",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:'• pencolor(): "#c084fc"'}),e.jsx("text",{x:"565",y:"145",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"• speed(): 3 (slow)"}),e.jsx("text",{x:"565",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Layer: Star Mandala"})]})]}):i==="shapesAnatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"TURTLE CURSOR SHAPES ANATOMY & STAMPING SYSTEM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"35",width:"115",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("polygon",{points:"87,70 78,85 96,85",fill:"#2dd4bf"}),e.jsx("circle",{cx:"87",cy:"80",r:"10",fill:"#2dd4bf"}),e.jsx("text",{x:"45",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"turtle"'}),e.jsx("text",{x:"40",y:"145",fill:"#bae6fd",fontSize:"7",children:"Actual icon"}),e.jsx("text",{x:"40",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Best for demos"}),e.jsx("rect",{x:"160",y:"35",width:"115",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("polygon",{points:"217,65 205,90 217,82 229,90",fill:"#38bdf8"}),e.jsx("text",{x:"180",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"arrow"'}),e.jsx("text",{x:"170",y:"145",fill:"#bae6fd",fontSize:"7",children:"Direction arrow"}),e.jsx("text",{x:"170",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Vector paths"}),e.jsx("rect",{x:"290",y:"35",width:"115",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("circle",{cx:"347",cy:"80",r:"12",fill:"#c084fc"}),e.jsx("text",{x:"310",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"circle"'}),e.jsx("text",{x:"300",y:"145",fill:"#bae6fd",fontSize:"7",children:"Smooth dot"}),e.jsx("text",{x:"300",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Particles"}),e.jsx("rect",{x:"420",y:"35",width:"115",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("rect",{x:"435",y:"68",width:"24",height:"24",rx:"2",fill:"#fbbf24"}),e.jsx("text",{x:"440",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"square"'}),e.jsx("text",{x:"430",y:"145",fill:"#bae6fd",fontSize:"7",children:"Box icon"}),e.jsx("text",{x:"430",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Grid stamping"}),e.jsx("rect",{x:"550",y:"35",width:"115",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("polygon",{points:"607,68 595,92 619,92",fill:"#f43f5e"}),e.jsx("text",{x:"565",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"triangle"'}),e.jsx("text",{x:"560",y:"145",fill:"#bae6fd",fontSize:"7",children:"Delta shape"}),e.jsx("text",{x:"560",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Aircrafts"}),e.jsx("rect",{x:"680",y:"35",width:"110",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("polygon",{points:"735,70 725,90 735,84 745,90",fill:"#34d399"}),e.jsx("text",{x:"695",y:"120",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:'"classic"'}),e.jsx("text",{x:"690",y:"145",fill:"#bae6fd",fontSize:"7",children:"Default arrow"}),e.jsx("text",{x:"690",y:"165",fill:"#a7f3d0",fontSize:"7",children:"Minimalist"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MULTI-AGENT SWARM SYNCHRONIZATION ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"190",rx:"6",fill:"#2e1065",stroke:"#c084fc"}),e.jsx("text",{x:"40",y:"55",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Synchronized Multi-Agent Dispatch Loop"}),e.jsx("text",{x:"40",y:"85",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"turtles = [t_mamata, t_mahima, t_susmita]"}),e.jsx("text",{x:"40",y:"110",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"for step in range(36):"}),e.jsx("text",{x:"60",y:"130",fill:"#5eead4",fontSize:"8",fontFamily:"monospace",children:"for t in turtles:"}),e.jsx("text",{x:"80",y:"150",fill:"#5eead4",fontSize:"8",fontFamily:"monospace",children:"t.forward(15)"}),e.jsx("text",{x:"80",y:"170",fill:"#5eead4",fontSize:"8",fontFamily:"monospace",children:"t.left(10)"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"190",rx:"6",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("circle",{cx:"605",cy:"125",r:"50",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3",fill:"none"}),e.jsx("circle",{cx:"605",cy:"125",r:"4",fill:"#ffffff"}),e.jsx("line",{x1:"605",y1:"125",x2:"655",y2:"125",stroke:"#2dd4bf",strokeWidth:"2"}),e.jsx("circle",{cx:"655",cy:"125",r:"5",fill:"#2dd4bf"}),e.jsx("text",{x:"665",y:"128",fill:"#2dd4bf",fontSize:"8",fontWeight:"bold",children:"Mamata (0°)"}),e.jsx("line",{x1:"605",y1:"125",x2:"580",y2:"82",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("circle",{cx:"580",cy:"82",r:"5",fill:"#38bdf8"}),e.jsx("text",{x:"520",y:"75",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Mahima (120°)"}),e.jsx("line",{x1:"605",y1:"125",x2:"580",y2:"168",stroke:"#c084fc",strokeWidth:"2"}),e.jsx("circle",{cx:"580",cy:"168",r:"5",fill:"#c084fc"}),e.jsx("text",{x:"520",y:"180",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Susmita (240°)"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Agent Turtle Swarm Studio"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Direct 3 independent synchronized turtle agents representing student pens across Barrackpore, Kolkata, and Ichapur. Rotate the swarm and change cursor shapes to observe parallel OOP state management:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>g(30),className:"p-2.5 bg-teal-950/80 border border-teal-600 rounded-xl text-xs font-bold text-teal-300 hover:bg-teal-900 transition-all text-center",children:"Rotate Swarm +30° ↺"}),e.jsx("button",{onClick:()=>g(-30),className:"p-2.5 bg-cyan-950/80 border border-cyan-600 rounded-xl text-xs font-bold text-cyan-300 hover:bg-cyan-900 transition-all text-center",children:"Rotate Swarm -30° ↻"}),e.jsx("button",{onClick:w,className:"p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all text-center",children:"Reset Swarm 🔄"}),e.jsx("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800",children:["turtle","circle","square","arrow"].map(t=>e.jsx("button",{onClick:()=>b(t),className:d("flex-1 py-1 rounded text-[10px] font-mono capitalize transition-all",o===t?"bg-teal-800 text-white font-bold":"text-slate-400 hover:text-white"),children:t},t))})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-150 -100 300 200",className:"w-full h-full",children:[e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#64748b"}),e.jsx("circle",{cx:"0",cy:"0",r:"80",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3",fill:"none"}),u.map(t=>{const n=(t.offsetDeg+p)%360,s=n*Math.PI/180,a=Math.round(t.radius*Math.cos(s)),l=Math.round(t.radius*Math.sin(s));return e.jsxs("g",{children:[e.jsx("line",{x1:"0",y1:"0",x2:a,y2:-l,stroke:t.color,strokeWidth:"2",strokeDasharray:"2 2"}),e.jsx("g",{transform:`translate(${a}, ${-l}) rotate(${-n})`,children:o==="turtle"?e.jsx("circle",{cx:"0",cy:"0",r:"6",fill:t.color,className:"animate-glow-teal"}):o==="circle"?e.jsx("circle",{cx:"0",cy:"0",r:"5",fill:t.color}):o==="square"?e.jsx("rect",{x:"-5",y:"-5",width:"10",height:"10",fill:t.color}):e.jsx("polygon",{points:"6,0 -4,-4 -2,0 -4,4",fill:t.color})}),e.jsxs("text",{x:a+8,y:-l+4,fill:t.color,fontSize:"7",fontWeight:"bold",children:[t.name.split(" ")[0]," (",a,", ",l,")"]})]},t.id)})]})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:u.map(t=>{const n=(t.offsetDeg+p)%360,s=n*Math.PI/180,a=Math.round(t.radius*Math.cos(s)),l=Math.round(t.radius*Math.sin(s));return e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs font-bold",style:{color:t.color},children:t.name}),e.jsxs("div",{className:"text-[11px] font-mono text-slate-300 mt-1",children:["Pos: (",a,", ",l,") | Heading: ",n,"°"]}),e.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:['Shape: "',o,'" | Speed: 0']})]},t.id)})})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Multi-Agent Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade Turtle object lifecycle labs covering OOP instantiation, swarm synchronization, cloning, and institutional layered drawing:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Explicit Object-Oriented Instantiation & State Encapsulation"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Initializing explicit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"turtle.Turtle()"})," instances, custom shapes, colors, and pen controls."]})]}),e.jsx(x,{fileModule:v,title:"turtle_instantiation_and_properties.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Multi-Agent Synchronized Swarm Drawing Orchestration"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Coordinating multiple concurrent drawing agents with phase offsets and vector kinematics."})]}),e.jsx(x,{fileModule:S,title:"multi_turtle_synchronized_agents.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Turtle Cloning, Cursor Stamping & Lifecycle State Reset"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Creating child branch agents with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"t.clone()"})," and managing canvas stamps with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"stamp()"}),"."]})]}),e.jsx(x,{fileModule:N,title:"turtle_lifecycle_cloning_and_destruction.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Collaborative Layered Canvas System Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Dividing complex geometric art across specialized agent layers for Mamata, Mahima, and Susmita."})]}),e.jsx(x,{fileModule:T,title:"institutional_multi_agent_drawing_orchestrator.py",highlightLines:[16,28,42,54]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Turtle Object Lifecycle Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Relying on Procedural Singleton"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"turtle.forward()"})," directly restricts your program to a single shared turtle cursor."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: turtle.forward(100)",`
`,"# BEST PRACTICE: t1 = turtle.Turtle()"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Expecting del t to Clear Drawn Lines"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Deleting a Python turtle variable does not erase its lines from the Tkinter canvas; call ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.clear()"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.reset()"})," instead."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: t.clear() before deleting reference"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Lag from Visible Cursors on Large Loops"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Leaving the turtle cursor visible during 1,000+ iteration mathematical loops causes massive animation lag."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: t.hideturtle(); t.speed(0)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Forgetting Stamp IDs"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Not saving the return integer of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"t.stamp()"})," prevents selectively clearing specific stamped shapes later."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: stamp_id = t.stamp()"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Turtle Object Management Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Instantiate Explicit Objects:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t = turtle.Turtle()"})," for all drawing tasks."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Leverage Cloning for Fractals:"})," Duplicate state branches seamlessly with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.clone()"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Divide Art into Layers:"})," Assign separate turtles to background grids, foreground geometry, and typography."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Manage Swarms with Iterators:"})," Store turtles in lists to step through synchronized multi-agent animation frames."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(j,{title:"Turtle Object Creation & Lifecycle FAQs",questions:z})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(y,{content:A,title:"Topic 3: Turtle Object Creation & Lifecycle Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(_,{note:"Treating each Turtle as an independent object is where true mastery begins. In our collaborative graphics hackathons in Barrackpore and Kolkata, Mamata, Mahima, and Susmita each programmed their own Turtle agent to draw complex geometric mandalas simultaneously on a single canvas. When code is modular and object-oriented, creativity has no limits!"})})]})]})}export{L as default};

import{b as i,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as l}from"./PythonFileLoader-hCi5osN-.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-BHhlgA96.js";import{T as g}from"./TeacherSukantaHui-CEPuAfsb.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const b=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 1: Understanding the Turtle screen: canvas, coordinate system (Cartesian plane), origin (0,0), and quadrants\r
# File: cartesian_plane_and_quadrant_geometry.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Programmatically drawing Cartesian axes and navigating all 4 quadrants.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class QuadrantPoint:\r
    quadrant_name: str\r
    x: float\r
    y: float\r
\r
    @property\r
    def detected_quadrant(self) -> str:\r
        if self.x > 0 and self.y > 0:\r
            return "Quadrant I (+X, +Y) [Top-Right]"\r
        elif self.x < 0 and self.y > 0:\r
            return "Quadrant II (-X, +Y) [Top-Left]"\r
        elif self.x < 0 and self.y < 0:\r
            return "Quadrant III (-X, -Y) [Bottom-Left]"\r
        elif self.x > 0 and self.y < 0:\r
            return "Quadrant IV (+X, -Y) [Bottom-Right]"\r
        elif self.x == 0 and self.y == 0:\r
            return "Origin (0, 0)"\r
        else:\r
            return "On Coordinate Axis"\r
\r
def test_quadrant_classification():\r
    print("   [...] Testing 4-Quadrant Cartesian Classification...")\r
    points = [\r
        QuadrantPoint("Barrackpore Campus", 150.0, 100.0),\r
        QuadrantPoint("Ichapur Center", -150.0, 100.0),\r
        QuadrantPoint("Jadavpur Lab", -150.0, -100.0),\r
        QuadrantPoint("Kolkata Headquarters", 150.0, -100.0),\r
        QuadrantPoint("Central Hub", 0.0, 0.0)\r
    ]\r
\r
    for p in points:\r
        print(f"   [PASS] Point '{p.quadrant_name}' at ({p.x}, {p.y}) -> {p.detected_quadrant}")\r
\r
    assert "Quadrant I" in points[0].detected_quadrant\r
    assert "Quadrant II" in points[1].detected_quadrant\r
    assert "Quadrant III" in points[2].detected_quadrant\r
    assert "Quadrant IV" in points[3].detected_quadrant\r
    assert "Origin" in points[4].detected_quadrant\r
\r
def main():\r
    print("=" * 75)\r
    print("[CARTESIAN PLANE] 4-Quadrant Geometric Classification")\r
    print("=" * 75)\r
\r
    test_quadrant_classification()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] The center origin (0, 0) splits the canvas into 4 distinct")\r
    print("           quadrants, matching standard Euclidean geometry.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,y=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 1: Understanding the Turtle screen: canvas, coordinate system (Cartesian plane), origin (0,0), and quadrants\r
# File: origin_and_coordinate_mapping.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating origin mechanics, coordinate inspection,\r
#              and Euclidean distance calculations.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class TurtleCoordinateInspector:\r
    current_x: float = 0.0\r
    current_y: float = 0.0\r
\r
    def goto(self, x: float, y: float) -> tuple[float, float]:\r
        self.current_x = float(x)\r
        self.current_y = float(y)\r
        return (self.current_x, self.current_y)\r
\r
    def xcor(self) -> float:\r
        return self.current_x\r
\r
    def ycor(self) -> float:\r
        return self.current_y\r
\r
    def pos(self) -> tuple[float, float]:\r
        return (self.current_x, self.current_y)\r
\r
    def distance(self, target_x: float, target_y: float) -> float:\r
        dx = target_x - self.current_x\r
        dy = target_y - self.current_y\r
        return round(math.sqrt(dx**2 + dy**2), 2)\r
\r
def test_coordinate_mapping():\r
    print("   [...] Testing Turtle Position Inspection & Distance Calculations...")\r
    inspector = TurtleCoordinateInspector()\r
\r
    # Start at origin (0, 0)\r
    assert inspector.pos() == (0.0, 0.0)\r
    print(f"   [PASS] 1. Initial position at Origin: {inspector.pos()}")\r
\r
    # Move to (120, 160) - 3-4-5 right triangle scaled by 40\r
    inspector.goto(120.0, 160.0)\r
    assert inspector.xcor() == 120.0\r
    assert inspector.ycor() == 160.0\r
    print(f"   [PASS] 2. Moved to position: ({inspector.xcor()}, {inspector.ycor()})")\r
\r
    # Distance back to origin should be 200.0 (sqrt(120^2 + 160^2) = 200)\r
    dist_to_origin = inspector.distance(0.0, 0.0)\r
    assert dist_to_origin == 200.0\r
    print(f"   [PASS] 3. Euclidean distance back to Origin: {dist_to_origin} units (3-4-5 Triangle Verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[COORDINATE MAPPING] Position Inspection & Euclidean Distance Formula")\r
    print("=" * 75)\r
\r
    test_coordinate_mapping()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Methods pos(), xcor(), ycor(), and distance() allow precise")\r
    print("           mathematical control over spatial relationships.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 1: Understanding the Turtle screen: canvas, coordinate system (Cartesian plane), origin (0,0), and quadrants\r
# File: screen_bounds_and_clipping.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Canvas dimensions, boundary calculations, and collision checkers.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class ScreenBoundaryAuditor:\r
    window_width: int = 800\r
    window_height: int = 600\r
\r
    @property\r
    def x_min(self) -> float:\r
        return -self.window_width / 2.0\r
\r
    @property\r
    def x_max(self) -> float:\r
        return self.window_width / 2.0\r
\r
    @property\r
    def y_min(self) -> float:\r
        return -self.window_height / 2.0\r
\r
    @property\r
    def y_max(self) -> float:\r
        return self.window_height / 2.0\r
\r
    def is_point_visible(self, x: float, y: float) -> bool:\r
        return (self.x_min <= x <= self.x_max) and (self.y_min <= y <= self.y_max)\r
\r
def test_screen_boundaries():\r
    print("   [...] Testing Screen Bounds & Viewport Visibility...")\r
    auditor = ScreenBoundaryAuditor(window_width=800, window_height=600)\r
\r
    assert auditor.x_min == -400.0 and auditor.x_max == 400.0\r
    assert auditor.y_min == -300.0 and auditor.y_max == 300.0\r
    print(f"   [PASS] 1. X bounds: [{auditor.x_min}, {auditor.x_max}] | Y bounds: [{auditor.y_min}, {auditor.y_max}]")\r
\r
    # Visible points\r
    assert auditor.is_point_visible(0.0, 0.0) is True\r
    assert auditor.is_point_visible(350.0, 250.0) is True\r
    assert auditor.is_point_visible(-390.0, -290.0) is True\r
    print("   [PASS] 2. In-bounds coordinates verified")\r
\r
    # Off-screen points\r
    assert auditor.is_point_visible(450.0, 100.0) is False\r
    assert auditor.is_point_visible(-100.0, -350.0) is False\r
    print("   [PASS] 3. Off-screen coordinates correctly detected for clipping")\r
\r
def main():\r
    print("=" * 75)\r
    print("[SCREEN BOUNDS] Viewport Dimension Analysis & Clipping Detection")\r
    print("=" * 75)\r
\r
    test_screen_boundaries()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Centered origin (0, 0) means coordinate limits equal +/- half")\r
    print("           the total window width and height.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 1: Understanding the Turtle screen: canvas, coordinate system (Cartesian plane), origin (0,0), and quadrants\r
# File: institutional_quadrant_campus_map_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Multi-campus quadrant map project placing student waypoints\r
#              for Mamata, Mahima, Abhronila, and Susmita across 4 quadrants.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CampusStudentLocation:\r
    student_name: str\r
    campus_name: str\r
    target_x: float\r
    target_y: float\r
\r
    @property\r
    def quadrant_name(self) -> str:\r
        if self.target_x > 0 and self.target_y > 0:\r
            return "Quadrant I (North-East / Top-Right)"\r
        elif self.target_x < 0 and self.target_y > 0:\r
            return "Quadrant II (North-West / Top-Left)"\r
        elif self.target_x < 0 and self.target_y < 0:\r
            return "Quadrant III (South-West / Bottom-Left)"\r
        elif self.target_x > 0 and self.target_y < 0:\r
            return "Quadrant IV (South-East / Bottom-Right)"\r
        return "Center Origin (0, 0)"\r
\r
class InstitutionalCampusQuadrantRegistry:\r
    """Manages student campus assignments across Cartesian quadrants."""\r
    def __init__(self):\r
        self.students: list[CampusStudentLocation] = []\r
\r
    def register(self, student: CampusStudentLocation):\r
        self.students.append(student)\r
\r
    def generate_quadrant_summary(self) -> list[str]:\r
        return [\r
            f"[QUADRANT MAP] {s.student_name} -> {s.campus_name} at ({s.target_x}, {s.target_y}) -> {s.quadrant_name}"\r
            for s in self.students\r
        ]\r
\r
def test_quadrant_map():\r
    print("   [...] Running Institutional Campus Quadrant Registry Test...")\r
    registry = InstitutionalCampusQuadrantRegistry()\r
\r
    # 1. Mamata in Barrackpore (Q1: +X, +Y)\r
    registry.register(CampusStudentLocation("Mamata", "Barrackpore Campus", 150.0, 100.0))\r
    # 2. Abhronila in Ichapur (Q2: -X, +Y)\r
    registry.register(CampusStudentLocation("Abhronila", "Ichapur Learning Center", -150.0, 100.0))\r
    # 3. Susmita in Jadavpur (Q3: -X, -Y)\r
    registry.register(CampusStudentLocation("Susmita", "Jadavpur Tech Lab", -150.0, -100.0))\r
    # 4. Mahima in Kolkata (Q4: +X, -Y)\r
    registry.register(CampusStudentLocation("Mahima", "Kolkata City Headquarters", 150.0, -100.0))\r
\r
    summary = registry.generate_quadrant_summary()\r
    assert len(summary) == 4\r
    for line in summary:\r
        print(f"   [PASS] {line}")\r
\r
    assert "Quadrant I" in summary[0]\r
    assert "Quadrant II" in summary[1]\r
    assert "Quadrant III" in summary[2]\r
    assert "Quadrant IV" in summary[3]\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Multi-Campus Student Quadrant Mapping Architecture")\r
    print("=" * 80)\r
\r
    test_quadrant_map()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Mapping real-world institutions onto Cartesian quadrants")\r
    print("           clarifies coordinate sign conventions for learners.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
      TOPIC 1: UNDERSTANDING THE TURTLE SCREEN (CANVAS, CARTESIAN PLANE & QUADRANTS)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 4 CARTESIAN QUADRANTS IN PYTHON TURTLE\r
--------------------------------------------------------------------------------\r
                          +Y (North / 90°)\r
                                 |\r
           Quadrant II           |           Quadrant I\r
       (-X, +Y) [Top-Left]       |       (+X, +Y) [Top-Right]\r
       e.g. Ichapur (-150, 100)  |       e.g. Barrackpore (150, 100)\r
                                 |\r
  -X (West / 180°) --------------+-------------- +X (East / 0°)\r
                              (0, 0)\r
                                 |\r
           Quadrant III          |           Quadrant IV\r
      (-X, -Y) [Bottom-Left]     |      (+X, -Y) [Bottom-Right]\r
      e.g. Jadavpur (-150, -100) |      e.g. Kolkata (150, -100)\r
                                 |\r
                          -Y (South / 270°)\r
\r
--------------------------------------------------------------------------------\r
2. ESSENTIAL POSITION & DISTANCE METHODS\r
--------------------------------------------------------------------------------\r
  t.pos()              → Returns current (x, y) tuple (e.g. (150.0, 100.0))\r
  t.xcor()             → Returns current X coordinate as float\r
  t.ycor()             → Returns current Y coordinate as float\r
  t.distance(x, y)     → Returns Euclidean distance sqrt((x2-x1)^2 + (y2-y1)^2)\r
  screen.window_width() → Total pixel width of the window\r
  screen.window_height()-> Total pixel height of the window\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 1: CANVAS COORDINATES & QUADRANTS\r
================================================================================\r
`,N=[{question:"Where is the coordinate origin (0, 0) located on a standard Python Turtle screen?",shortAnswer:"The origin (0, 0) is located at the exact geometric center of the Turtle screen window.",explanation:"Standard Cartesian coordinate system origin placement in Python Turtle.",hint:"Exact center of the window.",level:"basic",codeExample:`t = turtle.Turtle()
print(t.pos()) # (0.0, 0.0) at the center`},{question:"What are the algebraic sign characteristics of the 4 Cartesian quadrants in Turtle?",shortAnswer:"Quadrant I: (+X, +Y) [Top-Right]; Quadrant II: (-X, +Y) [Top-Left]; Quadrant III: (-X, -Y) [Bottom-Left]; Quadrant IV: (+X, -Y) [Bottom-Right].",explanation:"Cartesian quadrant signs and spatial orientations.",hint:"Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).",level:"basic",codeExample:"# Q1: (100, 100) | Q2: (-100, 100) | Q3: (-100, -100) | Q4: (100, -100)"},{question:"How does the Python Turtle coordinate system differ from standard HTML Canvas / Pygame coordinates?",shortAnswer:"In Turtle, (0, 0) is at the center and +Y points upwards (standard Cartesian math), whereas in HTML Canvas and Pygame, (0, 0) is at the top-left corner and +Y points downwards.",explanation:"Cartesian vs Computer Screen pixel grid coordinate differences.",hint:"Turtle origin is center with +Y pointing UP; HTML Canvas/Pygame origin is top-left with +Y pointing DOWN.",level:"basic",codeExample:"# Turtle: +Y is UP (North) | HTML Canvas: +Y is DOWN (South)"},{question:"How do you query the current X and Y coordinates of a Turtle object?",shortAnswer:"Using 't.xcor()' for X coordinate, 't.ycor()' for Y coordinate, or 't.pos()' (or 't.position()') to get the (x, y) tuple directly.",explanation:"Coordinate inspection methods in the turtle API.",hint:"t.xcor(), t.ycor(), and t.pos().",level:"basic",codeExample:`x = t.xcor()
y = t.ycor()
x, y = t.pos()`},{question:"How do you calculate the straight-line Euclidean distance between a turtle and another point (x, y)?",shortAnswer:"Using the built-in method 't.distance(x, y)' or 't.distance(other_turtle)', which computes sqrt((x2 - x1)^2 + (y2 - y1)^2).",explanation:"Euclidean distance calculation in the turtle module.",hint:"Use t.distance(x, y).",level:"basic",codeExample:"d = t.distance(150, 200) # Computes Euclidean distance"},{question:"How do you query the current width and height of the Turtle window?",shortAnswer:"Using 'screen.window_width()' and 'screen.window_height()'.",explanation:"Retrieving window viewport pixel dimensions.",hint:"screen.window_width() and screen.window_height().",level:"basic",codeExample:`w = screen.window_width()
h = screen.window_height()`},{question:"What are the X-axis coordinate limits on an 800-pixel wide Turtle canvas centered at (0, 0)?",shortAnswer:"The X coordinates range from -400 (leftmost edge) to +400 (rightmost edge).",explanation:"Centered coordinate range calculations from total window dimensions.",hint:"From -width/2 (-400) to +width/2 (+400).",level:"basic",codeExample:"# Width 800: X spans [-400, +400]"},{question:"What are the Y-axis coordinate limits on a 600-pixel high Turtle canvas centered at (0, 0)?",shortAnswer:"The Y coordinates range from -300 (bottom edge) to +300 (top edge).",explanation:"Centered coordinate range calculations for height.",hint:"From -height/2 (-300) to +height/2 (+300).",level:"basic",codeExample:"# Height 600: Y spans [-300, +300]"},{question:"How can you programmatically draw labeled X and Y axes across the center of the canvas?",shortAnswer:"Lift pen, move to (-width/2, 0), lower pen and draw line to (+width/2, 0) for X-axis; then lift pen, move to (0, -height/2), lower pen and draw line to (0, +height/2) for Y-axis.",explanation:"Algorithm for drawing central Cartesian axes on screen.",hint:"Draw line from (-w/2, 0) to (+w/2, 0) for X, and (0, -h/2) to (0, +h/2) for Y.",level:"moderate",codeExample:"t.penup(); t.goto(-300, 0); t.pendown(); t.goto(300, 0) # X-axis"},{question:"What happens if a turtle moves beyond the visible window boundaries?",shortAnswer:"Turtle Graphics allows drawing beyond the screen boundaries (coordinates can be (-5000, 5000)); drawings continue on an infinite virtual canvas, but parts outside the window are clipped from visible view.",explanation:"Virtual canvas coordinate space vs viewport clipping.",hint:"The virtual canvas is unbounded; content outside the screen is simply clipped from view.",level:"moderate",codeExample:"t.goto(1000, 1000) # Valid, but off-screen"},{question:"How do you check if a turtle's current position is within the visible canvas bounds?",shortAnswer:"By comparing 'abs(t.xcor()) <= screen.window_width() / 2' and 'abs(t.ycor()) <= screen.window_height() / 2'.",explanation:"Boundary detection logic for game walls or screen collision.",hint:"Check if abs(x) <= width/2 and abs(y) <= height/2.",level:"moderate",codeExample:"is_inside = abs(t.xcor()) <= w/2 and abs(t.ycor()) <= h/2"},{question:"How do you write text (like coordinate labels) on the Turtle canvas at a specific point?",shortAnswer:`Using 't.write(text, font=("Arial", 12, "normal"), align="center")'.`,explanation:"Writing text annotations on the turtle canvas.",hint:"Use t.write('text', font=(...), align='center').",level:"basic",codeExample:"t.write('Origin (0,0)', font=('Arial', 10, 'bold'), align='center')"},{question:"What coordinate does a turtle return to when 't.home()' is called?",shortAnswer:"It moves to the center origin (0, 0) and resets its heading direction to 0.0 degrees (East).",explanation:"The home() command effect on position and heading.",hint:"Moves to (0, 0) and sets heading to 0 degrees East.",level:"basic",codeExample:"t.home() # Position (0, 0), Heading 0.0"},{question:"In which quadrant would the point (-180, -220) lie?",shortAnswer:"Quadrant III (both X and Y are negative, located at the bottom-left area of the canvas).",explanation:"Quadrant identification for negative coordinates.",hint:"Both negative: Quadrant III (Bottom-Left).",level:"basic",codeExample:"# (-180, -220) → Quadrant III"},{question:"In which quadrant would the point (120, -95) lie?",shortAnswer:"Quadrant IV (positive X and negative Y, located at the bottom-right area of the canvas).",explanation:"Quadrant identification for (+X, -Y).",hint:"Positive X, negative Y: Quadrant IV (Bottom-Right).",level:"basic",codeExample:"# (120, -95) → Quadrant IV"},{question:"How do you change the coordinate world space using 'screen.setworldcoordinates()'?",shortAnswer:"Using 'screen.setworldcoordinates(llx, lly, urx, ury)' allows remapping the screen coordinates to custom bounds (e.g. Setting lower-left to (0, 0) and upper-right to (100, 100) or matching HTML Canvas).",explanation:"Custom coordinate space transformation in turtle.",hint:"screen.setworldcoordinates(min_x, min_y, max_x, max_y).",level:"pro",codeExample:"screen.setworldcoordinates(0, 0, 1000, 1000) # Remaps canvas space"},{question:"Why is Cartesian quadrant understanding essential before building Turtle games or animations?",shortAnswer:"Collision detection with walls, ball bouncing physics (inverting delta X or delta Y on boundary collision), and sprite positioning all depend directly on Cartesian coordinate math.",explanation:"Mathematical foundation for game physics and boundary collisions.",hint:"Essential for screen bouncing physics, wall collisions, and precise sprite positioning.",level:"basic",codeExample:"# Wall bounce: if abs(t.xcor()) > 380: dx = -dx"},{question:"What is the heading angle when a turtle points directly along the positive Y-axis (North)?",shortAnswer:"90 degrees (North).",explanation:"Standard compass heading angles in Turtle Graphics.",hint:"90 degrees points North along +Y.",level:"basic",codeExample:"t.setheading(90) # Points North"},{question:"What is the heading angle when a turtle points directly along the negative X-axis (West)?",shortAnswer:"180 degrees (West).",explanation:"Standard compass heading angles in Turtle Graphics.",hint:"180 degrees points West along -X.",level:"basic",codeExample:"t.setheading(180) # Points West"},{question:"What is the ultimate rule for navigating the Turtle Cartesian canvas?",shortAnswer:"Always remember that (0, 0) is at the center of the window, +X is East, -X is West, +Y is North, -Y is South, and querying 'pos()' or using 'distance()' gives exact geometric precision for any visual path.",explanation:"The complete foundation for 2D Cartesian navigation in Turtle Graphics.",hint:"(0, 0) at center + 4 quadrants + pos() inspection + distance() precision.",level:"basic",codeExample:"# Enterprise Turtle Coordinate Standard"}];function Q(){const d=i.useRef([]),[s,c]=i.useState("quadrantGrid"),[t,h]=i.useState({name:"Barrackpore (Mamata)",x:120,y:80,quadrant:"Quadrant I (+X, +Y) [Top-Right]",color:"#2dd4bf"}),m=[{name:"Barrackpore (Mamata)",x:120,y:80,quadrant:"Quadrant I (+X, +Y) [Top-Right]",color:"#2dd4bf"},{name:"Ichapur (Abhronila)",x:-120,y:80,quadrant:"Quadrant II (-X, +Y) [Top-Left]",color:"#38bdf8"},{name:"Jadavpur (Susmita)",x:-120,y:-80,quadrant:"Quadrant III (-X, -Y) [Bottom-Left]",color:"#a855f7"},{name:"Kolkata (Mahima)",x:120,y:-80,quadrant:"Quadrant IV (+X, -Y) [Bottom-Right]",color:"#facc15"},{name:"Central Origin",x:0,y:0,quadrant:"Origin Center (0, 0)",color:"#94a3b8"}],u=Math.round(Math.sqrt(t.x*t.x+t.y*t.y));i.useEffect(()=>{const a=new IntersectionObserver(r=>{r.forEach(x=>{x.isIntersecting&&x.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(r=>{r&&a.observe(r)}),()=>a.disconnect()},[]);const n=a=>{a&&!d.current.includes(a)&&d.current.push(a)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Understanding the Turtle Screen: ",e.jsx("span",{className:"text-teal-400",children:"Canvas & Quadrants"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the mathematical architecture of the 2D Cartesian coordinate plane in Python Turtle Graphics: center origin ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(0, 0)"}),", the four geometric quadrants (",e.jsx("span",{className:"text-teal-300 font-mono",children:"Q1 (+,+)"}),", ",e.jsx("span",{className:"text-cyan-300 font-mono",children:"Q2 (-,+)"}),", ",e.jsx("span",{className:"text-purple-300 font-mono",children:"Q3 (-,-)"}),", ",e.jsx("span",{className:"text-amber-300 font-mono",children:"Q4 (+,-)"}),"), position query methods (",e.jsx("code",{className:"text-teal-300 font-mono",children:"pos()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"xcor()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ycor()"}),"), Euclidean distance calculations (",e.jsx("code",{className:"text-teal-300 font-mono",children:"distance()"}),"), and screen boundary clipping."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 4 Cartesian Quadrants (Q1-Q4)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Center Origin (0, 0) Mechanics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📏 Euclidean Distance Formula"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🖼️ Viewport Dimensions & Clipping"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 2D Cartesian Coordinate Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Unlike raster graphics engines where (0,0) is placed at the top-left with an inverted Y-axis, Python Turtle uses standard mathematical Euclidean geometry with the origin placed at the screen center:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Quadrant I"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"(+X, +Y) [Top-Right]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"North-East sector. Both X and Y coordinates are positive (e.g. Barrackpore at +120, +80)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Quadrant II"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"(-X, +Y) [Top-Left]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"North-West sector. Negative X and positive Y coordinates (e.g. Ichapur at -120, +80)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Quadrant III"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"(-X, -Y) [Bottom-Left]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"South-West sector. Both X and Y coordinates are negative (e.g. Jadavpur at -120, -80)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Quadrant IV"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"(+X, -Y) [Bottom-Right]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"South-East sector. Positive X and negative Y coordinates (e.g. Kolkata at +120, -80)."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Querying Coordinates & Calculating Distances"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Inspect coordinates anytime via ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.pos()"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.xcor()"}),", and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.ycor()"}),". Calculate straight-line Euclidean displacement using ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"t.distance(target_x, target_y)"}),"!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Quadrants, Vectors & Viewport Boundaries"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("quadrantGrid"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="quadrantGrid"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"4 Cartesian Quadrants"}),e.jsx("button",{onClick:()=>c("distanceVectors"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="distanceVectors"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Distance & Vector Trigonometry"}),e.jsx("button",{onClick:()=>c("viewportBounds"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="viewportBounds"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Screen Bounds & Clipping Limits"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the full geometric layout of the Cartesian canvas:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="quadrantGrid"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE 4 CARTESIAN QUADRANTS & CAMPUS COORDINATE WAYPOINTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("line",{x1:"410",y1:"20",x2:"410",y2:"225",stroke:"#334155",strokeWidth:"2"}),e.jsx("line",{x1:"20",y1:"122",x2:"800",y2:"122",stroke:"#334155",strokeWidth:"2"}),e.jsx("rect",{x:"35",y:"30",width:"350",height:"80",rx:"4",fill:"#082f49",stroke:"#0284c7"}),e.jsx("text",{x:"45",y:"55",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"Quadrant II (-X, +Y) [Top-Left]"}),e.jsx("text",{x:"45",y:"75",fill:"#bae6fd",fontSize:"9",children:"📍 Ichapur Center: (-150, 100) • Abhronila"}),e.jsx("circle",{cx:"260",cy:"70",r:"5",fill:"#38bdf8"}),e.jsx("rect",{x:"435",y:"30",width:"350",height:"80",rx:"4",fill:"#042f2e",stroke:"#0d9488"}),e.jsx("text",{x:"445",y:"55",fill:"#2dd4bf",fontSize:"11",fontWeight:"bold",children:"Quadrant I (+X, +Y) [Top-Right]"}),e.jsx("text",{x:"445",y:"75",fill:"#a7f3d0",fontSize:"9",children:"📍 Barrackpore Campus: (150, 100) • Mamata"}),e.jsx("circle",{cx:"560",cy:"70",r:"5",fill:"#2dd4bf"}),e.jsx("rect",{x:"35",y:"135",width:"350",height:"80",rx:"4",fill:"#3b0764",stroke:"#a855f7"}),e.jsx("text",{x:"45",y:"160",fill:"#c084fc",fontSize:"11",fontWeight:"bold",children:"Quadrant III (-X, -Y) [Bottom-Left]"}),e.jsx("text",{x:"45",y:"180",fill:"#f3e8ff",fontSize:"9",children:"📍 Jadavpur Lab: (-150, -100) • Susmita"}),e.jsx("circle",{cx:"260",cy:"175",r:"5",fill:"#c084fc"}),e.jsx("rect",{x:"435",y:"135",width:"350",height:"80",rx:"4",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"445",y:"160",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"Quadrant IV (+X, -Y) [Bottom-Right]"}),e.jsx("text",{x:"445",y:"180",fill:"#fef3c7",fontSize:"9",children:"📍 Kolkata Headquarters: (150, -100) • Mahima"}),e.jsx("circle",{cx:"560",cy:"175",r:"5",fill:"#fbbf24"}),e.jsx("circle",{cx:"410",cy:"122",r:"5",fill:"#ffffff",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("text",{x:"418",y:"118",fill:"#ffffff",fontSize:"9",fontWeight:"bold",children:"Origin (0,0)"})]})]}):s==="distanceVectors"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"EUCLIDEAN DISTANCE & VECTOR DISPLACEMENT FROM ORIGIN (0, 0)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"190",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"40",y:"55",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Right Triangle Distance Theorem"}),e.jsx("line",{x1:"80",y1:"180",x2:"260",y2:"180",stroke:"#2dd4bf",strokeWidth:"3"}),e.jsx("line",{x1:"260",y1:"180",x2:"260",y2:"80",stroke:"#38bdf8",strokeWidth:"3"}),e.jsx("line",{x1:"80",y1:"180",x2:"260",y2:"80",stroke:"#facc15",strokeWidth:"3",strokeDasharray:"5 5"}),e.jsx("circle",{cx:"80",cy:"180",r:"4",fill:"#ffffff"}),e.jsx("text",{x:"60",y:"195",fill:"#bae6fd",fontSize:"8",children:"(0,0)"}),e.jsx("circle",{cx:"260",cy:"80",r:"4",fill:"#facc15"}),e.jsx("text",{x:"270",y:"80",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"(120, 160)"}),e.jsx("text",{x:"160",y:"195",fill:"#2dd4bf",fontSize:"8",children:"Δx = 120 px"}),e.jsx("text",{x:"268",y:"135",fill:"#38bdf8",fontSize:"8",children:"Δy = 160 px"}),e.jsx("text",{x:"140",y:"125",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"Distance = 200 px (3-4-5)"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"190",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"430",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Python Turtle Distance API"}),e.jsx("text",{x:"430",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"t.distance(120, 160)  # Returns 200.0"}),e.jsx("text",{x:"430",y:"115",fill:"#ccfbf1",fontSize:"8",children:"Mathematical Formula:"}),e.jsx("text",{x:"430",y:"135",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"distance = √((x₂ - x₁)² + (y₂ - y₁)²)"}),e.jsx("text",{x:"430",y:"170",fill:"#86efac",fontSize:"8",children:"• Computes straight-line displacement"}),e.jsx("text",{x:"430",y:"190",fill:"#86efac",fontSize:"8",children:"• Works with (x, y) coordinates or Turtle instances"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CANVAS BOUNDS (800x600) & VIEWPORT CLIPPING BEHAVIOR"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"160",y:"30",width:"500",height:"185",rx:"6",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"370",y:"25",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Top Edge: Y = +300 (height / 2)"}),e.jsx("text",{x:"360",y:"232",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Bottom Edge: Y = -300 (-height / 2)"}),e.jsx("text",{x:"25",y:"125",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Left: X = -400"}),e.jsx("text",{x:"680",y:"125",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Right: X = +400"}),e.jsx("circle",{cx:"410",cy:"122",r:"4",fill:"#2dd4bf"}),e.jsx("text",{x:"418",y:"120",fill:"#5eead4",fontSize:"8",children:"Visible Center (0, 0) ✅"}),e.jsx("line",{x1:"550",y1:"90",x2:"720",y2:"60",stroke:"#f43f5e",strokeWidth:"2",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"720",cy:"60",r:"4",fill:"#f43f5e"}),e.jsx("text",{x:"730",y:"65",fill:"#fca5a5",fontSize:"8",fontWeight:"bold",children:"Clipped (X: 520, Y: 180) ⚠️"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Quadrant Coordinate Explorer"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select student campus locations across Bengal to see coordinate sign classification, quadrant categorization, and real-time Euclidean distance from origin:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:m.map((a,r)=>e.jsx("button",{onClick:()=>h(a),className:o("p-2.5 rounded-xl border text-xs font-bold transition-all text-center",t.name===a.name?"bg-teal-950/80 border-teal-500 text-teal-200 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"),children:a.name},r))}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-teal-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-teal-400 font-medium",children:"Coordinates (X, Y)"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-teal-300",children:["(",t.x,", ",t.y,")"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-cyan-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-cyan-400 font-medium",children:"Cartesian Sector"}),e.jsx("div",{className:"text-xs font-bold text-cyan-300 mt-1",children:t.quadrant})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-purple-900/50 text-center",children:[e.jsx("div",{className:"text-[11px] text-purple-400 font-medium",children:"Euclidean Distance to (0,0)"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-purple-300",children:[u," px"]})]})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-200 -120 400 240",className:"w-full h-full",children:[e.jsx("line",{x1:"-190",y1:"0",x2:"190",y2:"0",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("line",{x1:"0",y1:"-110",x2:"0",y2:"110",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"175",y:"-6",fill:"#94a3b8",fontSize:"8",children:"+X"}),e.jsx("text",{x:"-190",y:"-6",fill:"#94a3b8",fontSize:"8",children:"-X"}),e.jsx("text",{x:"6",y:"-98",fill:"#94a3b8",fontSize:"8",children:"+Y"}),e.jsx("text",{x:"6",y:"105",fill:"#94a3b8",fontSize:"8",children:"-Y"}),e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#ffffff"}),e.jsx("text",{x:"5",y:"12",fill:"#64748b",fontSize:"7",children:"(0,0)"}),e.jsx("line",{x1:"0",y1:"0",x2:t.x,y2:-t.y,stroke:t.color,strokeWidth:"2.5",strokeDasharray:"4 4"}),e.jsx("circle",{cx:t.x,cy:-t.y,r:"6",fill:t.color,className:"animate-glow-teal"}),e.jsxs("text",{x:t.x+8,y:-t.y+4,fill:t.color,fontSize:"8",fontWeight:"bold",children:[t.name," (",t.x,", ",t.y,")"]})]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Quadrant Geometry Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade coordinate geometry labs covering quadrant classification, position inspection, boundary audits, and multi-campus waypoint maps:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Cartesian Plane & 4-Quadrant Geometric Classification"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Detecting and classifying points across Quadrants I, II, III, IV, axes, and central origin."})]}),e.jsx(l,{fileModule:b,title:"cartesian_plane_and_quadrant_geometry.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Coordinate Mapping, Position Queries & Euclidean Distance"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pos()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"xcor()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ycor()"}),", and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"distance()"})," with right-triangle verification."]})]}),e.jsx(l,{fileModule:y,title:"origin_and_coordinate_mapping.py",highlightLines:[16,28,42,54]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Screen Dimensions, Viewport Limits & Clipping Auditing"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Calculating bounding limits (",e.jsx("code",{className:"text-purple-300 font-mono",children:"+/- width/2"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"+/- height/2"}),") and auditing visible vs clipped coordinates."]})]}),e.jsx(l,{fileModule:w,title:"screen_bounds_and_clipping.py",highlightLines:[16,26,36]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Campus Quadrant Registry Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Multi-campus quadrant registry mapping Mamata, Abhronila, Susmita, and Mahima across Barrackpore, Ichapur, Jadavpur, and Kolkata."})]}),e.jsx(l,{fileModule:j,title:"institutional_quadrant_campus_map_case_study.py",highlightLines:[18,32,48,62]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Coordinate System Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Confusing Center (0, 0) with Top-Left"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Assuming (0, 0) is at the top-left corner (like Pygame or HTML Canvas) causes drawings to start at the center unintentionally."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# REMEMBER: Turtle (0, 0) is the center of the window!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Assuming Off-Screen Draws Crash"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Moving to (1000, 1000) does not raise an exception; it silently draws on the virtual canvas outside the visible viewport."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Check abs(x) <= width/2 and abs(y) <= height/2"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Neglecting Distance Formula"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Manually writing complex Pythagorean theorem code instead of leveraging the built-in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.distance(x, y)"})," method."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# BEST PRACTICE: dist = t.distance(x2, y2)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Sign Confusion in Quadrant III (-X, -Y)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Forgetting that moving to the bottom-left requires both negative X and negative Y values."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# Q3: t.goto(-150, -100) # South-West"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Coordinate Navigation Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Understand Centered Bounds:"})," Screen width $W$ means X coordinates span $[-W/2, +W/2]$."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Built-in Distance:"})," Utilize ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.distance(other)"})," for collision detection and navigation."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Return Home with t.home():"})," Move back to $(0,0)$ and reset heading to $0^\\circ$ East in one call."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Audit Viewport Boundaries:"})," Prevent sprites from wandering off-canvas by checking screen dimension limits."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(f,{title:"Cartesian Canvas, Coordinates & Quadrants FAQs",questions:N})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(p,{content:v,title:"Topic 1: Understanding the Turtle Screen & Quadrants Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{note:"Mastering the 4 quadrants is the secret key to all computer graphics, game physics, and robotic path planning. When Mamata, Abhronila, Susmita, and Mahima mapped our student centers across Barrackpore, Ichapur, Jadavpur, and Kolkata onto the four quadrants, the coordinate signs (+,+, -,+, -,-, +,-) became second nature. Keep these axes in mind as we begin drawing complex geometric polygons!"})})]})]})}export{Q as default};

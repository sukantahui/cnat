import{b as l,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as c}from"./PythonFileLoader-hCi5osN-.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-BHhlgA96.js";import{T as k}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const R=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 6: Rotation control: left(), right(), setheading(), degrees vs angles\r
# File: relative_rotations_left_and_right.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating relative rotation methods, aliases, and\r
#              exterior angle calculation for polygons.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class TurtleRotationState:\r
    heading_deg: float = 0.0\r
\r
    def left(self, angle: float):\r
        """Turn counter-clockwise."""\r
        self.heading_deg = (self.heading_deg + angle) % 360.0\r
\r
    def right(self, angle: float):\r
        """Turn clockwise."""\r
        self.heading_deg = (self.heading_deg - angle) % 360.0\r
\r
    def lt(self, angle: float):\r
        self.left(angle)\r
\r
    def rt(self, angle: float):\r
        self.right(angle)\r
\r
def calculate_polygon_exterior_angle(sides: int) -> float:\r
    """Computes turn angle required for regular polygon: 360 / N."""\r
    if sides < 3:\r
        raise ValueError("A polygon must have at least 3 sides.")\r
    return 360.0 / sides\r
\r
def test_relative_rotations():\r
    print("   [...] Testing Relative Rotations & Polygon Turning Angles...")\r
    t = TurtleRotationState()\r
\r
    # 1. Turn left 90° (from East to North)\r
    t.left(90.0)\r
    assert t.heading_deg == 90.0\r
    print(f"   [PASS] 1. left(90.0) -> New Heading: {t.heading_deg} deg (North)")\r
\r
    # 2. Turn right 45°\r
    t.right(45.0)\r
    assert t.heading_deg == 45.0\r
    print(f"   [PASS] 2. right(45.0) -> New Heading: {t.heading_deg} deg (North-East)")\r
\r
    # 3. Polygon exterior angles\r
    triangle_angle = calculate_polygon_exterior_angle(3)\r
    square_angle = calculate_polygon_exterior_angle(4)\r
    hexagon_angle = calculate_polygon_exterior_angle(6)\r
\r
    assert triangle_angle == 120.0\r
    assert square_angle == 90.0\r
    assert hexagon_angle == 60.0\r
    print(f"   [PASS] 3. Exterior Angles: Triangle={triangle_angle} deg, Square={square_angle} deg, Hexagon={hexagon_angle} deg")\r
\r
def main():\r
    print("=" * 75)\r
    print("[ROTATION] Relative Turning & Regular Polygon Exterior Angles")\r
    print("=" * 75)\r
\r
    test_relative_rotations()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] The exterior turn angle for any regular N-sided polygon is")\r
    print("           always exactly 360 / N degrees.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 6: Rotation control: left(), right(), setheading(), degrees vs angles\r
# File: absolute_setheading_and_radians_mode.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating setheading() absolute orientation and radians vs degrees mode.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class HeadingController:\r
    heading_deg: float = 0.0\r
    is_radians_mode: bool = False\r
\r
    def setheading(self, angle: float):\r
        if self.is_radians_mode:\r
            # Normalize in radians [0, 2*pi)\r
            full_circle = 2.0 * math.pi\r
            self.heading_deg = math.degrees(angle % full_circle)\r
        else:\r
            # Normalize in degrees [0, 360)\r
            self.heading_deg = angle % 360.0\r
\r
    def seth(self, angle: float):\r
        self.setheading(angle)\r
\r
    def switch_to_radians(self):\r
        self.is_radians_mode = True\r
\r
    def switch_to_degrees(self):\r
        self.is_radians_mode = False\r
\r
def test_heading_modes():\r
    print("   [...] Testing Absolute setheading() & Radians Mode...")\r
    ctrl = HeadingController()\r
\r
    # 1. Degrees Mode: Set 180° West\r
    ctrl.setheading(180.0)\r
    assert ctrl.heading_deg == 180.0\r
    print(f"   [PASS] 1. Degrees Mode: setheading(180.0) -> Heading: {ctrl.heading_deg} deg (West)")\r
\r
    # 2. Degrees Mode: Normalize 450° to 90°\r
    ctrl.setheading(450.0)\r
    assert ctrl.heading_deg == 90.0\r
    print(f"   [PASS] 2. Modulo Normalization: setheading(450.0) -> Heading: {ctrl.heading_deg} deg (North)")\r
\r
    # 3. Radians Mode: Set pi/2 (90°)\r
    ctrl.switch_to_radians()\r
    ctrl.setheading(math.pi / 2.0)\r
    assert math.isclose(ctrl.heading_deg, 90.0, abs_tol=1e-4)\r
    print(f"   [PASS] 3. Radians Mode: setheading(pi/2) -> Converted Heading: {ctrl.heading_deg:.1f} deg (North)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[HEADING CONTROL] Absolute setheading() & Radians/Degrees Switching")\r
    print("=" * 75)\r
\r
    test_heading_modes()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] setheading() sets absolute orientation directly, while")\r
    print("           screen.radians() enables trigonometric calculus angles.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 6: Rotation control: left(), right(), setheading(), degrees vs angles\r
# File: angular_normalization_and_polygon_geometry.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Interior vs exterior polygon angles and star polygon turning geometry.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class PolygonGeometrySpec:\r
    name: str\r
    sides_count: int\r
    interior_angle_deg: float\r
    exterior_turn_angle_deg: float\r
\r
def compute_regular_polygon_spec(name: str, n: int) -> PolygonGeometrySpec:\r
    interior = (n - 2) * 180.0 / n\r
    exterior = 360.0 / n\r
    return PolygonGeometrySpec(name, n, interior, exterior)\r
\r
def compute_star_polygon_turn_angle(points: int, density: int = 2) -> float:\r
    """Computes turning angle for {p/q} star polygon: 360 * density / points."""\r
    return (360.0 * density) / points\r
\r
def test_polygon_geometry():\r
    print("   [...] Testing Interior vs Exterior Polygon Angles & Stars...")\r
    \r
    # 1. Equilateral Triangle (N=3)\r
    tri = compute_regular_polygon_spec("Triangle", 3)\r
    assert tri.interior_angle_deg == 60.0 and tri.exterior_turn_angle_deg == 120.0\r
    print(f"   [PASS] 1. {tri.name}: Interior={tri.interior_angle_deg} deg | Turn (Exterior)={tri.exterior_turn_angle_deg} deg")\r
\r
    # 2. Regular Octagon (N=8)\r
    octa = compute_regular_polygon_spec("Octagon", 8)\r
    assert octa.interior_angle_deg == 135.0 and octa.exterior_turn_angle_deg == 45.0\r
    print(f"   [PASS] 2. {octa.name}: Interior={octa.interior_angle_deg} deg | Turn (Exterior)={octa.exterior_turn_angle_deg} deg")\r
\r
    # 3. 5-Pointed Star (Pentagram {5/2})\r
    star_turn = compute_star_polygon_turn_angle(5, 2)\r
    assert star_turn == 144.0\r
    print(f"   [PASS] 3. 5-Pointed Star: Tip Turn Angle = {star_turn} deg")\r
\r
def main():\r
    print("=" * 75)\r
    print("[POLYGON GEOMETRY] Interior Angles vs Exterior Turning Angles & Stars")\r
    print("=" * 75)\r
\r
    test_polygon_geometry()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Turtles always turn by the EXTERIOR angle (180 - interior)")\r
    print("           to complete a closed polygon traversal.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 6: Rotation control: left(), right(), setheading(), degrees vs angles\r
# File: institutional_multi_angle_compass_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Multi-directional campus compass navigator orienting students\r
#              along radial bearings between Barrackpore, Kolkata, and Ichapur.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CampusRadialBearing:\r
    origin_station: str\r
    target_student: str\r
    target_location: str\r
    bearing_deg: float\r
    distance_km: float\r
\r
    def get_compass_quadrant_label(self) -> str:\r
        deg = self.bearing_deg % 360.0\r
        if deg == 0.0:\r
            return "East (+X)"\r
        elif deg == 90.0:\r
            return "North (+Y)"\r
        elif deg == 180.0:\r
            return "West (-X)"\r
        elif deg == 270.0:\r
            return "South (-Y)"\r
        elif 0.0 < deg < 90.0:\r
            return "North-East (Q1)"\r
        elif 90.0 < deg < 180.0:\r
            return "North-West (Q2)"\r
        elif 180.0 < deg < 270.0:\r
            return "South-West (Q3)"\r
        else:\r
            return "South-East (Q4)"\r
\r
def test_compass_navigator():\r
    print("   [...] Running Institutional Campus Radial Compass Navigator Test...")\r
    \r
    # 1. Mamata at Barrackpore -> Kolkata (Bearing: 45.0 deg)\r
    b1 = CampusRadialBearing("Barrackpore Hub", "Mahima", "Kolkata Tech Center", 45.0, 22.5)\r
    assert b1.get_compass_quadrant_label() == "North-East (Q1)"\r
    print(f"   [PASS] 1. Dispatch to {b1.target_student} ({b1.target_location}) at bearing {b1.bearing_deg} deg -> Quadrant: {b1.get_compass_quadrant_label()}")\r
\r
    # 2. Mamata at Barrackpore -> Ichapur (Bearing: 180.0 deg)\r
    b2 = CampusRadialBearing("Barrackpore Hub", "Susmita", "Ichapur Lab", 180.0, 8.0)\r
    assert b2.get_compass_quadrant_label() == "West (-X)"\r
    print(f"   [PASS] 2. Dispatch to {b2.target_student} ({b2.target_location}) at bearing {b2.bearing_deg} deg -> Quadrant: {b2.get_compass_quadrant_label()}")\r
\r
    # 3. Mamata at Barrackpore -> Jadavpur (Bearing: 270.0 deg)\r
    b3 = CampusRadialBearing("Barrackpore Hub", "Debangshu", "Jadavpur Center", 270.0, 32.0)\r
    assert b3.get_compass_quadrant_label() == "South (-Y)"\r
    print(f"   [PASS] 3. Dispatch to {b3.target_student} ({b3.target_location}) at bearing {b3.bearing_deg} deg -> Quadrant: {b3.get_compass_quadrant_label()}")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Campus Radial Compass Navigator")\r
    print("=" * 80)\r
\r
    test_compass_navigator()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Mapping radial bearings with setheading() allows precise")\r
    print("           multi-agent navigation across institutional campus networks.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,W=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
        TOPIC 6: ROTATION CONTROL (LEFT, RIGHT, SETHEADING, DEGREES VS ANGLES)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ROTATION COMMANDS & CONVENTIONS\r
--------------------------------------------------------------------------------\r
  1. Relative Rotations:\r
     - t.left(angle) / t.lt(angle)   → Rotates counter-clockwise by 'angle' degrees\r
     - t.right(angle) / t.rt(angle) → Rotates clockwise by 'angle' degrees\r
\r
  2. Absolute Orientation:\r
     - t.setheading(angle) / t.seth(angle) → Sets orientation directly (0° East, 90° North, 180° West, 270° South)\r
\r
  3. The Regular Polygon Exterior Angle Formula:\r
     - turn_angle = 360° / N\r
       • Equilateral Triangle (N=3): turn_angle = 360 / 3 = 120°\r
       • Square (N=4):               turn_angle = 360 / 4 = 90°\r
       • Pentagon (N=5):             turn_angle = 360 / 5 = 72°\r
       • Hexagon (N=6):              turn_angle = 360 / 6 = 60°\r
       • Octagon (N=8):              turn_angle = 360 / 8 = 45°\r
       • Circle approximation (N=360): turn_angle = 360 / 360 = 1°\r
\r
--------------------------------------------------------------------------------\r
2. ANGLE MODES\r
--------------------------------------------------------------------------------\r
  - screen.degrees() → Default mode (full circle is 360.0 degrees)\r
  - screen.radians() → Changes mode so full circle is 2*pi (6.28318...) radians\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 6: ROTATION CONTROL\r
================================================================================\r
`,M=[{question:"What rotational directions do 't.left(angle)' and 't.right(angle)' represent in Python Turtle?",shortAnswer:"'t.left(angle)' rotates counter-clockwise (increasing the heading angle), while 't.right(angle)' rotates clockwise (decreasing the heading angle).",explanation:"Standard rotation direction conventions in Turtle Graphics.",hint:"left() = counter-clockwise (increasing angle); right() = clockwise (decreasing angle).",level:"basic",codeExample:`t.left(90)  # Counter-clockwise turn
t.right(90) # Clockwise turn`},{question:"What is the Exterior Angle Theorem for drawing regular $N$-sided polygons?",shortAnswer:"To draw a closed regular $N$-sided polygon, the turtle must turn by an exterior angle of $\\theta = 360^\\circ / N$ at each vertex.",explanation:"Total turning theorem for closed simple polygons.",hint:"turn_angle = 360 / N.",level:"basic",codeExample:"# Equilateral Triangle: 360/3 = 120° | Square: 360/4 = 90° | Hexagon: 360/6 = 60°"},{question:"Why must a turtle turn 120° to draw an equilateral triangle whose interior angles are 60°?",shortAnswer:"The turtle turns by the exterior angle ($180^\\circ - 60^\\circ = 120^\\circ$) to change its heading along the next side, completing a total rotation of $360^\\circ$ around the polygon.",explanation:"Interior vs exterior turning angle geometry.",hint:"The turtle turns by the exterior angle: 180° - 60° = 120°.",level:"basic",codeExample:`for _ in range(3):
    t.forward(100)
    t.left(120) # 120° exterior turn creates 60° interior angle`},{question:"What are the shorthand aliases for 'left()', 'right()', and 'setheading()'?",shortAnswer:"'t.lt()' for 'left()', 't.rt()' for 'right()', and 't.seth()' for 'setheading()'.",explanation:"Shorthand aliases in the turtle rotation API.",hint:"lt(), rt(), and seth().",level:"basic",codeExample:`t.lt(45)   # left(45)
t.rt(90)   # right(90)
t.seth(0)  # setheading(0)`},{question:"How does 'setheading(angle)' differ from 'left(angle)' or 'right(angle)'?",shortAnswer:"'setheading(angle)' is an absolute orientation setting (e.g. Setting direction directly to 90° North regardless of previous angle), whereas 'left()' and 'right()' are relative rotational turns added to or subtracted from the current heading.",explanation:"Absolute heading orientation vs relative rotational turning.",hint:"setheading() is absolute direction; left()/right() are relative additions/subtractions.",level:"basic",codeExample:`t.setheading(90) # Absolute North
t.left(30)       # Relative turn to 120°`},{question:"How do you switch the angular unit mode in Python Turtle to radians?",shortAnswer:"Using 'screen.radians()', which sets the full circle angle to $2\\pi$ ($6.28318...$ radians); switch back to degrees using 'screen.degrees()'.",explanation:"Switching between degrees and radians modes.",hint:"screen.radians() for radians mode; screen.degrees() for standard degrees.",level:"moderate",codeExample:`screen.radians()
t.setheading(3.14159 / 2) # Points North (pi/2 radians)`},{question:"What is the exterior turning angle for drawing a regular hexagon ($N=6$)?",shortAnswer:"60 degrees ($360^\\circ / 6 = 60^\\circ$).",explanation:"Exterior angle calculation for hexagon.",hint:"360 / 6 = 60 degrees.",level:"basic",codeExample:`for _ in range(6):
    t.forward(80)
    t.left(60)`},{question:"What is the exterior turning angle for drawing a regular pentagon ($N=5$)?",shortAnswer:"72 degrees ($360^\\circ / 5 = 72^\\circ$).",explanation:"Exterior angle calculation for pentagon.",hint:"360 / 5 = 72 degrees.",level:"basic",codeExample:`for _ in range(5):
    t.forward(100)
    t.left(72)`},{question:"What is the exterior turning angle for drawing a regular octagon ($N=8$)?",shortAnswer:"45 degrees ($360^\\circ / 8 = 45^\\circ$).",explanation:"Exterior angle calculation for octagon.",hint:"360 / 8 = 45 degrees.",level:"basic",codeExample:`for _ in range(8):
    t.forward(60)
    t.left(45)`},{question:"How do you approximate a circle using a loop of small forward steps and angle turns?",shortAnswer:"'for _ in range(360): t.forward(1); t.left(1)' (360 1-pixel steps turning 1 degree each).",explanation:"Polygon approximation of circles in Turtle Graphics.",hint:"360 steps of forward(1) and left(1).",level:"basic",codeExample:`for _ in range(360):
    t.forward(1)
    t.left(1) # Draws circle of circumference ~360`},{question:"What happens if a turtle at 350° executes 't.left(20)'?",shortAnswer:"The new heading angle is normalized to 10.0° ($370^\\circ \\pmod{360^\\circ} = 10^\\circ$).",explanation:"Modulo 360 degree normalization across the full circle boundary.",hint:"350 + 20 = 370, which normalizes to 10.0 degrees.",level:"basic",codeExample:`t.setheading(350)
t.left(20)
assert t.heading() == 10.0`},{question:"What happens if a turtle at 10° executes 't.right(20)'?",shortAnswer:"The new heading angle is normalized to 350.0° ($-10^\\circ \\pmod{360^\\circ} = 350^\\circ$).",explanation:"Modulo 360 degree normalization for negative rotation.",hint:"10 - 20 = -10, which normalizes to 350.0 degrees.",level:"basic",codeExample:`t.setheading(10)
t.right(20)
assert t.heading() == 350.0`},{question:"Can you pass negative angles to 'left()' and 'right()'?",shortAnswer:"Yes; 't.left(-90)' rotates 90 degrees clockwise (equivalent to 't.right(90)'), and 't.right(-90)' rotates 90 degrees counter-clockwise (equivalent to 't.left(90)').",explanation:"Signed rotational angles.",hint:"Yes, negative left turns right, and negative right turns left.",level:"basic",codeExample:"t.left(-90) # Equivalent to t.right(90)"},{question:"How do you calculate the turning angle to draw a 5-pointed star (pentagram)?",shortAnswer:"A 5-pointed star turns by 144 degrees at each tip ($720^\\circ / 5 = 144^\\circ$, completing 2 full revolutions).",explanation:"Star polygon total turning angle formula.",hint:"720 / 5 = 144 degrees.",level:"moderate",codeExample:`for _ in range(5):
    t.forward(150)
    t.right(144) # Star vertex turn`},{question:"How do you point the turtle towards a specific coordinate (target_x, target_y)?",shortAnswer:"Using 't.setheading(t.towards(target_x, target_y))'.",explanation:"Combining towards() and setheading() to aim at target coordinates.",hint:"Use t.setheading(t.towards(x, y)).",level:"moderate",codeExample:`angle = t.towards(100, 100)
t.setheading(angle) # Aims directly at (100, 100)`},{question:"How do you reset the turtle's orientation to East (0°) without moving its position?",shortAnswer:"By calling 't.setheading(0)' (or 't.seth(0)').",explanation:"Resetting orientation in place.",hint:"Use t.setheading(0).",level:"basic",codeExample:"t.setheading(0) # Re-orients East"},{question:"Why does accumulating fractional rotational turns in loops cause slight geometric distortion?",shortAnswer:"Infinitesimal IEEE 754 floating-point rounding errors in degree-to-radian trigonometric transformations accumulate over hundreds of iterations; using exact integer angles or normalizing prevents drift.",explanation:"Accumulative rotational precision in procedural art.",hint:"IEEE 754 float rounding errors; normalize with modulo 360.",level:"moderate",codeExample:"# Normalize heading to eliminate drift"},{question:"What is the total sum of exterior angles for any simple closed convex polygon?",shortAnswer:"Exactly 360 degrees ($2\\pi$ radians), regardless of the number of sides $N$.",explanation:"Total turning theorem for closed plane curves.",hint:"Always 360 degrees for any simple closed convex polygon.",level:"basic",codeExample:"# Total exterior sum = 360° always"},{question:"How do you generate a colorful spiral mandala by combining incremental forward steps with constant angle turns?",shortAnswer:"'for i in range(100): t.forward(i * 3); t.left(59)' (turning an angle like 59° or 91° creates intricate multi-arm spiraling rosettes).",explanation:"Spiral rosette generation algorithm.",hint:"Increase step length incrementally inside a loop while turning a fixed angle.",level:"moderate",codeExample:`for i in range(100):
    t.forward(i * 2)
    t.left(59) # Generates beautiful spiral`},{question:"What is the ultimate golden rule of Rotation Control in Turtle Graphics?",shortAnswer:"Always use the exterior angle theorem ($360^\\circ / N$) when constructing regular polygons, choose `left()` / `right()` for relative procedural shapes and `setheading()` for absolute compass bearings, and remember that 0° is East, 90° is North, 180° is West, and 270° is South.",explanation:"The complete standard for rotational geometry in Python Turtle.",hint:"turn_angle = 360/N + relative vs absolute + compass quadrant conventions.",level:"basic",codeExample:"# Enterprise Rotation Control Standard"}];function B(){const g=l.useRef([]),[o,x]=l.useState("polygonTurns"),[f,_]=l.useState("triangle"),[h,m]=l.useState(0),u={triangle:{name:"Equilateral Triangle",sides:3,turnAngle:120,interior:60,sideLength:70},square:{name:"Square",sides:4,turnAngle:90,interior:90,sideLength:60},pentagon:{name:"Regular Pentagon",sides:5,turnAngle:72,interior:108,sideLength:48},hexagon:{name:"Regular Hexagon",sides:6,turnAngle:60,interior:120,sideLength:40},star:{name:"5-Pointed Star",sides:5,turnAngle:144,interior:36,sideLength:70}},n=u[f],j=()=>{m(t=>(t+1)%(n.sides+1))},w=t=>{_(t),m(0)},v=()=>{const t=[{x:0,y:0}];let a=0,s=0,i=0;for(let y=0;y<h;y++){const N=i*Math.PI/180;a+=n.sideLength*Math.cos(N),s+=n.sideLength*Math.sin(N),t.push({x:a,y:s}),i=(i+n.turnAngle)%360}return{points:t,curX:a,curY:s,curHeading:i}},{points:p,curX:T,curY:S,curHeading:b}=v();l.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return g.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const r=t=>{t&&!g.current.includes(t)&&g.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Rotation Control: ",e.jsx("span",{className:"text-teal-400",children:"left(), right(), setheading() & Angles"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master rotational kinematics and angular geometry in Python Turtle: relative turns with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"left()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"lt()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"right()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"rt()"}),", absolute compass orientation with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"setheading()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"seth()"}),", the Exterior Angle Theorem for regular polygons (",e.jsx("code",{className:"text-teal-300 font-mono",children:"turn = 360° / N"}),"), switching angle modes between degrees and radians (",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.radians()"}),"), and modulo 360 angular normalization."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"↺ left() / right() Relative Turns"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧭 setheading() Absolute Bearing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Polygon Exterior Theorem (360°/N)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🥧 Degrees vs Radians Mode"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Geometry of Rotations & Turning Angles"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Turning in Turtle Graphics involves understanding the difference between interior geometric angles and exterior vertex turns:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Relative Turns"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"left(a), right(a)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Rotates counter-clockwise (",e.jsx("code",{className:"text-teal-300 font-mono",children:"left"}),") or clockwise (",e.jsx("code",{className:"text-teal-300 font-mono",children:"right"}),") by delta angle."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Absolute Bearing"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"setheading(angle)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Sets absolute orientation directly: 0° East, 90° North, 180° West, 270° South."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Exterior Theorem"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"turn = 360° / N"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"To complete a closed regular polygon of $N$ sides, the turtle turns $360^\\circ / N$ at every corner."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Angle Modes"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"radians() & degrees()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Switch between 360° sexagesimal degrees and $2\\pi$ trigonometric calculus radians."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Exterior Turning Angle Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When drawing an equilateral triangle, many beginners mistakenly write ",e.jsx("code",{className:"text-rose-400 font-mono",children:"t.left(60)"})," because a triangle's interior angle is 60°. But the turtle must turn by the ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"EXTERIOR ANGLE: 180° - 60° = 120°"})," to continue drawing the next side!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Polygon Turning Geometry & Star Angles"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("polygonTurns"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="polygonTurns"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Polygon Exterior Angles"}),e.jsx("button",{onClick:()=>x("starGeometry"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="starGeometry"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"5-Pointed Star (144° Turn)"}),e.jsx("button",{onClick:()=>x("degreesVsRadians"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="degreesVsRadians"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Degrees vs Radians Modes"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining exterior turning angles, star polygon vertex formulas, and trigonometric angle modes:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="polygonTurns"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"REGULAR POLYGON EXTERIOR TURNING FORMULA: TURN = 360° / N"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"30",width:"175",height:"190",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Triangle (N=3)"}),e.jsx("polygon",{points:"112,85 70,150 155,150",fill:"none",stroke:"#2dd4bf",strokeWidth:"2"}),e.jsx("text",{x:"35",y:"180",fill:"#ccfbf1",fontSize:"8",children:"• Interior: 60°"}),e.jsx("text",{x:"35",y:"200",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Turn: 360/3 = 120° ✅"}),e.jsx("rect",{x:"220",y:"30",width:"175",height:"190",rx:"6",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"230",y:"55",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"Square (N=4)"}),e.jsx("rect",{x:"267",y:"90",width:"60",height:"60",fill:"none",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"230",y:"180",fill:"#bae6fd",fontSize:"8",children:"• Interior: 90°"}),e.jsx("text",{x:"230",y:"200",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Turn: 360/4 = 90° ✅"}),e.jsx("rect",{x:"415",y:"30",width:"175",height:"190",rx:"6",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("text",{x:"425",y:"55",fill:"#c084fc",fontSize:"11",fontWeight:"bold",children:"Pentagon (N=5)"}),e.jsx("polygon",{points:"502,85 540,115 525,155 480,155 465,115",fill:"none",stroke:"#c084fc",strokeWidth:"2"}),e.jsx("text",{x:"425",y:"180",fill:"#d8b4fe",fontSize:"8",children:"• Interior: 108°"}),e.jsx("text",{x:"425",y:"200",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Turn: 360/5 = 72° ✅"}),e.jsx("rect",{x:"610",y:"30",width:"185",height:"190",rx:"6",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"620",y:"55",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"Hexagon (N=6)"}),e.jsx("polygon",{points:"702,85 737,105 737,140 702,160 667,140 667,105",fill:"none",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("text",{x:"620",y:"180",fill:"#fef3c7",fontSize:"8",children:"• Interior: 120°"}),e.jsx("text",{x:"620",y:"200",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Turn: 360/6 = 60° ✅"})]})]}):o==="starGeometry"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"5-POINTED STAR (PENTAGRAM) TURNING ANGLE GEOMETRY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"185",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("polygon",{points:"215,50 235,110 295,110 245,145 265,200 215,165 165,200 185,145 135,110 195,110",fill:"#0369a1",stroke:"#38bdf8",strokeWidth:"2"}),e.jsxs("text",{x:"40",y:"55",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:["Star ","{5/2}"," Polygon"]}),e.jsx("text",{x:"40",y:"200",fill:"#bae6fd",fontSize:"8",children:"Completes 2 full revolutions (720° total)"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"185",rx:"6",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("text",{x:"435",y:"55",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Mathematical Derivation"}),e.jsx("text",{x:"435",y:"85",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"Total Turning = 2 * 360° = 720°"}),e.jsx("text",{x:"435",y:"110",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"Turn per vertex = 720° / 5 = 144°"}),e.jsx("text",{x:"435",y:"145",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:"for _ in range(5):"}),e.jsx("text",{x:"455",y:"165",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:"t.forward(150)"}),e.jsx("text",{x:"455",y:"185",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:"t.right(144) # 144° Tip Turn"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DEGREES VS RADIANS ANGLE MODES IN PYTHON TURTLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"185",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"45",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"screen.degrees() [Default]"}),e.jsx("text",{x:"45",y:"85",fill:"#ccfbf1",fontSize:"9",children:"• Full circle = 360.0 degrees"}),e.jsx("text",{x:"45",y:"110",fill:"#ccfbf1",fontSize:"9",children:"• East = 0.0° | North = 90.0°"}),e.jsx("text",{x:"45",y:"135",fill:"#ccfbf1",fontSize:"9",children:"• West = 180.0° | South = 270.0°"}),e.jsx("text",{x:"45",y:"175",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"Best for visual art and school geometry ✅"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"185",rx:"6",fill:"#2e1065",stroke:"#c084fc"}),e.jsx("text",{x:"435",y:"55",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"screen.radians() [Trigonometric]"}),e.jsx("text",{x:"435",y:"85",fill:"#d8b4fe",fontSize:"9",children:"• Full circle = 2 * pi (6.28318...) radians"}),e.jsx("text",{x:"435",y:"110",fill:"#d8b4fe",fontSize:"9",children:"• East = 0.0 rad | North = pi/2 rad"}),e.jsx("text",{x:"435",y:"135",fill:"#d8b4fe",fontSize:"9",children:"• West = pi rad | South = 3*pi/2 rad"}),e.jsx("text",{x:"435",y:"175",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"Best for scientific calculus & physics 🔬"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Angle Polygon & Star Studio"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a regular polygon or star shape. Step through each edge and turn in real time to observe the exact exterior angle rotation in action:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:Object.keys(u).map(t=>e.jsx("button",{onClick:()=>w(t),className:d("p-2.5 rounded-xl border text-xs font-bold capitalize transition-all text-center",f===t?"bg-teal-900/80 border-teal-500 text-teal-200 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:u[t].name},t))}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 p-3 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Shape: ",e.jsx("strong",{className:"text-teal-300",children:n.name})," | Exterior Turn: ",e.jsxs("strong",{className:"text-cyan-300",children:[n.turnAngle,"°"]})," | Step: ",e.jsxs("strong",{className:"text-purple-300",children:[h," / ",n.sides]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:j,className:"px-4 py-1.5 bg-teal-950/80 border border-teal-600 rounded-lg text-xs font-bold text-teal-300 hover:bg-teal-900 transition-all",children:h>=n.sides?"Restart Shape ↺":"Draw Next Side ⏩"}),e.jsx("button",{onClick:()=>m(0),className:"px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-bold text-slate-300 hover:bg-slate-700 transition-all",children:"Reset"})]})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-100 -75 200 150",className:"w-full h-full",children:[e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#64748b"}),e.jsx("line",{x1:"-90",y1:"0",x2:"90",y2:"0",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("line",{x1:"0",y1:"-65",x2:"0",y2:"65",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),p.length>1&&e.jsx("polyline",{points:p.map(t=>`${t.x},${-t.y}`).join(" "),fill:"none",stroke:"#2dd4bf",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{transform:`translate(${T}, ${-S}) rotate(${-b})`,className:"transition-transform duration-200 ease-out",children:e.jsx("polygon",{points:"8,0 -5,-5 -2,0 -5,5",fill:"#38bdf8",stroke:"#0284c7",strokeWidth:"1.5",className:"animate-glow-teal"})})]})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-slate-900 p-3 rounded-xl border border-slate-800 text-center",children:[e.jsx("div",{className:"text-[10px] text-teal-400 uppercase font-mono",children:"Exterior Turn Angle"}),e.jsxs("div",{className:"text-base font-bold font-mono text-teal-200",children:[n.turnAngle,"°"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-xl border border-slate-800 text-center",children:[e.jsx("div",{className:"text-[10px] text-cyan-400 uppercase font-mono",children:"Interior Corner Angle"}),e.jsxs("div",{className:"text-base font-bold font-mono text-cyan-200",children:[n.interior,"°"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-xl border border-slate-800 text-center",children:[e.jsx("div",{className:"text-[10px] text-purple-400 uppercase font-mono",children:"Current Turtle Heading"}),e.jsxs("div",{className:"text-base font-bold font-mono text-purple-200",children:[b,"°"]})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Angular Geometry Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade rotation labs covering relative turning, absolute heading bearings, polygon geometry derivations, and multi-angle campus compass navigation:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Relative Rotations & Regular Polygon Exterior Angles"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Turning counter-clockwise (",e.jsx("code",{className:"text-teal-300 font-mono",children:"left()"}),") and clockwise (",e.jsx("code",{className:"text-teal-300 font-mono",children:"right()"}),") with polygon formulas."]})]}),e.jsx(c,{fileModule:R,title:"relative_rotations_left_and_right.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Absolute setheading() & Degrees vs Radians Mode Switching"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Orienting directional bearings directly and managing trigonometric radian angles."})]}),e.jsx(c,{fileModule:C,title:"absolute_setheading_and_radians_mode.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Interior vs Exterior Angles & 5-Pointed Star Geometry"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Comparing interior polygon corners with exterior turns and deriving star polygon tip angles."})]}),e.jsx(c,{fileModule:P,title:"angular_normalization_and_polygon_geometry.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Campus Radial Compass Navigator Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Directing student communications along radial compass bearings across Barrackpore, Kolkata, and Ichapur."})]}),e.jsx(c,{fileModule:I,title:"institutional_multi_angle_compass_case_study.py",highlightLines:[18,30,44,58]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Rotation & Angular Geometry Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Turning by Interior Angles"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Turning 60° for a triangle creates a hexagon instead of closing a 3-sided triangle."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Turn by 360/3 = 120° (Exterior Angle)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Passing Radians in Degrees Mode"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"t.left(3.14159)"})," while in default degrees mode turns only ~3 degrees instead of 180°."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use screen.radians() before radian turns"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Confusing left() and right()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Remembering that ",e.jsx("code",{className:"text-teal-300 font-mono",children:"left()"})," is counter-clockwise (+angle) and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"right()"})," is clockwise (-angle)."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# REMEMBER: left = counter-clockwise (CCW)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Forgetting Modulo 360 Normalization"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Angles exceeding 360° or below 0° should be normalized with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"angle % 360"})," for clean telemetry comparisons."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: normalized_angle = angle % 360.0"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Rotation & Angular Geometry Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Apply Exterior Angle Formula:"})," Always compute ",e.jsx("code",{className:"text-teal-300 font-mono",children:"turn = 360 / N"})," for closed polygons."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Choose Relative vs Absolute Wisely:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"left()"})," for shapes and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"setheading()"})," for compass bearings."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Star Polygon Formula:"})," For 5-pointed stars, turn by ",e.jsx("code",{className:"text-teal-300 font-mono",children:"720 / 5 = 144°"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Verify Heading Telemetry:"})," Check ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.heading()"})," when debugging complex rotational spiraling rosettes."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(E,{title:"Rotation Control & Angular Geometry FAQs",questions:M})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(A,{content:W,title:"Topic 6: Rotation Control Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(k,{note:"Understanding exterior angles was a true 'Eureka!' moment for Mamata, Mahima, and Susmita during our creative geometry workshops in Barrackpore and Kolkata. Once students realize that the turtle turns by the exterior angle (360° / N), they can effortlessly draw any shape in the universe—from 3-sided triangles to 100-sided mandalas. Keep calculating those angles and watch your geometry come alive!"})})]})]})}export{B as default};

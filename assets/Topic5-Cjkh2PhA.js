import{b as n,j as e,bg as b}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as M}from"./FAQTemplate-CkSqDH4B.js";import{T as P}from"./TeacherSukantaHui-CC0AKmkm.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const R=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 5: Movement fundamentals: forward(), backward(), distance control and precision\r
# File: linear_motion_and_step_precision.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating forward/backward linear motion, aliases,\r
#              and sub-pixel float step precision.\r
"""\r
\r
from dataclasses import dataclass\r
import math\r
\r
@dataclass\r
class LinearMotionSimulator:\r
    x: float = 0.0\r
    y: float = 0.0\r
    heading_deg: float = 0.0\r
\r
    def forward(self, distance: float) -> tuple[float, float]:\r
        rad = math.radians(self.heading_deg)\r
        self.x = round(self.x + distance * math.cos(rad), 4)\r
        self.y = round(self.y + distance * math.sin(rad), 4)\r
        return (self.x, self.y)\r
\r
    def backward(self, distance: float) -> tuple[float, float]:\r
        # Backward is mathematically equivalent to forward(-distance)\r
        return self.forward(-distance)\r
\r
    def fd(self, distance: float) -> tuple[float, float]:\r
        return self.forward(distance)\r
\r
    def bk(self, distance: float) -> tuple[float, float]:\r
        return self.backward(distance)\r
\r
def test_linear_motion():\r
    print("   [...] Testing Forward/Backward Precision & Aliases...")\r
    sim = LinearMotionSimulator(heading_deg=0.0) # Facing East\r
\r
    # 1. Forward 120.5 units\r
    sim.forward(120.5)\r
    assert sim.x == 120.5 and sim.y == 0.0\r
    print(f"   [PASS] 1. forward(120.5) -> Position: ({sim.x}, {sim.y})")\r
\r
    # 2. Backward 20.5 units (leaves heading unchanged)\r
    sim.backward(20.5)\r
    assert sim.x == 100.0 and sim.y == 0.0\r
    assert sim.heading_deg == 0.0\r
    print(f"   [PASS] 2. backward(20.5) -> Position: ({sim.x}, {sim.y}) (Heading preserved at {sim.heading_deg} deg)")\r
\r
    # 3. Test fd() and bk() aliases\r
    sim.fd(50.0)\r
    assert sim.x == 150.0\r
    sim.bk(50.0)\r
    assert sim.x == 100.0\r
    print(f"   [PASS] 3. Aliases fd() and bk() verified with float precision")\r
\r
def main():\r
    print("=" * 75)\r
    print("[LINEAR MOTION] forward() & backward() Step Precision & Aliases")\r
    print("=" * 75)\r
\r
    test_linear_motion()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] forward() and backward() compute continuous vector displacements")\r
    print("           while preserving heading orientation during reverse motion.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 5: Movement fundamentals: forward(), backward(), distance control and precision\r
# File: relative_vs_absolute_displacement.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Comparing relative step advances with absolute coordinate jumps.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class DisplacementComparator:\r
    current_x: float = 0.0\r
    current_y: float = 0.0\r
\r
    def relative_forward_east(self, distance: float):\r
        """Relative advance along East vector."""\r
        self.current_x += distance\r
\r
    def absolute_goto(self, target_x: float, target_y: float):\r
        """Absolute repositioning."""\r
        self.current_x = target_x\r
        self.current_y = target_y\r
\r
def test_relative_vs_absolute():\r
    print("   [...] Testing Relative Motion vs Absolute Positioning...")\r
    comp = DisplacementComparator()\r
\r
    # 1. Relative Forward Steps\r
    comp.relative_forward_east(50.0)\r
    comp.relative_forward_east(50.0)\r
    assert comp.current_x == 100.0 and comp.current_y == 0.0\r
    print(f"   [PASS] 1. Two relative forward(50) steps -> Position: ({comp.current_x}, {comp.current_y})")\r
\r
    # 2. Absolute Jump\r
    comp.absolute_goto(-150.0, 200.0)\r
    assert comp.current_x == -150.0 and comp.current_y == 200.0\r
    print(f"   [PASS] 2. Absolute goto(-150, 200) -> Position: ({comp.current_x}, {comp.current_y})")\r
\r
def main():\r
    print("=" * 75)\r
    print("[DISPLACEMENT COMPARISON] Relative Vector Steps vs Absolute Coordinates")\r
    print("=" * 75)\r
\r
    test_relative_vs_absolute()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Use relative forward/backward for algorithmic procedural shapes,")\r
    print("           and absolute goto() for canvas layout waypoint navigation.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 5: Movement fundamentals: forward(), backward(), distance control and precision\r
# File: motion_trajectory_and_distance_auditor.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Tracking cumulative linear path distance and odometer telemetry.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class OdometerTracker:\r
    total_distance_traveled: float = 0.0\r
    steps_count: int = 0\r
\r
    def record_step(self, distance: float):\r
        self.total_distance_traveled += abs(distance)\r
        self.steps_count += 1\r
\r
def test_odometer_tracking():\r
    print("   [...] Testing Odometer Path Distance Accumulator...")\r
    odometer = OdometerTracker()\r
\r
    # Move forward 100, backward 50, forward 80\r
    odometer.record_step(100.0)\r
    odometer.record_step(-50.0) # Backward 50 contributes +50 to total distance\r
    odometer.record_step(80.0)\r
\r
    assert odometer.steps_count == 3\r
    assert odometer.total_distance_traveled == 230.0\r
    print(f"   [PASS] 1. Recorded {odometer.steps_count} steps -> Cumulative Odometer: {odometer.total_distance_traveled} units")\r
\r
def main():\r
    print("=" * 75)\r
    print("[ODOMETER TELEMETRY] Cumulative Linear Distance Traveled Tracking")\r
    print("=" * 75)\r
\r
    test_odometer_tracking()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Accumulating absolute step lengths provides exact vehicle")\r
    print("           odometer metrics for robotics and physics simulations.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,L=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 5: Movement fundamentals: forward(), backward(), distance control and precision\r
# File: institutional_linear_robotics_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Robotic dispatch shuttle simulation delivering assignments\r
#              between student labs across Barrackpore and Kolkata.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CampusDispatchShuttle:\r
    shuttle_name: str\r
    current_station: str\r
    odometer_km: float = 0.0\r
\r
    def dispatch_forward(self, destination: str, distance_km: float) -> str:\r
        self.odometer_km += distance_km\r
        self.current_station = destination\r
        return f"[SHUTTLE DISPATCH] '{self.shuttle_name}' moved {distance_km} km forward to {destination}. Total Odometer: {self.odometer_km} km"\r
\r
    def return_backward(self, origin: str, distance_km: float) -> str:\r
        self.odometer_km += distance_km\r
        self.current_station = origin\r
        return f"[SHUTTLE RETURN] '{self.shuttle_name}' reversed {distance_km} km backward to {origin}. Total Odometer: {self.odometer_km} km"\r
\r
def test_linear_robotics_shuttle():\r
    print("   [...] Running Institutional Campus Shuttle Dispatch Test...")\r
    shuttle = CampusDispatchShuttle("Barrackpore-Kolkata Express", "Barrackpore Central Hub")\r
\r
    # 1. Forward to Kolkata (25 km)\r
    log1 = shuttle.dispatch_forward("Kolkata Tech Hub (Mahima)", 25.0)\r
    print(f"   [PASS] 1. {log1}")\r
    assert shuttle.current_station == "Kolkata Tech Hub (Mahima)"\r
    assert shuttle.odometer_km == 25.0\r
\r
    # 2. Reverse return to Barrackpore (25 km)\r
    log2 = shuttle.return_backward("Barrackpore Central Hub (Mamata)", 25.0)\r
    print(f"   [PASS] 2. {log2}")\r
    assert shuttle.current_station == "Barrackpore Central Hub (Mamata)"\r
    assert shuttle.odometer_km == 50.0\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Autonomous Campus Dispatch Shuttle Simulation")\r
    print("=" * 80)\r
\r
    test_linear_robotics_shuttle()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Linear forward and backward displacement accurately models")\r
    print("           real-world industrial automated guided vehicles (AGVs).")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,O=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
        TOPIC 5: MOVEMENT FUNDAMENTALS (FORWARD, BACKWARD & DISTANCE PRECISION)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. LINEAR MOTION COMMANDS & ALIASES\r
--------------------------------------------------------------------------------\r
  1. Forward Motion:\r
     - t.forward(distance) or t.fd(distance)\r
     - Moves 'distance' pixels forward along current heading angle theta.\r
     - New X = X + distance * cos(theta)\r
     - New Y = Y + distance * sin(theta)\r
\r
  2. Backward Motion:\r
     - t.backward(distance) or t.bk(distance) or t.back(distance)\r
     - Moves 'distance' pixels backward without altering heading orientation.\r
     - New X = X - distance * cos(theta)\r
     - New Y = Y - distance * sin(theta)\r
\r
--------------------------------------------------------------------------------\r
2. RELATIVE VS ABSOLUTE DISPLACEMENT\r
--------------------------------------------------------------------------------\r
  - Relative: t.forward(100) -> Depends on where the turtle is currently facing.\r
  - Absolute: t.goto(100, 50) -> Moves directly to (100, 50) regardless of heading.\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 5: MOVEMENT FUNDAMENTALS\r
================================================================================\r
`,W=[{question:"What is the mathematical equation governing 'forward(distance)' in Turtle Graphics?",shortAnswer:"The new coordinates are computed as: new_x = x + distance * cos(rad(heading)) and new_y = y + distance * sin(rad(heading)).",explanation:"Trigonometric displacement formula of turtle linear motion.",hint:"new_x = x + d * cos(theta), new_y = y + d * sin(theta).",level:"basic",codeExample:"# forward(d) translates (x, y) along current heading vector"},{question:"What are the aliases for 'forward()' and 'backward()' in Python Turtle?",shortAnswer:"'t.fd()' is the alias for 'forward()'; 't.bk()' and 't.back()' are the aliases for 'backward()'.",explanation:"Shorthand aliases in the turtle API.",hint:"fd() for forward; bk() or back() for backward.",level:"basic",codeExample:`t.fd(100) # forward(100)
t.bk(50)  # backward(50)`},{question:"Does calling 't.backward(50)' change the turtle cursor's heading angle?",shortAnswer:"No; 'backward()' moves the turtle in reverse opposite to its current heading without changing its orientation angle.",explanation:"Orientation preservation during backward motion.",hint:"No, heading remains identical; only position moves backward.",level:"basic",codeExample:`h1 = t.heading()
t.backward(100)
assert t.heading() == h1 # True`},{question:"Can distance arguments in 'forward()' and 'backward()' be negative numbers?",shortAnswer:"Yes; passing a negative distance to 'forward(-100)' is mathematically identical to calling 'backward(100)', and 'backward(-100)' is identical to 'forward(100)'.",explanation:"Signed scalar distance handling.",hint:"Yes, negative forward moves backward, and negative backward moves forward.",level:"basic",codeExample:"t.forward(-50) # Moves 50 units in reverse"},{question:"Can distance arguments in 'forward()' and 'backward()' be floating-point numbers?",shortAnswer:"Yes; Turtle Graphics supports precise sub-pixel floating-point distances (e.g. 't.forward(12.345)'), maintaining continuous float coordinate vectors internally.",explanation:"Sub-pixel floating-point precision in Turtle.",hint:"Yes, float distances like 12.5 or 0.75 are fully supported.",level:"basic",codeExample:"t.forward(12.345) # Precise float displacement"},{question:"What is the fundamental difference between relative motion ('forward()') and absolute positioning ('goto()')?",shortAnswer:"Relative motion ('forward(d)') advances 'd' units along the current heading angle starting from current position; absolute positioning ('goto(x, y)') jumps directly to target coordinates (x, y) regardless of orientation.",explanation:"Relative vector movement vs absolute Cartesian coordinate positioning.",hint:"forward() moves along current heading; goto() moves to specific (x, y) coordinates.",level:"basic",codeExample:`t.forward(100)  # Relative to current angle
t.goto(100, 50) # Absolute coordinate`},{question:"How do you calculate the cumulative path distance traveled by a turtle across multiple movements?",shortAnswer:"By maintaining a running total sum of the absolute distance of every 'forward()' and 'backward()' step, or tracking coordinate displacements via 't.distance(prev_pos)'.",explanation:"Odometer path accumulation algorithm.",hint:"Sum the absolute value of each step distance.",level:"moderate",codeExample:"total_distance += abs(step_dist)"},{question:"If a turtle at (0, 0) facing 90° (North) executes 't.forward(100)', what are its new coordinates?",shortAnswer:"(0.0, 100.0) (X remains 0, Y increases by 100 along the North axis).",explanation:"Coordinate displacement along the positive Y axis.",hint:"Facing 90° North: X is 0, Y is +100.",level:"basic",codeExample:`t.setheading(90)
t.forward(100)
assert t.pos() == (0.0, 100.0)`},{question:"If a turtle at (0, 0) facing 180° (West) executes 't.forward(150)', what are its new coordinates?",shortAnswer:"(-150.0, 0.0) (X decreases by 150 along the negative X axis, Y remains 0).",explanation:"Coordinate displacement along the negative X axis.",hint:"Facing 180° West: X is -150, Y is 0.",level:"basic",codeExample:`t.setheading(180)
t.forward(150)
assert t.pos() == (-150.0, 0.0)`},{question:"What is floating-point drift in turtle geometry and how do you prevent it?",shortAnswer:"Floating-point drift occurs when repeated trigonometric calculations ('cos', 'sin') accumulate infinitesimal rounding errors (e.g. 0.0000000000000001); use 'round(val, 2)' or 'math.isclose()' when asserting coordinates.",explanation:"IEEE 754 floating-point rounding imprecision in geometric steps.",hint:"Accumulated float rounding errors; use math.isclose() or round().",level:"moderate",codeExample:`import math
assert math.isclose(t.xcor(), 0.0, abs_tol=1e-5)`},{question:"How do you draw a straight line of length 200, reverse to the midpoint, and draw a perpendicular tick mark?",shortAnswer:"'t.forward(200); t.backward(100); t.left(90); t.forward(20); t.backward(40)'",explanation:"Combining forward and backward steps for tick marks and axis drawing.",hint:"forward(200) -> backward(100) to midpoint -> turn 90° -> forward/backward for tick.",level:"moderate",codeExample:"t.fd(200); t.bk(100); t.lt(90); t.fd(20); t.bk(40)"},{question:"What happens if you call 't.forward(0)'?",shortAnswer:"The turtle does not move and remains at its current position, but if the pen is down with a non-zero pensize, it may place a tiny single-pixel dot on the canvas.",explanation:"Zero-length step behavior.",hint:"No displacement occurs; stays in place.",level:"basic",codeExample:"t.forward(0) # Position unchanged"},{question:"How do you simulate stepping motion with constant velocity in an animation loop?",shortAnswer:"By moving in small incremental steps (e.g. 't.forward(2)') inside a loop with 'time.sleep()' or 'screen.ontimer()'.",explanation:"Incremental stepping for smooth visual animation.",hint:"Small forward() increments inside a timed loop.",level:"basic",codeExample:"for _ in range(100): t.forward(2)"},{question:"What is the effect of 't.forward(100)' when the pen is lifted with 't.penup()'?",shortAnswer:"The turtle translates 100 units forward along its heading, updating its '(x, y)' position, but leaves zero ink or lines on the canvas.",explanation:"Translational motion during penup state.",hint:"Position updates by 100 units, but no line is drawn.",level:"basic",codeExample:"t.penup(); t.forward(100) # Silent transit"},{question:"If a turtle is at (50, 50) and calls 't.backward(50)' while facing 0° (East), what is its new position?",shortAnswer:"(0.0, 50.0) (X decreases by 50 to 0.0, Y remains unchanged at 50.0).",explanation:"Backward displacement calculation.",hint:"Facing East: backward(50) subtracts 50 from X.",level:"basic",codeExample:"# (50, 50) - 50 East = (0.0, 50.0)"},{question:"How do robotic CNC machines and 3D printers map onto Turtle 'forward()' commands?",shortAnswer:"CNC machines interpret linear G-code commands ('G1 X... Y... F...') which translate stepper motor revolutions into linear displacement vectors identical to 't.forward(distance)'.",explanation:"Real-world industrial kinematics of linear stepper motors.",hint:"Linear stepper motor displacement is conceptually identical to turtle forward().",level:"moderate",codeExample:"# G-Code: G1 X100 is conceptually identical to t.forward(100)"},{question:"How do you reverse a turtle's movement direction so that 'forward()' moves backward?",shortAnswer:"By turning 180 degrees using 't.left(180)' or 't.right(180)'.",explanation:"Inverting heading direction.",hint:"Turn 180 degrees using t.left(180) or t.right(180).",level:"basic",codeExample:"t.left(180) # Reverses direction 180 degrees"},{question:"Why is 'backward()' preferred over turning 180° and moving forward in certain drawings?",shortAnswer:"'backward()' preserves the turtle's original orientation heading, which is essential when drawing bilateral tick marks, tree branches, or return journeys without needing to re-orient the turtle.",explanation:"Preserving heading state during return displacements.",hint:"Avoids having to turn 180° and turn back, preserving orientation.",level:"basic",codeExample:"t.fd(100); t.bk(100) # Leaves heading unchanged"},{question:"How do you calculate the step size needed to divide a distance $D$ into $N$ equal segments?",shortAnswer:"step_size = D / N; then iterate 'for _ in range(N): t.forward(step_size)'.",explanation:"Segment division algorithm.",hint:"step_size = total_distance / number_of_segments.",level:"basic",codeExample:`step = 200 / 10
for _ in range(10): t.fd(step)`},{question:"What is the ultimate golden rule of Turtle Movement Fundamentals?",shortAnswer:"Always remember that `forward()` and `backward()` operate relative to the current heading vector ($Delta x = d cdot cos	heta, Delta y = d cdot sin	heta$), use `backward()` to preserve orientation during return paths, and track total displacement with mathematical precision.",explanation:"The complete standard for linear motion in Turtle Graphics.",hint:"Relative heading vectors + backward preserves orientation + distance precision.",level:"basic",codeExample:"# Enterprise Linear Motion Standard"}];function K(){const m=n.useRef([]),[s,h]=n.useState("vectorDisplacement"),[l,g]=n.useState(0),[d,w]=n.useState(0),[c,v]=n.useState(0),[A,j]=n.useState(0),[k,p]=n.useState([]),[T,y]=n.useState([]),N=(t,a=!0)=>{const o=a?t:-t,S=c*Math.PI/180,f=Math.round((l+o*Math.cos(S))*10)/10,u=Math.round((d+o*Math.sin(S))*10)/10;y(i=>[...i,{x1:l,y1:d,x2:f,y2:u,stroke:a?"#2dd4bf":"#f59e0b"}]),j(i=>i+Math.abs(t)),p(i=>[`[${a?"FORWARD":"BACKWARD"}] ${t} px -> New Pos: (${f}, ${u})`,...i.slice(0,4)]),g(f),w(u)},_=t=>{v(a=>(a+t)%360),p(a=>[`[TURN] ${t}° -> New Heading: ${(c+t)%360}°`,...a.slice(0,4)])},E=()=>{g(0),w(0),v(0),j(0),p([]),y([])};n.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Movement Fundamentals: ",e.jsx("span",{className:"text-teal-400",children:"forward(), backward() & Precision"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master linear displacement and directional kinematics in Python Turtle: executing forward motion with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"forward()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"fd()"}),", executing reverse linear translation with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"backward()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"bk()"})," while preserving heading orientation, sub-pixel floating point step precision, comparing relative vector advances with absolute ",e.jsx("code",{className:"text-teal-300 font-mono",children:"goto()"})," coordinates, and tracking cumulative odometer path metrics."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"➡️ forward() / fd() Motion"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⬅️ backward() / bk() Reversal"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Sub-Pixel Float Precision"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏎️ Cumulative Path Odometer"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Linear Motion Vector Kinematics"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Linear translation in Turtle Graphics computes continuous trigonometric coordinate displacements along the active heading vector:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ forward(d) / fd()"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Δx = d·cosθ, Δy = d·sinθ"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Translates distance $d$ forward along the current heading angle $\\theta$."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ backward(d) / bk()"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Preserves Orientation"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Moves in reverse without changing the turtle's orientation heading angle."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Float Precision"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Sub-pixel Steps"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Supports precise floating-point step sizes (e.g. ",e.jsx("code",{className:"text-purple-300 font-mono",children:"12.345 px"}),") for micro-machining curves."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Path Odometer"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Σ |step_distance|"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accumulates total linear trajectory distance for robotic kinematics and physical odometry."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Orientation Preservation During backward()"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Calling ",e.jsx("code",{className:"text-teal-300 font-mono",children:"t.backward(100)"})," does ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"NOT"})," rotate the turtle! The turtle remains facing its original direction, making backward motion ideal for drawing symmetrical bilateral tick marks and tree branches."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Vector Kinematics & Motion Comparison"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("vectorDisplacement"),className:b("px-3 py-1.5 rounded-lg transition-all",s==="vectorDisplacement"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Forward vs Backward Vectors"}),e.jsx("button",{onClick:()=>h("relativeVsAbsolute"),className:b("px-3 py-1.5 rounded-lg transition-all",s==="relativeVsAbsolute"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Relative vs Absolute Motion"}),e.jsx("button",{onClick:()=>h("subPixelPrecision"),className:b("px-3 py-1.5 rounded-lg transition-all",s==="subPixelPrecision"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Sub-Pixel Precision & Drift"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining linear vector trigonometry, displacement equations, and sub-pixel floating-point steps:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="vectorDisplacement"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"FORWARD VS BACKWARD LINEAR VECTOR DISPLACEMENT"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"35",width:"370",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1. t.forward(120) / t.fd(120)"}),e.jsx("circle",{cx:"80",cy:"120",r:"5",fill:"#ffffff"}),e.jsx("text",{x:"60",y:"140",fill:"#bae6fd",fontSize:"8",children:"(x, y)"}),e.jsx("line",{x1:"80",y1:"120",x2:"260",y2:"120",stroke:"#2dd4bf",strokeWidth:"4",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"275,120 260,114 260,126",fill:"#2dd4bf"}),e.jsx("text",{x:"280",y:"123",fill:"#5eead4",fontSize:"8",fontWeight:"bold",children:"(x+120, y)"}),e.jsx("text",{x:"35",y:"170",fill:"#ccfbf1",fontSize:"8",children:"• Moves along heading angle $\\theta$"}),e.jsx("text",{x:"35",y:"190",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Heading: 0° East (Preserved) ✅"}),e.jsx("rect",{x:"425",y:"35",width:"370",height:"180",rx:"6",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"435",y:"60",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"2. t.backward(80) / t.bk(80)"}),e.jsx("line",{x1:"680",y1:"120",x2:"520",y2:"120",stroke:"#f59e0b",strokeWidth:"4"}),e.jsx("circle",{cx:"680",cy:"120",r:"5",fill:"#ffffff"}),e.jsx("text",{x:"660",y:"140",fill:"#fef3c7",fontSize:"8",children:"(x, y)"}),e.jsx("polygon",{points:"695,120 680,114 680,126",fill:"#2dd4bf"}),e.jsx("text",{x:"440",y:"123",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"(x-80, y)"}),e.jsx("text",{x:"435",y:"170",fill:"#fef3c7",fontSize:"8",children:"• Translates in reverse opposite heading"}),e.jsx("text",{x:"435",y:"190",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Heading remains pointing East (0°) ✅"})]})]}):s==="relativeVsAbsolute"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"RELATIVE PROCEDURAL STEPS VS ABSOLUTE CARTESIAN POSITIONING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"185",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"40",y:"55",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Relative Motion: forward() & backward()"}),e.jsx("text",{x:"40",y:"85",fill:"#bae6fd",fontSize:"8",children:"• Depends on current turtle position and orientation"}),e.jsx("text",{x:"40",y:"105",fill:"#bae6fd",fontSize:"8",children:"• Ideal for drawing regular polygons (squares, stars)"}),e.jsx("text",{x:"40",y:"125",fill:"#bae6fd",fontSize:"8",children:"• Easily modularized into reusable functions"}),e.jsxs("pre",{className:"text-[10px] font-mono text-cyan-300 mt-4 p-2 bg-slate-950 rounded",children:["for _ in range(4):",`
`,"    ","t.forward(100)",`
`,"    ","t.left(90)"]}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"185",rx:"6",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("text",{x:"430",y:"55",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Absolute Motion: goto(x, y)"}),e.jsx("text",{x:"430",y:"85",fill:"#d8b4fe",fontSize:"8",children:"• Jumps to exact coordinates regardless of heading"}),e.jsx("text",{x:"430",y:"105",fill:"#d8b4fe",fontSize:"8",children:"• Ideal for screen layout, UI boxes & waypoint maps"}),e.jsx("text",{x:"430",y:"125",fill:"#d8b4fe",fontSize:"8",children:"• Does not alter turtle orientation angle"}),e.jsxs("pre",{className:"text-[10px] font-mono text-purple-300 mt-4 p-2 bg-slate-950 rounded",children:["t.penup()",`
`,"t.goto(150, 100) # Barrackpore",`
`,"t.pendown()"]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SUB-PIXEL FLOATING POINT STEP PRECISION & DRIFT MITIGATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"30",y:"30",width:"760",height:"80",rx:"6",fill:"#2e1065",stroke:"#c084fc"}),e.jsx("text",{x:"45",y:"55",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Trigonometric Displacement Formula in CPython Turtle"}),e.jsx("text",{x:"45",y:"80",fill:"#d8b4fe",fontSize:"10",fontFamily:"monospace",children:"x_new = x_old + distance * cos(radians(theta)) | y_new = y_old + distance * sin(radians(theta))"}),e.jsx("rect",{x:"30",y:"125",width:"760",height:"95",rx:"6",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"45",y:"150",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Handling Floating-Point Precision:"}),e.jsx("text",{x:"45",y:"172",fill:"#bae6fd",fontSize:"8",children:"• Turtle stores position as floating point numbers (e.g. 100.00000000000003)."}),e.jsxs("text",{x:"45",y:"190",fill:"#86efac",fontSize:"8",children:["• When writing test assertions, always use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"math.isclose(a, b, abs_tol=1e-3)"})," or ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"round(pos, 2)"}),"! ✅"]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Linear Movement & Odometer Studio"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute precise forward and backward translational steps. Observe how backward motion preserves orientation heading and how the cumulative odometer tracks total distance traveled:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:[e.jsx("button",{onClick:()=>N(50,!0),className:"p-2.5 bg-teal-950/80 border border-teal-600 rounded-xl text-xs font-bold text-teal-300 hover:bg-teal-900 transition-all text-center",children:"Forward 50 px ⏩"}),e.jsx("button",{onClick:()=>N(30,!1),className:"p-2.5 bg-amber-950/80 border border-amber-600 rounded-xl text-xs font-bold text-amber-300 hover:bg-amber-900 transition-all text-center",children:"Backward 30 px ⏪"}),e.jsx("button",{onClick:()=>_(90),className:"p-2.5 bg-cyan-950/80 border border-cyan-600 rounded-xl text-xs font-bold text-cyan-300 hover:bg-cyan-900 transition-all text-center",children:"Turn Left 90° ↺"}),e.jsx("button",{onClick:()=>_(-90),className:"p-2.5 bg-purple-950/80 border border-purple-600 rounded-xl text-xs font-bold text-purple-300 hover:bg-purple-900 transition-all text-center",children:"Turn Right 90° ↻"}),e.jsx("button",{onClick:E,className:"p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all text-center",children:"Reset Canvas 🔄"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-teal-900/50 text-center",children:[e.jsx("div",{className:"text-[10px] text-teal-400 uppercase font-mono",children:"Current Coordinates"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-teal-200",children:["(",l,", ",d,")"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-cyan-900/50 text-center",children:[e.jsx("div",{className:"text-[10px] text-cyan-400 uppercase font-mono",children:"Heading Orientation"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-cyan-200",children:[c,"°"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-3 rounded-xl border border-amber-900/50 text-center",children:[e.jsx("div",{className:"text-[10px] text-amber-400 uppercase font-mono",children:"Cumulative Odometer"}),e.jsxs("div",{className:"text-lg font-bold font-mono text-amber-200",children:[A," px"]})]})]}),e.jsx("div",{className:"relative w-full h-64 bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-150 -100 300 200",className:"w-full h-full",children:[e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#64748b"}),e.jsx("line",{x1:"-140",y1:"0",x2:"140",y2:"0",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("line",{x1:"0",y1:"-90",x2:"0",y2:"90",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3 3"}),T.map((t,a)=>e.jsx("line",{x1:t.x1,y1:-t.y1,x2:t.x2,y2:-t.y2,stroke:t.stroke,strokeWidth:"3",strokeLinecap:"round"},a)),e.jsx("g",{transform:`translate(${l}, ${-d}) rotate(${-c})`,className:"transition-transform duration-200 ease-out",children:e.jsx("polygon",{points:"10,0 -6,-6 -3,0 -6,6",fill:"#2dd4bf",stroke:"#0f766e",strokeWidth:"1.5",className:"animate-glow-teal"})})]})}),k.length>0&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-bold mb-1",children:"Recent Motion Dispatch Log:"}),k.map((t,a)=>e.jsx("div",{className:"text-teal-300",children:t},a))]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Linear Motion Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade linear motion labs covering step precision, relative vs absolute positioning, odometer telemetry, and autonomous shuttle robotics:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Linear Motion, Aliases & Sub-Pixel Float Precision"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Translating forward and backward along heading vectors with continuous float coordinates."})]}),e.jsx(x,{fileModule:R,title:"linear_motion_and_step_precision.py",highlightLines:[16,26,38,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Relative Vector Steps vs Absolute Coordinate Displacement"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Comparing procedural ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"forward()"})," advances with absolute ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"goto()"})," coordinate positioning."]})]}),e.jsx(x,{fileModule:D,title:"relative_vs_absolute_displacement.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Cumulative Linear Path Distance & Odometer Telemetry"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Tracking cumulative path lengths and total distance metrics across multi-step journeys."})]}),e.jsx(x,{fileModule:I,title:"motion_trajectory_and_distance_auditor.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Autonomous Campus Dispatch Shuttle Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Robotic shuttle simulation delivering materials between Barrackpore and Kolkata for Mamata and Mahima."})]}),e.jsx(x,{fileModule:L,title:"institutional_linear_robotics_case_study.py",highlightLines:[16,28,42,54]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Linear Movement Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Assuming backward() Rotates Orientation"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Expecting ",e.jsx("code",{className:"text-rose-400 font-mono",children:"backward(100)"})," to turn the turtle 180°; it translates in reverse while keeping the cursor facing forward."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# REMEMBER: backward() preserves heading angle"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Floating-Point Drift in Loops"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Accumulating fractional trigonometric steps can produce tiny rounding errors (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:"0.0000000000000004"}),") in position assertions."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use math.isclose(a, b, abs_tol=1e-3)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Negative Distance Confusion"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"forward(-50)"})," moves backward, which can cause subtle logic bugs if sign is not checked."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Keep step distances positive and turn deliberately"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Confusing goto() with forward()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"goto(100, 0)"})," when you intended to step forward 100 units relative to current rotated angle."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use forward(d) for relative procedural shapes"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Movement Fundamentals Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Relative Motion for Polygons:"})," Build modular geometric shapes with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"forward()"})," and angle turns."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Leverage backward() for Symmetry:"})," Draw bilateral branches and return to center without disturbing orientation."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Track Cumulative Odometry:"})," Sum absolute step distances when simulating physics or vehicle kinematics."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Float Distances Freely:"})," Take advantage of sub-pixel floating-point translation for smooth curves."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(M,{title:"Linear Movement & Distance Precision FAQs",questions:W})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(C,{content:O,title:"Topic 5: Movement Fundamentals Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(P,{note:"Linear motion is the foundational building block of all computer graphics. When Mamata, Mahima, and Susmita programmed their first autonomous delivery rover simulations at our Barrackpore and Kolkata centers, seeing how backward() preserves orientation while forward() steps along the heading vector laid the mathematical groundwork for autonomous robotics and CNC machining. Enjoy mastering the forward and backward vectors!"})})]})]})}export{K as default};

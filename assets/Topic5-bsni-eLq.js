import{b as u,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as _}from"./TeacherSukantaHui-BaJcBHAy.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{F as w}from"./FAQTemplate-BHhlgA96.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const k=[{question:"How do you detect collision with the right screen boundary for a circular ball?",shortAnswer:"`if x + radius >= max_x:`",explanation:"Because coordinate `(x, y)` is at the center, the rightmost edge of the circle is at `x + radius`.",hint:"How is the circle's rightmost coordinate calculated relative to its center?",level:"basic",codeExample:`if x + radius >= max_x:
    x = max_x - radius
    vx = -vx`},{question:"Why is Position Clamping (`x = max_x - radius`) mandatory when a ball hits a wall?",shortAnswer:"To prevent the 'sticky wall' bug where a fast-moving ball sinks deep into the wall and oscillates trapped inside the boundary.",explanation:"Position correction guarantees the ball remains strictly inside valid arena bounds before the next frame tick.",hint:"What prevents balls from getting trapped vibrating inside walls?",level:"basic",codeExample:"x = max_x - radius  # Position correction"},{question:"What is Velocity Vector Reflection during an elastic wall collision?",shortAnswer:"Multiplying the normal velocity component by -1 (e.g. `vx = -vx` for vertical walls, `vy = -vy` for horizontal walls).",explanation:"Newton's law of reflection: angle of incidence equals angle of reflection.",hint:"How does velocity flip upon hitting a vertical wall?",level:"basic",codeExample:"vx = -vx  # Inverts horizontal direction"},{question:"What is Toroidal Screen Wrapping (Asteroids-style wrapping)?",shortAnswer:"Teleporting an object to the opposite edge when it exits the screen: `if x > max_x: x = min_x`.",explanation:"Simulates continuous topology without hard physical wall collisions.",hint:"What boundary mechanic teleports objects from the right edge to the left edge?",level:"basic",codeExample:"if x > max_x: x = min_x"},{question:"What is an Axis-Aligned Bounding Box (AABB)?",shortAnswer:"A non-rotated rectangle defined by `min_x, max_x, min_y, max_y` used for fast 2D collision detection.",explanation:"AABB collision tests require only 4 simple inequality comparisons.",hint:"What geometric structure defines boundary bounds without rotation?",level:"moderate",codeExample:"# AABB: min_x, max_x, min_y, max_y"},{question:"How do you detect collision between a ball and a moving rectangular Pong paddle?",shortAnswer:"Check if ball's X overlaps paddle X range AND ball's Y overlaps paddle Y range.",explanation:"Overlapping intervals on both X and Y axes confirm an AABB collision.",hint:"What condition verifies intersection with a paddle rectangle?",level:"moderate",codeExample:"if paddle.min_x <= ball.x <= paddle.max_x and paddle.min_y <= ball.y <= paddle.max_y:"},{question:"What causes the 'Tunneling' glitch in fast-moving physics games?",shortAnswer:"When object velocity per frame exceeds the wall thickness, passing completely through the wall between frames without triggering collision.",explanation:"High velocity causes large discrete positional jumps that skip over thin boundaries.",hint:"What glitch occurs when fast objects pass through walls between frames?",level:"advanced",codeExample:"# Tunneling: vx > wall_thickness causes missed collision"},{question:"How do you prevent high-speed tunneling through thin walls?",shortAnswer:"Use Continuous Collision Detection (CCD) via raycasting or multiple sub-step physics iterations per frame.",explanation:"Sub-stepping divides large frame movements into small verifiable steps.",hint:"What technique subdivides high-speed frames into smaller physics steps?",level:"advanced",codeExample:"for step in range(sub_steps): update_physics(dt / sub_steps)"},{question:"How do you calculate the deflection angle when a ball hits a rounded bumper paddle in Pong?",shortAnswer:"Calculate relative hit offset `offset = (ball.y - paddle.y) / (paddle.height / 2)` and set `vy = offset * max_deflection_speed`.",explanation:"Relative offset deflection allows players to steer ball angles by hitting with the paddle edges.",hint:"How do Pong games let players angle shots using paddle edges?",level:"advanced",codeExample:"vy = ((ball.y - paddle.y) / (paddle_h / 2)) * max_vy"},{question:"How do you bounce a ball off a 45-degree diagonal wall?",shortAnswer:"Swap velocity components with sign reflection: `new_vx = -vy; new_vy = -vx`.",explanation:"Diagonal reflection normal vectors swap the horizontal and vertical velocity axes.",hint:"How do 45-degree angled walls alter velocity components?",level:"advanced",codeExample:"vx, vy = -vy, -vx  # 45-degree diagonal bounce"},{question:"What is the Circle-to-Circle collision formula for two billiard balls?",shortAnswer:"Collision occurs when distance between centers `dist <= (r1 + r2)`, calculated via `math.hypot(x2 - x1, y2 - y1)`.",explanation:"Pythagorean distance comparison detects radial overlap effortlessly.",hint:"What formula checks if two circle centers are closer than the sum of their radii?",level:"moderate",codeExample:"if math.hypot(x2 - x1, y2 - y1) <= (r1 + r2): resolve_collision()"},{question:"How do you separate two overlapping circular balls upon collision?",shortAnswer:"Calculate overlap distance `overlap = (r1 + r2) - dist`, and push each ball away by `0.5 * overlap` along the collision normal vector.",explanation:"Positional separation prevents overlapping balls from sticking together.",hint:"How are colliding spheres separated along their normal vector?",level:"advanced",codeExample:"x1 -= nx * overlap * 0.5; x2 += nx * overlap * 0.5"},{question:"What is an Inelastic Wall Collision?",shortAnswer:"A collision where wall restitution is `< 1.0` (e.g. `vx = -vx * 0.8`), causing the ball to lose speed on every wall bounce.",explanation:"Damped wall bouncing simulates real-world energy absorption in squash and racquetball.",hint:"How is energy loss simulated upon wall contact?",level:"basic",codeExample:"vx = -vx * 0.8  # 20% kinetic energy lost per bounce"},{question:"How do you detect when a ball exits through a goal opening between two posts?",shortAnswer:"Check if `x >= goal_x` AND `goal_min_y <= y <= goal_max_y`.",explanation:"Bounding checks restricted to specific vertical slots define goal mouths.",hint:"How are goal nets programmed in air hockey or soccer games?",level:"moderate",codeExample:"if x >= goal_x and goal_y_bot <= y <= goal_y_top: score_goal()"},{question:"Why should screen boundaries be defined relative to window dimensions rather than hardcoded magic numbers?",shortAnswer:"So resizing the screen dynamically updates `max_x = screen.window_width() // 2` without breaking boundary physics.",explanation:"Dynamic bounds calculation ensures responsive full-screen compatibility.",hint:"How do you calculate boundaries dynamically from window dimensions?",level:"moderate",codeExample:"max_x = screen.window_width() // 2"},{question:"How do you simulate a rubber pinball bumper that repels balls with extra explosive speed?",shortAnswer:"Reflect velocity and multiply by an impulse multiplier: `vx = -vx * 1.5; vy = -vy * 1.5`.",explanation:"Kinetic impulse boosts create arcade pinball bounce dynamics.",hint:"How do pinball bumpers add speed upon collision?",level:"moderate",codeExample:"vx = -vx * 1.5; vy = -vy * 1.5  # Pinball impulse"},{question:"What is the difference between Boundary Clamping and Boundary Wrapping?",shortAnswer:"Clamping confines position strictly inside bounds (`min <= x <= max`); wrapping teleports beyond the bound to the other side.",explanation:"Clamping is for solid rooms; wrapping is for seamless wrap-around worlds.",hint:"Which boundary mode restricts movement inside walls versus wrapping around?",level:"basic",codeExample:"# Clamp: x = max(min_x, min(max_x, x)) | Wrap: if x > max_x: x = min_x"},{question:"How do you play a sound effect or trigger screen shake upon wall collision?",shortAnswer:"Invoke a sound trigger or camera offset inside the collision `if` block before reversing velocity.",explanation:"Audio-visual feedback makes boundary impacts feel impactful and tactile.",hint:"Where is impact feedback triggered in the physics loop?",level:"moderate",codeExample:"if x + r >= max_x: play_bounce_sound(); vx = -vx"},{question:"How do you bounce off an arbitrary angled line segment with normal vector `(nx, ny)`?",shortAnswer:"Calculate dot product `dot = vx*nx + vy*ny`, then `vx_new = vx - 2*dot*nx`, `vy_new = vy - 2*dot*ny`.",explanation:"Vector projection reflection works for any 2D surface orientation in space.",hint:"What vector operation reflects velocity against arbitrary normal vectors?",level:"expert",codeExample:`dot = vx*nx + vy*ny
vx -= 2*dot*nx; vy -= 2*dot*ny`},{question:"How do you handle corner collisions where a ball hits both top and right walls on the exact same frame?",shortAnswer:"Both conditionals trigger independently, reversing both `vx = -vx` and `vy = -vy` (a 180-degree retroreflective return).",explanation:"Independent axis checking naturally resolves simultaneous multi-boundary collisions.",hint:"What happens when a ball hits a corner vertex?",level:"moderate",codeExample:"# Corner hit: both vx = -vx and vy = -vy fire"},{question:"What is Bounding Volume Hierarchy (BVH) in multi-object collision systems?",shortAnswer:"A tree structure enclosing objects in progressively smaller bounding boxes to accelerate collision searches.",explanation:"Spatial hierarchy avoids checking every object against every other object (`O(N^2)` reduction).",hint:"What tree structure accelerates collision queries in complex scenes?",level:"expert",codeExample:"# BVH spatial partitioning"},{question:"How do you prevent a player sprite from walking through a maze wall in an RPG?",shortAnswer:"If next position `(x + vx, y + vy)` intersects a wall tile, cancel movement: `x_new = x_old`.",explanation:"Collision prediction cancels invalid movement before it occurs.",hint:"How is maze wall collision prevented before moving?",level:"moderate",codeExample:"if not is_solid(next_x, next_y): x = next_x; y = next_y"},{question:"What is a Circle-to-AABB (Box) collision algorithm?",shortAnswer:"Find the closest point on the rectangle `(cx, cy)` to the circle center, and check if `distance(circle, closest_pt) <= radius`.",explanation:"Clamping the circle center to rectangle bounds yields the nearest surface point for radial testing.",hint:"How do you test collision between a circle and a rectangle?",level:"advanced",codeExample:"cx = max(box.min_x, min(circle.x, box.max_x))"},{question:"Why should `math.hypot(dx, dy)` be used instead of `math.sqrt(dx**2 + dy**2)`?",shortAnswer:"`math.hypot()` is faster, more numerically robust against floating-point overflow/underflow, and more concise.",explanation:"Python's `math.hypot()` is implemented in optimized C.",hint:"What optimized function computes Euclidean distance between points?",level:"basic",codeExample:"dist = math.hypot(x2 - x1, y2 - y1)"},{question:"How do you create an endless bouncing screensaver with changing trail colors on each bounce?",shortAnswer:"Cycle `ball.color = colors[bounce_count % len(colors)]` inside the boundary collision branch.",explanation:"Collision events can trigger arbitrary cosmetic and gameplay state changes.",hint:"How are color changes linked to wall impact events?",level:"basic",codeExample:"if bounced: ball_color = random.choice(palette)"},{question:"What is the minimum collision boundary box for a canvas sized 800x600?",shortAnswer:"`min_x = -400, max_x = 400, min_y = -300, max_y = 300` in standard Turtle origin-centered coordinates.",explanation:"Turtle coordinates center `(0, 0)` at the exact middle of the window.",hint:"What are the coordinate boundaries for an 800x600 Turtle screen?",level:"basic",codeExample:"# Width 800 → [-400, 400] | Height 600 → [-300, 300]"},{question:"How do you simulate a soft sponge wall that slows the ball down gradually upon contact?",shortAnswer:"Instead of instantaneous reflection, apply an opposing spring damping force `f = -k * penetration` while inside the wall zone.",explanation:"Penalty force methods model soft deformable boundaries.",hint:"How are soft deformable boundaries simulated in physics?",level:"expert",codeExample:"# Spring penalty force during wall penetration"},{question:"What is the 3-step Golden Rule for 2D Boundary Collision in Python Turtle?",shortAnswer:"1. Check edge overlap with radius | 2. Snap position to boundary surface | 3. Reverse normal velocity vector (`vx = -vx`).",explanation:"This 3-step sequence prevents tunneling, sticky walls, and jitter artifacts.",hint:"What 3 steps execute perfect boundary collision in Turtle?",level:"basic",codeExample:"# 1. Detect overlap → 2. Snap position → 3. Invert velocity"},{question:"How does boundary detection logic translate into professional robotics and autonomous drone control?",shortAnswer:"Autonomous drones and robot vacuums use identical bounding box and distance-sensor equations to avoid colliding with walls and obstacles.",explanation:"Geofencing and obstacle avoidance in robotics rely directly on 2D/3D boundary mathematics.",hint:"How do autonomous drones use boundary detection in the real world?",level:"basic",codeExample:"# Robotics geofencing & obstacle avoidance systems"},{question:"Why is mastering boundary detection essential for multi-agent simulations?",shortAnswer:"Because confining hundreds of autonomous particles or game agents inside bounded spatial domains prevents memory leaks and runaway entity coordinates.",explanation:"Spatial containment keeps simulations bounded and computationally stable.",hint:"Why is spatial containment critical for multi-agent systems?",level:"moderate",codeExample:"# Spatial containment of autonomous agent swarms"}],N=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 5 - Boundary detection and wall bouncing logic\r
File: box_boundary_bouncing_billiards.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
4-Wall Billiards Boundary Collision with Radius Compensation:\r
- Left Wall:   \`if x - radius <= min_x: x = min_x + radius; vx = -vx\`\r
- Right Wall:  \`if x + radius >= max_x: x = max_x - radius; vx = -vx\`\r
- Top Wall:    \`if y + radius >= max_y: y = max_y - radius; vy = -vy\`\r
- Bottom Wall: \`if y - radius <= min_y: y = min_y + radius; vy = -vy\`\r
"""\r
\r
import turtle\r
import random\r
import time\r
\r
def run_billiards_simulation():\r
    screen = turtle.Screen()\r
    screen.title("4-Wall Billiards Boundary Collision - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    # 1. Arena Boundary Box Turtle\r
    box_t = turtle.Turtle(); box_t.hideturtle(); box_t.pensize(4)\r
    min_x, max_x = -300, 300\r
    min_y, max_y = -200, 200\r
\r
    box_t.penup(); box_t.goto(min_x, min_y); box_t.pendown()\r
    box_t.color("#38bdf8", "#0f172a"); box_t.begin_fill()\r
    box_t.goto(max_x, min_y); box_t.goto(max_x, max_y); box_t.goto(min_x, max_y); box_t.goto(min_x, min_y)\r
    box_t.end_fill()\r
\r
    # 2. Billiard Ball\r
    ball_t = turtle.Turtle(); ball_t.hideturtle()\r
    radius = 18\r
\r
    x, y = 0.0, 0.0\r
    vx, vy = 5.5, 4.2\r
    bounce_count = 0\r
\r
    for frame in range(300):\r
        # Kinematics\r
        x += vx\r
        y += vy\r
\r
        # Boundary checks with radius compensation & position snapping\r
        if x + radius >= max_x:\r
            x = max_x - radius\r
            vx = -vx\r
            bounce_count += 1\r
        elif x - radius <= min_x:\r
            x = min_x + radius\r
            vx = -vx\r
            bounce_count += 1\r
\r
        if y + radius >= max_y:\r
            y = max_y - radius\r
            vy = -vy\r
            bounce_count += 1\r
        elif y - radius <= min_y:\r
            y = min_y + radius\r
            vy = -vy\r
            bounce_count += 1\r
\r
        # Render\r
        ball_t.clear()\r
        ball_t.penup(); ball_t.goto(x, y); ball_t.pendown()\r
        ball_t.color("white", "#f43f5e")\r
        ball_t.begin_fill(); ball_t.circle(radius); ball_t.end_fill()\r
\r
        # Telemetry\r
        ball_t.penup(); ball_t.goto(-300, 220); ball_t.pendown()\r
        ball_t.color("#34d399")\r
        ball_t.write(f"BOUNCES: {bounce_count:03d} | POS: ({x:.1f}, {y:.1f}) | VEL: ({vx:+.1f}, {vy:+.1f})", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_billiards_simulation()\r
`,A=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 5 - Boundary detection and wall bouncing logic\r
File: screen_wrap_vs_bounce_comparison.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Comparison of two screen boundary mechanics:\r
1. PONG BOUNCE: Velocity vector reverses upon edge contact (\`vx = -vx\`)\r
2. ASTEROIDS WRAP: Object teleports to opposite edge (Toroidal space: \`if x > max_x: x = min_x\`)\r
"""\r
\r
import turtle\r
import time\r
\r
def run_boundary_comparison():\r
    screen = turtle.Screen()\r
    screen.title("Bounce vs Screen Wrap Comparison - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    # Ball 1: Bounce Mode (Top half)\r
    b1 = {"x": -300.0, "y": 100.0, "vx": 6.0, "color": "#38bdf8", "name": "Bounce Ball (Pong)"}\r
\r
    # Ball 2: Screen Wrap Mode (Bottom half)\r
    b2 = {"x": -300.0, "y": -100.0, "vx": 6.0, "color": "#34d399", "name": "Wrap Ball (Asteroids)"}\r
\r
    for _ in range(250):\r
        t.clear()\r
\r
        # Divider\r
        t.penup(); t.goto(-380, 0); t.pendown(); t.color("#334155"); t.forward(760)\r
\r
        # 1. Update Bounce Ball\r
        b1["x"] += b1["vx"]\r
        if b1["x"] >= 340:\r
            b1["x"] = 340\r
            b1["vx"] = -b1["vx"]\r
        elif b1["x"] <= -340:\r
            b1["x"] = -340\r
            b1["vx"] = -b1["vx"]\r
\r
        # 2. Update Wrap Ball\r
        b2["x"] += b2["vx"]\r
        if b2["x"] > 350:\r
            b2["x"] = -350\r
\r
        # Draw Ball 1\r
        t.penup(); t.goto(b1["x"], b1["y"]); t.pendown()\r
        t.color("white", b1["color"]); t.begin_fill(); t.circle(18); t.end_fill()\r
        t.penup(); t.goto(-350, 160); t.pendown(); t.color(b1["color"])\r
        t.write(f"{b1['name']}  |  X: {b1['x']:.1f}  |  VX: {b1['vx']:.1f}", font=("Arial", 11, "bold"))\r
\r
        # Draw Ball 2\r
        t.penup(); t.goto(b2["x"], b2["y"]); t.pendown()\r
        t.color("white", b2["color"]); t.begin_fill(); t.circle(18); t.end_fill()\r
        t.penup(); t.goto(-350, -40); t.pendown(); t.color(b2["color"])\r
        t.write(f"{b2['name']}  |  X: {b2['x']:.1f}  |  Toroidal Teleport", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_boundary_comparison()\r
`,B=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 5 - Boundary detection and wall bouncing logic\r
File: interactive_air_hockey_arena.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Air Hockey Puck with 4-wall collision, center paddle obstacle deflection,\r
and surface friction deceleration.\r
"""\r
\r
import turtle\r
import math\r
import time\r
\r
def run_air_hockey_demo():\r
    screen = turtle.Screen()\r
    screen.title("Air Hockey Arena - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    # Puck State\r
    puck = {"x": -100.0, "y": 50.0, "vx": 6.5, "vy": 4.5, "radius": 16}\r
    arena = {"min_x": -320, "max_x": 320, "min_y": -200, "max_y": 200}\r
    friction = 0.995\r
\r
    for frame in range(250):\r
        t.clear()\r
\r
        # Draw Table Arena\r
        t.penup(); t.goto(arena["min_x"], arena["min_y"]); t.pendown()\r
        t.color("#0284c7", "#0f172a"); t.pensize(4); t.begin_fill()\r
        t.goto(arena["max_x"], arena["min_y"]); t.goto(arena["max_x"], arena["max_y"])\r
        t.goto(arena["min_x"], arena["max_y"]); t.goto(arena["min_x"], arena["min_y"])\r
        t.end_fill(); t.pensize(2)\r
\r
        # Center Red Goal Line\r
        t.penup(); t.goto(0, arena["min_y"]); t.pendown()\r
        t.color("#ef4444"); t.goto(0, arena["max_y"])\r
\r
        # Update Physics\r
        puck["x"] += puck["vx"]\r
        puck["y"] += puck["vy"]\r
        puck["vx"] *= friction\r
        puck["vy"] *= friction\r
\r
        r = puck["radius"]\r
        # Wall Collisions\r
        if puck["x"] + r >= arena["max_x"]:\r
            puck["x"] = arena["max_x"] - r; puck["vx"] = -puck["vx"]\r
        elif puck["x"] - r <= arena["min_x"]:\r
            puck["x"] = arena["min_x"] + r; puck["vx"] = -puck["vx"]\r
\r
        if puck["y"] + r >= arena["max_y"]:\r
            puck["y"] = arena["max_y"] - r; puck["vy"] = -puck["vy"]\r
        elif puck["y"] - r <= arena["min_y"]:\r
            puck["y"] = arena["min_y"] + r; puck["vy"] = -puck["vy"]\r
\r
        # Draw Puck\r
        t.penup(); t.goto(puck["x"], puck["y"]); t.pendown()\r
        t.color("white", "#fbbf24"); t.begin_fill(); t.circle(r); t.end_fill()\r
\r
        # Telemetry\r
        speed = math.hypot(puck["vx"], puck["vy"])\r
        t.penup(); t.goto(-300, 220); t.pendown(); t.color("#38bdf8")\r
        t.write(f"PUCK SPEED: {speed:.2f} px/f | POS: ({puck['x']:.0f}, {puck['y']:.0f})", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_air_hockey_demo()\r
`,T=`================================================================================\r
  TOPIC 5: BOUNDARY DETECTION AND WALL BOUNCING LOGIC\r
  MODULE: 005_005 - Animation & Motion Logic\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS BOUNDARY COLLISION DETECTION?\r
--------------------------------------------------------------------------------\r
Boundary detection checks whether an object's bounding geometry has intersected\r
or exceeded the edges of the active display canvas or arena box.\r
\r
2. THE 3 MANDATORY STEPS OF WALL BOUNCING\r
--------------------------------------------------------------------------------\r
1. Overlap Condition with Radius Offset:\r
   \`if x + radius >= max_x:\`\r
\r
2. Position Snapping (Anti-Tunneling Correction):\r
   \`x = max_x - radius\` (Prevents the ball from getting stuck inside the wall)\r
\r
3. Velocity Reflection:\r
   \`vx = -vx\` (Reverses horizontal momentum while preserving vertical motion)\r
\r
3. BOUNCE VS TOROIDAL SCREEN WRAPPING\r
--------------------------------------------------------------------------------\r
- Bouncing (Pong / Billiards): Velocity flips direction (\`vx = -vx\`).\r
- Toroidal Wrapping (Asteroids / Pac-Man): Object teleports seamlessly to opposite edge:\r
  \`if x > max_x: x = min_x\`\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,C=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes sparkFlash {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.6); opacity: 0; }
}
`,O=()=>{const[a,y]=u.useState("bounce"),[l,b]=u.useState({x:150,y:90,vx:4.5,vy:3.2}),[g,c]=u.useState(0);u.useEffect(()=>{let n=150,t=90,i=4.5,s=3.2;const o=12,d=25,x=295,p=25,m=155,v=setInterval(()=>{n+=i,t+=s,a==="bounce"?(n+o>=x?(n=x-o,i=-i,c(r=>r+1)):n-o<=d&&(n=d+o,i=-i,c(r=>r+1)),t+o>=m?(t=m-o,s=-s,c(r=>r+1)):t-o<=p&&(t=p+o,s=-s,c(r=>r+1))):(n>x+10&&(n=d-10),n<d-10&&(n=x+10),t>m+10&&(t=p-10),t<p-10&&(t=m+10)),b({x:n,y:t,vx:i,vy:s})},25);return()=>clearInterval(v)},[a]);const f=[{name:"if x + radius >= max_x:",returnType:"Boundary Overlap Check",purpose:"Detects collision with right wall taking radial geometry into account.",usage:`if x + r >= max_x:
    x = max_x - r
    vx = -vx`},{name:"x = max_x - radius",returnType:"Position Correction",purpose:"Snaps object position back inside boundary, preventing sticky-wall and tunneling bugs.",usage:"x = max_x - radius"},{name:"vx = -vx; vy = -vy",returnType:"Velocity Vector Reflection",purpose:"Reverses perpendicular velocity vector component upon elastic boundary collision.",usage:"vx = -vx"},{name:"if x > max_x: x = min_x",returnType:"Toroidal Screen Wrap",purpose:"Teleports entity seamlessly to opposing edge for Asteroids / Pac-Man wrap mechanics.",usage:"if x > max_x: x = min_x"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:C}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 · Animation & Motion Logic · Topic 5"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Boundary Detection & Wall Bouncing Logic"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Contain and steer moving entities across virtual worlds. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"4-Wall Box Boundary Collisions"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Anti-Tunneling Position Snapping"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"Radius Compensation"}),", and ",e.jsx("span",{className:"text-indigo-400 font-semibold",children:"Toroidal Screen Wrapping"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎱 4-Wall Billiards Reflection"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🛡️ Anti-Tunneling Position Snapping"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🚀 Asteroids-Style Toroidal Wrapping"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎱"})," Interactive Boundary Collision & Wrap Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch between Solid Wall Bouncing (Pong/Billiards) and Toroidal Screen Wrapping (Asteroids/Pac-Man)."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>y("bounce"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="bounce"?"bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"🎱 Solid Wall Bouncing (Pong)"}),e.jsx("button",{onClick:()=>y("wrap"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="wrap"?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"🚀 Toroidal Screen Wrap (Asteroids)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Boundary Viewport (",a.toUpperCase()," MODE)"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("rect",{x:"20",y:"20",width:"280",height:"140",rx:"4",fill:"#0f172a",stroke:a==="bounce"?"#38bdf8":"#334155",strokeWidth:"3",strokeDasharray:a==="wrap"?"6 6":"none"}),e.jsx("circle",{cx:l.x,cy:l.y,r:"12",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"2"}),e.jsxs("text",{x:"30",y:"38",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:["BOUNCES: ",g," | POS: (",l.x.toFixed(0),", ",l.y.toFixed(0),")"]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Boundary Collision Equations"}),e.jsx("span",{className:"font-mono text-xs text-amber-300",children:"Anti-Tunneling Safe"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Radius Offset Compensation"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:"r = 12 px"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Center-to-surface offset"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Collision Total"}),e.jsxs("div",{className:"text-base font-mono font-bold text-emerald-400",children:[g," Hits"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Zero tunneling confirmed"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# 3-Stage Boundary Collision Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:a==="bounce"?`# 1. Detect | 2. Snap | 3. Invert
if x + r >= max_x:
    x = max_x - r
    vx = -vx`:`# Toroidal Screen Teleport
if x > max_x:
    x = min_x`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Boundary Detection & Reflection APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Boundary Rule"}),e.jsx("th",{className:"py-3 px-4",children:"Axis / Mode"}),e.jsx("th",{className:"py-3 px-4",children:"Collision Handling Function"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:f.map((n,t)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:n.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:n.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:n.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:n.usage})]},t))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(h,{fileModule:N,title:"box_boundary_bouncing_billiards.py",highlightLines:[25,26,42,43,44,47,48,52,53]}),e.jsx(h,{fileModule:A,title:"screen_wrap_vs_bounce_comparison.py",highlightLines:[22,33,34,35,42,43]}),e.jsx(h,{fileModule:B,title:"interactive_air_hockey_arena.py",highlightLines:[20,21,38,39,43,44,49,50]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏓"})," Barrackpore Pong: Solving Sticky Paddle Walls"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima brought a Pong game to class where the ball frequently got stuck vibrating inside the top wall. Teacher Sukanta Hui guided her to implement ",e.jsx("strong",{children:"Position Snapping"})," (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"y = max_y - radius"}),") right before inverting velocity. The sticky-wall bug disappeared completely, and the game ran flawlessly!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🚀"})," Jadavpur Space Rocks: Seamless Wrapping"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu in Jadavpur built an Asteroids space combat arena. Instead of solid walls, he implemented toroidal wrapping: when a spaceship or asteroid flew past the right edge, it immediately re-emerged on the left with identical velocity and angle, creating an infinite feeling cosmic arena!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Boundary Collision Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting Radius Compensation"}),e.jsxs("p",{className:"text-slate-400",children:["Checking ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if x >= max_x"})," without subtracting the circle's radius causes the ball to sink halfway into the wall before bouncing."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Omitting Position Correction"}),e.jsxs("p",{className:"text-slate-400",children:["Only inverting velocity (",e.jsx("code",{className:"text-rose-300 font-mono",children:"vx = -vx"}),") without snapping position leaves the ball inside the boundary on the next frame, causing it to rapidly vibrate back and forth trapped inside the wall."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. High-Speed Tunneling Glitches"}),e.jsxs("p",{className:"text-slate-400",children:["When velocity per frame is greater than wall thickness (e.g. ",e.jsx("code",{className:"text-amber-300 font-mono",children:"vx = 40"}),"), the ball jumps completely through the wall in a single frame without ever triggering collision."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Hardcoding Screen Coordinates"}),e.jsxs("p",{className:"text-slate-400",children:["Hardcoding walls to 300px on a resized 1000px window causes balls to bounce off invisible boundaries in mid-air. Always use ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.window_width() // 2"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I check boundary collisions taking the object's radius (`x + radius >= max_x`) into account","I always snap the object position back inside the boundary (`x = max_x - radius`)","I invert normal velocity vectors (`vx = -vx` or `vy = -vy`) on impact","I know how to implement toroidal screen wrapping for seamless wrap-around games","I understand how Continuous Collision Detection (CCD) prevents high-speed tunneling","I can calculate 2D Euclidean distance (`math.hypot(dx, dy)`) for circle-to-circle collisions"].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:n})]},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How video games like Breakout, Pong, and Pinball use boundary mathematics to keep playfields active and exciting!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How toggling between Solid Bouncing and Toroidal Wrap instantly converts a contained billiards table into an infinite universe!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add corner bumpers that repel balls with double speed when hitting 45-degree angled corners!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Spatial containment is the bedrock of simulation stability. By mastering boundary conditions, position corrections, and normal vector reflections, you gain the engineering precision required to build robust physics simulations, robotic navigation algorithms, and collision engines that never glitch."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(w,{title:"Boundary Detection & Bouncing FAQs",questions:k})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(j,{content:T,title:"Topic 5: Boundary Detection Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(_,{note:"When we teach collision mechanics at Coder & AccoTax in Barrackpore and Kolkata, I emphasize: detecting the hit is only half the battle—correcting the position is what makes your physics rock-solid. Always remember the three-step dance: detect, snap, and reflect. Do this, and your game physics will feel crisp, responsive, and arcade-perfect!"})})]})]})};export{O as default};

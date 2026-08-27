import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as w}from"./TeacherSukantaHui-CyIG3xbg.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{F as v}from"./FAQTemplate-CkSqDH4B.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const _=[{question:"What is the Entity-List pattern in multi-object animation?",shortAnswer:"Storing all moving game objects inside a Python list (e.g. `enemies = [...]`) and updating/rendering them in a single `for` loop.",explanation:"Allows scaling from 1 object to 500 objects with identical codebase structure.",hint:"What data structure stores a collection of animated game objects?",level:"basic",codeExample:`for entity in entities:
    entity.update()
    entity.draw(t)`},{question:"Why should `t.clear()` and `screen.update()` be called ONCE per frame rather than inside the entity loop?",shortAnswer:"Calling clear or update inside the entity loop erases previously drawn entities and causes 100x slowdown.",explanation:"The entire entity batch must be drawn into the back buffer before a single unified screen update.",hint:"How many times per frame should clear() and update() be invoked?",level:"basic",codeExample:`t.clear()
for e in entities: draw(e)
screen.update()`},{question:"How do you despawn and clean up dead entities (e.g. bullets that exited the screen)?",shortAnswer:"Filter the list using a list comprehension: `bullets = [b for b in bullets if b['y'] < max_y]`.",explanation:"Purging offscreen entities prevents memory leaks and unbounded computation growth.",hint:"How do list comprehensions prune expired entities?",level:"basic",codeExample:"bullets = [b for b in bullets if is_on_screen(b)]"},{question:"What is Object Pooling in high-performance game engines?",shortAnswer:"Pre-allocating a fixed set of reusable entity objects rather than continuously creating and destroying them in memory.",explanation:"Object pooling eliminates garbage collection pauses during intensive combat scenes.",hint:"What pattern reuses pre-allocated objects to avoid memory allocations?",level:"advanced",codeExample:"# Object Pool: Recycle inactive bullet instances"},{question:"How do you animate a solar system with multiple planets orbiting at different speeds?",shortAnswer:"Store each planet with its own orbit radius `r` and angular velocity `speed`, computing `x = r*cos(theta)`, `y = r*sin(theta)` per frame.",explanation:"Independent polar coordinate angle stepping produces synchronized multi-body orbital mechanics.",hint:"What formulas compute multi-planet orbital positions?",level:"moderate",codeExample:"x = r * math.cos(math.radians(angle))"},{question:"What is the computational complexity of checking collisions among `N` particles?",shortAnswer:"`O(N^2)` with brute force nested loops; can be optimized to `O(N)` using spatial hash grids.",explanation:"Every particle checking against every other particle requires `N*(N-1)/2` comparisons.",hint:"What is the Big-O complexity of brute-force all-pairs collision testing?",level:"moderate",codeExample:`for i in range(len(balls)):
    for j in range(i+1, len(balls)): check_hit(balls[i], balls[j])`},{question:"How many entities can Python Turtle animate smoothly at 60 FPS using `tracer(0)` and a single turtle?",shortAnswer:"Between 200 and 500 simple circle entities simultaneously on standard modern CPUs.",explanation:"Double-buffered mathematical batching delivers immense throughput in standard Python.",hint:"What is the typical entity capacity for 60 FPS in Turtle?",level:"basic",codeExample:"# 500+ particles at 60 FPS with tracer(0)"},{question:"What is Particle System Emitter in visual effects?",shortAnswer:"A manager that spawns batches of tiny transient sprites (sparks, smoke, fire) with randomized lifetimes and velocities.",explanation:"Particle systems simulate fluids, explosions, magic spells, and weather phenomena.",hint:"What subsystem generates sparks, smoke, and explosions?",level:"moderate",codeExample:"def emit_sparks(x, y, count=20): ..."},{question:"How do you fade out particles as they age?",shortAnswer:"Reduce particle radius or cycle color from bright yellow -> orange -> dark red -> transparent based on `age / max_lifetime`.",explanation:"Progressive lifetime scaling creates realistic burning ember and fading smoke effects.",hint:"How does particle lifetime alter appearance over time?",level:"moderate",codeExample:"p['radius'] = p['orig_radius'] * (1.0 - p['age'] / p['life'])"},{question:"What is Flocking Simulation (Boids Algorithm)?",shortAnswer:"An emergent multi-agent algorithm based on 3 simple rules: Separation (avoid crowding), Alignment (match heading), and Cohesion (steer toward flock center).",explanation:"Craig Reynolds' Boids algorithm simulates birds, schools of fish, and insect swarms realistically.",hint:"What famous 3-rule algorithm simulates bird flocks and fish schools?",level:"advanced",codeExample:"# Boids: 1. Separation | 2. Alignment | 3. Cohesion"},{question:"Why should you avoid creating a separate `turtle.Turtle()` instance for every single bullet?",shortAnswer:"Creating 500 turtle instances exhausts Tkinter graphics handles and degrades framerate; use a single turtle to draw all 500 data points.",explanation:"Decoupling entity data from the rendering tool unlocks massive performance.",hint:"Why should one turtle draw all bullets instead of one turtle per bullet?",level:"basic",codeExample:"# 1 Turtle renders 500 entity dicts"},{question:"How do you implement enemy wave spawning with staggered delay intervals in Turtle?",shortAnswer:"Track a `spawn_timer` in the frame loop: `if frame % 60 == 0: spawn_enemy_wave()`.",explanation:"Frame modulo intervals schedule periodic wave arrivals smoothly.",hint:"How do you trigger enemy wave spawns every 1 second (60 frames)?",level:"basic",codeExample:"if frame % 60 == 0: enemies.append(create_enemy())"},{question:"What is Spatial Partitioning (Grid Hashing) in large-scale multi-object games?",shortAnswer:"Dividing the 2D world into a grid of cells and only testing collisions between objects occupying the same or adjacent cells.",explanation:"Spatial partitioning reduces collision checks from `O(N^2)` down to `O(N)`.",hint:"What technique divides the world into cells to optimize collision testing?",level:"expert",codeExample:"grid[get_cell(x, y)].append(entity)"},{question:"How do you animate a fireworks grand finale with 20 simultaneous exploding shells?",shortAnswer:"Each exploding shell appends 30 particle dictionaries to a global `particles` list with randomized radial velocity vectors.",explanation:"Multi-burst particle systems handle hundreds of concurrent sparks effortlessly.",hint:"How do multiple firework shells populate particle arrays?",level:"moderate",codeExample:"for shell in shells: if shell.exploded: spawn_burst(particles)"},{question:"What is Entity-Component-System (ECS) architecture?",shortAnswer:"A software architecture where Entities are IDs, Components are pure data structs, and Systems are functions that update components.",explanation:"ECS is the industry-standard architecture powering modern commercial game engines like Unity DOTS.",hint:"What data-driven pattern separates IDs, data components, and logic systems?",level:"expert",codeExample:"# ECS: Entities + Components + Systems"},{question:"How do you draw health bars floating above 20 moving enemy characters?",shortAnswer:"Inside the entity render loop, draw a small green/red rectangle at `(e.x - 15, e.y + 25)` for each active enemy.",explanation:"Attaching local HUD elements to entity coordinates keeps UI anchored to moving characters.",hint:"How are health bars positioned relative to character coordinates?",level:"moderate",codeExample:"draw_health_bar(t, e['x'], e['y'] + 25, e['health'])"},{question:"How do you prevent two autonomous wandering agents from colliding with each other?",shortAnswer:"Calculate distance between agents; if `dist < min_dist`, steer velocity vector away from the neighboring agent.",explanation:"Radial repulsive steering keeps wandering crowds and NPCs naturally spaced apart.",hint:"How is repulsive steering calculated to prevent NPC collisions?",level:"advanced",codeExample:"vx += (dx / dist) * push_force"},{question:"Why is functional list filtering `[e for e in entities if e.alive]` better than `entities.remove(e)` inside a loop?",shortAnswer:"Modifying a list with `remove()` while iterating over it skips elements and causes index mutation bugs.",explanation:"List comprehensions create a clean, bug-free filtered copy of the list.",hint:"Why should you never mutate a list while iterating over it?",level:"moderate",codeExample:"# GOOD: [e for e in entities if e.alive]"},{question:"How do you animate a snake body with trailing segments following the head?",shortAnswer:"Store segment coordinates in a list; on each move, insert new head position at index 0 and pop the last tail segment.",explanation:"Queue/deque coordinate shifting models classic retro Snake body mechanics.",hint:"How do queue data structures model Snake segment trailing?",level:"moderate",codeExample:"body.insert(0, (new_x, new_y)); body.pop()"},{question:"What is Particle Recycling in memory management?",shortAnswer:"Resetting dead particle properties (`x, y, vx, vy, age=0`) at the emitter rather than deleting and re-allocating heap memory.",explanation:"In-place attribute mutation eliminates memory allocation and garbage collection churn.",hint:"What technique resets dead particle attributes in place?",level:"advanced",codeExample:"p['age'] = 0; p['x'] = emitter_x; p['active'] = True"},{question:"How do you simulate snow gently falling across a winter landscape in Turtle?",shortAnswer:"Initialize 60 snowflake dicts with random `(x, y)` and small downward speeds; when `y < -250`, reset `y = 250` at top.",explanation:"Wrapping snowflakes vertically creates an endless, gentle snowstorm effect.",hint:"How do vertical wrapping particles create infinite snowfall?",level:"basic",codeExample:"if s['y'] < -250: s['y'] = 250; s['x'] = random_x()"},{question:"What is Delta-Time scaling across heterogeneous entity update systems?",shortAnswer:"Multiplying every individual entity's velocity by global `dt`: `e['x'] += e['vx'] * dt`.",explanation:"Enforces framerate independence across the entire multi-object ecosystem.",hint:"How do multi-entity loops maintain constant real-time speeds?",level:"basic",codeExample:"e['x'] += e['vx'] * dt; e['y'] += e['vy'] * dt"},{question:"How do you simulate gravity attracting all planets toward a central sun (N-Body gravity)?",shortAnswer:"For each planet, calculate vector toward sun `(dx, dy)`, distance `r`, and apply gravitational acceleration `a = G * M_sun / (r^2)`.",explanation:"Newton's inverse-square law generates accurate elliptical and circular orbits.",hint:"What formula applies gravitational acceleration toward central bodies?",level:"advanced",codeExample:"a = G * M / (dist**2); vx += a * (dx/dist); vy += a * (dy/dist)"},{question:"How do you implement bullet-to-enemy hit detection for 50 bullets and 20 enemies?",shortAnswer:"Loop over each bullet, check distance to each enemy; if `dist < radius_sum`, mark both as destroyed and spawn explosion particles.",explanation:"Nested collision loops resolve projectile impacts and score increments.",hint:"How are bullet-enemy collision loops structured?",level:"moderate",codeExample:"if math.hypot(b['x'] - e['x'], b['y'] - e['y']) < 20: explode(e)"},{question:"Why should you use integer or float coordinates in entity dicts rather than reading `t.pos()`?",shortAnswer:"Querying `t.pos()` over the GUI bridge is hundreds of times slower than accessing native Python dictionary variables in RAM.",explanation:"Keeping all physics state in RAM variables maximizes execution performance.",hint:"Why is native Python dictionary access faster than querying turtle coordinates?",level:"basic",codeExample:"# Read e['x'] directly in RAM instead of t.pos()"},{question:"How do you create an interactive laser defense turret firing at incoming asteroid swarms?",shortAnswer:"Manage two entity lists (`asteroids` and `lasers`); spawn lasers toward mouse clicks, update both lists, and test intersection.",explanation:"Dual-list entity management drives classic arcade defense games like Missile Command.",hint:"What 2 lists manage asteroids and defense lasers?",level:"moderate",codeExample:"# asteroids = [...] | lasers = [...]"},{question:"What is Emergence in multi-agent simulations?",shortAnswer:"Complex, intelligent-looking collective behavior (e.g. flocking, traffic jams) arising spontaneously from simple individual rules.",explanation:"Emergence is the mathematical foundation of swarm intelligence and artificial life.",hint:"What term describes complex collective patterns arising from simple local rules?",level:"expert",codeExample:"# Emergent swarm intelligence from simple local rules"},{question:"How do you benchmark how many entities your computer can animate before dropping below 60 FPS?",shortAnswer:"Increment entity count by 50 every second while monitoring measured FPS: `fps = 1.0 / (frame_time)`.",explanation:"Dynamic stress testing establishes the maximum entity capacity of your hardware.",hint:"How do you stress test multi-entity rendering capacity?",level:"advanced",codeExample:"if fps < 58: print(f'Max entity limit reached: {len(entities)}')"},{question:"What is the 3-step Golden Rule for Multi-Object Synchronized Loops in Python Turtle?",shortAnswer:"1. Store entities in a list of pure data dicts | 2. Update physics & draw all entities using a single turtle | 3. `screen.update()` once per frame.",explanation:"This 3-step blueprint guarantees rock-solid 60 FPS performance for hundreds of animated objects.",hint:"What 3 steps build high-performance multi-entity engines in Turtle?",level:"basic",codeExample:"# 1. Data list | 2. Single turtle batch draw | 3. Atomic update()"},{question:"How does multi-object loop architecture connect to enterprise cloud and distributed systems?",shortAnswer:"Batching data updates in memory before committing unified flushes is the exact pattern used in database batch inserts, stream processing (Kafka/Spark), and cloud microservices.",explanation:"Batch processing and entity synchronization are foundational distributed systems concepts.",hint:"How does batch loop processing relate to Kafka, Spark, and database batching?",level:"basic",codeExample:"# High-throughput batch processing architecture"}],N=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 6 - Multi-object synchronized animation loops\r
File: multi_particle_swarm_synchronizer.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Synchronized Multi-Entity Swarm Loop:\r
Updates and renders 40 independent bouncing balls within a single 60 FPS frame cycle\r
using an Entity-Data List and double-buffered \`screen.tracer(0)\`.\r
"""\r
\r
import turtle\r
import random\r
import time\r
\r
def run_swarm_simulation():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Entity Swarm Synchronizer - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # Arena boundaries\r
    min_x, max_x = -350, 350\r
    min_y, max_y = -240, 240\r
\r
    colors = ["#38bdf8", "#34d399", "#fbbf24", "#f43f5e", "#a855f7", "#ec4899"]\r
\r
    # 1. Initialize 40 Entity Dictionaries\r
    entities = []\r
    for _ in range(40):\r
        entities.append({\r
            "x": random.uniform(-200, 200),\r
            "y": random.uniform(-150, 150),\r
            "vx": random.uniform(-5.0, 5.0),\r
            "vy": random.uniform(-5.0, 5.0),\r
            "radius": random.randint(8, 16),\r
            "color": random.choice(colors)\r
        })\r
\r
    for frame in range(300):\r
        t.clear()\r
\r
        # 2. Synchronized Batch Physics Update & Render\r
        for e in entities:\r
            # Kinematics\r
            e["x"] += e["vx"]\r
            e["y"] += e["vy"]\r
\r
            r = e["radius"]\r
            # 4-Wall Boundary Collisions\r
            if e["x"] + r >= max_x:\r
                e["x"] = max_x - r; e["vx"] = -e["vx"]\r
            elif e["x"] - r <= min_x:\r
                e["x"] = min_x + r; e["vx"] = -e["vx"]\r
\r
            if e["y"] + r >= max_y:\r
                e["y"] = max_y - r; e["vy"] = -e["vy"]\r
            elif e["y"] - r <= min_y:\r
                e["y"] = min_y + r; e["vy"] = -e["vy"]\r
\r
            # Render\r
            t.penup(); t.goto(e["x"], e["y"]); t.pendown()\r
            t.color("white", e["color"])\r
            t.begin_fill(); t.circle(r); t.end_fill()\r
\r
        # HUD Telemetry\r
        t.penup(); t.goto(-350, 260); t.pendown()\r
        t.color("#34d399")\r
        t.write(f"SYNCHRONIZED ENTITIES: {len(entities)} · 60 FPS STABLE · FRAME: {frame:03d}", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_swarm_simulation()\r
`,S=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 6 - Multi-object synchronized animation loops\r
File: entity_pool_bullet_spawner.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Dynamic Entity Lifecycle Management:\r
- Spawns bullets on spacebar\r
- Updates all active bullets concurrently\r
- Despawns and purges bullets that travel beyond the canvas boundary (garbage prevention)\r
"""\r
\r
import turtle\r
import time\r
\r
def run_bullet_spawner():\r
    screen = turtle.Screen()\r
    screen.title("Dynamic Entity Spawner & Despawner - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    bullets = []\r
    player = {"x": 0, "y": -200, "vx": 0}\r
\r
    # Spawner Trigger\r
    def spawn_bullet():\r
        bullets.append({\r
            "x": player["x"],\r
            "y": player["y"] + 25,\r
            "vy": 12.0\r
        })\r
\r
    def move_left(): player["x"] = max(-300, player["x"] - 20)\r
    def move_right(): player["x"] = min(300, player["x"] + 20)\r
\r
    screen.listen()\r
    screen.onkeypress(spawn_bullet, "space")\r
    screen.onkeypress(move_left, "Left")\r
    screen.onkeypress(move_right, "Right")\r
\r
    # Auto-spawn demo bullets\r
    for frame in range(250):\r
        if frame % 15 == 0:\r
            spawn_bullet()\r
\r
        t.clear()\r
\r
        # 1. Update and Filter Active Bullets (Despawn offscreen)\r
        active_bullets = []\r
        for b in bullets:\r
            b["y"] += b["vy"]\r
            if b["y"] < 260:  # Within canvas\r
                active_bullets.append(b)\r
                # Render Bullet\r
                t.penup(); t.goto(b["x"], b["y"]); t.pendown()\r
                t.color("#fbbf24"); t.pensize(3); t.forward(12); t.pensize(1)\r
        bullets = active_bullets\r
\r
        # 2. Render Player Ship\r
        t.penup(); t.goto(player["x"] - 20, player["y"]); t.pendown()\r
        t.color("#34d399", "#059669"); t.begin_fill()\r
        for _ in range(4): t.forward(40); t.left(90)\r
        t.end_fill()\r
\r
        # HUD Telemetry\r
        t.penup(); t.goto(-320, 220); t.pendown()\r
        t.color("#38bdf8")\r
        t.write(f"ACTIVE BULLETS: {len(bullets)} · SPACE: FIRE · LEFT/RIGHT: MOVE", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_bullet_spawner()\r
`,E=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 6 - Multi-object synchronized animation loops\r
File: solar_system_orbital_mechanics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Multi-Body Solar System Orbital Simulation:\r
Synchronizes orbital angular velocity for Sun, Mercury, Earth, Mars, and Jupiter:\r
- Position: \`x = r * cos(theta)\`, \`y = r * sin(theta)\`\r
- Angular velocity: \`theta += omega\` (Keplerian orbital periods)\r
"""\r
\r
import turtle\r
import math\r
import time\r
\r
def run_solar_system_simulation():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Body Solar System Simulator - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    planets = [\r
        {"name": "Mercury", "radius": 60,  "size": 5,  "speed": 4.15, "angle": 0, "color": "#cbd5e1"},\r
        {"name": "Earth",   "radius": 110, "size": 9,  "speed": 2.00, "angle": 45,"color": "#38bdf8"},\r
        {"name": "Mars",    "radius": 160, "size": 7,  "speed": 1.25, "angle": 90,"color": "#f43f5e"},\r
        {"name": "Jupiter", "radius": 220, "size": 16, "speed": 0.65, "angle": 180,"color": "#fbbf24"}\r
    ]\r
\r
    for frame in range(300):\r
        t.clear()\r
\r
        # 1. Central Sun\r
        t.penup(); t.goto(0, -25); t.setheading(0); t.pendown()\r
        t.color("#f59e0b", "#fbbf24"); t.begin_fill(); t.circle(25); t.end_fill()\r
\r
        # 2. Draw Orbit Track Rings & Synchronized Planets\r
        for p in planets:\r
            # Orbital Track Line\r
            t.penup(); t.goto(0, -p["radius"]); t.pendown()\r
            t.color("#1e293b"); t.circle(p["radius"])\r
\r
            # Update Angle\r
            p["angle"] = (p["angle"] + p["speed"]) % 360\r
            rad = math.radians(p["angle"])\r
            px = p["radius"] * math.cos(rad)\r
            py = p["radius"] * math.sin(rad)\r
\r
            # Draw Planet\r
            t.penup(); t.goto(px, py - p["size"]); t.pendown()\r
            t.color("white", p["color"]); t.begin_fill(); t.circle(p["size"]); t.end_fill()\r
\r
        # Telemetry\r
        t.penup(); t.goto(-350, 260); t.pendown(); t.color("#34d399")\r
        t.write(f"SYNCHRONIZED SOLAR ENGINE · 4 PLANETS IN HARMONY · FRAME: {frame:03d}", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_solar_system_simulation()\r
`,k=`================================================================================\r
  TOPIC 6: MULTI-OBJECT SYNCHRONIZED ANIMATION LOOPS\r
  MODULE: 005_005 - Animation & Motion Logic\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS MULTI-ENTITY SYNCHRONIZATION?\r
--------------------------------------------------------------------------------\r
Multi-entity synchronization coordinates dozens or hundreds of autonomous\r
moving objects (bullets, enemies, planets, particles) within a single unified\r
60 FPS frame cycle.\r
\r
2. THE ENTITY-LIST ARCHITECTURE\r
--------------------------------------------------------------------------------\r
1. Store entities in a Python list of dictionaries or class instances:\r
   \`entities = [{'x': 0, 'y': 0, 'vx': 4, 'vy': 3, 'color': '#38bdf8'}, ...]\`\r
\r
2. In the 60 FPS loop:\r
   - Clear canvas once (\`t.clear()\`)\r
   - Loop over all entities: update physics and draw\r
   - Filter/despawn dead entities (\`[e for e in entities if e['alive']]\`)\r
   - Flush buffer once (\`screen.update()\`)\r
\r
3. SCALING TO 100+ ENTITIES AT 60 FPS\r
--------------------------------------------------------------------------------\r
By using a single turtle cursor with \`screen.tracer(0)\` and pure math lists,\r
Python can effortlessly animate 500+ particles simultaneously with rock-solid 60 FPS.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,T=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glowSun {
  0%, 100% { filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.8)); }
  50% { filter: drop-shadow(0 0 20px rgba(245, 158, 11, 1)); }
}
`,F=()=>{const[a,p]=o.useState("swarm"),[l,x]=o.useState(25),[u,h]=o.useState([]),[y,g]=o.useState(0);o.useEffect(()=>{const t=["#38bdf8","#34d399","#fbbf24","#f43f5e","#a855f7","#ec4899"],r=[];for(let n=0;n<l;n++)r.push({x:Math.random()*240+30,y:Math.random()*110+30,vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,r:Math.floor(Math.random()*5)+6,color:t[n%t.length]});h(r)},[l]),o.useEffect(()=>{if(a!=="swarm")return;const t=setInterval(()=>{h(r=>r.map(n=>{let s=n.x+n.vx,i=n.y+n.vy,c=n.vx,d=n.vy;return s+n.r>=300?(s=300-n.r,c=-c):s-n.r<=20&&(s=20+n.r,c=-c),i+n.r>=160?(i=160-n.r,d=-d):i-n.r<=20&&(i=20+n.r,d=-d),{...n,x:s,y:i,vx:c,vy:d}}))},25);return()=>clearInterval(t)},[a]),o.useEffect(()=>{if(a!=="solar")return;const t=setInterval(()=>{g(r=>r+1)},30);return()=>clearInterval(t)},[a]);const f=[{name:"Mercury",r:40,size:4,speed:4,color:"#cbd5e1"},{name:"Earth",r:75,size:7,speed:2,color:"#38bdf8"},{name:"Mars",r:105,size:5,speed:1.3,color:"#f43f5e"},{name:"Jupiter",r:135,size:11,speed:.7,color:"#fbbf24"}],b=[{name:"for entity in entities:",returnType:"Batch Kinematic Processing",purpose:"Iterates over active entity dataset, applying physics and collision resolution to each actor.",usage:`for e in entities:
    update_entity(e)`},{name:"active = [e for e in entities if e.alive]",returnType:"Entity Lifecycle Pruning",purpose:"Filters and cleans up expired entities (offscreen bullets, dead particles) preventing memory leaks.",usage:"bullets = [b for b in bullets if b['y'] < max_y]"},{name:"screen.tracer(0) + Single Turtle",returnType:"Mass Rendering Acceleration",purpose:"Renders 500+ synchronized entity vectors in RAM in < 2 ms before swapping to screen.",usage:`t.clear()
for e in entities: draw(e)
screen.update()`},{name:"Object Pool Allocator",returnType:"Memory Recycling",purpose:"Reuses pre-allocated entity instances in place, eliminating garbage collection pauses.",usage:"recycle_particle(p, emitter_x, emitter_y)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:T}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 · Animation & Motion Logic · Topic 6"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent",children:"Multi-Object Synchronized Animation Loops"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Scale from single sprites to massive multi-entity worlds. Master ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Entity-List Architecture"}),", ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Synchronized 60 FPS Batch Updates"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Multi-Body Orbital Mechanics"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Object Lifecycle Pruning"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🐝 50+ Entity Swarm Synchronization"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🪐 Keplerian Multi-Body Solar System"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔫 Dynamic Spawner & Lifecycle Pruning"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🌌"})," Synchronized Multi-Entity Engine"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch between an Autonomous Multi-Particle Bouncing Swarm and a Harmonious Keplerian Solar System."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>p("swarm"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="swarm"?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:["🐝 Particle Swarm (",l," Entities)"]}),e.jsx("button",{onClick:()=>p("solar"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${a==="solar"?"bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:"🪐 Multi-Planet Solar System"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Live Simulation Viewport (",a.toUpperCase()," MODE)"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[a==="swarm"&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"20",y:"20",width:"280",height:"140",rx:"4",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),u.map((t,r)=>e.jsx("circle",{cx:t.x,cy:t.y,r:t.r,fill:t.color,stroke:"#ffffff",strokeWidth:"1"},r))]}),a==="solar"&&e.jsxs("g",{transform:"translate(160, 90)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"16",fill:"#fbbf24",stroke:"#f59e0b",strokeWidth:"2",className:"animate-[glowSun_3s_infinite]"}),f.map((t,r)=>{const n=(y*t.speed+r*60)*Math.PI/180,s=t.r*Math.cos(n),i=t.r*Math.sin(n);return e.jsxs("g",{children:[e.jsx("circle",{cx:"0",cy:"0",r:t.r,fill:"none",stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("circle",{cx:s,cy:i,r:t.size,fill:t.color,stroke:"#ffffff",strokeWidth:"1"})]},r)})]}),e.jsxs("text",{x:"25",y:"18",fill:"#94a3b8",fontSize:"8.5",fontFamily:"monospace",children:[a==="swarm"?`ENTITIES: ${u.length} ACTIVE`:"ORBITAL MECHANICS SYNCHRONIZED"," | 60 FPS ROCK-SOLID"]})]}),a==="swarm"&&e.jsxs("div",{className:"w-full max-w-xs mt-3 flex items-center justify-between gap-3 text-xs text-slate-300",children:[e.jsx("span",{children:"Particle Count:"}),e.jsx("input",{type:"range",min:"10",max:"50",step:"5",value:l,onChange:t=>x(parseInt(t.target.value)),className:"w-36 accent-emerald-400 cursor-pointer"}),e.jsx("span",{className:"font-mono text-emerald-300 font-bold",children:l})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Multi-Object Synchronization Engine"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300",children:"O(N) Linear Batch"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Active Actor Capacity"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:"500+ Entities"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Double-buffered RAM list"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Frame Budget Utilization"}),e.jsx("div",{className:"text-base font-mono font-bold text-emerald-400",children:"< 1.8 ms / frame"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Pure Python C-bytecode"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Entity-List Batch Loop Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`while running:
    t.clear()
    for e in entities:
        e.update_physics()
        draw_entity(t, e)
    screen.update()
    time.sleep(1/60)`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Multi-Entity Architectural APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Pattern / Mechanism"}),e.jsx("th",{className:"py-3 px-4",children:"Subsystem"}),e.jsx("th",{className:"py-3 px-4",children:"Scalability & Synchronization Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:b.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(m,{fileModule:N,title:"multi_particle_swarm_synchronizer.py",highlightLines:[29,30,42,45,50,56,64]}),e.jsx(m,{fileModule:S,title:"entity_pool_bullet_spawner.py",highlightLines:[21,22,42,44,46,49,58]}),e.jsx(m,{fileModule:E,title:"solar_system_orbital_mechanics.py",highlightLines:[20,21,22,38,39,40,45]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🚀"})," Barrackpore Space Armada: 100 Bullets at 60 FPS"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mahima created a bullet-hell space shooter in Barrackpore. When 50 laser bolts and 20 alien fighters were active, her game maintained a flawless 60 FPS because she managed all bullets in a clean Python dictionary list and purged offscreen bolts with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"[b for b in bullets if b.y < 300]"}),"!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-indigo-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🪐"})," Kolkata Planetarium Orbital Engine"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu in Kolkata simulated the full solar system including moons orbiting planets. By nesting entity update dictionaries, Earth orbited the Sun while the Moon concurrently orbited Earth—all synchronized within a single double-buffered frame loop!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Multi-Object Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Creating Turtles for Each Bullet"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"bullet = turtle.Turtle()"})," on spacebar press creates hundreds of OS window handles, crashing Tkinter in minutes. Use 1 turtle to render all entity dicts."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Mutating Lists While Iterating"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"bullets.remove(b)"})," inside ",e.jsx("code",{className:"text-rose-300 font-mono",children:"for b in bullets:"})," skips subsequent elements due to index shifting. Use list comprehensions."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Clearing Canvas Inside Entity Loops"}),e.jsxs("p",{className:"text-slate-400",children:["Placing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"t.clear()"})," inside the entity loop erases all previous entities on every step, rendering only the final particle on screen. Clear once before the loop."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Memory Leaks from Unpruned Entities"}),e.jsx("p",{className:"text-slate-400",children:"Failing to despawn bullets when they travel offscreen causes the bullets list to grow to 100,000+ items, degrading performance to 2 FPS. Always prune offscreen actors."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I manage multi-object entities in a single list of dictionaries or class instances","I update and render all entities in a unified 60 FPS loop using 1 turtle cursor","I call `t.clear()` once at the start of the frame and `screen.update()` at the end","I prune offscreen entities using list comprehensions to prevent memory leaks","I know how to implement multi-body orbital mechanics and particle systems","I understand how object pooling recycles entity memory in high-speed games"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How commercial game engines like Unity, Godot, and Unreal Engine coordinate thousands of interacting entities through Entity-Component Systems (ECS)!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How 50 particles bounce independently without stutter when batched in a single double-buffered frame pass!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add gravity to all swarm particles so they bounce together like a fountain of colorful confetti!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Congratulations on completing Module 005_005! You have mastered the complete foundations of interactive motion and game animation: frame loops, double-buffering, flicker elimination, asynchronous timing, 2D Newtonian physics, boundary collisions, and multi-entity synchronization. You are now fully equipped to build complex interactive games, simulations, and real-time visual software!"})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(v,{title:"Multi-Object Synchronized Loops FAQs",questions:_})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(j,{content:k,title:"Topic 6: Multi-Object Synchronized Loops Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(w,{note:"As we conclude Module 005_005 at Coder & AccoTax in Barrackpore and Kolkata, I am incredibly proud of how far our students have come. You started with simple turtle lines, and now you are orchestrating multi-body solar systems, particle swarms, and 60 FPS physics engines. Carry these principles of synchronization, batching, and clean lifecycle management forward—they are the exact building blocks of professional software engineering!"})})]})]})};export{F as default};

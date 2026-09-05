import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as j}from"./TeacherSukantaHui-DerPxfxp.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{F as N}from"./FAQTemplate-BHhlgA96.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CH1iX9C8.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const E=[{question:"What is Forward Euler Integration in computer game physics?",shortAnswer:"A numerical integration method that updates velocity from acceleration, and position from velocity on each discrete time step.",explanation:"Euler integration is the fundamental building block of 2D physics simulations.",hint:"What numerical technique updates velocity and position iteratively each tick?",level:"basic",codeExample:"vy -= g * dt; y += vy * dt"},{question:"How is gravity simulated in 2D vector coordinates?",shortAnswer:"By subtracting a constant acceleration value from vertical velocity on every frame: `vy -= gravity`.",explanation:"Gravity pulls downward along the negative Y-axis.",hint:"How is downward vertical acceleration calculated per frame?",level:"basic",codeExample:"vy -= gravity"},{question:"Why do projectiles follow a parabolic trajectory under constant gravity?",shortAnswer:"Because horizontal velocity `vx` remains constant while vertical displacement `y` follows a quadratic function of time: `y(t) = vy*t - 0.5*g*t^2`.",explanation:"Constant horizontal velocity combined with linear vertical deceleration forms a parabola.",hint:"What geometric curve is formed by constant horizontal speed and vertical gravitational acceleration?",level:"moderate",codeExample:"# Parabolic arc: x = vx*t, y = vy0*t - 0.5*g*t^2"},{question:"What is the Coefficient of Restitution (Elasticity) during a floor collision?",shortAnswer:"The ratio of final to initial velocity after collision: `vy = -vy * elasticity` (where `0.0 <= elasticity <= 1.0`).",explanation:"Models kinetic energy loss dissipated as heat and sound during impacts.",hint:"What factor scales velocity reversal during a bounce?",level:"basic",codeExample:"vy = -vy * 0.75  # 75% energy retained"},{question:"Why is Position Correction (`y = floor_y`) mandatory upon floor collision?",shortAnswer:"Because discrete time steps cause the ball to sink partially below the floor line before collision is detected.",explanation:"Snapping the object back to the floor surface prevents the ball from tunneling through the boundary.",hint:"Why must coordinates be snapped back to floor height upon collision?",level:"moderate",codeExample:"if y <= floor_y: y = floor_y; vy = -vy * e"},{question:"What is Ground Friction and how is it simulated in 2D physics?",shortAnswer:"A deceleration damping factor applied to horizontal velocity: `vx *= friction` (e.g. `vx *= 0.98`).",explanation:"Progressively slows rolling objects to a natural halt.",hint:"How is horizontal rolling resistance calculated in code?",level:"basic",codeExample:"vx *= 0.98"},{question:"What causes 'micro-jitter' at the end of a bouncing ball animation and how do you fix it?",shortAnswer:"Tiny residual velocities oscillating infinitely around 0; fix by clamping `if abs(vy) < threshold: vy = 0`.",explanation:"Threshold clamping allows objects to come to a clean, static rest.",hint:"How do you stop tiny bouncing vibrations when the ball comes to rest?",level:"moderate",codeExample:"if abs(vy) < 0.5: vy = 0"},{question:"How does aerodynamic air drag differ from linear ground friction?",shortAnswer:"Air drag opposes velocity in both X and Y directions: `vx *= (1 - drag)`, `vy *= (1 - drag)`.",explanation:"Aerodynamic drag dampens overall kinetic momentum through air resistance.",hint:"How does air resistance affect velocity components?",level:"moderate",codeExample:"vx *= 0.99; vy *= 0.99"},{question:"How do you calculate initial velocity components `(vx, vy)` from a launch angle and speed?",shortAnswer:"`vx = speed * math.cos(radians(angle))` and `vy = speed * math.sin(radians(angle))`.",explanation:"Trigonometric vector decomposition converts polar launch vectors to Cartesian velocity components.",hint:"What trigonometric functions split launch speed into vx and vy?",level:"basic",codeExample:"vx = speed * math.cos(rad); vy = speed * math.sin(rad)"},{question:"What is Terminal Velocity in falling object simulations?",shortAnswer:"The maximum constant speed reached when downward gravitational force equals upward aerodynamic drag force.",explanation:"Air drag balances gravity, capping maximum falling acceleration.",hint:"What is the steady-state maximum falling speed called?",level:"advanced",codeExample:"# At terminal velocity: drag_force == gravity"},{question:"How does Moon gravity (1.6 m/s²) visually compare to Earth gravity (9.8 m/s²)?",shortAnswer:"Moon gravity produces much higher, wider, slower floaty parabolic jumps; Earth gravity produces snappy, tighter arcs.",explanation:"Lower gravity values prolong flight time and increase apex height.",hint:"How does low gravitational acceleration affect projectile arcs?",level:"basic",codeExample:"# Moon: g=1.6 (floaty) | Earth: g=9.8 (snappy)"},{question:"What is Verlet Integration and when is it preferred over Euler Integration?",shortAnswer:"A position-based integration method that calculates velocity implicitly: `x_new = 2*x - x_old + a*dt^2`.",explanation:"Verlet integration offers superior numerical stability for cloth, rope, and particle physics.",hint:"What position-based integration method provides higher numerical stability?",level:"advanced",codeExample:"pos_new = 2*pos - pos_old + acc*dt*dt"},{question:"How do you calculate the peak Apex height of a projectile?",shortAnswer:"When vertical velocity reaches exactly zero (`vy == 0`): `height = (vy0^2) / (2 * g)`.",explanation:"At the trajectory apex, kinetic energy is fully converted into potential energy.",hint:"What is the vertical velocity at the highest point of a parabolic arc?",level:"moderate",codeExample:"apex_y = start_y + (vy0**2) / (2 * g)"},{question:"How do you simulate a spring oscillator (Hooke's Law) in Python Turtle?",shortAnswer:"Calculate spring force `F = -k * displacement`, update acceleration `a = F / mass`, and step `vy += a * dt`.",explanation:"Hooke's Law models harmonic bouncing elastic springs and bungee cords.",hint:"What law models spring force as proportional to displacement?",level:"advanced",codeExample:"f = -k * (y - rest_y); vy += (f / mass) * dt"},{question:"What is Kinetic Energy in bouncing ball physics?",shortAnswer:"`KE = 0.5 * mass * velocity^2`; with each bounce, elasticity absorbs a percentage of total kinetic energy.",explanation:"Energy dissipation reduces bounce height progressively until rest.",hint:"What form of energy is proportional to velocity squared?",level:"moderate",codeExample:"ke = 0.5 * mass * (vx**2 + vy**2)"},{question:"How do you simulate wind blowing across a projectile trajectory?",shortAnswer:"Add a constant horizontal wind acceleration: `vx += wind_acceleration * dt` on every frame.",explanation:"Wind force distorts parabolic symmetry, pushing projectiles downwind.",hint:"How is horizontal atmospheric wind force added to physics loops?",level:"basic",codeExample:"vx += wind_force * dt"},{question:"Why should collision checks take the ball's radius into account?",shortAnswer:"Because coordinate `(x, y)` is at the circle's center; checking `y <= floor` without radius causes the bottom half of the ball to sink through the floor.",explanation:"Surface boundary is `floor_y + radius`.",hint:"Why must radius be added to the floor boundary condition?",level:"basic",codeExample:"if y <= (floor_y + radius): bounce()"},{question:"What is an Inelastic Collision?",shortAnswer:"A collision where elasticity is 0.0 (`vy = 0`), causing the object to stick to the surface without bouncing.",explanation:"Models clay, mud, or lead balls dropping onto solid ground.",hint:"What happens when elasticity is set to 0.0?",level:"basic",codeExample:"elasticity = 0.0  # Perfect inelastic impact"},{question:"How do you calculate the range (total horizontal distance) of a projectile launched on flat ground?",shortAnswer:"`Range = (speed^2 * sin(2 * angle)) / g`.",explanation:"Maximum theoretical range occurs at a 45-degree launch angle.",hint:"What angle achieves maximum projectile range in vacuum?",level:"moderate",codeExample:"range = (v0**2 * math.sin(2 * rad)) / g"},{question:"How do you create an interactive Angry Birds-style slingshot launcher in Turtle?",shortAnswer:"Calculate pull vector `(dx, dy) = origin - mouse_pos`, set `vx = dx * power`, `vy = dy * power`, and release into gravity loop.",explanation:"Spring pull displacement directly maps to initial launch impulse velocity.",hint:"How is slingshot pull vector converted into velocity?",level:"advanced",codeExample:"vx = (origin_x - mx) * scale; vy = (origin_y - my) * scale"},{question:"What is Gravitational Slingshot (Orbital Assist) in planetary physics?",shortAnswer:"Using the gravitational pull and orbital motion of a planet to alter the speed and trajectory of a spacecraft.",explanation:"N-body Newtonian gravity models orbital slingshot mechanics.",hint:"What technique accelerates spacecraft using planetary gravity wells?",level:"expert",codeExample:"# N-body Newton: F = G * (m1*m2) / r^2"},{question:"Why do small delta time values (`dt = 0.016`) produce more accurate physics than large values (`dt = 0.5`)?",shortAnswer:"Smaller `dt` steps minimize numerical integration truncation error in Euler approximations.",explanation:"Euler integration error scales linearly with time step size.",hint:"Why does smaller dt improve simulation accuracy?",level:"moderate",codeExample:"# Smaller dt = higher mathematical precision"},{question:"How do you simulate a basketball spinning and bouncing with Magnus effect in air?",shortAnswer:"Apply a perpendicular aerodynamic lift force `F_magnus = S * (omega x v)` to acceleration.",explanation:"The Magnus effect models curving baseball pitches and spinning basketball arcs.",hint:"What aerodynamic effect curves spinning balls in flight?",level:"expert",codeExample:"# Magnus lift: acc_y += spin * vx * lift_coeff"},{question:"How do you draw the trajectory projection guide dots ahead of the projectile launch?",shortAnswer:"Run a temporary mathematical loop calculating future positions `(x(t), y(t))` and draw small tracer dots along the predicted arc.",explanation:"Predictive aiming lines show players where the shot will land before firing.",hint:"How are trajectory aiming guide lines calculated in advance?",level:"advanced",codeExample:"for t_step in range(10): draw_dot(calc_pos(t_step))"},{question:"What is the difference between Speed and Velocity?",shortAnswer:"Speed is a scalar quantity (magnitude); Velocity is a vector quantity with both magnitude and directional components `(vx, vy)`.",explanation:"Velocity dictates directional motion in 2D space.",hint:"Which physics quantity includes direction in addition to magnitude?",level:"basic",codeExample:"speed = math.hypot(vx, vy)  # Magnitude from velocity vector"},{question:"How do you simulate buoyancy for an object floating on water?",shortAnswer:"If `y < water_level`, apply an upward buoyant force opposing gravity: `vy += (buoyancy - gravity) * dt`.",explanation:"Archimedes' principle balances upward buoyancy against downward gravity.",hint:"How is floating buoyancy calculated beneath the water line?",level:"moderate",codeExample:"if y < water_y: vy += buoyancy_force"},{question:"What is Superelastic Collision (Elasticity > 1.0)?",shortAnswer:"A physical impossibility in passive physics where energy is added on impact, causing the ball to bounce higher and higher exponentially.",explanation:"Setting elasticity > 1.0 creates explosive trampoline powerups in arcade games.",hint:"What happens in code if elasticity is set to 1.2?",level:"moderate",codeExample:"elasticity = 1.2  # Adds kinetic energy on bounce"},{question:"How do you animate dust clouds puffing outward when a heavy rock impacts the ground?",shortAnswer:"Spawn 6 small circle particles at impact point with randomized upward and outward velocities `(vx, vy)` that fade over 300ms.",explanation:"Impact particle bursts provide visceral tactile feedback for heavy collisions.",hint:"How are ground impact dust effects generated?",level:"advanced",codeExample:"spawn_dust_particles(impact_x, floor_y)"},{question:"What is the 3-step Golden Rule for 2D Physics in Python Turtle?",shortAnswer:"1. Apply forces to acceleration | 2. Update velocity `vy -= g * dt` | 3. Update position `y += vy * dt` and handle collisions.",explanation:"This 3-step kinematic pipeline powers all Newtonian physics engines.",hint:"What 3 steps execute Newtonian physics integration?",level:"basic",codeExample:"# 1. Forces → 2. Velocity → 3. Position & Collisions"},{question:"How does 2D physics simulation connect to engineering and science careers?",shortAnswer:"The exact same Euler/Verlet equations simulate aerospace flight dynamics, vehicle crash testing, orbital satellite tracking, and robotic arm kinematics.",explanation:"Game physics is applied computational mathematics and Newtonian mechanics.",hint:"How do game physics equations apply to aerospace and robotics engineering?",level:"basic",codeExample:"# Real-world computational physics and robotics foundations"}],k=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 4 - Simulating basic 2D physics: velocity, acceleration, and gravity\r
File: euler_kinematics_gravity_cannon.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Classic 2D Projectile Physics via Forward Euler Integration:\r
1. Update Position: \`x += vx * dt\`, \`y += vy * dt\`\r
2. Update Velocity: \`vy -= gravity * dt\`\r
3. Aerodynamic Drag: \`vx *= (1 - drag * dt)\`\r
Renders a parabolic arc projectile from a cannon turret.\r
"""\r
\r
import turtle\r
import math\r
import time\r
\r
def run_cannon_simulation():\r
    screen = turtle.Screen()\r
    screen.title("Euler Projectile Physics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    # 1. Background Ground Turtle\r
    bg_t = turtle.Turtle(); bg_t.hideturtle()\r
    bg_t.penup(); bg_t.goto(-400, -200); bg_t.pendown()\r
    bg_t.color("#334155", "#0f172a"); bg_t.begin_fill()\r
    for _ in range(2): bg_t.forward(800); bg_t.right(90); bg_t.forward(100); bg_t.right(90)\r
    bg_t.end_fill()\r
\r
    # 2. Physics Ball Turtle\r
    ball_t = turtle.Turtle(); ball_t.hideturtle()\r
    trail_t = turtle.Turtle(); trail_t.hideturtle(); trail_t.pensize(2)\r
\r
    # Initial kinematic parameters\r
    launch_angle = 55.0  # degrees\r
    launch_speed = 90.0  # px/s\r
    rad = math.radians(launch_angle)\r
\r
    x, y = -350.0, -200.0\r
    vx = launch_speed * math.cos(rad)\r
    vy = launch_speed * math.sin(rad)\r
    gravity = 18.0  # px/s^2\r
    drag = 0.05     # air resistance\r
\r
    trail_t.penup(); trail_t.goto(x, y); trail_t.pendown(); trail_t.color("#38bdf8")\r
\r
    dt = 0.08  # Euler step interval\r
\r
    while y >= -200:\r
        # Euler Integration\r
        x += vx * dt\r
        y += vy * dt\r
        vy -= gravity * dt\r
        vx *= (1.0 - drag * dt)\r
\r
        # Draw Trajectory Trail\r
        trail_t.goto(x, y)\r
\r
        # Draw Ball\r
        ball_t.clear()\r
        ball_t.penup(); ball_t.goto(x, y); ball_t.pendown()\r
        ball_t.color("white", "#f43f5e")\r
        ball_t.begin_fill(); ball_t.circle(12); ball_t.end_fill()\r
\r
        # Telemetry\r
        ball_t.penup(); ball_t.goto(-360, 240); ball_t.pendown()\r
        ball_t.color("#34d399")\r
        ball_t.write(f"POS: ({x:.1f}, {y:.1f}) | VEL: ({vx:.1f}, {vy:.1f}) | GRAVITY: {gravity}", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_cannon_simulation()\r
`,T=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 4 - Simulating basic 2D physics: velocity, acceleration, and gravity\r
File: damped_bouncing_ball_physics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Realistic bouncing ball with coefficient of restitution (elasticity/damping):\r
- When ball hits ground (\`y <= floor_y\`):\r
  \`y = floor_y\` (Position correction)\r
  \`vy = -vy * elasticity\` (Velocity reversal with kinetic energy loss)\r
  \`vx *= ground_friction\` (Rolling friction)\r
"""\r
\r
import turtle\r
import time\r
\r
def run_bouncing_ball_demo():\r
    screen = turtle.Screen()\r
    screen.title("Damped Bouncing Ball Physics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    # Ground Line\r
    bg_t = turtle.Turtle(); bg_t.hideturtle()\r
    bg_t.penup(); bg_t.goto(-350, -180); bg_t.pendown()\r
    bg_t.color("#64748b"); bg_t.pensize(3); bg_t.forward(700)\r
\r
    ball_t = turtle.Turtle(); ball_t.hideturtle()\r
\r
    x = -280.0\r
    y = 150.0\r
    vx = 4.0\r
    vy = 0.0\r
\r
    gravity = 0.6\r
    elasticity = 0.75      # 75% energy retained per bounce\r
    floor_y = -180.0 + 15  # Floor + radius\r
    ground_friction = 0.98\r
\r
    for _ in range(250):\r
        # 1. Physics Step\r
        vy -= gravity\r
        x += vx\r
        y += vy\r
\r
        # 2. Collision & Restitution\r
        if y <= floor_y:\r
            y = floor_y\r
            vy = -vy * elasticity\r
            vx *= ground_friction\r
\r
            # Stop micro-jitter when kinetic energy falls below threshold\r
            if abs(vy) < 1.0:\r
                vy = 0.0\r
\r
        # 3. Render\r
        ball_t.clear()\r
        ball_t.penup(); ball_t.goto(x, y); ball_t.pendown()\r
        ball_t.color("white", "#fbbf24")\r
        ball_t.begin_fill(); ball_t.circle(15); ball_t.end_fill()\r
\r
        # Telemetry\r
        ball_t.penup(); ball_t.goto(-320, 210); ball_t.pendown()\r
        ball_t.color("#38bdf8")\r
        ball_t.write(f"BOUNCE SIMULATION · VY: {vy:+.2f} px/f · ELASTICITY: {elasticity*100:.0f}%", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        time.sleep(0.0166)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_bouncing_ball_demo()\r
`,I=`"""\r
Module: 005_005_turtle-animation\r
Topic: Topic 4 - Simulating basic 2D physics: velocity, acceleration, and gravity\r
File: interactive_physics_sandbox.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Multi-planet gravity sandbox:\r
- Earth Gravity: g = 9.8\r
- Moon Gravity:  g = 1.6\r
- Jupiter Gravity: g = 24.8\r
Demonstrating how gravitational acceleration alters parabolic trajectory curves.\r
"""\r
\r
import turtle\r
import math\r
\r
def simulate_planet_trajectory(screen, planet_name, gravity, color, start_y):\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    vx = 45.0 * math.cos(math.radians(45))\r
    vy = 45.0 * math.sin(math.radians(45))\r
    x, y = -350.0, -150.0\r
\r
    t.penup(); t.goto(x, y); t.pendown(); t.color(color)\r
    t.write(f"{planet_name} (g={gravity})", font=("Arial", 10, "bold"))\r
\r
    dt = 0.05\r
    while y >= -150:\r
        x += vx * dt\r
        y += vy * dt\r
        vy -= gravity * dt\r
        t.goto(x, y)\r
\r
def run_multi_gravity_sandbox():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Gravity Sandbox - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=800, height=600)\r
    screen.tracer(0)\r
\r
    # Simulate 3 planets\r
    simulate_planet_trajectory(screen, "Moon", 3.0, "#fef08a", -150)\r
    simulate_planet_trajectory(screen, "Earth", 9.8, "#38bdf8", -150)\r
    simulate_planet_trajectory(screen, "Jupiter", 24.8, "#f43f5e", -150)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    run_multi_gravity_sandbox()\r
`,S=`================================================================================\r
  TOPIC 4: SIMULATING BASIC 2D PHYSICS: VELOCITY, ACCELERATION, AND GRAVITY\r
  MODULE: 005_005 - Animation & Motion Logic\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS FORWARD EULER INTEGRATION?\r
--------------------------------------------------------------------------------\r
Euler integration is the numerical method of approximating continuous physics\r
by stepping discrete delta time intervals (\`dt\`):\r
1. Acceleration updates Velocity: \`vy -= gravity * dt\`\r
2. Velocity updates Position:     \`x += vx * dt\`, \`y += vy * dt\`\r
\r
2. SIMULATING GRAVITATIONAL PULL\r
--------------------------------------------------------------------------------\r
Gravity is a constant downward acceleration acting on the vertical velocity:\r
- On every frame tick: \`vy = vy - g\`\r
- As a result, the projectile rises decelerating to its peak apex (\`vy = 0\`),\r
  then accelerates downward, tracing a perfect mathematical parabola!\r
\r
3. BOUNCING RESTITUTION & FRICTION\r
--------------------------------------------------------------------------------\r
- Coefficient of Restitution (\`elasticity\`):\r
  Fraction of velocity retained after bounce: \`vy = -vy * elasticity\` (0.0 < e <= 1.0).\r
- Ground Friction:\r
  Horizontally decelerates rolling objects: \`vx = vx * friction\` (e.g. 0.98).\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,P=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bouncePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.7)); }
}
`,G=()=>{const[o,x]=l.useState("earth"),[r,u]=l.useState(.75),[m,g]=l.useState({x:30,y:30}),[d,v]=l.useState([]),y={moon:{name:"Moon (g = 1.6 m/s²)",gravity:.25,color:"#fef08a",speed:5.5},earth:{name:"Earth (g = 9.8 m/s²)",gravity:.8,color:"#38bdf8",speed:7},jupiter:{name:"Jupiter (g = 24.8 m/s²)",gravity:2.2,color:"#f43f5e",speed:8.5}},n=y[o]||y.earth;l.useEffect(()=>{let t=30,a=40,c=n.speed*.7,i=n.speed*.9;const f=n.gravity,w=r,p=145,s=[],_=setInterval(()=>{i+=f,t+=c,a+=i,a>=p&&(a=p,i=-i*w,c*=.98,Math.abs(i)<.8&&(i=0)),(t>=295||c<.1&&a>=p-1)&&(t=30,a=40,c=n.speed*.7,i=n.speed*.9,s.length=0),s.push({x:t,y:a}),s.length>40&&s.shift(),g({x:t,y:a}),v([...s])},30);return()=>clearInterval(_)},[o,r,n.gravity,n.speed]);const b=[{name:"vy -= gravity * dt",returnType:"Gravitational Integration",purpose:"Applies downward vertical gravitational acceleration to velocity on each tick.",usage:"vy -= 9.8 * dt"},{name:"x += vx * dt; y += vy * dt",returnType:"Forward Euler Step",purpose:"Translates object position across discrete delta time intervals based on current velocity.",usage:`x += vx * dt
y += vy * dt`},{name:"vy = -vy * elasticity",returnType:"Collision Restitution",purpose:"Reverses vertical velocity with coefficient of restitution, simulating kinetic energy loss.",usage:"vy = -vy * 0.75"},{name:"vx *= ground_friction",returnType:"Rolling Resistance",purpose:"Progressively dampens horizontal velocity when in contact with the ground surface.",usage:"vx *= 0.98"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:P}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 · Animation & Motion Logic · Topic 4"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Simulating 2D Physics: Velocity, Acceleration & Gravity"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Bridge pure mathematics and interactive visual motion. Master ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Forward Euler Integration"}),", ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Parabolic Projectile Trajectories"}),", and ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"Damped Collision Restitution"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌍 Planetary Gravity Engine (Moon / Earth / Jupiter)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚽ Damped Bouncing & Energy Dissipation"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 Parabolic Trajectory Projectiles"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🪐"})," Interactive 2D Gravitational Kinematics Sandbox"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust planetary gravity wells and surface elasticity to observe real-time parabolic projectile motion and bounce damping."})]}),e.jsx("div",{className:"flex items-center gap-2",children:["moon","earth","jupiter"].map(t=>e.jsx("button",{onClick:()=>x(t),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition capitalize cursor-pointer ${o===t?"bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:t},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-amber-400 mb-2",children:["Live Physics Viewport (",n.name,")"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg",children:[e.jsx("line",{x1:"15",y1:"155",x2:"305",y2:"155",stroke:"#475569",strokeWidth:"2"}),e.jsx("rect",{x:"15",y:"156",width:"290",height:"15",fill:"#0f172a"}),d.map((t,a)=>e.jsx("circle",{cx:t.x,cy:t.y,r:Math.max(1,a/d.length*3),fill:n.color,opacity:a/d.length},a)),e.jsxs("g",{transform:"translate(25, 45)",children:[e.jsx("line",{x1:"0",y1:"0",x2:"16",y2:"12",stroke:"#64748b",strokeWidth:"6",strokeLinecap:"round"}),e.jsx("circle",{cx:"0",cy:"0",r:"8",fill:"#334155"})]}),e.jsx("circle",{cx:m.x,cy:m.y,r:"10",fill:n.color,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsxs("text",{x:"25",y:"22",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:["G: ",n.gravity," | Elasticity: ",(r*100).toFixed(0),"%"]})]}),e.jsxs("div",{className:"w-full max-w-xs mt-3 flex items-center justify-between gap-3 text-xs text-slate-300",children:[e.jsx("span",{children:"Elasticity:"}),e.jsx("input",{type:"range",min:"0.2",max:"0.95",step:"0.05",value:r,onChange:t=>u(parseFloat(t.target.value)),className:"w-36 accent-amber-400 cursor-pointer"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold",children:[(r*100).toFixed(0),"%"]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-amber-400 flex justify-between items-center",children:[e.jsx("span",{children:"Forward Euler Integration Equations"}),e.jsx("span",{className:"font-mono text-xs text-cyan-300",children:"Newtonian Kinematics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Gravitational Apex"}),e.jsx("div",{className:"text-base font-mono font-bold text-sky-400",children:o==="moon"?"High / Floaty Arc":o==="earth"?"Natural Parabola":"Heavy / Flat Arc"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"vy = 0 peak point"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Kinetic Restitution"}),e.jsxs("div",{className:"text-base font-mono font-bold text-emerald-400",children:[(r*100).toFixed(0),"% Energy Retained"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Damped floor rebound"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# 2D Kinematic Update Step"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# 1. Accelerate
vy -= gravity * dt
# 2. Integrate Position
x += vx * dt; y += vy * dt
# 3. Collision & Restitution
if y <= floor_y:
    y = floor_y
    vy = -vy * ${r}`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," 2D Physics Engine Core Formulations"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Kinematic Formula"}),e.jsx("th",{className:"py-3 px-4",children:"Physics Law"}),e.jsx("th",{className:"py-3 px-4",children:"Simulation Mechanics"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Call"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:b.map((t,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 text-xs",children:t.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(h,{fileModule:k,title:"euler_kinematics_gravity_cannon.py",highlightLines:[32,33,44,45,46,47,56]}),e.jsx(h,{fileModule:T,title:"damped_bouncing_ball_physics.py",highlightLines:[29,30,31,35,36,37,40,41]}),e.jsx(h,{fileModule:I,title:"interactive_physics_sandbox.py",highlightLines:[22,23,24,34,35,36]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-amber-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Barrackpore Artillery Duel: Angle & Range"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu built a 2-player artillery cannon duel in Barrackpore. By calculating vector components ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"vx = speed * cos(rad)"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"vy = speed * sin(rad)"})," with gravity integration, he simulated realistic parabolic ballistic arcs that hit targets over mountains!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏀"})," Kolkata Basketball Free-Throw Simulator"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Susmita in Kolkata programmed a basketball physics engine. By tuning restitution elasticity to 0.78 and adding floor friction, she created a realistic ball that bounces progressively lower after hitting the hoop backboard and swishes into the net!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 2D Physics Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Omitting Position Correction on Floor"}),e.jsxs("p",{className:"text-slate-400",children:["Failing to snap ",e.jsx("code",{className:"text-rose-300 font-mono",children:"y = floor_y"})," upon collision causes the ball to sink into the floor, trapping it in an infinite bounce loop below the surface."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Infinite Micro-Jitter at Rest"}),e.jsxs("p",{className:"text-slate-400",children:["Without an energy threshold cutoff (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if abs(vy) < 0.8: vy = 0"}),"), floating-point rounding causes the ball to vibrate endlessly on the floor."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Inverting Gravity Direction"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"vy += gravity"})," causes the projectile to accelerate upward into the sky instead of falling downward. In Cartesian 2D, gravity must be subtracted."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Elasticity > 1.0 Energy Leak"}),e.jsxs("p",{className:"text-slate-400",children:["Setting elasticity to 1.1 creates an impossible super-elastic bounce that gains kinetic energy with every impact, launching the ball into infinity. Keep ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"0.0 <= elasticity <= 1.0"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-amber-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-amber-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand Forward Euler Integration (Acceleration → Velocity → Position)","I know how to decompose launch speed and angle into `(vx, vy)` vectors","I subtract downward gravitational acceleration (`vy -= g * dt`) on each frame tick","I know how to reverse velocity with restitution elasticity (`vy = -vy * e`) on collision","I always snap coordinates to floor height (`y = floor_y`) to prevent tunneling","I clamp micro-jitter velocities when kinetic energy drops below threshold"].map((t,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-amber-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-amber-900/20 rounded-2xl p-5 border border-amber-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How video games like Angry Birds, Worms, and Super Mario use the exact same gravitational Euler equations to simulate jumps and projectile arcs!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How switching between Moon, Earth, and Jupiter presets changes the parabolic flight apex from floaty and lofty to tight and heavy!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add aerodynamic wind resistance by applying ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"vx += wind_acc * dt"})," to blow the projectile back!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When Isaac Newton formulated the laws of motion in 1687, he laid the foundation for modern science. By writing these three simple lines of code—updating velocity with acceleration and position with velocity—you bring Newtonian mechanics to life inside your computer, unlocking the physics engine that powers everything from retro platformers to NASA spacecraft trajectories."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(N,{title:"2D Physics & Gravity Simulation FAQs",questions:E})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(A,{content:S,title:"Topic 4: 2D Physics & Gravity Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(j,{note:"Physics in coding is pure magic! At Coder & AccoTax in Barrackpore and Kolkata, when students first witness their ball launch along a mathematical parabola and bounce realistically across the floor, they realize that physics isn't just dry textbook formulas—it is the living, beating heart of game development and creative software engineering!"})})]})]})};export{G as default};

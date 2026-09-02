import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as E}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{F as v}from"./FAQTemplate-BHhlgA96.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const S=[{question:"What is a Finite State Machine (FSM) in software architecture?",shortAnswer:"A behavioral design pattern where an application exists in exactly one state at a time from a finite set of states (e.g. MENU, PLAYING, PAUSED, GAME_OVER).",explanation:"FSMs eliminate chaotic spaghetti flags by establishing clear transitions between discrete application modes.",hint:"What pattern models application lifecycle as discrete mutually exclusive states?",level:"basic",codeExample:"state = 'MENU'  # 'MENU' → 'PLAYING' → 'GAME_OVER'"},{question:"How does an FSM prevent keyboard inputs from moving a player while the game is paused?",shortAnswer:"By checking `if state == 'PLAYING': move_player()` inside the key handler or physics loop.",explanation:"State checks filter out inappropriate actions in non-playable states.",hint:"How does checking state prevent inputs during pause?",level:"basic",codeExample:"if state != 'PLAYING': return"},{question:"What is State-Driven Input Routing?",shortAnswer:"Mapping a single physical key (e.g. Spacebar) to different logical actions based on current state (Start in Menu, Jump in Playing, Restart in Game Over).",explanation:"Centralizes event dispatching and prevents key conflict bugs.",hint:"What technique dispatches the same key to different actions depending on state?",level:"moderate",codeExample:`def on_space():
    if state == 'MENU': start()
    elif state == 'GAME_OVER': restart()`},{question:"What happens to the physics loop when a game enters the `PAUSED` state?",shortAnswer:"Kinematic position updates (`x += vx`) are skipped, but the screen continues redrawing the frozen scene and pause menu.",explanation:"Freezing physics preserves entity positions while keeping the GUI responsive.",hint:"How does pausing affect physics versus rendering?",level:"basic",codeExample:"if state == 'PLAYING': update_physics()"},{question:"How do you implement a Restart / Play Again feature cleanly in an FSM?",shortAnswer:"Call a `reset_game()` function that resets score to 0, restores player health/lives, clears active bullets/enemies, and transitions state to `PLAYING`.",explanation:"Centralized reset functions guarantee clean restarts without lingering residual state.",hint:"What function re-initializes all game state variables upon restart?",level:"basic",codeExample:`def reset_game():
    score = 0; lives = 3; entities.clear(); state = 'PLAYING'`},{question:"What is the Transition Function in state machine theory?",shortAnswer:"The logic that dictates when and how the system changes from its current state to a target state based on an event trigger.",explanation:"Transitions enforce valid state paths (e.g. Cannot transition from PAUSED directly to GAME_OVER without resuming).",hint:"What logic validates moving from one state to another?",level:"moderate",codeExample:"# State Transition: MENU → PLAYING → PAUSED → PLAYING"},{question:"Why is an enum or string state variable better than 5 separate booleans (`is_menu`, `is_paused`, `is_gameover`)?",shortAnswer:"Because booleans can enter invalid contradictory states (e.g. `is_menu=True` AND `is_gameover=True`), whereas a single state variable guarantees mutual exclusivity.",explanation:"Eliminates illegal multi-state race conditions.",hint:"Why avoid multiple independent booleans for game states?",level:"moderate",codeExample:`# GOOD: state = 'PAUSED'
# BAD: is_paused = True; is_playing = True`},{question:"How do you render a semi-transparent modal pause dialog box in Turtle?",shortAnswer:"Draw the frozen game world, then draw a dark centered rectangle with bright text overlay (`PAUSED - Press P to Resume`).",explanation:"Modal overlays provide immediate visual confirmation of the paused state.",hint:"How is a modal pause menu rendered over the game canvas?",level:"moderate",codeExample:"draw_game_world(); if is_paused: draw_pause_modal()"},{question:"What is High Score Persistence across game sessions?",shortAnswer:"Saving the highest achieved score to a local text/JSON file (`highscore.json`) and loading it at startup in the `MENU` state.",explanation:"Persistent file I/O keeps player records intact across program restarts.",hint:"How are high scores saved between game sessions?",level:"moderate",codeExample:"with open('highscore.txt', 'w') as f: f.write(str(high_score))"},{question:"What is the State Pattern in Object-Oriented Programming (GoF)?",shortAnswer:"An OOP design pattern where each state is a separate class with `update()`, `draw()`, and `handle_input()` methods.",explanation:"The State pattern allows large game engines to swap entire state objects polymorphically.",hint:"What OOP pattern encapsulates states as Polymorphic classes?",level:"advanced",codeExample:`class PlayingState:
    def update(self): ...
    def draw(self): ...`},{question:"How do you handle Level Progression transitions (e.g. Level 1 → Level 2)?",shortAnswer:"When all enemies are cleared, transition to `LEVEL_TRANSITION` state, display 'LEVEL COMPLETED', and load Level 2 after 2 seconds.",explanation:"Staged transitions give players a rewarding pause between difficulty tiers.",hint:"What state handles rewards between game stages?",level:"moderate",codeExample:"if len(enemies) == 0: state = 'LEVEL_CLEAR'"},{question:"Why should sound effects (BGM) be paused or muted when entering the `PAUSED` state?",shortAnswer:"To match the visual freeze and provide an auditory cue that action has halted.",explanation:"Audio-visual synchronization reinforces game state clarity.",hint:"Why should music mute or pause in pause menus?",level:"basic",codeExample:"if state == 'PAUSED': bgm.pause()"},{question:"How do you prevent 'Input Bleed' when switching between states?",shortAnswer:"Wipe active key press states (`keys.clear()`) whenever transitioning between states.",explanation:"Prevents a jump or fire action queued in the menu from firing automatically in the first frame of gameplay.",hint:"How do you clear held keys upon transitioning into gameplay?",level:"advanced",codeExample:"keys.clear()  # Prevent input bleed"},{question:"What is a Splash / Loading Screen in game lifecycles?",shortAnswer:"An initial `SPLASH` state that displays company branding and loads assets into memory before displaying the main menu.",explanation:"Splash states mask asset preloading and initialization.",hint:"What initial state displays company logos before the main menu?",level:"basic",codeExample:"# SPLASH → MAIN_MENU"},{question:"How do you animate a blinking 'PRESS SPACE TO START' banner in the `MENU` state?",shortAnswer:"Use modulo arithmetic on the frame counter: `if (frame // 30) % 2 == 0: draw_text()`.",explanation:"Periodic frame modulo toggles visibility every 0.5 seconds.",hint:"How does frame modulo create retro blinking text?",level:"basic",codeExample:"if (frame // 30) % 2 == 0: draw_press_space()"},{question:"What is State Stack (Pushdown Automaton) in nested UI menus?",shortAnswer:"Pushing sub-menus (e.g. Audio Settings) onto a stack, so pressing Escape pops back to the previous Pause menu.",explanation:"Stack architectures manage multi-level hierarchical menus cleanly.",hint:"What data structure manages nested pause and settings submenus?",level:"expert",codeExample:"state_stack.push('SETTINGS'); state_stack.pop()"},{question:"How do you implement an Invulnerability / Spawn Shield state after player respawn?",shortAnswer:"Set `invulnerable_timer = 120` (2 seconds); during this window, skip collision checks and blink the player sprite.",explanation:"Spawn shields prevent unfair instant deaths upon respawning.",hint:"What timer protects newly respawned players from instant death?",level:"moderate",codeExample:"if player.invulnerable: blink_sprite(); return"},{question:"What is Game Loop Decoupling in state machines?",shortAnswer:"Keeping the main 60 FPS loop running continuously, delegating update/draw execution to whichever state is active.",explanation:"Avoids tearing down and rebuilding the event loop on state transitions.",hint:"Why should one outer loop manage all application states?",level:"moderate",codeExample:"while True: state_handlers[current_state]()"},{question:"How do you display game statistics (Accuracy, Enemies Killed, Time Elapsed) on the `GAME_OVER` screen?",shortAnswer:"Track telemetry metrics in the `game_state` dictionary and render them inside the `GAME_OVER` branch.",explanation:"End-game summary screens enhance replayability.",hint:"Where are end-game player statistics displayed?",level:"basic",codeExample:"t.write(f'ACCURACY: {hits/shots*100:.1f}%')"},{question:"What is an Escape Key Menu Hierarchy?",shortAnswer:"Esc in game opens Pause menu; Esc in Pause menu resumes; Esc in Main Menu prompts to Quit.",explanation:"Consistent Escape routing provides intuitive navigation across desktop applications.",hint:"How does Escape key navigation work across game screens?",level:"moderate",codeExample:"# Esc: In-Game → Pause | Pause → Resume | Menu → Exit"},{question:"How do you implement a Victory / Game Won state?",shortAnswer:"When final boss health reaches 0 or all 10 levels are beaten, transition to `VICTORY`, display fireworks and credits.",explanation:"Victory states reward player campaign completion.",hint:"What state celebrates completing all game levels?",level:"basic",codeExample:"if boss_health <= 0: state = 'VICTORY'"},{question:"What is Delta-Time freezing during Pause?",shortAnswer:"Setting `dt = 0` while paused, so all kinematic equations (`pos += vel * dt`) automatically calculate zero displacement.",explanation:"Zero-scaling delta-time freezes entire physics worlds instantly with zero special-case code.",hint:"How does setting dt = 0 freeze physics cleanly?",level:"advanced",codeExample:"dt = 0 if is_paused else measured_dt"},{question:"How do you prevent players from pausing during fatal death animations?",shortAnswer:"Transition directly to a `DYING` state that disables pause key bindings until the death animation finishes.",explanation:"Prevents players from breaking death sequences with pause glitches.",hint:"How do state machines lock out inputs during cutscenes and death animations?",level:"advanced",codeExample:"if state == 'DYING': ignore_pause_keys()"},{question:"What is State Serialization for Save Games?",shortAnswer:"Writing the entire `game_state` dictionary to a file using `json.dump()`, allowing players to resume their exact progress later.",explanation:"State serialization enables robust game saving and loading.",hint:"What process converts in-memory game state dictionaries to disk files?",level:"advanced",codeExample:"with open('save.json', 'w') as f: json.dump(game_state, f)"},{question:"How do you build an interactive Character Selection screen in the `MENU` state?",shortAnswer:"Display 3 character avatars; Left/Right arrow keys change `selected_char_idx`, updating stats preview before launching `PLAYING`.",explanation:"Character select screens configure starting player attributes.",hint:"How are character select menus constructed in Turtle?",level:"moderate",codeExample:"player['speed'] = characters[selected_idx]['speed']"},{question:"Why should `screen.tracer(0)` and `screen.update()` remain active across all states?",shortAnswer:"To ensure silky smooth rendering whether drawing static menu text, paused overlays, or 60 FPS gameplay.",explanation:"Unified rendering prevents screen flicker across state switches.",hint:"Why maintain double-buffering across all game states?",level:"basic",codeExample:"# Double-buffering active in Menu, Play, and Pause"},{question:"What is Confirmation Prompt in game exits?",shortAnswer:"Transitioning to `QUIT_CONFIRM` state ('Are you sure you want to quit? [Y/N]') before closing the application.",explanation:"Prevents accidental loss of game progress.",hint:"What dialog prevents accidental quitting?",level:"basic",codeExample:"state = 'CONFIRM_QUIT'"},{question:"What is the 3-step Golden Rule for Game State Management in Python Turtle?",shortAnswer:"1. Encapsulate state in an FSM variable | 2. Route inputs and physics by active state | 3. Render state-specific visuals with unified `screen.update()`.",explanation:"This 3-step blueprint forms the structural architecture of commercial games.",hint:"What 3 steps build robust game state management in Turtle?",level:"basic",codeExample:"# 1. state enum → 2. Branch inputs & physics → 3. Branch draw"},{question:"How does learning FSMs prepare students for professional software engineering?",shortAnswer:"Because Finite State Machines power network protocols (TCP handshakes), authentication lifecycles (OAuth), shopping checkouts, and UI state managers (Redux/XState).",explanation:"State machines are one of the most widely used architectural models in enterprise software engineering.",hint:"How do game state machines connect to enterprise software engineering?",level:"basic",codeExample:"# Universal FSM software architecture"},{question:"Why is code cleanliness and FSM design essential before adding 20 features to a game?",shortAnswer:"Without an FSM, adding new features creates exponential tangled boolean flags that cause endless game-breaking bugs.",explanation:"FSMs provide clear boundaries, making games effortlessly extensible.",hint:"Why do clean state machines prevent bug explosions as games grow?",level:"basic",codeExample:"# Extensible, modular, bug-free game architecture"}],A=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 6 - Managing game and interactive states (active, paused, game-over)\r
File: finite_state_machine_game_engine.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Finite State Machine (FSM) Game Architecture:\r
- State enum/string: "MENU", "PLAYING", "PAUSED", "GAME_OVER"\r
- State-specific rendering and physics logic.\r
- Clean transition events on Spacebar and Escape.\r
"""\r
\r
import turtle\r
\r
def run_fsm_game():\r
    screen = turtle.Screen()\r
    screen.title("FSM Game State Engine - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    game_state = {\r
        "current": "MENU",  # "MENU" | "PLAYING" | "PAUSED" | "GAME_OVER"\r
        "score": 0,\r
        "lives": 3,\r
        "player_x": 0,\r
        "ball_x": 0, "ball_y": 0, "ball_vx": 4, "ball_vy": 4\r
    }\r
\r
    def start_game():\r
        game_state["current"] = "PLAYING"\r
        game_state["score"] = 0\r
        game_state["lives"] = 3\r
        game_state["ball_x"] = 0\r
        game_state["ball_y"] = 0\r
\r
    def toggle_pause():\r
        if game_state["current"] == "PLAYING":\r
            game_state["current"] = "PAUSED"\r
        elif game_state["current"] == "PAUSED":\r
            game_state["current"] = "PLAYING"\r
\r
    def handle_space():\r
        if game_state["current"] in ["MENU", "GAME_OVER"]:\r
            start_game()\r
        elif game_state["current"] == "PLAYING":\r
            toggle_pause()\r
        elif game_state["current"] == "PAUSED":\r
            toggle_pause()\r
\r
    screen.onkeypress(handle_space, "space")\r
    screen.onkeypress(toggle_pause, "p")\r
    screen.onkeypress(toggle_pause, "P")\r
    screen.listen()\r
\r
    def tick():\r
        t.clear()\r
\r
        curr = game_state["current"]\r
\r
        # 1. MENU STATE RENDER\r
        if curr == "MENU":\r
            t.penup(); t.goto(0, 50); t.pendown()\r
            t.color("#38bdf8")\r
            t.write("CYBER BRICK ARENA", align="center", font=("Arial", 22, "bold"))\r
\r
            t.penup(); t.goto(0, -30); t.pendown()\r
            t.color("#34d399")\r
            t.write("PRESS SPACEBAR TO START GAME", align="center", font=("Arial", 13, "bold"))\r
\r
        # 2. PLAYING STATE (Physics + Render)\r
        elif curr == "PLAYING":\r
            # Ball Physics\r
            game_state["ball_x"] += game_state["ball_vx"]\r
            game_state["ball_y"] += game_state["ball_vy"]\r
\r
            if game_state["ball_x"] > 330 or game_state["ball_x"] < -330:\r
                game_state["ball_vx"] = -game_state["ball_vx"]\r
            if game_state["ball_y"] > 230:\r
                game_state["ball_vy"] = -game_state["ball_vy"]\r
            elif game_state["ball_y"] < -230:\r
                game_state["lives"] -= 1\r
                game_state["ball_x"] = 0; game_state["ball_y"] = 0\r
                if game_state["lives"] <= 0:\r
                    game_state["current"] = "GAME_OVER"\r
\r
            game_state["score"] += 1\r
\r
            # Render Ball\r
            t.penup(); t.goto(game_state["ball_x"], game_state["ball_y"]); t.pendown()\r
            t.color("white", "#fbbf24"); t.begin_fill(); t.circle(12); t.end_fill()\r
\r
            # HUD\r
            t.penup(); t.goto(-330, 230); t.pendown(); t.color("#38bdf8")\r
            t.write(f"SCORE: {game_state['score']}  |  LIVES: {game_state['lives']}  |  [P]: PAUSE", font=("Arial", 11, "bold"))\r
\r
        # 3. PAUSED STATE (Freeze physics + Draw overlay)\r
        elif curr == "PAUSED":\r
            # Draw Ball frozen\r
            t.penup(); t.goto(game_state["ball_x"], game_state["ball_y"]); t.pendown()\r
            t.color("white", "#64748b"); t.begin_fill(); t.circle(12); t.end_fill()\r
\r
            # Pause Banner\r
            t.penup(); t.goto(0, 20); t.pendown()\r
            t.color("#fbbf24")\r
            t.write("⏸ GAME PAUSED", align="center", font=("Arial", 20, "bold"))\r
            t.penup(); t.goto(0, -30); t.pendown()\r
            t.color("#94a3b8")\r
            t.write("Press 'P' or Spacebar to Resume", align="center", font=("Arial", 12))\r
\r
        # 4. GAME OVER STATE\r
        elif curr == "GAME_OVER":\r
            t.penup(); t.goto(0, 40); t.pendown()\r
            t.color("#f43f5e")\r
            t.write("💀 GAME OVER", align="center", font=("Arial", 22, "bold"))\r
\r
            t.penup(); t.goto(0, -20); t.pendown()\r
            t.color("#38bdf8")\r
            t.write(f"FINAL SCORE: {game_state['score']} PTS", align="center", font=("Arial", 14, "bold"))\r
\r
            t.penup(); t.goto(0, -60); t.pendown()\r
            t.color("#34d399")\r
            t.write("PRESS SPACEBAR TO RESTART", align="center", font=("Arial", 12, "bold"))\r
\r
        screen.update()\r
        screen.ontimer(tick, 16)\r
\r
    tick()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_fsm_game()\r
`,N=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 6 - Managing game and interactive states (active, paused, game-over)\r
File: state_driven_input_router.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
State-Driven Input Router Pattern:\r
Demonstrates dispatching the same physical keypress (e.g. Spacebar, Esc, Enter)\r
to completely different action handlers depending on current application state.\r
"""\r
\r
import turtle\r
\r
def run_input_router_demo():\r
    screen = turtle.Screen()\r
    screen.title("State-Driven Input Router - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    state = {"mode": "SPLASH"}  # "SPLASH", "LEVEL_SELECT", "IN_GAME"\r
\r
    # Input Router Function\r
    def on_enter_key():\r
        curr = state["mode"]\r
        if curr == "SPLASH":\r
            state["mode"] = "LEVEL_SELECT"\r
        elif curr == "LEVEL_SELECT":\r
            state["mode"] = "IN_GAME"\r
        elif curr == "IN_GAME":\r
            state["mode"] = "SPLASH"\r
        render_state()\r
\r
    def render_state():\r
        t.clear()\r
        curr = state["mode"]\r
\r
        t.penup(); t.goto(0, 80); t.pendown()\r
        t.color("#38bdf8")\r
        t.write(f"CURRENT STATE: [{curr}]", align="center", font=("Arial", 16, "bold"))\r
\r
        t.penup(); t.goto(0, 0); t.pendown()\r
        t.color("#34d399")\r
        if curr == "SPLASH":\r
            t.write("PRESS [ENTER] TO CHOOSE LEVEL", align="center", font=("Arial", 12, "bold"))\r
        elif curr == "LEVEL_SELECT":\r
            t.write("PRESS [ENTER] TO LAUNCH LEVEL 1", align="center", font=("Arial", 12, "bold"))\r
        elif curr == "IN_GAME":\r
            t.write("PRESS [ENTER] TO RETURN TO TITLE SCREEN", align="center", font=("Arial", 12, "bold"))\r
\r
        screen.update()\r
\r
    screen.onkeypress(on_enter_key, "Return")\r
    screen.listen()\r
\r
    render_state()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_input_router_demo()\r
`,P=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 6 - Managing game and interactive states (active, paused, game-over)\r
File: modal_pause_overlay_system.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Modal Pause Dialog & Level Transition System:\r
Renders a stylized semi-transparent dark backdrop overlay and interactive modal dialog\r
when the game enters the PAUSED state.\r
"""\r
\r
import turtle\r
\r
def run_modal_pause_demo():\r
    screen = turtle.Screen()\r
    screen.title("Modal Pause Overlay System - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    is_paused = [False]\r
    particles = [{"x": -200 + i*40, "y": 0, "vy": (i % 3 + 2)} for i in range(10)]\r
\r
    def toggle_pause():\r
        is_paused[0] = not is_paused[0]\r
\r
    screen.onkeypress(toggle_pause, "Escape")\r
    screen.onkeypress(toggle_pause, "space")\r
    screen.listen()\r
\r
    def tick():\r
        t.clear()\r
\r
        # Update Background Simulation\r
        if not is_paused[0]:\r
            for p in particles:\r
                p["y"] = (p["y"] + p["vy"])\r
                if p["y"] > 250: p["y"] = -250\r
\r
        # Draw Particles\r
        for p in particles:\r
            t.penup(); t.goto(p["x"], p["y"]); t.pendown()\r
            t.color("#38bdf8"); t.dot(12)\r
\r
        # Draw Modal Overlay if Paused\r
        if is_paused[0]:\r
            # Dim Backdrop Box\r
            t.penup(); t.goto(-200, -120); t.pendown()\r
            t.color("#38bdf8", "#0f172a"); t.pensize(3); t.begin_fill()\r
            for _ in range(2): t.forward(400); t.left(90); t.forward(240); t.left(90)\r
            t.end_fill()\r
\r
            # Modal Text\r
            t.penup(); t.goto(0, 50); t.pendown(); t.color("#fbbf24")\r
            t.write("PAUSE MENU", align="center", font=("Arial", 18, "bold"))\r
\r
            t.penup(); t.goto(0, 0); t.pendown(); t.color("#34d399")\r
            t.write("► [SPACE] RESUME GAME", align="center", font=("Arial", 12, "bold"))\r
\r
            t.penup(); t.goto(0, -40); t.pendown(); t.color("#f43f5e")\r
            t.write("► [ESC] TOGGLE PAUSE", align="center", font=("Arial", 12, "bold"))\r
        else:\r
            t.penup(); t.goto(-330, 230); t.pendown(); t.color("#34d399")\r
            t.write("SIMULATION RUNNING · PRESS ESCAPE TO PAUSE", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        screen.ontimer(tick, 16)\r
\r
    tick()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_modal_pause_demo()\r
`,j=`================================================================================\r
  TOPIC 6: MANAGING GAME AND INTERACTIVE STATES (ACTIVE, PAUSED, GAME-OVER)\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A FINITE STATE MACHINE (FSM)?\r
--------------------------------------------------------------------------------\r
A Finite State Machine organizes application lifecycle into discrete states:\r
1. \`MENU\`: Title screen, character selection, instructions.\r
2. \`PLAYING\`: Active 60 FPS physics, player controls, collision detection.\r
3. \`PAUSED\`: Physics frozen, modal pause overlay displayed.\r
4. \`GAME_OVER\`: High score display, stats summary, restart prompt.\r
\r
2. STATE-DRIVEN INPUT ROUTING\r
--------------------------------------------------------------------------------\r
Rather than creating separate key bindings for every screen, a single key handler\r
checks the active state and routes accordingly:\r
\`\`\`python\r
def handle_space():\r
    if state == "MENU": start_game()\r
    elif state == "PLAYING": pause_game()\r
    elif state == "PAUSED": resume_game()\r
    elif state == "GAME_OVER": restart_game()\r
\`\`\`\r
\r
3. STATE-SPECIFIC RENDERING PASSES\r
--------------------------------------------------------------------------------\r
Inside the 60 FPS loop, branch rendering based on \`current_state\`.\r
When in \`PAUSED\`, render frozen world graphics followed by a dim modal dialog box.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,M=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseActiveState {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6)); }
  50% { transform: scale(1.05); filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.9)); }
}
@keyframes blinkPrompt {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
`,D=()=>{const[t,s]=i.useState("MENU"),[u,h]=i.useState(0),[f,g]=i.useState(3),[o,x]=i.useState({x:160,y:90,vx:4,vy:-3});i.useEffect(()=>{if(t!=="PLAYING")return;const a=setInterval(()=>{x(n=>{let l=n.x+n.vx,c=n.y+n.vy,p=n.vx,r=n.vy;return(l>=295||l<=25)&&(p=-p),c<=25?r=-r:c>=155&&(g(d=>d<=1?(s("GAME_OVER"),0):d-1),l=160,c=90,r=-Math.abs(r)),h(d=>d+1),{x:l,y:c,vx:p,vy:r}})},25);return()=>clearInterval(a)},[t]);const y=()=>{t==="MENU"||t==="GAME_OVER"?(h(0),g(3),x({x:160,y:90,vx:4,vy:-3}),s("PLAYING")):t==="PLAYING"?s("PAUSED"):t==="PAUSED"&&s("PLAYING")},b=[{name:"Finite State Machine (FSM)",returnType:"Architectural Pattern",purpose:"Ensures application exists in exactly one mutually exclusive state ('MENU', 'PLAYING', 'PAUSED', 'GAME_OVER').",usage:"game_state['current'] = 'PLAYING'"},{name:"State-Driven Input Router",returnType:"Event Dispatching",purpose:"Routes single physical key (Space) to different callbacks based on active state (Start/Pause/Resume/Restart).",usage:`if state == 'MENU': start()
elif state == 'PLAYING': pause()`},{name:"Physics Freezing during Pause",returnType:"Kinematic Isolation",purpose:"Bypasses kinematic coordinate updates while keeping the Tkinter redraw loop and UI active.",usage:"if state == 'PLAYING': update_physics()"},{name:"Modal Overlay Rendering",returnType:"UI Compositing",purpose:"Draws semi-transparent dark backdrop box and pause menu text on top of frozen world graphics.",usage:"if is_paused: draw_modal_overlay()"}],_=[{id:"MENU",name:"1. MENU",desc:"Title Screen & Controls Guide"},{id:"PLAYING",name:"2. PLAYING",desc:"60 FPS Physics & Player Controls"},{id:"PAUSED",name:"3. PAUSED",desc:"Frozen Physics & Modal Overlay"},{id:"GAME_OVER",name:"4. GAME_OVER",desc:"Stats Summary & Restart Prompt"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:M}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 6"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Managing Game & Interactive States: FSM Architecture"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Eliminate spaghetti boolean flags. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Finite State Machines (FSM)"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"State-Driven Input Routing"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Modal Pause Overlays"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Clean Game Lifecycles"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🕹️ 4-State Game Lifecycle (Menu, Play, Pause, Over)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚡ State-Driven Input Routing"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⏸️ Modal Backdrop Pause System"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Interactive Finite State Machine Engine"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how the same Spacebar trigger dispatches completely different actions across each application state."})]}),e.jsxs("button",{onClick:y,className:"px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 transition cursor-pointer flex items-center gap-2",children:[e.jsx("span",{children:"⌨️"})," Press Spacebar (Action: ",t==="MENU"?"Start Game":t==="PLAYING"?"Pause Game":t==="PAUSED"?"Resume Game":"Restart Game",")"]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:_.map(a=>{const n=t===a.id;return e.jsxs("button",{onClick:()=>s(a.id),className:`p-3 rounded-xl border text-left transition cursor-pointer ${n?"bg-cyan-500/20 border-cyan-400/80 shadow-md shadow-cyan-500/20 animate-[pulseActiveState_3s_infinite]":"bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`font-mono font-bold text-xs ${n?"text-cyan-300":"text-slate-300"}`,children:a.name}),n&&e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),e.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:a.desc})]},a.id)})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:["Live State Viewport (CURRENT: ",t,")"]}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg border border-slate-800 select-none",children:[e.jsx("rect",{x:"15",y:"15",width:"290",height:"150",rx:"6",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),t==="MENU"&&e.jsxs("g",{children:[e.jsx("text",{x:"160",y:"70",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:"CYBER BRICK ARENA"}),e.jsx("text",{x:"160",y:"115",fill:"#34d399",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",className:"animate-[blinkPrompt_1.2s_infinite]",children:"► PRESS SPACEBAR TO START"})]}),t==="PLAYING"&&e.jsxs("g",{children:[e.jsx("circle",{cx:o.x,cy:o.y,r:"8",fill:"#fbbf24",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsxs("text",{x:"25",y:"32",fill:"#38bdf8",fontSize:"8.5",fontWeight:"bold",fontFamily:"monospace",children:["SCORE: ",u," | LIVES: ","❤️".repeat(f)]})]}),t==="PAUSED"&&e.jsxs("g",{children:[e.jsx("circle",{cx:o.x,cy:o.y,r:"8",fill:"#64748b",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("rect",{x:"60",y:"45",width:"200",height:"90",rx:"8",fill:"#020617",stroke:"#38bdf8",strokeWidth:"2",opacity:"0.95"}),e.jsx("text",{x:"160",y:"80",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:"⏸ GAME PAUSED"}),e.jsx("text",{x:"160",y:"105",fill:"#94a3b8",fontSize:"8.5",textAnchor:"middle",fontFamily:"monospace",children:"Press Spacebar to Resume"})]}),t==="GAME_OVER"&&e.jsxs("g",{children:[e.jsx("text",{x:"160",y:"65",fill:"#f43f5e",fontSize:"16",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:"💀 GAME OVER"}),e.jsxs("text",{x:"160",y:"95",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:["FINAL SCORE: ",u," PTS"]}),e.jsx("text",{x:"160",y:"125",fill:"#34d399",fontSize:"9.5",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",className:"animate-[blinkPrompt_1.2s_infinite]",children:"► PRESS SPACEBAR TO RESTART"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"FSM State Machine Architecture"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300 font-bold",children:"Mutual Exclusivity"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Active State"}),e.jsxs("div",{className:"text-base font-mono font-bold text-cyan-400",children:['"',t,'"']}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Mutually exclusive enum"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Physics Dispatch"}),e.jsx("div",{className:"text-base font-mono font-bold text-emerald-400",children:t==="PLAYING"?"60 FPS ACTIVE":"KINEMATICS FROZEN"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Zero delta during pause"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# State-Driven Input Routing Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`def handle_space():
    if state == "MENU": start_game()
    elif state == "PLAYING": state = "PAUSED"
    elif state == "PAUSED": state = "PLAYING"
    elif state == "GAME_OVER": reset_game()`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," FSM State Machine Core APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Pattern / Function"}),e.jsx("th",{className:"py-3 px-4",children:"Subsystem"}),e.jsx("th",{className:"py-3 px-4",children:"State Lifecycle Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:b.map((a,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:a.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:a.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:a.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:a.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(m,{fileModule:A,title:"finite_state_machine_game_engine.py",highlightLines:[19,27,34,41,57,68,93,107]}),e.jsx(m,{fileModule:N,title:"state_driven_input_router.py",highlightLines:[20,21,22,23,24,25,41]}),e.jsx(m,{fileModule:P,title:"modal_pause_overlay_system.py",highlightLines:[21,33,44,45,46,50]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🕹️"})," Barrackpore Retro Brick Breaker"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata created a brick breaker game in Barrackpore. When she initially managed game modes with 4 independent booleans, players could pause the game while dying, causing balls to clone in memory. Teacher Sukanta Hui helped her refactor to an FSM with a single ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"current_state"})," variable. Her game became bulletproof!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"⏸️"})," Kolkata Space Defense Modal Pause"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu in Kolkata constructed an arcade space defender. By freezing particle physics and drawing a semi-transparent modal pause dialog on Escape keypress, players could answer phone calls or adjust volume sliders mid-battle without losing progress!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 FSM Game State Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Using Multiple Independent Booleans"}),e.jsxs("p",{className:"text-slate-400",children:["Having ",e.jsx("code",{className:"text-rose-300 font-mono",children:"is_paused = True"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"is_game_over = True"})," simultaneously creates contradictory race conditions. Always use a single mutually exclusive state string or enum."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Physics Leaking During Pause"}),e.jsxs("p",{className:"text-slate-400",children:["Failing to wrap kinematic updates in ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'if state == "PLAYING":'})," allows enemies and bullets to keep moving while the pause menu is displayed."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Partial Game Restarts"}),e.jsx("p",{className:"text-slate-400",children:"Resetting player position without clearing active enemy bullets leaves lingering hazards that kill the player immediately upon restarting. Always reset all entity arrays."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Input Bleed Across State Transitions"}),e.jsxs("p",{className:"text-slate-400",children:["A jump key pressed in the menu triggers immediately in the first frame of gameplay. Always clear the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"keys_pressed"})," dictionary upon state transitions."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I organize game lifecycles into a single mutually exclusive `current_state` variable","I route inputs dynamically based on active state using state-driven input routing","I freeze physics updates during `PAUSED` while keeping the render loop alive","I implement modal pause backdrop overlays with resume and quit options","I implement clean game resets that re-initialize score, health, and entity arrays","I know how to transition between Menu, Playing, Paused, and Game Over states"].map((a,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:a})]},n))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How commercial games like Mario, Tetris, and Halo organize menus, active gameplay, pause screens, and leaderboards using Finite State Machines!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How clicking the state pills or pressing Spacebar transitions the engine cleanly from Menu to Playing, Paused, and Game Over!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add a high-score persistence check that saves the player's personal best to disk when transitioning to GAME_OVER!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Finite State Machines are the bedrock of reliable, professional software architecture. By creating clear boundaries between application modes, you turn complex multi-screen software into a manageable, bug-free system that can scale effortlessly with dozens of new levels, bonus modes, and cutscenes."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(v,{title:"Game State Management & FSM FAQs",questions:S})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(w,{content:j,title:"Topic 6: Game State Management Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(E,{note:"At Coder & AccoTax in Barrackpore and Kolkata, I always tell students: beginner programmers write code that works when everything goes right; professional software engineers design state machines that work when things pause, reset, or go wrong. Master the FSM, and your games will feel polished, rock-solid, and commercial grade!"})})]})]})};export{D as default};

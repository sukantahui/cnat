import{r as n,j as e}from"./index-Czk7a0H9.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-KfLZqoDB.js";import{F as u}from"./FAQTemplate-C1oyb7Bv.js";import"./prism-IyxSUpEx.js";const p=[{question:"What does the `who` command do?",shortAnswer:"Displays a list of users currently logged into the system.",explanation:"`who` reads the utmp file (/var/run/utmp) and shows each user's name, terminal, login time, and optional remote host.",hint:"Try `who` on any Linux system to see who else is logged in.",level:"basic",codeExample:"who"},{question:"What is the difference between `who` and `w`?",shortAnswer:"`w` shows additional information like system load average, idle time, and current command of each user.",explanation:"`w` is more verbose and shows what each user is doing; `who` is a simpler listing.",hint:"Run both and compare outputs.",level:"basic",codeExample:`w
who`},{question:"How can you display only the usernames of logged-in users?",shortAnswer:"`who | awk '{print $1}'` or `users` command.",explanation:"`users` prints space-separated usernames; `who` can be piped to `cut` or `awk` to extract the first column.",hint:"`who -q` also shows usernames and a count.",level:"intermediate",codeExample:"who | cut -d' ' -f1 | sort -u"},{question:"What does `who -b` display?",shortAnswer:"The last system boot time.",explanation:"`-b` tells when the system was last booted (from utmp's boot record).",hint:"Useful to know uptime without calculating.",level:"basic",codeExample:"who -b"},{question:"How can you see the idle time of logged-in users?",shortAnswer:"`who -u` shows idle time (in minutes) in the third column.",explanation:"A dot (.) means less than 1 minute idle; a colon (:) means idle time > 24h; otherwise a number (e.g., 02:30) indicates hours:minutes idle.",hint:"Idle time is since last keystroke on that terminal.",level:"intermediate",codeExample:"who -u"},{question:"What does `who am i` display?",shortAnswer:"The user associated with the current standard input (the user who ran the command).",explanation:"It shows the login name, terminal, and login time of the user who invoked `who am i`, even within `sudo` or `su`.",hint:"Contrast with `whoami` which prints only the effective username.",level:"advanced",codeExample:`who am i
whoami`},{question:"Where does `who` read its information from?",shortAnswer:"Typically from `/var/run/utmp` (or `/var/log/wtmp` for historical).",explanation:"`/var/run/utmp` contains information about current logins. `/var/log/wtmp` stores historical login/logout records.",hint:"Use `utmpdump` to view raw binary data.",level:"advanced",codeExample:"file /var/run/utmp"},{question:"How do you count the number of logged-in users?",shortAnswer:"`who | wc -l` or `who -q | grep -v '^#' | tail -1`",explanation:"`who -q` outputs usernames then a line like `# users=5`; you can parse that.",hint:"`who -q` is simplest: it prints count at the end.",level:"basic",codeExample:"who -q"},{question:"What is the purpose of `who -r`?",shortAnswer:"Displays the current system runlevel.",explanation:"On Linux, runlevels 0-6; `who -r` shows current runlevel and the time it was entered.",hint:"Runlevel 5 is graphical multi-user; 3 is text multi-user.",level:"intermediate",codeExample:"who -r"},{question:"How can you see which users are logged in from remote hosts?",shortAnswer:"`who | grep -E '\\([0-9]+\\.'` or `who -u` and look for IP addresses in parentheses.",explanation:"Local login terminals (tty) show `(:0)` or `(console)`; remote logins (pts) show an IP address.",hint:"Use `who --lookup` to resolve IPs to hostnames (if configured).",level:"intermediate",codeExample:"who | grep -v '(:0)' | grep -v 'tty[0-9]'"},{question:"What is the difference between `who`, `users`, and `last`?",shortAnswer:"`who` shows current logins; `users` shows only usernames; `last` shows historical logins from wtmp.",explanation:"`last` reads `/var/log/wtmp` and lists login sessions including reboot and shutdown.",hint:"`last | head` gives recent logins.",level:"basic",codeExample:"last -5"},{question:"Can `who` show the PID of the login shell?",shortAnswer:"Yes, with `who -u` it shows the process ID (PID) of the login process.",explanation:"The PID column can be used to signal or monitor the user's shell.",hint:"`ps -p PID` to see more details.",level:"intermediate",codeExample:"who -u"},{question:"What does a plus (+) or minus (-) in the `-T` option output mean?",shortAnswer:"+ means the terminal is writable (messages allowed), - means write permission disabled (e.g., `mesg n`).",explanation:"The `-T` option adds a column showing terminal writability status.",hint:"Use `mesg` command to change your own terminal's writability.",level:"advanced",codeExample:"who -T"},{question:"How can you see only users who have been idle for more than 30 minutes?",shortAnswer:"Parse `who -u` idle times using awk: `who -u | awk '$5 ~ /[0-9]+:[0-9]+/ {split($5, t, \":\"); if(t[1]>=30 || (t[1]==0 && t[2]>=30)) print}'`.",explanation:"Idle times are in hours:minutes format. You need to convert or compare.",hint:"Idle time '01:15' means 1 hour 15 minutes.",level:"expert",codeExample:"who -u | awk '$5 ~ /:/ {if($5+0>0.5) print $1, $5}'   # approximate"},{question:"Why does `who` sometimes show the same user multiple times?",shortAnswer:"Because the user has multiple active sessions (e.g., several terminal windows or SSH connections).",explanation:"Each login session gets its own entry in utmp, even for the same username.",hint:"Use `who | grep username` to see all sessions.",level:"basic",codeExample:"who | grep tuhina"},{question:"What does `who -d` display?",shortAnswer:"Shows dead (zombie) processes that previously had a login.",explanation:"When a process terminates but utmp entry wasn't cleaned, it shows as dead.",hint:"Rarely used; more of a debugging option.",level:"expert",codeExample:"who -d"},{question:"How can you monitor logins in real-time?",shortAnswer:"Use `watch who` or `tail -f /var/log/auth.log` with login entries.",explanation:"`watch` runs `who` every 2 seconds; also `last -f /var/log/wtmp -F` can be tailed.",hint:"`pkill -HUP` on syslogd for immediate updates? Better: `journalctl -f`.",level:"advanced",codeExample:"watch -n 1 who"},{question:"What is the difference between `pts` and `tty` in the terminal column?",shortAnswer:"`tty` (e.g., tty2) is a physical terminal (console); `pts` (pseudo-terminal slave) is used for SSH, terminal emulators, `screen`, `tmux`.",explanation:"PTS stands for pseudo-terminal slave; these are virtual terminals created by terminal multiplexers.",hint:"Most remote logins appear on `pts/*`.",level:"intermediate",codeExample:"who | awk '{print $2}'| sort | uniq -c"},{question:"How do you display the original user who logged in after using `su`?",shortAnswer:"`who am i` still shows the original user; `who` shows the `su` target user.",explanation:"The `su` command changes effective user but utmp retains the original login user.",hint:"`who am i` is the only reliable way to get the real logged-in user.",level:"expert",codeExample:`su - otheruser
who am i
who`},{question:"Can `who` read a different utmp file?",shortAnswer:"Yes, provide the file as argument: `who /var/log/wtmp` for historical logins.",explanation:"Any file in utmp format can be given; `who` will parse it.",hint:"`utmpdump /var/log/wtmp` also works.",level:"advanced",codeExample:"who /var/log/wtmp | head -10"},{question:"What is the significance of the `:0` in the comment field for some users?",shortAnswer:"It indicates a local X11 display (usually the console's graphical session).",explanation:"User logged in via graphical display manager (GDM, LightDM) will show `:0` or `:0.0`.",hint:"Those users are often not interactive on a text terminal.",level:"intermediate",codeExample:"who | grep ':0'"},{question:"How can you send a message to another logged-in user using `write`?",shortAnswer:"`write username ttyname` then type message; end with Ctrl+D.",explanation:"You need the terminal name from `who` and write permission on that terminal (+ in `who -T`).",hint:"`who -T` shows `+` for writable terminals.",level:"advanced",codeExample:`who -T
write tuhina pts/1
Hello, how are you?
Ctrl+D`},{question:"What does `who --ips` do?",shortAnswer:"Displays IP addresses of remote users (GNU `who` extension).",explanation:"Shows remote hostnames or IPs directly instead of masking.",hint:"Not available on BSD/macOS.",level:"expert",codeExample:"who --ips"},{question:"Why might `who` slow down on a busy server?",shortAnswer:"Because it reads the entire utmp file; on systems with thousands of past entries, utmp can be large.",explanation:"Modern systems use `systemd-logind` which may implement `who` differently; still, large wtmp can cause slowdown.",hint:"Use `who -q` for a quick count, or `w` for less overhead.",level:"expert",codeExample:`time who
ls -lh /var/run/utmp`},{question:"How do you show the time since last system boot in a human-readable format?",shortAnswer:"`who -b | awk '{print $3,$4}'` gives boot time; then use `date` to compute difference.",explanation:"Combine with `date` and epoch seconds to get uptime.",hint:"`uptime -s` gives boot time on Linux.",level:"advanced",codeExample:`boot=$(who -b | awk '{print $3,$4}'); date -d "$boot" +%s`},{question:"What is the difference between `who -a` and plain `who`?",shortAnswer:"`-a` is equivalent to `-b -d -l -p -r -t -T -u` (all options).",explanation:"It shows boot time, dead processes, login, runlevel, and more.",hint:"`who -a` produces very verbose output.",level:"advanced",codeExample:"who -a | head -10"},{question:"How do you get the login time of a specific user in seconds since epoch?",shortAnswer:"Parse `who` output for that user, then use `date` to convert.",explanation:"Example: `who | grep username | awk '{print $3,$4}' | xargs -I{} date -d '{}' +%s`",hint:"Assumes GNU date and standard format.",level:"expert",codeExample:`who | grep swadeep | awk '{print $3,$4}' | while read dt; do date -d "$dt" +%s; done`},{question:"What is the purpose of `who -p`?",shortAnswer:"Show active processes spawned by `init` (or systemd).",explanation:"Lists processes that are kept alive by system init (like getty).",hint:"Not commonly used; output may be empty.",level:"expert",codeExample:"who -p"},{question:"Can `who` be used to detect if someone is using `screen` or `tmux`?",shortAnswer:"Indirectly: if a user has multiple `pts` sessions with the same username, they might be using multiplexers.",explanation:"`screen` and `tmux` create pseudo-terminals. `who` will show each window/session as a separate login.",hint:"Use `w` to see command column (e.g., `tmux`).",level:"expert",codeExample:"who | grep -v 'tty' | awk '{print $1}' | sort | uniq -c | sort -nr"},{question:"How would you produce a CSV file of currently logged-in users with username, terminal, and login time?",shortAnswer:'`who | awk \'{print $1 "," $2 "," $3 " " $4}\'`',explanation:"This creates a simple CSV. For more robust handling, use proper CSV quoting.",hint:"Pipe to `> users.csv` and open in spreadsheet.",level:"intermediate",codeExample:`who | awk -v OFS=',' '{print $1, $2, $3 " " $4}'`}],w=`#!/bin/bash
# who_basic.sh - Basic usage of who command

echo "=== Basic who command examples ==="
echo "1. List currently logged-in users:"
who

echo -e "\\n2. Display only usernames and count (quick summary):"
who -q

echo -e "\\n3. Show system boot time:"
who -b

echo -e "\\n4. Show current runlevel (Linux only):"
who -r

echo -e "\\n5. Show your own login session:"
who am i

echo -e "\\n6. Show all available options (help):"
who --help | head -10`,x=`#!/bin/bash
# who_options.sh - Explore different options of who

echo "=== Exploring who options ==="

echo "1. Default output:"
who

echo -e "\\n2. Including idle time and PID (-u):"
who -u

echo -e "\\n3. Short format (-s, same as default on many systems):"
who -s

echo -e "\\n4. Show only names and line (-l, listing terminals):"
who -l

echo -e "\\n5. Show dead processes (-d):"
who -d

echo -e "\\n6. Historical logins (read from wtmp):"
if [ -f /var/log/wtmp ]; then
    who /var/log/wtmp | head -5
else
    echo "wtmp file not accessible"
fi

echo -e "\\n7. Messaging status (-T): shows '+' if terminal writeable, '-' if not:"
who -T`,g=`#!/bin/bash
# who_scripting.sh - Using who in scripts

echo "=== Scripting with who ==="

# Count logged-in users
user_count=$(who | wc -l)
echo "Currently logged-in users: $user_count"

# List only usernames
echo "Usernames: $(who | awk '{print $1}' | sort -u | tr '\\n' ' ')"

# Check if a specific user is online
target_user="swadeep"
if who | grep -q "^$target_user "; then
    echo "$target_user is currently logged in."
else
    echo "$target_user is not logged in."
fi

# Get users logged in from remote IPs (not local)
echo "Remote logins (IP addresses):"
who | grep -E '\\([0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\\)' | awk '{print $1, $5}'

# Send alert if root is logged in from remote
if who | grep -q "^root.*\\([0-9]"; then
    echo "WARNING: root logged in remotely!" | mail -s "Security Alert" admin@example.com
    echo "Alert triggered."
else
    echo "No remote root login detected."
fi`,f=`#!/bin/bash
# who_monitor.sh - Monitor user logins and send alerts

LOG_FILE="/var/log/user_monitor.log"
ALERT_EMAIL="admin@example.com"

echo "=== User Monitoring Script ==="

# Function to log event
log_event() {
    echo "$(date): $1" >> "$LOG_FILE"
}

# Get current user list
current_users=$(who | awk '{print $1}' | sort -u)

# Compare with previous list (if exists)
if [ -f /tmp/last_users.txt ]; then
    previous_users=$(cat /tmp/last_users.txt)
    new_users=$(comm -23 <(echo "$current_users") <(echo "$previous_users"))
    logout_users=$(comm -13 <(echo "$current_users") <(echo "$previous_users"))
    
    if [ -n "$new_users" ]; then
        log_event "New login(s): $new_users"
        echo "New login(s): $new_users" | mail -s "Login Alert" "$ALERT_EMAIL"
    fi
    
    if [ -n "$logout_users" ]; then
        log_event "Logout(s): $logout_users"
    fi
else
    log_event "First run - recorded current users: $current_users"
fi

# Save current list for next run
echo "$current_users" > /tmp/last_users.txt

# Also show idle time warning if any user idle > 1 hour
who -u | awk '$5 ~ /[0-9]+:[0-9]+/ {split($5, t, ":"); if(t[1]>=1) print "Idle user: " $1 " for " $5}' | while read msg; do
    log_event "$msg"
    echo "$msg" | mail -s "Idle User Alert" "$ALERT_EMAIL"
done

echo "Monitoring completed. See $LOG_FILE"`,A=()=>{const h=new Date().getFullYear()-1998,[t,d]=n.useState("who"),[c,o]=n.useState(""),[m,a]=n.useState(!1),r=[{user:"swadeep",tty:"pts/0",date:"2025-03-18 09:23",idle:"  .",pid:"1234",comment:"(192.168.1.10)"},{user:"tuhina",tty:"pts/1",date:"2025-03-18 10:15",idle:"02:30",pid:"2345",comment:"(192.168.1.11)"},{user:"abhronila",tty:"tty2",date:"2025-03-18 08:00",idle:"  .",pid:"3456",comment:"(:0)"},{user:"debangshu",tty:"pts/3",date:"2025-03-18 11:45",idle:"  .",pid:"4567",comment:"(10.0.0.25)"},{user:"sukanta",tty:"pts/4",date:"2025-03-18 12:00",idle:"  .",pid:"5678",comment:"(teacher)"}];return n.useEffect(()=>{a(!0),setTimeout(()=>a(!1),300),o(t==="who"?r.map(s=>`${s.user}     ${s.tty}         ${s.date} ${s.idle} ${s.pid} ${s.comment}`).join(`
`):t==="who -b"?"system boot  2025-03-18 07:45":t==="who -q"?`swadeep tuhina abhronila debangshu sukanta
# users=5`:t==="who -u"?r.map(s=>`${s.user}     ${s.tty}         ${s.date} ${s.idle} ${s.pid} ${s.comment}`).join(`
`):t==="who -r"?"run-level 5  2025-03-18 07:45":t==="who am i"?"sukanta   pts/4        2025-03-18 12:00 (teacher)":t==="who --version"?`who (GNU coreutils) 9.3
Written by Joseph Arceneaux, David MacKenzie, Michael Stone.`:`Usage: who [OPTION]... [ FILE | ARG1 ARG2 ]
Try 'who --help' for more information.`)},[t,r]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
    @keyframes fadeSlideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes subtlePulse {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3); }
      70% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-slide-up, [class*="animate-"] {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.5s ease-out forwards;
    }
    .animate-pulse-subtle {
      animation: subtlePulse 1.5s infinite;
    }
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    }
    .svg-step-hover {
      transition: filter 0.2s ease, transform 0.2s ease;
    }
    .svg-step-hover:hover {
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
      transform: scale(1.02);
    }
    .teacher-note-hover {
      transition: background-color 0.2s ease, border-left-width 0.2s ease;
    }
    .teacher-note-hover:hover {
      background-color: rgba(59, 130, 246, 0.05);
      border-left-width: 6px;
    }
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4",children:"👥 The `who` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Display who is logged into the system — essential for system monitoring, auditing, and user management."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Try it live"]}),e.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:["who","who -b","who -q","who -u","who -r","who am i","who --version"].map(s=>e.jsx("button",{onClick:()=>d(s),className:l("px-4 py-2 rounded-lg font-mono text-sm transition-all",t===s?"bg-blue-600 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"),children:s},s))}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsx("span",{children:t})]}),e.jsx("pre",{className:l("whitespace-pre-wrap transition-opacity duration-300",m?"opacity-70":"opacity-100"),children:c})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 `who` reads from `/var/run/utmp` — the system's user accounting database."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `who`?"}),e.jsxs("p",{className:"mb-3",children:["The ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"who"})," command displays information about users who are currently logged into the system. It reads the ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"/var/run/utmp"})," file (or similar) which tracks login sessions."]}),e.jsx("p",{children:"System administrators use `who` to see who is using the system, from which terminal or IP address, and how long they have been idle. It's a fundamental auditing tool."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"who [OPTION]... [ FILE | ARG1 ARG2 ]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Show who is logged on to the system."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Outputs user list to stdout (exit 0 on success)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," For monitoring, writing login scripts, auditing security, or just curiosity."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Server monitoring:"})," Check how many users are currently logged in before a reboot."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Security auditing:"})," Detect unauthorized logins from unknown IPs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Teaching environment:"})," In a lab, see which students are logged into which terminal."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automated reports:"})," Mail a list of logged-in users to the admin every hour."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Idle time tracking:"})," Use `who -u` to see idle times and maybe log out idle users."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Count logged-in users:"})," ",e.jsx("code",{className:"text-sm",children:"who -q | grep -c '^[a-z]'"})," or just ",e.jsx("code",{className:"text-sm",children:"who -q"})," shows count."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Show your own login:"})," ",e.jsx("code",{className:"text-sm",children:"who am i"})," (exact wording)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boot time:"})," ",e.jsx("code",{className:"text-sm",children:"who -b"})," tells when the system was last rebooted."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run level:"})," ",e.jsx("code",{className:"text-sm",children:"who -r"})," shows current runlevel (Linux)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Legacy file:"})," Use ",e.jsx("code",{className:"text-sm",children:"who /var/log/wtmp"})," to see historical logins (binary file)."]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"📊 How `who` Retrieves User Information"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"180",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"110",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. User logs in"}),e.jsx("text",{x:"110",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"Login process writes to utmp"}),e.jsx("line",{x1:"200",y1:"70",x2:"250",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow3)"}),e.jsx("rect",{x:"260",y:"30",width:"180",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. utmp database"}),e.jsx("text",{x:"350",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"/var/run/utmp (binary)"}),e.jsx("line",{x1:"440",y1:"70",x2:"490",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow3)"}),e.jsx("rect",{x:"500",y:"30",width:"180",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"590",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. who command"}),e.jsx("text",{x:"590",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"reads utmp, formats output"}),e.jsx("line",{x1:"680",y1:"70",x2:"730",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow3)"}),e.jsx("rect",{x:"740",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"810",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Display list"}),e.jsx("text",{x:"810",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"username, tty, time, IP"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow3",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Login → utmp → who → readable user list"}),e.jsx("circle",{cx:"810",cy:"180",r:"15",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"810",y:"184",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Admin"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(i,{fileModule:w,title:"Basic User Listing",highlightLines:[4,9]}),e.jsx(i,{fileModule:x,title:"Exploring Options (-b, -q, -u, -r)",highlightLines:[5,12,18]}),e.jsx(i,{fileModule:g,title:"Scripting with who",highlightLines:[8,15,22]}),e.jsx(i,{fileModule:f,title:"User Monitoring & Alerting",highlightLines:[10,20]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `who` with `w` or `users`:"})," `w` shows more details (load avg, commands); `users` just lists names."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `who` shows remote IPs on all systems:"})," Some configurations hide IPs, or show `:0` for local displays."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reading `/var/run/utmp` directly without `who`:"})," It's a binary file; use `who` or `utmpdump`."]}),e.jsx("li",{children:e.jsx("strong",{children:"Forgetting that `who am i` shows the user associated with stdin, not necessarily all users."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misinterpreting idle time:"})," A dot (.) means less than 1 minute idle; a colon (:) means idle time ",">"," 24h."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use `who -u` to see idle times:"})," Helps identify inactive sessions for cleanup."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Redirect output to a log file for auditing:"})," ",e.jsx("code",{className:"text-sm",children:"who >> /var/log/userlogins"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with `grep` to filter specific users:"})," ",e.jsx("code",{className:"text-sm",children:"who | grep 'swadeep'"})]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `who` in cron jobs to alert on unusual logins (e.g., root from unknown IP)."})}),e.jsx("li",{children:e.jsx("strong",{children:"Prefer `who -q` when you only need a count."})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"How would you detect if a specific user (e.g., 'debangshu') is logged in?"}),e.jsx("li",{children:"Why might `who` show a user on `tty2` and another on `pts/0`? What's the difference?"}),e.jsx("li",{children:"What happens to `who` output if the utmp file gets corrupted?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can display currently logged-in users using `who`."}),e.jsx("li",{children:"✅ Can show system boot time with `who -b`."}),e.jsx("li",{children:"✅ Can display idle times using `who -u`."}),e.jsx("li",{children:"✅ Can count logged-in users with `who -q`."}),e.jsx("li",{children:"✅ Knows the difference between `who`, `w`, and `users`."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(u,{title:"Frequently Asked Questions about who Command",questions:p})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",h," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"})," In a lab with many students, have everyone run `who` and see each other's sessions. Then explain the difference between local (`tty`) and pseudo-terminal (`pts`) sessions. It's a great way to demystify terminal multiplexers like `tmux`."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"})," `who` reads from `utmp`, which is only updated at login/logout. For real-time monitoring, `w` or `top` may be better. Also, on very busy servers, `who` can be slow because it reads the entire utmp file."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that runs every 5 minutes via cron, checks `who | wc -l`, and if the user count exceeds 10, sends an email alert to the admin. This teaches scheduling and system monitoring."]})]})]})})]})};export{A as default};

import{r as o,j as e}from"./index-D_KlGz35.js";import{c as x}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-Cv_pQpcZ.js";import{F as m}from"./FAQTemplate-CsMtakS5.js";import"./prism-CzgMi0DF.js";const u=[{question:"What does the `echo` command do?",shortAnswer:"Displays a line of text (or variable values) to the standard output.",explanation:"`echo` is used in shell scripts and command line to print messages, variable values, or generate output.",hint:"It's the shell equivalent of `print` in Python or `Console.WriteLine` in C#.",level:"basic",codeExample:"echo 'Hello, World!'"},{question:"What is the difference between single and double quotes with `echo`?",shortAnswer:"Single quotes preserve literal text; double quotes expand variables and command substitutions.",explanation:"Inside double quotes, `$var` is expanded; inside single quotes, it's literal `$var`.",hint:"Use double quotes when you want variable values; single quotes for fixed strings.",level:"intermediate",codeExample:`name=Debangshu
echo 'Hello $name' # Hello $name
echo "Hello $name" # Hello Debangshu`},{question:"How do you print text without a trailing newline using `echo`?",shortAnswer:"Use the `-n` option: `echo -n 'Text'`",explanation:"Normally echo adds a newline; `-n` suppresses it, useful for prompts.",hint:"Alternatively, use `printf` for complete control.",level:"basic",codeExample:"echo -n 'Enter your name: '; read name"},{question:"What does `echo -e` do?",shortAnswer:"Enables interpretation of backslash escape sequences (e.g., `\\n`, `\\t`).",explanation:"With `-e`, special characters like newline, tab, and backspace become functional.",hint:"`echo -e 'Line1\\nLine2'` prints two lines.",level:"intermediate",codeExample:"echo -e 'Name\\tAge\\nAlice\\t30\\nBob\\t25'"},{question:"How can you print a literal backslash using `echo`?",shortAnswer:"Use `echo -E '\\\\'` or `echo '\\\\'` (with single quotes).",explanation:"Without `-e`, backslash is literal; with `-e`, you need to double it: `\\\\` prints one backslash.",hint:"To be portable, use `printf '\\\\n'`",level:"advanced",codeExample:"echo 'C:\\\\Users\\\\Sukanta'"},{question:"Why does `echo $var` collapse multiple spaces?",shortAnswer:"Because the shell performs word splitting on the unquoted variable, reducing multiple spaces to a single separator.",explanation:'Always double-quote variables: `echo "$var"` preserves spacing.',hint:"Quote to keep formatting.",level:"intermediate",codeExample:`var='   spaced   '
echo $var   # spaced (single spaces)
echo "$var" #   spaced   `},{question:"How can you print a variable that contains special characters without expansion?",shortAnswer:"Use single quotes: `echo '$var'` or escape each special character.",explanation:"Single quotes prevent all expansions. For partial, use double quotes and backslashes.",hint:'`echo "The cost is \\$10"` prints $10.',level:"intermediate",codeExample:"echo 'There is no $variable here'"},{question:"Is `echo` portable across different Unix-like systems?",shortAnswer:"Not completely; options like `-n` and `-e` are implemented inconsistently, especially between Bash and POSIX sh.",explanation:"For maximum portability, use `printf` instead of `echo` for complex formatting.",hint:"`printf` is the recommended alternative.",level:"expert",codeExample:`printf '%s
' 'Hello'   # portable newline`},{question:"How do you redirect `echo` output to a file?",shortAnswer:"Use `>` to overwrite or `>>` to append: `echo 'Hello' > file.txt`",explanation:"The redirection sends stdout to a file instead of the terminal.",hint:"Use `>>` to add to end of file.",level:"basic",codeExample:`echo 'First line' > output.txt
echo 'Second line' >> output.txt`},{question:"How can you display an error message to stderr with `echo`?",shortAnswer:"Redirect stderr: `echo 'Error message' >&2`",explanation:"`>&2` redirects stdout (file descriptor 1) to stderr (file descriptor 2).",hint:"Useful in scripts to separate normal output from errors.",level:"intermediate",codeExample:"echo 'Something went wrong' >&2"},{question:"What is the difference between `echo` and `printf`?",shortAnswer:"`echo` is simpler but less portable; `printf` offers formatted output and is more reliable across systems.",explanation:"`printf` requires a format string and does not automatically add newline.",hint:"Use `printf` when you need precise control or cross-platform compatibility.",level:"advanced",codeExample:`printf 'Name: %s
Age: %d
' 'Tuhina' 22`},{question:"How can you print a colored message using `echo`?",shortAnswer:"Use ANSI escape codes with `echo -e`: `echo -e '\\033[31mRed\\033[0m'`",explanation:"ANSI sequences change text color, background, and style; reset with `\\033[0m`.",hint:"Define variables for colors to reuse.",level:"expert",codeExample:"RED='\\033[0;31m'; NC='\\033[0m'; echo -e \"${RED}Error${NC}\""},{question:"Why does `echo -n` sometimes not work in some shells?",shortAnswer:"The `-n` option is not POSIX; some older shells (like original Bourne shell) do not support it.",explanation:"POSIX `echo` does not define any options; `-n` is a common extension but not guaranteed.",hint:"Use `printf '%s' 'text'` for portability.",level:"expert",codeExample:"printf 'No newline here'"},{question:"How do you print a backspace character with `echo`?",shortAnswer:"`echo -e 'abc\\b\\b'` prints 'a' (deletes 'b' and 'c').",explanation:"`\\b` sends backspace; the effect depends on terminal.",hint:"Carriage return `\\r` is more useful for overwriting lines.",level:"advanced",codeExample:"echo -e '12345\\b\\b\\bAB'  # prints 12AB5"},{question:"How can you print multiple lines using a single `echo`?",shortAnswer:"Use `echo -e 'Line1\\nLine2\\nLine3'` or use a heredoc.",explanation:"With `-e`, `\\n` creates newlines. Or embed actual newlines inside quotes.",hint:"Triple quotes are not available; just press Enter inside quotes.",level:"basic",codeExample:`echo -e 'First
Second
Third'`},{question:"What happens if you `echo` a variable that contains command substitution?",shortAnswer:"If double-quoted, the command runs and its output is echoed; if single-quoted, it's literal.",explanation:"Command substitution `$(cmd)` executes `cmd` and replaces with its output.",hint:'`echo "Today is $(date)"` prints date.',level:"intermediate",codeExample:'echo "The current directory is $(pwd)"'},{question:"How do you prevent `echo` from interpreting options?",shortAnswer:'Use `echo -- "-n"` (if supported) or use `printf \'%s\\n\' "-n"`.',explanation:"Some echoes treat `-n` as an option; `--` marks end of options.",hint:"Portable: `printf '%s\\n' '-n'`.",level:"expert",codeExample:"echo -- '-n message'"},{question:"Can `echo` produce binary output?",shortAnswer:"Not directly; `echo` outputs text. For binary, use `printf` or `xxd`.",explanation:"You can output escape sequences like `\\x41` with `echo -e`, but better to use `printf`.",hint:"`printf '\\x41\\x42\\x43'` outputs 'ABC'.",level:"expert",codeExample:"printf '\\x48\\x65\\x6c\\x6c\\x6f'"},{question:"Why does `echo` sometimes add extra spaces between arguments?",shortAnswer:"Because `echo` separates its arguments with a single space by default.",explanation:"If you pass multiple arguments, `echo` joins them with a space. Use one quoted string to avoid.",hint:'`echo "Hello   World"` preserves multiple spaces.',level:"basic",codeExample:`echo Hello   World   # Hello World (single space)
echo "Hello   World"   # Hello   World`},{question:"How can you use `echo` to create a multi-line variable?",shortAnswer:"Use `echo -e` with `\\n` and assign: `multiline=$(echo -e 'Line1\\nLine2')`",explanation:`Or use a heredoc: \`multiline=$(cat <<EOF
Line1
Line2
EOF)\``,hint:"Variables can contain newlines if quoted correctly.",level:"advanced",codeExample:`msg=$(echo -e 'First line\\nSecond line'); echo "$msg"`},{question:"What is the difference between `echo` in bash and sh?",shortAnswer:"Bash's `echo` supports `-e`, `-n`, `-E`; POSIX `sh` may not support any options.",explanation:"In `/bin/sh` (often dash), `echo` does not interpret escapes; you must use `printf`.",hint:"Write portable scripts using `printf`.",level:"expert",codeExample:`#!/bin/sh
printf 'Hello\\n'`},{question:"How can you print environment variables using `echo`?",shortAnswer:"`echo $HOME`, `echo $PATH`, or `env | grep`.",explanation:"All environment variables are available as shell variables.",hint:'`echo "User: $USER, Home: $HOME"`.',level:"basic",codeExample:'echo "My shell is $SHELL"'},{question:"How do you suppress the trailing newline in a way that works on all systems?",shortAnswer:"Use `printf '%s' 'text'` instead of `echo -n`.",explanation:"`printf` is POSIX and does not add newline unless you specify `\\n`.",hint:"`printf` is the portable solution.",level:"advanced",codeExample:"printf 'Prompt: '; read answer"},{question:"Can `echo` be used to display the exit status of the last command?",shortAnswer:"Yes, `echo $?` prints the exit status of the previous command.",explanation:"`$?` holds the exit code; `echo` prints it.",hint:'Useful for debugging scripts: `command; echo "Exit code: $?"`',level:"intermediate",codeExample:"ls /nonexistent; echo $?"},{question:"How do you print a large block of text without escaping every line?",shortAnswer:"Use a heredoc: `cat << EOF ... EOF` or `echo` with multiline string.",explanation:"Heredoc allows natural multiline input.",hint:"`cat << 'EOF' ... EOF` preserves formatting.",level:"intermediate",codeExample:`cat << 'EOF'
This is line 1
This is line 2
EOF`},{question:"What does `echo {1..5}` do?",shortAnswer:"Brace expansion: prints `1 2 3 4 5`.",explanation:"The shell expands the braces before `echo` sees them.",hint:"`echo {a..z}` prints alphabet.",level:"basic",codeExample:"echo {1..10}"},{question:"How can you clear the terminal using `echo`?",shortAnswer:"`echo -e '\\033[2J\\033[H'` sends ANSI clear screen and home cursor.",explanation:"Not as portable as `clear` command but works on many terminals.",hint:"Just use `clear` command.",level:"advanced",codeExample:"echo -e '\\033[2J\\033[H'"},{question:"Why does `echo` in a script sometimes output 'missing argument'?",shortAnswer:"Because the variable is empty, and `echo` with no arguments prints a blank line (not an error).",explanation:"If you intend to print nothing, it's fine. To detect empty, check before echoing.",hint:'`echo "${var:-default}"` provides a default.',level:"intermediate",codeExample:'unset var; echo "$var"   # prints blank line'},{question:"How can you echo a literal dollar sign?",shortAnswer:"Use single quotes: `echo '$100'` or escape: `echo \"\\$100\"`.",explanation:"Double quotes require escaping `$` to prevent variable expansion.",hint:"`echo 'Price: $10'`",level:"basic",codeExample:'echo "The cost is \\$5.00"'},{question:"What is the difference between `echo` and `cat` when displaying a file?",shortAnswer:"`echo` prints its arguments; `cat` prints file contents. `echo $(<file)` can print a file but poorly.",explanation:"Use `cat` for files; `echo` for strings.",hint:'`cat file.txt` is proper; `echo "$(<file.txt)"` is messy.',level:"basic",codeExample:"echo 'Hello' > test; cat test"}],g=`#!/bin/bash
# echo_basic.sh - Basic usage of echo

echo "=== Basic Echo Examples ==="

echo "1. Simple greeting:"
echo "Hello, Swadeep!"

echo -e "\\n2. Multiple arguments:"
echo "Welcome to" "Barrackpore" "!"

echo -e "\\n3. With variables:"
name="Tuhina"
echo "Hello, $name"

echo -e "\\n4. Command substitution:"
echo "Today is $(date +%A), $(date +%B) $(date +%d)"

echo -e "\\n5. Without newline (-n):"
echo -n "Loading "
sleep 1
echo -n "."
sleep 1
echo " Done"`,b=`#!/bin/bash
# echo_options.sh - Exploring -n, -e, -E options

echo "=== Echo Options Demo ==="

echo "1. Default (adds newline):"
echo "Line 1"; echo "Line 2"

echo -e "\\n2. Suppress newline with -n:"
echo -n "This line" && echo " continues"

echo -e "\\n3. Enable escapes with -e:"
echo -e "First line\\nSecond line\\nThird line"

echo -e "\\n4. Tab stops:"
echo -e "Column1\\tColumn2\\tColumn3"

echo -e "\\n5. Backspace and carriage return:"
echo -e "12345\\b\\b\\bABC"   # deletes 3 chars
echo -e "Loading...\\rDone   "

echo -e "\\n6. Disable escapes with -E (default):"
echo -E "This is a literal \\\\n backslash-n"

# Note: on some systems, /bin/sh may not support -e
echo "Note: Options may vary; use 'man echo'."`,f=`#!/bin/bash
# echo_variables.sh - Displaying variables with echo

echo "=== Variables and Quoting ==="

student="Abhronila"
marks=88
subject="Science"

echo "1. Double quotes (expand variables):"
echo "Student $student scored $marks in $subject"

echo -e "\\n2. Single quotes (literal):"
echo 'Student $student scored $marks in $subject'

echo -e "\\n3. Preserving spaces with quotes:"
message="   Keep these spaces   "
echo "Without quotes: $message"
echo "With quotes:   \\"$message\\""

echo -e "\\n4. Combining variables and text:"
echo "\${student}'s result: \${marks}%"

echo -e "\\n5. Using echo with array:"
fruits=("Apple" "Banana" "Cherry")
echo "First fruit: \${fruits[0]}"
echo "All fruits: \${fruits[@]}"`,y=`#!/bin/bash
# echo_formatting.sh - Advanced formatting with colors and escapes

echo "=== Formatting Output ==="

# Color definitions
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[0;33m'
BLUE='\\033[0;34m'
PURPLE='\\033[0;35m'
CYAN='\\033[0;36m'
WHITE='\\033[0;37m'
NC='\\033[0m' # No Color

echo -e "\${RED}1. Red text\${NC}"
echo -e "\${GREEN}2. Green text\${NC}"
echo -e "\${YELLOW}3. Yellow text\${NC}"
echo -e "\${BLUE}4. Blue text\${NC}"
echo -e "\${PURPLE}5. Purple text\${NC}"
echo -e "\${CYAN}6. Cyan text\${NC}"
echo -e "\${WHITE}7. White text\${NC}"

echo -e "\\n8. Bold text:"
echo -e "\\033[1mBold text\\033[0m"

echo -e "\\n9. Underlined:"
echo -e "\\033[4mUnderlined text\\033[0m"

echo -e "\\n10. Blinking (not all terminals):"
echo -e "\\033[5mBlinking text\\033[0m"

echo -e "\\n11. Background colors:"
echo -e "\\033[41mRed background\\033[0m"
echo -e "\\033[42mGreen background\\033[0m"
echo -e "\\033[44mBlue background\\033[0m"

echo -e "\\n12. Combining styles:"
echo -e "\\033[1;31;44mBold Red on Blue\\033[0m"

echo -e "\\n13. Progress bar simulation:"
for i in {1..20}; do
    echo -ne "\\r["
    for ((j=1; j<=i; j++)); do echo -ne "#"; done
    for ((j=i; j<20; j++)); do echo -ne " "; done
    echo -ne "] $((i*5))%"
    sleep 0.1
done
echo -e "\\nFinished!"`,q=()=>{const r=new Date().getFullYear()-1998,[t,l]=o.useState("Hello, Barrackpore!"),[n,c]=o.useState(""),[d,h]=o.useState(""),[p,a]=o.useState(!1);return o.useEffect(()=>{a(!0),setTimeout(()=>a(!1),300);let s=t;n==="-n"?s=t+" (no newline)":n==="-e"?s=t.replace(/\\n/g,`
`).replace(/\\t/g,"    "):n==="-E"&&(s=t),h(s)},[t,n]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-4",children:"📢 The `echo` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Display text, variables, and formatted messages — the most fundamental output command in Unix/Linux."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Try echo live"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Text to echo:"}),e.jsx("input",{type:"text",value:t,onChange:s=>l(s.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono",placeholder:"Enter text..."})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Options:"}),e.jsxs("select",{value:n,onChange:s=>c(s.target.value),className:"px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"",children:"None (default with newline)"}),e.jsx("option",{value:"-n",children:"-n (no newline)"}),e.jsx("option",{value:"-e",children:"-e (enable escapes: \\n, \\t)"}),e.jsx("option",{value:"-E",children:"-E (disable escapes, default)"})]})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsxs("span",{children:["echo ",n,' "',t,'"']})]}),e.jsx("pre",{className:x("whitespace-pre-wrap transition-opacity duration-300",p?"opacity-70":"opacity-100"),children:d})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 `echo` is used in almost every shell script to provide feedback to the user."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `echo`?"}),e.jsxs("p",{className:"mb-3",children:["The ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"echo"})," command is one of the simplest and most frequently used utilities. It outputs its arguments to standard output (usually the terminal), separated by spaces and followed by a newline."]}),e.jsx("p",{children:'From printing "Hello World" to displaying variable values, `echo` is the foundation of user interaction in shell scripts.'})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"echo [OPTIONS] [STRING...]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Display a line of text."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Writes output to stdout (exit 0 unless write error)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," In every script that needs to give feedback, show variable values, or format output."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"User prompts:"})," ",e.jsx("code",{className:"text-sm",children:'echo -n "Enter your name: "; read name'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging scripts:"})," ",e.jsx("code",{className:"text-sm",children:'echo "Variable value is: $var"'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Generating file content:"})," ",e.jsx("code",{className:"text-sm",children:'echo "Hello" > file.txt'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shell prompt customization:"})," Displaying system info in PS1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Progress indicators:"})," ",e.jsx("code",{className:"text-sm",children:'echo -n "."; sleep 1; echo " Done"'})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Print without newline:"})," ",e.jsx("code",{className:"text-sm",children:'echo -n "Message"'})," (or ",e.jsx("code",{children:"printf"})," for portability)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enable escape sequences:"})," ",e.jsx("code",{className:"text-sm",children:'echo -e "Line1\\nLine2"'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Print literal backslashes:"})," ",e.jsx("code",{className:"text-sm",children:'echo -E "C:\\\\Users"'})," or use single quotes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use variable expansion:"})," ",e.jsx("code",{className:"text-sm",children:'echo "Today is $(date)"'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Colorize output with ANSI codes:"})," ",e.jsx("code",{className:"text-sm",children:'echo -e "\\e[31mRed text\\e[0m"'})]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"📢 How `echo` Works"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"180",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"110",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. User types"}),e.jsx("text",{x:"110",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:'echo "Hello World"'}),e.jsx("line",{x1:"200",y1:"70",x2:"250",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow5)"}),e.jsx("rect",{x:"260",y:"30",width:"180",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. Parse arguments"}),e.jsx("text",{x:"350",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"options, whitespace handling"}),e.jsx("line",{x1:"440",y1:"70",x2:"490",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow5)"}),e.jsx("rect",{x:"500",y:"30",width:"180",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"590",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. Process escapes"}),e.jsx("text",{x:"590",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"if -e, convert \\n, \\t etc."}),e.jsx("line",{x1:"680",y1:"70",x2:"730",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow5)"}),e.jsx("rect",{x:"740",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"810",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Output"}),e.jsx("text",{x:"810",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"Hello World + newline"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow5",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Arguments → parsing → escaping → stdout"}),e.jsx("circle",{cx:"810",cy:"180",r:"15",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"810",y:"184",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"You see"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(i,{fileModule:g,title:"Basic Echo Usage",highlightLines:[4,8,12]}),e.jsx(i,{fileModule:b,title:"Options: -n, -e, -E",highlightLines:[5,10,15]}),e.jsx(i,{fileModule:f,title:"Displaying Variables",highlightLines:[6,12,18]}),e.jsx(i,{fileModule:y,title:"Formatting with Colors & Escapes",highlightLines:[8,16,24]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Portability issues:"})," Options like `-e`, `-n` vary between shells (bash, dash, zsh). Use `printf` for consistent behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Variables not expanded inside single quotes:"})," ",e.jsx("code",{className:"text-sm",children:"echo '$HOME'"})," prints $HOME, not the path."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double quoting to preserve spaces:"})," ",e.jsx("code",{className:"text-sm",children:"echo $var"}),' collapses spaces; use `echo "$var"`.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escape sequences need `-e`:"})," Without `-e`, `\\n` prints literally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Leading dashes misinterpreted as options:"}),' Use `echo -- "-n"` or `printf`.']})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always quote variables:"}),' `echo "$variable"` to prevent word splitting.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use `printf` for complex formatting:"})," It's more predictable across platforms."]}),e.jsx("li",{children:e.jsx("strong",{children:"For user prompts, use `echo -n` or `printf` to keep input on same line."})}),e.jsx("li",{children:e.jsx("strong",{children:'Use `echo` to debug: insert `echo "DEBUG: var=$var"` during development.'})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Redirect error messages to stderr:"})," ",e.jsx("code",{className:"text-sm",children:'echo "Error" >&2'})]})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:'What happens if you type `echo "Hello   World"`? How many spaces appear?'}),e.jsx("li",{children:"Why would you use `echo -n` in a script?"}),e.jsx("li",{children:"How can you print a newline without `-e`? (Hint: use `echo $'\\n'` in bash)"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can print text with `echo`."}),e.jsx("li",{children:"✅ Can print variables using double quotes."}),e.jsx("li",{children:"✅ Knows the difference between single and double quotes."}),e.jsx("li",{children:"✅ Can suppress newline with `-n`."}),e.jsx("li",{children:"✅ Can enable escape sequences with `-e`."}),e.jsx("li",{children:"✅ Understands that `echo` is not always portable and may fallback to `printf`."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(m,{title:"Frequently Asked Questions about echo Command",questions:u})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",r," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"}),' Start with `echo "Hello, World!"` to get students comfortable. Then show `echo $HOME`, `echo "Today is $(date)"`, and finally colored output. Emphasize that `echo` is their primary debugging tool.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"})," Many students get confused between `echo` and `printf`. Explain that `echo` is simpler but `printf` is more reliable for complex formatting. Show both and let them choose."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that asks for a user's name, then prints a personalized greeting with ASCII art using `echo -e`. This combines variables, escapes, and creativity."]})]})]})})]})};export{q as default};

import{r as i,j as e}from"./index-BFnLuail.js";import{c as x}from"./clsx-B-dksMZM.js";import{S as l}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const m=`# topic10_files/quoting_basic.sh\r
#!/bin/bash\r
# Basic quoting examples\r
\r
echo "=== Single Quotes (Literal) ==="\r
echo 'Hello $USER, today is $(date)'\r
echo 'Special chars: * ? [ ] { } $ \\ \`'\r
\r
echo -e "\\n=== Double Quotes (Interpreted) ==="\r
echo "Hello $USER, today is $(date +%F)"\r
echo "Special chars in double quotes: * ? [ ] { }"\r
\r
echo -e "\\n=== No Quotes (Shell Expands) ==="\r
echo Hello $USER, today is $(date +%F)\r
# Warning: This can cause problems with spaces or globs!\r
\r
echo -e "\\n=== Backslash Escape ==="\r
echo "Dollar sign: \\$HOME"\r
echo "Quote in double quotes: She said \\"Hello\\""\r
echo 'Single quote in single quotes: It'\\''s raining'`,u=`# topic10_files/quoting_variables.sh\r
#!/bin/bash\r
# Variables in different quoting contexts\r
\r
USER="Swadeep"\r
HOME="/home/students/swadeep"\r
FILES="file1 file2 file3"\r
\r
echo "=== Variable Expansion Examples ==="\r
\r
echo -e "\\n1. No quotes (DANGER - word splitting):"\r
echo $FILES  # Expands to three separate arguments\r
\r
echo -e "\\n2. Double quotes (SAFE - preserves as single string):"\r
echo "$FILES"  # Preserves as "file1 file2 file3"\r
\r
echo -e "\\n3. Single quotes (LITERAL - no expansion):"\r
echo '$FILES'  # Prints literal text: $FILES\r
\r
echo -e "\\n4. Mixed quoting:"\r
echo "User: '$USER', Home: \\"$HOME\\""\r
\r
echo -e "\\n5. Empty variable test:"\r
EMPTY=""\r
echo "Unquoted empty: $EMPTY"  # Shows nothing\r
echo "Quoted empty: '$EMPTY'"  # Shows empty quotes`,p=`# topic10_files/quoting_special_chars.sh\r
#!/bin/bash\r
# Special character handling with quotes\r
\r
echo "=== Globbing (Filename Expansion) ==="\r
\r
# Create test files\r
touch file1.txt file2.txt file3.txt "file with spaces.txt"\r
\r
echo -e "\\n1. No quotes (globbing happens):"\r
echo *.txt  # Expands to matching files\r
\r
echo -e "\\n2. Double quotes (no globbing):"\r
echo "*.txt"  # Literal *.txt\r
\r
echo -e "\\n3. Single quotes (no globbing):"\r
echo '*.txt'  # Literal *.txt\r
\r
echo -e "\\n4. Files with spaces (REQUIRES quotes):"\r
ls "file with spaces.txt"  # Works\r
# ls file with spaces.txt   # Would fail - 3 arguments!\r
\r
echo -e "\\n=== Other Special Characters ==="\r
\r
echo -e "\\n5. Pipe character:"\r
echo 'ls | grep txt'  # Literal - won't pipe\r
echo "ls | grep txt"  # Also literal in echo\r
# To execute pipe: eval "ls | grep txt"  # But be careful!\r
\r
echo -e "\\n6. Redirects:"\r
echo 'echo test > file.txt'  # Literal\r
# echo test > file.txt       # Actually creates file\r
\r
echo -e "\\n7. Semicolon (command separator):"\r
echo 'echo one; echo two'    # Literal\r
# echo one; echo two         # Executes two commands\r
\r
# Cleanup\r
rm -f file1.txt file2.txt file3.txt "file with spaces.txt"`,g=`# topic10_files/quoting_command_sub.sh\r
#!/bin/bash\r
# Command substitution in quotes\r
\r
echo "=== Command Substitution with Quotes ==="\r
\r
echo -e "\\n1. Double quotes with command substitution:"\r
echo "Today is: $(date +%A)"\r
echo "You are: $(whoami)@$(hostname)"\r
echo "Files: $(ls -1 | wc -l) in $(pwd)"\r
\r
echo -e "\\n2. Single quotes (no substitution):"\r
echo 'Today is: $(date +%A)'\r
echo 'You are: $(whoami)@$(hostname)'\r
\r
echo -e "\\n3. Nested quotes with command substitution:"\r
echo "User '$(whoami)' has home at \\"$(echo ~)\\""\r
\r
echo -e "\\n4. Command substitution in variable assignment:"\r
SERVER="$(hostname -s)"\r
UPTIME="$(uptime -p)"\r
echo "Server $SERVER has been up for $UPTIME"\r
\r
echo -e "\\n5. Quoting the result of command substitution:"\r
FILE_COUNT="$(ls -1 | wc -l)"\r
echo "File count: \\"$FILE_COUNT\\""  # Quotes around variable\r
\r
echo -e "\\n6. When NOT to quote command substitution:"\r
# For arithmetic, don't quote the $(( ))\r
RESULT=$(( $(date +%d) + 10 ))\r
echo "Ten days from now: day $RESULT"`,b=`# topic10_files/quoting_nested.sh\r
#!/bin/bash\r
# Nested quotes and complex cases\r
\r
echo "=== Nested Quotes (Complex Cases) ==="\r
\r
echo -e "\\n1. Double quotes inside single quotes:"\r
echo 'The message was: "Hello World"'\r
\r
echo -e "\\n2. Single quotes inside double quotes:"\r
echo "It's a beautiful day"\r
\r
echo -e "\\n3. Escaped quotes inside same-type quotes:"\r
echo "She said: \\"It's raining\\""\r
echo 'He replied: '\\''So take an umbrella'\\'''\r
\r
echo -e "\\n4. Multiple levels of nesting:"\r
echo "'"'"'"This gets confusing!"'"'"'"\r
\r
echo -e "\\n5. Using variables with nested quotes:"\r
NAME="Tuhina"\r
MESSAGE="Don't forget the meeting"\r
echo "$NAME said: \\"$MESSAGE\\""\r
\r
echo -e "\\n6. Here documents with quotes:"\r
cat << 'EOF'\r
This is a here-doc with 'single' and "double" quotes\r
Variable $HOME won't expand because of quoted EOF\r
EOF\r
\r
cat << EOF\r
This here-doc will expand variables like $HOME\r
And commands like $(date)\r
EOF\r
\r
echo -e "\\n7. ANSI-C quoting ($'...'):"\r
echo $'Line 1\\nLine 2\\tTabbed'\r
echo $'Special: \\xE2\\x98\\xBA \\u263A'  # Unicode smiley\r
\r
echo -e "\\n8. Locale-specific quoting ($\\"...\\"):"\r
# This requires proper locale setup\r
echo $"Hello"  # May translate if locale supports it`,f=`# topic10_files/quoting_pitfalls.sh\r
#!/bin/bash\r
# Common quoting pitfalls and how to avoid them\r
\r
echo "=== Common Quoting Pitfalls ==="\r
\r
echo -e "\\n1. Pitfall: Forgetting quotes with spaces"\r
touch "test file.txt"\r
# WRONG: ls test file.txt      # Looks for two files\r
# RIGHT:\r
ls "test file.txt"\r
\r
echo -e "\\n2. Pitfall: Single quotes inside single quotes"\r
# WRONG: echo 'It's broken'\r
# RIGHT:\r
echo "It's working"\r
echo 'It'\\''s also working'\r
\r
echo -e "\\n3. Pitfall: Variable expansion in single quotes"\r
NAME="Debangshu"\r
echo 'Hello $NAME'  # Wrong if you want expansion\r
echo "Hello $NAME"  # Right\r
\r
echo -e "\\n4. Pitfall: Globbing when you don't want it"\r
touch file1 file2 file3\r
COUNT=$(ls -1 | wc -l)\r
echo "File count: $COUNT"\r
echo "Files: *"  # Shows "Files: *"\r
echo "Files: "*  # Shows "Files: file1 file2 file3"\r
\r
echo -e "\\n5. Pitfall: Command substitution with special chars"\r
OUTPUT="$(ls -l)"\r
echo "$OUTPUT"  # Preserves newlines\r
echo $OUTPUT    # May collapse whitespace\r
\r
echo -e "\\n6. Pitfall: Empty variables"\r
EMPTY=""\r
echo "Test: $EMPTY"        # Shows: Test:\r
echo "Test: \${EMPTY:-default}"  # Shows: Test: default\r
\r
echo -e "\\n7. Pitfall: Over-quoting arithmetic"\r
X=5\r
Y=3\r
RESULT=$((X + Y))  # No quotes needed for arithmetic\r
echo "Result: $RESULT"\r
# WRONG: RESULT="$(($X + $Y))"  # Works but unnecessary quotes\r
\r
echo -e "\\n8. Pitfall: Quotes in eval"\r
CMD="echo 'Hello World'"\r
eval $CMD  # May not work as expected\r
# BETTER: eval "$CMD"\r
\r
echo -e "\\n9. Pitfall: Quotes in find -exec"\r
# WRONG: find . -name "*.txt" -exec echo {} \\;\r
# RIGHT: find . -name "*.txt" -exec echo "{}" \\;\r
\r
# Cleanup\r
rm -f "test file.txt" file1 file2 file3`,k=()=>{const[t,o]=i.useState("basic"),[s,a]=i.useState(null),d={basic:"Basic Quoting Examples",variables:"Variables in Quotes",special:"Special Characters",commandsub:"Command Substitution",nested:"Nested Quotes",pitfalls:"Common Pitfalls"},c=()=>e.jsx("div",{className:"w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500",children:e.jsxs("svg",{viewBox:"0 0 900 500",className:"w-full h-auto","aria-label":"Quoting Levels Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"singleQuoteGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10B981",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.9"})]}),e.jsxs("linearGradient",{id:"doubleQuoteGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#3B82F6",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#1D4ED8",stopOpacity:"0.9"})]}),e.jsxs("linearGradient",{id:"escapeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#F59E0B",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#D97706",stopOpacity:"0.9"})]}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6B7280"})}),e.jsx("pattern",{id:"literalPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",children:e.jsx("path",{d:"M0,0 L20,20 M20,0 L0,20",stroke:"#10B981",strokeWidth:"1",opacity:"0.3"})}),e.jsx("pattern",{id:"interpretPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",children:e.jsx("circle",{cx:"10",cy:"10",r:"2",fill:"#3B82F6",opacity:"0.3"})})]}),e.jsx("text",{x:"450",y:"40",textAnchor:"middle",fill:"#1F2937",fontSize:"20",fontWeight:"bold",className:"dark:fill-gray-200",children:"Shell Quoting Levels - From Most to Least Protective"}),e.jsxs("g",{className:"cursor-pointer transition-all duration-300",onMouseEnter:()=>a("single"),onMouseLeave:()=>a(null),transform:s==="single"?"scale(1.02)":"scale(1)",children:[e.jsx("rect",{x:"100",y:"80",width:"700",height:"80",rx:"15",fill:"url(#singleQuoteGradient)",stroke:"#059669",strokeWidth:s==="single"?"4":"2",filter:s==="single"?"url(#glow)":"none"}),e.jsx("text",{x:"450",y:"115",textAnchor:"middle",fill:"white",fontSize:"18",fontWeight:"bold",children:"Single Quotes: 'Everything is literal'"}),e.jsx("text",{x:"450",y:"140",textAnchor:"middle",fill:"#D1FAE5",fontSize:"14",children:"No variable expansion • No command substitution • No globbing"}),e.jsx("rect",{x:"100",y:"80",width:"700",height:"80",rx:"15",fill:"url(#literalPattern)",opacity:"0.2"}),e.jsxs("g",{transform:"translate(120 170)",children:[e.jsx("rect",{x:"0",y:"0",width:"660",height:"50",rx:"8",fill:"#064E3B",fillOpacity:"0.3"}),e.jsx("text",{x:"20",y:"20",fill:"#D1FAE5",fontSize:"14",fontWeight:"bold",children:"Example:"}),e.jsx("text",{x:"120",y:"20",fill:"#A7F3D0",fontSize:"14",fontFamily:"monospace",children:"echo '$HOME is $HOME'"}),e.jsx("text",{x:"20",y:"40",fill:"#D1FAE5",fontSize:"14",fontWeight:"bold",children:"Output:"}),e.jsx("text",{x:"120",y:"40",fill:"#A7F3D0",fontSize:"14",fontFamily:"monospace",children:"$HOME is $HOME"})]})]}),e.jsxs("g",{className:"cursor-pointer transition-all duration-300",onMouseEnter:()=>a("double"),onMouseLeave:()=>a(null),transform:`translate(0 130) ${s==="double"?"scale(1.02)":"scale(1)"}`,children:[e.jsx("rect",{x:"100",y:"80",width:"700",height:"80",rx:"15",fill:"url(#doubleQuoteGradient)",stroke:"#1D4ED8",strokeWidth:s==="double"?"4":"2",filter:s==="double"?"url(#glow)":"none"}),e.jsx("text",{x:"450",y:"115",textAnchor:"middle",fill:"white",fontSize:"18",fontWeight:"bold",children:'Double Quotes: "Interpret variables and commands"'}),e.jsx("text",{x:"450",y:"140",textAnchor:"middle",fill:"#DBEAFE",fontSize:"14",children:"Variable expansion ✓ • Command substitution ✓ • Globbing ✗"}),e.jsx("rect",{x:"100",y:"80",width:"700",height:"80",rx:"15",fill:"url(#interpretPattern)",opacity:"0.2"}),e.jsxs("g",{transform:"translate(120 170)",children:[e.jsx("rect",{x:"0",y:"0",width:"660",height:"50",rx:"8",fill:"#1E3A8A",fillOpacity:"0.3"}),e.jsx("text",{x:"20",y:"20",fill:"#DBEAFE",fontSize:"14",fontWeight:"bold",children:"Example:"}),e.jsx("text",{x:"120",y:"20",fill:"#BFDBFE",fontSize:"14",fontFamily:"monospace",children:'echo "Your home is $HOME"'}),e.jsx("text",{x:"20",y:"40",fill:"#DBEAFE",fontSize:"14",fontWeight:"bold",children:"Output:"}),e.jsx("text",{x:"120",y:"40",fill:"#BFDBFE",fontSize:"14",fontFamily:"monospace",children:"Your home is /home/user"})]})]}),e.jsxs("g",{className:"cursor-pointer transition-all duration-300",onMouseEnter:()=>a("escape"),onMouseLeave:()=>a(null),transform:`translate(0 260) ${s==="escape"?"scale(1.02)":"scale(1)"}`,children:[e.jsx("rect",{x:"100",y:"80",width:"700",height:"80",rx:"15",fill:"url(#escapeGradient)",stroke:"#D97706",strokeWidth:s==="escape"?"4":"2",filter:s==="escape"?"url(#glow)":"none"}),e.jsx("text",{x:"450",y:"115",textAnchor:"middle",fill:"white",fontSize:"18",fontWeight:"bold",children:"Backslash Escape: \\Character by character control"}),e.jsx("text",{x:"450",y:"140",textAnchor:"middle",fill:"#FEF3C7",fontSize:"14",children:"Escape next character • Preserve special meaning • Precise control"}),e.jsxs("g",{transform:"translate(120 170)",children:[e.jsx("rect",{x:"0",y:"0",width:"660",height:"50",rx:"8",fill:"#92400E",fillOpacity:"0.3"}),e.jsx("text",{x:"20",y:"20",fill:"#FEF3C7",fontSize:"14",fontWeight:"bold",children:"Example:"}),e.jsx("text",{x:"120",y:"20",fill:"#FDE68A",fontSize:"14",fontFamily:"monospace",children:"echo Path: $HOME or \\$HOME"}),e.jsx("text",{x:"20",y:"40",fill:"#FEF3C7",fontSize:"14",fontWeight:"bold",children:"Output:"}),e.jsx("text",{x:"120",y:"40",fill:"#FDE68A",fontSize:"14",fontFamily:"monospace",children:"Path: $HOME or $HOME"})]})]}),e.jsxs("g",{transform:"translate(50 0)",children:[e.jsx("text",{x:"0",y:"150",textAnchor:"start",fill:"#6B7280",fontSize:"12",fontWeight:"bold",transform:"rotate(-90 0 150)",children:"MOST PROTECTION"}),e.jsx("text",{x:"0",y:"280",textAnchor:"start",fill:"#6B7280",fontSize:"12",fontWeight:"bold",transform:"rotate(-90 0 280)",children:"BALANCED"}),e.jsx("text",{x:"0",y:"410",textAnchor:"start",fill:"#6B7280",fontSize:"12",fontWeight:"bold",transform:"rotate(-90 0 410)",children:"LEAST PROTECTION"}),e.jsx("line",{x1:"30",y1:"100",x2:"30",y2:"450",stroke:"#6B7280",strokeWidth:"2",strokeDasharray:"5,5"})]}),e.jsx("defs",{children:e.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})})]})});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-6",children:[e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400",children:"Topic 10: Quoting Rules"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400",children:"Single quotes, double quotes and escaping characters - Controlling shell interpretation"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.1s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-indigo-700 dark:text-indigo-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg",children:"📘"}),"Why Quoting Matters in Shell Scripts"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",children:["Quoting controls ",e.jsx("strong",{children:"how the shell interprets special characters"}),` like spaces, dollar signs, asterisks, and more. It's the difference between telling the shell "treat this as data" versus "execute this as a command."`]}),e.jsxs("div",{className:"mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded",children:[e.jsx("h3",{className:"font-bold text-indigo-800 dark:text-indigo-300 mb-2",children:"Real-world Analogy"}),e.jsxs("p",{className:"text-indigo-700 dark:text-indigo-400",children:["Think of ",e.jsx("strong",{children:"Abhronila"}),' writing a letter. If she writes "Call me at 7PM", her friend knows to call at 7. If she writes ',e.jsx("code",{className:"bg-indigo-100 dark:bg-indigo-800 px-1 rounded",children:'"Call me at $TIME"'}),' and $TIME=7PM, her friend sees "Call me at 7PM". If she writes ',e.jsx("code",{className:"bg-indigo-100 dark:bg-indigo-800 px-1 rounded",children:"'Call me at $TIME'"}),', her friend sees the literal text "$TIME". Quoting changes interpretation.']})]})]}),e.jsx("section",{className:"animate-[fadeInUp_0.8s_ease-out_0.2s_both]",children:e.jsx(c,{})}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.3s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg",children:"🔧"}),"How Shell Quoting Works"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700 hover:border-emerald-400 dark:hover:border-emerald-400 transition-all duration-300",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("span",{className:"text-3xl text-emerald-600 dark:text-emerald-400",children:"'"})}),e.jsx("h3",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-2 text-center",children:"Single Quotes"}),e.jsxs("ul",{className:"space-y-2 text-sm text-emerald-700 dark:text-emerald-400",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:e.jsx("strong",{children:"Everything literal"})})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"No variable expansion"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"No command substitution"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"No escape sequences"})]})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("span",{className:"text-3xl text-blue-600 dark:text-blue-400",children:'"'})}),e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2 text-center",children:"Double Quotes"}),e.jsxs("ul",{className:"space-y-2 text-sm text-blue-700 dark:text-blue-400",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:e.jsx("strong",{children:"Interpret $, `, \\"})})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"Variables expanded"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"Commands substituted"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"Globbing disabled"})]})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("span",{className:"text-3xl text-amber-600 dark:text-amber-400",children:"\\"})}),e.jsx("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2 text-center",children:"Backslash Escape"}),e.jsxs("ul",{className:"space-y-2 text-sm text-amber-700 dark:text-amber-400",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:e.jsx("strong",{children:"Character-level control"})})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"Escapes next character"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:'Works inside " " and unquoted'})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"mt-1 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"}),e.jsx("span",{children:"Line continuation with \\ at end"})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg text-gray-800 dark:text-gray-200 mb-3",children:"When to Use Each Type"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-2",children:"Use Single Quotes For:"}),e.jsxs("ul",{className:"space-y-1 text-sm text-emerald-700 dark:text-emerald-400",children:[e.jsx("li",{children:"• Hard-coded strings"}),e.jsx("li",{children:"• Regex patterns"}),e.jsx("li",{children:"• SQL queries in scripts"}),e.jsx("li",{children:"• File paths with spaces"})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"Use Double Quotes For:"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700 dark:text-blue-400",children:[e.jsx("li",{children:"• Strings with variables"}),e.jsx("li",{children:"• Command substitution results"}),e.jsx("li",{children:"• File names with spaces"}),e.jsx("li",{children:"• Most echo statements"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Golden Rule"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"When in doubt, use double quotes."})," They prevent word splitting and globbing while still allowing variable expansion. Single quotes are for when you want ",e.jsx("em",{children:"exactly"})," what you type."]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.4s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-purple-100 dark:bg-purple-900 rounded-lg",children:"📝"}),"Interactive Examples"]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:Object.entries(d).map(([r,n],h)=>e.jsx("button",{onClick:()=>o(r),className:x("px-4 py-2 rounded-lg font-medium transition-all duration-300",t===r?"bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),style:{animationDelay:`${.5+h*.1}s`},children:n},r))}),e.jsxs("div",{className:"animate-[fadeIn_0.5s_ease-out]",children:[t==="basic"&&e.jsx(l,{fileModule:m,title:"Basic Quoting Differences",highlightLines:[2,5,8]}),t==="variables"&&e.jsx(l,{fileModule:u,title:"Variables in Different Quotes",highlightLines:[2,6,10]}),t==="special"&&e.jsx(l,{fileModule:p,title:"Special Character Handling",highlightLines:[2,6,10]}),t==="commandsub"&&e.jsx(l,{fileModule:g,title:"Command Substitution in Quotes",highlightLines:[2,6,10]}),t==="nested"&&e.jsx(l,{fileModule:b,title:"Nested Quotes (Complex Cases)",highlightLines:[2,8,14]}),t==="pitfalls"&&e.jsx(l,{fileModule:f,title:"Common Quoting Pitfalls",highlightLines:[2,8,14]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.5s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-red-700 dark:text-red-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-red-100 dark:bg-red-900 rounded-lg",children:"⚠️"}),"Common Pitfalls & Mistakes"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("h3",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"1. Forgetting Quotes with Spaces"}),e.jsxs("p",{className:"text-red-700 dark:text-red-400",children:[e.jsx("code",{className:"bg-red-100 dark:bg-red-800 px-1 rounded",children:"cp file1 file2 new folder/"}),' will fail because "new folder" is two arguments. Use ',e.jsx("code",{className:"bg-red-100 dark:bg-red-800 px-1 rounded",children:'cp file1 file2 "new folder/"'})]})]}),e.jsxs("div",{className:"p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded",children:[e.jsx("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"2. Single Quotes Inside Single Quotes"}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-400",children:["You can't have ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"'It's raining'"})," because the middle quote ends the string. Use ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:`"It's raining"`})," or ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"'It'\\''s raining'"})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"3. Over-quoting Arithmetic"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-400",children:[e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:'result="$(($x + $y))"'})," works, but ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"result='$(($x + $y))'"})," gives literal text. Know when you want calculation vs literal."]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300 mb-2",children:"4. Misunderstanding Globbing"}),e.jsxs("p",{className:"text-purple-700 dark:text-purple-400",children:[e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"echo *.txt"})," expands to matching files. ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:'echo "*.txt"'}),' prints "*.txt". ',e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"echo '*.txt'"}),' also prints "*.txt".']})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.6s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-green-100 dark:bg-green-900 rounded-lg",children:"✅"}),"Best Practices for Shell Quoting"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"1."})," Quote All Variable Expansions"]}),e.jsxs("p",{className:"text-green-700 dark:text-green-400 text-sm",children:["Always use ",e.jsx("code",{className:"bg-green-100 dark:bg-green-800 px-1 rounded",children:'"$variable"'})," not ",e.jsx("code",{className:"bg-green-100 dark:bg-green-800 px-1 rounded",children:"$variable"})," to prevent word splitting."]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"2."})," Use Single Quotes for Literals"]}),e.jsx("p",{className:"text-blue-700 dark:text-blue-400 text-sm",children:"When you don't need variable expansion, use single quotes for clarity and safety."})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"3."})," Escape Dollar Signs in Regex"]}),e.jsxs("p",{className:"text-purple-700 dark:text-purple-400 text-sm",children:["In grep patterns, use ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"'\\$[0-9]'"}),' to match literal "$", not ',e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:'"$[0-9]"'})," which expands variables."]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"4."})," Use Heredocs for Multi-line"]}),e.jsx("p",{className:"text-amber-700 dark:text-amber-400 text-sm",children:"For multi-line strings with variables, use heredocs instead of complex quoting."})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Tip from Barrackpore Tech"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["At Barrackpore Tech Solutions, we enforce shellcheck in our CI/CD pipeline. It catches quoting errors before deployment. Teach ",e.jsx("strong",{children:"Swadeep and Tuhina"})," to run ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"shellcheck script.sh"})," on all their scripts."]})]})]}),e.jsx("section",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl animate-[fadeInUp_0.8s_ease-out_0.7s_both] hover:shadow-2xl transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Teacher's Note"}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"font-bold text-white mb-2",children:"The Quoting Mindset"}),e.jsxs("p",{className:"text-white/90 leading-relaxed",children:["Quoting isn't about memorizing rules—it's about understanding ",e.jsx("strong",{children:"when the shell interprets vs. when it preserves"}),'. Think of single quotes as a "literal bubble", double quotes as a "smart bubble" that understands variables, and backslash as a "character shield".']})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsxs("p",{className:"text-white/80 text-sm",children:["When ",e.jsx("strong",{children:"Debangshu"}),' at Ichapur High School writes scripts, I tell him: "If you see unexpected spaces or globs, you forgot quotes."']})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsxs("p",{className:"text-white/80 text-sm",children:["The most common error I see in 27 years: ",e.jsx("code",{className:"bg-white/20 px-1 rounded",children:"echo $PATH"})," vs ",e.jsx("code",{className:"bg-white/20 px-1 rounded",children:'echo "$PATH"'}),". The first splits by colons!"]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsx("p",{className:"text-white/80 text-sm",children:"Remember: Quoting is cheap. A few extra quotes prevent hours of debugging. When in doubt, quote it out!"})]})]}),e.jsx("div",{className:"mt-6 pt-4 border-t border-white/30",children:e.jsxs("div",{className:"text-white/70 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," • 27 years experience"]}),e.jsx("p",{children:"sukantahui@codernaccotax.co.in • 7003756860"}),e.jsx("p",{children:"Expertise: Shell Scripting, System Administration, DevOps"})]})})]})]})]})})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.2s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300",children:"⚡"}),"Quick Reference Cheat Sheet"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-emerald-800/30 rounded-lg border border-emerald-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("code",{className:"text-sm text-emerald-300 font-mono",children:"'text'"}),e.jsx("span",{className:"text-xs bg-emerald-700 px-2 py-1 rounded",children:"Literal"})]}),e.jsx("p",{className:"text-emerald-200 text-xs",children:"No $, no `, no \\, no nothing"})]}),e.jsxs("div",{className:"p-3 bg-blue-800/30 rounded-lg border border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("code",{className:"text-sm text-blue-300 font-mono",children:'"text"'}),e.jsx("span",{className:"text-xs bg-blue-700 px-2 py-1 rounded",children:"Smart"})]}),e.jsx("p",{className:"text-blue-200 text-xs",children:"$ and ` work, \\ escapes, no globbing"})]}),e.jsxs("div",{className:"p-3 bg-amber-800/30 rounded-lg border border-amber-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("code",{className:"text-sm text-amber-300 font-mono",children:"\\t"}),e.jsx("span",{className:"text-xs bg-amber-700 px-2 py-1 rounded",children:"Escape"})]}),e.jsx("p",{className:"text-amber-200 text-xs",children:"Escapes next character only"})]}),e.jsxs("div",{className:"p-3 bg-purple-800/30 rounded-lg border border-purple-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("code",{className:"text-sm text-purple-300 font-mono",children:"$'t\\tn'"}),e.jsx("span",{className:"text-xs bg-purple-700 px-2 py-1 rounded",children:"ANSI-C"})]}),e.jsx("p",{className:"text-purple-200 text-xs",children:"Interpret escape sequences"})]}),e.jsxs("div",{className:"p-3 bg-rose-800/30 rounded-lg border border-rose-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("code",{className:"text-sm text-rose-300 font-mono",children:'$"text"'}),e.jsx("span",{className:"text-xs bg-rose-700 px-2 py-1 rounded",children:"Locale"})]}),e.jsx("p",{className:"text-rose-200 text-xs",children:"Translate for current locale"})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-white mb-2 text-sm",children:"Memory Aid"}),e.jsxs("p",{className:"text-gray-300 text-xs",children:[e.jsx("strong",{children:"S"}),"ingle = ",e.jsx("strong",{children:"S"}),"trict",e.jsx("br",{}),e.jsx("strong",{children:"D"}),"ouble = ",e.jsx("strong",{children:"D"}),"ynamic",e.jsx("br",{}),e.jsx("strong",{children:"B"}),"ackslash = ",e.jsx("strong",{children:"B"}),"lock next"]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-indigo-800 to-purple-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.3s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300",children:"🎯"}),"Special Characters Guide"]}),e.jsx("div",{className:"space-y-3",children:[{char:"$",name:"Variable",ex:"$HOME",quote:'"'},{char:"`",name:"Command Sub",ex:"`date`",quote:'"'},{char:"*",name:"Glob",ex:"*.txt",quote:`' or "`},{char:"?",name:"Wildcard",ex:"file?.txt",quote:`' or "`},{char:"[ ]",name:"Character Class",ex:"[a-z]",quote:`' or "`},{char:"{ }",name:"Brace Expansion",ex:"{1..3}",quote:`' or "`},{char:"|",name:"Pipe",ex:"cmd1 | cmd2",quote:`' or "`},{char:"&",name:"Background",ex:"cmd &",quote:`' or "`},{char:";",name:"Command Sep",ex:"cmd1; cmd2",quote:`' or "`},{char:"#",name:"Comment",ex:"# comment",quote:`' or "`}].map((r,n)=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-indigo-700/30 rounded border border-indigo-600 hover:border-indigo-400 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("code",{className:"text-sm text-indigo-300 font-mono bg-indigo-900/50 px-2 py-1 rounded",children:r.char}),e.jsx("span",{className:"text-sm text-indigo-200",children:r.name})]}),e.jsx("span",{className:"text-xs text-indigo-300 bg-indigo-800 px-2 py-1 rounded",children:r.quote})]},n))}),e.jsx("div",{className:"mt-6 p-3 bg-purple-700/40 rounded-lg",children:e.jsxs("p",{className:"text-purple-200 text-xs",children:[e.jsx("strong",{children:"Note:"})," Inside single quotes, all these are literal. Inside double quotes, only $ and ` are special."]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-800 to-green-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.4s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300",children:"📋"}),"Quoting Checklist"]}),e.jsx("div",{className:"space-y-3",children:["Did I quote all variable expansions?","Are there spaces in filenames?","Do I need variables expanded?","Am I using globs intentionally?","Any single quotes inside single quotes?","Should I use heredoc instead?","Have I tested with empty variables?","Does shellcheck pass?"].map((r,n)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-emerald-700/30 rounded-lg border border-emerald-600 hover:border-emerald-400 transition-all duration-300 animate-[fadeIn_0.5s_ease-out]",style:{animationDelay:`${.5+n*.1}s`},children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-400 bg-gray-800 border-gray-600 rounded"}),e.jsx("span",{className:"text-emerald-100 text-sm",children:r})]},n))}),e.jsxs("div",{className:"mt-6 p-4 bg-emerald-700/40 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-white mb-2 text-sm",children:"Pro Tip"}),e.jsxs("p",{className:"text-emerald-200 text-xs",children:["Use ",e.jsx("code",{className:"bg-emerald-800 px-1 rounded",children:"set -x"})," to see how shell interprets your commands with quotes."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-pink-800 to-rose-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.5s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300",children:"💡"}),"Think About..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-pink-700/30 rounded-lg border border-pink-600 hover:border-pink-400 transition-all duration-300",children:e.jsxs("p",{className:"text-pink-100 text-sm italic",children:['"What happens when you nest quotes? Try: ',e.jsx("code",{className:"bg-pink-800/50 px-1 rounded",children:`echo "'$HOME'"`})," vs ",e.jsx("code",{className:"bg-pink-800/50 px-1 rounded",children:`echo '"$HOME"'`}),'"']})}),e.jsx("div",{className:"p-4 bg-rose-700/30 rounded-lg border border-rose-600 hover:border-rose-400 transition-all duration-300",children:e.jsxs("p",{className:"text-rose-100 text-sm italic",children:['"How would ',e.jsx("strong",{children:"Abhronila"}),` write a grep command that searches for literal '$' in files at Shyamnagar Bank?"`]})}),e.jsx("div",{className:"p-4 bg-fuchsia-700/30 rounded-lg border border-fuchsia-600 hover:border-fuchsia-400 transition-all duration-300",children:e.jsxs("p",{className:"text-fuchsia-100 text-sm italic",children:['"Observe: ',e.jsx("code",{className:"bg-fuchsia-800/50 px-1 rounded",children:"PATH=/bin:/usr/bin"})," vs ",e.jsx("code",{className:"bg-fuchsia-800/50 px-1 rounded",children:"PATH='/bin:/usr/bin'"}),' - when does quoting matter here?"']})}),e.jsx("div",{className:"p-4 bg-red-700/30 rounded-lg border border-red-600 hover:border-red-400 transition-all duration-300",children:e.jsxs("p",{className:"text-red-100 text-sm italic",children:[`"What's the difference between `,e.jsx("code",{className:"bg-red-800/50 px-1 rounded",children:"\\n"})," in single vs double quotes? Try: ",e.jsx("code",{className:"bg-red-800/50 px-1 rounded",children:"echo 'line1\\nline2'"})," vs ",e.jsx("code",{className:"bg-red-800/50 px-1 rounded",children:"echo $'line1\\nline2'"}),'"']})})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{className:"px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium",children:"Experiment with These"})})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-700 animate-[fadeIn_0.8s_ease-out_0.8s_both]",children:[e.jsxs("a",{href:"#prev",className:"px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 group",children:[e.jsx("span",{className:"group-hover:-translate-x-1 transition-transform duration-300",children:"←"}),"Previous: Command Substitution"]}),e.jsx("div",{className:"text-center text-gray-600 dark:text-gray-400 text-sm",children:"Topic 10 of 41 • Quoting Rules"}),e.jsxs("a",{href:"#next",className:"px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 group",children:["Next: Conditional Statements",e.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),e.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})};export{k as default};

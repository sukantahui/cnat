import{r as i,j as e}from"./index-CG3iA-Ea.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const p=`# topic11_files/if_basic.sh\r
#!/bin/bash\r
# Basic if statement examples\r
\r
echo "=== Basic if Statements ==="\r
\r
# Example 1: Check if a number is positive\r
number=10\r
if [ $number -gt 0 ]; then\r
    echo "Number $number is positive"\r
fi\r
\r
# Example 2: Check if a file exists\r
filename="data.txt"\r
if [ -f "$filename" ]; then\r
    echo "File $filename exists"\r
fi\r
\r
# Example 3: Check if a string is empty\r
name="Swadeep"\r
if [ -n "$name" ]; then\r
    echo "Name is: $name"\r
fi\r
\r
# Example 4: Check if user is root\r
if [ "$(whoami)" = "root" ]; then\r
    echo "You are running as root"\r
fi\r
\r
# Example 5: One-line if (using ; then)\r
age=20\r
if [ $age -ge 18 ]; then echo "Adult"; fi`,g=`# topic11_files/if_else.sh\r
#!/bin/bash\r
# if-else statement examples\r
\r
echo "=== if-else Statements ==="\r
\r
# Example 1: Check file existence with else\r
file="report.txt"\r
if [ -f "$file" ]; then\r
    echo "File $file exists"\r
else\r
    echo "File $file does not exist"\r
    echo "Creating it now..."\r
    touch "$file"\r
fi\r
\r
# Example 2: Number comparison with else\r
score=85\r
if [ $score -ge 60 ]; then\r
    echo "Score: $score - PASS"\r
else\r
    echo "Score: $score - FAIL"\r
fi\r
\r
# Example 3: String comparison with else\r
user="abhronila"\r
if [ "$user" = "admin" ]; then\r
    echo "Welcome, administrator"\r
else\r
    echo "Welcome, regular user $user"\r
fi\r
\r
# Example 4: Check directory with else\r
dir="/home/students"\r
if [ -d "$dir" ]; then\r
    echo "Directory $dir exists"\r
    echo "Contents:"\r
    ls "$dir"\r
else\r
    echo "Directory $dir does not exist"\r
fi\r
\r
# Example 5: Check command success with else\r
if ping -c 1 google.com &> /dev/null; then\r
    echo "Network is reachable"\r
else\r
    echo "Network is not reachable"\r
fi`,b=`# topic11_files/if_elif_else.sh\r
#!/bin/bash\r
# if-elif-else chain examples\r
\r
echo "=== if-elif-else Chains ==="\r
\r
# Example 1: Grade classification\r
score=85\r
if [ $score -ge 90 ]; then\r
    grade="A"\r
    echo "Excellent! Grade: $grade"\r
elif [ $score -ge 80 ]; then\r
    grade="B"\r
    echo "Good! Grade: $grade"\r
elif [ $score -ge 70 ]; then\r
    grade="C"\r
    echo "Average. Grade: $grade"\r
elif [ $score -ge 60 ]; then\r
    grade="D"\r
    echo "Passing. Grade: $grade"\r
else\r
    grade="F"\r
    echo "Failed. Grade: $grade"\r
fi\r
\r
# Example 2: File type checking\r
file="document.pdf"\r
if [ -f "$file" ]; then\r
    echo "$file is a regular file"\r
elif [ -d "$file" ]; then\r
    echo "$file is a directory"\r
elif [ -L "$file" ]; then\r
    echo "$file is a symbolic link"\r
else\r
    echo "$file does not exist or is special"\r
fi\r
\r
# Example 3: User role checking\r
user_role="editor"\r
if [ "$user_role" = "admin" ]; then\r
    echo "Full system access granted"\r
elif [ "$user_role" = "editor" ]; then\r
    echo "Content editing access granted"\r
elif [ "$user_role" = "viewer" ]; then\r
    echo "Read-only access granted"\r
else\r
    echo "No access granted"\r
fi\r
\r
# Example 4: Time-based greeting\r
hour=$(date +%H)\r
if [ $hour -lt 12 ]; then\r
    echo "Good morning!"\r
elif [ $hour -lt 17 ]; then\r
    echo "Good afternoon!"\r
elif [ $hour -lt 21 ]; then\r
    echo "Good evening!"\r
else\r
    echo "Good night!"\r
fi\r
\r
# Example 5: Complex condition with logical operators\r
age=25\r
has_license=true\r
\r
if [ $age -ge 18 ] && [ "$has_license" = "true" ]; then\r
    echo "You can drive"\r
elif [ $age -ge 18 ] && [ "$has_license" = "false" ]; then\r
    echo "You need a license to drive"\r
else\r
    echo "You're too young to drive"\r
fi`,f=`# topic11_files/test_command.sh\r
#!/bin/bash\r
# test command examples\r
\r
echo "=== test Command Examples ==="\r
\r
# Example 1: Basic test command (same as [ ])\r
x=10\r
y=20\r
\r
if test $x -lt $y; then\r
    echo "$x is less than $y"\r
fi\r
\r
# Example 2: String comparison with test\r
name="Debangshu"\r
if test "$name" = "Debangshu"; then\r
    echo "Hello, $name"\r
fi\r
\r
# Example 3: File tests with test\r
file="script.sh"\r
if test -f "$file"; then\r
    echo "$file is a regular file"\r
fi\r
\r
if test -x "$file"; then\r
    echo "$file is executable"\r
fi\r
\r
# Example 4: Combining tests with logical operators\r
age=25\r
if test $age -ge 18 -a $age -le 65; then\r
    echo "Working age"\r
fi\r
\r
# Example 5: Negation with test\r
if ! test -d "/nonexistent"; then\r
    echo "/nonexistent is not a directory"\r
fi\r
\r
# Example 6: test vs [ ] comparison\r
echo -e "\\n=== test vs [ ] ==="\r
num=5\r
\r
# These are equivalent:\r
test $num -eq 5 && echo "test: Equal"\r
[ $num -eq 5 ] && echo "[ ]: Equal"\r
\r
# test command with -z (empty string)\r
empty=""\r
if test -z "$empty"; then\r
    echo "String is empty"\r
fi\r
\r
# test with -n (non-empty string)\r
nonempty="Hello"\r
if test -n "$nonempty"; then\r
    echo "String is not empty: $nonempty"\r
fi\r
\r
# Example 7: Exit status of test\r
test 10 -gt 5\r
echo "Exit status of 'test 10 -gt 5': $?"\r
\r
test 10 -lt 5\r
echo "Exit status of 'test 10 -lt 5': $?"`,u=`# topic11_files/brackets_comparison.sh\r
#!/bin/bash\r
# [ ] vs [[ ]] comparison\r
\r
echo "=== [ ] (test) vs [[ ]] (bash extended) ==="\r
\r
name="file.txt"\r
pattern="*.txt"\r
empty=""\r
spaced="hello world"\r
\r
echo -e "\\n1. Variable expansion (spaces):"\r
echo "   With [ ]:"\r
if [ $spaced = "hello world" ]; then\r
    echo "   [ ]: Strings are equal"\r
else\r
    echo "   [ ]: ERROR - needs quotes!"\r
fi\r
\r
if [ "$spaced" = "hello world" ]; then\r
    echo "   [ ] with quotes: Strings are equal"\r
fi\r
\r
echo "   With [[ ]]:"\r
if [[ $spaced = "hello world" ]]; then\r
    echo "   [[ ]]: Strings are equal (auto-quoting)"\r
fi\r
\r
echo -e "\\n2. Pattern matching:"\r
echo "   With [ ]:"\r
if [ "$name" = "*.txt" ]; then\r
    echo "   [ ]: Matches literally"\r
else\r
    echo "   [ ]: No match (literal comparison)"\r
fi\r
\r
echo "   With [[ ]]:"\r
if [[ $name == *.txt ]]; then\r
    echo "   [[ ]]: Pattern matches!"\r
fi\r
\r
echo -e "\\n3. Regex matching ([[ ]] only):"\r
email="user@example.com"\r
if [[ $email =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$ ]]; then\r
    echo "   [[ ]]: Valid email format"\r
fi\r
\r
echo -e "\\n4. Logical operators:"\r
x=10\r
y=20\r
echo "   With [ ]:"\r
if [ $x -lt 15 -a $y -gt 15 ]; then\r
    echo "   [ ]: Both conditions true with -a"\r
fi\r
\r
if [ $x -lt 15 ] && [ $y -gt 15 ]; then\r
    echo "   [ ]: Both conditions true with &&"\r
fi\r
\r
echo "   With [[ ]]:"\r
if [[ $x -lt 15 && $y -gt 15 ]]; then\r
    echo "   [[ ]]: Both conditions true with &&"\r
fi\r
\r
echo -e "\\n5. String comparison operators:"\r
str1="apple"\r
str2="banana"\r
echo "   With [[ ]]:"\r
if [[ $str1 < $str2 ]]; then\r
    echo "   [[ ]]: $str1 comes before $str2"\r
fi\r
\r
echo -e "\\n6. No word splitting in [[ ]]:"\r
files="file1 file2 file3"\r
if [[ $files == "file1 file2 file3" ]]; then\r
    echo "   [[ ]]: No word splitting issues"\r
fi\r
\r
echo -e "\\n7. Parentheses in conditions:"\r
num=15\r
if [[ $num -gt 10 && ($num -lt 20 || $num -eq 15) ]]; then\r
    echo "   [[ ]]: Complex logic works"\r
fi\r
\r
echo -e "\\n=== Recommendations ==="\r
echo "1. Use [ ] for POSIX compatibility"\r
echo "2. Use [[ ]] for bash scripts (better features)"\r
echo "3. Always quote variables in [ ]"\r
echo "4. [[ ]] handles empty variables better"`,j=`# topic11_files/condition_pitfalls.sh\r
#!/bin/bash\r
# Common conditional statement pitfalls\r
\r
echo "=== Common Condition Pitfalls ==="\r
\r
echo -e "\\n1. Missing spaces around [ ]:"\r
x=5\r
# WRONG: if [$x -eq 5]; then  # Syntax error\r
# RIGHT:\r
if [ $x -eq 5 ]; then\r
    echo "Correct: Spaces around [ ]"\r
fi\r
\r
echo -e "\\n2. Using wrong operators:"\r
string="hello"\r
number=10\r
# WRONG: if [ $string -eq "hello" ]; then  # -eq is for numbers\r
# RIGHT:\r
if [ "$string" = "hello" ]; then\r
    echo "Correct: = for strings"\r
fi\r
\r
# WRONG: if [ $number = 10 ]; then  # = is for strings\r
# RIGHT:\r
if [ $number -eq 10 ]; then\r
    echo "Correct: -eq for numbers"\r
fi\r
\r
echo -e "\\n3. Unquoted variables with spaces:"\r
filename="my file.txt"\r
touch "$filename"\r
# WRONG: if [ -f $filename ]; then  # Expands to two arguments\r
# RIGHT:\r
if [ -f "$filename" ]; then\r
    echo "File exists (quoted variable)"\r
fi\r
rm "$filename"\r
\r
echo -e "\\n4. Forgetting then or fi:"\r
# WRONG: if [ true ] echo "yes"  # Missing then\r
# RIGHT:\r
if [ true ]; then echo "yes"; fi\r
\r
echo -e "\\n5. Using && inside [ ] incorrectly:"\r
a=1\r
b=2\r
# WRONG: if [ $a -eq 1 && $b -eq 2 ]; then  # Use -a or separate [ ]\r
# RIGHT:\r
if [ $a -eq 1 -a $b -eq 2 ]; then\r
    echo "Both conditions true (-a)"\r
fi\r
\r
# Also RIGHT:\r
if [ $a -eq 1 ] && [ $b -eq 2 ]; then\r
    echo "Both conditions true (&& between [ ])"\r
fi\r
\r
echo -e "\\n6. Testing empty strings incorrectly:"\r
empty=""\r
# PROBLEMATIC: if [ $empty ]; then  # Expands to [ ] which is false\r
# BETTER:\r
if [ -n "$empty" ]; then\r
    echo "String is not empty"\r
else\r
    echo "String is empty (correct test)"\r
fi\r
\r
echo -e "\\n7. Arithmetic in [ ]:"\r
x=5\r
y=10\r
# WRONG: if [ $x * 2 -eq $y ]; then  # * expands as glob\r
# RIGHT:\r
if [ $((x * 2)) -eq $y ]; then\r
    echo "Arithmetic works with $(( ))"\r
fi\r
\r
echo -e "\\n8. Comparing floats (bash only does integers):"\r
float1=3.14\r
float2=3.14\r
# WRONG: if [ $float1 -eq $float2 ]; then  # Error: integer expected\r
echo "Note: Bash only handles integer arithmetic"\r
\r
echo -e "\\n9. File test with variables that might be empty:"\r
file=""\r
# DANGEROUS: if [ -f $file ]; then  # Expands to [ -f ] which is true!\r
# SAFER:\r
if [ -n "$file" ] && [ -f "$file" ]; then\r
    echo "File exists"\r
else\r
    echo "Either file is empty or doesn't exist"\r
fi\r
\r
echo -e "\\n10. Using single = in [[ ]] for pattern match:"\r
filename="data.txt"\r
# WRONG: if [[ $filename = "*.txt" ]]; then  # Literal match\r
# RIGHT:\r
if [[ $filename == *.txt ]]; then\r
    echo "Pattern matches with =="\r
fi\r
\r
echo -e "\\n=== Best Practices Summary ==="\r
echo "1. Always quote variables in [ ]"\r
echo "2. Use [[ ]] in bash scripts"\r
echo "3. Check for empty variables before using"\r
echo "4. Use correct operators for data types"\r
echo "5. Test your conditions with edge cases"`,w=()=>{const[s,d]=i.useState("basic"),[n,o]=i.useState("string"),c={basic:"Basic if Statement",ifelse:"if-else Statement",elif:"if-elif-else Chain",test:"test Command",brackets:"[ ] vs [[ ]]",pitfalls:"Common Pitfalls"},x=[{id:"string",name:"String Conditions",icon:"🔤"},{id:"numeric",name:"Numeric Conditions",icon:"🔢"},{id:"file",name:"File Tests",icon:"📁"},{id:"logical",name:"Logical Operators",icon:"🔀"}],h=()=>e.jsx("div",{className:"w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-800 dark:to-rose-900/20 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-lg hover:border-rose-300 dark:hover:border-rose-500",children:e.jsxs("svg",{viewBox:"0 0 800 500",className:"w-full h-auto","aria-label":"Conditional Statement Flow Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"conditionGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#3B82F6",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#8B5CF6",stopOpacity:"0.9"})]}),e.jsxs("linearGradient",{id:"trueGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10B981",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.9"})]}),e.jsxs("linearGradient",{id:"falseGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#EF4444",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#DC2626",stopOpacity:"0.9"})]}),e.jsxs("linearGradient",{id:"elifGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#F59E0B",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#D97706",stopOpacity:"0.9"})]}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6B7280"})}),e.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("text",{x:"400",y:"40",textAnchor:"middle",fill:"#1F2937",fontSize:"20",fontWeight:"bold",className:"dark:fill-gray-200",children:"Conditional Statement Decision Flow"}),e.jsx("circle",{cx:"400",cy:"100",r:"30",fill:"#3B82F6",stroke:"#1D4ED8",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"400",y:"105",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Start"}),e.jsxs("g",{transform:"translate(350 150)",children:[e.jsx("path",{d:"M50,0 L100,50 L50,100 L0,50 Z",fill:"url(#conditionGradient)",stroke:"#2563EB",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"50",y:"55",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Condition"}),e.jsx("text",{x:"50",y:"70",textAnchor:"middle",fill:"#DBEAFE",fontSize:"10",children:"if [ $age -ge 18 ]"})]}),e.jsxs("g",{children:[e.jsx("path",{d:"M400 180 Q400 200, 250 250",stroke:"#10B981",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",className:"motion-safe:animate-pulse"}),e.jsx("text",{x:"320",y:"220",fill:"#059669",fontSize:"12",fontWeight:"bold",children:"TRUE"}),e.jsx("rect",{x:"150",y:"250",width:"200",height:"60",rx:"10",fill:"url(#trueGradient)",stroke:"#059669",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"250",y:"280",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"if Block"}),e.jsx("text",{x:"250",y:"295",textAnchor:"middle",fill:"#D1FAE5",fontSize:"10",children:'echo "Adult"'})]}),e.jsxs("g",{children:[e.jsx("path",{d:"M400 180 Q400 200, 550 250",stroke:"#EF4444",strokeWidth:"3",fill:"none",markerEnd:"url(#arrowhead)",className:"motion-safe:animate-pulse"}),e.jsx("text",{x:"480",y:"220",fill:"#DC2626",fontSize:"12",fontWeight:"bold",children:"FALSE"}),e.jsx("rect",{x:"450",y:"250",width:"200",height:"60",rx:"10",fill:"url(#falseGradient)",stroke:"#DC2626",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"550",y:"280",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"else Block"}),e.jsx("text",{x:"550",y:"295",textAnchor:"middle",fill:"#FECACA",fontSize:"10",children:'echo "Minor"'})]}),e.jsxs("g",{transform:"translate(0 200)",children:[e.jsx("rect",{x:"300",y:"200",width:"200",height:"60",rx:"10",fill:"url(#elifGradient)",stroke:"#D97706",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"400",y:"225",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"elif Condition"}),e.jsx("text",{x:"400",y:"245",textAnchor:"middle",fill:"#FEF3C7",fontSize:"10",children:"elif [ $score -ge 60 ]"})]}),e.jsxs("g",{children:[e.jsx("circle",{cx:"250",cy:"350",r:"25",fill:"#10B981",stroke:"#059669",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"250",y:"355",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Exit"}),e.jsx("text",{x:"250",y:"380",textAnchor:"middle",fill:"#059669",fontSize:"10",children:"(if path)"}),e.jsx("circle",{cx:"550",cy:"350",r:"25",fill:"#EF4444",stroke:"#DC2626",strokeWidth:"2",className:"hover:stroke-[3] hover:filter hover:drop-shadow-lg transition-all duration-300"}),e.jsx("text",{x:"550",y:"355",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Exit"}),e.jsx("text",{x:"550",y:"380",textAnchor:"middle",fill:"#DC2626",fontSize:"10",children:"(else path)"})]}),e.jsxs("g",{transform:"translate(50 400)",children:[e.jsx("rect",{x:"0",y:"0",width:"700",height:"80",rx:"8",fill:"#1F2937",fillOpacity:"0.1",stroke:"#4B5563",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"20",fill:"#374151",fontSize:"12",fontWeight:"bold",className:"dark:fill-gray-200",children:"Basic Syntax:"}),e.jsx("text",{x:"40",y:"40",fill:"#3B82F6",fontSize:"11",fontFamily:"monospace",children:"if condition; then commands; fi"}),e.jsx("text",{x:"20",y:"60",fill:"#374151",fontSize:"12",fontWeight:"bold",className:"dark:fill-gray-200",children:"With else:"}),e.jsx("text",{x:"40",y:"80",fill:"#10B981",fontSize:"11",fontFamily:"monospace",children:"if condition; then commands; else other; fi"})]})]})});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-6",children:[e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-indigo-600 dark:from-rose-400 dark:to-indigo-400",children:"Topic 11: Conditional Statements"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400",children:"if, elif, else, test, [ ] and [[ ]] - Making decisions in shell scripts"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.1s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-rose-700 dark:text-rose-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-rose-100 dark:bg-rose-900 rounded-lg",children:"📘"}),"The Art of Decision Making in Shell"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",children:["Conditional statements allow your scripts to ",e.jsx("strong",{children:"make decisions based on conditions"}),". They transform static scripts into intelligent programs that can adapt to different situations, validate inputs, handle errors, and control program flow."]}),e.jsxs("div",{className:"mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 rounded",children:[e.jsx("h3",{className:"font-bold text-rose-800 dark:text-rose-300 mb-2",children:"Real-world Analogy"}),e.jsxs("p",{className:"text-rose-700 dark:text-rose-400",children:["Imagine ",e.jsx("strong",{children:"Swadeep"})," deciding whether to take an umbrella: ",e.jsx("code",{className:"bg-rose-100 dark:bg-rose-800 px-1 rounded",children:'if [ "$weather" = "rainy" ]; then take umbrella; else leave umbrella; fi'}),". The script makes similar decisions based on conditions."]})]})]}),e.jsx("section",{className:"animate-[fadeInUp_0.8s_ease-out_0.2s_both]",children:e.jsx(h,{})}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.3s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-indigo-700 dark:text-indigo-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg",children:"🔧"}),"Types of Conditions & Operators"]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:x.map((r,t)=>e.jsxs("button",{onClick:()=>o(r.id),className:l("px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2",n===r.id?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),style:{animationDelay:`${.3+t*.1}s`},children:[e.jsx("span",{className:"text-lg",children:r.icon}),r.name]},r.id))}),e.jsxs("div",{className:"animate-[fadeIn_0.5s_ease-out]",children:[n==="string"&&e.jsxs("div",{className:"p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-4",children:"String Comparison Operators"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:"= or =="}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"Equal to"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:"!="}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"Not equal to"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:"-z"}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"String is empty"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:"-n"}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"String is not empty"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:"<"}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"Less than (ASCII)"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-blue-700 dark:text-blue-300",children:">"}),e.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"Greater than (ASCII)"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-100/50 dark:bg-blue-900/30 rounded",children:e.jsxs("p",{className:"text-sm text-blue-700 dark:text-blue-400",children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("code",{className:"bg-blue-200 dark:bg-blue-800 px-1 rounded",children:'if [ "$name" = "Swadeep" ]; then'})]})})]}),n==="numeric"&&e.jsxs("div",{className:"p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700",children:[e.jsx("h3",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-4",children:"Numeric Comparison Operators"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-eq"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Equal to"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-ne"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Not equal to"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-lt"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Less than"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-le"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Less or equal"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-gt"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Greater than"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:"-ge"}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"Greater or equal"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-emerald-100/50 dark:bg-emerald-900/30 rounded",children:e.jsxs("p",{className:"text-sm text-emerald-700 dark:text-emerald-400",children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("code",{className:"bg-emerald-200 dark:bg-emerald-800 px-1 rounded",children:"if [ $age -ge 18 ]; then"})]})})]}),n==="file"&&e.jsxs("div",{className:"p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700",children:[e.jsx("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-4",children:"File Test Operators"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-e"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"File exists"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-f"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Regular file"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-d"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Directory"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-r"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Readable"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-w"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Writable"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-amber-700 dark:text-amber-300",children:"-x"}),e.jsx("span",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Executable"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-amber-100/50 dark:bg-amber-900/30 rounded",children:e.jsxs("p",{className:"text-sm text-amber-700 dark:text-amber-400",children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("code",{className:"bg-amber-200 dark:bg-amber-800 px-1 rounded",children:'if [ -f "/home/abhronila/data.txt" ]; then'})]})})]}),n==="logical"&&e.jsxs("div",{className:"p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300 mb-4",children:"Logical Operators"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"&& or -a"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"Logical AND"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"|| or -o"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"Logical OR"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"!"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"Logical NOT"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"( )"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"Grouping"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"-o"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"OR (old style)"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded",children:[e.jsx("code",{className:"text-sm text-purple-700 dark:text-purple-300",children:"-a"}),e.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:"AND (old style)"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-100/50 dark:bg-purple-900/30 rounded",children:e.jsxs("p",{className:"text-sm text-purple-700 dark:text-purple-400",children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("code",{className:"bg-purple-200 dark:bg-purple-800 px-1 rounded",children:'if [ -f "$file" ] && [ -r "$file" ]; then'})]})})]})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"test Command"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["The original command for testing conditions. ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:'test "$x" -eq 5'})," is equivalent to ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:'[ "$x" -eq 5 ]'})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"[ ] vs [[ ]]"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"[ ]"})," is POSIX compatible. ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"[[ ]]"})," is bash-specific with enhanced features like regex matching."]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.4s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-purple-100 dark:bg-purple-900 rounded-lg",children:"📝"}),"Interactive Examples"]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:Object.entries(c).map(([r,t],m)=>e.jsx("button",{onClick:()=>d(r),className:l("px-4 py-2 rounded-lg font-medium transition-all duration-300",s===r?"bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),style:{animationDelay:`${.5+m*.1}s`},children:t},r))}),e.jsxs("div",{className:"animate-[fadeIn_0.5s_ease-out]",children:[s==="basic"&&e.jsx(a,{fileModule:p,title:"Basic if Statement",highlightLines:[2,4,6]}),s==="ifelse"&&e.jsx(a,{fileModule:g,title:"if-else Statement",highlightLines:[2,6,10]}),s==="elif"&&e.jsx(a,{fileModule:b,title:"if-elif-else Chain",highlightLines:[2,6,10,14]}),s==="test"&&e.jsx(a,{fileModule:f,title:"test Command Usage",highlightLines:[2,6,10]}),s==="brackets"&&e.jsx(a,{fileModule:u,title:"[ ] vs [[ ]] Comparison",highlightLines:[2,8,14]}),s==="pitfalls"&&e.jsx(a,{fileModule:j,title:"Common Condition Pitfalls",highlightLines:[2,8,14,20]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.5s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-red-700 dark:text-red-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-red-100 dark:bg-red-900 rounded-lg",children:"⚠️"}),"Common Pitfalls & Mistakes"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("h3",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"1. Missing Spaces in [ ]"}),e.jsxs("p",{className:"text-red-700 dark:text-red-400",children:[e.jsx("code",{className:"bg-red-100 dark:bg-red-800 px-1 rounded",children:'[ "$x" = 5]'})," will fail. Must be ",e.jsx("code",{className:"bg-red-100 dark:bg-red-800 px-1 rounded",children:'[ "$x" = 5 ]'})," with spaces around brackets and operators."]})]}),e.jsxs("div",{className:"p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded",children:[e.jsx("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"2. Using Wrong Comparison Operators"}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-400",children:["Using ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"="})," for numbers or ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"-eq"})," for strings. Use ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"="})," for strings, ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"-eq"})," for numbers."]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-2",children:"3. Unquoted Variables with Spaces"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-400",children:[e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:'[ $name = "John Doe" ]'})," fails if $name has spaces. Use ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:'[ "$name" = "John Doe" ]'})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300 mb-2",children:"4. Forgetting then and fi"}),e.jsxs("p",{className:"text-purple-700 dark:text-purple-400",children:["Every ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"if"})," needs ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"then"})," and ends with ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"fi"}),". ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"elif"})," also needs ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"then"}),"."]})]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.6s_both]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-green-100 dark:bg-green-900 rounded-lg",children:"✅"}),"Best Practices for Conditionals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"1."})," Always Quote Variables"]}),e.jsxs("p",{className:"text-green-700 dark:text-green-400 text-sm",children:["Use ",e.jsx("code",{className:"bg-green-100 dark:bg-green-800 px-1 rounded",children:'[ "$var" = "value" ]'})," not ",e.jsx("code",{className:"bg-green-100 dark:bg-green-800 px-1 rounded",children:'[ $var = "value" ]'})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"2."})," Use [[ ]] for Bash Scripts"]}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"[[ ]]"})," has better features and fewer surprises than ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"[ ]"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"3."})," Check Exit Status Directly"]}),e.jsxs("p",{className:"text-purple-700 dark:text-purple-400 text-sm",children:["Use ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"if command; then"})," instead of ",e.jsx("code",{className:"bg-purple-100 dark:bg-purple-800 px-1 rounded",children:"if [ $? -eq 0 ]; then"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300",children:[e.jsxs("h3",{className:"font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"4."})," Prefer Case for Multiple Values"]}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-400 text-sm",children:["For many string comparisons, ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"case"})," is cleaner than long ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"if-elif"})," chains."]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Tip from Shyamnagar Systems"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["At Shyamnagar Systems, we use ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"set -euo pipefail"})," at the start of scripts. This makes scripts exit on errors, which works well with conditionals for error handling."]})]})]}),e.jsx("section",{className:"bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 shadow-xl animate-[fadeInUp_0.8s_ease-out_0.7s_both] hover:shadow-2xl transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Teacher's Note"}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"font-bold text-white mb-2",children:"The Conditional Mindset"}),e.jsxs("p",{className:"text-white/90 leading-relaxed",children:["Conditionals are where scripts gain ",e.jsx("strong",{children:"intelligence"}),". Think of them as decision points in a flowchart. The key is understanding that every condition evaluates to either true (exit status 0) or false (exit status non-zero)."]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsxs("p",{className:"text-white/80 text-sm",children:["When teaching ",e.jsx("strong",{children:"Tuhina at Naihati College"}),`, I emphasize: "Read conditions aloud: 'If variable age is greater than or equal to 18, then...'"`]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsxs("p",{className:"text-white/80 text-sm",children:["The single most important rule: ",e.jsx("strong",{children:"Always test your edge cases"}),". What if the variable is empty? What if it has spaces?"]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),e.jsx("p",{className:"text-white/80 text-sm",children:"Remember: In shell, success is 0, failure is non-zero. This is opposite from many programming languages but consistent with Unix philosophy."})]})]}),e.jsx("div",{className:"mt-6 pt-4 border-t border-white/30",children:e.jsxs("div",{className:"text-white/70 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," • 27 years experience"]}),e.jsx("p",{children:"sukantahui@codernaccotax.co.in • 7003756860"}),e.jsx("p",{children:"Expertise: Shell Scripting, System Administration, DevOps"})]})})]})]})]})})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.2s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300",children:"⚡"}),"Quick Reference"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-rose-800/30 rounded-lg border border-rose-700",children:[e.jsx("h3",{className:"font-bold text-rose-300 mb-2 text-sm",children:"Basic Syntax"}),e.jsx("code",{className:"text-xs text-rose-200 block bg-rose-900/50 p-2 rounded font-mono",children:`if condition; then
  commands
fi`})]}),e.jsxs("div",{className:"p-3 bg-indigo-800/30 rounded-lg border border-indigo-700",children:[e.jsx("h3",{className:"font-bold text-indigo-300 mb-2 text-sm",children:"With else"}),e.jsx("code",{className:"text-xs text-indigo-200 block bg-indigo-900/50 p-2 rounded font-mono",children:`if condition; then
  commands
else
  other_commands
fi`})]}),e.jsxs("div",{className:"p-3 bg-purple-800/30 rounded-lg border border-purple-700",children:[e.jsx("h3",{className:"font-bold text-purple-300 mb-2 text-sm",children:"With elif"}),e.jsx("code",{className:"text-xs text-purple-200 block bg-purple-900/50 p-2 rounded font-mono",children:`if condition1; then
  commands1
elif condition2; then
  commands2
else
  default_commands
fi`})]}),e.jsxs("div",{className:"p-3 bg-emerald-800/30 rounded-lg border border-emerald-700",children:[e.jsx("h3",{className:"font-bold text-emerald-300 mb-2 text-sm",children:"One-liner"}),e.jsx("code",{className:"text-xs text-emerald-200 block bg-emerald-900/50 p-2 rounded font-mono",children:'[ -f file.txt ] && echo "Exists" || echo "Missing"'})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-700/50 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-white mb-2 text-sm",children:"Memory Aid"}),e.jsxs("p",{className:"text-gray-300 text-xs",children:[e.jsx("strong",{children:"if"})," starts it",e.jsx("br",{}),e.jsx("strong",{children:"then"})," does it",e.jsx("br",{}),e.jsx("strong",{children:"elif"})," tries again",e.jsx("br",{}),e.jsx("strong",{children:"else"})," does other",e.jsx("br",{}),e.jsx("strong",{children:"fi"})," ends it"]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-indigo-800 to-purple-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.3s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300",children:"🎯"}),"Operator Quick Guide"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-indigo-700/30 rounded border border-indigo-600",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-indigo-300",children:"String equal"}),e.jsx("code",{className:"text-xs text-indigo-200 bg-indigo-800 px-2 py-1 rounded",children:"="})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-indigo-300",children:"Numeric equal"}),e.jsx("code",{className:"text-xs text-indigo-200 bg-indigo-800 px-2 py-1 rounded",children:"-eq"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-700/30 rounded border border-purple-600",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-purple-300",children:"File exists"}),e.jsx("code",{className:"text-xs text-purple-200 bg-purple-800 px-2 py-1 rounded",children:"-e"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-purple-300",children:"Directory"}),e.jsx("code",{className:"text-xs text-purple-200 bg-purple-800 px-2 py-1 rounded",children:"-d"})]})]}),e.jsxs("div",{className:"p-3 bg-rose-700/30 rounded border border-rose-600",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-rose-300",children:"AND (bash)"}),e.jsx("code",{className:"text-xs text-rose-200 bg-rose-800 px-2 py-1 rounded",children:"&&"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-rose-300",children:"OR (bash)"}),e.jsx("code",{className:"text-xs text-rose-200 bg-rose-800 px-2 py-1 rounded",children:"||"})]})]}),e.jsxs("div",{className:"p-3 bg-emerald-700/30 rounded border border-emerald-600",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-emerald-300",children:"Empty string"}),e.jsx("code",{className:"text-xs text-emerald-200 bg-emerald-800 px-2 py-1 rounded",children:"-z"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-emerald-300",children:"Non-empty"}),e.jsx("code",{className:"text-xs text-emerald-200 bg-emerald-800 px-2 py-1 rounded",children:"-n"})]})]})]}),e.jsx("div",{className:"mt-6 p-3 bg-purple-700/40 rounded-lg",children:e.jsxs("p",{className:"text-purple-200 text-xs",children:[e.jsx("strong",{children:"Pro Tip:"})," In [[ ]], use ",e.jsx("code",{className:"bg-purple-800 px-1 rounded",children:"=="})," for pattern matching: ",e.jsx("code",{className:"bg-purple-800 px-1 rounded",children:"[[ $file == *.txt ]]"})]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-800 to-green-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.4s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300",children:"📋"}),"Conditional Checklist"]}),e.jsx("div",{className:"space-y-3",children:["Are all variables quoted?","Correct operator for data type?","Spaces around [ ] and operators?","then and fi present?","Tested with empty values?","Tested with spaces in values?","Using [[ ]] for bash scripts?","Exit status checked properly?"].map((r,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-emerald-700/30 rounded-lg border border-emerald-600 hover:border-emerald-400 transition-all duration-300 animate-[fadeIn_0.5s_ease-out]",style:{animationDelay:`${.5+t*.1}s`},children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-400 bg-gray-800 border-gray-600 rounded"}),e.jsx("span",{className:"text-emerald-100 text-sm",children:r})]},t))}),e.jsxs("div",{className:"mt-6 p-4 bg-emerald-700/40 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-white mb-2 text-sm",children:"Debugging Tip"}),e.jsxs("p",{className:"text-emerald-200 text-xs",children:["Add ",e.jsx("code",{className:"bg-emerald-800 px-1 rounded",children:"set -x"})," before conditionals to see how they evaluate."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-pink-800 to-rose-900 rounded-2xl p-6 shadow-xl hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.5s_both] group",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300",children:"💡"}),"Think About..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-pink-700/30 rounded-lg border border-pink-600 hover:border-pink-400 transition-all duration-300",children:e.jsxs("p",{className:"text-pink-100 text-sm italic",children:[`"What's the difference between `,e.jsx("code",{className:"bg-pink-800/50 px-1 rounded",children:"[ $x ]"})," and ",e.jsx("code",{className:"bg-pink-800/50 px-1 rounded",children:'[ -n "$x" ]'}),' when $x is empty?"']})}),e.jsx("div",{className:"p-4 bg-rose-700/30 rounded-lg border border-rose-600 hover:border-rose-400 transition-all duration-300",children:e.jsxs("p",{className:"text-rose-100 text-sm italic",children:['"How would ',e.jsx("strong",{children:"Abhronila"}),` write a script that checks if a student's score is between 60 and 100 (inclusive)?"`]})}),e.jsx("div",{className:"p-4 bg-fuchsia-700/30 rounded-lg border border-fuchsia-600 hover:border-fuchsia-400 transition-all duration-300",children:e.jsxs("p",{className:"text-fuchsia-100 text-sm italic",children:['"Try: ',e.jsx("code",{className:"bg-fuchsia-800/50 px-1 rounded",children:"if [ ]; then echo true; else echo false; fi"}),' - what happens and why?"']})}),e.jsx("div",{className:"p-4 bg-red-700/30 rounded-lg border border-red-600 hover:border-red-400 transition-all duration-300",children:e.jsxs("p",{className:"text-red-100 text-sm italic",children:['"What advantage does ',e.jsx("code",{className:"bg-red-800/50 px-1 rounded",children:"[[ $file == *.txt ]]"})," have over ",e.jsx("code",{className:"bg-red-800/50 px-1 rounded",children:'[ "$file" = "*.txt" ]'}),'?"']})})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{className:"px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium",children:"Explore These Questions"})})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-700 animate-[fadeIn_0.8s_ease-out_0.8s_both]",children:[e.jsxs("a",{href:"#prev",className:"px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 group",children:[e.jsx("span",{className:"group-hover:-translate-x-1 transition-transform duration-300",children:"←"}),"Previous: Quoting Rules"]}),e.jsx("div",{className:"text-center text-gray-600 dark:text-gray-400 text-sm",children:"Topic 11 of 41 • Conditional Statements"}),e.jsxs("a",{href:"#next",className:"px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300 flex items-center gap-2 group",children:["Next: File and Directory Tests",e.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{w as default};
